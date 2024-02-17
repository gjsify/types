
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstnet-1.0-import.d.ts';
    
/**
 * GstNet-1.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Gio from '@girs/node-gio-2.0';

export namespace GstNet {

/**
 * The size of the packets sent between network clocks.
 */
const NET_TIME_PACKET_SIZE: number
/**
 * PTP clock identification that can be passed to gst_ptp_init() to
 * automatically select one based on the MAC address of interfaces
 */
const PTP_CLOCK_ID_NONE: number
const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string
const PTP_STATISTICS_NEW_DOMAIN_FOUND: string
const PTP_STATISTICS_PATH_DELAY_MEASURED: string
const PTP_STATISTICS_TIME_UPDATED: string
/**
 * Attaches `addr` as metadata in a #GstNetAddressMeta to `buffer`.
 * @param buffer a #GstBuffer
 * @param addr a `GSocketAddress` to connect to `buffer`
 * @returns a #GstNetAddressMeta connected to @buffer
 */
function bufferAddNetAddressMeta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta
/**
 * Attaches `message` as metadata in a #GstNetControlMessageMeta to `buffer`.
 * @param buffer a #GstBuffer
 * @param message a `GSocketControlMessage` to attach to `buffer`
 * @returns a #GstNetControlMessageMeta connected to @buffer
 */
function bufferAddNetControlMessageMeta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta
/**
 * Find the #GstNetAddressMeta on `buffer`.
 * @param buffer a #GstBuffer
 * @returns the #GstNetAddressMeta or %NULL when there is no such metadata on @buffer.
 */
function bufferGetNetAddressMeta(buffer: Gst.Buffer): NetAddressMeta | null
function netAddressMetaApiGetType(): GObject.GType
function netAddressMetaGetInfo(): Gst.MetaInfo
function netControlMessageMetaApiGetType(): GObject.GType
function netControlMessageMetaGetInfo(): Gst.MetaInfo
/**
 * Receives a #GstNetTimePacket over a socket. Handles interrupted system
 * calls, but otherwise returns NULL on error.
 * @param socket socket to receive the time packet on
 * @returns a new #GstNetTimePacket, or NULL on error. Free    with gst_net_time_packet_free() when done.
 */
function netTimePacketReceive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* srcAddress */ Gio.SocketAddress ]
/**
 * Configures IP_TOS value of socket, i.e. sets QoS DSCP.
 * @param socket Socket to configure
 * @param qosDscp QoS DSCP value
 * @returns TRUE if successful, FALSE in case an error occurred.
 */
function netUtilsSetSocketTos(socket: Gio.Socket, qosDscp: number): boolean
/**
 * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If there
 * are any remaining GstPtpClock instances, they won't be further synchronized
 * to the PTP network clock.
 */
function ptpDeinit(): void
/**
 * Initialize the GStreamer PTP subsystem and create a PTP ordinary clock in
 * slave-only mode for all domains on the given `interfaces` with the
 * given `clock_id`.
 * 
 * If `clock_id` is %GST_PTP_CLOCK_ID_NONE, a clock id is automatically
 * generated from the MAC address of the first network interface.
 * 
 * This function is automatically called by gst_ptp_clock_new() with default
 * parameters if it wasn't called before.
 * @param clockId PTP clock id of this process' clock or %GST_PTP_CLOCK_ID_NONE
 * @param interfaces network interfaces to run the clock on
 * @returns %TRUE if the GStreamer PTP clock subsystem could be initialized.
 */
function ptpInit(clockId: number, interfaces: string[] | null): boolean
/**
 * Check if the GStreamer PTP clock subsystem is initialized.
 * @returns %TRUE if the GStreamer PTP clock subsystem is initialized.
 */
function ptpIsInitialized(): boolean
/**
 * Check if PTP clocks are generally supported on this system, and if previous
 * initializations did not fail.
 * @returns %TRUE if PTP clocks are generally supported on this system, and previous initializations did not fail.
 */
function ptpIsSupported(): boolean
/**
 * Installs a new statistics callback for gathering PTP statistics. See
 * GstPtpStatisticsCallback for a list of statistics that are provided.
 * @param callback GstPtpStatisticsCallback to call
 * @returns Id for the callback that can be passed to gst_ptp_statistics_callback_remove()
 */
function ptpStatisticsCallbackAdd(callback: PtpStatisticsCallback): number
/**
 * Removes a PTP statistics callback that was previously added with
 * gst_ptp_statistics_callback_add().
 * @param id Callback id to remove
 */
function ptpStatisticsCallbackRemove(id: number): void
/**
 * The statistics can be the following structures:
 * 
 * GST_PTP_STATISTICS_NEW_DOMAIN_FOUND:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "clock"                 GST_TYPE_CLOCK       The internal clock that is slaved to the
 *                                              PTP domain
 * 
 * GST_PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "master-clock-id"       G_TYPE_UINT64        PTP clock identifier of the selected master
 *                                              clock
 * "master-clock-port"     G_TYPE_UINT          PTP port number of the selected master clock
 * "grandmaster-clock-id"  G_TYPE_UINT64        PTP clock identifier of the grandmaster clock
 * 
 * GST_PTP_STATISTICS_PATH_DELAY_MEASURED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "mean-path-delay-avg"   GST_TYPE_CLOCK_TIME  Average mean path delay
 * "mean-path-delay"       GST_TYPE_CLOCK_TIME  Latest mean path delay
 * "delay-request-delay"   GST_TYPE_CLOCK_TIME  Delay of DELAY_REQ / DELAY_RESP messages
 * 
 * GST_PTP_STATISTICS_TIME_UPDATED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "mean-path-delay-avg"   GST_TYPE_CLOCK_TIME  Average mean path delay
 * "local-time"            GST_TYPE_CLOCK_TIME  Local time that corresponds to ptp-time
 * "ptp-time"              GST_TYPE_CLOCK_TIME  Newly measured PTP time at local-time
 * "estimated-ptp-time"    GST_TYPE_CLOCK_TIME  Estimated PTP time based on previous measurements
 * "discontinuity"         G_TYPE_INT64         Difference between estimated and measured PTP time
 * "synced"                G_TYPE_BOOLEAN       Currently synced to the remote clock
 * "r-squared"             G_TYPE_DOUBLE        R² of clock estimation regression
 * "internal-time"         GST_TYPE_CLOCK_TIME  Internal time clock parameter
 * "external-time"         GST_TYPE_CLOCK_TIME  External time clock parameter
 * "rate-num"              G_TYPE_UINT64        Internal/external rate numerator
 * "rate-den"              G_TYPE_UINT64        Internal/external rate denominator
 * "rate"                  G_TYPE_DOUBLE        Internal/external rate
 * 
 * If %FALSE is returned, the callback is removed and never called again.
 * @callback 
 * @param domain PTP domain identifier
 * @param stats New statistics
 */
interface PtpStatisticsCallback {
    (domain: number, stats: Gst.Structure): boolean
}
module NetClientClock {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {

        // Own constructor properties of GstNet-1.0.GstNet.NetClientClock

        address?: string | null
        base_time?: number | null
        bus?: Gst.Bus | null
        minimum_update_interval?: number | null
        port?: number | null
        qos_dscp?: number | null
        round_trip_limit?: number | null
    }

}

interface NetClientClock {

    // Own properties of GstNet-1.0.GstNet.NetClientClock

    address: string | null
    readonly baseTime: number
    bus: Gst.Bus
    readonly internalClock: Gst.Clock
    minimumUpdateInterval: number
    port: number
    qosDscp: number
    roundTripLimit: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.NetClientClock

    clock: any

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstNet-1.0.GstNet.NetClientClock

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::base-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-time", ...args: any[]): void
    connect(sigName: "notify::bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minimum-update-interval", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
    connect(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::round-trip-limit", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstNetClientClock implements a custom #GstClock that synchronizes its time
 * to a remote time provider such as #GstNetTimeProvider. #GstNtpClock
 * implements a #GstClock that synchronizes its time to a remote NTPv4 server.
 * 
 * A new clock is created with gst_net_client_clock_new() or
 * gst_ntp_clock_new(), which takes the address and port of the remote time
 * provider along with a name and an initial time.
 * 
 * This clock will poll the time provider and will update its calibration
 * parameters based on the local and remote observations.
 * 
 * The "round-trip" property limits the maximum round trip packets can take.
 * 
 * Various parameters of the clock can be configured with the parent #GstClock
 * "timeout", "window-size" and "window-threshold" object properties.
 * 
 * A #GstNetClientClock and #GstNtpClock is typically set on a #GstPipeline with
 * gst_pipeline_use_clock().
 * 
 * If you set a #GstBus on the clock via the "bus" object property, it will
 * send `GST_MESSAGE_ELEMENT` messages with an attached #GstStructure containing
 * statistics about clock accuracy and network traffic.
 * @class 
 */
class NetClientClock extends Gst.SystemClock {

    // Own properties of GstNet-1.0.GstNet.NetClientClock

    static name: string

    // Constructors of GstNet-1.0.GstNet.NetClientClock

    constructor(config?: NetClientClock.ConstructorProperties) 
    /**
     * Create a new #GstNetClientClock that will report the time
     * provided by the #GstNetTimeProvider on `remote_address` and
     * `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remoteAddress the address or hostname of the remote clock provider
     * @param remotePort the port of the remote clock provider
     * @param baseTime initial time of the clock
     * @returns a new #GstClock that receives a time from the remote clock.
     */
    constructor(name: string | null, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime) 
    /**
     * Create a new #GstNetClientClock that will report the time
     * provided by the #GstNetTimeProvider on `remote_address` and
     * `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remoteAddress the address or hostname of the remote clock provider
     * @param remotePort the port of the remote clock provider
     * @param baseTime initial time of the clock
     * @returns a new #GstClock that receives a time from the remote clock.
     */
    static new(name: string | null, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime): NetClientClock
    _init(config?: NetClientClock.ConstructorProperties): void
}

module NetTimeProvider {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Gst.Object.ConstructorProperties {

        // Own constructor properties of GstNet-1.0.GstNet.NetTimeProvider

        active?: boolean | null
        address?: string | null
        clock?: Gst.Clock | null
        port?: number | null
        qos_dscp?: number | null
    }

}

interface NetTimeProvider extends Gio.Initable {

    // Own properties of GstNet-1.0.GstNet.NetTimeProvider

    active: boolean
    readonly address: string | null
    readonly clock: Gst.Clock
    readonly port: number
    qosDscp: number
    __gtype__: number

    // Own fields of GstNet-1.0.GstNet.NetTimeProvider

    parent: Gst.Object

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstNet-1.0.GstNet.NetTimeProvider

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
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

/**
 * This object exposes the time of a #GstClock on the network.
 * 
 * A #GstNetTimeProvider is created with gst_net_time_provider_new() which
 * takes a #GstClock, an address and a port number as arguments.
 * 
 * After creating the object, a client clock such as #GstNetClientClock can
 * query the exposed clock over the network for its values.
 * 
 * The #GstNetTimeProvider typically wraps the clock used by a #GstPipeline.
 * @class 
 */
class NetTimeProvider extends Gst.Object {

    // Own properties of GstNet-1.0.GstNet.NetTimeProvider

    static name: string

    // Constructors of GstNet-1.0.GstNet.NetTimeProvider

    constructor(config?: NetTimeProvider.ConstructorProperties) 
    /**
     * Allows network clients to get the current time of `clock`.
     * @constructor 
     * @param clock a #GstClock to export over the network
     * @param address an address to bind on as a dotted quad           (xxx.xxx.xxx.xxx), IPv6 address, or NULL to bind to all addresses
     * @param port a port to bind on, or 0 to let the kernel choose
     * @returns the new #GstNetTimeProvider, or NULL on error
     */
    constructor(clock: Gst.Clock, address: string | null, port: number) 
    /**
     * Allows network clients to get the current time of `clock`.
     * @constructor 
     * @param clock a #GstClock to export over the network
     * @param address an address to bind on as a dotted quad           (xxx.xxx.xxx.xxx), IPv6 address, or NULL to bind to all addresses
     * @param port a port to bind on, or 0 to let the kernel choose
     * @returns the new #GstNetTimeProvider, or NULL on error
     */
    static new(clock: Gst.Clock, address: string | null, port: number): NetTimeProvider
    _init(config?: NetTimeProvider.ConstructorProperties): void
}

module NtpClock {

    // Constructor properties interface

    interface ConstructorProperties extends NetClientClock.ConstructorProperties {
    }

}

interface NtpClock {

    // Own properties of GstNet-1.0.GstNet.NtpClock

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.NtpClock

    clock: any

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstNet-1.0.GstNet.NtpClock

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::base-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-time", ...args: any[]): void
    connect(sigName: "notify::bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minimum-update-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minimum-update-interval", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos-dscp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos-dscp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
    connect(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::round-trip-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::round-trip-limit", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NtpClock extends NetClientClock {

    // Own properties of GstNet-1.0.GstNet.NtpClock

    static name: string

    // Constructors of GstNet-1.0.GstNet.NtpClock

    constructor(config?: NtpClock.ConstructorProperties) 
    /**
     * Create a new #GstNtpClock that will report the time provided by
     * the NTPv4 server on `remote_address` and `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remoteAddress the address or hostname of the remote clock provider
     * @param remotePort the port of the remote clock provider
     * @param baseTime initial time of the clock
     * @returns a new #GstClock that receives a time from the remote clock.
     */
    constructor(name: string | null, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime) 
    /**
     * Create a new #GstNtpClock that will report the time provided by
     * the NTPv4 server on `remote_address` and `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remoteAddress the address or hostname of the remote clock provider
     * @param remotePort the port of the remote clock provider
     * @param baseTime initial time of the clock
     * @returns a new #GstClock that receives a time from the remote clock.
     */
    static new(name: string | null, remoteAddress: string, remotePort: number, baseTime: Gst.ClockTime): NtpClock
    _init(config?: NtpClock.ConstructorProperties): void
}

module PtpClock {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.SystemClock.ConstructorProperties {

        // Own constructor properties of GstNet-1.0.GstNet.PtpClock

        domain?: number | null
    }

}

interface PtpClock {

    // Own properties of GstNet-1.0.GstNet.PtpClock

    readonly domain: number
    readonly grandmasterClockId: number
    readonly internalClock: Gst.Clock
    readonly masterClockId: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.PtpClock

    clock: any

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstNet-1.0.GstNet.PtpClock

    connect(sigName: "notify::domain", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::grandmaster-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::grandmaster-clock-id", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::internal-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::internal-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::master-clock-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::master-clock-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::master-clock-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::master-clock-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::master-clock-id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-threshold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-threshold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * GstPtpClock implements a PTP (IEEE1588:2008) ordinary clock in slave-only
 * mode, that allows a GStreamer pipeline to synchronize to a PTP network
 * clock in some specific domain.
 * 
 * The PTP subsystem can be initialized with gst_ptp_init(), which then starts
 * a helper process to do the actual communication via the PTP ports. This is
 * required as PTP listens on ports < 1024 and thus requires special
 * privileges. Once this helper process is started, the main process will
 * synchronize to all PTP domains that are detected on the selected
 * interfaces.
 * 
 * gst_ptp_clock_new() then allows to create a GstClock that provides the PTP
 * time from a master clock inside a specific PTP domain. This clock will only
 * return valid timestamps once the timestamps in the PTP domain are known. To
 * check this, you can use gst_clock_wait_for_sync(), the GstClock::synced
 * signal and gst_clock_is_synced().
 * 
 * To gather statistics about the PTP clock synchronization,
 * gst_ptp_statistics_callback_add() can be used. This gives the application
 * the possibility to collect all kinds of statistics from the clock
 * synchronization.
 * @class 
 */
class PtpClock extends Gst.SystemClock {

    // Own properties of GstNet-1.0.GstNet.PtpClock

    static name: string

    // Constructors of GstNet-1.0.GstNet.PtpClock

    constructor(config?: PtpClock.ConstructorProperties) 
    /**
     * Creates a new PTP clock instance that exports the PTP time of the master
     * clock in `domain`. This clock can be slaved to other clocks as needed.
     * 
     * If gst_ptp_init() was not called before, this will call gst_ptp_init() with
     * default parameters.
     * 
     * This clock only returns valid timestamps after it received the first
     * times from the PTP master clock on the network. Once this happens the
     * GstPtpClock::internal-clock property will become non-NULL. You can
     * check this with gst_clock_wait_for_sync(), the GstClock::synced signal and
     * gst_clock_is_synced().
     * @constructor 
     * @param name Name of the clock
     * @param domain PTP domain
     * @returns A new #GstClock
     */
    constructor(name: string, domain: number) 
    /**
     * Creates a new PTP clock instance that exports the PTP time of the master
     * clock in `domain`. This clock can be slaved to other clocks as needed.
     * 
     * If gst_ptp_init() was not called before, this will call gst_ptp_init() with
     * default parameters.
     * 
     * This clock only returns valid timestamps after it received the first
     * times from the PTP master clock on the network. Once this happens the
     * GstPtpClock::internal-clock property will become non-NULL. You can
     * check this with gst_clock_wait_for_sync(), the GstClock::synced signal and
     * gst_clock_is_synced().
     * @constructor 
     * @param name Name of the clock
     * @param domain PTP domain
     * @returns A new #GstClock
     */
    static new(name: string, domain: number): PtpClock
    _init(config?: PtpClock.ConstructorProperties): void
}

interface NetAddressMeta {

    // Own fields of GstNet-1.0.GstNet.NetAddressMeta

    /**
     * the parent type
     * @field 
     */
    meta: Gst.Meta
    /**
     * a #GSocketAddress stored as metadata
     * @field 
     */
    addr: Gio.SocketAddress
}

/**
 * #GstNetAddressMeta can be used to store a network address (a #GSocketAddress)
 * in a #GstBuffer so that it network elements can track the to and from address
 * of the buffer.
 * @record 
 */
class NetAddressMeta {

    // Own properties of GstNet-1.0.GstNet.NetAddressMeta

    static name: string

    // Constructors of GstNet-1.0.GstNet.NetAddressMeta

    static getInfo(): Gst.MetaInfo
}

interface NetClientClockClass {

    // Own fields of GstNet-1.0.GstNet.NetClientClockClass

    parentClass: Gst.SystemClockClass
}

abstract class NetClientClockClass {

    // Own properties of GstNet-1.0.GstNet.NetClientClockClass

    static name: string
}

interface NetClientClockPrivate {
}

class NetClientClockPrivate {

    // Own properties of GstNet-1.0.GstNet.NetClientClockPrivate

    static name: string
}

interface NetControlMessageMeta {

    // Own fields of GstNet-1.0.GstNet.NetControlMessageMeta

    /**
     * the parent type
     * @field 
     */
    meta: Gst.Meta
    /**
     * a #GSocketControlMessage stored as metadata
     * @field 
     */
    message: Gio.SocketControlMessage
}

/**
 * #GstNetControlMessageMeta can be used to store control messages (ancillary
 * data) which was received with or is to be sent alongside the buffer data.
 * When used with socket sinks and sources which understand this meta it allows
 * sending and receiving ancillary data such as unix credentials (See
 * #GUnixCredentialsMessage) and Unix file descriptions (See #GUnixFDMessage).
 * @record 
 */
class NetControlMessageMeta {

    // Own properties of GstNet-1.0.GstNet.NetControlMessageMeta

    static name: string

    // Constructors of GstNet-1.0.GstNet.NetControlMessageMeta

    static getInfo(): Gst.MetaInfo
}

interface NetTimePacket {

    // Own fields of GstNet-1.0.GstNet.NetTimePacket

    /**
     * the local time when this packet was sent
     * @field 
     */
    localTime: Gst.ClockTime
    /**
     * the remote time observation
     * @field 
     */
    remoteTime: Gst.ClockTime

    // Owm methods of GstNet-1.0.GstNet.NetTimePacket

    /**
     * Make a copy of `packet`.
     * @returns a copy of @packet, free with gst_net_time_packet_free().
     */
    copy(): NetTimePacket
    /**
     * Free `packet`.
     */
    free(): void
    /**
     * Sends a #GstNetTimePacket over a socket.
     * 
     * MT safe.
     * @param socket socket to send the time packet on
     * @param destAddress address to send the time packet to
     * @returns TRUE if successful, FALSE in case an error occurred.
     */
    send(socket: Gio.Socket, destAddress: Gio.SocketAddress): boolean
    /**
     * Serialized a #GstNetTimePacket into a newly-allocated sequence of
     * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
     * suitable for passing to write(2) or sendto(2) for communication over the
     * network.
     * 
     * MT safe. Caller owns return value (g_free to free).
     * @returns A newly allocated sequence of #GST_NET_TIME_PACKET_SIZE bytes.
     */
    serialize(): number[]
}

/**
 * Various functions for receiving, sending an serializing #GstNetTimePacket
 * structures.
 * @record 
 */
class NetTimePacket {

    // Own properties of GstNet-1.0.GstNet.NetTimePacket

    static name: string

    // Constructors of GstNet-1.0.GstNet.NetTimePacket

    /**
     * Creates a new #GstNetTimePacket from a buffer received over the network. The
     * caller is responsible for ensuring that `buffer` is at least
     * #GST_NET_TIME_PACKET_SIZE bytes long.
     * 
     * If `buffer` is %NULL, the local and remote times will be set to
     * #GST_CLOCK_TIME_NONE.
     * 
     * MT safe. Caller owns return value (gst_net_time_packet_free to free).
     * @constructor 
     * @param buffer a buffer from which to construct the packet, or NULL
     * @returns The new #GstNetTimePacket.
     */
    constructor(buffer: number[] | null) 
    /**
     * Creates a new #GstNetTimePacket from a buffer received over the network. The
     * caller is responsible for ensuring that `buffer` is at least
     * #GST_NET_TIME_PACKET_SIZE bytes long.
     * 
     * If `buffer` is %NULL, the local and remote times will be set to
     * #GST_CLOCK_TIME_NONE.
     * 
     * MT safe. Caller owns return value (gst_net_time_packet_free to free).
     * @constructor 
     * @param buffer a buffer from which to construct the packet, or NULL
     * @returns The new #GstNetTimePacket.
     */
    static new(buffer: number[] | null): NetTimePacket
    /**
     * Receives a #GstNetTimePacket over a socket. Handles interrupted system
     * calls, but otherwise returns NULL on error.
     * @param socket socket to receive the time packet on
     * @returns a new #GstNetTimePacket, or NULL on error. Free    with gst_net_time_packet_free() when done.
     */
    static receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* srcAddress */ Gio.SocketAddress ]
}

interface NetTimeProviderClass {

    // Own fields of GstNet-1.0.GstNet.NetTimeProviderClass

    parentClass: Gst.ObjectClass
    gstReserved: any[]
}

abstract class NetTimeProviderClass {

    // Own properties of GstNet-1.0.GstNet.NetTimeProviderClass

    static name: string
}

interface NetTimeProviderPrivate {
}

class NetTimeProviderPrivate {

    // Own properties of GstNet-1.0.GstNet.NetTimeProviderPrivate

    static name: string
}

interface NtpClockClass {

    // Own fields of GstNet-1.0.GstNet.NtpClockClass

    parentClass: Gst.SystemClockClass
}

abstract class NtpClockClass {

    // Own properties of GstNet-1.0.GstNet.NtpClockClass

    static name: string
}

interface PtpClockClass {

    // Own fields of GstNet-1.0.GstNet.PtpClockClass

    /**
     * parented to #GstSystemClockClass
     * @field 
     */
    parentClass: Gst.SystemClockClass
}

/**
 * Opaque #GstPtpClockClass structure.
 * @record 
 */
abstract class PtpClockClass {

    // Own properties of GstNet-1.0.GstNet.PtpClockClass

    static name: string
}

interface PtpClockPrivate {
}

class PtpClockPrivate {

    // Own properties of GstNet-1.0.GstNet.PtpClockPrivate

    static name: string
}

}

export default GstNet;
// END