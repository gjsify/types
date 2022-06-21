// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGObject-1.0
 */

import type * as Gjs from './Gjs';
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
function init_object(argv: string[] | null): /* argv */ string[] | null
function init_object_check(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
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
    ($obj: Connection): void
}

/**
 * Signal callback interface for `connection-opened`
 */
interface Connection_ConnectionOpenedSignalCallback {
    ($obj: Connection): void
}

/**
 * Signal callback interface for `domain-added`
 */
interface Connection_DomainAddedSignalCallback {
    ($obj: Connection, object: Domain): void
}

/**
 * Signal callback interface for `domain-removed`
 */
interface Connection_DomainRemovedSignalCallback {
    ($obj: Connection, object: Domain): void
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
    create_domain(conf: LibvirtGConfig.Domain): Domain
    create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool
    /**
     * Use this method to fetch all domains managed by connection
     * `conn`. Use e.g. #gvir_connection_find_domain_by_id or
     * #gvir_connection_get_domain afterwards to query the fetched
     * domains.
     * @param cancellable cancellation object
     */
    fetch_domains(cancellable: Gio.Cancellable | null): boolean
    fetch_domains_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_domains_finish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch information on all network interfaces
     * managed by connection `conn` on host machine. Use
     * #gvir_connection_get_interfaces or #gvir_connection_get_interface afterwards
     * to query the fetched interfaces.
     * @param cancellable cancellation object
     */
    fetch_interfaces(cancellable: Gio.Cancellable | null): boolean
    fetch_interfaces_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_interfaces_finish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch all networks managed by connection
     * `conn`. Use e.g. #gvir_connection_find_network_by_name or
     * #gvir_connection_get_networks afterwards to query the fetched
     * domains.
     * @param cancellable cancellation object
     */
    fetch_networks(cancellable: Gio.Cancellable | null): boolean
    fetch_networks_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_networks_finish(result: Gio.AsyncResult): boolean
    /**
     * Use this method to fetch all storage pools managed by connection
     * `conn`. Use e.g. #gvir_connection_find_storage_pool_by_name or
     * #gvir_connection_get_storage_pools afterwards to query the fetched
     * pools.
     * @param cancellable cancellation object
     */
    fetch_storage_pools(cancellable: Gio.Cancellable | null): boolean
    fetch_storage_pools_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_storage_pools_finish(result: Gio.AsyncResult): boolean
    find_domain_by_id(id: number): Domain
    find_domain_by_name(name: string): Domain
    /**
     * Get a particular interface which has MAC address `mac`.
     * @param macaddr MAC address to lookup
     */
    find_interface_by_mac(macaddr: string): Interface
    /**
     * Get a particular network which has name `name`.
     * @param name name of the network to search for
     */
    find_network_by_name(name: string): Network
    find_storage_pool_by_name(name: string): StoragePool
    get_capabilities(): LibvirtGConfig.Capabilities
    get_capabilities_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities
    get_domain(uuid: string): Domain
    get_domain_capabilities(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number): LibvirtGConfig.DomainCapabilities
    get_domain_capabilities_async(emulatorbin: string | null, arch: string | null, machine: string | null, virttype: string | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities
    /**
     * Gets a list of the domains available through `conn`.
     */
    get_domains(): Domain[]
    /**
     * Get name of current hypervisor used.
     */
    get_hypervisor_name(): string
    /**
     * Get a particular interface which has name `name`.
     * @param name interface name to lookup
     */
    get_interface(name: string): Interface
    /**
     * Get a list of all the network interfaces managed by connection `conn` on
     * host machine.
     */
    get_interfaces(): Interface[]
    /**
     * Get a particular network which has UUID `uuid`.
     * @param uuid UUID of the network to lookup
     */
    get_network(uuid: string): Network
    /**
     * Get a list of all the network networks available through `conn`.
     */
    get_networks(): Network[]
    get_node_info(): NodeInfo
    get_storage_pool(uuid: string): StoragePool
    /**
     * Gets a list of the storage pools available through `conn`.
     */
    get_storage_pools(): StoragePool[]
    get_stream(flags: number): Stream
    get_uri(): string
    /**
     * Get version of current hypervisor used.
     */
    get_version(): number
    is_open(): boolean
    is_read_only(): boolean
    open(cancellable: Gio.Cancellable | null): boolean
    open_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    open_finish(result: Gio.AsyncResult): boolean
    open_read_only(cancellable: Gio.Cancellable | null): boolean
    open_read_only_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    open_read_only_finish(result: Gio.AsyncResult): boolean
    /**
     * Restores the domain saved with #gvir_domain_save_to_file
     * @param filename path to input file
     * @param custom_conf configuration for domain or NULL
     * @param flags the flags
     */
    restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_connection_restore_domain_from_file
     * @param filename path to input file
     * @param custom_conf configuration for domain
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    restore_domain_from_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_restore_domain_from_file_async.
     * @param result async method result
     */
    restore_domain_from_file_finish(result: Gio.AsyncResult): boolean
    /**
     * Start a new transient domain without persistent configuration.
     * The returned domain will initially be running.
     * @param conf the configuration for the new domain
     * @param flags 
     */
    start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Connection

    vfunc_connection_closed(): void
    vfunc_connection_opened(): void
    vfunc_domain_added(dom: Domain): void
    vfunc_domain_removed(dom: Domain): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Connection

    connect(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback): number
    connect_after(sigName: "connection-closed", callback: Connection_ConnectionClosedSignalCallback): number
    emit(sigName: "connection-closed", ...args: any[]): void
    connect(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback): number
    connect_after(sigName: "connection-opened", callback: Connection_ConnectionOpenedSignalCallback): number
    emit(sigName: "connection-opened", ...args: any[]): void
    connect(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback): number
    connect_after(sigName: "domain-added", callback: Connection_DomainAddedSignalCallback): number
    emit(sigName: "domain-added", object: Domain, ...args: any[]): void
    connect(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback): number
    connect_after(sigName: "domain-removed", callback: Connection_DomainRemovedSignalCallback): number
    emit(sigName: "domain-removed", object: Domain, ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Connection

    connect(sigName: "notify::handle", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: Domain): void
}

/**
 * Signal callback interface for `resumed`
 */
interface Domain_ResumedSignalCallback {
    ($obj: Domain): void
}

/**
 * Signal callback interface for `started`
 */
interface Domain_StartedSignalCallback {
    ($obj: Domain): void
}

/**
 * Signal callback interface for `stopped`
 */
interface Domain_StoppedSignalCallback {
    ($obj: Domain): void
}

/**
 * Signal callback interface for `suspended`
 */
interface Domain_SuspendedSignalCallback {
    ($obj: Domain): void
}

/**
 * Signal callback interface for `updated`
 */
interface Domain_UpdatedSignalCallback {
    ($obj: Domain): void
}

interface Domain {

    // Own properties of LibvirtGObject-1.0.LibvirtGObject.Domain

    readonly handle: any
    readonly persistent: boolean

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Domain

    parent: GObject.Object
    priv: DomainPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Domain

    create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot
    create_snapshot_async(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot
    delete(flags: number): boolean
    fetch_snapshots(list_flags: number, cancellable: Gio.Cancellable | null): boolean
    fetch_snapshots_async(list_flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    fetch_snapshots_finish(res: Gio.AsyncResult): boolean
    get_config(flags: number): LibvirtGConfig.Domain
    /**
     * Gets the list of devices attached to `domain`. The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     */
    get_devices(): DomainDevice[]
    get_has_current_snapshot(flags: number): [ /* returnType */ boolean, /* has_current_snapshot */ boolean ]
    get_id(): number
    get_info(): DomainInfo
    /**
     * Asynchronous variant of #gvir_domain_get_info.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    get_info_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_get_info_async.
     * @param result async method result
     */
    get_info_finish(result: Gio.AsyncResult): DomainInfo
    get_name(): string
    get_persistent(): boolean
    get_saved(): boolean
    get_snapshots(): DomainSnapshot[]
    get_uuid(): string
    /**
     * Open a text console for the domain `dom,` connecting it to the
     * stream `stream`. If `devname` is NULL, the default console will
     * be opened, otherwise `devname` can be used to specify a non-default
     * console device.
     * @param stream stream to use as output
     * @param devname the device name
     * @param flags extra flags, currently unused
     */
    open_console(stream: Stream, devname: string | null, flags: number): boolean
    /**
     * Open a connection to the local graphics display, connecting it to the
     * socket pair file descriptor passed in as `fd`.
     * @param idx the graphics index
     * @param fd pre-opened socket pair
     * @param flags extra flags, currently unused
     */
    open_graphics(idx: number, fd: number, flags: number): boolean
    /**
     * This will create a socket pair connected to the graphics backend of `dom`. One
     * end of the socket will be returned on success, and the other end is handed to
     * the hypervisor. If `dom` has multiple graphics backends configured, then `idx`
     * will determine which one is opened, starting from `idx` 0.
     * @param idx the graphics index
     * @param flags extra flags, currently unused
     */
    open_graphics_fd(idx: number, flags: number): number
    reboot(flags: number): boolean
    resume(): boolean
    /**
     * Asynchronous variant of #gvir_domain_resume.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    resume_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    resume_finish(result: Gio.AsyncResult): boolean
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
    save_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_save_async.
     * @param result async method result
     */
    save_finish(result: Gio.AsyncResult): boolean
    save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_save_to_file
     * @param filename path to output file
     * @param custom_conf configuration for domain or NULL
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    save_to_file_async(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_save_to_file_async.
     * @param result async method result
     */
    save_to_file_finish(result: Gio.AsyncResult): boolean
    screenshot(stream: Stream, monitor_id: number, flags: number): string
    /**
     * Resets configuration of an existing domain.
     * 
     * Note: If domain is already running, the new configuration will not take
     * affect until domain reboots.
     * @param conf the new configuration for the domain
     */
    set_config(conf: LibvirtGConfig.Domain): boolean
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
     */
    set_time(date_time: GLib.DateTime | null, flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_set_time.
     * @param date_time the time to set as #GDateTime.
     * @param flags bitwise-OR of #GVirDomainSetTimeFlags.
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    set_time_async(date_time: GLib.DateTime | null, flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started by #gvir_domain_set_time_async.
     * @param result async method result
     */
    set_time_finish(result: Gio.AsyncResult): boolean
    shutdown(flags: number): boolean
    start(flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_start.
     * @param flags the flags
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
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
    update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean
    wakeup(flags: number): boolean
    /**
     * Asynchronous variant of #gvir_domain_wakeup.
     * @param flags placeholder for flags, pass 0
     * @param cancellable cancellation object
     * @param callback completion callback
     */
    wakeup_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    wakeup_finish(result: Gio.AsyncResult): boolean

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Domain

    vfunc_pmsuspended(): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
    vfunc_suspended(): void
    vfunc_updated(): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Domain

    connect(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback): number
    connect_after(sigName: "pmsuspended", callback: Domain_PmsuspendedSignalCallback): number
    emit(sigName: "pmsuspended", ...args: any[]): void
    connect(sigName: "resumed", callback: Domain_ResumedSignalCallback): number
    connect_after(sigName: "resumed", callback: Domain_ResumedSignalCallback): number
    emit(sigName: "resumed", ...args: any[]): void
    connect(sigName: "started", callback: Domain_StartedSignalCallback): number
    connect_after(sigName: "started", callback: Domain_StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Domain_StoppedSignalCallback): number
    connect_after(sigName: "stopped", callback: Domain_StoppedSignalCallback): number
    emit(sigName: "stopped", ...args: any[]): void
    connect(sigName: "suspended", callback: Domain_SuspendedSignalCallback): number
    connect_after(sigName: "suspended", callback: Domain_SuspendedSignalCallback): number
    emit(sigName: "suspended", ...args: any[]): void
    connect(sigName: "updated", callback: Domain_UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: Domain_UpdatedSignalCallback): number
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Domain

    connect(sigName: "notify::handle", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::persistent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(): LibvirtGConfig.DomainDevice
    get_domain(): Domain

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainDevice

    connect(sigName: "notify::config", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_stats(): DomainDiskStats
    /**
     * This function resize the disk of a running domain.
     * @param size new size of the block image in kilobytes
     * @param flags flags, currently unused. Pass '0'.
     */
    resize(size: number, flags: number): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainDisk

    connect(sigName: "notify::config", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_stats(): DomainInterfaceStats

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainInterface

    connect(sigName: "notify::config", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::domain", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    delete_finish(res: Gio.AsyncResult): boolean
    get_config(flags: number): LibvirtGConfig.DomainSnapshot
    get_is_current(flags: number): [ /* returnType */ boolean, /* is_current */ boolean ]
    get_name(): string
    revert_to(flags: number): boolean
    revert_to_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    revert_to_finish(result: Gio.AsyncResult): boolean
    /**
     * Updates the given snapshot's configuration according to the
     * given GVirConfigDomainSnapshot.
     * @param conf The new config object
     */
    set_config(conf: LibvirtGConfig.DomainSnapshot): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.DomainSnapshot

    connect(sigName: "notify::handle", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(flags: number): LibvirtGConfig.Interface
    get_mac(): string
    get_name(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Interface

    connect(sigName: "notify::handle", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    ($obj: Manager, object: Connection): void
}

/**
 * Signal callback interface for `connection-removed`
 */
interface Manager_ConnectionRemovedSignalCallback {
    ($obj: Manager, object: Connection): void
}

interface Manager {

    // Own fields of LibvirtGObject-1.0.LibvirtGObject.Manager

    parent: GObject.Object
    priv: ManagerPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Manager

    add_connection(conn: Connection): void
    find_connection_by_uri(uri: string): Connection | null
    get_connections(): Connection[]
    remove_connection(conn: Connection): void

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Manager

    vfunc_connection_added(conn: Connection): void
    vfunc_connection_removed(conn: Connection): void

    // Own signals of LibvirtGObject-1.0.LibvirtGObject.Manager

    connect(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback): number
    connect_after(sigName: "connection-added", callback: Manager_ConnectionAddedSignalCallback): number
    emit(sigName: "connection-added", object: Connection, ...args: any[]): void
    connect(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback): number
    connect_after(sigName: "connection-removed", callback: Manager_ConnectionRemovedSignalCallback): number
    emit(sigName: "connection-removed", object: Connection, ...args: any[]): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Manager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(flags: number): LibvirtGConfig.Network
    /**
     * This function fetches leases info of guests in the specified network. If the
     * optional parameter `mac` is specified, the returned list will contain only
     * lease info about a specific guest interface with `mac`. There can be multiple
     * leases for a single `mac` because this API supports DHCPv6 too.
     * @param mac The optional ASCII formatted MAC address of an interface
     * @param flags placeholder for flags, must be 0
     */
    get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[]
    get_name(): string
    get_uuid(): string

    // Own virtual methods of LibvirtGObject-1.0.LibvirtGObject.Network

    vfunc_started(): void
    vfunc_stopped(): void

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Network

    connect(sigName: "notify::handle", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_client_id(): string
    get_expiry_time(): number
    get_hostname(): string
    get_iaid(): string
    get_iface(): string
    get_ip(): string
    get_ip_type(): number
    get_mac(): string
    get_prefix(): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkDHCPLease

    connect(sigName: "notify::handle", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: NetworkDHCPLease, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(flags: number): LibvirtGConfig.NetworkFilter
    get_name(): string
    get_uuid(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NetworkFilter

    connect(sigName: "notify::handle", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(flags: number): LibvirtGConfig.NodeDevice
    get_name(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.NodeDevice

    connect(sigName: "notify::handle", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    get_config(flags: number): LibvirtGConfig.Secret
    get_name(): string
    get_uuid(): string

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Secret

    connect(sigName: "notify::handle", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    build_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    build_finish(result: Gio.AsyncResult): boolean
    create_volume(conf: LibvirtGConfig.StorageVol): StorageVol
    delete(flags: number): boolean
    delete_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    delete_finish(result: Gio.AsyncResult): boolean
    get_active(): boolean
    get_autostart(): boolean
    get_config(flags: number): LibvirtGConfig.StoragePool
    get_info(): StoragePoolInfo
    get_name(): string
    get_persistent(): boolean
    get_uuid(): string
    get_volume(name: string): StorageVol
    get_volumes(): StorageVol[]
    refresh(cancellable: Gio.Cancellable | null): boolean
    refresh_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets whether or not storage pool `pool` is started automatically on boot.
     * @param autostart Whether or not to autostart
     */
    set_autostart(autostart: boolean): boolean
    start(flags: number): boolean
    start_async(flags: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    start_finish(result: Gio.AsyncResult): boolean
    stop(): boolean
    stop_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    stop_finish(result: Gio.AsyncResult): boolean
    undefine(): boolean
    undefine_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    undefine_finish(result: Gio.AsyncResult): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.StoragePool

    connect(sigName: "notify::handle", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
    get_config(flags: number): LibvirtGConfig.StorageVol
    get_info(): StorageVolInfo
    get_name(): string
    get_path(): string
    /**
     * Changes the capacity of the storage volume `vol` to `capacity`.
     * @param capacity the new capacity of the volume
     * @param flags the flags
     */
    resize(capacity: number, flags: StorageVolResizeFlags): boolean
    upload(stream: Stream, offset: number, length: number, flags: number): boolean

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.StorageVol

    connect(sigName: "notify::handle", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_instance: Gio.IOStream
    priv: StreamPrivate

    // Owm methods of LibvirtGObject-1.0.LibvirtGObject.Stream

    /**
     * Adds a watch for `stream` to the mainloop
     * @param priority the priority of the #GVirStream source
     * @param cond the conditions to watch for (bitfield of #GVirStreamIOCondition)
     * @param func the function to call when the condition is satisfied
     */
    add_watch(priority: number, cond: StreamIOCondition, func: StreamIOFunc): number
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
    receive_all(cancellable: Gio.Cancellable | null, func: StreamSinkFunc): number
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
    send_all(cancellable: Gio.Cancellable | null, func: StreamSourceFunc): number

    // Class property signals of LibvirtGObject-1.0.LibvirtGObject.Stream

    connect(sigName: "notify::handle", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::closed", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-stream", ...args: any[]): void
    connect(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::output-stream", callback: (($obj: Stream, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::output-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    parent_class: GObject.ObjectClass
    connection_opened: (conn: Connection) => void
    connection_closed: (conn: Connection) => void
    domain_added: (conn: Connection, dom: Domain) => void
    domain_removed: (conn: Connection, dom: Domain) => void
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: DomainDeviceClass
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

    rd_req: number
    rd_bytes: number
    wr_req: number
    wr_bytes: number
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

    parent_class: DomainDeviceClass
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

    rx_bytes: number
    rx_packets: number
    rx_errs: number
    rx_drop: number
    tx_bytes: number
    tx_packets: number
    tx_errs: number
    tx_drop: number
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
    connection_added: (man: Manager, conn: Connection) => void
    connection_removed: (man: Manager, conn: Connection) => void
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
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

    parent_class: Gio.IOStreamClass
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