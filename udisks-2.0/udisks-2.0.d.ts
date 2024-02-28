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
         * Like %UDISKS_ERROR_NOT_AUTHORIZED but an authentication was shown and the user dimissed it.
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
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function block_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksBlock interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function block_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function drive_ata_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksDriveAta interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function drive_ata_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function drive_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksDrive interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function drive_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function encrypted_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksEncrypted interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function encrypted_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function error_quark(): GLib.Quark;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function filesystem_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksFilesystem interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function filesystem_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function job_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksJob interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function job_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function loop_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksLoop interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function loop_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function mdraid_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksMDRaid interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function mdraid_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function partition_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksPartition interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function partition_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function partition_table_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksPartitionTable interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function partition_table_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function swapspace_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #UDisksSwapspace interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject<!-- -->-derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function swapspace_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * The #UDisksManager interface on the well-known
         * <literal>/org/freedesktop/UDisks2/Manager</literal> object
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

        static new_sync(cancellable?: Gio.Cancellable | null): Client;

        // Owm methods of UDisks-2.0.Client

        /**
         * Asynchronously gets a #UDisksClient. When the operation is
         * finished, `callback` will be invoked in the <link
         * linkend="g-main-context-push-thread-default">thread-default main
         * loop</link> of the thread you are calling this method from.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback Function that will be called when the result is ready.
         */
        static ['new'](cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

        // Owm methods of UDisks-2.0.Client

        /**
         * Gets all RAID devices (e.g. <filename>/dev/md0</filename> and <filename>/dev/md1</filename>) for `raid`.
         *
         * This is usually only useful in <ulink
         * url="http://en.wikipedia.org/wiki/Split-brain_(computing)">split-brain
         * situations</ulink> — see udisks_client_get_block_for_mdraid() for
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
         * <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">Job:Operation</link>
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
         * <literal>/org/freedesktop/UDisks2/Manager</literal> object.
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
         * <warning>The returned object is only valid until removed so it is only safe to use this function on the thread where `client` was constructed. Use udisks_client_get_object() if on another thread.</warning>
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
         * a newly created object (such as the <link
         * linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">Manager.LoopSetup()</link> method).
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy<!-- -->- and #GDBusProxy<!-- -->-derived types.
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
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Sets the #UDisksBlock instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> on `object`.
         * @param interface_ A #UDisksBlock or %NULL to clear the interface.
         */
        set_block(interface_?: Block | null): void;
        /**
         * Sets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object`.
         * @param interface_ A #UDisksDrive or %NULL to clear the interface.
         */
        set_drive(interface_?: Drive | null): void;
        /**
         * Sets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object`.
         * @param interface_ A #UDisksDriveAta or %NULL to clear the interface.
         */
        set_drive_ata(interface_?: DriveAta | null): void;
        /**
         * Sets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object`.
         * @param interface_ A #UDisksEncrypted or %NULL to clear the interface.
         */
        set_encrypted(interface_?: Encrypted | null): void;
        /**
         * Sets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object`.
         * @param interface_ A #UDisksFilesystem or %NULL to clear the interface.
         */
        set_filesystem(interface_?: Filesystem | null): void;
        /**
         * Sets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object`.
         * @param interface_ A #UDisksJob or %NULL to clear the interface.
         */
        set_job(interface_?: Job | null): void;
        /**
         * Sets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object`.
         * @param interface_ A #UDisksLoop or %NULL to clear the interface.
         */
        set_loop(interface_?: Loop | null): void;
        /**
         * Sets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object`.
         * @param interface_ A #UDisksManager or %NULL to clear the interface.
         */
        set_manager(interface_?: Manager | null): void;
        /**
         * Sets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object`.
         * @param interface_ A #UDisksMDRaid or %NULL to clear the interface.
         */
        set_mdraid(interface_?: MDRaid | null): void;
        /**
         * Sets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object`.
         * @param interface_ A #UDisksPartition or %NULL to clear the interface.
         */
        set_partition(interface_?: Partition | null): void;
        /**
         * Sets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object`.
         * @param interface_ A #UDisksPartitionTable or %NULL to clear the interface.
         */
        set_partition_table(interface_?: PartitionTable | null): void;
        /**
         * Sets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object`.
         * @param interface_ A #UDisksSwapspace or %NULL to clear the interface.
         */
        set_swapspace(interface_?: Swapspace | null): void;
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the <link linkend="g-main-context-push-thread-default">thread-default main loop</link> of the thread you are calling this method from.
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
        static ['new'](
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

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>.
     */
    class BlockIface {}

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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>.
     */
    class ManagerIface {}

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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>.
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
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>.
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

    interface Block {
        // Own properties of UDisks-2.0.Block

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Configuration">"Configuration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        configuration: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice">"CryptoBackingDevice"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        crypto_backing_device: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.CryptoBackingDevice">"CryptoBackingDevice"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cryptoBackingDevice: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Device">"Device"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        device: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber">"DeviceNumber"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        device_number: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.DeviceNumber">"DeviceNumber"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        deviceNumber: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Drive">"Drive"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        drive: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto">"HintAuto"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_auto: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintAuto">"HintAuto"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintAuto: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_icon_name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIconName">"HintIconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintIconName: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_ignore: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintIgnore">"HintIgnore"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintIgnore: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintName">"HintName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintName: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_partitionable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintPartitionable">"HintPartitionable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintPartitionable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_symbolic_icon_name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSymbolicIconName">"HintSymbolicIconName"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintSymbolicIconName: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hint_system: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.HintSystem">"HintSystem"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        hintSystem: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Id">"Id"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel">"IdLabel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_label: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdLabel">"IdLabel"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idLabel: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_type: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdType">"IdType"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idType: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_usage: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUsage">"IdUsage"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idUsage: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_uuid: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdUUID">"IdUUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idUuid: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id_version: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.IdVersion">"IdVersion"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        idVersion: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaid">"MDRaid"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraid: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember">"MDRaidMember"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraid_member: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.MDRaidMember">"MDRaidMember"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mdraidMember: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        preferred_device: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.PreferredDevice">"PreferredDevice"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        preferredDevice: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_only: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.ReadOnly">"ReadOnly"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readOnly: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Size">"Size"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Block.Symlinks">"Symlinks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        symlinks: string[];

        // Owm methods of UDisks-2.0.Block

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
        call_add_configuration_item(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_add_configuration_item().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_add_configuration_item().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_add_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_add_configuration_item() for the asynchronous version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_add_configuration_item_sync(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_format(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_format().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_format().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_format_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_format() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_format_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_get_secret_configuration(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_get_secret_configuration().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_get_secret_configuration().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_secret_configuration_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_get_secret_configuration() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_get_secret_configuration_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_open_for_backup(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_backup().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_backup().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_backup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_backup() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_backup_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_open_for_benchmark(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_benchmark().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_benchmark().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_benchmark_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_benchmark() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_benchmark_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_open_for_restore(
            arg_options: GLib.Variant,
            fd_list?: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_open_for_restore().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_open_for_restore().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_restore_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_open_for_restore() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_open_for_restore_sync(
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_remove_configuration_item(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_remove_configuration_item().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_remove_configuration_item().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_remove_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_remove_configuration_item() for the asynchronous version of this method.
         * @param arg_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_remove_configuration_item_sync(
            arg_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_rescan(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_block_call_rescan().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_block_call_rescan().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_rescan_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_rescan() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_rescan_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_update_configuration_item_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_block_call_update_configuration_item() for the asynchronous version of this method.
         * @param arg_old_item Argument to pass with the method invocation.
         * @param arg_new_item Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_update_configuration_item_sync(
            arg_old_item: GLib.Variant,
            arg_new_item: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.AddConfigurationItem">AddConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_configuration_item(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Format">Format()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_format(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.GetSecretConfiguration">GetSecretConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param configuration Parameter to return.
         */
        complete_get_secret_configuration(invocation: Gio.DBusMethodInvocation, configuration: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBackup">OpenForBackup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForBenchmark">OpenForBenchmark()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.OpenForRestore">OpenForRestore()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.RemoveConfigurationItem">RemoveConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_configuration_item(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.Rescan">Rescan()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_rescan(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Block.UpdateConfigurationItem">UpdateConfigurationItem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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

    interface Drive {
        // Own properties of UDisks-2.0.Drive

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        can_power_off: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.CanPowerOff">"CanPowerOff"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        canPowerOff: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Configuration">"Configuration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        configuration: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus">"ConnectionBus"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        connection_bus: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.ConnectionBus">"ConnectionBus"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        connectionBus: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Ejectable">"Ejectable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        ejectable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Id">"Id"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Media">"Media"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable">"MediaAvailable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_available: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaAvailable">"MediaAvailable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaAvailable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_change_detected: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaChangeDetected">"MediaChangeDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaChangeDetected: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_compatibility: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaCompatibility">"MediaCompatibility"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaCompatibility: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        media_removable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.MediaRemovable">"MediaRemovable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mediaRemovable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Model">"Model"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        model: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Optical">"Optical"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank">"OpticalBlank"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_blank: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalBlank">"OpticalBlank"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalBlank: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_audio_tracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumAudioTracks">"OpticalNumAudioTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumAudioTracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_data_tracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumDataTracks">"OpticalNumDataTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumDataTracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_sessions: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumSessions">"OpticalNumSessions"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumSessions: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        optical_num_tracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.OpticalNumTracks">"OpticalNumTracks"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        opticalNumTracks: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Removable">"Removable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        removable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Revision">"Revision"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        revision: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate">"RotationRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rotation_rate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.RotationRate">"RotationRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rotationRate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Seat">"Seat"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        seat: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Serial">"Serial"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        serial: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId">"SiblingId"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sibling_id: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SiblingId">"SiblingId"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        siblingId: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Size">"Size"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey">"SortKey"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sort_key: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.SortKey">"SortKey"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sortKey: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_detected: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeDetected">"TimeDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeDetected: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        time_media_detected: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.TimeMediaDetected">"TimeMediaDetected"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        timeMediaDetected: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.Vendor">"Vendor"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        vendor: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive.WWN">"WWN"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        wwn: string;

        // Owm methods of UDisks-2.0.Drive

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
        call_eject(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_eject().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_eject().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_eject_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_eject() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_eject_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_power_off(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_power_off().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_power_off().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_power_off_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_power_off() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_power_off_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_set_configuration(
            arg_value: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_call_set_configuration().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_call_set_configuration().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_configuration_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_call_set_configuration() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_configuration_sync(
            arg_value: GLib.Variant,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.Eject">Eject()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_eject(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.PowerOff">PowerOff()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_power_off(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive.SetConfiguration">SetConfiguration()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamEnabled">"AamEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamSupported">"AamSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamSupported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aam_vendor_recommended_value: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.AamVendorRecommendedValue">"AamVendorRecommendedValue"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        aamVendorRecommendedValue: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apm_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmEnabled">"ApmEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apmEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apm_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ApmSupported">"ApmSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        apmSupported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pm_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmEnabled">"PmEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pmEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pm_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.PmSupported">"PmSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        pmSupported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_lookahead_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadEnabled">"ReadLookaheadEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readLookaheadEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        read_lookahead_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.ReadLookaheadSupported">"ReadLookaheadSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        readLookaheadSupported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_enhanced_erase_unit_minutes: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEnhancedEraseUnitMinutes">"SecurityEnhancedEraseUnitMinutes"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityEnhancedEraseUnitMinutes: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_erase_unit_minutes: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnitMinutes">"SecurityEraseUnitMinutes"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityEraseUnitMinutes: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        security_frozen: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SecurityFrozen">"SecurityFrozen"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        securityFrozen: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartEnabled">"SmartEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_failing: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartFailing">"SmartFailing"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartFailing: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_attributes_failed_in_the_past: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailedInThePast">"SmartNumAttributesFailedInThePast"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumAttributesFailedInThePast: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_attributes_failing: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumAttributesFailing">"SmartNumAttributesFailing"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumAttributesFailing: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_num_bad_sectors: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartNumBadSectors">"SmartNumBadSectors"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartNumBadSectors: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_power_on_seconds: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartPowerOnSeconds">"SmartPowerOnSeconds"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartPowerOnSeconds: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_percent_remaining: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestPercentRemaining">"SmartSelftestPercentRemaining"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestPercentRemaining: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_selftest_status: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStatus">"SmartSelftestStatus"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSelftestStatus: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartSupported">"SmartSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartSupported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_temperature: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartTemperature">"SmartTemperature"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartTemperature: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smart_updated: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.SmartUpdated">"SmartUpdated"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smartUpdated: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        write_cache_enabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheEnabled">"WriteCacheEnabled"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        writeCacheEnabled: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        write_cache_supported: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Drive-Ata.WriteCacheSupported">"WriteCacheSupported"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        writeCacheSupported: boolean;

        // Owm methods of UDisks-2.0.DriveAta

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
        call_pm_get_state(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_get_state().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_get_state().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_get_state_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_get_state() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_get_state_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_pm_standby(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_standby().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_standby().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_standby_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_standby() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_standby_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_pm_wakeup(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_pm_wakeup().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_pm_wakeup().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_wakeup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_pm_wakeup() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_pm_wakeup_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_security_erase_unit(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_security_erase_unit().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_security_erase_unit().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_security_erase_unit_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_security_erase_unit() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_security_erase_unit_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_smart_get_attributes(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_get_attributes().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_get_attributes().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_get_attributes() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_get_attributes_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_smart_selftest_abort(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_selftest_abort().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_abort().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_selftest_abort() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_selftest_abort_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_smart_selftest_start(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_selftest_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_selftest_start().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_selftest_start() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_selftest_start_sync(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_smart_set_enabled(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_set_enabled().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_set_enabled().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_set_enabled_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_set_enabled() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_set_enabled_sync(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_smart_update(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_drive_ata_call_smart_update().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_drive_ata_call_smart_update().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_update_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_drive_ata_call_smart_update() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_smart_update_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmGetState">PmGetState()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param state Parameter to return.
         */
        complete_pm_get_state(invocation: Gio.DBusMethodInvocation, state: number): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmStandby">PmStandby()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_pm_standby(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.PmWakeup">PmWakeup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_pm_wakeup(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SecurityEraseUnit">SecurityEraseUnit()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_security_erase_unit(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartGetAttributes">SmartGetAttributes()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param attributes Parameter to return.
         */
        complete_smart_get_attributes(invocation: Gio.DBusMethodInvocation, attributes: GLib.Variant): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestAbort">SmartSelftestAbort()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_abort(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSelftestStart">SmartSelftestStart()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_selftest_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartSetEnabled">SmartSetEnabled()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_smart_set_enabled(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Drive-Ata.SmartUpdate">SmartUpdate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        child_configuration: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Encrypted.ChildConfiguration">"ChildConfiguration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        childConfiguration: GLib.Variant;

        // Owm methods of UDisks-2.0.Encrypted

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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_change_passphrase_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_change_passphrase() for the asynchronous version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_new_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_change_passphrase_sync(
            arg_passphrase: string,
            arg_new_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_lock(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_lock().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_lock().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_lock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_lock() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_lock_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_unlock(
            arg_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_encrypted_call_unlock().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_encrypted_call_unlock().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_unlock_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_encrypted_call_unlock() for the asynchronous version of this method.
         * @param arg_passphrase Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_unlock_sync(
            arg_passphrase: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.ChangePassphrase">ChangePassphrase()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_change_passphrase(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Lock">Lock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_lock(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Encrypted.Unlock">Unlock()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
        vfunc_handle_unlock(
            invocation: Gio.DBusMethodInvocation,
            arg_passphrase: string,
            arg_options: GLib.Variant,
        ): boolean;
    }

    interface Filesystem {
        // Own properties of UDisks-2.0.Filesystem

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mount_points: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Filesystem.MountPoints">"MountPoints"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        mountPoints: string[];

        // Owm methods of UDisks-2.0.Filesystem

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
        call_mount(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_mount().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_mount().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_mount_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_mount() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_mount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_set_label(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_set_label().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_set_label().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_label_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_set_label() for the asynchronous version of this method.
         * @param arg_label Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_label_sync(
            arg_label: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_unmount(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_filesystem_call_unmount().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_filesystem_call_unmount().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_unmount_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_filesystem_call_unmount() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_unmount_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Mount">Mount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param mount_path Parameter to return.
         */
        complete_mount(invocation: Gio.DBusMethodInvocation, mount_path: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.SetLabel">SetLabel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_label(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Filesystem.Unmount">Unmount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_unmount(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Filesystem

        vfunc_handle_mount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_set_label(
            invocation: Gio.DBusMethodInvocation,
            arg_label: string,
            arg_options: GLib.Variant,
        ): boolean;
        vfunc_handle_unmount(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface Job {
        // Own properties of UDisks-2.0.Job

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Bytes">"Bytes"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bytes: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Cancelable">"Cancelable"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        cancelable: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime">"ExpectedEndTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        expected_end_time: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ExpectedEndTime">"ExpectedEndTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        expectedEndTime: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Objects">"Objects"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        objects: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Operation">"Operation"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        operation: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Progress">"Progress"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progress: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid">"ProgressValid"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progress_valid: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.ProgressValid">"ProgressValid"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        progressValid: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.Rate">"Rate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        rate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime">"StartTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        start_time: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartTime">"StartTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        startTime: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        started_by_uid: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Job.StartedByUID">"StartedByUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        startedByUid: number;

        // Owm methods of UDisks-2.0.Job

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
        call_cancel(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_job_call_cancel().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_job_call_cancel().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_job_call_cancel() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_cancel_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Job.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-UDisks2-Job.Completed">"Completed"</link> D-Bus signal.
         * @param arg_success Argument to pass with the signal.
         * @param arg_message Argument to pass with the signal.
         */
        emit_completed(arg_success: boolean, arg_message: string): void;

        // Own virtual methods of UDisks-2.0.Job

        vfunc_completed(arg_success: boolean, arg_message: string): void;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
    }

    interface Loop {
        // Own properties of UDisks-2.0.Loop

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.Autoclear">"Autoclear"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        autoclear: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile">"BackingFile"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        backing_file: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.BackingFile">"BackingFile"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        backingFile: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        setup_by_uid: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Loop.SetupByUID">"SetupByUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        setupByUid: number;

        // Owm methods of UDisks-2.0.Loop

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
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_loop_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_delete().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_loop_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_set_autoclear(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_loop_call_set_autoclear().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_loop_call_set_autoclear().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_autoclear_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_loop_call_set_autoclear() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_autoclear_sync(
            arg_value: boolean,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Loop.SetAutoclear">SetAutoclear()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active_devices: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ActiveDevices">"ActiveDevices"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        activeDevices: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bitmap_location: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.BitmapLocation">"BitmapLocation"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        bitmapLocation: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        child_configuration: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChildConfiguration">"ChildConfiguration"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        childConfiguration: GLib.Variant;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        chunk_size: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.ChunkSize">"ChunkSize"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        chunkSize: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Degraded">"Degraded"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        degraded: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Level">"Level"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        level: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices">"NumDevices"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        num_devices: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.NumDevices">"NumDevices"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        numDevices: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Running">"Running"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        running: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.Size">"Size"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction">"SyncAction"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_action: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncAction">"SyncAction"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncAction: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_completed: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncCompleted">"SyncCompleted"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncCompleted: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_rate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRate">"SyncRate"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncRate: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        sync_remaining_time: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.SyncRemainingTime">"SyncRemainingTime"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        syncRemainingTime: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-MDRaid.UUID">"UUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.MDRaid

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
        call_add_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_add_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_add_device().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_add_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_add_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_add_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_delete().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_remove_device(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_remove_device().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_remove_device().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_remove_device_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_remove_device() for the asynchronous version of this method.
         * @param arg_device Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_remove_device_sync(
            arg_device: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_request_sync_action(
            arg_sync_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_request_sync_action().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_request_sync_action().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_request_sync_action_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_request_sync_action() for the asynchronous version of this method.
         * @param arg_sync_action Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_request_sync_action_sync(
            arg_sync_action: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_set_bitmap_location(
            arg_value: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_set_bitmap_location().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_set_bitmap_location().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_bitmap_location_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_set_bitmap_location() for the asynchronous version of this method.
         * @param arg_value Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_bitmap_location_sync(
            arg_value: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_start(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_start().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_start() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_stop(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_mdraid_call_stop().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_mdraid_call_stop().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_mdraid_call_stop() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.AddDevice">AddDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_add_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RemoveDevice">RemoveDevice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove_device(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.RequestSyncAction">RequestSyncAction()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_request_sync_action(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.SetBitmapLocation">SetBitmapLocation()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_bitmap_location(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-MDRaid.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supported_filesystems: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.SupportedFilesystems">"SupportedFilesystems"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        supportedFilesystems: string[];
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Manager.Version">"Version"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        version: string;

        // Owm methods of UDisks-2.0.Manager

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
        call_enable_modules(
            arg_enable: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_manager_call_enable_modules().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_manager_call_enable_modules().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enable_modules_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_enable_modules() for the asynchronous version of this method.
         * @param arg_enable Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_enable_modules_sync(arg_enable: boolean, cancellable?: Gio.Cancellable | null): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_loop_setup_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_manager_call_loop_setup() for the asynchronous version of this method.
         * @param arg_fd Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param fd_list A #GUnixFDList or %NULL.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_loop_setup_sync(
            arg_fd: GLib.Variant,
            arg_options: GLib.Variant,
            fd_list: Gio.UnixFDList | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_mdraid_create_finish(res: Gio.AsyncResult): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.EnableModules">EnableModules()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_enable_modules(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.LoopSetup">LoopSetup()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Manager.MDRaidCreate">MDRaidCreate()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param resulting_array Parameter to return.
         */
        complete_mdraid_create(invocation: Gio.DBusMethodInvocation, resulting_array: string): void;

        // Own virtual methods of UDisks-2.0.Manager

        vfunc_handle_enable_modules(invocation: Gio.DBusMethodInvocation, arg_enable: boolean): boolean;
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
    }

    interface Object {
        // Own properties of UDisks-2.0.Object

        /**
         * The #UDisksBlock instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        block: Block;
        /**
         * The #UDisksDrive instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        drive: Drive;
        /**
         * The #UDisksDriveAta instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        drive_ata: DriveAta;
        /**
         * The #UDisksDriveAta instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        driveAta: DriveAta;
        /**
         * The #UDisksEncrypted instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        encrypted: Encrypted;
        /**
         * The #UDisksFilesystem instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        filesystem: Filesystem;
        /**
         * The #UDisksJob instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        job: Job;
        /**
         * The #UDisksLoop instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        loop: Loop;
        /**
         * The #UDisksManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager: Manager;
        /**
         * The #UDisksMDRaid instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mdraid: MDRaid;
        /**
         * The #UDisksPartition instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partition: Partition;
        /**
         * The #UDisksPartitionTable instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partition_table: PartitionTable;
        /**
         * The #UDisksPartitionTable instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        partitionTable: PartitionTable;
        /**
         * The #UDisksSwapspace instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        swapspace: Swapspace;

        // Owm methods of UDisks-2.0.Object

        /**
         * Gets the #UDisksBlock instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Block.top_of_page">org.freedesktop.UDisks2.Block</link> on `object,` if any.
         * @returns A #UDisksBlock that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_block(): Block;
        /**
         * Gets the #UDisksDrive instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive.top_of_page">org.freedesktop.UDisks2.Drive</link> on `object,` if any.
         * @returns A #UDisksDrive that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_drive(): Drive;
        /**
         * Gets the #UDisksDriveAta instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Drive-Ata.top_of_page">org.freedesktop.UDisks2.Drive.Ata</link> on `object,` if any.
         * @returns A #UDisksDriveAta that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_drive_ata(): DriveAta;
        /**
         * Gets the #UDisksEncrypted instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Encrypted.top_of_page">org.freedesktop.UDisks2.Encrypted</link> on `object,` if any.
         * @returns A #UDisksEncrypted that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_encrypted(): Encrypted;
        /**
         * Gets the #UDisksFilesystem instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Filesystem.top_of_page">org.freedesktop.UDisks2.Filesystem</link> on `object,` if any.
         * @returns A #UDisksFilesystem that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_filesystem(): Filesystem;
        /**
         * Gets the #UDisksJob instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Job.top_of_page">org.freedesktop.UDisks2.Job</link> on `object,` if any.
         * @returns A #UDisksJob that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_job(): Job;
        /**
         * Gets the #UDisksLoop instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Loop.top_of_page">org.freedesktop.UDisks2.Loop</link> on `object,` if any.
         * @returns A #UDisksLoop that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_loop(): Loop;
        /**
         * Gets the #UDisksManager instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Manager.top_of_page">org.freedesktop.UDisks2.Manager</link> on `object,` if any.
         * @returns A #UDisksManager that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager(): Manager;
        /**
         * Gets the #UDisksMDRaid instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-MDRaid.top_of_page">org.freedesktop.UDisks2.MDRaid</link> on `object,` if any.
         * @returns A #UDisksMDRaid that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_mdraid(): MDRaid;
        /**
         * Gets the #UDisksPartition instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Partition.top_of_page">org.freedesktop.UDisks2.Partition</link> on `object,` if any.
         * @returns A #UDisksPartition that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_partition(): Partition;
        /**
         * Gets the #UDisksPartitionTable instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-PartitionTable.top_of_page">org.freedesktop.UDisks2.PartitionTable</link> on `object,` if any.
         * @returns A #UDisksPartitionTable that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_partition_table(): PartitionTable;
        /**
         * Gets the #UDisksSwapspace instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-UDisks2-Swapspace.top_of_page">org.freedesktop.UDisks2.Swapspace</link> on `object,` if any.
         * @returns A #UDisksSwapspace that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_swapspace(): Swapspace;
    }

    interface Partition {
        // Own properties of UDisks-2.0.Partition

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Flags">"Flags"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        flags: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained">"IsContained"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_contained: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContained">"IsContained"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isContained: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_container: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.IsContainer">"IsContainer"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isContainer: boolean;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Number">"Number"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        number: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Offset">"Offset"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        offset: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Size">"Size"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        size: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Table">"Table"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        table: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Partition.UUID">"UUID"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uuid: string;

        // Owm methods of UDisks-2.0.Partition

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
        call_delete(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_delete().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_delete().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_delete() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_delete_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_set_flags(
            arg_flags: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_flags().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_flags().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_flags_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_flags() for the asynchronous version of this method.
         * @param arg_flags Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_flags_sync(
            arg_flags: number,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        call_set_name(
            arg_name: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_name().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_name().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_name_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_name() for the asynchronous version of this method.
         * @param arg_name Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_name_sync(arg_name: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_set_type(
            arg_type: string,
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_partition_call_set_type().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_partition_call_set_type().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_type_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_partition_call_set_type() for the asynchronous version of this method.
         * @param arg_type Argument to pass with the method invocation.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_set_type_sync(arg_type: string, arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.Delete">Delete()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_delete(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetFlags">SetFlags()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_flags(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetName">SetName()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_name(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Partition.SetType">SetType()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_set_type(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Partition

        vfunc_handle_delete(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
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
    }

    interface PartitionTable {
        // Own properties of UDisks-2.0.PartitionTable

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-PartitionTable.Type">"Type"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        type: string;

        // Owm methods of UDisks-2.0.PartitionTable

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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_create_partition_and_format_finish(res: Gio.AsyncResult): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_create_partition_finish(res: Gio.AsyncResult): boolean;
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
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
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
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartition">CreatePartition()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param created_partition Parameter to return.
         */
        complete_create_partition(invocation: Gio.DBusMethodInvocation, created_partition: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-PartitionTable.CreatePartitionAndFormat">CreatePartitionAndFormat()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
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

    interface Swapspace {
        // Own properties of UDisks-2.0.Swapspace

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-UDisks2-Swapspace.Active">"Active"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        active: boolean;

        // Owm methods of UDisks-2.0.Swapspace

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
        call_start(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_start().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_start().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_start() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_start_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
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
        call_stop(
            arg_options: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with udisks_swapspace_call_stop().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to udisks_swapspace_call_stop().
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See udisks_swapspace_call_stop() for the asynchronous version of this method.
         * @param arg_options Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeded, %FALSE if @error is set.
         */
        call_stop_sync(arg_options: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-UDisks2-Swapspace.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of UDisks-2.0.Swapspace

        vfunc_handle_start(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation, arg_options: GLib.Variant): boolean;
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
