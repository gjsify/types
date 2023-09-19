
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-libvirtgobject-1.0-import.d.ts';
    
/**
 * LibvirtGObject-1.0
 */

import type LibvirtGLib from '@girs/node-libvirtglib-1.0';
import type GLib from '@girs/node-glib-2.0';
import type LibvirtGConfig from '@girs/node-libvirtgconfig-1.0';
import type libxml2 from '@girs/node-libxml2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type Gio from '@girs/node-gio-2.0';

export enum DomainDeleteFlags {
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
export enum DomainRebootFlags {
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
export enum DomainShutdownFlags {
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
export enum DomainSnapshotCreateFlags {
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
export enum DomainSnapshotDeleteFlags {
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
export enum DomainSnapshotListFlags {
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
export enum DomainSnapshotRevertFlags {
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
export enum DomainState {
    NONE,
    RUNNING,
    BLOCKED,
    PAUSED,
    SHUTDOWN,
    SHUTOFF,
    CRASHED,
    PMSUSPENDED,
}
export enum DomainUpdateDeviceFlags {
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
export enum DomainXMLFlags {
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
export enum IPAddrType {
    /**
     * IPv4 Address.
     */
    IPV4,
    /**
     * IPv6 Address.
     */
    IPV6,
}
export enum StoragePoolState {
    INACTIVE,
    BUILDING,
    RUNNING,
    DEGRADED,
    INACCESSIBLE,
}
export enum StorageVolResizeFlags {
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
export enum StorageVolType {
    FILE,
    BLOCK,
    DIR,
}
export enum DomainStartFlags {
    NONE,
    PAUSED,
    AUTODESTROY,
    BYPASS_CACHE,
    FORCE_BOOT,
}
export enum StreamIOCondition {
    READABLE,
    WRITABLE,
    HANGUP,
    ERROR,
}
export function initObject(argv: string[] | null): /* argv */ string[] | null
export function initObjectCheck(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
export interface StreamIOFunc {
    (stream: Stream, cond: StreamIOCondition, opaque: any | null): boolean
}
export interface StreamSinkFunc {
    (stream: Stream): number
}
export interface StreamSourceFunc {
    (stream: Stream): number
}
export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connection-closed`
     */
    export interface ConnectionClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `connection-opened`
     */
    export interface ConnectionOpenedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `domain-added`
     */
    export interface DomainAddedSignalCallback {
        (object: Domain): void
    }

    /**
     * Signal callback interface for `domain-removed`
     */
    export interface DomainRemovedSignalCallback {
        (object: Domain): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Connection

        handle?: any | null
        uri?: string | null
    }

}

export interface Connection {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Connection

    readonly handle: any
    readonly uri: string | null
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Connection

    close(): void
    /**
     * Create the configuration file for a new persistent domain.
     * The returned domain will initially be in the shutoff state.
     * @param conf the configuration for the new domain
     * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    createDomain(conf: LibvirtGConfig.Domain): Domain
    createStoragePool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool
    /**
     * Use this method to fetch all domains managed by connection
     * `conn`. Use e.g. #gvir_connection_find_domain_by_id or
     * #gvir_connection_get_domain afterwards to query the fetched
     * domains.
     * @param cancellable cancellation object
     */
    fetchDomains(cancellable: Gio.Cancellable | null): boolean
    fetchDomainsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchDomainsFinish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch information on all network interfaces
     * managed by connection `conn` on host machine. Use
     * #gvir_connection_get_interfaces or #gvir_connection_get_interface afterwards
     * to query the fetched interfaces.
     * @param cancellable cancellation object
     * @returns %TRUE on success, %FALSE otherwise and @err is set.
     */
    fetchInterfaces(cancellable: Gio.Cancellable | null): boolean
    fetchInterfacesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchInterfacesFinish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch all networks managed by connection
     * `conn`. Use e.g. #gvir_connection_find_network_by_name or
     * #gvir_connection_get_networks afterwards to query the fetched
     * domains.
     * @param cancellable cancellation object
     */
    fetchNetworks(cancellable: Gio.Cancellable | null): boolean
    fetchNetworksAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchNetworksFinish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch all storage pools managed by connection
     * `conn`. Use e.g. #gvir_connection_find_storage_pool_by_name or
     * #gvir_connection_get_storage_pools afterwards to query the fetched
     * pools.
     * @param cancellable cancellation object
     */
    fetchStoragePools(cancellable: Gio.Cancellable | null): boolean
    fetchStoragePoolsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchStoragePoolsFinish(result: Gio.AsyncResult): boolean
    findDomainById(id: number): Domain
    findDomainByName(name: string | null): Domain
    /**
     * Get a particular interface which has MAC address `mac`.
     * @param macaddr MAC address to lookup
     * @returns A new reference to a #GVirInterface, or NULL if no interface exists with MAC address @mac. The returned object must be unreffed using g_object_unref() once used.
     */
    findInterfaceByMac(macaddr: string | null): Interface
    /**
     * Get a particular network which has name `name`.
     * @param name name of the network to search for
     * @returns A new reference to a #GVirNetwork, or NULL if no network exists with name @name. The returned object must be unreffed using g_object_unref() once used.
     */
    findNetworkByName(name: string | null): Network
    findStoragePoolByName(name: string | null): StoragePool
    getCapabilities(): LibvirtGConfig.Capabilities
    getCapabilitiesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    getDomain(uuid: string | null): Domain
    getDomainCapabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    getDomainCapabilitiesAsync(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDomainCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    /**
     * Gets a list of the domains available through `conn`.
     * @returns List of #GVirDomain. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
     */
    getDomains(): Domain[]
    /**
     * Get name of current hypervisor used.
     * @returns new string that should be freed when no longer needed, or NULL upon error.
     */
    getHypervisorName(): string | null
    /**
     * Get a particular interface which has name `name`.
     * @param name interface name to lookup
     * @returns A new reference to a #GVirInterface, or NULL if no interface exists with name @name. The returned object must be unreffed using g_object_unref() once used.
     */
    getInterface(name: string | null): Interface
    /**
     * Get a list of all the network interfaces managed by connection `conn` on
     * host machine.
     * @returns List of #GVirInterface. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
     */
    getInterfaces(): Interface[]
    /**
     * Get a particular network which has UUID `uuid`.
     * @param uuid UUID of the network to lookup
     * @returns A new reference to a #GVirNetwork, or NULL if no network exists with UUID @uuid. The returned object must be unreffed using g_object_unref() once used.
     */
    getNetwork(uuid: string | null): Network
    /**
     * Get a list of all the network networks available through `conn`.
     * @returns List of #GVirNetwork. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
     */
    getNetworks(): Network[]
    getNodeInfo(): NodeInfo
    getStoragePool(uuid: string | null): StoragePool
    /**
     * Gets a list of the storage pools available through `conn`.
     * @returns List of #GVirStoragePool. The returned list should be freed with g_list_free(), after its elements have been unreffed with g_object_unref().
     */
    getStoragePools(): StoragePool[]
    getStream(flags: number): Stream
    getUri(): string | null
    /**
     * Get version of current hypervisor used.
     * @returns version on success, 0 otherwise and @err set.
     */
    getVersion(): number
    isOpen(): boolean
    isReadOnly(): boolean
    open(cancellable: Gio.Cancellable | null): boolean
    openAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    openFinish(result: Gio.AsyncResult): boolean
    openReadOnly(cancellable: Gio.Cancellable | null): boolean
    openReadOnlyAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    openReadOnlyFinish(result: Gio.AsyncResult): boolean
    /**
     * Restores the domain saved with #gvir_domain_save_to_file
     * @param filename path to input file
     * @param customConf configuration for domain or NULL
     * @param flags the flags
     * @returns TRUE on success, FALSE otherwise
     */
    restoreDomainFromFile(filename: string | null, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_connection_restore_domain_from_file
     * @param filename path to input file
     * @param customConf configuration for domain
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    restoreDomainFromFileAsync(filename: string | null, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_restore_domain_from_file_async.
     * @param result async method result
     * @returns TRUE if domain was restored successfully, FALSE otherwise.
     */
    restoreDomainFromFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Start a new transient domain without persistent configuration.
     * The returned domain will initially be running.
     * @param conf the configuration for the new domain
     * @param flags 
     * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    startDomain(conf: LibvirtGConfig.Domain, flags: number): Domain

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Connection

    connectionClosed(): void
    connectionOpened(): void
    domainAdded(dom: Domain): void
    domainRemoved(dom: Domain): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Connection

    connect(sigName: "connection-closed", callback: Connection.ConnectionClosedSignalCallback): number
    on(sigName: "connection-closed", callback: Connection.ConnectionClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: Connection.ConnectionClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: Connection.ConnectionClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-closed", ...args: any[]): void
    connect(sigName: "connection-opened", callback: Connection.ConnectionOpenedSignalCallback): number
    on(sigName: "connection-opened", callback: Connection.ConnectionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-opened", callback: Connection.ConnectionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-opened", callback: Connection.ConnectionOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-opened", ...args: any[]): void
    connect(sigName: "domain-added", callback: Connection.DomainAddedSignalCallback): number
    on(sigName: "domain-added", callback: Connection.DomainAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-added", callback: Connection.DomainAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-added", callback: Connection.DomainAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "domain-added", ...args: any[]): void
    connect(sigName: "domain-removed", callback: Connection.DomainRemovedSignalCallback): number
    on(sigName: "domain-removed", callback: Connection.DomainRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-removed", callback: Connection.DomainRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-removed", callback: Connection.DomainRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "domain-removed", ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Connection

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Connection extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Connection

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Connection

    constructor(config?: Connection.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): Connection
    _init(config?: Connection.ConstructorProperties): void
}

export module Domain {

    // Signal callback interfaces

    /**
     * Signal callback interface for `pmsuspended`
     */
    export interface PmsuspendedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `resumed`
     */
    export interface ResumedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `started`
     */
    export interface StartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `stopped`
     */
    export interface StoppedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `suspended`
     */
    export interface SuspendedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Domain

        handle?: any | null
    }

}

export interface Domain {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    readonly handle: any
    readonly persistent: boolean
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Domain

    parent: GObject.Object
    priv: DomainPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Domain

    createSnapshot(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot
    createSnapshotAsync(customConf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    createSnapshotFinish(result: Gio.AsyncResult): DomainSnapshot
    delete(flags: number): boolean
    fetchSnapshots(listFlags: number, cancellable: Gio.Cancellable | null): boolean
    fetchSnapshotsAsync(listFlags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetchSnapshotsFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.Domain
    /**
     * Gets the list of devices attached to `domain`. The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns a newly allocated #GList of #GVirDomainDevice.
     */
    getDevices(): DomainDevice[]
    getHasCurrentSnapshot(flags: number): [ /* returnType */ boolean, /* hasCurrentSnapshot */ boolean ]
    getId(): number
    getInfo(): DomainInfo
    /**
     * Asynchronous variant of #gvir_domain_get_info.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    getInfoAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_get_info_async.
     * @param result async method result
     * @returns the info. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getInfoFinish(result: Gio.AsyncResult): DomainInfo
    getName(): string | null
    getPersistent(): boolean
    getSaved(): boolean
    getSnapshots(): DomainSnapshot[]
    getUuid(): string | null
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
    openConsole(stream: Stream, devname: string | null, flags: number): boolean
    /**
     * Open a connection to the local graphics display, connecting it to the
     * socket pair file descriptor passed in as `fd`.
     * @param idx the graphics index
     * @param fd pre-opened socket pair
     * @param flags extra flags, currently unused
     * @returns TRUE if the graphics connection was opened, FALSE otherwise.
     */
    openGraphics(idx: number, fd: number, flags: number): boolean
    /**
     * This will create a socket pair connected to the graphics backend of `dom`. One
     * end of the socket will be returned on success, and the other end is handed to
     * the hypervisor. If `dom` has multiple graphics backends configured, then `idx`
     * will determine which one is opened, starting from `idx` 0.
     * @param idx the graphics index
     * @param flags extra flags, currently unused
     * @returns An fd on success, -1 on failure.
     */
    openGraphicsFd(idx: number, flags: number): number
    reboot(flags: number): boolean
    resume(): boolean
    /**
     * Asynchronous variant of #gvir_domain_resume.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    resumeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    resumeFinish(result: Gio.AsyncResult): boolean
    /**
     * Saves the state of the domain on disk and stops it. Use #gvir_domain_start
     * to restore the saved state of the domain. A saved domain can be restored
     * even after shutdown/reboot of host machine.
     * @param flags extra flags, currently unused
     * @returns TRUE if domain was saved successfully, FALSE otherwise.
     */
    save(flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_save.
     * @param flags extra flags, currently unused
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    saveAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_save_async.
     * @param result async method result
     * @returns TRUE if domain was saved successfully, FALSE otherwise.
     */
    saveFinish(result: Gio.AsyncResult): boolean
    saveToFile(filename: string | null, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_save_to_file
     * @param filename path to output file
     * @param customConf configuration for domain or NULL
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    saveToFileAsync(filename: string | null, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_save_to_file_async.
     * @param result async method result
     * @returns TRUE if domain was saved successfully, FALSE otherwise.
     */
    saveToFileFinish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitorId: number, flags: number): string | null
    /**
     * Resets configuration of an existing domain.
     * 
     * Note: If domain is already running, the new configuration will not take
     * affect until domain reboots.
     * @param conf the new configuration for the domain
     * @returns TRUE on success, FALSE if an error occurred.
     */
    setConfig(conf: LibvirtGConfig.Domain): boolean
    /**
     * This function tries to set guest time to the given value. The passed
     * time must in UTC.
     * 
     * If `date_time` is %NULL, the time is reset using the domain's RTC.
     * 
     * Please note that some hypervisors may require guest agent to be configured
     * and running in order for this function to work.
     * @param dateTime the time to set as #GDateTime.
     * @param flags Unused, pass 0.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    setTime(dateTime: GLib.DateTime | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_set_time.
     * @param dateTime the time to set as #GDateTime.
     * @param flags bitwise-OR of #GVirDomainSetTimeFlags.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    setTimeAsync(dateTime: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_set_time_async.
     * @param result async method result
     * @returns %TRUE on success, %FALSE otherwise.
     */
    setTimeFinish(result: Gio.AsyncResult): boolean
    shutdown(flags: number): boolean
    start(flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_start.
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    startAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(flags: number): boolean
    /**
     * Suspends an active domain, the process is frozen without further access to
     * CPU resources and I/O but the memory used by the domain at the hypervisor
     * level will stay allocated. Use gvir_domain_resume() to reactivate the domain.
     * @returns TRUE if domain was suspended successfully, FALSE otherwise.
     */
    suspend(): boolean
    /**
     * Update the configuration of a device.
     * @param device A modified device config
     * @param flags bitwise-OR of #GVirDomainUpdateDeviceFlags
     * @returns TRUE if device was updated successfully, FALSE otherwise.
     */
    updateDevice(device: LibvirtGConfig.DomainDevice, flags: number): boolean
    wakeup(flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_wakeup.
     * @param flags placeholder for flags, pass 0
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    wakeupAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    wakeupFinish(result: Gio.AsyncResult): boolean

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Domain

    pmsuspended(): void
    resumed(): void
    started(): void
    stopped(): void
    suspended(): void
    updated(): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Domain

    connect(sigName: "pmsuspended", callback: Domain.PmsuspendedSignalCallback): number
    on(sigName: "pmsuspended", callback: Domain.PmsuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pmsuspended", callback: Domain.PmsuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pmsuspended", callback: Domain.PmsuspendedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pmsuspended", ...args: any[]): void
    connect(sigName: "resumed", callback: Domain.ResumedSignalCallback): number
    on(sigName: "resumed", callback: Domain.ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: Domain.ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: Domain.ResumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resumed", ...args: any[]): void
    connect(sigName: "started", callback: Domain.StartedSignalCallback): number
    on(sigName: "started", callback: Domain.StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: Domain.StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: Domain.StartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Domain.StoppedSignalCallback): number
    on(sigName: "stopped", callback: Domain.StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: Domain.StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: Domain.StoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stopped", ...args: any[]): void
    connect(sigName: "suspended", callback: Domain.SuspendedSignalCallback): number
    on(sigName: "suspended", callback: Domain.SuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suspended", callback: Domain.SuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suspended", callback: Domain.SuspendedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "suspended", ...args: any[]): void
    connect(sigName: "updated", callback: Domain.UpdatedSignalCallback): number
    on(sigName: "updated", callback: Domain.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: Domain.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: Domain.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Domain

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::persistent", callback: (...args: any[]) => void): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::persistent", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Domain extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Domain

    constructor(config?: Domain.ConstructorProperties) 
    _init(config?: Domain.ConstructorProperties): void
}

export module DomainDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

        config?: LibvirtGConfig.DomainDevice | null
        domain?: Domain | null
    }

}

export interface DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    readonly config: LibvirtGConfig.DomainDevice
    readonly domain: Domain
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    parent: GObject.Object
    priv: DomainDevicePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    getConfig(): LibvirtGConfig.DomainDevice
    getDomain(): Domain

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
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
    disconnect(id: number): void
}

export class DomainDevice extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    constructor(config?: DomainDevice.ConstructorProperties) 
    _init(config?: DomainDevice.ConstructorProperties): void
}

export module DomainDisk {

    // Constructor properties interface

    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

export interface DomainDisk {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    parent: DomainDevice & GObject.Object
    priv: any

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    /**
     * This function returns network disk stats. Individual fields
     * within the stats structure may be returned as -1, which indicates
     * that the hypervisor does not support that particular statistic.
     * @returns the stats or %NULL in case of error.The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getStats(): DomainDiskStats
    /**
     * This function resize the disk of a running domain.
     * @param size new size of the block image in kilobytes
     * @param flags flags, currently unused. Pass '0'.
     * @returns TRUE if size was successfully changed, FALSE otherwise.
     */
    resize(size: number, flags: number): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomainDisk extends DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    constructor(config?: DomainDisk.ConstructorProperties) 
    _init(config?: DomainDisk.ConstructorProperties): void
}

export module DomainInterface {

    // Constructor properties interface

    export interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

export interface DomainInterface {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    parent: DomainDevice & GObject.Object
    priv: any

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    /**
     * This function returns network interface stats. Individual fields
     * within the stats structure may be returned as -1, which indicates
     * that the hypervisor does not support that particular statistic.
     * @returns the stats or %NULL in case of error. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getStats(): DomainInterfaceStats

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DomainInterface extends DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    constructor(config?: DomainInterface.ConstructorProperties) 
    _init(config?: DomainInterface.ConstructorProperties): void
}

export module DomainSnapshot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

        handle?: any | null
    }

}

export interface DomainSnapshot {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    parent: GObject.Object
    priv: DomainSnapshotPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.DomainSnapshot
    getIsCurrent(flags: number): [ /* returnType */ boolean, /* isCurrent */ boolean ]
    getName(): string | null
    revertTo(flags: number): boolean
    revertToAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    revertToFinish(result: Gio.AsyncResult): boolean
    /**
     * Updates the given snapshot's configuration according to the
     * given GVirConfigDomainSnapshot.
     * @param conf The new config object
     * @returns %TRUE if no error was reported, %FALSE otherwise.
     */
    setConfig(conf: LibvirtGConfig.DomainSnapshot): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class DomainSnapshot extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    constructor(config?: DomainSnapshot.ConstructorProperties) 
    _init(config?: DomainSnapshot.ConstructorProperties): void
}

export module Interface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Interface

        handle?: any | null
    }

}

export interface Interface {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Interface

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Interface

    parent: GObject.Object
    priv: InterfacePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Interface

    getConfig(flags: number): LibvirtGConfig.Interface
    getMac(): string | null
    getName(): string | null

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Interface

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Interface extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Interface

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Interface

    constructor(config?: Interface.ConstructorProperties) 
    _init(config?: Interface.ConstructorProperties): void
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connection-added`
     */
    export interface ConnectionAddedSignalCallback {
        (object: Connection): void
    }

    /**
     * Signal callback interface for `connection-removed`
     */
    export interface ConnectionRemovedSignalCallback {
        (object: Connection): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Manager {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Manager

    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Manager

    parent: GObject.Object
    priv: ManagerPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Manager

    addConnection(conn: Connection): void
    findConnectionByUri(uri: string | null): Connection | null
    getConnections(): Connection[]
    removeConnection(conn: Connection): void

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Manager

    connectionAdded(conn: Connection): void
    connectionRemoved(conn: Connection): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Manager

    connect(sigName: "connection-added", callback: Manager.ConnectionAddedSignalCallback): number
    on(sigName: "connection-added", callback: Manager.ConnectionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-added", callback: Manager.ConnectionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-added", callback: Manager.ConnectionAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-added", ...args: any[]): void
    connect(sigName: "connection-removed", callback: Manager.ConnectionRemovedSignalCallback): number
    on(sigName: "connection-removed", callback: Manager.ConnectionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-removed", callback: Manager.ConnectionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-removed", callback: Manager.ConnectionRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-removed", ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Manager

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
    disconnect(id: number): void
}

export class Manager extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Manager

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Manager

    constructor(config?: Manager.ConstructorProperties) 
    constructor() 
    static new(): Manager
    _init(config?: Manager.ConstructorProperties): void
}

export module Network {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Network

        handle?: any | null
    }

}

export interface Network {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Network

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Network

    parent: GObject.Object
    priv: NetworkPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Network

    getConfig(flags: number): LibvirtGConfig.Network
    /**
     * This function fetches leases info of guests in the specified network. If the
     * optional parameter `mac` is specified, the returned list will contain only
     * lease info about a specific guest interface with `mac`. There can be multiple
     * leases for a single `mac` because this API supports DHCPv6 too.
     * @param mac The optional ASCII formatted MAC address of an interface
     * @param flags placeholder for flags, must be 0
     * @returns the list of network leases. Each object in the returned list should be unreffed with g_object_unref() and the list itself using g_list_free, when no longer needed.
     */
    getDhcpLeases(mac: string | null, flags: number): NetworkDHCPLease[]
    getName(): string | null
    getUuid(): string | null

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Network

    started(): void
    stopped(): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Network

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Network extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Network

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Network

    constructor(config?: Network.ConstructorProperties) 
    _init(config?: Network.ConstructorProperties): void
}

export module NetworkDHCPLease {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

        handle?: any | null
    }

}

export interface NetworkDHCPLease {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    parent: GObject.Object
    priv: NetworkDHCPLeasePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    getClientId(): string | null
    getExpiryTime(): number
    getHostname(): string | null
    getIaid(): string | null
    getIface(): string | null
    getIp(): string | null
    getIpType(): number
    getMac(): string | null
    getPrefix(): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class NetworkDHCPLease extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    constructor(config?: NetworkDHCPLease.ConstructorProperties) 
    _init(config?: NetworkDHCPLease.ConstructorProperties): void
}

export module NetworkFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

        handle?: any | null
    }

}

export interface NetworkFilter {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    parent: GObject.Object
    priv: NetworkFilterPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    getConfig(flags: number): LibvirtGConfig.NetworkFilter
    getName(): string | null
    getUuid(): string | null

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class NetworkFilter extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    constructor(config?: NetworkFilter.ConstructorProperties) 
    _init(config?: NetworkFilter.ConstructorProperties): void
}

export module NodeDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

        handle?: any | null
    }

}

export interface NodeDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    parent: GObject.Object
    priv: NodeDevicePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    getConfig(flags: number): LibvirtGConfig.NodeDevice
    getName(): string | null

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class NodeDevice extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    constructor(config?: NodeDevice.ConstructorProperties) 
    _init(config?: NodeDevice.ConstructorProperties): void
}

export module Secret {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Secret

        handle?: any | null
    }

}

export interface Secret {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Secret

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Secret

    parent: GObject.Object
    priv: SecretPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Secret

    getConfig(flags: number): LibvirtGConfig.Secret
    getName(): string | null
    getUuid(): string | null

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Secret

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class Secret extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Secret

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Secret

    constructor(config?: Secret.ConstructorProperties) 
    _init(config?: Secret.ConstructorProperties): void
}

export module StoragePool {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

        handle?: any | null
    }

}

export interface StoragePool {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    parent: GObject.Object
    priv: StoragePoolPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    build(flags: number): boolean
    buildAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    buildFinish(result: Gio.AsyncResult): boolean
    createVolume(conf: LibvirtGConfig.StorageVol): StorageVol
    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(result: Gio.AsyncResult): boolean
    getActive(): boolean
    getAutostart(): boolean
    getConfig(flags: number): LibvirtGConfig.StoragePool
    getInfo(): StoragePoolInfo
    getName(): string | null
    getPersistent(): boolean
    getUuid(): string | null
    getVolume(name: string | null): StorageVol
    getVolumes(): StorageVol[]
    refresh(cancellable: Gio.Cancellable | null): boolean
    refreshAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets whether or not storage pool `pool` is started automatically on boot.
     * @param autostart Whether or not to autostart
     * @returns #TRUE on success, #FALSE otherwise.
     */
    setAutostart(autostart: boolean): boolean
    start(flags: number): boolean
    startAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    startFinish(result: Gio.AsyncResult): boolean
    stop(): boolean
    stopAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stopFinish(result: Gio.AsyncResult): boolean
    undefine(): boolean
    undefineAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    undefineFinish(result: Gio.AsyncResult): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
    disconnect(id: number): void
}

export class StoragePool extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    constructor(config?: StoragePool.ConstructorProperties) 
    _init(config?: StoragePool.ConstructorProperties): void
}

export module StorageVol {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

        handle?: any | null
        pool?: StoragePool | null
    }

}

export interface StorageVol {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    readonly handle: any
    readonly pool: StoragePool
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    parent: GObject.Object
    priv: StorageVolPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    /**
     * Deletes the storage volume `vol`.
     * @param flags the flags
     * @returns %TRUE on success, %FALSE otherwise
     */
    delete(flags: number): boolean
    download(stream: Stream, offset: number, length: number, flags: number): boolean
    getConfig(flags: number): LibvirtGConfig.StorageVol
    getInfo(): StorageVolInfo
    getName(): string | null
    getPath(): string | null
    /**
     * Changes the capacity of the storage volume `vol` to `capacity`.
     * @param capacity the new capacity of the volume
     * @param flags the flags
     * @returns #TRUE success, #FALSE otherwise
     */
    resize(capacity: number, flags: StorageVolResizeFlags): boolean
    upload(stream: Stream, offset: number, length: number, flags: number): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
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
    disconnect(id: number): void
}

export class StorageVol extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    constructor(config?: StorageVol.ConstructorProperties) 
    _init(config?: StorageVol.ConstructorProperties): void
}

export module Stream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.IOStream.ConstructorProperties {

        // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Stream

        handle?: any | null
    }

}

export interface Stream {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Stream

    readonly handle: any
    __gtype__: number

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Stream

    parentInstance: any
    priv: StreamPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Stream

    /**
     * Adds a watch for `stream` to the mainloop
     * @param priority the priority of the #GVirStream source
     * @param cond the conditions to watch for (bitfield of #GVirStreamIOCondition)
     * @param func the function to call when the condition is satisfied
     * @returns the event source id
     */
    addWatch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number
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
     * @param buffer a buffer     to read data into (which should be at least `size` bytes long).
     * @param cancellable a %GCancellable or %NULL
     * @returns Number of bytes read, or 0 if the end of stream reached, or -1 on error.
     */
    receive(buffer: number[], cancellable: Gio.Cancellable | null): number
    /**
     * Receive the entire data stream, sending the data to the
     * requested data sink. This is simply a convenient alternative
     * to virStreamRecv, for apps that do blocking-I/o.
     * @param cancellable cancellation notifier
     * @param func the callback for writing data to application
     * @returns the number of bytes consumed or -1 upon error
     */
    receiveAll(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number
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
     * @param buffer a buffer to write data from (which should be at least `size`     bytes long).
     * @param size the number of bytes you want to write to the stream
     * @param cancellable a %GCancellable or %NULL
     * @returns Number of bytes written.
     */
    send(buffer: string | null, size: number, cancellable: Gio.Cancellable | null): number
    /**
     * Send the entire data stream, sending the data to the
     * requested data source. This is simply a convenient alternative
     * to virStreamRecv, for apps that do blocking-I/o.
     * @param cancellable cancellation notifier
     * @param func the callback for writing data to application
     * @returns the number of bytes consumed or -1 upon error
     */
    sendAll(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Stream

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (...args: any[]) => void): number
    on(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::closed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::closed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::output-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::output-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stream extends Gio.IOStream {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Stream

    static name: string

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Stream

    constructor(config?: Stream.ConstructorProperties) 
    _init(config?: Stream.ConstructorProperties): void
}

export interface ConnectionClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass

    parentClass: GObject.ObjectClass
    connectionOpened: (conn: Connection) => void
    connectionClosed: (conn: Connection) => void
    domainAdded: (conn: Connection, dom: Domain) => void
    domainRemoved: (conn: Connection, dom: Domain) => void
    padding: any[]
}

export abstract class ConnectionClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ConnectionPrivate

    static name: string
}

export interface DomainClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainClass

    parentClass: GObject.ObjectClass
    started: (dom: Domain) => void
    stopped: (dom: Domain) => void
    resumed: (dom: Domain) => void
    updated: (dom: Domain) => void
    suspended: (dom: Domain) => void
    pmsuspended: (dom: Domain) => void
    padding: any[]
}

export abstract class DomainClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainClass

    static name: string
}

export interface DomainDeviceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class DomainDeviceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass

    static name: string
}

export interface DomainDevicePrivate {
}

export class DomainDevicePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevicePrivate

    static name: string
}

export interface DomainDiskClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass

    parentClass: DomainDeviceClass
    padding: any[]
}

export abstract class DomainDiskClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass

    static name: string
}

export interface DomainDiskPrivate {
}

export class DomainDiskPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskPrivate

    static name: string
}

export interface DomainDiskStats {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats

    rdReq: number
    rdBytes: number
    wrReq: number
    wrBytes: number
    errs: number
}

export class DomainDiskStats {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats

    static name: string
}

export interface DomainInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInfo

    state: DomainState
    maxMem: number
    memory: number
    nrVirtCpu: number
    cpuTime: number
}

export class DomainInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInfo

    static name: string
}

export interface DomainInterfaceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass

    parentClass: DomainDeviceClass
    padding: any[]
}

export abstract class DomainInterfaceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass

    static name: string
}

export interface DomainInterfacePrivate {
}

export class DomainInterfacePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfacePrivate

    static name: string
}

export interface DomainInterfaceStats {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceStats

    rxBytes: number
    rxPackets: number
    rxErrs: number
    rxDrop: number
    txBytes: number
    txPackets: number
    txErrs: number
    txDrop: number
}

export class DomainInterfaceStats {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceStats

    static name: string
}

export interface DomainPrivate {
}

export class DomainPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainPrivate

    static name: string
}

export interface DomainSnapshotClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class DomainSnapshotClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass

    static name: string
}

export interface DomainSnapshotPrivate {
}

export class DomainSnapshotPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotPrivate

    static name: string
}

export interface InterfaceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class InterfaceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass

    static name: string
}

export interface InterfacePrivate {
}

export class InterfacePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.InterfacePrivate

    static name: string
}

export interface ManagerClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.ManagerClass

    parentClass: GObject.ObjectClass
    connectionAdded: (man: Manager, conn: Connection) => void
    connectionRemoved: (man: Manager, conn: Connection) => void
    padding: any[]
}

export abstract class ManagerClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ManagerClass

    static name: string
}

export interface ManagerPrivate {
}

export class ManagerPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ManagerPrivate

    static name: string
}

export interface NetworkClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkClass

    parentClass: GObject.ObjectClass
    started: (net: Network) => void
    stopped: (net: Network) => void
    padding: any[]
}

export abstract class NetworkClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkClass

    static name: string
}

export interface NetworkDHCPLeaseClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class NetworkDHCPLeaseClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass

    static name: string
}

export interface NetworkDHCPLeasePrivate {
}

export class NetworkDHCPLeasePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeasePrivate

    static name: string
}

export interface NetworkFilterClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class NetworkFilterClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass

    static name: string
}

export interface NetworkFilterPrivate {
}

export class NetworkFilterPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterPrivate

    static name: string
}

export interface NetworkPrivate {
}

export class NetworkPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkPrivate

    static name: string
}

export interface NodeDeviceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NodeDeviceClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class NodeDeviceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDeviceClass

    static name: string
}

export interface NodeDevicePrivate {
}

export class NodeDevicePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevicePrivate

    static name: string
}

export interface NodeInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NodeInfo

    model: number[]
    memory: number
    cpus: number
    mhz: number
    nodes: number
    sockets: number
    cores: number
    threads: number
}

export class NodeInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeInfo

    static name: string
}

export interface SecretClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.SecretClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class SecretClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.SecretClass

    static name: string
}

export interface SecretPrivate {
}

export class SecretPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.SecretPrivate

    static name: string
}

export interface StoragePoolClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class StoragePoolClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass

    static name: string
}

export interface StoragePoolInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo

    state: StoragePoolState
    capacity: number
    allocation: number
    available: number
}

export class StoragePoolInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo

    static name: string
}

export interface StoragePoolPrivate {
}

export class StoragePoolPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolPrivate

    static name: string
}

export interface StorageVolClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass

    parentClass: GObject.ObjectClass
    padding: any[]
}

export abstract class StorageVolClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass

    static name: string
}

export interface StorageVolInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo

    type: StorageVolType
    capacity: number
    allocation: number
}

export class StorageVolInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo

    static name: string
}

export interface StorageVolPrivate {
}

export class StorageVolPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolPrivate

    static name: string
}

export interface StreamClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StreamClass

    parentClass: Gio.IOStreamClass
    padding: any[]
}

export abstract class StreamClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StreamClass

    static name: string
}

export interface StreamPrivate {
}

export class StreamPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StreamPrivate

    static name: string
}

// END