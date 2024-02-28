/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './nmclient-1.0-ambient.d.ts';
import './nmclient-1.0-import.d.ts';
/**
 * NMClient-1.0
 */

import type NetworkManager from '@girs/networkmanager-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type DBusGLib from '@girs/dbusglib-1.0';
import type Gio from '@girs/gio-2.0';

export namespace NMClient {
    /**
     * Describes errors that may result from operations involving a #NMClient.
     */
    class ClientError extends GLib.Error {
        // Own fields of NMClient-1.0.ClientError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * an operation that requires NetworkManager
         *   failed because NetworkManager is not running
         */
        MANAGERNOTRUNNING: number;

        // Constructors of NMClient-1.0.ClientError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.ClientError

        /**
         * Registers an error quark for #NMClient if necessary.
         */
        static quark(): GLib.Quark;
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
    class DeviceAdslError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceAdslError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of ADSL type
         */
        NOTADSLCONNECTION: number;
        /**
         * the ADSL connection was invalid
         */
        INVALIDADSLCONNECTION: number;

        // Constructors of NMClient-1.0.DeviceAdslError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceAdslError

        /**
         * Registers an error quark for #NMDeviceAdsl if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceBondError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceBondError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of bond type
         */
        NOTBONDCONNECTION: number;
        /**
         * the bond connection was invalid
         */
        INVALIDBONDCONNECTION: number;
        /**
         * the interfaces of the connection and the device mismatched
         */
        INTERFACEMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceBondError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceBondError

        /**
         * Registers an error quark for #NMDeviceBond if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceBridgeError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceBridgeError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of bridge type
         */
        NOTBRIDGECONNECTION: number;
        /**
         * the bridge connection was invalid
         */
        INVALIDBRIDGECONNECTION: number;
        /**
         * the interfaces of the connection and the device mismatched
         */
        INTERFACEMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceBridgeError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceBridgeError

        /**
         * Registers an error quark for #NMDeviceBridge if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceBtError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceBtError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of bluetooth type
         */
        NOTBTCONNECTION: number;
        /**
         * the bluetooth connection was invalid
         */
        INVALIDBTCONNECTION: number;
        /**
         * the device's MAC was invalid
         */
        INVALIDDEVICEMAC: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;
        /**
         * the device missed required capabilities
         */
        MISSINGDEVICECAPS: number;

        // Constructors of NMClient-1.0.DeviceBtError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceBtError

        /**
         * Registers an error quark for #NMDeviceBt if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the interface names of the connection and the
         *   device mismatched
         */
        INTERFACEMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceError

        /**
         * Registers an error quark for #NMDevice if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceEthernetError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceEthernetError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of Ethernet or PPPoE type
         */
        NOTETHERNETCONNECTION: number;
        /**
         * the Ethernet connection was invalid
         */
        INVALIDETHERNETCONNECTION: number;
        /**
         * the device's MAC was invalid
         */
        INVALIDDEVICEMAC: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceEthernetError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceEthernetError

        /**
         * Registers an error quark for #NMDeviceEthernet if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceGenericError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceGenericError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of generic type
         */
        NOTGENERICCONNECTION: number;
        /**
         * the connection did not specify the interface name
         */
        MISSINGINTERFACENAME: number;

        // Constructors of NMClient-1.0.DeviceGenericError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceGenericError

        /**
         * Registers an error quark for #NMDeviceGeneric if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceInfinibandError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceInfinibandError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of InfiniBand type
         */
        NOTINFINIBANDCONNECTION: number;
        /**
         * the InfiniBand connection was invalid
         */
        INVALIDINFINIBANDCONNECTION: number;
        /**
         * the device's MAC was invalid
         */
        INVALIDDEVICEMAC: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceInfinibandError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceInfinibandError

        /**
         * Registers an error quark for #NMDeviceInfiniband if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceModemError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceModemError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of modem type
         */
        NOTMODEMCONNECTION: number;
        /**
         * the modem connection was invalid
         */
        INVALIDMODEMCONNECTION: number;
        /**
         * the device missed required capabilities
         */
        MISSINGDEVICECAPS: number;

        // Constructors of NMClient-1.0.DeviceModemError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceModemError

        /**
         * Registers an error quark for #NMDeviceModem if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceOlpcMeshError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceOlpcMeshError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of Olpc Mesh type
         */
        NOTOLPCMESHCONNECTION: number;
        /**
         * the Olpc Mesh connection was invalid
         */
        INVALIDOLPCMESHCONNECTION: number;

        // Constructors of NMClient-1.0.DeviceOlpcMeshError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceOlpcMeshError

        /**
         * Registers an error quark for #NMDeviceOlpcMesh if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceTeamError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceTeamError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of team type
         */
        NOTTEAMCONNECTION: number;
        /**
         * the team connection was invalid
         */
        INVALIDTEAMCONNECTION: number;
        /**
         * the interfaces of the connection and the device mismatched
         */
        INTERFACEMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceTeamError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceTeamError

        /**
         * Registers an error quark for #NMDeviceTeam if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceVlanError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceVlanError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of VLAN type
         */
        NOTVLANCONNECTION: number;
        /**
         * the VLAN connection was invalid
         */
        INVALIDVLANCONNECTION: number;
        /**
         * the VLAN identifiers of the connection and the device mismatched
         */
        IDMISMATCH: number;
        /**
         * the interfaces of the connection and the device mismatched
         */
        INTERFACEMISMATCH: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceVlanError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceVlanError

        /**
         * Registers an error quark for #NMDeviceVlan if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceWifiError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceWifiError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of Wi-Fi type
         */
        NOTWIFICONNECTION: number;
        /**
         * the Wi-Fi connection was invalid
         */
        INVALIDWIFICONNECTION: number;
        /**
         * the device's MAC was invalid
         */
        INVALIDDEVICEMAC: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;
        /**
         * the device missed WPA capabilities
         * required by the connection
         */
        MISSINGDEVICEWPACAPS: number;
        /**
         * the device missed RSN capabilities
         * required by the connection
         */
        MISSINGDEVICERSNCAPS: number;

        // Constructors of NMClient-1.0.DeviceWifiError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceWifiError

        /**
         * Registers an error quark for #NMDeviceWifi if necessary.
         */
        static quark(): GLib.Quark;
    }

    class DeviceWimaxError extends GLib.Error {
        // Own fields of NMClient-1.0.DeviceWimaxError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the connection was not of WiMax type
         */
        NOTWIMAXCONNECTION: number;
        /**
         * the WiMax connection was invalid
         */
        INVALIDWIMAXCONNECTION: number;
        /**
         * the device's MAC was invalid
         */
        INVALIDDEVICEMAC: number;
        /**
         * the MACs of the connection and the device mismatched
         */
        MACMISMATCH: number;

        // Constructors of NMClient-1.0.DeviceWimaxError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.DeviceWimaxError

        /**
         * Registers an error quark for #NMDeviceWimax if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Describes errors that may result from operations involving a #NMObject.
     */
    class ObjectError extends GLib.Error {
        // Own fields of NMClient-1.0.ObjectError

        /**
         * unknown or unclassified error
         */
        UNKNOWN: number;
        /**
         * an error ocured while creating an #NMObject
         */
        OBJECT_CREATION_FAILURE: number;

        // Constructors of NMClient-1.0.ObjectError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.ObjectError

        /**
         * Registers an error quark for #NMObject if necessary.
         */
        static quark(): GLib.Quark;
    }

    class RemoteConnectionError extends GLib.Error {
        // Own fields of NMClient-1.0.RemoteConnectionError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * dbus disconnected
         */
        DISCONNECTED: number;

        // Constructors of NMClient-1.0.RemoteConnectionError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.RemoteConnectionError

        /**
         * Registers an error quark for #NMRemoteConnection if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Describes errors that may result from operations involving a #NMRemoteSettings.
     */
    class RemoteSettingsError extends GLib.Error {
        // Own fields of NMClient-1.0.RemoteSettingsError

        /**
         * unknown or unclassified error
         */
        UNKNOWNERROR: number;
        /**
         * the #NMRemoteConnection object
         *   was removed before it was completely initialized
         */
        CONNECTIONREMOVED: number;
        /**
         * the #NMRemoteConnection object
         *   is not visible or otherwise unreadable
         */
        CONNECTIONUNAVAILABLE: number;
        /**
         * NetworkManager is not running.
         *   (Since 0.9.10)
         */
        SERVICEUNAVAILABLE: number;

        // Constructors of NMClient-1.0.RemoteSettingsError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.RemoteSettingsError

        /**
         * Registers an error quark for #NMRemoteSettings if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * #NMSecretAgentError values are passed by secret agents back to NetworkManager
     * when they encounter problems retrieving secrets on behalf of NM.
     */
    class SecretAgentError extends GLib.Error {
        // Own fields of NMClient-1.0.SecretAgentError

        /**
         * the caller (ie, NetworkManager) is not
         *  authorized to make this request
         */
        NOTAUTHORIZED: number;
        /**
         * the connection for which secrets
         *  were requested could not be found
         */
        INVALIDCONNECTION: number;
        /**
         * the request was canceled by the user
         */
        USERCANCELED: number;
        /**
         * the agent canceled the request
         *  because it was requested to do so by NetworkManager
         */
        AGENTCANCELED: number;
        /**
         * some internal error in the agent caused
         *  the request to fail
         */
        INTERNALERROR: number;
        /**
         * the agent cannot find any secrets for this
         *  connection
         */
        NOSECRETS: number;

        // Constructors of NMClient-1.0.SecretAgentError

        constructor(options: { message: string; code: number });

        // Owm methods of NMClient-1.0.SecretAgentError

        static quark(): GLib.Quark;
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
    const ACCESS_POINT_BSSID: string;
    const ACCESS_POINT_FLAGS: string;
    const ACCESS_POINT_FREQUENCY: string;
    const ACCESS_POINT_HW_ADDRESS: string;
    const ACCESS_POINT_LAST_SEEN: string;
    const ACCESS_POINT_MAX_BITRATE: string;
    const ACCESS_POINT_MODE: string;
    const ACCESS_POINT_RSN_FLAGS: string;
    const ACCESS_POINT_SSID: string;
    const ACCESS_POINT_STRENGTH: string;
    const ACCESS_POINT_WPA_FLAGS: string;
    const ACTIVE_CONNECTION_CONNECTION: string;
    const ACTIVE_CONNECTION_DEFAULT: string;
    const ACTIVE_CONNECTION_DEFAULT6: string;
    const ACTIVE_CONNECTION_DEVICES: string;
    const ACTIVE_CONNECTION_DHCP4_CONFIG: string;
    const ACTIVE_CONNECTION_DHCP6_CONFIG: string;
    const ACTIVE_CONNECTION_ID: string;
    const ACTIVE_CONNECTION_IP4_CONFIG: string;
    const ACTIVE_CONNECTION_IP6_CONFIG: string;
    const ACTIVE_CONNECTION_MASTER: string;
    const ACTIVE_CONNECTION_SPECIFIC_OBJECT: string;
    const ACTIVE_CONNECTION_STATE: string;
    const ACTIVE_CONNECTION_TYPE: string;
    const ACTIVE_CONNECTION_UUID: string;
    const ACTIVE_CONNECTION_VPN: string;
    const CLIENT_ACTIVATING_CONNECTION: string;
    const CLIENT_ACTIVE_CONNECTIONS: string;
    const CLIENT_ALL_DEVICES: string;
    const CLIENT_CONNECTIVITY: string;
    const CLIENT_DEVICES: string;
    const CLIENT_MANAGER_RUNNING: string;
    const CLIENT_NETWORKING_ENABLED: string;
    const CLIENT_PRIMARY_CONNECTION: string;
    const CLIENT_STARTUP: string;
    const CLIENT_STATE: string;
    const CLIENT_VERSION: string;
    const CLIENT_WIMAX_ENABLED: string;
    const CLIENT_WIMAX_HARDWARE_ENABLED: string;
    const CLIENT_WIRELESS_ENABLED: string;
    const CLIENT_WIRELESS_HARDWARE_ENABLED: string;
    const CLIENT_WWAN_ENABLED: string;
    const CLIENT_WWAN_HARDWARE_ENABLED: string;
    const DEVICE_ACTIVE_CONNECTION: string;
    const DEVICE_ADSL_CARRIER: string;
    const DEVICE_AUTOCONNECT: string;
    const DEVICE_AVAILABLE_CONNECTIONS: string;
    const DEVICE_BOND_CARRIER: string;
    const DEVICE_BOND_HW_ADDRESS: string;
    const DEVICE_BOND_SLAVES: string;
    const DEVICE_BRIDGE_CARRIER: string;
    const DEVICE_BRIDGE_HW_ADDRESS: string;
    const DEVICE_BRIDGE_SLAVES: string;
    const DEVICE_BT_CAPABILITIES: string;
    const DEVICE_BT_HW_ADDRESS: string;
    const DEVICE_BT_NAME: string;
    const DEVICE_CAPABILITIES: string;
    const DEVICE_DEVICE_TYPE: string;
    const DEVICE_DHCP4_CONFIG: string;
    const DEVICE_DHCP6_CONFIG: string;
    const DEVICE_DRIVER: string;
    const DEVICE_DRIVER_VERSION: string;
    const DEVICE_ETHERNET_CARRIER: string;
    const DEVICE_ETHERNET_HW_ADDRESS: string;
    const DEVICE_ETHERNET_PERMANENT_HW_ADDRESS: string;
    const DEVICE_ETHERNET_SPEED: string;
    const DEVICE_FIRMWARE_MISSING: string;
    const DEVICE_FIRMWARE_VERSION: string;
    const DEVICE_GENERIC_HW_ADDRESS: string;
    const DEVICE_GENERIC_TYPE_DESCRIPTION: string;
    const DEVICE_INFINIBAND_CARRIER: string;
    const DEVICE_INFINIBAND_HW_ADDRESS: string;
    const DEVICE_INTERFACE: string;
    const DEVICE_IP4_CONFIG: string;
    const DEVICE_IP6_CONFIG: string;
    const DEVICE_IP_INTERFACE: string;
    const DEVICE_MANAGED: string;
    const DEVICE_MODEM_CURRENT_CAPABILITIES: string;
    const DEVICE_MODEM_MODEM_CAPABILITIES: string;
    const DEVICE_MTU: string;
    const DEVICE_OLPC_MESH_ACTIVE_CHANNEL: string;
    const DEVICE_OLPC_MESH_COMPANION: string;
    const DEVICE_OLPC_MESH_HW_ADDRESS: string;
    const DEVICE_PHYSICAL_PORT_ID: string;
    const DEVICE_PRODUCT: string;
    const DEVICE_REAL: string;
    const DEVICE_STATE: string;
    const DEVICE_STATE_REASON: string;
    const DEVICE_TEAM_CARRIER: string;
    const DEVICE_TEAM_HW_ADDRESS: string;
    const DEVICE_TEAM_SLAVES: string;
    const DEVICE_UDI: string;
    const DEVICE_VENDOR: string;
    const DEVICE_VLAN_CARRIER: string;
    const DEVICE_VLAN_HW_ADDRESS: string;
    const DEVICE_VLAN_PARENT: string;
    const DEVICE_VLAN_VLAN_ID: string;
    const DEVICE_WIFI_ACCESS_POINTS: string;
    const DEVICE_WIFI_ACTIVE_ACCESS_POINT: string;
    const DEVICE_WIFI_BITRATE: string;
    const DEVICE_WIFI_CAPABILITIES: string;
    const DEVICE_WIFI_HW_ADDRESS: string;
    const DEVICE_WIFI_MODE: string;
    const DEVICE_WIFI_PERMANENT_HW_ADDRESS: string;
    const DEVICE_WIMAX_ACTIVE_NSP: string;
    const DEVICE_WIMAX_BSID: string;
    const DEVICE_WIMAX_CENTER_FREQUENCY: string;
    const DEVICE_WIMAX_CINR: string;
    const DEVICE_WIMAX_HW_ADDRESS: string;
    const DEVICE_WIMAX_NSPS: string;
    const DEVICE_WIMAX_RSSI: string;
    const DEVICE_WIMAX_TX_POWER: string;
    const DHCP4_CONFIG_OPTIONS: string;
    const DHCP6_CONFIG_OPTIONS: string;
    const IP4_CONFIG_ADDRESSES: string;
    const IP4_CONFIG_DOMAINS: string;
    const IP4_CONFIG_GATEWAY: string;
    const IP4_CONFIG_NAMESERVERS: string;
    const IP4_CONFIG_ROUTES: string;
    const IP4_CONFIG_SEARCHES: string;
    const IP4_CONFIG_WINS_SERVERS: string;
    const IP6_CONFIG_ADDRESSES: string;
    const IP6_CONFIG_DOMAINS: string;
    const IP6_CONFIG_GATEWAY: string;
    const IP6_CONFIG_NAMESERVERS: string;
    const IP6_CONFIG_ROUTES: string;
    const IP6_CONFIG_SEARCHES: string;
    const OBJECT_DBUS_CONNECTION: string;
    const OBJECT_DBUS_PATH: string;
    const REMOTE_CONNECTION_REMOVED: string;
    const REMOTE_CONNECTION_UNSAVED: string;
    const REMOTE_CONNECTION_UPDATED: string;
    const REMOTE_SETTINGS_BUS: string;
    const REMOTE_SETTINGS_CAN_MODIFY: string;
    const REMOTE_SETTINGS_CONNECTIONS_READ: string;
    const REMOTE_SETTINGS_HOSTNAME: string;
    const REMOTE_SETTINGS_NEW_CONNECTION: string;
    const REMOTE_SETTINGS_SERVICE_RUNNING: string;
    const SECRET_AGENT_AUTO_REGISTER: string;
    const SECRET_AGENT_CAPABILITIES: string;
    const SECRET_AGENT_IDENTIFIER: string;
    const SECRET_AGENT_REGISTERED: string;
    const SECRET_AGENT_REGISTRATION_RESULT: string;
    const VPN_CONNECTION_BANNER: string;
    const VPN_CONNECTION_VPN_STATE: string;
    const WIMAX_NSP_NAME: string;
    const WIMAX_NSP_NETWORK_TYPE: string;
    const WIMAX_NSP_SIGNAL_QUALITY: string;
    /**
     * Registers an error quark for #NMClient if necessary.
     * @returns the error quark used for #NMClient errors.
     */
    function client_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceAdsl if necessary.
     * @returns the error quark used for #NMDeviceAdsl errors.
     */
    function device_adsl_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceBond if necessary.
     * @returns the error quark used for #NMDeviceBond errors.
     */
    function device_bond_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceBridge if necessary.
     * @returns the error quark used for #NMDeviceBridge errors.
     */
    function device_bridge_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceBt if necessary.
     * @returns the error quark used for #NMDeviceBt errors.
     */
    function device_bt_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDevice if necessary.
     * @returns the error quark used for #NMDevice errors.
     */
    function device_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceEthernet if necessary.
     * @returns the error quark used for #NMDeviceEthernet errors.
     */
    function device_ethernet_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceGeneric if necessary.
     * @returns the error quark used for #NMDeviceGeneric errors.
     */
    function device_generic_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceInfiniband if necessary.
     * @returns the error quark used for #NMDeviceInfiniband errors.
     */
    function device_infiniband_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceModem if necessary.
     * @returns the error quark used for #NMDeviceModem errors.
     */
    function device_modem_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceOlpcMesh if necessary.
     * @returns the error quark used for #NMDeviceOlpcMesh errors.
     */
    function device_olpc_mesh_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceTeam if necessary.
     * @returns the error quark used for #NMDeviceTeam errors.
     */
    function device_team_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceVlan if necessary.
     * @returns the error quark used for #NMDeviceVlan errors.
     */
    function device_vlan_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceWifi if necessary.
     * @returns the error quark used for #NMDeviceWifi errors.
     */
    function device_wifi_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMDeviceWimax if necessary.
     * @returns the error quark used for #NMDeviceWimax errors.
     */
    function device_wimax_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMObject if necessary.
     * @returns the error quark used for #NMObject errors.
     */
    function object_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMRemoteConnection if necessary.
     * @returns the error quark used for #NMRemoteConnection errors.
     */
    function remote_connection_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMRemoteSettings if necessary.
     * @returns the error quark used for #NMRemoteSettings errors.
     */
    function remote_settings_error_quark(): GLib.Quark;
    function secret_agent_error_quark(): GLib.Quark;
    interface ClientActivateFn {
        (client: Client, active_connection: ActiveConnection, error: GLib.Error): void;
    }
    interface ClientAddActivateFn {
        (client: Client, connection: ActiveConnection, new_connection_path: string, error: GLib.Error): void;
    }
    interface DeviceCallbackFn {
        (device: Device, error: GLib.Error): void;
    }
    interface DeviceDeactivateFn {
        (device: Device, error: GLib.Error): void;
    }
    interface DeviceWifiRequestScanFn {
        (device: DeviceWifi, error: GLib.Error): void;
    }
    interface RemoteConnectionGetSecretsFunc {
        (connection: RemoteConnection, secrets: GLib.HashTable<string, GLib.HashTable>, error: GLib.Error): void;
    }
    interface RemoteConnectionResultFunc {
        (connection: RemoteConnection, error: GLib.Error): void;
    }
    interface RemoteSettingsAddConnectionFunc {
        (settings: RemoteSettings, connection: RemoteConnection, error: GLib.Error): void;
    }
    interface RemoteSettingsLoadConnectionsFunc {
        (settings: RemoteSettings, failures: string, error: GLib.Error): void;
    }
    interface RemoteSettingsSaveHostnameFunc {
        (settings: RemoteSettings, error: GLib.Error): void;
    }
    interface SecretAgentDeleteSecretsFunc {
        (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void;
    }
    interface SecretAgentGetSecretsFunc {
        (
            agent: SecretAgent,
            connection: NetworkManager.Connection,
            secrets: GLib.HashTable<string, GLib.HashTable>,
            error: GLib.Error,
        ): void;
    }
    interface SecretAgentSaveSecretsFunc {
        (agent: SecretAgent, connection: NetworkManager.Connection, error: GLib.Error): void;
    }
    type IP6AddressArray = object | null;
    type IP6AddressObjectArray = object | null;
    type IP6RouteObjectArray = object | null;
    type ObjectArray = object | null;
    type Ssid = object | null;
    type StringArray = object | null;
    type UintArray = object | null;
    /**
     * #NMSecretAgentCapabilities indicate various capabilities of the agent.
     */
    enum SecretAgentCapabilities {
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
     */
    enum SecretAgentGetSecretsFlags {
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
    module AccessPoint {
        // Constructor properties interface
    }

    class AccessPoint extends Object {
        // Own properties of NMClient-1.0.AccessPoint

        /**
         * The BSSID of the access point.
         */
        readonly bssid: string;
        /**
         * The flags of the access point.
         */
        readonly flags: number;
        /**
         * The frequency of the access point.
         */
        readonly frequency: number;
        /**
         * The hardware address of the access point.
         */
        readonly hw_address: string;
        /**
         * The hardware address of the access point.
         */
        readonly hwAddress: string;
        /**
         * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
         * access point was found in scan results.  A value of -1 means the
         * access point has not been found in a scan.
         */
        readonly last_seen: number;
        /**
         * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the
         * access point was found in scan results.  A value of -1 means the
         * access point has not been found in a scan.
         */
        readonly lastSeen: number;
        /**
         * The maximum bit rate of the access point in kbit/s.
         */
        readonly max_bitrate: number;
        /**
         * The maximum bit rate of the access point in kbit/s.
         */
        readonly maxBitrate: number;
        /**
         * The mode of the access point; either "infrastructure" (a central
         * coordinator of the wireless network allowing clients to connect) or
         * "ad-hoc" (a network with no central controller).
         */
        readonly mode: number;
        /**
         * The RSN flags of the access point.
         */
        readonly rsn_flags: number;
        /**
         * The RSN flags of the access point.
         */
        readonly rsnFlags: number;
        /**
         * The SSID of the access point.
         */
        readonly ssid: Ssid;
        /**
         * The current signal strength of the access point.
         */
        readonly strength: number;
        /**
         * The WPA flags of the access point.
         */
        readonly wpa_flags: number;
        /**
         * The WPA flags of the access point.
         */
        readonly wpaFlags: number;

        // Constructors of NMClient-1.0.AccessPoint

        static ['new'](connection: DBusGLib.Connection, path: string): AccessPoint;

        // Owm methods of NMClient-1.0.AccessPoint

        /**
         * Validates a given connection against a given Wi-Fi access point to ensure that
         * the connection may be activated with that AP.  The connection must match the
         * `ap'`s SSID, (if given) BSSID, and other attributes like security settings,
         * channel, band, etc.
         * @param connection an #NMConnection to validate against @ap
         * @returns %TRUE if the connection may be activated with this Wi-Fi AP, %FALSE if it cannot be.
         */
        connection_valid(connection: NetworkManager.Connection): boolean;
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
        filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[];
        /**
         * Gets the Basic Service Set ID (BSSID) of the Wi-Fi access point.
         * @returns the BSSID of the access point. This is an internal string and must not be modified or freed.
         */
        get_bssid(): string;
        /**
         * Gets the flags of the access point.
         * @returns the flags
         */
        get_flags(): NetworkManager.__80211ApFlags;
        /**
         * Gets the frequency of the access point in MHz.
         * @returns the frequency in MHz
         */
        get_frequency(): number;
        /**
         * Gets the hardware (MAC) address of the access point.
         * @returns the hardware address of the access point. This is the internal string used by the access point and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Returns the timestamp (in CLOCK_BOOTTIME seconds) for the last time the
         * access point was found in scan results.  A value of -1 means the access
         * point has not been found in a scan.
         * @returns the last seen time in seconds
         */
        get_last_seen(): number;
        /**
         * Gets the maximum bit rate of the access point in kbit/s.
         * @returns the maximum bit rate (kbit/s)
         */
        get_max_bitrate(): number;
        /**
         * Gets the mode of the access point.
         * @returns the mode
         */
        get_mode(): NetworkManager.__80211Mode;
        /**
         * Gets the RSN (Robust Secure Network, ie WPA version 2) flags of the access
         * point.
         * @returns the RSN flags
         */
        get_rsn_flags(): NetworkManager.__80211ApSecurityFlags;
        /**
         * Gets the SSID of the access point.
         * @returns the #GByteArray containing the SSID. This is the internal copy used by the access point, and must not be modified.
         */
        get_ssid(): Uint8Array;
        /**
         * Gets the current signal strength of the access point as a percentage.
         * @returns the signal strength (0 to 100)
         */
        get_strength(): number;
        /**
         * Gets the WPA (version 1) flags of the access point.
         * @returns the WPA flags
         */
        get_wpa_flags(): NetworkManager.__80211ApSecurityFlags;
    }

    module ActiveConnection {
        // Constructor properties interface
    }

    class ActiveConnection extends Object {
        // Own properties of NMClient-1.0.ActiveConnection

        /**
         * The connection's path of the active connection.
         */
        readonly connection: string;
        /**
         * Whether the active connection is the default IPv4 one.
         */
        readonly 'default': boolean;
        /**
         * Whether the active connection is the default IPv6 one.
         */
        readonly default6: boolean;
        readonly devices: ObjectArray;
        /**
         * The #NMDHCP4Config of the connection.
         */
        readonly dhcp4_config: DHCP4Config;
        /**
         * The #NMDHCP4Config of the connection.
         */
        readonly dhcp4Config: DHCP4Config;
        /**
         * The #NMDHCP6Config of the connection.
         */
        readonly dhcp6_config: DHCP6Config;
        /**
         * The #NMDHCP6Config of the connection.
         */
        readonly dhcp6Config: DHCP6Config;
        /**
         * The active connection's ID
         */
        readonly id: string;
        /**
         * The #NMIP4Config of the connection.
         */
        readonly ip4_config: IP4Config;
        /**
         * The #NMIP4Config of the connection.
         */
        readonly ip4Config: IP4Config;
        /**
         * The #NMIP6Config of the connection.
         */
        readonly ip6_config: IP6Config;
        /**
         * The #NMIP6Config of the connection.
         */
        readonly ip6Config: IP6Config;
        /**
         * The path of the master device if one exists.
         */
        readonly master: string;
        /**
         * The specific object's path of the active connection.
         */
        readonly specific_object: string;
        /**
         * The specific object's path of the active connection.
         */
        readonly specificObject: string;
        /**
         * The state of the active connection.
         */
        readonly state: number;
        /**
         * The active connection's type
         */
        readonly type: string;
        /**
         * The active connection's UUID
         */
        readonly uuid: string;
        /**
         * Whether the active connection is a VPN connection.
         */
        readonly vpn: boolean;

        // Constructors of NMClient-1.0.ActiveConnection

        static ['new'](connection: DBusGLib.Connection, path: string): ActiveConnection;

        // Owm methods of NMClient-1.0.ActiveConnection

        /**
         * Gets the #NMConnection's DBus object path.  This is often used with
         * nm_remote_settings_get_connection_by_path() to retrieve the
         * #NMRemoteConnection object that describes the connection.
         * @returns the object path of the #NMConnection which this #NMActiveConnection is an active instance of.  This is the internal string used by the connection, and must not be modified.
         */
        get_connection(): string;
        /**
         * Gets the #NMConnection's type.
         * @returns the type of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
         */
        get_connection_type(): string;
        /**
         * Whether the active connection is the default IPv4 one (that is, is used for
         * the default IPv4 route and DNS information).
         * @returns %TRUE if the active connection is the default IPv4 connection
         */
        get_default(): boolean;
        /**
         * Whether the active connection is the default IPv6 one (that is, is used for
         * the default IPv6 route and DNS information).
         * @returns %TRUE if the active connection is the default IPv6 connection
         */
        get_default6(): boolean;
        /**
         * Gets the #NMDevices used for the active connections.
         * @returns the #GPtrArray containing #NMDevices. This is the internal copy used by the connection, and must not be modified.
         */
        get_devices(): Device[];
        /**
         * Gets the current #NMDHCP4Config (if any) associated with the
         * #NMActiveConnection.
         * @returns the #NMDHCP4Config, or %NULL if the   connection does not use DHCP, or is not in the   %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
         */
        get_dhcp4_config(): DHCP4Config;
        /**
         * Gets the current #NMDHCP6Config (if any) associated with the
         * #NMActiveConnection.
         * @returns the #NMDHCP6Config, or %NULL if the   connection does not use DHCPv6, or is not in the   %NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
         */
        get_dhcp6_config(): DHCP6Config;
        /**
         * Gets the #NMConnection's ID.
         * @returns the ID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
         */
        get_id(): string;
        /**
         * Gets the current #NMIP4Config associated with the #NMActiveConnection.
         * @returns the #NMIP4Config, or %NULL if the   connection is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
         */
        get_ip4_config(): IP4Config;
        /**
         * Gets the current #NMIP6Config associated with the #NMActiveConnection.
         * @returns the #NMIP6Config, or %NULL if the   connection is not in the %NM_ACTIVE_CONNECTION_STATE_ACTIVATED   state.
         */
        get_ip6_config(): IP6Config;
        /**
         * Gets the path to the master #NMDevice of the connection.
         * @returns the path of the master #NMDevice of the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
         */
        get_master(): string;
        /**
         * Gets the "specific object" used at the activation.
         * @returns the specific object's DBus path. This is the internal string used by the connection, and must not be modified.
         */
        get_specific_object(): string;
        /**
         * Gets the active connection's state.
         * @returns the state
         */
        get_state(): NetworkManager.ActiveConnectionState;
        /**
         * Gets the #NMConnection's UUID.
         * @returns the UUID of the #NMConnection that backs the #NMActiveConnection. This is the internal string used by the connection, and must not be modified.
         */
        get_uuid(): string;
        /**
         * Whether the active connection is a VPN connection.
         * @returns %TRUE if the active connection is a VPN connection
         */
        get_vpn(): boolean;
    }

    module Client {
        // Signal callback interfaces

        interface AnyDeviceAdded {
            (device: Device): void;
        }

        interface AnyDeviceRemoved {
            (device: Device): void;
        }

        interface DeviceAdded {
            (device: Device): void;
        }

        interface DeviceRemoved {
            (device: Device): void;
        }

        interface PermissionChanged {
            (permission: number, result: number): void;
        }

        // Constructor properties interface
    }

    class Client extends Object {
        // Own properties of NMClient-1.0.Client

        /**
         * The #NMActiveConnection of the activating connection that is
         * likely to become the new #NMClient:primary-connection.
         */
        readonly activating_connection: ActiveConnection;
        /**
         * The #NMActiveConnection of the activating connection that is
         * likely to become the new #NMClient:primary-connection.
         */
        readonly activatingConnection: ActiveConnection;
        /**
         * The active connections.
         */
        readonly active_connections: any[];
        /**
         * The active connections.
         */
        readonly activeConnections: any[];
        /**
         * List of both real devices and device placeholders.
         */
        readonly all_devices: ObjectArray;
        /**
         * List of both real devices and device placeholders.
         */
        readonly allDevices: ObjectArray;
        /**
         * The network connectivity state.
         */
        readonly connectivity: number;
        /**
         * List of real network devices.  Does not include placeholder devices.
         */
        readonly devices: ObjectArray;
        /**
         * Whether the daemon is running.
         */
        readonly manager_running: boolean;
        /**
         * Whether the daemon is running.
         */
        readonly managerRunning: boolean;
        /**
         * Whether networking is enabled.
         */
        networking_enabled: boolean;
        /**
         * Whether networking is enabled.
         */
        networkingEnabled: boolean;
        /**
         * The #NMActiveConnection of the device with the default route;
         * see nm_client_get_primary_connection() for more details.
         */
        readonly primary_connection: ActiveConnection;
        /**
         * The #NMActiveConnection of the device with the default route;
         * see nm_client_get_primary_connection() for more details.
         */
        readonly primaryConnection: ActiveConnection;
        /**
         * Whether the daemon is still starting up.
         */
        readonly startup: boolean;
        /**
         * The current daemon state.
         */
        readonly state: number;
        /**
         * The NetworkManager version.
         */
        readonly version: string;
        /**
         * Whether WiMAX functionality is enabled.
         */
        wimax_enabled: boolean;
        /**
         * Whether WiMAX functionality is enabled.
         */
        wimaxEnabled: boolean;
        /**
         * Whether the WiMAX hardware is enabled.
         */
        readonly wimax_hardware_enabled: boolean;
        /**
         * Whether the WiMAX hardware is enabled.
         */
        readonly wimaxHardwareEnabled: boolean;
        /**
         * Whether wireless is enabled.
         */
        wireless_enabled: boolean;
        /**
         * Whether wireless is enabled.
         */
        wirelessEnabled: boolean;
        /**
         * Whether the wireless hardware is enabled.
         */
        readonly wireless_hardware_enabled: boolean;
        /**
         * Whether the wireless hardware is enabled.
         */
        readonly wirelessHardwareEnabled: boolean;
        /**
         * Whether WWAN functionality is enabled.
         */
        wwan_enabled: boolean;
        /**
         * Whether WWAN functionality is enabled.
         */
        wwanEnabled: boolean;
        /**
         * Whether the WWAN hardware is enabled.
         */
        readonly wwan_hardware_enabled: boolean;
        /**
         * Whether the WWAN hardware is enabled.
         */
        readonly wwanHardwareEnabled: boolean;

        // Constructors of NMClient-1.0.Client

        static ['new'](): Client;

        static new_finish(result: Gio.AsyncResult): Client;

        // Owm methods of NMClient-1.0.Client

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
        static new_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

        // Owm methods of NMClient-1.0.Client

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
         * @param specific_object the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by @device, which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
         * @param callback the function to call when the call is done
         */
        activate_connection(
            connection?: NetworkManager.Connection | null,
            device?: Device | null,
            specific_object?: string | null,
            callback?: ClientActivateFn | null,
        ): void;
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
         * @param partial an #NMConnection to add; the connection may be   partially filled (or even %NULL) and will be completed by NetworkManager   using the given @device and @specific_object before being added
         * @param device the #NMDevice
         * @param specific_object the object path of a connection-type-specific   object this activation should use. This parameter is currently ignored for   wired and mobile broadband connections, and the value of %NULL should be used   (ie, no specific object).  For Wi-Fi or WiMAX connections, pass the object   path of a #NMAccessPoint or #NMWimaxNsp owned by @device, which you can   get using nm_object_get_path(), and which will be used to complete the   details of the newly added connection.
         * @param callback the function to call when the call is done
         */
        add_and_activate_connection(
            partial: NetworkManager.Connection | null,
            device: Device,
            specific_object?: string | null,
            callback?: ClientAddActivateFn | null,
        ): void;
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
        check_connectivity(cancellable?: Gio.Cancellable | null): NetworkManager.ConnectivityState;
        /**
         * Asynchronously updates the network connectivity state and invokes
         * `callback` when complete. Contrast nm_client_get_connectivity(),
         * which (immediately) returns the most recent known state without
         * re-checking, and nm_client_check_connectivity(), which blocks.
         * @param cancellable a #GCancellable
         * @param callback callback to call with the result
         */
        check_connectivity_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Retrieves the result of an nm_client_check_connectivity_async()
         * call.
         * @param result the #GAsyncResult
         * @returns the (new) current connectivity state
         */
        check_connectivity_finish(result: Gio.AsyncResult): NetworkManager.ConnectivityState;
        /**
         * Deactivates an active #NMActiveConnection.
         * @param active the #NMActiveConnection to deactivate
         */
        deactivate_connection(active: ActiveConnection): void;
        /**
         * Gets the #NMActiveConnection corresponding to a
         * currently-activating connection that is expected to become the new
         * #NMClient:primary-connection upon successful activation.
         * @returns the appropriate #NMActiveConnection, if any.
         */
        get_activating_connection(): ActiveConnection;
        /**
         * Gets the active connections.
         * @returns a #GPtrArray  containing all the active #NMActiveConnections. The returned array is owned by the client and should not be modified.
         */
        get_active_connections(): ActiveConnection[];
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
        get_all_devices(): Device[];
        /**
         * Gets the current network connectivity state. Contrast
         * nm_client_check_connectivity() and
         * nm_client_check_connectivity_async(), which re-check the
         * connectivity state first before returning any information.
         * @returns the current connectivity state
         */
        get_connectivity(): NetworkManager.ConnectivityState;
        /**
         * Gets a #NMDevice from a #NMClient.
         * @param iface the interface name to search for
         * @returns the #NMDevice for the given @iface or %NULL if none is found.
         */
        get_device_by_iface(iface: string): Device;
        /**
         * Gets a #NMDevice from a #NMClient.
         * @param object_path the object path to search for
         * @returns the #NMDevice for the given @object_path or %NULL if none is found.
         */
        get_device_by_path(object_path: string): Device;
        /**
         * Gets all the known network devices.  Use nm_device_get_type() or the
         * <literal>NM_IS_DEVICE_XXXX</literal> functions to determine what kind of
         * device member of the returned array is, and then you may use device-specific
         * methods such as nm_device_ethernet_get_hw_address().
         * @returns a #GPtrArray containing all the #NMDevices.  The returned array is owned by the #NMClient object and should not be modified.
         */
        get_devices(): Device[];
        /**
         * Gets NetworkManager current logging level and domains.
         * @param level return location for logging level string
         * @param domains return location for log domains string. The string is   a list of domains separated by ","
         * @returns %TRUE on success, %FALSE otherwise
         */
        get_logging(level?: string | null, domains?: string | null): boolean;
        /**
         * Determines whether the daemon is running.
         * @returns %TRUE if the daemon is running
         */
        get_manager_running(): boolean;
        /**
         * Requests the result of a specific permission, which indicates whether the
         * client can or cannot perform the action the permission represents
         * @param permission the permission for which to return the result, one of #NMClientPermission
         * @returns the permission's result, one of #NMClientPermissionResult
         */
        get_permission_result(permission: ClientPermission): ClientPermissionResult;
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
        get_primary_connection(): ActiveConnection;
        /**
         * Tests whether the daemon is still in the process of activating
         * connections at startup.
         * @returns whether the daemon is still starting up
         */
        get_startup(): boolean;
        /**
         * Gets the current daemon state.
         * @returns the current %NMState
         */
        get_state(): NetworkManager.State;
        /**
         * Gets NetworkManager version.
         * @returns string with the version
         */
        get_version(): string;
        /**
         * Whether networking is enabled or disabled.
         * @returns %TRUE if networking is enabled, %FALSE if networking is disabled
         */
        networking_get_enabled(): boolean;
        /**
         * Enables or disables networking.  When networking is disabled, all controlled
         * interfaces are disconnected and deactivated.  When networking is enabled,
         * all controlled interfaces are available for activation.
         * @param enabled %TRUE to set networking enabled, %FALSE to set networking disabled
         */
        networking_set_enabled(enabled: boolean): void;
        /**
         * Sets NetworkManager logging level and/or domains.
         * @param level logging level to set (%NULL or an empty string for no change)
         * @param domains logging domains to set. The string should be a list of log   domains separated by ",". (%NULL or an empty string for no change)
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_logging(level?: string | null, domains?: string | null): boolean;
        /**
         * Deprecated; use nm_client_networking_set_enabled() instead.
         * @param sleep_ %TRUE to put the daemon to sleep
         */
        sleep(sleep_: boolean): void;
        /**
         * Determines whether WiMAX is enabled.
         * @returns %TRUE if WiMAX is enabled
         */
        wimax_get_enabled(): boolean;
        /**
         * Determines whether the WiMAX hardware is enabled.
         * @returns %TRUE if the WiMAX hardware is enabled
         */
        wimax_hardware_get_enabled(): boolean;
        /**
         * Enables or disables WiMAX devices.
         * @param enabled %TRUE to enable WiMAX
         */
        wimax_set_enabled(enabled: boolean): void;
        /**
         * Determines whether the wireless is enabled.
         * @returns %TRUE if wireless is enabled
         */
        wireless_get_enabled(): boolean;
        /**
         * Determines whether the wireless hardware is enabled.
         * @returns %TRUE if the wireless hardware is enabled
         */
        wireless_hardware_get_enabled(): boolean;
        /**
         * Enables or disables wireless devices.
         * @param enabled %TRUE to enable wireless
         */
        wireless_set_enabled(enabled: boolean): void;
        /**
         * Determines whether WWAN is enabled.
         * @returns %TRUE if WWAN is enabled
         */
        wwan_get_enabled(): boolean;
        /**
         * Determines whether the WWAN hardware is enabled.
         * @returns %TRUE if the WWAN hardware is enabled
         */
        wwan_hardware_get_enabled(): boolean;
        /**
         * Enables or disables WWAN devices.
         * @param enabled %TRUE to enable WWAN
         */
        wwan_set_enabled(enabled: boolean): void;
    }

    module DHCP4Config {
        // Constructor properties interface
    }

    class DHCP4Config extends Object {
        // Own properties of NMClient-1.0.DHCP4Config

        /**
         * The #GHashTable containing options of the configuration.
         */
        readonly options: GLib.HashTable<string, GObject.Value>;

        // Constructors of NMClient-1.0.DHCP4Config

        static ['new'](connection: DBusGLib.Connection, object_path: string): DHCP4Config;

        // Owm methods of NMClient-1.0.DHCP4Config

        /**
         * Gets one option by option name.
         * @param option the option to retrieve
         * @returns the configuration option's value. This is the internal string used by the configuration, and must not be modified.
         */
        get_one_option(option: string): string;
        /**
         * Gets all the options contained in the configuration.
         * @returns the #GHashTable containing strings for keys and values. This is the internal copy used by the configuration, and must not be modified.
         */
        get_options(): GLib.HashTable<string, GObject.Value>;
    }

    module DHCP6Config {
        // Constructor properties interface
    }

    class DHCP6Config extends Object {
        // Own properties of NMClient-1.0.DHCP6Config

        /**
         * The #GHashTable containing options of the configuration.
         */
        readonly options: GLib.HashTable<string, GObject.Value>;

        // Constructors of NMClient-1.0.DHCP6Config

        static ['new'](connection: DBusGLib.Connection, object_path: string): DHCP6Config;

        // Owm methods of NMClient-1.0.DHCP6Config

        /**
         * Gets one option by option name.
         * @param option the option to retrieve
         * @returns the configuration option's value. This is the internal string used by the configuration, and must not be modified.
         */
        get_one_option(option: string): string;
        /**
         * Gets all the options contained in the configuration.
         * @returns the #GHashTable containing strings for keys and values. This is the internal copy used by the configuration, and must not be modified.
         */
        get_options(): GLib.HashTable<string, GObject.Value>;
    }

    module Device {
        // Signal callback interfaces

        interface StateChanged {
            (new_state: number, old_state: number, reason: number): void;
        }

        // Constructor properties interface
    }

    class Device extends Object {
        // Own properties of NMClient-1.0.Device

        /**
         * The #NMActiveConnection object that "owns" this device during activation.
         */
        readonly active_connection: ActiveConnection;
        /**
         * The #NMActiveConnection object that "owns" this device during activation.
         */
        readonly activeConnection: ActiveConnection;
        /**
         * Whether the device can auto-activate a connection.
         */
        autoconnect: boolean;
        /**
         * The available connections (#NMRemoteConnection) of the device
         */
        readonly available_connections: ObjectArray;
        /**
         * The available connections (#NMRemoteConnection) of the device
         */
        readonly availableConnections: ObjectArray;
        /**
         * The capabilities of the device.
         */
        readonly capabilities: number;
        /**
         * The numeric type of the device.
         */
        readonly device_type: number;
        /**
         * The numeric type of the device.
         */
        readonly deviceType: number;
        /**
         * The #NMDHCP4Config of the device.
         */
        readonly dhcp4_config: DHCP4Config;
        /**
         * The #NMDHCP4Config of the device.
         */
        readonly dhcp4Config: DHCP4Config;
        /**
         * The #NMDHCP6Config of the device.
         */
        readonly dhcp6_config: DHCP6Config;
        /**
         * The #NMDHCP6Config of the device.
         */
        readonly dhcp6Config: DHCP6Config;
        /**
         * The driver of the device.
         */
        readonly driver: string;
        /**
         * The version of the device driver.
         */
        readonly driver_version: string;
        /**
         * The version of the device driver.
         */
        readonly driverVersion: string;
        /**
         * When %TRUE indicates the device is likely missing firmware required
         * for its operation.
         */
        readonly firmware_missing: boolean;
        /**
         * When %TRUE indicates the device is likely missing firmware required
         * for its operation.
         */
        readonly firmwareMissing: boolean;
        /**
         * The firmware version of the device.
         */
        readonly firmware_version: string;
        /**
         * The firmware version of the device.
         */
        readonly firmwareVersion: string;
        /**
         * The interface of the device.
         */
        readonly 'interface': string;
        /**
         * The IP interface of the device which should be used for all IP-related
         * operations like addressing and routing.
         */
        readonly ip_interface: string;
        /**
         * The IP interface of the device which should be used for all IP-related
         * operations like addressing and routing.
         */
        readonly ipInterface: string;
        /**
         * The #NMIP4Config of the device.
         */
        readonly ip4_config: IP4Config;
        /**
         * The #NMIP4Config of the device.
         */
        readonly ip4Config: IP4Config;
        /**
         * The #NMIP6Config of the device.
         */
        readonly ip6_config: IP6Config;
        /**
         * The #NMIP6Config of the device.
         */
        readonly ip6Config: IP6Config;
        /**
         * Whether the device is managed by NetworkManager.
         */
        readonly managed: boolean;
        /**
         * The MTU of the device.
         */
        readonly mtu: number;
        /**
         * The physical port ID of the device. (See
         * nm_device_get_physical_port_id().)
         */
        readonly physical_port_id: string;
        /**
         * The physical port ID of the device. (See
         * nm_device_get_physical_port_id().)
         */
        readonly physicalPortId: string;
        /**
         * The product string of the device.
         */
        readonly product: string;
        /**
         * Whether the device is real or is a placeholder device that could
         * be created automatically by NetworkManager if one of its
         * #NMDevice:available-connections was activated.
         */
        readonly real: boolean;
        /**
         * The state of the device.
         */
        readonly state: number;
        /**
         * An operating-system specific device hardware identifier; this is not
         * unique to a specific hardware device across reboots or hotplugs.  It
         * is an opaque string which for some device types (Bluetooth, Modem)
         * contains an identifier provided by the underlying hardware service daemon
         * such as Bluez or ModemManager, and clients can use this property to
         * request more information about the device from those services.
         */
        readonly udi: string;
        /**
         * The vendor string of the device.
         */
        readonly vendor: string;

        // Constructors of NMClient-1.0.Device

        static ['new'](connection: DBusGLib.Connection, path: string): Device;

        // Owm methods of NMClient-1.0.Device

        /**
         * Generates a list of short-ish unique presentation names for the
         * devices in `devices`.
         * @param devices an array of #NMDevice
         */
        static disambiguate_names(devices: Device[]): string[];

        // Owm methods of NMClient-1.0.Device

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
        connection_compatible(connection: NetworkManager.Connection): boolean;
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
        connection_valid(connection: NetworkManager.Connection): boolean;
        /**
         * Deletes the software device. Hardware devices can't be deleted.
         * @param callback callback to be called when delete operation completes
         */
        ['delete'](callback?: DeviceCallbackFn | null): void;
        /**
         * Disconnects the device if currently connected, and prevents the device from
         * automatically connecting to networks until the next manual network connection
         * request.
         * @param callback callback to be called when disconnect operation completes
         */
        disconnect(callback?: DeviceCallbackFn | null): void;
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
        filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[];
        /**
         * Gets the #NMActiveConnection object which owns this device during activation.
         * @returns the #NMActiveConnection or %NULL if the device is not part of an active connection
         */
        get_active_connection(): ActiveConnection;
        /**
         * Whether the #NMDevice can be autoconnected.
         * @returns %TRUE if the device is allowed to be autoconnected
         */
        get_autoconnect(): boolean;
        /**
         * Gets the #NMRemoteConnections currently known to the daemon that could
         * be activated on `device`.
         * @returns the #GPtrArray containing #NMRemoteConnections. This is the internal copy used by the connection, and must not be modified.
         */
        get_available_connections(): RemoteConnection[];
        /**
         * Gets the device' capabilities.
         * @returns the capabilities
         */
        get_capabilities(): NetworkManager.DeviceCapabilities;
        /**
         * Gets a description of `device,` based on its vendor and product names.
         * @returns a description of @device. If either the vendor or the   product name is unknown, this returns the interface name.
         */
        get_description(): string;
        /**
         * Returns the numeric type of the #NMDevice, ie Ethernet, Wi-Fi, etc.
         * @returns the device type
         */
        get_device_type(): NetworkManager.DeviceType;
        /**
         * Gets the current #NMDHCP4Config associated with the #NMDevice.
         *
         * Note that as of NetworkManager 0.9.10, you can alternatively use
         * nm_active_connection_get_dhcp4_config(), which also works with VPN
         * connections.
         * @returns the #NMDHCP4Config or %NULL if the device is not activated or not using DHCP.
         */
        get_dhcp4_config(): DHCP4Config;
        /**
         * Gets the current #NMDHCP6Config associated with the #NMDevice.
         *
         * Note that as of NetworkManager 0.9.10, you can alternatively use
         * nm_active_connection_get_dhcp6_config(), which also works with VPN
         * connections.
         * @returns the #NMDHCP6Config or %NULL if the device is not activated or not using DHCP.
         */
        get_dhcp6_config(): DHCP6Config;
        /**
         * Gets the driver of the #NMDevice.
         * @returns the driver of the device. This is the internal string used by the device, and must not be modified.
         */
        get_driver(): string;
        /**
         * Gets the driver version of the #NMDevice.
         * @returns the version of the device driver. This is the internal string used by the device, and must not be modified.
         */
        get_driver_version(): string;
        /**
         * Indicates that firmware required for the device's operation is likely
         * to be missing.
         * @returns %TRUE if firmware required for the device's operation is likely to be missing.
         */
        get_firmware_missing(): boolean;
        /**
         * Gets the firmware version of the #NMDevice.
         * @returns the firmware version of the device. This is the internal string used by the device, and must not be modified.
         */
        get_firmware_version(): string;
        /**
         * Gets the current a hardware address (MAC) for the `device`.
         * @returns the current MAC of the device, or %NULL. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the interface name of the #NMDevice.
         * @returns the interface of the device. This is the internal string used by the device, and must not be modified.
         */
        get_iface(): string;
        /**
         * Gets the current #NMIP4Config associated with the #NMDevice.
         *
         * Note that as of NetworkManager 0.9.10, you can alternatively use
         * nm_active_connection_get_ip4_config(), which also works with VPN
         * connections.
         * @returns the #NMIP4Config or %NULL if the device is not activated.
         */
        get_ip4_config(): IP4Config;
        /**
         * Gets the current #NMIP6Config associated with the #NMDevice.
         *
         * Note that as of NetworkManager 0.9.10, you can alternatively use
         * nm_active_connection_get_ip6_config(), which also works with VPN
         * connections.
         * @returns the #NMIP6Config or %NULL if the device is not activated.
         */
        get_ip6_config(): IP6Config;
        /**
         * Gets the IP interface name of the #NMDevice over which IP traffic flows
         * when the device is in the ACTIVATED state.
         * @returns the IP traffic interface of the device. This is the internal string used by the device, and must not be modified.
         */
        get_ip_iface(): string;
        /**
         * Whether the #NMDevice is managed by NetworkManager.
         * @returns %TRUE if the device is managed by NetworkManager
         */
        get_managed(): boolean;
        /**
         * Gets the  MTU of the #NMDevice.
         * @returns the MTU of the device in bytes.
         */
        get_mtu(): number;
        /**
         * Gets the physical port ID of the #NMDevice. If non-%NULL, this is
         * an opaque string that can be used to recognize when
         * seemingly-unrelated #NMDevices are actually just different virtual
         * ports on a single physical port. (Eg, NPAR / SR-IOV.)
         * @returns the physical port ID of the device, or %NULL if the port   ID is unknown. This is the internal string used by the device and   must not be modified.
         */
        get_physical_port_id(): string;
        /**
         * Gets the product string of the #NMDevice.
         * @returns the product name of the device. This is the internal string used by the device, and must not be modified.
         */
        get_product(): string;
        /**
         * Gets the (primary) #NMSetting subtype associated with connections
         * that can be used on `device`.
         * @returns @device's associated #NMSetting type
         */
        get_setting_type(): GObject.GType;
        /**
         * Gets the current #NMDevice state.
         * @returns the current device state
         */
        get_state(): NetworkManager.DeviceState;
        /**
         * Gets the current #NMDevice state (return value) and the reason for entering
         * the state (`reason` argument).
         * @returns the current device state
         */
        get_state_reason(): NetworkManager.DeviceState;
        /**
         * Gets a (non-localized) description of the type of device that
         * `device` is.
         * @returns the type description of the device. This is the internal string used by the device, and must not be modified.
         */
        get_type_description(): string;
        /**
         * Gets the Unique Device Identifier of the #NMDevice.
         * @returns the Unique Device Identifier of the device.  This identifier may be used to gather more information about the device from various operating system services like udev or sysfs.
         */
        get_udi(): string;
        /**
         * Gets the vendor string of the #NMDevice.
         * @returns the vendor name of the device. This is the internal string used by the device, and must not be modified.
         */
        get_vendor(): string;
        is_real(): boolean;
        /**
         * Whether the device is a software device.
         * @returns %TRUE if @device is a software device, %FALSE if it is a hardware device.
         */
        is_software(): boolean;
        /**
         * Enables or disables automatic activation of the #NMDevice.
         * @param autoconnect %TRUE to enable autoconnecting
         */
        set_autoconnect(autoconnect: boolean): void;
        /**
         * Enables or disables management of  #NMDevice by NetworkManager.
         * @param managed %TRUE to make the device managed by NetworkManager.
         */
        set_managed(managed: boolean): void;
    }

    module DeviceAdsl {
        // Constructor properties interface
    }

    class DeviceAdsl extends Device {
        // Own properties of NMClient-1.0.DeviceAdsl

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;

        // Constructors of NMClient-1.0.DeviceAdsl

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceAdsl;

        // Owm methods of NMClient-1.0.DeviceAdsl

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
    }

    module DeviceBond {
        // Constructor properties interface
    }

    class DeviceBond extends Device {
        // Own properties of NMClient-1.0.DeviceBond

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The devices (#NMDevice) enslaved to the bond device.
         */
        readonly slaves: ObjectArray;

        // Constructors of NMClient-1.0.DeviceBond

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceBond;

        // Owm methods of NMClient-1.0.DeviceBond

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceBond
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the devices currently enslaved to `device`.
         * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
         */
        get_slaves(): Device[];
    }

    module DeviceBridge {
        // Constructor properties interface
    }

    class DeviceBridge extends Device {
        // Own properties of NMClient-1.0.DeviceBridge

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The devices (#NMDevice) enslaved to the bridge device.
         */
        readonly slaves: ObjectArray;

        // Constructors of NMClient-1.0.DeviceBridge

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceBridge;

        // Owm methods of NMClient-1.0.DeviceBridge

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceBridge
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the devices currently enslaved to `device`.
         * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
         */
        get_slaves(): Device[];
    }

    module DeviceBt {
        // Constructor properties interface
    }

    class DeviceBt extends Device {
        // Own properties of NMClient-1.0.DeviceBt

        /**
         * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
         */
        readonly bt_capabilities: number;
        /**
         * The device's bluetooth capabilities, a combination of #NMBluetoothCapabilities.
         */
        readonly btCapabilities: number;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The name of the bluetooth device.
         */
        readonly name: string;

        // Constructors of NMClient-1.0.DeviceBt

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceBt;

        // Owm methods of NMClient-1.0.DeviceBt

        /**
         * Returns the Bluetooth device's usable capabilities.
         * @returns a combination of #NMBluetoothCapabilities
         */
        get_capabilities(): NetworkManager.BluetoothCapabilities;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceBt
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the name of the #NMDeviceBt.
         * @returns the name of the device
         */
        get_name(): string;
    }

    module DeviceEthernet {
        // Constructor properties interface
    }

    class DeviceEthernet extends Device {
        // Own properties of NMClient-1.0.DeviceEthernet

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The active hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The active hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The permanent hardware (MAC) address of the device.
         */
        readonly perm_hw_address: string;
        /**
         * The permanent hardware (MAC) address of the device.
         */
        readonly permHwAddress: string;
        /**
         * The speed of the device.
         */
        readonly speed: number;

        // Constructors of NMClient-1.0.DeviceEthernet

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceEthernet;

        // Owm methods of NMClient-1.0.DeviceEthernet

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the active hardware (MAC) address of the #NMDeviceEthernet
         * @returns the active hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the permanent hardware (MAC) address of the #NMDeviceEthernet
         * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_permanent_hw_address(): string;
        /**
         * Gets the speed of the #NMDeviceEthernet in Mbit/s.
         * @returns the speed of the device in Mbit/s
         */
        get_speed(): number;
    }

    module DeviceGeneric {
        // Constructor properties interface
    }

    class DeviceGeneric extends Device {
        // Own properties of NMClient-1.0.DeviceGeneric

        /**
         * The hardware address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware address of the device.
         */
        readonly hwAddress: string;
        /**
         * A description of the specific type of device this is, or %NULL
         * if not known.
         */
        readonly type_description: string;
        /**
         * A description of the specific type of device this is, or %NULL
         * if not known.
         */
        readonly typeDescription: string;

        // Constructors of NMClient-1.0.DeviceGeneric

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceGeneric;

        // Owm methods of NMClient-1.0.DeviceGeneric

        /**
         * Gets the hardware address of the #NMDeviceGeneric
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
    }

    module DeviceInfiniband {
        // Constructor properties interface
    }

    class DeviceInfiniband extends Device {
        // Own properties of NMClient-1.0.DeviceInfiniband

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;

        // Constructors of NMClient-1.0.DeviceInfiniband

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceInfiniband;

        // Owm methods of NMClient-1.0.DeviceInfiniband

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceInfiniband
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
    }

    module DeviceModem {
        // Constructor properties interface
    }

    class DeviceModem extends Device {
        // Own properties of NMClient-1.0.DeviceModem

        /**
         * The generic family of access technologies the modem currently supports
         * without a firmware reload or reinitialization.
         */
        readonly current_capabilities: number;
        /**
         * The generic family of access technologies the modem currently supports
         * without a firmware reload or reinitialization.
         */
        readonly currentCapabilities: number;
        /**
         * The generic family of access technologies the modem supports.  Not all
         * capabilities are available at the same time however; some modems require
         * a firmware reload or other reinitialization to switch between eg
         * CDMA/EVDO and GSM/UMTS.
         */
        readonly modem_capabilities: number;
        /**
         * The generic family of access technologies the modem supports.  Not all
         * capabilities are available at the same time however; some modems require
         * a firmware reload or other reinitialization to switch between eg
         * CDMA/EVDO and GSM/UMTS.
         */
        readonly modemCapabilities: number;

        // Owm methods of NMClient-1.0.DeviceModem

        /**
         * Returns a bitfield of the generic access technology families the modem
         * supports without a firmware reload or reinitialization.  This value
         * represents the network types the modem can immediately connect to.
         * @returns the generic access technology families the modem supports without a firmware reload or other reinitialization
         */
        get_current_capabilities(): NetworkManager.DeviceModemCapabilities;
        /**
         * Returns a bitfield of the generic access technology families the modem
         * supports.  Not all capabilities are available concurrently however; some
         * may require a firmware reload or reinitialization.
         * @returns the generic access technology families the modem supports
         */
        get_modem_capabilities(): NetworkManager.DeviceModemCapabilities;
    }

    module DeviceOlpcMesh {
        // Constructor properties interface
    }

    class DeviceOlpcMesh extends Device {
        // Own properties of NMClient-1.0.DeviceOlpcMesh

        /**
         * The device's active channel.
         */
        readonly active_channel: number;
        /**
         * The device's active channel.
         */
        readonly activeChannel: number;
        /**
         * The companion device.
         */
        readonly companion: DeviceWifi;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;

        // Constructors of NMClient-1.0.DeviceOlpcMesh

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceOlpcMesh;

        // Owm methods of NMClient-1.0.DeviceOlpcMesh

        /**
         * Returns the active channel of the #NMDeviceOlpcMesh device.
         * @returns active channel of the device
         */
        get_active_channel(): number;
        /**
         * Gets the companion device of the #NMDeviceOlpcMesh.
         * @returns the companion of the device of %NULL
         */
        get_companion(): DeviceWifi;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceOlpcMesh
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
    }

    module DeviceTeam {
        // Constructor properties interface
    }

    class DeviceTeam extends Device {
        // Own properties of NMClient-1.0.DeviceTeam

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The devices (#NMDevice) enslaved to the team device.
         */
        readonly slaves: ObjectArray;

        // Constructors of NMClient-1.0.DeviceTeam

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceTeam;

        // Owm methods of NMClient-1.0.DeviceTeam

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceTeam
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the devices currently enslaved to `device`.
         * @returns the #GPtrArray containing #NMDevices that are slaves of @device. This is the internal copy used by the device, and must not be modified.
         */
        get_slaves(): Device[];
    }

    module DeviceVlan {
        // Constructor properties interface
    }

    class DeviceVlan extends Device {
        // Own properties of NMClient-1.0.DeviceVlan

        /**
         * Whether the device has carrier.
         */
        readonly carrier: boolean;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The devices's parent device.
         */
        readonly parent: Device;
        /**
         * The device's VLAN ID.
         */
        readonly vlan_id: number;
        /**
         * The device's VLAN ID.
         */
        readonly vlanId: number;

        // Constructors of NMClient-1.0.DeviceVlan

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceVlan;

        // Owm methods of NMClient-1.0.DeviceVlan

        /**
         * Whether the device has carrier.
         * @returns %TRUE if the device has carrier
         */
        get_carrier(): boolean;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceVlan
         * @returns the hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        get_parent(): Device;
        get_vlan_id(): number;
    }

    module DeviceWifi {
        // Signal callback interfaces

        interface AccessPointAdded {
            (ap: GObject.Object): void;
        }

        interface AccessPointRemoved {
            (ap: GObject.Object): void;
        }

        // Constructor properties interface
    }

    class DeviceWifi extends Device {
        // Own properties of NMClient-1.0.DeviceWifi

        /**
         * List of all Wi-Fi access points the device can see.
         */
        readonly access_points: ObjectArray;
        /**
         * List of all Wi-Fi access points the device can see.
         */
        readonly accessPoints: ObjectArray;
        /**
         * The active #NMAccessPoint of the device.
         */
        readonly active_access_point: AccessPoint;
        /**
         * The active #NMAccessPoint of the device.
         */
        readonly activeAccessPoint: AccessPoint;
        /**
         * The bit rate of the device in kbit/s.
         */
        readonly bitrate: number;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * The mode of the device.
         */
        readonly mode: number;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly perm_hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly permHwAddress: string;
        /**
         * The wireless capabilities of the device.
         */
        readonly wireless_capabilities: number;
        /**
         * The wireless capabilities of the device.
         */
        readonly wirelessCapabilities: number;

        // Constructors of NMClient-1.0.DeviceWifi

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceWifi;

        // Owm methods of NMClient-1.0.DeviceWifi

        /**
         * Gets a #NMAccessPoint by path.
         * @param path the object path of the access point
         * @returns the access point or %NULL if none is found.
         */
        get_access_point_by_path(path: string): AccessPoint;
        /**
         * Gets all the scanned access points of the #NMDeviceWifi.
         * @returns a #GPtrArray containing all the scanned #NMAccessPoints. The returned array is owned by the client and should not be modified.
         */
        get_access_points(): AccessPoint[];
        /**
         * Gets the active #NMAccessPoint.
         * @returns the access point or %NULL if none is active
         */
        get_active_access_point(): AccessPoint;
        /**
         * Gets the bit rate of the #NMDeviceWifi in kbit/s.
         * @returns the bit rate (kbit/s)
         */
        get_bitrate(): number;
        /**
         * Gets the Wi-Fi capabilities of the #NMDeviceWifi.
         * @returns the capabilities
         */
        get_capabilities(): NetworkManager.DeviceWifiCapabilities;
        /**
         * Gets the actual hardware (MAC) address of the #NMDeviceWifi
         * @returns the actual hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets the #NMDeviceWifi mode.
         * @returns the mode
         */
        get_mode(): NetworkManager.__80211Mode;
        /**
         * Gets the permanent hardware (MAC) address of the #NMDeviceWifi
         * @returns the permanent hardware address. This is the internal string used by the device, and must not be modified.
         */
        get_permanent_hw_address(): string;
        /**
         * Request NM to scan for access points on the #NMDeviceWifi. This function only
         * instructs NM to perform scanning. Use nm_device_wifi_get_access_points()
         * to get available access points.
         * @param callback the function to call when the call is done
         */
        request_scan_simple(callback?: DeviceWifiRequestScanFn | null): void;
    }

    module DeviceWimax {
        // Signal callback interfaces

        interface NspAdded {
            (nsp: GObject.Object): void;
        }

        interface NspRemoved {
            (nsp: GObject.Object): void;
        }

        // Constructor properties interface
    }

    class DeviceWimax extends Device {
        // Own properties of NMClient-1.0.DeviceWimax

        /**
         * The active #NMWimaxNsp of the device.
         */
        readonly active_nsp: WimaxNsp;
        /**
         * The active #NMWimaxNsp of the device.
         */
        readonly activeNsp: WimaxNsp;
        /**
         * The ID of the serving base station as received from the network.  Has
         * no meaning when the device is not connected.
         */
        readonly bsid: string;
        /**
         * The center frequency (in KHz) of the radio channel the device is using to
         * communicate with the network when connected.  Has no meaning when the
         * device is not connected.
         */
        readonly center_frequency: number;
        /**
         * The center frequency (in KHz) of the radio channel the device is using to
         * communicate with the network when connected.  Has no meaning when the
         * device is not connected.
         */
        readonly centerFrequency: number;
        /**
         * CINR (Carrier to Interference + Noise Ratio) of the current radio link
         * in dB.  CINR is a more accurate measure of radio link quality.  Has no
         * meaning when the device is not connected.
         */
        readonly cinr: number;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hw_address: string;
        /**
         * The hardware (MAC) address of the device.
         */
        readonly hwAddress: string;
        /**
         * List of all WiMAX Network Service Providers the device can see.
         */
        readonly nsps: ObjectArray;
        /**
         * RSSI of the current radio link in dBm.  This value indicates how strong
         * the raw received RF signal from the base station is, but does not
         * indicate the overall quality of the radio link.  Has no meaning when the
         * device is not connected.
         */
        readonly rssi: number;
        /**
         * Average power of the last burst transmitted by the device, in units of
         * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
         * -5.5 dBm.  Has no meaning when the device is not connected.
         */
        readonly tx_power: number;
        /**
         * Average power of the last burst transmitted by the device, in units of
         * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
         * -5.5 dBm.  Has no meaning when the device is not connected.
         */
        readonly txPower: number;

        // Constructors of NMClient-1.0.DeviceWimax

        static ['new'](connection: DBusGLib.Connection, path: string): DeviceWimax;

        // Owm methods of NMClient-1.0.DeviceWimax

        /**
         * Gets the active #NMWimaxNsp.
         * @returns the access point or %NULL if none is active
         */
        get_active_nsp(): WimaxNsp;
        /**
         * Gets the ID of the serving Base Station when the device is connected.
         * @returns the ID of the serving Base Station, or %NULL
         */
        get_bsid(): string;
        /**
         * Gets the center frequency (in KHz) of the radio channel the device is using
         * to communicate with the network when connected.  Has no meaning when the
         * device is not connected.
         * @returns the center frequency in KHz, or 0
         */
        get_center_frequency(): number;
        /**
         * Gets the CINR (Carrier to Interference + Noise Ratio) of the current radio
         * link in dB.  CINR is a more accurate measure of radio link quality.  Has no
         * meaning when the device is not connected.
         * @returns the CINR in dB, or 0
         */
        get_cinr(): number;
        /**
         * Gets the hardware (MAC) address of the #NMDeviceWimax
         * @returns the hardware address. This is the internal string used by the          device, and must not be modified.
         */
        get_hw_address(): string;
        /**
         * Gets a #NMWimaxNsp by path.
         * @param path the object path of the NSP
         * @returns the access point or %NULL if none is found.
         */
        get_nsp_by_path(path: string): WimaxNsp;
        /**
         * Gets all the scanned NSPs of the #NMDeviceWimax.
         * @returns a #GPtrArray containing          all the scanned #NMWimaxNsps. The returned array is owned by the client and should not be modified.
         */
        get_nsps(): WimaxNsp[];
        /**
         * Gets the RSSI of the current radio link in dBm.  This value indicates how
         * strong the raw received RF signal from the base station is, but does not
         * indicate the overall quality of the radio link.  Has no meaning when the
         * device is not connected.
         * @returns the RSSI in dBm, or 0
         */
        get_rssi(): number;
        /**
         * Average power of the last burst transmitted by the device, in units of
         * 0.5 dBm.  i.e. a TxPower of -11 represents an actual device TX power of
         * -5.5 dBm.  Has no meaning when the device is not connected.
         * @returns the TX power in dBm, or 0
         */
        get_tx_power(): number;
    }

    module IP4Config {
        // Constructor properties interface
    }

    class IP4Config extends Object {
        // Own properties of NMClient-1.0.IP4Config

        /**
         * The #GPtrArray containing #NMIP4Address<!-- -->es of the configuration.
         */
        readonly addresses: any;
        /**
         * The #GPtrArray containing domain strings of the configuration.
         */
        readonly domains: StringArray;
        /**
         * The IP4 gateway address of the configuration as string.
         */
        readonly gateway: string;
        /**
         * The #GArray containing name servers (#guint32s) of the configuration.
         */
        readonly nameservers: UintArray;
        /**
         * The #GPtrArray containing #NMSettingIP4Route<!-- -->s of the configuration.
         */
        readonly routes: any;
        /**
         * The #GPtrArray containing dns search strings of the configuration.
         */
        readonly searches: StringArray;
        /**
         * The #GArray containing WINS servers (#guint32s) of the configuration.
         */
        readonly wins_servers: UintArray;
        /**
         * The #GArray containing WINS servers (#guint32s) of the configuration.
         */
        readonly winsServers: UintArray;

        // Constructors of NMClient-1.0.IP4Config

        static ['new'](connection: DBusGLib.Connection, object_path: string): IP4Config;

        // Owm methods of NMClient-1.0.IP4Config

        /**
         * Gets the IP4 addresses (containing the address, prefix, and gateway).
         * @returns the #GSList containing #NMIP4Address<!-- -->es. This is the internal copy used by the configuration and must not be modified.
         */
        get_addresses(): NetworkManager.IP4Address[];
        /**
         * Gets the domain names.
         * @returns the #GPtrArray containing domains as strings. This is the internal copy used by the configuration, and must not be modified.
         */
        get_domains(): string[];
        /**
         * Gets the IP4 gateway address.
         * @returns the IP4 address of the gateway.
         */
        get_gateway(): string;
        /**
         * Gets the domain name servers (DNS).
         * @returns the #GArray containing #guint32s. This is the internal copy used by the configuration and must not be modified.
         */
        get_nameservers(): number[];
        /**
         * Gets the routes.
         * @returns the #GSList containing #NMIP4Route<!-- -->s. This is the internal copy used by the configuration, and must not be modified.
         */
        get_routes(): NetworkManager.IP4Route[];
        /**
         * Gets the dns searches.
         * @returns the #GPtrArray containing dns searches as strings. This is the internal copy used by the configuration, and must not be modified.
         */
        get_searches(): string[];
        /**
         * Gets the Windows Internet Name Service servers (WINS).
         * @returns the #GArray containing #guint32s. This is the internal copy used by the configuration and must not be modified.
         */
        get_wins_servers(): number[];
    }

    module IP6Config {
        // Constructor properties interface
    }

    class IP6Config extends Object {
        // Own properties of NMClient-1.0.IP6Config

        /**
         * The #GPtrArray containing the IPv6 addresses;  use
         * nm_utils_ip6_addresses_from_gvalue() to return a #GSList of
         * #NMSettingIP6Address objects that is more usable than the raw data.
         */
        readonly addresses: IP6AddressObjectArray;
        /**
         * The #GPtrArray containing domain strings of the configuration.
         */
        readonly domains: StringArray;
        /**
         * The IPv6 gateway as string
         */
        readonly gateway: string;
        /**
         * The #GPtrArray containing elements of type 'struct ip6_addr' which
         * contain the addresses of nameservers of the configuration.
         */
        readonly nameservers: IP6AddressArray;
        /**
         * The #GPtrArray containing the IPv6 routes;  use
         * nm_utils_ip6_routes_from_gvalue() to return a #GSList of
         * #NMSettingIP6Address objects that is more usable than the raw data.
         */
        readonly routes: IP6RouteObjectArray;
        /**
         * The #GPtrArray containing dns search strings of the configuration.
         */
        readonly searches: StringArray;

        // Constructors of NMClient-1.0.IP6Config

        static ['new'](connection: DBusGLib.Connection, object_path: string): IP6Config;

        // Owm methods of NMClient-1.0.IP6Config

        /**
         * Gets the IP6 addresses (containing the address, prefix, and gateway).
         * @returns the #GSList containing #NMIP6Address<!-- -->es. This is the internal copy used by the configuration and must not be modified.
         */
        get_addresses(): NetworkManager.IP6Address[];
        /**
         * Gets the domain names.
         * @returns the #GPtrArray containing domains as strings. This is the internal copy used by the configuration, and must not be modified.
         */
        get_domains(): string[];
        /**
         * Gets the IP6 gateway.
         * @returns the IPv6 gateway of the configuration.
         */
        get_gateway(): string;
        /**
         * Gets the domain name server at index `idx` in the configuration.
         * @param idx index of the nameserver to return
         * @returns the IPv6 address of domain name server at index @iidx
         */
        get_nameserver(idx: number): Uint8Array;
        /**
         * Gets the number of the domain name servers in the configuration.
         * @returns the number of domain name servers
         */
        get_num_nameservers(): number;
        /**
         * Gets the routes.
         * @returns the #GSList containing #NMIP6Route<!-- -->s. This is the internal copy used by the configuration, and must not be modified.
         */
        get_routes(): NetworkManager.IP6Route[];
        /**
         * Gets the dns searches.
         * @returns the #GPtrArray containing dns searches as strings. This is the internal copy used by the configuration, and must not be modified.
         */
        get_searches(): string[];
    }

    module Object {
        // Signal callback interfaces

        interface ObjectCreationFailed {
            (error?: any | null, failed_path?: any | null): void;
        }

        // Constructor properties interface
    }

    abstract class Object extends GObject.Object {
        // Own properties of NMClient-1.0.Object

        dbus_path: string;
        dbusPath: string;

        // Owm methods of NMClient-1.0.Object

        /**
         * Gets the #NMObject's DBusGConnection.
         * @returns the connection
         */
        get_connection(): DBusGLib.Connection;
        /**
         * Gets the DBus path of the #NMObject.
         * @returns the object's path. This is the internal string used by the device, and must not be modified.
         */
        get_path(): string;
    }

    module RemoteConnection {
        // Signal callback interfaces

        interface Removed {
            (): void;
        }

        interface Updated {
            (): void;
        }

        interface Visible {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    class RemoteConnection extends NetworkManager.Connection {
        // Own properties of NMClient-1.0.RemoteConnection

        dbus_path: string;
        dbusPath: string;
        /**
         * %TRUE if the remote connection contains changes that have not been saved
         * to disk, %FALSE if the connection is the same as its on-disk representation.
         */
        readonly unsaved: boolean;

        // Constructors of NMClient-1.0.RemoteConnection

        static ['new'](bus: DBusGLib.Connection, path: string): RemoteConnection;

        // Owm methods of NMClient-1.0.RemoteConnection

        /**
         * Send any local changes to the settings and properties of this connection to
         * NetworkManager, which will immediately save them to disk.
         * @param callback a function to be called when the commit completes
         */
        commit_changes(callback?: RemoteConnectionResultFunc | null): void;
        /**
         * Send any local changes to the settings and properties of this connection to
         * NetworkManager.  The changes are not saved to disk until either
         * nm_remote_connection_save() or nm_remote_connection_commit_changes() is
         * called.
         * @param callback a function to be called when the commit completes
         */
        commit_changes_unsaved(callback?: RemoteConnectionResultFunc | null): void;
        /**
         * Delete the connection.
         * @param callback a function to be called when the delete completes
         */
        ['delete'](callback?: RemoteConnectionResultFunc | null): void;
        /**
         * Request the connection's secrets.
         * @param setting_name the #NMSetting object name to get secrets for
         * @param callback a function to be called when the update completes; must not be %NULL
         */
        get_secrets(setting_name: string, callback: RemoteConnectionGetSecretsFunc): void;
        get_unsaved(): boolean;
        /**
         * Saves the connection to disk if the connection has changes that have not yet
         * been written to disk, or if the connection has never been saved.
         * @param callback a function to be called when the save completes
         */
        save(callback?: RemoteConnectionResultFunc | null): void;
    }

    module RemoteSettings {
        // Signal callback interfaces

        interface ConnectionsRead {
            (): void;
        }

        interface NewConnection {
            (object: GObject.Object): void;
        }

        // Constructor properties interface
    }

    class RemoteSettings extends GObject.Object {
        // Own properties of NMClient-1.0.RemoteSettings

        /**
         * If %TRUE, adding and modifying connections is supported.
         */
        readonly can_modify: boolean;
        /**
         * If %TRUE, adding and modifying connections is supported.
         */
        readonly canModify: boolean;
        /**
         * The machine hostname stored in persistent configuration. This can be
         * modified by calling nm_remote_settings_save_hostname().
         */
        readonly hostname: string;
        /**
         * Whether the settings service is running.
         */
        readonly service_running: boolean;
        /**
         * Whether the settings service is running.
         */
        readonly serviceRunning: boolean;

        // Constructors of NMClient-1.0.RemoteSettings

        static ['new'](bus?: DBusGLib.Connection | null): RemoteSettings;

        static new_finish(result: Gio.AsyncResult): RemoteSettings;

        // Owm methods of NMClient-1.0.RemoteSettings

        /**
         * Creates a new object representing the remote settings service and
         * begins asynchronously initializing it. `callback` will be called
         * when it is done; use nm_remote_settings_new_finish() to get the
         * result.
         * @param bus a valid and connected D-Bus connection
         * @param cancellable a #GCancellable, or %NULL
         * @param callback callback to call when the settings object is created
         */
        static new_async(
            bus?: DBusGLib.Connection | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<RemoteSettings> | null,
        ): void;

        // Owm methods of NMClient-1.0.RemoteSettings

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
        add_connection(connection: NetworkManager.Connection, callback: RemoteSettingsAddConnectionFunc): boolean;
        /**
         * Requests that the remote settings service add the given settings to a new
         * connection.  The connection is not written to disk, which may be done at
         * a later time by calling the connection's nm_remote_connection_commit_changes()
         * method.
         * @param connection the connection to add. Note that this object's settings will be   added, not the object itself
         * @param callback callback to be called when the add operation completes
         * @returns %TRUE if the request was successful, %FALSE if it failed
         */
        add_connection_unsaved(
            connection: NetworkManager.Connection,
            callback: RemoteSettingsAddConnectionFunc,
        ): boolean;
        /**
         * Returns the first matching %NMRemoteConnection matching a given `id`.
         * @param id the id of the remote connection
         * @returns the remote connection object on success, or %NULL if no  matching object was found.
         */
        get_connection_by_id(id: string): RemoteConnection;
        /**
         * Returns the %NMRemoteConnection representing the connection at `path`.
         * @param path the D-Bus object path of the remote connection
         * @returns the remote connection object on success, or %NULL if the object was  not known
         */
        get_connection_by_path(path: string): RemoteConnection;
        /**
         * Returns the %NMRemoteConnection identified by `uuid`.
         * @param uuid the UUID of the remote connection
         * @returns the remote connection object on success, or %NULL if the object was  not known
         */
        get_connection_by_uuid(uuid: string): RemoteConnection;
        list_connections(): RemoteConnection[];
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
        load_connections(filenames: string): boolean;
        /**
         * Requests that the remote settings service reload all connection
         * files from disk, adding, updating, and removing connections until
         * the in-memory state matches the on-disk state.
         * @returns %TRUE on success, %FALSE on failure
         */
        reload_connections(): boolean;
        /**
         * Requests that the machine's persistent hostname be set to the specified value
         * or cleared.
         * @param hostname the new persistent hostname to set, or %NULL to clear any existing  persistent hostname
         * @param callback callback to be called when the hostname operation completes
         * @returns %TRUE if the request was successful, %FALSE if it failed
         */
        save_hostname(hostname: string, callback?: RemoteSettingsSaveHostnameFunc | null): boolean;
    }

    module SecretAgent {
        // Signal callback interfaces

        interface RegistrationResult {
            (error?: any | null): void;
        }

        // Constructor properties interface
    }

    abstract class SecretAgent extends GObject.Object {
        // Own properties of NMClient-1.0.SecretAgent

        /**
         * If TRUE, the agent will attempt to automatically register itself after
         * it is created (via an idle handler) and to re-register itself if
         * NetworkManager restarts.  If FALSE, the agent does not automatically
         * register with NetworkManager, and nm_secret_agent_register() must be
         * called.  If 'auto-register' is TRUE, calling nm_secret_agent_unregister()
         * will suppress auto-registration until nm_secret_agent_register() is
         * called, which re-enables auto-registration.
         */
        auto_register: boolean;
        /**
         * If TRUE, the agent will attempt to automatically register itself after
         * it is created (via an idle handler) and to re-register itself if
         * NetworkManager restarts.  If FALSE, the agent does not automatically
         * register with NetworkManager, and nm_secret_agent_register() must be
         * called.  If 'auto-register' is TRUE, calling nm_secret_agent_unregister()
         * will suppress auto-registration until nm_secret_agent_register() is
         * called, which re-enables auto-registration.
         */
        autoRegister: boolean;
        /**
         * A bitfield of %NMSecretAgentCapabilities.
         */
        capabilities: SecretAgentCapabilities;
        /**
         * Identifies this agent; only one agent in each user session may use the
         * same identifier.  Identifier formatting follows the same rules as
         * D-Bus bus names with the exception that the ':' character is not
         * allowed.  The valid set of characters is "[A-Z][a-z][0-9]_-." and the
         * identifier is limited in length to 255 characters with a minimum
         * of 3 characters.  An example valid identifier is 'org.gnome.nm-applet'
         * (without quotes).
         */
        identifier: string;
        /**
         * %TRUE if the agent is registered with NetworkManager, %FALSE if not.
         */
        readonly registered: boolean;

        // Owm methods of NMClient-1.0.SecretAgent

        /**
         * Asynchronously ask the agent to delete all saved secrets belonging to
         * `connection`.
         * @param connection a #NMConnection
         * @param callback a callback, to be invoked when the operation is done
         */
        delete_secrets(connection: NetworkManager.Connection, callback: SecretAgentDeleteSecretsFunc): void;
        get_registered(): boolean;
        /**
         * Asynchronously retrieve secrets belonging to `connection` for the
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
        get_secrets(
            connection: NetworkManager.Connection,
            setting_name: string,
            hints: string[],
            flags: SecretAgentGetSecretsFlags,
            callback: SecretAgentGetSecretsFunc,
        ): void;
        /**
         * Registers the #NMSecretAgent with the NetworkManager secret manager,
         * indicating to NetworkManager that the agent is able to provide and save
         * secrets for connections on behalf of its user.  Registration is an
         * asynchronous operation and its success or failure is indicated via the
         * 'registration-result' signal.
         * @returns a new %TRUE if registration was successfully requested (this does not mean registration itself was successful), %FALSE if registration was not successfully requested.
         */
        register(): boolean;
        /**
         * Asynchronously ensure that all secrets inside `connection`
         * are stored to disk.
         * @param connection a #NMConnection
         * @param callback a callback, to be invoked when the operation is done
         */
        save_secrets(connection: NetworkManager.Connection, callback: SecretAgentSaveSecretsFunc): void;
        /**
         * Unregisters the #NMSecretAgent with the NetworkManager secret manager,
         * indicating to NetworkManager that the agent is will no longer provide or
         * store secrets on behalf of this user.
         * @returns a new %TRUE if unregistration was successful, %FALSE if it was not.
         */
        unregister(): boolean;
    }

    module VPNConnection {
        // Signal callback interfaces

        interface VpnStateChanged {
            (object: number, p0: number): void;
        }

        // Constructor properties interface
    }

    class VPNConnection extends ActiveConnection {
        // Own properties of NMClient-1.0.VPNConnection

        /**
         * The VPN login banner of the active VPN connection.
         */
        readonly banner: string;
        /**
         * The VPN state of the active VPN connection.
         */
        readonly vpn_state: number;
        /**
         * The VPN state of the active VPN connection.
         */
        readonly vpnState: number;

        // Constructors of NMClient-1.0.VPNConnection

        static ['new'](connection: DBusGLib.Connection, path: string): VPNConnection;

        // Owm methods of NMClient-1.0.VPNConnection

        /**
         * Gets the VPN login banner of the active #NMVPNConnection.
         * @returns the VPN login banner of the VPN connection. This is the internal string used by the connection, and must not be modified.
         */
        get_banner(): string;
        /**
         * Gets the current #NMVPNConnection state.
         * @returns the VPN state of the active VPN connection.
         */
        get_vpn_state(): NetworkManager.VPNConnectionState;
    }

    module WimaxNsp {
        // Constructor properties interface
    }

    class WimaxNsp extends Object {
        // Own properties of NMClient-1.0.WimaxNsp

        /**
         * The name of the WiMAX NSP.
         */
        readonly name: string;
        /**
         * The network type of the WiMAX NSP.
         */
        readonly network_type: number;
        /**
         * The network type of the WiMAX NSP.
         */
        readonly networkType: number;
        /**
         * The signal quality of the WiMAX NSP.
         */
        readonly signal_quality: number;
        /**
         * The signal quality of the WiMAX NSP.
         */
        readonly signalQuality: number;

        // Constructors of NMClient-1.0.WimaxNsp

        static ['new'](connection: DBusGLib.Connection, path: string): WimaxNsp;

        // Owm methods of NMClient-1.0.WimaxNsp

        /**
         * Validates a given connection against a given WiMAX NSP to ensure that the
         * connection may be activated with that NSP.  The connection must match the
         * `nsp'`s network name and other attributes.
         * @param connection an #NMConnection to validate against @nsp
         * @returns %TRUE if the connection may be activated with this WiMAX NSP, %FALSE if it cannot be.
         */
        connection_valid(connection: NetworkManager.Connection): boolean;
        /**
         * Filters a given list of connections for a given #NMWimaxNsp object and
         * return connections which may be activated with the access point.  Any
         * returned connections will match the `nsp'`s network name and other attributes.
         * @param connections a list of #NMConnection objects to filter
         * @returns a list of #NMConnection objects that could be activated with the given @nsp. The elements of the list are owned by their creator and should not be freed by the caller, but the returned list itself is owned by the caller and should be freed with g_slist_free() when it is no longer required.
         */
        filter_connections(connections: NetworkManager.Connection[]): NetworkManager.Connection[];
        /**
         * Gets the name of the wimax NSP
         * @returns the name
         */
        get_name(): string;
        /**
         * Gets the network type of the wimax NSP.
         * @returns the network type
         */
        get_network_type(): WimaxNspNetworkType;
        /**
         * Gets the WPA signal quality of the wimax NSP.
         * @returns the signal quality
         */
        get_signal_quality(): number;
    }

    class AccessPointClass {}

    class ActiveConnectionClass {}

    class ClientClass {}

    class DHCP4ConfigClass {}

    class DHCP6ConfigClass {}

    class DeviceAdslClass {}

    class DeviceBondClass {}

    class DeviceBridgeClass {}

    class DeviceBtClass {}

    class DeviceClass {}

    class DeviceEthernetClass {}

    class DeviceGenericClass {}

    class DeviceInfinibandClass {}

    class DeviceModemClass {}

    class DeviceOlpcMeshClass {}

    class DeviceTeamClass {}

    class DeviceVlanClass {}

    class DeviceWifiClass {}

    class DeviceWimaxClass {}

    class IP4ConfigClass {}

    class IP6ConfigClass {}

    class ObjectClass {}

    class RemoteConnectionClass {}

    class RemoteSettingsClass {}

    class SecretAgentClass {}

    class VPNConnectionClass {}

    class WimaxNspClass {}

    type RemoteConnectionCommitFunc = RemoteConnectionResultFunc;
    type RemoteConnectionDeleteFunc = RemoteConnectionResultFunc;
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

export default NMClient;
// END
