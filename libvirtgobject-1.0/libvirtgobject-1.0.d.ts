/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * LibvirtGObject-1.0
 */

import type LibvirtGLib from '@girs/libvirtglib-1.0';
import type GLib from '@girs/glib-2.0';
import type LibvirtGConfig from '@girs/libvirtgconfig-1.0';
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace LibvirtGObject {
    enum DomainDeleteFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Also remove associated saved state (if present).
         */
        SAVED_STATE,
        /**
         * If last use of domain, then also
         *                                         remove any snapshot metadata.
         */
        SNAPSHOTS_METADATA,
        REMOVE_NVRAM,
        KEEP_NVRAM,
    }
    enum DomainRebootFlags {
        /**
         * No flags, hypervisor choice
         */
        NONE,
        /**
         * Send ACPI event
         */
        ACPI_POWER_BTN,
        /**
         * Use guest agent
         */
        GUEST_AGENT,
    }
    enum DomainShutdownFlags {
        /**
         * No flags, hypervisor choice
         */
        NONE,
        /**
         * Send ACPI event
         */
        ACPI_POWER_BTN,
        /**
         * Use guest agent
         */
        GUEST_AGENT,
    }
    enum DomainSnapshotCreateFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Restore or alter metadata
         */
        REDEFINE,
        /**
         * With redefine, make snapshot current
         */
        CURRENT,
        /**
         * Make snapshot without remembering it
         */
        NO_METADATA,
        /**
         * Stop running guest after snapshot
         */
        HALT,
        /**
         * Disk snapshot, not system checkpoint
         */
        DISK_ONLY,
        /**
         * Reuse any existing external files
         */
        REUSE_EXT,
        /**
         * Use guest agent to quiesce all mounter
         *                                file systems within the domain
         */
        QUIESCE,
        /**
         * Atomically avoid partial changes
         */
        ATOMIC,
    }
    enum DomainSnapshotDeleteFlags {
        /**
         * Also delete children
         */
        CHILDREN,
        /**
         * Delete just metadata
         */
        METADATA_ONLY,
        /**
         * Delete just children
         */
        CHILDREN_ONLY,
    }
    enum DomainSnapshotListFlags {
        /**
         * List all snapshots
         */
        ALL,
        /**
         * List all descendants, not just
         *                                         children, when listing a snapshot.
         *                                         For historical reasons, groups do not use contiguous bits.
         */
        DESCENDANTS,
        /**
         * Filter by snapshots with no parents, when listing a domain
         */
        ROOTS,
        /**
         * Filter by snapshots which have metadata
         */
        METADATA,
        /**
         * Filter by snapshots with no children
         */
        LEAVES,
        /**
         * Filter by snapshots that have children
         */
        NO_LEAVES,
        /**
         * Filter by snapshots with no metadata
         */
        NO_METADATA,
        /**
         * Filter by snapshots taken while guest was shut off
         */
        INACTIVE,
        /**
         * Filter by snapshots taken while guest was active, and with memory state
         */
        ACTIVE,
        /**
         * Filter by snapshots taken while guest was active, but without memory state
         */
        DISK_ONLY,
        /**
         * Filter by snapshots stored internal to disk images
         */
        INTERNAL,
        /**
         * Filter by snapshots that use files external to disk images
         */
        EXTERNAL,
    }
    enum DomainSnapshotRevertFlags {
        /**
         * Run after revert
         */
        RUNNING,
        /**
         * Pause after revert
         */
        PAUSED,
        /**
         * Allow risky reverts
         */
        FORCE,
    }
    enum DomainState {
        NONE,
        RUNNING,
        BLOCKED,
        PAUSED,
        SHUTDOWN,
        SHUTOFF,
        CRASHED,
        PMSUSPENDED,
    }
    enum DomainUpdateDeviceFlags {
        /**
         * Update current domain state
         */
        CURRENT,
        /**
         * Update state for only active domains
         */
        LIVE,
        /**
         * Update state for persistent state only
         */
        CONFIG,
    }
    enum DomainXMLFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * Dump security sensitive information too
         */
        SECURE,
        /**
         * Dump inactive domain information
         */
        INACTIVE,
        /**
         * Update guest CPU requirements according to host CPU
         */
        UPDATE_CPU,
    }
    enum IPAddrType {
        /**
         * IPv4 Address.
         */
        IPV4,
        /**
         * IPv6 Address.
         */
        IPV6,
    }
    enum StoragePoolState {
        INACTIVE,
        BUILDING,
        RUNNING,
        DEGRADED,
        INACCESSIBLE,
    }
    enum StorageVolResizeFlags {
        /**
         * No flags
         */
        NONE,
        /**
         * force allocation of new size
         */
        ALLOCATE,
        /**
         * size is relative to current
         */
        DELTA,
        /**
         * allow decrease in capacity. This combined
         * with #GVIR_STORAGE_VOL_RESIZE_DELTA, implies a negative delta.
         */
        SHRINK,
    }
    enum StorageVolType {
        FILE,
        BLOCK,
        DIR,
    }
    function init_object(argv?: string[] | null): string[] | null;
    function init_object_check(argv?: string[] | null): [boolean, string[] | null];
    interface StreamIOFunc {
        (stream: Stream, cond: StreamIOCondition, opaque?: any | null): boolean;
    }
    interface StreamSinkFunc {
        (stream: Stream): number;
    }
    interface StreamSourceFunc {
        (stream: Stream): number;
    }
    type ConnectionHandle = object | null;
    type DomainHandle = object | null;
    type DomainSnapshotHandle = object | null;
    type InterfaceHandle = object | null;
    type NetworkFilterHandle = object | null;
    type NetworkHandle = object | null;
    type NodeDeviceHandle = object | null;
    type SecretHandle = object | null;
    type StoragePoolHandle = object | null;
    type StorageVolHandle = object | null;
    type StreamHandle = object | null;
    enum DomainStartFlags {
        NONE,
        PAUSED,
        AUTODESTROY,
        BYPASS_CACHE,
        FORCE_BOOT,
    }
    enum StreamIOCondition {
        READABLE,
        WRITABLE,
        HANGUP,
        ERROR,
    }
    module Connection {
        // Signal callback interfaces

        interface ConnectionClosed {
            (): void;
        }

        interface ConnectionOpened {
            (): void;
        }

        interface DomainAdded {
            (object: Domain): void;
        }

        interface DomainRemoved {
            (object: Domain): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: ConnectionHandle;
            uri: string;
        }
    }

    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Own properties of LibvirtGObject.Connection

        get handle(): ConnectionHandle;
        get uri(): string;

        // Constructors of LibvirtGObject.Connection

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Connection;

        // Own signals of LibvirtGObject.Connection

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'connection-closed', callback: (_source: this) => void): number;
        connect_after(signal: 'connection-closed', callback: (_source: this) => void): number;
        emit(signal: 'connection-closed'): void;
        connect(signal: 'connection-opened', callback: (_source: this) => void): number;
        connect_after(signal: 'connection-opened', callback: (_source: this) => void): number;
        emit(signal: 'connection-opened'): void;
        connect(signal: 'domain-added', callback: (_source: this, object: Domain) => void): number;
        connect_after(signal: 'domain-added', callback: (_source: this, object: Domain) => void): number;
        emit(signal: 'domain-added', object: Domain): void;
        connect(signal: 'domain-removed', callback: (_source: this, object: Domain) => void): number;
        connect_after(signal: 'domain-removed', callback: (_source: this, object: Domain) => void): number;
        emit(signal: 'domain-removed', object: Domain): void;

        // Own virtual methods of LibvirtGObject.Connection

        vfunc_connection_closed(): void;
        vfunc_connection_opened(): void;
        vfunc_domain_added(dom: Domain): void;
        vfunc_domain_removed(dom: Domain): void;

        // Own methods of LibvirtGObject.Connection

        close(): void;
        /**
         * Create the configuration file for a new persistent domain.
         * The returned domain will initially be in the shutoff state.
         * @param conf the configuration for the new domain
         * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        create_domain(conf: LibvirtGConfig.Domain): Domain;
        create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool;
        /**
         * Use this method to fetch all domains managed by connection
         * `conn`. Use e.g. #gvir_connection_find_domain_by_id or
         * #gvir_connection_get_domain afterwards to query the fetched
         * domains.
         * @param cancellable cancellation object
         */
        fetch_domains(cancellable?: Gio.Cancellable | null): boolean;
        fetch_domains_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        fetch_domains_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch information on all network interfaces
         * managed by connection `conn` on host machine. Use
         * #gvir_connection_get_interfaces or #gvir_connection_get_interface afterwards
         * to query the fetched interfaces.
         * @param cancellable cancellation object
         * @returns %TRUE on success, %FALSE otherwise and @err is set.
         */
        fetch_interfaces(cancellable?: Gio.Cancellable | null): boolean;
        fetch_interfaces_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch_interfaces_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch all networks managed by connection
         * `conn`. Use e.g. #gvir_connection_find_network_by_name or
         * #gvir_connection_get_networks afterwards to query the fetched
         * domains.
         * @param cancellable cancellation object
         */
        fetch_networks(cancellable?: Gio.Cancellable | null): boolean;
        fetch_networks_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch_networks_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch all storage pools managed by connection
         * `conn`. Use e.g. #gvir_connection_find_storage_pool_by_name or
         * #gvir_connection_get_storage_pools afterwards to query the fetched
         * pools.
         * @param cancellable cancellation object
         */
        fetch_storage_pools(cancellable?: Gio.Cancellable | null): boolean;
        fetch_storage_pools_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch_storage_pools_finish(result: Gio.AsyncResult): boolean;
        find_domain_by_id(id: number): Domain;
        find_domain_by_name(name: string): Domain;
        /**
         * Get a particular interface which has MAC address `mac`.
         * @param macaddr MAC address to lookup
         * @returns A new reference to a #GVirInterface, or NULL if no interface exists with MAC address @mac. The returned object must be unreffed using g_object_unref() once used.
         */
        find_interface_by_mac(macaddr: string): Interface;
        /**
         * Get a particular network which has name `name`.
         * @param name name of the network to search for
         * @returns A new reference to a #GVirNetwork, or NULL if no network exists with name @name. The returned object must be unreffed using g_object_unref() once used.
         */
        find_network_by_name(name: string): Network;
        find_storage_pool_by_name(name: string): StoragePool;
        get_capabilities(): LibvirtGConfig.Capabilities;
        get_capabilities_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities;
        get_domain(uuid: string): Domain;
        get_domain_capabilities(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
        ): LibvirtGConfig.DomainCapabilities;
        get_domain_capabilities_async(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities;
        /**
         * Gets a list of the domains available through `conn`.
         * @returns List of #GVirDomain. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
         */
        get_domains(): Domain[];
        /**
         * Get name of current hypervisor used.
         * @returns new string that should be freed when no longer needed, or NULL upon error.
         */
        get_hypervisor_name(): string;
        /**
         * Get a particular interface which has name `name`.
         * @param name interface name to lookup
         * @returns A new reference to a #GVirInterface, or NULL if no interface exists with name @name. The returned object must be unreffed using g_object_unref() once used.
         */
        get_interface(name: string): Interface;
        /**
         * Get a list of all the network interfaces managed by connection `conn` on
         * host machine.
         * @returns List of #GVirInterface. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
         */
        get_interfaces(): Interface[];
        /**
         * Get a particular network which has UUID `uuid`.
         * @param uuid UUID of the network to lookup
         * @returns A new reference to a #GVirNetwork, or NULL if no network exists with UUID @uuid. The returned object must be unreffed using g_object_unref() once used.
         */
        get_network(uuid: string): Network;
        /**
         * Get a list of all the network networks available through `conn`.
         * @returns List of #GVirNetwork. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
         */
        get_networks(): Network[];
        get_node_info(): NodeInfo;
        get_storage_pool(uuid: string): StoragePool;
        /**
         * Gets a list of the storage pools available through `conn`.
         * @returns List of #GVirStoragePool. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
         */
        get_storage_pools(): StoragePool[];
        get_stream(flags: number): Stream;
        get_uri(): string;
        /**
         * Get version of current hypervisor used.
         * @returns version on success, 0 otherwise and @err set.
         */
        get_version(): number;
        is_open(): boolean;
        is_read_only(): boolean;
        open(cancellable?: Gio.Cancellable | null): boolean;
        open_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        open_finish(result: Gio.AsyncResult): boolean;
        open_read_only(cancellable?: Gio.Cancellable | null): boolean;
        open_read_only_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_read_only_finish(result: Gio.AsyncResult): boolean;
        /**
         * Restores the domain saved with #gvir_domain_save_to_file
         * @param filename path to input file
         * @param custom_conf configuration for domain or NULL
         * @param flags the flags
         * @returns TRUE on success, FALSE otherwise
         */
        restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_connection_restore_domain_from_file
         * @param filename path to input file
         * @param custom_conf configuration for domain
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        restore_domain_from_file_async(
            filename: string,
            custom_conf: LibvirtGConfig.Domain | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started by #gvir_restore_domain_from_file_async.
         * @param result async method result
         * @returns TRUE if domain was restored successfully, FALSE otherwise.
         */
        restore_domain_from_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Start a new transient domain without persistent configuration.
         * The returned domain will initially be running.
         * @param conf the configuration for the new domain
         * @param flags
         * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain;
    }

    module Domain {
        // Signal callback interfaces

        interface Pmsuspended {
            (): void;
        }

        interface Resumed {
            (): void;
        }

        interface Started {
            (): void;
        }

        interface Stopped {
            (): void;
        }

        interface Suspended {
            (): void;
        }

        interface Updated {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainHandle;
            persistent: boolean;
        }
    }

    class Domain extends GObject.Object {
        static $gtype: GObject.GType<Domain>;

        // Own properties of LibvirtGObject.Domain

        get handle(): DomainHandle;
        get persistent(): boolean;

        // Constructors of LibvirtGObject.Domain

        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of LibvirtGObject.Domain

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'pmsuspended', callback: (_source: this) => void): number;
        connect_after(signal: 'pmsuspended', callback: (_source: this) => void): number;
        emit(signal: 'pmsuspended'): void;
        connect(signal: 'resumed', callback: (_source: this) => void): number;
        connect_after(signal: 'resumed', callback: (_source: this) => void): number;
        emit(signal: 'resumed'): void;
        connect(signal: 'started', callback: (_source: this) => void): number;
        connect_after(signal: 'started', callback: (_source: this) => void): number;
        emit(signal: 'started'): void;
        connect(signal: 'stopped', callback: (_source: this) => void): number;
        connect_after(signal: 'stopped', callback: (_source: this) => void): number;
        emit(signal: 'stopped'): void;
        connect(signal: 'suspended', callback: (_source: this) => void): number;
        connect_after(signal: 'suspended', callback: (_source: this) => void): number;
        emit(signal: 'suspended'): void;
        connect(signal: 'updated', callback: (_source: this) => void): number;
        connect_after(signal: 'updated', callback: (_source: this) => void): number;
        emit(signal: 'updated'): void;

        // Own virtual methods of LibvirtGObject.Domain

        vfunc_pmsuspended(): void;
        vfunc_resumed(): void;
        vfunc_started(): void;
        vfunc_stopped(): void;
        vfunc_suspended(): void;
        vfunc_updated(): void;

        // Own methods of LibvirtGObject.Domain

        create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot;
        create_snapshot_async(
            custom_conf: LibvirtGConfig.DomainSnapshot | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot;
        ['delete'](flags: number): boolean;
        fetch_snapshots(list_flags: number, cancellable?: Gio.Cancellable | null): boolean;
        fetch_snapshots_async(
            list_flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        fetch_snapshots_finish(res: Gio.AsyncResult): boolean;
        get_config(flags: number): LibvirtGConfig.Domain;
        /**
         * Gets the list of devices attached to `domain`. The returned list should
         * be freed with g_list_free(), after its elements have been unreffed with
         * g_object_unref().
         * @returns a newly allocated #GList of #GVirDomainDevice.
         */
        get_devices(): DomainDevice[];
        get_has_current_snapshot(flags: number): [boolean, boolean];
        get_id(): number;
        get_info(): DomainInfo;
        /**
         * Asynchronous variant of #gvir_domain_get_info.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_info_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes the operation started by #gvir_domain_get_info_async.
         * @param result async method result
         * @returns the info. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_info_finish(result: Gio.AsyncResult): DomainInfo;
        get_name(): string;
        get_persistent(): boolean;
        get_saved(): boolean;
        get_snapshots(): DomainSnapshot[];
        get_uuid(): string;
        /**
         * Open a text console for the domain `dom,` connecting it to the
         * stream `stream`. If `devname` is NULL, the default console will
         * be opened, otherwise `devname` can be used to specify a non-default
         * console device.
         * @param stream stream to use as output
         * @param devname the device name
         * @param flags extra flags, currently unused
         * @returns TRUE if the console was opened, FALSE otherwise.
         */
        open_console(stream: Stream, devname: string | null, flags: number): boolean;
        /**
         * Open a connection to the local graphics display, connecting it to the
         * socket pair file descriptor passed in as `fd`.
         * @param idx the graphics index
         * @param fd pre-opened socket pair
         * @param flags extra flags, currently unused
         * @returns TRUE if the graphics connection was opened, FALSE otherwise.
         */
        open_graphics(idx: number, fd: number, flags: number): boolean;
        /**
         * This will create a socket pair connected to the graphics backend of `dom`. One
         * end of the socket will be returned on success, and the other end is handed to
         * the hypervisor. If `dom` has multiple graphics backends configured, then `idx`
         * will determine which one is opened, starting from `idx` 0.
         * @param idx the graphics index
         * @param flags extra flags, currently unused
         * @returns An fd on success, -1 on failure.
         */
        open_graphics_fd(idx: number, flags: number): number;
        reboot(flags: number): boolean;
        resume(): boolean;
        /**
         * Asynchronous variant of #gvir_domain_resume.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        resume_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        resume_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves the state of the domain on disk and stops it. Use #gvir_domain_start
         * to restore the saved state of the domain. A saved domain can be restored
         * even after shutdown/reboot of host machine.
         * @param flags extra flags, currently unused
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save(flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_domain_save.
         * @param flags extra flags, currently unused
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        save_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started by #gvir_domain_save_async.
         * @param result async method result
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_domain_save_to_file
         * @param filename path to output file
         * @param custom_conf configuration for domain or NULL
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        save_to_file_async(
            filename: string,
            custom_conf: LibvirtGConfig.Domain | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started by #gvir_domain_save_to_file_async.
         * @param result async method result
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        screenshot(stream: Stream, monitor_id: number, flags: number): string;
        /**
         * Resets configuration of an existing domain.
         *
         * Note: If domain is already running, the new configuration will not take
         * affect until domain reboots.
         * @param conf the new configuration for the domain
         * @returns TRUE on success, FALSE if an error occurred.
         */
        set_config(conf: LibvirtGConfig.Domain): boolean;
        /**
         * This function tries to set guest time to the given value. The passed
         * time must in UTC.
         *
         * If `date_time` is %NULL, the time is reset using the domain's RTC.
         *
         * Please note that some hypervisors may require guest agent to be configured
         * and running in order for this function to work.
         * @param date_time the time to set as #GDateTime.
         * @param flags Unused, pass 0.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        set_time(date_time: GLib.DateTime | null, flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_domain_set_time.
         * @param date_time the time to set as #GDateTime.
         * @param flags bitwise-OR of #GVirDomainSetTimeFlags.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        set_time_async(
            date_time: GLib.DateTime | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started by #gvir_domain_set_time_async.
         * @param result async method result
         * @returns %TRUE on success, %FALSE otherwise.
         */
        set_time_finish(result: Gio.AsyncResult): boolean;
        shutdown(flags: number): boolean;
        start(flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_domain_start.
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        start_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(flags: number): boolean;
        /**
         * Suspends an active domain, the process is frozen without further access to
         * CPU resources and I/O but the memory used by the domain at the hypervisor
         * level will stay allocated. Use gvir_domain_resume() to reactivate the domain.
         * @returns TRUE if domain was suspended successfully, FALSE otherwise.
         */
        suspend(): boolean;
        /**
         * Update the configuration of a device.
         * @param device A modified device config
         * @param flags bitwise-OR of #GVirDomainUpdateDeviceFlags
         * @returns TRUE if device was updated successfully, FALSE otherwise.
         */
        update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean;
        wakeup(flags: number): boolean;
        /**
         * Asynchronous variant of #gvir_domain_wakeup.
         * @param flags placeholder for flags, pass 0
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        wakeup_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        wakeup_finish(result: Gio.AsyncResult): boolean;
    }

    module DomainDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: LibvirtGConfig.DomainDevice;
            domain: Domain;
        }
    }

    abstract class DomainDevice extends GObject.Object {
        static $gtype: GObject.GType<DomainDevice>;

        // Own properties of LibvirtGObject.DomainDevice

        get config(): LibvirtGConfig.DomainDevice;
        get domain(): Domain;

        // Constructors of LibvirtGObject.DomainDevice

        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.DomainDevice

        get_config(): LibvirtGConfig.DomainDevice;
        get_domain(): Domain;
    }

    module DomainDisk {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;

        // Constructors of LibvirtGObject.DomainDisk

        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.DomainDisk

        /**
         * This function returns network disk stats. Individual fields
         * within the stats structure may be returned as -1, which indicates
         * that the hypervisor does not support that particular statistic.
         * @returns the stats or %NULL in case of error.The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_stats(): DomainDiskStats;
        /**
         * This function resize the disk of a running domain.
         * @param size new size of the block image in kilobytes
         * @param flags flags, currently unused. Pass '0'.
         * @returns TRUE if size was successfully changed, FALSE otherwise.
         */
        resize(size: number, flags: number): boolean;
    }

    module DomainInterface {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainInterface extends DomainDevice {
        static $gtype: GObject.GType<DomainInterface>;

        // Constructors of LibvirtGObject.DomainInterface

        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.DomainInterface

        /**
         * This function returns network interface stats. Individual fields
         * within the stats structure may be returned as -1, which indicates
         * that the hypervisor does not support that particular statistic.
         * @returns the stats or %NULL in case of error. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_stats(): DomainInterfaceStats;
    }

    module DomainSnapshot {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainSnapshotHandle;
        }
    }

    class DomainSnapshot extends GObject.Object {
        static $gtype: GObject.GType<DomainSnapshot>;

        // Own properties of LibvirtGObject.DomainSnapshot

        get handle(): DomainSnapshotHandle;

        // Constructors of LibvirtGObject.DomainSnapshot

        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.DomainSnapshot

        ['delete'](flags: number): boolean;
        delete_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_finish(res: Gio.AsyncResult): boolean;
        get_config(flags: number): LibvirtGConfig.DomainSnapshot;
        get_is_current(flags: number): [boolean, boolean];
        get_name(): string;
        revert_to(flags: number): boolean;
        revert_to_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        revert_to_finish(result: Gio.AsyncResult): boolean;
        /**
         * Updates the given snapshot's configuration according to the
         * given GVirConfigDomainSnapshot.
         * @param conf The new config object
         * @returns %TRUE if no error was reported, %FALSE otherwise.
         */
        set_config(conf: LibvirtGConfig.DomainSnapshot): boolean;
    }

    module Interface {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: InterfaceHandle;
        }
    }

    class Interface extends GObject.Object {
        static $gtype: GObject.GType<Interface>;

        // Own properties of LibvirtGObject.Interface

        get handle(): InterfaceHandle;

        // Constructors of LibvirtGObject.Interface

        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.Interface

        get_config(flags: number): LibvirtGConfig.Interface;
        get_mac(): string;
        get_name(): string;
    }

    module Manager {
        // Signal callback interfaces

        interface ConnectionAdded {
            (object: Connection): void;
        }

        interface ConnectionRemoved {
            (object: Connection): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        // Constructors of LibvirtGObject.Manager

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Manager;

        // Own signals of LibvirtGObject.Manager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'connection-added', callback: (_source: this, object: Connection) => void): number;
        connect_after(signal: 'connection-added', callback: (_source: this, object: Connection) => void): number;
        emit(signal: 'connection-added', object: Connection): void;
        connect(signal: 'connection-removed', callback: (_source: this, object: Connection) => void): number;
        connect_after(signal: 'connection-removed', callback: (_source: this, object: Connection) => void): number;
        emit(signal: 'connection-removed', object: Connection): void;

        // Own virtual methods of LibvirtGObject.Manager

        vfunc_connection_added(conn: Connection): void;
        vfunc_connection_removed(conn: Connection): void;

        // Own methods of LibvirtGObject.Manager

        add_connection(conn: Connection): void;
        find_connection_by_uri(uri: string): Connection | null;
        get_connections(): Connection[];
        remove_connection(conn: Connection): void;
    }

    module Network {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkHandle;
        }
    }

    class Network extends GObject.Object {
        static $gtype: GObject.GType<Network>;

        // Own properties of LibvirtGObject.Network

        get handle(): NetworkHandle;

        // Constructors of LibvirtGObject.Network

        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of LibvirtGObject.Network

        vfunc_started(): void;
        vfunc_stopped(): void;

        // Own methods of LibvirtGObject.Network

        get_config(flags: number): LibvirtGConfig.Network;
        /**
         * This function fetches leases info of guests in the specified network. If the
         * optional parameter `mac` is specified, the returned list will contain only
         * lease info about a specific guest interface with `mac`. There can be multiple
         * leases for a single `mac` because this API supports DHCPv6 too.
         * @param mac The optional ASCII formatted MAC address of an interface
         * @param flags placeholder for flags, must be 0
         * @returns the list of network leases. Each object in the returned list should be unreffed with g_object_unref() and the list itself using g_list_free, when no longer needed.
         */
        get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[];
        get_name(): string;
        get_uuid(): string;
    }

    module NetworkDHCPLease {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: any;
        }
    }

    class NetworkDHCPLease extends GObject.Object {
        static $gtype: GObject.GType<NetworkDHCPLease>;

        // Own properties of LibvirtGObject.NetworkDHCPLease

        get handle(): any;

        // Constructors of LibvirtGObject.NetworkDHCPLease

        constructor(properties?: Partial<NetworkDHCPLease.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.NetworkDHCPLease

        get_client_id(): string;
        get_expiry_time(): number;
        get_hostname(): string;
        get_iaid(): string;
        get_iface(): string;
        get_ip(): string;
        get_ip_type(): number;
        get_mac(): string;
        get_prefix(): number;
    }

    module NetworkFilter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkFilterHandle;
        }
    }

    class NetworkFilter extends GObject.Object {
        static $gtype: GObject.GType<NetworkFilter>;

        // Own properties of LibvirtGObject.NetworkFilter

        get handle(): NetworkFilterHandle;

        // Constructors of LibvirtGObject.NetworkFilter

        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.NetworkFilter

        get_config(flags: number): LibvirtGConfig.NetworkFilter;
        get_name(): string;
        get_uuid(): string;
    }

    module NodeDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NodeDeviceHandle;
        }
    }

    class NodeDevice extends GObject.Object {
        static $gtype: GObject.GType<NodeDevice>;

        // Own properties of LibvirtGObject.NodeDevice

        get handle(): NodeDeviceHandle;

        // Constructors of LibvirtGObject.NodeDevice

        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.NodeDevice

        get_config(flags: number): LibvirtGConfig.NodeDevice;
        get_name(): string;
    }

    module Secret {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: SecretHandle;
        }
    }

    class Secret extends GObject.Object {
        static $gtype: GObject.GType<Secret>;

        // Own properties of LibvirtGObject.Secret

        get handle(): SecretHandle;

        // Constructors of LibvirtGObject.Secret

        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.Secret

        get_config(flags: number): LibvirtGConfig.Secret;
        get_name(): string;
        get_uuid(): string;
    }

    module StoragePool {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StoragePoolHandle;
        }
    }

    class StoragePool extends GObject.Object {
        static $gtype: GObject.GType<StoragePool>;

        // Own properties of LibvirtGObject.StoragePool

        get handle(): StoragePoolHandle;

        // Constructors of LibvirtGObject.StoragePool

        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.StoragePool

        build(flags: number): boolean;
        build_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        build_finish(result: Gio.AsyncResult): boolean;
        create_volume(conf: LibvirtGConfig.StorageVol): StorageVol;
        ['delete'](flags: number): boolean;
        delete_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        delete_finish(result: Gio.AsyncResult): boolean;
        get_active(): boolean;
        get_autostart(): boolean;
        get_config(flags: number): LibvirtGConfig.StoragePool;
        get_info(): StoragePoolInfo;
        get_name(): string;
        get_persistent(): boolean;
        get_uuid(): string;
        get_volume(name: string): StorageVol;
        get_volumes(): StorageVol[];
        refresh(cancellable?: Gio.Cancellable | null): boolean;
        refresh_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        refresh_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets whether or not storage pool `pool` is started automatically on boot.
         * @param autostart Whether or not to autostart
         * @returns #TRUE on success, #FALSE otherwise.
         */
        set_autostart(autostart: boolean): boolean;
        start(flags: number): boolean;
        start_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        start_finish(result: Gio.AsyncResult): boolean;
        stop(): boolean;
        stop_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        stop_finish(result: Gio.AsyncResult): boolean;
        undefine(): boolean;
        undefine_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        undefine_finish(result: Gio.AsyncResult): boolean;
    }

    module StorageVol {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StorageVolHandle;
            pool: StoragePool;
        }
    }

    class StorageVol extends GObject.Object {
        static $gtype: GObject.GType<StorageVol>;

        // Own properties of LibvirtGObject.StorageVol

        get handle(): StorageVolHandle;
        get pool(): StoragePool;

        // Constructors of LibvirtGObject.StorageVol

        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.StorageVol

        /**
         * Deletes the storage volume `vol`.
         * @param flags the flags
         * @returns %TRUE on success, %FALSE otherwise
         */
        ['delete'](flags: number): boolean;
        download(stream: Stream, offset: number, length: number, flags: number): boolean;
        get_config(flags: number): LibvirtGConfig.StorageVol;
        get_info(): StorageVolInfo;
        get_name(): string;
        get_path(): string;
        /**
         * Changes the capacity of the storage volume `vol` to `capacity`.
         * @param capacity the new capacity of the volume
         * @param flags the flags
         * @returns #TRUE success, #FALSE otherwise
         */
        resize(capacity: number, flags: StorageVolResizeFlags): boolean;
        upload(stream: Stream, offset: number, length: number, flags: number): boolean;
    }

    module Stream {
        // Constructor properties interface

        interface ConstructorProps extends Gio.IOStream.ConstructorProps {
            handle: StreamHandle;
        }
    }

    class Stream extends Gio.IOStream {
        static $gtype: GObject.GType<Stream>;

        // Own properties of LibvirtGObject.Stream

        get handle(): StreamHandle;

        // Constructors of LibvirtGObject.Stream

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGObject.Stream

        /**
         * Adds a watch for `stream` to the mainloop
         * @param priority the priority of the #GVirStream source
         * @param cond the conditions to watch for (bitfield of #GVirStreamIOCondition)
         * @param func the function to call when the condition is satisfied
         * @returns the event source id
         */
        add_watch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number;
        /**
         * Receive data (up to `size` bytes) from a stream.
         * On error -1 is returned and `error` is set accordingly.
         *
         * gvir_stream_receive() can return any number of bytes, up to
         * `size`. If more than `size` bytes have been received, the additional
         * data will be returned in future calls to gvir_stream_receive().
         *
         * If there is no data available, a %G_IO_ERROR_WOULD_BLOCK error will be
         * returned.
         * @param buffer a buffer     to read data into (which should be at least @size bytes long).
         * @param cancellable a %GCancellable or %NULL
         * @returns Number of bytes read, or 0 if the end of stream reached, or -1 on error.
         */
        receive(buffer: Uint8Array | string, cancellable?: Gio.Cancellable | null): number;
        /**
         * Receive the entire data stream, sending the data to the
         * requested data sink. This is simply a convenient alternative
         * to virStreamRecv, for apps that do blocking-I/o.
         * @param cancellable cancellation notifier
         * @param func the callback for writing data to application
         * @returns the number of bytes consumed or -1 upon error
         */
        receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number;
        /**
         * Send data (up to `size` bytes) from a stream.
         * On error -1 is returned and `error` is set accordingly.
         *
         * gvir_stream_send() can return any number of bytes, up to
         * `size`. If more than `size` bytes have been sendd, the additional
         * data will be returned in future calls to gvir_stream_send().
         *
         * If there is no data available, a %G_IO_ERROR_WOULD_BLOCK error will be
         * returned.
         * @param buffer a buffer to write data from (which should be at least @size     bytes long).
         * @param size the number of bytes you want to write to the stream
         * @param cancellable a %GCancellable or %NULL
         * @returns Number of bytes written.
         */
        send(buffer: string, size: number, cancellable?: Gio.Cancellable | null): number;
        /**
         * Send the entire data stream, sending the data to the
         * requested data source. This is simply a convenient alternative
         * to virStreamRecv, for apps that do blocking-I/o.
         * @param cancellable cancellation notifier
         * @param func the callback for writing data to application
         * @returns the number of bytes consumed or -1 upon error
         */
        send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number;
    }

    type ConnectionClass = typeof Connection;
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;

        // Constructors of LibvirtGObject.ConnectionPrivate

        _init(...args: any[]): void;
    }

    type DomainClass = typeof Domain;
    type DomainDeviceClass = typeof DomainDevice;
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;

        // Constructors of LibvirtGObject.DomainDevicePrivate

        _init(...args: any[]): void;
    }

    type DomainDiskClass = typeof DomainDisk;
    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;

        // Constructors of LibvirtGObject.DomainDiskPrivate

        _init(...args: any[]): void;
    }

    class DomainDiskStats {
        static $gtype: GObject.GType<DomainDiskStats>;

        // Own fields of LibvirtGObject.DomainDiskStats

        rd_req: number;
        rd_bytes: number;
        wr_req: number;
        wr_bytes: number;
        errs: number;

        // Constructors of LibvirtGObject.DomainDiskStats

        constructor(
            properties?: Partial<{
                rd_req: number;
                rd_bytes: number;
                wr_req: number;
                wr_bytes: number;
                errs: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class DomainInfo {
        static $gtype: GObject.GType<DomainInfo>;

        // Own fields of LibvirtGObject.DomainInfo

        state: DomainState;
        maxMem: number;
        memory: number;
        nrVirtCpu: number;
        cpuTime: number;

        // Constructors of LibvirtGObject.DomainInfo

        _init(...args: any[]): void;
    }

    type DomainInterfaceClass = typeof DomainInterface;
    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;

        // Constructors of LibvirtGObject.DomainInterfacePrivate

        _init(...args: any[]): void;
    }

    class DomainInterfaceStats {
        static $gtype: GObject.GType<DomainInterfaceStats>;

        // Own fields of LibvirtGObject.DomainInterfaceStats

        rx_bytes: number;
        rx_packets: number;
        rx_errs: number;
        rx_drop: number;
        tx_bytes: number;
        tx_packets: number;
        tx_errs: number;
        tx_drop: number;

        // Constructors of LibvirtGObject.DomainInterfaceStats

        constructor(
            properties?: Partial<{
                rx_bytes: number;
                rx_packets: number;
                rx_errs: number;
                rx_drop: number;
                tx_bytes: number;
                tx_packets: number;
                tx_errs: number;
                tx_drop: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;

        // Constructors of LibvirtGObject.DomainPrivate

        _init(...args: any[]): void;
    }

    type DomainSnapshotClass = typeof DomainSnapshot;
    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;

        // Constructors of LibvirtGObject.DomainSnapshotPrivate

        _init(...args: any[]): void;
    }

    type InterfaceClass = typeof Interface;
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;

        // Constructors of LibvirtGObject.InterfacePrivate

        _init(...args: any[]): void;
    }

    type ManagerClass = typeof Manager;
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;

        // Constructors of LibvirtGObject.ManagerPrivate

        _init(...args: any[]): void;
    }

    type NetworkClass = typeof Network;
    type NetworkDHCPLeaseClass = typeof NetworkDHCPLease;
    abstract class NetworkDHCPLeasePrivate {
        static $gtype: GObject.GType<NetworkDHCPLeasePrivate>;

        // Constructors of LibvirtGObject.NetworkDHCPLeasePrivate

        _init(...args: any[]): void;
    }

    type NetworkFilterClass = typeof NetworkFilter;
    abstract class NetworkFilterPrivate {
        static $gtype: GObject.GType<NetworkFilterPrivate>;

        // Constructors of LibvirtGObject.NetworkFilterPrivate

        _init(...args: any[]): void;
    }

    abstract class NetworkPrivate {
        static $gtype: GObject.GType<NetworkPrivate>;

        // Constructors of LibvirtGObject.NetworkPrivate

        _init(...args: any[]): void;
    }

    type NodeDeviceClass = typeof NodeDevice;
    abstract class NodeDevicePrivate {
        static $gtype: GObject.GType<NodeDevicePrivate>;

        // Constructors of LibvirtGObject.NodeDevicePrivate

        _init(...args: any[]): void;
    }

    class NodeInfo {
        static $gtype: GObject.GType<NodeInfo>;

        // Own fields of LibvirtGObject.NodeInfo

        model: number[];
        memory: number;
        cpus: number;
        mhz: number;
        nodes: number;
        sockets: number;
        cores: number;
        threads: number;

        // Constructors of LibvirtGObject.NodeInfo

        constructor(
            properties?: Partial<{
                model: number[];
                memory: number;
                cpus: number;
                mhz: number;
                nodes: number;
                sockets: number;
                cores: number;
                threads: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SecretClass = typeof Secret;
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;

        // Constructors of LibvirtGObject.SecretPrivate

        _init(...args: any[]): void;
    }

    type StoragePoolClass = typeof StoragePool;
    class StoragePoolInfo {
        static $gtype: GObject.GType<StoragePoolInfo>;

        // Own fields of LibvirtGObject.StoragePoolInfo

        state: StoragePoolState;
        capacity: number;
        allocation: number;
        available: number;

        // Constructors of LibvirtGObject.StoragePoolInfo

        _init(...args: any[]): void;
    }

    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;

        // Constructors of LibvirtGObject.StoragePoolPrivate

        _init(...args: any[]): void;
    }

    type StorageVolClass = typeof StorageVol;
    class StorageVolInfo {
        static $gtype: GObject.GType<StorageVolInfo>;

        // Own fields of LibvirtGObject.StorageVolInfo

        type: StorageVolType;
        capacity: number;
        allocation: number;

        // Constructors of LibvirtGObject.StorageVolInfo

        _init(...args: any[]): void;
    }

    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;

        // Constructors of LibvirtGObject.StorageVolPrivate

        _init(...args: any[]): void;
    }

    type StreamClass = typeof Stream;
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;

        // Constructors of LibvirtGObject.StreamPrivate

        _init(...args: any[]): void;
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

export default LibvirtGObject;
// END
