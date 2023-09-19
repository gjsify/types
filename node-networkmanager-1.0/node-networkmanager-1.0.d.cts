
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-networkmanager-1.0-import.d.ts';
    
/**
 * NetworkManager-1.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type DBusGLib from '@girs/node-dbusglib-1.0';

/**
 * Indicates the 802.11 mode an access point or device is currently in.
 */
export enum TODO_80211Mode {
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
}
/**
 * #NMActiveConnectionState values indicate the state of a connection to a
 * specific network while it is starting, connected, or disconnecting from that
 * network.
 */
export enum ActiveConnectionState {
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
 * Describes errors that may result from operations involving a #NMConnection.
 */
export enum ConnectionError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the #NMConnection object
     *   did not contain the required #NMSettingConnection object, which must be
     *   present for all connections
     */
    CONNECTIONSETTINGNOTFOUND,
    /**
     * the 'type' property of the
     *   'connection' setting did not point to a valid connection base type; ie
     *   it was not a hardware-related setting like #NMSettingWired or
     *   #NMSettingWireless.
     */
    CONNECTIONTYPEINVALID,
    /**
     * the #NMConnection object
     *   did not contain the specified #NMSetting object
     */
    SETTINGNOTFOUND,
    /**
     * the #NMConnection object contains
     *   a conflicting setting object
     */
    INVALIDSETTING,
}
export enum ConnectivityState {
    /**
     * Network connectivity is unknown.
     */
    UNKNOWN,
    /**
     * The host is not connected to any network.
     */
    NONE,
    /**
     * The host is behind a captive portal and
     *   cannot reach the full Internet.
     */
    PORTAL,
    /**
     * The host is connected to a network, but
     *   does not appear to be able to reach the full Internet.
     */
    LIMITED,
    /**
     * The host is connected to a network, and
     *   appears to be able to reach the full Internet.
     */
    FULL,
}
export enum DeviceState {
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
export enum DeviceStateReason {
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
    LAST,
}
/**
 * #NMDeviceType values indicate the type of hardware represented by
 * an #NMDevice.
 */
export enum DeviceType {
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
     * a TUN/TAP interface
     */
    TUN,
    /**
     * an IP tunnel interface
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
}
/**
 * #NMSetting8021xCKFormat values indicate the general type of a certificate
 * or private key
 */
export enum Setting8021xCKFormat {
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
     * file contains a PKCS#<!-- -->12 certificate
     * and private key
     */
    PKCS12,
}
/**
 * #NMSetting8021xCKScheme values indicate how a certificate or private key is
 * stored in the setting properties, either as a blob of the item's data, or as
 * a path to a certificate or private key file on the filesystem
 */
export enum Setting8021xCKScheme {
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
}
export enum Setting8021xError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingAdslError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingBluetoothError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the connection
     * did not contain a required type setting, ie for DUN connections the connection
     * must also contain an #NMSettingGsm or #NMSettingCdma as appropriate
     */
    TYPESETTINGNOTFOUND,
}
export enum SettingBondError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     */
    MISSINGPROPERTY,
    /**
     * the option was invalid
     */
    INVALIDOPTION,
    /**
     * the option was missing
     * required
     */
    MISSINGOPTION,
}
export enum SettingBridgeError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingBridgePortError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and
     * is required
     */
    MISSINGPROPERTY,
}
export enum SettingCdmaError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the required #NMSettingSerial
     * is missing in the connection
     */
    MISSINGSERIALSETTING,
}
/**
 * These flags modify the comparison behavior when comparing two settings or
 * two connections.
 */
export enum SettingCompareFlags {
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
     * the secret's flags indicate the secret is owned by a user secret agent
     * (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_AGENT_OWNED)`
     */
    IGNORE_AGENT_OWNED_SECRETS,
    /**
     * ignore secrets for which
     * the secret's flags indicate the secret should not be saved to persistent
     * storage (ie, the secret's flag includes `NM_SETTING_SECRET_FLAG_NOT_SAVED)`
     */
    IGNORE_NOT_SAVED_SECRETS,
    /**
     * if this flag is set,
     * nm_setting_diff() and nm_connection_diff() will also include properties that
     * are set to their default value. See also `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_NO_DEFAULT`.
     */
    DIFF_RESULT_WITH_DEFAULT,
    /**
     * if this flag is set,
     * nm_setting_diff() and nm_connection_diff() will not include properties that
     * are set to their default value. This is the opposite of
     * `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`. If both flags are set together,
     * `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT` wins. If both flags are unset,
     * this means to exclude default properties if there is a setting to compare,
     * but include all properties, if the setting 'b' is missing. This is the legacy
     * behaviour of libnm-util, where nm_setting_diff() behaved differently depending
     * on whether the setting 'b' was available. If `NM_SETTING_COMPARE_FLAG_DIFF_RESULT_WITH_DEFAULT`
     * is set, nm_setting_diff() will also set the flags `NM_SETTING_DIFF_RESULT_IN_A_DEFAULT`
     * and `NM_SETTING_DIFF_RESULT_IN_B_DEFAULT,` if the values are default values.
     */
    DIFF_RESULT_NO_DEFAULT,
}
/**
 * Describes errors that may result from operations involving a
 * #NMSettingConnection.
 */
export enum SettingConnectionError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property's value is
     *   invalid
     */
    INVALIDPROPERTY,
    /**
     * a required property is not
     *   present
     */
    MISSINGPROPERTY,
    /**
     * the #NMSetting object
     *   referenced by the setting name contained in the
     *   #NMSettingConnection:type property was not present in the #NMConnection
     */
    TYPESETTINGNOTFOUND,
    /**
     * ip configuration is not
     *   allowed to be present.
     */
    IPCONFIGNOTALLOWED,
}
export enum SettingDcbError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
/**
 * DCB feature flags.
 */
export enum SettingDcbFlags {
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
 * These values indicate the result of a setting difference operation.
 */
export enum SettingDiffResult {
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
 * Describes errors that may result from operations involving a #NMSetting.
 */
export enum SettingError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * a property required by the operation
     *   was not found; for example, an attempt to update an invalid secret
     */
    PROPERTYNOTFOUND,
    /**
     * an operation which requires a secret
     *   was attempted on a non-secret property
     */
    PROPERTYNOTSECRET,
    /**
     * the operation requires a property
     *   of a specific type, or the value couldn't be transformed to the same type
     *   as the property being acted upon
     */
    PROPERTYTYPEMISMATCH,
}
export enum SettingGenericError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and
     * is required
     */
    MISSINGPROPERTY,
}
export enum SettingGsmError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the required #NMSettingSerial
     * is missing in the connection
     */
    MISSINGSERIALSETTING,
}
/**
 * #NMSettingGsmNetworkBand values indicate the allowed frequency bands
 * the device may use when connecting to this network.
 */
export enum SettingGsmNetworkBand {
    /**
     * unknown or no band specified
     */
    UNKNOWN,
    /**
     * any band is allowed
     */
    ANY,
    /**
     * 900 MHz original GSM band
     */
    EGSM,
    /**
     * 1800 MHz DCS band
     */
    DCS,
    /**
     * US 1900 MHz PCS band
     */
    PCS,
    /**
     * US 850 MHz Cellular band
     */
    G850,
    /**
     * WCDMA 3GPP UMTS 2100 MHz (Class I)
     */
    U2100,
    /**
     * WCDMA 3GPP UMTS 1800 MHz (Class III)
     */
    U1800,
    /**
     * WCDMA 3GPP AWS 1700/2100 MHz (Class IV)
     */
    U17IV,
    /**
     * WCDMA 3GPP UMTS 800 MHz (Class VI)
     */
    U800,
    /**
     * WCDMA 3GPP UMTS 850 MHz (Class V)
     */
    U850,
    /**
     * WCDMA 3GPP UMTS 900 MHz (Class VIII)
     */
    U900,
    /**
     * WCDMA 3GPP UMTS 1700 MHz (Class IX)
     */
    U17IX,
    /**
     * WCDMA 3GPP UMTS 1900 MHz (Class II)
     */
    U1900,
    /**
     * WCDMA 3GPP UMTS 2600 MHz (Class VII, internal)
     */
    U2600,
}
/**
 * #NMSettingGsmNetworkType values indicate the allowed access technologies
 * the device may use when connecting to this network.
 */
export enum SettingGsmNetworkType {
    /**
     * any access technology may be used
     */
    ANY,
    /**
     * only 3G-type (UMTS and HSPA)
     * technologies may be used
     */
    UMTS_HSPA,
    /**
     * only 2G-type (GPRS and EDGE)
     * technologies may be used
     */
    GPRS_EDGE,
    /**
     * 3G-type technologies are
     * preferred but 2G-type technologies may be used as a fallback
     */
    PREFER_UMTS_HSPA,
    /**
     * 2G-type technologies are
     * preferred but 3G-type technologies may be used as a fallback
     */
    PREFER_GPRS_EDGE,
    /**
     * 4G/LTE-type technologies are
     * preferred but 3G/2/-type technologies may be used as a fallback
     */
    PREFER_4G,
    /**
     * only 4G/LTE type
     * technologies may be used
     */
    TODO_4G,
}
/**
 * These flags determine which properties are added to the resulting hash
 * when calling nm_setting_to_hash().
 */
export enum SettingHashFlags {
    /**
     * hash all properties (including secrets)
     */
    ALL,
    /**
     * do not include secrets
     */
    NO_SECRETS,
    /**
     * only hash secrets
     */
    ONLY_SECRETS,
}
export enum SettingIP4ConfigError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the property's value is
     * not valid with the given IP4 method
     */
    NOTALLOWEDFORMETHOD,
}
export enum SettingIP6ConfigError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the property's value is
     * not valid with the given IPv6 method
     */
    NOTALLOWEDFORMETHOD,
}
/**
 * #NMSettingIP6ConfigPrivacy values indicate if and how IPv6 Privacy
 * Extensions are used (RFC4941).
 */
export enum SettingIP6ConfigPrivacy {
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
export enum SettingInfinibandError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingOlpcMeshError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingPPPError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * requiring MPPE is not compatible
     * with other setting configuration parameters
     */
    REQUIREMPPENOTALLOWED,
}
export enum SettingPPPOEError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * the connection
     * did not contain a required PPP setting for PPP related options
     */
    MISSINGPPPSETTING,
}
/**
 * These flags indicate specific behavior related to handling of a secret.  Each
 * secret has a corresponding set of these flags which indicate how the secret
 * is to be stored and/or requested when it is needed.
 */
export enum SettingSecretFlags {
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
export enum SettingSerialError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * one of the properties of the
     * setting requires the connection to contain an #NMSettingPPP setting
     */
    MISSINGPPPSETTING,
}
export enum SettingTeamError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingTeamPortError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and
     * is required
     */
    MISSINGPROPERTY,
}
export enum SettingVlanError {
    /**
     * unknown or unclassified error
     */
    UNKNOWN,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     *   required
     */
    MISSINGPROPERTY,
    /**
     * the VLAN parent was specified
     *   inconsistently
     */
    INVALIDPARENT,
}
export enum SettingVpnError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingWimaxError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingWiredError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
}
export enum SettingWirelessError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was missing and is
     * required
     */
    MISSINGPROPERTY,
    /**
     * property values require
     * the presence of an #NMSettingWirelessSecurity object in the connection
     */
    MISSINGSECURITYSETTING,
    /**
     * the property channel was
     * set to a value that requires the #NMSettingWireless:band property to be set
     */
    CHANNELREQUIRESBAND,
}
export enum SettingWirelessSecurityError {
    /**
     * unknown or unclassified error
     */
    UNKNOWNERROR,
    /**
     * the property was invalid
     */
    INVALIDPROPERTY,
    /**
     * the property was
     * missing and is required
     */
    MISSINGPROPERTY,
    /**
     * a property contained
     * a value that requires the connection to contain a #NMSetting8021x setting
     */
    MISSING8021XSETTING,
    /**
     * LEAP authentication
     * was specified but key management was not set to "8021x"
     */
    LEAPREQUIRES8021X,
    /**
     * LEAP authentication
     * was specified but no LEAP username was given
     */
    LEAPREQUIRESUSERNAME,
    /**
     * Shared Key
     * authentication was specified but the setting did not specify WEP as the
     * encryption protocol
     */
    SHAREDKEYREQUIRESWEP,
}
/**
 * #NMState values indicate the current overall networking state.
 */
export enum State {
    /**
     * networking state is unknown
     */
    UNKNOWN,
    /**
     * networking is not enabled
     */
    ASLEEP,
    /**
     * there is no active network connection
     */
    DISCONNECTED,
    /**
     * network connections are being cleaned up
     */
    DISCONNECTING,
    /**
     * a network connection is being started
     */
    CONNECTING,
    /**
     * there is only local IPv4 and/or IPv6 connectivity
     */
    CONNECTED_LOCAL,
    /**
     * there is only site-wide IPv4 and/or IPv6 connectivity
     */
    CONNECTED_SITE,
    /**
     * there is global IPv4 and/or IPv6 Internet connectivity
     */
    CONNECTED_GLOBAL,
}
/**
 * Describes generic security mechanisms that 802.11 access points may offer.
 * Used with nm_utils_security_valid() for checking whether a given access
 * point is compatible with a network device.
 */
export enum UtilsSecurityType {
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
}
/**
 * VPN connection states
 */
export enum VPNConnectionState {
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
export enum VPNConnectionStateReason {
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
 * VPN plugin failure reasons
 */
export enum VPNPluginFailure {
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
export enum VPNServiceState {
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
 * #NMVlanFlags values control the behavior of the VLAN interface.
 */
export enum VlanFlags {
    /**
     * indicates that this interface should reorder
     *  outgoing packet headers to look more like a non-VLAN Ethernet interface
     */
    REORDER_HEADERS,
    /**
     * indicates that this interface should use GVRP to register
     *  itself with it's switch
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
     *  itself with it's switch
     */
    MVRP,
}
/**
 * A selector for traffic priority maps; these map Linux SKB priorities
 * to 802.1p priorities used in VLANs.
 */
export enum VlanPriorityMap {
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
export enum WepKeyType {
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
     * on my way back from the market 235Q&^%^*%") instead of a hexadecimal or ASCII
     * key.  Passphrases are between 8 and 64 characters inclusive and are hashed
     * the actual WEP key using the MD5 hash algorithm.
     */
    PASSPHRASE,
    /**
     * placeholder value for bounds-checking
     */
    LAST,
}
/**
 * 802.11 access point flags.
 * @bitfield 
 */
export enum TODO_80211ApFlags {
    /**
     * access point has no special capabilities
     */
    NONE,
    /**
     * access point requires authentication and
     * encryption (usually means WEP)
     */
    PRIVACY,
}
/**
 * 802.11 access point security and authentication flags.  These flags describe
 * the current security requirements of an access point as determined from the
 * access point's beacon.
 * @bitfield 
 */
export enum TODO_80211ApSecurityFlags {
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
}
/**
 * #NMBluetoothCapabilities values indicate the usable capabilities of a
 * Bluetooth device.
 * @bitfield 
 */
export enum BluetoothCapabilities {
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
 * General device capability flags.
 * @bitfield 
 */
export enum DeviceCapabilities {
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
}
/**
 * #NMDeviceModemCapabilities values indicate the generic radio access
 * technology families a modem device supports.  For more information on the
 * specific access technologies the device supports use the ModemManager D-Bus
 * API.
 * @bitfield 
 */
export enum DeviceModemCapabilities {
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
}
/**
 * 802.11 specific device encryption and authentication capabilities.
 * @bitfield 
 */
export enum DeviceWifiCapabilities {
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
}
export const CONNECTION_CHANGED: string | null
export const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string | null
export const CONNECTION_PATH: string | null
export const CONNECTION_SECRETS_CLEARED: string | null
export const CONNECTION_SECRETS_UPDATED: string | null
export const DBUS_IFACE_SETTINGS: string | null
export const DBUS_IFACE_SETTINGS_CONNECTION: string | null
export const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string | null
export const DBUS_INTERFACE: string | null
export const DBUS_INTERFACE_VPN: string | null
export const DBUS_INTERFACE_VPN_CONNECTION: string | null
export const DBUS_INVALID_VPN_CONNECTION: string | null
export const DBUS_NO_ACTIVE_VPN_CONNECTION: string | null
export const DBUS_NO_VPN_CONNECTIONS: string | null
export const DBUS_PATH: string | null
export const DBUS_PATH_AGENT_MANAGER: string | null
export const DBUS_PATH_SECRET_AGENT: string | null
export const DBUS_PATH_SETTINGS: string | null
export const DBUS_PATH_SETTINGS_CONNECTION: string | null
export const DBUS_PATH_VPN: string | null
export const DBUS_PATH_VPN_CONNECTION: string | null
export const DBUS_SERVICE: string | null
export const DBUS_VPN_ALREADY_STARTED: string | null
export const DBUS_VPN_ALREADY_STOPPED: string | null
export const DBUS_VPN_BAD_ARGUMENTS: string | null
export const DBUS_VPN_ERROR_PREFIX: string | null
export const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string | null
export const DBUS_VPN_SIGNAL_CONNECT_FAILED: string | null
export const DBUS_VPN_SIGNAL_IP4_CONFIG: string | null
export const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string | null
export const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string | null
export const DBUS_VPN_SIGNAL_LOGIN_BANNER: string | null
export const DBUS_VPN_SIGNAL_LOGIN_FAILED: string | null
export const DBUS_VPN_SIGNAL_STATE_CHANGE: string | null
export const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string | null
export const DBUS_VPN_STARTING_IN_PROGRESS: string | null
export const DBUS_VPN_STOPPING_IN_PROGRESS: string | null
export const DBUS_VPN_WRONG_STATE: string | null
/**
 * Evaluates to the major version number of NetworkManager which this source
 * is compiled against.
 */
export const MAJOR_VERSION: number
/**
 * Evaluates to the micro version number of NetworkManager which this source
 * compiled against.
 */
export const MICRO_VERSION: number
/**
 * Evaluates to the minor version number of NetworkManager which this source
 * is compiled against.
 */
export const MINOR_VERSION: number
export const SETTING_802_1X_ALTSUBJECT_MATCHES: string | null
export const SETTING_802_1X_ANONYMOUS_IDENTITY: string | null
export const SETTING_802_1X_CA_CERT: string | null
export const SETTING_802_1X_CA_PATH: string | null
export const SETTING_802_1X_CLIENT_CERT: string | null
export const SETTING_802_1X_EAP: string | null
export const SETTING_802_1X_IDENTITY: string | null
export const SETTING_802_1X_PAC_FILE: string | null
export const SETTING_802_1X_PASSWORD: string | null
export const SETTING_802_1X_PASSWORD_FLAGS: string | null
export const SETTING_802_1X_PASSWORD_RAW: string | null
export const SETTING_802_1X_PASSWORD_RAW_FLAGS: string | null
export const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string | null
export const SETTING_802_1X_PHASE1_PEAPLABEL: string | null
export const SETTING_802_1X_PHASE1_PEAPVER: string | null
export const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string | null
export const SETTING_802_1X_PHASE2_AUTH: string | null
export const SETTING_802_1X_PHASE2_AUTHEAP: string | null
export const SETTING_802_1X_PHASE2_CA_CERT: string | null
export const SETTING_802_1X_PHASE2_CA_PATH: string | null
export const SETTING_802_1X_PHASE2_CLIENT_CERT: string | null
export const SETTING_802_1X_PHASE2_PRIVATE_KEY: string | null
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string | null
export const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string | null
export const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string | null
export const SETTING_802_1X_PIN: string | null
export const SETTING_802_1X_PIN_FLAGS: string | null
export const SETTING_802_1X_PRIVATE_KEY: string | null
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string | null
export const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string | null
export const SETTING_802_1X_SETTING_NAME: string | null
export const SETTING_802_1X_SUBJECT_MATCH: string | null
export const SETTING_802_1X_SYSTEM_CA_CERTS: string | null
export const SETTING_ADSL_ENCAPSULATION: string | null
export const SETTING_ADSL_ENCAPSULATION_LLC: string | null
export const SETTING_ADSL_ENCAPSULATION_VCMUX: string | null
export const SETTING_ADSL_PASSWORD: string | null
export const SETTING_ADSL_PASSWORD_FLAGS: string | null
export const SETTING_ADSL_PROTOCOL: string | null
export const SETTING_ADSL_PROTOCOL_IPOATM: string | null
export const SETTING_ADSL_PROTOCOL_PPPOA: string | null
export const SETTING_ADSL_PROTOCOL_PPPOE: string | null
export const SETTING_ADSL_SETTING_NAME: string | null
export const SETTING_ADSL_USERNAME: string | null
export const SETTING_ADSL_VCI: string | null
export const SETTING_ADSL_VPI: string | null
export const SETTING_BLUETOOTH_BDADDR: string | null
export const SETTING_BLUETOOTH_SETTING_NAME: string | null
export const SETTING_BLUETOOTH_TYPE: string | null
/**
 * Connection type describing a connection to devices that support the Bluetooth
 * DUN profile.
 */
export const SETTING_BLUETOOTH_TYPE_DUN: string | null
/**
 * Connection type describing a connection to devices that support the Bluetooth
 * NAP (Network Access Point) protocol, which accepts connections via PANU.
 */
export const SETTING_BLUETOOTH_TYPE_PANU: string | null
export const SETTING_BOND_INTERFACE_NAME: string | null
export const SETTING_BOND_OPTIONS: string | null
export const SETTING_BOND_OPTION_AD_SELECT: string | null
export const SETTING_BOND_OPTION_ARP_INTERVAL: string | null
export const SETTING_BOND_OPTION_ARP_IP_TARGET: string | null
export const SETTING_BOND_OPTION_ARP_VALIDATE: string | null
export const SETTING_BOND_OPTION_DOWNDELAY: string | null
export const SETTING_BOND_OPTION_FAIL_OVER_MAC: string | null
export const SETTING_BOND_OPTION_LACP_RATE: string | null
export const SETTING_BOND_OPTION_MIIMON: string | null
export const SETTING_BOND_OPTION_MODE: string | null
export const SETTING_BOND_OPTION_PRIMARY: string | null
export const SETTING_BOND_OPTION_PRIMARY_RESELECT: string | null
export const SETTING_BOND_OPTION_RESEND_IGMP: string | null
export const SETTING_BOND_OPTION_UPDELAY: string | null
export const SETTING_BOND_OPTION_USE_CARRIER: string | null
export const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string | null
export const SETTING_BOND_SETTING_NAME: string | null
export const SETTING_BRIDGE_AGEING_TIME: string | null
export const SETTING_BRIDGE_FORWARD_DELAY: string | null
export const SETTING_BRIDGE_HELLO_TIME: string | null
export const SETTING_BRIDGE_INTERFACE_NAME: string | null
export const SETTING_BRIDGE_MAC_ADDRESS: string | null
export const SETTING_BRIDGE_MAX_AGE: string | null
export const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string | null
export const SETTING_BRIDGE_PORT_PATH_COST: string | null
export const SETTING_BRIDGE_PORT_PRIORITY: string | null
export const SETTING_BRIDGE_PORT_SETTING_NAME: string | null
export const SETTING_BRIDGE_PRIORITY: string | null
export const SETTING_BRIDGE_SETTING_NAME: string | null
export const SETTING_BRIDGE_STP: string | null
export const SETTING_CDMA_NUMBER: string | null
export const SETTING_CDMA_PASSWORD: string | null
export const SETTING_CDMA_PASSWORD_FLAGS: string | null
export const SETTING_CDMA_SETTING_NAME: string | null
export const SETTING_CDMA_USERNAME: string | null
export const SETTING_CONNECTION_AUTOCONNECT: string | null
export const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string | null
export const SETTING_CONNECTION_ID: string | null
export const SETTING_CONNECTION_INTERFACE_NAME: string | null
export const SETTING_CONNECTION_MASTER: string | null
export const SETTING_CONNECTION_PERMISSIONS: string | null
export const SETTING_CONNECTION_READ_ONLY: string | null
export const SETTING_CONNECTION_SECONDARIES: string | null
export const SETTING_CONNECTION_SETTING_NAME: string | null
export const SETTING_CONNECTION_SLAVE_TYPE: string | null
export const SETTING_CONNECTION_TIMESTAMP: string | null
export const SETTING_CONNECTION_TYPE: string | null
export const SETTING_CONNECTION_UUID: string | null
export const SETTING_CONNECTION_ZONE: string | null
export const SETTING_DCB_APP_FCOE_FLAGS: string | null
export const SETTING_DCB_APP_FCOE_MODE: string | null
export const SETTING_DCB_APP_FCOE_PRIORITY: string | null
export const SETTING_DCB_APP_FIP_FLAGS: string | null
export const SETTING_DCB_APP_FIP_PRIORITY: string | null
export const SETTING_DCB_APP_ISCSI_FLAGS: string | null
export const SETTING_DCB_APP_ISCSI_PRIORITY: string | null
/**
 * Indicates that the FCoE controller should use "fabric" mode (default)
 */
export const SETTING_DCB_FCOE_MODE_FABRIC: string | null
/**
 * Indicates that the FCoE controller should use "VN2VN" mode.
 */
export const SETTING_DCB_FCOE_MODE_VN2VN: string | null
export const SETTING_DCB_PRIORITY_BANDWIDTH: string | null
export const SETTING_DCB_PRIORITY_FLOW_CONTROL: string | null
export const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string | null
export const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string | null
export const SETTING_DCB_PRIORITY_GROUP_FLAGS: string | null
export const SETTING_DCB_PRIORITY_GROUP_ID: string | null
export const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string | null
export const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string | null
export const SETTING_DCB_SETTING_NAME: string | null
export const SETTING_GENERIC_SETTING_NAME: string | null
export const SETTING_GSM_ALLOWED_BANDS: string | null
export const SETTING_GSM_APN: string | null
/**
 * #NM_SETTING_GSM_BANDS_MAX macro indicate the maximal value that can be used
 * as the allowed frequency bands (#NMSettingGsm:allowed-bands property).
 */
export const SETTING_GSM_BANDS_MAX: number
export const SETTING_GSM_HOME_ONLY: string | null
export const SETTING_GSM_NETWORK_ID: string | null
export const SETTING_GSM_NETWORK_TYPE: string | null
export const SETTING_GSM_NUMBER: string | null
export const SETTING_GSM_PASSWORD: string | null
export const SETTING_GSM_PASSWORD_FLAGS: string | null
export const SETTING_GSM_PIN: string | null
export const SETTING_GSM_PIN_FLAGS: string | null
export const SETTING_GSM_SETTING_NAME: string | null
export const SETTING_GSM_USERNAME: string | null
export const SETTING_INFINIBAND_MAC_ADDRESS: string | null
export const SETTING_INFINIBAND_MTU: string | null
export const SETTING_INFINIBAND_PARENT: string | null
export const SETTING_INFINIBAND_P_KEY: string | null
export const SETTING_INFINIBAND_SETTING_NAME: string | null
export const SETTING_INFINIBAND_TRANSPORT_MODE: string | null
export const SETTING_IP4_CONFIG_ADDRESSES: string | null
export const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string | null
export const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string | null
export const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string | null
export const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string | null
export const SETTING_IP4_CONFIG_DNS: string | null
export const SETTING_IP4_CONFIG_DNS_SEARCH: string | null
export const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string | null
export const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string | null
export const SETTING_IP4_CONFIG_MAY_FAIL: string | null
export const SETTING_IP4_CONFIG_METHOD: string | null
/**
 * IPv4 configuration should be automatically determined via a method appropriate
 * for the hardware interface, ie DHCP or PPP or some other device-specific
 * manner.
 */
export const SETTING_IP4_CONFIG_METHOD_AUTO: string | null
/**
 * This connection does not use or require IPv4 address and it should be disabled.
 */
export const SETTING_IP4_CONFIG_METHOD_DISABLED: string | null
/**
 * IPv4 configuration should be automatically configured for link-local-only
 * operation.
 */
export const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string | null
/**
 * All necessary IPv4 configuration (addresses, prefix, DNS, etc) is specified
 * in the setting's properties.
 */
export const SETTING_IP4_CONFIG_METHOD_MANUAL: string | null
/**
 * This connection specifies configuration that allows other computers to
 * connect through it to the default network (usually the Internet).  The
 * connection's interface will be assigned a private address, and a DHCP server,
 * caching DNS server, and Network Address Translation (NAT) functionality will
 * be started on this connection's interface to allow other devices to connect
 * through that interface to the default network.
 */
export const SETTING_IP4_CONFIG_METHOD_SHARED: string | null
export const SETTING_IP4_CONFIG_NEVER_DEFAULT: string | null
export const SETTING_IP4_CONFIG_ROUTES: string | null
export const SETTING_IP4_CONFIG_ROUTE_METRIC: string | null
export const SETTING_IP4_CONFIG_SETTING_NAME: string | null
export const SETTING_IP6_CONFIG_ADDRESSES: string | null
export const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string | null
export const SETTING_IP6_CONFIG_DNS: string | null
export const SETTING_IP6_CONFIG_DNS_SEARCH: string | null
export const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string | null
export const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string | null
export const SETTING_IP6_CONFIG_IP6_PRIVACY: string | null
export const SETTING_IP6_CONFIG_MAY_FAIL: string | null
export const SETTING_IP6_CONFIG_METHOD: string | null
/**
 * IPv6 configuration should be automatically determined via a method appropriate
 * for the hardware interface, ie router advertisements, DHCP, or PPP or some
 * other device-specific manner.
 */
export const SETTING_IP6_CONFIG_METHOD_AUTO: string | null
/**
 * IPv6 configuration should be automatically determined via DHCPv6 only and
 * router advertisements should be ignored.
 */
export const SETTING_IP6_CONFIG_METHOD_DHCP: string | null
/**
 * IPv6 is not required or is handled by some other mechanism, and NetworkManager
 * should not configure IPv6 for this connection.
 */
export const SETTING_IP6_CONFIG_METHOD_IGNORE: string | null
/**
 * IPv6 configuration should be automatically configured for link-local-only
 * operation.
 */
export const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string | null
/**
 * All necessary IPv6 configuration (addresses, prefix, DNS, etc) is specified
 * in the setting's properties.
 */
export const SETTING_IP6_CONFIG_METHOD_MANUAL: string | null
/**
 * This connection specifies configuration that allows other computers to
 * connect through it to the default network (usually the Internet).  The
 * connection's interface will be assigned a private address, and router
 * advertisements, a caching DNS server, and Network Address Translation (NAT)
 * functionality will be started on this connection's interface to allow other
 * devices to connect through that interface to the default network. (not yet
 * supported for IPv6)
 */
export const SETTING_IP6_CONFIG_METHOD_SHARED: string | null
export const SETTING_IP6_CONFIG_NEVER_DEFAULT: string | null
export const SETTING_IP6_CONFIG_ROUTES: string | null
export const SETTING_IP6_CONFIG_ROUTE_METRIC: string | null
export const SETTING_IP6_CONFIG_SETTING_NAME: string | null
export const SETTING_NAME: string | null
export const SETTING_OLPC_MESH_CHANNEL: string | null
export const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string | null
export const SETTING_OLPC_MESH_SETTING_NAME: string | null
export const SETTING_OLPC_MESH_SSID: string | null
export const SETTING_PARAM_FUZZY_IGNORE: number
export const SETTING_PARAM_REQUIRED: number
export const SETTING_PARAM_SECRET: number
export const SETTING_PARAM_SERIALIZE: number
export const SETTING_PPPOE_PASSWORD: string | null
export const SETTING_PPPOE_PASSWORD_FLAGS: string | null
export const SETTING_PPPOE_SERVICE: string | null
export const SETTING_PPPOE_SETTING_NAME: string | null
export const SETTING_PPPOE_USERNAME: string | null
export const SETTING_PPP_BAUD: string | null
export const SETTING_PPP_CRTSCTS: string | null
export const SETTING_PPP_LCP_ECHO_FAILURE: string | null
export const SETTING_PPP_LCP_ECHO_INTERVAL: string | null
export const SETTING_PPP_MPPE_STATEFUL: string | null
export const SETTING_PPP_MRU: string | null
export const SETTING_PPP_MTU: string | null
export const SETTING_PPP_NOAUTH: string | null
export const SETTING_PPP_NOBSDCOMP: string | null
export const SETTING_PPP_NODEFLATE: string | null
export const SETTING_PPP_NO_VJ_COMP: string | null
export const SETTING_PPP_REFUSE_CHAP: string | null
export const SETTING_PPP_REFUSE_EAP: string | null
export const SETTING_PPP_REFUSE_MSCHAP: string | null
export const SETTING_PPP_REFUSE_MSCHAPV2: string | null
export const SETTING_PPP_REFUSE_PAP: string | null
export const SETTING_PPP_REQUIRE_MPPE: string | null
export const SETTING_PPP_REQUIRE_MPPE_128: string | null
export const SETTING_PPP_SETTING_NAME: string | null
export const SETTING_SERIAL_BAUD: string | null
export const SETTING_SERIAL_BITS: string | null
export const SETTING_SERIAL_PARITY: string | null
export const SETTING_SERIAL_SEND_DELAY: string | null
export const SETTING_SERIAL_SETTING_NAME: string | null
export const SETTING_SERIAL_STOPBITS: string | null
export const SETTING_TEAM_CONFIG: string | null
export const SETTING_TEAM_INTERFACE_NAME: string | null
export const SETTING_TEAM_PORT_CONFIG: string | null
export const SETTING_TEAM_PORT_SETTING_NAME: string | null
export const SETTING_TEAM_SETTING_NAME: string | null
export const SETTING_VLAN_EGRESS_PRIORITY_MAP: string | null
export const SETTING_VLAN_FLAGS: string | null
export const SETTING_VLAN_ID: string | null
export const SETTING_VLAN_INGRESS_PRIORITY_MAP: string | null
export const SETTING_VLAN_INTERFACE_NAME: string | null
export const SETTING_VLAN_PARENT: string | null
export const SETTING_VLAN_SETTING_NAME: string | null
export const SETTING_VPN_DATA: string | null
export const SETTING_VPN_PERSISTENT: string | null
export const SETTING_VPN_SECRETS: string | null
export const SETTING_VPN_SERVICE_TYPE: string | null
export const SETTING_VPN_SETTING_NAME: string | null
export const SETTING_VPN_USER_NAME: string | null
export const SETTING_WIMAX_MAC_ADDRESS: string | null
export const SETTING_WIMAX_NETWORK_NAME: string | null
export const SETTING_WIMAX_SETTING_NAME: string | null
export const SETTING_WIRED_AUTO_NEGOTIATE: string | null
export const SETTING_WIRED_CLONED_MAC_ADDRESS: string | null
export const SETTING_WIRED_DUPLEX: string | null
export const SETTING_WIRED_MAC_ADDRESS: string | null
export const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string | null
export const SETTING_WIRED_MTU: string | null
export const SETTING_WIRED_PORT: string | null
export const SETTING_WIRED_S390_NETTYPE: string | null
export const SETTING_WIRED_S390_OPTIONS: string | null
export const SETTING_WIRED_S390_SUBCHANNELS: string | null
export const SETTING_WIRED_SETTING_NAME: string | null
export const SETTING_WIRED_SPEED: string | null
export const SETTING_WIRELESS_BAND: string | null
export const SETTING_WIRELESS_BSSID: string | null
export const SETTING_WIRELESS_CHANNEL: string | null
export const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string | null
export const SETTING_WIRELESS_HIDDEN: string | null
export const SETTING_WIRELESS_MAC_ADDRESS: string | null
export const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string | null
export const SETTING_WIRELESS_MODE: string | null
/**
 * Indicates Ad-Hoc mode where no access point is expected to be present.
 */
export const SETTING_WIRELESS_MODE_ADHOC: string | null
/**
 * Indicates AP/master mode where the wireless device is started as an access
 * point/hotspot.
 */
export const SETTING_WIRELESS_MODE_AP: string | null
/**
 * Indicates infrastructure mode where an access point is expected to be present
 * for this connection.
 */
export const SETTING_WIRELESS_MODE_INFRA: string | null
export const SETTING_WIRELESS_MTU: string | null
export const SETTING_WIRELESS_POWERSAVE: string | null
export const SETTING_WIRELESS_RATE: string | null
export const SETTING_WIRELESS_SEC: string | null
export const SETTING_WIRELESS_SECURITY_AUTH_ALG: string | null
export const SETTING_WIRELESS_SECURITY_GROUP: string | null
export const SETTING_WIRELESS_SECURITY_KEY_MGMT: string | null
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string | null
export const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string | null
export const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string | null
export const SETTING_WIRELESS_SECURITY_PAIRWISE: string | null
export const SETTING_WIRELESS_SECURITY_PROTO: string | null
export const SETTING_WIRELESS_SECURITY_PSK: string | null
export const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string | null
export const SETTING_WIRELESS_SECURITY_SETTING_NAME: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY0: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY1: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY2: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY3: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string | null
export const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string | null
export const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string | null
export const SETTING_WIRELESS_SEEN_BSSIDS: string | null
export const SETTING_WIRELESS_SETTING_NAME: string | null
export const SETTING_WIRELESS_SSID: string | null
export const SETTING_WIRELESS_TX_POWER: string | null
/**
 * The maximum length of hardware addresses handled by NetworkManager itself,
 * nm_utils_hwaddr_len(), and nm_utils_hwaddr_aton().
 */
export const UTILS_HWADDR_LEN_MAX: number
export const VLAN_FLAGS_ALL: number
export const VPN_DBUS_PLUGIN_INTERFACE: string | null
export const VPN_DBUS_PLUGIN_PATH: string | null
export const VPN_PLUGIN_CAN_PERSIST: string | null
export const VPN_PLUGIN_CONFIG_BANNER: string | null
export const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string | null
export const VPN_PLUGIN_CONFIG_HAS_IP4: string | null
export const VPN_PLUGIN_CONFIG_HAS_IP6: string | null
export const VPN_PLUGIN_CONFIG_MTU: string | null
export const VPN_PLUGIN_CONFIG_TUNDEV: string | null
export const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string | null
export const VPN_PLUGIN_IP4_CONFIG_DNS: string | null
export const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string | null
export const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string | null
export const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string | null
export const VPN_PLUGIN_IP4_CONFIG_MSS: string | null
export const VPN_PLUGIN_IP4_CONFIG_NBNS: string | null
export const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string | null
export const VPN_PLUGIN_IP4_CONFIG_PREFIX: string | null
export const VPN_PLUGIN_IP4_CONFIG_PTP: string | null
export const VPN_PLUGIN_IP4_CONFIG_ROUTES: string | null
export const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string | null
export const VPN_PLUGIN_IP6_CONFIG_DNS: string | null
export const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string | null
export const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string | null
export const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string | null
export const VPN_PLUGIN_IP6_CONFIG_MSS: string | null
export const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string | null
export const VPN_PLUGIN_IP6_CONFIG_PREFIX: string | null
export const VPN_PLUGIN_IP6_CONFIG_PTP: string | null
export const VPN_PLUGIN_IP6_CONFIG_ROUTES: string | null
/**
 * Registers an error quark for #NMConnection if necessary.
 * @returns the error quark used for #NMConnection errors.
 */
export function connectionErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSetting8021x if necessary.
 * @returns the error quark used for #NMSetting8021x errors.
 */
export function setting8021xErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingAdsl if necessary.
 * @returns the error quark used for #NMSettingAdsl errors.
 */
export function settingAdslErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingBluetooth if necessary.
 * @returns the error quark used for #NMSettingBluetooth errors.
 */
export function settingBluetoothErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingBond if necessary.
 * @returns the error quark used for #NMSettingBond errors.
 */
export function settingBondErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingBridge if necessary.
 * @returns the error quark used for #NMSettingBridge errors.
 */
export function settingBridgeErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingBridgePort if necessary.
 * @returns the error quark used for #NMSettingBridgePort errors.
 */
export function settingBridgePortErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingCdma if necessary.
 * @returns the error quark used for #NMSettingCdma errors.
 */
export function settingCdmaErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingConnection if necessary.
 * @returns the error quark used for #NMSettingConnection errors.
 */
export function settingConnectionErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingDcb if necessary.
 * @returns the error quark used for #NMSettingDcb errors.
 */
export function settingDcbErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSetting if necessary.
 * @returns the error quark used for NMSetting errors.
 */
export function settingErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingGeneric if necessary.
 * @returns the error quark used for #NMSettingGeneric errors.
 */
export function settingGenericErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingGsm if necessary.
 * @returns the error quark used for #NMSettingGsm errors.
 */
export function settingGsmErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingInfiniband if necessary.
 * @returns the error quark used for #NMSettingInfiniband errors.
 */
export function settingInfinibandErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingIP4Config if necessary.
 * @returns the error quark used for #NMSettingIP4Config errors.
 */
export function settingIp4ConfigErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingIP6Config if necessary.
 * @returns the error quark used for #NMSettingIP6Config errors.
 */
export function settingIp6ConfigErrorQuark(): GLib.Quark
export function settingOlpcMeshErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingPPP if necessary.
 * @returns the error quark used for #NMSettingPPP errors.
 */
export function settingPppErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingPPPOE if necessary.
 * @returns the error quark used for #NMSettingPPPOE errors.
 */
export function settingPppoeErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingSerial if necessary.
 * @returns the error quark used for #NMSettingSerial errors.
 */
export function settingSerialErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingTeam if necessary.
 * @returns the error quark used for #NMSettingTeam errors.
 */
export function settingTeamErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingTeamPort if necessary.
 * @returns the error quark used for #NMSettingTeamPort errors.
 */
export function settingTeamPortErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingVlan if necessary.
 * @returns the error quark used for #NMSettingVlan errors.
 */
export function settingVlanErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingVPN if necessary.
 * @returns the error quark used for #NMSettingVPN errors.
 */
export function settingVpnErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingWimax if necessary.
 * @returns the error quark used for #NMSettingWimax errors.
 */
export function settingWimaxErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingWired if necessary.
 * @returns the error quark used for #NMSettingWired errors.
 */
export function settingWiredErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingWireless if necessary.
 * @returns the error quark used for #NMSettingWireless errors.
 */
export function settingWirelessErrorQuark(): GLib.Quark
/**
 * Registers an error quark for #NMSettingWired if necessary.
 * @returns the error quark used for #NMSettingWired errors.
 */
export function settingWirelessSecurityErrorQuark(): GLib.Quark
/**
 * Given a set of device capabilities, and a desired security type to check
 * against, determines whether the combination of device capabilities and
 * desired security type are valid for AP/Hotspot connections.
 * @param type the security type to check device capabilities against, e.g. #NMU_SEC_STATIC_WEP
 * @param wifiCaps bitfield of the capabilities of the specific Wi-Fi device, e.g. #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
 * @returns %TRUE if the device capabilities are compatible with the desired @type, %FALSE if they are not.
 */
export function utilsApModeSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities): boolean
/**
 * Converts a byte-array `bytes` into a hexadecimal string.
 * If `final_len` is greater than -1, the returned string is terminated at
 * that index (returned_string[final_len] == '\0'),
 * @param bytes an array of bytes
 * @param len the length of the `bytes` array
 * @param finalLen an index where to cut off the returned string, or -1
 * @returns the textual form of @bytes
 */
export function utilsBin2hexstr(bytes: string | null, len: number, finalLen: number): string | null
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
 * <emphasis>every</emphasis> connection of type `other_type` is
 * compatible with `virtual_type;` it may depend on the exact
 * configuration of the two connections, or on the capabilities of an
 * underlying device driver.
 * @param virtualType a virtual connection type
 * @param otherType a connection type to test against `virtual_type`
 * @returns %TRUE or %FALSE
 */
export function utilsCheckVirtualDeviceCompatibility(virtualType: GObject.GType, otherType: GObject.GType): boolean
/**
 * No-op. Although this function still exists for ABI compatibility reasons, it
 * does not have any effect, and does not ever need to be called.
 */
export function utilsDeinit(): void
/**
 * This function does a quick printable character conversion of the SSID, simply
 * replacing embedded NULLs and non-printable characters with the hexadecimal
 * representation of that character.  Intended for debugging only, should not
 * be used for display of SSIDs.
 * @param ssid pointer to a buffer containing the SSID data
 * @param len length of the SSID data in `ssid`
 * @returns pointer to the escaped SSID, which uses an internal static buffer and will be overwritten by subsequent calls to this function
 */
export function utilsEscapeSsid(ssid: number, len: number): string | null
/**
 * Utility function to find out if the `filename` is in PKCS#<!-- -->12 format.
 * @param filename name of the file to test
 * @returns %TRUE if the file is PKCS#<!-- -->12, %FALSE if it is not
 */
export function utilsFileIsPkcs12(filename: string | null): boolean
/**
 * Searches for a `progname` file in a list of search `paths`.
 * @param progname the helper program name, like "iptables"   Must be a non-empty string, without path separator (/).
 * @param tryFirst a custom path to try first before searching.   It is silently ignored if it is empty or not an absolute path.
 * @param paths a %NULL terminated list of search paths.   Can be empty or %NULL, in which case only `try_first` is checked.
 * @param fileTestFlags the flags passed to g_file_test() when searching   for `progname`. Set it to 0 to skip the g_file_test().
 * @param predicate if given, pass the file name to this function   for additional checks. This check is performed after the check for   `file_test_flags`. You cannot omit both `file_test_flags` and `predicate`.
 * @returns the full path to the helper, if found, or %NULL if not found.   The returned string is not owned by the caller, but later   invocations of the function might overwrite it.
 */
export function utilsFileSearchInPaths(progname: string | null, tryFirst: string | null, paths: string | null, fileTestFlags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string | null
/**
 * Utility function to duplicate a hash table of #GValues.
 * @param hash a #GHashTable mapping string:GValue
 * @returns a newly allocated duplicated #GHashTable, caller must free the returned hash with g_hash_table_unref() or g_hash_table_destroy()
 */
export function utilsGvalueHashDup(hash: GLib.HashTable): GLib.HashTable
/**
 * Converts a hex string (2 characters) into its byte representation.
 * @param hex a string representing a hex byte
 * @returns a byte, or -1 if @hex doesn't represent a hex byte
 */
export function utilsHex2byte(hex: string | null): number
/**
 * Converts a hexadecimal string `hex` into a byte-array. The returned array
 * length is `len/`2.
 * @param hex an hex string
 * @param len the length of the `hex` string (it has to be even)
 * @returns a array of bytes, or %NULL on error
 */
export function utilsHexstr2bin(hex: string | null, len: number): string | null
/**
 * Parses `asc` and converts it to binary form in a #GByteArray. See
 * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
 * @param asc the ASCII representation of a hardware address
 * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
 * @returns a new #GByteArray, or %NULL if @asc couldn't be parsed
 */
export function utilsHwaddrAtoba(asc: string | null, type: number): number[]
/**
 * Parses `asc` and converts it to binary form in `buffer`. See
 * nm_utils_hwaddr_atoba() if you'd rather have the result in a
 * #GByteArray.
 * 
 * See also nm_utils_hwaddr_aton_len(), which takes an output length
 * instead of a type.
 * @param asc the ASCII representation of a hardware address
 * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
 * @param buffer buffer to store the result into
 * @returns @buffer, or %NULL if @asc couldn't be parsed
 */
export function utilsHwaddrAton(asc: string | null, type: number, buffer: any | null): number
/**
 * Parses `asc` and converts it to binary form in `buffer`.
 * Bytes in `asc` can be sepatared by colons (:), or hyphens (-), but not mixed.
 * @param asc the ASCII representation of a hardware address
 * @param buffer buffer to store the result into
 * @param length the expected length in bytes of the result and the size of the buffer in bytes.
 * @returns @buffer, or %NULL if @asc couldn't be parsed   or would be shorter or longer than @length.
 */
export function utilsHwaddrAtonLen(asc: string | null, buffer: any | null, length: number): number
/**
 * Returns the length in octets of a hardware address of type `type`.
 * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
 * @returns the positive length, or -1 if the type is unknown/unsupported.
 */
export function utilsHwaddrLen(type: number): number
/**
 * Converts `addr` to textual form.
 * 
 * See also nm_utils_hwaddr_ntoa_len(), which takes a length instead of
 * a type.
 * @param addr a binary hardware address
 * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
 * @returns the textual form of @addr
 */
export function utilsHwaddrNtoa(addr: any | null, type: number): string | null
/**
 * Converts `addr` to textual form.
 * @param addr a binary hardware address
 * @param length the length of `addr`
 * @returns the textual form of @addr
 */
export function utilsHwaddrNtoaLen(addr: any | null, length: number): string | null
/**
 * Returns the type (either <literal>ARPHRD_ETHER</literal> or
 * <literal>ARPHRD_INFINIBAND</literal>) of the raw address given its length.
 * @param len the length of hardware address in bytes
 * @returns the type, either <literal>ARPHRD_ETHER</literal> or <literal>ARPHRD_INFINIBAND</literal>.  If the length is unexpected, return -1 (unsupported type/length).
 */
export function utilsHwaddrType(len: number): number
/**
 * Parses `asc` to see if it is a valid hardware address of some type.
 * @param asc the ASCII representation of a hardware address
 * @returns %TRUE if @asc appears to be a valid hardware address   of some type, %FALSE if not.
 */
export function utilsHwaddrValid(asc: string | null): boolean
/**
 * This function is a 1:1 copy of the kernel's interface validation
 * function in net/core/dev.c.
 * @param name Name of interface
 * @returns %TRUE if interface name is valid, otherwise %FALSE is returned.
 */
export function utilsIfaceValidName(name: string | null): boolean
/**
 * Initializes libnm-util; should be called when starting any program that
 * uses libnm-util.  This function can be called more than once.
 * @returns %TRUE if the initialization was successful, %FALSE on failure.
 */
export function utilsInit(): boolean
/**
 * Utility function to convert a #GPtrArray of #GArrays of #guint32s representing
 * a list of NetworkManager IPv4 addresses (which is a tuple of address, gateway,
 * and prefix) into a #GSList of #NMIP4Address objects.  The specific format of
 * this serialization is not guaranteed to be stable and the #GArray may be
 * extended in the future.
 * @param value #GValue containing a #GPtrArray of #GArrays of #guint32s
 * @returns a newly allocated #GSList of #NMIP4Address objects
 */
export function utilsIp4AddressesFromGvalue(value: any): IP4Address[]
/**
 * Utility function to convert a #GSList of #NMIP4Address objects into a
 * #GPtrArray of #GArrays of #guint32s representing a list of NetworkManager IPv4
 * addresses (which is a tuple of address, gateway, and prefix).   The specific
 * format of this serialization is not guaranteed to be stable and may be
 * extended in the future.
 * @param list a list of #NMIP4Address objects
 * @param value a pointer to a #GValue into which to place the converted addresses, which should be unset by the caller (when no longer needed) with g_value_unset().
 */
export function utilsIp4AddressesToGvalue(list: IP4Address[], value: any): void
/**
 * When the Internet was originally set up, various ranges of IP addresses were
 * segmented into three network classes: A, B, and C.  This function will return
 * a prefix that is associated with the IP address specified defining where it
 * falls in the predefined classes.
 * @param ip an IPv4 address (in network byte order)
 * @returns the default class prefix for the given IP
 */
export function utilsIp4GetDefaultPrefix(ip: number): number
export function utilsIp4NetmaskToPrefix(netmask: number): number
export function utilsIp4PrefixToNetmask(prefix: number): number
/**
 * Utility function to convert a #GPtrArray of #GArrays of #guint32s representing
 * a list of NetworkManager IPv4 routes (which is a tuple of route, next hop,
 * prefix, and metric) into a #GSList of #NMIP4Route objects.  The specific
 * format of this serialization is not guaranteed to be stable and may be
 * extended in the future.
 * @param value #GValue containing a #GPtrArray of #GArrays of #guint32s
 * @returns a newly allocated #GSList of #NMIP4Route objects
 */
export function utilsIp4RoutesFromGvalue(value: any): IP4Route[]
/**
 * Utility function to convert a #GSList of #NMIP4Route objects into a
 * #GPtrArray of #GArrays of #guint32s representing a list of NetworkManager IPv4
 * routes (which is a tuple of route, next hop, prefix, and metric).   The
 * specific format of this serialization is not guaranteed to be stable and may
 * be extended in the future.
 * @param list a list of #NMIP4Route objects
 * @param value a pointer to a #GValue into which to place the converted routes, which should be unset by the caller (when no longer needed) with g_value_unset().
 */
export function utilsIp4RoutesToGvalue(list: IP4Route[], value: any): void
/**
 * Utility function to convert a #GPtrArray of #GValueArrays of (#GArray of guchars) and #guint32
 * representing a list of NetworkManager IPv6 addresses (which is a tuple of address,
 * prefix, and gateway), into a #GSList of #NMIP6Address objects.  The specific format of
 * this serialization is not guaranteed to be stable and the #GValueArray may be
 * extended in the future.
 * @param value gvalue containing a GPtrArray of GValueArrays of (GArray of guchars) and #guint32
 * @returns a newly allocated #GSList of #NMIP6Address objects
 */
export function utilsIp6AddressesFromGvalue(value: any): IP6Address[]
/**
 * Utility function to convert a #GSList of #NMIP6Address objects into a
 * #GPtrArray of #GValueArrays representing a list of NetworkManager IPv6 addresses
 * (which is a tuple of address, prefix, and gateway). The specific format of
 * this serialization is not guaranteed to be stable and may be extended in the
 * future.
 * @param list a list of #NMIP6Address objects
 * @param value a pointer to a #GValue into which to place the converted addresses, which should be unset by the caller (when no longer needed) with g_value_unset().
 */
export function utilsIp6AddressesToGvalue(list: IP6Address[], value: any): void
/**
 * Utility function #GPtrArray of #GValueArrays of (#GArray of #guchars), #guint32,
 * (#GArray of #guchars), and #guint32 representing a list of NetworkManager IPv6
 * routes (which is a tuple of destination, prefix, next hop, and metric)
 * into a #GSList of #NMIP6Route objects.  The specific format of this serialization
 * is not guaranteed to be stable and may be extended in the future.
 * @param value #GValue containing a #GPtrArray of #GValueArrays of (#GArray of #guchars), #guint32, (#GArray of #guchars), and #guint32
 * @returns a newly allocated #GSList of #NMIP6Route objects
 */
export function utilsIp6RoutesFromGvalue(value: any): IP6Route[]
/**
 * Utility function to convert a #GSList of #NMIP6Route objects into a #GPtrArray of
 * #GValueArrays of (#GArray of #guchars), #guint32, (#GArray of #guchars), and #guint32
 * representing a list of NetworkManager IPv6 routes (which is a tuple of destination,
 * prefix, next hop, and metric).  The specific format of this serialization is not
 * guaranteed to be stable and may be extended in the future.
 * @param list a list of #NMIP6Route objects
 * @param value a pointer to a #GValue into which to place the converted routes, which should be unset by the caller (when no longer needed) with g_value_unset().
 */
export function utilsIp6RoutesToGvalue(list: IP6Route[], value: any): void
/**
 * Different manufacturers use different mechanisms for not broadcasting the
 * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
 * number of known SSID-cloaking methods.
 * @param ssid pointer to a buffer containing the SSID data
 * @param len length of the SSID data in `ssid`
 * @returns %TRUE if the SSID is "empty", %FALSE if it is not
 */
export function utilsIsEmptySsid(ssid: number, len: number): boolean
/**
 * Checks if `str` is a UUID
 * @param str a string that might be a UUID
 * @returns %TRUE if @str is a UUID, %FALSE if not
 */
export function utilsIsUuid(str: string | null): boolean
/**
 * Encrypts the given RSA private key data with the given password (or generates
 * a password if no password was given) and converts the data to PEM format
 * suitable for writing to a file. It uses Triple DES cipher for the encryption.
 * @param data RSA private key data to be encrypted
 * @param inPassword existing password to use, if any
 * @returns on success, PEM-formatted data suitable for writing to a PEM-formatted certificate/private key file.
 */
export function utilsRsaKeyEncrypt(data: number[], inPassword: string | null): [ /* returnType */ number[], /* outPassword */ string | null ]
/**
 * Encrypts the given RSA private key data with the given password (or generates
 * a password if no password was given) and converts the data to PEM format
 * suitable for writing to a file.  It uses AES cipher for the encryption.
 * @param data RSA private key data to be encrypted
 * @param inPassword existing password to use, if any
 * @returns on success, PEM-formatted data suitable for writing to a PEM-formatted certificate/private key file.
 */
export function utilsRsaKeyEncryptAes(data: number[], inPassword: string | null): [ /* returnType */ number[], /* outPassword */ string | null ]
/**
 * Earlier versions of the Linux kernel added a NULL byte to the end of the
 * SSID to enable easy printing of the SSID on the console or in a terminal,
 * but this behavior was problematic (SSIDs are simply byte arrays, not strings)
 * and thus was changed.  This function compensates for that behavior at the
 * cost of some compatibility with odd SSIDs that may legitimately have trailing
 * NULLs, even though that is functionally pointless.
 * @param ssid1 first SSID data to compare
 * @param ssid2 second SSID data to compare
 * @param ignoreTrailingNull %TRUE to ignore one trailing NULL byte
 * @returns %TRUE if the SSIDs are the same, %FALSE if they are not
 */
export function utilsSameSsid(ssid1: number[], ssid2: number[], ignoreTrailingNull: boolean): boolean
/**
 * Given a set of device capabilities, and a desired security type to check
 * against, determines whether the combination of device, desired security
 * type, and AP capabilities intersect.
 * 
 * NOTE: this function cannot handle checking security for AP/Hotspot mode;
 * use nm_utils_ap_mode_security_valid() instead.
 * @param type the security type to check AP flags and device capabilities against, e.g. #NMU_SEC_STATIC_WEP
 * @param wifiCaps bitfield of the capabilities of the specific Wi-Fi device, e.g. #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
 * @param haveAp whether the `ap_flags,` `ap_wpa,` and `ap_rsn` arguments are valid
 * @param adhoc whether the capabilities being tested are from an Ad-Hoc AP (IBSS)
 * @param apFlags bitfield of AP capabilities, e.g. #NM_802_11_AP_FLAGS_PRIVACY
 * @param apWpa bitfield of AP capabilities derived from the AP's WPA beacon, e.g. (#NM_802_11_AP_SEC_PAIR_TKIP | #NM_802_11_AP_SEC_KEY_MGMT_PSK)
 * @param apRsn bitfield of AP capabilities derived from the AP's RSN/WPA2 beacon, e.g. (#NM_802_11_AP_SEC_PAIR_CCMP | #NM_802_11_AP_SEC_PAIR_TKIP)
 * @returns %TRUE if the device capabilities and AP capabilities intersect and are compatible with the desired @type, %FALSE if they are not
 */
export function utilsSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities, haveAp: boolean, adhoc: boolean, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags): boolean
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
 * @param ssid a byte array containing the SSID data
 * @returns an allocated string containing a UTF-8 representation of the SSID, which must be freed by the caller using g_free(). Returns %NULL on errors.
 */
export function utilsSsidToUtf8(ssid: number[]): string | null
export function utilsUuidGenerate(): string | null
/**
 * For a given `s,` this function will always return the same UUID.
 * @param s a string to use as the seed for the UUID
 * @returns a newly allocated UUID suitable for use as the #NMSettingConnection object's #NMSettingConnection:id: property
 */
export function utilsUuidGenerateFromString(s: string | null): string | null
/**
 * Checks if `key` is a valid WEP key
 * @param key a string that might be a WEP key
 * @param wepType the #NMWepKeyType type of the WEP key
 * @returns %TRUE if @key is a WEP key, %FALSE if not
 */
export function utilsWepKeyValid(key: string | null, wepType: WepKeyType): boolean
/**
 * Utility function to translate a Wi-Fi channel to its corresponding frequency.
 * @param channel channel
 * @param band frequency band for wireless ("a" or "bg")
 * @returns the frequency represented by the channel of the band,          or -1 when the freq is invalid, or 0 when the band          is invalid
 */
export function utilsWifiChannelToFreq(channel: number, band: string | null): number
/**
 * Utility function to find out next/previous Wi-Fi channel for a channel.
 * @param channel current channel
 * @param direction whether going downward (0 or less) or upward (1 or more)
 * @param band frequency band for wireless ("a" or "bg")
 * @returns the next channel in the specified direction or 0
 */
export function utilsWifiFindNextChannel(channel: number, direction: number, band: string | null): number
/**
 * Utility function to translate a Wi-Fi frequency to its corresponding channel.
 * @param freq frequency
 * @returns the channel represented by the frequency or 0
 */
export function utilsWifiFreqToChannel(freq: number): number
/**
 * Utility function to verify Wi-Fi channel validity.
 * @param channel channel
 * @param band frequency band for wireless ("a" or "bg")
 * @returns %TRUE or %FALSE
 */
export function utilsWifiIsChannelValid(channel: number, band: string | null): boolean
/**
 * Checks if `psk` is a valid WPA PSK
 * @param psk a string that might be a WPA PSK
 * @returns %TRUE if @psk is a WPA PSK, %FALSE if not
 */
export function utilsWpaPskValid(psk: string | null): boolean
export interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string | null, flags: SettingSecretFlags): boolean
}
export interface SettingValueIterFn {
    (setting: Setting, key: string | null, value: any, flags: GObject.ParamFlags): void
}
export interface UtilsFileSearchInPathsPredicate {
    (filename: string | null): boolean
}
export interface VPNIterFunc {
    (key: string | null, value: string | null): void
}
export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `secrets-cleared`
     */
    export interface SecretsClearedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `secrets-updated`
     */
    export interface SecretsUpdatedSignalCallback {
        (settingName: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.Connection

        /**
         * The connection's D-Bus path, used only by the calling process as a record
         * of the D-Bus path of the connection as provided by a settings service.
         */
        path?: string | null
    }

}

export interface Connection {

    // Own properties of NetworkManager-1.0.NetworkManager.Connection

    /**
     * The connection's D-Bus path, used only by the calling process as a record
     * of the D-Bus path of the connection as provided by a settings service.
     */
    path: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.Connection

    parent: GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.Connection

    /**
     * Adds a #NMSetting to the connection, replacing any previous #NMSetting of the
     * same name which has previously been added to the #NMConnection.  The
     * connection takes ownership of the #NMSetting object and does not increase
     * the setting object's reference count.
     * @param setting the #NMSetting to add to the connection object
     */
    addSetting(setting: Setting): void
    /**
     * Clears and frees any secrets that may be stored in the connection, to avoid
     * keeping secret data in memory when not needed.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
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
     * Compares two #NMConnection objects for similarity, with comparison behavior
     * modified by a set of flags.  See nm_setting_compare() for a description of
     * each flag's behavior.  If the connections differ, settings and keys within
     * each setting that differ are added to the returned `out_settings` hash table.
     * No values are returned, only key names.
     * @param b a second #NMConnection to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
     * @param outSettings if the connections differ, on return a hash table mapping setting names to second-level GHashTable (utf8 to guint32), which contains the key names that differ mapped to one or more of %NMSettingDiffResult as a bitfield
     * @returns %TRUE if the connections contain the same values, %FALSE if they do not
     */
    diff(b: Connection, flags: SettingCompareFlags, outSettings: GLib.HashTable): boolean
    /**
     * Print the connection to stdout.  For debugging purposes ONLY, should NOT
     * be used for serialization of the connection or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    dump(): void
    /**
     * Duplicates a #NMConnection.
     * @returns a new #NMConnection containing the same settings and properties as the source #NMConnection
     */
    duplicate(): Connection
    /**
     * Iterates over the properties of each #NMSetting object in the #NMConnection,
     * calling the supplied user function for each property.
     * @param func user-supplied function called for each setting's property
     */
    forEachSettingValue(func: SettingValueIterFn): void
    /**
     * A shortcut to return the type from the connection's #NMSettingConnection.
     * @returns the type from the connection's 'connection' setting
     */
    getConnectionType(): string | null
    /**
     * A shortcut to return the ID from the connection's #NMSettingConnection.
     * @returns the ID from the connection's 'connection' setting
     */
    getId(): string | null
    /**
     * Returns the interface name as stored in NMSettingConnection:interface_name.
     * If the connection contains no NMSettingConnection, it will return %NULL.
     * 
     * For hardware devices and software devices created outside of NetworkManager,
     * this name is used to match the device. for software devices created by
     * NetworkManager, this is the name of the created interface.
     * @returns Name of the kernel interface or %NULL
     */
    getInterfaceName(): string | null
    /**
     * Returns the connection's D-Bus path.
     * @returns the D-Bus path of the connection, previously set by a call to nm_connection_set_path().
     */
    getPath(): string | null
    /**
     * Gets the #NMSetting with the given #GType, if one has been previously added
     * to the #NMConnection.
     * @param settingType the #GType of the setting object to return
     * @returns the #NMSetting, or %NULL if no setting of that type was previously added to the #NMConnection
     */
    getSetting(settingType: GObject.GType): Setting
    /**
     * A shortcut to return any #NMSetting8021x the connection might contain.
     * @returns an #NMSetting8021x if the connection contains one, otherwise %NULL
     */
    getSetting8021x(): Setting8021x
    /**
     * A shortcut to return any #NMSettingAdsl the connection might contain.
     * @returns an #NMSettingAdsl if the connection contains one, otherwise %NULL
     */
    getSettingAdsl(): SettingAdsl
    /**
     * A shortcut to return any #NMSettingBluetooth the connection might contain.
     * @returns an #NMSettingBluetooth if the connection contains one, otherwise %NULL
     */
    getSettingBluetooth(): SettingBluetooth
    /**
     * A shortcut to return any #NMSettingBond the connection might contain.
     * @returns an #NMSettingBond if the connection contains one, otherwise %NULL
     */
    getSettingBond(): SettingBond
    /**
     * A shortcut to return any #NMSettingBridge the connection might contain.
     * @returns an #NMSettingBridge if the connection contains one, otherwise %NULL
     */
    getSettingBridge(): SettingBridge
    /**
     * A shortcut to return any #NMSettingBridgePort the connection might contain.
     * @returns an #NMSettingBridgePort if the connection contains one, otherwise %NULL
     */
    getSettingBridgePort(): SettingBridgePort
    /**
     * Gets the #NMSetting with the given name, if one has been previously added
     * the #NMConnection.
     * @param name a setting name
     * @returns the #NMSetting, or %NULL if no setting with that name was previously added to the #NMConnection
     */
    getSettingByName(name: string | null): Setting
    /**
     * A shortcut to return any #NMSettingCdma the connection might contain.
     * @returns an #NMSettingCdma if the connection contains one, otherwise %NULL
     */
    getSettingCdma(): SettingCdma
    /**
     * A shortcut to return any #NMSettingConnection the connection might contain.
     * @returns an #NMSettingConnection if the connection contains one, otherwise %NULL
     */
    getSettingConnection(): SettingConnection
    /**
     * A shortcut to return any #NMSettingDcb the connection might contain.
     * @returns an #NMSettingDcb if the connection contains one, otherwise NULL
     */
    getSettingDcb(): SettingDcb
    /**
     * A shortcut to return any #NMSettingGeneric the connection might contain.
     * @returns an #NMSettingGeneric if the connection contains one, otherwise NULL
     */
    getSettingGeneric(): SettingGeneric
    /**
     * A shortcut to return any #NMSettingGsm the connection might contain.
     * @returns an #NMSettingGsm if the connection contains one, otherwise %NULL
     */
    getSettingGsm(): SettingGsm
    /**
     * A shortcut to return any #NMSettingInfiniband the connection might contain.
     * @returns an #NMSettingInfiniband if the connection contains one, otherwise %NULL
     */
    getSettingInfiniband(): SettingInfiniband
    /**
     * A shortcut to return any #NMSettingIP4Config the connection might contain.
     * @returns an #NMSettingIP4Config if the connection contains one, otherwise %NULL
     */
    getSettingIp4Config(): SettingIP4Config
    /**
     * A shortcut to return any #NMSettingIP6Config the connection might contain.
     * @returns an #NMSettingIP6Config if the connection contains one, otherwise %NULL
     */
    getSettingIp6Config(): SettingIP6Config
    /**
     * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
     * @returns an #NMSettingOlpcMesh if the connection contains one, otherwise %NULL
     */
    getSettingOlpcMesh(): SettingOlpcMesh
    /**
     * A shortcut to return any #NMSettingPPP the connection might contain.
     * @returns an #NMSettingPPP if the connection contains one, otherwise %NULL
     */
    getSettingPpp(): SettingPPP
    /**
     * A shortcut to return any #NMSettingPPPOE the connection might contain.
     * @returns an #NMSettingPPPOE if the connection contains one, otherwise %NULL
     */
    getSettingPppoe(): SettingPPPOE
    /**
     * A shortcut to return any #NMSettingSerial the connection might contain.
     * @returns an #NMSettingSerial if the connection contains one, otherwise %NULL
     */
    getSettingSerial(): SettingSerial
    /**
     * A shortcut to return any #NMSettingTeam the connection might contain.
     * @returns an #NMSettingTeam if the connection contains one, otherwise %NULL
     */
    getSettingTeam(): SettingTeam
    /**
     * A shortcut to return any #NMSettingTeamPort the connection might contain.
     * @returns an #NMSettingTeamPort if the connection contains one, otherwise %NULL
     */
    getSettingTeamPort(): SettingTeamPort
    /**
     * A shortcut to return any #NMSettingVlan the connection might contain.
     * @returns an #NMSettingVlan if the connection contains one, otherwise %NULL
     */
    getSettingVlan(): SettingVlan
    /**
     * A shortcut to return any #NMSettingVPN the connection might contain.
     * @returns an #NMSettingVPN if the connection contains one, otherwise %NULL
     */
    getSettingVpn(): SettingVPN
    /**
     * A shortcut to return any #NMSettingWimax the connection might contain.
     * @returns an #NMSettingWimax if the connection contains one, otherwise %NULL
     */
    getSettingWimax(): SettingWimax
    /**
     * A shortcut to return any #NMSettingWired the connection might contain.
     * @returns an #NMSettingWired if the connection contains one, otherwise %NULL
     */
    getSettingWired(): SettingWired
    /**
     * A shortcut to return any #NMSettingWireless the connection might contain.
     * @returns an #NMSettingWireless if the connection contains one, otherwise %NULL
     */
    getSettingWireless(): SettingWireless
    /**
     * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
     * @returns an #NMSettingWirelessSecurity if the connection contains one, otherwise %NULL
     */
    getSettingWirelessSecurity(): SettingWirelessSecurity
    /**
     * A shortcut to return the UUID from the connection's #NMSettingConnection.
     * @returns the UUID from the connection's 'connection' setting
     */
    getUuid(): string | null
    /**
     * Returns the name that nm_device_disambiguate_names() would
     * return for the virtual device that would be created for `connection`.
     * Eg, "VLAN (eth1.1)".
     * @returns the name of @connection's device,   or %NULL if @connection is not a virtual connection type
     */
    getVirtualDeviceDescription(): string | null
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings. This function abstracts all
     * connection types which require this functionality. For all other
     * connection types, this function will return %NULL.
     * @returns Name of the kernel interface or %NULL
     */
    getVirtualIfaceName(): string | null
    /**
     * A convenience function to check if the given `connection` is a particular
     * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
     * property of the connection and matches that against `type`.
     * @param type a setting name to check the connection's type against (like %NM_SETTING_WIRELESS_SETTING_NAME or %NM_SETTING_WIRED_SETTING_NAME)
     * @returns %TRUE if the connection is of the given @type, %FALSE if not
     */
    isType(type: string | null): boolean
    /**
     * Returns the name of the first setting object in the connection which would
     * need secrets to make a successful connection.  The returned hints are only
     * intended as a guide to what secrets may be required, because in some
     * circumstances, there is no way to conclusively determine exactly which
     * secrets are needed.
     * @returns the setting name of the #NMSetting object which has invalid or   missing secrets
     */
    needSecrets(): [ /* returnType */ string | null, /* hints */ string[] ]
    /**
     * Does some basic normalization and fixup of well known inconsistencies
     * and deprecated fields. If the connection was modified in any way,
     * the output parameter `modified` is set %TRUE.
     * 
     * Finally the connection will be verified and %TRUE returns if the connection
     * is valid. As this function only performs some specific normalization steps
     * it cannot repair all connections. If the connection has errors that
     * cannot be normalized, the connection will not be modified.
     * @param parameters a #GHashTable with normalization parameters to allow customization of the normalization by providing specific arguments. Unknown arguments will be ignored and the default will be used. The keys must be strings, hashed by g_str_hash() and g_str_equal() functions. The values are opaque and depend on the parameter name.
     * @returns %TRUE if the connection is valid, %FALSE if it is not
     */
    normalize(parameters: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean ]
    /**
     * Removes the #NMSetting with the given #GType from the #NMConnection.  This
     * operation dereferences the #NMSetting object.
     * @param settingType the #GType of the setting object to remove
     */
    removeSetting(settingType: GObject.GType): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    /**
     * Deep-copies the settings of `new_conenction` and replaces the settings of `connection`
     * with the copied settings.
     * @param newConnection a #NMConnection to replace the settings of `connection` with
     * @returns %TRUE if the settings were valid after replacing the connection, %FALSE if they were not. Regardless of whether %TRUE or %FALSE is returned, the connection is successfully replaced. %FALSE only means, that the connection does not verify at the end of the operation.
     */
    replaceSettingsFromConnection(newConnection: Connection): boolean
    /**
     * Sets the D-Bus path of the connection.  This property is not serialized, and
     * is only for the reference of the caller.  Sets the #NMConnection:path
     * property.
     * @param path the D-Bus path of the connection as given by the settings service which provides the connection
     */
    setPath(path: string | null): void
    /**
     * Converts the #NMConnection into a #GHashTable describing the connection,
     * suitable for marshalling over D-Bus or serializing.  The hash table mapping
     * is string:#GHashTable with each element in the returned hash representing
     * a #NMSetting object.  The keys are setting object names, and the values
     * are #GHashTables mapping string:GValue, each of which represents the
     * properties of the #NMSetting object.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     * @returns a new #GHashTable describing the connection, its settings, and each setting's properties.  The caller owns the hash table and must unref the hash table with g_hash_table_unref() when it is no longer needed.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Update the specified setting's secrets, given a hash table of secrets
     * intended for that setting (deserialized from D-Bus for example).  Will also
     * extract the given setting's secrets hash if given a hash of hashes, as would
     * be returned from nm_connection_to_hash().  If `setting_name` is %NULL, expects
     * a fully serialized #NMConnection as returned by nm_connection_to_hash() and
     * will update all secrets from all settings contained in `secrets`.
     * @param settingName the setting object name to which the secrets apply
     * @param secrets a #GHashTable mapping string:#GValue of setting property names and secrets of the given `setting_name`
     * @returns %TRUE if the secrets were successfully updated, %FALSE if the update failed (tried to update secrets for a setting that doesn't exist, etc)
     */
    updateSecrets(settingName: string | null, secrets: GLib.HashTable): boolean
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

    // Own virtual methods of NetworkManager-1.0.NetworkManager.Connection

    secretsUpdated(setting: string | null): void

    // Own signals of NetworkManager-1.0.NetworkManager.Connection

    connect(sigName: "changed", callback: Connection.ChangedSignalCallback): number
    on(sigName: "changed", callback: Connection.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Connection.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Connection.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "secrets-cleared", callback: Connection.SecretsClearedSignalCallback): number
    on(sigName: "secrets-cleared", callback: Connection.SecretsClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-cleared", callback: Connection.SecretsClearedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-cleared", callback: Connection.SecretsClearedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "secrets-cleared", ...args: any[]): void
    connect(sigName: "secrets-updated", callback: Connection.SecretsUpdatedSignalCallback): number
    on(sigName: "secrets-updated", callback: Connection.SecretsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-updated", callback: Connection.SecretsUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-updated", callback: Connection.SecretsUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "secrets-updated", ...args: any[]): void

    // Class property signals of NetworkManager-1.0.NetworkManager.Connection

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
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
 * The NMConnection struct contains only private data.
 * It should only be accessed through the functions described below.
 * @class 
 */
export class Connection extends GObject.Object {

    // Own properties of NetworkManager-1.0.NetworkManager.Connection

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.Connection

    constructor(config?: Connection.ConstructorProperties) 
    /**
     * Creates a new #NMConnection object with no #NMSetting objects.
     * @constructor 
     * @returns the new empty #NMConnection object
     */
    constructor() 
    /**
     * Creates a new #NMConnection object with no #NMSetting objects.
     * @constructor 
     * @returns the new empty #NMConnection object
     */
    static new(): Connection
    /**
     * Creates a new #NMConnection from a hash table describing the connection.  See
     * nm_connection_to_hash() for a description of the expected hash table.
     * @constructor 
     * @param hash the #GHashTable describing the connection
     * @returns the new #NMConnection object, populated with settings created from the values in the hash table, or %NULL if the connection failed to validate
     */
    static newFromHash(hash: GLib.HashTable): Connection
    _init(config?: Connection.ConstructorProperties): void
    /**
     * Create a new #NMSetting object of the desired type, given a setting name.
     * @param name a setting name
     * @returns the new setting object, or %NULL if the setting name was unknown
     */
    static createSetting(name: string | null): Setting
    /**
     * Returns the #GType of the setting's class for a given setting name.
     * @param name a setting name
     * @returns the #GType of the setting's class
     */
    static lookupSettingType(name: string | null): GObject.GType
    /**
     * Returns the #GType of the setting's class for a given setting error quark.
     * Useful for figuring out which setting a returned error is for.
     * @param errorQuark a setting error quark
     * @returns the #GType of the setting's class
     */
    static lookupSettingTypeByQuark(errorQuark: GLib.Quark): GObject.GType
}

export module Setting {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.Setting

        /**
         * The setting's name, which uniquely identifies the setting within the
         * connection.  Each setting type has a name unique to that type, for
         * example "ppp" or "wireless" or "wired".
         */
        name?: string | null
    }

}

export interface Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.Setting

    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.Setting

    parent: GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.Setting

    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
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
     * @param invertResults this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     * @returns %TRUE if the settings contain the same values, %FALSE if they do not
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
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
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     * @returns a string containing the type name of the #NMSetting object, like 'ppp' or 'wireless' or 'wired'.
     */
    getName(): string | null
    // Has conflict: getSecretFlags(secretName: string | null, outFlags: SettingSecretFlags): boolean
    // Has conflict: getVirtualIfaceName(): string | null
    // Has conflict: needSecrets(): string[]
    // Has conflict: setSecretFlags(secretName: string | null, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     * @returns a new #GHashTable describing the setting's properties
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     * @returns an allocated string containing a textual representation of the setting's properties and values (including secrets!), which the caller should free with g_free()
     */
    toString(): string | null
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     * @returns %TRUE if the secrets were successfully updated, %FALSE on failure to update one or more of the secrets.
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param allSettings a #GSList of all settings     in the connection from which `setting` came
     * @returns %TRUE if the setting is valid, %FALSE if it is not
     */
    verify(allSettings: Setting[]): boolean

    // Own virtual methods of NetworkManager-1.0.NetworkManager.Setting

    compareProperty(other: Setting, propSpec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    getSecretFlags(secretName: string | null, verifySecret: boolean, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     * @virtual 
     * @returns Name of the virtual interface or %NULL if the setting does not support this feature
     */
    getVirtualIfaceName(): string | null
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     * @virtual 
     * @returns a #GPtrArray containing the property names of secrets of the #NMSetting which may be required; the caller owns the array and must free it with g_ptr_array_free(), but must not free the elements.
     */
    needSecrets(): string[]
    setSecretFlags(secretName: string | null, verifySecret: boolean, flags: SettingSecretFlags): boolean
    updateOneSecret(key: string | null, value: any): number

    // Class property signals of NetworkManager-1.0.NetworkManager.Setting

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The NMSetting struct contains only private data.
 * It should only be accessed through the functions described below.
 * @class 
 */
export class Setting extends GObject.Object {

    // Own properties of NetworkManager-1.0.NetworkManager.Setting

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.Setting

    constructor(config?: Setting.ConstructorProperties) 
    /**
     * Creates a new #NMSetting object and populates that object with the properties
     * contained in the hash table, using each hash key as the property to set,
     * and each hash value as the value to set that property to.  Setting properties
     * are strongly typed, thus the GValue type of the hash value must be correct.
     * See the documentation on each #NMSetting object subclass for the correct
     * property names and value types.
     * @constructor 
     * @param settingType the #NMSetting type which the hash contains properties for
     * @param hash the #GHashTable containing a string to GValue mapping of properties that apply to the setting
     * @returns a new #NMSetting object populated with the properties from the hash table, or %NULL on failure
     */
    static newFromHash(settingType: GObject.GType, hash: GLib.HashTable): Setting
    _init(config?: Setting.ConstructorProperties): void
}

export module Setting8021x {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.Setting8021x

        /**
         * Anonymous identity string for EAP authentication methods.  Used as the
         * unencrypted identity with EAP types that support different tunneled
         * identity like EAP-TTLS.
         */
        anonymousIdentity?: string | null
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:ca-cert property.
         */
        caPath?: string | null
        /**
         * Identity string for EAP authentication methods.  Often the user's user or
         * login name.
         */
        identity?: string | null
        /**
         * UTF-8 encoded file path containing PAC for EAP-FAST.
         */
        pacFile?: string | null
        /**
         * UTF-8 encoded password used for EAP authentication methods. If both the
         * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
         * property are specified, #NMSetting8021x:password is preferred.
         */
        password?: string | null
        /**
         * Flags indicating how to handle the #NMSetting8021x:password property.
         */
        passwordFlags?: number | null
        /**
         * Flags indicating how to handle the #NMSetting8021x:password-raw property.
         */
        passwordRawFlags?: number | null
        /**
         * Enables or disables in-line provisioning of EAP-FAST credentials when
         * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
         * Recognized values are "0" (disabled), "1" (allow unauthenticated
         * provisioning), "2" (allow authenticated provisioning), and "3" (allow
         * both authenticated and unauthenticated provisioning).  See the
         * wpa_supplicant documentation for more details.
         */
        phase1FastProvisioning?: string | null
        /**
         * Forces use of the new PEAP label during key derivation.  Some RADIUS
         * servers may require forcing the new PEAP label to interoperate with
         * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
         * wpa_supplicant documentation for more details.
         */
        phase1Peaplabel?: string | null
        /**
         * Forces which PEAP version is used when PEAP is set as the EAP method in
         * the #NMSetting8021x:eap property.  When unset, the version reported by
         * the server will be used.  Sometimes when using older RADIUS servers, it
         * is necessary to force the client to use a particular PEAP version.  To do
         * so, this property may be set to "0" or "1" to force that specific PEAP
         * version.
         */
        phase1Peapver?: string | null
        /**
         * Specifies the allowed "phase 2" inner non-EAP authentication methods when
         * an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
         * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
         * Each "phase 2" inner method requires specific parameters for successful
         * authentication; see the wpa_supplicant documentation for more details.
         */
        phase2Auth?: string | null
        /**
         * Specifies the allowed "phase 2" inner EAP-based authentication methods
         * when an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
         * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
         * requires specific parameters for successful authentication; see the
         * wpa_supplicant documentation for more details.
         */
        phase2Autheap?: string | null
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
         */
        phase2CaPath?: string | null
        /**
         * The password used to decrypt the "phase 2" private key specified in the
         * #NMSetting8021x:phase2-private-key property when the private key either
         * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
         * directly is not generally necessary except when returning secrets to
         * NetworkManager; it is generally set automatically when setting the
         * private key by the nm_setting_802_1x_set_phase2_private_key() function.
         */
        phase2PrivateKeyPassword?: string | null
        /**
         * Flags indicating how to handle the
         * #NMSetting8021x:phase2-private-key-password property.
         */
        phase2PrivateKeyPasswordFlags?: number | null
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server during the inner "phase 2"
         * authentication. When unset, no verification of the authentication server
         * certificate's subject is performed.
         */
        phase2SubjectMatch?: string | null
        /**
         * PIN used for EAP authentication methods.
         */
        pin?: string | null
        /**
         * Flags indicating how to handle the #NMSetting8021x:pin property.
         */
        pinFlags?: number | null
        /**
         * The password used to decrypt the private key specified in the
         * #NMSetting8021x:private-key property when the private key either uses the
         * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
         * property directly is not generally necessary except when returning
         * secrets to NetworkManager; it is generally set automatically when setting
         * the private key by the nm_setting_802_1x_set_private_key() function.
         */
        privateKeyPassword?: string | null
        /**
         * Flags indicating how to handle the #NMSetting8021x:private-key-password
         * property.
         */
        privateKeyPasswordFlags?: number | null
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server. When unset, no verification of the
         * authentication server certificate's subject is performed.
         */
        subjectMatch?: string | null
        /**
         * When %TRUE, overrides the #NMSetting8021x:ca-path and
         * #NMSetting8021x:phase2-ca-path properties using the system CA directory
         * specified at configure time with the --system-ca-path switch.  The
         * certificates in this directory are added to the verification chain in
         * addition to any certificates specified by the #NMSetting8021x:ca-cert and
         * #NMSetting8021x:phase2-ca-cert properties.
         */
        systemCaCerts?: boolean | null
    }

}

export interface Setting8021x {

    // Own properties of NetworkManager-1.0.NetworkManager.Setting8021x

    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymousIdentity: string | null
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     */
    caPath: string | null
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity: string | null
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pacFile: string | null
    /**
     * UTF-8 encoded password used for EAP authentication methods. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password: string | null
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    passwordFlags: number
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    passwordRawFlags: number
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when
     * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * Recognized values are "0" (disabled), "1" (allow unauthenticated
     * provisioning), "2" (allow authenticated provisioning), and "3" (allow
     * both authenticated and unauthenticated provisioning).  See the
     * wpa_supplicant documentation for more details.
     */
    phase1FastProvisioning: string | null
    /**
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1Peaplabel: string | null
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in
     * the #NMSetting8021x:eap property.  When unset, the version reported by
     * the server will be used.  Sometimes when using older RADIUS servers, it
     * is necessary to force the client to use a particular PEAP version.  To do
     * so, this property may be set to "0" or "1" to force that specific PEAP
     * version.
     */
    phase1Peapver: string | null
    /**
     * Specifies the allowed "phase 2" inner non-EAP authentication methods when
     * an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
     * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     */
    phase2Auth: string | null
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication methods
     * when an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
     * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
     * requires specific parameters for successful authentication; see the
     * wpa_supplicant documentation for more details.
     */
    phase2Autheap: string | null
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     */
    phase2CaPath: string | null
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
     * directly is not generally necessary except when returning secrets to
     * NetworkManager; it is generally set automatically when setting the
     * private key by the nm_setting_802_1x_set_phase2_private_key() function.
     */
    phase2PrivateKeyPassword: string | null
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2PrivateKeyPasswordFlags: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed.
     */
    phase2SubjectMatch: string | null
    /**
     * PIN used for EAP authentication methods.
     */
    pin: string | null
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pinFlags: number
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    privateKeyPassword: string | null
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    privateKeyPasswordFlags: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed.
     */
    subjectMatch: string | null
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties.
     */
    systemCaCerts: boolean
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.Setting8021x

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.Setting8021x

    /**
     * Adds an allowed alternate subject name match.  Until at least one
     * match is added, the altSubjectName of the remote authentication
     * server is not verified.
     * @param altsubjectMatch the altSubjectName to allow for this connection
     * @returns %TRUE if the alternative subject name match was  successfully added, %FALSE if it was already allowed.
     */
    addAltsubjectMatch(altsubjectMatch: string | null): boolean
    /**
     * Adds an allowed EAP method.  The setting is not valid until at least one
     * EAP method has been added.  See #NMSetting8021x:eap property for a list of
     * allowed EAP methods.
     * @param eap the name of the EAP method to allow for this connection
     * @returns %TRUE if the EAP method was successfully added, %FALSE if it was  not a valid method or if it was already allowed.
     */
    addEapMethod(eap: string | null): boolean
    /**
     * Adds an allowed alternate subject name match for "phase 2".  Until
     * at least one match is added, the altSubjectName of the "phase 2"
     * remote authentication server is not verified.
     * @param phase2AltsubjectMatch the "phase 2" altSubjectName to allow for this connection
     * @returns %TRUE if the "phase 2" alternative subject name match was  successfully added, %FALSE if it was already allowed.
     */
    addPhase2AltsubjectMatch(phase2AltsubjectMatch: string | null): boolean
    /**
     * Clears all altSubjectName matches.
     */
    clearAltsubjectMatches(): void
    /**
     * Clears all allowed EAP methods.
     */
    clearEapMethods(): void
    /**
     * Clears all "phase 2" altSubjectName matches.
     */
    clearPhase2AltsubjectMatches(): void
    /**
     * Returns the altSubjectName match at index `i`.
     * @param i the zero-based index of the array of altSubjectName matches
     * @returns the altSubjectName match at index @i
     */
    getAltsubjectMatch(i: number): string | null
    /**
     * Returns the anonymous identifier used by some EAP methods (like TTLS) to
     * authenticate the user in the outer unencrypted "phase 1" authentication.  The
     * inner "phase 2" authentication will use the #NMSetting8021x:identity in
     * a secure form, if applicable for that EAP method.
     * @returns the anonymous identifier
     */
    getAnonymousIdentity(): string | null
    /**
     * Returns the CA certificate blob if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns the CA certificate data
     */
    getCaCertBlob(): number[]
    /**
     * Returns the CA certificate path if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns path to the CA certificate file
     */
    getCaCertPath(): string | null
    /**
     * Returns the scheme used to store the CA certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_ca_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_ca_cert_path().
     * @returns scheme used to store the CA certificate (blob or path)
     */
    getCaCertScheme(): Setting8021xCKScheme
    /**
     * Returns the path of the CA certificate directory if previously set.  Systems
     * will often have a directory that contains multiple individual CA certificates
     * which the supplicant can then add to the verification chain.  This may be
     * used in addition to the #NMSetting8021x:ca-cert property to add more CA
     * certificates for verifying the network to client.
     * @returns the CA certificate directory path
     */
    getCaPath(): string | null
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns the client certificate data
     */
    getClientCertBlob(): number[]
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the client certificate file
     */
    getClientCertPath(): string | null
    /**
     * Returns the scheme used to store the client certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_client_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_client_cert_path().
     * @returns scheme used to store the client certificate (blob or path)
     */
    getClientCertScheme(): Setting8021xCKScheme
    /**
     * Returns the name of the allowed EAP method at index `i`.
     * @param i the index of the EAP method name to return
     * @returns the name of the allowed EAP method at index @i
     */
    getEapMethod(i: number): string | null
    /**
     * Returns the identifier used by some EAP methods (like TLS) to
     * authenticate the user.  Often this is a username or login name.
     * @returns the user identifier
     */
    getIdentity(): string | null
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:altsubject-matches property of this setting.
     * @returns the number of altsubject-matches entries.
     */
    getNumAltsubjectMatches(): number
    /**
     * Returns the number of eap methods allowed for use when connecting to the
     * network.  Generally only one EAP method is used.  Use the functions
     * nm_setting_802_1x_get_eap_method(), nm_setting_802_1x_add_eap_method(),
     * and nm_setting_802_1x_remove_eap_method() for adding, removing, and retrieving
     * allowed EAP methods.
     * @returns the number of allowed EAP methods
     */
    getNumEapMethods(): number
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:phase2-altsubject-matches property of this setting.
     * @returns the number of phase2-altsubject-matches entries.
     */
    getNumPhase2AltsubjectMatches(): number
    /**
     * Returns the file containing PAC credentials used by EAP-FAST method.
     * @returns the PAC file
     */
    getPacFile(): string | null
    getPassword(): string | null
    getPasswordFlags(): SettingSecretFlags
    getPasswordRaw(): number[]
    getPasswordRawFlags(): SettingSecretFlags
    getPhase1FastProvisioning(): string | null
    getPhase1Peaplabel(): string | null
    getPhase1Peapver(): string | null
    /**
     * Returns the "phase 2" altSubjectName match at index `i`.
     * @param i the zero-based index of the array of "phase 2" altSubjectName matches
     * @returns the "phase 2" altSubjectName match at index @i
     */
    getPhase2AltsubjectMatch(i: number): string | null
    getPhase2Auth(): string | null
    getPhase2Autheap(): string | null
    /**
     * Returns the "phase 2" CA certificate blob if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns the "phase 2" CA certificate data
     */
    getPhase2CaCertBlob(): number[]
    /**
     * Returns the "phase 2" CA certificate path if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     * @returns path to the "phase 2" CA certificate file
     */
    getPhase2CaCertPath(): string | null
    /**
     * Returns the scheme used to store the "phase 2" CA certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_ca_cert_blob(); if %NM_SETTING_802_1X_CK_SCHEME_PATH,
     * use nm_setting_802_1x_get_ca_cert_path().
     * @returns scheme used to store the "phase 2" CA certificate (blob or path)
     */
    getPhase2CaCertScheme(): Setting8021xCKScheme
    /**
     * Returns the path of the "phase 2" CA certificate directory if previously set.
     * Systems will often have a directory that contains multiple individual CA
     * certificates which the supplicant can then add to the verification chain.
     * This may be used in addition to the #NMSetting8021x:phase2-ca-cert property
     * to add more CA certificates for verifying the network to client.
     * @returns the "phase 2" CA certificate directory path
     */
    getPhase2CaPath(): string | null
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns the "phase 2" client certificate data
     */
    getPhase2ClientCertBlob(): number[]
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the "phase 2" client certificate file
     */
    getPhase2ClientCertPath(): string | null
    /**
     * Returns the scheme used to store the "phase 2" client certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     * @returns scheme used to store the "phase 2" client certificate (blob or path)
     */
    getPhase2ClientCertScheme(): Setting8021xCKScheme
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
    getPhase2PrivateKeyBlob(): number[]
    getPhase2PrivateKeyFormat(): Setting8021xCKFormat
    getPhase2PrivateKeyPassword(): string | null
    getPhase2PrivateKeyPasswordFlags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the "phase 2" private key file
     */
    getPhase2PrivateKeyPath(): string | null
    /**
     * Returns the scheme used to store the "phase 2" private key.  If the returned
     * scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     * @returns scheme used to store the "phase 2" private key (blob or path)
     */
    getPhase2PrivateKeyScheme(): Setting8021xCKScheme
    getPhase2SubjectMatch(): string | null
    getPin(): string | null
    getPinFlags(): SettingSecretFlags
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
    getPrivateKeyBlob(): number[]
    getPrivateKeyFormat(): Setting8021xCKFormat
    getPrivateKeyPassword(): string | null
    getPrivateKeyPasswordFlags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @returns path to the private key file
     */
    getPrivateKeyPath(): string | null
    /**
     * Returns the scheme used to store the private key.  If the returned scheme is
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     * @returns scheme used to store the private key (blob or path)
     */
    getPrivateKeyScheme(): Setting8021xCKScheme
    getSubjectMatch(): string | null
    /**
     * Sets the #NMSetting8021x:system-ca-certs property. The
     * #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path
     * properties are ignored if the #NMSetting8021x:system-ca-certs property is
     * %TRUE, in which case a system-wide CA certificate directory specified at
     * compile time (using the --system-ca-path configure option) is used in place
     * of these properties.
     * @returns %TRUE if a system CA certificate path should be used, %FALSE if not
     */
    getSystemCaCerts(): boolean
    /**
     * Removes the allowed altSubjectName at the specified index.
     * @param i the index of the altSubjectName match to remove
     */
    removeAltsubjectMatch(i: number): void
    /**
     * Removes the allowed altSubjectName `altsubject_match`.
     * @param altsubjectMatch the altSubjectName to remove
     * @returns %TRUE if the alternative subject name match was found and removed,          %FALSE if it was not.
     */
    removeAltsubjectMatchByValue(altsubjectMatch: string | null): boolean
    /**
     * Removes the allowed EAP method at the specified index.
     * @param i the index of the EAP method to remove
     */
    removeEapMethod(i: number): void
    /**
     * Removes the allowed EAP method `method`.
     * @param eap the name of the EAP method to remove
     * @returns %TRUE if the EAP method was founs and removed, %FALSE if it was not.
     */
    removeEapMethodByValue(eap: string | null): boolean
    /**
     * Removes the allowed "phase 2" altSubjectName at the specified index.
     * @param i the index of the "phase 2" altSubjectName match to remove
     */
    removePhase2AltsubjectMatch(i: number): void
    /**
     * Removes the allowed "phase 2" altSubjectName `phase2`_altsubject_match.
     * @param phase2AltsubjectMatch the "phase 2" altSubjectName to remove
     * @returns %TRUE if the alternative subject name match for "phase 2" was found and removed,          %FALSE if it was not.
     */
    removePhase2AltsubjectMatchByValue(phase2AltsubjectMatch: string | null): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:ca-cert property
     * with the raw certificate data if using the %NM_SETTING_802_1X_CK_SCHEME_BLOB
     * scheme, or with the path to the certificate file if using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param certPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the CA certificate   file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param outFormat on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setCaCert(certPath: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param certPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any `scheme` clears the client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param outFormat on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setClientCert(certPath: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-ca-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param certPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" CA   certificate file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the "phase2" CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param outFormat on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setPhase2CaCert(certPath: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param certPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any `scheme` clears the "phase2" client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param outFormat on successful return, the type of the certificate added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setPhase2ClientCert(certPath: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
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
     * @param keyPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" private   key file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded;   use g_filename_to_utf8() to convert if needed.  Passing %NULL with any   `scheme` clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param outFormat on successful return, the type of the private key added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setPhase2PrivateKey(keyPath: string | null, password: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
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
     * @param keyPath when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the private key file   (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param outFormat on successful return, the type of the private key added
     * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
     */
    setPrivateKey(keyPath: string | null, password: string | null, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.Setting8021x

    connect(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anonymous-identity", ...args: any[]): void
    connect(sigName: "notify::ca-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::ca-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ca-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ca-path", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::pac-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::pac-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pac-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pac-file", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-flags", ...args: any[]): void
    connect(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-raw-flags", ...args: any[]): void
    connect(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase1-fast-provisioning", ...args: any[]): void
    connect(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase1-peaplabel", ...args: any[]): void
    connect(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase1-peapver", ...args: any[]): void
    connect(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-auth", ...args: any[]): void
    connect(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-autheap", ...args: any[]): void
    connect(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-ca-path", ...args: any[]): void
    connect(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-private-key-password", ...args: any[]): void
    connect(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-private-key-password-flags", ...args: any[]): void
    connect(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): number
    on(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::phase2-subject-match", ...args: any[]): void
    connect(sigName: "notify::pin", callback: (...args: any[]) => void): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pin", ...args: any[]): void
    connect(sigName: "notify::pin-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pin-flags", ...args: any[]): void
    connect(sigName: "notify::private-key-password", callback: (...args: any[]) => void): number
    on(sigName: "notify::private-key-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::private-key-password", ...args: any[]): void
    connect(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::private-key-password-flags", ...args: any[]): void
    connect(sigName: "notify::subject-match", callback: (...args: any[]) => void): number
    on(sigName: "notify::subject-match", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subject-match", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subject-match", ...args: any[]): void
    connect(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): number
    on(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::system-ca-certs", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Setting8021x extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.Setting8021x

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.Setting8021x

    constructor(config?: Setting8021x.ConstructorProperties) 
    /**
     * Creates a new #NMSetting8021x object with default values.
     * @constructor 
     * @returns the new empty #NMSetting8021x object
     */
    constructor() 
    /**
     * Creates a new #NMSetting8021x object with default values.
     * @constructor 
     * @returns the new empty #NMSetting8021x object
     */
    static new(): Setting8021x
    _init(config?: Setting8021x.ConstructorProperties): void
}

export module SettingAdsl {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingAdsl

        /**
         * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
         */
        encapsulation?: string | null
        /**
         * Password used to authenticate with the ADSL service.
         */
        password?: string | null
        /**
         * Flags indicating how to handle the #NMSettingAdsl:password property.
         */
        passwordFlags?: number | null
        /**
         * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
         */
        protocol?: string | null
        /**
         * Username used to authenticate with the ADSL service.
         */
        username?: string | null
        /**
         * VCI of ADSL connection
         */
        vci?: number | null
        /**
         * VPI of ADSL connection
         */
        vpi?: number | null
    }

}

export interface SettingAdsl {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingAdsl

    /**
     * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
     */
    encapsulation: string | null
    /**
     * Password used to authenticate with the ADSL service.
     */
    password: string | null
    /**
     * Flags indicating how to handle the #NMSettingAdsl:password property.
     */
    passwordFlags: number
    /**
     * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
     */
    protocol: string | null
    /**
     * Username used to authenticate with the ADSL service.
     */
    username: string | null
    /**
     * VCI of ADSL connection
     */
    vci: number
    /**
     * VPI of ADSL connection
     */
    vpi: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingAdsl

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingAdsl

    getEncapsulation(): string | null
    getPassword(): string | null
    getPasswordFlags(): SettingSecretFlags
    getProtocol(): string | null
    getUsername(): string | null
    getVci(): number
    getVpi(): number

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingAdsl

    connect(sigName: "notify::encapsulation", callback: (...args: any[]) => void): number
    on(sigName: "notify::encapsulation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::encapsulation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::encapsulation", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-flags", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::vci", callback: (...args: any[]) => void): number
    on(sigName: "notify::vci", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vci", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vci", ...args: any[]): void
    connect(sigName: "notify::vpi", callback: (...args: any[]) => void): number
    on(sigName: "notify::vpi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vpi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vpi", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingAdsl extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingAdsl

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingAdsl

    constructor(config?: SettingAdsl.ConstructorProperties) 
    /**
     * Creates a new #NMSettingAdsl object with default values.
     * @constructor 
     * @returns the new empty #NMSettingAdsl object
     */
    constructor() 
    /**
     * Creates a new #NMSettingAdsl object with default values.
     * @constructor 
     * @returns the new empty #NMSettingAdsl object
     */
    static new(): SettingAdsl
    _init(config?: SettingAdsl.ConstructorProperties): void
}

export module SettingBluetooth {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingBluetooth

        /**
         * Either "dun" for Dial-Up Networking connections or "panu" for Personal
         * Area Networking connections to devices supporting the NAP profile.
         */
        type?: string | null
    }

}

export interface SettingBluetooth {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBluetooth

    /**
     * Either "dun" for Dial-Up Networking connections or "panu" for Personal
     * Area Networking connections to devices supporting the NAP profile.
     */
    type: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBluetooth

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingBluetooth

    /**
     * Gets the Bluetooth address of the remote device which this setting
     * describes a connection to.
     * @returns the Bluetooth address
     */
    getBdaddr(): number[]
    /**
     * Returns the connection method for communicating with the remote device (i.e.
     * either DUN to a DUN-capable device or PANU to a NAP-capable device).
     * @returns the type, either %NM_SETTING_BLUETOOTH_TYPE_PANU or   %NM_SETTING_BLUETOOTH_TYPE_DUN
     */
    getConnectionType(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingBluetooth

    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingBluetooth extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBluetooth

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingBluetooth

    constructor(config?: SettingBluetooth.ConstructorProperties) 
    /**
     * Creates a new #NMSettingBluetooth object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBluetooth object
     */
    constructor() 
    /**
     * Creates a new #NMSettingBluetooth object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBluetooth object
     */
    static new(): SettingBluetooth
    _init(config?: SettingBluetooth.ConstructorProperties): void
}

export module SettingBond {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingBond

        /**
         * The name of the virtual in-kernel bonding network interface
         */
        interfaceName?: string | null
    }

}

export interface SettingBond {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBond

    /**
     * The name of the virtual in-kernel bonding network interface
     */
    interfaceName: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBond

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingBond

    /**
     * Add an option to the table.  The option is compared to an internal list
     * of allowed options.  Option names may contain only alphanumeric characters
     * (ie [a-zA-Z0-9]).  Adding a new name replaces any existing name/value pair
     * that may already exist.
     * 
     * The order of how to set several options is relevant because there are options
     * that conflict with each other.
     * @param name name for the option
     * @param value value for the option
     * @returns %TRUE if the option was valid and was added to the internal option list, %FALSE if it was not.
     */
    addOption(name: string | null, value: string | null): boolean
    getInterfaceName(): string | null
    /**
     * Returns the number of options that should be set for this bond when it
     * is activated. This can be used to retrieve each option individually
     * using nm_setting_bond_get_option().
     * @returns the number of bonding options
     */
    getNumOptions(): number
    /**
     * Given an index, return the value of the bonding option at that index.  Indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_bond_add_option() and nm_setting_bond_remove_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_bond_get_num_options() - 1
     * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
     */
    getOption(idx: number): [ /* returnType */ boolean, /* outName */ string | null, /* outValue */ string | null ]
    /**
     * Returns the value associated with the bonding option specified by
     * `name,` if it exists.
     * @param name the option name for which to retrieve the value
     * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
     */
    getOptionByName(name: string | null): string | null
    getOptionDefault(name: string | null): string | null
    /**
     * Returns a list of valid bond options.
     * @returns a %NULL-terminated array of strings of valid bond options.
     */
    getValidOptions(): string[]
    /**
     * Remove the bonding option referenced by `name` from the internal option
     * list.
     * @param name name of the option to remove
     * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
     */
    removeOption(name: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingBond

    connect(sigName: "notify::interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingBond extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBond

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingBond

    constructor(config?: SettingBond.ConstructorProperties) 
    /**
     * Creates a new #NMSettingBond object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBond object
     */
    constructor() 
    /**
     * Creates a new #NMSettingBond object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBond object
     */
    static new(): SettingBond
    _init(config?: SettingBond.ConstructorProperties): void
    /**
     * Checks whether `name` is a valid bond option and `value` is a valid value for
     * the `name`. If `value` is %NULL, the function only validates the option name.
     * @param name the name of the option to validate
     * @param value the value of the option to validate
     * @returns %TRUE, if the @value is valid for the given name. If the @name is not a valid option, %FALSE will be returned.
     */
    static validateOption(name: string | null, value: string | null): boolean
}

export module SettingBridge {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingBridge

        /**
         * The Ethernet MAC address aging time, in seconds.
         */
        ageingTime?: number | null
        /**
         * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
         */
        forwardDelay?: number | null
        /**
         * The Spanning Tree Protocol (STP) hello time, in seconds.
         */
        helloTime?: number | null
        /**
         * The name of the virtual in-kernel bridging network interface
         */
        interfaceName?: string | null
        /**
         * The Spanning Tree Protocol (STP) maximum message age, in seconds.
         */
        maxAge?: number | null
        /**
         * Sets the Spanning Tree Protocol (STP) priority for this bridge.  Lower
         * values are "better"; the lowest priority bridge will be elected the root
         * bridge.
         */
        priority?: number | null
        /**
         * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
         */
        stp?: boolean | null
    }

}

export interface SettingBridge {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridge

    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageingTime: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forwardDelay: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    helloTime: number
    /**
     * The name of the virtual in-kernel bridging network interface
     */
    interfaceName: string | null
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    maxAge: number
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
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBridge

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingBridge

    getAgeingTime(): number
    getForwardDelay(): number
    getHelloTime(): number
    getInterfaceName(): string | null
    getMacAddress(): number[]
    getMaxAge(): number
    getPriority(): number
    getStp(): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingBridge

    connect(sigName: "notify::ageing-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::ageing-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ageing-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ageing-time", ...args: any[]): void
    connect(sigName: "notify::forward-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::forward-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::forward-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::forward-delay", ...args: any[]): void
    connect(sigName: "notify::hello-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::hello-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hello-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hello-time", ...args: any[]): void
    connect(sigName: "notify::interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface-name", ...args: any[]): void
    connect(sigName: "notify::max-age", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-age", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::stp", callback: (...args: any[]) => void): number
    on(sigName: "notify::stp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stp", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingBridge extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridge

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingBridge

    constructor(config?: SettingBridge.ConstructorProperties) 
    /**
     * Creates a new #NMSettingBridge object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBridge object
     */
    constructor() 
    /**
     * Creates a new #NMSettingBridge object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBridge object
     */
    static new(): SettingBridge
    _init(config?: SettingBridge.ConstructorProperties): void
}

export module SettingBridgePort {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingBridgePort

        /**
         * Enables or disables "hairpin mode" for the port, which allows frames to
         * be sent back out through the port the frame was received on.
         */
        hairpinMode?: boolean | null
        /**
         * The Spanning Tree Protocol (STP) port cost for destinations via this
         * port.
         */
        pathCost?: number | null
        /**
         * The Spanning Tree Protocol (STP) priority of this bridge port.
         */
        priority?: number | null
    }

}

export interface SettingBridgePort {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridgePort

    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to
     * be sent back out through the port the frame was received on.
     */
    hairpinMode: boolean
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    pathCost: number
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     */
    priority: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBridgePort

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingBridgePort

    getHairpinMode(): boolean
    getPathCost(): number
    getPriority(): number

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingBridgePort

    connect(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hairpin-mode", ...args: any[]): void
    connect(sigName: "notify::path-cost", callback: (...args: any[]) => void): number
    on(sigName: "notify::path-cost", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path-cost", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path-cost", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingBridgePort extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridgePort

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingBridgePort

    constructor(config?: SettingBridgePort.ConstructorProperties) 
    /**
     * Creates a new #NMSettingBridgePort object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBridgePort object
     */
    constructor() 
    /**
     * Creates a new #NMSettingBridgePort object with default values.
     * @constructor 
     * @returns the new empty #NMSettingBridgePort object
     */
    static new(): SettingBridgePort
    _init(config?: SettingBridgePort.ConstructorProperties): void
}

export module SettingCdma {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingCdma

        /**
         * The number to dial to establish the connection to the CDMA-based mobile
         * broadband network, if any.  If not specified, the default number (#777)
         * is used when required.
         */
        number?: string | null
        /**
         * The password used to authenticate with the network, if required.  Many
         * providers do not require a password, or accept any password.  But if a
         * password is required, it is specified here.
         */
        password?: string | null
        /**
         * Flags indicating how to handle the #NMSettingCdma:password property.
         */
        passwordFlags?: number | null
        /**
         * The username used to authenticate with the network, if required.  Many
         * providers do not require a username, or accept any username.  But if a
         * username is required, it is specified here.
         */
        username?: string | null
    }

}

export interface SettingCdma {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingCdma

    /**
     * The number to dial to establish the connection to the CDMA-based mobile
     * broadband network, if any.  If not specified, the default number (#777)
     * is used when required.
     */
    number: string | null
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password: string | null
    /**
     * Flags indicating how to handle the #NMSettingCdma:password property.
     */
    passwordFlags: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingCdma

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingCdma

    getNumber(): string | null
    getPassword(): string | null
    getPasswordFlags(): SettingSecretFlags
    getUsername(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingCdma

    connect(sigName: "notify::number", callback: (...args: any[]) => void): number
    on(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-flags", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingCdma extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingCdma

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingCdma

    constructor(config?: SettingCdma.ConstructorProperties) 
    /**
     * Creates a new #NMSettingCdma object with default values.
     * @constructor 
     * @returns the new empty #NMSettingCdma object
     */
    constructor() 
    /**
     * Creates a new #NMSettingCdma object with default values.
     * @constructor 
     * @returns the new empty #NMSettingCdma object
     */
    static new(): SettingCdma
    _init(config?: SettingCdma.ConstructorProperties): void
}

export module SettingConnection {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingConnection

        /**
         * Whether or not the connection should be automatically connected by
         * NetworkManager when the resources for the connection are available.
         * %TRUE to automatically activate the connection, %FALSE to require manual
         * intervention to activate the connection.
         */
        autoconnect?: boolean | null
        /**
         * If greater than zero, delay success of IP addressing until either the
         * timeout is reached, or an IP gateway replies to a ping.
         */
        gatewayPingTimeout?: number | null
        /**
         * A human readable unique identifier for the connection, like "Work Wi-Fi"
         * or "T-Mobile 3G".
         */
        id?: string | null
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
        interfaceName?: string | null
        /**
         * Interface name of the master device or UUID of the master connection.
         */
        master?: string | null
        /**
         * %FALSE if the connection can be modified using the provided settings
         * service's D-Bus interface with the right privileges, or %TRUE if the
         * connection is read-only and cannot be modified.
         */
        readOnly?: boolean | null
        /**
         * Setting name of the device type of this slave's master connection (eg,
         * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
         * slave.
         */
        slaveType?: string | null
        /**
         * The time, in seconds since the Unix Epoch, that the connection was last
         * _successfully_ fully activated.
         * 
         * NetworkManager updates the connection timestamp periodically when the
         * connection is active to ensure that an active connection has the latest
         * timestamp. The property is only meant for reading (changes to this
         * property will not be preserved).
         */
        timestamp?: number | null
        /**
         * Base type of the connection. For hardware-dependent connections, should
         * contain the setting name of the hardware-type specific setting (ie,
         * "802-3-ethernet" or "802-11-wireless" or "bluetooth", etc), and for
         * non-hardware dependent connections like VPN or otherwise, should contain
         * the setting name of that setting type (ie, "vpn" or "bridge", etc).
         */
        type?: string | null
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
         * nm_utils_uuid_generate_from_string().
         */
        uuid?: string | null
        /**
         * The trust level of a the connection.  Free form case-insensitive string
         * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
         * the connection will be placed in the default zone as defined by the
         * firewall.
         */
        zone?: string | null
    }

}

export interface SettingConnection {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingConnection

    /**
     * Whether or not the connection should be automatically connected by
     * NetworkManager when the resources for the connection are available.
     * %TRUE to automatically activate the connection, %FALSE to require manual
     * intervention to activate the connection.
     */
    autoconnect: boolean
    /**
     * If greater than zero, delay success of IP addressing until either the
     * timeout is reached, or an IP gateway replies to a ping.
     */
    gatewayPingTimeout: number
    /**
     * A human readable unique identifier for the connection, like "Work Wi-Fi"
     * or "T-Mobile 3G".
     */
    id: string | null
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
    interfaceName: string | null
    /**
     * Interface name of the master device or UUID of the master connection.
     */
    master: string | null
    /**
     * %FALSE if the connection can be modified using the provided settings
     * service's D-Bus interface with the right privileges, or %TRUE if the
     * connection is read-only and cannot be modified.
     */
    readOnly: boolean
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slaveType: string | null
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
    type: string | null
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
     * nm_utils_uuid_generate_from_string().
     */
    uuid: string | null
    /**
     * The trust level of a the connection.  Free form case-insensitive string
     * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
     * the connection will be placed in the default zone as defined by the
     * firewall.
     */
    zone: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingConnection

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingConnection

    /**
     * Adds a permission to the connection's permission list.  At this time, only
     * the "user" permission type is supported, and `pitem` must be a username. See
     * #NMSettingConnection:permissions: for more details.
     * @param ptype the permission type; at this time only "user" is supported
     * @param pitem the permission item formatted as required for `ptype`
     * @param detail unused at this time; must be %NULL
     * @returns %TRUE if the permission was unique and was successfully added to the list, %FALSE if @ptype or @pitem was invalid or it the permission was already present in the list
     */
    addPermission(ptype: string | null, pitem: string | null, detail: string | null): boolean
    /**
     * Adds a new secondary connection UUID to the setting.
     * @param secUuid the secondary connection UUID to add
     * @returns %TRUE if the secondary connection UUID was added; %FALSE if the UUID was already present
     */
    addSecondary(secUuid: string | null): boolean
    /**
     * Returns the #NMSettingConnection:autoconnect property of the connection.
     * @returns the connection's autoconnect behavior
     */
    getAutoconnect(): boolean
    /**
     * Returns the #NMSettingConnection:type property of the connection.
     * @returns the connection type
     */
    getConnectionType(): string | null
    getGatewayPingTimeout(): number
    /**
     * Returns the #NMSettingConnection:id property of the connection.
     * @returns the connection ID
     */
    getId(): string | null
    /**
     * Returns the #NMSettingConnection:interface-name property of the connection.
     * @returns the connection's interface name
     */
    getInterfaceName(): string | null
    /**
     * Returns the #NMSettingConnection:master property of the connection.
     * @returns interface name of the master device or UUID of the master connection.
     */
    getMaster(): string | null
    /**
     * Returns the number of entries in the #NMSettingConnection:permissions
     * property of this setting.
     * @returns the number of permissions entries
     */
    getNumPermissions(): number
    getNumSecondaries(): number
    /**
     * Retrieve one of the entries of the #NMSettingConnection:permissions property
     * of this setting.
     * @param idx the zero-based index of the permissions entry
     * @param outPtype on return, the permission type (at this time, always "user")
     * @param outPitem on return, the permission item (formatted according to `ptype,` see #NMSettingConnection:permissions for more detail
     * @param outDetail on return, the permission detail (at this time, always %NULL)
     * @returns %TRUE if a permission was returned, %FALSE if @idx was invalid
     */
    getPermission(idx: number, outPtype: string | null, outPitem: string | null, outDetail: string | null): boolean
    /**
     * Returns the #NMSettingConnection:read-only property of the connection.
     * @returns %TRUE if the connection is read-only, %FALSE if it is not
     */
    getReadOnly(): boolean
    getSecondary(idx: number): string | null
    /**
     * Returns the #NMSettingConnection:slave-type property of the connection.
     * @returns the type of slave this connection is, if any
     */
    getSlaveType(): string | null
    /**
     * Returns the #NMSettingConnection:timestamp property of the connection.
     * @returns the connection's timestamp
     */
    getTimestamp(): number
    /**
     * Returns the #NMSettingConnection:uuid property of the connection.
     * @returns the connection UUID
     */
    getUuid(): string | null
    /**
     * Returns the #NMSettingConnection:zone property of the connection.
     * @returns the trust level of a connection
     */
    getZone(): string | null
    isSlaveType(type: string | null): boolean
    /**
     * Checks whether the given username is allowed to view/access this connection.
     * @param uname the user name to check permissions for
     * @returns %TRUE if the requested user is allowed to view this connection, %FALSE if the given user is not allowed to view this connection
     */
    permissionsUserAllowed(uname: string | null): boolean
    /**
     * Removes the permission at index `idx` from the connection.
     * @param idx the zero-based index of the permission to remove
     */
    removePermission(idx: number): void
    /**
     * Removes the permission from the connection.
     * At this time, only the "user" permission type is supported, and `pitem` must
     * be a username. See #NMSettingConnection:permissions: for more details.
     * @param ptype the permission type; at this time only "user" is supported
     * @param pitem the permission item formatted as required for `ptype`
     * @param detail unused at this time; must be %NULL
     * @returns %TRUE if the permission was found and removed; %FALSE if it was not.
     */
    removePermissionByValue(ptype: string | null, pitem: string | null, detail: string | null): boolean
    /**
     * Removes the secondary coonnection UUID at index `idx`.
     * @param idx index number of the secondary connection UUID
     */
    removeSecondary(idx: number): void
    /**
     * Removes the secondary coonnection UUID `sec_uuid`.
     * @param secUuid the secondary connection UUID to remove
     * @returns %TRUE if the secondary connection UUID was found and removed; %FALSE if it was not.
     */
    removeSecondaryByValue(secUuid: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingConnection

    connect(sigName: "notify::autoconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoconnect", ...args: any[]): void
    connect(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gateway-ping-timeout", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface-name", ...args: any[]): void
    connect(sigName: "notify::master", callback: (...args: any[]) => void): number
    on(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::master", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::slave-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::slave-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slave-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slave-type", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
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
    connect(sigName: "notify::zone", callback: (...args: any[]) => void): number
    on(sigName: "notify::zone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zone", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The NMSettingConnection struct contains only private data.
 * It should only be accessed through the functions described below.
 * @class 
 */
export class SettingConnection extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingConnection

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingConnection

    constructor(config?: SettingConnection.ConstructorProperties) 
    /**
     * Creates a new #NMSettingConnection object with default values.
     * @constructor 
     * @returns the new empty #NMSettingConnection object
     */
    constructor() 
    /**
     * Creates a new #NMSettingConnection object with default values.
     * @constructor 
     * @returns the new empty #NMSettingConnection object
     */
    static new(): SettingConnection
    _init(config?: SettingConnection.ConstructorProperties): void
}

export module SettingDcb {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingDcb

        /**
         * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        appFcoeFlags?: number | null
        /**
         * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
         * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
         */
        appFcoeMode?: string | null
        /**
         * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        appFcoePriority?: number | null
        /**
         * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        appFipFlags?: number | null
        /**
         * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fip-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        appFipPriority?: number | null
        /**
         * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
         * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        appIscsiFlags?: number | null
        /**
         * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
         * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        appIscsiPriority?: number | null
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
         * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        priorityFlowControlFlags?: number | null
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
         * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        priorityGroupFlags?: number | null
    }

}

export interface SettingDcb {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingDcb

    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appFcoeFlags: number
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     */
    appFcoeMode: string | null
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
    appFipFlags: number
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
    appIscsiFlags: number
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appIscsiPriority: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityFlowControlFlags: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityGroupFlags: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingDcb

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingDcb

    getAppFcoeFlags(): SettingDcbFlags
    getAppFcoeMode(): string | null
    getAppFcoePriority(): number
    getAppFipFlags(): SettingDcbFlags
    getAppFipPriority(): number
    getAppIscsiFlags(): SettingDcbFlags
    getAppIscsiPriority(): number
    getPriorityBandwidth(userPriority: number): number
    getPriorityFlowControl(userPriority: number): boolean
    getPriorityFlowControlFlags(): SettingDcbFlags
    getPriorityGroupBandwidth(groupId: number): number
    getPriorityGroupFlags(): SettingDcbFlags
    getPriorityGroupId(userPriority: number): number
    getPriorityStrictBandwidth(userPriority: number): boolean
    getPriorityTrafficClass(userPriority: number): number
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param userPriority the User Priority (0 - 7) to set the bandwidth percentage for
     * @param bandwidthPercent the bandwidth percentage (0 - 100) that `user_priority` is allowed to use within its priority group
     */
    setPriorityBandwidth(userPriority: number, bandwidthPercent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-flow-control includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param userPriority the User Priority (0 - 7) to set flow control for
     * @param enabled %TRUE to enable flow control for this priority, %FALSE to disable it
     */
    setPriorityFlowControl(userPriority: number, enabled: boolean): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param groupId the priority group (0 - 7) to set the bandwidth percentage for
     * @param bandwidthPercent the bandwidth percentage (0 - 100) to assign to `group_id` to
     */
    setPriorityGroupBandwidth(groupId: number, bandwidthPercent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param userPriority the User Priority (0 - 7) to set flow control for
     * @param groupId the group (0 - 7) to assign `user_priority` to, or 15 for the unrestricted group.
     */
    setPriorityGroupId(userPriority: number, groupId: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param userPriority the User Priority (0 - 7) to set strict bandwidth for
     * @param strict %TRUE to allow `user_priority` to use all the bandwidth allocated to its priority group, or %FALSE if not
     */
    setPriorityStrictBandwidth(userPriority: number, strict: boolean): void
    setPriorityTrafficClass(userPriority: number, trafficClass: number): void

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingDcb

    connect(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-fcoe-flags", ...args: any[]): void
    connect(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-fcoe-mode", ...args: any[]): void
    connect(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-fcoe-priority", ...args: any[]): void
    connect(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-fip-flags", ...args: any[]): void
    connect(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-fip-priority", ...args: any[]): void
    connect(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-iscsi-flags", ...args: any[]): void
    connect(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-iscsi-priority", ...args: any[]): void
    connect(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority-flow-control-flags", ...args: any[]): void
    connect(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority-group-flags", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingDcb extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingDcb

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingDcb

    constructor(config?: SettingDcb.ConstructorProperties) 
    /**
     * Creates a new #NMSettingDcb object with default values.
     * @constructor 
     * @returns the new empty #NMSettingDcb object
     */
    constructor() 
    /**
     * Creates a new #NMSettingDcb object with default values.
     * @constructor 
     * @returns the new empty #NMSettingDcb object
     */
    static new(): SettingDcb
    _init(config?: SettingDcb.ConstructorProperties): void
}

export module SettingGeneric {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {
    }

}

export interface SettingGeneric {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGeneric

    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingGeneric

    parent: Setting & GObject.Object

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingGeneric

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingGeneric extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGeneric

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingGeneric

    constructor(config?: SettingGeneric.ConstructorProperties) 
    /**
     * Creates a new #NMSettingGeneric object with default values.
     * @constructor 
     * @returns the new empty #NMSettingGeneric object
     */
    constructor() 
    /**
     * Creates a new #NMSettingGeneric object with default values.
     * @constructor 
     * @returns the new empty #NMSettingGeneric object
     */
    static new(): SettingGeneric
    _init(config?: SettingGeneric.ConstructorProperties): void
}

export module SettingGsm {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingGsm

        /**
         * Bitfield of allowed frequency bands.  Note that not all devices allow
         * frequency band control.  Permitted values are those specified by
         * #NMSettingGsmNetworkBand.
         */
        allowedBands?: number | null
        /**
         * The GPRS Access Point Name specifying the APN used when establishing a
         * data session with the GSM-based network.  The APN often determines how
         * the user will be billed for their network usage and whether the user has
         * access to the Internet or just a provider-specific walled-garden, so it
         * is important to use the correct APN for the user's mobile broadband plan.
         * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
         * 03.60 Section 14.9.
         */
        apn?: string | null
        /**
         * When %TRUE, only connections to the home network will be allowed.
         * Connections to roaming networks will not be made.
         */
        homeOnly?: boolean | null
        /**
         * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
         * registration.  If the Network ID is specified, NetworkManager will
         * attempt to force the device to register only on the specified network.
         * This can be used to ensure that the device does not roam when direct
         * roaming control of the device is not otherwise possible.
         */
        networkId?: string | null
        /**
         * Network preference to force the device to only use specific network
         * technologies. The permitted values are %NM_SETTING_GSM_NETWORK_TYPE_ANY,
         * %NM_SETTING_GSM_NETWORK_TYPE_UMTS_HSPA,
         * %NM_SETTING_GSM_NETWORK_TYPE_GPRS_EDGE,
         * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_UMTS_HSPA,
         * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_GPRS_EDGE,
         * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_4G, and
         * %NM_SETTING_GSM_NETWORK_TYPE_4G.  Note that not all devices allow network
         * preference control.
         */
        networkType?: number | null
        /**
         * Number to dial when establishing a PPP data session with the GSM-based
         * mobile broadband network.  Many modems do not require PPP for connections
         * to the mobile network and thus this property should be left blank, which
         * allows NetworkManager to select the appropriate settings automatically.
         */
        number?: string | null
        /**
         * The password used to authenticate with the network, if required.  Many
         * providers do not require a password, or accept any password.  But if a
         * password is required, it is specified here.
         */
        password?: string | null
        /**
         * Flags indicating how to handle the #NMSettingGsm:password property.
         */
        passwordFlags?: number | null
        /**
         * If the SIM is locked with a PIN it must be unlocked before any other
         * operations are requested.  Specify the PIN here to allow operation of the
         * device.
         */
        pin?: string | null
        /**
         * Flags indicating how to handle the #NMSettingGsm:pin property.
         */
        pinFlags?: number | null
        /**
         * The username used to authenticate with the network, if required.  Many
         * providers do not require a username, or accept any username.  But if a
         * username is required, it is specified here.
         */
        username?: string | null
    }

}

export interface SettingGsm {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGsm

    /**
     * Bitfield of allowed frequency bands.  Note that not all devices allow
     * frequency band control.  Permitted values are those specified by
     * #NMSettingGsmNetworkBand.
     */
    allowedBands: number
    /**
     * The GPRS Access Point Name specifying the APN used when establishing a
     * data session with the GSM-based network.  The APN often determines how
     * the user will be billed for their network usage and whether the user has
     * access to the Internet or just a provider-specific walled-garden, so it
     * is important to use the correct APN for the user's mobile broadband plan.
     * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
     * 03.60 Section 14.9.
     */
    apn: string | null
    /**
     * When %TRUE, only connections to the home network will be allowed.
     * Connections to roaming networks will not be made.
     */
    homeOnly: boolean
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    networkId: string | null
    /**
     * Network preference to force the device to only use specific network
     * technologies. The permitted values are %NM_SETTING_GSM_NETWORK_TYPE_ANY,
     * %NM_SETTING_GSM_NETWORK_TYPE_UMTS_HSPA,
     * %NM_SETTING_GSM_NETWORK_TYPE_GPRS_EDGE,
     * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_UMTS_HSPA,
     * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_GPRS_EDGE,
     * %NM_SETTING_GSM_NETWORK_TYPE_PREFER_4G, and
     * %NM_SETTING_GSM_NETWORK_TYPE_4G.  Note that not all devices allow network
     * preference control.
     */
    networkType: number
    /**
     * Number to dial when establishing a PPP data session with the GSM-based
     * mobile broadband network.  Many modems do not require PPP for connections
     * to the mobile network and thus this property should be left blank, which
     * allows NetworkManager to select the appropriate settings automatically.
     */
    number: string | null
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password: string | null
    /**
     * Flags indicating how to handle the #NMSettingGsm:password property.
     */
    passwordFlags: number
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin: string | null
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pinFlags: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingGsm

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingGsm

    getAllowedBands(): number
    getApn(): string | null
    getHomeOnly(): boolean
    getNetworkId(): string | null
    getNetworkType(): number
    getNumber(): string | null
    getPassword(): string | null
    getPasswordFlags(): SettingSecretFlags
    getPin(): string | null
    getPinFlags(): SettingSecretFlags
    getUsername(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingGsm

    connect(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): number
    on(sigName: "notify::allowed-bands", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allowed-bands", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allowed-bands", ...args: any[]): void
    connect(sigName: "notify::apn", callback: (...args: any[]) => void): number
    on(sigName: "notify::apn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apn", ...args: any[]): void
    connect(sigName: "notify::home-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::home-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::home-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::home-only", ...args: any[]): void
    connect(sigName: "notify::network-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-id", ...args: any[]): void
    connect(sigName: "notify::network-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-type", ...args: any[]): void
    connect(sigName: "notify::number", callback: (...args: any[]) => void): number
    on(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-flags", ...args: any[]): void
    connect(sigName: "notify::pin", callback: (...args: any[]) => void): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pin", ...args: any[]): void
    connect(sigName: "notify::pin-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pin-flags", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingGsm extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGsm

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingGsm

    constructor(config?: SettingGsm.ConstructorProperties) 
    /**
     * Creates a new #NMSettingGsm object with default values.
     * @constructor 
     * @returns the new empty #NMSettingGsm object
     */
    constructor() 
    /**
     * Creates a new #NMSettingGsm object with default values.
     * @constructor 
     * @returns the new empty #NMSettingGsm object
     */
    static new(): SettingGsm
    _init(config?: SettingGsm.ConstructorProperties): void
}

export module SettingIP4Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingIP4Config

        /**
         * A string sent to the DHCP server to identify the local machine which the
         * DHCP server may use to customize the DHCP lease and options.
         */
        dhcpClientId?: string | null
        /**
         * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
         * specified name will be sent to the DHCP server when acquiring a lease.
         */
        dhcpHostname?: string | null
        /**
         * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
         * Some DHCP servers use this hostname to update DNS databases, essentially
         * providing a static hostname for the computer.  If the
         * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
         * %TRUE, the current persistent hostname of the computer is sent.
         */
        dhcpSendHostname?: boolean | null
        /**
         * Number of seconds after which the unfinished DHCP transaction fails
         * or zero for default.
         */
        dhcpTimeout?: number | null
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured nameservers and search domains are ignored and
         * only nameservers and search domains specified in the
         * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
         * any, are used.
         */
        ignoreAutoDns?: boolean | null
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured routes are ignored and only routes specified in
         * the #NMSettingIP4Config:routes property, if any, are used.
         */
        ignoreAutoRoutes?: boolean | null
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv4
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv6-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv4 configuration fails but IPv6
         * configuration completes successfully.
         */
        mayFail?: boolean | null
        /**
         * IPv4 configuration method.  If "auto" is specified then the appropriate
         * automatic method (DHCP, PPP, etc) is used for the interface and most
         * other properties can be left unset.  If "link-local" is specified, then a
         * link-local address in the 169.254/16 range will be assigned to the
         * interface.  If "manual" is specified, static IP addressing is used and at
         * least one IP address must be given in the "addresses" property.  If
         * "shared" is specified (indicating that this connection will provide
         * network access to other computers) then the interface is assigned an
         * address in the 10.42.x.1/24 range and a DHCP and forwarding DNS server
         * are started, and the interface is NAT-ed to the current default network
         * connection.  "disabled" means IPv4 will not be used on this connection.
         * This property must be set.
         */
        method?: string | null
        /**
         * If %TRUE, this connection will never be the default IPv4 connection,
         * meaning it will never be assigned the default route by NetworkManager.
         */
        neverDefault?: boolean | null
        /**
         * The default metric for routes that don't explicitly specify a metric.
         * The default value -1 means that the metric is chosen automatically
         * based on the device type.
         * The metric applies to dynamic routes, manual (static) routes that
         * don't have an explicit metric setting, address prefix routes, and
         * the default route.
         * As the linux kernel accepts zero (0) as a valid metric, zero is
         * a valid value.
         */
        routeMetric?: number | null
    }

}

export interface SettingIP4Config {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP4Config

    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     */
    dhcpClientId: string | null
    /**
     * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     */
    dhcpHostname: string | null
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcpSendHostname: boolean
    /**
     * Number of seconds after which the unfinished DHCP transaction fails
     * or zero for default.
     */
    dhcpTimeout: number
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured nameservers and search domains are ignored and
     * only nameservers and search domains specified in the
     * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
     * any, are used.
     */
    ignoreAutoDns: boolean
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured routes are ignored and only routes specified in
     * the #NMSettingIP4Config:routes property, if any, are used.
     */
    ignoreAutoRoutes: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv4
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv6-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv4 configuration fails but IPv6
     * configuration completes successfully.
     */
    mayFail: boolean
    /**
     * IPv4 configuration method.  If "auto" is specified then the appropriate
     * automatic method (DHCP, PPP, etc) is used for the interface and most
     * other properties can be left unset.  If "link-local" is specified, then a
     * link-local address in the 169.254/16 range will be assigned to the
     * interface.  If "manual" is specified, static IP addressing is used and at
     * least one IP address must be given in the "addresses" property.  If
     * "shared" is specified (indicating that this connection will provide
     * network access to other computers) then the interface is assigned an
     * address in the 10.42.x.1/24 range and a DHCP and forwarding DNS server
     * are started, and the interface is NAT-ed to the current default network
     * connection.  "disabled" means IPv4 will not be used on this connection.
     * This property must be set.
     */
    method: string | null
    /**
     * If %TRUE, this connection will never be the default IPv4 connection,
     * meaning it will never be assigned the default route by NetworkManager.
     */
    neverDefault: boolean
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * The default value -1 means that the metric is chosen automatically
     * based on the device type.
     * The metric applies to dynamic routes, manual (static) routes that
     * don't have an explicit metric setting, address prefix routes, and
     * the default route.
     * As the linux kernel accepts zero (0) as a valid metric, zero is
     * a valid value.
     */
    routeMetric: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingIP4Config

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingIP4Config

    /**
     * Adds a new IPv4 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     * @param address the new address to add
     * @returns %TRUE if the address was added; %FALSE if the address was already known.
     */
    addAddress(address: IP4Address): boolean
    /**
     * Adds a new DNS server to the setting.
     * @param dns the IPv4 address (network byte order) of the DNS server to add
     * @returns %TRUE if the DNS server was added; %FALSE if the server was already known
     */
    addDns(dns: number): boolean
    /**
     * Adds a new DNS search domain to the setting.
     * @param dnsSearch the search domain to add
     * @returns %TRUE if the DNS search domain was added; %FALSE if the search domain was already known
     */
    addDnsSearch(dnsSearch: string | null): boolean
    /**
     * Adds a new IPv4 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
     * @param route the route to add
     * @returns %TRUE if the route was added; %FALSE if the route was already known.
     */
    addRoute(route: IP4Route): boolean
    /**
     * Removes all configured addresses.
     */
    clearAddresses(): void
    /**
     * Removes all configured DNS servers.
     */
    clearDns(): void
    /**
     * Removes all configured DNS search domains.
     */
    clearDnsSearches(): void
    /**
     * Removes all configured routes.
     */
    clearRoutes(): void
    getAddress(i: number): IP4Address
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-client-id
     * property.
     * @returns the configured Client ID to send to the DHCP server when requesting addresses via DHCP.
     */
    getDhcpClientId(): string | null
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-hostname
     * property.
     * @returns the configured hostname to send to the DHCP server
     */
    getDhcpHostname(): string | null
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-send-hostname
     * property.
     * @returns %TRUE if NetworkManager should send the machine hostname to the DHCP server when requesting addresses to allow the server to automatically update DNS information for this machine.
     */
    getDhcpSendHostname(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-timeout
     * property.
     * @returns The number of seconds after which unfinished DHCP transaction fails or zero for "default".
     */
    getDhcpTimeout(): number
    getDns(i: number): number
    getDnsSearch(i: number): string | null
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-dns
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP) DNS information should be ignored.
     */
    getIgnoreAutoDns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-routes
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP) routes should be ignored.
     */
    getIgnoreAutoRoutes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:may-fail
     * property.
     * @returns %TRUE if this connection doesn't require IPv4 addressing to complete for the connection to succeed.
     */
    getMayFail(): boolean
    getMethod(): string | null
    /**
     * Returns the value contained in the #NMSettingIP4Config:never-default
     * property.
     * @returns %TRUE if this connection should never be the default connection for IPv4 addressing
     */
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP4Route
    /**
     * Returns the value contained in the #NMSettingIP4Config:route-metric
     * property.
     * @returns the route metric that is used for IPv4 routes that don't explicitly specify a metric. See #NMSettingIP4Config:route-metric for more details.
     */
    getRouteMetric(): number
    /**
     * Removes the address at index `i`.
     * @param i index number of the address to remove
     */
    removeAddress(i: number): void
    /**
     * Removes the address `address`.
     * @param address the IP address to remove
     * @returns %TRUE if the address was found and removed; %FALSE if it was not.
     */
    removeAddressByValue(address: IP4Address): boolean
    /**
     * Removes the DNS server at index `i`.
     * @param i index number of the DNS server to remove
     */
    removeDns(i: number): void
    /**
     * Removes the DNS server `dns`.
     * @param dns the DNS server to remove
     * @returns %TRUE if the DNS server was found and removed; %FALSE if it was not. domain was already known
     */
    removeDnsByValue(dns: number): boolean
    /**
     * Removes the DNS search domain at index `i`.
     * @param i index number of the DNS search domain
     */
    removeDnsSearch(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     * @param dnsSearch the search domain to remove
     * @returns %TRUE if the DNS search domain was found and removed; %FALSE if it was not. Since 0.9.10
     */
    removeDnsSearchByValue(dnsSearch: string | null): boolean
    /**
     * Removes the route at index `i`.
     * @param i index number of the route
     */
    removeRoute(i: number): void
    /**
     * Removes the route `route`.
     * @param route the route to remove
     * @returns %TRUE if the route was found and removed; %FALSE if it was not.
     */
    removeRouteByValue(route: IP4Route): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingIP4Config

    connect(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp-client-id", ...args: any[]): void
    connect(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp-hostname", ...args: any[]): void
    connect(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp-send-hostname", ...args: any[]): void
    connect(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp-timeout", ...args: any[]): void
    connect(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-auto-dns", ...args: any[]): void
    connect(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-auto-routes", ...args: any[]): void
    connect(sigName: "notify::may-fail", callback: (...args: any[]) => void): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::may-fail", ...args: any[]): void
    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::never-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::never-default", ...args: any[]): void
    connect(sigName: "notify::route-metric", callback: (...args: any[]) => void): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::route-metric", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingIP4Config extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP4Config

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingIP4Config

    constructor(config?: SettingIP4Config.ConstructorProperties) 
    /**
     * Creates a new #NMSettingIP4Config object with default values.
     * @constructor 
     * @returns the new empty #NMSettingIP4Config object
     */
    constructor() 
    /**
     * Creates a new #NMSettingIP4Config object with default values.
     * @constructor 
     * @returns the new empty #NMSettingIP4Config object
     */
    static new(): SettingIP4Config
    _init(config?: SettingIP4Config.ConstructorProperties): void
}

export module SettingIP6Config {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingIP6Config

        /**
         * The specified name will be sent to the DHCP server when acquiring a
         * lease.
         */
        dhcpHostname?: string | null
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured nameservers and search domains are
         * ignored and only nameservers and search domains specified in the
         * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
         * any, are used.
         */
        ignoreAutoDns?: boolean | null
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured routes are ignored and only routes
         * specified in the #NMSettingIP6Config:routes property, if any, are used.
         */
        ignoreAutoRoutes?: boolean | null
        /**
         * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
         * enabled, it makes the kernel generate a temporary IPv6 address in
         * addition to the public one generated from MAC address via modified
         * EUI-64.  This enhances privacy, but could cause problems in some
         * applications, on the other hand.  The permitted values are: 0: disabled,
         * 1: enabled (prefer public address), 2: enabled (prefer temporary
         * addresses).
         */
        ip6Privacy?: number | null
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv6
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv4-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv6 configuration fails but IPv4
         * configuration completes successfully.
         */
        mayFail?: boolean | null
        /**
         * IPv6 configuration method.  If "auto" is specified then the appropriate
         * automatic method (PPP, router advertisement, etc) is used for the device
         * and most other properties can be left unset.  To force the use of DHCP
         * only, specify "dhcp"; this method is only valid for Ethernet- based
         * hardware.  If "link-local" is specified, then an IPv6 link-local address
         * will be assigned to the interface.  If "manual" is specified, static IP
         * addressing is used and at least one IP address must be given in the
         * "addresses" property.  If "ignore" is specified, IPv6 configuration is
         * not done. This property must be set.  Note: the "shared" method is not
         * yet supported.
         */
        method?: string | null
        /**
         * If %TRUE, this connection will never be the default IPv6 connection,
         * meaning it will never be assigned the default IPv6 route by
         * NetworkManager.
         */
        neverDefault?: boolean | null
        /**
         * The default metric for routes that don't explicitly specify a metric.
         * The default value -1 means that the metric is chosen automatically
         * based on the device type.
         * The metric applies to dynamic routes, manual (static) routes that
         * don't have an explicit metric setting, address prefix routes, and
         * the default route.
         * As the linux kernel replaces zero (0) by 1024 (user-default), setting
         * this property to 0 means effectively setting it to 1024.
         */
        routeMetric?: number | null
    }

}

export interface SettingIP6Config {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP6Config

    /**
     * The specified name will be sent to the DHCP server when acquiring a
     * lease.
     */
    dhcpHostname: string | null
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured nameservers and search domains are
     * ignored and only nameservers and search domains specified in the
     * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
     * any, are used.
     */
    ignoreAutoDns: boolean
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIP6Config:routes property, if any, are used.
     */
    ignoreAutoRoutes: boolean
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: 0: disabled,
     * 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     */
    ip6Privacy: number
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv6
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv4-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv6 configuration fails but IPv4
     * configuration completes successfully.
     */
    mayFail: boolean
    /**
     * IPv6 configuration method.  If "auto" is specified then the appropriate
     * automatic method (PPP, router advertisement, etc) is used for the device
     * and most other properties can be left unset.  To force the use of DHCP
     * only, specify "dhcp"; this method is only valid for Ethernet- based
     * hardware.  If "link-local" is specified, then an IPv6 link-local address
     * will be assigned to the interface.  If "manual" is specified, static IP
     * addressing is used and at least one IP address must be given in the
     * "addresses" property.  If "ignore" is specified, IPv6 configuration is
     * not done. This property must be set.  Note: the "shared" method is not
     * yet supported.
     */
    method: string | null
    /**
     * If %TRUE, this connection will never be the default IPv6 connection,
     * meaning it will never be assigned the default IPv6 route by
     * NetworkManager.
     */
    neverDefault: boolean
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * The default value -1 means that the metric is chosen automatically
     * based on the device type.
     * The metric applies to dynamic routes, manual (static) routes that
     * don't have an explicit metric setting, address prefix routes, and
     * the default route.
     * As the linux kernel replaces zero (0) by 1024 (user-default), setting
     * this property to 0 means effectively setting it to 1024.
     */
    routeMetric: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingIP6Config

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingIP6Config

    /**
     * Adds a new IPv6 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     * @param address the new address to add
     * @returns %TRUE if the address was added; %FALSE if the address was already known.
     */
    addAddress(address: IP6Address): boolean
    /**
     * Adds a new DNS server to the setting.
     * @param dns the IPv6 address of the DNS server to add
     * @returns %TRUE if the DNS server was added; %FALSE if the server was already known
     */
    addDns(dns: any | null): boolean
    /**
     * Adds a new DNS search domain to the setting.
     * @param dnsSearch the search domain to add
     * @returns %TRUE if the DNS search domain was added; %FALSE if the search domain was already known
     */
    addDnsSearch(dnsSearch: string | null): boolean
    /**
     * Adds a new IPv6 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
     * @param route the route to add
     * @returns %TRUE if the route was added; %FALSE if the route was already known.
     */
    addRoute(route: IP6Route): boolean
    /**
     * Removes all configured addresses.
     */
    clearAddresses(): void
    /**
     * Removes all configured DNS servers.
     */
    clearDns(): void
    /**
     * Removes all configured DNS search domains.
     */
    clearDnsSearches(): void
    /**
     * Removes all configured routes.
     */
    clearRoutes(): void
    getAddress(i: number): IP6Address
    /**
     * Returns the value contained in the #NMSettingIP6Config:dhcp-hostname
     * property.
     * @returns the configured hostname to send to the DHCP server
     */
    getDhcpHostname(): string | null
    getDns(i: number): any | null
    getDnsSearch(i: number): string | null
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-dns
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP or router advertisements) DNS information should be ignored.
     */
    getIgnoreAutoDns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-routes
     * property.
     * @returns %TRUE if automatically configured (ie via DHCP) routes should be ignored.
     */
    getIgnoreAutoRoutes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ip6-privacy
     * property.
     * @returns IPv6 Privacy Extensions configuration value (#NMSettingIP6ConfigPrivacy).
     */
    getIp6Privacy(): SettingIP6ConfigPrivacy
    /**
     * Returns the value contained in the #NMSettingIP6Config:may-fail
     * property.
     * @returns %TRUE if this connection doesn't require IPv6 addressing to complete for the connection to succeed.
     */
    getMayFail(): boolean
    getMethod(): string | null
    /**
     * Returns the value contained in the #NMSettingIP6Config:never-default
     * property.
     * @returns %TRUE if this connection should never be the default connection for IPv6 addressing
     */
    getNeverDefault(): boolean
    getNumAddresses(): number
    getNumDns(): number
    getNumDnsSearches(): number
    getNumRoutes(): number
    getRoute(i: number): IP6Route
    /**
     * Returns the value contained in the #NMSettingIP6Config:route-metric
     * property.
     * @returns the route metric that is used for IPv6 routes that don't explicitly specify a metric. See #NMSettingIP6Config:route-metric for more details.
     */
    getRouteMetric(): number
    /**
     * Removes the address at index `i`.
     * @param i index number of the address to remove
     */
    removeAddress(i: number): void
    /**
     * Removes the address `address`.
     * @param address the address to remove
     * @returns %TRUE if the address was found and removed; %FALSE if it was not.
     */
    removeAddressByValue(address: IP6Address): boolean
    /**
     * Removes the DNS server at index `i`.
     * @param i index number of the DNS server to remove
     */
    removeDns(i: number): void
    /**
     * Removes the DNS server at index `i`.
     * @param dns the IPv6 address of the DNS server to remove
     * @returns %TRUE if the DNS server was found and removed; %FALSE if it was not.
     */
    removeDnsByValue(dns: any | null): boolean
    /**
     * Removes the DNS search domain at index `i`.
     * @param i index number of the DNS search domain
     */
    removeDnsSearch(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     * @param dnsSearch the search domain to remove
     * @returns %TRUE if the DNS search domain was found and removed; %FALSE if it was not. Since 0.9.10
     */
    removeDnsSearchByValue(dnsSearch: string | null): boolean
    /**
     * Removes the route at index `i`.
     * @param i index number of the route
     */
    removeRoute(i: number): void
    /**
     * Removes the route `route`.
     * @param route the route to remove
     * @returns %TRUE if the route was found and removed; %FALSE if it was not.
     */
    removeRouteByValue(route: IP6Route): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingIP6Config

    connect(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dhcp-hostname", ...args: any[]): void
    connect(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-auto-dns", ...args: any[]): void
    connect(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ignore-auto-routes", ...args: any[]): void
    connect(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): number
    on(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ip6-privacy", ...args: any[]): void
    connect(sigName: "notify::may-fail", callback: (...args: any[]) => void): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::may-fail", ...args: any[]): void
    connect(sigName: "notify::method", callback: (...args: any[]) => void): number
    on(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::never-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::never-default", ...args: any[]): void
    connect(sigName: "notify::route-metric", callback: (...args: any[]) => void): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::route-metric", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingIP6Config extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP6Config

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingIP6Config

    constructor(config?: SettingIP6Config.ConstructorProperties) 
    /**
     * Creates a new #NMSettingIP6Config object with default values.
     * @constructor 
     * @returns the new empty #NMSettingIP6Config object
     */
    constructor() 
    /**
     * Creates a new #NMSettingIP6Config object with default values.
     * @constructor 
     * @returns the new empty #NMSettingIP6Config object
     */
    static new(): SettingIP6Config
    _init(config?: SettingIP6Config.ConstructorProperties): void
}

export module SettingInfiniband {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingInfiniband

        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple frames.
         */
        mtu?: number | null
        /**
         * The InfiniBand P_Key to use for this device. A value of -1 means to use
         * the default P_Key (aka "the P_Key at index 0").  Otherwise it is a 16-bit
         * unsigned integer, whose high bit is set if it is a "full membership"
         * P_Key.
         */
        pKey?: number | null
        /**
         * The interface name of the parent device of this device. Normally %NULL,
         * but if the #NMSettingInfiniband:p_key property is set, then you must
         * specify the base device by setting either this property or
         * #NMSettingInfiniband:mac-address.
         */
        parent?: string | null
        /**
         * The IP-over-InfiniBand transport mode. Either "datagram" or
         * "connected".
         */
        transportMode?: string | null
    }

}

export interface SettingInfiniband {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingInfiniband

    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple frames.
     */
    mtu: number
    /**
     * The InfiniBand P_Key to use for this device. A value of -1 means to use
     * the default P_Key (aka "the P_Key at index 0").  Otherwise it is a 16-bit
     * unsigned integer, whose high bit is set if it is a "full membership"
     * P_Key.
     */
    pKey: number
    /**
     * The IP-over-InfiniBand transport mode. Either "datagram" or
     * "connected".
     */
    transportMode: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingInfiniband

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingInfiniband

    getMacAddress(): number[]
    getMtu(): number
    /**
     * Returns the P_Key to use for this device. A value of -1 means to
     * use the default P_Key (aka "the P_Key at index 0"). Otherwise it is
     * a 16-bit unsigned integer.
     * @returns the IPoIB P_Key
     */
    getPKey(): number
    /**
     * Returns the parent interface name for this device, if set.
     * @returns the parent interface name
     */
    getParent(): string | null
    /**
     * Returns the transport mode for this device. Either 'datagram' or
     * 'connected'.
     * @returns the IPoIB transport mode
     */
    getTransportMode(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingInfiniband

    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::p-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::p-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::p-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::p-key", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingInfiniband extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingInfiniband

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingInfiniband

    constructor(config?: SettingInfiniband.ConstructorProperties) 
    /**
     * Creates a new #NMSettingInfiniband object with default values.
     * @constructor 
     * @returns the new empty #NMSettingInfiniband object
     */
    constructor() 
    /**
     * Creates a new #NMSettingInfiniband object with default values.
     * @constructor 
     * @returns the new empty #NMSettingInfiniband object
     */
    static new(): SettingInfiniband
    _init(config?: SettingInfiniband.ConstructorProperties): void
}

export module SettingOlpcMesh {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

        /**
         * Channel on which the mesh network to join is located.
         */
        channel?: number | null
    }

}

export interface SettingOlpcMesh {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    /**
     * Channel on which the mesh network to join is located.
     */
    channel: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    getChannel(): number
    getDhcpAnycastAddress(): number[]
    getSsid(): number[]

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingOlpcMesh extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingOlpcMesh

    constructor(config?: SettingOlpcMesh.ConstructorProperties) 
    /**
     * Creates a new #NMSettingOlpcMesh object with default values.
     * @constructor 
     * @returns the new empty #NMSettingOlpcMesh object
     */
    constructor() 
    /**
     * Creates a new #NMSettingOlpcMesh object with default values.
     * @constructor 
     * @returns the new empty #NMSettingOlpcMesh object
     */
    static new(): SettingOlpcMesh
    _init(config?: SettingOlpcMesh.ConstructorProperties): void
}

export module SettingPPP {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingPPP

        /**
         * If non-zero, instruct pppd to set the serial port to the specified
         * baudrate.  This value should normally be left as 0 to automatically
         * choose the speed.
         */
        baud?: number | null
        /**
         * If %TRUE, specify that pppd should set the serial port to use hardware
         * flow control with RTS and CTS signals.  This value should normally be set
         * to %FALSE.
         */
        crtscts?: boolean | null
        /**
         * If non-zero, instruct pppd to presume the connection to the peer has
         * failed if the specified number of LCP echo-requests go unanswered by the
         * peer.  The "lcp-echo-interval" property must also be set to a non-zero
         * value if this property is used.
         */
        lcpEchoFailure?: number | null
        /**
         * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
         * every n seconds (where n is the specified value).  Note that some PPP
         * peers will respond to echo requests and some will not, and it is not
         * possible to autodetect this.
         */
        lcpEchoInterval?: number | null
        /**
         * If %TRUE, stateful MPPE is used.  See pppd documentation for more
         * information on stateful MPPE.
         */
        mppeStateful?: boolean | null
        /**
         * If non-zero, instruct pppd to request that the peer send packets no
         * larger than the specified size.  If non-zero, the MRU should be between
         * 128 and 16384.
         */
        mru?: number | null
        /**
         * If non-zero, instruct pppd to send packets no larger than the specified
         * size.
         */
        mtu?: number | null
        /**
         * If %TRUE, Van Jacobsen TCP header compression will not be requested.
         */
        noVjComp?: boolean | null
        /**
         * If %TRUE, do not require the other side (usually the PPP server) to
         * authenticate itself to the client.  If %FALSE, require authentication
         * from the remote side.  In almost all cases, this should be %TRUE.
         */
        noauth?: boolean | null
        /**
         * If %TRUE, BSD compression will not be requested.
         */
        nobsdcomp?: boolean | null
        /**
         * If %TRUE, "deflate" compression will not be requested.
         */
        nodeflate?: boolean | null
        /**
         * If %TRUE, the CHAP authentication method will not be used.
         */
        refuseChap?: boolean | null
        /**
         * If %TRUE, the EAP authentication method will not be used.
         */
        refuseEap?: boolean | null
        /**
         * If %TRUE, the MSCHAP authentication method will not be used.
         */
        refuseMschap?: boolean | null
        /**
         * If %TRUE, the MSCHAPv2 authentication method will not be used.
         */
        refuseMschapv2?: boolean | null
        /**
         * If %TRUE, the PAP authentication method will not be used.
         */
        refusePap?: boolean | null
        /**
         * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
         * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
         * session will fail.  Note that MPPE is not used on mobile broadband
         * connections.
         */
        requireMppe?: boolean | null
        /**
         * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
         * required for the PPP session, and the "require-mppe" property must also
         * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
         */
        requireMppe128?: boolean | null
    }

}

export interface SettingPPP {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPP

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
    lcpEchoFailure: number
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
    refuseChap: boolean
    /**
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuseEap: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuseMschap: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuseMschapv2: boolean
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
    requireMppe: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    requireMppe128: boolean
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingPPP

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingPPP

    getBaud(): number
    getCrtscts(): boolean
    getLcpEchoFailure(): number
    getLcpEchoInterval(): number
    getMppeStateful(): boolean
    getMru(): number
    getMtu(): number
    getNoVjComp(): boolean
    getNoauth(): boolean
    getNobsdcomp(): boolean
    getNodeflate(): boolean
    getRefuseChap(): boolean
    getRefuseEap(): boolean
    getRefuseMschap(): boolean
    getRefuseMschapv2(): boolean
    getRefusePap(): boolean
    getRequireMppe(): boolean
    getRequireMppe128(): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingPPP

    connect(sigName: "notify::baud", callback: (...args: any[]) => void): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baud", ...args: any[]): void
    connect(sigName: "notify::crtscts", callback: (...args: any[]) => void): number
    on(sigName: "notify::crtscts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::crtscts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::crtscts", ...args: any[]): void
    connect(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): number
    on(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lcp-echo-failure", ...args: any[]): void
    connect(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::lcp-echo-interval", ...args: any[]): void
    connect(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): number
    on(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mppe-stateful", ...args: any[]): void
    connect(sigName: "notify::mru", callback: (...args: any[]) => void): number
    on(sigName: "notify::mru", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mru", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mru", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-vj-comp", ...args: any[]): void
    connect(sigName: "notify::noauth", callback: (...args: any[]) => void): number
    on(sigName: "notify::noauth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::noauth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::noauth", ...args: any[]): void
    connect(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): number
    on(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nobsdcomp", ...args: any[]): void
    connect(sigName: "notify::nodeflate", callback: (...args: any[]) => void): number
    on(sigName: "notify::nodeflate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::nodeflate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::nodeflate", ...args: any[]): void
    connect(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): number
    on(sigName: "notify::refuse-chap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refuse-chap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refuse-chap", ...args: any[]): void
    connect(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): number
    on(sigName: "notify::refuse-eap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refuse-eap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refuse-eap", ...args: any[]): void
    connect(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): number
    on(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refuse-mschap", ...args: any[]): void
    connect(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): number
    on(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refuse-mschapv2", ...args: any[]): void
    connect(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): number
    on(sigName: "notify::refuse-pap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refuse-pap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refuse-pap", ...args: any[]): void
    connect(sigName: "notify::require-mppe", callback: (...args: any[]) => void): number
    on(sigName: "notify::require-mppe", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::require-mppe", ...args: any[]): void
    connect(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): number
    on(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::require-mppe-128", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingPPP extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPP

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingPPP

    constructor(config?: SettingPPP.ConstructorProperties) 
    /**
     * Creates a new #NMSettingPPP object with default values.
     * @constructor 
     * @returns the new empty #NMSettingPPP object
     */
    constructor() 
    /**
     * Creates a new #NMSettingPPP object with default values.
     * @constructor 
     * @returns the new empty #NMSettingPPP object
     */
    static new(): SettingPPP
    _init(config?: SettingPPP.ConstructorProperties): void
}

export module SettingPPPOE {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingPPPOE

        /**
         * Password used to authenticate with the PPPoE service.
         */
        password?: string | null
        /**
         * Flags indicating how to handle the #NMSettingPPPOE:password property.
         */
        passwordFlags?: number | null
        /**
         * If specified, instruct PPPoE to only initiate sessions with access
         * concentrators that provide the specified service.  For most providers,
         * this should be left blank.  It is only required if there are multiple
         * access concentrators or a specific service is known to be required.
         */
        service?: string | null
        /**
         * Username used to authenticate with the PPPoE service.
         */
        username?: string | null
    }

}

export interface SettingPPPOE {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPPOE

    /**
     * Password used to authenticate with the PPPoE service.
     */
    password: string | null
    /**
     * Flags indicating how to handle the #NMSettingPPPOE:password property.
     */
    passwordFlags: number
    /**
     * If specified, instruct PPPoE to only initiate sessions with access
     * concentrators that provide the specified service.  For most providers,
     * this should be left blank.  It is only required if there are multiple
     * access concentrators or a specific service is known to be required.
     */
    service: string | null
    /**
     * Username used to authenticate with the PPPoE service.
     */
    username: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingPPPOE

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingPPPOE

    getPassword(): string | null
    getPasswordFlags(): SettingSecretFlags
    getService(): string | null
    getUsername(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingPPPOE

    connect(sigName: "notify::password", callback: (...args: any[]) => void): number
    on(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password", ...args: any[]): void
    connect(sigName: "notify::password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-flags", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingPPPOE extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPPOE

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingPPPOE

    constructor(config?: SettingPPPOE.ConstructorProperties) 
    /**
     * Creates a new #NMSettingPPPOE object with default values.
     * @constructor 
     * @returns the new empty #NMSettingPPPOE object
     */
    constructor() 
    /**
     * Creates a new #NMSettingPPPOE object with default values.
     * @constructor 
     * @returns the new empty #NMSettingPPPOE object
     */
    static new(): SettingPPPOE
    _init(config?: SettingPPPOE.ConstructorProperties): void
}

export module SettingSerial {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingSerial

        /**
         * Speed to use for communication over the serial port.  Note that this
         * value usually has no effect for mobile broadband modems as they generally
         * ignore speed settings and use the highest available speed.
         */
        baud?: number | null
        /**
         * Byte-width of the serial communication. The 8 in "8n1" for example.
         */
        bits?: number | null
        /**
         * Parity setting of the serial port.  Either 'E' for even parity, 'o' for
         * odd parity, or 'n' for no parity.
         */
        parity?: number | null
        /**
         * Time to delay between each byte sent to the modem, in microseconds.
         */
        sendDelay?: number | null
        /**
         * Number of stop bits for communication on the serial port.  Either 1 or 2.
         * The 1 in "8n1" for example.
         */
        stopbits?: number | null
    }

}

export interface SettingSerial {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingSerial

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
     * Parity setting of the serial port.  Either 'E' for even parity, 'o' for
     * odd parity, or 'n' for no parity.
     */
    parity: number
    /**
     * Time to delay between each byte sent to the modem, in microseconds.
     */
    sendDelay: number
    /**
     * Number of stop bits for communication on the serial port.  Either 1 or 2.
     * The 1 in "8n1" for example.
     */
    stopbits: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingSerial

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingSerial

    getBaud(): number
    getBits(): number
    getParity(): number
    getSendDelay(): number
    getStopbits(): number

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingSerial

    connect(sigName: "notify::baud", callback: (...args: any[]) => void): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::baud", ...args: any[]): void
    connect(sigName: "notify::bits", callback: (...args: any[]) => void): number
    on(sigName: "notify::bits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bits", ...args: any[]): void
    connect(sigName: "notify::parity", callback: (...args: any[]) => void): number
    on(sigName: "notify::parity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parity", ...args: any[]): void
    connect(sigName: "notify::send-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::send-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::send-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::send-delay", ...args: any[]): void
    connect(sigName: "notify::stopbits", callback: (...args: any[]) => void): number
    on(sigName: "notify::stopbits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stopbits", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stopbits", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingSerial extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingSerial

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingSerial

    constructor(config?: SettingSerial.ConstructorProperties) 
    /**
     * Creates a new #NMSettingSerial object with default values.
     * @constructor 
     * @returns the new empty #NMSettingSerial object
     */
    constructor() 
    /**
     * Creates a new #NMSettingSerial object with default values.
     * @constructor 
     * @returns the new empty #NMSettingSerial object
     */
    static new(): SettingSerial
    _init(config?: SettingSerial.ConstructorProperties): void
}

export module SettingTeam {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingTeam

        /**
         * The JSON configuration for the team network interface.  The property
         * should contain raw JSON configuration data suitable for teamd, because
         * the value is passed directly to teamd. If not specified, the default
         * configuration is used.  See man teamd.conf for the format details.
         */
        config?: string | null
        /**
         * The name of the virtual in-kernel team network interface
         */
        interfaceName?: string | null
    }

}

export interface SettingTeam {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeam

    /**
     * The JSON configuration for the team network interface.  The property
     * should contain raw JSON configuration data suitable for teamd, because
     * the value is passed directly to teamd. If not specified, the default
     * configuration is used.  See man teamd.conf for the format details.
     */
    config: string | null
    /**
     * The name of the virtual in-kernel team network interface
     */
    interfaceName: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingTeam

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingTeam

    getConfig(): string | null
    getInterfaceName(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingTeam

    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingTeam extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeam

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingTeam

    constructor(config?: SettingTeam.ConstructorProperties) 
    /**
     * Creates a new #NMSettingTeam object with default values.
     * @constructor 
     * @returns the new empty #NMSettingTeam object
     */
    constructor() 
    /**
     * Creates a new #NMSettingTeam object with default values.
     * @constructor 
     * @returns the new empty #NMSettingTeam object
     */
    static new(): SettingTeam
    _init(config?: SettingTeam.ConstructorProperties): void
}

export module SettingTeamPort {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingTeamPort

        /**
         * The JSON configuration for the team port. The property should contain raw
         * JSON configuration data suitable for teamd, because the value is passed
         * directly to teamd. If not specified, the default configuration is
         * used. See man teamd.conf for the format details.
         */
        config?: string | null
    }

}

export interface SettingTeamPort {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeamPort

    /**
     * The JSON configuration for the team port. The property should contain raw
     * JSON configuration data suitable for teamd, because the value is passed
     * directly to teamd. If not specified, the default configuration is
     * used. See man teamd.conf for the format details.
     */
    config: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingTeamPort

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingTeamPort

    getConfig(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingTeamPort

    connect(sigName: "notify::config", callback: (...args: any[]) => void): number
    on(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::config", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingTeamPort extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeamPort

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingTeamPort

    constructor(config?: SettingTeamPort.ConstructorProperties) 
    /**
     * Creates a new #NMSettingTeamPort object with default values.
     * @constructor 
     * @returns the new empty #NMSettingTeamPort object
     */
    constructor() 
    /**
     * Creates a new #NMSettingTeamPort object with default values.
     * @constructor 
     * @returns the new empty #NMSettingTeamPort object
     */
    static new(): SettingTeamPort
    _init(config?: SettingTeamPort.ConstructorProperties): void
}

export module SettingVPN {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingVPN

        /**
         * If the VPN service supports persistence, and this property is %TRUE,
         * the VPN will attempt to stay connected across link changes and outages,
         * until explicitly disconnected.
         */
        persistent?: boolean | null
        /**
         * D-Bus service name of the VPN plugin that this setting uses to connect to
         * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
         * plugin.
         */
        serviceType?: string | null
        /**
         * If the VPN connection requires a user name for authentication, that name
         * should be provided here.  If the connection is available to more than one
         * user, and the VPN requires each user to supply a different name, then
         * leave this property empty.  If this property is empty, NetworkManager
         * will automatically supply the username of the user which requested the
         * VPN connection.
         */
        userName?: string | null
    }

}

export interface SettingVPN {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVPN

    /**
     * If the VPN service supports persistence, and this property is %TRUE,
     * the VPN will attempt to stay connected across link changes and outages,
     * until explicitly disconnected.
     */
    persistent: boolean
    /**
     * D-Bus service name of the VPN plugin that this setting uses to connect to
     * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
     * plugin.
     */
    serviceType: string | null
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    userName: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingVPN

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingVPN

    /**
     * Establishes a relationship between `key` and `item` internally in the
     * setting which may be retrieved later.  Should not be used to store passwords
     * or other secrets, which is what nm_setting_vpn_add_secret() is for.
     * @param key a name that uniquely identifies the given value `item`
     * @param item the value to be referenced by `key`
     */
    addDataItem(key: string | null, item: string | null): void
    /**
     * Establishes a relationship between `key` and `secret` internally in the
     * setting which may be retrieved later.
     * @param key a name that uniquely identifies the given secret `secret`
     * @param secret the secret to be referenced by `key`
     */
    addSecret(key: string | null, secret: string | null): void
    /**
     * Iterates all data items stored in this setting.  It is safe to add, remove,
     * and modify data items inside `func,` though any additions or removals made
     * during iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreachDataItem(func: VPNIterFunc): void
    /**
     * Iterates all secrets stored in this setting.  It is safe to add, remove,
     * and modify secrets inside `func,` though any additions or removals made during
     * iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreachSecret(func: VPNIterFunc): void
    /**
     * Retrieves the data item of a key/value relationship previously established
     * by nm_setting_vpn_add_data_item().
     * @param key the name of the data item to retrieve
     * @returns the data item, if any
     */
    getDataItem(key: string | null): string | null
    /**
     * Gets number of key/value pairs of VPN configuration data.
     * @returns the number of VPN plugin specific configuration data items
     */
    getNumDataItems(): number
    /**
     * Gets number of VPN plugin specific secrets in the setting.
     * @returns the number of VPN plugin specific secrets
     */
    getNumSecrets(): number
    getPersistent(): boolean
    /**
     * Retrieves the secret of a key/value relationship previously established
     * by nm_setting_vpn_add_secret().
     * @param key the name of the secret to retrieve
     * @returns the secret, if any
     */
    getSecret(key: string | null): string | null
    /**
     * Returns the service name of the VPN, which identifies the specific VPN
     * plugin that should be used to connect to this VPN.
     * @returns the VPN plugin's service name
     */
    getServiceType(): string | null
    getUserName(): string | null
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_data_item().
     * @param key the name of the data item to remove
     * @returns %TRUE if the data item was found and removed from the internal list, %FALSE if it was not.
     */
    removeDataItem(key: string | null): boolean
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_secret().
     * @param key the name of the secret to remove
     * @returns %TRUE if the secret was found and removed from the internal list, %FALSE if it was not.
     */
    removeSecret(key: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingVPN

    connect(sigName: "notify::persistent", callback: (...args: any[]) => void): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::persistent", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingVPN extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVPN

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingVPN

    constructor(config?: SettingVPN.ConstructorProperties) 
    /**
     * Creates a new #NMSettingVPN object with default values.
     * @constructor 
     * @returns the new empty #NMSettingVPN object
     */
    constructor() 
    /**
     * Creates a new #NMSettingVPN object with default values.
     * @constructor 
     * @returns the new empty #NMSettingVPN object
     */
    static new(): SettingVPN
    _init(config?: SettingVPN.ConstructorProperties): void
}

export module SettingVlan {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingVlan

        /**
         * One or more flags which control the behavior and features of the VLAN
         * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
         * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
         * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
         * master device's operating state), %NM_VLAN_FLAG_MVRP (use of the MVRP
         * protocol).
         */
        flags?: number | null
        /**
         * The VLAN identifier that the interface created by this connection should
         * be assigned.
         */
        id?: number | null
        /**
         * If given, specifies the kernel name of the VLAN interface. If not given,
         * a default name will be constructed from the interface described by the
         * parent interface and the #NMSettingVlan:id property, eg "eth2.1". The
         * parent interface may be given by the #NMSettingVlan:parent property or by
         * the #NMSettingWired:mac-address property of an #NMSettingWired setting.
         */
        interfaceName?: string | null
        /**
         * If given, specifies the parent interface name or parent connection UUID
         * from which this VLAN interface should be created.  If this property is
         * not specified, the connection must contain an #NMSettingWired setting
         * with a #NMSettingWired:mac-address property.
         */
        parent?: string | null
    }

}

export interface SettingVlan {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVlan

    /**
     * One or more flags which control the behavior and features of the VLAN
     * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
     * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
     * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
     * master device's operating state), %NM_VLAN_FLAG_MVRP (use of the MVRP
     * protocol).
     */
    flags: number
    /**
     * The VLAN identifier that the interface created by this connection should
     * be assigned.
     */
    id: number
    /**
     * If given, specifies the kernel name of the VLAN interface. If not given,
     * a default name will be constructed from the interface described by the
     * parent interface and the #NMSettingVlan:id property, eg "eth2.1". The
     * parent interface may be given by the #NMSettingVlan:parent property or by
     * the #NMSettingWired:mac-address property of an #NMSettingWired setting.
     */
    interfaceName: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingVlan

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingVlan

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
     * @param from the priority to map to `to`
     * @param to the priority to map `from` to
     * @returns %TRUE if the new priority mapping was successfully added to the list, %FALSE if error
     */
    addPriority(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Adds a priority map entry into either the #NMSettingVlan:ingress_priority_map
     * or the #NMSettingVlan:egress_priority_map properties.  The priority map maps
     * the Linux SKB priorities to 802.1p priorities.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
     * @returns %TRUE if the entry was successfully added to the list, or it overwrote the old value, %FALSE if error
     */
    addPriorityStr(map: VlanPriorityMap, str: string | null): boolean
    /**
     * Clear all the entries from #NMSettingVlan:ingress_priority_map or
     * #NMSettingVlan:egress_priority_map properties.
     * @param map the type of priority map
     */
    clearPriorities(map: VlanPriorityMap): void
    getFlags(): number
    getId(): number
    getInterfaceName(): string | null
    /**
     * Returns the number of entries in the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties of this setting.
     * @param map the type of priority map
     * @returns return the number of ingress/egress priority entries, -1 if error
     */
    getNumPriorities(map: VlanPriorityMap): number
    getParent(): string | null
    /**
     * Retrieve one of the entries of the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map properties of this setting.
     * @param map the type of priority map
     * @param idx the zero-based index of the ingress/egress priority map entry
     * @returns %TRUE if a priority map was returned, %FALSE if error
     */
    getPriority(map: VlanPriorityMap, idx: number): [ /* returnType */ boolean, /* outFrom */ number, /* outTo */ number ]
    /**
     * Removes the priority map at index `idx` from the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties.
     * @param map the type of priority map
     * @param idx the zero-based index of the priority map to remove
     */
    removePriority(map: VlanPriorityMap, idx: number): void
    /**
     * Removes the priority map `form:``to` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     * @param map the type of priority map
     * @param from the priority to map to `to`
     * @param to the priority to map `from` to
     * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
     */
    removePriorityByValue(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Removes the priority map `str` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
     * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
     */
    removePriorityStrByValue(map: VlanPriorityMap, str: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingVlan

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingVlan extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVlan

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingVlan

    constructor(config?: SettingVlan.ConstructorProperties) 
    /**
     * Creates a new #NMSettingVlan object with default values.
     * @constructor 
     * @returns the new empty #NMSettingVlan object
     */
    constructor() 
    /**
     * Creates a new #NMSettingVlan object with default values.
     * @constructor 
     * @returns the new empty #NMSettingVlan object
     */
    static new(): SettingVlan
    _init(config?: SettingVlan.ConstructorProperties): void
}

export module SettingWimax {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingWimax

        /**
         * Network Service Provider (NSP) name of the WiMAX network this connection
         * should use.
         */
        networkName?: string | null
    }

}

export interface SettingWimax {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWimax

    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    networkName: string | null
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWimax

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingWimax

    /**
     * Returns the MAC address of a WiMAX device which this connection is locked
     * to.
     * @returns the MAC address
     */
    getMacAddress(): number[]
    /**
     * Returns the WiMAX NSP name (ex "Sprint" or "CLEAR") which identifies the
     * specific WiMAX network this setting describes a connection to.
     * @returns the WiMAX NSP name
     */
    getNetworkName(): string | null

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingWimax

    connect(sigName: "notify::network-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingWimax extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWimax

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingWimax

    constructor(config?: SettingWimax.ConstructorProperties) 
    /**
     * Creates a new #NMSettingWimax object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWimax object
     */
    constructor() 
    /**
     * Creates a new #NMSettingWimax object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWimax object
     */
    static new(): SettingWimax
    _init(config?: SettingWimax.ConstructorProperties): void
}

export module SettingWired {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingWired

        /**
         * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
         * %FALSE, do not allow auto-negotiation, in which case the "speed" and
         * "duplex" properties should be set.
         */
        autoNegotiate?: boolean | null
        /**
         * If specified, request that the device only use the specified duplex mode.
         * Either "half" or "full".
         */
        duplex?: string | null
        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple Ethernet frames.
         */
        mtu?: number | null
        /**
         * Specific port type to use if the device supports multiple
         * attachment methods.  One of "tp" (Twisted Pair), "aui" (Attachment Unit
         * Interface), "bnc" (Thin Ethernet) or "mii" (Media Independent Interface).
         * If the device supports only one port type, this setting is ignored.
         */
        port?: string | null
        /**
         * s390 network device type; one of "qeth", "lcs", or "ctc", representing
         * the different types of virtual network devices available on s390 systems.
         */
        s390Nettype?: string | null
        /**
         * If non-zero, request that the device use only the specified speed.  In
         * Mbit/s, ie 100 == 100Mbit/s.
         */
        speed?: number | null
    }

}

export interface SettingWired {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWired

    /**
     * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
     * %FALSE, do not allow auto-negotiation, in which case the "speed" and
     * "duplex" properties should be set.
     */
    autoNegotiate: boolean
    /**
     * If specified, request that the device only use the specified duplex mode.
     * Either "half" or "full".
     */
    duplex: string | null
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
    port: string | null
    /**
     * s390 network device type; one of "qeth", "lcs", or "ctc", representing
     * the different types of virtual network devices available on s390 systems.
     */
    s390Nettype: string | null
    /**
     * If non-zero, request that the device use only the specified speed.  In
     * Mbit/s, ie 100 == 100Mbit/s.
     */
    speed: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWired

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingWired

    /**
     * Adds a new MAC address to the #NMSettingWired:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
     */
    addMacBlacklistItem(mac: string | null): boolean
    /**
     * Add an option to the table.  The option is compared to an internal list
     * of allowed options.  Key names may contain only alphanumeric characters
     * (ie [a-zA-Z0-9]).  Adding a new key replaces any existing key/value pair that
     * may already exist.
     * @param key key name for the option
     * @param value value for the option
     * @returns %TRUE if the option was valid and was added to the internal option list, %FALSE if it was not.
     */
    addS390Option(key: string | null, value: string | null): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clearMacBlacklistItems(): void
    getAutoNegotiate(): boolean
    getClonedMacAddress(): number[]
    getDuplex(): string | null
    getMacAddress(): number[]
    getMacAddressBlacklist(): GLib.SList[]
    getMacBlacklistItem(idx: number): string | null
    getMtu(): number
    getNumMacBlacklistItems(): number
    /**
     * Returns the number of s390-specific options that should be set for this
     * device when it is activated.  This can be used to retrieve each s390
     * option individually using nm_setting_wired_get_s390_option().
     * @returns the number of s390-specific device options
     */
    getNumS390Options(): number
    getPort(): string | null
    /**
     * Returns the s390 device type this connection should apply to.  Will be one
     * of 'qeth', 'lcs', or 'ctc'.
     * @returns the s390 device type
     */
    getS390Nettype(): string | null
    /**
     * Given an index, return the value of the s390 option at that index.  indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_wired_add_s390_option() and nm_setting_wired_remove_s390_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_wired_get_num_s390_options() - 1
     * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
     */
    getS390Option(idx: number): [ /* returnType */ boolean, /* outKey */ string | null, /* outValue */ string | null ]
    /**
     * Returns the value associated with the s390-specific option specified by
     * `key,` if it exists.
     * @param key the key for which to retrieve the value
     * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
     */
    getS390OptionByKey(key: string | null): string | null
    /**
     * Return the list of s390 subchannels that identify the device that this
     * connection is applicable to.  The connection should only be used in
     * conjunction with that device.
     * @returns #GPtrArray of strings, each specifying one subchannel the s390 device uses to communicate to the host.
     */
    getS390Subchannels(): string[]
    getSpeed(): number
    /**
     * Returns a list of valid s390 options.
     * @returns a %NULL-terminated array of strings of valid s390 options.
     */
    getValidS390Options(): string[]
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    removeMacBlacklistItem(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
     */
    removeMacBlacklistItemByValue(mac: string | null): boolean
    /**
     * Remove the s390-specific option referenced by `key` from the internal option
     * list.
     * @param key key name for the option to remove
     * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
     */
    removeS390Option(key: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingWired

    connect(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-negotiate", ...args: any[]): void
    connect(sigName: "notify::duplex", callback: (...args: any[]) => void): number
    on(sigName: "notify::duplex", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duplex", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duplex", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): number
    on(sigName: "notify::s390-nettype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::s390-nettype", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::s390-nettype", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingWired extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWired

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingWired

    constructor(config?: SettingWired.ConstructorProperties) 
    /**
     * Creates a new #NMSettingWired object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWired object
     */
    constructor() 
    /**
     * Creates a new #NMSettingWired object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWired object
     */
    static new(): SettingWired
    _init(config?: SettingWired.ConstructorProperties): void
}

export module SettingWireless {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingWireless

        /**
         * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
         * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
         * to the specific band, i.e. if "a" is specified, the device will not
         * associate with the same network in the 2.4GHz band even if the network's
         * settings are compatible.  This setting depends on specific driver
         * capability and may not work with all drivers.
         */
        band?: string | null
        /**
         * Wireless channel to use for the Wi-Fi connection.  The device will only
         * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
         * channel.  Because channel numbers overlap between bands, this property
         * also requires the "band" property to be set.
         */
        channel?: number | null
        /**
         * If %TRUE, indicates this network is a non-broadcasting network that hides
         * its SSID.  In this case various workarounds may take place, such as
         * probe-scanning the SSID for more reliable network discovery.  However,
         * these workarounds expose inherent insecurities with hidden SSID networks,
         * and thus hidden SSID networks should be used with caution.
         */
        hidden?: boolean | null
        /**
         * Wi-Fi network mode; one of "infrastructure", "adhoc" or "ap".  If blank,
         * infrastructure is assumed.
         */
        mode?: string | null
        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple Ethernet frames.
         */
        mtu?: number | null
        /**
         * If set to %FALSE, Wi-Fi power saving behavior is disabled.  If set to
         * %TRUE, Wi-Fi power saving behavior is enabled.  All other values are
         * reserved.  Note that even though only boolean values are allowed, the
         * property type is an unsigned integer to allow for future expansion.
         */
        powersave?: number | null
        /**
         * If non-zero, directs the device to only use the specified bitrate for
         * communication with the access point.  Units are in Kb/s, ie 5500 = 5.5
         * Mbit/s.  This property is highly driver dependent and not all devices
         * support setting a static bitrate.
         */
        rate?: number | null
        /**
         * If the wireless connection has any security restrictions, like 802.1x,
         * WEP, or WPA, set this property to
         * %NM_SETTING_WIRELESS_SECURITY_SETTING_NAME and ensure the connection
         * contains a valid #NMSettingWirelessSecurity setting.
         */
        security?: string | null
        /**
         * If non-zero, directs the device to use the specified transmit power.
         * Units are dBm.  This property is highly driver dependent and not all
         * devices support setting a static transmit power.
         */
        txPower?: number | null
    }

}

export interface SettingWireless {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWireless

    /**
     * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
     * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
     * to the specific band, i.e. if "a" is specified, the device will not
     * associate with the same network in the 2.4GHz band even if the network's
     * settings are compatible.  This setting depends on specific driver
     * capability and may not work with all drivers.
     */
    band: string | null
    /**
     * Wireless channel to use for the Wi-Fi connection.  The device will only
     * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
     * channel.  Because channel numbers overlap between bands, this property
     * also requires the "band" property to be set.
     */
    channel: number
    /**
     * If %TRUE, indicates this network is a non-broadcasting network that hides
     * its SSID.  In this case various workarounds may take place, such as
     * probe-scanning the SSID for more reliable network discovery.  However,
     * these workarounds expose inherent insecurities with hidden SSID networks,
     * and thus hidden SSID networks should be used with caution.
     */
    hidden: boolean
    /**
     * Wi-Fi network mode; one of "infrastructure", "adhoc" or "ap".  If blank,
     * infrastructure is assumed.
     */
    mode: string | null
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu: number
    /**
     * If set to %FALSE, Wi-Fi power saving behavior is disabled.  If set to
     * %TRUE, Wi-Fi power saving behavior is enabled.  All other values are
     * reserved.  Note that even though only boolean values are allowed, the
     * property type is an unsigned integer to allow for future expansion.
     */
    powersave: number
    /**
     * If non-zero, directs the device to only use the specified bitrate for
     * communication with the access point.  Units are in Kb/s, ie 5500 = 5.5
     * Mbit/s.  This property is highly driver dependent and not all devices
     * support setting a static bitrate.
     */
    rate: number
    /**
     * If the wireless connection has any security restrictions, like 802.1x,
     * WEP, or WPA, set this property to
     * %NM_SETTING_WIRELESS_SECURITY_SETTING_NAME and ensure the connection
     * contains a valid #NMSettingWirelessSecurity setting.
     */
    security: string | null
    /**
     * If non-zero, directs the device to use the specified transmit power.
     * Units are dBm.  This property is highly driver dependent and not all
     * devices support setting a static transmit power.
     */
    txPower: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWireless

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingWireless

    /**
     * Adds a new MAC address to the #NMSettingWireless:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
     */
    addMacBlacklistItem(mac: string | null): boolean
    /**
     * Adds a new Wi-Fi AP's BSSID to the previously seen BSSID list of the setting.
     * NetworkManager now tracks previously seen BSSIDs internally so this function
     * no longer has much use. Actually, changes you make using this function will
     * not be preserved.
     * @param bssid the new BSSID to add to the list
     * @returns %TRUE if @bssid was already known, %FALSE if not
     */
    addSeenBssid(bssid: string | null): boolean
    /**
     * Given a #NMSettingWireless and an optional #NMSettingWirelessSecurity,
     * determine if the configuration given by the settings is compatible with
     * the security of an access point using that access point's capability flags
     * and mode.  Useful for clients that wish to filter a set of connections
     * against a set of access points and determine which connections are
     * compatible with which access points.
     * @param sWirelessSec a #NMSettingWirelessSecurity or %NULL
     * @param apFlags the %NM80211ApFlags of the given access point
     * @param apWpa the %NM80211ApSecurityFlags of the given access point's WPA capabilities
     * @param apRsn the %NM80211ApSecurityFlags of the given access point's WPA2/RSN capabilities
     * @param apMode the 802.11 mode of the AP, either Ad-Hoc or Infrastructure
     * @returns %TRUE if the given settings are compatible with the access point's security flags and mode, %FALSE if they are not.
     */
    apSecurityCompatible(sWirelessSec: SettingWirelessSecurity, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags, apMode: TODO_80211Mode): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clearMacBlacklistItems(): void
    getBand(): string | null
    getBssid(): number[]
    getChannel(): number
    getClonedMacAddress(): number[]
    getHidden(): boolean
    getMacAddress(): number[]
    getMacAddressBlacklist(): GLib.SList[]
    getMacBlacklistItem(idx: number): string | null
    getMode(): string | null
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumSeenBssids(): number
    getPowersave(): number
    getRate(): number
    getSecurity(): string | null
    getSeenBssid(i: number): string | null
    getSsid(): number[]
    getTxPower(): number
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    removeMacBlacklistItem(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
     */
    removeMacBlacklistItemByValue(mac: string | null): boolean

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingWireless

    connect(sigName: "notify::band", callback: (...args: any[]) => void): number
    on(sigName: "notify::band", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::band", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::band", ...args: any[]): void
    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::hidden", callback: (...args: any[]) => void): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hidden", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::powersave", callback: (...args: any[]) => void): number
    on(sigName: "notify::powersave", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::powersave", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::powersave", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::security", callback: (...args: any[]) => void): number
    on(sigName: "notify::security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::security", ...args: any[]): void
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
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingWireless extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWireless

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingWireless

    constructor(config?: SettingWireless.ConstructorProperties) 
    /**
     * Creates a new #NMSettingWireless object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWireless object
     */
    constructor() 
    /**
     * Creates a new #NMSettingWireless object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWireless object
     */
    static new(): SettingWireless
    _init(config?: SettingWireless.ConstructorProperties): void
}

export module SettingWirelessSecurity {

    // Constructor properties interface

    export interface ConstructorProperties extends Setting.ConstructorProperties {

        // Own constructor properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

        /**
         * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
         * 802.11 authentication algorithm required by the AP here.  One of "open"
         * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
         * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
         * "leap-username" and "leap-password" properties must be specified.
         */
        authAlg?: string | null
        /**
         * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
         * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
         * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
         * any Wi-Fi connection that uses security.
         */
        keyMgmt?: string | null
        /**
         * The login password for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        leapPassword?: string | null
        /**
         * Flags indicating how to handle the
         * #NMSettingWirelessSecurity:leap-password property.
         */
        leapPasswordFlags?: number | null
        /**
         * The login username for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        leapUsername?: string | null
        /**
         * Pre-Shared-Key for WPA networks.  If the key is 64-characters long, it
         * must contain only hexadecimal characters and is interpreted as a
         * hexadecimal WPA key.  Otherwise, the key must be between 8 and 63 ASCII
         * characters (as specified in the 802.11i standard) and is interpreted as a
         * WPA passphrase, and is hashed to derive the actual WPA-PSK used when
         * connecting to the Wi-Fi network.
         */
        psk?: string | null
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
         * property.
         */
        pskFlags?: number | null
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
         * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
         * and #NMSettingWirelessSecurity:wep-key3 properties.
         */
        wepKeyFlags?: number | null
        /**
         * Controls the interpretation of WEP keys.  Allowed values are
         * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
         * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
         * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
         * as a string and will be hashed using the de-facto MD5 method to derive
         * the actual WEP key.
         */
        wepKeyType?: number | null
        /**
         * Index 0 WEP key.  This is the WEP key used in most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        wepKey0?: string | null
        /**
         * Index 1 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        wepKey1?: string | null
        /**
         * Index 2 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        wepKey2?: string | null
        /**
         * Index 3 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        wepKey3?: string | null
        /**
         * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
         * index is used by the AP, put that WEP key index here.  Valid values are 0
         * (default key) through 3.  Note that some consumer access points (like the
         * Linksys WRT54G) number the keys 1 - 4.
         */
        wepTxKeyidx?: number | null
    }

}

export interface SettingWirelessSecurity {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
     * 802.11 authentication algorithm required by the AP here.  One of "open"
     * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
     * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
     * "leap-username" and "leap-password" properties must be specified.
     */
    authAlg: string | null
    /**
     * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
     * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
     * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
     * any Wi-Fi connection that uses security.
     */
    keyMgmt: string | null
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapPassword: string | null
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leapPasswordFlags: number
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapUsername: string | null
    /**
     * Pre-Shared-Key for WPA networks.  If the key is 64-characters long, it
     * must contain only hexadecimal characters and is interpreted as a
     * hexadecimal WPA key.  Otherwise, the key must be between 8 and 63 ASCII
     * characters (as specified in the 802.11i standard) and is interpreted as a
     * WPA passphrase, and is hashed to derive the actual WPA-PSK used when
     * connecting to the Wi-Fi network.
     */
    psk: string | null
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
     * property.
     */
    pskFlags: number
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wepKeyFlags: number
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wepKeyType: number
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey0: string | null
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey1: string | null
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey2: string | null
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey3: string | null
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wepTxKeyidx: number
    __gtype__: number

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    parent: Setting & GObject.Object

    // Owm methods of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    /**
     * Adds an encryption algorithm to the list of allowed groupwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param group the encryption algorithm to add, one of "wep40", "wep104", "tkip", or "ccmp"
     * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
     */
    addGroup(group: string | null): boolean
    /**
     * Adds an encryption algorithm to the list of allowed pairwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param pairwise the encryption algorithm to add, one of "tkip" or "ccmp"
     * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
     */
    addPairwise(pairwise: string | null): boolean
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
    addProto(proto: string | null): boolean
    /**
     * Removes all algorithms from the allowed list.  If there are no algorithms
     * specified then all groupwise encryption algorithms are allowed.
     */
    clearGroups(): void
    /**
     * Removes all algorithms from the allowed list.  If there are no algorithms
     * specified then all pairwise encryption algorithms are allowed.
     */
    clearPairwise(): void
    /**
     * Removes all protocols from the allowed list.  If there are no protocols
     * specified then all protocols are allowed.
     */
    clearProtos(): void
    getAuthAlg(): string | null
    /**
     * Returns the allowed groupwise encryption algorithm from allowed algorithm
     * list.
     * @param i index of an item in the allowed groupwise encryption algorithm list
     * @returns the groupwise encryption algorithm at index @i
     */
    getGroup(i: number): string | null
    getKeyMgmt(): string | null
    getLeapPassword(): string | null
    getLeapPasswordFlags(): SettingSecretFlags
    getLeapUsername(): string | null
    getNumGroups(): number
    getNumPairwise(): number
    getNumProtos(): number
    /**
     * Returns the allowed pairwise encryption algorithm from allowed algorithm
     * list.
     * @param i index of an item in the allowed pairwise encryption algorithm list
     * @returns the pairwise encryption algorithm at index @i
     */
    getPairwise(i: number): string | null
    getProto(i: number): string | null
    getPsk(): string | null
    getPskFlags(): SettingSecretFlags
    getWepKey(idx: number): string | null
    getWepKeyFlags(): SettingSecretFlags
    getWepKeyType(): WepKeyType
    getWepTxKeyidx(): number
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     * @param i the index of an item in the allowed groupwise encryption algorithm list
     */
    removeGroup(i: number): void
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     * @param group the encryption algorithm to remove, one of "wep40", "wep104", "tkip", or "ccmp"
     * @returns %TRUE if the algorithm was found and removed; %FALSE if it was not.
     */
    removeGroupByValue(group: string | null): boolean
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     * @param i the index of an item in the allowed pairwise encryption algorithm list
     */
    removePairwise(i: number): void
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     * @param pairwise the encryption algorithm to remove, one of "tkip" or "ccmp"
     * @returns %TRUE if the encryption algorithm was found and removed; %FALSE if it was not.
     */
    removePairwiseByValue(pairwise: string | null): boolean
    /**
     * Removes a protocol from the allowed protocol list.
     * @param i index of the protocol to remove
     */
    removeProto(i: number): void
    /**
     * Removes a protocol from the allowed protocol list.
     * @param proto the protocol to remove, one of "wpa" or "rsn"
     * @returns %TRUE if the protocol was found and removed; %FALSE if it was not.
     */
    removeProtoByValue(proto: string | null): boolean
    /**
     * Sets a WEP key in the given index.
     * @param idx the index of the key (0..3 inclusive)
     * @param key the WEP key as a string, in either hexadecimal, ASCII, or passphrase form as determiend by the value of the #NMSettingWirelessSecurity:wep-key-type property.
     */
    setWepKey(idx: number, key: string | null): void

    // Class property signals of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    connect(sigName: "notify::auth-alg", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-alg", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-alg", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-alg", ...args: any[]): void
    connect(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-mgmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-mgmt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-mgmt", ...args: any[]): void
    connect(sigName: "notify::leap-password", callback: (...args: any[]) => void): number
    on(sigName: "notify::leap-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::leap-password", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::leap-password", ...args: any[]): void
    connect(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::leap-password-flags", ...args: any[]): void
    connect(sigName: "notify::leap-username", callback: (...args: any[]) => void): number
    on(sigName: "notify::leap-username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::leap-username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::leap-username", ...args: any[]): void
    connect(sigName: "notify::psk", callback: (...args: any[]) => void): number
    on(sigName: "notify::psk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::psk", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::psk", ...args: any[]): void
    connect(sigName: "notify::psk-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::psk-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::psk-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::psk-flags", ...args: any[]): void
    connect(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key-flags", ...args: any[]): void
    connect(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key-type", ...args: any[]): void
    connect(sigName: "notify::wep-key0", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key0", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key0", ...args: any[]): void
    connect(sigName: "notify::wep-key1", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key1", ...args: any[]): void
    connect(sigName: "notify::wep-key2", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key2", ...args: any[]): void
    connect(sigName: "notify::wep-key3", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-key3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-key3", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-key3", ...args: any[]): void
    connect(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): number
    on(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wep-tx-keyidx", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SettingWirelessSecurity extends Setting {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity

    constructor(config?: SettingWirelessSecurity.ConstructorProperties) 
    /**
     * Creates a new #NMSettingWirelessSecurity object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWirelessSecurity object
     */
    constructor() 
    /**
     * Creates a new #NMSettingWirelessSecurity object with default values.
     * @constructor 
     * @returns the new empty #NMSettingWirelessSecurity object
     */
    static new(): SettingWirelessSecurity
    _init(config?: SettingWirelessSecurity.ConstructorProperties): void
}

export interface ConnectionClass {

    // Own fields of NetworkManager-1.0.NetworkManager.ConnectionClass

    parent: GObject.ObjectClass
    secretsUpdated: (connection: Connection, setting: string | null) => void
}

export abstract class ConnectionClass {

    // Own properties of NetworkManager-1.0.NetworkManager.ConnectionClass

    static name: string
}

export interface IP4Address {

    // Owm methods of NetworkManager-1.0.NetworkManager.IP4Address

    /**
     * Determines if two #NMIP4Address objects contain the same values.
     * @param other the #NMIP4Address to compare `address` to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    compare(other: IP4Address): boolean
    /**
     * Copies a given #NMIP4Address object and returns the copy.
     * @returns the copy of the given #NMIP4Address copy
     */
    dup(): IP4Address
    /**
     * Gets the IPv4 address property of this address object.
     * @returns the IPv4 address in network byte order
     */
    getAddress(): number
    /**
     * Gets the IPv4 default gateway property of this address object.
     * @returns the IPv4 gateway address in network byte order
     */
    getGateway(): number
    /**
     * Gets the IPv4 address prefix (ie "24" or "30" etc) property of this address
     * object.
     * @returns the IPv4 address prefix
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 address property of this object.
     * @param addr the IPv4 address in network byte order
     */
    setAddress(addr: number): void
    /**
     * Sets the IPv4 default gateway property of this address object.
     * @param gateway the IPv4 default gateway in network byte order
     */
    setGateway(gateway: number): void
    /**
     * Sets the IPv4 address prefix.
     * @param prefix the address prefix, a number between 1 and 32 inclusive
     */
    setPrefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

export class IP4Address {

    // Own properties of NetworkManager-1.0.NetworkManager.IP4Address

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.IP4Address

    /**
     * Creates and returns a new #NMIP4Address object.
     * @constructor 
     * @returns the new empty #NMIP4Address object
     */
    constructor() 
    /**
     * Creates and returns a new #NMIP4Address object.
     * @constructor 
     * @returns the new empty #NMIP4Address object
     */
    static new(): IP4Address
}

export interface IP4Route {

    // Owm methods of NetworkManager-1.0.NetworkManager.IP4Route

    /**
     * Determines if two #NMIP4Route objects contain the same values.
     * @param other the #NMIP4Route to compare `route` to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    compare(other: IP4Route): boolean
    /**
     * Copies a given #NMIP4Route object and returns the copy.
     * @returns the copy of the given #NMIP4Route copy
     */
    dup(): IP4Route
    /**
     * Gets the IPv4 destination address property of this route object.
     * @returns the IPv4 address in network byte order
     */
    getDest(): number
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @returns the route metric
     */
    getMetric(): number
    /**
     * Gets the IPv4 address of the next hop of this route.
     * @returns the IPv4 address in network byte order
     */
    getNextHop(): number
    /**
     * Gets the IPv4 prefix (ie "24" or "30" etc) of this route.
     * @returns the IPv4 prefix
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 destination address property of this route object.
     * @param dest the destination address in network byte order
     */
    setDest(dest: number): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @param metric the route metric
     */
    setMetric(metric: number): void
    /**
     * Sets the IPv4 address of the next hop of this route.
     * @param nextHop the IPv4 address of the next hop in network byte order
     */
    setNextHop(nextHop: number): void
    /**
     * Sets the IPv4 prefix of this route.
     * @param prefix the prefix, a number between 1 and 32 inclusive
     */
    setPrefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

export class IP4Route {

    // Own properties of NetworkManager-1.0.NetworkManager.IP4Route

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.IP4Route

    /**
     * Creates and returns a new #NMIP4Route object.
     * @constructor 
     * @returns the new empty #NMIP4Route object
     */
    constructor() 
    /**
     * Creates and returns a new #NMIP4Route object.
     * @constructor 
     * @returns the new empty #NMIP4Route object
     */
    static new(): IP4Route
}

export interface IP6Address {

    // Owm methods of NetworkManager-1.0.NetworkManager.IP6Address

    /**
     * Determines if two #NMIP6Address objects contain the same values.
     * @param other the #NMIP6Address to compare `address` to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    compare(other: IP6Address): boolean
    /**
     * Copies a given #NMIP6Address object and returns the copy.
     * @returns the copy of the given #NMIP6Address copy
     */
    dup(): IP6Address
    /**
     * Gets the IPv6 address property of this address object.
     * @returns           the IPv6 address
     */
    getAddress(): number[]
    /**
     * Gets the IPv6 default gateway property of this address object.
     * @returns           the IPv6 gateway address
     */
    getGateway(): number[]
    /**
     * Gets the IPv6 address prefix property of this address object.
     * @returns the IPv6 address prefix
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 address property of this object.
     * @param addr the IPv6 address
     */
    setAddress(addr: any | null): void
    /**
     * Sets the IPv6 default gateway property of this address object.
     * @param gateway the IPv6 default gateway
     */
    setGateway(gateway: any | null): void
    /**
     * Sets the IPv6 address prefix.
     * @param prefix the address prefix, a number between 0 and 128 inclusive
     */
    setPrefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

export class IP6Address {

    // Own properties of NetworkManager-1.0.NetworkManager.IP6Address

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.IP6Address

    /**
     * Creates and returns a new #NMIP6Address object.
     * @constructor 
     * @returns the new empty #NMIP6Address object
     */
    constructor() 
    /**
     * Creates and returns a new #NMIP6Address object.
     * @constructor 
     * @returns the new empty #NMIP6Address object
     */
    static new(): IP6Address
}

export interface IP6Route {

    // Owm methods of NetworkManager-1.0.NetworkManager.IP6Route

    /**
     * Determines if two #NMIP6Route objects contain the same values.
     * @param other the #NMIP6Route to compare `route` to.
     * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
     */
    compare(other: IP6Route): boolean
    /**
     * Copies a given #NMIP6Route object and returns the copy.
     * @returns the copy of the given #NMIP6Route copy
     */
    dup(): IP6Route
    /**
     * Gets the IPv6 destination address property of this route object.
     * @returns           the IPv6 address of destination
     */
    getDest(): number[]
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @returns the route metric
     */
    getMetric(): number
    /**
     * Gets the IPv6 address of the next hop of this route.
     * @returns           the IPv6 address of next hop
     */
    getNextHop(): number[]
    /**
     * Gets the IPv6 prefix (ie "32" or "64" etc) of this route.
     * @returns the IPv6 prefix
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 destination address property of this route object.
     * @param dest the destination address
     */
    setDest(dest: any | null): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @param metric the route metric
     */
    setMetric(metric: number): void
    /**
     * Sets the IPv6 address of the next hop of this route.
     * @param nextHop the IPv6 address of the next hop
     */
    setNextHop(nextHop: any | null): void
    /**
     * Sets the IPv6 prefix of this route.
     * @param prefix the prefix, a number between 1 and 128 inclusive
     */
    setPrefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
}

export class IP6Route {

    // Own properties of NetworkManager-1.0.NetworkManager.IP6Route

    static name: string

    // Constructors of NetworkManager-1.0.NetworkManager.IP6Route

    /**
     * Creates and returns a new #NMIP6Route object.
     * @constructor 
     * @returns the new empty #NMIP6Route object
     */
    constructor() 
    /**
     * Creates and returns a new #NMIP6Route object.
     * @constructor 
     * @returns the new empty #NMIP6Route object
     */
    static new(): IP6Route
}

export interface Setting8021xClass {

    // Own fields of NetworkManager-1.0.NetworkManager.Setting8021xClass

    parent: SettingClass
}

export abstract class Setting8021xClass {

    // Own properties of NetworkManager-1.0.NetworkManager.Setting8021xClass

    static name: string
}

export interface SettingAdslClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingAdslClass

    parent: SettingClass
}

export abstract class SettingAdslClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingAdslClass

    static name: string
}

export interface SettingBluetoothClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBluetoothClass

    parent: SettingClass
}

export abstract class SettingBluetoothClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBluetoothClass

    static name: string
}

export interface SettingBondClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBondClass

    parent: SettingClass
}

export abstract class SettingBondClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBondClass

    static name: string
}

export interface SettingBridgeClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBridgeClass

    parent: SettingClass
}

export abstract class SettingBridgeClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridgeClass

    static name: string
}

export interface SettingBridgePortClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingBridgePortClass

    parent: SettingClass
}

export abstract class SettingBridgePortClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingBridgePortClass

    static name: string
}

export interface SettingCdmaClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingCdmaClass

    parent: SettingClass
}

export abstract class SettingCdmaClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingCdmaClass

    static name: string
}

export interface SettingClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingClass

    parent: GObject.ObjectClass
    needSecrets: (setting: Setting) => string[]
    updateOneSecret: (setting: Setting, key: string | null, value: any) => number
    getSecretFlags: (setting: Setting, secretName: string | null, verifySecret: boolean, outFlags: SettingSecretFlags) => boolean
    setSecretFlags: (setting: Setting, secretName: string | null, verifySecret: boolean, flags: SettingSecretFlags) => boolean
    compareProperty: (setting: Setting, other: Setting, propSpec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    getVirtualIfaceName: (setting: Setting) => string | null
}

export abstract class SettingClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingClass

    static name: string
}

export interface SettingConnectionClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingConnectionClass

    parent: SettingClass
}

export abstract class SettingConnectionClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingConnectionClass

    static name: string
}

export interface SettingDcbClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingDcbClass

    parent: SettingClass
}

export abstract class SettingDcbClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingDcbClass

    static name: string
}

export interface SettingGenericClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingGenericClass

    parent: SettingClass
}

export abstract class SettingGenericClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGenericClass

    static name: string
}

export interface SettingGsmClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingGsmClass

    parent: SettingClass
}

export abstract class SettingGsmClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingGsmClass

    static name: string
}

export interface SettingIP4ConfigClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass

    parent: SettingClass
}

export abstract class SettingIP4ConfigClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass

    static name: string
}

export interface SettingIP6ConfigClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass

    parent: SettingClass
}

export abstract class SettingIP6ConfigClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass

    static name: string
}

export interface SettingInfinibandClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingInfinibandClass

    parent: SettingClass
}

export abstract class SettingInfinibandClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingInfinibandClass

    static name: string
}

export interface SettingOlpcMeshClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass

    parent: SettingClass
}

export abstract class SettingOlpcMeshClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass

    static name: string
}

export interface SettingPPPClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingPPPClass

    parent: SettingClass
}

export abstract class SettingPPPClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPPClass

    static name: string
}

export interface SettingPPPOEClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingPPPOEClass

    parent: SettingClass
}

export abstract class SettingPPPOEClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingPPPOEClass

    static name: string
}

export interface SettingSerialClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingSerialClass

    parent: SettingClass
}

export abstract class SettingSerialClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingSerialClass

    static name: string
}

export interface SettingTeamClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingTeamClass

    parent: SettingClass
}

export abstract class SettingTeamClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeamClass

    static name: string
}

export interface SettingTeamPortClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingTeamPortClass

    parent: SettingClass
}

export abstract class SettingTeamPortClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingTeamPortClass

    static name: string
}

export interface SettingVPNClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingVPNClass

    parent: SettingClass
}

export abstract class SettingVPNClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVPNClass

    static name: string
}

export interface SettingVlanClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingVlanClass

    parent: SettingClass
}

export abstract class SettingVlanClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingVlanClass

    static name: string
}

export interface SettingWimaxClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWimaxClass

    parent: SettingClass
}

export abstract class SettingWimaxClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWimaxClass

    static name: string
}

export interface SettingWiredClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWiredClass

    parent: SettingClass
}

export abstract class SettingWiredClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWiredClass

    static name: string
}

export interface SettingWirelessClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWirelessClass

    parent: SettingClass
}

export abstract class SettingWirelessClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWirelessClass

    static name: string
}

export interface SettingWirelessSecurityClass {

    // Own fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass

    parent: SettingClass
}

export abstract class SettingWirelessSecurityClass {

    // Own properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass

    static name: string
}

// END