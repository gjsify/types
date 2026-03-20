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
import type LibvirtGLib from '@girs/libvirtglib-1.0';
import type GLib from '@girs/glib-2.0';
import type LibvirtGConfig from '@girs/libvirtgconfig-1.0';
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace LibvirtGObject {
    /**
     * LibvirtGObject-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace DomainDeleteFlags {
        export const $gtype: GObject.GType<DomainDeleteFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainRebootFlags {
        export const $gtype: GObject.GType<DomainRebootFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainShutdownFlags {
        export const $gtype: GObject.GType<DomainShutdownFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotCreateFlags {
        export const $gtype: GObject.GType<DomainSnapshotCreateFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotDeleteFlags {
        export const $gtype: GObject.GType<DomainSnapshotDeleteFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotListFlags {
        export const $gtype: GObject.GType<DomainSnapshotListFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotRevertFlags {
        export const $gtype: GObject.GType<DomainSnapshotRevertFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainState {
        export const $gtype: GObject.GType<DomainState>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainUpdateDeviceFlags {
        export const $gtype: GObject.GType<DomainUpdateDeviceFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainXMLFlags {
        export const $gtype: GObject.GType<DomainXMLFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace IPAddrType {
        export const $gtype: GObject.GType<IPAddrType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace StoragePoolState {
        export const $gtype: GObject.GType<StoragePoolState>;
    }

    /**
     * @gir-type Enum
     */
    enum StoragePoolState {
        INACTIVE,
        BUILDING,
        RUNNING,
        DEGRADED,
        INACCESSIBLE,
    }

    /**
     * @gir-type Enum
     */
    export namespace StorageVolResizeFlags {
        export const $gtype: GObject.GType<StorageVolResizeFlags>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace StorageVolType {
        export const $gtype: GObject.GType<StorageVolType>;
    }

    /**
     * @gir-type Enum
     */
    enum StorageVolType {
        FILE,
        BLOCK,
        DIR,
    }

    /**
     * @param argv pointer to application's argv
     */
    function init_object(argv?: string[] | null): string[] | null;
    /**
     * @param argv pointer to application's argv
     */
    function init_object_check(argv?: string[] | null): [boolean, string[] | null];
    /**
     * @gir-type Callback
     */
    interface StreamIOFunc {
        (stream: Stream, cond: StreamIOCondition, opaque?: any | null): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface StreamSinkFunc {
        (stream: Stream): number;
    }
    /**
     * @gir-type Callback
     */
    interface StreamSourceFunc {
        (stream: Stream): number;
    }
    /**
     * @gir-type Alias
     */
    type ConnectionHandle = object | null;
    /**
     * @gir-type Alias
     */
    type DomainHandle = object | null;
    /**
     * @gir-type Alias
     */
    type DomainSnapshotHandle = object | null;
    /**
     * @gir-type Alias
     */
    type InterfaceHandle = object | null;
    /**
     * @gir-type Alias
     */
    type NetworkFilterHandle = object | null;
    /**
     * @gir-type Alias
     */
    type NetworkHandle = object | null;
    /**
     * @gir-type Alias
     */
    type NodeDeviceHandle = object | null;
    /**
     * @gir-type Alias
     */
    type SecretHandle = object | null;
    /**
     * @gir-type Alias
     */
    type StoragePoolHandle = object | null;
    /**
     * @gir-type Alias
     */
    type StorageVolHandle = object | null;
    /**
     * @gir-type Alias
     */
    type StreamHandle = object | null;
    /**
     * @gir-type Flags
     */
    export namespace DomainStartFlags {
        export const $gtype: GObject.GType<DomainStartFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DomainStartFlags {
        NONE,
        PAUSED,
        AUTODESTROY,
        BYPASS_CACHE,
        FORCE_BOOT,
    }

    /**
     * @gir-type Flags
     */
    export namespace StreamIOCondition {
        export const $gtype: GObject.GType<StreamIOCondition>;
    }

    /**
     * @gir-type Flags
     */
    enum StreamIOCondition {
        READABLE,
        WRITABLE,
        HANGUP,
        ERROR,
    }

    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'connection-closed': () => void;
            /**
             * @signal
             * @run-first
             */
            'connection-opened': () => void;
            /**
             * @signal
             * @run-first
             */
            'domain-added': (arg0: Domain) => void;
            /**
             * @signal
             * @run-first
             */
            'domain-removed': (arg0: Domain) => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: ConnectionHandle;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): ConnectionHandle;
        /**
         * @construct-only
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): Connection;

        // Signals

        /** @signal */
        connect<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Connection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_connection_closed(): void;
        /**
         * @virtual
         */
        vfunc_connection_opened(): void;
        /**
         * @param dom
         * @virtual
         */
        vfunc_domain_added(dom: Domain): void;
        /**
         * @param dom
         * @virtual
         */
        vfunc_domain_removed(dom: Domain): void;

        // Methods

        close(): void;
        /**
         * Create the configuration file for a new persistent domain.
         * The returned domain will initially be in the shutoff state.
         * @param conf the configuration for the new domain
         * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        create_domain(conf: LibvirtGConfig.Domain): Domain;
        /**
         * @param conf the configuration for the new storage pool
         * @param flags the flags
         * @returns the newly created storage pool, or NULL if an error occurred. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        create_storage_pool(conf: LibvirtGConfig.StoragePool, flags: number): StoragePool;
        /**
         * Use this method to fetch all domains managed by connection
         * `conn`. Use e.g. `gvir_connection_find_domain_by_id` or
         * `gvir_connection_get_domain` afterwards to query the fetched
         * domains.
         * @param cancellable cancellation object
         */
        fetch_domains(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        fetch_domains_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_domains_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_domains_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        fetch_domains_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch information on all network interfaces
         * managed by connection `conn` on host machine. Use
         * `gvir_connection_get_interfaces` or `gvir_connection_get_interface` afterwards
         * to query the fetched interfaces.
         * @param cancellable cancellation object
         * @returns `true` on success, `false` otherwise and `err` is set.
         */
        fetch_interfaces(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        fetch_interfaces_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_interfaces_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_interfaces_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        fetch_interfaces_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch all networks managed by connection
         * `conn`. Use e.g. `gvir_connection_find_network_by_name` or
         * `gvir_connection_get_networks` afterwards to query the fetched
         * domains.
         * @param cancellable cancellation object
         */
        fetch_networks(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        fetch_networks_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_networks_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_networks_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        fetch_networks_finish(result: Gio.AsyncResult): boolean;
        /**
         * Use this method to fetch all storage pools managed by connection
         * `conn`. Use e.g. `gvir_connection_find_storage_pool_by_name` or
         * `gvir_connection_get_storage_pools` afterwards to query the fetched
         * pools.
         * @param cancellable cancellation object
         */
        fetch_storage_pools(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        fetch_storage_pools_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_storage_pools_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_storage_pools_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        fetch_storage_pools_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param id id of the requested domain
         * @returns the {@link LibvirtGObject.Domain}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        find_domain_by_id(id: number): Domain;
        /**
         * @param name name of the requested domain
         * @returns the {@link LibvirtGObject.Domain}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        find_domain_by_name(name: string): Domain;
        /**
         * Get a particular interface which has MAC address `mac`.
         * @param macaddr MAC address to lookup
         * @returns A new reference to a {@link LibvirtGObject.Interface}, or NULL if no interface exists with MAC address `mac`. The returned object must be unreffed using `g_object_unref()` once used.
         */
        find_interface_by_mac(macaddr: string): Interface;
        /**
         * Get a particular network which has name `name`.
         * @param name name of the network to search for
         * @returns A new reference to a {@link LibvirtGObject.Network}, or NULL if no network exists with name `name`. The returned object must be unreffed using `g_object_unref()` once used.
         */
        find_network_by_name(name: string): Network;
        /**
         * @param name name of the requested storage pool
         * @returns the {@link LibvirtGObject.StoragePool}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        find_storage_pool_by_name(name: string): StoragePool;
        /**
         * @returns a {@link LibvirtGConfig.Capabilities} or NULL.  The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_capabilities(): LibvirtGConfig.Capabilities;
        /**
         * @param cancellable cancellation object
         */
        get_capabilities_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<LibvirtGConfig.Capabilities>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_capabilities_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_capabilities_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<LibvirtGConfig.Capabilities> | void;
        /**
         * @param result async method result
         * @returns a {@link LibvirtGConfig.Capabilities} or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.Capabilities;
        /**
         * @param uuid uuid string of the requested domain
         * @returns the {@link LibvirtGObject.Domain}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_domain(uuid: string): Domain;
        /**
         * @param emulatorbin path to emulator
         * @param arch domain architecture
         * @param machine machine type
         * @param virttype virtualization type
         * @param flags extra flags; not used yet, so callers should always pass 0
         * @returns a {@link LibvirtGConfig.DomainCapabilities} or NULL. The return object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_domain_capabilities(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
        ): LibvirtGConfig.DomainCapabilities;
        /**
         * @param emulatorbin path to emulator
         * @param arch domain architecture
         * @param machine machine type
         * @param virttype virtualization type
         * @param flags extra flags; not used yet, so callers should always pass 0
         * @param cancellable cancellation object
         */
        get_domain_capabilities_async(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<LibvirtGConfig.DomainCapabilities>;
        /**
         * @param emulatorbin path to emulator
         * @param arch domain architecture
         * @param machine machine type
         * @param virttype virtualization type
         * @param flags extra flags; not used yet, so callers should always pass 0
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_domain_capabilities_async(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param emulatorbin path to emulator
         * @param arch domain architecture
         * @param machine machine type
         * @param virttype virtualization type
         * @param flags extra flags; not used yet, so callers should always pass 0
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_domain_capabilities_async(
            emulatorbin: string | null,
            arch: string | null,
            machine: string | null,
            virttype: string | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<LibvirtGConfig.DomainCapabilities> | void;
        /**
         * @param result async method result
         * @returns a {@link LibvirtGConfig.DomainCapabilities} or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_domain_capabilities_finish(result: Gio.AsyncResult): LibvirtGConfig.DomainCapabilities;
        /**
         * Gets a list of the domains available through `conn`.
         * @returns List of {@link LibvirtGObject.Domain}. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
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
         * @returns A new reference to a {@link LibvirtGObject.Interface}, or NULL if no interface exists with name `name`. The returned object must be unreffed using `g_object_unref()` once used.
         */
        get_interface(name: string): Interface;
        /**
         * Get a list of all the network interfaces managed by connection `conn` on
         * host machine.
         * @returns List of {@link LibvirtGObject.Interface}. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_interfaces(): Interface[];
        /**
         * Get a particular network which has UUID `uuid`.
         * @param uuid UUID of the network to lookup
         * @returns A new reference to a {@link LibvirtGObject.Network}, or NULL if no network exists with UUID `uuid`. The returned object must be unreffed using `g_object_unref()` once used.
         */
        get_network(uuid: string): Network;
        /**
         * Get a list of all the network networks available through `conn`.
         * @returns List of {@link LibvirtGObject.Network}. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_networks(): Network[];
        /**
         * @returns the info, or NULL if an error occurred. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_node_info(): NodeInfo;
        /**
         * @param uuid uuid string of the requested storage pool
         * @returns the {@link LibvirtGObject.StoragePool}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_storage_pool(uuid: string): StoragePool;
        /**
         * Gets a list of the storage pools available through `conn`.
         * @returns List of {@link LibvirtGObject.StoragePool}. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_storage_pools(): StoragePool[];
        /**
         * @param flags flags to use for the stream
         * @returns a {@link LibvirtGObject.Stream} stream, or NULL.The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_stream(flags: number): Stream;
        get_uri(): string;
        /**
         * Get version of current hypervisor used.
         * @returns version on success, 0 otherwise and `err` set.
         */
        get_version(): number;
        is_open(): boolean;
        is_read_only(): boolean;
        /**
         * @param cancellable cancellation object
         */
        open(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        open_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        open_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        open_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        open_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param cancellable
         */
        open_read_only(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        open_read_only_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        open_read_only_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        open_read_only_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        open_read_only_finish(result: Gio.AsyncResult): boolean;
        /**
         * Restores the domain saved with `gvir_domain_save_to_file`
         * @param filename path to input file
         * @param custom_conf configuration for domain or NULL
         * @param flags the flags
         * @returns TRUE on success, FALSE otherwise
         */
        restore_domain_from_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_connection_restore_domain_from_file`
         * @param filename path to input file
         * @param custom_conf configuration for domain
         * @param flags the flags
         * @param cancellable cancellation object
         */
        restore_domain_from_file_async(
            filename: string,
            custom_conf: LibvirtGConfig.Domain | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_connection_restore_domain_from_file`
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_connection_restore_domain_from_file`
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
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started by `gvir_restore_domain_from_file_async`.
         * @param result async method result
         * @returns TRUE if domain was restored successfully, FALSE otherwise.
         */
        restore_domain_from_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Start a new transient domain without persistent configuration.
         * The returned domain will initially be running.
         * @param conf the configuration for the new domain
         * @param flags
         * @returns the newly created domain, or NULL if an error occurred. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        start_domain(conf: LibvirtGConfig.Domain, flags: number): Domain;
    }

    namespace Domain {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @detailed
             * @run-last
             */
            pmsuspended: () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            resumed: () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            started: () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            stopped: () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            suspended: () => void;
            /**
             * @signal
             * @run-last
             */
            updated: () => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::persistent': (pspec: GObject.ParamSpec) => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'pmsuspended::handle': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'pmsuspended::persistent': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'resumed::handle': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'resumed::persistent': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'started::handle': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'started::persistent': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'stopped::handle': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'stopped::persistent': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'suspended::handle': () => void;
            /**
             * @signal
             * @detailed
             * @run-last
             */
            'suspended::persistent': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainHandle;
            persistent: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Domain extends GObject.Object {
        static $gtype: GObject.GType<Domain>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): DomainHandle;
        /**
         * @read-only
         */
        get persistent(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Domain.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Domain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Domain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Domain.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Domain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_pmsuspended(): void;
        /**
         * @virtual
         */
        vfunc_resumed(): void;
        /**
         * @virtual
         */
        vfunc_started(): void;
        /**
         * @virtual
         */
        vfunc_stopped(): void;
        /**
         * @virtual
         */
        vfunc_suspended(): void;
        /**
         * @virtual
         */
        vfunc_updated(): void;

        // Methods

        /**
         * @param custom_conf configuration of snapshot or NULL
         * @param flags bitwise-OR of {@link LibvirtGObject.DomainSnapshotCreateFlags}
         * @returns snapshot of domain. The returned object should be unreffed when no longer needed
         */
        create_snapshot(custom_conf: LibvirtGConfig.DomainSnapshot | null, flags: number): DomainSnapshot;
        /**
         * @param custom_conf Configuration of snapshot or `null`
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotCreateFlags}
         * @param cancellable cancellation object
         */
        create_snapshot_async(
            custom_conf: LibvirtGConfig.DomainSnapshot | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<DomainSnapshot>;
        /**
         * @param custom_conf Configuration of snapshot or `null`
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotCreateFlags}
         * @param cancellable cancellation object
         * @param callback Completion callback
         */
        create_snapshot_async(
            custom_conf: LibvirtGConfig.DomainSnapshot | null,
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param custom_conf Configuration of snapshot or `null`
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotCreateFlags}
         * @param cancellable cancellation object
         * @param callback Completion callback
         */
        create_snapshot_async(
            custom_conf: LibvirtGConfig.DomainSnapshot | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DomainSnapshot> | void;
        /**
         * @param result Async method result
         * @returns The created snapshot
         */
        create_snapshot_finish(result: Gio.AsyncResult): DomainSnapshot;
        /**
         * @param flags the flags
         */
        ['delete'](flags: number): boolean;
        /**
         * @param list_flags bitwise-OR of {@link LibvirtGObject.DomainSnapshotListFlags}
         * @param cancellable cancellation object
         * @returns `true` on success, `false` otherwise.
         */
        fetch_snapshots(list_flags: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param list_flags bitwise-OR of {@link LibvirtGObject.DomainSnapshotListFlags}
         * @param cancellable cancellation object
         */
        fetch_snapshots_async(list_flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param list_flags bitwise-OR of {@link LibvirtGObject.DomainSnapshotListFlags}
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_snapshots_async(
            list_flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param list_flags bitwise-OR of {@link LibvirtGObject.DomainSnapshotListFlags}
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        fetch_snapshots_async(
            list_flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param res async method result
         * @returns TRUE on success, FALSE otherwise.
         */
        fetch_snapshots_finish(res: Gio.AsyncResult): boolean;
        /**
         * @param flags the %GVirDomainXMLFlags flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.Domain;
        /**
         * Gets the list of devices attached to `domain`. The returned list should
         * be freed with `g_list_free()`, after its elements have been unreffed with
         * `g_object_unref()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGObject.DomainDevice}.
         */
        get_devices(): DomainDevice[];
        /**
         * @param flags Unused, pass 0
         * @returns `true` on success, `false` otherwise.
         */
        get_has_current_snapshot(flags: number): [boolean, boolean];
        get_id(): number;
        /**
         * @returns the info. The returned structure should be freed using `g_boxed_free`() with GVIR_TYPE_DOMAIN_INFO as the first argument when no longer needed.
         */
        get_info(): DomainInfo;
        /**
         * Asynchronous variant of `gvir_domain_get_info`.
         * @param cancellable cancellation object
         */
        get_info_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<DomainInfo>;
        /**
         * Asynchronous variant of `gvir_domain_get_info`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_info_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronous variant of `gvir_domain_get_info`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        get_info_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<DomainInfo> | void;
        /**
         * Finishes the operation started by `gvir_domain_get_info_async`.
         * @param result async method result
         * @returns the info. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_info_finish(result: Gio.AsyncResult): DomainInfo;
        get_name(): string;
        /**
         * @returns TRUE if domain is persistent, FALSE otherwise.
         */
        get_persistent(): boolean;
        /**
         * @returns TRUE if a stopped domain has a saved state to which it can be restored to using `gvir_domain_start`, FALSE otherwise.
         */
        get_saved(): boolean;
        /**
         * @returns A list of all the snapshots available for the given domain. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_snapshots(): DomainSnapshot[];
        get_uuid(): string;
        /**
         * Open a text console for the domain `dom`, connecting it to the
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
        /**
         * @param flags the %GVirDomainRebootFlags flags
         */
        reboot(flags: number): boolean;
        /**
         * @returns TRUE on success
         */
        resume(): boolean;
        /**
         * Asynchronous variant of `gvir_domain_resume`.
         * @param cancellable cancellation object
         */
        resume_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_resume`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        resume_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronous variant of `gvir_domain_resume`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        resume_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        resume_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves the state of the domain on disk and stops it. Use `gvir_domain_start`
         * to restore the saved state of the domain. A saved domain can be restored
         * even after shutdown/reboot of host machine.
         * @param flags extra flags, currently unused
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save(flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_domain_save`.
         * @param flags extra flags, currently unused
         * @param cancellable cancellation object
         */
        save_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_save`.
         * @param flags extra flags, currently unused
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        save_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_domain_save`.
         * @param flags extra flags, currently unused
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        save_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started by `gvir_domain_save_async`.
         * @param result async method result
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param filename path to the output file
         * @param custom_conf configuration for domain or NULL
         * @param flags the flags
         * @returns TRUE on success, FALSE otherwise
         */
        save_to_file(filename: string, custom_conf: LibvirtGConfig.Domain | null, flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_domain_save_to_file`
         * @param filename path to output file
         * @param custom_conf configuration for domain or NULL
         * @param flags the flags
         * @param cancellable cancellation object
         */
        save_to_file_async(
            filename: string,
            custom_conf: LibvirtGConfig.Domain | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_save_to_file`
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_domain_save_to_file`
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
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started by `gvir_domain_save_to_file_async`.
         * @param result async method result
         * @returns TRUE if domain was saved successfully, FALSE otherwise.
         */
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param stream stream to use as output
         * @param monitor_id monitor ID to take screenshot from
         * @param flags extra flags, currently unused
         * @returns a newly allocated string containing the mime-type of the image format, or NULL upon error.
         */
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
         * If `date_time` is `null`, the time is reset using the domain's RTC.
         *
         * Please note that some hypervisors may require guest agent to be configured
         * and running in order for this function to work.
         * @param date_time the time to set as {@link GLib.DateTime}.
         * @param flags Unused, pass 0.
         * @returns `true` on success, `false` otherwise.
         */
        set_time(date_time: GLib.DateTime | null, flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_domain_set_time`.
         * @param date_time the time to set as {@link GLib.DateTime}.
         * @param flags bitwise-OR of `GVirDomainSetTimeFlags`.
         * @param cancellable cancellation object
         */
        set_time_async(
            date_time: GLib.DateTime | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_set_time`.
         * @param date_time the time to set as {@link GLib.DateTime}.
         * @param flags bitwise-OR of `GVirDomainSetTimeFlags`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        set_time_async(
            date_time: GLib.DateTime | null,
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_domain_set_time`.
         * @param date_time the time to set as {@link GLib.DateTime}.
         * @param flags bitwise-OR of `GVirDomainSetTimeFlags`.
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        set_time_async(
            date_time: GLib.DateTime | null,
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started by `gvir_domain_set_time_async`.
         * @param result async method result
         * @returns `true` on success, `false` otherwise.
         */
        set_time_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param flags the %GVirDomainShutdownFlags flags
         */
        shutdown(flags: number): boolean;
        /**
         * @param flags the flags
         */
        start(flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_domain_start`.
         * @param flags the flags
         * @param cancellable cancellation object
         */
        start_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_start`.
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        start_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_domain_start`.
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        start_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        start_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param flags the flags
         */
        stop(flags: number): boolean;
        /**
         * Suspends an active domain, the process is frozen without further access to
         * CPU resources and I/O but the memory used by the domain at the hypervisor
         * level will stay allocated. Use `gvir_domain_resume()` to reactivate the domain.
         * @returns TRUE if domain was suspended successfully, FALSE otherwise.
         */
        suspend(): boolean;
        /**
         * Update the configuration of a device.
         * @param device A modified device config
         * @param flags bitwise-OR of {@link LibvirtGObject.DomainUpdateDeviceFlags}
         * @returns TRUE if device was updated successfully, FALSE otherwise.
         */
        update_device(device: LibvirtGConfig.DomainDevice, flags: number): boolean;
        /**
         * @param flags placeholder for flags, pass 0
         * @returns TRUE on success
         */
        wakeup(flags: number): boolean;
        /**
         * Asynchronous variant of `gvir_domain_wakeup`.
         * @param flags placeholder for flags, pass 0
         * @param cancellable cancellation object
         */
        wakeup_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronous variant of `gvir_domain_wakeup`.
         * @param flags placeholder for flags, pass 0
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        wakeup_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous variant of `gvir_domain_wakeup`.
         * @param flags placeholder for flags, pass 0
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        wakeup_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result
         */
        wakeup_finish(result: Gio.AsyncResult): boolean;
    }

    namespace DomainDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: LibvirtGConfig.DomainDevice;
            domain: Domain;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class DomainDevice extends GObject.Object {
        static $gtype: GObject.GType<DomainDevice>;

        // Properties

        /**
         * @construct-only
         */
        get config(): LibvirtGConfig.DomainDevice;
        /**
         * @construct-only
         */
        get domain(): Domain;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(): LibvirtGConfig.DomainDevice;
        /**
         * @returns the associated domain. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_domain(): Domain;
    }

    namespace DomainDisk {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainDisk.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function returns network disk stats. Individual fields
         * within the stats structure may be returned as -1, which indicates
         * that the hypervisor does not support that particular statistic.
         * @returns the stats or `null` in case of error.The returned object should be unreffed with `g_object_unref()` when no longer needed.
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

    namespace DomainInterface {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::config': (pspec: GObject.ParamSpec) => void;
            'notify::domain': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterface extends DomainDevice {
        static $gtype: GObject.GType<DomainInterface>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function returns network interface stats. Individual fields
         * within the stats structure may be returned as -1, which indicates
         * that the hypervisor does not support that particular statistic.
         * @returns the stats or `null` in case of error. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_stats(): DomainInterfaceStats;
    }

    namespace DomainSnapshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: DomainSnapshotHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class DomainSnapshot extends GObject.Object {
        static $gtype: GObject.GType<DomainSnapshot>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): DomainSnapshotHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSnapshot.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSnapshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags Bitwise or of {@link LibvirtGObject.DomainSnapshotDeleteFlags}
         * @returns TRUE on success, FALSE otherwise
         */
        ['delete'](flags: number): boolean;
        /**
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotDeleteFlags}
         * @param cancellable cancellation object
         */
        delete_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotDeleteFlags}
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        delete_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param flags Bitwise-OR of {@link LibvirtGObject.DomainSnapshotDeleteFlags}
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        delete_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param res async method result
         * @returns `true` on success, `false` otherwise.
         */
        delete_finish(res: Gio.AsyncResult): boolean;
        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.DomainSnapshot;
        /**
         * @param flags Currently unused, pass 0
         * @returns `true` on success, `false` otherwise.
         */
        get_is_current(flags: number): [boolean, boolean];
        get_name(): string;
        /**
         * @param flags Bitwise OR of GVirDomainSnapshotRevertFlags
         * @returns TRUE if the snapshot's domain has successfully been reverted to the given snapshot, FALSE otherwise, in which case `error` will be set.
         */
        revert_to(flags: number): boolean;
        /**
         * @param flags Bitwise OR of {@link LibvirtGObject.DomainSnapshotRevertFlags}
         * @param cancellable cancellation object
         */
        revert_to_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param flags Bitwise OR of {@link LibvirtGObject.DomainSnapshotRevertFlags}
         * @param cancellable cancellation object
         * @param callback The callback
         */
        revert_to_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param flags Bitwise OR of {@link LibvirtGObject.DomainSnapshotRevertFlags}
         * @param cancellable cancellation object
         * @param callback The callback
         */
        revert_to_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result The result
         * @returns `true` on success, `false` otherwise.
         */
        revert_to_finish(result: Gio.AsyncResult): boolean;
        /**
         * Updates the given snapshot's configuration according to the
         * given GVirConfigDomainSnapshot.
         * @param conf The new config object
         * @returns `true` if no error was reported, `false` otherwise.
         */
        set_config(conf: LibvirtGConfig.DomainSnapshot): boolean;
    }

    namespace Interface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: InterfaceHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class Interface extends GObject.Object {
        static $gtype: GObject.GType<Interface>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): InterfaceHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Interface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Interface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Interface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.Interface;
        get_mac(): string;
        get_name(): string;
    }

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'connection-added': (arg0: Connection) => void;
            /**
             * @signal
             * @run-first
             */
            'connection-removed': (arg0: Connection) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Manager extends GObject.Object {
        static $gtype: GObject.GType<Manager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Manager;

        // Signals

        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param conn
         * @virtual
         */
        vfunc_connection_added(conn: Connection): void;
        /**
         * @param conn
         * @virtual
         */
        vfunc_connection_removed(conn: Connection): void;

        // Methods

        /**
         * @param conn
         */
        add_connection(conn: Connection): void;
        /**
         * @param uri
         * @returns the connection,or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        find_connection_by_uri(uri: string): Connection | null;
        /**
         * @returns the connections. The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_connections(): Connection[];
        /**
         * @param conn
         */
        remove_connection(conn: Connection): void;
    }

    namespace Network {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class Network extends GObject.Object {
        static $gtype: GObject.GType<Network>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): NetworkHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Network.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Network.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Network.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Network.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Network.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_started(): void;
        /**
         * @virtual
         */
        vfunc_stopped(): void;

        // Methods

        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.Network;
        /**
         * This function fetches leases info of guests in the specified network. If the
         * optional parameter `mac` is specified, the returned list will contain only
         * lease info about a specific guest interface with `mac`. There can be multiple
         * leases for a single `mac` because this API supports DHCPv6 too.
         * @param mac The optional ASCII formatted MAC address of an interface
         * @param flags placeholder for flags, must be 0
         * @returns the list of network leases. Each object in the returned list should be unreffed with `g_object_unref()` and the list itself using g_list_free, when no longer needed.
         */
        get_dhcp_leases(mac: string | null, flags: number): NetworkDHCPLease[];
        get_name(): string;
        get_uuid(): string;
    }

    namespace NetworkDHCPLease {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: any;
        }
    }

    /**
     * @gir-type Class
     */
    class NetworkDHCPLease extends GObject.Object {
        static $gtype: GObject.GType<NetworkDHCPLease>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkDHCPLease.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkDHCPLease.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NetworkDHCPLease.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkDHCPLease.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkDHCPLease.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkDHCPLease.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NetworkDHCPLease.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkDHCPLease.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The client ID or DUID.
         */
        get_client_id(): string;
        /**
         * @returns The expiry time of this lease, as seconds since epoch.
         */
        get_expiry_time(): number;
        /**
         * @returns The hostname.
         */
        get_hostname(): string;
        /**
         * @returns The IAID.
         */
        get_iaid(): string;
        /**
         * @returns The network interface name.
         */
        get_iface(): string;
        /**
         * @returns The IP address.
         */
        get_ip(): string;
        /**
         * @returns The type of IP, see %GVirIPAddrType for possible values.
         */
        get_ip_type(): number;
        /**
         * @returns The MAC address.
         */
        get_mac(): string;
        /**
         * @returns The number of network address bits in the IP address.
         */
        get_prefix(): number;
    }

    namespace NetworkFilter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NetworkFilterHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class NetworkFilter extends GObject.Object {
        static $gtype: GObject.GType<NetworkFilter>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): NetworkFilterHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkFilter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.NetworkFilter;
        get_name(): string;
        get_uuid(): string;
    }

    namespace NodeDevice {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: NodeDeviceHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class NodeDevice extends GObject.Object {
        static $gtype: GObject.GType<NodeDevice>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): NodeDeviceHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NodeDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NodeDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.NodeDevice;
        get_name(): string;
    }

    namespace Secret {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: SecretHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class Secret extends GObject.Object {
        static $gtype: GObject.GType<Secret>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): SecretHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Secret.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Secret.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Secret.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Secret.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Secret.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.Secret;
        get_name(): string;
        get_uuid(): string;
    }

    namespace StoragePool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StoragePoolHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class StoragePool extends GObject.Object {
        static $gtype: GObject.GType<StoragePool>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): StoragePoolHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StoragePool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StoragePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param flags the flags
         * @returns `True` on success, `False` otherwise.
         */
        build(flags: number): boolean;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         */
        build_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        build_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        build_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         * @returns `True` on success, `False` otherwise.
         */
        build_finish(result: Gio.AsyncResult): boolean;
        /**
         * @param conf the configuration for the new volume
         * @returns the newly created volume. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        create_volume(conf: LibvirtGConfig.StorageVol): StorageVol;
        /**
         * @param flags the flags
         * @returns `True` on success, `False` otherwise.
         */
        ['delete'](flags: number): boolean;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         */
        delete_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        delete_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        delete_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         * @returns `True` on success, `False` otherwise.
         */
        delete_finish(result: Gio.AsyncResult): boolean;
        get_active(): boolean;
        /**
         * @returns `True` if autostart is enabled, `False` otherwise.
         */
        get_autostart(): boolean;
        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.StoragePool;
        /**
         * @returns the info. The returned pointer should be freed using `g_boxed_free`() when no longer needed.
         */
        get_info(): StoragePoolInfo;
        get_name(): string;
        get_persistent(): boolean;
        get_uuid(): string;
        /**
         * @param name Name of the requested storage volume
         * @returns the {@link LibvirtGObject.StorageVol}, or NULL. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_volume(name: string): StorageVol;
        /**
         * @returns List of {@link LibvirtGObject.StorageVol}.  The returned list should be freed with `g_list_free()`, after its elements have been unreffed with `g_object_unref()`.
         */
        get_volumes(): StorageVol[];
        /**
         * @param cancellable cancellation object
         */
        refresh(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable cancellation object
         */
        refresh_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        refresh_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        refresh_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         */
        refresh_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets whether or not storage pool `pool` is started automatically on boot.
         * @param autostart Whether or not to autostart
         * @returns `TRUE` on success, `FALSE` otherwise.
         */
        set_autostart(autostart: boolean): boolean;
        /**
         * @param flags the flags
         * @returns `True` on success, `False` otherwise.
         */
        start(flags: number): boolean;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         */
        start_async(flags: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        start_async(
            flags: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param flags the flags
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        start_async(
            flags: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         * @returns `True` on success, `False` otherwise.
         */
        start_finish(result: Gio.AsyncResult): boolean;
        /**
         * @returns `True` on success, `False` otherwise.
         */
        stop(): boolean;
        /**
         * @param cancellable cancellation object
         */
        stop_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        stop_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        stop_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         * @returns `True` on success, `False` otherwise.
         */
        stop_finish(result: Gio.AsyncResult): boolean;
        /**
         * @returns `True` on success, `False` otherwise.
         */
        undefine(): boolean;
        /**
         * @param cancellable cancellation object
         */
        undefine_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        undefine_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param cancellable cancellation object
         * @param callback completion callback
         */
        undefine_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * @param result async method result
         * @returns `True` on success, `False` otherwise.
         */
        undefine_finish(result: Gio.AsyncResult): boolean;
    }

    namespace StorageVol {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::pool': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            handle: StorageVolHandle;
            pool: StoragePool;
        }
    }

    /**
     * @gir-type Class
     */
    class StorageVol extends GObject.Object {
        static $gtype: GObject.GType<StorageVol>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): StorageVolHandle;
        /**
         * @construct-only
         */
        get pool(): StoragePool;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageVol.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StorageVol.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Deletes the storage volume `vol`.
         * @param flags the flags
         * @returns `true` on success, `false` otherwise
         */
        ['delete'](flags: number): boolean;
        /**
         * @param stream stream to use as output
         * @param offset position in `vol` to start reading from
         * @param length limit on amount of data to download, or 0 for downloading all data
         * @param flags extra flags, not used yet, pass 0
         * @returns `TRUE` of success, `FALSE` otherwise
         */
        download(stream: Stream, offset: number, length: number, flags: number): boolean;
        /**
         * @param flags the flags
         * @returns the config. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_config(flags: number): LibvirtGConfig.StorageVol;
        /**
         * @returns the info. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_info(): StorageVolInfo;
        get_name(): string;
        get_path(): string;
        /**
         * Changes the capacity of the storage volume `vol` to `capacity`.
         * @param capacity the new capacity of the volume
         * @param flags the flags
         * @returns `TRUE` success, `FALSE` otherwise
         */
        resize(capacity: number, flags: StorageVolResizeFlags | null): boolean;
        /**
         * @param stream stream to use as input
         * @param offset position in `vol` to start to write to
         * @param length limit on amount of data to upload, or 0 for uploading all data
         * @param flags the flags, not set yet, pass 0
         * @returns `TRUE` of success, `FALSE` otherwise
         */
        upload(stream: Stream, offset: number, length: number, flags: number): boolean;
    }

    namespace Stream {
        // Signal signatures
        interface SignalSignatures extends Gio.IOStream.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::closed': (pspec: GObject.ParamSpec) => void;
            'notify::input-stream': (pspec: GObject.ParamSpec) => void;
            'notify::output-stream': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.IOStream.ConstructorProps {
            handle: StreamHandle;
        }
    }

    /**
     * @gir-type Class
     */
    class Stream extends Gio.IOStream {
        static $gtype: GObject.GType<Stream>;

        // Properties

        /**
         * @construct-only
         */
        get handle(): StreamHandle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a watch for `stream` to the mainloop
         * @param priority the priority of the {@link LibvirtGObject.Stream} source
         * @param cond the conditions to watch for (bitfield of {@link LibvirtGObject.StreamIOCondition})
         * @param func the function to call when the condition is satisfied
         * @returns the event source id
         */
        add_watch(priority: number, cond: StreamIOCondition | null, func: StreamIOFunc): number;
        /**
         * Receive data (up to `size` bytes) from a stream.
         * On error -1 is returned and `error` is set accordingly.
         *
         * `gvir_stream_receive()` can return any number of bytes, up to
         * `size`. If more than `size` bytes have been received, the additional
         * data will be returned in future calls to `gvir_stream_receive()`.
         *
         * If there is no data available, a {@link Gio.IOErrorEnum.WOULD_BLOCK} error will be
         * returned.
         * @param buffer a buffer     to read data into (which should be at least `size` bytes long).
         * @param cancellable a %GCancellable or `null`
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
         * `gvir_stream_send()` can return any number of bytes, up to
         * `size`. If more than `size` bytes have been sendd, the additional
         * data will be returned in future calls to `gvir_stream_send()`.
         *
         * If there is no data available, a {@link Gio.IOErrorEnum.WOULD_BLOCK} error will be
         * returned.
         * @param buffer a buffer to write data from (which should be at least `size`     bytes long).
         * @param size the number of bytes you want to write to the stream
         * @param cancellable a %GCancellable or `null`
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

    /**
     * @gir-type Alias
     */
    type ConnectionClass = typeof Connection;
    /**
     * @gir-type Struct
     */
    abstract class ConnectionPrivate {
        static $gtype: GObject.GType<ConnectionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainClass = typeof Domain;
    /**
     * @gir-type Alias
     */
    type DomainDeviceClass = typeof DomainDevice;
    /**
     * @gir-type Struct
     */
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainDiskClass = typeof DomainDisk;
    /**
     * @gir-type Struct
     */
    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class DomainDiskStats {
        static $gtype: GObject.GType<DomainDiskStats>;

        // Fields

        rd_req: number;
        rd_bytes: number;
        wr_req: number;
        wr_bytes: number;
        errs: number;

        // Constructors

        constructor(
            properties?: Partial<{
                rd_req: number;
                rd_bytes: number;
                wr_req: number;
                wr_bytes: number;
                errs: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DomainInfo {
        static $gtype: GObject.GType<DomainInfo>;

        // Fields

        state: DomainState;
        maxMem: number;
        memory: number;
        nrVirtCpu: number;
        cpuTime: number;
    }

    /**
     * @gir-type Alias
     */
    type DomainInterfaceClass = typeof DomainInterface;
    /**
     * @gir-type Struct
     */
    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;
    }

    /**
     * @gir-type Struct
     */
    class DomainInterfaceStats {
        static $gtype: GObject.GType<DomainInterfaceStats>;

        // Fields

        rx_bytes: number;
        rx_packets: number;
        rx_errs: number;
        rx_drop: number;
        tx_bytes: number;
        tx_packets: number;
        tx_errs: number;
        tx_drop: number;

        // Constructors

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
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSnapshotClass = typeof DomainSnapshot;
    /**
     * @gir-type Struct
     */
    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type InterfaceClass = typeof Interface;
    /**
     * @gir-type Struct
     */
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;
    /**
     * @gir-type Struct
     */
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NetworkClass = typeof Network;
    /**
     * @gir-type Alias
     */
    type NetworkDHCPLeaseClass = typeof NetworkDHCPLease;
    /**
     * @gir-type Struct
     */
    abstract class NetworkDHCPLeasePrivate {
        static $gtype: GObject.GType<NetworkDHCPLeasePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NetworkFilterClass = typeof NetworkFilter;
    /**
     * @gir-type Struct
     */
    abstract class NetworkFilterPrivate {
        static $gtype: GObject.GType<NetworkFilterPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class NetworkPrivate {
        static $gtype: GObject.GType<NetworkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NodeDeviceClass = typeof NodeDevice;
    /**
     * @gir-type Struct
     */
    abstract class NodeDevicePrivate {
        static $gtype: GObject.GType<NodeDevicePrivate>;
    }

    /**
     * @gir-type Struct
     */
    class NodeInfo {
        static $gtype: GObject.GType<NodeInfo>;

        // Fields

        model: number[];
        memory: number;
        cpus: number;
        mhz: number;
        nodes: number;
        sockets: number;
        cores: number;
        threads: number;

        // Constructors

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
    }

    /**
     * @gir-type Alias
     */
    type SecretClass = typeof Secret;
    /**
     * @gir-type Struct
     */
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StoragePoolClass = typeof StoragePool;
    /**
     * @gir-type Struct
     */
    class StoragePoolInfo {
        static $gtype: GObject.GType<StoragePoolInfo>;

        // Fields

        state: StoragePoolState;
        capacity: number;
        allocation: number;
        available: number;
    }

    /**
     * @gir-type Struct
     */
    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StorageVolClass = typeof StorageVol;
    /**
     * @gir-type Struct
     */
    class StorageVolInfo {
        static $gtype: GObject.GType<StorageVolInfo>;

        // Fields

        type: StorageVolType;
        capacity: number;
        allocation: number;
    }

    /**
     * @gir-type Struct
     */
    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StreamClass = typeof Stream;
    /**
     * @gir-type Struct
     */
    abstract class StreamPrivate {
        static $gtype: GObject.GType<StreamPrivate>;
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
