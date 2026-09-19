/**
 * The GIR-derived widget VOCABULARY for ModemManager-1.0.
 *
 * GENERATED — do not edit. Provenance: ModemManager-1.0 — library 1.24.2 — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
 *
 * 98 instantiable GTypes (of which 0 concrete widgets), 121 declarations (1 inlined from a namespace whose vocabulary does not emit them), 45 enum nick unions, 0 slot candidates.
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
import type ModemManager from './modemmanager-1.0.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GDBusInterfaceConstructOnly, GDBusInterfaceProps, GDBusObjectConstructOnly, GDBusObjectManagerClientConstructOnly, GDBusObjectManagerClientProps, GDBusObjectManagerConstructOnly, GDBusObjectManagerProps, GDBusObjectProps, GDBusObjectProxyConstructOnly, GDBusObjectProxyProps, GDBusObjectSkeletonConstructOnly, GDBusObjectSkeletonProps, GDBusProxyConstructOnly, GDBusProxyProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
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

export type MMBearerAccessTypePreferenceNick = 'none' | '3gpp-only' | '3gpp-preferred' | 'non-3gpp-only';
export type MMBearerIpMethodNick = 'unknown' | 'ppp' | 'static' | 'dhcp';
export type MMBearerMultiplexSupportNick = 'unknown' | 'none' | 'requested' | 'required';
export type MMBearerProfileSourceNick = 'unknown' | 'admin' | 'user' | 'operator' | 'modem' | 'device';
export type MMBearerTypeNick = 'unknown' | 'default' | 'default-attach' | 'dedicated';
export type MMCallDirectionNick = 'unknown' | 'incoming' | 'outgoing';
export type MMCallStateNick = 'unknown' | 'dialing' | 'ringing-out' | 'ringing-in' | 'active' | 'held' | 'waiting' | 'terminated';
export type MMCallStateReasonNick = 'unknown' | 'outgoing-started' | 'incoming-new' | 'accepted' | 'terminated' | 'refused-or-busy' | 'error' | 'audio-setup-failed' | 'transferred' | 'deflected';
export type MMCbmStateNick = 'unknown' | 'receiving' | 'received';
export type MMCellTypeNick = 'unknown' | 'cdma' | 'gsm' | 'umts' | 'tdscdma' | 'lte' | '5gnr';
export type MMFirmwareImageTypeNick = 'unknown' | 'generic' | 'gobi';
export type MMModem3gppDrxCycleNick = 'unknown' | 'unsupported' | '32' | '64' | '128' | '256';
export type MMModem3gppEpsUeModeOperationNick = 'unknown' | 'ps-1' | 'ps-2' | 'csps-1' | 'csps-2';
export type MMModem3gppMicoModeNick = 'unknown' | 'unsupported' | 'disabled' | 'enabled';
export type MMModem3gppNetworkAvailabilityNick = 'unknown' | 'available' | 'current' | 'forbidden';
export type MMModem3gppPacketServiceStateNick = 'unknown' | 'detached' | 'attached';
export type MMModem3gppRegistrationStateNick = 'idle' | 'home' | 'searching' | 'denied' | 'unknown' | 'roaming' | 'home-sms-only' | 'roaming-sms-only' | 'emergency-only' | 'home-csfb-not-preferred' | 'roaming-csfb-not-preferred' | 'attached-rlos';
export type MMModem3gppSubscriptionStateNick = 'unknown' | 'unprovisioned' | 'provisioned' | 'out-of-data';
export type MMModem3gppUssdSessionStateNick = 'unknown' | 'idle' | 'active' | 'user-response';
export type MMModemBandNick = 'unknown' | 'egsm' | 'dcs' | 'pcs' | 'g850' | 'utran-1' | 'utran-3' | 'utran-4' | 'utran-6' | 'utran-5' | 'utran-8' | 'utran-9' | 'utran-2' | 'utran-7' | 'g450' | 'g480' | 'g750' | 'g380' | 'g410' | 'g710' | 'g810' | 'eutran-1' | 'eutran-2' | 'eutran-3' | 'eutran-4' | 'eutran-5' | 'eutran-6' | 'eutran-7' | 'eutran-8' | 'eutran-9' | 'eutran-10' | 'eutran-11' | 'eutran-12' | 'eutran-13' | 'eutran-14' | 'eutran-17' | 'eutran-18' | 'eutran-19' | 'eutran-20' | 'eutran-21' | 'eutran-22' | 'eutran-23' | 'eutran-24' | 'eutran-25' | 'eutran-26' | 'eutran-27' | 'eutran-28' | 'eutran-29' | 'eutran-30' | 'eutran-31' | 'eutran-32' | 'eutran-33' | 'eutran-34' | 'eutran-35' | 'eutran-36' | 'eutran-37' | 'eutran-38' | 'eutran-39' | 'eutran-40' | 'eutran-41' | 'eutran-42' | 'eutran-43' | 'eutran-44' | 'eutran-45' | 'eutran-46' | 'eutran-47' | 'eutran-48' | 'eutran-49' | 'eutran-50' | 'eutran-51' | 'eutran-52' | 'eutran-53' | 'eutran-54' | 'eutran-55' | 'eutran-56' | 'eutran-57' | 'eutran-58' | 'eutran-59' | 'eutran-60' | 'eutran-61' | 'eutran-62' | 'eutran-63' | 'eutran-64' | 'eutran-65' | 'eutran-66' | 'eutran-67' | 'eutran-68' | 'eutran-69' | 'eutran-70' | 'eutran-71' | 'eutran-85' | 'cdma-bc0' | 'cdma-bc1' | 'cdma-bc2' | 'cdma-bc3' | 'cdma-bc4' | 'cdma-bc5' | 'cdma-bc6' | 'cdma-bc7' | 'cdma-bc8' | 'cdma-bc9' | 'cdma-bc10' | 'cdma-bc11' | 'cdma-bc12' | 'cdma-bc13' | 'cdma-bc14' | 'cdma-bc15' | 'cdma-bc16' | 'cdma-bc17' | 'cdma-bc18' | 'cdma-bc19' | 'utran-10' | 'utran-11' | 'utran-12' | 'utran-13' | 'utran-14' | 'utran-19' | 'utran-20' | 'utran-21' | 'utran-22' | 'utran-25' | 'utran-26' | 'utran-32' | 'any' | 'ngran-1' | 'ngran-2' | 'ngran-3' | 'ngran-5' | 'ngran-7' | 'ngran-8' | 'ngran-12' | 'ngran-13' | 'ngran-14' | 'ngran-18' | 'ngran-20' | 'ngran-25' | 'ngran-26' | 'ngran-28' | 'ngran-29' | 'ngran-30' | 'ngran-34' | 'ngran-38' | 'ngran-39' | 'ngran-40' | 'ngran-41' | 'ngran-48' | 'ngran-50' | 'ngran-51' | 'ngran-53' | 'ngran-65' | 'ngran-66' | 'ngran-67' | 'ngran-70' | 'ngran-71' | 'ngran-74' | 'ngran-75' | 'ngran-76' | 'ngran-77' | 'ngran-78' | 'ngran-79' | 'ngran-80' | 'ngran-81' | 'ngran-82' | 'ngran-83' | 'ngran-84' | 'ngran-86' | 'ngran-89' | 'ngran-90' | 'ngran-91' | 'ngran-92' | 'ngran-93' | 'ngran-94' | 'ngran-95' | 'ngran-257' | 'ngran-258' | 'ngran-260' | 'ngran-261';
export type MMModemCdmaActivationStateNick = 'unknown' | 'not-activated' | 'activating' | 'partially-activated' | 'activated';
export type MMModemCdmaRegistrationStateNick = 'unknown' | 'registered' | 'home' | 'roaming';
export type MMModemCdmaRmProtocolNick = 'unknown' | 'async' | 'packet-relay' | 'packet-network-ppp' | 'packet-network-slip' | 'stu-iii';
export type MMModemContactsStorageNick = 'unknown' | 'me' | 'sm' | 'mt';
export type MMModemLockNick = 'unknown' | 'none' | 'sim-pin' | 'sim-pin2' | 'sim-puk' | 'sim-puk2' | 'ph-sp-pin' | 'ph-sp-puk' | 'ph-net-pin' | 'ph-net-puk' | 'ph-sim-pin' | 'ph-corp-pin' | 'ph-corp-puk' | 'ph-fsim-pin' | 'ph-fsim-puk' | 'ph-netsub-pin' | 'ph-netsub-puk';
export type MMModemPortTypeNick = 'unknown' | 'net' | 'at' | 'qcdm' | 'gps' | 'qmi' | 'mbim' | 'audio' | 'ignored' | 'xmmrpc';
export type MMModemPowerStateNick = 'unknown' | 'off' | 'low' | 'on';
export type MMModemStateNick = 'failed' | 'unknown' | 'initializing' | 'locked' | 'disabled' | 'disabling' | 'enabling' | 'enabled' | 'searching' | 'registered' | 'disconnecting' | 'connecting' | 'connected';
export type MMModemStateChangeReasonNick = 'unknown' | 'user-requested' | 'suspend' | 'failure';
export type MMModemStateFailedReasonNick = 'none' | 'unknown' | 'sim-missing' | 'sim-error' | 'unknown-capabilities' | 'esim-without-profiles';
export type MMNetworkErrorNick = 'none' | 'imsi-unknown-in-hlr' | 'illegal-ms' | 'imsi-unknown-in-vlr' | 'imei-not-accepted' | 'illegal-me' | 'gprs-not-allowed' | 'gprs-and-non-gprs-not-allowed' | 'ms-identity-not-derived-by-network' | 'implicitly-detached' | 'plmn-not-allowed' | 'location-area-not-allowed' | 'roaming-not-allowed-in-location-area' | 'gprs-not-allowed-in-plmn' | 'no-cells-in-location-area' | 'msc-temporarily-not-reachable' | 'network-failure' | 'cs-domain-not-available' | 'esm-failure' | 'mac-failure' | 'synch-failure' | 'congestion' | 'gsm-authentication-unacceptable' | 'not-authorized-for-csg' | 'insufficient-resources' | 'missing-or-unknown-apn' | 'unknown-pdp-address-or-type' | 'user-authentication-failed' | 'activation-rejected-by-ggsn-or-gw' | 'redirection-to-5gcn-required' | 'service-option-not-supported' | 'requested-service-option-not-subscribed' | 'service-option-temporarily-out-of-order' | 'requested-service-option-not-authorized' | 'call-cannot-be-identified' | 'cs-service-temporarily-not-available' | 'no-pdp-context-activated' | 'semantic-error-in-the-tft-operation' | 'syntactical-error-in-the-tft-operation' | 'unknown-pdp-context' | 'semantic-errors-in-packet-filter' | 'syntactical-errors-in-packet-filter' | 'pdp-context-without-tft-already-activated' | 'request-rejected-or-bearer-control-mode-violation' | 'last-pdn-disconnection-not-allowed' | 'pdp-type-ipv4-only-allowed' | 'pdp-type-ipv6-only-allowed' | 'no-network-slices-available' | 'maximum-number-of-pdp-contexts-reached' | 'requested-apn-not-supported-in-current-rat-and-plmn' | 'insufficient-resources-for-specific-slice-and-dnn' | 'insufficient-resources-for-specific-slice' | 'ngksi-already-in-use' | 'non-3gpp-access-to-5gcn-not-allowed' | 'serving-network-not-authorized' | 'temporarily-not-authorized-for-this-snpn' | 'permanently-not-authorized-for-this-snpn' | 'not-authorized-for-this-cag-or-authorized-for-cag-cells-only' | 'wireline-access-area-not-allowed' | 'payload-was-not-forwarded' | 'dnn-not-supported-or-not-subscribed-in-the-slice' | 'insufficient-user-plane-resources-for-the-pdu-session' | 'semantically-incorrect-message' | 'invalid-mandatory-information' | 'message-type-non-existent-or-not-implemented' | 'message-type-not-compatible-with-protocol-state' | 'information-element-non-existent-or-not-implemented' | 'conditional-ie-error' | 'message-not-compatible-with-protocol-state' | 'protocol-error-unspecified' | 'apn-restriction-value-incompatible-with-active-pdp-context' | 'multiple-accesses-to-a-pdn-connection-not-allowed' | 'unknown';
export type MMOmaSessionStateNick = 'failed' | 'unknown' | 'started' | 'retrying' | 'connecting' | 'connected' | 'authenticated' | 'mdn-downloaded' | 'msid-downloaded' | 'prl-downloaded' | 'mip-profile-downloaded' | 'completed';
export type MMOmaSessionStateFailedReasonNick = 'unknown' | 'network-unavailable' | 'server-unavailable' | 'authentication-failed' | 'max-retry-exceeded' | 'session-cancelled';
export type MMOmaSessionTypeNick = 'unknown' | 'client-initiated-device-configure' | 'client-initiated-prl-update' | 'client-initiated-hands-free-activation' | 'network-initiated-device-configure' | 'network-initiated-prl-update' | 'device-initiated-prl-update' | 'device-initiated-hands-free-activation';
export type MMServingCellTypeNick = 'unknown' | 'pcell' | 'scell' | 'pscell' | 'sscell' | 'invalid';
export type MMSimEsimStatusNick = 'unknown' | 'no-profiles' | 'with-profiles';
export type MMSimRemovabilityNick = 'unknown' | 'removable' | 'not-removable';
export type MMSimTypeNick = 'unknown' | 'physical' | 'esim';
export type MMSmsCdmaServiceCategoryNick = 'unknown' | 'emergency-broadcast' | 'administrative' | 'maintenance' | 'general-news-local' | 'general-news-regional' | 'general-news-national' | 'general-news-international' | 'business-news-local' | 'business-news-regional' | 'business-news-national' | 'business-news-international' | 'sports-news-local' | 'sports-news-regional' | 'sports-news-national' | 'sports-news-international' | 'entertainment-news-local' | 'entertainment-news-regional' | 'entertainment-news-national' | 'entertainment-news-international' | 'local-weather' | 'traffic-report' | 'flight-schedules' | 'restaurants' | 'lodgings' | 'retail-directory' | 'advertisements' | 'stock-quotes' | 'employment' | 'hospitals' | 'technology-news' | 'multicategory' | 'cmas-presidential-alert' | 'cmas-extreme-threat' | 'cmas-severe-threat' | 'cmas-child-abduction-emergency' | 'cmas-test';
export type MMSmsCdmaTeleserviceIdNick = 'unknown' | 'cmt91' | 'wpt' | 'wmt' | 'vmn' | 'wap' | 'wemt' | 'scpt' | 'catpt';
export type MMSmsDeliveryStateNick = 'completed-received' | 'completed-forwarded-unconfirmed' | 'completed-replaced-by-sc' | 'temporary-error-congestion' | 'temporary-error-sme-busy' | 'temporary-error-no-response-from-sme' | 'temporary-error-service-rejected' | 'temporary-error-qos-not-available' | 'temporary-error-in-sme' | 'error-remote-procedure' | 'error-incompatible-destination' | 'error-connection-rejected' | 'error-not-obtainable' | 'error-qos-not-available' | 'error-no-interworking-available' | 'error-validity-period-expired' | 'error-deleted-by-originating-sme' | 'error-deleted-by-sc-administration' | 'error-message-does-not-exist' | 'temporary-fatal-error-congestion' | 'temporary-fatal-error-sme-busy' | 'temporary-fatal-error-no-response-from-sme' | 'temporary-fatal-error-service-rejected' | 'temporary-fatal-error-qos-not-available' | 'temporary-fatal-error-in-sme' | 'unknown' | 'network-problem-address-vacant' | 'network-problem-address-translation-failure' | 'network-problem-network-resource-outage' | 'network-problem-network-failure' | 'network-problem-invalid-teleservice-id' | 'network-problem-other' | 'terminal-problem-no-page-response' | 'terminal-problem-destination-busy' | 'terminal-problem-no-acknowledgment' | 'terminal-problem-destination-resource-shortage' | 'terminal-problem-sms-delivery-postponed' | 'terminal-problem-destination-out-of-service' | 'terminal-problem-destination-no-longer-at-this-address' | 'terminal-problem-other' | 'radio-interface-problem-resource-shortage' | 'radio-interface-problem-incompatibility' | 'radio-interface-problem-other' | 'general-problem-encoding' | 'general-problem-sms-origination-denied' | 'general-problem-sms-termination-denied' | 'general-problem-supplementary-service-not-supported' | 'general-problem-sms-not-supported' | 'general-problem-missing-expected-parameter' | 'general-problem-missing-mandatory-parameter' | 'general-problem-unrecognized-parameter-value' | 'general-problem-unexpected-parameter-value' | 'general-problem-user-data-size-error' | 'general-problem-other' | 'temporary-network-problem-address-vacant' | 'temporary-network-problem-address-translation-failure' | 'temporary-network-problem-network-resource-outage' | 'temporary-network-problem-network-failure' | 'temporary-network-problem-invalid-teleservice-id' | 'temporary-network-problem-other' | 'temporary-terminal-problem-no-page-response' | 'temporary-terminal-problem-destination-busy' | 'temporary-terminal-problem-no-acknowledgment' | 'temporary-terminal-problem-destination-resource-shortage' | 'temporary-terminal-problem-sms-delivery-postponed' | 'temporary-terminal-problem-destination-out-of-service' | 'temporary-terminal-problem-destination-no-longer-at-this-address' | 'temporary-terminal-problem-other' | 'temporary-radio-interface-problem-resource-shortage' | 'temporary-radio-interface-problem-incompatibility' | 'temporary-radio-interface-problem-other' | 'temporary-general-problem-encoding' | 'temporary-general-problem-sms-origination-denied' | 'temporary-general-problem-sms-termination-denied' | 'temporary-general-problem-supplementary-service-not-supported' | 'temporary-general-problem-sms-not-supported' | 'temporary-general-problem-missing-expected-parameter' | 'temporary-general-problem-missing-mandatory-parameter' | 'temporary-general-problem-unrecognized-parameter-value' | 'temporary-general-problem-unexpected-parameter-value' | 'temporary-general-problem-user-data-size-error' | 'temporary-general-problem-other';
export type MMSmsPduTypeNick = 'unknown' | 'deliver' | 'submit' | 'status-report' | 'cdma-deliver' | 'cdma-submit' | 'cdma-cancellation' | 'cdma-delivery-acknowledgement' | 'cdma-user-acknowledgement' | 'cdma-read-acknowledgement';
export type MMSmsStateNick = 'unknown' | 'stored' | 'receiving' | 'received' | 'sending' | 'sent';
export type MMSmsStorageNick = 'unknown' | 'sm' | 'me' | 'mt' | 'sr' | 'bm' | 'ta';
export type MMSmsValidityTypeNick = 'unknown' | 'relative' | 'absolute' | 'enhanced';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Abstract base class for D-Bus interfaces on the service side. */
export interface GDBusInterfaceSkeletonProps extends GObjectProps, GDBusInterfaceProps {
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     * @since 2.30
     * @default G_DBUS_INTERFACE_SKELETON_FLAGS_NONE
     */
    'g-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceSkeletonConstructOnly = GObjectConstructOnly | GDBusInterfaceConstructOnly;

/** The #MM3gppProfile structure contains private data and should only be accessed using the provided API. */
export interface MM3gppProfileProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MM3gppProfileConstructOnly = GObjectConstructOnly;

/** The #MMBearer structure contains private data and should only be accessed using the provided API. */
export interface MMBearerProps extends MmGdbusBearerProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusBearerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMBearerConstructOnly = MmGdbusBearerProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusBearerConstructOnly;

/** The #MMBearerIpConfig structure contains private data and should only be accessed using the provided API. */
export interface MMBearerIpConfigProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMBearerIpConfigConstructOnly = GObjectConstructOnly;

/** The #MMBearerProperties structure contains private data and should only be accessed using the provided API. */
export interface MMBearerPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMBearerPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMBearerStats structure contains private data and should only be accessed using the provided API. */
export interface MMBearerStatsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMBearerStatsConstructOnly = GObjectConstructOnly;

/** The #MMCall structure contains private data and should only be accessed using the provided API. */
export interface MMCallProps extends MmGdbusCallProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusCallProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCallConstructOnly = MmGdbusCallProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusCallConstructOnly;

/** The #MMCallAudioFormat structure contains private data and should only be accessed using the provided API. */
export interface MMCallAudioFormatProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCallAudioFormatConstructOnly = GObjectConstructOnly;

/** The #MMCallProperties structure contains private data and should only be accessed using the provided API. */
export interface MMCallPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCallPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMCbm structure contains private data and should only be accessed using the provided API. */
export interface MMCbmProps extends MmGdbusCbmProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusCbmProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCbmConstructOnly = MmGdbusCbmProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusCbmConstructOnly;

/** The #MMCdmaManualActivationProperties structure contains private data and should only be accessed using the provided API. */
export interface MMCdmaManualActivationPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCdmaManualActivationPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMCellInfo structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoConstructOnly = GObjectConstructOnly;

/** The #MMCellInfoCdma structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoCdmaProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoCdmaConstructOnly = MMCellInfoConstructOnly;

/** The #MMCellInfoGsm structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoGsmProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoGsmConstructOnly = MMCellInfoConstructOnly;

/** The #MMCellInfoLte structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoLteProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoLteConstructOnly = MMCellInfoConstructOnly;

/** The #MMCellInfoNr5g structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoNr5gProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoNr5gConstructOnly = MMCellInfoConstructOnly;

/** The #MMCellInfoTdscdma structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoTdscdmaProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoTdscdmaConstructOnly = MMCellInfoConstructOnly;

/** The #MMCellInfoUmts structure contains private data and should only be accessed using the provided API. */
export interface MMCellInfoUmtsProps extends MMCellInfoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMCellInfoUmtsConstructOnly = MMCellInfoConstructOnly;

/** The #MMFirmwareProperties structure contains private data and should only be accessed using the provided API. */
export interface MMFirmwarePropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMFirmwarePropertiesConstructOnly = GObjectConstructOnly;

/** The #MMFirmwareUpdateSettings structure contains private data and should only be accessed using the provided API. */
export interface MMFirmwareUpdateSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMFirmwareUpdateSettingsConstructOnly = GObjectConstructOnly;

/** The #MMKernelEventProperties structure contains private data and should only be accessed using the provided API. */
export interface MMKernelEventPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMKernelEventPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMLocation3gpp structure contains private data and should only be accessed using the provided API. */
export interface MMLocation3gppProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMLocation3gppConstructOnly = GObjectConstructOnly;

/** The #MMLocationCdmaBs structure contains private data and should only be accessed using the provided API. */
export interface MMLocationCdmaBsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMLocationCdmaBsConstructOnly = GObjectConstructOnly;

/** The #MMLocationGpsNmea structure contains private data and should only be accessed using the provided API. */
export interface MMLocationGpsNmeaProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMLocationGpsNmeaConstructOnly = GObjectConstructOnly;

/** The #MMLocationGpsRaw structure contains private data and should only be accessed using the provided API. */
export interface MMLocationGpsRawProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMLocationGpsRawConstructOnly = GObjectConstructOnly;

/** The #MMManager structure contains private data and should only be accessed using the provided API. */
export interface MMManagerProps extends MmGdbusObjectManagerClientProps, GAsyncInitableProps, GDBusObjectManagerProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMManagerConstructOnly = MmGdbusObjectManagerClientConstructOnly | GAsyncInitableConstructOnly | GDBusObjectManagerConstructOnly | GInitableConstructOnly;

/** The #MMModem structure contains private data and should only be accessed using the provided API. */
export interface MMModemProps extends MmGdbusModemProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemConstructOnly = MmGdbusModemProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemConstructOnly;

/** The #MMModem3gpp structure contains private data and should only be accessed using the provided API. */
export interface MMModem3gppProps extends MmGdbusModem3gppProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModem3gppConstructOnly = MmGdbusModem3gppProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppConstructOnly;

/** The #MMModem3gppProfileManager structure contains private data and should only be accessed using the provided API. */
export interface MMModem3gppProfileManagerProps extends MmGdbusModem3gppProfileManagerProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppProfileManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModem3gppProfileManagerConstructOnly = MmGdbusModem3gppProfileManagerProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppProfileManagerConstructOnly;

/** The #MMModem3gppUssd structure contains private data and should only be accessed using the provided API. */
export interface MMModem3gppUssdProps extends MmGdbusModem3gppUssdProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppUssdProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModem3gppUssdConstructOnly = MmGdbusModem3gppUssdProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppUssdConstructOnly;

/** The #MMModemCdma structure contains private data and should only be accessed using the provided API. */
export interface MMModemCdmaProps extends MmGdbusModemCdmaProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemCdmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemCdmaConstructOnly = MmGdbusModemCdmaProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemCdmaConstructOnly;

/** The #MMModemCellBroadcast structure contains private data and should only be accessed using the provided API. */
export interface MMModemCellBroadcastProps extends MmGdbusModemCellBroadcastProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemCellBroadcastProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemCellBroadcastConstructOnly = MmGdbusModemCellBroadcastProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemCellBroadcastConstructOnly;

/** The #MMModemFirmware structure contains private data and should only be accessed using the provided API. */
export interface MMModemFirmwareProps extends MmGdbusModemFirmwareProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemFirmwareProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemFirmwareConstructOnly = MmGdbusModemFirmwareProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemFirmwareConstructOnly;

/** The #MMModemLocation structure contains private data and should only be accessed using the provided API. */
export interface MMModemLocationProps extends MmGdbusModemLocationProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemLocationConstructOnly = MmGdbusModemLocationProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemLocationConstructOnly;

/** The #MMModemMessaging structure contains private data and should only be accessed using the provided API. */
export interface MMModemMessagingProps extends MmGdbusModemMessagingProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemMessagingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemMessagingConstructOnly = MmGdbusModemMessagingProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemMessagingConstructOnly;

/** The #MMModemOma structure contains private data and should only be accessed using the provided API. */
export interface MMModemOmaProps extends MmGdbusModemOmaProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemOmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemOmaConstructOnly = MmGdbusModemOmaProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemOmaConstructOnly;

/** The #MMModemSar structure contains private data and should only be accessed using the provided API. */
export interface MMModemSarProps extends MmGdbusModemSarProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemSarConstructOnly = MmGdbusModemSarProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSarConstructOnly;

/** The #MMModemSignal structure contains private data and should only be accessed using the provided API. */
export interface MMModemSignalProps extends MmGdbusModemSignalProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSignalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemSignalConstructOnly = MmGdbusModemSignalProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSignalConstructOnly;

/** The #MMModemSimple structure contains private data and should only be accessed using the provided API. */
export interface MMModemSimpleProps extends MmGdbusModemSimpleProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSimpleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemSimpleConstructOnly = MmGdbusModemSimpleProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSimpleConstructOnly;

/** The #MMModemTime structure contains private data and should only be accessed using the provided API. */
export interface MMModemTimeProps extends MmGdbusModemTimeProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemTimeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemTimeConstructOnly = MmGdbusModemTimeProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemTimeConstructOnly;

/** The #MMModemVoice structure contains private data and should only be accessed using the provided API. */
export interface MMModemVoiceProps extends MmGdbusModemVoiceProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemVoiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMModemVoiceConstructOnly = MmGdbusModemVoiceProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemVoiceConstructOnly;

/** The #MMNetworkRejection structure contains private data and should only be accessed using the provided API. */
export interface MMNetworkRejectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMNetworkRejectionConstructOnly = GObjectConstructOnly;

/** The #MMNetworkTimezone structure contains private data and should only be accessed using the provided API. */
export interface MMNetworkTimezoneProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMNetworkTimezoneConstructOnly = GObjectConstructOnly;

/** The #MMNr5gRegistrationSettings structure contains private data and should only be accessed using the provided API. */
export interface MMNr5gRegistrationSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMNr5gRegistrationSettingsConstructOnly = GObjectConstructOnly;

/** The #MMObject structure contains private data and should only be accessed using the provided API. */
export interface MMObjectProps extends MmGdbusObjectProxyProps, GDBusObjectProps, MmGdbusObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMObjectConstructOnly = MmGdbusObjectProxyConstructOnly | GDBusObjectConstructOnly | MmGdbusObjectConstructOnly;

/** The #MMPco structure contains private data and should only be accessed using the provided API. */
export interface MMPcoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMPcoConstructOnly = GObjectConstructOnly;

/** The #MMSignal structure contains private data and should only be accessed using the provided API. */
export interface MMSignalProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSignalConstructOnly = GObjectConstructOnly;

/** The #MMSignalThresholdProperties structure contains private data and should only be accessed using the provided API. */
export interface MMSignalThresholdPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSignalThresholdPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMSim structure contains private data and should only be accessed using the provided API. */
export interface MMSimProps extends MmGdbusSimProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusSimProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSimConstructOnly = MmGdbusSimProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusSimConstructOnly;

/** The #MMSimpleConnectProperties structure contains private data and should only be accessed using the provided API. */
export interface MMSimpleConnectPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSimpleConnectPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMSimpleStatus structure contains private data and should only be accessed using the provided API. */
export interface MMSimpleStatusProps extends GObjectProps {
    /** @default MM_MODEM_ACCESS_TECHNOLOGY_UNKNOWN */
    'access-technologies'?: number;
    /** @default MM_MODEM_CDMA_REGISTRATION_STATE_UNKNOWN */
    'cdma-cdma1x-registration-state'?: MMModemCdmaRegistrationStateNick | ModemManager.ModemCdmaRegistrationState;
    /** @default MM_MODEM_CDMA_REGISTRATION_STATE_UNKNOWN */
    'cdma-evdo-registration-state'?: MMModemCdmaRegistrationStateNick | ModemManager.ModemCdmaRegistrationState;
    /** @default 99999 */
    'cdma-nid'?: number;
    /** @default 99999 */
    'cdma-sid'?: number;
    'current-bands'?: GLib.Variant;
    /** @default NULL */
    'm3gpp-operator-code'?: string;
    /** @default NULL */
    'm3gpp-operator-name'?: string;
    /** @default MM_MODEM_3GPP_REGISTRATION_STATE_UNKNOWN */
    'm3gpp-registration-state'?: MMModem3gppRegistrationStateNick | ModemManager.Modem3gppRegistrationState;
    /** @default MM_MODEM_3GPP_SUBSCRIPTION_STATE_UNKNOWN */
    'm3gpp-subscription-state'?: MMModem3gppSubscriptionStateNick | ModemManager.Modem3gppSubscriptionState;
    'signal-quality'?: GLib.Variant;
    /** @default MM_MODEM_STATE_UNKNOWN */
    state?: MMModemStateNick | ModemManager.ModemState;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSimpleStatusConstructOnly = GObjectConstructOnly;

/** The #MMSms structure contains private data and should only be accessed using the provided API. */
export interface MMSmsProps extends MmGdbusSmsProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusSmsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSmsConstructOnly = MmGdbusSmsProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusSmsConstructOnly;

/** The #MMSmsProperties structure contains private data and should only be accessed using the provided API. */
export interface MMSmsPropertiesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMSmsPropertiesConstructOnly = GObjectConstructOnly;

/** The #MMUnlockRetries structure contains private data and should only be accessed using the provided API. */
export interface MMUnlockRetriesProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MMUnlockRetriesConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Bearer.top_of_page">org.freedesktop.ModemManager1.Bearer</link>. */
export interface MmGdbusBearerProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.BearerType">"BearerType"</link>.
     * @default 0
     */
    'bearer-type'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Connected">"Connected"</link>.
     * @default FALSE
     */
    connected?: boolean;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.ConnectionError">"ConnectionError"</link>. */
    'connection-error'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Interface">"Interface"</link>.
     * @default NULL
     */
    interface?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.IpTimeout">"IpTimeout"</link>.
     * @default 0
     */
    'ip-timeout'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Ip4Config">"Ip4Config"</link>. */
    'ip4-config'?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Ip6Config">"Ip6Config"</link>. */
    'ip6-config'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Multiplexed">"Multiplexed"</link>.
     * @default FALSE
     */
    multiplexed?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.ProfileId">"ProfileId"</link>.
     * @default 0
     */
    'profile-id'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Properties">"Properties"</link>. */
    properties?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.ReloadStatsSupported">"ReloadStatsSupported"</link>.
     * @default FALSE
     */
    'reload-stats-supported'?: boolean;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Stats">"Stats"</link>. */
    stats?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Bearer.Suspended">"Suspended"</link>.
     * @default FALSE
     */
    suspended?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusBearerConstructOnly = GObjectConstructOnly;

/** The #MmGdbusBearerProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusBearerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusBearerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusBearerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusBearerConstructOnly;

/** The #MmGdbusBearerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusBearerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusBearerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusBearerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusBearerConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Call.top_of_page">org.freedesktop.ModemManager1.Call</link>. */
export interface MmGdbusCallProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.AudioFormat">"AudioFormat"</link>. */
    'audio-format'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.AudioPort">"AudioPort"</link>.
     * @default NULL
     */
    'audio-port'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.Direction">"Direction"</link>.
     * @default 0
     */
    direction?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.Multiparty">"Multiparty"</link>.
     * @default FALSE
     */
    multiparty?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.Number">"Number"</link>.
     * @default NULL
     */
    number?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.State">"State"</link>.
     * @default 0
     */
    state?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Call.StateReason">"StateReason"</link>.
     * @default 0
     */
    'state-reason'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCallConstructOnly = GObjectConstructOnly;

/** The #MmGdbusCallProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusCallProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusCallProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCallProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusCallConstructOnly;

/** The #MmGdbusCallSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusCallSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusCallProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCallSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusCallConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Cbm.top_of_page">org.freedesktop.ModemManager1.Cbm</link>. */
export interface MmGdbusCbmProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Cbm.Channel">"Channel"</link>.
     * @default 0
     */
    channel?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Cbm.MessageCode">"MessageCode"</link>.
     * @default 0
     */
    'message-code'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Cbm.State">"State"</link>.
     * @default 0
     */
    state?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Cbm.Text">"Text"</link>.
     * @default NULL
     */
    text?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Cbm.Update">"Update"</link>.
     * @default 0
     */
    update?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCbmConstructOnly = GObjectConstructOnly;

/** The #MmGdbusCbmProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusCbmProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusCbmProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCbmProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusCbmConstructOnly;

/** The #MmGdbusCbmSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusCbmSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusCbmProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusCbmSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusCbmConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem.top_of_page">org.freedesktop.ModemManager1.Modem</link>. */
export interface MmGdbusModemProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.AccessTechnologies">"AccessTechnologies"</link>.
     * @default 0
     */
    'access-technologies'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Bearers">"Bearers"</link>. */
    bearers?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.CarrierConfiguration">"CarrierConfiguration"</link>.
     * @default NULL
     */
    'carrier-configuration'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.CarrierConfigurationRevision">"CarrierConfigurationRevision"</link>.
     * @default NULL
     */
    'carrier-configuration-revision'?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.CurrentBands">"CurrentBands"</link>. */
    'current-bands'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.CurrentCapabilities">"CurrentCapabilities"</link>.
     * @default 0
     */
    'current-capabilities'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.CurrentModes">"CurrentModes"</link>. */
    'current-modes'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Device">"Device"</link>.
     * @default NULL
     */
    device?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.DeviceIdentifier">"DeviceIdentifier"</link>.
     * @default NULL
     */
    'device-identifier'?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Drivers">"Drivers"</link>. */
    drivers?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.EquipmentIdentifier">"EquipmentIdentifier"</link>.
     * @default NULL
     */
    'equipment-identifier'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.HardwareRevision">"HardwareRevision"</link>.
     * @default NULL
     */
    'hardware-revision'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Manufacturer">"Manufacturer"</link>.
     * @default NULL
     */
    manufacturer?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.MaxActiveBearers">"MaxActiveBearers"</link>.
     * @default 0
     */
    'max-active-bearers'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.MaxActiveMultiplexedBearers">"MaxActiveMultiplexedBearers"</link>.
     * @default 0
     */
    'max-active-multiplexed-bearers'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.MaxBearers">"MaxBearers"</link>.
     * @default 0
     */
    'max-bearers'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Model">"Model"</link>.
     * @default NULL
     */
    model?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.OwnNumbers">"OwnNumbers"</link>. */
    'own-numbers'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Physdev">"Physdev"</link>.
     * @default NULL
     */
    physdev?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Plugin">"Plugin"</link>.
     * @default NULL
     */
    plugin?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Ports">"Ports"</link>. */
    ports?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.PowerState">"PowerState"</link>.
     * @default 0
     */
    'power-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.PrimaryPort">"PrimaryPort"</link>.
     * @default NULL
     */
    'primary-port'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.PrimarySimSlot">"PrimarySimSlot"</link>.
     * @default 0
     */
    'primary-sim-slot'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Revision">"Revision"</link>.
     * @default NULL
     */
    revision?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SignalQuality">"SignalQuality"</link>. */
    'signal-quality'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.Sim">"Sim"</link>.
     * @default NULL
     */
    sim?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SimSlots">"SimSlots"</link>. */
    'sim-slots'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.State">"State"</link>.
     * @default 0
     */
    state?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.StateFailedReason">"StateFailedReason"</link>.
     * @default 0
     */
    'state-failed-reason'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SupportedBands">"SupportedBands"</link>. */
    'supported-bands'?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SupportedCapabilities">"SupportedCapabilities"</link>. */
    'supported-capabilities'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SupportedIpFamilies">"SupportedIpFamilies"</link>.
     * @default 0
     */
    'supported-ip-families'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.SupportedModes">"SupportedModes"</link>. */
    'supported-modes'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.UnlockRequired">"UnlockRequired"</link>.
     * @default 0
     */
    'unlock-required'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem.UnlockRetries">"UnlockRetries"</link>. */
    'unlock-retries'?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp.top_of_page">org.freedesktop.ModemManager1.Modem.Modem3gpp</link>. */
export interface MmGdbusModem3gppProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.EnabledFacilityLocks">"EnabledFacilityLocks"</link>.
     * @default 0
     */
    'enabled-facility-locks'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.EpsUeModeOperation">"EpsUeModeOperation"</link>.
     * @default 0
     */
    'eps-ue-mode-operation'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.Imei">"Imei"</link>.
     * @default NULL
     */
    imei?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.InitialEpsBearer">"InitialEpsBearer"</link>.
     * @default NULL
     */
    'initial-eps-bearer'?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.InitialEpsBearerSettings">"InitialEpsBearerSettings"</link>. */
    'initial-eps-bearer-settings'?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.NetworkRejection">"NetworkRejection"</link>. */
    'network-rejection'?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.Nr5gRegistrationSettings">"Nr5gRegistrationSettings"</link>. */
    'nr5g-registration-settings'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.OperatorCode">"OperatorCode"</link>.
     * @default NULL
     */
    'operator-code'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.OperatorName">"OperatorName"</link>.
     * @default NULL
     */
    'operator-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.PacketServiceState">"PacketServiceState"</link>.
     * @default 0
     */
    'packet-service-state'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.Pco">"Pco"</link>. */
    pco?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.RegistrationState">"RegistrationState"</link>.
     * @default 0
     */
    'registration-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp.SubscriptionState">"SubscriptionState"</link>.
     * @default 0
     */
    'subscription-state'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppConstructOnly = GObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp-ProfileManager.top_of_page">org.freedesktop.ModemManager1.Modem.Modem3gpp.… */
export interface MmGdbusModem3gppProfileManagerProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp-ProfileManager.IndexField">"IndexField"</link>.
     * @default NULL
     */
    'index-field'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppProfileManagerConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModem3gppProfileManagerProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppProfileManagerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppProfileManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppProfileManagerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppProfileManagerConstructOnly;

/** The #MmGdbusModem3gppProfileManagerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppProfileManagerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModem3gppProfileManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppProfileManagerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModem3gppProfileManagerConstructOnly;

/** The #MmGdbusModem3gppProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppConstructOnly;

/** The #MmGdbusModem3gppSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModem3gppProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModem3gppConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.top_of_page">org.freedesktop.ModemManager1.Modem.Modem3gpp.Ussd</link… */
export interface MmGdbusModem3gppUssdProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.NetworkNotification">"NetworkNotification"</link>.
     * @default NULL
     */
    'network-notification'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.NetworkRequest">"NetworkRequest"</link>.
     * @default NULL
     */
    'network-request'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.State">"State"</link>.
     * @default 0
     */
    state?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppUssdConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModem3gppUssdProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppUssdProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModem3gppUssdProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppUssdProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModem3gppUssdConstructOnly;

/** The #MmGdbusModem3gppUssdSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModem3gppUssdSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModem3gppUssdProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModem3gppUssdSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModem3gppUssdConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-ModemCdma.top_of_page">org.freedesktop.ModemManager1.Modem.ModemCdma</link>. */
export interface MmGdbusModemCdmaProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.ActivationState">"ActivationState"</link>.
     * @default 0
     */
    'activation-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.Cdma1xRegistrationState">"Cdma1xRegistrationState"</link>.
     * @default 0
     */
    'cdma1x-registration-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.Esn">"Esn"</link>.
     * @default NULL
     */
    esn?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.EvdoRegistrationState">"EvdoRegistrationState"</link>.
     * @default 0
     */
    'evdo-registration-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.Meid">"Meid"</link>.
     * @default NULL
     */
    meid?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.Nid">"Nid"</link>.
     * @default 0
     */
    nid?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-ModemCdma.Sid">"Sid"</link>.
     * @default 0
     */
    sid?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCdmaConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemCdmaProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemCdmaProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemCdmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCdmaProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemCdmaConstructOnly;

/** The #MmGdbusModemCdmaSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemCdmaSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemCdmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCdmaSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemCdmaConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-CellBroadcast.top_of_page">org.freedesktop.ModemManager1.Modem.CellBroadcast</link>. */
export interface MmGdbusModemCellBroadcastProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-CellBroadcast.CellBroadcasts">"CellBroadcasts"</link>. */
    'cell-broadcasts'?: string[] | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-CellBroadcast.Channels">"Channels"</link>. */
    channels?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCellBroadcastConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemCellBroadcastProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemCellBroadcastProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemCellBroadcastProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCellBroadcastProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemCellBroadcastConstructOnly;

/** The #MmGdbusModemCellBroadcastSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemCellBroadcastSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemCellBroadcastProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemCellBroadcastSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemCellBroadcastConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Firmware.top_of_page">org.freedesktop.ModemManager1.Modem.Firmware</link>. */
export interface MmGdbusModemFirmwareProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Firmware.UpdateSettings">"UpdateSettings"</link>. */
    'update-settings'?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemFirmwareConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemFirmwareProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemFirmwareProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemFirmwareProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemFirmwareProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemFirmwareConstructOnly;

/** The #MmGdbusModemFirmwareSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemFirmwareSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemFirmwareProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemFirmwareSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemFirmwareConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Location.top_of_page">org.freedesktop.ModemManager1.Modem.Location</link>. */
export interface MmGdbusModemLocationProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.AssistanceDataServers">"AssistanceDataServers"</link>. */
    'assistance-data-servers'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.Capabilities">"Capabilities"</link>.
     * @default 0
     */
    capabilities?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.Enabled">"Enabled"</link>.
     * @default 0
     */
    enabled?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.GpsRefreshRate">"GpsRefreshRate"</link>.
     * @default 0
     */
    'gps-refresh-rate'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.Location">"Location"</link>. */
    location?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.SignalsLocation">"SignalsLocation"</link>.
     * @default FALSE
     */
    'signals-location'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.SuplServer">"SuplServer"</link>.
     * @default NULL
     */
    'supl-server'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Location.SupportedAssistanceData">"SupportedAssistanceData"</link>.
     * @default 0
     */
    'supported-assistance-data'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemLocationConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemLocationProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemLocationProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemLocationProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemLocationConstructOnly;

/** The #MmGdbusModemLocationSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemLocationSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemLocationProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemLocationSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemLocationConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Messaging.top_of_page">org.freedesktop.ModemManager1.Modem.Messaging</link>. */
export interface MmGdbusModemMessagingProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Messaging.DefaultStorage">"DefaultStorage"</link>.
     * @default 0
     */
    'default-storage'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Messaging.Messages">"Messages"</link>. */
    messages?: string[] | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Messaging.SupportedStorages">"SupportedStorages"</link>. */
    'supported-storages'?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemMessagingConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemMessagingProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemMessagingProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemMessagingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemMessagingProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemMessagingConstructOnly;

/** The #MmGdbusModemMessagingSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemMessagingSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemMessagingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemMessagingSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemMessagingConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Oma.top_of_page">org.freedesktop.ModemManager1.Modem.Oma</link>. */
export interface MmGdbusModemOmaProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Oma.Features">"Features"</link>.
     * @default 0
     */
    features?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Oma.PendingNetworkInitiatedSessions">"PendingNetworkInitiatedSessions"</link>. */
    'pending-network-initiated-sessions'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Oma.SessionState">"SessionState"</link>.
     * @default 0
     */
    'session-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Oma.SessionType">"SessionType"</link>.
     * @default 0
     */
    'session-type'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemOmaConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemOmaProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemOmaProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemOmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemOmaProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemOmaConstructOnly;

/** The #MmGdbusModemOmaSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemOmaSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemOmaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemOmaSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemOmaConstructOnly;

/** The #MmGdbusModemProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Sar.top_of_page">org.freedesktop.ModemManager1.Modem.Sar</link>. */
export interface MmGdbusModemSarProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Sar.PowerLevel">"PowerLevel"</link>.
     * @default 0
     */
    'power-level'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Sar.State">"State"</link>.
     * @default FALSE
     */
    state?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSarConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemSarProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSarProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSarProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSarConstructOnly;

/** The #MmGdbusModemSarSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSarSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemSarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSarSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemSarConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Signal.top_of_page">org.freedesktop.ModemManager1.Modem.Signal</link>. */
export interface MmGdbusModemSignalProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Cdma">"Cdma"</link>. */
    cdma?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.ErrorRateThreshold">"ErrorRateThreshold"</link>.
     * @default FALSE
     */
    'error-rate-threshold'?: boolean;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Evdo">"Evdo"</link>. */
    evdo?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Gsm">"Gsm"</link>. */
    gsm?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Lte">"Lte"</link>. */
    lte?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Nr5g">"Nr5g"</link>. */
    nr5g?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Rate">"Rate"</link>.
     * @default 0
     */
    rate?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.RssiThreshold">"RssiThreshold"</link>.
     * @default 0
     */
    'rssi-threshold'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Signal.Umts">"Umts"</link>. */
    umts?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSignalConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemSignalProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSignalProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSignalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSignalProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSignalConstructOnly;

/** The #MmGdbusModemSignalSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSignalSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemSignalProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSignalSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemSignalConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Simple.top_of_page">org.freedesktop.ModemManager1.Modem.Simple</link>. */
export interface MmGdbusModemSimpleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSimpleConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemSimpleProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSimpleProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemSimpleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSimpleProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemSimpleConstructOnly;

/** The #MmGdbusModemSimpleSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSimpleSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemSimpleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSimpleSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemSimpleConstructOnly;

/** The #MmGdbusModemSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Time.top_of_page">org.freedesktop.ModemManager1.Modem.Time</link>. */
export interface MmGdbusModemTimeProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Time.NetworkTimezone">"NetworkTimezone"</link>. */
    'network-timezone'?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemTimeConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemTimeProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemTimeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemTimeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemTimeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemTimeConstructOnly;

/** The #MmGdbusModemTimeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemTimeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemTimeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemTimeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemTimeConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Voice.top_of_page">org.freedesktop.ModemManager1.Modem.Voice</link>. */
export interface MmGdbusModemVoiceProps extends GObjectProps {
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Voice.Calls">"Calls"</link>. */
    calls?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Modem-Voice.EmergencyOnly">"EmergencyOnly"</link>.
     * @default FALSE
     */
    'emergency-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemVoiceConstructOnly = GObjectConstructOnly;

/** The #MmGdbusModemVoiceProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemVoiceProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusModemVoiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemVoiceProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusModemVoiceConstructOnly;

/** The #MmGdbusModemVoiceSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusModemVoiceSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusModemVoiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusModemVoiceSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusModemVoiceConstructOnly;

/** The #MmGdbusObject type is a specialized container of interfaces. */
export interface MmGdbusObjectProps extends GDBusObjectProps {
    /** The #MmGdbusModem instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem.top_of_page">org.freedesktop.ModemManager1.Modem</link>, if any. */
    modem?: ModemManager.GdbusModem | null;
    /** The #MmGdbusModemCdma instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-ModemCdma.top_of_page">org.freedesktop.ModemManager1.Modem.Modem… */
    'modem-cdma'?: ModemManager.GdbusModemCdma | null;
    /** The #MmGdbusModemCellBroadcast instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-CellBroadcast.top_of_page">org.freedesktop.ModemManager… */
    'modem-cell-broadcast'?: ModemManager.GdbusModemCellBroadcast | null;
    /** The #MmGdbusModemFirmware instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Firmware.top_of_page">org.freedesktop.ModemManager1.Modem.Fi… */
    'modem-firmware'?: ModemManager.GdbusModemFirmware | null;
    /** The #MmGdbusModemLocation instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Location.top_of_page">org.freedesktop.ModemManager1.Modem.Lo… */
    'modem-location'?: ModemManager.GdbusModemLocation | null;
    /** The #MmGdbusModemMessaging instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Messaging.top_of_page">org.freedesktop.ModemManager1.Modem.… */
    'modem-messaging'?: ModemManager.GdbusModemMessaging | null;
    /** The #MmGdbusModemOma instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Oma.top_of_page">org.freedesktop.ModemManager1.Modem.Oma</link>, … */
    'modem-oma'?: ModemManager.GdbusModemOma | null;
    /** The #MmGdbusModemSar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Sar.top_of_page">org.freedesktop.ModemManager1.Modem.Sar</link>, … */
    'modem-sar'?: ModemManager.GdbusModemSar | null;
    /** The #MmGdbusModemSignal instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Signal.top_of_page">org.freedesktop.ModemManager1.Modem.Signal… */
    'modem-signal'?: ModemManager.GdbusModemSignal | null;
    /** The #MmGdbusModemSimple instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Simple.top_of_page">org.freedesktop.ModemManager1.Modem.Simple… */
    'modem-simple'?: ModemManager.GdbusModemSimple | null;
    /** The #MmGdbusModemTime instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Time.top_of_page">org.freedesktop.ModemManager1.Modem.Time</link… */
    'modem-time'?: ModemManager.GdbusModemTime | null;
    /** The #MmGdbusModemVoice instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Voice.top_of_page">org.freedesktop.ModemManager1.Modem.Voice</l… */
    'modem-voice'?: ModemManager.GdbusModemVoice | null;
    /** The #MmGdbusModem3gpp instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp.top_of_page">org.freedesktop.ModemManager1.Modem.Modem… */
    modem3gpp?: ModemManager.GdbusModem3gpp | null;
    /** The #MmGdbusModem3gppProfileManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp-ProfileManager.top_of_page">org.freedesk… */
    'modem3gpp-profile-manager'?: ModemManager.GdbusModem3gppProfileManager | null;
    /** The #MmGdbusModem3gppUssd instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Modem-Modem3gpp-Ussd.top_of_page">org.freedesktop.ModemManager1.Mo… */
    'modem3gpp-ussd'?: ModemManager.GdbusModem3gppUssd | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusObjectConstructOnly = GDBusObjectConstructOnly;

/** The #MmGdbusObjectManagerClient structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusObjectManagerClientProps extends GDBusObjectManagerClientProps, GAsyncInitableProps, GDBusObjectManagerProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusObjectManagerClientConstructOnly = GDBusObjectManagerClientConstructOnly | GAsyncInitableConstructOnly | GDBusObjectManagerConstructOnly | GInitableConstructOnly;

/** The #MmGdbusObjectProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusObjectProxyProps extends GDBusObjectProxyProps, GDBusObjectProps, MmGdbusObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusObjectProxyConstructOnly = GDBusObjectProxyConstructOnly | GDBusObjectConstructOnly | MmGdbusObjectConstructOnly;

/** The #MmGdbusObjectSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusObjectSkeletonProps extends GDBusObjectSkeletonProps, GDBusObjectProps, MmGdbusObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusObjectSkeletonConstructOnly = GDBusObjectSkeletonConstructOnly | GDBusObjectConstructOnly | MmGdbusObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1.top_of_page">org.freedesktop.ModemManager1</link>. */
export interface MmGdbusOrgFreedesktopModemManager1Props extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1.Version">"Version"</link>.
     * @default NULL
     */
    version?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusOrgFreedesktopModemManager1ConstructOnly = GObjectConstructOnly;

/** The #MmGdbusOrgFreedesktopModemManager1Proxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusOrgFreedesktopModemManager1ProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusOrgFreedesktopModemManager1Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusOrgFreedesktopModemManager1ProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusOrgFreedesktopModemManager1ConstructOnly;

/** The #MmGdbusOrgFreedesktopModemManager1Skeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusOrgFreedesktopModemManager1SkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusOrgFreedesktopModemManager1Props {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusOrgFreedesktopModemManager1SkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusOrgFreedesktopModemManager1ConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Sim.top_of_page">org.freedesktop.ModemManager1.Sim</link>. */
export interface MmGdbusSimProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Active">"Active"</link>.
     * @default FALSE
     */
    active?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Eid">"Eid"</link>.
     * @default NULL
     */
    eid?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.EmergencyNumbers">"EmergencyNumbers"</link>. */
    'emergency-numbers'?: string[] | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.EsimStatus">"EsimStatus"</link>.
     * @default 0
     */
    'esim-status'?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Gid1">"Gid1"</link>. */
    gid1?: GLib.Variant | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Gid2">"Gid2"</link>. */
    gid2?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Imsi">"Imsi"</link>.
     * @default NULL
     */
    imsi?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.OperatorIdentifier">"OperatorIdentifier"</link>.
     * @default NULL
     */
    'operator-identifier'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.OperatorName">"OperatorName"</link>.
     * @default NULL
     */
    'operator-name'?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.PreferredNetworks">"PreferredNetworks"</link>. */
    'preferred-networks'?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.Removability">"Removability"</link>.
     * @default 0
     */
    removability?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.SimIdentifier">"SimIdentifier"</link>.
     * @default NULL
     */
    'sim-identifier'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sim.SimType">"SimType"</link>.
     * @default 0
     */
    'sim-type'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSimConstructOnly = GObjectConstructOnly;

/** The #MmGdbusSimProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusSimProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusSimProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSimProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusSimConstructOnly;

/** The #MmGdbusSimSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusSimSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusSimProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSimSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusSimConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-ModemManager1-Sms.top_of_page">org.freedesktop.ModemManager1.Sms</link>. */
export interface MmGdbusSmsProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Class">"Class"</link>.
     * @default 0
     */
    class?: number;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Data">"Data"</link>. */
    data?: GLib.Variant | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.DeliveryReportRequest">"DeliveryReportRequest"</link>.
     * @default FALSE
     */
    'delivery-report-request'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.DeliveryState">"DeliveryState"</link>.
     * @default 0
     */
    'delivery-state'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.DischargeTimestamp">"DischargeTimestamp"</link>.
     * @default NULL
     */
    'discharge-timestamp'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.MessageReference">"MessageReference"</link>.
     * @default 0
     */
    'message-reference'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Number">"Number"</link>.
     * @default NULL
     */
    number?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.PduType">"PduType"</link>.
     * @default 0
     */
    'pdu-type'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.ServiceCategory">"ServiceCategory"</link>.
     * @default 0
     */
    'service-category'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.SMSC">"SMSC"</link>.
     * @default NULL
     */
    smsc?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.State">"State"</link>.
     * @default 0
     */
    state?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Storage">"Storage"</link>.
     * @default 0
     */
    storage?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.TeleserviceId">"TeleserviceId"</link>.
     * @default 0
     */
    'teleservice-id'?: number;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Text">"Text"</link>.
     * @default NULL
     */
    text?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Timestamp">"Timestamp"</link>.
     * @default NULL
     */
    timestamp?: string | null;
    /** Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-ModemManager1-Sms.Validity">"Validity"</link>. */
    validity?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSmsConstructOnly = GObjectConstructOnly;

/** The #MmGdbusSmsProxy structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusSmsProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, MmGdbusSmsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSmsProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | MmGdbusSmsConstructOnly;

/** The #MmGdbusSmsSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface MmGdbusSmsSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, MmGdbusSmsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MmGdbusSmsSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | MmGdbusSmsConstructOnly;

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
