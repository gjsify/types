/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstnet-1.0-ambient.d.ts';
import './gstnet-1.0-import.d.ts';
/**
 * GstNet-1.0
 */

import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gio from '@girs/gio-2.0';

export namespace GstNet {
    /**
     * The size of the packets sent between network clocks.
     */
    const NET_TIME_PACKET_SIZE: number;
    /**
     * PTP clock identification that can be passed to gst_ptp_init() to
     * automatically select one based on the MAC address of interfaces
     */
    const PTP_CLOCK_ID_NONE: number;
    const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string;
    const PTP_STATISTICS_NEW_DOMAIN_FOUND: string;
    const PTP_STATISTICS_PATH_DELAY_MEASURED: string;
    const PTP_STATISTICS_TIME_UPDATED: string;
    /**
     * Attaches `addr` as metadata in a #GstNetAddressMeta to `buffer`.
     * @param buffer a #GstBuffer
     * @param addr a @GSocketAddress to connect to @buffer
     * @returns a #GstNetAddressMeta connected to @buffer
     */
    function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta;
    /**
     * Attaches `message` as metadata in a #GstNetControlMessageMeta to `buffer`.
     * @param buffer a #GstBuffer
     * @param message a @GSocketControlMessage to attach to @buffer
     * @returns a #GstNetControlMessageMeta connected to @buffer
     */
    function buffer_add_net_control_message_meta(
        buffer: Gst.Buffer,
        message: Gio.SocketControlMessage,
    ): NetControlMessageMeta;
    /**
     * Find the #GstNetAddressMeta on `buffer`.
     * @param buffer a #GstBuffer
     * @returns the #GstNetAddressMeta or %NULL when there is no such metadata on @buffer.
     */
    function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta | null;
    function net_address_meta_api_get_type(): GObject.GType;
    function net_address_meta_get_info(): Gst.MetaInfo;
    function net_control_message_meta_api_get_type(): GObject.GType;
    function net_control_message_meta_get_info(): Gst.MetaInfo;
    /**
     * Receives a #GstNetTimePacket over a socket. Handles interrupted system
     * calls, but otherwise returns NULL on error.
     * @param socket socket to receive the time packet on
     * @returns a new #GstNetTimePacket, or NULL on error. Free    with gst_net_time_packet_free() when done.
     */
    function net_time_packet_receive(socket: Gio.Socket): NetTimePacket;
    /**
     * Configures IP_TOS value of socket, i.e. sets QoS DSCP.
     * @param socket Socket to configure
     * @param qos_dscp QoS DSCP value
     * @returns TRUE if successful, FALSE in case an error occurred.
     */
    function net_utils_set_socket_tos(socket: Gio.Socket, qos_dscp: number): boolean;
    /**
     * Deinitialize the GStreamer PTP subsystem and stop the PTP clock. If there
     * are any remaining GstPtpClock instances, they won't be further synchronized
     * to the PTP network clock.
     */
    function ptp_deinit(): void;
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
     * @returns %TRUE if the GStreamer PTP clock subsystem could be initialized.
     */
    function ptp_init(clock_id: number, interfaces?: string[] | null): boolean;
    /**
     * Check if the GStreamer PTP clock subsystem is initialized.
     * @returns %TRUE if the GStreamer PTP clock subsystem is initialized.
     */
    function ptp_is_initialized(): boolean;
    /**
     * Check if PTP clocks are generally supported on this system, and if previous
     * initializations did not fail.
     * @returns %TRUE if PTP clocks are generally supported on this system, and previous initializations did not fail.
     */
    function ptp_is_supported(): boolean;
    /**
     * Installs a new statistics callback for gathering PTP statistics. See
     * GstPtpStatisticsCallback for a list of statistics that are provided.
     * @param callback GstPtpStatisticsCallback to call
     * @returns Id for the callback that can be passed to gst_ptp_statistics_callback_remove()
     */
    function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number;
    /**
     * Removes a PTP statistics callback that was previously added with
     * gst_ptp_statistics_callback_add().
     * @param id Callback id to remove
     */
    function ptp_statistics_callback_remove(id: number): void;
    interface PtpStatisticsCallback {
        (domain: number, stats: Gst.Structure): boolean;
    }
    module NetClientClock {
        // Constructor properties interface
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
     */
    class NetClientClock extends Gst.SystemClock {
        // Own properties of GstNet-1.0.NetClientClock

        address: string;
        base_time: number;
        baseTime: number;
        bus: Gst.Bus;
        readonly internal_clock: Gst.Clock;
        readonly internalClock: Gst.Clock;
        minimum_update_interval: number;
        minimumUpdateInterval: number;
        port: number;
        qos_dscp: number;
        qosDscp: number;
        round_trip_limit: number;
        roundTripLimit: number;

        // Own fields of GstNet-1.0.NetClientClock

        clock: Gst.SystemClock;

        // Constructors of GstNet-1.0.NetClientClock

        static ['new'](
            name: string | null,
            remote_address: string,
            remote_port: number,
            base_time: Gst.ClockTime,
        ): NetClientClock;
    }

    module NetTimeProvider {
        // Constructor properties interface
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
     */
    class NetTimeProvider extends Gst.Object {
        // Own properties of GstNet-1.0.NetTimeProvider

        active: boolean;
        address: string;
        clock: Gst.Clock;
        port: number;
        qos_dscp: number;
        qosDscp: number;

        // Constructors of GstNet-1.0.NetTimeProvider

        static ['new'](clock: Gst.Clock, address: string | null, port: number): NetTimeProvider;
    }

    module NtpClock {
        // Constructor properties interface
    }

    class NtpClock extends NetClientClock {
        // Own fields of GstNet-1.0.NtpClock

        clock: Gst.SystemClock;

        // Constructors of GstNet-1.0.NtpClock

        static ['new'](
            name: string | null,
            remote_address: string,
            remote_port: number,
            base_time: Gst.ClockTime,
        ): NtpClock;
    }

    module PtpClock {
        // Constructor properties interface
    }

    /**
     * GstPtpClock implements a PTP (IEEE1588:2008) ordinary clock in slave-only
     * mode, that allows a GStreamer pipeline to synchronize to a PTP network
     * clock in some specific domain.
     *
     * The PTP subsystem can be initialized with gst_ptp_init(), which then starts
     * a helper process to do the actual communication via the PTP ports. This is
     * required as PTP listens on ports &lt; 1024 and thus requires special
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
     */
    class PtpClock extends Gst.SystemClock {
        // Own properties of GstNet-1.0.PtpClock

        domain: number;
        readonly grandmaster_clock_id: number;
        readonly grandmasterClockId: number;
        readonly internal_clock: Gst.Clock;
        readonly internalClock: Gst.Clock;
        readonly master_clock_id: number;
        readonly masterClockId: number;

        // Own fields of GstNet-1.0.PtpClock

        clock: Gst.SystemClock;

        // Constructors of GstNet-1.0.PtpClock

        static ['new'](name: string, domain: number): PtpClock;
    }

    /**
     * #GstNetAddressMeta can be used to store a network address (a #GSocketAddress)
     * in a #GstBuffer so that it network elements can track the to and from address
     * of the buffer.
     */
    class NetAddressMeta {
        // Own fields of GstNet-1.0.NetAddressMeta

        addr: Gio.SocketAddress;

        // Owm methods of GstNet-1.0.NetAddressMeta

        static get_info(): Gst.MetaInfo;
    }

    class NetClientClockClass {}

    class NetClientClockPrivate {}

    /**
     * #GstNetControlMessageMeta can be used to store control messages (ancillary
     * data) which was received with or is to be sent alongside the buffer data.
     * When used with socket sinks and sources which understand this meta it allows
     * sending and receiving ancillary data such as unix credentials (See
     * #GUnixCredentialsMessage) and Unix file descriptions (See #GUnixFDMessage).
     */
    class NetControlMessageMeta {
        // Own fields of GstNet-1.0.NetControlMessageMeta

        message: Gio.SocketControlMessage;

        // Owm methods of GstNet-1.0.NetControlMessageMeta

        static get_info(): Gst.MetaInfo;
    }

    /**
     * Various functions for receiving, sending an serializing #GstNetTimePacket
     * structures.
     */
    class NetTimePacket {
        // Own fields of GstNet-1.0.NetTimePacket

        local_time: Gst.ClockTime;
        remote_time: Gst.ClockTime;

        // Constructors of GstNet-1.0.NetTimePacket

        constructor(
            properties?: Partial<{
                local_time: Gst.ClockTime;
                remote_time: Gst.ClockTime;
            }>,
        );

        static ['new'](buffer?: Uint8Array | null): NetTimePacket;

        // Owm methods of GstNet-1.0.NetTimePacket

        /**
         * Receives a #GstNetTimePacket over a socket. Handles interrupted system
         * calls, but otherwise returns NULL on error.
         * @param socket socket to receive the time packet on
         */
        static receive(socket: Gio.Socket): NetTimePacket;

        // Owm methods of GstNet-1.0.NetTimePacket

        /**
         * Make a copy of `packet`.
         * @returns a copy of @packet, free with gst_net_time_packet_free().
         */
        copy(): NetTimePacket;
        /**
         * Free `packet`.
         */
        free(): void;
        /**
         * Sends a #GstNetTimePacket over a socket.
         *
         * MT safe.
         * @param socket socket to send the time packet on
         * @param dest_address address to send the time packet to
         * @returns TRUE if successful, FALSE in case an error occurred.
         */
        send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean;
        /**
         * Serialized a #GstNetTimePacket into a newly-allocated sequence of
         * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
         * suitable for passing to write(2) or sendto(2) for communication over the
         * network.
         *
         * MT safe. Caller owns return value (g_free to free).
         * @returns A newly allocated sequence of #GST_NET_TIME_PACKET_SIZE bytes.
         */
        serialize(): Uint8Array;
    }

    class NetTimeProviderClass {}

    class NetTimeProviderPrivate {}

    class NtpClockClass {}

    /**
     * Opaque #GstPtpClockClass structure.
     */
    class PtpClockClass {}

    class PtpClockPrivate {}

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
