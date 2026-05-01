
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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';

export namespace GstNet {

    /**
     * GstNet-1.0
     */


    /**
     * The size of the packets sent between network clocks.
     */
    const NET_TIME_PACKET_SIZE: number;

    /**
     * PTP clock identification that can be passed to `gst_ptp_init()` to
     * automatically select one based on the MAC address of interfaces
     */
    const PTP_CLOCK_ID_NONE: number;

    const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;

    const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;

    const PTP_STATISTICS_PATH_DELAY_MEASURED: string;

    const PTP_STATISTICS_TIME_UPDATED: string;

    /**
     * Attaches `addr` as metadata in a {@link GstNet.NetAddressMeta} to `buffer`.
     * @param buffer a {@link Gst.Buffer}
     * @param addr a `GSocketAddress` to connect to `buffer`
     * @returns a {@link GstNet.NetAddressMeta} connected to `buffer`
     */
    function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;

    /**
     * Attaches `message` as metadata in a {@link GstNet.NetControlMessageMeta} to `buffer`.
     * @param buffer a {@link Gst.Buffer}
     * @param message a `GSocketControlMessage` to attach to `buffer`
     * @returns a {@link GstNet.NetControlMessageMeta} connected to `buffer`
     */
    function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta;

    /**
     * Find the {@link GstNet.NetAddressMeta} on `buffer`.
     * @param buffer a {@link Gst.Buffer}
     * @returns the {@link GstNet.NetAddressMeta} or `null` when there is no such metadata on `buffer`.
     */
    function buffer_get_net_address_meta(buffer: Gst.Buffer): (NetAddressMeta | null);

    function net_address_meta_api_get_type(): GObject.GType;

    function net_address_meta_get_info(): Gst.MetaInfo;

    function net_control_message_meta_api_get_type(): GObject.GType;

    function net_control_message_meta_get_info(): Gst.MetaInfo;

    /**
     * Receives a {@link GstNet.NetTimePacket} over a socket. Handles interrupted system
     * calls, but otherwise returns NULL on error.
     * @param socket socket to receive the time packet on
     * @returns a new {@link GstNet.NetTimePacket}, or NULL on error. Free    with `gst_net_time_packet_free()` when done.
     */
    function net_time_packet_receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];

    /**
     * Configures IP_TOS value of socket, i.e. sets QoS DSCP.
     * @param socket Socket to configure
     * @param qos_dscp QoS DSCP value
     * @returns TRUE if successful, FALSE in case an error occurred.
     * @since 1.18
     */
    function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean;

    /**
     * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If there
     * are any remaining GstPtpClock instances, they won't be further synchronized
     * to the PTP network clock.
     * @since 1.6
     */
    function ptp_deinit(): void;

    /**
     * Initialize the GStreamer PTP subsystem and create a PTP ordinary clock in
     * slave-only mode for all domains on the given `interfaces` with the
     * given `clock_id`.
     * 
     * If `clock_id` is `GST_PTP_CLOCK_ID_NONE`, a clock id is automatically
     * generated from the MAC address of the first network interface.
     * 
     * This function is automatically called by `gst_ptp_clock_new()` with default
     * parameters if it wasn't called before.
     * @param clock_id PTP clock id of this process' clock or `GST_PTP_CLOCK_ID_NONE`
     * @param interfaces network interfaces to run the clock on
     * @returns `true` if the GStreamer PTP clock subsystem could be initialized.
     * @since 1.6
     */
    function ptp_init(clock_id: (bigint | number), interfaces: (string[] | null)): boolean;

    /**
     * Check if the GStreamer PTP clock subsystem is initialized.
     * @returns `true` if the GStreamer PTP clock subsystem is initialized.
     * @since 1.6
     */
    function ptp_is_initialized(): boolean;

    /**
     * Check if PTP clocks are generally supported on this system, and if previous
     * initializations did not fail.
     * @returns `true` if PTP clocks are generally supported on this system, and previous initializations did not fail.
     * @since 1.6
     */
    function ptp_is_supported(): boolean;

    /**
     * Installs a new statistics callback for gathering PTP statistics. See
     * GstPtpStatisticsCallback for a list of statistics that are provided.
     * @param callback GstPtpStatisticsCallback to call
     * @returns Id for the callback that can be passed to `gst_ptp_statistics_callback_remove()`
     * @since 1.6
     */
    function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number;

    /**
     * Removes a PTP statistics callback that was previously added with
     * `gst_ptp_statistics_callback_add()`.
     * @param id Callback id to remove
     * @since 1.6
     */
    function ptp_statistics_callback_remove(id: (bigint | number)): void;

    /**
     * @gir-type Callback
     */
    interface PtpStatisticsCallback {
        (domain: number, stats: Gst.Structure): boolean;
    }

    namespace NetClientClock {
        // Signal signatures
        interface SignalSignatures extends Gst.SystemClock.SignalSignatures {
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::base-time": (pspec: GObject.ParamSpec) => void;
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-update-interval": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::round-trip-limit": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
            address: string;
            base_time: (bigint | number);
            baseTime: (bigint | number);
            bus: Gst.Bus;
            internal_clock: Gst.Clock;
            internalClock: Gst.Clock;
            minimum_update_interval: (bigint | number);
            minimumUpdateInterval: (bigint | number);
            port: number;
            qos_dscp: number;
            qosDscp: number;
            round_trip_limit: (bigint | number);
            roundTripLimit: (bigint | number);
        }
    }

    /**
     * {@link GstNet.NetClientClock} implements a custom {@link Gst.Clock} that synchronizes its time
     * to a remote time provider such as {@link GstNet.NetTimeProvider}. {@link GstNet.NtpClock}
     * implements a {@link Gst.Clock} that synchronizes its time to a remote NTPv4 server.
     * 
     * A new clock is created with `gst_net_client_clock_new()` or
     * `gst_ntp_clock_new()`, which takes the address and port of the remote time
     * provider along with a name and an initial time.
     * 
     * This clock will poll the time provider and will update its calibration
     * parameters based on the local and remote observations.
     * 
     * The "round-trip" property limits the maximum round trip packets can take.
     * 
     * Various parameters of the clock can be configured with the parent {@link Gst.Clock}
     * "timeout", "window-size" and "window-threshold" object properties.
     * 
     * A {@link GstNet.NetClientClock} and {@link GstNet.NtpClock} is typically set on a {@link Gst.Pipeline} with
     * `gst_pipeline_use_clock()`.
     * 
     * If you set a {@link Gst.Bus} on the clock via the "bus" object property, it will
     * send `GST_MESSAGE_ELEMENT` messages with an attached {@link Gst.Structure} containing
     * statistics about clock accuracy and network traffic.
     * @gir-type Class
     */
    class NetClientClock extends Gst.SystemClock {
        static $gtype: GObject.GType<NetClientClock>;

        // Properties
        /**
         * @default 127.0.0.1
         */
        get address(): string;
        set address(val: string);

        /**
         * @construct-only
         * @default 0
         */
        get base_time(): number;

        /**
         * @construct-only
         * @default 0
         */
        get baseTime(): number;

        get bus(): Gst.Bus;
        set bus(val: Gst.Bus);

        /**
         * @read-only
         */
        get internal_clock(): Gst.Clock;

        /**
         * @read-only
         */
        get internalClock(): Gst.Clock;

        /**
         * @default 50000000
         */
        get minimum_update_interval(): number;
        set minimum_update_interval(val: (bigint | number));

        /**
         * @default 50000000
         */
        get minimumUpdateInterval(): number;
        set minimumUpdateInterval(val: (bigint | number));

        /**
         * @default 5637
         */
        get port(): number;
        set port(val: number);

        /**
         * @default -1
         */
        get qos_dscp(): number;
        set qos_dscp(val: number);

        /**
         * @default -1
         */
        get qosDscp(): number;
        set qosDscp(val: number);

        /**
         * @default 1000000000
         */
        get round_trip_limit(): number;
        set round_trip_limit(val: (bigint | number));

        /**
         * @default 1000000000
         */
        get roundTripLimit(): number;
        set roundTripLimit(val: (bigint | number));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetClientClock.SignalSignatures;

        // Fields
        clock: Gst.SystemClock;

        // Constructors
        constructor(properties?: Partial<NetClientClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: (string | null), remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock;

        // Signals
        /** @signal */
        connect<K extends keyof NetClientClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetClientClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NetClientClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetClientClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NetClientClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetClientClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace NetTimeProvider {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::clock": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            active: boolean;
            address: string;
            clock: Gst.Clock;
            port: number;
            qos_dscp: number;
            qosDscp: number;
        }
    }

    /**
     * This object exposes the time of a {@link Gst.Clock} on the network.
     * 
     * A {@link GstNet.NetTimeProvider} is created with `gst_net_time_provider_new()` which
     * takes a {@link Gst.Clock}, an address and a port number as arguments.
     * 
     * After creating the object, a client clock such as {@link GstNet.NetClientClock} can
     * query the exposed clock over the network for its values.
     * 
     * The {@link GstNet.NetTimeProvider} typically wraps the clock used by a {@link Gst.Pipeline}.
     * @gir-type Class
     */
    class NetTimeProvider extends Gst.Object implements Gio.Initable {
        static $gtype: GObject.GType<NetTimeProvider>;

        // Properties
        /**
         * @default true
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * @construct-only
         * @default 0.0.0.0
         */
        get address(): string;

        /**
         * @construct-only
         */
        get clock(): Gst.Clock;

        /**
         * @construct-only
         * @default 5637
         */
        get port(): number;

        /**
         * @default -1
         */
        get qos_dscp(): number;
        set qos_dscp(val: number);

        /**
         * @default -1
         */
        get qosDscp(): number;
        set qosDscp(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetTimeProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<NetTimeProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](clock: Gst.Clock, address: (string | null), port: number): NetTimeProvider;

        // Signals
        /** @signal */
        connect<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetTimeProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NetTimeProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NetTimeProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NetTimeProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        /**
         * Increases the reference count of `object`.
         * 
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;

        /**
         * @param args 
         */
        // Conflicted with Gst.Object.ref
        ref(...args: never[]): any;

        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         * 
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
    }


    namespace NtpClock {
        // Signal signatures
        interface SignalSignatures extends NetClientClock.SignalSignatures {
            "notify::address": (pspec: GObject.ParamSpec) => void;
            "notify::base-time": (pspec: GObject.ParamSpec) => void;
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::minimum-update-interval": (pspec: GObject.ParamSpec) => void;
            "notify::port": (pspec: GObject.ParamSpec) => void;
            "notify::qos-dscp": (pspec: GObject.ParamSpec) => void;
            "notify::round-trip-limit": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends NetClientClock.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class NtpClock extends NetClientClock {
        static $gtype: GObject.GType<NtpClock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NtpClock.SignalSignatures;

        // Fields
        clock: Gst.SystemClock;

        // Constructors
        constructor(properties?: Partial<NtpClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: (string | null), remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock;

        // Signals
        /** @signal */
        connect<K extends keyof NtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NtpClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NtpClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NtpClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NtpClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PtpClock {
        // Signal signatures
        interface SignalSignatures extends Gst.SystemClock.SignalSignatures {
            "notify::domain": (pspec: GObject.ParamSpec) => void;
            "notify::grandmaster-clock-id": (pspec: GObject.ParamSpec) => void;
            "notify::internal-clock": (pspec: GObject.ParamSpec) => void;
            "notify::master-clock-id": (pspec: GObject.ParamSpec) => void;
            "notify::clock-type": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::window-size": (pspec: GObject.ParamSpec) => void;
            "notify::window-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.SystemClock.ConstructorProps {
            domain: number;
            grandmaster_clock_id: (bigint | number);
            grandmasterClockId: (bigint | number);
            internal_clock: Gst.Clock;
            internalClock: Gst.Clock;
            master_clock_id: (bigint | number);
            masterClockId: (bigint | number);
        }
    }

    /**
     * GstPtpClock implements a PTP (IEEE1588:2008) ordinary clock in slave-only
     * mode, that allows a GStreamer pipeline to synchronize to a PTP network
     * clock in some specific domain.
     * 
     * The PTP subsystem can be initialized with `gst_ptp_init()`, which then starts
     * a helper process to do the actual communication via the PTP ports. This is
     * required as PTP listens on ports < 1024 and thus requires special
     * privileges. Once this helper process is started, the main process will
     * synchronize to all PTP domains that are detected on the selected
     * interfaces.
     * 
     * `gst_ptp_clock_new()` then allows to create a GstClock that provides the PTP
     * time from a master clock inside a specific PTP domain. This clock will only
     * return valid timestamps once the timestamps in the PTP domain are known. To
     * check this, you can use `gst_clock_wait_for_sync()`, the GstClock::synced
     * signal and `gst_clock_is_synced()`.
     * 
     * To gather statistics about the PTP clock synchronization,
     * `gst_ptp_statistics_callback_add()` can be used. This gives the application
     * the possibility to collect all kinds of statistics from the clock
     * synchronization.
     * @gir-type Class
     * @since 1.6
     */
    class PtpClock extends Gst.SystemClock {
        static $gtype: GObject.GType<PtpClock>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        get domain(): number;

        /**
         * @read-only
         * @default 0
         */
        get grandmaster_clock_id(): number;

        /**
         * @read-only
         * @default 0
         */
        get grandmasterClockId(): number;

        /**
         * @read-only
         */
        get internal_clock(): Gst.Clock;

        /**
         * @read-only
         */
        get internalClock(): Gst.Clock;

        /**
         * @read-only
         * @default 0
         */
        get master_clock_id(): number;

        /**
         * @read-only
         * @default 0
         */
        get masterClockId(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PtpClock.SignalSignatures;

        // Fields
        clock: Gst.SystemClock;

        // Constructors
        constructor(properties?: Partial<PtpClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, domain: number): PtpClock;

        // Signals
        /** @signal */
        connect<K extends keyof PtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PtpClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PtpClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PtpClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PtpClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PtpClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * {@link GstNet.NetAddressMeta} can be used to store a network address (a {@link Gio.SocketAddress})
     * in a {@link Gst.Buffer} so that it network elements can track the to and from address
     * of the buffer.
     * @gir-type Struct
     */
    class NetAddressMeta {
        static $gtype: GObject.GType<NetAddressMeta>;

        // Fields
        addr: Gio.SocketAddress;

        // Static methods
        static get_info(): Gst.MetaInfo;
    }


    /**
     * @gir-type Alias
     */
    type NetClientClockClass = typeof NetClientClock;

    /**
     * @gir-type Struct
     */
    abstract class NetClientClockPrivate {
        static $gtype: GObject.GType<NetClientClockPrivate>;
    }


    /**
     * {@link GstNet.NetControlMessageMeta} can be used to store control messages (ancillary
     * data) which was received with or is to be sent alongside the buffer data.
     * When used with socket sinks and sources which understand this meta it allows
     * sending and receiving ancillary data such as unix credentials (See
     * {@link Gio.UnixCredentialsMessage}) and Unix file descriptions (See `GUnixFDMessage`).
     * @gir-type Struct
     */
    class NetControlMessageMeta {
        static $gtype: GObject.GType<NetControlMessageMeta>;

        // Fields
        message: Gio.SocketControlMessage;

        // Static methods
        static get_info(): Gst.MetaInfo;
    }


    /**
     * Various functions for receiving, sending an serializing {@link GstNet.NetTimePacket}
     * structures.
     * @gir-type Struct
     */
    class NetTimePacket {
        static $gtype: GObject.GType<NetTimePacket>;

        // Fields
        local_time: Gst.ClockTime;

        remote_time: Gst.ClockTime;

        // Constructors
        constructor(buffer: (Uint8Array | null));

        static ["new"](buffer: (Uint8Array | null)): NetTimePacket;

        // Static methods
        /**
         * Receives a {@link GstNet.NetTimePacket} over a socket. Handles interrupted system
         * calls, but otherwise returns NULL on error.
         * @param socket socket to receive the time packet on
         */
        static receive(socket: Gio.Socket): [NetTimePacket, Gio.SocketAddress | null];

        // Methods
        /**
         * Make a copy of `packet`.
         * @returns a copy of `packet`, free with `gst_net_time_packet_free()`.
         */
        copy(): NetTimePacket;

        /**
         * Free `packet`.
         */
        free(): void;

        /**
         * Sends a {@link GstNet.NetTimePacket} over a socket.
         * 
         * MT safe.
         * @param socket socket to send the time packet on
         * @param dest_address address to send the time packet to
         * @returns TRUE if successful, FALSE in case an error occurred.
         */
        send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;

        /**
         * Serialized a {@link GstNet.NetTimePacket} into a newly-allocated sequence of
         * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
         * suitable for passing to write(2) or sendto(2) for communication over the
         * network.
         * 
         * MT safe. Caller owns return value (g_free to free).
         * @returns A newly allocated sequence of #GST_NET_TIME_PACKET_SIZE bytes.
         */
        serialize(): Uint8Array;
    }


    /**
     * @gir-type Alias
     */
    type NetTimeProviderClass = typeof NetTimeProvider;

    /**
     * @gir-type Struct
     */
    abstract class NetTimeProviderPrivate {
        static $gtype: GObject.GType<NetTimeProviderPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NtpClockClass = typeof NtpClock;

    /**
     * @gir-type Alias
     */
    type PtpClockClass = typeof PtpClock;

    /**
     * @gir-type Struct
     */
    abstract class PtpClockPrivate {
        static $gtype: GObject.GType<PtpClockPrivate>;
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

export default GstNet;

// END
