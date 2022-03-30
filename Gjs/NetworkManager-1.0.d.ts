/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * NetworkManager-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type DBusGLib from './DBusGLib-1.0';

export namespace NetworkManager {

/**
 * Indicates the 802.11 mode an access point or device is currently in.
 */
enum TODO_80211Mode {
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
 * Describes errors that may result from operations involving a #NMConnection.
 */
enum ConnectionError {
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
enum ConnectivityState {
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
    LAST,
}
/**
 * #NMDeviceType values indicate the type of hardware represented by
 * an #NMDevice.
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
}
enum Setting8021xError {
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
enum SettingAdslError {
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
enum SettingBluetoothError {
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
enum SettingBondError {
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
enum SettingBridgeError {
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
enum SettingBridgePortError {
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
enum SettingCdmaError {
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
enum SettingConnectionError {
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
enum SettingDcbError {
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
 * Describes errors that may result from operations involving a #NMSetting.
 */
enum SettingError {
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
enum SettingGenericError {
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
enum SettingGsmError {
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
enum SettingGsmNetworkBand {
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
enum SettingGsmNetworkType {
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
enum SettingHashFlags {
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
enum SettingIP4ConfigError {
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
enum SettingIP6ConfigError {
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
enum SettingInfinibandError {
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
enum SettingOlpcMeshError {
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
enum SettingPPPError {
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
enum SettingPPPOEError {
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
enum SettingSerialError {
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
enum SettingTeamError {
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
enum SettingTeamPortError {
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
enum SettingVlanError {
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
enum SettingVpnError {
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
enum SettingWimaxError {
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
enum SettingWiredError {
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
enum SettingWirelessError {
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
enum SettingWirelessSecurityError {
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
enum State {
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
}
/**
 * VPN connection states
 */
enum VPNConnectionState {
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
enum VPNConnectionStateReason {
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
enum VPNPluginFailure {
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
enum VPNServiceState {
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
enum VlanFlags {
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
 */
enum TODO_80211ApFlags {
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
 */
enum TODO_80211ApSecurityFlags {
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
}
const CONNECTION_CHANGED: string
const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string
const CONNECTION_PATH: string
const CONNECTION_SECRETS_CLEARED: string
const CONNECTION_SECRETS_UPDATED: string
const DBUS_IFACE_SETTINGS: string
const DBUS_IFACE_SETTINGS_CONNECTION: string
const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string
const DBUS_INTERFACE: string
const DBUS_INTERFACE_VPN: string
const DBUS_INTERFACE_VPN_CONNECTION: string
const DBUS_INVALID_VPN_CONNECTION: string
const DBUS_NO_ACTIVE_VPN_CONNECTION: string
const DBUS_NO_VPN_CONNECTIONS: string
const DBUS_PATH: string
const DBUS_PATH_AGENT_MANAGER: string
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
const SETTING_802_1X_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_ANONYMOUS_IDENTITY: string
const SETTING_802_1X_CA_CERT: string
const SETTING_802_1X_CA_PATH: string
const SETTING_802_1X_CLIENT_CERT: string
const SETTING_802_1X_EAP: string
const SETTING_802_1X_IDENTITY: string
const SETTING_802_1X_PAC_FILE: string
const SETTING_802_1X_PASSWORD: string
const SETTING_802_1X_PASSWORD_FLAGS: string
const SETTING_802_1X_PASSWORD_RAW: string
const SETTING_802_1X_PASSWORD_RAW_FLAGS: string
const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string
const SETTING_802_1X_PHASE1_PEAPLABEL: string
const SETTING_802_1X_PHASE1_PEAPVER: string
const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string
const SETTING_802_1X_PHASE2_AUTH: string
const SETTING_802_1X_PHASE2_AUTHEAP: string
const SETTING_802_1X_PHASE2_CA_CERT: string
const SETTING_802_1X_PHASE2_CA_PATH: string
const SETTING_802_1X_PHASE2_CLIENT_CERT: string
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
 * Connection type describing a connection to devices that support the Bluetooth
 * NAP (Network Access Point) protocol, which accepts connections via PANU.
 */
const SETTING_BLUETOOTH_TYPE_PANU: string
const SETTING_BOND_INTERFACE_NAME: string
const SETTING_BOND_OPTIONS: string
const SETTING_BOND_OPTION_AD_SELECT: string
const SETTING_BOND_OPTION_ARP_INTERVAL: string
const SETTING_BOND_OPTION_ARP_IP_TARGET: string
const SETTING_BOND_OPTION_ARP_VALIDATE: string
const SETTING_BOND_OPTION_DOWNDELAY: string
const SETTING_BOND_OPTION_FAIL_OVER_MAC: string
const SETTING_BOND_OPTION_LACP_RATE: string
const SETTING_BOND_OPTION_MIIMON: string
const SETTING_BOND_OPTION_MODE: string
const SETTING_BOND_OPTION_PRIMARY: string
const SETTING_BOND_OPTION_PRIMARY_RESELECT: string
const SETTING_BOND_OPTION_RESEND_IGMP: string
const SETTING_BOND_OPTION_UPDELAY: string
const SETTING_BOND_OPTION_USE_CARRIER: string
const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string
const SETTING_BOND_SETTING_NAME: string
const SETTING_BRIDGE_AGEING_TIME: string
const SETTING_BRIDGE_FORWARD_DELAY: string
const SETTING_BRIDGE_HELLO_TIME: string
const SETTING_BRIDGE_INTERFACE_NAME: string
const SETTING_BRIDGE_MAC_ADDRESS: string
const SETTING_BRIDGE_MAX_AGE: string
const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string
const SETTING_BRIDGE_PORT_PATH_COST: string
const SETTING_BRIDGE_PORT_PRIORITY: string
const SETTING_BRIDGE_PORT_SETTING_NAME: string
const SETTING_BRIDGE_PRIORITY: string
const SETTING_BRIDGE_SETTING_NAME: string
const SETTING_BRIDGE_STP: string
const SETTING_CDMA_NUMBER: string
const SETTING_CDMA_PASSWORD: string
const SETTING_CDMA_PASSWORD_FLAGS: string
const SETTING_CDMA_SETTING_NAME: string
const SETTING_CDMA_USERNAME: string
const SETTING_CONNECTION_AUTOCONNECT: string
const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string
const SETTING_CONNECTION_ID: string
const SETTING_CONNECTION_INTERFACE_NAME: string
const SETTING_CONNECTION_MASTER: string
const SETTING_CONNECTION_PERMISSIONS: string
const SETTING_CONNECTION_READ_ONLY: string
const SETTING_CONNECTION_SECONDARIES: string
const SETTING_CONNECTION_SETTING_NAME: string
const SETTING_CONNECTION_SLAVE_TYPE: string
const SETTING_CONNECTION_TIMESTAMP: string
const SETTING_CONNECTION_TYPE: string
const SETTING_CONNECTION_UUID: string
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
const SETTING_GENERIC_SETTING_NAME: string
const SETTING_GSM_ALLOWED_BANDS: string
const SETTING_GSM_APN: string
/**
 * #NM_SETTING_GSM_BANDS_MAX macro indicate the maximal value that can be used
 * as the allowed frequency bands (#NMSettingGsm:allowed-bands property).
 */
const SETTING_GSM_BANDS_MAX: number
const SETTING_GSM_HOME_ONLY: string
const SETTING_GSM_NETWORK_ID: string
const SETTING_GSM_NETWORK_TYPE: string
const SETTING_GSM_NUMBER: string
const SETTING_GSM_PASSWORD: string
const SETTING_GSM_PASSWORD_FLAGS: string
const SETTING_GSM_PIN: string
const SETTING_GSM_PIN_FLAGS: string
const SETTING_GSM_SETTING_NAME: string
const SETTING_GSM_USERNAME: string
const SETTING_INFINIBAND_MAC_ADDRESS: string
const SETTING_INFINIBAND_MTU: string
const SETTING_INFINIBAND_PARENT: string
const SETTING_INFINIBAND_P_KEY: string
const SETTING_INFINIBAND_SETTING_NAME: string
const SETTING_INFINIBAND_TRANSPORT_MODE: string
const SETTING_IP4_CONFIG_ADDRESSES: string
const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string
const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string
const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string
const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string
const SETTING_IP4_CONFIG_DNS: string
const SETTING_IP4_CONFIG_DNS_SEARCH: string
const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string
const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string
const SETTING_IP4_CONFIG_MAY_FAIL: string
const SETTING_IP4_CONFIG_METHOD: string
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
const SETTING_IP4_CONFIG_NEVER_DEFAULT: string
const SETTING_IP4_CONFIG_ROUTES: string
const SETTING_IP4_CONFIG_ROUTE_METRIC: string
const SETTING_IP4_CONFIG_SETTING_NAME: string
const SETTING_IP6_CONFIG_ADDRESSES: string
const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string
const SETTING_IP6_CONFIG_DNS: string
const SETTING_IP6_CONFIG_DNS_SEARCH: string
const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string
const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string
const SETTING_IP6_CONFIG_IP6_PRIVACY: string
const SETTING_IP6_CONFIG_MAY_FAIL: string
const SETTING_IP6_CONFIG_METHOD: string
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
const SETTING_IP6_CONFIG_NEVER_DEFAULT: string
const SETTING_IP6_CONFIG_ROUTES: string
const SETTING_IP6_CONFIG_ROUTE_METRIC: string
const SETTING_IP6_CONFIG_SETTING_NAME: string
const SETTING_NAME: string
const SETTING_OLPC_MESH_CHANNEL: string
const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string
const SETTING_OLPC_MESH_SETTING_NAME: string
const SETTING_OLPC_MESH_SSID: string
const SETTING_PARAM_FUZZY_IGNORE: number
const SETTING_PARAM_REQUIRED: number
const SETTING_PARAM_SECRET: number
const SETTING_PARAM_SERIALIZE: number
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
const SETTING_SERIAL_BAUD: string
const SETTING_SERIAL_BITS: string
const SETTING_SERIAL_PARITY: string
const SETTING_SERIAL_SEND_DELAY: string
const SETTING_SERIAL_SETTING_NAME: string
const SETTING_SERIAL_STOPBITS: string
const SETTING_TEAM_CONFIG: string
const SETTING_TEAM_INTERFACE_NAME: string
const SETTING_TEAM_PORT_CONFIG: string
const SETTING_TEAM_PORT_SETTING_NAME: string
const SETTING_TEAM_SETTING_NAME: string
const SETTING_VLAN_EGRESS_PRIORITY_MAP: string
const SETTING_VLAN_FLAGS: string
const SETTING_VLAN_ID: string
const SETTING_VLAN_INGRESS_PRIORITY_MAP: string
const SETTING_VLAN_INTERFACE_NAME: string
const SETTING_VLAN_PARENT: string
const SETTING_VLAN_SETTING_NAME: string
const SETTING_VPN_DATA: string
const SETTING_VPN_PERSISTENT: string
const SETTING_VPN_SECRETS: string
const SETTING_VPN_SERVICE_TYPE: string
const SETTING_VPN_SETTING_NAME: string
const SETTING_VPN_USER_NAME: string
const SETTING_WIMAX_MAC_ADDRESS: string
const SETTING_WIMAX_NETWORK_NAME: string
const SETTING_WIMAX_SETTING_NAME: string
const SETTING_WIRED_AUTO_NEGOTIATE: string
const SETTING_WIRED_CLONED_MAC_ADDRESS: string
const SETTING_WIRED_DUPLEX: string
const SETTING_WIRED_MAC_ADDRESS: string
const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string
const SETTING_WIRED_MTU: string
const SETTING_WIRED_PORT: string
const SETTING_WIRED_S390_NETTYPE: string
const SETTING_WIRED_S390_OPTIONS: string
const SETTING_WIRED_S390_SUBCHANNELS: string
const SETTING_WIRED_SETTING_NAME: string
const SETTING_WIRED_SPEED: string
const SETTING_WIRELESS_BAND: string
const SETTING_WIRELESS_BSSID: string
const SETTING_WIRELESS_CHANNEL: string
const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string
const SETTING_WIRELESS_HIDDEN: string
const SETTING_WIRELESS_MAC_ADDRESS: string
const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string
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
const SETTING_WIRELESS_MTU: string
const SETTING_WIRELESS_POWERSAVE: string
const SETTING_WIRELESS_RATE: string
const SETTING_WIRELESS_SEC: string
const SETTING_WIRELESS_SECURITY_AUTH_ALG: string
const SETTING_WIRELESS_SECURITY_GROUP: string
const SETTING_WIRELESS_SECURITY_KEY_MGMT: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string
const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string
const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string
const SETTING_WIRELESS_SECURITY_PAIRWISE: string
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
const SETTING_WIRELESS_SEEN_BSSIDS: string
const SETTING_WIRELESS_SETTING_NAME: string
const SETTING_WIRELESS_SSID: string
const SETTING_WIRELESS_TX_POWER: string
/**
 * The maximum length of hardware addresses handled by NetworkManager itself,
 * nm_utils_hwaddr_len(), and nm_utils_hwaddr_aton().
 */
const UTILS_HWADDR_LEN_MAX: number
const VLAN_FLAGS_ALL: number
const VPN_DBUS_PLUGIN_INTERFACE: string
const VPN_DBUS_PLUGIN_PATH: string
const VPN_PLUGIN_CAN_PERSIST: string
const VPN_PLUGIN_CONFIG_BANNER: string
const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string
const VPN_PLUGIN_CONFIG_HAS_IP4: string
const VPN_PLUGIN_CONFIG_HAS_IP6: string
const VPN_PLUGIN_CONFIG_MTU: string
const VPN_PLUGIN_CONFIG_TUNDEV: string
const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string
const VPN_PLUGIN_IP4_CONFIG_DNS: string
const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string
const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string
const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string
const VPN_PLUGIN_IP4_CONFIG_MSS: string
const VPN_PLUGIN_IP4_CONFIG_NBNS: string
const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string
const VPN_PLUGIN_IP4_CONFIG_PREFIX: string
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
const VPN_PLUGIN_IP6_CONFIG_PTP: string
const VPN_PLUGIN_IP6_CONFIG_ROUTES: string
function connection_error_quark(): GLib.Quark
function setting_802_1x_error_quark(): GLib.Quark
function setting_adsl_error_quark(): GLib.Quark
function setting_bluetooth_error_quark(): GLib.Quark
function setting_bond_error_quark(): GLib.Quark
function setting_bridge_error_quark(): GLib.Quark
function setting_bridge_port_error_quark(): GLib.Quark
function setting_cdma_error_quark(): GLib.Quark
function setting_connection_error_quark(): GLib.Quark
function setting_dcb_error_quark(): GLib.Quark
function setting_error_quark(): GLib.Quark
function setting_generic_error_quark(): GLib.Quark
function setting_gsm_error_quark(): GLib.Quark
function setting_infiniband_error_quark(): GLib.Quark
function setting_ip4_config_error_quark(): GLib.Quark
function setting_ip6_config_error_quark(): GLib.Quark
function setting_olpc_mesh_error_quark(): GLib.Quark
function setting_ppp_error_quark(): GLib.Quark
function setting_pppoe_error_quark(): GLib.Quark
function setting_serial_error_quark(): GLib.Quark
function setting_team_error_quark(): GLib.Quark
function setting_team_port_error_quark(): GLib.Quark
function setting_vlan_error_quark(): GLib.Quark
function setting_vpn_error_quark(): GLib.Quark
function setting_wimax_error_quark(): GLib.Quark
function setting_wired_error_quark(): GLib.Quark
function setting_wireless_error_quark(): GLib.Quark
function setting_wireless_security_error_quark(): GLib.Quark
function utils_ap_mode_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities): boolean
function utils_bin2hexstr(bytes: string, len: number, final_len: number): string
function utils_check_virtual_device_compatibility(virtual_type: GObject.Type, other_type: GObject.Type): boolean
function utils_deinit(): void
function utils_escape_ssid(ssid: number, len: number): string
function utils_file_is_pkcs12(filename: string): boolean
function utils_file_search_in_paths(progname: string, try_first: string | null, paths: string | null, file_test_flags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
function utils_gvalue_hash_dup(hash: GLib.HashTable): GLib.HashTable
function utils_hex2byte(hex: string): number
function utils_hexstr2bin(hex: string, len: number): string
function utils_hwaddr_atoba(asc: string, type: number): Uint8Array
function utils_hwaddr_aton(asc: string, type: number, buffer?: object | null): number
function utils_hwaddr_aton_len(asc: string, buffer: object | null, length: number): number
function utils_hwaddr_len(type: number): number
function utils_hwaddr_ntoa(addr: object | null, type: number): string
function utils_hwaddr_ntoa_len(addr: object | null, length: number): string
function utils_hwaddr_type(len: number): number
function utils_hwaddr_valid(asc: string): boolean
function utils_iface_valid_name(name: string): boolean
function utils_init(): boolean
function utils_ip4_addresses_from_gvalue(value: any): IP4Address[]
function utils_ip4_addresses_to_gvalue(list: IP4Address[], value: any): void
function utils_ip4_get_default_prefix(ip: number): number
function utils_ip4_netmask_to_prefix(netmask: number): number
function utils_ip4_prefix_to_netmask(prefix: number): number
function utils_ip4_routes_from_gvalue(value: any): IP4Route[]
function utils_ip4_routes_to_gvalue(list: IP4Route[], value: any): void
function utils_ip6_addresses_from_gvalue(value: any): IP6Address[]
function utils_ip6_addresses_to_gvalue(list: IP6Address[], value: any): void
function utils_ip6_routes_from_gvalue(value: any): IP6Route[]
function utils_ip6_routes_to_gvalue(list: IP6Route[], value: any): void
function utils_is_empty_ssid(ssid: number, len: number): boolean
function utils_is_uuid(str: string): boolean
function utils_rsa_key_encrypt(data: Uint8Array, in_password?: string | null): [ /* returnType */ Uint8Array, /* out_password */ string | null ]
function utils_rsa_key_encrypt_aes(data: Uint8Array, in_password?: string | null): [ /* returnType */ Uint8Array, /* out_password */ string | null ]
function utils_same_ssid(ssid1: Uint8Array, ssid2: Uint8Array, ignore_trailing_null: boolean): boolean
function utils_security_valid(type: UtilsSecurityType, wifi_caps: DeviceWifiCapabilities, have_ap: boolean, adhoc: boolean, ap_flags: TODO_80211ApFlags, ap_wpa: TODO_80211ApSecurityFlags, ap_rsn: TODO_80211ApSecurityFlags): boolean
function utils_ssid_to_utf8(ssid: Uint8Array): string
function utils_uuid_generate(): string
function utils_uuid_generate_from_string(s: string): string
function utils_wep_key_valid(key: string, wep_type: WepKeyType): boolean
function utils_wifi_channel_to_freq(channel: number, band: string): number
function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number
function utils_wifi_freq_to_channel(freq: number): number
function utils_wifi_is_channel_valid(channel: number, band: string): boolean
function utils_wpa_psk_valid(psk: string): boolean
interface SettingClearSecretsWithFlagsFn {
    (setting: Setting, secret: string, flags: SettingSecretFlags): boolean
}
interface SettingValueIterFn {
    (setting: Setting, key: string, value: any, flags: GObject.ParamFlags): void
}
interface UtilsFileSearchInPathsPredicate {
    (filename: string): boolean
}
interface VPNIterFunc {
    (key: string, value: string): void
}
interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Connection */
    /**
     * The connection's D-Bus path, used only by the calling process as a record
     * of the D-Bus path of the connection as provided by a settings service.
     */
    path?: string
}
class Connection {
    /* Properties of NetworkManager-1.0.NetworkManager.Connection */
    /**
     * The connection's D-Bus path, used only by the calling process as a record
     * of the D-Bus path of the connection as provided by a settings service.
     */
    path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Connection */
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
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMConnection objects for similarity, with comparison behavior
     * modified by a set of flags.  See nm_setting_compare() for a description of
     * each flag's behavior.
     * @param b a second #NMConnection to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param out_settings if the connections differ, on return a hash table mapping setting names to second-level GHashTable (utf8 to guint32), which contains the key names that differ mapped to one or more of %NMSettingDiffResult as a bitfield
     */
    diff(b: Connection, flags: SettingCompareFlags, out_settings: GLib.HashTable): boolean
    /**
     * Print the connection to stdout.  For debugging purposes ONLY, should NOT
     * be used for serialization of the connection or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    dump(): void
    /**
     * Duplicates a #NMConnection.
     */
    duplicate(): Connection
    /**
     * Iterates over the properties of each #NMSetting object in the #NMConnection,
     * calling the supplied user function for each property.
     * @param func user-supplied function called for each setting's property
     */
    for_each_setting_value(func: SettingValueIterFn): void
    /**
     * A shortcut to return the type from the connection's #NMSettingConnection.
     */
    get_connection_type(): string
    /**
     * A shortcut to return the ID from the connection's #NMSettingConnection.
     */
    get_id(): string
    /**
     * Returns the interface name as stored in NMSettingConnection:interface_name.
     * If the connection contains no NMSettingConnection, it will return %NULL.
     * 
     * For hardware devices and software devices created outside of NetworkManager,
     * this name is used to match the device. for software devices created by
     * NetworkManager, this is the name of the created interface.
     */
    get_interface_name(): string
    /**
     * Returns the connection's D-Bus path.
     */
    get_path(): string
    /**
     * Gets the #NMSetting with the given #GType, if one has been previously added
     * to the #NMConnection.
     * @param setting_type the #GType of the setting object to return
     */
    get_setting(setting_type: GObject.Type): Setting
    /**
     * A shortcut to return any #NMSetting8021x the connection might contain.
     */
    get_setting_802_1x(): Setting8021x
    /**
     * A shortcut to return any #NMSettingAdsl the connection might contain.
     */
    get_setting_adsl(): SettingAdsl
    /**
     * A shortcut to return any #NMSettingBluetooth the connection might contain.
     */
    get_setting_bluetooth(): SettingBluetooth
    /**
     * A shortcut to return any #NMSettingBond the connection might contain.
     */
    get_setting_bond(): SettingBond
    /**
     * A shortcut to return any #NMSettingBridge the connection might contain.
     */
    get_setting_bridge(): SettingBridge
    /**
     * A shortcut to return any #NMSettingBridgePort the connection might contain.
     */
    get_setting_bridge_port(): SettingBridgePort
    /**
     * Gets the #NMSetting with the given name, if one has been previously added
     * the #NMConnection.
     * @param name a setting name
     */
    get_setting_by_name(name: string): Setting
    /**
     * A shortcut to return any #NMSettingCdma the connection might contain.
     */
    get_setting_cdma(): SettingCdma
    /**
     * A shortcut to return any #NMSettingConnection the connection might contain.
     */
    get_setting_connection(): SettingConnection
    /**
     * A shortcut to return any #NMSettingDcb the connection might contain.
     */
    get_setting_dcb(): SettingDcb
    /**
     * A shortcut to return any #NMSettingGeneric the connection might contain.
     */
    get_setting_generic(): SettingGeneric
    /**
     * A shortcut to return any #NMSettingGsm the connection might contain.
     */
    get_setting_gsm(): SettingGsm
    /**
     * A shortcut to return any #NMSettingInfiniband the connection might contain.
     */
    get_setting_infiniband(): SettingInfiniband
    /**
     * A shortcut to return any #NMSettingIP4Config the connection might contain.
     */
    get_setting_ip4_config(): SettingIP4Config
    /**
     * A shortcut to return any #NMSettingIP6Config the connection might contain.
     */
    get_setting_ip6_config(): SettingIP6Config
    /**
     * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
     */
    get_setting_olpc_mesh(): SettingOlpcMesh
    /**
     * A shortcut to return any #NMSettingPPP the connection might contain.
     */
    get_setting_ppp(): SettingPPP
    /**
     * A shortcut to return any #NMSettingPPPOE the connection might contain.
     */
    get_setting_pppoe(): SettingPPPOE
    /**
     * A shortcut to return any #NMSettingSerial the connection might contain.
     */
    get_setting_serial(): SettingSerial
    /**
     * A shortcut to return any #NMSettingTeam the connection might contain.
     */
    get_setting_team(): SettingTeam
    /**
     * A shortcut to return any #NMSettingTeamPort the connection might contain.
     */
    get_setting_team_port(): SettingTeamPort
    /**
     * A shortcut to return any #NMSettingVlan the connection might contain.
     */
    get_setting_vlan(): SettingVlan
    /**
     * A shortcut to return any #NMSettingVPN the connection might contain.
     */
    get_setting_vpn(): SettingVPN
    /**
     * A shortcut to return any #NMSettingWimax the connection might contain.
     */
    get_setting_wimax(): SettingWimax
    /**
     * A shortcut to return any #NMSettingWired the connection might contain.
     */
    get_setting_wired(): SettingWired
    /**
     * A shortcut to return any #NMSettingWireless the connection might contain.
     */
    get_setting_wireless(): SettingWireless
    /**
     * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
     */
    get_setting_wireless_security(): SettingWirelessSecurity
    /**
     * A shortcut to return the UUID from the connection's #NMSettingConnection.
     */
    get_uuid(): string
    /**
     * Returns the name that nm_device_disambiguate_names() would
     * return for the virtual device that would be created for `connection`.
     * Eg, "VLAN (eth1.1)".
     */
    get_virtual_device_description(): string
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings. This function abstracts all
     * connection types which require this functionality. For all other
     * connection types, this function will return %NULL.
     */
    get_virtual_iface_name(): string
    /**
     * A convenience function to check if the given `connection` is a particular
     * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
     * property of the connection and matches that against `type`.
     * @param type a setting name to check the connection's type against (like %NM_SETTING_WIRELESS_SETTING_NAME or %NM_SETTING_WIRED_SETTING_NAME)
     */
    is_type(type: string): boolean
    /**
     * Returns the name of the first setting object in the connection which would
     * need secrets to make a successful connection.  The returned hints are only
     * intended as a guide to what secrets may be required, because in some
     * circumstances, there is no way to conclusively determine exactly which
     * secrets are needed.
     */
    need_secrets(): [ /* returnType */ string, /* hints */ string[] | null ]
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
     */
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    /**
     * Removes the #NMSetting with the given #GType from the #NMConnection.  This
     * operation dereferences the #NMSetting object.
     * @param setting_type the #GType of the setting object to remove
     */
    remove_setting(setting_type: GObject.Type): void
    replace_settings(new_settings: GLib.HashTable): boolean
    /**
     * Deep-copies the settings of `new_conenction` and replaces the settings of `connection`
     * with the copied settings.
     * @param new_connection a #NMConnection to replace the settings of `connection` with
     */
    replace_settings_from_connection(new_connection: Connection): boolean
    /**
     * Sets the D-Bus path of the connection.  This property is not serialized, and
     * is only for the reference of the caller.  Sets the #NMConnection:path
     * property.
     * @param path the D-Bus path of the connection as given by the settings service which provides the connection
     */
    set_path(path: string): void
    /**
     * Converts the #NMConnection into a #GHashTable describing the connection,
     * suitable for marshalling over D-Bus or serializing.  The hash table mapping
     * is string:#GHashTable with each element in the returned hash representing
     * a #NMSetting object.  The keys are setting object names, and the values
     * are #GHashTables mapping string:GValue, each of which represents the
     * properties of the #NMSetting object.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Update the specified setting's secrets, given a hash table of secrets
     * intended for that setting (deserialized from D-Bus for example).  Will also
     * extract the given setting's secrets hash if given a hash of hashes, as would
     * be returned from nm_connection_to_hash().  If `setting_name` is %NULL, expects
     * a fully serialized #NMConnection as returned by nm_connection_to_hash() and
     * will update all secrets from all settings contained in `secrets`.
     * @param setting_name the setting object name to which the secrets apply
     * @param secrets a #GHashTable mapping string:#GValue of setting property names and secrets of the given `setting_name`
     */
    update_secrets(setting_name: string, secrets: GLib.HashTable): boolean
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
     */
    verify(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Connection */
    vfunc_secrets_updated(setting: string): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of NetworkManager-1.0.NetworkManager.Connection */
    /**
     * The ::changed signal is emitted when any property of any property
     * (including secrets) of any setting of the connection is modified,
     * or when settings are added or removed.
     */
    connect(sigName: "changed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Connection) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::secrets-cleared signal is emitted when the secrets of a connection
     * are cleared.
     */
    connect(sigName: "secrets-cleared", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "secrets-cleared", callback: (($obj: Connection) => void)): number
    emit(sigName: "secrets-cleared"): void
    /**
     * The ::secrets-updated signal is emitted when the secrets of a setting
     * have been changed.
     * @param setting_name the setting name of the #NMSetting for which secrets were updated
     */
    connect(sigName: "secrets-updated", callback: (($obj: Connection, setting_name: string) => void)): number
    connect_after(sigName: "secrets-updated", callback: (($obj: Connection, setting_name: string) => void)): number
    emit(sigName: "secrets-updated", setting_name: string): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static new_from_hash(hash: GLib.HashTable): Connection
    /**
     * Create a new #NMSetting object of the desired type, given a setting name.
     * @param name a setting name
     */
    static create_setting(name: string): Setting
    /**
     * Returns the #GType of the setting's class for a given setting name.
     * @param name a setting name
     */
    static lookup_setting_type(name: string): GObject.Type
    /**
     * Returns the #GType of the setting's class for a given setting error quark.
     * Useful for figuring out which setting a returned error is for.
     * @param error_quark a setting error quark
     */
    static lookup_setting_type_by_quark(error_quark: GLib.Quark): GObject.Type
    static $gtype: GObject.Type
}
interface Setting_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name?: string
}
class Setting {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Setting_ConstructProps)
    _init (config?: Setting_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_hash(setting_type: GObject.Type, hash: GLib.HashTable): Setting
    static $gtype: GObject.Type
}
interface Setting8021x_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymous_identity?: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     */
    ca_path?: string
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity?: string
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pac_file?: string
    /**
     * UTF-8 encoded password used for EAP authentication methods. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    password_flags?: number
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    password_raw_flags?: number
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when
     * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * Recognized values are "0" (disabled), "1" (allow unauthenticated
     * provisioning), "2" (allow authenticated provisioning), and "3" (allow
     * both authenticated and unauthenticated provisioning).  See the
     * wpa_supplicant documentation for more details.
     */
    phase1_fast_provisioning?: string
    /**
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1_peaplabel?: string
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in
     * the #NMSetting8021x:eap property.  When unset, the version reported by
     * the server will be used.  Sometimes when using older RADIUS servers, it
     * is necessary to force the client to use a particular PEAP version.  To do
     * so, this property may be set to "0" or "1" to force that specific PEAP
     * version.
     */
    phase1_peapver?: string
    /**
     * Specifies the allowed "phase 2" inner non-EAP authentication methods when
     * an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
     * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     */
    phase2_auth?: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication methods
     * when an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
     * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
     * requires specific parameters for successful authentication; see the
     * wpa_supplicant documentation for more details.
     */
    phase2_autheap?: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     */
    phase2_ca_path?: string
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
     * directly is not generally necessary except when returning secrets to
     * NetworkManager; it is generally set automatically when setting the
     * private key by the nm_setting_802_1x_set_phase2_private_key() function.
     */
    phase2_private_key_password?: string
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2_private_key_password_flags?: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed.
     */
    phase2_subject_match?: string
    /**
     * PIN used for EAP authentication methods.
     */
    pin?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pin_flags?: number
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    private_key_password?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    private_key_password_flags?: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed.
     */
    subject_match?: string
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties.
     */
    system_ca_certs?: boolean
}
class Setting8021x {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymous_identity: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     */
    ca_path: string
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity: string
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pac_file: string
    /**
     * UTF-8 encoded password used for EAP authentication methods. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    password_flags: number
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    password_raw_flags: number
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
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1_peaplabel: string
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
     * Specifies the allowed "phase 2" inner non-EAP authentication methods when
     * an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
     * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     */
    phase2_auth: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication methods
     * when an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
     * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
     * requires specific parameters for successful authentication; see the
     * wpa_supplicant documentation for more details.
     */
    phase2_autheap: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     */
    phase2_ca_path: string
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
     * directly is not generally necessary except when returning secrets to
     * NetworkManager; it is generally set automatically when setting the
     * private key by the nm_setting_802_1x_set_phase2_private_key() function.
     */
    phase2_private_key_password: string
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2_private_key_password_flags: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed.
     */
    phase2_subject_match: string
    /**
     * PIN used for EAP authentication methods.
     */
    pin: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pin_flags: number
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    private_key_password: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    private_key_password_flags: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed.
     */
    subject_match: string
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties.
     */
    system_ca_certs: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Adds an allowed alternate subject name match.  Until at least one
     * match is added, the altSubjectName of the remote authentication
     * server is not verified.
     * @param altsubject_match the altSubjectName to allow for this connection
     */
    add_altsubject_match(altsubject_match: string): boolean
    /**
     * Adds an allowed EAP method.  The setting is not valid until at least one
     * EAP method has been added.  See #NMSetting8021x:eap property for a list of
     * allowed EAP methods.
     * @param eap the name of the EAP method to allow for this connection
     */
    add_eap_method(eap: string): boolean
    /**
     * Adds an allowed alternate subject name match for "phase 2".  Until
     * at least one match is added, the altSubjectName of the "phase 2"
     * remote authentication server is not verified.
     * @param phase2_altsubject_match the "phase 2" altSubjectName to allow for this connection
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
     */
    get_altsubject_match(i: number): string
    /**
     * Returns the anonymous identifier used by some EAP methods (like TTLS) to
     * authenticate the user in the outer unencrypted "phase 1" authentication.  The
     * inner "phase 2" authentication will use the #NMSetting8021x:identity in
     * a secure form, if applicable for that EAP method.
     */
    get_anonymous_identity(): string
    /**
     * Returns the CA certificate blob if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    get_ca_cert_blob(): Uint8Array
    /**
     * Returns the CA certificate path if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    get_ca_cert_path(): string
    /**
     * Returns the scheme used to store the CA certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_ca_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_ca_cert_path().
     */
    get_ca_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the path of the CA certificate directory if previously set.  Systems
     * will often have a directory that contains multiple individual CA certificates
     * which the supplicant can then add to the verification chain.  This may be
     * used in addition to the #NMSetting8021x:ca-cert property to add more CA
     * certificates for verifying the network to client.
     */
    get_ca_path(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_client_cert_blob(): Uint8Array
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_client_cert_path(): string
    /**
     * Returns the scheme used to store the client certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_client_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_client_cert_path().
     */
    get_client_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the name of the allowed EAP method at index `i`.
     * @param i the index of the EAP method name to return
     */
    get_eap_method(i: number): string
    /**
     * Returns the identifier used by some EAP methods (like TLS) to
     * authenticate the user.  Often this is a username or login name.
     */
    get_identity(): string
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:altsubject-matches property of this setting.
     */
    get_num_altsubject_matches(): number
    /**
     * Returns the number of eap methods allowed for use when connecting to the
     * network.  Generally only one EAP method is used.  Use the functions
     * nm_setting_802_1x_get_eap_method(), nm_setting_802_1x_add_eap_method(),
     * and nm_setting_802_1x_remove_eap_method() for adding, removing, and retrieving
     * allowed EAP methods.
     */
    get_num_eap_methods(): number
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:phase2-altsubject-matches property of this setting.
     */
    get_num_phase2_altsubject_matches(): number
    /**
     * Returns the file containing PAC credentials used by EAP-FAST method.
     */
    get_pac_file(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_password_raw(): Uint8Array
    get_password_raw_flags(): SettingSecretFlags
    get_phase1_fast_provisioning(): string
    get_phase1_peaplabel(): string
    get_phase1_peapver(): string
    /**
     * Returns the "phase 2" altSubjectName match at index `i`.
     * @param i the zero-based index of the array of "phase 2" altSubjectName matches
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
     */
    get_phase2_ca_cert_blob(): Uint8Array
    /**
     * Returns the "phase 2" CA certificate path if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    get_phase2_ca_cert_path(): string
    /**
     * Returns the scheme used to store the "phase 2" CA certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_ca_cert_blob(); if %NM_SETTING_802_1X_CK_SCHEME_PATH,
     * use nm_setting_802_1x_get_ca_cert_path().
     */
    get_phase2_ca_cert_scheme(): Setting8021xCKScheme
    /**
     * Returns the path of the "phase 2" CA certificate directory if previously set.
     * Systems will often have a directory that contains multiple individual CA
     * certificates which the supplicant can then add to the verification chain.
     * This may be used in addition to the #NMSetting8021x:phase2-ca-cert property
     * to add more CA certificates for verifying the network to client.
     */
    get_phase2_ca_path(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_phase2_client_cert_blob(): Uint8Array
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_phase2_client_cert_path(): string
    /**
     * Returns the scheme used to store the "phase 2" client certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     */
    get_phase2_client_cert_scheme(): Setting8021xCKScheme
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * WARNING: the phase2 private key property is not a "secret" property, and thus
     * unencrypted private key data may be readable by unprivileged users.  Private
     * keys should always be encrypted with a private key password.
     */
    get_phase2_private_key_blob(): Uint8Array
    get_phase2_private_key_format(): Setting8021xCKFormat
    get_phase2_private_key_password(): string
    get_phase2_private_key_password_flags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_phase2_private_key_path(): string
    /**
     * Returns the scheme used to store the "phase 2" private key.  If the returned
     * scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     */
    get_phase2_private_key_scheme(): Setting8021xCKScheme
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
     */
    get_private_key_blob(): Uint8Array
    get_private_key_format(): Setting8021xCKFormat
    get_private_key_password(): string
    get_private_key_password_flags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    get_private_key_path(): string
    /**
     * Returns the scheme used to store the private key.  If the returned scheme is
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     */
    get_private_key_scheme(): Setting8021xCKScheme
    get_subject_match(): string
    /**
     * Sets the #NMSetting8021x:system-ca-certs property. The
     * #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path
     * properties are ignored if the #NMSetting8021x:system-ca-certs property is
     * %TRUE, in which case a system-wide CA certificate directory specified at
     * compile time (using the --system-ca-path configure option) is used in place
     * of these properties.
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
     */
    remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:ca-cert property
     * with the raw certificate data if using the %NM_SETTING_802_1X_CK_SCHEME_BLOB
     * scheme, or with the path to the certificate file if using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param cert_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the CA certificate   file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     */
    set_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param cert_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any `scheme` clears the client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     */
    set_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-ca-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * @param cert_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" CA   certificate file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the "phase2" CA certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     */
    set_phase2_ca_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * @param cert_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any `scheme` clears the "phase2" client certificate.
     * @param scheme desired storage scheme for the certificate
     * @param out_format on successful return, the type of the certificate added
     */
    set_phase2_client_cert(cert_path: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
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
     * @param key_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" private   key file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded;   use g_filename_to_utf8() to convert if needed.  Passing %NULL with any   `scheme` clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param out_format on successful return, the type of the private key added
     */
    set_phase2_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
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
     * @param key_path when `scheme` is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the private key file   (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any `scheme`   clears the private key.
     * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
     * @param scheme desired storage scheme for the private key
     * @param out_format on successful return, the type of the private key added
     */
    set_private_key(key_path: string, password: string, scheme: Setting8021xCKScheme, out_format: Setting8021xCKFormat): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pac-file", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-raw-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-fast-provisioning", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peaplabel", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peapver", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-auth", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-autheap", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-ca-path", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password-flags", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-match", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-ca-certs", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Setting8021x, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Setting8021x_ConstructProps)
    _init (config?: Setting8021x_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Setting8021x
    static $gtype: GObject.Type
}
interface SettingAdsl_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingAdsl */
    /**
     * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
     */
    encapsulation?: string
    /**
     * Password used to authenticate with the ADSL service.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSettingAdsl:password property.
     */
    password_flags?: number
    /**
     * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
     */
    protocol?: string
    /**
     * Username used to authenticate with the ADSL service.
     */
    username?: string
    /**
     * VCI of ADSL connection
     */
    vci?: number
    /**
     * VPI of ADSL connection
     */
    vpi?: number
}
class SettingAdsl {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingAdsl */
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
    password_flags: number
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingAdsl */
    get_encapsulation(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_protocol(): string
    get_username(): string
    get_vci(): number
    get_vpi(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encapsulation", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vci", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpi", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingAdsl, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingAdsl_ConstructProps)
    _init (config?: SettingAdsl_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingAdsl
    static $gtype: GObject.Type
}
interface SettingBluetooth_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    /**
     * Either "dun" for Dial-Up Networking connections or "panu" for Personal
     * Area Networking connections to devices supporting the NAP profile.
     */
    type?: string
}
class SettingBluetooth {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    /**
     * Either "dun" for Dial-Up Networking connections or "panu" for Personal
     * Area Networking connections to devices supporting the NAP profile.
     */
    type: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    /**
     * Gets the Bluetooth address of the remote device which this setting
     * describes a connection to.
     */
    get_bdaddr(): Uint8Array
    /**
     * Returns the connection method for communicating with the remote device (i.e.
     * either DUN to a DUN-capable device or PANU to a NAP-capable device).
     */
    get_connection_type(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBluetooth, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBluetooth_ConstructProps)
    _init (config?: SettingBluetooth_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBluetooth
    static $gtype: GObject.Type
}
interface SettingBond_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBond */
    /**
     * The name of the virtual in-kernel bonding network interface
     */
    interface_name?: string
}
class SettingBond {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBond */
    /**
     * The name of the virtual in-kernel bonding network interface
     */
    interface_name: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBond */
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
     */
    add_option(name: string, value: string): boolean
    get_interface_name(): string
    /**
     * Returns the number of options that should be set for this bond when it
     * is activated. This can be used to retrieve each option individually
     * using nm_setting_bond_get_option().
     */
    get_num_options(): number
    /**
     * Given an index, return the value of the bonding option at that index.  Indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_bond_add_option() and nm_setting_bond_remove_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_bond_get_num_options() - 1
     */
    get_option(idx: number): [ /* returnType */ boolean, /* out_name */ string, /* out_value */ string ]
    /**
     * Returns the value associated with the bonding option specified by
     * `name,` if it exists.
     * @param name the option name for which to retrieve the value
     */
    get_option_by_name(name: string): string
    get_option_default(name: string): string
    /**
     * Returns a list of valid bond options.
     */
    get_valid_options(): string[]
    /**
     * Remove the bonding option referenced by `name` from the internal option
     * list.
     * @param name name of the option to remove
     */
    remove_option(name: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBond, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBond_ConstructProps)
    _init (config?: SettingBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBond
    /**
     * Checks whether `name` is a valid bond option and `value` is a valid value for
     * the `name`. If `value` is %NULL, the function only validates the option name.
     * @param name the name of the option to validate
     * @param value the value of the option to validate
     */
    static validate_option(name: string, value: string): boolean
    static $gtype: GObject.Type
}
interface SettingBridge_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageing_time?: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forward_delay?: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    hello_time?: number
    /**
     * The name of the virtual in-kernel bridging network interface
     */
    interface_name?: string
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    max_age?: number
    /**
     * Sets the Spanning Tree Protocol (STP) priority for this bridge.  Lower
     * values are "better"; the lowest priority bridge will be elected the root
     * bridge.
     */
    priority?: number
    /**
     * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
     */
    stp?: boolean
}
class SettingBridge {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageing_time: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forward_delay: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    hello_time: number
    /**
     * The name of the virtual in-kernel bridging network interface
     */
    interface_name: string
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    max_age: number
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridge */
    get_ageing_time(): number
    get_forward_delay(): number
    get_hello_time(): number
    get_interface_name(): string
    get_mac_address(): Uint8Array
    get_max_age(): number
    get_priority(): number
    get_stp(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ageing-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forward-delay", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hello-time", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stp", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridge, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBridge_ConstructProps)
    _init (config?: SettingBridge_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridge
    static $gtype: GObject.Type
}
interface SettingBridgePort_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to
     * be sent back out through the port the frame was received on.
     */
    hairpin_mode?: boolean
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    path_cost?: number
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     */
    priority?: number
}
class SettingBridgePort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to
     * be sent back out through the port the frame was received on.
     */
    hairpin_mode: boolean
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    path_cost: number
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     */
    priority: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    get_hairpin_mode(): boolean
    get_path_cost(): number
    get_priority(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hairpin-mode", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-cost", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingBridgePort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingBridgePort_ConstructProps)
    _init (config?: SettingBridgePort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBridgePort
    static $gtype: GObject.Type
}
interface SettingCdma_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingCdma */
    /**
     * The number to dial to establish the connection to the CDMA-based mobile
     * broadband network, if any.  If not specified, the default number (#777)
     * is used when required.
     */
    number?: string
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSettingCdma:password property.
     */
    password_flags?: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username?: string
}
class SettingCdma {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingCdma */
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
    password_flags: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingCdma */
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_username(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingCdma, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingCdma_ConstructProps)
    _init (config?: SettingCdma_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingCdma
    static $gtype: GObject.Type
}
interface SettingConnection_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingConnection */
    /**
     * Whether or not the connection should be automatically connected by
     * NetworkManager when the resources for the connection are available.
     * %TRUE to automatically activate the connection, %FALSE to require manual
     * intervention to activate the connection.
     */
    autoconnect?: boolean
    /**
     * If greater than zero, delay success of IP addressing until either the
     * timeout is reached, or an IP gateway replies to a ping.
     */
    gateway_ping_timeout?: number
    /**
     * A human readable unique identifier for the connection, like "Work Wi-Fi"
     * or "T-Mobile 3G".
     */
    id?: string
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
    interface_name?: string
    /**
     * Interface name of the master device or UUID of the master connection.
     */
    master?: string
    /**
     * %FALSE if the connection can be modified using the provided settings
     * service's D-Bus interface with the right privileges, or %TRUE if the
     * connection is read-only and cannot be modified.
     */
    read_only?: boolean
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slave_type?: string
    /**
     * The time, in seconds since the Unix Epoch, that the connection was last
     * _successfully_ fully activated.
     * 
     * NetworkManager updates the connection timestamp periodically when the
     * connection is active to ensure that an active connection has the latest
     * timestamp. The property is only meant for reading (changes to this
     * property will not be preserved).
     */
    timestamp?: number
    /**
     * Base type of the connection. For hardware-dependent connections, should
     * contain the setting name of the hardware-type specific setting (ie,
     * "802-3-ethernet" or "802-11-wireless" or "bluetooth", etc), and for
     * non-hardware dependent connections like VPN or otherwise, should contain
     * the setting name of that setting type (ie, "vpn" or "bridge", etc).
     */
    type?: string
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
    uuid?: string
    /**
     * The trust level of a the connection.  Free form case-insensitive string
     * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
     * the connection will be placed in the default zone as defined by the
     * firewall.
     */
    zone?: string
}
class SettingConnection {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingConnection */
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
    gateway_ping_timeout: number
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
     * Interface name of the master device or UUID of the master connection.
     */
    master: string
    /**
     * %FALSE if the connection can be modified using the provided settings
     * service's D-Bus interface with the right privileges, or %TRUE if the
     * connection is read-only and cannot be modified.
     */
    read_only: boolean
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slave_type: string
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
     * nm_utils_uuid_generate_from_string().
     */
    uuid: string
    /**
     * The trust level of a the connection.  Free form case-insensitive string
     * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
     * the connection will be placed in the default zone as defined by the
     * firewall.
     */
    zone: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingConnection */
    /**
     * Adds a permission to the connection's permission list.  At this time, only
     * the "user" permission type is supported, and `pitem` must be a username. See
     * #NMSettingConnection:permissions: for more details.
     * @param ptype the permission type; at this time only "user" is supported
     * @param pitem the permission item formatted as required for `ptype`
     * @param detail unused at this time; must be %NULL
     */
    add_permission(ptype: string, pitem: string, detail?: string | null): boolean
    /**
     * Adds a new secondary connection UUID to the setting.
     * @param sec_uuid the secondary connection UUID to add
     */
    add_secondary(sec_uuid: string): boolean
    /**
     * Returns the #NMSettingConnection:autoconnect property of the connection.
     */
    get_autoconnect(): boolean
    /**
     * Returns the #NMSettingConnection:type property of the connection.
     */
    get_connection_type(): string
    get_gateway_ping_timeout(): number
    /**
     * Returns the #NMSettingConnection:id property of the connection.
     */
    get_id(): string
    /**
     * Returns the #NMSettingConnection:interface-name property of the connection.
     */
    get_interface_name(): string
    /**
     * Returns the #NMSettingConnection:master property of the connection.
     */
    get_master(): string
    /**
     * Returns the number of entries in the #NMSettingConnection:permissions
     * property of this setting.
     */
    get_num_permissions(): number
    get_num_secondaries(): number
    /**
     * Retrieve one of the entries of the #NMSettingConnection:permissions property
     * of this setting.
     * @param idx the zero-based index of the permissions entry
     * @param out_ptype on return, the permission type (at this time, always "user")
     * @param out_pitem on return, the permission item (formatted according to `ptype,` see #NMSettingConnection:permissions for more detail
     * @param out_detail on return, the permission detail (at this time, always %NULL)
     */
    get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean
    /**
     * Returns the #NMSettingConnection:read-only property of the connection.
     */
    get_read_only(): boolean
    get_secondary(idx: number): string
    /**
     * Returns the #NMSettingConnection:slave-type property of the connection.
     */
    get_slave_type(): string
    /**
     * Returns the #NMSettingConnection:timestamp property of the connection.
     */
    get_timestamp(): number
    /**
     * Returns the #NMSettingConnection:uuid property of the connection.
     */
    get_uuid(): string
    /**
     * Returns the #NMSettingConnection:zone property of the connection.
     */
    get_zone(): string
    is_slave_type(type: string): boolean
    /**
     * Checks whether the given username is allowed to view/access this connection.
     * @param uname the user name to check permissions for
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
     * @param pitem the permission item formatted as required for `ptype`
     * @param detail unused at this time; must be %NULL
     */
    remove_permission_by_value(ptype: string, pitem: string, detail?: string | null): boolean
    /**
     * Removes the secondary coonnection UUID at index `idx`.
     * @param idx index number of the secondary connection UUID
     */
    remove_secondary(idx: number): void
    /**
     * Removes the secondary coonnection UUID `sec_uuid`.
     * @param sec_uuid the secondary connection UUID to remove
     */
    remove_secondary_by_value(sec_uuid: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway-ping-timeout", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingConnection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingConnection_ConstructProps)
    _init (config?: SettingConnection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingConnection
    static $gtype: GObject.Type
}
interface SettingDcb_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingDcb */
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fcoe_flags?: number
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     */
    app_fcoe_mode?: string
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fcoe_priority?: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fip_flags?: number
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fip-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fip_priority?: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
     * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_iscsi_flags?: number
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_iscsi_priority?: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_flow_control_flags?: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_group_flags?: number
}
class SettingDcb {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingDcb */
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fcoe_flags: number
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     */
    app_fcoe_mode: string
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fcoe_priority: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_fip_flags: number
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fip-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_fip_priority: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
     * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    app_iscsi_flags: number
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    app_iscsi_priority: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_flow_control_flags: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priority_group_flags: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingDcb */
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
     * @param bandwidth_percent the bandwidth percentage (0 - 100) that `user_priority` is allowed to use within its priority group
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
     * @param bandwidth_percent the bandwidth percentage (0 - 100) to assign to `group_id` to
     */
    set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set flow control for
     * @param group_id the group (0 - 7) to assign `user_priority` to, or 15 for the unrestricted group.
     */
    set_priority_group_id(user_priority: number, group_id: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     * @param user_priority the User Priority (0 - 7) to set strict bandwidth for
     * @param strict %TRUE to allow `user_priority` to use all the bandwidth allocated to its priority group, or %FALSE if not
     */
    set_priority_strict_bandwidth(user_priority: number, strict: boolean): void
    set_priority_traffic_class(user_priority: number, traffic_class: number): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-mode", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-priority", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-flow-control-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-group-flags", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingDcb, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingDcb_ConstructProps)
    _init (config?: SettingDcb_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingDcb
    static $gtype: GObject.Type
}
interface SettingGeneric_ConstructProps extends Setting_ConstructProps {
}
class SettingGeneric {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGeneric, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingGeneric_ConstructProps)
    _init (config?: SettingGeneric_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGeneric
    static $gtype: GObject.Type
}
interface SettingGsm_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingGsm */
    /**
     * Bitfield of allowed frequency bands.  Note that not all devices allow
     * frequency band control.  Permitted values are those specified by
     * #NMSettingGsmNetworkBand.
     */
    allowed_bands?: number
    /**
     * The GPRS Access Point Name specifying the APN used when establishing a
     * data session with the GSM-based network.  The APN often determines how
     * the user will be billed for their network usage and whether the user has
     * access to the Internet or just a provider-specific walled-garden, so it
     * is important to use the correct APN for the user's mobile broadband plan.
     * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
     * 03.60 Section 14.9.
     */
    apn?: string
    /**
     * When %TRUE, only connections to the home network will be allowed.
     * Connections to roaming networks will not be made.
     */
    home_only?: boolean
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    network_id?: string
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
    network_type?: number
    /**
     * Number to dial when establishing a PPP data session with the GSM-based
     * mobile broadband network.  Many modems do not require PPP for connections
     * to the mobile network and thus this property should be left blank, which
     * allows NetworkManager to select the appropriate settings automatically.
     */
    number?: string
    /**
     * The password used to authenticate with the network, if required.  Many
     * providers do not require a password, or accept any password.  But if a
     * password is required, it is specified here.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:password property.
     */
    password_flags?: number
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin?: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pin_flags?: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username?: string
}
class SettingGsm {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingGsm */
    /**
     * Bitfield of allowed frequency bands.  Note that not all devices allow
     * frequency band control.  Permitted values are those specified by
     * #NMSettingGsmNetworkBand.
     */
    allowed_bands: number
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
     * When %TRUE, only connections to the home network will be allowed.
     * Connections to roaming networks will not be made.
     */
    home_only: boolean
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    network_id: string
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
    network_type: number
    /**
     * Number to dial when establishing a PPP data session with the GSM-based
     * mobile broadband network.  Many modems do not require PPP for connections
     * to the mobile network and thus this property should be left blank, which
     * allows NetworkManager to select the appropriate settings automatically.
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
    password_flags: number
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pin_flags: number
    /**
     * The username used to authenticate with the network, if required.  Many
     * providers do not require a username, or accept any username.  But if a
     * username is required, it is specified here.
     */
    username: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingGsm */
    get_allowed_bands(): number
    get_apn(): string
    get_home_only(): boolean
    get_network_id(): string
    get_network_type(): number
    get_number(): string
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_pin(): string
    get_pin_flags(): SettingSecretFlags
    get_username(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-bands", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apn", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-only", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-id", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingGsm, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingGsm_ConstructProps)
    _init (config?: SettingGsm_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingGsm
    static $gtype: GObject.Type
}
interface SettingIP4Config_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     */
    dhcp_client_id?: string
    /**
     * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     */
    dhcp_hostname?: string
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcp_send_hostname?: boolean
    /**
     * Number of seconds after which the unfinished DHCP transaction fails
     * or zero for default.
     */
    dhcp_timeout?: number
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured nameservers and search domains are ignored and
     * only nameservers and search domains specified in the
     * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
     * any, are used.
     */
    ignore_auto_dns?: boolean
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured routes are ignored and only routes specified in
     * the #NMSettingIP4Config:routes property, if any, are used.
     */
    ignore_auto_routes?: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv4
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv6-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv4 configuration fails but IPv6
     * configuration completes successfully.
     */
    may_fail?: boolean
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
    method?: string
    /**
     * If %TRUE, this connection will never be the default IPv4 connection,
     * meaning it will never be assigned the default route by NetworkManager.
     */
    never_default?: boolean
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
    route_metric?: number
}
class SettingIP4Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     */
    dhcp_client_id: string
    /**
     * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     */
    dhcp_hostname: string
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcp_send_hostname: boolean
    /**
     * Number of seconds after which the unfinished DHCP transaction fails
     * or zero for default.
     */
    dhcp_timeout: number
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured nameservers and search domains are ignored and
     * only nameservers and search domains specified in the
     * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
     * any, are used.
     */
    ignore_auto_dns: boolean
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured routes are ignored and only routes specified in
     * the #NMSettingIP4Config:routes property, if any, are used.
     */
    ignore_auto_routes: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv4
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv6-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv4 configuration fails but IPv6
     * configuration completes successfully.
     */
    may_fail: boolean
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
    method: string
    /**
     * If %TRUE, this connection will never be the default IPv4 connection,
     * meaning it will never be assigned the default route by NetworkManager.
     */
    never_default: boolean
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
    route_metric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    /**
     * Adds a new IPv4 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     * @param address the new address to add
     */
    add_address(address: IP4Address): boolean
    /**
     * Adds a new DNS server to the setting.
     * @param dns the IPv4 address (network byte order) of the DNS server to add
     */
    add_dns(dns: number): boolean
    /**
     * Adds a new DNS search domain to the setting.
     * @param dns_search the search domain to add
     */
    add_dns_search(dns_search: string): boolean
    /**
     * Adds a new IPv4 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
     * @param route the route to add
     */
    add_route(route: IP4Route): boolean
    /**
     * Removes all configured addresses.
     */
    clear_addresses(): void
    /**
     * Removes all configured DNS servers.
     */
    clear_dns(): void
    /**
     * Removes all configured DNS search domains.
     */
    clear_dns_searches(): void
    /**
     * Removes all configured routes.
     */
    clear_routes(): void
    get_address(i: number): IP4Address
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-client-id
     * property.
     */
    get_dhcp_client_id(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-hostname
     * property.
     */
    get_dhcp_hostname(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-send-hostname
     * property.
     */
    get_dhcp_send_hostname(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-timeout
     * property.
     */
    get_dhcp_timeout(): number
    get_dns(i: number): number
    get_dns_search(i: number): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-dns
     * property.
     */
    get_ignore_auto_dns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-routes
     * property.
     */
    get_ignore_auto_routes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:may-fail
     * property.
     */
    get_may_fail(): boolean
    get_method(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:never-default
     * property.
     */
    get_never_default(): boolean
    get_num_addresses(): number
    get_num_dns(): number
    get_num_dns_searches(): number
    get_num_routes(): number
    get_route(i: number): IP4Route
    /**
     * Returns the value contained in the #NMSettingIP4Config:route-metric
     * property.
     */
    get_route_metric(): number
    /**
     * Removes the address at index `i`.
     * @param i index number of the address to remove
     */
    remove_address(i: number): void
    /**
     * Removes the address `address`.
     * @param address the IP address to remove
     */
    remove_address_by_value(address: IP4Address): boolean
    /**
     * Removes the DNS server at index `i`.
     * @param i index number of the DNS server to remove
     */
    remove_dns(i: number): void
    /**
     * Removes the DNS server `dns`.
     * @param dns the DNS server to remove
     */
    remove_dns_by_value(dns: number): boolean
    /**
     * Removes the DNS search domain at index `i`.
     * @param i index number of the DNS search domain
     */
    remove_dns_search(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     * @param dns_search the search domain to remove
     */
    remove_dns_search_by_value(dns_search: string): boolean
    /**
     * Removes the route at index `i`.
     * @param i index number of the route
     */
    remove_route(i: number): void
    /**
     * Removes the route `route`.
     * @param route the route to remove
     */
    remove_route_by_value(route: IP4Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-client-id", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-send-hostname", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-timeout", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP4Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingIP4Config_ConstructProps)
    _init (config?: SettingIP4Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP4Config
    static $gtype: GObject.Type
}
interface SettingIP6Config_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    /**
     * The specified name will be sent to the DHCP server when acquiring a
     * lease.
     */
    dhcp_hostname?: string
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured nameservers and search domains are
     * ignored and only nameservers and search domains specified in the
     * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
     * any, are used.
     */
    ignore_auto_dns?: boolean
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIP6Config:routes property, if any, are used.
     */
    ignore_auto_routes?: boolean
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: 0: disabled,
     * 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     */
    ip6_privacy?: number
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv6
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv4-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv6 configuration fails but IPv4
     * configuration completes successfully.
     */
    may_fail?: boolean
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
    method?: string
    /**
     * If %TRUE, this connection will never be the default IPv6 connection,
     * meaning it will never be assigned the default IPv6 route by
     * NetworkManager.
     */
    never_default?: boolean
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
    route_metric?: number
}
class SettingIP6Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    /**
     * The specified name will be sent to the DHCP server when acquiring a
     * lease.
     */
    dhcp_hostname: string
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured nameservers and search domains are
     * ignored and only nameservers and search domains specified in the
     * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
     * any, are used.
     */
    ignore_auto_dns: boolean
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIP6Config:routes property, if any, are used.
     */
    ignore_auto_routes: boolean
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: 0: disabled,
     * 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     */
    ip6_privacy: number
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv6
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv4-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv6 configuration fails but IPv4
     * configuration completes successfully.
     */
    may_fail: boolean
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
    method: string
    /**
     * If %TRUE, this connection will never be the default IPv6 connection,
     * meaning it will never be assigned the default IPv6 route by
     * NetworkManager.
     */
    never_default: boolean
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
    route_metric: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    /**
     * Adds a new IPv6 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     * @param address the new address to add
     */
    add_address(address: IP6Address): boolean
    /**
     * Adds a new DNS server to the setting.
     * @param dns the IPv6 address of the DNS server to add
     */
    add_dns(dns?: object | null): boolean
    /**
     * Adds a new DNS search domain to the setting.
     * @param dns_search the search domain to add
     */
    add_dns_search(dns_search: string): boolean
    /**
     * Adds a new IPv6 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
     * @param route the route to add
     */
    add_route(route: IP6Route): boolean
    /**
     * Removes all configured addresses.
     */
    clear_addresses(): void
    /**
     * Removes all configured DNS servers.
     */
    clear_dns(): void
    /**
     * Removes all configured DNS search domains.
     */
    clear_dns_searches(): void
    /**
     * Removes all configured routes.
     */
    clear_routes(): void
    get_address(i: number): IP6Address
    /**
     * Returns the value contained in the #NMSettingIP6Config:dhcp-hostname
     * property.
     */
    get_dhcp_hostname(): string
    get_dns(i: number): object | null
    get_dns_search(i: number): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-dns
     * property.
     */
    get_ignore_auto_dns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-routes
     * property.
     */
    get_ignore_auto_routes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ip6-privacy
     * property.
     */
    get_ip6_privacy(): SettingIP6ConfigPrivacy
    /**
     * Returns the value contained in the #NMSettingIP6Config:may-fail
     * property.
     */
    get_may_fail(): boolean
    get_method(): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:never-default
     * property.
     */
    get_never_default(): boolean
    get_num_addresses(): number
    get_num_dns(): number
    get_num_dns_searches(): number
    get_num_routes(): number
    get_route(i: number): IP6Route
    /**
     * Returns the value contained in the #NMSettingIP6Config:route-metric
     * property.
     */
    get_route_metric(): number
    /**
     * Removes the address at index `i`.
     * @param i index number of the address to remove
     */
    remove_address(i: number): void
    /**
     * Removes the address `address`.
     * @param address the address to remove
     */
    remove_address_by_value(address: IP6Address): boolean
    /**
     * Removes the DNS server at index `i`.
     * @param i index number of the DNS server to remove
     */
    remove_dns(i: number): void
    /**
     * Removes the DNS server at index `i`.
     * @param dns the IPv6 address of the DNS server to remove
     */
    remove_dns_by_value(dns?: object | null): boolean
    /**
     * Removes the DNS search domain at index `i`.
     * @param i index number of the DNS search domain
     */
    remove_dns_search(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     * @param dns_search the search domain to remove
     */
    remove_dns_search_by_value(dns_search: string): boolean
    /**
     * Removes the route at index `i`.
     * @param i index number of the route
     */
    remove_route(i: number): void
    /**
     * Removes the route `route`.
     * @param route the route to remove
     */
    remove_route_by_value(route: IP6Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-privacy", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingIP6Config, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingIP6Config_ConstructProps)
    _init (config?: SettingIP6Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingIP6Config
    static $gtype: GObject.Type
}
interface SettingInfiniband_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple frames.
     */
    mtu?: number
    /**
     * The InfiniBand P_Key to use for this device. A value of -1 means to use
     * the default P_Key (aka "the P_Key at index 0").  Otherwise it is a 16-bit
     * unsigned integer, whose high bit is set if it is a "full membership"
     * P_Key.
     */
    p_key?: number
    /**
     * The interface name of the parent device of this device. Normally %NULL,
     * but if the #NMSettingInfiniband:p_key property is set, then you must
     * specify the base device by setting either this property or
     * #NMSettingInfiniband:mac-address.
     */
    parent?: string
    /**
     * The IP-over-InfiniBand transport mode. Either "datagram" or
     * "connected".
     */
    transport_mode?: string
}
class SettingInfiniband {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingInfiniband */
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
    p_key: number
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    get_mac_address(): Uint8Array
    get_mtu(): number
    /**
     * Returns the P_Key to use for this device. A value of -1 means to
     * use the default P_Key (aka "the P_Key at index 0"). Otherwise it is
     * a 16-bit unsigned integer.
     */
    get_p_key(): number
    /**
     * Returns the parent interface name for this device, if set.
     */
    get_parent(): string
    /**
     * Returns the transport mode for this device. Either 'datagram' or
     * 'connected'.
     */
    get_transport_mode(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::p-key", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingInfiniband, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingInfiniband_ConstructProps)
    _init (config?: SettingInfiniband_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingInfiniband
    static $gtype: GObject.Type
}
interface SettingOlpcMesh_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    /**
     * Channel on which the mesh network to join is located.
     */
    channel?: number
}
class SettingOlpcMesh {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    /**
     * Channel on which the mesh network to join is located.
     */
    channel: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    get_channel(): number
    get_dhcp_anycast_address(): Uint8Array
    get_ssid(): Uint8Array
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingOlpcMesh, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingOlpcMesh_ConstructProps)
    _init (config?: SettingOlpcMesh_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingOlpcMesh
    static $gtype: GObject.Type
}
interface SettingPPP_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingPPP */
    /**
     * If non-zero, instruct pppd to set the serial port to the specified
     * baudrate.  This value should normally be left as 0 to automatically
     * choose the speed.
     */
    baud?: number
    /**
     * If %TRUE, specify that pppd should set the serial port to use hardware
     * flow control with RTS and CTS signals.  This value should normally be set
     * to %FALSE.
     */
    crtscts?: boolean
    /**
     * If non-zero, instruct pppd to presume the connection to the peer has
     * failed if the specified number of LCP echo-requests go unanswered by the
     * peer.  The "lcp-echo-interval" property must also be set to a non-zero
     * value if this property is used.
     */
    lcp_echo_failure?: number
    /**
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
     * every n seconds (where n is the specified value).  Note that some PPP
     * peers will respond to echo requests and some will not, and it is not
     * possible to autodetect this.
     */
    lcp_echo_interval?: number
    /**
     * If %TRUE, stateful MPPE is used.  See pppd documentation for more
     * information on stateful MPPE.
     */
    mppe_stateful?: boolean
    /**
     * If non-zero, instruct pppd to request that the peer send packets no
     * larger than the specified size.  If non-zero, the MRU should be between
     * 128 and 16384.
     */
    mru?: number
    /**
     * If non-zero, instruct pppd to send packets no larger than the specified
     * size.
     */
    mtu?: number
    /**
     * If %TRUE, Van Jacobsen TCP header compression will not be requested.
     */
    no_vj_comp?: boolean
    /**
     * If %TRUE, do not require the other side (usually the PPP server) to
     * authenticate itself to the client.  If %FALSE, require authentication
     * from the remote side.  In almost all cases, this should be %TRUE.
     */
    noauth?: boolean
    /**
     * If %TRUE, BSD compression will not be requested.
     */
    nobsdcomp?: boolean
    /**
     * If %TRUE, "deflate" compression will not be requested.
     */
    nodeflate?: boolean
    /**
     * If %TRUE, the CHAP authentication method will not be used.
     */
    refuse_chap?: boolean
    /**
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuse_eap?: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuse_mschap?: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuse_mschapv2?: boolean
    /**
     * If %TRUE, the PAP authentication method will not be used.
     */
    refuse_pap?: boolean
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
     * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
     * session will fail.  Note that MPPE is not used on mobile broadband
     * connections.
     */
    require_mppe?: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    require_mppe_128?: boolean
}
class SettingPPP {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPP */
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
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
     * every n seconds (where n is the specified value).  Note that some PPP
     * peers will respond to echo requests and some will not, and it is not
     * possible to autodetect this.
     */
    lcp_echo_interval: number
    /**
     * If %TRUE, stateful MPPE is used.  See pppd documentation for more
     * information on stateful MPPE.
     */
    mppe_stateful: boolean
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
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuse_eap: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuse_mschap: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuse_mschapv2: boolean
    /**
     * If %TRUE, the PAP authentication method will not be used.
     */
    refuse_pap: boolean
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
     * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
     * session will fail.  Note that MPPE is not used on mobile broadband
     * connections.
     */
    require_mppe: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    require_mppe_128: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPP */
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
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crtscts", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-failure", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-interval", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mppe-stateful", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mru", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-vj-comp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noauth", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nobsdcomp", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeflate", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-chap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-eap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschapv2", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-pap", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe-128", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPP, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingPPP_ConstructProps)
    _init (config?: SettingPPP_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPP
    static $gtype: GObject.Type
}
interface SettingPPPOE_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    /**
     * Password used to authenticate with the PPPoE service.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSettingPPPOE:password property.
     */
    password_flags?: number
    /**
     * If specified, instruct PPPoE to only initiate sessions with access
     * concentrators that provide the specified service.  For most providers,
     * this should be left blank.  It is only required if there are multiple
     * access concentrators or a specific service is known to be required.
     */
    service?: string
    /**
     * Username used to authenticate with the PPPoE service.
     */
    username?: string
}
class SettingPPPOE {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    /**
     * Password used to authenticate with the PPPoE service.
     */
    password: string
    /**
     * Flags indicating how to handle the #NMSettingPPPOE:password property.
     */
    password_flags: number
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    get_password(): string
    get_password_flags(): SettingSecretFlags
    get_service(): string
    get_username(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingPPPOE, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingPPPOE_ConstructProps)
    _init (config?: SettingPPPOE_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingPPPOE
    static $gtype: GObject.Type
}
interface SettingSerial_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingSerial */
    /**
     * Speed to use for communication over the serial port.  Note that this
     * value usually has no effect for mobile broadband modems as they generally
     * ignore speed settings and use the highest available speed.
     */
    baud?: number
    /**
     * Byte-width of the serial communication. The 8 in "8n1" for example.
     */
    bits?: number
    /**
     * Parity setting of the serial port.  Either 'E' for even parity, 'o' for
     * odd parity, or 'n' for no parity.
     */
    parity?: number
    /**
     * Time to delay between each byte sent to the modem, in microseconds.
     */
    send_delay?: number
    /**
     * Number of stop bits for communication on the serial port.  Either 1 or 2.
     * The 1 in "8n1" for example.
     */
    stopbits?: number
}
class SettingSerial {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingSerial */
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
    send_delay: number
    /**
     * Number of stop bits for communication on the serial port.  Either 1 or 2.
     * The 1 in "8n1" for example.
     */
    stopbits: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingSerial */
    get_baud(): number
    get_bits(): number
    get_parity(): number
    get_send_delay(): number
    get_stopbits(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parity", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::send-delay", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stopbits", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingSerial, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingSerial_ConstructProps)
    _init (config?: SettingSerial_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingSerial
    static $gtype: GObject.Type
}
interface SettingTeam_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingTeam */
    /**
     * The JSON configuration for the team network interface.  The property
     * should contain raw JSON configuration data suitable for teamd, because
     * the value is passed directly to teamd. If not specified, the default
     * configuration is used.  See man teamd.conf for the format details.
     */
    config?: string
    /**
     * The name of the virtual in-kernel team network interface
     */
    interface_name?: string
}
class SettingTeam {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeam */
    /**
     * The JSON configuration for the team network interface.  The property
     * should contain raw JSON configuration data suitable for teamd, because
     * the value is passed directly to teamd. If not specified, the default
     * configuration is used.  See man teamd.conf for the format details.
     */
    config: string
    /**
     * The name of the virtual in-kernel team network interface
     */
    interface_name: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeam */
    get_config(): string
    get_interface_name(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeam, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingTeam_ConstructProps)
    _init (config?: SettingTeam_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeam
    static $gtype: GObject.Type
}
interface SettingTeamPort_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    /**
     * The JSON configuration for the team port. The property should contain raw
     * JSON configuration data suitable for teamd, because the value is passed
     * directly to teamd. If not specified, the default configuration is
     * used. See man teamd.conf for the format details.
     */
    config?: string
}
class SettingTeamPort {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    /**
     * The JSON configuration for the team port. The property should contain raw
     * JSON configuration data suitable for teamd, because the value is passed
     * directly to teamd. If not specified, the default configuration is
     * used. See man teamd.conf for the format details.
     */
    config: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    get_config(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingTeamPort, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingTeamPort_ConstructProps)
    _init (config?: SettingTeamPort_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingTeamPort
    static $gtype: GObject.Type
}
interface SettingVPN_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingVPN */
    /**
     * If the VPN service supports persistence, and this property is %TRUE,
     * the VPN will attempt to stay connected across link changes and outages,
     * until explicitly disconnected.
     */
    persistent?: boolean
    /**
     * D-Bus service name of the VPN plugin that this setting uses to connect to
     * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
     * plugin.
     */
    service_type?: string
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    user_name?: string
}
class SettingVPN {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVPN */
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
    service_type: string
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    user_name: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVPN */
    /**
     * Establishes a relationship between `key` and `item` internally in the
     * setting which may be retrieved later.  Should not be used to store passwords
     * or other secrets, which is what nm_setting_vpn_add_secret() is for.
     * @param key a name that uniquely identifies the given value `item`
     * @param item the value to be referenced by `key`
     */
    add_data_item(key: string, item: string): void
    /**
     * Establishes a relationship between `key` and `secret` internally in the
     * setting which may be retrieved later.
     * @param key a name that uniquely identifies the given secret `secret`
     * @param secret the secret to be referenced by `key`
     */
    add_secret(key: string, secret: string): void
    /**
     * Iterates all data items stored in this setting.  It is safe to add, remove,
     * and modify data items inside `func,` though any additions or removals made
     * during iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreach_data_item(func: VPNIterFunc): void
    /**
     * Iterates all secrets stored in this setting.  It is safe to add, remove,
     * and modify secrets inside `func,` though any additions or removals made during
     * iteration will not be part of the iteration.
     * @param func an user provided function
     */
    foreach_secret(func: VPNIterFunc): void
    /**
     * Retrieves the data item of a key/value relationship previously established
     * by nm_setting_vpn_add_data_item().
     * @param key the name of the data item to retrieve
     */
    get_data_item(key: string): string
    /**
     * Gets number of key/value pairs of VPN configuration data.
     */
    get_num_data_items(): number
    /**
     * Gets number of VPN plugin specific secrets in the setting.
     */
    get_num_secrets(): number
    get_persistent(): boolean
    /**
     * Retrieves the secret of a key/value relationship previously established
     * by nm_setting_vpn_add_secret().
     * @param key the name of the secret to retrieve
     */
    get_secret(key: string): string
    /**
     * Returns the service name of the VPN, which identifies the specific VPN
     * plugin that should be used to connect to this VPN.
     */
    get_service_type(): string
    get_user_name(): string
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_data_item().
     * @param key the name of the data item to remove
     */
    remove_data_item(key: string): boolean
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_secret().
     * @param key the name of the secret to remove
     */
    remove_secret(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVPN, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingVPN_ConstructProps)
    _init (config?: SettingVPN_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVPN
    static $gtype: GObject.Type
}
interface SettingVlan_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingVlan */
    /**
     * One or more flags which control the behavior and features of the VLAN
     * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
     * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
     * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
     * master device's operating state), %NM_VLAN_FLAG_MVRP (use of the MVRP
     * protocol).
     */
    flags?: number
    /**
     * The VLAN identifier that the interface created by this connection should
     * be assigned.
     */
    id?: number
    /**
     * If given, specifies the kernel name of the VLAN interface. If not given,
     * a default name will be constructed from the interface described by the
     * parent interface and the #NMSettingVlan:id property, eg "eth2.1". The
     * parent interface may be given by the #NMSettingVlan:parent property or by
     * the #NMSettingWired:mac-address property of an #NMSettingWired setting.
     */
    interface_name?: string
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this VLAN interface should be created.  If this property is
     * not specified, the connection must contain an #NMSettingWired setting
     * with a #NMSettingWired:mac-address property.
     */
    parent?: string
}
class SettingVlan {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingVlan */
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
    interface_name: string
    /**
     * If given, specifies the parent interface name or parent connection UUID
     * from which this VLAN interface should be created.  If this property is
     * not specified, the connection must contain an #NMSettingWired setting
     * with a #NMSettingWired:mac-address property.
     */
    parent: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVlan */
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
     */
    add_priority(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Adds a priority map entry into either the #NMSettingVlan:ingress_priority_map
     * or the #NMSettingVlan:egress_priority_map properties.  The priority map maps
     * the Linux SKB priorities to 802.1p priorities.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
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
    get_interface_name(): string
    /**
     * Returns the number of entries in the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties of this setting.
     * @param map the type of priority map
     */
    get_num_priorities(map: VlanPriorityMap): number
    get_parent(): string
    /**
     * Retrieve one of the entries of the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map properties of this setting.
     * @param map the type of priority map
     * @param idx the zero-based index of the ingress/egress priority map entry
     */
    get_priority(map: VlanPriorityMap, idx: number): [ /* returnType */ boolean, /* out_from */ number, /* out_to */ number ]
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
     * @param from the priority to map to `to`
     * @param to the priority to map `from` to
     */
    remove_priority_by_value(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Removes the priority map `str` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     * @param map the type of priority map
     * @param str the string which contains a priority map, like "3:7"
     */
    remove_priority_str_by_value(map: VlanPriorityMap, str: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingVlan, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingVlan_ConstructProps)
    _init (config?: SettingVlan_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingVlan
    static $gtype: GObject.Type
}
interface SettingWimax_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    network_name?: string
}
class SettingWimax {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    network_name: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWimax */
    /**
     * Returns the MAC address of a WiMAX device which this connection is locked
     * to.
     */
    get_mac_address(): Uint8Array
    /**
     * Returns the WiMAX NSP name (ex "Sprint" or "CLEAR") which identifies the
     * specific WiMAX network this setting describes a connection to.
     */
    get_network_name(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWimax, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWimax_ConstructProps)
    _init (config?: SettingWimax_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWimax
    static $gtype: GObject.Type
}
interface SettingWired_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWired */
    /**
     * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
     * %FALSE, do not allow auto-negotiation, in which case the "speed" and
     * "duplex" properties should be set.
     */
    auto_negotiate?: boolean
    /**
     * If specified, request that the device only use the specified duplex mode.
     * Either "half" or "full".
     */
    duplex?: string
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu?: number
    /**
     * Specific port type to use if the device supports multiple
     * attachment methods.  One of "tp" (Twisted Pair), "aui" (Attachment Unit
     * Interface), "bnc" (Thin Ethernet) or "mii" (Media Independent Interface).
     * If the device supports only one port type, this setting is ignored.
     */
    port?: string
    /**
     * s390 network device type; one of "qeth", "lcs", or "ctc", representing
     * the different types of virtual network devices available on s390 systems.
     */
    s390_nettype?: string
    /**
     * If non-zero, request that the device use only the specified speed.  In
     * Mbit/s, ie 100 == 100Mbit/s.
     */
    speed?: number
}
class SettingWired {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWired */
    /**
     * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
     * %FALSE, do not allow auto-negotiation, in which case the "speed" and
     * "duplex" properties should be set.
     */
    auto_negotiate: boolean
    /**
     * If specified, request that the device only use the specified duplex mode.
     * Either "half" or "full".
     */
    duplex: string
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
     * If non-zero, request that the device use only the specified speed.  In
     * Mbit/s, ie 100 == 100Mbit/s.
     */
    speed: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWired */
    /**
     * Adds a new MAC address to the #NMSettingWired:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     */
    add_mac_blacklist_item(mac: string): boolean
    /**
     * Add an option to the table.  The option is compared to an internal list
     * of allowed options.  Key names may contain only alphanumeric characters
     * (ie [a-zA-Z0-9]).  Adding a new key replaces any existing key/value pair that
     * may already exist.
     * @param key key name for the option
     * @param value value for the option
     */
    add_s390_option(key: string, value: string): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clear_mac_blacklist_items(): void
    get_auto_negotiate(): boolean
    get_cloned_mac_address(): Uint8Array
    get_duplex(): string
    get_mac_address(): Uint8Array
    get_mac_address_blacklist(): any[]
    get_mac_blacklist_item(idx: number): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    /**
     * Returns the number of s390-specific options that should be set for this
     * device when it is activated.  This can be used to retrieve each s390
     * option individually using nm_setting_wired_get_s390_option().
     */
    get_num_s390_options(): number
    get_port(): string
    /**
     * Returns the s390 device type this connection should apply to.  Will be one
     * of 'qeth', 'lcs', or 'ctc'.
     */
    get_s390_nettype(): string
    /**
     * Given an index, return the value of the s390 option at that index.  indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_wired_add_s390_option() and nm_setting_wired_remove_s390_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     * @param idx index of the desired option, from 0 to nm_setting_wired_get_num_s390_options() - 1
     */
    get_s390_option(idx: number): [ /* returnType */ boolean, /* out_key */ string, /* out_value */ string ]
    /**
     * Returns the value associated with the s390-specific option specified by
     * `key,` if it exists.
     * @param key the key for which to retrieve the value
     */
    get_s390_option_by_key(key: string): string
    /**
     * Return the list of s390 subchannels that identify the device that this
     * connection is applicable to.  The connection should only be used in
     * conjunction with that device.
     */
    get_s390_subchannels(): string[]
    get_speed(): number
    /**
     * Returns a list of valid s390 options.
     */
    get_valid_s390_options(): string[]
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    remove_mac_blacklist_item(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     */
    remove_mac_blacklist_item_by_value(mac: string): boolean
    /**
     * Remove the s390-specific option referenced by `key` from the internal option
     * list.
     * @param key key name for the option to remove
     */
    remove_s390_option(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-negotiate", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplex", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::s390-nettype", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWired, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWired_ConstructProps)
    _init (config?: SettingWired_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWired
    static $gtype: GObject.Type
}
interface SettingWireless_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWireless */
    /**
     * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
     * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
     * to the specific band, i.e. if "a" is specified, the device will not
     * associate with the same network in the 2.4GHz band even if the network's
     * settings are compatible.  This setting depends on specific driver
     * capability and may not work with all drivers.
     */
    band?: string
    /**
     * Wireless channel to use for the Wi-Fi connection.  The device will only
     * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
     * channel.  Because channel numbers overlap between bands, this property
     * also requires the "band" property to be set.
     */
    channel?: number
    /**
     * If %TRUE, indicates this network is a non-broadcasting network that hides
     * its SSID.  In this case various workarounds may take place, such as
     * probe-scanning the SSID for more reliable network discovery.  However,
     * these workarounds expose inherent insecurities with hidden SSID networks,
     * and thus hidden SSID networks should be used with caution.
     */
    hidden?: boolean
    /**
     * Wi-Fi network mode; one of "infrastructure", "adhoc" or "ap".  If blank,
     * infrastructure is assumed.
     */
    mode?: string
    /**
     * If non-zero, only transmit packets of the specified size or smaller,
     * breaking larger packets up into multiple Ethernet frames.
     */
    mtu?: number
    /**
     * If set to %FALSE, Wi-Fi power saving behavior is disabled.  If set to
     * %TRUE, Wi-Fi power saving behavior is enabled.  All other values are
     * reserved.  Note that even though only boolean values are allowed, the
     * property type is an unsigned integer to allow for future expansion.
     */
    powersave?: number
    /**
     * If non-zero, directs the device to only use the specified bitrate for
     * communication with the access point.  Units are in Kb/s, ie 5500 = 5.5
     * Mbit/s.  This property is highly driver dependent and not all devices
     * support setting a static bitrate.
     */
    rate?: number
    /**
     * If the wireless connection has any security restrictions, like 802.1x,
     * WEP, or WPA, set this property to
     * %NM_SETTING_WIRELESS_SECURITY_SETTING_NAME and ensure the connection
     * contains a valid #NMSettingWirelessSecurity setting.
     */
    security?: string
    /**
     * If non-zero, directs the device to use the specified transmit power.
     * Units are dBm.  This property is highly driver dependent and not all
     * devices support setting a static transmit power.
     */
    tx_power?: number
}
class SettingWireless {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWireless */
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
    mode: string
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
    security: string
    /**
     * If non-zero, directs the device to use the specified transmit power.
     * Units are dBm.  This property is highly driver dependent and not all
     * devices support setting a static transmit power.
     */
    tx_power: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWireless */
    /**
     * Adds a new MAC address to the #NMSettingWireless:mac-address-blacklist property.
     * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
     */
    add_mac_blacklist_item(mac: string): boolean
    /**
     * Adds a new Wi-Fi AP's BSSID to the previously seen BSSID list of the setting.
     * NetworkManager now tracks previously seen BSSIDs internally so this function
     * no longer has much use. Actually, changes you make using this function will
     * not be preserved.
     * @param bssid the new BSSID to add to the list
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
     */
    ap_security_compatible(s_wireless_sec: SettingWirelessSecurity, ap_flags: TODO_80211ApFlags, ap_wpa: TODO_80211ApSecurityFlags, ap_rsn: TODO_80211ApSecurityFlags, ap_mode: TODO_80211Mode): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clear_mac_blacklist_items(): void
    get_band(): string
    get_bssid(): Uint8Array
    get_channel(): number
    get_cloned_mac_address(): Uint8Array
    get_hidden(): boolean
    get_mac_address(): Uint8Array
    get_mac_address_blacklist(): any[]
    get_mac_blacklist_item(idx: number): string
    get_mode(): string
    get_mtu(): number
    get_num_mac_blacklist_items(): number
    get_num_seen_bssids(): number
    get_powersave(): number
    get_rate(): number
    get_security(): string
    get_seen_bssid(i: number): string
    get_ssid(): Uint8Array
    get_tx_power(): number
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     * @param idx index number of the MAC address
     */
    remove_mac_blacklist_item(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
     */
    remove_mac_blacklist_item_by_value(mac: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::band", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::powersave", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWireless, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWireless_ConstructProps)
    _init (config?: SettingWireless_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWireless
    static $gtype: GObject.Type
}
interface SettingWirelessSecurity_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
     * 802.11 authentication algorithm required by the AP here.  One of "open"
     * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
     * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
     * "leap-username" and "leap-password" properties must be specified.
     */
    auth_alg?: string
    /**
     * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
     * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
     * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
     * any Wi-Fi connection that uses security.
     */
    key_mgmt?: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_password?: string
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leap_password_flags?: number
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_username?: string
    /**
     * Pre-Shared-Key for WPA networks.  If the key is 64-characters long, it
     * must contain only hexadecimal characters and is interpreted as a
     * hexadecimal WPA key.  Otherwise, the key must be between 8 and 63 ASCII
     * characters (as specified in the 802.11i standard) and is interpreted as a
     * WPA passphrase, and is hashed to derive the actual WPA-PSK used when
     * connecting to the Wi-Fi network.
     */
    psk?: string
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
     * property.
     */
    psk_flags?: number
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wep_key_flags?: number
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wep_key_type?: number
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key0?: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key1?: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key2?: string
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key3?: string
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wep_tx_keyidx?: number
}
class SettingWirelessSecurity {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
     * 802.11 authentication algorithm required by the AP here.  One of "open"
     * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
     * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
     * "leap-username" and "leap-password" properties must be specified.
     */
    auth_alg: string
    /**
     * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
     * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
     * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
     * any Wi-Fi connection that uses security.
     */
    key_mgmt: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_password: string
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leap_password_flags: number
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leap_username: string
    /**
     * Pre-Shared-Key for WPA networks.  If the key is 64-characters long, it
     * must contain only hexadecimal characters and is interpreted as a
     * hexadecimal WPA key.  Otherwise, the key must be between 8 and 63 ASCII
     * characters (as specified in the 802.11i standard) and is interpreted as a
     * WPA passphrase, and is hashed to derive the actual WPA-PSK used when
     * connecting to the Wi-Fi network.
     */
    psk: string
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
     * property.
     */
    psk_flags: number
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wep_key_flags: number
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wep_key_type: number
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key0: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key1: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key2: string
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wep_key3: string
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wep_tx_keyidx: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    /**
     * Adds an encryption algorithm to the list of allowed groupwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param group the encryption algorithm to add, one of "wep40", "wep104", "tkip", or "ccmp"
     */
    add_group(group: string): boolean
    /**
     * Adds an encryption algorithm to the list of allowed pairwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     * @param pairwise the encryption algorithm to add, one of "tkip" or "ccmp"
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
    /**
     * Returns the allowed groupwise encryption algorithm from allowed algorithm
     * list.
     * @param i index of an item in the allowed groupwise encryption algorithm list
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
     */
    get_pairwise(i: number): string
    get_proto(i: number): string
    get_psk(): string
    get_psk_flags(): SettingSecretFlags
    get_wep_key(idx: number): string
    get_wep_key_flags(): SettingSecretFlags
    get_wep_key_type(): WepKeyType
    get_wep_tx_keyidx(): number
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
     */
    remove_proto_by_value(proto: string): boolean
    /**
     * Sets a WEP key in the given index.
     * @param idx the index of the key (0..3 inclusive)
     * @param key the WEP key as a string, in either hexadecimal, ASCII, or passphrase form as determiend by the value of the #NMSettingWirelessSecurity:wep-key-type property.
     */
    set_wep_key(idx: number, key: string): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clear_secrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     * @param func function to be called to determine whether a     specific secret should be cleared or not
     */
    clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     * @param b a second #NMSetting to compare with the first
     * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
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
     * @param invert_results this parameter is used internally by libnm-util and should be set to %FALSE.  If %TRUE inverts the meaning of the #NMSettingDiffResult.
     * @param results if the settings differ, on return a hash table mapping the differing keys to one or more %NMSettingDiffResult values OR-ed together.  If the settings do not differ, any hash table passed in is unmodified.  If no hash table is passed in and the settings differ, a new one is created and returned.
     */
    diff(b: Setting, flags: SettingCompareFlags, invert_results: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     * @param func user-supplied function called for each property of the setting
     */
    enumerate_values(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    get_name(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to get flags for
     * @param out_flags on success, the #NMSettingSecretFlags for the secret
     */
    get_secret_flags(secret_name: string, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    need_secrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     * @param secret_name the secret key name to set flags for
     * @param flags the #NMSettingSecretFlags for the secret
     */
    set_secret_flags(secret_name: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
     */
    to_hash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    to_string(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
     */
    update_secrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     * @param all_settings a #GSList of all settings     in the connection from which `setting` came
     */
    verify(all_settings: Setting[]): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of NetworkManager-1.0.NetworkManager.Setting */
    vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean
    vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    vfunc_get_virtual_iface_name(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    vfunc_need_secrets(): string[]
    vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean
    vfunc_update_one_secret(key: string, value: any): number
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-alg", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-mgmt", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-username", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-flags", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-type", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key0", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key1", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key2", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key3", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-tx-keyidx", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: SettingWirelessSecurity, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SettingWirelessSecurity_ConstructProps)
    _init (config?: SettingWirelessSecurity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWirelessSecurity
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.ConnectionClass */
    parent: GObject.ObjectClass
    secrets_updated: (connection: Connection, setting: string) => void
    static name: string
}
class IP4Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Address */
    /**
     * Determines if two #NMIP4Address objects contain the same values.
     * @param other the #NMIP4Address to compare `address` to.
     */
    compare(other: IP4Address): boolean
    /**
     * Copies a given #NMIP4Address object and returns the copy.
     */
    dup(): IP4Address
    /**
     * Gets the IPv4 address property of this address object.
     */
    get_address(): number
    /**
     * Gets the IPv4 default gateway property of this address object.
     */
    get_gateway(): number
    /**
     * Gets the IPv4 address prefix (ie "24" or "30" etc) property of this address
     * object.
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 address property of this object.
     * @param addr the IPv4 address in network byte order
     */
    set_address(addr: number): void
    /**
     * Sets the IPv4 default gateway property of this address object.
     * @param gateway the IPv4 default gateway in network byte order
     */
    set_gateway(gateway: number): void
    /**
     * Sets the IPv4 address prefix.
     * @param prefix the address prefix, a number between 1 and 32 inclusive
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
    static name: string
    static new(): IP4Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Address
}
class IP4Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Route */
    /**
     * Determines if two #NMIP4Route objects contain the same values.
     * @param other the #NMIP4Route to compare `route` to.
     */
    compare(other: IP4Route): boolean
    /**
     * Copies a given #NMIP4Route object and returns the copy.
     */
    dup(): IP4Route
    /**
     * Gets the IPv4 destination address property of this route object.
     */
    get_dest(): number
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    get_metric(): number
    /**
     * Gets the IPv4 address of the next hop of this route.
     */
    get_next_hop(): number
    /**
     * Gets the IPv4 prefix (ie "24" or "30" etc) of this route.
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 destination address property of this route object.
     * @param dest the destination address in network byte order
     */
    set_dest(dest: number): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @param metric the route metric
     */
    set_metric(metric: number): void
    /**
     * Sets the IPv4 address of the next hop of this route.
     * @param next_hop the IPv4 address of the next hop in network byte order
     */
    set_next_hop(next_hop: number): void
    /**
     * Sets the IPv4 prefix of this route.
     * @param prefix the prefix, a number between 1 and 32 inclusive
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
    static name: string
    static new(): IP4Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP4Route
}
class IP6Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Address */
    /**
     * Determines if two #NMIP6Address objects contain the same values.
     * @param other the #NMIP6Address to compare `address` to.
     */
    compare(other: IP6Address): boolean
    /**
     * Copies a given #NMIP6Address object and returns the copy.
     */
    dup(): IP6Address
    /**
     * Gets the IPv6 address property of this address object.
     */
    get_address(): Uint8Array
    /**
     * Gets the IPv6 default gateway property of this address object.
     */
    get_gateway(): Uint8Array
    /**
     * Gets the IPv6 address prefix property of this address object.
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 address property of this object.
     * @param addr the IPv6 address
     */
    set_address(addr?: object | null): void
    /**
     * Sets the IPv6 default gateway property of this address object.
     * @param gateway the IPv6 default gateway
     */
    set_gateway(gateway?: object | null): void
    /**
     * Sets the IPv6 address prefix.
     * @param prefix the address prefix, a number between 0 and 128 inclusive
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
    static name: string
    static new(): IP6Address
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Address
}
class IP6Route {
    /* Methods of NetworkManager-1.0.NetworkManager.IP6Route */
    /**
     * Determines if two #NMIP6Route objects contain the same values.
     * @param other the #NMIP6Route to compare `route` to.
     */
    compare(other: IP6Route): boolean
    /**
     * Copies a given #NMIP6Route object and returns the copy.
     */
    dup(): IP6Route
    /**
     * Gets the IPv6 destination address property of this route object.
     */
    get_dest(): Uint8Array
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    get_metric(): number
    /**
     * Gets the IPv6 address of the next hop of this route.
     */
    get_next_hop(): Uint8Array
    /**
     * Gets the IPv6 prefix (ie "32" or "64" etc) of this route.
     */
    get_prefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 destination address property of this route object.
     * @param dest the destination address
     */
    set_dest(dest?: object | null): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     * @param metric the route metric
     */
    set_metric(metric: number): void
    /**
     * Sets the IPv6 address of the next hop of this route.
     * @param next_hop the IPv6 address of the next hop
     */
    set_next_hop(next_hop?: object | null): void
    /**
     * Sets the IPv6 prefix of this route.
     * @param prefix the prefix, a number between 1 and 128 inclusive
     */
    set_prefix(prefix: number): void
    /**
     * Decreases the reference count of the object.  If the reference count
     * reaches zero, the object will be destroyed.
     */
    unref(): void
    static name: string
    static new(): IP6Route
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): IP6Route
}
abstract class Setting8021xClass {
    /* Fields of NetworkManager-1.0.NetworkManager.Setting8021xClass */
    parent: SettingClass
    static name: string
}
abstract class SettingAdslClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingAdslClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBluetoothClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBluetoothClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBondClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBondClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBridgeClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgeClass */
    parent: SettingClass
    static name: string
}
abstract class SettingBridgePortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgePortClass */
    parent: SettingClass
    static name: string
}
abstract class SettingCdmaClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingCdmaClass */
    parent: SettingClass
    static name: string
}
abstract class SettingClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingClass */
    parent: GObject.ObjectClass
    need_secrets: (setting: Setting) => string[]
    update_one_secret: (setting: Setting, key: string, value: any) => number
    get_secret_flags: (setting: Setting, secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags) => boolean
    set_secret_flags: (setting: Setting, secret_name: string, verify_secret: boolean, flags: SettingSecretFlags) => boolean
    compare_property: (setting: Setting, other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    get_virtual_iface_name: (setting: Setting) => string
    static name: string
}
abstract class SettingConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingConnectionClass */
    parent: SettingClass
    static name: string
}
abstract class SettingDcbClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingDcbClass */
    parent: SettingClass
    static name: string
}
abstract class SettingGenericClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGenericClass */
    parent: SettingClass
    static name: string
}
abstract class SettingGsmClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGsmClass */
    parent: SettingClass
    static name: string
}
abstract class SettingIP4ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass */
    parent: SettingClass
    static name: string
}
abstract class SettingIP6ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass */
    parent: SettingClass
    static name: string
}
abstract class SettingInfinibandClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingInfinibandClass */
    parent: SettingClass
    static name: string
}
abstract class SettingOlpcMeshClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass */
    parent: SettingClass
    static name: string
}
abstract class SettingPPPClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPClass */
    parent: SettingClass
    static name: string
}
abstract class SettingPPPOEClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPOEClass */
    parent: SettingClass
    static name: string
}
abstract class SettingSerialClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingSerialClass */
    parent: SettingClass
    static name: string
}
abstract class SettingTeamClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamClass */
    parent: SettingClass
    static name: string
}
abstract class SettingTeamPortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamPortClass */
    parent: SettingClass
    static name: string
}
abstract class SettingVPNClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVPNClass */
    parent: SettingClass
    static name: string
}
abstract class SettingVlanClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVlanClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWimaxClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWimaxClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWiredClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWiredClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWirelessClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessClass */
    parent: SettingClass
    static name: string
}
abstract class SettingWirelessSecurityClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass */
    parent: SettingClass
    static name: string
}
}
export default NetworkManager;