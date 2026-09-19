/**
 * The GIR-derived widget VOCABULARY for NM-1.0.
 *
 * GENERATED — do not edit. Provenance: NM-1.0 — library 1.58.1
 *
 * 102 instantiable GTypes (of which 0 concrete widgets), 107 declarations, 67 enum nick unions, 0 slot candidates.
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

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type NM from './nm-1.0.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
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

export type NM80211ModeNick = 'unknown' | 'adhoc' | 'infra' | 'ap' | 'mesh';
export type NMActiveConnectionStateNick = 'unknown' | 'activating' | 'activated' | 'deactivating' | 'deactivated';
export type NMActiveConnectionStateReasonNick = 'unknown' | 'none' | 'user-disconnected' | 'device-disconnected' | 'service-stopped' | 'ip-config-invalid' | 'connect-timeout' | 'service-start-timeout' | 'service-start-failed' | 'no-secrets' | 'login-failed' | 'connection-removed' | 'dependency-failed' | 'device-realize-failed' | 'device-removed';
export type NMCapabilityNick = 'team' | 'ovs';
export type NMClientPermissionNick = 'none' | 'enable-disable-network' | 'enable-disable-wifi' | 'enable-disable-wwan' | 'enable-disable-wimax' | 'sleep-wake' | 'network-control' | 'wifi-share-protected' | 'wifi-share-open' | 'settings-modify-system' | 'settings-modify-own' | 'settings-modify-hostname' | 'settings-modify-global-dns' | 'reload' | 'checkpoint-rollback' | 'enable-disable-statistics' | 'enable-disable-connectivity-check' | 'wifi-scan' | 'last';
export type NMClientPermissionResultNick = 'unknown' | 'yes' | 'auth' | 'no';
export type NMConnectionMultiConnectNick = 'default' | 'single' | 'manual-multiple' | 'multiple';
export type NMConnectivityStateNick = 'unknown' | 'none' | 'portal' | 'limited' | 'full';
export type NMDeviceManagedNick = 'no' | 'yes' | 'reset';
export type NMDeviceStateNick = 'unknown' | 'unmanaged' | 'unavailable' | 'disconnected' | 'prepare' | 'config' | 'need-auth' | 'ip-config' | 'ip-check' | 'secondaries' | 'activated' | 'deactivating' | 'failed';
export type NMDeviceStateReasonNick = 'none' | 'unknown' | 'now-managed' | 'now-unmanaged' | 'config-failed' | 'ip-config-unavailable' | 'ip-config-expired' | 'no-secrets' | 'supplicant-disconnect' | 'supplicant-config-failed' | 'supplicant-failed' | 'supplicant-timeout' | 'ppp-start-failed' | 'ppp-disconnect' | 'ppp-failed' | 'dhcp-start-failed' | 'dhcp-error' | 'dhcp-failed' | 'shared-start-failed' | 'shared-failed' | 'autoip-start-failed' | 'autoip-error' | 'autoip-failed' | 'modem-busy' | 'modem-no-dial-tone' | 'modem-no-carrier' | 'modem-dial-timeout' | 'modem-dial-failed' | 'modem-init-failed' | 'gsm-apn-failed' | 'gsm-registration-not-searching' | 'gsm-registration-denied' | 'gsm-registration-timeout' | 'gsm-registration-failed' | 'gsm-pin-check-failed' | 'firmware-missing' | 'removed' | 'sleeping' | 'connection-removed' | 'user-requested' | 'carrier' | 'connection-assumed' | 'supplicant-available' | 'modem-not-found' | 'bt-failed' | 'gsm-sim-not-inserted' | 'gsm-sim-pin-required' | 'gsm-sim-puk-required' | 'gsm-sim-wrong' | 'infiniband-mode' | 'dependency-failed' | 'br2684-failed' | 'modem-manager-unavailable' | 'ssid-not-found' | 'secondary-connection-failed' | 'dcb-fcoe-failed' | 'teamd-control-failed' | 'modem-failed' | 'modem-available' | 'sim-pin-incorrect' | 'new-activation' | 'parent-changed' | 'parent-managed-changed' | 'ovsdb-failed' | 'ip-address-duplicate' | 'ip-method-unsupported' | 'sriov-configuration-failed' | 'peer-not-found' | 'device-handler-failed' | 'unmanaged-by-default' | 'unmanaged-external-down' | 'unmanaged-link-not-init' | 'unmanaged-quitting' | 'unmanaged-sleeping' | 'unmanaged-manager-disabled' | 'unmanaged-user-conf' | 'unmanaged-user-explicit' | 'unmanaged-user-settings' | 'unmanaged-user-udev' | 'networking-off' | 'modem-no-operator-code';
export type NMDeviceTypeNick = 'unknown' | 'ethernet' | 'wifi' | 'unused1' | 'unused2' | 'bt' | 'olpc-mesh' | 'wimax' | 'modem' | 'infiniband' | 'bond' | 'vlan' | 'adsl' | 'bridge' | 'generic' | 'team' | 'tun' | 'ip-tunnel' | 'macvlan' | 'vxlan' | 'veth' | 'macsec' | 'dummy' | 'ppp' | 'ovs-interface' | 'ovs-port' | 'ovs-bridge' | 'wpan' | '6lowpan' | 'wireguard' | 'wifi-p2p' | 'vrf' | 'loopback' | 'hsr' | 'ipvlan' | 'geneve';
export type NMIPTunnelModeNick = 'unknown' | 'ipip' | 'gre' | 'sit' | 'isatap' | 'vti' | 'ip6ip6' | 'ipip6' | 'ip6gre' | 'vti6' | 'gretap' | 'ip6gretap';
export type NMKeyfileHandlerTypeNick = 'warn' | 'write-cert';
export type NMKeyfileWarnSeverityNick = 'debug' | 'info' | 'info-missing-file' | 'warn';
export type NMMeteredNick = 'unknown' | 'yes' | 'no' | 'guess-yes' | 'guess-no';
export type NMSetting8021xCKFormatNick = 'unknown' | 'x509' | 'raw-key' | 'pkcs12';
export type NMSetting8021xCKSchemeNick = 'unknown' | 'blob' | 'path' | 'pkcs11';
export type NMSettingCompareFlagsNick = 'exact' | 'fuzzy' | 'ignore-id' | 'ignore-secrets' | 'ignore-agent-owned-secrets' | 'ignore-not-saved-secrets' | 'diff-result-with-default' | 'diff-result-no-default' | 'ignore-timestamp';
export type NMSettingConnectionAutoconnectSlavesNick = 'default' | 'no' | 'yes';
export type NMSettingConnectionDnsOverTlsNick = 'default' | 'no' | 'opportunistic' | 'yes';
export type NMSettingConnectionDnssecNick = 'default' | 'no' | 'allow-downgrade' | 'yes';
export type NMSettingConnectionDownOnPoweroffNick = 'default' | 'no' | 'yes';
export type NMSettingConnectionLldpNick = 'default' | 'disable' | 'enable-rx';
export type NMSettingConnectionLlmnrNick = 'default' | 'no' | 'resolve' | 'yes';
export type NMSettingConnectionMdnsNick = 'default' | 'no' | 'resolve' | 'yes';
export type NMSettingDiffResultNick = 'unknown' | 'in-a' | 'in-b' | 'in-a-default' | 'in-b-default';
export type NMSettingGeneveDfNick = 'unset' | 'set' | 'inherit';
export type NMSettingHsrProtocolVersionNick = 'default' | 'hsr-2010' | 'hsr-2012';
export type NMSettingIP4DhcpIpv6OnlyPreferredNick = 'default' | 'no' | 'yes' | 'auto';
export type NMSettingIP4LinkLocalNick = 'default' | 'auto' | 'disabled' | 'enabled' | 'fallback';
export type NMSettingIP6ConfigAddrGenModeNick = 'eui64' | 'stable-privacy' | 'default-or-eui64' | 'default';
export type NMSettingIP6ConfigPrivacyNick = 'unknown' | 'disabled' | 'prefer-public-addr' | 'prefer-temp-addr';
export type NMSettingIPConfigForwardingNick = 'default' | 'no' | 'yes' | 'auto';
export type NMSettingIPConfigRoutedDnsNick = 'default' | 'no' | 'yes';
export type NMSettingIp4ConfigClatNick = 'default' | 'no' | 'auto' | 'force';
export type NMSettingIpvlanModeNick = 'unknown' | 'l2' | 'l3' | 'l3s';
export type NMSettingMacRandomizationNick = 'default' | 'never' | 'always';
export type NMSettingMacsecModeNick = 'psk' | 'eap';
export type NMSettingMacsecOffloadNick = 'default' | 'off' | 'phy' | 'mac';
export type NMSettingMacsecValidationNick = 'disable' | 'check' | 'strict';
export type NMSettingMacvlanModeNick = 'unknown' | 'vepa' | 'bridge' | 'private' | 'passthru' | 'source';
export type NMSettingOvsDpdkLscInterruptNick = 'ignore' | 'disabled' | 'enabled';
export type NMSettingProxyMethodNick = 'none' | 'auto';
export type NMSettingSerialParityNick = 'none' | 'even' | 'odd';
export type NMSettingTunModeNick = 'unknown' | 'tun' | 'tap';
export type NMSettingWirelessChannelWidthNick = 'auto' | '20mhz' | '40mhz' | '80mhz';
export type NMSettingWirelessPowersaveNick = 'default' | 'ignore' | 'disable' | 'enable';
export type NMSettingWirelessSecurityFilsNick = 'default' | 'disable' | 'optional' | 'required';
export type NMSettingWirelessSecurityPmfNick = 'default' | 'disable' | 'optional' | 'required';
export type NMSriovEswitchEncapModeNick = 'preserve' | 'none' | 'basic';
export type NMSriovEswitchInlineModeNick = 'preserve' | 'none' | 'link' | 'network' | 'transport';
export type NMSriovEswitchModeNick = 'preserve' | 'legacy' | 'switchdev';
export type NMSriovPreserveOnDownNick = 'default' | 'no' | 'yes';
export type NMSriovVFVlanProtocolNick = '1q' | '1ad';
export type NMStateNick = 'unknown' | 'asleep' | 'disabled' | 'disconnected' | 'disconnecting' | 'connecting' | 'connected-local' | 'connected-site' | 'connected-global';
export type NMTernaryNick = 'default' | 'false' | 'true';
export type NMUtilsSecurityTypeNick = 'invalid' | 'none' | 'static-wep' | 'leap' | 'dynamic-wep' | 'wpa-psk' | 'wpa-enterprise' | 'wpa2-psk' | 'wpa2-enterprise' | 'sae' | 'owe' | 'wpa3-suite-b-192';
export type NMVersionInfoCapabilityNick = 'sync-route-with-table' | 'ip4-forwarding' | 'sriov-preserve-on-down';
export type NMVlanPriorityMapNick = 'ingress-map' | 'egress-map';
export type NMVpnConnectionStateNick = 'unknown' | 'prepare' | 'need-auth' | 'connect' | 'ip-config-get' | 'activated' | 'failed' | 'disconnected';
export type NMVpnConnectionStateReasonNick = 'unknown' | 'none' | 'user-disconnected' | 'device-disconnected' | 'service-stopped' | 'ip-config-invalid' | 'connect-timeout' | 'service-start-timeout' | 'service-start-failed' | 'no-secrets' | 'login-failed' | 'connection-removed';
export type NMVpnPluginFailureNick = 'login-failed' | 'connect-failed' | 'bad-ip-config';
export type NMVpnServiceStateNick = 'unknown' | 'init' | 'shutdown' | 'starting' | 'started' | 'stopping' | 'stopped';
export type NMWepKeyTypeNick = 'unknown' | 'key' | 'passphrase';
export type NMWifiBandNick = 'unknown' | '2-4-ghz' | '5-ghz' | '6-ghz';
export type NMWimaxNspNetworkTypeNick = 'unknown' | 'home' | 'partner' | 'roaming-partner';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface NMAccessPointProps extends NMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMAccessPointConstructOnly = NMObjectConstructOnly;

export interface NMActiveConnectionProps extends NMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMActiveConnectionConstructOnly = NMObjectConstructOnly;

export interface NMCheckpointProps extends NMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMCheckpointConstructOnly = NMObjectConstructOnly;

/** NMClient contains a cache of the objects of NetworkManager's D-Bus API. */
export interface NMClientProps extends GObjectProps, GAsyncInitableProps, GInitableProps {
    /** @default FALSE */
    'connectivity-check-enabled'?: boolean;
    /**
     * The #GDBusConnection to use.
     * @since 1.22
     */
    'dbus-connection'?: Gio.DBusConnection;
    /**
     * #NMClientInstanceFlags for the instance.
     * @since 1.24
     * @default 0
     */
    'instance-flags'?: number;
    /**
     * Whether networking is enabled.
     * @default FALSE
     */
    'networking-enabled'?: boolean;
    /**
     * Whether WiMAX functionality is enabled.
     * @default FALSE
     * @deprecated since 1.22: WiMAX is no longer supported and this always returns FALSE.
     */
    'wimax-enabled'?: boolean;
    /**
     * Whether wireless is enabled.
     * @default FALSE
     */
    'wireless-enabled'?: boolean;
    /**
     * Whether WWAN functionality is enabled.
     * @default FALSE
     */
    'wwan-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMClientConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly | 'dbus-connection';

/** NMConnection is the interface implemented by #NMRemoteConnection on the client side, and #NMSettingsConnection on the daemon side. */
export interface NMConnectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMConnectionConstructOnly = GObjectConstructOnly;

export interface NMDeviceProps extends NMObjectProps {
    /**
     * Whether the device can auto-activate a connection.
     * @default FALSE
     */
    autoconnect?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceConstructOnly = NMObjectConstructOnly;

export interface NMDevice6LowpanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDevice6LowpanConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceAdslProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceAdslConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceBondProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceBondConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceBridgeProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceBridgeConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceBtProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceBtConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceDummyProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceDummyConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceEthernetProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceEthernetConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceGenericProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceGenericConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceGeneveProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceGeneveConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceHsrProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceHsrConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceIPTunnelProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceIPTunnelConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceInfinibandProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceInfinibandConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceIpvlanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceIpvlanConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceLoopbackProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceLoopbackConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceMacsecProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceMacsecConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceMacvlanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceMacvlanConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceModemProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceModemConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceOlpcMeshProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceOlpcMeshConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceOvsBridgeProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceOvsBridgeConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceOvsInterfaceProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceOvsInterfaceConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceOvsPortProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceOvsPortConstructOnly = NMDeviceConstructOnly;

export interface NMDevicePppProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDevicePppConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceTeamProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceTeamConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceTunProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceTunConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceVethProps extends NMDeviceEthernetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceVethConstructOnly = NMDeviceEthernetConstructOnly;

export interface NMDeviceVlanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceVlanConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceVrfProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceVrfConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceVxlanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceVxlanConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceWifiProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceWifiConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceWifiP2PProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceWifiP2PConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceWimaxProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceWimaxConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceWireGuardProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceWireGuardConstructOnly = NMDeviceConstructOnly;

export interface NMDeviceWpanProps extends NMDeviceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMDeviceWpanConstructOnly = NMDeviceConstructOnly;

export interface NMObjectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMObjectConstructOnly = GObjectConstructOnly;

export interface NMRemoteConnectionProps extends NMObjectProps, NMConnectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMRemoteConnectionConstructOnly = NMObjectConstructOnly | NMConnectionConstructOnly;

export interface NMSettingProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingConstructOnly = GObjectConstructOnly;

/** 6LoWPAN Settings */
export interface NMSetting6LowpanProps extends NMSettingProps {
    /**
     * If given, specifies the parent interface name or parent connection UUID from which this 6LowPAN interface should be created.
     * @since 1.14
     * @default NULL
     */
    parent?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSetting6LowpanConstructOnly = NMSettingConstructOnly;

/** IEEE 802.1x Authentication Settings */
export interface NMSetting8021xProps extends NMSettingProps {
    /** List of strings to be matched against the altSubjectName of the certificate presented by the authentication server. */
    'altsubject-matches'?: string[];
    /**
     * Anonymous identity string for EAP authentication methods.
     * @default NULL
     */
    'anonymous-identity'?: string;
    /**
     * A timeout for the authentication.
     * @since 1.8
     * @default 0
     */
    'auth-timeout'?: number;
    /** Contains the CA certificate if used by the EAP method specified in the #NMSetting8021x:eap property. */
    'ca-cert'?: GLib.Bytes;
    /**
     * The password used to access the CA certificate stored in #NMSetting8021x:ca-cert property.
     * @since 1.8
     * @default NULL
     */
    'ca-cert-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:ca-cert-password property.
     * @since 1.8
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'ca-cert-password-flags'?: number;
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted certificates to be added to the verification chain in addition to the certificate specified in the #NMSetting8021x:ca-cert property.
     * @default NULL
     */
    'ca-path'?: string;
    /** Contains the client certificate if used by the EAP method specified in the #NMSetting8021x:eap property. */
    'client-cert'?: GLib.Bytes;
    /**
     * The password used to access the client certificate stored in #NMSetting8021x:client-cert property.
     * @since 1.8
     * @default NULL
     */
    'client-cert-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:client-cert-password property.
     * @since 1.8
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'client-cert-password-flags'?: number;
    /**
     * Constraint for server domain name.
     * @since 1.24
     * @default NULL
     */
    'domain-match'?: string;
    /**
     * Constraint for server domain name.
     * @since 1.2
     * @default NULL
     */
    'domain-suffix-match'?: string;
    /** The allowed EAP method to be used when authenticating to the network with 802.1x. */
    eap?: string[];
    /**
     * Identity string for EAP authentication methods.
     * @default NULL
     */
    identity?: string;
    /**
     * Define openssl_ciphers for wpa_supplicant.
     * @since 1.48
     * @default NULL
     */
    'openssl-ciphers'?: string;
    /**
     * Whether the 802.1X authentication is optional.
     * @since 1.22
     * @default FALSE
     */
    optional?: boolean;
    /**
     * UTF-8 encoded file path containing PAC for EAP-FAST.
     * @default NULL
     */
    'pac-file'?: string;
    /**
     * UTF-8 encoded password used for EAP authentication methods.
     * @default NULL
     */
    password?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-flags'?: number;
    /** Password used for EAP authentication methods, given as a byte array to allow passwords in other encodings than UTF-8 to be used. */
    'password-raw'?: GLib.Bytes;
    /**
     * Flags indicating how to handle the #NMSetting8021x:password-raw property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-raw-flags'?: number;
    /**
     * Specifies authentication flags to use in "phase 1" outer authentication using #NMSetting8021xAuthFlags options.
     * @since 1.8
     * @default 0
     */
    'phase1-auth-flags'?: number;
    /**
     * Enables or disables in-line provisioning of EAP-FAST credentials when FAST is specified as the EAP method in the #NMSetting8021x:eap property.
     * @default NULL
     */
    'phase1-fast-provisioning'?: string;
    /**
     * Forces use of the new PEAP label during key derivation.
     * @default NULL
     */
    'phase1-peaplabel'?: string;
    /**
     * Forces which PEAP version is used when PEAP is set as the EAP method in the #NMSetting8021x:eap property.
     * @default NULL
     */
    'phase1-peapver'?: string;
    /** List of strings to be matched against the altSubjectName of the certificate presented by the authentication server during the inner "phase 2" authentication. */
    'phase2-altsubject-matches'?: string[];
    /**
     * Specifies the allowed "phase 2" inner authentication method when an EAP method that uses an inner TLS tunnel is specified in the #NMSetting8021x:eap property.
     * @default NULL
     */
    'phase2-auth'?: string;
    /**
     * Specifies the allowed "phase 2" inner EAP-based authentication method when TTLS is specified in the #NMSetting8021x:eap property.
     * @default NULL
     */
    'phase2-autheap'?: string;
    /** Contains the "phase 2" CA certificate if used by the EAP method specified in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap properties. */
    'phase2-ca-cert'?: GLib.Bytes;
    /**
     * The password used to access the "phase2" CA certificate stored in #NMSetting8021x:phase2-ca-cert property.
     * @since 1.8
     * @default NULL
     */
    'phase2-ca-cert-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-ca-cert-password property.
     * @since 1.8
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'phase2-ca-cert-password-flags'?: number;
    /**
     * UTF-8 encoded path to a directory containing PEM or DER formatted certificates to be added to the verification chain in addition to the certificate specified in the #NMSetting8021x:phase2-ca-cert pro…
     * @default NULL
     */
    'phase2-ca-path'?: string;
    /** Contains the "phase 2" client certificate if used by the EAP method specified in the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap properties. */
    'phase2-client-cert'?: GLib.Bytes;
    /**
     * The password used to access the "phase2" client certificate stored in #NMSetting8021x:phase2-client-cert property.
     * @since 1.8
     * @default NULL
     */
    'phase2-client-cert-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-client-cert-password property.
     * @since 1.8
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'phase2-client-cert-password-flags'?: number;
    /**
     * Constraint for server domain name.
     * @since 1.24
     * @default NULL
     */
    'phase2-domain-match'?: string;
    /**
     * Constraint for server domain name.
     * @since 1.2
     * @default NULL
     */
    'phase2-domain-suffix-match'?: string;
    /** Contains the "phase 2" inner private key when the #NMSetting8021x:phase2-auth or #NMSetting8021x:phase2-autheap property is set to "tls". */
    'phase2-private-key'?: GLib.Bytes;
    /**
     * The password used to decrypt the "phase 2" private key specified in the #NMSetting8021x:phase2-private-key property when the private key either uses the path scheme, or is a PKCS#<!-- -->12 format ke…
     * @default NULL
     */
    'phase2-private-key-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:phase2-private-key-password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'phase2-private-key-password-flags'?: number;
    /**
     * Substring to be matched against the subject of the certificate presented by the authentication server during the inner "phase 2" authentication.
     * @default NULL
     * @deprecated since 1.2: Use #NMSetting8021x:phase2-domain-suffix-match instead.
     */
    'phase2-subject-match'?: string;
    /**
     * PIN used for EAP authentication methods.
     * @default NULL
     */
    pin?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:pin property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'pin-flags'?: number;
    /** Contains the private key when the #NMSetting8021x:eap property is set to "tls". */
    'private-key'?: GLib.Bytes;
    /**
     * The password used to decrypt the private key specified in the #NMSetting8021x:private-key property when the private key either uses the path scheme, or if the private key is a PKCS#<!-- -->12 format …
     * @default NULL
     */
    'private-key-password'?: string;
    /**
     * Flags indicating how to handle the #NMSetting8021x:private-key-password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'private-key-password-flags'?: number;
    /**
     * Substring to be matched against the subject of the certificate presented by the authentication server.
     * @default NULL
     * @deprecated since 1.2: Use #NMSetting8021x:phase2-domain-suffix-match instead.
     */
    'subject-match'?: string;
    /**
     * When %TRUE, overrides the #NMSetting8021x:ca-path and #NMSetting8021x:phase2-ca-path properties using the system CA directory specified at configure time with the --system-ca-path switch.
     * @default FALSE
     */
    'system-ca-certs'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSetting8021xConstructOnly = NMSettingConstructOnly;

/** ADSL Settings */
export interface NMSettingAdslProps extends NMSettingProps {
    /**
     * Encapsulation of ADSL connection.
     * @default NULL
     */
    encapsulation?: string;
    /**
     * Password used to authenticate with the ADSL service.
     * @default NULL
     */
    password?: string;
    /**
     * Flags indicating how to handle the #NMSettingAdsl:password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-flags'?: number;
    /**
     * ADSL connection protocol.
     * @default NULL
     */
    protocol?: string;
    /**
     * Username used to authenticate with the ADSL service.
     * @default NULL
     */
    username?: string;
    /**
     * VCI of ADSL connection
     * @default 0
     */
    vci?: number;
    /**
     * VPI of ADSL connection
     * @default 0
     */
    vpi?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingAdslConstructOnly = NMSettingConstructOnly;

/** Bluetooth Settings */
export interface NMSettingBluetoothProps extends NMSettingProps {
    /**
     * The Bluetooth address of the device.
     * @default NULL
     */
    bdaddr?: string;
    /**
     * Either "dun" for Dial-Up Networking connections or "panu" for Personal Area Networking connections to devices supporting the NAP profile.
     * @default NULL
     */
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBluetoothConstructOnly = NMSettingConstructOnly;

/** Bonding Settings */
export interface NMSettingBondProps extends NMSettingProps {
    /** Dictionary of key/value pairs of bonding options. */
    options?: GLib.HashTable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBondConstructOnly = NMSettingConstructOnly;

/** Bond Port Settings */
export interface NMSettingBondPortProps extends NMSettingProps {
    /**
     * The port priority for bond active port re-selection during failover.
     * @since 1.44
     * @default 0
     */
    prio?: number;
    /**
     * The queue ID of this bond port.
     * @since 1.34
     * @default 0
     */
    'queue-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBondPortConstructOnly = NMSettingConstructOnly;

/** Bridging Settings */
export interface NMSettingBridgeProps extends NMSettingProps {
    /**
     * The Ethernet MAC address aging time, in seconds.
     * @default 300
     */
    'ageing-time'?: number;
    /**
     * The Spanning Tree Protocol (STP) forwarding delay, in seconds.
     * @default 15
     */
    'forward-delay'?: number;
    /**
     * If specified, The MAC address of the multicast group this bridge uses for STP.
     * @since 1.24
     * @default NULL
     */
    'group-address'?: string;
    /**
     * A mask of group addresses to forward.
     * @since 1.10
     * @default 0
     */
    'group-forward-mask'?: number;
    /**
     * The Spanning Tree Protocol (STP) hello time, in seconds.
     * @default 2
     */
    'hello-time'?: number;
    /**
     * If specified, the MAC address of bridge.
     * @default NULL
     * @deprecated since 1.12: Use the #NMSettingWired:cloned-mac-address property instead.
     */
    'mac-address'?: string;
    /**
     * The Spanning Tree Protocol (STP) maximum message age, in seconds.
     * @default 20
     */
    'max-age'?: number;
    /**
     * Set maximum size of multicast hash table (value must be a power of 2).
     * @default 4096
     */
    'multicast-hash-max'?: number;
    /**
     * Set the number of queries the bridge will send before stopping forwarding a multicast group after a "leave" message has been received.
     * @default 2
     */
    'multicast-last-member-count'?: number;
    /**
     * Set interval (in deciseconds) between queries to find remaining members of a group, after a "leave" message is received.
     * @default 100
     */
    'multicast-last-member-interval'?: bigint | number;
    /**
     * Set delay (in deciseconds) after which the bridge will leave a group, if no membership reports for this group are received.
     * @default 26000
     */
    'multicast-membership-interval'?: bigint | number;
    /**
     * Enable or disable sending of multicast queries by the bridge.
     * @default FALSE
     */
    'multicast-querier'?: boolean;
    /**
     * If no queries are seen after this delay (in deciseconds) has passed, the bridge will start to send its own queries.
     * @default 25500
     */
    'multicast-querier-interval'?: bigint | number;
    /**
     * Interval (in deciseconds) between queries sent by the bridge after the end of the startup phase.
     * @default 12500
     */
    'multicast-query-interval'?: bigint | number;
    /**
     * Set the Max Response Time/Max Response Delay (in deciseconds) for IGMP/MLD queries sent by the bridge.
     * @default 1000
     */
    'multicast-query-response-interval'?: bigint | number;
    /**
     * If enabled the bridge's own IP address is used as the source address for IGMP queries otherwise the default of 0.0.0.0 is used.
     * @default FALSE
     */
    'multicast-query-use-ifaddr'?: boolean;
    /**
     * Sets bridge's multicast router.
     * @default NULL
     */
    'multicast-router'?: string;
    /**
     * Controls whether IGMP snooping is enabled for this bridge.
     * @since 1.2
     * @default TRUE
     */
    'multicast-snooping'?: boolean;
    /**
     * Set the number of IGMP queries to send during startup phase.
     * @default 2
     */
    'multicast-startup-query-count'?: number;
    /**
     * Sets the time (in deciseconds) between queries sent out at startup to determine membership information.
     * @default 3125
     */
    'multicast-startup-query-interval'?: bigint | number;
    /**
     * Sets the Spanning Tree Protocol (STP) priority for this bridge.
     * @default 32768
     */
    priority?: number;
    /**
     * Controls whether Spanning Tree Protocol (STP) is enabled for this bridge.
     * @default TRUE
     */
    stp?: boolean;
    /**
     * The default PVID for the ports of the bridge, that is the VLAN id assigned to incoming untagged frames.
     * @since 1.18
     * @default 1
     */
    'vlan-default-pvid'?: number;
    /**
     * Control whether VLAN filtering is enabled on the bridge.
     * @since 1.18
     * @default FALSE
     */
    'vlan-filtering'?: boolean;
    /**
     * If specified, the protocol used for VLAN filtering.
     * @since 1.24
     * @default NULL
     */
    'vlan-protocol'?: string;
    /**
     * Controls whether per-VLAN stats accounting is enabled.
     * @default FALSE
     */
    'vlan-stats-enabled'?: boolean;
    /**
     * Array of bridge VLAN objects.
     * @since 1.18
     */
    vlans?: NM.BridgeVlan[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBridgeConstructOnly = NMSettingConstructOnly;

/** Bridge Port Settings */
export interface NMSettingBridgePortProps extends NMSettingProps {
    /**
     * Enables or disables "hairpin mode" for the port, which allows frames to be sent back out through the port the frame was received on.
     * @default FALSE
     */
    'hairpin-mode'?: boolean;
    /**
     * The Spanning Tree Protocol (STP) port cost for destinations via this port.
     * @default 100
     */
    'path-cost'?: number;
    /**
     * The Spanning Tree Protocol (STP) priority of this bridge port.
     * @default 32
     */
    priority?: number;
    /**
     * Array of bridge VLAN objects.
     * @since 1.18
     */
    vlans?: NM.BridgeVlan[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingBridgePortConstructOnly = NMSettingConstructOnly;

/** CDMA-based Mobile Broadband Settings */
export interface NMSettingCdmaProps extends NMSettingProps {
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple frames.
     * @since 1.8
     * @default 0
     */
    mtu?: number;
    /**
     * The number to dial to establish the connection to the CDMA-based mobile broadband network, if any.
     * @default NULL
     */
    number?: string;
    /**
     * The password used to authenticate with the network, if required.
     * @default NULL
     */
    password?: string;
    /**
     * Flags indicating how to handle the #NMSettingCdma:password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-flags'?: number;
    /**
     * The username used to authenticate with the network, if required.
     * @default NULL
     */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingCdmaConstructOnly = NMSettingConstructOnly;

/** General Connection Profile Settings */
export interface NMSettingConnectionProps extends NMSettingProps {
    /**
     * The number of retries for the authentication.
     * @since 1.10
     * @default -1
     */
    'auth-retries'?: number;
    /**
     * Whether or not the connection should be automatically connected by NetworkManager when the resources for the connection are available.
     * @default TRUE
     */
    autoconnect?: boolean;
    /**
     * Whether or not ports of this connection should be automatically brought up when NetworkManager activates this connection.
     * @since 1.46
     * @default -1
     */
    'autoconnect-ports'?: number;
    /**
     * The autoconnect priority in range -999 to 999.
     * @default 0
     */
    'autoconnect-priority'?: number;
    /**
     * The number of times a connection should be tried when autoactivating before giving up.
     * @default -1
     */
    'autoconnect-retries'?: number;
    /**
     * Whether or not ports of this connection should be automatically brought up when NetworkManager activates this connection.
     * @since 1.2
     * @default NM_SETTING_CONNECTION_AUTOCONNECT_SLAVES_DEFAULT
     */
    'autoconnect-slaves'?: NMSettingConnectionAutoconnectSlavesNick | NM.SettingConnectionAutoconnectSlaves;
    /**
     * Interface name of the controller device or UUID of the controller connection.
     * @default NULL
     */
    controller?: string;
    /**
     * Whether DNSOverTls (dns-over-tls) is enabled for the connection.
     * @since 1.34
     * @default -1
     */
    'dns-over-tls'?: number;
    /**
     * Whether DNSSEC (dnssec) is enabled for the connection.
     * @since 1.56
     * @default -1
     */
    dnssec?: number;
    /**
     * Whether the connection will be brought down before the system is powered off.
     * @since 1.48
     * @default -1
     */
    'down-on-poweroff'?: number;
    /**
     * If greater than zero, delay success of IP addressing until either the timeout is reached, or an IP gateway replies to a ping.
     * @default 0
     */
    'gateway-ping-timeout'?: number;
    /**
     * A human readable unique identifier for the connection, like "Work Wi-Fi" or "T-Mobile 3G".
     * @default NULL
     */
    id?: string;
    /**
     * The name of the network interface this connection is bound to.
     * @default NULL
     */
    'interface-name'?: string;
    /**
     * The property specifies a list of target IP addresses for pinging.
     * @since 1.52
     */
    'ip-ping-addresses'?: string[];
    /**
     * The property determines whether it is sufficient for any ping check to succeed among #NMSettingConnection:ip-ping-addresses, or if all ping checks must succeed for #NMSettingConnection:ip-ping-addres…
     * @since 1.52
     * @default -1
     */
    'ip-ping-addresses-require-all'?: number;
    /**
     * If greater than zero, delay success of IP addressing until either the specified timeout (in seconds) is reached, or a target IP address replies to a ping.
     * @since 1.52
     * @default 0
     */
    'ip-ping-timeout'?: number;
    /**
     * Whether LLDP is enabled for the connection.
     * @since 1.2
     * @default -1
     */
    lldp?: number;
    /**
     * Whether Link-Local Multicast Name Resolution (LLMNR) is enabled for the connection.
     * @since 1.14
     * @default -1
     */
    llmnr?: number;
    /**
     * Interface name of the controller device or UUID of the controller connection.
     * @default NULL
     */
    master?: string;
    /**
     * Whether mDNS is enabled for the connection.
     * @since 1.12
     * @default -1
     */
    mdns?: number;
    /**
     * Whether the connection is metered.
     * @since 1.2
     * @default NM_METERED_UNKNOWN
     */
    metered?: NMMeteredNick | NM.Metered;
    /**
     * Whether to configure MPTCP endpoints and the address flags.
     * @since 1.40
     * @default 0
     */
    'mptcp-flags'?: number;
    /**
     * If configured, set to a Manufacturer Usage Description (MUD) URL that points to manufacturer-recommended network policies for IoT devices.
     * @since 1.26
     * @default NULL
     */
    'mud-url'?: string;
    /**
     * Specifies whether the profile can be active multiple times at a particular moment.
     * @since 1.14
     * @default 0
     */
    'multi-connect'?: number;
    /** An array of strings defining what access a given user has to this connection. */
    permissions?: string[];
    /**
     * Setting name of the device type of this port's controller connection (eg, %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a port.
     * @since 1.46
     * @default NULL
     */
    'port-type'?: string;
    /**
     * This property is deprecated and has no meaning.
     * @default FALSE
     * @deprecated since 1.44: This property is deprecated and has no meaning.
     */
    'read-only'?: boolean;
    /** List of connection UUIDs that should be activated when the base connection itself is activated. */
    secondaries?: string[];
    /**
     * Setting name of the device type of this port's controller connection (eg, %NM_SETTING_BOND_SETTING_NAME), or %NULL if this connection is not a port.
     * @default NULL
     */
    'slave-type'?: string;
    /**
     * This represents the identity of the connection used for various purposes.
     * @since 1.4
     * @default NULL
     */
    'stable-id'?: string;
    /**
     * The time, in seconds since the Unix Epoch, that the connection was last _successfully_ fully activated.
     * @default 0
     */
    timestamp?: bigint | number;
    /**
     * Base type of the connection.
     * @default NULL
     */
    type?: string;
    /**
     * A universally unique identifier for the connection, for example generated with libuuid.
     * @default NULL
     */
    uuid?: string;
    /**
     * Time in milliseconds to wait for connection to be considered activated.
     * @since 1.40
     * @default -1
     */
    'wait-activation-delay'?: number;
    /**
     * Timeout in milliseconds to wait for device at startup.
     * @since 1.20
     * @default -1
     */
    'wait-device-timeout'?: number;
    /**
     * The trust level of a the connection.
     * @default NULL
     */
    zone?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingConnectionConstructOnly = NMSettingConstructOnly;

/** Data Center Bridging Settings */
export interface NMSettingDcbProps extends NMSettingProps {
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FCoE application.
     * @default NM_SETTING_DCB_FLAG_NONE
     */
    'app-fcoe-flags'?: number;
    /**
     * The FCoE controller mode; either %NM_SETTING_DCB_FCOE_MODE_FABRIC or %NM_SETTING_DCB_FCOE_MODE_VN2VN.
     * @default NULL
     */
    'app-fcoe-mode'?: string;
    /**
     * The highest User Priority (0 - 7) which FCoE frames should use, or -1 for default priority.
     * @default -1
     */
    'app-fcoe-priority'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for the DCB FIP application.
     * @default NM_SETTING_DCB_FLAG_NONE
     */
    'app-fip-flags'?: number;
    /**
     * The highest User Priority (0 - 7) which FIP frames should use, or -1 for default priority.
     * @default -1
     */
    'app-fip-priority'?: number;
    /**
     * Specifies the #NMSettingDcbFlags for the DCB iSCSI application.
     * @default NM_SETTING_DCB_FLAG_NONE
     */
    'app-iscsi-flags'?: number;
    /**
     * The highest User Priority (0 - 7) which iSCSI frames should use, or -1 for default priority.
     * @default -1
     */
    'app-iscsi-priority'?: number;
    /** An array of 8 uint values, where the array index corresponds to the User Priority (0 - 7) and the value indicates the percentage of bandwidth of the priority's assigned group that the priority may us… */
    'priority-bandwidth'?: number[];
    /** An array of 8 boolean values, where the array index corresponds to the User Priority (0 - 7) and the value indicates whether or not the corresponding priority should transmit priority pause. */
    'priority-flow-control'?: boolean[];
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Flow Control (PFC).
     * @default NM_SETTING_DCB_FLAG_NONE
     */
    'priority-flow-control-flags'?: number;
    /** An array of 8 uint values, where the array index corresponds to the Priority Group ID (0 - 7) and the value indicates the percentage of link bandwidth allocated to that group. */
    'priority-group-bandwidth'?: number[];
    /**
     * Specifies the #NMSettingDcbFlags for DCB Priority Groups.
     * @default NM_SETTING_DCB_FLAG_NONE
     */
    'priority-group-flags'?: number;
    /** An array of 8 uint values, where the array index corresponds to the User Priority (0 - 7) and the value indicates the Priority Group ID. */
    'priority-group-id'?: number[];
    /** An array of 8 boolean values, where the array index corresponds to the User Priority (0 - 7) and the value indicates whether or not the priority may use all of the bandwidth allocated to its assigned… */
    'priority-strict-bandwidth'?: boolean[];
    /** An array of 8 uint values, where the array index corresponds to the User Priority (0 - 7) and the value indicates the traffic class (0 - 7) to which the priority is mapped. */
    'priority-traffic-class'?: number[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingDcbConstructOnly = NMSettingConstructOnly;

/** Dummy Link Settings */
export interface NMSettingDummyProps extends NMSettingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingDummyConstructOnly = NMSettingConstructOnly;

/** Ethtool Ethernet Settings */
export interface NMSettingEthtoolProps extends NMSettingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingEthtoolConstructOnly = NMSettingConstructOnly;

/** Generic Link Settings */
export interface NMSettingGenericProps extends NMSettingProps {
    /**
     * Name of the device handler that will be invoked to add and delete the device for this connection.
     * @since 1.46
     * @default NULL
     */
    'device-handler'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingGenericConstructOnly = NMSettingConstructOnly;

/** GENEVE Settings */
export interface NMSettingGeneveProps extends NMSettingProps {
    /**
     * Specifies the UDP destination port to communicate to the remote GENEVE tunnel endpoint.
     * @since 1.58
     * @default 6081
     */
    'destination-port'?: number;
    /**
     * Specifies how the Don't Fragment (DF) flag should be handled in the outer IP header of GENEVE tunnel packets.
     * @since 1.58
     * @default 0
     */
    df?: number;
    /**
     * Specifies the GENEVE Network Identifier (or GENEVE Segment Identifier) to use.
     * @since 1.58
     * @default 0
     */
    id?: number;
    /**
     * Specifies the unicast destination IP address to use in outgoing packets when communicating with the remote GENEVE tunnel endpoint.
     * @since 1.58
     * @default NULL
     */
    remote?: string;
    /**
     * Specifies the TOS value to use in outgoing packets.
     * @since 1.58
     * @default 0
     */
    tos?: number;
    /**
     * Specifies the time-to-live value to use in outgoing packets.
     * @since 1.58
     * @default 0
     */
    ttl?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingGeneveConstructOnly = NMSettingConstructOnly;

/** GSM-based Mobile Broadband Settings */
export interface NMSettingGsmProps extends NMSettingProps {
    /**
     * The GPRS Access Point Name specifying the APN used when establishing a data session with the GSM-based network.
     * @default NULL
     */
    apn?: string;
    /**
     * When %TRUE, the settings such as APN, username, or password will default to values that match the network the modem will register to in the Mobile Broadband Provider database.
     * @since 1.22
     * @default FALSE
     */
    'auto-config'?: boolean;
    /**
     * The device unique identifier (as given by the WWAN management service) which this connection applies to.
     * @since 1.2
     * @default NULL
     */
    'device-id'?: string;
    /**
     * The device UID (as given by the WWAN management service) which this connection applies to.
     * @since 1.56
     * @default NULL
     */
    'device-uid'?: string;
    /**
     * When %TRUE, only connections to the home network will be allowed.
     * @default FALSE
     */
    'home-only'?: boolean;
    /**
     * For LTE modems, this sets the APN for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.44
     * @default NULL
     */
    'initial-eps-bearer-apn'?: string;
    /**
     * For LTE modems, this setting determines whether the initial EPS bearer shall be configured when bringing up the connection.
     * @since 1.44
     * @default FALSE
     */
    'initial-eps-bearer-configure'?: boolean;
    /**
     * For LTE modems, this sets NOAUTH authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default TRUE
     */
    'initial-eps-bearer-noauth'?: boolean;
    /**
     * For LTE modems, this sets the password for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default NULL
     */
    'initial-eps-bearer-password'?: string;
    /**
     * Flags indicating how to handle the #NMSettingGsm:initial-eps-bearer-password property.
     * @since 1.52
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'initial-eps-bearer-password-flags'?: number;
    /**
     * For LTE modems, this disables CHAP authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default FALSE
     */
    'initial-eps-bearer-refuse-chap'?: boolean;
    /**
     * For LTE modems, this disables EAP authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default FALSE
     */
    'initial-eps-bearer-refuse-eap'?: boolean;
    /**
     * For LTE modems, this disables MSCHAP authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default FALSE
     */
    'initial-eps-bearer-refuse-mschap'?: boolean;
    /**
     * For LTE modems, this disables MSCHAPV2 authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default FALSE
     */
    'initial-eps-bearer-refuse-mschapv2'?: boolean;
    /**
     * For LTE modems, this disables PAP authentication method for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default FALSE
     */
    'initial-eps-bearer-refuse-pap'?: boolean;
    /**
     * For LTE modems, this sets the username for the initial EPS bearer that is set up when attaching to the network.
     * @since 1.52
     * @default NULL
     */
    'initial-eps-bearer-username'?: string;
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple frames.
     * @since 1.8
     * @default 0
     */
    mtu?: number;
    /**
     * The Network ID (GSM LAI format, ie MCC-MNC) to force specific network registration.
     * @default NULL
     */
    'network-id'?: string;
    /**
     * Legacy setting that used to help establishing PPP data sessions for GSM-based modems.
     * @default NULL
     * @deprecated since 1.16: User-provided values for this setting are no longer used.
     */
    number?: string;
    /**
     * The password used to authenticate with the network, if required.
     * @default NULL
     */
    password?: string;
    /**
     * Flags indicating how to handle the #NMSettingGsm:password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-flags'?: number;
    /**
     * If the SIM is locked with a PIN it must be unlocked before any other operations are requested.
     * @default NULL
     */
    pin?: string;
    /**
     * Flags indicating how to handle the #NMSettingGsm:pin property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'pin-flags'?: number;
    /**
     * The SIM card unique identifier (as given by the WWAN management service) which this connection applies to.
     * @since 1.2
     * @default NULL
     */
    'sim-id'?: string;
    /**
     * A MCC/MNC string like "310260" or "21601" identifying the specific mobile network operator which this connection applies to.
     * @since 1.2
     * @default NULL
     */
    'sim-operator-id'?: string;
    /**
     * The username used to authenticate with the network, if required.
     * @default NULL
     */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingGsmConstructOnly = NMSettingConstructOnly;

/** Hostname settings */
export interface NMSettingHostnameProps extends NMSettingProps {
    /**
     * Whether the system hostname can be determined from DHCP on this connection.
     * @since 1.30
     * @default NM_TERNARY_DEFAULT
     */
    'from-dhcp'?: NMTernaryNick | NM.Ternary;
    /**
     * Whether the system hostname can be determined from reverse DNS lookup of addresses on this device.
     * @since 1.30
     * @default NM_TERNARY_DEFAULT
     */
    'from-dns-lookup'?: NMTernaryNick | NM.Ternary;
    /**
     * If set to %NM_TERNARY_TRUE, NetworkManager attempts to get the hostname via DHCPv4/DHCPv6 or reverse DNS lookup on this device only when the device has the default route for the given address family …
     * @since 1.30
     * @default NM_TERNARY_DEFAULT
     */
    'only-from-default'?: NMTernaryNick | NM.Ternary;
    /**
     * The relative priority of this connection to determine the system hostname.
     * @since 1.30
     * @default 0
     */
    priority?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingHostnameConstructOnly = NMSettingConstructOnly;

/** HSR/PRP Settings */
export interface NMSettingHsrProps extends NMSettingProps {
    /**
     * The optional interlink port name of the HSR interface.
     * @since 1.56
     * @default NULL
     */
    interlink?: string;
    /**
     * The last byte of supervision address.
     * @since 1.46
     * @default 0
     */
    'multicast-spec'?: number;
    /**
     * The port1 interface name of the HSR.
     * @since 1.46
     * @default NULL
     */
    port1?: string;
    /**
     * The port2 interface name of the HSR.
     * @since 1.46
     * @default NULL
     */
    port2?: string;
    /**
     * Configures the protocol version to be used for the HSR/PRP interface.
     * @since 1.56
     * @default -1
     */
    'protocol-version'?: number;
    /**
     * The protocol used by the interface, whether it is PRP or HSR.
     * @since 1.46
     * @default FALSE
     */
    prp?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingHsrConstructOnly = NMSettingConstructOnly;

/** IPv4 Settings */
export interface NMSettingIP4ConfigProps extends NMSettingIPConfigProps {
    /**
     * Controls the CLAT (Customer-side translator) functionality.
     * @since 1.58
     * @default -1
     */
    clat?: number;
    /**
     * A string sent to the DHCP server to identify the local machine which the DHCP server may use to customize the DHCP lease and options.
     * @default NULL
     */
    'dhcp-client-id'?: string;
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the specified FQDN will be sent to the DHCP server when acquiring a lease.
     * @since 1.2
     * @default NULL
     */
    'dhcp-fqdn'?: string;
    /**
     * Controls the "IPv6-Only Preferred" DHCPv4 option (option 108 - RFC 8925).
     * @since 1.52
     * @default -1
     */
    'dhcp-ipv6-only-preferred'?: number;
    /**
     * The Vendor Class Identifier DHCP option (60).
     * @since 1.28
     * @default NULL
     */
    'dhcp-vendor-class-identifier'?: string;
    /**
     * Enable and disable the IPv4 link-local configuration independently of the ipv4.method configuration.
     * @since 1.40
     * @default 0
     */
    'link-local'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIP4ConfigConstructOnly = NMSettingIPConfigConstructOnly;

/** IPv6 Settings */
export interface NMSettingIP6ConfigProps extends NMSettingIPConfigProps {
    /**
     * Configure the method for creating the IPv6 interface identifier of addresses for RFC4862 IPv6 Stateless Address Autoconfiguration and IPv6 Link Local.
     * @since 1.2
     * @default 3
     */
    'addr-gen-mode'?: number;
    /**
     * A string containing the DHCPv6 Unique Identifier (DUID) used by the dhcp client to identify itself to DHCPv6 servers (RFC 3315).
     * @since 1.12
     * @default NULL
     */
    'dhcp-duid'?: string;
    /**
     * A IPv6 address followed by a slash and a prefix length.
     * @since 1.44
     * @default NULL
     */
    'dhcp-pd-hint'?: string;
    /**
     * Configure IPv6 Privacy Extensions for SLAAC, described in RFC4941.
     * @default NM_SETTING_IP6_CONFIG_PRIVACY_UNKNOWN
     */
    'ip6-privacy'?: NMSettingIP6ConfigPrivacyNick | NM.SettingIP6ConfigPrivacy;
    /**
     * Maximum transmission unit size, in bytes.
     * @since 1.40
     * @default 0
     */
    mtu?: number;
    /**
     * A timeout for waiting Router Advertisements in seconds.
     * @since 1.24
     * @default 0
     */
    'ra-timeout'?: number;
    /**
     * The preferred lifetime of autogenerated temporary addresses, in seconds.
     * @since 1.48
     * @default 0
     */
    'temp-preferred-lifetime'?: number;
    /**
     * The valid lifetime of autogenerated temporary addresses, in seconds.
     * @since 1.48
     * @default 0
     */
    'temp-valid-lifetime'?: number;
    /**
     * Configure the token for draft-chown-6man-tokenised-ipv6-identifiers-02 IPv6 tokenized interface identifiers.
     * @since 1.4
     * @default NULL
     */
    token?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIP6ConfigConstructOnly = NMSettingIPConfigConstructOnly;

export interface NMSettingIPConfigProps extends NMSettingProps {
    /** Array of IP addresses. */
    addresses?: NM.IPAddress[];
    /**
     * VPN connections will default to add the route automatically unless this setting is set to %FALSE.
     * @since 1.42
     * @default NM_TERNARY_DEFAULT
     */
    'auto-route-ext-gw'?: NMTernaryNick | NM.Ternary;
    /**
     * Maximum timeout in milliseconds used to check for the presence of duplicate IP addresses on the network.
     * @since 1.2
     * @default -1
     */
    'dad-timeout'?: number;
    /**
     * Specifies the value for the DSCP field (traffic class) of the IP header.
     * @since 1.46
     * @default NULL
     */
    'dhcp-dscp'?: string;
    /**
     * If the #NMSettingIPConfig:dhcp-send-hostname property is %TRUE, then the specified name will be sent to the DHCP server when acquiring a lease.
     * @default NULL
     */
    'dhcp-hostname'?: string;
    /**
     * Flags for the DHCP hostname and FQDN.
     * @since 1.22
     * @default 0
     */
    'dhcp-hostname-flags'?: number;
    /**
     * A string containing the "Identity Association Identifier" (IAID) used by the DHCP client.
     * @since 1.22
     * @default NULL
     */
    'dhcp-iaid'?: string;
    /**
     * Array of servers from which DHCP offers must be rejected.
     * @since 1.28
     */
    'dhcp-reject-servers'?: string[];
    /**
     * Since 1.52 this property is deprecated and is only used as fallback value for #NMSettingIPConfig:dhcp-send-hostname-v2 if it's set to 'default'.
     * @default TRUE
     * @deprecated since 1.52: use the new version of dhcp-send-hostname instead.
     */
    'dhcp-send-hostname'?: boolean;
    /**
     * If %TRUE, a hostname is sent to the DHCP server when acquiring a lease.
     * @since 1.52
     * @default -1
     */
    'dhcp-send-hostname-v2'?: number;
    /**
     * Whether the DHCP client will send RELEASE message when bringing the connection down.
     * @since 1.48
     * @default NM_TERNARY_DEFAULT
     */
    'dhcp-send-release'?: NMTernaryNick | NM.Ternary;
    /**
     * A timeout for a DHCP transaction in seconds.
     * @default 0
     */
    'dhcp-timeout'?: number;
    /** Array of DNS servers. */
    dns?: string[];
    /**
     * Array of DNS options to be added to resolv.conf.
     * @since 1.2
     */
    'dns-options'?: string[];
    /**
     * DNS servers priority.
     * @since 1.4
     * @default 0
     */
    'dns-priority'?: number;
    /** List of DNS search domains. */
    'dns-search'?: string[];
    /**
     * Whether to configure sysctl interface-specific forwarding.
     * @since 1.54
     * @default -1
     */
    forwarding?: number;
    /**
     * The gateway associated with this configuration.
     * @default NULL
     */
    gateway?: string;
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to %TRUE, automatically configured name servers and search domains are ignored and only name servers and search domains specified in …
     * @default FALSE
     */
    'ignore-auto-dns'?: boolean;
    /**
     * When #NMSettingIPConfig:method is set to "auto" and this property to %TRUE, automatically configured routes are ignored and only routes specified in the #NMSettingIPConfig:routes property, if any, ar…
     * @default FALSE
     */
    'ignore-auto-routes'?: boolean;
    /**
     * If %TRUE, allow overall network configuration to proceed even if the configuration specified by this property times out.
     * @default TRUE
     */
    'may-fail'?: boolean;
    /**
     * IP configuration method.
     * @default NULL
     */
    method?: string;
    /**
     * If %TRUE, this connection will never be the default connection for this IP type, meaning it will never be assigned the default route by NetworkManager.
     * @default FALSE
     */
    'never-default'?: boolean;
    /**
     * Connections will default to keep the autogenerated priority 0 local rule unless this setting is set to %TRUE.
     * @since 1.44
     * @default NM_TERNARY_DEFAULT
     */
    'replace-local-rule'?: NMTernaryNick | NM.Ternary;
    /**
     * The minimum time interval in milliseconds for which dynamic IP configuration should be tried before the connection succeeds.
     * @since 1.34
     * @default -1
     */
    'required-timeout'?: number;
    /**
     * The default metric for routes that don't explicitly specify a metric.
     * @default -1
     */
    'route-metric'?: bigint | number;
    /**
     * Enable policy routing (source routing) and set the routing table used when adding routes.
     * @since 1.10
     * @default 0
     */
    'route-table'?: number;
    /**
     * Whether to add routes for DNS servers.
     * @since 1.52
     * @default -1
     */
    'routed-dns'?: number;
    /** Array of IP routes. */
    routes?: NM.IPRoute[];
    /**
     * This option allows you to specify a custom DHCP lease time for the shared connection method in seconds.
     * @since 1.52
     * @default 0
     */
    'shared-dhcp-lease-time'?: number;
    /**
     * This option allows you to specify a custom DHCP range for the shared connection method.
     * @since 1.52
     * @default NULL
     */
    'shared-dhcp-range'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIPConfigConstructOnly = NMSettingConstructOnly;

/** IP Tunneling Settings */
export interface NMSettingIPTunnelProps extends NMSettingProps {
    /**
     * How many additional levels of encapsulation are permitted to be prepended to packets.
     * @since 1.2
     * @default 0
     */
    'encapsulation-limit'?: number;
    /**
     * Tunnel flags.
     * @since 1.12
     * @default 0
     */
    flags?: number;
    /**
     * The flow label to assign to tunnel packets.
     * @since 1.2
     * @default 0
     */
    'flow-label'?: number;
    /**
     * The fwmark value to assign to tunnel packets.
     * @since 1.42
     * @default 0
     */
    fwmark?: number;
    /**
     * The key used for tunnel input packets; the property is valid only for certain tunnel modes (GRE, IP6GRE).
     * @since 1.2
     * @default NULL
     */
    'input-key'?: string;
    /**
     * The local endpoint of the tunnel; the value can be empty, otherwise it must contain an IPv4 or IPv6 address.
     * @since 1.2
     * @default NULL
     */
    local?: string;
    /**
     * The tunneling mode.
     * @since 1.2
     * @default 0
     */
    mode?: number;
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple fragments.
     * @since 1.2
     * @default 0
     */
    mtu?: number;
    /**
     * The key used for tunnel output packets; the property is valid only for certain tunnel modes (GRE, IP6GRE).
     * @since 1.2
     * @default NULL
     */
    'output-key'?: string;
    /**
     * If given, specifies the parent interface name or parent connection UUID the new device will be bound to so that tunneled packets will only be routed via that interface.
     * @since 1.2
     * @default NULL
     */
    parent?: string;
    /**
     * Whether to enable Path MTU Discovery on this tunnel.
     * @since 1.2
     * @default TRUE
     */
    'path-mtu-discovery'?: boolean;
    /**
     * The remote endpoint of the tunnel; the value must contain an IPv4 or IPv6 address.
     * @since 1.2
     * @default NULL
     */
    remote?: string;
    /**
     * The type of service (IPv4) or traffic class (IPv6) field to be set on tunneled packets.
     * @since 1.2
     * @default 0
     */
    tos?: number;
    /**
     * The TTL to assign to tunneled packets.
     * @since 1.2
     * @default 0
     */
    ttl?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIPTunnelConstructOnly = NMSettingConstructOnly;

/** Infiniband Settings */
export interface NMSettingInfinibandProps extends NMSettingProps {
    /**
     * If specified, this connection will only apply to the IPoIB device whose permanent MAC address matches.
     * @default NULL
     */
    'mac-address'?: string;
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple frames.
     * @default 0
     */
    mtu?: number;
    /**
     * The InfiniBand p-key to use for this device.
     * @default -1
     */
    'p-key'?: number;
    /**
     * The interface name of the parent device of this device.
     * @default NULL
     */
    parent?: string;
    /**
     * The IP-over-InfiniBand transport mode.
     * @default NULL
     */
    'transport-mode'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingInfinibandConstructOnly = NMSettingConstructOnly;

/** IPVLAN Settings */
export interface NMSettingIpvlanProps extends NMSettingProps {
    /**
     * The IPVLAN mode.
     * @since 1.52
     * @default 0
     */
    mode?: number;
    /**
     * If given, specifies the parent interface name or parent connection UUID from which this IPVLAN interface should be created.
     * @since 1.52
     * @default NULL
     */
    parent?: string;
    /**
     * Whether the interface should be put in private mode.
     * @since 1.52
     * @default FALSE
     */
    private?: boolean;
    /**
     * Whether the interface should be put in VEPA mode.
     * @since 1.52
     * @default FALSE
     */
    vepa?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingIpvlanConstructOnly = NMSettingConstructOnly;

/** Link settings */
export interface NMSettingLinkProps extends NMSettingProps {
    /**
     * The maximum size of a packet built by the Generic Receive Offload stack for this device.
     * @since 1.44
     * @default -1
     */
    'gro-max-size'?: bigint | number;
    /**
     * The maximum segments of a Generic Segment Offload packet the device should accept.
     * @since 1.44
     * @default -1
     */
    'gso-max-segments'?: bigint | number;
    /**
     * The maximum size of a Generic Segment Offload packet the device should accept.
     * @since 1.44
     * @default -1
     */
    'gso-max-size'?: bigint | number;
    /**
     * The size of the transmit queue for the device, in number of packets.
     * @since 1.44
     * @default -1
     */
    'tx-queue-length'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingLinkConstructOnly = NMSettingConstructOnly;

/** Loopback Link Settings */
export interface NMSettingLoopbackProps extends NMSettingProps {
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple Ethernet frames.
     * @since 1.42
     * @default 0
     */
    mtu?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingLoopbackConstructOnly = NMSettingConstructOnly;

/** MACSec Settings */
export interface NMSettingMacsecProps extends NMSettingProps {
    /**
     * Whether the transmitted traffic must be encrypted.
     * @since 1.6
     * @default TRUE
     */
    encrypt?: boolean;
    /**
     * The pre-shared CAK (Connectivity Association Key) for MACsec Key Agreement.
     * @since 1.6
     * @default NULL
     */
    'mka-cak'?: string;
    /**
     * Flags indicating how to handle the #NMSettingMacsec:mka-cak property.
     * @since 1.6
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'mka-cak-flags'?: number;
    /**
     * The pre-shared CKN (Connectivity-association Key Name) for MACsec Key Agreement.
     * @since 1.6
     * @default NULL
     */
    'mka-ckn'?: string;
    /**
     * Specifies how the CAK (Connectivity Association Key) for MKA (MACsec Key Agreement) is obtained.
     * @since 1.6
     * @default 0
     */
    mode?: number;
    /**
     * Specifies the MACsec offload mode.
     * @since 1.46
     * @default -1
     */
    offload?: number;
    /**
     * If given, specifies the parent interface name or parent connection UUID from which this MACSEC interface should be created.
     * @since 1.6
     * @default NULL
     */
    parent?: string;
    /**
     * The port component of the SCI (Secure Channel Identifier), between 1 and 65534.
     * @since 1.6
     * @default 1
     */
    port?: number;
    /**
     * Specifies whether the SCI (Secure Channel Identifier) is included in every packet.
     * @since 1.12
     * @default TRUE
     */
    'send-sci'?: boolean;
    /**
     * Specifies the validation mode for incoming frames.
     * @since 1.6
     * @default 2
     */
    validation?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingMacsecConstructOnly = NMSettingConstructOnly;

/** MAC VLAN Settings */
export interface NMSettingMacvlanProps extends NMSettingProps {
    /**
     * The macvlan mode, which specifies the communication mechanism between multiple macvlans on the same lower device.
     * @since 1.2
     * @default 0
     */
    mode?: number;
    /**
     * If given, specifies the parent interface name or parent connection UUID from which this MAC-VLAN interface should be created.
     * @since 1.2
     * @default NULL
     */
    parent?: string;
    /**
     * Whether the parent interface should be put in promiscuous mode (true by default).
     * @since 1.2
     * @default TRUE
     */
    promiscuous?: boolean;
    /**
     * Whether the interface should be a MACVTAP.
     * @since 1.2
     * @default FALSE
     */
    tap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingMacvlanConstructOnly = NMSettingConstructOnly;

/** Match settings */
export interface NMSettingMatchProps extends NMSettingProps {
    /**
     * A list of driver names to match.
     * @since 1.26
     */
    driver?: string[];
    /**
     * A list of interface names to match.
     * @since 1.14
     */
    'interface-name'?: string[];
    /**
     * A list of kernel command line arguments to match.
     * @since 1.26
     */
    'kernel-command-line'?: string[];
    /**
     * A list of paths to match against the ID_PATH udev property of devices.
     * @since 1.26
     */
    path?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingMatchConstructOnly = NMSettingConstructOnly;

/** OLPC Wireless Mesh Settings */
export interface NMSettingOlpcMeshProps extends NMSettingProps {
    /**
     * Channel on which the mesh network to join is located.
     * @default 0
     */
    channel?: number;
    /**
     * Anycast DHCP MAC address used when requesting an IP address via DHCP.
     * @default NULL
     */
    'dhcp-anycast-address'?: string;
    /** SSID of the mesh network to join. */
    ssid?: GLib.Bytes;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOlpcMeshConstructOnly = NMSettingConstructOnly;

/** OvsBridge Link Settings */
export interface NMSettingOvsBridgeProps extends NMSettingProps {
    /**
     * The data path type.
     * @since 1.20
     * @default NULL
     */
    'datapath-type'?: string;
    /**
     * The bridge failure mode.
     * @since 1.10
     * @default NULL
     */
    'fail-mode'?: string;
    /**
     * Enable or disable multicast snooping.
     * @since 1.10
     * @default FALSE
     */
    'mcast-snooping-enable'?: boolean;
    /**
     * Enable or disable RSTP.
     * @since 1.10
     * @default FALSE
     */
    'rstp-enable'?: boolean;
    /**
     * Enable or disable STP.
     * @since 1.10
     * @default FALSE
     */
    'stp-enable'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsBridgeConstructOnly = NMSettingConstructOnly;

/** OvsDpdk Link Settings */
export interface NMSettingOvsDpdkProps extends NMSettingProps {
    /**
     * Open vSwitch DPDK device arguments.
     * @since 1.20
     * @default NULL
     */
    devargs?: string;
    /**
     * Configures the Link State Change (LSC) detection mode for the OVS DPDK interface.
     * @since 1.54
     * @default -1
     */
    'lsc-interrupt'?: number;
    /**
     * Open vSwitch DPDK number of rx queues.
     * @since 1.36
     * @default 0
     */
    'n-rxq'?: number;
    /**
     * The rx queue size (number of rx descriptors) for DPDK ports.
     * @since 1.42
     * @default 0
     */
    'n-rxq-desc'?: number;
    /**
     * The tx queue size (number of tx descriptors) for DPDK ports.
     * @since 1.42
     * @default 0
     */
    'n-txq-desc'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsDpdkConstructOnly = NMSettingConstructOnly;

/** OVS External IDs Settings */
export interface NMSettingOvsExternalIDsProps extends NMSettingProps {
    /**
     * A dictionary of key/value pairs with external-ids for OVS.
     * @since 1.30
     */
    data?: GLib.HashTable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsExternalIDsConstructOnly = NMSettingConstructOnly;

/** Open vSwitch Interface Settings */
export interface NMSettingOvsInterfaceProps extends NMSettingProps {
    /**
     * Open vSwitch openflow port number.
     * @since 1.42
     * @default 0
     */
    'ofport-request'?: number;
    /**
     * The interface type.
     * @since 1.10
     * @default NULL
     */
    type?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsInterfaceConstructOnly = NMSettingConstructOnly;

/** OVS Other Config Settings */
export interface NMSettingOvsOtherConfigProps extends NMSettingProps {
    /**
     * A dictionary of key/value pairs with other_config settings for OVS.
     * @since 1.42
     */
    data?: GLib.HashTable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsOtherConfigConstructOnly = NMSettingConstructOnly;

/** OvsPatch Link Settings */
export interface NMSettingOvsPatchProps extends NMSettingProps {
    /**
     * Specifies the name of the interface for the other side of the patch.
     * @since 1.10
     * @default NULL
     */
    peer?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsPatchConstructOnly = NMSettingConstructOnly;

/** OvsPort Link Settings */
export interface NMSettingOvsPortProps extends NMSettingProps {
    /**
     * The time port must be inactive in order to be considered down.
     * @since 1.10
     * @default 0
     */
    'bond-downdelay'?: number;
    /**
     * Bonding mode.
     * @since 1.10
     * @default NULL
     */
    'bond-mode'?: string;
    /**
     * The time port must be active before it starts forwarding traffic.
     * @since 1.10
     * @default 0
     */
    'bond-updelay'?: number;
    /**
     * LACP mode.
     * @since 1.10
     * @default NULL
     */
    lacp?: string;
    /**
     * The VLAN tag in the range 0-4095.
     * @since 1.10
     * @default 0
     */
    tag?: number;
    /**
     * A list of VLAN ranges that this port trunks.
     * @since 1.42
     */
    trunks?: NM.Range[];
    /**
     * The VLAN mode.
     * @since 1.10
     * @default NULL
     */
    'vlan-mode'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingOvsPortConstructOnly = NMSettingConstructOnly;

/** Point-to-Point Protocol Settings */
export interface NMSettingPppProps extends NMSettingProps {
    /**
     * If non-zero, instruct pppd to set the serial port to the specified baudrate.
     * @default 0
     */
    baud?: number;
    /**
     * If %TRUE, specify that pppd should set the serial port to use hardware flow control with RTS and CTS signals.
     * @default FALSE
     */
    crtscts?: boolean;
    /**
     * If non-zero, instruct pppd to presume the connection to the peer has failed if the specified number of LCP echo-requests go unanswered by the peer.
     * @default 0
     */
    'lcp-echo-failure'?: number;
    /**
     * If non-zero, instruct pppd to send an LCP echo-request frame to the peer every n seconds (where n is the specified value).
     * @default 0
     */
    'lcp-echo-interval'?: number;
    /**
     * If %TRUE, stateful MPPE is used.
     * @default FALSE
     */
    'mppe-stateful'?: boolean;
    /**
     * If non-zero, instruct pppd to request that the peer send packets no larger than the specified size.
     * @default 0
     */
    mru?: number;
    /**
     * If non-zero, instruct pppd to send packets no larger than the specified size.
     * @default 0
     */
    mtu?: number;
    /**
     * If %TRUE, Van Jacobsen TCP header compression will not be requested.
     * @default FALSE
     */
    'no-vj-comp'?: boolean;
    /**
     * If %TRUE, do not require the other side (usually the PPP server) to authenticate itself to the client.
     * @default TRUE
     */
    noauth?: boolean;
    /**
     * If %TRUE, BSD compression will not be requested.
     * @default FALSE
     */
    nobsdcomp?: boolean;
    /**
     * If %TRUE, "deflate" compression will not be requested.
     * @default FALSE
     */
    nodeflate?: boolean;
    /**
     * If %TRUE, the CHAP authentication method will not be used.
     * @default FALSE
     */
    'refuse-chap'?: boolean;
    /**
     * If %TRUE, the EAP authentication method will not be used.
     * @default FALSE
     */
    'refuse-eap'?: boolean;
    /**
     * If %TRUE, the MSCHAP authentication method will not be used.
     * @default FALSE
     */
    'refuse-mschap'?: boolean;
    /**
     * If %TRUE, the MSCHAPv2 authentication method will not be used.
     * @default FALSE
     */
    'refuse-mschapv2'?: boolean;
    /**
     * If %TRUE, the PAP authentication method will not be used.
     * @default FALSE
     */
    'refuse-pap'?: boolean;
    /**
     * If %TRUE, MPPE (Microsoft Point-to-Point Encryption) will be required for the PPP session.
     * @default FALSE
     */
    'require-mppe'?: boolean;
    /**
     * If %TRUE, 128-bit MPPE (Microsoft Point-to-Point Encryption) will be required for the PPP session, and the "require-mppe" property must also be set to %TRUE.
     * @default FALSE
     */
    'require-mppe-128'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingPppConstructOnly = NMSettingConstructOnly;

/** PPP-over-Ethernet Settings */
export interface NMSettingPppoeProps extends NMSettingProps {
    /**
     * If given, specifies the parent interface name on which this PPPoE connection should be created.
     * @since 1.10
     * @default NULL
     */
    parent?: string;
    /**
     * Password used to authenticate with the PPPoE service.
     * @default NULL
     */
    password?: string;
    /**
     * Flags indicating how to handle the #NMSettingPppoe:password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'password-flags'?: number;
    /**
     * If specified, instruct PPPoE to only initiate sessions with access concentrators that provide the specified service.
     * @default NULL
     */
    service?: string;
    /**
     * Username used to authenticate with the PPPoE service.
     * @default NULL
     */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingPppoeConstructOnly = NMSettingConstructOnly;

/** IPv6 prefix delegation settings */
export interface NMSettingPrefixDelegationProps extends NMSettingProps {
    /**
     * The subnet ID to use on the interface from the prefix delegation received via an upstream interface.
     * @since 1.54
     * @default -1
     */
    'subnet-id'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingPrefixDelegationConstructOnly = NMSettingConstructOnly;

/** WWW Proxy Settings */
export interface NMSettingProxyProps extends NMSettingProps {
    /**
     * Whether the proxy configuration is for browser only.
     * @since 1.6
     * @default FALSE
     */
    'browser-only'?: boolean;
    /**
     * Method for proxy configuration, Default is %NM_SETTING_PROXY_METHOD_NONE
     * @since 1.6
     * @default 0
     */
    method?: number;
    /**
     * PAC script for the connection.
     * @since 1.6
     * @default NULL
     */
    'pac-script'?: string;
    /**
     * PAC URL for obtaining PAC file.
     * @since 1.6
     * @default NULL
     */
    'pac-url'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingProxyConstructOnly = NMSettingConstructOnly;

/** Serial Link Settings */
export interface NMSettingSerialProps extends NMSettingProps {
    /**
     * Speed to use for communication over the serial port.
     * @default 57600
     */
    baud?: number;
    /**
     * Byte-width of the serial communication.
     * @default 8
     */
    bits?: number;
    /**
     * Parity setting of the serial port.
     * @default NM_SETTING_SERIAL_PARITY_NONE
     */
    parity?: NMSettingSerialParityNick | NM.SettingSerialParity;
    /**
     * Time to delay between each byte sent to the modem, in microseconds.
     * @default 0
     */
    'send-delay'?: bigint | number;
    /**
     * Number of stop bits for communication on the serial port.
     * @default 1
     */
    stopbits?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingSerialConstructOnly = NMSettingConstructOnly;

/** SR-IOV settings */
export interface NMSettingSriovProps extends NMSettingProps {
    /**
     * Whether to autoprobe virtual functions by a compatible driver.
     * @since 1.14
     * @default NM_TERNARY_DEFAULT
     */
    'autoprobe-drivers'?: NMTernaryNick | NM.Ternary;
    /**
     * Select the eswitch encapsulation support.
     * @since 1.46
     * @default -1
     */
    'eswitch-encap-mode'?: number;
    /**
     * Select the eswitch inline-mode of the device.
     * @since 1.46
     * @default -1
     */
    'eswitch-inline-mode'?: number;
    /**
     * Select the eswitch mode of the device.
     * @since 1.46
     * @default -1
     */
    'eswitch-mode'?: number;
    /**
     * This controls whether NetworkManager preserves the SR-IOV parameters set on the device when the connection is deactivated, or whether it resets them to their default value.
     * @since 1.54
     * @default -1
     */
    'preserve-on-down'?: number;
    /**
     * The total number of virtual functions to create.
     * @since 1.14
     * @default 0
     */
    'total-vfs'?: number;
    /**
     * Array of virtual function descriptors.
     * @since 1.14
     */
    vfs?: NM.SriovVF[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingSriovConstructOnly = NMSettingConstructOnly;

/** Linux Traffic Control Settings */
export interface NMSettingTCConfigProps extends NMSettingProps {
    /** Array of TC queueing disciplines. */
    qdiscs?: NM.TCQdisc[];
    /** Array of TC traffic filters. */
    tfilters?: NM.TCTfilter[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTCConfigConstructOnly = NMSettingConstructOnly;

/** Teaming Settings */
export interface NMSettingTeamProps extends NMSettingProps {
    /**
     * The JSON configuration for the team network interface.
     * @default NULL
     */
    config?: string;
    /**
     * Link watchers configuration for the connection: each link watcher is defined by a dictionary, whose keys depend upon the selected link watcher.
     * @since 1.12
     */
    'link-watchers'?: NM.TeamLinkWatcher[];
    /**
     * Corresponds to the teamd mcast_rejoin.count.
     * @since 1.12
     * @default -1
     */
    'mcast-rejoin-count'?: number;
    /**
     * Corresponds to the teamd mcast_rejoin.interval.
     * @since 1.12
     * @default -1
     */
    'mcast-rejoin-interval'?: number;
    /**
     * Corresponds to the teamd notify_peers.count.
     * @since 1.12
     * @default -1
     */
    'notify-peers-count'?: number;
    /**
     * Corresponds to the teamd notify_peers.interval.
     * @since 1.12
     * @default -1
     */
    'notify-peers-interval'?: number;
    /**
     * Corresponds to the teamd runner.name.
     * @since 1.12
     * @default NULL
     */
    runner?: string;
    /**
     * Corresponds to the teamd runner.active.
     * @since 1.12
     * @default TRUE
     */
    'runner-active'?: boolean;
    /**
     * Corresponds to the teamd runner.agg_select_policy.
     * @since 1.12
     * @default NULL
     */
    'runner-agg-select-policy'?: string;
    /**
     * Corresponds to the teamd runner.fast_rate.
     * @since 1.12
     * @default FALSE
     */
    'runner-fast-rate'?: boolean;
    /**
     * Corresponds to the teamd runner.hwaddr_policy.
     * @since 1.12
     * @default NULL
     */
    'runner-hwaddr-policy'?: string;
    /**
     * Corresponds to the teamd runner.min_ports.
     * @since 1.12
     * @default -1
     */
    'runner-min-ports'?: number;
    /**
     * Corresponds to the teamd runner.sys_prio.
     * @since 1.12
     * @default -1
     */
    'runner-sys-prio'?: number;
    /**
     * Corresponds to the teamd runner.tx_balancer.name.
     * @since 1.12
     * @default NULL
     */
    'runner-tx-balancer'?: string;
    /**
     * Corresponds to the teamd runner.tx_balancer.interval.
     * @since 1.12
     * @default -1
     */
    'runner-tx-balancer-interval'?: number;
    /**
     * Corresponds to the teamd runner.tx_hash.
     * @since 1.12
     */
    'runner-tx-hash'?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTeamConstructOnly = NMSettingConstructOnly;

/** Team Port Settings */
export interface NMSettingTeamPortProps extends NMSettingProps {
    /**
     * The JSON configuration for the team port.
     * @default NULL
     */
    config?: string;
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_key.
     * @since 1.12
     * @default -1
     */
    'lacp-key'?: number;
    /**
     * Corresponds to the teamd ports.PORTIFNAME.lacp_prio.
     * @since 1.12
     * @default -1
     */
    'lacp-prio'?: number;
    /**
     * Link watchers configuration for the connection: each link watcher is defined by a dictionary, whose keys depend upon the selected link watcher.
     * @since 1.12
     */
    'link-watchers'?: NM.TeamLinkWatcher[];
    /**
     * Corresponds to the teamd ports.PORTIFNAME.prio.
     * @since 1.12
     * @default 0
     */
    prio?: number;
    /**
     * Corresponds to the teamd ports.PORTIFNAME.queue_id.
     * @since 1.12
     * @default -1
     */
    'queue-id'?: number;
    /**
     * Corresponds to the teamd ports.PORTIFNAME.sticky.
     * @since 1.12
     * @default FALSE
     */
    sticky?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTeamPortConstructOnly = NMSettingConstructOnly;

/** Tunnel Settings */
export interface NMSettingTunProps extends NMSettingProps {
    /**
     * The group ID which will own the device.
     * @since 1.2
     * @default NULL
     */
    group?: string;
    /**
     * The operating mode of the virtual device.
     * @since 1.2
     * @default 1
     */
    mode?: number;
    /**
     * If the property is set to %TRUE, the interface will support multiple file descriptors (queues) to parallelize packet sending or receiving.
     * @since 1.2
     * @default FALSE
     */
    'multi-queue'?: boolean;
    /**
     * The user ID which will own the device.
     * @since 1.2
     * @default NULL
     */
    owner?: string;
    /**
     * If %TRUE the interface will prepend a 4 byte header describing the physical interface to the packets.
     * @since 1.2
     * @default FALSE
     */
    pi?: boolean;
    /**
     * If %TRUE the IFF_VNET_HDR the tunnel packets will include a virtio network header.
     * @since 1.2
     * @default FALSE
     */
    'vnet-hdr'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingTunConstructOnly = NMSettingConstructOnly;

/** General User Profile Settings */
export interface NMSettingUserProps extends NMSettingProps {
    /**
     * A dictionary of key/value pairs with user data.
     * @since 1.8
     */
    data?: GLib.HashTable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingUserConstructOnly = NMSettingConstructOnly;

/** Veth Settings */
export interface NMSettingVethProps extends NMSettingProps {
    /**
     * This property specifies the peer interface name of the veth.
     * @since 1.30
     * @default NULL
     */
    peer?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVethConstructOnly = NMSettingConstructOnly;

/** VLAN Settings */
export interface NMSettingVlanProps extends NMSettingProps {
    /** For outgoing packets, a list of mappings from Linux SKB priorities to 802.1p priorities. */
    'egress-priority-map'?: string[];
    /**
     * One or more flags which control the behavior and features of the VLAN interface.
     * @default NM_VLAN_FLAG_REORDER_HEADERS
     */
    flags?: number;
    /**
     * The VLAN identifier that the interface created by this connection should be assigned.
     * @default 0
     */
    id?: number;
    /** For incoming packets, a list of mappings from 802.1p priorities to Linux SKB priorities. */
    'ingress-priority-map'?: string[];
    /**
     * If given, specifies the parent interface name or parent connection UUID from which this VLAN interface should be created.
     * @default NULL
     */
    parent?: string;
    /**
     * Specifies the VLAN protocol to use for encapsulation.
     * @since 1.42
     * @default NULL
     */
    protocol?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVlanConstructOnly = NMSettingConstructOnly;

/** VPN Settings */
export interface NMSettingVpnProps extends NMSettingProps {
    /** Dictionary of key/value pairs of VPN plugin specific data. */
    data?: GLib.HashTable;
    /**
     * If the VPN service supports persistence, and this property is %TRUE, the VPN will attempt to stay connected across link changes and outages, until explicitly disconnected.
     * @default FALSE
     */
    persistent?: boolean;
    /** Dictionary of key/value pairs of VPN plugin specific secrets like passwords or private keys. */
    secrets?: GLib.HashTable;
    /**
     * D-Bus service name of the VPN plugin that this setting uses to connect to its network.
     * @default NULL
     */
    'service-type'?: string;
    /**
     * Timeout for the VPN service to establish the connection.
     * @since 1.2
     * @default 0
     */
    timeout?: number;
    /**
     * If the VPN connection requires a user name for authentication, that name should be provided here.
     * @default NULL
     */
    'user-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVpnConstructOnly = NMSettingConstructOnly;

/** VRF settings */
export interface NMSettingVrfProps extends NMSettingProps {
    /**
     * The routing table for this VRF.
     * @since 1.24
     * @default 0
     */
    table?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVrfConstructOnly = NMSettingConstructOnly;

/** VXLAN Settings */
export interface NMSettingVxlanProps extends NMSettingProps {
    /**
     * Specifies the lifetime in seconds of FDB entries learnt by the kernel.
     * @since 1.2
     * @default 300
     */
    ageing?: number;
    /**
     * Specifies the UDP destination port to communicate to the remote VXLAN tunnel endpoint.
     * @since 1.2
     * @default 8472
     */
    'destination-port'?: number;
    /**
     * Specifies the VXLAN Network Identifier (or VXLAN Segment Identifier) to use.
     * @since 1.2
     * @default 0
     */
    id?: number;
    /**
     * Specifies whether netlink LL ADDR miss notifications are generated.
     * @since 1.2
     * @default FALSE
     */
    'l2-miss'?: boolean;
    /**
     * Specifies whether netlink IP ADDR miss notifications are generated.
     * @since 1.2
     * @default FALSE
     */
    'l3-miss'?: boolean;
    /**
     * Specifies whether unknown source link layer addresses and IP addresses are entered into the VXLAN device forwarding database.
     * @since 1.2
     * @default TRUE
     */
    learning?: boolean;
    /**
     * Specifies the maximum number of FDB entries.
     * @since 1.2
     * @default 0
     */
    limit?: number;
    /**
     * If given, specifies the source IP address to use in outgoing packets.
     * @since 1.2
     * @default NULL
     */
    local?: string;
    /**
     * If given, specifies the parent interface name or parent connection UUID.
     * @since 1.2
     * @default NULL
     */
    parent?: string;
    /**
     * Specifies whether ARP proxy is turned on.
     * @since 1.2
     * @default FALSE
     */
    proxy?: boolean;
    /**
     * Specifies the unicast destination IP address to use in outgoing packets when the destination link layer address is not known in the VXLAN device forwarding database, or the multicast IP address to jo…
     * @since 1.2
     * @default NULL
     */
    remote?: string;
    /**
     * Specifies whether route short circuit is turned on.
     * @since 1.2
     * @default FALSE
     */
    rsc?: boolean;
    /**
     * Specifies the maximum UDP source port to communicate to the remote VXLAN tunnel endpoint.
     * @since 1.2
     * @default 0
     */
    'source-port-max'?: number;
    /**
     * Specifies the minimum UDP source port to communicate to the remote VXLAN tunnel endpoint.
     * @since 1.2
     * @default 0
     */
    'source-port-min'?: number;
    /**
     * Specifies the TOS value to use in outgoing packets.
     * @since 1.2
     * @default 0
     */
    tos?: number;
    /**
     * Specifies the time-to-live value to use in outgoing packets.
     * @since 1.2
     * @default 0
     */
    ttl?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingVxlanConstructOnly = NMSettingConstructOnly;

/** Wi-Fi P2P Settings */
export interface NMSettingWifiP2PProps extends NMSettingProps {
    /**
     * The P2P device that should be connected to.
     * @since 1.16
     * @default NULL
     */
    peer?: string;
    /**
     * The Wi-Fi Display (WFD) Information Elements (IEs) to set.
     * @since 1.16
     */
    'wfd-ies'?: GLib.Bytes;
    /**
     * Flags indicating which mode of WPS is to be used.
     * @since 1.16
     * @default 0
     */
    'wps-method'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWifiP2PConstructOnly = NMSettingConstructOnly;

/** WiMax Settings */
export interface NMSettingWimaxProps extends NMSettingProps {
    /**
     * If specified, this connection will only apply to the WiMAX device whose MAC address matches.
     * @default NULL
     * @deprecated since 1.2: WiMAX is no longer supported.
     */
    'mac-address'?: string;
    /**
     * Network Service Provider (NSP) name of the WiMAX network this connection should use.
     * @default NULL
     * @deprecated since 1.2: WiMAX is no longer supported.
     */
    'network-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWimaxConstructOnly = NMSettingConstructOnly;

/** WireGuard Settings */
export interface NMSettingWireGuardProps extends NMSettingProps {
    /**
     * The use of fwmark is optional and is by default off.
     * @since 1.16
     * @default 0
     */
    fwmark?: number;
    /**
     * Whether to enable special handling of the IPv4 default route.
     * @since 1.20
     * @default NM_TERNARY_DEFAULT
     */
    'ip4-auto-default-route'?: NMTernaryNick | NM.Ternary;
    /**
     * Like ip4-auto-default-route, but for the IPv6 default route.
     * @since 1.20
     * @default NM_TERNARY_DEFAULT
     */
    'ip6-auto-default-route'?: NMTernaryNick | NM.Ternary;
    /**
     * The listen-port.
     * @since 1.16
     * @default 0
     */
    'listen-port'?: number;
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple fragments.
     * @since 1.16
     * @default 0
     */
    mtu?: number;
    /**
     * Whether to automatically add routes for the AllowedIPs ranges of the peers.
     * @since 1.16
     * @default TRUE
     */
    'peer-routes'?: boolean;
    /**
     * The 256 bit private-key in base64 encoding.
     * @since 1.16
     * @default NULL
     */
    'private-key'?: string;
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:private-key property.
     * @since 1.16
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'private-key-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWireGuardConstructOnly = NMSettingConstructOnly;

/** Wired Ethernet Settings */
export interface NMSettingWiredProps extends NMSettingProps {
    /**
     * When %TRUE, setup the interface to accept packets for all MAC addresses.
     * @since 1.32
     * @default NM_TERNARY_DEFAULT
     */
    'accept-all-mac-addresses'?: NMTernaryNick | NM.Ternary;
    /**
     * When %TRUE, enforce auto-negotiation of speed and duplex mode.
     * @default FALSE
     */
    'auto-negotiate'?: boolean;
    /**
     * If specified, request that the device use this MAC address instead.
     * @default NULL
     */
    'cloned-mac-address'?: string;
    /**
     * When a value is set, either "half" or "full", configures the device to use the specified duplex mode.
     * @default NULL
     */
    duplex?: string;
    /**
     * With #NMSettingWired:cloned-mac-address setting "random" or "stable", by default all bits of the MAC address are scrambled and a locally-administered, unicast MAC address is created.
     * @default NULL
     */
    'generate-mac-address-mask'?: string;
    /**
     * If specified, this connection will only apply to the Ethernet device whose permanent MAC address matches.
     * @default NULL
     */
    'mac-address'?: string;
    /** If specified, this connection will never apply to the Ethernet device whose permanent MAC address matches an address in the list. */
    'mac-address-blacklist'?: string[];
    /** If specified, this connection will never apply to the Ethernet device whose permanent MAC address matches an address in the list. */
    'mac-address-denylist'?: string[];
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple Ethernet frames.
     * @default 0
     */
    mtu?: number;
    /**
     * Specific port type to use if the device supports multiple attachment methods.
     * @default NULL
     */
    port?: string;
    /**
     * s390 network device type; one of "qeth", "lcs", or "ctc", representing the different types of virtual network devices available on s390 systems.
     * @default NULL
     */
    's390-nettype'?: string;
    /** Dictionary of key/value pairs of s390-specific device options. */
    's390-options'?: GLib.HashTable;
    /** Identifies specific subchannels that this network device uses for communication with z/VM or s390 host. */
    's390-subchannels'?: string[];
    /**
     * When a value greater than 0 is set, configures the device to use the specified speed.
     * @default 0
     */
    speed?: number;
    /**
     * The #NMSettingWiredWakeOnLan options to enable.
     * @since 1.2
     * @default 1
     */
    'wake-on-lan'?: number;
    /**
     * If specified, the password used with magic-packet-based Wake-on-LAN, represented as an Ethernet MAC address.
     * @since 1.2
     * @default NULL
     */
    'wake-on-lan-password'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWiredConstructOnly = NMSettingConstructOnly;

/** Wi-Fi Settings */
export interface NMSettingWirelessProps extends NMSettingProps {
    /**
     * Configures AP isolation, which prevents communication between wireless devices connected to this AP.
     * @since 1.28
     * @default NM_TERNARY_DEFAULT
     */
    'ap-isolation'?: NMTernaryNick | NM.Ternary;
    /**
     * 802.11 frequency band of the network.
     * @default NULL
     */
    band?: string;
    /**
     * If specified, directs the device to only associate with the given access point.
     * @default NULL
     */
    bssid?: string;
    /**
     * Wireless channel to use for the Wi-Fi connection.
     * @default 0
     */
    channel?: number;
    /**
     * Specifies width of the wireless channel in Access Point (AP) mode.
     * @since 1.50
     * @default 0
     */
    'channel-width'?: number;
    /**
     * If specified, request that the device use this MAC address instead.
     * @default NULL
     */
    'cloned-mac-address'?: string;
    /**
     * With #NMSettingWireless:cloned-mac-address setting "random" or "stable", by default all bits of the MAC address are scrambled and a locally-administered, unicast MAC address is created.
     * @default NULL
     */
    'generate-mac-address-mask'?: string;
    /**
     * If %TRUE, indicates that the network is a non-broadcasting network that hides its SSID.
     * @default FALSE
     */
    hidden?: boolean;
    /**
     * If specified, this connection will only apply to the Wi-Fi device whose permanent MAC address matches.
     * @default NULL
     */
    'mac-address'?: string;
    /** A list of permanent MAC addresses of Wi-Fi devices to which this connection should never apply. */
    'mac-address-blacklist'?: string[];
    /** A list of permanent MAC addresses of Wi-Fi devices to which this connection should never apply. */
    'mac-address-denylist'?: string[];
    /**
     * One of %NM_SETTING_MAC_RANDOMIZATION_DEFAULT (never randomize unless the user has set a global default to randomize and the supplicant supports randomization), %NM_SETTING_MAC_RANDOMIZATION_NEVER (ne…
     * @since 1.2
     * @default 0
     * @deprecated since 1.4: Use the #NMSettingWireless:cloned-mac-address property instead.
     */
    'mac-address-randomization'?: number;
    /**
     * Wi-Fi network mode; one of "infrastructure", "mesh", "adhoc" or "ap".
     * @default NULL
     */
    mode?: string;
    /**
     * If non-zero, only transmit packets of the specified size or smaller, breaking larger packets up into multiple Ethernet frames.
     * @default 0
     */
    mtu?: number;
    /**
     * One of %NM_SETTING_WIRELESS_POWERSAVE_DISABLE (disable Wi-Fi power saving), %NM_SETTING_WIRELESS_POWERSAVE_ENABLE (enable Wi-Fi power saving), %NM_SETTING_WIRELESS_POWERSAVE_IGNORE (don't touch curre…
     * @since 1.2
     * @default 0
     */
    powersave?: number;
    /**
     * This property is not implemented and has no effect.
     * @default 0
     * @deprecated since 1.44: This property is not implemented and has no effect.
     */
    rate?: number;
    /** A list of BSSIDs (each BSSID formatted as a MAC address like "00:11:22:33:44:55") that have been detected as part of the Wi-Fi network. */
    'seen-bssids'?: string[];
    /** SSID of the Wi-Fi network. */
    ssid?: GLib.Bytes;
    /**
     * This property is not implemented and has no effect.
     * @default 0
     * @deprecated since 1.44: This property is not implemented and has no effect.
     */
    'tx-power'?: number;
    /**
     * The #NMSettingWirelessWakeOnWLan options to enable.
     * @since 1.12
     * @default 1
     */
    'wake-on-wlan'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWirelessConstructOnly = NMSettingConstructOnly;

/** Wi-Fi Security Settings */
export interface NMSettingWirelessSecurityProps extends NMSettingProps {
    /**
     * When WEP is used (ie, key-mgmt = "none" or "ieee8021x") indicate the 802.11 authentication algorithm required by the AP here.
     * @default NULL
     */
    'auth-alg'?: string;
    /**
     * Indicates whether Fast Initial Link Setup (802.11ai) must be enabled for the connection.
     * @since 1.12
     * @default 0
     */
    fils?: number;
    /** A list of group/broadcast encryption algorithms which prevents connections to Wi-Fi networks that do not utilize one of the algorithms in the list. */
    group?: string[];
    /**
     * Key management used for the connection.
     * @default NULL
     */
    'key-mgmt'?: string;
    /**
     * The login password for legacy LEAP connections (ie, key-mgmt = "ieee8021x" and auth-alg = "leap").
     * @default NULL
     */
    'leap-password'?: string;
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:leap-password property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'leap-password-flags'?: number;
    /**
     * The login username for legacy LEAP connections (ie, key-mgmt = "ieee8021x" and auth-alg = "leap").
     * @default NULL
     */
    'leap-username'?: string;
    /** A list of pairwise encryption algorithms which prevents connections to Wi-Fi networks that do not utilize one of the algorithms in the list. */
    pairwise?: string[];
    /**
     * Indicates whether Protected Management Frames (802.11w) must be enabled for the connection.
     * @since 1.10
     * @default 0
     */
    pmf?: number;
    /** List of strings specifying the allowed WPA protocol versions to use. */
    proto?: string[];
    /**
     * Pre-Shared-Key for WPA networks.
     * @default NULL
     */
    psk?: string;
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:psk property.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'psk-flags'?: number;
    /**
     * Flags indicating how to handle the #NMSettingWirelessSecurity:wep-key0, #NMSettingWirelessSecurity:wep-key1, #NMSettingWirelessSecurity:wep-key2, and #NMSettingWirelessSecurity:wep-key3 properties.
     * @default NM_SETTING_SECRET_FLAG_NONE
     */
    'wep-key-flags'?: number;
    /**
     * Controls the interpretation of WEP keys.
     * @default NM_WEP_KEY_TYPE_UNKNOWN
     */
    'wep-key-type'?: NMWepKeyTypeNick | NM.WepKeyType;
    /**
     * Index 0 WEP key.
     * @default NULL
     */
    'wep-key0'?: string;
    /**
     * Index 1 WEP key.
     * @default NULL
     */
    'wep-key1'?: string;
    /**
     * Index 2 WEP key.
     * @default NULL
     */
    'wep-key2'?: string;
    /**
     * Index 3 WEP key.
     * @default NULL
     */
    'wep-key3'?: string;
    /**
     * When static WEP is used (ie, key-mgmt = "none") and a non-default WEP key index is used by the AP, put that WEP key index here.
     * @default 0
     */
    'wep-tx-keyidx'?: number;
    /**
     * Flags indicating which mode of WPS is to be used if any.
     * @since 1.10
     * @default 0
     */
    'wps-method'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWirelessSecurityConstructOnly = NMSettingConstructOnly;

/** IEEE 802.15.4 (WPAN) MAC Settings */
export interface NMSettingWpanProps extends NMSettingProps {
    /**
     * IEEE 802.15.4 channel.
     * @since 1.16
     * @default -1
     */
    channel?: number;
    /**
     * If specified, this connection will only apply to the IEEE 802.15.4 (WPAN) MAC layer device whose permanent MAC address matches.
     * @default NULL
     */
    'mac-address'?: string;
    /**
     * IEEE 802.15.4 channel page.
     * @since 1.16
     * @default -1
     */
    page?: number;
    /**
     * IEEE 802.15.4 Personal Area Network (PAN) identifier.
     * @default 65535
     */
    'pan-id'?: number;
    /**
     * Short IEEE 802.15.4 address to be used within a restricted environment.
     * @default 65535
     */
    'short-address'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSettingWpanConstructOnly = NMSettingConstructOnly;

export interface NMSimpleConnectionProps extends GObjectProps, NMConnectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMSimpleConnectionConstructOnly = GObjectConstructOnly | NMConnectionConstructOnly;

export interface NMVpnConnectionProps extends NMActiveConnectionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMVpnConnectionConstructOnly = NMActiveConnectionConstructOnly;

export interface NMVpnPluginInfoProps extends GObjectProps, GInitableProps {
    /**
     * The filename from which the info was loaded.
     * @since 1.2
     * @default NULL
     */
    filename?: string;
    /**
     * Initialize the instance with a different keyfile instance.
     * @since 1.2
     */
    keyfile?: GLib.KeyFile;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMVpnPluginInfoConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'filename' | 'keyfile';

export interface NMWifiP2PPeerProps extends NMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMWifiP2PPeerConstructOnly = NMObjectConstructOnly;

export interface NMWimaxNspProps extends NMObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type NMWimaxNspConstructOnly = NMObjectConstructOnly;

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
