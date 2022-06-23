// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGObject-1.0
 */

import type LibvirtGLib from './LibvirtGLib-1.0';
import type GLib from './GLib-2.0';
import type LibvirtGConfig from './LibvirtGConfig-1.0';
import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type Gio from './Gio-2.0';

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
function initObject(argv: string[] | null): /* argv */ string[] | null
function initObjectCheck(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
interface StreamIOFunc {
    (stream: Stream, cond: StreamIOCondition, opaque: object | null): boolean
}
interface StreamSinkFunc {
    (stream: Stream): number
}
interface StreamSourceFunc {
    (stream: Stream): number
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Connection

    handle?: any | null
    uri?: string | null
}

/**
 * Signal callback interface for `connection-closed`
 */
interface Connection_ConnectionClosedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `connection-opened`
 */
interface Connection_ConnectionOpenedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `domain-added`
 */
interface Connection_DomainAddedSignalCallback {
    (object: Domain): void
}

/**
 * Signal callback interface for `domain-removed`
 */
interface Connection_DomainRemovedSignalCallback {
    (object: Domain): void
}

interface Connection {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Connection

    readonly handle: any
    readonly uri: string

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Connection

    close(): void
    /**
     * Create the configuration file for a new persistent domain.
     * The returned domain will initially be in the shutoff state.
     * @param conf the configuration for the new domain
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
    findDomainByName(name: string): Domain
    /**
     * Get a particular interface which has MAC address `mac`.
     * @param macaddr MAC address to lookup
     */
    findInterfaceByMac(macaddr: string): Interface
    /**
     * Get a particular network which has name `name`.
     * @param name name of the network to search for
     */
    findNetworkByName(name: string): Network
    findStoragePoolByName(name: string): StoragePool
    getCapabilities(): LibvirtGConfig.Capabilities
    getCapabilitiesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    getDomain(uuid: string): Domain
    getDomainCapabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    getDomainCapabilitiesAsync(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    getDomainCapabilitiesFinish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    /**
     * Gets a list of the domains available through `conn`.
     */
    getDomains(): Domain[]
    /**
     * Get name of current hypervisor used.
     */
    getHypervisorName(): string
    /**
     * Get a particular interface which has name `name`.
     * @param name interface name to lookup
     */
    getInterface(name: string): Interface
    /**
     * Get a list of all the network interfaces managed by connection `conn` on
     * host machine.
     */
    getInterfaces(): Interface[]
    /**
     * Get a particular network which has UUID `uuid`.
     * @param uuid UUID of the network to lookup
     */
    getNetwork(uuid: string): Network
    /**
     * Get a list of all the network networks available through `conn`.
     */
    getNetworks(): Network[]
    getNodeInfo(): NodeInfo
    getStoragePool(uuid: string): StoragePool
    /**
     * Gets a list of the storage pools available through `conn`.
     */
    getStoragePools(): StoragePool[]
    getStream(flags: number): Stream
    getUri(): string
    /**
     * Get version of current hypervisor used.
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
     */
    restoreDomainFromFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_connection_restore_domain_from_file
     * @param filename path to input file
     * @param customConf configuration for domain
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    restoreDomainFromFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_restore_domain_from_file_async.
     * @param result async method result
     */
    restoreDomainFromFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Start a new transient domain without persistent configuration.
     * The returned domain will initially be running.
     * @param conf the configuration for the new domain
     * @param flags 
     */
    startDomain(conf: LibvirtGConfig.Domain, flags: number): Domain

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Connection

    connect(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback): number
    on(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-closed", ...args: any[]): void
    connect(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback): number
    on(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-opened", ...args: any[]): void
    connect(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback): number
    on(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "domain-added", ...args: any[]): void
    connect(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback): number
    on(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Connection extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Connection

    static name: string
    static $gtype: GObject.GType<Connection>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Connection

    constructor(config?: Connection_ConstructProps) 
    constructor(uri: string) 
    static new(uri: string): Connection
    _init(config?: Connection_ConstructProps): void
}

interface Domain_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    handle?: any | null
}

/**
 * Signal callback interface for `pmsuspended`
 */
interface Domain_PmsuspendedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `resumed`
 */
interface Domain_ResumedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `started`
 */
interface Domain_StartedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `stopped`
 */
interface Domain_StoppedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `suspended`
 */
interface Domain_SuspendedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `updated`
 */
interface Domain_UpdatedSignalCallback {
    (): void
}

interface Domain {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    readonly handle: any
    readonly persistent: boolean

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
     */
    getInfoFinish(result: Gio.AsyncResult): DomainInfo
    getName(): string
    getPersistent(): boolean
    getSaved(): boolean
    getSnapshots(): DomainSnapshot[]
    getUuid(): string
    /**
     * Open a text console for the domain `dom,` connecting it to the
     * stream `stream`. If `devname` is NULL, the default console will
     * be opened, otherwise `devname` can be used to specify a non-default
     * console device.
     * @param stream stream to use as output
     * @param devname the device name
     * @param flags extra flags, currently unused
     */
    openConsole(stream: Stream, devname: string | null, flags: number): boolean
    /**
     * Open a connection to the local graphics display, connecting it to the
     * socket pair file descriptor passed in as `fd`.
     * @param idx the graphics index
     * @param fd pre-opened socket pair
     * @param flags extra flags, currently unused
     */
    openGraphics(idx: number, fd: number, flags: number): boolean
    /**
     * This will create a socket pair connected to the graphics backend of `dom`. One
     * end of the socket will be returned on success, and the other end is handed to
     * the hypervisor. If `dom` has multiple graphics backends configured, then `idx`
     * will determine which one is opened, starting from `idx` 0.
     * @param idx the graphics index
     * @param flags extra flags, currently unused
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
     */
    saveFinish(result: Gio.AsyncResult): boolean
    saveToFile(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_save_to_file
     * @param filename path to output file
     * @param customConf configuration for domain or NULL
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    saveToFileAsync(filename: string, customConf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_save_to_file_async.
     * @param result async method result
     */
    saveToFileFinish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitorId: number, flags: number): string
    /**
     * Resets configuration of an existing domain.
     * 
     * Note: If domain is already running, the new configuration will not take
     * affect until domain reboots.
     * @param conf the new configuration for the domain
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
     */
    suspend(): boolean
    /**
     * Update the configuration of a device.
     * @param device A modified device config
     * @param flags bitwise-OR of #GVirDomainUpdateDeviceFlags
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

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Domain

    connect(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback): number
    on(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pmsuspended", ...args: any[]): void
    connect(sigName: "resumed", callback: Domain_ResumedSignalCallback): number
    on(sigName: "resumed", callback: Domain_ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: Domain_ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: Domain_ResumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resumed", ...args: any[]): void
    connect(sigName: "started", callback: Domain_StartedSignalCallback): number
    on(sigName: "started", callback: Domain_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: Domain_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: Domain_StartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Domain_StoppedSignalCallback): number
    on(sigName: "stopped", callback: Domain_StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: Domain_StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: Domain_StoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stopped", ...args: any[]): void
    connect(sigName: "suspended", callback: Domain_SuspendedSignalCallback): number
    on(sigName: "suspended", callback: Domain_SuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "suspended", callback: Domain_SuspendedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "suspended", callback: Domain_SuspendedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "suspended", ...args: any[]): void
    connect(sigName: "updated", callback: Domain_UpdatedSignalCallback): number
    on(sigName: "updated", callback: Domain_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: Domain_UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: Domain_UpdatedSignalCallback): NodeJS.EventEmitter
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Domain extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    static name: string
    static $gtype: GObject.GType<Domain>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Domain

    constructor(config?: Domain_ConstructProps) 
    _init(config?: Domain_ConstructProps): void
}

interface DomainDevice_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    config?: LibvirtGConfig.DomainDevice | null
    domain?: Domain | null
}

interface DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    readonly config: LibvirtGConfig.DomainDevice
    readonly domain: Domain

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DomainDevice extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    static name: string
    static $gtype: GObject.GType<DomainDevice>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    constructor(config?: DomainDevice_ConstructProps) 
    _init(config?: DomainDevice_ConstructProps): void
}

interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainDisk {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    parent: DomainDevice
    priv: DomainDiskPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    /**
     * This function returns network disk stats. Individual fields
     * within the stats structure may be returned as -1, which indicates
     * that the hypervisor does not support that particular statistic.
     */
    getStats(): DomainDiskStats
    /**
     * This function resize the disk of a running domain.
     * @param size new size of the block image in kilobytes
     * @param flags flags, currently unused. Pass '0'.
     */
    resize(size: number, flags: number): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

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
}

class DomainDisk extends DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    static name: string
    static $gtype: GObject.GType<DomainDisk>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    constructor(config?: DomainDisk_ConstructProps) 
    _init(config?: DomainDisk_ConstructProps): void
}

interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainInterface {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    parent: DomainDevice
    priv: DomainInterfacePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    /**
     * This function returns network interface stats. Individual fields
     * within the stats structure may be returned as -1, which indicates
     * that the hypervisor does not support that particular statistic.
     */
    getStats(): DomainInterfaceStats

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

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
}

class DomainInterface extends DomainDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    static name: string
    static $gtype: GObject.GType<DomainInterface>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    constructor(config?: DomainInterface_ConstructProps) 
    _init(config?: DomainInterface_ConstructProps): void
}

interface DomainSnapshot_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    handle?: any | null
}

interface DomainSnapshot {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    parent: GObject.Object
    priv: DomainSnapshotPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    delete(flags: number): boolean
    deleteAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    deleteFinish(res: Gio.AsyncResult): boolean
    getConfig(flags: number): LibvirtGConfig.DomainSnapshot
    getIsCurrent(flags: number): [ /* returnType */ boolean, /* isCurrent */ boolean ]
    getName(): string
    revertTo(flags: number): boolean
    revertToAsync(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    revertToFinish(result: Gio.AsyncResult): boolean
    /**
     * Updates the given snapshot's configuration according to the
     * given GVirConfigDomainSnapshot.
     * @param conf The new config object
     */
    setConfig(conf: LibvirtGConfig.DomainSnapshot): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DomainSnapshot extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    static name: string
    static $gtype: GObject.GType<DomainSnapshot>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    constructor(config?: DomainSnapshot_ConstructProps) 
    _init(config?: DomainSnapshot_ConstructProps): void
}

interface Interface_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Interface

    handle?: any | null
}

interface Interface {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Interface

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Interface

    parent: GObject.Object
    priv: InterfacePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Interface

    getConfig(flags: number): LibvirtGConfig.Interface
    getMac(): string
    getName(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Interface

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Interface extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Interface

    static name: string
    static $gtype: GObject.GType<Interface>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Interface

    constructor(config?: Interface_ConstructProps) 
    _init(config?: Interface_ConstructProps): void
}

interface Manager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `connection-added`
 */
interface Manager_ConnectionAddedSignalCallback {
    (object: Connection): void
}

/**
 * Signal callback interface for `connection-removed`
 */
interface Manager_ConnectionRemovedSignalCallback {
    (object: Connection): void
}

interface Manager {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Manager

    parent: GObject.Object
    priv: ManagerPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Manager

    addConnection(conn: Connection): void
    findConnectionByUri(uri: string): Connection | null
    getConnections(): Connection[]
    removeConnection(conn: Connection): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Manager

    connect(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback): number
    on(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-added", ...args: any[]): void
    connect(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback): number
    on(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-removed", ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Manager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Manager extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Manager

    constructor(config?: Manager_ConstructProps) 
    constructor() 
    static new(): Manager
    _init(config?: Manager_ConstructProps): void
}

interface Network_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Network

    handle?: any | null
}

interface Network {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Network

    readonly handle: any

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
     */
    getDhcpLeases(mac: string | null, flags: number): NetworkDHCPLease[]
    getName(): string
    getUuid(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Network

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Network extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Network

    static name: string
    static $gtype: GObject.GType<Network>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Network

    constructor(config?: Network_ConstructProps) 
    _init(config?: Network_ConstructProps): void
}

interface NetworkDHCPLease_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    handle?: object | null
}

interface NetworkDHCPLease {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    readonly handle: object

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    parent: GObject.Object
    priv: NetworkDHCPLeasePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    getClientId(): string
    getExpiryTime(): number
    getHostname(): string
    getIaid(): string
    getIface(): string
    getIp(): string
    getIpType(): number
    getMac(): string
    getPrefix(): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class NetworkDHCPLease extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    static name: string
    static $gtype: GObject.GType<NetworkDHCPLease>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    constructor(config?: NetworkDHCPLease_ConstructProps) 
    _init(config?: NetworkDHCPLease_ConstructProps): void
}

interface NetworkFilter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    handle?: any | null
}

interface NetworkFilter {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    parent: GObject.Object
    priv: NetworkFilterPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    getConfig(flags: number): LibvirtGConfig.NetworkFilter
    getName(): string
    getUuid(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class NetworkFilter extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    static name: string
    static $gtype: GObject.GType<NetworkFilter>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    constructor(config?: NetworkFilter_ConstructProps) 
    _init(config?: NetworkFilter_ConstructProps): void
}

interface NodeDevice_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    handle?: any | null
}

interface NodeDevice {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    parent: GObject.Object
    priv: NodeDevicePrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    getConfig(flags: number): LibvirtGConfig.NodeDevice
    getName(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class NodeDevice extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    static name: string
    static $gtype: GObject.GType<NodeDevice>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    constructor(config?: NodeDevice_ConstructProps) 
    _init(config?: NodeDevice_ConstructProps): void
}

interface Secret_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Secret

    handle?: any | null
}

interface Secret {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Secret

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Secret

    parent: GObject.Object
    priv: SecretPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Secret

    getConfig(flags: number): LibvirtGConfig.Secret
    getName(): string
    getUuid(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Secret

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Secret extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Secret

    static name: string
    static $gtype: GObject.GType<Secret>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Secret

    constructor(config?: Secret_ConstructProps) 
    _init(config?: Secret_ConstructProps): void
}

interface StoragePool_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    handle?: any | null
}

interface StoragePool {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    readonly handle: any

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
    getName(): string
    getPersistent(): boolean
    getUuid(): string
    getVolume(name: string): StorageVol
    getVolumes(): StorageVol[]
    refresh(cancellable: Gio.Cancellable | null): boolean
    refreshAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets whether or not storage pool `pool` is started automatically on boot.
     * @param autostart Whether or not to autostart
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StoragePool extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    static name: string
    static $gtype: GObject.GType<StoragePool>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    constructor(config?: StoragePool_ConstructProps) 
    _init(config?: StoragePool_ConstructProps): void
}

interface StorageVol_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    handle?: any | null
    pool?: StoragePool | null
}

interface StorageVol {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    readonly handle: any
    readonly pool: StoragePool

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    parent: GObject.Object
    priv: StorageVolPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    /**
     * Deletes the storage volume `vol`.
     * @param flags the flags
     */
    delete(flags: number): boolean
    download(stream: Stream, offset: number, length: number, flags: number): boolean
    getConfig(flags: number): LibvirtGConfig.StorageVol
    getInfo(): StorageVolInfo
    getName(): string
    getPath(): string
    /**
     * Changes the capacity of the storage volume `vol` to `capacity`.
     * @param capacity the new capacity of the volume
     * @param flags the flags
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class StorageVol extends GObject.Object {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    static name: string
    static $gtype: GObject.GType<StorageVol>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    constructor(config?: StorageVol_ConstructProps) 
    _init(config?: StorageVol_ConstructProps): void
}

interface Stream_ConstructProps extends Gio.IOStream_ConstructProps {

    // Own constructor properties of LibvirtGObject-1.0.LibvirtGObject.Stream

    handle?: any | null
}

interface Stream {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Stream

    readonly handle: any

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Stream

    parentInstance: Gio.IOStream
    priv: StreamPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Stream

    /**
     * Adds a watch for `stream` to the mainloop
     * @param priority the priority of the #GVirStream source
     * @param cond the conditions to watch for (bitfield of #GVirStreamIOCondition)
     * @param func the function to call when the condition is satisfied
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
     */
    receive(buffer: Uint8Array, cancellable: Gio.Cancellable | null): number
    /**
     * Receive the entire data stream, sending the data to the
     * requested data sink. This is simply a convenient alternative
     * to virStreamRecv, for apps that do blocking-I/o.
     * @param cancellable cancellation notifier
     * @param func the callback for writing data to application
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
     */
    send(buffer: string, size: number, cancellable: Gio.Cancellable | null): number
    /**
     * Send the entire data stream, sending the data to the
     * requested data source. This is simply a convenient alternative
     * to virStreamRecv, for apps that do blocking-I/o.
     * @param cancellable cancellation notifier
     * @param func the callback for writing data to application
     */
    sendAll(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Stream

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
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
}

class Stream extends Gio.IOStream {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Stream

    static name: string
    static $gtype: GObject.GType<Stream>

    // Constructors of LibvirtGObject-1.0.LibvirtGObject.Stream

    constructor(config?: Stream_ConstructProps) 
    _init(config?: Stream_ConstructProps): void
}

interface ConnectionClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass

    parentClass: GObject.ObjectClass
    connectionOpened: (conn: Connection) => void
    connectionClosed: (conn: Connection) => void
    domainAdded: (conn: Connection, dom: Domain) => void
    domainRemoved: (conn: Connection, dom: Domain) => void
    padding: object[]
}

abstract class ConnectionClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ConnectionClass

    static name: string
}

interface ConnectionPrivate {
}

class ConnectionPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ConnectionPrivate

    static name: string
}

interface DomainClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainClass

    parentClass: GObject.ObjectClass
    started: (dom: Domain) => void
    stopped: (dom: Domain) => void
    resumed: (dom: Domain) => void
    updated: (dom: Domain) => void
    suspended: (dom: Domain) => void
    pmsuspended: (dom: Domain) => void
    padding: object[]
}

abstract class DomainClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainClass

    static name: string
}

interface DomainDeviceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class DomainDeviceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDeviceClass

    static name: string
}

interface DomainDevicePrivate {
}

class DomainDevicePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDevicePrivate

    static name: string
}

interface DomainDiskClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass

    parentClass: DomainDeviceClass
    padding: object[]
}

abstract class DomainDiskClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskClass

    static name: string
}

interface DomainDiskPrivate {
}

class DomainDiskPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskPrivate

    static name: string
}

interface DomainDiskStats {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats

    rdReq: number
    rdBytes: number
    wrReq: number
    wrBytes: number
    errs: number
}

class DomainDiskStats {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainDiskStats

    static name: string
}

interface DomainInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInfo

    state: DomainState
    maxMem: number
    memory: number
    nrVirtCpu: number
    cpuTime: number
}

class DomainInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInfo

    static name: string
}

interface DomainInterfaceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass

    parentClass: DomainDeviceClass
    padding: object[]
}

abstract class DomainInterfaceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceClass

    static name: string
}

interface DomainInterfacePrivate {
}

class DomainInterfacePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfacePrivate

    static name: string
}

interface DomainInterfaceStats {

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

class DomainInterfaceStats {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainInterfaceStats

    static name: string
}

interface DomainPrivate {
}

class DomainPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainPrivate

    static name: string
}

interface DomainSnapshotClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class DomainSnapshotClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotClass

    static name: string
}

interface DomainSnapshotPrivate {
}

class DomainSnapshotPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshotPrivate

    static name: string
}

interface InterfaceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class InterfaceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.InterfaceClass

    static name: string
}

interface InterfacePrivate {
}

class InterfacePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.InterfacePrivate

    static name: string
}

interface ManagerClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.ManagerClass

    parentClass: GObject.ObjectClass
    connectionAdded: (man: Manager, conn: Connection) => void
    connectionRemoved: (man: Manager, conn: Connection) => void
    padding: object[]
}

abstract class ManagerClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ManagerClass

    static name: string
}

interface ManagerPrivate {
}

class ManagerPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.ManagerPrivate

    static name: string
}

interface NetworkClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkClass

    parentClass: GObject.ObjectClass
    started: (net: Network) => void
    stopped: (net: Network) => void
    padding: object[]
}

abstract class NetworkClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkClass

    static name: string
}

interface NetworkDHCPLeaseClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class NetworkDHCPLeaseClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeaseClass

    static name: string
}

interface NetworkDHCPLeasePrivate {
}

class NetworkDHCPLeasePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLeasePrivate

    static name: string
}

interface NetworkFilterClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class NetworkFilterClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterClass

    static name: string
}

interface NetworkFilterPrivate {
}

class NetworkFilterPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkFilterPrivate

    static name: string
}

interface NetworkPrivate {
}

class NetworkPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NetworkPrivate

    static name: string
}

interface NodeDeviceClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.NodeDeviceClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class NodeDeviceClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDeviceClass

    static name: string
}

interface NodeDevicePrivate {
}

class NodeDevicePrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeDevicePrivate

    static name: string
}

interface NodeInfo {

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

class NodeInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.NodeInfo

    static name: string
}

interface SecretClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.SecretClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class SecretClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.SecretClass

    static name: string
}

interface SecretPrivate {
}

class SecretPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.SecretPrivate

    static name: string
}

interface StoragePoolClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class StoragePoolClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolClass

    static name: string
}

interface StoragePoolInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo

    state: StoragePoolState
    capacity: number
    allocation: number
    available: number
}

class StoragePoolInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolInfo

    static name: string
}

interface StoragePoolPrivate {
}

class StoragePoolPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StoragePoolPrivate

    static name: string
}

interface StorageVolClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

abstract class StorageVolClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolClass

    static name: string
}

interface StorageVolInfo {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo

    type: StorageVolType
    capacity: number
    allocation: number
}

class StorageVolInfo {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolInfo

    static name: string
}

interface StorageVolPrivate {
}

class StorageVolPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StorageVolPrivate

    static name: string
}

interface StreamClass {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.StreamClass

    parentClass: Gio.IOStreamClass
    padding: object[]
}

abstract class StreamClass {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StreamClass

    static name: string
}

interface StreamPrivate {
}

class StreamPrivate {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.StreamPrivate

    static name: string
}

}
export default LibvirtGObject;