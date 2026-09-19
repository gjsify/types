/**
 * The GIR-derived widget VOCABULARY for NetworkManager-1.0.
 *
 * GENERATED — do not edit. Provenance: NetworkManager-1.0 — library 1.17.2
 *
 * 27 instantiable GTypes (of which 0 concrete widgets), 28 declarations, 14 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type NMSetting8021xCKFormatNick = 'unknown' | 'x509' | 'raw-key' | 'pkcs12';
export type NMSetting8021xCKSchemeNick = 'unknown' | 'blob' | 'path';
export type NMSettingCompareFlagsNick = 'exact' | 'fuzzy' | 'ignore-id' | 'ignore-secrets' | 'ignore-agent-owned-secrets' | 'ignore-not-saved-secrets' | 'diff-result-with-default' | 'diff-result-no-default';
export type NMSettingDcbFlagsNick = 'none' | 'enable' | 'advertise' | 'willing';
export type NMSettingDiffResultNick = 'unknown' | 'in-a' | 'in-b' | 'in-a-default' | 'in-b-default';
export type NMSettingGsmNetworkBandNick = 'unknown' | 'any' | 'egsm' | 'dcs' | 'pcs' | 'g850' | 'u2100' | 'u1800' | 'u17iv' | 'u800' | 'u850' | 'u900' | 'u17ix' | 'u1900' | 'u2600';
export type NMSettingGsmNetworkTypeNick = 'any' | 'umts-hspa' | 'gprs-edge' | 'prefer-umts-hspa' | 'prefer-gprs-edge' | 'prefer-4g' | '4g';
export type NMSettingHashFlagsNick = 'all' | 'no-secrets' | 'only-secrets';
export type NMSettingIP6ConfigPrivacyNick = 'unknown' | 'disabled' | 'prefer-public-addr' | 'prefer-temp-addr';
export type NMSettingSecretFlagsNick = 'none' | 'agent-owned' | 'not-saved' | 'not-required';
export type NMUtilsSecurityTypeNick = 'invalid' | 'none' | 'static-wep' | 'leap' | 'dynamic-wep' | 'wpa-psk' | 'wpa-enterprise' | 'wpa2-psk' | 'wpa2-enterprise';
export type NMVlanFlagsNick = 'reorder-headers' | 'gvrp' | 'loose-binding' | 'mvrp';
export type NMVlanPriorityMapNick = 'ingress-map' | 'egress-map';
export type NMWepKeyTypeNick = 'unknown' | 'key' | 'passphrase' | 'last';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The NMConnection struct contains only private data. */
export interface NMConnectionProps extends GObjectProps {
    /** The connection's D-Bus path, used only by the calling process as a record of the D-Bus path of the connection as provided by a settings service. */
    path?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMConnectionConstructOnly = GObjectConstructOnly;

/** The NMSetting struct contains only private data. */
export interface NMSettingProps extends GObjectProps {
    /** The setting's name, which uniquely identifies the setting within the connection. */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingConstructOnly = GObjectConstructOnly;

export interface NMSetting8021xProps extends NMSettingProps {
    /** Anonymous identity string for EAP authentication methods. */
    'anonymous-identity'?: string;
    /** UTF-8 encoded path to a directory containing PEM or DER formatted certificates to be added to the verification chain in addition to the certificate specified in the #NMSetting8021x:ca-cert property. */
    'ca-path'?: string;
    /** Identity string for EAP authentication methods. */
    identity?: string;
    /** UTF-8 encoded file path containing PAC for EAP-FAST. */
    'pac-file'?: string;
    /** UTF-8 encoded password used for EAP authentication methods. */
    password?: string;
    /** Flags indicating how to handle the #NMSetting8021x:password property. */
    'password-flags'?: number;
    /** Flags indicating how to handle the #NMSetting8021x:password-raw property. */
    'password-raw-flags'?: number;
    /** Enables or disables in-line provisioning of EAP-FAST credentials when FAST is specified as the EAP method in the #NMSetting8021x:eap property. */
    'phase1-fast-provisioning'?: string;
    /** Forces use of the new PEAP label during key derivation. */
    'phase1-peaplabel'?: string;
    /** Forces which PEAP version is used when PEAP is set as the EAP method in the #NMSetting8021x:eap property. */
    'phase1-peapver'?: string;
    /** Specifies the allowed "phase 2" inner non-EAP authentication methods when an EAP method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap property. */
    'phase2-auth'?: string;
    /** Specifies the allowed "phase 2" inner EAP-based authentication methods when an EAP method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap property. */
    'phase2-autheap'?: string;
    /** UTF-8 encoded path to a directory containing PEM or DER formatted certificates to be added to the verification chain in addition to the certificate specified in the #NMSetting8021x:phase2-ca-cert pro… */
    'phase2-ca-path'?: string;
    /** The password used to decrypt the "phase 2" private key specified in the #NMSetting8021x:phase2-private-key property when the private key either uses the path scheme, or is a PKCS#<!-- -->12 format ke… */
    'phase2-private-key-password'?: string;
    /** Flags indicating how to handle the #NMSetting8021x:phase2-private-key-password property. */
    'phase2-private-key-password-flags'?: number;
    /** Substring to be matched against the subject of the certificate presented by the authentication server during the inner "phase 2" authentication. */
    'phase2-subject-match'?: string;
    /** PIN used for EAP authentication methods. */
    pin?: string;
    /** Flags indicating how to handle the #NMSetting8021x:pin property. */
    'pin-flags'?: number;
    /** The password used to decrypt the private key specified in the #NMSetting8021x:private-key property when the private key either uses the path scheme, or if the private key is a PKCS#<!-- -->12 format … */
    'private-key-password'?: string;
    /** Flags indicating how to handle the #NMSetting8021x:private-key-password property. */
    'private-key-password-flags'?: number;
    /** Substring to be matched against the subject of the certificate presented by the authentication server. */
    'subject-match'?: string;
    /** When %TRUE, overrides the #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path properties using the system CA directory specified at configure time with the --system-ca-path switch. */
    'system-ca-certs'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSetting8021xConstructOnly = NMSettingConstructOnly;

export interface NMSettingAdslProps extends NMSettingProps {
    /** Encapsulation of ADSL connection. */
    encapsulation?: string;
    /** Password used to authenticate with the ADSL service. */
    password?: string;
    /** Flags indicating how to handle the #NMSettingAdsl:password property. */
    'password-flags'?: number;
    /** ADSL connection protocol. */
    protocol?: string;
    /** Username used to authenticate with the ADSL service. */
    username?: string;
    /** VCI of ADSL connection */
    vci?: number;
    /** VPI of ADSL connection */
    vpi?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingAdslConstructOnly = NMSettingConstructOnly;

export interface NMSettingBluetoothProps extends NMSettingProps {
    /** Either "dun" for Dial-Up Networking connections or "panu" for Personal Area Networking connections to devices supporting the NAP profile. */
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBluetoothConstructOnly = NMSettingConstructOnly;

export interface NMSettingBondProps extends NMSettingProps {
    /** The name of the virtual in-kernel bonding network interface */
    'interface-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBondConstructOnly = NMSettingConstructOnly;

export interface NMSettingBridgeProps extends NMSettingProps {
    /**
     * The Ethernet MAC address aging time, in seconds.
     * @since 0.9.8
     */
    'ageing-time'?: number;
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     * @since 0.9.8
     */
    'forward-delay'?: number;
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     * @since 0.9.8
     */
    'hello-time'?: number;
    /**
     * The name of the virtual in-kernel bridging network interface
     * @since 0.9.8
     */
    'interface-name'?: string;
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     * @since 0.9.8
     */
    'max-age'?: number;
    /**
     * Sets the Spanning Tree Protocol (STP) priority for this bridge.
     * @since 0.9.8
     */
    priority?: number;
    /**
     * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
     * @since 0.9.8
     */
    stp?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBridgeConstructOnly = NMSettingConstructOnly;

export interface NMSettingBridgePortProps extends NMSettingProps {
    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to be sent back out through the port the frame was received on.
     * @since 0.9.8
     */
    'hairpin-mode'?: boolean;
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this port.
     * @since 0.9.8
     */
    'path-cost'?: number;
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     * @since 0.9.8
     */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBridgePortConstructOnly = NMSettingConstructOnly;

export interface NMSettingCdmaProps extends NMSettingProps {
    /** The number to dial to establish the connection to the CDMA-based mobile broadband network, if any. */
    number?: string;
    /** The password used to authenticate with the network, if required. */
    password?: string;
    /** Flags indicating how to handle the #NMSettingCdma:password property. */
    'password-flags'?: number;
    /** The username used to authenticate with the network, if required. */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingCdmaConstructOnly = NMSettingConstructOnly;

/** The NMSettingConnection struct contains only private data. */
export interface NMSettingConnectionProps extends NMSettingProps {
    /** Whether or not the connection should be automatically connected by NetworkManager when the resources for the connection are available. */
    autoconnect?: boolean;
    /**
     * If greater than zero, delay success of IP addressing until either the timeout is reached, or an IP gateway replies to a ping.
     * @since 0.9.10
     */
    'gateway-ping-timeout'?: number;
    /** A human readable unique identifier for the connection, like "Work Wi-Fi" or "T-Mobile 3G". */
    id?: string;
    /**
     * The name of the network interface this connection is bound to.
     * @since 0.9.10
     */
    'interface-name'?: string;
    /** Interface name of the master device or UUID of the master connection. */
    master?: string;
    /** %FALSE if the connection can be modified using the provided settings service's D-Bus interface with the right privileges, or %TRUE if the connection is read-only and cannot be modified. */
    'read-only'?: boolean;
    /** Setting name of the device type of this slave's master connection (eg, %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a slave. */
    'slave-type'?: string;
    /** The time, in seconds since the Unix Epoch, that the connection was last _successfully_ fully activated. */
    timestamp?: bigint | number;
    /** Base type of the connection. */
    type?: string;
    /** A universally unique identifier for the connection, for example generated with libuuid. */
    uuid?: string;
    /** The trust level of a the connection. */
    zone?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingConnectionConstructOnly = NMSettingConstructOnly;

export interface NMSettingDcbProps extends NMSettingProps {
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.
     * @since 0.9.10
     */
    'app-fcoe-flags'?: number;
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC (default) or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     * @since 0.9.10
     */
    'app-fcoe-mode'?: string;
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for default priority.
     * @since 0.9.10
     */
    'app-fcoe-priority'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.
     * @since 0.9.10
     */
    'app-fip-flags'?: number;
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for default priority.
     * @since 0.9.10
     */
    'app-fip-priority'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.
     * @since 0.9.10
     */
    'app-iscsi-flags'?: number;
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1 for default priority.
     * @since 0.9.10
     */
    'app-iscsi-priority'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * @since 0.9.10
     */
    'priority-flow-control-flags'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.
     * @since 0.9.10
     */
    'priority-group-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingDcbConstructOnly = NMSettingConstructOnly;

export interface NMSettingGenericProps extends NMSettingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingGenericConstructOnly = NMSettingConstructOnly;

export interface NMSettingGsmProps extends NMSettingProps {
    /**
     * Bitfield of allowed frequency bands.
     * @deprecated since 0.9.10: No longer used.
     */
    'allowed-bands'?: number;
    /** The GPRS Access Point Name specifying the APN used when establishing a data session with the GSM-based network. */
    apn?: string;
    /** When %TRUE, only connections to the home network will be allowed. */
    'home-only'?: boolean;
    /** The Network ID (GSM LAI format, ie MCC-MNC) to force specific network registration. */
    'network-id'?: string;
    /**
     * Network preference to force the device to only use specific network technologies.
     * @deprecated since 0.9.10: No longer used.
     */
    'network-type'?: number;
    /** Number to dial when establishing a PPP data session with the GSM-based mobile broadband network. */
    number?: string;
    /** The password used to authenticate with the network, if required. */
    password?: string;
    /** Flags indicating how to handle the #NMSettingGsm:password property. */
    'password-flags'?: number;
    /** If the SIM is locked with a PIN it must be unlocked before any other operations are requested. */
    pin?: string;
    /** Flags indicating how to handle the #NMSettingGsm:pin property. */
    'pin-flags'?: number;
    /** The username used to authenticate with the network, if required. */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingGsmConstructOnly = NMSettingConstructOnly;

export interface NMSettingIP4ConfigProps extends NMSettingProps {
    /** A string sent to the DHCP server to identify the local machine which the DHCP server may use to customize the DHCP lease and options. */
    'dhcp-client-id'?: string;
    /** If the #NMSettingIP4Config:dhcp-send-hostname property is %TRUE, then the specified name will be sent to the DHCP server when acquiring a lease. */
    'dhcp-hostname'?: string;
    /** If %TRUE, a hostname is sent to the DHCP server when acquiring a lease. */
    'dhcp-send-hostname'?: boolean;
    /** Number of seconds after which the unfinished DHCP transaction fails or zero for default. */
    'dhcp-timeout'?: number;
    /** When the method is set to "auto" and this property to %TRUE, automatically configured nameservers and search domains are ignored and only nameservers and search domains specified in the #NMSettingIP4… */
    'ignore-auto-dns'?: boolean;
    /** When the method is set to "auto" and this property to %TRUE, automatically configured routes are ignored and only routes specified in the #NMSettingIP4Config:routes property, if any, are used. */
    'ignore-auto-routes'?: boolean;
    /** If %TRUE, allow overall network configuration to proceed even if IPv4 configuration times out. */
    'may-fail'?: boolean;
    /** IPv4 configuration method. */
    method?: string;
    /** If %TRUE, this connection will never be the default IPv4 connection, meaning it will never be assigned the default route by NetworkManager. */
    'never-default'?: boolean;
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * @since 1.0
     */
    'route-metric'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIP4ConfigConstructOnly = NMSettingConstructOnly;

export interface NMSettingIP6ConfigProps extends NMSettingProps {
    /**
     * The specified name will be sent to the DHCP server when acquiring a lease.
     * @since 0.9.8
     */
    'dhcp-hostname'?: string;
    /** When the method is set to "auto" or "dhcp" and this property is set to %TRUE, automatically configured nameservers and search domains are ignored and only nameservers and search domains specified in … */
    'ignore-auto-dns'?: boolean;
    /** When the method is set to "auto" or "dhcp" and this property is set to %TRUE, automatically configured routes are ignored and only routes specified in the #NMSettingIP6Config:routes property, if any,… */
    'ignore-auto-routes'?: boolean;
    /** Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941. */
    'ip6-privacy'?: number;
    /** If %TRUE, allow overall network configuration to proceed even if IPv6 configuration times out. */
    'may-fail'?: boolean;
    /** IPv6 configuration method. */
    method?: string;
    /** If %TRUE, this connection will never be the default IPv6 connection, meaning it will never be assigned the default IPv6 route by NetworkManager. */
    'never-default'?: boolean;
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * @since 1.0
     */
    'route-metric'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIP6ConfigConstructOnly = NMSettingConstructOnly;

export interface NMSettingInfinibandProps extends NMSettingProps {
    /** If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple frames. */
    mtu?: number;
    /** The InfiniBand P_Key to use for this device. */
    'p-key'?: number;
    /** The interface name of the parent device of this device. */
    parent?: string;
    /** The IP-over-InfiniBand transport mode. */
    'transport-mode'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingInfinibandConstructOnly = NMSettingConstructOnly;

export interface NMSettingOlpcMeshProps extends NMSettingProps {
    /** Channel on which the mesh network to join is located. */
    channel?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOlpcMeshConstructOnly = NMSettingConstructOnly;

export interface NMSettingPPPProps extends NMSettingProps {
    /** If non-zero, instruct pppd to set the serial port to the specified baudrate. */
    baud?: number;
    /** If %TRUE, specify that pppd should set the serial port to use hardware flow control with RTS and CTS signals. */
    crtscts?: boolean;
    /** If non-zero, instruct pppd to presume the connection to the peer has failed if the specified number of LCP echo-requests go unanswered by the peer. */
    'lcp-echo-failure'?: number;
    /** If non-zero, instruct pppd to send an LCP echo-request frame to the peer every n seconds (where n is the specified value). */
    'lcp-echo-interval'?: number;
    /** If %TRUE, stateful MPPE is used. */
    'mppe-stateful'?: boolean;
    /** If non-zero, instruct pppd to request that the peer send packets no larger than the specified size. */
    mru?: number;
    /** If non-zero, instruct pppd to send packets no larger than the specified size. */
    mtu?: number;
    /** If %TRUE, Van Jacobsen TCP header compression will not be requested. */
    'no-vj-comp'?: boolean;
    /** If %TRUE, do not require the other side (usually the PPP server) to authenticate itself to the client. */
    noauth?: boolean;
    /** If %TRUE, BSD compression will not be requested. */
    nobsdcomp?: boolean;
    /** If %TRUE, "deflate" compression will not be requested. */
    nodeflate?: boolean;
    /** If %TRUE, the CHAP authentication method will not be used. */
    'refuse-chap'?: boolean;
    /** If %TRUE, the EAP authentication method will not be used. */
    'refuse-eap'?: boolean;
    /** If %TRUE, the MSCHAP authentication method will not be used. */
    'refuse-mschap'?: boolean;
    /** If %TRUE, the MSCHAPv2 authentication method will not be used. */
    'refuse-mschapv2'?: boolean;
    /** If %TRUE, the PAP authentication method will not be used. */
    'refuse-pap'?: boolean;
    /** If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for the PPP session. */
    'require-mppe'?: boolean;
    /** If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be required for the PPP session, and the "require-mppe" property must also be set to %TRUE. */
    'require-mppe-128'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingPPPConstructOnly = NMSettingConstructOnly;

export interface NMSettingPPPOEProps extends NMSettingProps {
    /** Password used to authenticate with the PPPoE service. */
    password?: string;
    /** Flags indicating how to handle the #NMSettingPPPOE:password property. */
    'password-flags'?: number;
    /** If specified, instruct PPPoE to only initiate sessions with access concentrators that provide the specified service. */
    service?: string;
    /** Username used to authenticate with the PPPoE service. */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingPPPOEConstructOnly = NMSettingConstructOnly;

export interface NMSettingSerialProps extends NMSettingProps {
    /** Speed to use for communication over the serial port. */
    baud?: number;
    /** Byte-width of the serial communication. */
    bits?: number;
    /** Parity setting of the serial port. */
    parity?: number;
    /** Time to delay between each byte sent to the modem, in microseconds. */
    'send-delay'?: bigint | number;
    /** Number of stop bits for communication on the serial port. */
    stopbits?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingSerialConstructOnly = NMSettingConstructOnly;

export interface NMSettingTeamProps extends NMSettingProps {
    /** The JSON configuration for the team network interface. */
    config?: string;
    /** The name of the virtual in-kernel team network interface */
    'interface-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTeamConstructOnly = NMSettingConstructOnly;

export interface NMSettingTeamPortProps extends NMSettingProps {
    /** The JSON configuration for the team port. */
    config?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTeamPortConstructOnly = NMSettingConstructOnly;

export interface NMSettingVPNProps extends NMSettingProps {
    /** If the VPN service supports persistence, and this property is %TRUE, the VPN will attempt to stay connected across link changes and outages, until explicitly disconnected. */
    persistent?: boolean;
    /** D-Bus service name of the VPN plugin that this setting uses to connect to its network. */
    'service-type'?: string;
    /** If the VPN connection requires a user name for authentication, that name should be provided here. */
    'user-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVPNConstructOnly = NMSettingConstructOnly;

export interface NMSettingVlanProps extends NMSettingProps {
    /** One or more flags which control the behavior and features of the VLAN interface. */
    flags?: number;
    /** The VLAN identifier that the interface created by this connection should be assigned. */
    id?: number;
    /** If given, specifies the kernel name of the VLAN interface. */
    'interface-name'?: string;
    /** If given, specifies the parent interface name or parent connection UUID from which this VLAN interface should be created. */
    parent?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVlanConstructOnly = NMSettingConstructOnly;

export interface NMSettingWimaxProps extends NMSettingProps {
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection should use.
     * @deprecated since 1.2: WiMAX is no longer supported.
     */
    'network-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWimaxConstructOnly = NMSettingConstructOnly;

export interface NMSettingWiredProps extends NMSettingProps {
    /** If %TRUE, allow auto-negotiation of port speed and duplex mode. */
    'auto-negotiate'?: boolean;
    /** If specified, request that the device only use the specified duplex mode. */
    duplex?: string;
    /** If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple Ethernet frames. */
    mtu?: number;
    /** Specific port type to use if the device supports multiple attachment methods. */
    port?: string;
    /** s390 network device type; one of "qeth", "lcs", or "ctc", representing the different types of virtual network devices available on s390 systems. */
    's390-nettype'?: string;
    /** If non-zero, request that the device use only the specified speed. */
    speed?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWiredConstructOnly = NMSettingConstructOnly;

export interface NMSettingWirelessProps extends NMSettingProps {
    /** 802.11 frequency band of the network. */
    band?: string;
    /** Wireless channel to use for the Wi-Fi connection. */
    channel?: number;
    /** If %TRUE, indicates this network is a non-broadcasting network that hides its SSID. */
    hidden?: boolean;
    /** Wi-Fi network mode; one of "infrastructure", "adhoc" or "ap". */
    mode?: string;
    /** If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple Ethernet frames. */
    mtu?: number;
    /**
     * If set to %FALSE, Wi-Fi power saving behavior is disabled.
     * @since 1.2
     */
    powersave?: number;
    /** If non-zero, directs the device to only use the specified bitrate for communication with the access point. */
    rate?: number;
    /**
     * If the wireless connection has any security restrictions, like 802.1x, WEP, or WPA, set this property to %NM_SETTING_WIRELESS_SECURITY_SETTING_NAME and ensure the connection contains a valid #NMSetti…
     * @deprecated since 0.9.10: No longer used.
     */
    security?: string;
    /** If non-zero, directs the device to use the specified transmit power. */
    'tx-power'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWirelessConstructOnly = NMSettingConstructOnly;

export interface NMSettingWirelessSecurityProps extends NMSettingProps {
    /** When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the 802.11 authentication algorithm required by the AP here. */
    'auth-alg'?: string;
    /** Key management used for the connection. */
    'key-mgmt'?: string;
    /** The login password for legacy LEAP connections (ie, key-mgmt = "ieee8021x" and auth-alg = "leap"). */
    'leap-password'?: string;
    /** Flags indicating how to handle the #NMSettingWirelessSecurity:leap-password property. */
    'leap-password-flags'?: number;
    /** The login username for legacy LEAP connections (ie, key-mgmt = "ieee8021x" and auth-alg = "leap"). */
    'leap-username'?: string;
    /** Pre-Shared-Key for WPA networks. */
    psk?: string;
    /** Flags indicating how to handle the #NMSettingWirelessSecurity:psk property. */
    'psk-flags'?: number;
    /** Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0, #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2, and #NMSettingWirelessSecurity:wep-key3 properties. */
    'wep-key-flags'?: number;
    /** Controls the interpretation of WEP keys. */
    'wep-key-type'?: number;
    /** Index 0 WEP key. */
    'wep-key0'?: string;
    /** Index 1 WEP key. */
    'wep-key1'?: string;
    /** Index 2 WEP key. */
    'wep-key2'?: string;
    /** Index 3 WEP key. */
    'wep-key3'?: string;
    /** When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key index is used by the AP, put that WEP key index here. */
    'wep-tx-keyidx'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWirelessSecurityConstructOnly = NMSettingConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
