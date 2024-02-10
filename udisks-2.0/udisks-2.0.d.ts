/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './udisks-2.0-ambient.d.ts';
import './udisks-2.0-import.d.ts';
/**
 * UDisks-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace UDisks {
    /**
     * Error codes for the #UDISKS_ERROR error domain and the
     * corresponding D-Bus error names.
     */
    class Error extends GLib.Error {
        // Own fields of UDisks-2.0.Error

        /**
         * The operation failed.
         */
        FAILED: number;
        /**
         * The operation was cancelled.
         */
        CANCELLED: number;
        /**
         * The operation has already been cancelled.
         */
        ALREADY_CANCELLED: number;
        /**
         * Not authorized to perform the requested operation.
         */
        NOT_AUTHORIZED: number;
        /**
         * Like %UDISKS_ERROR_NOT_AUTHORIZED but authorization can be obtained through e.g. authentication.
         */
        NOT_AUTHORIZED_CAN_OBTAIN: number;
        /**
         * Like %UDISKS_ERROR_NOT_AUTHORIZED but an authentication was shown and the user dismissed it.
         */
        NOT_AUTHORIZED_DISMISSED: number;
        /**
         * The device is already mounted.
         */
        ALREADY_MOUNTED: number;
        /**
         * The device is not mounted.
         */
        NOT_MOUNTED: number;
        /**
         * Not permitted to use the requested option.
         */
        OPTION_NOT_PERMITTED: number;
        /**
         * The device is mounted by another user.
         */
        MOUNTED_BY_OTHER_USER: number;
        /**
         * The device is already unmounting.
         */
        ALREADY_UNMOUNTING: number;
        /**
         * The operation is not supported due to missing driver/tool support.
         */
        NOT_SUPPORTED: number;
        /**
         * The operation timed out.
         */
        TIMED_OUT: number;
        /**
         * The operation would wake up a disk that is in a deep-sleep state.
         */
        WOULD_WAKEUP: number;
        /**
         * Attempting to unmount a device that is busy.
         */
        DEVICE_BUSY: number;
        ISCSI_DAEMON_TRANSPORT_FAILED: number;
        ISCSI_HOST_NOT_FOUND: number;
        ISCSI_IDMB: number;
        ISCSI_LOGIN_FAILED: number;
        ISCSI_LOGIN_AUTH_FAILED: number;
        ISCSI_LOGIN_FATAL: number;
        ISCSI_LOGOUT_FAILED: number;
        ISCSI_NO_FIRMWARE: number;
        ISCSI_NO_OBJECTS_FOUND: number;
        ISCSI_NOT_CONNECTED: number;
        ISCSI_TRANSPORT_FAILED: number;
        ISCSI_UNKNOWN_DISCOVERY_TYPE: number;

        // Constructors of UDisks-2.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of UDisks-2.0.Error

        static quark(): GLib.Quark;
    }

    const ERROR_NUM_ENTRIES: number;
    /**
     * The major version of the libudisks2 header files.
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version of the libudisks2 header files.
     */
    const MICRO_VERSION: number;
    /**
     * The minor version of the libudisks2 header files.
     */
    const MINOR_VERSION: number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function block_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function block_lvm2_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksBlockLVM2 interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function block_lvm2_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function block_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function drive_ata_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function drive_ata_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function drive_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function drive_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function encrypted_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function encrypted_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function error_quark(): GLib.Quark;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function filesystem_btrfs_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksFilesystemBTRFS interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function filesystem_btrfs_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function filesystem_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function filesystem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function job_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function job_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function logical_volume_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksLogicalVolume interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function logical_volume_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function loop_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function loop_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_btrfs_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksManagerBTRFS interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_btrfs_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_lvm2_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksManagerLVM2 interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_lvm2_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_nvme_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksManagerNVMe interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_nvme_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function mdraid_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function mdraid_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function nvme_controller_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksNVMeController interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function nvme_controller_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function nvme_fabrics_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksNVMeFabrics interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function nvme_fabrics_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function nvme_namespace_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksNVMeNamespace interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function nvme_namespace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function partition_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function partition_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function partition_table_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function partition_table_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function physical_volume_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksPhysicalVolume interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function physical_volume_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function swapspace_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function swapspace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function vdo_volume_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksVDOVolume interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function vdo_volume_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function volume_group_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksVolumeGroup interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function volume_group_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Flags describing a partition type.
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
         * Partition type indicates the partition is hidden (e.g. 'dos' type 0x1b "Hidden W95 FAT32"). Note that this is not the same as user-toggleable attributes/flags for a partition.
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
    module BlockLVM2Proxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksBlockLVM2Proxy structure contains only private data and should only be accessed using the provided API.
     */
    class BlockLVM2Proxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.BlockLVM2Proxy

        static new_finish(res: Gio.AsyncResult): BlockLVM2Proxy;

        static new_for_bus_finish(res: Gio.AsyncResult): BlockLVM2Proxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): BlockLVM2Proxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): BlockLVM2Proxy;

        // Owm methods of UDisks-2.0.BlockLVM2Proxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_lvm2_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_block_lvm2_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BlockLVM2Proxy> | null,
        ): void;
        /**
         * Like udisks_block_lvm2_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_lvm2_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_block_lvm2_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BlockLVM2Proxy> | null,
        ): void;
    }

    module BlockLVM2Skeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksBlockLVM2Skeleton structure contains only private data and should only be accessed using the provided API.
     */
    class BlockLVM2Skeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.BlockLVM2Skeleton

        static ['new'](): BlockLVM2Skeleton;
    }

    module BlockProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksBlockProxy structure contains only private data and should only be accessed using the provided API.
     */
    class BlockProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.BlockProxy

        static new_finish(res: Gio.AsyncResult): BlockProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): BlockProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): BlockProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): BlockProxy;

        // Owm methods of UDisks-2.0.BlockProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_block_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BlockProxy> | null,
        ): void;
        /**
         * Like udisks_block_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<BlockProxy> | null,
        ): void;
    }

    module BlockSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksBlockSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class BlockSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.BlockSkeleton

        static ['new'](): BlockSkeleton;
    }

    module Client {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #UDisksClient is used for accessing the UDisks service from a
     * client program.
     */
    class Client extends GObject.Object {
        // Own properties of UDisks-2.0.Client

        /**
         * The #GDBusConnection used to create the #UDisksClient:object-manager, or
         * %NULL if one wasn't specified during construction of the #UDisksClient (in
         * which case a system bus connection is used).
         */
        bus_connection: Gio.DBusConnection;
        /**
         * The #GDBusConnection used to create the #UDisksClient:object-manager, or
         * %NULL if one wasn't specified during construction of the #UDisksClient (in
         * which case a system bus connection is used).
         */
        busConnection: Gio.DBusConnection;
        /**
         * The #UDisksManager interface on the well-known
         * &lt;literal&gt;/org/freedesktop/UDisks2/Manager&lt;/literal&gt; object
         */
        readonly manager: Manager;
        /**
         * The #GDBusObjectManager used by the #UDisksClient instance.
         */
        readonly object_manager: Gio.DBusObjectManager;
        /**
         * The #GDBusObjectManager used by the #UDisksClient instance.
         */
        readonly objectManager: Gio.DBusObjectManager;

        // Constructors of UDisks-2.0.Client

        static new_finish(res: Gio.AsyncResult): Client;

        static new_for_connection_finish(res: Gio.AsyncResult): Client;

        static new_sync(cancellable?: Gio.Cancellable | null): Client;

        // Owm methods of UDisks-2.0.Client

        /**
         * Gets a human-readable and localized text string describing a
         * a job `operation`.
         *
         * For known job operation types, see the documentation for the
         * &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation"&gt;Job:Operation&lt;/link&gt;
         * D-Bus property.
         * @param operation A job operation name.
         */
        static get_job_description_from_operation(operation: string): string;
        /**
         * Asynchronously gets a #UDisksClient. When the operation is
         * finished, `callback` will be invoked in the &lt;link
         * linkend="g-main-context-push-thread-default"&gt;thread-default main
         * loop&lt;/link&gt; of the thread you are calling this method from.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback Function that will be called when the result is ready.
         */
        static new(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;
        /**
         * Like #udisks_client_new() but takes a #GDBusConnection which will be used
         * when connecting to the UDisks daemon over D-Bus. This is useful for unit
         * tests which may want to use #GTestDBus to create a D-Bus daemon on the
         * session bus.
         * @param connection a #GDBusConnection. If %NULL, a system bus   connection will be used.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback Function that will be called when the result is ready.
         */
        static new_for_connection(
            connection?: Gio.DBusConnection | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Client> | null,
        ): void;

        // Owm methods of UDisks-2.0.Client

        /**
         * Gets all RAID devices (e.g. &lt;filename&gt;/dev/md0&lt;/filename&gt; and &lt;filename&gt;/dev/md1&lt;/filename&gt;) for `raid`.
         *
         * This is usually only useful in &lt;ulink
         * url="http://en.wikipedia.org/wiki/Split-brain_(computing)"&gt;split-brain
         * situations&lt;/ulink&gt; — see udisks_client_get_block_for_mdraid() for
         * an example — and is normally used only to convey the problem in an
         * user interface.
         * @param raid A #UDisksMDRaid.
         * @returns A list of #UDisksBlock instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_all_blocks_for_mdraid(raid: MDRaid): Block[];
        /**
         * Gets the #UDisksBlock corresponding to `block_device_number,` if any.
         * @param block_device_number A #dev_t to get a #UDisksBlock for.
         * @returns A #UDisksBlock or %NULL if not found.
         */
        get_block_for_dev(block_device_number: number): Block;
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
         * @returns A #UDisksBlock or %NULL if the requested kind of block device is not available - use g_object_unref() to free the returned object.
         */
        get_block_for_drive(drive: Drive, get_physical: boolean): Block;
        /**
         * Gets all the #UDisksBlock instances with the given label, if any.
         * @param label The label.
         * @returns A list of #UDisksBlock instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_block_for_label(label: string): Block[];
        /**
         * Gets the RAID device (e.g. &lt;filename&gt;/dev/md0&lt;/filename&gt;) for `raid`.
         *
         * In the case of a &lt;ulink
         * url="http://en.wikipedia.org/wiki/Split-brain_(computing)"&gt;split-brain
         * syndrome&lt;/ulink&gt;, it is undefined which RAID device is
         * returned. For example this can happen if
         * &lt;filename&gt;/dev/sda&lt;/filename&gt; and &lt;filename&gt;/dev/sdb&lt;/filename&gt; are
         * components of a two-disk RAID-1 and &lt;filename&gt;/dev/md0&lt;/filename&gt;
         * and &lt;filename&gt;/dev/md1&lt;/filename&gt; are two degraded arrays, each one
         * using exactly one of the two devices. Use
         * udisks_client_get_all_blocks_for_mdraid() to get all RAID devices.
         * @param raid A #UDisksMDRaid.
         * @returns A #UDisksBlock or %NULL if no RAID device is running.
         */
        get_block_for_mdraid(raid: MDRaid): Block;
        /**
         * Gets all the #UDisksBlock instances with the given uuid, if any.
         * @param uuid The uuid.
         * @returns A list of #UDisksBlock instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_block_for_uuid(uuid: string): Block[];
        /**
         * If `block` is an unlocked encrypted device, gets the cleartext device.
         * @param block A #UDisksBlock.
         * @returns A #UDisksBlock or %NULL. Free with g_object_unref() when done with it.
         */
        get_cleartext_block(block: Block): Block;
        /**
         * Gets the #UDisksDrive that `block` belongs to, if any.
         * @param block A #UDisksBlock.
         * @returns A #UDisksDrive or %NULL if there is no #UDisksDrive for @block - free the returned object with g_object_unref().
         */
        get_drive_for_block(block: Block): Drive;
        /**
         * Gets information about a #UDisksDrive object that is suitable to
         * present in an user interface. The returned strings are localized.
         * @param drive A #UDisksDrive.
         */
        get_drive_info(drive: Drive): void;
        /**
         * Gets all siblings for `drive`.
         * @param drive A #UDisksDrive.
         * @returns A list of #UDisksDrive instances. The   returned list should be freed with g_list_free() after each element has been   freed with g_object_unref().
         */
        get_drive_siblings(drive: Drive): Drive[];
        /**
         * Gets a human readable localized string for `usage,` `type` and `version`.
         * @param usage Usage id e.g. "filesystem" or "crypto".
         * @param type Type e.g. "ext4" or "crypto_LUKS"
         * @param version Version.
         * @param long_string Whether to produce a long string.
         * @returns A string that should be freed with g_free().
         */
        get_id_for_display(usage: string, type: string, version: string, long_string: boolean): string;
        /**
         * Gets a human-readable and localized text string describing the
         * operation of `job`.
         *
         * For known job types, see the documentation for the
         * &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation"&gt;Job:Operation&lt;/link&gt;
         * D-Bus property.
         * @param job A #UDisksJob.
         * @returns A string that should be freed with g_free().
         */
        get_job_description(job: Job): string;
        /**
         * Gets all the #UDisksJob instances that reference `object,` if any.
         * @param object A #UDisksObject.
         * @returns A list of #UDisksJob instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_jobs_for_object(object: Object): Job[];
        /**
         * Gets the corresponding loop interface for `block`.
         *
         * This only works if `block` itself is a loop device or a partition of
         * a loop device.
         * @param block A #UDisksBlock.
         * @returns A #UDisksLoop or %NULL. Free with g_object_unref().
         */
        get_loop_for_block(block: Block): Loop;
        /**
         * Gets the #UDisksManager interface on the well-known
         * &lt;literal&gt;/org/freedesktop/UDisks2/Manager&lt;/literal&gt; object.
         * @returns A #UDisksManager or %NULL if the udisksd daemon is not currently running. Do not free, the instance is owned by @client.
         */
        get_manager(): Manager;
        /**
         * Gets the #UDisksMDRaid that `block` is the block device for, if any.
         * @param block A #UDisksBlock.
         * @returns A #UDisksMDRaid or %NULL if there is no   #UDisksMDRaid for @block or @block is not a MD-RAID block   device. Free the returned object with g_object_unref().
         */
        get_mdraid_for_block(block: Block): MDRaid;
        /**
         * Gets a human-readable string of the media described by
         * `media_compat`. The returned information is localized.
         * @param media_compat An array of media types.
         * @returns A string that should be freed with g_free() or %NULL if unknown.
         */
        get_media_compat_for_display(media_compat: string): string;
        /**
         * Gets the physical block devices that are part of `raid`.
         * @param raid A #UDisksMDRaid.
         * @returns A list of #UDisksBlock instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_members_for_mdraid(raid: MDRaid): Block[];
        /**
         * Convenience function for looking up an #UDisksObject for `object_path`.
         * @param object_path Object path.
         * @returns A #UDisksObject corresponding to @object_path or %NULL if not found. The returned object must be freed with g_object_unref().
         */
        get_object(object_path: string): Object;
        /**
         * Gets information about a #UDisksObject instance that is suitable to
         * present in an user interface. Information is returned in the
         * #UDisksObjectInfo object and is localized.
         * @param object A #UDisksObject.
         * @returns A #UDisksObjectInfo instance that should be freed with g_object_unref().
         */
        get_object_info(object: Object): ObjectInfo;
        /**
         * Gets the #GDBusObjectManager used by `client`.
         * @returns A #GDBusObjectManager. Do not free, the instance is owned by @client.
         */
        get_object_manager(): Gio.DBusObjectManager;
        /**
         * Gets information about `partition` that is suitable to present in an
         * user interface in a single line of text.
         *
         * The returned string is localized and includes things like the
         * partition type, flags (if any) and name (if any).
         * @param partition # #UDisksPartition.
         * @returns A string that should be freed with g_free().
         */
        get_partition_info(partition: Partition): string;
        /**
         * Gets the #UDisksPartitionTable corresponding to `partition`.
         * @param partition A #UDisksPartition.
         * @returns A #UDisksPartitionTable. Free with g_object_unref().
         */
        get_partition_table(partition: Partition): PartitionTable;
        /**
         * Gets a human readable localized string for `partition_table_type` and `partition_table_subtype`.
         * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
         * @param partition_table_subtype A partition table type e.g. 'dos' or 'gpt'.
         * @returns A description of @partition_table_type and @partition_table_subtype or %NULL.
         */
        get_partition_table_subtype_for_display(partition_table_type: string, partition_table_subtype: string): string;
        /**
         * Gets all known subtypes for `partition_table_type`.
         * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
         * @returns A %NULL-terminated array of strings. Only the container should be freed with g_free().
         */
        get_partition_table_subtypes(partition_table_type: string): string[];
        /**
         * Gets a human readable localized string for `partition_table_type`.
         * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
         * @returns A description of @partition_table_type or %NULL.
         */
        get_partition_table_type_for_display(partition_table_type: string): string;
        /**
         * Like udisks_client_get_partition_type_for_display() but also takes
         * the partition table subtype into account, if available. This is
         * useful in scenarios where different subtypes is using the same
         * partition type.
         * @param partition_table_type A partitioning type e.g. 'dos' or 'gpt'.
         * @param partition_table_subtype A partitioning subtype or %NULL.
         * @param partition_type A partition type.
         * @returns A description of @partition_type or %NULL if unknown.
         */
        get_partition_type_and_subtype_for_display(
            partition_table_type: string,
            partition_table_subtype: string,
            partition_type: string,
        ): string;
        /**
         * Gets a human readable localized string for `partiton_table_type` and `partition_type`.
         * @param partition_table_type A partitioning type e.g. 'dos' or 'gpt'.
         * @param partition_type A partition type.
         * @returns A description of @partition_type or %NULL if unknown.
         */
        get_partition_type_for_display(partition_table_type: string, partition_type: string): string;
        /**
         * Gets information about all known partition types for `partition_table_type` and `partition_table_subtype`.
         * @param partition_table_type A partition table type e.g. 'dos' or 'gpt'.
         * @param partition_table_subtype A partition table subtype or %NULL to get all known types.
         * @returns A list of   #UDisksPartitionTypeInfo instances. The returned list should be freed   with g_list_free() after freeing each element with udisks_partition_type_info_free().
         */
        get_partition_type_infos(
            partition_table_type: string,
            partition_table_subtype?: string | null,
        ): PartitionTypeInfo[];
        /**
         * Gets all partitions of `table`.
         * @param table A #UDisksPartitionTable.
         * @returns A list of #UDisksPartition instances. The   returned list should be freed with g_list_free() after each   element has been freed with g_object_unref().
         */
        get_partitions(table: PartitionTable): Partition[];
        /**
         * Utility function to get a human-readable string that represents `size`.
         * @param size Size in bytes
         * @param use_pow2 Whether power-of-two units should be used instead of power-of-ten units.
         * @param long_string Whether to produce a long string.
         * @returns A string that should be freed with g_free().
         */
        get_size_for_display(size: number, use_pow2: boolean, long_string: boolean): string;
        /**
         * Like udisks_client_get_object() but doesn't increase the reference
         * count on the returned #UDisksObject.
         *
         * &lt;warning&gt;The returned object is only valid until removed so it is only safe to use this function on the thread where `client` was constructed. Use udisks_client_get_object() if on another thread.&lt;/warning&gt;
         * @param object_path Object path.
         * @returns A #UDisksObject corresponding to @object_path or %NULL if not found.
         */
        peek_object(object_path: string): Object;
        /**
         * Queues up a #UDisksClient::changed signal and rate-limit it. See
         * the documentation for the #UDisksClient::changed property for more
         * information.
         */
        queue_changed(): void;
        /**
         * Blocks until all pending D-Bus messages have been delivered. Also
         * emits the (rate-limited) #UDisksClient::changed signal if changes
         * are currently pending.
         *
         * This is useful in two situations: 1. when using synchronous method
         * calls since e.g. D-Bus signals received while waiting for the reply
         * are queued up and dispatched after the synchronous call ends; and
         * 2. when using asynchronous calls where the return value references
         * a newly created object (such as the &lt;link
         * linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup"&gt;Manager.LoopSetup()&lt;/link&gt; method).
         */
        settle(): void;
    }

    module DriveAtaProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksDriveAtaProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DriveAtaProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.DriveAtaProxy

        static new_finish(res: Gio.AsyncResult): DriveAtaProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DriveAtaProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DriveAtaProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DriveAtaProxy;

        // Owm methods of UDisks-2.0.DriveAtaProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DriveAtaProxy> | null,
        ): void;
        /**
         * Like udisks_drive_ata_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DriveAtaProxy> | null,
        ): void;
    }

    module DriveAtaSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksDriveAtaSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DriveAtaSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.DriveAtaSkeleton

        static ['new'](): DriveAtaSkeleton;
    }

    module DriveProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksDriveProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DriveProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.DriveProxy

        static new_finish(res: Gio.AsyncResult): DriveProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DriveProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DriveProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DriveProxy;

        // Owm methods of UDisks-2.0.DriveProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_drive_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DriveProxy> | null,
        ): void;
        /**
         * Like udisks_drive_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DriveProxy> | null,
        ): void;
    }

    module DriveSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksDriveSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DriveSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.DriveSkeleton

        static ['new'](): DriveSkeleton;
    }

    module EncryptedProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksEncryptedProxy structure contains only private data and should only be accessed using the provided API.
     */
    class EncryptedProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.EncryptedProxy

        static new_finish(res: Gio.AsyncResult): EncryptedProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): EncryptedProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): EncryptedProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): EncryptedProxy;

        // Owm methods of UDisks-2.0.EncryptedProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_encrypted_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_encrypted_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<EncryptedProxy> | null,
        ): void;
        /**
         * Like udisks_encrypted_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<EncryptedProxy> | null,
        ): void;
    }

    module EncryptedSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksEncryptedSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class EncryptedSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.EncryptedSkeleton

        static ['new'](): EncryptedSkeleton;
    }

    module FilesystemBTRFSProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksFilesystemBTRFSProxy structure contains only private data and should only be accessed using the provided API.
     */
    class FilesystemBTRFSProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.FilesystemBTRFSProxy

        static new_finish(res: Gio.AsyncResult): FilesystemBTRFSProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): FilesystemBTRFSProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesystemBTRFSProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesystemBTRFSProxy;

        // Owm methods of UDisks-2.0.FilesystemBTRFSProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<FilesystemBTRFSProxy> | null,
        ): void;
        /**
         * Like udisks_filesystem_btrfs_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<FilesystemBTRFSProxy> | null,
        ): void;
    }

    module FilesystemBTRFSSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksFilesystemBTRFSSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class FilesystemBTRFSSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.FilesystemBTRFSSkeleton

        static ['new'](): FilesystemBTRFSSkeleton;
    }

    module FilesystemProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksFilesystemProxy structure contains only private data and should only be accessed using the provided API.
     */
    class FilesystemProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.FilesystemProxy

        static new_finish(res: Gio.AsyncResult): FilesystemProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): FilesystemProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesystemProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesystemProxy;

        // Owm methods of UDisks-2.0.FilesystemProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_filesystem_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<FilesystemProxy> | null,
        ): void;
        /**
         * Like udisks_filesystem_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<FilesystemProxy> | null,
        ): void;
    }

    module FilesystemSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksFilesystemSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class FilesystemSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.FilesystemSkeleton

        static ['new'](): FilesystemSkeleton;
    }

    module JobProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksJobProxy structure contains only private data and should only be accessed using the provided API.
     */
    class JobProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.JobProxy

        static new_finish(res: Gio.AsyncResult): JobProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): JobProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): JobProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): JobProxy;

        // Owm methods of UDisks-2.0.JobProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_job_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_job_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<JobProxy> | null,
        ): void;
        /**
         * Like udisks_job_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<JobProxy> | null,
        ): void;
    }

    module JobSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksJobSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class JobSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.JobSkeleton

        static ['new'](): JobSkeleton;
    }

    module LogicalVolumeProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksLogicalVolumeProxy structure contains only private data and should only be accessed using the provided API.
     */
    class LogicalVolumeProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.LogicalVolumeProxy

        static new_finish(res: Gio.AsyncResult): LogicalVolumeProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): LogicalVolumeProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LogicalVolumeProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LogicalVolumeProxy;

        // Owm methods of UDisks-2.0.LogicalVolumeProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LogicalVolumeProxy> | null,
        ): void;
        /**
         * Like udisks_logical_volume_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LogicalVolumeProxy> | null,
        ): void;
    }

    module LogicalVolumeSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksLogicalVolumeSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class LogicalVolumeSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.LogicalVolumeSkeleton

        static ['new'](): LogicalVolumeSkeleton;
    }

    module LoopProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksLoopProxy structure contains only private data and should only be accessed using the provided API.
     */
    class LoopProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.LoopProxy

        static new_finish(res: Gio.AsyncResult): LoopProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): LoopProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LoopProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): LoopProxy;

        // Owm methods of UDisks-2.0.LoopProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_loop_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_loop_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LoopProxy> | null,
        ): void;
        /**
         * Like udisks_loop_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<LoopProxy> | null,
        ): void;
    }

    module LoopSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksLoopSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class LoopSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.LoopSkeleton

        static ['new'](): LoopSkeleton;
    }

    module MDRaidProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksMDRaidProxy structure contains only private data and should only be accessed using the provided API.
     */
    class MDRaidProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.MDRaidProxy

        static new_finish(res: Gio.AsyncResult): MDRaidProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): MDRaidProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MDRaidProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MDRaidProxy;

        // Owm methods of UDisks-2.0.MDRaidProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_mdraid_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MDRaidProxy> | null,
        ): void;
        /**
         * Like udisks_mdraid_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MDRaidProxy> | null,
        ): void;
    }

    module MDRaidSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksMDRaidSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class MDRaidSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.MDRaidSkeleton

        static ['new'](): MDRaidSkeleton;
    }

    module ManagerBTRFSProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerBTRFSProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerBTRFSProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.ManagerBTRFSProxy

        static new_finish(res: Gio.AsyncResult): ManagerBTRFSProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerBTRFSProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerBTRFSProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerBTRFSProxy;

        // Owm methods of UDisks-2.0.ManagerBTRFSProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_btrfs_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_manager_btrfs_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerBTRFSProxy> | null,
        ): void;
        /**
         * Like udisks_manager_btrfs_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_btrfs_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_manager_btrfs_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerBTRFSProxy> | null,
        ): void;
    }

    module ManagerBTRFSSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerBTRFSSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerBTRFSSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.ManagerBTRFSSkeleton

        static ['new'](): ManagerBTRFSSkeleton;
    }

    module ManagerLVM2Proxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerLVM2Proxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerLVM2Proxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.ManagerLVM2Proxy

        static new_finish(res: Gio.AsyncResult): ManagerLVM2Proxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerLVM2Proxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerLVM2Proxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerLVM2Proxy;

        // Owm methods of UDisks-2.0.ManagerLVM2Proxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_lvm2_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_manager_lvm2_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerLVM2Proxy> | null,
        ): void;
        /**
         * Like udisks_manager_lvm2_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_lvm2_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_manager_lvm2_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerLVM2Proxy> | null,
        ): void;
    }

    module ManagerLVM2Skeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerLVM2Skeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerLVM2Skeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.ManagerLVM2Skeleton

        static ['new'](): ManagerLVM2Skeleton;
    }

    module ManagerNVMeProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerNVMeProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerNVMeProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.ManagerNVMeProxy

        static new_finish(res: Gio.AsyncResult): ManagerNVMeProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerNVMeProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerNVMeProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerNVMeProxy;

        // Owm methods of UDisks-2.0.ManagerNVMeProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_nvme_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_manager_nvme_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerNVMeProxy> | null,
        ): void;
        /**
         * Like udisks_manager_nvme_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_nvme_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_manager_nvme_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerNVMeProxy> | null,
        ): void;
    }

    module ManagerNVMeSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerNVMeSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerNVMeSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.ManagerNVMeSkeleton

        static ['new'](): ManagerNVMeSkeleton;
    }

    module ManagerProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.ManagerProxy

        static new_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        // Owm methods of UDisks-2.0.ManagerProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
        /**
         * Like udisks_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
    }

    module ManagerSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksManagerSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.ManagerSkeleton

        static ['new'](): ManagerSkeleton;
    }

    module NVMeControllerProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeControllerProxy structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeControllerProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.NVMeControllerProxy

        static new_finish(res: Gio.AsyncResult): NVMeControllerProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): NVMeControllerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeControllerProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeControllerProxy;

        // Owm methods of UDisks-2.0.NVMeControllerProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeControllerProxy> | null,
        ): void;
        /**
         * Like udisks_nvme_controller_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeControllerProxy> | null,
        ): void;
    }

    module NVMeControllerSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeControllerSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeControllerSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.NVMeControllerSkeleton

        static ['new'](): NVMeControllerSkeleton;
    }

    module NVMeFabricsProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeFabricsProxy structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeFabricsProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.NVMeFabricsProxy

        static new_finish(res: Gio.AsyncResult): NVMeFabricsProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): NVMeFabricsProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeFabricsProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeFabricsProxy;

        // Owm methods of UDisks-2.0.NVMeFabricsProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_fabrics_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_nvme_fabrics_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeFabricsProxy> | null,
        ): void;
        /**
         * Like udisks_nvme_fabrics_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_fabrics_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_nvme_fabrics_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeFabricsProxy> | null,
        ): void;
    }

    module NVMeFabricsSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeFabricsSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeFabricsSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.NVMeFabricsSkeleton

        static ['new'](): NVMeFabricsSkeleton;
    }

    module NVMeNamespaceProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeNamespaceProxy structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeNamespaceProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.NVMeNamespaceProxy

        static new_finish(res: Gio.AsyncResult): NVMeNamespaceProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): NVMeNamespaceProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeNamespaceProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): NVMeNamespaceProxy;

        // Owm methods of UDisks-2.0.NVMeNamespaceProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_namespace_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_nvme_namespace_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeNamespaceProxy> | null,
        ): void;
        /**
         * Like udisks_nvme_namespace_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_namespace_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_nvme_namespace_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<NVMeNamespaceProxy> | null,
        ): void;
    }

    module NVMeNamespaceSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksNVMeNamespaceSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class NVMeNamespaceSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.NVMeNamespaceSkeleton

        static ['new'](): NVMeNamespaceSkeleton;
    }

    module ObjectInfo {
        // Constructor properties interface
    }

    /**
     * Detailed information about the D-Bus interfaces (such as
     * #UDisksBlock and #UDisksDrive) on a #UDisksObject that is suitable
     * to display in an user interface. Use
     * udisks_client_get_object_info() to get #UDisksObjectInfo objects.
     * Note that #UDisksObjectInfo is an immutable object; once it has
     * been created it cannot be modified further.
     *
     * The &lt;link
     * linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName"&gt;HintName&lt;/link&gt;
     * and/or &lt;link
     * linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName"&gt;HintIconName&lt;/link&gt;
     * propreties on associated #UDisksBlock interfaces (if any) may
     * influence what udisks_object_info_get_icon() and
     * udisks_object_info_get_media_icon() returns.
     *
     * The value return by udisks_object_info_get_one_liner() is designed
     * to contain enough information such that it is all that needs to be
     * shown about the object. As a result for e.g.  block devices or
     * drives it contains the special device file
     * e.g. &lt;filename&gt;/dev/sda&lt;/filename&gt;.
     */
    class ObjectInfo extends GObject.Object {
        // Owm methods of UDisks-2.0.ObjectInfo

        /**
         * Gets the description.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_description(): string;
        /**
         * Gets the icon.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_icon(): Gio.Icon;
        /**
         * Gets the symbolic icon.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_icon_symbolic(): Gio.Icon;
        /**
         * Gets the media description.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_media_description(): string;
        /**
         * Gets the media icon.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_media_icon(): Gio.Icon;
        /**
         * Gets the symbolic media icon.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_media_icon_symbolic(): Gio.Icon;
        /**
         * Gets the name.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_name(): string;
        /**
         * Gets the #UDisksObject that `info` is for
         * @returns The object - do not free or unref, the reference belongs to @info.
         */
        get_object(): Object;
        /**
         * Gets a one-line description.
         * @returns The value or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_one_liner(): string;
        /**
         * Gets the sort-key for `info`. This can be used with g_strcmp0() to
         * sort objects.
         * @returns The sort key or %NULL. Do not free or unref, the value belongs to @info.
         */
        get_sort_key(): string;
    }

    module ObjectManagerClient {
        // Constructor properties interface
    }

    /**
     * The #UDisksObjectManagerClient structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectManagerClient extends Gio.DBusObjectManagerClient {
        // Constructors of UDisks-2.0.ObjectManagerClient

        static new_finish(res: Gio.AsyncResult): ObjectManagerClient;

        static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;

        // Owm methods of UDisks-2.0.ObjectManagerClient

        /**
         * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
         * @param manager A #GDBusObjectManagerClient.
         * @param object_path The object path of the remote object (unused).
         * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
         * @param user_data User data (unused).
         */
        static get_proxy_type(
            manager: Gio.DBusObjectManagerClient,
            object_path: string,
            interface_name?: string | null,
            user_data?: any | null,
        ): GObject.GType;
        /**
         * Asynchronously creates #GDBusObjectManagerClient using udisks_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_object_manager_client_new_finish() to get the result of the operation.
         *
         * See udisks_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
        /**
         * Like udisks_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
    }

    module ObjectProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksObjectProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectProxy extends Gio.DBusObjectProxy {
        // Constructors of UDisks-2.0.ObjectProxy

        static ['new'](connection: Gio.DBusConnection, object_path: string): ObjectProxy;
    }

    module ObjectSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksObjectSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectSkeleton extends Gio.DBusObjectSkeleton {
        // Constructors of UDisks-2.0.ObjectSkeleton

        static ['new'](object_path: string): ObjectSkeleton;

        // Owm methods of UDisks-2.0.ObjectSkeleton

        /**
         * Sets the #UDisksBlock instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksBlock or %NULL to clear the interface.
         */
        set_block(interface_?: Block | null): void;
        /**
         * Sets the #UDisksBlockLVM2 instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksBlockLVM2 or %NULL to clear the interface.
         */
        set_block_lvm2(interface_?: BlockLVM2 | null): void;
        /**
         * Sets the #UDisksDrive instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksDrive or %NULL to clear the interface.
         */
        set_drive(interface_?: Drive | null): void;
        /**
         * Sets the #UDisksDriveAta instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksDriveAta or %NULL to clear the interface.
         */
        set_drive_ata(interface_?: DriveAta | null): void;
        /**
         * Sets the #UDisksEncrypted instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksEncrypted or %NULL to clear the interface.
         */
        set_encrypted(interface_?: Encrypted | null): void;
        /**
         * Sets the #UDisksFilesystem instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksFilesystem or %NULL to clear the interface.
         */
        set_filesystem(interface_?: Filesystem | null): void;
        /**
         * Sets the #UDisksFilesystemBTRFS instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksFilesystemBTRFS or %NULL to clear the interface.
         */
        set_filesystem_btrfs(interface_?: FilesystemBTRFS | null): void;
        /**
         * Sets the #UDisksJob instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksJob or %NULL to clear the interface.
         */
        set_job(interface_?: Job | null): void;
        /**
         * Sets the #UDisksLogicalVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksLogicalVolume or %NULL to clear the interface.
         */
        set_logical_volume(interface_?: LogicalVolume | null): void;
        /**
         * Sets the #UDisksLoop instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksLoop or %NULL to clear the interface.
         */
        set_loop(interface_?: Loop | null): void;
        /**
         * Sets the #UDisksManager instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksManager or %NULL to clear the interface.
         */
        set_manager(interface_?: Manager | null): void;
        /**
         * Sets the #UDisksManagerBTRFS instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksManagerBTRFS or %NULL to clear the interface.
         */
        set_manager_btrfs(interface_?: ManagerBTRFS | null): void;
        /**
         * Sets the #UDisksManagerLVM2 instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksManagerLVM2 or %NULL to clear the interface.
         */
        set_manager_lvm2(interface_?: ManagerLVM2 | null): void;
        /**
         * Sets the #UDisksManagerNVMe instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksManagerNVMe or %NULL to clear the interface.
         */
        set_manager_nvme(interface_?: ManagerNVMe | null): void;
        /**
         * Sets the #UDisksMDRaid instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksMDRaid or %NULL to clear the interface.
         */
        set_mdraid(interface_?: MDRaid | null): void;
        /**
         * Sets the #UDisksNVMeController instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksNVMeController or %NULL to clear the interface.
         */
        set_nvme_controller(interface_?: NVMeController | null): void;
        /**
         * Sets the #UDisksNVMeFabrics instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksNVMeFabrics or %NULL to clear the interface.
         */
        set_nvme_fabrics(interface_?: NVMeFabrics | null): void;
        /**
         * Sets the #UDisksNVMeNamespace instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksNVMeNamespace or %NULL to clear the interface.
         */
        set_nvme_namespace(interface_?: NVMeNamespace | null): void;
        /**
         * Sets the #UDisksPartition instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksPartition or %NULL to clear the interface.
         */
        set_partition(interface_?: Partition | null): void;
        /**
         * Sets the #UDisksPartitionTable instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksPartitionTable or %NULL to clear the interface.
         */
        set_partition_table(interface_?: PartitionTable | null): void;
        /**
         * Sets the #UDisksPhysicalVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksPhysicalVolume or %NULL to clear the interface.
         */
        set_physical_volume(interface_?: PhysicalVolume | null): void;
        /**
         * Sets the #UDisksSwapspace instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksSwapspace or %NULL to clear the interface.
         */
        set_swapspace(interface_?: Swapspace | null): void;
        /**
         * Sets the #UDisksVDOVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksVDOVolume or %NULL to clear the interface.
         */
        set_vdo_volume(interface_?: VDOVolume | null): void;
        /**
         * Sets the #UDisksVolumeGroup instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt; on `object`.
         * @param interface_ A #UDisksVolumeGroup or %NULL to clear the interface.
         */
        set_volume_group(interface_?: VolumeGroup | null): void;
    }

    module PartitionProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksPartitionProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PartitionProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.PartitionProxy

        static new_finish(res: Gio.AsyncResult): PartitionProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PartitionProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PartitionProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PartitionProxy;

        // Owm methods of UDisks-2.0.PartitionProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_partition_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PartitionProxy> | null,
        ): void;
        /**
         * Like udisks_partition_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PartitionProxy> | null,
        ): void;
    }

    module PartitionSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksPartitionSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PartitionSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.PartitionSkeleton

        static ['new'](): PartitionSkeleton;
    }

    module PartitionTableProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksPartitionTableProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PartitionTableProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.PartitionTableProxy

        static new_finish(res: Gio.AsyncResult): PartitionTableProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PartitionTableProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PartitionTableProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PartitionTableProxy;

        // Owm methods of UDisks-2.0.PartitionTableProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_table_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_partition_table_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PartitionTableProxy> | null,
        ): void;
        /**
         * Like udisks_partition_table_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PartitionTableProxy> | null,
        ): void;
    }

    module PartitionTableSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksPartitionTableSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PartitionTableSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.PartitionTableSkeleton

        static ['new'](): PartitionTableSkeleton;
    }

    module PhysicalVolumeProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksPhysicalVolumeProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PhysicalVolumeProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.PhysicalVolumeProxy

        static new_finish(res: Gio.AsyncResult): PhysicalVolumeProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PhysicalVolumeProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PhysicalVolumeProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PhysicalVolumeProxy;

        // Owm methods of UDisks-2.0.PhysicalVolumeProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_physical_volume_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_physical_volume_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PhysicalVolumeProxy> | null,
        ): void;
        /**
         * Like udisks_physical_volume_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_physical_volume_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_physical_volume_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PhysicalVolumeProxy> | null,
        ): void;
    }

    module PhysicalVolumeSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksPhysicalVolumeSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PhysicalVolumeSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.PhysicalVolumeSkeleton

        static ['new'](): PhysicalVolumeSkeleton;
    }

    module SwapspaceProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksSwapspaceProxy structure contains only private data and should only be accessed using the provided API.
     */
    class SwapspaceProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.SwapspaceProxy

        static new_finish(res: Gio.AsyncResult): SwapspaceProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): SwapspaceProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): SwapspaceProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): SwapspaceProxy;

        // Owm methods of UDisks-2.0.SwapspaceProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_swapspace_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_swapspace_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<SwapspaceProxy> | null,
        ): void;
        /**
         * Like udisks_swapspace_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<SwapspaceProxy> | null,
        ): void;
    }

    module SwapspaceSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksSwapspaceSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class SwapspaceSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.SwapspaceSkeleton

        static ['new'](): SwapspaceSkeleton;
    }

    module VDOVolumeProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksVDOVolumeProxy structure contains only private data and should only be accessed using the provided API.
     */
    class VDOVolumeProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.VDOVolumeProxy

        static new_finish(res: Gio.AsyncResult): VDOVolumeProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): VDOVolumeProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): VDOVolumeProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): VDOVolumeProxy;

        // Owm methods of UDisks-2.0.VDOVolumeProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<VDOVolumeProxy> | null,
        ): void;
        /**
         * Like udisks_vdo_volume_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<VDOVolumeProxy> | null,
        ): void;
    }

    module VDOVolumeSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksVDOVolumeSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class VDOVolumeSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.VDOVolumeSkeleton

        static ['new'](): VDOVolumeSkeleton;
    }

    module VolumeGroupProxy {
        // Constructor properties interface
    }

    /**
     * The #UDisksVolumeGroupProxy structure contains only private data and should only be accessed using the provided API.
     */
    class VolumeGroupProxy extends Gio.DBusProxy {
        // Constructors of UDisks-2.0.VolumeGroupProxy

        static new_finish(res: Gio.AsyncResult): VolumeGroupProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): VolumeGroupProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): VolumeGroupProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): VolumeGroupProxy;

        // Owm methods of UDisks-2.0.VolumeGroupProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_proxy_new_finish() to get the result of the operation.
         *
         * See udisks_volume_group_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<VolumeGroupProxy> | null,
        ): void;
        /**
         * Like udisks_volume_group_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See udisks_volume_group_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<VolumeGroupProxy> | null,
        ): void;
    }

    module VolumeGroupSkeleton {
        // Constructor properties interface
    }

    /**
     * The #UDisksVolumeGroupSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class VolumeGroupSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of UDisks-2.0.VolumeGroupSkeleton

        static ['new'](): VolumeGroupSkeleton;
    }

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt;.
     */
    class BlockIface {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt;.
     */
    class BlockLVM2Iface {}

    /**
     * Class structure for #UDisksBlockLVM2Proxy.
     */
    class BlockLVM2ProxyClass {}

    class BlockLVM2ProxyPrivate {}

    /**
     * Class structure for #UDisksBlockLVM2Skeleton.
     */
    class BlockLVM2SkeletonClass {}

    class BlockLVM2SkeletonPrivate {}

    /**
     * Class structure for #UDisksBlockProxy.
     */
    class BlockProxyClass {}

    class BlockProxyPrivate {}

    /**
     * Class structure for #UDisksBlockSkeleton.
     */
    class BlockSkeletonClass {}

    class BlockSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt;.
     */
    class DriveAtaIface {}

    /**
     * Class structure for #UDisksDriveAtaProxy.
     */
    class DriveAtaProxyClass {}

    class DriveAtaProxyPrivate {}

    /**
     * Class structure for #UDisksDriveAtaSkeleton.
     */
    class DriveAtaSkeletonClass {}

    class DriveAtaSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt;.
     */
    class DriveIface {}

    /**
     * Class structure for #UDisksDriveProxy.
     */
    class DriveProxyClass {}

    class DriveProxyPrivate {}

    /**
     * Class structure for #UDisksDriveSkeleton.
     */
    class DriveSkeletonClass {}

    class DriveSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt;.
     */
    class EncryptedIface {}

    /**
     * Class structure for #UDisksEncryptedProxy.
     */
    class EncryptedProxyClass {}

    class EncryptedProxyPrivate {}

    /**
     * Class structure for #UDisksEncryptedSkeleton.
     */
    class EncryptedSkeletonClass {}

    class EncryptedSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt;.
     */
    class FilesystemBTRFSIface {}

    /**
     * Class structure for #UDisksFilesystemBTRFSProxy.
     */
    class FilesystemBTRFSProxyClass {}

    class FilesystemBTRFSProxyPrivate {}

    /**
     * Class structure for #UDisksFilesystemBTRFSSkeleton.
     */
    class FilesystemBTRFSSkeletonClass {}

    class FilesystemBTRFSSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt;.
     */
    class FilesystemIface {}

    /**
     * Class structure for #UDisksFilesystemProxy.
     */
    class FilesystemProxyClass {}

    class FilesystemProxyPrivate {}

    /**
     * Class structure for #UDisksFilesystemSkeleton.
     */
    class FilesystemSkeletonClass {}

    class FilesystemSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt;.
     */
    class JobIface {}

    /**
     * Class structure for #UDisksJobProxy.
     */
    class JobProxyClass {}

    class JobProxyPrivate {}

    /**
     * Class structure for #UDisksJobSkeleton.
     */
    class JobSkeletonClass {}

    class JobSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt;.
     */
    class LogicalVolumeIface {}

    /**
     * Class structure for #UDisksLogicalVolumeProxy.
     */
    class LogicalVolumeProxyClass {}

    class LogicalVolumeProxyPrivate {}

    /**
     * Class structure for #UDisksLogicalVolumeSkeleton.
     */
    class LogicalVolumeSkeletonClass {}

    class LogicalVolumeSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt;.
     */
    class LoopIface {}

    /**
     * Class structure for #UDisksLoopProxy.
     */
    class LoopProxyClass {}

    class LoopProxyPrivate {}

    /**
     * Class structure for #UDisksLoopSkeleton.
     */
    class LoopSkeletonClass {}

    class LoopSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt;.
     */
    class MDRaidIface {}

    /**
     * Class structure for #UDisksMDRaidProxy.
     */
    class MDRaidProxyClass {}

    class MDRaidProxyPrivate {}

    /**
     * Class structure for #UDisksMDRaidSkeleton.
     */
    class MDRaidSkeletonClass {}

    class MDRaidSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt;.
     */
    class ManagerBTRFSIface {}

    /**
     * Class structure for #UDisksManagerBTRFSProxy.
     */
    class ManagerBTRFSProxyClass {}

    class ManagerBTRFSProxyPrivate {}

    /**
     * Class structure for #UDisksManagerBTRFSSkeleton.
     */
    class ManagerBTRFSSkeletonClass {}

    class ManagerBTRFSSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt;.
     */
    class ManagerIface {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt;.
     */
    class ManagerLVM2Iface {}

    /**
     * Class structure for #UDisksManagerLVM2Proxy.
     */
    class ManagerLVM2ProxyClass {}

    class ManagerLVM2ProxyPrivate {}

    /**
     * Class structure for #UDisksManagerLVM2Skeleton.
     */
    class ManagerLVM2SkeletonClass {}

    class ManagerLVM2SkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt;.
     */
    class ManagerNVMeIface {}

    /**
     * Class structure for #UDisksManagerNVMeProxy.
     */
    class ManagerNVMeProxyClass {}

    class ManagerNVMeProxyPrivate {}

    /**
     * Class structure for #UDisksManagerNVMeSkeleton.
     */
    class ManagerNVMeSkeletonClass {}

    class ManagerNVMeSkeletonPrivate {}

    /**
     * Class structure for #UDisksManagerProxy.
     */
    class ManagerProxyClass {}

    class ManagerProxyPrivate {}

    /**
     * Class structure for #UDisksManagerSkeleton.
     */
    class ManagerSkeletonClass {}

    class ManagerSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt;.
     */
    class NVMeControllerIface {}

    /**
     * Class structure for #UDisksNVMeControllerProxy.
     */
    class NVMeControllerProxyClass {}

    class NVMeControllerProxyPrivate {}

    /**
     * Class structure for #UDisksNVMeControllerSkeleton.
     */
    class NVMeControllerSkeletonClass {}

    class NVMeControllerSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt;.
     */
    class NVMeFabricsIface {}

    /**
     * Class structure for #UDisksNVMeFabricsProxy.
     */
    class NVMeFabricsProxyClass {}

    class NVMeFabricsProxyPrivate {}

    /**
     * Class structure for #UDisksNVMeFabricsSkeleton.
     */
    class NVMeFabricsSkeletonClass {}

    class NVMeFabricsSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt;.
     */
    class NVMeNamespaceIface {}

    /**
     * Class structure for #UDisksNVMeNamespaceProxy.
     */
    class NVMeNamespaceProxyClass {}

    class NVMeNamespaceProxyPrivate {}

    /**
     * Class structure for #UDisksNVMeNamespaceSkeleton.
     */
    class NVMeNamespaceSkeletonClass {}

    class NVMeNamespaceSkeletonPrivate {}

    /**
     * Virtual table for the #UDisksObject interface.
     */
    class ObjectIface {}

    /**
     * Class structure for #UDisksObjectManagerClient.
     */
    class ObjectManagerClientClass {}

    class ObjectManagerClientPrivate {}

    /**
     * Class structure for #UDisksObjectProxy.
     */
    class ObjectProxyClass {}

    class ObjectProxyPrivate {}

    /**
     * Class structure for #UDisksObjectSkeleton.
     */
    class ObjectSkeletonClass {}

    class ObjectSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt;.
     */
    class PartitionIface {}

    /**
     * Class structure for #UDisksPartitionProxy.
     */
    class PartitionProxyClass {}

    class PartitionProxyPrivate {}

    /**
     * Class structure for #UDisksPartitionSkeleton.
     */
    class PartitionSkeletonClass {}

    class PartitionSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt;.
     */
    class PartitionTableIface {}

    /**
     * Class structure for #UDisksPartitionTableProxy.
     */
    class PartitionTableProxyClass {}

    class PartitionTableProxyPrivate {}

    /**
     * Class structure for #UDisksPartitionTableSkeleton.
     */
    class PartitionTableSkeletonClass {}

    class PartitionTableSkeletonPrivate {}

    /**
     * Detailed information about a partition type.
     *
     * `table_subtype` is used to break the set of partition types for
     * `table_type` into a logical subsets. It is typically only used in
     * user interfaces where the partition type is selected.
     *
     * This struct may grow in the future without it being considered an
     * ABI break.
     */
    class PartitionTypeInfo {
        // Own fields of UDisks-2.0.PartitionTypeInfo

        table_type: string;
        table_subtype: string;
        type: string;
        flags: PartitionTypeInfoFlags;

        // Owm methods of UDisks-2.0.PartitionTypeInfo

        /**
         * Frees `info`.
         */
        free(): void;
    }

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt;.
     */
    class PhysicalVolumeIface {}

    /**
     * Class structure for #UDisksPhysicalVolumeProxy.
     */
    class PhysicalVolumeProxyClass {}

    class PhysicalVolumeProxyPrivate {}

    /**
     * Class structure for #UDisksPhysicalVolumeSkeleton.
     */
    class PhysicalVolumeSkeletonClass {}

    class PhysicalVolumeSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt;.
     */
    class SwapspaceIface {}

    /**
     * Class structure for #UDisksSwapspaceProxy.
     */
    class SwapspaceProxyClass {}

    class SwapspaceProxyPrivate {}

    /**
     * Class structure for #UDisksSwapspaceSkeleton.
     */
    class SwapspaceSkeletonClass {}

    class SwapspaceSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt;.
     */
    class VDOVolumeIface {}

    /**
     * Class structure for #UDisksVDOVolumeProxy.
     */
    class VDOVolumeProxyClass {}

    class VDOVolumeProxyPrivate {}

    /**
     * Class structure for #UDisksVDOVolumeSkeleton.
     */
    class VDOVolumeSkeletonClass {}

    class VDOVolumeSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt;.
     */
    class VolumeGroupIface {}

    /**
     * Class structure for #UDisksVolumeGroupProxy.
     */
    class VolumeGroupProxyClass {}

    class VolumeGroupProxyPrivate {}

    /**
     * Class structure for #UDisksVolumeGroupSkeleton.
     */
    class VolumeGroupSkeletonClass {}

    class VolumeGroupSkeletonPrivate {}

    interface Block {
        // Own properties of UDisks-2.0.Block

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Configuration"&gt;"Configuration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        configuration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice"&gt;"CryptoBackingDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        crypto_backing_device: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice"&gt;"CryptoBackingDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cryptoBackingDevice: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Device"&gt;"Device"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        device: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber"&gt;"DeviceNumber"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        device_number: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber"&gt;"DeviceNumber"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        deviceNumber: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Drive"&gt;"Drive"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        drive: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto"&gt;"HintAuto"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_auto: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto"&gt;"HintAuto"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintAuto: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName"&gt;"HintIconName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_icon_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName"&gt;"HintIconName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintIconName: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore"&gt;"HintIgnore"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_ignore: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore"&gt;"HintIgnore"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintIgnore: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName"&gt;"HintName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName"&gt;"HintName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintName: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable"&gt;"HintPartitionable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_partitionable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable"&gt;"HintPartitionable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintPartitionable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName"&gt;"HintSymbolicIconName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_symbolic_icon_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName"&gt;"HintSymbolicIconName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintSymbolicIconName: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem"&gt;"HintSystem"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_system: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem"&gt;"HintSystem"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintSystem: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Id"&gt;"Id"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel"&gt;"IdLabel"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_label: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel"&gt;"IdLabel"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idLabel: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType"&gt;"IdType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType"&gt;"IdType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idType: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage"&gt;"IdUsage"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_usage: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage"&gt;"IdUsage"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idUsage: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID"&gt;"IdUUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_uuid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID"&gt;"IdUUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idUuid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion"&gt;"IdVersion"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_version: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion"&gt;"IdVersion"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idVersion: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaid"&gt;"MDRaid"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember"&gt;"MDRaidMember"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraid_member: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember"&gt;"MDRaidMember"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraidMember: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice"&gt;"PreferredDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        preferred_device: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice"&gt;"PreferredDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        preferredDevice: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly"&gt;"ReadOnly"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_only: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly"&gt;"ReadOnly"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readOnly: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Symlinks"&gt;"Symlinks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        symlinks: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.UserspaceMountOptions"&gt;"UserspaceMountOptions"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        userspace_mount_options: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block.UserspaceMountOptions"&gt;"UserspaceMountOptions"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        userspaceMountOptions: string[];

        // Owm methods of UDisks-2.0.Block

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem"&gt;AddConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_add_configuration_item_finish() to get the result of the operation.
         *
         * See udisks_block_call_add_configuration_item_sync() for the synchronous, blocking version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_add_configuration_item(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_add_configuration_item().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_add_configuration_item().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem"&gt;AddConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_add_configuration_item() for the asynchronous version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_configuration_item_sync(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format"&gt;Format()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_format_finish() to get the result of the operation.
         *
         * See udisks_block_call_format_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_format(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_format().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_format().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_format_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format"&gt;Format()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_format() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration"&gt;GetSecretConfiguration()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_get_secret_configuration_finish() to get the result of the operation.
         *
         * See udisks_block_call_get_secret_configuration_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_secret_configuration(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_get_secret_configuration().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_get_secret_configuration().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_secret_configuration_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration"&gt;GetSecretConfiguration()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_get_secret_configuration() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenDevice"&gt;OpenDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_open_device_finish() to get the result of the operation.
         *
         * See udisks_block_call_open_device_sync() for the synchronous, blocking version of this method.
         * @param arg_mode Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_open_device(
            arg_mode: string,
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenDevice"&gt;OpenDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_device() for the asynchronous version of this method.
         * @param arg_mode Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_device_sync(
            arg_mode: string,
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup"&gt;OpenForBackup()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_open_for_backup_finish() to get the result of the operation.
         *
         * See udisks_block_call_open_for_backup_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_open_for_backup(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_backup().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_backup().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_backup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup"&gt;OpenForBackup()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_backup() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_backup_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark"&gt;OpenForBenchmark()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_open_for_benchmark_finish() to get the result of the operation.
         *
         * See udisks_block_call_open_for_benchmark_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_open_for_benchmark(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_benchmark().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_benchmark().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_benchmark_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark"&gt;OpenForBenchmark()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_benchmark() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_benchmark_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore"&gt;OpenForRestore()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_open_for_restore_finish() to get the result of the operation.
         *
         * See udisks_block_call_open_for_restore_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_open_for_restore(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_restore().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_restore().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_restore_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore"&gt;OpenForRestore()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_restore() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_open_for_restore_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem"&gt;RemoveConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_remove_configuration_item_finish() to get the result of the operation.
         *
         * See udisks_block_call_remove_configuration_item_sync() for the synchronous, blocking version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_configuration_item(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_remove_configuration_item().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_remove_configuration_item().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem"&gt;RemoveConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_remove_configuration_item() for the asynchronous version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_configuration_item_sync(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan"&gt;Rescan()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_rescan_finish() to get the result of the operation.
         *
         * See udisks_block_call_rescan_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_rescan(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_rescan().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_rescan().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rescan_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan"&gt;Rescan()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_rescan() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem"&gt;UpdateConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_block_call_update_configuration_item_finish() to get the result of the operation.
         *
         * See udisks_block_call_update_configuration_item_sync() for the synchronous, blocking version of this method.
         * @param arg_old_item Argument to pass with the method invocation.
         * @param arg_new_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_update_configuration_item(
            arg_old_item: GLib.Variant,
            arg_new_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_update_configuration_item().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_update_configuration_item().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem"&gt;UpdateConfigurationItem()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_update_configuration_item() for the asynchronous version of this method.
         * @param arg_old_item Argument to pass with the method invocation.
         * @param arg_new_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_update_configuration_item_sync(
            arg_old_item: GLib.Variant,
            arg_new_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem"&gt;AddConfigurationItem()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format"&gt;Format()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_format(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration"&gt;GetSecretConfiguration()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param configuration Parameter to return.
         */
        complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenDevice"&gt;OpenDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param fd Parameter to return.
         */
        complete_open_device(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList | null,
            fd: GLib.Variant,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup"&gt;OpenForBackup()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param fd Parameter to return.
         */
        complete_open_for_backup(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList | null,
            fd: GLib.Variant,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark"&gt;OpenForBenchmark()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param fd Parameter to return.
         */
        complete_open_for_benchmark(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList | null,
            fd: GLib.Variant,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore"&gt;OpenForRestore()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param fd Parameter to return.
         */
        complete_open_for_restore(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList | null,
            fd: GLib.Variant,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem"&gt;RemoveConfigurationItem()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan"&gt;Rescan()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_rescan(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem"&gt;UpdateConfigurationItem()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_update_configuration_item(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Block

        vfunc_handle_add_configuration_item(
            invocation: Gio.DBusMethodInvocation,
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_format(invocation: Gio.DBusMethodInvocation, arg_type: string, arg_options: GLib.Variant): boolean;
        vfunc_handle_get_secret_configuration(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_open_device(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList,
            arg_mode: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_open_for_backup(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_open_for_benchmark(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_open_for_restore(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_remove_configuration_item(
            invocation: Gio.DBusMethodInvocation,
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_rescan(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_update_configuration_item(
            invocation: Gio.DBusMethodInvocation,
            arg_old_item: GLib.Variant,
            arg_new_item: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface BlockLVM2 {
        // Own properties of UDisks-2.0.BlockLVM2

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block-LVM2.LogicalVolume"&gt;"LogicalVolume"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        logical_volume: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Block-LVM2.LogicalVolume"&gt;"LogicalVolume"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        logicalVolume: string;
    }

    interface Drive {
        // Own properties of UDisks-2.0.Drive

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff"&gt;"CanPowerOff"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_power_off: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff"&gt;"CanPowerOff"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        canPowerOff: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Configuration"&gt;"Configuration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        configuration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus"&gt;"ConnectionBus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        connection_bus: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus"&gt;"ConnectionBus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        connectionBus: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Ejectable"&gt;"Ejectable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        ejectable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Id"&gt;"Id"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Media"&gt;"Media"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable"&gt;"MediaAvailable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_available: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable"&gt;"MediaAvailable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaAvailable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected"&gt;"MediaChangeDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_change_detected: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected"&gt;"MediaChangeDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaChangeDetected: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility"&gt;"MediaCompatibility"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_compatibility: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility"&gt;"MediaCompatibility"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaCompatibility: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable"&gt;"MediaRemovable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_removable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable"&gt;"MediaRemovable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaRemovable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Model"&gt;"Model"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        model: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Optical"&gt;"Optical"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank"&gt;"OpticalBlank"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_blank: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank"&gt;"OpticalBlank"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalBlank: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks"&gt;"OpticalNumAudioTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_audio_tracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks"&gt;"OpticalNumAudioTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumAudioTracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks"&gt;"OpticalNumDataTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_data_tracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks"&gt;"OpticalNumDataTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumDataTracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions"&gt;"OpticalNumSessions"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_sessions: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions"&gt;"OpticalNumSessions"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumSessions: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks"&gt;"OpticalNumTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_tracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks"&gt;"OpticalNumTracks"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumTracks: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Removable"&gt;"Removable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        removable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Revision"&gt;"Revision"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        revision: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate"&gt;"RotationRate"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rotation_rate: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate"&gt;"RotationRate"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rotationRate: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Seat"&gt;"Seat"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        seat: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Serial"&gt;"Serial"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        serial: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId"&gt;"SiblingId"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sibling_id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId"&gt;"SiblingId"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        siblingId: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey"&gt;"SortKey"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sort_key: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey"&gt;"SortKey"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sortKey: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected"&gt;"TimeDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_detected: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected"&gt;"TimeDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeDetected: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected"&gt;"TimeMediaDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_media_detected: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected"&gt;"TimeMediaDetected"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeMediaDetected: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Vendor"&gt;"Vendor"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        vendor: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.WWN"&gt;"WWN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        wwn: string;

        // Owm methods of UDisks-2.0.Drive

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject"&gt;Eject()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_call_eject_finish() to get the result of the operation.
         *
         * See udisks_drive_call_eject_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_eject(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_eject().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_eject().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_eject_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject"&gt;Eject()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_eject() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff"&gt;PowerOff()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_call_power_off_finish() to get the result of the operation.
         *
         * See udisks_drive_call_power_off_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_power_off(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_power_off().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_power_off().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_power_off_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff"&gt;PowerOff()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_power_off() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration"&gt;SetConfiguration()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_call_set_configuration_finish() to get the result of the operation.
         *
         * See udisks_drive_call_set_configuration_sync() for the synchronous, blocking version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_configuration(
            arg_value: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_set_configuration().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_set_configuration().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_configuration_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration"&gt;SetConfiguration()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_set_configuration() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_configuration_sync(
            arg_value: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject"&gt;Eject()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_eject(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff"&gt;PowerOff()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_power_off(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration"&gt;SetConfiguration()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_configuration(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Drive

        vfunc_handle_eject(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_power_off(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_configuration(
            invocation: Gio.DBusMethodInvocation,
            arg_value: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface DriveAta {
        // Own properties of UDisks-2.0.DriveAta

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled"&gt;"AamEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled"&gt;"AamEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported"&gt;"AamSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported"&gt;"AamSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue"&gt;"AamVendorRecommendedValue"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_vendor_recommended_value: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue"&gt;"AamVendorRecommendedValue"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamVendorRecommendedValue: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled"&gt;"ApmEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apm_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled"&gt;"ApmEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apmEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported"&gt;"ApmSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apm_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported"&gt;"ApmSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apmSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled"&gt;"PmEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pm_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled"&gt;"PmEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pmEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported"&gt;"PmSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pm_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported"&gt;"PmSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pmSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled"&gt;"ReadLookaheadEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_lookahead_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled"&gt;"ReadLookaheadEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readLookaheadEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported"&gt;"ReadLookaheadSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_lookahead_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported"&gt;"ReadLookaheadSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readLookaheadSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes"&gt;"SecurityEnhancedEraseUnitMinutes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_enhanced_erase_unit_minutes: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes"&gt;"SecurityEnhancedEraseUnitMinutes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityEnhancedEraseUnitMinutes: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes"&gt;"SecurityEraseUnitMinutes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_erase_unit_minutes: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes"&gt;"SecurityEraseUnitMinutes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityEraseUnitMinutes: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen"&gt;"SecurityFrozen"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_frozen: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen"&gt;"SecurityFrozen"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityFrozen: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled"&gt;"SmartEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled"&gt;"SmartEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing"&gt;"SmartFailing"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_failing: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing"&gt;"SmartFailing"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartFailing: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast"&gt;"SmartNumAttributesFailedInThePast"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_attributes_failed_in_the_past: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast"&gt;"SmartNumAttributesFailedInThePast"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumAttributesFailedInThePast: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing"&gt;"SmartNumAttributesFailing"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_attributes_failing: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing"&gt;"SmartNumAttributesFailing"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumAttributesFailing: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors"&gt;"SmartNumBadSectors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_bad_sectors: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors"&gt;"SmartNumBadSectors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumBadSectors: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds"&gt;"SmartPowerOnSeconds"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_power_on_seconds: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds"&gt;"SmartPowerOnSeconds"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartPowerOnSeconds: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining"&gt;"SmartSelftestPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_percent_remaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining"&gt;"SmartSelftestPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestPercentRemaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus"&gt;"SmartSelftestStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_status: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus"&gt;"SmartSelftestStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestStatus: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported"&gt;"SmartSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported"&gt;"SmartSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature"&gt;"SmartTemperature"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_temperature: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature"&gt;"SmartTemperature"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartTemperature: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated"&gt;"SmartUpdated"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_updated: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated"&gt;"SmartUpdated"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartUpdated: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled"&gt;"WriteCacheEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        write_cache_enabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled"&gt;"WriteCacheEnabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        writeCacheEnabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported"&gt;"WriteCacheSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        write_cache_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported"&gt;"WriteCacheSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        writeCacheSupported: boolean;

        // Owm methods of UDisks-2.0.DriveAta

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState"&gt;PmGetState()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_pm_get_state_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_pm_get_state_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_pm_get_state(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_get_state().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_get_state().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_get_state_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState"&gt;PmGetState()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_get_state() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby"&gt;PmStandby()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_pm_standby_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_pm_standby_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_pm_standby(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_standby().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_standby().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_standby_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby"&gt;PmStandby()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_standby() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup"&gt;PmWakeup()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_pm_wakeup_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_pm_wakeup_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_pm_wakeup(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_wakeup().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_wakeup().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup"&gt;PmWakeup()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_wakeup() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit"&gt;SecurityEraseUnit()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_security_erase_unit_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_security_erase_unit_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_security_erase_unit(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_security_erase_unit().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_security_erase_unit().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit"&gt;SecurityEraseUnit()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_security_erase_unit() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_smart_get_attributes_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_smart_get_attributes_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_get_attributes(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_get_attributes().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_get_attributes().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_get_attributes() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_smart_selftest_abort_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_smart_selftest_abort_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_selftest_abort(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_selftest_abort().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_abort().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_selftest_abort() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_smart_selftest_start_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_smart_selftest_start_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_selftest_start(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_selftest_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_selftest_start() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_sync(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled"&gt;SmartSetEnabled()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_smart_set_enabled_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_smart_set_enabled_sync() for the synchronous, blocking version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_set_enabled(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_set_enabled().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_set_enabled().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled"&gt;SmartSetEnabled()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_set_enabled() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_set_enabled_sync(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_drive_ata_call_smart_update_finish() to get the result of the operation.
         *
         * See udisks_drive_ata_call_smart_update_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_update(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_update().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_update().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_update_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_update() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState"&gt;PmGetState()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param state Parameter to return.
         */
        complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby"&gt;PmStandby()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup"&gt;PmWakeup()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit"&gt;SecurityEraseUnit()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param attributes Parameter to return.
         */
        complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled"&gt;SmartSetEnabled()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_update(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.DriveAta

        vfunc_handle_pm_get_state(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_pm_standby(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_pm_wakeup(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_security_erase_unit(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_smart_selftest_start(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_smart_set_enabled(
            invocation: Gio.DBusMethodInvocation,
            arg_value: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface Encrypted {
        // Own properties of UDisks-2.0.Encrypted

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        child_configuration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        childConfiguration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.CleartextDevice"&gt;"CleartextDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cleartext_device: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.CleartextDevice"&gt;"CleartextDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cleartextDevice: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.HintEncryptionType"&gt;"HintEncryptionType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_encryption_type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.HintEncryptionType"&gt;"HintEncryptionType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintEncryptionType: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.MetadataSize"&gt;"MetadataSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        metadata_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.MetadataSize"&gt;"MetadataSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        metadataSize: number;

        // Owm methods of UDisks-2.0.Encrypted

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase"&gt;ChangePassphrase()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_encrypted_call_change_passphrase_finish() to get the result of the operation.
         *
         * See udisks_encrypted_call_change_passphrase_sync() for the synchronous, blocking version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_new_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_change_passphrase(
            arg_passphrase: string,
            arg_new_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_change_passphrase().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_change_passphrase().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_change_passphrase_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase"&gt;ChangePassphrase()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_change_passphrase() for the asynchronous version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_new_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_change_passphrase_sync(
            arg_passphrase: string,
            arg_new_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock"&gt;Lock()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_encrypted_call_lock_finish() to get the result of the operation.
         *
         * See udisks_encrypted_call_lock_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_lock(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_lock().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_lock().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_lock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock"&gt;Lock()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_lock() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_encrypted_call_resize_finish() to get the result of the operation.
         *
         * See udisks_encrypted_call_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_resize() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock"&gt;Unlock()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_encrypted_call_unlock_finish() to get the result of the operation.
         *
         * See udisks_encrypted_call_unlock_sync() for the synchronous, blocking version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_unlock(
            arg_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_unlock().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_unlock().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_unlock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock"&gt;Unlock()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_unlock() for the asynchronous version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_unlock_sync(
            arg_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase"&gt;ChangePassphrase()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock"&gt;Lock()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_lock(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Resize"&gt;Resize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock"&gt;Unlock()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param cleartext_device Parameter to return.
         */
        complete_unlock(invocation: Gio.DBusMethodInvocation, cleartext_device: string): void;

        // Own virtual methods of UDisks-2.0.Encrypted

        vfunc_handle_change_passphrase(
            invocation: Gio.DBusMethodInvocation,
            arg_passphrase: string,
            arg_new_passphrase: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_lock(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;
        vfunc_handle_unlock(
            invocation: Gio.DBusMethodInvocation,
            arg_passphrase: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface Filesystem {
        // Own properties of UDisks-2.0.Filesystem

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints"&gt;"MountPoints"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mount_points: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints"&gt;"MountPoints"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mountPoints: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;

        // Owm methods of UDisks-2.0.Filesystem

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Check"&gt;Check()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_check_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_check_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_check(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_check().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_check().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_check_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Check"&gt;Check()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_check() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_check_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount"&gt;Mount()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_mount_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_mount_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_mount(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_mount().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_mount().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_mount_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount"&gt;Mount()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_mount() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_repair_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_repair_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_repair(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_repair().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_repair().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_repair() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_resize_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_resize() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_set_label_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_set_label_sync() for the synchronous, blocking version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_label(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_set_label().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_set_label().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_set_label() for the asynchronous version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_sync(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_set_uuid_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_set_uuid_sync() for the synchronous, blocking version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_uuid(
            arg_uuid: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_set_uuid().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_set_uuid().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_set_uuid() for the asynchronous version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_sync(arg_uuid: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.TakeOwnership"&gt;TakeOwnership()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_take_ownership_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_take_ownership_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_take_ownership(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_take_ownership().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_take_ownership().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_take_ownership_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.TakeOwnership"&gt;TakeOwnership()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_take_ownership() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_take_ownership_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount"&gt;Unmount()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_call_unmount_finish() to get the result of the operation.
         *
         * See udisks_filesystem_call_unmount_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_unmount(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_unmount().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_unmount().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_unmount_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount"&gt;Unmount()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_unmount() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Check"&gt;Check()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param consistent Parameter to return.
         */
        complete_check(invocation: Gio.DBusMethodInvocation, consistent: boolean): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount"&gt;Mount()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param mount_path Parameter to return.
         */
        complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Repair"&gt;Repair()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param repaired Parameter to return.
         */
        complete_repair(invocation: Gio.DBusMethodInvocation, repaired: boolean): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Resize"&gt;Resize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_label(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_uuid(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.TakeOwnership"&gt;TakeOwnership()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_take_ownership(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount"&gt;Unmount()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_unmount(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Filesystem

        vfunc_handle_check(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_label(
            invocation: Gio.DBusMethodInvocation,
            arg_label: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_uuid(
            invocation: Gio.DBusMethodInvocation,
            arg_uuid: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_take_ownership(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface FilesystemBTRFS {
        // Own properties of UDisks-2.0.FilesystemBTRFS

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.label"&gt;"label"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        label: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.num_devices"&gt;"num_devices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        num_devices: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.num_devices"&gt;"num_devices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        numDevices: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.used"&gt;"used"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        used: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem-BTRFS.uuid"&gt;"uuid"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.FilesystemBTRFS

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_add_device_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_add_device_sync() for the synchronous, blocking version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_add_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_add_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_add_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_add_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_create_snapshot_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_create_snapshot_sync() for the synchronous, blocking version of this method.
         * @param arg_source Argument to pass with the method invocation.
         * @param arg_dest Argument to pass with the method invocation.
         * @param arg_ro Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_snapshot(
            arg_source: string,
            arg_dest: string,
            arg_ro: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_create_snapshot().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_create_snapshot().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_snapshot_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_create_snapshot() for the asynchronous version of this method.
         * @param arg_source Argument to pass with the method invocation.
         * @param arg_dest Argument to pass with the method invocation.
         * @param arg_ro Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_snapshot_sync(
            arg_source: string,
            arg_dest: string,
            arg_ro: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSubvolume"&gt;CreateSubvolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_create_subvolume_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_create_subvolume_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_subvolume(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_create_subvolume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_create_subvolume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_subvolume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSubvolume"&gt;CreateSubvolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_create_subvolume() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_subvolume_sync(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.GetSubvolumes"&gt;GetSubvolumes()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_get_subvolumes_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_get_subvolumes_sync() for the synchronous, blocking version of this method.
         * @param arg_snapshots_only Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_subvolumes(
            arg_snapshots_only: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_get_subvolumes().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_get_subvolumes().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_subvolumes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.GetSubvolumes"&gt;GetSubvolumes()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_get_subvolumes() for the asynchronous version of this method.
         * @param arg_snapshots_only Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_subvolumes_sync(
            arg_snapshots_only: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_remove_device_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_remove_device_sync() for the synchronous, blocking version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_remove_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_remove_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_remove_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveSubvolume"&gt;RemoveSubvolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_remove_subvolume_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_remove_subvolume_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_subvolume(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_remove_subvolume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_remove_subvolume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_subvolume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveSubvolume"&gt;RemoveSubvolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_remove_subvolume() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_subvolume_sync(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_repair_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_repair_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_repair(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_repair().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_repair().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_repair() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_resize_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_resize() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_filesystem_btrfs_call_set_label_finish() to get the result of the operation.
         *
         * See udisks_filesystem_btrfs_call_set_label_sync() for the synchronous, blocking version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_label(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_btrfs_call_set_label().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_btrfs_call_set_label().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_btrfs_call_set_label() for the asynchronous version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_sync(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_create_snapshot(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.CreateSubvolume"&gt;CreateSubvolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_create_subvolume(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.GetSubvolumes"&gt;GetSubvolumes()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param subvolumes Parameter to return.
         * @param subvolumes_cnt Parameter to return.
         */
        complete_get_subvolumes(
            invocation: Gio.DBusMethodInvocation,
            subvolumes: GLib.Variant,
            subvolumes_cnt: number,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.RemoveSubvolume"&gt;RemoveSubvolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_subvolume(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Repair"&gt;Repair()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_repair(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.Resize"&gt;Resize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem-BTRFS.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_label(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.FilesystemBTRFS

        vfunc_handle_add_device(
            invocation: Gio.DBusMethodInvocation,
            arg_device: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_snapshot(
            invocation: Gio.DBusMethodInvocation,
            arg_source: string,
            arg_dest: string,
            arg_ro: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_subvolume(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_get_subvolumes(
            invocation: Gio.DBusMethodInvocation,
            arg_snapshots_only: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_remove_device(
            invocation: Gio.DBusMethodInvocation,
            arg_device: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_remove_subvolume(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_label(
            invocation: Gio.DBusMethodInvocation,
            arg_label: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface Job {
        // Own properties of UDisks-2.0.Job

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Bytes"&gt;"Bytes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bytes: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Cancelable"&gt;"Cancelable"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cancelable: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime"&gt;"ExpectedEndTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        expected_end_time: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime"&gt;"ExpectedEndTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        expectedEndTime: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Objects"&gt;"Objects"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        objects: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation"&gt;"Operation"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        operation: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Progress"&gt;"Progress"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progress: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid"&gt;"ProgressValid"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progress_valid: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid"&gt;"ProgressValid"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progressValid: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Rate"&gt;"Rate"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rate: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime"&gt;"StartTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        start_time: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime"&gt;"StartTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        startTime: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID"&gt;"StartedByUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        started_by_uid: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID"&gt;"StartedByUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        startedByUid: number;

        // Owm methods of UDisks-2.0.Job

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel"&gt;Cancel()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_job_call_cancel_finish() to get the result of the operation.
         *
         * See udisks_job_call_cancel_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_cancel(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_job_call_cancel().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_call_cancel().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel"&gt;Cancel()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_job_call_cancel() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel"&gt;Cancel()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the &lt;link linkend="gdbus-signal-org-freedesktop-UDisks2-Job.Completed"&gt;"Completed"&lt;/link&gt; D-Bus signal.
         * @param arg_success Argument to pass with the signal.
         * @param arg_message Argument to pass with the signal.
         */
        emit_completed(arg_success: boolean, arg_message: string): void;

        // Own virtual methods of UDisks-2.0.Job

        vfunc_completed(arg_success: boolean, arg_message: string): void;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface LogicalVolume {
        // Own properties of UDisks-2.0.LogicalVolume

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Active"&gt;"Active"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.BlockDevice"&gt;"BlockDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        block_device: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.BlockDevice"&gt;"BlockDevice"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        blockDevice: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        child_configuration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        childConfiguration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.DataAllocatedRatio"&gt;"DataAllocatedRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        data_allocated_ratio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.DataAllocatedRatio"&gt;"DataAllocatedRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dataAllocatedRatio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Layout"&gt;"Layout"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        layout: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.MetadataAllocatedRatio"&gt;"MetadataAllocatedRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        metadata_allocated_ratio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.MetadataAllocatedRatio"&gt;"MetadataAllocatedRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        metadataAllocatedRatio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Name"&gt;"Name"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Origin"&gt;"Origin"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        origin: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Structure"&gt;"Structure"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        structure: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.SyncRatio"&gt;"SyncRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_ratio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.SyncRatio"&gt;"SyncRatio"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncRatio: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ThinPool"&gt;"ThinPool"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        thin_pool: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.ThinPool"&gt;"ThinPool"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        thinPool: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.Type"&gt;"Type"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.UUID"&gt;"UUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.VolumeGroup"&gt;"VolumeGroup"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        volume_group: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-LogicalVolume.VolumeGroup"&gt;"VolumeGroup"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        volumeGroup: string;

        // Owm methods of UDisks-2.0.LogicalVolume

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Activate"&gt;Activate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_activate_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_activate_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_activate(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_activate().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_activate().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_activate_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Activate"&gt;Activate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_activate() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_activate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheAttach"&gt;CacheAttach()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_cache_attach_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_cache_attach_sync() for the synchronous, blocking version of this method.
         * @param arg_cache_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_cache_attach(
            arg_cache_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_cache_attach().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_cache_attach().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_attach_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheAttach"&gt;CacheAttach()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_cache_attach() for the asynchronous version of this method.
         * @param arg_cache_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_attach_sync(
            arg_cache_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheDetach"&gt;CacheDetach()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_cache_detach_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_cache_detach_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_cache_detach(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_cache_detach().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_cache_detach().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_detach_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheDetach"&gt;CacheDetach()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_cache_detach() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_detach_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheSplit"&gt;CacheSplit()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_cache_split_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_cache_split_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_cache_split(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_cache_split().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_cache_split().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_split_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheSplit"&gt;CacheSplit()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_cache_split() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_cache_split_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_create_snapshot_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_create_snapshot_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_snapshot(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_create_snapshot().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_create_snapshot().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_snapshot_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_create_snapshot() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_snapshot_sync(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Deactivate"&gt;Deactivate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_deactivate_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_deactivate_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_deactivate(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_deactivate().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_deactivate().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_deactivate_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Deactivate"&gt;Deactivate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_deactivate() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_deactivate_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_delete_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_delete_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_delete().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Rename"&gt;Rename()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_rename_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_rename_sync() for the synchronous, blocking version of this method.
         * @param arg_new_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_rename(
            arg_new_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_rename().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_rename().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rename_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Rename"&gt;Rename()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_rename() for the asynchronous version of this method.
         * @param arg_new_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rename_sync(
            arg_new_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_repair_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_repair_sync() for the synchronous, blocking version of this method.
         * @param arg_pvs Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_repair(
            arg_pvs: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_repair().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_repair().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Repair"&gt;Repair()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_repair() for the asynchronous version of this method.
         * @param arg_pvs Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_repair_sync(arg_pvs: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_logical_volume_call_resize_finish() to get the result of the operation.
         *
         * See udisks_logical_volume_call_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_new_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize(
            arg_new_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_logical_volume_call_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_logical_volume_call_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_logical_volume_call_resize() for the asynchronous version of this method.
         * @param arg_new_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_sync(
            arg_new_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Activate"&gt;Activate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_activate(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheAttach"&gt;CacheAttach()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_cache_attach(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheDetach"&gt;CacheDetach()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_cache_detach(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CacheSplit"&gt;CacheSplit()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_cache_split(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.CreateSnapshot"&gt;CreateSnapshot()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_snapshot(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Deactivate"&gt;Deactivate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_deactivate(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Delete"&gt;Delete()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Rename"&gt;Rename()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Repair"&gt;Repair()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_repair(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-LogicalVolume.Resize"&gt;Resize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.LogicalVolume

        vfunc_handle_activate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_cache_attach(
            invocation: Gio.DBusMethodInvocation,
            arg_cache_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_cache_detach(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_cache_split(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_create_snapshot(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_deactivate(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_rename(
            invocation: Gio.DBusMethodInvocation,
            arg_new_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_repair(invocation: Gio.DBusMethodInvocation, arg_pvs: string, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize(
            invocation: Gio.DBusMethodInvocation,
            arg_new_size: number,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface Loop {
        // Own properties of UDisks-2.0.Loop

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.Autoclear"&gt;"Autoclear"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        autoclear: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile"&gt;"BackingFile"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        backing_file: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile"&gt;"BackingFile"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        backingFile: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID"&gt;"SetupByUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        setup_by_uid: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID"&gt;"SetupByUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        setupByUid: number;

        // Owm methods of UDisks-2.0.Loop

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_loop_call_delete_finish() to get the result of the operation.
         *
         * See udisks_loop_call_delete_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_loop_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_delete().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_loop_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear"&gt;SetAutoclear()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_loop_call_set_autoclear_finish() to get the result of the operation.
         *
         * See udisks_loop_call_set_autoclear_sync() for the synchronous, blocking version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_autoclear(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_loop_call_set_autoclear().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_set_autoclear().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_autoclear_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear"&gt;SetAutoclear()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_loop_call_set_autoclear() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_autoclear_sync(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete"&gt;Delete()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear"&gt;SetAutoclear()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_autoclear(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Loop

        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_autoclear(
            invocation: Gio.DBusMethodInvocation,
            arg_value: boolean,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface MDRaid {
        // Own properties of UDisks-2.0.MDRaid

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices"&gt;"ActiveDevices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active_devices: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices"&gt;"ActiveDevices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        activeDevices: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation"&gt;"BitmapLocation"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bitmap_location: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation"&gt;"BitmapLocation"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bitmapLocation: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        child_configuration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration"&gt;"ChildConfiguration"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        childConfiguration: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize"&gt;"ChunkSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        chunk_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize"&gt;"ChunkSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        chunkSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Degraded"&gt;"Degraded"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        degraded: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Level"&gt;"Level"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        level: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Name"&gt;"Name"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices"&gt;"NumDevices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        num_devices: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices"&gt;"NumDevices"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        numDevices: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Running"&gt;"Running"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        running: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction"&gt;"SyncAction"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_action: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction"&gt;"SyncAction"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncAction: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted"&gt;"SyncCompleted"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_completed: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted"&gt;"SyncCompleted"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncCompleted: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate"&gt;"SyncRate"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_rate: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate"&gt;"SyncRate"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncRate: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime"&gt;"SyncRemainingTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_remaining_time: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime"&gt;"SyncRemainingTime"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncRemainingTime: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.UUID"&gt;"UUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.MDRaid

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_add_device_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_add_device_sync() for the synchronous, blocking version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_add_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_add_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_add_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_add_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_delete_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_delete_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_delete().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_remove_device_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_remove_device_sync() for the synchronous, blocking version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_remove_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_remove_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_remove_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction"&gt;RequestSyncAction()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_request_sync_action_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_request_sync_action_sync() for the synchronous, blocking version of this method.
         * @param arg_sync_action Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_request_sync_action(
            arg_sync_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_request_sync_action().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_request_sync_action().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_request_sync_action_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction"&gt;RequestSyncAction()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_request_sync_action() for the asynchronous version of this method.
         * @param arg_sync_action Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_request_sync_action_sync(
            arg_sync_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation"&gt;SetBitmapLocation()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_set_bitmap_location_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_set_bitmap_location_sync() for the synchronous, blocking version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_bitmap_location(
            arg_value: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_set_bitmap_location().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_set_bitmap_location().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation"&gt;SetBitmapLocation()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_set_bitmap_location() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_bitmap_location_sync(
            arg_value: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start"&gt;Start()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_start_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_start_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_start(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start"&gt;Start()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_start() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop"&gt;Stop()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_mdraid_call_stop_finish() to get the result of the operation.
         *
         * See udisks_mdraid_call_stop_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_stop(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_stop().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_stop().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop"&gt;Stop()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_stop() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete"&gt;Delete()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction"&gt;RequestSyncAction()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation"&gt;SetBitmapLocation()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start"&gt;Start()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop"&gt;Stop()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.MDRaid

        vfunc_handle_add_device(
            invocation: Gio.DBusMethodInvocation,
            arg_device: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_remove_device(
            invocation: Gio.DBusMethodInvocation,
            arg_device: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_request_sync_action(
            invocation: Gio.DBusMethodInvocation,
            arg_sync_action: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_bitmap_location(
            invocation: Gio.DBusMethodInvocation,
            arg_value: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface Manager {
        // Own properties of UDisks-2.0.Manager

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.DefaultEncryptionType"&gt;"DefaultEncryptionType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        default_encryption_type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.DefaultEncryptionType"&gt;"DefaultEncryptionType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        defaultEncryptionType: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedEncryptionTypes"&gt;"SupportedEncryptionTypes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supported_encryption_types: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedEncryptionTypes"&gt;"SupportedEncryptionTypes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supportedEncryptionTypes: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems"&gt;"SupportedFilesystems"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supported_filesystems: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems"&gt;"SupportedFilesystems"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supportedFilesystems: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.Version"&gt;"Version"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        version: string;

        // Owm methods of UDisks-2.0.Manager

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanCheck"&gt;CanCheck()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_can_check_finish() to get the result of the operation.
         *
         * See udisks_manager_call_can_check_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_can_check(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_can_check().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_can_check().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_check_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanCheck"&gt;CanCheck()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_can_check() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_check_sync(arg_type: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanFormat"&gt;CanFormat()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_can_format_finish() to get the result of the operation.
         *
         * See udisks_manager_call_can_format_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_can_format(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_can_format().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_can_format().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_format_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanFormat"&gt;CanFormat()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_can_format() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_format_sync(arg_type: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanRepair"&gt;CanRepair()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_can_repair_finish() to get the result of the operation.
         *
         * See udisks_manager_call_can_repair_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_can_repair(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_can_repair().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_can_repair().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_repair_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanRepair"&gt;CanRepair()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_can_repair() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_repair_sync(arg_type: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanResize"&gt;CanResize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_can_resize_finish() to get the result of the operation.
         *
         * See udisks_manager_call_can_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_can_resize(
            arg_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_can_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_can_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanResize"&gt;CanResize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_can_resize() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_can_resize_sync(arg_type: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModule"&gt;EnableModule()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_enable_module_finish() to get the result of the operation.
         *
         * See udisks_manager_call_enable_module_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_enable Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enable_module(
            arg_name: string,
            arg_enable: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_enable_module().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_enable_module().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_module_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModule"&gt;EnableModule()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_enable_module() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_enable Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_module_sync(arg_name: string, arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules"&gt;EnableModules()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_enable_modules_finish() to get the result of the operation.
         *
         * See udisks_manager_call_enable_modules_sync() for the synchronous, blocking version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enable_modules(
            arg_enable: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_enable_modules().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_enable_modules().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_modules_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules"&gt;EnableModules()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_enable_modules() for the asynchronous version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.GetBlockDevices"&gt;GetBlockDevices()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_get_block_devices_finish() to get the result of the operation.
         *
         * See udisks_manager_call_get_block_devices_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_block_devices(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_get_block_devices().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_get_block_devices().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_block_devices_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.GetBlockDevices"&gt;GetBlockDevices()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_get_block_devices() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_block_devices_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup"&gt;LoopSetup()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_loop_setup_finish() to get the result of the operation.
         *
         * See udisks_manager_call_loop_setup_sync() for the synchronous, blocking version of this method.
         * @param arg_fd Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_loop_setup(
            arg_fd: GLib.Variant,
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_loop_setup().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_loop_setup().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_loop_setup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup"&gt;LoopSetup()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_loop_setup() for the asynchronous version of this method.
         * @param arg_fd Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_loop_setup_sync(
            arg_fd: GLib.Variant,
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate"&gt;MDRaidCreate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        call_mdraid_create(
            arg_blocks: string,
            arg_level: string,
            arg_name: string,
            arg_chunk: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_mdraid_create().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_mdraid_create().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_mdraid_create_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate"&gt;MDRaidCreate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_mdraid_create() for the asynchronous version of this method.
         * @param arg_blocks Argument to pass with the method invocation.
         * @param arg_level Argument to pass with the method invocation.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_chunk Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_mdraid_create_sync(
            arg_blocks: string,
            arg_level: string,
            arg_name: string,
            arg_chunk: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.ResolveDevice"&gt;ResolveDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_call_resolve_device_finish() to get the result of the operation.
         *
         * See udisks_manager_call_resolve_device_sync() for the synchronous, blocking version of this method.
         * @param arg_devspec Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resolve_device(
            arg_devspec: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_resolve_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_resolve_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resolve_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.ResolveDevice"&gt;ResolveDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_resolve_device() for the asynchronous version of this method.
         * @param arg_devspec Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resolve_device_sync(
            arg_devspec: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanCheck"&gt;CanCheck()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param available Parameter to return.
         */
        complete_can_check(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanFormat"&gt;CanFormat()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param available Parameter to return.
         */
        complete_can_format(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanRepair"&gt;CanRepair()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param available Parameter to return.
         */
        complete_can_repair(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.CanResize"&gt;CanResize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param available Parameter to return.
         */
        complete_can_resize(invocation: Gio.DBusMethodInvocation, available: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModule"&gt;EnableModule()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_enable_module(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules"&gt;EnableModules()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.GetBlockDevices"&gt;GetBlockDevices()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param block_objects Parameter to return.
         */
        complete_get_block_devices(invocation: Gio.DBusMethodInvocation, block_objects: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup"&gt;LoopSetup()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param resulting_device Parameter to return.
         */
        complete_loop_setup(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList | null,
            resulting_device: string,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate"&gt;MDRaidCreate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param resulting_array Parameter to return.
         */
        complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.ResolveDevice"&gt;ResolveDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param devices Parameter to return.
         */
        complete_resolve_device(invocation: Gio.DBusMethodInvocation, devices: string): void;

        // Own virtual methods of UDisks-2.0.Manager

        vfunc_handle_can_check(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_can_format(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_can_repair(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_can_resize(invocation: Gio.DBusMethodInvocation, arg_type: string): boolean;
        vfunc_handle_enable_module(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_enable: boolean,
        ): boolean;
        vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
        vfunc_handle_get_block_devices(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_loop_setup(
            invocation: Gio.DBusMethodInvocation,
            fd_list: Gio.UnixFDList,
            arg_fd: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_mdraid_create(
            invocation: Gio.DBusMethodInvocation,
            arg_blocks: string,
            arg_level: string,
            arg_name: string,
            arg_chunk: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_resolve_device(
            invocation: Gio.DBusMethodInvocation,
            arg_devspec: GLib.Variant,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface ManagerBTRFS {
        // Owm methods of UDisks-2.0.ManagerBTRFS

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-BTRFS.CreateVolume"&gt;CreateVolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_btrfs_call_create_volume_finish() to get the result of the operation.
         *
         * See udisks_manager_btrfs_call_create_volume_sync() for the synchronous, blocking version of this method.
         * @param arg_devices Argument to pass with the method invocation.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_data_level Argument to pass with the method invocation.
         * @param arg_md_level Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_volume(
            arg_devices: string,
            arg_label: string,
            arg_data_level: string,
            arg_md_level: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_btrfs_call_create_volume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_btrfs_call_create_volume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_volume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-BTRFS.CreateVolume"&gt;CreateVolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_btrfs_call_create_volume() for the asynchronous version of this method.
         * @param arg_devices Argument to pass with the method invocation.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_data_level Argument to pass with the method invocation.
         * @param arg_md_level Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_volume_sync(
            arg_devices: string,
            arg_label: string,
            arg_data_level: string,
            arg_md_level: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-BTRFS.CreateVolume"&gt;CreateVolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_create_volume(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.ManagerBTRFS

        vfunc_handle_create_volume(
            invocation: Gio.DBusMethodInvocation,
            arg_devices: string,
            arg_label: string,
            arg_data_level: string,
            arg_md_level: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface ManagerLVM2 {
        // Owm methods of UDisks-2.0.ManagerLVM2

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-LVM2.VolumeGroupCreate"&gt;VolumeGroupCreate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_lvm2_call_volume_group_create_finish() to get the result of the operation.
         *
         * See udisks_manager_lvm2_call_volume_group_create_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_blocks Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_volume_group_create(
            arg_name: string,
            arg_blocks: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_lvm2_call_volume_group_create().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_lvm2_call_volume_group_create().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_volume_group_create_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-LVM2.VolumeGroupCreate"&gt;VolumeGroupCreate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_lvm2_call_volume_group_create() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_blocks Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_volume_group_create_sync(
            arg_name: string,
            arg_blocks: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-LVM2.VolumeGroupCreate"&gt;VolumeGroupCreate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_volume_group_create(invocation: Gio.DBusMethodInvocation, result: string): void;

        // Own virtual methods of UDisks-2.0.ManagerLVM2

        vfunc_handle_volume_group_create(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_blocks: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface ManagerNVMe {
        // Own properties of UDisks-2.0.ManagerNVMe

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostID"&gt;"HostID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host_id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostID"&gt;"HostID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hostId: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostNQN"&gt;"HostNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host_nqn: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Manager-NVMe.HostNQN"&gt;"HostNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hostNqn: string;

        // Owm methods of UDisks-2.0.ManagerNVMe

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.Connect"&gt;Connect()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_nvme_call_connect_finish() to get the result of the operation.
         *
         * See udisks_manager_nvme_call_connect_sync() for the synchronous, blocking version of this method.
         * @param arg_subsysnqn Argument to pass with the method invocation.
         * @param arg_transport Argument to pass with the method invocation.
         * @param arg_transport_addr Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_connect(
            arg_subsysnqn: string,
            arg_transport: string,
            arg_transport_addr: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_nvme_call_connect().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_nvme_call_connect().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_connect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.Connect"&gt;Connect()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_nvme_call_connect() for the asynchronous version of this method.
         * @param arg_subsysnqn Argument to pass with the method invocation.
         * @param arg_transport Argument to pass with the method invocation.
         * @param arg_transport_addr Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_connect_sync(
            arg_subsysnqn: string,
            arg_transport: string,
            arg_transport_addr: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostID"&gt;SetHostID()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_nvme_call_set_host_id_finish() to get the result of the operation.
         *
         * See udisks_manager_nvme_call_set_host_id_sync() for the synchronous, blocking version of this method.
         * @param arg_hostid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_host_id(
            arg_hostid: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_nvme_call_set_host_id().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_nvme_call_set_host_id().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_host_id_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostID"&gt;SetHostID()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_nvme_call_set_host_id() for the asynchronous version of this method.
         * @param arg_hostid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_host_id_sync(
            arg_hostid: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostNQN"&gt;SetHostNQN()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_manager_nvme_call_set_host_nqn_finish() to get the result of the operation.
         *
         * See udisks_manager_nvme_call_set_host_nqn_sync() for the synchronous, blocking version of this method.
         * @param arg_hostnqn Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_host_nqn(
            arg_hostnqn: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_nvme_call_set_host_nqn().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_nvme_call_set_host_nqn().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_host_nqn_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostNQN"&gt;SetHostNQN()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_nvme_call_set_host_nqn() for the asynchronous version of this method.
         * @param arg_hostnqn Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_host_nqn_sync(
            arg_hostnqn: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.Connect"&gt;Connect()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param nvme_ctrl Parameter to return.
         */
        complete_connect(invocation: Gio.DBusMethodInvocation, nvme_ctrl: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostID"&gt;SetHostID()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_host_id(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Manager-NVMe.SetHostNQN"&gt;SetHostNQN()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_host_nqn(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.ManagerNVMe

        vfunc_handle_connect(
            invocation: Gio.DBusMethodInvocation,
            arg_subsysnqn: string,
            arg_transport: string,
            arg_transport_addr: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_host_id(
            invocation: Gio.DBusMethodInvocation,
            arg_hostid: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_host_nqn(
            invocation: Gio.DBusMethodInvocation,
            arg_hostnqn: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface NVMeController {
        // Own properties of UDisks-2.0.NVMeController

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.ControllerID"&gt;"ControllerID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        controller_id: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.ControllerID"&gt;"ControllerID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        controllerId: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.FGUID"&gt;"FGUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        fguid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.NVMeRevision"&gt;"NVMeRevision"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        nvme_revision: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.NVMeRevision"&gt;"NVMeRevision"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        nvmeRevision: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizePercentRemaining"&gt;"SanitizePercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sanitize_percent_remaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizePercentRemaining"&gt;"SanitizePercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sanitizePercentRemaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStatus"&gt;"SanitizeStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sanitize_status: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStatus"&gt;"SanitizeStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sanitizeStatus: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartCriticalWarning"&gt;"SmartCriticalWarning"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_critical_warning: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartCriticalWarning"&gt;"SmartCriticalWarning"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartCriticalWarning: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartPowerOnHours"&gt;"SmartPowerOnHours"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_power_on_hours: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartPowerOnHours"&gt;"SmartPowerOnHours"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartPowerOnHours: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestPercentRemaining"&gt;"SmartSelftestPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_percent_remaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestPercentRemaining"&gt;"SmartSelftestPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestPercentRemaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStatus"&gt;"SmartSelftestStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_status: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStatus"&gt;"SmartSelftestStatus"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestStatus: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartTemperature"&gt;"SmartTemperature"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_temperature: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartTemperature"&gt;"SmartTemperature"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartTemperature: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdated"&gt;"SmartUpdated"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_updated: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdated"&gt;"SmartUpdated"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartUpdated: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.State"&gt;"State"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        state: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SubsystemNQN"&gt;"SubsystemNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        subsystem_nqn: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.SubsystemNQN"&gt;"SubsystemNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        subsystemNqn: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.UnallocatedCapacity"&gt;"UnallocatedCapacity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        unallocated_capacity: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Controller.UnallocatedCapacity"&gt;"UnallocatedCapacity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        unallocatedCapacity: number;

        // Owm methods of UDisks-2.0.NVMeController

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStart"&gt;SanitizeStart()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_call_sanitize_start_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_call_sanitize_start_sync() for the synchronous, blocking version of this method.
         * @param arg_action Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_sanitize_start(
            arg_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_controller_call_sanitize_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_controller_call_sanitize_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_sanitize_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStart"&gt;SanitizeStart()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_controller_call_sanitize_start() for the asynchronous version of this method.
         * @param arg_action Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_sanitize_start_sync(
            arg_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_call_smart_get_attributes_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_call_smart_get_attributes_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_get_attributes(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_controller_call_smart_get_attributes().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_controller_call_smart_get_attributes().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_controller_call_smart_get_attributes() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_call_smart_selftest_abort_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_call_smart_selftest_abort_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_selftest_abort(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_controller_call_smart_selftest_abort().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_controller_call_smart_selftest_abort().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_controller_call_smart_selftest_abort() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_call_smart_selftest_start_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_call_smart_selftest_start_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_selftest_start(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_controller_call_smart_selftest_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_controller_call_smart_selftest_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_controller_call_smart_selftest_start() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_sync(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_controller_call_smart_update_finish() to get the result of the operation.
         *
         * See udisks_nvme_controller_call_smart_update_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_smart_update(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_controller_call_smart_update().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_controller_call_smart_update().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_update_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_controller_call_smart_update() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SanitizeStart"&gt;SanitizeStart()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_sanitize_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartGetAttributes"&gt;SmartGetAttributes()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param attributes Parameter to return.
         */
        complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestAbort"&gt;SmartSelftestAbort()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartSelftestStart"&gt;SmartSelftestStart()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Controller.SmartUpdate"&gt;SmartUpdate()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_update(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.NVMeController

        vfunc_handle_sanitize_start(
            invocation: Gio.DBusMethodInvocation,
            arg_action: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_smart_get_attributes(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_smart_selftest_abort(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_smart_selftest_start(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_smart_update(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface NVMeFabrics {
        // Own properties of UDisks-2.0.NVMeFabrics

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostID"&gt;"HostID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host_id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostID"&gt;"HostID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hostId: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostNQN"&gt;"HostNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host_nqn: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.HostNQN"&gt;"HostNQN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hostNqn: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.Transport"&gt;"Transport"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        transport: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.TransportAddress"&gt;"TransportAddress"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        transport_address: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Fabrics.TransportAddress"&gt;"TransportAddress"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        transportAddress: string;

        // Owm methods of UDisks-2.0.NVMeFabrics

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Fabrics.Disconnect"&gt;Disconnect()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_fabrics_call_disconnect_finish() to get the result of the operation.
         *
         * See udisks_nvme_fabrics_call_disconnect_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_disconnect(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_fabrics_call_disconnect().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_fabrics_call_disconnect().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Fabrics.Disconnect"&gt;Disconnect()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_fabrics_call_disconnect() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_disconnect_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Fabrics.Disconnect"&gt;Disconnect()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.NVMeFabrics

        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface NVMeNamespace {
        // Own properties of UDisks-2.0.NVMeNamespace

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.EUI64"&gt;"EUI64"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        eui64: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormatPercentRemaining"&gt;"FormatPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        format_percent_remaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormatPercentRemaining"&gt;"FormatPercentRemaining"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        formatPercentRemaining: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormattedLBASize"&gt;"FormattedLBASize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        formatted_lbasize: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.FormattedLBASize"&gt;"FormattedLBASize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        formattedLbasize: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.LBAFormats"&gt;"LBAFormats"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        lbaformats: GLib.Variant;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceCapacity"&gt;"NamespaceCapacity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespace_capacity: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceCapacity"&gt;"NamespaceCapacity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespaceCapacity: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceSize"&gt;"NamespaceSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespace_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceSize"&gt;"NamespaceSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespaceSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceUtilization"&gt;"NamespaceUtilization"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespace_utilization: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NamespaceUtilization"&gt;"NamespaceUtilization"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        namespaceUtilization: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NGUID"&gt;"NGUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        nguid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.NSID"&gt;"NSID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        nsid: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.UUID"&gt;"UUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-NVMe-Namespace.WWN"&gt;"WWN"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        wwn: string;

        // Owm methods of UDisks-2.0.NVMeNamespace

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Namespace.FormatNamespace"&gt;FormatNamespace()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_nvme_namespace_call_format_namespace_finish() to get the result of the operation.
         *
         * See udisks_nvme_namespace_call_format_namespace_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_format_namespace(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_nvme_namespace_call_format_namespace().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_nvme_namespace_call_format_namespace().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_format_namespace_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Namespace.FormatNamespace"&gt;FormatNamespace()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_nvme_namespace_call_format_namespace() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_format_namespace_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-NVMe-Namespace.FormatNamespace"&gt;FormatNamespace()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_format_namespace(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.NVMeNamespace

        vfunc_handle_format_namespace(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface Object {
        // Own properties of UDisks-2.0.Object

        /**
         * The #UDisksBlock instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        block: Block;
        /**
         * The #UDisksBlockLVM2 instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        block_lvm2: BlockLVM2;
        /**
         * The #UDisksBlockLVM2 instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        blockLvm2: BlockLVM2;
        /**
         * The #UDisksDrive instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        drive: Drive;
        /**
         * The #UDisksDriveAta instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        drive_ata: DriveAta;
        /**
         * The #UDisksDriveAta instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        driveAta: DriveAta;
        /**
         * The #UDisksEncrypted instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        encrypted: Encrypted;
        /**
         * The #UDisksFilesystem instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        filesystem: Filesystem;
        /**
         * The #UDisksFilesystemBTRFS instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        filesystem_btrfs: FilesystemBTRFS;
        /**
         * The #UDisksFilesystemBTRFS instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        filesystemBtrfs: FilesystemBTRFS;
        /**
         * The #UDisksJob instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        job: Job;
        /**
         * The #UDisksLogicalVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        logical_volume: LogicalVolume;
        /**
         * The #UDisksLogicalVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        logicalVolume: LogicalVolume;
        /**
         * The #UDisksLoop instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        loop: Loop;
        /**
         * The #UDisksManager instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager: Manager;
        /**
         * The #UDisksManagerBTRFS instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager_btrfs: ManagerBTRFS;
        /**
         * The #UDisksManagerBTRFS instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        managerBtrfs: ManagerBTRFS;
        /**
         * The #UDisksManagerLVM2 instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager_lvm2: ManagerLVM2;
        /**
         * The #UDisksManagerLVM2 instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        managerLvm2: ManagerLVM2;
        /**
         * The #UDisksManagerNVMe instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager_nvme: ManagerNVMe;
        /**
         * The #UDisksManagerNVMe instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        managerNvme: ManagerNVMe;
        /**
         * The #UDisksMDRaid instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mdraid: MDRaid;
        /**
         * The #UDisksNVMeController instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvme_controller: NVMeController;
        /**
         * The #UDisksNVMeController instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvmeController: NVMeController;
        /**
         * The #UDisksNVMeFabrics instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvme_fabrics: NVMeFabrics;
        /**
         * The #UDisksNVMeFabrics instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvmeFabrics: NVMeFabrics;
        /**
         * The #UDisksNVMeNamespace instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvme_namespace: NVMeNamespace;
        /**
         * The #UDisksNVMeNamespace instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        nvmeNamespace: NVMeNamespace;
        /**
         * The #UDisksPartition instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partition: Partition;
        /**
         * The #UDisksPartitionTable instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partition_table: PartitionTable;
        /**
         * The #UDisksPartitionTable instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partitionTable: PartitionTable;
        /**
         * The #UDisksPhysicalVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        physical_volume: PhysicalVolume;
        /**
         * The #UDisksPhysicalVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        physicalVolume: PhysicalVolume;
        /**
         * The #UDisksSwapspace instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        swapspace: Swapspace;
        /**
         * The #UDisksVDOVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        vdo_volume: VDOVolume;
        /**
         * The #UDisksVDOVolume instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        vdoVolume: VDOVolume;
        /**
         * The #UDisksVolumeGroup instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        volume_group: VolumeGroup;
        /**
         * The #UDisksVolumeGroup instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        volumeGroup: VolumeGroup;

        // Owm methods of UDisks-2.0.Object

        /**
         * Gets the #UDisksBlock instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page"&gt;org.freedesktop.UDisks2.Block&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksBlock that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_block(): Block | null;
        /**
         * Gets the #UDisksBlockLVM2 instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Block-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Block.LVM2&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksBlockLVM2 that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_block_lvm2(): BlockLVM2 | null;
        /**
         * Gets the #UDisksDrive instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page"&gt;org.freedesktop.UDisks2.Drive&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksDrive that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_drive(): Drive | null;
        /**
         * Gets the #UDisksDriveAta instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page"&gt;org.freedesktop.UDisks2.Drive.Ata&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksDriveAta that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_drive_ata(): DriveAta | null;
        /**
         * Gets the #UDisksEncrypted instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page"&gt;org.freedesktop.UDisks2.Encrypted&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksEncrypted that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_encrypted(): Encrypted | null;
        /**
         * Gets the #UDisksFilesystem instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksFilesystem that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_filesystem(): Filesystem | null;
        /**
         * Gets the #UDisksFilesystemBTRFS instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Filesystem.BTRFS&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksFilesystemBTRFS that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_filesystem_btrfs(): FilesystemBTRFS | null;
        /**
         * Gets the #UDisksJob instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page"&gt;org.freedesktop.UDisks2.Job&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksJob that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_job(): Job | null;
        /**
         * Gets the #UDisksLogicalVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-LogicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.LogicalVolume&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksLogicalVolume that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_logical_volume(): LogicalVolume | null;
        /**
         * Gets the #UDisksLoop instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page"&gt;org.freedesktop.UDisks2.Loop&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksLoop that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_loop(): Loop | null;
        /**
         * Gets the #UDisksManager instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page"&gt;org.freedesktop.UDisks2.Manager&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksManager that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager(): Manager | null;
        /**
         * Gets the #UDisksManagerBTRFS instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-BTRFS.top_of_page"&gt;org.freedesktop.UDisks2.Manager.BTRFS&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksManagerBTRFS that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager_btrfs(): ManagerBTRFS | null;
        /**
         * Gets the #UDisksManagerLVM2 instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-LVM2.top_of_page"&gt;org.freedesktop.UDisks2.Manager.LVM2&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksManagerLVM2 that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager_lvm2(): ManagerLVM2 | null;
        /**
         * Gets the #UDisksManagerNVMe instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager-NVMe.top_of_page"&gt;org.freedesktop.UDisks2.Manager.NVMe&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksManagerNVMe that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager_nvme(): ManagerNVMe | null;
        /**
         * Gets the #UDisksMDRaid instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page"&gt;org.freedesktop.UDisks2.MDRaid&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksMDRaid that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_mdraid(): MDRaid | null;
        /**
         * Gets the #UDisksNVMeController instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Controller.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Controller&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksNVMeController that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_nvme_controller(): NVMeController | null;
        /**
         * Gets the #UDisksNVMeFabrics instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Fabrics.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Fabrics&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksNVMeFabrics that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_nvme_fabrics(): NVMeFabrics | null;
        /**
         * Gets the #UDisksNVMeNamespace instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-NVMe-Namespace.top_of_page"&gt;org.freedesktop.UDisks2.NVMe.Namespace&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksNVMeNamespace that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_nvme_namespace(): NVMeNamespace | null;
        /**
         * Gets the #UDisksPartition instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page"&gt;org.freedesktop.UDisks2.Partition&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksPartition that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_partition(): Partition | null;
        /**
         * Gets the #UDisksPartitionTable instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page"&gt;org.freedesktop.UDisks2.PartitionTable&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksPartitionTable that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_partition_table(): PartitionTable | null;
        /**
         * Gets the #UDisksPhysicalVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-PhysicalVolume.top_of_page"&gt;org.freedesktop.UDisks2.PhysicalVolume&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksPhysicalVolume that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_physical_volume(): PhysicalVolume | null;
        /**
         * Gets the #UDisksSwapspace instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page"&gt;org.freedesktop.UDisks2.Swapspace&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksSwapspace that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_swapspace(): Swapspace | null;
        /**
         * Gets the #UDisksVDOVolume instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VDOVolume.top_of_page"&gt;org.freedesktop.UDisks2.VDOVolume&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksVDOVolume that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_vdo_volume(): VDOVolume | null;
        /**
         * Gets the #UDisksVolumeGroup instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-freedesktop-UDisks2-VolumeGroup.top_of_page"&gt;org.freedesktop.UDisks2.VolumeGroup&lt;/link&gt; on `object,` if any.
         * @returns A #UDisksVolumeGroup that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_volume_group(): VolumeGroup | null;
    }

    interface Partition {
        // Own properties of UDisks-2.0.Partition

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Flags"&gt;"Flags"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        flags: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained"&gt;"IsContained"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_contained: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained"&gt;"IsContained"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isContained: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer"&gt;"IsContainer"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_container: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer"&gt;"IsContainer"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isContainer: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Name"&gt;"Name"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Number"&gt;"Number"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        number: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Offset"&gt;"Offset"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        offset: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Table"&gt;"Table"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        table: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Type"&gt;"Type"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.UUID"&gt;"UUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.Partition

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_delete_finish() to get the result of the operation.
         *
         * See udisks_partition_call_delete_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_delete().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_resize_finish() to get the result of the operation.
         *
         * See udisks_partition_call_resize_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_resize().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_resize().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Resize"&gt;Resize()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_resize() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_sync(arg_size: number, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags"&gt;SetFlags()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_set_flags_finish() to get the result of the operation.
         *
         * See udisks_partition_call_set_flags_sync() for the synchronous, blocking version of this method.
         * @param arg_flags Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_flags(
            arg_flags: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_flags().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_flags().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_flags_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags"&gt;SetFlags()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_flags() for the asynchronous version of this method.
         * @param arg_flags Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_flags_sync(
            arg_flags: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName"&gt;SetName()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_set_name_finish() to get the result of the operation.
         *
         * See udisks_partition_call_set_name_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_name(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_name().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_name().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_name_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName"&gt;SetName()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_name() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType"&gt;SetType()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_set_type_finish() to get the result of the operation.
         *
         * See udisks_partition_call_set_type_sync() for the synchronous, blocking version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_type(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_type().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_type().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_type_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType"&gt;SetType()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_type() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_partition_call_set_uuid_finish() to get the result of the operation.
         *
         * See udisks_partition_call_set_uuid_sync() for the synchronous, blocking version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_uuid(
            arg_uuid: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_uuid().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_uuid().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_uuid() for the asynchronous version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_sync(arg_uuid: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete"&gt;Delete()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Resize"&gt;Resize()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags"&gt;SetFlags()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_flags(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName"&gt;SetName()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_name(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType"&gt;SetType()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_type(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_uuid(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Partition

        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize(invocation: Gio.DBusMethodInvocation, arg_size: number, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_flags(
            invocation: Gio.DBusMethodInvocation,
            arg_flags: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_name(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_type(
            invocation: Gio.DBusMethodInvocation,
            arg_type: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_uuid(
            invocation: Gio.DBusMethodInvocation,
            arg_uuid: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface PartitionTable {
        // Own properties of UDisks-2.0.PartitionTable

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Partitions"&gt;"Partitions"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        partitions: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Type"&gt;"Type"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: string;

        // Owm methods of UDisks-2.0.PartitionTable

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition"&gt;CreatePartition()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        call_create_partition(
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat"&gt;CreatePartitionAndFormat()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
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
        call_create_partition_and_format(
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
            arg_format_type: string,
            arg_format_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_table_call_create_partition_and_format().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition_and_format().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_partition_and_format_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat"&gt;CreatePartitionAndFormat()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
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
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_partition_and_format_sync(
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
            arg_format_type: string,
            arg_format_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Finishes an operation started with udisks_partition_table_call_create_partition().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_table_call_create_partition().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_partition_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition"&gt;CreatePartition()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_table_call_create_partition() for the asynchronous version of this method.
         * @param arg_offset Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_partition_sync(
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition"&gt;CreatePartition()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param created_partition Parameter to return.
         */
        complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat"&gt;CreatePartitionAndFormat()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param created_partition Parameter to return.
         */
        complete_create_partition_and_format(invocation: Gio.DBusMethodInvocation, created_partition: string): void;

        // Own virtual methods of UDisks-2.0.PartitionTable

        vfunc_handle_create_partition(
            invocation: Gio.DBusMethodInvocation,
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_partition_and_format(
            invocation: Gio.DBusMethodInvocation,
            arg_offset: number,
            arg_size: number,
            arg_type: string,
            arg_name: string,
            arg_options: GLib.Variant,
            arg_format_type: string,
            arg_format_options: GLib.Variant,
        ): boolean;
    }

    interface PhysicalVolume {
        // Own properties of UDisks-2.0.PhysicalVolume

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.FreeSize"&gt;"FreeSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        free_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.FreeSize"&gt;"FreeSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        freeSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.VolumeGroup"&gt;"VolumeGroup"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        volume_group: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-PhysicalVolume.VolumeGroup"&gt;"VolumeGroup"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        volumeGroup: string;
    }

    interface Swapspace {
        // Own properties of UDisks-2.0.Swapspace

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-Swapspace.Active"&gt;"Active"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active: boolean;

        // Owm methods of UDisks-2.0.Swapspace

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_swapspace_call_set_label_finish() to get the result of the operation.
         *
         * See udisks_swapspace_call_set_label_sync() for the synchronous, blocking version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_label(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_set_label().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_set_label().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_set_label() for the asynchronous version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_label_sync(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_swapspace_call_set_uuid_finish() to get the result of the operation.
         *
         * See udisks_swapspace_call_set_uuid_sync() for the synchronous, blocking version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_set_uuid(
            arg_uuid: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_set_uuid().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_set_uuid().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_set_uuid() for the asynchronous version of this method.
         * @param arg_uuid Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_set_uuid_sync(arg_uuid: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start"&gt;Start()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_swapspace_call_start_finish() to get the result of the operation.
         *
         * See udisks_swapspace_call_start_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_start(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_start().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start"&gt;Start()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_start() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop"&gt;Stop()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_swapspace_call_stop_finish() to get the result of the operation.
         *
         * See udisks_swapspace_call_stop_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_stop(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_stop().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_stop().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop"&gt;Stop()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_stop() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetLabel"&gt;SetLabel()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_label(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.SetUUID"&gt;SetUUID()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_uuid(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start"&gt;Start()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop"&gt;Stop()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Swapspace

        vfunc_handle_set_label(
            invocation: Gio.DBusMethodInvocation,
            arg_label: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_set_uuid(
            invocation: Gio.DBusMethodInvocation,
            arg_uuid: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface VDOVolume {
        // Own properties of UDisks-2.0.VDOVolume

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.Compression"&gt;"Compression"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        compression: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.CompressionState"&gt;"CompressionState"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        compression_state: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.CompressionState"&gt;"CompressionState"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        compressionState: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.Deduplication"&gt;"Deduplication"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        deduplication: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.IndexState"&gt;"IndexState"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        index_state: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.IndexState"&gt;"IndexState"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        indexState: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.OperatingMode"&gt;"OperatingMode"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        operating_mode: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.OperatingMode"&gt;"OperatingMode"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        operatingMode: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.UsedSize"&gt;"UsedSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        used_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.UsedSize"&gt;"UsedSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        usedSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.VDOPool"&gt;"VDOPool"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        vdo_pool: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VDOVolume.VDOPool"&gt;"VDOPool"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        vdoPool: string;

        // Owm methods of UDisks-2.0.VDOVolume

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableCompression"&gt;EnableCompression()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_call_enable_compression_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_call_enable_compression_sync() for the synchronous, blocking version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enable_compression(
            arg_enable: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_vdo_volume_call_enable_compression().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_vdo_volume_call_enable_compression().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_compression_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableCompression"&gt;EnableCompression()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_vdo_volume_call_enable_compression() for the asynchronous version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_compression_sync(
            arg_enable: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableDeduplication"&gt;EnableDeduplication()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_call_enable_deduplication_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_call_enable_deduplication_sync() for the synchronous, blocking version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_enable_deduplication(
            arg_enable: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_vdo_volume_call_enable_deduplication().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_vdo_volume_call_enable_deduplication().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_deduplication_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableDeduplication"&gt;EnableDeduplication()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_vdo_volume_call_enable_deduplication() for the asynchronous version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_enable_deduplication_sync(
            arg_enable: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.GetStatistics"&gt;GetStatistics()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_call_get_statistics_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_call_get_statistics_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_statistics(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_vdo_volume_call_get_statistics().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_vdo_volume_call_get_statistics().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_statistics_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.GetStatistics"&gt;GetStatistics()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_vdo_volume_call_get_statistics() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_statistics_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizeLogical"&gt;ResizeLogical()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_call_resize_logical_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_call_resize_logical_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize_logical(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_vdo_volume_call_resize_logical().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_vdo_volume_call_resize_logical().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_logical_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizeLogical"&gt;ResizeLogical()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_vdo_volume_call_resize_logical() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_logical_sync(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizePhysical"&gt;ResizePhysical()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_vdo_volume_call_resize_physical_finish() to get the result of the operation.
         *
         * See udisks_vdo_volume_call_resize_physical_sync() for the synchronous, blocking version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_resize_physical(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_vdo_volume_call_resize_physical().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_vdo_volume_call_resize_physical().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_physical_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizePhysical"&gt;ResizePhysical()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_vdo_volume_call_resize_physical() for the asynchronous version of this method.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_resize_physical_sync(
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableCompression"&gt;EnableCompression()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_enable_compression(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.EnableDeduplication"&gt;EnableDeduplication()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_enable_deduplication(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.GetStatistics"&gt;GetStatistics()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param stats Parameter to return.
         */
        complete_get_statistics(invocation: Gio.DBusMethodInvocation, stats: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizeLogical"&gt;ResizeLogical()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize_logical(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VDOVolume.ResizePhysical"&gt;ResizePhysical()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_resize_physical(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.VDOVolume

        vfunc_handle_enable_compression(
            invocation: Gio.DBusMethodInvocation,
            arg_enable: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_enable_deduplication(
            invocation: Gio.DBusMethodInvocation,
            arg_enable: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_get_statistics(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_resize_logical(
            invocation: Gio.DBusMethodInvocation,
            arg_size: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_resize_physical(
            invocation: Gio.DBusMethodInvocation,
            arg_size: number,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface VolumeGroup {
        // Own properties of UDisks-2.0.VolumeGroup

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.ExtentSize"&gt;"ExtentSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        extent_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.ExtentSize"&gt;"ExtentSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        extentSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.FreeSize"&gt;"FreeSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        free_size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.FreeSize"&gt;"FreeSize"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        freeSize: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.MissingPhysicalVolumes"&gt;"MissingPhysicalVolumes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        missing_physical_volumes: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.MissingPhysicalVolumes"&gt;"MissingPhysicalVolumes"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        missingPhysicalVolumes: string[];
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.Name"&gt;"Name"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.NeedsPolling"&gt;"NeedsPolling"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        needs_polling: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.NeedsPolling"&gt;"NeedsPolling"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        needsPolling: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.Size"&gt;"Size"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-freedesktop-UDisks2-VolumeGroup.UUID"&gt;"UUID"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.VolumeGroup

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_add_device_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_add_device_sync() for the synchronous, blocking version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_add_device(
            arg_block: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_add_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_add_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_add_device() for the asynchronous version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_device_sync(
            arg_block: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolume"&gt;CreatePlainVolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_create_plain_volume_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_create_plain_volume_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_plain_volume(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_create_plain_volume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_create_plain_volume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_plain_volume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolume"&gt;CreatePlainVolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_create_plain_volume() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_plain_volume_sync(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolumeWithLayout"&gt;CreatePlainVolumeWithLayout()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_create_plain_volume_with_layout_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_create_plain_volume_with_layout_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_layout Argument to pass with the method invocation.
         * @param arg_pvs Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_plain_volume_with_layout(
            arg_name: string,
            arg_size: number,
            arg_layout: string,
            arg_pvs: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_create_plain_volume_with_layout().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_create_plain_volume_with_layout().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_plain_volume_with_layout_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolumeWithLayout"&gt;CreatePlainVolumeWithLayout()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_create_plain_volume_with_layout() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_layout Argument to pass with the method invocation.
         * @param arg_pvs Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_plain_volume_with_layout_sync(
            arg_name: string,
            arg_size: number,
            arg_layout: string,
            arg_pvs: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinPoolVolume"&gt;CreateThinPoolVolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_create_thin_pool_volume_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_create_thin_pool_volume_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_thin_pool_volume(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_create_thin_pool_volume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_create_thin_pool_volume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_thin_pool_volume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinPoolVolume"&gt;CreateThinPoolVolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_create_thin_pool_volume() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_thin_pool_volume_sync(
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinVolume"&gt;CreateThinVolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_create_thin_volume_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_create_thin_volume_sync() for the synchronous, blocking version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_pool Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_thin_volume(
            arg_name: string,
            arg_size: number,
            arg_pool: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_create_thin_volume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_create_thin_volume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_thin_volume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinVolume"&gt;CreateThinVolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_create_thin_volume() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_size Argument to pass with the method invocation.
         * @param arg_pool Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_thin_volume_sync(
            arg_name: string,
            arg_size: number,
            arg_pool: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateVDOVolume"&gt;CreateVDOVolume()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_create_vdo_volume_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_create_vdo_volume_sync() for the synchronous, blocking version of this method.
         * @param arg_lv_name Argument to pass with the method invocation.
         * @param arg_pool_name Argument to pass with the method invocation.
         * @param arg_data_size Argument to pass with the method invocation.
         * @param arg_virtual_size Argument to pass with the method invocation.
         * @param arg_index_memory Argument to pass with the method invocation.
         * @param arg_compression Argument to pass with the method invocation.
         * @param arg_deduplication Argument to pass with the method invocation.
         * @param arg_write_policy Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_create_vdo_volume(
            arg_lv_name: string,
            arg_pool_name: string,
            arg_data_size: number,
            arg_virtual_size: number,
            arg_index_memory: number,
            arg_compression: boolean,
            arg_deduplication: boolean,
            arg_write_policy: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_create_vdo_volume().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_create_vdo_volume().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_vdo_volume_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateVDOVolume"&gt;CreateVDOVolume()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_create_vdo_volume() for the asynchronous version of this method.
         * @param arg_lv_name Argument to pass with the method invocation.
         * @param arg_pool_name Argument to pass with the method invocation.
         * @param arg_data_size Argument to pass with the method invocation.
         * @param arg_virtual_size Argument to pass with the method invocation.
         * @param arg_index_memory Argument to pass with the method invocation.
         * @param arg_compression Argument to pass with the method invocation.
         * @param arg_deduplication Argument to pass with the method invocation.
         * @param arg_write_policy Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_create_vdo_volume_sync(
            arg_lv_name: string,
            arg_pool_name: string,
            arg_data_size: number,
            arg_virtual_size: number,
            arg_index_memory: number,
            arg_compression: boolean,
            arg_deduplication: boolean,
            arg_write_policy: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_delete_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_delete_sync() for the synchronous, blocking version of this method.
         * @param arg_wipe Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_delete(
            arg_wipe: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_delete().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Delete"&gt;Delete()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_delete() for the asynchronous version of this method.
         * @param arg_wipe Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_wipe: boolean, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.EmptyDevice"&gt;EmptyDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_empty_device_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_empty_device_sync() for the synchronous, blocking version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_empty_device(
            arg_block: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_empty_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_empty_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_empty_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.EmptyDevice"&gt;EmptyDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_empty_device() for the asynchronous version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_empty_device_sync(
            arg_block: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Poll"&gt;Poll()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_poll_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_poll_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_poll(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_poll().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_poll().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_poll_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Poll"&gt;Poll()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_poll() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_poll_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_remove_device_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_remove_device_sync() for the synchronous, blocking version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_wipe Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_device(
            arg_block: string,
            arg_wipe: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_remove_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_remove_device().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_remove_device() for the asynchronous version of this method.
         * @param arg_block Argument to pass with the method invocation.
         * @param arg_wipe Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_device_sync(
            arg_block: string,
            arg_wipe: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveMissingPhysicalVolumes"&gt;RemoveMissingPhysicalVolumes()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_remove_missing_physical_volumes_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_remove_missing_physical_volumes_sync() for the synchronous, blocking version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove_missing_physical_volumes(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_remove_missing_physical_volumes().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_remove_missing_physical_volumes().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_missing_physical_volumes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveMissingPhysicalVolumes"&gt;RemoveMissingPhysicalVolumes()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_remove_missing_physical_volumes() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_missing_physical_volumes_sync(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Rename"&gt;Rename()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call udisks_volume_group_call_rename_finish() to get the result of the operation.
         *
         * See udisks_volume_group_call_rename_sync() for the synchronous, blocking version of this method.
         * @param arg_new_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_rename(
            arg_new_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_volume_group_call_rename().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_volume_group_call_rename().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rename_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Rename"&gt;Rename()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_volume_group_call_rename() for the asynchronous version of this method.
         * @param arg_new_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_rename_sync(
            arg_new_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.AddDevice"&gt;AddDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolume"&gt;CreatePlainVolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_plain_volume(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreatePlainVolumeWithLayout"&gt;CreatePlainVolumeWithLayout()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_plain_volume_with_layout(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinPoolVolume"&gt;CreateThinPoolVolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_thin_pool_volume(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateThinVolume"&gt;CreateThinVolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_thin_volume(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.CreateVDOVolume"&gt;CreateVDOVolume()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_create_vdo_volume(invocation: Gio.DBusMethodInvocation, result: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Delete"&gt;Delete()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.EmptyDevice"&gt;EmptyDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_empty_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Poll"&gt;Poll()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_poll(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveDevice"&gt;RemoveDevice()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.RemoveMissingPhysicalVolumes"&gt;RemoveMissingPhysicalVolumes()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_missing_physical_volumes(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-freedesktop-UDisks2-VolumeGroup.Rename"&gt;Rename()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param result Parameter to return.
         */
        complete_rename(invocation: Gio.DBusMethodInvocation, result: string): void;

        // Own virtual methods of UDisks-2.0.VolumeGroup

        vfunc_handle_add_device(
            invocation: Gio.DBusMethodInvocation,
            arg_block: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_plain_volume(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_plain_volume_with_layout(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_size: number,
            arg_layout: string,
            arg_pvs: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_thin_pool_volume(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_size: number,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_thin_volume(
            invocation: Gio.DBusMethodInvocation,
            arg_name: string,
            arg_size: number,
            arg_pool: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_create_vdo_volume(
            invocation: Gio.DBusMethodInvocation,
            arg_lv_name: string,
            arg_pool_name: string,
            arg_data_size: number,
            arg_virtual_size: number,
            arg_index_memory: number,
            arg_compression: boolean,
            arg_deduplication: boolean,
            arg_write_policy: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_delete(
            invocation: Gio.DBusMethodInvocation,
            arg_wipe: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_empty_device(
            invocation: Gio.DBusMethodInvocation,
            arg_block: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_poll(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_remove_device(
            invocation: Gio.DBusMethodInvocation,
            arg_block: string,
            arg_wipe: boolean,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_remove_missing_physical_volumes(
            invocation: Gio.DBusMethodInvocation,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_rename(
            invocation: Gio.DBusMethodInvocation,
            arg_new_name: string,
            arg_options: GLib.Variant,
        ): boolean;
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

export default UDisks;
// END
