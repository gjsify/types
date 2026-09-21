/**
 * The GIR-derived widget VOCABULARY for Qmi-1.0.
 *
 * GENERATED — do not edit. Provenance: Qmi-1.0
 *
 * 26 instantiable GTypes (of which 0 concrete widgets), 27 declarations, 223 enum nick unions, 0 slot candidates.
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
import type Qmi from './qmi-1.0.js';
import type Qrtr from '@girs/qrtr-1.0';
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

export type QmiDataEndpointTypeNick = 'unknown' | 'hsic' | 'hsusb' | 'pcie' | 'embedded' | 'bam-dmux' | 'undefined';
export type QmiDeviceExpectedDataFormatNick = 'unknown' | '802-3' | 'raw-ip' | 'qmap-pass-through';
export type QmiDmsActivationStateNick = 'not-activated' | 'activated' | 'connecting' | 'connected' | 'otasp-authenticated' | 'otasp-nam' | 'otasp-mdn' | 'otasp-imsi' | 'otasp-prl' | 'otasp-spc' | 'otasp-commited';
export type QmiDmsBootImageDownloadModeNick = 'normal' | 'boot-and-recovery';
export type QmiDmsDataServiceCapabilityNick = 'none' | 'cs' | 'ps' | 'simultaneous-cs-ps' | 'non-simultaneous-cs-ps';
export type QmiDmsFirmwareImageTypeNick = 'modem' | 'pri';
export type QmiDmsFoxconnDeviceModeNick = 'unknown' | 'fastboot-online' | 'fastboot-ota';
export type QmiDmsFoxconnFirmwareVersionTypeNick = 'firmware-mcfg' | 'firmware-mcfg-apps' | 'apps';
export type QmiDmsHpDeviceModeNick = 'fastboot';
export type QmiDmsMacTypeNick = 'wlan' | 'bt';
export type QmiDmsOperatingModeNick = 'online' | 'low-power' | 'factory-test' | 'offline' | 'reset' | 'shutting-down' | 'persistent-low-power' | 'mode-only-low-power' | 'unknown';
export type QmiDmsRadioInterfaceNick = 'cdma20001x' | 'evdo' | 'gsm' | 'umts' | 'lte' | 'tds' | '5gnr';
export type QmiDmsSimCapabilityNick = 'not-supported' | 'supported';
export type QmiDmsSwiUsbCompositionNick = 'unknown' | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22';
export type QmiDmsTimeReferenceTypeNick = 'user';
export type QmiDmsTimeSourceNick = 'device' | 'cdma-network' | 'hdr-network';
export type QmiDmsUimFacilityNick = 'pn' | 'pu' | 'pp' | 'pc' | 'pf';
export type QmiDmsUimFacilityStateNick = 'deactivated' | 'activated' | 'blocked';
export type QmiDmsUimPinIdNick = 'pin' | 'pin2';
export type QmiDmsUimPinStatusNick = 'not-initialized' | 'enabled-not-verified' | 'enabled-verified' | 'disabled' | 'blocked' | 'permanently-blocked' | 'unblocked' | 'changed';
export type QmiDmsUimStateNick = 'initialization-completed' | 'locked-or-failed' | 'not-present' | 'reserved' | 'unknown';
export type QmiDsdApnTypeNick = 'default' | 'ims' | 'mms' | 'dun' | 'supl' | 'hipri' | 'fota' | 'cbs' | 'ia' | 'emergency';
export type QmiDsdDataSystemNetworkTypeNick = '3gpp' | '3gpp2' | 'wlan';
export type QmiDsdRadioAccessTechnologyNick = 'unknown' | '3gpp-wcdma' | '3gpp-geran' | '3gpp-lte' | '3gpp-tdscdma' | '3gpp-wlan' | '3gpp-5g' | '3gpp2-1x' | '3gpp2-hrpd' | '3gpp2-ehrpd' | '3gpp2-wlan';
export type QmiEndianNick = 'little' | 'big';
export type QmiFoxFirmwareVersionTypeNick = 'firmware-mcfg' | 'firmware-mcfg-apps' | 'apps';
export type QmiGasFirmwareAutoSimModeNick = 'disable' | 'enable' | 'enable-one-shot' | 'pending-one-shot';
export type QmiGasFirmwareListingModeNick = 'active-firmware' | 'all-firmware' | 'specific-firmware';
export type QmiGasUsbCompositionEndpointTypeNick = 'hsusb' | 'hsic';
export type QmiImsaImsRegistrationStatusNick = 'not-registered' | 'registering' | 'registered' | 'limited-registered';
export type QmiImsaRegistrationTechnologyNick = 'wlan' | 'wwan' | 'interworking-wlan';
export type QmiImsaServiceStatusNick = 'unavailable' | 'limited' | 'available';
export type QmiImspEnablerStateNick = 'uninitialized' | 'initialized' | 'airplane' | 'registered';
export type QmiLocEngineStateNick = 'on' | 'off';
export type QmiLocFixRecurrenceTypeNick = 'periodic-fixes' | 'single-fix';
export type QmiLocHealthStatusNick = 'unhealthy' | 'healthy';
export type QmiLocIndicationStatusNick = 'success' | 'general-failure' | 'unsupported' | 'invalid-parameter' | 'engine-busy' | 'phone-offline' | 'timeout';
export type QmiLocIntermediateReportStateNick = 'unknown' | 'enable' | 'disable';
export type QmiLocLockTypeNick = 'none' | 'mi' | 'mt' | 'all';
export type QmiLocNavigationDataNick = 'ephemeris' | 'almanac';
export type QmiLocOperationModeNick = 'default' | 'msb' | 'msa' | 'standalone' | 'cellid' | 'wwan';
export type QmiLocPredictedOrbitsDataFormatNick = 'xtra';
export type QmiLocReliabilityNick = 'not-set' | 'very-low' | 'low' | 'medium' | 'high';
export type QmiLocSatelliteStatusNick = 'idle' | 'searching' | 'tracking';
export type QmiLocServerTypeNick = 'unknown' | 'cdma-pde' | 'cdma-mpc' | 'umts-slp' | 'custom-pde';
export type QmiLocSessionStatusNick = 'success' | 'in-progress' | 'general-failure' | 'timeout' | 'user-ended' | 'bad-parameter' | 'phone-offline' | 'engine-locked';
export type QmiLocSystemNick = 'gps' | 'galileo' | 'sbas' | 'compass' | 'glonass';
export type QmiLocTimeSourceNick = 'invalid' | 'network-time-transfer' | 'network-time-tagging' | 'external-input' | 'tow-decode' | 'tow-confirmed' | 'tow-and-week-confirmed' | 'navigation-solution' | 'solve-for-time' | 'glo-tow-decode' | 'time-transform' | 'wcdma-sleep-time-tag' | 'gsm-sleep-time-tag' | 'unknown' | 'system-timetick' | 'qzss-tow-decode' | 'bds-tow-decode';
export type QmiNasActiveBandNick = 'bc-0' | 'bc-1' | 'bc-2' | 'bc-3' | 'bc-4' | 'bc-5' | 'bc-6' | 'bc-7' | 'bc-8' | 'bc-9' | 'bc-10' | 'bc-11' | 'bc-12' | 'bc-13' | 'bc-14' | 'bc-15' | 'bc-16' | 'bc-17' | 'bc-18' | 'bc-19' | 'gsm-450' | 'gsm-480' | 'gsm-750' | 'gsm-850' | 'gsm-900-extended' | 'gsm-900-primary' | 'gsm-900-railways' | 'gsm-dcs-1800' | 'gsm-pcs-1900' | 'wcdma-2100' | 'wcdma-pcs-1900' | 'wcdma-dcs-1800' | 'wcdma-1700-us' | 'wcdma-850' | 'wcdma-800' | 'wcdma-2600' | 'wcdma-900' | 'wcdma-1700-japan' | 'wcdma-1500-japan' | 'wcdma-850-japan' | 'eutran-1' | 'eutran-2' | 'eutran-3' | 'eutran-4' | 'eutran-5' | 'eutran-6' | 'eutran-7' | 'eutran-8' | 'eutran-9' | 'eutran-10' | 'eutran-11' | 'eutran-12' | 'eutran-13' | 'eutran-14' | 'eutran-17' | 'eutran-18' | 'eutran-19' | 'eutran-20' | 'eutran-21' | 'eutran-23' | 'eutran-24' | 'eutran-25' | 'eutran-26' | 'eutran-27' | 'eutran-28' | 'eutran-29' | 'eutran-30' | 'eutran-31' | 'eutran-32' | 'eutran-33' | 'eutran-34' | 'eutran-35' | 'eutran-36' | 'eutran-37' | 'eutran-38' | 'eutran-39' | 'eutran-40' | 'eutran-41' | 'eutran-42' | 'eutran-43' | 'eutran-46' | 'eutran-47' | 'eutran-48' | 'eutran-66' | 'eutran-71' | 'eutran-125' | 'eutran-126' | 'eutran-127' | 'eutran-250' | 'tdscdma-a' | 'tdscdma-b' | 'tdscdma-c' | 'tdscdma-d' | 'tdscdma-e' | 'tdscdma-f' | 'nr5g-1' | 'nr5g-2' | 'nr5g-3' | 'nr5g-5' | 'nr5g-7' | 'nr5g-8' | 'nr5g-20' | 'nr5g-28' | 'nr5g-38' | 'nr5g-41' | 'nr5g-50' | 'nr5g-51' | 'nr5g-66' | 'nr5g-70' | 'nr5g-71' | 'nr5g-74' | 'nr5g-75' | 'nr5g-76' | 'nr5g-77' | 'nr5g-78' | 'nr5g-79' | 'nr5g-80' | 'nr5g-81' | 'nr5g-82' | 'nr5g-83' | 'nr5g-84' | 'nr5g-85' | 'nr5g-257' | 'nr5g-258' | 'nr5g-259' | 'nr5g-260' | 'nr5g-261' | 'nr5g-12' | 'nr5g-25' | 'nr5g-34' | 'nr5g-39' | 'nr5g-40' | 'nr5g-65' | 'nr5g-86' | 'nr5g-48' | 'nr5g-14' | 'nr5g-13' | 'nr5g-18' | 'nr5g-26' | 'nr5g-30' | 'nr5g-29' | 'nr5g-53' | 'nr5g-46' | 'nr5g-91' | 'nr5g-92' | 'nr5g-93' | 'nr5g-94';
export type QmiNasAttachStateNick = 'unknown' | 'attached' | 'detached';
export type QmiNasBooleanNick = 'false' | 'true' | 'unknown';
export type QmiNasCallBarringStatusNick = 'normal-only' | 'emergency-only' | 'no-calls' | 'all-calls' | 'unknown';
export type QmiNasCdmaPilotTypeNick = 'active' | 'neighbor';
export type QmiNasCdmaPrlPreferenceNick = 'a-side-only' | 'b-side-only' | 'any';
export type QmiNasCellBroadcastCapabilityNick = 'unknown' | 'off' | 'on';
export type QmiNasChangeDurationNick = 'power-cycle' | 'permanent';
export type QmiNasDLBandwidthNick = '1-4' | '3' | '5' | '10' | '15' | '20' | '5gnr-5' | '5gnr-10' | '5gnr-15' | '5gnr-20' | '5gnr-25' | '5gnr-30' | '5gnr-40' | '5gnr-50' | '5gnr-60' | '5gnr-80' | '5gnr-90' | '5gnr-100' | '5gnr-200' | '5gnr-400' | 'gsm-02' | 'tdscdma-16' | 'wcdma-5' | 'wcdma-10' | '5gnr-70' | 'unknown';
export type QmiNasDataCapabilityNick = 'none' | 'gprs' | 'edge' | 'hsdpa' | 'hsupa' | 'wcdma' | 'cdma' | 'evdo-rev-0' | 'evdo-rev-a' | 'gsm' | 'evdo-rev-b' | 'lte' | 'hsdpa-plus' | 'dc-hsdpa-plus';
export type QmiNasDayOfWeekNick = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
export type QmiNasDaylightSavingsAdjustmentNick = 'none' | 'one-hour' | 'two-hours';
export type QmiNasDrxNick = 'unknown' | 'cn6-t32' | 'cn7-t64' | 'cn8-t128' | 'cn9-t256';
export type QmiNasEvdoSinrLevelNick = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type QmiNasGsmWcdmaAcquisitionOrderPreferenceNick = 'automatic' | 'gsm' | 'wcdma';
export type QmiNasHdrPersonalityNick = 'unknown' | 'hrpd' | 'ehrpd';
export type QmiNasHdrProtocolRevisionNick = 'none' | 'rel-0' | 'rel-a' | 'rel-b';
export type QmiNasLteCellAccessStatusNick = 'normal-only' | 'emergency-only' | 'no-calls' | 'all-calls' | 'unknown';
export type QmiNasLteRegistrationDomainNick = 'not-applicable' | 'cs-only' | 'ps-only' | 'cs-ps' | 'limited-service';
export type QmiNasLteVoiceDomainNick = 'none' | 'ims' | '1x' | '3gpp';
export type QmiNasNetworkDescriptionDisplayNick = 'no' | 'yes' | 'unknown';
export type QmiNasNetworkDescriptionEncodingNick = 'unspecified' | 'ascii7' | 'unicode' | 'gsm';
export type QmiNasNetworkNameSourceNick = 'unknown' | 'operator-plmn-list-and-plmn-network-name' | 'common-pcn-handset-specification-and-operator-name-string' | 'nitz' | 'se13' | 'mcc-mnc' | 'service-provider-name';
export type QmiNasNetworkRegisterTypeNick = 'automatic' | 'manual';
export type QmiNasNetworkScanResultNick = 'success' | 'abort' | 'radio-link-failure';
export type QmiNasNetworkSelectionPreferenceNick = 'automatic' | 'manual';
export type QmiNasNetworkSelectionRegistrationRestrictionNick = 'unrestricted' | 'camped-only' | 'limited';
export type QmiNasNetworkServiceDomainNick = 'none' | 'cs' | 'ps' | 'cs-ps' | 'camped';
export type QmiNasNetworkTypeNick = 'unknown' | '3gpp2' | '3gpp';
export type QmiNasPlmnEncodingSchemeNick = 'gsm' | 'ucs2le';
export type QmiNasPlmnLanguageIdNick = 'unknown' | 'zh-trad' | 'zh-simp';
export type QmiNasPlmnNameCountryInitialsNick = 'initials-do-not-add' | 'iniitals-add' | 'iniitals-unspecified';
export type QmiNasPlmnNameSpareBitsNick = 'unknown' | 'bit-8' | 'bits-78' | 'bits-68' | 'bits-58' | 'bits-48' | 'bits-38' | 'bits-28';
export type QmiNasPreferenceDurationNick = 'permanent' | 'power-cycle' | 'one-call' | 'one-call-or-time' | 'internal-one-call-1' | 'internal-one-call-2' | 'internal-one-call-3';
export type QmiNasPsAttachActionNick = 'attach' | 'detach';
export type QmiNasRadioInterfaceNick = 'unknown' | 'none' | 'cdma-1x' | 'cdma-1xevdo' | 'amps' | 'gsm' | 'umts' | 'lte' | 'td-scdma' | '5gnr';
export type QmiNasRegistrationStateNick = 'not-registered' | 'registered' | 'not-registered-searching' | 'registration-denied' | 'unknown';
export type QmiNasRejectCauseNick = 'none' | 'imsi-unknown-in-hlr' | 'illegal-ue' | 'imsi-unknown-in-vlr' | 'imei-not-accepted' | 'illegal-me' | 'ps-services-not-allowed' | 'ps-and-non-ps-services-not-allowed' | 'ue-identity-not-derived-by-network' | 'implicitly-detached' | 'plmn-not-allowed' | 'location-area-not-allowed' | 'roaming-in-location-area-not-allowed' | 'ps-services-in-location-area-not-allowed' | 'no-suitable-cells-in-location-area' | 'msc-temporarily-not-reachable' | 'network-failure' | 'cs-domain-not-available' | 'esm-failure' | 'mac-failure' | 'synch-failure' | 'congestion' | 'ue-security-capabilities-mismatch' | 'security-mode-rejected-unspecified' | 'csg-not-authorized' | 'non-eps-authentication-unacceptable' | 'sms-provided-by-gprs-in-routing-area' | 'redirection-to-5gcn-required' | 'service-option-not-supported' | 'requested-service-option-not-subscribed' | 'service-option-temporarily-out-of-order' | 'requested-service-option-not-authorized' | 'call-cannot-be-identified' | 'cs-service-temporarily-not-available' | 'no-eps-bearer-context-activated' | 'severe-network-failure' | 'retry-upon-entry-into-new-cell-0' | 'retry-upon-entry-into-new-cell-1' | 'retry-upon-entry-into-new-cell-2' | 'retry-upon-entry-into-new-cell-3' | 'retry-upon-entry-into-new-cell-4' | 'retry-upon-entry-into-new-cell-5' | 'retry-upon-entry-into-new-cell-6' | 'retry-upon-entry-into-new-cell-7' | 'retry-upon-entry-into-new-cell-8' | 'retry-upon-entry-into-new-cell-9' | 'retry-upon-entry-into-new-cell-10' | 'retry-upon-entry-into-new-cell-11' | 'retry-upon-entry-into-new-cell-12' | 'retry-upon-entry-into-new-cell-13' | 'retry-upon-entry-into-new-cell-14' | 'retry-upon-entry-into-new-cell-15' | 'semantically-incorrect-message' | 'invalid-mandatory-information' | 'message-type-non-existent' | 'message-type-not-compatible' | 'information-element-non-existent' | 'conditional-information-element-error' | 'message-not-compatible' | 'unspecified-protocol-error';
export type QmiNasRoamingIndicatorStatusNick = 'on' | 'off';
export type QmiNasRoamingPreferenceNick = 'off' | 'not-off' | 'not-flashing' | 'any';
export type QmiNasRoamingStatusNick = 'off' | 'on' | 'blink' | 'out-of-neighborhood' | 'out-of-building' | 'preferred-system' | 'available-system' | 'alliance-partner' | 'premium-partner' | 'full-service' | 'partial-service' | 'banner-on' | 'banner-off';
export type QmiNasScellStateNick = 'deconfigured' | 'deactivated' | 'activated';
export type QmiNasServiceDomainPreferenceNick = 'cs-only' | 'ps-only' | 'cs-ps' | 'ps-attach' | 'ps-detach';
export type QmiNasServiceStatusNick = 'none' | 'limited' | 'available' | 'limited-regional' | 'power-save';
export type QmiNasSimRejectStateNick = 'unavailable' | 'available' | 'cs-invalid' | 'ps-invalid' | 'cs-ps-invalid';
export type QmiNasSwiEmmConnectionStateNick = 'rrc-idle' | 'waiting-rrc-cfm' | 'rrc-connecting' | 'rrc-releasing' | 'unknown';
export type QmiNasSwiEmmStateNick = 'deregistered' | 'reg-initiated' | 'registered' | 'tau-initiated' | 'sr-initiated' | 'dereg-initiated' | 'invalid' | 'unknown';
export type QmiNasSwiImsRegStateNick = 'no-srv' | 'in-prog' | 'failed' | 'limited' | 'full-srv' | '-unknown';
export type QmiNasSwiModemModeNick = 'powering-off' | 'factory-test' | 'offline' | 'offline-amps' | 'offline-cdma' | 'online' | 'low-power' | 'resetting' | 'network-test' | 'offline-request' | 'pseudo-online' | 'resetting-modem' | 'unknown';
export type QmiNasSwiPsStateNick = 'attached' | 'detached' | 'unknown';
export type QmiNasSwiSystemModeNick = 'no-service' | 'amps' | 'cdma' | 'gsm' | 'hdr' | 'wcdma' | 'gps' | 'wlan' | 'lte' | 'unknown';
export type QmiNasUsagePreferenceNick = 'unknown' | 'voice-centric' | 'data-centric';
export type QmiNasVoiceDomainPreferenceNick = 'cs-only' | 'ps-only' | 'cs-preferred' | 'ps-preferred';
export type QmiNasWcdmaHsServiceNick = 'hsdpa-hsupa-unsupported' | 'hsdpa-supported' | 'hsupa-supported' | 'hsdpa-hsupa-supported' | 'hsdpa-plus-supported' | 'hsdpa-plus-hsupa-supported' | 'dc-hsdpa-plus-supported' | 'dc-hsdpa-plus-hsupa-supported';
export type QmiNasWcdmaRrcStateNick = 'disconnected' | 'cell-pch' | 'ura-pch' | 'cell-fach' | 'cell-dch';
export type QmiOmaHfaFeatureDoneStateNick = 'none' | 'succeeded' | 'failed';
export type QmiOmaSessionFailedReasonNick = 'unknown' | 'network-unavailable' | 'server-unavailable' | 'authentication-failed' | 'max-retry-exceeded' | 'session-cancelled';
export type QmiOmaSessionStateNick = 'complete-information-updated' | 'complete-updated-information-unavailable' | 'failed' | 'retrying' | 'connecting' | 'connected' | 'authenticated' | 'mdn-downloaded' | 'msid-downloaded' | 'prl-downloaded' | 'mip-profile-downloaded';
export type QmiOmaSessionTypeNick = 'client-initiated-device-configure' | 'client-initiated-prl-update' | 'client-initiated-hands-free-activation' | 'device-initiated-hands-free-activation' | 'network-initiated-prl-update' | 'network-initiated-device-configure' | 'device-initiated-prl-update';
export type QmiPbmSessionTypeNick = 'gw-primary' | '1x-primary' | 'gw-secondary' | '1x-secondary' | 'nonprovisioning-slot-1' | 'nonprovisioning-slot-2' | 'global-phonebook-slot-1' | 'global-phonebook-slot-2';
export type QmiPdcConfigurationTypeNick = 'platform' | 'software';
export type QmiPdcRefreshEventTypeNick = 'start' | 'complete' | 'client-refresh';
export type QmiPdsNetworkModeNick = 'umts' | 'cdma';
export type QmiPdsOperatingModeNick = 'standalone' | 'ms-based' | 'ms-assisted';
export type QmiPdsOperationModeNick = 'unknown' | 'standalone' | 'ms-based' | 'ms-assisted';
export type QmiPdsPositionSessionStatusNick = 'success' | 'in-progress' | 'general-failure' | 'timeout' | 'user-ended-session' | 'bad-parameter' | 'phone-offline' | 'engine-locked' | 'e911-session-in-progress';
export type QmiPdsTrackingSessionStateNick = 'unknown' | 'inactive' | 'active';
export type QmiQosEventNick = 'unknown' | 'activated' | 'suspended' | 'gone' | 'modify-accepted' | 'modify-rejected' | 'info-code-updated';
export type QmiQosStatusNick = 'unknown' | 'activated' | 'suspended' | 'gone';
export type QmiSarRfStateNick = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20';
export type QmiServiceNick = 'unknown' | 'ctl' | 'wds' | 'dms' | 'nas' | 'qos' | 'wms' | 'pds' | 'auth' | 'at' | 'voice' | 'cat2' | 'uim' | 'pbm' | 'qchat' | 'rmtfs' | 'test' | 'loc' | 'sar' | 'ims' | 'adc' | 'csd' | 'mfs' | 'time' | 'ts' | 'tmd' | 'sap' | 'wda' | 'tsync' | 'rfsa' | 'csvt' | 'qcmap' | 'imsp' | 'imsvt' | 'imsa' | 'coex' | 'pdc' | 'stx' | 'bit' | 'imsrtp' | 'rfrpe' | 'dsd' | 'ssctl' | 'dpm' | 'cat' | 'rms' | 'oma' | 'fox' | 'fota' | 'gms' | 'gas' | 'atr' | 'ssc';
export type QmiSioPortNick = 'none' | 'a2-mux-rmnet0' | 'a2-mux-rmnet1' | 'a2-mux-rmnet2' | 'a2-mux-rmnet3' | 'a2-mux-rmnet4' | 'a2-mux-rmnet5' | 'a2-mux-rmnet6' | 'a2-mux-rmnet7';
export type QmiSscReportTypeNick = 'small' | 'large';
export type QmiUimCardApplicationPersonalizationFeatureNick = 'gw-network' | 'gw-network-subset' | 'gw-service-provider' | 'gw-corporate' | 'gw-uim' | '1x-network-type-1' | '1x-network-type-2' | '1x-hrpd' | '1x-service-provider' | '1x-corporate' | '1x-ruim' | 'gw-service-provider-name' | 'gw-sp-ehplmn' | 'gw-iccid' | 'gw-impi' | 'gw-network-subset-service-provider' | 'gw-carrier';
export type QmiUimCardApplicationPersonalizationFeatureStatusNick = 'gw-network' | 'gw-network-subset' | 'gw-service-provider' | 'gw-corporate' | 'gw-uim' | '1x-network-type-1' | '1x-network-type-2' | '1x-hrpd' | '1x-service-provider' | '1x-corporate' | '1x-ruim' | 'unknown' | 'gw-service-provider-name' | 'gw-sp-ehplmn' | 'gw-iccid' | 'gw-impi' | 'gw-network-subset-service-provider' | 'gw-carrier';
export type QmiUimCardApplicationPersonalizationStateNick = 'unknown' | 'in-progress' | 'ready' | 'code-required' | 'puk-code-required' | 'permanently-blocked';
export type QmiUimCardApplicationStateNick = 'unknown' | 'detected' | 'pin1-or-upin-pin-required' | 'puk1-or-upin-puk-required' | 'check-personalization-state' | 'pin1-blocked' | 'illegal' | 'ready';
export type QmiUimCardApplicationTypeNick = 'unknown' | 'sim' | 'usim' | 'ruim' | 'csim' | 'isim';
export type QmiUimCardErrorNick = 'unknown' | 'power-down' | 'poll' | 'no-atr-received' | 'voltage-mismatch' | 'parity' | 'possibly-removed' | 'technical';
export type QmiUimCardProtocolNick = 'unknown' | 'icc' | 'uicc';
export type QmiUimCardStateNick = 'absent' | 'present' | 'error';
export type QmiUimDepersonalizationOperationNick = 'deactivate' | 'unblock';
export type QmiUimFileControlInformationNick = 'no-data' | 'fcp' | 'fci' | 'fci-with-interfaces' | 'fmd';
export type QmiUimFileTypeNick = 'transparent' | 'cyclic' | 'linear-fixed' | 'dedicated-file' | 'master-file';
export type QmiUimPhysicalCardStateNick = 'unknown' | 'absent' | 'present';
export type QmiUimPinIdNick = 'unknown' | 'pin1' | 'pin2' | 'upin' | 'hidden-key';
export type QmiUimPinStateNick = 'not-initialized' | 'enabled-not-verified' | 'enabled-verified' | 'disabled' | 'blocked' | 'permanently-blocked';
export type QmiUimRefreshModeNick = 'reset' | 'init' | 'init-fcn' | 'fcn' | 'init-full-fcn' | 'app-reset' | '3g-reset';
export type QmiUimRefreshStageNick = 'wait-for-ok' | 'start' | 'end-with-success' | 'end-with-failure';
export type QmiUimSecurityAttributeLogicNick = 'always' | 'never' | 'and' | 'or' | 'single';
export type QmiUimSessionTypeNick = 'primary-gw-provisioning' | 'primary-1x-provisioning' | 'secondary-gw-provisioning' | 'secondary-1x-provisioning' | 'nonprovisioning-slot-1' | 'nonprovisioning-slot-2' | 'card-slot-1' | 'card-slot-2' | 'logical-channel-slot-1' | 'logical-channel-slot-2' | 'tertiary-gw-provisioning' | 'tertiary-1x-provisioning' | 'quaternary-gw-provisioning' | 'quaternary-1x-provisioning' | 'quinary-gw-provisioning' | 'quinary-1x-provisioning' | 'nonprovisioning-slot-3' | 'nonprovisioning-slot-4' | 'nonprovisioning-slot-5' | 'card-slot-3' | 'card-slot-4' | 'card-slot-5' | 'logical-channel-slot-3' | 'logical-channel-slot-4' | 'logical-channel-slot-5';
export type QmiUimSlotStateNick = 'inactive' | 'active';
export type QmiVoiceAlphaDataCodingSchemeNick = 'gsm' | 'ucs2';
export type QmiVoiceAlsNick = '1' | '2';
export type QmiVoiceCallControlResultTypeNick = 'voice' | 'sups' | 'ussd';
export type QmiVoiceCallControlSupplementaryServiceTypeNick = 'activate' | 'deactivate' | 'register' | 'erase' | 'interrogate' | 'register-password' | 'ussd';
export type QmiVoiceCallDirectionNick = 'unknown' | 'mo' | 'mt';
export type QmiVoiceCallEndReasonNick = 'offline' | 'cdma-lock' | 'no-service' | 'fade' | 'intercept' | 'reorder' | 'release-normal' | 'release-so-reject' | 'incoming-call' | 'alert-stop' | 'client-end' | 'activation' | 'mc-abort' | 'max-access-probe' | 'psist-n' | 'uim-not-present' | 'access-attempt-in-progress' | 'access-failure' | 'access-retry-order' | 'ccs-not-supported-by-bs' | 'no-response-from-bs' | 'rejected-by-bs' | 'incompatible' | 'access-block' | 'already-in-tc' | 'emergency-flashed' | 'user-call-originated-during-gps' | 'user-call-originated-during-sms' | 'user-call-originated-during-data' | 'redirection-or-handoff' | 'access-block-all' | 'otasp-spc-err' | 'is707b-max-access-probes' | 'access-failure-reject-order' | 'access-failure-retry-order' | 'timeout-t42' | 'timeout-t40' | 'service-init-failure' | 'timeout-t50' | 'timeout-t51' | 'rl-ack-timeout' | 'bad-forward-link' | 'trm-request-failed' | 'timeout-t41' | 'incoming-rejected' | 'setup-rejected' | 'network-end' | 'no-funds' | 'no-gw-service' | 'no-cdma-service' | 'no-full-service' | 'max-ps-calls' | 'unknown-subscriber' | 'illegal-subscriber' | 'bearer-service-not-provisioned' | 'tele-service-not-provisioned' | 'illegal-equipment' | 'call-barred' | 'illegal-ss-operation' | 'ss-error-status' | 'ss-not-available' | 'ss-subscription-violation' | 'ss-incompatibility' | 'facility-not-supported' | 'absent-subscriber' | 'short-term-denial' | 'long-term-denial' | 'system-failure' | 'data-missing' | 'unexpected-data-value' | 'password-registration-failure' | 'negative-password-check' | 'num-of-password-attempts-violation' | 'position-method-failure' | 'unknown-alphabet' | 'ussd-busy' | 'rejected-by-user' | 'rejected-by-network' | 'deflection-to-served-subscriber' | 'special-service-code' | 'invalid-deflected-to-number' | 'multiparty-participants-exceeded' | 'resources-not-available' | 'unassigned-number' | 'no-route-to-destination' | 'channel-unacceptable' | 'operator-determined-barring' | 'normal-call-clearing' | 'user-busy' | 'no-user-responding' | 'user-alerting-no-answer' | 'call-rejected' | 'number-changed' | 'preemption' | 'destination-out-of-order' | 'invalid-number-format' | 'facility-rejected' | 'response-to-status-enquiry' | 'normal-unspecified' | 'no-circuit-or-channel-available' | 'network-out-of-order' | 'temporary-failure' | 'switching-equipment-congestion' | 'access-information-discarded' | 'requested-circuit-or-channel-not-available' | 'resources-unavailable-or-unspecified' | 'qos-unavailable' | 'requested-facility-not-subscribed' | 'incoming-calls-barred-within-cug' | 'bearer-capability-not-auth' | 'bearer-capability-unavailable' | 'service-option-not-available' | 'acm-limit-exceeded' | 'bearer-service-not-implemented' | 'requested-facility-not-implemented' | 'only-digital-information-bearer-available' | 'service-or-option-not-implemented' | 'invalid-transaction-identifier' | 'user-not-member-of-cug' | 'incompatible-destination' | 'invalid-transit-network-selection' | 'semantically-incorrect-message' | 'invalid-mandatory-information' | 'message-type-not-implemented' | 'message-type-not-compatible-with-protocol-state' | 'information-element-non-existent' | 'conditional-ie-error' | 'message-not-compatible-with-protocol-state' | 'recovery-on-timer-expired' | 'protocol-error-unspecified' | 'interworking-unspecified' | 'outgoing-calls-barred-within-cug' | 'no-cug-selection' | 'unknown-cug-index' | 'cug-index-incompatible' | 'cug-call-failure-unspecified' | 'clir-not-subscribed' | 'ccbs-possible' | 'ccbs-not-possible' | 'imsi-unknown-in-hlr' | 'illegal-ms' | 'imsi-unknown-in-vlr' | 'imei-not-accepted' | 'illegal-me' | 'plmn-not-allowed' | 'location-area-not-allowed' | 'roaming-not-allowed-in-this-location-area' | 'no-suitable-cells-in-location-area' | 'network-failure' | 'mac-failure' | 'synch-failure' | 'network-congestion' | 'gsm-authentication-unacceptable' | 'service-not-subscribed' | 'service-temporarily-out-of-order' | 'call-cannot-be-identified' | 'incorrect-semantics-in-message' | 'mandatory-information-invalid' | 'access-stratum-failure' | 'invalid-sim' | 'wrong-state' | 'access-class-blocked' | 'no-resources' | 'invalid-user-data' | 'timer-t3230-expired' | 'no-cell-available' | 'abort-message-received' | 'radio-link-lost' | 'timer-t303-expired' | 'cnm-mm-release-pending' | 'access-stratum-reject-rr-release-indication' | 'access-stratum-reject-rr-random-access-failure' | 'access-stratum-reject-rrc-release-indication' | 'access-stratum-reject-rrc-close-session-indication' | 'access-stratum-reject-rrc-open-session-failure' | 'access-stratum-reject-low-level-failure' | 'access-stratum-reject-low-level-failure-redial-not-allowed' | 'access-stratum-reject-low-level-immediate-retry' | 'access-stratum-reject-abort-radio-unavailable' | 'service-option-not-supported' | 'bad-request-wait-invite' | 'bad-request-wait-reinvite' | 'invalid-remote-uri' | 'remote-unsupported-media-type' | 'peer-not-reachable' | 'network-no-response-timeout' | 'network-no-response-hold-failure' | 'data-connection-lost' | 'upgrade-downgrade-rejected' | 'sip-403-forbidden' | 'no-network-response' | 'upgrade-downgrade-failed' | 'upgrade-downgrade-cancelled' | 'ssac-reject' | 'thermal-emergency' | '1xcsfb-soft-failure' | '1xcsfb-hard-failure';
export type QmiVoiceCallModeNick = 'unknown' | 'cdma' | 'gsm' | 'umts' | 'lte';
export type QmiVoiceCallStateNick = 'unknown' | 'origination' | 'incoming' | 'conversation' | 'cc-in-progress' | 'alerting' | 'hold' | 'waiting' | 'disconnecting' | 'end' | 'setup';
export type QmiVoiceCallTypeNick = 'voice' | 'voice-ip' | 'otapa' | 'non-std-otasp' | 'emergency' | 'sups';
export type QmiVoiceDomainNick = 'cs-only' | 'ps-only' | 'cs-preferred' | 'ps-preferred';
export type QmiVoicePresentationNick = 'allowed' | 'restricted' | 'unavailable' | 'payphone';
export type QmiVoicePrivacyNick = 'standard' | 'enhanced';
export type QmiVoiceServiceOptionNick = 'wild' | 'is-96a' | 'evrc' | '13k-is733' | 'selectable-mode-vocoder' | '4gv-narrow-band' | '4gv-wide-band' | '13k' | 'is-96' | 'wvrc';
export type QmiVoiceSupplementaryServiceActionNick = 'activate' | 'deactivate' | 'register' | 'erase';
export type QmiVoiceSupplementaryServiceNotificationTypeNick = 'outgoing-call-is-forwarded' | 'outgoing-call-is-waiting' | 'outgoing-cug-call' | 'outgoing-calls-barred' | 'outgoing-call-is-deflected' | 'incoming-cug-call' | 'incoming-calls-barred' | 'incoming-forwarded-call' | 'incoming-deflected-call' | 'incoming-call-is-forwarded' | 'unconditional-call-forward-active' | 'conditional-call-forward-active' | 'clir-suppression-rejected' | 'call-is-on-hold' | 'call-is-retrieved' | 'call-is-in-multiparty' | 'incoming-call-is-ect';
export type QmiVoiceSupplementaryServiceReasonNick = 'forward-unconditional' | 'forward-mobile-busy' | 'forward-no-reply' | 'forward-unreachable' | 'forward-all' | 'forward-all-conditional' | 'all-outgoing' | 'outgoing-internal' | 'outgoing-internal-external-to-home' | 'all-incoming' | 'incoming-roaming' | 'bar-all' | 'bar-all-outgoing' | 'bar-all-incoming' | 'call-waiting';
export type QmiVoiceSupplementaryServiceTypeNick = 'release-held-or-waiting' | 'release-active-accept-held-or-waiting' | 'hold-active-accept-waiting-or-held' | 'hold-all-except-specified-call' | 'make-conference-call' | 'explicit-call-transfer' | 'ccbs-activation' | 'end-all-calls' | 'release-specified-call' | 'local-hold' | 'local-unhold';
export type QmiVoiceTtyModeNick = 'full' | 'vco' | 'hco' | 'off';
export type QmiVoiceUserActionNick = 'unknown' | 'not-required' | 'required';
export type QmiVoiceUssDataCodingSchemeNick = 'unknown' | 'ascii' | '8bit' | 'ucs2';
export type QmiWdaDataAggregationProtocolNick = 'disabled' | 'tlp' | 'qc-ncm' | 'mbim' | 'rndis' | 'qmap' | 'qmapv2' | 'qmapv3' | 'qmapv4' | 'qmapv5';
export type QmiWdaLinkLayerProtocolNick = 'unknown' | '802-3' | 'raw-ip';
export type QmiWdaLoopBackStateNick = 'disabled' | 'enabled';
export type QmiWdsAddressAllocationPreferenceNick = 'nas' | 'dhcp';
export type QmiWdsAttachPdnListActionNick = 'none' | 'detach-or-pdn-disconnect';
export type QmiWdsAutoconnectSettingNick = 'disabled' | 'enabled' | 'paused';
export type QmiWdsAutoconnectSettingRoamingNick = 'allowed' | 'home-only';
export type QmiWdsCallEndReasonNick = 'generic-unspecified' | 'generic-client-end' | 'generic-no-service' | 'generic-fade' | 'generic-release-normal' | 'generic-access-attempt-in-progress' | 'generic-access-failure' | 'generic-redirection-or-handoff' | 'generic-close-in-progress' | 'generic-authentication-failed' | 'generic-internal-error' | 'cdma-lock' | 'cdma-intercept' | 'cdma-reorder' | 'cdma-release-so-reject' | 'cdma-incoming-call' | 'cdma-alert-stop' | 'cdma-activation' | 'cdma-max-access-probes' | 'cdma-ccs-not-supported-by-bs' | 'cdma-no-response-from-bs' | 'cdma-rejected-by-bs' | 'cdma-incompatible' | 'cdma-already-in-tc' | 'cdma-user-call-originated-during-gps' | 'cdma-user-call-originated-during-sms' | 'cdma-no-service' | 'gsm-wcdma-conference-failed' | 'gsm-wcdma-incoming-rejected' | 'gsm-wcdma-no-service' | 'gsm-wcdma-network-end' | 'gsm-wcdma-llc-sndcp-failure' | 'gsm-wcdma-insufficient-resources' | 'gsm-wcdma-option-temporarily-out-of-order' | 'gsm-wcdma-nsapi-already-used' | 'gsm-wcdma-regular-deactivation' | 'gsm-wcdma-network-failure' | 'gsm-wcdma-reattach-required' | 'gsm-wcdma-protocol-error' | 'gsm-wcdma-operator-determined-barring' | 'gsm-wcdma-unknown-apn' | 'gsm-wcdma-unknown-pdp' | 'gsm-wcdma-ggsn-reject' | 'gsm-wcdma-activation-reject' | 'gsm-wcdma-option-not-supported' | 'gsm-wcdma-option-unsubscribed' | 'gsm-wcdma-qos-not-accepted' | 'gsm-wcdma-tft-semantic-error' | 'gsm-wcdma-tft-syntax-error' | 'gsm-wcdma-unknown-pdp-context' | 'gsm-wcdma-filter-semantic-error' | 'gsm-wcdma-filter-syntax-error' | 'gsm-wcdma-pdp-without-active-tft' | 'gsm-wcdma-invalid-transaction-id' | 'gsm-wcdma-message-incorrect-semantic' | 'gsm-wcdma-invalid-mandatory-info' | 'gsm-wcdma-message-type-unsupported' | 'gsm-wcdma-message-type-noncompatible-state' | 'gsm-wcdma-unknown-info-element' | 'gsm-wcdma-conditional-ie-error' | 'gsm-wcdma-message-and-protocol-state-uncompatible' | 'gsm-wcdma-apn-type-conflict' | 'gsm-wcdma-no-gprs-context' | 'gsm-wcdma-feature-not-supported' | 'evdo-connection-deny-general-or-busy' | 'evdo-connection-deny-billing-or-authentication-failure' | 'evdo-hdr-change' | 'evdo-hdr-exit' | 'evdo-hdr-no-session' | 'evdo-hdr-origination-during-gps-fix' | 'evdo-hdr-connection-setup-timeout' | 'evdo-hdr-released-by-cm';
export type QmiWdsCallTypeNick = 'laptop' | 'embedded';
export type QmiWdsClientTypeNick = 'tethered' | 'undefined';
export type QmiWdsConnectionStatusNick = 'unknown' | 'disconnected' | 'connected' | 'suspended' | 'authenticating';
export type QmiWdsDataBearerTechnologyNick = 'unknown' | 'cdma20001x' | '1xevdo' | 'gsm' | 'umts' | '1xevdo-reva' | 'edge' | 'hsdpa' | 'hsupa' | 'hsdpa-hsupda' | 'lte' | 'ehrpd' | 'hsdpaplus' | 'hsdpaplus-hsupa' | 'dchsdpaplus' | 'dchsdpaplus-hsupa' | 'hsdpaplus-plus-64qam' | 'hsdpaplus-plus-64qam-hsupa' | 'tdscdma' | 'tdscdma-hsdpa' | 'tdscdma-hsupa';
export type QmiWdsDataCallStatusNick = 'unknown' | 'activated' | 'terminated';
export type QmiWdsDataCallTypeNick = 'unknown' | 'embedded' | 'tethered' | 'modem-embedded';
export type QmiWdsDataSystemNick = 'unknown' | 'cdma1x' | 'cdma1x-evdo' | 'gprs' | 'wcdma' | 'lte' | 'tdscdma';
export type QmiWdsDataSystemNetworkTypeNick = '3gpp' | '3gpp2';
export type QmiWdsDeliveryOrderNick = 'subscribe' | 'on' | 'off';
export type QmiWdsDormancyStatusNick = 'unknown' | 'traffic-channel-dormant' | 'traffic-channel-active';
export type QmiWdsDsProfileErrorNick = 'unknown' | 'fail' | 'invalid-handle' | 'invalid-operation' | 'invalid-profile-type' | 'invalid-profile-number' | 'invalid-profile-id' | 'invalid-argument' | 'registry-not-initialized' | 'invalid-parameter-length' | 'list-end' | 'invalid-subscription-id' | 'invalid-profile-family' | '3gpp-invalid-profile-family' | '3gpp-access-error' | '3gpp-context-not-defined' | '3gpp-valid-flag-not-set' | '3gpp-read-only-flag-set' | '3gpp-out-of-profiles' | '3gpp2-invalid-profile-id';
export type QmiWdsExtendedTechnologyPreferenceNick = 'cdma' | 'umts' | 'epc' | 'embms' | 'modem-link-local';
export type QmiWdsIpFamilyNick = 'unknown' | 'ipv4' | 'ipv6' | 'unspecified';
export type QmiWdsIpSupportTypeNick = 'ipv4' | 'ipv6' | 'ipv4v6';
export type QmiWdsNetworkTypeNick = 'unknown' | '3gpp2' | '3gpp';
export type QmiWdsPdpAccessControlNick = 'none' | 'reject' | 'permission';
export type QmiWdsPdpDataCompressionTypeNick = 'off' | 'manufacturer-preferred' | 'v42bis' | 'v44';
export type QmiWdsPdpHeaderCompressionTypeNick = 'off' | 'manufacturer-preferred' | 'rfc1144' | 'rfc2507' | 'rfc3095';
export type QmiWdsPdpTypeNick = 'ipv4' | 'ppp' | 'ipv6' | 'ipv4-or-ipv6';
export type QmiWdsProfileChangeEventNick = 'create-event' | 'delete-event' | 'modify-event' | 'subscription-change-event';
export type QmiWdsProfileFamilyNick = 'embedded' | 'tethered';
export type QmiWdsProfileTypeNick = '3gpp' | '3gpp2' | 'epc' | 'all';
export type QmiWdsQosClassIdentifierNick = 'network-assign' | 'guaranteed-bitrate1' | 'guaranteed-bitrate2' | 'guaranteed-bitrate3' | 'guaranteed-bitrate4' | 'non-guaranteed-bitrate5' | 'non-guaranteed-bitrate6' | 'non-guaranteed-bitrate7' | 'non-guaranteed-bitrate8';
export type QmiWdsRadioAccessTechnologyNick = 'null-bearer' | '3gpp-wcdma' | '3gpp-geran' | '3gpp-lte' | '3gpp-tdscdma' | '3gpp-wlan' | '3gpp-maximum' | '3gpp2-1x' | '3gpp2-hrpd' | '3gpp2-ehrpd' | '3gpp2-wlan' | '3gpp2-maximum';
export type QmiWdsSduErroneousDeliveryNick = 'subscribe' | 'no-detection' | 'enabled' | 'disabled';
export type QmiWdsSduErrorRatioNick = 'subscribe' | '1e2' | '7e3' | '1e3' | '1e4' | '1e5' | '1e6' | '1e1';
export type QmiWdsSduResidualBitErrorRatioNick = 'subscribe' | '5e2' | '1e2' | '5e3' | '4e3' | '1e3' | '1e4' | '1e5' | '1e6' | '6e8';
export type QmiWdsTetheredCallTypeNick = 'non-tethered' | 'rmnet' | 'dun';
export type QmiWdsTrafficClassNick = 'subscribed' | 'conversational' | 'streaming' | 'interactive' | 'background';
export type QmiWdsVerboseCallEndReason3gppNick = 'operator-determined-barring' | 'llc-sndcp-failure' | 'insufficient-resources' | 'unknown-apn' | 'unknown-pdp' | 'authentication-failed' | 'ggsn-reject' | 'activation-reject' | 'option-not-supported' | 'option-unsubscribed' | 'option-temporarily-out-of-order' | 'nsapi-already-used' | 'regular-deactivation' | 'qos-not-accepted' | 'network-failure' | 'reattach-required' | 'feature-not-supported' | 'tft-semantic-error' | 'tft-syntax-error' | 'unknown-pdp-context' | 'filter-semantic-error' | 'filter-syntax-error' | 'pdp-without-active-tft' | 'ipv4-only-allowed' | 'ipv6-only-allowed' | 'single-address-bearer-only' | 'esm-info-not-received' | 'pdn-connection-does-not-exist' | 'multiple-connection-to-same-pdn-not-allowed' | 'invalid-transaction-id' | 'message-incorrect-semantic' | 'invalid-mandatory-info' | 'message-type-unsupported' | 'message-type-noncompatible-state' | 'unknown-info-element' | 'conditional-ie-error' | 'message-and-protocol-state-uncompatible' | 'protocol-error' | 'apn-type-conflict' | 'invalid-proxy-call-session-control-function-address' | 'internal-call-preempted-by-high-priority-apn' | 'emm-access-barred' | 'emergency-interface-only' | 'interface-mismatch' | 'companion-interface-in-use' | 'ip-address-mismatch' | 'interface-and-policy-family-mismatch' | 'emm-access-barred-infinite-retry' | 'authentication-failure-on-emergency-call' | 'invalid-dns-address' | 'invalid-proxy-call-session-control-function-dns-address' | 'test-loopback-mode-a-or-b-enabled' | 'emm-access-barred-eab' | 'call-preempted-by-emergency-apn' | 'ue-init-detach-or-disconnect';
export type QmiWdsVerboseCallEndReasonCmNick = 'cdma-lock' | 'intercept' | 'reorder' | 'release-so-reject' | 'incoming-call' | 'alert-stop' | 'activation' | 'max-access-probes' | 'ccs-not-supported-by-bs' | 'no-response-from-bs' | 'rejected-by-bs' | 'incompatible' | 'already-in-tc' | 'user-call-originated-during-gps' | 'user-call-originated-during-sms' | 'no-cdma-service' | 'mc-abort' | 'psist-ng' | 'uim-not-present' | 'retry-order' | 'access-block' | 'access-block-all' | 'is707b-max-access-probes' | 'thermal-emergency' | 'call-origination-throttled' | 'user-call-originated' | 'conference-failed' | 'incoming-rejected' | 'no-gateway-service' | 'no-gprs-context' | 'illegal-ms' | 'illegal-me' | 'gprs-and-non-gprs-services-not-allowed' | 'gprs-services-not-allowed' | 'ms-identity-not-derived-by-the-network' | 'implicitly-detached' | 'plmn-not-allowed' | 'la-not-allowed' | 'gprs-services-not-allowed-in-plmn' | 'pdp-duplicate' | 'ue-rat-change' | 'congestion' | 'no-pdp-context-activated' | 'access-class-dsac-rejection' | 'pdp-activate-max-retry-failed' | 'rab-failure' | 'eps-service-not-allowed' | 'tracking-area-not-allowed' | 'roaming-not-allowed-in-tracking-area' | 'no-suitable-cells-in-tracking-area' | 'not-authorized-closed-subscriber-group' | 'esm-unknown-eps-bearer-context' | 'drb-released-at-rrc' | 'nas-signal-connection-released' | 'emm-detached' | 'emm-attach-failed' | 'emm-attach-started' | 'lte-nas-service-request-failed' | 'esm-active-dedicated-bearer-reactivated-by-nw' | 'esm-lower-layer-failure' | 'esm-sync-up-with-nw' | 'esm-nw-activated-dedicated-bearer-with-id-of-default-bearer' | 'esm-bad-ota-message' | 'esm-ds-rejected-call' | 'esm-context-transferred-due-to-irat' | 'ds-explicit-deact' | 'esm-local-cause-none' | 'lte-nas-service-request-failed-no-throttle' | 'acl-failure' | 'lte-nas-service-request-failed-ds-disallow' | 'emm-t3417-expired' | 'emm-t3417-ext-expired' | 'lrrc-ul-data-confirmation-failure-txn' | 'lrrc-ul-data-confirmation-failure-handover' | 'lrrc-ul-data-confirmation-failure-conn-rel' | 'lrrc-ul-data-confirmation-failure-rlf' | 'lrrc-ul-data-confirmation-failure-ctrl-not-conn' | 'lrrc-connection-establishment-failure' | 'lrrc-connection-establishment-failure-aborted' | 'lrrc-connection-establishment-failure-access-barred' | 'lrrc-connection-establishment-failure-cell-reselection' | 'lrrc-connection-establishment-failure-config-failure' | 'lrrc-connection-establishment-failure-timer-expired' | 'lrrc-connection-establishment-failure-link-failure' | 'lrrc-connection-establishment-failure-not-camped' | 'lrrc-connection-establishment-failure-si-failure' | 'lrrc-connection-establishment-failure-rejected' | 'lrrc-connection-release-normal' | 'lrrc-connection-release-rlf' | 'lrrc-connection-release-cre-failure' | 'lrrc-connection-release-oos-during-cre' | 'lrrc-connection-release-aborted' | 'lrrc-connection-release-sib-read-error' | 'detach-with-reattach-lte-nw-detach' | 'detach-without-reattach-lte-nw-detach' | 'esm-proc-timeout' | 'invalid-connection-id' | 'invalid-nsapi' | 'invalid-pri-nsapi' | 'invalid-field' | 'radio-access-bearer-setup-failure' | 'pdp-establish-max-timeout' | 'pdp-modify-max-timeout' | 'pdp-inactive-max-timeout' | 'pdp-lowerlayer-error' | 'ppd-unknown-reason' | 'pdp-modify-collision' | 'pdp-mbms-request-collision' | 'mbms-duplicate' | 'sm-ps-detached' | 'sm-no-radio-available' | 'sm-abort-service-not-available' | 'message-exceeds-max-l2-limit' | 'sm-nas-service-request-failure' | 'rrc-connection-establishment-failure-request-error' | 'rrc-connection-establishment-failure-tai-change' | 'rrc-connection-establishment-failure-rf-unavailable' | 'rrc-connection-release-aborted-inter-rat-success' | 'rrc-connection-release-rlf-sec-not-active' | 'rrc-connection-release-inter-rat-to-lte-aborted' | 'rrc-connection-release-inter-rat-from-lte-to-geran-cco-success' | 'rrc-connection-release-inter-rat-from-lte-to-geran-cco-aborted' | 'imsi-unknown-in-home-subscriber-server' | 'imei-not-accepted' | 'eps-services-and-non-eps-services-not-allowed' | 'eps-services-not-allowed-in-plmn' | 'msc-temporarily-not-reachable' | 'cs-domain-not-available' | 'esm-failure' | 'mac-failure' | 'synchronization-failure' | 'ue-security-capabilities-mismatch' | 'security-mode-reject-unspecified' | 'non-eps-auth-unacceptable' | 'cs-fallback-call-establishment-not-allowed' | 'no-eps-bearer-context-activated' | 'emm-invalid-state' | 'nas-layer-failure' | 'multi-pdn-not-allowed' | 'embms-not-enabled' | 'pending-redial-call-cleanup' | 'embms-regular-deactivation' | 'tlb-regular-deactivation' | 'lower-layer-registration-failure' | 'detach-eps-services-not-allowed' | 'sm-internal-pdp-deactivation' | 'connection-deny-general-or-busy' | 'connection-deny-billing-or-authentication-failure' | 'hdr-change' | 'hdr-exit' | 'hdr-no-session' | 'hdr-origination-during-gps-fix' | 'hdr-connection-setup-timeout' | 'hdr-released-by-cm' | 'hdr-collocated-acquisition-failed' | 'otasp-commit-in-progress' | 'hdr-no-hybrid-service' | 'hdr-no-lock-granted' | 'hold-other-in-progress' | 'hdr-fade' | 'hdr-access-failure' | 'unsupported-1x-prev' | 'client-end' | 'no-service' | 'fade' | 'release-normal' | 'access-attempt-in-progress' | 'access-failure' | 'redirection-or-handoff' | 'offline' | 'emergency-mode' | 'phone-in-use' | 'invalid-mode' | 'invalid-sim-state' | 'no-collocated-hdr' | 'call-control-rejected' | 'emm-detached-psm' | 'dual-switch' | 'call-manager' | 'invalid-class3-apn' | 'mplmn-in-progress';
export type QmiWdsVerboseCallEndReasonEhrpdNick = 'subscription-limited-to-ipv4' | 'subscription-limited-to-ipv6' | 'vsncp-timeout' | 'vsncp-failure' | 'vsncp-3gpp2-general-error' | 'vsncp-3gpp2-unauthenticated-apn' | 'vsncp-3gpp2-pdn-limit-exceeded' | 'vsncp-3gpp2-no-pdn-gateway' | 'vsncp-3gpp2-pdn-gateway-unreachable' | 'vsncp-3gpp2-pdn-gateway-rejected' | 'vsncp-3gpp2-insufficient-parameters' | 'vsncp-3gpp2-resource-unavailable' | 'vsncp-3gpp2-administratively-prohibited' | 'vsncp-3gpp2-pdn-id-in-use' | 'vsncp-3gpp2-subscription-limitation' | 'vsncp-3gpp2-pdn-exists-for-this-apn';
export type QmiWdsVerboseCallEndReasonInternalNick = 'error' | 'call-ended' | 'unknown-internal-cause' | 'unknown-cause' | 'close-in-progress' | 'network-initiated-termination' | 'app-preempted' | 'pdn-ipv4-call-disallowed' | 'pdn-ipv4-call-throttled' | 'pdn-ipv6-call-disallowed' | 'pdn-ipv6-call-throttled' | 'modem-restart' | 'pdp-ppp-not-supported' | 'unpreferred-rat' | 'physical-link-close-in-progress' | 'apn-pending-handover' | 'profile-bearer-incompatible' | 'mmgdsi-card-event' | 'lpm-or-power-down' | 'apn-disabled' | 'mpit-expired' | 'ipv6-address-transfer-failed' | 'trat-swap-failed' | 'ehrpd-to-hrpd-fallback' | 'mandatory-apn-disabled' | 'mip-config-failure' | 'pdn-inactivity-timer-expired' | 'max-v4-connections' | 'max-v6-connections' | 'apn-mismatch' | 'ip-version-mismatch' | 'dun-call-disallowed' | 'invalid-profile' | 'epc-nonepc-transition' | 'invalid-profile-id' | 'call-already-present' | 'interface-in-use' | 'ip-pdp-mismatch' | 'apn-disallowed-on-roaming' | 'apn-parameter-change' | 'interface-in-use-config-match' | 'null-apn-disallowed' | 'thermal-mitigation' | 'subs-id-mismatch' | 'data-settings-disabled' | 'data-roaming-settings-disabled' | 'apn-format-invalid' | 'dds-call-abort' | 'validation-failure' | 'profiles-not-compatible' | 'null-resolved-apn-no-match' | 'invalid-apn-name' | 'dds-switch-in-progress' | 'call-disallowed-in-roaming' | 'mo-exceptional-not-supported' | 'non-ip-not-supported' | 'error-pdn-non-ip-call-throttled' | 'error-pdn-non-ip-call-disallowed' | 'error-non-ip-type-mismatch' | 'error-max-nb-pdn-reached' | 'invalid-apn' | 'slice-not-allowed' | 'routing-fail' | 'routing-changed' | 'local-area-data-network-data-network-name-not-available' | 'apn-type-mismatch';
export type QmiWdsVerboseCallEndReasonIpv6Nick = 'prefix-unavailable' | 'hrpd-ipv6-disabled' | 'disabled';
export type QmiWdsVerboseCallEndReasonMipNick = 'error-reason-unknown' | 'fa-error-reason-unspecified' | 'fa-error-administratively-prohibited' | 'fa-error-insufficient-resources' | 'fa-error-mobile-node-authentication-failure' | 'fa-error-ha-authentication-failure' | 'fa-error-requested-lifetime-too-long' | 'fa-error-malformed-request' | 'fa-error-malformed-reply' | 'fa-error-encapsulation-unavailable' | 'fa-error-vjhc-unavailable' | 'fa-error-reverse-tunnel-unavailable' | 'fa-error-reverse-tunnel-mandatory-and-t-bit-not-set' | 'fa-error-delivery-style-not-supported' | 'fa-error-missing-nai' | 'fa-error-missing-ha' | 'fa-error-missing-home-address' | 'fa-error-unknown-challenge' | 'fa-error-missing-challenge' | 'fa-error-stale-challenge' | 'ha-error-reason-unspecified' | 'ha-error-administratively-prohibited' | 'ha-error-insufficient-resources' | 'ha-error-mobile-node-authentication-failure' | 'ha-error-fa-authentication-failure' | 'ha-error-registration-id-mismatch' | 'ha-error-malformed-request' | 'ha-error-unknown-ha-address' | 'ha-error-reverse-tunnel-unavailable' | 'ha-error-reverse-tunnel-mandatory-and-t-bit-not-set' | 'ha-error-encapsulation-unavailable';
export type QmiWdsVerboseCallEndReasonPppNick = 'unknown' | 'timeout' | 'authentication-failure' | 'option-mismatch' | 'pap-failure' | 'chap-failure' | 'close-in-progress';
export type QmiWdsVerboseCallEndReasonTypeNick = 'mip' | 'internal' | 'cm' | '3gpp' | 'ppp' | 'ehrpd' | 'ipv6';
export type QmiWmsAckFailureCauseNick = 'no-network-response' | 'network-released-link' | 'not-sent';
export type QmiWmsAckIndicatorNick = 'send' | 'do-not-send';
export type QmiWmsCdmaCauseCodeNick = 'network-address-vacant' | 'network-address-translation-failure' | 'network-resource-shortage' | 'network-failure' | 'network-invalid-teleservice-id' | 'network-other' | 'destination-no-page-response' | 'destination-busy' | 'destination-no-ack' | 'destination-resource-shortage' | 'destination-sms-delivery-postponed' | 'destination-out-of-service' | 'destination-not-at-address' | 'destination-other' | 'radio-interface-resource-shortage' | 'radio-interface-incompatibility' | 'radio-interface-other' | 'general-encoding' | 'general-sms-origin-denied' | 'general-sms-destination-denied' | 'general-supplementary-service-not-supported' | 'general-sms-not-supported' | 'general-missing-expected-parameter' | 'general-missing-mandatory-parameter' | 'general-unrecognized-parameter-value' | 'general-unexpected-parameter-value' | 'general-user-data-size-error' | 'general-other';
export type QmiWmsCdmaErrorClassNick = 'temporary' | 'permanent' | 'temporary-device' | 'permanent-device';
export type QmiWmsCdmaServiceOptionNick = 'auto' | '6' | '14';
export type QmiWmsGsmUmtsRpCauseNick = 'unassigned-number' | 'operator-determined-barring' | 'call-barred' | 'reserved' | 'sms-transfer-rejected' | 'memory-capacity-exceeded' | 'destination-out-of-order' | 'unidentified-subscriber' | 'facility-rejected' | 'unknown-subscriber' | 'network-ouf-of-order' | 'temporary-failure' | 'congestion' | 'resources-unavailable' | 'facility-not-subscribed' | 'facility-not-implemented' | 'invalid-sms-transfer-reference-value' | 'semantically-incorrect-message' | 'invalid-mandatory-info' | 'message-type-not-implemented' | 'message-not-compatible-with-sms' | 'information-element-not-implemented' | 'protocol-error' | 'interworking';
export type QmiWmsGsmUmtsTpCauseNick = 'tele-interworking-not-supported' | 'short-message-type-0-not-supported' | 'short-message-cannot-be-replaced' | 'unspecified-pid-error' | 'dcs-not-supported' | 'message-class-not-supported' | 'unspecified-dcs-error' | 'command-cannot-be-actioned' | 'command-unsupported' | 'unspecified-command-error' | 'tpdu-not-supported' | 'sc-busy' | 'no-sc-subscription' | 'sc-system-failure' | 'invalid-sme-address' | 'destination-sme-barred' | 'sm-rejected-or-duplicate' | 'vpf-not-supported' | 'vp-not-supported' | 'sim-sms-storage-full' | 'no-sms-storage-capability-in-sim' | 'ms-error' | 'memory-capacity-exceeded' | 'sim-application-toolkit-busy' | 'sim-data-download-error' | 'unspecified-error';
export type QmiWmsMessageClassNick = '0' | '1' | '2' | '3' | 'none' | 'cdma';
export type QmiWmsMessageDeliveryFailureTypeNick = 'temporary' | 'permanent';
export type QmiWmsMessageFormatNick = 'cdma' | 'gsm-wcdma-point-to-point' | 'gsm-wcdma-broadcast' | 'mwi';
export type QmiWmsMessageModeNick = 'cdma' | 'gsm-wcdma';
export type QmiWmsMessageProtocolNick = 'cdma' | 'wcdma';
export type QmiWmsMessageTagTypeNick = 'mt-read' | 'mt-not-read' | 'mo-sent' | 'mo-not-sent';
export type QmiWmsMessageTypeNick = 'point';
export type QmiWmsNotificationTypeNick = 'primary' | 'secondary-gsm' | 'secondary-umts';
export type QmiWmsReceiptActionNick = 'discard' | 'store-and-notify' | 'transfer-only' | 'transfer-and-ack' | 'unknown';
export type QmiWmsStorageTypeNick = 'uim' | 'nv' | 'none';
export type QmiWmsTransferIndicationNick = 'client';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The #QmiClient structure contains private data and should only be accessed using the provided API. */
export interface QmiClientProps extends GObjectProps {
    /**
     * @since 1.0
     * @default 0
     */
    'client-cid'?: number;
    /** @since 1.0 */
    'client-device'?: Qmi.Device;
    /**
     * @since 1.0
     * @default QMI_SERVICE_UNKNOWN
     */
    'client-service'?: QmiServiceNick | Qmi.Service;
    /**
     * @since 1.0
     * @default 0
     */
    'client-version-major'?: number;
    /**
     * @since 1.0
     * @default 0
     */
    'client-version-minor'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientConstructOnly = GObjectConstructOnly;

/** The #QmiClientAtr structure contains private data and should only be accessed using the provided API. */
export interface QmiClientAtrProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientAtrConstructOnly = QmiClientConstructOnly;

/** The #QmiClientDms structure contains private data and should only be accessed using the provided API. */
export interface QmiClientDmsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientDmsConstructOnly = QmiClientConstructOnly;

/** The #QmiClientDpm structure contains private data and should only be accessed using the provided API. */
export interface QmiClientDpmProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientDpmConstructOnly = QmiClientConstructOnly;

/** The #QmiClientDsd structure contains private data and should only be accessed using the provided API. */
export interface QmiClientDsdProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientDsdConstructOnly = QmiClientConstructOnly;

/** The #QmiClientFox structure contains private data and should only be accessed using the provided API. */
export interface QmiClientFoxProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientFoxConstructOnly = QmiClientConstructOnly;

/** The #QmiClientGas structure contains private data and should only be accessed using the provided API. */
export interface QmiClientGasProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientGasConstructOnly = QmiClientConstructOnly;

/** The #QmiClientGms structure contains private data and should only be accessed using the provided API. */
export interface QmiClientGmsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientGmsConstructOnly = QmiClientConstructOnly;

/** The #QmiClientIms structure contains private data and should only be accessed using the provided API. */
export interface QmiClientImsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientImsConstructOnly = QmiClientConstructOnly;

/** The #QmiClientImsa structure contains private data and should only be accessed using the provided API. */
export interface QmiClientImsaProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientImsaConstructOnly = QmiClientConstructOnly;

/** The #QmiClientImsp structure contains private data and should only be accessed using the provided API. */
export interface QmiClientImspProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientImspConstructOnly = QmiClientConstructOnly;

/** The #QmiClientLoc structure contains private data and should only be accessed using the provided API. */
export interface QmiClientLocProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientLocConstructOnly = QmiClientConstructOnly;

/** The #QmiClientNas structure contains private data and should only be accessed using the provided API. */
export interface QmiClientNasProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientNasConstructOnly = QmiClientConstructOnly;

/** The #QmiClientOma structure contains private data and should only be accessed using the provided API. */
export interface QmiClientOmaProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientOmaConstructOnly = QmiClientConstructOnly;

/** The #QmiClientPbm structure contains private data and should only be accessed using the provided API. */
export interface QmiClientPbmProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientPbmConstructOnly = QmiClientConstructOnly;

/** The #QmiClientPdc structure contains private data and should only be accessed using the provided API. */
export interface QmiClientPdcProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientPdcConstructOnly = QmiClientConstructOnly;

/** The #QmiClientPds structure contains private data and should only be accessed using the provided API. */
export interface QmiClientPdsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientPdsConstructOnly = QmiClientConstructOnly;

/** The #QmiClientQos structure contains private data and should only be accessed using the provided API. */
export interface QmiClientQosProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientQosConstructOnly = QmiClientConstructOnly;

/** The #QmiClientSar structure contains private data and should only be accessed using the provided API. */
export interface QmiClientSarProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientSarConstructOnly = QmiClientConstructOnly;

/** The #QmiClientSsc structure contains private data and should only be accessed using the provided API. */
export interface QmiClientSscProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientSscConstructOnly = QmiClientConstructOnly;

/** The #QmiClientUim structure contains private data and should only be accessed using the provided API. */
export interface QmiClientUimProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientUimConstructOnly = QmiClientConstructOnly;

/** The #QmiClientVoice structure contains private data and should only be accessed using the provided API. */
export interface QmiClientVoiceProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientVoiceConstructOnly = QmiClientConstructOnly;

/** The #QmiClientWda structure contains private data and should only be accessed using the provided API. */
export interface QmiClientWdaProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientWdaConstructOnly = QmiClientConstructOnly;

/** The #QmiClientWds structure contains private data and should only be accessed using the provided API. */
export interface QmiClientWdsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientWdsConstructOnly = QmiClientConstructOnly;

/** The #QmiClientWms structure contains private data and should only be accessed using the provided API. */
export interface QmiClientWmsProps extends QmiClientProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiClientWmsConstructOnly = QmiClientConstructOnly;

/** The #QmiDevice structure contains private data and should only be accessed using the provided API. */
export interface QmiDeviceProps extends GObjectProps, GAsyncInitableProps {
    /** @since 1.0 */
    'device-file'?: Gio.File;
    /**
     * @since 1.12
     * @default FALSE
     */
    'device-no-file-check'?: boolean;
    /** @since 1.24 */
    'device-node'?: Qrtr.Node;
    /**
     * @since 1.12
     * @default qmi-proxy
     */
    'device-proxy-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiDeviceConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | 'device-file' | 'device-no-file-check' | 'device-node' | 'device-proxy-path';

/** The #QmiProxy structure contains private data and should only be accessed using the provided API. */
export interface QmiProxyProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type QmiProxyConstructOnly = GObjectConstructOnly;

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
