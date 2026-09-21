/**
 * The GIR-derived widget VOCABULARY for Mbim-1.0.
 *
 * GENERATED — do not edit. Provenance: Mbim-1.0 — library 1.32.0
 *
 * 2 instantiable GTypes (of which 0 concrete widgets), 2 declarations, 117 enum nick unions, 0 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps } from '@girs/gio-2.0/vocabulary';
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

export type MbimAccessMediaTypeNick = 'unknown' | '3gpp' | '3gpp-preferred';
export type MbimActivationCommandNick = 'deactivate' | 'activate';
export type MbimActivationStateNick = 'unknown' | 'activated' | 'activating' | 'deactivated' | 'deactivating';
export type MbimAtdsProviderPlmnModeNick = 'gsm' | 'utran' | 'lte';
export type MbimAtdsRatModeNick = 'automatic' | '2g-only' | '3g-only' | '4g-only';
export type MbimAuthProtocolNick = 'none' | 'pap' | 'chap' | 'mschapv2';
export type MbimCarrierLockCauseNick = 'not-applicable' | 'sim-lock-policy-mismatch' | 'sim-lock-policy-matched';
export type MbimCarrierLockModemStateNick = 'deregistered' | 'deregistration-in-progress' | 'registration-in-progress' | 'registered';
export type MbimCarrierLockStatusNick = 'not-applied' | 'applied';
export type MbimCidAtdsNick = 'unknown' | 'signal' | 'location' | 'operators' | 'rat' | 'register-state';
export type MbimCidAuthNick = 'unknown' | 'aka' | 'akap' | 'sim';
export type MbimCidBasicConnectNick = 'unknown' | 'device-caps' | 'subscriber-ready-status' | 'radio-state' | 'pin' | 'pin-list' | 'home-provider' | 'preferred-providers' | 'visible-providers' | 'register-state' | 'packet-service' | 'signal-state' | 'connect' | 'provisioned-contexts' | 'service-activation' | 'ip-configuration' | 'device-services' | 'device-service-subscribe-list' | 'packet-statistics' | 'network-idle-hint' | 'emergency-mode' | 'ip-packet-filters' | 'multicarrier-providers';
export type MbimCidCompalNick = 'unknown' | 'at-command';
export type MbimCidDssNick = 'unknown' | 'connect';
export type MbimCidFibocomNick = 'unknown' | 'at-command';
export type MbimCidGoogleNick = 'unknown' | 'carrier-lock';
export type MbimCidIntelFirmwareUpdateNick = 'unknown' | 'modem-reboot';
export type MbimCidIntelMutualAuthenticationNick = 'unknown' | 'fcc-lock';
export type MbimCidIntelThermalRfNick = 'unknown' | 'rfim';
export type MbimCidIntelToolsNick = 'unknown' | 'trace-config';
export type MbimCidMsBasicConnectExtensionsNick = 'unknown' | 'provisioned-contexts' | 'network-denylist' | 'lte-attach-configuration' | 'lte-attach-info' | 'sys-caps' | 'device-caps' | 'device-slot-mappings' | 'slot-info-status' | 'pco' | 'device-reset' | 'base-stations-info' | 'location-info-status' | 'version' | 'modem-configuration' | 'registration-parameters' | 'wake-reason';
export type MbimCidMsFirmwareIdNick = 'unknown' | 'get';
export type MbimCidMsHostShutdownNick = 'unknown' | 'notify';
export type MbimCidMsSarNick = 'unknown' | 'config' | 'transmission-status';
export type MbimCidMsUiccLowLevelAccessNick = 'unknown' | 'atr' | 'open-channel' | 'close-channel' | 'apdu' | 'terminal-capability' | 'reset' | 'application-list' | 'file-status' | 'read-binary' | 'read-record';
export type MbimCidMsVoiceExtensionsNick = 'unknown' | 'nitz';
export type MbimCidPhonebookNick = 'unknown' | 'configuration' | 'read' | 'delete' | 'write';
export type MbimCidProxyControlNick = 'unknown' | 'configuration' | 'version';
export type MbimCidQduNick = 'unknown' | 'update-session' | 'file-open' | 'file-write' | 'quectel-reboot' | 'quectel-read-version' | 'command';
export type MbimCidQmiNick = 'unknown' | 'msg';
export type MbimCidQuectelNick = 'unknown' | 'radio-state';
export type MbimCidSmsNick = 'unknown' | 'configuration' | 'read' | 'send' | 'delete' | 'message-store-status';
export type MbimCidStkNick = 'unknown' | 'pac' | 'terminal-response' | 'envelope';
export type MbimCidUssdNick = 'ussd-unknown' | 'ussd';
export type MbimCompressionNick = 'none' | 'enable';
export type MbimContextIpTypeNick = 'default' | 'ipv4' | 'ipv6' | 'ipv4v6' | 'ipv4-and-ipv6';
export type MbimContextMediaTypeNick = 'cellular-only' | 'wifi-only' | 'all';
export type MbimContextOperationNick = 'default' | 'delete' | 'restore-factory';
export type MbimContextRoamingControlNick = 'home-only' | 'partner-only' | 'non-partner-only' | 'home-and-partner' | 'home-and-non-partner' | 'partner-and-non-partner' | 'allow-all';
export type MbimContextSourceNick = 'admin' | 'user' | 'operator' | 'modem' | 'device';
export type MbimContextStateNick = 'disabled' | 'enabled';
export type MbimContextTypeNick = 'invalid' | 'none' | 'internet' | 'vpn' | 'voice' | 'video-share' | 'purchase' | 'ims' | 'mms' | 'local' | 'admin' | 'app' | 'xcap' | 'tethering' | 'emergency-calling';
export type MbimDefaultPduActivationHintNick = 'unlikely' | 'likely';
export type MbimDeviceTypeNick = 'unknown' | 'embedded' | 'removable' | 'remote';
export type MbimDrxCycleNick = 'not-specified' | 'not-supported' | '32' | '64' | '128' | '256';
export type MbimDssLinkStateNick = 'deactivate' | 'activate';
export type MbimEmergencyModeStateNick = 'off' | 'on';
export type MbimIntelBootModeNick = 'normal-mode' | 'download-mode' | 'power-off-device' | 'non-resetable-register' | 'without-reboot-power-off' | 'fast-download-mode';
export type MbimIntelServingCellInfoNick = 'pcell' | 'scell' | 'pscell' | 'sscell' | 'radio-off';
export type MbimLadnInfoNick = 'not-needed' | 'requested';
export type MbimLteAttachContextOperationNick = 'default' | 'restore-factory';
export type MbimLteAttachContextRoamingControlNick = 'home' | 'partner' | 'non-partner';
export type MbimLteAttachStateNick = 'detached' | 'attached';
export type MbimMessageCommandTypeNick = 'unknown' | 'query' | 'set';
export type MbimMessageTypeNick = 'invalid' | 'open' | 'close' | 'command' | 'host-error' | 'open-done' | 'close-done' | 'command-done' | 'function-error' | 'indicate-status';
export type MbimMicoModeNick = 'disabled' | 'enabled' | 'unsupported' | 'default';
export type MbimModemConfigurationStatusNick = 'unknown' | 'started' | 'completed';
export type MbimNetworkIdleHintStateNick = 'disabled' | 'enabled';
export type MbimNwErrorNick = 'none' | 'imsi-unknown-in-hlr' | 'illegal-ms' | 'imsi-unknown-in-vlr' | 'imei-not-accepted' | 'illegal-me' | 'gprs-not-allowed' | 'gprs-and-non-gprs-not-allowed' | 'ms-identity-not-derived-by-network' | 'implicitly-detached' | 'plmn-not-allowed' | 'location-area-not-allowed' | 'roaming-not-allowed-in-location-area' | 'gprs-not-allowed-in-plmn' | 'no-cells-in-location-area' | 'msc-temporarily-not-reachable' | 'network-failure' | 'mac-failure' | 'synch-failure' | 'congestion' | 'gsm-authentication-unacceptable' | 'not-authorized-for-csg' | 'insufficient-resources' | 'missing-or-unknown-apn' | 'unknown-pdp-address-or-type' | 'user-authentication-failed' | 'activation-rejected-by-ggsn-or-gw' | 'activation-rejected-unspecified' | 'service-option-not-supported' | 'requested-service-option-not-subscribed' | 'service-option-temporarily-out-of-order' | 'no-pdp-context-activated' | 'semantic-error-in-the-tft-operation' | 'syntactical-error-in-the-tft-operation' | 'unknown-pdp-context' | 'semantic-errors-in-packet-filter' | 'syntactical-errors-in-packet-filter' | 'pdp-context-without-tft-already-activated' | 'request-rejected-or-bearer-control-mode-violation' | 'last-pdn-disconnection-not-allowed' | 'pdp-type-ipv4-only-allowed' | 'pdp-type-ipv6-only-allowed' | 'no-network-slices-available' | 'maximum-number-of-pdp-contexts-reached' | 'requested-apn-not-supported-in-current-rat-and-plmn' | 'insufficient-resources-for-specific-slice-and-dnn' | 'insufficient-resources-for-specific-slice' | 'ngksi-already-in-use' | 'non-3gpp-access-to-5gcn-not-allowed' | 'serving-network-not-authorized' | 'temporarily-not-authorized-for-this-snpn' | 'permanently-not-authorized-for-this-snpn' | 'not-authorized-for-this-cag-or-authorized-for-cag-cells-only' | 'wireline-access-area-not-allowed' | 'payload-was-not-forwarded' | 'dnn-not-supported-or-not-subscribed-in-the-slice' | 'insufficient-user-plane-resources-for-the-pdu-session' | 'semantically-incorrect-message' | 'invalid-mandatory-information' | 'message-type-non-existent-or-not-implemented' | 'message-type-not-compatible-with-protocol-state' | 'information-element-non-existent-or-not-implemented' | 'conditional-ie-error' | 'message-not-compatible-with-protocol-state' | 'protocol-error-unspecified' | 'apn-restriction-value-incompatible-with-active-pdp-context' | 'multiple-accesses-to-a-pdn-connection-not-allowed';
export type MbimPacketServiceActionNick = 'attach' | 'detach';
export type MbimPacketServiceStateNick = 'unknown' | 'attaching' | 'attached' | 'detaching' | 'detached';
export type MbimPcoTypeNick = 'complete' | 'partial';
export type MbimPhonebookFlagNick = 'all' | 'index';
export type MbimPhonebookStateNick = 'not-initialized' | 'initialized';
export type MbimPhonebookWriteFlagNick = 'unused' | 'index';
export type MbimPinFormatNick = 'unknown' | 'numeric' | 'alphanumeric';
export type MbimPinModeNick = 'not-supported' | 'enabled' | 'disabled';
export type MbimPinOperationNick = 'enter' | 'enable' | 'disable' | 'change';
export type MbimPinStateNick = 'unlocked' | 'locked';
export type MbimPinTypeNick = 'unknown' | 'custom' | 'pin1' | 'pin2' | 'device-sim-pin' | 'device-first-sim-pin' | 'network-pin' | 'network-subset-pin' | 'service-provider-pin' | 'corporate-pin' | 'subsidy-pin' | 'puk1' | 'puk2' | 'device-first-sim-puk' | 'network-puk' | 'network-subset-puk' | 'service-provider-puk' | 'corporate-puk' | 'nev' | 'adm';
export type MbimQduFileTypeNick = 'package';
export type MbimQduQuectelRebootTypeNick = 'edl';
export type MbimQduQuectelVersionTypeNick = 'id';
export type MbimQduSessionActionNick = 'start' | 'stop';
export type MbimQduSessionResultNick = 'success' | 'failure';
export type MbimQduSessionStatusNick = 'inactive' | 'file-transfer' | 'apply-update';
export type MbimQduSessionTypeNick = 'none' | 'le';
export type MbimQuectelCommandResponseStatusNick = 'ok' | 'fail';
export type MbimQuectelCommandTypeNick = 'at' | 'system';
export type MbimQuectelRadioSwitchStateNick = 'off' | 'on' | 'fcc-locked';
export type MbimRadioSwitchStateNick = 'off' | 'on';
export type MbimRegisterActionNick = 'automatic' | 'manual';
export type MbimRegisterModeNick = 'unknown' | 'automatic' | 'manual';
export type MbimRegisterStateNick = 'unknown' | 'deregistered' | 'searching' | 'home' | 'roaming' | 'partner' | 'denied';
export type MbimSarBackoffStateNick = 'disabled' | 'enabled';
export type MbimSarControlModeNick = 'device' | 'os';
export type MbimSarWifiHardwareStateNick = 'integrated' | 'not-integrated';
export type MbimServiceNick = 'invalid' | 'basic-connect' | 'sms' | 'ussd' | 'phonebook' | 'stk' | 'auth' | 'dss' | 'ms-firmware-id' | 'ms-host-shutdown' | 'proxy-control' | 'qmi' | 'atds' | 'intel-firmware-update' | 'ms-basic-connect-extensions' | 'ms-sar' | 'qdu' | 'ms-uicc-low-level-access' | 'quectel' | 'intel-thermal-rf' | 'ms-voice-extensions' | 'intel-mutual-authentication' | 'intel-tools' | 'google' | 'fibocom' | 'compal';
export type MbimSmsCdmaEncodingNick = 'octet' | 'epm' | '7bit-ascii' | 'la5' | 'unicode' | 'shift-jis' | 'korean' | 'latin-hebrew' | 'latin' | 'gsm-7bit';
export type MbimSmsCdmaLangNick = 'unknown' | 'english' | 'french' | 'spanish' | 'japanese' | 'korean' | 'chinese' | 'hebrew';
export type MbimSmsFlagNick = 'all' | 'index' | 'new' | 'old' | 'sent' | 'draft';
export type MbimSmsFormatNick = 'pdu' | 'cdma';
export type MbimSmsStatusNick = 'new' | 'old' | 'draft' | 'sent';
export type MbimSmsStorageStateNick = 'not-initialized' | 'initialized';
export type MbimStkPacProfileNick = 'not-handled-by-function-handled-by-host' | 'not-handled-by-function-may-be-handled-by-host' | 'handled-by-function-only-transparent-to-host' | 'handled-by-function-notification-to-host-possible' | 'handled-by-function-notifications-to-host-enabled' | 'handled-by-function-can-be-overriden-by-host' | 'handled-by-host-function-not-able-to-handle' | 'handled-by-host-function-able-to-handle';
export type MbimStkPacTypeNick = 'proactive-command' | 'notification';
export type MbimSubscriberReadyStateNick = 'not-initialized' | 'initialized' | 'sim-not-inserted' | 'bad-sim' | 'failure' | 'not-activated' | 'device-locked' | 'no-esim-profile';
export type MbimTlvTypeNick = 'invalid' | 'ue-policites' | 'single-nssai' | 'allowed-nssai' | 'cfg-nssai' | 'dflt-cfg-nssai' | 'precfg-dflt-cfg-nssai' | 'rej-nssai' | 'ladn' | 'tai' | 'wchar-str' | 'uint16-tbl' | 'eap-packet' | 'pco' | 'route-selection-descriptors' | 'traffic-parameters' | 'wake-command' | 'wake-packet';
export type MbimTraceCommandNick = 'mode' | 'level' | 'location' | 'flash-interval';
export type MbimTransmissionNotificationStatusNick = 'disabled' | 'enabled';
export type MbimTransmissionStateNick = 'inactive' | 'active';
export type MbimUiccApplicationTypeNick = 'unknown' | 'mf' | 'mf-sim' | 'mf-ruim' | 'usim' | 'csim' | 'isim';
export type MbimUiccClassByteTypeNick = 'inter-industry' | 'extended';
export type MbimUiccFileAccessibilityNick = 'unknown' | 'not-shareable' | 'shareable';
export type MbimUiccFileStructureNick = 'unknown' | 'transparent' | 'cyclic' | 'linear' | 'ber-tlv';
export type MbimUiccFileTypeNick = 'unknown' | 'working-ef' | 'internal-ef' | 'df-or-adf';
export type MbimUiccPassThroughActionNick = 'disable' | 'enable';
export type MbimUiccPassThroughStatusNick = 'disabled' | 'enabled';
export type MbimUiccSecureMessagingNick = 'none' | 'no-hdr-auth';
export type MbimUiccSlotStateNick = 'state-unknown' | 'sate-off-empty' | 'state-off' | 'state-empty' | 'state-not-ready' | 'state-active' | 'state-error' | 'state-active-esim' | 'state-active-esim-no-profiles';
export type MbimUssdActionNick = 'initiate' | 'continue' | 'cancel';
export type MbimUssdResponseNick = 'no-action-required' | 'action-required' | 'terminated-by-network' | 'other-local-client' | 'operation-not-supported' | 'network-timeout';
export type MbimUssdSessionStateNick = 'new-session' | 'existing-session';
export type MbimVisibleProvidersActionNick = 'full-scan' | 'restricted-scan';
export type MbimVoiceCallStateNick = 'none' | 'in-progress' | 'hang-up';
export type MbimVoiceClassNick = 'unknown' | 'no-voice' | 'separated-voice-data' | 'simultaneous-voice-data';
export type MbimWakeTypeNick = 'cid-response' | 'cid-indication' | 'packet';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The #MbimDevice structure contains private data and should only be accessed using the provided API. */
export interface MbimDeviceProps extends GObjectProps, GAsyncInitableProps {
    'device-file'?: Gio.File;
    /** @default FALSE */
    'device-in-session'?: boolean;
    /** @default 1 */
    'device-transaction-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MbimDeviceConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | 'device-file';

/** The #MbimProxy structure contains private data and should only be accessed using the provided API. */
export interface MbimProxyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MbimProxyConstructOnly = GObjectConstructOnly;

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
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

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
