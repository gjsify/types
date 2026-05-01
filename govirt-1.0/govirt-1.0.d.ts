
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
import type Rest from '@girs/rest-1.0';
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GoVirt {

    /**
     * GoVirt-1.0
     */


    /**
     * @gir-type Enum
     */
    enum DiskContentType {
        DATA,
        HOSTED_ENGINE,
        HOSTED_ENGINE_CONFIGURATION,
        HOSTED_ENGINE_METADATA,
        HOSTED_ENGINE_SANLOCK,
        ISO,
        MEMORY_DUMP_VOLUME,
        METADATA_VOLUME,
        OVF_STORE,
    }


    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static FAILED: number;

        static PARSING_FAILED: number;

        static NOT_SUPPORTED: number;

        static ACTION_FAILED: number;

        static BAD_URI: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * @gir-type Struct
     */
    class RestCallError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static XML: number;

        static CANCELLED: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * @gir-type Enum
     */
    enum StorageDomainFormatVersion {
        V1,
        V2,
        V3,
        V4,
        V5,
    }


    /**
     * @gir-type Enum
     */
    enum StorageDomainState {
        ACTIVE,
        INACTIVE,
        LOCKED,
        MIXED,
        UNATTACHED,
        MAINTENANCE,
        UNKNOWN,
    }


    /**
     * @gir-type Enum
     */
    enum StorageDomainStorageType {
        CINDER,
        FCP,
        GLANCE,
        GLUSTERFS,
        ISCSI,
        LOCALFS,
        MANAGED_BLOCK_STORAGE,
        NFS,
        POSIXFS,
    }


    /**
     * @gir-type Enum
     */
    enum StorageDomainType {
        DATA,
        ISO,
        EXPORT,
        IMAGE,
    }


    /**
     * @gir-type Enum
     */
    enum VmDisplayType {
        SPICE,
        VNC,
        INVALID,
    }


    /**
     * @gir-type Enum
     */
    enum VmState {
        DOWN,
        UP,
        REBOOTING,
        POWERING_UP,
        POWERED_DOWN,
        PAUSED,
        MIGRATING,
        UNKNOWN,
        NOT_RESPONDING,
        WAIT_FOR_LAUNCH,
        REBOOT_IN_PROGRESS,
        SAVING_STATE,
        RESTORING_STATE,
        SUSPENDED,
        IMAGE_LOCKED,
        POWERING_DOWN,
    }


    function error_quark(): GLib.Quark;

    function rest_call_error_quark(): GLib.Quark;

    /**
     * Set various properties on `proxy`, according to the commandline
     * arguments given to `ovirt_get_option_group()` option group.
     * @param proxy a {@link GoVirt.Proxy} to set options upon
     */
    function set_proxy_options(proxy: Proxy): void;

    namespace Api {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Api extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Api>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Api.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Api.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Api;

        // Signals
        /** @signal */
        connect<K extends keyof Api.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Api.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Api.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Api.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Api.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Api.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_clusters(): Collection;

        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_data_centers(): Collection;

        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_hosts(): Collection;

        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_storage_domains(): Collection;

        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_vm_pools(): Collection;

        /**
         * This method does not initiate any network activity, the collection
         * must be fetched with `ovirt_collection_fetch()` before having up-to-date
         * content.
         */
        get_vms(): Collection;

        /**
         * @param query search query
         */
        search_clusters(query: string): Collection;

        /**
         * @param query search query
         */
        search_data_centers(query: string): Collection;

        /**
         * @param query search query
         */
        search_hosts(query: string): Collection;

        /**
         * @param query search query
         */
        search_storage_domains(query: string): Collection;

        /**
         * @param query search query
         */
        search_vm_pools(query: string): Collection;

        /**
         * @param query search query
         */
        search_vms(query: string): Collection;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Cdrom {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            file: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Cdrom extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Cdrom>;

        // Properties
        /**
         * @default null
         */
        get file(): string;
        set file(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cdrom.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cdrom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Cdrom.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cdrom.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cdrom.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cdrom.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cdrom.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cdrom.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param current 
         * @param proxy 
         */
        update(current: boolean, proxy: Proxy): boolean;

        /**
         * @param args 
         */
    // Conflicted with GoVirt.Resource.update
        update(...args: never[]): any;

        /**
         * @param current 
         * @param proxy 
         * @param cancellable 
         */
        update_async(current: boolean, proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param current 
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        update_async(current: boolean, proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param current 
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        update_async(current: boolean, proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param args 
         */
    // Conflicted with GoVirt.Resource.update_async
        update_async(...args: never[]): any;

        /**
         * @param result 
         */
        update_finish(result: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Cluster {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::data-center-href": (pspec: GObject.ParamSpec) => void;
            "notify::data-center-id": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            data_center_href: string;
            dataCenterHref: string;
            data_center_id: string;
            dataCenterId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Cluster extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Cluster>;

        // Properties
        /**
         * @default null
         */
        get data_center_href(): string;
        set data_center_href(val: string);

        /**
         * @default null
         */
        get dataCenterHref(): string;
        set dataCenterHref(val: string);

        /**
         * @default null
         */
        get data_center_id(): string;
        set data_center_id(val: string);

        /**
         * @default null
         */
        get dataCenterId(): string;
        set dataCenterId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cluster.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cluster.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Cluster;

        // Signals
        /** @signal */
        connect<K extends keyof Cluster.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cluster.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cluster.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cluster.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cluster.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cluster.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a {@link GoVirt.Cluster} representing the data center the cluster belongs
         * to. This method does not initiate any network activity, the remote data center must
         * be then be fetched using `ovirt_resource_refresh()` or
         * `ovirt_resource_refresh_async()`.
         * @returns a {@link GoVirt.DataCenter} representing data center the `host` belongs to.
         */
        get_data_center(): DataCenter;

        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote hosts from a
         * cluster object. This method does not initiate any network
         * activity, the remote host list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of hosts associated with `cluster`.
         */
        get_hosts(): Collection;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Collection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::collection-xml-name": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::resource-type": (pspec: GObject.ParamSpec) => void;
            "notify::resource-xml-name": (pspec: GObject.ParamSpec) => void;
            "notify::resources": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            collection_xml_name: string;
            collectionXmlName: string;
            href: string;
            resource_type: GObject.GTypeInput;
            resourceType: GObject.GTypeInput;
            resource_xml_name: string;
            resourceXmlName: string;
            resources: ({ [key: string]: any } | GLib.HashTable<any, any>);
        }
    }

    /**
     * @gir-type Class
     */
    class Collection extends GObject.Object {
        static $gtype: GObject.GType<Collection>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        set collection_xml_name(val: string);

        /**
         * @construct-only
         * @default null
         */
        set collectionXmlName(val: string);

        /**
         * @construct-only
         * @default null
         */
        get href(): string;

        /**
         * @construct-only
         */
        get resource_type(): GObject.GType;

        /**
         * @construct-only
         */
        get resourceType(): GObject.GType;

        /**
         * @construct-only
         * @default null
         */
        set resource_xml_name(val: string);

        /**
         * @construct-only
         * @default null
         */
        set resourceXmlName(val: string);

        get resources(): GLib.HashTable<any, any>;
        set resources(val: ({ [key: string]: any } | GLib.HashTable<any, any>));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Collection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Collection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Collection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Collection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Collection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Collection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param proxy a {@link GoVirt.Proxy}
         */
        fetch(proxy: Proxy): boolean;

        /**
         * @param proxy a {@link GoVirt.Proxy}
         * @param cancellable 
         */
        fetch_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy a {@link GoVirt.Proxy}
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy a {@link GoVirt.Proxy}
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result async method result
         * @returns TRUE if successful, FALSE otherwise, with `error` set.
         */
        fetch_finish(result: Gio.AsyncResult): boolean;

        get_resources(): GLib.HashTable<string, Resource>;

        /**
         * Looks up a resource in `collection` whose name is `name`. If it cannot be
         * found, NULL is returned. This method does not initiate any network
         * activity, the remote collection content must have been fetched with
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()` before
         * calling this function.
         * @param name name of the resource to lookup
         * @returns a {@link GoVirt.Resource} whose name is `name` or NULL
         */
        lookup_resource(name: string): Resource;
    }


    namespace DataCenter {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DataCenter extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<DataCenter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataCenter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DataCenter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DataCenter;

        // Signals
        /** @signal */
        connect<K extends keyof DataCenter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCenter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DataCenter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DataCenter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DataCenter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DataCenter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote clusters from a
         * data center object. This method does not initiate any network
         * activity, the remote cluster list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of clusters associated with `data_center`.
         */
        get_clusters(): Collection;

        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote storage domains from a
         * data center object. This method does not initiate any network
         * activity, the remote storage domain list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of storage_domains associated with `data_center`.
         */
        get_storage_domains(): Collection;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Disk {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class Disk extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Disk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Disk.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Disk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Disk;

        // Signals
        /** @signal */
        connect<K extends keyof Disk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Disk.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Disk.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Disk.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Disk.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Disk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Host {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::cluster-href": (pspec: GObject.ParamSpec) => void;
            "notify::cluster-id": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            cluster_href: string;
            clusterHref: string;
            cluster_id: string;
            clusterId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Host extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Host>;

        // Properties
        /**
         * @default null
         */
        get cluster_href(): string;
        set cluster_href(val: string);

        /**
         * @default null
         */
        get clusterHref(): string;
        set clusterHref(val: string);

        /**
         * @default null
         */
        get cluster_id(): string;
        set cluster_id(val: string);

        /**
         * @default null
         */
        get clusterId(): string;
        set clusterId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Host.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Host.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Host;

        // Signals
        /** @signal */
        connect<K extends keyof Host.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Host.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Host.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Host.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Host.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Host.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a {@link GoVirt.Cluster} representing the cluster the host belongs
         * to. This method does not initiate any network activity, the remote host must
         * be then be fetched using `ovirt_resource_refresh()` or
         * `ovirt_resource_refresh_async()`.
         * @returns a {@link GoVirt.Cluster} representing cluster the `host` belongs to.
         */
        get_cluster(): Cluster;

        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote vms from a
         * host object. This method does not initiate any network
         * activity, the remote vm list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of vms associated with `host`.
         */
        get_vms(): Collection;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Proxy {
        // Signal signatures
        interface SignalSignatures extends Rest.Proxy.SignalSignatures {
            "notify::admin": (pspec: GObject.ParamSpec) => void;
            "notify::ca-cert": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::sso-token": (pspec: GObject.ParamSpec) => void;
            "notify::binding-required": (pspec: GObject.ParamSpec) => void;
            "notify::disable-cookies": (pspec: GObject.ParamSpec) => void;
            "notify::password": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-ca-file": (pspec: GObject.ParamSpec) => void;
            "notify::ssl-strict": (pspec: GObject.ParamSpec) => void;
            "notify::url-format": (pspec: GObject.ParamSpec) => void;
            "notify::user-agent": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Rest.Proxy.ConstructorProps {
            admin: boolean;
            ca_cert: (Uint8Array | string);
            caCert: (Uint8Array | string);
            session_id: string;
            sessionId: string;
            sso_token: string;
            ssoToken: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Proxy extends Rest.Proxy {
        static $gtype: GObject.GType<Proxy>;

        // Properties
        /**
         * Indicates whether to connect to the REST API as an admin, or as a regular user.
         * Different content will be shown for the same user depending on if they connect as
         * an admin or not. Connecting as an admin requires to have admin priviledges on the
         * oVirt instance.
         * @since 0.0.2
         * @default false
         */
        get admin(): boolean;
        set admin(val: boolean);

        /**
         * Path to a file containing the CA certificates to use for the HTTPS
         * REST API communication with the oVirt instance
         */
        get ca_cert(): Uint8Array;
        set ca_cert(val: (Uint8Array | string));

        /**
         * Path to a file containing the CA certificates to use for the HTTPS
         * REST API communication with the oVirt instance
         */
        get caCert(): Uint8Array;
        set caCert(val: (Uint8Array | string));

        /**
         * jsessionid cookie value. This allows to use the REST API without
         * authenticating first. This was used by oVirt 3.6 and is now replaced
         * by OvirtProxy:sso-token.
         * @since 0.3.1
         * @default null
         */
        get session_id(): string;
        set session_id(val: string);

        /**
         * jsessionid cookie value. This allows to use the REST API without
         * authenticating first. This was used by oVirt 3.6 and is now replaced
         * by OvirtProxy:sso-token.
         * @since 0.3.1
         * @default null
         */
        get sessionId(): string;
        set sessionId(val: string);

        /**
         * Token to use for SSO. This allows to use the REST API without
         * authenticating first. This is used starting with oVirt 4.0.
         * @since 0.3.4
         * @default null
         */
        get sso_token(): string;
        set sso_token(val: string);

        /**
         * Token to use for SSO. This allows to use the REST API without
         * authenticating first. This is used starting with oVirt 4.0.
         * @since 0.3.4
         * @default null
         */
        get ssoToken(): string;
        set ssoToken(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Proxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](host: string): Proxy;

        // Signals
        /** @signal */
        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        fetch_api(): Api;

        /**
         * @param cancellable 
         */
        fetch_api_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Api>;

        /**
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_api_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_api_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Api> | void);

        /**
         * @param result async method result
         * @returns an {@link GoVirt.Api} instance to interact with oVirt/RHEV REST API.
         */
        fetch_api_finish(result: Gio.AsyncResult): Api;

        fetch_ca_certificate(): boolean;

        /**
         * @param cancellable 
         */
        fetch_ca_certificate_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Uint8Array>;

        /**
         * @param cancellable 
         * @param callback 
         */
        fetch_ca_certificate_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback 
         */
        fetch_ca_certificate_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Uint8Array> | void);

        /**
         * @param result 
         */
        fetch_ca_certificate_finish(result: Gio.AsyncResult): Uint8Array;

        fetch_vms(): boolean;

        /**
         * @param cancellable 
         */
        fetch_vms_async(cancellable: (Gio.Cancellable | null)): globalThis.Promise<Vm[]>;

        /**
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_vms_async(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param cancellable 
         * @param callback completion callback
         */
        fetch_vms_async(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Vm[]> | void);

        /**
         * @param result async method result
         * @returns the list of {@link GoVirt.Vm} associated with {@link GoVirt.Proxy}. The returned list should be freed with `g_list_free()`, and can become invalid any time a {@link GoVirt.Proxy} call completes.
         */
        fetch_vms_finish(result: Gio.AsyncResult): Vm[];

        /**
         * Gets the api entry point to access remote oVirt resources and collections.
         * This method does not initiate any network activity, the remote API entry point
         * must have been fetched with `ovirt_proxy_fetch_api()` or
         * `ovirt_proxy_fetch_api_async()` before calling this function.
         * @returns an {@link GoVirt.Api} instance used to interact with oVirt REST API.
         */
        get_api(): Api;

        /**
         * Gets the list of remote VMs from the proxy object.
         * This method does not initiate any network activity, the remote VM list
         * must have been fetched with `ovirt_proxy_fetch_vms()` or
         * `ovirt_proxy_fetch_vms_async()` before calling this function.
         * @returns the list of {@link GoVirt.Vm} associated with {@link GoVirt.Proxy}. The returned list should be freed with `g_list_free()`, and can become invalid any time a {@link GoVirt.Proxy} call completes.
         */
        get_vms(): Vm[];

        /**
         * Looks up a virtual machine whose name is `name`. If it cannot be found,
         * NULL is returned. This method does not initiate any network activity,
         * the remote VM list must have been fetched with `ovirt_proxy_fetch_vms()`
         * or `ovirt_proxy_fetch_vms_async()` before calling this function.
         * @param vm_name name of the virtual machine to lookup
         * @returns a {@link GoVirt.Vm} whose name is `name` or NULL
         */
        lookup_vm(vm_name: string): Vm;
    }


    namespace Resource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            description: string;
            guid: string;
            href: string;
            name: string;
            xml_node: Rest.XmlNode;
            xmlNode: Rest.XmlNode;
        }
    }

    /**
     * @gir-type Class
     */
    class Resource extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Resource>;

        // Properties
        /**
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * @default null
         */
        get guid(): string;
        set guid(val: string);

        /**
         * @default null
         */
        get href(): string;
        set href(val: string);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @construct-only
         */
        set xml_node(val: Rest.XmlNode);

        /**
         * @construct-only
         */
        set xmlNode(val: Rest.XmlNode);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Resource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Resource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Resource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Resource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Resource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Resource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param node 
         * @virtual
         */
        vfunc_init_from_xml(node: Rest.XmlNode): boolean;

        /**
         * @virtual
         */
        vfunc_to_xml(): string;

        // Methods
        /**
         * @param proxy an {@link GoVirt.Proxy}.
         * @returns TRUE if the call was successful, FALSE otherwise. Sends an HTTP DELETE request to `resource`. The calling thread is blocked until this request is processed, see `ovirt_resource_delete_async()` for the asynchronous version of this method.
         */
        ["delete"](proxy: Proxy): boolean;

        /**
         * Asynchronously send an HTTP DELETE request to `resource`.
         * 
         * When the call is complete, `callback` will be invoked. You can then call
         * `ovirt_resource_delete_finish()` to get the result of the call.
         * @param proxy an {@link GoVirt.Proxy}.
         * @param cancellable a {@link Gio.Cancellable} or NULL.
         */
        delete_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Asynchronously send an HTTP DELETE request to `resource`.
         * 
         * When the call is complete, `callback` will be invoked. You can then call
         * `ovirt_resource_delete_finish()` to get the result of the call.
         * @param proxy an {@link GoVirt.Proxy}.
         * @param cancellable a {@link Gio.Cancellable} or NULL.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the call completes, or NULL if you don't care about the result of the method invocation.
         */
        delete_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Asynchronously send an HTTP DELETE request to `resource`.
         * 
         * When the call is complete, `callback` will be invoked. You can then call
         * `ovirt_resource_delete_finish()` to get the result of the call.
         * @param proxy an {@link GoVirt.Proxy}.
         * @param cancellable a {@link Gio.Cancellable} or NULL.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the call completes, or NULL if you don't care about the result of the method invocation.
         */
        delete_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result a {@link Gio.AsyncResult}.
         * @returns TRUE if the call was successful, FALSE otherwise. Finishes an asynchronous HTTP DELETE request on `resource`.
         */
        delete_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param sub_collection 
         */
        get_sub_collection(sub_collection: string): string;

        /**
         * @param proxy 
         */
        refresh(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        refresh_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param proxy 
         */
        update(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        update_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        update_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        update_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        update_finish(result: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace StorageDomain {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::available": (pspec: GObject.ParamSpec) => void;
            "notify::committed": (pspec: GObject.ParamSpec) => void;
            "notify::data-center-href": (pspec: GObject.ParamSpec) => void;
            "notify::data-center-id": (pspec: GObject.ParamSpec) => void;
            "notify::data-center-ids": (pspec: GObject.ParamSpec) => void;
            "notify::master": (pspec: GObject.ParamSpec) => void;
            "notify::used": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            available: (bigint | number);
            committed: (bigint | number);
            data_center_href: string;
            dataCenterHref: string;
            data_center_id: string;
            dataCenterId: string;
            data_center_ids: string[];
            dataCenterIds: string[];
            master: boolean;
            used: (bigint | number);
        }
    }

    /**
     * @gir-type Class
     */
    class StorageDomain extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<StorageDomain>;

        // Properties
        /**
         * @default 0
         */
        get available(): number;
        set available(val: (bigint | number));

        /**
         * @default 0
         */
        get committed(): number;
        set committed(val: (bigint | number));

        /**
         * @default null
         */
        get data_center_href(): string;
        set data_center_href(val: string);

        /**
         * @default null
         */
        get dataCenterHref(): string;
        set dataCenterHref(val: string);

        /**
         * @default null
         */
        get data_center_id(): string;
        set data_center_id(val: string);

        /**
         * @default null
         */
        get dataCenterId(): string;
        set dataCenterId(val: string);

        get data_center_ids(): string[];
        set data_center_ids(val: string[]);

        get dataCenterIds(): string[];
        set dataCenterIds(val: string[]);

        /**
         * @default false
         */
        get master(): boolean;
        set master(val: boolean);

        /**
         * @default 0
         */
        get used(): number;
        set used(val: (bigint | number));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageDomain.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StorageDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): StorageDomain;

        // Signals
        /** @signal */
        connect<K extends keyof StorageDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageDomain.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StorageDomain.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StorageDomain.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StorageDomain.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StorageDomain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote disks from a
         * storage domain object.  This method does not initiate any network
         * activity, the remote file list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of disks associated with `domain`.
         */
        get_disks(): Collection;

        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote files from a
         * storage domain object.  This method does not initiate any network
         * activity, the remote file list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of files associated with `domain`.
         */
        get_files(): Collection;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace Vm {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::cluster-href": (pspec: GObject.ParamSpec) => void;
            "notify::cluster-id": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::host-href": (pspec: GObject.ParamSpec) => void;
            "notify::host-id": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            cluster_href: string;
            clusterHref: string;
            cluster_id: string;
            clusterId: string;
            display: VmDisplay;
            host_href: string;
            hostHref: string;
            host_id: string;
            hostId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Vm extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<Vm>;

        // Properties
        /**
         * @default null
         */
        get cluster_href(): string;
        set cluster_href(val: string);

        /**
         * @default null
         */
        get clusterHref(): string;
        set clusterHref(val: string);

        /**
         * @default null
         */
        get cluster_id(): string;
        set cluster_id(val: string);

        /**
         * @default null
         */
        get clusterId(): string;
        set clusterId(val: string);

        get display(): VmDisplay;
        set display(val: VmDisplay);

        /**
         * @default null
         */
        get host_href(): string;
        set host_href(val: string);

        /**
         * @default null
         */
        get hostHref(): string;
        set hostHref(val: string);

        /**
         * @default null
         */
        get host_id(): string;
        set host_id(val: string);

        /**
         * @default null
         */
        get hostId(): string;
        set hostId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Vm.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Vm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Vm;

        // Signals
        /** @signal */
        connect<K extends keyof Vm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Vm.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Vm.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Vm.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Vm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets a {@link GoVirt.Collection} representing the list of remote cdroms from a
         * virtual machine object.  This method does not initiate any network
         * activity, the remote cdrom list must be then be fetched using
         * `ovirt_collection_fetch()` or `ovirt_collection_fetch_async()`.
         * @returns a {@link GoVirt.Collection} representing the list of cdroms associated with `vm`.
         */
        get_cdroms(): Collection;

        /**
         * Gets a {@link GoVirt.Cluster} representing the cluster the virtual machine belongs
         * to. This method does not initiate any network activity, the remote host must
         * be then be fetched using `ovirt_resource_refresh()` or
         * `ovirt_resource_refresh_async()`.
         * @returns a {@link GoVirt.Cluster} representing cluster the `vm` belongs to.
         */
        get_cluster(): Cluster;

        /**
         * Gets a {@link GoVirt.Host} representing the host the virtual machine belongs to.
         * This method does not initiate any network activity, the remote host must be
         * then be fetched using `ovirt_resource_refresh()` or
         * `ovirt_resource_refresh_async()`.
         * @returns a {@link GoVirt.Host} representing host the `vm` belongs to.
         */
        get_host(): Host;

        /**
         * @param proxy 
         */
        get_ticket(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        get_ticket_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        get_ticket_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        get_ticket_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        get_ticket_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        refresh_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        refresh_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param proxy 
         */
        start(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        start_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        start_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        start_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        start_finish(result: Gio.AsyncResult): boolean;

        /**
         * @param proxy 
         */
        stop(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        stop_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        stop_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        stop_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        stop_finish(result: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    namespace VmDisplay {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::allow-override": (pspec: GObject.ParamSpec) => void;
            "notify::ca-cert": (pspec: GObject.ParamSpec) => void;
            "notify::expiry": (pspec: GObject.ParamSpec) => void;
            "notify::host-subject": (pspec: GObject.ParamSpec) => void;
            "notify::monitor-count": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::proxy-url": (pspec: GObject.ParamSpec) => void;
            "notify::secure-port": (pspec: GObject.ParamSpec) => void;
            "notify::smartcard": (pspec: GObject.ParamSpec) => void;
            "notify::ticket": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            address: string;
            allow_override: boolean;
            allowOverride: boolean;
            ca_cert: (Uint8Array | string);
            caCert: (Uint8Array | string);
            expiry: number;
            host_subject: string;
            hostSubject: string;
            monitor_count: number;
            monitorCount: number;
            port: number;
            proxy_url: string;
            proxyUrl: string;
            secure_port: number;
            securePort: number;
            smartcard: boolean;
            ticket: string;
        }
    }

    /**
     * @gir-type Class
     */
    class VmDisplay extends GObject.Object {
        static $gtype: GObject.GType<VmDisplay>;

        // Properties
        /**
         * @default null
         */
        get address(): string;
        set address(val: string);

        /**
         * @default false
         */
        get allow_override(): boolean;
        set allow_override(val: boolean);

        /**
         * @default false
         */
        get allowOverride(): boolean;
        set allowOverride(val: boolean);

        get ca_cert(): Uint8Array;
        set ca_cert(val: (Uint8Array | string));

        get caCert(): Uint8Array;
        set caCert(val: (Uint8Array | string));

        /**
         * @default 0
         */
        get expiry(): number;
        set expiry(val: number);

        /**
         * @default null
         */
        get host_subject(): string;
        set host_subject(val: string);

        /**
         * @default null
         */
        get hostSubject(): string;
        set hostSubject(val: string);

        /**
         * @default 0
         */
        get monitor_count(): number;
        set monitor_count(val: number);

        /**
         * @default 0
         */
        get monitorCount(): number;
        set monitorCount(val: number);

        /**
         * @default 0
         */
        get port(): number;
        set port(val: number);

        /**
         * @default null
         */
        get proxy_url(): string;
        set proxy_url(val: string);

        /**
         * @default null
         */
        get proxyUrl(): string;
        set proxyUrl(val: string);

        /**
         * @default 0
         */
        get secure_port(): number;
        set secure_port(val: number);

        /**
         * @default 0
         */
        get securePort(): number;
        set securePort(val: number);

        /**
         * @default false
         */
        get smartcard(): boolean;
        set smartcard(val: boolean);

        /**
         * @default null
         */
        get ticket(): string;
        set ticket(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VmDisplay.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VmDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): VmDisplay;

        static new_from_xml(node: Rest.XmlNode): VmDisplay;

        // Signals
        /** @signal */
        connect<K extends keyof VmDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VmDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VmDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VmDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VmDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace VmPool {
        // Signal signatures
        interface SignalSignatures extends Resource.SignalSignatures {
            "notify::max-user-vms": (pspec: GObject.ParamSpec) => void;
            "notify::prestarted-vms": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::guid": (pspec: GObject.ParamSpec) => void;
            "notify::href": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::xml-node": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Resource.ConstructorProps, Gio.Initable.ConstructorProps {
            max_user_vms: number;
            maxUserVms: number;
            prestarted_vms: number;
            prestartedVms: number;
            size: number;
        }
    }

    /**
     * @gir-type Class
     */
    class VmPool extends Resource implements Gio.Initable {
        static $gtype: GObject.GType<VmPool>;

        // Properties
        /**
         * @default 0
         */
        get max_user_vms(): number;
        set max_user_vms(val: number);

        /**
         * @default 0
         */
        get maxUserVms(): number;
        set maxUserVms(val: number);

        /**
         * @default 0
         */
        get prestarted_vms(): number;
        set prestarted_vms(val: number);

        /**
         * @default 0
         */
        get prestartedVms(): number;
        set prestartedVms(val: number);

        /**
         * @default 0
         */
        get size(): number;
        set size(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VmPool.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VmPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): VmPool;

        // Signals
        /** @signal */
        connect<K extends keyof VmPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VmPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VmPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VmPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VmPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VmPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param proxy 
         */
        allocate_vm(proxy: Proxy): boolean;

        /**
         * @param proxy 
         * @param cancellable 
         */
        allocate_vm_async(proxy: Proxy, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        allocate_vm_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param proxy 
         * @param cancellable 
         * @param callback 
         */
        allocate_vm_async(proxy: Proxy, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param result 
         */
        allocate_vm_finish(result: Gio.AsyncResult): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type ApiClass = typeof Api;

    /**
     * @gir-type Struct
     */
    abstract class ApiPrivate {
        static $gtype: GObject.GType<ApiPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CdromClass = typeof Cdrom;

    /**
     * @gir-type Struct
     */
    abstract class CdromPrivate {
        static $gtype: GObject.GType<CdromPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClusterClass = typeof Cluster;

    /**
     * @gir-type Struct
     */
    abstract class ClusterPrivate {
        static $gtype: GObject.GType<ClusterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CollectionClass = typeof Collection;

    /**
     * @gir-type Struct
     */
    abstract class CollectionPrivate {
        static $gtype: GObject.GType<CollectionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DataCenterClass = typeof DataCenter;

    /**
     * @gir-type Struct
     */
    abstract class DataCenterPrivate {
        static $gtype: GObject.GType<DataCenterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DiskClass = typeof Disk;

    /**
     * @gir-type Struct
     */
    abstract class DiskPrivate {
        static $gtype: GObject.GType<DiskPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type HostClass = typeof Host;

    /**
     * @gir-type Struct
     */
    abstract class HostPrivate {
        static $gtype: GObject.GType<HostPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProxyClass = typeof Proxy;

    /**
     * @gir-type Struct
     */
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ResourceClass = typeof Resource;

    /**
     * @gir-type Struct
     */
    abstract class ResourcePrivate {
        static $gtype: GObject.GType<ResourcePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StorageDomainClass = typeof StorageDomain;

    /**
     * @gir-type Struct
     */
    abstract class StorageDomainPrivate {
        static $gtype: GObject.GType<StorageDomainPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type VmClass = typeof Vm;

    /**
     * @gir-type Alias
     */
    type VmDisplayClass = typeof VmDisplay;

    /**
     * @gir-type Struct
     */
    abstract class VmDisplayPrivate {
        static $gtype: GObject.GType<VmDisplayPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type VmPoolClass = typeof VmPool;

    /**
     * @gir-type Struct
     */
    abstract class VmPoolPrivate {
        static $gtype: GObject.GType<VmPoolPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class VmPrivate {
        static $gtype: GObject.GType<VmPrivate>;
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

export default GoVirt;

// END
