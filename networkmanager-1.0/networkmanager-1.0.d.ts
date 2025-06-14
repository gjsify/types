/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type DBusGLib from '@girs/dbusglib-1.0';

export namespace NetworkManager {
    /**
     * NetworkManager-1.0
     */

    /**
     * Indicates the 802.11 mode an access point or device is currently in.
     */

    /**
     * Indicates the 802.11 mode an access point or device is currently in.
     */
    export namespace __80211Mode {
        export const $gtype: GObject.GType<__80211Mode>;
    }

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
    }
    /**
     * #NMActiveConnectionState values indicate the state of a connection to a
     * specific network while it is starting, connected, or disconnecting from that
     * network.
     */

    /**
     * #NMActiveConnectionState values indicate the state of a connection to a
     * specific network while it is starting, connected, or disconnecting from that
     * network.
     */
    export namespace ActiveConnectionState {
        export const $gtype: GObject.GType<ActiveConnectionState>;
    }

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
    class ConnectionError extends GLib.Error {
        static $gtype: GObject.GType<ConnectionError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the #NMConnection object
         *   did not contain the required #NMSettingConnection object, which must be
         *   present for all connections
         */
        static CONNECTIONSETTINGNOTFOUND: number;
        /**
         * the 'type' property of the
         *   'connection' setting did not point to a valid connection base type; ie
         *   it was not a hardware-related setting like #NMSettingWired or
         *   #NMSettingWireless.
         */
        static CONNECTIONTYPEINVALID: number;
        /**
         * the #NMConnection object
         *   did not contain the specified #NMSetting object
         */
        static SETTINGNOTFOUND: number;
        /**
         * the #NMConnection object contains
         *   a conflicting setting object
         */
        static INVALIDSETTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMConnection if necessary.
         */
        static quark(): GLib.Quark;
    }

    export namespace ConnectivityState {
        export const $gtype: GObject.GType<ConnectivityState>;
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

    export namespace DeviceState {
        export const $gtype: GObject.GType<DeviceState>;
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

    /**
     * Device state change reason codes
     */
    export namespace DeviceStateReason {
        export const $gtype: GObject.GType<DeviceStateReason>;
    }

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

    /**
     * #NMDeviceType values indicate the type of hardware represented by
     * an #NMDevice.
     */
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }

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

    /**
     * #NMSetting8021xCKFormat values indicate the general type of a certificate
     * or private key
     */
    export namespace Setting8021xCKFormat {
        export const $gtype: GObject.GType<Setting8021xCKFormat>;
    }

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

    /**
     * #NMSetting8021xCKScheme values indicate how a certificate or private key is
     * stored in the setting properties, either as a blob of the item's data, or as
     * a path to a certificate or private key file on the filesystem
     */
    export namespace Setting8021xCKScheme {
        export const $gtype: GObject.GType<Setting8021xCKScheme>;
    }

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
    class Setting8021xError extends GLib.Error {
        static $gtype: GObject.GType<Setting8021xError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSetting8021x if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingAdslError extends GLib.Error {
        static $gtype: GObject.GType<SettingAdslError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingAdsl if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingBluetoothError extends GLib.Error {
        static $gtype: GObject.GType<SettingBluetoothError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the connection
         * did not contain a required type setting, ie for DUN connections the connection
         * must also contain an #NMSettingGsm or #NMSettingCdma as appropriate
         */
        static TYPESETTINGNOTFOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingBluetooth if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingBondError extends GLib.Error {
        static $gtype: GObject.GType<SettingBondError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         */
        static MISSINGPROPERTY: number;
        /**
         * the option was invalid
         */
        static INVALIDOPTION: number;
        /**
         * the option was missing
         * required
         */
        static MISSINGOPTION: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingBond if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingBridgeError extends GLib.Error {
        static $gtype: GObject.GType<SettingBridgeError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingBridge if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingBridgePortError extends GLib.Error {
        static $gtype: GObject.GType<SettingBridgePortError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and
         * is required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingBridgePort if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingCdmaError extends GLib.Error {
        static $gtype: GObject.GType<SettingCdmaError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the required #NMSettingSerial
         * is missing in the connection
         */
        static MISSINGSERIALSETTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingCdma if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * These flags modify the comparison behavior when comparing two settings or
     * two connections.
     */

    /**
     * These flags modify the comparison behavior when comparing two settings or
     * two connections.
     */
    export namespace SettingCompareFlags {
        export const $gtype: GObject.GType<SettingCompareFlags>;
    }

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
    class SettingConnectionError extends GLib.Error {
        static $gtype: GObject.GType<SettingConnectionError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property's value is
         *   invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * a required property is not
         *   present
         */
        static MISSINGPROPERTY: number;
        /**
         * the #NMSetting object
         *   referenced by the setting name contained in the
         *   #NMSettingConnection:type property was not present in the #NMConnection
         */
        static TYPESETTINGNOTFOUND: number;
        /**
         * ip configuration is not
         *   allowed to be present.
         */
        static IPCONFIGNOTALLOWED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingConnection if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingDcbError extends GLib.Error {
        static $gtype: GObject.GType<SettingDcbError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingDcb if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * DCB feature flags.
     */

    /**
     * DCB feature flags.
     */
    export namespace SettingDcbFlags {
        export const $gtype: GObject.GType<SettingDcbFlags>;
    }

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

    /**
     * These values indicate the result of a setting difference operation.
     */
    export namespace SettingDiffResult {
        export const $gtype: GObject.GType<SettingDiffResult>;
    }

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
    class SettingError extends GLib.Error {
        static $gtype: GObject.GType<SettingError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * a property required by the operation
         *   was not found; for example, an attempt to update an invalid secret
         */
        static PROPERTYNOTFOUND: number;
        /**
         * an operation which requires a secret
         *   was attempted on a non-secret property
         */
        static PROPERTYNOTSECRET: number;
        /**
         * the operation requires a property
         *   of a specific type, or the value couldn't be transformed to the same type
         *   as the property being acted upon
         */
        static PROPERTYTYPEMISMATCH: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSetting if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingGenericError extends GLib.Error {
        static $gtype: GObject.GType<SettingGenericError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and
         * is required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingGeneric if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingGsmError extends GLib.Error {
        static $gtype: GObject.GType<SettingGsmError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the required #NMSettingSerial
         * is missing in the connection
         */
        static MISSINGSERIALSETTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingGsm if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * #NMSettingGsmNetworkBand values indicate the allowed frequency bands
     * the device may use when connecting to this network.
     */

    /**
     * #NMSettingGsmNetworkBand values indicate the allowed frequency bands
     * the device may use when connecting to this network.
     */
    export namespace SettingGsmNetworkBand {
        export const $gtype: GObject.GType<SettingGsmNetworkBand>;
    }

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

    /**
     * #NMSettingGsmNetworkType values indicate the allowed access technologies
     * the device may use when connecting to this network.
     */
    export namespace SettingGsmNetworkType {
        export const $gtype: GObject.GType<SettingGsmNetworkType>;
    }

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
        '4G',
    }
    /**
     * These flags determine which properties are added to the resulting hash
     * when calling nm_setting_to_hash().
     */

    /**
     * These flags determine which properties are added to the resulting hash
     * when calling nm_setting_to_hash().
     */
    export namespace SettingHashFlags {
        export const $gtype: GObject.GType<SettingHashFlags>;
    }

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
    class SettingIP4ConfigError extends GLib.Error {
        static $gtype: GObject.GType<SettingIP4ConfigError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the property's value is
         * not valid with the given IP4 method
         */
        static NOTALLOWEDFORMETHOD: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingIP4Config if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingIP6ConfigError extends GLib.Error {
        static $gtype: GObject.GType<SettingIP6ConfigError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the property's value is
         * not valid with the given IPv6 method
         */
        static NOTALLOWEDFORMETHOD: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingIP6Config if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * #NMSettingIP6ConfigPrivacy values indicate if and how IPv6 Privacy
     * Extensions are used (RFC4941).
     */

    /**
     * #NMSettingIP6ConfigPrivacy values indicate if and how IPv6 Privacy
     * Extensions are used (RFC4941).
     */
    export namespace SettingIP6ConfigPrivacy {
        export const $gtype: GObject.GType<SettingIP6ConfigPrivacy>;
    }

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
    class SettingInfinibandError extends GLib.Error {
        static $gtype: GObject.GType<SettingInfinibandError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingInfiniband if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingOlpcMeshError extends GLib.Error {
        static $gtype: GObject.GType<SettingOlpcMeshError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    class SettingPPPError extends GLib.Error {
        static $gtype: GObject.GType<SettingPPPError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * requiring MPPE is not compatible
         * with other setting configuration parameters
         */
        static REQUIREMPPENOTALLOWED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingPPP if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingPPPOEError extends GLib.Error {
        static $gtype: GObject.GType<SettingPPPOEError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * the connection
         * did not contain a required PPP setting for PPP related options
         */
        static MISSINGPPPSETTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingPPPOE if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * These flags indicate specific behavior related to handling of a secret.  Each
     * secret has a corresponding set of these flags which indicate how the secret
     * is to be stored and/or requested when it is needed.
     */

    /**
     * These flags indicate specific behavior related to handling of a secret.  Each
     * secret has a corresponding set of these flags which indicate how the secret
     * is to be stored and/or requested when it is needed.
     */
    export namespace SettingSecretFlags {
        export const $gtype: GObject.GType<SettingSecretFlags>;
    }

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
    class SettingSerialError extends GLib.Error {
        static $gtype: GObject.GType<SettingSerialError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * one of the properties of the
         * setting requires the connection to contain an #NMSettingPPP setting
         */
        static MISSINGPPPSETTING: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingSerial if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingTeamError extends GLib.Error {
        static $gtype: GObject.GType<SettingTeamError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingTeam if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingTeamPortError extends GLib.Error {
        static $gtype: GObject.GType<SettingTeamPortError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and
         * is required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingTeamPort if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingVlanError extends GLib.Error {
        static $gtype: GObject.GType<SettingVlanError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWN: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         *   required
         */
        static MISSINGPROPERTY: number;
        /**
         * the VLAN parent was specified
         *   inconsistently
         */
        static INVALIDPARENT: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingVlan if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingVpnError extends GLib.Error {
        static $gtype: GObject.GType<SettingVpnError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingVPN if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingWimaxError extends GLib.Error {
        static $gtype: GObject.GType<SettingWimaxError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingWimax if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingWiredError extends GLib.Error {
        static $gtype: GObject.GType<SettingWiredError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingWired if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingWirelessError extends GLib.Error {
        static $gtype: GObject.GType<SettingWirelessError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was missing and is
         * required
         */
        static MISSINGPROPERTY: number;
        /**
         * property values require
         * the presence of an #NMSettingWirelessSecurity object in the connection
         */
        static MISSINGSECURITYSETTING: number;
        /**
         * the property channel was
         * set to a value that requires the #NMSettingWireless:band property to be set
         */
        static CHANNELREQUIRESBAND: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingWireless if necessary.
         */
        static quark(): GLib.Quark;
    }

    class SettingWirelessSecurityError extends GLib.Error {
        static $gtype: GObject.GType<SettingWirelessSecurityError>;

        // Static fields

        /**
         * unknown or unclassified error
         */
        static UNKNOWNERROR: number;
        /**
         * the property was invalid
         */
        static INVALIDPROPERTY: number;
        /**
         * the property was
         * missing and is required
         */
        static MISSINGPROPERTY: number;
        /**
         * a property contained
         * a value that requires the connection to contain a #NMSetting8021x setting
         */
        static MISSING8021XSETTING: number;
        /**
         * LEAP authentication
         * was specified but key management was not set to "8021x"
         */
        static LEAPREQUIRES8021X: number;
        /**
         * LEAP authentication
         * was specified but no LEAP username was given
         */
        static LEAPREQUIRESUSERNAME: number;
        /**
         * Shared Key
         * authentication was specified but the setting did not specify WEP as the
         * encryption protocol
         */
        static SHAREDKEYREQUIRESWEP: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Registers an error quark for #NMSettingWired if necessary.
         */
        static quark(): GLib.Quark;
    }

    /**
     * #NMState values indicate the current overall networking state.
     */

    /**
     * #NMState values indicate the current overall networking state.
     */
    export namespace State {
        export const $gtype: GObject.GType<State>;
    }

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

    /**
     * Describes generic security mechanisms that 802.11 access points may offer.
     * Used with nm_utils_security_valid() for checking whether a given access
     * point is compatible with a network device.
     */
    export namespace UtilsSecurityType {
        export const $gtype: GObject.GType<UtilsSecurityType>;
    }

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

    /**
     * VPN connection states
     */
    export namespace VPNConnectionState {
        export const $gtype: GObject.GType<VPNConnectionState>;
    }

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

    /**
     * VPN connection state reasons
     */
    export namespace VPNConnectionStateReason {
        export const $gtype: GObject.GType<VPNConnectionStateReason>;
    }

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

    /**
     * VPN plugin failure reasons
     */
    export namespace VPNPluginFailure {
        export const $gtype: GObject.GType<VPNPluginFailure>;
    }

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

    /**
     * VPN daemon states
     */
    export namespace VPNServiceState {
        export const $gtype: GObject.GType<VPNServiceState>;
    }

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

    /**
     * #NMVlanFlags values control the behavior of the VLAN interface.
     */
    export namespace VlanFlags {
        export const $gtype: GObject.GType<VlanFlags>;
    }

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

    /**
     * A selector for traffic priority maps; these map Linux SKB priorities
     * to 802.1p priorities used in VLANs.
     */
    export namespace VlanPriorityMap {
        export const $gtype: GObject.GType<VlanPriorityMap>;
    }

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
    export namespace WepKeyType {
        export const $gtype: GObject.GType<WepKeyType>;
    }

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
    const CONNECTION_CHANGED: string;
    const CONNECTION_NORMALIZE_PARAM_IP6_CONFIG_METHOD: string;
    const CONNECTION_PATH: string;
    const CONNECTION_SECRETS_CLEARED: string;
    const CONNECTION_SECRETS_UPDATED: string;
    const DBUS_IFACE_SETTINGS: string;
    const DBUS_IFACE_SETTINGS_CONNECTION: string;
    const DBUS_IFACE_SETTINGS_CONNECTION_SECRETS: string;
    const DBUS_INTERFACE: string;
    const DBUS_INTERFACE_VPN: string;
    const DBUS_INTERFACE_VPN_CONNECTION: string;
    const DBUS_INVALID_VPN_CONNECTION: string;
    const DBUS_NO_ACTIVE_VPN_CONNECTION: string;
    const DBUS_NO_VPN_CONNECTIONS: string;
    const DBUS_PATH: string;
    const DBUS_PATH_AGENT_MANAGER: string;
    const DBUS_PATH_SECRET_AGENT: string;
    const DBUS_PATH_SETTINGS: string;
    const DBUS_PATH_SETTINGS_CONNECTION: string;
    const DBUS_PATH_VPN: string;
    const DBUS_PATH_VPN_CONNECTION: string;
    const DBUS_SERVICE: string;
    const DBUS_VPN_ALREADY_STARTED: string;
    const DBUS_VPN_ALREADY_STOPPED: string;
    const DBUS_VPN_BAD_ARGUMENTS: string;
    const DBUS_VPN_ERROR_PREFIX: string;
    const DBUS_VPN_INTERACTIVE_NOT_SUPPORTED: string;
    const DBUS_VPN_SIGNAL_CONNECT_FAILED: string;
    const DBUS_VPN_SIGNAL_IP4_CONFIG: string;
    const DBUS_VPN_SIGNAL_IP_CONFIG_BAD: string;
    const DBUS_VPN_SIGNAL_LAUNCH_FAILED: string;
    const DBUS_VPN_SIGNAL_LOGIN_BANNER: string;
    const DBUS_VPN_SIGNAL_LOGIN_FAILED: string;
    const DBUS_VPN_SIGNAL_STATE_CHANGE: string;
    const DBUS_VPN_SIGNAL_VPN_CONFIG_BAD: string;
    const DBUS_VPN_STARTING_IN_PROGRESS: string;
    const DBUS_VPN_STOPPING_IN_PROGRESS: string;
    const DBUS_VPN_WRONG_STATE: string;
    /**
     * Evaluates to the major version number of NetworkManager which this source
     * is compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version number of NetworkManager which this source
     * compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version number of NetworkManager which this source
     * is compiled against.
     */
    const MINOR_VERSION: number;
    const SETTING_802_1X_ALTSUBJECT_MATCHES: string;
    const SETTING_802_1X_ANONYMOUS_IDENTITY: string;
    const SETTING_802_1X_CA_CERT: string;
    const SETTING_802_1X_CA_PATH: string;
    const SETTING_802_1X_CLIENT_CERT: string;
    const SETTING_802_1X_EAP: string;
    const SETTING_802_1X_IDENTITY: string;
    const SETTING_802_1X_PAC_FILE: string;
    const SETTING_802_1X_PASSWORD: string;
    const SETTING_802_1X_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PASSWORD_RAW: string;
    const SETTING_802_1X_PASSWORD_RAW_FLAGS: string;
    const SETTING_802_1X_PHASE1_FAST_PROVISIONING: string;
    const SETTING_802_1X_PHASE1_PEAPLABEL: string;
    const SETTING_802_1X_PHASE1_PEAPVER: string;
    const SETTING_802_1X_PHASE2_ALTSUBJECT_MATCHES: string;
    const SETTING_802_1X_PHASE2_AUTH: string;
    const SETTING_802_1X_PHASE2_AUTHEAP: string;
    const SETTING_802_1X_PHASE2_CA_CERT: string;
    const SETTING_802_1X_PHASE2_CA_PATH: string;
    const SETTING_802_1X_PHASE2_CLIENT_CERT: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD: string;
    const SETTING_802_1X_PHASE2_PRIVATE_KEY_PASSWORD_FLAGS: string;
    const SETTING_802_1X_PHASE2_SUBJECT_MATCH: string;
    const SETTING_802_1X_PIN: string;
    const SETTING_802_1X_PIN_FLAGS: string;
    const SETTING_802_1X_PRIVATE_KEY: string;
    const SETTING_802_1X_PRIVATE_KEY_PASSWORD: string;
    const SETTING_802_1X_PRIVATE_KEY_PASSWORD_FLAGS: string;
    const SETTING_802_1X_SETTING_NAME: string;
    const SETTING_802_1X_SUBJECT_MATCH: string;
    const SETTING_802_1X_SYSTEM_CA_CERTS: string;
    const SETTING_ADSL_ENCAPSULATION: string;
    const SETTING_ADSL_ENCAPSULATION_LLC: string;
    const SETTING_ADSL_ENCAPSULATION_VCMUX: string;
    const SETTING_ADSL_PASSWORD: string;
    const SETTING_ADSL_PASSWORD_FLAGS: string;
    const SETTING_ADSL_PROTOCOL: string;
    const SETTING_ADSL_PROTOCOL_IPOATM: string;
    const SETTING_ADSL_PROTOCOL_PPPOA: string;
    const SETTING_ADSL_PROTOCOL_PPPOE: string;
    const SETTING_ADSL_SETTING_NAME: string;
    const SETTING_ADSL_USERNAME: string;
    const SETTING_ADSL_VCI: string;
    const SETTING_ADSL_VPI: string;
    const SETTING_BLUETOOTH_BDADDR: string;
    const SETTING_BLUETOOTH_SETTING_NAME: string;
    const SETTING_BLUETOOTH_TYPE: string;
    /**
     * Connection type describing a connection to devices that support the Bluetooth
     * DUN profile.
     */
    const SETTING_BLUETOOTH_TYPE_DUN: string;
    /**
     * Connection type describing a connection to devices that support the Bluetooth
     * NAP (Network Access Point) protocol, which accepts connections via PANU.
     */
    const SETTING_BLUETOOTH_TYPE_PANU: string;
    const SETTING_BOND_INTERFACE_NAME: string;
    const SETTING_BOND_OPTIONS: string;
    const SETTING_BOND_OPTION_AD_SELECT: string;
    const SETTING_BOND_OPTION_ARP_INTERVAL: string;
    const SETTING_BOND_OPTION_ARP_IP_TARGET: string;
    const SETTING_BOND_OPTION_ARP_VALIDATE: string;
    const SETTING_BOND_OPTION_DOWNDELAY: string;
    const SETTING_BOND_OPTION_FAIL_OVER_MAC: string;
    const SETTING_BOND_OPTION_LACP_RATE: string;
    const SETTING_BOND_OPTION_MIIMON: string;
    const SETTING_BOND_OPTION_MODE: string;
    const SETTING_BOND_OPTION_PRIMARY: string;
    const SETTING_BOND_OPTION_PRIMARY_RESELECT: string;
    const SETTING_BOND_OPTION_RESEND_IGMP: string;
    const SETTING_BOND_OPTION_UPDELAY: string;
    const SETTING_BOND_OPTION_USE_CARRIER: string;
    const SETTING_BOND_OPTION_XMIT_HASH_POLICY: string;
    const SETTING_BOND_SETTING_NAME: string;
    const SETTING_BRIDGE_AGEING_TIME: string;
    const SETTING_BRIDGE_FORWARD_DELAY: string;
    const SETTING_BRIDGE_HELLO_TIME: string;
    const SETTING_BRIDGE_INTERFACE_NAME: string;
    const SETTING_BRIDGE_MAC_ADDRESS: string;
    const SETTING_BRIDGE_MAX_AGE: string;
    const SETTING_BRIDGE_PORT_HAIRPIN_MODE: string;
    const SETTING_BRIDGE_PORT_PATH_COST: string;
    const SETTING_BRIDGE_PORT_PRIORITY: string;
    const SETTING_BRIDGE_PORT_SETTING_NAME: string;
    const SETTING_BRIDGE_PRIORITY: string;
    const SETTING_BRIDGE_SETTING_NAME: string;
    const SETTING_BRIDGE_STP: string;
    const SETTING_CDMA_NUMBER: string;
    const SETTING_CDMA_PASSWORD: string;
    const SETTING_CDMA_PASSWORD_FLAGS: string;
    const SETTING_CDMA_SETTING_NAME: string;
    const SETTING_CDMA_USERNAME: string;
    const SETTING_CONNECTION_AUTOCONNECT: string;
    const SETTING_CONNECTION_GATEWAY_PING_TIMEOUT: string;
    const SETTING_CONNECTION_ID: string;
    const SETTING_CONNECTION_INTERFACE_NAME: string;
    const SETTING_CONNECTION_MASTER: string;
    const SETTING_CONNECTION_PERMISSIONS: string;
    const SETTING_CONNECTION_READ_ONLY: string;
    const SETTING_CONNECTION_SECONDARIES: string;
    const SETTING_CONNECTION_SETTING_NAME: string;
    const SETTING_CONNECTION_SLAVE_TYPE: string;
    const SETTING_CONNECTION_TIMESTAMP: string;
    const SETTING_CONNECTION_TYPE: string;
    const SETTING_CONNECTION_UUID: string;
    const SETTING_CONNECTION_ZONE: string;
    const SETTING_DCB_APP_FCOE_FLAGS: string;
    const SETTING_DCB_APP_FCOE_MODE: string;
    const SETTING_DCB_APP_FCOE_PRIORITY: string;
    const SETTING_DCB_APP_FIP_FLAGS: string;
    const SETTING_DCB_APP_FIP_PRIORITY: string;
    const SETTING_DCB_APP_ISCSI_FLAGS: string;
    const SETTING_DCB_APP_ISCSI_PRIORITY: string;
    /**
     * Indicates that the FCoE controller should use "fabric" mode (default)
     */
    const SETTING_DCB_FCOE_MODE_FABRIC: string;
    /**
     * Indicates that the FCoE controller should use "VN2VN" mode.
     */
    const SETTING_DCB_FCOE_MODE_VN2VN: string;
    const SETTING_DCB_PRIORITY_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_FLOW_CONTROL: string;
    const SETTING_DCB_PRIORITY_FLOW_CONTROL_FLAGS: string;
    const SETTING_DCB_PRIORITY_GROUP_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_GROUP_FLAGS: string;
    const SETTING_DCB_PRIORITY_GROUP_ID: string;
    const SETTING_DCB_PRIORITY_STRICT_BANDWIDTH: string;
    const SETTING_DCB_PRIORITY_TRAFFIC_CLASS: string;
    const SETTING_DCB_SETTING_NAME: string;
    const SETTING_GENERIC_SETTING_NAME: string;
    const SETTING_GSM_ALLOWED_BANDS: string;
    const SETTING_GSM_APN: string;
    /**
     * #NM_SETTING_GSM_BANDS_MAX macro indicate the maximal value that can be used
     * as the allowed frequency bands (#NMSettingGsm:allowed-bands property).
     */
    const SETTING_GSM_BANDS_MAX: number;
    const SETTING_GSM_HOME_ONLY: string;
    const SETTING_GSM_NETWORK_ID: string;
    const SETTING_GSM_NETWORK_TYPE: string;
    const SETTING_GSM_NUMBER: string;
    const SETTING_GSM_PASSWORD: string;
    const SETTING_GSM_PASSWORD_FLAGS: string;
    const SETTING_GSM_PIN: string;
    const SETTING_GSM_PIN_FLAGS: string;
    const SETTING_GSM_SETTING_NAME: string;
    const SETTING_GSM_USERNAME: string;
    const SETTING_INFINIBAND_MAC_ADDRESS: string;
    const SETTING_INFINIBAND_MTU: string;
    const SETTING_INFINIBAND_PARENT: string;
    const SETTING_INFINIBAND_P_KEY: string;
    const SETTING_INFINIBAND_SETTING_NAME: string;
    const SETTING_INFINIBAND_TRANSPORT_MODE: string;
    const SETTING_IP4_CONFIG_ADDRESSES: string;
    const SETTING_IP4_CONFIG_DHCP_CLIENT_ID: string;
    const SETTING_IP4_CONFIG_DHCP_HOSTNAME: string;
    const SETTING_IP4_CONFIG_DHCP_SEND_HOSTNAME: string;
    const SETTING_IP4_CONFIG_DHCP_TIMEOUT: string;
    const SETTING_IP4_CONFIG_DNS: string;
    const SETTING_IP4_CONFIG_DNS_SEARCH: string;
    const SETTING_IP4_CONFIG_IGNORE_AUTO_DNS: string;
    const SETTING_IP4_CONFIG_IGNORE_AUTO_ROUTES: string;
    const SETTING_IP4_CONFIG_MAY_FAIL: string;
    const SETTING_IP4_CONFIG_METHOD: string;
    /**
     * IPv4 configuration should be automatically determined via a method appropriate
     * for the hardware interface, ie DHCP or PPP or some other device-specific
     * manner.
     */
    const SETTING_IP4_CONFIG_METHOD_AUTO: string;
    /**
     * This connection does not use or require IPv4 address and it should be disabled.
     */
    const SETTING_IP4_CONFIG_METHOD_DISABLED: string;
    /**
     * IPv4 configuration should be automatically configured for link-local-only
     * operation.
     */
    const SETTING_IP4_CONFIG_METHOD_LINK_LOCAL: string;
    /**
     * All necessary IPv4 configuration (addresses, prefix, DNS, etc) is specified
     * in the setting's properties.
     */
    const SETTING_IP4_CONFIG_METHOD_MANUAL: string;
    /**
     * This connection specifies configuration that allows other computers to
     * connect through it to the default network (usually the Internet).  The
     * connection's interface will be assigned a private address, and a DHCP server,
     * caching DNS server, and Network Address Translation (NAT) functionality will
     * be started on this connection's interface to allow other devices to connect
     * through that interface to the default network.
     */
    const SETTING_IP4_CONFIG_METHOD_SHARED: string;
    const SETTING_IP4_CONFIG_NEVER_DEFAULT: string;
    const SETTING_IP4_CONFIG_ROUTES: string;
    const SETTING_IP4_CONFIG_ROUTE_METRIC: string;
    const SETTING_IP4_CONFIG_SETTING_NAME: string;
    const SETTING_IP6_CONFIG_ADDRESSES: string;
    const SETTING_IP6_CONFIG_DHCP_HOSTNAME: string;
    const SETTING_IP6_CONFIG_DNS: string;
    const SETTING_IP6_CONFIG_DNS_SEARCH: string;
    const SETTING_IP6_CONFIG_IGNORE_AUTO_DNS: string;
    const SETTING_IP6_CONFIG_IGNORE_AUTO_ROUTES: string;
    const SETTING_IP6_CONFIG_IP6_PRIVACY: string;
    const SETTING_IP6_CONFIG_MAY_FAIL: string;
    const SETTING_IP6_CONFIG_METHOD: string;
    /**
     * IPv6 configuration should be automatically determined via a method appropriate
     * for the hardware interface, ie router advertisements, DHCP, or PPP or some
     * other device-specific manner.
     */
    const SETTING_IP6_CONFIG_METHOD_AUTO: string;
    /**
     * IPv6 configuration should be automatically determined via DHCPv6 only and
     * router advertisements should be ignored.
     */
    const SETTING_IP6_CONFIG_METHOD_DHCP: string;
    /**
     * IPv6 is not required or is handled by some other mechanism, and NetworkManager
     * should not configure IPv6 for this connection.
     */
    const SETTING_IP6_CONFIG_METHOD_IGNORE: string;
    /**
     * IPv6 configuration should be automatically configured for link-local-only
     * operation.
     */
    const SETTING_IP6_CONFIG_METHOD_LINK_LOCAL: string;
    /**
     * All necessary IPv6 configuration (addresses, prefix, DNS, etc) is specified
     * in the setting's properties.
     */
    const SETTING_IP6_CONFIG_METHOD_MANUAL: string;
    /**
     * This connection specifies configuration that allows other computers to
     * connect through it to the default network (usually the Internet).  The
     * connection's interface will be assigned a private address, and router
     * advertisements, a caching DNS server, and Network Address Translation (NAT)
     * functionality will be started on this connection's interface to allow other
     * devices to connect through that interface to the default network. (not yet
     * supported for IPv6)
     */
    const SETTING_IP6_CONFIG_METHOD_SHARED: string;
    const SETTING_IP6_CONFIG_NEVER_DEFAULT: string;
    const SETTING_IP6_CONFIG_ROUTES: string;
    const SETTING_IP6_CONFIG_ROUTE_METRIC: string;
    const SETTING_IP6_CONFIG_SETTING_NAME: string;
    const SETTING_NAME: string;
    const SETTING_OLPC_MESH_CHANNEL: string;
    const SETTING_OLPC_MESH_DHCP_ANYCAST_ADDRESS: string;
    const SETTING_OLPC_MESH_SETTING_NAME: string;
    const SETTING_OLPC_MESH_SSID: string;
    const SETTING_PARAM_FUZZY_IGNORE: number;
    const SETTING_PARAM_REQUIRED: number;
    const SETTING_PARAM_SECRET: number;
    const SETTING_PARAM_SERIALIZE: number;
    const SETTING_PPPOE_PASSWORD: string;
    const SETTING_PPPOE_PASSWORD_FLAGS: string;
    const SETTING_PPPOE_SERVICE: string;
    const SETTING_PPPOE_SETTING_NAME: string;
    const SETTING_PPPOE_USERNAME: string;
    const SETTING_PPP_BAUD: string;
    const SETTING_PPP_CRTSCTS: string;
    const SETTING_PPP_LCP_ECHO_FAILURE: string;
    const SETTING_PPP_LCP_ECHO_INTERVAL: string;
    const SETTING_PPP_MPPE_STATEFUL: string;
    const SETTING_PPP_MRU: string;
    const SETTING_PPP_MTU: string;
    const SETTING_PPP_NOAUTH: string;
    const SETTING_PPP_NOBSDCOMP: string;
    const SETTING_PPP_NODEFLATE: string;
    const SETTING_PPP_NO_VJ_COMP: string;
    const SETTING_PPP_REFUSE_CHAP: string;
    const SETTING_PPP_REFUSE_EAP: string;
    const SETTING_PPP_REFUSE_MSCHAP: string;
    const SETTING_PPP_REFUSE_MSCHAPV2: string;
    const SETTING_PPP_REFUSE_PAP: string;
    const SETTING_PPP_REQUIRE_MPPE: string;
    const SETTING_PPP_REQUIRE_MPPE_128: string;
    const SETTING_PPP_SETTING_NAME: string;
    const SETTING_SERIAL_BAUD: string;
    const SETTING_SERIAL_BITS: string;
    const SETTING_SERIAL_PARITY: string;
    const SETTING_SERIAL_SEND_DELAY: string;
    const SETTING_SERIAL_SETTING_NAME: string;
    const SETTING_SERIAL_STOPBITS: string;
    const SETTING_TEAM_CONFIG: string;
    const SETTING_TEAM_INTERFACE_NAME: string;
    const SETTING_TEAM_PORT_CONFIG: string;
    const SETTING_TEAM_PORT_SETTING_NAME: string;
    const SETTING_TEAM_SETTING_NAME: string;
    const SETTING_VLAN_EGRESS_PRIORITY_MAP: string;
    const SETTING_VLAN_FLAGS: string;
    const SETTING_VLAN_ID: string;
    const SETTING_VLAN_INGRESS_PRIORITY_MAP: string;
    const SETTING_VLAN_INTERFACE_NAME: string;
    const SETTING_VLAN_PARENT: string;
    const SETTING_VLAN_SETTING_NAME: string;
    const SETTING_VPN_DATA: string;
    const SETTING_VPN_PERSISTENT: string;
    const SETTING_VPN_SECRETS: string;
    const SETTING_VPN_SERVICE_TYPE: string;
    const SETTING_VPN_SETTING_NAME: string;
    const SETTING_VPN_USER_NAME: string;
    const SETTING_WIMAX_MAC_ADDRESS: string;
    const SETTING_WIMAX_NETWORK_NAME: string;
    const SETTING_WIMAX_SETTING_NAME: string;
    const SETTING_WIRED_AUTO_NEGOTIATE: string;
    const SETTING_WIRED_CLONED_MAC_ADDRESS: string;
    const SETTING_WIRED_DUPLEX: string;
    const SETTING_WIRED_MAC_ADDRESS: string;
    const SETTING_WIRED_MAC_ADDRESS_BLACKLIST: string;
    const SETTING_WIRED_MTU: string;
    const SETTING_WIRED_PORT: string;
    const SETTING_WIRED_S390_NETTYPE: string;
    const SETTING_WIRED_S390_OPTIONS: string;
    const SETTING_WIRED_S390_SUBCHANNELS: string;
    const SETTING_WIRED_SETTING_NAME: string;
    const SETTING_WIRED_SPEED: string;
    const SETTING_WIRELESS_BAND: string;
    const SETTING_WIRELESS_BSSID: string;
    const SETTING_WIRELESS_CHANNEL: string;
    const SETTING_WIRELESS_CLONED_MAC_ADDRESS: string;
    const SETTING_WIRELESS_HIDDEN: string;
    const SETTING_WIRELESS_MAC_ADDRESS: string;
    const SETTING_WIRELESS_MAC_ADDRESS_BLACKLIST: string;
    const SETTING_WIRELESS_MODE: string;
    /**
     * Indicates Ad-Hoc mode where no access point is expected to be present.
     */
    const SETTING_WIRELESS_MODE_ADHOC: string;
    /**
     * Indicates AP/master mode where the wireless device is started as an access
     * point/hotspot.
     */
    const SETTING_WIRELESS_MODE_AP: string;
    /**
     * Indicates infrastructure mode where an access point is expected to be present
     * for this connection.
     */
    const SETTING_WIRELESS_MODE_INFRA: string;
    const SETTING_WIRELESS_MTU: string;
    const SETTING_WIRELESS_POWERSAVE: string;
    const SETTING_WIRELESS_RATE: string;
    const SETTING_WIRELESS_SEC: string;
    const SETTING_WIRELESS_SECURITY_AUTH_ALG: string;
    const SETTING_WIRELESS_SECURITY_GROUP: string;
    const SETTING_WIRELESS_SECURITY_KEY_MGMT: string;
    const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD: string;
    const SETTING_WIRELESS_SECURITY_LEAP_PASSWORD_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_LEAP_USERNAME: string;
    const SETTING_WIRELESS_SECURITY_PAIRWISE: string;
    const SETTING_WIRELESS_SECURITY_PROTO: string;
    const SETTING_WIRELESS_SECURITY_PSK: string;
    const SETTING_WIRELESS_SECURITY_PSK_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_SETTING_NAME: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY0: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY1: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY2: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY3: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY_FLAGS: string;
    const SETTING_WIRELESS_SECURITY_WEP_KEY_TYPE: string;
    const SETTING_WIRELESS_SECURITY_WEP_TX_KEYIDX: string;
    const SETTING_WIRELESS_SEEN_BSSIDS: string;
    const SETTING_WIRELESS_SETTING_NAME: string;
    const SETTING_WIRELESS_SSID: string;
    const SETTING_WIRELESS_TX_POWER: string;
    /**
     * The maximum length of hardware addresses handled by NetworkManager itself,
     * nm_utils_hwaddr_len(), and nm_utils_hwaddr_aton().
     */
    const UTILS_HWADDR_LEN_MAX: number;
    const VLAN_FLAGS_ALL: number;
    const VPN_DBUS_PLUGIN_INTERFACE: string;
    const VPN_DBUS_PLUGIN_PATH: string;
    const VPN_PLUGIN_CAN_PERSIST: string;
    const VPN_PLUGIN_CONFIG_BANNER: string;
    const VPN_PLUGIN_CONFIG_EXT_GATEWAY: string;
    const VPN_PLUGIN_CONFIG_HAS_IP4: string;
    const VPN_PLUGIN_CONFIG_HAS_IP6: string;
    const VPN_PLUGIN_CONFIG_MTU: string;
    const VPN_PLUGIN_CONFIG_TUNDEV: string;
    const VPN_PLUGIN_IP4_CONFIG_ADDRESS: string;
    const VPN_PLUGIN_IP4_CONFIG_DNS: string;
    const VPN_PLUGIN_IP4_CONFIG_DOMAIN: string;
    const VPN_PLUGIN_IP4_CONFIG_DOMAINS: string;
    const VPN_PLUGIN_IP4_CONFIG_INT_GATEWAY: string;
    const VPN_PLUGIN_IP4_CONFIG_MSS: string;
    const VPN_PLUGIN_IP4_CONFIG_NBNS: string;
    const VPN_PLUGIN_IP4_CONFIG_NEVER_DEFAULT: string;
    const VPN_PLUGIN_IP4_CONFIG_PREFIX: string;
    const VPN_PLUGIN_IP4_CONFIG_PTP: string;
    const VPN_PLUGIN_IP4_CONFIG_ROUTES: string;
    const VPN_PLUGIN_IP6_CONFIG_ADDRESS: string;
    const VPN_PLUGIN_IP6_CONFIG_DNS: string;
    const VPN_PLUGIN_IP6_CONFIG_DOMAIN: string;
    const VPN_PLUGIN_IP6_CONFIG_DOMAINS: string;
    const VPN_PLUGIN_IP6_CONFIG_INT_GATEWAY: string;
    const VPN_PLUGIN_IP6_CONFIG_MSS: string;
    const VPN_PLUGIN_IP6_CONFIG_NEVER_DEFAULT: string;
    const VPN_PLUGIN_IP6_CONFIG_PREFIX: string;
    const VPN_PLUGIN_IP6_CONFIG_PTP: string;
    const VPN_PLUGIN_IP6_CONFIG_ROUTES: string;
    /**
     * Registers an error quark for #NMConnection if necessary.
     * @returns the error quark used for #NMConnection errors.
     */
    function connection_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSetting8021x if necessary.
     * @returns the error quark used for #NMSetting8021x errors.
     */
    function setting_802_1x_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingAdsl if necessary.
     * @returns the error quark used for #NMSettingAdsl errors.
     */
    function setting_adsl_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingBluetooth if necessary.
     * @returns the error quark used for #NMSettingBluetooth errors.
     */
    function setting_bluetooth_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingBond if necessary.
     * @returns the error quark used for #NMSettingBond errors.
     */
    function setting_bond_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingBridge if necessary.
     * @returns the error quark used for #NMSettingBridge errors.
     */
    function setting_bridge_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingBridgePort if necessary.
     * @returns the error quark used for #NMSettingBridgePort errors.
     */
    function setting_bridge_port_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingCdma if necessary.
     * @returns the error quark used for #NMSettingCdma errors.
     */
    function setting_cdma_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingConnection if necessary.
     * @returns the error quark used for #NMSettingConnection errors.
     */
    function setting_connection_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingDcb if necessary.
     * @returns the error quark used for #NMSettingDcb errors.
     */
    function setting_dcb_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSetting if necessary.
     * @returns the error quark used for NMSetting errors.
     */
    function setting_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingGeneric if necessary.
     * @returns the error quark used for #NMSettingGeneric errors.
     */
    function setting_generic_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingGsm if necessary.
     * @returns the error quark used for #NMSettingGsm errors.
     */
    function setting_gsm_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingInfiniband if necessary.
     * @returns the error quark used for #NMSettingInfiniband errors.
     */
    function setting_infiniband_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingIP4Config if necessary.
     * @returns the error quark used for #NMSettingIP4Config errors.
     */
    function setting_ip4_config_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingIP6Config if necessary.
     * @returns the error quark used for #NMSettingIP6Config errors.
     */
    function setting_ip6_config_error_quark(): GLib.Quark;
    function setting_olpc_mesh_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingPPP if necessary.
     * @returns the error quark used for #NMSettingPPP errors.
     */
    function setting_ppp_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingPPPOE if necessary.
     * @returns the error quark used for #NMSettingPPPOE errors.
     */
    function setting_pppoe_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingSerial if necessary.
     * @returns the error quark used for #NMSettingSerial errors.
     */
    function setting_serial_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingTeam if necessary.
     * @returns the error quark used for #NMSettingTeam errors.
     */
    function setting_team_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingTeamPort if necessary.
     * @returns the error quark used for #NMSettingTeamPort errors.
     */
    function setting_team_port_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingVlan if necessary.
     * @returns the error quark used for #NMSettingVlan errors.
     */
    function setting_vlan_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingVPN if necessary.
     * @returns the error quark used for #NMSettingVPN errors.
     */
    function setting_vpn_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingWimax if necessary.
     * @returns the error quark used for #NMSettingWimax errors.
     */
    function setting_wimax_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingWired if necessary.
     * @returns the error quark used for #NMSettingWired errors.
     */
    function setting_wired_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingWireless if necessary.
     * @returns the error quark used for #NMSettingWireless errors.
     */
    function setting_wireless_error_quark(): GLib.Quark;
    /**
     * Registers an error quark for #NMSettingWired if necessary.
     * @returns the error quark used for #NMSettingWired errors.
     */
    function setting_wireless_security_error_quark(): GLib.Quark;
    /**
     * Given a set of device capabilities, and a desired security type to check
     * against, determines whether the combination of device capabilities and
     * desired security type are valid for AP/Hotspot connections.
     * @param type the security type to check device capabilities against, e.g. #NMU_SEC_STATIC_WEP
     * @param wifi_caps bitfield of the capabilities of the specific Wi-Fi device, e.g. #NM_WIFI_DEVICE_CAP_CIPHER_WEP40
     * @returns %TRUE if the device capabilities are compatible with the desired @type, %FALSE if they are not.
     */
    function utils_ap_mode_security_valid(
        type: UtilsSecurityType | null,
        wifi_caps: DeviceWifiCapabilities | null,
    ): boolean;
    /**
     * Converts a byte-array `bytes` into a hexadecimal string.
     * If `final_len` is greater than -1, the returned string is terminated at
     * that index (returned_string[final_len] == '\0'),
     * @param bytes an array of bytes
     * @param len the length of the @bytes array
     * @param final_len an index where to cut off the returned string, or -1
     * @returns the textual form of @bytes
     */
    function utils_bin2hexstr(bytes: string, len: number, final_len: number): string;
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
     * @param virtual_type a virtual connection type
     * @param other_type a connection type to test against @virtual_type
     * @returns %TRUE or %FALSE
     */
    function utils_check_virtual_device_compatibility(virtual_type: GObject.GType, other_type: GObject.GType): boolean;
    /**
     * No-op. Although this function still exists for ABI compatibility reasons, it
     * does not have any effect, and does not ever need to be called.
     */
    function utils_deinit(): void;
    /**
     * This function does a quick printable character conversion of the SSID, simply
     * replacing embedded NULLs and non-printable characters with the hexadecimal
     * representation of that character.  Intended for debugging only, should not
     * be used for display of SSIDs.
     * @param ssid pointer to a buffer containing the SSID data
     * @param len length of the SSID data in @ssid
     * @returns pointer to the escaped SSID, which uses an internal static buffer and will be overwritten by subsequent calls to this function
     */
    function utils_escape_ssid(ssid: number, len: number): string;
    /**
     * Utility function to find out if the `filename` is in PKCS#<!-- -->12 format.
     * @param filename name of the file to test
     * @returns %TRUE if the file is PKCS#<!-- -->12, %FALSE if it is not
     */
    function utils_file_is_pkcs12(filename: string): boolean;
    /**
     * Searches for a `progname` file in a list of search `paths`.
     * @param progname the helper program name, like "iptables"   Must be a non-empty string, without path separator (/).
     * @param try_first a custom path to try first before searching.   It is silently ignored if it is empty or not an absolute path.
     * @param paths a %NULL terminated list of search paths.   Can be empty or %NULL, in which case only @try_first is checked.
     * @param file_test_flags the flags passed to g_file_test() when searching   for @progname. Set it to 0 to skip the g_file_test().
     * @param predicate if given, pass the file name to this function   for additional checks. This check is performed after the check for   @file_test_flags. You cannot omit both @file_test_flags and @predicate.
     * @returns the full path to the helper, if found, or %NULL if not found.   The returned string is not owned by the caller, but later   invocations of the function might overwrite it.
     */
    function utils_file_search_in_paths(
        progname: string,
        try_first: string | null,
        paths: string | null,
        file_test_flags: GLib.FileTest | null,
        predicate: UtilsFileSearchInPathsPredicate,
    ): string;
    /**
     * Utility function to duplicate a hash table of #GValues.
     * @param hash a #GHashTable mapping string:GValue
     * @returns a newly allocated duplicated #GHashTable, caller must free the returned hash with g_hash_table_unref() or g_hash_table_destroy()
     */
    function utils_gvalue_hash_dup(
        hash: { [key: string]: any } | GLib.HashTable<any, any>,
    ): GLib.HashTable<string, GObject.Value>;
    /**
     * Converts a hex string (2 characters) into its byte representation.
     * @param hex a string representing a hex byte
     * @returns a byte, or -1 if @hex doesn't represent a hex byte
     */
    function utils_hex2byte(hex: string): number;
    /**
     * Converts a hexadecimal string `hex` into a byte-array. The returned array
     * length is `len/`2.
     * @param hex an hex string
     * @param len the length of the @hex string (it has to be even)
     * @returns a array of bytes, or %NULL on error
     */
    function utils_hexstr2bin(hex: string, len: number): string;
    /**
     * Parses `asc` and converts it to binary form in a #GByteArray. See
     * nm_utils_hwaddr_aton() if you don't want a #GByteArray.
     * @param asc the ASCII representation of a hardware address
     * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
     * @returns a new #GByteArray, or %NULL if @asc couldn't be parsed
     */
    function utils_hwaddr_atoba(asc: string, type: number): Uint8Array;
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
    function utils_hwaddr_aton(asc: string, type: number, buffer?: any | null): number;
    /**
     * Parses `asc` and converts it to binary form in `buffer`.
     * Bytes in `asc` can be sepatared by colons (:), or hyphens (-), but not mixed.
     * @param asc the ASCII representation of a hardware address
     * @param buffer buffer to store the result into
     * @param length the expected length in bytes of the result and the size of the buffer in bytes.
     * @returns @buffer, or %NULL if @asc couldn't be parsed   or would be shorter or longer than @length.
     */
    function utils_hwaddr_aton_len(asc: string, buffer: any | null, length: number): number;
    /**
     * Returns the length in octets of a hardware address of type `type`.
     * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
     * @returns the positive length, or -1 if the type is unknown/unsupported.
     */
    function utils_hwaddr_len(type: number): number;
    /**
     * Converts `addr` to textual form.
     *
     * See also nm_utils_hwaddr_ntoa_len(), which takes a length instead of
     * a type.
     * @param addr a binary hardware address
     * @param type the type of address; either <literal>ARPHRD_ETHER</literal> or   <literal>ARPHRD_INFINIBAND</literal>
     * @returns the textual form of @addr
     */
    function utils_hwaddr_ntoa(addr: any | null, type: number): string;
    /**
     * Converts `addr` to textual form.
     * @param addr a binary hardware address
     * @param length the length of @addr
     * @returns the textual form of @addr
     */
    function utils_hwaddr_ntoa_len(addr: any | null, length: number): string;
    /**
     * Returns the type (either <literal>ARPHRD_ETHER</literal> or
     * <literal>ARPHRD_INFINIBAND</literal>) of the raw address given its length.
     * @param len the length of hardware address in bytes
     * @returns the type, either <literal>ARPHRD_ETHER</literal> or <literal>ARPHRD_INFINIBAND</literal>.  If the length is unexpected, return -1 (unsupported type/length).
     */
    function utils_hwaddr_type(len: number): number;
    /**
     * Parses `asc` to see if it is a valid hardware address of some type.
     * @param asc the ASCII representation of a hardware address
     * @returns %TRUE if @asc appears to be a valid hardware address   of some type, %FALSE if not.
     */
    function utils_hwaddr_valid(asc: string): boolean;
    /**
     * This function is a 1:1 copy of the kernel's interface validation
     * function in net/core/dev.c.
     * @param name Name of interface
     * @returns %TRUE if interface name is valid, otherwise %FALSE is returned.
     */
    function utils_iface_valid_name(name: string): boolean;
    /**
     * Initializes libnm-util; should be called when starting any program that
     * uses libnm-util.  This function can be called more than once.
     * @returns %TRUE if the initialization was successful, %FALSE on failure.
     */
    function utils_init(): boolean;
    /**
     * Utility function to convert a #GPtrArray of #GArrays of #guint32s representing
     * a list of NetworkManager IPv4 addresses (which is a tuple of address, gateway,
     * and prefix) into a #GSList of #NMIP4Address objects.  The specific format of
     * this serialization is not guaranteed to be stable and the #GArray may be
     * extended in the future.
     * @param value #GValue containing a #GPtrArray of #GArrays of #guint32s
     * @returns a newly allocated #GSList of #NMIP4Address objects
     */
    function utils_ip4_addresses_from_gvalue(value: GObject.Value | any): IP4Address[];
    /**
     * Utility function to convert a #GSList of #NMIP4Address objects into a
     * #GPtrArray of #GArrays of #guint32s representing a list of NetworkManager IPv4
     * addresses (which is a tuple of address, gateway, and prefix).   The specific
     * format of this serialization is not guaranteed to be stable and may be
     * extended in the future.
     * @param list a list of #NMIP4Address objects
     * @param value a pointer to a #GValue into which to place the converted addresses, which should be unset by the caller (when no longer needed) with g_value_unset().
     */
    function utils_ip4_addresses_to_gvalue(list: IP4Address[], value: GObject.Value | any): void;
    /**
     * When the Internet was originally set up, various ranges of IP addresses were
     * segmented into three network classes: A, B, and C.  This function will return
     * a prefix that is associated with the IP address specified defining where it
     * falls in the predefined classes.
     * @param ip an IPv4 address (in network byte order)
     * @returns the default class prefix for the given IP
     */
    function utils_ip4_get_default_prefix(ip: number): number;
    function utils_ip4_netmask_to_prefix(netmask: number): number;
    function utils_ip4_prefix_to_netmask(prefix: number): number;
    /**
     * Utility function to convert a #GPtrArray of #GArrays of #guint32s representing
     * a list of NetworkManager IPv4 routes (which is a tuple of route, next hop,
     * prefix, and metric) into a #GSList of #NMIP4Route objects.  The specific
     * format of this serialization is not guaranteed to be stable and may be
     * extended in the future.
     * @param value #GValue containing a #GPtrArray of #GArrays of #guint32s
     * @returns a newly allocated #GSList of #NMIP4Route objects
     */
    function utils_ip4_routes_from_gvalue(value: GObject.Value | any): IP4Route[];
    /**
     * Utility function to convert a #GSList of #NMIP4Route objects into a
     * #GPtrArray of #GArrays of #guint32s representing a list of NetworkManager IPv4
     * routes (which is a tuple of route, next hop, prefix, and metric).   The
     * specific format of this serialization is not guaranteed to be stable and may
     * be extended in the future.
     * @param list a list of #NMIP4Route objects
     * @param value a pointer to a #GValue into which to place the converted routes, which should be unset by the caller (when no longer needed) with g_value_unset().
     */
    function utils_ip4_routes_to_gvalue(list: IP4Route[], value: GObject.Value | any): void;
    /**
     * Utility function to convert a #GPtrArray of #GValueArrays of (#GArray of guchars) and #guint32
     * representing a list of NetworkManager IPv6 addresses (which is a tuple of address,
     * prefix, and gateway), into a #GSList of #NMIP6Address objects.  The specific format of
     * this serialization is not guaranteed to be stable and the #GValueArray may be
     * extended in the future.
     * @param value gvalue containing a GPtrArray of GValueArrays of (GArray of guchars) and #guint32
     * @returns a newly allocated #GSList of #NMIP6Address objects
     */
    function utils_ip6_addresses_from_gvalue(value: GObject.Value | any): IP6Address[];
    /**
     * Utility function to convert a #GSList of #NMIP6Address objects into a
     * #GPtrArray of #GValueArrays representing a list of NetworkManager IPv6 addresses
     * (which is a tuple of address, prefix, and gateway). The specific format of
     * this serialization is not guaranteed to be stable and may be extended in the
     * future.
     * @param list a list of #NMIP6Address objects
     * @param value a pointer to a #GValue into which to place the converted addresses, which should be unset by the caller (when no longer needed) with g_value_unset().
     */
    function utils_ip6_addresses_to_gvalue(list: IP6Address[], value: GObject.Value | any): void;
    /**
     * Utility function #GPtrArray of #GValueArrays of (#GArray of #guchars), #guint32,
     * (#GArray of #guchars), and #guint32 representing a list of NetworkManager IPv6
     * routes (which is a tuple of destination, prefix, next hop, and metric)
     * into a #GSList of #NMIP6Route objects.  The specific format of this serialization
     * is not guaranteed to be stable and may be extended in the future.
     * @param value #GValue containing a #GPtrArray of #GValueArrays of (#GArray of #guchars), #guint32, (#GArray of #guchars), and #guint32
     * @returns a newly allocated #GSList of #NMIP6Route objects
     */
    function utils_ip6_routes_from_gvalue(value: GObject.Value | any): IP6Route[];
    /**
     * Utility function to convert a #GSList of #NMIP6Route objects into a #GPtrArray of
     * #GValueArrays of (#GArray of #guchars), #guint32, (#GArray of #guchars), and #guint32
     * representing a list of NetworkManager IPv6 routes (which is a tuple of destination,
     * prefix, next hop, and metric).  The specific format of this serialization is not
     * guaranteed to be stable and may be extended in the future.
     * @param list a list of #NMIP6Route objects
     * @param value a pointer to a #GValue into which to place the converted routes, which should be unset by the caller (when no longer needed) with g_value_unset().
     */
    function utils_ip6_routes_to_gvalue(list: IP6Route[], value: GObject.Value | any): void;
    /**
     * Different manufacturers use different mechanisms for not broadcasting the
     * AP's SSID.  This function attempts to detect blank/empty SSIDs using a
     * number of known SSID-cloaking methods.
     * @param ssid pointer to a buffer containing the SSID data
     * @param len length of the SSID data in @ssid
     * @returns %TRUE if the SSID is "empty", %FALSE if it is not
     */
    function utils_is_empty_ssid(ssid: number, len: number): boolean;
    /**
     * Checks if `str` is a UUID
     * @param str a string that might be a UUID
     * @returns %TRUE if @str is a UUID, %FALSE if not
     */
    function utils_is_uuid(str: string): boolean;
    /**
     * Encrypts the given RSA private key data with the given password (or generates
     * a password if no password was given) and converts the data to PEM format
     * suitable for writing to a file. It uses Triple DES cipher for the encryption.
     * @param data RSA private key data to be encrypted
     * @param in_password existing password to use, if any
     * @returns on success, PEM-formatted data suitable for writing to a PEM-formatted certificate/private key file.
     */
    function utils_rsa_key_encrypt(data: Uint8Array | string, in_password: string | null): [Uint8Array, string];
    /**
     * Encrypts the given RSA private key data with the given password (or generates
     * a password if no password was given) and converts the data to PEM format
     * suitable for writing to a file.  It uses AES cipher for the encryption.
     * @param data RSA private key data to be encrypted
     * @param in_password existing password to use, if any
     * @returns on success, PEM-formatted data suitable for writing to a PEM-formatted certificate/private key file.
     */
    function utils_rsa_key_encrypt_aes(data: Uint8Array | string, in_password: string | null): [Uint8Array, string];
    /**
     * Earlier versions of the Linux kernel added a NULL byte to the end of the
     * SSID to enable easy printing of the SSID on the console or in a terminal,
     * but this behavior was problematic (SSIDs are simply byte arrays, not strings)
     * and thus was changed.  This function compensates for that behavior at the
     * cost of some compatibility with odd SSIDs that may legitimately have trailing
     * NULLs, even though that is functionally pointless.
     * @param ssid1 first SSID data to compare
     * @param ssid2 second SSID data to compare
     * @param ignore_trailing_null %TRUE to ignore one trailing NULL byte
     * @returns %TRUE if the SSIDs are the same, %FALSE if they are not
     */
    function utils_same_ssid(
        ssid1: Uint8Array | string,
        ssid2: Uint8Array | string,
        ignore_trailing_null: boolean,
    ): boolean;
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
    function utils_security_valid(
        type: UtilsSecurityType | null,
        wifi_caps: DeviceWifiCapabilities | null,
        have_ap: boolean,
        adhoc: boolean,
        ap_flags: __80211ApFlags,
        ap_wpa: __80211ApSecurityFlags,
        ap_rsn: __80211ApSecurityFlags,
    ): boolean;
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
    function utils_ssid_to_utf8(ssid: Uint8Array | string): string;
    function utils_uuid_generate(): string;
    /**
     * For a given `s,` this function will always return the same UUID.
     * @param s a string to use as the seed for the UUID
     * @returns a newly allocated UUID suitable for use as the #NMSettingConnection object's #NMSettingConnection:id: property
     */
    function utils_uuid_generate_from_string(s: string): string;
    /**
     * Checks if `key` is a valid WEP key
     * @param key a string that might be a WEP key
     * @param wep_type the #NMWepKeyType type of the WEP key
     * @returns %TRUE if @key is a WEP key, %FALSE if not
     */
    function utils_wep_key_valid(key: string, wep_type: WepKeyType | null): boolean;
    /**
     * Utility function to translate a Wi-Fi channel to its corresponding frequency.
     * @param channel channel
     * @param band frequency band for wireless ("a" or "bg")
     * @returns the frequency represented by the channel of the band,          or -1 when the freq is invalid, or 0 when the band          is invalid
     */
    function utils_wifi_channel_to_freq(channel: number, band: string): number;
    /**
     * Utility function to find out next/previous Wi-Fi channel for a channel.
     * @param channel current channel
     * @param direction whether going downward (0 or less) or upward (1 or more)
     * @param band frequency band for wireless ("a" or "bg")
     * @returns the next channel in the specified direction or 0
     */
    function utils_wifi_find_next_channel(channel: number, direction: number, band: string): number;
    /**
     * Utility function to translate a Wi-Fi frequency to its corresponding channel.
     * @param freq frequency
     * @returns the channel represented by the frequency or 0
     */
    function utils_wifi_freq_to_channel(freq: number): number;
    /**
     * Utility function to verify Wi-Fi channel validity.
     * @param channel channel
     * @param band frequency band for wireless ("a" or "bg")
     * @returns %TRUE or %FALSE
     */
    function utils_wifi_is_channel_valid(channel: number, band: string): boolean;
    /**
     * Checks if `psk` is a valid WPA PSK
     * @param psk a string that might be a WPA PSK
     * @returns %TRUE if @psk is a WPA PSK, %FALSE if not
     */
    function utils_wpa_psk_valid(psk: string): boolean;
    interface SettingClearSecretsWithFlagsFn {
        (setting: Setting, secret: string, flags: SettingSecretFlags): boolean;
    }
    interface SettingValueIterFn {
        (setting: Setting, key: string, value: GObject.Value | any, flags: GObject.ParamFlags): void;
    }
    interface UtilsFileSearchInPathsPredicate {
        (filename: string): boolean;
    }
    interface VPNIterFunc {
        (key: string, value: string): void;
    }
    /**
     * 802.11 access point flags.
     */

    /**
     * 802.11 access point flags.
     */
    export namespace __80211ApFlags {
        export const $gtype: GObject.GType<__80211ApFlags>;
    }

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
    }
    /**
     * 802.11 access point security and authentication flags.  These flags describe
     * the current security requirements of an access point as determined from the
     * access point's beacon.
     */

    /**
     * 802.11 access point security and authentication flags.  These flags describe
     * the current security requirements of an access point as determined from the
     * access point's beacon.
     */
    export namespace __80211ApSecurityFlags {
        export const $gtype: GObject.GType<__80211ApSecurityFlags>;
    }

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
    }
    /**
     * #NMBluetoothCapabilities values indicate the usable capabilities of a
     * Bluetooth device.
     */

    /**
     * #NMBluetoothCapabilities values indicate the usable capabilities of a
     * Bluetooth device.
     */
    export namespace BluetoothCapabilities {
        export const $gtype: GObject.GType<BluetoothCapabilities>;
    }

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

    /**
     * General device capability flags.
     */
    export namespace DeviceCapabilities {
        export const $gtype: GObject.GType<DeviceCapabilities>;
    }

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

    /**
     * #NMDeviceModemCapabilities values indicate the generic radio access
     * technology families a modem device supports.  For more information on the
     * specific access technologies the device supports use the ModemManager D-Bus
     * API.
     */
    export namespace DeviceModemCapabilities {
        export const $gtype: GObject.GType<DeviceModemCapabilities>;
    }

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

    /**
     * 802.11 specific device encryption and authentication capabilities.
     */
    export namespace DeviceWifiCapabilities {
        export const $gtype: GObject.GType<DeviceWifiCapabilities>;
    }

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
    namespace Connection {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface SecretsCleared {
            (): void;
        }

        interface SecretsUpdated {
            (setting_name: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: Changed;
            'secrets-cleared': SecretsCleared;
            'secrets-updated': SecretsUpdated;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
        }
    }

    /**
     * The NMConnection struct contains only private data.
     * It should only be accessed through the functions described below.
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;
        declare static readonly __signalSignatures: Connection.SignalSignatures;

        // Properties

        /**
         * The connection's D-Bus path, used only by the calling process as a record
         * of the D-Bus path of the connection as provided by a settings service.
         */
        get path(): string;
        set path(val: string);

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Connection;

        static new_from_hash(hash: { [key: string]: any } | GLib.HashTable<string, GLib.HashTable>): Connection;

        // Signals

        connect<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: Connection.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: Connection.SignalSignatures[K],
        ): number;
        emit<K extends keyof Connection.SignalSignatures>(
            signal: K,
            ...args: Parameters<Connection.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;
        connect(signal: 'secrets-cleared', callback: (_source: this) => void): number;
        connect_after(signal: 'secrets-cleared', callback: (_source: this) => void): number;
        emit(signal: 'secrets-cleared'): void;
        connect(signal: 'secrets-updated', callback: (_source: this, setting_name: string) => void): number;
        connect_after(signal: 'secrets-updated', callback: (_source: this, setting_name: string) => void): number;
        emit(signal: 'secrets-updated', setting_name: string): void;

        // Static methods

        /**
         * Create a new #NMSetting object of the desired type, given a setting name.
         * @param name a setting name
         */
        static create_setting(name: string): Setting;
        /**
         * Returns the #GType of the setting's class for a given setting name.
         * @param name a setting name
         */
        static lookup_setting_type(name: string): GObject.GType;
        /**
         * Returns the #GType of the setting's class for a given setting error quark.
         * Useful for figuring out which setting a returned error is for.
         * @param error_quark a setting error quark
         */
        static lookup_setting_type_by_quark(error_quark: GLib.Quark): GObject.GType;

        // Virtual methods

        vfunc_secrets_updated(setting: string): void;

        // Methods

        /**
         * Adds a #NMSetting to the connection, replacing any previous #NMSetting of the
         * same name which has previously been added to the #NMConnection.  The
         * connection takes ownership of the #NMSetting object and does not increase
         * the setting object's reference count.
         * @param setting the #NMSetting to add to the connection object
         */
        add_setting(setting: Setting): void;
        /**
         * Clears and frees any secrets that may be stored in the connection, to avoid
         * keeping secret data in memory when not needed.
         */
        clear_secrets(): void;
        /**
         * Clears and frees secrets determined by `func`.
         * @param func function to be called to determine whether a     specific secret should be cleared or not
         */
        clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void;
        /**
         * Compares two #NMConnection objects for similarity, with comparison behavior
         * modified by a set of flags.  See nm_setting_compare() for a description of
         * each flag's behavior.
         * @param b a second #NMConnection to compare with the first
         * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
         * @returns %TRUE if the comparison succeeds, %FALSE if it does not
         */
        compare(b: Connection, flags: SettingCompareFlags | null): boolean;
        /**
         * Compares two #NMConnection objects for similarity, with comparison behavior
         * modified by a set of flags.  See nm_setting_compare() for a description of
         * each flag's behavior.  If the connections differ, settings and keys within
         * each setting that differ are added to the returned `out_settings` hash table.
         * No values are returned, only key names.
         * @param b a second #NMConnection to compare with the first
         * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
         * @param out_settings if the connections differ, on return a hash table mapping setting names to second-level GHashTable (utf8 to guint32), which contains the key names that differ mapped to one or more of %NMSettingDiffResult as a bitfield
         * @returns %TRUE if the connections contain the same values, %FALSE if they do not
         */
        diff(
            b: Connection,
            flags: SettingCompareFlags | null,
            out_settings: { [key: string]: any } | GLib.HashTable<string, GLib.HashTable>,
        ): boolean;
        /**
         * Print the connection to stdout.  For debugging purposes ONLY, should NOT
         * be used for serialization of the connection or machine-parsed in any way. The
         * output format is not guaranteed to be stable and may change at any time.
         */
        dump(): void;
        /**
         * Duplicates a #NMConnection.
         * @returns a new #NMConnection containing the same settings and properties as the source #NMConnection
         */
        duplicate(): Connection;
        /**
         * Iterates over the properties of each #NMSetting object in the #NMConnection,
         * calling the supplied user function for each property.
         * @param func user-supplied function called for each setting's property
         */
        for_each_setting_value(func: SettingValueIterFn): void;
        /**
         * A shortcut to return the type from the connection's #NMSettingConnection.
         * @returns the type from the connection's 'connection' setting
         */
        get_connection_type(): string;
        /**
         * A shortcut to return the ID from the connection's #NMSettingConnection.
         * @returns the ID from the connection's 'connection' setting
         */
        get_id(): string;
        /**
         * Returns the interface name as stored in NMSettingConnection:interface_name.
         * If the connection contains no NMSettingConnection, it will return %NULL.
         *
         * For hardware devices and software devices created outside of NetworkManager,
         * this name is used to match the device. for software devices created by
         * NetworkManager, this is the name of the created interface.
         * @returns Name of the kernel interface or %NULL
         */
        get_interface_name(): string;
        /**
         * Returns the connection's D-Bus path.
         * @returns the D-Bus path of the connection, previously set by a call to nm_connection_set_path().
         */
        get_path(): string;
        /**
         * Gets the #NMSetting with the given #GType, if one has been previously added
         * to the #NMConnection.
         * @param setting_type the #GType of the setting object to return
         * @returns the #NMSetting, or %NULL if no setting of that type was previously added to the #NMConnection
         */
        get_setting(setting_type: GObject.GType): Setting;
        /**
         * A shortcut to return any #NMSetting8021x the connection might contain.
         * @returns an #NMSetting8021x if the connection contains one, otherwise %NULL
         */
        get_setting_802_1x(): Setting8021x;
        /**
         * A shortcut to return any #NMSettingAdsl the connection might contain.
         * @returns an #NMSettingAdsl if the connection contains one, otherwise %NULL
         */
        get_setting_adsl(): SettingAdsl;
        /**
         * A shortcut to return any #NMSettingBluetooth the connection might contain.
         * @returns an #NMSettingBluetooth if the connection contains one, otherwise %NULL
         */
        get_setting_bluetooth(): SettingBluetooth;
        /**
         * A shortcut to return any #NMSettingBond the connection might contain.
         * @returns an #NMSettingBond if the connection contains one, otherwise %NULL
         */
        get_setting_bond(): SettingBond;
        /**
         * A shortcut to return any #NMSettingBridge the connection might contain.
         * @returns an #NMSettingBridge if the connection contains one, otherwise %NULL
         */
        get_setting_bridge(): SettingBridge;
        /**
         * A shortcut to return any #NMSettingBridgePort the connection might contain.
         * @returns an #NMSettingBridgePort if the connection contains one, otherwise %NULL
         */
        get_setting_bridge_port(): SettingBridgePort;
        /**
         * Gets the #NMSetting with the given name, if one has been previously added
         * the #NMConnection.
         * @param name a setting name
         * @returns the #NMSetting, or %NULL if no setting with that name was previously added to the #NMConnection
         */
        get_setting_by_name(name: string): Setting;
        /**
         * A shortcut to return any #NMSettingCdma the connection might contain.
         * @returns an #NMSettingCdma if the connection contains one, otherwise %NULL
         */
        get_setting_cdma(): SettingCdma;
        /**
         * A shortcut to return any #NMSettingConnection the connection might contain.
         * @returns an #NMSettingConnection if the connection contains one, otherwise %NULL
         */
        get_setting_connection(): SettingConnection;
        /**
         * A shortcut to return any #NMSettingDcb the connection might contain.
         * @returns an #NMSettingDcb if the connection contains one, otherwise NULL
         */
        get_setting_dcb(): SettingDcb;
        /**
         * A shortcut to return any #NMSettingGeneric the connection might contain.
         * @returns an #NMSettingGeneric if the connection contains one, otherwise NULL
         */
        get_setting_generic(): SettingGeneric;
        /**
         * A shortcut to return any #NMSettingGsm the connection might contain.
         * @returns an #NMSettingGsm if the connection contains one, otherwise %NULL
         */
        get_setting_gsm(): SettingGsm;
        /**
         * A shortcut to return any #NMSettingInfiniband the connection might contain.
         * @returns an #NMSettingInfiniband if the connection contains one, otherwise %NULL
         */
        get_setting_infiniband(): SettingInfiniband;
        /**
         * A shortcut to return any #NMSettingIP4Config the connection might contain.
         * @returns an #NMSettingIP4Config if the connection contains one, otherwise %NULL
         */
        get_setting_ip4_config(): SettingIP4Config;
        /**
         * A shortcut to return any #NMSettingIP6Config the connection might contain.
         * @returns an #NMSettingIP6Config if the connection contains one, otherwise %NULL
         */
        get_setting_ip6_config(): SettingIP6Config;
        /**
         * A shortcut to return any #NMSettingOlpcMesh the connection might contain.
         * @returns an #NMSettingOlpcMesh if the connection contains one, otherwise %NULL
         */
        get_setting_olpc_mesh(): SettingOlpcMesh;
        /**
         * A shortcut to return any #NMSettingPPP the connection might contain.
         * @returns an #NMSettingPPP if the connection contains one, otherwise %NULL
         */
        get_setting_ppp(): SettingPPP;
        /**
         * A shortcut to return any #NMSettingPPPOE the connection might contain.
         * @returns an #NMSettingPPPOE if the connection contains one, otherwise %NULL
         */
        get_setting_pppoe(): SettingPPPOE;
        /**
         * A shortcut to return any #NMSettingSerial the connection might contain.
         * @returns an #NMSettingSerial if the connection contains one, otherwise %NULL
         */
        get_setting_serial(): SettingSerial;
        /**
         * A shortcut to return any #NMSettingTeam the connection might contain.
         * @returns an #NMSettingTeam if the connection contains one, otherwise %NULL
         */
        get_setting_team(): SettingTeam;
        /**
         * A shortcut to return any #NMSettingTeamPort the connection might contain.
         * @returns an #NMSettingTeamPort if the connection contains one, otherwise %NULL
         */
        get_setting_team_port(): SettingTeamPort;
        /**
         * A shortcut to return any #NMSettingVlan the connection might contain.
         * @returns an #NMSettingVlan if the connection contains one, otherwise %NULL
         */
        get_setting_vlan(): SettingVlan;
        /**
         * A shortcut to return any #NMSettingVPN the connection might contain.
         * @returns an #NMSettingVPN if the connection contains one, otherwise %NULL
         */
        get_setting_vpn(): SettingVPN;
        /**
         * A shortcut to return any #NMSettingWimax the connection might contain.
         * @returns an #NMSettingWimax if the connection contains one, otherwise %NULL
         */
        get_setting_wimax(): SettingWimax;
        /**
         * A shortcut to return any #NMSettingWired the connection might contain.
         * @returns an #NMSettingWired if the connection contains one, otherwise %NULL
         */
        get_setting_wired(): SettingWired;
        /**
         * A shortcut to return any #NMSettingWireless the connection might contain.
         * @returns an #NMSettingWireless if the connection contains one, otherwise %NULL
         */
        get_setting_wireless(): SettingWireless;
        /**
         * A shortcut to return any #NMSettingWirelessSecurity the connection might contain.
         * @returns an #NMSettingWirelessSecurity if the connection contains one, otherwise %NULL
         */
        get_setting_wireless_security(): SettingWirelessSecurity;
        /**
         * A shortcut to return the UUID from the connection's #NMSettingConnection.
         * @returns the UUID from the connection's 'connection' setting
         */
        get_uuid(): string;
        /**
         * Returns the name that nm_device_disambiguate_names() would
         * return for the virtual device that would be created for `connection`.
         * Eg, "VLAN (eth1.1)".
         * @returns the name of @connection's device,   or %NULL if @connection is not a virtual connection type
         */
        get_virtual_device_description(): string;
        /**
         * Returns the name of the virtual kernel interface which the connection
         * needs to use if specified in the settings. This function abstracts all
         * connection types which require this functionality. For all other
         * connection types, this function will return %NULL.
         * @returns Name of the kernel interface or %NULL
         */
        get_virtual_iface_name(): string;
        /**
         * A convenience function to check if the given `connection` is a particular
         * type (ie wired, Wi-Fi, ppp, etc). Checks the #NMSettingConnection:type
         * property of the connection and matches that against `type`.
         * @param type a setting name to check the connection's type against (like %NM_SETTING_WIRELESS_SETTING_NAME or %NM_SETTING_WIRED_SETTING_NAME)
         * @returns %TRUE if the connection is of the given @type, %FALSE if not
         */
        is_type(type: string): boolean;
        /**
         * Returns the name of the first setting object in the connection which would
         * need secrets to make a successful connection.  The returned hints are only
         * intended as a guide to what secrets may be required, because in some
         * circumstances, there is no way to conclusively determine exactly which
         * secrets are needed.
         * @returns the setting name of the #NMSetting object which has invalid or   missing secrets
         */
        need_secrets(): [string, string[] | null];
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
        normalize(parameters: GLib.HashTable<string, any> | null): [boolean, boolean];
        /**
         * Removes the #NMSetting with the given #GType from the #NMConnection.  This
         * operation dereferences the #NMSetting object.
         * @param setting_type the #GType of the setting object to remove
         */
        remove_setting(setting_type: GObject.GType): void;
        replace_settings(new_settings: { [key: string]: any } | GLib.HashTable<string, GLib.HashTable>): boolean;
        /**
         * Deep-copies the settings of `new_conenction` and replaces the settings of `connection`
         * with the copied settings.
         * @param new_connection a #NMConnection to replace the settings of @connection with
         * @returns %TRUE if the settings were valid after replacing the connection, %FALSE if they were not. Regardless of whether %TRUE or %FALSE is returned, the connection is successfully replaced. %FALSE only means, that the connection does not verify at the end of the operation.
         */
        replace_settings_from_connection(new_connection: Connection): boolean;
        /**
         * Sets the D-Bus path of the connection.  This property is not serialized, and
         * is only for the reference of the caller.  Sets the #NMConnection:path
         * property.
         * @param path the D-Bus path of the connection as given by the settings service which provides the connection
         */
        set_path(path: string): void;
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
        to_hash(flags: SettingHashFlags | null): GLib.HashTable<string, GLib.HashTable>;
        /**
         * Update the specified setting's secrets, given a hash table of secrets
         * intended for that setting (deserialized from D-Bus for example).  Will also
         * extract the given setting's secrets hash if given a hash of hashes, as would
         * be returned from nm_connection_to_hash().  If `setting_name` is %NULL, expects
         * a fully serialized #NMConnection as returned by nm_connection_to_hash() and
         * will update all secrets from all settings contained in `secrets`.
         * @param setting_name the setting object name to which the secrets apply
         * @param secrets a #GHashTable mapping string:#GValue of setting property names and secrets of the given @setting_name
         * @returns %TRUE if the secrets were successfully updated, %FALSE if the update failed (tried to update secrets for a setting that doesn't exist, etc)
         */
        update_secrets(
            setting_name: string,
            secrets: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
        ): boolean;
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
        verify(): boolean;
    }

    namespace Setting {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * The NMSetting struct contains only private data.
     * It should only be accessed through the functions described below.
     */
    abstract class Setting extends GObject.Object {
        static $gtype: GObject.GType<Setting>;
        declare static readonly __signalSignatures: Setting.SignalSignatures;

        // Properties

        /**
         * The setting's name, which uniquely identifies the setting within the
         * connection.  Each setting type has a name unique to that type, for
         * example "ppp" or "wireless" or "wired".
         */
        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<Setting.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_hash(
            setting_type: GObject.GType,
            hash: { [key: string]: any } | GLib.HashTable<string, GObject.Value>,
        ): Setting;

        // Virtual methods

        vfunc_compare_property(other: Setting, prop_spec: GObject.ParamSpec, flags: SettingCompareFlags): boolean;
        vfunc_get_secret_flags(secret_name: string, verify_secret: boolean, out_flags: SettingSecretFlags): boolean;
        /**
         * Returns the name of the virtual kernel interface which the connection
         * needs to use if specified in the settings.
         */
        vfunc_get_virtual_iface_name(): string;
        /**
         * Returns an array of property names for each secret which may be required
         * to make a successful connection.  The returned hints are only intended as a
         * guide to what secrets may be required, because in some circumstances, there
         * is no way to conclusively determine exactly which secrets are needed.
         */
        vfunc_need_secrets(): string[];
        vfunc_set_secret_flags(secret_name: string, verify_secret: boolean, flags: SettingSecretFlags): boolean;
        vfunc_update_one_secret(key: string, value: GObject.Value | any): number;

        // Methods

        /**
         * Resets and clears any secrets in the setting.  Secrets should be added to the
         * setting only when needed, and cleared immediately after use to prevent
         * leakage of information.
         */
        clear_secrets(): void;
        /**
         * Clears and frees secrets determined by `func`.
         * @param func function to be called to determine whether a     specific secret should be cleared or not
         */
        clear_secrets_with_flags(func: SettingClearSecretsWithFlagsFn): void;
        /**
         * Compares two #NMSetting objects for similarity, with comparison behavior
         * modified by a set of flags.  See the documentation for #NMSettingCompareFlags
         * for a description of each flag's behavior.
         * @param b a second #NMSetting to compare with the first
         * @param flags compare flags, e.g. %NM_SETTING_COMPARE_FLAG_EXACT
         * @returns %TRUE if the comparison succeeds, %FALSE if it does not
         */
        compare(b: Setting, flags: SettingCompareFlags | null): boolean;
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
         * @returns %TRUE if the settings contain the same values, %FALSE if they do not
         */
        diff(
            b: Setting,
            flags: SettingCompareFlags | null,
            invert_results: boolean,
            results: { [key: string]: any } | GLib.HashTable<string, number>,
        ): [boolean, GLib.HashTable<string, number>];
        /**
         * Duplicates a #NMSetting.
         * @returns a new #NMSetting containing the same properties and values as the source #NMSetting
         */
        duplicate(): Setting;
        /**
         * Iterates over each property of the #NMSetting object, calling the supplied
         * user function for each property.
         * @param func user-supplied function called for each property of the setting
         */
        enumerate_values(func: SettingValueIterFn): void;
        /**
         * Returns the type name of the #NMSetting object
         * @returns a string containing the type name of the #NMSetting object, like 'ppp' or 'wireless' or 'wired'.
         */
        get_name(): string;
        /**
         * For a given secret, retrieves the #NMSettingSecretFlags describing how to
         * handle that secret.
         * @param secret_name the secret key name to get flags for
         * @param out_flags on success, the #NMSettingSecretFlags for the secret
         * @returns %TRUE on success (if the given secret name was a valid property of this setting, and if that property is secret), %FALSE if not
         */
        get_secret_flags(secret_name: string, out_flags: SettingSecretFlags | null): boolean;
        /**
         * Returns the name of the virtual kernel interface which the connection
         * needs to use if specified in the settings.
         * @returns Name of the virtual interface or %NULL if the setting does not support this feature
         */
        get_virtual_iface_name(): string;
        /**
         * Returns an array of property names for each secret which may be required
         * to make a successful connection.  The returned hints are only intended as a
         * guide to what secrets may be required, because in some circumstances, there
         * is no way to conclusively determine exactly which secrets are needed.
         * @returns a #GPtrArray containing the property names of secrets of the #NMSetting which may be required; the caller owns the array and must free it with g_ptr_array_free(), but must not free the elements.
         */
        need_secrets(): string[];
        /**
         * For a given secret, stores the #NMSettingSecretFlags describing how to
         * handle that secret.
         * @param secret_name the secret key name to set flags for
         * @param flags the #NMSettingSecretFlags for the secret
         * @returns %TRUE on success (if the given secret name was a valid property of this setting, and if that property is secret), %FALSE if not
         */
        set_secret_flags(secret_name: string, flags: SettingSecretFlags | null): boolean;
        /**
         * Converts the #NMSetting into a #GHashTable mapping each setting property
         * name to a GValue describing that property, suitable for marshalling over
         * D-Bus or serializing.  The mapping is string to GValue.
         * @param flags hash flags, e.g. %NM_SETTING_HASH_FLAG_ALL
         * @returns a new #GHashTable describing the setting's properties
         */
        to_hash(flags: SettingHashFlags | null): GLib.HashTable<string, GObject.Value>;
        /**
         * Convert the setting into a string.  For debugging purposes ONLY, should NOT
         * be used for serialization of the setting, or machine-parsed in any way. The
         * output format is not guaranteed to be stable and may change at any time.
         * @returns an allocated string containing a textual representation of the setting's properties and values (including secrets!), which the caller should free with g_free()
         */
        to_string(): string;
        /**
         * Update the setting's secrets, given a hash table of secrets intended for that
         * setting (deserialized from D-Bus for example).
         * @param secrets a #GHashTable mapping string to #GValue of setting property names and secrets
         * @returns %TRUE if the secrets were successfully updated, %FALSE on failure to update one or more of the secrets.
         */
        update_secrets(secrets: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): boolean;
        /**
         * Validates the setting.  Each setting's properties have allowed values, and
         * some are dependent on other values (hence the need for `all_settings)`.  The
         * returned #GError contains information about which property of the setting
         * failed validation, and in what way that property failed validation.
         * @param all_settings a #GSList of all settings     in the connection from which @setting came
         * @returns %TRUE if the setting is valid, %FALSE if it is not
         */
        verify(all_settings: Setting[]): boolean;
    }

    namespace Setting8021x {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            anonymous_identity: string;
            anonymousIdentity: string;
            ca_path: string;
            caPath: string;
            identity: string;
            pac_file: string;
            pacFile: string;
            password: string;
            password_flags: number;
            passwordFlags: number;
            password_raw_flags: number;
            passwordRawFlags: number;
            phase1_fast_provisioning: string;
            phase1FastProvisioning: string;
            phase1_peaplabel: string;
            phase1Peaplabel: string;
            phase1_peapver: string;
            phase1Peapver: string;
            phase2_auth: string;
            phase2Auth: string;
            phase2_autheap: string;
            phase2Autheap: string;
            phase2_ca_path: string;
            phase2CaPath: string;
            phase2_private_key_password: string;
            phase2PrivateKeyPassword: string;
            phase2_private_key_password_flags: number;
            phase2PrivateKeyPasswordFlags: number;
            phase2_subject_match: string;
            phase2SubjectMatch: string;
            pin: string;
            pin_flags: number;
            pinFlags: number;
            private_key_password: string;
            privateKeyPassword: string;
            private_key_password_flags: number;
            privateKeyPasswordFlags: number;
            subject_match: string;
            subjectMatch: string;
            system_ca_certs: boolean;
            systemCaCerts: boolean;
        }
    }

    class Setting8021x extends Setting {
        static $gtype: GObject.GType<Setting8021x>;
        declare static readonly __signalSignatures: Setting8021x.SignalSignatures;

        // Properties

        /**
         * Anonymous identity string for EAP authentication methods.  Used as the
         * unencrypted identity with EAP types that support different tunneled
         * identity like EAP-TTLS.
         */
        get anonymous_identity(): string;
        set anonymous_identity(val: string);
        /**
         * Anonymous identity string for EAP authentication methods.  Used as the
         * unencrypted identity with EAP types that support different tunneled
         * identity like EAP-TTLS.
         */
        get anonymousIdentity(): string;
        set anonymousIdentity(val: string);
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:ca-cert property.
         */
        get ca_path(): string;
        set ca_path(val: string);
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:ca-cert property.
         */
        get caPath(): string;
        set caPath(val: string);
        /**
         * Identity string for EAP authentication methods.  Often the user's user or
         * login name.
         */
        get identity(): string;
        set identity(val: string);
        /**
         * UTF-8 encoded file path containing PAC for EAP-FAST.
         */
        get pac_file(): string;
        set pac_file(val: string);
        /**
         * UTF-8 encoded file path containing PAC for EAP-FAST.
         */
        get pacFile(): string;
        set pacFile(val: string);
        /**
         * UTF-8 encoded password used for EAP authentication methods. If both the
         * #NMSetting8021x:password property and the #NMSetting8021x:password-raw
         * property are specified, #NMSetting8021x:password is preferred.
         */
        get password(): string;
        set password(val: string);
        /**
         * Flags indicating how to handle the #NMSetting8021x:password property.
         */
        get password_flags(): number;
        set password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSetting8021x:password property.
         */
        get passwordFlags(): number;
        set passwordFlags(val: number);
        /**
         * Flags indicating how to handle the #NMSetting8021x:password-raw property.
         */
        get password_raw_flags(): number;
        set password_raw_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSetting8021x:password-raw property.
         */
        get passwordRawFlags(): number;
        set passwordRawFlags(val: number);
        /**
         * Enables or disables in-line provisioning of EAP-FAST credentials when
         * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
         * Recognized values are "0" (disabled), "1" (allow unauthenticated
         * provisioning), "2" (allow authenticated provisioning), and "3" (allow
         * both authenticated and unauthenticated provisioning).  See the
         * wpa_supplicant documentation for more details.
         */
        get phase1_fast_provisioning(): string;
        set phase1_fast_provisioning(val: string);
        /**
         * Enables or disables in-line provisioning of EAP-FAST credentials when
         * FAST is specified as the EAP method in the #NMSetting8021x:eap property.
         * Recognized values are "0" (disabled), "1" (allow unauthenticated
         * provisioning), "2" (allow authenticated provisioning), and "3" (allow
         * both authenticated and unauthenticated provisioning).  See the
         * wpa_supplicant documentation for more details.
         */
        get phase1FastProvisioning(): string;
        set phase1FastProvisioning(val: string);
        /**
         * Forces use of the new PEAP label during key derivation.  Some RADIUS
         * servers may require forcing the new PEAP label to interoperate with
         * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
         * wpa_supplicant documentation for more details.
         */
        get phase1_peaplabel(): string;
        set phase1_peaplabel(val: string);
        /**
         * Forces use of the new PEAP label during key derivation.  Some RADIUS
         * servers may require forcing the new PEAP label to interoperate with
         * PEAPv1.  Set to "1" to force use of the new PEAP label.  See the
         * wpa_supplicant documentation for more details.
         */
        get phase1Peaplabel(): string;
        set phase1Peaplabel(val: string);
        /**
         * Forces which PEAP version is used when PEAP is set as the EAP method in
         * the #NMSetting8021x:eap property.  When unset, the version reported by
         * the server will be used.  Sometimes when using older RADIUS servers, it
         * is necessary to force the client to use a particular PEAP version.  To do
         * so, this property may be set to "0" or "1" to force that specific PEAP
         * version.
         */
        get phase1_peapver(): string;
        set phase1_peapver(val: string);
        /**
         * Forces which PEAP version is used when PEAP is set as the EAP method in
         * the #NMSetting8021x:eap property.  When unset, the version reported by
         * the server will be used.  Sometimes when using older RADIUS servers, it
         * is necessary to force the client to use a particular PEAP version.  To do
         * so, this property may be set to "0" or "1" to force that specific PEAP
         * version.
         */
        get phase1Peapver(): string;
        set phase1Peapver(val: string);
        /**
         * Specifies the allowed "phase 2" inner non-EAP authentication methods when
         * an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
         * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
         * Each "phase 2" inner method requires specific parameters for successful
         * authentication; see the wpa_supplicant documentation for more details.
         */
        get phase2_auth(): string;
        set phase2_auth(val: string);
        /**
         * Specifies the allowed "phase 2" inner non-EAP authentication methods when
         * an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized non-EAP "phase 2" methods are
         * "pap", "chap", "mschap", "mschapv2", "gtc", "otp", "md5", and "tls".
         * Each "phase 2" inner method requires specific parameters for successful
         * authentication; see the wpa_supplicant documentation for more details.
         */
        get phase2Auth(): string;
        set phase2Auth(val: string);
        /**
         * Specifies the allowed "phase 2" inner EAP-based authentication methods
         * when an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
         * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
         * requires specific parameters for successful authentication; see the
         * wpa_supplicant documentation for more details.
         */
        get phase2_autheap(): string;
        set phase2_autheap(val: string);
        /**
         * Specifies the allowed "phase 2" inner EAP-based authentication methods
         * when an EAP method that uses an inner TLS tunnel is specified in the
         * #NMSetting8021x:eap property.  Recognized EAP-based "phase 2" methods are
         * "md5", "mschapv2", "otp", "gtc", and "tls". Each "phase 2" inner method
         * requires specific parameters for successful authentication; see the
         * wpa_supplicant documentation for more details.
         */
        get phase2Autheap(): string;
        set phase2Autheap(val: string);
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
         */
        get phase2_ca_path(): string;
        set phase2_ca_path(val: string);
        /**
         * UTF-8 encoded path to a directory containing PEM or DER formatted
         * certificates to be added to the verification chain in addition to the
         * certificate specified in the #NMSetting8021x:phase2-ca-cert property.
         */
        get phase2CaPath(): string;
        set phase2CaPath(val: string);
        /**
         * The password used to decrypt the "phase 2" private key specified in the
         * #NMSetting8021x:phase2-private-key property when the private key either
         * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
         * directly is not generally necessary except when returning secrets to
         * NetworkManager; it is generally set automatically when setting the
         * private key by the nm_setting_802_1x_set_phase2_private_key() function.
         */
        get phase2_private_key_password(): string;
        set phase2_private_key_password(val: string);
        /**
         * The password used to decrypt the "phase 2" private key specified in the
         * #NMSetting8021x:phase2-private-key property when the private key either
         * uses the path scheme, or is a PKCS#<!-- -->12 format key.  Setting this property
         * directly is not generally necessary except when returning secrets to
         * NetworkManager; it is generally set automatically when setting the
         * private key by the nm_setting_802_1x_set_phase2_private_key() function.
         */
        get phase2PrivateKeyPassword(): string;
        set phase2PrivateKeyPassword(val: string);
        /**
         * Flags indicating how to handle the
         * #NMSetting8021x:phase2-private-key-password property.
         */
        get phase2_private_key_password_flags(): number;
        set phase2_private_key_password_flags(val: number);
        /**
         * Flags indicating how to handle the
         * #NMSetting8021x:phase2-private-key-password property.
         */
        get phase2PrivateKeyPasswordFlags(): number;
        set phase2PrivateKeyPasswordFlags(val: number);
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server during the inner "phase 2"
         * authentication. When unset, no verification of the authentication server
         * certificate's subject is performed.
         */
        get phase2_subject_match(): string;
        set phase2_subject_match(val: string);
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server during the inner "phase 2"
         * authentication. When unset, no verification of the authentication server
         * certificate's subject is performed.
         */
        get phase2SubjectMatch(): string;
        set phase2SubjectMatch(val: string);
        /**
         * PIN used for EAP authentication methods.
         */
        get pin(): string;
        set pin(val: string);
        /**
         * Flags indicating how to handle the #NMSetting8021x:pin property.
         */
        get pin_flags(): number;
        set pin_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSetting8021x:pin property.
         */
        get pinFlags(): number;
        set pinFlags(val: number);
        /**
         * The password used to decrypt the private key specified in the
         * #NMSetting8021x:private-key property when the private key either uses the
         * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
         * property directly is not generally necessary except when returning
         * secrets to NetworkManager; it is generally set automatically when setting
         * the private key by the nm_setting_802_1x_set_private_key() function.
         */
        get private_key_password(): string;
        set private_key_password(val: string);
        /**
         * The password used to decrypt the private key specified in the
         * #NMSetting8021x:private-key property when the private key either uses the
         * path scheme, or if the private key is a PKCS#<!-- -->12 format key.  Setting this
         * property directly is not generally necessary except when returning
         * secrets to NetworkManager; it is generally set automatically when setting
         * the private key by the nm_setting_802_1x_set_private_key() function.
         */
        get privateKeyPassword(): string;
        set privateKeyPassword(val: string);
        /**
         * Flags indicating how to handle the #NMSetting8021x:private-key-password
         * property.
         */
        get private_key_password_flags(): number;
        set private_key_password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSetting8021x:private-key-password
         * property.
         */
        get privateKeyPasswordFlags(): number;
        set privateKeyPasswordFlags(val: number);
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server. When unset, no verification of the
         * authentication server certificate's subject is performed.
         */
        get subject_match(): string;
        set subject_match(val: string);
        /**
         * Substring to be matched against the subject of the certificate presented
         * by the authentication server. When unset, no verification of the
         * authentication server certificate's subject is performed.
         */
        get subjectMatch(): string;
        set subjectMatch(val: string);
        /**
         * When %TRUE, overrides the #NMSetting8021x:ca-path and
         * #NMSetting8021x:phase2-ca-path properties using the system CA directory
         * specified at configure time with the --system-ca-path switch.  The
         * certificates in this directory are added to the verification chain in
         * addition to any certificates specified by the #NMSetting8021x:ca-cert and
         * #NMSetting8021x:phase2-ca-cert properties.
         */
        get system_ca_certs(): boolean;
        set system_ca_certs(val: boolean);
        /**
         * When %TRUE, overrides the #NMSetting8021x:ca-path and
         * #NMSetting8021x:phase2-ca-path properties using the system CA directory
         * specified at configure time with the --system-ca-path switch.  The
         * certificates in this directory are added to the verification chain in
         * addition to any certificates specified by the #NMSetting8021x:ca-cert and
         * #NMSetting8021x:phase2-ca-cert properties.
         */
        get systemCaCerts(): boolean;
        set systemCaCerts(val: boolean);

        // Constructors

        constructor(properties?: Partial<Setting8021x.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Setting8021x;

        // Methods

        /**
         * Adds an allowed alternate subject name match.  Until at least one
         * match is added, the altSubjectName of the remote authentication
         * server is not verified.
         * @param altsubject_match the altSubjectName to allow for this connection
         * @returns %TRUE if the alternative subject name match was  successfully added, %FALSE if it was already allowed.
         */
        add_altsubject_match(altsubject_match: string): boolean;
        /**
         * Adds an allowed EAP method.  The setting is not valid until at least one
         * EAP method has been added.  See #NMSetting8021x:eap property for a list of
         * allowed EAP methods.
         * @param eap the name of the EAP method to allow for this connection
         * @returns %TRUE if the EAP method was successfully added, %FALSE if it was  not a valid method or if it was already allowed.
         */
        add_eap_method(eap: string): boolean;
        /**
         * Adds an allowed alternate subject name match for "phase 2".  Until
         * at least one match is added, the altSubjectName of the "phase 2"
         * remote authentication server is not verified.
         * @param phase2_altsubject_match the "phase 2" altSubjectName to allow for this connection
         * @returns %TRUE if the "phase 2" alternative subject name match was  successfully added, %FALSE if it was already allowed.
         */
        add_phase2_altsubject_match(phase2_altsubject_match: string): boolean;
        /**
         * Clears all altSubjectName matches.
         */
        clear_altsubject_matches(): void;
        /**
         * Clears all allowed EAP methods.
         */
        clear_eap_methods(): void;
        /**
         * Clears all "phase 2" altSubjectName matches.
         */
        clear_phase2_altsubject_matches(): void;
        /**
         * Returns the altSubjectName match at index `i`.
         * @param i the zero-based index of the array of altSubjectName matches
         * @returns the altSubjectName match at index @i
         */
        get_altsubject_match(i: number): string;
        /**
         * Returns the anonymous identifier used by some EAP methods (like TTLS) to
         * authenticate the user in the outer unencrypted "phase 1" authentication.  The
         * inner "phase 2" authentication will use the #NMSetting8021x:identity in
         * a secure form, if applicable for that EAP method.
         * @returns the anonymous identifier
         */
        get_anonymous_identity(): string;
        /**
         * Returns the CA certificate blob if the CA certificate is stored using the
         * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use a
         * CA certificate (LEAP for example), and those that can take advantage of the
         * CA certificate allow it to be unset.  Note that lack of a CA certificate
         * reduces security by allowing man-in-the-middle attacks, because the identity
         * of the network cannot be confirmed by the client.
         * @returns the CA certificate data
         */
        get_ca_cert_blob(): Uint8Array;
        /**
         * Returns the CA certificate path if the CA certificate is stored using the
         * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use a
         * CA certificate (LEAP for example), and those that can take advantage of the
         * CA certificate allow it to be unset.  Note that lack of a CA certificate
         * reduces security by allowing man-in-the-middle attacks, because the identity
         * of the network cannot be confirmed by the client.
         * @returns path to the CA certificate file
         */
        get_ca_cert_path(): string;
        /**
         * Returns the scheme used to store the CA certificate.  If the returned scheme
         * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_ca_cert_blob();
         * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_ca_cert_path().
         * @returns scheme used to store the CA certificate (blob or path)
         */
        get_ca_cert_scheme(): Setting8021xCKScheme;
        /**
         * Returns the path of the CA certificate directory if previously set.  Systems
         * will often have a directory that contains multiple individual CA certificates
         * which the supplicant can then add to the verification chain.  This may be
         * used in addition to the #NMSetting8021x:ca-cert property to add more CA
         * certificates for verifying the network to client.
         * @returns the CA certificate directory path
         */
        get_ca_path(): string;
        /**
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns the client certificate data
         */
        get_client_cert_blob(): Uint8Array;
        /**
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns path to the client certificate file
         */
        get_client_cert_path(): string;
        /**
         * Returns the scheme used to store the client certificate.  If the returned scheme
         * is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use nm_setting_802_1x_get_client_cert_blob();
         * if %NM_SETTING_802_1X_CK_SCHEME_PATH, use nm_setting_802_1x_get_client_cert_path().
         * @returns scheme used to store the client certificate (blob or path)
         */
        get_client_cert_scheme(): Setting8021xCKScheme;
        /**
         * Returns the name of the allowed EAP method at index `i`.
         * @param i the index of the EAP method name to return
         * @returns the name of the allowed EAP method at index @i
         */
        get_eap_method(i: number): string;
        /**
         * Returns the identifier used by some EAP methods (like TLS) to
         * authenticate the user.  Often this is a username or login name.
         * @returns the user identifier
         */
        get_identity(): string;
        /**
         * Returns the number of entries in the
         * #NMSetting8021x:altsubject-matches property of this setting.
         * @returns the number of altsubject-matches entries.
         */
        get_num_altsubject_matches(): number;
        /**
         * Returns the number of eap methods allowed for use when connecting to the
         * network.  Generally only one EAP method is used.  Use the functions
         * nm_setting_802_1x_get_eap_method(), nm_setting_802_1x_add_eap_method(),
         * and nm_setting_802_1x_remove_eap_method() for adding, removing, and retrieving
         * allowed EAP methods.
         * @returns the number of allowed EAP methods
         */
        get_num_eap_methods(): number;
        /**
         * Returns the number of entries in the
         * #NMSetting8021x:phase2-altsubject-matches property of this setting.
         * @returns the number of phase2-altsubject-matches entries.
         */
        get_num_phase2_altsubject_matches(): number;
        /**
         * Returns the file containing PAC credentials used by EAP-FAST method.
         * @returns the PAC file
         */
        get_pac_file(): string;
        get_password(): string;
        get_password_flags(): SettingSecretFlags;
        get_password_raw(): Uint8Array;
        get_password_raw_flags(): SettingSecretFlags;
        get_phase1_fast_provisioning(): string;
        get_phase1_peaplabel(): string;
        get_phase1_peapver(): string;
        /**
         * Returns the "phase 2" altSubjectName match at index `i`.
         * @param i the zero-based index of the array of "phase 2" altSubjectName matches
         * @returns the "phase 2" altSubjectName match at index @i
         */
        get_phase2_altsubject_match(i: number): string;
        get_phase2_auth(): string;
        get_phase2_autheap(): string;
        /**
         * Returns the "phase 2" CA certificate blob if the CA certificate is stored
         * using the %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme.  Not all EAP methods use
         * a CA certificate (LEAP for example), and those that can take advantage of the
         * CA certificate allow it to be unset.  Note that lack of a CA certificate
         * reduces security by allowing man-in-the-middle attacks, because the identity
         * of the network cannot be confirmed by the client.
         * @returns the "phase 2" CA certificate data
         */
        get_phase2_ca_cert_blob(): Uint8Array;
        /**
         * Returns the "phase 2" CA certificate path if the CA certificate is stored
         * using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.  Not all EAP methods use
         * a CA certificate (LEAP for example), and those that can take advantage of the
         * CA certificate allow it to be unset.  Note that lack of a CA certificate
         * reduces security by allowing man-in-the-middle attacks, because the identity
         * of the network cannot be confirmed by the client.
         * @returns path to the "phase 2" CA certificate file
         */
        get_phase2_ca_cert_path(): string;
        /**
         * Returns the scheme used to store the "phase 2" CA certificate.  If the
         * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
         * nm_setting_802_1x_get_ca_cert_blob(); if %NM_SETTING_802_1X_CK_SCHEME_PATH,
         * use nm_setting_802_1x_get_ca_cert_path().
         * @returns scheme used to store the "phase 2" CA certificate (blob or path)
         */
        get_phase2_ca_cert_scheme(): Setting8021xCKScheme;
        /**
         * Returns the path of the "phase 2" CA certificate directory if previously set.
         * Systems will often have a directory that contains multiple individual CA
         * certificates which the supplicant can then add to the verification chain.
         * This may be used in addition to the #NMSetting8021x:phase2-ca-cert property
         * to add more CA certificates for verifying the network to client.
         * @returns the "phase 2" CA certificate directory path
         */
        get_phase2_ca_path(): string;
        /**
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns the "phase 2" client certificate data
         */
        get_phase2_client_cert_blob(): Uint8Array;
        /**
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns path to the "phase 2" client certificate file
         */
        get_phase2_client_cert_path(): string;
        /**
         * Returns the scheme used to store the "phase 2" client certificate.  If the
         * returned scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
         * nm_setting_802_1x_get_client_cert_blob(); if
         * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
         * nm_setting_802_1x_get_client_cert_path().
         * @returns scheme used to store the "phase 2" client certificate (blob or path)
         */
        get_phase2_client_cert_scheme(): Setting8021xCKScheme;
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
        get_phase2_private_key_blob(): Uint8Array;
        get_phase2_private_key_format(): Setting8021xCKFormat;
        get_phase2_private_key_password(): string;
        get_phase2_private_key_password_flags(): SettingSecretFlags;
        /**
         * Private keys are used to authenticate the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns path to the "phase 2" private key file
         */
        get_phase2_private_key_path(): string;
        /**
         * Returns the scheme used to store the "phase 2" private key.  If the returned
         * scheme is %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
         * nm_setting_802_1x_get_client_cert_blob(); if
         * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
         * nm_setting_802_1x_get_client_cert_path().
         * @returns scheme used to store the "phase 2" private key (blob or path)
         */
        get_phase2_private_key_scheme(): Setting8021xCKScheme;
        get_phase2_subject_match(): string;
        get_pin(): string;
        get_pin_flags(): SettingSecretFlags;
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
        get_private_key_blob(): Uint8Array;
        get_private_key_format(): Setting8021xCKFormat;
        get_private_key_password(): string;
        get_private_key_password_flags(): SettingSecretFlags;
        /**
         * Private keys are used to authenticate the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @returns path to the private key file
         */
        get_private_key_path(): string;
        /**
         * Returns the scheme used to store the private key.  If the returned scheme is
         * %NM_SETTING_802_1X_CK_SCHEME_BLOB, use
         * nm_setting_802_1x_get_client_cert_blob(); if
         * %NM_SETTING_802_1X_CK_SCHEME_PATH, use
         * nm_setting_802_1x_get_client_cert_path().
         * @returns scheme used to store the private key (blob or path)
         */
        get_private_key_scheme(): Setting8021xCKScheme;
        get_subject_match(): string;
        /**
         * Sets the #NMSetting8021x:system-ca-certs property. The
         * #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path
         * properties are ignored if the #NMSetting8021x:system-ca-certs property is
         * %TRUE, in which case a system-wide CA certificate directory specified at
         * compile time (using the --system-ca-path configure option) is used in place
         * of these properties.
         * @returns %TRUE if a system CA certificate path should be used, %FALSE if not
         */
        get_system_ca_certs(): boolean;
        /**
         * Removes the allowed altSubjectName at the specified index.
         * @param i the index of the altSubjectName match to remove
         */
        remove_altsubject_match(i: number): void;
        /**
         * Removes the allowed altSubjectName `altsubject_match`.
         * @param altsubject_match the altSubjectName to remove
         * @returns %TRUE if the alternative subject name match was found and removed,          %FALSE if it was not.
         */
        remove_altsubject_match_by_value(altsubject_match: string): boolean;
        /**
         * Removes the allowed EAP method at the specified index.
         * @param i the index of the EAP method to remove
         */
        remove_eap_method(i: number): void;
        /**
         * Removes the allowed EAP method `method`.
         * @param eap the name of the EAP method to remove
         * @returns %TRUE if the EAP method was founs and removed, %FALSE if it was not.
         */
        remove_eap_method_by_value(eap: string): boolean;
        /**
         * Removes the allowed "phase 2" altSubjectName at the specified index.
         * @param i the index of the "phase 2" altSubjectName match to remove
         */
        remove_phase2_altsubject_match(i: number): void;
        /**
         * Removes the allowed "phase 2" altSubjectName `phase2`_altsubject_match.
         * @param phase2_altsubject_match the "phase 2" altSubjectName to remove
         * @returns %TRUE if the alternative subject name match for "phase 2" was found and removed,          %FALSE if it was not.
         */
        remove_phase2_altsubject_match_by_value(phase2_altsubject_match: string): boolean;
        /**
         * Reads a certificate from disk and sets the #NMSetting8021x:ca-cert property
         * with the raw certificate data if using the %NM_SETTING_802_1X_CK_SCHEME_BLOB
         * scheme, or with the path to the certificate file if using the
         * %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
         * @param cert_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the CA certificate   file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the CA certificate.
         * @param scheme desired storage scheme for the certificate
         * @param out_format on successful return, the type of the certificate added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_ca_cert(
            cert_path: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
        /**
         * Reads a certificate from disk and sets the #NMSetting8021x:client-cert
         * property with the raw certificate data if using the
         * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
         * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
         *
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @param cert_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any @scheme clears the client certificate.
         * @param scheme desired storage scheme for the certificate
         * @param out_format on successful return, the type of the certificate added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_client_cert(
            cert_path: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
        /**
         * Reads a certificate from disk and sets the #NMSetting8021x:phase2-ca-cert
         * property with the raw certificate data if using the
         * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
         * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
         * @param cert_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" CA   certificate file (PEM or DER format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the "phase2" CA certificate.
         * @param scheme desired storage scheme for the certificate
         * @param out_format on successful return, the type of the certificate added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_phase2_ca_cert(
            cert_path: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
        /**
         * Reads a certificate from disk and sets the #NMSetting8021x:phase2-client-cert
         * property with the raw certificate data if using the
         * %NM_SETTING_802_1X_CK_SCHEME_BLOB scheme, or with the path to the certificate
         * file if using the %NM_SETTING_802_1X_CK_SCHEME_PATH scheme.
         *
         * Client certificates are used to identify the connecting client to the network
         * when EAP-TLS is used as either the "phase 1" or "phase 2" 802.1x
         * authentication method.
         * @param cert_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH   or %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" client   certificate file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8   encoded; use g_filename_to_utf8() to convert if needed.  Passing %NULL with   any @scheme clears the "phase2" client certificate.
         * @param scheme desired storage scheme for the certificate
         * @param out_format on successful return, the type of the certificate added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_phase2_client_cert(
            cert_path: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
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
         * @param key_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the "phase2" private   key file (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded;   use g_filename_to_utf8() to convert if needed.  Passing %NULL with any   @scheme clears the private key.
         * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
         * @param scheme desired storage scheme for the private key
         * @param out_format on successful return, the type of the private key added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_phase2_private_key(
            key_path: string,
            password: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
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
         * @param key_path when @scheme is set to either %NM_SETTING_802_1X_CK_SCHEME_PATH or   %NM_SETTING_802_1X_CK_SCHEME_BLOB, pass the path of the private key file   (PEM, DER, or PKCS#<!-- -->12 format).  The path must be UTF-8 encoded; use   g_filename_to_utf8() to convert if needed.  Passing %NULL with any @scheme   clears the private key.
         * @param password password used to decrypt the private key, or %NULL if the password   is unknown.  If the password is given but fails to decrypt the private key,   an error is returned.
         * @param scheme desired storage scheme for the private key
         * @param out_format on successful return, the type of the private key added
         * @returns %TRUE if the operation succeeded, %FALSE if it was unsuccessful
         */
        set_private_key(
            key_path: string,
            password: string,
            scheme: Setting8021xCKScheme | null,
            out_format: Setting8021xCKFormat | null,
        ): boolean;
    }

    namespace SettingAdsl {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            encapsulation: string;
            password: string;
            password_flags: number;
            passwordFlags: number;
            protocol: string;
            username: string;
            vci: number;
            vpi: number;
        }
    }

    class SettingAdsl extends Setting {
        static $gtype: GObject.GType<SettingAdsl>;
        declare static readonly __signalSignatures: SettingAdsl.SignalSignatures;

        // Properties

        /**
         * Encapsulation of ADSL connection.  Can be "vcmux" or "llc".
         */
        get encapsulation(): string;
        set encapsulation(val: string);
        /**
         * Password used to authenticate with the ADSL service.
         */
        get password(): string;
        set password(val: string);
        /**
         * Flags indicating how to handle the #NMSettingAdsl:password property.
         */
        get password_flags(): number;
        set password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingAdsl:password property.
         */
        get passwordFlags(): number;
        set passwordFlags(val: number);
        /**
         * ADSL connection protocol.  Can be "pppoa", "pppoe" or "ipoatm".
         */
        get protocol(): string;
        set protocol(val: string);
        /**
         * Username used to authenticate with the ADSL service.
         */
        get username(): string;
        set username(val: string);
        /**
         * VCI of ADSL connection
         */
        get vci(): number;
        set vci(val: number);
        /**
         * VPI of ADSL connection
         */
        get vpi(): number;
        set vpi(val: number);

        // Constructors

        constructor(properties?: Partial<SettingAdsl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingAdsl;

        // Methods

        get_encapsulation(): string;
        get_password(): string;
        get_password_flags(): SettingSecretFlags;
        get_protocol(): string;
        get_username(): string;
        get_vci(): number;
        get_vpi(): number;
    }

    namespace SettingBluetooth {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            type: string;
        }
    }

    class SettingBluetooth extends Setting {
        static $gtype: GObject.GType<SettingBluetooth>;
        declare static readonly __signalSignatures: SettingBluetooth.SignalSignatures;

        // Properties

        /**
         * Either "dun" for Dial-Up Networking connections or "panu" for Personal
         * Area Networking connections to devices supporting the NAP profile.
         */
        get type(): string;
        set type(val: string);

        // Constructors

        constructor(properties?: Partial<SettingBluetooth.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingBluetooth;

        // Methods

        /**
         * Gets the Bluetooth address of the remote device which this setting
         * describes a connection to.
         * @returns the Bluetooth address
         */
        get_bdaddr(): Uint8Array;
        /**
         * Returns the connection method for communicating with the remote device (i.e.
         * either DUN to a DUN-capable device or PANU to a NAP-capable device).
         * @returns the type, either %NM_SETTING_BLUETOOTH_TYPE_PANU or   %NM_SETTING_BLUETOOTH_TYPE_DUN
         */
        get_connection_type(): string;
    }

    namespace SettingBond {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            interface_name: string;
            interfaceName: string;
        }
    }

    class SettingBond extends Setting {
        static $gtype: GObject.GType<SettingBond>;
        declare static readonly __signalSignatures: SettingBond.SignalSignatures;

        // Properties

        /**
         * The name of the virtual in-kernel bonding network interface
         */
        get interface_name(): string;
        set interface_name(val: string);
        /**
         * The name of the virtual in-kernel bonding network interface
         */
        get interfaceName(): string;
        set interfaceName(val: string);

        // Constructors

        constructor(properties?: Partial<SettingBond.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingBond;

        // Static methods

        /**
         * Checks whether `name` is a valid bond option and `value` is a valid value for
         * the `name`. If `value` is %NULL, the function only validates the option name.
         * @param name the name of the option to validate
         * @param value the value of the option to validate
         */
        static validate_option(name: string, value: string): boolean;

        // Methods

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
        add_option(name: string, value: string): boolean;
        get_interface_name(): string;
        /**
         * Returns the number of options that should be set for this bond when it
         * is activated. This can be used to retrieve each option individually
         * using nm_setting_bond_get_option().
         * @returns the number of bonding options
         */
        get_num_options(): number;
        /**
         * Given an index, return the value of the bonding option at that index.  Indexes
         * are *not* guaranteed to be static across modifications to options done by
         * nm_setting_bond_add_option() and nm_setting_bond_remove_option(),
         * and should not be used to refer to options except for short periods of time
         * such as during option iteration.
         * @param idx index of the desired option, from 0 to nm_setting_bond_get_num_options() - 1
         * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
         */
        get_option(idx: number): [boolean, string, string];
        /**
         * Returns the value associated with the bonding option specified by
         * `name,` if it exists.
         * @param name the option name for which to retrieve the value
         * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
         */
        get_option_by_name(name: string): string;
        get_option_default(name: string): string;
        /**
         * Returns a list of valid bond options.
         * @returns a %NULL-terminated array of strings of valid bond options.
         */
        get_valid_options(): string[];
        /**
         * Remove the bonding option referenced by `name` from the internal option
         * list.
         * @param name name of the option to remove
         * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
         */
        remove_option(name: string): boolean;
    }

    namespace SettingBridge {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            ageing_time: number;
            ageingTime: number;
            forward_delay: number;
            forwardDelay: number;
            hello_time: number;
            helloTime: number;
            interface_name: string;
            interfaceName: string;
            max_age: number;
            maxAge: number;
            priority: number;
            stp: boolean;
        }
    }

    class SettingBridge extends Setting {
        static $gtype: GObject.GType<SettingBridge>;
        declare static readonly __signalSignatures: SettingBridge.SignalSignatures;

        // Properties

        /**
         * The Ethernet MAC address aging time, in seconds.
         */
        get ageing_time(): number;
        set ageing_time(val: number);
        /**
         * The Ethernet MAC address aging time, in seconds.
         */
        get ageingTime(): number;
        set ageingTime(val: number);
        /**
         * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
         */
        get forward_delay(): number;
        set forward_delay(val: number);
        /**
         * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
         */
        get forwardDelay(): number;
        set forwardDelay(val: number);
        /**
         * The Spanning Tree Protocol (STP) hello time, in seconds.
         */
        get hello_time(): number;
        set hello_time(val: number);
        /**
         * The Spanning Tree Protocol (STP) hello time, in seconds.
         */
        get helloTime(): number;
        set helloTime(val: number);
        /**
         * The name of the virtual in-kernel bridging network interface
         */
        get interface_name(): string;
        set interface_name(val: string);
        /**
         * The name of the virtual in-kernel bridging network interface
         */
        get interfaceName(): string;
        set interfaceName(val: string);
        /**
         * The Spanning Tree Protocol (STP) maximum message age, in seconds.
         */
        get max_age(): number;
        set max_age(val: number);
        /**
         * The Spanning Tree Protocol (STP) maximum message age, in seconds.
         */
        get maxAge(): number;
        set maxAge(val: number);
        /**
         * Sets the Spanning Tree Protocol (STP) priority for this bridge.  Lower
         * values are "better"; the lowest priority bridge will be elected the root
         * bridge.
         */
        get priority(): number;
        set priority(val: number);
        /**
         * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
         */
        get stp(): boolean;
        set stp(val: boolean);

        // Constructors

        constructor(properties?: Partial<SettingBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingBridge;

        // Methods

        get_ageing_time(): number;
        get_forward_delay(): number;
        get_hello_time(): number;
        get_interface_name(): string;
        get_mac_address(): Uint8Array;
        get_max_age(): number;
        get_priority(): number;
        get_stp(): boolean;
    }

    namespace SettingBridgePort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            hairpin_mode: boolean;
            hairpinMode: boolean;
            path_cost: number;
            pathCost: number;
            priority: number;
        }
    }

    class SettingBridgePort extends Setting {
        static $gtype: GObject.GType<SettingBridgePort>;
        declare static readonly __signalSignatures: SettingBridgePort.SignalSignatures;

        // Properties

        /**
         * Enables or disables "hairpin mode" for the port, which allows frames to
         * be sent back out through the port the frame was received on.
         */
        get hairpin_mode(): boolean;
        set hairpin_mode(val: boolean);
        /**
         * Enables or disables "hairpin mode" for the port, which allows frames to
         * be sent back out through the port the frame was received on.
         */
        get hairpinMode(): boolean;
        set hairpinMode(val: boolean);
        /**
         * The Spanning Tree Protocol (STP) port cost for destinations via this
         * port.
         */
        get path_cost(): number;
        set path_cost(val: number);
        /**
         * The Spanning Tree Protocol (STP) port cost for destinations via this
         * port.
         */
        get pathCost(): number;
        set pathCost(val: number);
        /**
         * The Spanning Tree Protocol (STP) priority of this bridge port.
         */
        get priority(): number;
        set priority(val: number);

        // Constructors

        constructor(properties?: Partial<SettingBridgePort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingBridgePort;

        // Methods

        get_hairpin_mode(): boolean;
        get_path_cost(): number;
        get_priority(): number;
    }

    namespace SettingCdma {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            number: string;
            password: string;
            password_flags: number;
            passwordFlags: number;
            username: string;
        }
    }

    class SettingCdma extends Setting {
        static $gtype: GObject.GType<SettingCdma>;
        declare static readonly __signalSignatures: SettingCdma.SignalSignatures;

        // Properties

        /**
         * The number to dial to establish the connection to the CDMA-based mobile
         * broadband network, if any.  If not specified, the default number (#777)
         * is used when required.
         */
        get number(): string;
        set number(val: string);
        /**
         * The password used to authenticate with the network, if required.  Many
         * providers do not require a password, or accept any password.  But if a
         * password is required, it is specified here.
         */
        get password(): string;
        set password(val: string);
        /**
         * Flags indicating how to handle the #NMSettingCdma:password property.
         */
        get password_flags(): number;
        set password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingCdma:password property.
         */
        get passwordFlags(): number;
        set passwordFlags(val: number);
        /**
         * The username used to authenticate with the network, if required.  Many
         * providers do not require a username, or accept any username.  But if a
         * username is required, it is specified here.
         */
        get username(): string;
        set username(val: string);

        // Constructors

        constructor(properties?: Partial<SettingCdma.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingCdma;

        // Methods

        get_number(): string;
        get_password(): string;
        get_password_flags(): SettingSecretFlags;
        get_username(): string;
    }

    namespace SettingConnection {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            autoconnect: boolean;
            gateway_ping_timeout: number;
            gatewayPingTimeout: number;
            id: string;
            interface_name: string;
            interfaceName: string;
            master: string;
            read_only: boolean;
            readOnly: boolean;
            slave_type: string;
            slaveType: string;
            timestamp: number;
            type: string;
            uuid: string;
            zone: string;
        }
    }

    /**
     * The NMSettingConnection struct contains only private data.
     * It should only be accessed through the functions described below.
     */
    class SettingConnection extends Setting {
        static $gtype: GObject.GType<SettingConnection>;
        declare static readonly __signalSignatures: SettingConnection.SignalSignatures;

        // Properties

        /**
         * Whether or not the connection should be automatically connected by
         * NetworkManager when the resources for the connection are available.
         * %TRUE to automatically activate the connection, %FALSE to require manual
         * intervention to activate the connection.
         */
        get autoconnect(): boolean;
        set autoconnect(val: boolean);
        /**
         * If greater than zero, delay success of IP addressing until either the
         * timeout is reached, or an IP gateway replies to a ping.
         */
        get gateway_ping_timeout(): number;
        set gateway_ping_timeout(val: number);
        /**
         * If greater than zero, delay success of IP addressing until either the
         * timeout is reached, or an IP gateway replies to a ping.
         */
        get gatewayPingTimeout(): number;
        set gatewayPingTimeout(val: number);
        /**
         * A human readable unique identifier for the connection, like "Work Wi-Fi"
         * or "T-Mobile 3G".
         */
        get id(): string;
        set id(val: string);
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
        get interface_name(): string;
        set interface_name(val: string);
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
        get interfaceName(): string;
        set interfaceName(val: string);
        /**
         * Interface name of the master device or UUID of the master connection.
         */
        get master(): string;
        set master(val: string);
        /**
         * %FALSE if the connection can be modified using the provided settings
         * service's D-Bus interface with the right privileges, or %TRUE if the
         * connection is read-only and cannot be modified.
         */
        get read_only(): boolean;
        set read_only(val: boolean);
        /**
         * %FALSE if the connection can be modified using the provided settings
         * service's D-Bus interface with the right privileges, or %TRUE if the
         * connection is read-only and cannot be modified.
         */
        get readOnly(): boolean;
        set readOnly(val: boolean);
        /**
         * Setting name of the device type of this slave's master connection (eg,
         * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
         * slave.
         */
        get slave_type(): string;
        set slave_type(val: string);
        /**
         * Setting name of the device type of this slave's master connection (eg,
         * %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a
         * slave.
         */
        get slaveType(): string;
        set slaveType(val: string);
        /**
         * The time, in seconds since the Unix Epoch, that the connection was last
         * _successfully_ fully activated.
         *
         * NetworkManager updates the connection timestamp periodically when the
         * connection is active to ensure that an active connection has the latest
         * timestamp. The property is only meant for reading (changes to this
         * property will not be preserved).
         */
        get timestamp(): number;
        set timestamp(val: number);
        /**
         * Base type of the connection. For hardware-dependent connections, should
         * contain the setting name of the hardware-type specific setting (ie,
         * "802-3-ethernet" or "802-11-wireless" or "bluetooth", etc), and for
         * non-hardware dependent connections like VPN or otherwise, should contain
         * the setting name of that setting type (ie, "vpn" or "bridge", etc).
         */
        get type(): string;
        set type(val: string);
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
        get uuid(): string;
        set uuid(val: string);
        /**
         * The trust level of a the connection.  Free form case-insensitive string
         * (for example "Home", "Work", "Public").  %NULL or unspecified zone means
         * the connection will be placed in the default zone as defined by the
         * firewall.
         */
        get zone(): string;
        set zone(val: string);

        // Constructors

        constructor(properties?: Partial<SettingConnection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingConnection;

        // Methods

        /**
         * Adds a permission to the connection's permission list.  At this time, only
         * the "user" permission type is supported, and `pitem` must be a username. See
         * #NMSettingConnection:permissions: for more details.
         * @param ptype the permission type; at this time only "user" is supported
         * @param pitem the permission item formatted as required for @ptype
         * @param detail unused at this time; must be %NULL
         * @returns %TRUE if the permission was unique and was successfully added to the list, %FALSE if @ptype or @pitem was invalid or it the permission was already present in the list
         */
        add_permission(ptype: string, pitem: string, detail?: string | null): boolean;
        /**
         * Adds a new secondary connection UUID to the setting.
         * @param sec_uuid the secondary connection UUID to add
         * @returns %TRUE if the secondary connection UUID was added; %FALSE if the UUID was already present
         */
        add_secondary(sec_uuid: string): boolean;
        /**
         * Returns the #NMSettingConnection:autoconnect property of the connection.
         * @returns the connection's autoconnect behavior
         */
        get_autoconnect(): boolean;
        /**
         * Returns the #NMSettingConnection:type property of the connection.
         * @returns the connection type
         */
        get_connection_type(): string;
        get_gateway_ping_timeout(): number;
        /**
         * Returns the #NMSettingConnection:id property of the connection.
         * @returns the connection ID
         */
        get_id(): string;
        /**
         * Returns the #NMSettingConnection:interface-name property of the connection.
         * @returns the connection's interface name
         */
        get_interface_name(): string;
        /**
         * Returns the #NMSettingConnection:master property of the connection.
         * @returns interface name of the master device or UUID of the master connection.
         */
        get_master(): string;
        /**
         * Returns the number of entries in the #NMSettingConnection:permissions
         * property of this setting.
         * @returns the number of permissions entries
         */
        get_num_permissions(): number;
        get_num_secondaries(): number;
        /**
         * Retrieve one of the entries of the #NMSettingConnection:permissions property
         * of this setting.
         * @param idx the zero-based index of the permissions entry
         * @param out_ptype on return, the permission type (at this time, always "user")
         * @param out_pitem on return, the permission item (formatted according to @ptype, see #NMSettingConnection:permissions for more detail
         * @param out_detail on return, the permission detail (at this time, always %NULL)
         * @returns %TRUE if a permission was returned, %FALSE if @idx was invalid
         */
        get_permission(idx: number, out_ptype: string, out_pitem: string, out_detail: string): boolean;
        /**
         * Returns the #NMSettingConnection:read-only property of the connection.
         * @returns %TRUE if the connection is read-only, %FALSE if it is not
         */
        get_read_only(): boolean;
        get_secondary(idx: number): string;
        /**
         * Returns the #NMSettingConnection:slave-type property of the connection.
         * @returns the type of slave this connection is, if any
         */
        get_slave_type(): string;
        /**
         * Returns the #NMSettingConnection:timestamp property of the connection.
         * @returns the connection's timestamp
         */
        get_timestamp(): number;
        /**
         * Returns the #NMSettingConnection:uuid property of the connection.
         * @returns the connection UUID
         */
        get_uuid(): string;
        /**
         * Returns the #NMSettingConnection:zone property of the connection.
         * @returns the trust level of a connection
         */
        get_zone(): string;
        is_slave_type(type: string): boolean;
        /**
         * Checks whether the given username is allowed to view/access this connection.
         * @param uname the user name to check permissions for
         * @returns %TRUE if the requested user is allowed to view this connection, %FALSE if the given user is not allowed to view this connection
         */
        permissions_user_allowed(uname: string): boolean;
        /**
         * Removes the permission at index `idx` from the connection.
         * @param idx the zero-based index of the permission to remove
         */
        remove_permission(idx: number): void;
        /**
         * Removes the permission from the connection.
         * At this time, only the "user" permission type is supported, and `pitem` must
         * be a username. See #NMSettingConnection:permissions: for more details.
         * @param ptype the permission type; at this time only "user" is supported
         * @param pitem the permission item formatted as required for @ptype
         * @param detail unused at this time; must be %NULL
         * @returns %TRUE if the permission was found and removed; %FALSE if it was not.
         */
        remove_permission_by_value(ptype: string, pitem: string, detail?: string | null): boolean;
        /**
         * Removes the secondary coonnection UUID at index `idx`.
         * @param idx index number of the secondary connection UUID
         */
        remove_secondary(idx: number): void;
        /**
         * Removes the secondary coonnection UUID `sec_uuid`.
         * @param sec_uuid the secondary connection UUID to remove
         * @returns %TRUE if the secondary connection UUID was found and removed; %FALSE if it was not.
         */
        remove_secondary_by_value(sec_uuid: string): boolean;
    }

    namespace SettingDcb {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            app_fcoe_flags: number;
            appFcoeFlags: number;
            app_fcoe_mode: string;
            appFcoeMode: string;
            app_fcoe_priority: number;
            appFcoePriority: number;
            app_fip_flags: number;
            appFipFlags: number;
            app_fip_priority: number;
            appFipPriority: number;
            app_iscsi_flags: number;
            appIscsiFlags: number;
            app_iscsi_priority: number;
            appIscsiPriority: number;
            priority_flow_control_flags: number;
            priorityFlowControlFlags: number;
            priority_group_flags: number;
            priorityGroupFlags: number;
        }
    }

    class SettingDcb extends Setting {
        static $gtype: GObject.GType<SettingDcb>;
        declare static readonly __signalSignatures: SettingDcb.SignalSignatures;

        // Properties

        /**
         * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get app_fcoe_flags(): number;
        set app_fcoe_flags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for the DCB FCoE application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get appFcoeFlags(): number;
        set appFcoeFlags(val: number);
        /**
         * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
         * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
         */
        get app_fcoe_mode(): string;
        set app_fcoe_mode(val: string);
        /**
         * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC
         * (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
         */
        get appFcoeMode(): string;
        set appFcoeMode(val: string);
        /**
         * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get app_fcoe_priority(): number;
        set app_fcoe_priority(val: number);
        /**
         * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fcoe-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get appFcoePriority(): number;
        set appFcoePriority(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get app_fip_flags(): number;
        set app_fip_flags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for the DCB FIP application.  Flags may
         * be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get appFipFlags(): number;
        set appFipFlags(val: number);
        /**
         * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fip-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get app_fip_priority(): number;
        set app_fip_priority(val: number);
        /**
         * The highest User Priority (0 - 7) which FIP frames should use, or -1 for
         * default priority.  Only used when the #NMSettingDcb:app-fip-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get appFipPriority(): number;
        set appFipPriority(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
         * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get app_iscsi_flags(): number;
        set app_iscsi_flags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.  Flags
         * may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get appIscsiFlags(): number;
        set appIscsiFlags(val: number);
        /**
         * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
         * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get app_iscsi_priority(): number;
        set app_iscsi_priority(val: number);
        /**
         * The highest User Priority (0 - 7) which iSCSI frames should use, or -1
         * for default priority. Only used when the #NMSettingDcb:app-iscsi-flags
         * property includes the %NM_SETTING_DCB_FLAG_ENABLE flag.
         */
        get appIscsiPriority(): number;
        set appIscsiPriority(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
         * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get priority_flow_control_flags(): number;
        set priority_flow_control_flags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
         * Flags may be any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get priorityFlowControlFlags(): number;
        set priorityFlowControlFlags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
         * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get priority_group_flags(): number;
        set priority_group_flags(val: number);
        /**
         * Specifies the #NMSettingDcbFlags for DCB Priority Groups.  Flags may be
         * any combination of %NM_SETTING_DCB_FLAG_ENABLE,
         * %NM_SETTING_DCB_FLAG_ADVERTISE, and %NM_SETTING_DCB_FLAG_WILLING.
         */
        get priorityGroupFlags(): number;
        set priorityGroupFlags(val: number);

        // Constructors

        constructor(properties?: Partial<SettingDcb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingDcb;

        // Methods

        get_app_fcoe_flags(): SettingDcbFlags;
        get_app_fcoe_mode(): string;
        get_app_fcoe_priority(): number;
        get_app_fip_flags(): SettingDcbFlags;
        get_app_fip_priority(): number;
        get_app_iscsi_flags(): SettingDcbFlags;
        get_app_iscsi_priority(): number;
        get_priority_bandwidth(user_priority: number): number;
        get_priority_flow_control(user_priority: number): boolean;
        get_priority_flow_control_flags(): SettingDcbFlags;
        get_priority_group_bandwidth(group_id: number): number;
        get_priority_group_flags(): SettingDcbFlags;
        get_priority_group_id(user_priority: number): number;
        get_priority_strict_bandwidth(user_priority: number): boolean;
        get_priority_traffic_class(user_priority: number): number;
        /**
         * These values are only valid when #NMSettingDcb:priority-group-flags includes
         * the %NM_SETTING_DCB_FLAG_ENABLE flag.
         * @param user_priority the User Priority (0 - 7) to set the bandwidth percentage for
         * @param bandwidth_percent the bandwidth percentage (0 - 100) that @user_priority is allowed to use within its priority group
         */
        set_priority_bandwidth(user_priority: number, bandwidth_percent: number): void;
        /**
         * These values are only valid when #NMSettingDcb:priority-flow-control includes
         * the %NM_SETTING_DCB_FLAG_ENABLE flag.
         * @param user_priority the User Priority (0 - 7) to set flow control for
         * @param enabled %TRUE to enable flow control for this priority, %FALSE to disable it
         */
        set_priority_flow_control(user_priority: number, enabled: boolean): void;
        /**
         * These values are only valid when #NMSettingDcb:priority-group-flags includes
         * the %NM_SETTING_DCB_FLAG_ENABLE flag.
         * @param group_id the priority group (0 - 7) to set the bandwidth percentage for
         * @param bandwidth_percent the bandwidth percentage (0 - 100) to assign to @group_id to
         */
        set_priority_group_bandwidth(group_id: number, bandwidth_percent: number): void;
        /**
         * These values are only valid when #NMSettingDcb:priority-group-flags includes
         * the %NM_SETTING_DCB_FLAG_ENABLE flag.
         * @param user_priority the User Priority (0 - 7) to set flow control for
         * @param group_id the group (0 - 7) to assign @user_priority to, or 15 for the unrestricted group.
         */
        set_priority_group_id(user_priority: number, group_id: number): void;
        /**
         * These values are only valid when #NMSettingDcb:priority-group-flags includes
         * the %NM_SETTING_DCB_FLAG_ENABLE flag.
         * @param user_priority the User Priority (0 - 7) to set strict bandwidth for
         * @param strict %TRUE to allow @user_priority to use all the bandwidth allocated to its priority group, or %FALSE if not
         */
        set_priority_strict_bandwidth(user_priority: number, strict: boolean): void;
        set_priority_traffic_class(user_priority: number, traffic_class: number): void;
    }

    namespace SettingGeneric {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {}
    }

    class SettingGeneric extends Setting {
        static $gtype: GObject.GType<SettingGeneric>;
        declare static readonly __signalSignatures: SettingGeneric.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SettingGeneric.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingGeneric;
    }

    namespace SettingGsm {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            allowed_bands: number;
            allowedBands: number;
            apn: string;
            home_only: boolean;
            homeOnly: boolean;
            network_id: string;
            networkId: string;
            network_type: number;
            networkType: number;
            number: string;
            password: string;
            password_flags: number;
            passwordFlags: number;
            pin: string;
            pin_flags: number;
            pinFlags: number;
            username: string;
        }
    }

    class SettingGsm extends Setting {
        static $gtype: GObject.GType<SettingGsm>;
        declare static readonly __signalSignatures: SettingGsm.SignalSignatures;

        // Properties

        /**
         * Bitfield of allowed frequency bands.  Note that not all devices allow
         * frequency band control.  Permitted values are those specified by
         * #NMSettingGsmNetworkBand.
         */
        get allowed_bands(): number;
        set allowed_bands(val: number);
        /**
         * Bitfield of allowed frequency bands.  Note that not all devices allow
         * frequency band control.  Permitted values are those specified by
         * #NMSettingGsmNetworkBand.
         */
        get allowedBands(): number;
        set allowedBands(val: number);
        /**
         * The GPRS Access Point Name specifying the APN used when establishing a
         * data session with the GSM-based network.  The APN often determines how
         * the user will be billed for their network usage and whether the user has
         * access to the Internet or just a provider-specific walled-garden, so it
         * is important to use the correct APN for the user's mobile broadband plan.
         * The APN may only be composed of the characters a-z, 0-9, ., and - per GSM
         * 03.60 Section 14.9.
         */
        get apn(): string;
        set apn(val: string);
        /**
         * When %TRUE, only connections to the home network will be allowed.
         * Connections to roaming networks will not be made.
         */
        get home_only(): boolean;
        set home_only(val: boolean);
        /**
         * When %TRUE, only connections to the home network will be allowed.
         * Connections to roaming networks will not be made.
         */
        get homeOnly(): boolean;
        set homeOnly(val: boolean);
        /**
         * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
         * registration.  If the Network ID is specified, NetworkManager will
         * attempt to force the device to register only on the specified network.
         * This can be used to ensure that the device does not roam when direct
         * roaming control of the device is not otherwise possible.
         */
        get network_id(): string;
        set network_id(val: string);
        /**
         * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network
         * registration.  If the Network ID is specified, NetworkManager will
         * attempt to force the device to register only on the specified network.
         * This can be used to ensure that the device does not roam when direct
         * roaming control of the device is not otherwise possible.
         */
        get networkId(): string;
        set networkId(val: string);
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
        get network_type(): number;
        set network_type(val: number);
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
        get networkType(): number;
        set networkType(val: number);
        /**
         * Number to dial when establishing a PPP data session with the GSM-based
         * mobile broadband network.  Many modems do not require PPP for connections
         * to the mobile network and thus this property should be left blank, which
         * allows NetworkManager to select the appropriate settings automatically.
         */
        get number(): string;
        set number(val: string);
        /**
         * The password used to authenticate with the network, if required.  Many
         * providers do not require a password, or accept any password.  But if a
         * password is required, it is specified here.
         */
        get password(): string;
        set password(val: string);
        /**
         * Flags indicating how to handle the #NMSettingGsm:password property.
         */
        get password_flags(): number;
        set password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingGsm:password property.
         */
        get passwordFlags(): number;
        set passwordFlags(val: number);
        /**
         * If the SIM is locked with a PIN it must be unlocked before any other
         * operations are requested.  Specify the PIN here to allow operation of the
         * device.
         */
        get pin(): string;
        set pin(val: string);
        /**
         * Flags indicating how to handle the #NMSettingGsm:pin property.
         */
        get pin_flags(): number;
        set pin_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingGsm:pin property.
         */
        get pinFlags(): number;
        set pinFlags(val: number);
        /**
         * The username used to authenticate with the network, if required.  Many
         * providers do not require a username, or accept any username.  But if a
         * username is required, it is specified here.
         */
        get username(): string;
        set username(val: string);

        // Constructors

        constructor(properties?: Partial<SettingGsm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingGsm;

        // Methods

        get_allowed_bands(): number;
        get_apn(): string;
        get_home_only(): boolean;
        get_network_id(): string;
        get_network_type(): number;
        get_number(): string;
        get_password(): string;
        get_password_flags(): SettingSecretFlags;
        get_pin(): string;
        get_pin_flags(): SettingSecretFlags;
        get_username(): string;
    }

    namespace SettingIP4Config {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            dhcp_client_id: string;
            dhcpClientId: string;
            dhcp_hostname: string;
            dhcpHostname: string;
            dhcp_send_hostname: boolean;
            dhcpSendHostname: boolean;
            dhcp_timeout: number;
            dhcpTimeout: number;
            ignore_auto_dns: boolean;
            ignoreAutoDns: boolean;
            ignore_auto_routes: boolean;
            ignoreAutoRoutes: boolean;
            may_fail: boolean;
            mayFail: boolean;
            method: string;
            never_default: boolean;
            neverDefault: boolean;
            route_metric: number;
            routeMetric: number;
        }
    }

    class SettingIP4Config extends Setting {
        static $gtype: GObject.GType<SettingIP4Config>;
        declare static readonly __signalSignatures: SettingIP4Config.SignalSignatures;

        // Properties

        /**
         * A string sent to the DHCP server to identify the local machine which the
         * DHCP server may use to customize the DHCP lease and options.
         */
        get dhcp_client_id(): string;
        set dhcp_client_id(val: string);
        /**
         * A string sent to the DHCP server to identify the local machine which the
         * DHCP server may use to customize the DHCP lease and options.
         */
        get dhcpClientId(): string;
        set dhcpClientId(val: string);
        /**
         * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
         * specified name will be sent to the DHCP server when acquiring a lease.
         */
        get dhcp_hostname(): string;
        set dhcp_hostname(val: string);
        /**
         * If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the
         * specified name will be sent to the DHCP server when acquiring a lease.
         */
        get dhcpHostname(): string;
        set dhcpHostname(val: string);
        /**
         * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
         * Some DHCP servers use this hostname to update DNS databases, essentially
         * providing a static hostname for the computer.  If the
         * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
         * %TRUE, the current persistent hostname of the computer is sent.
         */
        get dhcp_send_hostname(): boolean;
        set dhcp_send_hostname(val: boolean);
        /**
         * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
         * Some DHCP servers use this hostname to update DNS databases, essentially
         * providing a static hostname for the computer.  If the
         * #NMSettingIP4Config:dhcp-hostname property is empty and this property is
         * %TRUE, the current persistent hostname of the computer is sent.
         */
        get dhcpSendHostname(): boolean;
        set dhcpSendHostname(val: boolean);
        /**
         * Number of seconds after which the unfinished DHCP transaction fails
         * or zero for default.
         */
        get dhcp_timeout(): number;
        set dhcp_timeout(val: number);
        /**
         * Number of seconds after which the unfinished DHCP transaction fails
         * or zero for default.
         */
        get dhcpTimeout(): number;
        set dhcpTimeout(val: number);
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured nameservers and search domains are ignored and
         * only nameservers and search domains specified in the
         * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
         * any, are used.
         */
        get ignore_auto_dns(): boolean;
        set ignore_auto_dns(val: boolean);
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured nameservers and search domains are ignored and
         * only nameservers and search domains specified in the
         * #NMSettingIP4Config:dns and #NMSettingIP4Config:dns-search properties, if
         * any, are used.
         */
        get ignoreAutoDns(): boolean;
        set ignoreAutoDns(val: boolean);
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured routes are ignored and only routes specified in
         * the #NMSettingIP4Config:routes property, if any, are used.
         */
        get ignore_auto_routes(): boolean;
        set ignore_auto_routes(val: boolean);
        /**
         * When the method is set to "auto" and this property to %TRUE,
         * automatically configured routes are ignored and only routes specified in
         * the #NMSettingIP4Config:routes property, if any, are used.
         */
        get ignoreAutoRoutes(): boolean;
        set ignoreAutoRoutes(val: boolean);
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv4
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv6-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv4 configuration fails but IPv6
         * configuration completes successfully.
         */
        get may_fail(): boolean;
        set may_fail(val: boolean);
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv4
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv6-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv4 configuration fails but IPv6
         * configuration completes successfully.
         */
        get mayFail(): boolean;
        set mayFail(val: boolean);
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
        get method(): string;
        set method(val: string);
        /**
         * If %TRUE, this connection will never be the default IPv4 connection,
         * meaning it will never be assigned the default route by NetworkManager.
         */
        get never_default(): boolean;
        set never_default(val: boolean);
        /**
         * If %TRUE, this connection will never be the default IPv4 connection,
         * meaning it will never be assigned the default route by NetworkManager.
         */
        get neverDefault(): boolean;
        set neverDefault(val: boolean);
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
        get route_metric(): number;
        set route_metric(val: number);
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
        get routeMetric(): number;
        set routeMetric(val: number);

        // Constructors

        constructor(properties?: Partial<SettingIP4Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingIP4Config;

        // Methods

        /**
         * Adds a new IPv4 address and associated information to the setting.  The
         * given address is duplicated internally and is not changed by this function.
         * @param address the new address to add
         * @returns %TRUE if the address was added; %FALSE if the address was already known.
         */
        add_address(address: IP4Address): boolean;
        /**
         * Adds a new DNS server to the setting.
         * @param dns the IPv4 address (network byte order) of the DNS server to add
         * @returns %TRUE if the DNS server was added; %FALSE if the server was already known
         */
        add_dns(dns: number): boolean;
        /**
         * Adds a new DNS search domain to the setting.
         * @param dns_search the search domain to add
         * @returns %TRUE if the DNS search domain was added; %FALSE if the search domain was already known
         */
        add_dns_search(dns_search: string): boolean;
        /**
         * Adds a new IPv4 route and associated information to the setting.  The
         * given route is duplicated internally and is not changed by this function.
         * @param route the route to add
         * @returns %TRUE if the route was added; %FALSE if the route was already known.
         */
        add_route(route: IP4Route): boolean;
        /**
         * Removes all configured addresses.
         */
        clear_addresses(): void;
        /**
         * Removes all configured DNS servers.
         */
        clear_dns(): void;
        /**
         * Removes all configured DNS search domains.
         */
        clear_dns_searches(): void;
        /**
         * Removes all configured routes.
         */
        clear_routes(): void;
        get_address(i: number): IP4Address;
        /**
         * Returns the value contained in the #NMSettingIP4Config:dhcp-client-id
         * property.
         * @returns the configured Client ID to send to the DHCP server when requesting addresses via DHCP.
         */
        get_dhcp_client_id(): string;
        /**
         * Returns the value contained in the #NMSettingIP4Config:dhcp-hostname
         * property.
         * @returns the configured hostname to send to the DHCP server
         */
        get_dhcp_hostname(): string;
        /**
         * Returns the value contained in the #NMSettingIP4Config:dhcp-send-hostname
         * property.
         * @returns %TRUE if NetworkManager should send the machine hostname to the DHCP server when requesting addresses to allow the server to automatically update DNS information for this machine.
         */
        get_dhcp_send_hostname(): boolean;
        /**
         * Returns the value contained in the #NMSettingIP4Config:dhcp-timeout
         * property.
         * @returns The number of seconds after which unfinished DHCP transaction fails or zero for "default".
         */
        get_dhcp_timeout(): number;
        get_dns(i: number): number;
        get_dns_search(i: number): string;
        /**
         * Returns the value contained in the #NMSettingIP4Config:ignore-auto-dns
         * property.
         * @returns %TRUE if automatically configured (ie via DHCP) DNS information should be ignored.
         */
        get_ignore_auto_dns(): boolean;
        /**
         * Returns the value contained in the #NMSettingIP4Config:ignore-auto-routes
         * property.
         * @returns %TRUE if automatically configured (ie via DHCP) routes should be ignored.
         */
        get_ignore_auto_routes(): boolean;
        /**
         * Returns the value contained in the #NMSettingIP4Config:may-fail
         * property.
         * @returns %TRUE if this connection doesn't require IPv4 addressing to complete for the connection to succeed.
         */
        get_may_fail(): boolean;
        get_method(): string;
        /**
         * Returns the value contained in the #NMSettingIP4Config:never-default
         * property.
         * @returns %TRUE if this connection should never be the default connection for IPv4 addressing
         */
        get_never_default(): boolean;
        get_num_addresses(): number;
        get_num_dns(): number;
        get_num_dns_searches(): number;
        get_num_routes(): number;
        get_route(i: number): IP4Route;
        /**
         * Returns the value contained in the #NMSettingIP4Config:route-metric
         * property.
         * @returns the route metric that is used for IPv4 routes that don't explicitly specify a metric. See #NMSettingIP4Config:route-metric for more details.
         */
        get_route_metric(): number;
        /**
         * Removes the address at index `i`.
         * @param i index number of the address to remove
         */
        remove_address(i: number): void;
        /**
         * Removes the address `address`.
         * @param address the IP address to remove
         * @returns %TRUE if the address was found and removed; %FALSE if it was not.
         */
        remove_address_by_value(address: IP4Address): boolean;
        /**
         * Removes the DNS server at index `i`.
         * @param i index number of the DNS server to remove
         */
        remove_dns(i: number): void;
        /**
         * Removes the DNS server `dns`.
         * @param dns the DNS server to remove
         * @returns %TRUE if the DNS server was found and removed; %FALSE if it was not. domain was already known
         */
        remove_dns_by_value(dns: number): boolean;
        /**
         * Removes the DNS search domain at index `i`.
         * @param i index number of the DNS search domain
         */
        remove_dns_search(i: number): void;
        /**
         * Removes the DNS search domain `dns_search`.
         * @param dns_search the search domain to remove
         * @returns %TRUE if the DNS search domain was found and removed; %FALSE if it was not. Since 0.9.10
         */
        remove_dns_search_by_value(dns_search: string): boolean;
        /**
         * Removes the route at index `i`.
         * @param i index number of the route
         */
        remove_route(i: number): void;
        /**
         * Removes the route `route`.
         * @param route the route to remove
         * @returns %TRUE if the route was found and removed; %FALSE if it was not.
         */
        remove_route_by_value(route: IP4Route): boolean;
    }

    namespace SettingIP6Config {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            dhcp_hostname: string;
            dhcpHostname: string;
            ignore_auto_dns: boolean;
            ignoreAutoDns: boolean;
            ignore_auto_routes: boolean;
            ignoreAutoRoutes: boolean;
            ip6_privacy: number;
            ip6Privacy: number;
            may_fail: boolean;
            mayFail: boolean;
            method: string;
            never_default: boolean;
            neverDefault: boolean;
            route_metric: number;
            routeMetric: number;
        }
    }

    class SettingIP6Config extends Setting {
        static $gtype: GObject.GType<SettingIP6Config>;
        declare static readonly __signalSignatures: SettingIP6Config.SignalSignatures;

        // Properties

        /**
         * The specified name will be sent to the DHCP server when acquiring a
         * lease.
         */
        get dhcp_hostname(): string;
        set dhcp_hostname(val: string);
        /**
         * The specified name will be sent to the DHCP server when acquiring a
         * lease.
         */
        get dhcpHostname(): string;
        set dhcpHostname(val: string);
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured nameservers and search domains are
         * ignored and only nameservers and search domains specified in the
         * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
         * any, are used.
         */
        get ignore_auto_dns(): boolean;
        set ignore_auto_dns(val: boolean);
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured nameservers and search domains are
         * ignored and only nameservers and search domains specified in the
         * #NMSettingIP6Config:dns and #NMSettingIP6Config:dns-search properties, if
         * any, are used.
         */
        get ignoreAutoDns(): boolean;
        set ignoreAutoDns(val: boolean);
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured routes are ignored and only routes
         * specified in the #NMSettingIP6Config:routes property, if any, are used.
         */
        get ignore_auto_routes(): boolean;
        set ignore_auto_routes(val: boolean);
        /**
         * When the method is set to "auto" or "dhcp" and this property is set to
         * %TRUE, automatically configured routes are ignored and only routes
         * specified in the #NMSettingIP6Config:routes property, if any, are used.
         */
        get ignoreAutoRoutes(): boolean;
        set ignoreAutoRoutes(val: boolean);
        /**
         * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
         * enabled, it makes the kernel generate a temporary IPv6 address in
         * addition to the public one generated from MAC address via modified
         * EUI-64.  This enhances privacy, but could cause problems in some
         * applications, on the other hand.  The permitted values are: 0: disabled,
         * 1: enabled (prefer public address), 2: enabled (prefer temporary
         * addresses).
         */
        get ip6_privacy(): number;
        set ip6_privacy(val: number);
        /**
         * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.  If
         * enabled, it makes the kernel generate a temporary IPv6 address in
         * addition to the public one generated from MAC address via modified
         * EUI-64.  This enhances privacy, but could cause problems in some
         * applications, on the other hand.  The permitted values are: 0: disabled,
         * 1: enabled (prefer public address), 2: enabled (prefer temporary
         * addresses).
         */
        get ip6Privacy(): number;
        set ip6Privacy(val: number);
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv6
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv4-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv6 configuration fails but IPv4
         * configuration completes successfully.
         */
        get may_fail(): boolean;
        set may_fail(val: boolean);
        /**
         * If %TRUE, allow overall network configuration to proceed even if IPv6
         * configuration times out.  Note that at least one IP configuration must
         * succeed or overall network configuration will still fail.  For example,
         * in IPv4-only networks, setting this property to %TRUE allows the overall
         * network configuration to succeed if IPv6 configuration fails but IPv4
         * configuration completes successfully.
         */
        get mayFail(): boolean;
        set mayFail(val: boolean);
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
        get method(): string;
        set method(val: string);
        /**
         * If %TRUE, this connection will never be the default IPv6 connection,
         * meaning it will never be assigned the default IPv6 route by
         * NetworkManager.
         */
        get never_default(): boolean;
        set never_default(val: boolean);
        /**
         * If %TRUE, this connection will never be the default IPv6 connection,
         * meaning it will never be assigned the default IPv6 route by
         * NetworkManager.
         */
        get neverDefault(): boolean;
        set neverDefault(val: boolean);
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
        get route_metric(): number;
        set route_metric(val: number);
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
        get routeMetric(): number;
        set routeMetric(val: number);

        // Constructors

        constructor(properties?: Partial<SettingIP6Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingIP6Config;

        // Methods

        /**
         * Adds a new IPv6 address and associated information to the setting.  The
         * given address is duplicated internally and is not changed by this function.
         * @param address the new address to add
         * @returns %TRUE if the address was added; %FALSE if the address was already known.
         */
        add_address(address: IP6Address): boolean;
        /**
         * Adds a new DNS server to the setting.
         * @param dns the IPv6 address of the DNS server to add
         * @returns %TRUE if the DNS server was added; %FALSE if the server was already known
         */
        add_dns(dns?: any | null): boolean;
        /**
         * Adds a new DNS search domain to the setting.
         * @param dns_search the search domain to add
         * @returns %TRUE if the DNS search domain was added; %FALSE if the search domain was already known
         */
        add_dns_search(dns_search: string): boolean;
        /**
         * Adds a new IPv6 route and associated information to the setting.  The
         * given route is duplicated internally and is not changed by this function.
         * @param route the route to add
         * @returns %TRUE if the route was added; %FALSE if the route was already known.
         */
        add_route(route: IP6Route): boolean;
        /**
         * Removes all configured addresses.
         */
        clear_addresses(): void;
        /**
         * Removes all configured DNS servers.
         */
        clear_dns(): void;
        /**
         * Removes all configured DNS search domains.
         */
        clear_dns_searches(): void;
        /**
         * Removes all configured routes.
         */
        clear_routes(): void;
        get_address(i: number): IP6Address;
        /**
         * Returns the value contained in the #NMSettingIP6Config:dhcp-hostname
         * property.
         * @returns the configured hostname to send to the DHCP server
         */
        get_dhcp_hostname(): string;
        get_dns(i: number): any | null;
        get_dns_search(i: number): string;
        /**
         * Returns the value contained in the #NMSettingIP6Config:ignore-auto-dns
         * property.
         * @returns %TRUE if automatically configured (ie via DHCP or router advertisements) DNS information should be ignored.
         */
        get_ignore_auto_dns(): boolean;
        /**
         * Returns the value contained in the #NMSettingIP6Config:ignore-auto-routes
         * property.
         * @returns %TRUE if automatically configured (ie via DHCP) routes should be ignored.
         */
        get_ignore_auto_routes(): boolean;
        /**
         * Returns the value contained in the #NMSettingIP6Config:ip6-privacy
         * property.
         * @returns IPv6 Privacy Extensions configuration value (#NMSettingIP6ConfigPrivacy).
         */
        get_ip6_privacy(): SettingIP6ConfigPrivacy;
        /**
         * Returns the value contained in the #NMSettingIP6Config:may-fail
         * property.
         * @returns %TRUE if this connection doesn't require IPv6 addressing to complete for the connection to succeed.
         */
        get_may_fail(): boolean;
        get_method(): string;
        /**
         * Returns the value contained in the #NMSettingIP6Config:never-default
         * property.
         * @returns %TRUE if this connection should never be the default connection for IPv6 addressing
         */
        get_never_default(): boolean;
        get_num_addresses(): number;
        get_num_dns(): number;
        get_num_dns_searches(): number;
        get_num_routes(): number;
        get_route(i: number): IP6Route;
        /**
         * Returns the value contained in the #NMSettingIP6Config:route-metric
         * property.
         * @returns the route metric that is used for IPv6 routes that don't explicitly specify a metric. See #NMSettingIP6Config:route-metric for more details.
         */
        get_route_metric(): number;
        /**
         * Removes the address at index `i`.
         * @param i index number of the address to remove
         */
        remove_address(i: number): void;
        /**
         * Removes the address `address`.
         * @param address the address to remove
         * @returns %TRUE if the address was found and removed; %FALSE if it was not.
         */
        remove_address_by_value(address: IP6Address): boolean;
        /**
         * Removes the DNS server at index `i`.
         * @param i index number of the DNS server to remove
         */
        remove_dns(i: number): void;
        /**
         * Removes the DNS server at index `i`.
         * @param dns the IPv6 address of the DNS server to remove
         * @returns %TRUE if the DNS server was found and removed; %FALSE if it was not.
         */
        remove_dns_by_value(dns?: any | null): boolean;
        /**
         * Removes the DNS search domain at index `i`.
         * @param i index number of the DNS search domain
         */
        remove_dns_search(i: number): void;
        /**
         * Removes the DNS search domain `dns_search`.
         * @param dns_search the search domain to remove
         * @returns %TRUE if the DNS search domain was found and removed; %FALSE if it was not. Since 0.9.10
         */
        remove_dns_search_by_value(dns_search: string): boolean;
        /**
         * Removes the route at index `i`.
         * @param i index number of the route
         */
        remove_route(i: number): void;
        /**
         * Removes the route `route`.
         * @param route the route to remove
         * @returns %TRUE if the route was found and removed; %FALSE if it was not.
         */
        remove_route_by_value(route: IP6Route): boolean;
    }

    namespace SettingInfiniband {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            mtu: number;
            p_key: number;
            pKey: number;
            parent: string;
            transport_mode: string;
            transportMode: string;
        }
    }

    class SettingInfiniband extends Setting {
        static $gtype: GObject.GType<SettingInfiniband>;
        declare static readonly __signalSignatures: SettingInfiniband.SignalSignatures;

        // Properties

        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple frames.
         */
        get mtu(): number;
        set mtu(val: number);
        /**
         * The InfiniBand P_Key to use for this device. A value of -1 means to use
         * the default P_Key (aka "the P_Key at index 0").  Otherwise it is a 16-bit
         * unsigned integer, whose high bit is set if it is a "full membership"
         * P_Key.
         */
        get p_key(): number;
        set p_key(val: number);
        /**
         * The InfiniBand P_Key to use for this device. A value of -1 means to use
         * the default P_Key (aka "the P_Key at index 0").  Otherwise it is a 16-bit
         * unsigned integer, whose high bit is set if it is a "full membership"
         * P_Key.
         */
        get pKey(): number;
        set pKey(val: number);
        /**
         * The interface name of the parent device of this device. Normally %NULL,
         * but if the #NMSettingInfiniband:p_key property is set, then you must
         * specify the base device by setting either this property or
         * #NMSettingInfiniband:mac-address.
         */
        get parent(): string;
        set parent(val: string);
        /**
         * The IP-over-InfiniBand transport mode. Either "datagram" or
         * "connected".
         */
        get transport_mode(): string;
        set transport_mode(val: string);
        /**
         * The IP-over-InfiniBand transport mode. Either "datagram" or
         * "connected".
         */
        get transportMode(): string;
        set transportMode(val: string);

        // Constructors

        constructor(properties?: Partial<SettingInfiniband.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingInfiniband;

        // Methods

        get_mac_address(): Uint8Array;
        get_mtu(): number;
        /**
         * Returns the P_Key to use for this device. A value of -1 means to
         * use the default P_Key (aka "the P_Key at index 0"). Otherwise it is
         * a 16-bit unsigned integer.
         * @returns the IPoIB P_Key
         */
        get_p_key(): number;
        /**
         * Returns the parent interface name for this device, if set.
         * @returns the parent interface name
         */
        get_parent(): string;
        /**
         * Returns the transport mode for this device. Either 'datagram' or
         * 'connected'.
         * @returns the IPoIB transport mode
         */
        get_transport_mode(): string;
    }

    namespace SettingOlpcMesh {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            channel: number;
        }
    }

    class SettingOlpcMesh extends Setting {
        static $gtype: GObject.GType<SettingOlpcMesh>;
        declare static readonly __signalSignatures: SettingOlpcMesh.SignalSignatures;

        // Properties

        /**
         * Channel on which the mesh network to join is located.
         */
        get channel(): number;
        set channel(val: number);

        // Constructors

        constructor(properties?: Partial<SettingOlpcMesh.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingOlpcMesh;

        // Methods

        get_channel(): number;
        get_dhcp_anycast_address(): Uint8Array;
        get_ssid(): Uint8Array;
    }

    namespace SettingPPP {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            baud: number;
            crtscts: boolean;
            lcp_echo_failure: number;
            lcpEchoFailure: number;
            lcp_echo_interval: number;
            lcpEchoInterval: number;
            mppe_stateful: boolean;
            mppeStateful: boolean;
            mru: number;
            mtu: number;
            no_vj_comp: boolean;
            noVjComp: boolean;
            noauth: boolean;
            nobsdcomp: boolean;
            nodeflate: boolean;
            refuse_chap: boolean;
            refuseChap: boolean;
            refuse_eap: boolean;
            refuseEap: boolean;
            refuse_mschap: boolean;
            refuseMschap: boolean;
            refuse_mschapv2: boolean;
            refuseMschapv2: boolean;
            refuse_pap: boolean;
            refusePap: boolean;
            require_mppe: boolean;
            requireMppe: boolean;
            require_mppe_128: boolean;
            requireMppe128: boolean;
        }
    }

    class SettingPPP extends Setting {
        static $gtype: GObject.GType<SettingPPP>;
        declare static readonly __signalSignatures: SettingPPP.SignalSignatures;

        // Properties

        /**
         * If non-zero, instruct pppd to set the serial port to the specified
         * baudrate.  This value should normally be left as 0 to automatically
         * choose the speed.
         */
        get baud(): number;
        set baud(val: number);
        /**
         * If %TRUE, specify that pppd should set the serial port to use hardware
         * flow control with RTS and CTS signals.  This value should normally be set
         * to %FALSE.
         */
        get crtscts(): boolean;
        set crtscts(val: boolean);
        /**
         * If non-zero, instruct pppd to presume the connection to the peer has
         * failed if the specified number of LCP echo-requests go unanswered by the
         * peer.  The "lcp-echo-interval" property must also be set to a non-zero
         * value if this property is used.
         */
        get lcp_echo_failure(): number;
        set lcp_echo_failure(val: number);
        /**
         * If non-zero, instruct pppd to presume the connection to the peer has
         * failed if the specified number of LCP echo-requests go unanswered by the
         * peer.  The "lcp-echo-interval" property must also be set to a non-zero
         * value if this property is used.
         */
        get lcpEchoFailure(): number;
        set lcpEchoFailure(val: number);
        /**
         * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
         * every n seconds (where n is the specified value).  Note that some PPP
         * peers will respond to echo requests and some will not, and it is not
         * possible to autodetect this.
         */
        get lcp_echo_interval(): number;
        set lcp_echo_interval(val: number);
        /**
         * If non-zero, instruct pppd to send an LCP echo-request frame to the peer
         * every n seconds (where n is the specified value).  Note that some PPP
         * peers will respond to echo requests and some will not, and it is not
         * possible to autodetect this.
         */
        get lcpEchoInterval(): number;
        set lcpEchoInterval(val: number);
        /**
         * If %TRUE, stateful MPPE is used.  See pppd documentation for more
         * information on stateful MPPE.
         */
        get mppe_stateful(): boolean;
        set mppe_stateful(val: boolean);
        /**
         * If %TRUE, stateful MPPE is used.  See pppd documentation for more
         * information on stateful MPPE.
         */
        get mppeStateful(): boolean;
        set mppeStateful(val: boolean);
        /**
         * If non-zero, instruct pppd to request that the peer send packets no
         * larger than the specified size.  If non-zero, the MRU should be between
         * 128 and 16384.
         */
        get mru(): number;
        set mru(val: number);
        /**
         * If non-zero, instruct pppd to send packets no larger than the specified
         * size.
         */
        get mtu(): number;
        set mtu(val: number);
        /**
         * If %TRUE, Van Jacobsen TCP header compression will not be requested.
         */
        get no_vj_comp(): boolean;
        set no_vj_comp(val: boolean);
        /**
         * If %TRUE, Van Jacobsen TCP header compression will not be requested.
         */
        get noVjComp(): boolean;
        set noVjComp(val: boolean);
        /**
         * If %TRUE, do not require the other side (usually the PPP server) to
         * authenticate itself to the client.  If %FALSE, require authentication
         * from the remote side.  In almost all cases, this should be %TRUE.
         */
        get noauth(): boolean;
        set noauth(val: boolean);
        /**
         * If %TRUE, BSD compression will not be requested.
         */
        get nobsdcomp(): boolean;
        set nobsdcomp(val: boolean);
        /**
         * If %TRUE, "deflate" compression will not be requested.
         */
        get nodeflate(): boolean;
        set nodeflate(val: boolean);
        /**
         * If %TRUE, the CHAP authentication method will not be used.
         */
        get refuse_chap(): boolean;
        set refuse_chap(val: boolean);
        /**
         * If %TRUE, the CHAP authentication method will not be used.
         */
        get refuseChap(): boolean;
        set refuseChap(val: boolean);
        /**
         * If %TRUE, the EAP authentication method will not be used.
         */
        get refuse_eap(): boolean;
        set refuse_eap(val: boolean);
        /**
         * If %TRUE, the EAP authentication method will not be used.
         */
        get refuseEap(): boolean;
        set refuseEap(val: boolean);
        /**
         * If %TRUE, the MSCHAP authentication method will not be used.
         */
        get refuse_mschap(): boolean;
        set refuse_mschap(val: boolean);
        /**
         * If %TRUE, the MSCHAP authentication method will not be used.
         */
        get refuseMschap(): boolean;
        set refuseMschap(val: boolean);
        /**
         * If %TRUE, the MSCHAPv2 authentication method will not be used.
         */
        get refuse_mschapv2(): boolean;
        set refuse_mschapv2(val: boolean);
        /**
         * If %TRUE, the MSCHAPv2 authentication method will not be used.
         */
        get refuseMschapv2(): boolean;
        set refuseMschapv2(val: boolean);
        /**
         * If %TRUE, the PAP authentication method will not be used.
         */
        get refuse_pap(): boolean;
        set refuse_pap(val: boolean);
        /**
         * If %TRUE, the PAP authentication method will not be used.
         */
        get refusePap(): boolean;
        set refusePap(val: boolean);
        /**
         * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
         * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
         * session will fail.  Note that MPPE is not used on mobile broadband
         * connections.
         */
        get require_mppe(): boolean;
        set require_mppe(val: boolean);
        /**
         * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for
         * the PPP session.  If either 64-bit or 128-bit MPPE is not available the
         * session will fail.  Note that MPPE is not used on mobile broadband
         * connections.
         */
        get requireMppe(): boolean;
        set requireMppe(val: boolean);
        /**
         * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
         * required for the PPP session, and the "require-mppe" property must also
         * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
         */
        get require_mppe_128(): boolean;
        set require_mppe_128(val: boolean);
        /**
         * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be
         * required for the PPP session, and the "require-mppe" property must also
         * be set to %TRUE.  If 128-bit MPPE is not available the session will fail.
         */
        get requireMppe128(): boolean;
        set requireMppe128(val: boolean);

        // Constructors

        constructor(properties?: Partial<SettingPPP.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingPPP;

        // Methods

        get_baud(): number;
        get_crtscts(): boolean;
        get_lcp_echo_failure(): number;
        get_lcp_echo_interval(): number;
        get_mppe_stateful(): boolean;
        get_mru(): number;
        get_mtu(): number;
        get_no_vj_comp(): boolean;
        get_noauth(): boolean;
        get_nobsdcomp(): boolean;
        get_nodeflate(): boolean;
        get_refuse_chap(): boolean;
        get_refuse_eap(): boolean;
        get_refuse_mschap(): boolean;
        get_refuse_mschapv2(): boolean;
        get_refuse_pap(): boolean;
        get_require_mppe(): boolean;
        get_require_mppe_128(): boolean;
    }

    namespace SettingPPPOE {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            password: string;
            password_flags: number;
            passwordFlags: number;
            service: string;
            username: string;
        }
    }

    class SettingPPPOE extends Setting {
        static $gtype: GObject.GType<SettingPPPOE>;
        declare static readonly __signalSignatures: SettingPPPOE.SignalSignatures;

        // Properties

        /**
         * Password used to authenticate with the PPPoE service.
         */
        get password(): string;
        set password(val: string);
        /**
         * Flags indicating how to handle the #NMSettingPPPOE:password property.
         */
        get password_flags(): number;
        set password_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingPPPOE:password property.
         */
        get passwordFlags(): number;
        set passwordFlags(val: number);
        /**
         * If specified, instruct PPPoE to only initiate sessions with access
         * concentrators that provide the specified service.  For most providers,
         * this should be left blank.  It is only required if there are multiple
         * access concentrators or a specific service is known to be required.
         */
        get service(): string;
        set service(val: string);
        /**
         * Username used to authenticate with the PPPoE service.
         */
        get username(): string;
        set username(val: string);

        // Constructors

        constructor(properties?: Partial<SettingPPPOE.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingPPPOE;

        // Methods

        get_password(): string;
        get_password_flags(): SettingSecretFlags;
        get_service(): string;
        get_username(): string;
    }

    namespace SettingSerial {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            baud: number;
            bits: number;
            parity: number;
            send_delay: number;
            sendDelay: number;
            stopbits: number;
        }
    }

    class SettingSerial extends Setting {
        static $gtype: GObject.GType<SettingSerial>;
        declare static readonly __signalSignatures: SettingSerial.SignalSignatures;

        // Properties

        /**
         * Speed to use for communication over the serial port.  Note that this
         * value usually has no effect for mobile broadband modems as they generally
         * ignore speed settings and use the highest available speed.
         */
        get baud(): number;
        set baud(val: number);
        /**
         * Byte-width of the serial communication. The 8 in "8n1" for example.
         */
        get bits(): number;
        set bits(val: number);
        /**
         * Parity setting of the serial port.  Either 'E' for even parity, 'o' for
         * odd parity, or 'n' for no parity.
         */
        get parity(): number;
        set parity(val: number);
        /**
         * Time to delay between each byte sent to the modem, in microseconds.
         */
        get send_delay(): number;
        set send_delay(val: number);
        /**
         * Time to delay between each byte sent to the modem, in microseconds.
         */
        get sendDelay(): number;
        set sendDelay(val: number);
        /**
         * Number of stop bits for communication on the serial port.  Either 1 or 2.
         * The 1 in "8n1" for example.
         */
        get stopbits(): number;
        set stopbits(val: number);

        // Constructors

        constructor(properties?: Partial<SettingSerial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingSerial;

        // Methods

        get_baud(): number;
        get_bits(): number;
        get_parity(): number;
        get_send_delay(): number;
        get_stopbits(): number;
    }

    namespace SettingTeam {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            config: string;
            interface_name: string;
            interfaceName: string;
        }
    }

    class SettingTeam extends Setting {
        static $gtype: GObject.GType<SettingTeam>;
        declare static readonly __signalSignatures: SettingTeam.SignalSignatures;

        // Properties

        /**
         * The JSON configuration for the team network interface.  The property
         * should contain raw JSON configuration data suitable for teamd, because
         * the value is passed directly to teamd. If not specified, the default
         * configuration is used.  See man teamd.conf for the format details.
         */
        get config(): string;
        set config(val: string);
        /**
         * The name of the virtual in-kernel team network interface
         */
        get interface_name(): string;
        set interface_name(val: string);
        /**
         * The name of the virtual in-kernel team network interface
         */
        get interfaceName(): string;
        set interfaceName(val: string);

        // Constructors

        constructor(properties?: Partial<SettingTeam.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingTeam;

        // Methods

        get_config(): string;
        get_interface_name(): string;
    }

    namespace SettingTeamPort {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            config: string;
        }
    }

    class SettingTeamPort extends Setting {
        static $gtype: GObject.GType<SettingTeamPort>;
        declare static readonly __signalSignatures: SettingTeamPort.SignalSignatures;

        // Properties

        /**
         * The JSON configuration for the team port. The property should contain raw
         * JSON configuration data suitable for teamd, because the value is passed
         * directly to teamd. If not specified, the default configuration is
         * used. See man teamd.conf for the format details.
         */
        get config(): string;
        set config(val: string);

        // Constructors

        constructor(properties?: Partial<SettingTeamPort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingTeamPort;

        // Methods

        get_config(): string;
    }

    namespace SettingVPN {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            persistent: boolean;
            service_type: string;
            serviceType: string;
            user_name: string;
            userName: string;
        }
    }

    class SettingVPN extends Setting {
        static $gtype: GObject.GType<SettingVPN>;
        declare static readonly __signalSignatures: SettingVPN.SignalSignatures;

        // Properties

        /**
         * If the VPN service supports persistence, and this property is %TRUE,
         * the VPN will attempt to stay connected across link changes and outages,
         * until explicitly disconnected.
         */
        get persistent(): boolean;
        set persistent(val: boolean);
        /**
         * D-Bus service name of the VPN plugin that this setting uses to connect to
         * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
         * plugin.
         */
        get service_type(): string;
        set service_type(val: string);
        /**
         * D-Bus service name of the VPN plugin that this setting uses to connect to
         * its network.  i.e. org.freedesktop.NetworkManager.vpnc for the vpnc
         * plugin.
         */
        get serviceType(): string;
        set serviceType(val: string);
        /**
         * If the VPN connection requires a user name for authentication, that name
         * should be provided here.  If the connection is available to more than one
         * user, and the VPN requires each user to supply a different name, then
         * leave this property empty.  If this property is empty, NetworkManager
         * will automatically supply the username of the user which requested the
         * VPN connection.
         */
        get user_name(): string;
        set user_name(val: string);
        /**
         * If the VPN connection requires a user name for authentication, that name
         * should be provided here.  If the connection is available to more than one
         * user, and the VPN requires each user to supply a different name, then
         * leave this property empty.  If this property is empty, NetworkManager
         * will automatically supply the username of the user which requested the
         * VPN connection.
         */
        get userName(): string;
        set userName(val: string);

        // Constructors

        constructor(properties?: Partial<SettingVPN.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingVPN;

        // Methods

        /**
         * Establishes a relationship between `key` and `item` internally in the
         * setting which may be retrieved later.  Should not be used to store passwords
         * or other secrets, which is what nm_setting_vpn_add_secret() is for.
         * @param key a name that uniquely identifies the given value @item
         * @param item the value to be referenced by @key
         */
        add_data_item(key: string, item: string): void;
        /**
         * Establishes a relationship between `key` and `secret` internally in the
         * setting which may be retrieved later.
         * @param key a name that uniquely identifies the given secret @secret
         * @param secret the secret to be referenced by @key
         */
        add_secret(key: string, secret: string): void;
        /**
         * Iterates all data items stored in this setting.  It is safe to add, remove,
         * and modify data items inside `func,` though any additions or removals made
         * during iteration will not be part of the iteration.
         * @param func an user provided function
         */
        foreach_data_item(func: VPNIterFunc): void;
        /**
         * Iterates all secrets stored in this setting.  It is safe to add, remove,
         * and modify secrets inside `func,` though any additions or removals made during
         * iteration will not be part of the iteration.
         * @param func an user provided function
         */
        foreach_secret(func: VPNIterFunc): void;
        /**
         * Retrieves the data item of a key/value relationship previously established
         * by nm_setting_vpn_add_data_item().
         * @param key the name of the data item to retrieve
         * @returns the data item, if any
         */
        get_data_item(key: string): string;
        /**
         * Gets number of key/value pairs of VPN configuration data.
         * @returns the number of VPN plugin specific configuration data items
         */
        get_num_data_items(): number;
        /**
         * Gets number of VPN plugin specific secrets in the setting.
         * @returns the number of VPN plugin specific secrets
         */
        get_num_secrets(): number;
        get_persistent(): boolean;
        /**
         * Retrieves the secret of a key/value relationship previously established
         * by nm_setting_vpn_add_secret().
         * @param key the name of the secret to retrieve
         * @returns the secret, if any
         */
        get_secret(key: string): string;
        /**
         * Returns the service name of the VPN, which identifies the specific VPN
         * plugin that should be used to connect to this VPN.
         * @returns the VPN plugin's service name
         */
        get_service_type(): string;
        get_user_name(): string;
        /**
         * Deletes a key/value relationship previously established by
         * nm_setting_vpn_add_data_item().
         * @param key the name of the data item to remove
         * @returns %TRUE if the data item was found and removed from the internal list, %FALSE if it was not.
         */
        remove_data_item(key: string): boolean;
        /**
         * Deletes a key/value relationship previously established by
         * nm_setting_vpn_add_secret().
         * @param key the name of the secret to remove
         * @returns %TRUE if the secret was found and removed from the internal list, %FALSE if it was not.
         */
        remove_secret(key: string): boolean;
    }

    namespace SettingVlan {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            flags: number;
            id: number;
            interface_name: string;
            interfaceName: string;
            parent: string;
        }
    }

    class SettingVlan extends Setting {
        static $gtype: GObject.GType<SettingVlan>;
        declare static readonly __signalSignatures: SettingVlan.SignalSignatures;

        // Properties

        /**
         * One or more flags which control the behavior and features of the VLAN
         * interface.  Flags include %NM_VLAN_FLAG_REORDER_HEADERS (reordering of
         * output packet headers), %NM_VLAN_FLAG_GVRP (use of the GVRP protocol),
         * and %NM_VLAN_FLAG_LOOSE_BINDING (loose binding of the interface to its
         * master device's operating state), %NM_VLAN_FLAG_MVRP (use of the MVRP
         * protocol).
         */
        get flags(): number;
        set flags(val: number);
        /**
         * The VLAN identifier that the interface created by this connection should
         * be assigned.
         */
        get id(): number;
        set id(val: number);
        /**
         * If given, specifies the kernel name of the VLAN interface. If not given,
         * a default name will be constructed from the interface described by the
         * parent interface and the #NMSettingVlan:id property, eg "eth2.1". The
         * parent interface may be given by the #NMSettingVlan:parent property or by
         * the #NMSettingWired:mac-address property of an #NMSettingWired setting.
         */
        get interface_name(): string;
        set interface_name(val: string);
        /**
         * If given, specifies the kernel name of the VLAN interface. If not given,
         * a default name will be constructed from the interface described by the
         * parent interface and the #NMSettingVlan:id property, eg "eth2.1". The
         * parent interface may be given by the #NMSettingVlan:parent property or by
         * the #NMSettingWired:mac-address property of an #NMSettingWired setting.
         */
        get interfaceName(): string;
        set interfaceName(val: string);
        /**
         * If given, specifies the parent interface name or parent connection UUID
         * from which this VLAN interface should be created.  If this property is
         * not specified, the connection must contain an #NMSettingWired setting
         * with a #NMSettingWired:mac-address property.
         */
        get parent(): string;
        set parent(val: string);

        // Constructors

        constructor(properties?: Partial<SettingVlan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingVlan;

        // Methods

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
         * @returns %TRUE if the new priority mapping was successfully added to the list, %FALSE if error
         */
        add_priority(map: VlanPriorityMap | null, from: number, to: number): boolean;
        /**
         * Adds a priority map entry into either the #NMSettingVlan:ingress_priority_map
         * or the #NMSettingVlan:egress_priority_map properties.  The priority map maps
         * the Linux SKB priorities to 802.1p priorities.
         * @param map the type of priority map
         * @param str the string which contains a priority map, like "3:7"
         * @returns %TRUE if the entry was successfully added to the list, or it overwrote the old value, %FALSE if error
         */
        add_priority_str(map: VlanPriorityMap | null, str: string): boolean;
        /**
         * Clear all the entries from #NMSettingVlan:ingress_priority_map or
         * #NMSettingVlan:egress_priority_map properties.
         * @param map the type of priority map
         */
        clear_priorities(map: VlanPriorityMap | null): void;
        get_flags(): number;
        get_id(): number;
        get_interface_name(): string;
        /**
         * Returns the number of entries in the
         * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
         * properties of this setting.
         * @param map the type of priority map
         * @returns return the number of ingress/egress priority entries, -1 if error
         */
        get_num_priorities(map: VlanPriorityMap | null): number;
        get_parent(): string;
        /**
         * Retrieve one of the entries of the #NMSettingVlan:ingress_priority_map
         * or #NMSettingVlan:egress_priority_map properties of this setting.
         * @param map the type of priority map
         * @param idx the zero-based index of the ingress/egress priority map entry
         * @returns %TRUE if a priority map was returned, %FALSE if error
         */
        get_priority(map: VlanPriorityMap | null, idx: number): [boolean, number, number];
        /**
         * Removes the priority map at index `idx` from the
         * #NMSettingVlan:ingress_priority_map or #NMSettingVlan:egress_priority_map
         * properties.
         * @param map the type of priority map
         * @param idx the zero-based index of the priority map to remove
         */
        remove_priority(map: VlanPriorityMap | null, idx: number): void;
        /**
         * Removes the priority map `form:``to` from the #NMSettingVlan:ingress_priority_map
         * or #NMSettingVlan:egress_priority_map (according to `map` argument)
         * properties.
         * @param map the type of priority map
         * @param from the priority to map to @to
         * @param to the priority to map @from to
         * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
         */
        remove_priority_by_value(map: VlanPriorityMap | null, from: number, to: number): boolean;
        /**
         * Removes the priority map `str` from the #NMSettingVlan:ingress_priority_map
         * or #NMSettingVlan:egress_priority_map (according to `map` argument)
         * properties.
         * @param map the type of priority map
         * @param str the string which contains a priority map, like "3:7"
         * @returns %TRUE if the priority mapping was found and removed; %FALSE if it was not.
         */
        remove_priority_str_by_value(map: VlanPriorityMap | null, str: string): boolean;
    }

    namespace SettingWimax {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            network_name: string;
            networkName: string;
        }
    }

    class SettingWimax extends Setting {
        static $gtype: GObject.GType<SettingWimax>;
        declare static readonly __signalSignatures: SettingWimax.SignalSignatures;

        // Properties

        /**
         * Network Service Provider (NSP) name of the WiMAX network this connection
         * should use.
         */
        get network_name(): string;
        set network_name(val: string);
        /**
         * Network Service Provider (NSP) name of the WiMAX network this connection
         * should use.
         */
        get networkName(): string;
        set networkName(val: string);

        // Constructors

        constructor(properties?: Partial<SettingWimax.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingWimax;

        // Methods

        /**
         * Returns the MAC address of a WiMAX device which this connection is locked
         * to.
         * @returns the MAC address
         */
        get_mac_address(): Uint8Array;
        /**
         * Returns the WiMAX NSP name (ex "Sprint" or "CLEAR") which identifies the
         * specific WiMAX network this setting describes a connection to.
         * @returns the WiMAX NSP name
         */
        get_network_name(): string;
    }

    namespace SettingWired {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            auto_negotiate: boolean;
            autoNegotiate: boolean;
            duplex: string;
            mtu: number;
            port: string;
            s390_nettype: string;
            s390Nettype: string;
            speed: number;
        }
    }

    class SettingWired extends Setting {
        static $gtype: GObject.GType<SettingWired>;
        declare static readonly __signalSignatures: SettingWired.SignalSignatures;

        // Properties

        /**
         * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
         * %FALSE, do not allow auto-negotiation, in which case the "speed" and
         * "duplex" properties should be set.
         */
        get auto_negotiate(): boolean;
        set auto_negotiate(val: boolean);
        /**
         * If %TRUE, allow auto-negotiation of port speed and duplex mode.  If
         * %FALSE, do not allow auto-negotiation, in which case the "speed" and
         * "duplex" properties should be set.
         */
        get autoNegotiate(): boolean;
        set autoNegotiate(val: boolean);
        /**
         * If specified, request that the device only use the specified duplex mode.
         * Either "half" or "full".
         */
        get duplex(): string;
        set duplex(val: string);
        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple Ethernet frames.
         */
        get mtu(): number;
        set mtu(val: number);
        /**
         * Specific port type to use if the device supports multiple
         * attachment methods.  One of "tp" (Twisted Pair), "aui" (Attachment Unit
         * Interface), "bnc" (Thin Ethernet) or "mii" (Media Independent Interface).
         * If the device supports only one port type, this setting is ignored.
         */
        get port(): string;
        set port(val: string);
        /**
         * s390 network device type; one of "qeth", "lcs", or "ctc", representing
         * the different types of virtual network devices available on s390 systems.
         */
        get s390_nettype(): string;
        set s390_nettype(val: string);
        /**
         * s390 network device type; one of "qeth", "lcs", or "ctc", representing
         * the different types of virtual network devices available on s390 systems.
         */
        get s390Nettype(): string;
        set s390Nettype(val: string);
        /**
         * If non-zero, request that the device use only the specified speed.  In
         * Mbit/s, ie 100 == 100Mbit/s.
         */
        get speed(): number;
        set speed(val: number);

        // Constructors

        constructor(properties?: Partial<SettingWired.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingWired;

        // Methods

        /**
         * Adds a new MAC address to the #NMSettingWired:mac-address-blacklist property.
         * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
         * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
         */
        add_mac_blacklist_item(mac: string): boolean;
        /**
         * Add an option to the table.  The option is compared to an internal list
         * of allowed options.  Key names may contain only alphanumeric characters
         * (ie [a-zA-Z0-9]).  Adding a new key replaces any existing key/value pair that
         * may already exist.
         * @param key key name for the option
         * @param value value for the option
         * @returns %TRUE if the option was valid and was added to the internal option list, %FALSE if it was not.
         */
        add_s390_option(key: string, value: string): boolean;
        /**
         * Removes all blacklisted MAC addresses.
         */
        clear_mac_blacklist_items(): void;
        get_auto_negotiate(): boolean;
        get_cloned_mac_address(): Uint8Array;
        get_duplex(): string;
        get_mac_address(): Uint8Array;
        get_mac_address_blacklist(): GLib.SList;
        get_mac_blacklist_item(idx: number): string;
        get_mtu(): number;
        get_num_mac_blacklist_items(): number;
        /**
         * Returns the number of s390-specific options that should be set for this
         * device when it is activated.  This can be used to retrieve each s390
         * option individually using nm_setting_wired_get_s390_option().
         * @returns the number of s390-specific device options
         */
        get_num_s390_options(): number;
        get_port(): string;
        /**
         * Returns the s390 device type this connection should apply to.  Will be one
         * of 'qeth', 'lcs', or 'ctc'.
         * @returns the s390 device type
         */
        get_s390_nettype(): string;
        /**
         * Given an index, return the value of the s390 option at that index.  indexes
         * are *not* guaranteed to be static across modifications to options done by
         * nm_setting_wired_add_s390_option() and nm_setting_wired_remove_s390_option(),
         * and should not be used to refer to options except for short periods of time
         * such as during option iteration.
         * @param idx index of the desired option, from 0 to nm_setting_wired_get_num_s390_options() - 1
         * @returns %TRUE on success if the index was valid and an option was found, %FALSE if the index was invalid (ie, greater than the number of options currently held by the setting)
         */
        get_s390_option(idx: number): [boolean, string, string];
        /**
         * Returns the value associated with the s390-specific option specified by
         * `key,` if it exists.
         * @param key the key for which to retrieve the value
         * @returns the value, or %NULL if the key/value pair was never added to the setting; the value is owned by the setting and must not be modified
         */
        get_s390_option_by_key(key: string): string;
        /**
         * Return the list of s390 subchannels that identify the device that this
         * connection is applicable to.  The connection should only be used in
         * conjunction with that device.
         * @returns #GPtrArray of strings, each specifying one subchannel the s390 device uses to communicate to the host.
         */
        get_s390_subchannels(): string[];
        get_speed(): number;
        /**
         * Returns a list of valid s390 options.
         * @returns a %NULL-terminated array of strings of valid s390 options.
         */
        get_valid_s390_options(): string[];
        /**
         * Removes the MAC address at index `idx` from the blacklist.
         * @param idx index number of the MAC address
         */
        remove_mac_blacklist_item(idx: number): void;
        /**
         * Removes the MAC address `mac` from the blacklist.
         * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
         * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
         */
        remove_mac_blacklist_item_by_value(mac: string): boolean;
        /**
         * Remove the s390-specific option referenced by `key` from the internal option
         * list.
         * @param key key name for the option to remove
         * @returns %TRUE if the option was found and removed from the internal option list, %FALSE if it was not.
         */
        remove_s390_option(key: string): boolean;
    }

    namespace SettingWireless {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            band: string;
            channel: number;
            hidden: boolean;
            mode: string;
            mtu: number;
            powersave: number;
            rate: number;
            security: string;
            tx_power: number;
            txPower: number;
        }
    }

    class SettingWireless extends Setting {
        static $gtype: GObject.GType<SettingWireless>;
        declare static readonly __signalSignatures: SettingWireless.SignalSignatures;

        // Properties

        /**
         * 802.11 frequency band of the network.  One of "a" for 5GHz 802.11a or
         * "bg" for 2.4GHz 802.11.  This will lock associations to the Wi-Fi network
         * to the specific band, i.e. if "a" is specified, the device will not
         * associate with the same network in the 2.4GHz band even if the network's
         * settings are compatible.  This setting depends on specific driver
         * capability and may not work with all drivers.
         */
        get band(): string;
        set band(val: string);
        /**
         * Wireless channel to use for the Wi-Fi connection.  The device will only
         * join (or create for Ad-Hoc networks) a Wi-Fi network on the specified
         * channel.  Because channel numbers overlap between bands, this property
         * also requires the "band" property to be set.
         */
        get channel(): number;
        set channel(val: number);
        /**
         * If %TRUE, indicates this network is a non-broadcasting network that hides
         * its SSID.  In this case various workarounds may take place, such as
         * probe-scanning the SSID for more reliable network discovery.  However,
         * these workarounds expose inherent insecurities with hidden SSID networks,
         * and thus hidden SSID networks should be used with caution.
         */
        get hidden(): boolean;
        set hidden(val: boolean);
        /**
         * Wi-Fi network mode; one of "infrastructure", "adhoc" or "ap".  If blank,
         * infrastructure is assumed.
         */
        get mode(): string;
        set mode(val: string);
        /**
         * If non-zero, only transmit packets of the specified size or smaller,
         * breaking larger packets up into multiple Ethernet frames.
         */
        get mtu(): number;
        set mtu(val: number);
        /**
         * If set to %FALSE, Wi-Fi power saving behavior is disabled.  If set to
         * %TRUE, Wi-Fi power saving behavior is enabled.  All other values are
         * reserved.  Note that even though only boolean values are allowed, the
         * property type is an unsigned integer to allow for future expansion.
         */
        get powersave(): number;
        set powersave(val: number);
        /**
         * If non-zero, directs the device to only use the specified bitrate for
         * communication with the access point.  Units are in Kb/s, ie 5500 = 5.5
         * Mbit/s.  This property is highly driver dependent and not all devices
         * support setting a static bitrate.
         */
        get rate(): number;
        set rate(val: number);
        /**
         * If the wireless connection has any security restrictions, like 802.1x,
         * WEP, or WPA, set this property to
         * %NM_SETTING_WIRELESS_SECURITY_SETTING_NAME and ensure the connection
         * contains a valid #NMSettingWirelessSecurity setting.
         */
        get security(): string;
        set security(val: string);
        /**
         * If non-zero, directs the device to use the specified transmit power.
         * Units are dBm.  This property is highly driver dependent and not all
         * devices support setting a static transmit power.
         */
        get tx_power(): number;
        set tx_power(val: number);
        /**
         * If non-zero, directs the device to use the specified transmit power.
         * Units are dBm.  This property is highly driver dependent and not all
         * devices support setting a static transmit power.
         */
        get txPower(): number;
        set txPower(val: number);

        // Constructors

        constructor(properties?: Partial<SettingWireless.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingWireless;

        // Methods

        /**
         * Adds a new MAC address to the #NMSettingWireless:mac-address-blacklist property.
         * @param mac the MAC address string (hex-digits-and-colons notation) to blacklist
         * @returns %TRUE if the MAC address was added; %FALSE if the MAC address is invalid or was already present
         */
        add_mac_blacklist_item(mac: string): boolean;
        /**
         * Adds a new Wi-Fi AP's BSSID to the previously seen BSSID list of the setting.
         * NetworkManager now tracks previously seen BSSIDs internally so this function
         * no longer has much use. Actually, changes you make using this function will
         * not be preserved.
         * @param bssid the new BSSID to add to the list
         * @returns %TRUE if @bssid was already known, %FALSE if not
         */
        add_seen_bssid(bssid: string): boolean;
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
        ap_security_compatible(
            s_wireless_sec: SettingWirelessSecurity,
            ap_flags: __80211ApFlags,
            ap_wpa: __80211ApSecurityFlags,
            ap_rsn: __80211ApSecurityFlags,
            ap_mode: __80211Mode,
        ): boolean;
        /**
         * Removes all blacklisted MAC addresses.
         */
        clear_mac_blacklist_items(): void;
        get_band(): string;
        get_bssid(): Uint8Array;
        get_channel(): number;
        get_cloned_mac_address(): Uint8Array;
        get_hidden(): boolean;
        get_mac_address(): Uint8Array;
        get_mac_address_blacklist(): GLib.SList;
        get_mac_blacklist_item(idx: number): string;
        get_mode(): string;
        get_mtu(): number;
        get_num_mac_blacklist_items(): number;
        get_num_seen_bssids(): number;
        get_powersave(): number;
        get_rate(): number;
        get_security(): string;
        get_seen_bssid(i: number): string;
        get_ssid(): Uint8Array;
        get_tx_power(): number;
        /**
         * Removes the MAC address at index `idx` from the blacklist.
         * @param idx index number of the MAC address
         */
        remove_mac_blacklist_item(idx: number): void;
        /**
         * Removes the MAC address `mac` from the blacklist.
         * @param mac the MAC address string (hex-digits-and-colons notation) to remove from the blacklist
         * @returns %TRUE if the MAC address was found and removed; %FALSE if it was not.
         */
        remove_mac_blacklist_item_by_value(mac: string): boolean;
    }

    namespace SettingWirelessSecurity {
        // Signal signatures
        interface SignalSignatures extends Setting.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Setting.ConstructorProps {
            auth_alg: string;
            authAlg: string;
            key_mgmt: string;
            keyMgmt: string;
            leap_password: string;
            leapPassword: string;
            leap_password_flags: number;
            leapPasswordFlags: number;
            leap_username: string;
            leapUsername: string;
            psk: string;
            psk_flags: number;
            pskFlags: number;
            wep_key_flags: number;
            wepKeyFlags: number;
            wep_key_type: number;
            wepKeyType: number;
            wep_key0: string;
            wepKey0: string;
            wep_key1: string;
            wepKey1: string;
            wep_key2: string;
            wepKey2: string;
            wep_key3: string;
            wepKey3: string;
            wep_tx_keyidx: number;
            wepTxKeyidx: number;
        }
    }

    class SettingWirelessSecurity extends Setting {
        static $gtype: GObject.GType<SettingWirelessSecurity>;
        declare static readonly __signalSignatures: SettingWirelessSecurity.SignalSignatures;

        // Properties

        /**
         * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
         * 802.11 authentication algorithm required by the AP here.  One of "open"
         * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
         * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
         * "leap-username" and "leap-password" properties must be specified.
         */
        get auth_alg(): string;
        set auth_alg(val: string);
        /**
         * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the
         * 802.11 authentication algorithm required by the AP here.  One of "open"
         * for Open System, "shared" for Shared Key, or "leap" for Cisco LEAP.  When
         * using Cisco LEAP (ie, key-mgmt = "ieee8021x" and auth-alg = "leap") the
         * "leap-username" and "leap-password" properties must be specified.
         */
        get authAlg(): string;
        set authAlg(val: string);
        /**
         * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
         * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
         * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
         * any Wi-Fi connection that uses security.
         */
        get key_mgmt(): string;
        set key_mgmt(val: string);
        /**
         * Key management used for the connection.  One of "none" (WEP), "ieee8021x"
         * (Dynamic WEP), "wpa-none" (Ad-Hoc WPA-PSK), "wpa-psk" (infrastructure
         * WPA-PSK), or "wpa-eap" (WPA-Enterprise).  This property must be set for
         * any Wi-Fi connection that uses security.
         */
        get keyMgmt(): string;
        set keyMgmt(val: string);
        /**
         * The login password for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        get leap_password(): string;
        set leap_password(val: string);
        /**
         * The login password for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        get leapPassword(): string;
        set leapPassword(val: string);
        /**
         * Flags indicating how to handle the
         * #NMSettingWirelessSecurity:leap-password property.
         */
        get leap_password_flags(): number;
        set leap_password_flags(val: number);
        /**
         * Flags indicating how to handle the
         * #NMSettingWirelessSecurity:leap-password property.
         */
        get leapPasswordFlags(): number;
        set leapPasswordFlags(val: number);
        /**
         * The login username for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        get leap_username(): string;
        set leap_username(val: string);
        /**
         * The login username for legacy LEAP connections (ie, key-mgmt =
         * "ieee8021x" and auth-alg = "leap").
         */
        get leapUsername(): string;
        set leapUsername(val: string);
        /**
         * Pre-Shared-Key for WPA networks.  If the key is 64-characters long, it
         * must contain only hexadecimal characters and is interpreted as a
         * hexadecimal WPA key.  Otherwise, the key must be between 8 and 63 ASCII
         * characters (as specified in the 802.11i standard) and is interpreted as a
         * WPA passphrase, and is hashed to derive the actual WPA-PSK used when
         * connecting to the Wi-Fi network.
         */
        get psk(): string;
        set psk(val: string);
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
         * property.
         */
        get psk_flags(): number;
        set psk_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:psk
         * property.
         */
        get pskFlags(): number;
        set pskFlags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
         * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
         * and #NMSettingWirelessSecurity:wep-key3 properties.
         */
        get wep_key_flags(): number;
        set wep_key_flags(val: number);
        /**
         * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0,
         * #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2,
         * and #NMSettingWirelessSecurity:wep-key3 properties.
         */
        get wepKeyFlags(): number;
        set wepKeyFlags(val: number);
        /**
         * Controls the interpretation of WEP keys.  Allowed values are
         * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
         * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
         * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
         * as a string and will be hashed using the de-facto MD5 method to derive
         * the actual WEP key.
         */
        get wep_key_type(): number;
        set wep_key_type(val: number);
        /**
         * Controls the interpretation of WEP keys.  Allowed values are
         * %NM_WEP_KEY_TYPE_KEY, in which case the key is either a 10- or
         * 26-character hexadecimal string, or a 5- or 13-character ASCII password;
         * or %NM_WEP_KEY_TYPE_PASSPHRASE, in which case the passphrase is provided
         * as a string and will be hashed using the de-facto MD5 method to derive
         * the actual WEP key.
         */
        get wepKeyType(): number;
        set wepKeyType(val: number);
        /**
         * Index 0 WEP key.  This is the WEP key used in most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wep_key0(): string;
        set wep_key0(val: string);
        /**
         * Index 0 WEP key.  This is the WEP key used in most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wepKey0(): string;
        set wepKey0(val: string);
        /**
         * Index 1 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wep_key1(): string;
        set wep_key1(val: string);
        /**
         * Index 1 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wepKey1(): string;
        set wepKey1(val: string);
        /**
         * Index 2 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wep_key2(): string;
        set wep_key2(val: string);
        /**
         * Index 2 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wepKey2(): string;
        set wepKey2(val: string);
        /**
         * Index 3 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wep_key3(): string;
        set wep_key3(val: string);
        /**
         * Index 3 WEP key.  This WEP index is not used by most networks.  See the
         * "wep-key-type" property for a description of how this key is interpreted.
         */
        get wepKey3(): string;
        set wepKey3(val: string);
        /**
         * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
         * index is used by the AP, put that WEP key index here.  Valid values are 0
         * (default key) through 3.  Note that some consumer access points (like the
         * Linksys WRT54G) number the keys 1 - 4.
         */
        get wep_tx_keyidx(): number;
        set wep_tx_keyidx(val: number);
        /**
         * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key
         * index is used by the AP, put that WEP key index here.  Valid values are 0
         * (default key) through 3.  Note that some consumer access points (like the
         * Linksys WRT54G) number the keys 1 - 4.
         */
        get wepTxKeyidx(): number;
        set wepTxKeyidx(val: number);

        // Constructors

        constructor(properties?: Partial<SettingWirelessSecurity.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SettingWirelessSecurity;

        // Methods

        /**
         * Adds an encryption algorithm to the list of allowed groupwise encryption
         * algorithms.  If the list is not empty, then only access points that support
         * one or more of the encryption algorithms in the list will be considered
         * compatible with this connection.
         * @param group the encryption algorithm to add, one of "wep40", "wep104", "tkip", or "ccmp"
         * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
         */
        add_group(group: string): boolean;
        /**
         * Adds an encryption algorithm to the list of allowed pairwise encryption
         * algorithms.  If the list is not empty, then only access points that support
         * one or more of the encryption algorithms in the list will be considered
         * compatible with this connection.
         * @param pairwise the encryption algorithm to add, one of "tkip" or "ccmp"
         * @returns %TRUE if the algorithm was added to the list, %FALSE if it was already in the list
         */
        add_pairwise(pairwise: string): boolean;
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
        add_proto(proto: string): boolean;
        /**
         * Removes all algorithms from the allowed list.  If there are no algorithms
         * specified then all groupwise encryption algorithms are allowed.
         */
        clear_groups(): void;
        /**
         * Removes all algorithms from the allowed list.  If there are no algorithms
         * specified then all pairwise encryption algorithms are allowed.
         */
        clear_pairwise(): void;
        /**
         * Removes all protocols from the allowed list.  If there are no protocols
         * specified then all protocols are allowed.
         */
        clear_protos(): void;
        get_auth_alg(): string;
        /**
         * Returns the allowed groupwise encryption algorithm from allowed algorithm
         * list.
         * @param i index of an item in the allowed groupwise encryption algorithm list
         * @returns the groupwise encryption algorithm at index @i
         */
        get_group(i: number): string;
        get_key_mgmt(): string;
        get_leap_password(): string;
        get_leap_password_flags(): SettingSecretFlags;
        get_leap_username(): string;
        get_num_groups(): number;
        get_num_pairwise(): number;
        get_num_protos(): number;
        /**
         * Returns the allowed pairwise encryption algorithm from allowed algorithm
         * list.
         * @param i index of an item in the allowed pairwise encryption algorithm list
         * @returns the pairwise encryption algorithm at index @i
         */
        get_pairwise(i: number): string;
        get_proto(i: number): string;
        get_psk(): string;
        get_psk_flags(): SettingSecretFlags;
        get_wep_key(idx: number): string;
        get_wep_key_flags(): SettingSecretFlags;
        get_wep_key_type(): WepKeyType;
        get_wep_tx_keyidx(): number;
        /**
         * Removes an encryption algorithm from the allowed groupwise encryption
         * algorithm list.
         * @param i the index of an item in the allowed groupwise encryption algorithm list
         */
        remove_group(i: number): void;
        /**
         * Removes an encryption algorithm from the allowed groupwise encryption
         * algorithm list.
         * @param group the encryption algorithm to remove, one of "wep40", "wep104", "tkip", or "ccmp"
         * @returns %TRUE if the algorithm was found and removed; %FALSE if it was not.
         */
        remove_group_by_value(group: string): boolean;
        /**
         * Removes an encryption algorithm from the allowed pairwise encryption
         * algorithm list.
         * @param i the index of an item in the allowed pairwise encryption algorithm list
         */
        remove_pairwise(i: number): void;
        /**
         * Removes an encryption algorithm from the allowed pairwise encryption
         * algorithm list.
         * @param pairwise the encryption algorithm to remove, one of "tkip" or "ccmp"
         * @returns %TRUE if the encryption algorithm was found and removed; %FALSE if it was not.
         */
        remove_pairwise_by_value(pairwise: string): boolean;
        /**
         * Removes a protocol from the allowed protocol list.
         * @param i index of the protocol to remove
         */
        remove_proto(i: number): void;
        /**
         * Removes a protocol from the allowed protocol list.
         * @param proto the protocol to remove, one of "wpa" or "rsn"
         * @returns %TRUE if the protocol was found and removed; %FALSE if it was not.
         */
        remove_proto_by_value(proto: string): boolean;
        /**
         * Sets a WEP key in the given index.
         * @param idx the index of the key (0..3 inclusive)
         * @param key the WEP key as a string, in either hexadecimal, ASCII, or passphrase form as determiend by the value of the #NMSettingWirelessSecurity:wep-key-type property.
         */
        set_wep_key(idx: number, key: string): void;
    }

    type ConnectionClass = typeof Connection;
    class IP4Address {
        static $gtype: GObject.GType<IP4Address>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): IP4Address;

        // Methods

        /**
         * Determines if two #NMIP4Address objects contain the same values.
         * @param other the #NMIP4Address to compare @address to.
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         */
        compare(other: IP4Address): boolean;
        /**
         * Copies a given #NMIP4Address object and returns the copy.
         * @returns the copy of the given #NMIP4Address copy
         */
        dup(): IP4Address;
        /**
         * Gets the IPv4 address property of this address object.
         * @returns the IPv4 address in network byte order
         */
        get_address(): number;
        /**
         * Gets the IPv4 default gateway property of this address object.
         * @returns the IPv4 gateway address in network byte order
         */
        get_gateway(): number;
        /**
         * Gets the IPv4 address prefix (ie "24" or "30" etc) property of this address
         * object.
         * @returns the IPv4 address prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the IPv4 address property of this object.
         * @param addr the IPv4 address in network byte order
         */
        set_address(addr: number): void;
        /**
         * Sets the IPv4 default gateway property of this address object.
         * @param gateway the IPv4 default gateway in network byte order
         */
        set_gateway(gateway: number): void;
        /**
         * Sets the IPv4 address prefix.
         * @param prefix the address prefix, a number between 1 and 32 inclusive
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }

    class IP4Route {
        static $gtype: GObject.GType<IP4Route>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): IP4Route;

        // Methods

        /**
         * Determines if two #NMIP4Route objects contain the same values.
         * @param other the #NMIP4Route to compare @route to.
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         */
        compare(other: IP4Route): boolean;
        /**
         * Copies a given #NMIP4Route object and returns the copy.
         * @returns the copy of the given #NMIP4Route copy
         */
        dup(): IP4Route;
        /**
         * Gets the IPv4 destination address property of this route object.
         * @returns the IPv4 address in network byte order
         */
        get_dest(): number;
        /**
         * Gets the route metric property of this route object; lower values indicate
         * "better" or more preferred routes.
         * @returns the route metric
         */
        get_metric(): number;
        /**
         * Gets the IPv4 address of the next hop of this route.
         * @returns the IPv4 address in network byte order
         */
        get_next_hop(): number;
        /**
         * Gets the IPv4 prefix (ie "24" or "30" etc) of this route.
         * @returns the IPv4 prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the IPv4 destination address property of this route object.
         * @param dest the destination address in network byte order
         */
        set_dest(dest: number): void;
        /**
         * Sets the route metric property of this route object; lower values indicate
         * "better" or more preferred routes.
         * @param metric the route metric
         */
        set_metric(metric: number): void;
        /**
         * Sets the IPv4 address of the next hop of this route.
         * @param next_hop the IPv4 address of the next hop in network byte order
         */
        set_next_hop(next_hop: number): void;
        /**
         * Sets the IPv4 prefix of this route.
         * @param prefix the prefix, a number between 1 and 32 inclusive
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }

    class IP6Address {
        static $gtype: GObject.GType<IP6Address>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): IP6Address;

        // Methods

        /**
         * Determines if two #NMIP6Address objects contain the same values.
         * @param other the #NMIP6Address to compare @address to.
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         */
        compare(other: IP6Address): boolean;
        /**
         * Copies a given #NMIP6Address object and returns the copy.
         * @returns the copy of the given #NMIP6Address copy
         */
        dup(): IP6Address;
        /**
         * Gets the IPv6 address property of this address object.
         * @returns the IPv6 address
         */
        get_address(): Uint8Array;
        /**
         * Gets the IPv6 default gateway property of this address object.
         * @returns the IPv6 gateway address
         */
        get_gateway(): Uint8Array;
        /**
         * Gets the IPv6 address prefix property of this address object.
         * @returns the IPv6 address prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the IPv6 address property of this object.
         * @param addr the IPv6 address
         */
        set_address(addr?: any | null): void;
        /**
         * Sets the IPv6 default gateway property of this address object.
         * @param gateway the IPv6 default gateway
         */
        set_gateway(gateway?: any | null): void;
        /**
         * Sets the IPv6 address prefix.
         * @param prefix the address prefix, a number between 0 and 128 inclusive
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }

    class IP6Route {
        static $gtype: GObject.GType<IP6Route>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): IP6Route;

        // Methods

        /**
         * Determines if two #NMIP6Route objects contain the same values.
         * @param other the #NMIP6Route to compare @route to.
         * @returns %TRUE if the objects contain the same values, %FALSE if they do not.
         */
        compare(other: IP6Route): boolean;
        /**
         * Copies a given #NMIP6Route object and returns the copy.
         * @returns the copy of the given #NMIP6Route copy
         */
        dup(): IP6Route;
        /**
         * Gets the IPv6 destination address property of this route object.
         * @returns the IPv6 address of destination
         */
        get_dest(): Uint8Array;
        /**
         * Gets the route metric property of this route object; lower values indicate
         * "better" or more preferred routes.
         * @returns the route metric
         */
        get_metric(): number;
        /**
         * Gets the IPv6 address of the next hop of this route.
         * @returns the IPv6 address of next hop
         */
        get_next_hop(): Uint8Array;
        /**
         * Gets the IPv6 prefix (ie "32" or "64" etc) of this route.
         * @returns the IPv6 prefix
         */
        get_prefix(): number;
        /**
         * Increases the reference count of the object.
         */
        ref(): void;
        /**
         * Sets the IPv6 destination address property of this route object.
         * @param dest the destination address
         */
        set_dest(dest?: any | null): void;
        /**
         * Sets the route metric property of this route object; lower values indicate
         * "better" or more preferred routes.
         * @param metric the route metric
         */
        set_metric(metric: number): void;
        /**
         * Sets the IPv6 address of the next hop of this route.
         * @param next_hop the IPv6 address of the next hop
         */
        set_next_hop(next_hop?: any | null): void;
        /**
         * Sets the IPv6 prefix of this route.
         * @param prefix the prefix, a number between 1 and 128 inclusive
         */
        set_prefix(prefix: number): void;
        /**
         * Decreases the reference count of the object.  If the reference count
         * reaches zero, the object will be destroyed.
         */
        unref(): void;
    }

    type Setting8021xClass = typeof Setting8021x;
    type SettingAdslClass = typeof SettingAdsl;
    type SettingBluetoothClass = typeof SettingBluetooth;
    type SettingBondClass = typeof SettingBond;
    type SettingBridgeClass = typeof SettingBridge;
    type SettingBridgePortClass = typeof SettingBridgePort;
    type SettingCdmaClass = typeof SettingCdma;
    type SettingClass = typeof Setting;
    type SettingConnectionClass = typeof SettingConnection;
    type SettingDcbClass = typeof SettingDcb;
    type SettingGenericClass = typeof SettingGeneric;
    type SettingGsmClass = typeof SettingGsm;
    type SettingIP4ConfigClass = typeof SettingIP4Config;
    type SettingIP6ConfigClass = typeof SettingIP6Config;
    type SettingInfinibandClass = typeof SettingInfiniband;
    type SettingOlpcMeshClass = typeof SettingOlpcMesh;
    type SettingPPPClass = typeof SettingPPP;
    type SettingPPPOEClass = typeof SettingPPPOE;
    type SettingSerialClass = typeof SettingSerial;
    type SettingTeamClass = typeof SettingTeam;
    type SettingTeamPortClass = typeof SettingTeamPort;
    type SettingVPNClass = typeof SettingVPN;
    type SettingVlanClass = typeof SettingVlan;
    type SettingWimaxClass = typeof SettingWimax;
    type SettingWiredClass = typeof SettingWired;
    type SettingWirelessClass = typeof SettingWireless;
    type SettingWirelessSecurityClass = typeof SettingWirelessSecurity;
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

export default NetworkManager;

// END
