
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nm-1.0-ambient.d.ts';
import './nm-1.0-import.d.ts';
/**
 * NM-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace NM {

/**
 * Indicates the 802.11 mode an access point or device is currently in.
 */
enum __80211Mode {
    /**
     * the device or access point mode is unknown
     */
    UNKNOWN,
    /**
     * for both devices and access point objects, indicates
     *   the object is part of an Ad-Hoc 802.11 network without a central
     *   coordinating access point.
     */
    ADHOC,
    /**
     * the device or access point is in infrastructure mode.
     *   For devices, this indicates the device is an 802.11 client/station.  For
     *   access point objects, this indicates the object is an access point that
     *   provides connectivity to clients.
     */
    INFRA,
    /**
     * the device is an access point/hotspot.  Not valid for
     *   access point objects; used only for hotspot mode on the local machine.
     */
    AP,
    /**
     * the device is a 802.11s mesh point. Since: 1.20.
     */
    MESH,
}
/**
 * #NMActiveConnectionState values indicate the state of a connection to a
 * specific network while it is starting, connected, or disconnecting from that
 * network.
 */
enum ActiveConnectionState {
    /**
     * the state of the connection is unknown
     */
    UNKNOWN,
    /**
     * a network connection is being prepared
     */
    ACTIVATING,
    /**
     * there is a connection to the network
     */
    ACTIVATED,
    /**
     * the network connection is being
     *   torn down and cleaned up
     */
    DEACTIVATING,
    /**
     * the network connection is disconnected
     *   and will be removed
     */
    DEACTIVATED,
}
/**
 * Active connection state reasons.
 */
enum ActiveConnectionStateReason {
    /**
     * The reason for the active connection
     *   state change is unknown.
     */
    UNKNOWN,
    /**
     * No reason was given for the active
     *   connection state change.
     */
    NONE,
    /**
     * The active connection changed
     *   state because the user disconnected it.
     */
    USER_DISCONNECTED,
    /**
     * The active connection
     *   changed state because the device it was using was disconnected.
     */
    DEVICE_DISCONNECTED,
    /**
     * The service providing the
     *   VPN connection was stopped.
     */
    SERVICE_STOPPED,
    /**
     * The IP config of the active
     *   connection was invalid.
     */
    IP_CONFIG_INVALID,
    /**
     * The connection attempt to
     *   the VPN service timed out.
     */
    CONNECT_TIMEOUT,
    /**
     * A timeout occurred
     *   while starting the service providing the VPN connection.
     */
    SERVICE_START_TIMEOUT,
    /**
     * Starting the service
     *   providing the VPN connection failed.
     */
    SERVICE_START_FAILED,
    /**
     * Necessary secrets for the
     *   connection were not provided.
     */
    NO_SECRETS,
    /**
     * Authentication to the
     *   server failed.
     */
    LOGIN_FAILED,
    /**
     * The connection was
     *   deleted from settings.
     */
    CONNECTION_REMOVED,
    /**
     * Master connection of this
     *   connection failed to activate.
     */
    DEPENDENCY_FAILED,
    /**
     * Could not create the
     *   software device link.
     */
    DEVICE_REALIZE_FAILED,
    /**
     * The device this connection
     *   depended on disappeared.
     */
    DEVICE_REMOVED,
}
/**
 * Errors returned from the secret-agent manager.
 * 
 * These errors may be returned from operations that could cause secrets to be
 * requested (such as nm_client_activate_connection()), and correspond to D-Bus
 * errors in the "org.freedesktop.NetworkManager.AgentManager" namespace.
 */
class AgentManagerError extends GLib.Error {

    // Own fields of NM-1.0.AgentManagerError

/**
 * unknown or unspecified error
 */
FAILED: number
/**
 * The caller does not have permission
 *   to register a secret agent, or is trying to register the same secret agent
 *   twice.
 */
PERMISSIONDENIED: number
/**
 * The identifier is not a valid
 *   secret agent identifier.
 */
INVALIDIDENTIFIER: number
/**
 * The caller tried to unregister an agent
 *   that was not registered.
 */
NOTREGISTERED: number
/**
 * No secret agent returned secrets for this
 *   request
 */
NOSECRETS: number
/**
 * The user canceled the secrets request.
 */
USERCANCELED: number

    // Constructors of NM-1.0.AgentManagerError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.AgentManagerError

    static quark(): GLib.Quark
}

/**
 * #NMCapability names the numbers in the Capabilities property.
 * Capabilities are positive numbers. They are part of stable API
 * and a certain capability number is guaranteed not to change.
 * 
 * The range 0x7000 - 0x7FFF of capabilities is guaranteed not to be
 * used by upstream NetworkManager. It could thus be used for downstream
 * extensions.
 */
enum Capability {
    /**
     * Teams can be managed. This means the team device plugin
     *   is loaded.
     */
    TEAM,
    /**
     * OpenVSwitch can be managed. This means the OVS device plugin
     *   is loaded. Since: 1.24.
     */
    OVS,
}
/**
 * Describes errors that may result from operations involving a #NMClient.
 * 
 * D-Bus operations may also return errors from other domains, including
 * #NMManagerError, #NMSettingsError, #NMAgentManagerError, and #NMConnectionError.
 */
class ClientError extends GLib.Error {

    // Own fields of NM-1.0.ClientError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * an operation that requires NetworkManager
 *   failed because NetworkManager is not running
 */
MANAGER_NOT_RUNNING: number
/**
 * NetworkManager claimed that an
 *   operation succeeded, but the object that was allegedly created (eg,
 *   #NMRemoteConnection, #NMActiveConnection) was apparently destroyed before
 *   #NMClient could create a representation of it.
 */
OBJECT_CREATION_FAILED: number

    // Constructors of NM-1.0.ClientError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.ClientError

    /**
     * Registers an error quark for #NMClient if necessary.
     */
    static quark(): GLib.Quark
}

/**
 * #NMClientPermission values indicate various permissions that NetworkManager
 * clients can obtain to perform certain tasks on behalf of the current user.
 */
enum ClientPermission {
    /**
     * unknown or no permission
     */
    NONE,
    /**
     * controls whether networking
     *  can be globally enabled or disabled
     */
    ENABLE_DISABLE_NETWORK,
    /**
     * controls whether Wi-Fi can be
     *  globally enabled or disabled
     */
    ENABLE_DISABLE_WIFI,
    /**
     * controls whether WWAN (3G) can be
     *  globally enabled or disabled
     */
    ENABLE_DISABLE_WWAN,
    /**
     * controls whether WiMAX can be
     *  globally enabled or disabled
     */
    ENABLE_DISABLE_WIMAX,
    /**
     * controls whether the client can ask
     *  NetworkManager to sleep and wake
     */
    SLEEP_WAKE,
    /**
     * controls whether networking connections
     *  can be started, stopped, and changed
     */
    NETWORK_CONTROL,
    /**
     * controls whether a password
     *  protected Wi-Fi hotspot can be created
     */
    WIFI_SHARE_PROTECTED,
    /**
     * controls whether an open Wi-Fi hotspot
     *  can be created
     */
    WIFI_SHARE_OPEN,
    /**
     * controls whether connections
     *  that are available to all users can be modified
     */
    SETTINGS_MODIFY_SYSTEM,
    /**
     * controls whether connections
     *  owned by the current user can be modified
     */
    SETTINGS_MODIFY_OWN,
    /**
     * controls whether the
     *  persistent hostname can be changed
     */
    SETTINGS_MODIFY_HOSTNAME,
    /**
     * modify persistent global
     *  DNS configuration
     */
    SETTINGS_MODIFY_GLOBAL_DNS,
    /**
     * controls access to Reload.
     */
    RELOAD,
    /**
     * permission to create checkpoints.
     */
    CHECKPOINT_ROLLBACK,
    /**
     * controls whether device
     *  statistics can be globally enabled or disabled
     */
    ENABLE_DISABLE_STATISTICS,
    /**
     * controls whether
     *  connectivity check can be enabled or disabled
     */
    ENABLE_DISABLE_CONNECTIVITY_CHECK,
    /**
     * controls whether wifi scans can be performed
     */
    WIFI_SCAN,
    /**
     * a reserved boundary value
     */
    LAST,
}
/**
 * #NMClientPermissionResult values indicate what authorizations and permissions
 * the user requires to obtain a given #NMClientPermission
 */
enum ClientPermissionResult {
    /**
     * unknown or no authorization
     */
    UNKNOWN,
    /**
     * the permission is available
     */
    YES,
    /**
     * authorization is necessary before the
     *  permission is available
     */
    AUTH,
    /**
     * permission to perform the operation is
     *  denied by system policy
     */
    NO,
}
/**
 * Describes errors that may result from operations involving a #NMConnection
 * or its #NMSettings.
 * 
 * These errors may be returned directly from #NMConnection and #NMSetting
 * methods, or may be returned from D-Bus operations (eg on #NMClient or
 * #NMDevice), where they correspond to errors in the
 * "org.freedesktop.NetworkManager.Settings.Connection" namespace.
 */
class ConnectionError extends GLib.Error {

    // Own fields of NM-1.0.ConnectionError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * the #NMConnection object
 *   did not contain the specified #NMSetting object
 */
SETTINGNOTFOUND: number
/**
 * the #NMConnection did not contain the
 *   requested #NMSetting property
 */
PROPERTYNOTFOUND: number
/**
 * an operation which requires a secret
 *   was attempted on a non-secret property
 */
PROPERTYNOTSECRET: number
/**
 * the #NMConnection object is missing an
 *   #NMSetting which is required for its configuration. The error message will
 *   always be prefixed with "&amp;lt;setting-name&gt;: ", where "&amp;lt;setting-name&gt;" is the
 *   name of the setting that is missing.
 */
MISSINGSETTING: number
/**
 * the #NMConnection object contains an
 *   invalid or inappropriate #NMSetting. The error message will always be
 *   prefixed with "&amp;lt;setting-name&gt;: ", where "&amp;lt;setting-name&gt;" is the name of the
 *   setting that is invalid.
 */
INVALIDSETTING: number
/**
 * the #NMConnection object is invalid
 *   because it is missing a required property. The error message will always be
 *   prefixed with "&amp;lt;setting-name&gt;.&amp;lt;property-name&gt;: ", where "&amp;lt;setting-name&gt;" is
 *   the name of the setting with the missing property, and "&amp;lt;property-name&gt;" is
 *   the property that is missing.
 */
MISSINGPROPERTY: number
/**
 * the #NMConnection object is invalid
 *   because a property has an invalid value. The error message will always be
 *   prefixed with "&amp;lt;setting-name&gt;.&amp;lt;property-name&gt;: ", where "&amp;lt;setting-name&gt;" is
 *   the name of the setting with the invalid property, and "&amp;lt;property-name&gt;" is
 *   the property that is invalid.
 */
INVALIDPROPERTY: number

    // Constructors of NM-1.0.ConnectionError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.ConnectionError

    static quark(): GLib.Quark
}

enum ConnectionMultiConnect {
    /**
     * indicates that the per-connection
     *   setting is unspecified. In this case, it will fallback to the default
     *   value, which is %NM_CONNECTION_MULTI_CONNECT_SINGLE.
     */
    DEFAULT,
    /**
     * the connection profile can only
     *   be active once at each moment. Activating a profile that is already active,
     *   will first deactivate it.
     */
    SINGLE,
    /**
     * the profile can
     *   be manually activated multiple times on different devices. However,
     *   regarding autoconnect, the profile will autoconnect only if it is
     *   currently not connected otherwise.
     */
    MANUAL_MULTIPLE,
    /**
     * the profile can autoactivate
     *   and be manually activated multiple times together.
     */
    MULTIPLE,
}
enum ConnectivityState {
    /**
     * Network connectivity is unknown. This means the
     *   connectivity checks are disabled (e.g. on server installations) or has
     *   not run yet. The graphical shell should assume the Internet connection
     *   might be available and not present a captive portal window.
     */
    UNKNOWN,
    /**
     * The host is not connected to any network. There's
     *   no active connection that contains a default route to the internet and
     *   thus it makes no sense to even attempt a connectivity check. The graphical
     *   shell should use this state to indicate the network connection is unavailable.
     */
    NONE,
    /**
     * The Internet connection is hijacked by a captive
     *   portal gateway. The graphical shell may open a sandboxed web browser window
     *   (because the captive portals typically attempt a man-in-the-middle attacks
     *   against the https connections) for the purpose of authenticating to a gateway
     *   and retrigger the connectivity check with CheckConnectivity() when the
     *   browser window is dismissed.
     */
    PORTAL,
    /**
     * The host is connected to a network, does not appear
     *   to be able to reach the full Internet, but a captive portal has not been
     *   detected.
     */
    LIMITED,
    /**
     * The host is connected to a network, and
     *   appears to be able to reach the full Internet.
     */
    FULL,
}
/**
 * Cryptography-related errors that can be returned from some nm-utils methods,
 * and some #NMSetting8021x operations.
 */
class CryptoError extends GLib.Error {

    // Own fields of NM-1.0.CryptoError

/**
 * generic failure
 */
FAILED: number
/**
 * the certificate or key data provided
 *   was invalid
 */
INVALID_DATA: number
/**
 * the password was invalid
 */
INVALID_PASSWORD: number
/**
 * the data uses an unknown cipher
 */
UNKNOWN_CIPHER: number
/**
 * decryption failed
 */
DECRYPTION_FAILED: number
/**
 * encryption failed
 */
ENCRYPTION_FAILED: number

    // Constructors of NM-1.0.CryptoError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.CryptoError

    static quark(): GLib.Quark
}

/**
 * Device-related errors.
 * 
 * These errors may be returned directly from #NMDevice methods, or may be
 * returned from D-Bus operations (where they correspond to errors in the
 * "org.freedesktop.NetworkManager.Device" namespace).
 */
class DeviceError extends GLib.Error {

    // Own fields of NM-1.0.DeviceError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * NetworkManager failed to create the device
 */
CREATIONFAILED: number
/**
 * the specified connection is not valid
 */
INVALIDCONNECTION: number
/**
 * the specified connection is not
 *   compatible with this device.
 */
INCOMPATIBLECONNECTION: number
/**
 * the device does not have an active connection
 */
NOTACTIVE: number
/**
 * the requested operation is only valid on
 *   software devices.
 */
NOTSOFTWARE: number
/**
 * the requested operation is not allowed at
 *   this time.
 */
NOTALLOWED: number
/**
 * the "specific object" in the
 *   activation request (eg, the #NMAccessPoint or #NMWimaxNsp) was not
 *   found.
 */
SPECIFICOBJECTNOTFOUND: number
/**
 * the version id did not match.
 */
VERSIONIDMISMATCH: number
/**
 * the requested operation could not
 *   be completed due to missing dependencies.
 */
MISSINGDEPENDENCIES: number
/**
 * invalid argument. Since: 1.16.
 */
INVALIDARGUMENT: number

    // Constructors of NM-1.0.DeviceError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.DeviceError

    static quark(): GLib.Quark
}

enum DeviceState {
    /**
     * the device's state is unknown
     */
    UNKNOWN,
    /**
     * the device is recognized, but not managed by
     *   NetworkManager
     */
    UNMANAGED,
    /**
     * the device is managed by NetworkManager, but
     *   is not available for use.  Reasons may include the wireless switched off,
     *   missing firmware, no ethernet carrier, missing supplicant or modem manager,
     *   etc.
     */
    UNAVAILABLE,
    /**
     * the device can be activated, but is currently
     *   idle and not connected to a network.
     */
    DISCONNECTED,
    /**
     * the device is preparing the connection to the
     *   network.  This may include operations like changing the MAC address,
     *   setting physical link properties, and anything else required to connect
     *   to the requested network.
     */
    PREPARE,
    /**
     * the device is connecting to the requested network.
     *   This may include operations like associating with the Wi-Fi AP, dialing
     *   the modem, connecting to the remote Bluetooth device, etc.
     */
    CONFIG,
    /**
     * the device requires more information to continue
     *   connecting to the requested network.  This includes secrets like WiFi
     *   passphrases, login passwords, PIN codes, etc.
     */
    NEED_AUTH,
    /**
     * the device is requesting IPv4 and/or IPv6
     *   addresses and routing information from the network.
     */
    IP_CONFIG,
    /**
     * the device is checking whether further action is
     *   required for the requested network connection.  This may include checking
     *   whether only local network access is available, whether a captive portal
     *   is blocking access to the Internet, etc.
     */
    IP_CHECK,
    /**
     * the device is waiting for a secondary
     *   connection (like a VPN) which must activated before the device can be
     *   activated
     */
    SECONDARIES,
    /**
     * the device has a network connection, either local
     *   or global.
     */
    ACTIVATED,
    /**
     * a disconnection from the current network
     *   connection was requested, and the device is cleaning up resources used for
     *   that connection.  The network connection may still be valid.
     */
    DEACTIVATING,
    /**
     * the device failed to connect to the requested
     *   network and is cleaning up the connection request
     */
    FAILED,
}
/**
 * Device state change reason codes
 */
enum DeviceStateReason {
    /**
     * No reason given
     */
    NONE,
    /**
     * Unknown error
     */
    UNKNOWN,
    /**
     * Device is now managed
     */
    NOW_MANAGED,
    /**
     * Device is now unmanaged
     */
    NOW_UNMANAGED,
    /**
     * The device could not be readied for configuration
     */
    CONFIG_FAILED,
    /**
     * IP configuration could not be reserved (no available address, timeout, etc)
     */
    IP_CONFIG_UNAVAILABLE,
    /**
     * The IP config is no longer valid
     */
    IP_CONFIG_EXPIRED,
    /**
     * Secrets were required, but not provided
     */
    NO_SECRETS,
    /**
     * 802.1x supplicant disconnected
     */
    SUPPLICANT_DISCONNECT,
    /**
     * 802.1x supplicant configuration failed
     */
    SUPPLICANT_CONFIG_FAILED,
    /**
     * 802.1x supplicant failed
     */
    SUPPLICANT_FAILED,
    /**
     * 802.1x supplicant took too long to authenticate
     */
    SUPPLICANT_TIMEOUT,
    /**
     * PPP service failed to start
     */
    PPP_START_FAILED,
    /**
     * PPP service disconnected
     */
    PPP_DISCONNECT,
    /**
     * PPP failed
     */
    PPP_FAILED,
    /**
     * DHCP client failed to start
     */
    DHCP_START_FAILED,
    /**
     * DHCP client error
     */
    DHCP_ERROR,
    /**
     * DHCP client failed
     */
    DHCP_FAILED,
    /**
     * Shared connection service failed to start
     */
    SHARED_START_FAILED,
    /**
     * Shared connection service failed
     */
    SHARED_FAILED,
    /**
     * AutoIP service failed to start
     */
    AUTOIP_START_FAILED,
    /**
     * AutoIP service error
     */
    AUTOIP_ERROR,
    /**
     * AutoIP service failed
     */
    AUTOIP_FAILED,
    /**
     * The line is busy
     */
    MODEM_BUSY,
    /**
     * No dial tone
     */
    MODEM_NO_DIAL_TONE,
    /**
     * No carrier could be established
     */
    MODEM_NO_CARRIER,
    /**
     * The dialing request timed out
     */
    MODEM_DIAL_TIMEOUT,
    /**
     * The dialing attempt failed
     */
    MODEM_DIAL_FAILED,
    /**
     * Modem initialization failed
     */
    MODEM_INIT_FAILED,
    /**
     * Failed to select the specified APN
     */
    GSM_APN_FAILED,
    /**
     * Not searching for networks
     */
    GSM_REGISTRATION_NOT_SEARCHING,
    /**
     * Network registration denied
     */
    GSM_REGISTRATION_DENIED,
    /**
     * Network registration timed out
     */
    GSM_REGISTRATION_TIMEOUT,
    /**
     * Failed to register with the requested network
     */
    GSM_REGISTRATION_FAILED,
    /**
     * PIN check failed
     */
    GSM_PIN_CHECK_FAILED,
    /**
     * Necessary firmware for the device may be missing
     */
    FIRMWARE_MISSING,
    /**
     * The device was removed
     */
    REMOVED,
    /**
     * NetworkManager went to sleep
     */
    SLEEPING,
    /**
     * The device's active connection disappeared
     */
    CONNECTION_REMOVED,
    /**
     * Device disconnected by user or client
     */
    USER_REQUESTED,
    /**
     * Carrier/link changed
     */
    CARRIER,
    /**
     * The device's existing connection was assumed
     */
    CONNECTION_ASSUMED,
    /**
     * The supplicant is now available
     */
    SUPPLICANT_AVAILABLE,
    /**
     * The modem could not be found
     */
    MODEM_NOT_FOUND,
    /**
     * The Bluetooth connection failed or timed out
     */
    BT_FAILED,
    /**
     * GSM Modem's SIM Card not inserted
     */
    GSM_SIM_NOT_INSERTED,
    /**
     * GSM Modem's SIM Pin required
     */
    GSM_SIM_PIN_REQUIRED,
    /**
     * GSM Modem's SIM Puk required
     */
    GSM_SIM_PUK_REQUIRED,
    /**
     * GSM Modem's SIM wrong
     */
    GSM_SIM_WRONG,
    /**
     * InfiniBand device does not support connected mode
     */
    INFINIBAND_MODE,
    /**
     * A dependency of the connection failed
     */
    DEPENDENCY_FAILED,
    /**
     * Problem with the RFC 2684 Ethernet over ADSL bridge
     */
    BR2684_FAILED,
    /**
     * ModemManager not running
     */
    MODEM_MANAGER_UNAVAILABLE,
    /**
     * The Wi-Fi network could not be found
     */
    SSID_NOT_FOUND,
    /**
     * A secondary connection of the base connection failed
     */
    SECONDARY_CONNECTION_FAILED,
    /**
     * DCB or FCoE setup failed
     */
    DCB_FCOE_FAILED,
    /**
     * teamd control failed
     */
    TEAMD_CONTROL_FAILED,
    /**
     * Modem failed or no longer available
     */
    MODEM_FAILED,
    /**
     * Modem now ready and available
     */
    MODEM_AVAILABLE,
    /**
     * SIM PIN was incorrect
     */
    SIM_PIN_INCORRECT,
    /**
     * New connection activation was enqueued
     */
    NEW_ACTIVATION,
    /**
     * the device's parent changed
     */
    PARENT_CHANGED,
    /**
     * the device parent's management changed
     */
    PARENT_MANAGED_CHANGED,
    /**
     * problem communicating with Open vSwitch database
     */
    OVSDB_FAILED,
    /**
     * a duplicate IP address was detected
     */
    IP_ADDRESS_DUPLICATE,
    /**
     * The selected IP method is not supported
     */
    IP_METHOD_UNSUPPORTED,
    /**
     * configuration of SR-IOV parameters failed
     */
    SRIOV_CONFIGURATION_FAILED,
    /**
     * The Wi-Fi P2P peer could not be found
     */
    PEER_NOT_FOUND,
}
/**
 * #NMDeviceType values indicate the type of hardware represented by a
 * device object.
 */
enum DeviceType {
    /**
     * unknown device
     */
    UNKNOWN,
    /**
     * a wired ethernet device
     */
    ETHERNET,
    /**
     * an 802.11 Wi-Fi device
     */
    WIFI,
    /**
     * not used
     */
    UNUSED1,
    /**
     * not used
     */
    UNUSED2,
    /**
     * a Bluetooth device supporting PAN or DUN access protocols
     */
    BT,
    /**
     * an OLPC XO mesh networking device
     */
    OLPC_MESH,
    /**
     * an 802.16e Mobile WiMAX broadband device
     */
    WIMAX,
    /**
     * a modem supporting analog telephone, CDMA/EVDO,
     * GSM/UMTS, or LTE network access protocols
     */
    MODEM,
    /**
     * an IP-over-InfiniBand device
     */
    INFINIBAND,
    /**
     * a bond master interface
     */
    BOND,
    /**
     * an 802.1Q VLAN interface
     */
    VLAN,
    /**
     * ADSL modem
     */
    ADSL,
    /**
     * a bridge master interface
     */
    BRIDGE,
    /**
     * generic support for unrecognized device types
     */
    GENERIC,
    /**
     * a team master interface
     */
    TEAM,
    /**
     * a TUN or TAP interface
     */
    TUN,
    /**
     * a IP tunnel interface
     */
    IP_TUNNEL,
    /**
     * a MACVLAN interface
     */
    MACVLAN,
    /**
     * a VXLAN interface
     */
    VXLAN,
    /**
     * a VETH interface
     */
    VETH,
    /**
     * a MACsec interface
     */
    MACSEC,
    /**
     * a dummy interface
     */
    DUMMY,
    /**
     * a PPP interface
     */
    PPP,
    /**
     * a Open vSwitch interface
     */
    OVS_INTERFACE,
    /**
     * a Open vSwitch port
     */
    OVS_PORT,
    /**
     * a Open vSwitch bridge
     */
    OVS_BRIDGE,
    /**
     * a IEEE 802.15.4 (WPAN) MAC Layer Device
     */
    WPAN,
    /**
     * 6LoWPAN interface
     */
    "6LOWPAN",
    /**
     * a WireGuard interface
     */
    WIREGUARD,
    /**
     * an 802.11 Wi-Fi P2P device. Since: 1.16.
     */
    WIFI_P2P,
    /**
     * A VRF (Virtual Routing and Forwarding) interface. Since: 1.24.
     */
    VRF,
    /**
     * a loopback interface. Since: 1.42.
     */
    LOOPBACK,
}
/**
 * The tunneling mode.
 */
enum IPTunnelMode {
    /**
     * Unknown/unset tunnel mode
     */
    UNKNOWN,
    /**
     * IP in IP tunnel
     */
    IPIP,
    /**
     * GRE tunnel
     */
    GRE,
    /**
     * SIT tunnel
     */
    SIT,
    /**
     * ISATAP tunnel
     */
    ISATAP,
    /**
     * VTI tunnel
     */
    VTI,
    /**
     * IPv6 in IPv6 tunnel
     */
    IP6IP6,
    /**
     * IPv4 in IPv6 tunnel
     */
    IPIP6,
    /**
     * IPv6 GRE tunnel
     */
    IP6GRE,
    /**
     * IPv6 VTI tunnel
     */
    VTI6,
    /**
     * GRETAP tunnel
     */
    GRETAP,
    /**
     * IPv6 GRETAP tunnel
     */
    IP6GRETAP,
}
/**
 * The type of the callback for %NMKeyfileReadHandler and %NMKeyfileWriteHandler.
 * Depending on the type, you can interpret %NMKeyfileHandlerData.
 */
enum KeyfileHandlerType {
    /**
     * a warning.
     */
    WARN,
    /**
     * for handling certificates while writing
     *   a connection to keyfile.
     */
    WRITE_CERT,
}
/**
 * The severity level of %NM_KEYFILE_HANDLER_TYPE_WARN events.
 */
enum KeyfileWarnSeverity {
    /**
     * debug message
     */
    DEBUG,
    /**
     * info message
     */
    INFO,
    /**
     * info message about a missing file
     */
    INFO_MISSING_FILE,
    /**
     * a warning message
     */
    WARN,
}
/**
 * Errors related to the main "network management" interface of NetworkManager.
 * These may be returned from #NMClient methods that invoke D-Bus operations on
 * the "org.freedesktop.NetworkManager" interface, and correspond to D-Bus
 * errors in that namespace.
 */
class ManagerError extends GLib.Error {

    // Own fields of NM-1.0.ManagerError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * Permission denied.
 */
PERMISSIONDENIED: number
/**
 * The requested connection is not known.
 */
UNKNOWNCONNECTION: number
/**
 * The requested device is not known.
 */
UNKNOWNDEVICE: number
/**
 * The requested connection cannot be
 *   activated at this time.
 */
CONNECTIONNOTAVAILABLE: number
/**
 * The request could not be completed
 *   because a required connection is not active.
 */
CONNECTIONNOTACTIVE: number
/**
 * The connection to be activated was
 *   already active on another device.
 */
CONNECTIONALREADYACTIVE: number
/**
 * An activation request failed due to a
 *   dependency being unavailable.
 */
DEPENDENCYFAILED: number
/**
 * The manager is already in the requested
 *   sleep/wake state.
 */
ALREADYASLEEPORAWAKE: number
/**
 * The network is already
 *   enabled/disabled.
 */
ALREADYENABLEDORDISABLED: number
/**
 * Unknown log level in SetLogging
 */
UNKNOWNLOGLEVEL: number
/**
 * Unknown log domain in SetLogging
 */
UNKNOWNLOGDOMAIN: number
/**
 * Invalid arguments for D-Bus request
 */
INVALIDARGUMENTS: number
/**
 * A plug-in was needed to complete the
 *   activation but is not available.
 */
MISSINGPLUGIN: number

    // Constructors of NM-1.0.ManagerError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.ManagerError

    static quark(): GLib.Quark
}

/**
 * The NMMetered enum has two different purposes: one is to configure
 * "connection.metered" setting of a connection profile in #NMSettingConnection, and
 * the other is to express the actual metered state of the #NMDevice at a given moment.
 * 
 * For the connection profile only #NM_METERED_UNKNOWN, #NM_METERED_NO
 * and #NM_METERED_YES are allowed.
 * 
 * The device's metered state at runtime is determined by the profile
 * which is currently active. If the profile explicitly specifies #NM_METERED_NO
 * or #NM_METERED_YES, then the device's metered state is as such.
 * If the connection profile leaves it undecided at #NM_METERED_UNKNOWN (the default),
 * then NetworkManager tries to guess the metered state, for example based on the
 * device type or on DHCP options (like Android devices exposing a "ANDROID_METERED"
 * DHCP vendor option). This then leads to either #NM_METERED_GUESS_NO or #NM_METERED_GUESS_YES.
 * 
 * Most applications probably should treat the runtime state #NM_METERED_GUESS_YES
 * like #NM_METERED_YES, and all other states as not metered.
 * 
 * Note that the per-device metered states are then combined to a global metered
 * state. This is basically the metered state of the device with the best default
 * route. However, that generalization of a global metered state may not be correct
 * if the default routes for IPv4 and IPv6 are on different devices, or if policy
 * routing is configured. In general, the global metered state tries to express whether
 * the traffic is likely metered, but since that depends on the traffic itself,
 * there is not one answer in all cases. Hence, an application may want to consider
 * the per-device's metered states.
 */
enum Metered {
    /**
     * The metered status is unknown
     */
    UNKNOWN,
    /**
     * Metered, the value was explicitly configured
     */
    YES,
    /**
     * Not metered, the value was explicitly configured
     */
    NO,
    /**
     * Metered, the value was guessed
     */
    GUESS_YES,
    /**
     * Not metered, the value was guessed
     */
    GUESS_NO,
}
/**
 * The result of a checkpoint Rollback() operation for a specific device.
 */
enum RollbackResult {
    /**
     * the rollback succeeded.
     */
    OK,
    /**
     * the device no longer exists.
     */
    ERR_NO_DEVICE,
    /**
     * the device is now unmanaged.
     */
    ERR_DEVICE_UNMANAGED,
    /**
     * other errors during rollback.
     */
    ERR_FAILED,
}
/**
 * #NMSecretAgentError values are passed by secret agents back to NetworkManager
 * when they encounter problems retrieving secrets on behalf of NM. They
 * correspond to errors in the "org.freedesktop.NetworkManager.SecretManager"
 * namespace.
 * 
 * Client APIs such as nm_client_activate_connection() will not see these error
 * codes; instead, the secret agent manager will translate them to the
 * corresponding #NMAgentManagerError codes.
 */
class SecretAgentError extends GLib.Error {

    // Own fields of NM-1.0.SecretAgentError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * the caller (ie, NetworkManager) is
 *   not authorized to make this request
 */
PERMISSIONDENIED: number
/**
 * the connection for which secrets
 *   were requested is invalid
 */
INVALIDCONNECTION: number
/**
 * the request was canceled by the user
 */
USERCANCELED: number
/**
 * the agent canceled the request
 *   because it was requested to do so by NetworkManager
 */
AGENTCANCELED: number
/**
 * the agent cannot find any secrets for this
 *   connection
 */
NOSECRETS: number

    // Constructors of NM-1.0.SecretAgentError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.SecretAgentError

    static quark(): GLib.Quark
}

/**
 * #NMSetting8021xCKFormat values indicate the general type of a certificate
 * or private key
 */
enum Setting8021xCKFormat {
    /**
     * unknown file format
     */
    UNKNOWN,
    /**
     * file contains an X.509 format certificate
     */
    X509,
    /**
     * file contains an old-style OpenSSL PEM
     * or DER private key
     */
    RAW_KEY,
    /**
     * file contains a PKCS#&lt;!-- --&gt;12 certificate
     * and private key
     */
    PKCS12,
}
/**
 * #NMSetting8021xCKScheme values indicate how a certificate or private key is
 * stored in the setting properties, either as a blob of the item's data, or as
 * a path to a certificate or private key file on the filesystem
 */
enum Setting8021xCKScheme {
    /**
     * unknown certificate or private key
     * scheme
     */
    UNKNOWN,
    /**
     * certificate or key is stored as the raw
     * item data
     */
    BLOB,
    /**
     * certificate or key is stored as a path
     * to a file containing the certificate or key data
     */
    PATH,
    /**
     * certificate or key is stored as a
     * URI of an object on a PKCS#11 token
     */
    PKCS11,
}
/**
 * These flags modify the comparison behavior when comparing two settings or
 * two connections.
 */
enum SettingCompareFlags {
    /**
     * match all properties exactly
     */
    EXACT,
    /**
     * match only important attributes, like SSID,
     *   type, security settings, etc.  Does not match, for example, connection ID
     *   or UUID.
     */
    FUZZY,
    /**
     * ignore the connection's ID
     */
    IGNORE_ID,
    /**
     * ignore all secrets
     */
    IGNORE_SECRETS,
    /**
     * ignore secrets for which
     *   the secret's flags indicate the secret is owned by a user secret agent
     *   (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_AGENT_OWNED)`
     */
    IGNORE_AGENT_OWNED_SECRETS,
    /**
     * ignore secrets for which
     *   the secret's flags indicate the secret should not be saved to persistent
     *   storage (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_NOT_SAVED)`
     */
    IGNORE_NOT_SAVED_SECRETS,
    /**
     * if this flag is set,
     *   nm_setting_diff() and nm_connection_diff() will also include properties that
     *   are set to their default value. See also `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_NO_DEFAULT`.
     */
    DIFF_RESULT_WITH_DEFAULT,
    /**
     * if this flag is set,
     *   nm_setting_diff() and nm_connection_diff() will not include properties that
     *   are set to their default value. This is the opposite of
     *   `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`. If both flags are set together,
     *   `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT` wins. If both flags are unset,
     *   this means to exclude default properties if there is a setting to compare,
     *   but include all properties, if the setting 'b' is missing. This is the legacy
     *   behaviour of libnm-util, where nm_setting_diff() behaved differently depending
     *   on whether the setting 'b' was available. If `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`
     *   is set, nm_setting_diff() will also set the flags `NM_SETTING_DIFF_RESULT_IN_A_DEFAULT`
     *   and `NM_SETTING_DIFF_RESULT_IN_B_DEFAULT,` if the values are default values.
     */
    DIFF_RESULT_NO_DEFAULT,
    /**
     * ignore the connection's timestamp
     */
    IGNORE_TIMESTAMP,
}
/**
 * #NMSettingConnectionAutoconnectSlaves values indicate whether slave connections
 * should be activated when master is activated.
 */
enum SettingConnectionAutoconnectSlaves {
    /**
     * default value
     */
    DEFAULT,
    /**
     * slaves are not brought up when
     *   master is activated
     */
    NO,
    /**
     * slaves are brought up when
     *   master is activated
     */
    YES,
}
/**
 * #NMSettingConnectionDnsOverTls values indicate whether DNSOverTls should be enabled.
 */
enum SettingConnectionDnsOverTls {
    /**
     * default value
     */
    DEFAULT,
    /**
     * disable DNSOverTls
     */
    NO,
    /**
     * enable opportunistic mode
     */
    OPPORTUNISTIC,
    /**
     * enable strict mode
     */
    YES,
}
/**
 * #NMSettingConnectionLldp values indicate whether LLDP should be enabled.
 */
enum SettingConnectionLldp {
    /**
     * default value
     */
    DEFAULT,
    /**
     * disable LLDP
     */
    DISABLE,
    /**
     * enable reception of LLDP frames
     */
    ENABLE_RX,
}
/**
 * #NMSettingConnectionLlmnr values indicate whether LLMNR should be enabled.
 */
enum SettingConnectionLlmnr {
    /**
     * default value
     */
    DEFAULT,
    /**
     * disable LLMNR
     */
    NO,
    /**
     * support only resolving, do not register hostname
     */
    RESOLVE,
    /**
     * enable LLMNR
     */
    YES,
}
/**
 * #NMSettingConnectionMdns values indicate whether mDNS should be enabled.
 */
enum SettingConnectionMdns {
    /**
     * default value
     */
    DEFAULT,
    /**
     * disable mDNS
     */
    NO,
    /**
     * support only resolving, do not register hostname
     */
    RESOLVE,
    /**
     * enable mDNS
     */
    YES,
}
/**
 * These values indicate the result of a setting difference operation.
 */
enum SettingDiffResult {
    /**
     * unknown result
     */
    UNKNOWN,
    /**
     * the property is present in setting A
     */
    IN_A,
    /**
     * the property is present in setting B
     */
    IN_B,
    /**
     * the property is present in
     * setting A but is set to the default value. This flag is only set,
     * if you specify `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`.
     */
    IN_A_DEFAULT,
    /**
     * analog to `NM_SETTING_DIFF_RESULT_IN_A_DEFAULT`.
     */
    IN_B_DEFAULT,
}
/**
 * #NMSettingIP4LinkLocal values indicate whether IPv4 link-local address protocol should be enabled.
 */
enum SettingIP4LinkLocal {
    /**
     * Allow fallback to a globally configured default. If unspecified,
     *   fallback to "auto". Note that if "ipv4.method" is "disabled", this always implies link-local
     *   addresses disabled too.
     */
    DEFAULT,
    /**
     * Special value which enables LL if "ipv4.method" is set to
     *   "link-local".
     */
    AUTO,
    /**
     * Disable IPv4 link-local protocol.
     */
    DISABLED,
    /**
     * Enable the IPv4 link-local protocol regardless what other protocols
     * such as DHCP or manually assigned IP addresses might be active.
     */
    ENABLED,
}
/**
 * #NMSettingIP6ConfigAddrGenMode controls how the Interface Identifier for
 * RFC4862 Stateless Address Autoconfiguration is created.
 */
enum SettingIP6ConfigAddrGenMode {
    /**
     * The Interface Identifier is derived
     * from the interface hardware address.
     */
    EUI64,
    /**
     * The Interface Identifier
     * is created by using a cryptographically secure hash of a secret host-specific
     * key along with the connection identification and the network address as
     * specified by RFC7217.
     */
    STABLE_PRIVACY,
    /**
     * Fallback to the global
     *   default, and if unspecified use "eui64". Since: 1.40.
     */
    DEFAULT_OR_EUI64,
    /**
     * Fallback to the global
     *   default, and if unspecified use "stable-privacy". Since: 1.40.
     */
    DEFAULT,
}
/**
 * #NMSettingIP6ConfigPrivacy values indicate if and how IPv6 Privacy
 * Extensions are used (RFC4941).
 */
enum SettingIP6ConfigPrivacy {
    /**
     * unknown or no value specified
     */
    UNKNOWN,
    /**
     * IPv6 Privacy Extensions are disabled
     */
    DISABLED,
    /**
     * IPv6 Privacy Extensions
     * are enabled, but public addresses are preferred over temporary addresses
     */
    PREFER_PUBLIC_ADDR,
    /**
     * IPv6 Privacy Extensions
     * are enabled and temporary addresses are preferred over public addresses
     */
    PREFER_TEMP_ADDR,
}
/**
 * Controls if and how the MAC address of a device is randomzied.
 */
enum SettingMacRandomization {
    /**
     * the default value, which unless
     * overridden by user-controlled defaults configuration, is "never".
     */
    DEFAULT,
    /**
     * the device's MAC address is always used.
     */
    NEVER,
    /**
     * a random MAC address is used.
     */
    ALWAYS,
}
/**
 * #NMSettingMacsecMode controls how the CAK (Connectivity Association Key) used
 * in MKA (MACsec Key Agreement) is obtained.
 */
enum SettingMacsecMode {
    /**
     * The CAK is pre-shared
     */
    PSK,
    /**
     * The CAK is the result of participation in EAP
     */
    EAP,
}
/**
 * #NMSettingMacsecValidation specifies a validation mode for incoming frames.
 */
enum SettingMacsecValidation {
    /**
     * All incoming frames are accepted if
     *   possible
     */
    DISABLE,
    /**
     * Non protected, invalid, or impossible to
     *   verify frames are accepted and counted as "invalid"
     */
    CHECK,
    /**
     * Non protected, invalid, or impossible to
     *   verify frames are dropped
     */
    STRICT,
}
enum SettingMacvlanMode {
    /**
     * unknown/unset mode
     */
    UNKNOWN,
    /**
     * Virtual Ethernet Port Aggregator mode
     */
    VEPA,
    /**
     * bridge mode
     */
    BRIDGE,
    /**
     * private mode
     */
    PRIVATE,
    /**
     * passthru mode
     */
    PASSTHRU,
    /**
     * source mode
     */
    SOURCE,
}
/**
 * The Proxy method.
 */
enum SettingProxyMethod {
    /**
     * No Proxy for the Connection
     */
    NONE,
    /**
     * DHCP obtained Proxy/ Manual override
     */
    AUTO,
}
/**
 * The parity setting of a serial port.
 */
enum SettingSerialParity {
    /**
     * No parity bits (default)
     */
    NONE,
    /**
     * Even parity
     */
    EVEN,
    /**
     * Odd parity
     */
    ODD,
}
/**
 * #NMSettingTunMode values indicate the device type (TUN/TAP)
 */
enum SettingTunMode {
    /**
     * an unknown device type
     */
    UNKNOWN,
    /**
     * a TUN device
     */
    TUN,
    /**
     * a TAP device
     */
    TAP,
}
/**
 * These flags indicate whether wireless powersave must be enabled.
 */
enum SettingWirelessPowersave {
    /**
     * use the default value
     */
    DEFAULT,
    /**
     * don't touch existing setting
     */
    IGNORE,
    /**
     * disable powersave
     */
    DISABLE,
    /**
     * enable powersave
     */
    ENABLE,
}
/**
 * These flags indicate whether FILS must be enabled.
 */
enum SettingWirelessSecurityFils {
    /**
     * use the default value
     */
    DEFAULT,
    /**
     * disable FILS
     */
    DISABLE,
    /**
     * enable FILS if the supplicant and the AP support it
     */
    OPTIONAL,
    /**
     * require FILS and fail if not available
     */
    REQUIRED,
}
/**
 * These flags indicate whether PMF must be enabled.
 */
enum SettingWirelessSecurityPmf {
    /**
     * use the default value
     */
    DEFAULT,
    /**
     * disable PMF
     */
    DISABLE,
    /**
     * enable PMF if the supplicant and the AP support it
     */
    OPTIONAL,
    /**
     * require PMF and fail if not available
     */
    REQUIRED,
}
/**
 * Errors related to the settings/persistent configuration interface of
 * NetworkManager.
 * 
 * These may be returned from #NMClient methods that invoke D-Bus operations on
 * the "org.freedesktop.NetworkManager.Settings" interface, and correspond to
 * D-Bus errors in that namespace.
 */
class SettingsError extends GLib.Error {

    // Own fields of NM-1.0.SettingsError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * permission denied
 */
PERMISSIONDENIED: number
/**
 * the requested operation is not supported by any
 *   active settings backend
 */
NOTSUPPORTED: number
/**
 * the connection was invalid
 */
INVALIDCONNECTION: number
/**
 * attempted to modify a read-only connection
 */
READONLYCONNECTION: number
/**
 * a connection with that UUID already exists
 */
UUIDEXISTS: number
/**
 * attempted to set an invalid hostname
 */
INVALIDHOSTNAME: number
/**
 * invalid arguments
 */
INVALIDARGUMENTS: number
/**
 * The profile's VersionId mismatched
 *   and the update is rejected. See the "version-id" argument to Update2()
 *   method. Since 1.44.
 */
VERSIONIDMISMATCH: number
/**
 * the requested operation is not
 *   supported by the settings plugin currently in use for the specified object.
 *   Since: 1.44.
 */
NOTSUPPORTEDBYPLUGIN: number

    // Constructors of NM-1.0.SettingsError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.SettingsError

    static quark(): GLib.Quark
}

/**
 * #NMSriovVFVlanProtocol indicates the VLAN protocol to use.
 */
enum SriovVFVlanProtocol {
    /**
     * use 802.1Q
     */
    "1Q",
    /**
     * use 802.1ad
     */
    "1AD",
}
/**
 * #NMState values indicate the current overall networking state.
 */
enum State {
    /**
     * Networking state is unknown. This indicates a daemon error
     *    that makes it unable to reasonably assess the state. In such event the
     *    applications are expected to assume Internet connectivity might be present
     *    and not disable controls that require network access.
     *    The graphical shells may hide the network accessibility indicator altogether
     *    since no meaningful status indication can be provided.
     */
    UNKNOWN,
    /**
     * Networking is not enabled, the system is being suspended or
     *    resumed from suspend.
     */
    ASLEEP,
    /**
     * There is no active network connection.
     *    The graphical shell should indicate  no network connectivity and the
     *    applications should not attempt to access the network.
     */
    DISCONNECTED,
    /**
     * Network connections are being cleaned up.
     *    The applications should tear down their network sessions.
     */
    DISCONNECTING,
    /**
     * A network connection is being started
     *    The graphical shell should indicate the network is being connected while
     *    the applications should still make no attempts to connect the network.
     */
    CONNECTING,
    /**
     * There is only local IPv4 and/or IPv6 connectivity,
     *    but no default route to access the Internet. The graphical shell should
     *    indicate no network connectivity.
     */
    CONNECTED_LOCAL,
    /**
     * There is only site-wide IPv4 and/or IPv6 connectivity.
     *    This means a default route is available, but the Internet connectivity check
     *    (see "Connectivity" property) did not succeed. The graphical shell should
     *    indicate limited network connectivity.
     */
    CONNECTED_SITE,
    /**
     * There is global IPv4 and/or IPv6 Internet connectivity
     *    This means the Internet connectivity check succeeded, the graphical shell should
     *    indicate full network connectivity.
     */
    CONNECTED_GLOBAL,
}
/**
 * An boolean value that can be overridden by a default.
 */
enum Ternary {
    /**
     * use the globally-configured default value.
     */
    DEFAULT,
    /**
     * the option is disabled.
     */
    FALSE,
    /**
     * the option is enabled.
     */
    TRUE,
}
/**
 * Describes generic security mechanisms that 802.11 access points may offer.
 * Used with nm_utils_security_valid() for checking whether a given access
 * point is compatible with a network device.
 */
enum UtilsSecurityType {
    /**
     * unknown or invalid security, placeholder and not used
     */
    INVALID,
    /**
     * unencrypted and open
     */
    NONE,
    /**
     * static WEP keys are used for encryption
     */
    STATIC_WEP,
    /**
     * Cisco LEAP is used for authentication and for generating the
     * dynamic WEP keys automatically
     */
    LEAP,
    /**
     * standard 802.1x is used for authentication and
     * generating the dynamic WEP keys automatically
     */
    DYNAMIC_WEP,
    /**
     * WPA1 is used with Pre-Shared Keys (PSK)
     */
    WPA_PSK,
    /**
     * WPA1 is used with 802.1x authentication
     */
    WPA_ENTERPRISE,
    /**
     * WPA2/RSN is used with Pre-Shared Keys (PSK)
     */
    WPA2_PSK,
    /**
     * WPA2 is used with 802.1x authentication
     */
    WPA2_ENTERPRISE,
    /**
     * is used with WPA3 Enterprise
     */
    SAE,
    /**
     * is used with Enhanced Open
     */
    OWE,
    /**
     * is used with WPA3 Enterprise Suite-B 192 bit mode. Since: 1.30.
     */
    WPA3_SUITE_B_192,
}
/**
 * %_NM_VERSION_INFO_CAPABILITY_UNUSED: a dummy capability. It has no meaning,
 *   don't use it.
 * Currently no enum values are defined. These capabilities are exposed
 * on D-Bus in the "VersionInfo" bit field.
 */
enum VersionInfoCapability {
    UNUSED,
}
/**
 * A selector for traffic priority maps; these map Linux SKB priorities
 * to 802.1p priorities used in VLANs.
 */
enum VlanPriorityMap {
    /**
     * map for incoming data
     */
    INGRESS_MAP,
    /**
     * map for outgoing data
     */
    EGRESS_MAP,
}
/**
 * VPN connection states
 */
enum VpnConnectionState {
    /**
     * The state of the VPN connection is
     *   unknown.
     */
    UNKNOWN,
    /**
     * The VPN connection is preparing to
     *   connect.
     */
    PREPARE,
    /**
     * The VPN connection needs authorization
     *   credentials.
     */
    NEED_AUTH,
    /**
     * The VPN connection is being established.
     */
    CONNECT,
    /**
     * The VPN connection is getting an IP
     *   address.
     */
    IP_CONFIG_GET,
    /**
     * The VPN connection is active.
     */
    ACTIVATED,
    /**
     * The VPN connection failed.
     */
    FAILED,
    /**
     * The VPN connection is disconnected.
     */
    DISCONNECTED,
}
/**
 * VPN connection state reasons
 */
enum VpnConnectionStateReason {
    /**
     * The reason for the VPN connection
     *   state change is unknown.
     */
    UNKNOWN,
    /**
     * No reason was given for the VPN
     *   connection state change.
     */
    NONE,
    /**
     * The VPN connection changed
     *   state because the user disconnected it.
     */
    USER_DISCONNECTED,
    /**
     * The VPN connection
     *   changed state because the device it was using was disconnected.
     */
    DEVICE_DISCONNECTED,
    /**
     * The service providing the
     *   VPN connection was stopped.
     */
    SERVICE_STOPPED,
    /**
     * The IP config of the VPN
     *   connection was invalid.
     */
    IP_CONFIG_INVALID,
    /**
     * The connection attempt to
     *   the VPN service timed out.
     */
    CONNECT_TIMEOUT,
    /**
     * A timeout occurred
     *   while starting the service providing the VPN connection.
     */
    SERVICE_START_TIMEOUT,
    /**
     * Starting the service
     *   starting the service providing the VPN connection failed.
     */
    SERVICE_START_FAILED,
    /**
     * Necessary secrets for the VPN
     *   connection were not provided.
     */
    NO_SECRETS,
    /**
     * Authentication to the VPN
     *   server failed.
     */
    LOGIN_FAILED,
    /**
     * The connection was
     *   deleted from settings.
     */
    CONNECTION_REMOVED,
}
/**
 * Returned by the VPN service plugin to indicate errors. These codes correspond
 * to errors in the "org.freedesktop.NetworkManager.VPN.Error" namespace.
 */
class VpnPluginError extends GLib.Error {

    // Own fields of NM-1.0.VpnPluginError

/**
 * unknown or unclassified error
 */
FAILED: number
/**
 * the plugin is already starting,
 *   and another connect request was received
 */
STARTINGINPROGRESS: number
/**
 * the plugin is already connected, and
 *   another connect request was received
 */
ALREADYSTARTED: number
/**
 * the plugin is already stopping,
 *   and another stop request was received
 */
STOPPINGINPROGRESS: number
/**
 * the plugin is already stopped, and
 *   another disconnect request was received
 */
ALREADYSTOPPED: number
/**
 * the operation could not be performed in
 *   this state
 */
WRONGSTATE: number
/**
 * the operation could not be performed as
 *   the request contained malformed arguments, or arguments of unexpected type.
 *   Usually means that one of the VPN setting data items or secrets was not of
 *   the expected type (ie int, string, bool, etc).
 */
BADARGUMENTS: number
/**
 * a child process failed to launch
 */
LAUNCHFAILED: number
/**
 * the operation could not be performed
 *   because the connection was invalid.  Usually means that the connection's
 *   VPN setting was missing some required data item or secret.
 */
INVALIDCONNECTION: number
/**
 * the operation could not be
 *   performed as the plugin does not support interactive operations, such as
 *   ConnectInteractive() or NewSecrets()
 */
INTERACTIVENOTSUPPORTED: number

    // Constructors of NM-1.0.VpnPluginError

constructor(options: { message: string, code: number});

    // Owm methods of NM-1.0.VpnPluginError

    static quark(): GLib.Quark
}

/**
 * VPN plugin failure reasons
 */
enum VpnPluginFailure {
    /**
     * Login failed.
     */
    LOGIN_FAILED,
    /**
     * Connect failed.
     */
    CONNECT_FAILED,
    /**
     * Invalid IP configuration returned from
     *   the VPN plugin.
     */
    BAD_IP_CONFIG,
}
/**
 * VPN daemon states
 */
enum VpnServiceState {
    /**
     * The state of the VPN plugin is unknown.
     */
    UNKNOWN,
    /**
     * The VPN plugin is initialized.
     */
    INIT,
    /**
     * Not used.
     */
    SHUTDOWN,
    /**
     * The plugin is attempting to connect to a VPN server.
     */
    STARTING,
    /**
     * The plugin has connected to a VPN server.
     */
    STARTED,
    /**
     * The plugin is disconnecting from the VPN server.
     */
    STOPPING,
    /**
     * The plugin has disconnected from the VPN server.
     */
    STOPPED,
}
/**
 * The #NMWepKeyType values specify how any WEP keys present in the setting
 * are interpreted.  There are no standards governing how to hash the various WEP
 * key/passphrase formats into the actual WEP key.  Unfortunately some WEP keys
 * can be interpreted in multiple ways, requiring the setting to specify how to
 * interpret the any WEP keys.  For example, the key "732f2d712e4a394a375d366931"
 * is both a valid Hexadecimal WEP key and a WEP passphrase.  Further, many
 * ASCII keys are also valid WEP passphrases, but since passphrases and ASCII
 * keys are hashed differently to determine the actual WEP key the type must be
 * specified.
 */
enum WepKeyType {
    /**
     * unknown WEP key type
     */
    UNKNOWN,
    /**
     * indicates a hexadecimal or ASCII formatted WEP key.
     * Hex keys are either 10 or 26 hexadecimal characters (ie "5f782f2f5f" or
     * "732f2d712e4a394a375d366931"), while ASCII keys are either 5 or 13 ASCII
     * characters (ie "abcde" or "blahblah99$*1").
     */
    KEY,
    /**
     * indicates a WEP passphrase (ex "I bought a duck
     * on my way back from the market 235Q&amp;^%^*%") instead of a hexadecimal or ASCII
     * key.  Passphrases are between 8 and 64 characters inclusive and are hashed
     * the actual WEP key using the MD5 hash algorithm.
     */
    PASSPHRASE,
}
/**
 * WiMAX network type.
 */
enum WimaxNspNetworkType {
    /**
     * unknown network type
     */
    UNKNOWN,
    /**
     * home network
     */
    HOME,
    /**
     * partner network
     */
    PARTNER,
    /**
     * roaming partner network
     */
    ROAMING_PARTNER,
}
const ACCESS_POINT_BSSID: string
const ACCESS_POINT_FLAGS: string
const ACCESS_POINT_FREQUENCY: string
const ACCESS_POINT_HW_ADDRESS: string
const ACCESS_POINT_LAST_SEEN: string
const ACCESS_POINT_MAX_BITRATE: string
const ACCESS_POINT_MODE: string
const ACCESS_POINT_RSN_FLAGS: string
const ACCESS_POINT_SSID: string
const ACCESS_POINT_STRENGTH: string
const ACCESS_POINT_WPA_FLAGS: string
const ACTIVE_CONNECTION_CONNECTION: string
const ACTIVE_CONNECTION_CONTROLLER: string
const ACTIVE_CONNECTION_DEFAULT: string
const ACTIVE_CONNECTION_DEFAULT6: string
const ACTIVE_CONNECTION_DEVICES: string
const ACTIVE_CONNECTION_DHCP4_CONFIG: string
const ACTIVE_CONNECTION_DHCP6_CONFIG: string
const ACTIVE_CONNECTION_ID: string
const ACTIVE_CONNECTION_IP4_CONFIG: string
const ACTIVE_CONNECTION_IP6_CONFIG: string
const ACTIVE_CONNECTION_MASTER: string
const ACTIVE_CONNECTION_SPECIFIC_OBJECT_PATH: string
const ACTIVE_CONNECTION_STATE: string
const ACTIVE_CONNECTION_STATE_FLAGS: string
const ACTIVE_CONNECTION_TYPE: string
const ACTIVE_CONNECTION_UUID: string
const ACTIVE_CONNECTION_VPN: string
const BRIDGE_VLAN_VID_MAX: number
const BRIDGE_VLAN_VID_MIN: number
const CHECKPOINT_CREATED: string
const CHECKPOINT_DEVICES: string
const CHECKPOINT_ROLLBACK_TIMEOUT: string
const CLIENT_ACTIVATING_CONNECTION: string
const CLIENT_ACTIVE_CONNECTIONS: string
const CLIENT_ACTIVE_CONNECTION_ADDED: string
const CLIENT_ACTIVE_CONNECTION_REMOVED: string
const CLIENT_ALL_DEVICES: string
const CLIENT_ANY_DEVICE_ADDED: string
const CLIENT_ANY_DEVICE_REMOVED: string
const CLIENT_CAN_MODIFY: string
const CLIENT_CAPABILITIES: string
const CLIENT_CHECKPOINTS: string
const CLIENT_CONNECTIONS: string
const CLIENT_CONNECTION_ADDED: string
const CLIENT_CONNECTION_REMOVED: string
const CLIENT_CONNECTIVITY: string
const CLIENT_CONNECTIVITY_CHECK_AVAILABLE: string
const CLIENT_CONNECTIVITY_CHECK_ENABLED: string
const CLIENT_CONNECTIVITY_CHECK_URI: string
const CLIENT_DBUS_CONNECTION: string
const CLIENT_DBUS_NAME_OWNER: string
const CLIENT_DEVICES: string
const CLIENT_DEVICE_ADDED: string
const CLIENT_DEVICE_REMOVED: string
const CLIENT_DNS_CONFIGURATION: string
const CLIENT_DNS_MODE: string
const CLIENT_DNS_RC_MANAGER: string
const CLIENT_HOSTNAME: string
const CLIENT_INSTANCE_FLAGS: string
const CLIENT_METERED: string
const CLIENT_NETWORKING_ENABLED: string
const CLIENT_NM_RUNNING: string
const CLIENT_PERMISSIONS_STATE: string
const CLIENT_PERMISSION_CHANGED: string
const CLIENT_PRIMARY_CONNECTION: string
const CLIENT_RADIO_FLAGS: string
const CLIENT_STARTUP: string
const CLIENT_STATE: string
const CLIENT_VERSION: string
const CLIENT_VERSION_INFO: string
const CLIENT_WIMAX_ENABLED: string
const CLIENT_WIMAX_HARDWARE_ENABLED: string
const CLIENT_WIRELESS_ENABLED: string
const CLIENT_WIRELESS_HARDWARE_ENABLED: string
const CLIENT_WWAN_ENABLED: string
const CLIENT_WWAN_HARDWARE_ENABLED: string
const CONNECTION_CHANGED: string
const CONNECTION_NORMALIZE_PARAM_IP4_CONFIG_METHOD: string
const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string
const CONNECTION_SECRETS_CLEARED: string
const CONNECTION_SECRETS_UPDATED: string
const DBUS_INTERFACE: string
const DBUS_INTERFACE_DNS_MANAGER: string
const DBUS_INTERFACE_SETTINGS: string
const DBUS_INTERFACE_SETTINGS_CONNECTION: string
const DBUS_INTERFACE_SETTINGS_CONNECTION_SECRETS: string
const DBUS_INTERFACE_VPN: string
const DBUS_INTERFACE_VPN_CONNECTION: string
const DBUS_INVALID_VPN_CONNECTION: string
const DBUS_NO_ACTIVE_VPN_CONNECTION: string
const DBUS_NO_VPN_CONNECTIONS: string
const DBUS_PATH: string
const DBUS_PATH_AGENT_MANAGER: string
const DBUS_PATH_DNS_MANAGER: string
const DBUS_PATH_SECRET_AGENT: string
const DBUS_PATH_SETTINGS: string
const DBUS_PATH_SETTINGS_CONNECTION: string
const DBUS_PATH_VPN: string
const DBUS_PATH_VPN_CONNECTION: string
const DBUS_SERVICE: string
const DBUS_VPN_ALREADY_STARTED: string
const DBUS_VPN_ALREADY_STOPPED: string
const DBUS_VPN_BAD_ARGUMENTS: string
const DBUS_VPN_ERROR_PREFIX: string
const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string
const DBUS_VPN_SIGNAL_CONNECT_FAILED: string
const DBUS_VPN_SIGNAL_IP4_CONFIG: string
const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string
const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string
const DBUS_VPN_SIGNAL_LOGIN_BANNER: string
const DBUS_VPN_SIGNAL_LOGIN_FAILED: string
const DBUS_VPN_SIGNAL_STATE_CHANGE: string
const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string
const DBUS_VPN_STARTING_IN_PROGRESS: string
const DBUS_VPN_STOPPING_IN_PROGRESS: string
const DBUS_VPN_WRONG_STATE: string
const DEVICE_6LOWPAN_HW_ADDRESS: string
const DEVICE_6LOWPAN_PARENT: string
const DEVICE_ACTIVE_CONNECTION: string
const DEVICE_ADSL_CARRIER: string
const DEVICE_AUTOCONNECT: string
const DEVICE_AVAILABLE_CONNECTIONS: string
const DEVICE_BOND_CARRIER: string
const DEVICE_BOND_HW_ADDRESS: string
const DEVICE_BOND_SLAVES: string
const DEVICE_BRIDGE_CARRIER: string
const DEVICE_BRIDGE_HW_ADDRESS: string
const DEVICE_BRIDGE_SLAVES: string
const DEVICE_BT_CAPABILITIES: string
const DEVICE_BT_HW_ADDRESS: string
const DEVICE_BT_NAME: string
const DEVICE_CAPABILITIES: string
const DEVICE_DEVICE_TYPE: string
const DEVICE_DHCP4_CONFIG: string
const DEVICE_DHCP6_CONFIG: string
const DEVICE_DRIVER: string
const DEVICE_DRIVER_VERSION: string
const DEVICE_DUMMY_HW_ADDRESS: string
const DEVICE_ETHERNET_CARRIER: string
const DEVICE_ETHERNET_HW_ADDRESS: string
const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string
const DEVICE_ETHERNET_S390_SUBCHANNELS: string
const DEVICE_ETHERNET_SPEED: string
const DEVICE_FIRMWARE_MISSING: string
const DEVICE_FIRMWARE_VERSION: string
const DEVICE_GENERIC_HW_ADDRESS: string
const DEVICE_GENERIC_TYPE_DESCRIPTION: string
const DEVICE_HW_ADDRESS: string
const DEVICE_INFINIBAND_CARRIER: string
const DEVICE_INFINIBAND_HW_ADDRESS: string
const DEVICE_INTERFACE: string
const DEVICE_INTERFACE_FLAGS: string
const DEVICE_IP4_CONFIG: string
const DEVICE_IP4_CONNECTIVITY: string
const DEVICE_IP6_CONFIG: string
const DEVICE_IP6_CONNECTIVITY: string
const DEVICE_IP_INTERFACE: string
const DEVICE_IP_TUNNEL_ENCAPSULATION_LIMIT: string
const DEVICE_IP_TUNNEL_FLAGS: string
const DEVICE_IP_TUNNEL_FLOW_LABEL: string
const DEVICE_IP_TUNNEL_INPUT_KEY: string
const DEVICE_IP_TUNNEL_LOCAL: string
const DEVICE_IP_TUNNEL_MODE: string
const DEVICE_IP_TUNNEL_OUTPUT_KEY: string
const DEVICE_IP_TUNNEL_PARENT: string
const DEVICE_IP_TUNNEL_PATH_MTU_DISCOVERY: string
const DEVICE_IP_TUNNEL_REMOTE: string
const DEVICE_IP_TUNNEL_TOS: string
const DEVICE_IP_TUNNEL_TTL: string
const DEVICE_LLDP_NEIGHBORS: string
const DEVICE_MACSEC_CIPHER_SUITE: string
const DEVICE_MACSEC_ENCODING_SA: string
const DEVICE_MACSEC_ENCRYPT: string
const DEVICE_MACSEC_ES: string
const DEVICE_MACSEC_HW_ADDRESS: string
const DEVICE_MACSEC_ICV_LENGTH: string
const DEVICE_MACSEC_INCLUDE_SCI: string
const DEVICE_MACSEC_PARENT: string
const DEVICE_MACSEC_PROTECT: string
const DEVICE_MACSEC_REPLAY_PROTECT: string
const DEVICE_MACSEC_SCB: string
const DEVICE_MACSEC_SCI: string
const DEVICE_MACSEC_VALIDATION: string
const DEVICE_MACSEC_WINDOW: string
const DEVICE_MACVLAN_HW_ADDRESS: string
const DEVICE_MACVLAN_MODE: string
const DEVICE_MACVLAN_NO_PROMISC: string
const DEVICE_MACVLAN_PARENT: string
const DEVICE_MACVLAN_TAP: string
const DEVICE_MANAGED: string
const DEVICE_METERED: string
const DEVICE_MODEM_APN: string
const DEVICE_MODEM_CURRENT_CAPABILITIES: string
const DEVICE_MODEM_DEVICE_ID: string
const DEVICE_MODEM_MODEM_CAPABILITIES: string
const DEVICE_MODEM_OPERATOR_CODE: string
const DEVICE_MTU: string
const DEVICE_NM_PLUGIN_MISSING: string
const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string
const DEVICE_OLPC_MESH_COMPANION: string
const DEVICE_OLPC_MESH_HW_ADDRESS: string
const DEVICE_OVS_BRIDGE_SLAVES: string
const DEVICE_OVS_PORT_SLAVES: string
const DEVICE_PATH: string
const DEVICE_PHYSICAL_PORT_ID: string
const DEVICE_PORTS: string
const DEVICE_PRODUCT: string
const DEVICE_REAL: string
const DEVICE_STATE: string
const DEVICE_STATE_REASON: string
const DEVICE_TEAM_CARRIER: string
const DEVICE_TEAM_CONFIG: string
const DEVICE_TEAM_HW_ADDRESS: string
const DEVICE_TEAM_SLAVES: string
const DEVICE_TUN_GROUP: string
const DEVICE_TUN_HW_ADDRESS: string
const DEVICE_TUN_MODE: string
const DEVICE_TUN_MULTI_QUEUE: string
const DEVICE_TUN_NO_PI: string
const DEVICE_TUN_OWNER: string
const DEVICE_TUN_VNET_HDR: string
const DEVICE_UDI: string
const DEVICE_VENDOR: string
const DEVICE_VETH_PEER: string
const DEVICE_VLAN_CARRIER: string
const DEVICE_VLAN_HW_ADDRESS: string
const DEVICE_VLAN_PARENT: string
const DEVICE_VLAN_VLAN_ID: string
const DEVICE_VRF_TABLE: string
const DEVICE_VXLAN_AGEING: string
const DEVICE_VXLAN_CARRIER: string
const DEVICE_VXLAN_DST_PORT: string
const DEVICE_VXLAN_GROUP: string
const DEVICE_VXLAN_HW_ADDRESS: string
const DEVICE_VXLAN_ID: string
const DEVICE_VXLAN_L2MISS: string
const DEVICE_VXLAN_L3MISS: string
const DEVICE_VXLAN_LEARNING: string
const DEVICE_VXLAN_LIMIT: string
const DEVICE_VXLAN_LOCAL: string
const DEVICE_VXLAN_PARENT: string
const DEVICE_VXLAN_PROXY: string
const DEVICE_VXLAN_RSC: string
const DEVICE_VXLAN_SRC_PORT_MAX: string
const DEVICE_VXLAN_SRC_PORT_MIN: string
const DEVICE_VXLAN_TOS: string
const DEVICE_VXLAN_TTL: string
const DEVICE_WIFI_ACCESS_POINTS: string
const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string
const DEVICE_WIFI_BITRATE: string
const DEVICE_WIFI_CAPABILITIES: string
const DEVICE_WIFI_HW_ADDRESS: string
const DEVICE_WIFI_LAST_SCAN: string
const DEVICE_WIFI_MODE: string
const DEVICE_WIFI_P2P_HW_ADDRESS: string
const DEVICE_WIFI_P2P_PEERS: string
const DEVICE_WIFI_P2P_WFDIES: string
const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string
const DEVICE_WIMAX_ACTIVE_NSP: string
const DEVICE_WIMAX_BSID: string
const DEVICE_WIMAX_CENTER_FREQUENCY: string
const DEVICE_WIMAX_CINR: string
const DEVICE_WIMAX_HW_ADDRESS: string
const DEVICE_WIMAX_NSPS: string
const DEVICE_WIMAX_RSSI: string
const DEVICE_WIMAX_TX_POWER: string
const DEVICE_WIREGUARD_FWMARK: string
const DEVICE_WIREGUARD_LISTEN_PORT: string
const DEVICE_WIREGUARD_PUBLIC_KEY: string
const DEVICE_WPAN_HW_ADDRESS: string
const DHCP_CONFIG_FAMILY: string
const DHCP_CONFIG_OPTIONS: string
const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_RX: string
const ETHTOOL_OPTNAME_COALESCE_ADAPTIVE_TX: string
const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_HIGH: string
const ETHTOOL_OPTNAME_COALESCE_PKT_RATE_LOW: string
const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES: string
const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_HIGH: string
const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_IRQ: string
const ETHTOOL_OPTNAME_COALESCE_RX_FRAMES_LOW: string
const ETHTOOL_OPTNAME_COALESCE_RX_USECS: string
const ETHTOOL_OPTNAME_COALESCE_RX_USECS_HIGH: string
const ETHTOOL_OPTNAME_COALESCE_RX_USECS_IRQ: string
const ETHTOOL_OPTNAME_COALESCE_RX_USECS_LOW: string
const ETHTOOL_OPTNAME_COALESCE_SAMPLE_INTERVAL: string
const ETHTOOL_OPTNAME_COALESCE_STATS_BLOCK_USECS: string
const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES: string
const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_HIGH: string
const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_IRQ: string
const ETHTOOL_OPTNAME_COALESCE_TX_FRAMES_LOW: string
const ETHTOOL_OPTNAME_COALESCE_TX_USECS: string
const ETHTOOL_OPTNAME_COALESCE_TX_USECS_HIGH: string
const ETHTOOL_OPTNAME_COALESCE_TX_USECS_IRQ: string
const ETHTOOL_OPTNAME_COALESCE_TX_USECS_LOW: string
const ETHTOOL_OPTNAME_FEATURE_ESP_HW_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_ESP_TX_CSUM_HW_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_FCOE_MTU: string
const ETHTOOL_OPTNAME_FEATURE_GRO: string
const ETHTOOL_OPTNAME_FEATURE_GSO: string
const ETHTOOL_OPTNAME_FEATURE_HIGHDMA: string
const ETHTOOL_OPTNAME_FEATURE_HW_TC_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_L2_FWD_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_LOOPBACK: string
const ETHTOOL_OPTNAME_FEATURE_LRO: string
const ETHTOOL_OPTNAME_FEATURE_MACSEC_HW_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_NTUPLE: string
const ETHTOOL_OPTNAME_FEATURE_RX: string
const ETHTOOL_OPTNAME_FEATURE_RXHASH: string
const ETHTOOL_OPTNAME_FEATURE_RXVLAN: string
const ETHTOOL_OPTNAME_FEATURE_RX_ALL: string
const ETHTOOL_OPTNAME_FEATURE_RX_FCS: string
const ETHTOOL_OPTNAME_FEATURE_RX_GRO_HW: string
const ETHTOOL_OPTNAME_FEATURE_RX_GRO_LIST: string
const ETHTOOL_OPTNAME_FEATURE_RX_UDP_GRO_FORWARDING: string
const ETHTOOL_OPTNAME_FEATURE_RX_UDP_TUNNEL_PORT_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_FILTER: string
const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_FILTER: string
const ETHTOOL_OPTNAME_FEATURE_RX_VLAN_STAG_HW_PARSE: string
const ETHTOOL_OPTNAME_FEATURE_SG: string
const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RECORD: string
const ETHTOOL_OPTNAME_FEATURE_TLS_HW_RX_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_TLS_HW_TX_OFFLOAD: string
const ETHTOOL_OPTNAME_FEATURE_TSO: string
const ETHTOOL_OPTNAME_FEATURE_TX: string
const ETHTOOL_OPTNAME_FEATURE_TXVLAN: string
const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_FCOE_CRC: string
const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV4: string
const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IPV6: string
const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_IP_GENERIC: string
const ETHTOOL_OPTNAME_FEATURE_TX_CHECKSUM_SCTP: string
const ETHTOOL_OPTNAME_FEATURE_TX_ESP_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_FCOE_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_GRE_CSUM_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_GRE_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_GSO_LIST: string
const ETHTOOL_OPTNAME_FEATURE_TX_GSO_PARTIAL: string
const ETHTOOL_OPTNAME_FEATURE_TX_GSO_ROBUST: string
const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP4_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_IPXIP6_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_NOCACHE_COPY: string
const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER: string
const ETHTOOL_OPTNAME_FEATURE_TX_SCATTER_GATHER_FRAGLIST: string
const ETHTOOL_OPTNAME_FEATURE_TX_SCTP_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_TCP6_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_TCP_ECN_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_TCP_MANGLEID_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_TCP_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_TUNNEL_REMCSUM_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_UDP_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_CSUM_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_UDP_TNL_SEGMENTATION: string
const ETHTOOL_OPTNAME_FEATURE_TX_VLAN_STAG_HW_INSERT: string
const ETHTOOL_OPTNAME_PAUSE_AUTONEG: string
const ETHTOOL_OPTNAME_PAUSE_RX: string
const ETHTOOL_OPTNAME_PAUSE_TX: string
const ETHTOOL_OPTNAME_RING_RX: string
const ETHTOOL_OPTNAME_RING_RX_JUMBO: string
const ETHTOOL_OPTNAME_RING_RX_MINI: string
const ETHTOOL_OPTNAME_RING_TX: string
const IP_ADDRESS_ATTRIBUTE_LABEL: string
const IP_CONFIG_ADDRESSES: string
const IP_CONFIG_DOMAINS: string
const IP_CONFIG_FAMILY: string
const IP_CONFIG_GATEWAY: string
const IP_CONFIG_NAMESERVERS: string
const IP_CONFIG_ROUTES: string
const IP_CONFIG_SEARCHES: string
const IP_CONFIG_WINS_SERVERS: string
const IP_ROUTE_ATTRIBUTE_ADVMSS: string
const IP_ROUTE_ATTRIBUTE_CWND: string
const IP_ROUTE_ATTRIBUTE_FROM: string
const IP_ROUTE_ATTRIBUTE_INITCWND: string
const IP_ROUTE_ATTRIBUTE_INITRWND: string
const IP_ROUTE_ATTRIBUTE_LOCK_ADVMSS: string
const IP_ROUTE_ATTRIBUTE_LOCK_CWND: string
const IP_ROUTE_ATTRIBUTE_LOCK_INITCWND: string
const IP_ROUTE_ATTRIBUTE_LOCK_INITRWND: string
const IP_ROUTE_ATTRIBUTE_LOCK_MTU: string
const IP_ROUTE_ATTRIBUTE_LOCK_WINDOW: string
const IP_ROUTE_ATTRIBUTE_MTU: string
const IP_ROUTE_ATTRIBUTE_ONLINK: string
const IP_ROUTE_ATTRIBUTE_QUICKACK: string
const IP_ROUTE_ATTRIBUTE_RTO_MIN: string
const IP_ROUTE_ATTRIBUTE_SCOPE: string
const IP_ROUTE_ATTRIBUTE_SRC: string
const IP_ROUTE_ATTRIBUTE_TABLE: string
const IP_ROUTE_ATTRIBUTE_TOS: string
const IP_ROUTE_ATTRIBUTE_TYPE: string
const IP_ROUTE_ATTRIBUTE_WEIGHT: string
const IP_ROUTE_ATTRIBUTE_WINDOW: string
const LLDP_ATTR_CHASSIS_ID: string
const LLDP_ATTR_CHASSIS_ID_TYPE: string
const LLDP_ATTR_DESTINATION: string
const LLDP_ATTR_IEEE_802_1_PPVID: string
const LLDP_ATTR_IEEE_802_1_PPVIDS: string
const LLDP_ATTR_IEEE_802_1_PPVID_FLAGS: string
const LLDP_ATTR_IEEE_802_1_PVID: string
const LLDP_ATTR_IEEE_802_1_VID: string
const LLDP_ATTR_IEEE_802_1_VLANS: string
const LLDP_ATTR_IEEE_802_1_VLAN_NAME: string
const LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF: string
const LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE: string
const LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI: string
const LLDP_ATTR_MANAGEMENT_ADDRESSES: string
const LLDP_ATTR_MUD_URL: string
const LLDP_ATTR_PORT_DESCRIPTION: string
const LLDP_ATTR_PORT_ID: string
const LLDP_ATTR_PORT_ID_TYPE: string
const LLDP_ATTR_RAW: string
const LLDP_ATTR_SYSTEM_CAPABILITIES: string
const LLDP_ATTR_SYSTEM_DESCRIPTION: string
const LLDP_ATTR_SYSTEM_NAME: string
const LLDP_DEST_NEAREST_BRIDGE: string
const LLDP_DEST_NEAREST_CUSTOMER_BRIDGE: string
const LLDP_DEST_NEAREST_NON_TPMR_BRIDGE: string
/**
 * Evaluates to the major version number of NetworkManager which this source
 * is compiled against.
 */
const MAJOR_VERSION: number
/**
 * Evaluates to the micro version number of NetworkManager which this source
 * compiled against.
 */
const MICRO_VERSION: number
/**
 * Evaluates to the minor version number of NetworkManager which this source
 * is compiled against.
 */
const MINOR_VERSION: number
const OBJECT_CLIENT: string
const OBJECT_PATH: string
const REMOTE_CONNECTION_DBUS_CONNECTION: string
const REMOTE_CONNECTION_FILENAME: string
const REMOTE_CONNECTION_FLAGS: string
const REMOTE_CONNECTION_PATH: string
const REMOTE_CONNECTION_UNSAVED: string
const REMOTE_CONNECTION_VERSION_ID: string
const REMOTE_CONNECTION_VISIBLE: string
const SECRET_AGENT_OLD_AUTO_REGISTER: string
const SECRET_AGENT_OLD_CAPABILITIES: string
const SECRET_AGENT_OLD_DBUS_CONNECTION: string
const SECRET_AGENT_OLD_IDENTIFIER: string
const SECRET_AGENT_OLD_REGISTERED: string
const SETTING_6LOWPAN_PARENT: string
const SETTING_6LOWPAN_SETTING_NAME: string
const SETTING_802_1X_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_ANONYMOUS_IDENTITY: string
const SETTING_802_1X_AUTH_TIMEOUT: string
const SETTING_802_1X_CA_CERT: string
const SETTING_802_1X_CA_CERT_PASSWORD: string
const SETTING_802_1X_CA_CERT_PASSWORD_FLAGS: string
const SETTING_802_1X_CA_PATH: string
const SETTING_802_1X_CERT_SCHEME_PREFIX_PATH: string
const SETTING_802_1X_CERT_SCHEME_PREFIX_PKCS11: string
const SETTING_802_1X_CLIENT_CERT: string
const SETTING_802_1X_CLIENT_CERT_PASSWORD: string
const SETTING_802_1X_CLIENT_CERT_PASSWORD_FLAGS: string
const SETTING_802_1X_DOMAIN_MATCH: string
const SETTING_802_1X_DOMAIN_SUFFIX_MATCH: string
const SETTING_802_1X_EAP: string
const SETTING_802_1X_IDENTITY: string
const SETTING_802_1X_OPTIONAL: string
const SETTING_802_1X_PAC_FILE: string
const SETTING_802_1X_PASSWORD: string
const SETTING_802_1X_PASSWORD_FLAGS: string
const SETTING_802_1X_PASSWORD_RAW: string
const SETTING_802_1X_PASSWORD_RAW_FLAGS: string
const SETTING_802_1X_PHASE1_AUTH_FLAGS: string
const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string
const SETTING_802_1X_PHASE1_PEAPLABEL: string
const SETTING_802_1X_PHASE1_PEAPVER: string
const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_PHASE2_AUTH: string
const SETTING_802_1X_PHASE2_AUTHEAP: string
const SETTING_802_1X_PHASE2_CA_CERT: string
const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD: string
const SETTING_802_1X_PHASE2_CA_CERT_PASSWORD_FLAGS: string
const SETTING_802_1X_PHASE2_CA_PATH: string
const SETTING_802_1X_PHASE2_CLIENT_CERT: string
const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD: string
const SETTING_802_1X_PHASE2_CLIENT_CERT_PASSWORD_FLAGS: string
const SETTING_802_1X_PHASE2_DOMAIN_MATCH: string
const SETTING_802_1X_PHASE2_DOMAIN_SUFFIX_MATCH: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string
const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string
const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string
const SETTING_802_1X_PIN: string
const SETTING_802_1X_PIN_FLAGS: string
const SETTING_802_1X_PRIVATE_KEY: string
const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string
const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string
const SETTING_802_1X_SETTING_NAME: string
const SETTING_802_1X_SUBJECT_MATCH: string
const SETTING_802_1X_SYSTEM_CA_CERTS: string
const SETTING_ADSL_ENCAPSULATION: string
const SETTING_ADSL_ENCAPSULATION_LLC: string
const SETTING_ADSL_ENCAPSULATION_VCMUX: string
const SETTING_ADSL_PASSWORD: string
const SETTING_ADSL_PASSWORD_FLAGS: string
const SETTING_ADSL_PROTOCOL: string
const SETTING_ADSL_PROTOCOL_IPOATM: string
const SETTING_ADSL_PROTOCOL_PPPOA: string
const SETTING_ADSL_PROTOCOL_PPPOE: string
const SETTING_ADSL_SETTING_NAME: string
const SETTING_ADSL_USERNAME: string
const SETTING_ADSL_VCI: string
const SETTING_ADSL_VPI: string
const SETTING_BLUETOOTH_BDADDR: string
const SETTING_BLUETOOTH_SETTING_NAME: string
const SETTING_BLUETOOTH_TYPE: string
/**
 * Connection type describing a connection to devices that support the Bluetooth
 * DUN profile.
 */
const SETTING_BLUETOOTH_TYPE_DUN: string
/**
 * Connection type describing a Bluetooth NAP (Network Access Point),
 * which accepts PANU clients.
 */
const SETTING_BLUETOOTH_TYPE_NAP: string
/**
 * Connection type describing PANU connection to a Bluetooth NAP (Network
 * Access Point).
 */
const SETTING_BLUETOOTH_TYPE_PANU: string
const SETTING_BOND_OPTIONS: string
const SETTING_BOND_OPTION_ACTIVE_SLAVE: string
const SETTING_BOND_OPTION_AD_ACTOR_SYSTEM: string
const SETTING_BOND_OPTION_AD_ACTOR_SYS_PRIO: string
const SETTING_BOND_OPTION_AD_SELECT: string
const SETTING_BOND_OPTION_AD_USER_PORT_KEY: string
const SETTING_BOND_OPTION_ALL_SLAVES_ACTIVE: string
const SETTING_BOND_OPTION_ARP_ALL_TARGETS: string
const SETTING_BOND_OPTION_ARP_INTERVAL: string
const SETTING_BOND_OPTION_ARP_IP_TARGET: string
const SETTING_BOND_OPTION_ARP_MISSED_MAX: string
const SETTING_BOND_OPTION_ARP_VALIDATE: string
const SETTING_BOND_OPTION_BALANCE_SLB: string
const SETTING_BOND_OPTION_DOWNDELAY: string
const SETTING_BOND_OPTION_FAIL_OVER_MAC: string
const SETTING_BOND_OPTION_LACP_ACTIVE: string
const SETTING_BOND_OPTION_LACP_RATE: string
const SETTING_BOND_OPTION_LP_INTERVAL: string
const SETTING_BOND_OPTION_MIIMON: string
const SETTING_BOND_OPTION_MIN_LINKS: string
const SETTING_BOND_OPTION_MODE: string
const SETTING_BOND_OPTION_NS_IP6_TARGET: string
const SETTING_BOND_OPTION_NUM_GRAT_ARP: string
const SETTING_BOND_OPTION_NUM_UNSOL_NA: string
const SETTING_BOND_OPTION_PACKETS_PER_SLAVE: string
const SETTING_BOND_OPTION_PEER_NOTIF_DELAY: string
const SETTING_BOND_OPTION_PRIMARY: string
const SETTING_BOND_OPTION_PRIMARY_RESELECT: string
const SETTING_BOND_OPTION_RESEND_IGMP: string
const SETTING_BOND_OPTION_TLB_DYNAMIC_LB: string
const SETTING_BOND_OPTION_UPDELAY: string
const SETTING_BOND_OPTION_USE_CARRIER: string
const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string
const SETTING_BOND_PORT_PRIO: string
const SETTING_BOND_PORT_QUEUE_ID: string
const SETTING_BOND_PORT_SETTING_NAME: string
const SETTING_BOND_SETTING_NAME: string
const SETTING_BRIDGE_AGEING_TIME: string
const SETTING_BRIDGE_FORWARD_DELAY: string
const SETTING_BRIDGE_GROUP_ADDRESS: string
const SETTING_BRIDGE_GROUP_FORWARD_MASK: string
const SETTING_BRIDGE_HELLO_TIME: string
const SETTING_BRIDGE_MAC_ADDRESS: string
const SETTING_BRIDGE_MAX_AGE: string
const SETTING_BRIDGE_MULTICAST_HASH_MAX: string
const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_COUNT: string
const SETTING_BRIDGE_MULTICAST_LAST_MEMBER_INTERVAL: string
const SETTING_BRIDGE_MULTICAST_MEMBERSHIP_INTERVAL: string
const SETTING_BRIDGE_MULTICAST_QUERIER: string
const SETTING_BRIDGE_MULTICAST_QUERIER_INTERVAL: string
const SETTING_BRIDGE_MULTICAST_QUERY_INTERVAL: string
const SETTING_BRIDGE_MULTICAST_QUERY_RESPONSE_INTERVAL: string
const SETTING_BRIDGE_MULTICAST_QUERY_USE_IFADDR: string
const SETTING_BRIDGE_MULTICAST_ROUTER: string
const SETTING_BRIDGE_MULTICAST_SNOOPING: string
const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_COUNT: string
const SETTING_BRIDGE_MULTICAST_STARTUP_QUERY_INTERVAL: string
const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string
const SETTING_BRIDGE_PORT_PATH_COST: string
const SETTING_BRIDGE_PORT_PRIORITY: string
const SETTING_BRIDGE_PORT_SETTING_NAME: string
const SETTING_BRIDGE_PORT_VLANS: string
const SETTING_BRIDGE_PRIORITY: string
const SETTING_BRIDGE_SETTING_NAME: string
const SETTING_BRIDGE_STP: string
const SETTING_BRIDGE_VLANS: string
const SETTING_BRIDGE_VLAN_DEFAULT_PVID: string
const SETTING_BRIDGE_VLAN_FILTERING: string
const SETTING_BRIDGE_VLAN_PROTOCOL: string
const SETTING_BRIDGE_VLAN_STATS_ENABLED: string
const SETTING_CDMA_MTU: string
const SETTING_CDMA_NUMBER: string
const SETTING_CDMA_PASSWORD: string
const SETTING_CDMA_PASSWORD_FLAGS: string
const SETTING_CDMA_SETTING_NAME: string
const SETTING_CDMA_USERNAME: string
const SETTING_CONNECTION_AUTH_RETRIES: string
const SETTING_CONNECTION_AUTOCONNECT: string
const SETTING_CONNECTION_AUTOCONNECT_PRIORITY: string
const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_DEFAULT: number
const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MAX: number
const SETTING_CONNECTION_AUTOCONNECT_PRIORITY_MIN: number
const SETTING_CONNECTION_AUTOCONNECT_RETRIES: string
const SETTING_CONNECTION_AUTOCONNECT_SLAVES: string
const SETTING_CONNECTION_DNS_OVER_TLS: string
const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string
const SETTING_CONNECTION_ID: string
const SETTING_CONNECTION_INTERFACE_NAME: string
const SETTING_CONNECTION_LLDP: string
const SETTING_CONNECTION_LLMNR: string
const SETTING_CONNECTION_MASTER: string
const SETTING_CONNECTION_MDNS: string
const SETTING_CONNECTION_METERED: string
const SETTING_CONNECTION_MPTCP_FLAGS: string
const SETTING_CONNECTION_MUD_URL: string
const SETTING_CONNECTION_MULTI_CONNECT: string
const SETTING_CONNECTION_PERMISSIONS: string
const SETTING_CONNECTION_READ_ONLY: string
const SETTING_CONNECTION_SECONDARIES: string
const SETTING_CONNECTION_SETTING_NAME: string
const SETTING_CONNECTION_SLAVE_TYPE: string
const SETTING_CONNECTION_STABLE_ID: string
const SETTING_CONNECTION_TIMESTAMP: string
const SETTING_CONNECTION_TYPE: string
const SETTING_CONNECTION_UUID: string
const SETTING_CONNECTION_WAIT_ACTIVATION_DELAY: string
const SETTING_CONNECTION_WAIT_DEVICE_TIMEOUT: string
const SETTING_CONNECTION_ZONE: string
const SETTING_DCB_APP_FCOE_FLAGS: string
const SETTING_DCB_APP_FCOE_MODE: string
const SETTING_DCB_APP_FCOE_PRIORITY: string
const SETTING_DCB_APP_FIP_FLAGS: string
const SETTING_DCB_APP_FIP_PRIORITY: string
const SETTING_DCB_APP_ISCSI_FLAGS: string
const SETTING_DCB_APP_ISCSI_PRIORITY: string
/**
 * Indicates that the FCoE controller should use "fabric" mode (default)
 */
const SETTING_DCB_FCOE_MODE_FABRIC: string
/**
 * Indicates that the FCoE controller should use "VN2VN" mode.
 */
const SETTING_DCB_FCOE_MODE_VN2VN: string
const SETTING_DCB_PRIORITY_BANDWIDTH: string
const SETTING_DCB_PRIORITY_FLOW_CONTROL: string
const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string
const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string
const SETTING_DCB_PRIORITY_GROUP_FLAGS: string
const SETTING_DCB_PRIORITY_GROUP_ID: string
const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string
const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string
const SETTING_DCB_SETTING_NAME: string
const SETTING_DNS_OPTION_ATTEMPTS: string
const SETTING_DNS_OPTION_DEBUG: string
const SETTING_DNS_OPTION_EDNS0: string
const SETTING_DNS_OPTION_INET6: string
const SETTING_DNS_OPTION_IP6_BYTESTRING: string
const SETTING_DNS_OPTION_IP6_DOTINT: string
const SETTING_DNS_OPTION_NDOTS: string
const SETTING_DNS_OPTION_NO_AAAA: string
const SETTING_DNS_OPTION_NO_CHECK_NAMES: string
const SETTING_DNS_OPTION_NO_IP6_DOTINT: string
const SETTING_DNS_OPTION_NO_RELOAD: string
const SETTING_DNS_OPTION_NO_TLD_QUERY: string
const SETTING_DNS_OPTION_ROTATE: string
const SETTING_DNS_OPTION_SINGLE_REQUEST: string
const SETTING_DNS_OPTION_SINGLE_REQUEST_REOPEN: string
const SETTING_DNS_OPTION_TIMEOUT: string
const SETTING_DNS_OPTION_TRUST_AD: string
const SETTING_DNS_OPTION_USE_VC: string
const SETTING_DUMMY_SETTING_NAME: string
const SETTING_ETHTOOL_SETTING_NAME: string
const SETTING_GENERIC_SETTING_NAME: string
const SETTING_GSM_APN: string
const SETTING_GSM_AUTO_CONFIG: string
const SETTING_GSM_DEVICE_ID: string
const SETTING_GSM_HOME_ONLY: string
const SETTING_GSM_INITIAL_EPS_BEARER_APN: string
const SETTING_GSM_INITIAL_EPS_BEARER_CONFIGURE: string
const SETTING_GSM_MTU: string
const SETTING_GSM_NETWORK_ID: string
const SETTING_GSM_NUMBER: string
const SETTING_GSM_PASSWORD: string
const SETTING_GSM_PASSWORD_FLAGS: string
const SETTING_GSM_PIN: string
const SETTING_GSM_PIN_FLAGS: string
const SETTING_GSM_SETTING_NAME: string
const SETTING_GSM_SIM_ID: string
const SETTING_GSM_SIM_OPERATOR_ID: string
const SETTING_GSM_USERNAME: string
const SETTING_HOSTNAME_FROM_DHCP: string
const SETTING_HOSTNAME_FROM_DNS_LOOKUP: string
const SETTING_HOSTNAME_ONLY_FROM_DEFAULT: string
const SETTING_HOSTNAME_PRIORITY: string
const SETTING_HOSTNAME_SETTING_NAME: string
const SETTING_INFINIBAND_MAC_ADDRESS: string
const SETTING_INFINIBAND_MTU: string
const SETTING_INFINIBAND_PARENT: string
const SETTING_INFINIBAND_P_KEY: string
const SETTING_INFINIBAND_SETTING_NAME: string
const SETTING_INFINIBAND_TRANSPORT_MODE: string
const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string
const SETTING_IP4_CONFIG_DHCP_FQDN: string
const SETTING_IP4_CONFIG_DHCP_VENDOR_CLASS_IDENTIFIER: string
const SETTING_IP4_CONFIG_LINK_LOCAL: string
/**
 * IPv4 configuration should be automatically determined via a method appropriate
 * for the hardware interface, ie DHCP or PPP or some other device-specific
 * manner.
 */
const SETTING_IP4_CONFIG_METHOD_AUTO: string
/**
 * This connection does not use or require IPv4 address and it should be disabled.
 */
const SETTING_IP4_CONFIG_METHOD_DISABLED: string
/**
 * IPv4 configuration should be automatically configured for link-local-only
 * operation.
 */
const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string
/**
 * All necessary IPv4 configuration (addresses, prefix, DNS, etc) is specified
 * in the setting's properties.
 */
const SETTING_IP4_CONFIG_METHOD_MANUAL: string
/**
 * This connection specifies configuration that allows other computers to
 * connect through it to the default network (usually the Internet).  The
 * connection's interface will be assigned a private address, and a DHCP server,
 * caching DNS server, and Network Address Translation (NAT) functionality will
 * be started on this connection's interface to allow other devices to connect
 * through that interface to the default network.
 */
const SETTING_IP4_CONFIG_METHOD_SHARED: string
const SETTING_IP4_CONFIG_SETTING_NAME: string
const SETTING_IP6_CONFIG_ADDR_GEN_MODE: string
const SETTING_IP6_CONFIG_DHCP_DUID: string
const SETTING_IP6_CONFIG_DHCP_PD_HINT: string
const SETTING_IP6_CONFIG_IP6_PRIVACY: string
/**
 * IPv6 configuration should be automatically determined via a method appropriate
 * for the hardware interface, ie router advertisements, DHCP, or PPP or some
 * other device-specific manner.
 */
const SETTING_IP6_CONFIG_METHOD_AUTO: string
/**
 * IPv6 configuration should be automatically determined via DHCPv6 only and
 * router advertisements should be ignored.
 */
const SETTING_IP6_CONFIG_METHOD_DHCP: string
/**
 * IPv6 is disabled for the connection.
 */
const SETTING_IP6_CONFIG_METHOD_DISABLED: string
/**
 * IPv6 is not required or is handled by some other mechanism, and NetworkManager
 * should not configure IPv6 for this connection.
 */
const SETTING_IP6_CONFIG_METHOD_IGNORE: string
/**
 * IPv6 configuration should be automatically configured for link-local-only
 * operation.
 */
const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string
/**
 * All necessary IPv6 configuration (addresses, prefix, DNS, etc) is specified
 * in the setting's properties.
 */
const SETTING_IP6_CONFIG_METHOD_MANUAL: string
/**
 * This connection specifies configuration that allows other computers to
 * connect through it to the default network (usually the Internet).  The
 * connection's interface will be assigned a private address, and router
 * advertisements, a caching DNS server, and Network Address Translation (NAT)
 * functionality will be started on this connection's interface to allow other
 * devices to connect through that interface to the default network. (not yet
 * supported for IPv6)
 */
const SETTING_IP6_CONFIG_METHOD_SHARED: string
const SETTING_IP6_CONFIG_MTU: string
const SETTING_IP6_CONFIG_RA_TIMEOUT: string
const SETTING_IP6_CONFIG_SETTING_NAME: string
const SETTING_IP6_CONFIG_TOKEN: string
const SETTING_IP_CONFIG_ADDRESSES: string
const SETTING_IP_CONFIG_AUTO_ROUTE_EXT_GW: string
const SETTING_IP_CONFIG_DAD_TIMEOUT: string
const SETTING_IP_CONFIG_DAD_TIMEOUT_MAX: number
const SETTING_IP_CONFIG_DHCP_HOSTNAME: string
const SETTING_IP_CONFIG_DHCP_HOSTNAME_FLAGS: string
const SETTING_IP_CONFIG_DHCP_IAID: string
const SETTING_IP_CONFIG_DHCP_REJECT_SERVERS: string
const SETTING_IP_CONFIG_DHCP_SEND_HOSTNAME: string
const SETTING_IP_CONFIG_DHCP_TIMEOUT: string
const SETTING_IP_CONFIG_DNS: string
const SETTING_IP_CONFIG_DNS_OPTIONS: string
const SETTING_IP_CONFIG_DNS_PRIORITY: string
const SETTING_IP_CONFIG_DNS_SEARCH: string
const SETTING_IP_CONFIG_GATEWAY: string
const SETTING_IP_CONFIG_IGNORE_AUTO_DNS: string
const SETTING_IP_CONFIG_IGNORE_AUTO_ROUTES: string
const SETTING_IP_CONFIG_MAY_FAIL: string
const SETTING_IP_CONFIG_METHOD: string
const SETTING_IP_CONFIG_NEVER_DEFAULT: string
const SETTING_IP_CONFIG_REPLACE_LOCAL_RULE: string
const SETTING_IP_CONFIG_REQUIRED_TIMEOUT: string
const SETTING_IP_CONFIG_ROUTES: string
const SETTING_IP_CONFIG_ROUTE_METRIC: string
const SETTING_IP_CONFIG_ROUTE_TABLE: string
const SETTING_IP_CONFIG_ROUTING_RULES: string
const SETTING_IP_TUNNEL_ENCAPSULATION_LIMIT: string
const SETTING_IP_TUNNEL_FLAGS: string
const SETTING_IP_TUNNEL_FLOW_LABEL: string
const SETTING_IP_TUNNEL_FWMARK: string
const SETTING_IP_TUNNEL_INPUT_KEY: string
const SETTING_IP_TUNNEL_LOCAL: string
const SETTING_IP_TUNNEL_MODE: string
const SETTING_IP_TUNNEL_MTU: string
const SETTING_IP_TUNNEL_OUTPUT_KEY: string
const SETTING_IP_TUNNEL_PARENT: string
const SETTING_IP_TUNNEL_PATH_MTU_DISCOVERY: string
const SETTING_IP_TUNNEL_REMOTE: string
const SETTING_IP_TUNNEL_SETTING_NAME: string
const SETTING_IP_TUNNEL_TOS: string
const SETTING_IP_TUNNEL_TTL: string
const SETTING_LINK_GRO_MAX_SIZE: string
const SETTING_LINK_GSO_MAX_SEGMENTS: string
const SETTING_LINK_GSO_MAX_SIZE: string
const SETTING_LINK_SETTING_NAME: string
const SETTING_LINK_TX_QUEUE_LENGTH: string
const SETTING_LOOPBACK_MTU: string
const SETTING_LOOPBACK_SETTING_NAME: string
const SETTING_MACSEC_ENCRYPT: string
const SETTING_MACSEC_MKA_CAK: string
const SETTING_MACSEC_MKA_CAK_FLAGS: string
const SETTING_MACSEC_MKA_CAK_LENGTH: number
const SETTING_MACSEC_MKA_CKN: string
const SETTING_MACSEC_MKA_CKN_LENGTH: number
const SETTING_MACSEC_MODE: string
const SETTING_MACSEC_PARENT: string
const SETTING_MACSEC_PORT: string
const SETTING_MACSEC_SEND_SCI: string
const SETTING_MACSEC_SETTING_NAME: string
const SETTING_MACSEC_VALIDATION: string
const SETTING_MACVLAN_MODE: string
const SETTING_MACVLAN_PARENT: string
const SETTING_MACVLAN_PROMISCUOUS: string
const SETTING_MACVLAN_SETTING_NAME: string
const SETTING_MACVLAN_TAP: string
const SETTING_MATCH_DRIVER: string
const SETTING_MATCH_INTERFACE_NAME: string
const SETTING_MATCH_KERNEL_COMMAND_LINE: string
const SETTING_MATCH_PATH: string
const SETTING_MATCH_SETTING_NAME: string
const SETTING_NAME: string
const SETTING_OLPC_MESH_CHANNEL: string
const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string
const SETTING_OLPC_MESH_SETTING_NAME: string
const SETTING_OLPC_MESH_SSID: string
const SETTING_OVS_BRIDGE_DATAPATH_TYPE: string
const SETTING_OVS_BRIDGE_FAIL_MODE: string
const SETTING_OVS_BRIDGE_MCAST_SNOOPING_ENABLE: string
const SETTING_OVS_BRIDGE_RSTP_ENABLE: string
const SETTING_OVS_BRIDGE_SETTING_NAME: string
const SETTING_OVS_BRIDGE_STP_ENABLE: string
const SETTING_OVS_DPDK_DEVARGS: string
const SETTING_OVS_DPDK_N_RXQ: string
const SETTING_OVS_DPDK_N_RXQ_DESC: string
const SETTING_OVS_DPDK_N_TXQ_DESC: string
const SETTING_OVS_DPDK_SETTING_NAME: string
const SETTING_OVS_EXTERNAL_IDS_DATA: string
const SETTING_OVS_EXTERNAL_IDS_SETTING_NAME: string
const SETTING_OVS_INTERFACE_OFPORT_REQUEST: string
const SETTING_OVS_INTERFACE_SETTING_NAME: string
const SETTING_OVS_INTERFACE_TYPE: string
const SETTING_OVS_OTHER_CONFIG_DATA: string
const SETTING_OVS_OTHER_CONFIG_SETTING_NAME: string
const SETTING_OVS_PATCH_PEER: string
const SETTING_OVS_PATCH_SETTING_NAME: string
const SETTING_OVS_PORT_BOND_DOWNDELAY: string
const SETTING_OVS_PORT_BOND_MODE: string
const SETTING_OVS_PORT_BOND_UPDELAY: string
const SETTING_OVS_PORT_LACP: string
const SETTING_OVS_PORT_SETTING_NAME: string
const SETTING_OVS_PORT_TAG: string
const SETTING_OVS_PORT_TRUNKS: string
const SETTING_OVS_PORT_VLAN_MODE: string
const SETTING_PARAM_FUZZY_IGNORE: number
const SETTING_PARAM_REQUIRED: number
const SETTING_PARAM_SECRET: number
const SETTING_PPPOE_PARENT: string
const SETTING_PPPOE_PASSWORD: string
const SETTING_PPPOE_PASSWORD_FLAGS: string
const SETTING_PPPOE_SERVICE: string
const SETTING_PPPOE_SETTING_NAME: string
const SETTING_PPPOE_USERNAME: string
const SETTING_PPP_BAUD: string
const SETTING_PPP_CRTSCTS: string
const SETTING_PPP_LCP_ECHO_FAILURE: string
const SETTING_PPP_LCP_ECHO_INTERVAL: string
const SETTING_PPP_MPPE_STATEFUL: string
const SETTING_PPP_MRU: string
const SETTING_PPP_MTU: string
const SETTING_PPP_NOAUTH: string
const SETTING_PPP_NOBSDCOMP: string
const SETTING_PPP_NODEFLATE: string
const SETTING_PPP_NO_VJ_COMP: string
const SETTING_PPP_REFUSE_CHAP: string
const SETTING_PPP_REFUSE_EAP: string
const SETTING_PPP_REFUSE_MSCHAP: string
const SETTING_PPP_REFUSE_MSCHAPV2: string
const SETTING_PPP_REFUSE_PAP: string
const SETTING_PPP_REQUIRE_MPPE: string
const SETTING_PPP_REQUIRE_MPPE_128: string
const SETTING_PPP_SETTING_NAME: string
const SETTING_PROXY_BROWSER_ONLY: string
const SETTING_PROXY_METHOD: string
const SETTING_PROXY_PAC_SCRIPT: string
const SETTING_PROXY_PAC_URL: string
const SETTING_PROXY_SETTING_NAME: string
const SETTING_SERIAL_BAUD: string
const SETTING_SERIAL_BITS: string
const SETTING_SERIAL_PARITY: string
const SETTING_SERIAL_SEND_DELAY: string
const SETTING_SERIAL_SETTING_NAME: string
const SETTING_SERIAL_STOPBITS: string
const SETTING_SRIOV_AUTOPROBE_DRIVERS: string
const SETTING_SRIOV_SETTING_NAME: string
const SETTING_SRIOV_TOTAL_VFS: string
const SETTING_SRIOV_VFS: string
const SETTING_TC_CONFIG_QDISCS: string
const SETTING_TC_CONFIG_SETTING_NAME: string
const SETTING_TC_CONFIG_TFILTERS: string
const SETTING_TEAM_CONFIG: string
const SETTING_TEAM_LINK_WATCHERS: string
const SETTING_TEAM_MCAST_REJOIN_COUNT: string
const SETTING_TEAM_MCAST_REJOIN_INTERVAL: string
const SETTING_TEAM_NOTIFY_MCAST_COUNT_ACTIVEBACKUP_DEFAULT: number
const SETTING_TEAM_NOTIFY_PEERS_COUNT: string
const SETTING_TEAM_NOTIFY_PEERS_COUNT_ACTIVEBACKUP_DEFAULT: number
const SETTING_TEAM_NOTIFY_PEERS_INTERVAL: string
const SETTING_TEAM_PORT_CONFIG: string
const SETTING_TEAM_PORT_LACP_KEY: string
const SETTING_TEAM_PORT_LACP_PRIO: string
const SETTING_TEAM_PORT_LACP_PRIO_DEFAULT: number
const SETTING_TEAM_PORT_LINK_WATCHERS: string
const SETTING_TEAM_PORT_PRIO: string
const SETTING_TEAM_PORT_QUEUE_ID: string
const SETTING_TEAM_PORT_QUEUE_ID_DEFAULT: number
const SETTING_TEAM_PORT_SETTING_NAME: string
const SETTING_TEAM_PORT_STICKY: string
const SETTING_TEAM_RUNNER: string
const SETTING_TEAM_RUNNER_ACTIVE: string
const SETTING_TEAM_RUNNER_ACTIVEBACKUP: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_BANDWIDTH: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_COUNT: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_LACP_PRIO_STABLE: string
const SETTING_TEAM_RUNNER_AGG_SELECT_POLICY_PORT_CONFIG: string
const SETTING_TEAM_RUNNER_BROADCAST: string
const SETTING_TEAM_RUNNER_FAST_RATE: string
const SETTING_TEAM_RUNNER_HWADDR_POLICY: string
const SETTING_TEAM_RUNNER_HWADDR_POLICY_BY_ACTIVE: string
const SETTING_TEAM_RUNNER_HWADDR_POLICY_ONLY_ACTIVE: string
const SETTING_TEAM_RUNNER_HWADDR_POLICY_SAME_ALL: string
const SETTING_TEAM_RUNNER_LACP: string
const SETTING_TEAM_RUNNER_LOADBALANCE: string
const SETTING_TEAM_RUNNER_MIN_PORTS: string
const SETTING_TEAM_RUNNER_RANDOM: string
const SETTING_TEAM_RUNNER_ROUNDROBIN: string
const SETTING_TEAM_RUNNER_SYS_PRIO: string
const SETTING_TEAM_RUNNER_SYS_PRIO_DEFAULT: number
const SETTING_TEAM_RUNNER_TX_BALANCER: string
const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL: string
const SETTING_TEAM_RUNNER_TX_BALANCER_INTERVAL_DEFAULT: number
const SETTING_TEAM_RUNNER_TX_HASH: string
const SETTING_TEAM_SETTING_NAME: string
const SETTING_TUN_GROUP: string
const SETTING_TUN_MODE: string
const SETTING_TUN_MULTI_QUEUE: string
const SETTING_TUN_OWNER: string
const SETTING_TUN_PI: string
const SETTING_TUN_SETTING_NAME: string
const SETTING_TUN_VNET_HDR: string
const SETTING_USER_DATA: string
const SETTING_USER_SETTING_NAME: string
const SETTING_VETH_PEER: string
const SETTING_VETH_SETTING_NAME: string
const SETTING_VLAN_EGRESS_PRIORITY_MAP: string
const SETTING_VLAN_FLAGS: string
const SETTING_VLAN_ID: string
const SETTING_VLAN_INGRESS_PRIORITY_MAP: string
const SETTING_VLAN_PARENT: string
const SETTING_VLAN_PROTOCOL: string
const SETTING_VLAN_SETTING_NAME: string
const SETTING_VPN_DATA: string
const SETTING_VPN_PERSISTENT: string
const SETTING_VPN_SECRETS: string
const SETTING_VPN_SERVICE_TYPE: string
const SETTING_VPN_SETTING_NAME: string
const SETTING_VPN_TIMEOUT: string
const SETTING_VPN_USER_NAME: string
const SETTING_VRF_SETTING_NAME: string
const SETTING_VRF_TABLE: string
const SETTING_VXLAN_AGEING: string
const SETTING_VXLAN_DESTINATION_PORT: string
const SETTING_VXLAN_ID: string
const SETTING_VXLAN_L2_MISS: string
const SETTING_VXLAN_L3_MISS: string
const SETTING_VXLAN_LEARNING: string
const SETTING_VXLAN_LIMIT: string
const SETTING_VXLAN_LOCAL: string
const SETTING_VXLAN_PARENT: string
const SETTING_VXLAN_PROXY: string
const SETTING_VXLAN_REMOTE: string
const SETTING_VXLAN_RSC: string
const SETTING_VXLAN_SETTING_NAME: string
const SETTING_VXLAN_SOURCE_PORT_MAX: string
const SETTING_VXLAN_SOURCE_PORT_MIN: string
const SETTING_VXLAN_TOS: string
const SETTING_VXLAN_TTL: string
/**
 * The mac address of the peer to connect to.
 */
const SETTING_WIFI_P2P_PEER: string
const SETTING_WIFI_P2P_SETTING_NAME: string
const SETTING_WIFI_P2P_WFD_IES: string
const SETTING_WIFI_P2P_WPS_METHOD: string
const SETTING_WIMAX_MAC_ADDRESS: string
const SETTING_WIMAX_NETWORK_NAME: string
const SETTING_WIMAX_SETTING_NAME: string
const SETTING_WIRED_ACCEPT_ALL_MAC_ADDRESSES: string
const SETTING_WIRED_AUTO_NEGOTIATE: string
const SETTING_WIRED_CLONED_MAC_ADDRESS: string
const SETTING_WIRED_DUPLEX: string
const SETTING_WIRED_GENERATE_MAC_ADDRESS_MASK: string
const SETTING_WIRED_MAC_ADDRESS: string
const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string
const SETTING_WIRED_MTU: string
const SETTING_WIRED_PORT: string
const SETTING_WIRED_S390_NETTYPE: string
const SETTING_WIRED_S390_OPTIONS: string
const SETTING_WIRED_S390_SUBCHANNELS: string
const SETTING_WIRED_SETTING_NAME: string
const SETTING_WIRED_SPEED: string
const SETTING_WIRED_WAKE_ON_LAN: string
const SETTING_WIRED_WAKE_ON_LAN_PASSWORD: string
const SETTING_WIREGUARD_FWMARK: string
const SETTING_WIREGUARD_IP4_AUTO_DEFAULT_ROUTE: string
const SETTING_WIREGUARD_IP6_AUTO_DEFAULT_ROUTE: string
const SETTING_WIREGUARD_LISTEN_PORT: string
const SETTING_WIREGUARD_MTU: string
const SETTING_WIREGUARD_PEERS: string
const SETTING_WIREGUARD_PEER_ROUTES: string
const SETTING_WIREGUARD_PRIVATE_KEY: string
const SETTING_WIREGUARD_PRIVATE_KEY_FLAGS: string
const SETTING_WIREGUARD_SETTING_NAME: string
const SETTING_WIRELESS_AP_ISOLATION: string
const SETTING_WIRELESS_BAND: string
const SETTING_WIRELESS_BSSID: string
const SETTING_WIRELESS_CHANNEL: string
const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string
const SETTING_WIRELESS_GENERATE_MAC_ADDRESS_MASK: string
const SETTING_WIRELESS_HIDDEN: string
const SETTING_WIRELESS_MAC_ADDRESS: string
const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string
const SETTING_WIRELESS_MAC_ADDRESS_RANDOMIZATION: string
const SETTING_WIRELESS_MODE: string
/**
 * Indicates Ad-Hoc mode where no access point is expected to be present.
 */
const SETTING_WIRELESS_MODE_ADHOC: string
/**
 * Indicates AP/master mode where the wireless device is started as an access
 * point/hotspot.
 */
const SETTING_WIRELESS_MODE_AP: string
/**
 * Indicates infrastructure mode where an access point is expected to be present
 * for this connection.
 */
const SETTING_WIRELESS_MODE_INFRA: string
/**
 * Indicates that the connection should create a mesh point.
 */
const SETTING_WIRELESS_MODE_MESH: string
const SETTING_WIRELESS_MTU: string
const SETTING_WIRELESS_POWERSAVE: string
const SETTING_WIRELESS_RATE: string
const SETTING_WIRELESS_SECURITY_AUTH_ALG: string
const SETTING_WIRELESS_SECURITY_FILS: string
const SETTING_WIRELESS_SECURITY_GROUP: string
const SETTING_WIRELESS_SECURITY_KEY_MGMT: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string
const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string
const SETTING_WIRELESS_SECURITY_PAIRWISE: string
const SETTING_WIRELESS_SECURITY_PMF: string
const SETTING_WIRELESS_SECURITY_PROTO: string
const SETTING_WIRELESS_SECURITY_PSK: string
const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string
const SETTING_WIRELESS_SECURITY_SETTING_NAME: string
const SETTING_WIRELESS_SECURITY_WEP_KEY0: string
const SETTING_WIRELESS_SECURITY_WEP_KEY1: string
const SETTING_WIRELESS_SECURITY_WEP_KEY2: string
const SETTING_WIRELESS_SECURITY_WEP_KEY3: string
const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string
const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string
const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string
const SETTING_WIRELESS_SECURITY_WPS_METHOD: string
const SETTING_WIRELESS_SEEN_BSSIDS: string
const SETTING_WIRELESS_SETTING_NAME: string
const SETTING_WIRELESS_SSID: string
const SETTING_WIRELESS_TX_POWER: string
const SETTING_WIRELESS_WAKE_ON_WLAN: string
const SETTING_WPAN_CHANNEL: string
const SETTING_WPAN_CHANNEL_DEFAULT: number
const SETTING_WPAN_MAC_ADDRESS: string
const SETTING_WPAN_PAGE: string
const SETTING_WPAN_PAGE_DEFAULT: number
const SETTING_WPAN_PAN_ID: string
const SETTING_WPAN_SETTING_NAME: string
const SETTING_WPAN_SHORT_ADDRESS: string
const SRIOV_VF_ATTRIBUTE_MAC: string
const SRIOV_VF_ATTRIBUTE_MAX_TX_RATE: string
const SRIOV_VF_ATTRIBUTE_MIN_TX_RATE: string
const SRIOV_VF_ATTRIBUTE_SPOOF_CHECK: string
const SRIOV_VF_ATTRIBUTE_TRUST: string
const TEAM_LINK_WATCHER_ARP_PING: string
const TEAM_LINK_WATCHER_ETHTOOL: string
const TEAM_LINK_WATCHER_NSNA_PING: string
/**
 * The maximum length of hardware addresses handled by NetworkManager itself,
 * nm_utils_hwaddr_len(), and nm_utils_hwaddr_aton().
 */
const UTILS_HWADDR_LEN_MAX: number
const VLAN_FLAGS_ALL: number
const VPN_CONNECTION_BANNER: string
const VPN_CONNECTION_VPN_STATE: string
const VPN_DBUS_PLUGIN_INTERFACE: string
const VPN_DBUS_PLUGIN_PATH: string
const VPN_EDITOR_PLUGIN_DESCRIPTION: string
const VPN_EDITOR_PLUGIN_NAME: string
const VPN_EDITOR_PLUGIN_SERVICE: string
const VPN_PLUGIN_CAN_PERSIST: string
const VPN_PLUGIN_CONFIG_BANNER: string
const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string
const VPN_PLUGIN_CONFIG_HAS_IP4: string
const VPN_PLUGIN_CONFIG_HAS_IP6: string
const VPN_PLUGIN_CONFIG_MTU: string
const VPN_PLUGIN_CONFIG_PROXY_PAC: string
const VPN_PLUGIN_CONFIG_TUNDEV: string
const VPN_PLUGIN_INFO_FILENAME: string
const VPN_PLUGIN_INFO_KEYFILE: string
const VPN_PLUGIN_INFO_KF_GROUP_CONNECTION: string
const VPN_PLUGIN_INFO_KF_GROUP_GNOME: string
const VPN_PLUGIN_INFO_KF_GROUP_LIBNM: string
const VPN_PLUGIN_INFO_NAME: string
const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string
const VPN_PLUGIN_IP4_CONFIG_DNS: string
const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string
const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string
const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string
const VPN_PLUGIN_IP4_CONFIG_MSS: string
const VPN_PLUGIN_IP4_CONFIG_NBNS: string
const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string
const VPN_PLUGIN_IP4_CONFIG_PREFIX: string
const VPN_PLUGIN_IP4_CONFIG_PRESERVE_ROUTES: string
const VPN_PLUGIN_IP4_CONFIG_PTP: string
const VPN_PLUGIN_IP4_CONFIG_ROUTES: string
const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string
const VPN_PLUGIN_IP6_CONFIG_DNS: string
const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string
const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string
const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string
const VPN_PLUGIN_IP6_CONFIG_MSS: string
const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string
const VPN_PLUGIN_IP6_CONFIG_PREFIX: string
const VPN_PLUGIN_IP6_CONFIG_PRESERVE_ROUTES: string
const VPN_PLUGIN_IP6_CONFIG_PTP: string
const VPN_PLUGIN_IP6_CONFIG_ROUTES: string
const VPN_PLUGIN_OLD_DBUS_SERVICE_NAME: string
const VPN_PLUGIN_OLD_STATE: string
const VPN_SERVICE_PLUGIN_DBUS_SERVICE_NAME: string
const VPN_SERVICE_PLUGIN_DBUS_WATCH_PEER: string
const VPN_SERVICE_PLUGIN_STATE: string
const WIFI_P2P_PEER_FLAGS: string
const WIFI_P2P_PEER_HW_ADDRESS: string
const WIFI_P2P_PEER_LAST_SEEN: string
const WIFI_P2P_PEER_MANUFACTURER: string
const WIFI_P2P_PEER_MODEL: string
const WIFI_P2P_PEER_MODEL_NUMBER: string
const WIFI_P2P_PEER_NAME: string
const WIFI_P2P_PEER_SERIAL: string
const WIFI_P2P_PEER_STRENGTH: string
const WIFI_P2P_PEER_WFD_IES: string
const WIMAX_NSP_NAME: string
const WIMAX_NSP_NETWORK_TYPE: string
const WIMAX_NSP_SIGNAL_QUALITY: string
const WIREGUARD_PEER_ATTR_ALLOWED_IPS: string
const WIREGUARD_PEER_ATTR_ENDPOINT: string
const WIREGUARD_PEER_ATTR_PERSISTENT_KEEPALIVE: string
const WIREGUARD_PEER_ATTR_PRESHARED_KEY: string
const WIREGUARD_PEER_ATTR_PRESHARED_KEY_FLAGS: string
const WIREGUARD_PEER_ATTR_PUBLIC_KEY: string
const WIREGUARD_PUBLIC_KEY_LEN: number
const WIREGUARD_SYMMETRIC_KEY_LEN: number
function agent_manager_error_quark(): GLib.Quark
/**
 * Parses the string representation of the queueing
 * discipline to a %NMBridgeVlan instance.
 * @param str the string representation of a bridge VLAN
 * @returns the %NMBridgeVlan or %NULL
 */
function bridge_vlan_from_str(str: string): BridgeVlan
/**
 * Registers an error quark for #NMClient if necessary.
 * @returns the error quark used for #NMClient errors.
 */
function client_error_quark(): GLib.Quark
function conn_wireguard_import(filename: string): Connection
function connection_error_quark(): GLib.Quark
function crypto_error_quark(): GLib.Quark
function device_error_quark(): GLib.Quark
/**
 * Checks whether `optname` is a valid option name for a coalesce setting.
 * @param optname the option name to check
 * @returns %TRUE, if @optname is valid
 */
function ethtool_optname_is_coalesce(optname?: (string | null)): boolean
/**
 * Checks whether `optname` is a valid option name for an offload feature.
 * @param optname the option name to check
 * @returns %TRUE, if @optname is valid Note that nm_ethtool_optname_is_feature() was first added to the libnm header files in 1.14.0 but forgot to actually add to the library. This happened belatedly in 1.20.0 and the stable versions 1.18.2, 1.16.4 and 1.14.8 (with linker version "libnm_1_14_8").
 */
function ethtool_optname_is_feature(optname?: (string | null)): boolean
/**
 * Checks whether `optname` is a valid option name for a pause setting.
 * @param optname the option name to check
 * @returns %TRUE, if @optname is valid
 */
function ethtool_optname_is_pause(optname?: (string | null)): boolean
/**
 * Checks whether `optname` is a valid option name for a ring setting.
 * @param optname the option name to check
 * @returns %TRUE, if @optname is valid
 */
function ethtool_optname_is_ring(optname?: (string | null)): boolean
/**
 * Validates a route attribute, i.e. checks that the attribute is a known one
 * and the value is of the correct type and well-formed.
 * @param name the attribute name
 * @param value the attribute value
 * @param family IP address family of the route
 * @returns %TRUE if the attribute is valid, %FALSE otherwise
 */
function ip_route_attribute_validate(name: string, value: GLib.Variant, family: number): boolean
function ip_route_get_variant_attribute_spec(): VariantAttributeSpec
function ip_routing_rule_from_string(str: string, to_string_flags: IPRoutingRuleAsStringFlags, extra_args?: (GLib.HashTable<any, any> | null)): IPRoutingRule
/**
 * Tries to create a NMConnection from a keyfile. The resulting keyfile is
 * not normalized and might not even verify.
 * @param keyfile the keyfile from which to create the connection
 * @param base_dir when reading certificates from files with relative name,   the relative path is made absolute using @base_dir. This must   be an absolute path.
 * @param handler_flags the #NMKeyfileHandlerFlags.
 * @param handler read handler
 * @returns on success, returns the created connection.
 */
function keyfile_read(keyfile: GLib.KeyFile, base_dir: string, handler_flags: KeyfileHandlerFlags, handler?: (KeyfileReadHandler | null)): Connection
/**
 * `connection` should verify as a valid profile according to
 * nm_connection_verify(). If it does not verify, the keyfile may
 * be incomplete and the parser may not be able to fully recreate
 * the original profile.
 * @param connection the #NMConnection to persist to keyfile.
 * @param handler_flags the #NMKeyfileHandlerFlags.
 * @param handler optional handler for events and   to override the default behavior.
 * @returns a new #GKeyFile or %NULL on error.
 */
function keyfile_write(connection: Connection, handler_flags: KeyfileHandlerFlags, handler?: (KeyfileWriteHandler | null)): GLib.KeyFile
function manager_error_quark(): GLib.Quark
/**
 * Parses the string representation of the range to create a %NMRange
 * instance.
 * @param str the string representation of a range
 * @returns the %NMRange or %NULL
 */
function range_from_str(str: string): Range
function secret_agent_error_quark(): GLib.Quark
function settings_error_quark(): GLib.Quark
/**
 * Validates a VF attribute, i.e. checks that the attribute is a known one,
 * the value is of the correct type and well-formed.
 * @param name the attribute name
 * @param value the attribute value
 * @returns %TRUE if the attribute is valid, %FALSE otherwise
 */
function sriov_vf_attribute_validate(name: string, value: GLib.Variant): boolean
/**
 * Given a set of device capabilities, and a desired security type to check
 * against, determines whether the combination of device capabilities and
 * desired security type are valid for AP/Hotspot connections.
 * @param type the security type to check device capabilities against, e.g. #NMU_SEC_STATIC_WEP
 * @param wifi_caps bitfield of the capabilities of the specific Wi-Fi device, e.g. #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
 * @returns %TRUE if the device capabilities are compatible with the desired @type, %FALSE if they are not.
 */
function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean
function utils_base64secret_decode(base64_key: string, required_key_len: number): boolean
/**
 * Converts the byte array `src` into a hexadecimal string. If `final_len` is
 * greater than -1, the returned string is terminated at that index
 * (returned_string[final_len] == '\0'),
 * @param src an array of bytes
 * @param final_len an index where to cut off the returned string, or -1
 * @returns the textual form of @bytes
 */
function utils_bin2hexstr(src: Uint8Array, final_len: number): string
/**
 * Convert bonding mode from integer value to descriptive name.
 * See https://www.kernel.org/doc/Documentation/networking/bonding.txt for
 * available modes.
 * @param mode bonding mode as a numeric value
 * @returns bonding mode string, or NULL on error
 */
function utils_bond_mode_int_to_string(mode: number): string
/**
 * Convert bonding mode from string representation to numeric value.
 * See https://www.kernel.org/doc/Documentation/networking/bonding.txt for
 * available modes.
 * The `mode` string can be either a descriptive name or a number (as string).
 * @param mode bonding mode as string
 * @returns numeric bond mode, or -1 on error
 */
function utils_bond_mode_string_to_int(mode: string): number
/**
 * Determines if a connection of type `virtual_type` can (in the
 * general case) work with connections of type `other_type`.
 * 
 * If `virtual_type` is %NM_TYPE_SETTING_VLAN, then this checks if
 * `other_type` is a valid type for the parent of a VLAN.
 * 
 * If `virtual_type` is a "master" type (eg, %NM_TYPE_SETTING_BRIDGE),
 * then this checks if `other_type` is a valid type for a slave of that
 * master.
 * 
 * Note that even if this returns %TRUE it is not guaranteed that
 * &lt;emphasis&gt;every&lt;/emphasis&gt; connection of type `other_type` is
 * compatible with `virtual_type;` it may depend on the exact
 * configuration of the two connections, or on the capabilities of an
 * underlying device driver.
 * @param virtual_type a virtual connection type
 * @param other_type a connection type to test against @virtual_type
 * @returns %TRUE or %FALSE
 */
function utils_check_virtual_device_compatibility(virtual_type: GObject.GType, other_type: GObject.GType): boolean
/**
 * This ensures that all NMSetting GTypes are created. For example,
 * after this call, g_type_from_name("NMSettingConnection") will work.
 * 
 * This cannot fail and does nothing if the type already exists.
 */
function utils_ensure_gtypes(): void
/**
 * Converts a string to the matching enum value.
 * 
 * If the enum is a %G_TYPE_FLAGS the function returns the logical OR of values
 * matching the comma-separated tokens in the string; if an unknown token is found
 * the function returns %FALSE and stores a pointer to a newly allocated string
 * containing the unrecognized token in `err_token`.
 * @param type the %GType of the enum
 * @param str the input string
 * @returns %TRUE if the conversion was successful, %FALSE otherwise
 */
function utils_enum_from_str(type: GObject.GType, str: string): boolean
/**
 * Returns the list of possible values for a given enum.
 * @param type the %GType of the enum
 * @param from the first element to be returned
 * @param to the last element to be returned
 * @returns a NULL-terminated dynamically-allocated array of static strings or %NULL on error
 */
function utils_enum_get_values(type: GObject.GType, from: number, to: number): string[]
/**
 * Converts an enum value to its string representation. If the enum is a
 * %G_TYPE_FLAGS the function returns a comma-separated list of matching values.
 * If the value has no corresponding string representation, it is converted
 * to a number. For enums it is converted to a decimal number, for flags
 * to an (unsigned) hex number.
 * @param type the %GType of the enum
 * @param value the value to be translated
 * @returns a newly allocated string or %NULL
 */
function utils_enum_to_str(type: GObject.GType, value: number): string
/**
 * This function does a quick printable character conversion of the SSID, simply
 * replacing embedded NULLs and non-printable characters with the hexadecimal
 * representation of that character.  Intended for debugging only, should not
 * be used for display of SSIDs.
 * @param ssid pointer to a buffer containing the SSID data
 * @returns pointer to the escaped SSID, which uses an internal static buffer and will be overwritten by subsequent calls to this function
 */
function utils_escape_ssid(ssid: Uint8Array): string
/**
 * Tests if `filename` has a valid extension for an X.509 certificate file
 * (".cer", ".crt", ".der", or ".pem"), and contains a certificate in a format
 * recognized by NetworkManager.
 * @param filename name of the file to test
 * @returns %TRUE if the file is a certificate, %FALSE if it is not
 */
function utils_file_is_certificate(filename: string): boolean
/**
 * Tests if `filename` is a PKCS#&lt;!-- --&gt;12 file.
 * @param filename name of the file to test
 * @returns %TRUE if the file is PKCS#&lt;!-- --&gt;12, %FALSE if it is not
 */
function utils_file_is_pkcs12(filename: string): boolean
/**
 * Tests if `filename` has a valid extension for an X.509 private key file
 * (".der", ".key", ".pem", or ".p12"), and contains a private key in a format
 * recognized by NetworkManager.
 * @param filename name of the file to test
 * @returns %TRUE if the file is a private key, %FALSE if it is not
 */
function utils_file_is_private_key(filename: string): boolean
/**
 * Searches for a `progname` file in a list of search `paths`.
 * @param progname the helper program name, like "iptables"   Must be a non-empty string, without path separator (/).
 * @param try_first a custom path to try first before searching.   It is silently ignored if it is empty or not an absolute path.
 * @param paths a %NULL terminated list of search paths.   Can be empty or %NULL, in which case only @try_first is checked.
 * @param file_test_flags the flags passed to g_file_test() when searching   for @progname. Set it to 0 to skip the g_file_test().
 * @param predicate if given, pass the file name to this function   for additional checks. This check is performed after the check for   @file_test_flags. You cannot omit both @file_test_flags and @predicate.
 * @returns the full path to the helper, if found, or %NULL if not found.   The returned string is not owned by the caller, but later   invocations of the function might overwrite it.
 */
function utils_file_search_in_paths(progname: string, try_first: (string | null), paths: (string | null), file_test_flags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
/**
 * Format attributes to a string.
 * @param attributes a #GHashTable mapping attribute names to #GVariant values
 * @param attr_separator the attribute separator character
 * @param key_value_separator character separating key and values
 * @returns the string representing attributes, or %NULL    in case there are no attributes
 */
function utils_format_variant_attributes(attributes: GLib.HashTable<string, GLib.Variant>, attr_separator: number, key_value_separator: number): string
/**
 * Gets current time in milliseconds of CLOCK_BOOTTIME.
 * @returns time in milliseconds
 */
function utils_get_timestamp_msec(): number
/**
 * Converts a hexadecimal string `hex` into an array of bytes.  The optional
 * separator ':' may be used between single or pairs of hexadecimal characters,
 * eg "00:11" or "0:1".  Any "0x" at the beginning of `hex` is ignored.  `hex`
 * may not start or end with ':'.
 * @param hex a string of hexadecimal characters with optional ':' separators
 * @returns the converted bytes, or %NULL on error
 */
function utils_hexstr2bin(hex: string): GLib.Bytes
/**
 * Parses `asc` and converts it to binary form in a #GByteArray. See
 * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
 * @param asc the ASCII representation of a hardware address
 * @param length the expected length in bytes of the result
 * @returns a new #GByteArray, or %NULL if @asc couldn't be parsed
 */
function utils_hwaddr_atoba(asc: string, length: number): Uint8Array
/**
 * Parses `asc` and converts it to binary form in `buffer`.
 * Bytes in `asc` can be separated by colons (:), or hyphens (-), but not mixed.
 * @param asc the ASCII representation of a hardware address
 * @param buffer buffer to store the result into
 * @returns @buffer, or %NULL if @asc couldn't be parsed   or would be shorter or longer than @length.
 */
function utils_hwaddr_aton(asc: string, buffer: Uint8Array): number
/**
 * Parses `asc` to see if it is a valid hardware address of the given
 * length, and if so, returns it in canonical form (uppercase, with
 * leading 0s as needed, and with colons rather than hyphens).
 * @param asc the ASCII representation of a hardware address
 * @param length the length of address that @asc is expected to convert to   (or -1 to accept any length up to %NM_UTILS_HWADDR_LEN_MAX)
 * @returns the canonicalized address if @asc appears to   be a valid hardware address of the indicated length, %NULL if not.
 */
function utils_hwaddr_canonical(asc: string, length: number): string
/**
 * Returns the length in octets of a hardware address of type `type`.
 * 
 * Before 1.28, it was an error to call this function with any value other than
 * &lt;literal&gt;ARPHRD_ETHER&lt;/literal&gt; or &lt;literal&gt;ARPHRD_INFINIBAND&lt;/literal&gt;.
 * @param type the type of address; either &lt;literal&gt;ARPHRD_ETHER&lt;/literal&gt; or &lt;literal&gt;ARPHRD_INFINIBAND&lt;/literal&gt;
 * @returns the length or zero if the type is unrecognized.
 */
function utils_hwaddr_len(type: number): number
/**
 * Generalized hardware address comparison function. Tests if `hwaddr1` and
 * `hwaddr2` "equal" (or more precisely, "equivalent"), with several advantages
 * over a simple memcmp():
 * 
 *   1. If `hwaddr1`_len or `hwaddr2`_len is -1, then the corresponding address is
 *      assumed to be ASCII rather than binary, and will be converted to binary
 *      before being compared.
 * 
 *   2. If `hwaddr1` or `hwaddr2` is %NULL, it is treated instead as though it was
 *      a zero-filled buffer `hwaddr1`_len or `hwaddr2`_len bytes long.
 * 
 *   3. If `hwaddr1` and `hwaddr2` are InfiniBand hardware addresses (that is, if
 *      they are &lt;literal&gt;INFINIBAND_ALEN&lt;/literal&gt; bytes long in binary form)
 *      then only the last 8 bytes are compared, since those are the only bytes
 *      that actually identify the hardware. (The other 12 bytes will change
 *      depending on the configuration of the InfiniBand fabric that the device
 *      is connected to.)
 * 
 * If a passed-in ASCII hardware address cannot be parsed, or would parse to an
 * address larger than %NM_UTILS_HWADDR_LEN_MAX, then it will silently fail to
 * match. (This means that externally-provided address strings do not need to be
 * sanity-checked before comparing them against known good addresses; they are
 * guaranteed to not match if they are invalid.)
 * @param hwaddr1 pointer to a binary or ASCII hardware address, or %NULL
 * @param hwaddr1_len size of @hwaddr1, or -1 if @hwaddr1 is ASCII
 * @param hwaddr2 pointer to a binary or ASCII hardware address, or %NULL
 * @param hwaddr2_len size of @hwaddr2, or -1 if @hwaddr2 is ASCII
 * @returns %TRUE if @hwaddr1 and @hwaddr2 are equivalent, %FALSE if they are   different (or either of them is invalid).
 */
function utils_hwaddr_matches(hwaddr1: (any | null), hwaddr1_len: number, hwaddr2: (any | null), hwaddr2_len: number): boolean
/**
 * Converts `addr` to textual form.
 * @param addr a binary hardware address
 * @returns the textual form of @addr
 */
function utils_hwaddr_ntoa(addr: Uint8Array): string
/**
 * Parses `asc` to see if it is a valid hardware address of the given
 * length.
 * @param asc the ASCII representation of a hardware address
 * @param length the length of address that @asc is expected to convert to   (or -1 to accept any length up to %NM_UTILS_HWADDR_LEN_MAX)
 * @returns %TRUE if @asc appears to be a valid hardware address   of the indicated length, %FALSE if not.
 */
function utils_hwaddr_valid(asc: string, length: number): boolean
/**
 * Validate the network interface name.
 * @param name Name of interface
 * @returns %TRUE if interface name is valid, otherwise %FALSE is returned. Before 1.20, this function did not accept %NULL as @name argument. If you   want to run against older versions of libnm, don't pass %NULL.
 */
function utils_iface_valid_name(name?: (string | null)): boolean
/**
 * Utility function to convert a #GVariant of type 'aau' representing a list of
 * NetworkManager IPv4 addresses (which are tuples of address, prefix, and
 * gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" field of
 * the first address (if set) will be returned in `out_gateway;` the "gateway" fields
 * of the other addresses are ignored.
 * @param value a #GVariant of type 'aau'
 * @returns a newly allocated   #GPtrArray of #NMIPAddress objects
 */
function utils_ip4_addresses_from_variant(value: GLib.Variant): IPAddress[]
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
 * IPv4 addresses into a #GVariant of type 'aau' representing an array of
 * NetworkManager IPv4 addresses (which are tuples of address, prefix, and
 * gateway). The "gateway" field of the first address will get the value of
 * `gateway` (if non-%NULL). In all of the other addresses, that field will be 0.
 * @param addresses an array of #NMIPAddress objects
 * @param gateway the gateway IP address
 * @returns a new floating #GVariant representing @addresses.
 */
function utils_ip4_addresses_to_variant(addresses: IPAddress[], gateway?: (string | null)): GLib.Variant
/**
 * Utility function to convert a #GVariant of type 'au' representing a list of
 * IPv4 addresses into an array of IP address strings.
 * @param value a #GVariant of type 'au'
 * @returns a %NULL-terminated array of IP address strings.
 */
function utils_ip4_dns_from_variant(value: GLib.Variant): string
/**
 * Utility function to convert an array of IP address strings int a #GVariant of
 * type 'au' representing an array of IPv4 addresses.
 * @param dns an array of IP address strings
 * @returns a new floating #GVariant representing @dns.
 */
function utils_ip4_dns_to_variant(dns: string): GLib.Variant
/**
 * When the Internet was originally set up, various ranges of IP addresses were
 * segmented into three network classes: A, B, and C.  This function will return
 * a prefix that is associated with the IP address specified defining where it
 * falls in the predefined classes.
 * @param ip an IPv4 address (in network byte order)
 * @returns the default class prefix for the given IP
 */
function utils_ip4_get_default_prefix(ip: number): number
function utils_ip4_netmask_to_prefix(netmask: number): number
function utils_ip4_prefix_to_netmask(prefix: number): number
/**
 * Utility function to convert a #GVariant of type 'aau' representing an array
 * of NetworkManager IPv4 routes (which are tuples of route, prefix, next hop,
 * and metric) into a #GPtrArray of #NMIPRoute objects.
 * @param value #GVariant of type 'aau'
 * @returns a newly allocated   #GPtrArray of #NMIPRoute objects
 */
function utils_ip4_routes_from_variant(value: GLib.Variant): IPRoute[]
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
 * IPv4 routes into a #GVariant of type 'aau' representing an array of
 * NetworkManager IPv4 routes (which are tuples of route, prefix, next hop, and
 * metric).
 * @param routes an array of #NMIP4Route objects
 * @returns a new floating #GVariant representing @routes.
 */
function utils_ip4_routes_to_variant(routes: IPRoute[]): GLib.Variant
/**
 * Utility function to convert a #GVariant of type 'a(ayuay)' representing a
 * list of NetworkManager IPv6 addresses (which are tuples of address, prefix,
 * and gateway) into a #GPtrArray of #NMIPAddress objects. The "gateway" field
 * of the first address (if set) will be returned in `out_gateway;` the "gateway"
 * fields of the other addresses are ignored.
 * @param value a #GVariant of type 'a(ayuay)'
 * @returns a newly allocated   #GPtrArray of #NMIPAddress objects
 */
function utils_ip6_addresses_from_variant(value: GLib.Variant): IPAddress[]
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
 * IPv6 addresses into a #GVariant of type 'a(ayuay)' representing an array of
 * NetworkManager IPv6 addresses (which are tuples of address, prefix, and
 * gateway).  The "gateway" field of the first address will get the value of
 * `gateway` (if non-%NULL). In all of the other addresses, that field will be
 * all 0s.
 * @param addresses an array of #NMIPAddress objects
 * @param gateway the gateway IP address
 * @returns a new floating #GVariant representing @addresses.
 */
function utils_ip6_addresses_to_variant(addresses: IPAddress[], gateway?: (string | null)): GLib.Variant
/**
 * Utility function to convert a #GVariant of type 'aay' representing a list of
 * IPv6 addresses into an array of IP address strings. Each "ay" entry must be
 * a IPv6 address in binary form (16 bytes long). Invalid entries are silently
 * ignored.
 * @param value a #GVariant of type 'aay'
 * @returns a %NULL-terminated array of IP address strings.
 */
function utils_ip6_dns_from_variant(value: GLib.Variant): string
/**
 * Utility function to convert an array of IP address strings int a #GVariant of
 * type 'aay' representing an array of IPv6 addresses.
 * 
 * If a string cannot be parsed, it will be silently ignored.
 * @param dns an array of IP address strings
 * @returns a new floating #GVariant representing @dns.
 */
function utils_ip6_dns_to_variant(dns: string): GLib.Variant
/**
 * Utility function to convert a #GVariant of type 'a(ayuayu)' representing an
 * array of NetworkManager IPv6 routes (which are tuples of route, prefix, next
 * hop, and metric) into a #GPtrArray of #NMIPRoute objects.
 * @param value #GVariant of type 'a(ayuayu)'
 * @returns a newly allocated   #GPtrArray of #NMIPRoute objects
 */
function utils_ip6_routes_from_variant(value: GLib.Variant): IPRoute[]
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
 * IPv6 routes into a #GVariant of type 'a(ayuayu)' representing an array of
 * NetworkManager IPv6 routes (which are tuples of route, prefix, next hop, and
 * metric).
 * @param routes an array of #NMIPRoute objects
 * @returns a new floating #GVariant representing @routes.
 */
function utils_ip6_routes_to_variant(routes: IPRoute[]): GLib.Variant
/**
 * Utility function to convert a #GVariant representing a list of new-style
 * NetworkManager IPv4 or IPv6 addresses (as described in the documentation for
 * nm_utils_ip_addresses_to_variant()) into a #GPtrArray of #NMIPAddress
 * objects.
 * @param value a #GVariant of type 'aa{sv}'
 * @param family an IP address family
 * @returns a newly allocated   #GPtrArray of #NMIPAddress objects
 */
function utils_ip_addresses_from_variant(value: GLib.Variant, family: number): IPAddress[]
/**
 * Utility function to convert a #GPtrArray of #NMIPAddress objects representing
 * IPv4 or IPv6 addresses into a #GVariant of type 'aa{sv}' representing an
 * array of new-style NetworkManager IP addresses. All addresses will include
 * "address" (an IP address string), and "prefix" (a uint). Some addresses may
 * include additional attributes.
 * @param addresses an array of #NMIPAddress objects
 * @returns a new floating #GVariant representing @addresses.
 */
function utils_ip_addresses_to_variant(addresses: IPAddress[]): GLib.Variant
/**
 * Utility function to convert a #GVariant representing a list of new-style
 * NetworkManager IPv4 or IPv6 addresses (which are tuples of destination,
 * prefix, next hop, metric, and additional attributes) into a #GPtrArray of
 * #NMIPRoute objects.
 * @param value a #GVariant of type 'aa{sv}'
 * @param family an IP address family
 * @returns a newly allocated   #GPtrArray of #NMIPRoute objects
 */
function utils_ip_routes_from_variant(value: GLib.Variant, family: number): IPRoute[]
/**
 * Utility function to convert a #GPtrArray of #NMIPRoute objects representing
 * IPv4 or IPv6 routes into a #GVariant of type 'aa{sv}' representing an array
 * of new-style NetworkManager IP routes (which are tuples of destination,
 * prefix, next hop, metric, and additional attributes).
 * @param routes an array of #NMIPRoute objects
 * @returns a new floating #GVariant representing @routes.
 */
function utils_ip_routes_to_variant(routes: IPRoute[]): GLib.Variant
/**
 * Checks if `ip` contains a valid IP address of the given family.
 * @param family &lt;literal&gt;AF_INET&lt;/literal&gt; or &lt;literal&gt;AF_INET6&lt;/literal&gt;, or   &lt;literal&gt;AF_UNSPEC&lt;/literal&gt; to accept either
 * @param ip an IP address
 * @returns %TRUE or %FALSE
 */
function utils_ipaddr_valid(family: number, ip: string): boolean
/**
 * Different manufacturers use different mechanisms for not broadcasting the
 * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
 * number of known SSID-cloaking methods.
 * @param ssid pointer to a buffer containing the SSID data
 * @returns %TRUE if the SSID is "empty", %FALSE if it is not
 */
function utils_is_empty_ssid(ssid: Uint8Array): boolean
function utils_is_json_object(str: string): boolean
/**
 * Checks if `str` is a UUID
 * @param str a string that might be a UUID
 * @returns %TRUE if @str is a UUID, %FALSE if not In older versions, nm_utils_is_uuid() did not accept %NULL as @str argument. Don't pass %NULL if you run against older versions of libnm.
 */
function utils_is_uuid(str?: (string | null)): boolean
/**
 * Validate the network interface name.
 * 
 * This function is a 1:1 copy of the kernel's interface validation
 * function in net/core/dev.c.
 * @param name Name of interface
 * @returns %TRUE if interface name is valid, otherwise %FALSE is returned. Before 1.20, this function did not accept %NULL as @name argument. If you   want to run against older versions of libnm, don't pass %NULL.
 */
function utils_is_valid_iface_name(name?: (string | null)): boolean
/**
 * Parse attributes from a string.
 * @param string the input string
 * @param attr_separator the attribute separator character
 * @param key_value_separator character separating key and values
 * @param ignore_unknown whether unknown attributes should be ignored
 * @param spec the attribute format specifiers
 * @returns a #GHashTable mapping attribute names to #GVariant values. Warning: the variant are still floating references, owned by the hash table. If you take a reference, ensure to sink the one of the hash table first.
 */
function utils_parse_variant_attributes(string: string, attr_separator: number, key_value_separator: number, ignore_unknown: boolean, spec: VariantAttributeSpec): GLib.HashTable<string, GLib.Variant>
/**
 * The only purpose of this function is to give access to g_print()
 * or g_printerr() from pygobject. libnm can do debug logging by
 * setting LIBNM_CLIENT_DEBUG and uses thereby g_printerr() or
 * g_print(). A plain "print()" function in python is not in sync
 * with these functions (it implements additional buffering). By
 * using nm_utils_print(), the same logging mechanisms can be used.
 * 
 * Also, libnm honors LIBNM_CLIENT_DEBUG_FILE environment. If this
 * is set to a filename pattern (accepting "%p" for the process ID),
 * then the debug log is written to that file instead. With `output_mode`
 * zero, the same location will be written. Since: 1.44.
 * @param output_mode if 1 it uses g_print(). If 2, it uses g_printerr().   If 0, it uses the same output as internal libnm debug logging   does. That is, depending on LIBNM_CLIENT_DEBUG's "stdout" flag   it uses g_print() or g_printerr() and if LIBNM_CLIENT_DEBUG_FILE is   set, it writes the output to file instead
 * @param msg the message to print. The function does not append   a trailing newline.
 */
function utils_print(output_mode: number, msg: string): void
/**
 * Earlier versions of the Linux kernel added a NULL byte to the end of the
 * SSID to enable easy printing of the SSID on the console or in a terminal,
 * but this behavior was problematic (SSIDs are simply byte arrays, not strings)
 * and thus was changed.  This function compensates for that behavior at the
 * cost of some compatibility with odd SSIDs that may legitimately have trailing
 * NULLs, even though that is functionally pointless.
 * @param ssid1 the first SSID to compare
 * @param ssid2 the second SSID to compare
 * @param ignore_trailing_null %TRUE to ignore one trailing NULL byte
 * @returns %TRUE if the SSIDs are the same, %FALSE if they are not
 */
function utils_same_ssid(ssid1: Uint8Array, ssid2: Uint8Array, ignore_trailing_null: boolean): boolean
/**
 * Given a set of device capabilities, and a desired security type to check
 * against, determines whether the combination of device, desired security
 * type, and AP capabilities intersect.
 * 
 * NOTE: this function cannot handle checking security for AP/Hotspot mode;
 * use nm_utils_ap_mode_security_valid() instead.
 * @param type the security type to check AP flags and device capabilities against, e.g. #NMU_SEC_STATIC_WEP
 * @param wifi_caps bitfield of the capabilities of the specific Wi-Fi device, e.g. #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
 * @param have_ap whether the @ap_flags, @ap_wpa, and @ap_rsn arguments are valid
 * @param adhoc whether the capabilities being tested are from an Ad-Hoc AP (IBSS)
 * @param ap_flags bitfield of AP capabilities, e.g. #NM_802_11_AP_FLAGS_PRIVACY
 * @param ap_wpa bitfield of AP capabilities derived from the AP's WPA beacon, e.g. (#NM_802_11_AP_SEC_PAIR_TKIP | #NM_802_11_AP_SEC_KEY_MGMT_PSK)
 * @param ap_rsn bitfield of AP capabilities derived from the AP's RSN/WPA2 beacon, e.g. (#NM_802_11_AP_SEC_PAIR_CCMP | #NM_802_11_AP_SEC_PAIR_TKIP)
 * @returns %TRUE if the device capabilities and AP capabilities intersect and are compatible with the desired @type, %FALSE if they are not
 */
function utils_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities, have_ap: boolean, adhoc: boolean, ap_flags: 80211ApFlags, ap_wpa: 80211ApSecurityFlags, ap_rsn: 80211ApSecurityFlags): boolean
/**
 * Converts a string to a SR-IOV virtual function object.
 * @param str the input string
 * @returns the virtual function object
 */
function utils_sriov_vf_from_str(str: string): SriovVF
/**
 * Converts a SR-IOV virtual function object to its string representation.
 * @param vf the %NMSriovVF
 * @param omit_index if %TRUE, the VF index will be omitted from output string
 * @returns a newly allocated string or %NULL on error
 */
function utils_sriov_vf_to_str(vf: SriovVF, omit_index: boolean): string
/**
 * Wi-Fi SSIDs are byte arrays, they are _not_ strings.  Thus, an SSID may
 * contain embedded NULLs and other unprintable characters.  Often it is
 * useful to print the SSID out for debugging purposes, but that should be the
 * _only_ use of this function.  Do not use this function for any persistent
 * storage of the SSID, since the printable SSID returned from this function
 * cannot be converted back into the real SSID of the access point.
 * 
 * This function does almost everything humanly possible to convert the input
 * into a printable UTF-8 string, using roughly the following procedure:
 * 
 * 1) if the input data is already UTF-8 safe, no conversion is performed
 * 2) attempts to get the current system language from the LANG environment
 *    variable, and depending on the language, uses a table of alternative
 *    encodings to try.  For example, if LANG=hu_HU, the table may first try
 *    the ISO-8859-2 encoding, and if that fails, try the Windows-1250 encoding.
 *    If all fallback encodings fail, replaces non-UTF-8 characters with '?'.
 * 3) If the system language was unable to be determined, falls back to the
 *    ISO-8859-1 encoding, then to the Windows-1251 encoding.
 * 4) If step 3 fails, replaces non-UTF-8 characters with '?'.
 * 
 * Again, this function should be used for debugging and display purposes
 * _only_.
 * @param ssid pointer to a buffer containing the SSID data
 * @returns an allocated string containing a UTF-8 representation of the SSID, which must be freed by the caller using g_free(). Returns %NULL on errors.
 */
function utils_ssid_to_utf8(ssid: Uint8Array): string
/**
 * Parses the tc style string action representation of the queueing
 * discipline to a %NMTCAction instance. Supports a subset of the tc language.
 * @param str the string representation of a action
 * @returns the %NMTCAction or %NULL
 */
function utils_tc_action_from_str(str: string): TCAction
/**
 * Turns the %NMTCAction into a tc style string representation of the queueing
 * discipline.
 * @param action the %NMTCAction
 * @returns formatted string or %NULL
 */
function utils_tc_action_to_str(action: TCAction): string
/**
 * Parses the tc style string qdisc representation of the queueing
 * discipline to a %NMTCQdisc instance. Supports a subset of the tc language.
 * @param str the string representation of a qdisc
 * @returns the %NMTCQdisc or %NULL
 */
function utils_tc_qdisc_from_str(str: string): TCQdisc
/**
 * Turns the %NMTCQdisc into a tc style string representation of the queueing
 * discipline.
 * @param qdisc the %NMTCQdisc
 * @returns formatted string or %NULL
 */
function utils_tc_qdisc_to_str(qdisc: TCQdisc): string
/**
 * Parses the tc style string tfilter representation of the queueing
 * discipline to a %NMTCTfilter instance. Supports a subset of the tc language.
 * @param str the string representation of a tfilter
 * @returns the %NMTCTfilter or %NULL
 */
function utils_tc_tfilter_from_str(str: string): TCTfilter
/**
 * Turns the %NMTCTfilter into a tc style string representation of the queueing
 * discipline.
 * @param tfilter the %NMTCTfilter
 * @returns formatted string or %NULL
 */
function utils_tc_tfilter_to_str(tfilter: TCTfilter): string
function utils_uuid_generate(): string
function utils_version(): number
/**
 * Checks if `key` is a valid WEP key
 * @param key a string that might be a WEP key
 * @param wep_type the #NMWepKeyType type of the WEP key
 * @returns %TRUE if @key is a WEP key, %FALSE if not
 */
function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean
/**
 * Utility function to return 2.4 GHz Wi-Fi frequencies (802.11bg band).
 * @returns zero-terminated array of frequencies numbers (in MHz)
 */
function utils_wifi_2ghz_freqs(): number
/**
 * Utility function to return 5 GHz Wi-Fi frequencies (802.11a band).
 * @returns zero-terminated array of frequencies numbers (in MHz)
 */
function utils_wifi_5ghz_freqs(): number
/**
 * Utility function to translate a Wi-Fi channel to its corresponding frequency.
 * @param channel channel
 * @param band frequency band for wireless ("a" or "bg")
 * @returns the frequency represented by the channel of the band,          or -1 when the freq is invalid, or 0 when the band          is invalid
 */
function utils_wifi_channel_to_freq(channel: number, band: string): number
/**
 * Utility function to find out next/previous Wi-Fi channel for a channel.
 * @param channel current channel
 * @param direction whether going downward (0 or less) or upward (1 or more)
 * @param band frequency band for wireless ("a" or "bg")
 * @returns the next channel in the specified direction or 0
 */
function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number
/**
 * Utility function to translate a Wi-Fi frequency to its corresponding channel.
 * @param freq frequency
 * @returns the channel represented by the frequency or 0
 */
function utils_wifi_freq_to_channel(freq: number): number
/**
 * Utility function to verify Wi-Fi channel validity.
 * @param channel channel
 * @param band frequency band for wireless ("a" or "bg")
 * @returns %TRUE or %FALSE
 */
function utils_wifi_is_channel_valid(channel: number, band: string): boolean
/**
 * Converts `strength` into a 4-character-wide graphical representation of
 * strength suitable for printing to stdout.
 * 
 * Previous versions used to take a guess at the terminal type and possibly
 * return a wide UTF-8 encoded string. Now it always returns a 7-bit
 * clean strings of one to 0 to 4 asterisks. Users that actually need
 * the functionality are encouraged to make their implementations instead.
 * @param strength the access point strength, from 0 to 100
 * @returns the graphical representation of the access point strength
 */
function utils_wifi_strength_bars(strength: number): string
/**
 * Checks if `psk` is a valid WPA PSK
 * @param psk a string that might be a WPA PSK
 * @returns %TRUE if @psk is a WPA PSK, %FALSE if not
 */
function utils_wpa_psk_valid(psk: string): boolean
/**
 * Load the shared library `plugin_name` and create a new
 * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
 * function.
 * 
 * This is similar to nm_vpn_editor_plugin_load_from_file(), but
 * it does no validation of the plugin name, instead passes it directly
 * to dlopen(). If you have the full path to a plugin file,
 * nm_vpn_editor_plugin_load_from_file() is preferred.
 * @param plugin_name The name of the shared library to load.  This path will be directly passed to dlopen() without  further checks.
 * @param check_service if not-null, check that the loaded plugin advertises  the given service.
 * @returns a new plugin instance or %NULL on error.
 */
function vpn_editor_plugin_load(plugin_name: string, check_service: string): VpnEditorPlugin
/**
 * Load the shared library `plugin_name` and create a new
 * #NMVpnEditorPlugin instance via the #NMVpnEditorPluginFactory
 * function.
 * 
 * If `plugin_name` is not an absolute path name, it assumes the file
 * is in the plugin directory of NetworkManager. In any case, the call
 * will do certain checks on the file before passing it to dlopen.
 * A consequence for that is, that you cannot omit the ".so" suffix
 * as you could for nm_vpn_editor_plugin_load().
 * @param plugin_name The path or name of the shared library to load.  The path must either be an absolute filename to an existing file.  Alternatively, it can be the name (without path) of a library in the  plugin directory of NetworkManager.
 * @param check_service if not-null, check that the loaded plugin advertises  the given service.
 * @param check_owner if non-negative, check whether the file is owned  by UID @check_owner or by root. In this case also check that  the file is not writable by anybody else.
 * @param check_file optional callback to validate the file prior to   loading the shared library.
 * @returns a new plugin instance or %NULL on error.
 */
function vpn_editor_plugin_load_from_file(plugin_name: string, check_service: string, check_owner: number, check_file: UtilsCheckFilePredicate): VpnEditorPlugin
function vpn_plugin_error_quark(): GLib.Quark
interface KeyfileReadHandler {
    (keyfile: GLib.KeyFile, connection: Connection, handler_type: KeyfileHandlerType, handler_data: KeyfileHandlerData): boolean
}
interface KeyfileWriteHandler {
    (connection: Connection, keyfile: GLib.KeyFile, handler_type: KeyfileHandlerType, handler_data: KeyfileHandlerData): boolean
}
interface SecretAgentOldDeleteSecretsFunc {
    (agent: SecretAgentOld, connection: Connection, error: GLib.Error): void
}
interface SecretAgentOldGetSecretsFunc {
    (agent: SecretAgentOld, connection: Connection, secrets: GLib.Variant, error: GLib.Error): void
}
interface SecretAgentOldSaveSecretsFunc {
    (agent: SecretAgentOld, connection: Connection, error: GLib.Error): void
}
interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string, flags: SettingSecretFlags): boolean
}
interface SettingValueIterFn {
    (setting: Setting, key: string, value: GObject.Value, flags: GObject.ParamFlags): void
}
interface UtilsCheckFilePredicate {
    (filename: string, stat?: (any | null)): boolean
}
interface UtilsFileSearchInPathsPredicate {
    (filename: string): boolean
}
interface UtilsPredicateStr {
    (str: string): boolean
}
interface VpnIterFunc {
    (key: string, value: string): void
}
/**
 * 802.11 access point flags.
 */
enum __80211ApFlags {
    /**
     * access point has no special capabilities
     */
    NONE,
    /**
     * access point requires authentication and
     * encryption (usually means WEP)
     */
    PRIVACY,
    /**
     * access point supports some WPS method
     */
    WPS,
    /**
     * access point supports push-button WPS
     */
    WPS_PBC,
    /**
     * access point supports PIN-based WPS
     */
    WPS_PIN,
}
/**
 * 802.11 access point security and authentication flags.  These flags describe
 * the current security requirements of an access point as determined from the
 * access point's beacon.
 */
enum __80211ApSecurityFlags {
    /**
     * the access point has no special security requirements
     */
    NONE,
    /**
     * 40/64-bit WEP is supported for
     * pairwise/unicast encryption
     */
    PAIR_WEP40,
    /**
     * 104/128-bit WEP is supported for
     * pairwise/unicast encryption
     */
    PAIR_WEP104,
    /**
     * TKIP is supported for pairwise/unicast encryption
     */
    PAIR_TKIP,
    /**
     * AES/CCMP is supported for pairwise/unicast encryption
     */
    PAIR_CCMP,
    /**
     * 40/64-bit WEP is supported for group/broadcast
     * encryption
     */
    GROUP_WEP40,
    /**
     * 104/128-bit WEP is supported for
     * group/broadcast encryption
     */
    GROUP_WEP104,
    /**
     * TKIP is supported for group/broadcast encryption
     */
    GROUP_TKIP,
    /**
     * AES/CCMP is supported for group/broadcast
     * encryption
     */
    GROUP_CCMP,
    /**
     * WPA/RSN Pre-Shared Key encryption is
     * supported
     */
    KEY_MGMT_PSK,
    /**
     * 802.1x authentication and key management
     * is supported
     */
    KEY_MGMT_802_1X,
    /**
     * WPA/RSN Simultaneous Authentication of Equals is
     * supported
     */
    KEY_MGMT_SAE,
    /**
     * WPA/RSN Opportunistic Wireless Encryption is
     * supported
     */
    KEY_MGMT_OWE,
    /**
     * WPA/RSN Opportunistic Wireless Encryption
     * transition mode is supported. Since: 1.26.
     */
    KEY_MGMT_OWE_TM,
    /**
     * WPA3 Enterprise Suite-B 192 bit mode
     * is supported. Since: 1.30.
     */
    KEY_MGMT_EAP_SUITE_B_192,
}
/**
 * Flags describing the current activation state.
 */
enum ActivationStateFlags {
    /**
     * an alias for numeric zero, no flags set.
     */
    NONE,
    /**
     * the device is a master.
     */
    IS_MASTER,
    /**
     * the device is a slave.
     */
    IS_SLAVE,
    /**
     * layer2 is activated and ready.
     */
    LAYER2_READY,
    /**
     * IPv4 setting is completed.
     */
    IP4_READY,
    /**
     * IPv6 setting is completed.
     */
    IP6_READY,
    /**
     * The master has any slave devices attached.
     *   This only makes sense if the device is a master.
     */
    MASTER_HAS_SLAVES,
    /**
     * the lifetime
     *   of the activation is bound to the visibility of the connection profile,
     *   which in turn depends on "connection.permissions" and whether a session
     *   for the user exists. Since: 1.16.
     */
    LIFETIME_BOUND_TO_PROFILE_VISIBILITY,
    /**
     * the active connection was generated to
     *  represent an external configuration of a networking device. Since: 1.26.
     */
    EXTERNAL,
}
/**
 * #NMBluetoothCapabilities values indicate the usable capabilities of a
 * Bluetooth device.
 */
enum BluetoothCapabilities {
    /**
     * device has no usable capabilities
     */
    NONE,
    /**
     * device provides Dial-Up Networking capability
     */
    DUN,
    /**
     * device provides Network Access Point capability
     */
    NAP,
}
/**
 * The flags for CheckpointCreate call
 */
enum CheckpointCreateFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * when creating
     *   a new checkpoint, destroy all existing ones.
     */
    DESTROY_ALL,
    /**
     * upon rollback,
     *   delete any new connection added after the checkpoint. Since: 1.6.
     */
    DELETE_NEW_CONNECTIONS,
    /**
     * upon rollback,
     *   disconnect any new device appeared after the checkpoint. Since: 1.6.
     */
    DISCONNECT_NEW_DEVICES,
    /**
     * by default, creating
     *   a checkpoint fails if there are already existing checkoints that
     *   reference the same devices. With this flag, creation of such
     *   checkpoints is allowed, however, if an older checkpoint
     *   that references overlapping devices gets rolled back, it will
     *   automatically destroy this checkpoint during rollback. This
     *   allows to create several overlapping checkpoints in parallel,
     *   and rollback to them at will. With the special case that
     *   rolling back to an older checkpoint will invalidate all
     *   overlapping younger checkpoints. This opts-in that the
     *   checkpoint can be automatically destroyed by the rollback
     *   of an older checkpoint. Since: 1.12.
     */
    ALLOW_OVERLAPPING,
    /**
     * during rollback,
     *   by default externally added ports attached to bridge devices are preserved.
     *   With this flag, the rollback detaches all external ports.
     *   This only has an effect for bridge ports. Before 1.38, this was the default
     *   behavior. Since: 1.38.
     */
    NO_PRESERVE_EXTERNAL_PORTS,
}
enum ClientInstanceFlags {
    /**
     * special value to indicate no flags.
     */
    NONE,
    /**
     * by default, NMClient
     *   will fetch the permissions via "GetPermissions" and refetch them when
     *   "CheckPermissions" signal gets received. By setting this flag, this behavior
     *   can be disabled. You can toggle this flag to enable and disable automatic
     *   fetching of the permissions. Watch also nm_client_get_permissions_state()
     *   to know whether the permissions are up to date.
     */
    NO_AUTO_FETCH_PERMISSIONS,
    /**
     * as #NMClient is an GInitable
     *   and GAsyncInitable, nm_client_get_instance_flags() returns this flag
     *   once initialization completed with success. This flag cannot be set
     *   as NM_CLIENT_INSTANCE_FLAGS property. Since: 1.42.
     */
    INITIALIZED_GOOD,
    /**
     * like `NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD`
     *   indicates that the instance completed initialization with failure. In that
     *   case the instance is unusable. Since: 1.42.
     */
    INITIALIZED_BAD,
}
/**
 * These flags determine which properties are serialized when calling
 * nm_connection_to_dbus().
 */
enum ConnectionSerializationFlags {
    /**
     * serialize all properties (including secrets)
     */
    ALL,
    /**
     * serialize properties that are
     *   not secrets. Since 1.32.
     */
    WITH_NON_SECRET,
    /**
     * this is a deprecated alias for
     *   `NM_CONNECTION_SERIALIZE_WITH_NON_SECRET`.
     */
    NO_SECRETS,
    /**
     * serialize all secrets. This flag is
     *   ignored if any of `NM_CONNECTION_SERIALIZE_WITH_SECRETS_AGENT_OWNED,`
     *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS_SYSTEM_OWNED` or
     *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS_NOT_SAVED` is set. Since 1.32.
     */
    WITH_SECRETS,
    /**
     * a deprecated alias for
     *   `NM_CONNECTION_SERIALIZE_WITH_SECRETS`.
     */
    ONLY_SECRETS,
    /**
     * serialize agent-owned
     *   secrets. Since: 1.20.
     */
    WITH_SECRETS_AGENT_OWNED,
    /**
     * serialize system-owned
     *   secrets. Since: 1.32.
     */
    WITH_SECRETS_SYSTEM_OWNED,
    /**
     * serialize secrets that
     *   are marked as never saved. Since: 1.32.
     */
    WITH_SECRETS_NOT_SAVED,
}
/**
 * General device capability flags.
 */
enum DeviceCapabilities {
    /**
     * device has no special capabilities
     */
    NONE,
    /**
     * NetworkManager supports this device
     */
    NM_SUPPORTED,
    /**
     * this device can indicate carrier status
     */
    CARRIER_DETECT,
    /**
     * this device is a software device
     */
    IS_SOFTWARE,
    /**
     * this device supports single-root I/O virtualization
     */
    SRIOV,
}
/**
 * Flags for a network interface.
 */
enum DeviceInterfaceFlags {
    /**
     * the interface is enabled from the
     *   administrative point of view. Corresponds to kernel IFF_UP.
     */
    UP,
    /**
     * the physical link is up. Corresponds
     *   to kernel IFF_LOWER_UP.
     */
    LOWER_UP,
    /**
     * receive all packets. Corresponds to
     *   kernel IFF_PROMISC. Since: 1.32.
     */
    PROMISC,
    /**
     * the interface has carrier. In most
     *   cases this is equal to the value of `NM_DEVICE_INTERFACE_FLAG_LOWER_UP`.
     *   However some devices have a non-standard carrier detection mechanism.
     */
    CARRIER,
    /**
     * the flag to indicate device
     *   LLDP status. Since: 1.32.
     */
    LLDP_CLIENT_ENABLED,
}
/**
 * #NMDeviceModemCapabilities values indicate the generic radio access
 * technology families a modem device supports.  For more information on the
 * specific access technologies the device supports use the ModemManager D-Bus
 * API.
 */
enum DeviceModemCapabilities {
    /**
     * modem has no usable capabilities
     */
    NONE,
    /**
     * modem uses the analog wired telephone
     * network and is not a wireless/cellular device
     */
    POTS,
    /**
     * modem supports at least one of CDMA
     * 1xRTT, EVDO revision 0, EVDO revision A, or EVDO revision B
     */
    CDMA_EVDO,
    /**
     * modem supports at least one of GSM,
     * GPRS, EDGE, UMTS, HSDPA, HSUPA, or HSPA+ packet switched data capability
     */
    GSM_UMTS,
    /**
     * modem has LTE data capability
     */
    LTE,
    /**
     * modem has 5GNR data capability. Since: 1.36.
     */
    "5GNR",
}
/**
 * Flags for the Reapply() D-Bus call of a device and
 * nm_device_reapply_async().
 */
enum DeviceReapplyFlags {
    /**
     * no flag set.
     */
    NONE,
    /**
     * during reapply,
     *   preserve external IP addresses and routes.
     */
    PRESERVE_EXTERNAL_IP,
}
/**
 * 802.11 specific device encryption and authentication capabilities.
 */
enum DeviceWifiCapabilities {
    /**
     * device has no encryption/authentication capabilities
     */
    NONE,
    /**
     * device supports 40/64-bit WEP encryption
     */
    CIPHER_WEP40,
    /**
     * device supports 104/128-bit WEP encryption
     */
    CIPHER_WEP104,
    /**
     * device supports TKIP encryption
     */
    CIPHER_TKIP,
    /**
     * device supports AES/CCMP encryption
     */
    CIPHER_CCMP,
    /**
     * device supports WPA1 authentication
     */
    WPA,
    /**
     * device supports WPA2/RSN authentication
     */
    RSN,
    /**
     * device supports Access Point mode
     */
    AP,
    /**
     * device supports Ad-Hoc mode
     */
    ADHOC,
    /**
     * device reports frequency capabilities
     */
    FREQ_VALID,
    /**
     * device supports 2.4GHz frequencies
     */
    FREQ_2GHZ,
    /**
     * device supports 5GHz frequencies
     */
    FREQ_5GHZ,
    /**
     * device supports acting as a mesh point. Since: 1.20.
     */
    MESH,
    /**
     * device supports WPA2/RSN in an IBSS network. Since: 1.22.
     */
    IBSS_RSN,
}
/**
 * #NMDhcpHostnameFlags describe flags related to the DHCP hostname and
 * FQDN.
 */
enum DhcpHostnameFlags {
    /**
     * no flag set. The default value from
     *   Networkmanager global configuration is used. If such value is unset
     *   or still zero, the DHCP request will use standard FQDN flags, i.e.
     *   %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE and
     *   %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
     *   %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
     */
    NONE,
    /**
     * whether the server should
     *   do the A RR (FQDN-to-address) DNS updates.
     */
    FQDN_SERV_UPDATE,
    /**
     * if set, the FQDN is encoded
     *   using canonical wire format. Otherwise it uses the deprecated
     *   ASCII encoding. This flag is allowed only for DHCPv4.
     */
    FQDN_ENCODED,
    /**
     * when not set, request the
     *   server to perform updates (the PTR RR and possibly the A RR
     *   based on the %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE flag). If
     *   this is set, the %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE flag
     *   should be cleared.
     */
    FQDN_NO_UPDATE,
    /**
     * when set, no FQDN flags are
     *   sent in the DHCP FQDN option. When cleared and all other FQDN
     *   flags are zero, standard FQDN flags are sent. This flag is
     *   incompatible with any other FQDN flag.
     */
    FQDN_CLEAR_FLAGS,
}
/**
 * Compare flags for nm_ip_address_cmp_full().
 */
enum IPAddressCmpFlags {
    /**
     * no flags.
     */
    NONE,
    /**
     * when comparing two addresses,
     *   also consider their attributes. Warning: note that attributes are GVariants
     *   and they don't have a total order. In other words, if the address differs only
     *   by their attributes, the returned compare order is not total. In that case,
     *   the return value merely indicates equality (zero) or inequality.
     */
    WITH_ATTRS,
}
enum IPRoutingRuleAsStringFlags {
    /**
     * no flags selected.
     */
    NONE,
    /**
     * whether to allow parsing
     *   IPv4 addresses.
     */
    AF_INET,
    /**
     * whether to allow parsing
     *   IPv6 addresses. If both `NM_IP_ROUTING_RULE_AS_STRING_FLAGS_AF_INET` and
     *   `NM_IP_ROUTING_RULE_AS_STRING_FLAGS_AF_INET6` are unset, it's the same
     *   as setting them both.
     */
    AF_INET6,
    /**
     * if set, ensure that the
     *   rule verfies or fail.
     */
    VALIDATE,
}
/**
 * IP tunnel flags.
 */
enum IPTunnelFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * don't add encapsulation limit
     *     if one isn't present in inner packet
     */
    IP6_IGN_ENCAP_LIMIT,
    /**
     * copy the traffic class field
     *     from the inner packet
     */
    IP6_USE_ORIG_TCLASS,
    /**
     * copy the flowlabel from the
     *     inner packet
     */
    IP6_USE_ORIG_FLOWLABEL,
    /**
     * used for Mobile IPv6
     */
    IP6_MIP6_DEV,
    /**
     * copy DSCP from the outer packet
     */
    IP6_RCV_DSCP_COPY,
    /**
     * copy fwmark from inner packet
     */
    IP6_USE_ORIG_FWMARK,
}
/**
 * Flags for customizing nm_keyfile_read() and nm_keyfile_write().
 * 
 * Currently no flags are implemented.
 */
enum KeyfileHandlerFlags {
    /**
     * no flags set.
     */
    NONE,
}
/**
 * Flags for the manager Reload() call.
 */
enum ManagerReloadFlags {
    /**
     * reload the NetworkManager.conf configuration
     *   from disk. Note that this does not include connections, which can be
     *   reloaded via Setting's ReloadConnections().
     */
    CONF,
    /**
     * update DNS configuration, which usually
     *   involves writing /etc/resolv.conf anew.
     */
    DNS_RC,
    /**
     * means to restart the DNS plugin. This
     *   is for example useful when using dnsmasq plugin, which uses additional
     *   configuration in /etc/NetworkManager/dnsmasq.d. If you edit those files,
     *   you can restart the DNS plugin. This action shortly interrupts name
     *   resolution.
     */
    DNS_FULL,
}
enum MptcpFlags {
    /**
     * The default, meaning that no MPTCP flags are set.
     */
    NONE,
    /**
     * don't configure MPTCP endpoints on the device.
     */
    DISABLED,
    /**
     * MPTCP is enabled and endpoints will be configured.
     *   This flag is implied if any of the other flags indicate that
     *   MPTCP is enabled and therefore in most cases unnecessary.
     *   Note that if "/proc/sys/net/mptcp/enabled" sysctl is disabled, MPTCP
     *   handling is disabled despite this flag. This can be overruled with the
     *   "also-without-sysctl" flag.
     *   Note that by default interfaces that don't have a default route are
     *   excluded from having MPTCP endpoints configured. This can be overruled
     *   with the "also-without-default-route" and this affects endpoints
     *   per address family.
     */
    ENABLED,
    /**
     * even if MPTCP handling is enabled
     *   via the "enabled" flag, it is ignored unless "/proc/sys/net/mptcp/enabled"
     *   is on. With this flag, MPTCP endpoints will be configured regardless
     *   of the sysctl setting.
     */
    ALSO_WITHOUT_SYSCTL,
    /**
     * even if MPTCP handling is enabled
     *   via the "enabled" flag, it is ignored per-address family unless NetworkManager
     *   configures a default route. With this flag, NetworkManager will also configure
     *   MPTCP endpoints if there is no default route. This takes effect per-address
     *   family.
     */
    ALSO_WITHOUT_DEFAULT_ROUTE,
    /**
     * Flag for the MPTCP endpoint. The endpoint will be
     *   announced/signaled to each peer via an MPTCP ADD_ADDR sub-option.
     */
    SIGNAL,
    /**
     * Flag for the MPTCP endpoint. If additional subflow creation
     *   is allowed by the MPTCP limits, the MPTCP path manager will try to create an
     *   additional subflow using this endpoint as the source address after the MPTCP connection
     *   is established.
     */
    SUBFLOW,
    /**
     * Flag for the MPTCP endpoint. If this is a subflow endpoint, the
     *   subflows created using this endpoint will have the backup flag set during the connection
     *   process. This flag instructs the peer to only send data on a given subflow when all
     *   non-backup subflows are unavailable. This does not affect outgoing data,
     *   where subflow priority is determined by the backup/non-backup flag received
     *   from the peer
     */
    BACKUP,
    /**
     * Flag for the MPTCP endpoint. If this is a subflow endpoint and additional
     *   subflow creation is allowed by the MPTCP limits, the MPTCP path manager will try to create an
     *   additional subflow for each known peer address, using this endpoint as the source address.
     *   This will occur after the MPTCP connection is established. If the peer did not announce
     *   any additional addresses using the MPTCP ADD_ADDR sub-option, this will behave the same
     *   as a plain subflow endpoint. When the peer does announce addresses, each received ADD_ADDR
     *   sub-option will trigger creation of an additional subflow to generate a full mesh topology.
     */
    FULLMESH,
}
/**
 * Flags related to radio interfaces.
 */
enum RadioFlags {
    /**
     * an alias for numeric zero, no flags set.
     */
    NONE,
    /**
     * A Wireless LAN device or rfkill switch
     *   is detected in the system.
     */
    WLAN_AVAILABLE,
    /**
     * A Wireless WAN device or rfkill switch
     *   is detected in the system.
     */
    WWAN_AVAILABLE,
}
/**
 * #NMSecretAgentCapabilities indicate various capabilities of the agent.
 */
enum SecretAgentCapabilities {
    /**
     * the agent supports no special capabilities
     */
    NONE,
    /**
     * the agent supports passing hints to
     * VPN plugin authentication dialogs.
     */
    VPN_HINTS,
    /**
     * bounds checking value; should not be used.
     */
    LAST,
}
/**
 * #NMSecretAgentGetSecretsFlags values modify the behavior of a GetSecrets request.
 */
enum SecretAgentGetSecretsFlags {
    /**
     * no special behavior; by default no
     *   user interaction is allowed and requests for secrets are fulfilled from
     *   persistent storage, or if no secrets are available an error is returned.
     */
    NONE,
    /**
     * allows the request to
     *   interact with the user, possibly prompting via UI for secrets if any are
     *   required, or if none are found in persistent storage.
     */
    ALLOW_INTERACTION,
    /**
     * explicitly prompt for new
     *   secrets from the user.  This flag signals that NetworkManager thinks any
     *   existing secrets are invalid or wrong.  This flag implies that interaction
     *   is allowed.
     */
    REQUEST_NEW,
    /**
     * set if the request was
     *   initiated by user-requested action via the D-Bus interface, as opposed to
     *   automatically initiated by NetworkManager in response to (for example) scan
     *   results or carrier changes.
     */
    USER_REQUESTED,
    /**
     * indicates that WPS enrollment
     *   is active with PBC method. The agent may suggest that the user pushes a button
     *   on the router instead of supplying a PSK.
     */
    WPS_PBC_ACTIVE,
    /**
     * Internal flag, not part of
     *   the D-Bus API.
     */
    ONLY_SYSTEM,
    /**
     * Internal flag, not part of
     *   the D-Bus API.
     */
    NO_ERRORS,
}
/**
 * #NMSetting8021xAuthFlags values indicate which authentication settings
 * should be used.
 * 
 * Before 1.22, this was wrongly marked as a enum and not as a flags
 * type.
 */
enum Setting8021xAuthFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Disable TLSv1.0
     */
    TLS_1_0_DISABLE,
    /**
     * Disable TLSv1.1
     */
    TLS_1_1_DISABLE,
    /**
     * Disable TLSv1.2
     */
    TLS_1_2_DISABLE,
    /**
     * Disable TLS time checks. Since 1.42.
     */
    TLS_DISABLE_TIME_CHECKS,
    /**
     * Disable TLSv1.3. Since 1.42.
     */
    TLS_1_3_DISABLE,
    /**
     * Enable TLSv1.0. Since 1.42.
     */
    TLS_1_0_ENABLE,
    /**
     * Enable TLSv1.1. Since 1.42.
     */
    TLS_1_1_ENABLE,
    /**
     * Enable TLSv1.2. Since 1.42.
     */
    TLS_1_2_ENABLE,
    /**
     * Enable TLSv1.3. Since 1.42.
     */
    TLS_1_3_ENABLE,
    /**
     * All supported flags
     */
    ALL,
}
/**
 * DCB feature flags.
 */
enum SettingDcbFlags {
    /**
     * no flag
     */
    NONE,
    /**
     * the feature is enabled
     */
    ENABLE,
    /**
     * the feature is advertised
     */
    ADVERTISE,
    /**
     * the feature is willing to change based on
     * peer configuration advertisements
     */
    WILLING,
}
/**
 * These flags indicate specific behavior related to handling of a secret.  Each
 * secret has a corresponding set of these flags which indicate how the secret
 * is to be stored and/or requested when it is needed.
 */
enum SettingSecretFlags {
    /**
     * the system is responsible for providing and
     * storing this secret (default)
     */
    NONE,
    /**
     * a user secret agent is responsible
     * for providing and storing this secret; when it is required agents will be
     * asked to retrieve it
     */
    AGENT_OWNED,
    /**
     * this secret should not be saved, but
     * should be requested from the user each time it is needed
     */
    NOT_SAVED,
    /**
     * in situations where it cannot be
     * automatically determined that the secret is required (some VPNs and PPP
     * providers don't require all secrets) this flag indicates that the specific
     * secret is not required
     */
    NOT_REQUIRED,
}
/**
 * Options for #NMSettingWired:wake-on-lan. Note that not all options
 * are supported by all devices.
 */
enum SettingWiredWakeOnLan {
    /**
     * Wake on PHY activity
     */
    PHY,
    /**
     * Wake on unicast messages
     */
    UNICAST,
    /**
     * Wake on multicast messages
     */
    MULTICAST,
    /**
     * Wake on broadcast messages
     */
    BROADCAST,
    /**
     * Wake on ARP
     */
    ARP,
    /**
     * Wake on magic packet
     */
    MAGIC,
    /**
     * Use the default value
     */
    DEFAULT,
    /**
     * Don't change configured settings
     */
    IGNORE,
}
/**
 * Configure the use of WPS by a connection while it activates.
 * 
 * Note: prior to 1.16, this was a GEnum type instead of a GFlags type
 * although, with the same numeric values.
 */
enum SettingWirelessSecurityWpsMethod {
    /**
     * Attempt whichever method AP supports
     */
    DEFAULT,
    /**
     * WPS can not be used.
     */
    DISABLED,
    /**
     * Use WPS, any method
     */
    AUTO,
    /**
     * use WPS push-button method
     */
    PBC,
    /**
     * use PIN method
     */
    PIN,
}
/**
 * Options for #NMSettingWireless:wake-on-wlan. Note that not all options
 * are supported by all devices.
 */
enum SettingWirelessWakeOnWLan {
    /**
     * Wake on any activity
     */
    ANY,
    /**
     * Wake on disconnect
     */
    DISCONNECT,
    /**
     * Wake on magic packet
     */
    MAGIC,
    /**
     * Wake on GTK rekey failure
     */
    GTK_REKEY_FAILURE,
    /**
     * Wake on EAP identity request
     */
    EAP_IDENTITY_REQUEST,
    /**
     * Wake on 4way handshake
     */
    "4WAY_HANDSHAKE",
    /**
     * Wake on rfkill release
     */
    RFKILL_RELEASE,
    TCP,
    /**
     * Wake on all events. This does not
     *   include the exclusive flags `NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT` or
     *   `NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE`.
     */
    ALL,
    /**
     * Use the default value
     */
    DEFAULT,
    /**
     * Don't change configured settings
     */
    IGNORE,
}
/**
 * Numeric flags for the "flags" argument of AddConnection2() D-Bus API.
 */
enum SettingsAddConnection2Flags {
    /**
     * an alias for numeric zero, no flags set.
     */
    NONE,
    /**
     * to persist the connection to disk.
     */
    TO_DISK,
    /**
     * to make the connection in-memory only.
     */
    IN_MEMORY,
    /**
     * usually, when the connection
     *   has autoconnect enabled and gets added, it becomes eligible to autoconnect
     *   right away. Setting this flag, disables autoconnect until the connection
     *   is manually activated.
     */
    BLOCK_AUTOCONNECT,
}
/**
 * Flags describing the current activation state.
 */
enum SettingsConnectionFlags {
    /**
     * an alias for numeric zero, no flags set.
     */
    NONE,
    /**
     * the connection is not saved to disk.
     *   That either means, that the connection is in-memory only and currently
     *   is not backed by a file. Or, that the connection is backed by a file,
     *   but has modifications in-memory that were not persisted to disk.
     */
    UNSAVED,
    /**
     * A connection is "nm-generated" if
     *  it was generated by NetworkManger. If the connection gets modified or saved
     *  by the user, the flag gets cleared. A nm-generated is also unsaved
     *  and has no backing file as it is in-memory only.
     */
    NM_GENERATED,
    /**
     * The connection will be deleted
     *  when it disconnects. That is for in-memory connections (unsaved), which are
     *  currently active but deleted on disconnect. Volatile connections are
     *  always unsaved, but they are also no backing file on disk and are entirely
     *  in-memory only.
     */
    VOLATILE,
    /**
     * the profile was generated to represent
     *  an external configuration of a networking device. Since: 1.26.
     */
    EXTERNAL,
}
enum SettingsUpdate2Flags {
    /**
     * an alias for numeric zero, no flags set.
     */
    NONE,
    /**
     * to persist the connection to disk.
     */
    TO_DISK,
    /**
     * makes the profile in-memory.
     *   Note that such profiles are stored in keyfile format under /run.
     *   If the file is already in-memory, the file in /run is updated in-place.
     *   Otherwise, the previous storage for the profile is left unchanged
     *   on disk, and the in-memory copy shadows it.
     *   Note that the original filename of the previous persistent storage (if any)
     *   is remembered. That means, when later persisting the profile again to disk,
     *   the file on disk will be overwritten again.
     *   Likewise, when finally deleting the profile, both the storage from /run
     *   and persistent storage are deleted (or if the persistent storage does not
     *   allow deletion, and nmmeta file is written to mark the UUID as deleted).
     */
    IN_MEMORY,
    /**
     * this is almost the same
     *   as %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY, with one difference: when later deleting
     *   the profile, the original profile will not be deleted. Instead a nmmeta
     *   file is written to /run to indicate that the profile is gone.
     *   Note that if such a nmmeta tombstone file exists and hides a file in persistent
     *   storage, then when re-adding the profile with the same UUID, then the original
     *   storage is taken over again.
     */
    IN_MEMORY_DETACHED,
    /**
     * this is like %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY,
     *   but if the connection has a corresponding file on persistent storage, the file
     *   will be deleted right away. If the profile is later again persisted to disk,
     *   a new, unused filename will be chosen.
     */
    IN_MEMORY_ONLY,
    /**
     * This can be specified with either
     *   %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY, %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY_DETACHED
     *   or %NM_SETTINGS_UPDATE2_FLAG_IN_MEMORY_ONLY.
     *   After making the connection in-memory only, the connection is marked
     *   as volatile. That means, if the connection is currently not active
     *   it will be deleted right away. Otherwise, it is marked to for deletion
     *   once the connection deactivates. A volatile connection cannot autoactivate
     *   again (because it's about to be deleted), but a manual activation will
     *   clear the volatile flag.
     */
    VOLATILE,
    /**
     * usually, when the connection
     *   has autoconnect enabled and is modified, it becomes eligible to autoconnect
     *   right away. Setting this flag, disables autoconnect until the connection
     *   is manually activated.
     */
    BLOCK_AUTOCONNECT,
    /**
     * when a profile gets modified that is
     *   currently active, then these changes don't take effect for the active
     *   device unless the profile gets reactivated or the configuration reapplied.
     *   There are two exceptions: by default "connection.zone" and "connection.metered"
     *   properties take effect immediately. Specify this flag to prevent these
     *   properties to take effect, so that the change is restricted to modify
     *   the profile. Since: 1.20.
     */
    NO_REAPPLY,
}
enum TeamLinkWatcherArpPingFlags {
    /**
     * the arp_ping link watcher
     *    option 'validate_active' is enabled (set to true).
     */
    VALIDATE_ACTIVE,
    /**
     * the arp_ping link watcher
     *    option 'validate_inactive' is enabled (set to true).
     */
    VALIDATE_INACTIVE,
    /**
     * the arp_ping link watcher option
     *    'send_always' is enabled (set to true).
     */
    SEND_ALWAYS,
}
/**
 * #NMVlanFlags values control the behavior of the VLAN interface.
 */
enum VlanFlags {
    /**
     * indicates that this interface should reorder
     *  outgoing packet headers to look more like a non-VLAN Ethernet interface
     */
    REORDER_HEADERS,
    /**
     * indicates that this interface should use GVRP to register
     *  itself with its switch
     */
    GVRP,
    /**
     * indicates that this interface's operating
     *  state is tied to the underlying network interface but other details
     *  (like routing) are not.
     */
    LOOSE_BINDING,
    /**
     * indicates that this interface should use MVRP to register
     *  itself with its switch
     */
    MVRP,
}
/**
 * Flags that indicate certain capabilities of the plugin to editor programs.
 */
enum VpnEditorPluginCapability {
    /**
     * unknown or no capability
     */
    NONE,
    /**
     * the plugin can import new connections
     */
    IMPORT,
    /**
     * the plugin can export connections
     */
    EXPORT,
    /**
     * the plugin supports IPv6 addressing
     */
    IPV6,
}
module AccessPoint {

    // Constructor properties interface

}

class AccessPoint extends Object {

    // Own properties of NM-1.0.AccessPoint

    /**
     * The BSSID of the access point.
     */
    readonly bssid: string
    /**
     * The flags of the access point.
     */
    readonly flags: 80211ApFlags
    /**
     * The frequency of the access point.
     */
    readonly frequency: number
    /**
     * Alias for #NMAccessPoint:bssid.
     */
    readonly hw_address: string
    /**
     * Alias for #NMAccessPoint:bssid.
     */
    readonly hwAddress: string
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * access point was found in scan results.  A value of -1 means the
     * access point has not been found in a scan.
     */
    readonly last_seen: number
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * access point was found in scan results.  A value of -1 means the
     * access point has not been found in a scan.
     */
    readonly lastSeen: number
    /**
     * The maximum bit rate of the access point in kbit/s.
     */
    readonly max_bitrate: number
    /**
     * The maximum bit rate of the access point in kbit/s.
     */
    readonly maxBitrate: number
    /**
     * The mode of the access point; either "infrastructure" (a central
     * coordinator of the wireless network allowing clients to connect) or
     * "ad-hoc" (a network with no central controller).
     */
    readonly mode: 80211Mode
    /**
     * The RSN flags of the access point.
     */
    readonly rsn_flags: 80211ApSecurityFlags
    /**
     * The RSN flags of the access point.
     */
    readonly rsnFlags: 80211ApSecurityFlags
    /**
     * The SSID of the access point, or %NULL if it is not known.
     */
    readonly ssid: GLib.Bytes
    /**
     * The current signal strength of the access point.
     */
    readonly strength: number
    /**
     * The WPA flags of the access point.
     */
    readonly wpa_flags: 80211ApSecurityFlags
    /**
     * The WPA flags of the access point.
     */
    readonly wpaFlags: 80211ApSecurityFlags

    // Owm methods of NM-1.0.AccessPoint

    /**
     * Validates a given connection against a given Wi-Fi access point to ensure that
     * the connection may be activated with that AP.  The connection must match the
     * `ap'`s SSID, (if given) BSSID, and other attributes like security settings,
     * channel, band, etc.
     * @param connection an #NMConnection to validate against @ap
     * @returns %TRUE if the connection may be activated with this Wi-Fi AP, %FALSE if it cannot be.
     */
    connection_valid(connection: Connection): boolean
    /**
     * Filters a given array of connections for a given #NMAccessPoint object and
     * returns connections which may be activated with the access point.  Any
     * returned connections will match the `ap'`s SSID and (if given) BSSID and
     * other attributes like security settings, channel, etc.
     * 
     * To obtain the list of connections that are compatible with this access point,
     * use nm_client_get_connections() and then filter the returned list for a given
     * #NMDevice using nm_device_filter_connections() and finally filter that list
     * with this function.
     * @param connections an array of #NMConnections to filter
     * @returns an array of #NMConnections that could be activated with the given @ap.  The array should be freed with g_ptr_array_unref() when it is no longer required. WARNING: the transfer annotation for this function may not work correctly   with bindings. See https://gitlab.gnome.org/GNOME/gobject-introspection/-/issues/305.   You can filter the list yourself with nm_access_point_connection_valid().
     */
    filter_connections(connections: Connection[]): Connection[]
    /**
     * Gets the Basic Service Set ID (BSSID) of the Wi-Fi access point.
     * @returns the BSSID of the access point. This is an internal string and must not be modified or freed.
     */
    get_bssid(): string
    /**
     * Gets the flags of the access point.
     * @returns the flags
     */
    get_flags(): 80211ApFlags
    /**
     * Gets the frequency of the access point in MHz.
     * @returns the frequency in MHz
     */
    get_frequency(): number
    /**
     * Returns the timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * access point was found in scan results.  A value of -1 means the access
     * point has not been found in a scan.
     * @returns the last seen time in seconds
     */
    get_last_seen(): number
    /**
     * Gets the maximum bit rate of the access point in kbit/s.
     * @returns the maximum bit rate (kbit/s)
     */
    get_max_bitrate(): number
    /**
     * Gets the mode of the access point.
     * @returns the mode
     */
    get_mode(): 80211Mode
    /**
     * Gets the RSN (Robust Secure Network, ie WPA version 2) flags of the access
     * point.
     * @returns the RSN flags
     */
    get_rsn_flags(): 80211ApSecurityFlags
    /**
     * Gets the SSID of the access point.
     * @returns the #GBytes containing the SSID, or %NULL if the   SSID is unknown.
     */
    get_ssid(): GLib.Bytes
    /**
     * Gets the current signal strength of the access point as a percentage.
     * @returns the signal strength (0 to 100)
     */
    get_strength(): number
    /**
     * Gets the WPA (version 1) flags of the access point.
     * @returns the WPA flags
     */
    get_wpa_flags(): 80211ApSecurityFlags
}

module ActiveConnection {

    // Signal callback interfaces

    interface StateChanged {
        (state: number, reason: number): void
    }


    // Constructor properties interface

}

class ActiveConnection extends Object {

    // Own properties of NM-1.0.ActiveConnection

    /**
     * The connection that this is an active instance of.
     */
    readonly connection: RemoteConnection
    /**
     * The controller device if one exists. This replaces the deprecated
     * "master" property.
     */
    readonly controller: Device
    /**
     * Whether the active connection is the default IPv4 one.
     */
    readonly "default": boolean
    /**
     * Whether the active connection is the default IPv6 one.
     */
    readonly default6: boolean
    /**
     * The devices of the active connection.
     */
    readonly devices: Device[]
    /**
     * The IPv4 #NMDhcpConfig of the connection.
     */
    readonly dhcp4_config: DhcpConfig
    /**
     * The IPv4 #NMDhcpConfig of the connection.
     */
    readonly dhcp4Config: DhcpConfig
    /**
     * The IPv6 #NMDhcpConfig of the connection.
     */
    readonly dhcp6_config: DhcpConfig
    /**
     * The IPv6 #NMDhcpConfig of the connection.
     */
    readonly dhcp6Config: DhcpConfig
    /**
     * The active connection's ID
     */
    readonly id: string
    /**
     * The IPv4 #NMIPConfig of the connection.
     */
    readonly ip4_config: IPConfig
    /**
     * The IPv4 #NMIPConfig of the connection.
     */
    readonly ip4Config: IPConfig
    /**
     * The IPv6 #NMIPConfig of the connection.
     */
    readonly ip6_config: IPConfig
    /**
     * The IPv6 #NMIPConfig of the connection.
     */
    readonly ip6Config: IPConfig
    /**
     * The master device if one exists. Replaced by the "controller" property.
     */
    readonly master: Device
    /**
     * The path to the "specific object" of the active connection; see
     * nm_active_connection_get_specific_object_path() for more details.
     */
    readonly specific_object_path: string
    /**
     * The path to the "specific object" of the active connection; see
     * nm_active_connection_get_specific_object_path() for more details.
     */
    readonly specificObjectPath: string
    /**
     * The state of the active connection.
     */
    readonly state: ActiveConnectionState
    /**
     * The state flags of the active connection.
     */
    readonly state_flags: number
    /**
     * The state flags of the active connection.
     */
    readonly stateFlags: number
    /**
     * The active connection's type
     */
    readonly type: string
    /**
     * The active connection's UUID
     */
    readonly uuid: string
    /**
     * Whether the active connection is a VPN connection.
     */
    readonly vpn: boolean

    // Owm methods of NM-1.0.ActiveConnection

    /**
     * Gets the #NMRemoteConnection associated with `connection`.
     * @returns the #NMRemoteConnection which this #NMActiveConnection is an active instance of.
     */
    get_connection(): RemoteConnection
    /**
     * Gets the #NMConnection's type.
     * @returns the type of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    get_connection_type(): string
    /**
     * Gets the controller #NMDevice of the connection. This replaces the
     * deprecated nm_active_connection_get_master() method.
     * @returns the controller #NMDevice of the #NMActiveConnection.
     */
    get_controller(): (any | null)
    /**
     * Whether the active connection is the default IPv4 one (that is, is used for
     * the default IPv4 route and DNS information).
     * @returns %TRUE if the active connection is the default IPv4 connection
     */
    get_default(): boolean
    /**
     * Whether the active connection is the default IPv6 one (that is, is used for
     * the default IPv6 route and DNS information).
     * @returns %TRUE if the active connection is the default IPv6 connection
     */
    get_default6(): boolean
    /**
     * Gets the #NMDevices used for the active connections.
     * @returns the #GPtrArray containing #NMDevices. This is the internal copy used by the connection, and must not be modified.
     */
    get_devices(): Device[]
    /**
     * Gets the current IPv4 #NMDhcpConfig (if any) associated with the
     * #NMActiveConnection.
     * @returns the IPv4 #NMDhcpConfig, or %NULL if the connection   does not use DHCP, or is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
     */
    get_dhcp4_config(): DhcpConfig
    /**
     * Gets the current IPv6 #NMDhcpConfig (if any) associated with the
     * #NMActiveConnection.
     * @returns the IPv6 #NMDhcpConfig, or %NULL if the connection   does not use DHCPv6, or is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
     */
    get_dhcp6_config(): DhcpConfig
    /**
     * Gets the #NMConnection's ID.
     * @returns the ID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    get_id(): string
    /**
     * Gets the current IPv4 #NMIPConfig associated with the #NMActiveConnection.
     * @returns the IPv4 #NMIPConfig, or %NULL if the connection is   not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
     */
    get_ip4_config(): IPConfig
    /**
     * Gets the current IPv6 #NMIPConfig associated with the #NMActiveConnection.
     * @returns the IPv6 #NMIPConfig, or %NULL if the connection is   not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
     */
    get_ip6_config(): IPConfig
    /**
     * Gets the master #NMDevice of the connection.
     * @returns the master #NMDevice of the #NMActiveConnection.
     */
    get_master(): (any | null)
    /**
     * Gets the path of the "specific object" used at activation.
     * 
     * Currently, there is no single method that will allow you to automatically turn
     * this into an appropriate #NMObject; you need to know what kind of object it
     * is based on other information. (Eg, if `connection` corresponds to a Wi-Fi
     * connection, then the specific object will be an #NMAccessPoint, and you can
     * resolve it with nm_device_wifi_get_access_point_by_path().)
     * @returns the specific object's D-Bus path. This is the internal string used by the connection, and must not be modified.
     */
    get_specific_object_path(): string
    /**
     * Gets the active connection's state.
     * @returns the state
     */
    get_state(): ActiveConnectionState
    /**
     * Gets the active connection's state flags.
     * @returns the state flags
     */
    get_state_flags(): ActivationStateFlags
    /**
     * Gets the reason for active connection's state.
     * @returns the reason
     */
    get_state_reason(): ActiveConnectionStateReason
    /**
     * Gets the #NMConnection's UUID.
     * @returns the UUID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    get_uuid(): string
    /**
     * Whether the active connection is a VPN connection.
     * @returns %TRUE if the active connection is a VPN connection
     */
    get_vpn(): boolean
}

module Checkpoint {

    // Constructor properties interface

}

class Checkpoint extends Object {

    // Own properties of NM-1.0.Checkpoint

    /**
     * The timestamp (in CLOCK_BOOTTIME milliseconds) of checkpoint creation.
     */
    readonly created: number
    /**
     * The devices that are part of this checkpoint.
     */
    readonly devices: Device[]
    /**
     * Timeout in seconds for automatic rollback, or zero.
     */
    readonly rollback_timeout: number
    /**
     * Timeout in seconds for automatic rollback, or zero.
     */
    readonly rollbackTimeout: number

    // Owm methods of NM-1.0.Checkpoint

    /**
     * Gets the timestamp (in CLOCK_BOOTTIME milliseconds) of checkpoint creation.
     * 
     * Use nm_utils_get_timestamp_msec() to obtain current time value suitable for
     * comparing to this value.
     * @returns the timestamp of checkpoint creation.
     */
    get_created(): number
    /**
     * The devices that are part of this checkpoint.
     * @returns the devices list.
     */
    get_devices(): Device[]
    /**
     * Gets the timeout in seconds for automatic rollback.
     * @returns the rollback timeout.
     */
    get_rollback_timeout(): number
}

module Client {

    // Signal callback interfaces

    interface ActiveConnectionAdded {
        (active_connection: ActiveConnection): void
    }

    interface ActiveConnectionRemoved {
        (active_connection: ActiveConnection): void
    }

    interface AnyDeviceAdded {
        (device: Device): void
    }

    interface AnyDeviceRemoved {
        (device: Device): void
    }

    interface ConnectionAdded {
        (connection: RemoteConnection): void
    }

    interface ConnectionRemoved {
        (connection: RemoteConnection): void
    }

    interface DeviceAdded {
        (device: Device): void
    }

    interface DeviceRemoved {
        (device: Device): void
    }

    interface PermissionChanged {
        (permission: number, result: number): void
    }


    // Constructor properties interface

}

/**
 * NMClient contains a cache of the objects of NetworkManager's D-Bus API.
 * It uses #GMainContext and #GDBusConnection for that and registers to
 * D-Bus signals. That means, when iterating the associated #GMainContext,
 * D-Bus signals gets processed and the #NMClient instance updates and
 * emits #GObject signals.
 */
class Client extends GObject.Object {

    // Own properties of NM-1.0.Client

    /**
     * The #NMActiveConnection of the activating connection that is
     * likely to become the new #NMClient:primary-connection.
     */
    readonly activating_connection: ActiveConnection
    /**
     * The #NMActiveConnection of the activating connection that is
     * likely to become the new #NMClient:primary-connection.
     */
    readonly activatingConnection: ActiveConnection
    /**
     * The active connections.
     */
    readonly active_connections: ActiveConnection[]
    /**
     * The active connections.
     */
    readonly activeConnections: ActiveConnection[]
    /**
     * List of both real devices and device placeholders.
     */
    readonly all_devices: Device[]
    /**
     * List of both real devices and device placeholders.
     */
    readonly allDevices: Device[]
    /**
     * If %TRUE, adding and modifying connections is supported.
     */
    readonly can_modify: boolean
    /**
     * If %TRUE, adding and modifying connections is supported.
     */
    readonly canModify: boolean
    /**
     * The list of capabilities numbers as guint32 or %NULL if
     * there are no capabilities. The numeric value correspond
     * to %NMCapability enum.
     */
    readonly capabilities: number[]
    /**
     * The list of active checkpoints.
     */
    readonly checkpoints: Checkpoint[]
    /**
     * The list of configured connections that are available to the user. (Note
     * that this differs from the underlying D-Bus property, which may also
     * contain the object paths of connections that the user does not have
     * permission to read the details of.)
     */
    readonly connections: RemoteConnection[]
    /**
     * The network connectivity state.
     */
    readonly connectivity: ConnectivityState
    readonly connectivity_check_available: boolean
    readonly connectivityCheckAvailable: boolean
    connectivity_check_enabled: boolean
    connectivityCheckEnabled: boolean
    /**
     * The used URI for connectivity checking.
     */
    readonly connectivity_check_uri: string
    /**
     * The used URI for connectivity checking.
     */
    readonly connectivityCheckUri: string
    /**
     * The #GDBusConnection to use.
     * 
     * If this is not set during object construction, the D-Bus connection will
     * automatically be chosen during async/sync initalization via g_bus_get().
     */
    dbus_connection: Gio.DBusConnection
    /**
     * The #GDBusConnection to use.
     * 
     * If this is not set during object construction, the D-Bus connection will
     * automatically be chosen during async/sync initalization via g_bus_get().
     */
    dbusConnection: Gio.DBusConnection
    /**
     * The name owner of the NetworkManager D-Bus service.
     */
    readonly dbus_name_owner: string
    /**
     * The name owner of the NetworkManager D-Bus service.
     */
    readonly dbusNameOwner: string
    /**
     * List of real network devices.  Does not include placeholder devices.
     */
    readonly devices: Device[]
    /**
     * The current DNS configuration, represented as an array
     * of #NMDnsEntry objects.
     */
    readonly dns_configuration: DnsEntry[]
    /**
     * The current DNS configuration, represented as an array
     * of #NMDnsEntry objects.
     */
    readonly dnsConfiguration: DnsEntry[]
    /**
     * The current DNS processing mode.
     */
    readonly dns_mode: string
    /**
     * The current DNS processing mode.
     */
    readonly dnsMode: string
    /**
     * The current resolv.conf management mode.
     */
    readonly dns_rc_manager: string
    /**
     * The current resolv.conf management mode.
     */
    readonly dnsRcManager: string
    /**
     * The machine hostname stored in persistent configuration. This can be
     * modified by calling nm_client_save_hostname().
     */
    readonly hostname: string
    /**
     * #NMClientInstanceFlags for the instance. These affect behavior of #NMClient.
     * This is a construct property and you may only set most flags only during
     * construction.
     * 
     * The flag %NM_CLIENT_INSTANCE_FLAGS_NO_AUTO_FETCH_PERMISSIONS can be toggled any time,
     * even after constructing the instance. Note that you may want to watch NMClient:permissions-state
     * property to know whether permissions are ready. Note that permissions are only fetched
     * when NMClient has a D-Bus name owner.
     * 
     * The flags %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD and %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_BAD
     * cannot be set, however they will be returned by the getter after initialization completes.
     */
    instance_flags: number
    /**
     * #NMClientInstanceFlags for the instance. These affect behavior of #NMClient.
     * This is a construct property and you may only set most flags only during
     * construction.
     * 
     * The flag %NM_CLIENT_INSTANCE_FLAGS_NO_AUTO_FETCH_PERMISSIONS can be toggled any time,
     * even after constructing the instance. Note that you may want to watch NMClient:permissions-state
     * property to know whether permissions are ready. Note that permissions are only fetched
     * when NMClient has a D-Bus name owner.
     * 
     * The flags %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_GOOD and %NM_CLIENT_INSTANCE_FLAGS_INITIALIZED_BAD
     * cannot be set, however they will be returned by the getter after initialization completes.
     */
    instanceFlags: number
    /**
     * Whether the connectivity is metered.
     */
    readonly metered: number
    /**
     * Whether networking is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    networking_enabled: boolean
    /**
     * Whether networking is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    networkingEnabled: boolean
    /**
     * Whether the daemon is running.
     */
    readonly nm_running: boolean
    /**
     * Whether the daemon is running.
     */
    readonly nmRunning: boolean
    /**
     * The state of the cached permissions. The value %NM_TERNARY_DEFAULT
     * means that no permissions are yet received (or not yet requested).
     * %NM_TERNARY_TRUE means that permissions are received, cached and up
     * to date. %NM_TERNARY_FALSE means that permissions were received and are
     * cached, but in the meantime a "CheckPermissions" signal was received
     * that invalidated the cached permissions.
     * Note that NMClient will always emit a notify::permissions-state signal
     * when a "CheckPermissions" signal got received or after new permissions
     * got received (that is regardless whether the value of the permission state
     * actually changed). With this you can watch the permissions-state property
     * to know whether the permissions are ready. Note that while NMClient has
     * no D-Bus name owner, no permissions are fetched (and this property won't
     * change).
     */
    readonly permissions_state: Ternary
    /**
     * The state of the cached permissions. The value %NM_TERNARY_DEFAULT
     * means that no permissions are yet received (or not yet requested).
     * %NM_TERNARY_TRUE means that permissions are received, cached and up
     * to date. %NM_TERNARY_FALSE means that permissions were received and are
     * cached, but in the meantime a "CheckPermissions" signal was received
     * that invalidated the cached permissions.
     * Note that NMClient will always emit a notify::permissions-state signal
     * when a "CheckPermissions" signal got received or after new permissions
     * got received (that is regardless whether the value of the permission state
     * actually changed). With this you can watch the permissions-state property
     * to know whether the permissions are ready. Note that while NMClient has
     * no D-Bus name owner, no permissions are fetched (and this property won't
     * change).
     */
    readonly permissionsState: Ternary
    /**
     * The #NMActiveConnection of the device with the default route;
     * see nm_client_get_primary_connection() for more details.
     */
    readonly primary_connection: ActiveConnection
    /**
     * The #NMActiveConnection of the device with the default route;
     * see nm_client_get_primary_connection() for more details.
     */
    readonly primaryConnection: ActiveConnection
    /**
     * Flags for radio interfaces. See #NMRadioFlags.
     */
    readonly radio_flags: number
    /**
     * Flags for radio interfaces. See #NMRadioFlags.
     */
    readonly radioFlags: number
    /**
     * Whether the daemon is still starting up.
     */
    readonly startup: boolean
    /**
     * The current daemon state.
     */
    readonly state: State
    /**
     * The NetworkManager version.
     */
    readonly version: string
    /**
     * Expose version info and capabilities of NetworkManager. If non-empty,
     * the first element is NM_VERSION, which encodes the version of the
     * daemon as "(major &lt;&lt; 16 | minor &lt;&lt; 8 | micro)". The following elements
     * is a bitfields of %NMVersionInfoCapabilities. If a bit is set, then
     * the running NetworkManager has the respective capability.
     */
    readonly version_info: number[]
    /**
     * Expose version info and capabilities of NetworkManager. If non-empty,
     * the first element is NM_VERSION, which encodes the version of the
     * daemon as "(major &lt;&lt; 16 | minor &lt;&lt; 8 | micro)". The following elements
     * is a bitfields of %NMVersionInfoCapabilities. If a bit is set, then
     * the running NetworkManager has the respective capability.
     */
    readonly versionInfo: number[]
    /**
     * Whether WiMAX functionality is enabled.
     */
    wimax_enabled: boolean
    /**
     * Whether WiMAX functionality is enabled.
     */
    wimaxEnabled: boolean
    /**
     * Whether the WiMAX hardware is enabled.
     */
    readonly wimax_hardware_enabled: boolean
    /**
     * Whether the WiMAX hardware is enabled.
     */
    readonly wimaxHardwareEnabled: boolean
    /**
     * Whether wireless is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    wireless_enabled: boolean
    /**
     * Whether wireless is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    wirelessEnabled: boolean
    /**
     * Whether the wireless hardware is enabled.
     */
    readonly wireless_hardware_enabled: boolean
    /**
     * Whether the wireless hardware is enabled.
     */
    readonly wirelessHardwareEnabled: boolean
    /**
     * Whether WWAN functionality is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    wwan_enabled: boolean
    /**
     * Whether WWAN functionality is enabled.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    wwanEnabled: boolean
    /**
     * Whether the WWAN hardware is enabled.
     */
    readonly wwan_hardware_enabled: boolean
    /**
     * Whether the WWAN hardware is enabled.
     */
    readonly wwanHardwareEnabled: boolean

    // Constructors of NM-1.0.Client


static ["new"](cancellable?: (Gio.Cancellable | null)): Client;

static new_finish(result: Gio.AsyncResult): Client;

    // Owm methods of NM-1.0.Client

    /**
     * Creates a new #NMClient asynchronously.
     * `callback` will be called when it is done. Use
     * nm_client_new_finish() to get the result.
     * 
     * This does nothing beside calling g_async_initable_new_async(). You are free to
     * call g_async_initable_new_async() or g_object_new()/g_async_initable_init_async()
     * directly for more control, to set GObject properties or get access to the NMClient
     * instance while it is still initializing.
     * 
     * Creating an #NMClient instance can only fail for two reasons. First, if you didn't
     * provide a %NM_CLIENT_DBUS_CONNECTION and the call to g_bus_get()
     * fails. You can avoid that by using g_async_initable_new_async() directly and
     * set a D-Bus connection.
     * Second, if you cancelled the creation. If you do that, then note
     * that after the failure there might still be idle actions pending
     * which keep nm_client_get_main_context() alive. That means,
     * in that case you must continue iterating the context to avoid
     * leaks. See nm_client_get_context_busy_watcher().
     * 
     * Creating an #NMClient instance when NetworkManager is not running
     * does not cause a failure.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the client is created
     */
    static new_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<Client> | null)): void
    static wait_shutdown_finish(result: Gio.AsyncResult): boolean

    // Owm methods of NM-1.0.Client

    /**
     * Asynchronously starts a connection to a particular network using the
     * configuration settings from `connection` and the network device `device`.
     * Certain connection types also take a "specific object" which is the object
     * path of a connection- specific object, like an #NMAccessPoint for Wi-Fi
     * connections, or an #NMWimaxNsp for WiMAX connections, to which you wish to
     * connect.  If the specific object is not given, NetworkManager can, in some
     * cases, automatically determine which network to connect to given the settings
     * in `connection`.
     * 
     * If `connection` is not given for a device-based activation, NetworkManager
     * picks the best available connection for the device and activates it.
     * 
     * Note that the callback is invoked when NetworkManager has started activating
     * the new connection, not when it finishes. You can use the returned
     * #NMActiveConnection object (in particular, #NMActiveConnection:state) to
     * track the activation to its completion.
     * @param connection an #NMConnection
     * @param device the #NMDevice
     * @param specific_object the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by @device, which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the activation has started
     */
    activate_connection_async(connection?: (Connection | null), device?: (Device | null), specific_object?: (string | null), cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_activate_connection_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the new #NMActiveConnection on success, %NULL on   failure, in which case @error will be set.
     */
    activate_connection_finish(result: Gio.AsyncResult): ActiveConnection
    /**
     * Adds a new connection using the given details (if any) as a template,
     * automatically filling in missing settings with the capabilities of the given
     * device and specific object.  The new connection is then asynchronously
     * activated as with nm_client_activate_connection_async(). Cannot be used for
     * VPN connections at this time.
     * 
     * Note that the callback is invoked when NetworkManager has started activating
     * the new connection, not when it finishes. You can used the returned
     * #NMActiveConnection object (in particular, #NMActiveConnection:state) to
     * track the activation to its completion.
     * 
     * This is identical to nm_client_add_and_activate_connection_async() but takes
     * a further `options` parameter. Currently, the following options are supported
     * by the daemon:
     *  * "persist": A string describing how the connection should be stored.
     *               The default is "disk", but it can be modified to "memory" (until
     *               the daemon quits) or "volatile" (will be deleted on disconnect).
     *  * "bind-activation": Bind the connection lifetime to something. The default is "none",
     *            meaning an explicit disconnect is needed. The value "dbus-client"
     *            means the connection will automatically be deactivated when the calling
     *            D-Bus client disappears from the system bus.
     * @param partial an #NMConnection to add; the connection may be   partially filled (or even %NULL) and will be completed by NetworkManager   using the given @device and @specific_object before being added
     * @param device the #NMDevice
     * @param specific_object the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (i.e., no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by @device, which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
     * @param options a #GVariant containing a dictionary with options, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the activation has started
     */
    add_and_activate_connection2(partial: (Connection | null), device: (Device | null), specific_object: (string | null), options: GLib.Variant, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_add_and_activate_connection2().
     * 
     * You can call nm_active_connection_get_connection() on the returned
     * #NMActiveConnection to find the path of the created #NMConnection.
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the new #NMActiveConnection on success, %NULL on   failure, in which case @error will be set.
     */
    add_and_activate_connection2_finish(result: Gio.AsyncResult): ActiveConnection
    /**
     * Adds a new connection using the given details (if any) as a template,
     * automatically filling in missing settings with the capabilities of the given
     * device and specific object.  The new connection is then asynchronously
     * activated as with nm_client_activate_connection_async(). Cannot be used for
     * VPN connections at this time.
     * 
     * Note that the callback is invoked when NetworkManager has started activating
     * the new connection, not when it finishes. You can used the returned
     * #NMActiveConnection object (in particular, #NMActiveConnection:state) to
     * track the activation to its completion.
     * @param partial an #NMConnection to add; the connection may be   partially filled (or even %NULL) and will be completed by NetworkManager   using the given @device and @specific_object before being added
     * @param device the #NMDevice
     * @param specific_object the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by @device, which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.   If the variant is floating, it will be consumed.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the activation has started
     */
    add_and_activate_connection_async(partial?: (Connection | null), device?: (Device | null), specific_object?: (string | null), cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_add_and_activate_connection_async().
     * 
     * You can call nm_active_connection_get_connection() on the returned
     * #NMActiveConnection to find the path of the created #NMConnection.
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the new #NMActiveConnection on success, %NULL on   failure, in which case @error will be set.
     */
    add_and_activate_connection_finish(result: Gio.AsyncResult): ActiveConnection
    /**
     * Call AddConnection2() D-Bus API asynchronously.
     * @param settings the "a{sa{sv}}" #GVariant with the content of the setting.
     * @param flags the %NMSettingsAddConnection2Flags argument.
     * @param args the "a{sv}" #GVariant with extra argument or %NULL   for no extra arguments.
     * @param ignore_out_result this function wraps AddConnection2(), which has an   additional result "a{sv}" output parameter. By setting this to %TRUE,   you signal that you are not interested in that output parameter.   This allows the function to fall back to AddConnection() and AddConnectionUnsaved(),   which is interesting if you run against an older server version that does   not yet provide AddConnection2(). By setting this to %FALSE, the function   under the hood always calls AddConnection2().
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    add_connection2(settings: GLib.Variant, flags: SettingsAddConnection2Flags, args: (GLib.Variant | null), ignore_out_result: boolean, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    add_connection2_finish(result: Gio.AsyncResult): RemoteConnection
    /**
     * Requests that the remote settings service add the given settings to a new
     * connection.  If `save_to_disk` is %TRUE, the connection is immediately written
     * to disk; otherwise it is initially only stored in memory, but may be saved
     * later by calling the connection's nm_remote_connection_commit_changes()
     * method.
     * 
     * `connection` is untouched by this function and only serves as a template of
     * the settings to add.  The #NMRemoteConnection object that represents what
     * NetworkManager actually added is returned to `callback` when the addition
     * operation is complete.
     * 
     * Note that the #NMRemoteConnection returned in `callback` may not contain
     * identical settings to `connection` as NetworkManager may perform automatic
     * completion and/or normalization of connection properties.
     * @param connection the connection to add. Note that this object's settings will be   added, not the object itself
     * @param save_to_disk whether to immediately save the connection to disk
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    add_connection_async(connection: Connection, save_to_disk: boolean, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_add_connection_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the new #NMRemoteConnection on success, %NULL on   failure, in which case @error will be set.
     */
    add_connection_finish(result: Gio.AsyncResult): RemoteConnection
    /**
     * Updates the network connectivity state and returns the (new)
     * current state. Contrast nm_client_get_connectivity(), which returns
     * the most recent known state without re-checking.
     * 
     * This is a blocking call; use nm_client_check_connectivity_async()
     * if you do not want to block.
     * @param cancellable a #GCancellable
     * @returns the (new) current connectivity state
     */
    check_connectivity(cancellable?: (Gio.Cancellable | null)): ConnectivityState
    /**
     * Asynchronously updates the network connectivity state and invokes
     * `callback` when complete. Contrast nm_client_get_connectivity(),
     * which (immediately) returns the most recent known state without
     * re-checking, and nm_client_check_connectivity(), which blocks.
     * @param cancellable a #GCancellable
     * @param callback callback to call with the result
     */
    check_connectivity_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Retrieves the result of an nm_client_check_connectivity_async()
     * call.
     * @param result the #GAsyncResult
     * @returns the (new) current connectivity state
     */
    check_connectivity_finish(result: Gio.AsyncResult): ConnectivityState
    /**
     * Resets the timeout for the checkpoint with path `checkpoint_path`
     * to `timeout_add`.
     * @param checkpoint_path a D-Bus path to a checkpoint
     * @param add_timeout the timeout in seconds counting from now.   Set to zero, to disable the timeout.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    checkpoint_adjust_rollback_timeout(checkpoint_path: string, add_timeout: number, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_checkpoint_adjust_rollback_timeout().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success or %FALSE on failure.
     */
    checkpoint_adjust_rollback_timeout_finish(result: Gio.AsyncResult): boolean
    /**
     * Creates a checkpoint of the current networking configuration
     * for given interfaces. An empty `devices` argument means all
     * devices. If `rollback_timeout` is not zero, a rollback is
     * automatically performed after the given timeout.
     * @param devices a list of devices for which a   checkpoint should be created.
     * @param rollback_timeout the rollback timeout in seconds
     * @param flags creation flags
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    checkpoint_create(devices: Device[], rollback_timeout: number, flags: CheckpointCreateFlags, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_checkpoint_create().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the new #NMCheckpoint on success, %NULL on   failure, in which case @error will be set.
     */
    checkpoint_create_finish(result: Gio.AsyncResult): Checkpoint
    /**
     * Destroys an existing checkpoint without performing a rollback.
     * @param checkpoint_path the D-Bus path for the checkpoint
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    checkpoint_destroy(checkpoint_path: string, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_checkpoint_destroy().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success or %FALSE on failure, in which case   @error will be set.
     */
    checkpoint_destroy_finish(result: Gio.AsyncResult): boolean
    /**
     * Performs the rollback of a checkpoint before the timeout is reached.
     * @param checkpoint_path the D-Bus path to the checkpoint
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    checkpoint_rollback(checkpoint_path: string, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_checkpoint_rollback().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns an hash table of   devices and results. Devices are represented by their original   D-Bus path; each result is a #NMRollbackResult.
     */
    checkpoint_rollback_finish(result: Gio.AsyncResult): GLib.HashTable<string, number>
    /**
     * Determine whether connectivity checking is available.  This
     * requires that the URI of a connectivity service has been set in the
     * configuration file.
     * @returns %TRUE if connectivity checking is available.
     */
    connectivity_check_get_available(): boolean
    /**
     * Determine whether connectivity checking is enabled.
     * @returns %TRUE if connectivity checking is enabled.
     */
    connectivity_check_get_enabled(): boolean
    /**
     * Get the URI that will be queried to determine if there is internet
     * connectivity.
     * @returns the connectivity URI in use
     */
    connectivity_check_get_uri(): string
    /**
     * Enable or disable connectivity checking.  Note that if a
     * connectivity checking URI has not been configured, this will not
     * have any effect.
     * @param enabled %TRUE to enable connectivity checking
     */
    connectivity_check_set_enabled(enabled: boolean): void
    /**
     * Call g_dbus_connection_call() on the current name owner with the specified
     * arguments. Most importantly, this invokes g_dbus_connection_call() with the
     * client's #GMainContext, so that the response is always in order with other
     * events D-Bus events. Of course, the call uses #GTask and will invoke the
     * callback on the current g_main_context_get_thread_default().
     * 
     * This API is merely a convenient wrapper for g_dbus_connection_call(). You can
     * also use g_dbus_connection_call() directly, with the same effect.
     * @param object_path path of remote object
     * @param interface_name D-Bus interface to invoke method on
     * @param method_name the name of the method to invoke
     * @param parameters a #GVariant tuple with parameters for the method     or %NULL if not passing parameters
     * @param reply_type the expected type of the reply (which will be a     tuple), or %NULL
     * @param timeout_msec the timeout in milliseconds, -1 to use the default     timeout or %G_MAXINT for no timeout
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request     is satisfied or %NULL if you don't care about the result of the     method invocation
     */
    dbus_call(object_path: string, interface_name: string, method_name: string, parameters: (GLib.Variant | null), reply_type: (GLib.VariantType | null), timeout_msec: number, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_dbus_call().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns the result #GVariant or %NULL on error.
     */
    dbus_call_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Like nm_client_dbus_call() but calls "Set" on the standard "org.freedesktop.DBus.Properties"
     * D-Bus interface.
     * @param object_path path of remote object
     * @param interface_name D-Bus interface for the property to set.
     * @param property_name the name of the property to set
     * @param value a #GVariant with the value to set.
     * @param timeout_msec the timeout in milliseconds, -1 to use the default     timeout or %G_MAXINT for no timeout
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request     is satisfied or %NULL if you don't care about the result of the     method invocation
     */
    dbus_set_property(object_path: string, interface_name: string, property_name: string, value: GLib.Variant, timeout_msec: number, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_dbus_set_property().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success or %FALSE on failure.
     */
    dbus_set_property_finish(result: Gio.AsyncResult): boolean
    /**
     * Deactivates an active #NMActiveConnection.
     * @param active the #NMActiveConnection to deactivate
     * @param cancellable a #GCancellable, or %NULL
     * @returns success or failure
     */
    deactivate_connection(active: ActiveConnection, cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously deactivates an active #NMActiveConnection.
     * @param active the #NMActiveConnection to deactivate
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the deactivation has completed
     */
    deactivate_connection_async(active: ActiveConnection, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_client_deactivate_connection_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns success or failure
     */
    deactivate_connection_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the #NMActiveConnection corresponding to a
     * currently-activating connection that is expected to become the new
     * #NMClient:primary-connection upon successful activation.
     * @returns the appropriate #NMActiveConnection, if any.
     */
    get_activating_connection(): ActiveConnection
    /**
     * Gets the active connections.
     * @returns a #GPtrArray  containing all the active #NMActiveConnections. The returned array is owned by the client and should not be modified.
     */
    get_active_connections(): ActiveConnection[]
    /**
     * Gets both real devices and device placeholders (eg, software devices which
     * do not currently exist, but could be created automatically by NetworkManager
     * if one of their NMDevice::ActivatableConnections was activated).  Use
     * nm_device_is_real() to determine whether each device is a real device or
     * a placeholder.
     * 
     * Use nm_device_get_type() or the NM_IS_DEVICE_XXXX() functions to determine
     * what kind of device each member of the returned array is, and then you may
     * use device-specific methods such as nm_device_ethernet_get_hw_address().
     * @returns a #GPtrArray containing all the #NMDevices.  The returned array is owned by the #NMClient object and should not be modified.
     */
    get_all_devices(): Device[]
    get_capabilities(): number[]
    /**
     * Gets all the active checkpoints.
     * @returns a #GPtrArray containing all the #NMCheckpoint.  The returned array is owned by the #NMClient object and should not be modified.
     */
    get_checkpoints(): Checkpoint[]
    /**
     * Returns the first matching %NMRemoteConnection matching a given `id`.
     * @param id the id of the remote connection
     * @returns the remote connection object on success, or %NULL if no  matching object was found. The connection is as received from D-Bus and might not validate according to nm_connection_verify().
     */
    get_connection_by_id(id: string): RemoteConnection
    /**
     * Returns the %NMRemoteConnection representing the connection at `path`.
     * @param path the D-Bus object path of the remote connection
     * @returns the remote connection object on success, or %NULL if the object was  not known The connection is as received from D-Bus and might not validate according to nm_connection_verify().
     */
    get_connection_by_path(path: string): RemoteConnection
    /**
     * Returns the %NMRemoteConnection identified by `uuid`.
     * @param uuid the UUID of the remote connection
     * @returns the remote connection object on success, or %NULL if the object was  not known The connection is as received from D-Bus and might not validate according to nm_connection_verify().
     */
    get_connection_by_uuid(uuid: string): RemoteConnection
    get_connections(): RemoteConnection[]
    /**
     * Gets the current network connectivity state. Contrast
     * nm_client_check_connectivity() and
     * nm_client_check_connectivity_async(), which re-check the
     * connectivity state first before returning any information.
     * @returns the current connectivity state
     */
    get_connectivity(): ConnectivityState
    get_context_busy_watcher<T = GObject.Object>(): T
    /**
     * Gets the %GDBusConnection of the instance. This can be either passed when
     * constructing the instance (as "dbus-connection" property), or it will be
     * automatically initialized during async/sync init.
     * @returns the D-Bus connection of the client, or %NULL if none is set.
     */
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_name_owner(): string
    /**
     * Gets a #NMDevice from a #NMClient.
     * @param iface the interface name to search for
     * @returns the #NMDevice for the given @iface or %NULL if none is found.
     */
    get_device_by_iface(iface: string): Device
    /**
     * Gets a #NMDevice from a #NMClient.
     * @param object_path the object path to search for
     * @returns the #NMDevice for the given @object_path or %NULL if none is found.
     */
    get_device_by_path(object_path: string): Device
    /**
     * Gets all the known network devices.  Use nm_device_get_type() or the
     * &lt;literal&gt;NM_IS_DEVICE_XXXX&lt;/literal&gt; functions to determine what kind of
     * device member of the returned array is, and then you may use device-specific
     * methods such as nm_device_ethernet_get_hw_address().
     * @returns a #GPtrArray containing all the #NMDevices.  The returned array is owned by the #NMClient object and should not be modified.
     */
    get_devices(): Device[]
    /**
     * Gets the current DNS configuration
     * @returns a #GPtrArray containing #NMDnsEntry elements or %NULL in case the value is not available.  The returned array is owned by the #NMClient object and should not be modified.
     */
    get_dns_configuration(): DnsEntry[]
    /**
     * Gets the current DNS processing mode.
     * @returns the DNS processing mode, or %NULL in case the   value is not available.
     */
    get_dns_mode(): string
    /**
     * Gets the current DNS resolv.conf manager.
     * @returns the resolv.conf manager or %NULL in case the   value is not available.
     */
    get_dns_rc_manager(): string
    get_instance_flags(): ClientInstanceFlags
    /**
     * Gets NetworkManager current logging level and domains.
     * @returns %TRUE on success, %FALSE otherwise
     */
    get_logging(): boolean
    /**
     * The #NMClient instance is permanently associated with the current
     * thread default #GMainContext, referenced the time when the instance
     * was created. To receive events, the user must iterate this context
     * and can use it to synchronize access to the client.
     * 
     * Note that even after #NMClient instance got destroyed, there might
     * still be pending sources registered in the context. That means, to fully
     * clean up, the user must continue iterating the context as long as
     * the nm_client_get_context_busy_watcher() object is alive.
     * @returns the #GMainContext of the client.
     */
    get_main_context(): GLib.MainContext
    get_metered(): Metered
    /**
     * Determines whether the daemon is running.
     * @returns %TRUE if the daemon is running
     */
    get_nm_running(): boolean
    get_object_by_path(dbus_path: string): Object
    /**
     * Requests the result of a specific permission, which indicates whether the
     * client can or cannot perform the action the permission represents
     * @param permission the permission for which to return the result, one of #NMClientPermission
     * @returns the permission's result, one of #NMClientPermissionResult
     */
    get_permission_result(permission: ClientPermission): ClientPermissionResult
    get_permissions_state(): Ternary
    /**
     * Gets the #NMActiveConnection corresponding to the primary active
     * network device.
     * 
     * In particular, when there is no VPN active, or the VPN does not
     * have the default route, this returns the active connection that has
     * the default route. If there is a VPN active with the default route,
     * then this function returns the active connection that contains the
     * route to the VPN endpoint.
     * 
     * If there is no default route, or the default route is over a
     * non-NetworkManager-recognized device, this will return %NULL.
     * @returns the appropriate #NMActiveConnection, if any
     */
    get_primary_connection(): ActiveConnection
    /**
     * Get radio flags.
     * @returns the #NMRadioFlags.
     */
    get_radio_flags(): RadioFlags
    /**
     * Tests whether the daemon is still in the process of activating
     * connections at startup.
     * @returns whether the daemon is still starting up
     */
    get_startup(): boolean
    /**
     * Gets the current daemon state.
     * @returns the current %NMState
     */
    get_state(): State
    /**
     * Gets NetworkManager version.
     * @returns string with the version (or %NULL if NetworkManager is not running)
     */
    get_version(): string
    /**
     * If available, the first element in the array is NM_VERSION which
     * encodes the daemon version as "(major &lt;&lt; 16 | minor &lt;&lt; 8 | micro)".
     * The following elements are a bitfield of %NMVersionInfoCapabilities
     * that indicate that the daemon supports a certain capability.
     * @returns the   list of capabilities reported by the server or %NULL   if the capabilities are unknown.
     */
    get_version_info(): number[]
    /**
     * Requests that the remote settings service load or reload the given files,
     * adding or updating the connections described within.
     * 
     * The changes to the indicated files will not yet be reflected in
     * `client'`s connections array when the function returns.
     * 
     * If all of the indicated files were successfully loaded, the
     * function will return %TRUE, and `failures` will be set to %NULL. If
     * NetworkManager tried to load the files, but some (or all) failed,
     * then `failures` will be set to a %NULL-terminated array of the
     * filenames that failed to load.
     * @param filenames %NULL-terminated array of filenames to load
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success. Warning: before libnm 1.22, the boolean return value was inconsistent.   That is made worse, because when running against certain server versions   before 1.20, the server would return wrong values for success/failure.   This means, if you use this function in libnm before 1.22, you are advised   to ignore the boolean return value and only look at @failures and @error.   With libnm &gt;= 1.22, the boolean return value corresponds to whether @error was   set. Note that even in the success case, you might have individual @failures.   With 1.22, the return value is consistent with nm_client_load_connections_finish().
     */
    load_connections(filenames: string[], cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Requests that the remote settings service asynchronously load or reload the
     * given files, adding or updating the connections described within.
     * 
     * See nm_client_load_connections() for more details.
     * @param filenames %NULL-terminated array of filenames to load
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the operation completes
     */
    load_connections_async(filenames: string[], cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of an nm_client_load_connections_async() call.
     * 
     * See nm_client_load_connections() for more details.
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success.   Note that even in the success case, you might have individual @failures.
     */
    load_connections_finish(result: Gio.AsyncResult): boolean
    /**
     * Whether networking is enabled or disabled.
     * @returns %TRUE if networking is enabled, %FALSE if networking is disabled
     */
    networking_get_enabled(): boolean
    /**
     * Enables or disables networking.  When networking is disabled, all controlled
     * interfaces are disconnected and deactivated.  When networking is enabled,
     * all controlled interfaces are available for activation.
     * @param enabled %TRUE to set networking enabled, %FALSE to set networking disabled
     * @returns %TRUE on success, %FALSE otherwise
     */
    networking_set_enabled(enabled: boolean): boolean
    /**
     * Reload NetworkManager's configuration and perform certain updates, like
     * flushing caches or rewriting external state to disk. This is similar to
     * sending SIGHUP to NetworkManager but it allows for more fine-grained control
     * over what to reload (see `flags)`. It also allows non-root access via
     * PolicyKit and contrary to signals it is synchronous.
     * @param flags flags indicating what to reload.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the add operation completes
     */
    reload(flags: ManagerReloadFlags, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Requests that the remote settings service reload all connection
     * files from disk, adding, updating, and removing connections until
     * the in-memory state matches the on-disk state.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on failure
     */
    reload_connections(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Requests that the remote settings service begin reloading all connection
     * files from disk, adding, updating, and removing connections until the
     * in-memory state matches the on-disk state.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the reload operation completes
     */
    reload_connections_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of an nm_client_reload_connections_async() call.
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on failure
     */
    reload_connections_finish(result: Gio.AsyncResult): boolean
    /**
     * Gets the result of a call to nm_client_reload().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success or %FALSE on failure.
     */
    reload_finish(result: Gio.AsyncResult): boolean
    /**
     * Requests that the machine's persistent hostname be set to the specified value
     * or cleared.
     * @param hostname the new persistent hostname to set, or %NULL to   clear any existing persistent hostname
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE if the request was successful, %FALSE if it failed
     */
    save_hostname(hostname?: (string | null), cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Requests that the machine's persistent hostname be set to the specified value
     * or cleared.
     * @param hostname the new persistent hostname to set, or %NULL to   clear any existing persistent hostname
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the operation completes
     */
    save_hostname_async(hostname?: (string | null), cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of an nm_client_save_hostname_async() call.
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE if the request was successful, %FALSE if it failed
     */
    save_hostname_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets NetworkManager logging level and/or domains.
     * @param level logging level to set (%NULL or an empty string for no change)
     * @param domains logging domains to set. The string should be a list of log   domains separated by ",". (%NULL or an empty string for no change)
     * @returns %TRUE on success, %FALSE otherwise
     */
    set_logging(level?: (string | null), domains?: (string | null)): boolean
    /**
     * The way to stop #NMClient is by unrefing it. That will cancel all
     * internally pending async operations. However, as async operations in
     * NMClient use GTask, hence they cannot complete right away. Instead,
     * their (internal) result callback still needs to be dispatched by iterating
     * the client's main context.
     * 
     * You thus cannot stop iterating the client's main context until
     * everything is wrapped up. nm_client_get_context_busy_watcher()
     * helps to watch how long that will be.
     * 
     * This function automates that waiting. Like all glib async operations
     * this honors the current g_main_context_get_thread_default().
     * 
     * In any case, to complete the shutdown, nm_client_get_main_context()
     * must be iterated. If the current g_main_context_get_thread_default() is
     * the same as nm_client_get_main_context(), then `integrate_maincontext`
     * is ignored. In that case, the caller is required to iterate the context
     * for shutdown to complete. Otherwise, if g_main_context_get_thread_default()
     * differs from nm_client_get_main_context() and `integrate_maincontext`
     * is %FALSE, the caller must make sure that both contexts are iterated
     * until completion. Otherwise, if `integrate_maincontext` is %TRUE, then
     * nm_client_get_main_context() will be integrated in g_main_context_get_thread_default().
     * This means, the caller gives nm_client_get_main_context() up until the waiting
     * completes, the function will acquire the context and hook it into
     * g_main_context_get_thread_default().
     * It is a bug to request `integrate_maincontext` while having nm_client_get_main_context()
     * acquired or iterated otherwise because a context can only be acquired once
     * at a time.
     * 
     * Shutdown can only complete after all references to `client` were released.
     * 
     * It is possible to call this function multiple times for the same client.
     * But note that with `integrate_maincontext` the client's context is acquired,
     * which can only be done once at a time.
     * 
     * It is permissible to start waiting before the objects is fully initialized.
     * 
     * The function really allows two separate things. To get a notification (callback) when
     * shutdown is complete, and to integrate the client's context in another context.
     * The latter case is useful if the client has a separate context and you hand it
     * over to another GMainContext to wrap up.
     * 
     * The main use is to have a NMClient and a separate GMainContext on a worker
     * thread. When being done, you can hand over the cleanup of the context
     * to g_main_context_default(), assuming that the main thread iterates
     * the default context. In that case, you don't need to care about passing
     * a callback to know when shutdown completed.
     * @param integrate_maincontext whether to hook the client's maincontext   in the current thread default. Otherwise, you must ensure   that the client's maincontext gets iterated so that it can complete.   By integrating the maincontext in the current thread default, you   may instead only iterate the latter.
     * @param cancellable the #GCancellable to abort the shutdown.
     * @param callback a #GAsyncReadyCallback to call when the request   is satisfied or %NULL if you don't care about the result of the   method invocation.
     */
    wait_shutdown(integrate_maincontext: boolean, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Determines whether WiMAX is enabled.
     * @returns %TRUE if WiMAX is enabled
     */
    wimax_get_enabled(): boolean
    /**
     * Determines whether the WiMAX hardware is enabled.
     * @returns %TRUE if the WiMAX hardware is enabled
     */
    wimax_hardware_get_enabled(): boolean
    /**
     * Enables or disables WiMAX devices.
     * @param enabled %TRUE to enable WiMAX
     */
    wimax_set_enabled(enabled: boolean): void
    /**
     * Determines whether the wireless is enabled.
     * @returns %TRUE if wireless is enabled
     */
    wireless_get_enabled(): boolean
    /**
     * Determines whether the wireless hardware is enabled.
     * @returns %TRUE if the wireless hardware is enabled
     */
    wireless_hardware_get_enabled(): boolean
    /**
     * Enables or disables wireless devices.
     * @param enabled %TRUE to enable wireless
     */
    wireless_set_enabled(enabled: boolean): void
    /**
     * Determines whether WWAN is enabled.
     * @returns %TRUE if WWAN is enabled
     */
    wwan_get_enabled(): boolean
    /**
     * Determines whether the WWAN hardware is enabled.
     * @returns %TRUE if the WWAN hardware is enabled
     */
    wwan_hardware_get_enabled(): boolean
    /**
     * Enables or disables WWAN devices.
     * @param enabled %TRUE to enable WWAN
     */
    wwan_set_enabled(enabled: boolean): void
}

module Device {

    // Signal callback interfaces

    interface StateChanged {
        (new_state: number, old_state: number, reason: number): void
    }


    // Constructor properties interface

}

abstract class Device extends Object {

    // Own properties of NM-1.0.Device

    /**
     * The #NMActiveConnection object that "owns" this device during activation.
     */
    readonly active_connection: ActiveConnection
    /**
     * The #NMActiveConnection object that "owns" this device during activation.
     */
    readonly activeConnection: ActiveConnection
    /**
     * Whether the device can auto-activate a connection.
     * 
     * The property setter is a synchronous D-Bus call. This is deprecated since 1.22.
     */
    autoconnect: boolean
    /**
     * The available connections of the device
     */
    readonly available_connections: RemoteConnection[]
    /**
     * The available connections of the device
     */
    readonly availableConnections: RemoteConnection[]
    /**
     * The capabilities of the device.
     */
    readonly capabilities: DeviceCapabilities
    /**
     * The numeric type of the device.
     */
    readonly device_type: DeviceType
    /**
     * The numeric type of the device.
     */
    readonly deviceType: DeviceType
    /**
     * The IPv4 #NMDhcpConfig of the device.
     */
    readonly dhcp4_config: DhcpConfig
    /**
     * The IPv4 #NMDhcpConfig of the device.
     */
    readonly dhcp4Config: DhcpConfig
    /**
     * The IPv6 #NMDhcpConfig of the device.
     */
    readonly dhcp6_config: DhcpConfig
    /**
     * The IPv6 #NMDhcpConfig of the device.
     */
    readonly dhcp6Config: DhcpConfig
    /**
     * The driver of the device.
     */
    readonly driver: string
    /**
     * The version of the device driver.
     */
    readonly driver_version: string
    /**
     * The version of the device driver.
     */
    readonly driverVersion: string
    /**
     * When %TRUE indicates the device is likely missing firmware required
     * for its operation.
     */
    readonly firmware_missing: boolean
    /**
     * When %TRUE indicates the device is likely missing firmware required
     * for its operation.
     */
    readonly firmwareMissing: boolean
    /**
     * The firmware version of the device.
     */
    readonly firmware_version: string
    /**
     * The firmware version of the device.
     */
    readonly firmwareVersion: string
    /**
     * The hardware address of the device.
     */
    readonly hw_address: string
    /**
     * The hardware address of the device.
     */
    readonly hwAddress: string
    /**
     * The interface of the device.
     */
    readonly "interface": string
    /**
     * The interface flags.
     */
    readonly interface_flags: number
    /**
     * The interface flags.
     */
    readonly interfaceFlags: number
    /**
     * The IP interface of the device which should be used for all IP-related
     * operations like addressing and routing.
     */
    readonly ip_interface: string
    /**
     * The IP interface of the device which should be used for all IP-related
     * operations like addressing and routing.
     */
    readonly ipInterface: string
    /**
     * The #NMIP4Config of the device.
     */
    readonly ip4_config: IPConfig
    /**
     * The #NMIP4Config of the device.
     */
    readonly ip4Config: IPConfig
    /**
     * The IPv4 connectivity state of the device.
     */
    readonly ip4_connectivity: ConnectivityState
    /**
     * The IPv4 connectivity state of the device.
     */
    readonly ip4Connectivity: ConnectivityState
    /**
     * The IPv6 #NMIPConfig of the device.
     */
    readonly ip6_config: IPConfig
    /**
     * The IPv6 #NMIPConfig of the device.
     */
    readonly ip6Config: IPConfig
    /**
     * The IPv6 connectivity state of the device.
     */
    readonly ip6_connectivity: ConnectivityState
    /**
     * The IPv6 connectivity state of the device.
     */
    readonly ip6Connectivity: ConnectivityState
    /**
     * The LLDP neighbors.
     */
    readonly lldp_neighbors: any[]
    /**
     * The LLDP neighbors.
     */
    readonly lldpNeighbors: any[]
    /**
     * Whether the device is managed by NetworkManager.
     */
    readonly managed: boolean
    /**
     * Whether the device is metered.
     */
    readonly metered: number
    /**
     * The MTU of the device.
     */
    readonly mtu: number
    /**
     * When %TRUE indicates that the NetworkManager plugin for the device
     * is not installed.
     */
    readonly nm_plugin_missing: boolean
    /**
     * When %TRUE indicates that the NetworkManager plugin for the device
     * is not installed.
     */
    readonly nmPluginMissing: boolean
    /**
     * The device path as exposed by the udev property ID_PATH.
     * 
     * The string is backslash escaped (C escaping) for invalid
     * characters. The escaping can be reverted with g_strcompress(),
     * however the result may not be valid UTF-8.
     */
    readonly path: string
    /**
     * The physical port ID of the device. (See
     * nm_device_get_physical_port_id().)
     */
    readonly physical_port_id: string
    /**
     * The physical port ID of the device. (See
     * nm_device_get_physical_port_id().)
     */
    readonly physicalPortId: string
    /**
     * The port devices of the controller device. For devices that cannot be
     * controllers this is likely to be always empty.
     */
    readonly ports: any[]
    /**
     * The product string of the device.
     */
    readonly product: string
    /**
     * Whether the device is real or is a placeholder device that could
     * be created automatically by NetworkManager if one of its
     * #NMDevice:available-connections was activated.
     */
    readonly real: boolean
    /**
     * The state of the device.
     */
    readonly state: DeviceState
    /**
     * The reason for the device state.
     */
    readonly state_reason: number
    /**
     * The reason for the device state.
     */
    readonly stateReason: number
    /**
     * An operating-system specific device hardware identifier; this is not
     * unique to a specific hardware device across reboots or hotplugs.  It
     * is an opaque string which for some device types (Bluetooth, Modem)
     * contains an identifier provided by the underlying hardware service daemon
     * such as Bluez or ModemManager, and clients can use this property to
     * request more information about the device from those services.
     */
    readonly udi: string
    /**
     * The vendor string of the device.
     */
    readonly vendor: string

    // Owm methods of NM-1.0.Device

    /**
     * Generates a list of short-ish unique presentation names for the
     * devices in `devices`.
     * @param devices an array of #NMDevice
     */
    static disambiguate_names(devices: Device[]): string[]

    // Owm methods of NM-1.0.Device

    /**
     * Validates a given connection for a given #NMDevice object and returns
     * whether the connection may be activated with the device. For example if
     * `device` is a Wi-Fi device that supports only WEP encryption, the connection
     * will only be valid if it is a Wi-Fi connection which describes a WEP or open
     * network, and will not be valid if it describes a WPA network, or if it is
     * an Ethernet, Bluetooth, WWAN, etc connection that is incompatible with the
     * device.
     * 
     * This function does the same as nm_device_connection_valid(), i.e. checking
     * compatibility of the given device and connection. But, in addition, it sets
     * GError when FALSE is returned.
     * @param connection an #NMConnection to validate against @device
     * @returns %TRUE if the connection may be activated with this device, %FALSE if is incompatible with the device's capabilities and characteristics.
     */
    connection_compatible(connection: Connection): boolean
    /**
     * Validates a given connection for a given #NMDevice object and returns
     * whether the connection may be activated with the device. For example if
     * `device` is a Wi-Fi device that supports only WEP encryption, the connection
     * will only be valid if it is a Wi-Fi connection which describes a WEP or open
     * network, and will not be valid if it describes a WPA network, or if it is
     * an Ethernet, Bluetooth, WWAN, etc connection that is incompatible with the
     * device.
     * @param connection an #NMConnection to validate against @device
     * @returns %TRUE if the connection may be activated with this device, %FALSE if is incompatible with the device's capabilities and characteristics.
     */
    connection_valid(connection: Connection): boolean
    /**
     * Deletes the software device. Hardware devices can't be deleted.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    delete(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously begins deleting the software device. Hardware devices can't
     * be deleted.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when delete operation completes
     */
    delete_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_device_delete_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Disconnects the device if currently connected, and prevents the device from
     * automatically connecting to networks until the next manual network connection
     * request.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    disconnect(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously begins disconnecting the device if currently connected, and
     * prevents the device from automatically connecting to networks until the next
     * manual network connection request.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the disconnect operation completes
     */
    disconnect_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_device_disconnect_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    disconnect_finish(result: Gio.AsyncResult): boolean
    /**
     * Filters a given array of connections for a given #NMDevice object and returns
     * connections which may be activated with the device. For example if `device`
     * is a Wi-Fi device that supports only WEP encryption, the returned array will
     * contain any Wi-Fi connections in `connections` that allow connection to
     * unencrypted or WEP-enabled SSIDs.  The returned array will not contain
     * Ethernet, Bluetooth, Wi-Fi WPA connections, or any other connection that is
     * incompatible with the device. To get the full list of connections see
     * nm_client_get_connections().
     * @param connections an array of #NMConnections to filter
     * @returns an array of #NMConnections that could be activated with the given @device.  The array should be freed with g_ptr_array_unref() when it is no longer required. WARNING: the transfer annotation for this function may not work correctly   with bindings. See https://gitlab.gnome.org/GNOME/gobject-introspection/-/issues/305.   You can filter the list yourself with nm_device_connection_valid().
     */
    filter_connections(connections: Connection[]): Connection[]
    /**
     * Gets the #NMActiveConnection object which owns this device during activation.
     * @returns the #NMActiveConnection or %NULL if the device is not part of an active connection
     */
    get_active_connection(): ActiveConnection
    /**
     * Fetch the currently applied connection on the device.
     * @param flags the flags argument. See #NMDeviceReapplyFlags.
     * @param cancellable a #GCancellable, or %NULL
     * @returns a %NMConnection with the currently applied settings   or %NULL on error. The connection is as received from D-Bus and might not validate according to nm_connection_verify().
     */
    get_applied_connection(flags: number, cancellable?: (Gio.Cancellable | null)): Connection
    /**
     * Asynchronously begins and gets the currently applied connection.
     * @param flags the flags argument. See #NMDeviceReapplyFlags.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the reapply operation completes
     */
    get_applied_connection_async(flags: number, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_device_get_applied_connection_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns a currently applied %NMConnection or %NULL in case   of error. The connection is as received from D-Bus and might not validate according to nm_connection_verify().
     */
    get_applied_connection_finish(result: Gio.AsyncResult): Connection
    /**
     * Whether the #NMDevice can be autoconnected.
     * @returns %TRUE if the device is allowed to be autoconnected
     */
    get_autoconnect(): boolean
    /**
     * Gets the #NMRemoteConnections currently known to the daemon that could
     * be activated on `device`.
     * @returns the #GPtrArray containing #NMRemoteConnections. This is the internal copy used by the connection, and must not be modified.
     */
    get_available_connections(): RemoteConnection[]
    /**
     * Gets the device' capabilities.
     * @returns the capabilities
     */
    get_capabilities(): DeviceCapabilities
    /**
     * The connectivity state of the device for given address family.
     * Supported address families are %AF_INET for IPv4, %AF_INET6
     * for IPv6 or %AF_UNSPEC for any.
     * @param addr_family network address family
     * @returns the current connectivity state
     */
    get_connectivity(addr_family: number): ConnectivityState
    /**
     * Gets a description of `device,` based on its vendor and product names.
     * @returns a description of @device. If either the vendor or the   product name is unknown, this returns the interface name.
     */
    get_description(): string
    /**
     * Returns the numeric type of the #NMDevice, ie Ethernet, Wi-Fi, etc.
     * @returns the device type
     */
    get_device_type(): DeviceType
    /**
     * Gets the current IPv4 #NMDhcpConfig associated with the #NMDevice.
     * 
     * You can alternatively use nm_active_connection_get_dhcp4_config(), which also
     * works with VPN connections.
     * @returns the IPv4 #NMDhcpConfig, or %NULL if the device is not activated or not using DHCP.
     */
    get_dhcp4_config(): DhcpConfig
    /**
     * Gets the current IPv6 #NMDhcpConfig associated with the #NMDevice.
     * 
     * You can alternatively use nm_active_connection_get_dhcp6_config(), which also
     * works with VPN connections.
     * @returns the IPv6 #NMDhcpConfig, or %NULL if the device is not activated or not using DHCPv6.
     */
    get_dhcp6_config(): DhcpConfig
    /**
     * Gets the driver of the #NMDevice.
     * @returns the driver of the device. This is the internal string used by the device, and must not be modified.
     */
    get_driver(): string
    /**
     * Gets the driver version of the #NMDevice.
     * @returns the version of the device driver. This is the internal string used by the device, and must not be modified.
     */
    get_driver_version(): string
    /**
     * Indicates that firmware required for the device's operation is likely
     * to be missing.
     * @returns %TRUE if firmware required for the device's operation is likely to be missing.
     */
    get_firmware_missing(): boolean
    /**
     * Gets the firmware version of the #NMDevice.
     * @returns the firmware version of the device. This is the internal string used by the device, and must not be modified.
     */
    get_firmware_version(): string
    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    get_hw_address(): string
    /**
     * Gets the interface name of the #NMDevice.
     * @returns the interface of the device. This is the internal string used by the device, and must not be modified.
     */
    get_iface(): string
    /**
     * Gets the interface flags of the device.
     * @returns the flags
     */
    get_interface_flags(): DeviceInterfaceFlags
    /**
     * Gets the current IPv4 #NMIPConfig associated with the #NMDevice.
     * 
     * You can alternatively use nm_active_connection_get_ip4_config(), which also
     * works with VPN connections.
     * @returns the IPv4 #NMIPConfig, or %NULL if the device is not activated.
     */
    get_ip4_config(): IPConfig
    /**
     * Gets the current IPv6 #NMIPConfig associated with the #NMDevice.
     * 
     * You can alternatively use nm_active_connection_get_ip6_config(), which also
     * works with VPN connections.
     * @returns the IPv6 #NMIPConfig or %NULL if the device is not activated.
     */
    get_ip6_config(): IPConfig
    /**
     * Gets the IP interface name of the #NMDevice over which IP traffic flows
     * when the device is in the ACTIVATED state.
     * @returns the IP traffic interface of the device. This is the internal string used by the device, and must not be modified.
     */
    get_ip_iface(): string
    /**
     * Gets the list of neighbors discovered through LLDP.
     * @returns the #GPtrArray containing #NMLldpNeighbor&lt;!-- --&gt;s. This is the internal copy used by the device and must not be modified. The library never modifies the returned array and thus it is safe for callers to reference and keep using it.
     */
    get_lldp_neighbors(): LldpNeighbor[]
    /**
     * Whether the #NMDevice is managed by NetworkManager.
     * @returns %TRUE if the device is managed by NetworkManager
     */
    get_managed(): boolean
    /**
     * Gets the metered setting of a #NMDevice.
     * @returns the metered setting.
     */
    get_metered(): Metered
    /**
     * Gets the  MTU of the #NMDevice.
     * @returns the MTU of the device in bytes.
     */
    get_mtu(): number
    /**
     * Indicates that the NetworkManager plugin for the device is not installed.
     * @returns %TRUE if the device plugin not installed.
     */
    get_nm_plugin_missing(): boolean
    /**
     * Gets the path of the #NMDevice as exposed by the udev property ID_PATH.
     * @returns the path of the device. The string is backslash escaped (C escaping) for invalid characters. The escaping can be reverted with g_strcompress(), however the result may not be valid UTF-8.
     */
    get_path(): string
    /**
     * Gets the physical port ID of the #NMDevice. If non-%NULL, this is
     * an opaque string that can be used to recognize when
     * seemingly-unrelated #NMDevices are actually just different virtual
     * ports on a single physical port. (Eg, NPAR / SR-IOV.)
     * @returns the physical port ID of the device, or %NULL if the port   ID is unknown. This is the internal string used by the device and   must not be modified.
     */
    get_physical_port_id(): string
    /**
     * Gets the devices currently set as port of `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device and must not be modified.
     */
    get_ports(): Device[]
    /**
     * Gets the product string of the #NMDevice.
     * @returns the product name of the device. This is the internal string used by the device, and must not be modified. The string is backslash escaped (C escaping) for invalid characters. The escaping can be reverted with g_strcompress(), however the result may not be valid UTF-8.
     */
    get_product(): string
    /**
     * Gets the (primary) #NMSetting subtype associated with connections
     * that can be used on `device`.
     * @returns @device's associated #NMSetting type
     */
    get_setting_type(): GObject.GType
    /**
     * Gets the current #NMDevice state.
     * @returns the current device state
     */
    get_state(): DeviceState
    /**
     * Gets the reason for entering the current #NMDevice state.
     * @returns the reason for entering the current device state
     */
    get_state_reason(): DeviceStateReason
    /**
     * Gets a (non-localized) description of the type of device that
     * `device` is.
     * @returns the type description of the device. This is the internal string used by the device, and must not be modified.
     */
    get_type_description(): string
    /**
     * Gets the Unique Device Identifier of the #NMDevice.
     * @returns the Unique Device Identifier of the device.  This identifier may be used to gather more information about the device from various operating system services like udev or sysfs.
     */
    get_udi(): string
    /**
     * Gets the vendor string of the #NMDevice.
     * @returns the vendor name of the device. This is the internal string used by the device, and must not be modified. The string is backslash escaped (C escaping) for invalid characters. The escaping can be reverted with g_strcompress(), however the result may not be valid UTF-8.
     */
    get_vendor(): string
    is_real(): boolean
    /**
     * Whether the device is a software device.
     * @returns %TRUE if @device is a software device, %FALSE if it is a hardware device.
     */
    is_software(): boolean
    /**
     * Attempts to update device with changes to the currently active connection
     * made since it was last applied.
     * @param connection the #NMConnection to replace the applied   settings with or %NULL to reuse existing
     * @param version_id zero or the expected version id of the applied connection.   If specified and the version id mismatches, the call fails without   modification. This allows to catch concurrent accesses.
     * @param flags always set this to zero
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    reapply(connection: (Connection | null), version_id: number, flags: number, cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously begins an attempt to update device with changes to the
     * currently active connection made since it was last applied.
     * @param connection the #NMConnection to replace the applied   settings with or %NULL to reuse existing
     * @param version_id zero or the expected version id of the applied   connection. If specified and the version id mismatches, the call   fails without modification. This allows to catch concurrent   accesses.
     * @param flags always set this to zero
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the reapply operation completes
     */
    reapply_async(connection: (Connection | null), version_id: number, flags: number, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_device_reapply_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    reapply_finish(result: Gio.AsyncResult): boolean
    /**
     * Enables or disables automatic activation of the #NMDevice.
     * @param autoconnect %TRUE to enable autoconnecting
     */
    set_autoconnect(autoconnect: boolean): void
    /**
     * Enables or disables management of  #NMDevice by NetworkManager.
     * @param managed %TRUE to make the device managed by NetworkManager.
     */
    set_managed(managed: boolean): void
}

module Device6Lowpan {

    // Constructor properties interface

}

class Device6Lowpan extends Device {

    // Own properties of NM-1.0.Device6Lowpan

    /**
     * The devices's parent device.
     */
    readonly parent: Device

    // Owm methods of NM-1.0.Device6Lowpan

    get_parent(): Device
}

module DeviceAdsl {

    // Constructor properties interface

}

class DeviceAdsl extends Device {

    // Own properties of NM-1.0.DeviceAdsl

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean

    // Owm methods of NM-1.0.DeviceAdsl

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
}

module DeviceBond {

    // Constructor properties interface

}

class DeviceBond extends Device {

    // Own properties of NM-1.0.DeviceBond

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The devices enslaved to the bond device.
     */
    readonly slaves: Device[]

    // Owm methods of NM-1.0.DeviceBond

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    get_slaves(): Device[]
}

module DeviceBridge {

    // Constructor properties interface

}

class DeviceBridge extends Device {

    // Own properties of NM-1.0.DeviceBridge

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The devices enslaved to the bridge device.
     */
    readonly slaves: Device[]

    // Owm methods of NM-1.0.DeviceBridge

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    get_slaves(): Device[]
}

module DeviceBt {

    // Constructor properties interface

}

class DeviceBt extends Device {

    // Own properties of NM-1.0.DeviceBt

    /**
     * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
     */
    readonly bt_capabilities: BluetoothCapabilities
    /**
     * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
     */
    readonly btCapabilities: BluetoothCapabilities
    /**
     * The name of the bluetooth device.
     */
    readonly name: string

    // Owm methods of NM-1.0.DeviceBt

    /**
     * Returns the Bluetooth device's usable capabilities.
     * @returns a combination of #NMBluetoothCapabilities
     */
    get_capabilities(): BluetoothCapabilities
    /**
     * Gets the name of the #NMDeviceBt.
     * @returns the name of the device
     */
    get_name(): string
}

module DeviceDummy {

    // Constructor properties interface

}

class DeviceDummy extends Device {
}

module DeviceEthernet {

    // Constructor properties interface

}

class DeviceEthernet extends Device {

    // Own properties of NM-1.0.DeviceEthernet

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The permanent hardware (MAC) address of the device.
     */
    readonly perm_hw_address: string
    /**
     * The permanent hardware (MAC) address of the device.
     */
    readonly permHwAddress: string
    /**
     * Identifies subchannels of this network device used for
     * communication with z/VM or s390 host.
     */
    readonly s390_subchannels: string[]
    /**
     * Identifies subchannels of this network device used for
     * communication with z/VM or s390 host.
     */
    readonly s390Subchannels: string[]
    /**
     * The speed of the device.
     */
    readonly speed: number

    // Owm methods of NM-1.0.DeviceEthernet

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
    /**
     * Gets the permanent hardware (MAC) address of the #NMDeviceEthernet
     * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
     */
    get_permanent_hw_address(): string
    /**
     * Return the list of s390 subchannels if the device supports them.
     * @returns array of strings, each specifying   one subchannel the s390 device uses to communicate to the host.
     */
    get_s390_subchannels(): string[]
    /**
     * Gets the speed of the #NMDeviceEthernet in Mbit/s.
     * @returns the speed of the device in Mbit/s
     */
    get_speed(): number
}

module DeviceGeneric {

    // Constructor properties interface

}

class DeviceGeneric extends Device {

    // Own properties of NM-1.0.DeviceGeneric

    /**
     * A description of the specific type of device this is, or %NULL
     * if not known.
     */
    readonly type_description: string
    /**
     * A description of the specific type of device this is, or %NULL
     * if not known.
     */
    readonly typeDescription: string
}

module DeviceIPTunnel {

    // Constructor properties interface

}

class DeviceIPTunnel extends Device {

    // Own properties of NM-1.0.DeviceIPTunnel

    /**
     * How many additional levels of encapsulation are permitted to
     * be prepended to packets. This property applies only to IPv6
     * tunnels.
     */
    readonly encapsulation_limit: number
    /**
     * How many additional levels of encapsulation are permitted to
     * be prepended to packets. This property applies only to IPv6
     * tunnels.
     */
    readonly encapsulationLimit: number
    /**
     * Tunnel flags.
     */
    readonly flags: number
    /**
     * The flow label to assign to tunnel packets. This property
     * applies only to IPv6 tunnels.
     */
    readonly flow_label: number
    /**
     * The flow label to assign to tunnel packets. This property
     * applies only to IPv6 tunnels.
     */
    readonly flowLabel: number
    /**
     * The key used for tunneled input packets, if applicable.
     */
    readonly input_key: string
    /**
     * The key used for tunneled input packets, if applicable.
     */
    readonly inputKey: string
    /**
     * The local endpoint of the tunnel.
     */
    readonly local: string
    /**
     * The tunneling mode of the device.
     */
    readonly mode: number
    /**
     * The key used for tunneled output packets, if applicable.
     */
    readonly output_key: string
    /**
     * The key used for tunneled output packets, if applicable.
     */
    readonly outputKey: string
    /**
     * The devices's parent device.
     */
    readonly parent: Device
    /**
     * Whether path MTU discovery is enabled on this tunnel.
     */
    readonly path_mtu_discovery: boolean
    /**
     * Whether path MTU discovery is enabled on this tunnel.
     */
    readonly pathMtuDiscovery: boolean
    /**
     * The remote endpoint of the tunnel.
     */
    readonly remote: string
    /**
     * The type of service (IPv4) or traffic class (IPv6) assigned to
     * tunneled packets.
     */
    readonly tos: number
    /**
     * The TTL assigned to tunneled packets. 0 is a special value
     *  meaning that packets inherit the TTL value
     */
    readonly ttl: number

    // Owm methods of NM-1.0.DeviceIPTunnel

    get_encapsulation_limit(): number
    get_flags(): IPTunnelFlags
    get_flow_label(): number
    get_input_key(): string
    get_local(): string
    get_mode(): IPTunnelMode
    get_output_key(): string
    get_parent(): Device
    get_path_mtu_discovery(): boolean
    get_remote(): string
    get_tos(): number
    get_ttl(): number
}

module DeviceInfiniband {

    // Constructor properties interface

}

class DeviceInfiniband extends Device {

    // Own properties of NM-1.0.DeviceInfiniband

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean

    // Owm methods of NM-1.0.DeviceInfiniband

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
}

module DeviceLoopback {

    // Constructor properties interface

}

class DeviceLoopback extends Device {
}

module DeviceMacsec {

    // Constructor properties interface

}

class DeviceMacsec extends Device {

    // Own properties of NM-1.0.DeviceMacsec

    /**
     * The set of cryptographic algorithms in use.
     */
    readonly cipher_suite: number
    /**
     * The set of cryptographic algorithms in use.
     */
    readonly cipherSuite: number
    /**
     * The value of the Association Number (0..3) for the Security
     * Association in use.
     */
    readonly encoding_sa: number
    /**
     * The value of the Association Number (0..3) for the Security
     * Association in use.
     */
    readonly encodingSa: number
    /**
     * Whether encryption of transmitted frames is enabled.
     */
    readonly encrypt: boolean
    /**
     * Whether the ES (End station) bit is enabled in SecTAG for
     * transmitted frames.
     */
    readonly es: boolean
    /**
     * The length of ICV (Integrity Check Value).
     */
    readonly icv_length: number
    /**
     * The length of ICV (Integrity Check Value).
     */
    readonly icvLength: number
    /**
     * Whether the SCI is always included in SecTAG for transmitted
     * frames.
     */
    readonly include_sci: boolean
    /**
     * Whether the SCI is always included in SecTAG for transmitted
     * frames.
     */
    readonly includeSci: boolean
    /**
     * The devices's parent device.
     */
    readonly parent: Device
    /**
     * Whether protection of transmitted frames is enabled.
     */
    readonly protect: boolean
    /**
     * Whether replay protection is enabled.
     */
    readonly replay_protect: boolean
    /**
     * Whether replay protection is enabled.
     */
    readonly replayProtect: boolean
    /**
     * Whether the SCB (Single Copy Broadcast) bit is enabled in
     * SecTAG for transmitted frames.
     */
    readonly scb: boolean
    /**
     * The Secure Channel Identifier in use.
     */
    readonly sci: number
    /**
     * The validation mode for incoming packets (strict, check,
     * disabled).
     */
    readonly validation: string
    /**
     * The size of the replay window.
     */
    readonly window: number

    // Owm methods of NM-1.0.DeviceMacsec

    /**
     * Gets the set of cryptographic algorithms in use
     * @returns the set of cryptographic algorithms in use
     */
    get_cipher_suite(): number
    /**
     * Gets the value of the Association Number (0..3) for the Security
     * Association in use.
     * @returns the current Security Association
     */
    get_encoding_sa(): number
    /**
     * Gets whether encryption of transmitted frames is enabled
     * @returns whether encryption is enabled
     */
    get_encrypt(): boolean
    /**
     * Gets whether the ES (End station) bit is enabled in SecTAG for
     * transmitted frames
     * @returns whether the ES (End station) bit is enabled
     */
    get_es(): boolean
    /**
     * Gets the length of ICV (Integrity Check Value)
     * @returns the length of ICV
     */
    get_icv_length(): number
    /**
     * Gets whether the SCI is always included in SecTAG for transmitted
     * frames
     * @returns whether the SCI is always included
     */
    get_include_sci(): boolean
    get_parent(): Device
    /**
     * Gets whether protection of transmitted frames is enabled
     * @returns whether protection is enabled
     */
    get_protect(): boolean
    /**
     * Gets whether replay protection is enabled
     * @returns whether replay protection is enabled
     */
    get_replay_protect(): boolean
    /**
     * Gets whether the SCB (Single Copy Broadcast) bit is enabled in
     * SecTAG for transmitted frames
     * @returns whether the SCB (Single Copy Broadcast) bit is enabled
     */
    get_scb(): boolean
    /**
     * Gets the Secure Channel Identifier in use
     * @returns the SCI
     */
    get_sci(): number
    /**
     * Gets the validation mode for incoming packets (strict, check,
     * disabled)
     * @returns the validation mode
     */
    get_validation(): string
    /**
     * Gets the size of the replay window
     * @returns size of the replay window
     */
    get_window(): number
}

module DeviceMacvlan {

    // Constructor properties interface

}

class DeviceMacvlan extends Device {

    // Own properties of NM-1.0.DeviceMacvlan

    /**
     * The MACVLAN mode.
     */
    readonly mode: string
    /**
     * Whether the device has the no-promiscuos flag.
     */
    readonly no_promisc: boolean
    /**
     * Whether the device has the no-promiscuos flag.
     */
    readonly noPromisc: boolean
    /**
     * The devices's parent device.
     */
    readonly parent: Device
    /**
     * Whether the device is a MACVTAP.
     */
    readonly tap: boolean

    // Owm methods of NM-1.0.DeviceMacvlan

    /**
     * Gets the MACVLAN mode of the device.
     * @returns the MACVLAN mode. This is the internal string used by the device, and must not be modified.
     */
    get_mode(): string
    /**
     * Gets the no-promiscuous flag of the device.
     * @returns the no-promiscuous flag of the device.
     */
    get_no_promisc(): boolean
    get_parent(): Device
    /**
     * Gets the device type (MACVLAN or MACVTAP).
     * @returns %TRUE if the device is a MACVTAP, %FALSE if it is a MACVLAN.
     */
    get_tap(): boolean
}

module DeviceModem {

    // Constructor properties interface

}

class DeviceModem extends Device {

    // Own properties of NM-1.0.DeviceModem

    readonly apn: string
    /**
     * The generic family of access technologies the modem currently supports
     * without a firmware reload or reinitialization.
     */
    readonly current_capabilities: DeviceModemCapabilities
    /**
     * The generic family of access technologies the modem currently supports
     * without a firmware reload or reinitialization.
     */
    readonly currentCapabilities: DeviceModemCapabilities
    readonly device_id: string
    readonly deviceId: string
    /**
     * The generic family of access technologies the modem supports.  Not all
     * capabilities are available at the same time however; some modems require
     * a firmware reload or other reinitialization to switch between eg
     * CDMA/EVDO and GSM/UMTS.
     */
    readonly modem_capabilities: DeviceModemCapabilities
    /**
     * The generic family of access technologies the modem supports.  Not all
     * capabilities are available at the same time however; some modems require
     * a firmware reload or other reinitialization to switch between eg
     * CDMA/EVDO and GSM/UMTS.
     */
    readonly modemCapabilities: DeviceModemCapabilities
    readonly operator_code: string
    readonly operatorCode: string

    // Owm methods of NM-1.0.DeviceModem

    /**
     * The access point name the modem is connected to.
     * @returns the APN name or %NULL if disconnected
     */
    get_apn(): string
    /**
     * Returns a bitfield of the generic access technology families the modem
     * supports without a firmware reload or reinitialization.  This value
     * represents the network types the modem can immediately connect to.
     * @returns the generic access technology families the modem supports without a firmware reload or other reinitialization
     */
    get_current_capabilities(): DeviceModemCapabilities
    /**
     * An identifier used by the modem backend (ModemManager) that aims to
     * uniquely identify the a device. Can be used to match a connection to a
     * particular device.
     * @returns a device-id string
     */
    get_device_id(): string
    /**
     * Returns a bitfield of the generic access technology families the modem
     * supports.  Not all capabilities are available concurrently however; some
     * may require a firmware reload or reinitialization.
     * @returns the generic access technology families the modem supports
     */
    get_modem_capabilities(): DeviceModemCapabilities
    /**
     * The MCC and MNC (concatenated) of the network the modem is connected to.
     * @returns the operator code or %NULL if disconnected or not a 3GPP modem.
     */
    get_operator_code(): string
}

module DeviceOlpcMesh {

    // Constructor properties interface

}

class DeviceOlpcMesh extends Device {

    // Own properties of NM-1.0.DeviceOlpcMesh

    /**
     * The device's active channel.
     */
    readonly active_channel: number
    /**
     * The device's active channel.
     */
    readonly activeChannel: number
    /**
     * The companion device.
     */
    readonly companion: DeviceWifi

    // Owm methods of NM-1.0.DeviceOlpcMesh

    /**
     * Returns the active channel of the #NMDeviceOlpcMesh device.
     * @returns active channel of the device
     */
    get_active_channel(): number
    /**
     * Gets the companion device of the #NMDeviceOlpcMesh.
     * @returns the companion of the device of %NULL
     */
    get_companion(): DeviceWifi
}

module DeviceOvsBridge {

    // Constructor properties interface

}

class DeviceOvsBridge extends Device {

    // Own properties of NM-1.0.DeviceOvsBridge

    /**
     * Gets the ports currently enslaved to the device.
     */
    readonly slaves: Device[]

    // Owm methods of NM-1.0.DeviceOvsBridge

    /**
     * Gets the ports currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    get_slaves(): Device[]
}

module DeviceOvsInterface {

    // Constructor properties interface

}

class DeviceOvsInterface extends Device {
}

module DeviceOvsPort {

    // Constructor properties interface

}

class DeviceOvsPort extends Device {

    // Own properties of NM-1.0.DeviceOvsPort

    /**
     * Gets the interfaces currently enslaved to the device.
     */
    readonly slaves: Device[]

    // Owm methods of NM-1.0.DeviceOvsPort

    /**
     * Gets the interfaces currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    get_slaves(): Device[]
}

module DevicePpp {

    // Constructor properties interface

}

class DevicePpp extends Device {
}

module DeviceTeam {

    // Constructor properties interface

}

class DeviceTeam extends Device {

    // Own properties of NM-1.0.DeviceTeam

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The current JSON configuration of the device.
     */
    readonly config: string
    /**
     * The devices enslaved to the team device.
     */
    readonly slaves: Device[]

    // Owm methods of NM-1.0.DeviceTeam

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
    /**
     * Gets the current JSON configuration of the #NMDeviceTeam
     * @returns the current configuration. This is the internal string used by the device, and must not be modified.
     */
    get_config(): string
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    get_slaves(): Device[]
}

module DeviceTun {

    // Constructor properties interface

}

class DeviceTun extends Device {

    // Own properties of NM-1.0.DeviceTun

    /**
     * The gid of the tunnel group, or -1 if it has no owner.
     */
    readonly group: number
    /**
     * The tunnel mode, either "tun" or "tap".
     */
    readonly mode: string
    /**
     * The tunnel's "TUN_TAP_MQ" flag; true if callers can connect to
     * the tap device multiple times, for multiple send/receive
     * queues.
     */
    readonly multi_queue: boolean
    /**
     * The tunnel's "TUN_TAP_MQ" flag; true if callers can connect to
     * the tap device multiple times, for multiple send/receive
     * queues.
     */
    readonly multiQueue: boolean
    /**
     * The tunnel's "TUN_NO_PI" flag; true if no protocol info is
     * prepended to the tunnel packets.
     */
    readonly no_pi: boolean
    /**
     * The tunnel's "TUN_NO_PI" flag; true if no protocol info is
     * prepended to the tunnel packets.
     */
    readonly noPi: boolean
    /**
     * The uid of the tunnel owner, or -1 if it has no owner.
     */
    readonly owner: number
    /**
     * The tunnel's "TUN_VNET_HDR" flag; true if the tunnel packets
     * include a virtio network header.
     */
    readonly vnet_hdr: boolean
    /**
     * The tunnel's "TUN_VNET_HDR" flag; true if the tunnel packets
     * include a virtio network header.
     */
    readonly vnetHdr: boolean

    // Owm methods of NM-1.0.DeviceTun

    /**
     * Gets the tunnel group.
     * @returns the gid of the tunnel group, or -1 if it has no owner.
     */
    get_group(): number
    /**
     * Returns the TUN/TAP mode for the device.
     * @returns 'tun' or 'tap'
     */
    get_mode(): string
    /**
     * Returns whether the #NMDeviceTun has the IFF_MULTI_QUEUE flag.
     * @returns %TRUE if the device doesn't have the flag, %FALSE otherwise
     */
    get_multi_queue(): boolean
    /**
     * Returns whether the #NMDeviceTun has the IFF_NO_PI flag.
     * @returns %TRUE if the device has the flag, %FALSE otherwise
     */
    get_no_pi(): boolean
    /**
     * Gets the tunnel owner.
     * @returns the uid of the tunnel owner, or -1 if it has no owner.
     */
    get_owner(): number
    /**
     * Returns whether the #NMDeviceTun has the IFF_VNET_HDR flag.
     * @returns %TRUE if the device has the flag, %FALSE otherwise
     */
    get_vnet_hdr(): boolean
}

module DeviceVeth {

    // Constructor properties interface

}

class DeviceVeth extends DeviceEthernet {

    // Own properties of NM-1.0.DeviceVeth

    /**
     * The device's peer device.
     */
    readonly peer: Device

    // Owm methods of NM-1.0.DeviceVeth

    get_peer(): Device
}

module DeviceVlan {

    // Constructor properties interface

}

class DeviceVlan extends Device {

    // Own properties of NM-1.0.DeviceVlan

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The devices's parent device.
     */
    readonly parent: Device
    /**
     * The device's VLAN ID.
     */
    readonly vlan_id: number
    /**
     * The device's VLAN ID.
     */
    readonly vlanId: number

    // Owm methods of NM-1.0.DeviceVlan

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    get_carrier(): boolean
    get_parent(): Device
    get_vlan_id(): number
}

module DeviceVrf {

    // Constructor properties interface

}

class DeviceVrf extends Device {

    // Own properties of NM-1.0.DeviceVrf

    /**
     * The device's VRF table.
     */
    readonly table: number

    // Owm methods of NM-1.0.DeviceVrf

    get_table(): number
}

module DeviceVxlan {

    // Constructor properties interface

}

class DeviceVxlan extends Device {

    // Own properties of NM-1.0.DeviceVxlan

    /**
     * The lifetime in seconds of FDB entries learnt by the kernel.
     */
    readonly ageing: number
    /**
     * Whether the device has carrier.
     * 
     * This property is not implemented yet, and the property is always FALSE.
     */
    readonly carrier: boolean
    /**
     * The UDP destination port used to communicate with the remote VXLAN tunnel
     * endpoint.
     */
    readonly dst_port: number
    /**
     * The UDP destination port used to communicate with the remote VXLAN tunnel
     * endpoint.
     */
    readonly dstPort: number
    /**
     * The unicast destination IP address used in outgoing packets when the
     * destination link layer address is not known in the VXLAN device
     * forwarding database or the multicast IP address joined.
     */
    readonly group: string
    /**
     * The device's VXLAN ID.
     */
    readonly id: number
    /**
     * Whether netlink LL ADDR miss notifications are generated.
     */
    readonly l2miss: boolean
    /**
     * Whether netlink IP ADDR miss notifications are generated.
     */
    readonly l3miss: boolean
    /**
     * Whether unknown source link layer addresses and IP addresses are entered
     * into the VXLAN device forwarding database.
     */
    readonly learning: boolean
    /**
     * The maximum number of entries that can be added to the forwarding table.
     */
    readonly limit: number
    /**
     * The source IP address to use in outgoing packets.
     */
    readonly local: string
    /**
     * The devices's parent device.
     */
    readonly parent: Device
    /**
     * Whether ARP proxy is turned on.
     */
    readonly proxy: boolean
    /**
     * Whether route short circuit is turned on.
     */
    readonly rsc: boolean
    /**
     * The maximum UDP source port used to communicate with the remote VXLAN
     * tunnel endpoint.
     */
    readonly src_port_max: number
    /**
     * The maximum UDP source port used to communicate with the remote VXLAN
     * tunnel endpoint.
     */
    readonly srcPortMax: number
    /**
     * The minimum UDP source port used to communicate with the remote VXLAN
     * tunnel endpoint.
     */
    readonly src_port_min: number
    /**
     * The minimum UDP source port used to communicate with the remote VXLAN
     * tunnel endpoint.
     */
    readonly srcPortMin: number
    /**
     * The TOS value to use in outgoing packets.
     */
    readonly tos: number
    /**
     * The time-to-live value to use in outgoing packets.
     */
    readonly ttl: number

    // Owm methods of NM-1.0.DeviceVxlan

    get_ageing(): number
    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier. This property is not implemented yet, and the function always returns FALSE.
     */
    get_carrier(): boolean
    get_dst_port(): number
    get_group(): string
    get_id(): number
    get_l2miss(): boolean
    get_l3miss(): boolean
    get_learning(): boolean
    get_limit(): number
    get_local(): string
    get_parent(): Device
    get_proxy(): boolean
    get_rsc(): boolean
    get_src_port_max(): number
    get_src_port_min(): number
    get_tos(): number
    get_ttl(): number
}

module DeviceWifi {

    // Signal callback interfaces

    interface AccessPointAdded {
        (ap: GObject.Object): void
    }

    interface AccessPointRemoved {
        (ap: GObject.Object): void
    }


    // Constructor properties interface

}

class DeviceWifi extends Device {

    // Own properties of NM-1.0.DeviceWifi

    /**
     * List of all Wi-Fi access points the device can see.
     */
    readonly access_points: AccessPoint[]
    /**
     * List of all Wi-Fi access points the device can see.
     */
    readonly accessPoints: AccessPoint[]
    /**
     * The active #NMAccessPoint of the device.
     */
    readonly active_access_point: AccessPoint
    /**
     * The active #NMAccessPoint of the device.
     */
    readonly activeAccessPoint: AccessPoint
    /**
     * The bit rate of the device in kbit/s.
     */
    readonly bitrate: number
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last finished
     * network scan. A value of -1 means the device never scanned for
     * access points.
     */
    readonly last_scan: number
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last finished
     * network scan. A value of -1 means the device never scanned for
     * access points.
     */
    readonly lastScan: number
    /**
     * The mode of the device.
     */
    readonly mode: 80211Mode
    /**
     * The hardware (MAC) address of the device.
     */
    readonly perm_hw_address: string
    /**
     * The hardware (MAC) address of the device.
     */
    readonly permHwAddress: string
    /**
     * The wireless capabilities of the device.
     */
    readonly wireless_capabilities: DeviceWifiCapabilities
    /**
     * The wireless capabilities of the device.
     */
    readonly wirelessCapabilities: DeviceWifiCapabilities

    // Owm methods of NM-1.0.DeviceWifi

    /**
     * Gets a #NMAccessPoint by path.
     * @param path the object path of the access point
     * @returns the access point or %NULL if none is found.
     */
    get_access_point_by_path(path: string): AccessPoint
    /**
     * Gets all the scanned access points of the #NMDeviceWifi.
     * @returns a #GPtrArray containing all the scanned #NMAccessPoints. The returned array is owned by the client and should not be modified.
     */
    get_access_points(): AccessPoint[]
    /**
     * Gets the active #NMAccessPoint.
     * @returns the access point or %NULL if none is active
     */
    get_active_access_point(): AccessPoint
    /**
     * Gets the bit rate of the #NMDeviceWifi in kbit/s.
     * @returns the bit rate (kbit/s)
     */
    get_bitrate(): number
    /**
     * Gets the Wi-Fi capabilities of the #NMDeviceWifi.
     * @returns the capabilities
     */
    get_capabilities(): DeviceWifiCapabilities
    /**
     * Returns the timestamp (in CLOCK_BOOTTIME milliseconds) for the last finished
     * network scan. A value of -1 means the device never scanned for access points.
     * 
     * Use nm_utils_get_timestamp_msec() to obtain current time value suitable for
     * comparing to this value.
     * @returns the last scan time in milliseconds (in clock_gettime(CLOCK_BOOTTIME) scale).
     */
    get_last_scan(): number
    /**
     * Gets the #NMDeviceWifi mode.
     * @returns the mode
     */
    get_mode(): 80211Mode
    /**
     * Gets the permanent hardware (MAC) address of the #NMDeviceWifi
     * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
     */
    get_permanent_hw_address(): string
    /**
     * Request NM to scan for access points on `device`. Note that the function
     * returns immediately after requesting the scan, and it may take some time
     * after that for the scan to complete.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    request_scan(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Request NM to scan for access points on `device`. Note that `callback` will be
     * called immediately after requesting the scan, and it may take some time after
     * that for the scan to complete.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the scan has been requested
     */
    request_scan_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_device_wifi_request_scan_async() and
     * nm_device_wifi_request_scan_options_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    request_scan_finish(result: Gio.AsyncResult): boolean
    /**
     * Request NM to scan for access points on `device`. Note that the function
     * returns immediately after requesting the scan, and it may take some time
     * after that for the scan to complete.
     * This is the same as `nm_device_wifi_request_scan` except it accepts `options`
     * for the scanning. The argument is the dictionary passed to RequestScan()
     * D-Bus call. Valid options inside the dictionary are:
     * 'ssids' =&gt; array of SSIDs (saay)
     * @param options dictionary with options for RequestScan(), or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    request_scan_options(options: GLib.Variant, cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Request NM to scan for access points on `device`. Note that `callback` will be
     * called immediately after requesting the scan, and it may take some time after
     * that for the scan to complete.
     * This is the same as `nm_device_wifi_request_scan_async` except it accepts `options`
     * for the scanning. The argument is the dictionary passed to RequestScan()
     * D-Bus call. Valid options inside the dictionary are:
     * 'ssids' =&gt; array of SSIDs (saay)
     * 
     * To complete the request call nm_device_wifi_request_scan_finish().
     * @param options dictionary with options for RequestScan(), or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the scan has been requested
     */
    request_scan_options_async(options: GLib.Variant, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
}

module DeviceWifiP2P {

    // Signal callback interfaces

    interface PeerAdded {
        (peer: GObject.Object): void
    }

    interface PeerRemoved {
        (peer: GObject.Object): void
    }


    // Constructor properties interface

}

class DeviceWifiP2P extends Device {

    // Own properties of NM-1.0.DeviceWifiP2P

    /**
     * List of all Wi-Fi P2P peers the device can see.
     */
    readonly peers: WifiP2PPeer[]

    // Owm methods of NM-1.0.DeviceWifiP2P

    /**
     * Gets a #NMWifiP2PPeer by path.
     * @param path the object path of the peer
     * @returns the peer or %NULL if none is found.
     */
    get_peer_by_path(path: string): WifiP2PPeer
    /**
     * Gets all the found peers of the #NMDeviceWifiP2P.
     * @returns a #GPtrArray containing all the          found #NMWifiP2PPeers. The returned array is owned by the client and should not be modified.
     */
    get_peers(): WifiP2PPeer[]
    /**
     * Request NM to search for Wi-Fi P2P peers on `device`. Note that the call
     * returns immediately after requesting the find, and it may take some time
     * after that for peers to be found.
     * 
     * The find operation will run for 30s by default. You can stop it earlier
     * using nm_device_p2p_wifi_stop_find().
     * @param options optional options passed to StartFind.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback, or %NULL
     */
    start_find(options?: (GLib.Variant | null), cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Finish an operation started by nm_device_wifi_p2p_start_find().
     * @param result the #GAsyncResult
     * @returns %TRUE if the call was successful
     */
    start_find_finish(result: Gio.AsyncResult): boolean
    /**
     * Request NM to stop any ongoing find operation for Wi-Fi P2P peers on `device`.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback, or %NULL
     */
    stop_find(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Finish an operation started by nm_device_wifi_p2p_stop_find().
     * @param result the #GAsyncResult
     * @returns %TRUE if the call was successful
     */
    stop_find_finish(result: Gio.AsyncResult): boolean
}

module DeviceWimax {

    // Signal callback interfaces

    interface NspAdded {
        (nsp: GObject.Object): void
    }

    interface NspRemoved {
        (nsp: GObject.Object): void
    }


    // Constructor properties interface

}

class DeviceWimax extends Device {

    // Own properties of NM-1.0.DeviceWimax

    /**
     * The active #NMWimaxNsp of the device.
     */
    readonly active_nsp: WimaxNsp
    /**
     * The active #NMWimaxNsp of the device.
     */
    readonly activeNsp: WimaxNsp
    /**
     * The ID of the serving base station as received from the network.  Has
     * no meaning when the device is not connected.
     */
    readonly bsid: string
    /**
     * The center frequency (in KHz) of the radio channel the device is using to
     * communicate with the network when connected.  Has no meaning when the
     * device is not connected.
     */
    readonly center_frequency: number
    /**
     * The center frequency (in KHz) of the radio channel the device is using to
     * communicate with the network when connected.  Has no meaning when the
     * device is not connected.
     */
    readonly centerFrequency: number
    /**
     * CINR (Carrier to Interference + Noise Ratio) of the current radio link
     * in dB.  CINR is a more accurate measure of radio link quality.  Has no
     * meaning when the device is not connected.
     */
    readonly cinr: number
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hw_address: string
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string
    /**
     * List of all WiMAX Network Service Providers the device can see.
     */
    readonly nsps: WimaxNsp[]
    /**
     * RSSI of the current radio link in dBm.  This value indicates how strong
     * the raw received RF signal from the base station is, but does not
     * indicate the overall quality of the radio link.  Has no meaning when the
     * device is not connected.
     */
    readonly rssi: number
    /**
     * Average power of the last burst transmitted by the device, in units of
     * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
     * -5.5 dBm.  Has no meaning when the device is not connected.
     */
    readonly tx_power: number
    /**
     * Average power of the last burst transmitted by the device, in units of
     * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
     * -5.5 dBm.  Has no meaning when the device is not connected.
     */
    readonly txPower: number

    // Owm methods of NM-1.0.DeviceWimax

    /**
     * Gets the active #NMWimaxNsp.
     * @returns the access point or %NULL if none is active
     */
    get_active_nsp(): WimaxNsp
    /**
     * Gets the ID of the serving Base Station when the device is connected.
     * @returns the ID of the serving Base Station, or %NULL
     */
    get_bsid(): string
    /**
     * Gets the center frequency (in KHz) of the radio channel the device is using
     * to communicate with the network when connected.  Has no meaning when the
     * device is not connected.
     * @returns the center frequency in KHz, or 0
     */
    get_center_frequency(): number
    /**
     * Gets the CINR (Carrier to Interference + Noise Ratio) of the current radio
     * link in dB.  CINR is a more accurate measure of radio link quality.  Has no
     * meaning when the device is not connected.
     * @returns the CINR in dB, or 0
     */
    get_cinr(): number
    /**
     * Gets the hardware (MAC) address of the #NMDeviceWimax
     * @returns the hardware address. This is the internal string used by the          device, and must not be modified.
     */
    get_hw_address(): string
    /**
     * Gets a #NMWimaxNsp by path.
     * @param path the object path of the NSP
     * @returns the access point or %NULL if none is found.
     */
    get_nsp_by_path(path: string): WimaxNsp
    /**
     * Gets all the scanned NSPs of the #NMDeviceWimax.
     * @returns a #GPtrArray containing          all the scanned #NMWimaxNsps. The returned array is owned by the client and should not be modified.
     */
    get_nsps(): WimaxNsp[]
    /**
     * Gets the RSSI of the current radio link in dBm.  This value indicates how
     * strong the raw received RF signal from the base station is, but does not
     * indicate the overall quality of the radio link.  Has no meaning when the
     * device is not connected.
     * @returns the RSSI in dBm, or 0
     */
    get_rssi(): number
    /**
     * Average power of the last burst transmitted by the device, in units of
     * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
     * -5.5 dBm.  Has no meaning when the device is not connected.
     * @returns the TX power in dBm, or 0
     */
    get_tx_power(): number
}

module DeviceWireGuard {

    // Constructor properties interface

}

class DeviceWireGuard extends Device {

    // Own properties of NM-1.0.DeviceWireGuard

    /**
     * Optional firewall mark - see ip-rule(8).
     * Used when setting routing policy for outgoing encrypted packets.
     * Set to 0 to disable the mark (default).
     */
    readonly fwmark: number
    /**
     * Local UDP listen port.
     * Set to 0 to allow a random port to be chosen (default).
     */
    readonly listen_port: number
    /**
     * Local UDP listen port.
     * Set to 0 to allow a random port to be chosen (default).
     */
    readonly listenPort: number
    /**
     * 32-byte public key, derived from the current private key.
     */
    readonly public_key: GLib.Bytes
    /**
     * 32-byte public key, derived from the current private key.
     */
    readonly publicKey: GLib.Bytes

    // Owm methods of NM-1.0.DeviceWireGuard

    /**
     * Gets the fwmark (firewall mark) for this interface.
     * It can be used to set routing policy for outgoing encrypted packets.
     * See: ip-rule(8)
     * @returns 0 if fwmark not in use, 32-bit fwmark value otherwise
     */
    get_fwmark(): number
    /**
     * Gets the local UDP port this interface listens on
     * @returns UDP listen port
     */
    get_listen_port(): number
    /**
     * Gets the public key for this interface
     * @returns the #GBytes containing the 32-byte public key
     */
    get_public_key(): GLib.Bytes
}

module DeviceWpan {

    // Constructor properties interface

}

class DeviceWpan extends Device {
}

module DhcpConfig {

    // Constructor properties interface

}

abstract class DhcpConfig extends Object {

    // Own properties of NM-1.0.DhcpConfig

    /**
     * The IP address family of the configuration; either
     * &lt;literal&gt;AF_INET&lt;/literal&gt; or &lt;literal&gt;AF_INET6&lt;/literal&gt;.
     */
    readonly family: number
    /**
     * The #GHashTable containing options of the configuration.
     */
    readonly options: GLib.HashTable<string, string>

    // Owm methods of NM-1.0.DhcpConfig

    /**
     * Gets the IP address family of the configuration
     * @returns the IP address family; either &lt;literal&gt;AF_INET&lt;/literal&gt; or   &lt;literal&gt;AF_INET6&lt;/literal&gt;
     */
    get_family(): number
    /**
     * Gets one option by option name.
     * @param option the option to retrieve
     * @returns the configuration option's value. This is the internal string used by the configuration, and must not be modified.
     */
    get_one_option(option: string): string
    /**
     * Gets all the options contained in the configuration.
     * @returns the #GHashTable containing strings for keys and values.  This is the internal copy used by the configuration, and must not be modified.
     */
    get_options(): GLib.HashTable<string, string>
}

module IPConfig {

    // Constructor properties interface

}

abstract class IPConfig extends Object {

    // Own properties of NM-1.0.IPConfig

    /**
     * A #GPtrArray containing the addresses (#NMIPAddress) of the configuration.
     */
    readonly addresses: any[]
    /**
     * The array containing domain strings of the configuration.
     */
    readonly domains: string[]
    /**
     * The IP address family of the configuration; either
     * &lt;literal&gt;AF_INET&lt;/literal&gt; or &lt;literal&gt;AF_INET6&lt;/literal&gt;.
     */
    readonly family: number
    /**
     * The IP gateway address of the configuration as string.
     */
    readonly gateway: string
    /**
     * The array containing name server IP addresses of the configuration.
     */
    readonly nameservers: string[]
    /**
     * A #GPtrArray containing the routes (#NMIPRoute) of the configuration.
     */
    readonly routes: IPRoute[]
    /**
     * The array containing DNS search strings of the configuration.
     */
    readonly searches: string[]
    /**
     * The array containing WINS server IP addresses of the configuration.
     * (This will always be empty for IPv6 configurations.)
     */
    readonly wins_servers: string[]
    /**
     * The array containing WINS server IP addresses of the configuration.
     * (This will always be empty for IPv6 configurations.)
     */
    readonly winsServers: string[]

    // Owm methods of NM-1.0.IPConfig

    /**
     * Gets the IP addresses (containing the address, prefix, and gateway).
     * @returns the #GPtrArray containing #NMIPAddress&lt;!-- --&gt;es.  This is the internal copy used by the configuration and must not be modified. The library never modifies the returned array and thus it is safe for callers to reference and keep using it.
     */
    get_addresses(): IPAddress[]
    /**
     * Gets the domain names.
     * @returns the array of domains. (This is never %NULL, though it may be 0-length).
     */
    get_domains(): string[]
    /**
     * Gets the IP address family
     * @returns the IP address family; either &lt;literal&gt;AF_INET&lt;/literal&gt; or &lt;literal&gt;AF_INET6&lt;/literal&gt;
     */
    get_family(): number
    /**
     * Gets the IP gateway address.
     * @returns the IP address of the gateway.
     */
    get_gateway(): string
    /**
     * Gets the domain name servers (DNS).
     * @returns the array of nameserver IP addresses
     */
    get_nameservers(): string[]
    /**
     * Gets the routes.
     * @returns the #GPtrArray containing #NMIPRoute&lt;!-- --&gt;s. This is the internal copy used by the configuration, and must not be modified. The library never modifies the returned array and thus it is safe for callers to reference and keep using it.
     */
    get_routes(): IPRoute[]
    /**
     * Gets the DNS searches.
     * @returns the array of DNS search strings. (This is never %NULL, though it may be 0-length).
     */
    get_searches(): string[]
    /**
     * Gets the Windows Internet Name Service servers (WINS).
     * @returns the arry of WINS server IP address strings. (This is never %NULL, though it may be 0-length.)
     */
    get_wins_servers(): string[]
}

module Object {

    // Constructor properties interface

}

abstract class Object extends GObject.Object {

    // Own properties of NM-1.0.Object

    /**
     * The NMClient instance as returned by nm_object_get_client().
     * 
     * When an NMObject gets removed from the NMClient cache,
     * the NMObject:path property stays unchanged, but this client
     * instance gets reset to %NULL. You can use this property to
     * track removal of the object from the cache.
     */
    readonly client: Client
    /**
     * The D-Bus object path.
     * 
     * The D-Bus path of an object instance never changes, even if the object
     * gets removed from the cache. To see whether the object is still in the
     * cache, check NMObject:client.
     */
    readonly path: string

    // Owm methods of NM-1.0.Object

    /**
     * Returns the #NMClient instance in which object is cached.
     * Also, if the object got removed from the client cached,
     * this returns %NULL. So it can be used to check whether the
     * object is still alive.
     * @returns the #NMClient cache in which the object can be found, or %NULL if the object is no longer cached.
     */
    get_client(): (any | null)
    /**
     * Gets the DBus path of the #NMObject.
     * @returns the object's path. This is the internal string used by the object, and must not be modified. Note that the D-Bus path of an NMObject never changes, even if the instance gets removed from the cache. To find out whether the object is still alive/cached, check nm_object_get_client().
     */
    get_path(): string
}

module RemoteConnection {

    // Constructor properties interface

}

class RemoteConnection extends Object {

    // Own properties of NM-1.0.RemoteConnection

    /**
     * File that stores the connection in case the connection is
     * file-backed.
     */
    readonly filename: string
    /**
     * The flags of the connection as unsigned integer. The values
     * correspond to the #NMSettingsConnectionFlags enum.
     */
    readonly flags: number
    /**
     * %TRUE if the remote connection contains changes that have not been saved
     * to disk, %FALSE if the connection is the same as its on-disk representation.
     */
    readonly unsaved: boolean
    /**
     * The version ID of the profile that is incremented when the profile gets modified.
     * This can be used to track concurrent modifications of the profile.
     */
    readonly version_id: number
    /**
     * The version ID of the profile that is incremented when the profile gets modified.
     * This can be used to track concurrent modifications of the profile.
     */
    readonly versionId: number
    /**
     * %TRUE if the remote connection is visible to the current user, %FALSE if
     * not.  If the connection is not visible then it is essentially useless; it
     * will not contain any settings, and operations such as
     * nm_remote_connection_save() and nm_remote_connection_delete() will always
     * fail. (#NMRemoteSettings will not normally return non-visible connections
     * to callers, but it is possible for a connection's visibility to change
     * after you already have a reference to it.)
     */
    readonly visible: boolean

    // Owm methods of NM-1.0.RemoteConnection

    /**
     * Send any local changes to the settings and properties of `connection` to
     * NetworkManager. If `save_to_disk` is %TRUE, the updated connection will be saved to
     * disk; if %FALSE, then only the in-memory representation will be changed.
     * @param save_to_disk whether to persist the changes to disk
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    commit_changes(save_to_disk: boolean, cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously sends any local changes to the settings and properties of
     * `connection` to NetworkManager. If `save` is %TRUE, the updated connection will
     * be saved to disk; if %FALSE, then only the in-memory representation will be
     * changed.
     * @param save_to_disk whether to save the changes to persistent storage
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the commit operation completes
     */
    commit_changes_async(save_to_disk: boolean, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_remote_connection_commit_changes_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    commit_changes_finish(result: Gio.AsyncResult): boolean
    /**
     * Deletes the connection.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    delete(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously deletes the connection.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the delete operation completes
     */
    delete_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_remote_connection_delete_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    delete_finish(result: Gio.AsyncResult): boolean
    get_filename(): string
    get_flags(): SettingsConnectionFlags
    /**
     * Request the connection's secrets. Note that this is a blocking D-Bus call,
     * not a simple property accessor.
     * @param setting_name the #NMSetting object name to get secrets for
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #GVariant of type %NM_VARIANT_TYPE_CONNECTION containing @connection's secrets, or %NULL on error. Warning: NMClient contains a cache of objects on D-Bus. This cache gets updated   with D-Bus signals when iterating the GMainContext. This function performs a   (pseudo) blocking D-Bus call. Aside blocking, the result will not be in sync   and not be ordered with the content of the NMClient cache.   This function used to be deprecated between 1.22 and 1.38 releases.
     */
    get_secrets(setting_name: string, cancellable?: (Gio.Cancellable | null)): GLib.Variant
    /**
     * Asynchronously requests the connection's secrets.
     * @param setting_name the #NMSetting object name to get secrets for
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the secret request completes
     */
    get_secrets_async(setting_name: string, cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_remote_connection_get_secrets_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns a #GVariant of type %NM_VARIANT_TYPE_CONNECTION   containing @connection's secrets, or %NULL on error.
     */
    get_secrets_finish(result: Gio.AsyncResult): GLib.Variant
    get_unsaved(): boolean
    get_version_id(): number
    /**
     * Checks if the connection is visible to the current user.  If the
     * connection is not visible then it is essentially useless; it will
     * not contain any settings, and operations such as
     * nm_remote_connection_save() and nm_remote_connection_delete() will
     * always fail. (#NMRemoteSettings will not normally return
     * non-visible connections to callers, but it is possible for a
     * connection's visibility to change after you already have a
     * reference to it.)
     * @returns %TRUE if the remote connection is visible to the current user, %FALSE if not.
     */
    get_visible(): boolean
    /**
     * Saves the connection to disk if the connection has changes that have not yet
     * been written to disk, or if the connection has never been saved.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    save(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Saves the connection to disk if the connection has changes that have not yet
     * been written to disk, or if the connection has never been saved.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the save operation completes
     */
    save_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_remote_connection_save_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE on success, %FALSE on error, in which case @error will be set.
     */
    save_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously calls the Update2() D-Bus method.
     * @param settings optional connection to update the settings.
     * @param flags update-flags
     * @param args optional arguments.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to be called when the commit operation completes
     */
    update2(settings: (GLib.Variant | null), flags: SettingsUpdate2Flags, args?: (GLib.Variant | null), cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_remote_connection_commit_changes_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns on success, a #GVariant of type "a{sv}" with the result. On failure,   %NULL.
     */
    update2_finish(result: Gio.AsyncResult): GLib.Variant
}

module SecretAgentOld {

    // Constructor properties interface

}

abstract class SecretAgentOld extends GObject.Object {

    // Own properties of NM-1.0.SecretAgentOld

    /**
     * If %TRUE (the default), the agent will always be registered when
     * NetworkManager is running; if NetworkManager exits and restarts, the
     * agent will re-register itself automatically.
     * 
     * In particular, if this property is %TRUE at construct time, then the
     * agent will register itself with NetworkManager during
     * construction/initialization and initialization will only complete
     * after registration is completed (either successfully or unsuccessfully).
     * Since 1.24, a failure to register will no longer cause initialization
     * of #NMSecretAgentOld to fail.
     * 
     * If the property is %FALSE, the agent will not automatically register with
     * NetworkManager, and nm_secret_agent_old_enable() or
     * nm_secret_agent_old_register_async() must be called to register it.
     * 
     * Calling nm_secret_agent_old_enable() has the same effect as setting this
     * property.
     */
    auto_register: boolean
    /**
     * If %TRUE (the default), the agent will always be registered when
     * NetworkManager is running; if NetworkManager exits and restarts, the
     * agent will re-register itself automatically.
     * 
     * In particular, if this property is %TRUE at construct time, then the
     * agent will register itself with NetworkManager during
     * construction/initialization and initialization will only complete
     * after registration is completed (either successfully or unsuccessfully).
     * Since 1.24, a failure to register will no longer cause initialization
     * of #NMSecretAgentOld to fail.
     * 
     * If the property is %FALSE, the agent will not automatically register with
     * NetworkManager, and nm_secret_agent_old_enable() or
     * nm_secret_agent_old_register_async() must be called to register it.
     * 
     * Calling nm_secret_agent_old_enable() has the same effect as setting this
     * property.
     */
    autoRegister: boolean
    /**
     * A bitfield of %NMSecretAgentCapabilities.
     * 
     * Changing this property is possible at any time. In case the secret
     * agent is currently registered, this will cause a re-registration.
     */
    capabilities: SecretAgentCapabilities
    /**
     * The #GDBusConnection used by the instance. You may either set this
     * as construct-only property, or otherwise #NMSecretAgentOld will choose
     * a connection via g_bus_get() during initialization.
     */
    dbus_connection: Gio.DBusConnection
    /**
     * The #GDBusConnection used by the instance. You may either set this
     * as construct-only property, or otherwise #NMSecretAgentOld will choose
     * a connection via g_bus_get() during initialization.
     */
    dbusConnection: Gio.DBusConnection
    /**
     * Identifies this agent; only one agent in each user session may use the
     * same identifier.  Identifier formatting follows the same rules as
     * D-Bus bus names with the exception that the ':' character is not
     * allowed.  The valid set of characters is "[A-Z][a-z][0-9]_-." and the
     * identifier is limited in length to 255 characters with a minimum
     * of 3 characters.  An example valid identifier is 'org.gnome.nm-applet'
     * (without quotes).
     */
    identifier: string
    /**
     * %TRUE if the agent is registered with NetworkManager, %FALSE if not.
     */
    readonly registered: boolean

    // Owm methods of NM-1.0.SecretAgentOld

    /**
     * Asynchronously asks the agent to delete all saved secrets belonging to
     * `connection`.
     * @param connection a #NMConnection
     * @param callback a callback, to be invoked when the operation is done
     */
    delete_secrets(connection: Connection, callback: SecretAgentOldDeleteSecretsFunc): void
    /**
     * Since 1.24, the instance will already register a D-Bus object on the
     * D-Bus connection during initialization. That object will stay registered
     * until `self` gets unrefed (destroyed) or this function is called. This
     * function performs the necessary cleanup to tear down the instance. Afterwards,
     * the function can not longer be used. This is optional, but necessary to
     * ensure unregistering the D-Bus object at a define point, when other users
     * might still have a reference on `self`.
     * 
     * You may call this function any time and repeatedly. However, after destroying
     * the instance, it is a bug to still use the instance for other purposes. The
     * instance becomes defunct and cannot re-register.
     */
    destroy(): void
    /**
     * This has the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER
     * property.
     * 
     * Unlike most other functions, you may already call this function before
     * initialization completes.
     * @param enable whether to enable or disable the listener.
     */
    enable(enable: boolean): void
    /**
     * Returns a #GObject that stays alive as long as there are pending
     * requests in the #GDBusConnection. Such requests keep the #GMainContext
     * alive, and thus you may want to keep iterating the context as long
     * until a weak reference indicates that this object is gone. This is
     * useful because even when you destroy the instance right away (and all
     * the internally pending requests get cancelled), any pending g_dbus_connection_call()
     * requests will still invoke the result on the #GMainContext. Hence, this
     * allows you to know how long you must iterate the context to know
     * that all remains are cleaned up.
     * @returns a #GObject that you may register a weak pointer   to know that the #GMainContext is still kept busy by @self.
     */
    get_context_busy_watcher<T = GObject.Object>(): T
    get_dbus_connection(): Gio.DBusConnection
    get_dbus_name_owner(): string
    get_main_context(): GLib.MainContext
    /**
     * Note that the secret agent transparently registers and re-registers
     * as the D-Bus name owner appears. Hence, this property is not really
     * useful. Also, to be graceful against races during registration, the
     * instance will already accept requests while being in the process of
     * registering.
     * If you need to avoid races and want to wait until `self` is registered,
     * call nm_secret_agent_old_register_async(). If that function completes
     * with success, you know the instance is registered.
     * @returns a %TRUE if the agent is registered, %FALSE if it is not.
     */
    get_registered(): boolean
    /**
     * Asynchronously retrieves secrets belonging to `connection` for the
     * setting `setting_name`.  `flags` indicate specific behavior that the secret
     * agent should use when performing the request, for example returning only
     * existing secrets without user interaction, or requesting entirely new
     * secrets from the user.
     * @param connection the #NMConnection for which we're asked secrets
     * @param setting_name the name of the secret setting
     * @param hints hints to the agent
     * @param flags flags that modify the behavior of the request
     * @param callback a callback, to be invoked when the operation is done
     */
    get_secrets(connection: Connection, setting_name: string, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentOldGetSecretsFunc): void
    /**
     * Registers the #NMSecretAgentOld with the NetworkManager secret manager,
     * indicating to NetworkManager that the agent is able to provide and save
     * secrets for connections on behalf of its user.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE if registration was successful, %FALSE on error. Since 1.24, this can no longer fail unless the @cancellable gets cancelled. Contrary to nm_secret_agent_old_register_async(), this also does not wait for the registration to succeed. You cannot synchronously (without iterating the caller's GMainContext) wait for registration. Since 1.24, registration is idempotent. It has the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %TRUE or nm_secret_agent_old_enable().
     */
    register(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously registers the #NMSecretAgentOld with the NetworkManager secret
     * manager, indicating to NetworkManager that the agent is able to provide and
     * save secrets for connections on behalf of its user.
     * 
     * Since 1.24, registration cannot fail and is idempotent. It has
     * the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %TRUE
     * or nm_secret_agent_old_enable().
     * 
     * Since 1.24, the asynchronous result indicates whether the instance is successfully
     * registered. In any case, this call enables the agent and it will automatically
     * try to register and handle secret requests. A failure of this function only indicates
     * that currently the instance might not be ready (but since it will automatically
     * try to recover, it might be ready in a moment afterwards). Use this function if
     * you want to check and ensure that the agent is registered.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the agent is registered
     */
    register_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_secret_agent_old_register_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE if registration was successful, %FALSE on error. Since 1.24, registration cannot fail and is idempotent. It has the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %TRUE or nm_secret_agent_old_enable().
     */
    register_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously ensures that all secrets inside `connection` are stored to
     * disk.
     * @param connection a #NMConnection
     * @param callback a callback, to be invoked when the operation is done
     */
    save_secrets(connection: Connection, callback: SecretAgentOldSaveSecretsFunc): void
    /**
     * Unregisters the #NMSecretAgentOld with the NetworkManager secret manager,
     * indicating to NetworkManager that the agent will no longer provide or
     * store secrets on behalf of this user.
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE if unregistration was successful, %FALSE on error Since 1.24, registration cannot fail and is idempotent. It has the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %FALSE or nm_secret_agent_old_enable().
     */
    unregister(cancellable?: (Gio.Cancellable | null)): boolean
    /**
     * Asynchronously unregisters the #NMSecretAgentOld with the NetworkManager secret
     * manager, indicating to NetworkManager that the agent will no longer provide
     * or store secrets on behalf of this user.
     * 
     * Since 1.24, registration cannot fail and is idempotent. It has
     * the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %FALSE
     * or nm_secret_agent_old_enable().
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the agent is unregistered
     */
    unregister_async(cancellable?: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): void
    /**
     * Gets the result of a call to nm_secret_agent_old_unregister_async().
     * @param result the result passed to the #GAsyncReadyCallback
     * @returns %TRUE if unregistration was successful, %FALSE on error. Since 1.24, registration cannot fail and is idempotent. It has the same effect as setting %NM_SECRET_AGENT_OLD_AUTO_REGISTER to %FALSE or nm_secret_agent_old_enable().
     */
    unregister_finish(result: Gio.AsyncResult): boolean
}

module Setting {

    // Constructor properties interface

}

abstract class Setting extends GObject.Object {

    // Own properties of NM-1.0.Setting

    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "802-11-wireless" or "802-3-ethernet".
     */
    readonly name: string

    // Owm methods of NM-1.0.Setting

    /**
     * Returns the #GType of the setting's class for a given setting name.
     * @param name a setting name
     */
    static lookup_type(name: string): GObject.GType

    // Owm methods of NM-1.0.Setting

    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
     * @returns %TRUE if the comparison succeeds, %FALSE if it does not
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
     * @param invert_results this parameter is used internally by libnm and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     * @returns %TRUE if the settings contain the same values, %FALSE if they do not
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable<string, number>): boolean
    /**
     * Duplicates a #NMSetting.
     * @returns a new #NMSetting containing the same properties and values as the source #NMSetting
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Gets the D-Bus marshalling type of a property. `property_name` is a D-Bus
     * property name, which may not necessarily be a #GObject property.
     * @param property_name the property of @setting to get the type of
     * @returns the D-Bus marshalling type of @property on @setting.
     */
    get_dbus_property_type(property_name: string): GLib.VariantType
    /**
     * Returns the type name of the #NMSetting object
     * @returns a string containing the type name of the #NMSetting object, like 'ppp' or 'wireless' or 'wired'.
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     * @returns %TRUE on success (if the given secret name was a valid property of this setting, and if that property is secret), %FALSE if not
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    option_clear_by_name(predicate?: (UtilsPredicateStr | null)): void
    option_get(opt_name: string): GLib.Variant
    /**
     * Gives the name of all set options.
     * @returns A %NULL terminated array of key names. If no names are present, this returns   %NULL. The returned array and the names are owned by %NMSetting and might be invalidated   by the next operation.
     */
    option_get_all_names(): (string[] | null)
    option_get_boolean(opt_name: string): boolean
    option_get_uint32(opt_name: string): boolean
    /**
     * If `variant` is %NULL, this clears the option if it is set.
     * Otherwise, `variant` is set as the option. If `variant` is
     * a floating reference, it will be consumed.
     * 
     * Note that not all setting types support options. It is a bug
     * setting a variant to a setting that doesn't support it.
     * Currently, only #NMSettingEthtool supports it.
     * @param opt_name the option name to set
     * @param variant the variant to set.
     */
    option_set(opt_name: string, variant?: (GLib.Variant | null)): void
    /**
     * Like nm_setting_option_set() to set a boolean GVariant.
     * @param opt_name 
     * @param value the value to set.
     */
    option_set_boolean(opt_name: string, value: boolean): void
    /**
     * Like nm_setting_option_set() to set a uint32 GVariant.
     * @param opt_name 
     * @param value the value to set.
     */
    option_set_uint32(opt_name: string, value: number): void
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     * @returns %TRUE on success (if the given secret name was a valid property of this setting, and if that property is secret), %FALSE if not
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Convert the setting (including secrets!) into a string. For debugging
     * purposes ONLY, should NOT be used for serialization of the setting,
     * or machine-parsed in any way. The output format is not guaranteed to
     * be stable and may change at any time.
     * @returns an allocated string containing a textual representation of the setting's properties and values, which the caller should free with g_free()
     */
    to_string(): string
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `connection)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param connection the #NMConnection that @setting came from, or   %NULL if @setting is being verified in isolation.
     * @returns %TRUE if the setting is valid, %FALSE if it is not
     */
    verify(connection?: (Connection | null)): boolean
    /**
     * Verifies the secrets in the setting.
     * The returned #GError contains information about which secret of the setting
     * failed validation, and in what way that secret failed validation.
     * The secret validation is done separately from main setting validation, because
     * in some cases connection failure is not desired just for the secrets.
     * @param connection the #NMConnection that @setting came from, or   %NULL if @setting is being verified in isolation.
     * @returns %TRUE if the setting secrets are valid, %FALSE if they are not
     */
    verify_secrets(connection?: (Connection | null)): boolean
}

module Setting6Lowpan {

    // Constructor properties interface

}

/**
 * 6LoWPAN Settings
 */
class Setting6Lowpan extends Setting {

    // Own properties of NM-1.0.Setting6Lowpan

    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this 6LowPAN interface should be created.
     */
    parent: string

    // Constructors of NM-1.0.Setting6Lowpan


static ["new"](): Setting6Lowpan;

    // Owm methods of NM-1.0.Setting6Lowpan

    get_parent(): string
}

module Setting8021x {

    // Constructor properties interface

}

/**
 * IEEE 802.1x Authentication Settings
 */
class Setting8021x extends Setting {

    // Own properties of NM-1.0.Setting8021x

    /**
     * List of strings to be matched against the altSubjectName of the
     * certificate presented by the authentication server. If the list is empty,
     * no verification of the server certificate's altSubjectName is performed.
     */
    altsubject_matches: string[]
    /**
     * List of strings to be matched against the altSubjectName of the
     * certificate presented by the authentication server. If the list is empty,
     * no verification of the server certificate's altSubjectName is performed.
     */
    altsubjectMatches: string[]
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymous_identity: string
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymousIdentity: string
    /**
     * A timeout for the authentication. Zero means the global default; if the
     * global default is not set, the authentication timeout is 25 seconds.
     */
    auth_timeout: number
    /**
     * A timeout for the authentication. Zero means the global default; if the
     * global default is not set, the authentication timeout is 25 seconds.
     */
    authTimeout: number
    /**
     * Contains the CA certificate if used by the EAP method specified in the
     * #NMSetting8021x:eap property.
     * 
     * Certificate data is specified using a "scheme"; three are currently
     * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
     * should be set to the certificate's DER encoded data. When using the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * certificate, prefixed with the string "file://" and ending with a terminating
     * NUL byte.
     * This property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Note that enabling NMSetting8021x:system-ca-certs will override this
     * setting to use the built-in path, if the built-in path is not a directory.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_ca_cert() function instead.
     */
    ca_cert: GLib.Bytes
    /**
     * Contains the CA certificate if used by the EAP method specified in the
     * #NMSetting8021x:eap property.
     * 
     * Certificate data is specified using a "scheme"; three are currently
     * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
     * should be set to the certificate's DER encoded data. When using the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * certificate, prefixed with the string "file://" and ending with a terminating
     * NUL byte.
     * This property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Note that enabling NMSetting8021x:system-ca-certs will override this
     * setting to use the built-in path, if the built-in path is not a directory.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_ca_cert() function instead.
     */
    caCert: GLib.Bytes
    /**
     * The password used to access the CA certificate stored in
     * #NMSetting8021x:ca-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    ca_cert_password: string
    /**
     * The password used to access the CA certificate stored in
     * #NMSetting8021x:ca-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    caCertPassword: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:ca-cert-password property.
     */
    ca_cert_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:ca-cert-password property.
     */
    caCertPasswordFlags: SettingSecretFlags
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     * 
     * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
     * path is an existing directory, then this setting is ignored.
     */
    ca_path: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     * 
     * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
     * path is an existing directory, then this setting is ignored.
     */
    caPath: string
    /**
     * Contains the client certificate if used by the EAP method specified in
     * the #NMSetting8021x:eap property.
     * 
     * Certificate data is specified using a "scheme"; two are currently
     * supported: blob and path. When using the blob scheme (which is backwards
     * compatible with NM 0.7.x) this property should be set to the
     * certificate's DER encoded data. When using the path scheme, this property
     * should be set to the full UTF-8 encoded path of the certificate, prefixed
     * with the string "file://" and ending with a terminating NUL byte.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_client_cert() function instead.
     */
    client_cert: GLib.Bytes
    /**
     * Contains the client certificate if used by the EAP method specified in
     * the #NMSetting8021x:eap property.
     * 
     * Certificate data is specified using a "scheme"; two are currently
     * supported: blob and path. When using the blob scheme (which is backwards
     * compatible with NM 0.7.x) this property should be set to the
     * certificate's DER encoded data. When using the path scheme, this property
     * should be set to the full UTF-8 encoded path of the certificate, prefixed
     * with the string "file://" and ending with a terminating NUL byte.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_client_cert() function instead.
     */
    clientCert: GLib.Bytes
    /**
     * The password used to access the client certificate stored in
     * #NMSetting8021x:client-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    client_cert_password: string
    /**
     * The password used to access the client certificate stored in
     * #NMSetting8021x:client-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    clientCertPassword: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:client-cert-password property.
     */
    client_cert_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:client-cert-password property.
     */
    clientCertPasswordFlags: SettingSecretFlags
    /**
     * Constraint for server domain name. If set, this list of FQDNs is used as
     * a match requirement for dNSName element(s) of the certificate presented
     * by the authentication server.  If a matching dNSName is found, this
     * constraint is met.  If no dNSName values are present, this constraint is
     * matched against SubjectName CN using the same comparison.
     * Multiple valid FQDNs can be passed as a ";" delimited list.
     */
    domain_match: string
    /**
     * Constraint for server domain name. If set, this list of FQDNs is used as
     * a match requirement for dNSName element(s) of the certificate presented
     * by the authentication server.  If a matching dNSName is found, this
     * constraint is met.  If no dNSName values are present, this constraint is
     * matched against SubjectName CN using the same comparison.
     * Multiple valid FQDNs can be passed as a ";" delimited list.
     */
    domainMatch: string
    /**
     * Constraint for server domain name. If set, this FQDN is used as a suffix
     * match requirement for dNSName element(s) of the certificate presented by
     * the authentication server.  If a matching dNSName is found, this
     * constraint is met.  If no dNSName values are present, this constraint is
     * matched against SubjectName CN using same suffix match comparison.
     * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
     * list.
     */
    domain_suffix_match: string
    /**
     * Constraint for server domain name. If set, this FQDN is used as a suffix
     * match requirement for dNSName element(s) of the certificate presented by
     * the authentication server.  If a matching dNSName is found, this
     * constraint is met.  If no dNSName values are present, this constraint is
     * matched against SubjectName CN using same suffix match comparison.
     * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
     * list.
     */
    domainSuffixMatch: string
    /**
     * The allowed EAP method to be used when authenticating to the network with
     * 802.1x.  Valid methods are: "leap", "md5", "tls", "peap", "ttls", "pwd",
     * and "fast".  Each method requires different configuration using the
     * properties of this setting; refer to wpa_supplicant documentation for the
     * allowed combinations.
     */
    eap: string[]
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity: string
    /**
     * Whether the 802.1X authentication is optional. If %TRUE, the activation
     * will continue even after a timeout or an authentication failure. Setting
     * the property to %TRUE is currently allowed only for Ethernet connections.
     * If set to %FALSE, the activation can continue only after a successful
     * authentication.
     */
    optional: boolean
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pac_file: string
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pacFile: string
    /**
     * UTF-8 encoded password used for EAP authentication methods. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    passwordFlags: SettingSecretFlags
    /**
     * Password used for EAP authentication methods, given as a byte array to
     * allow passwords in other encodings than UTF-8 to be used. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password_raw: GLib.Bytes
    /**
     * Password used for EAP authentication methods, given as a byte array to
     * allow passwords in other encodings than UTF-8 to be used. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    passwordRaw: GLib.Bytes
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    password_raw_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    passwordRawFlags: SettingSecretFlags
    /**
     * Specifies authentication flags to use in "phase 1" outer
     * authentication using #NMSetting8021xAuthFlags options.
     * The individual TLS versions can be explicitly disabled. TLS time checks
     * can be also disabled. If a certain TLS disable flag is not
     * set, it is up to the supplicant to allow or forbid it. The TLS options
     * map to tls_disable_tlsv1_x and tls_disable_time_checks settings.
     * See the wpa_supplicant documentation for more details.
     */
    phase1_auth_flags: number
    /**
     * Specifies authentication flags to use in "phase 1" outer
     * authentication using #NMSetting8021xAuthFlags options.
     * The individual TLS versions can be explicitly disabled. TLS time checks
     * can be also disabled. If a certain TLS disable flag is not
     * set, it is up to the supplicant to allow or forbid it. The TLS options
     * map to tls_disable_tlsv1_x and tls_disable_time_checks settings.
     * See the wpa_supplicant documentation for more details.
     */
    phase1AuthFlags: number
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when
     * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * Recognized values are "0" (disabled), "1" (allow unauthenticated
     * provisioning), "2" (allow authenticated provisioning), and "3" (allow
     * both authenticated and unauthenticated provisioning).  See the
     * wpa_supplicant documentation for more details.
     */
    phase1_fast_provisioning: string
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when
     * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * Recognized values are "0" (disabled), "1" (allow unauthenticated
     * provisioning), "2" (allow authenticated provisioning), and "3" (allow
     * both authenticated and unauthenticated provisioning).  See the
     * wpa_supplicant documentation for more details.
     */
    phase1FastProvisioning: string
    /**
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1_peaplabel: string
    /**
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1Peaplabel: string
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in
     * the #NMSetting8021x:eap property.  When unset, the version reported by
     * the server will be used.  Sometimes when using older RADIUS servers, it
     * is necessary to force the client to use a particular PEAP version.  To do
     * so, this property may be set to "0" or "1" to force that specific PEAP
     * version.
     */
    phase1_peapver: string
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in
     * the #NMSetting8021x:eap property.  When unset, the version reported by
     * the server will be used.  Sometimes when using older RADIUS servers, it
     * is necessary to force the client to use a particular PEAP version.  To do
     * so, this property may be set to "0" or "1" to force that specific PEAP
     * version.
     */
    phase1Peapver: string
    /**
     * List of strings to be matched against the altSubjectName of the
     * certificate presented by the authentication server during the inner
     * "phase 2" authentication. If the list is empty, no verification of the
     * server certificate's altSubjectName is performed.
     */
    phase2_altsubject_matches: string[]
    /**
     * List of strings to be matched against the altSubjectName of the
     * certificate presented by the authentication server during the inner
     * "phase 2" authentication. If the list is empty, no verification of the
     * server certificate's altSubjectName is performed.
     */
    phase2AltsubjectMatches: string[]
    /**
     * Specifies the allowed "phase 2" inner authentication method when an EAP
     * method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap
     * property.  For TTLS this property selects one of the supported non-EAP
     * inner methods: "pap", "chap", "mschap", "mschapv2" while
     * #NMSetting8021x:phase2-autheap selects an EAP inner method.  For PEAP
     * this selects an inner EAP method, one of: "gtc", "otp", "md5" and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     * Both #NMSetting8021x:phase2-auth and #NMSetting8021x:phase2-autheap cannot
     * be specified.
     */
    phase2_auth: string
    /**
     * Specifies the allowed "phase 2" inner authentication method when an EAP
     * method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap
     * property.  For TTLS this property selects one of the supported non-EAP
     * inner methods: "pap", "chap", "mschap", "mschapv2" while
     * #NMSetting8021x:phase2-autheap selects an EAP inner method.  For PEAP
     * this selects an inner EAP method, one of: "gtc", "otp", "md5" and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     * Both #NMSetting8021x:phase2-auth and #NMSetting8021x:phase2-autheap cannot
     * be specified.
     */
    phase2Auth: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication method
     * when TTLS is specified in the #NMSetting8021x:eap property.  Recognized
     * EAP-based "phase 2" methods are "md5", "mschapv2", "otp", "gtc", and
     * "tls". Each "phase 2" inner method requires specific parameters for
     * successful authentication; see the wpa_supplicant documentation for
     * more details.
     */
    phase2_autheap: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication method
     * when TTLS is specified in the #NMSetting8021x:eap property.  Recognized
     * EAP-based "phase 2" methods are "md5", "mschapv2", "otp", "gtc", and
     * "tls". Each "phase 2" inner method requires specific parameters for
     * successful authentication; see the wpa_supplicant documentation for
     * more details.
     */
    phase2Autheap: string
    /**
     * Contains the "phase 2" CA certificate if used by the EAP method specified
     * in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap
     * properties.
     * 
     * Certificate data is specified using a "scheme"; three are currently
     * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
     * should be set to the certificate's DER encoded data. When using the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * certificate, prefixed with the string "file://" and ending with a terminating
     * NUL byte.
     * This property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Note that enabling NMSetting8021x:system-ca-certs will override this
     * setting to use the built-in path, if the built-in path is not a directory.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_ca_cert() function instead.
     */
    phase2_ca_cert: GLib.Bytes
    /**
     * Contains the "phase 2" CA certificate if used by the EAP method specified
     * in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap
     * properties.
     * 
     * Certificate data is specified using a "scheme"; three are currently
     * supported: blob, path and pkcs#11 URL. When using the blob scheme this property
     * should be set to the certificate's DER encoded data. When using the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * certificate, prefixed with the string "file://" and ending with a terminating
     * NUL byte.
     * This property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Note that enabling NMSetting8021x:system-ca-certs will override this
     * setting to use the built-in path, if the built-in path is not a directory.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_ca_cert() function instead.
     */
    phase2CaCert: GLib.Bytes
    /**
     * The password used to access the "phase2" CA certificate stored in
     * #NMSetting8021x:phase2-ca-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    phase2_ca_cert_password: string
    /**
     * The password used to access the "phase2" CA certificate stored in
     * #NMSetting8021x:phase2-ca-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    phase2CaCertPassword: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-ca-cert-password property.
     */
    phase2_ca_cert_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-ca-cert-password property.
     */
    phase2CaCertPasswordFlags: SettingSecretFlags
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     * 
     * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
     * path is an existing directory, then this setting is ignored.
     */
    phase2_ca_path: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     * 
     * If NMSetting8021x:system-ca-certs is enabled and the built-in CA
     * path is an existing directory, then this setting is ignored.
     */
    phase2CaPath: string
    /**
     * Contains the "phase 2" client certificate if used by the EAP method
     * specified in the #NMSetting8021x:phase2-auth or
     * #NMSetting8021x:phase2-autheap properties.
     * 
     * Certificate data is specified using a "scheme"; two are currently
     * supported: blob and path. When using the blob scheme (which is backwards
     * compatible with NM 0.7.x) this property should be set to the
     * certificate's DER encoded data. When using the path scheme, this property
     * should be set to the full UTF-8 encoded path of the certificate, prefixed
     * with the string "file://" and ending with a terminating NUL byte. This
     * property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_client_cert() function instead.
     */
    phase2_client_cert: GLib.Bytes
    /**
     * Contains the "phase 2" client certificate if used by the EAP method
     * specified in the #NMSetting8021x:phase2-auth or
     * #NMSetting8021x:phase2-autheap properties.
     * 
     * Certificate data is specified using a "scheme"; two are currently
     * supported: blob and path. When using the blob scheme (which is backwards
     * compatible with NM 0.7.x) this property should be set to the
     * certificate's DER encoded data. When using the path scheme, this property
     * should be set to the full UTF-8 encoded path of the certificate, prefixed
     * with the string "file://" and ending with a terminating NUL byte. This
     * property can be unset even if the EAP method supports CA certificates,
     * but this allows man-in-the-middle attacks and is NOT recommended.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_client_cert() function instead.
     */
    phase2ClientCert: GLib.Bytes
    /**
     * The password used to access the "phase2" client certificate stored in
     * #NMSetting8021x:phase2-client-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    phase2_client_cert_password: string
    /**
     * The password used to access the "phase2" client certificate stored in
     * #NMSetting8021x:phase2-client-cert property. Only makes sense if the certificate
     * is stored on a PKCS#&lt;!-- --&gt;11 token that requires a login.
     */
    phase2ClientCertPassword: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-client-cert-password property.
     */
    phase2_client_cert_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-client-cert-password property.
     */
    phase2ClientCertPasswordFlags: SettingSecretFlags
    /**
     * Constraint for server domain name. If set, this list of FQDNs is used as
     * a match requirement for dNSName element(s) of the certificate presented
     * by the authentication server during the inner "phase 2" authentication.
     * If a matching dNSName is found, this constraint is met.  If no dNSName
     * values are present, this constraint is matched against SubjectName CN
     * using the same comparison.
     * Multiple valid FQDNs can be passed as a ";" delimited list.
     */
    phase2_domain_match: string
    /**
     * Constraint for server domain name. If set, this list of FQDNs is used as
     * a match requirement for dNSName element(s) of the certificate presented
     * by the authentication server during the inner "phase 2" authentication.
     * If a matching dNSName is found, this constraint is met.  If no dNSName
     * values are present, this constraint is matched against SubjectName CN
     * using the same comparison.
     * Multiple valid FQDNs can be passed as a ";" delimited list.
     */
    phase2DomainMatch: string
    /**
     * Constraint for server domain name. If set, this FQDN is used as a suffix
     * match requirement for dNSName element(s) of the certificate presented by
     * the authentication server during the inner "phase 2" authentication.  If
     * a matching dNSName is found, this constraint is met.  If no dNSName
     * values are present, this constraint is matched against SubjectName CN
     * using same suffix match comparison.
     * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
     * list.
     */
    phase2_domain_suffix_match: string
    /**
     * Constraint for server domain name. If set, this FQDN is used as a suffix
     * match requirement for dNSName element(s) of the certificate presented by
     * the authentication server during the inner "phase 2" authentication.  If
     * a matching dNSName is found, this constraint is met.  If no dNSName
     * values are present, this constraint is matched against SubjectName CN
     * using same suffix match comparison.
     * Since version 1.24, multiple valid FQDNs can be passed as a ";" delimited
     * list.
     */
    phase2DomainSuffixMatch: string
    /**
     * Contains the "phase 2" inner private key when the
     * #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap property is
     * set to "tls".
     * 
     * Key data is specified using a "scheme"; two are currently supported: blob
     * and path. When using the blob scheme and private keys, this property
     * should be set to the key's encrypted PEM encoded data. When using private
     * keys with the path scheme, this property should be set to the full UTF-8
     * encoded path of the key, prefixed with the string "file://" and ending
     * with a terminating NUL byte. When using PKCS#&lt;!-- --&gt;12 format private
     * keys and the blob scheme, this property should be set to the
     * PKCS#&lt;!-- --&gt;12 data and the #NMSetting8021x:phase2-private-key-password
     * property must be set to password used to decrypt the PKCS#&lt;!-- --&gt;12
     * certificate and key. When using PKCS#&lt;!-- --&gt;12 files and the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * key, prefixed with the string "file://" and ending with a terminating
     * NUL byte, and as with the blob scheme the
     * #NMSetting8021x:phase2-private-key-password property must be set to the
     * password used to decode the PKCS#&lt;!-- --&gt;12 private key and certificate.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_private_key() function instead.
     */
    phase2_private_key: GLib.Bytes
    /**
     * Contains the "phase 2" inner private key when the
     * #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap property is
     * set to "tls".
     * 
     * Key data is specified using a "scheme"; two are currently supported: blob
     * and path. When using the blob scheme and private keys, this property
     * should be set to the key's encrypted PEM encoded data. When using private
     * keys with the path scheme, this property should be set to the full UTF-8
     * encoded path of the key, prefixed with the string "file://" and ending
     * with a terminating NUL byte. When using PKCS#&lt;!-- --&gt;12 format private
     * keys and the blob scheme, this property should be set to the
     * PKCS#&lt;!-- --&gt;12 data and the #NMSetting8021x:phase2-private-key-password
     * property must be set to password used to decrypt the PKCS#&lt;!-- --&gt;12
     * certificate and key. When using PKCS#&lt;!-- --&gt;12 files and the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * key, prefixed with the string "file://" and ending with a terminating
     * NUL byte, and as with the blob scheme the
     * #NMSetting8021x:phase2-private-key-password property must be set to the
     * password used to decode the PKCS#&lt;!-- --&gt;12 private key and certificate.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_phase2_private_key() function instead.
     */
    phase2PrivateKey: GLib.Bytes
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#&lt;!-- --&gt;12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_phase2_private_key()
     * function.
     */
    phase2_private_key_password: string
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#&lt;!-- --&gt;12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_phase2_private_key()
     * function.
     */
    phase2PrivateKeyPassword: string
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2_private_key_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2PrivateKeyPasswordFlags: SettingSecretFlags
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed. This property provides little security,
     * if any, and should not be used.
     */
    phase2_subject_match: string
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed. This property provides little security,
     * if any, and should not be used.
     */
    phase2SubjectMatch: string
    /**
     * PIN used for EAP authentication methods.
     */
    pin: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pin_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pinFlags: SettingSecretFlags
    /**
     * Contains the private key when the #NMSetting8021x:eap property is set to
     * "tls".
     * 
     * Key data is specified using a "scheme"; two are currently supported: blob
     * and path. When using the blob scheme and private keys, this property
     * should be set to the key's encrypted PEM encoded data. When using private
     * keys with the path scheme, this property should be set to the full UTF-8
     * encoded path of the key, prefixed with the string "file://" and ending
     * with a terminating NUL byte. When using PKCS#&lt;!-- --&gt;12 format private
     * keys and the blob scheme, this property should be set to the
     * PKCS#&lt;!-- --&gt;12 data and the #NMSetting8021x:private-key-password
     * property must be set to password used to decrypt the PKCS#&lt;!-- --&gt;12
     * certificate and key. When using PKCS#&lt;!-- --&gt;12 files and the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * key, prefixed with the string "file://" and ending with a terminating
     * NUL byte, and as with the blob scheme the "private-key-password" property
     * must be set to the password used to decode the PKCS#&lt;!-- --&gt;12 private
     * key and certificate.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_private_key() function instead.
     * 
     * WARNING: #NMSetting8021x:private-key is not a "secret" property, and thus
     * unencrypted private key data using the BLOB scheme may be readable by
     * unprivileged users.  Private keys should always be encrypted with a
     * private key password to prevent unauthorized access to unencrypted
     * private key data.
     */
    private_key: GLib.Bytes
    /**
     * Contains the private key when the #NMSetting8021x:eap property is set to
     * "tls".
     * 
     * Key data is specified using a "scheme"; two are currently supported: blob
     * and path. When using the blob scheme and private keys, this property
     * should be set to the key's encrypted PEM encoded data. When using private
     * keys with the path scheme, this property should be set to the full UTF-8
     * encoded path of the key, prefixed with the string "file://" and ending
     * with a terminating NUL byte. When using PKCS#&lt;!-- --&gt;12 format private
     * keys and the blob scheme, this property should be set to the
     * PKCS#&lt;!-- --&gt;12 data and the #NMSetting8021x:private-key-password
     * property must be set to password used to decrypt the PKCS#&lt;!-- --&gt;12
     * certificate and key. When using PKCS#&lt;!-- --&gt;12 files and the path
     * scheme, this property should be set to the full UTF-8 encoded path of the
     * key, prefixed with the string "file://" and ending with a terminating
     * NUL byte, and as with the blob scheme the "private-key-password" property
     * must be set to the password used to decode the PKCS#&lt;!-- --&gt;12 private
     * key and certificate.
     * 
     * Setting this property directly is discouraged; use the
     * nm_setting_802_1x_set_private_key() function instead.
     * 
     * WARNING: #NMSetting8021x:private-key is not a "secret" property, and thus
     * unencrypted private key data using the BLOB scheme may be readable by
     * unprivileged users.  Private keys should always be encrypted with a
     * private key password to prevent unauthorized access to unencrypted
     * private key data.
     */
    privateKey: GLib.Bytes
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#&lt;!-- --&gt;12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    private_key_password: string
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#&lt;!-- --&gt;12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    privateKeyPassword: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    private_key_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    privateKeyPasswordFlags: SettingSecretFlags
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed. This property
     * provides little security, if any, and should not be used.
     */
    subject_match: string
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed. This property
     * provides little security, if any, and should not be used.
     */
    subjectMatch: string
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties. If the path provided with
     * --system-ca-path is rather a file name (bundle of trusted CA certificates),
     * it overrides #NMSetting8021x:ca-cert and #NMSetting8021x:phase2-ca-cert
     * properties instead (sets ca_cert/ca_cert2 options for wpa_supplicant).
     */
    system_ca_certs: boolean
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties. If the path provided with
     * --system-ca-path is rather a file name (bundle of trusted CA certificates),
     * it overrides #NMSetting8021x:ca-cert and #NMSetting8021x:phase2-ca-cert
     * properties instead (sets ca_cert/ca_cert2 options for wpa_supplicant).
     */
    systemCaCerts: boolean

    // Constructors of NM-1.0.Setting8021x


static ["new"](): Setting8021x;

    // Owm methods of NM-1.0.Setting8021x

    /**
     * Determines and verifies the blob type.
     * When setting certificate properties of NMSetting8021x
     * the blob must be not UNKNOWN (or NULL).
     * @param pdata the data pointer
     * @param length the length of the data
     */
    static check_cert_scheme(pdata: (any | null), length: number): Setting8021xCKScheme

    // Owm methods of NM-1.0.Setting8021x

    /**
     * Adds an allowed alternate subject name match.  Until at least one
     * match is added, the altSubjectName of the remote authentication
     * server is not verified.
     * @param altsubject_match the altSubjectName to allow for this connection
     * @returns %TRUE if the alternative subject name match was  successfully added, %FALSE if it was already allowed.
     */
    add_altsubject_match(altsubject_match: string): boolean
    /**
     * Adds an allowed EAP method.  The setting is not valid until at least one
     * EAP method has been added.  See #NMSetting8021x:eap property for a list of
     * allowed EAP methods.
     * @param eap the name of the EAP method to allow for this connection
     * @returns %TRUE if the EAP method was successfully added, %FALSE if it was  not a valid method or if it was already allowed.
     */
    add_eap_method(eap: string): boolean
    /**
     * Adds an allowed alternate subject name match for "phase 2".  Until
     * at least one match is added, the altSubjectName of the "phase 2"
     * remote authentication server is not verified.
     * @param phase2_altsubject_match the "phase 2" altSubjectName to allow for this connection
     * @returns %TRUE if the "phase 2" alternative subject name match was  successfully added, %FALSE if it was already allowed.
     */
    add_phase2_altsubject_match(phase2_altsubject_match: string): boolean
    /**
     * Clears all altSubjectName matches.
     */
    clear_altsubject_matches(): void
    /**
     * Clears all allowed EAP methods.
     */
    clear_eap_methods(): void
    /**
     * Clears all "phase 2" altSubjectName matches.
     */
    clear_phase2_altsubject_matches(): void
    /**
     * Returns the altSubjectName match at index `i`.
     * @param i the zero-based index of the array of altSubjectName matches
     * @returns the altSubjectName match at index @i
     */
    get_altsubject_match(i: number): string
    /**
     * Returns the anonymous identifier used by some EAP methods (like TTLS) to
     * authenticate the user in the outer unencrypted "phase 1" authentication.  The
     * inner "phase 2" authentication will use the #NMSetting8021x:identity in
     * a secure form, if applicable for that EAP method.
     * @returns the anonymous identifier
     */
    get_anonymous_identity(): string
    /**
     * Returns the value contained in the #NMSetting8021x:auth-timeout property.
     * @returns the configured authentication timeout in seconds. Zero means the global default value.
     */
    get_auth_timeout(): number
    /**
     * Returns the CA certificate blob if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns the CA certificate data
     */
    get_ca_cert_blob(): GLib.Bytes
    get_ca_cert_password(): string
    get_ca_cert_password_flags(): SettingSecretFlags
    /**
     * Returns the CA certificate path if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns path to the CA certificate file
     */
    get_ca_cert_path(): string
    /**
     * Returns the scheme used to store the CA certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_ca_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_ca_cert_path();
     * if %NM_SETTING_802_1X_CK_SCHEME_PKCS11, use nm_setting_802_1x_get_ca_cert_uri().
     * @returns scheme used to store the CA certificate (blob or path)
     */
    get_ca_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the CA certificate URI analogously to
     * nm_setting_802_1x_get_ca_cert_blob() and
     * nm_setting_802_1x_get_ca_cert_path().
     * 
     * Currently, it's limited to PKCS#11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_ca_cert_uri(): string
    /**
     * Returns the path of the CA certificate directory if previously set.  Systems
     * will often have a directory that contains multiple individual CA certificates
     * which the supplicant can then add to the verification chain.  This may be
     * used in addition to the #NMSetting8021x:ca-cert property to add more CA
     * certificates for verifying the network to client.
     * @returns the CA certificate directory path
     */
    get_ca_path(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns the client certificate data
     */
    get_client_cert_blob(): GLib.Bytes
    get_client_cert_password(): string
    get_client_cert_password_flags(): SettingSecretFlags
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the client certificate file
     */
    get_client_cert_path(): string
    /**
     * Returns the scheme used to store the client certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_client_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_client_cert_path();
     * if %NM_SETTING_802_1X_CK_SCHEME_PKCS11, use nm_setting_802_1x_get_client_cert_uri().
     * @returns scheme used to store the client certificate (blob or path)
     */
    get_client_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the client certificate URI analogously to
     * nm_setting_802_1x_get_client_cert_blob() and
     * nm_setting_802_1x_get_client_cert_path().
     * 
     * Currently, it's limited to PKCS#11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_client_cert_uri(): string
    get_domain_match(): string
    get_domain_suffix_match(): string
    /**
     * Returns the name of the allowed EAP method at index `i`.
     * @param i the index of the EAP method name to return
     * @returns the name of the allowed EAP method at index @i
     */
    get_eap_method(i: number): string
    /**
     * Returns the identifier used by some EAP methods (like TLS) to
     * authenticate the user.  Often this is a username or login name.
     * @returns the user identifier
     */
    get_identity(): string
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:altsubject-matches property of this setting.
     * @returns the number of altsubject-matches entries.
     */
    get_num_altsubject_matches(): number
    /**
     * Returns the number of eap methods allowed for use when connecting to the
     * network.  Generally only one EAP method is used.  Use the functions
     * nm_setting_802_1x_get_eap_method(), nm_setting_802_1x_add_eap_method(),
     * and nm_setting_802_1x_remove_eap_method() for adding, removing, and retrieving
     * allowed EAP methods.
     * @returns the number of allowed EAP methods
     */
    get_num_eap_methods(): number
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:phase2-altsubject-matches property of this setting.
     * @returns the number of phase2-altsubject-matches entries.
     */
    get_num_phase2_altsubject_matches(): number
    /**
     * Returns the value contained in the #NMSetting8021x:optional property.
     * @returns %TRUE if the activation should proceed even when the 802.1X     authentication fails; %FALSE otherwise
     */
    get_optional(): boolean
    /**
     * Returns the file containing PAC credentials used by EAP-FAST method.
     * @returns the PAC file
     */
    get_pac_file(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_password_raw(): GLib.Bytes
    get_password_raw_flags(): SettingSecretFlags
    get_phase1_auth_flags(): Setting8021xAuthFlags
    get_phase1_fast_provisioning(): string
    get_phase1_peaplabel(): string
    get_phase1_peapver(): string
    /**
     * Returns the "phase 2" altSubjectName match at index `i`.
     * @param i the zero-based index of the array of "phase 2" altSubjectName matches
     * @returns the "phase 2" altSubjectName match at index @i
     */
    get_phase2_altsubject_match(i: number): string
    get_phase2_auth(): string
    get_phase2_autheap(): string
    /**
     * Returns the "phase 2" CA certificate blob if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns the "phase 2" CA certificate data
     */
    get_phase2_ca_cert_blob(): GLib.Bytes
    get_phase2_ca_cert_password(): string
    get_phase2_ca_cert_password_flags(): SettingSecretFlags
    /**
     * Returns the "phase 2" CA certificate path if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns path to the "phase 2" CA certificate file
     */
    get_phase2_ca_cert_path(): string
    /**
     * Returns the scheme used to store the "phase 2" CA certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_ca_cert_blob(); if %NM_SETTING_802_1X_CK_SCHEME_PATH,
     * use nm_setting_802_1x_get_ca_cert_path(); if %NM_SETTING_802_1X_CK_SCHEME_PKCS11,
     * use nm_setting_802_1x_get_ca_cert_uri().
     * @returns scheme used to store the "phase 2" CA certificate (blob or path)
     */
    get_phase2_ca_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the "phase 2" CA certificate URI analogously to
     * nm_setting_802_1x_get_phase2_ca_cert_blob() and
     * nm_setting_802_1x_get_phase2_ca_cert_path().
     * 
     * Currently, it's limited to PKCS#&lt;!-- --&gt;11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_phase2_ca_cert_uri(): string
    /**
     * Returns the path of the "phase 2" CA certificate directory if previously set.
     * Systems will often have a directory that contains multiple individual CA
     * certificates which the supplicant can then add to the verification chain.
     * This may be used in addition to the #NMSetting8021x:phase2-ca-cert property
     * to add more CA certificates for verifying the network to client.
     * @returns the "phase 2" CA certificate directory path
     */
    get_phase2_ca_path(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns the "phase 2" client certificate data
     */
    get_phase2_client_cert_blob(): GLib.Bytes
    get_phase2_client_cert_password(): string
    get_phase2_client_cert_password_flags(): SettingSecretFlags
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the "phase 2" client certificate file
     */
    get_phase2_client_cert_path(): string
    /**
     * Returns the scheme used to store the "phase 2" client certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PKCS11, use
     * nm_setting_802_1x_get_client_cert_uri().
     * @returns scheme used to store the "phase 2" client certificate (blob or path)
     */
    get_phase2_client_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the "phase 2" client certificate URI analogously to
     * nm_setting_802_1x_get_phase2_ca_cert_blob() and
     * nm_setting_802_1x_get_phase2_ca_cert_path().
     * 
     * Currently, it's limited to PKCS#&lt;!-- --&gt;11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_phase2_client_cert_uri(): string
    get_phase2_domain_match(): string
    get_phase2_domain_suffix_match(): string
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * WARNING: the phase2 private key property is not a "secret" property, and thus
     * unencrypted private key data may be readable by unprivileged users.  Private
     * keys should always be encrypted with a private key password.
     * @returns the "phase 2" private key data
     */
    get_phase2_private_key_blob(): GLib.Bytes
    get_phase2_private_key_format(): Setting8021xCKFormat
    get_phase2_private_key_password(): string
    get_phase2_private_key_password_flags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the "phase 2" private key file
     */
    get_phase2_private_key_path(): string
    /**
     * Returns the scheme used to store the "phase 2" private key.  If the returned
     * scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PKCS11, use
     * nm_setting_802_1x_get_client_cert_uri().
     * @returns scheme used to store the "phase 2" private key (blob or path)
     */
    get_phase2_private_key_scheme(): Setting8021xCKScheme
    /**
     * Returns the "phase 2" private key URI analogously to
     * nm_setting_802_1x_get_phase2_private_key_blob() and
     * nm_setting_802_1x_get_phase2_private_key_path().
     * 
     * Currently, it's limited to PKCS#&lt;!-- --&gt;11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_phase2_private_key_uri(): string
    get_phase2_subject_match(): string
    get_pin(): string
    get_pin_flags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * WARNING: the private key property is not a "secret" property, and thus
     * unencrypted private key data may be readable by unprivileged users.  Private
     * keys should always be encrypted with a private key password.
     * @returns the private key data
     */
    get_private_key_blob(): GLib.Bytes
    get_private_key_format(): Setting8021xCKFormat
    get_private_key_password(): string
    get_private_key_password_flags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the private key file
     */
    get_private_key_path(): string
    /**
     * Returns the scheme used to store the private key.  If the returned scheme is
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PKCS11, use
     * nm_setting_802_1x_get_client_cert_uri().
     * @returns scheme used to store the private key (blob or path)
     */
    get_private_key_scheme(): Setting8021xCKScheme
    /**
     * Returns the private key URI analogously to
     * nm_setting_802_1x_get_private_key_blob() and
     * nm_setting_802_1x_get_private_key_path().
     * 
     * Currently, it's limited to PKCS#&lt;!-- --&gt;11 URIs ('pkcs11' scheme as defined by RFC
     * 7512), but may be extended to other schemes in future (such as 'file' URIs
     * for local files and 'data' URIs for inline certificate data).
     * @returns the URI string
     */
    get_private_key_uri(): string
    get_subject_match(): string
    /**
     * Sets the #NMSetting8021x:system-ca-certs property. The
     * #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path
     * properties are ignored if the #NMSetting8021x:system-ca-certs property is
     * %TRUE, in which case a system-wide CA certificate directory specified at
     * compile time (using the --system-ca-path configure option) is used in place
     * of these properties.
     * @returns %TRUE if a system CA certificate path should be used, %FALSE if not
     */
    get_system_ca_certs(): boolean
    /**
     * Removes the allowed altSubjectName at the specified index.
     * @param i the index of the altSubjectName match to remove
     */
    remove_altsubject_match(i: number): void
    /**
     * Removes the allowed altSubjectName `altsubject_match`.
     * @param altsubject_match the altSubjectName to remove
     * @returns %TRUE if the alternative subject name match was found and removed,          %FALSE if it was not.
     */
    remove_altsubject_match_by_value(altsubject_match: string): boolean
    /**
     * Removes the allowed EAP method at the specified index.
     * @param i the index of the EAP method to remove
     */
    remove_eap_method(i: number): void
    /**
     * Removes the allowed EAP method `method`.
     * @param eap the name of the EAP method to remove
     * @returns %TRUE if the EAP method was founs and removed, %FALSE if it was not.
     */
    remove_eap_method_by_value(eap: string): boolean
    /**
     * Removes the allowed "phase 2" altSubjectName at the specified index.
     * @param i the index of the "phase 2" altSubjectName match to remove
     */
    remove_phase2_altsubject_match(i: number): void
    /**
     * Removes the allowed "phase 2" altSubjectName `phase2`_altsubject_match.
     * @param phase2_altsubject_match the "phase 2" altSubjectName to remove
     * @returns %TRUE if the alternative subject name match for "phase 2" was found and removed,          %FALSE if it was not.
     */
    remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:ca-cert property
     * with the raw certificate data if using the %NM_SETTING_802_1X_CK_SCHEME_BLOB
     * scheme, or with the path to the certificate file if using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the CA certificate   file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the client   certificate file (PEM, DER, or PKCS#&lt;!-- --&gt;12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any @scheme clears the client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-ca-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" CA   certificate file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the "phase2" CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_phase2_ca_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" client   certificate file (PEM, DER, or PKCS#&lt;!-- --&gt;12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any @scheme clears the "phase2" client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_phase2_client_cert(value: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * This function reads a private key from disk and sets the
     * #NMSetting8021x:phase2-private-key property with the private key file data if
     * using the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the
     * private key file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * If `password` is given, this function attempts to decrypt the private key to
     * verify that `password` is correct, and if it is, updates the
     * #NMSetting8021x:phase2-private-key-password property with the given
     * `password`.  If the decryption is unsuccessful, %FALSE is returned, `error` is
     * set, and no internal data is changed.  If no `password` is given, the private
     * key is assumed to be valid, no decryption is performed, and the password may
     * be set at a later time.
     * 
     * WARNING: the "phase2" private key property is not a "secret" property, and
     * thus unencrypted private key data using the BLOB scheme may be readable by
     * unprivileged users.  Private keys should always be encrypted with a private
     * key password to prevent unauthorized access to unencrypted private key data.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" private   key file (PEM, DER, or PKCS#&lt;!-- --&gt;12 format).  The path must be UTF-8 encoded;   use g_filename_to_utf8() to convert if needed.  Passing %NULL with any   @scheme clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param out_format on successful return, the type of the private key added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_phase2_private_key(value: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * This function reads a private key from disk and sets the
     * #NMSetting8021x:private-key property with the private key file data if using
     * the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the private
     * key file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * If `password` is given, this function attempts to decrypt the private key to
     * verify that `password` is correct, and if it is, updates the
     * #NMSetting8021x:private-key-password property with the given `password`.  If
     * the decryption is unsuccessful, %FALSE is returned, `error` is set, and no
     * internal data is changed.  If no `password` is given, the private key is
     * assumed to be valid, no decryption is performed, and the password may be set
     * at a later time.
     * 
     * WARNING: the private key property is not a "secret" property, and thus
     * unencrypted private key data using the BLOB scheme may be readable by
     * unprivileged users.  Private keys should always be encrypted with a private
     * key password to prevent unauthorized access to unencrypted private key data.
     * @param value when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the private key file   (PEM, DER, or PKCS#&lt;!-- --&gt;12 format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param out_format on successful return, the type of the private key added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    set_private_key(value: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
}

module SettingAdsl {

    // Constructor properties interface

}

/**
 * ADSL Settings
 */
class SettingAdsl extends Setting {

    // Own properties of NM-1.0.SettingAdsl

    /**
     * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
     */
    encapsulation: string
    /**
     * Password used to authenticate with the ADSL service.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSettingAdsl:password property.
     */
    password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingAdsl:password property.
     */
    passwordFlags: SettingSecretFlags
    /**
     * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
     */
    protocol: string
    /**
     * Username used to authenticate with the ADSL service.
     */
    username: string
    /**
     * VCI of ADSL connection
     */
    vci: number
    /**
     * VPI of ADSL connection
     */
    vpi: number

    // Constructors of NM-1.0.SettingAdsl


static ["new"](): SettingAdsl;

    // Owm methods of NM-1.0.SettingAdsl

    get_encapsulation(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_protocol(): string
    get_username(): string
    get_vci(): number
    get_vpi(): number
}

module SettingBluetooth {

    // Constructor properties interface

}

/**
 * Bluetooth Settings
 */
class SettingBluetooth extends Setting {

    // Own properties of NM-1.0.SettingBluetooth

    /**
     * The Bluetooth address of the device.
     */
    bdaddr: string
    /**
     * Either "dun" for Dial-Up Networking connections or "panu" for Personal
     * Area Networking connections to devices supporting the NAP profile.
     */
    type: string

    // Constructors of NM-1.0.SettingBluetooth


static ["new"](): SettingBluetooth;

    // Owm methods of NM-1.0.SettingBluetooth

    /**
     * Gets the Bluetooth address of the remote device which this setting
     * describes a connection to.
     * @returns the Bluetooth address
     */
    get_bdaddr(): string
    /**
     * Returns the connection method for communicating with the remote device (i.e.
     * either DUN to a DUN-capable device or PANU to a NAP-capable device).
     * @returns the type, either %NM_SETTING_BLUETOOTH_TYPE_PANU, %NM_SETTING_BLUETOOTH_TYPE_NAP or %NM_SETTING_BLUETOOTH_TYPE_DUN
     */
    get_connection_type(): string
}

module SettingBond {

    // Constructor properties interface

}

/**
 * Bonding Settings
 */
class SettingBond extends Setting {

    // Own properties of NM-1.0.SettingBond

    /**
     * Dictionary of key/value pairs of bonding options.  Both keys and values
     * must be strings. Option names must contain only alphanumeric characters
     * (ie, [a-zA-Z0-9]).
     */
    options: GLib.HashTable<string, string>

    // Constructors of NM-1.0.SettingBond


static ["new"](): SettingBond;

    // Owm methods of NM-1.0.SettingBond

    /**
     * Checks whether `name` is a valid bond option and `value` is a valid value for
     * the `name`. If `value` is %NULL, the function only validates the option name.
     * @param name the name of the option to validate
     * @param value the value of the option to validate.
     */
    static validate_option(name: string, value?: (string | null)): boolean

    // Owm methods of NM-1.0.SettingBond

    /**
     * Add an option to the table. Adding a new name replaces any existing name/value pair
     * that may already exist.
     * @param name name for the option
     * @param value value for the option
     * @returns returns %FALSE if either @name or @value is %NULL, in that case the option is not set. Otherwise, the function does not fail and does not validate the arguments. All validation happens via nm_connection_verify() or do basic validation yourself with nm_setting_bond_validate_option(). Note: Before 1.30, libnm would perform basic validation of the name and the value via nm_setting_bond_validate_option() and reject the request by returning FALSE. Since 1.30, libnm no longer rejects any values as the setter is not supposed to perform validation.
     */
    add_option(name: string, value: string): boolean
    /**
     * Returns the number of options that should be set for this bond when it
     * is activated. This can be used to retrieve each option individually
     * using nm_setting_bond_get_option().
     * @returns the number of bonding options
     */
    get_num_options(): number
    /**
     * Given an index, return the value of the bonding option at that index.  Indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_bond_add_option() and nm_setting_bond_remove_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_bond_get_num_options() - 1
     * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
     */
    get_option(idx: number): boolean
    /**
     * Returns the value associated with the bonding option specified by
     * `name,` if it exists.
     * @param name the option name for which to retrieve the value
     * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
     */
    get_option_by_name(name: string): string
    get_option_default(name: string): string
    get_option_normalized(name: string): string
    /**
     * Returns a list of valid bond options.
     * 
     * The `setting` argument is unused and may be passed as %NULL.
     * @returns a %NULL-terminated array of strings of valid bond options.
     */
    get_valid_options(): (string[] | null)
    /**
     * Remove the bonding option referenced by `name` from the internal option
     * list.
     * @param name name of the option to remove
     * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
     */
    remove_option(name: string): boolean
}

module SettingBondPort {

    // Constructor properties interface

}

/**
 * Bond Port Settings
 */
class SettingBondPort extends Setting {

    // Own properties of NM-1.0.SettingBondPort

    /**
     * The port priority for bond active port re-selection during failover. A
     * higher number means a higher priority in selection. The primary port has
     * the highest priority. This option is only compatible with active-backup,
     * balance-tlb and balance-alb modes.
     */
    prio: number
    /**
     * The queue ID of this bond port. The maximum value of queue ID is
     * the number of TX queues currently active in device.
     */
    queue_id: number
    /**
     * The queue ID of this bond port. The maximum value of queue ID is
     * the number of TX queues currently active in device.
     */
    queueId: number

    // Constructors of NM-1.0.SettingBondPort


static ["new"](): SettingBondPort;

    // Owm methods of NM-1.0.SettingBondPort

    get_prio(): number
    get_queue_id(): number
}

module SettingBridge {

    // Constructor properties interface

}

/**
 * Bridging Settings
 */
class SettingBridge extends Setting {

    // Own properties of NM-1.0.SettingBridge

    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageing_time: number
    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageingTime: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forward_delay: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forwardDelay: number
    /**
     * If specified, The MAC address of the multicast group this bridge uses for STP.
     * 
     * The address must be a link-local address in standard Ethernet MAC address format,
     * ie an address of the form 01:80:C2:00:00:0X, with X in [0, 4..F].
     * If not specified the default value is 01:80:C2:00:00:00.
     */
    group_address: string
    /**
     * If specified, The MAC address of the multicast group this bridge uses for STP.
     * 
     * The address must be a link-local address in standard Ethernet MAC address format,
     * ie an address of the form 01:80:C2:00:00:0X, with X in [0, 4..F].
     * If not specified the default value is 01:80:C2:00:00:00.
     */
    groupAddress: string
    /**
     * A mask of group addresses to forward. Usually, group addresses in
     * the range from 01:80:C2:00:00:00 to 01:80:C2:00:00:0F are not
     * forwarded according to standards. This property is a mask of 16 bits,
     * each corresponding to a group address in that range that must be
     * forwarded. The mask can't have bits 0, 1 or 2 set because they are
     * used for STP, MAC pause frames and LACP.
     */
    group_forward_mask: number
    /**
     * A mask of group addresses to forward. Usually, group addresses in
     * the range from 01:80:C2:00:00:00 to 01:80:C2:00:00:0F are not
     * forwarded according to standards. This property is a mask of 16 bits,
     * each corresponding to a group address in that range that must be
     * forwarded. The mask can't have bits 0, 1 or 2 set because they are
     * used for STP, MAC pause frames and LACP.
     */
    groupForwardMask: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    hello_time: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    helloTime: number
    /**
     * If specified, the MAC address of bridge. When creating a new bridge, this
     * MAC address will be set.
     * 
     * If this field is left unspecified, the "ethernet.cloned-mac-address" is
     * referred instead to generate the initial MAC address. Note that setting
     * "ethernet.cloned-mac-address" anyway overwrites the MAC address of
     * the bridge later while activating the bridge.
     */
    mac_address: string
    /**
     * If specified, the MAC address of bridge. When creating a new bridge, this
     * MAC address will be set.
     * 
     * If this field is left unspecified, the "ethernet.cloned-mac-address" is
     * referred instead to generate the initial MAC address. Note that setting
     * "ethernet.cloned-mac-address" anyway overwrites the MAC address of
     * the bridge later while activating the bridge.
     */
    macAddress: string
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    max_age: number
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    maxAge: number
    /**
     * Set maximum size of multicast hash table (value must be a power of 2).
     */
    multicast_hash_max: number
    /**
     * Set maximum size of multicast hash table (value must be a power of 2).
     */
    multicastHashMax: number
    /**
     * Set the number of queries the bridge will send before
     * stopping forwarding a multicast group after a "leave"
     * message has been received.
     */
    multicast_last_member_count: number
    /**
     * Set the number of queries the bridge will send before
     * stopping forwarding a multicast group after a "leave"
     * message has been received.
     */
    multicastLastMemberCount: number
    /**
     * Set interval (in deciseconds) between queries to find remaining
     * members of a group, after a "leave" message is received.
     */
    multicast_last_member_interval: number
    /**
     * Set interval (in deciseconds) between queries to find remaining
     * members of a group, after a "leave" message is received.
     */
    multicastLastMemberInterval: number
    /**
     * Set delay (in deciseconds) after which the bridge will
     * leave a group, if no membership reports for this
     * group are received.
     */
    multicast_membership_interval: number
    /**
     * Set delay (in deciseconds) after which the bridge will
     * leave a group, if no membership reports for this
     * group are received.
     */
    multicastMembershipInterval: number
    /**
     * Enable or disable sending of multicast queries by the bridge.
     * If not specified the option is disabled.
     */
    multicast_querier: boolean
    /**
     * Enable or disable sending of multicast queries by the bridge.
     * If not specified the option is disabled.
     */
    multicastQuerier: boolean
    /**
     * If no queries are seen after this delay (in deciseconds) has passed,
     * the bridge will start to send its own queries.
     */
    multicast_querier_interval: number
    /**
     * If no queries are seen after this delay (in deciseconds) has passed,
     * the bridge will start to send its own queries.
     */
    multicastQuerierInterval: number
    /**
     * Interval (in deciseconds) between queries sent
     * by the bridge after the end of the startup phase.
     */
    multicast_query_interval: number
    /**
     * Interval (in deciseconds) between queries sent
     * by the bridge after the end of the startup phase.
     */
    multicastQueryInterval: number
    /**
     * Set the Max Response Time/Max Response Delay
     * (in deciseconds) for IGMP/MLD queries sent by the bridge.
     */
    multicast_query_response_interval: number
    /**
     * Set the Max Response Time/Max Response Delay
     * (in deciseconds) for IGMP/MLD queries sent by the bridge.
     */
    multicastQueryResponseInterval: number
    /**
     * If enabled the bridge's own IP address is used as
     * the source address for IGMP queries otherwise
     * the default of 0.0.0.0 is used.
     */
    multicast_query_use_ifaddr: boolean
    /**
     * If enabled the bridge's own IP address is used as
     * the source address for IGMP queries otherwise
     * the default of 0.0.0.0 is used.
     */
    multicastQueryUseIfaddr: boolean
    /**
     * Sets bridge's multicast router. Multicast-snooping must be enabled
     * for this option to work.
     * 
     * Supported values are: 'auto', 'disabled', 'enabled' to which kernel
     * assigns the numbers 1, 0, and 2, respectively.
     * If not specified the default value is 'auto' (1).
     */
    multicast_router: string
    /**
     * Sets bridge's multicast router. Multicast-snooping must be enabled
     * for this option to work.
     * 
     * Supported values are: 'auto', 'disabled', 'enabled' to which kernel
     * assigns the numbers 1, 0, and 2, respectively.
     * If not specified the default value is 'auto' (1).
     */
    multicastRouter: string
    /**
     * Controls whether IGMP snooping is enabled for this bridge.
     * Note that if snooping was automatically disabled due to hash collisions,
     * the system may refuse to enable the feature until the collisions are
     * resolved.
     */
    multicast_snooping: boolean
    /**
     * Controls whether IGMP snooping is enabled for this bridge.
     * Note that if snooping was automatically disabled due to hash collisions,
     * the system may refuse to enable the feature until the collisions are
     * resolved.
     */
    multicastSnooping: boolean
    /**
     * Set the number of IGMP queries to send during startup phase.
     */
    multicast_startup_query_count: number
    /**
     * Set the number of IGMP queries to send during startup phase.
     */
    multicastStartupQueryCount: number
    /**
     * Sets the time (in deciseconds) between queries sent out
     * at startup to determine membership information.
     */
    multicast_startup_query_interval: number
    /**
     * Sets the time (in deciseconds) between queries sent out
     * at startup to determine membership information.
     */
    multicastStartupQueryInterval: number
    /**
     * Sets the Spanning Tree Protocol (STP) priority for this bridge.  Lower
     * values are "better"; the lowest priority bridge will be elected the root
     * bridge.
     */
    priority: number
    /**
     * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
     */
    stp: boolean
    /**
     * The default PVID for the ports of the bridge, that is the VLAN id
     * assigned to incoming untagged frames.
     */
    vlan_default_pvid: number
    /**
     * The default PVID for the ports of the bridge, that is the VLAN id
     * assigned to incoming untagged frames.
     */
    vlanDefaultPvid: number
    /**
     * Control whether VLAN filtering is enabled on the bridge.
     */
    vlan_filtering: boolean
    /**
     * Control whether VLAN filtering is enabled on the bridge.
     */
    vlanFiltering: boolean
    /**
     * If specified, the protocol used for VLAN filtering.
     * 
     * Supported values are: '802.1Q', '802.1ad'.
     * If not specified the default value is '802.1Q'.
     */
    vlan_protocol: string
    /**
     * If specified, the protocol used for VLAN filtering.
     * 
     * Supported values are: '802.1Q', '802.1ad'.
     * If not specified the default value is '802.1Q'.
     */
    vlanProtocol: string
    /**
     * Controls whether per-VLAN stats accounting is enabled.
     */
    vlan_stats_enabled: boolean
    /**
     * Controls whether per-VLAN stats accounting is enabled.
     */
    vlanStatsEnabled: boolean
    /**
     * Array of bridge VLAN objects. In addition to the VLANs
     * specified here, the bridge will also have the default-pvid
     * VLAN configured  by the bridge.vlan-default-pvid property.
     * 
     * In nmcli the VLAN list can be specified with the following
     * syntax:
     * 
     *  $vid [pvid] [untagged] [, $vid [pvid] [untagged]]...
     * 
     * where $vid is either a single id between 1 and 4094 or a
     * range, represented as a couple of ids separated by a dash.
     */
    vlans: BridgeVlan[]

    // Constructors of NM-1.0.SettingBridge


static ["new"](): SettingBridge;

    // Owm methods of NM-1.0.SettingBridge

    /**
     * Appends a new vlan and associated information to the setting.  The
     * given vlan gets sealed and a reference to it is added.
     * @param vlan the vlan to add
     */
    add_vlan(vlan: BridgeVlan): void
    /**
     * Removes all configured VLANs.
     */
    clear_vlans(): void
    get_ageing_time(): number
    get_forward_delay(): number
    get_group_address(): string
    get_group_forward_mask(): number
    get_hello_time(): number
    get_mac_address(): string
    get_max_age(): number
    get_multicast_hash_max(): number
    get_multicast_last_member_count(): number
    get_multicast_last_member_interval(): number
    get_multicast_membership_interval(): number
    get_multicast_querier(): boolean
    get_multicast_querier_interval(): number
    get_multicast_query_interval(): number
    get_multicast_query_response_interval(): number
    get_multicast_query_use_ifaddr(): boolean
    get_multicast_router(): string
    get_multicast_snooping(): boolean
    get_multicast_startup_query_count(): number
    get_multicast_startup_query_interval(): number
    get_num_vlans(): number
    get_priority(): number
    get_stp(): boolean
    get_vlan(idx: number): BridgeVlan
    get_vlan_default_pvid(): number
    get_vlan_filtering(): boolean
    get_vlan_protocol(): string
    get_vlan_stats_enabled(): boolean
    /**
     * Removes the vlan at index `idx`.
     * @param idx index number of the VLAN.
     */
    remove_vlan(idx: number): void
    /**
     * Remove the VLAN with range `vid_start` to `vid_end`.
     * If `vid_end` is zero, it is assumed to be equal to `vid_start`
     * and so the single-id VLAN with id `vid_start` is removed.
     * @param vid_start the vlan start index
     * @param vid_end the vlan end index
     * @returns %TRUE if the vlan was found and removed; %FALSE otherwise
     */
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean
}

module SettingBridgePort {

    // Constructor properties interface

}

/**
 * Bridge Port Settings
 */
class SettingBridgePort extends Setting {

    // Own properties of NM-1.0.SettingBridgePort

    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to
     * be sent back out through the port the frame was received on.
     */
    hairpin_mode: boolean
    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to
     * be sent back out through the port the frame was received on.
     */
    hairpinMode: boolean
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    path_cost: number
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    pathCost: number
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     */
    priority: number
    /**
     * Array of bridge VLAN objects. In addition to the VLANs
     * specified here, the port will also have the default-pvid
     * VLAN configured on the bridge by the bridge.vlan-default-pvid
     * property.
     * 
     * In nmcli the VLAN list can be specified with the following
     * syntax:
     * 
     *  $vid [pvid] [untagged] [, $vid [pvid] [untagged]]...
     * 
     * where $vid is either a single id between 1 and 4094 or a
     * range, represented as a couple of ids separated by a dash.
     */
    vlans: BridgeVlan[]

    // Constructors of NM-1.0.SettingBridgePort


static ["new"](): SettingBridgePort;

    // Owm methods of NM-1.0.SettingBridgePort

    /**
     * Appends a new vlan and associated information to the setting.  The
     * given vlan gets sealed and a reference to it is added.
     * @param vlan the vlan to add
     */
    add_vlan(vlan: BridgeVlan): void
    /**
     * Removes all configured VLANs.
     */
    clear_vlans(): void
    get_hairpin_mode(): boolean
    get_num_vlans(): number
    get_path_cost(): number
    get_priority(): number
    get_vlan(idx: number): BridgeVlan
    /**
     * Removes the vlan at index `idx`.
     * @param idx index number of the VLAN.
     */
    remove_vlan(idx: number): void
    /**
     * Remove the VLAN with range `vid_start` to `vid_end`.
     * If `vid_end` is zero, it is assumed to be equal to `vid_start`
     * and so the single-id VLAN with id `vid_start` is removed.
     * @param vid_start the vlan start index
     * @param vid_end the vlan end index
     * @returns %TRUE if the vlan was found and removed; %FALSE otherwise
     */
    remove_vlan_by_vid(vid_start: number, vid_end: number): boolean
}

module SettingCdma {

    // Constructor properties interface

}

/**
 * CDMA-based Mobile Broadband Settings
 */
class SettingCdma extends Setting {

    // Own properties of NM-1.0.SettingCdma

    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple frames.
     */
    mtu: number
    /**
     * The number to dial to establish the connection to the CDMA-based mobile
     * broadband network, if any.  If not specified, the default number (#777)
     * is used when required.
     */
    number: string
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSettingCdma:password property.
     */
    password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingCdma:password property.
     */
    passwordFlags: SettingSecretFlags
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string

    // Constructors of NM-1.0.SettingCdma


static ["new"](): SettingCdma;

    // Owm methods of NM-1.0.SettingCdma

    get_mtu(): number
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_username(): string
}

module SettingConnection {

    // Constructor properties interface

}

/**
 * General Connection Profile Settings
 */
class SettingConnection extends Setting {

    // Own properties of NM-1.0.SettingConnection

    /**
     * The number of retries for the authentication. Zero means to try indefinitely; -1 means
     * to use a global default. If the global default is not set, the authentication
     * retries for 3 times before failing the connection.
     * 
     * Currently, this only applies to 802-1x authentication.
     */
    auth_retries: number
    /**
     * The number of retries for the authentication. Zero means to try indefinitely; -1 means
     * to use a global default. If the global default is not set, the authentication
     * retries for 3 times before failing the connection.
     * 
     * Currently, this only applies to 802-1x authentication.
     */
    authRetries: number
    /**
     * Whether or not the connection should be automatically connected by
     * NetworkManager when the resources for the connection are available.
     * %TRUE to automatically activate the connection, %FALSE to require manual
     * intervention to activate the connection.
     * 
     * Autoconnect happens when the circumstances are suitable. That means for
     * example that the device is currently managed and not active. Autoconnect
     * thus never replaces or competes with an already active profile.
     * 
     * Note that autoconnect is not implemented for VPN profiles. See
     * #NMSettingConnection:secondaries as an alternative to automatically
     * connect VPN profiles.
     * 
     * If multiple profiles are ready to autoconnect on the same device,
     * the one with the better "connection.autoconnect-priority" is chosen. If
     * the priorities are equal, then the most recently connected profile is activated.
     * If the profiles were not connected earlier or their
     * "connection.timestamp" is identical, the choice is undefined.
     * 
     * Depending on "connection.multi-connect", a profile can (auto)connect only
     * once at a time or multiple times.
     */
    autoconnect: boolean
    /**
     * The autoconnect priority in range -999 to 999. If the connection is set
     * to autoconnect, connections with higher priority will be preferred.
     * The higher number means higher priority. Defaults to 0.
     * Note that this property only matters if there are more than one candidate
     * profile to select for autoconnect. In case of equal priority, the profile
     * used most recently is chosen.
     */
    autoconnect_priority: number
    /**
     * The autoconnect priority in range -999 to 999. If the connection is set
     * to autoconnect, connections with higher priority will be preferred.
     * The higher number means higher priority. Defaults to 0.
     * Note that this property only matters if there are more than one candidate
     * profile to select for autoconnect. In case of equal priority, the profile
     * used most recently is chosen.
     */
    autoconnectPriority: number
    /**
     * The number of times a connection should be tried when autoactivating before
     * giving up. Zero means forever, -1 means the global default (4 times if not
     * overridden). Setting this to 1 means to try activation only once before
     * blocking autoconnect. Note that after a timeout, NetworkManager will try
     * to autoconnect again.
     */
    autoconnect_retries: number
    /**
     * The number of times a connection should be tried when autoactivating before
     * giving up. Zero means forever, -1 means the global default (4 times if not
     * overridden). Setting this to 1 means to try activation only once before
     * blocking autoconnect. Note that after a timeout, NetworkManager will try
     * to autoconnect again.
     */
    autoconnectRetries: number
    /**
     * Whether or not slaves of this connection should be automatically brought up
     * when NetworkManager activates this connection. This only has a real effect
     * for master connections. The properties #NMSettingConnection:autoconnect,
     * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
     * are unrelated to this setting.
     * The permitted values are: 0: leave slave connections untouched,
     * 1: activate all the slave connections with this connection, -1: default.
     * If -1 (default) is set, global connection.autoconnect-slaves is read to
     * determine the real value. If it is default as well, this fallbacks to 0.
     */
    autoconnect_slaves: SettingConnectionAutoconnectSlaves
    /**
     * Whether or not slaves of this connection should be automatically brought up
     * when NetworkManager activates this connection. This only has a real effect
     * for master connections. The properties #NMSettingConnection:autoconnect,
     * #NMSettingConnection:autoconnect-priority and #NMSettingConnection:autoconnect-retries
     * are unrelated to this setting.
     * The permitted values are: 0: leave slave connections untouched,
     * 1: activate all the slave connections with this connection, -1: default.
     * If -1 (default) is set, global connection.autoconnect-slaves is read to
     * determine the real value. If it is default as well, this fallbacks to 0.
     */
    autoconnectSlaves: SettingConnectionAutoconnectSlaves
    /**
     * Whether DNSOverTls (dns-over-tls) is enabled for the connection.
     * DNSOverTls is a technology which uses TLS to encrypt dns traffic.
     * 
     * The permitted values are: "yes" (2) use DNSOverTls and disabled fallback,
     * "opportunistic" (1) use DNSOverTls but allow fallback to unencrypted resolution,
     * "no" (0) don't ever use DNSOverTls.
     * If unspecified "default" depends on the plugin used. Systemd-resolved
     * uses global setting.
     * 
     * This feature requires a plugin which supports DNSOverTls. Otherwise, the
     * setting has no effect. One such plugin is dns-systemd-resolved.
     */
    dns_over_tls: number
    /**
     * Whether DNSOverTls (dns-over-tls) is enabled for the connection.
     * DNSOverTls is a technology which uses TLS to encrypt dns traffic.
     * 
     * The permitted values are: "yes" (2) use DNSOverTls and disabled fallback,
     * "opportunistic" (1) use DNSOverTls but allow fallback to unencrypted resolution,
     * "no" (0) don't ever use DNSOverTls.
     * If unspecified "default" depends on the plugin used. Systemd-resolved
     * uses global setting.
     * 
     * This feature requires a plugin which supports DNSOverTls. Otherwise, the
     * setting has no effect. One such plugin is dns-systemd-resolved.
     */
    dnsOverTls: number
    /**
     * If greater than zero, delay success of IP addressing until either the
     * timeout is reached, or an IP gateway replies to a ping.
     */
    gateway_ping_timeout: number
    /**
     * If greater than zero, delay success of IP addressing until either the
     * timeout is reached, or an IP gateway replies to a ping.
     */
    gatewayPingTimeout: number
    /**
     * A human readable unique identifier for the connection, like "Work Wi-Fi"
     * or "T-Mobile 3G".
     */
    id: string
    /**
     * The name of the network interface this connection is bound to. If not
     * set, then the connection can be attached to any interface of the
     * appropriate type (subject to restrictions imposed by other settings).
     * 
     * For software devices this specifies the name of the created device.
     * 
     * For connection types where interface names cannot easily be made
     * persistent (e.g. mobile broadband or USB Ethernet), this property should
     * not be used. Setting this property restricts the interfaces a connection
     * can be used with, and if interface names change or are reordered the
     * connection may be applied to the wrong interface.
     */
    interface_name: string
    /**
     * The name of the network interface this connection is bound to. If not
     * set, then the connection can be attached to any interface of the
     * appropriate type (subject to restrictions imposed by other settings).
     * 
     * For software devices this specifies the name of the created device.
     * 
     * For connection types where interface names cannot easily be made
     * persistent (e.g. mobile broadband or USB Ethernet), this property should
     * not be used. Setting this property restricts the interfaces a connection
     * can be used with, and if interface names change or are reordered the
     * connection may be applied to the wrong interface.
     */
    interfaceName: string
    /**
     * Whether LLDP is enabled for the connection.
     */
    lldp: number
    /**
     * Whether Link-Local Multicast Name Resolution (LLMNR) is enabled
     * for the connection. LLMNR is a protocol based on the Domain Name
     * System (DNS) packet format that allows both IPv4 and IPv6 hosts
     * to perform name resolution for hosts on the same local link.
     * 
     * The permitted values are: "yes" (2) register hostname and resolving
     * for the connection, "no" (0) disable LLMNR for the interface, "resolve"
     * (1) do not register hostname but allow resolving of LLMNR host names
     * If unspecified, "default" ultimately depends on the DNS plugin (which
     * for systemd-resolved currently means "yes").
     * 
     * This feature requires a plugin which supports LLMNR. Otherwise, the
     * setting has no effect. One such plugin is dns-systemd-resolved.
     */
    llmnr: number
    /**
     * Interface name of the master device or UUID of the master connection.
     */
    master: string
    /**
     * Whether mDNS is enabled for the connection.
     * 
     * The permitted values are: "yes" (2) register hostname and resolving
     * for the connection, "no" (0) disable mDNS for the interface, "resolve"
     * (1) do not register hostname but allow resolving of mDNS host names
     * and "default" (-1) to allow lookup of a global default in NetworkManager.conf.
     * If unspecified, "default" ultimately depends on the DNS plugin (which
     * for systemd-resolved currently means "no").
     * 
     * This feature requires a plugin which supports mDNS. Otherwise, the
     * setting has no effect. One such plugin is dns-systemd-resolved.
     */
    mdns: number
    /**
     * Whether the connection is metered.
     * 
     * When updating this property on a currently activated connection,
     * the change takes effect immediately.
     */
    metered: Metered
    /**
     * Whether to configure MPTCP endpoints and the address flags.
     * If MPTCP is enabled in NetworkManager, it will configure the
     * addresses of the interface as MPTCP endpoints. Note that
     * IPv4 loopback addresses (127.0.0.0/8), IPv4 link local
     * addresses (169.254.0.0/16), the IPv6 loopback address (::1),
     * IPv6 link local addresses (fe80::/10), IPv6 unique
     * local addresses (ULA, fc00::/7) and IPv6 privacy extension addresses
     * (rfc3041, ipv6.ip6-privacy) will be excluded from being
     * configured as endpoints.
     * 
     * If "disabled" (0x1), MPTCP handling for the interface is disabled and
     * no endpoints are registered.
     * 
     * The "enabled" (0x2) flag means that MPTCP handling is enabled.
     * This flag can also be implied from the presence of other flags.
     * 
     * Even when enabled, MPTCP handling will by default still be disabled
     * unless "/proc/sys/net/mptcp/enabled" sysctl is on. NetworkManager
     * does not change the sysctl and this is up to the administrator
     * or distribution. To configure endpoints even if the sysctl is
     * disabled, "also-without-sysctl" (0x4) flag can be used. In that case,
     * NetworkManager doesn't look at the sysctl and configures endpoints
     * regardless.
     * 
     * Even when enabled, NetworkManager will only configure MPTCP endpoints
     * for a certain address family, if there is a unicast default route (0.0.0.0/0
     * or ::/0) in the main routing table. The flag "also-without-default-route"
     * (0x8) can override that.
     * 
     * When MPTCP handling is enabled then endpoints are configured with
     * the specified address flags "signal" (0x10), "subflow" (0x20), "backup" (0x40),
     * "fullmesh" (0x80). See ip-mptcp(8) manual for additional information about the flags.
     * 
     * If the flags are zero (0x0), the global connection default from NetworkManager.conf is
     * honored. If still unspecified, the fallback is "enabled,subflow".
     * Note that this means that MPTCP is by default done depending on the
     * "/proc/sys/net/mptcp/enabled" sysctl.
     * 
     * NetworkManager does not change the MPTCP limits nor enable MPTCP via
     * "/proc/sys/net/mptcp/enabled". That is a host configuration which the
     * admin can change via sysctl and ip-mptcp.
     * 
     * Strict reverse path filtering (rp_filter) breaks many MPTCP use cases, so when
     * MPTCP handling for IPv4 addresses on the interface is enabled, NetworkManager would
     * loosen the strict reverse path filtering (1) to the loose setting (2).
     */
    mptcp_flags: number
    /**
     * Whether to configure MPTCP endpoints and the address flags.
     * If MPTCP is enabled in NetworkManager, it will configure the
     * addresses of the interface as MPTCP endpoints. Note that
     * IPv4 loopback addresses (127.0.0.0/8), IPv4 link local
     * addresses (169.254.0.0/16), the IPv6 loopback address (::1),
     * IPv6 link local addresses (fe80::/10), IPv6 unique
     * local addresses (ULA, fc00::/7) and IPv6 privacy extension addresses
     * (rfc3041, ipv6.ip6-privacy) will be excluded from being
     * configured as endpoints.
     * 
     * If "disabled" (0x1), MPTCP handling for the interface is disabled and
     * no endpoints are registered.
     * 
     * The "enabled" (0x2) flag means that MPTCP handling is enabled.
     * This flag can also be implied from the presence of other flags.
     * 
     * Even when enabled, MPTCP handling will by default still be disabled
     * unless "/proc/sys/net/mptcp/enabled" sysctl is on. NetworkManager
     * does not change the sysctl and this is up to the administrator
     * or distribution. To configure endpoints even if the sysctl is
     * disabled, "also-without-sysctl" (0x4) flag can be used. In that case,
     * NetworkManager doesn't look at the sysctl and configures endpoints
     * regardless.
     * 
     * Even when enabled, NetworkManager will only configure MPTCP endpoints
     * for a certain address family, if there is a unicast default route (0.0.0.0/0
     * or ::/0) in the main routing table. The flag "also-without-default-route"
     * (0x8) can override that.
     * 
     * When MPTCP handling is enabled then endpoints are configured with
     * the specified address flags "signal" (0x10), "subflow" (0x20), "backup" (0x40),
     * "fullmesh" (0x80). See ip-mptcp(8) manual for additional information about the flags.
     * 
     * If the flags are zero (0x0), the global connection default from NetworkManager.conf is
     * honored. If still unspecified, the fallback is "enabled,subflow".
     * Note that this means that MPTCP is by default done depending on the
     * "/proc/sys/net/mptcp/enabled" sysctl.
     * 
     * NetworkManager does not change the MPTCP limits nor enable MPTCP via
     * "/proc/sys/net/mptcp/enabled". That is a host configuration which the
     * admin can change via sysctl and ip-mptcp.
     * 
     * Strict reverse path filtering (rp_filter) breaks many MPTCP use cases, so when
     * MPTCP handling for IPv4 addresses on the interface is enabled, NetworkManager would
     * loosen the strict reverse path filtering (1) to the loose setting (2).
     */
    mptcpFlags: number
    /**
     * If configured, set to a Manufacturer Usage Description (MUD) URL that points
     * to manufacturer-recommended network policies for IoT devices. It is transmitted
     * as a DHCPv4 or DHCPv6 option. The value must be a valid URL starting with "https://".
     * 
     * The special value "none" is allowed to indicate that no MUD URL is used.
     * 
     * If the per-profile value is unspecified (the default), a global connection default gets
     * consulted. If still unspecified, the ultimate default is "none".
     */
    mud_url: string
    /**
     * If configured, set to a Manufacturer Usage Description (MUD) URL that points
     * to manufacturer-recommended network policies for IoT devices. It is transmitted
     * as a DHCPv4 or DHCPv6 option. The value must be a valid URL starting with "https://".
     * 
     * The special value "none" is allowed to indicate that no MUD URL is used.
     * 
     * If the per-profile value is unspecified (the default), a global connection default gets
     * consulted. If still unspecified, the ultimate default is "none".
     */
    mudUrl: string
    /**
     * Specifies whether the profile can be active multiple times at a particular
     * moment. The value is of type #NMConnectionMultiConnect.
     */
    multi_connect: number
    /**
     * Specifies whether the profile can be active multiple times at a particular
     * moment. The value is of type #NMConnectionMultiConnect.
     */
    multiConnect: number
    /**
     * An array of strings defining what access a given user has to this
     * connection.  If this is %NULL or empty, all users are allowed to access
     * this connection; otherwise users are allowed if and only if they are in
     * this list.  When this is not empty, the connection can be active only when
     * one of the specified users is logged into an active session.  Each entry
     * is of the form "[type]:[id]:[reserved]"; for example, "user:dcbw:blah".
     * 
     * At this time only the "user" [type] is allowed.  Any other values are
     * ignored and reserved for future use.  [id] is the username that this
     * permission refers to, which may not contain the ":" character. Any
     * [reserved] information present must be ignored and is reserved for future
     * use.  All of [type], [id], and [reserved] must be valid UTF-8.
     */
    permissions: string[]
    /**
     * This property is deprecated and has no meaning.
     */
    read_only: boolean
    /**
     * This property is deprecated and has no meaning.
     */
    readOnly: boolean
    /**
     * List of connection UUIDs that should be activated when the base
     * connection itself is activated. Currently, only VPN connections are
     * supported.
     */
    secondaries: string[]
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slave_type: string
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slaveType: string
    /**
     * This represents the identity of the connection used for various purposes.
     * It allows to configure multiple profiles to share the identity. Also,
     * the stable-id can contain placeholders that are substituted dynamically and
     * deterministically depending on the context.
     * 
     * The stable-id is used for generating IPv6 stable private addresses with
     * ipv6.addr-gen-mode=stable-privacy. It is also used to seed the generated
     * cloned MAC address for ethernet.cloned-mac-address=stable and
     * wifi.cloned-mac-address=stable. It is also used to derive the DHCP
     * client identifier with ipv4.dhcp-client-id=stable, the DHCPv6 DUID with
     * ipv6.dhcp-duid=stable-[llt,ll,uuid] and the DHCP IAID with
     * ipv4.iaid=stable and ipv6.iaid=stable.
     * 
     * Note that depending on the context where it is used, other parameters are
     * also seeded into the generation algorithm. For example, a per-host key
     * is commonly also included, so that different systems end up generating
     * different IDs. Or with ipv6.addr-gen-mode=stable-privacy, also the device's
     * name is included, so that different interfaces yield different addresses.
     * The per-host key is the identity of your machine and stored in /var/lib/NetworkManager/secret_key.
     * See NetworkManager(8) manual about the secret-key and the host identity.
     * 
     * The '$' character is treated special to perform dynamic substitutions at
     * activation time. Currently, supported are "${CONNECTION}", "${DEVICE}",
     * "${MAC}", "${BOOT}", "${RANDOM}".  These effectively create unique IDs
     * per-connection, per-device, per-boot, or every time. The "${CONNECTION}"
     * uses the profile's connection.uuid, the "${DEVICE}" uses the interface
     * name of the device and "${MAC}" the permanent MAC address of the device.
     * Any unrecognized patterns following '$' are treated verbatim, however
     * are reserved for future use. You are thus advised to avoid '$' or escape
     * it as "$$".  For example, set it to "${CONNECTION}-${BOOT}-${DEVICE}" to
     * create a unique id for this connection that changes with every reboot
     * and differs depending on the interface where the profile activates.
     * 
     * If the value is unset, a global connection default is consulted. If the
     * value is still unset, the default is "default${CONNECTION}" go generate
     * an ID unique per connection profile.
     */
    stable_id: string
    /**
     * This represents the identity of the connection used for various purposes.
     * It allows to configure multiple profiles to share the identity. Also,
     * the stable-id can contain placeholders that are substituted dynamically and
     * deterministically depending on the context.
     * 
     * The stable-id is used for generating IPv6 stable private addresses with
     * ipv6.addr-gen-mode=stable-privacy. It is also used to seed the generated
     * cloned MAC address for ethernet.cloned-mac-address=stable and
     * wifi.cloned-mac-address=stable. It is also used to derive the DHCP
     * client identifier with ipv4.dhcp-client-id=stable, the DHCPv6 DUID with
     * ipv6.dhcp-duid=stable-[llt,ll,uuid] and the DHCP IAID with
     * ipv4.iaid=stable and ipv6.iaid=stable.
     * 
     * Note that depending on the context where it is used, other parameters are
     * also seeded into the generation algorithm. For example, a per-host key
     * is commonly also included, so that different systems end up generating
     * different IDs. Or with ipv6.addr-gen-mode=stable-privacy, also the device's
     * name is included, so that different interfaces yield different addresses.
     * The per-host key is the identity of your machine and stored in /var/lib/NetworkManager/secret_key.
     * See NetworkManager(8) manual about the secret-key and the host identity.
     * 
     * The '$' character is treated special to perform dynamic substitutions at
     * activation time. Currently, supported are "${CONNECTION}", "${DEVICE}",
     * "${MAC}", "${BOOT}", "${RANDOM}".  These effectively create unique IDs
     * per-connection, per-device, per-boot, or every time. The "${CONNECTION}"
     * uses the profile's connection.uuid, the "${DEVICE}" uses the interface
     * name of the device and "${MAC}" the permanent MAC address of the device.
     * Any unrecognized patterns following '$' are treated verbatim, however
     * are reserved for future use. You are thus advised to avoid '$' or escape
     * it as "$$".  For example, set it to "${CONNECTION}-${BOOT}-${DEVICE}" to
     * create a unique id for this connection that changes with every reboot
     * and differs depending on the interface where the profile activates.
     * 
     * If the value is unset, a global connection default is consulted. If the
     * value is still unset, the default is "default${CONNECTION}" go generate
     * an ID unique per connection profile.
     */
    stableId: string
    /**
     * The time, in seconds since the Unix Epoch, that the connection was last
     * _successfully_ fully activated.
     * 
     * NetworkManager updates the connection timestamp periodically when the
     * connection is active to ensure that an active connection has the latest
     * timestamp. The property is only meant for reading (changes to this
     * property will not be preserved).
     */
    timestamp: number
    /**
     * Base type of the connection. For hardware-dependent connections, should
     * contain the setting name of the hardware-type specific setting (ie,
     * "802-3-ethernet" or "802-11-wireless" or "bluetooth", etc), and for
     * non-hardware dependent connections like VPN or otherwise, should contain
     * the setting name of that setting type (ie, "vpn" or "bridge", etc).
     */
    type: string
    /**
     * A universally unique identifier for the connection, for example generated
     * with libuuid.  It should be assigned when the connection is created, and
     * never changed as long as the connection still applies to the same
     * network.  For example, it should not be changed when the
     * #NMSettingConnection:id property or #NMSettingIP4Config changes, but
     * might need to be re-created when the Wi-Fi SSID, mobile broadband network
     * provider, or #NMSettingConnection:type property changes.
     * 
     * The UUID must be in the format "2815492f-7e56-435e-b2e9-246bd7cdc664"
     * (ie, contains only hexadecimal characters and "-").  A suitable UUID may
     * be generated by nm_utils_uuid_generate() or
     * nm_uuid_generate_from_string_str().
     */
    uuid: string
    /**
     * Time in milliseconds to wait for connection to be considered activated.
     * The wait will start after the pre-up dispatcher event.
     * 
     * The value 0 means no wait time. The default value is -1, which
     * currently has the same meaning as no wait time.
     */
    wait_activation_delay: number
    /**
     * Time in milliseconds to wait for connection to be considered activated.
     * The wait will start after the pre-up dispatcher event.
     * 
     * The value 0 means no wait time. The default value is -1, which
     * currently has the same meaning as no wait time.
     */
    waitActivationDelay: number
    /**
     * Timeout in milliseconds to wait for device at startup.
     * During boot, devices may take a while to be detected by the driver.
     * This property will cause to delay NetworkManager-wait-online.service
     * and nm-online to give the device a chance to appear. This works by
     * waiting for the given timeout until a compatible device for the
     * profile is available and managed.
     * 
     * The value 0 means no wait time. The default value is -1, which
     * currently has the same meaning as no wait time.
     */
    wait_device_timeout: number
    /**
     * Timeout in milliseconds to wait for device at startup.
     * During boot, devices may take a while to be detected by the driver.
     * This property will cause to delay NetworkManager-wait-online.service
     * and nm-online to give the device a chance to appear. This works by
     * waiting for the given timeout until a compatible device for the
     * profile is available and managed.
     * 
     * The value 0 means no wait time. The default value is -1, which
     * currently has the same meaning as no wait time.
     */
    waitDeviceTimeout: number
    /**
     * The trust level of a the connection.  Free form case-insensitive string
     * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
     * the connection will be placed in the default zone as defined by the
     * firewall.
     * 
     * When updating this property on a currently activated connection,
     * the change takes effect immediately.
     */
    zone: string

    // Constructors of NM-1.0.SettingConnection


static ["new"](): SettingConnection;

    // Owm methods of NM-1.0.SettingConnection

    /**
     * Adds a permission to the connection's permission list.  At this time, only
     * the "user" permission type is supported, and `pitem` must be a username. See
     * #NMSettingConnection:permissions: for more details.
     * @param ptype the permission type; at this time only "user" is supported
     * @param pitem the permission item formatted as required for @ptype
     * @param detail unused at this time; must be %NULL
     * @returns %TRUE if the permission was unique and was successfully added to the list, %FALSE if @ptype or @pitem was invalid. If the permission was already present in the list, it will not be added a second time but %TRUE will be returned. Note that before 1.28, in this case %FALSE would be returned.
     */
    add_permission(ptype: string, pitem: string, detail?: (string | null)): boolean
    /**
     * Adds a new secondary connection UUID to the setting.
     * @param sec_uuid the secondary connection UUID to add
     * @returns %TRUE if the secondary connection UUID was added; %FALSE if the UUID was already present
     */
    add_secondary(sec_uuid: string): boolean
    /**
     * Returns the value contained in the #NMSettingConnection:auth-retries property.
     * @returns the configured authentication retries. Zero means infinity and -1 means a global default value.
     */
    get_auth_retries(): number
    /**
     * Returns the #NMSettingConnection:autoconnect property of the connection.
     * @returns the connection's autoconnect behavior
     */
    get_autoconnect(): boolean
    /**
     * Returns the #NMSettingConnection:autoconnect-priority property of the connection.
     * The higher number, the higher priority.
     * @returns the connection's autoconnect priority
     */
    get_autoconnect_priority(): number
    /**
     * Returns the #NMSettingConnection:autoconnect-retries property of the connection.
     * Zero means infinite, -1 means the global default value.
     * @returns the connection's autoconnect retries
     */
    get_autoconnect_retries(): number
    /**
     * Returns the #NMSettingConnection:autoconnect-slaves property of the connection.
     * @returns whether slaves of the connection should be activated together          with the connection.
     */
    get_autoconnect_slaves(): SettingConnectionAutoconnectSlaves
    /**
     * Returns the #NMSettingConnection:type property of the connection.
     * @returns the connection type
     */
    get_connection_type(): string
    get_dns_over_tls(): SettingConnectionDnsOverTls
    get_gateway_ping_timeout(): number
    /**
     * Returns the #NMSettingConnection:id property of the connection.
     * @returns the connection ID
     */
    get_id(): string
    /**
     * Returns the #NMSettingConnection:interface-name property of the connection.
     * @returns the connection's interface name
     */
    get_interface_name(): string
    /**
     * Returns the #NMSettingConnection:lldp property of the connection.
     * @returns a %NMSettingConnectionLldp which indicates whether LLDP must be enabled for the connection.
     */
    get_lldp(): SettingConnectionLldp
    get_llmnr(): SettingConnectionLlmnr
    /**
     * Returns the #NMSettingConnection:master property of the connection.
     * @returns interface name of the master device or UUID of the master connection.
     */
    get_master(): string
    get_mdns(): SettingConnectionMdns
    get_metered(): Metered
    get_mptcp_flags(): MptcpFlags
    /**
     * Returns the value contained in the #NMSettingConnection:mud-url
     * property.
     */
    get_mud_url(): string
    get_multi_connect(): ConnectionMultiConnect
    /**
     * Returns the number of entries in the #NMSettingConnection:permissions
     * property of this setting.
     * @returns the number of permissions entries
     */
    get_num_permissions(): number
    get_num_secondaries(): number
    /**
     * Retrieve one of the entries of the #NMSettingConnection:permissions property
     * of this setting.
     * @param idx the zero-based index of the permissions entry
     * @param out_ptype on return, the permission type. This is currently always "user",   unless the entry is invalid, in which case it returns "invalid".
     * @param out_pitem on return, the permission item (formatted according to @ptype, see #NMSettingConnection:permissions for more detail
     * @param out_detail on return, the permission detail (at this time, always %NULL)
     * @returns %TRUE if a permission was returned, %FALSE if @idx was invalid
     */
    get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean
    /**
     * Returns the #NMSettingConnection:read-only property of the connection.
     * @returns %TRUE if the connection is read-only, %FALSE if it is not
     */
    get_read_only(): boolean
    get_secondary(idx: number): string
    /**
     * Returns the #NMSettingConnection:slave-type property of the connection.
     * @returns the type of slave this connection is, if any
     */
    get_slave_type(): string
    /**
     * Returns the #NMSettingConnection:stable_id property of the connection.
     * @returns the stable-id for the connection
     */
    get_stable_id(): string
    /**
     * Returns the #NMSettingConnection:timestamp property of the connection.
     * @returns the connection's timestamp
     */
    get_timestamp(): number
    /**
     * Returns the #NMSettingConnection:uuid property of the connection.
     * @returns the connection UUID
     */
    get_uuid(): string
    get_wait_activation_delay(): number
    get_wait_device_timeout(): number
    /**
     * Returns the #NMSettingConnection:zone property of the connection.
     * @returns the trust level of a connection
     */
    get_zone(): string
    is_slave_type(type: string): boolean
    /**
     * Checks whether the given username is allowed to view/access this connection.
     * @param uname the user name to check permissions for
     * @returns %TRUE if the requested user is allowed to view this connection, %FALSE if the given user is not allowed to view this connection
     */
    permissions_user_allowed(uname: string): boolean
    /**
     * Removes the permission at index `idx` from the connection.
     * @param idx the zero-based index of the permission to remove
     */
    remove_permission(idx: number): void
    /**
     * Removes the permission from the connection.
     * At this time, only the "user" permission type is supported, and `pitem` must
     * be a username. See #NMSettingConnection:permissions: for more details.
     * @param ptype the permission type; at this time only "user" is supported
     * @param pitem the permission item formatted as required for @ptype
     * @param detail unused at this time; must be %NULL
     * @returns %TRUE if the permission was found and removed; %FALSE if it was not.
     */
    remove_permission_by_value(ptype: string, pitem: string, detail?: (string | null)): boolean
    /**
     * Removes the secondary connection UUID at index `idx`.
     * @param idx index number of the secondary connection UUID
     */
    remove_secondary(idx: number): void
    /**
     * Removes the secondary connection UUID `sec_uuid`.
     * @param sec_uuid the secondary connection UUID to remove
     * @returns %TRUE if the secondary connection UUID was found and removed; %FALSE if it was not.
     */
    remove_secondary_by_value(sec_uuid: string): boolean
}

module SettingDcb {

    // Constructor properties interface

}

/**
 * Data Center Bridging Settings
 */
class SettingDcb extends Setting {

    // Own properties of NM-1.0.SettingDcb

    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fcoe_flags: SettingDcbFlags
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appFcoeFlags: SettingDcbFlags
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     * 
     * Since 1.34, %NULL is the default and means %NM_SETTING_DCB_FCOE_MODE_FABRIC.
     * Before 1.34, %NULL was rejected as invalid and the default was %NM_SETTING_DCB_FCOE_MODE_FABRIC.
     */
    app_fcoe_mode: string
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     * 
     * Since 1.34, %NULL is the default and means %NM_SETTING_DCB_FCOE_MODE_FABRIC.
     * Before 1.34, %NULL was rejected as invalid and the default was %NM_SETTING_DCB_FCOE_MODE_FABRIC.
     */
    appFcoeMode: string
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fcoe_priority: number
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appFcoePriority: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fip_flags: SettingDcbFlags
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appFipFlags: SettingDcbFlags
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fip-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fip_priority: number
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fip-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appFipPriority: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
     * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_iscsi_flags: SettingDcbFlags
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
     * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appIscsiFlags: SettingDcbFlags
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_iscsi_priority: number
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appIscsiPriority: number
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the percentage of bandwidth of
     * the priority's assigned group that the priority may use.  The sum of all
     * percentages for priorities which belong to the same group must total 100
     * percents.
     */
    priority_bandwidth: number[]
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the percentage of bandwidth of
     * the priority's assigned group that the priority may use.  The sum of all
     * percentages for priorities which belong to the same group must total 100
     * percents.
     */
    priorityBandwidth: number[]
    /**
     * An array of 8 boolean values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates whether or not the corresponding
     * priority should transmit priority pause.
     */
    priority_flow_control: boolean[]
    /**
     * An array of 8 boolean values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates whether or not the corresponding
     * priority should transmit priority pause.
     */
    priorityFlowControl: boolean[]
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_flow_control_flags: SettingDcbFlags
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityFlowControlFlags: SettingDcbFlags
    /**
     * An array of 8 uint values, where the array index corresponds to the
     * Priority Group ID (0 - 7) and the value indicates the percentage of link
     * bandwidth allocated to that group.  Allowed values are 0 - 100, and the
     * sum of all values must total 100 percents.
     */
    priority_group_bandwidth: number[]
    /**
     * An array of 8 uint values, where the array index corresponds to the
     * Priority Group ID (0 - 7) and the value indicates the percentage of link
     * bandwidth allocated to that group.  Allowed values are 0 - 100, and the
     * sum of all values must total 100 percents.
     */
    priorityGroupBandwidth: number[]
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_group_flags: SettingDcbFlags
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityGroupFlags: SettingDcbFlags
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the Priority Group ID.  Allowed
     * Priority Group ID values are 0 - 7 or 15 for the unrestricted group.
     */
    priority_group_id: number[]
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the Priority Group ID.  Allowed
     * Priority Group ID values are 0 - 7 or 15 for the unrestricted group.
     */
    priorityGroupId: number[]
    /**
     * An array of 8 boolean values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates whether or not the priority may
     * use all of the bandwidth allocated to its assigned group.
     */
    priority_strict_bandwidth: boolean[]
    /**
     * An array of 8 boolean values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates whether or not the priority may
     * use all of the bandwidth allocated to its assigned group.
     */
    priorityStrictBandwidth: boolean[]
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the traffic class (0 - 7) to
     * which the priority is mapped.
     */
    priority_traffic_class: number[]
    /**
     * An array of 8 uint values, where the array index corresponds to the User
     * Priority (0 - 7) and the value indicates the traffic class (0 - 7) to
     * which the priority is mapped.
     */
    priorityTrafficClass: number[]

    // Constructors of NM-1.0.SettingDcb


static ["new"](): SettingDcb;

    // Owm methods of NM-1.0.SettingDcb

    get_app_fcoe_flags(): SettingDcbFlags
    get_app_fcoe_mode(): string
    get_app_fcoe_priority(): number
    get_app_fip_flags(): SettingDcbFlags
    get_app_fip_priority(): number
    get_app_iscsi_flags(): SettingDcbFlags
    get_app_iscsi_priority(): number
    get_priority_bandwidth(user_priority: number): number
    get_priority_flow_control(user_priority: number): boolean
    get_priority_flow_control_flags(): SettingDcbFlags
    get_priority_group_bandwidth(group_id: number): number
    get_priority_group_flags(): SettingDcbFlags
    get_priority_group_id(user_priority: number): number
    get_priority_strict_bandwidth(user_priority: number): boolean
    get_priority_traffic_class(user_priority: number): number
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set the bandwidth percentage for
     * @param bandwidth_percent the bandwidth percentage (0 - 100) that @user_priority is allowed to use within its priority group
     */
    set_priority_bandwidth(user_priority: number, bandwidth_percent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-flow-control includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set flow control for
     * @param enabled %TRUE to enable flow control for this priority, %FALSE to disable it
     */
    set_priority_flow_control(user_priority: number, enabled: boolean): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param group_id the priority group (0 - 7) to set the bandwidth percentage for
     * @param bandwidth_percent the bandwidth percentage (0 - 100) to assign to @group_id to
     */
    set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set flow control for
     * @param group_id the group (0 - 7) to assign @user_priority to, or 15 for the unrestricted group.
     */
    set_priority_group_id(user_priority: number, group_id: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set strict bandwidth for
     * @param strict %TRUE to allow @user_priority to use all the bandwidth allocated to its priority group, or %FALSE if not
     */
    set_priority_strict_bandwidth(user_priority: number, strict: boolean): void
    set_priority_traffic_class(user_priority: number, traffic_class: number): void
}

module SettingDummy {

    // Constructor properties interface

}

/**
 * Dummy Link Settings
 */
class SettingDummy extends Setting {

    // Constructors of NM-1.0.SettingDummy


static ["new"](): SettingDummy;
}

module SettingEthtool {

    // Constructor properties interface

}

/**
 * Ethtool Ethernet Settings
 */
class SettingEthtool extends Setting {

    // Constructors of NM-1.0.SettingEthtool


static ["new"](): SettingEthtool;

    // Owm methods of NM-1.0.SettingEthtool

    /**
     * Clears all offload features settings
     */
    clear_features(): void
    /**
     * Gets and offload feature setting. Returns %NM_TERNARY_DEFAULT if the
     * feature is not set.
     * 
     * Note that `optname` must be a valid name for a feature, according to
     * nm_ethtool_optname_is_feature().
     * @param optname option name of the offload feature to get
     * @returns a #NMTernary value indicating whether the offload feature   is enabled, disabled, or left untouched.
     */
    get_feature(optname: string): Ternary
    /**
     * This returns all options names that are set. This includes the feature names
     * like %NM_ETHTOOL_OPTNAME_FEATURE_GRO. See nm_ethtool_optname_is_feature() to
     * check whether the option name is valid for offload features.
     * @returns list of set option   names or %NULL if no options are set. The option names are still owned by   @setting and may get invalidated when @setting gets modified.
     */
    get_optnames(): string[]
    /**
     * Sets and offload feature setting.
     * 
     * Note that `optname` must be a valid name for a feature, according to
     * nm_ethtool_optname_is_feature().
     * @param optname option name of the offload feature to get
     * @param value the new value to set. The special value %NM_TERNARY_DEFAULT   means to clear the offload feature setting.
     */
    set_feature(optname: string, value: Ternary): void
}

module SettingGeneric {

    // Constructor properties interface

}

/**
 * Generic Link Settings
 */
class SettingGeneric extends Setting {

    // Constructors of NM-1.0.SettingGeneric


static ["new"](): SettingGeneric;
}

module SettingGsm {

    // Constructor properties interface

}

/**
 * GSM-based Mobile Broadband Settings
 */
class SettingGsm extends Setting {

    // Own properties of NM-1.0.SettingGsm

    /**
     * The GPRS Access Point Name specifying the APN used when establishing a
     * data session with the GSM-based network.  The APN often determines how
     * the user will be billed for their network usage and whether the user has
     * access to the Internet or just a provider-specific walled-garden, so it
     * is important to use the correct APN for the user's mobile broadband plan.
     * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
     * 03.60 Section 14.9.
     */
    apn: string
    /**
     * When %TRUE, the settings such as APN, username, or password will
     * default to values that match the network the modem will register
     * to in the Mobile Broadband Provider database.
     */
    auto_config: boolean
    /**
     * When %TRUE, the settings such as APN, username, or password will
     * default to values that match the network the modem will register
     * to in the Mobile Broadband Provider database.
     */
    autoConfig: boolean
    /**
     * The device unique identifier (as given by the WWAN management service)
     * which this connection applies to.  If given, the connection will only
     * apply to the specified device.
     */
    device_id: string
    /**
     * The device unique identifier (as given by the WWAN management service)
     * which this connection applies to.  If given, the connection will only
     * apply to the specified device.
     */
    deviceId: string
    /**
     * When %TRUE, only connections to the home network will be allowed.
     * Connections to roaming networks will not be made.
     */
    home_only: boolean
    /**
     * When %TRUE, only connections to the home network will be allowed.
     * Connections to roaming networks will not be made.
     */
    homeOnly: boolean
    /**
     * For LTE modems, this sets the APN for the initial EPS bearer that is set
     * up when attaching to the network.  Setting this parameter implies
     * initial-eps-bearer-configure to be TRUE.
     */
    initial_eps_bearer_apn: string
    /**
     * For LTE modems, this sets the APN for the initial EPS bearer that is set
     * up when attaching to the network.  Setting this parameter implies
     * initial-eps-bearer-configure to be TRUE.
     */
    initialEpsBearerApn: string
    /**
     * For LTE modems, this setting determines whether the initial EPS bearer
     * shall be configured when bringing up the connection.  It is inferred TRUE
     * if initial-eps-bearer-apn is set.
     */
    initial_eps_bearer_configure: boolean
    /**
     * For LTE modems, this setting determines whether the initial EPS bearer
     * shall be configured when bringing up the connection.  It is inferred TRUE
     * if initial-eps-bearer-apn is set.
     */
    initialEpsBearerConfigure: boolean
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple frames.
     */
    mtu: number
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    network_id: string
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    networkId: string
    /**
     * Legacy setting that used to help establishing PPP data sessions for
     * GSM-based modems.
     */
    number: string
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:password property.
     */
    password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingGsm:password property.
     */
    passwordFlags: SettingSecretFlags
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pin_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pinFlags: SettingSecretFlags
    /**
     * The SIM card unique identifier (as given by the WWAN management service)
     * which this connection applies to.  If given, the connection will apply
     * to any device also allowed by #NMSettingGsm:device-id which contains a
     * SIM card matching the given identifier.
     */
    sim_id: string
    /**
     * The SIM card unique identifier (as given by the WWAN management service)
     * which this connection applies to.  If given, the connection will apply
     * to any device also allowed by #NMSettingGsm:device-id which contains a
     * SIM card matching the given identifier.
     */
    simId: string
    /**
     * A MCC/MNC string like "310260" or "21601" identifying the specific
     * mobile network operator which this connection applies to.  If given,
     * the connection will apply to any device also allowed by
     * #NMSettingGsm:device-id and #NMSettingGsm:sim-id which contains a SIM
     * card provisioned by the given operator.
     */
    sim_operator_id: string
    /**
     * A MCC/MNC string like "310260" or "21601" identifying the specific
     * mobile network operator which this connection applies to.  If given,
     * the connection will apply to any device also allowed by
     * #NMSettingGsm:device-id and #NMSettingGsm:sim-id which contains a SIM
     * card provisioned by the given operator.
     */
    simOperatorId: string
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string

    // Constructors of NM-1.0.SettingGsm


static ["new"](): SettingGsm;

    // Owm methods of NM-1.0.SettingGsm

    get_apn(): string
    get_auto_config(): boolean
    get_device_id(): string
    get_home_only(): boolean
    get_initial_eps_apn(): string
    get_initial_eps_config(): boolean
    get_mtu(): number
    get_network_id(): string
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_pin(): string
    get_pin_flags(): SettingSecretFlags
    get_sim_id(): string
    get_sim_operator_id(): string
    get_username(): string
}

module SettingHostname {

    // Constructor properties interface

}

/**
 * Hostname settings
 */
class SettingHostname extends Setting {

    // Own properties of NM-1.0.SettingHostname

    /**
     * Whether the system hostname can be determined from DHCP on
     * this connection.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
     */
    from_dhcp: Ternary
    /**
     * Whether the system hostname can be determined from DHCP on
     * this connection.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
     */
    fromDhcp: Ternary
    /**
     * Whether the system hostname can be determined from reverse
     * DNS lookup of addresses on this device.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
     */
    from_dns_lookup: Ternary
    /**
     * Whether the system hostname can be determined from reverse
     * DNS lookup of addresses on this device.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_TRUE.
     */
    fromDnsLookup: Ternary
    /**
     * If set to %NM_TERNARY_TRUE, NetworkManager attempts to get
     * the hostname via DHCPv4/DHCPv6 or reverse DNS lookup on this
     * device only when the device has the default route for the given
     * address family (IPv4/IPv6).
     * 
     * If set to %NM_TERNARY_FALSE, the hostname can be set from this
     * device even if it doesn't have the default route.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_FALSE.
     */
    only_from_default: Ternary
    /**
     * If set to %NM_TERNARY_TRUE, NetworkManager attempts to get
     * the hostname via DHCPv4/DHCPv6 or reverse DNS lookup on this
     * device only when the device has the default route for the given
     * address family (IPv4/IPv6).
     * 
     * If set to %NM_TERNARY_FALSE, the hostname can be set from this
     * device even if it doesn't have the default route.
     * 
     * When set to %NM_TERNARY_DEFAULT, the value from global configuration
     * is used. If the property doesn't have a value in the global
     * configuration, NetworkManager assumes the value to be %NM_TERNARY_FALSE.
     */
    onlyFromDefault: Ternary
    /**
     * The relative priority of this connection to determine the
     * system hostname. A lower numerical value is better (higher
     * priority).  A connection with higher priority is considered
     * before connections with lower priority.
     * 
     * If the value is zero, it can be overridden by a global value
     * from NetworkManager configuration. If the property doesn't have
     * a value in the global configuration, the value is assumed to be
     * 100.
     * 
     * Negative values have the special effect of excluding other
     * connections with a greater numerical priority value; so in
     * presence of at least one negative priority, only connections
     * with the lowest priority value will be used to determine the
     * hostname.
     */
    priority: number

    // Constructors of NM-1.0.SettingHostname


static ["new"](): SettingHostname;

    // Owm methods of NM-1.0.SettingHostname

    /**
     * Returns the value contained in the #NMSettingHostname:from-dhcp
     * property.
     * @returns the 'from-dhcp' property value
     */
    get_from_dhcp(): Ternary
    /**
     * Returns the value contained in the #NMSettingHostname:from-dns-lookup
     * property.
     * @returns the 'from-dns-lookup' property value
     */
    get_from_dns_lookup(): Ternary
    /**
     * Returns the value contained in the #NMSettingHostname:only-from-default
     * property.
     * @returns the 'only-from-default' property value
     */
    get_only_from_default(): Ternary
    /**
     * Returns the value contained in the #NMSettingHostname:priority
     * property.
     * @returns the 'priority' property value
     */
    get_priority(): number
}

module SettingIP4Config {

    // Constructor properties interface

}

/**
 * IPv4 Settings
 */
class SettingIP4Config extends SettingIPConfig {

    // Own properties of NM-1.0.SettingIP4Config

    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     * When the property is a hex string ('aa:bb:cc') it is interpreted as a
     * binary client ID, in which case the first byte is assumed to be the
     * 'type' field as per RFC 2132 section 9.14 and the remaining bytes may be
     * an hardware address (e.g. '01:xx:xx:xx:xx:xx:xx' where 1 is the Ethernet
     * ARP type and the rest is a MAC address).
     * If the property is not a hex string it is considered as a
     * non-hardware-address client ID and the 'type' field is set to 0.
     * 
     * The special values "mac" and "perm-mac" are supported, which use the
     * current or permanent MAC address of the device to generate a client identifier
     * with type ethernet (01). Currently, these options only work for ethernet
     * type of links.
     * 
     * The special value "ipv6-duid" uses the DUID from "ipv6.dhcp-duid" property as
     * an RFC4361-compliant client identifier. As IAID it uses "ipv4.dhcp-iaid"
     * and falls back to "ipv6.dhcp-iaid" if unset.
     * 
     * The special value "duid" generates a RFC4361-compliant client identifier based
     * on "ipv4.dhcp-iaid" and uses a DUID generated by hashing /etc/machine-id.
     * 
     * The special value "stable" is supported to generate a type 0 client identifier based
     * on the stable-id (see connection.stable-id) and a per-host key. If you set the
     * stable-id, you may want to include the "${DEVICE}" or "${MAC}" specifier to get a
     * per-device key.
     * 
     * If unset, a globally configured default is used. If still unset, the default
     * depends on the DHCP plugin.
     */
    dhcp_client_id: string
    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     * When the property is a hex string ('aa:bb:cc') it is interpreted as a
     * binary client ID, in which case the first byte is assumed to be the
     * 'type' field as per RFC 2132 section 9.14 and the remaining bytes may be
     * an hardware address (e.g. '01:xx:xx:xx:xx:xx:xx' where 1 is the Ethernet
     * ARP type and the rest is a MAC address).
     * If the property is not a hex string it is considered as a
     * non-hardware-address client ID and the 'type' field is set to 0.
     * 
     * The special values "mac" and "perm-mac" are supported, which use the
     * current or permanent MAC address of the device to generate a client identifier
     * with type ethernet (01). Currently, these options only work for ethernet
     * type of links.
     * 
     * The special value "ipv6-duid" uses the DUID from "ipv6.dhcp-duid" property as
     * an RFC4361-compliant client identifier. As IAID it uses "ipv4.dhcp-iaid"
     * and falls back to "ipv6.dhcp-iaid" if unset.
     * 
     * The special value "duid" generates a RFC4361-compliant client identifier based
     * on "ipv4.dhcp-iaid" and uses a DUID generated by hashing /etc/machine-id.
     * 
     * The special value "stable" is supported to generate a type 0 client identifier based
     * on the stable-id (see connection.stable-id) and a per-host key. If you set the
     * stable-id, you may want to include the "${DEVICE}" or "${MAC}" specifier to get a
     * per-device key.
     * 
     * If unset, a globally configured default is used. If still unset, the default
     * depends on the DHCP plugin.
     */
    dhcpClientId: string
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
     * specified FQDN will be sent to the DHCP server when acquiring a lease. This
     * property and #NMSettingIPConfig:dhcp-hostname are mutually exclusive and
     * cannot be set at the same time.
     */
    dhcp_fqdn: string
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
     * specified FQDN will be sent to the DHCP server when acquiring a lease. This
     * property and #NMSettingIPConfig:dhcp-hostname are mutually exclusive and
     * cannot be set at the same time.
     */
    dhcpFqdn: string
    /**
     * The Vendor Class Identifier DHCP option (60).
     * Special characters in the data string may be escaped using C-style escapes,
     * nevertheless this property cannot contain nul bytes.
     * If the per-profile value is unspecified (the default),
     * a global connection default gets consulted.
     * If still unspecified, the DHCP option is not sent to the server.
     */
    dhcp_vendor_class_identifier: string
    /**
     * The Vendor Class Identifier DHCP option (60).
     * Special characters in the data string may be escaped using C-style escapes,
     * nevertheless this property cannot contain nul bytes.
     * If the per-profile value is unspecified (the default),
     * a global connection default gets consulted.
     * If still unspecified, the DHCP option is not sent to the server.
     */
    dhcpVendorClassIdentifier: string
    /**
     * Enable and disable the IPv4 link-local configuration independently of the
     * ipv4.method configuration. This allows a link-local address (169.254.x.y/16)
     * to be obtained in addition to other addresses, such as those manually
     * configured or obtained from a DHCP server.
     * 
     * When set to "auto", the value is dependent on "ipv4.method".
     * When set to "default", it honors the global connection default, before
     * falling back to "auto". Note that if "ipv4.method" is "disabled", then
     * link local addressing is always disabled too. The default is "default".
     */
    link_local: number
    /**
     * Enable and disable the IPv4 link-local configuration independently of the
     * ipv4.method configuration. This allows a link-local address (169.254.x.y/16)
     * to be obtained in addition to other addresses, such as those manually
     * configured or obtained from a DHCP server.
     * 
     * When set to "auto", the value is dependent on "ipv4.method".
     * When set to "default", it honors the global connection default, before
     * falling back to "auto". Note that if "ipv4.method" is "disabled", then
     * link local addressing is always disabled too. The default is "default".
     */
    linkLocal: number

    // Constructors of NM-1.0.SettingIP4Config


static ["new"](): SettingIP4Config;

    // Owm methods of NM-1.0.SettingIP4Config

    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-client-id
     * property.
     * @returns the configured Client ID to send to the DHCP server when requesting addresses via DHCP.
     */
    get_dhcp_client_id(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-fqdn
     * property.
     * @returns the configured FQDN to send to the DHCP server
     */
    get_dhcp_fqdn(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp_vendor_class_identifier
     * property.
     * @returns the vendor class identifier option to send to the DHCP server
     */
    get_dhcp_vendor_class_identifier(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:link_local
     * property.
     * @returns the link-local configuration
     */
    get_link_local(): SettingIP4LinkLocal
}

module SettingIP6Config {

    // Constructor properties interface

}

/**
 * IPv6 Settings
 */
class SettingIP6Config extends SettingIPConfig {

    // Own properties of NM-1.0.SettingIP6Config

    /**
     * Configure the method for creating the IPv6 interface identifier of
     * addresses for RFC4862 IPv6 Stateless Address Autoconfiguration and IPv6
     * Link Local.
     * 
     * The permitted values are: %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_EUI64,
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_STABLE_PRIVACY.
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT_OR_EUI64 or
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT.
     * 
     * If the property is set to "eui64", the addresses will be generated using
     * the interface token derived from the hardware address. This makes the
     * host part of the address constant, making it possible to track the
     * host's presence when it changes networks. The address changes when the
     * interface hardware is replaced. If a duplicate address is detected,
     * there is no fallback to generate another address. When configured, the
     * "ipv6.token" is used instead of the MAC address to generate addresses
     * for stateless autoconfiguration.
     * 
     * If the property is set to "stable-privacy", the interface identifier is
     * generated as specified by RFC7217. This works by hashing a host specific
     * key (see NetworkManager(8) manual), the interface name, the connection's
     * "connection.stable-id" property and the address prefix.  This improves
     * privacy by making it harder to use the address to track the host's
     * presence as every prefix and network has a different identifier. Also,
     * the address is stable when the network interface hardware is replaced.
     * 
     * The special values "default" and "default-or-eui64" will fallback to the
     * global connection default as documented in the NetworkManager.conf(5)
     * manual. If the global default is not specified, the fallback value is
     * "stable-privacy" or "eui64", respectively.
     * 
     * For libnm, the property defaults to "default" since 1.40.  Previously it
     * used to default to "stable-privacy".  On D-Bus, the absence of an
     * addr-gen-mode setting equals "default". For keyfile plugin, the absence
     * of the setting on disk means "default-or-eui64" so that the property
     * doesn't change on upgrade from older versions.
     * 
     * Note that this setting is distinct from the Privacy Extensions as
     * configured by "ip6-privacy" property and it does not affect the
     * temporary addresses configured with this option.
     */
    addr_gen_mode: number
    /**
     * Configure the method for creating the IPv6 interface identifier of
     * addresses for RFC4862 IPv6 Stateless Address Autoconfiguration and IPv6
     * Link Local.
     * 
     * The permitted values are: %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_EUI64,
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_STABLE_PRIVACY.
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT_OR_EUI64 or
     * %NM_SETTING_IP6_CONFIG_ADDR_GEN_MODE_DEFAULT.
     * 
     * If the property is set to "eui64", the addresses will be generated using
     * the interface token derived from the hardware address. This makes the
     * host part of the address constant, making it possible to track the
     * host's presence when it changes networks. The address changes when the
     * interface hardware is replaced. If a duplicate address is detected,
     * there is no fallback to generate another address. When configured, the
     * "ipv6.token" is used instead of the MAC address to generate addresses
     * for stateless autoconfiguration.
     * 
     * If the property is set to "stable-privacy", the interface identifier is
     * generated as specified by RFC7217. This works by hashing a host specific
     * key (see NetworkManager(8) manual), the interface name, the connection's
     * "connection.stable-id" property and the address prefix.  This improves
     * privacy by making it harder to use the address to track the host's
     * presence as every prefix and network has a different identifier. Also,
     * the address is stable when the network interface hardware is replaced.
     * 
     * The special values "default" and "default-or-eui64" will fallback to the
     * global connection default as documented in the NetworkManager.conf(5)
     * manual. If the global default is not specified, the fallback value is
     * "stable-privacy" or "eui64", respectively.
     * 
     * For libnm, the property defaults to "default" since 1.40.  Previously it
     * used to default to "stable-privacy".  On D-Bus, the absence of an
     * addr-gen-mode setting equals "default". For keyfile plugin, the absence
     * of the setting on disk means "default-or-eui64" so that the property
     * doesn't change on upgrade from older versions.
     * 
     * Note that this setting is distinct from the Privacy Extensions as
     * configured by "ip6-privacy" property and it does not affect the
     * temporary addresses configured with this option.
     */
    addrGenMode: number
    /**
     * A string containing the DHCPv6 Unique Identifier (DUID) used by the dhcp
     * client to identify itself to DHCPv6 servers (RFC 3315). The DUID is carried
     * in the Client Identifier option.
     * If the property is a hex string ('aa:bb:cc') it is interpreted as a binary
     * DUID and filled as an opaque value in the Client Identifier option.
     * 
     * The special value "lease" will retrieve the DUID previously used from the
     * lease file belonging to the connection. If no DUID is found and "dhclient"
     * is the configured dhcp client, the DUID is searched in the system-wide
     * dhclient lease file. If still no DUID is found, or another dhcp client is
     * used, a global and permanent DUID-UUID (RFC 6355) will be generated based
     * on the machine-id.
     * 
     * The special values "llt" and "ll" will generate a DUID of type LLT or LL
     * (see RFC 3315) based on the current MAC address of the device. In order to
     * try providing a stable DUID-LLT, the time field will contain a constant
     * timestamp that is used globally (for all profiles) and persisted to disk.
     * 
     * The special values "stable-llt", "stable-ll" and "stable-uuid" will generate
     * a DUID of the corresponding type, derived from the connection's stable-id and
     * a per-host unique key. You may want to include the "${DEVICE}" or "${MAC}" specifier
     * in the stable-id, in case this profile gets activated on multiple devices.
     * So, the link-layer address of "stable-ll" and "stable-llt" will be a generated
     * address derived from the stable id. The DUID-LLT time value in the "stable-llt"
     * option will be picked among a static timespan of three years (the upper bound
     * of the interval is the same constant timestamp used in "llt").
     * 
     * When the property is unset, the global value provided for "ipv6.dhcp-duid" is
     * used. If no global value is provided, the default "lease" value is assumed.
     */
    dhcp_duid: string
    /**
     * A string containing the DHCPv6 Unique Identifier (DUID) used by the dhcp
     * client to identify itself to DHCPv6 servers (RFC 3315). The DUID is carried
     * in the Client Identifier option.
     * If the property is a hex string ('aa:bb:cc') it is interpreted as a binary
     * DUID and filled as an opaque value in the Client Identifier option.
     * 
     * The special value "lease" will retrieve the DUID previously used from the
     * lease file belonging to the connection. If no DUID is found and "dhclient"
     * is the configured dhcp client, the DUID is searched in the system-wide
     * dhclient lease file. If still no DUID is found, or another dhcp client is
     * used, a global and permanent DUID-UUID (RFC 6355) will be generated based
     * on the machine-id.
     * 
     * The special values "llt" and "ll" will generate a DUID of type LLT or LL
     * (see RFC 3315) based on the current MAC address of the device. In order to
     * try providing a stable DUID-LLT, the time field will contain a constant
     * timestamp that is used globally (for all profiles) and persisted to disk.
     * 
     * The special values "stable-llt", "stable-ll" and "stable-uuid" will generate
     * a DUID of the corresponding type, derived from the connection's stable-id and
     * a per-host unique key. You may want to include the "${DEVICE}" or "${MAC}" specifier
     * in the stable-id, in case this profile gets activated on multiple devices.
     * So, the link-layer address of "stable-ll" and "stable-llt" will be a generated
     * address derived from the stable id. The DUID-LLT time value in the "stable-llt"
     * option will be picked among a static timespan of three years (the upper bound
     * of the interval is the same constant timestamp used in "llt").
     * 
     * When the property is unset, the global value provided for "ipv6.dhcp-duid" is
     * used. If no global value is provided, the default "lease" value is assumed.
     */
    dhcpDuid: string
    /**
     * A IPv6 address followed by a slash and a prefix length. If set, the value is
     * sent to the DHCPv6 server as hint indicating the prefix delegation (IA_PD) we
     * want to receive.
     * To only hint a prefix length without prefix, set the address part to the
     * zero address (for example "::/60").
     */
    dhcp_pd_hint: string
    /**
     * A IPv6 address followed by a slash and a prefix length. If set, the value is
     * sent to the DHCPv6 server as hint indicating the prefix delegation (IA_PD) we
     * want to receive.
     * To only hint a prefix length without prefix, set the address part to the
     * zero address (for example "::/60").
     */
    dhcpPdHint: string
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: -1: unknown,
     * 0: disabled, 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     * 
     * Having a per-connection setting set to "-1" (unknown) means fallback to
     * global configuration "ipv6.ip6-privacy".
     * 
     * If also global configuration is unspecified or set to "-1", fallback to read
     * "/proc/sys/net/ipv6/conf/default/use_tempaddr".
     * 
     * Note that this setting is distinct from the Stable Privacy addresses
     * that can be enabled with the "addr-gen-mode" property's "stable-privacy"
     * setting as another way of avoiding host tracking with IPv6 addresses.
     */
    ip6_privacy: SettingIP6ConfigPrivacy
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: -1: unknown,
     * 0: disabled, 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     * 
     * Having a per-connection setting set to "-1" (unknown) means fallback to
     * global configuration "ipv6.ip6-privacy".
     * 
     * If also global configuration is unspecified or set to "-1", fallback to read
     * "/proc/sys/net/ipv6/conf/default/use_tempaddr".
     * 
     * Note that this setting is distinct from the Stable Privacy addresses
     * that can be enabled with the "addr-gen-mode" property's "stable-privacy"
     * setting as another way of avoiding host tracking with IPv6 addresses.
     */
    ip6Privacy: SettingIP6ConfigPrivacy
    /**
     * Maximum transmission unit size, in bytes. If zero (the default), the MTU
     * is set automatically from router advertisements or is left equal to the
     * link-layer MTU. If greater than the link-layer MTU, or greater than zero
     * but less than the minimum IPv6 MTU of 1280, this value has no effect.
     */
    mtu: number
    /**
     * A timeout for waiting Router Advertisements in seconds. If zero (the default), a
     * globally configured default is used. If still unspecified, the timeout depends on the
     * sysctl settings of the device.
     * 
     * Set to 2147483647 (MAXINT32) for infinity.
     */
    ra_timeout: number
    /**
     * A timeout for waiting Router Advertisements in seconds. If zero (the default), a
     * globally configured default is used. If still unspecified, the timeout depends on the
     * sysctl settings of the device.
     * 
     * Set to 2147483647 (MAXINT32) for infinity.
     */
    raTimeout: number
    /**
     * Configure the token for draft-chown-6man-tokenised-ipv6-identifiers-02
     * IPv6 tokenized interface identifiers. Useful with eui64 addr-gen-mode.
     * 
     * When set, the token is used as IPv6 interface identifier instead of the
     * hardware address. This only applies to addresses from stateless
     * autoconfiguration, not to IPv6 link local addresses.
     */
    token: string

    // Constructors of NM-1.0.SettingIP6Config


static ["new"](): SettingIP6Config;

    // Owm methods of NM-1.0.SettingIP6Config

    /**
     * Returns the value contained in the #NMSettingIP6Config:addr-gen-mode
     * property.
     * @returns IPv6 Address Generation Mode.
     */
    get_addr_gen_mode(): SettingIP6ConfigAddrGenMode
    /**
     * Returns the value contained in the #NMSettingIP6Config:dhcp-duid
     * property.
     * @returns The configured DUID value to be included in the DHCPv6 requests sent to the DHCPv6 servers.
     */
    get_dhcp_duid(): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:dhcp-pd-hint
     * property.
     * @returns a string containing an address and prefix length to be used as hint for DHCPv6 prefix delegation.
     */
    get_dhcp_pd_hint(): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:ip6-privacy
     * property.
     * @returns IPv6 Privacy Extensions configuration value (#NMSettingIP6ConfigPrivacy).
     */
    get_ip6_privacy(): SettingIP6ConfigPrivacy
    get_mtu(): number
    get_ra_timeout(): number
    /**
     * Returns the value contained in the #NMSettingIP6Config:token
     * property.
     * @returns A string.
     */
    get_token(): string
}

module SettingIPConfig {

    // Constructor properties interface

}

abstract class SettingIPConfig extends Setting {

    // Own properties of NM-1.0.SettingIPConfig

    /**
     * Array of IP addresses.
     */
    addresses: IPAddress[]
    /**
     * VPN connections will default to add the route automatically unless this
     * setting is set to %FALSE.
     * 
     * For other connection types, adding such an automatic route is currently
     * not supported and setting this to %TRUE has no effect.
     */
    auto_route_ext_gw: Ternary
    /**
     * VPN connections will default to add the route automatically unless this
     * setting is set to %FALSE.
     * 
     * For other connection types, adding such an automatic route is currently
     * not supported and setting this to %TRUE has no effect.
     */
    autoRouteExtGw: Ternary
    /**
     * Timeout in milliseconds used to check for the presence of duplicate IP
     * addresses on the network.  If an address conflict is detected, the
     * activation will fail.  A zero value means that no duplicate address
     * detection is performed, -1 means the default value (either configuration
     * ipvx.dad-timeout override or zero).  A value greater than zero is a
     * timeout in milliseconds.
     * 
     * The property is currently implemented only for IPv4.
     */
    dad_timeout: number
    /**
     * Timeout in milliseconds used to check for the presence of duplicate IP
     * addresses on the network.  If an address conflict is detected, the
     * activation will fail.  A zero value means that no duplicate address
     * detection is performed, -1 means the default value (either configuration
     * ipvx.dad-timeout override or zero).  A value greater than zero is a
     * timeout in milliseconds.
     * 
     * The property is currently implemented only for IPv4.
     */
    dadTimeout: number
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     * This property and #NMSettingIP4Config:dhcp-fqdn are mutually exclusive and
     * cannot be set at the same time.
     */
    dhcp_hostname: string
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     * This property and #NMSettingIP4Config:dhcp-fqdn are mutually exclusive and
     * cannot be set at the same time.
     */
    dhcpHostname: string
    /**
     * Flags for the DHCP hostname and FQDN.
     * 
     * Currently, this property only includes flags to control the FQDN flags
     * set in the DHCP FQDN option. Supported FQDN flags are
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_NO_UPDATE.  When no FQDN flag is set and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is set, the DHCP FQDN option will
     * contain no flag. Otherwise, if no FQDN flag is set and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is not set, the standard FQDN flags
     * are set in the request:
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
     * 
     * When this property is set to the default value %NM_DHCP_HOSTNAME_FLAG_NONE,
     * a global default is looked up in NetworkManager configuration. If that value
     * is unset or also %NM_DHCP_HOSTNAME_FLAG_NONE, then the standard FQDN flags
     * described above are sent in the DHCP requests.
     */
    dhcp_hostname_flags: number
    /**
     * Flags for the DHCP hostname and FQDN.
     * 
     * Currently, this property only includes flags to control the FQDN flags
     * set in the DHCP FQDN option. Supported FQDN flags are
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_NO_UPDATE.  When no FQDN flag is set and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is set, the DHCP FQDN option will
     * contain no flag. Otherwise, if no FQDN flag is set and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_CLEAR_FLAGS is not set, the standard FQDN flags
     * are set in the request:
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE,
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_ENCODED for IPv4 and
     * %NM_DHCP_HOSTNAME_FLAG_FQDN_SERV_UPDATE for IPv6.
     * 
     * When this property is set to the default value %NM_DHCP_HOSTNAME_FLAG_NONE,
     * a global default is looked up in NetworkManager configuration. If that value
     * is unset or also %NM_DHCP_HOSTNAME_FLAG_NONE, then the standard FQDN flags
     * described above are sent in the DHCP requests.
     */
    dhcpHostnameFlags: number
    /**
     * A string containing the "Identity Association Identifier" (IAID) used by
     * the DHCP client. The string can be a 32-bit number (either decimal,
     * hexadecimal or as colon separated hexadecimal numbers). Alternatively
     * it can be set to the special values "mac", "perm-mac", "ifname" or
     * "stable". When set to "mac" (or "perm-mac"), the last 4 bytes of the
     * current (or permanent) MAC address are used as IAID. When set to
     * "ifname", the IAID is computed by hashing the interface name. The
     * special value "stable" can be used to generate an IAID based on the
     * stable-id (see connection.stable-id), a per-host key and the interface
     * name. When the property is unset, the value from global configuration is
     * used; if no global default is set then the IAID is assumed to be
     * "ifname".
     * 
     * For DHCPv4, the IAID is only used with "ipv4.dhcp-client-id"
     * values "duid" and "ipv6-duid" to generate the client-id.
     * 
     * For DHCPv6, note that at the moment this property is
     * only supported by the "internal" DHCPv6 plugin. The "dhclient" DHCPv6
     * plugin always derives the IAID from the MAC address.
     * 
     * The actually used DHCPv6 IAID for a currently activated interface is
     * exposed in the lease information of the device.
     */
    dhcp_iaid: string
    /**
     * A string containing the "Identity Association Identifier" (IAID) used by
     * the DHCP client. The string can be a 32-bit number (either decimal,
     * hexadecimal or as colon separated hexadecimal numbers). Alternatively
     * it can be set to the special values "mac", "perm-mac", "ifname" or
     * "stable". When set to "mac" (or "perm-mac"), the last 4 bytes of the
     * current (or permanent) MAC address are used as IAID. When set to
     * "ifname", the IAID is computed by hashing the interface name. The
     * special value "stable" can be used to generate an IAID based on the
     * stable-id (see connection.stable-id), a per-host key and the interface
     * name. When the property is unset, the value from global configuration is
     * used; if no global default is set then the IAID is assumed to be
     * "ifname".
     * 
     * For DHCPv4, the IAID is only used with "ipv4.dhcp-client-id"
     * values "duid" and "ipv6-duid" to generate the client-id.
     * 
     * For DHCPv6, note that at the moment this property is
     * only supported by the "internal" DHCPv6 plugin. The "dhclient" DHCPv6
     * plugin always derives the IAID from the MAC address.
     * 
     * The actually used DHCPv6 IAID for a currently activated interface is
     * exposed in the lease information of the device.
     */
    dhcpIaid: string
    /**
     * Array of servers from which DHCP offers must be rejected. This property
     * is useful to avoid getting a lease from misconfigured or rogue servers.
     * 
     * For DHCPv4, each element must be an IPv4 address, optionally
     * followed by a slash and a prefix length (e.g. "192.168.122.0/24").
     * 
     * This property is currently not implemented for DHCPv6.
     */
    dhcp_reject_servers: string[]
    /**
     * Array of servers from which DHCP offers must be rejected. This property
     * is useful to avoid getting a lease from misconfigured or rogue servers.
     * 
     * For DHCPv4, each element must be an IPv4 address, optionally
     * followed by a slash and a prefix length (e.g. "192.168.122.0/24").
     * 
     * This property is currently not implemented for DHCPv6.
     */
    dhcpRejectServers: string[]
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIPConfig:dhcp-hostname property is %NULL and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcp_send_hostname: boolean
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIPConfig:dhcp-hostname property is %NULL and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcpSendHostname: boolean
    /**
     * A timeout for a DHCP transaction in seconds. If zero (the default), a
     * globally configured default is used. If still unspecified, a device specific
     * timeout is used (usually 45 seconds).
     * 
     * Set to 2147483647 (MAXINT32) for infinity.
     */
    dhcp_timeout: number
    /**
     * A timeout for a DHCP transaction in seconds. If zero (the default), a
     * globally configured default is used. If still unspecified, a device specific
     * timeout is used (usually 45 seconds).
     * 
     * Set to 2147483647 (MAXINT32) for infinity.
     */
    dhcpTimeout: number
    /**
     * Array of IP addresses of DNS servers.
     * 
     * For DoT (DNS over TLS), the SNI server name can be specified by appending
     * "#example.com" to the IP address of the DNS server. This currently only has
     * effect when using systemd-resolved.
     */
    dns: string[]
    /**
     * Array of DNS options as described in man 5 resolv.conf.
     * 
     * %NULL means that the options are unset and left at the default.
     * In this case NetworkManager will use default options. This is
     * distinct from an empty list of properties.
     * 
     * The currently supported options are "attempts", "debug", "edns0",
     * "inet6", "ip6-bytestring", "ip6-dotint", "ndots", "no-aaaa",
     * "no-check-names", "no-ip6-dotint", "no-reload", "no-tld-query",
     * "rotate", "single-request", "single-request-reopen", "timeout",
     * "trust-ad", "use-vc".
     * 
     * The "trust-ad" setting is only honored if the profile contributes
     * name servers to resolv.conf, and if all contributing profiles have
     * "trust-ad" enabled.
     * 
     * When using a caching DNS plugin (dnsmasq or systemd-resolved in
     * NetworkManager.conf) then "edns0" and "trust-ad" are automatically
     * added.
     */
    dns_options: string[]
    /**
     * Array of DNS options as described in man 5 resolv.conf.
     * 
     * %NULL means that the options are unset and left at the default.
     * In this case NetworkManager will use default options. This is
     * distinct from an empty list of properties.
     * 
     * The currently supported options are "attempts", "debug", "edns0",
     * "inet6", "ip6-bytestring", "ip6-dotint", "ndots", "no-aaaa",
     * "no-check-names", "no-ip6-dotint", "no-reload", "no-tld-query",
     * "rotate", "single-request", "single-request-reopen", "timeout",
     * "trust-ad", "use-vc".
     * 
     * The "trust-ad" setting is only honored if the profile contributes
     * name servers to resolv.conf, and if all contributing profiles have
     * "trust-ad" enabled.
     * 
     * When using a caching DNS plugin (dnsmasq or systemd-resolved in
     * NetworkManager.conf) then "edns0" and "trust-ad" are automatically
     * added.
     */
    dnsOptions: string[]
    /**
     * DNS servers priority.
     * 
     * The relative priority for DNS servers specified by this setting.  A lower
     * numerical value is better (higher priority).
     * 
     * Negative values have the special effect of excluding other configurations
     * with a greater numerical priority value; so in presence of at least one negative
     * priority, only DNS servers from connections with the lowest priority value will be used.
     * To avoid all DNS leaks, set the priority of the profile that should be used
     * to the most negative value of all active connections profiles.
     * 
     * Zero selects a globally configured default value. If the latter is missing
     * or zero too, it defaults to 50 for VPNs (including WireGuard) and 100 for
     * other connections.
     * 
     * Note that the priority is to order DNS settings for multiple active
     * connections.  It does not disambiguate multiple DNS servers within the
     * same connection profile.
     * 
     * When multiple devices have configurations with the same priority, VPNs will be
     * considered first, then devices with the best (lowest metric) default
     * route and then all other devices.
     * 
     * When using dns=default, servers with higher priority will be on top of
     * resolv.conf. To prioritize a given server over another one within the
     * same connection, just specify them in the desired order.
     * Note that commonly the resolver tries name servers in /etc/resolv.conf
     * in the order listed, proceeding with the next server in the list
     * on failure. See for example the "rotate" option of the dns-options setting.
     * If there are any negative DNS priorities, then only name servers from
     * the devices with that lowest priority will be considered.
     * 
     * When using a DNS resolver that supports Conditional Forwarding or
     * Split DNS (with dns=dnsmasq or dns=systemd-resolved settings), each connection
     * is used to query domains in its search list. The search domains determine which
     * name servers to ask, and the DNS priority is used to prioritize
     * name servers based on the domain.  Queries for domains not present in any
     * search list are routed through connections having the '~.' special wildcard
     * domain, which is added automatically to connections with the default route
     * (or can be added manually).  When multiple connections specify the same domain, the
     * one with the best priority (lowest numerical value) wins.  If a sub domain
     * is configured on another interface it will be accepted regardless the priority,
     * unless parent domain on the other interface has a negative priority, which causes
     * the sub domain to be shadowed.
     * With Split DNS one can avoid undesired DNS leaks by properly configuring
     * DNS priorities and the search domains, so that only name servers of the desired
     * interface are configured.
     */
    dns_priority: number
    /**
     * DNS servers priority.
     * 
     * The relative priority for DNS servers specified by this setting.  A lower
     * numerical value is better (higher priority).
     * 
     * Negative values have the special effect of excluding other configurations
     * with a greater numerical priority value; so in presence of at least one negative
     * priority, only DNS servers from connections with the lowest priority value will be used.
     * To avoid all DNS leaks, set the priority of the profile that should be used
     * to the most negative value of all active connections profiles.
     * 
     * Zero selects a globally configured default value. If the latter is missing
     * or zero too, it defaults to 50 for VPNs (including WireGuard) and 100 for
     * other connections.
     * 
     * Note that the priority is to order DNS settings for multiple active
     * connections.  It does not disambiguate multiple DNS servers within the
     * same connection profile.
     * 
     * When multiple devices have configurations with the same priority, VPNs will be
     * considered first, then devices with the best (lowest metric) default
     * route and then all other devices.
     * 
     * When using dns=default, servers with higher priority will be on top of
     * resolv.conf. To prioritize a given server over another one within the
     * same connection, just specify them in the desired order.
     * Note that commonly the resolver tries name servers in /etc/resolv.conf
     * in the order listed, proceeding with the next server in the list
     * on failure. See for example the "rotate" option of the dns-options setting.
     * If there are any negative DNS priorities, then only name servers from
     * the devices with that lowest priority will be considered.
     * 
     * When using a DNS resolver that supports Conditional Forwarding or
     * Split DNS (with dns=dnsmasq or dns=systemd-resolved settings), each connection
     * is used to query domains in its search list. The search domains determine which
     * name servers to ask, and the DNS priority is used to prioritize
     * name servers based on the domain.  Queries for domains not present in any
     * search list are routed through connections having the '~.' special wildcard
     * domain, which is added automatically to connections with the default route
     * (or can be added manually).  When multiple connections specify the same domain, the
     * one with the best priority (lowest numerical value) wins.  If a sub domain
     * is configured on another interface it will be accepted regardless the priority,
     * unless parent domain on the other interface has a negative priority, which causes
     * the sub domain to be shadowed.
     * With Split DNS one can avoid undesired DNS leaks by properly configuring
     * DNS priorities and the search domains, so that only name servers of the desired
     * interface are configured.
     */
    dnsPriority: number
    /**
     * List of DNS search domains. Domains starting with a tilde ('~')
     * are considered 'routing' domains and are used only to decide the
     * interface over which a query must be forwarded; they are not used
     * to complete unqualified host names.
     * 
     * When using a DNS plugin that supports Conditional Forwarding or
     * Split DNS, then the search domains specify which name servers to
     * query. This makes the behavior different from running with plain
     * /etc/resolv.conf. For more information see also the dns-priority setting.
     * 
     * When set on a profile that also enabled DHCP, the DNS search list
     * received automatically (option 119 for DHCPv4 and option 24 for DHCPv6)
     * gets merged with the manual list. This can be prevented by setting
     * "ignore-auto-dns". Note that if no DNS searches are configured, the
     * fallback will be derived from the domain from DHCP (option 15).
     */
    dns_search: string[]
    /**
     * List of DNS search domains. Domains starting with a tilde ('~')
     * are considered 'routing' domains and are used only to decide the
     * interface over which a query must be forwarded; they are not used
     * to complete unqualified host names.
     * 
     * When using a DNS plugin that supports Conditional Forwarding or
     * Split DNS, then the search domains specify which name servers to
     * query. This makes the behavior different from running with plain
     * /etc/resolv.conf. For more information see also the dns-priority setting.
     * 
     * When set on a profile that also enabled DHCP, the DNS search list
     * received automatically (option 119 for DHCPv4 and option 24 for DHCPv6)
     * gets merged with the manual list. This can be prevented by setting
     * "ignore-auto-dns". Note that if no DNS searches are configured, the
     * fallback will be derived from the domain from DHCP (option 15).
     */
    dnsSearch: string[]
    /**
     * The gateway associated with this configuration. This is only meaningful
     * if #NMSettingIPConfig:addresses is also set.
     * 
     * Setting the gateway causes NetworkManager to configure a standard default route
     * with the gateway as next hop. This is ignored if #NMSettingIPConfig:never-default
     * is set. An alternative is to configure the default route explicitly with a manual
     * route and /0 as prefix length.
     * 
     * Note that the gateway usually conflicts with routing that NetworkManager configures
     * for WireGuard interfaces, so usually it should not be set in that case. See
     * #NMSettingWireGuard:ip4-auto-default-route.
     */
    gateway: string
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to
     * %TRUE, automatically configured name servers and search domains are
     * ignored and only name servers and search domains specified in the
     * #NMSettingIPConfig:dns and #NMSettingIPConfig:dns-search properties, if
     * any, are used.
     */
    ignore_auto_dns: boolean
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to
     * %TRUE, automatically configured name servers and search domains are
     * ignored and only name servers and search domains specified in the
     * #NMSettingIPConfig:dns and #NMSettingIPConfig:dns-search properties, if
     * any, are used.
     */
    ignoreAutoDns: boolean
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIPConfig:routes property, if any, are used.
     */
    ignore_auto_routes: boolean
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIPConfig:routes property, if any, are used.
     */
    ignoreAutoRoutes: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if the
     * configuration specified by this property times out.  Note that at least
     * one IP configuration must succeed or overall network configuration will
     * still fail.  For example, in IPv6-only networks, setting this property to
     * %TRUE on the #NMSettingIP4Config allows the overall network configuration
     * to succeed if IPv4 configuration fails but IPv6 configuration completes
     * successfully.
     */
    may_fail: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if the
     * configuration specified by this property times out.  Note that at least
     * one IP configuration must succeed or overall network configuration will
     * still fail.  For example, in IPv6-only networks, setting this property to
     * %TRUE on the #NMSettingIP4Config allows the overall network configuration
     * to succeed if IPv4 configuration fails but IPv6 configuration completes
     * successfully.
     */
    mayFail: boolean
    /**
     * IP configuration method.
     * 
     * #NMSettingIP4Config and #NMSettingIP6Config both support "disabled",
     * "auto", "manual", and "link-local". See the subclass-specific
     * documentation for other values.
     * 
     * In general, for the "auto" method, properties such as
     * #NMSettingIPConfig:dns and #NMSettingIPConfig:routes specify information
     * that is added on to the information returned from automatic
     * configuration.  The #NMSettingIPConfig:ignore-auto-routes and
     * #NMSettingIPConfig:ignore-auto-dns properties modify this behavior.
     * 
     * For methods that imply no upstream network, such as "shared" or
     * "link-local", these properties must be empty.
     * 
     * For IPv4 method "shared", the IP subnet can be configured by adding one
     * manual IPv4 address or otherwise 10.42.x.0/24 is chosen. Note that the
     * shared method must be configured on the interface which shares the internet
     * to a subnet, not on the uplink which is shared.
     */
    method: string
    /**
     * If %TRUE, this connection will never be the default connection for this
     * IP type, meaning it will never be assigned the default route by
     * NetworkManager.
     */
    never_default: boolean
    /**
     * If %TRUE, this connection will never be the default connection for this
     * IP type, meaning it will never be assigned the default route by
     * NetworkManager.
     */
    neverDefault: boolean
    /**
     * Connections will default to keep the autogenerated priority 0 local rule
     * unless this setting is set to %TRUE.
     */
    replace_local_rule: Ternary
    /**
     * Connections will default to keep the autogenerated priority 0 local rule
     * unless this setting is set to %TRUE.
     */
    replaceLocalRule: Ternary
    /**
     * The minimum time interval in milliseconds for which dynamic IP configuration
     * should be tried before the connection succeeds.
     * 
     * This property is useful for example if both IPv4 and IPv6 are enabled and
     * are allowed to fail. Normally the connection succeeds as soon as one of
     * the two address families completes; by setting a required timeout for
     * e.g. IPv4, one can ensure that even if IP6 succeeds earlier than IPv4,
     * NetworkManager waits some time for IPv4 before the connection becomes
     * active.
     * 
     * Note that if #NMSettingIPConfig:may-fail is FALSE for the same address
     * family, this property has no effect as NetworkManager needs to wait for
     * the full DHCP timeout.
     * 
     * A zero value means that no required timeout is present, -1 means the
     * default value (either configuration ipvx.required-timeout override or
     * zero).
     */
    required_timeout: number
    /**
     * The minimum time interval in milliseconds for which dynamic IP configuration
     * should be tried before the connection succeeds.
     * 
     * This property is useful for example if both IPv4 and IPv6 are enabled and
     * are allowed to fail. Normally the connection succeeds as soon as one of
     * the two address families completes; by setting a required timeout for
     * e.g. IPv4, one can ensure that even if IP6 succeeds earlier than IPv4,
     * NetworkManager waits some time for IPv4 before the connection becomes
     * active.
     * 
     * Note that if #NMSettingIPConfig:may-fail is FALSE for the same address
     * family, this property has no effect as NetworkManager needs to wait for
     * the full DHCP timeout.
     * 
     * A zero value means that no required timeout is present, -1 means the
     * default value (either configuration ipvx.required-timeout override or
     * zero).
     */
    requiredTimeout: number
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * The default value -1 means that the metric is chosen automatically
     * based on the device type.
     * The metric applies to dynamic routes, manual (static) routes that
     * don't have an explicit metric setting, address prefix routes, and
     * the default route.
     * Note that for IPv6, the kernel accepts zero (0) but coerces it to
     * 1024 (user default). Hence, setting this property to zero effectively
     * mean setting it to 1024.
     * For IPv4, zero is a regular value for the metric.
     */
    route_metric: number
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * The default value -1 means that the metric is chosen automatically
     * based on the device type.
     * The metric applies to dynamic routes, manual (static) routes that
     * don't have an explicit metric setting, address prefix routes, and
     * the default route.
     * Note that for IPv6, the kernel accepts zero (0) but coerces it to
     * 1024 (user default). Hence, setting this property to zero effectively
     * mean setting it to 1024.
     * For IPv4, zero is a regular value for the metric.
     */
    routeMetric: number
    /**
     * Enable policy routing (source routing) and set the routing table used when adding routes.
     * 
     * This affects all routes, including device-routes, IPv4LL, DHCP, SLAAC, default-routes
     * and static routes. But note that static routes can individually overwrite the setting
     * by explicitly specifying a non-zero routing table.
     * 
     * If the table setting is left at zero, it is eligible to be overwritten via global
     * configuration. If the property is zero even after applying the global configuration
     * value, policy routing is disabled for the address family of this connection.
     * 
     * Policy routing disabled means that NetworkManager will add all routes to the main
     * table (except static routes that explicitly configure a different table). Additionally,
     * NetworkManager will not delete any extraneous routes from tables except the main table.
     * This is to preserve backward compatibility for users who manage routing tables outside
     * of NetworkManager.
     */
    route_table: number
    /**
     * Enable policy routing (source routing) and set the routing table used when adding routes.
     * 
     * This affects all routes, including device-routes, IPv4LL, DHCP, SLAAC, default-routes
     * and static routes. But note that static routes can individually overwrite the setting
     * by explicitly specifying a non-zero routing table.
     * 
     * If the table setting is left at zero, it is eligible to be overwritten via global
     * configuration. If the property is zero even after applying the global configuration
     * value, policy routing is disabled for the address family of this connection.
     * 
     * Policy routing disabled means that NetworkManager will add all routes to the main
     * table (except static routes that explicitly configure a different table). Additionally,
     * NetworkManager will not delete any extraneous routes from tables except the main table.
     * This is to preserve backward compatibility for users who manage routing tables outside
     * of NetworkManager.
     */
    routeTable: number
    /**
     * Array of IP routes.
     */
    routes: IPRoute[]

    // Owm methods of NM-1.0.SettingIPConfig

    /**
     * Adds a new IP address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     * @param address the new address to add
     * @returns %TRUE if the address was added; %FALSE if the address was already known.
     */
    add_address(address: IPAddress): boolean
    /**
     * Adds a new DHCP reject server to the setting.
     * @param server the DHCP reject server to add
     */
    add_dhcp_reject_server(server: string): void
    /**
     * Adds a new DNS server to the setting.
     * @param dns the IP address of the DNS server to add
     * @returns %TRUE if the DNS server was added; %FALSE if the server was already known Before 1.42, setting @dns to an invalid string was treated as user-error. Now, also invalid DNS values can be set, but will be rejected later during nm_connection_verify().
     */
    add_dns(dns: string): boolean
    /**
     * Adds a new DNS option to the setting.
     * @param dns_option the DNS option to add
     * @returns %TRUE if the DNS option was added; %FALSE otherwise
     */
    add_dns_option(dns_option: string): boolean
    /**
     * Adds a new DNS search domain to the setting.
     * @param dns_search the search domain to add
     * @returns %TRUE if the DNS search domain was added; %FALSE if the search domain was already known
     */
    add_dns_search(dns_search: string): boolean
    /**
     * Appends a new route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
     * If an identical route (considering attributes as well) already exists, the
     * route is not added and the function returns %FALSE.
     * 
     * Note that before 1.10, this function would not consider route attributes
     * and not add a route that has an existing route with same dest/prefix,next_hop,metric
     * parameters.
     * @param route the route to add
     * @returns %TRUE if the route was added; %FALSE if the route was already known.
     */
    add_route(route: IPRoute): boolean
    /**
     * Appends a new routing-rule and associated information to the setting. The
     * given routing rules gets sealed and the reference count is incremented.
     * The function does not check whether an identical rule already exists
     * and always appends the rule to the end of the list.
     * @param routing_rule the #NMIPRoutingRule to add. The address family   of the added rule must be compatible with the setting.
     */
    add_routing_rule(routing_rule: IPRoutingRule): void
    /**
     * Removes all configured addresses.
     */
    clear_addresses(): void
    /**
     * Removes all configured DHCP reject servers.
     */
    clear_dhcp_reject_servers(): void
    /**
     * Removes all configured DNS servers.
     */
    clear_dns(): void
    /**
     * Removes all configured DNS options.
     * @param is_set the dns-options can be either empty or unset (default).   Specify how to clear the options.
     */
    clear_dns_options(is_set: boolean): void
    /**
     * Removes all configured DNS search domains.
     */
    clear_dns_searches(): void
    /**
     * Removes all configured routes.
     */
    clear_routes(): void
    /**
     * Removes all configured routing rules.
     */
    clear_routing_rules(): void
    get_address(idx: number): IPAddress
    get_auto_route_ext_gw(): Ternary
    get_dad_timeout(): number
    /**
     * Returns the value contained in the #NMSettingIPConfig:dhcp-hostname
     * property.
     * @returns the configured hostname to send to the DHCP server
     */
    get_dhcp_hostname(): string
    /**
     * Returns the value contained in the #NMSettingIPConfig:dhcp-hostname-flags
     * property.
     * @returns flags for the DHCP hostname and FQDN
     */
    get_dhcp_hostname_flags(): DhcpHostnameFlags
    /**
     * Returns the value contained in the #NMSettingIPConfig:dhcp-iaid
     * property.
     * @returns the configured DHCP IAID (Identity Association Identifier)
     */
    get_dhcp_iaid(): string
    get_dhcp_reject_servers(): string[]
    /**
     * Returns the value contained in the #NMSettingIPConfig:dhcp-send-hostname
     * property.
     * @returns %TRUE if NetworkManager should send the machine hostname to the DHCP server when requesting addresses to allow the server to automatically update DNS information for this machine.
     */
    get_dhcp_send_hostname(): boolean
    /**
     * Returns the value contained in the #NMSettingIPConfig:dhcp-timeout
     * property.
     * @returns the configured DHCP timeout in seconds. 0 = default for the particular kind of device.
     */
    get_dhcp_timeout(): number
    get_dns(idx: number): string
    get_dns_option(idx: number): string
    get_dns_priority(): number
    get_dns_search(idx: number): string
    get_gateway(): string
    /**
     * Returns the value contained in the #NMSettingIPConfig:ignore-auto-dns
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP) DNS information should be ignored.
     */
    get_ignore_auto_dns(): boolean
    /**
     * Returns the value contained in the #NMSettingIPConfig:ignore-auto-routes
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP) routes should be ignored.
     */
    get_ignore_auto_routes(): boolean
    /**
     * Returns the value contained in the #NMSettingIPConfig:may-fail
     * property.
     * @returns %TRUE if this connection doesn't require this type of IP addressing to complete for the connection to succeed.
     */
    get_may_fail(): boolean
    get_method(): string
    /**
     * Returns the value contained in the #NMSettingIPConfig:never-default
     * property.
     * @returns %TRUE if this connection should never be the default   connection
     */
    get_never_default(): boolean
    get_num_addresses(): number
    get_num_dns(): number
    get_num_dns_options(): number
    get_num_dns_searches(): number
    get_num_routes(): number
    get_num_routing_rules(): number
    get_replace_local_rule(): Ternary
    /**
     * Returns the value contained in the #NMSettingIPConfig:required-timeout
     * property.
     * @returns the required timeout for the address family
     */
    get_required_timeout(): number
    get_route(idx: number): IPRoute
    /**
     * Returns the value contained in the #NMSettingIPConfig:route-metric
     * property.
     * @returns the route metric that is used for routes that don't explicitly specify a metric. See #NMSettingIPConfig:route-metric for more details.
     */
    get_route_metric(): number
    /**
     * Returns the value contained in the #NMSettingIPConfig:route-table
     * property.
     * @returns the configured route-table.
     */
    get_route_table(): number
    get_routing_rule(idx: number): IPRoutingRule
    /**
     * NMSettingIPConfig can have a list of dns-options. If the list
     * is empty, there are two similar (but differentiated) states.
     * Either the options are explicitly set to have no values,
     * or the options are left undefined. The latter means to use
     * a default configuration, while the former explicitly means "no-options".
     * @returns whether DNS options are initialized or left unset (the default).
     */
    has_dns_options(): boolean
    /**
     * Removes the address at index `idx`.
     * @param idx index number of the address to remove
     */
    remove_address(idx: number): void
    /**
     * Removes the address `address`.
     * @param address the IP address to remove
     * @returns %TRUE if the address was found and removed; %FALSE if it was not.
     */
    remove_address_by_value(address: IPAddress): boolean
    /**
     * Removes the DHCP reject server at index `idx`.
     * @param idx index number of the DHCP reject server
     */
    remove_dhcp_reject_server(idx: number): void
    /**
     * Removes the DNS server at index `idx`.
     * @param idx index number of the DNS server to remove
     */
    remove_dns(idx: number): void
    /**
     * Removes the DNS server `dns`.
     * @param dns the DNS server to remove
     * @returns %TRUE if the DNS server was found and removed; %FALSE if it was not. Before 1.42, setting @dns to an invalid string was treated as user-error.
     */
    remove_dns_by_value(dns: string): boolean
    /**
     * Removes the DNS option at index `idx`.
     * @param idx index number of the DNS option
     */
    remove_dns_option(idx: number): void
    /**
     * Removes the DNS option `dns_option`.
     * @param dns_option the DNS option to remove
     * @returns %TRUE if the DNS option was found and removed; %FALSE if it was not.
     */
    remove_dns_option_by_value(dns_option: string): boolean
    /**
     * Removes the DNS search domain at index `idx`.
     * @param idx index number of the DNS search domain
     */
    remove_dns_search(idx: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     * @param dns_search the search domain to remove
     * @returns %TRUE if the DNS search domain was found and removed; %FALSE if it was not.
     */
    remove_dns_search_by_value(dns_search: string): boolean
    /**
     * Removes the route at index `idx`.
     * @param idx index number of the route
     */
    remove_route(idx: number): void
    /**
     * Removes the first matching route that matches `route`.
     * Note that before 1.10, this function would only compare dest/prefix,next_hop,metric
     * and ignore route attributes. Now, `route` must match exactly.
     * @param route the route to remove
     * @returns %TRUE if the route was found and removed; %FALSE if it was not.
     */
    remove_route_by_value(route: IPRoute): boolean
    /**
     * Removes the routing_rule at index `idx`.
     * @param idx index number of the routing_rule
     */
    remove_routing_rule(idx: number): void
}

module SettingIPTunnel {

    // Constructor properties interface

}

/**
 * IP Tunneling Settings
 */
class SettingIPTunnel extends Setting {

    // Own properties of NM-1.0.SettingIPTunnel

    /**
     * How many additional levels of encapsulation are permitted to be prepended
     * to packets. This property applies only to IPv6 tunnels. To disable this option,
     * add %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT to ip-tunnel flags.
     */
    encapsulation_limit: number
    /**
     * How many additional levels of encapsulation are permitted to be prepended
     * to packets. This property applies only to IPv6 tunnels. To disable this option,
     * add %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT to ip-tunnel flags.
     */
    encapsulationLimit: number
    /**
     * Tunnel flags. Currently, the following values are supported:
     * %NM_IP_TUNNEL_FLAG_IP6_IGN_ENCAP_LIMIT, %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_TCLASS,
     * %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_FLOWLABEL, %NM_IP_TUNNEL_FLAG_IP6_MIP6_DEV,
     * %NM_IP_TUNNEL_FLAG_IP6_RCV_DSCP_COPY, %NM_IP_TUNNEL_FLAG_IP6_USE_ORIG_FWMARK.
     * They are valid only for IPv6 tunnels.
     */
    flags: number
    /**
     * The flow label to assign to tunnel packets. This property applies only to
     * IPv6 tunnels.
     */
    flow_label: number
    /**
     * The flow label to assign to tunnel packets. This property applies only to
     * IPv6 tunnels.
     */
    flowLabel: number
    /**
     * The fwmark value to assign to tunnel packets. This property can be set
     * to a non zero value only on VTI and VTI6 tunnels.
     */
    fwmark: number
    /**
     * The key used for tunnel input packets; the property is valid only for
     * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
     */
    input_key: string
    /**
     * The key used for tunnel input packets; the property is valid only for
     * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
     */
    inputKey: string
    /**
     * The local endpoint of the tunnel; the value can be empty, otherwise it
     * must contain an IPv4 or IPv6 address.
     */
    local: string
    /**
     * The tunneling mode. Valid values: %NM_IP_TUNNEL_MODE_IPIP,
     * %NM_IP_TUNNEL_MODE_GRE, %NM_IP_TUNNEL_MODE_SIT, %NM_IP_TUNNEL_MODE_ISATAP,
     * %NM_IP_TUNNEL_MODE_VTI, %NM_IP_TUNNEL_MODE_IP6IP6, %NM_IP_TUNNEL_MODE_IPIP6,
     * %NM_IP_TUNNEL_MODE_IP6GRE, %NM_IP_TUNNEL_MODE_VTI6, %NM_IP_TUNNEL_MODE_GRETAP
     * and %NM_IP_TUNNEL_MODE_IP6GRETAP
     */
    mode: number
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple fragments.
     */
    mtu: number
    /**
     * The key used for tunnel output packets; the property is valid only for
     * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
     */
    output_key: string
    /**
     * The key used for tunnel output packets; the property is valid only for
     * certain tunnel modes (GRE, IP6GRE). If empty, no key is used.
     */
    outputKey: string
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * the new device will be bound to so that tunneled packets will only be
     * routed via that interface.
     */
    parent: string
    /**
     * Whether to enable Path MTU Discovery on this tunnel.
     */
    path_mtu_discovery: boolean
    /**
     * Whether to enable Path MTU Discovery on this tunnel.
     */
    pathMtuDiscovery: boolean
    /**
     * The remote endpoint of the tunnel; the value must contain an IPv4 or IPv6
     * address.
     */
    remote: string
    /**
     * The type of service (IPv4) or traffic class (IPv6) field to be set on
     * tunneled packets.
     */
    tos: number
    /**
     * The TTL to assign to tunneled packets. 0 is a special value meaning that
     * packets inherit the TTL value.
     */
    ttl: number

    // Constructors of NM-1.0.SettingIPTunnel


static ["new"](): SettingIPTunnel;

    // Owm methods of NM-1.0.SettingIPTunnel

    /**
     * Returns the #NMSettingIPTunnel:encapsulation-limit property of the setting.
     * @returns the encapsulation limit value
     */
    get_encapsulation_limit(): number
    /**
     * Returns the #NMSettingIPTunnel:flags property of the setting.
     * @returns the tunnel flags
     */
    get_flags(): IPTunnelFlags
    /**
     * Returns the #NMSettingIPTunnel:flow-label property of the setting.
     * @returns the flow label value
     */
    get_flow_label(): number
    /**
     * Returns the #NMSettingIPTunnel:fwmark property of the setting.
     * @returns the fwmark value
     */
    get_fwmark(): number
    /**
     * Returns the #NMSettingIPTunnel:input-key property of the setting.
     * @returns the input key
     */
    get_input_key(): string
    /**
     * Returns the #NMSettingIPTunnel:local property of the setting.
     * @returns the local endpoint
     */
    get_local(): string
    /**
     * Returns the #NMSettingIPTunnel:mode property of the setting.
     * @returns the tunnel mode
     */
    get_mode(): IPTunnelMode
    /**
     * Returns the #NMSettingIPTunnel:mtu property of the setting.
     * @returns the MTU
     */
    get_mtu(): number
    /**
     * Returns the #NMSettingIPTunnel:output-key property of the setting.
     * @returns the output key
     */
    get_output_key(): string
    /**
     * Returns the #NMSettingIPTunnel:parent property of the setting
     * @returns the parent device
     */
    get_parent(): string
    /**
     * Returns the #NMSettingIPTunnel:path-mtu-discovery property of the setting.
     * @returns whether path MTU discovery is enabled
     */
    get_path_mtu_discovery(): boolean
    /**
     * Returns the #NMSettingIPTunnel:remote property of the setting.
     * @returns the remote endpoint
     */
    get_remote(): string
    /**
     * Returns the #NMSettingIPTunnel:tos property of the setting.
     * @returns the TOS value
     */
    get_tos(): number
    /**
     * Returns the #NMSettingIPTunnel:ttl property of the setting.
     * @returns the Time-to-live value
     */
    get_ttl(): number
}

module SettingInfiniband {

    // Constructor properties interface

}

/**
 * Infiniband Settings
 */
class SettingInfiniband extends Setting {

    // Own properties of NM-1.0.SettingInfiniband

    /**
     * If specified, this connection will only apply to the IPoIB device whose
     * permanent MAC address matches. This property does not change the MAC
     * address of the device (i.e. MAC spoofing).
     */
    mac_address: string
    /**
     * If specified, this connection will only apply to the IPoIB device whose
     * permanent MAC address matches. This property does not change the MAC
     * address of the device (i.e. MAC spoofing).
     */
    macAddress: string
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple frames.
     */
    mtu: number
    /**
     * The InfiniBand p-key to use for this device. A value of -1 means to use
     * the default p-key (aka "the p-key at index 0"). Otherwise, it is a
     * 16-bit unsigned integer, whose high bit 0x8000 is set if it is a "full
     * membership" p-key. The values 0 and 0x8000 are not allowed.
     * 
     * With the p-key set, the interface name is always "$parent.$p_key".
     * Setting "connection.interface-name" to another name is not supported.
     * 
     * Note that kernel will internally always set the full membership bit,
     * although the interface name does not reflect that. Usually the user
     * would want to configure a full membership p-key with 0x8000 flag set.
     */
    p_key: number
    /**
     * The InfiniBand p-key to use for this device. A value of -1 means to use
     * the default p-key (aka "the p-key at index 0"). Otherwise, it is a
     * 16-bit unsigned integer, whose high bit 0x8000 is set if it is a "full
     * membership" p-key. The values 0 and 0x8000 are not allowed.
     * 
     * With the p-key set, the interface name is always "$parent.$p_key".
     * Setting "connection.interface-name" to another name is not supported.
     * 
     * Note that kernel will internally always set the full membership bit,
     * although the interface name does not reflect that. Usually the user
     * would want to configure a full membership p-key with 0x8000 flag set.
     */
    pKey: number
    /**
     * The interface name of the parent device of this device. Normally %NULL,
     * but if the #NMSettingInfiniband:p_key property is set, then you must
     * specify the base device by setting either this property or
     * #NMSettingInfiniband:mac-address.
     */
    parent: string
    /**
     * The IP-over-InfiniBand transport mode. Either "datagram" or
     * "connected".
     */
    transport_mode: string
    /**
     * The IP-over-InfiniBand transport mode. Either "datagram" or
     * "connected".
     */
    transportMode: string

    // Constructors of NM-1.0.SettingInfiniband


static ["new"](): SettingInfiniband;

    // Owm methods of NM-1.0.SettingInfiniband

    get_mac_address(): string
    get_mtu(): number
    /**
     * Returns the P_Key to use for this device. A value of -1 means to
     * use the default P_Key (aka "the P_Key at index 0"). Otherwise, it is
     * a 16-bit unsigned integer.
     * @returns the IPoIB P_Key
     */
    get_p_key(): number
    /**
     * Returns the parent interface name for this device, if set.
     * @returns the parent interface name
     */
    get_parent(): string
    /**
     * Returns the transport mode for this device. Either 'datagram' or
     * 'connected'.
     * @returns the IPoIB transport mode
     */
    get_transport_mode(): string
    /**
     * Returns the interface name created by combining #NMSettingInfiniband:parent
     * and #NMSettingInfiniband:p-key. (If either property is unset, this will
     * return %NULL.)
     * @returns the interface name, or %NULL
     */
    get_virtual_interface_name(): string
}

module SettingLink {

    // Constructor properties interface

}

/**
 * Link settings
 */
class SettingLink extends Setting {

    // Own properties of NM-1.0.SettingLink

    /**
     * The maximum size of a packet built by the Generic Receive Offload stack for
     * this device. The value must be between 0 and 4294967295. When set to -1, the
     * existing value is preserved.
     */
    gro_max_size: number
    /**
     * The maximum size of a packet built by the Generic Receive Offload stack for
     * this device. The value must be between 0 and 4294967295. When set to -1, the
     * existing value is preserved.
     */
    groMaxSize: number
    /**
     * The maximum segments of a Generic Segment Offload packet the device should accept.
     * The value must be between 0 and 4294967295. When set to -1, the existing value
     * is preserved.
     */
    gso_max_segments: number
    /**
     * The maximum segments of a Generic Segment Offload packet the device should accept.
     * The value must be between 0 and 4294967295. When set to -1, the existing value
     * is preserved.
     */
    gsoMaxSegments: number
    /**
     * The maximum size of a Generic Segment Offload packet the device should accept.
     * The value must be between 0 and 4294967295. When set to -1, the existing value
     * is preserved.
     */
    gso_max_size: number
    /**
     * The maximum size of a Generic Segment Offload packet the device should accept.
     * The value must be between 0 and 4294967295. When set to -1, the existing value
     * is preserved.
     */
    gsoMaxSize: number
    /**
     * The size of the transmit queue for the device, in number of packets. The value
     * must be between 0 and 4294967295. When set to -1, the existing value is preserved.
     */
    tx_queue_length: number
    /**
     * The size of the transmit queue for the device, in number of packets. The value
     * must be between 0 and 4294967295. When set to -1, the existing value is preserved.
     */
    txQueueLength: number

    // Constructors of NM-1.0.SettingLink


static ["new"](): SettingLink;

    // Owm methods of NM-1.0.SettingLink

    /**
     * Returns the value contained in the #NMSettingLink:gro-max-size
     * property.
     * @returns the 'gro-max-size' property value
     */
    get_gro_max_size(): number
    /**
     * Returns the value contained in the #NMSettingLink:gso-max-segments
     * property.
     * @returns the 'gso-max-segments' property value
     */
    get_gso_max_segments(): number
    /**
     * Returns the value contained in the #NMSettingLink:gso-max-size
     * property.
     * @returns the 'gso-max-size' property value
     */
    get_gso_max_size(): number
    /**
     * Returns the value contained in the #NMSettingLink:tx-queue-length
     * property.
     * @returns the 'tx-queue-length' property value
     */
    get_tx_queue_length(): number
}

module SettingLoopback {

    // Constructor properties interface

}

/**
 * Loopback Link Settings
 */
class SettingLoopback extends Setting {

    // Own properties of NM-1.0.SettingLoopback

    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu: number

    // Constructors of NM-1.0.SettingLoopback


static ["new"](): SettingLoopback;

    // Owm methods of NM-1.0.SettingLoopback

    get_mtu(): number
}

module SettingMacsec {

    // Constructor properties interface

}

/**
 * MACSec Settings
 */
class SettingMacsec extends Setting {

    // Own properties of NM-1.0.SettingMacsec

    /**
     * Whether the transmitted traffic must be encrypted.
     */
    encrypt: boolean
    /**
     * The pre-shared CAK (Connectivity Association Key) for MACsec
     * Key Agreement. Must be a string of 32 hexadecimal characters.
     */
    mka_cak: string
    /**
     * The pre-shared CAK (Connectivity Association Key) for MACsec
     * Key Agreement. Must be a string of 32 hexadecimal characters.
     */
    mkaCak: string
    /**
     * Flags indicating how to handle the #NMSettingMacsec:mka-cak
     * property.
     */
    mka_cak_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingMacsec:mka-cak
     * property.
     */
    mkaCakFlags: SettingSecretFlags
    /**
     * The pre-shared CKN (Connectivity-association Key Name) for
     * MACsec Key Agreement. Must be a string of hexadecimal characters
     * with a even length between 2 and 64.
     */
    mka_ckn: string
    /**
     * The pre-shared CKN (Connectivity-association Key Name) for
     * MACsec Key Agreement. Must be a string of hexadecimal characters
     * with a even length between 2 and 64.
     */
    mkaCkn: string
    /**
     * Specifies how the CAK (Connectivity Association Key) for MKA (MACsec Key
     * Agreement) is obtained.
     */
    mode: number
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this MACSEC interface should be created.  If this property is
     * not specified, the connection must contain an #NMSettingWired setting
     * with a #NMSettingWired:mac-address property.
     */
    parent: string
    /**
     * The port component of the SCI (Secure Channel Identifier), between 1 and 65534.
     */
    port: number
    /**
     * Specifies whether the SCI (Secure Channel Identifier) is included
     * in every packet.
     */
    send_sci: boolean
    /**
     * Specifies whether the SCI (Secure Channel Identifier) is included
     * in every packet.
     */
    sendSci: boolean
    /**
     * Specifies the validation mode for incoming frames.
     */
    validation: number

    // Constructors of NM-1.0.SettingMacsec


static ["new"](): SettingMacsec;

    // Owm methods of NM-1.0.SettingMacsec

    get_encrypt(): boolean
    get_mka_cak(): string
    get_mka_cak_flags(): SettingSecretFlags
    get_mka_ckn(): string
    get_mode(): SettingMacsecMode
    get_parent(): string
    get_port(): number
    get_send_sci(): boolean
    get_validation(): SettingMacsecValidation
}

module SettingMacvlan {

    // Constructor properties interface

}

/**
 * MAC VLAN Settings
 */
class SettingMacvlan extends Setting {

    // Own properties of NM-1.0.SettingMacvlan

    /**
     * The macvlan mode, which specifies the communication mechanism between multiple
     * macvlans on the same lower device.
     */
    mode: number
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this MAC-VLAN interface should be created.  If this property is
     * not specified, the connection must contain an #NMSettingWired setting
     * with a #NMSettingWired:mac-address property.
     */
    parent: string
    /**
     * Whether the interface should be put in promiscuous mode.
     */
    promiscuous: boolean
    /**
     * Whether the interface should be a MACVTAP.
     */
    tap: boolean

    // Constructors of NM-1.0.SettingMacvlan


static ["new"](): SettingMacvlan;

    // Owm methods of NM-1.0.SettingMacvlan

    get_mode(): SettingMacvlanMode
    get_parent(): string
    get_promiscuous(): boolean
    get_tap(): boolean
}

module SettingMatch {

    // Constructor properties interface

}

/**
 * Match settings
 */
class SettingMatch extends Setting {

    // Own properties of NM-1.0.SettingMatch

    /**
     * A list of driver names to match. Each element is a shell wildcard pattern.
     * 
     * See NMSettingMatch:interface-name for how special characters '|', '&amp;',
     * '!' and '\\' are used for optional and mandatory matches and inverting the
     * pattern.
     */
    driver: string[]
    /**
     * A list of interface names to match. Each element is a shell wildcard
     * pattern.
     * 
     * An element can be prefixed with a pipe symbol (|) or an ampersand (&amp;).
     * The former means that the element is optional and the latter means that
     * it is mandatory. If there are any optional elements, than the match
     * evaluates to true if at least one of the optional element matches
     * (logical OR). If there are any mandatory elements, then they all
     * must match (logical AND). By default, an element is optional. This means
     * that an element "foo" behaves the same as "|foo". An element can also be inverted
     * with exclamation mark (!) between the pipe symbol (or the ampersand) and before
     * the pattern. Note that "!foo" is a shortcut for the mandatory match "&amp;!foo". Finally,
     * a backslash can be used at the beginning of the element (after the optional special characters)
     * to escape the start of the pattern. For example, "&amp;\\!a" is an mandatory match for literally "!a".
     */
    interface_name: string[]
    /**
     * A list of interface names to match. Each element is a shell wildcard
     * pattern.
     * 
     * An element can be prefixed with a pipe symbol (|) or an ampersand (&amp;).
     * The former means that the element is optional and the latter means that
     * it is mandatory. If there are any optional elements, than the match
     * evaluates to true if at least one of the optional element matches
     * (logical OR). If there are any mandatory elements, then they all
     * must match (logical AND). By default, an element is optional. This means
     * that an element "foo" behaves the same as "|foo". An element can also be inverted
     * with exclamation mark (!) between the pipe symbol (or the ampersand) and before
     * the pattern. Note that "!foo" is a shortcut for the mandatory match "&amp;!foo". Finally,
     * a backslash can be used at the beginning of the element (after the optional special characters)
     * to escape the start of the pattern. For example, "&amp;\\!a" is an mandatory match for literally "!a".
     */
    interfaceName: string[]
    /**
     * A list of kernel command line arguments to match. This may be used to check
     * whether a specific kernel command line option is set (or unset, if prefixed with
     * the exclamation mark). The argument must either be a single word, or
     * an assignment (i.e. two words, joined by "="). In the former case the kernel
     * command line is searched for the word appearing as is, or as left hand side
     * of an assignment. In the latter case, the exact assignment is looked for
     * with right and left hand side matching. Wildcard patterns are not supported.
     * 
     * See NMSettingMatch:interface-name for how special characters '|', '&amp;',
     * '!' and '\\' are used for optional and mandatory matches and inverting the
     * match.
     */
    kernel_command_line: string[]
    /**
     * A list of kernel command line arguments to match. This may be used to check
     * whether a specific kernel command line option is set (or unset, if prefixed with
     * the exclamation mark). The argument must either be a single word, or
     * an assignment (i.e. two words, joined by "="). In the former case the kernel
     * command line is searched for the word appearing as is, or as left hand side
     * of an assignment. In the latter case, the exact assignment is looked for
     * with right and left hand side matching. Wildcard patterns are not supported.
     * 
     * See NMSettingMatch:interface-name for how special characters '|', '&amp;',
     * '!' and '\\' are used for optional and mandatory matches and inverting the
     * match.
     */
    kernelCommandLine: string[]
    /**
     * A list of paths to match against the ID_PATH udev property of
     * devices. ID_PATH represents the topological persistent path of a
     * device. It typically contains a subsystem string (pci, usb, platform,
     * etc.) and a subsystem-specific identifier.
     * 
     * For PCI devices the path has the form
     * "pci-$domain:$bus:$device.$function", where each variable is an
     * hexadecimal value; for example "pci-0000:0a:00.0".
     * 
     * The path of a device can be obtained with "udevadm info
     * /sys/class/net/$dev | grep ID_PATH=" or by looking at the "path"
     * property exported by NetworkManager ("nmcli -f general.path device
     * show $dev").
     * 
     * Each element of the list is a shell wildcard pattern.
     * 
     * See NMSettingMatch:interface-name for how special characters '|', '&amp;',
     * '!' and '\\' are used for optional and mandatory matches and inverting the
     * pattern.
     */
    path: string[]

    // Constructors of NM-1.0.SettingMatch


static ["new"](): SettingMatch;

    // Owm methods of NM-1.0.SettingMatch

    /**
     * Adds a new driver to the setting.
     * @param driver the driver to add
     */
    add_driver(driver: string): void
    /**
     * Adds a new interface name to the setting.
     * @param interface_name the interface name to add
     */
    add_interface_name(interface_name: string): void
    /**
     * Adds a new kernel command line argument to the setting.
     * @param kernel_command_line the kernel command line argument to add
     */
    add_kernel_command_line(kernel_command_line: string): void
    /**
     * Adds a new path to the setting.
     * @param path the path to add
     */
    add_path(path: string): void
    /**
     * Removes all configured drivers.
     */
    clear_drivers(): void
    /**
     * Removes all configured interface names.
     */
    clear_interface_names(): void
    /**
     * Removes all configured kernel command line arguments.
     */
    clear_kernel_command_lines(): void
    /**
     * Removes all configured paths.
     */
    clear_paths(): void
    get_driver(idx: number): string
    /**
     * Returns all the drivers.
     * @returns the configured drivers.
     */
    get_drivers(): string[]
    get_interface_name(idx: number): string
    /**
     * Returns all the interface names.
     * @returns the NULL terminated list of   configured interface names. Before 1.26, the returned array was not %NULL terminated and you MUST provide a length.
     */
    get_interface_names(): string[]
    get_kernel_command_line(idx: number): string
    /**
     * Returns all the interface names.
     * @returns the configured interface names.
     */
    get_kernel_command_lines(): string[]
    get_num_drivers(): number
    get_num_interface_names(): number
    get_num_kernel_command_lines(): number
    get_num_paths(): number
    get_path(idx: number): string
    /**
     * Returns all the paths.
     * @returns the configured paths.
     */
    get_paths(): string[]
    /**
     * Removes the driver at index `idx`.
     * @param idx index number of the driver
     */
    remove_driver(idx: number): void
    /**
     * Removes `driver`.
     * @param driver the driver to remove
     * @returns %TRUE if the driver was found and removed; %FALSE if it was not.
     */
    remove_driver_by_value(driver: string): boolean
    /**
     * Removes the interface name at index `idx`.
     * @param idx index number of the interface name
     */
    remove_interface_name(idx: number): void
    /**
     * Removes `interface_name`.
     * @param interface_name the interface name to remove
     * @returns %TRUE if the interface name was found and removed; %FALSE if it was not.
     */
    remove_interface_name_by_value(interface_name: string): boolean
    /**
     * Removes the kernel command line argument at index `idx`.
     * @param idx index number of the kernel command line argument
     */
    remove_kernel_command_line(idx: number): void
    /**
     * Removes `kernel_command_line`.
     * @param kernel_command_line the kernel command line argument name to remove
     * @returns %TRUE if the kernel command line argument was found and removed; %FALSE if it was not.
     */
    remove_kernel_command_line_by_value(kernel_command_line: string): boolean
    /**
     * Removes the path at index `idx`.
     * @param idx index number of the path
     */
    remove_path(idx: number): void
    /**
     * Removes `path`.
     * @param path the path to remove
     * @returns %TRUE if the path was found and removed; %FALSE if it was not.
     */
    remove_path_by_value(path: string): boolean
}

module SettingOlpcMesh {

    // Constructor properties interface

}

/**
 * OLPC Wireless Mesh Settings
 */
class SettingOlpcMesh extends Setting {

    // Own properties of NM-1.0.SettingOlpcMesh

    /**
     * Channel on which the mesh network to join is located.
     */
    channel: number
    /**
     * Anycast DHCP MAC address used when requesting an IP address via DHCP.
     * The specific anycast address used determines which DHCP server class
     * answers the request.
     * 
     * This is currently only implemented by dhclient DHCP plugin.
     */
    dhcp_anycast_address: string
    /**
     * Anycast DHCP MAC address used when requesting an IP address via DHCP.
     * The specific anycast address used determines which DHCP server class
     * answers the request.
     * 
     * This is currently only implemented by dhclient DHCP plugin.
     */
    dhcpAnycastAddress: string
    /**
     * SSID of the mesh network to join.
     */
    ssid: GLib.Bytes

    // Constructors of NM-1.0.SettingOlpcMesh


static ["new"](): SettingOlpcMesh;

    // Owm methods of NM-1.0.SettingOlpcMesh

    get_channel(): number
    get_dhcp_anycast_address(): string
    get_ssid(): GLib.Bytes
}

module SettingOvsBridge {

    // Constructor properties interface

}

/**
 * OvsBridge Link Settings
 */
class SettingOvsBridge extends Setting {

    // Own properties of NM-1.0.SettingOvsBridge

    /**
     * The data path type. One of "system", "netdev" or empty.
     */
    datapath_type: string
    /**
     * The data path type. One of "system", "netdev" or empty.
     */
    datapathType: string
    /**
     * The bridge failure mode. One of "secure", "standalone" or empty.
     */
    fail_mode: string
    /**
     * The bridge failure mode. One of "secure", "standalone" or empty.
     */
    failMode: string
    /**
     * Enable or disable multicast snooping.
     */
    mcast_snooping_enable: boolean
    /**
     * Enable or disable multicast snooping.
     */
    mcastSnoopingEnable: boolean
    /**
     * Enable or disable RSTP.
     */
    rstp_enable: boolean
    /**
     * Enable or disable RSTP.
     */
    rstpEnable: boolean
    /**
     * Enable or disable STP.
     */
    stp_enable: boolean
    /**
     * Enable or disable STP.
     */
    stpEnable: boolean

    // Constructors of NM-1.0.SettingOvsBridge


static ["new"](): SettingOvsBridge;

    // Owm methods of NM-1.0.SettingOvsBridge

    get_datapath_type(): string
    get_fail_mode(): string
    get_mcast_snooping_enable(): boolean
    get_rstp_enable(): boolean
    get_stp_enable(): boolean
}

module SettingOvsDpdk {

    // Constructor properties interface

}

/**
 * OvsDpdk Link Settings
 */
class SettingOvsDpdk extends Setting {

    // Own properties of NM-1.0.SettingOvsDpdk

    /**
     * Open vSwitch DPDK device arguments.
     */
    devargs: string
    /**
     * Open vSwitch DPDK number of rx queues.
     * Defaults to zero which means to leave the parameter in OVS unspecified
     * and effectively configures one queue.
     */
    n_rxq: number
    /**
     * Open vSwitch DPDK number of rx queues.
     * Defaults to zero which means to leave the parameter in OVS unspecified
     * and effectively configures one queue.
     */
    nRxq: number
    /**
     * The rx queue size (number of rx descriptors) for DPDK ports.
     * Must be zero or a power of 2 between 1 and 4096, and supported
     * by the hardware. Defaults to zero which means to leave the
     * parameter in OVS unspecified and effectively configures 2048
     * descriptors.
     */
    n_rxq_desc: number
    /**
     * The rx queue size (number of rx descriptors) for DPDK ports.
     * Must be zero or a power of 2 between 1 and 4096, and supported
     * by the hardware. Defaults to zero which means to leave the
     * parameter in OVS unspecified and effectively configures 2048
     * descriptors.
     */
    nRxqDesc: number
    /**
     * The tx queue size (number of tx descriptors) for DPDK ports.
     * Must be zero or a power of 2 between 1 and 4096, and supported
     * by the hardware. Defaults to zero which means to leave the
     * parameter in OVS unspecified and effectively configures 2048
     * descriptors.
     */
    n_txq_desc: number
    /**
     * The tx queue size (number of tx descriptors) for DPDK ports.
     * Must be zero or a power of 2 between 1 and 4096, and supported
     * by the hardware. Defaults to zero which means to leave the
     * parameter in OVS unspecified and effectively configures 2048
     * descriptors.
     */
    nTxqDesc: number

    // Constructors of NM-1.0.SettingOvsDpdk


static ["new"](): SettingOvsDpdk;

    // Owm methods of NM-1.0.SettingOvsDpdk

    get_devargs(): string
    get_n_rxq(): number
    get_n_rxq_desc(): number
    get_n_txq_desc(): number
}

module SettingOvsExternalIDs {

    // Constructor properties interface

}

/**
 * OVS External IDs Settings
 */
class SettingOvsExternalIDs extends Setting {

    // Own properties of NM-1.0.SettingOvsExternalIDs

    /**
     * A dictionary of key/value pairs with external-ids for OVS.
     */
    data: GLib.HashTable<string, string>

    // Constructors of NM-1.0.SettingOvsExternalIDs


static ["new"](): SettingOvsExternalIDs;

    // Owm methods of NM-1.0.SettingOvsExternalIDs

    /**
     * Checks whether `key` is a valid key for OVS' external-ids.
     * This means, the key cannot be %NULL, not too large and valid ASCII.
     * Also, only digits and numbers are allowed with a few special
     * characters. They key must also not start with "NM.".
     * @param key the key to check
     */
    static check_key(key?: (string | null)): boolean
    /**
     * Checks whether `val` is a valid user data value. This means,
     * value is not %NULL, not too large and valid UTF-8.
     * @param val the value to check
     */
    static check_val(val?: (string | null)): boolean

    // Owm methods of NM-1.0.SettingOvsExternalIDs

    get_data(key: string): string
    get_data_keys(): string[]
    set_data(key: string, val?: (string | null)): void
}

module SettingOvsInterface {

    // Constructor properties interface

}

/**
 * Open vSwitch Interface Settings
 */
class SettingOvsInterface extends Setting {

    // Own properties of NM-1.0.SettingOvsInterface

    /**
     * Open vSwitch openflow port number.
     * Defaults to zero which means that port number will not be specified
     * and it will be chosen randomly by ovs. OpenFlow ports are the network interfaces
     * for passing packets between OpenFlow processing and the rest of the network.
     * OpenFlow switches connect logically to each other via their OpenFlow ports.
     */
    ofport_request: number
    /**
     * Open vSwitch openflow port number.
     * Defaults to zero which means that port number will not be specified
     * and it will be chosen randomly by ovs. OpenFlow ports are the network interfaces
     * for passing packets between OpenFlow processing and the rest of the network.
     * OpenFlow switches connect logically to each other via their OpenFlow ports.
     */
    ofportRequest: number
    /**
     * The interface type. Either "internal", "system", "patch", "dpdk", or empty.
     */
    type: string

    // Constructors of NM-1.0.SettingOvsInterface


static ["new"](): SettingOvsInterface;

    // Owm methods of NM-1.0.SettingOvsInterface

    get_interface_type(): string
    get_ofport_request(): number
}

module SettingOvsOtherConfig {

    // Constructor properties interface

}

/**
 * OVS Other Config Settings
 */
class SettingOvsOtherConfig extends Setting {

    // Own properties of NM-1.0.SettingOvsOtherConfig

    /**
     * A dictionary of key/value pairs with other_config settings for OVS.
     * See also "other_config" in the "ovs-vswitchd.conf.db" manual for the keys
     * that OVS supports.
     */
    data: GLib.HashTable<string, string>

    // Constructors of NM-1.0.SettingOvsOtherConfig


static ["new"](): SettingOvsOtherConfig;

    // Owm methods of NM-1.0.SettingOvsOtherConfig

    get_data(key: string): string
    get_data_keys(): string[]
    set_data(key: string, val?: (string | null)): void
}

module SettingOvsPatch {

    // Constructor properties interface

}

/**
 * OvsPatch Link Settings
 */
class SettingOvsPatch extends Setting {

    // Own properties of NM-1.0.SettingOvsPatch

    /**
     * Specifies the name of the interface for the other side of the patch.
     * The patch on the other side must also set this interface as peer.
     */
    peer: string

    // Constructors of NM-1.0.SettingOvsPatch


static ["new"](): SettingOvsPatch;

    // Owm methods of NM-1.0.SettingOvsPatch

    get_peer(): string
}

module SettingOvsPort {

    // Constructor properties interface

}

/**
 * OvsPort Link Settings
 */
class SettingOvsPort extends Setting {

    // Own properties of NM-1.0.SettingOvsPort

    /**
     * The time port must be inactive in order to be considered down.
     */
    bond_downdelay: number
    /**
     * The time port must be inactive in order to be considered down.
     */
    bondDowndelay: number
    /**
     * Bonding mode. One of "active-backup", "balance-slb", or "balance-tcp".
     */
    bond_mode: string
    /**
     * Bonding mode. One of "active-backup", "balance-slb", or "balance-tcp".
     */
    bondMode: string
    /**
     * The time port must be active before it starts forwarding traffic.
     */
    bond_updelay: number
    /**
     * The time port must be active before it starts forwarding traffic.
     */
    bondUpdelay: number
    /**
     * LACP mode. One of "active", "off", or "passive".
     */
    lacp: string
    /**
     * The VLAN tag in the range 0-4095.
     */
    tag: number
    /**
     * A list of VLAN ranges that this port trunks.
     * 
     * The property is valid only for ports with mode "trunk",
     * "native-tagged", or "native-untagged port".
     * If it is empty, the port trunks all VLANs.
     */
    trunks: Range[]
    /**
     * The VLAN mode. One of "access", "native-tagged", "native-untagged",
     * "trunk", "dot1q-tunnel" or unset.
     */
    vlan_mode: string
    /**
     * The VLAN mode. One of "access", "native-tagged", "native-untagged",
     * "trunk", "dot1q-tunnel" or unset.
     */
    vlanMode: string

    // Constructors of NM-1.0.SettingOvsPort


static ["new"](): SettingOvsPort;

    // Owm methods of NM-1.0.SettingOvsPort

    /**
     * Appends a new trunk range to the setting.
     * This takes a reference to `trunk`.
     * @param trunk the trunk to add
     */
    add_trunk(trunk: Range): void
    /**
     * Removes all configured trunk ranges.
     */
    clear_trunks(): void
    get_bond_downdelay(): number
    get_bond_mode(): string
    get_bond_updelay(): number
    get_lacp(): string
    get_num_trunks(): number
    get_tag(): number
    get_trunk(idx: number): Range
    get_vlan_mode(): string
    /**
     * Removes the trunk range at index `idx`.
     * @param idx index number of the trunk range.
     */
    remove_trunk(idx: number): void
    /**
     * Remove the trunk range with range `start` to `end`.
     * @param start the trunk range start index
     * @param end the trunk range end index
     * @returns %TRUE if the trunk range was found and removed; %FALSE otherwise
     */
    remove_trunk_by_value(start: number, end: number): boolean
}

module SettingPpp {

    // Constructor properties interface

}

/**
 * Point-to-Point Protocol Settings
 */
class SettingPpp extends Setting {

    // Own properties of NM-1.0.SettingPpp

    /**
     * If non-zero, instruct pppd to set the serial port to the specified
     * baudrate.  This value should normally be left as 0 to automatically
     * choose the speed.
     */
    baud: number
    /**
     * If %TRUE, specify that pppd should set the serial port to use hardware
     * flow control with RTS and CTS signals.  This value should normally be set
     * to %FALSE.
     */
    crtscts: boolean
    /**
     * If non-zero, instruct pppd to presume the connection to the peer has
     * failed if the specified number of LCP echo-requests go unanswered by the
     * peer.  The "lcp-echo-interval" property must also be set to a non-zero
     * value if this property is used.
     */
    lcp_echo_failure: number
    /**
     * If non-zero, instruct pppd to presume the connection to the peer has
     * failed if the specified number of LCP echo-requests go unanswered by the
     * peer.  The "lcp-echo-interval" property must also be set to a non-zero
     * value if this property is used.
     */
    lcpEchoFailure: number
    /**
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
     * every n seconds (where n is the specified value).  Note that some PPP
     * peers will respond to echo requests and some will not, and it is not
     * possible to autodetect this.
     */
    lcp_echo_interval: number
    /**
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
     * every n seconds (where n is the specified value).  Note that some PPP
     * peers will respond to echo requests and some will not, and it is not
     * possible to autodetect this.
     */
    lcpEchoInterval: number
    /**
     * If %TRUE, stateful MPPE is used.  See pppd documentation for more
     * information on stateful MPPE.
     */
    mppe_stateful: boolean
    /**
     * If %TRUE, stateful MPPE is used.  See pppd documentation for more
     * information on stateful MPPE.
     */
    mppeStateful: boolean
    /**
     * If non-zero, instruct pppd to request that the peer send packets no
     * larger than the specified size.  If non-zero, the MRU should be between
     * 128 and 16384.
     */
    mru: number
    /**
     * If non-zero, instruct pppd to send packets no larger than the specified
     * size.
     */
    mtu: number
    /**
     * If %TRUE, Van Jacobsen TCP header compression will not be requested.
     */
    no_vj_comp: boolean
    /**
     * If %TRUE, Van Jacobsen TCP header compression will not be requested.
     */
    noVjComp: boolean
    /**
     * If %TRUE, do not require the other side (usually the PPP server) to
     * authenticate itself to the client.  If %FALSE, require authentication
     * from the remote side.  In almost all cases, this should be %TRUE.
     */
    noauth: boolean
    /**
     * If %TRUE, BSD compression will not be requested.
     */
    nobsdcomp: boolean
    /**
     * If %TRUE, "deflate" compression will not be requested.
     */
    nodeflate: boolean
    /**
     * If %TRUE, the CHAP authentication method will not be used.
     */
    refuse_chap: boolean
    /**
     * If %TRUE, the CHAP authentication method will not be used.
     */
    refuseChap: boolean
    /**
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuse_eap: boolean
    /**
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuseEap: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuse_mschap: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuseMschap: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuse_mschapv2: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuseMschapv2: boolean
    /**
     * If %TRUE, the PAP authentication method will not be used.
     */
    refuse_pap: boolean
    /**
     * If %TRUE, the PAP authentication method will not be used.
     */
    refusePap: boolean
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
     * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
     * session will fail.  Note that MPPE is not used on mobile broadband
     * connections.
     */
    require_mppe: boolean
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
     * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
     * session will fail.  Note that MPPE is not used on mobile broadband
     * connections.
     */
    requireMppe: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    require_mppe_128: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    requireMppe128: boolean

    // Constructors of NM-1.0.SettingPpp


static ["new"](): SettingPpp;

    // Owm methods of NM-1.0.SettingPpp

    get_baud(): number
    get_crtscts(): boolean
    get_lcp_echo_failure(): number
    get_lcp_echo_interval(): number
    get_mppe_stateful(): boolean
    get_mru(): number
    get_mtu(): number
    get_no_vj_comp(): boolean
    get_noauth(): boolean
    get_nobsdcomp(): boolean
    get_nodeflate(): boolean
    get_refuse_chap(): boolean
    get_refuse_eap(): boolean
    get_refuse_mschap(): boolean
    get_refuse_mschapv2(): boolean
    get_refuse_pap(): boolean
    get_require_mppe(): boolean
    get_require_mppe_128(): boolean
}

module SettingPppoe {

    // Constructor properties interface

}

/**
 * PPP-over-Ethernet Settings
 */
class SettingPppoe extends Setting {

    // Own properties of NM-1.0.SettingPppoe

    /**
     * If given, specifies the parent interface name on which this PPPoE
     * connection should be created.  If this property is not specified,
     * the connection is activated on the interface specified in
     * #NMSettingConnection:interface-name of #NMSettingConnection.
     */
    parent: string
    /**
     * Password used to authenticate with the PPPoE service.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSettingPppoe:password property.
     */
    password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingPppoe:password property.
     */
    passwordFlags: SettingSecretFlags
    /**
     * If specified, instruct PPPoE to only initiate sessions with access
     * concentrators that provide the specified service.  For most providers,
     * this should be left blank.  It is only required if there are multiple
     * access concentrators or a specific service is known to be required.
     */
    service: string
    /**
     * Username used to authenticate with the PPPoE service.
     */
    username: string

    // Constructors of NM-1.0.SettingPppoe


static ["new"](): SettingPppoe;

    // Owm methods of NM-1.0.SettingPppoe

    get_parent(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_service(): string
    get_username(): string
}

module SettingProxy {

    // Constructor properties interface

}

/**
 * WWW Proxy Settings
 */
class SettingProxy extends Setting {

    // Own properties of NM-1.0.SettingProxy

    /**
     * Whether the proxy configuration is for browser only.
     */
    browser_only: boolean
    /**
     * Whether the proxy configuration is for browser only.
     */
    browserOnly: boolean
    /**
     * Method for proxy configuration, Default is %NM_SETTING_PROXY_METHOD_NONE
     */
    method: number
    /**
     * PAC script for the connection. This is an UTF-8 encoded javascript code
     * that defines a FindProxyForURL() function.
     */
    pac_script: string
    /**
     * PAC script for the connection. This is an UTF-8 encoded javascript code
     * that defines a FindProxyForURL() function.
     */
    pacScript: string
    /**
     * PAC URL for obtaining PAC file.
     */
    pac_url: string
    /**
     * PAC URL for obtaining PAC file.
     */
    pacUrl: string

    // Constructors of NM-1.0.SettingProxy


static ["new"](): SettingProxy;

    // Owm methods of NM-1.0.SettingProxy

    get_browser_only(): boolean
    /**
     * Returns the proxy configuration method. By default the value is %NM_SETTING_PROXY_METHOD_NONE.
     * %NM_SETTING_PROXY_METHOD_NONE should be selected for a connection intended for direct network
     * access.
     * @returns the proxy configuration method
     */
    get_method(): SettingProxyMethod
    get_pac_script(): string
    get_pac_url(): string
}

module SettingSerial {

    // Constructor properties interface

}

/**
 * Serial Link Settings
 */
class SettingSerial extends Setting {

    // Own properties of NM-1.0.SettingSerial

    /**
     * Speed to use for communication over the serial port.  Note that this
     * value usually has no effect for mobile broadband modems as they generally
     * ignore speed settings and use the highest available speed.
     */
    baud: number
    /**
     * Byte-width of the serial communication. The 8 in "8n1" for example.
     */
    bits: number
    /**
     * Parity setting of the serial port.
     */
    parity: SettingSerialParity
    /**
     * Time to delay between each byte sent to the modem, in microseconds.
     */
    send_delay: number
    /**
     * Time to delay between each byte sent to the modem, in microseconds.
     */
    sendDelay: number
    /**
     * Number of stop bits for communication on the serial port.  Either 1 or 2.
     * The 1 in "8n1" for example.
     */
    stopbits: number

    // Constructors of NM-1.0.SettingSerial


static ["new"](): SettingSerial;

    // Owm methods of NM-1.0.SettingSerial

    get_baud(): number
    get_bits(): number
    get_parity(): SettingSerialParity
    get_send_delay(): number
    get_stopbits(): number
}

module SettingSriov {

    // Constructor properties interface

}

/**
 * SR-IOV settings
 */
class SettingSriov extends Setting {

    // Own properties of NM-1.0.SettingSriov

    /**
     * Whether to autoprobe virtual functions by a compatible driver.
     * 
     * If set to %NM_TERNARY_TRUE, the kernel will try to bind VFs to
     * a compatible driver and if this succeeds a new network
     * interface will be instantiated for each VF.
     * 
     * If set to %NM_TERNARY_FALSE, VFs will not be claimed and no
     * network interfaces will be created for them.
     * 
     * When set to %NM_TERNARY_DEFAULT, the global default is used; in
     * case the global default is unspecified it is assumed to be
     * %NM_TERNARY_TRUE.
     */
    autoprobe_drivers: Ternary
    /**
     * Whether to autoprobe virtual functions by a compatible driver.
     * 
     * If set to %NM_TERNARY_TRUE, the kernel will try to bind VFs to
     * a compatible driver and if this succeeds a new network
     * interface will be instantiated for each VF.
     * 
     * If set to %NM_TERNARY_FALSE, VFs will not be claimed and no
     * network interfaces will be created for them.
     * 
     * When set to %NM_TERNARY_DEFAULT, the global default is used; in
     * case the global default is unspecified it is assumed to be
     * %NM_TERNARY_TRUE.
     */
    autoprobeDrivers: Ternary
    /**
     * The total number of virtual functions to create.
     * 
     * Note that when the sriov setting is present NetworkManager
     * enforces the number of virtual functions on the interface
     * (also when it is zero) during activation and resets it
     * upon deactivation. To prevent any changes to SR-IOV
     * parameters don't add a sriov setting to the connection.
     */
    total_vfs: number
    /**
     * The total number of virtual functions to create.
     * 
     * Note that when the sriov setting is present NetworkManager
     * enforces the number of virtual functions on the interface
     * (also when it is zero) during activation and resets it
     * upon deactivation. To prevent any changes to SR-IOV
     * parameters don't add a sriov setting to the connection.
     */
    totalVfs: number
    /**
     * Array of virtual function descriptors.
     * 
     * Each VF descriptor is a dictionary mapping attribute names
     * to GVariant values. The 'index' entry is mandatory for
     * each VF.
     * 
     * When represented as string a VF is in the form:
     * 
     *   "INDEX [ATTR=VALUE[ ATTR=VALUE]...]".
     * 
     * for example:
     * 
     *   "2 mac=00:11:22:33:44:55 spoof-check=true".
     * 
     * Multiple VFs can be specified using a comma as separator.
     * Currently, the following attributes are supported: mac,
     * spoof-check, trust, min-tx-rate, max-tx-rate, vlans.
     * 
     * The "vlans" attribute is represented as a semicolon-separated
     * list of VLAN descriptors, where each descriptor has the form
     * 
     *   "ID[.PRIORITY[.PROTO]]".
     * 
     * PROTO can be either 'q' for 802.1Q (the default) or 'ad' for
     * 802.1ad.
     */
    vfs: SriovVF[]

    // Constructors of NM-1.0.SettingSriov


static ["new"](): SettingSriov;

    // Owm methods of NM-1.0.SettingSriov

    /**
     * Appends a new VF and associated information to the setting.  The
     * given VF is duplicated internally and is not changed by this function.
     * @param vf the VF to add
     */
    add_vf(vf: SriovVF): void
    /**
     * Removes all configured VFs.
     */
    clear_vfs(): void
    /**
     * Returns the value contained in the #NMSettingSriov:autoprobe-drivers
     * property.
     * @returns the autoprobe-drivers property value
     */
    get_autoprobe_drivers(): Ternary
    get_num_vfs(): number
    /**
     * Returns the value contained in the #NMSettingSriov:total-vfs
     * property.
     * @returns the total number of SR-IOV virtual functions to create
     */
    get_total_vfs(): number
    get_vf(idx: number): SriovVF
    /**
     * Removes the VF at index `idx`.
     * @param idx index number of the VF
     */
    remove_vf(idx: number): void
    /**
     * Removes the VF with VF index `index`.
     * @param index the VF index of the VF to remove
     * @returns %TRUE if the VF was found and removed; %FALSE if it was not
     */
    remove_vf_by_index(index: number): boolean
}

module SettingTCConfig {

    // Constructor properties interface

}

/**
 * Linux Traffic Control Settings
 */
class SettingTCConfig extends Setting {

    // Own properties of NM-1.0.SettingTCConfig

    /**
     * Array of TC queueing disciplines.
     * 
     * When the #NMSettingTCConfig setting is present, qdiscs from this
     * property are applied upon activation. If the property is empty,
     * all qdiscs are removed and the device will only
     * have the default qdisc assigned by kernel according to the
     * "net.core.default_qdisc" sysctl.
     * 
     * If the #NMSettingTCConfig setting is not present, NetworkManager
     * doesn't touch the qdiscs present on the interface.
     */
    qdiscs: TCQdisc[]
    /**
     * Array of TC traffic filters.
     * 
     * When the #NMSettingTCConfig setting is present, filters from this
     * property are applied upon activation. If the property is empty,
     * NetworkManager removes all the filters.
     * 
     * If the #NMSettingTCConfig setting is not present, NetworkManager
     * doesn't touch the filters present on the interface.
     */
    tfilters: TCTfilter[]

    // Constructors of NM-1.0.SettingTCConfig


static ["new"](): SettingTCConfig;

    // Owm methods of NM-1.0.SettingTCConfig

    /**
     * Appends a new qdisc and associated information to the setting.  The
     * given qdisc is duplicated internally and is not changed by this function.
     * If an identical qdisc (considering attributes as well) already exists, the
     * qdisc is not added and the function returns %FALSE.
     * @param qdisc the qdisc to add
     * @returns %TRUE if the qdisc was added; %FALSE if the qdisc was already known.
     */
    add_qdisc(qdisc: TCQdisc): boolean
    /**
     * Appends a new tfilter and associated information to the setting.  The
     * given tfilter is duplicated internally and is not changed by this function.
     * If an identical tfilter (considering attributes as well) already exists, the
     * tfilter is not added and the function returns %FALSE.
     * @param tfilter the tfilter to add
     * @returns %TRUE if the tfilter was added; %FALSE if the tfilter was already known.
     */
    add_tfilter(tfilter: TCTfilter): boolean
    /**
     * Removes all configured queueing disciplines.
     */
    clear_qdiscs(): void
    /**
     * Removes all configured queueing disciplines.
     */
    clear_tfilters(): void
    get_num_qdiscs(): number
    get_num_tfilters(): number
    get_qdisc(idx: number): TCQdisc
    get_tfilter(idx: number): TCTfilter
    /**
     * Removes the qdisc at index `idx`.
     * @param idx index number of the qdisc
     */
    remove_qdisc(idx: number): void
    /**
     * Removes the first matching qdisc that matches `qdisc`.
     * @param qdisc the qdisc to remove
     * @returns %TRUE if the qdisc was found and removed; %FALSE if it was not.
     */
    remove_qdisc_by_value(qdisc: TCQdisc): boolean
    /**
     * Removes the tfilter at index `idx`.
     * @param idx index number of the tfilter
     */
    remove_tfilter(idx: number): void
    /**
     * Removes the first matching tfilter that matches `tfilter`.
     * @param tfilter the tfilter to remove
     * @returns %TRUE if the tfilter was found and removed; %FALSE if it was not.
     */
    remove_tfilter_by_value(tfilter: TCTfilter): boolean
}

module SettingTeam {

    // Constructor properties interface

}

/**
 * Teaming Settings
 */
class SettingTeam extends Setting {

    // Own properties of NM-1.0.SettingTeam

    /**
     * The JSON configuration for the team network interface.  The property
     * should contain raw JSON configuration data suitable for teamd, because
     * the value is passed directly to teamd. If not specified, the default
     * configuration is used.  See man teamd.conf for the format details.
     */
    config: string
    /**
     * Link watchers configuration for the connection: each link watcher is
     * defined by a dictionary, whose keys depend upon the selected link
     * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
     * 'arp_ping' and it is specified in the dictionary with the key 'name'.
     * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
     * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
     * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
     * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
     */
    link_watchers: TeamLinkWatcher[]
    /**
     * Link watchers configuration for the connection: each link watcher is
     * defined by a dictionary, whose keys depend upon the selected link
     * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
     * 'arp_ping' and it is specified in the dictionary with the key 'name'.
     * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
     * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
     * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
     * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
     */
    linkWatchers: TeamLinkWatcher[]
    /**
     * Corresponds to the teamd mcast_rejoin.count.
     */
    mcast_rejoin_count: number
    /**
     * Corresponds to the teamd mcast_rejoin.count.
     */
    mcastRejoinCount: number
    /**
     * Corresponds to the teamd mcast_rejoin.interval.
     */
    mcast_rejoin_interval: number
    /**
     * Corresponds to the teamd mcast_rejoin.interval.
     */
    mcastRejoinInterval: number
    /**
     * Corresponds to the teamd notify_peers.count.
     */
    notify_peers_count: number
    /**
     * Corresponds to the teamd notify_peers.count.
     */
    notifyPeersCount: number
    /**
     * Corresponds to the teamd notify_peers.interval.
     */
    notify_peers_interval: number
    /**
     * Corresponds to the teamd notify_peers.interval.
     */
    notifyPeersInterval: number
    /**
     * Corresponds to the teamd runner.name.
     * Permitted values are: "roundrobin", "broadcast", "activebackup",
     * "loadbalance", "lacp", "random".
     */
    runner: string
    /**
     * Corresponds to the teamd runner.active.
     */
    runner_active: boolean
    /**
     * Corresponds to the teamd runner.active.
     */
    runnerActive: boolean
    /**
     * Corresponds to the teamd runner.agg_select_policy.
     */
    runner_agg_select_policy: string
    /**
     * Corresponds to the teamd runner.agg_select_policy.
     */
    runnerAggSelectPolicy: string
    /**
     * Corresponds to the teamd runner.fast_rate.
     */
    runner_fast_rate: boolean
    /**
     * Corresponds to the teamd runner.fast_rate.
     */
    runnerFastRate: boolean
    /**
     * Corresponds to the teamd runner.hwaddr_policy.
     */
    runner_hwaddr_policy: string
    /**
     * Corresponds to the teamd runner.hwaddr_policy.
     */
    runnerHwaddrPolicy: string
    /**
     * Corresponds to the teamd runner.min_ports.
     */
    runner_min_ports: number
    /**
     * Corresponds to the teamd runner.min_ports.
     */
    runnerMinPorts: number
    /**
     * Corresponds to the teamd runner.sys_prio.
     */
    runner_sys_prio: number
    /**
     * Corresponds to the teamd runner.sys_prio.
     */
    runnerSysPrio: number
    /**
     * Corresponds to the teamd runner.tx_balancer.name.
     */
    runner_tx_balancer: string
    /**
     * Corresponds to the teamd runner.tx_balancer.name.
     */
    runnerTxBalancer: string
    /**
     * Corresponds to the teamd runner.tx_balancer.interval.
     */
    runner_tx_balancer_interval: number
    /**
     * Corresponds to the teamd runner.tx_balancer.interval.
     */
    runnerTxBalancerInterval: number
    /**
     * Corresponds to the teamd runner.tx_hash.
     */
    runner_tx_hash: string[]
    /**
     * Corresponds to the teamd runner.tx_hash.
     */
    runnerTxHash: string[]

    // Constructors of NM-1.0.SettingTeam


static ["new"](): SettingTeam;

    // Owm methods of NM-1.0.SettingTeam

    /**
     * Appends a new link watcher to the setting.
     * @param link_watcher the link watcher to add
     * @returns %TRUE if the link watcher is added; %FALSE if an identical link watcher was already there.
     */
    add_link_watcher(link_watcher: TeamLinkWatcher): boolean
    /**
     * Adds a new txhash element to the setting.
     * @param txhash the element to add to txhash
     * @returns %TRUE if the txhash element was added; %FALSE if the element was already knnown.
     */
    add_runner_tx_hash(txhash: string): boolean
    /**
     * Removes all configured link watchers.
     */
    clear_link_watchers(): void
    get_config(): string
    get_link_watcher(idx: number): TeamLinkWatcher
    get_mcast_rejoin_count(): number
    get_mcast_rejoin_interval(): number
    get_notify_peers_count(): number
    get_notify_peers_interval(): number
    get_num_link_watchers(): number
    get_num_runner_tx_hash(): number
    get_runner(): string
    get_runner_active(): boolean
    get_runner_agg_select_policy(): string
    get_runner_fast_rate(): boolean
    get_runner_hwaddr_policy(): string
    get_runner_min_ports(): number
    get_runner_sys_prio(): number
    get_runner_tx_balancer(): string
    get_runner_tx_balancer_interval(): number
    get_runner_tx_hash(idx: number): string
    /**
     * Removes the link watcher at index #idx.
     * @param idx index number of the link watcher to remove
     */
    remove_link_watcher(idx: number): void
    /**
     * Removes the link watcher entry matching link_watcher.
     * @param link_watcher the link watcher to remove
     * @returns %TRUE if the link watcher was found and removed, %FALSE otherwise.
     */
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean
    /**
     * Removes the txhash element at index `idx`.
     * @param idx index number of the element to remove from txhash
     */
    remove_runner_tx_hash(idx: number): void
    /**
     * Removes the txhash element #txhash
     * @param txhash the txhash element to remove
     * @returns %TRUE if the txhash element was found and removed; %FALSE if it was not.
     */
    remove_runner_tx_hash_by_value(txhash: string): boolean
}

module SettingTeamPort {

    // Constructor properties interface

}

/**
 * Team Port Settings
 */
class SettingTeamPort extends Setting {

    // Own properties of NM-1.0.SettingTeamPort

    /**
     * The JSON configuration for the team port. The property should contain raw
     * JSON configuration data suitable for teamd, because the value is passed
     * directly to teamd. If not specified, the default configuration is
     * used. See man teamd.conf for the format details.
     */
    config: string
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_key.
     */
    lacp_key: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_key.
     */
    lacpKey: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_prio.
     */
    lacp_prio: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_prio.
     */
    lacpPrio: number
    /**
     * Link watchers configuration for the connection: each link watcher is
     * defined by a dictionary, whose keys depend upon the selected link
     * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
     * 'arp_ping' and it is specified in the dictionary with the key 'name'.
     * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
     * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
     * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
     * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
     */
    link_watchers: TeamLinkWatcher[]
    /**
     * Link watchers configuration for the connection: each link watcher is
     * defined by a dictionary, whose keys depend upon the selected link
     * watcher. Available link watchers are 'ethtool', 'nsna_ping' and
     * 'arp_ping' and it is specified in the dictionary with the key 'name'.
     * Available keys are:   ethtool: 'delay-up', 'delay-down', 'init-wait';
     * nsna_ping: 'init-wait', 'interval', 'missed-max', 'target-host';
     * arp_ping: all the ones in nsna_ping and 'source-host', 'validate-active',
     * 'validate-inactive', 'send-always'. See teamd.conf man for more details.
     */
    linkWatchers: TeamLinkWatcher[]
    /**
     * Corresponds to the teamd ports.PORTIFNAME.prio.
     */
    prio: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.queue_id.
     * When set to -1 means the parameter is skipped from the json config.
     */
    queue_id: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.queue_id.
     * When set to -1 means the parameter is skipped from the json config.
     */
    queueId: number
    /**
     * Corresponds to the teamd ports.PORTIFNAME.sticky.
     */
    sticky: boolean

    // Constructors of NM-1.0.SettingTeamPort


static ["new"](): SettingTeamPort;

    // Owm methods of NM-1.0.SettingTeamPort

    /**
     * Appends a new link watcher to the setting.
     * @param link_watcher the link watcher to add
     * @returns %TRUE if the link watcher is added; %FALSE if an identical link watcher was already there.
     */
    add_link_watcher(link_watcher: TeamLinkWatcher): boolean
    /**
     * Removes all configured link watchers.
     */
    clear_link_watchers(): void
    get_config(): string
    get_lacp_key(): number
    get_lacp_prio(): number
    get_link_watcher(idx: number): TeamLinkWatcher
    get_num_link_watchers(): number
    get_prio(): number
    get_queue_id(): number
    get_sticky(): boolean
    /**
     * Removes the link watcher at index #idx.
     * @param idx index number of the link watcher to remove
     */
    remove_link_watcher(idx: number): void
    /**
     * Removes the link watcher entry matching link_watcher.
     * @param link_watcher the link watcher to remove
     * @returns %TRUE if the link watcher was found and removed, %FALSE otherwise.
     */
    remove_link_watcher_by_value(link_watcher: TeamLinkWatcher): boolean
}

module SettingTun {

    // Constructor properties interface

}

/**
 * Tunnel Settings
 */
class SettingTun extends Setting {

    // Own properties of NM-1.0.SettingTun

    /**
     * The group ID which will own the device. If set to %NULL everyone
     * will be able to use the device.
     */
    group: string
    /**
     * The operating mode of the virtual device. Allowed values are
     * %NM_SETTING_TUN_MODE_TUN to create a layer 3 device and
     * %NM_SETTING_TUN_MODE_TAP to create an Ethernet-like layer 2
     * one.
     */
    mode: number
    /**
     * If the property is set to %TRUE, the interface will support
     * multiple file descriptors (queues) to parallelize packet
     * sending or receiving. Otherwise, the interface will only
     * support a single queue.
     */
    multi_queue: boolean
    /**
     * If the property is set to %TRUE, the interface will support
     * multiple file descriptors (queues) to parallelize packet
     * sending or receiving. Otherwise, the interface will only
     * support a single queue.
     */
    multiQueue: boolean
    /**
     * The user ID which will own the device. If set to %NULL everyone
     * will be able to use the device.
     */
    owner: string
    /**
     * If %TRUE the interface will prepend a 4 byte header describing the
     * physical interface to the packets.
     */
    pi: boolean
    /**
     * If %TRUE the IFF_VNET_HDR the tunnel packets will include a virtio
     * network header.
     */
    vnet_hdr: boolean
    /**
     * If %TRUE the IFF_VNET_HDR the tunnel packets will include a virtio
     * network header.
     */
    vnetHdr: boolean

    // Constructors of NM-1.0.SettingTun


static ["new"](): SettingTun;

    // Owm methods of NM-1.0.SettingTun

    get_group(): string
    get_mode(): SettingTunMode
    get_multi_queue(): boolean
    get_owner(): string
    get_pi(): boolean
    get_vnet_hdr(): boolean
}

module SettingUser {

    // Constructor properties interface

}

/**
 * General User Profile Settings
 */
class SettingUser extends Setting {

    // Own properties of NM-1.0.SettingUser

    /**
     * A dictionary of key/value pairs with user data. This data is ignored by NetworkManager
     * and can be used at the users discretion. The keys only support a strict ascii format,
     * but the values can be arbitrary UTF8 strings up to a certain length.
     */
    data: GLib.HashTable<string, string>

    // Constructors of NM-1.0.SettingUser


static ["new"](): SettingUser;

    // Owm methods of NM-1.0.SettingUser

    /**
     * Checks whether `key` is a valid user data key. This means,
     * key is not %NULL, not too large and valid ASCII. Also,
     * only digits and numbers are allowed with a few special
     * characters. The key must contain at least one '.' and
     * look like a fully qualified DNS name.
     * @param key the key to check
     */
    static check_key(key: string): boolean
    /**
     * Checks whether `val` is a valid user data value. This means,
     * value is not %NULL, not too large and valid UTF-8.
     * @param val the value to check
     */
    static check_val(val: string): boolean

    // Owm methods of NM-1.0.SettingUser

    get_data(key: string): string
    get_keys(): string[]
    set_data(key: string, val?: (string | null)): boolean
}

module SettingVeth {

    // Constructor properties interface

}

/**
 * Veth Settings
 */
class SettingVeth extends Setting {

    // Own properties of NM-1.0.SettingVeth

    /**
     * This property specifies the peer interface name of the veth. This
     * property is mandatory.
     */
    peer: string

    // Constructors of NM-1.0.SettingVeth


static ["new"](): SettingVeth;

    // Owm methods of NM-1.0.SettingVeth

    get_peer(): string
}

module SettingVlan {

    // Constructor properties interface

}

/**
 * VLAN Settings
 */
class SettingVlan extends Setting {

    // Own properties of NM-1.0.SettingVlan

    /**
     * For outgoing packets, a list of mappings from Linux SKB priorities to
     * 802.1p priorities.  The mapping is given in the format "from:to" where
     * both "from" and "to" are unsigned integers, ie "7:3".
     */
    egress_priority_map: string[]
    /**
     * For outgoing packets, a list of mappings from Linux SKB priorities to
     * 802.1p priorities.  The mapping is given in the format "from:to" where
     * both "from" and "to" are unsigned integers, ie "7:3".
     */
    egressPriorityMap: string[]
    /**
     * One or more flags which control the behavior and features of the VLAN
     * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
     * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
     * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
     * master device's operating state). %NM_VLAN_FLAG_MVRP (use of the MVRP
     * protocol).
     * 
     * The default value of this property is NM_VLAN_FLAG_REORDER_HEADERS,
     * but it used to be 0. To preserve backward compatibility, the default-value
     * in the D-Bus API continues to be 0 and a missing property on D-Bus
     * is still considered as 0.
     */
    flags: VlanFlags
    /**
     * The VLAN identifier that the interface created by this connection should
     * be assigned. The valid range is from 0 to 4094, without the reserved id 4095.
     */
    id: number
    /**
     * For incoming packets, a list of mappings from 802.1p priorities to Linux
     * SKB priorities.  The mapping is given in the format "from:to" where both
     * "from" and "to" are unsigned integers, ie "7:3".
     */
    ingress_priority_map: string[]
    /**
     * For incoming packets, a list of mappings from 802.1p priorities to Linux
     * SKB priorities.  The mapping is given in the format "from:to" where both
     * "from" and "to" are unsigned integers, ie "7:3".
     */
    ingressPriorityMap: string[]
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this VLAN interface should be created.  If this property is
     * not specified, the connection must contain an #NMSettingWired setting
     * with a #NMSettingWired:mac-address property.
     */
    parent: string
    /**
     * Specifies the VLAN protocol to use for encapsulation.
     * 
     * Supported values are: '802.1Q', '802.1ad'. If not specified the default
     * value is '802.1Q'.
     */
    protocol: string

    // Constructors of NM-1.0.SettingVlan


static ["new"](): SettingVlan;

    // Owm methods of NM-1.0.SettingVlan

    /**
     * Adds a priority mapping to the #NMSettingVlan:ingress_priority_map or
     * #NMSettingVlan:egress_priority_map properties of the setting. If `from` is
     * already in the given priority map, this function will overwrite the
     * existing entry with the new `to`.
     * 
     * If `map` is #NM_VLAN_INGRESS_MAP then `from` is the incoming 802.1q VLAN
     * Priority Code Point (PCP) value, and `to` is the Linux SKB priority value.
     * 
     * If `map` is #NM_VLAN_EGRESS_MAP then `from` is the Linux SKB priority value and
     * `to` is the outgoing 802.1q VLAN Priority Code Point (PCP) value.
     * @param map the type of priority map
     * @param from the priority to map to @to
     * @param to the priority to map @from to
     * @returns %TRUE.
     */
    add_priority(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Adds a priority map entry into either the #NMSettingVlan:ingress_priority_map
     * or the #NMSettingVlan:egress_priority_map properties.  The priority map maps
     * the Linux SKB priorities to 802.1p priorities.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
     * @returns %TRUE if the entry was successfully added to the list, or it overwrote the old value, %FALSE if @str is not a valid mapping.
     */
    add_priority_str(map: VlanPriorityMap, str: string): boolean
    /**
     * Clear all the entries from #NMSettingVlan:ingress_priority_map or
     * #NMSettingVlan:egress_priority_map properties.
     * @param map the type of priority map
     */
    clear_priorities(map: VlanPriorityMap): void
    get_flags(): number
    get_id(): number
    /**
     * Returns the number of entries in the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties of this setting.
     * @param map the type of priority map
     * @returns return the number of ingress/egress priority entries.
     */
    get_num_priorities(map: VlanPriorityMap): number
    get_parent(): string
    /**
     * Retrieve one of the entries of the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map properties of this setting.
     * @param map the type of priority map
     * @param idx the zero-based index of the ingress/egress priority map entry
     * @returns returns %TRUE if @idx is in range. Otherwise, %FALSE.
     */
    get_priority(map: VlanPriorityMap, idx: number): boolean
    get_protocol(): string
    /**
     * Removes the priority map at index `idx` from the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties.
     * @param map the type of priority map
     * @param idx the zero-based index of the priority map to remove
     */
    remove_priority(map: VlanPriorityMap, idx: number): void
    /**
     * Removes the priority map `form:``to` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     * @param map the type of priority map
     * @param from the priority to map to @to
     * @param to the priority to map @from to
     * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
     */
    remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Removes the priority map `str` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
     * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
     */
    remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean
}

module SettingVpn {

    // Constructor properties interface

}

/**
 * VPN Settings
 */
class SettingVpn extends Setting {

    // Own properties of NM-1.0.SettingVpn

    /**
     * Dictionary of key/value pairs of VPN plugin specific data.  Both keys and
     * values must be strings.
     */
    data: GLib.HashTable<string, string>
    /**
     * If the VPN service supports persistence, and this property is %TRUE,
     * the VPN will attempt to stay connected across link changes and outages,
     * until explicitly disconnected.
     */
    persistent: boolean
    /**
     * Dictionary of key/value pairs of VPN plugin specific secrets like
     * passwords or private keys.  Both keys and values must be strings.
     */
    secrets: GLib.HashTable<string, string>
    /**
     * D-Bus service name of the VPN plugin that this setting uses to connect to
     * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
     * plugin.
     */
    service_type: string
    /**
     * D-Bus service name of the VPN plugin that this setting uses to connect to
     * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
     * plugin.
     */
    serviceType: string
    /**
     * Timeout for the VPN service to establish the connection. Some services
     * may take quite a long time to connect.
     * Value of 0 means a default timeout, which is 60 seconds (unless overridden
     * by vpn.timeout in configuration file). Values greater than zero mean
     * timeout in seconds.
     */
    timeout: number
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    user_name: string
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    userName: string

    // Constructors of NM-1.0.SettingVpn


static ["new"](): SettingVpn;

    // Owm methods of NM-1.0.SettingVpn

    /**
     * Establishes a relationship between `key` and `item` internally in the
     * setting which may be retrieved later.  Should not be used to store passwords
     * or other secrets, which is what nm_setting_vpn_add_secret() is for.
     * 
     * Before 1.24, `item` must not be %NULL and not an empty string. Since 1.24,
     * `item` can be set to an empty string. It can also be set to %NULL to unset
     * the key. In that case, the behavior is as if calling nm_setting_vpn_remove_data_item().
     * @param key a name that uniquely identifies the given value @item
     * @param item the value to be referenced by @key
     */
    add_data_item(key: string, item?: (string | null)): void
    /**
     * Establishes a relationship between `key` and `secret` internally in the
     * setting which may be retrieved later.
     * 
     * Before 1.24, `secret` must not be %NULL and not an empty string. Since 1.24,
     * `secret` can be set to an empty string. It can also be set to %NULL to unset
     * the key. In that case, the behavior is as if calling nm_setting_vpn_remove_secret().
     * @param key a name that uniquely identifies the given secret @secret
     * @param secret the secret to be referenced by @key
     */
    add_secret(key: string, secret?: (string | null)): void
    /**
     * Iterates all data items stored in this setting.  It is safe to add, remove,
     * and modify data items inside `func,` though any additions or removals made
     * during iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreach_data_item(func: VpnIterFunc): void
    /**
     * Iterates all secrets stored in this setting.  It is safe to add, remove,
     * and modify secrets inside `func,` though any additions or removals made during
     * iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreach_secret(func: VpnIterFunc): void
    /**
     * Retrieves the data item of a key/value relationship previously established
     * by nm_setting_vpn_add_data_item().
     * @param key the name of the data item to retrieve
     * @returns the data item, if any
     */
    get_data_item(key: string): string
    /**
     * Retrieves every data key inside `setting,` as an array.
     * @returns a   %NULL-terminated array containing each data key or %NULL if   there are no data items.
     */
    get_data_keys(): (string[] | null)
    /**
     * Gets number of key/value pairs of VPN configuration data.
     * @returns the number of VPN plugin specific configuration data items
     */
    get_num_data_items(): number
    /**
     * Gets number of VPN plugin specific secrets in the setting.
     * @returns the number of VPN plugin specific secrets
     */
    get_num_secrets(): number
    get_persistent(): boolean
    /**
     * Retrieves the secret of a key/value relationship previously established
     * by nm_setting_vpn_add_secret().
     * @param key the name of the secret to retrieve
     * @returns the secret, if any
     */
    get_secret(key: string): string
    /**
     * Retrieves every secret key inside `setting,` as an array.
     * @returns a   %NULL-terminated array containing each secret key or %NULL if   there are no secrets.
     */
    get_secret_keys(): (string[] | null)
    /**
     * Returns the service name of the VPN, which identifies the specific VPN
     * plugin that should be used to connect to this VPN.
     * @returns the VPN plugin's service name
     */
    get_service_type(): string
    get_timeout(): number
    get_user_name(): string
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_data_item().
     * @param key the name of the data item to remove
     * @returns %TRUE if the data item was found and removed from the internal list, %FALSE if it was not.
     */
    remove_data_item(key: string): boolean
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_secret().
     * @param key the name of the secret to remove
     * @returns %TRUE if the secret was found and removed from the internal list, %FALSE if it was not.
     */
    remove_secret(key: string): boolean
}

module SettingVrf {

    // Constructor properties interface

}

/**
 * VRF settings
 */
class SettingVrf extends Setting {

    // Own properties of NM-1.0.SettingVrf

    /**
     * The routing table for this VRF.
     */
    table: number

    // Constructors of NM-1.0.SettingVrf


static ["new"](): SettingVrf;

    // Owm methods of NM-1.0.SettingVrf

    get_table(): number
}

module SettingVxlan {

    // Constructor properties interface

}

/**
 * VXLAN Settings
 */
class SettingVxlan extends Setting {

    // Own properties of NM-1.0.SettingVxlan

    /**
     * Specifies the lifetime in seconds of FDB entries learnt by the kernel.
     */
    ageing: number
    /**
     * Specifies the UDP destination port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    destination_port: number
    /**
     * Specifies the UDP destination port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    destinationPort: number
    /**
     * Specifies the VXLAN Network Identifier (or VXLAN Segment Identifier) to
     * use.
     */
    id: number
    /**
     * Specifies whether netlink LL ADDR miss notifications are generated.
     */
    l2_miss: boolean
    /**
     * Specifies whether netlink LL ADDR miss notifications are generated.
     */
    l2Miss: boolean
    /**
     * Specifies whether netlink IP ADDR miss notifications are generated.
     */
    l3_miss: boolean
    /**
     * Specifies whether netlink IP ADDR miss notifications are generated.
     */
    l3Miss: boolean
    /**
     * Specifies whether unknown source link layer addresses and IP addresses
     * are entered into the VXLAN device forwarding database.
     */
    learning: boolean
    /**
     * Specifies the maximum number of FDB entries. A value of zero means that
     * the kernel will store unlimited entries.
     */
    limit: number
    /**
     * If given, specifies the source IP address to use in outgoing packets.
     */
    local: string
    /**
     * If given, specifies the parent interface name or parent connection UUID.
     */
    parent: string
    /**
     * Specifies whether ARP proxy is turned on.
     */
    proxy: boolean
    /**
     * Specifies the unicast destination IP address to use in outgoing packets
     * when the destination link layer address is not known in the VXLAN device
     * forwarding database, or the multicast IP address to join.
     */
    remote: string
    /**
     * Specifies whether route short circuit is turned on.
     */
    rsc: boolean
    /**
     * Specifies the maximum UDP source port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    source_port_max: number
    /**
     * Specifies the maximum UDP source port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    sourcePortMax: number
    /**
     * Specifies the minimum UDP source port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    source_port_min: number
    /**
     * Specifies the minimum UDP source port to communicate to the remote VXLAN
     * tunnel endpoint.
     */
    sourcePortMin: number
    /**
     * Specifies the TOS value to use in outgoing packets.
     */
    tos: number
    /**
     * Specifies the time-to-live value to use in outgoing packets.
     */
    ttl: number

    // Constructors of NM-1.0.SettingVxlan


static ["new"](): SettingVxlan;

    // Owm methods of NM-1.0.SettingVxlan

    get_ageing(): number
    get_destination_port(): number
    get_id(): number
    get_l2_miss(): boolean
    get_l3_miss(): boolean
    get_learning(): boolean
    get_limit(): number
    get_local(): string
    get_parent(): string
    get_proxy(): boolean
    get_remote(): string
    get_rsc(): boolean
    get_source_port_max(): number
    get_source_port_min(): number
    get_tos(): number
    get_ttl(): number
}

module SettingWifiP2P {

    // Constructor properties interface

}

/**
 * Wi-Fi P2P Settings
 */
class SettingWifiP2P extends Setting {

    // Own properties of NM-1.0.SettingWifiP2P

    /**
     * The P2P device that should be connected to. Currently, this is the only
     * way to create or join a group.
     */
    peer: string
    /**
     * The Wi-Fi Display (WFD) Information Elements (IEs) to set.
     * 
     * Wi-Fi Display requires a protocol specific information element to be
     * set in certain Wi-Fi frames. These can be specified here for the
     * purpose of establishing a connection.
     * This setting is only useful when implementing a Wi-Fi Display client.
     */
    wfd_ies: GLib.Bytes
    /**
     * The Wi-Fi Display (WFD) Information Elements (IEs) to set.
     * 
     * Wi-Fi Display requires a protocol specific information element to be
     * set in certain Wi-Fi frames. These can be specified here for the
     * purpose of establishing a connection.
     * This setting is only useful when implementing a Wi-Fi Display client.
     */
    wfdIes: GLib.Bytes
    /**
     * Flags indicating which mode of WPS is to be used.
     * 
     * There's little point in changing the default setting as NetworkManager will
     * automatically determine the best method to use.
     */
    wps_method: number
    /**
     * Flags indicating which mode of WPS is to be used.
     * 
     * There's little point in changing the default setting as NetworkManager will
     * automatically determine the best method to use.
     */
    wpsMethod: number

    // Constructors of NM-1.0.SettingWifiP2P


static ["new"](): SettingWifiP2P;

    // Owm methods of NM-1.0.SettingWifiP2P

    get_peer(): string
    get_wfd_ies(): GLib.Bytes
    get_wps_method(): SettingWirelessSecurityWpsMethod
}

module SettingWimax {

    // Constructor properties interface

}

/**
 * WiMax Settings
 */
class SettingWimax extends Setting {

    // Own properties of NM-1.0.SettingWimax

    /**
     * If specified, this connection will only apply to the WiMAX device whose
     * MAC address matches. This property does not change the MAC address of the
     * device (known as MAC spoofing).
     */
    mac_address: string
    /**
     * If specified, this connection will only apply to the WiMAX device whose
     * MAC address matches. This property does not change the MAC address of the
     * device (known as MAC spoofing).
     */
    macAddress: string
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    network_name: string
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    networkName: string

    // Constructors of NM-1.0.SettingWimax


static ["new"](): SettingWimax;

    // Owm methods of NM-1.0.SettingWimax

    /**
     * Returns the MAC address of a WiMAX device which this connection is locked
     * to.
     * @returns the MAC address
     */
    get_mac_address(): string
    /**
     * Returns the WiMAX NSP name (ex "Sprint" or "CLEAR") which identifies the
     * specific WiMAX network this setting describes a connection to.
     * @returns the WiMAX NSP name
     */
    get_network_name(): string
}

module SettingWireGuard {

    // Constructor properties interface

}

/**
 * WireGuard Settings
 */
class SettingWireGuard extends Setting {

    // Own properties of NM-1.0.SettingWireGuard

    /**
     * The use of fwmark is optional and is by default off. Setting it to 0
     * disables it. Otherwise, it is a 32-bit fwmark for outgoing packets.
     * 
     * Note that "ip4-auto-default-route" or "ip6-auto-default-route" enabled,
     * implies to automatically choose a fwmark.
     */
    fwmark: number
    /**
     * Whether to enable special handling of the IPv4 default route.
     * If enabled, the IPv4 default route from wireguard.peer-routes
     * will be placed to a dedicated routing-table and two policy routing rules
     * will be added. The fwmark number is also used as routing-table for the default-route,
     * and if fwmark is zero, an unused fwmark/table is chosen automatically.
     * This corresponds to what wg-quick does with Table=auto and what WireGuard
     * calls "Improved Rule-based Routing".
     * 
     * Note that for this automatism to work, you usually don't want to set
     * ipv4.gateway, because that will result in a conflicting default route.
     * 
     * Leaving this at the default will enable this option automatically
     * if ipv4.never-default is not set and there are any peers that use
     * a default-route as allowed-ips. Since this automatism only makes
     * sense if you also have a peer with an /0 allowed-ips, it is usually
     * not necessary to enable this explicitly. However, you can disable
     * it if you want to configure your own routing and rules.
     */
    ip4_auto_default_route: Ternary
    /**
     * Whether to enable special handling of the IPv4 default route.
     * If enabled, the IPv4 default route from wireguard.peer-routes
     * will be placed to a dedicated routing-table and two policy routing rules
     * will be added. The fwmark number is also used as routing-table for the default-route,
     * and if fwmark is zero, an unused fwmark/table is chosen automatically.
     * This corresponds to what wg-quick does with Table=auto and what WireGuard
     * calls "Improved Rule-based Routing".
     * 
     * Note that for this automatism to work, you usually don't want to set
     * ipv4.gateway, because that will result in a conflicting default route.
     * 
     * Leaving this at the default will enable this option automatically
     * if ipv4.never-default is not set and there are any peers that use
     * a default-route as allowed-ips. Since this automatism only makes
     * sense if you also have a peer with an /0 allowed-ips, it is usually
     * not necessary to enable this explicitly. However, you can disable
     * it if you want to configure your own routing and rules.
     */
    ip4AutoDefaultRoute: Ternary
    /**
     * Like ip4-auto-default-route, but for the IPv6 default route.
     */
    ip6_auto_default_route: Ternary
    /**
     * Like ip4-auto-default-route, but for the IPv6 default route.
     */
    ip6AutoDefaultRoute: Ternary
    /**
     * The listen-port. If listen-port is not specified, the port will be chosen
     * randomly when the interface comes up.
     */
    listen_port: number
    /**
     * The listen-port. If listen-port is not specified, the port will be chosen
     * randomly when the interface comes up.
     */
    listenPort: number
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple fragments.
     * 
     * If zero a default MTU is used. Note that contrary to wg-quick's MTU
     * setting, this does not take into account the current routes at the
     * time of activation.
     */
    mtu: number
    /**
     * Whether to automatically add routes for the AllowedIPs ranges
     * of the peers. If %TRUE (the default), NetworkManager will automatically
     * add routes in the routing tables according to ipv4.route-table and
     * ipv6.route-table. Usually you want this automatism enabled.
     * If %FALSE, no such routes are added automatically. In this case, the
     * user may want to configure static routes in ipv4.routes and ipv6.routes,
     * respectively.
     * 
     * Note that if the peer's AllowedIPs is "0.0.0.0/0" or "::/0" and the profile's
     * ipv4.never-default or ipv6.never-default setting is enabled, the peer route for
     * this peer won't be added automatically.
     */
    peer_routes: boolean
    /**
     * Whether to automatically add routes for the AllowedIPs ranges
     * of the peers. If %TRUE (the default), NetworkManager will automatically
     * add routes in the routing tables according to ipv4.route-table and
     * ipv6.route-table. Usually you want this automatism enabled.
     * If %FALSE, no such routes are added automatically. In this case, the
     * user may want to configure static routes in ipv4.routes and ipv6.routes,
     * respectively.
     * 
     * Note that if the peer's AllowedIPs is "0.0.0.0/0" or "::/0" and the profile's
     * ipv4.never-default or ipv6.never-default setting is enabled, the peer route for
     * this peer won't be added automatically.
     */
    peerRoutes: boolean
    /**
     * The 256 bit private-key in base64 encoding.
     */
    private_key: string
    /**
     * The 256 bit private-key in base64 encoding.
     */
    privateKey: string
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:private-key
     * property.
     */
    private_key_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:private-key
     * property.
     */
    privateKeyFlags: SettingSecretFlags

    // Constructors of NM-1.0.SettingWireGuard


static ["new"](): SettingWireGuard;

    // Owm methods of NM-1.0.SettingWireGuard

    /**
     * If a peer with the same public-key already exists, that
     * one is replaced by `peer`. The new `peer` is always appended
     * (or moved to) the end, so in case a peer is replaced, the
     * indexes are shifted and the number of peers stays unchanged.
     * @param peer the #NMWireGuardPeer instance to append.   This seals @peer and keeps a reference on the   instance.
     */
    append_peer(peer: WireGuardPeer): void
    clear_peers(): number
    get_fwmark(): number
    get_ip4_auto_default_route(): Ternary
    get_ip6_auto_default_route(): Ternary
    get_listen_port(): number
    get_mtu(): number
    get_peer(idx: number): WireGuardPeer
    get_peer_by_public_key(public_key: string): (WireGuardPeer | null)
    get_peer_routes(): boolean
    get_peers_len(): number
    get_private_key(): string
    get_private_key_flags(): SettingSecretFlags
    remove_peer(idx: number): boolean
    /**
     * If `idx` is one past the last peer, the behavior is the same
     * as nm_setting_wireguard_append_peer().
     * Otherwise, the peer will be at `idx` and replace the peer
     * instance at that index. Note that if a peer with the same
     * public-key exists on another index, then that peer will also
     * be replaced. In that case, the number of peers will shrink
     * by one (because the one at `idx` got replace and then one
     * with the same public-key got removed). This also means,
     * that the resulting index afterwards may be one less than
     * `idx` (if another peer with a lower index was dropped).
     * @param peer the #NMWireGuardPeer instance to set.   This seals @peer and keeps a reference on the   instance.
     * @param idx the index, in the range of 0 to the number of   peers (including). That means, if @idx is one past   the end of the number of peers, this is the same as   nm_setting_wireguard_append_peer(). Otherwise, the   peer at this index is replaced.
     */
    set_peer(peer: WireGuardPeer, idx: number): void
}

module SettingWired {

    // Constructor properties interface

}

/**
 * Wired Ethernet Settings
 */
class SettingWired extends Setting {

    // Own properties of NM-1.0.SettingWired

    /**
     * When %TRUE, setup the interface to accept packets for all MAC addresses.
     * This is enabling the kernel interface flag IFF_PROMISC.
     * When %FALSE, the interface will only accept the packets with the
     * interface destination mac address or broadcast.
     */
    accept_all_mac_addresses: Ternary
    /**
     * When %TRUE, setup the interface to accept packets for all MAC addresses.
     * This is enabling the kernel interface flag IFF_PROMISC.
     * When %FALSE, the interface will only accept the packets with the
     * interface destination mac address or broadcast.
     */
    acceptAllMacAddresses: Ternary
    /**
     * When %TRUE, enforce auto-negotiation of speed and duplex mode.
     * If "speed" and "duplex" properties are both specified, only that
     * single mode will be advertised and accepted during the link
     * auto-negotiation process: this works only for BASE-T 802.3 specifications
     * and is useful for enforcing gigabits modes, as in these cases link
     * negotiation is mandatory.
     * When %FALSE, "speed" and "duplex" properties should be both set or
     * link configuration will be skipped.
     */
    auto_negotiate: boolean
    /**
     * When %TRUE, enforce auto-negotiation of speed and duplex mode.
     * If "speed" and "duplex" properties are both specified, only that
     * single mode will be advertised and accepted during the link
     * auto-negotiation process: this works only for BASE-T 802.3 specifications
     * and is useful for enforcing gigabits modes, as in these cases link
     * negotiation is mandatory.
     * When %FALSE, "speed" and "duplex" properties should be both set or
     * link configuration will be skipped.
     */
    autoNegotiate: boolean
    /**
     * If specified, request that the device use this MAC address instead.
     * This is known as MAC cloning or spoofing.
     * 
     * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
     * "random" and "stable" are supported.
     * "preserve" means not to touch the MAC address on activation.
     * "permanent" means to use the permanent hardware address if the device
     * has one (otherwise this is treated as "preserve").
     * "random" creates a random MAC address on each connect.
     * "stable" creates a hashed MAC address based on connection.stable-id and a
     * machine dependent key.
     * 
     * If unspecified, the value can be overwritten via global defaults, see manual
     * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
     * (older versions of NetworkManager may use a different default value).
     * 
     * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
     * "cloned-mac-address".
     */
    cloned_mac_address: string
    /**
     * If specified, request that the device use this MAC address instead.
     * This is known as MAC cloning or spoofing.
     * 
     * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
     * "random" and "stable" are supported.
     * "preserve" means not to touch the MAC address on activation.
     * "permanent" means to use the permanent hardware address if the device
     * has one (otherwise this is treated as "preserve").
     * "random" creates a random MAC address on each connect.
     * "stable" creates a hashed MAC address based on connection.stable-id and a
     * machine dependent key.
     * 
     * If unspecified, the value can be overwritten via global defaults, see manual
     * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
     * (older versions of NetworkManager may use a different default value).
     * 
     * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
     * "cloned-mac-address".
     */
    clonedMacAddress: string
    /**
     * When a value is set, either "half" or "full", configures the device
     * to use the specified duplex mode. If "auto-negotiate" is "yes" the
     * specified duplex mode will be the only one advertised during link
     * negotiation: this works only for BASE-T 802.3 specifications and is
     * useful for enforcing gigabits modes, as in these cases link negotiation
     * is mandatory.
     * If the value is unset (the default), the link configuration will be
     * either skipped (if "auto-negotiate" is "no", the default) or will
     * be auto-negotiated (if "auto-negotiate" is "yes") and the local device
     * will advertise all the supported duplex modes.
     * Must be set together with the "speed" property if specified.
     * Before specifying a duplex mode be sure your device supports it.
     */
    duplex: string
    /**
     * With #NMSettingWired:cloned-mac-address setting "random" or "stable",
     * by default all bits of the MAC address are scrambled and a locally-administered,
     * unicast MAC address is created. This property allows to specify that certain bits
     * are fixed. Note that the least significant bit of the first MAC address will
     * always be unset to create a unicast MAC address.
     * 
     * If the property is %NULL, it is eligible to be overwritten by a default
     * connection setting. If the value is still %NULL or an empty string, the
     * default is to create a locally-administered, unicast MAC address.
     * 
     * If the value contains one MAC address, this address is used as mask. The set
     * bits of the mask are to be filled with the current MAC address of the device,
     * while the unset bits are subject to randomization.
     * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
     * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
     * 
     * If the value contains one additional MAC address after the mask,
     * this address is used instead of the current MAC address to fill the bits
     * that shall not be randomized. For example, a value of
     * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
     * to 68:F7:28, while the lower bits are randomized. A value of
     * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
     * globally-administered, burned-in MAC address.
     * 
     * If the value contains more than one additional MAC addresses, one of
     * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
     * will create a fully scrambled MAC address, randomly locally or globally
     * administered.
     */
    generate_mac_address_mask: string
    /**
     * With #NMSettingWired:cloned-mac-address setting "random" or "stable",
     * by default all bits of the MAC address are scrambled and a locally-administered,
     * unicast MAC address is created. This property allows to specify that certain bits
     * are fixed. Note that the least significant bit of the first MAC address will
     * always be unset to create a unicast MAC address.
     * 
     * If the property is %NULL, it is eligible to be overwritten by a default
     * connection setting. If the value is still %NULL or an empty string, the
     * default is to create a locally-administered, unicast MAC address.
     * 
     * If the value contains one MAC address, this address is used as mask. The set
     * bits of the mask are to be filled with the current MAC address of the device,
     * while the unset bits are subject to randomization.
     * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
     * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
     * 
     * If the value contains one additional MAC address after the mask,
     * this address is used instead of the current MAC address to fill the bits
     * that shall not be randomized. For example, a value of
     * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
     * to 68:F7:28, while the lower bits are randomized. A value of
     * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
     * globally-administered, burned-in MAC address.
     * 
     * If the value contains more than one additional MAC addresses, one of
     * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
     * will create a fully scrambled MAC address, randomly locally or globally
     * administered.
     */
    generateMacAddressMask: string
    /**
     * If specified, this connection will only apply to the Ethernet device
     * whose permanent MAC address matches. This property does not change the
     * MAC address of the device (i.e. MAC spoofing).
     */
    mac_address: string
    /**
     * If specified, this connection will only apply to the Ethernet device
     * whose permanent MAC address matches. This property does not change the
     * MAC address of the device (i.e. MAC spoofing).
     */
    macAddress: string
    /**
     * If specified, this connection will never apply to the Ethernet device
     * whose permanent MAC address matches an address in the list.  Each MAC
     * address is in the standard hex-digits-and-colons notation
     * (00:11:22:33:44:55).
     */
    mac_address_blacklist: string[]
    /**
     * If specified, this connection will never apply to the Ethernet device
     * whose permanent MAC address matches an address in the list.  Each MAC
     * address is in the standard hex-digits-and-colons notation
     * (00:11:22:33:44:55).
     */
    macAddressBlacklist: string[]
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu: number
    /**
     * Specific port type to use if the device supports multiple
     * attachment methods.  One of "tp" (Twisted Pair), "aui" (Attachment Unit
     * Interface), "bnc" (Thin Ethernet) or "mii" (Media Independent Interface).
     * If the device supports only one port type, this setting is ignored.
     */
    port: string
    /**
     * s390 network device type; one of "qeth", "lcs", or "ctc", representing
     * the different types of virtual network devices available on s390 systems.
     */
    s390_nettype: string
    /**
     * s390 network device type; one of "qeth", "lcs", or "ctc", representing
     * the different types of virtual network devices available on s390 systems.
     */
    s390Nettype: string
    /**
     * Dictionary of key/value pairs of s390-specific device options.  Both keys
     * and values must be strings.  Allowed keys include "portno", "layer2",
     * "portname", "protocol", among others.  Key names must contain only
     * alphanumeric characters (ie, [a-zA-Z0-9]).
     * 
     * Currently, NetworkManager itself does nothing with this information.
     * However, s390utils ships a udev rule which parses this information
     * and applies it to the interface.
     */
    s390_options: GLib.HashTable<string, string>
    /**
     * Dictionary of key/value pairs of s390-specific device options.  Both keys
     * and values must be strings.  Allowed keys include "portno", "layer2",
     * "portname", "protocol", among others.  Key names must contain only
     * alphanumeric characters (ie, [a-zA-Z0-9]).
     * 
     * Currently, NetworkManager itself does nothing with this information.
     * However, s390utils ships a udev rule which parses this information
     * and applies it to the interface.
     */
    s390Options: GLib.HashTable<string, string>
    /**
     * Identifies specific subchannels that this network device uses for
     * communication with z/VM or s390 host.  Like the
     * #NMSettingWired:mac-address property for non-z/VM devices, this property
     * can be used to ensure this connection only applies to the network device
     * that uses these subchannels.  The list should contain exactly 3 strings,
     * and each string may only be composed of hexadecimal characters and the
     * period (.) character.
     */
    s390_subchannels: string[]
    /**
     * Identifies specific subchannels that this network device uses for
     * communication with z/VM or s390 host.  Like the
     * #NMSettingWired:mac-address property for non-z/VM devices, this property
     * can be used to ensure this connection only applies to the network device
     * that uses these subchannels.  The list should contain exactly 3 strings,
     * and each string may only be composed of hexadecimal characters and the
     * period (.) character.
     */
    s390Subchannels: string[]
    /**
     * When a value greater than 0 is set, configures the device to use
     * the specified speed. If "auto-negotiate" is "yes" the specified
     * speed will be the only one advertised during link negotiation:
     * this works only for BASE-T 802.3 specifications and is useful for
     * enforcing gigabit speeds, as in this case link negotiation is
     * mandatory.
     * If the value is unset (0, the default), the link configuration will be
     * either skipped (if "auto-negotiate" is "no", the default) or will
     * be auto-negotiated (if "auto-negotiate" is "yes") and the local device
     * will advertise all the supported speeds.
     * In Mbit/s, ie 100 == 100Mbit/s.
     * Must be set together with the "duplex" property when non-zero.
     * Before specifying a speed value be sure your device supports it.
     */
    speed: number
    /**
     * The #NMSettingWiredWakeOnLan options to enable. Not all devices support all options.
     * May be any combination of %NM_SETTING_WIRED_WAKE_ON_LAN_PHY,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_UNICAST, %NM_SETTING_WIRED_WAKE_ON_LAN_MULTICAST,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_BROADCAST, %NM_SETTING_WIRED_WAKE_ON_LAN_ARP,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_MAGIC or the special values
     * %NM_SETTING_WIRED_WAKE_ON_LAN_DEFAULT (to use global settings) and
     * %NM_SETTING_WIRED_WAKE_ON_LAN_IGNORE (to disable management of Wake-on-LAN in
     * NetworkManager).
     */
    wake_on_lan: number
    /**
     * The #NMSettingWiredWakeOnLan options to enable. Not all devices support all options.
     * May be any combination of %NM_SETTING_WIRED_WAKE_ON_LAN_PHY,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_UNICAST, %NM_SETTING_WIRED_WAKE_ON_LAN_MULTICAST,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_BROADCAST, %NM_SETTING_WIRED_WAKE_ON_LAN_ARP,
     * %NM_SETTING_WIRED_WAKE_ON_LAN_MAGIC or the special values
     * %NM_SETTING_WIRED_WAKE_ON_LAN_DEFAULT (to use global settings) and
     * %NM_SETTING_WIRED_WAKE_ON_LAN_IGNORE (to disable management of Wake-on-LAN in
     * NetworkManager).
     */
    wakeOnLan: number
    /**
     * If specified, the password used with magic-packet-based
     * Wake-on-LAN, represented as an Ethernet MAC address.  If %NULL,
     * no password will be required.
     */
    wake_on_lan_password: string
    /**
     * If specified, the password used with magic-packet-based
     * Wake-on-LAN, represented as an Ethernet MAC address.  If %NULL,
     * no password will be required.
     */
    wakeOnLanPassword: string

    // Constructors of NM-1.0.SettingWired


static ["new"](): SettingWired;

    // Owm methods of NM-1.0.SettingWired

    /**
     * Adds a new MAC address to the #NMSettingWired:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
     */
    add_mac_blacklist_item(mac: string): boolean
    /**
     * Add an option to the table. If the key already exists, the value gets
     * replaced.
     * 
     * Before 1.32, the function would assert that the key is valid. Since then,
     * an invalid key gets silently added but renders the profile as invalid.
     * @param key key name for the option
     * @param value value for the option
     * @returns since 1.32 this always returns %TRUE.
     */
    add_s390_option(key: string, value: string): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clear_mac_blacklist_items(): void
    get_accept_all_mac_addresses(): Ternary
    get_auto_negotiate(): boolean
    get_cloned_mac_address(): string
    get_duplex(): string
    get_generate_mac_address_mask(): string
    get_mac_address(): string
    get_mac_address_blacklist(): string[]
    get_mac_blacklist_item(idx: number): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    /**
     * Returns the number of s390-specific options that should be set for this
     * device when it is activated.  This can be used to retrieve each s390
     * option individually using nm_setting_wired_get_s390_option().
     * @returns the number of s390-specific device options
     */
    get_num_s390_options(): number
    get_port(): string
    /**
     * Returns the s390 device type this connection should apply to.  Will be one
     * of 'qeth', 'lcs', or 'ctc'.
     * @returns the s390 device type
     */
    get_s390_nettype(): string
    /**
     * Given an index, return the value of the s390 option at that index.  indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_wired_add_s390_option() and nm_setting_wired_remove_s390_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_wired_get_num_s390_options() - 1
     * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
     */
    get_s390_option(idx: number): boolean
    /**
     * Returns the value associated with the s390-specific option specified by
     * `key,` if it exists.
     * @param key the key for which to retrieve the value
     * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
     */
    get_s390_option_by_key(key: string): string
    /**
     * Return the list of s390 subchannels that identify the device that this
     * connection is applicable to.  The connection should only be used in
     * conjunction with that device.
     * @returns array of strings, each specifying   one subchannel the s390 device uses to communicate to the host.
     */
    get_s390_subchannels(): string[]
    get_speed(): number
    /**
     * Returns a list of valid s390 options.
     * 
     * The `setting` argument is unused and %NULL may be passed instead.
     * @returns a %NULL-terminated array of strings of valid s390 options.
     */
    get_valid_s390_options(): string[]
    /**
     * Returns the Wake-on-LAN options enabled for the connection
     * @returns the Wake-on-LAN options
     */
    get_wake_on_lan(): SettingWiredWakeOnLan
    /**
     * Returns the Wake-on-LAN password. This only applies to
     * %NM_SETTING_WIRED_WAKE_ON_LAN_MAGIC.
     * @returns the Wake-on-LAN setting password, or %NULL if there is no password.
     */
    get_wake_on_lan_password(): string
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    remove_mac_blacklist_item(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
     */
    remove_mac_blacklist_item_by_value(mac: string): boolean
    /**
     * Remove the s390-specific option referenced by `key` from the internal option
     * list.
     * @param key key name for the option to remove
     * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
     */
    remove_s390_option(key: string): boolean
}

module SettingWireless {

    // Constructor properties interface

}

/**
 * Wi-Fi Settings
 */
class SettingWireless extends Setting {

    // Own properties of NM-1.0.SettingWireless

    /**
     * Configures AP isolation, which prevents communication between
     * wireless devices connected to this AP. This property can be set
     * to a value different from %NM_TERNARY_DEFAULT only when the
     * interface is configured in AP mode.
     * 
     * If set to %NM_TERNARY_TRUE, devices are not able to communicate
     * with each other. This increases security because it protects
     * devices against attacks from other clients in the network. At
     * the same time, it prevents devices to access resources on the
     * same wireless networks as file shares, printers, etc.
     * 
     * If set to %NM_TERNARY_FALSE, devices can talk to each other.
     * 
     * When set to %NM_TERNARY_DEFAULT, the global default is used; in
     * case the global default is unspecified it is assumed to be
     * %NM_TERNARY_FALSE.
     */
    ap_isolation: Ternary
    /**
     * Configures AP isolation, which prevents communication between
     * wireless devices connected to this AP. This property can be set
     * to a value different from %NM_TERNARY_DEFAULT only when the
     * interface is configured in AP mode.
     * 
     * If set to %NM_TERNARY_TRUE, devices are not able to communicate
     * with each other. This increases security because it protects
     * devices against attacks from other clients in the network. At
     * the same time, it prevents devices to access resources on the
     * same wireless networks as file shares, printers, etc.
     * 
     * If set to %NM_TERNARY_FALSE, devices can talk to each other.
     * 
     * When set to %NM_TERNARY_DEFAULT, the global default is used; in
     * case the global default is unspecified it is assumed to be
     * %NM_TERNARY_FALSE.
     */
    apIsolation: Ternary
    /**
     * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
     * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
     * to the specific band, i.e. if "a" is specified, the device will not
     * associate with the same network in the 2.4GHz band even if the network's
     * settings are compatible.  This setting depends on specific driver
     * capability and may not work with all drivers.
     */
    band: string
    /**
     * If specified, directs the device to only associate with the given access
     * point.  This capability is highly driver dependent and not supported by
     * all devices.  Note: this property does not control the BSSID used when
     * creating an Ad-Hoc network and is unlikely to in the future.
     * 
     * Locking a client profile to a certain BSSID will prevent roaming and also
     * disable background scanning. That can be useful, if there is only one access
     * point for the SSID.
     */
    bssid: string
    /**
     * Wireless channel to use for the Wi-Fi connection.  The device will only
     * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
     * channel.  Because channel numbers overlap between bands, this property
     * also requires the "band" property to be set.
     */
    channel: number
    /**
     * If specified, request that the device use this MAC address instead.
     * This is known as MAC cloning or spoofing.
     * 
     * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
     * "random" and "stable" are supported.
     * "preserve" means not to touch the MAC address on activation.
     * "permanent" means to use the permanent hardware address of the device.
     * "random" creates a random MAC address on each connect.
     * "stable" creates a hashed MAC address based on connection.stable-id and a
     * machine dependent key.
     * 
     * If unspecified, the value can be overwritten via global defaults, see manual
     * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
     * (older versions of NetworkManager may use a different default value).
     * 
     * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
     * "cloned-mac-address".
     */
    cloned_mac_address: string
    /**
     * If specified, request that the device use this MAC address instead.
     * This is known as MAC cloning or spoofing.
     * 
     * Beside explicitly specifying a MAC address, the special values "preserve", "permanent",
     * "random" and "stable" are supported.
     * "preserve" means not to touch the MAC address on activation.
     * "permanent" means to use the permanent hardware address of the device.
     * "random" creates a random MAC address on each connect.
     * "stable" creates a hashed MAC address based on connection.stable-id and a
     * machine dependent key.
     * 
     * If unspecified, the value can be overwritten via global defaults, see manual
     * of NetworkManager.conf. If still unspecified, it defaults to "preserve"
     * (older versions of NetworkManager may use a different default value).
     * 
     * On D-Bus, this field is expressed as "assigned-mac-address" or the deprecated
     * "cloned-mac-address".
     */
    clonedMacAddress: string
    /**
     * With #NMSettingWireless:cloned-mac-address setting "random" or "stable",
     * by default all bits of the MAC address are scrambled and a locally-administered,
     * unicast MAC address is created. This property allows to specify that certain bits
     * are fixed. Note that the least significant bit of the first MAC address will
     * always be unset to create a unicast MAC address.
     * 
     * If the property is %NULL, it is eligible to be overwritten by a default
     * connection setting. If the value is still %NULL or an empty string, the
     * default is to create a locally-administered, unicast MAC address.
     * 
     * If the value contains one MAC address, this address is used as mask. The set
     * bits of the mask are to be filled with the current MAC address of the device,
     * while the unset bits are subject to randomization.
     * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
     * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
     * 
     * If the value contains one additional MAC address after the mask,
     * this address is used instead of the current MAC address to fill the bits
     * that shall not be randomized. For example, a value of
     * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
     * to 68:F7:28, while the lower bits are randomized. A value of
     * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
     * globally-administered, burned-in MAC address.
     * 
     * If the value contains more than one additional MAC addresses, one of
     * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
     * will create a fully scrambled MAC address, randomly locally or globally
     * administered.
     */
    generate_mac_address_mask: string
    /**
     * With #NMSettingWireless:cloned-mac-address setting "random" or "stable",
     * by default all bits of the MAC address are scrambled and a locally-administered,
     * unicast MAC address is created. This property allows to specify that certain bits
     * are fixed. Note that the least significant bit of the first MAC address will
     * always be unset to create a unicast MAC address.
     * 
     * If the property is %NULL, it is eligible to be overwritten by a default
     * connection setting. If the value is still %NULL or an empty string, the
     * default is to create a locally-administered, unicast MAC address.
     * 
     * If the value contains one MAC address, this address is used as mask. The set
     * bits of the mask are to be filled with the current MAC address of the device,
     * while the unset bits are subject to randomization.
     * Setting "FE:FF:FF:00:00:00" means to preserve the OUI of the current MAC address
     * and only randomize the lower 3 bytes using the "random" or "stable" algorithm.
     * 
     * If the value contains one additional MAC address after the mask,
     * this address is used instead of the current MAC address to fill the bits
     * that shall not be randomized. For example, a value of
     * "FE:FF:FF:00:00:00 68:F7:28:00:00:00" will set the OUI of the MAC address
     * to 68:F7:28, while the lower bits are randomized. A value of
     * "02:00:00:00:00:00 00:00:00:00:00:00" will create a fully scrambled
     * globally-administered, burned-in MAC address.
     * 
     * If the value contains more than one additional MAC addresses, one of
     * them is chosen randomly. For example, "02:00:00:00:00:00 00:00:00:00:00:00 02:00:00:00:00:00"
     * will create a fully scrambled MAC address, randomly locally or globally
     * administered.
     */
    generateMacAddressMask: string
    /**
     * If %TRUE, indicates that the network is a non-broadcasting network that
     * hides its SSID. This works both in infrastructure and AP mode.
     * 
     * In infrastructure mode, various workarounds are used for a more reliable
     * discovery of hidden networks, such as probe-scanning the SSID.  However,
     * these workarounds expose inherent insecurities with hidden SSID networks,
     * and thus hidden SSID networks should be used with caution.
     * 
     * In AP mode, the created network does not broadcast its SSID.
     * 
     * Note that marking the network as hidden may be a privacy issue for you
     * (in infrastructure mode) or client stations (in AP mode), as the explicit
     * probe-scans are distinctly recognizable on the air.
     */
    hidden: boolean
    /**
     * If specified, this connection will only apply to the Wi-Fi device whose
     * permanent MAC address matches. This property does not change the MAC
     * address of the device (i.e. MAC spoofing).
     */
    mac_address: string
    /**
     * If specified, this connection will only apply to the Wi-Fi device whose
     * permanent MAC address matches. This property does not change the MAC
     * address of the device (i.e. MAC spoofing).
     */
    macAddress: string
    /**
     * A list of permanent MAC addresses of Wi-Fi devices to which this
     * connection should never apply.  Each MAC address should be given in the
     * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
     */
    mac_address_blacklist: string[]
    /**
     * A list of permanent MAC addresses of Wi-Fi devices to which this
     * connection should never apply.  Each MAC address should be given in the
     * standard hex-digits-and-colons notation (eg "00:11:22:33:44:55").
     */
    macAddressBlacklist: string[]
    /**
     * One of %NM_SETTING_MAC_RANDOMIZATION_DEFAULT (never randomize unless
     * the user has set a global default to randomize and the supplicant
     * supports randomization),  %NM_SETTING_MAC_RANDOMIZATION_NEVER (never
     * randomize the MAC address), or %NM_SETTING_MAC_RANDOMIZATION_ALWAYS
     * (always randomize the MAC address).
     */
    mac_address_randomization: number
    /**
     * One of %NM_SETTING_MAC_RANDOMIZATION_DEFAULT (never randomize unless
     * the user has set a global default to randomize and the supplicant
     * supports randomization),  %NM_SETTING_MAC_RANDOMIZATION_NEVER (never
     * randomize the MAC address), or %NM_SETTING_MAC_RANDOMIZATION_ALWAYS
     * (always randomize the MAC address).
     */
    macAddressRandomization: number
    /**
     * Wi-Fi network mode; one of "infrastructure", "mesh", "adhoc" or "ap".  If blank,
     * infrastructure is assumed.
     */
    mode: string
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu: number
    /**
     * One of %NM_SETTING_WIRELESS_POWERSAVE_DISABLE (disable Wi-Fi power
     * saving), %NM_SETTING_WIRELESS_POWERSAVE_ENABLE (enable Wi-Fi power
     * saving), %NM_SETTING_WIRELESS_POWERSAVE_IGNORE (don't touch currently
     * configure setting) or %NM_SETTING_WIRELESS_POWERSAVE_DEFAULT (use the
     * globally configured value). All other values are reserved.
     */
    powersave: number
    /**
     * This property is not implemented and has no effect.
     */
    rate: number
    /**
     * A list of BSSIDs (each BSSID formatted as a MAC address like
     * "00:11:22:33:44:55") that have been detected as part of the Wi-Fi
     * network.  NetworkManager internally tracks previously seen BSSIDs. The
     * property is only meant for reading and reflects the BSSID list of
     * NetworkManager. The changes you make to this property will not be
     * preserved.
     * 
     * This is not a regular property that the user would configure. Instead,
     * NetworkManager automatically sets the seen BSSIDs and tracks them internally
     * in "/var/lib/NetworkManager/seen-bssids" file.
     */
    seen_bssids: string[]
    /**
     * A list of BSSIDs (each BSSID formatted as a MAC address like
     * "00:11:22:33:44:55") that have been detected as part of the Wi-Fi
     * network.  NetworkManager internally tracks previously seen BSSIDs. The
     * property is only meant for reading and reflects the BSSID list of
     * NetworkManager. The changes you make to this property will not be
     * preserved.
     * 
     * This is not a regular property that the user would configure. Instead,
     * NetworkManager automatically sets the seen BSSIDs and tracks them internally
     * in "/var/lib/NetworkManager/seen-bssids" file.
     */
    seenBssids: string[]
    /**
     * SSID of the Wi-Fi network. Must be specified.
     */
    ssid: GLib.Bytes
    /**
     * This property is not implemented and has no effect.
     */
    tx_power: number
    /**
     * This property is not implemented and has no effect.
     */
    txPower: number
    /**
     * The #NMSettingWirelessWakeOnWLan options to enable. Not all devices support all options.
     * May be any combination of %NM_SETTING_WIRELESS_WAKE_ON_WLAN_ANY,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DISCONNECT,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_MAGIC,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_GTK_REKEY_FAILURE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_EAP_IDENTITY_REQUEST,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_4WAY_HANDSHAKE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_RFKILL_RELEASE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_TCP or the special values
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT (to use global settings) and
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE (to disable management of Wake-on-LAN in
     * NetworkManager).
     */
    wake_on_wlan: number
    /**
     * The #NMSettingWirelessWakeOnWLan options to enable. Not all devices support all options.
     * May be any combination of %NM_SETTING_WIRELESS_WAKE_ON_WLAN_ANY,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DISCONNECT,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_MAGIC,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_GTK_REKEY_FAILURE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_EAP_IDENTITY_REQUEST,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_4WAY_HANDSHAKE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_RFKILL_RELEASE,
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_TCP or the special values
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_DEFAULT (to use global settings) and
     * %NM_SETTING_WIRELESS_WAKE_ON_WLAN_IGNORE (to disable management of Wake-on-LAN in
     * NetworkManager).
     */
    wakeOnWlan: number

    // Constructors of NM-1.0.SettingWireless


static ["new"](): SettingWireless;

    // Owm methods of NM-1.0.SettingWireless

    /**
     * Adds a new MAC address to the #NMSettingWireless:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
     */
    add_mac_blacklist_item(mac: string): boolean
    /**
     * Adds a new Wi-Fi AP's BSSID to the previously seen BSSID list of the setting.
     * NetworkManager now tracks previously seen BSSIDs internally so this function
     * no longer has much use. Actually, changes you make using this function will
     * not be preserved.
     * @param bssid the new BSSID to add to the list
     * @returns %TRUE if @bssid was already known, %FALSE if not
     */
    add_seen_bssid(bssid: string): boolean
    /**
     * Given a #NMSettingWireless and an optional #NMSettingWirelessSecurity,
     * determine if the configuration given by the settings is compatible with
     * the security of an access point using that access point's capability flags
     * and mode.  Useful for clients that wish to filter a set of connections
     * against a set of access points and determine which connections are
     * compatible with which access points.
     * @param s_wireless_sec a #NMSettingWirelessSecurity or %NULL
     * @param ap_flags the %NM80211ApFlags of the given access point
     * @param ap_wpa the %NM80211ApSecurityFlags of the given access point's WPA capabilities
     * @param ap_rsn the %NM80211ApSecurityFlags of the given access point's WPA2/RSN capabilities
     * @param ap_mode the 802.11 mode of the AP, either Ad-Hoc or Infrastructure
     * @returns %TRUE if the given settings are compatible with the access point's security flags and mode, %FALSE if they are not.
     */
    ap_security_compatible(s_wireless_sec: SettingWirelessSecurity, ap_flags: 80211ApFlags, ap_wpa: 80211ApSecurityFlags, ap_rsn: 80211ApSecurityFlags, ap_mode: 80211Mode): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clear_mac_blacklist_items(): void
    get_ap_isolation(): Ternary
    get_band(): string
    get_bssid(): string
    get_channel(): number
    get_cloned_mac_address(): string
    get_generate_mac_address_mask(): string
    get_hidden(): boolean
    get_mac_address(): string
    get_mac_address_blacklist(): string[]
    get_mac_address_randomization(): SettingMacRandomization
    get_mac_blacklist_item(idx: number): string
    get_mode(): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    get_num_seen_bssids(): number
    get_powersave(): number
    get_rate(): number
    get_seen_bssid(i: number): string
    get_ssid(): GLib.Bytes
    get_tx_power(): number
    /**
     * Returns the Wake-on-WLAN options enabled for the connection
     * @returns the Wake-on-WLAN options
     */
    get_wake_on_wlan(): SettingWirelessWakeOnWLan
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    remove_mac_blacklist_item(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
     */
    remove_mac_blacklist_item_by_value(mac: string): boolean
}

module SettingWirelessSecurity {

    // Constructor properties interface

}

/**
 * Wi-Fi Security Settings
 */
class SettingWirelessSecurity extends Setting {

    // Own properties of NM-1.0.SettingWirelessSecurity

    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
     * 802.11 authentication algorithm required by the AP here.  One of "open"
     * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
     * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
     * "leap-username" and "leap-password" properties must be specified.
     */
    auth_alg: string
    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
     * 802.11 authentication algorithm required by the AP here.  One of "open"
     * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
     * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
     * "leap-username" and "leap-password" properties must be specified.
     */
    authAlg: string
    /**
     * Indicates whether Fast Initial Link Setup (802.11ai) must be enabled for
     * the connection.  One of %NM_SETTING_WIRELESS_SECURITY_FILS_DEFAULT (use
     * global default value), %NM_SETTING_WIRELESS_SECURITY_FILS_DISABLE
     * (disable FILS), %NM_SETTING_WIRELESS_SECURITY_FILS_OPTIONAL (enable FILS
     * if the supplicant and the access point support it) or
     * %NM_SETTING_WIRELESS_SECURITY_FILS_REQUIRED (enable FILS and fail if not
     * supported).  When set to %NM_SETTING_WIRELESS_SECURITY_FILS_DEFAULT and
     * no global default is set, FILS will be optionally enabled.
     */
    fils: number
    /**
     * A list of group/broadcast encryption algorithms which prevents
     * connections to Wi-Fi networks that do not utilize one of the algorithms
     * in the list.  For maximum compatibility leave this property empty.  Each
     * list element may be one of "wep40", "wep104", "tkip", or "ccmp".
     */
    group: string[]
    /**
     * Key management used for the connection. One of "none" (WEP or no
     * password protection), "ieee8021x" (Dynamic WEP), "owe" (Opportunistic
     * Wireless Encryption), "wpa-psk" (WPA2 + WPA3 personal), "sae" (WPA3
     * personal only), "wpa-eap" (WPA2 + WPA3 enterprise) or
     * "wpa-eap-suite-b-192" (WPA3 enterprise only).
     * 
     * This property must be set for any Wi-Fi connection that uses security.
     */
    key_mgmt: string
    /**
     * Key management used for the connection. One of "none" (WEP or no
     * password protection), "ieee8021x" (Dynamic WEP), "owe" (Opportunistic
     * Wireless Encryption), "wpa-psk" (WPA2 + WPA3 personal), "sae" (WPA3
     * personal only), "wpa-eap" (WPA2 + WPA3 enterprise) or
     * "wpa-eap-suite-b-192" (WPA3 enterprise only).
     * 
     * This property must be set for any Wi-Fi connection that uses security.
     */
    keyMgmt: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_password: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapPassword: string
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leap_password_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leapPasswordFlags: SettingSecretFlags
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_username: string
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapUsername: string
    /**
     * A list of pairwise encryption algorithms which prevents connections to
     * Wi-Fi networks that do not utilize one of the algorithms in the list.
     * For maximum compatibility leave this property empty.  Each list element
     * may be one of "tkip" or "ccmp".
     */
    pairwise: string[]
    /**
     * Indicates whether Protected Management Frames (802.11w) must be enabled
     * for the connection.  One of %NM_SETTING_WIRELESS_SECURITY_PMF_DEFAULT
     * (use global default value), %NM_SETTING_WIRELESS_SECURITY_PMF_DISABLE
     * (disable PMF), %NM_SETTING_WIRELESS_SECURITY_PMF_OPTIONAL (enable PMF if
     * the supplicant and the access point support it) or
     * %NM_SETTING_WIRELESS_SECURITY_PMF_REQUIRED (enable PMF and fail if not
     * supported).  When set to %NM_SETTING_WIRELESS_SECURITY_PMF_DEFAULT and no
     * global default is set, PMF will be optionally enabled.
     */
    pmf: number
    /**
     * List of strings specifying the allowed WPA protocol versions to use.
     * Each element may be one "wpa" (allow WPA) or "rsn" (allow WPA2/RSN).  If
     * not specified, both WPA and RSN connections are allowed.
     */
    proto: string[]
    /**
     * Pre-Shared-Key for WPA networks. For WPA-PSK, it's either an ASCII
     * passphrase of 8 to 63 characters that is (as specified in the 802.11i
     * standard) hashed to derive the actual key, or the key in form of 64
     * hexadecimal character. The WPA3-Personal networks use a passphrase
     * of any length for SAE authentication.
     */
    psk: string
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
     * property.
     */
    psk_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
     * property.
     */
    pskFlags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wep_key_flags: SettingSecretFlags
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wepKeyFlags: SettingSecretFlags
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wep_key_type: WepKeyType
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wepKeyType: WepKeyType
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key0: string
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey0: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key1: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey1: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key2: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey2: string
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key3: string
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey3: string
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wep_tx_keyidx: number
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wepTxKeyidx: number
    /**
     * Flags indicating which mode of WPS is to be used if any.
     * 
     * There's little point in changing the default setting as NetworkManager will
     * automatically determine whether it's feasible to start WPS enrollment from
     * the Access Point capabilities.
     * 
     * WPS can be disabled by setting this property to a value of 1.
     */
    wps_method: number
    /**
     * Flags indicating which mode of WPS is to be used if any.
     * 
     * There's little point in changing the default setting as NetworkManager will
     * automatically determine whether it's feasible to start WPS enrollment from
     * the Access Point capabilities.
     * 
     * WPS can be disabled by setting this property to a value of 1.
     */
    wpsMethod: number

    // Constructors of NM-1.0.SettingWirelessSecurity


static ["new"](): SettingWirelessSecurity;

    // Owm methods of NM-1.0.SettingWirelessSecurity

    /**
     * Adds an encryption algorithm to the list of allowed groupwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param group the encryption algorithm to add, one of "wep40", "wep104", "tkip", or "ccmp"
     * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
     */
    add_group(group: string): boolean
    /**
     * Adds an encryption algorithm to the list of allowed pairwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param pairwise the encryption algorithm to add, one of "tkip" or "ccmp"
     * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
     */
    add_pairwise(pairwise: string): boolean
    /**
     * Adds a Wi-Fi security protocol (one of "wpa" or "rsn") to the allowed list;
     * only protocols in this list will be used when finding and connecting to
     * the Wi-Fi network specified by this connection.  For example, if the
     * protocol list contains only "wpa" but the access point for the SSID specified
     * by this connection only supports WPA2/RSN, the connection cannot be used
     * with the access point.
     * @param proto the protocol to add, one of "wpa" or "rsn"
     * @returns %TRUE if the protocol was new and was added to the allowed protocol list, or %FALSE if it was already in the list
     */
    add_proto(proto: string): boolean
    /**
     * Removes all algorithms from the allowed list.  If there are no algorithms
     * specified then all groupwise encryption algorithms are allowed.
     */
    clear_groups(): void
    /**
     * Removes all algorithms from the allowed list.  If there are no algorithms
     * specified then all pairwise encryption algorithms are allowed.
     */
    clear_pairwise(): void
    /**
     * Removes all protocols from the allowed list.  If there are no protocols
     * specified then all protocols are allowed.
     */
    clear_protos(): void
    get_auth_alg(): string
    get_fils(): SettingWirelessSecurityFils
    /**
     * Returns the allowed groupwise encryption algorithm from allowed algorithm
     * list.
     * @param i index of an item in the allowed groupwise encryption algorithm list
     * @returns the groupwise encryption algorithm at index @i
     */
    get_group(i: number): string
    get_key_mgmt(): string
    get_leap_password(): string
    get_leap_password_flags(): SettingSecretFlags
    get_leap_username(): string
    get_num_groups(): number
    get_num_pairwise(): number
    get_num_protos(): number
    /**
     * Returns the allowed pairwise encryption algorithm from allowed algorithm
     * list.
     * @param i index of an item in the allowed pairwise encryption algorithm list
     * @returns the pairwise encryption algorithm at index @i
     */
    get_pairwise(i: number): string
    get_pmf(): SettingWirelessSecurityPmf
    get_proto(i: number): string
    get_psk(): string
    get_psk_flags(): SettingSecretFlags
    get_wep_key(idx: number): string
    get_wep_key_flags(): SettingSecretFlags
    get_wep_key_type(): WepKeyType
    get_wep_tx_keyidx(): number
    get_wps_method(): SettingWirelessSecurityWpsMethod
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     * @param i the index of an item in the allowed groupwise encryption algorithm list
     */
    remove_group(i: number): void
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     * @param group the encryption algorithm to remove, one of "wep40", "wep104", "tkip", or "ccmp"
     * @returns %TRUE if the algorithm was found and removed; %FALSE if it was not.
     */
    remove_group_by_value(group: string): boolean
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     * @param i the index of an item in the allowed pairwise encryption algorithm list
     */
    remove_pairwise(i: number): void
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     * @param pairwise the encryption algorithm to remove, one of "tkip" or "ccmp"
     * @returns %TRUE if the encryption algorithm was found and removed; %FALSE if it was not.
     */
    remove_pairwise_by_value(pairwise: string): boolean
    /**
     * Removes a protocol from the allowed protocol list.
     * @param i index of the protocol to remove
     */
    remove_proto(i: number): void
    /**
     * Removes a protocol from the allowed protocol list.
     * @param proto the protocol to remove, one of "wpa" or "rsn"
     * @returns %TRUE if the protocol was found and removed; %FALSE if it was not.
     */
    remove_proto_by_value(proto: string): boolean
    /**
     * Sets a WEP key in the given index.
     * @param idx the index of the key (0..3 inclusive)
     * @param key the WEP key as a string, in either hexadecimal, ASCII, or passphrase form as determined by the value of the #NMSettingWirelessSecurity:wep-key-type property.
     */
    set_wep_key(idx: number, key: string): void
}

module SettingWpan {

    // Constructor properties interface

}

/**
 * IEEE 802.15.4 (WPAN) MAC Settings
 */
class SettingWpan extends Setting {

    // Own properties of NM-1.0.SettingWpan

    /**
     * IEEE 802.15.4 channel. A positive integer or -1, meaning "do not
     * set, use whatever the device is already set to".
     */
    channel: number
    /**
     * If specified, this connection will only apply to the IEEE 802.15.4 (WPAN)
     * MAC layer device whose permanent MAC address matches.
     */
    mac_address: string
    /**
     * If specified, this connection will only apply to the IEEE 802.15.4 (WPAN)
     * MAC layer device whose permanent MAC address matches.
     */
    macAddress: string
    /**
     * IEEE 802.15.4 channel page. A positive integer or -1, meaning "do not
     * set, use whatever the device is already set to".
     */
    page: number
    /**
     * IEEE 802.15.4 Personal Area Network (PAN) identifier.
     */
    pan_id: number
    /**
     * IEEE 802.15.4 Personal Area Network (PAN) identifier.
     */
    panId: number
    /**
     * Short IEEE 802.15.4 address to be used within a restricted environment.
     */
    short_address: number
    /**
     * Short IEEE 802.15.4 address to be used within a restricted environment.
     */
    shortAddress: number

    // Constructors of NM-1.0.SettingWpan


static ["new"](): SettingWpan;

    // Owm methods of NM-1.0.SettingWpan

    get_channel(): number
    get_mac_address(): string
    get_page(): number
    get_pan_id(): number
    get_short_address(): number
}

module SimpleConnection {

    // Constructor properties interface

}

class SimpleConnection extends GObject.Object {

    // Owm methods of NM-1.0.SimpleConnection

    /**
     * Creates a new #NMSimpleConnection object with no #NMSetting objects.
     */
    static new(): Connection
    /**
     * Clones an #NMConnection as an #NMSimpleConnection.
     * @param connection the #NMConnection to clone
     */
    static new_clone(connection: Connection): Connection
    /**
     * Creates a new #NMSimpleConnection from a hash table describing the
     * connection and normalize the connection.  See nm_connection_to_dbus() for a
     * description of the expected hash table.
     * @param dict a #GVariant of type %NM_VARIANT_TYPE_CONNECTION describing the connection
     */
    static new_from_dbus(dict: GLib.Variant): Connection
}

module VpnConnection {

    // Signal callback interfaces

    interface VpnStateChanged {
        (object: number, p0: number): void
    }


    // Constructor properties interface

}

class VpnConnection extends ActiveConnection {

    // Own properties of NM-1.0.VpnConnection

    /**
     * The VPN login banner of the active VPN connection.
     */
    readonly banner: string
    /**
     * The VPN state of the active VPN connection.
     */
    readonly vpn_state: VpnConnectionState
    /**
     * The VPN state of the active VPN connection.
     */
    readonly vpnState: VpnConnectionState

    // Owm methods of NM-1.0.VpnConnection

    /**
     * Gets the VPN login banner of the active #NMVpnConnection.
     * @returns the VPN login banner of the VPN connection. This is the internal string used by the connection, and must not be modified.
     */
    get_banner(): string
    /**
     * Gets the current #NMVpnConnection state.
     * @returns the VPN state of the active VPN connection.
     */
    get_vpn_state(): VpnConnectionState
}

module VpnPluginInfo {

    // Constructor properties interface

}

class VpnPluginInfo extends GObject.Object {

    // Own properties of NM-1.0.VpnPluginInfo

    /**
     * The filename from which the info was loaded.
     * Can be %NULL if the instance was not loaded from
     * a file (i.e. the keyfile instance was passed to the
     * constructor).
     */
    filename: string
    /**
     * Initialize the instance with a different keyfile instance.
     * When passing a keyfile instance, the constructor will not
     * try to read from filename.
     */
    keyfile: GLib.KeyFile
    /**
     * The name of the VPN plugin.
     */
    readonly name: string

    // Constructors of NM-1.0.VpnPluginInfo


static new_from_file(filename: string): VpnPluginInfo;

static new_search_file(name?: (string | null), service?: (string | null)): VpnPluginInfo;

static new_with_data(filename: string, keyfile: GLib.KeyFile): VpnPluginInfo;

    // Owm methods of NM-1.0.VpnPluginInfo

    static list_add(list: VpnPluginInfo[], plugin_info: VpnPluginInfo): boolean
    static list_find_by_filename(list: VpnPluginInfo[], filename: string): VpnPluginInfo
    static list_find_by_name(list: VpnPluginInfo[], name: string): VpnPluginInfo
    static list_find_by_service(list: VpnPluginInfo[], service: string): VpnPluginInfo
    /**
     * A VPN plugin provides one or several service-types, like org.freedesktop.NetworkManager.libreswan
     * Certain plugins provide more then one service type, via aliases (org.freedesktop.NetworkManager.openswan).
     * This function looks up a service-type (or an alias) based on a name.
     * 
     * Preferably, the name can be a full service-type/alias of an installed
     * plugin. Otherwise, it can be the name of a VPN plugin (in which case, the
     * primary, non-aliased service-type is returned). Otherwise, it can be
     * one of several well known short-names (which is a hard-coded list of
     * types in libnm). On success, this returns a full qualified service-type
     * (or an alias). It doesn't say, that such an plugin is actually available,
     * but it could be retrieved via nm_vpn_plugin_info_list_find_by_service().
     * @param list a possibly empty #GSList of #NMVpnPluginInfo instances
     * @param name a name to lookup the service-type.
     */
    static list_find_service_type(list: VpnPluginInfo[], name: string): string
    static list_get_service_types(list: VpnPluginInfo[], only_existing: boolean, with_abbreviations: boolean): string[]
    static list_load(): VpnPluginInfo[]
    /**
     * Remove `plugin_info` from `list`.
     * @param list list of plugins
     * @param plugin_info instance
     */
    static list_remove(list: VpnPluginInfo[], plugin_info: VpnPluginInfo): boolean
    /**
     * Regular name files have a certain pattern. That basically means
     * they have the file extension "name". Check if `filename`
     * is valid according to that pattern.
     * @param filename the filename to check
     */
    static validate_filename(filename: string): boolean

    // Owm methods of NM-1.0.VpnPluginInfo

    get_aliases(): string[]
    get_auth_dialog(): string
    get_editor_plugin(): VpnEditorPlugin
    get_filename(): string
    get_name(): string
    get_plugin(): string
    get_program(): string
    get_service(): string
    load_editor_plugin(): VpnEditorPlugin
    lookup_property(group: string, key: string): string
    /**
     * Set the internal plugin instance. If %NULL, only clear the previous instance.
     * @param plugin plugin instance
     */
    set_editor_plugin(plugin?: (VpnEditorPlugin | null)): void
    supports_hints(): boolean
    supports_multiple(): boolean
}

module VpnPluginOld {

    // Signal callback interfaces

    interface Config {
        (object: GLib.Variant): void
    }

    interface Failure {
        (object: number): void
    }

    interface Ip4Config {
        (object: GLib.Variant): void
    }

    interface Ip6Config {
        (object: GLib.Variant): void
    }

    interface LoginBanner {
        (object: string): void
    }

    interface Quit {
        (): void
    }

    interface SecretsRequired {
        (object: string, p0: string[]): void
    }

    interface StateChanged {
        (object: number): void
    }


    // Constructor properties interface

}

abstract class VpnPluginOld extends GObject.Object {

    // Own properties of NM-1.0.VpnPluginOld

    /**
     * The D-Bus service name of this plugin.
     */
    service_name: string
    /**
     * The D-Bus service name of this plugin.
     */
    serviceName: string
    /**
     * The state of the plugin.
     */
    state: VpnServiceState

    // Owm methods of NM-1.0.VpnPluginOld

    /**
     * Given a VPN secret key name, attempts to find the corresponding flags data
     * item in `data`.  If found, converts the flags data item to
     * #NMSettingSecretFlags and returns it.
     * @param data hash table containing VPN key/value pair data items
     * @param secret_name VPN secret key name for which to retrieve flags for
     */
    static get_secret_flags(data: GLib.HashTable<any, any>, secret_name: string): boolean
    /**
     * Parses key/value pairs from a file descriptor (normally stdin) passed by
     * an applet when the applet calls the authentication dialog of the VPN plugin.
     * @param fd file descriptor to read from, usually stdin (0)
     */
    static read_vpn_details(fd: number): boolean

    // Owm methods of NM-1.0.VpnPluginOld

    disconnect(): boolean
    failure(reason: VpnPluginFailure): void
    get_connection(): Gio.DBusConnection
    get_state(): VpnServiceState
    /**
     * Called by VPN plugin implementations to signal to NetworkManager that secrets
     * are required during the connection process.  This signal may be used to
     * request new secrets when the secrets originally provided by NetworkManager
     * are insufficient, or the VPN process indicates that it needs additional
     * information to complete the request.
     * @param message an information message about why secrets are required, if any
     * @param hints VPN specific secret names for required new secrets
     */
    secrets_required(message: string, hints: string): void
    set_ip4_config(ip4_config: GLib.Variant): void
    set_login_banner(banner: string): void
    set_state(state: VpnServiceState): void
}

module VpnServicePlugin {

    // Signal callback interfaces

    interface Config {
        (object: GLib.Variant): void
    }

    interface Failure {
        (object: number): void
    }

    interface Ip4Config {
        (object: GLib.Variant): void
    }

    interface Ip6Config {
        (object: GLib.Variant): void
    }

    interface LoginBanner {
        (object: string): void
    }

    interface Quit {
        (): void
    }

    interface SecretsRequired {
        (object: string, p0: string[]): void
    }

    interface StateChanged {
        (object: number): void
    }


    // Constructor properties interface

}

abstract class VpnServicePlugin extends GObject.Object {

    // Own properties of NM-1.0.VpnServicePlugin

    /**
     * The D-Bus service name of this plugin.
     */
    service_name: string
    /**
     * The D-Bus service name of this plugin.
     */
    serviceName: string
    /**
     * The state of the plugin.
     */
    state: VpnServiceState
    /**
     * Whether to watch for D-Bus peer's changes.
     */
    watch_peer: boolean
    /**
     * Whether to watch for D-Bus peer's changes.
     */
    watchPeer: boolean

    // Owm methods of NM-1.0.VpnServicePlugin

    /**
     * Given a VPN secret key name, attempts to find the corresponding flags data
     * item in `data`.  If found, converts the flags data item to
     * #NMSettingSecretFlags and returns it.
     * @param data hash table containing VPN key/value pair data items
     * @param secret_name VPN secret key name for which to retrieve flags for
     */
    static get_secret_flags(data: GLib.HashTable<any, any>, secret_name: string): boolean
    /**
     * Parses key/value pairs from a file descriptor (normally stdin) passed by
     * an applet when the applet calls the authentication dialog of the VPN plugin.
     * @param fd file descriptor to read from, usually stdin (0)
     */
    static read_vpn_details(fd: number): boolean

    // Owm methods of NM-1.0.VpnServicePlugin

    disconnect(): boolean
    failure(reason: VpnPluginFailure): void
    get_connection(): Gio.DBusConnection
    /**
     * Called by VPN plugin implementations to signal to NetworkManager that secrets
     * are required during the connection process.  This signal may be used to
     * request new secrets when the secrets originally provided by NetworkManager
     * are insufficient, or the VPN process indicates that it needs additional
     * information to complete the request.
     * @param message an information message about why secrets are required, if any
     * @param hints VPN specific secret names for required new secrets
     */
    secrets_required(message: string, hints: string): void
    set_config(config: GLib.Variant): void
    set_ip4_config(ip4_config: GLib.Variant): void
    set_ip6_config(ip6_config: GLib.Variant): void
    set_login_banner(banner: string): void
    /**
     * Shutdown the `plugin` and disconnect from D-Bus. After this,
     * the plugin instance is dead and should no longer be used.
     * It ensures to get no more requests from D-Bus. In principle,
     * you don't need to shutdown the plugin, disposing the instance
     * has the same effect. However, this gives a way to deactivate
     * the plugin before giving up the last reference.
     */
    shutdown(): void
}

module WifiP2PPeer {

    // Constructor properties interface

}

class WifiP2PPeer extends Object {

    // Own properties of NM-1.0.WifiP2PPeer

    /**
     * The flags of the P2P peer.
     */
    readonly flags: 80211ApFlags
    /**
     * The hardware address of the P2P peer.
     */
    readonly hw_address: string
    /**
     * The hardware address of the P2P peer.
     */
    readonly hwAddress: string
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * P2P peer was found.  A value of -1 means the peer has never been seen.
     */
    readonly last_seen: number
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * P2P peer was found.  A value of -1 means the peer has never been seen.
     */
    readonly lastSeen: number
    /**
     * The manufacturer of the P2P peer.
     */
    readonly manufacturer: string
    /**
     * The model of the P2P peer.
     */
    readonly model: string
    /**
     * The hardware address of the P2P peer.
     */
    readonly model_number: string
    /**
     * The hardware address of the P2P peer.
     */
    readonly modelNumber: string
    /**
     * The name of the P2P peer.
     */
    readonly name: string
    /**
     * The serial number of the P2P peer.
     */
    readonly serial: string
    /**
     * The current signal strength of the P2P peer.
     */
    readonly strength: number
    /**
     * The WFD information elements of the P2P peer.
     */
    readonly wfd_ies: GLib.Bytes
    /**
     * The WFD information elements of the P2P peer.
     */
    readonly wfdIes: GLib.Bytes

    // Owm methods of NM-1.0.WifiP2PPeer

    /**
     * Validates a given connection against a given Wi-Fi P2P peer to ensure that
     * the connection may be activated with that peer. The connection must match the
     * `peer'`s address and in the future possibly other attributes.
     * @param connection an #NMConnection to validate against @peer
     * @returns %TRUE if the connection may be activated with this Wi-Fi P2P Peer, %FALSE if it cannot be.
     */
    connection_valid(connection: Connection): boolean
    /**
     * Filters a given array of connections for a given #NMWifiP2PPeer object and
     * returns connections which may be activated with the P2P peer.  Any
     * returned connections will match the `peers'`s HW address and in the future
     * possibly other attributes.
     * 
     * To obtain the list of connections that are compatible with this P2P peer,
     * use nm_client_get_connections() and then filter the returned list for a given
     * #NMDevice using nm_device_filter_connections() and finally filter that list
     * with this function.
     * @param connections an array of #NMConnections to filter
     * @returns an array of #NMConnections that could be activated with the given @peer. The array should be freed with g_ptr_array_unref() when it is no longer required.
     */
    filter_connections(connections: Connection[]): Connection[]
    /**
     * Gets the flags of the P2P peer.
     * @returns the flags
     */
    get_flags(): 80211ApFlags
    /**
     * Gets the hardware address of the P2P peer.
     * @returns the hardware address
     */
    get_hw_address(): string
    /**
     * Returns the timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * P2P peer was seen.  A value of -1 means the P2P peer has never been seen.
     * @returns the last seen time in seconds
     */
    get_last_seen(): number
    /**
     * Gets the manufacturer of the P2P peer.
     * @returns the manufacturer
     */
    get_manufacturer(): string
    /**
     * Gets the model of the P2P peer.
     * @returns the model
     */
    get_model(): string
    /**
     * Gets the model number of the P2P peer.
     * @returns the model number
     */
    get_model_number(): string
    /**
     * Gets the name of the P2P peer.
     * @returns the name
     */
    get_name(): string
    /**
     * Gets the serial number of the P2P peer.
     * @returns the serial number
     */
    get_serial(): string
    /**
     * Gets the current signal strength of the P2P peer as a percentage.
     * @returns the signal strength (0 to 100)
     */
    get_strength(): number
    /**
     * Gets the WFD information elements of the P2P peer.
     * @returns the #GBytes containing the WFD IEs, or %NULL.
     */
    get_wfd_ies(): GLib.Bytes
}

module WimaxNsp {

    // Constructor properties interface

}

class WimaxNsp extends Object {

    // Own properties of NM-1.0.WimaxNsp

    /**
     * The name of the WiMAX NSP.
     */
    readonly name: string
    /**
     * The network type of the WiMAX NSP.
     */
    readonly network_type: WimaxNspNetworkType
    /**
     * The network type of the WiMAX NSP.
     */
    readonly networkType: WimaxNspNetworkType
    /**
     * The signal quality of the WiMAX NSP.
     */
    readonly signal_quality: number
    /**
     * The signal quality of the WiMAX NSP.
     */
    readonly signalQuality: number

    // Owm methods of NM-1.0.WimaxNsp

    /**
     * Validates a given connection against a given WiMAX NSP to ensure that the
     * connection may be activated with that NSP.  The connection must match the
     * `nsp'`s network name and other attributes.
     * @param connection an #NMConnection to validate against @nsp
     * @returns %TRUE if the connection may be activated with this WiMAX NSP, %FALSE if it cannot be.
     */
    connection_valid(connection: Connection): boolean
    /**
     * Filters a given array of connections for a given #NMWimaxNsp object and
     * return connections which may be activated with the NSP.  Any returned
     * connections will match the `nsp'`s network name and other attributes.
     * @param connections an array of #NMConnections to filter
     * @returns an array of #NMConnections that could be activated with the given @nsp.  The array should be freed with g_ptr_array_unref() when it is no longer required.
     */
    filter_connections(connections: Connection[]): Connection[]
    /**
     * Gets the name of the wimax NSP
     * @returns the name
     */
    get_name(): string
    /**
     * Gets the network type of the wimax NSP.
     * @returns the network type
     */
    get_network_type(): WimaxNspNetworkType
    /**
     * Gets the WPA signal quality of the wimax NSP.
     * @returns the signal quality
     */
    get_signal_quality(): number
}

class AccessPointClass {
}

class ActiveConnectionClass {
}

class BridgeVlan {

    // Constructors of NM-1.0.BridgeVlan

constructor(vid_start: number, vid_end: number);

static ["new"](vid_start: number, vid_end: number): BridgeVlan;

    // Owm methods of NM-1.0.BridgeVlan

    /**
     * Parses the string representation of the queueing
     * discipline to a %NMBridgeVlan instance.
     * @param str the string representation of a bridge VLAN
     */
    static from_str(str: string): BridgeVlan

    // Owm methods of NM-1.0.BridgeVlan

    /**
     * Compare two bridge VLAN objects.
     * @param b another #NMBridgeVlan
     * @returns zero of the two instances are equivalent or   a non-zero integer otherwise. This defines a total ordering   over the VLANs. Whether a VLAN is sealed or not does not   affect the comparison.
     */
    cmp(b: BridgeVlan): number
    /**
     * Gets the VLAN id range.
     * @returns %TRUE is the VLAN specifies a range, %FALSE if it is a single-id VLAN.
     */
    get_vid_range(): boolean
    /**
     * Returns whether the VLAN is the PVID for the port.
     * @returns %TRUE if the VLAN is the PVID
     */
    is_pvid(): boolean
    is_sealed(): boolean
    /**
     * Returns whether the VLAN is untagged.
     * @returns %TRUE if the VLAN is untagged, %FALSE otherwise
     */
    is_untagged(): boolean
    new_clone(): BridgeVlan
    /**
     * Increases the reference count of the object.
     * @returns the input argument @vlan object. Since 1.42, ref-counting of #NMBridgeVlan is thread-safe.
     */
    ref(): BridgeVlan
    /**
     * Seal the #NMBridgeVlan instance. Afterwards, it is a bug
     * to call all functions that modify the instance (except ref/unref).
     * A sealed instance cannot be unsealed again, but you can create
     * an unsealed copy with nm_bridge_vlan_new_clone().
     */
    seal(): void
    /**
     * Change the value of the PVID property of the VLAN. It
     * is invalid to set the value to %TRUE for non-single-id
     * VLANs.
     * @param value the new value
     */
    set_pvid(value: boolean): void
    /**
     * Change the value of the untagged property of the VLAN.
     * @param value the new value
     */
    set_untagged(value: boolean): void
    /**
     * Convert a %NMBridgeVlan to a string.
     * @returns formatted string or %NULL
     */
    to_str(): string
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero the object will be destroyed.
     * 
     * Since 1.42, ref-counting of #NMBridgeVlan is thread-safe.
     */
    unref(): void
}

class CheckpointClass {
}

class ClientClass {
}

class ConnectionInterface {
}

class Device6LowpanClass {
}

class DeviceAdslClass {
}

class DeviceBondClass {
}

class DeviceBridgeClass {
}

class DeviceBtClass {
}

class DeviceClass {
}

class DeviceDummyClass {
}

class DeviceEthernetClass {
}

class DeviceGenericClass {
}

class DeviceIPTunnelClass {
}

class DeviceInfinibandClass {
}

class DeviceLoopbackClass {
}

class DeviceMacsecClass {
}

class DeviceMacvlanClass {
}

class DeviceModemClass {
}

class DeviceOlpcMeshClass {
}

class DeviceOvsBridgeClass {
}

class DeviceOvsInterfaceClass {
}

class DeviceOvsPortClass {
}

class DevicePppClass {
}

class DeviceTeamClass {
}

class DeviceTunClass {
}

class DeviceVethClass {
}

class DeviceVlanClass {
}

class DeviceVrfClass {
}

class DeviceVxlanClass {
}

class DeviceWifiClass {
}

class DeviceWifiP2PClass {
}

class DeviceWimaxClass {
}

class DeviceWireGuardClass {
}

class DeviceWpanClass {
}

class DhcpConfigClass {
}

class DnsEntry {

    // Owm methods of NM-1.0.DnsEntry

    /**
     * Gets the list of DNS domains.
     * @returns the list of DNS domains
     */
    get_domains(): string[]
    /**
     * Gets the interface on which name servers are contacted.
     * @returns the interface name
     */
    get_interface(): string
    /**
     * Gets the list of name servers for this entry.
     * @returns the list of name servers
     */
    get_nameservers(): string[]
    /**
     * Gets the priority of the entry
     * @returns the priority of the entry
     */
    get_priority(): number
    /**
     * Gets whether the entry refers to VPN name servers.
     * @returns %TRUE if the entry refers to VPN name servers
     */
    get_vpn(): boolean
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class IPAddress {

    // Constructors of NM-1.0.IPAddress

constructor(family: number, addr: string, prefix: number);

static ["new"](family: number, addr: string, prefix: number): IPAddress;

static new_binary(family: number, addr: (any | null), prefix: number): IPAddress;

    // Owm methods of NM-1.0.IPAddress

    /**
     * Note that with `cmp_flags` #NM_IP_ADDRESS_CMP_FLAGS_WITH_ATTRS, there
     * is no total order for comparing GVariant. That means, if the two addresses
     * only differ by their attributes, the sort order is undefined and the return
     * value only indicates equality.
     * @param b the #NMIPAddress to compare @address to.
     * @param cmp_flags the #NMIPAddressCmpFlags that indicate what to compare.
     * @returns 0 if the two objects have the same values (according to their flags)   or a integer indicating the compare order.
     */
    cmp_full(b: IPAddress, cmp_flags: IPAddressCmpFlags): number
    /**
     * Creates a copy of `address`
     * @returns a copy of @address This API was part of public headers before 1.32.0 but was erroneously not exported in the ABI. It is thus only usable since 1.32.0.
     */
    dup(): IPAddress
    /**
     * Determines if two #NMIPAddress objects contain the same address and prefix
     * (attributes are not compared).
     * @param other the #NMIPAddress to compare @address to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: IPAddress): boolean
    /**
     * Gets the IP address property of this address object.
     * @returns the IP address
     */
    get_address(): string
    /**
     * Gets the value of the attribute with name `name` on `address`
     * @param name the name of an address attribute
     * @returns the value of the attribute with name @name on   @address, or %NULL if @address has no such attribute.
     */
    get_attribute(name: string): GLib.Variant
    /**
     * Gets an array of attribute names defined on `address`.
     * @returns a %NULL-terminated array of attribute names,
     */
    get_attribute_names(): string[]
    /**
     * Gets the IP address family (eg, AF_INET) property of this address
     * object.
     * @returns the IP address family
     */
    get_family(): number
    /**
     * Gets the IP address prefix (ie "24" or "30" etc) property of this address
     * object.
     * @returns the IP address prefix
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IP address property of this address object.
     * 
     * `addr` must be a valid address of `address'`s family. If you aren't sure you
     * have a valid address, use nm_utils_ipaddr_valid() to check it.
     * @param addr the IP address, as a string
     */
    set_address(addr: string): void
    /**
     * Sets or clears the named attribute on `address` to the given value.
     * @param name the name of an address attribute
     * @param value the value
     */
    set_attribute(name: string, value?: (GLib.Variant | null)): void
    /**
     * Sets the IP address prefix property of this address object.
     * @param prefix the IP address prefix
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class IPConfigClass {
}

class IPRoute {

    // Constructors of NM-1.0.IPRoute

constructor(family: number, dest: string, prefix: number, next_hop: (string | null), metric: number);

static ["new"](family: number, dest: string, prefix: number, next_hop: (string | null), metric: number): IPRoute;

static new_binary(family: number, dest: (any | null), prefix: number, next_hop: (any | null), metric: number): IPRoute;

    // Owm methods of NM-1.0.IPRoute

    /**
     * Validates a route attribute, i.e. checks that the attribute is a known one
     * and the value is of the correct type and well-formed.
     * @param name the attribute name
     * @param value the attribute value
     * @param family IP address family of the route
     */
    static attribute_validate(name: string, value: GLib.Variant, family: number): boolean
    static get_variant_attribute_spec(): VariantAttributeSpec

    // Owm methods of NM-1.0.IPRoute

    /**
     * Creates a copy of `route`
     * @returns a copy of @route This API was part of public headers before 1.32.0 but was erroneously not exported in the ABI. It is thus only usable since 1.32.0.
     */
    dup(): IPRoute
    /**
     * Determines if two #NMIPRoute objects contain the same destination, prefix,
     * next hop, and metric. (Attributes are not compared.)
     * @param other the #NMIPRoute to compare @route to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: IPRoute): boolean
    /**
     * Determines if two #NMIPRoute objects contain the same destination, prefix,
     * next hop, and metric.
     * @param other the #NMIPRoute to compare @route to.
     * @param cmp_flags tune how to compare attributes. Currently, only   NM_IP_ROUTE_EQUAL_CMP_FLAGS_NONE (0) and NM_IP_ROUTE_EQUAL_CMP_FLAGS_WITH_ATTRS (1)   is supported.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal_full(other: IPRoute, cmp_flags: number): boolean
    /**
     * Gets the value of the attribute with name `name` on `route`
     * @param name the name of an route attribute
     * @returns the value of the attribute with name @name on   @route, or %NULL if @route has no such attribute.
     */
    get_attribute(name: string): GLib.Variant
    /**
     * Gets an array of attribute names defined on `route`.
     * @returns a %NULL-terminated array of attribute names
     */
    get_attribute_names(): string[]
    /**
     * Gets the IP destination address property of this route object.
     * @returns the IP address of the route's destination
     */
    get_dest(): string
    /**
     * Gets the IP address family (eg, AF_INET) property of this route
     * object.
     * @returns the IP address family
     */
    get_family(): number
    /**
     * Gets the route metric property of this route object; lower values
     * indicate "better" or more preferred routes; -1 indicates "default"
     * (meaning NetworkManager will set it appropriately).
     * @returns the route metric
     */
    get_metric(): number
    /**
     * Gets the IP address of the next hop of this route; this will be %NULL if the
     * route has no next hop.
     * @returns the IP address of the next hop, or %NULL if this is a device route.
     */
    get_next_hop(): string
    /**
     * Gets the IP prefix (ie "24" or "30" etc) of this route.
     * @returns the IP prefix
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the named attribute on `route` to the given value.
     * @param name the name of a route attribute
     * @param value the value
     */
    set_attribute(name: string, value?: (GLib.Variant | null)): void
    /**
     * Sets the destination property of this route object.
     * 
     * `dest` must be a valid address of `route'`s family. If you aren't sure you
     * have a valid address, use nm_inet_is_valid() to check it.
     * @param dest the route's destination, as a string
     */
    set_dest(dest: string): void
    /**
     * Sets the metric property of this route object.
     * @param metric the route metric (or -1 for "default")
     */
    set_metric(metric: number): void
    /**
     * Sets the next-hop property of this route object.
     * 
     * `next_hop` (if non-%NULL) must be a valid address of `route'`s family. If you
     * aren't sure you have a valid address, use nm_utils_ipaddr_valid() to check
     * it.
     * @param next_hop the route's next hop, as a string
     */
    set_next_hop(next_hop?: (string | null)): void
    /**
     * Sets the prefix property of this route object.
     * @param prefix the route prefix
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class IPRoutingRule {

    // Constructors of NM-1.0.IPRoutingRule

constructor(addr_family: number);

static ["new"](addr_family: number): IPRoutingRule;

    // Owm methods of NM-1.0.IPRoutingRule

    static from_string(str: string, to_string_flags: IPRoutingRuleAsStringFlags, extra_args?: (GLib.HashTable<any, any> | null)): IPRoutingRule

    // Owm methods of NM-1.0.IPRoutingRule

    cmp(other?: (IPRoutingRule | null)): number
    get_action(): number
    get_addr_family(): number
    get_destination_port_end(): number
    get_destination_port_start(): number
    get_from(): string
    get_from_len(): number
    get_fwmark(): number
    get_fwmask(): number
    get_iifname(): string
    get_invert(): boolean
    get_ipproto(): number
    get_oifname(): string
    get_priority(): number
    get_source_port_end(): number
    get_source_port_start(): number
    get_suppress_prefixlength(): number
    get_table(): number
    get_to(): string
    get_to_len(): number
    get_tos(): number
    get_uid_range(): boolean
    is_sealed(): boolean
    /**
     * Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
     * @returns a newly created rule instance with   the same settings as @rule. Note that the instance will   always be unsealed.
     */
    new_clone(): IPRoutingRule
    /**
     * Increases the reference count of the instance.
     * @returns the @self argument with incremented  reference count. Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
     */
    ref(): IPRoutingRule
    /**
     * Seals the routing rule. Afterwards, the instance can no longer be
     * modified, and it is a bug to call any of the accessors that would
     * modify the rule. If `self` was already sealed, this has no effect.
     */
    seal(): void
    /**
     * Note that currently only certain actions are allowed. nm_ip_routing_rule_validate()
     * will reject unsupported actions as invalid.
     * @param action the action to set
     */
    set_action(action: number): void
    set_destination_port(start: number, end: number): void
    /**
     * Setting invalid values is accepted, but will later fail
     * during nm_ip_routing_rule_validate().
     * @param from the from/src address to set.   The address family must match.
     * @param len the corresponding prefix length of the address.
     */
    set_from(from: (string | null), len: number): void
    set_fwmark(fwmark: number, fwmask: number): void
    /**
     * The name supports C backslash escaping for non-UTF-8 characters.
     * Note that nm_ip_routing_rule_from_string() too uses backslash
     * escaping when tokenizing the words by whitespace. So, in string
     * representation you'd get double backslashes.
     * @param iifname the iifname to set or %NULL to unset.
     */
    set_iifname(iifname?: (string | null)): void
    set_invert(invert: boolean): void
    set_ipproto(ipproto: number): void
    /**
     * The name supports C backslash escaping for non-UTF-8 characters.
     * Note that nm_ip_routing_rule_from_string() too uses backslash
     * escaping when tokenizing the words by whitespace. So, in string
     * representation you'd get double backslashes.
     * @param oifname the oifname to set or %NULL to unset.
     */
    set_oifname(oifname?: (string | null)): void
    /**
     * A valid priority ranges from 0 to %G_MAXUINT32. "-1" is also allowed
     * to reset the priority. It is a bug calling this function with any
     * other value.
     * @param priority the priority to set
     */
    set_priority(priority: number): void
    set_source_port(start: number, end: number): void
    set_suppress_prefixlength(suppress_prefixlength: number): void
    set_table(table: number): void
    /**
     * Setting invalid values is accepted, but will later fail
     * during nm_ip_routing_rule_validate().
     * @param to the to/dst address to set.   The address family must match.
     * @param len the corresponding prefix length of the address.   If @to is %NULL, this valid is ignored.
     */
    set_to(to: (string | null), len: number): void
    set_tos(tos: number): void
    /**
     * For a valid range, start must be less or equal to end.
     * If set to an invalid range, the range gets unset.
     * 
     * This API was wrongly introduced in the header files for 1.32, but the
     * symbols were not exported. The API only works since 1.34 and newer.
     * @param uid_range_start the uid_range start to set.
     * @param uid_range_end the uid_range start to set.
     */
    set_uid_range(uid_range_start: number, uid_range_end: number): void
    to_string(to_string_flags: IPRoutingRuleAsStringFlags, extra_args?: (GLib.HashTable<any, any> | null)): string
    /**
     * Decreases the reference count of the instance and destroys
     * the instance if the reference count reaches zero.
     * 
     * Since 1.42, ref-counting of #NMIPRoutingRule is thread-safe.
     */
    unref(): void
    validate(): boolean
}

/**
 * Opaque type with parameters for the callback. The actual content
 * depends on the %NMKeyfileHandlerType.
 */
class KeyfileHandlerData {

    // Owm methods of NM-1.0.KeyfileHandlerData

    /**
     * Set the error for the handler. This lets the operation fail
     * with the provided error. You may only set the error once.
     * 
     * `src` must be non-%NULL.
     * 
     * Note that `src` is no longer valid after this call. If you want
     * to keep using the same GError*, you need to set it to %NULL
     * after calling this function on it.
     * @param src error to move into the return location
     */
    fail_with_error(src: GLib.Error): void
    /**
     * Get context information of the current event. This function can be called
     * on all events, but the context information may be unset.
     */
    get_context(): void
    warn_get(): void
}

/**
 * Supported attributes are:
 * 
 * - #NM_LLDP_ATTR_CHASSIS_ID_TYPE (type: 'u')
 * - #NM_LLDP_ATTR_CHASSIS_ID (type: 's')
 * - #NM_LLDP_ATTR_DESTINATION (type: 's')
 * - #NM_LLDP_ATTR_IEEE_802_1_PPVID (type: 'u'). This attribute only reports the first PPVID
 *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_PPVIDS which reports
 *   all the PPVID.
 * - #NM_LLDP_ATTR_IEEE_802_1_PPVID_FLAGS (type: 'u'). This attribute only reports the first PPVID
 *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_PPVIDS which reports
 *   all the PPVID.
 * - #NM_LLDP_ATTR_IEEE_802_1_PPVIDS (type: 'aa{sv}')
 * 
 *   An array of dictionaries where each element has keys:
 *   - flags (type: 'u')
 *   - ppvid (type: 'u')
 * - #NM_LLDP_ATTR_IEEE_802_1_PVID (type: 'u')
 * - #NM_LLDP_ATTR_IEEE_802_1_VID (type: 'u'). This attribute only reports the first VLAN
 *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_VLANS which reports
 *   all the VLANs.
 * - #NM_LLDP_ATTR_IEEE_802_1_VLAN_NAME (type: 's'). This attribute only reports the first VLAN
 *   and therefore it is deprecated in favor of NM_LLDP_ATTR_IEEE_802_1_VLANS which reports
 *   all the VLANs.
 * - #NM_LLDP_ATTR_IEEE_802_1_VLANS (type: 'aa{sv}')
 * 
 *   An array of dictionaries where each element has keys:
 *   - name (type: 's')
 *   - vid (type: 'u')
 * - #NM_LLDP_ATTR_IEEE_802_3_MAC_PHY_CONF (type: 'a{sv}')
 * 
 *   Dictionary where each element has keys:
 *   - autoneg (type: 'u')
 *   - operational-mau-type (type: 'u')
 *   - pmd-autoneg-cap (type: 'u')
 * - #NM_LLDP_ATTR_IEEE_802_3_MAX_FRAME_SIZE (type: 'u')
 * - #NM_LLDP_ATTR_IEEE_802_3_POWER_VIA_MDI (type: 'a{sv}')
 * 
 *   Dictionary where each element has keys:
 *   - mdi-power-support (type: 'u')
 *   - power-class (type: 'u')
 *   - pse-power-pair (type: 'u')
 * - #NM_LLDP_ATTR_MANAGEMENT_ADDRESSES (type: 'aa{sv}')
 * 
 *   An array of dictionaries where each element has keys:
 *   - address (type: 'ay')
 *   - address-subtype (type: 'u')
 *   - interface-number (type: 'u')
 *   - interface-number-subtype (type: 'u')
 *   - object-id (type: 'ay')
 * - #NM_LLDP_ATTR_PORT_DESCRIPTION (type: 's')
 * - #NM_LLDP_ATTR_PORT_ID_TYPE (type: 'u')
 * - #NM_LLDP_ATTR_PORT_ID (type: 's')
 * - #NM_LLDP_ATTR_RAW (type: 'ay')
 * - #NM_LLDP_ATTR_SYSTEM_CAPABILITIES (type: 'u')
 * - #NM_LLDP_ATTR_SYSTEM_DESCRIPTION (type: 's')
 * - #NM_LLDP_ATTR_SYSTEM_NAME (type: 's')
 */
class LldpNeighbor {

    // Constructors of NM-1.0.LldpNeighbor


    constructor(properties?: Partial<{
      
    }>);

static ["new"](): LldpNeighbor;

    // Owm methods of NM-1.0.LldpNeighbor

    /**
     * Gets an array of attribute names available for `neighbor`.
     * @returns a %NULL-terminated array of attribute names.
     */
    get_attr_names(): string[]
    /**
     * Gets the string value of attribute with name `name` on `neighbor`
     * @param name the attribute name
     * @returns %TRUE if a string attribute with name @name was found, %FALSE otherwise
     */
    get_attr_string_value(name: string): boolean
    /**
     * Get the type of an attribute.
     * @param name the attribute name
     * @returns the #GVariantType of the attribute with name @name
     */
    get_attr_type(name: string): GLib.VariantType
    /**
     * Gets the uint32 value of attribute with name `name` on `neighbor`
     * @param name the attribute name
     * @returns %TRUE if a uint32 attribute with name @name was found, %FALSE otherwise
     */
    get_attr_uint_value(name: string): boolean
    /**
     * Gets the value (as a GVariant) of attribute with name `name` on `neighbor`
     * @param name the attribute name
     * @returns the value or %NULL if the attribute with @name was not found.
     */
    get_attr_value(name: string): GLib.Variant
    /**
     * Increases the reference count of the object.
     * 
     * Since 1.32, ref-counting of #NMLldpNeighbor is thread-safe.
     */
    ref(): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     * 
     * Since 1.32, ref-counting of #NMLldpNeighbor is thread-safe.
     */
    unref(): void
}

class ObjectClass {
}

class Range {

    // Constructors of NM-1.0.Range

constructor(start: number, end: number);

static ["new"](start: number, end: number): Range;

    // Owm methods of NM-1.0.Range

    /**
     * Parses the string representation of the range to create a %NMRange
     * instance.
     * @param str the string representation of a range
     */
    static from_str(str: string): Range

    // Owm methods of NM-1.0.Range

    /**
     * Compare two ranges.
     * @param b another #NMRange
     * @returns zero if the two instances are equivalent or   a non-zero integer otherwise. This defines a total ordering   over the ranges.
     */
    cmp(b: Range): number
    /**
     * Gets the start and end values for the range.
     * @returns %TRUE if the range contains more than one element, %FALSE otherwise.
     */
    get_range(): boolean
    /**
     * Increases the reference count of the object.
     * This is thread-safe.
     * @returns the input argument @range object.
     */
    ref(): Range
    /**
     * Convert a %NMRange to a string.
     * @returns a string representing the range.
     */
    to_str(): string
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero the object will be destroyed.
     * This is thread-safe.
     */
    unref(): void
}

class RemoteConnectionClass {
}

class SecretAgentOldClass {
}

class Setting6LowpanClass {
}

class Setting8021xClass {
}

class SettingAdslClass {
}

class SettingBluetoothClass {
}

class SettingBondClass {
}

class SettingBondPortClass {
}

class SettingBridgeClass {
}

class SettingBridgePortClass {
}

class SettingCdmaClass {
}

class SettingClass {
}

class SettingConnectionClass {
}

class SettingDcbClass {
}

class SettingDummyClass {
}

class SettingEthtoolClass {
}

class SettingGenericClass {
}

class SettingGsmClass {
}

class SettingHostnameClass {
}

class SettingIP4ConfigClass {
}

class SettingIP6ConfigClass {
}

class SettingIPConfigClass {
}

class SettingIPTunnelClass {
}

class SettingInfinibandClass {
}

class SettingLinkClass {
}

class SettingLoopbackClass {
}

class SettingMacsecClass {
}

class SettingMacvlanClass {
}

class SettingMatchClass {
}

class SettingOlpcMeshClass {
}

class SettingOvsBridgeClass {
}

class SettingOvsDpdkClass {
}

class SettingOvsExternalIDsClass {
}

class SettingOvsInterfaceClass {
}

class SettingOvsOtherConfigClass {
}

class SettingOvsPatchClass {
}

class SettingOvsPortClass {
}

class SettingPppClass {
}

class SettingPppoeClass {
}

class SettingProxyClass {
}

class SettingSerialClass {
}

class SettingSriovClass {
}

class SettingTCConfigClass {
}

class SettingTeamClass {
}

class SettingTeamPortClass {
}

class SettingTunClass {
}

class SettingUserClass {
}

class SettingVethClass {
}

class SettingVlanClass {
}

class SettingVpnClass {
}

class SettingVrfClass {
}

class SettingVxlanClass {
}

class SettingWifiP2PClass {
}

class SettingWimaxClass {
}

class SettingWireGuardClass {
}

class SettingWiredClass {
}

class SettingWirelessClass {
}

class SettingWirelessSecurityClass {
}

class SettingWpanClass {
}

class SimpleConnectionClass {
}

class SriovVF {

    // Constructors of NM-1.0.SriovVF

constructor(index: number);

static ["new"](index: number): SriovVF;

    // Owm methods of NM-1.0.SriovVF

    /**
     * Validates a VF attribute, i.e. checks that the attribute is a known one,
     * the value is of the correct type and well-formed.
     * @param name the attribute name
     * @param value the attribute value
     */
    static attribute_validate(name: string, value: GLib.Variant): boolean

    // Owm methods of NM-1.0.SriovVF

    /**
     * Adds a VLAN to the VF. Currently kernel only supports one VLAN per VF.
     * @param vlan_id the VLAN id
     * @returns %TRUE if the VLAN was added; %FALSE if it already existed
     */
    add_vlan(vlan_id: number): boolean
    /**
     * Creates a copy of `vf`.
     * @returns a copy of @vf
     */
    dup(): SriovVF
    /**
     * Determines if two #NMSriovVF objects have the same index,
     * attributes and VLANs.
     * @param other the #NMSriovVF to compare @vf to.
     * @returns %TRUE if the objects contain the same values, %FALSE    if they do not.
     */
    equal(other: SriovVF): boolean
    /**
     * Gets the value of the attribute with name `name` on `vf`
     * @param name the name of a VF attribute
     * @returns the value of the attribute with name @name on   @vf, or %NULL if @vf has no such attribute.
     */
    get_attribute(name: string): GLib.Variant
    /**
     * Gets an array of attribute names defined on `vf`.
     * @returns a %NULL-terminated array of attribute names
     */
    get_attribute_names(): string[]
    /**
     * Gets the index property of this VF object.
     * @returns the VF index
     */
    get_index(): number
    /**
     * Returns the VLANs currently configured on the VF. Currently kernel only
     * supports one VLAN per VF.
     * @returns a list of VLAN ids configured on the VF.
     */
    get_vlan_ids(): number[]
    /**
     * Returns the configured protocol for the given VLAN.
     * @param vlan_id the VLAN id
     * @returns the configured protocol
     */
    get_vlan_protocol(vlan_id: number): SriovVFVlanProtocol
    /**
     * Returns the QoS value for the given VLAN.
     * @param vlan_id the VLAN id
     * @returns the QoS value
     */
    get_vlan_qos(vlan_id: number): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Removes a VLAN from a VF.
     * @param vlan_id the VLAN id
     * @returns %TRUE if the VLAN was removed, %FALSE if the VLAN @vlan_id     did not belong to the VF.
     */
    remove_vlan(vlan_id: number): boolean
    /**
     * Sets the named attribute on `vf` to the given value.
     * @param name the name of a route attribute
     * @param value the value
     */
    set_attribute(name: string, value?: (GLib.Variant | null)): void
    /**
     * Sets the protocol for the given VLAN.
     * @param vlan_id the VLAN id
     * @param protocol the VLAN protocol
     */
    set_vlan_protocol(vlan_id: number, protocol: SriovVFVlanProtocol): void
    /**
     * Sets a QoS value for the given VLAN.
     * @param vlan_id the VLAN id
     * @param qos a QoS (priority) value
     */
    set_vlan_qos(vlan_id: number, qos: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class TCAction {

    // Constructors of NM-1.0.TCAction

constructor(kind: string);

static ["new"](kind: string): TCAction;

    // Owm methods of NM-1.0.TCAction

    /**
     * Creates a copy of `action`
     * @returns a copy of @action
     */
    dup(): TCAction
    /**
     * Determines if two #NMTCAction objects contain the same kind, family,
     * handle, parent and info.
     * @param other the #NMTCAction to compare @action to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: TCAction): boolean
    /**
     * Gets the value of the attribute with name `name` on `action`
     * @param name the name of an action attribute
     * @returns the value of the attribute with name @name on   @action, or %NULL if @action has no such attribute.
     */
    get_attribute(name: string): GLib.Variant
    /**
     * Gets an array of attribute names defined on `action`.
     * @returns a %NULL-terminated array of attribute names,
     */
    get_attribute_names(): string[]
    get_kind(): string
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets or clears the named attribute on `action` to the given value.
     * @param name the name of an action attribute
     * @param value the value
     */
    set_attribute(name: string, value?: (GLib.Variant | null)): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class TCQdisc {

    // Constructors of NM-1.0.TCQdisc

constructor(kind: string, parent: number);

static ["new"](kind: string, parent: number): TCQdisc;

    // Owm methods of NM-1.0.TCQdisc

    /**
     * Creates a copy of `qdisc`
     * @returns a copy of @qdisc
     */
    dup(): TCQdisc
    /**
     * Determines if two #NMTCQdisc objects contain the same kind, * handle
     * and parent.
     * @param other the #NMTCQdisc to compare @qdisc to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: TCQdisc): boolean
    /**
     * Gets the value of the attribute with name `name` on `qdisc`
     * @param name the name of an qdisc attribute
     * @returns the value of the attribute with name @name on   @qdisc, or %NULL if @qdisc has no such attribute.
     */
    get_attribute(name: string): GLib.Variant
    /**
     * Gets an array of attribute names defined on `qdisc`.
     * @returns a %NULL-terminated array of attribute names   or %NULL if no attributes are set.
     */
    get_attribute_names(): string[]
    get_handle(): number
    get_kind(): string
    get_parent(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets or clears the named attribute on `qdisc` to the given value.
     * @param name the name of an qdisc attribute
     * @param value the value
     */
    set_attribute(name: string, value?: (GLib.Variant | null)): void
    /**
     * Sets the queueing discipline handle.
     * @param handle the queueing discipline handle
     */
    set_handle(handle: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class TCTfilter {

    // Constructors of NM-1.0.TCTfilter

constructor(kind: string, parent: number);

static ["new"](kind: string, parent: number): TCTfilter;

    // Owm methods of NM-1.0.TCTfilter

    /**
     * Creates a copy of `tfilter`
     * @returns a copy of @tfilter
     */
    dup(): TCTfilter
    /**
     * Determines if two #NMTCTfilter objects contain the same kind, family,
     * handle, parent and info.
     * @param other the #NMTCTfilter to compare @tfilter to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: TCTfilter): boolean
    get_action(): TCAction
    get_handle(): number
    get_kind(): string
    get_parent(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the action associated with a traffic filter.
     * @param action the action object
     */
    set_action(action: TCAction): void
    /**
     * Sets the queueing discipline handle.
     * @param handle the queueing discipline handle
     */
    set_handle(handle: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

class TeamLinkWatcher {

    // Constructors of NM-1.0.TeamLinkWatcher

constructor(init_wait: number, interval: number, missed_max: number, target_host: string, source_host: string, flags: TeamLinkWatcherArpPingFlags);

static new_arp_ping(init_wait: number, interval: number, missed_max: number, target_host: string, source_host: string, flags: TeamLinkWatcherArpPingFlags): TeamLinkWatcher;

static new_arp_ping2(init_wait: number, interval: number, missed_max: number, vlanid: number, target_host: string, source_host: string, flags: TeamLinkWatcherArpPingFlags): TeamLinkWatcher;

static new_ethtool(delay_up: number, delay_down: number): TeamLinkWatcher;

static new_nsna_ping(init_wait: number, interval: number, missed_max: number, target_host: string): TeamLinkWatcher;

    // Owm methods of NM-1.0.TeamLinkWatcher

    /**
     * Creates a copy of `watcher`
     * @returns a copy of @watcher
     */
    dup(): TeamLinkWatcher
    /**
     * Determines if two #NMTeamLinkWatcher objects contain the same values
     * in all the properties.
     * @param other the #NMTeamLinkWatcher to compare @watcher to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    equal(other: TeamLinkWatcher): boolean
    /**
     * Gets the delay_down interval (in milliseconds) that elapses between the link
     * going down and the runner being notified about it.
     */
    get_delay_down(): number
    /**
     * Gets the delay_up interval (in milliseconds) that elapses between the link
     * coming up and the runner being notified about it.
     */
    get_delay_up(): number
    /**
     * Gets the arp ping watcher flags.
     */
    get_flags(): TeamLinkWatcherArpPingFlags
    /**
     * Gets the init_wait interval (in milliseconds) that the team slave should
     * wait before sending the first packet to the target host.
     */
    get_init_wait(): number
    /**
     * Gets the interval (in milliseconds) that the team slave should wait between
     * sending two check packets to the target host.
     */
    get_interval(): number
    /**
     * Gets the number of missed replies after which the link is considered down.
     */
    get_missed_max(): number
    /**
     * Gets the name of the link watcher to be used.
     */
    get_name(): string
    /**
     * Gets the ip address to be used as source for the link probing packets.
     */
    get_source_host(): string
    /**
     * Gets the host name/ip address to be used as destination for the link probing
     * packets.
     */
    get_target_host(): string
    /**
     * Gets the VLAN tag ID to be used to outgoing link probes
     */
    get_vlanid(): number
    /**
     * Increases the reference count of the object.
     * 
     * Since 1.20, ref-counting of #NMTeamLinkWatcher is thread-safe.
     */
    ref(): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     * 
     * Since 1.20, ref-counting of #NMTeamLinkWatcher is thread-safe.
     */
    unref(): void
}

class VariantAttributeSpec {
}

class VpnConnectionClass {
}

/**
 * Interface for editing a specific #NMConnection
 */
class VpnEditorInterface {
}

/**
 * Interface for VPN editor plugins.
 */
class VpnEditorPluginInterface {
}

class VpnEditorPluginVT {
}

class VpnPluginInfoClass {
}

class VpnPluginOldClass {
}

class VpnServicePluginClass {
}

class WifiP2PPeerClass {
}

class WimaxNspClass {
}

/**
 * The settings of one WireGuard peer.
 */
class WireGuardPeer {

    // Constructors of NM-1.0.WireGuardPeer


    constructor(properties?: Partial<{
      
    }>);

static ["new"](): WireGuardPeer;

    // Owm methods of NM-1.0.WireGuardPeer

    /**
     * Appends `allowed_ip` setting to the list. This does not check
     * for duplicates and always appends `allowed_ip` to the end of the
     * list. If `allowed_ip` is valid, it will be normalized and a modified
     * for might be appended. If `allowed_ip` is invalid, it will still be
     * appended, but later verification will fail.
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param allowed_ip the allowed-ip entry to set.
     * @param accept_invalid if %TRUE, also invalid @allowed_ip value   will be appended. Otherwise, the function does nothing   in face of invalid values and returns %FALSE.
     * @returns %TRUE if the value is a valid allowed-ips value, %FALSE otherwise.   Depending on @accept_invalid, also invalid values are added.
     */
    append_allowed_ip(allowed_ip: string, accept_invalid: boolean): boolean
    /**
     * Removes all allowed-ip entries.
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     */
    clear_allowed_ips(): void
    cmp(b: (WireGuardPeer | null), compare_flags: SettingCompareFlags): number
    get_allowed_ip(idx: number, out_is_valid?: (boolean | null)): (string | null)
    get_allowed_ips_len(): number
    get_endpoint(): string
    get_persistent_keepalive(): number
    get_preshared_key(): string
    get_preshared_key_flags(): SettingSecretFlags
    get_public_key(): string
    is_sealed(): boolean
    is_valid(check_non_secrets: boolean, check_secrets: boolean): boolean
    new_clone(with_secrets: boolean): WireGuardPeer
    ref(): WireGuardPeer
    /**
     * Removes the allowed-ip at the given `idx`. This shifts all
     * following entries one index down.
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param idx the index from zero to (allowed-ips-len - 1) to   retrieve. If the index is out of range, %FALSE is returned   and nothing is done.
     * @returns %TRUE if @idx was valid and the allowed-ip was removed.   %FALSE otherwise, and the peer will not be changed.
     */
    remove_allowed_ip(idx: number): boolean
    /**
     * Seal the #NMWireGuardPeer instance. Afterwards, it is a bug
     * to call all functions that modify the instance (except ref/unref).
     * A sealed instance cannot be unsealed again, but you can create
     * an unsealed copy with nm_wireguard_peer_new_clone().
     */
    seal(): void
    /**
     * Sets or clears the endpoint of `self`.
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param endpoint the socket address endpoint to set or %NULL.
     * @param allow_invalid if %TRUE, also invalid values are set.   If %FALSE, the function does nothing for invalid @endpoint   arguments.
     * @returns %TRUE if the endpoint is %NULL or valid. For an   invalid @endpoint argument, %FALSE is returned. Depending   on @allow_invalid, the instance will be modified.
     */
    set_endpoint(endpoint: string, allow_invalid: boolean): boolean
    /**
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param persistent_keepalive the keep-alive value to set.
     */
    set_persistent_keepalive(persistent_keepalive: number): void
    /**
     * Reset the preshared key. Note that if the preshared key is valid, it
     * will be normalized (which may or may not modify the set value).
     * 
     * Note that the preshared-key is a secret and consequently has corresponding
     * preshared-key-flags property. This is so that secrets can be optional
     * and requested on demand from a secret-agent. Also, an invalid  preshared-key
     * may optionally cause nm_wireguard_peer_is_valid() to fail or it may
     * be accepted.
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param preshared_key the new preshared   key or %NULL to clear the preshared key.
     * @param accept_invalid whether to allow setting the key to an invalid   value. If %FALSE, @self is unchanged if the key is invalid   and if %FALSE is returned.
     * @returns %TRUE if the preshared-key is valid, otherwise %FALSE.   %NULL is considered a valid value.   If the key is invalid, it depends on @accept_invalid whether the   previous value was reset.
     */
    set_preshared_key(preshared_key: (string | null), accept_invalid: boolean): boolean
    /**
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param preshared_key_flags the secret flags to set.
     */
    set_preshared_key_flags(preshared_key_flags: SettingSecretFlags): void
    /**
     * Reset the public key. Note that if the public key is valid, it
     * will be normalized (which may or may not modify the set value).
     * 
     * It is a bug trying to modify a sealed #NMWireGuardPeer instance.
     * @param public_key the new public   key or %NULL to clear the public key.
     * @param accept_invalid if %TRUE and @public_key is not %NULL and   invalid, then do not modify the instance.
     * @returns %TRUE if the key was valid or %NULL. Returns   %FALSE for invalid keys. Depending on @accept_invalid   will an invalid key be set or not.
     */
    set_public_key(public_key: (string | null), accept_invalid: boolean): boolean
    /**
     * Drop a reference to `self`. If the last reference is dropped,
     * the instance is freed and all associate data released.
     * 
     * Since 1.42, ref-counting of #NMWireGuardPeer is thread-safe.
     */
    unref(): void
}

interface Connection {

    // Owm methods of NM-1.0.Connection

    /**
     * Adds a #NMSetting to the connection, replacing any previous #NMSetting of the
     * same name which has previously been added to the #NMConnection.  The
     * connection takes ownership of the #NMSetting object and does not increase
     * the setting object's reference count.
     * @param setting the #NMSetting to add to the connection object
     */
    add_setting(setting: Setting): void
    /**
     * Clears and frees any secrets that may be stored in the connection, to avoid
     * keeping secret data in memory when not needed.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not. If %NULL, all secrets are cleared.
     */
    clear_secrets_with_flags(func?: (SettingClearSecretsWithFlagsFn | null)): void
    /**
     * Deletes all of `connection'`s settings.
     */
    clear_settings(): void
    /**
     * Compares two #NMConnection objects for similarity, with comparison behavior
     * modified by a set of flags.  See nm_setting_compare() for a description of
     * each flag's behavior.
     * @param b a second #NMConnection to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
     * @returns %TRUE if the comparison succeeds, %FALSE if it does not
     */
    compare(b: Connection, flags: SettingCompareFlags): boolean
    /**
     * Print the connection (including secrets!) to stdout. For debugging
     * purposes ONLY, should NOT be used for serialization of the setting,
     * or machine-parsed in any way. The output format is not guaranteed to
     * be stable and may change at any time.
     */
    dump(): void
    /**
     * Iterates over the properties of each #NMSetting object in the #NMConnection,
     * calling the supplied user function for each property.
     * @param func user-supplied function called for each setting's property
     */
    for_each_setting_value(func: SettingValueIterFn): void
    /**
     * A shortcut to return the type from the connection's #NMSettingConnection.
     * @returns the type from the connection's 'connection' setting
     */
    get_connection_type(): string
    /**
     * A shortcut to return the ID from the connection's #NMSettingConnection.
     * @returns the ID from the connection's 'connection' setting
     */
    get_id(): string
    /**
     * Returns the interface name as stored in NMSettingConnection:interface_name.
     * If the connection contains no NMSettingConnection, it will return %NULL.
     * 
     * For hardware devices and software devices created outside of NetworkManager,
     * this name is used to match the device. for software devices created by
     * NetworkManager, this is the name of the created interface.
     * @returns Name of the kernel interface or %NULL
     */
    get_interface_name(): string
    /**
     * Returns the connection's D-Bus path.
     * @returns the D-Bus path of the connection, previously set by a call to nm_connection_set_path().
     */
    get_path(): string
    /**
     * Gets the #NMSetting with the given #GType, if one has been previously added
     * to the #NMConnection.
     * @param setting_type the #GType of the setting object to return
     * @returns the #NMSetting, or %NULL if no setting of that type was previously added to the #NMConnection
     */
    get_setting(setting_type: GObject.GType): Setting
    /**
     * A shortcut to return any #NMSetting8021x the connection might contain.
     * @returns an #NMSetting8021x if the connection contains one, otherwise %NULL
     */
    get_setting_802_1x(): Setting8021x
    /**
     * A shortcut to return any #NMSettingAdsl the connection might contain.
     * @returns an #NMSettingAdsl if the connection contains one, otherwise %NULL
     */
    get_setting_adsl(): SettingAdsl
    /**
     * A shortcut to return any #NMSettingBluetooth the connection might contain.
     * @returns an #NMSettingBluetooth if the connection contains one, otherwise %NULL
     */
    get_setting_bluetooth(): SettingBluetooth
    /**
     * A shortcut to return any #NMSettingBond the connection might contain.
     * @returns an #NMSettingBond if the connection contains one, otherwise %NULL
     */
    get_setting_bond(): SettingBond
    /**
     * A shortcut to return any #NMSettingBridge the connection might contain.
     * @returns an #NMSettingBridge if the connection contains one, otherwise %NULL
     */
    get_setting_bridge(): SettingBridge
    /**
     * A shortcut to return any #NMSettingBridgePort the connection might contain.
     * @returns an #NMSettingBridgePort if the connection contains one, otherwise %NULL
     */
    get_setting_bridge_port(): SettingBridgePort
    /**
     * Gets the #NMSetting with the given name, if one has been previously added
     * the #NMConnection.
     * @param name a setting name
     * @returns the #NMSetting, or %NULL if no setting with that name was previously added to the #NMConnection
     */
    get_setting_by_name(name: string): Setting
    /**
     * A shortcut to return any #NMSettingCdma the connection might contain.
     * @returns an #NMSettingCdma if the connection contains one, otherwise %NULL
     */
    get_setting_cdma(): SettingCdma
    /**
     * A shortcut to return any #NMSettingConnection the connection might contain.
     * @returns an #NMSettingConnection if the connection contains one, otherwise %NULL
     */
    get_setting_connection(): SettingConnection
    /**
     * A shortcut to return any #NMSettingDcb the connection might contain.
     * @returns an #NMSettingDcb if the connection contains one, otherwise NULL
     */
    get_setting_dcb(): SettingDcb
    /**
     * A shortcut to return any #NMSettingDummy the connection might contain.
     * @returns an #NMSettingDummy if the connection contains one, otherwise %NULL
     */
    get_setting_dummy(): SettingDummy
    /**
     * A shortcut to return any #NMSettingGeneric the connection might contain.
     * @returns an #NMSettingGeneric if the connection contains one, otherwise NULL
     */
    get_setting_generic(): SettingGeneric
    /**
     * A shortcut to return any #NMSettingGsm the connection might contain.
     * @returns an #NMSettingGsm if the connection contains one, otherwise %NULL
     */
    get_setting_gsm(): SettingGsm
    /**
     * A shortcut to return any #NMSettingInfiniband the connection might contain.
     * @returns an #NMSettingInfiniband if the connection contains one, otherwise %NULL
     */
    get_setting_infiniband(): SettingInfiniband
    /**
     * A shortcut to return any #NMSettingIP4Config the connection might contain.
     * 
     * Note that it returns the value as type #NMSettingIPConfig, since the vast
     * majority of IPv4-setting-related methods are on that type, not
     * #NMSettingIP4Config.
     * @returns an #NMSettingIP4Config if the connection contains one, otherwise %NULL
     */
    get_setting_ip4_config(): SettingIP4Config
    /**
     * A shortcut to return any #NMSettingIP6Config the connection might contain.
     * 
     * Note that it returns the value as type #NMSettingIPConfig, since the vast
     * majority of IPv6-setting-related methods are on that type, not
     * #NMSettingIP6Config.
     * @returns an #NMSettingIP6Config if the connection contains one, otherwise %NULL
     */
    get_setting_ip6_config(): SettingIP6Config
    /**
     * A shortcut to return any #NMSettingIPTunnel the connection might contain.
     * @returns an #NMSettingIPTunnel if the connection contains one, otherwise %NULL
     */
    get_setting_ip_tunnel(): SettingIPTunnel
    /**
     * A shortcut to return any #NMSettingMacsec the connection might contain.
     * @returns an #NMSettingMacsec if the connection contains one, otherwise %NULL
     */
    get_setting_macsec(): SettingMacsec
    /**
     * A shortcut to return any #NMSettingMacvlan the connection might contain.
     * @returns an #NMSettingMacvlan if the connection contains one, otherwise %NULL
     */
    get_setting_macvlan(): SettingMacvlan
    /**
     * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
     * @returns an #NMSettingOlpcMesh if the connection contains one, otherwise %NULL
     */
    get_setting_olpc_mesh(): SettingOlpcMesh
    /**
     * A shortcut to return any #NMSettingOvsBridge the connection might contain.
     * @returns an #NMSettingOvsBridge if the connection contains one, otherwise %NULL
     */
    get_setting_ovs_bridge(): SettingOvsBridge
    /**
     * A shortcut to return any #NMSettingOvsInterface the connection might contain.
     * @returns an #NMSettingOvsInterface if the connection contains one, otherwise %NULL
     */
    get_setting_ovs_interface(): SettingOvsInterface
    /**
     * A shortcut to return any #NMSettingOvsPatch the connection might contain.
     * @returns an #NMSettingOvsPatch if the connection contains one, otherwise %NULL
     */
    get_setting_ovs_patch(): SettingOvsPatch
    /**
     * A shortcut to return any #NMSettingOvsPort the connection might contain.
     * @returns an #NMSettingOvsPort if the connection contains one, otherwise %NULL
     */
    get_setting_ovs_port(): SettingOvsPort
    /**
     * A shortcut to return any #NMSettingPpp the connection might contain.
     * @returns an #NMSettingPpp if the connection contains one, otherwise %NULL
     */
    get_setting_ppp(): SettingPpp
    /**
     * A shortcut to return any #NMSettingPppoe the connection might contain.
     * @returns an #NMSettingPppoe if the connection contains one, otherwise %NULL
     */
    get_setting_pppoe(): SettingPppoe
    /**
     * A shortcut to return any #NMSettingProxy the connection might contain.
     * @returns an #NMSettingProxy if the connection contains one, otherwise %NULL
     */
    get_setting_proxy(): SettingProxy
    /**
     * A shortcut to return any #NMSettingSerial the connection might contain.
     * @returns an #NMSettingSerial if the connection contains one, otherwise %NULL
     */
    get_setting_serial(): SettingSerial
    /**
     * A shortcut to return any #NMSettingTCConfig the connection might contain.
     * @returns an #NMSettingTCConfig if the connection contains one, otherwise %NULL
     */
    get_setting_tc_config(): SettingTCConfig
    /**
     * A shortcut to return any #NMSettingTeam the connection might contain.
     * @returns an #NMSettingTeam if the connection contains one, otherwise %NULL
     */
    get_setting_team(): SettingTeam
    /**
     * A shortcut to return any #NMSettingTeamPort the connection might contain.
     * @returns an #NMSettingTeamPort if the connection contains one, otherwise %NULL
     */
    get_setting_team_port(): SettingTeamPort
    /**
     * A shortcut to return any #NMSettingTun the connection might contain.
     * @returns an #NMSettingTun if the connection contains one, otherwise %NULL
     */
    get_setting_tun(): SettingTun
    /**
     * A shortcut to return any #NMSettingVlan the connection might contain.
     * @returns an #NMSettingVlan if the connection contains one, otherwise %NULL
     */
    get_setting_vlan(): SettingVlan
    /**
     * A shortcut to return any #NMSettingVpn the connection might contain.
     * @returns an #NMSettingVpn if the connection contains one, otherwise %NULL
     */
    get_setting_vpn(): SettingVpn
    /**
     * A shortcut to return any #NMSettingVxlan the connection might contain.
     * @returns an #NMSettingVxlan if the connection contains one, otherwise %NULL
     */
    get_setting_vxlan(): SettingVxlan
    /**
     * A shortcut to return any #NMSettingWimax the connection might contain.
     * @returns an #NMSettingWimax if the connection contains one, otherwise %NULL
     */
    get_setting_wimax(): SettingWimax
    /**
     * A shortcut to return any #NMSettingWired the connection might contain.
     * @returns an #NMSettingWired if the connection contains one, otherwise %NULL
     */
    get_setting_wired(): SettingWired
    /**
     * A shortcut to return any #NMSettingWireless the connection might contain.
     * @returns an #NMSettingWireless if the connection contains one, otherwise %NULL
     */
    get_setting_wireless(): SettingWireless
    /**
     * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
     * @returns an #NMSettingWirelessSecurity if the connection contains one, otherwise %NULL
     */
    get_setting_wireless_security(): SettingWirelessSecurity
    /**
     * Retrieves the settings in `connection`.
     * 
     * The returned array is %NULL-terminated.
     * @returns a   %NULL-terminated array containing every setting of @connection.   If the connection has no settings, %NULL is returned.
     */
    get_settings(): (Setting[] | null)
    /**
     * A shortcut to return the UUID from the connection's #NMSettingConnection.
     * @returns the UUID from the connection's 'connection' setting
     */
    get_uuid(): string
    /**
     * Returns the name that nm_device_disambiguate_names() would
     * return for the virtual device that would be created for `connection`.
     * Eg, "VLAN (eth1.1)".
     * @returns the name of @connection's device,   or %NULL if @connection is not a virtual connection type
     */
    get_virtual_device_description(): string
    /**
     * A convenience function to check if the given `connection` is a particular
     * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
     * property of the connection and matches that against `type`.
     * @param type a setting name to check the connection's type against (like %NM_SETTING_WIRELESS_SETTING_NAME or %NM_SETTING_WIRED_SETTING_NAME)
     * @returns %TRUE if the connection is of the given @type, %FALSE if not
     */
    is_type(type: string): boolean
    /**
     * Checks if `connection` refers to a virtual device (and thus can potentially be
     * activated even if the device it refers to doesn't exist).
     * @returns whether @connection refers to a virtual device
     */
    is_virtual(): boolean
    /**
     * Returns the name of the first setting object in the connection which would
     * need secrets to make a successful connection.  The returned hints are only
     * intended as a guide to what secrets may be required, because in some
     * circumstances, there is no way to conclusively determine exactly which
     * secrets are needed.
     * @returns the setting name of the #NMSetting object which has   invalid or missing secrets
     */
    need_secrets(): (string | null)
    /**
     * Does some basic normalization and fixup of well known inconsistencies
     * and deprecated fields. If the connection was modified in any way,
     * the output parameter `modified` is set %TRUE.
     * 
     * Finally the connection will be verified and %TRUE returns if the connection
     * is valid. As this function only performs some specific normalization steps
     * it cannot repair all connections. If the connection has errors that
     * cannot be normalized, the connection will not be modified.
     * @param parameters a #GHashTable with normalization parameters to allow customization of the normalization by providing specific arguments. Unknown arguments will be ignored and the default will be used. The keys must be strings compared with g_str_equal() function. The values are opaque and depend on the parameter name.
     * @returns %TRUE if the connection is valid, %FALSE if it is not
     */
    normalize(parameters: (GLib.HashTable<string, any> | null)): boolean
    /**
     * Removes the #NMSetting with the given #GType from the #NMConnection.  This
     * operation dereferences the #NMSetting object.
     * @param setting_type the #GType of the setting object to remove
     */
    remove_setting(setting_type: GObject.GType): void
    /**
     * Replaces `connection'`s settings with `new_settings` (which must be
     * syntactically valid, and describe a known type of connection, but does not
     * need to result in a connection that passes nm_connection_verify()).
     * @param new_settings a #GVariant of type %NM_VARIANT_TYPE_CONNECTION, with the new settings
     * @returns %TRUE if connection was updated, %FALSE if @new_settings could not   be deserialized (in which case @connection will be unchanged).
     */
    replace_settings(new_settings: GLib.Variant): boolean
    /**
     * Deep-copies the settings of `new_connection` and replaces the settings of `connection`
     * with the copied settings.
     * @param new_connection a #NMConnection to replace the settings of @connection with
     */
    replace_settings_from_connection(new_connection: Connection): void
    /**
     * Sets the D-Bus path of the connection.  This property is not serialized, and
     * is only for the reference of the caller.  Sets the #NMConnection:path
     * property.
     * @param path the D-Bus path of the connection as given by the settings service which provides the connection
     */
    set_path(path: string): void
    /**
     * Converts the #NMConnection into a #GVariant of type
     * %NM_VARIANT_TYPE_CONNECTION describing the connection, suitable for
     * marshalling over D-Bus or otherwise serializing.
     * @param flags serialization flags, e.g. %NM_CONNECTION_SERIALIZE_ALL
     * @returns a new floating #GVariant describing the connection, its settings, and each setting's properties.
     */
    to_dbus(flags: ConnectionSerializationFlags): GLib.Variant
    /**
     * Update the specified setting's secrets, given a dictionary of secrets
     * intended for that setting (deserialized from D-Bus for example).  Will also
     * extract the given setting's secrets hash if given a connection dictionary.
     * If `setting_name` is %NULL, expects a fully serialized #NMConnection as
     * returned by nm_connection_to_dbus() and will update all secrets from all
     * settings contained in `secrets`.
     * @param setting_name the setting object name to which the secrets apply
     * @param secrets a #GVariant of secrets, of type %NM_VARIANT_TYPE_CONNECTION   or %NM_VARIANT_TYPE_SETTING
     * @returns %TRUE if the secrets were successfully updated, %FALSE if the update failed (tried to update secrets for a setting that doesn't exist, etc)
     */
    update_secrets(setting_name: string, secrets: GLib.Variant): boolean
    /**
     * Validates the connection and all its settings.  Each setting's properties
     * have allowed values, and some values are dependent on other values.  For
     * example, if a Wi-Fi connection is security enabled, the #NMSettingWireless
     * setting object's 'security' property must contain the setting name of the
     * #NMSettingWirelessSecurity object, which must also be present in the
     * connection for the connection to be valid.  As another example, the
     * #NMSettingWired object's 'mac-address' property must be a validly formatted
     * MAC address.  The returned #GError contains information about which
     * setting and which property failed validation, and how it failed validation.
     * @returns %TRUE if the connection is valid, %FALSE if it is not
     */
    verify(): boolean
    /**
     * Verifies the secrets in the connection.
     * @returns %TRUE if the secrets are valid, %FALSE if they are not
     */
    verify_secrets(): boolean

    // Own virtual methods of NM-1.0.Connection

    vfunc_changed(): void
    vfunc_secrets_cleared(): void
    vfunc_secrets_updated(setting: string): void
}

interface VpnEditor {

    // Owm methods of NM-1.0.VpnEditor

    get_widget<T = GObject.Object>(): T
    update_connection(connection: Connection): boolean

    // Own virtual methods of NM-1.0.VpnEditor

    vfunc_changed(): void
    vfunc_get_widget<T = GObject.Object>(): T
    vfunc_update_connection(connection: Connection): boolean
}

interface VpnEditorPlugin {

    // Own properties of NM-1.0.VpnEditorPlugin

    /**
     * Longer description of the VPN plugin.
     */
    readonly description: string
    /**
     * Short display name of the VPN plugin.
     */
    readonly name: string
    /**
     * D-Bus service name of the plugin's VPN service.
     */
    readonly service: string

    // Owm methods of NM-1.0.VpnEditorPlugin

    export(path: string, connection: Connection): boolean
    get_capabilities(): VpnEditorPluginCapability
    get_editor(connection: Connection): VpnEditor
    get_plugin_info(): VpnPluginInfo
    get_suggested_filename(connection: Connection): string
    /**
     * Returns an opaque VT function table for the plugin to extend
     * functionality. The actual meaning of NMVpnEditorPluginVT is not
     * defined in public API of libnm, instead it must be agreed by
     * both the plugin and the caller. See the header-only file
     * 'nm-vpn-editor-plugin-call.h' which defines the meaning.
     * @param vt_size the size of the buffer. Can be 0 to only query the   size of plugin's VT.
     * @returns the actual size of the @plugin's virtual function table.
     */
    get_vt(vt_size: number): number
    import(path: string): Connection
    /**
     * Set or clear the plugin-info instance.
     * This takes a weak reference on `plugin_info,` to avoid circular
     * reference as the plugin-info might also reference the editor-plugin.
     * @param plugin_info a #NMVpnPluginInfo instance or %NULL
     */
    set_plugin_info(plugin_info?: (VpnPluginInfo | null)): void

    // Own virtual methods of NM-1.0.VpnEditorPlugin

    vfunc_export_to_file(path: string, connection: Connection): boolean
    vfunc_get_capabilities(): VpnEditorPluginCapability
    vfunc_get_editor(connection: Connection): VpnEditor
    vfunc_get_suggested_filename(connection: Connection): string
    vfunc_get_vt(out_vt_size: number): VpnEditorPluginVT
    vfunc_notify_plugin_info_set(plugin_info: VpnPluginInfo): void
}

/**
 * Name of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default NM;
// END