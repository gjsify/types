/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * NetworkManager-1.0
 */

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
function connectionErrorQuark(): GLib.Quark
function setting8021xErrorQuark(): GLib.Quark
function settingAdslErrorQuark(): GLib.Quark
function settingBluetoothErrorQuark(): GLib.Quark
function settingBondErrorQuark(): GLib.Quark
function settingBridgeErrorQuark(): GLib.Quark
function settingBridgePortErrorQuark(): GLib.Quark
function settingCdmaErrorQuark(): GLib.Quark
function settingConnectionErrorQuark(): GLib.Quark
function settingDcbErrorQuark(): GLib.Quark
function settingErrorQuark(): GLib.Quark
function settingGenericErrorQuark(): GLib.Quark
function settingGsmErrorQuark(): GLib.Quark
function settingInfinibandErrorQuark(): GLib.Quark
function settingIp4ConfigErrorQuark(): GLib.Quark
function settingIp6ConfigErrorQuark(): GLib.Quark
function settingOlpcMeshErrorQuark(): GLib.Quark
function settingPppErrorQuark(): GLib.Quark
function settingPppoeErrorQuark(): GLib.Quark
function settingSerialErrorQuark(): GLib.Quark
function settingTeamErrorQuark(): GLib.Quark
function settingTeamPortErrorQuark(): GLib.Quark
function settingVlanErrorQuark(): GLib.Quark
function settingVpnErrorQuark(): GLib.Quark
function settingWimaxErrorQuark(): GLib.Quark
function settingWiredErrorQuark(): GLib.Quark
function settingWirelessErrorQuark(): GLib.Quark
function settingWirelessSecurityErrorQuark(): GLib.Quark
function utilsApModeSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities): boolean
function utilsBin2hexstr(bytes: string, len: number, finalLen: number): string
function utilsCheckVirtualDeviceCompatibility(virtualType: GObject.Type, otherType: GObject.Type): boolean
function utilsDeinit(): void
function utilsEscapeSsid(ssid: number, len: number): string
function utilsFileIsPkcs12(filename: string): boolean
function utilsFileSearchInPaths(progname: string, tryFirst: string | null, paths: string | null, fileTestFlags: GLib.FileTest, predicate: UtilsFileSearchInPathsPredicate): string
function utilsGvalueHashDup(hash: GLib.HashTable): GLib.HashTable
function utilsHex2byte(hex: string): number
function utilsHexstr2bin(hex: string, len: number): string
function utilsHwaddrAtoba(asc: string, type: number): Uint8Array
function utilsHwaddrAton(asc: string, type: number, buffer?: object | null): number
function utilsHwaddrAtonLen(asc: string, buffer: object | null, length: number): number
function utilsHwaddrLen(type: number): number
function utilsHwaddrNtoa(addr: object | null, type: number): string
function utilsHwaddrNtoaLen(addr: object | null, length: number): string
function utilsHwaddrType(len: number): number
function utilsHwaddrValid(asc: string): boolean
function utilsIfaceValidName(name: string): boolean
function utilsInit(): boolean
function utilsIp4AddressesFromGvalue(value: any): IP4Address[]
function utilsIp4AddressesToGvalue(list: IP4Address[], value: any): void
function utilsIp4GetDefaultPrefix(ip: number): number
function utilsIp4NetmaskToPrefix(netmask: number): number
function utilsIp4PrefixToNetmask(prefix: number): number
function utilsIp4RoutesFromGvalue(value: any): IP4Route[]
function utilsIp4RoutesToGvalue(list: IP4Route[], value: any): void
function utilsIp6AddressesFromGvalue(value: any): IP6Address[]
function utilsIp6AddressesToGvalue(list: IP6Address[], value: any): void
function utilsIp6RoutesFromGvalue(value: any): IP6Route[]
function utilsIp6RoutesToGvalue(list: IP6Route[], value: any): void
function utilsIsEmptySsid(ssid: number, len: number): boolean
function utilsIsUuid(str: string): boolean
function utilsRsaKeyEncrypt(data: Uint8Array, inPassword?: string | null): [ /* returnType */ Uint8Array, /* outPassword */ string | null ]
function utilsRsaKeyEncryptAes(data: Uint8Array, inPassword?: string | null): [ /* returnType */ Uint8Array, /* outPassword */ string | null ]
function utilsSameSsid(ssid1: Uint8Array, ssid2: Uint8Array, ignoreTrailingNull: boolean): boolean
function utilsSecurityValid(type: UtilsSecurityType, wifiCaps: DeviceWifiCapabilities, haveAp: boolean, adhoc: boolean, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags): boolean
function utilsSsidToUtf8(ssid: Uint8Array): string
function utilsUuidGenerate(): string
function utilsUuidGenerateFromString(s: string): string
function utilsWepKeyValid(key: string, wepType: WepKeyType): boolean
function utilsWifiChannelToFreq(channel: number, band: string): number
function utilsWifiFindNextChannel(channel: number, direction: number, band: string): number
function utilsWifiFreqToChannel(freq: number): number
function utilsWifiIsChannelValid(channel: number, band: string): boolean
function utilsWpaPskValid(psk: string): boolean
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Connection */
    /**
     * Adds a #NMSetting to the connection, replacing any previous #NMSetting of the
     * same name which has previously been added to the #NMConnection.  The
     * connection takes ownership of the #NMSetting object and does not increase
     * the setting object's reference count.
     */
    addSetting(setting: Setting): void
    /**
     * Clears and frees any secrets that may be stored in the connection, to avoid
     * keeping secret data in memory when not needed.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMConnection objects for similarity, with comparison behavior
     * modified by a set of flags.  See nm_setting_compare() for a description of
     * each flag's behavior.
     */
    compare(b: Connection, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMConnection objects for similarity, with comparison behavior
     * modified by a set of flags.  See nm_setting_compare() for a description of
     * each flag's behavior.  If the connections differ, settings and keys within
     * each setting that differ are added to the returned `out_settings` hash table.
     * No values are returned, only key names.
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
     */
    duplicate(): Connection
    /**
     * Iterates over the properties of each #NMSetting object in the #NMConnection,
     * calling the supplied user function for each property.
     */
    forEachSettingValue(func: SettingValueIterFn): void
    /**
     * A shortcut to return the type from the connection's #NMSettingConnection.
     */
    getConnectionType(): string
    /**
     * A shortcut to return the ID from the connection's #NMSettingConnection.
     */
    getId(): string
    /**
     * Returns the interface name as stored in NMSettingConnection:interface_name.
     * If the connection contains no NMSettingConnection, it will return %NULL.
     * 
     * For hardware devices and software devices created outside of NetworkManager,
     * this name is used to match the device. for software devices created by
     * NetworkManager, this is the name of the created interface.
     */
    getInterfaceName(): string
    /**
     * Returns the connection's D-Bus path.
     */
    getPath(): string
    /**
     * Gets the #NMSetting with the given #GType, if one has been previously added
     * to the #NMConnection.
     */
    getSetting(settingType: GObject.Type): Setting
    /**
     * A shortcut to return any #NMSetting8021x the connection might contain.
     */
    getSetting8021x(): Setting8021x
    /**
     * A shortcut to return any #NMSettingAdsl the connection might contain.
     */
    getSettingAdsl(): SettingAdsl
    /**
     * A shortcut to return any #NMSettingBluetooth the connection might contain.
     */
    getSettingBluetooth(): SettingBluetooth
    /**
     * A shortcut to return any #NMSettingBond the connection might contain.
     */
    getSettingBond(): SettingBond
    /**
     * A shortcut to return any #NMSettingBridge the connection might contain.
     */
    getSettingBridge(): SettingBridge
    /**
     * A shortcut to return any #NMSettingBridgePort the connection might contain.
     */
    getSettingBridgePort(): SettingBridgePort
    /**
     * Gets the #NMSetting with the given name, if one has been previously added
     * the #NMConnection.
     */
    getSettingByName(name: string): Setting
    /**
     * A shortcut to return any #NMSettingCdma the connection might contain.
     */
    getSettingCdma(): SettingCdma
    /**
     * A shortcut to return any #NMSettingConnection the connection might contain.
     */
    getSettingConnection(): SettingConnection
    /**
     * A shortcut to return any #NMSettingDcb the connection might contain.
     */
    getSettingDcb(): SettingDcb
    /**
     * A shortcut to return any #NMSettingGeneric the connection might contain.
     */
    getSettingGeneric(): SettingGeneric
    /**
     * A shortcut to return any #NMSettingGsm the connection might contain.
     */
    getSettingGsm(): SettingGsm
    /**
     * A shortcut to return any #NMSettingInfiniband the connection might contain.
     */
    getSettingInfiniband(): SettingInfiniband
    /**
     * A shortcut to return any #NMSettingIP4Config the connection might contain.
     */
    getSettingIp4Config(): SettingIP4Config
    /**
     * A shortcut to return any #NMSettingIP6Config the connection might contain.
     */
    getSettingIp6Config(): SettingIP6Config
    /**
     * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
     */
    getSettingOlpcMesh(): SettingOlpcMesh
    /**
     * A shortcut to return any #NMSettingPPP the connection might contain.
     */
    getSettingPpp(): SettingPPP
    /**
     * A shortcut to return any #NMSettingPPPOE the connection might contain.
     */
    getSettingPppoe(): SettingPPPOE
    /**
     * A shortcut to return any #NMSettingSerial the connection might contain.
     */
    getSettingSerial(): SettingSerial
    /**
     * A shortcut to return any #NMSettingTeam the connection might contain.
     */
    getSettingTeam(): SettingTeam
    /**
     * A shortcut to return any #NMSettingTeamPort the connection might contain.
     */
    getSettingTeamPort(): SettingTeamPort
    /**
     * A shortcut to return any #NMSettingVlan the connection might contain.
     */
    getSettingVlan(): SettingVlan
    /**
     * A shortcut to return any #NMSettingVPN the connection might contain.
     */
    getSettingVpn(): SettingVPN
    /**
     * A shortcut to return any #NMSettingWimax the connection might contain.
     */
    getSettingWimax(): SettingWimax
    /**
     * A shortcut to return any #NMSettingWired the connection might contain.
     */
    getSettingWired(): SettingWired
    /**
     * A shortcut to return any #NMSettingWireless the connection might contain.
     */
    getSettingWireless(): SettingWireless
    /**
     * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
     */
    getSettingWirelessSecurity(): SettingWirelessSecurity
    /**
     * A shortcut to return the UUID from the connection's #NMSettingConnection.
     */
    getUuid(): string
    /**
     * Returns the name that nm_device_disambiguate_names() would
     * return for the virtual device that would be created for `connection`.
     * Eg, "VLAN (eth1.1)".
     */
    getVirtualDeviceDescription(): string
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings. This function abstracts all
     * connection types which require this functionality. For all other
     * connection types, this function will return %NULL.
     */
    getVirtualIfaceName(): string
    /**
     * A convenience function to check if the given `connection` is a particular
     * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
     * property of the connection and matches that against `type`.
     */
    isType(type: string): boolean
    /**
     * Returns the name of the first setting object in the connection which would
     * need secrets to make a successful connection.  The returned hints are only
     * intended as a guide to what secrets may be required, because in some
     * circumstances, there is no way to conclusively determine exactly which
     * secrets are needed.
     */
    needSecrets(): [ /* returnType */ string, /* hints */ string[] | null ]
    /**
     * Does some basic normalization and fixup of well known inconsistencies
     * and deprecated fields. If the connection was modified in any way,
     * the output parameter `modified` is set %TRUE.
     * 
     * Finally the connection will be verified and %TRUE returns if the connection
     * is valid. As this function only performs some specific normalization steps
     * it cannot repair all connections. If the connection has errors that
     * cannot be normalized, the connection will not be modified.
     */
    normalize(parameters?: GLib.HashTable | null): [ /* returnType */ boolean, /* modified */ boolean | null ]
    /**
     * Removes the #NMSetting with the given #GType from the #NMConnection.  This
     * operation dereferences the #NMSetting object.
     */
    removeSetting(settingType: GObject.Type): void
    replaceSettings(newSettings: GLib.HashTable): boolean
    /**
     * Deep-copies the settings of `new_conenction` and replaces the settings of `connection`
     * with the copied settings.
     */
    replaceSettingsFromConnection(newConnection: Connection): boolean
    /**
     * Sets the D-Bus path of the connection.  This property is not serialized, and
     * is only for the reference of the caller.  Sets the #NMConnection:path
     * property.
     */
    setPath(path: string): void
    /**
     * Converts the #NMConnection into a #GHashTable describing the connection,
     * suitable for marshalling over D-Bus or serializing.  The hash table mapping
     * is string:#GHashTable with each element in the returned hash representing
     * a #NMSetting object.  The keys are setting object names, and the values
     * are #GHashTables mapping string:GValue, each of which represents the
     * properties of the #NMSetting object.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Update the specified setting's secrets, given a hash table of secrets
     * intended for that setting (deserialized from D-Bus for example).  Will also
     * extract the given setting's secrets hash if given a hash of hashes, as would
     * be returned from nm_connection_to_hash().  If `setting_name` is %NULL, expects
     * a fully serialized #NMConnection as returned by nm_connection_to_hash() and
     * will update all secrets from all settings contained in `secrets`.
     */
    updateSecrets(settingName: string, secrets: GLib.HashTable): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of NetworkManager-1.0.NetworkManager.Connection */
    /**
     * The ::changed signal is emitted when any property of any property
     * (including secrets) of any setting of the connection is modified,
     * or when settings are added or removed.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * The ::secrets-cleared signal is emitted when the secrets of a connection
     * are cleared.
     */
    connect(sigName: "secrets-cleared", callback: (() => void)): number
    on(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-cleared", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-cleared", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "secrets-cleared"): void
    /**
     * The ::secrets-updated signal is emitted when the secrets of a setting
     * have been changed.
     */
    connect(sigName: "secrets-updated", callback: ((settingName: string) => void)): number
    on(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secrets-updated", callback: (settingName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secrets-updated", callback: (settingName: string) => void): NodeJS.EventEmitter
    emit(sigName: "secrets-updated", settingName: string): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static newFromHash(hash: GLib.HashTable): Connection
    /**
     * Create a new #NMSetting object of the desired type, given a setting name.
     */
    static createSetting(name: string): Setting
    /**
     * Returns the #GType of the setting's class for a given setting name.
     */
    static lookupSettingType(name: string): GObject.Type
    /**
     * Returns the #GType of the setting's class for a given setting error quark.
     * Useful for figuring out which setting a returned error is for.
     */
    static lookupSettingTypeByQuark(errorQuark: GLib.Quark): GObject.Type
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
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Setting_ConstructProps)
    _init (config?: Setting_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromHash(settingType: GObject.Type, hash: GLib.HashTable): Setting
    static $gtype: GObject.Type
}
interface Setting8021x_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymousIdentity?: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     */
    caPath?: string
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity?: string
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     */
    pacFile?: string
    /**
     * UTF-8 encoded password used for EAP authentication methods. If both the
     * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
     * property are specified, #NMSetting8021x:password is preferred.
     */
    password?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     */
    passwordFlags?: number
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     */
    passwordRawFlags?: number
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when
     * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * Recognized values are "0" (disabled), "1" (allow unauthenticated
     * provisioning), "2" (allow authenticated provisioning), and "3" (allow
     * both authenticated and unauthenticated provisioning).  See the
     * wpa_supplicant documentation for more details.
     */
    phase1FastProvisioning?: string
    /**
     * Forces use of the new PEAP label during key derivation.  Some RADIUS
     * servers may require forcing the new PEAP label to interoperate with
     * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
     * wpa_supplicant documentation for more details.
     */
    phase1Peaplabel?: string
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in
     * the #NMSetting8021x:eap property.  When unset, the version reported by
     * the server will be used.  Sometimes when using older RADIUS servers, it
     * is necessary to force the client to use a particular PEAP version.  To do
     * so, this property may be set to "0" or "1" to force that specific PEAP
     * version.
     */
    phase1Peapver?: string
    /**
     * Specifies the allowed "phase 2" inner non-EAP authentication methods when
     * an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
     * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     */
    phase2Auth?: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication methods
     * when an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
     * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
     * requires specific parameters for successful authentication; see the
     * wpa_supplicant documentation for more details.
     */
    phase2Autheap?: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     */
    phase2CaPath?: string
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
     * directly is not generally necessary except when returning secrets to
     * NetworkManager; it is generally set automatically when setting the
     * private key by the nm_setting_802_1x_set_phase2_private_key() function.
     */
    phase2PrivateKeyPassword?: string
    /**
     * Flags indicating how to handle the
     * #NMSetting8021x:phase2-private-key-password property.
     */
    phase2PrivateKeyPasswordFlags?: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server during the inner "phase 2"
     * authentication. When unset, no verification of the authentication server
     * certificate's subject is performed.
     */
    phase2SubjectMatch?: string
    /**
     * PIN used for EAP authentication methods.
     */
    pin?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     */
    pinFlags?: number
    /**
     * The password used to decrypt the private key specified in the
     * #NMSetting8021x:private-key property when the private key either uses the
     * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
     * property directly is not generally necessary except when returning
     * secrets to NetworkManager; it is generally set automatically when setting
     * the private key by the nm_setting_802_1x_set_private_key() function.
     */
    privateKeyPassword?: string
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password
     * property.
     */
    privateKeyPasswordFlags?: number
    /**
     * Substring to be matched against the subject of the certificate presented
     * by the authentication server. When unset, no verification of the
     * authentication server certificate's subject is performed.
     */
    subjectMatch?: string
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties.
     */
    systemCaCerts?: boolean
}
class Setting8021x {
    /* Properties of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Anonymous identity string for EAP authentication methods.  Used as the
     * unencrypted identity with EAP types that support different tunneled
     * identity like EAP-TTLS.
     */
    anonymousIdentity: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:ca-cert property.
     */
    caPath: string
    /**
     * Identity string for EAP authentication methods.  Often the user's user or
     * login name.
     */
    identity: string
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
    phase1FastProvisioning: string
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
    phase1Peapver: string
    /**
     * Specifies the allowed "phase 2" inner non-EAP authentication methods when
     * an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
     * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
     * Each "phase 2" inner method requires specific parameters for successful
     * authentication; see the wpa_supplicant documentation for more details.
     */
    phase2Auth: string
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication methods
     * when an EAP method that uses an inner TLS tunnel is specified in the
     * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
     * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
     * requires specific parameters for successful authentication; see the
     * wpa_supplicant documentation for more details.
     */
    phase2Autheap: string
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted
     * certificates to be added to the verification chain in addition to the
     * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
     */
    phase2CaPath: string
    /**
     * The password used to decrypt the "phase 2" private key specified in the
     * #NMSetting8021x:phase2-private-key property when the private key either
     * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
     * directly is not generally necessary except when returning secrets to
     * NetworkManager; it is generally set automatically when setting the
     * private key by the nm_setting_802_1x_set_phase2_private_key() function.
     */
    phase2PrivateKeyPassword: string
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
    phase2SubjectMatch: string
    /**
     * PIN used for EAP authentication methods.
     */
    pin: string
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
    privateKeyPassword: string
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
    subjectMatch: string
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and
     * #NMSetting8021x:phase2-ca-path properties using the system CA directory
     * specified at configure time with the --system-ca-path switch.  The
     * certificates in this directory are added to the verification chain in
     * addition to any certificates specified by the #NMSetting8021x:ca-cert and
     * #NMSetting8021x:phase2-ca-cert properties.
     */
    systemCaCerts: boolean
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting8021x */
    /**
     * Adds an allowed alternate subject name match.  Until at least one
     * match is added, the altSubjectName of the remote authentication
     * server is not verified.
     */
    addAltsubjectMatch(altsubjectMatch: string): boolean
    /**
     * Adds an allowed EAP method.  The setting is not valid until at least one
     * EAP method has been added.  See #NMSetting8021x:eap property for a list of
     * allowed EAP methods.
     */
    addEapMethod(eap: string): boolean
    /**
     * Adds an allowed alternate subject name match for "phase 2".  Until
     * at least one match is added, the altSubjectName of the "phase 2"
     * remote authentication server is not verified.
     */
    addPhase2AltsubjectMatch(phase2AltsubjectMatch: string): boolean
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
     */
    getAltsubjectMatch(i: number): string
    /**
     * Returns the anonymous identifier used by some EAP methods (like TTLS) to
     * authenticate the user in the outer unencrypted "phase 1" authentication.  The
     * inner "phase 2" authentication will use the #NMSetting8021x:identity in
     * a secure form, if applicable for that EAP method.
     */
    getAnonymousIdentity(): string
    /**
     * Returns the CA certificate blob if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    getCaCertBlob(): Uint8Array
    /**
     * Returns the CA certificate path if the CA certificate is stored using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use a
     * CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    getCaCertPath(): string
    /**
     * Returns the scheme used to store the CA certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_ca_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_ca_cert_path().
     */
    getCaCertScheme(): Setting8021xCKScheme
    /**
     * Returns the path of the CA certificate directory if previously set.  Systems
     * will often have a directory that contains multiple individual CA certificates
     * which the supplicant can then add to the verification chain.  This may be
     * used in addition to the #NMSetting8021x:ca-cert property to add more CA
     * certificates for verifying the network to client.
     */
    getCaPath(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getClientCertBlob(): Uint8Array
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getClientCertPath(): string
    /**
     * Returns the scheme used to store the client certificate.  If the returned scheme
     * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_client_cert_blob();
     * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_client_cert_path().
     */
    getClientCertScheme(): Setting8021xCKScheme
    /**
     * Returns the name of the allowed EAP method at index `i`.
     */
    getEapMethod(i: number): string
    /**
     * Returns the identifier used by some EAP methods (like TLS) to
     * authenticate the user.  Often this is a username or login name.
     */
    getIdentity(): string
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:altsubject-matches property of this setting.
     */
    getNumAltsubjectMatches(): number
    /**
     * Returns the number of eap methods allowed for use when connecting to the
     * network.  Generally only one EAP method is used.  Use the functions
     * nm_setting_802_1x_get_eap_method(), nm_setting_802_1x_add_eap_method(),
     * and nm_setting_802_1x_remove_eap_method() for adding, removing, and retrieving
     * allowed EAP methods.
     */
    getNumEapMethods(): number
    /**
     * Returns the number of entries in the
     * #NMSetting8021x:phase2-altsubject-matches property of this setting.
     */
    getNumPhase2AltsubjectMatches(): number
    /**
     * Returns the file containing PAC credentials used by EAP-FAST method.
     */
    getPacFile(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPasswordRaw(): Uint8Array
    getPasswordRawFlags(): SettingSecretFlags
    getPhase1FastProvisioning(): string
    getPhase1Peaplabel(): string
    getPhase1Peapver(): string
    /**
     * Returns the "phase 2" altSubjectName match at index `i`.
     */
    getPhase2AltsubjectMatch(i: number): string
    getPhase2Auth(): string
    getPhase2Autheap(): string
    /**
     * Returns the "phase 2" CA certificate blob if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    getPhase2CaCertBlob(): Uint8Array
    /**
     * Returns the "phase 2" CA certificate path if the CA certificate is stored
     * using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use
     * a CA certificate (LEAP for example), and those that can take advantage of the
     * CA certificate allow it to be unset.  Note that lack of a CA certificate
     * reduces security by allowing man-in-the-middle attacks, because the identity
     * of the network cannot be confirmed by the client.
     */
    getPhase2CaCertPath(): string
    /**
     * Returns the scheme used to store the "phase 2" CA certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_ca_cert_blob(); if %NM_SETTING_802_1X_CK_SCHEME_PATH,
     * use nm_setting_802_1x_get_ca_cert_path().
     */
    getPhase2CaCertScheme(): Setting8021xCKScheme
    /**
     * Returns the path of the "phase 2" CA certificate directory if previously set.
     * Systems will often have a directory that contains multiple individual CA
     * certificates which the supplicant can then add to the verification chain.
     * This may be used in addition to the #NMSetting8021x:phase2-ca-cert property
     * to add more CA certificates for verifying the network to client.
     */
    getPhase2CaPath(): string
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getPhase2ClientCertBlob(): Uint8Array
    /**
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getPhase2ClientCertPath(): string
    /**
     * Returns the scheme used to store the "phase 2" client certificate.  If the
     * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
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
     */
    getPhase2PrivateKeyBlob(): Uint8Array
    getPhase2PrivateKeyFormat(): Setting8021xCKFormat
    getPhase2PrivateKeyPassword(): string
    getPhase2PrivateKeyPasswordFlags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getPhase2PrivateKeyPath(): string
    /**
     * Returns the scheme used to store the "phase 2" private key.  If the returned
     * scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     */
    getPhase2PrivateKeyScheme(): Setting8021xCKScheme
    getPhase2SubjectMatch(): string
    getPin(): string
    getPinFlags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     * 
     * WARNING: the private key property is not a "secret" property, and thus
     * unencrypted private key data may be readable by unprivileged users.  Private
     * keys should always be encrypted with a private key password.
     */
    getPrivateKeyBlob(): Uint8Array
    getPrivateKeyFormat(): Setting8021xCKFormat
    getPrivateKeyPassword(): string
    getPrivateKeyPasswordFlags(): SettingSecretFlags
    /**
     * Private keys are used to authenticate the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    getPrivateKeyPath(): string
    /**
     * Returns the scheme used to store the private key.  If the returned scheme is
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
     * nm_setting_802_1x_get_client_cert_blob(); if
     * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
     * nm_setting_802_1x_get_client_cert_path().
     */
    getPrivateKeyScheme(): Setting8021xCKScheme
    getSubjectMatch(): string
    /**
     * Sets the #NMSetting8021x:system-ca-certs property. The
     * #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path
     * properties are ignored if the #NMSetting8021x:system-ca-certs property is
     * %TRUE, in which case a system-wide CA certificate directory specified at
     * compile time (using the --system-ca-path configure option) is used in place
     * of these properties.
     */
    getSystemCaCerts(): boolean
    /**
     * Removes the allowed altSubjectName at the specified index.
     */
    removeAltsubjectMatch(i: number): void
    /**
     * Removes the allowed altSubjectName `altsubject_match`.
     */
    removeAltsubjectMatchByValue(altsubjectMatch: string): boolean
    /**
     * Removes the allowed EAP method at the specified index.
     */
    removeEapMethod(i: number): void
    /**
     * Removes the allowed EAP method `method`.
     */
    removeEapMethodByValue(eap: string): boolean
    /**
     * Removes the allowed "phase 2" altSubjectName at the specified index.
     */
    removePhase2AltsubjectMatch(i: number): void
    /**
     * Removes the allowed "phase 2" altSubjectName `phase2`_altsubject_match.
     */
    removePhase2AltsubjectMatchByValue(phase2AltsubjectMatch: string): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:ca-cert property
     * with the raw certificate data if using the %NM_SETTING_802_1X_CK_SCHEME_BLOB
     * scheme, or with the path to the certificate file if using the
     * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     */
    setCaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    setClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-ca-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     */
    setPhase2CaCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /**
     * Reads a certificate from disk and sets the #NMSetting8021x:phase2-client-cert
     * property with the raw certificate data if using the
     * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
     * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
     * 
     * Client certificates are used to identify the connecting client to the network
     * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
     * authentication method.
     */
    setPhase2ClientCert(certPath: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
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
     */
    setPhase2PrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
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
     */
    setPrivateKey(keyPath: string, password: string, scheme: Setting8021xCKScheme, outFormat: Setting8021xCKFormat): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::anonymous-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anonymous-identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anonymous-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pac-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pac-file", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pac-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-raw-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-raw-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-raw-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-fast-provisioning", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-fast-provisioning", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-fast-provisioning", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peaplabel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peaplabel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peaplabel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase1-peapver", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase1-peapver", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase1-peapver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-auth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-autheap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-autheap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-autheap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-ca-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-ca-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::phase2-subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::phase2-subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::phase2-subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private-key-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::private-key-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subject-match", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subject-match", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::system-ca-certs", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::system-ca-certs", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::system-ca-certs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    passwordFlags?: number
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
    passwordFlags: number
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingAdsl */
    getEncapsulation(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getProtocol(): string
    getUsername(): string
    getVci(): number
    getVpi(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::encapsulation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encapsulation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::encapsulation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vci", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vci", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vci", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::vpi", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vpi", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::vpi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBluetooth */
    /**
     * Gets the Bluetooth address of the remote device which this setting
     * describes a connection to.
     */
    getBdaddr(): Uint8Array
    /**
     * Returns the connection method for communicating with the remote device (i.e.
     * either DUN to a DUN-capable device or PANU to a NAP-capable device).
     */
    getConnectionType(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    interfaceName?: string
}
class SettingBond {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingBond */
    /**
     * The name of the virtual in-kernel bonding network interface
     */
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBond */
    /**
     * Add an option to the table.  The option is compared to an internal list
     * of allowed options.  Option names may contain only alphanumeric characters
     * (ie [a-zA-Z0-9]).  Adding a new name replaces any existing name/value pair
     * that may already exist.
     * 
     * The order of how to set several options is relevant because there are options
     * that conflict with each other.
     */
    addOption(name: string, value: string): boolean
    getInterfaceName(): string
    /**
     * Returns the number of options that should be set for this bond when it
     * is activated. This can be used to retrieve each option individually
     * using nm_setting_bond_get_option().
     */
    getNumOptions(): number
    /**
     * Given an index, return the value of the bonding option at that index.  Indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_bond_add_option() and nm_setting_bond_remove_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     */
    getOption(idx: number): [ /* returnType */ boolean, /* outName */ string, /* outValue */ string ]
    /**
     * Returns the value associated with the bonding option specified by
     * `name,` if it exists.
     */
    getOptionByName(name: string): string
    getOptionDefault(name: string): string
    /**
     * Returns a list of valid bond options.
     */
    getValidOptions(): string[]
    /**
     * Remove the bonding option referenced by `name` from the internal option
     * list.
     */
    removeOption(name: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingBond_ConstructProps)
    _init (config?: SettingBond_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingBond
    /**
     * Checks whether `name` is a valid bond option and `value` is a valid value for
     * the `name`. If `value` is %NULL, the function only validates the option name.
     */
    static validateOption(name: string, value: string): boolean
    static $gtype: GObject.Type
}
interface SettingBridge_ConstructProps extends Setting_ConstructProps {
    /* Constructor properties of NetworkManager-1.0.NetworkManager.SettingBridge */
    /**
     * The Ethernet MAC address aging time, in seconds.
     */
    ageingTime?: number
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     */
    forwardDelay?: number
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     */
    helloTime?: number
    /**
     * The name of the virtual in-kernel bridging network interface
     */
    interfaceName?: string
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     */
    maxAge?: number
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
    interfaceName: string
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridge */
    getAgeingTime(): number
    getForwardDelay(): number
    getHelloTime(): number
    getInterfaceName(): string
    getMacAddress(): Uint8Array
    getMaxAge(): number
    getPriority(): number
    getStp(): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::ageing-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ageing-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ageing-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::forward-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forward-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::forward-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hello-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hello-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hello-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-age", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-age", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    hairpinMode?: boolean
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this
     * port.
     */
    pathCost?: number
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingBridgePort */
    getHairpinMode(): boolean
    getPathCost(): number
    getPriority(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::hairpin-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hairpin-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hairpin-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::path-cost", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path-cost", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::path-cost", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    passwordFlags?: number
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
    passwordFlags: number
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingCdma */
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    gatewayPingTimeout?: number
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
    interfaceName?: string
    /**
     * Interface name of the master device or UUID of the master connection.
     */
    master?: string
    /**
     * %FALSE if the connection can be modified using the provided settings
     * service's D-Bus interface with the right privileges, or %TRUE if the
     * connection is read-only and cannot be modified.
     */
    readOnly?: boolean
    /**
     * Setting name of the device type of this slave's master connection (eg,
     * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
     * slave.
     */
    slaveType?: string
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
    interfaceName: string
    /**
     * Interface name of the master device or UUID of the master connection.
     */
    master: string
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
    slaveType: string
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingConnection */
    /**
     * Adds a permission to the connection's permission list.  At this time, only
     * the "user" permission type is supported, and `pitem` must be a username. See
     * #NMSettingConnection:permissions: for more details.
     */
    addPermission(ptype: string, pitem: string, detail?: string | null): boolean
    /**
     * Adds a new secondary connection UUID to the setting.
     */
    addSecondary(secUuid: string): boolean
    /**
     * Returns the #NMSettingConnection:autoconnect property of the connection.
     */
    getAutoconnect(): boolean
    /**
     * Returns the #NMSettingConnection:type property of the connection.
     */
    getConnectionType(): string
    getGatewayPingTimeout(): number
    /**
     * Returns the #NMSettingConnection:id property of the connection.
     */
    getId(): string
    /**
     * Returns the #NMSettingConnection:interface-name property of the connection.
     */
    getInterfaceName(): string
    /**
     * Returns the #NMSettingConnection:master property of the connection.
     */
    getMaster(): string
    /**
     * Returns the number of entries in the #NMSettingConnection:permissions
     * property of this setting.
     */
    getNumPermissions(): number
    getNumSecondaries(): number
    /**
     * Retrieve one of the entries of the #NMSettingConnection:permissions property
     * of this setting.
     */
    getPermission(idx: number, outPtype: string, outPitem: string, outDetail: string): boolean
    /**
     * Returns the #NMSettingConnection:read-only property of the connection.
     */
    getReadOnly(): boolean
    getSecondary(idx: number): string
    /**
     * Returns the #NMSettingConnection:slave-type property of the connection.
     */
    getSlaveType(): string
    /**
     * Returns the #NMSettingConnection:timestamp property of the connection.
     */
    getTimestamp(): number
    /**
     * Returns the #NMSettingConnection:uuid property of the connection.
     */
    getUuid(): string
    /**
     * Returns the #NMSettingConnection:zone property of the connection.
     */
    getZone(): string
    isSlaveType(type: string): boolean
    /**
     * Checks whether the given username is allowed to view/access this connection.
     */
    permissionsUserAllowed(uname: string): boolean
    /**
     * Removes the permission at index `idx` from the connection.
     */
    removePermission(idx: number): void
    /**
     * Removes the permission from the connection.
     * At this time, only the "user" permission type is supported, and `pitem` must
     * be a username. See #NMSettingConnection:permissions: for more details.
     */
    removePermissionByValue(ptype: string, pitem: string, detail?: string | null): boolean
    /**
     * Removes the secondary coonnection UUID at index `idx`.
     */
    removeSecondary(idx: number): void
    /**
     * Removes the secondary coonnection UUID `sec_uuid`.
     */
    removeSecondaryByValue(secUuid: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoconnect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::autoconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::gateway-ping-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gateway-ping-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::gateway-ping-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::master", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::slave-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slave-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::slave-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zone", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    appFcoeFlags?: number
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
     * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     */
    appFcoeMode?: string
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appFcoePriority?: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
     * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appFipFlags?: number
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
     * default priority.  Only used when the #NMSettingDcb:app-fip-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appFipPriority?: number
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
     * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    appIscsiFlags?: number
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
     * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
     * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    appIscsiPriority?: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityFlowControlFlags?: number
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
     * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
     * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
     */
    priorityGroupFlags?: number
}
class SettingDcb {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingDcb */
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
    appFcoeMode: string
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingDcb */
    getAppFcoeFlags(): SettingDcbFlags
    getAppFcoeMode(): string
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
     */
    setPriorityBandwidth(userPriority: number, bandwidthPercent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-flow-control includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    setPriorityFlowControl(userPriority: number, enabled: boolean): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    setPriorityGroupBandwidth(groupId: number, bandwidthPercent: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    setPriorityGroupId(userPriority: number, groupId: number): void
    /**
     * These values are only valid when #NMSettingDcb:priority-group-flags includes
     * the %NM_SETTING_DCB_FLAG_ENABLE flag.
     */
    setPriorityStrictBandwidth(userPriority: number, strict: boolean): void
    setPriorityTrafficClass(userPriority: number, trafficClass: number): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::app-fcoe-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fcoe-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fcoe-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fcoe-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-fip-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-fip-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-fip-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::app-iscsi-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-iscsi-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::app-iscsi-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-flow-control-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-flow-control-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-flow-control-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-group-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-group-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-group-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    allowedBands?: number
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
    homeOnly?: boolean
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
     * registration.  If the Network ID is specified, NetworkManager will
     * attempt to force the device to register only on the specified network.
     * This can be used to ensure that the device does not roam when direct
     * roaming control of the device is not otherwise possible.
     */
    networkId?: string
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
    networkType?: number
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
    passwordFlags?: number
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin?: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pinFlags?: number
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
    apn: string
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
    networkId: string
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
    passwordFlags: number
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other
     * operations are requested.  Specify the PIN here to allow operation of the
     * device.
     */
    pin: string
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     */
    pinFlags: number
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingGsm */
    getAllowedBands(): number
    getApn(): string
    getHomeOnly(): boolean
    getNetworkId(): string
    getNetworkType(): number
    getNumber(): string
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getPin(): string
    getPinFlags(): SettingSecretFlags
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allowed-bands", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-bands", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-bands", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::apn", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apn", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::apn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::home-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::home-only", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::home-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::number", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::number", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pin-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pin-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    dhcpClientId?: string
    /**
     * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     */
    dhcpHostname?: string
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * Some DHCP servers use this hostname to update DNS databases, essentially
     * providing a static hostname for the computer.  If the
     * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
     * %TRUE, the current persistent hostname of the computer is sent.
     */
    dhcpSendHostname?: boolean
    /**
     * Number of seconds after which the unfinished DHCP transaction fails
     * or zero for default.
     */
    dhcpTimeout?: number
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured nameservers and search domains are ignored and
     * only nameservers and search domains specified in the
     * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
     * any, are used.
     */
    ignoreAutoDns?: boolean
    /**
     * When the method is set to "auto" and this property to %TRUE,
     * automatically configured routes are ignored and only routes specified in
     * the #NMSettingIP4Config:routes property, if any, are used.
     */
    ignoreAutoRoutes?: boolean
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv4
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv6-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv4 configuration fails but IPv6
     * configuration completes successfully.
     */
    mayFail?: boolean
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
    neverDefault?: boolean
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
    routeMetric?: number
}
class SettingIP4Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    /**
     * A string sent to the DHCP server to identify the local machine which the
     * DHCP server may use to customize the DHCP lease and options.
     */
    dhcpClientId: string
    /**
     * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
     * specified name will be sent to the DHCP server when acquiring a lease.
     */
    dhcpHostname: string
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
    method: string
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP4Config */
    /**
     * Adds a new IPv4 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     */
    addAddress(address: IP4Address): boolean
    /**
     * Adds a new DNS server to the setting.
     */
    addDns(dns: number): boolean
    /**
     * Adds a new DNS search domain to the setting.
     */
    addDnsSearch(dnsSearch: string): boolean
    /**
     * Adds a new IPv4 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
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
     */
    getDhcpClientId(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-hostname
     * property.
     */
    getDhcpHostname(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-send-hostname
     * property.
     */
    getDhcpSendHostname(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:dhcp-timeout
     * property.
     */
    getDhcpTimeout(): number
    getDns(i: number): number
    getDnsSearch(i: number): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-dns
     * property.
     */
    getIgnoreAutoDns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:ignore-auto-routes
     * property.
     */
    getIgnoreAutoRoutes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP4Config:may-fail
     * property.
     */
    getMayFail(): boolean
    getMethod(): string
    /**
     * Returns the value contained in the #NMSettingIP4Config:never-default
     * property.
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
     */
    getRouteMetric(): number
    /**
     * Removes the address at index `i`.
     */
    removeAddress(i: number): void
    /**
     * Removes the address `address`.
     */
    removeAddressByValue(address: IP4Address): boolean
    /**
     * Removes the DNS server at index `i`.
     */
    removeDns(i: number): void
    /**
     * Removes the DNS server `dns`.
     */
    removeDnsByValue(dns: number): boolean
    /**
     * Removes the DNS search domain at index `i`.
     */
    removeDnsSearch(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     */
    removeDnsSearchByValue(dnsSearch: string): boolean
    /**
     * Removes the route at index `i`.
     */
    removeRoute(i: number): void
    /**
     * Removes the route `route`.
     */
    removeRouteByValue(route: IP4Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-client-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-send-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-send-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-send-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::dhcp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    dhcpHostname?: string
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured nameservers and search domains are
     * ignored and only nameservers and search domains specified in the
     * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
     * any, are used.
     */
    ignoreAutoDns?: boolean
    /**
     * When the method is set to "auto" or "dhcp" and this property is set to
     * %TRUE, automatically configured routes are ignored and only routes
     * specified in the #NMSettingIP6Config:routes property, if any, are used.
     */
    ignoreAutoRoutes?: boolean
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
     * enabled, it makes the kernel generate a temporary IPv6 address in
     * addition to the public one generated from MAC address via modified
     * EUI-64.  This enhances privacy, but could cause problems in some
     * applications, on the other hand.  The permitted values are: 0: disabled,
     * 1: enabled (prefer public address), 2: enabled (prefer temporary
     * addresses).
     */
    ip6Privacy?: number
    /**
     * If %TRUE, allow overall network configuration to proceed even if IPv6
     * configuration times out.  Note that at least one IP configuration must
     * succeed or overall network configuration will still fail.  For example,
     * in IPv4-only networks, setting this property to %TRUE allows the overall
     * network configuration to succeed if IPv6 configuration fails but IPv4
     * configuration completes successfully.
     */
    mayFail?: boolean
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
    neverDefault?: boolean
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
    routeMetric?: number
}
class SettingIP6Config {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    /**
     * The specified name will be sent to the DHCP server when acquiring a
     * lease.
     */
    dhcpHostname: string
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
    method: string
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingIP6Config */
    /**
     * Adds a new IPv6 address and associated information to the setting.  The
     * given address is duplicated internally and is not changed by this function.
     */
    addAddress(address: IP6Address): boolean
    /**
     * Adds a new DNS server to the setting.
     */
    addDns(dns?: object | null): boolean
    /**
     * Adds a new DNS search domain to the setting.
     */
    addDnsSearch(dnsSearch: string): boolean
    /**
     * Adds a new IPv6 route and associated information to the setting.  The
     * given route is duplicated internally and is not changed by this function.
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
     */
    getDhcpHostname(): string
    getDns(i: number): object | null
    getDnsSearch(i: number): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-dns
     * property.
     */
    getIgnoreAutoDns(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ignore-auto-routes
     * property.
     */
    getIgnoreAutoRoutes(): boolean
    /**
     * Returns the value contained in the #NMSettingIP6Config:ip6-privacy
     * property.
     */
    getIp6Privacy(): SettingIP6ConfigPrivacy
    /**
     * Returns the value contained in the #NMSettingIP6Config:may-fail
     * property.
     */
    getMayFail(): boolean
    getMethod(): string
    /**
     * Returns the value contained in the #NMSettingIP6Config:never-default
     * property.
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
     */
    getRouteMetric(): number
    /**
     * Removes the address at index `i`.
     */
    removeAddress(i: number): void
    /**
     * Removes the address `address`.
     */
    removeAddressByValue(address: IP6Address): boolean
    /**
     * Removes the DNS server at index `i`.
     */
    removeDns(i: number): void
    /**
     * Removes the DNS server at index `i`.
     */
    removeDnsByValue(dns?: object | null): boolean
    /**
     * Removes the DNS search domain at index `i`.
     */
    removeDnsSearch(i: number): void
    /**
     * Removes the DNS search domain `dns_search`.
     */
    removeDnsSearchByValue(dnsSearch: string): boolean
    /**
     * Removes the route at index `i`.
     */
    removeRoute(i: number): void
    /**
     * Removes the route `route`.
     */
    removeRouteByValue(route: IP6Route): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dhcp-hostname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::dhcp-hostname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-dns", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-dns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignore-auto-routes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ignore-auto-routes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ip6-privacy", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ip6-privacy", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ip6-privacy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::may-fail", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::may-fail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::method", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::never-default", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::never-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::route-metric", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::route-metric", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    pKey?: number
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
    transportMode?: string
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
    transportMode: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingInfiniband */
    getMacAddress(): Uint8Array
    getMtu(): number
    /**
     * Returns the P_Key to use for this device. A value of -1 means to
     * use the default P_Key (aka "the P_Key at index 0"). Otherwise it is
     * a 16-bit unsigned integer.
     */
    getPKey(): number
    /**
     * Returns the parent interface name for this device, if set.
     */
    getParent(): string
    /**
     * Returns the transport mode for this device. Either 'datagram' or
     * 'connected'.
     */
    getTransportMode(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::p-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::p-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::p-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transport-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingOlpcMesh */
    getChannel(): number
    getDhcpAnycastAddress(): Uint8Array
    getSsid(): Uint8Array
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    lcpEchoFailure?: number
    /**
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
     * every n seconds (where n is the specified value).  Note that some PPP
     * peers will respond to echo requests and some will not, and it is not
     * possible to autodetect this.
     */
    lcpEchoInterval?: number
    /**
     * If %TRUE, stateful MPPE is used.  See pppd documentation for more
     * information on stateful MPPE.
     */
    mppeStateful?: boolean
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
    noVjComp?: boolean
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
    refuseChap?: boolean
    /**
     * If %TRUE, the EAP authentication method will not be used.
     */
    refuseEap?: boolean
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     */
    refuseMschap?: boolean
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     */
    refuseMschapv2?: boolean
    /**
     * If %TRUE, the PAP authentication method will not be used.
     */
    refusePap?: boolean
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
     * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
     * session will fail.  Note that MPPE is not used on mobile broadband
     * connections.
     */
    requireMppe?: boolean
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
     * required for the PPP session, and the "require-mppe" property must also
     * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
     */
    requireMppe128?: boolean
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
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPP */
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
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::crtscts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::crtscts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::crtscts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-failure", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-failure", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-failure", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::lcp-echo-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lcp-echo-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::lcp-echo-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mppe-stateful", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mppe-stateful", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mppe-stateful", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mru", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mru", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mru", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::no-vj-comp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-vj-comp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::no-vj-comp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::noauth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noauth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::noauth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nobsdcomp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nobsdcomp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nobsdcomp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::nodeflate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodeflate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::nodeflate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-chap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-chap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-chap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-eap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-eap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-eap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-mschapv2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-mschapv2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-mschapv2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refuse-pap", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refuse-pap", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refuse-pap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::require-mppe-128", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::require-mppe-128", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::require-mppe-128", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    passwordFlags?: number
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
    passwordFlags: number
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingPPPOE */
    getPassword(): string
    getPasswordFlags(): SettingSecretFlags
    getService(): string
    getUsername(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    sendDelay?: number
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
    sendDelay: number
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingSerial */
    getBaud(): number
    getBits(): number
    getParity(): number
    getSendDelay(): number
    getStopbits(): number
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baud", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::baud", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::bits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::bits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::send-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::send-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::send-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stopbits", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stopbits", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stopbits", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    interfaceName?: string
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
    interfaceName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeam */
    getConfig(): string
    getInterfaceName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingTeamPort */
    getConfig(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    serviceType?: string
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    userName?: string
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
    serviceType: string
    /**
     * If the VPN connection requires a user name for authentication, that name
     * should be provided here.  If the connection is available to more than one
     * user, and the VPN requires each user to supply a different name, then
     * leave this property empty.  If this property is empty, NetworkManager
     * will automatically supply the username of the user which requested the
     * VPN connection.
     */
    userName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingVPN */
    /**
     * Establishes a relationship between `key` and `item` internally in the
     * setting which may be retrieved later.  Should not be used to store passwords
     * or other secrets, which is what nm_setting_vpn_add_secret() is for.
     */
    addDataItem(key: string, item: string): void
    /**
     * Establishes a relationship between `key` and `secret` internally in the
     * setting which may be retrieved later.
     */
    addSecret(key: string, secret: string): void
    /**
     * Iterates all data items stored in this setting.  It is safe to add, remove,
     * and modify data items inside `func,` though any additions or removals made
     * during iteration will not be part of the iteration.
     */
    foreachDataItem(func: VPNIterFunc): void
    /**
     * Iterates all secrets stored in this setting.  It is safe to add, remove,
     * and modify secrets inside `func,` though any additions or removals made during
     * iteration will not be part of the iteration.
     */
    foreachSecret(func: VPNIterFunc): void
    /**
     * Retrieves the data item of a key/value relationship previously established
     * by nm_setting_vpn_add_data_item().
     */
    getDataItem(key: string): string
    /**
     * Gets number of key/value pairs of VPN configuration data.
     */
    getNumDataItems(): number
    /**
     * Gets number of VPN plugin specific secrets in the setting.
     */
    getNumSecrets(): number
    getPersistent(): boolean
    /**
     * Retrieves the secret of a key/value relationship previously established
     * by nm_setting_vpn_add_secret().
     */
    getSecret(key: string): string
    /**
     * Returns the service name of the VPN, which identifies the specific VPN
     * plugin that should be used to connect to this VPN.
     */
    getServiceType(): string
    getUserName(): string
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_data_item().
     */
    removeDataItem(key: string): boolean
    /**
     * Deletes a key/value relationship previously established by
     * nm_setting_vpn_add_secret().
     */
    removeSecret(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::persistent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::persistent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::service-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    interfaceName?: string
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
    interfaceName: string
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
    readonly gTypeInstance: GObject.TypeInstance
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
     */
    addPriority(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Adds a priority map entry into either the #NMSettingVlan:ingress_priority_map
     * or the #NMSettingVlan:egress_priority_map properties.  The priority map maps
     * the Linux SKB priorities to 802.1p priorities.
     */
    addPriorityStr(map: VlanPriorityMap, str: string): boolean
    /**
     * Clear all the entries from #NMSettingVlan:ingress_priority_map or
     * #NMSettingVlan:egress_priority_map properties.
     */
    clearPriorities(map: VlanPriorityMap): void
    getFlags(): number
    getId(): number
    getInterfaceName(): string
    /**
     * Returns the number of entries in the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties of this setting.
     */
    getNumPriorities(map: VlanPriorityMap): number
    getParent(): string
    /**
     * Retrieve one of the entries of the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map properties of this setting.
     */
    getPriority(map: VlanPriorityMap, idx: number): [ /* returnType */ boolean, /* outFrom */ number, /* outTo */ number ]
    /**
     * Removes the priority map at index `idx` from the
     * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
     * properties.
     */
    removePriority(map: VlanPriorityMap, idx: number): void
    /**
     * Removes the priority map `form:``to` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     */
    removePriorityByValue(map: VlanPriorityMap, from: number, to: number): boolean
    /**
     * Removes the priority map `str` from the #NMSettingVlan:ingress_priority_map
     * or #NMSettingVlan:egress_priority_map (according to `map` argument)
     * properties.
     */
    removePriorityStrByValue(map: VlanPriorityMap, str: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    networkName?: string
}
class SettingWimax {
    /* Properties of NetworkManager-1.0.NetworkManager.SettingWimax */
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection
     * should use.
     */
    networkName: string
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWimax */
    /**
     * Returns the MAC address of a WiMAX device which this connection is locked
     * to.
     */
    getMacAddress(): Uint8Array
    /**
     * Returns the WiMAX NSP name (ex "Sprint" or "CLEAR") which identifies the
     * specific WiMAX network this setting describes a connection to.
     */
    getNetworkName(): string
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    autoNegotiate?: boolean
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
    s390Nettype?: string
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
    autoNegotiate: boolean
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
    s390Nettype: string
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
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWired */
    /**
     * Adds a new MAC address to the #NMSettingWired:mac-address-blacklist property.
     */
    addMacBlacklistItem(mac: string): boolean
    /**
     * Add an option to the table.  The option is compared to an internal list
     * of allowed options.  Key names may contain only alphanumeric characters
     * (ie [a-zA-Z0-9]).  Adding a new key replaces any existing key/value pair that
     * may already exist.
     */
    addS390Option(key: string, value: string): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clearMacBlacklistItems(): void
    getAutoNegotiate(): boolean
    getClonedMacAddress(): Uint8Array
    getDuplex(): string
    getMacAddress(): Uint8Array
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    /**
     * Returns the number of s390-specific options that should be set for this
     * device when it is activated.  This can be used to retrieve each s390
     * option individually using nm_setting_wired_get_s390_option().
     */
    getNumS390Options(): number
    getPort(): string
    /**
     * Returns the s390 device type this connection should apply to.  Will be one
     * of 'qeth', 'lcs', or 'ctc'.
     */
    getS390Nettype(): string
    /**
     * Given an index, return the value of the s390 option at that index.  indexes
     * are *not* guaranteed to be static across modifications to options done by
     * nm_setting_wired_add_s390_option() and nm_setting_wired_remove_s390_option(),
     * and should not be used to refer to options except for short periods of time
     * such as during option iteration.
     */
    getS390Option(idx: number): [ /* returnType */ boolean, /* outKey */ string, /* outValue */ string ]
    /**
     * Returns the value associated with the s390-specific option specified by
     * `key,` if it exists.
     */
    getS390OptionByKey(key: string): string
    /**
     * Return the list of s390 subchannels that identify the device that this
     * connection is applicable to.  The connection should only be used in
     * conjunction with that device.
     */
    getS390Subchannels(): string[]
    getSpeed(): number
    /**
     * Returns a list of valid s390 options.
     */
    getValidS390Options(): string[]
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     */
    removeMacBlacklistItem(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     */
    removeMacBlacklistItemByValue(mac: string): boolean
    /**
     * Remove the s390-specific option referenced by `key` from the internal option
     * list.
     */
    removeS390Option(key: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-negotiate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-negotiate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-negotiate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duplex", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duplex", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::s390-nettype", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::s390-nettype", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::s390-nettype", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::speed", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::speed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    txPower?: number
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
    txPower: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWireless */
    /**
     * Adds a new MAC address to the #NMSettingWireless:mac-address-blacklist property.
     */
    addMacBlacklistItem(mac: string): boolean
    /**
     * Adds a new Wi-Fi AP's BSSID to the previously seen BSSID list of the setting.
     * NetworkManager now tracks previously seen BSSIDs internally so this function
     * no longer has much use. Actually, changes you make using this function will
     * not be preserved.
     */
    addSeenBssid(bssid: string): boolean
    /**
     * Given a #NMSettingWireless and an optional #NMSettingWirelessSecurity,
     * determine if the configuration given by the settings is compatible with
     * the security of an access point using that access point's capability flags
     * and mode.  Useful for clients that wish to filter a set of connections
     * against a set of access points and determine which connections are
     * compatible with which access points.
     */
    apSecurityCompatible(sWirelessSec: SettingWirelessSecurity, apFlags: TODO_80211ApFlags, apWpa: TODO_80211ApSecurityFlags, apRsn: TODO_80211ApSecurityFlags, apMode: TODO_80211Mode): boolean
    /**
     * Removes all blacklisted MAC addresses.
     */
    clearMacBlacklistItems(): void
    getBand(): string
    getBssid(): Uint8Array
    getChannel(): number
    getClonedMacAddress(): Uint8Array
    getHidden(): boolean
    getMacAddress(): Uint8Array
    getMacAddressBlacklist(): any[]
    getMacBlacklistItem(idx: number): string
    getMode(): string
    getMtu(): number
    getNumMacBlacklistItems(): number
    getNumSeenBssids(): number
    getPowersave(): number
    getRate(): number
    getSecurity(): string
    getSeenBssid(i: number): string
    getSsid(): Uint8Array
    getTxPower(): number
    /**
     * Removes the MAC address at index `idx` from the blacklist.
     */
    removeMacBlacklistItem(idx: number): void
    /**
     * Removes the MAC address `mac` from the blacklist.
     */
    removeMacBlacklistItemByValue(mac: string): boolean
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::band", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::band", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::band", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::powersave", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::powersave", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::powersave", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::security", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tx-power", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tx-power", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    authAlg?: string
    /**
     * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
     * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
     * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
     * any Wi-Fi connection that uses security.
     */
    keyMgmt?: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapPassword?: string
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leapPasswordFlags?: number
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapUsername?: string
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
    pskFlags?: number
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
     * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
     * and #NMSettingWirelessSecurity:wep-key3 properties.
     */
    wepKeyFlags?: number
    /**
     * Controls the interpretation of WEP keys.  Allowed values are
     * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
     * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
     * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
     * as a string and will be hashed using the de-facto MD5 method to derive
     * the actual WEP key.
     */
    wepKeyType?: number
    /**
     * Index 0 WEP key.  This is the WEP key used in most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey0?: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey1?: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey2?: string
    /**
     * Index 3 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey3?: string
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
     * index is used by the AP, put that WEP key index here.  Valid values are 0
     * (default key) through 3.  Note that some consumer access points (like the
     * Linksys WRT54G) number the keys 1 - 4.
     */
    wepTxKeyidx?: number
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
    authAlg: string
    /**
     * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
     * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
     * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
     * any Wi-Fi connection that uses security.
     */
    keyMgmt: string
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapPassword: string
    /**
     * Flags indicating how to handle the
     * #NMSettingWirelessSecurity:leap-password property.
     */
    leapPasswordFlags: number
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt =
     * "ieee8021x" and auth-alg = "leap").
     */
    leapUsername: string
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
    wepKey0: string
    /**
     * Index 1 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey1: string
    /**
     * Index 2 WEP key.  This WEP index is not used by most networks.  See the
     * "wep-key-type" property for a description of how this key is interpreted.
     */
    wepKey2: string
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
    wepTxKeyidx: number
    /* Properties of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * The setting's name, which uniquely identifies the setting within the
     * connection.  Each setting type has a name unique to that type, for
     * example "ppp" or "wireless" or "wired".
     */
    name: string
    /* Fields of NetworkManager-1.0.NetworkManager.Setting */
    readonly parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of NetworkManager-1.0.NetworkManager.SettingWirelessSecurity */
    /**
     * Adds an encryption algorithm to the list of allowed groupwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     */
    addGroup(group: string): boolean
    /**
     * Adds an encryption algorithm to the list of allowed pairwise encryption
     * algorithms.  If the list is not empty, then only access points that support
     * one or more of the encryption algorithms in the list will be considered
     * compatible with this connection.
     */
    addPairwise(pairwise: string): boolean
    /**
     * Adds a Wi-Fi security protocol (one of "wpa" or "rsn") to the allowed list;
     * only protocols in this list will be used when finding and connecting to
     * the Wi-Fi network specified by this connection.  For example, if the
     * protocol list contains only "wpa" but the access point for the SSID specified
     * by this connection only supports WPA2/RSN, the connection cannot be used
     * with the access point.
     */
    addProto(proto: string): boolean
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
    getAuthAlg(): string
    /**
     * Returns the allowed groupwise encryption algorithm from allowed algorithm
     * list.
     */
    getGroup(i: number): string
    getKeyMgmt(): string
    getLeapPassword(): string
    getLeapPasswordFlags(): SettingSecretFlags
    getLeapUsername(): string
    getNumGroups(): number
    getNumPairwise(): number
    getNumProtos(): number
    /**
     * Returns the allowed pairwise encryption algorithm from allowed algorithm
     * list.
     */
    getPairwise(i: number): string
    getProto(i: number): string
    getPsk(): string
    getPskFlags(): SettingSecretFlags
    getWepKey(idx: number): string
    getWepKeyFlags(): SettingSecretFlags
    getWepKeyType(): WepKeyType
    getWepTxKeyidx(): number
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     */
    removeGroup(i: number): void
    /**
     * Removes an encryption algorithm from the allowed groupwise encryption
     * algorithm list.
     */
    removeGroupByValue(group: string): boolean
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     */
    removePairwise(i: number): void
    /**
     * Removes an encryption algorithm from the allowed pairwise encryption
     * algorithm list.
     */
    removePairwiseByValue(pairwise: string): boolean
    /**
     * Removes a protocol from the allowed protocol list.
     */
    removeProto(i: number): void
    /**
     * Removes a protocol from the allowed protocol list.
     */
    removeProtoByValue(proto: string): boolean
    /**
     * Sets a WEP key in the given index.
     */
    setWepKey(idx: number, key: string): void
    /* Methods of NetworkManager-1.0.NetworkManager.Setting */
    /**
     * Resets and clears any secrets in the setting.  Secrets should be added to the
     * setting only when needed, and cleared immediately after use to prevent
     * leakage of information.
     */
    clearSecrets(): void
    /**
     * Clears and frees secrets determined by `func`.
     */
    clearSecretsWithFlags(func: SettingClearSecretsWithFlagsFn): void
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.
     */
    compare(b: Setting, flags: SettingCompareFlags): boolean
    /**
     * Compares two #NMSetting objects for similarity, with comparison behavior
     * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
     * for a description of each flag's behavior.  If the settings differ, the keys
     * of each setting that differ from the other are added to `results,` mapped to
     * one or more #NMSettingDiffResult values.
     */
    diff(b: Setting, flags: SettingCompareFlags, invertResults: boolean, results: GLib.HashTable): [ /* returnType */ boolean, /* results */ GLib.HashTable ]
    /**
     * Duplicates a #NMSetting.
     */
    duplicate(): Setting
    /**
     * Iterates over each property of the #NMSetting object, calling the supplied
     * user function for each property.
     */
    enumerateValues(func: SettingValueIterFn): void
    /**
     * Returns the type name of the #NMSetting object
     */
    getName(): string
    /**
     * For a given secret, retrieves the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    getSecretFlags(secretName: string, outFlags: SettingSecretFlags): boolean
    /**
     * Returns the name of the virtual kernel interface which the connection
     * needs to use if specified in the settings.
     */
    getVirtualIfaceName(): string
    /**
     * Returns an array of property names for each secret which may be required
     * to make a successful connection.  The returned hints are only intended as a
     * guide to what secrets may be required, because in some circumstances, there
     * is no way to conclusively determine exactly which secrets are needed.
     */
    needSecrets(): string[]
    /**
     * For a given secret, stores the #NMSettingSecretFlags describing how to
     * handle that secret.
     */
    setSecretFlags(secretName: string, flags: SettingSecretFlags): boolean
    /**
     * Converts the #NMSetting into a #GHashTable mapping each setting property
     * name to a GValue describing that property, suitable for marshalling over
     * D-Bus or serializing.  The mapping is string to GValue.
     */
    toHash(flags: SettingHashFlags): GLib.HashTable
    /**
     * Convert the setting into a string.  For debugging purposes ONLY, should NOT
     * be used for serialization of the setting, or machine-parsed in any way. The
     * output format is not guaranteed to be stable and may change at any time.
     */
    toString(): string
    /**
     * Update the setting's secrets, given a hash table of secrets intended for that
     * setting (deserialized from D-Bus for example).
     */
    updateSecrets(secrets: GLib.HashTable): boolean
    /**
     * Validates the setting.  Each setting's properties have allowed values, and
     * some are dependent on other values (hence the need for `all_settings)`.  The
     * returned #GError contains information about which property of the setting
     * failed validation, and in what way that property failed validation.
     */
    verify(allSettings: Setting[]): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auth-alg", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-alg", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auth-alg", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key-mgmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-mgmt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key-mgmt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-password-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-password-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::leap-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leap-username", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::leap-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::psk-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::psk-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::psk-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key0", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key0", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key0", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key1", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key1", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key2", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key2", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-key3", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-key3", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-key3", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::wep-tx-keyidx", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wep-tx-keyidx", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::wep-tx-keyidx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: SettingWirelessSecurity_ConstructProps)
    _init (config?: SettingWirelessSecurity_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): SettingWirelessSecurity
    static $gtype: GObject.Type
}
abstract class ConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.ConnectionClass */
    readonly parent: GObject.ObjectClass
    readonly secretsUpdated: (connection: Connection, setting: string) => void
    static name: string
}
class IP4Address {
    /* Methods of NetworkManager-1.0.NetworkManager.IP4Address */
    /**
     * Determines if two #NMIP4Address objects contain the same values.
     */
    compare(other: IP4Address): boolean
    /**
     * Copies a given #NMIP4Address object and returns the copy.
     */
    dup(): IP4Address
    /**
     * Gets the IPv4 address property of this address object.
     */
    getAddress(): number
    /**
     * Gets the IPv4 default gateway property of this address object.
     */
    getGateway(): number
    /**
     * Gets the IPv4 address prefix (ie "24" or "30" etc) property of this address
     * object.
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 address property of this object.
     */
    setAddress(addr: number): void
    /**
     * Sets the IPv4 default gateway property of this address object.
     */
    setGateway(gateway: number): void
    /**
     * Sets the IPv4 address prefix.
     */
    setPrefix(prefix: number): void
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
     */
    compare(other: IP4Route): boolean
    /**
     * Copies a given #NMIP4Route object and returns the copy.
     */
    dup(): IP4Route
    /**
     * Gets the IPv4 destination address property of this route object.
     */
    getDest(): number
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    getMetric(): number
    /**
     * Gets the IPv4 address of the next hop of this route.
     */
    getNextHop(): number
    /**
     * Gets the IPv4 prefix (ie "24" or "30" etc) of this route.
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv4 destination address property of this route object.
     */
    setDest(dest: number): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    setMetric(metric: number): void
    /**
     * Sets the IPv4 address of the next hop of this route.
     */
    setNextHop(nextHop: number): void
    /**
     * Sets the IPv4 prefix of this route.
     */
    setPrefix(prefix: number): void
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
     */
    compare(other: IP6Address): boolean
    /**
     * Copies a given #NMIP6Address object and returns the copy.
     */
    dup(): IP6Address
    /**
     * Gets the IPv6 address property of this address object.
     */
    getAddress(): Uint8Array
    /**
     * Gets the IPv6 default gateway property of this address object.
     */
    getGateway(): Uint8Array
    /**
     * Gets the IPv6 address prefix property of this address object.
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 address property of this object.
     */
    setAddress(addr?: object | null): void
    /**
     * Sets the IPv6 default gateway property of this address object.
     */
    setGateway(gateway?: object | null): void
    /**
     * Sets the IPv6 address prefix.
     */
    setPrefix(prefix: number): void
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
     */
    compare(other: IP6Route): boolean
    /**
     * Copies a given #NMIP6Route object and returns the copy.
     */
    dup(): IP6Route
    /**
     * Gets the IPv6 destination address property of this route object.
     */
    getDest(): Uint8Array
    /**
     * Gets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    getMetric(): number
    /**
     * Gets the IPv6 address of the next hop of this route.
     */
    getNextHop(): Uint8Array
    /**
     * Gets the IPv6 prefix (ie "32" or "64" etc) of this route.
     */
    getPrefix(): number
    /**
     * Increases the reference count of the object.
     */
    ref(): void
    /**
     * Sets the IPv6 destination address property of this route object.
     */
    setDest(dest?: object | null): void
    /**
     * Sets the route metric property of this route object; lower values indicate
     * "better" or more preferred routes.
     */
    setMetric(metric: number): void
    /**
     * Sets the IPv6 address of the next hop of this route.
     */
    setNextHop(nextHop?: object | null): void
    /**
     * Sets the IPv6 prefix of this route.
     */
    setPrefix(prefix: number): void
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
    readonly parent: SettingClass
    static name: string
}
abstract class SettingAdslClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingAdslClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBluetoothClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBluetoothClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBondClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBondClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBridgeClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgeClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingBridgePortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingBridgePortClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingCdmaClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingCdmaClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingClass */
    readonly parent: GObject.ObjectClass
    readonly needSecrets: (setting: Setting) => string[]
    readonly updateOneSecret: (setting: Setting, key: string, value: any) => number
    readonly getSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, outFlags: SettingSecretFlags) => boolean
    readonly setSecretFlags: (setting: Setting, secretName: string, verifySecret: boolean, flags: SettingSecretFlags) => boolean
    readonly compareProperty: (setting: Setting, other: Setting, propSpec: GObject.ParamSpec, flags: SettingCompareFlags) => boolean
    readonly getVirtualIfaceName: (setting: Setting) => string
    static name: string
}
abstract class SettingConnectionClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingConnectionClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingDcbClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingDcbClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingGenericClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGenericClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingGsmClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingGsmClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingIP4ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP4ConfigClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingIP6ConfigClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingIP6ConfigClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingInfinibandClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingInfinibandClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingOlpcMeshClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingOlpcMeshClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingPPPClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingPPPOEClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingPPPOEClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingSerialClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingSerialClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingTeamClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingTeamPortClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingTeamPortClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingVPNClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVPNClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingVlanClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingVlanClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWimaxClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWimaxClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWiredClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWiredClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWirelessClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessClass */
    readonly parent: SettingClass
    static name: string
}
abstract class SettingWirelessSecurityClass {
    /* Fields of NetworkManager-1.0.NetworkManager.SettingWirelessSecurityClass */
    readonly parent: SettingClass
    static name: string
}
}
export default NetworkManager;