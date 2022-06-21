// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Nice-0.1
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Nice {

/**
 * An enum representing the type of transport to use
 */
enum CandidateTransport {
    /**
     * UDP transport
     */
    UDP,
    /**
     * TCP Active transport
     */
    TCP_ACTIVE,
    /**
     * TCP Passive transport
     */
    TCP_PASSIVE,
    /**
     * TCP Simultaneous-Open transport
     */
    TCP_SO,
}
/**
 * An enum represneting the type of a candidate
 */
enum CandidateType {
    /**
     * A host candidate
     */
    HOST,
    /**
     * A server reflexive candidate
     */
    SERVER_REFLEXIVE,
    /**
     * A peer reflexive candidate
     */
    PEER_REFLEXIVE,
    /**
     * A relay candidate
     */
    RELAYED,
}
/**
 * An enum to specify which compatible specifications the #NiceAgent should use.
 * Use with nice_agent_new()
 * 
 * <warning>`NICE_COMPATIBILITY_DRAFT1`9 is deprecated and should not be used
 * in newly-written code. It is kept for compatibility reasons and
 * represents the same compatibility as `NICE_COMPATIBILITY_RFC5`245 </warning>
 *  <note>
 *    <para>
 *    If `NICE_COMPATIBILITY_RFC5`245 compatibility mode is used for a non-reliable
 *    agent, then ICE-UDP will be used with higher priority and ICE-TCP will also
 *    be used when the UDP connectivity fails. If it is used with a reliable agent,
 *    then ICE-UDP will be used with the TCP-Over-UDP (#PseudoTcpSocket) if ICE-TCP
 *    fails and ICE-UDP succeeds.
 *   </para>
 *  </note>
 */
enum Compatibility {
    /**
     * Use compatibility with the RFC5245 ICE-UDP specs
     * and RFC6544 ICE-TCP specs
     */
    RFC5245,
    /**
     * Use compatibility for ICE Draft 19 specs
     */
    DRAFT19,
    /**
     * Use compatibility for Google Talk specs
     */
    GOOGLE,
    /**
     * Use compatibility for MSN Messenger specs
     */
    MSN,
    /**
     * Use compatibility with Windows Live Messenger
     * 2009
     */
    WLM2009,
    /**
     * Use compatibility with Microsoft Office Communicator 2007
     */
    OC2007,
    /**
     * Use compatibility with Microsoft Office Communicator 2007 R2
     */
    OC2007R2,
    /**
     * Dummy last compatibility mode
     */
    LAST,
}
/**
 * An enum representing the state of a component.
 * <para> See also: #NiceAgent::component-state-changed </para>
 */
enum ComponentState {
    /**
     * No activity scheduled
     */
    DISCONNECTED,
    /**
     * Gathering local candidates
     */
    GATHERING,
    /**
     * Establishing connectivity
     */
    CONNECTING,
    /**
     * At least one working candidate pair
     */
    CONNECTED,
    /**
     * ICE concluded, candidate pair selection
     * is now final
     */
    READY,
    /**
     * Connectivity checks have been completed,
     * but connectivity was not established
     */
    FAILED,
    /**
     * Dummy state
     */
    LAST,
}
/**
 * Convenience enum representing the type of a component for use as the
 * component_id for RTP/RTCP usages.
 *  <example>
 *    <title>Example of use.</title>
 *    <programlisting>
 *    nice_agent_send (agent, stream_id, NICE_COMPONENT_TYPE_RTP, len, buf);
 *    </programlisting>
 *   </example>
 */
enum ComponentType {
    /**
     * RTP Component type
     */
    RTP,
    /**
     * RTCP Component type
     */
    RTCP,
}
/**
 * An enum to specity the kind of nomination mode to use by
 * the agent, as described in RFC 5245. Two modes exists,
 * regular and aggressive. They differ by the way the controlling
 * agent chooses to put the USE-CANDIDATE attribute in its STUN
 * messages. The aggressive mode is supposed to nominate a pair
 * faster, than the regular mode, potentially causing the nominated
 * pair to change until the connection check completes.
 */
enum NominationMode {
    /**
     * Regular nomination mode
     */
    REGULAR,
    /**
     * Aggressive nomination mode
     */
    AGGRESSIVE,
}
/**
 * An enum to specify which proxy type to use for relaying.
 * Note that the proxies will only be used with TCP TURN relaying.
 * <para> See also: #NiceAgent:proxy-type </para>
 */
enum ProxyType {
    /**
     * Do not use a proxy
     */
    NONE,
    /**
     * Use a SOCKS5 proxy
     */
    SOCKS5,
    /**
     * Use an HTTP proxy
     */
    HTTP,
    /**
     * Dummy last proxy type
     */
    LAST,
}
/**
 * Valid values of debug levels to be set.
 */
enum PseudoTcpDebugLevel {
    /**
     * Disable debug messages
     */
    NONE,
    /**
     * Enable basic debug messages
     */
    NORMAL,
    /**
     * Enable verbose debug messages
     */
    VERBOSE,
}
/**
 * Options for which parts of a connection to shut down when calling
 * pseudo_tcp_socket_shutdown(). These correspond to the values passed to POSIX
 * shutdown().
 */
enum PseudoTcpShutdown {
    /**
     * Shut down the local reader only
     */
    RD,
    /**
     * Shut down the local writer only
     */
    WR,
    /**
     * Shut down both reading and writing
     */
    RDWR,
}
/**
 * An enum representing the state of the #PseudoTcpSocket. These states
 * correspond to the TCP states in RFC 793.
 * <para> See also: #PseudoTcpSocket:state </para>
 */
enum PseudoTcpState {
    /**
     * The socket's initial state. The socket isn't connected and is
     * listening for an incoming connection
     */
    LISTEN,
    /**
     * The socket has sent a connection request (SYN) packet and is
     * waiting for an answer
     */
    SYN_SENT,
    /**
     * The socket has received a connection request (SYN) packet.
     */
    SYN_RECEIVED,
    /**
     * The socket is connected
     */
    ESTABLISHED,
    /**
     * The socket has been closed
     */
    CLOSED,
    /**
     * The socket has been closed locally but not remotely
     * (Since: 0.1.8)
     */
    FIN_WAIT_1,
    /**
     * The socket has been closed locally but not remotely
     * (Since: 0.1.8)
     */
    FIN_WAIT_2,
    /**
     * The socket has been closed locally and remotely
     * (Since: 0.1.8)
     */
    CLOSING,
    /**
     * The socket has been closed locally and remotely
     * (Since: 0.1.8)
     */
    TIME_WAIT,
    /**
     * The socket has been closed remotely but not locally
     * (Since: 0.1.8)
     */
    CLOSE_WAIT,
    /**
     * The socket has been closed locally and remotely
     * (Since: 0.1.8)
     */
    LAST_ACK,
}
/**
 * An enum representing the result value of the write operation requested by
 * the #PseudoTcpSocket.
 * <para> See also: %PseudoTcpCallbacks:WritePacket </para>
 */
enum PseudoTcpWriteResult {
    /**
     * The write operation was successful
     */
    SUCCESS,
    /**
     * The socket type requires that message be sent atomically
     * and the size of the message to be sent made this impossible.
     */
    TOO_LARGE,
    /**
     * There was an error sending the message
     */
    FAIL,
}
/**
 * An enum representing the type of relay to use
 */
enum RelayType {
    /**
     * A TURN relay using UDP
     */
    UDP,
    /**
     * A TURN relay using TCP
     */
    TCP,
    /**
     * A TURN relay using TLS over TCP
     */
    TLS,
}
/**
 * These are options that can be passed to nice_agent_new_full(). They set
 * various properties on the agent. Not including them sets the property to
 * the other value.
 * @bitfield 
 */
enum AgentOption {
    /**
     * Enables regular nomination, default
     *  is aggrssive mode (see #NiceNominationMode).
     */
    REGULAR_NOMINATION,
    /**
     * Enables reliable mode, possibly using PseudoTCP, *  see nice_agent_new_reliable().
     */
    RELIABLE,
    /**
     * Enable lite mode
     */
    LITE_MODE,
    /**
     * Enable ICE trickle mode
     */
    ICE_TRICKLE,
    /**
     * Enable renomination triggered by NOMINATION STUN attribute
     * proposed here: https://tools.ietf.org/html/draft-thatcher-ice-renomination-00
     */
    SUPPORT_RENOMINATION,
    /**
     * Enable RFC 7675 consent freshness support. (Since: 0.1.19)
     */
    CONSENT_FRESHNESS,
}
/**
 * A hard limit for the number of remote candidates. This
 * limit is enforced to protect against malevolent remote
 * clients.
 */
const AGENT_MAX_REMOTE_CANDIDATES: number
/**
 * The maximum size a candidate foundation can have.
 */
const CANDIDATE_MAX_FOUNDATION: number
/**
 * The maximum number of local addresses. The constraint is that the
 * maximum number of local addresses and number of turn servers must
 * fit on 9 bits, to ensure candidate priority uniqueness. See also
 * `NICE_CANDIDATE_MAX_TURN_SERVERS`. We choose 6 bits for the number of
 * local addresses, and 3 bits for the number of turn servers.
 */
const CANDIDATE_MAX_LOCAL_ADDRESSES: number
/**
 * The maximum number of turns servers.
 */
const CANDIDATE_MAX_TURN_SERVERS: number
/**
 * Useful for debugging functions, just returns a static string with the
 * candidate transport.
 * @param transport a #NiceCandidateTransport
 */
function candidate_transport_to_string(transport: CandidateTransport): string
/**
 * Useful for debugging functions, just returns a static string with the
 * candidate type.
 * @param type a #NiceCandidateType
 */
function candidate_type_to_string(type: CandidateType): string
/**
 * Returns a string representation of the state, generally to use in debug
 * messages.
 * @param state a #NiceComponentState
 */
function component_state_to_string(state: ComponentState): string
/**
 * Disables libnice debug output to the terminal
 * @param with_stun Also disable stun debugging messages
 */
function debug_disable(with_stun: boolean): void
/**
 * Enables libnice debug output to the terminal. Note that the
 * `G_MESSAGES_DEBUG` and `NICE_DEBUG` environment variables must be set to the
 * set of logging domains to print, in order for any output to be printed. Set
 * them to `all` to print all debugging messages, or any of the following
 * domains:
 * - `libnice-stun`
 * - `libnice-tests`
 * - `libnice-socket`
 * - `libnice`
 * - `libnice-pseudotcp`
 * - `libnice-pseudotcp-verbose`
 * @param with_stun Also enable STUN debugging messages
 */
function debug_enable(with_stun: boolean): void
/**
 * Retrieves the IP address of an interface by its name. If this fails, %NULL
 * is returned.
 * @param interface_name name of local interface
 */
function interfaces_get_ip_for_interface(interface_name: string): string | null
/**
 * Get the list of local interfaces
 */
function interfaces_get_local_interfaces(): string[]
/**
 * Get a list of local ipv4 interface addresses
 * @param include_loopback Include any loopback devices
 */
function interfaces_get_local_ips(include_loopback: boolean): string[]
/**
 * Sets the debug level to enable/disable normal/verbose debug messages.
 * @param level The level of debug to set
 */
function pseudo_tcp_set_debug_level(level: PseudoTcpDebugLevel): void
/**
 * Callback function when data is received on a component
 * @callback 
 * @param agent The #NiceAgent Object
 * @param stream_id The id of the stream
 * @param component_id The id of the component of the stream        which received the data
 * @param len The length of the data
 * @param buf The buffer containing the data received
 */
interface AgentRecvFunc {
    (agent: Agent, stream_id: number, component_id: number, len: number, buf: string): void
}
interface Agent_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Nice-0.1.Nice.Agent

    /**
     * The Nice agent can work in various compatibility modes depending on
     * what the application/peer needs.
     * <para> See also: #NiceCompatibility</para>
     */
    compatibility?: number | null
    /**
     * Whether to perform periodic consent freshness checks as specified in
     * RFC 7675.  When %TRUE, the agent will periodically send binding requests
     * to the peer to maintain the consent to send with the peer.  On receipt
     * of any authenticated error response, a component will immediately move
     * to the failed state.
     * 
     * Setting this property to %TRUE implies that 'keepalive-conncheck' should
     * be %TRUE as well.
     */
    consent_freshness?: boolean | null
    /**
     * Whether the agent has the controlling role. This property should
     * be modified before gathering candidates, any modification occuring
     * later will be hold until ICE is restarted.
     */
    controlling_mode?: boolean | null
    /**
     * Force all traffic to go through a relay for added privacy, this
     * allows hiding the local IP address. When this is enabled, so
     * local candidates are available before relay servers have been set
     * with nice_agent_set_relay_info().
     */
    force_relay?: boolean | null
    full_mode?: boolean | null
    /**
     * Whether the agent should use ICE-TCP when gathering candidates.
     * If the option is disabled, no TCP candidates will be generated. If the
     * agent is in reliable mode, then pseudotcp will need to be used over UDP
     * candidates.
     * <para>
     * This option should be set before gathering candidates and should not be
     * modified afterwards.
     * </para>
     * The #NiceAgent:ice-tcp property can be set at the same time as the
     * #NiceAgent:ice-udp property, but both cannot be unset at the same time.
     * If #NiceAgent:ice-udp is set to %FALSE, then this property cannot be set
     * to %FALSE as well.
     * <note>
     *    <para>
     *    ICE-TCP is only supported for %NICE_COMPATIBILITY_RFC5245,
     *    %NICE_COMPATIBILITY_OC2007 and %NICE_COMPATIBILITY_OC2007R2 compatibility
     *    modes.
     *    </para>
     * </note>
     */
    ice_tcp?: boolean | null
    /**
     * Whether to perform Trickle ICE as per draft-ietf-ice-trickle-ice-21.
     * When %TRUE, the agent will postpone changing a component state to
     * %NICE_COMPONENT_STATE_FAILED until nice_agent_peer_candidate_gathering_done()
     * has been called with the ID of the component's stream.
     */
    ice_trickle?: boolean | null
    /**
     * Whether the agent should use ICE-UDP when gathering candidates.
     * If the option is disabled, no UDP candidates will be generated. If the
     * agent is in reliable mode, then pseudotcp will not be used since pseudotcp
     * works on top of UDP candidates.
     * <para>
     * This option should be set before gathering candidates and should not be
     * modified afterwards.
     * </para>
     * The #NiceAgent:ice-udp property can be set at the same time as the
     * #NiceAgent:ice-tcp property, but both cannot be unset at the same time.
     * If #NiceAgent:ice-tcp is set to %FALSE, then this property cannot be set
     * to %FALSE as well.
     */
    ice_udp?: boolean | null
    /**
     * A final timeout in msec, launched when the agent becomes idle,
     * before stopping its activity.
     * 
     * This timer will delay the decision to set a component as failed.
     * This delay is added to reduce the chance to see the agent receiving
     * new stun activity just after the conncheck list has been declared
     * failed (some valid pairs, no nominated pair, and no in-progress
     * pairs), reactiviting conncheck activity, and causing a (valid)
     * state transitions like that: connecting -> failed -> connecting ->
     * connected -> ready.  Such transitions are not buggy per-se, but may
     * break the test-suite, that counts precisely the number of time each
     * state has been set, and doesnt expect these transcient failed
     * states.
     * 
     * This timer is also useful when the agent is in controlled mode and
     * the other controlling peer takes some time to elect its nominated
     * pair (this may be the case for SfB peers).
     * 
     * This timer is *NOT* part if the RFC5245, as this situation is not
     * covered in sect 8.1.2 "Updating States", but deals with a real
     * use-case, where a controlled agent can not wait forever for the
     * other peer to make a nomination decision.
     * 
     * Also note that the value of this timeout will not delay the
     * emission of 'connected' and 'ready' agent signals, and will not
     * slow down the behaviour of the agent when the peer agent works
     * in a timely manner.
     */
    idle_timeout?: number | null
    /**
     * Use binding requests as keepalives instead of binding
     * indications. This means that the keepalives may time out which
     * will change the component state to %NICE_COMPONENT_STATE_FAILED.
     * 
     * Enabing this is a slight violation of RFC 5245 section 10 which
     * recommends using Binding Indications for keepalives.
     * 
     * This is always enabled if the compatibility mode is
     * %NICE_COMPATIBILITY_GOOGLE.
     * 
     * This is always enabled if the 'consent-freshness' property is %TRUE
     */
    keepalive_conncheck?: boolean | null
    /**
     * A GLib main context is needed for all timeouts used by libnice.
     * This is a property being set by the nice_agent_new() call.
     */
    main_context?: object | null
    max_connectivity_checks?: number | null
    /**
     * The proxy server IP used to bypass a proxy firewall
     */
    proxy_ip?: string | null
    /**
     * The password used to authenticate with the proxy
     */
    proxy_password?: string | null
    /**
     * The proxy server port used to bypass a proxy firewall
     */
    proxy_port?: number | null
    /**
     * The type of proxy set in the proxy-ip property
     */
    proxy_type?: number | null
    /**
     * The username used to authenticate with the proxy
     */
    proxy_username?: string | null
    /**
     * Whether the agent is providing a reliable transport of messages (through
     * ICE-TCP or PseudoTCP over ICE-UDP)
     */
    reliable?: boolean | null
    /**
     * The initial timeout (msecs) of the STUN binding requests
     * used in the gathering stage, to find our local candidates.
     * This property is described as 'RTO' in the RFC 5389 and RFC 5245.
     * This timeout is doubled for each retransmission, until
     * #NiceAgent:stun-max-retransmissions have been done,
     * with an exception for the last restransmission, where the timeout is
     * divided by two instead (RFC 5389 indicates that a customisable
     * multiplier 'Rm' to 'RTO' should be used).
     */
    stun_initial_timeout?: number | null
    /**
     * The maximum number of retransmissions of the STUN binding requests
     * used in the gathering stage, to find our local candidates, and used
     * in the connection check stage, to test the validity of each
     * constructed pair. This property is described as 'Rc' in the RFC
     * 5389, with a default value of 7. The timeout of each STUN request
     * is doubled for each retransmission, so the choice of this value has
     * a direct impact on the time needed to move from the CONNECTED state
     * to the READY state, and on the time needed to complete the GATHERING
     * state.
     */
    stun_max_retransmissions?: number | null
    stun_pacing_timer?: number | null
    /**
     * The initial timeout of the STUN binding requests used
     * for a reliable timer.
     */
    stun_reliable_timeout?: number | null
    stun_server?: string | null
    stun_server_port?: number | null
    /**
     * Support RENOMINATION STUN attribute proposed here:
     * https://tools.ietf.org/html/draft-thatcher-ice-renomination-00 As
     * soon as RENOMINATION attribute is received from remote
     * candidate's address, corresponding candidates pair gets
     * selected. This is specific to Google Chrome/libWebRTC.
     */
    support_renomination?: boolean | null
    /**
     * Whether the agent should use UPnP to open a port in the router and
     * get the external IP
     */
    upnp?: boolean | null
    /**
     * The maximum amount of time (in milliseconds) to wait for UPnP discovery to
     * finish before signaling the #NiceAgent::candidate-gathering-done signal
     */
    upnp_timeout?: number | null
}

/**
 * Signal callback interface for `candidate-gathering-done`
 */
interface Agent_CandidateGatheringDoneSignalCallback {
    ($obj: Agent, stream_id: number): void
}

/**
 * Signal callback interface for `component-state-changed`
 */
interface Agent_ComponentStateChangedSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number, state: number): void
}

/**
 * Signal callback interface for `initial-binding-request-received`
 */
interface Agent_InitialBindingRequestReceivedSignalCallback {
    ($obj: Agent, stream_id: number): void
}

/**
 * Signal callback interface for `new-candidate`
 */
interface Agent_NewCandidateSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number, foundation: string): void
}

/**
 * Signal callback interface for `new-candidate-full`
 */
interface Agent_NewCandidateFullSignalCallback {
    ($obj: Agent, candidate: Candidate): void
}

/**
 * Signal callback interface for `new-remote-candidate`
 */
interface Agent_NewRemoteCandidateSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number, foundation: string): void
}

/**
 * Signal callback interface for `new-remote-candidate-full`
 */
interface Agent_NewRemoteCandidateFullSignalCallback {
    ($obj: Agent, candidate: Candidate): void
}

/**
 * Signal callback interface for `new-selected-pair`
 */
interface Agent_NewSelectedPairSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number, lfoundation: string, rfoundation: string): void
}

/**
 * Signal callback interface for `new-selected-pair-full`
 */
interface Agent_NewSelectedPairFullSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number, lcandidate: Candidate, rcandidate: Candidate): void
}

/**
 * Signal callback interface for `reliable-transport-writable`
 */
interface Agent_ReliableTransportWritableSignalCallback {
    ($obj: Agent, stream_id: number, component_id: number): void
}

/**
 * Signal callback interface for `streams-removed`
 */
interface Agent_StreamsRemovedSignalCallback {
    ($obj: Agent, stream_ids: number[]): void
}

interface Agent {

    // Own properties of Nice-0.1.Nice.Agent

    /**
     * This property defines whether receive/send over a TCP or pseudo-TCP, in
     * reliable mode, are considered as packetized or as bytestream.
     * In unreliable mode, every send/recv is considered as packetized, and
     * this property is ignored and cannot be set.
     * <para>
     * In reliable mode, this property will always return %TRUE in the
     * %NICE_COMPATIBILITY_GOOGLE compatibility mode.
     * </para>
     * If the property is %TRUE, the stream is considered in bytestream mode
     * and data can be read with any receive size. If the property is %FALSE, then
     * the stream is considred packetized and each receive will return one packet
     * of the same size as what was sent from the peer. If in packetized mode,
     * then doing a receive with a size smaller than the packet, will cause the
     * remaining bytes in the packet to be dropped, breaking the reliability
     * of the stream.
     * <para>
     * This property is currently read-only, and will become read/write once
     * bytestream mode will be supported.
     * </para>
     */
    readonly bytestream_tcp: boolean
    /**
     * The Nice agent can work in various compatibility modes depending on
     * what the application/peer needs.
     * <para> See also: #NiceCompatibility</para>
     */
    readonly compatibility: number
    /**
     * Whether to perform periodic consent freshness checks as specified in
     * RFC 7675.  When %TRUE, the agent will periodically send binding requests
     * to the peer to maintain the consent to send with the peer.  On receipt
     * of any authenticated error response, a component will immediately move
     * to the failed state.
     * 
     * Setting this property to %TRUE implies that 'keepalive-conncheck' should
     * be %TRUE as well.
     */
    readonly consent_freshness: boolean
    /**
     * Whether the agent has the controlling role. This property should
     * be modified before gathering candidates, any modification occuring
     * later will be hold until ICE is restarted.
     */
    controlling_mode: boolean
    /**
     * Force all traffic to go through a relay for added privacy, this
     * allows hiding the local IP address. When this is enabled, so
     * local candidates are available before relay servers have been set
     * with nice_agent_set_relay_info().
     */
    force_relay: boolean
    readonly full_mode: boolean
    /**
     * Whether the agent should use ICE-TCP when gathering candidates.
     * If the option is disabled, no TCP candidates will be generated. If the
     * agent is in reliable mode, then pseudotcp will need to be used over UDP
     * candidates.
     * <para>
     * This option should be set before gathering candidates and should not be
     * modified afterwards.
     * </para>
     * The #NiceAgent:ice-tcp property can be set at the same time as the
     * #NiceAgent:ice-udp property, but both cannot be unset at the same time.
     * If #NiceAgent:ice-udp is set to %FALSE, then this property cannot be set
     * to %FALSE as well.
     * <note>
     *    <para>
     *    ICE-TCP is only supported for %NICE_COMPATIBILITY_RFC5245,
     *    %NICE_COMPATIBILITY_OC2007 and %NICE_COMPATIBILITY_OC2007R2 compatibility
     *    modes.
     *    </para>
     * </note>
     */
    ice_tcp: boolean
    /**
     * Whether to perform Trickle ICE as per draft-ietf-ice-trickle-ice-21.
     * When %TRUE, the agent will postpone changing a component state to
     * %NICE_COMPONENT_STATE_FAILED until nice_agent_peer_candidate_gathering_done()
     * has been called with the ID of the component's stream.
     */
    ice_trickle: boolean
    /**
     * Whether the agent should use ICE-UDP when gathering candidates.
     * If the option is disabled, no UDP candidates will be generated. If the
     * agent is in reliable mode, then pseudotcp will not be used since pseudotcp
     * works on top of UDP candidates.
     * <para>
     * This option should be set before gathering candidates and should not be
     * modified afterwards.
     * </para>
     * The #NiceAgent:ice-udp property can be set at the same time as the
     * #NiceAgent:ice-tcp property, but both cannot be unset at the same time.
     * If #NiceAgent:ice-tcp is set to %FALSE, then this property cannot be set
     * to %FALSE as well.
     */
    ice_udp: boolean
    /**
     * A final timeout in msec, launched when the agent becomes idle,
     * before stopping its activity.
     * 
     * This timer will delay the decision to set a component as failed.
     * This delay is added to reduce the chance to see the agent receiving
     * new stun activity just after the conncheck list has been declared
     * failed (some valid pairs, no nominated pair, and no in-progress
     * pairs), reactiviting conncheck activity, and causing a (valid)
     * state transitions like that: connecting -> failed -> connecting ->
     * connected -> ready.  Such transitions are not buggy per-se, but may
     * break the test-suite, that counts precisely the number of time each
     * state has been set, and doesnt expect these transcient failed
     * states.
     * 
     * This timer is also useful when the agent is in controlled mode and
     * the other controlling peer takes some time to elect its nominated
     * pair (this may be the case for SfB peers).
     * 
     * This timer is *NOT* part if the RFC5245, as this situation is not
     * covered in sect 8.1.2 "Updating States", but deals with a real
     * use-case, where a controlled agent can not wait forever for the
     * other peer to make a nomination decision.
     * 
     * Also note that the value of this timeout will not delay the
     * emission of 'connected' and 'ready' agent signals, and will not
     * slow down the behaviour of the agent when the peer agent works
     * in a timely manner.
     */
    idle_timeout: number
    /**
     * Use binding requests as keepalives instead of binding
     * indications. This means that the keepalives may time out which
     * will change the component state to %NICE_COMPONENT_STATE_FAILED.
     * 
     * Enabing this is a slight violation of RFC 5245 section 10 which
     * recommends using Binding Indications for keepalives.
     * 
     * This is always enabled if the compatibility mode is
     * %NICE_COMPATIBILITY_GOOGLE.
     * 
     * This is always enabled if the 'consent-freshness' property is %TRUE
     */
    keepalive_conncheck: boolean
    /**
     * A GLib main context is needed for all timeouts used by libnice.
     * This is a property being set by the nice_agent_new() call.
     */
    readonly main_context: object
    max_connectivity_checks: number
    /**
     * The proxy server IP used to bypass a proxy firewall
     */
    proxy_ip: string
    /**
     * The password used to authenticate with the proxy
     */
    proxy_password: string
    /**
     * The proxy server port used to bypass a proxy firewall
     */
    proxy_port: number
    /**
     * The type of proxy set in the proxy-ip property
     */
    proxy_type: number
    /**
     * The username used to authenticate with the proxy
     */
    proxy_username: string
    /**
     * Whether the agent is providing a reliable transport of messages (through
     * ICE-TCP or PseudoTCP over ICE-UDP)
     */
    readonly reliable: boolean
    /**
     * The initial timeout (msecs) of the STUN binding requests
     * used in the gathering stage, to find our local candidates.
     * This property is described as 'RTO' in the RFC 5389 and RFC 5245.
     * This timeout is doubled for each retransmission, until
     * #NiceAgent:stun-max-retransmissions have been done,
     * with an exception for the last restransmission, where the timeout is
     * divided by two instead (RFC 5389 indicates that a customisable
     * multiplier 'Rm' to 'RTO' should be used).
     */
    stun_initial_timeout: number
    /**
     * The maximum number of retransmissions of the STUN binding requests
     * used in the gathering stage, to find our local candidates, and used
     * in the connection check stage, to test the validity of each
     * constructed pair. This property is described as 'Rc' in the RFC
     * 5389, with a default value of 7. The timeout of each STUN request
     * is doubled for each retransmission, so the choice of this value has
     * a direct impact on the time needed to move from the CONNECTED state
     * to the READY state, and on the time needed to complete the GATHERING
     * state.
     */
    stun_max_retransmissions: number
    stun_pacing_timer: number
    /**
     * The initial timeout of the STUN binding requests used
     * for a reliable timer.
     */
    stun_reliable_timeout: number
    stun_server: string
    stun_server_port: number
    /**
     * Support RENOMINATION STUN attribute proposed here:
     * https://tools.ietf.org/html/draft-thatcher-ice-renomination-00 As
     * soon as RENOMINATION attribute is received from remote
     * candidate's address, corresponding candidates pair gets
     * selected. This is specific to Google Chrome/libWebRTC.
     */
    support_renomination: boolean
    /**
     * Whether the agent should use UPnP to open a port in the router and
     * get the external IP
     */
    upnp: boolean
    /**
     * The maximum amount of time (in milliseconds) to wait for UPnP discovery to
     * finish before signaling the #NiceAgent::candidate-gathering-done signal
     */
    upnp_timeout: number

    // Owm methods of Nice-0.1.Nice.Agent

    /**
     * Add a local address from which to derive local host candidates for
     * candidate gathering.
     * <para>
     * Since 0.0.5, if this method is not called, libnice will automatically
     * discover the local addresses available
     * </para>
     * 
     * See also: nice_agent_gather_candidates()
     * @param addr The address to listen to If the port is 0, then a random port will be chosen by the system
     */
    add_local_address(addr: Address): boolean
    /**
     * Adds a data stream to `agent` containing `n_components` components. The
     * returned stream ID is guaranteed to be positive on success.
     * @param n_components The number of components to add to the stream
     */
    add_stream(n_components: number): number
    /**
     * Asynchronously closes resources the agent has allocated on remote servers.
     * 
     * The agent will call the callback in the current #GMainContext in
     * which this function is called. The #GAsyncResult in the callback
     * can be ignored as this operation never fails.
     * 
     * Calling this function before freeing the agent makes sure the allocated relay
     * ports aren't left behind on TURN server but properly removed.
     * @param callback A callback that will be called when the closing is  complete
     */
    close_async(callback: Gio.AsyncReadyCallback | null): void
    /**
     * Notifies the agent that consent to receive has been revoked.  This will
     * cause the component to fail with 403 'Forbidden' all incoming STUN binding
     * requests as specified in RFC 7675.
     * 
     * A stream with a component in the consent-lost state can be reused by
     * performing an ice restart with nice_agent_restart() or
     * nice_agent_restart_stream().
     * 
     * Calling the function only has an effect when `agent` has been created with
     * `NICE_AGENT_OPTION_CONSENT_FRESHNESS`.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    consent_lost(stream_id: number, component_id: number): boolean
    /**
     * Forget all the relay servers previously added using
     * nice_agent_set_relay_info(). Currently connected streams will keep
     * using the relay as long as they have not been restarted and haven't
     * succesfully negotiated a different path.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    forget_relays(stream_id: number, component_id: number): boolean
    /**
     * Allocate and start listening on local candidate ports and start the remote
     * candidate gathering process.
     * Once done, #NiceAgent::candidate-gathering-done is called for the stream.
     * As soon as this function is called, #NiceAgent::new-candidate signals may be
     * emitted, even before this function returns.
     * 
     * nice_agent_get_local_candidates() will only return non-empty results after
     * calling this function.
     * 
     * <para>See also: nice_agent_add_local_address()</para>
     * <para>See also: nice_agent_set_port_range()</para>
     * @param stream_id The ID of the stream to start
     */
    gather_candidates(stream_id: number): boolean
    /**
     * Generate an SDP string representing a local candidate.
     * 
     * <para>See also: nice_agent_parse_remote_candidate_sdp() </para>
     * <para>See also: nice_agent_generate_local_sdp() </para>
     * <para>See also: nice_agent_generate_local_stream_sdp() </para>
     * @param candidate The candidate to generate
     */
    generate_local_candidate_sdp(candidate: Candidate): string
    /**
     * Generate an SDP string containing the local candidates and credentials for
     * all streams and components in the agent.
     * 
     *  <note>
     *    <para>
     *      The SDP will not contain any codec lines and the 'm' line will not list
     *      any payload types.
     *    </para>
     *    <para>
     *     It is highly recommended to set names on the streams prior to calling this
     *     function. Unnamed streams will show up as '-' in the 'm' line, but the SDP
     *     will not be parseable with nice_agent_parse_remote_sdp() if a stream is
     *     unnamed.
     *    </para>
     *    <para>
     *      The default candidate in the SDP will be selected based on the lowest
     *      priority candidate for the first component.
     *    </para>
     *  </note>
     * 
     * <para>See also: nice_agent_set_stream_name() </para>
     * <para>See also: nice_agent_parse_remote_sdp() </para>
     * <para>See also: nice_agent_generate_local_stream_sdp() </para>
     * <para>See also: nice_agent_generate_local_candidate_sdp() </para>
     * <para>See also: nice_agent_get_default_local_candidate() </para>
     */
    generate_local_sdp(): string
    /**
     * Generate an SDP string containing the local candidates and credentials
     * for a stream.
     * 
     *  <note>
     *    <para>
     *      The SDP will not contain any codec lines and the 'm' line will not list
     *      any payload types.
     *    </para>
     *    <para>
     *     It is highly recommended to set the name of the stream prior to calling this
     *     function. Unnamed streams will show up as '-' in the 'm' line.
     *    </para>
     *    <para>
     *      The default candidate in the SDP will be selected based on the lowest
     *      priority candidate.
     *    </para>
     *  </note>
     * 
     * <para>See also: nice_agent_set_stream_name() </para>
     * <para>See also: nice_agent_parse_remote_stream_sdp() </para>
     * <para>See also: nice_agent_generate_local_sdp() </para>
     * <para>See also: nice_agent_generate_local_candidate_sdp() </para>
     * <para>See also: nice_agent_get_default_local_candidate() </para>
     * @param stream_id The ID of the stream
     * @param include_non_ice Whether or not to include non ICE specific lines (m=, c= and a=rtcp: lines)
     */
    generate_local_stream_sdp(stream_id: number, include_non_ice: boolean): string
    /**
     * Retrieves the current state of a component.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_component_state(stream_id: number, component_id: number): ComponentState
    /**
     * This helper function will return the recommended default candidate to be
     * used for non-ICE compatible clients. This will usually be the candidate
     * with the lowest priority, since it will be the longest path but the one with
     * the most chances of success.
     * <note>
     *      <para>
     *      This function is only useful in order to manually generate the
     *      local SDP
     *      </para>
     * </note>
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_default_local_candidate(stream_id: number, component_id: number): Candidate
    /**
     * Gets a #GIOStream wrapper around the given stream and component in
     * `agent`. The I/O stream will be valid for as long as `stream_id` is valid.
     * The #GInputStream and #GOutputStream implement #GPollableInputStream and
     * #GPollableOutputStream.
     * 
     * This function may only be called on reliable #NiceAgents. It is a
     * programming error to try and create an I/O stream wrapper for an
     * unreliable stream.
     * @param stream_id The ID of the stream to wrap
     * @param component_id The ID of the component to wrap
     */
    get_io_stream(stream_id: number, component_id: number): Gio.IOStream
    /**
     * Retrieve from the agent the list of all local candidates
     * for a stream's component
     * 
     *  <note>
     *    <para>
     *      The caller owns the returned GSList as well as the candidates contained
     *      within it.
     *      To get full results, the client should wait for the
     *      #NiceAgent::candidate-gathering-done signal.
     *    </para>
     *  </note>
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_local_candidates(stream_id: number, component_id: number): Candidate[]
    /**
     * Gets the local credentials for stream `stream_id`. This may be called any time
     * after creating a stream using nice_agent_add_stream().
     * 
     * An error will be returned if this is called for a non-existent stream, or if
     * either of `ufrag` or `pwd` are %NULL.
     * @param stream_id The ID of the stream
     */
    get_local_credentials(stream_id: number): [ /* returnType */ boolean, /* ufrag */ string, /* pwd */ string ]
    /**
     * Get a list of the remote candidates set on a stream's component
     * 
     *  <note>
     *    <para>
     *      The caller owns the returned GSList as well as the candidates contained
     *      within it.
     *    </para>
     *    <para>
     *      The list of remote candidates can change during processing.
     *      The client should register for the #NiceAgent::new-remote-candidate signal
     *      to get notified of new remote candidates.
     *    </para>
     *  </note>
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_remote_candidates(stream_id: number, component_id: number): Candidate[]
    /**
     * Retreive the selected candidate pair for media transmission
     * for a given stream's component.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     * @param local The local selected candidate
     * @param remote The remote selected candidate
     */
    get_selected_pair(stream_id: number, component_id: number, local: Candidate, remote: Candidate): boolean
    /**
     * Retreive the local socket associated with the selected candidate pair
     * for media transmission for a given stream's component.
     * 
     * This is useful for adding ICE support to legacy applications that already
     * have a protocol that maintains a connection. If the socket is duplicated
     * before unrefing the agent, the application can take over and continue to use
     * it. New applications are encouraged to use the built in libnice stream
     * handling instead and let libnice handle the connection maintenance.
     * 
     * Users of this method are encouraged to not use a TURN relay or any kind
     * of proxy, as in this case, the socket will not be available to the
     * application because the packets are encapsulated.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_selected_socket(stream_id: number, component_id: number): Gio.Socket | null
    /**
     * Each component can have multiple sockets, this is an API to retrieve them all
     * to be able to set properties. Most of the sockets for a component are created when
     * calling nice_agent_gather_candidates(), so this API should be called right after to
     * able to set properties on the sockets before they are used.
     * 
     * These sockets can be a mix of UDP & TCP sockets depending on the compatibility mode
     * and options that have been set.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     */
    get_sockets(stream_id: number, component_id: number): Gio.Socket[]
    /**
     * This function will return the name assigned to a stream.
     * 
     * <para>See also: nice_agent_set_stream_name()</para>
     * @param stream_id The ID of the stream to change
     */
    get_stream_name(stream_id: number): string
    /**
     * Parse an SDP string and extracts the candidate from it.
     * 
     * <para>See also: nice_agent_generate_local_candidate_sdp() </para>
     * <para>See also: nice_agent_parse_remote_sdp() </para>
     * <para>See also: nice_agent_parse_remote_stream_sdp() </para>
     * @param stream_id The ID of the stream the candidate belongs to
     * @param sdp The remote SDP to parse
     */
    parse_remote_candidate_sdp(stream_id: number, sdp: string): Candidate
    /**
     * Parse an SDP string and extracts candidates and credentials from it and sets
     * them on the agent.
     * 
     * <para>See also: nice_agent_set_stream_name() </para>
     * <para>See also: nice_agent_generate_local_sdp() </para>
     * <para>See also: nice_agent_parse_remote_stream_sdp() </para>
     * <para>See also: nice_agent_parse_remote_candidate_sdp() </para>
     * @param sdp The remote SDP to parse
     */
    parse_remote_sdp(sdp: string): number
    /**
     * Parse an SDP string representing a single stream and extracts candidates
     * and credentials from it.
     * 
     * <para>See also: nice_agent_generate_local_stream_sdp() </para>
     * <para>See also: nice_agent_parse_remote_sdp() </para>
     * <para>See also: nice_agent_parse_remote_candidate_sdp() </para>
     * @param stream_id The ID of the stream to parse
     * @param sdp The remote SDP to parse
     * @param ufrag Pointer to store the ice ufrag if non %NULL. Must be freed with g_free() after use
     * @param pwd Pointer to store the ice password if non %NULL. Must be freed with g_free() after use
     */
    parse_remote_stream_sdp(stream_id: number, sdp: string, ufrag: string, pwd: string): Candidate[]
    /**
     * Notifies the agent that the remote peer has concluded candidate gathering and
     * thus no more remote candidates are expected to arrive for `stream_id`.
     * 
     * This will allow the stream components without a successful connectivity check
     * to stop waiting for more candidates to come and finally transit into
     * %NICE_COMPONENT_STATE_FAILED.
     * 
     * Calling the function has an effect only when #NiceAgent:trickle-ice is %TRUE.
     * @param stream_id The ID of the stream
     */
    peer_candidate_gathering_done(stream_id: number): boolean
    /**
     * A single-message version of nice_agent_recv_messages().
     * @param stream_id the ID of the stream to receive on
     * @param component_id the ID of the component to receive on
     * @param cancellable a #GCancellable to allow the operation to be cancelled from another thread, or %NULL
     */
    recv(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array ]
    /**
     * Block on receiving data from the given stream/component combination on
     * `agent,` returning only once exactly `n_messages` messages have been received
     * and written into `messages,` the stream is closed by the other end or by
     * calling nice_agent_remove_stream(), or `cancellable` is cancelled.
     * 
     * Any STUN packets received will not be added to `messages;` instead,
     * they'll be passed for processing to #NiceAgent itself. Since #NiceAgent
     * does not poll for messages on its own, it's therefore essential to keep
     * calling this function for ICE connection establishment to work.
     * 
     * In the non-error case, in reliable mode, this will block until all buffers in
     * all `n_messages` have been filled with received data (i.e. `messages` is
     * treated as a large, flat array of buffers). In non-reliable mode, it will
     * block until `n_messages` messages have been received, each of which does not
     * have to fill all the buffers in its #NiceInputMessage. In the non-reliable
     * case, each #NiceInputMessage must have enough buffers to contain an entire
     * message (65536 bytes), or any excess data may be silently dropped.
     * 
     * For each received message, #NiceInputMessage::length will be set to the
     * number of valid bytes stored in the message’s buffers. The bytes are stored
     * sequentially in the buffers; there are no gaps apart from at the end of the
     * buffer array (in non-reliable mode). If non-%NULL on input,
     * #NiceInputMessage::from will have the address of the sending peer stored in
     * it. The base addresses, sizes, and number of buffers in each message will not
     * be modified in any case.
     * 
     * This must not be used in combination with nice_agent_attach_recv() on the
     * same stream/component pair.
     * 
     * If the stream/component pair doesn’t exist, or if a suitable candidate socket
     * hasn’t yet been selected for it, a %G_IO_ERROR_BROKEN_PIPE error will be
     * returned. A %G_IO_ERROR_CANCELLED error will be returned if the operation was
     * cancelled. %G_IO_ERROR_FAILED will be returned for other errors.
     * @param stream_id the ID of the stream to receive on
     * @param component_id the ID of the component to receive on
     * @param cancellable a #GCancellable to allow the operation to be cancelled from another thread, or %NULL
     */
    recv_messages(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    /**
     * Try to receive data from the given stream/component combination on `agent,`
     * without blocking. If receiving data would block, -1 is returned and
     * %G_IO_ERROR_WOULD_BLOCK is set in `error`. If any other error occurs, -1 is
     * returned and `error` is set accordingly. Otherwise, 0 is returned if (and only
     * if) `n_messages` is 0. In all other cases, the number of valid messages stored
     * in `messages` is returned, and will be greater than 0.
     * 
     * This function behaves similarly to nice_agent_recv_messages(), except that it
     * will not block on filling (in reliable mode) or receiving (in non-reliable
     * mode) exactly `n_messages` messages. In reliable mode, it will receive bytes
     * into `messages` until it would block; in non-reliable mode, it will receive
     * messages until it would block.
     * 
     * Any STUN packets received will not be added to `messages;` instead,
     * they'll be passed for processing to #NiceAgent itself. Since #NiceAgent
     * does not poll for messages on its own, it's therefore essential to keep
     * calling this function for ICE connection establishment to work.
     * 
     * As this function is non-blocking, `cancellable` is included only for parity
     * with nice_agent_recv_messages(). If `cancellable` is cancelled before this
     * function is called, a %G_IO_ERROR_CANCELLED error will be returned
     * immediately.
     * 
     * This must not be used in combination with nice_agent_attach_recv() on the
     * same stream/component pair.
     * @param stream_id the ID of the stream to receive on
     * @param component_id the ID of the component to receive on
     * @param cancellable a #GCancellable to allow the operation to be cancelled from another thread, or %NULL
     */
    recv_messages_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* messages */ InputMessage[] ]
    /**
     * A single-message version of nice_agent_recv_messages_nonblocking().
     * @param stream_id the ID of the stream to receive on
     * @param component_id the ID of the component to receive on
     * @param cancellable a #GCancellable to allow the operation to be cancelled from another thread, or %NULL
     */
    recv_nonblocking(stream_id: number, component_id: number, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* buf */ Uint8Array ]
    /**
     * Remove and free a previously created data stream from `agent`. If any I/O
     * streams have been created using nice_agent_get_io_stream(), they should be
     * closed completely using g_io_stream_close() before this is called, or they
     * will get broken pipe errors.
     * @param stream_id The ID of the stream to remove
     */
    remove_stream(stream_id: number): void
    /**
     * Restarts the session as defined in ICE draft 19. This function
     * needs to be called both when initiating (ICE spec section 9.1.1.1.
     * "ICE Restarts"), as well as when reacting (spec section 9.2.1.1.
     * "Detecting ICE Restart") to a restart.
     * 
     * If consent-freshness has been enabled on `agent,` as specified in RFC7675
     * then restarting streams will restore the local consent.
     */
    restart(): boolean
    /**
     * Restarts a single stream as defined in RFC 5245. This function
     * needs to be called both when initiating (ICE spec section 9.1.1.1.
     * "ICE Restarts"), as well as when reacting (spec section 9.2.1.1.
     * "Detecting ICE Restart") to a restart.
     * 
     * Unlike nice_agent_restart(), this applies to a single stream. It also
     * does not generate a new tie breaker.
     * 
     * If consent-freshness has been enabled on `agent,` as specified in RFC7675
     * then restart `stream_id` will restore the local consent for that stream.
     * @param stream_id The ID of the stream
     */
    restart_stream(stream_id: number): boolean
    /**
     * Sends a data payload over a stream's component.
     * 
     *  <note>
     *    <para>
     *      Component state MUST be NICE_COMPONENT_STATE_READY, or as a special case,
     *      in any state if component was in READY state before and was then restarted
     *    </para>
     *    <para>
     *    In reliable mode, the -1 error value means either that you are not yet
     *    connected or that the send buffer is full (equivalent to EWOULDBLOCK).
     *    In both cases, you simply need to wait for the
     *    #NiceAgent::reliable-transport-writable signal to be fired before resending
     *    the data.
     *    </para>
     *    <para>
     *    In non-reliable mode, it will virtually never happen with UDP sockets, but
     *    it might happen if the active candidate is a TURN-TCP connection that got
     *    disconnected.
     *    </para>
     *    <para>
     *    In both reliable and non-reliable mode, a -1 error code could also mean that
     *    the stream_id and/or component_id are invalid.
     *    </para>
     * </note>
     * @param stream_id The ID of the stream to send to
     * @param component_id The ID of the component to send to
     * @param len The length of the buffer to send
     * @param buf The buffer of data to send
     */
    send(stream_id: number, component_id: number, len: number, buf: string): number
    /**
     * Sends multiple messages on the socket identified by the given
     * stream/component pair. Transmission is non-blocking, so a
     * %G_IO_ERROR_WOULD_BLOCK error may be returned if the send buffer is full.
     * 
     * As with nice_agent_send(), the given component must be in
     * %NICE_COMPONENT_STATE_READY or, as a special case, in any state if it was
     * previously ready and was then restarted.
     * 
     * On success, the number of messages written to the socket will be returned,
     * which may be less than `n_messages` if transmission would have blocked
     * part-way through. Zero will be returned if `n_messages` is zero, or if
     * transmission would have blocked on the first message.
     * 
     * In reliable mode, it is instead recommended to use
     * nice_agent_send().  The return value can be less than `n_messages`
     * or 0 even if it is still possible to send a partial message. In
     * this case, "nice-agent-writable" will never be triggered, so the
     * application would have to use nice_agent_sent() to fill the buffer or have
     * to retry sending at a later point.
     * 
     * On failure, -1 will be returned and `error` will be set. If the #NiceAgent is
     * reliable and the socket is not yet connected, %G_IO_ERROR_BROKEN_PIPE will be
     * returned; if the write buffer is full, %G_IO_ERROR_WOULD_BLOCK will be
     * returned. In both cases, wait for the #NiceAgent::reliable-transport-writable
     * signal before trying again. If the given `stream_id` or `component_id` are
     * invalid or not yet connected, %G_IO_ERROR_BROKEN_PIPE will be returned.
     * %G_IO_ERROR_FAILED will be returned for other errors.
     * @param stream_id the ID of the stream to send to
     * @param component_id the ID of the component to send to
     * @param messages array of messages to send, of at least `n_messages` entries in length
     * @param cancellable a #GCancellable to cancel the operation from another thread, or %NULL
     */
    send_messages_nonblocking(stream_id: number, component_id: number, messages: OutputMessage[], cancellable: Gio.Cancellable | null): number
    /**
     * Sets the local credentials for stream `stream_id`.
     * 
     *  <note>
     *    <para>
     *      This is only effective before ICE negotiation has started.
     *    </para>
     *  </note>
     * 
     * Since 0.1.11
     * @param stream_id The ID of the stream
     * @param ufrag nul-terminated string containing an ICE username fragment    (length must be between 22 and 256 chars)
     * @param pwd nul-terminated string containing an ICE password    (length must be between 4 and 256 chars)
     */
    set_local_credentials(stream_id: number, ufrag: string, pwd: string): boolean
    /**
     * Sets a preferred port range for allocating host candidates.
     * <para>
     * If a local host candidate cannot be created on that port
     * range, then the nice_agent_gather_candidates() call will fail.
     * </para>
     * <para>
     * This MUST be called before nice_agent_gather_candidates()
     * </para>
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     * @param min_port The minimum port to use
     * @param max_port The maximum port to use
     */
    set_port_range(stream_id: number, component_id: number, min_port: number, max_port: number): void
    /**
     * Sets the settings for using a relay server during the candidate discovery.
     * This may be called multiple times to add multiple relay servers to the
     * discovery process; one TCP and one UDP, for example.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     * @param server_ip The IP address of the TURN server
     * @param server_port The port of the TURN server
     * @param username The TURN username to use for the allocate
     * @param password The TURN password to use for the allocate
     * @param type The type of relay to use
     */
    set_relay_info(stream_id: number, component_id: number, server_ip: string, server_port: number, username: string, password: string, type: RelayType): boolean
    /**
     * Sets, adds or updates the remote candidates for a component of a stream.
     * 
     *  <note>
     *    <para>
     *     NICE_AGENT_MAX_REMOTE_CANDIDATES is the absolute maximum limit
     *     for remote candidates.
     *    </para>
     *    <para>
     *    You must first call nice_agent_gather_candidates() and wait for the
     *    #NiceAgent::candidate-gathering-done signale before
     *    calling nice_agent_set_remote_candidates()
     *    </para>
     *    <para>
     *     Since 0.1.3, there is no need to wait for the candidate-gathering-done signal.
     *     Remote candidates can be set even while gathering local candidates.
     *     Newly discovered local candidates will automatically be paired with
     *     existing remote candidates.
     *    </para>
     *  </note>
     * @param stream_id The ID of the stream the candidates are for
     * @param component_id The ID of the component the candidates are for
     * @param candidates a #GSList of #NiceCandidate items describing each candidate to add
     */
    set_remote_candidates(stream_id: number, component_id: number, candidates: Candidate[]): number
    /**
     * Sets the remote credentials for stream `stream_id`.
     * 
     *  <note>
     *    <para>
     *      Stream credentials do not override per-candidate credentials if set
     *    </para>
     *    <para>
     *      Due to the native of peer-reflexive candidates, any agent using a per-stream
     *      credentials (RFC5245, WLM2009, OC2007R2 and DRAFT19) instead of
     *      per-candidate credentials (GOOGLE, MSN, OC2007), must
     *      use the nice_agent_set_remote_credentials() API instead of setting the
     *      username and password on the candidates.
     *    </para>
     *  </note>
     * @param stream_id The ID of the stream
     * @param ufrag nul-terminated string containing an ICE username fragment    (length must be between 22 and 256 chars)
     * @param pwd nul-terminated string containing an ICE password    (length must be between 4 and 256 chars)
     */
    set_remote_credentials(stream_id: number, ufrag: string, pwd: string): boolean
    /**
     * Sets the selected candidate pair for media transmission
     * for a given stream's component. Calling this function will
     * disable all further ICE processing (connection check,
     * state machine updates, etc). Note that keepalives will
     * continue to be sent.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     * @param lfoundation The local foundation of the candidate to use
     * @param rfoundation The remote foundation of the candidate to use
     */
    set_selected_pair(stream_id: number, component_id: number, lfoundation: string, rfoundation: string): boolean
    /**
     * Sets the selected remote candidate for media transmission
     * for a given stream's component. This is used to force the selection of
     * a specific remote candidate even when connectivity checks are failing
     * (e.g. non-ICE compatible candidates).
     * Calling this function will disable all further ICE processing
     * (connection check, state machine updates, etc). Note that keepalives will
     * continue to be sent.
     * @param stream_id The ID of the stream
     * @param component_id The ID of the component
     * @param candidate The #NiceCandidate to select
     */
    set_selected_remote_candidate(stream_id: number, component_id: number, candidate: Candidate): boolean
    /**
     * This function will set the value of the SOFTWARE attribute to be added to
     * STUN requests, responses and error responses sent during connectivity checks.
     * <para>
     * The SOFTWARE attribute will only be added in the #NICE_COMPATIBILITY_RFC5245
     * and #NICE_COMPATIBILITY_WLM2009 compatibility modes.
     * 
     * </para>
     * <note>
     *      <para>
     *        The `software` argument will be appended with the libnice version before
     *        being sent.
     *      </para>
     *      <para>
     *        The `software` argument must be in UTF-8 encoding and only the first
     *        128 characters will be sent.
     *      </para>
     *    </note>
     * @param software The value of the SOFTWARE attribute to add.
     */
    set_software(software: string): void
    /**
     * This function will assign a media type to a stream. The only values
     * that can be used to produce a valid SDP are: "audio", "video",
     * "text", "application", "image" and "message".
     * 
     * This is only useful when parsing and generating an SDP of the
     * candidates.
     * 
     * <para>See also: nice_agent_generate_local_sdp()</para>
     * <para>See also: nice_agent_parse_remote_sdp()</para>
     * <para>See also: nice_agent_get_stream_name()</para>
     * @param stream_id The ID of the stream to change
     * @param name The new name of the stream or %NULL
     */
    set_stream_name(stream_id: number, name: string): boolean
    /**
     * Sets the IP_TOS and/or IPV6_TCLASS field on the stream's sockets' options
     * @param stream_id The ID of the stream
     * @param tos The ToS to set
     */
    set_stream_tos(stream_id: number, tos: number): void

    // Own signals of Nice-0.1.Nice.Agent

    connect(sigName: "candidate-gathering-done", callback: Agent_CandidateGatheringDoneSignalCallback): number
    connect_after(sigName: "candidate-gathering-done", callback: Agent_CandidateGatheringDoneSignalCallback): number
    emit(sigName: "candidate-gathering-done", stream_id: number, ...args: any[]): void
    connect(sigName: "component-state-changed", callback: Agent_ComponentStateChangedSignalCallback): number
    connect_after(sigName: "component-state-changed", callback: Agent_ComponentStateChangedSignalCallback): number
    emit(sigName: "component-state-changed", stream_id: number, component_id: number, state: number, ...args: any[]): void
    connect(sigName: "initial-binding-request-received", callback: Agent_InitialBindingRequestReceivedSignalCallback): number
    connect_after(sigName: "initial-binding-request-received", callback: Agent_InitialBindingRequestReceivedSignalCallback): number
    emit(sigName: "initial-binding-request-received", stream_id: number, ...args: any[]): void
    connect(sigName: "new-candidate", callback: Agent_NewCandidateSignalCallback): number
    connect_after(sigName: "new-candidate", callback: Agent_NewCandidateSignalCallback): number
    emit(sigName: "new-candidate", stream_id: number, component_id: number, foundation: string, ...args: any[]): void
    connect(sigName: "new-candidate-full", callback: Agent_NewCandidateFullSignalCallback): number
    connect_after(sigName: "new-candidate-full", callback: Agent_NewCandidateFullSignalCallback): number
    emit(sigName: "new-candidate-full", candidate: Candidate, ...args: any[]): void
    connect(sigName: "new-remote-candidate", callback: Agent_NewRemoteCandidateSignalCallback): number
    connect_after(sigName: "new-remote-candidate", callback: Agent_NewRemoteCandidateSignalCallback): number
    emit(sigName: "new-remote-candidate", stream_id: number, component_id: number, foundation: string, ...args: any[]): void
    connect(sigName: "new-remote-candidate-full", callback: Agent_NewRemoteCandidateFullSignalCallback): number
    connect_after(sigName: "new-remote-candidate-full", callback: Agent_NewRemoteCandidateFullSignalCallback): number
    emit(sigName: "new-remote-candidate-full", candidate: Candidate, ...args: any[]): void
    connect(sigName: "new-selected-pair", callback: Agent_NewSelectedPairSignalCallback): number
    connect_after(sigName: "new-selected-pair", callback: Agent_NewSelectedPairSignalCallback): number
    emit(sigName: "new-selected-pair", stream_id: number, component_id: number, lfoundation: string, rfoundation: string, ...args: any[]): void
    connect(sigName: "new-selected-pair-full", callback: Agent_NewSelectedPairFullSignalCallback): number
    connect_after(sigName: "new-selected-pair-full", callback: Agent_NewSelectedPairFullSignalCallback): number
    emit(sigName: "new-selected-pair-full", stream_id: number, component_id: number, lcandidate: Candidate, rcandidate: Candidate, ...args: any[]): void
    connect(sigName: "reliable-transport-writable", callback: Agent_ReliableTransportWritableSignalCallback): number
    connect_after(sigName: "reliable-transport-writable", callback: Agent_ReliableTransportWritableSignalCallback): number
    emit(sigName: "reliable-transport-writable", stream_id: number, component_id: number, ...args: any[]): void
    connect(sigName: "streams-removed", callback: Agent_StreamsRemovedSignalCallback): number
    connect_after(sigName: "streams-removed", callback: Agent_StreamsRemovedSignalCallback): number
    emit(sigName: "streams-removed", stream_ids: number[], ...args: any[]): void

    // Class property signals of Nice-0.1.Nice.Agent

    connect(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytestream-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytestream-tcp", ...args: any[]): void
    connect(sigName: "notify::compatibility", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compatibility", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compatibility", ...args: any[]): void
    connect(sigName: "notify::consent-freshness", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consent-freshness", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consent-freshness", ...args: any[]): void
    connect(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::controlling-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::controlling-mode", ...args: any[]): void
    connect(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-relay", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-relay", ...args: any[]): void
    connect(sigName: "notify::full-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::full-mode", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::full-mode", ...args: any[]): void
    connect(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-tcp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ice-tcp", ...args: any[]): void
    connect(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-trickle", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ice-trickle", ...args: any[]): void
    connect(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ice-udp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ice-udp", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keepalive-conncheck", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keepalive-conncheck", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::main-context", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-connectivity-checks", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-connectivity-checks", ...args: any[]): void
    connect(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-ip", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-ip", ...args: any[]): void
    connect(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-password", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-password", ...args: any[]): void
    connect(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-port", ...args: any[]): void
    connect(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-type", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-type", ...args: any[]): void
    connect(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::proxy-username", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::proxy-username", ...args: any[]): void
    connect(sigName: "notify::reliable", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reliable", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reliable", ...args: any[]): void
    connect(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-initial-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-initial-timeout", ...args: any[]): void
    connect(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-max-retransmissions", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-max-retransmissions", ...args: any[]): void
    connect(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-pacing-timer", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-pacing-timer", ...args: any[]): void
    connect(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-reliable-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-reliable-timeout", ...args: any[]): void
    connect(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-server", ...args: any[]): void
    connect(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stun-server-port", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stun-server-port", ...args: any[]): void
    connect(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-renomination", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-renomination", ...args: any[]): void
    connect(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp", ...args: any[]): void
    connect(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::upnp-timeout", callback: (($obj: Agent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::upnp-timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #NiceAgent is the main GObject of the libnice library and represents
 * the ICE agent.
 * @class 
 */
class Agent extends GObject.Object {

    // Own properties of Nice-0.1.Nice.Agent

    static name: string
    static $gtype: GObject.GType<Agent>

    // Constructors of Nice-0.1.Nice.Agent

    constructor(config?: Agent_ConstructProps) 
    /**
     * Create a new #NiceAgent.
     * The returned object must be freed with g_object_unref()
     * @constructor 
     * @param ctx The Glib Mainloop Context to use for timers
     * @param compat The compatibility mode of the agent
     */
    constructor(ctx: GLib.MainContext, compat: Compatibility) 
    /**
     * Create a new #NiceAgent.
     * The returned object must be freed with g_object_unref()
     * @constructor 
     * @param ctx The Glib Mainloop Context to use for timers
     * @param compat The compatibility mode of the agent
     */
    static new(ctx: GLib.MainContext, compat: Compatibility): Agent
    /**
     * Create a new #NiceAgent with parameters that must be be defined at
     * construction time.
     * The returned object must be freed with g_object_unref()
     * <para> See also: #NiceNominationMode and #NiceAgentOption</para>
     * @constructor 
     * @param ctx The Glib Mainloop Context to use for timers
     * @param compat The compatibility mode of the agent
     * @param flags Flags to set the properties
     */
    static new_full(ctx: GLib.MainContext, compat: Compatibility, flags: AgentOption): Agent
    /**
     * Create a new #NiceAgent in reliable mode. If the connectivity is established
     * through ICE-UDP, then a #PseudoTcpSocket will be transparently used to
     * ensure reliability of the messages.
     * The returned object must be freed with g_object_unref()
     * <para> See also: #NiceAgent::reliable-transport-writable </para>
     * @constructor 
     * @param ctx The Glib Mainloop Context to use for timers
     * @param compat The compatibility mode of the agent
     */
    static new_reliable(ctx: GLib.MainContext, compat: Compatibility): Agent
    _init(config?: Agent_ConstructProps): void
}

interface PseudoTcpSocket_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Nice-0.1.Nice.PseudoTcpSocket

    ack_delay?: number | null
    callbacks?: object | null
    conversation?: number | null
    no_delay?: boolean | null
    rcv_buf?: number | null
    snd_buf?: number | null
    /**
     * Whether to support the FIN–ACK extension to the pseudo-TCP protocol for
     * this socket. The extension is only compatible with other libnice pseudo-TCP
     * stacks, and not with Jingle pseudo-TCP stacks. If enabled, support is
     * negotiatied on connection setup, so it is safe for a #PseudoTcpSocket with
     * support enabled to be used with one with it disabled, or with a Jingle
     * pseudo-TCP socket which doesn’t support it at all.
     * 
     * Support is enabled by default.
     */
    support_fin_ack?: boolean | null
}

interface PseudoTcpSocket {

    // Own properties of Nice-0.1.Nice.PseudoTcpSocket

    ack_delay: number
    callbacks: object
    readonly conversation: number
    no_delay: boolean
    rcv_buf: number
    snd_buf: number
    readonly state: number
    /**
     * Whether to support the FIN–ACK extension to the pseudo-TCP protocol for
     * this socket. The extension is only compatible with other libnice pseudo-TCP
     * stacks, and not with Jingle pseudo-TCP stacks. If enabled, support is
     * negotiatied on connection setup, so it is safe for a #PseudoTcpSocket with
     * support enabled to be used with one with it disabled, or with a Jingle
     * pseudo-TCP socket which doesn’t support it at all.
     * 
     * Support is enabled by default.
     */
    readonly support_fin_ack: boolean

    // Owm methods of Nice-0.1.Nice.PseudoTcpSocket

    /**
     * Returns if there is space in the send buffer to send any data.
     */
    can_send(): boolean
    /**
     * Close the socket for sending. If `force` is set to %FALSE, the socket will
     * finish sending pending data before closing. If it is set to %TRUE, the socket
     * will discard pending data and close the connection immediately (sending a TCP
     * RST segment).
     * 
     * The socket will be closed in both directions – sending and receiving – and
     * any pending received data must be read before calling this function, by
     * calling pseudo_tcp_socket_recv() until it blocks. If any pending data is in
     * the receive buffer when pseudo_tcp_socket_close() is called, a TCP RST
     * segment will be sent to the peer to notify it of the data loss.
     * 
     *  <note>
     *    <para>
     *      The %PseudoTcpCallbacks:PseudoTcpClosed callback will not be called once
     *      the socket gets closed. It is only used for aborted connection.
     *      Instead, the socket gets closed when the pseudo_tcp_socket_get_next_clock()
     *      function returns FALSE.
     *    </para>
     *  </note>
     * 
     * <para> See also: pseudo_tcp_socket_get_next_clock() </para>
     * @param force %TRUE to close the socket forcefully, %FALSE to close it gracefully
     */
    close(force: boolean): void
    /**
     * Connects the #PseudoTcpSocket to the peer with the same conversation id.
     * The connection will only be successful after the
     * %PseudoTcpCallbacks:PseudoTcpOpened callback is called
     */
    // TODO fix conflict: connect(): boolean
    /**
     * Gets the number of bytes of data in the buffer that can be read without
     * receiving more packets from the network.
     */
    get_available_bytes(): number
    /**
     * Gets the number of bytes of space available in the transmission buffer.
     */
    get_available_send_space(): number
    /**
     * Return the last encountered error.
     * 
     *  <note>
     *    <para>
     *      The return value can be :
     *      <para>
     *        EINVAL (for pseudo_tcp_socket_connect()).
     *      </para>
     *      <para>
     *        EWOULDBLOCK or ENOTCONN (for pseudo_tcp_socket_recv() and
     *        pseudo_tcp_socket_send()).
     *      </para>
     *    </para>
     *  </note>
     */
    get_error(): number
    /**
     * Call this to determine the timeout needed before the next time call
     * to pseudo_tcp_socket_notify_clock() should be made.
     * @param timeout A pointer to be filled with the new timeout.
     */
    get_next_clock(timeout: number): boolean
    /**
     * Gets whether the socket is closed, with the shutdown handshake completed,
     * and both peers no longer able to read or write data to the connection.
     */
    is_closed(): boolean
    /**
     * Gets whether the socket has been closed on the remote peer’s side of the
     * connection (i.e. whether pseudo_tcp_socket_close() has been called there).
     * This is guaranteed to return %TRUE if pseudo_tcp_socket_is_closed() returns
     * %TRUE. It will not return %TRUE after pseudo_tcp_socket_close() is called
     * until a FIN segment is received from the remote peer.
     */
    is_closed_remotely(): boolean
    /**
     * Start the processing of receiving data, pending data or syn/acks.
     * Call this based on timeout value returned by
     * pseudo_tcp_socket_get_next_clock().
     * It's ok to call this too frequently.
     * 
     * <para> See also: pseudo_tcp_socket_get_next_clock() </para>
     */
    notify_clock(): void
    /**
     * Notify the #PseudoTcpSocket that a new message has arrived, and enqueue the
     * data in its buffers to the #PseudoTcpSocket’s receive buffer.
     * @param message A #NiceInputMessage containing the received data.
     */
    notify_message(message: InputMessage): boolean
    /**
     * Set the MTU of the socket
     * @param mtu The new MTU of the socket
     */
    notify_mtu(mtu: number): void
    /**
     * Notify the #PseudoTcpSocket when a new packet arrives
     * @param buffer The buffer containing the received data
     * @param len The length of `buffer`
     */
    notify_packet(buffer: string, len: number): boolean
    /**
     * Receive data from the socket.
     * 
     *  <note>
     *    <para>
     *      Only call this on the %PseudoTcpCallbacks:PseudoTcpReadable callback.
     *    </para>
     *    <para>
     *      This function should be called in a loop. If this function does not
     *      return -1 with EWOULDBLOCK as the error, the
     *      %PseudoTcpCallbacks:PseudoTcpReadable callback will not be called again.
     *    </para>
     *  </note>
     * @param buffer The buffer to fill with received data
     * @param len The length of `buffer`
     */
    recv(buffer: string, len: number): number
    /**
     * Send data on the socket.
     * 
     *  <note>
     *    <para>
     *      If this function return -1 with EWOULDBLOCK as the error, or if the return
     *      value is lower than `len,` then the %PseudoTcpCallbacks:PseudoTcpWritable
     *      callback will be called when the socket will become writable.
     *    </para>
     *  </note>
     * @param buffer The buffer with data to send
     * @param len The length of `buffer`
     */
    send(buffer: string, len: number): number
    /**
     * Sets the current monotonic time to be used by the TCP socket when calculating
     * timeouts and expiry times. If this function is not called, or is called with
     * `current_time` as zero, g_get_monotonic_time() will be used. Otherwise, the
     * specified `current_time` will be used until it is updated by calling this
     * function again.
     * 
     * This function is intended for testing only, and should not be used in
     * production code.
     * @param current_time Current monotonic time, in milliseconds; or zero to use the system monotonic clock.
     */
    set_time(current_time: number): void
    /**
     * Shut down sending, receiving, or both on the socket, depending on the value
     * of `how`. The behaviour of pseudo_tcp_socket_send() and
     * pseudo_tcp_socket_recv() will immediately change after this function returns
     * (depending on the value of `how)`, though the socket may continue to process
     * network traffic in the background even if sending or receiving data is
     * forbidden.
     * 
     * This is equivalent to the POSIX shutdown() function. Setting `how` to
     * %PSEUDO_TCP_SHUTDOWN_RDWR is equivalent to calling pseudo_tcp_socket_close().
     * @param how The directions of the connection to shut down.
     */
    shutdown(how: PseudoTcpShutdown): void

    // Class property signals of Nice-0.1.Nice.PseudoTcpSocket

    connect(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ack-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ack-delay", ...args: any[]): void
    connect(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::callbacks", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::callbacks", ...args: any[]): void
    connect(sigName: "notify::conversation", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::conversation", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::conversation", ...args: any[]): void
    connect(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-delay", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-delay", ...args: any[]): void
    connect(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rcv-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rcv-buf", ...args: any[]): void
    connect(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snd-buf", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snd-buf", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::support-fin-ack", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::support-fin-ack", callback: (($obj: PseudoTcpSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::support-fin-ack", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #PseudoTcpSocket is the GObject implementing the Pseudo TCP Socket
 * @class 
 */
class PseudoTcpSocket extends GObject.Object {

    // Own properties of Nice-0.1.Nice.PseudoTcpSocket

    static name: string
    static $gtype: GObject.GType<PseudoTcpSocket>

    // Constructors of Nice-0.1.Nice.PseudoTcpSocket

    constructor(config?: PseudoTcpSocket_ConstructProps) 
    /**
     * Creates a new #PseudoTcpSocket for the specified conversation
     * 
     *  <note>
     *    <para>
     *      The `callbacks` must be non-NULL, in order to get notified of packets the
     *      socket needs to send.
     *    </para>
     *    <para>
     *      If the `callbacks` structure was dynamicly allocated, it can be freed
     *      after the call `pseudo_tcp_socket_new`
     *    </para>
     *  </note>
     * @constructor 
     * @param conversation The conversation id for the socket.
     * @param callbacks A pointer to the #PseudoTcpCallbacks structure for getting notified of the #PseudoTcpSocket events.
     */
    constructor(conversation: number, callbacks: PseudoTcpCallbacks) 
    /**
     * Creates a new #PseudoTcpSocket for the specified conversation
     * 
     *  <note>
     *    <para>
     *      The `callbacks` must be non-NULL, in order to get notified of packets the
     *      socket needs to send.
     *    </para>
     *    <para>
     *      If the `callbacks` structure was dynamicly allocated, it can be freed
     *      after the call `pseudo_tcp_socket_new`
     *    </para>
     *  </note>
     * @constructor 
     * @param conversation The conversation id for the socket.
     * @param callbacks A pointer to the #PseudoTcpCallbacks structure for getting notified of the #PseudoTcpSocket events.
     */
    static new(conversation: number, callbacks: PseudoTcpCallbacks): PseudoTcpSocket
    _init(config?: PseudoTcpSocket_ConstructProps): void
}

interface Address {

    // Owm methods of Nice-0.1.Nice.Address

    /**
     * Fills the sockaddr structure `sin` with the address contained in `addr`
     * @param sin The sockaddr to fill
     */
    copy_to_sockaddr(sin: object | null): void
    /**
     * Compares two #NiceAddress structures to see if they contain the same address
     * and the same port.
     * @param b Second #NiceAddress to compare
     */
    equal(b: Address): boolean
    /**
     * Compares two #NiceAddress structures to see if they contain the same address,
     * ignoring the port.
     * @param b Second #NiceAddress to compare
     */
    equal_no_port(b: Address): boolean
    /**
     * Frees a #NiceAddress created with nice_address_new() or nice_address_dup()
     */
    free(): void
    /**
     * Retreive the port of `addr`
     */
    get_port(): number
    /**
     * Initialize a #NiceAddress into an undefined address
     */
    init(): void
    /**
     * Returns the IP version of the address
     */
    ip_version(): number
    /**
     * Verifies if the address in `addr` is a private address or not
     */
    is_private(): boolean
    /**
     * Validate whether the #NiceAddress `addr` is a valid IPv4 or IPv6 address
     */
    is_valid(): boolean
    /**
     * Sets an IPv4 or IPv6 address from the sockaddr structure `sin`
     * @param sin The sockaddr to set
     */
    set_from_sockaddr(sin: object | null): void
    /**
     * Sets an IPv4 or IPv6 address from the string `str`
     * @param str The string to set
     */
    set_from_string(str: string): boolean
    /**
     * Set `addr` to an IPv4 address using the data from `addr_ipv4`
     * 
     *  <note>
     *   <para>
     *    This function will reset the port to 0, so make sure you call it before
     *    nice_address_set_port()
     *   </para>
     *  </note>
     * @param addr_ipv4 The IPv4 address
     */
    set_ipv4(addr_ipv4: number): void
    /**
     * Set `addr` to an IPv6 address using the data from `addr_ipv6`
     * 
     *  <note>
     *   <para>
     *    This function will reset the port to 0, so make sure you call it before
     *    nice_address_set_port()
     *   </para>
     *  </note>
     * @param addr_ipv6 The IPv6 address
     */
    set_ipv6(addr_ipv6: number): void
    /**
     * Set the port of `addr` to `port`
     * @param port The port to set
     */
    set_port(port: number): void
    /**
     * Transforms the address `addr` into a human readable string
     * @param dst The string to fill
     */
    to_string(dst: string): void
}

/**
 * The #NiceAddress structure that represents an IPv4 or IPv6 address.
 * @record 
 */
class Address {

    // Own properties of Nice-0.1.Nice.Address

    static name: string
}

interface AgentClass {

    // Own fields of Nice-0.1.Nice.AgentClass

    parent_class: GObject.ObjectClass
}

abstract class AgentClass {

    // Own properties of Nice-0.1.Nice.AgentClass

    static name: string
}

interface Candidate {

    // Own fields of Nice-0.1.Nice.Candidate

    /**
     * The type of candidate
     * @field 
     */
    type: CandidateType
    /**
     * The transport being used for the candidate
     * @field 
     */
    transport: CandidateTransport
    /**
     * The #NiceAddress of the candidate
     * @field 
     */
    addr: Address
    /**
     * The #NiceAddress of the base address used by the candidate
     * @field 
     */
    base_addr: Address
    /**
     * The priority of the candidate <emphasis> see note </emphasis>
     * @field 
     */
    priority: number
    /**
     * The ID of the stream to which belongs the candidate
     * @field 
     */
    stream_id: number
    /**
     * The ID of the component to which belongs the candidate
     * @field 
     */
    component_id: number
    /**
     * The foundation of the candidate
     * @field 
     */
    foundation: number[]
    /**
     * The candidate-specific username to use (overrides the one set
     * by nice_agent_set_local_credentials() or nice_agent_set_remote_credentials())
     * @field 
     */
    username: string
    /**
     * The candidate-specific password to use (overrides the one set
     * by nice_agent_set_local_credentials() or nice_agent_set_remote_credentials())
     * @field 
     */
    password: string

    // Owm methods of Nice-0.1.Nice.Candidate

    /**
     * Makes a copy of a #NiceCandidate
     */
    copy(): Candidate
    /**
     * Verifies that the candidates point to the same place, meaning they have
     * the same transport and the same address. It ignores all other aspects.
     * @param candidate2 A candidate
     */
    equal_target(candidate2: Candidate): boolean
    /**
     * Frees a #NiceCandidate
     */
    free(): void
}

/**
 * A structure to represent an ICE candidate
 *  <note>
 *    <para>
 *    The `priority` is an integer as specified in the ICE draft 19. If you are
 *    using the MSN or the GOOGLE compatibility mode (which are based on ICE
 *    draft 6, which uses a floating point qvalue as priority), then the `priority`
 *    value will represent the qvalue multiplied by 1000.
 *    </para>
 *  </note>
 * @record 
 */
class Candidate {

    // Own properties of Nice-0.1.Nice.Candidate

    static name: string

    // Constructors of Nice-0.1.Nice.Candidate

    /**
     * Creates a new candidate. Must be freed with nice_candidate_free()
     * @constructor 
     * @param type The #NiceCandidateType of the candidate to create
     */
    constructor(type: CandidateType) 
    /**
     * Creates a new candidate. Must be freed with nice_candidate_free()
     * @constructor 
     * @param type The #NiceCandidateType of the candidate to create
     */
    static new(type: CandidateType): Candidate
    /**
     * Useful for debugging functions, just returns a static string with the
     * candidate transport.
     * @param transport a #NiceCandidateTransport
     */
    static transport_to_string(transport: CandidateTransport): string
    /**
     * Useful for debugging functions, just returns a static string with the
     * candidate type.
     * @param type a #NiceCandidateType
     */
    static type_to_string(type: CandidateType): string
}

interface InputMessage {

    // Own fields of Nice-0.1.Nice.InputMessage

    /**
     * unowned array of #GInputVector buffers to
     * store data in for this message
     * @field 
     */
    buffers: Gio.InputVector[]
    /**
     * number of #GInputVectors in `buffers,` or -1 to indicate `buffers`
     * is %NULL-terminated
     * @field 
     */
    n_buffers: number
    /**
     * return location to store the address of the peer who
     * transmitted the message, or %NULL
     * @field 
     */
    from: Address
    /**
     * total number of valid bytes contiguously stored in `buffers`
     * @field 
     */
    length: number
}

/**
 * Represents a single message received off the network. For reliable
 * connections, this is essentially just an array of buffers (specifically,
 * `from` can be ignored). for non-reliable connections, it represents a single
 * packet as received from the OS.
 * 
 * `n_buffers` may be -1 to indicate that `buffers` is terminated by a
 * #GInputVector with a %NULL buffer pointer.
 * 
 * By providing arrays of #NiceInputMessages to functions like
 * nice_agent_recv_messages(), multiple messages may be received with a single
 * call, which is more efficient than making multiple calls in a loop. In this
 * manner, nice_agent_recv_messages() is analogous to recvmmsg(); and
 * #NiceInputMessage to struct mmsghdr.
 * @record 
 */
class InputMessage {

    // Own properties of Nice-0.1.Nice.InputMessage

    static name: string
}

interface OutputMessage {

    // Own fields of Nice-0.1.Nice.OutputMessage

    /**
     * unowned array of #GOutputVector buffers
     * which contain data to transmit for this message
     * @field 
     */
    buffers: Gio.OutputVector[]
    /**
     * number of #GOutputVectors in `buffers,` or -1 to indicate `buffers`
     * is %NULL-terminated
     * @field 
     */
    n_buffers: number
}

/**
 * Represents a single message to transmit on the network. For
 * reliable connections, this is essentially just an array of
 * buffer. for non-reliable connections, it represents a single packet
 * to send to the OS.
 * 
 * `n_buffers` may be -1 to indicate that `buffers` is terminated by a
 * #GOutputVector with a %NULL buffer pointer.
 * 
 * By providing arrays of #NiceOutputMessages to functions like
 * nice_agent_send_messages_nonblocking(), multiple messages may be transmitted
 * with a single call, which is more efficient than making multiple calls in a
 * loop. In this manner, nice_agent_send_messages_nonblocking() is analogous to
 * sendmmsg(); and #NiceOutputMessage to struct mmsghdr.
 * @record 
 */
class OutputMessage {

    // Own properties of Nice-0.1.Nice.OutputMessage

    static name: string
}

interface PseudoTcpCallbacks {

    // Own fields of Nice-0.1.Nice.PseudoTcpCallbacks

    /**
     * A user defined pointer to be passed to the callbacks
     * @field 
     */
    user_data: object
    PseudoTcpOpened: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpReadable: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpWritable: (tcp: PseudoTcpSocket, data: object) => void
    PseudoTcpClosed: (tcp: PseudoTcpSocket, error: number, data: object) => void
    WritePacket: (tcp: PseudoTcpSocket, buffer: string, len: number, data: object) => PseudoTcpWriteResult
}

/**
 * A structure containing callbacks functions that will be called by the
 * #PseudoTcpSocket when some events happen.
 * <para> See also: #PseudoTcpWriteResult </para>
 * @record 
 */
class PseudoTcpCallbacks {

    // Own properties of Nice-0.1.Nice.PseudoTcpCallbacks

    static name: string
}

interface PseudoTcpSocketClass {
}

abstract class PseudoTcpSocketClass {

    // Own properties of Nice-0.1.Nice.PseudoTcpSocketClass

    static name: string
}

}
export default Nice;