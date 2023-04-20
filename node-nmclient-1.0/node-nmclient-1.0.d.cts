
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * NMClient-1.0
 */

import type NetworkManager from '@girs/networkmanager-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type DBusGLib from '@girs/dbusglib-1.0';
import type Gio from '@girs/gio-2.0';

/**
 * Describes errors that may result from operations involving a #NMClient.
 */
export enum ClientError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * an operation that requires NetworkManager
     *   failed because NetworkManager is not running
     */
    MANAGERNOTRUNNING,
}
/**
 * #NMClientPermission values indicate various permissions that NetworkManager
 * clients can obtain to perform certain tasks on behalf of the current user.
 */
export enum ClientPermission {
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
     *  persistent hostname can be changed
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
     * a reserved boundary value
     */
    LAST,
}
/**
 * #NMClientPermissionResult values indicate what authorizations and permissions
 * the user requires to obtain a given #NMClientPermission
 */
export enum ClientPermissionResult {
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
export enum DeviceAdslError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of ADSL type
     */
    NOTADSLCONNECTION,
    /**
     * the ADSL connection was invalid
     */
    INVALIDADSLCONNECTION,
}
export enum DeviceBondError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of bond type
     */
    NOTBONDCONNECTION,
    /**
     * the bond connection was invalid
     */
    INVALIDBONDCONNECTION,
    /**
     * the interfaces of the connection and the device mismatched
     */
    INTERFACEMISMATCH,
}
export enum DeviceBridgeError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of bridge type
     */
    NOTBRIDGECONNECTION,
    /**
     * the bridge connection was invalid
     */
    INVALIDBRIDGECONNECTION,
    /**
     * the interfaces of the connection and the device mismatched
     */
    INTERFACEMISMATCH,
}
export enum DeviceBtError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of bluetooth type
     */
    NOTBTCONNECTION,
    /**
     * the bluetooth connection was invalid
     */
    INVALIDBTCONNECTION,
    /**
     * the device's MAC was invalid
     */
    INVALIDDEVICEMAC,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
    /**
     * the device missed required capabilities
     */
    MISSINGDEVICECAPS,
}
export enum DeviceError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the interface names of the connection and the
     *   device mismatched
     */
    INTERFACEMISMATCH,
}
export enum DeviceEthernetError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of Ethernet or PPPoE type
     */
    NOTETHERNETCONNECTION,
    /**
     * the Ethernet connection was invalid
     */
    INVALIDETHERNETCONNECTION,
    /**
     * the device's MAC was invalid
     */
    INVALIDDEVICEMAC,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
}
export enum DeviceGenericError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of generic type
     */
    NOTGENERICCONNECTION,
    /**
     * the connection did not specify the interface name
     */
    MISSINGINTERFACENAME,
}
export enum DeviceInfinibandError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of InfiniBand type
     */
    NOTINFINIBANDCONNECTION,
    /**
     * the InfiniBand connection was invalid
     */
    INVALIDINFINIBANDCONNECTION,
    /**
     * the device's MAC was invalid
     */
    INVALIDDEVICEMAC,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
}
export enum DeviceModemError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of modem type
     */
    NOTMODEMCONNECTION,
    /**
     * the modem connection was invalid
     */
    INVALIDMODEMCONNECTION,
    /**
     * the device missed required capabilities
     */
    MISSINGDEVICECAPS,
}
export enum DeviceOlpcMeshError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of Olpc Mesh type
     */
    NOTOLPCMESHCONNECTION,
    /**
     * the Olpc Mesh connection was invalid
     */
    INVALIDOLPCMESHCONNECTION,
}
export enum DeviceTeamError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of team type
     */
    NOTTEAMCONNECTION,
    /**
     * the team connection was invalid
     */
    INVALIDTEAMCONNECTION,
    /**
     * the interfaces of the connection and the device mismatched
     */
    INTERFACEMISMATCH,
}
export enum DeviceVlanError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of VLAN type
     */
    NOTVLANCONNECTION,
    /**
     * the VLAN connection was invalid
     */
    INVALIDVLANCONNECTION,
    /**
     * the VLAN identifiers of the connection and the device mismatched
     */
    IDMISMATCH,
    /**
     * the interfaces of the connection and the device mismatched
     */
    INTERFACEMISMATCH,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
}
export enum DeviceWifiError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of Wi-Fi type
     */
    NOTWIFICONNECTION,
    /**
     * the Wi-Fi connection was invalid
     */
    INVALIDWIFICONNECTION,
    /**
     * the device's MAC was invalid
     */
    INVALIDDEVICEMAC,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
    /**
     * the device missed WPA capabilities
     * required by the connection
     */
    MISSINGDEVICEWPACAPS,
    /**
     * the device missed RSN capabilities
     * required by the connection
     */
    MISSINGDEVICERSNCAPS,
}
export enum DeviceWimaxError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the connection was not of WiMax type
     */
    NOTWIMAXCONNECTION,
    /**
     * the WiMax connection was invalid
     */
    INVALIDWIMAXCONNECTION,
    /**
     * the device's MAC was invalid
     */
    INVALIDDEVICEMAC,
    /**
     * the MACs of the connection and the device mismatched
     */
    MACMISMATCH,
}
/**
 * Describes errors that may result from operations involving a #NMObject.
 */
export enum ObjectError {
    /**
     * unknown or unclassified error
     */
    UNKNOWN,
    /**
     * an error ocured while creating an #NMObject
     */
    OBJECT_CREATION_FAILURE,
}
export enum RemoteConnectionError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * dbus disconnected
     */
    DISCONNECTED,
}
/**
 * Describes errors that may result from operations involving a #NMRemoteSettings.
 */
export enum RemoteSettingsError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the #NMRemoteConnection object
     *   was removed before it was completely initialized
     */
    CONNECTIONREMOVED,
    /**
     * the #NMRemoteConnection object
     *   is not visible or otherwise unreadable
     */
    CONNECTIONUNAVAILABLE,
    /**
     * NetworkManager is not running.
     *   (Since 0.9.10)
     */
    SERVICEUNAVAILABLE,
}
/**
 * #NMSecretAgentError values are passed by secret agents back to NetworkManager
 * when they encounter problems retrieving secrets on behalf of NM.
 */
export enum SecretAgentError {
    /**
     * the caller (ie, NetworkManager) is not
     *  authorized to make this request
     */
    NOTAUTHORIZED,
    /**
     * the connection for which secrets
     *  were requested could not be found
     */
    INVALIDCONNECTION,
    /**
     * the request was canceled by the user
     */
    USERCANCELED,
    /**
     * the agent canceled the request
     *  because it was requested to do so by NetworkManager
     */
    AGENTCANCELED,
    /**
     * some internal error in the agent caused
     *  the request to fail
     */
    INTERNALERROR,
    /**
     * the agent cannot find any secrets for this
     *  connection
     */
    NOSECRETS,
}
/**
 * WiMAX network type.
 */
export enum WimaxNspNetworkType {
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
/**
 * #NMSecretAgentCapabilities indicate various capabilities of the agent.
 * @bitfield 
 */
export enum SecretAgentCapabilities {
    /**
     * the agent supports no special capabilities
     */
    NONE,
    /**
     * the agent supports sending hints given
     * by the <literal>get_secrets</literal> class method to VPN plugin
     * authentication dialogs.
     */
    VPN_HINTS,
    /**
     * bounds checking value; should not be used.
     */
    LAST,
}
/**
 * #NMSecretAgentGetSecretsFlags values modify the behavior of a GetSecrets request.
 * @bitfield 
 */
export enum SecretAgentGetSecretsFlags {
    /**
     * no special behavior; by default no
     * user interaction is allowed and requests for secrets are fulfilled from
     * persistent storage, or if no secrets are available an error is returned.
     */
    NONE,
    /**
     * allows the request to
     * interact with the user, possibly prompting via UI for secrets if any are
     * required, or if none are found in persistent storage.
     */
    ALLOW_INTERACTION,
    /**
     * explicitly prompt for new
     * secrets from the user.  This flag signals that NetworkManager thinks any
     * existing secrets are invalid or wrong.  This flag implies that interaction
     * is allowed.
     */
    REQUEST_NEW,
    /**
     * set if the request was
     * initiated by user-requested action via the D-Bus interface, as opposed to
     * automatically initiated by NetworkManager in response to (for example) scan
     * results or carrier changes.
     */
    USER_REQUESTED,
}
export const ACCESS_POINT_BSSID: string | null
export const ACCESS_POINT_FLAGS: string | null
export const ACCESS_POINT_FREQUENCY: string | null
export const ACCESS_POINT_HW_ADDRESS: string | null
export const ACCESS_POINT_LAST_SEEN: string | null
export const ACCESS_POINT_MAX_BITRATE: string | null
export const ACCESS_POINT_MODE: string | null
export const ACCESS_POINT_RSN_FLAGS: string | null
export const ACCESS_POINT_SSID: string | null
export const ACCESS_POINT_STRENGTH: string | null
export const ACCESS_POINT_WPA_FLAGS: string | null
export const ACTIVE_CONNECTION_CONNECTION: string | null
export const ACTIVE_CONNECTION_DEFAULT: string | null
export const ACTIVE_CONNECTION_DEFAULT6: string | null
export const ACTIVE_CONNECTION_DEVICES: string | null
export const ACTIVE_CONNECTION_DHCP4_CONFIG: string | null
export const ACTIVE_CONNECTION_DHCP6_CONFIG: string | null
export const ACTIVE_CONNECTION_ID: string | null
export const ACTIVE_CONNECTION_IP4_CONFIG: string | null
export const ACTIVE_CONNECTION_IP6_CONFIG: string | null
export const ACTIVE_CONNECTION_MASTER: string | null
export const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string | null
export const ACTIVE_CONNECTION_STATE: string | null
export const ACTIVE_CONNECTION_TYPE: string | null
export const ACTIVE_CONNECTION_UUID: string | null
export const ACTIVE_CONNECTION_VPN: string | null
export const CLIENT_ACTIVATING_CONNECTION: string | null
export const CLIENT_ACTIVE_CONNECTIONS: string | null
export const CLIENT_ALL_DEVICES: string | null
export const CLIENT_CONNECTIVITY: string | null
export const CLIENT_DEVICES: string | null
export const CLIENT_MANAGER_RUNNING: string | null
export const CLIENT_NETWORKING_ENABLED: string | null
export const CLIENT_PRIMARY_CONNECTION: string | null
export const CLIENT_STARTUP: string | null
export const CLIENT_STATE: string | null
export const CLIENT_VERSION: string | null
export const CLIENT_WIMAX_ENABLED: string | null
export const CLIENT_WIMAX_HARDWARE_ENABLED: string | null
export const CLIENT_WIRELESS_ENABLED: string | null
export const CLIENT_WIRELESS_HARDWARE_ENABLED: string | null
export const CLIENT_WWAN_ENABLED: string | null
export const CLIENT_WWAN_HARDWARE_ENABLED: string | null
export const DEVICE_ACTIVE_CONNECTION: string | null
export const DEVICE_ADSL_CARRIER: string | null
export const DEVICE_AUTOCONNECT: string | null
export const DEVICE_AVAILABLE_CONNECTIONS: string | null
export const DEVICE_BOND_CARRIER: string | null
export const DEVICE_BOND_HW_ADDRESS: string | null
export const DEVICE_BOND_SLAVES: string | null
export const DEVICE_BRIDGE_CARRIER: string | null
export const DEVICE_BRIDGE_HW_ADDRESS: string | null
export const DEVICE_BRIDGE_SLAVES: string | null
export const DEVICE_BT_CAPABILITIES: string | null
export const DEVICE_BT_HW_ADDRESS: string | null
export const DEVICE_BT_NAME: string | null
export const DEVICE_CAPABILITIES: string | null
export const DEVICE_DEVICE_TYPE: string | null
export const DEVICE_DHCP4_CONFIG: string | null
export const DEVICE_DHCP6_CONFIG: string | null
export const DEVICE_DRIVER: string | null
export const DEVICE_DRIVER_VERSION: string | null
export const DEVICE_ETHERNET_CARRIER: string | null
export const DEVICE_ETHERNET_HW_ADDRESS: string | null
export const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string | null
export const DEVICE_ETHERNET_SPEED: string | null
export const DEVICE_FIRMWARE_MISSING: string | null
export const DEVICE_FIRMWARE_VERSION: string | null
export const DEVICE_GENERIC_HW_ADDRESS: string | null
export const DEVICE_GENERIC_TYPE_DESCRIPTION: string | null
export const DEVICE_INFINIBAND_CARRIER: string | null
export const DEVICE_INFINIBAND_HW_ADDRESS: string | null
export const DEVICE_INTERFACE: string | null
export const DEVICE_IP4_CONFIG: string | null
export const DEVICE_IP6_CONFIG: string | null
export const DEVICE_IP_INTERFACE: string | null
export const DEVICE_MANAGED: string | null
export const DEVICE_MODEM_CURRENT_CAPABILITIES: string | null
export const DEVICE_MODEM_MODEM_CAPABILITIES: string | null
export const DEVICE_MTU: string | null
export const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string | null
export const DEVICE_OLPC_MESH_COMPANION: string | null
export const DEVICE_OLPC_MESH_HW_ADDRESS: string | null
export const DEVICE_PHYSICAL_PORT_ID: string | null
export const DEVICE_PRODUCT: string | null
export const DEVICE_REAL: string | null
export const DEVICE_STATE: string | null
export const DEVICE_STATE_REASON: string | null
export const DEVICE_TEAM_CARRIER: string | null
export const DEVICE_TEAM_HW_ADDRESS: string | null
export const DEVICE_TEAM_SLAVES: string | null
export const DEVICE_UDI: string | null
export const DEVICE_VENDOR: string | null
export const DEVICE_VLAN_CARRIER: string | null
export const DEVICE_VLAN_HW_ADDRESS: string | null
export const DEVICE_VLAN_PARENT: string | null
export const DEVICE_VLAN_VLAN_ID: string | null
export const DEVICE_WIFI_ACCESS_POINTS: string | null
export const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string | null
export const DEVICE_WIFI_BITRATE: string | null
export const DEVICE_WIFI_CAPABILITIES: string | null
export const DEVICE_WIFI_HW_ADDRESS: string | null
export const DEVICE_WIFI_MODE: string | null
export const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string | null
export const DEVICE_WIMAX_ACTIVE_NSP: string | null
export const DEVICE_WIMAX_BSID: string | null
export const DEVICE_WIMAX_CENTER_FREQUENCY: string | null
export const DEVICE_WIMAX_CINR: string | null
export const DEVICE_WIMAX_HW_ADDRESS: string | null
export const DEVICE_WIMAX_NSPS: string | null
export const DEVICE_WIMAX_RSSI: string | null
export const DEVICE_WIMAX_TX_POWER: string | null
export const DHCP4_CONFIG_OPTIONS: string | null
export const DHCP6_CONFIG_OPTIONS: string | null
export const IP4_CONFIG_ADDRESSES: string | null
export const IP4_CONFIG_DOMAINS: string | null
export const IP4_CONFIG_GATEWAY: string | null
export const IP4_CONFIG_NAMESERVERS: string | null
export const IP4_CONFIG_ROUTES: string | null
export const IP4_CONFIG_SEARCHES: string | null
export const IP4_CONFIG_WINS_SERVERS: string | null
export const IP6_CONFIG_ADDRESSES: string | null
export const IP6_CONFIG_DOMAINS: string | null
export const IP6_CONFIG_GATEWAY: string | null
export const IP6_CONFIG_NAMESERVERS: string | null
export const IP6_CONFIG_ROUTES: string | null
export const IP6_CONFIG_SEARCHES: string | null
export const OBJECT_DBUS_CONNECTION: string | null
export const OBJECT_DBUS_PATH: string | null
export const REMOTE_CONNECTION_REMOVED: string | null
export const REMOTE_CONNECTION_UNSAVED: string | null
export const REMOTE_CONNECTION_UPDATED: string | null
export const REMOTE_SETTINGS_BUS: string | null
export const REMOTE_SETTINGS_CAN_MODIFY: string | null
export const REMOTE_SETTINGS_CONNECTIONS_READ: string | null
export const REMOTE_SETTINGS_HOSTNAME: string | null
export const REMOTE_SETTINGS_NEW_CONNECTION: string | null
export const REMOTE_SETTINGS_SERVICE_RUNNING: string | null
export const SECRET_AGENT_AUTO_REGISTER: string | null
export const SECRET_AGENT_CAPABILITIES: string | null
export const SECRET_AGENT_IDENTIFIER: string | null
export const SECRET_AGENT_REGISTERED: string | null
export const SECRET_AGENT_REGISTRATION_RESULT: string | null
export const VPN_CONNECTION_BANNER: string | null
export const VPN_CONNECTION_VPN_STATE: string | null
export const WIMAX_NSP_NAME: string | null
export const WIMAX_NSP_NETWORK_TYPE: string | null
export const WIMAX_NSP_SIGNAL_QUALITY: string | null
/**
 * Registers an error quark for #NMClient if necessary.
 * @returns the error quark used for #NMClient errors.
 */
export function clientErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceAdsl if necessary.
 * @returns the error quark used for #NMDeviceAdsl errors.
 */
export function deviceAdslErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceBond if necessary.
 * @returns the error quark used for #NMDeviceBond errors.
 */
export function deviceBondErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceBridge if necessary.
 * @returns the error quark used for #NMDeviceBridge errors.
 */
export function deviceBridgeErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceBt if necessary.
 * @returns the error quark used for #NMDeviceBt errors.
 */
export function deviceBtErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDevice if necessary.
 * @returns the error quark used for #NMDevice errors.
 */
export function deviceErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceEthernet if necessary.
 * @returns the error quark used for #NMDeviceEthernet errors.
 */
export function deviceEthernetErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceGeneric if necessary.
 * @returns the error quark used for #NMDeviceGeneric errors.
 */
export function deviceGenericErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceInfiniband if necessary.
 * @returns the error quark used for #NMDeviceInfiniband errors.
 */
export function deviceInfinibandErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceModem if necessary.
 * @returns the error quark used for #NMDeviceModem errors.
 */
export function deviceModemErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceOlpcMesh if necessary.
 * @returns the error quark used for #NMDeviceOlpcMesh errors.
 */
export function deviceOlpcMeshErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceTeam if necessary.
 * @returns the error quark used for #NMDeviceTeam errors.
 */
export function deviceTeamErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceVlan if necessary.
 * @returns the error quark used for #NMDeviceVlan errors.
 */
export function deviceVlanErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceWifi if necessary.
 * @returns the error quark used for #NMDeviceWifi errors.
 */
export function deviceWifiErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMDeviceWimax if necessary.
 * @returns the error quark used for #NMDeviceWimax errors.
 */
export function deviceWimaxErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMObject if necessary.
 * @returns the error quark used for #NMObject errors.
 */
export function objectErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMRemoteConnection if necessary.
 * @returns the error quark used for #NMRemoteConnection errors.
 */
export function remoteConnectionErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMRemoteSettings if necessary.
 * @returns the error quark used for #NMRemoteSettings errors.
 */
export function remoteSettingsErrorQuark(): GLib.Quark
export function secretAgentErrorQuark(): GLib.Quark
export interface ClientActivateFn {
    (client: Client, activeConnection: ActiveConnection, error: GLib.Error): void
}
export interface ClientAddActivateFn {
    (client: Client, connection: ActiveConnection, newConnectionPath: string | null, error: GLib.Error): void
}
export interface DeviceCallbackFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceDeactivateFn {
    (device: Device, error: GLib.Error): void
}
export interface DeviceWifiRequestScanFn {
    (device: DeviceWifi, error: GLib.Error): void
}
/**
 * Called when NetworkManager returns secrets in response to a request for
 * secrets via nm_remote_connection_get_secrets().
 * @callback 
 * @param connection the connection for which secrets were requested
 * @param secrets on success, a hash table of  hash tables, with each inner hash mapping a setting property to a #GValue  containing that property's value
 * @param error on failure, a descriptive error
 */
export interface RemoteConnectionGetSecretsFunc {
    (connection: RemoteConnection, secrets: GLib.HashTable, error: GLib.Error): void
}
/**
 * Called when NetworkManager has finished an asynchronous operation on a
 * connection, like commit changes, deleting, saving, etc.
 * @callback 
 * @param connection the connection for which an operation was performed
 * @param error on failure, a descriptive error
 */
export interface RemoteConnectionResultFunc {
    (connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsAddConnectionFunc {
    (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error): void
}
export interface RemoteSettingsLoadConnectionsFunc {
    (settings: RemoteSettings, failures: string | null, error: GLib.Error): void
}
export interface RemoteSettingsSaveHostnameFunc {
    (settings: RemoteSettings, error: GLib.Error): void
}
/**
 * Called as a result of a request by NM to delete secrets.  When the
 * #NMSecretAgent subclass has finished deleting the secrets, this function
 * should be called.
 * @callback 
 * @param agent the secret agent object
 * @param connection the connection for which secrets were to be deleted, note that this object will be unrefed after the callback has returned, use g_object_ref()/g_object_unref() if you want to use this object after the callback has returned
 * @param error if the deleting secrets failed, give a descriptive error here
 */
export interface SecretAgentDeleteSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
/**
 * Called as a result of a request by NM to retrieve secrets.  When the
 * #NMSecretAgent subclass has finished retrieving secrets and is ready to
 * return them, or to return an error, this function should be called with
 * those secrets or the error.
 * 
 * To easily create the hash table to return the Wi-Fi PSK, you could do
 * something like this:
 * <example>
 *  <title>Creating a secrets hash</title>
 *  <programlisting>
 *   NMConnection *secrets;
 *   NMSettingWirelessSecurity *s_wsec;
 *   GHashTable *secrets_hash;
 * 
 *   secrets = nm_connection_new ();
 *   s_wsec = (NMSettingWirelessSecurity *) nm_setting_wireless_security_new ();
 *   g_object_set (G_OBJECT (s_wsec),
 *                 NM_SETTING_WIRELESS_SECURITY_PSK, "my really cool PSK",
 *                 NULL);
 *   nm_connection_add_setting (secrets, NM_SETTING (s_wsec));
 *   secrets_hash = nm_connection_to_hash (secrets, NM_SETTING_HASH_FLAG_ALL);
 * 
 *   (call the NMSecretAgentGetSecretsFunc with secrets_hash)
 * 
 *   g_object_unref (secrets);
 *   g_hash_table_unref (secrets_hash);
 *  </programlisting>
 * </example>
 * @callback 
 * @param agent the secret agent object
 * @param connection the connection for which secrets were requested, note that this object will be unrefed after the callback has returned, use g_object_ref()/g_object_unref() if you want to use this object after the callback has returned
 * @param secrets the #GHashTable containing the requested secrets in the same format as an #NMConnection hash (as created by nm_connection_to_hash() for example).  Each key in `secrets` should be the name of a #NMSetting object (like "802-11-wireless-security") and each value should be a #GHashTable.  The sub-hashes map string:#GValue where the string is the setting property name (like "psk") and the value is the secret
 * @param error if the secrets request failed, give a descriptive error here
 */
export interface SecretAgentGetSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, secrets: GLib.HashTable, error: GLib.Error): void
}
/**
 * Called as a result of a request by NM to save secrets.  When the
 * #NMSecretAgent subclass has finished saving the secrets, this function
 * should be called.
 * @callback 
 * @param agent the secret agent object
 * @param connection the connection for which secrets were to be saved, note that this object will be unrefed after the callback has returned, use g_object_ref()/g_object_unref() if you want to use this object after the callback has returned
 * @param error if the saving secrets failed, give a descriptive error here
 */
export interface SecretAgentSaveSecretsFunc {
    (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void
}
export module AccessPoint {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface AccessPoint extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.AccessPoint

    /**
     * The BSSID of the access point.
     */
    readonly bssid: string | null
    /**
     * The flags of the access point.
     */
    readonly flags: number
    /**
     * The frequency of the access point.
     */
    readonly frequency: number
    /**
     * The hardware address of the access point.
     */
    readonly hwAddress: string | null
    /**
     * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * access point was found in scan results.  A value of -1 means the
     * access point has not been found in a scan.
     */
    readonly lastSeen: number
    /**
     * The maximum bit rate of the access point in kbit/s.
     */
    readonly maxBitrate: number
    /**
     * The mode of the access point; either "infrastructure" (a central
     * coordinator of the wireless network allowing clients to connect) or
     * "ad-hoc" (a network with no central controller).
     */
    readonly mode: number
    /**
     * The RSN flags of the access point.
     */
    readonly rsnFlags: number
    /**
     * The SSID of the access point.
     */
    readonly ssid: any
    /**
     * The current signal strength of the access point.
     */
    readonly strength: number
    /**
     * The WPA flags of the access point.
     */
    readonly wpaFlags: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.AccessPoint

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.AccessPoint

    /**
     * Validates a given connection against a given Wi-Fi access point to ensure that
     * the connection may be activated with that AP.  The connection must match the
     * `ap'`s SSID, (if given) BSSID, and other attributes like security settings,
     * channel, band, etc.
     * @param connection an #NMConnection to validate against `ap`
     * @returns %TRUE if the connection may be activated with this Wi-Fi AP, %FALSE if it cannot be.
     */
    connectionValid(connection: NetworkManager.Connection): boolean
    /**
     * Filters a given list of connections for a given #NMAccessPoint object and
     * return connections which may be activated with the access point.  Any
     * returned connections will match the `ap'`s SSID and (if given) BSSID and
     * other attributes like security settings, channel, etc.
     * 
     * To obtain the list of connections that are compatible with this access point,
     * use nm_remote_settings_list_connections() and then filter the returned list
     * for a given #NMDevice using nm_device_filter_connections() and finally
     * filter that list with this function.
     * @param connections a list of #NMConnection objects to filter
     * @returns a list of #NMConnection objects that could be activated with the given @ap. The elements of the list are owned by their creator and should not be freed by the caller, but the returned list itself is owned by the caller and should be freed with g_slist_free() when it is no longer required.
     */
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    /**
     * Gets the Basic Service Set ID (BSSID) of the Wi-Fi access point.
     * @returns the BSSID of the access point. This is an internal string and must not be modified or freed.
     */
    getBssid(): string | null
    /**
     * Gets the flags of the access point.
     * @returns the flags
     */
    getFlags(): NetworkManager.TODO_80211ApFlags
    /**
     * Gets the frequency of the access point in MHz.
     * @returns the frequency in MHz
     */
    getFrequency(): number
    /**
     * Gets the hardware (MAC) address of the access point.
     * @returns the hardware address of the access point. This is the internal string used by the access point and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Returns the timestamp (in CLOCK_BOOTTIME seconds) for the last time the
     * access point was found in scan results.  A value of -1 means the access
     * point has not been found in a scan.
     * @returns the last seen time in seconds
     */
    getLastSeen(): number
    /**
     * Gets the maximum bit rate of the access point in kbit/s.
     * @returns the maximum bit rate (kbit/s)
     */
    getMaxBitrate(): number
    /**
     * Gets the mode of the access point.
     * @returns the mode
     */
    getMode(): NetworkManager.TODO_80211Mode
    /**
     * Gets the RSN (Robust Secure Network, ie WPA version 2) flags of the access
     * point.
     * @returns the RSN flags
     */
    getRsnFlags(): NetworkManager.TODO_80211ApSecurityFlags
    /**
     * Gets the SSID of the access point.
     * @returns the #GByteArray containing the SSID. This is the internal copy used by the access point, and must not be modified.
     */
    getSsid(): Uint8Array
    /**
     * Gets the current signal strength of the access point as a percentage.
     * @returns the signal strength (0 to 100)
     */
    getStrength(): number
    /**
     * Gets the WPA (version 1) flags of the access point.
     * @returns the WPA flags
     */
    getWpaFlags(): NetworkManager.TODO_80211ApSecurityFlags

    // Class property signals of NMClient-1.0.NMClient.AccessPoint

    connect(sigName: "notify::bssid", callback: (...args: any[]) => void): number
    on(sigName: "notify::bssid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bssid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bssid", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::frequency", callback: (...args: any[]) => void): number
    on(sigName: "notify::frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frequency", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::last-seen", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-seen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-seen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-seen", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::rsn-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rsn-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rsn-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rsn-flags", ...args: any[]): void
    connect(sigName: "notify::ssid", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssid", ...args: any[]): void
    connect(sigName: "notify::strength", callback: (...args: any[]) => void): number
    on(sigName: "notify::strength", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::strength", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::strength", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::strength", ...args: any[]): void
    connect(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::wpa-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wpa-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wpa-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wpa-flags", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class AccessPoint extends Object {

    // Own properties of NMClient-1.0.NMClient.AccessPoint

    static name: string

    // Constructors of NMClient-1.0.NMClient.AccessPoint

    constructor(config?: AccessPoint.ConstructorProperties) 
    /**
     * Creates a new #NMAccessPoint.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBusobject path of the access point
     * @returns a new access point
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMAccessPoint.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBusobject path of the access point
     * @returns a new access point
     */
    static new(connection: DBusGLib.Connection, path: string | null): AccessPoint
    _init(config?: AccessPoint.ConstructorProperties): void
}

export module ActiveConnection {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface ActiveConnection extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.ActiveConnection

    /**
     * The connection's path of the active connection.
     */
    readonly connection: string | null
    /**
     * Whether the active connection is the default IPv4 one.
     */
    readonly "default": boolean
    /**
     * Whether the active connection is the default IPv6 one.
     */
    readonly default6: boolean
    readonly devices: any
    /**
     * The #NMDHCP4Config of the connection.
     */
    readonly dhcp4Config: DHCP4Config
    /**
     * The #NMDHCP6Config of the connection.
     */
    readonly dhcp6Config: DHCP6Config
    /**
     * The active connection's ID
     */
    readonly id: string | null
    /**
     * The #NMIP4Config of the connection.
     */
    readonly ip4Config: IP4Config
    /**
     * The #NMIP6Config of the connection.
     */
    readonly ip6Config: IP6Config
    /**
     * The path of the master device if one exists.
     */
    readonly master: string | null
    /**
     * The specific object's path of the active connection.
     */
    readonly specificObject: string | null
    /**
     * The state of the active connection.
     */
    readonly state: number
    /**
     * The active connection's type
     */
    readonly type: string | null
    /**
     * The active connection's UUID
     */
    readonly uuid: string | null
    /**
     * Whether the active connection is a VPN connection.
     */
    readonly vpn: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.ActiveConnection

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.ActiveConnection

    /**
     * Gets the #NMConnection's DBus object path.  This is often used with
     * nm_remote_settings_get_connection_by_path() to retrieve the
     * #NMRemoteConnection object that describes the connection.
     * @returns the object path of the #NMConnection which this #NMActiveConnection is an active instance of.  This is the internal string used by the connection, and must not be modified.
     */
    getConnection(): string | null

    // Overloads of getConnection

    /**
     * Gets the #NMObject's DBusGConnection.
     * @returns the connection
     */
    getConnection(): DBusGLib.Connection
    /**
     * Gets the #NMConnection's type.
     * @returns the type of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    getConnectionType(): string | null
    /**
     * Whether the active connection is the default IPv4 one (that is, is used for
     * the default IPv4 route and DNS information).
     * @returns %TRUE if the active connection is the default IPv4 connection
     */
    getDefault(): boolean
    /**
     * Whether the active connection is the default IPv6 one (that is, is used for
     * the default IPv6 route and DNS information).
     * @returns %TRUE if the active connection is the default IPv6 connection
     */
    getDefault6(): boolean
    /**
     * Gets the #NMDevices used for the active connections.
     * @returns the #GPtrArray containing #NMDevices. This is the internal copy used by the connection, and must not be modified.
     */
    getDevices(): Device[]
    /**
     * Gets the current #NMDHCP4Config (if any) associated with the
     * #NMActiveConnection.
     * @returns the #NMDHCP4Config, or %NULL if the   connection does not use DHCP, or is not in the   %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
     */
    getDhcp4Config(): DHCP4Config
    /**
     * Gets the current #NMDHCP6Config (if any) associated with the
     * #NMActiveConnection.
     * @returns the #NMDHCP6Config, or %NULL if the   connection does not use DHCPv6, or is not in the   %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
     */
    getDhcp6Config(): DHCP6Config
    /**
     * Gets the #NMConnection's ID.
     * @returns the ID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    getId(): string | null
    /**
     * Gets the current #NMIP4Config associated with the #NMActiveConnection.
     * @returns the #NMIP4Config, or %NULL if the   connection is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
     */
    getIp4Config(): IP4Config
    /**
     * Gets the current #NMIP6Config associated with the #NMActiveConnection.
     * @returns the #NMIP6Config, or %NULL if the   connection is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
     */
    getIp6Config(): IP6Config
    /**
     * Gets the path to the master #NMDevice of the connection.
     * @returns the path of the master #NMDevice of the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    getMaster(): string | null
    /**
     * Gets the "specific object" used at the activation.
     * @returns the specific object's DBus path. This is the internal string used by the connection, and must not be modified.
     */
    getSpecificObject(): string | null
    /**
     * Gets the active connection's state.
     * @returns the state
     */
    getState(): NetworkManager.ActiveConnectionState
    /**
     * Gets the #NMConnection's UUID.
     * @returns the UUID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
     */
    getUuid(): string | null
    /**
     * Whether the active connection is a VPN connection.
     * @returns %TRUE if the active connection is a VPN connection
     */
    getVpn(): boolean

    // Class property signals of NMClient-1.0.NMClient.ActiveConnection

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::default", callback: (...args: any[]) => void): number
    on(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::default6", callback: (...args: any[]) => void): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default6", ...args: any[]): void
    connect(sigName: "notify::devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::devices", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::master", callback: (...args: any[]) => void): number
    on(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::specific-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specific-object", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::vpn", callback: (...args: any[]) => void): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vpn", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class ActiveConnection extends Object {

    // Own properties of NMClient-1.0.NMClient.ActiveConnection

    static name: string

    // Constructors of NMClient-1.0.NMClient.ActiveConnection

    constructor(config?: ActiveConnection.ConstructorProperties) 
    /**
     * Creates a new #NMActiveConnection.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new active connection
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMActiveConnection.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new active connection
     */
    static new(connection: DBusGLib.Connection, path: string | null): ActiveConnection
    _init(config?: ActiveConnection.ConstructorProperties): void
}

export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `any-device-added`
     */
    export interface AnyDeviceAddedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `any-device-removed`
     */
    export interface AnyDeviceRemovedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `permission-changed`
     */
    export interface PermissionChangedSignalCallback {
        (permission: number, result: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {

        // Own constructor properties of NMClient-1.0.NMClient.Client

        /**
         * Whether networking is enabled.
         */
        networkingEnabled?: boolean | null
        /**
         * Whether WiMAX functionality is enabled.
         */
        wimaxEnabled?: boolean | null
        /**
         * Whether wireless is enabled.
         */
        wirelessEnabled?: boolean | null
        /**
         * Whether WWAN functionality is enabled.
         */
        wwanEnabled?: boolean | null
    }

}

export interface Client extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.Client

    /**
     * The #NMActiveConnection of the activating connection that is
     * likely to become the new #NMClient:primary-connection.
     */
    readonly activatingConnection: ActiveConnection
    /**
     * The active connections.
     */
    readonly activeConnections: any[]
    /**
     * List of both real devices and device placeholders.
     */
    readonly allDevices: any
    /**
     * The network connectivity state.
     */
    readonly connectivity: number
    /**
     * List of real network devices.  Does not include placeholder devices.
     */
    readonly devices: any
    /**
     * Whether the daemon is running.
     */
    readonly managerRunning: boolean
    /**
     * Whether networking is enabled.
     */
    networkingEnabled: boolean
    /**
     * The #NMActiveConnection of the device with the default route;
     * see nm_client_get_primary_connection() for more details.
     */
    readonly primaryConnection: ActiveConnection
    /**
     * Whether the daemon is still starting up.
     */
    readonly startup: boolean
    /**
     * The current daemon state.
     */
    readonly state: number
    /**
     * The NetworkManager version.
     */
    readonly version: string | null
    /**
     * Whether WiMAX functionality is enabled.
     */
    wimaxEnabled: boolean
    /**
     * Whether the WiMAX hardware is enabled.
     */
    readonly wimaxHardwareEnabled: boolean
    /**
     * Whether wireless is enabled.
     */
    wirelessEnabled: boolean
    /**
     * Whether the wireless hardware is enabled.
     */
    readonly wirelessHardwareEnabled: boolean
    /**
     * Whether WWAN functionality is enabled.
     */
    wwanEnabled: boolean
    /**
     * Whether the WWAN hardware is enabled.
     */
    readonly wwanHardwareEnabled: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.Client

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.Client

    /**
     * Starts a connection to a particular network using the configuration settings
     * from `connection` and the network device `device`.  Certain connection types
     * also take a "specific object" which is the object path of a connection-
     * specific object, like an #NMAccessPoint for Wi-Fi connections, or an
     * #NMWimaxNsp for WiMAX connections, to which you wish to connect.  If the
     * specific object is not given, NetworkManager can, in some cases, automatically
     * determine which network to connect to given the settings in `connection`.
     * 
     * If `connection` is not given for a device-based activation, NetworkManager
     * picks the best available connection for the device and activates it.
     * 
     * Note that the callback is invoked when NetworkManager has started activating
     * the new connection, not when it finishes. You can used the returned
     * #NMActiveConnection object (in particular, #NMActiveConnection:state) to
     * track the activation to its completion.
     * @param connection an #NMConnection
     * @param device the #NMDevice
     * @param specificObject the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by `device,` which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
     * @param callback the function to call when the call is done
     */
    activateConnection(connection: NetworkManager.Connection | null, device: Device | null, specificObject: string | null, callback: ClientActivateFn | null): void
    /**
     * Adds a new connection using the given details (if any) as a template,
     * automatically filling in missing settings with the capabilities of the
     * given device and specific object.  The new connection is then activated.
     * Cannot be used for VPN connections at this time.
     * 
     * Note that the callback is invoked when NetworkManager has started activating
     * the new connection, not when it finishes. You can used the returned
     * #NMActiveConnection object (in particular, #NMActiveConnection:state) to
     * track the activation to its completion.
     * @param partial an #NMConnection to add; the connection may be   partially filled (or even %NULL) and will be completed by NetworkManager   using the given `device` and `specific_object` before being added
     * @param device the #NMDevice
     * @param specificObject the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by `device,` which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
     * @param callback the function to call when the call is done
     */
    addAndActivateConnection(partial: NetworkManager.Connection | null, device: Device, specificObject: string | null, callback: ClientAddActivateFn | null): void
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
    checkConnectivity(cancellable: Gio.Cancellable | null): NetworkManager.ConnectivityState
    /**
     * Asynchronously updates the network connectivity state and invokes
     * `callback` when complete. Contrast nm_client_get_connectivity(),
     * which (immediately) returns the most recent known state without
     * re-checking, and nm_client_check_connectivity(), which blocks.
     * @param cancellable a #GCancellable
     * @param callback callback to call with the result
     */
    checkConnectivityAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Retrieves the result of an nm_client_check_connectivity_async()
     * call.
     * @param result the #GAsyncResult
     * @returns the (new) current connectivity state
     */
    checkConnectivityFinish(result: Gio.AsyncResult): NetworkManager.ConnectivityState
    /**
     * Deactivates an active #NMActiveConnection.
     * @param active the #NMActiveConnection to deactivate
     */
    deactivateConnection(active: ActiveConnection): void
    /**
     * Gets the #NMActiveConnection corresponding to a
     * currently-activating connection that is expected to become the new
     * #NMClient:primary-connection upon successful activation.
     * @returns the appropriate #NMActiveConnection, if any.
     */
    getActivatingConnection(): ActiveConnection
    /**
     * Gets the active connections.
     * @returns a #GPtrArray  containing all the active #NMActiveConnections. The returned array is owned by the client and should not be modified.
     */
    getActiveConnections(): ActiveConnection[]
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
    getAllDevices(): Device[]
    /**
     * Gets the current network connectivity state. Contrast
     * nm_client_check_connectivity() and
     * nm_client_check_connectivity_async(), which re-check the
     * connectivity state first before returning any information.
     * @returns the current connectivity state
     */
    getConnectivity(): NetworkManager.ConnectivityState
    /**
     * Gets a #NMDevice from a #NMClient.
     * @param iface the interface name to search for
     * @returns the #NMDevice for the given @iface or %NULL if none is found.
     */
    getDeviceByIface(iface: string | null): Device
    /**
     * Gets a #NMDevice from a #NMClient.
     * @param objectPath the object path to search for
     * @returns the #NMDevice for the given @object_path or %NULL if none is found.
     */
    getDeviceByPath(objectPath: string | null): Device
    /**
     * Gets all the known network devices.  Use nm_device_get_type() or the
     * <literal>NM_IS_DEVICE_XXXX</literal> functions to determine what kind of
     * device member of the returned array is, and then you may use device-specific
     * methods such as nm_device_ethernet_get_hw_address().
     * @returns a #GPtrArray containing all the #NMDevices.  The returned array is owned by the #NMClient object and should not be modified.
     */
    getDevices(): Device[]
    /**
     * Gets NetworkManager current logging level and domains.
     * @param level return location for logging level string
     * @param domains return location for log domains string. The string is   a list of domains separated by ","
     * @returns %TRUE on success, %FALSE otherwise
     */
    getLogging(level: string | null, domains: string | null): boolean
    /**
     * Determines whether the daemon is running.
     * @returns %TRUE if the daemon is running
     */
    getManagerRunning(): boolean
    /**
     * Requests the result of a specific permission, which indicates whether the
     * client can or cannot perform the action the permission represents
     * @param permission the permission for which to return the result, one of #NMClientPermission
     * @returns the permission's result, one of #NMClientPermissionResult
     */
    getPermissionResult(permission: ClientPermission): ClientPermissionResult
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
    getPrimaryConnection(): ActiveConnection
    /**
     * Tests whether the daemon is still in the process of activating
     * connections at startup.
     * @returns whether the daemon is still starting up
     */
    getStartup(): boolean
    /**
     * Gets the current daemon state.
     * @returns the current %NMState
     */
    getState(): NetworkManager.State
    /**
     * Gets NetworkManager version.
     * @returns string with the version
     */
    getVersion(): string | null
    /**
     * Whether networking is enabled or disabled.
     * @returns %TRUE if networking is enabled, %FALSE if networking is disabled
     */
    networkingGetEnabled(): boolean
    /**
     * Enables or disables networking.  When networking is disabled, all controlled
     * interfaces are disconnected and deactivated.  When networking is enabled,
     * all controlled interfaces are available for activation.
     * @param enabled %TRUE to set networking enabled, %FALSE to set networking disabled
     */
    networkingSetEnabled(enabled: boolean): void
    /**
     * Sets NetworkManager logging level and/or domains.
     * @param level logging level to set (%NULL or an empty string for no change)
     * @param domains logging domains to set. The string should be a list of log   domains separated by ",". (%NULL or an empty string for no change)
     * @returns %TRUE on success, %FALSE otherwise
     */
    setLogging(level: string | null, domains: string | null): boolean
    /**
     * Deprecated; use nm_client_networking_set_enabled() instead.
     * @param sleep %TRUE to put the daemon to sleep
     */
    sleep(sleep: boolean): void
    /**
     * Determines whether WiMAX is enabled.
     * @returns %TRUE if WiMAX is enabled
     */
    wimaxGetEnabled(): boolean
    /**
     * Determines whether the WiMAX hardware is enabled.
     * @returns %TRUE if the WiMAX hardware is enabled
     */
    wimaxHardwareGetEnabled(): boolean
    /**
     * Enables or disables WiMAX devices.
     * @param enabled %TRUE to enable WiMAX
     */
    wimaxSetEnabled(enabled: boolean): void
    /**
     * Determines whether the wireless is enabled.
     * @returns %TRUE if wireless is enabled
     */
    wirelessGetEnabled(): boolean
    /**
     * Determines whether the wireless hardware is enabled.
     * @returns %TRUE if the wireless hardware is enabled
     */
    wirelessHardwareGetEnabled(): boolean
    /**
     * Enables or disables wireless devices.
     * @param enabled %TRUE to enable wireless
     */
    wirelessSetEnabled(enabled: boolean): void
    /**
     * Determines whether WWAN is enabled.
     * @returns %TRUE if WWAN is enabled
     */
    wwanGetEnabled(): boolean
    /**
     * Determines whether the WWAN hardware is enabled.
     * @returns %TRUE if the WWAN hardware is enabled
     */
    wwanHardwareGetEnabled(): boolean
    /**
     * Enables or disables WWAN devices.
     * @param enabled %TRUE to enable WWAN
     */
    wwanSetEnabled(enabled: boolean): void

    // Own virtual methods of NMClient-1.0.NMClient.Client

    deviceAdded(device: Device): void
    deviceRemoved(device: Device): void
    permissionChanged(permission: ClientPermission, result: ClientPermissionResult): void

    // Own signals of NMClient-1.0.NMClient.Client

    connect(sigName: "any-device-added", callback: Client.AnyDeviceAddedSignalCallback): number
    on(sigName: "any-device-added", callback: Client.AnyDeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "any-device-added", callback: Client.AnyDeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "any-device-added", callback: Client.AnyDeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "any-device-added", ...args: any[]): void
    connect(sigName: "any-device-removed", callback: Client.AnyDeviceRemovedSignalCallback): number
    on(sigName: "any-device-removed", callback: Client.AnyDeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "any-device-removed", callback: Client.AnyDeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "any-device-removed", callback: Client.AnyDeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "any-device-removed", ...args: any[]): void
    connect(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: Client.DeviceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-removed", ...args: any[]): void
    connect(sigName: "permission-changed", callback: Client.PermissionChangedSignalCallback): number
    on(sigName: "permission-changed", callback: Client.PermissionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "permission-changed", callback: Client.PermissionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "permission-changed", callback: Client.PermissionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "permission-changed", result: number, ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.Client

    connect(sigName: "notify::activating-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::activating-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::activating-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::activating-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::activating-connection", ...args: any[]): void
    connect(sigName: "notify::active-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connections", ...args: any[]): void
    connect(sigName: "notify::all-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::all-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::all-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::all-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::all-devices", ...args: any[]): void
    connect(sigName: "notify::connectivity", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectivity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectivity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectivity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectivity", ...args: any[]): void
    connect(sigName: "notify::devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::devices", ...args: any[]): void
    connect(sigName: "notify::manager-running", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager-running", ...args: any[]): void
    connect(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::networking-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::networking-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::networking-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::networking-enabled", ...args: any[]): void
    connect(sigName: "notify::primary-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::primary-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::primary-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::primary-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::primary-connection", ...args: any[]): void
    connect(sigName: "notify::startup", callback: (...args: any[]) => void): number
    on(sigName: "notify::startup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::startup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::startup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::startup", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wimax-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wimax-enabled", ...args: any[]): void
    connect(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wimax-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wimax-hardware-enabled", ...args: any[]): void
    connect(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wireless-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wireless-enabled", ...args: any[]): void
    connect(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wireless-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wireless-hardware-enabled", ...args: any[]): void
    connect(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wwan-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wwan-enabled", ...args: any[]): void
    connect(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wwan-hardware-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wwan-hardware-enabled", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Client extends Object {

    // Own properties of NMClient-1.0.NMClient.Client

    static name: string

    // Constructors of NMClient-1.0.NMClient.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new #NMClient.
     * 
     * Note that this will do blocking D-Bus calls to initialize the
     * client. You can use nm_client_new_async() if you want to avoid
     * that.
     * 
     * NOTE: #NMClient provides information about devices and a mechanism to
     * control them.  To access and modify network configuration data, use the
     * #NMRemoteSettings object.
     * @constructor 
     * @returns a new #NMClient or NULL on an error
     */
    constructor() 
    /**
     * Creates a new #NMClient.
     * 
     * Note that this will do blocking D-Bus calls to initialize the
     * client. You can use nm_client_new_async() if you want to avoid
     * that.
     * 
     * NOTE: #NMClient provides information about devices and a mechanism to
     * control them.  To access and modify network configuration data, use the
     * #NMRemoteSettings object.
     * @constructor 
     * @returns a new #NMClient or NULL on an error
     */
    static new(): Client
    /**
     * Gets the result of an nm_client_new_async() call.
     * @constructor 
     * @param result a #GAsyncResult
     * @returns a new #NMClient, or %NULL on error
     */
    static newFinish(result: Gio.AsyncResult): Client
    _init(config?: Client.ConstructorProperties): void
    /**
     * Creates a new #NMClient and begins asynchronously initializing it.
     * `callback` will be called when it is done; use
     * nm_client_new_finish() to get the result. Note that on an error,
     * the callback can be invoked with two first parameters as NULL.
     * 
     * NOTE: #NMClient provides information about devices and a mechanism to
     * control them.  To access and modify network configuration data, use the
     * #NMRemoteSettings object.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the client is created
     */
    static newAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module DHCP4Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface DHCP4Config extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DHCP4Config

    /**
     * The #GHashTable containing options of the configuration.
     */
    readonly options: GLib.HashTable
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DHCP4Config

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DHCP4Config

    /**
     * Gets one option by option name.
     * @param option the option to retrieve
     * @returns the configuration option's value. This is the internal string used by the configuration, and must not be modified.
     */
    getOneOption(option: string | null): string | null
    /**
     * Gets all the options contained in the configuration.
     * @returns the #GHashTable containing strings for keys and values. This is the internal copy used by the configuration, and must not be modified.
     */
    getOptions(): GLib.HashTable

    // Class property signals of NMClient-1.0.NMClient.DHCP4Config

    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DHCP4Config extends Object {

    // Own properties of NMClient-1.0.NMClient.DHCP4Config

    static name: string

    // Constructors of NMClient-1.0.NMClient.DHCP4Config

    constructor(config?: DHCP4Config.ConstructorProperties) 
    /**
     * Creates a new #NMDHCP4Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new configuration
     */
    constructor(connection: DBusGLib.Connection, objectPath: string | null) 
    /**
     * Creates a new #NMDHCP4Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new configuration
     */
    static new(connection: DBusGLib.Connection, objectPath: string | null): DHCP4Config
    _init(config?: DHCP4Config.ConstructorProperties): void
}

export module DHCP6Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface DHCP6Config extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DHCP6Config

    /**
     * The #GHashTable containing options of the configuration.
     */
    readonly options: GLib.HashTable
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DHCP6Config

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DHCP6Config

    /**
     * Gets one option by option name.
     * @param option the option to retrieve
     * @returns the configuration option's value. This is the internal string used by the configuration, and must not be modified.
     */
    getOneOption(option: string | null): string | null
    /**
     * Gets all the options contained in the configuration.
     * @returns the #GHashTable containing strings for keys and values. This is the internal copy used by the configuration, and must not be modified.
     */
    getOptions(): GLib.HashTable

    // Class property signals of NMClient-1.0.NMClient.DHCP6Config

    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DHCP6Config extends Object {

    // Own properties of NMClient-1.0.NMClient.DHCP6Config

    static name: string

    // Constructors of NMClient-1.0.NMClient.DHCP6Config

    constructor(config?: DHCP6Config.ConstructorProperties) 
    /**
     * Creates a new #NMDHCP6Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new configuration
     */
    constructor(connection: DBusGLib.Connection, objectPath: string | null) 
    /**
     * Creates a new #NMDHCP6Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new configuration
     */
    static new(connection: DBusGLib.Connection, objectPath: string | null): DHCP6Config
    _init(config?: DHCP6Config.ConstructorProperties): void
}

export module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (newState: number, oldState: number, reason: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {

        // Own constructor properties of NMClient-1.0.NMClient.Device

        /**
         * Whether the device can auto-activate a connection.
         */
        autoconnect?: boolean | null
    }

}

export interface Device extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.Device

    /**
     * The #NMActiveConnection object that "owns" this device during activation.
     */
    readonly activeConnection: ActiveConnection
    /**
     * Whether the device can auto-activate a connection.
     */
    autoconnect: boolean
    /**
     * The available connections (#NMRemoteConnection) of the device
     */
    readonly availableConnections: any
    /**
     * The capabilities of the device.
     */
    readonly capabilities: number
    /**
     * The numeric type of the device.
     */
    readonly deviceType: number
    /**
     * The #NMDHCP4Config of the device.
     */
    readonly dhcp4Config: DHCP4Config
    /**
     * The #NMDHCP6Config of the device.
     */
    readonly dhcp6Config: DHCP6Config
    /**
     * The driver of the device.
     */
    readonly driver: string | null
    /**
     * The version of the device driver.
     */
    readonly driverVersion: string | null
    /**
     * When %TRUE indicates the device is likely missing firmware required
     * for its operation.
     */
    readonly firmwareMissing: boolean
    /**
     * The firmware version of the device.
     */
    readonly firmwareVersion: string | null
    /**
     * The interface of the device.
     */
    readonly interface: string | null
    /**
     * The IP interface of the device which should be used for all IP-related
     * operations like addressing and routing.
     */
    readonly ipInterface: string | null
    /**
     * The #NMIP4Config of the device.
     */
    readonly ip4Config: IP4Config
    /**
     * The #NMIP6Config of the device.
     */
    readonly ip6Config: IP6Config
    /**
     * Whether the device is managed by NetworkManager.
     */
    readonly managed: boolean
    /**
     * The MTU of the device.
     */
    readonly mtu: number
    /**
     * The physical port ID of the device. (See
     * nm_device_get_physical_port_id().)
     */
    readonly physicalPortId: string | null
    /**
     * The product string of the device.
     */
    readonly product: string | null
    /**
     * Whether the device is real or is a placeholder device that could
     * be created automatically by NetworkManager if one of its
     * #NMDevice:available-connections was activated.
     */
    readonly real: boolean
    /**
     * The state of the device.
     */
    readonly state: number
    /**
     * An operating-system specific device hardware identifier; this is not
     * unique to a specific hardware device across reboots or hotplugs.  It
     * is an opaque string which for some device types (Bluetooth, Modem)
     * contains an identifier provided by the underlying hardware service daemon
     * such as Bluez or ModemManager, and clients can use this property to
     * request more information about the device from those services.
     */
    readonly udi: string | null
    /**
     * The vendor string of the device.
     */
    readonly vendor: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.Device

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.Device

    // Has conflict: connectionCompatible(connection: NetworkManager.Connection): boolean
    /**
     * Validates a given connection for a given #NMDevice object and returns
     * whether the connection may be activated with the device. For example if
     * `device` is a Wi-Fi device that supports only WEP encryption, the connection
     * will only be valid if it is a Wi-Fi connection which describes a WEP or open
     * network, and will not be valid if it describes a WPA network, or if it is
     * an Ethernet, Bluetooth, WWAN, etc connection that is incompatible with the
     * device.
     * @param connection an #NMConnection to validate against `device`
     * @returns %TRUE if the connection may be activated with this device, %FALSE if is incompatible with the device's capabilities and characteristics.
     */
    connectionValid(connection: NetworkManager.Connection): boolean
    /**
     * Deletes the software device. Hardware devices can't be deleted.
     * @param callback callback to be called when delete operation completes
     */
    delete(callback: DeviceCallbackFn | null): void
    /**
     * Disconnects the device if currently connected, and prevents the device from
     * automatically connecting to networks until the next manual network connection
     * request.
     * @param callback callback to be called when disconnect operation completes
     */
    disconnect(callback: DeviceCallbackFn | null): void
    /**
     * Filters a given list of connections for a given #NMDevice object and return
     * connections which may be activated with the device. For example if `device`
     * is a Wi-Fi device that supports only WEP encryption, the returned list will
     * contain any Wi-Fi connections in `connections` that allow connection to
     * unencrypted or WEP-enabled SSIDs.  The returned list will not contain
     * Ethernet, Bluetooth, Wi-Fi WPA connections, or any other connection that is
     * incompatible with the device. To get the full list of connections see
     * nm_remote_settings_list_connections().
     * @param connections a list of #NMConnection objects to filter
     * @returns a list of #NMConnection objects that could be activated with the given @device. The elements of the list are owned by their creator and should not be freed by the caller, but the returned list itself is owned by the caller and should be freed with g_slist_free() when it is no longer required.
     */
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    /**
     * Gets the #NMActiveConnection object which owns this device during activation.
     * @returns the #NMActiveConnection or %NULL if the device is not part of an active connection
     */
    getActiveConnection(): ActiveConnection
    /**
     * Whether the #NMDevice can be autoconnected.
     * @returns %TRUE if the device is allowed to be autoconnected
     */
    getAutoconnect(): boolean
    /**
     * Gets the #NMRemoteConnections currently known to the daemon that could
     * be activated on `device`.
     * @returns the #GPtrArray containing #NMRemoteConnections. This is the internal copy used by the connection, and must not be modified.
     */
    getAvailableConnections(): RemoteConnection[]
    /**
     * Gets the device' capabilities.
     * @returns the capabilities
     */
    getCapabilities(): NetworkManager.DeviceCapabilities
    /**
     * Gets a description of `device,` based on its vendor and product names.
     * @returns a description of @device. If either the vendor or the   product name is unknown, this returns the interface name.
     */
    getDescription(): string | null
    /**
     * Returns the numeric type of the #NMDevice, ie Ethernet, Wi-Fi, etc.
     * @returns the device type
     */
    getDeviceType(): NetworkManager.DeviceType
    /**
     * Gets the current #NMDHCP4Config associated with the #NMDevice.
     * 
     * Note that as of NetworkManager 0.9.10, you can alternatively use
     * nm_active_connection_get_dhcp4_config(), which also works with VPN
     * connections.
     * @returns the #NMDHCP4Config or %NULL if the device is not activated or not using DHCP.
     */
    getDhcp4Config(): DHCP4Config
    /**
     * Gets the current #NMDHCP6Config associated with the #NMDevice.
     * 
     * Note that as of NetworkManager 0.9.10, you can alternatively use
     * nm_active_connection_get_dhcp6_config(), which also works with VPN
     * connections.
     * @returns the #NMDHCP6Config or %NULL if the device is not activated or not using DHCP.
     */
    getDhcp6Config(): DHCP6Config
    /**
     * Gets the driver of the #NMDevice.
     * @returns the driver of the device. This is the internal string used by the device, and must not be modified.
     */
    getDriver(): string | null
    /**
     * Gets the driver version of the #NMDevice.
     * @returns the version of the device driver. This is the internal string used by the device, and must not be modified.
     */
    getDriverVersion(): string | null
    /**
     * Indicates that firmware required for the device's operation is likely
     * to be missing.
     * @returns %TRUE if firmware required for the device's operation is likely to be missing.
     */
    getFirmwareMissing(): boolean
    /**
     * Gets the firmware version of the #NMDevice.
     * @returns the firmware version of the device. This is the internal string used by the device, and must not be modified.
     */
    getFirmwareVersion(): string | null
    // Has conflict: getHwAddress(): string | null
    /**
     * Gets the interface name of the #NMDevice.
     * @returns the interface of the device. This is the internal string used by the device, and must not be modified.
     */
    getIface(): string | null
    /**
     * Gets the current #NMIP4Config associated with the #NMDevice.
     * 
     * Note that as of NetworkManager 0.9.10, you can alternatively use
     * nm_active_connection_get_ip4_config(), which also works with VPN
     * connections.
     * @returns the #NMIP4Config or %NULL if the device is not activated.
     */
    getIp4Config(): IP4Config
    /**
     * Gets the current #NMIP6Config associated with the #NMDevice.
     * 
     * Note that as of NetworkManager 0.9.10, you can alternatively use
     * nm_active_connection_get_ip6_config(), which also works with VPN
     * connections.
     * @returns the #NMIP6Config or %NULL if the device is not activated.
     */
    getIp6Config(): IP6Config
    /**
     * Gets the IP interface name of the #NMDevice over which IP traffic flows
     * when the device is in the ACTIVATED state.
     * @returns the IP traffic interface of the device. This is the internal string used by the device, and must not be modified.
     */
    getIpIface(): string | null
    /**
     * Whether the #NMDevice is managed by NetworkManager.
     * @returns %TRUE if the device is managed by NetworkManager
     */
    getManaged(): boolean
    /**
     * Gets the  MTU of the #NMDevice.
     * @returns the MTU of the device in bytes.
     */
    getMtu(): number
    /**
     * Gets the physical port ID of the #NMDevice. If non-%NULL, this is
     * an opaque string that can be used to recognize when
     * seemingly-unrelated #NMDevices are actually just different virtual
     * ports on a single physical port. (Eg, NPAR / SR-IOV.)
     * @returns the physical port ID of the device, or %NULL if the port   ID is unknown. This is the internal string used by the device and   must not be modified.
     */
    getPhysicalPortId(): string | null
    /**
     * Gets the product string of the #NMDevice.
     * @returns the product name of the device. This is the internal string used by the device, and must not be modified.
     */
    getProduct(): string | null
    // Has conflict: getSettingType(): GObject.GType
    /**
     * Gets the current #NMDevice state.
     * @returns the current device state
     */
    getState(): NetworkManager.DeviceState
    /**
     * Gets the current #NMDevice state (return value) and the reason for entering
     * the state (`reason` argument).
     * @returns the current device state
     */
    getStateReason(): [ /* returnType */ NetworkManager.DeviceState, /* reason */ NetworkManager.DeviceStateReason ]
    // Has conflict: getTypeDescription(): string | null
    /**
     * Gets the Unique Device Identifier of the #NMDevice.
     * @returns the Unique Device Identifier of the device.  This identifier may be used to gather more information about the device from various operating system services like udev or sysfs.
     */
    getUdi(): string | null
    /**
     * Gets the vendor string of the #NMDevice.
     * @returns the vendor name of the device. This is the internal string used by the device, and must not be modified.
     */
    getVendor(): string | null
    isReal(): boolean
    /**
     * Whether the device is a software device.
     * @returns %TRUE if @device is a software device, %FALSE if it is a hardware device.
     */
    isSoftware(): boolean
    /**
     * Enables or disables automatic activation of the #NMDevice.
     * @param autoconnect %TRUE to enable autoconnecting
     */
    setAutoconnect(autoconnect: boolean): void
    /**
     * Enables or disables management of  #NMDevice by NetworkManager.
     * @param managed %TRUE to make the device managed by NetworkManager.
     */
    setManaged(managed: boolean): void

    // Own virtual methods of NMClient-1.0.NMClient.Device

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
     * @virtual 
     * @param connection an #NMConnection to validate against `device`
     * @returns %TRUE if the connection may be activated with this device, %FALSE if is incompatible with the device's capabilities and characteristics.
     */
    connectionCompatible(connection: NetworkManager.Connection): boolean
    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the (primary) #NMSetting subtype associated with connections
     * that can be used on `device`.
     * @virtual 
     * @returns @device's associated #NMSetting type
     */
    getSettingType(): GObject.GType
    /**
     * Gets a (non-localized) description of the type of device that
     * `device` is.
     * @virtual 
     * @returns the type description of the device. This is the internal string used by the device, and must not be modified.
     */
    getTypeDescription(): string | null
    stateChanged(newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason): void

    // Own signals of NMClient-1.0.NMClient.Device

    connect(sigName: "state-changed", callback: Device.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Device.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: Device.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: Device.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", oldState: number, reason: number, ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.Device

    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class Device extends Object {

    // Own properties of NMClient-1.0.NMClient.Device

    static name: string

    // Constructors of NMClient-1.0.NMClient.Device

    constructor(config?: Device.ConstructorProperties) 
    /**
     * Creates a new #NMDevice.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDevice.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): Device
    _init(config?: Device.ConstructorProperties): void
    /**
     * Generates a list of short-ish unique presentation names for the
     * devices in `devices`.
     * @param devices an array of #NMDevice
     * @returns the device names
     */
    static disambiguateNames(devices: Device[]): string[]
}

export module DeviceAdsl {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceAdsl extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceAdsl

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceAdsl

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceAdsl

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean

    // Class property signals of NMClient-1.0.NMClient.DeviceAdsl

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceAdsl extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceAdsl

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceAdsl

    constructor(config?: DeviceAdsl.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceAdsl.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceAdsl.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceAdsl
    _init(config?: DeviceAdsl.ConstructorProperties): void
}

export module DeviceBond {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceBond extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceBond

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The devices (#NMDevice) enslaved to the bond device.
     */
    readonly slaves: any
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceBond

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceBond

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the hardware (MAC) address of the #NMDeviceBond
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    getSlaves(): Device[]

    // Class property signals of NMClient-1.0.NMClient.DeviceBond

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::slaves", callback: (...args: any[]) => void): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slaves", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceBond extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceBond

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceBond

    constructor(config?: DeviceBond.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceBond.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceBond.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceBond
    _init(config?: DeviceBond.ConstructorProperties): void
}

export module DeviceBridge {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceBridge extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceBridge

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The devices (#NMDevice) enslaved to the bridge device.
     */
    readonly slaves: any
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceBridge

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceBridge

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the hardware (MAC) address of the #NMDeviceBridge
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    getSlaves(): Device[]

    // Class property signals of NMClient-1.0.NMClient.DeviceBridge

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::slaves", callback: (...args: any[]) => void): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slaves", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceBridge extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceBridge

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceBridge

    constructor(config?: DeviceBridge.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceBridge.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceBridge.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceBridge
    _init(config?: DeviceBridge.ConstructorProperties): void
}

export module DeviceBt {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceBt extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceBt

    /**
     * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
     */
    readonly btCapabilities: number
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The name of the bluetooth device.
     */
    readonly name: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceBt

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceBt

    /**
     * Returns the Bluetooth device's usable capabilities.
     * @returns a combination of #NMBluetoothCapabilities
     */
    getCapabilities(): NetworkManager.BluetoothCapabilities

    // Overloads of getCapabilities

    /**
     * Gets the device' capabilities.
     * @returns the capabilities
     */
    getCapabilities(): NetworkManager.DeviceCapabilities
    /**
     * Gets the hardware (MAC) address of the #NMDeviceBt
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the name of the #NMDeviceBt.
     * @returns the name of the device
     */
    getName(): string | null

    // Class property signals of NMClient-1.0.NMClient.DeviceBt

    connect(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bt-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bt-capabilities", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceBt extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceBt

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceBt

    constructor(config?: DeviceBt.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceBt.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceBt.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceBt
    _init(config?: DeviceBt.ConstructorProperties): void
}

export module DeviceEthernet {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceEthernet extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceEthernet

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The active hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The permanent hardware (MAC) address of the device.
     */
    readonly permHwAddress: string | null
    /**
     * The speed of the device.
     */
    readonly speed: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceEthernet

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceEthernet

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the active hardware (MAC) address of the #NMDeviceEthernet
     * @returns the active hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the permanent hardware (MAC) address of the #NMDeviceEthernet
     * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
     */
    getPermanentHwAddress(): string | null
    /**
     * Gets the speed of the #NMDeviceEthernet in Mbit/s.
     * @returns the speed of the device in Mbit/s
     */
    getSpeed(): number

    // Class property signals of NMClient-1.0.NMClient.DeviceEthernet

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::perm-hw-address", ...args: any[]): void
    connect(sigName: "notify::speed", callback: (...args: any[]) => void): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceEthernet extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceEthernet

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceEthernet

    constructor(config?: DeviceEthernet.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceEthernet.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceEthernet.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceEthernet
    _init(config?: DeviceEthernet.ConstructorProperties): void
}

export module DeviceGeneric {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceGeneric extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceGeneric

    /**
     * The hardware address of the device.
     */
    readonly hwAddress: string | null
    /**
     * A description of the specific type of device this is, or %NULL
     * if not known.
     */
    readonly typeDescription: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceGeneric

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceGeneric

    /**
     * Gets the hardware address of the #NMDeviceGeneric
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Class property signals of NMClient-1.0.NMClient.DeviceGeneric

    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::type-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::type-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type-description", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceGeneric extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceGeneric

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceGeneric

    constructor(config?: DeviceGeneric.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceGeneric.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceGeneric.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceGeneric
    _init(config?: DeviceGeneric.ConstructorProperties): void
}

export module DeviceInfiniband {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceInfiniband extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceInfiniband

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceInfiniband

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceInfiniband

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the hardware (MAC) address of the #NMDeviceInfiniband
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Class property signals of NMClient-1.0.NMClient.DeviceInfiniband

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceInfiniband extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceInfiniband

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceInfiniband

    constructor(config?: DeviceInfiniband.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceInfiniband.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceInfiniband.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceInfiniband
    _init(config?: DeviceInfiniband.ConstructorProperties): void
}

export module DeviceModem {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceModem extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceModem

    /**
     * The generic family of access technologies the modem currently supports
     * without a firmware reload or reinitialization.
     */
    readonly currentCapabilities: number
    /**
     * The generic family of access technologies the modem supports.  Not all
     * capabilities are available at the same time however; some modems require
     * a firmware reload or other reinitialization to switch between eg
     * CDMA/EVDO and GSM/UMTS.
     */
    readonly modemCapabilities: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceModem

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceModem

    /**
     * Returns a bitfield of the generic access technology families the modem
     * supports without a firmware reload or reinitialization.  This value
     * represents the network types the modem can immediately connect to.
     * @returns the generic access technology families the modem supports without a firmware reload or other reinitialization
     */
    getCurrentCapabilities(): NetworkManager.DeviceModemCapabilities
    /**
     * Returns a bitfield of the generic access technology families the modem
     * supports.  Not all capabilities are available concurrently however; some
     * may require a firmware reload or reinitialization.
     * @returns the generic access technology families the modem supports
     */
    getModemCapabilities(): NetworkManager.DeviceModemCapabilities

    // Class property signals of NMClient-1.0.NMClient.DeviceModem

    connect(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-capabilities", ...args: any[]): void
    connect(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modem-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modem-capabilities", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceModem extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceModem

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceModem

    constructor(config?: DeviceModem.ConstructorProperties) 
    _init(config?: DeviceModem.ConstructorProperties): void
}

export module DeviceOlpcMesh {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceOlpcMesh extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceOlpcMesh

    /**
     * The device's active channel.
     */
    readonly activeChannel: number
    /**
     * The companion device.
     */
    readonly companion: DeviceWifi
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceOlpcMesh

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceOlpcMesh

    /**
     * Returns the active channel of the #NMDeviceOlpcMesh device.
     * @returns active channel of the device
     */
    getActiveChannel(): number
    /**
     * Gets the companion device of the #NMDeviceOlpcMesh.
     * @returns the companion of the device of %NULL
     */
    getCompanion(): DeviceWifi
    /**
     * Gets the hardware (MAC) address of the #NMDeviceOlpcMesh
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Class property signals of NMClient-1.0.NMClient.DeviceOlpcMesh

    connect(sigName: "notify::active-channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-channel", ...args: any[]): void
    connect(sigName: "notify::companion", callback: (...args: any[]) => void): number
    on(sigName: "notify::companion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::companion", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::companion", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::companion", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceOlpcMesh extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceOlpcMesh

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceOlpcMesh

    constructor(config?: DeviceOlpcMesh.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceOlpcMesh.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new OlpcMesh device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceOlpcMesh.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new OlpcMesh device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceOlpcMesh
    _init(config?: DeviceOlpcMesh.ConstructorProperties): void
}

export module DeviceTeam {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceTeam extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceTeam

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The devices (#NMDevice) enslaved to the team device.
     */
    readonly slaves: any
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceTeam

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceTeam

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the hardware (MAC) address of the #NMDeviceTeam
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the devices currently enslaved to `device`.
     * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
     */
    getSlaves(): Device[]

    // Class property signals of NMClient-1.0.NMClient.DeviceTeam

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::slaves", callback: (...args: any[]) => void): number
    on(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slaves", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slaves", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slaves", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceTeam extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceTeam

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceTeam

    constructor(config?: DeviceTeam.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceTeam.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceTeam.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceTeam
    _init(config?: DeviceTeam.ConstructorProperties): void
}

export module DeviceVlan {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceVlan extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceVlan

    /**
     * Whether the device has carrier.
     */
    readonly carrier: boolean
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The device's VLAN ID.
     */
    readonly vlanId: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceVlan

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceVlan

    /**
     * Whether the device has carrier.
     * @returns %TRUE if the device has carrier
     */
    getCarrier(): boolean
    /**
     * Gets the hardware (MAC) address of the #NMDeviceVlan
     * @returns the hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    getParent(): Device
    getVlanId(): number

    // Class property signals of NMClient-1.0.NMClient.DeviceVlan

    connect(sigName: "notify::carrier", callback: (...args: any[]) => void): number
    on(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::carrier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::carrier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::carrier", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::vlan-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::vlan-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vlan-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vlan-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vlan-id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceVlan extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceVlan

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceVlan

    constructor(config?: DeviceVlan.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceVlan.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceVlan.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceVlan
    _init(config?: DeviceVlan.ConstructorProperties): void
}

export module DeviceWifi {

    // Signal callback interfaces

    /**
     * Signal callback interface for `access-point-added`
     */
    export interface AccessPointAddedSignalCallback {
        (ap: GObject.Object): void
    }

    /**
     * Signal callback interface for `access-point-removed`
     */
    export interface AccessPointRemovedSignalCallback {
        (ap: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceWifi extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceWifi

    /**
     * List of all Wi-Fi access points the device can see.
     */
    readonly accessPoints: any
    /**
     * The active #NMAccessPoint of the device.
     */
    readonly activeAccessPoint: AccessPoint
    /**
     * The bit rate of the device in kbit/s.
     */
    readonly bitrate: number
    /**
     * The hardware (MAC) address of the device.
     */
    readonly hwAddress: string | null
    /**
     * The mode of the device.
     */
    readonly mode: number
    /**
     * The hardware (MAC) address of the device.
     */
    readonly permHwAddress: string | null
    /**
     * The wireless capabilities of the device.
     */
    readonly wirelessCapabilities: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceWifi

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceWifi

    /**
     * Gets a #NMAccessPoint by path.
     * @param path the object path of the access point
     * @returns the access point or %NULL if none is found.
     */
    getAccessPointByPath(path: string | null): AccessPoint
    /**
     * Gets all the scanned access points of the #NMDeviceWifi.
     * @returns a #GPtrArray containing all the scanned #NMAccessPoints. The returned array is owned by the client and should not be modified.
     */
    getAccessPoints(): AccessPoint[]
    /**
     * Gets the active #NMAccessPoint.
     * @returns the access point or %NULL if none is active
     */
    getActiveAccessPoint(): AccessPoint
    /**
     * Gets the bit rate of the #NMDeviceWifi in kbit/s.
     * @returns the bit rate (kbit/s)
     */
    getBitrate(): number
    /**
     * Gets the Wi-Fi capabilities of the #NMDeviceWifi.
     * @returns the capabilities
     */
    getCapabilities(): NetworkManager.DeviceWifiCapabilities

    // Overloads of getCapabilities

    /**
     * Gets the device' capabilities.
     * @returns the capabilities
     */
    getCapabilities(): NetworkManager.DeviceCapabilities
    /**
     * Gets the actual hardware (MAC) address of the #NMDeviceWifi
     * @returns the actual hardware address. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets the #NMDeviceWifi mode.
     * @returns the mode
     */
    getMode(): NetworkManager.TODO_80211Mode
    /**
     * Gets the permanent hardware (MAC) address of the #NMDeviceWifi
     * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
     */
    getPermanentHwAddress(): string | null
    /**
     * Request NM to scan for access points on the #NMDeviceWifi. This function only
     * instructs NM to perform scanning. Use nm_device_wifi_get_access_points()
     * to get available access points.
     * @param callback the function to call when the call is done
     */
    requestScanSimple(callback: DeviceWifiRequestScanFn | null): void

    // Own virtual methods of NMClient-1.0.NMClient.DeviceWifi

    accessPointAdded(ap: AccessPoint): void
    accessPointRemoved(ap: AccessPoint): void

    // Own signals of NMClient-1.0.NMClient.DeviceWifi

    connect(sigName: "access-point-added", callback: DeviceWifi.AccessPointAddedSignalCallback): number
    on(sigName: "access-point-added", callback: DeviceWifi.AccessPointAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-point-added", callback: DeviceWifi.AccessPointAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-point-added", callback: DeviceWifi.AccessPointAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "access-point-added", ...args: any[]): void
    connect(sigName: "access-point-removed", callback: DeviceWifi.AccessPointRemovedSignalCallback): number
    on(sigName: "access-point-removed", callback: DeviceWifi.AccessPointRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "access-point-removed", callback: DeviceWifi.AccessPointRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "access-point-removed", callback: DeviceWifi.AccessPointRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "access-point-removed", ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.DeviceWifi

    connect(sigName: "notify::access-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::access-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::access-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::access-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::access-points", ...args: any[]): void
    connect(sigName: "notify::active-access-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-access-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-access-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-access-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-access-point", ...args: any[]): void
    connect(sigName: "notify::bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bitrate", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::perm-hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::perm-hw-address", ...args: any[]): void
    connect(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wireless-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wireless-capabilities", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceWifi extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceWifi

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceWifi

    constructor(config?: DeviceWifi.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceWifi.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new Wi-Fi device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceWifi.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the device
     * @returns a new Wi-Fi device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceWifi
    _init(config?: DeviceWifi.ConstructorProperties): void
}

export module DeviceWimax {

    // Signal callback interfaces

    /**
     * Signal callback interface for `nsp-added`
     */
    export interface NspAddedSignalCallback {
        (nsp: GObject.Object): void
    }

    /**
     * Signal callback interface for `nsp-removed`
     */
    export interface NspRemovedSignalCallback {
        (nsp: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Device.ConstructorProperties {
    }

}

export interface DeviceWimax extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.DeviceWimax

    /**
     * The active #NMWimaxNsp of the device.
     */
    readonly activeNsp: WimaxNsp
    /**
     * The ID of the serving base station as received from the network.  Has
     * no meaning when the device is not connected.
     */
    readonly bsid: string | null
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
    readonly hwAddress: string | null
    /**
     * List of all WiMAX Network Service Providers the device can see.
     */
    readonly nsps: any
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
    readonly txPower: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.DeviceWimax

    parent: Device & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.DeviceWimax

    /**
     * Gets the active #NMWimaxNsp.
     * @returns the access point or %NULL if none is active
     */
    getActiveNsp(): WimaxNsp
    /**
     * Gets the ID of the serving Base Station when the device is connected.
     * @returns the ID of the serving Base Station, or %NULL
     */
    getBsid(): string | null
    /**
     * Gets the center frequency (in KHz) of the radio channel the device is using
     * to communicate with the network when connected.  Has no meaning when the
     * device is not connected.
     * @returns the center frequency in KHz, or 0
     */
    getCenterFrequency(): number
    /**
     * Gets the CINR (Carrier to Interference + Noise Ratio) of the current radio
     * link in dB.  CINR is a more accurate measure of radio link quality.  Has no
     * meaning when the device is not connected.
     * @returns the CINR in dB, or 0
     */
    getCinr(): number
    /**
     * Gets the hardware (MAC) address of the #NMDeviceWimax
     * @returns the hardware address. This is the internal string used by the          device, and must not be modified.
     */
    getHwAddress(): string | null

    // Overloads of getHwAddress

    /**
     * Gets the current a hardware address (MAC) for the `device`.
     * @virtual 
     * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
     */
    getHwAddress(): string | null
    /**
     * Gets a #NMWimaxNsp by path.
     * @param path the object path of the NSP
     * @returns the access point or %NULL if none is found.
     */
    getNspByPath(path: string | null): WimaxNsp
    /**
     * Gets all the scanned NSPs of the #NMDeviceWimax.
     * @returns a #GPtrArray containing          all the scanned #NMWimaxNsps. The returned array is owned by the client and should not be modified.
     */
    getNsps(): WimaxNsp[]
    /**
     * Gets the RSSI of the current radio link in dBm.  This value indicates how
     * strong the raw received RF signal from the base station is, but does not
     * indicate the overall quality of the radio link.  Has no meaning when the
     * device is not connected.
     * @returns the RSSI in dBm, or 0
     */
    getRssi(): number
    /**
     * Average power of the last burst transmitted by the device, in units of
     * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
     * -5.5 dBm.  Has no meaning when the device is not connected.
     * @returns the TX power in dBm, or 0
     */
    getTxPower(): number

    // Own virtual methods of NMClient-1.0.NMClient.DeviceWimax

    nspAdded(nsp: WimaxNsp): void
    nspRemoved(nsp: WimaxNsp): void

    // Own signals of NMClient-1.0.NMClient.DeviceWimax

    connect(sigName: "nsp-added", callback: DeviceWimax.NspAddedSignalCallback): number
    on(sigName: "nsp-added", callback: DeviceWimax.NspAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "nsp-added", callback: DeviceWimax.NspAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "nsp-added", callback: DeviceWimax.NspAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "nsp-added", ...args: any[]): void
    connect(sigName: "nsp-removed", callback: DeviceWimax.NspRemovedSignalCallback): number
    on(sigName: "nsp-removed", callback: DeviceWimax.NspRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "nsp-removed", callback: DeviceWimax.NspRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "nsp-removed", callback: DeviceWimax.NspRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "nsp-removed", ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.DeviceWimax

    connect(sigName: "notify::active-nsp", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-nsp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-nsp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-nsp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-nsp", ...args: any[]): void
    connect(sigName: "notify::bsid", callback: (...args: any[]) => void): number
    on(sigName: "notify::bsid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bsid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bsid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bsid", ...args: any[]): void
    connect(sigName: "notify::center-frequency", callback: (...args: any[]) => void): number
    on(sigName: "notify::center-frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::center-frequency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::center-frequency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::center-frequency", ...args: any[]): void
    connect(sigName: "notify::cinr", callback: (...args: any[]) => void): number
    on(sigName: "notify::cinr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cinr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cinr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cinr", ...args: any[]): void
    connect(sigName: "notify::hw-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hw-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hw-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hw-address", ...args: any[]): void
    connect(sigName: "notify::nsps", callback: (...args: any[]) => void): number
    on(sigName: "notify::nsps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nsps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nsps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nsps", ...args: any[]): void
    connect(sigName: "notify::rssi", callback: (...args: any[]) => void): number
    on(sigName: "notify::rssi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rssi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rssi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rssi", ...args: any[]): void
    connect(sigName: "notify::tx-power", callback: (...args: any[]) => void): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tx-power", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-connection", ...args: any[]): void
    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::available-connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::available-connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::available-connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::available-connections", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::device-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-type", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::driver", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver", ...args: any[]): void
    connect(sigName: "notify::driver-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::driver-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::driver-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::driver-version", ...args: any[]): void
    connect(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-missing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-missing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-missing", ...args: any[]): void
    connect(sigName: "notify::firmware-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::firmware-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::firmware-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::firmware-version", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::ip-interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip-interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip-interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip-interface", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical-port-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical-port-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical-port-id", ...args: any[]): void
    connect(sigName: "notify::product", callback: (...args: any[]) => void): number
    on(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product", ...args: any[]): void
    connect(sigName: "notify::real", callback: (...args: any[]) => void): number
    on(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::real", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::real", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::real", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::udi", callback: (...args: any[]) => void): number
    on(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udi", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class DeviceWimax extends Device {

    // Own properties of NMClient-1.0.NMClient.DeviceWimax

    static name: string

    // Constructors of NMClient-1.0.NMClient.DeviceWimax

    constructor(config?: DeviceWimax.ConstructorProperties) 
    /**
     * Creates a new #NMDeviceWimax.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the D-Bus object path of the WiMAX device
     * @returns a new WiMAX device
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMDeviceWimax.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the D-Bus object path of the WiMAX device
     * @returns a new WiMAX device
     */
    static new(connection: DBusGLib.Connection, path: string | null): DeviceWimax
    _init(config?: DeviceWimax.ConstructorProperties): void
}

export module IP4Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface IP4Config extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.IP4Config

    /**
     * The #GPtrArray containing #NMIP4Address<!-- -->es of the configuration.
     */
    readonly addresses: any
    /**
     * The #GPtrArray containing domain strings of the configuration.
     */
    readonly domains: any
    /**
     * The IP4 gateway address of the configuration as string.
     */
    readonly gateway: string | null
    /**
     * The #GArray containing name servers (#guint32s) of the configuration.
     */
    readonly nameservers: any
    /**
     * The #GPtrArray containing #NMSettingIP4Route<!-- -->s of the configuration.
     */
    readonly routes: any
    /**
     * The #GPtrArray containing dns search strings of the configuration.
     */
    readonly searches: any
    /**
     * The #GArray containing WINS servers (#guint32s) of the configuration.
     */
    readonly winsServers: any
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.IP4Config

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.IP4Config

    /**
     * Gets the IP4 addresses (containing the address, prefix, and gateway).
     * @returns the #GSList containing #NMIP4Address<!-- -->es. This is the internal copy used by the configuration and must not be modified.
     */
    getAddresses(): NetworkManager.IP4Address[]
    /**
     * Gets the domain names.
     * @returns the #GPtrArray containing domains as strings. This is the internal copy used by the configuration, and must not be modified.
     */
    getDomains(): string[]
    /**
     * Gets the IP4 gateway address.
     * @returns the IP4 address of the gateway.
     */
    getGateway(): string | null
    /**
     * Gets the domain name servers (DNS).
     * @returns the #GArray containing #guint32s. This is the internal copy used by the configuration and must not be modified.
     */
    getNameservers(): number[]
    /**
     * Gets the routes.
     * @returns the #GSList containing #NMIP4Route<!-- -->s. This is the internal copy used by the configuration, and must not be modified.
     */
    getRoutes(): NetworkManager.IP4Route[]
    /**
     * Gets the dns searches.
     * @returns the #GPtrArray containing dns searches as strings. This is the internal copy used by the configuration, and must not be modified.
     */
    getSearches(): string[]
    /**
     * Gets the Windows Internet Name Service servers (WINS).
     * @returns the #GArray containing #guint32s. This is the internal copy used by the configuration and must not be modified.
     */
    getWinsServers(): number[]

    // Class property signals of NMClient-1.0.NMClient.IP4Config

    connect(sigName: "notify::addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::addresses", ...args: any[]): void
    connect(sigName: "notify::domains", callback: (...args: any[]) => void): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domains", ...args: any[]): void
    connect(sigName: "notify::gateway", callback: (...args: any[]) => void): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gateway", ...args: any[]): void
    connect(sigName: "notify::nameservers", callback: (...args: any[]) => void): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nameservers", ...args: any[]): void
    connect(sigName: "notify::routes", callback: (...args: any[]) => void): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::routes", ...args: any[]): void
    connect(sigName: "notify::searches", callback: (...args: any[]) => void): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::searches", ...args: any[]): void
    connect(sigName: "notify::wins-servers", callback: (...args: any[]) => void): number
    on(sigName: "notify::wins-servers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wins-servers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wins-servers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wins-servers", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IP4Config extends Object {

    // Own properties of NMClient-1.0.NMClient.IP4Config

    static name: string

    // Constructors of NMClient-1.0.NMClient.IP4Config

    constructor(config?: IP4Config.ConstructorProperties) 
    /**
     * Creates a new #NMIP4Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new IP4 configuration
     */
    constructor(connection: DBusGLib.Connection, objectPath: string | null) 
    /**
     * Creates a new #NMIP4Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new IP4 configuration
     */
    static new(connection: DBusGLib.Connection, objectPath: string | null): IP4Config
    _init(config?: IP4Config.ConstructorProperties): void
}

export module IP6Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface IP6Config extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.IP6Config

    /**
     * The #GPtrArray containing the IPv6 addresses;  use
     * nm_utils_ip6_addresses_from_gvalue() to return a #GSList of
     * #NMSettingIP6Address objects that is more usable than the raw data.
     */
    readonly addresses: any
    /**
     * The #GPtrArray containing domain strings of the configuration.
     */
    readonly domains: any
    /**
     * The IPv6 gateway as string
     */
    readonly gateway: string | null
    /**
     * The #GPtrArray containing elements of type 'struct ip6_addr' which
     * contain the addresses of nameservers of the configuration.
     */
    readonly nameservers: any
    /**
     * The #GPtrArray containing the IPv6 routes;  use
     * nm_utils_ip6_routes_from_gvalue() to return a #GSList of
     * #NMSettingIP6Address objects that is more usable than the raw data.
     */
    readonly routes: any
    /**
     * The #GPtrArray containing dns search strings of the configuration.
     */
    readonly searches: any
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.IP6Config

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.IP6Config

    /**
     * Gets the IP6 addresses (containing the address, prefix, and gateway).
     * @returns the #GSList containing #NMIP6Address<!-- -->es. This is the internal copy used by the configuration and must not be modified.
     */
    getAddresses(): NetworkManager.IP6Address[]
    /**
     * Gets the domain names.
     * @returns the #GPtrArray containing domains as strings. This is the internal copy used by the configuration, and must not be modified.
     */
    getDomains(): string[]
    /**
     * Gets the IP6 gateway.
     * @returns the IPv6 gateway of the configuration.
     */
    getGateway(): string | null
    /**
     * Gets the domain name server at index `idx` in the configuration.
     * @param idx index of the nameserver to return
     * @returns           the IPv6 address of domain name server at index @iidx
     */
    getNameserver(idx: number): Uint8Array
    /**
     * Gets the number of the domain name servers in the configuration.
     * @returns the number of domain name servers
     */
    getNumNameservers(): number
    /**
     * Gets the routes.
     * @returns the #GSList containing #NMIP6Route<!-- -->s. This is the internal copy used by the configuration, and must not be modified.
     */
    getRoutes(): NetworkManager.IP6Route[]
    /**
     * Gets the dns searches.
     * @returns the #GPtrArray containing dns searches as strings. This is the internal copy used by the configuration, and must not be modified.
     */
    getSearches(): string[]

    // Class property signals of NMClient-1.0.NMClient.IP6Config

    connect(sigName: "notify::addresses", callback: (...args: any[]) => void): number
    on(sigName: "notify::addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::addresses", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::addresses", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::addresses", ...args: any[]): void
    connect(sigName: "notify::domains", callback: (...args: any[]) => void): number
    on(sigName: "notify::domains", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domains", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domains", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domains", ...args: any[]): void
    connect(sigName: "notify::gateway", callback: (...args: any[]) => void): number
    on(sigName: "notify::gateway", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gateway", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gateway", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gateway", ...args: any[]): void
    connect(sigName: "notify::nameservers", callback: (...args: any[]) => void): number
    on(sigName: "notify::nameservers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nameservers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nameservers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nameservers", ...args: any[]): void
    connect(sigName: "notify::routes", callback: (...args: any[]) => void): number
    on(sigName: "notify::routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::routes", ...args: any[]): void
    connect(sigName: "notify::searches", callback: (...args: any[]) => void): number
    on(sigName: "notify::searches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::searches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::searches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::searches", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class IP6Config extends Object {

    // Own properties of NMClient-1.0.NMClient.IP6Config

    static name: string

    // Constructors of NMClient-1.0.NMClient.IP6Config

    constructor(config?: IP6Config.ConstructorProperties) 
    /**
     * Creates a new #NMIP6Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new IP6 configuration
     */
    constructor(connection: DBusGLib.Connection, objectPath: string | null) 
    /**
     * Creates a new #NMIP6Config.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param objectPath the DBus object path of the device
     * @returns a new IP6 configuration
     */
    static new(connection: DBusGLib.Connection, objectPath: string | null): IP6Config
    _init(config?: IP6Config.ConstructorProperties): void
}

export module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `object-creation-failed`
     */
    export interface ObjectCreationFailedSignalCallback {
        (error: any | null, failedPath: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of NMClient-1.0.NMClient.Object

        dbusPath?: string | null
    }

}

export interface Object extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.Object

    readonly dbusPath: string | null
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.Object

    parent: GObject.Object

    // Owm methods of NMClient-1.0.NMClient.Object

    /**
     * Gets the #NMObject's DBusGConnection.
     * @returns the connection
     */
    getConnection(): DBusGLib.Connection
    /**
     * Gets the DBus path of the #NMObject.
     * @returns the object's path. This is the internal string used by the device, and must not be modified.
     */
    getPath(): string | null

    // Own virtual methods of NMClient-1.0.NMClient.Object

    objectCreationFailed(error: GLib.Error, failedPath: string | null): void

    // Own signals of NMClient-1.0.NMClient.Object

    connect(sigName: "object-creation-failed", callback: Object.ObjectCreationFailedSignalCallback): number
    on(sigName: "object-creation-failed", callback: Object.ObjectCreationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "object-creation-failed", callback: Object.ObjectCreationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "object-creation-failed", callback: Object.ObjectCreationFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "object-creation-failed", failedPath: any | null, ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.Object

    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
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
}

export class Object extends GObject.Object {

    // Own properties of NMClient-1.0.NMClient.Object

    static name: string

    // Constructors of NMClient-1.0.NMClient.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module RemoteConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `visible`
     */
    export interface VisibleSignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, NetworkManager.Connection.ConstructorProperties {

        // Own constructor properties of NMClient-1.0.NMClient.RemoteConnection

        dbusPath?: string | null
    }

}

export interface RemoteConnection extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.RemoteConnection

    readonly dbusPath: string | null
    /**
     * %TRUE if the remote connection contains changes that have not been saved
     * to disk, %FALSE if the connection is the same as its on-disk representation.
     */
    readonly unsaved: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.RemoteConnection

    parent: NetworkManager.Connection & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.RemoteConnection

    /**
     * Send any local changes to the settings and properties of this connection to
     * NetworkManager, which will immediately save them to disk.
     * @param callback a function to be called when the commit completes
     */
    commitChanges(callback: RemoteConnectionResultFunc | null): void
    /**
     * Send any local changes to the settings and properties of this connection to
     * NetworkManager.  The changes are not saved to disk until either
     * nm_remote_connection_save() or nm_remote_connection_commit_changes() is
     * called.
     * @param callback a function to be called when the commit completes
     */
    commitChangesUnsaved(callback: RemoteConnectionResultFunc | null): void
    /**
     * Delete the connection.
     * @param callback a function to be called when the delete completes
     */
    delete(callback: RemoteConnectionResultFunc | null): void
    /**
     * Request the connection's secrets.
     * @param settingName the #NMSetting object name to get secrets for
     * @param callback a function to be called when the update completes; must not be %NULL
     */
    getSecrets(settingName: string | null, callback: RemoteConnectionGetSecretsFunc): void
    getUnsaved(): boolean
    /**
     * Saves the connection to disk if the connection has changes that have not yet
     * been written to disk, or if the connection has never been saved.
     * @param callback a function to be called when the save completes
     */
    save(callback: RemoteConnectionResultFunc | null): void

    // Own virtual methods of NMClient-1.0.NMClient.RemoteConnection

    removed(): void
    updated(newSettings: GLib.HashTable): void

    // Own signals of NMClient-1.0.NMClient.RemoteConnection

    connect(sigName: "removed", callback: RemoteConnection.RemovedSignalCallback): number
    on(sigName: "removed", callback: RemoteConnection.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: RemoteConnection.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: RemoteConnection.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "updated", callback: RemoteConnection.UpdatedSignalCallback): number
    on(sigName: "updated", callback: RemoteConnection.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "updated", callback: RemoteConnection.UpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "updated", callback: RemoteConnection.UpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "updated", ...args: any[]): void
    connect(sigName: "visible", callback: RemoteConnection.VisibleSignalCallback): number
    on(sigName: "visible", callback: RemoteConnection.VisibleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visible", callback: RemoteConnection.VisibleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visible", callback: RemoteConnection.VisibleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "visible", ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.RemoteConnection

    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: "notify::unsaved", callback: (...args: any[]) => void): number
    on(sigName: "notify::unsaved", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unsaved", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unsaved", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unsaved", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RemoteConnection extends NetworkManager.Connection {

    // Own properties of NMClient-1.0.NMClient.RemoteConnection

    static name: string

    // Constructors of NMClient-1.0.NMClient.RemoteConnection

    constructor(config?: RemoteConnection.ConstructorProperties) 
    /**
     * Creates a new object representing the remote connection.
     * @constructor 
     * @param bus a valid and connected D-Bus connection
     * @param path the D-Bus path of the connection as exported by the settings service
     * @returns the new remote connection object on success, or %NULL on failure
     */
    constructor(bus: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new object representing the remote connection.
     * @constructor 
     * @param bus a valid and connected D-Bus connection
     * @param path the D-Bus path of the connection as exported by the settings service
     * @returns the new remote connection object on success, or %NULL on failure
     */
    static new(bus: DBusGLib.Connection, path: string | null): RemoteConnection

    // Overloads of new

    /**
     * Creates a new #NMConnection object with no #NMSetting objects.
     * @constructor 
     * @returns the new empty #NMConnection object
     */
    static new(): NetworkManager.Connection
    _init(config?: RemoteConnection.ConstructorProperties): void
}

export module RemoteSettings {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connections-read`
     */
    export interface ConnectionsReadSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `new-connection`
     */
    export interface NewConnectionSignalCallback {
        (object: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface RemoteSettings extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.RemoteSettings

    /**
     * If %TRUE, adding and modifying connections is supported.
     */
    readonly canModify: boolean
    /**
     * The machine hostname stored in persistent configuration. This can be
     * modified by calling nm_remote_settings_save_hostname().
     */
    readonly hostname: string | null
    /**
     * Whether the settings service is running.
     */
    readonly serviceRunning: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.RemoteSettings

    parent: GObject.Object

    // Owm methods of NMClient-1.0.NMClient.RemoteSettings

    /**
     * Requests that the remote settings service add the given settings to a new
     * connection.  The connection is immediately written to disk.  `connection` is
     * untouched by this function and only serves as a template of the settings to
     * add.  The #NMRemoteConnection object that represents what NetworkManager
     * actually added is returned to `callback` when the addition operation is complete.
     * 
     * Note that the #NMRemoteConnection returned in `callback` may not contain
     * identical settings to `connection` as NetworkManager may perform automatic
     * completion and/or normalization of connection properties.
     * @param connection the connection to add. Note that this object's settings will be   added, not the object itself
     * @param callback callback to be called when the add operation completes
     * @returns %TRUE if the request was successful, %FALSE if it failed
     */
    addConnection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    /**
     * Requests that the remote settings service add the given settings to a new
     * connection.  The connection is not written to disk, which may be done at
     * a later time by calling the connection's nm_remote_connection_commit_changes()
     * method.
     * @param connection the connection to add. Note that this object's settings will be   added, not the object itself
     * @param callback callback to be called when the add operation completes
     * @returns %TRUE if the request was successful, %FALSE if it failed
     */
    addConnectionUnsaved(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean
    /**
     * Returns the first matching %NMRemoteConnection matching a given `id`.
     * @param id the id of the remote connection
     * @returns the remote connection object on success, or %NULL if no  matching object was found.
     */
    getConnectionById(id: string | null): RemoteConnection
    /**
     * Returns the %NMRemoteConnection representing the connection at `path`.
     * @param path the D-Bus object path of the remote connection
     * @returns the remote connection object on success, or %NULL if the object was  not known
     */
    getConnectionByPath(path: string | null): RemoteConnection
    /**
     * Returns the %NMRemoteConnection identified by `uuid`.
     * @param uuid the UUID of the remote connection
     * @returns the remote connection object on success, or %NULL if the object was  not known
     */
    getConnectionByUuid(uuid: string | null): RemoteConnection
    listConnections(): RemoteConnection[]
    /**
     * Requests that the remote settings service load or reload the given files,
     * adding or updating the connections described within.
     * 
     * The changes to the indicated files will not yet be reflected in
     * `settings'`s connections array when the function returns.
     * 
     * If all of the indicated files were successfully loaded, the
     * function will return %TRUE, and `failures` will be set to %NULL. If
     * NetworkManager tried to load the files, but some (or all) failed,
     * then `failures` will be set to a %NULL-terminated array of the
     * filenames that failed to load.
     * @param filenames %NULL-terminated array of filenames to load
     * @returns %TRUE if NetworkManager at least tried to load @filenames, %FALSE if an error occurred (eg, permission denied).
     */
    loadConnections(filenames: string | null): [ /* returnType */ boolean, /* failures */ string | null ]
    /**
     * Requests that the remote settings service reload all connection
     * files from disk, adding, updating, and removing connections until
     * the in-memory state matches the on-disk state.
     * @returns %TRUE on success, %FALSE on failure
     */
    reloadConnections(): boolean
    /**
     * Requests that the machine's persistent hostname be set to the specified value
     * or cleared.
     * @param hostname the new persistent hostname to set, or %NULL to clear any existing  persistent hostname
     * @param callback callback to be called when the hostname operation completes
     * @returns %TRUE if the request was successful, %FALSE if it failed
     */
    saveHostname(hostname: string | null, callback: RemoteSettingsSaveHostnameFunc | null): boolean

    // Own virtual methods of NMClient-1.0.NMClient.RemoteSettings

    connectionsRead(): void
    newConnection(connection: RemoteConnection): void

    // Own signals of NMClient-1.0.NMClient.RemoteSettings

    connect(sigName: "connections-read", callback: RemoteSettings.ConnectionsReadSignalCallback): number
    on(sigName: "connections-read", callback: RemoteSettings.ConnectionsReadSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connections-read", callback: RemoteSettings.ConnectionsReadSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connections-read", callback: RemoteSettings.ConnectionsReadSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connections-read", ...args: any[]): void
    connect(sigName: "new-connection", callback: RemoteSettings.NewConnectionSignalCallback): number
    on(sigName: "new-connection", callback: RemoteSettings.NewConnectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: RemoteSettings.NewConnectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: RemoteSettings.NewConnectionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-connection", ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.RemoteSettings

    connect(sigName: "notify::can-modify", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-modify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-modify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-modify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-modify", ...args: any[]): void
    connect(sigName: "notify::hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hostname", ...args: any[]): void
    connect(sigName: "notify::service-running", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-running", ...args: any[]): void
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
}

export class RemoteSettings extends GObject.Object {

    // Own properties of NMClient-1.0.NMClient.RemoteSettings

    static name: string

    // Constructors of NMClient-1.0.NMClient.RemoteSettings

    constructor(config?: RemoteSettings.ConstructorProperties) 
    /**
     * Creates a new object representing the remote settings service.
     * 
     * Note that this will do blocking D-Bus calls to initialize the
     * settings object. You can use nm_remote_settings_new_async() if you
     * want to avoid that.
     * @constructor 
     * @param bus a valid and connected D-Bus connection
     * @returns the new remote settings object on success, or %NULL on failure
     */
    constructor(bus: DBusGLib.Connection | null) 
    /**
     * Creates a new object representing the remote settings service.
     * 
     * Note that this will do blocking D-Bus calls to initialize the
     * settings object. You can use nm_remote_settings_new_async() if you
     * want to avoid that.
     * @constructor 
     * @param bus a valid and connected D-Bus connection
     * @returns the new remote settings object on success, or %NULL on failure
     */
    static new(bus: DBusGLib.Connection | null): RemoteSettings
    /**
     * Gets the result of an nm_remote_settings_new_async() call.
     * @constructor 
     * @param result a #GAsyncResult
     * @returns a new #NMRemoteSettings object, or %NULL on error
     */
    static newFinish(result: Gio.AsyncResult): RemoteSettings
    _init(config?: RemoteSettings.ConstructorProperties): void
    /**
     * Creates a new object representing the remote settings service and
     * begins asynchronously initializing it. `callback` will be called
     * when it is done; use nm_remote_settings_new_finish() to get the
     * result.
     * @param bus a valid and connected D-Bus connection
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call when the settings object is created
     */
    static newAsync(bus: DBusGLib.Connection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module SecretAgent {

    // Signal callback interfaces

    /**
     * Signal callback interface for `registration-result`
     */
    export interface RegistrationResultSignalCallback {
        (error: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of NMClient-1.0.NMClient.SecretAgent

        /**
         * If TRUE, the agent will attempt to automatically register itself after
         * it is created (via an idle handler) and to re-register itself if
         * NetworkManager restarts.  If FALSE, the agent does not automatically
         * register with NetworkManager, and nm_secret_agent_register() must be
         * called.  If 'auto-register' is TRUE, calling nm_secret_agent_unregister()
         * will suppress auto-registration until nm_secret_agent_register() is
         * called, which re-enables auto-registration.
         */
        autoRegister?: boolean | null
        /**
         * A bitfield of %NMSecretAgentCapabilities.
         */
        capabilities?: SecretAgentCapabilities | null
        /**
         * Identifies this agent; only one agent in each user session may use the
         * same identifier.  Identifier formatting follows the same rules as
         * D-Bus bus names with the exception that the ':' character is not
         * allowed.  The valid set of characters is "[A-Z][a-z][0-9]_-." and the
         * identifier is limited in length to 255 characters with a minimum
         * of 3 characters.  An example valid identifier is 'org.gnome.nm-applet'
         * (without quotes).
         */
        identifier?: string | null
    }

}

export interface SecretAgent {

    // Own properties of NMClient-1.0.NMClient.SecretAgent

    /**
     * If TRUE, the agent will attempt to automatically register itself after
     * it is created (via an idle handler) and to re-register itself if
     * NetworkManager restarts.  If FALSE, the agent does not automatically
     * register with NetworkManager, and nm_secret_agent_register() must be
     * called.  If 'auto-register' is TRUE, calling nm_secret_agent_unregister()
     * will suppress auto-registration until nm_secret_agent_register() is
     * called, which re-enables auto-registration.
     */
    autoRegister: boolean
    /**
     * A bitfield of %NMSecretAgentCapabilities.
     */
    capabilities: SecretAgentCapabilities
    /**
     * Identifies this agent; only one agent in each user session may use the
     * same identifier.  Identifier formatting follows the same rules as
     * D-Bus bus names with the exception that the ':' character is not
     * allowed.  The valid set of characters is "[A-Z][a-z][0-9]_-." and the
     * identifier is limited in length to 255 characters with a minimum
     * of 3 characters.  An example valid identifier is 'org.gnome.nm-applet'
     * (without quotes).
     */
    readonly identifier: string | null
    /**
     * %TRUE if the agent is registered with NetworkManager, %FALSE if not.
     */
    readonly registered: boolean
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.SecretAgent

    parent: GObject.Object

    // Owm methods of NMClient-1.0.NMClient.SecretAgent

    // Has conflict: deleteSecrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc): void
    getRegistered(): boolean
    // Has conflict: getSecrets(connection: NetworkManager.Connection, settingName: string | null, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    /**
     * Registers the #NMSecretAgent with the NetworkManager secret manager,
     * indicating to NetworkManager that the agent is able to provide and save
     * secrets for connections on behalf of its user.  Registration is an
     * asynchronous operation and its success or failure is indicated via the
     * 'registration-result' signal.
     * @returns a new %TRUE if registration was successfully requested (this does not mean registration itself was successful), %FALSE if registration was not successfully requested.
     */
    register(): boolean
    // Has conflict: saveSecrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc): void
    /**
     * Unregisters the #NMSecretAgent with the NetworkManager secret manager,
     * indicating to NetworkManager that the agent is will no longer provide or
     * store secrets on behalf of this user.
     * @returns a new %TRUE if unregistration was successful, %FALSE if it was not.
     */
    unregister(): boolean

    // Own virtual methods of NMClient-1.0.NMClient.SecretAgent

    cancelGetSecrets(connectionPath: string | null, settingName: string | null): void
    /**
     * Asynchronously ask the agent to delete all saved secrets belonging to
     * `connection`.
     * @virtual 
     * @param connection a #NMConnection
     * @param connectionPath 
     * @param callback a callback, to be invoked when the operation is done
     */
    deleteSecrets(connection: NetworkManager.Connection, connectionPath: string | null, callback: SecretAgentDeleteSecretsFunc): void
    /**
     * Asynchronously retrieve secrets belonging to `connection` for the
     * setting `setting_name`.  `flags` indicate specific behavior that the secret
     * agent should use when performing the request, for example returning only
     * existing secrets without user interaction, or requesting entirely new
     * secrets from the user.
     * @virtual 
     * @param connection the #NMConnection for which we're asked secrets
     * @param connectionPath 
     * @param settingName the name of the secret setting
     * @param hints hints to the agent
     * @param flags flags that modify the behavior of the request
     * @param callback a callback, to be invoked when the operation is done
     */
    getSecrets(connection: NetworkManager.Connection, connectionPath: string | null, settingName: string | null, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc): void
    registrationResult(error: GLib.Error): void
    /**
     * Asynchronously ensure that all secrets inside `connection`
     * are stored to disk.
     * @virtual 
     * @param connection a #NMConnection
     * @param connectionPath 
     * @param callback a callback, to be invoked when the operation is done
     */
    saveSecrets(connection: NetworkManager.Connection, connectionPath: string | null, callback: SecretAgentSaveSecretsFunc): void

    // Own signals of NMClient-1.0.NMClient.SecretAgent

    connect(sigName: "registration-result", callback: SecretAgent.RegistrationResultSignalCallback): number
    on(sigName: "registration-result", callback: SecretAgent.RegistrationResultSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "registration-result", callback: SecretAgent.RegistrationResultSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "registration-result", callback: SecretAgent.RegistrationResultSignalCallback): NodeJS.EventEmitter
    emit(sigName: "registration-result", ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.SecretAgent

    connect(sigName: "notify::auto-register", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-register", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-register", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-register", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-register", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::identifier", callback: (...args: any[]) => void): number
    on(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identifier", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identifier", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identifier", ...args: any[]): void
    connect(sigName: "notify::registered", callback: (...args: any[]) => void): number
    on(sigName: "notify::registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registered", ...args: any[]): void
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
}

export class SecretAgent extends GObject.Object {

    // Own properties of NMClient-1.0.NMClient.SecretAgent

    static name: string

    // Constructors of NMClient-1.0.NMClient.SecretAgent

    constructor(config?: SecretAgent.ConstructorProperties) 
    _init(config?: SecretAgent.ConstructorProperties): void
}

export module VPNConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `vpn-state-changed`
     */
    export interface VpnStateChangedSignalCallback {
        (object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, ActiveConnection.ConstructorProperties {
    }

}

export interface VPNConnection extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.VPNConnection

    /**
     * The VPN login banner of the active VPN connection.
     */
    readonly banner: string | null
    /**
     * The VPN state of the active VPN connection.
     */
    readonly vpnState: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.VPNConnection

    parent: ActiveConnection & Object & GObject.Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.VPNConnection

    /**
     * Gets the VPN login banner of the active #NMVPNConnection.
     * @returns the VPN login banner of the VPN connection. This is the internal string used by the connection, and must not be modified.
     */
    getBanner(): string | null
    /**
     * Gets the current #NMVPNConnection state.
     * @returns the VPN state of the active VPN connection.
     */
    getVpnState(): NetworkManager.VPNConnectionState

    // Conflicting methods

    /**
     * Gets the #NMConnection's DBus object path.  This is often used with
     * nm_remote_settings_get_connection_by_path() to retrieve the
     * #NMRemoteConnection object that describes the connection.
     * @returns the object path of the #NMConnection which this #NMActiveConnection is an active instance of.  This is the internal string used by the connection, and must not be modified.
     */
    getConnection(): string | null

    // Overloads of getConnection

    /**
     * Gets the #NMObject's DBusGConnection.
     * @returns the connection
     */
    getConnection(): DBusGLib.Connection
    /**
     * Gets the #NMObject's DBusGConnection.
     * @returns the connection
     */
    getConnection(): DBusGLib.Connection

    // Own virtual methods of NMClient-1.0.NMClient.VPNConnection

    vpnStateChanged(state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason): void

    // Own signals of NMClient-1.0.NMClient.VPNConnection

    connect(sigName: "vpn-state-changed", callback: VPNConnection.VpnStateChangedSignalCallback): number
    on(sigName: "vpn-state-changed", callback: VPNConnection.VpnStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "vpn-state-changed", callback: VPNConnection.VpnStateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "vpn-state-changed", callback: VPNConnection.VpnStateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "vpn-state-changed", p0: number, ...args: any[]): void

    // Class property signals of NMClient-1.0.NMClient.VPNConnection

    connect(sigName: "notify::banner", callback: (...args: any[]) => void): number
    on(sigName: "notify::banner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::banner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::banner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::banner", ...args: any[]): void
    connect(sigName: "notify::vpn-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::vpn-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vpn-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vpn-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vpn-state", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::default", callback: (...args: any[]) => void): number
    on(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::default6", callback: (...args: any[]) => void): number
    on(sigName: "notify::default6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default6", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default6", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default6", ...args: any[]): void
    connect(sigName: "notify::devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::devices", ...args: any[]): void
    connect(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp4-config", ...args: any[]): void
    connect(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp6-config", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ip4-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip4-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip4-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip4-config", ...args: any[]): void
    connect(sigName: "notify::ip6-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-config", ...args: any[]): void
    connect(sigName: "notify::master", callback: (...args: any[]) => void): number
    on(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::specific-object", callback: (...args: any[]) => void): number
    on(sigName: "notify::specific-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::specific-object", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::specific-object", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::specific-object", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::vpn", callback: (...args: any[]) => void): number
    on(sigName: "notify::vpn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vpn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vpn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vpn", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class VPNConnection extends ActiveConnection {

    // Own properties of NMClient-1.0.NMClient.VPNConnection

    static name: string

    // Constructors of NMClient-1.0.NMClient.VPNConnection

    constructor(config?: VPNConnection.ConstructorProperties) 
    /**
     * Creates a new #NMVPNConnection.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the new connection
     * @returns a new connection object
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMVPNConnection.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the DBus object path of the new connection
     * @returns a new connection object
     */
    static new(connection: DBusGLib.Connection, path: string | null): VPNConnection
    _init(config?: VPNConnection.ConstructorProperties): void
}

export module WimaxNsp {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Object.ConstructorProperties {
    }

}

export interface WimaxNsp extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of NMClient-1.0.NMClient.WimaxNsp

    /**
     * The name of the WiMAX NSP.
     */
    readonly name: string | null
    /**
     * The network type of the WiMAX NSP.
     */
    readonly networkType: number
    /**
     * The signal quality of the WiMAX NSP.
     */
    readonly signalQuality: number
    __gtype__: number

    // Own fields of NMClient-1.0.NMClient.WimaxNsp

    parent: Object & GObject.Object

    // Owm methods of NMClient-1.0.NMClient.WimaxNsp

    /**
     * Validates a given connection against a given WiMAX NSP to ensure that the
     * connection may be activated with that NSP.  The connection must match the
     * `nsp'`s network name and other attributes.
     * @param connection an #NMConnection to validate against `nsp`
     * @returns %TRUE if the connection may be activated with this WiMAX NSP, %FALSE if it cannot be.
     */
    connectionValid(connection: NetworkManager.Connection): boolean
    /**
     * Filters a given list of connections for a given #NMWimaxNsp object and
     * return connections which may be activated with the access point.  Any
     * returned connections will match the `nsp'`s network name and other attributes.
     * @param connections a list of #NMConnection objects to filter
     * @returns a list of #NMConnection objects that could be activated with the given @nsp. The elements of the list are owned by their creator and should not be freed by the caller, but the returned list itself is owned by the caller and should be freed with g_slist_free() when it is no longer required.
     */
    filterConnections(connections: NetworkManager.Connection[]): NetworkManager.Connection[]
    /**
     * Gets the name of the wimax NSP
     * @returns the name
     */
    getName(): string | null
    /**
     * Gets the network type of the wimax NSP.
     * @returns the network type
     */
    getNetworkType(): WimaxNspNetworkType
    /**
     * Gets the WPA signal quality of the wimax NSP.
     * @returns the signal quality
     */
    getSignalQuality(): number

    // Class property signals of NMClient-1.0.NMClient.WimaxNsp

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::network-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-type", ...args: any[]): void
    connect(sigName: "notify::signal-quality", callback: (...args: any[]) => void): number
    on(sigName: "notify::signal-quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signal-quality", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signal-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signal-quality", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::dbus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dbus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dbus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dbus-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class WimaxNsp extends Object {

    // Own properties of NMClient-1.0.NMClient.WimaxNsp

    static name: string

    // Constructors of NMClient-1.0.NMClient.WimaxNsp

    constructor(config?: WimaxNsp.ConstructorProperties) 
    /**
     * Creates a new #NMWimaxNsp.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the D-Bus object path of the WiMAX NSP
     * @returns a new WiMAX NSP
     */
    constructor(connection: DBusGLib.Connection, path: string | null) 
    /**
     * Creates a new #NMWimaxNsp.
     * @constructor 
     * @param connection the #DBusGConnection
     * @param path the D-Bus object path of the WiMAX NSP
     * @returns a new WiMAX NSP
     */
    static new(connection: DBusGLib.Connection, path: string | null): WimaxNsp
    _init(config?: WimaxNsp.ConstructorProperties): void
}

export interface AccessPointClass {

    // Own fields of NMClient-1.0.NMClient.AccessPointClass

    parent: ObjectClass
}

export abstract class AccessPointClass {

    // Own properties of NMClient-1.0.NMClient.AccessPointClass

    static name: string
}

export interface ActiveConnectionClass {

    // Own fields of NMClient-1.0.NMClient.ActiveConnectionClass

    parent: ObjectClass
}

export abstract class ActiveConnectionClass {

    // Own properties of NMClient-1.0.NMClient.ActiveConnectionClass

    static name: string
}

export interface ClientClass {

    // Own fields of NMClient-1.0.NMClient.ClientClass

    parent: ObjectClass
    deviceAdded: (client: Client, device: Device) => void
    deviceRemoved: (client: Client, device: Device) => void
    permissionChanged: (client: Client, permission: ClientPermission, result: ClientPermissionResult) => void
}

export abstract class ClientClass {

    // Own properties of NMClient-1.0.NMClient.ClientClass

    static name: string
}

export interface DHCP4ConfigClass {

    // Own fields of NMClient-1.0.NMClient.DHCP4ConfigClass

    parent: ObjectClass
}

export abstract class DHCP4ConfigClass {

    // Own properties of NMClient-1.0.NMClient.DHCP4ConfigClass

    static name: string
}

export interface DHCP6ConfigClass {

    // Own fields of NMClient-1.0.NMClient.DHCP6ConfigClass

    parent: ObjectClass
}

export abstract class DHCP6ConfigClass {

    // Own properties of NMClient-1.0.NMClient.DHCP6ConfigClass

    static name: string
}

export interface DeviceAdslClass {

    // Own fields of NMClient-1.0.NMClient.DeviceAdslClass

    parent: DeviceClass
}

export abstract class DeviceAdslClass {

    // Own properties of NMClient-1.0.NMClient.DeviceAdslClass

    static name: string
}

export interface DeviceBondClass {

    // Own fields of NMClient-1.0.NMClient.DeviceBondClass

    parent: DeviceClass
}

export abstract class DeviceBondClass {

    // Own properties of NMClient-1.0.NMClient.DeviceBondClass

    static name: string
}

export interface DeviceBridgeClass {

    // Own fields of NMClient-1.0.NMClient.DeviceBridgeClass

    parent: DeviceClass
}

export abstract class DeviceBridgeClass {

    // Own properties of NMClient-1.0.NMClient.DeviceBridgeClass

    static name: string
}

export interface DeviceBtClass {

    // Own fields of NMClient-1.0.NMClient.DeviceBtClass

    parent: DeviceClass
}

export abstract class DeviceBtClass {

    // Own properties of NMClient-1.0.NMClient.DeviceBtClass

    static name: string
}

export interface DeviceClass {

    // Own fields of NMClient-1.0.NMClient.DeviceClass

    parent: ObjectClass
    stateChanged: (device: Device, newState: NetworkManager.DeviceState, oldState: NetworkManager.DeviceState, reason: NetworkManager.DeviceStateReason) => void
    connectionCompatible: (device: Device, connection: NetworkManager.Connection) => boolean
    getTypeDescription: (device: Device) => string | null
    getHwAddress: (device: Device) => string | null
    getSettingType: (device: Device) => GObject.GType
}

export abstract class DeviceClass {

    // Own properties of NMClient-1.0.NMClient.DeviceClass

    static name: string
}

export interface DeviceEthernetClass {

    // Own fields of NMClient-1.0.NMClient.DeviceEthernetClass

    parent: DeviceClass
}

export abstract class DeviceEthernetClass {

    // Own properties of NMClient-1.0.NMClient.DeviceEthernetClass

    static name: string
}

export interface DeviceGenericClass {

    // Own fields of NMClient-1.0.NMClient.DeviceGenericClass

    parent: DeviceClass
}

export abstract class DeviceGenericClass {

    // Own properties of NMClient-1.0.NMClient.DeviceGenericClass

    static name: string
}

export interface DeviceInfinibandClass {

    // Own fields of NMClient-1.0.NMClient.DeviceInfinibandClass

    parent: DeviceClass
}

export abstract class DeviceInfinibandClass {

    // Own properties of NMClient-1.0.NMClient.DeviceInfinibandClass

    static name: string
}

export interface DeviceModemClass {

    // Own fields of NMClient-1.0.NMClient.DeviceModemClass

    parent: DeviceClass
}

export abstract class DeviceModemClass {

    // Own properties of NMClient-1.0.NMClient.DeviceModemClass

    static name: string
}

export interface DeviceOlpcMeshClass {

    // Own fields of NMClient-1.0.NMClient.DeviceOlpcMeshClass

    parent: DeviceClass
}

export abstract class DeviceOlpcMeshClass {

    // Own properties of NMClient-1.0.NMClient.DeviceOlpcMeshClass

    static name: string
}

export interface DeviceTeamClass {

    // Own fields of NMClient-1.0.NMClient.DeviceTeamClass

    parent: DeviceClass
}

export abstract class DeviceTeamClass {

    // Own properties of NMClient-1.0.NMClient.DeviceTeamClass

    static name: string
}

export interface DeviceVlanClass {

    // Own fields of NMClient-1.0.NMClient.DeviceVlanClass

    parent: DeviceClass
}

export abstract class DeviceVlanClass {

    // Own properties of NMClient-1.0.NMClient.DeviceVlanClass

    static name: string
}

export interface DeviceWifiClass {

    // Own fields of NMClient-1.0.NMClient.DeviceWifiClass

    parent: DeviceClass
    accessPointAdded: (device: DeviceWifi, ap: AccessPoint) => void
    accessPointRemoved: (device: DeviceWifi, ap: AccessPoint) => void
}

export abstract class DeviceWifiClass {

    // Own properties of NMClient-1.0.NMClient.DeviceWifiClass

    static name: string
}

export interface DeviceWimaxClass {

    // Own fields of NMClient-1.0.NMClient.DeviceWimaxClass

    parent: DeviceClass
    nspAdded: (self: DeviceWimax, nsp: WimaxNsp) => void
    nspRemoved: (self: DeviceWimax, nsp: WimaxNsp) => void
}

export abstract class DeviceWimaxClass {

    // Own properties of NMClient-1.0.NMClient.DeviceWimaxClass

    static name: string
}

export interface IP4ConfigClass {

    // Own fields of NMClient-1.0.NMClient.IP4ConfigClass

    parent: ObjectClass
}

export abstract class IP4ConfigClass {

    // Own properties of NMClient-1.0.NMClient.IP4ConfigClass

    static name: string
}

export interface IP6ConfigClass {

    // Own fields of NMClient-1.0.NMClient.IP6ConfigClass

    parent: ObjectClass
}

export abstract class IP6ConfigClass {

    // Own properties of NMClient-1.0.NMClient.IP6ConfigClass

    static name: string
}

export interface ObjectClass {

    // Own fields of NMClient-1.0.NMClient.ObjectClass

    parent: GObject.ObjectClass
    objectCreationFailed: (masterObject: Object, error: GLib.Error, failedPath: string | null) => void
}

export abstract class ObjectClass {

    // Own properties of NMClient-1.0.NMClient.ObjectClass

    static name: string
}

export interface RemoteConnectionClass {

    // Own fields of NMClient-1.0.NMClient.RemoteConnectionClass

    parentClass: NetworkManager.ConnectionClass
    updated: (connection: RemoteConnection, newSettings: GLib.HashTable) => void
    removed: (connection: RemoteConnection) => void
}

export abstract class RemoteConnectionClass {

    // Own properties of NMClient-1.0.NMClient.RemoteConnectionClass

    static name: string
}

export interface RemoteSettingsClass {

    // Own fields of NMClient-1.0.NMClient.RemoteSettingsClass

    parent: GObject.ObjectClass
    newConnection: (settings: RemoteSettings, connection: RemoteConnection) => void
    connectionsRead: (settings: RemoteSettings) => void
}

export abstract class RemoteSettingsClass {

    // Own properties of NMClient-1.0.NMClient.RemoteSettingsClass

    static name: string
}

export interface SecretAgentClass {

    // Own fields of NMClient-1.0.NMClient.SecretAgentClass

    parent: GObject.ObjectClass
    getSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string | null, settingName: string | null, hints: string[], flags: SecretAgentGetSecretsFlags, callback: SecretAgentGetSecretsFunc) => void
    cancelGetSecrets: (self: SecretAgent, connectionPath: string | null, settingName: string | null) => void
    saveSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string | null, callback: SecretAgentSaveSecretsFunc) => void
    deleteSecrets: (self: SecretAgent, connection: NetworkManager.Connection, connectionPath: string | null, callback: SecretAgentDeleteSecretsFunc) => void
    registrationResult: (agent: SecretAgent, error: GLib.Error) => void
}

export abstract class SecretAgentClass {

    // Own properties of NMClient-1.0.NMClient.SecretAgentClass

    static name: string
}

export interface VPNConnectionClass {

    // Own fields of NMClient-1.0.NMClient.VPNConnectionClass

    parent: ActiveConnectionClass
    vpnStateChanged: (connection: VPNConnection, state: NetworkManager.VPNConnectionState, reason: NetworkManager.VPNConnectionStateReason) => void
}

export abstract class VPNConnectionClass {

    // Own properties of NMClient-1.0.NMClient.VPNConnectionClass

    static name: string
}

export interface WimaxNspClass {

    // Own fields of NMClient-1.0.NMClient.WimaxNspClass

    parent: ObjectClass
}

export abstract class WimaxNspClass {

    // Own properties of NMClient-1.0.NMClient.WimaxNspClass

    static name: string
}

    export type RemoteConnectionCommitFunc = RemoteConnectionResultFunc
    export type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc