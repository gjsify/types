// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstNet-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type Gio from './Gio-2.0';

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
 */
function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta
/**
 * Attaches `message` as metadata in a #GstNetControlMessageMeta to `buffer`.
 * @param buffer a #GstBuffer
 * @param message a `GSocketControlMessage` to attach to `buffer`
 */
function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta
/**
 * Find the #GstNetAddressMeta on `buffer`.
 * @param buffer a #GstBuffer
 */
function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta
function net_address_meta_api_get_type(): GObject.GType
function net_address_meta_get_info(): Gst.MetaInfo
function net_control_message_meta_api_get_type(): GObject.GType
function net_control_message_meta_get_info(): Gst.MetaInfo
/**
 * Receives a #GstNetTimePacket over a socket. Handles interrupted system
 * calls, but otherwise returns NULL on error.
 * @param socket socket to receive the time packet on
 */
function net_time_packet_receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
/**
 * Configures IP_TOS value of socket, i.e. sets QoS DSCP.
 * @param socket Socket to configure
 * @param qos_dscp QoS DSCP value
 */
function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean
/**
 * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If there
 * are any remaining GstPtpClock instances, they won't be further synchronized
 * to the PTP network clock.
 */
function ptp_deinit(): void
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
 * @param clock_id PTP clock id of this process' clock or %GST_PTP_CLOCK_ID_NONE
 * @param interfaces network interfaces to run the clock on
 */
function ptp_init(clock_id: number, interfaces: string[] | null): boolean
/**
 * Check if the GStreamer PTP clock subsystem is initialized.
 */
function ptp_is_initialized(): boolean
/**
 * Check if PTP clocks are generally supported on this system, and if previous
 * initializations did not fail.
 */
function ptp_is_supported(): boolean
/**
 * Installs a new statistics callback for gathering PTP statistics. See
 * GstPtpStatisticsCallback for a list of statistics that are provided.
 * @param callback GstPtpStatisticsCallback to call
 */
function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number
/**
 * Removes a PTP statistics callback that was previously added with
 * gst_ptp_statistics_callback_add().
 * @param id Callback id to remove
 */
function ptp_statistics_callback_remove(id: number): void
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
interface NetClientClock_ConstructProps extends Gst.SystemClock_ConstructProps {

    // Own constructor properties of GstNet-1.0.GstNet.NetClientClock

    address?: string | null
    base_time?: number | null
    bus?: Gst.Bus | null
    minimum_update_interval?: number | null
    port?: number | null
    qos_dscp?: number | null
    round_trip_limit?: number | null
}

interface NetClientClock {

    // Own properties of GstNet-1.0.GstNet.NetClientClock

    address: string
    readonly base_time: number
    bus: Gst.Bus
    readonly internal_clock: Gst.Clock
    minimum_update_interval: number
    port: number
    qos_dscp: number
    round_trip_limit: number

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.NetClientClock

    clock: Gst.SystemClock

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstNet-1.0.GstNet.NetClientClock

    connect(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::base-time", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-time", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-time", ...args: any[]): void
    connect(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-update-interval", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::round-trip-limit", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<NetClientClock>

    // Constructors of GstNet-1.0.GstNet.NetClientClock

    constructor(config?: NetClientClock_ConstructProps) 
    /**
     * Create a new #GstNetClientClock that will report the time
     * provided by the #GstNetTimeProvider on `remote_address` and
     * `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remote_address the address or hostname of the remote clock provider
     * @param remote_port the port of the remote clock provider
     * @param base_time initial time of the clock
     */
    constructor(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime) 
    /**
     * Create a new #GstNetClientClock that will report the time
     * provided by the #GstNetTimeProvider on `remote_address` and
     * `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remote_address the address or hostname of the remote clock provider
     * @param remote_port the port of the remote clock provider
     * @param base_time initial time of the clock
     */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock
    _init(config?: NetClientClock_ConstructProps): void
}

interface NetTimeProvider_ConstructProps extends Gio.Initable_ConstructProps, Gst.Object_ConstructProps {

    // Own constructor properties of GstNet-1.0.GstNet.NetTimeProvider

    active?: boolean | null
    address?: string | null
    clock?: Gst.Clock | null
    port?: number | null
    qos_dscp?: number | null
}

interface NetTimeProvider extends Gio.Initable {

    // Own properties of GstNet-1.0.GstNet.NetTimeProvider

    active: boolean
    readonly address: string
    readonly clock: Gst.Clock
    readonly port: number
    qos_dscp: number

    // Own fields of GstNet-1.0.GstNet.NetTimeProvider

    parent: Gst.Object

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstNet-1.0.GstNet.NetTimeProvider

    connect(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::address", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<NetTimeProvider>

    // Constructors of GstNet-1.0.GstNet.NetTimeProvider

    constructor(config?: NetTimeProvider_ConstructProps) 
    /**
     * Allows network clients to get the current time of `clock`.
     * @constructor 
     * @param clock a #GstClock to export over the network
     * @param address an address to bind on as a dotted quad           (xxx.xxx.xxx.xxx), IPv6 address, or NULL to bind to all addresses
     * @param port a port to bind on, or 0 to let the kernel choose
     */
    constructor(clock: Gst.Clock, address: string | null, port: number) 
    /**
     * Allows network clients to get the current time of `clock`.
     * @constructor 
     * @param clock a #GstClock to export over the network
     * @param address an address to bind on as a dotted quad           (xxx.xxx.xxx.xxx), IPv6 address, or NULL to bind to all addresses
     * @param port a port to bind on, or 0 to let the kernel choose
     */
    static new(clock: Gst.Clock, address: string | null, port: number): NetTimeProvider
    _init(config?: NetTimeProvider_ConstructProps): void
}

interface NtpClock_ConstructProps extends NetClientClock_ConstructProps {
}

interface NtpClock {

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.NtpClock

    clock: Gst.SystemClock

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstNet-1.0.GstNet.NtpClock

    connect(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::base-time", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-time", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-time", ...args: any[]): void
    connect(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-update-interval", ...args: any[]): void
    connect(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos-dscp", ...args: any[]): void
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::round-trip-limit", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NtpClock extends NetClientClock {

    // Own properties of GstNet-1.0.GstNet.NtpClock

    static name: string
    static $gtype: GObject.GType<NtpClock>

    // Constructors of GstNet-1.0.GstNet.NtpClock

    constructor(config?: NtpClock_ConstructProps) 
    /**
     * Create a new #GstNtpClock that will report the time provided by
     * the NTPv4 server on `remote_address` and `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remote_address the address or hostname of the remote clock provider
     * @param remote_port the port of the remote clock provider
     * @param base_time initial time of the clock
     */
    constructor(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime) 
    /**
     * Create a new #GstNtpClock that will report the time provided by
     * the NTPv4 server on `remote_address` and `remote_port`.
     * @constructor 
     * @param name a name for the clock
     * @param remote_address the address or hostname of the remote clock provider
     * @param remote_port the port of the remote clock provider
     * @param base_time initial time of the clock
     */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock
    _init(config?: NtpClock_ConstructProps): void
}

interface PtpClock_ConstructProps extends Gst.SystemClock_ConstructProps {

    // Own constructor properties of GstNet-1.0.GstNet.PtpClock

    domain?: number | null
}

interface PtpClock {

    // Own properties of GstNet-1.0.GstNet.PtpClock

    readonly domain: number
    readonly grandmaster_clock_id: number
    readonly internal_clock: Gst.Clock
    readonly master_clock_id: number

    // Conflicting properties

    object: any

    // Own fields of GstNet-1.0.GstNet.PtpClock

    clock: Gst.SystemClock

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstNet-1.0.GstNet.PtpClock

    connect(sigName: "notify::domain", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain", ...args: any[]): void
    connect(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::grandmaster-clock-id", ...args: any[]): void
    connect(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::internal-clock", ...args: any[]): void
    connect(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::master-clock-id", ...args: any[]): void
    connect(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock-type", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-size", ...args: any[]): void
    connect(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-threshold", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<PtpClock>

    // Constructors of GstNet-1.0.GstNet.PtpClock

    constructor(config?: PtpClock_ConstructProps) 
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
     */
    static new(name: string, domain: number): PtpClock
    _init(config?: PtpClock_ConstructProps): void
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

    static get_info(): Gst.MetaInfo
}

interface NetClientClockClass {

    // Own fields of GstNet-1.0.GstNet.NetClientClockClass

    parent_class: Gst.SystemClockClass
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

    static get_info(): Gst.MetaInfo
}

interface NetTimePacket {

    // Own fields of GstNet-1.0.GstNet.NetTimePacket

    /**
     * the local time when this packet was sent
     * @field 
     */
    local_time: Gst.ClockTime
    /**
     * the remote time observation
     * @field 
     */
    remote_time: Gst.ClockTime

    // Owm methods of GstNet-1.0.GstNet.NetTimePacket

    /**
     * Make a copy of `packet`.
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
     * @param dest_address address to send the time packet to
     */
    send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean
    /**
     * Serialized a #GstNetTimePacket into a newly-allocated sequence of
     * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
     * suitable for passing to write(2) or sendto(2) for communication over the
     * network.
     * 
     * MT safe. Caller owns return value (g_free to free).
     */
    serialize(): number
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
     */
    constructor(buffer: Uint8Array) 
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
     */
    static new(buffer: Uint8Array): NetTimePacket
    /**
     * Receives a #GstNetTimePacket over a socket. Handles interrupted system
     * calls, but otherwise returns NULL on error.
     * @param socket socket to receive the time packet on
     */
    static receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
}

interface NetTimeProviderClass {

    // Own fields of GstNet-1.0.GstNet.NetTimeProviderClass

    parent_class: Gst.ObjectClass
    _gst_reserved: object[]
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

    parent_class: Gst.SystemClockClass
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
    parent_class: Gst.SystemClockClass
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