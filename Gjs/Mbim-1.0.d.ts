// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Mbim-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Mbim {

/**
 * Access type preference.
 */
enum AccessMediaType {
    /**
     * None, or unknown.
     */
    UNKNOWN,
    /**
     * 3GPP only.
     */
    TODO_3GPP,
    /**
     * 3GPP Preferred.
     */
    TODO_3GPP_PREFERRED,
}
/**
 * Activation Command.
 */
enum ActivationCommand {
    /**
     * Deactivate.
     */
    DEACTIVATE,
    /**
     * Activate.
     */
    ACTIVATE,
}
/**
 * Activation State.
 */
enum ActivationState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Activated.
     */
    ACTIVATED,
    /**
     * Activating.
     */
    ACTIVATING,
    /**
     * Deactivated.
     */
    DEACTIVATED,
    /**
     * Deactivating.
     */
    DEACTIVATING,
}
/**
 * Provider PLMN mode.
 */
enum AtdsProviderPlmnMode {
    /**
     * GSM.
     */
    GSM,
    /**
     * UTRAN (UMTS).
     */
    UTRAN,
    /**
     * LTE.
     */
    LTE,
}
/**
 * RAT mode preferences.
 */
enum AtdsRatMode {
    /**
     * Automatic.
     */
    AUTOMATIC,
    /**
     * 2G only.
     */
    TODO_2G_ONLY,
    /**
     * 3G only.
     */
    TODO_3G_ONLY,
    /**
     * 4G only.
     */
    TODO_4G_ONLY,
}
/**
 * Auth Protocol.
 */
enum AuthProtocol {
    /**
     * None.
     */
    NONE,
    /**
     * Pap.
     */
    PAP,
    /**
     * Chap.
     */
    CHAP,
    /**
     * V2.
     */
    MSCHAPV2,
}
/**
 * MBIM commands in the %MBIM_SERVICE_ATDS service.
 */
enum CidAtds {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Radio signal information.
     */
    SIGNAL,
    /**
     * Cell location information.
     */
    LOCATION,
    /**
     * Operator selection.
     */
    OPERATORS,
    /**
     * Radio Access Technology selection.
     */
    RAT,
    /**
     * Registration state.
     */
    REGISTER_STATE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_AUTH service.
 */
enum CidAuth {
    /**
     * Unknow command
     */
    UNKNOWN,
    /**
     * AKA.
     */
    AKA,
    /**
     * AKAP.
     */
    AKAP,
    /**
     * SIM.
     */
    SIM,
}
/**
 * MBIM commands in the %MBIM_SERVICE_BASIC_CONNECT service.
 */
enum CidBasicConnect {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Device capabilities.
     */
    DEVICE_CAPS,
    /**
     * Subscriber ready status.
     */
    SUBSCRIBER_READY_STATUS,
    /**
     * Radio state.
     */
    RADIO_STATE,
    /**
     * PIN.
     */
    PIN,
    /**
     * PIN list.
     */
    PIN_LIST,
    /**
     * Home provider.
     */
    HOME_PROVIDER,
    /**
     * Preferred providers.
     */
    PREFERRED_PROVIDERS,
    /**
     * Visible providers.
     */
    VISIBLE_PROVIDERS,
    /**
     * Register state.
     */
    REGISTER_STATE,
    /**
     * Packet service.
     */
    PACKET_SERVICE,
    /**
     * Signal state.
     */
    SIGNAL_STATE,
    /**
     * Connect.
     */
    CONNECT,
    /**
     * Provisioned contexts.
     */
    PROVISIONED_CONTEXTS,
    /**
     * Service activation.
     */
    SERVICE_ACTIVATION,
    /**
     * IP configuration.
     */
    IP_CONFIGURATION,
    /**
     * Device services.
     */
    DEVICE_SERVICES,
    /**
     * Device service subscribe list. Since 1.8.
     */
    DEVICE_SERVICE_SUBSCRIBE_LIST,
    /**
     * Packet statistics.
     */
    PACKET_STATISTICS,
    /**
     * Network idle hint.
     */
    NETWORK_IDLE_HINT,
    /**
     * Emergency mode.
     */
    EMERGENCY_MODE,
    /**
     * IP packet filters.
     */
    IP_PACKET_FILTERS,
    /**
     * Multicarrier providers.
     */
    MULTICARRIER_PROVIDERS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_DSS service.
 */
enum CidDss {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Connect.
     */
    CONNECT,
}
/**
 * MBIM commands in the %MBIM_SERVICE_INTEL_FIRMWARE_UPDATE service.
 */
enum CidIntelFirmwareUpdate {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Reboot modem for firmware update.
     */
    MODEM_REBOOT,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_BASIC_CONNECT_EXTENSIONS service.
 */
enum CidMsBasicConnectExtensions {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Provisioned contexts (v2).
     */
    PROVISIONED_CONTEXTS,
    /**
     * Network denylist. Since 1.28.
     */
    NETWORK_DENYLIST,
    /**
     * LTE attach configuration.
     */
    LTE_ATTACH_CONFIGURATION,
    /**
     * LTE attach status information. Since 1.26.
     */
    LTE_ATTACH_INFO,
    /**
     * System capabilities.
     */
    SYS_CAPS,
    /**
     * Device capabilities (v2).
     */
    DEVICE_CAPS,
    /**
     * Device slot mappings.
     */
    DEVICE_SLOT_MAPPINGS,
    /**
     * Slot info status.
     */
    SLOT_INFO_STATUS,
    /**
     * Protocol configuration operations (PCO).
     */
    PCO,
    /**
     * Device reset.
     */
    DEVICE_RESET,
    /**
     * Base stations info. Since 1.28.
     */
    BASE_STATIONS_INFO,
    /**
     * Location info status. Since 1.28.
     */
    LOCATION_INFO_STATUS,
    /**
     * Protocol version query and report, defined in MBIMEx v2.0. Since 1.28.
     */
    VERSION,
    /**
     * Modem configuration status, defined in MBIMEx v3.0. Since 1.28.
     */
    MODEM_CONFIGURATION,
    /**
     * Registration parameters, defined in MBIMEx v3.0. Since 1.28.
     */
    REGISTRATION_PARAMETERS,
    /**
     * Protocol wake reason query and report, defined in MBIMEx v3.0. Since 1.28
     */
    WAKE_REASON,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_FIRMWARE_ID service.
 */
enum CidMsFirmwareId {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Get Firmware ID.
     */
    GET,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_HOST_SHUTDOWN service.
 */
enum CidMsHostShutdown {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Notify that the host is shutting down.
     */
    NOTIFY,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_SAR service.
 */
enum CidMsSar {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * SAR backoff mode and level configuration.
     */
    CONFIG,
    /**
     * Transmission status indication setup.
     */
    TRANSMISSION_STATUS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_MS_UICC_LOW_LEVEL_ACCESS service.
 */
enum CidMsUiccLowLevelAccess {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * ATR.
     */
    ATR,
    /**
     * Open Channel.
     */
    OPEN_CHANNEL,
    /**
     * Close Channel.
     */
    CLOSE_CHANNEL,
    /**
     * Apdu.
     */
    APDU,
    /**
     * Terminal capabilities.
     */
    TERMINAL_CAPABILITY,
    /**
     * Reset.
     */
    RESET,
}
/**
 * MBIM commands in the %MBIM_SERVICE_PHONEBOOK service.
 */
enum CidPhonebook {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Configuration.
     */
    CONFIGURATION,
    /**
     * Read.
     */
    READ,
    /**
     * Delete.
     */
    DELETE,
    /**
     * Write.
     */
    WRITE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_PROXY_CONTROL service.
 */
enum CidProxyControl {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Configuration.
     */
    CONFIGURATION,
    /**
     * MBIM and MBIMEx Version reporting.
     */
    VERSION,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QDU service.
 */
enum CidQdu {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Update session command.
     */
    UPDATE_SESSION,
    /**
     * Open QDU file for firmware update.
     */
    FILE_OPEN,
    /**
     * Write QDU file for firmware update.
     */
    FILE_WRITE,
    /**
     * Reboot to Emergency Download (Quectel specific). Since 1.28.
     */
    QUECTEL_REBOOT,
    /**
     * Read firmware version (Quectel specific). Since 1.28.
     */
    QUECTEL_READ_VERSION,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QMI service.
 */
enum CidQmi {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Send QMI request and receive QMI response.
     */
    MSG,
}
/**
 * MBIM commands in the %MBIM_SERVICE_QUECTEL service.
 */
enum CidQuectel {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * Radio state.
     */
    RADIO_STATE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_SMS service.
 */
enum CidSms {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * SMS configuration.
     */
    CONFIGURATION,
    /**
     * Read.
     */
    READ,
    /**
     * Send.
     */
    SEND,
    /**
     * Delete.
     */
    DELETE,
    /**
     * Store message status.
     */
    MESSAGE_STORE_STATUS,
}
/**
 * MBIM commands in the %MBIM_SERVICE_STK service.
 */
enum CidStk {
    /**
     * Unknown command.
     */
    UNKNOWN,
    /**
     * PAC.
     */
    PAC,
    /**
     * Terminal response.
     */
    TERMINAL_RESPONSE,
    /**
     * Envelope.
     */
    ENVELOPE,
}
/**
 * MBIM commands in the %MBIM_SERVICE_USSD service.
 */
enum CidUssd {
    /**
     * Unknown command. Since 1.4.
     */
    USSD_UNKNOWN,
    /**
     * USSD operation.
     */
    USSD,
}
/**
 * Compression.
 */
enum Compression {
    /**
     * None.
     */
    NONE,
    /**
     * Enable.
     */
    ENABLE,
}
/**
 * Context IP Type.
 */
enum ContextIpType {
    /**
     * It is up to the function to decide, the host does not care.
     */
    DEFAULT,
    /**
     * IPv4 context.
     */
    IPV4,
    /**
     * IPv6 context.
     */
    IPV6,
    /**
     * The context is IPv4, IPv6 or dualstack IPv4v6.
     */
    IPV4V6,
    /**
     * Both an IPv4 and an IPv6 context.
     */
    IPV4_AND_IPV6,
}
/**
 * Media type, specifying whether the modem is used for cellular or
 * iWLAN (Wi-Fi offload).
 */
enum ContextMediaType {
    /**
     * Context allowed to be used only wen registered over cellular.
     */
    CELLULAR_ONLY,
    /**
     * Context allowed to be used only when registered over Wi-Fi.
     */
    WIFI_ONLY,
    /**
     * Context allowed to be used when registered either over cellular or Wi-Fi.
     */
    ALL,
}
/**
 * Command to run when updating context configuration.
 */
enum ContextOperation {
    /**
     * Adds or replaces an existing context.
     */
    DEFAULT,
    /**
     * Delete an existing context.
     */
    DELETE,
    /**
     * Restore preconfigured contexts for the provider ID of the current SIM card.
     */
    RESTORE_FACTORY,
}
/**
 * Type of roaming control.
 */
enum ContextRoamingControl {
    /**
     * Context allowed to be used in home network.
     */
    HOME_ONLY,
    /**
     * Context allowed to be used in partner network.
     */
    PARTNER_ONLY,
    /**
     * Context allowed to be used in non-partner network.
     */
    NON_PARTNER_ONLY,
    /**
     * Context allowed to be used in home and partner networks.
     */
    HOME_AND_PARTNER,
    /**
     * Context allowed to be used in home and non-partner networks.
     */
    HOME_AND_NON_PARTNER,
    /**
     * Context allowed to be used in partner and non-partner networks.
     */
    PARTNER_AND_NON_PARTNER,
    /**
     * Context allowed to be used in any roaming condition.
     */
    ALLOW_ALL,
}
/**
 * Source of context creation.
 */
enum ContextSource {
    /**
     * Context created by enterprise IT.
     */
    ADMIN,
    /**
     * Context created by user.
     */
    USER,
    /**
     * Context created by operator.
     */
    OPERATOR,
    /**
     * Context created by modem manufacturer.
     */
    MODEM,
    /**
     * Context created by OS APN database.
     */
    DEVICE,
}
/**
 * Status of the context, specifying whether it's enabled or disabled.
 */
enum ContextState {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
}
/**
 * Enumeration of the generic MBIM context types.
 */
enum ContextType {
    /**
     * Invalid context type.
     */
    INVALID,
    /**
     * Context not yet provisioned.
     */
    NONE,
    /**
     * Context representing a connection to the
     *  Internet.
     */
    INTERNET,
    /**
     * Context representing a connection to a a private
     *  network (e.g. VPN to a corporate network).
     */
    VPN,
    /**
     * Context representing a connection to a VoIP service.
     */
    VOICE,
    /**
     * Context representing a connection to a video
     *  sharing service.
     */
    VIDEO_SHARE,
    /**
     * Context representing a connection to an
     *  OTA (over-the-air) activation site.
     */
    PURCHASE,
    /**
     * Context representing a connection to IMS.
     */
    IMS,
    /**
     * Context representing a connection to MMS.
     */
    MMS,
    /**
     * Context representing a connection which is
     *  terminated at the device. No IP traffic sent over the air.
     */
    LOCAL,
    /**
     * Context used for administrative purposes, such as
     *  device management (MS MBIMEx). Since 1.28.
     */
    ADMIN,
    /**
     * Context used for certain applications allowed by
     *  mobile operators (MS MBIMEx). Since 1.28.
     */
    APP,
    /**
     * Context used for XCAP provisioning on IMS services
     *  (MS MBIMEx). Since 1.28.
     */
    XCAP,
    /**
     * Context used for mobile hotspot tethering
     *  (MS MBIMEx). Since 1.28.
     */
    TETHERING,
    /**
     * Context used for IMS emergency calling
     *  (MS MBIMEx). Since 1.28.
     */
    EMERGENCY_CALLING,
}
/**
 * Common errors that may be reported by libmbim-glib.
 */
enum CoreError {
    /**
     * Operation failed.
     */
    FAILED,
    /**
     * Operation cannot be executed in the current state.
     */
    WRONGSTATE,
    /**
     * Operation timed out.
     */
    TIMEOUT,
    /**
     * Invalid arguments given.
     */
    INVALIDARGS,
    /**
     * MBIM message is invalid.
     */
    INVALIDMESSAGE,
    /**
     * Not supported.
     */
    UNSUPPORTED,
    /**
     * Operation aborted.
     */
    ABORTED,
    /**
     * State is unknown. Since 1.16.
     */
    UNKNOWNSTATE,
}
/**
 * Hint regarding the activation of the default PDU session.
 */
enum DefaultPduActivationHint {
    /**
     * Default PDU session activation is unlikely to happen soon.
     */
    UNLIKELY,
    /**
     * Default PDU session activation is likely to happen soon.
     */
    LIKELY,
}
/**
 * Type of device.
 */
enum DeviceType {
    /**
     * Unknown type.
     */
    UNKNOWN,
    /**
     * Device is embedded in the system.
     */
    EMBEDDED,
    /**
     * Device is removable.
     */
    REMOVABLE,
    /**
     * Device is remote.
     */
    REMOTE,
}
/**
 * DRX cycle settings.
 */
enum DrxCycle {
    /**
     * DRX cycle not specified.
     */
    NOT_SPECIFIED,
    /**
     * DRX cycle setting not supported.
     */
    NOT_SUPPORTED,
    /**
     * DRX cycle T=32.
     */
    TODO_32,
    /**
     * DRX cycle T=64.
     */
    TODO_64,
    /**
     * DRX cycle T=128.
     */
    TODO_128,
    /**
     * DRX cycle T=256.
     */
    TODO_256,
}
/**
 * Action performed in the link state.
 */
enum DssLinkState {
    /**
     * Deactivate.
     */
    DEACTIVATE,
    /**
     * Activate.
     */
    ACTIVATE,
}
/**
 * Emergency mode state.
 */
enum EmergencyModeState {
    /**
     * Off.
     */
    OFF,
    /**
     * On.
     */
    ON,
}
/**
 * Local Area Data Network (LADN) information state.
 */
enum LadnInfo {
    /**
     * Information not needed.
     */
    NOT_NEEDED,
    /**
     * Information requested.
     */
    REQUESTED,
}
/**
 * Command to run when updating LTE attach configuration.
 */
enum LteAttachContextOperation {
    /**
     * Overwrite existing contexts.
     */
    DEFAULT,
    /**
     * Restore factory preconfigured contexts.
     */
    RESTORE_FACTORY,
}
/**
 * Type of roaming control.
 */
enum LteAttachContextRoamingControl {
    /**
     * Context allowed to be used on home network.
     */
    HOME,
    /**
     * Context allowed to be used on partner network.
     */
    PARTNER,
    /**
     * Context allowed to be used on non-partner network.
     */
    NON_PARTNER,
}
/**
 * LTE attach state.
 */
enum LteAttachState {
    /**
     * Detached.
     */
    DETACHED,
    /**
     * Attached.
     */
    ATTACHED,
}
/**
 * Type of command message.
 */
enum MessageCommandType {
    /**
     * Unknown type.
     */
    UNKNOWN,
    /**
     * Query command.
     */
    QUERY,
    /**
     * Set command.
     */
    SET,
}
/**
 * Type of MBIM messages.
 */
enum MessageType {
    /**
     * Invalid MBIM message.
     */
    INVALID,
    /**
     * Initialization request.
     */
    OPEN,
    /**
     * Close request.
     */
    CLOSE,
    /**
     * Command request.
     */
    COMMAND,
    /**
     * Host-reported error in the communication.
     */
    HOST_ERROR,
    /**
     * Response to initialization request.
     */
    OPEN_DONE,
    /**
     * Response to close request.
     */
    CLOSE_DONE,
    /**
     * Response to command request.
     */
    COMMAND_DONE,
    /**
     * Function-reported error in the communication.
     */
    FUNCTION_ERROR,
    /**
     * Unsolicited message from the function.
     */
    INDICATE_STATUS,
}
/**
 * Mobile Initiated Connection Only (MICO) Mode state.
 * 
 * The `MBIM_MICO_MODE_DEFAULT` value should only be used in set operations, it
 * should never be returned by the module upon a query.
 */
enum MicoMode {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
    /**
     * Device does not support MICO mode.
     */
    UNSUPPORTED,
    /**
     * Default.
     */
    DEFAULT,
}
/**
 * Modem configuration status.
 */
enum ModemConfigurationStatus {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * SIM is ready and configuration started.
     */
    STARTED,
    /**
     * SIM is ready and configuration completed.
     */
    COMPLETED,
}
/**
 * Enable or disable network idle hint.
 */
enum NetworkIdleHintState {
    /**
     * Disabled.
     */
    DISABLED,
    /**
     * Enabled.
     */
    ENABLED,
}
/**
 * Network errors.
 */
enum NwError {
    /**
     * No error. Since 1.28.
     */
    NONE,
    /**
     * IMSI unknown in the HLR.
     */
    IMSI_UNKNOWN_IN_HLR,
    /**
     * Illegal MS. Since 1.10.
     */
    ILLEGAL_MS,
    /**
     * IMSI unknown in the VLR.
     */
    IMSI_UNKNOWN_IN_VLR,
    /**
     * IMEI not accepted. Since 1.10.
     */
    IMEI_NOT_ACCEPTED,
    /**
     * Illegal ME.
     */
    ILLEGAL_ME,
    /**
     * GPRS not allowed.
     */
    GPRS_NOT_ALLOWED,
    /**
     * GPRS and non-GPRS not allowed.
     */
    GPRS_AND_NON_GPRS_NOT_ALLOWED,
    /**
     * MS identity cannot be derived by the network. Since 1.10.
     */
    MS_IDENTITY_NOT_DERIVED_BY_NETWORK,
    /**
     * Implicitly detached. Since 1.10.
     */
    IMPLICITLY_DETACHED,
    /**
     * PLMN not allowed.
     */
    PLMN_NOT_ALLOWED,
    /**
     * Location area not allowed.
     */
    LOCATION_AREA_NOT_ALLOWED,
    /**
     * Roaming not allowed in the location area.
     */
    ROAMING_NOT_ALLOWED_IN_LOCATION_AREA,
    /**
     * GPRS not allowed in PLMN.
     */
    GPRS_NOT_ALLOWED_IN_PLMN,
    /**
     * No cells in location area.
     */
    NO_CELLS_IN_LOCATION_AREA,
    /**
     * MSC temporarily not reachable. Since 1.10.
     */
    MSC_TEMPORARILY_NOT_REACHABLE,
    /**
     * Network failure.
     */
    NETWORK_FAILURE,
    /**
     * MAC failure. Since 1.10.
     */
    MAC_FAILURE,
    /**
     * Synch failure. Since 1.10.
     */
    SYNCH_FAILURE,
    /**
     * Congestion.
     */
    CONGESTION,
    /**
     * GSM authentication unacceptable. Since 1.10.
     */
    GSM_AUTHENTICATION_UNACCEPTABLE,
    /**
     * Not authorized for this CSG. Since 1.10.
     */
    NOT_AUTHORIZED_FOR_CSG,
    /**
     * Insufficient resources. Since 1.18.
     */
    INSUFFICIENT_RESOURCES,
    /**
     * Missing or unknown access point name. Since 1.10.
     */
    MISSING_OR_UNKNOWN_APN,
    /**
     * Unknown PDP address or PDP type. Since 1.18.
     */
    UNKNOWN_PDP_ADDRESS_OR_TYPE,
    /**
     * User authentication failed. Since 1.18.
     */
    USER_AUTHENTICATION_FAILED,
    /**
     * Activation rejected by GGSN, Serving GW or PDN GW. Since 1.18.
     */
    ACTIVATION_REJECTED_BY_GGSN_OR_GW,
    /**
     * Activation rejected, unspecified. Since 1.18.
     */
    ACTIVATION_REJECTED_UNSPECIFIED,
    /**
     * Service option not supported. Since 1.10.
     */
    SERVICE_OPTION_NOT_SUPPORTED,
    /**
     * Requested service option not subscribed. Since 1.10.
     */
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED,
    /**
     * Service option temporarily out of order. Since 1.10.
     */
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER,
    /**
     * No PDP context activated. Since 1.10.
     */
    NO_PDP_CONTEXT_ACTIVATED,
    /**
     * PDP type IPv4 only allowed. Since 1.18.
     */
    PDP_TYPE_IPV4_ONLY_ALLOWED,
    /**
     * PDP type IPv6 only allowed. Since 1.18.
     */
    PDP_TYPE_IPV6_ONLY_ALLOWED,
    /**
     * Maximum number of PDP contexts reached. Since 1.18.
     */
    MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED,
    /**
     * Requested APN not supported in current RAT and PLMN combination. Since 1.18.
     */
    REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN,
    /**
     * Semantically incorrect message. Since 1.10.
     */
    SEMANTICALLY_INCORRECT_MESSAGE,
    /**
     * Invalid mandatory information. Since 1.10.
     */
    INVALID_MANDATORY_INFORMATION,
    /**
     * Message type non-existent or not implemented. Since 1.10.
     */
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    /**
     * Message type not compatible with protocol state. Since 1.10.
     */
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    /**
     * Information element non-existent or not implemented. Since 1.10.
     */
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED,
    /**
     * Conditional IE error. Since 1.10.
     */
    CONDITIONAL_IE_ERROR,
    /**
     * Message not compatible with protocol state. Since 1.10.
     */
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE,
    /**
     * Protocol error, unspecified. Since 1.10.
     */
    PROTOCOL_ERROR_UNSPECIFIED,
    /**
     * APN restriction value incompatible with active PDP context. Since 1.18.
     */
    APN_RESTRICTION_VALUE_INCOMPATIBLE_WITH_ACTIVE_PDP_CONTEXT,
    /**
     * Multiple accesses to a PDN connection not allowed. Since 1.18.
     */
    MULTIPLE_ACCESSES_TO_A_PDN_CONNECTION_NOT_ALLOWED,
}
/**
 * Packet Service Action.
 */
enum PacketServiceAction {
    /**
     * Attach.
     */
    ATTACH,
    /**
     * Detach.
     */
    DETACH,
}
/**
 * Packet Service State.
 */
enum PacketServiceState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Attaching.
     */
    ATTACHING,
    /**
     * Attached.
     */
    ATTACHED,
    /**
     * Detaching.
     */
    DETACHING,
    /**
     * Detached.
     */
    DETACHED,
}
/**
 * Type of PCO structure.
 */
enum PcoType {
    /**
     * The PCO structure is complete.
     */
    COMPLETE,
    /**
     * The PCO structure is a subset of what was received from the network.
     */
    PARTIAL,
}
/**
 * Flags to use when reading the phonebook.
 */
enum PhonebookFlag {
    /**
     * Request all.
     */
    ALL,
    /**
     * Request single entry by index.
     */
    INDEX,
}
/**
 * Phonebook state.
 */
enum PhonebookState {
    /**
     * Not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Initialized
     */
    INITIALIZED,
}
/**
 * Flags to use when writing the phonebook.
 */
enum PhonebookWriteFlag {
    /**
     * Store the record in an unused slot.
     */
    UNUSED,
    /**
     * Index where to store the record.
     */
    INDEX,
}
/**
 * Format of the expected PIN code.
 */
enum PinFormat {
    /**
     * Unknown format.
     */
    UNKNOWN,
    /**
     * Numeric-only format.
     */
    NUMERIC,
    /**
     * Alphanumeric format.
     */
    ALPHANUMERIC,
}
/**
 * Whether the lock is enabled or disabled.
 */
enum PinMode {
    /**
     * Not supported.
     */
    NOT_SUPPORTED,
    /**
     * Enabled.
     */
    ENABLED,
    /**
     * Disabled.
     */
    DISABLED,
}
/**
 * Operation to perform on the PIN.
 */
enum PinOperation {
    /**
     * Enter the specified PIN into the device.
     */
    ENTER,
    /**
     * Enable the specified PIN.
     */
    ENABLE,
    /**
     * Disable the specified PIN.
     */
    DISABLE,
    /**
     * Change the specified PIN.
     */
    CHANGE,
}
/**
 * PIN States.
 */
enum PinState {
    /**
     * The device does not require a PIN.
     */
    UNLOCKED,
    /**
     * The device requires the user to enter a PIN.
     */
    LOCKED,
}
/**
 * PIN Types.
 */
enum PinType {
    /**
     * Unknown or unset.
     */
    UNKNOWN,
    /**
     * The PIN type is a custom type and is none of the other PIN types listed in this enumeration.
     */
    CUSTOM,
    /**
     * The PIN1 key.
     */
    PIN1,
    /**
     * The PIN2 key.
     */
    PIN2,
    /**
     * The device to SIM key.
     */
    DEVICE_SIM_PIN,
    /**
     * The device to very first SIM key.
     */
    DEVICE_FIRST_SIM_PIN,
    /**
     * The network personalization key.
     */
    NETWORK_PIN,
    /**
     * The network subset personalization key.
     */
    NETWORK_SUBSET_PIN,
    /**
     * The service provider (SP) personalization key.
     */
    SERVICE_PROVIDER_PIN,
    /**
     * The corporate personalization key.
     */
    CORPORATE_PIN,
    /**
     * The subsidy unlock key.
     */
    SUBSIDY_PIN,
    /**
     * The Personal Identification Number1 Unlock Key (PUK1).
     */
    PUK1,
    /**
     * The Personal Identification Number2 Unlock Key (PUK2).
     */
    PUK2,
    /**
     * The device to very first SIM PIN unlock key.
     */
    DEVICE_FIRST_SIM_PUK,
    /**
     * The network personalization unlock key.
     */
    NETWORK_PUK,
    /**
     * The network subset personalization unlock key.
     */
    NETWORK_SUBSET_PUK,
    /**
     * The service provider (SP) personalization unlock key.
     */
    SERVICE_PROVIDER_PUK,
    /**
     * The corporate personalization unlock key.
     */
    CORPORATE_PUK,
}
/**
 * MBIM protocol errors.
 */
enum ProtocolError {
    /**
     * Invalid MBIM error.
     */
    INVALID,
    /**
     * Timeout waiting for fragment.
     */
    TIMEOUTFRAGMENT,
    /**
     * Fragment received out of sequence.
     */
    FRAGMENTOUTOFSEQUENCE,
    /**
     * Length mismatch.
     */
    LENGTHMISMATCH,
    /**
     * Duplicated transaction ID.
     */
    DUPLICATEDTID,
    /**
     * Not opened.
     */
    NOTOPENED,
    /**
     * Unknown error.
     */
    UNKNOWN,
    /**
     * Cancel the operation.
     */
    CANCEL,
    /**
     * Maximum control transfer not supported.
     */
    MAXTRANSFER,
}
/**
 * QDU session result.
 */
enum QduFileType {
    /**
     * LE Package
     */
    PACKAGE,
}
/**
 * QDU Quectel Reboot session type.
 */
enum QduQuectelRebootType {
    /**
     * Reboot to Emergency Download mode
     */
    EDL,
}
/**
 * QDU Quectel Read Version session type.
 */
enum QduQuectelVersionType {
    /**
     * Firmware Build ID
     */
    ID,
}
/**
 * Action performed for the session initialization.
 */
enum QduSessionAction {
    /**
     * Start.
     */
    START,
    /**
     * Stop.
     */
    STOP,
}
/**
 * QDU session result.
 */
enum QduSessionResult {
    /**
     * Success
     */
    SUCCESS,
    /**
     * Failure
     */
    FAILURE,
}
/**
 * QDU session status.
 */
enum QduSessionStatus {
    /**
     * Update session is not active.
     */
    INACTIVE,
    /**
     * Updated files are being transferred from host to function or function is waiting host to send updated files.
     */
    FILE_TRANSFER,
    /**
     * The function is applying the update package.
     */
    APPLY_UPDATE,
}
/**
 * QDU session types.
 */
enum QduSessionType {
    /**
     * No update session.
     */
    NONE,
    /**
     * LE-based update procedure.
     */
    LE,
}
/**
 * Radio switch state.
 */
enum QuectelRadioSwitchState {
    /**
     * Radio is off.
     */
    OFF,
    /**
     * Radio is on.
     */
    ON,
    /**
     * Radio is FCC locked.
     */
    FCC_LOCKED,
}
/**
 * Radio switch state.
 */
enum RadioSwitchState {
    /**
     * Radio is off.
     */
    OFF,
    /**
     * Radio is on.
     */
    ON,
}
/**
 * Type of registration requested.
 */
enum RegisterAction {
    /**
     * Automatic registration.
     */
    AUTOMATIC,
    /**
     * Manual registration.
     */
    MANUAL,
}
/**
 * Type of registration requested.
 */
enum RegisterMode {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Automatic registration.
     */
    AUTOMATIC,
    /**
     * Manual registration.
     */
    MANUAL,
}
/**
 * Registration state.
 */
enum RegisterState {
    /**
     * Unknown registration state.
     */
    UNKNOWN,
    /**
     * Not registered.
     */
    DEREGISTERED,
    /**
     * Searching.
     */
    SEARCHING,
    /**
     * Registered in home network.
     */
    HOME,
    /**
     * Registered in roaming network.
     */
    ROAMING,
    /**
     * Registered in a preferred roaming network.
     */
    PARTNER,
    /**
     * Registration denied.
     */
    DENIED,
}
/**
 * SAR backoff state.
 */
enum SarBackoffState {
    /**
     * SAR backoff is disabled.
     */
    DISABLED,
    /**
     * SAR backoff is enabled.
     */
    ENABLED,
}
/**
 * SAR backoff mechanism control modes.
 */
enum SarControlMode {
    /**
     * SAR backoff is controlled by the modem directly.
     */
    DEVICE,
    /**
     * SAR backoff is controlled by the host operating system.
     */
    OS,
}
/**
 * Whether the Wi-Fi and cellular SAR are integrated at hardware level.
 */
enum SarWifiHardwareState {
    /**
     * Integrated.
     */
    INTEGRATED,
    /**
     * Not integrated.
     */
    NOT_INTEGRATED,
}
/**
 * Enumeration of the generic MBIM services.
 */
enum Service {
    /**
     * Invalid service.
     */
    INVALID,
    /**
     * Basic connectivity service.
     */
    BASIC_CONNECT,
    /**
     * SMS messaging service.
     */
    SMS,
    /**
     * USSD service.
     */
    USSD,
    /**
     * Phonebook service.
     */
    PHONEBOOK,
    /**
     * SIM toolkit service.
     */
    STK,
    /**
     * Authentication service.
     */
    AUTH,
    /**
     * Device Service Stream service.
     */
    DSS,
    /**
     * Microsoft Firmware ID service. Since 1.8.
     */
    MS_FIRMWARE_ID,
    /**
     * Microsoft Host Shutdown service. Since 1.8.
     */
    MS_HOST_SHUTDOWN,
    /**
     * Proxy Control service. Since 1.10.
     */
    PROXY_CONTROL,
    /**
     * QMI-over-MBIM service. Since 1.14.
     */
    QMI,
    /**
     * ATT Device service. Since 1.16.
     */
    ATDS,
    /**
     * Intel firmware update service. Since 1.16.
     */
    INTEL_FIRMWARE_UPDATE,
    /**
     * Microsoft basic connectivity extensions service. Since 1.18.
     */
    MS_BASIC_CONNECT_EXTENSIONS,
    /**
     * Microsoft SAR service. Since 1.26.
     */
    MS_SAR,
    /**
     * QDU firmware update service. Since 1.26.
     */
    QDU,
    /**
     * Microsoft UICC Low Level Access service. Since 1.26.
     */
    MS_UICC_LOW_LEVEL_ACCESS,
    /**
     * Quectel specific operations. Since 1.26.2.
     */
    QUECTEL,
}
/**
 * Type of encoding of a CDMA SMS.
 */
enum SmsCdmaEncoding {
    /**
     * Octet.
     */
    OCTET,
    /**
     * EPM.
     */
    EPM,
    /**
     * 7-bit ASCII.
     */
    TODO_7BIT_ASCII,
    /**
     * LA5.
     */
    LA5,
    /**
     * Unicode.
     */
    UNICODE,
    /**
     * Shift JIS.
     */
    SHIFT_JIS,
    /**
     * Korean.
     */
    KOREAN,
    /**
     * Latin hebrew.
     */
    LATIN_HEBREW,
    /**
     * Latin.
     */
    LATIN,
    /**
     * 7-bit GSM.
     */
    GSM_7BIT,
}
/**
 * Language of a CDMA SMS.
 */
enum SmsCdmaLang {
    /**
     * Unknown language.
     */
    UNKNOWN,
    /**
     * English.
     */
    ENGLISH,
    /**
     * French.
     */
    FRENCH,
    /**
     * Spanish.
     */
    SPANISH,
    /**
     * Japanese.
     */
    JAPANESE,
    /**
     * Korean.
     */
    KOREAN,
    /**
     * Chinese.
     */
    CHINESE,
    /**
     * Hebrew.
     */
    HEBREW,
}
/**
 * Flags to use when requesting to read SMS. `MBIM_SMS_FLAG_ALL` and
 * `MBIM_SMS_FLAG_NEW` are mandatory, all the others are optional.
 */
enum SmsFlag {
    /**
     * All.
     */
    ALL,
    /**
     * Index.
     */
    INDEX,
    /**
     * New.
     */
    NEW,
    /**
     * Old.
     */
    OLD,
    /**
     * Sent.
     */
    SENT,
    /**
     * Draft.
     */
    DRAFT,
}
/**
 * SMS format.
 */
enum SmsFormat {
    /**
     * PDU format.
     */
    PDU,
    /**
     * CDMA format.
     */
    CDMA,
}
/**
 * Status of a SMS message.
 */
enum SmsStatus {
    /**
     * New.
     */
    NEW,
    /**
     * Old.
     */
    OLD,
    /**
     * Draft.
     */
    DRAFT,
    /**
     * Sent.
     */
    SENT,
}
/**
 * SMS status flags.
 */
enum SmsStatusFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Message store is full.
     */
    MESSAGE_STORE_FULL,
    /**
     * New non-Class 0 message arrived.
     */
    NEW_MESSAGE,
}
/**
 * State of the SMS storage.
 */
enum SmsStorageState {
    /**
     * Storage not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Storage initialized.
     */
    INITIALIZED,
}
/**
 * Status of the MBIM request.
 */
enum StatusError {
    /**
     * Success, no error.
     */
    NONE,
    /**
     * Busy.
     */
    BUSY,
    /**
     * Failure.
     */
    FAILURE,
    /**
     * SIM not inserted.
     */
    SIMNOTINSERTED,
    /**
     * Bad SIM.
     */
    BADSIM,
    /**
     * PIN required.
     */
    PINREQUIRED,
    /**
     * PIN disabled.
     */
    PINDISABLED,
    /**
     * Not registered.
     */
    NOTREGISTERED,
    /**
     * Providers not found.
     */
    PROVIDERSNOTFOUND,
    /**
     * No device support.
     */
    NODEVICESUPPORT,
    /**
     * Provider not visible.
     */
    PROVIDERNOTVISIBLE,
    /**
     * Data class not available.
     */
    DATACLASSNOTAVAILABLE,
    /**
     * Packet service detached.
     */
    PACKETSERVICEDETACHED,
    /**
     * Max activated contexts.
     */
    MAXACTIVATEDCONTEXTS,
    /**
     * Not initialized.
     */
    NOTINITIALIZED,
    /**
     * Voice call in progress.
     */
    VOICECALLINPROGRESS,
    /**
     * Context not activated.
     */
    CONTEXTNOTACTIVATED,
    /**
     * Service not activated.
     */
    SERVICENOTACTIVATED,
    /**
     * Invalid access string.
     */
    INVALIDACCESSSTRING,
    /**
     * Invalid user name or password.
     */
    INVALIDUSERNAMEPWD,
    /**
     * Radio power off.
     */
    RADIOPOWEROFF,
    /**
     * Invalid parameters.
     */
    INVALIDPARAMETERS,
    /**
     * Read failure.
     */
    READFAILURE,
    /**
     * Write failure.
     */
    WRITEFAILURE,
    /**
     * No phonebook.
     */
    NOPHONEBOOK,
    /**
     * Parameter too long.
     */
    PARAMETERTOOLONG,
    /**
     * SIM toolkit busy.
     */
    STKBUSY,
    /**
     * Operation not allowed.
     */
    OPERATIONNOTALLOWED,
    /**
     * Memory failure.
     */
    MEMORYFAILURE,
    /**
     * Invalid memory index.
     */
    INVALIDMEMORYINDEX,
    /**
     * Memory full.
     */
    MEMORYFULL,
    /**
     * Filter not supported.
     */
    FILTERNOTSUPPORTED,
    /**
     * DSS instance limit.
     */
    DSSINSTANCELIMIT,
    /**
     * Invalid device service operation.
     */
    INVALIDDEVICESERVICEOPERATION,
    /**
     * Incorrect AUTN when sending authentication.
     */
    AUTHINCORRECTAUTH,
    /**
     * Synchronization failure during the authentication.
     */
    AUTHSYNCFAILURE,
    /**
     * AMF bit not set in the authentication.
     */
    AUTHAMFNOTSET,
    /**
     * ContextType not supported by the operation. Since 1.16.
     */
    CONTEXTNOTSUPPORTED,
    /**
     * Unknown SMSC address.
     */
    SMSUNKNOWNSMSCADDRESS,
    /**
     * Network timeout when sending SMS.
     */
    SMSNETWORKTIMEOUT,
    /**
     * Language not supported in SMS.
     */
    SMSLANGNOTSUPPORTED,
    /**
     * Encoding not supported in SMS.
     */
    SMSENCODINGNOTSUPPORTED,
    /**
     * Format not supported in SMS.
     */
    SMSFORMATNOTSUPPORTED,
}
/**
 * Proactive command profile.
 */
enum StkPacProfile {
    /**
     * Command not handled by function but handled by host.
     */
    NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST,
    /**
     * Command not handled by function but may be handled by host.
     */
    NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST,
    /**
     * Command handled by function without informing the host.
     */
    HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST,
    /**
     * Command handled by function without informing the host, but notifications may be sent to host.
     */
    HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE,
    /**
     * Command handled by function, and the function wil also send notification to the host.
     */
    HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED,
    /**
     * Command handled by function, but the host may request full control of the command.
     */
    HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST,
    /**
     * Command will be forwarded to the host. If the host decides not to receive the command, the function will not handle it.
     */
    HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE,
    /**
     * Command will be forwarded to the host. If the host decides not to receive the command, the function will handle it.
     */
    HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE,
}
/**
 * Type of proactive command.
 */
enum StkPacType {
    /**
     * Host is requested to handle the Proactive command.
     */
    PROACTIVE_COMMAND,
    /**
     * Proactive command is handled by the function, but the host is notified.
     */
    NOTIFICATION,
}
/**
 * Ready state of the subscriber.
 */
enum SubscriberReadyState {
    /**
     * Not initialized.
     */
    NOT_INITIALIZED,
    /**
     * Initialized.
     */
    INITIALIZED,
    /**
     * SIM not inserted.
     */
    SIM_NOT_INSERTED,
    /**
     * Bad SIM.
     */
    BAD_SIM,
    /**
     * Failure.
     */
    FAILURE,
    /**
     * Not activated.
     */
    NOT_ACTIVATED,
    /**
     * Device locked.
     */
    DEVICE_LOCKED,
    /**
     * The card is ready but does not
     *  have any enabled profiles (MS MBIMEx). Since 1.28.
     */
    NO_ESIM_PROFILE,
}
/**
 * Type of the MBIM TLV.
 */
enum TlvType {
    /**
     * Invalid TLV type.
     */
    INVALID,
    /**
     * UE policies.
     */
    UE_POLICITES,
    /**
     * Single NSSAI.
     */
    SINGLE_NSSAI,
    /**
     * Allowed NSSAI.
     */
    ALLOWED_NSSAI,
    /**
     * Configured NSSAI.
     */
    CFG_NSSAI,
    /**
     * Default configured NSSAI.
     */
    DFLT_CFG_NSSAI,
    /**
     * Preconfigured default configured NSSAI.
     */
    PRECFG_DFLT_CFG_NSSAI,
    /**
     * Rejected NSSAI.
     */
    REJ_NSSAI,
    /**
     * Local Area Data Network (LADN).
     */
    LADN,
    /**
     * Tracking Area Identity (TAI).
     */
    TAI,
    /**
     * WCHAR string.
     */
    WCHAR_STR,
    /**
     * Array of 1 or more `guint1`6 entries.
     */
    UINT16_TBL,
    /**
     * Extensible Authentication Protocol packet.
     */
    EAP_PACKET,
    /**
     * Protocol Configuration Option (PCO).
     */
    PCO,
    /**
     * One or more route selection descriptors.
     */
    ROUTE_SELECTION_DESCRIPTORS,
    /**
     * A traffic parameters record.
     */
    TRAFFIC_PARAMETERS,
    /**
     * Wake command.
     */
    WAKE_COMMAND,
    /**
     * Wake packet.
     */
    WAKE_PACKET,
}
/**
 * Whether modem channel transmission status notification is disabled or enabled.
 */
enum TransmissionNotificationStatus {
    /**
     * Notification disabled.
     */
    DISABLED,
    /**
     * Notification enabled.
     */
    ENABLED,
}
/**
 * Whether modem is having TX traffic every hysteresis timeout.
 */
enum TransmissionState {
    /**
     * Modem was not actively transmitting data.
     */
    INACTIVE,
    /**
     * Modem was actively transmitting data.
     */
    ACTIVE,
}
/**
 * Specifies the type of class byte definition.
 */
enum UiccClassByteType {
    /**
     * Defined according to first interindustry definition in ISO 7816-4.
     */
    INTER_INDUSTRY,
    /**
     * Defined according to extended definition in ETSI 102 221.
     */
    EXTENDED,
}
/**
 * Pass through actions host can specify to modem. Upon reset
 * treats UICC as if pass through or as a regular UICC
 */
enum UiccPassThroughAction {
    /**
     * Disable pass through.
     */
    DISABLE,
    /**
     * Enable pass through.
     */
    ENABLE,
}
/**
 * Pass through status of the modem specifies to the host.
 */
enum UiccPassThroughStatus {
    /**
     * Pass through disabled.
     */
    DISABLED,
    /**
     * Pass through enabled.
     */
    ENABLED,
}
/**
 * Specifies whether apdu is exchanged using secure messaging.
 */
enum UiccSecureMessaging {
    /**
     * No secure messaging.
     */
    NONE,
    /**
     * Secure, command header not authenticated.
     */
    NO_HDR_AUTH,
}
/**
 * MbimUiccSlotState
 */
enum UiccSlotState {
    /**
     * The modem is still in the process of initializing so the SIM slot state is not deterministic.
     */
    STATE_UNKNOWN,
    /**
     * The UICC slot is powered off and no card is present.
     */
    SATE_OFF_EMPTY,
    /**
     * The UICC slot is powered off.
     */
    STATE_OFF,
    /**
     * The UICC slot is empty(there is no card in it).
     */
    STATE_EMPTY,
    /**
     * The UICC slot is occupied and powered on but the card within it is not yet ready.
     */
    STATE_NOT_READY,
    /**
     * The UICC slot is occupied and the card within it is ready.
     */
    STATE_ACTIVE,
    /**
     * The UICC slot is occupied and powreed on but the card is in an error state and cannot be used until it is next reset.
     */
    STATE_ERROR,
    /**
     * The card in the slot is an eSIM with an active profile and is ready to accept commands.
     */
    STATE_ACTIVE_ESIM,
    /**
     * The card in the slot is an eSIM with no profiles(or no active profiles) and is ready to accept commands.
     */
    STATE_ACTIVE_ESIM_NO_PROFILES,
}
/**
 * USSD action.
 */
enum UssdAction {
    /**
     * Initiate USSD session.
     */
    INITIATE,
    /**
     * Continue USSD session.
     */
    CONTINUE,
    /**
     * Cancel USSD session.
     */
    CANCEL,
}
/**
 * USSD response.
 */
enum UssdResponse {
    /**
     * No action required.
     */
    NO_ACTION_REQUIRED,
    /**
     * An action is required.
     */
    ACTION_REQUIRED,
    /**
     * Terminated by network
     */
    TERMINATED_BY_NETWORK,
    /**
     * Other local client.
     */
    OTHER_LOCAL_CLIENT,
    /**
     * Operation not supported.
     */
    OPERATION_NOT_SUPPORTED,
    /**
     * Network timeout.
     */
    NETWORK_TIMEOUT,
}
/**
 * Session state.
 */
enum UssdSessionState {
    /**
     * New session.
     */
    NEW_SESSION,
    /**
     * Existing session.
     */
    EXISTING_SESSION,
}
/**
 * Type of action to perform when listing visible providers.
 */
enum VisibleProvidersAction {
    /**
     * Full scan.
     */
    FULL_SCAN,
    /**
     * Locate preferred multicarrier providers.
     */
    RESTRICTED_SCAN,
}
/**
 * Voice Call State.
 */
enum VoiceCallState {
    /**
     * None.
     */
    NONE,
    /**
     * Progress.
     */
    IN_PROGRESS,
    /**
     * Up.
     */
    HANG_UP,
}
/**
 * Voice class.
 */
enum VoiceClass {
    /**
     * Unknown voice class.
     */
    UNKNOWN,
    /**
     * Device doesn't support voice.
     */
    NO_VOICE,
    /**
     * Device supports separate voice and data connections.
     */
    SEPARATED_VOICE_DATA,
    /**
     * Device supports simultaneous voice and data connections.
     */
    SIMULTANEOUS_VOICE_DATA,
}
/**
 * Wake type.
 */
enum WakeType {
    /**
     * A CID response wakes device.
     */
    CID_RESPONSE,
    /**
     * A CID indication wakes device.
     */
    CID_INDICATION,
    /**
     * An incoming packet wakes device.
     */
    PACKET,
}
/**
 * Cellular class.
 * @bitfield 
 */
enum CellularClass {
    /**
     * Device is 3GPP.
     */
    GSM,
    /**
     * Device is 3GPP2.
     */
    CDMA,
}
/**
 * Control capabilities.
 * @bitfield 
 */
enum CtrlCaps {
    /**
     * None. Since 1.28.
     */
    NONE,
    /**
     * Device allows manual network selection.
     */
    REG_MANUAL,
    /**
     * Device has a hardware radio power switch.
     */
    HW_RADIO_SWITCH,
    /**
     * The CDMA function supports Mobile IP.
     */
    CDMA_MOBILE_IP,
    /**
     * The CDMA function supports Simple IP.
     */
    CDMA_SIMPLE_IP,
    /**
     * Device can work with multiple providers.
     */
    MULTI_CARRIER,
    /**
     * Device supports eSIM (MS MBIMEx v3.0). Since 1.28.
     */
    ESIM,
    /**
     * Device supports including the route selection descriptors as part of the UE policies (MS MBIMEx v3.0). Since 1.28.
     */
    UE_POLICY_ROUTE_SELECTION,
    /**
     * Device supports SIM hot-swap (MS MBIMEx v3.0). Since 1.28.
     */
    SIM_HOT_SWAP_CAPABLE,
}
/**
 * Data class.
 * 
 * Both 5G related values are introduced in MBIM Extension v2.0, but given
 * the update is compatible with the original MBIM enumeration, devices may
 * report them without having enabled MBIM Extension v2.0 support.
 * 
 * This type is updated in MBIM Extension v3.0 in a non-backwards compatible
 * way, see #MbimDataClassV3.
 * @bitfield 
 */
enum DataClass {
    /**
     * GPRS.
     */
    GPRS,
    /**
     * EDGE.
     */
    EDGE,
    /**
     * UMTS.
     */
    UMTS,
    /**
     * HSDPA.
     */
    HSDPA,
    /**
     * HSUPA.
     */
    HSUPA,
    /**
     * LTE.
     */
    LTE,
    /**
     * 5G NSA (MS MBIMEx v2.0). Since 1.28.
     */
    TODO_5G_NSA,
    /**
     * 5G SA (MS MBIMEx v2.0). Since 1.28.
     */
    TODO_5G_SA,
    /**
     * 1xRTT.
     */
    TODO_1XRTT,
    /**
     * 1xEV-DO.
     */
    TODO_1XEVDO,
    /**
     * 1xEV-DO RevA
     */
    TODO_1XEVDO_REVA,
    /**
     * 1xEV-DV.
     */
    TODO_1XEVDV,
    /**
     * 3xRTT.
     */
    TODO_3XRTT,
    /**
     * 1xEV-DO RevB.
     */
    TODO_1XEVDO_REVB,
    /**
     * UMB.
     */
    UMB,
    /**
     * Custom.
     */
    CUSTOM,
}
/**
 * Data class update in MBIMEx v3.0.
 * 
 * There is now a single flag for 5G, and the new #MbimDataSubclass helps to
 * identify the specific 5G setup.
 * 
 * This type should be considered incompatible with #MbimDataClass.
 * @bitfield 
 */
enum DataClassV3 {
    /**
     * GPRS.
     */
    GPRS,
    /**
     * EDGE.
     */
    EDGE,
    /**
     * UMTS.
     */
    UMTS,
    /**
     * HSDPA.
     */
    HSDPA,
    /**
     * HSUPA.
     */
    HSUPA,
    /**
     * LTE.
     */
    LTE,
    /**
     * 5G.
     */
    TODO_5G,
    /**
     * 1xRTT.
     */
    TODO_1XRTT,
    /**
     * 1xEV-DO.
     */
    TODO_1XEVDO,
    /**
     * 1xEV-DO RevA
     */
    TODO_1XEVDO_REVA,
    /**
     * 1xEV-DV.
     */
    TODO_1XEVDV,
    /**
     * 3xRTT.
     */
    TODO_3XRTT,
    /**
     * 1xEV-DO RevB.
     */
    TODO_1XEVDO_REVB,
    /**
     * UMB.
     */
    UMB,
    /**
     * Custom.
     */
    CUSTOM,
}
/**
 * Flags specifying the data subclass.
 * @bitfield 
 */
enum DataSubclass {
    /**
     * No data subclass.
     */
    NONE,
    /**
     * EUTRAN and NR dual connectivity as in 5G option 3.
     */
    TODO_5G_ENDC,
    /**
     * Standalone NR as in 5G option 2.
     */
    TODO_5G_NR,
    /**
     * NR and EUTRAN dual connectivity as in 5G option 4.
     */
    TODO_5G_NEDC,
    /**
     * eLTE as in 5G option 5.
     */
    TODO_5G_ELTE,
    /**
     * Next-gen eLTE and NR dual connectivity as in 5G option 7.
     */
    TODO_5G_NGENDC,
}
/**
 * Flags to specify which actions to be performed when the device is open.
 * @bitfield 
 */
enum DeviceOpenFlags {
    /**
     * None.
     */
    NONE,
    /**
     * Try to open the port through the 'mbim-proxy'.
     */
    PROXY,
    /**
     * Try to enable MS MBIMEx 2.0 support. Since 1.28.
     */
    MS_MBIMEX_V2,
    /**
     * Try to enable MS MBIMEx 3.0 support. Since 1.28.
     */
    MS_MBIMEX_V3,
}
/**
 * Frequency Range.
 * @bitfield 
 */
enum FrequencyRange {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Frequency range 1 (FR1) in 3GPP TS 38.101-1 (Sub-6G).
     */
    TODO_1,
    /**
     * FR2 in 3GPP TS 38.101-2 (mmWave).
     */
    TODO_2,
}
/**
 * Mask of available information about an IP address.
 * @bitfield 
 */
enum IPConfigurationAvailableFlag {
    /**
     * No info available.
     */
    NONE,
    /**
     * Address info available.
     */
    ADDRESS,
    /**
     * Gateway info available.
     */
    GATEWAY,
    /**
     * DNS info available.
     */
    DNS,
    /**
     * MTU info available.
     */
    MTU,
}
/**
 * State of the provider.
 * @bitfield 
 */
enum ProviderState {
    /**
     * Unknown.
     */
    UNKNOWN,
    /**
     * Home operator.
     */
    HOME,
    /**
     * Provider blocked.
     */
    FORBIDDEN,
    /**
     * Provider is in the preferred list.
     */
    PREFERRED,
    /**
     * Provider is visible.
     */
    VISIBLE,
    /**
     * Currently registered to the provider.
     */
    REGISTERED,
    /**
     * Provider is a preferred multicarrier network.
     */
    PREFERRED_MULTICARRIER,
}
/**
 * Flag specifying how the ready info is treated.
 * @bitfield 
 */
enum ReadyInfoFlag {
    /**
     * Device in normal mode. Since 1.16.
     */
    NONE,
    /**
     * Request to avoid displaying subscriber ID.
     */
    PROTECT_UNIQUE_ID,
}
/**
 * Registration flags.
 * @bitfield 
 */
enum RegistrationFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Network doesn't support manual network selection.
     */
    MANUAL_SELECTION_NOT_AVAILABLE,
    /**
     * Modem should auto-attach to the network after registration. Since 1.8.
     */
    PACKET_SERVICE_AUTOMATIC_ATTACH,
}
/**
 * SIM class.
 * @bitfield 
 */
enum SimClass {
    /**
     * No physical SIM.
     */
    LOGICAL,
    /**
     * Physical removable SIM.
     */
    REMOVABLE,
}
/**
 * SMS capabilities.
 * @bitfield 
 */
enum SmsCaps {
    /**
     * Can receive in PDU mode.
     */
    PDU_RECEIVE,
    /**
     * Can send in PDU mode.
     */
    PDU_SEND,
    /**
     * Can receive in text mode.
     */
    TEXT_RECEIVE,
    /**
     * Can send in text mode.
     */
    TEXT_SEND,
}
/**
 * Flags specifying SIM related details.
 * @bitfield 
 */
enum SubscriberReadyStatusFlag {
    /**
     * None.
     */
    NONE,
    /**
     * Whether the SIM is an eSIM or not.
     */
    ESIM,
    /**
     * Whether the SIM removability details are know or not.
     */
    SIM_REMOVABILITY_KNOWN,
    /**
     * Whether the SIM is removable or not, valid only if `MBIM_SUBSCRIBER_READY_STATUS_FLAG_SIM_REMOVABLITY_KNOWN` is also given.
     */
    SIM_REMOVABLE,
}
const DBUS_ERROR_PREFIX: string
/**
 * Symbol defining the #MbimDevice:device-file property.
 */
const DEVICE_FILE: string
/**
 * Symbol defining the #MbimDevice:device-in-session property.
 */
const DEVICE_IN_SESSION: string
/**
 * Symbol defining the maximum supported session id.
 */
const DEVICE_SESSION_ID_MAX: number
/**
 * Symbol defining the minimum supported session id..
 */
const DEVICE_SESSION_ID_MIN: number
/**
 * Symbol defining the #MbimDevice::device-error signal.
 */
const DEVICE_SIGNAL_ERROR: string
/**
 * Symbol defining the #MbimDevice::device-indicate-status signal.
 */
const DEVICE_SIGNAL_INDICATE_STATUS: string
/**
 * Symbol defining the #MbimDevice::device-removed signal.
 */
const DEVICE_SIGNAL_REMOVED: string
/**
 * Symbol defining the #MbimDevice:device-transaction-id property.
 */
const DEVICE_TRANSACTION_ID: string
/**
 * Evaluates to the major version number of libmbim-glib which this source
 * is compiled against.
 */
const MAJOR_VERSION: number
/**
 * Evaluates to the micro version number of libmbim-glib which this source
 * compiled against.
 */
const MICRO_VERSION: number
/**
 * Evaluates to the minor version number of libmbim-glib which this source
 * is compiled against.
 */
const MINOR_VERSION: number
/**
 * Symbol defining the #MbimProxy:mbim-proxy-n-clients property.
 */
const PROXY_N_CLIENTS: string
/**
 * Symbol defining the #MbimProxy:mbim-proxy-n-devices property.
 */
const PROXY_N_DEVICES: string
/**
 * Symbol defining the default abstract socket name where the #MbimProxy will listen.
 */
const PROXY_SOCKET_PATH: string
/**
 * Gets the nickname string for the #MbimAccessMediaType specified at `val`.
 * @param val a MbimAccessMediaType.
 */
function access_media_type_get_string(val: AccessMediaType): string
/**
 * Gets the nickname string for the #MbimActivationCommand specified at `val`.
 * @param val a MbimActivationCommand.
 */
function activation_command_get_string(val: ActivationCommand): string
/**
 * Gets the nickname string for the #MbimActivationState specified at `val`.
 * @param val a MbimActivationState.
 */
function activation_state_get_string(val: ActivationState): string
/**
 * Frees the memory allocated for the array of #MbimAtdsProvider structs.
 * @param array a #NULL terminated array of #MbimAtdsProvider structs.
 */
function atds_provider_array_free(array: AtdsProviderArray): void
/**
 * Gets the nickname string for the #MbimAtdsProviderPlmnMode specified at `val`.
 * @param val a MbimAtdsProviderPlmnMode.
 */
function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string
/**
 * Gets the nickname string for the #MbimAtdsRatMode specified at `val`.
 * @param val a MbimAtdsRatMode.
 */
function atds_rat_mode_get_string(val: AtdsRatMode): string
/**
 * Gets the nickname string for the #MbimAuthProtocol specified at `val`.
 * @param val a MbimAuthProtocol.
 */
function auth_protocol_get_string(val: AuthProtocol): string
/**
 * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
 * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
 */
function cell_info_cdma_array_free(array: CellInfoCdmaArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
 */
function cell_info_neighboring_gsm_array_free(array: CellInfoNeighboringGsmArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
 */
function cell_info_neighboring_lte_array_free(array: CellInfoNeighboringLteArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
 */
function cell_info_neighboring_nr_array_free(array: CellInfoNeighboringNrArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
 */
function cell_info_neighboring_tdscdma_array_free(array: CellInfoNeighboringTdscdmaArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
 * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
 */
function cell_info_neighboring_umts_array_free(array: CellInfoNeighboringUmtsArray): void
/**
 * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
 * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
 */
function cell_info_serving_nr_array_free(array: CellInfoServingNrArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimCellularClass in `mask`.
 * @param mask bitmask of MbimCellularClass values.
 */
function cellular_class_build_string_from_mask(mask: CellularClass): string
/**
 * Gets the nickname string for the #MbimCidAtds specified at `val`.
 * @param val a MbimCidAtds.
 */
function cid_atds_get_string(val: CidAtds): string
/**
 * Gets the nickname string for the #MbimCidAuth specified at `val`.
 * @param val a MbimCidAuth.
 */
function cid_auth_get_string(val: CidAuth): string
/**
 * Gets the nickname string for the #MbimCidBasicConnect specified at `val`.
 * @param val a MbimCidBasicConnect.
 */
function cid_basic_connect_get_string(val: CidBasicConnect): string
/**
 * Checks whether the given command allows notifying.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
function cid_can_notify(service: Service, cid: number): boolean
/**
 * Checks whether the given command allows querying.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
function cid_can_query(service: Service, cid: number): boolean
/**
 * Checks whether the given command allows setting.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
function cid_can_set(service: Service, cid: number): boolean
/**
 * Gets the nickname string for the #MbimCidDss specified at `val`.
 * @param val a MbimCidDss.
 */
function cid_dss_get_string(val: CidDss): string
/**
 * Gets a printable string for the command specified by the `service` and the
 * `cid`.
 * @param service a #MbimService.
 * @param cid a command ID.
 */
function cid_get_printable(service: Service, cid: number): string
/**
 * Gets the nickname string for the #MbimCidIntelFirmwareUpdate specified at `val`.
 * @param val a MbimCidIntelFirmwareUpdate.
 */
function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string
/**
 * Gets the nickname string for the #MbimCidMsBasicConnectExtensions specified at `val`.
 * @param val a MbimCidMsBasicConnectExtensions.
 */
function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string
/**
 * Gets the nickname string for the #MbimCidMsFirmwareId specified at `val`.
 * @param val a MbimCidMsFirmwareId.
 */
function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string
/**
 * Gets the nickname string for the #MbimCidMsHostShutdown specified at `val`.
 * @param val a MbimCidMsHostShutdown.
 */
function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string
/**
 * Gets the nickname string for the #MbimCidMsSar specified at `val`.
 * @param val a MbimCidMsSar.
 */
function cid_ms_sar_get_string(val: CidMsSar): string
/**
 * Gets the nickname string for the #MbimCidMsUiccLowLevelAccess specified at `val`.
 * @param val a MbimCidMsUiccLowLevelAccess.
 */
function cid_ms_uicc_low_level_access_get_string(val: CidMsUiccLowLevelAccess): string
/**
 * Gets the nickname string for the #MbimCidPhonebook specified at `val`.
 * @param val a MbimCidPhonebook.
 */
function cid_phonebook_get_string(val: CidPhonebook): string
/**
 * Gets the nickname string for the #MbimCidProxyControl specified at `val`.
 * @param val a MbimCidProxyControl.
 */
function cid_proxy_control_get_string(val: CidProxyControl): string
/**
 * Gets the nickname string for the #MbimCidQdu specified at `val`.
 * @param val a MbimCidQdu.
 */
function cid_qdu_get_string(val: CidQdu): string
/**
 * Gets the nickname string for the #MbimCidQmi specified at `val`.
 * @param val a MbimCidQmi.
 */
function cid_qmi_get_string(val: CidQmi): string
/**
 * Gets the nickname string for the #MbimCidQuectel specified at `val`.
 * @param val a MbimCidQuectel.
 */
function cid_quectel_get_string(val: CidQuectel): string
/**
 * Gets the nickname string for the #MbimCidSms specified at `val`.
 * @param val a MbimCidSms.
 */
function cid_sms_get_string(val: CidSms): string
/**
 * Gets the nickname string for the #MbimCidStk specified at `val`.
 * @param val a MbimCidStk.
 */
function cid_stk_get_string(val: CidStk): string
/**
 * Gets the nickname string for the #MbimCidUssd specified at `val`.
 * @param val a MbimCidUssd.
 */
function cid_ussd_get_string(val: CidUssd): string
/**
 * Gets the nickname string for the #MbimCompression specified at `val`.
 * @param val a MbimCompression.
 */
function compression_get_string(val: Compression): string
/**
 * Gets the nickname string for the #MbimContextIpType specified at `val`.
 * @param val a MbimContextIpType.
 */
function context_ip_type_get_string(val: ContextIpType): string
/**
 * Gets the nickname string for the #MbimContextMediaType specified at `val`.
 * @param val a MbimContextMediaType.
 */
function context_media_type_get_string(val: ContextMediaType): string
/**
 * Gets the nickname string for the #MbimContextOperation specified at `val`.
 * @param val a MbimContextOperation.
 */
function context_operation_get_string(val: ContextOperation): string
/**
 * Gets the nickname string for the #MbimContextRoamingControl specified at `val`.
 * @param val a MbimContextRoamingControl.
 */
function context_roaming_control_get_string(val: ContextRoamingControl): string
/**
 * Gets the nickname string for the #MbimContextSource specified at `val`.
 * @param val a MbimContextSource.
 */
function context_source_get_string(val: ContextSource): string
/**
 * Gets the nickname string for the #MbimContextState specified at `val`.
 * @param val a MbimContextState.
 */
function context_state_get_string(val: ContextState): string
/**
 * Gets the nickname string for the #MbimContextType specified at `val`.
 * @param val a MbimContextType.
 */
function context_type_get_string(val: ContextType): string
/**
 * Gets the nickname string for the #MbimCoreError specified at `val`.
 * @param val a MbimCoreError.
 */
function core_error_get_string(val: CoreError): string
function core_error_quark(): GLib.Quark
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimCtrlCaps in `mask`.
 * @param mask bitmask of MbimCtrlCaps values.
 */
function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataClass in `mask`.
 * @param mask bitmask of MbimDataClass values.
 */
function data_class_build_string_from_mask(mask: DataClass): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataClassV3 in `mask`.
 * @param mask bitmask of MbimDataClassV3 values.
 */
function data_class_v3_build_string_from_mask(mask: DataClassV3): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimDataSubclass in `mask`.
 * @param mask bitmask of MbimDataSubclass values.
 */
function data_subclass_build_string_from_mask(mask: DataSubclass): string
/**
 * Gets the nickname string for the #MbimDefaultPduActivationHint specified at `val`.
 * @param val a MbimDefaultPduActivationHint.
 */
function default_pdu_activation_hint_get_string(val: DefaultPduActivationHint): string
/**
 * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
 * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
 */
function device_service_element_array_free(array: DeviceServiceElementArray): void
/**
 * Gets the nickname string for the #MbimDeviceType specified at `val`.
 * @param val a MbimDeviceType.
 */
function device_type_get_string(val: DeviceType): string
/**
 * Gets the nickname string for the #MbimDrxCycle specified at `val`.
 * @param val a MbimDrxCycle.
 */
function drx_cycle_get_string(val: DrxCycle): string
/**
 * Gets the nickname string for the #MbimDssLinkState specified at `val`.
 * @param val a MbimDssLinkState.
 */
function dss_link_state_get_string(val: DssLinkState): string
/**
 * Gets the nickname string for the #MbimEmergencyModeState specified at `val`.
 * @param val a MbimEmergencyModeState.
 */
function emergency_mode_state_get_string(val: EmergencyModeState): string
/**
 * Frees the memory allocated for the array of #MbimEventEntry structs.
 * @param array a #NULL terminated array of #MbimEventEntry structs.
 */
function event_entry_array_free(array: EventEntryArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimFrequencyRange in `mask`.
 * @param mask bitmask of MbimFrequencyRange values.
 */
function frequency_range_build_string_from_mask(mask: FrequencyRange): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimIPConfigurationAvailableFlag in `mask`.
 * @param mask bitmask of MbimIPConfigurationAvailableFlag values.
 */
function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string
/**
 * Frees the memory allocated for the array of #MbimIPv4Element structs.
 * @param array a #NULL terminated array of #MbimIPv4Element structs.
 */
function ipv4_element_array_free(array: IPv4ElementArray): void
/**
 * Frees the memory allocated for the array of #MbimIPv6Element structs.
 * @param array a #NULL terminated array of #MbimIPv6Element structs.
 */
function ipv6_element_array_free(array: IPv6ElementArray): void
/**
 * Gets the nickname string for the #MbimLadnInfo specified at `val`.
 * @param val a MbimLadnInfo.
 */
function ladn_info_get_string(val: LadnInfo): string
/**
 * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
 * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
 */
function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void
/**
 * Gets the nickname string for the #MbimLteAttachContextOperation specified at `val`.
 * @param val a MbimLteAttachContextOperation.
 */
function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string
/**
 * Gets the nickname string for the #MbimLteAttachContextRoamingControl specified at `val`.
 * @param val a MbimLteAttachContextRoamingControl.
 */
function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string
/**
 * Gets the nickname string for the #MbimLteAttachState specified at `val`.
 * @param val a MbimLteAttachState.
 */
function lte_attach_state_get_string(val: LteAttachState): string
/**
 * Frees the memory allocated for the #MbimLteAttachStatus.
 * @param var_ a #MbimLteAttachStatus.
 */
function lte_attach_status_free(var_: DeprecatedLteAttachStatus): void
/**
 * Gets the nickname string for the #MbimMessageCommandType specified at `val`.
 * @param val a MbimMessageCommandType.
 */
function message_command_type_get_string(val: MessageCommandType): string
/**
 * Gets the nickname string for the #MbimMessageType specified at `val`.
 * @param val a MbimMessageType.
 */
function message_type_get_string(val: MessageType): string
/**
 * Gets the nickname string for the #MbimMicoMode specified at `val`.
 * @param val a MbimMicoMode.
 */
function mico_mode_get_string(val: MicoMode): string
/**
 * Gets the nickname string for the #MbimModemConfigurationStatus specified at `val`.
 * @param val a MbimModemConfigurationStatus.
 */
function modem_configuration_status_get_string(val: ModemConfigurationStatus): string
/**
 * Gets the nickname string for the #MbimNetworkIdleHintState specified at `val`.
 * @param val a MbimNetworkIdleHintState.
 */
function network_idle_hint_state_get_string(val: NetworkIdleHintState): string
/**
 * Gets the nickname string for the #MbimNwError specified at `val`.
 * @param val a MbimNwError.
 */
function nw_error_get_string(val: NwError): string
/**
 * Frees the memory allocated for the array of #MbimPacketFilter structs.
 * @param array a #NULL terminated array of #MbimPacketFilter structs.
 */
function packet_filter_array_free(array: PacketFilterArray): void
/**
 * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
 * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
 */
function packet_filter_v3_array_free(array: PacketFilterV3Array): void
/**
 * Gets the nickname string for the #MbimPacketServiceAction specified at `val`.
 * @param val a MbimPacketServiceAction.
 */
function packet_service_action_get_string(val: PacketServiceAction): string
/**
 * Gets the nickname string for the #MbimPacketServiceState specified at `val`.
 * @param val a MbimPacketServiceState.
 */
function packet_service_state_get_string(val: PacketServiceState): string
/**
 * Gets the nickname string for the #MbimPcoType specified at `val`.
 * @param val a MbimPcoType.
 */
function pco_type_get_string(val: PcoType): string
/**
 * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
 * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
 */
function phonebook_entry_array_free(array: PhonebookEntryArray): void
/**
 * Gets the nickname string for the #MbimPhonebookFlag specified at `val`.
 * @param val a MbimPhonebookFlag.
 */
function phonebook_flag_get_string(val: PhonebookFlag): string
/**
 * Gets the nickname string for the #MbimPhonebookState specified at `val`.
 * @param val a MbimPhonebookState.
 */
function phonebook_state_get_string(val: PhonebookState): string
/**
 * Gets the nickname string for the #MbimPhonebookWriteFlag specified at `val`.
 * @param val a MbimPhonebookWriteFlag.
 */
function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string
/**
 * Gets the nickname string for the #MbimPinFormat specified at `val`.
 * @param val a MbimPinFormat.
 */
function pin_format_get_string(val: PinFormat): string
/**
 * Gets the nickname string for the #MbimPinMode specified at `val`.
 * @param val a MbimPinMode.
 */
function pin_mode_get_string(val: PinMode): string
/**
 * Gets the nickname string for the #MbimPinOperation specified at `val`.
 * @param val a MbimPinOperation.
 */
function pin_operation_get_string(val: PinOperation): string
/**
 * Gets the nickname string for the #MbimPinState specified at `val`.
 * @param val a MbimPinState.
 */
function pin_state_get_string(val: PinState): string
/**
 * Gets the nickname string for the #MbimPinType specified at `val`.
 * @param val a MbimPinType.
 */
function pin_type_get_string(val: PinType): string
/**
 * Gets the nickname string for the #MbimProtocolError specified at `val`.
 * @param val a MbimProtocolError.
 */
function protocol_error_get_string(val: ProtocolError): string
function protocol_error_quark(): GLib.Quark
/**
 * Frees the memory allocated for the array of #MbimProvider structs.
 * @param array a #NULL terminated array of #MbimProvider structs.
 */
function provider_array_free(array: ProviderArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimProviderState in `mask`.
 * @param mask bitmask of MbimProviderState values.
 */
function provider_state_build_string_from_mask(mask: ProviderState): string
/**
 * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
 * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
 */
function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void
/**
 * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
 * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
 */
function provisioned_context_element_v2_array_free(array: ProvisionedContextElementV2Array): void
/**
 * Gets the nickname string for the #MbimQduFileType specified at `val`.
 * @param val a MbimQduFileType.
 */
function qdu_file_type_get_string(val: QduFileType): string
/**
 * Gets the nickname string for the #MbimQduQuectelRebootType specified at `val`.
 * @param val a MbimQduQuectelRebootType.
 */
function qdu_quectel_reboot_type_get_string(val: QduQuectelRebootType): string
/**
 * Gets the nickname string for the #MbimQduQuectelVersionType specified at `val`.
 * @param val a MbimQduQuectelVersionType.
 */
function qdu_quectel_version_type_get_string(val: QduQuectelVersionType): string
/**
 * Gets the nickname string for the #MbimQduSessionAction specified at `val`.
 * @param val a MbimQduSessionAction.
 */
function qdu_session_action_get_string(val: QduSessionAction): string
/**
 * Gets the nickname string for the #MbimQduSessionResult specified at `val`.
 * @param val a MbimQduSessionResult.
 */
function qdu_session_result_get_string(val: QduSessionResult): string
/**
 * Gets the nickname string for the #MbimQduSessionStatus specified at `val`.
 * @param val a MbimQduSessionStatus.
 */
function qdu_session_status_get_string(val: QduSessionStatus): string
/**
 * Gets the nickname string for the #MbimQduSessionType specified at `val`.
 * @param val a MbimQduSessionType.
 */
function qdu_session_type_get_string(val: QduSessionType): string
/**
 * Gets the nickname string for the #MbimQuectelRadioSwitchState specified at `val`.
 * @param val a MbimQuectelRadioSwitchState.
 */
function quectel_radio_switch_state_get_string(val: QuectelRadioSwitchState): string
/**
 * Gets the nickname string for the #MbimRadioSwitchState specified at `val`.
 * @param val a MbimRadioSwitchState.
 */
function radio_switch_state_get_string(val: RadioSwitchState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimReadyInfoFlag in `mask`.
 * @param mask bitmask of MbimReadyInfoFlag values.
 */
function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string
/**
 * Gets the nickname string for the #MbimRegisterAction specified at `val`.
 * @param val a MbimRegisterAction.
 */
function register_action_get_string(val: RegisterAction): string
/**
 * Register a custom service
 * @param uuid MbimUuid structure corresponding to service
 * @param nickname a printable name for service
 */
function register_custom_service(uuid: Uuid, nickname: string): number
/**
 * Gets the nickname string for the #MbimRegisterMode specified at `val`.
 * @param val a MbimRegisterMode.
 */
function register_mode_get_string(val: RegisterMode): string
/**
 * Gets the nickname string for the #MbimRegisterState specified at `val`.
 * @param val a MbimRegisterState.
 */
function register_state_get_string(val: RegisterState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimRegistrationFlag in `mask`.
 * @param mask bitmask of MbimRegistrationFlag values.
 */
function registration_flag_build_string_from_mask(mask: RegistrationFlag): string
/**
 * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
 * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
 */
function rsrp_snr_info_array_free(array: RsrpSnrInfoArray): void
/**
 * Gets the nickname string for the #MbimSarBackoffState specified at `val`.
 * @param val a MbimSarBackoffState.
 */
function sar_backoff_state_get_string(val: SarBackoffState): string
/**
 * Frees the memory allocated for the array of #MbimSarConfigState structs.
 * @param array a #NULL terminated array of #MbimSarConfigState structs.
 */
function sar_config_state_array_free(array: SarConfigStateArray): void
/**
 * Gets the nickname string for the #MbimSarControlMode specified at `val`.
 * @param val a MbimSarControlMode.
 */
function sar_control_mode_get_string(val: SarControlMode): string
/**
 * Gets the nickname string for the #MbimSarWifiHardwareState specified at `val`.
 * @param val a MbimSarWifiHardwareState.
 */
function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string
/**
 * Gets the nickname string for the #MbimService specified at `val`.
 * @param val a MbimService.
 */
function service_get_string(val: Service): string
/**
 * Checks whether `id` is a custom or standard service.
 * @param id ID of the service
 */
function service_id_is_custom(id: number): boolean
/**
 * Gets the nickname string for the `service`.
 * 
 * As opposed to mbim_service_get_string(), this methods takes into account
 * custom services that may have been registered by the user.
 * @param service a MbimService or custom service.
 */
function service_lookup_name(service: number): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSimClass in `mask`.
 * @param mask bitmask of MbimSimClass values.
 */
function sim_class_build_string_from_mask(mask: SimClass): string
/**
 * Frees the memory allocated for the array of #MbimSlot structs.
 * @param array a #NULL terminated array of #MbimSlot structs.
 */
function slot_array_free(array: SlotArray): void
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSmsCaps in `mask`.
 * @param mask bitmask of MbimSmsCaps values.
 */
function sms_caps_build_string_from_mask(mask: SmsCaps): string
/**
 * Gets the nickname string for the #MbimSmsCdmaEncoding specified at `val`.
 * @param val a MbimSmsCdmaEncoding.
 */
function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string
/**
 * Gets the nickname string for the #MbimSmsCdmaLang specified at `val`.
 * @param val a MbimSmsCdmaLang.
 */
function sms_cdma_lang_get_string(val: SmsCdmaLang): string
/**
 * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
 * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
 */
function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void
/**
 * Gets the nickname string for the #MbimSmsFlag specified at `val`.
 * @param val a MbimSmsFlag.
 */
function sms_flag_get_string(val: SmsFlag): string
/**
 * Gets the nickname string for the #MbimSmsFormat specified at `val`.
 * @param val a MbimSmsFormat.
 */
function sms_format_get_string(val: SmsFormat): string
/**
 * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
 * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
 */
function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void
/**
 * Gets the nickname string for the #MbimSmsStatusFlag specified at `val`.
 * @param val a MbimSmsStatusFlag.
 */
function sms_status_flag_get_string(val: SmsStatusFlag): string
/**
 * Gets the nickname string for the #MbimSmsStatus specified at `val`.
 * @param val a MbimSmsStatus.
 */
function sms_status_get_string(val: SmsStatus): string
/**
 * Gets the nickname string for the #MbimSmsStorageState specified at `val`.
 * @param val a MbimSmsStorageState.
 */
function sms_storage_state_get_string(val: SmsStorageState): string
/**
 * Gets the nickname string for the #MbimStatusError specified at `val`.
 * @param val a MbimStatusError.
 */
function status_error_get_string(val: StatusError): string
function status_error_quark(): GLib.Quark
/**
 * Gets the nickname string for the #MbimStkPacProfile specified at `val`.
 * @param val a MbimStkPacProfile.
 */
function stk_pac_profile_get_string(val: StkPacProfile): string
/**
 * Gets the nickname string for the #MbimStkPacType specified at `val`.
 * @param val a MbimStkPacType.
 */
function stk_pac_type_get_string(val: StkPacType): string
/**
 * Gets the nickname string for the #MbimSubscriberReadyState specified at `val`.
 * @param val a MbimSubscriberReadyState.
 */
function subscriber_ready_state_get_string(val: SubscriberReadyState): string
/**
 * Builds a string containing a comma-separated list of nicknames for
 * each #MbimSubscriberReadyStatusFlag in `mask`.
 * @param mask bitmask of MbimSubscriberReadyStatusFlag values.
 */
function subscriber_ready_status_flag_build_string_from_mask(mask: SubscriberReadyStatusFlag): string
/**
 * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
 * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
 */
function terminal_capability_info_array_free(array: TerminalCapabilityInfoArray): void
/**
 * Gets the nickname string for the #MbimTlvType specified at `val`.
 * @param val a MbimTlvType.
 */
function tlv_type_get_string(val: TlvType): string
/**
 * Gets the nickname string for the #MbimTransmissionNotificationStatus specified at `val`.
 * @param val a MbimTransmissionNotificationStatus.
 */
function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string
/**
 * Gets the nickname string for the #MbimTransmissionState specified at `val`.
 * @param val a MbimTransmissionState.
 */
function transmission_state_get_string(val: TransmissionState): string
/**
 * Gets the nickname string for the #MbimUiccClassByteType specified at `val`.
 * @param val a MbimUiccClassByteType.
 */
function uicc_class_byte_type_get_string(val: UiccClassByteType): string
/**
 * Gets the nickname string for the #MbimUiccPassThroughAction specified at `val`.
 * @param val a MbimUiccPassThroughAction.
 */
function uicc_pass_through_action_get_string(val: UiccPassThroughAction): string
/**
 * Gets the nickname string for the #MbimUiccPassThroughStatus specified at `val`.
 * @param val a MbimUiccPassThroughStatus.
 */
function uicc_pass_through_status_get_string(val: UiccPassThroughStatus): string
/**
 * Gets the nickname string for the #MbimUiccSecureMessaging specified at `val`.
 * @param val a MbimUiccSecureMessaging.
 */
function uicc_secure_messaging_get_string(val: UiccSecureMessaging): string
/**
 * Gets the nickname string for the #MbimUiccSlotState specified at `val`.
 * @param val a MbimUiccSlotState.
 */
function uicc_slot_state_get_string(val: UiccSlotState): string
/**
 * Unregister a custom service.
 * @param id ID of the service to unregister.MbimUuid structure corresponding to service
 */
function unregister_custom_service(id: number): boolean
/**
 * Gets the nickname string for the #MbimUssdAction specified at `val`.
 * @param val a MbimUssdAction.
 */
function ussd_action_get_string(val: UssdAction): string
/**
 * Gets the nickname string for the #MbimUssdResponse specified at `val`.
 * @param val a MbimUssdResponse.
 */
function ussd_response_get_string(val: UssdResponse): string
/**
 * Gets the nickname string for the #MbimUssdSessionState specified at `val`.
 * @param val a MbimUssdSessionState.
 */
function ussd_session_state_get_string(val: UssdSessionState): string
/**
 * Checks whether MBIM message traces are currently enabled.
 */
function utils_get_traces_enabled(): boolean
/**
 * Sets whether MBIM message traces are enabled or disabled.
 * @param enabled %TRUE to enable traces, %FALSE to disable them.
 */
function utils_set_traces_enabled(enabled: boolean): void
/**
 * Get the UUID corresponding to `context_type`.
 * @param context_type a #MbimContextType.
 */
function uuid_from_context_type(context_type: ContextType): Uuid
/**
 * Fills in `uuid` from the printable representation give in `str`.
 * 
 * Only ccepts `str` written with dashes separating items, e.g.:
 *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
 * @param str a MBIM UUID.
 * @param uuid pointer to the target #MbimUuid.
 */
function uuid_from_printable(str: string, uuid: Uuid): boolean
/**
 * Get the UUID corresponding to `service`.
 * 
 * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
 * or a custom registered one.
 * @param service a #MbimService.
 */
function uuid_from_service(service: Service): Uuid
/**
 * Gets the nickname string for the #MbimVisibleProvidersAction specified at `val`.
 * @param val a MbimVisibleProvidersAction.
 */
function visible_providers_action_get_string(val: VisibleProvidersAction): string
/**
 * Gets the nickname string for the #MbimVoiceCallState specified at `val`.
 * @param val a MbimVoiceCallState.
 */
function voice_call_state_get_string(val: VoiceCallState): string
/**
 * Gets the nickname string for the #MbimVoiceClass specified at `val`.
 * @param val a MbimVoiceClass.
 */
function voice_class_get_string(val: VoiceClass): string
/**
 * Gets the nickname string for the #MbimWakeType specified at `val`.
 * @param val a MbimWakeType.
 */
function wake_type_get_string(val: WakeType): string
interface Device_ConstructProps extends Gio.AsyncInitable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Mbim-1.0.Mbim.Device

    device_file?: Gio.File | null
    device_in_session?: boolean | null
    device_transaction_id?: number | null
}

/**
 * Signal callback interface for `device-error`
 */
interface Device_DeviceErrorSignalCallback {
    ($obj: Device, object: GLib.Error): void
}

/**
 * Signal callback interface for `device-indicate-status`
 */
interface Device_DeviceIndicateStatusSignalCallback {
    ($obj: Device, object: Message): void
}

/**
 * Signal callback interface for `device-removed`
 */
interface Device_DeviceRemovedSignalCallback {
    ($obj: Device): void
}

interface Device extends Gio.AsyncInitable {

    // Own properties of Mbim-1.0.Mbim.Device

    readonly device_file: Gio.File
    device_in_session: boolean
    device_transaction_id: number

    // Owm methods of Mbim-1.0.Mbim.Device

    /**
     * Asynchronously creates a new virtual network device node on top of
     * `base_ifname`. This allows having multiple net interfaces running on top of
     * another using multiplexing.
     * 
     * If the kernel driver doesn't allow this functionality, a
     * %MBIM_CORE_ERROR_UNSUPPORTED error will be returned.
     * 
     * The operation may fail if the given interface name is not associated to the
     * MBIM control port managed by the #MbimDevice.
     * 
     * Depending on the kernel driver in use, the given `ifname_prefix` may be
     * ignored. The user should not assume that the returned link interface name is
     * prefixed with `ifname_prefix` as it may not be the case.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_add_link_finish() to get the result of the operation.
     * @param session_id the session id for the link, in the   [#MBIM_DEVICE_SESSION_ID_MIN,#MBIM_DEVICE_SESSION_ID_MAX] range, or   #MBIM_DEVICE_SESSION_ID_AUTOMATIC to find the first available session id.
     * @param base_ifname the interface which the new link will be created on.
     * @param ifname_prefix the prefix suggested to be used for the name of the new link   created.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_add_link().
     * @param res a #GAsyncResult.
     * @param session_id the session ID for the link created.
     */
    add_link_finish(res: Gio.AsyncResult, session_id: number): string
    /**
     * Checks whether link management is supported by the kernel.
     */
    check_link_supported(): boolean
    /**
     * Checks the version number of the MS MBIMEx support in the device instance
     * against the one given as input.
     * @param ms_mbimex_version_major major version number of the MS MBIMEx support.
     * @param ms_mbimex_version_minor minor version number of the MS MBIMEx support.
     */
    check_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean
    /**
     * Asynchronously closes a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_close_finish() to get the result of the operation.
     * @param timeout maximum time, in seconds, to wait for the device to be closed.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    close(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous close operation started with mbim_device_close().
     * @param res a #GAsyncResult.
     */
    close_finish(res: Gio.AsyncResult): boolean
    /**
     * Forces the #MbimDevice to be closed.
     */
    close_force(): boolean
    /**
     * Asynchronously sends a #MbimMessage to the device.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_command_finish() to get the result of the operation.
     * @param message the message to send.
     * @param timeout maximum time, in seconds, to wait for the response.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    command(message: Message, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_command().
     * @param res a #GAsyncResult.
     */
    command_finish(res: Gio.AsyncResult): Message
    /**
     * Asynchronously deletes all virtual network interfaces that have been previously
     * created with mbim_device_add_link() in `base_ifname`.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_delete_link_finish() to get the result of the operation.
     * 
     * <note><para>
     * There is no guarantee that other processes haven't created new links by the
     * time this method returns. This method should be used with caution, or in setups
     * where only one single process is expected to do MBIM network interface link
     * management.
     * </para></note>
     * @param base_ifname the interface where all links are available.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    delete_all_links(base_ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_all_links().
     * @param res a #GAsyncResult.
     */
    delete_all_links_finish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously deletes a virtual network interface that has been previously
     * created with mbim_device_add_link().
     * 
     * If the kernel driver doesn't allow this functionality, a
     * %MBIM_CORE_ERROR_UNSUPPORTED error will be returned.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_delete_link_finish() to get the result of the operation.
     * @param ifname the name of the link to remove.
     * @param cancellable a #GCancellable, or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    delete_link(ifname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_link().
     * @param res a #GAsyncResult.
     */
    delete_link_finish(res: Gio.AsyncResult): boolean
    /**
     * Get the version number of the MS MBIMEx support.
     * 
     * The reported version will be 1 if the initialization sequence to agree on
     * which version to use hasn't been run (e.g. with mbim_device_open_full() and
     * the explicit %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3 flag).
     * @param out_ms_mbimex_version_minor output location for the minor version number of  the MS MBIMEx support, or %NULL if not needed.
     */
    get_ms_mbimex_version(out_ms_mbimex_version_minor: number): number
    /**
     * Acquire the next transaction ID of this #MbimDevice.
     * The internal transaction ID gets incremented.
     */
    get_next_transaction_id(): number
    /**
     * Get the system path of the underlying MBIM device.
     */
    get_path(): string
    /**
     * Get the system path of the underlying MBIM device in UTF-8.
     */
    get_path_display(): string
    /**
     * Acquire the transaction ID of this #MbimDevice without
     * incrementing the internal transaction ID.
     */
    get_transaction_id(): number
    /**
     * Checks whether the #MbimDevice is open for I/O.
     */
    is_open(): boolean
    /**
     * Synchronously lists all virtual network interfaces that have been previously
     * created with mbim_device_add_link() in `base_ifname`.
     * @param base_ifname the base interface.
     */
    list_links(base_ifname: string): [ /* returnType */ boolean, /* out_links */ string[] ]
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_finish() to get the result of the operation.
     * @param timeout maximum time, in seconds, to wait for the device to be opened.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    open(timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open().
     * @param res a #GAsyncResult.
     */
    open_finish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * This method is an extension of the generic mbim_device_open(), which allows
     * launching the #MbimDevice with proxy support.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_full_finish() to get the result of the operation.
     * @param flags a set of #MbimDeviceOpenFlags.
     * @param timeout maximum time, in seconds, to wait for the device to be opened.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the operation is finished.
     */
    open_full(flags: DeviceOpenFlags, timeout: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open_full().
     * @param res a #GAsyncResult.
     */
    open_full_finish(res: Gio.AsyncResult): boolean
    /**
     * Set the version number of the MS MBIMEx support assumed in the device
     * instance, which may have been set already by a different process or
     * device instance.
     * 
     * If this operation specifies the wrong MBIMEx version agreed between host
     * and device, the message processing on this device instance may fail.
     * 
     * This operation does not do any MBIMEx version exchange with the device,
     * the only way to do that is with mbim_device_open_full() and the explicit
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3
     * flag.
     * @param ms_mbimex_version_major major version number of the MS MBIMEx support.
     * @param ms_mbimex_version_minor minor version number of the MS MBIMEx support.
     */
    set_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean

    // Own signals of Mbim-1.0.Mbim.Device

    connect(sigName: "device-error", callback: Device_DeviceErrorSignalCallback): number
    connect_after(sigName: "device-error", callback: Device_DeviceErrorSignalCallback): number
    emit(sigName: "device-error", object: GLib.Error, ...args: any[]): void
    connect(sigName: "device-indicate-status", callback: Device_DeviceIndicateStatusSignalCallback): number
    connect_after(sigName: "device-indicate-status", callback: Device_DeviceIndicateStatusSignalCallback): number
    emit(sigName: "device-indicate-status", object: Message, ...args: any[]): void
    connect(sigName: "device-removed", callback: Device_DeviceRemovedSignalCallback): number
    connect_after(sigName: "device-removed", callback: Device_DeviceRemovedSignalCallback): number
    emit(sigName: "device-removed", ...args: any[]): void

    // Class property signals of Mbim-1.0.Mbim.Device

    connect(sigName: "notify::device-file", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-file", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-file", ...args: any[]): void
    connect(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-in-session", ...args: any[]): void
    connect(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #MbimDevice structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Device extends GObject.Object {

    // Own properties of Mbim-1.0.Mbim.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Mbim-1.0.Mbim.Device

    constructor(config?: Device_ConstructProps) 
    /**
     * Finishes an operation started with mbim_device_new().
     * @constructor 
     * @param res a #GAsyncResult.
     */
    static new_finish(res: Gio.AsyncResult): Device
    _init(config?: Device_ConstructProps): void
    /**
     * Asynchronously creates a #MbimDevice object to manage `file`.
     * When the operation is finished, `callback` will be invoked. You can then call
     * mbim_device_new_finish() to get the result of the operation.
     * @param file a #GFile.
     * @param cancellable optional #GCancellable object, #NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished.
     */
    static new(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}

interface Proxy {

    // Own properties of Mbim-1.0.Mbim.Proxy

    readonly mbim_proxy_n_clients: number
    readonly mbim_proxy_n_devices: number

    // Own fields of Mbim-1.0.Mbim.Proxy

    parent: GObject.Object
    priv: ProxyPrivate

    // Class property signals of Mbim-1.0.Mbim.Proxy

    connect(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mbim-proxy-n-clients", ...args: any[]): void
    connect(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mbim-proxy-n-devices", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #MbimProxy structure contains private data and should only be accessed
 * using the provided API.
 * @class 
 */
class Proxy extends GObject.Object {

    // Own properties of Mbim-1.0.Mbim.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of Mbim-1.0.Mbim.Proxy

    constructor(config?: Proxy_ConstructProps) 
    /**
     * Creates a #MbimProxy object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a #MbimProxy object.
     * @constructor 
     */
    static new(): Proxy
    _init(config?: Proxy_ConstructProps): void
}

interface AtdsProvider {

    // Own fields of Mbim-1.0.Mbim.AtdsProvider

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #MbimProviderState given as a #guint32.
     * @field 
     */
    provider_state: number
    /**
     * a string.
     * @field 
     */
    provider_name: string
    /**
     * a #MbimAtdsProviderPlmnMode given as a #guint32.
     * @field 
     */
    plmn_mode: number
    /**
     * a #guint32.
     * @field 
     */
    rssi: number
    /**
     * a #guint32.
     * @field 
     */
    error_rate: number
}

/**
 * A MbimAtdsProvider element.
 * @record 
 */
class AtdsProvider {

    // Own properties of Mbim-1.0.Mbim.AtdsProvider

    static name: string

    // Constructors of Mbim-1.0.Mbim.AtdsProvider

    /**
     * Frees the memory allocated for the array of #MbimAtdsProvider structs.
     * @param array a #NULL terminated array of #MbimAtdsProvider structs.
     */
    static array_free(array: AtdsProviderArray): void
}

interface CellInfoCdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoCdma

    /**
     * a #guint32.
     * @field 
     */
    serving_cell_flag: number
    /**
     * a #guint32.
     * @field 
     */
    nid: number
    /**
     * a #guint32.
     * @field 
     */
    sid: number
    /**
     * a #guint32.
     * @field 
     */
    base_station_id: number
    /**
     * a #guint32.
     * @field 
     */
    base_latitude: number
    /**
     * a #guint32.
     * @field 
     */
    base_longitude: number
    /**
     * a #guint32.
     * @field 
     */
    ref_pn: number
    /**
     * a #guint32.
     * @field 
     */
    gps_seconds: number
    /**
     * a #guint32.
     * @field 
     */
    pilot_strength: number
}

/**
 * A MbimCellInfoCdma element.
 * @record 
 */
class CellInfoCdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoCdma

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoCdma

    /**
     * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
     */
    static array_free(array: CellInfoCdmaArray): void
}

interface CellInfoNeighboringGsm {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    arfcn: number
    /**
     * a #guint32.
     * @field 
     */
    base_station_id: number
    /**
     * a #guint32.
     * @field 
     */
    rx_level: number
}

/**
 * A MbimCellInfoNeighboringGsm element.
 * @record 
 */
class CellInfoNeighboringGsm {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringGsm

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
     */
    static array_free(array: CellInfoNeighboringGsmArray): void
}

interface CellInfoNeighboringLte {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringLte

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    earfcn: number
    /**
     * a #guint32.
     * @field 
     */
    physical_cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #gint32.
     * @field 
     */
    rsrp: number
    /**
     * a #gint32.
     * @field 
     */
    rsrq: number
}

/**
 * A MbimCellInfoNeighboringLte element.
 * @record 
 */
class CellInfoNeighboringLte {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringLte

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringLte

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
     */
    static array_free(array: CellInfoNeighboringLteArray): void
}

interface CellInfoNeighboringNr {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringNr

    /**
     * a #MbimDataSubclass given as a #guint32.
     * @field 
     */
    system_sub_type: number
    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a string.
     * @field 
     */
    cell_id: string
    /**
     * a #guint32.
     * @field 
     */
    physical_cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    sinr: number
}

/**
 * A MbimCellInfoNeighboringNr element.
 * @record 
 */
class CellInfoNeighboringNr {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringNr

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringNr

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
     */
    static array_free(array: CellInfoNeighboringNrArray): void
}

interface CellInfoNeighboringTdscdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    cell_parameter_id: number
    /**
     * a #guint32.
     * @field 
     */
    timing_advance: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #guint32.
     * @field 
     */
    path_loss: number
}

/**
 * A MbimCellInfoNeighboringTdscdma element.
 * @record 
 */
class CellInfoNeighboringTdscdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
     */
    static array_free(array: CellInfoNeighboringTdscdmaArray): void
}

interface CellInfoNeighboringUmts {

    // Own fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    primary_scrambling_code: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #gint32.
     * @field 
     */
    ecno: number
    /**
     * a #guint32.
     * @field 
     */
    path_loss: number
}

/**
 * A MbimCellInfoNeighboringUmts element.
 * @record 
 */
class CellInfoNeighboringUmts {

    // Own properties of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoNeighboringUmts

    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
     */
    static array_free(array: CellInfoNeighboringUmtsArray): void
}

interface CellInfoServingGsm {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingGsm

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    timing_advance: number
    /**
     * a #guint32.
     * @field 
     */
    arfcn: number
    /**
     * a #guint32.
     * @field 
     */
    base_station_id: number
    /**
     * a #guint32.
     * @field 
     */
    rx_level: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingGsm

    /**
     * Frees the memory allocated for the #MbimCellInfoServingGsm.
     */
    free(): void
}

/**
 * A MbimCellInfoServingGsm element.
 * @record 
 */
class CellInfoServingGsm {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingGsm

    static name: string
}

interface CellInfoServingLte {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingLte

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    earfcn: number
    /**
     * a #guint32.
     * @field 
     */
    physical_cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #gint32.
     * @field 
     */
    rsrp: number
    /**
     * a #gint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    timing_advance: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingLte

    /**
     * Frees the memory allocated for the #MbimCellInfoServingLte.
     */
    free(): void
}

/**
 * A MbimCellInfoServingLte element.
 * @record 
 */
class CellInfoServingLte {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingLte

    static name: string
}

interface CellInfoServingNr {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingNr

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint64.
     * @field 
     */
    nci: number
    /**
     * a #guint32.
     * @field 
     */
    physical_cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    nrarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number
    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    rsrq: number
    /**
     * a #guint32.
     * @field 
     */
    sinr: number
    /**
     * a #guint64.
     * @field 
     */
    timing_advance: number
}

/**
 * A MbimCellInfoServingNr element.
 * @record 
 */
class CellInfoServingNr {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingNr

    static name: string

    // Constructors of Mbim-1.0.Mbim.CellInfoServingNr

    /**
     * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
     */
    static array_free(array: CellInfoServingNrArray): void
}

interface CellInfoServingTdscdma {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingTdscdma

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    cell_parameter_id: number
    /**
     * a #guint32.
     * @field 
     */
    timing_advance: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #guint32.
     * @field 
     */
    path_loss: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingTdscdma

    /**
     * Frees the memory allocated for the #MbimCellInfoServingTdscdma.
     */
    free(): void
}

/**
 * A MbimCellInfoServingTdscdma element.
 * @record 
 */
class CellInfoServingTdscdma {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingTdscdma

    static name: string
}

interface CellInfoServingUmts {

    // Own fields of Mbim-1.0.Mbim.CellInfoServingUmts

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #guint32.
     * @field 
     */
    location_area_code: number
    /**
     * a #guint32.
     * @field 
     */
    cell_id: number
    /**
     * a #guint32.
     * @field 
     */
    frequency_info_ul: number
    /**
     * a #guint32.
     * @field 
     */
    frequency_info_dl: number
    /**
     * a #guint32.
     * @field 
     */
    frequency_info_nt: number
    /**
     * a #guint32.
     * @field 
     */
    uarfcn: number
    /**
     * a #guint32.
     * @field 
     */
    primary_scrambling_code: number
    /**
     * a #gint32.
     * @field 
     */
    rscp: number
    /**
     * a #gint32.
     * @field 
     */
    ecno: number
    /**
     * a #guint32.
     * @field 
     */
    path_loss: number

    // Owm methods of Mbim-1.0.Mbim.CellInfoServingUmts

    /**
     * Frees the memory allocated for the #MbimCellInfoServingUmts.
     */
    free(): void
}

/**
 * A MbimCellInfoServingUmts element.
 * @record 
 */
class CellInfoServingUmts {

    // Own properties of Mbim-1.0.Mbim.CellInfoServingUmts

    static name: string
}

interface DeprecatedLteAttachStatus {

    // Own fields of Mbim-1.0.Mbim.DeprecatedLteAttachStatus

    lte_attach_state: number
    ip_type: number
    access_string: string
    user_name: string
    password: string
    compression: number
    auth_protocol: number
}

class DeprecatedLteAttachStatus {

    // Own properties of Mbim-1.0.Mbim.DeprecatedLteAttachStatus

    static name: string
}

interface DeviceClass {
}

abstract class DeviceClass {

    // Own properties of Mbim-1.0.Mbim.DeviceClass

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of Mbim-1.0.Mbim.DevicePrivate

    static name: string
}

interface DeviceServiceElement {

    // Own fields of Mbim-1.0.Mbim.DeviceServiceElement

    /**
     * a #MbimUuid.
     * @field 
     */
    device_service_id: Uuid
    /**
     * a #guint32.
     * @field 
     */
    dss_payload: number
    /**
     * a #guint32.
     * @field 
     */
    max_dss_instances: number
    /**
     * a #guint32.
     * @field 
     */
    cids_count: number
    /**
     * an array of #guint32 values.
     * @field 
     */
    cids: number
}

/**
 * A MbimDeviceServiceElement element.
 * @record 
 */
class DeviceServiceElement {

    // Own properties of Mbim-1.0.Mbim.DeviceServiceElement

    static name: string

    // Constructors of Mbim-1.0.Mbim.DeviceServiceElement

    /**
     * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
     * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
     */
    static array_free(array: DeviceServiceElementArray): void
}

interface EventEntry {

    // Own fields of Mbim-1.0.Mbim.EventEntry

    /**
     * a #MbimUuid.
     * @field 
     */
    device_service_id: Uuid
    /**
     * a #guint32.
     * @field 
     */
    cids_count: number
    /**
     * an array of #guint32 values.
     * @field 
     */
    cids: number
}

/**
 * A MbimEventEntry element.
 * @record 
 */
class EventEntry {

    // Own properties of Mbim-1.0.Mbim.EventEntry

    static name: string

    // Constructors of Mbim-1.0.Mbim.EventEntry

    /**
     * Frees the memory allocated for the array of #MbimEventEntry structs.
     * @param array a #NULL terminated array of #MbimEventEntry structs.
     */
    static array_free(array: EventEntryArray): void
}

interface IPv4 {

    // Own fields of Mbim-1.0.Mbim.IPv4

    /**
     * 4 bytes specifying the IPv4 address.
     * @field 
     */
    addr: Uint8Array
}

/**
 * An IPv4 address.
 * @record 
 */
class IPv4 {

    // Own properties of Mbim-1.0.Mbim.IPv4

    static name: string
}

interface IPv4Element {

    // Own fields of Mbim-1.0.Mbim.IPv4Element

    /**
     * a #guint32.
     * @field 
     */
    on_link_prefix_length: number
    /**
     * a #MbimIPv4.
     * @field 
     */
    ipv4_address: IPv4
}

/**
 * A MbimIPv4Element element.
 * @record 
 */
class IPv4Element {

    // Own properties of Mbim-1.0.Mbim.IPv4Element

    static name: string

    // Constructors of Mbim-1.0.Mbim.IPv4Element

    /**
     * Frees the memory allocated for the array of #MbimIPv4Element structs.
     * @param array a #NULL terminated array of #MbimIPv4Element structs.
     */
    static array_free(array: IPv4ElementArray): void
}

interface IPv6 {

    // Own fields of Mbim-1.0.Mbim.IPv6

    /**
     * 16 bytes specifying the IPv6 address.
     * @field 
     */
    addr: Uint8Array
}

/**
 * An IPv6 address.
 * @record 
 */
class IPv6 {

    // Own properties of Mbim-1.0.Mbim.IPv6

    static name: string
}

interface IPv6Element {

    // Own fields of Mbim-1.0.Mbim.IPv6Element

    /**
     * a #guint32.
     * @field 
     */
    on_link_prefix_length: number
    /**
     * a #MbimIPv6
     * @field 
     */
    ipv6_address: IPv6
}

/**
 * A MbimIPv6Element element.
 * @record 
 */
class IPv6Element {

    // Own properties of Mbim-1.0.Mbim.IPv6Element

    static name: string

    // Constructors of Mbim-1.0.Mbim.IPv6Element

    /**
     * Frees the memory allocated for the array of #MbimIPv6Element structs.
     * @param array a #NULL terminated array of #MbimIPv6Element structs.
     */
    static array_free(array: IPv6ElementArray): void
}

interface LteAttachConfiguration {

    // Own fields of Mbim-1.0.Mbim.LteAttachConfiguration

    /**
     * a #MbimContextIpType given as a #guint32.
     * @field 
     */
    ip_type: number
    /**
     * a #MbimLteAttachContextRoamingControl given as a #guint32.
     * @field 
     */
    roaming: number
    /**
     * a #MbimContextSource given as a #guint32.
     * @field 
     */
    source: number
    /**
     * a string.
     * @field 
     */
    access_string: string
    /**
     * a string.
     * @field 
     */
    user_name: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    auth_protocol: number
}

/**
 * A MbimLteAttachConfiguration element.
 * @record 
 */
class LteAttachConfiguration {

    // Own properties of Mbim-1.0.Mbim.LteAttachConfiguration

    static name: string

    // Constructors of Mbim-1.0.Mbim.LteAttachConfiguration

    /**
     * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
     * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
     */
    static array_free(array: LteAttachConfigurationArray): void
}

interface Message {

    // Owm methods of Mbim-1.0.Mbim.Message

    /**
     * Parses and returns parameters of the 'Location' response command in the 'ATDS' service.
     */
    atds_location_response_parse(): [ /* returnType */ boolean, /* out_lac */ number, /* out_tac */ number, /* out_cell_id */ number ]
    /**
     * Parses and returns parameters of the 'Operators' response command in the 'ATDS' service.
     */
    atds_operators_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ AtdsProvider[] ]
    /**
     * Parses and returns parameters of the 'RAT' response command in the 'ATDS' service.
     */
    atds_rat_response_parse(): [ /* returnType */ boolean, /* out_mode */ AtdsRatMode ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'ATDS' service.
     */
    atds_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_register_state */ RegisterState, /* out_register_mode */ RegisterMode, /* out_available_data_classes */ DataClass, /* out_current_cellular_class */ CellularClass, /* out_provider_id */ string, /* out_provider_name */ string, /* out_roaming_text */ string, /* out_registration_flag */ RegistrationFlag ]
    /**
     * Parses and returns parameters of the 'Signal' response command in the 'ATDS' service.
     */
    atds_signal_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number, /* out_error_rate */ number, /* out_rscp */ number, /* out_ecno */ number, /* out_rsrq */ number, /* out_rsrp */ number, /* out_rssnr */ number ]
    /**
     * Parses and returns parameters of the 'Aka' response command in the 'Auth' service.
     */
    auth_aka_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array, /* out_res_len */ number, /* out_integrating_key */ Uint8Array, /* out_ciphering_key */ Uint8Array, /* out_auts */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Akap' response command in the 'Auth' service.
     */
    auth_akap_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array, /* out_res_len */ number, /* out_integrating_key */ Uint8Array, /* out_ciphering_key */ Uint8Array, /* out_auts */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Sim' response command in the 'Auth' service.
     */
    auth_sim_response_parse(): [ /* returnType */ boolean, /* out_sres1 */ number, /* out_kc1 */ number, /* out_sres2 */ number, /* out_kc2 */ number, /* out_sres3 */ number, /* out_kc3 */ number, /* out_n */ number ]
    /**
     * Gets the result of the 'Close' operation in the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    close_done_get_result(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    close_done_get_status_code(): StatusError
    /**
     * Appends the contents of `buffer` to `self`.
     * @param buffer raw buffer to append to the message.
     * @param buffer_size length of the data in `buffer`.
     */
    command_append(buffer: number, buffer_size: number): void
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_cid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    /**
     * Gets the result of the 'Command' operation in the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_result(): boolean
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_service(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_service_id(): Uuid
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    command_done_get_status_code(): StatusError
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    command_get_cid(): number
    /**
     * Get the command type of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    command_get_command_type(): MessageCommandType
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    command_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    command_get_service(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    command_get_service_id(): Uuid
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Basic Connect' service.
     */
    connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_activation_state */ ActivationState, /* out_voice_call_state */ VoiceCallState, /* out_ip_type */ ContextIpType, /* out_context_type */ Uuid, /* out_nw_error */ number ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Basic Connect' service.
     */
    connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_activation_state */ ActivationState, /* out_voice_call_state */ VoiceCallState, /* out_ip_type */ ContextIpType, /* out_context_type */ Uuid, /* out_nw_error */ number ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Basic Connect' service.
     */
    device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType, /* out_cellular_class */ CellularClass, /* out_voice_class */ VoiceClass, /* out_sim_class */ SimClass, /* out_data_class */ DataClass, /* out_sms_caps */ SmsCaps, /* out_control_caps */ CtrlCaps, /* out_max_sessions */ number, /* out_custom_data_class */ string, /* out_device_id */ string, /* out_firmware_info */ string, /* out_hardware_info */ string ]
    /**
     * Parses and returns parameters of the 'Device Service Subscribe List' response command in the 'Basic Connect' service.
     */
    device_service_subscribe_list_response_parse(): [ /* returnType */ boolean, /* out_events_count */ number, /* out_events */ EventEntry[] ]
    /**
     * Create a new request for the 'Events' response command in the 'Basic Connect' service.
     * @param events_count return location for a #guint32, or %NULL if the 'EventsCount' field is not needed.
     * @param events return location for a newly allocated array of #MbimEventEntrys, or %NULL if the 'Events' field is not needed. Free the returned value with mbim_event_entry_array_free().
     */
    device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean
    /**
     * Parses and returns parameters of the 'Device Services' response command in the 'Basic Connect' service.
     */
    device_services_response_parse(): [ /* returnType */ boolean, /* out_device_services_count */ number, /* out_max_dss_sessions */ number, /* out_device_services */ DeviceServiceElement[] ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'DSS' service.
     */
    dss_connect_response_parse(): boolean
    /**
     * Create a #MbimMessage with the same contents as `self`.
     */
    dup(): Message
    /**
     * Parses and returns parameters of the 'Emergency Mode' notification command in the 'Basic Connect' service.
     */
    emergency_mode_notification_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState ]
    /**
     * Parses and returns parameters of the 'Emergency Mode' response command in the 'Basic Connect' service.
     */
    emergency_mode_response_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState ]
    /**
     * Get the error in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    error_get_error(): GLib.Error
    /**
     * Get the error code in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    error_get_error_status_code(): ProtocolError
    /**
     * Gets the whole message length.
     */
    get_message_length(): number
    /**
     * Gets the message type.
     */
    get_message_type(): MessageType
    /**
     * Gets a printable string with the contents of the whole MBIM message.
     * 
     * This method will not fail if the parsing of the message contents fails,
     * a fallback text with the error will be included in the generated printable
     * information instead.
     * @param line_prefix prefix string to use in each new generated line.
     * @param headers_only %TRUE if only basic headers should be printed.
     */
    get_printable(line_prefix: string, headers_only: boolean): string
    /**
     * Gets a printable string with the contents of the whole MBIM message.
     * 
     * Unlike mbim_message_get_printable(), this method allows specifying the
     * MBIMEx version agreed between host and device, so that the correct
     * processing and parsing is done on messages in the newer MBIMEx versions.
     * 
     * If `mbimex_version_major` < 2, this method behaves exactly as
     * mbim_message_get_printable().
     * 
     * If the specified `mbimex_version_major` is unsupported, an error will be
     * returned.
     * 
     * This method will not fail if the parsing of the message contents fails,
     * a fallback text with the error will be included in the generated printable
     * information instead.
     * @param mbimex_version_major major version of the agreed MBIMEx support.
     * @param mbimex_version_minor minor version of the agreed MBIMEx support.
     * @param line_prefix prefix string to use in each new generated line.
     * @param headers_only %TRUE if only basic headers should be printed.
     */
    get_printable_full(mbimex_version_major: number, mbimex_version_minor: number, line_prefix: string, headers_only: boolean): string
    /**
     * Gets the whole raw data buffer of the #MbimMessage.
     */
    get_raw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the transaction ID of the message.
     */
    get_transaction_id(): number
    /**
     * Parses and returns parameters of the 'Home Provider' response command in the 'Basic Connect' service.
     */
    home_provider_response_parse(): [ /* returnType */ boolean, /* out_provider */ Provider ]
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicate_status_get_cid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicate_status_get_raw_information_buffer(): [ /* returnType */ number, /* out_length */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicate_status_get_service(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicate_status_get_service_id(): Uuid
    /**
     * Parses and returns parameters of the 'IP Configuration' notification command in the 'Basic Connect' service.
     */
    ip_configuration_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag, /* out_ipv4_address_count */ number, /* out_ipv4_address */ IPv4Element[], /* out_ipv6_address_count */ number, /* out_ipv6_address */ IPv6Element[], /* out_ipv4_gateway */ IPv4, /* out_ipv6_gateway */ IPv6, /* out_ipv4_dns_server_count */ number, /* out_ipv4_dns_server */ IPv4[], /* out_ipv6_dns_server_count */ number, /* out_ipv6_dns_server */ IPv6[], /* out_ipv4_mtu */ number, /* out_ipv6_mtu */ number ]
    /**
     * Parses and returns parameters of the 'IP Configuration' response command in the 'Basic Connect' service.
     */
    ip_configuration_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag, /* out_ipv4_address_count */ number, /* out_ipv4_address */ IPv4Element[], /* out_ipv6_address_count */ number, /* out_ipv6_address */ IPv6Element[], /* out_ipv4_gateway */ IPv4, /* out_ipv6_gateway */ IPv6, /* out_ipv4_dns_server_count */ number, /* out_ipv4_dns_server */ IPv4[], /* out_ipv6_dns_server_count */ number, /* out_ipv6_dns_server */ IPv6[], /* out_ipv4_mtu */ number, /* out_ipv6_mtu */ number ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Basic Connect' service.
     */
    ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_packet_filters_count */ number, /* out_packet_filters */ PacketFilter[] ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClass, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number, /* out_cdma_cells */ CellInfoCdma[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType, /* out_cellular_class */ CellularClass, /* out_voice_class */ VoiceClass, /* out_sms_class */ SimClass, /* out_data_class */ DataClass, /* out_sms_caps */ SmsCaps, /* out_control_caps */ CtrlCaps, /* out_max_sessions */ number, /* out_custom_data_class */ string, /* out_device_id */ string, /* out_firmware_info */ string, /* out_hardware_info */ string, /* out_executor_index */ number ]
    /**
     * Parses and returns parameters of the 'Device Slot Mappings' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_device_slot_mappings_response_parse(): [ /* returnType */ boolean, /* out_map_count */ number, /* out_slot_map */ Slot[] ]
    /**
     * Parses and returns parameters of the 'Location Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_location_info_status_notification_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number, /* out_tracking_area_code */ number, /* out_cell_id */ number ]
    /**
     * Parses and returns parameters of the 'Location Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_location_info_status_response_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number, /* out_tracking_area_code */ number, /* out_cell_id */ number ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number, /* out_configurations */ LteAttachConfiguration[] ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number, /* out_configurations */ LteAttachConfiguration[] ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState, /* out_ip_type */ ContextIpType, /* out_access_string */ string, /* out_user_name */ string, /* out_password */ string, /* out_compression */ Compression, /* out_auth_protocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState, /* out_ip_type */ ContextIpType, /* out_access_string */ string, /* out_user_name */ string, /* out_password */ string, /* out_compression */ Compression, /* out_auth_protocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_status_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ DeprecatedLteAttachStatus ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_status_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ DeprecatedLteAttachStatus ]
    /**
     * Parses and returns parameters of the 'PCO' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_pco_notification_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue ]
    /**
     * Parses and returns parameters of the 'PCO' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_pco_response_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number, /* out_provisioned_contexts */ ProvisionedContextElementV2[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number, /* out_provisioned_contexts */ ProvisionedContextElementV2[] ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_slot_info_status_notification_parse(): [ /* returnType */ boolean, /* out_slot_index */ number, /* out_state */ UiccSlotState ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_slot_info_status_response_parse(): [ /* returnType */ boolean, /* out_slot_index */ number, /* out_state */ UiccSlotState ]
    /**
     * Parses and returns parameters of the 'Sys Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_sys_caps_response_parse(): [ /* returnType */ boolean, /* out_number_of_executors */ number, /* out_number_of_slots */ number, /* out_concurrency */ number, /* out_modem_id */ number ]
    /**
     * Parses and returns parameters of the 'Version' response command in the 'Ms Basic Connect Extensions V2' service.
     */
    ms_basic_connect_extensions_v2_version_response_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number, /* out_mbim_extended_version */ number ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClassV3, /* out_system_sub_type */ DataSubclass, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number, /* out_cdma_cells */ CellInfoCdma[] | null, /* out_nr_serving_cells_count */ number, /* out_nr_serving_cells */ CellInfoServingNr[] | null, /* out_nr_neighbor_cells_count */ number, /* out_nr_neighbor_cells */ CellInfoNeighboringNr[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType, /* out_cellular_class */ CellularClass, /* out_voice_class */ VoiceClass, /* out_sim_class */ SimClass, /* out_data_class */ DataClassV3, /* out_sms_caps */ SmsCaps, /* out_control_caps */ CtrlCaps, /* out_data_subclass */ DataSubclass, /* out_max_sessions */ number, /* out_executor_index */ number, /* out_wcdma_band_class */ number, /* out_lte_band_class_count */ number, /* out_lte_band_class */ number | null, /* out_nr_band_class_count */ number, /* out_nr_band_class */ number | null, /* out_custom_data_class */ string, /* out_device_id */ string, /* out_firmware_info */ string, /* out_hardware_info */ string ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState, /* out_nw_error */ NwError, /* out_ip_type */ ContextIpType, /* out_access_string */ string, /* out_user_name */ string, /* out_password */ string, /* out_compression */ Compression, /* out_auth_protocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState, /* out_nw_error */ NwError, /* out_ip_type */ ContextIpType, /* out_access_string */ string, /* out_user_name */ string, /* out_password */ string, /* out_compression */ Compression, /* out_auth_protocol */ AuthProtocol ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_modem_configuration_notification_parse(): [ /* returnType */ boolean, /* out_modem_configuration_status */ ModemConfigurationStatus, /* out_configuration_name */ string, /* out_unnamed_ies */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_modem_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_status */ ModemConfigurationStatus, /* out_configuration_name */ string, /* out_unnamed_ies */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Registration Parameters' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_registration_parameters_response_parse(): [ /* returnType */ boolean, /* out_mico_mode */ MicoMode, /* out_drx_cycle */ DrxCycle, /* out_ladn_info */ LadnInfo, /* out_default_pdu_activation_hint */ DefaultPduActivationHint, /* out_re_register_if_nedeed */ boolean, /* out_unnamed_ies */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Wake Reason' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_wake_reason_response_parse(): [ /* returnType */ boolean, /* out_wake_type */ WakeType, /* out_session_id */ number, /* out_wake_tlv */ Tlv ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_current_data_class */ DataClass, /* out_uplink_speed */ number, /* out_downlink_speed */ number, /* out_frequency_range */ FrequencyRange ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_current_data_class */ DataClass, /* out_uplink_speed */ number, /* out_downlink_speed */ number, /* out_frequency_range */ FrequencyRange ]
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_register_state */ RegisterState, /* out_register_mode */ RegisterMode, /* out_available_data_classes */ DataClass, /* out_current_cellular_class */ CellularClass, /* out_provider_id */ string, /* out_provider_name */ string, /* out_roaming_text */ string, /* out_registration_flag */ RegistrationFlag, /* out_preferred_data_classes */ DataClass ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_register_state */ RegisterState, /* out_register_mode */ RegisterMode, /* out_available_data_classes */ DataClass, /* out_current_cellular_class */ CellularClass, /* out_provider_id */ string, /* out_provider_name */ string, /* out_roaming_text */ string, /* out_registration_flag */ RegistrationFlag, /* out_preferred_data_classes */ DataClass ]
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number, /* out_error_rate */ number, /* out_signal_strength_interval */ number, /* out_rssi_threshold */ number, /* out_error_rate_threshold */ number, /* out_rsrp_snr_count */ number, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number, /* out_error_rate */ number, /* out_signal_strength_interval */ number, /* out_rssi_threshold */ number, /* out_error_rate_threshold */ number, /* out_rsrp_snr_count */ number, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_activation_state */ ActivationState, /* out_voice_call_state */ VoiceCallState, /* out_ip_type */ ContextIpType, /* out_context_type */ Uuid, /* out_nw_error */ number, /* out_media_preference */ AccessMediaType, /* out_access_string */ string, /* out_unnamed_ies */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_activation_state */ ActivationState, /* out_voice_call_state */ VoiceCallState, /* out_ip_type */ ContextIpType, /* out_context_type */ Uuid, /* out_nw_error */ number, /* out_media_preference */ AccessMediaType, /* out_access_string */ string, /* out_unnamed_ies */ Tlv[] ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number, /* out_packet_filters_count */ number, /* out_packet_filters */ PacketFilterV3[] ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_highest_available_data_class */ DataClassV3, /* out_uplink_speed */ number, /* out_downlink_speed */ number, /* out_frequency_range */ FrequencyRange, /* out_data_subclass */ DataSubclass, /* out_tai */ Tai ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_highest_available_data_class */ DataClassV3, /* out_uplink_speed */ number, /* out_downlink_speed */ number, /* out_frequency_range */ FrequencyRange, /* out_data_subclass */ DataSubclass, /* out_tai */ Tai ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState, /* out_flags */ SubscriberReadyStatusFlag, /* out_subscriber_id */ string, /* out_sim_icc_id */ string, /* out_ready_info */ ReadyInfoFlag, /* out_telephone_numbers_count */ number, /* out_telephone_numbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState, /* out_flags */ SubscriberReadyStatusFlag, /* out_subscriber_id */ string, /* out_sim_icc_id */ string, /* out_ready_info */ ReadyInfoFlag, /* out_telephone_numbers_count */ number, /* out_telephone_numbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Get' response command in the 'MS Firmware ID' service.
     */
    ms_firmware_id_get_response_parse(): [ /* returnType */ boolean, /* out_firmware_id */ Uuid ]
    /**
     * Parses and returns parameters of the 'Config' response command in the 'MS SAR' service.
     */
    ms_sar_config_response_parse(): [ /* returnType */ boolean, /* out_mode */ SarControlMode, /* out_backoff_state */ SarBackoffState, /* out_wifi_integration */ SarWifiHardwareState, /* out_config_states_count */ number, /* out_config_states */ SarConfigState[] ]
    /**
     * Parses and returns parameters of the 'Transmission status' notification command in the 'MS SAR' service.
     */
    ms_sar_transmission_status_notification_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus, /* out_transmission_status */ TransmissionState, /* out_hysteresis_timer */ number ]
    /**
     * Parses and returns parameters of the 'Transmission status' response command in the 'MS SAR' service.
     */
    ms_sar_transmission_status_response_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus, /* out_transmission_status */ TransmissionState, /* out_hysteresis_timer */ number ]
    /**
     * Parses and returns parameters of the 'APDU' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_apdu_response_parse(): [ /* returnType */ boolean, /* out_status */ number, /* out_response */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'ATR' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_atr_response_parse(): [ /* returnType */ boolean, /* out_atr */ string ]
    /**
     * Parses and returns parameters of the 'Close Channel' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_close_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number ]
    /**
     * Parses and returns parameters of the 'Open Channel' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_open_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number, /* out_channel */ number, /* out_response */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Reset' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_reset_response_parse(): [ /* returnType */ boolean, /* out_pass_through_status */ UiccPassThroughStatus ]
    /**
     * Parses and returns parameters of the 'Terminal Capability' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_terminal_capability_response_parse(): [ /* returnType */ boolean, /* out_terminal_capability_count */ number, /* out_terminal_capability */ TerminalCapabilityInfo[] ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' notification command in the 'Basic Connect' service.
     */
    multicarrier_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' response command in the 'Basic Connect' service.
     */
    multicarrier_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Network Idle Hint' response command in the 'Basic Connect' service.
     */
    network_idle_hint_response_parse(): [ /* returnType */ boolean, /* out_state */ NetworkIdleHintState ]
    /**
     * Gets the result of the 'Open' operation in the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    open_done_get_result(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    open_done_get_status_code(): StatusError
    /**
     * Get the maximum control transfer set to be used in the #MbimMessage of type
     * %MBIM_MESSAGE_TYPE_OPEN.
     */
    open_get_max_control_transfer(): number
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Basic Connect' service.
     */
    packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_highest_available_data_class */ DataClass, /* out_uplink_speed */ number, /* out_downlink_speed */ number ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Basic Connect' service.
     */
    packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number, /* out_packet_service_state */ PacketServiceState, /* out_highest_available_data_class */ DataClass, /* out_uplink_speed */ number, /* out_downlink_speed */ number ]
    /**
     * Parses and returns parameters of the 'Packet Statistics' response command in the 'Basic Connect' service.
     */
    packet_statistics_response_parse(): [ /* returnType */ boolean, /* out_in_discards */ number, /* out_in_errors */ number, /* out_in_octets */ number, /* out_in_packets */ number, /* out_out_octets */ number, /* out_out_packets */ number, /* out_out_errors */ number, /* out_out_discards */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' notification command in the 'Phonebook' service.
     */
    phonebook_configuration_notification_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState, /* out_number_of_entries */ number, /* out_used_entries */ number, /* out_max_number_length */ number, /* out_max_name */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Phonebook' service.
     */
    phonebook_configuration_response_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState, /* out_number_of_entries */ number, /* out_used_entries */ number, /* out_max_number_length */ number, /* out_max_name */ number ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'Phonebook' service.
     */
    phonebook_delete_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Read' response command in the 'Phonebook' service.
     */
    phonebook_read_response_parse(): [ /* returnType */ boolean, /* out_entry_count */ number, /* out_entries */ PhonebookEntry[] ]
    /**
     * Parses and returns parameters of the 'Write' response command in the 'Phonebook' service.
     */
    phonebook_write_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Pin List' response command in the 'Basic Connect' service.
     */
    pin_list_response_parse(): [ /* returnType */ boolean, /* out_pin_desc_pin1 */ PinDesc, /* out_pin_desc_pin2 */ PinDesc, /* out_pin_desc_device_sim_pin */ PinDesc, /* out_pin_desc_device_first_sim_pin */ PinDesc, /* out_pin_desc_network_pin */ PinDesc, /* out_pin_desc_network_subset_pin */ PinDesc, /* out_pin_desc_service_provider_pin */ PinDesc, /* out_pin_desc_corporate_pin */ PinDesc, /* out_pin_desc_subsidy_lock */ PinDesc, /* out_pin_desc_custom */ PinDesc ]
    /**
     * Parses and returns parameters of the 'Pin' response command in the 'Basic Connect' service.
     */
    pin_response_parse(): [ /* returnType */ boolean, /* out_pin_type */ PinType, /* out_pin_state */ PinState, /* out_remaining_attempts */ number ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' notification command in the 'Basic Connect' service.
     */
    preferred_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' response command in the 'Basic Connect' service.
     */
    preferred_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ Provider[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Basic Connect' service.
     */
    provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number, /* out_provisioned_contexts */ ProvisionedContextElement[] ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Basic Connect' service.
     */
    provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number, /* out_provisioned_contexts */ ProvisionedContextElement[] ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Proxy Control' service.
     */
    proxy_control_configuration_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Version' notification command in the 'Proxy Control' service.
     */
    proxy_control_version_notification_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number, /* out_mbim_extended_version */ number ]
    /**
     * Parses and returns parameters of the 'File Open' response command in the 'QDU' service.
     */
    qdu_file_open_response_parse(): [ /* returnType */ boolean, /* out_max_transfer_size */ number, /* out_max_window_size */ number ]
    /**
     * Parses and returns parameters of the 'File Write' response command in the 'QDU' service.
     */
    qdu_file_write_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Quectel Read Version' response command in the 'QDU' service.
     */
    qdu_quectel_read_version_response_parse(): [ /* returnType */ boolean, /* out_version_id */ number, /* out_version */ string ]
    /**
     * Parses and returns parameters of the 'Quectel Reboot' response command in the 'QDU' service.
     */
    qdu_quectel_reboot_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Update Session' response command in the 'QDU' service.
     */
    qdu_update_session_response_parse(): [ /* returnType */ boolean, /* out_current_session_type */ QduSessionType, /* out_current_session_status */ QduSessionStatus, /* out_last_session_type */ QduSessionType, /* out_last_session_result */ QduSessionResult, /* out_last_session_error_offset */ number, /* out_last_session_error_size */ number ]
    /**
     * Parses and returns parameters of the 'msg' notification command in the 'QMI' service.
     */
    qmi_msg_notification_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'msg' response command in the 'QMI' service.
     */
    qmi_msg_response_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Quectel' service.
     */
    quectel_radio_state_response_parse(): [ /* returnType */ boolean, /* out_radio_state */ QuectelRadioSwitchState ]
    /**
     * Parses and returns parameters of the 'Radio State' notification command in the 'Basic Connect' service.
     */
    radio_state_notification_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState, /* out_sw_radio_state */ RadioSwitchState ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Basic Connect' service.
     */
    radio_state_response_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState, /* out_sw_radio_state */ RadioSwitchState ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Message
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Basic Connect' service.
     */
    register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_register_state */ RegisterState, /* out_register_mode */ RegisterMode, /* out_available_data_classes */ DataClass, /* out_current_cellular_class */ CellularClass, /* out_provider_id */ string, /* out_provider_name */ string, /* out_roaming_text */ string, /* out_registration_flag */ RegistrationFlag ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Basic Connect' service.
     */
    register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_register_state */ RegisterState, /* out_register_mode */ RegisterMode, /* out_available_data_classes */ DataClass, /* out_current_cellular_class */ CellularClass, /* out_provider_id */ string, /* out_provider_name */ string, /* out_roaming_text */ string, /* out_registration_flag */ RegistrationFlag ]
    /**
     * Gets the result of the operation from the response message, which
     * can be either a %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message or a message of the
     * specified `expected` type.
     * @param expected expected #MbimMessageType if there isn't any error in the operation.
     */
    response_get_result(expected: MessageType): boolean
    /**
     * Parses and returns parameters of the 'Service Activation' response command in the 'Basic Connect' service.
     */
    service_activation_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError, /* out_buffer */ Uint8Array ]
    /**
     * Sets the transaction ID of the message.
     * @param transaction_id the transaction id.
     */
    set_transaction_id(transaction_id: number): void
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Basic Connect' service.
     */
    signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number, /* out_error_rate */ number, /* out_signal_strength_interval */ number, /* out_rssi_threshold */ number, /* out_error_rate_threshold */ number ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Basic Connect' service.
     */
    signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number, /* out_error_rate */ number, /* out_signal_strength_interval */ number, /* out_rssi_threshold */ number, /* out_error_rate_threshold */ number ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'SMS' service.
     */
    sms_configuration_response_parse(): [ /* returnType */ boolean, /* out_sms_storage_state */ SmsStorageState, /* out_format */ SmsFormat, /* out_max_messages */ number, /* out_cdma_short_message_size */ number, /* out_sc_address */ string ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'SMS' service.
     */
    sms_delete_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Message Store Status' notification command in the 'SMS' service.
     */
    sms_message_store_status_notification_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag, /* out_message_index */ number ]
    /**
     * Parses and returns parameters of the 'Message Store Status' response command in the 'SMS' service.
     */
    sms_message_store_status_response_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag, /* out_message_index */ number ]
    /**
     * Parses and returns parameters of the 'Read' notification command in the 'SMS' service.
     */
    sms_read_notification_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat, /* out_messages_count */ number, /* out_pdu_messages */ SmsPduReadRecord[], /* out_cdma_messages */ SmsCdmaReadRecord[] ]
    /**
     * Parses and returns parameters of the 'Read' response command in the 'SMS' service.
     */
    sms_read_response_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat, /* out_messages_count */ number, /* out_pdu_messages */ SmsPduReadRecord[], /* out_cdma_messages */ SmsCdmaReadRecord[] ]
    /**
     * Parses and returns parameters of the 'Send' response command in the 'SMS' service.
     */
    sms_send_response_parse(): [ /* returnType */ boolean, /* out_message_reference */ number ]
    /**
     * Parses and returns parameters of the 'Envelope' response command in the 'STK' service.
     */
    stk_envelope_response_parse(): [ /* returnType */ boolean, /* out_envelope_support */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Pac' notification command in the 'STK' service.
     */
    stk_pac_notification_parse(): [ /* returnType */ boolean, /* out_pac_type */ StkPacType, /* out_data_buffer */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Pac' response command in the 'STK' service.
     */
    stk_pac_response_parse(): [ /* returnType */ boolean, /* out_pac_support */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Terminal Response' response command in the 'STK' service.
     */
    stk_terminal_response_response_parse(): [ /* returnType */ boolean, /* out_result_data */ Uint8Array, /* out_status_words */ number ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Basic Connect' service.
     */
    subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState, /* out_subscriber_id */ string, /* out_sim_icc_id */ string, /* out_ready_info */ ReadyInfoFlag, /* out_telephone_numbers_count */ number, /* out_telephone_numbers */ string[] ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Basic Connect' service.
     */
    subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState, /* out_subscriber_id */ string, /* out_sim_icc_id */ string, /* out_ready_info */ ReadyInfoFlag, /* out_telephone_numbers_count */ number, /* out_telephone_numbers */ string[] ]
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Parses and returns parameters of the '' notification command in the 'USSD' service.
     */
    ussd_notification_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse, /* out_session_state */ UssdSessionState, /* out_data_coding_scheme */ number, /* out_payload */ Uint8Array ]
    /**
     * Parses and returns parameters of the '' response command in the 'USSD' service.
     */
    ussd_response_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse, /* out_session_state */ UssdSessionState, /* out_data_coding_scheme */ number, /* out_payload */ Uint8Array ]
    /**
     * Parses and returns parameters of the 'Visible Providers' response command in the 'Basic Connect' service.
     */
    visible_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number, /* out_providers */ Provider[] ]
}

/**
 * An opaque type representing a MBIM message.
 * @record 
 */
class Message {

    // Own properties of Mbim-1.0.Mbim.Message

    static name: string

    // Constructors of Mbim-1.0.Mbim.Message

    /**
     * Create a new request for the 'Location' query command in the 'ATDS' service.
     * @constructor 
     */
    static atds_location_query_new(): Message
    /**
     * Create a new request for the 'Operators' query command in the 'ATDS' service.
     * @constructor 
     */
    static atds_operators_query_new(): Message
    /**
     * Create a new request for the 'RAT' query command in the 'ATDS' service.
     * @constructor 
     */
    static atds_rat_query_new(): Message
    /**
     * Create a new request for the 'RAT' set command in the 'ATDS' service.
     * @constructor 
     * @param mode the 'Mode' field, given as a #MbimAtdsRatMode.
     */
    static atds_rat_set_new(mode: AtdsRatMode): Message
    /**
     * Create a new request for the 'Register State' query command in the 'ATDS' service.
     * @constructor 
     */
    static atds_register_state_query_new(): Message
    /**
     * Create a new request for the 'Signal' query command in the 'ATDS' service.
     * @constructor 
     */
    static atds_signal_query_new(): Message
    /**
     * Create a new request for the 'Aka' query command in the 'Auth' service.
     * @constructor 
     * @param rand the 'Rand' field, given as an array of 16 #guint8 values.
     * @param autn the 'Autn' field, given as an array of 16 #guint8 values.
     */
    static auth_aka_query_new(rand: Uint8Array, autn: Uint8Array): Message
    /**
     * Create a new request for the 'Akap' query command in the 'Auth' service.
     * @constructor 
     * @param rand the 'Rand' field, given as an array of 16 #guint8 values.
     * @param autn the 'Autn' field, given as an array of 16 #guint8 values.
     * @param network_name the 'NetworkName' field, given as a string.
     */
    static auth_akap_query_new(rand: Uint8Array, autn: Uint8Array, network_name: string): Message
    /**
     * Create a new request for the 'Sim' query command in the 'Auth' service.
     * @constructor 
     * @param rand1 the 'Rand1' field, given as an array of 16 #guint8 values.
     * @param rand2 the 'Rand2' field, given as an array of 16 #guint8 values.
     * @param rand3 the 'Rand3' field, given as an array of 16 #guint8 values.
     * @param n the 'N' field, given as a #guint32.
     */
    static auth_sim_query_new(rand1: Uint8Array, rand2: Uint8Array, rand3: Uint8Array, n: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_CLOSE_DONE with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param error_status_code a #MbimStatusError.
     */
    static close_done_new(transaction_id: number, error_status_code: StatusError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_CLOSE with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     */
    static close_new(transaction_id: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_COMMAND with the
     * specified parameters and an empty information buffer.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param service a #MbimService.
     * @param cid the command ID.
     * @param command_type the command type.
     */
    static command_new(transaction_id: number, service: Service, cid: number, command_type: MessageCommandType): Message
    /**
     * Create a new request for the 'Connect' query command in the 'Basic Connect' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param activation_state the 'ActivationState' field, given as a #MbimActivationState.
     * @param voice_call_state the 'VoiceCallState' field, given as a #MbimVoiceCallState.
     * @param ip_type the 'IpType' field, given as a #MbimContextIpType.
     * @param context_type the 'ContextType' field, given as a #MbimUuid.
     * @param nw_error the 'NwError' field, given as a #guint32.
     */
    static connect_query_new(session_id: number, activation_state: ActivationState, voice_call_state: VoiceCallState, ip_type: ContextIpType, context_type: Uuid, nw_error: number): Message
    /**
     * Create a new request for the 'Connect' set command in the 'Basic Connect' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param activation_command the 'ActivationCommand' field, given as a #MbimActivationCommand.
     * @param access_string the 'AccessString' field, given as a string.
     * @param user_name the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param auth_protocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param ip_type the 'IpType' field, given as a #MbimContextIpType.
     * @param context_type the 'ContextType' field, given as a #MbimUuid.
     */
    static connect_set_new(session_id: number, activation_command: ActivationCommand, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid): Message
    /**
     * Create a new request for the 'Device Caps' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static device_caps_query_new(): Message
    /**
     * Create a new request for the 'Device Service Subscribe List' set command in the 'Basic Connect' service.
     * @constructor 
     * @param events_count the 'EventsCount' field, given as a #guint32.
     * @param events the 'Events' field, given as an array of #MbimEventEntry items.
     */
    static device_service_subscribe_list_set_new(events_count: number, events: EventEntry[]): Message
    /**
     * Create a new request for the 'Device Service Subscribe List' set command in the 'Basic Connect' service.
     * @constructor 
     * @param events_count the 'EventsCount' field, given as a #guint32.
     * @param events the 'Events' field, given as an array of #MbimEventEntrys.
     */
    static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message
    /**
     * Create a new request for the 'Device Services' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static device_services_query_new(): Message
    /**
     * Create a new request for the 'Connect' set command in the 'DSS' service.
     * @constructor 
     * @param device_service_id the 'DeviceServiceId' field, given as a #MbimUuid.
     * @param dss_session_id the 'DssSessionId' field, given as a #guint32.
     * @param dss_link_state the 'DssLinkState' field, given as a #MbimDssLinkState.
     */
    static dss_connect_set_new(device_service_id: Uuid, dss_session_id: number, dss_link_state: DssLinkState): Message
    /**
     * Create a new request for the 'Emergency Mode' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static emergency_mode_query_new(): Message
    /**
     * Create a new request for the 'Emergency Mode' set command in the 'Basic Connect' service.
     * @constructor 
     * @param state the 'State' field, given as a #MbimEmergencyModeState.
     */
    static emergency_mode_set_new(state: EmergencyModeState): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_HOST_ERROR with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param error_status_code a #MbimProtocolError.
     */
    static error_new(transaction_id: number, error_status_code: ProtocolError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_FUNCTION_ERROR with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param error_status_code a #MbimProtocolError.
     */
    static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message
    /**
     * Create a new request for the 'Home Provider' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static home_provider_query_new(): Message
    /**
     * Create a new request for the 'Home Provider' set command in the 'Basic Connect' service.
     * @constructor 
     * @param provider the 'Provider' field, given as a #MbimProvider.
     */
    static home_provider_set_new(provider: Provider): Message
    /**
     * Create a new request for the 'Modem Reboot' set command in the 'Intel Firmware Update' service.
     * @constructor 
     */
    static intel_firmware_update_modem_reboot_set_new(): Message
    /**
     * Create a new request for the 'IP Configuration' query command in the 'Basic Connect' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param ipv4_configuration_available the 'IPv4ConfigurationAvailable' field, given as a #MbimIPConfigurationAvailableFlag.
     * @param ipv6_configuration_available the 'IPv6ConfigurationAvailable' field, given as a #MbimIPConfigurationAvailableFlag.
     * @param ipv4_address_count the 'IPv4AddressCount' field, given as a #guint32.
     * @param ipv4_address the 'IPv4Address' field, given as an array of #MbimIPv4Element items.
     * @param ipv6_address_count the 'IPv6AddressCount' field, given as a #guint32.
     * @param ipv6_address the 'IPv6Address' field, given as an array of #MbimIPv6Element items.
     * @param ipv4_gateway the 'IPv4Gateway' field, given as a #MbimIPv4.
     * @param ipv6_gateway the 'IPv6Gateway' field, given as a #MbimIPv6.
     * @param ipv4_dns_server_count the 'IPv4DnsServerCount' field, given as a #guint32.
     * @param ipv4_dns_server the 'IPv4DnsServer' field, given as an array of #MbimIPv4 items.
     * @param ipv6_dns_server_count the 'IPv6DnsServerCount' field, given as a #guint32.
     * @param ipv6_dns_server the 'IPv6DnsServer' field, given as an array of #MbimIPv6 items.
     * @param ipv4_mtu the 'IPv4Mtu' field, given as a #guint32.
     * @param ipv6_mtu the 'IPv6Mtu' field, given as a #guint32.
     */
    static ip_configuration_query_new(session_id: number, ipv4_configuration_available: IPConfigurationAvailableFlag, ipv6_configuration_available: IPConfigurationAvailableFlag, ipv4_address_count: number, ipv4_address: IPv4Element[], ipv6_address_count: number, ipv6_address: IPv6Element[], ipv4_gateway: IPv4, ipv6_gateway: IPv6, ipv4_dns_server_count: number, ipv4_dns_server: IPv4[], ipv6_dns_server_count: number, ipv6_dns_server: IPv6[], ipv4_mtu: number, ipv6_mtu: number): Message
    /**
     * Create a new request for the 'IP Packet Filters' query command in the 'Basic Connect' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param packet_filters_count the 'PacketFiltersCount' field, given as a #guint32.
     * @param packet_filters the 'PacketFilters' field, given as an array of #MbimPacketFilter items.
     */
    static ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' set command in the 'Basic Connect' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param packet_filters_count the 'PacketFiltersCount' field, given as a #guint32.
     * @param packet_filters the 'PacketFilters' field, given as an array of #MbimPacketFilter items.
     */
    static ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    /**
     * Create a new request for the 'Base Stations Info' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param max_gsm_count the 'MaxGsmCount' field, given as a #guint32.
     * @param max_umts_count the 'MaxUmtsCount' field, given as a #guint32.
     * @param max_tdscdma_count the 'MaxTdscdmaCount' field, given as a #guint32.
     * @param max_lte_count the 'MaxLteCount' field, given as a #guint32.
     * @param max_cdma_count the 'MaxCdmaCount' field, given as a #guint32.
     */
    static ms_basic_connect_extensions_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number): Message
    /**
     * Create a new request for the 'Device Caps' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_device_caps_query_new(): Message
    /**
     * Create a new request for the 'Device Slot Mappings' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_device_slot_mappings_query_new(): Message
    /**
     * Create a new request for the 'Device Slot Mappings' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param map_count the 'MapCount' field, given as a #guint32.
     * @param slot_map the 'SlotMap' field, given as an array of #MbimSlot items.
     */
    static ms_basic_connect_extensions_device_slot_mappings_set_new(map_count: number, slot_map: Slot[]): Message
    /**
     * Create a new request for the 'Location Info Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_location_info_status_query_new(): Message
    /**
     * Create a new request for the 'Lte Attach Configuration' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message
    /**
     * Create a new request for the 'Lte Attach Configuration' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param operation the 'Operation' field, given as a #MbimLteAttachContextOperation.
     * @param configuration_count the 'ConfigurationCount' field, given as a #guint32.
     * @param configurations the 'Configurations' field, given as an array of #MbimLteAttachConfiguration items.
     */
    static ms_basic_connect_extensions_lte_attach_configuration_set_new(operation: LteAttachContextOperation, configuration_count: number, configurations: LteAttachConfiguration[]): Message
    /**
     * Create a new request for the 'Lte Attach Info' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_lte_attach_info_query_new(): Message
    /**
     * Create a new request for the 'Lte Attach Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_lte_attach_status_query_new(): Message
    /**
     * Create a new request for the 'PCO' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param pco_value the 'PcoValue' field, given as a #MbimPcoValue.
     */
    static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message
    /**
     * Create a new request for the 'Provisioned Contexts' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_provisioned_contexts_query_new(): Message
    /**
     * Create a new request for the 'Provisioned Contexts' set command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param operation the 'Operation' field, given as a #MbimContextOperation.
     * @param context_type the 'ContextType' field, given as a #MbimUuid.
     * @param ip_type the 'IpType' field, given as a #MbimContextIpType.
     * @param state the 'State' field, given as a #MbimContextState.
     * @param roaming the 'Roaming' field, given as a #MbimContextRoamingControl.
     * @param media_type the 'MediaType' field, given as a #MbimContextMediaType.
     * @param source the 'Source' field, given as a #MbimContextSource.
     * @param access_string the 'AccessString' field, given as a string.
     * @param user_name the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param auth_protocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     */
    static ms_basic_connect_extensions_provisioned_contexts_set_new(operation: ContextOperation, context_type: Uuid, ip_type: ContextIpType, state: ContextState, roaming: ContextRoamingControl, media_type: ContextMediaType, source: ContextSource, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol): Message
    /**
     * Create a new request for the 'Slot Info Status' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     * @param slot_index the 'SlotIndex' field, given as a #guint32.
     */
    static ms_basic_connect_extensions_slot_info_status_query_new(slot_index: number): Message
    /**
     * Create a new request for the 'Sys Caps' query command in the 'Ms Basic Connect Extensions' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_sys_caps_query_new(): Message
    /**
     * Create a new request for the 'Version' query command in the 'Ms Basic Connect Extensions V2' service.
     * @constructor 
     * @param mbim_version the 'MbimVersion' field, given as a #guint16.
     * @param mbim_extended_version the 'MbimExtendedVersion' field, given as a #guint16.
     */
    static ms_basic_connect_extensions_v2_version_query_new(mbim_version: number, mbim_extended_version: number): Message
    /**
     * Create a new request for the 'Base Stations Info' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     * @param max_gsm_count the 'MaxGsmCount' field, given as a #guint32.
     * @param max_umts_count the 'MaxUmtsCount' field, given as a #guint32.
     * @param max_tdscdma_count the 'MaxTdscdmaCount' field, given as a #guint32.
     * @param max_lte_count the 'MaxLteCount' field, given as a #guint32.
     * @param max_cdma_count the 'MaxCdmaCount' field, given as a #guint32.
     * @param max_nr_count the 'MaxNrCount' field, given as a #guint32.
     */
    static ms_basic_connect_extensions_v3_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number, max_nr_count: number): Message
    /**
     * Create a new request for the 'Modem Configuration' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_v3_modem_configuration_query_new(): Message
    /**
     * Create a new request for the 'Registration Parameters' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_v3_registration_parameters_query_new(): Message
    /**
     * Create a new request for the 'Registration Parameters' set command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     * @param mico_mode the 'MicoMode' field, given as a #MbimMicoMode.
     * @param drx_cycle the 'DrxCycle' field, given as a #MbimDrxCycle.
     * @param ladn_info the 'LadnInfo' field, given as a #MbimLadnInfo.
     * @param default_pdu_activation_hint the 'DefaultPduActivationHint' field, given as a #MbimDefaultPduActivationHint.
     * @param re_register_if_nedeed the 'ReRegisterIfNedeed' field, given as a #gboolean.
     * @param unnamed_ies the 'UnnamedIes' field, given as a list of # items.
     */
    static ms_basic_connect_extensions_v3_registration_parameters_set_new(mico_mode: MicoMode, drx_cycle: DrxCycle, ladn_info: LadnInfo, default_pdu_activation_hint: DefaultPduActivationHint, re_register_if_nedeed: boolean, unnamed_ies: Tlv[]): Message
    /**
     * Create a new request for the 'Wake Reason' query command in the 'Ms Basic Connect Extensions V3' service.
     * @constructor 
     */
    static ms_basic_connect_extensions_v3_wake_reason_query_new(): Message
    /**
     * Create a new request for the 'Connect' query command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     */
    static ms_basic_connect_v3_connect_query_new(session_id: number): Message
    /**
     * Create a new request for the 'Connect' set command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param activation_command the 'ActivationCommand' field, given as a #MbimActivationCommand.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param auth_protocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param ip_type the 'IpType' field, given as a #MbimContextIpType.
     * @param context_type the 'ContextType' field, given as a #MbimUuid.
     * @param media_preference the 'MediaPreference' field, given as a #MbimAccessMediaType.
     * @param access_string the 'AccessString' field, given as a string.
     * @param user_name the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param unnamed_ies the 'UnnamedIes' field, given as a list of # items.
     */
    static ms_basic_connect_v3_connect_set_new(session_id: number, activation_command: ActivationCommand, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid, media_preference: AccessMediaType, access_string: string, user_name: string, password: string, unnamed_ies: Tlv[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' query command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param packet_filters_count the 'PacketFiltersCount' field, given as a #guint32.
     * @param packet_filters the 'PacketFilters' field, given as an array of #MbimPacketFilterV3 items.
     */
    static ms_basic_connect_v3_ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    /**
     * Create a new request for the 'IP Packet Filters' set command in the 'Ms Basic Connect V3' service.
     * @constructor 
     * @param session_id the 'SessionId' field, given as a #guint32.
     * @param packet_filters_count the 'PacketFiltersCount' field, given as a #guint32.
     * @param packet_filters the 'PacketFilters' field, given as an array of #MbimPacketFilterV3 items.
     */
    static ms_basic_connect_v3_ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    /**
     * Create a new request for the 'Get' query command in the 'MS Firmware ID' service.
     * @constructor 
     */
    static ms_firmware_id_get_query_new(): Message
    /**
     * Create a new request for the 'Notify' set command in the 'MS Host Shutdown' service.
     * @constructor 
     */
    static ms_host_shutdown_notify_set_new(): Message
    /**
     * Create a new request for the 'Config' query command in the 'MS SAR' service.
     * @constructor 
     */
    static ms_sar_config_query_new(): Message
    /**
     * Create a new request for the 'Config' set command in the 'MS SAR' service.
     * @constructor 
     * @param mode the 'Mode' field, given as a #MbimSarControlMode.
     * @param backoff_state the 'BackoffState' field, given as a #MbimSarBackoffState.
     * @param config_states_count the 'ConfigStatesCount' field, given as a #guint32.
     * @param config_states the 'ConfigStates' field, given as an array of #MbimSarConfigState items.
     */
    static ms_sar_config_set_new(mode: SarControlMode, backoff_state: SarBackoffState, config_states_count: number, config_states: SarConfigState[]): Message
    /**
     * Create a new request for the 'Transmission status' query command in the 'MS SAR' service.
     * @constructor 
     */
    static ms_sar_transmission_status_query_new(): Message
    /**
     * Create a new request for the 'Transmission status' set command in the 'MS SAR' service.
     * @constructor 
     * @param channel_notification the 'ChannelNotification' field, given as a #MbimTransmissionNotificationStatus.
     * @param hysteresis_timer the 'HysteresisTimer' field, given as a #guint32.
     */
    static ms_sar_transmission_status_set_new(channel_notification: TransmissionNotificationStatus, hysteresis_timer: number): Message
    /**
     * Create a new request for the 'APDU' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param channel the 'Channel' field, given as a #guint32.
     * @param secure_messaging the 'SecureMessaging' field, given as a #MbimUiccSecureMessaging.
     * @param class_byte_type the 'ClassByteType' field, given as a #MbimUiccClassByteType.
     * @param command the 'Command' field, given as an array of #guint8 values.
     */
    static ms_uicc_low_level_access_apdu_set_new(channel: number, secure_messaging: UiccSecureMessaging, class_byte_type: UiccClassByteType, command: Uint8Array): Message
    /**
     * Create a new request for the 'ATR' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static ms_uicc_low_level_access_atr_query_new(): Message
    /**
     * Create a new request for the 'Close Channel' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param channel the 'Channel' field, given as a #guint32.
     * @param channel_group the 'ChannelGroup' field, given as a #guint32.
     */
    static ms_uicc_low_level_access_close_channel_set_new(channel: number, channel_group: number): Message
    /**
     * Create a new request for the 'Open Channel' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param app_id the 'AppId' field, given as an array of #guint8 values.
     * @param select_p2_arg the 'SelectP2Arg' field, given as a #guint32.
     * @param channel_group the 'ChannelGroup' field, given as a #guint32.
     */
    static ms_uicc_low_level_access_open_channel_set_new(app_id: Uint8Array, select_p2_arg: number, channel_group: number): Message
    /**
     * Create a new request for the 'Reset' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static ms_uicc_low_level_access_reset_query_new(): Message
    /**
     * Create a new request for the 'Reset' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param pass_through_action the 'PassThroughAction' field, given as a #MbimUiccPassThroughAction.
     */
    static ms_uicc_low_level_access_reset_set_new(pass_through_action: UiccPassThroughAction): Message
    /**
     * Create a new request for the 'Terminal Capability' query command in the 'MS UICC Low Level Access' service.
     * @constructor 
     */
    static ms_uicc_low_level_access_terminal_capability_query_new(): Message
    /**
     * Create a new request for the 'Terminal Capability' set command in the 'MS UICC Low Level Access' service.
     * @constructor 
     * @param terminal_capability_count the 'TerminalCapabilityCount' field, given as a #guint32.
     * @param terminal_capability the 'TerminalCapability' field, given as an array of #MbimTerminalCapabilityInfo items.
     */
    static ms_uicc_low_level_access_terminal_capability_set_new(terminal_capability_count: number, terminal_capability: TerminalCapabilityInfo[]): Message
    /**
     * Create a new request for the 'Multicarrier Providers' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static multicarrier_providers_query_new(): Message
    /**
     * Create a new request for the 'Multicarrier Providers' set command in the 'Basic Connect' service.
     * @constructor 
     * @param providers_count the 'ProvidersCount' field, given as a #guint32.
     * @param providers the 'Providers' field, given as an array of #MbimProvider items.
     */
    static multicarrier_providers_set_new(providers_count: number, providers: Provider[]): Message
    /**
     * Create a new request for the 'Network Idle Hint' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static network_idle_hint_query_new(): Message
    /**
     * Create a new request for the 'Network Idle Hint' set command in the 'Basic Connect' service.
     * @constructor 
     * @param state the 'State' field, given as a #MbimNetworkIdleHintState.
     */
    static network_idle_hint_set_new(state: NetworkIdleHintState): Message
    /**
     * Create a #MbimMessage with the given contents.
     * @constructor 
     * @param data contents of the message.
     * @param data_length length of the message.
     */
    constructor(data: number, data_length: number) 
    /**
     * Create a #MbimMessage with the given contents.
     * @constructor 
     * @param data contents of the message.
     * @param data_length length of the message.
     */
    static new(data: number, data_length: number): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_OPEN_DONE with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param error_status_code a #MbimStatusError.
     */
    static open_done_new(transaction_id: number, error_status_code: StatusError): Message
    /**
     * Create a new #MbimMessage of type %MBIM_MESSAGE_TYPE_OPEN with the specified
     * parameters.
     * @constructor 
     * @param transaction_id transaction ID.
     * @param max_control_transfer maximum control transfer.
     */
    static open_new(transaction_id: number, max_control_transfer: number): Message
    /**
     * Create a new request for the 'Packet Service' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static packet_service_query_new(): Message
    /**
     * Create a new request for the 'Packet Service' set command in the 'Basic Connect' service.
     * @constructor 
     * @param packet_service_action the 'PacketServiceAction' field, given as a #MbimPacketServiceAction.
     */
    static packet_service_set_new(packet_service_action: PacketServiceAction): Message
    /**
     * Create a new request for the 'Packet Statistics' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static packet_statistics_query_new(): Message
    /**
     * Create a new request for the 'Configuration' query command in the 'Phonebook' service.
     * @constructor 
     */
    static phonebook_configuration_query_new(): Message
    /**
     * Create a new request for the 'Delete' set command in the 'Phonebook' service.
     * @constructor 
     * @param filter_flag the 'FilterFlag' field, given as a #MbimPhonebookFlag.
     * @param filter_message_index the 'FilterMessageIndex' field, given as a #guint32.
     */
    static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    /**
     * Create a new request for the 'Read' query command in the 'Phonebook' service.
     * @constructor 
     * @param filter_flag the 'FilterFlag' field, given as a #MbimPhonebookFlag.
     * @param filter_message_index the 'FilterMessageIndex' field, given as a #guint32.
     */
    static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    /**
     * Create a new request for the 'Write' set command in the 'Phonebook' service.
     * @constructor 
     * @param save_flag the 'SaveFlag' field, given as a #MbimPhonebookWriteFlag.
     * @param save_index the 'SaveIndex' field, given as a #guint32.
     * @param number the 'Number' field, given as a string.
     * @param name the 'Name' field, given as a string.
     */
    static phonebook_write_set_new(save_flag: PhonebookWriteFlag, save_index: number, number: string, name: string): Message
    /**
     * Create a new request for the 'Pin List' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static pin_list_query_new(): Message
    /**
     * Create a new request for the 'Pin' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static pin_query_new(): Message
    /**
     * Create a new request for the 'Pin' set command in the 'Basic Connect' service.
     * @constructor 
     * @param pin_type the 'PinType' field, given as a #MbimPinType.
     * @param pin_operation the 'PinOperation' field, given as a #MbimPinOperation.
     * @param pin the 'Pin' field, given as a string.
     * @param new_pin the 'NewPin' field, given as a string.
     */
    static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message
    /**
     * Create a new request for the 'Preferred Providers' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static preferred_providers_query_new(): Message
    /**
     * Create a new request for the 'Preferred Providers' set command in the 'Basic Connect' service.
     * @constructor 
     * @param providers_count the 'ProvidersCount' field, given as a #guint32.
     * @param providers the 'Providers' field, given as an array of #MbimProvider items.
     */
    static preferred_providers_set_new(providers_count: number, providers: Provider[]): Message
    /**
     * Create a new request for the 'Provisioned Contexts' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static provisioned_contexts_query_new(): Message
    /**
     * Create a new request for the 'Provisioned Contexts' set command in the 'Basic Connect' service.
     * @constructor 
     * @param context_id the 'ContextId' field, given as a #guint32.
     * @param context_type the 'ContextType' field, given as a #MbimUuid.
     * @param access_string the 'AccessString' field, given as a string.
     * @param user_name the 'UserName' field, given as a string.
     * @param password the 'Password' field, given as a string.
     * @param compression the 'Compression' field, given as a #MbimCompression.
     * @param auth_protocol the 'AuthProtocol' field, given as a #MbimAuthProtocol.
     * @param provider_id the 'ProviderId' field, given as a string.
     */
    static provisioned_contexts_set_new(context_id: number, context_type: Uuid, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, provider_id: string): Message
    /**
     * Create a new request for the 'Configuration' set command in the 'Proxy Control' service.
     * @constructor 
     * @param device_path the 'DevicePath' field, given as a string.
     * @param timeout the 'Timeout' field, given as a #guint32.
     */
    static proxy_control_configuration_set_new(device_path: string, timeout: number): Message
    /**
     * Create a new request for the 'File Open' query command in the 'QDU' service.
     * @constructor 
     */
    static qdu_file_open_query_new(): Message
    /**
     * Create a new request for the 'File Open' set command in the 'QDU' service.
     * @constructor 
     * @param file_type the 'FileType' field, given as a #MbimQduFileType.
     * @param file_size the 'FileSize' field, given as a #guint32.
     */
    static qdu_file_open_set_new(file_type: QduFileType, file_size: number): Message
    /**
     * Create a new request for the 'File Write' set command in the 'QDU' service.
     * @constructor 
     * @param data_buffer the 'DataBuffer' field, given as an array of #guint8 values.
     */
    static qdu_file_write_set_new(data_buffer: Uint8Array): Message
    /**
     * Create a new request for the 'Quectel Read Version' set command in the 'QDU' service.
     * @constructor 
     * @param version_type the 'VersionType' field, given as a #MbimQduQuectelVersionType.
     */
    static qdu_quectel_read_version_set_new(version_type: QduQuectelVersionType): Message
    /**
     * Create a new request for the 'Quectel Reboot' set command in the 'QDU' service.
     * @constructor 
     * @param reboot_type the 'RebootType' field, given as a #MbimQduQuectelRebootType.
     */
    static qdu_quectel_reboot_set_new(reboot_type: QduQuectelRebootType): Message
    /**
     * Create a new request for the 'Update Session' query command in the 'QDU' service.
     * @constructor 
     */
    static qdu_update_session_query_new(): Message
    /**
     * Create a new request for the 'Update Session' set command in the 'QDU' service.
     * @constructor 
     * @param session_action the 'SessionAction' field, given as a #MbimQduSessionAction.
     * @param session_type the 'SessionType' field, given as a #MbimQduSessionType.
     */
    static qdu_update_session_set_new(session_action: QduSessionAction, session_type: QduSessionType): Message
    /**
     * Create a new request for the 'msg' set command in the 'QMI' service.
     * @constructor 
     * @param qmi_msg the 'QmiMsg' field, given as an array of #guint8 values.
     */
    static qmi_msg_set_new(qmi_msg: Uint8Array): Message
    /**
     * Create a new request for the 'Radio State' query command in the 'Quectel' service.
     * @constructor 
     */
    static quectel_radio_state_query_new(): Message
    /**
     * Create a new request for the 'Radio State' set command in the 'Quectel' service.
     * @constructor 
     * @param radio_state the 'RadioState' field, given as a #MbimQuectelRadioSwitchState.
     */
    static quectel_radio_state_set_new(radio_state: QuectelRadioSwitchState): Message
    /**
     * Create a new request for the 'Radio State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static radio_state_query_new(): Message
    /**
     * Create a new request for the 'Radio State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param radio_state the 'RadioState' field, given as a #MbimRadioSwitchState.
     */
    static radio_state_set_new(radio_state: RadioSwitchState): Message
    /**
     * Create a new request for the 'Register State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static register_state_query_new(): Message
    /**
     * Create a new request for the 'Register State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param provider_id the 'ProviderId' field, given as a string.
     * @param register_action the 'RegisterAction' field, given as a #MbimRegisterAction.
     * @param data_class the 'DataClass' field, given as a #MbimDataClass.
     */
    static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message
    /**
     * Create a new request for the 'Service Activation' set command in the 'Basic Connect' service.
     * @constructor 
     * @param buffer the 'Buffer' field, given as an array of #guint8 values.
     */
    static service_activation_set_new(buffer: Uint8Array): Message
    /**
     * Create a new request for the 'Signal State' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static signal_state_query_new(): Message
    /**
     * Create a new request for the 'Signal State' set command in the 'Basic Connect' service.
     * @constructor 
     * @param signal_strength_interval the 'SignalStrengthInterval' field, given as a #guint32.
     * @param rssi_threshold the 'RssiThreshold' field, given as a #guint32.
     * @param error_rate_threshold the 'ErrorRateThreshold' field, given as a #guint32.
     */
    static signal_state_set_new(signal_strength_interval: number, rssi_threshold: number, error_rate_threshold: number): Message
    /**
     * Create a new request for the 'Configuration' query command in the 'SMS' service.
     * @constructor 
     */
    static sms_configuration_query_new(): Message
    /**
     * Create a new request for the 'Configuration' set command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param sc_address the 'ScAddress' field, given as a string.
     */
    static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message
    /**
     * Create a new request for the 'Delete' set command in the 'SMS' service.
     * @constructor 
     * @param flag the 'Flag' field, given as a #MbimSmsFlag.
     * @param message_index the 'MessageIndex' field, given as a #guint32.
     */
    static sms_delete_set_new(flag: SmsFlag, message_index: number): Message
    /**
     * Create a new request for the 'Message Store Status' query command in the 'SMS' service.
     * @constructor 
     */
    static sms_message_store_status_query_new(): Message
    /**
     * Create a new request for the 'Read' query command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param flag the 'Flag' field, given as a #MbimSmsFlag.
     * @param message_index the 'MessageIndex' field, given as a #guint32.
     */
    static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message
    /**
     * Create a new request for the 'Send' set command in the 'SMS' service.
     * @constructor 
     * @param format the 'Format' field, given as a #MbimSmsFormat.
     * @param pdu_message the 'PduMessage' field, given as a #MbimSmsPduSendRecord.
     * @param cdma_message the 'CdmaMessage' field, given as a #MbimSmsCdmaSendRecord.
     */
    static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message
    /**
     * Create a new request for the 'Envelope' query command in the 'STK' service.
     * @constructor 
     */
    static stk_envelope_query_new(): Message
    /**
     * Create a new request for the 'Envelope' set command in the 'STK' service.
     * @constructor 
     * @param data the 'Data' field, given as an array of #guint8 values.
     */
    static stk_envelope_set_new(data: Uint8Array): Message
    /**
     * Create a new request for the 'Pac' query command in the 'STK' service.
     * @constructor 
     */
    static stk_pac_query_new(): Message
    /**
     * Create a new request for the 'Pac' set command in the 'STK' service.
     * @constructor 
     * @param pac_host_control the 'PacHostControl' field, given as an array of 32 #guint8 values.
     */
    static stk_pac_set_new(pac_host_control: Uint8Array): Message
    /**
     * Create a new request for the 'Terminal Response' set command in the 'STK' service.
     * @constructor 
     * @param response the 'Response' field, given as an array of #guint8 values.
     */
    static stk_terminal_response_set_new(response: Uint8Array): Message
    /**
     * Create a new request for the 'Subscriber Ready Status' query command in the 'Basic Connect' service.
     * @constructor 
     */
    static subscriber_ready_status_query_new(): Message
    /**
     * Create a new request for the '' set command in the 'USSD' service.
     * @constructor 
     * @param action the 'Action' field, given as a #MbimUssdAction.
     * @param data_coding_scheme the 'DataCodingScheme' field, given as a #guint32.
     * @param payload the 'Payload' field, given as an array of #guint8 values.
     */
    static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array): Message
    /**
     * Create a new request for the 'Visible Providers' query command in the 'Basic Connect' service.
     * @constructor 
     * @param action the 'Action' field, given as a #MbimVisibleProvidersAction.
     */
    static visible_providers_query_new(action: VisibleProvidersAction): Message
}

interface PacketFilter {

    // Own fields of Mbim-1.0.Mbim.PacketFilter

    /**
     * a #guint32.
     * @field 
     */
    filter_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packet_filter: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packet_mask: number
}

/**
 * A MbimPacketFilter element.
 * @record 
 */
class PacketFilter {

    // Own properties of Mbim-1.0.Mbim.PacketFilter

    static name: string

    // Constructors of Mbim-1.0.Mbim.PacketFilter

    /**
     * Frees the memory allocated for the array of #MbimPacketFilter structs.
     * @param array a #NULL terminated array of #MbimPacketFilter structs.
     */
    static array_free(array: PacketFilterArray): void
}

interface PacketFilterV3 {

    // Own fields of Mbim-1.0.Mbim.PacketFilterV3

    /**
     * a #guint32.
     * @field 
     */
    filter_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packet_filter: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    packet_mask: number
    /**
     * a #guint32.
     * @field 
     */
    filter_id: number
}

/**
 * A MbimPacketFilterV3 element.
 * @record 
 */
class PacketFilterV3 {

    // Own properties of Mbim-1.0.Mbim.PacketFilterV3

    static name: string

    // Constructors of Mbim-1.0.Mbim.PacketFilterV3

    /**
     * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
     * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
     */
    static array_free(array: PacketFilterV3Array): void
}

interface PcoValue {

    // Own fields of Mbim-1.0.Mbim.PcoValue

    /**
     * a #guint32.
     * @field 
     */
    session_id: number
    /**
     * a #guint32.
     * @field 
     */
    pco_data_size: number
    /**
     * a #MbimPcoType given as a #guint32.
     * @field 
     */
    pco_data_type: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pco_data_buffer: number

    // Owm methods of Mbim-1.0.Mbim.PcoValue

    /**
     * Frees the memory allocated for the #MbimPcoValue.
     */
    free(): void
}

/**
 * A MbimPcoValue element.
 * @record 
 */
class PcoValue {

    // Own properties of Mbim-1.0.Mbim.PcoValue

    static name: string
}

interface PhonebookEntry {

    // Own fields of Mbim-1.0.Mbim.PhonebookEntry

    /**
     * a #guint32.
     * @field 
     */
    entry_index: number
    /**
     * a string.
     * @field 
     */
    number: string
    /**
     * a string.
     * @field 
     */
    name: string
}

/**
 * A MbimPhonebookEntry element.
 * @record 
 */
class PhonebookEntry {

    // Own properties of Mbim-1.0.Mbim.PhonebookEntry

    static name: string

    // Constructors of Mbim-1.0.Mbim.PhonebookEntry

    /**
     * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
     * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
     */
    static array_free(array: PhonebookEntryArray): void
}

interface PinDesc {

    // Own fields of Mbim-1.0.Mbim.PinDesc

    /**
     * a #MbimPinMode given as a #guint32.
     * @field 
     */
    pin_mode: number
    /**
     * a #MbimPinFormat given as a #guint32.
     * @field 
     */
    pin_format: number
    /**
     * a #guint32.
     * @field 
     */
    pin_length_min: number
    /**
     * a #guint32.
     * @field 
     */
    pin_length_max: number

    // Owm methods of Mbim-1.0.Mbim.PinDesc

    /**
     * Frees the memory allocated for the #MbimPinDesc.
     */
    free(): void
}

/**
 * A MbimPinDesc element.
 * @record 
 */
class PinDesc {

    // Own properties of Mbim-1.0.Mbim.PinDesc

    static name: string
}

interface Provider {

    // Own fields of Mbim-1.0.Mbim.Provider

    /**
     * a string.
     * @field 
     */
    provider_id: string
    /**
     * a #MbimProviderState given as a #guint32.
     * @field 
     */
    provider_state: number
    /**
     * a string.
     * @field 
     */
    provider_name: string
    /**
     * a #MbimCellularClass given as a #guint32.
     * @field 
     */
    cellular_class: number
    /**
     * a #guint32.
     * @field 
     */
    rssi: number
    /**
     * a #guint32.
     * @field 
     */
    error_rate: number

    // Owm methods of Mbim-1.0.Mbim.Provider

    /**
     * Frees the memory allocated for the #MbimProvider.
     */
    free(): void
}

/**
 * A MbimProvider element.
 * @record 
 */
class Provider {

    // Own properties of Mbim-1.0.Mbim.Provider

    static name: string

    // Constructors of Mbim-1.0.Mbim.Provider

    /**
     * Frees the memory allocated for the array of #MbimProvider structs.
     * @param array a #NULL terminated array of #MbimProvider structs.
     */
    static array_free(array: ProviderArray): void
}

interface ProvisionedContextElement {

    // Own fields of Mbim-1.0.Mbim.ProvisionedContextElement

    /**
     * a #guint32.
     * @field 
     */
    context_id: number
    /**
     * a #MbimUuid.
     * @field 
     */
    context_type: Uuid
    /**
     * a string.
     * @field 
     */
    access_string: string
    /**
     * a string.
     * @field 
     */
    user_name: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    auth_protocol: number
}

/**
 * A MbimProvisionedContextElement element.
 * @record 
 */
class ProvisionedContextElement {

    // Own properties of Mbim-1.0.Mbim.ProvisionedContextElement

    static name: string

    // Constructors of Mbim-1.0.Mbim.ProvisionedContextElement

    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
     */
    static array_free(array: ProvisionedContextElementArray): void
}

interface ProvisionedContextElementV2 {

    // Own fields of Mbim-1.0.Mbim.ProvisionedContextElementV2

    /**
     * a #guint32.
     * @field 
     */
    context_id: number
    /**
     * a #MbimUuid.
     * @field 
     */
    context_type: Uuid
    /**
     * a #MbimContextIpType given as a #guint32.
     * @field 
     */
    ip_type: number
    /**
     * a #MbimContextState given as a #guint32.
     * @field 
     */
    state: number
    /**
     * a #MbimContextRoamingControl given as a #guint32.
     * @field 
     */
    roaming: number
    /**
     * a #MbimContextMediaType given as a #guint32.
     * @field 
     */
    media_type: number
    /**
     * a #MbimContextSource given as a #guint32.
     * @field 
     */
    source: number
    /**
     * a string.
     * @field 
     */
    access_string: string
    /**
     * a string.
     * @field 
     */
    user_name: string
    /**
     * a string.
     * @field 
     */
    password: string
    /**
     * a #MbimCompression given as a #guint32.
     * @field 
     */
    compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     * @field 
     */
    auth_protocol: number
}

/**
 * A MbimProvisionedContextElementV2 element.
 * @record 
 */
class ProvisionedContextElementV2 {

    // Own properties of Mbim-1.0.Mbim.ProvisionedContextElementV2

    static name: string

    // Constructors of Mbim-1.0.Mbim.ProvisionedContextElementV2

    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
     */
    static array_free(array: ProvisionedContextElementV2Array): void
}

interface ProxyClass {

    // Own fields of Mbim-1.0.Mbim.ProxyClass

    parent: GObject.ObjectClass
}

abstract class ProxyClass {

    // Own properties of Mbim-1.0.Mbim.ProxyClass

    static name: string
}

interface ProxyPrivate {
}

class ProxyPrivate {

    // Own properties of Mbim-1.0.Mbim.ProxyPrivate

    static name: string
}

interface RsrpSnrInfo {

    // Own fields of Mbim-1.0.Mbim.RsrpSnrInfo

    /**
     * a #guint32.
     * @field 
     */
    rsrp: number
    /**
     * a #guint32.
     * @field 
     */
    snr: number
    /**
     * a #guint32.
     * @field 
     */
    rsrp_threshold: number
    /**
     * a #guint32.
     * @field 
     */
    snr_threshold: number
    /**
     * a #MbimDataClass given as a #guint32.
     * @field 
     */
    system_type: number
}

/**
 * A MbimRsrpSnrInfo element.
 * @record 
 */
class RsrpSnrInfo {

    // Own properties of Mbim-1.0.Mbim.RsrpSnrInfo

    static name: string

    // Constructors of Mbim-1.0.Mbim.RsrpSnrInfo

    /**
     * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
     * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
     */
    static array_free(array: RsrpSnrInfoArray): void
}

interface SarConfigState {

    // Own fields of Mbim-1.0.Mbim.SarConfigState

    /**
     * a #guint32.
     * @field 
     */
    antenna_index: number
    /**
     * a #guint32.
     * @field 
     */
    backoff_index: number
}

/**
 * A MbimSarConfigState element.
 * @record 
 */
class SarConfigState {

    // Own properties of Mbim-1.0.Mbim.SarConfigState

    static name: string

    // Constructors of Mbim-1.0.Mbim.SarConfigState

    /**
     * Frees the memory allocated for the array of #MbimSarConfigState structs.
     * @param array a #NULL terminated array of #MbimSarConfigState structs.
     */
    static array_free(array: SarConfigStateArray): void
}

interface Slot {

    // Own fields of Mbim-1.0.Mbim.Slot

    /**
     * a #guint32.
     * @field 
     */
    slot: number
}

/**
 * A MbimSlot element.
 * @record 
 */
class Slot {

    // Own properties of Mbim-1.0.Mbim.Slot

    static name: string

    // Constructors of Mbim-1.0.Mbim.Slot

    /**
     * Frees the memory allocated for the array of #MbimSlot structs.
     * @param array a #NULL terminated array of #MbimSlot structs.
     */
    static array_free(array: SlotArray): void
}

interface SmsCdmaReadRecord {

    // Own fields of Mbim-1.0.Mbim.SmsCdmaReadRecord

    /**
     * a #guint32.
     * @field 
     */
    message_index: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     * @field 
     */
    message_status: number
    /**
     * a string.
     * @field 
     */
    address: string
    /**
     * a string.
     * @field 
     */
    timestamp: string
    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     * @field 
     */
    encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     * @field 
     */
    language: number
    /**
     * size of the encoded_message array.
     * @field 
     */
    encoded_message_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    encoded_message: number
    /**
     * a #guint32.
     * @field 
     */
    encoded_message_size_in_characters: number
}

/**
 * A MbimSmsCdmaReadRecord element.
 * @record 
 */
class SmsCdmaReadRecord {

    // Own properties of Mbim-1.0.Mbim.SmsCdmaReadRecord

    static name: string

    // Constructors of Mbim-1.0.Mbim.SmsCdmaReadRecord

    /**
     * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
     */
    static array_free(array: SmsCdmaReadRecordArray): void
}

interface SmsCdmaSendRecord {

    // Own fields of Mbim-1.0.Mbim.SmsCdmaSendRecord

    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     * @field 
     */
    encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     * @field 
     */
    language: number
    /**
     * a string.
     * @field 
     */
    address: string
    /**
     * size of the encoded_message array.
     * @field 
     */
    encoded_message_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    encoded_message: number
    /**
     * a #guint32.
     * @field 
     */
    encoded_message_size_in_characters: number

    // Owm methods of Mbim-1.0.Mbim.SmsCdmaSendRecord

    /**
     * Frees the memory allocated for the #MbimSmsCdmaSendRecord.
     */
    free(): void
}

/**
 * A MbimSmsCdmaSendRecord element.
 * @record 
 */
class SmsCdmaSendRecord {

    // Own properties of Mbim-1.0.Mbim.SmsCdmaSendRecord

    static name: string
}

interface SmsPduReadRecord {

    // Own fields of Mbim-1.0.Mbim.SmsPduReadRecord

    /**
     * a #guint32.
     * @field 
     */
    message_index: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     * @field 
     */
    message_status: number
    /**
     * size of the pdu_data array.
     * @field 
     */
    pdu_data_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pdu_data: number
}

/**
 * A MbimSmsPduReadRecord element.
 * @record 
 */
class SmsPduReadRecord {

    // Own properties of Mbim-1.0.Mbim.SmsPduReadRecord

    static name: string

    // Constructors of Mbim-1.0.Mbim.SmsPduReadRecord

    /**
     * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
     */
    static array_free(array: SmsPduReadRecordArray): void
}

interface SmsPduSendRecord {

    // Own fields of Mbim-1.0.Mbim.SmsPduSendRecord

    /**
     * size of the pdu_data array.
     * @field 
     */
    pdu_data_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    pdu_data: number

    // Owm methods of Mbim-1.0.Mbim.SmsPduSendRecord

    /**
     * Frees the memory allocated for the #MbimSmsPduSendRecord.
     */
    free(): void
}

/**
 * A MbimSmsPduSendRecord element.
 * @record 
 */
class SmsPduSendRecord {

    // Own properties of Mbim-1.0.Mbim.SmsPduSendRecord

    static name: string
}

interface Tai {

    // Own fields of Mbim-1.0.Mbim.Tai

    /**
     * a #guint16.
     * @field 
     */
    plmn_mcc: number
    /**
     * a #guint16.
     * @field 
     */
    plmn_mnc: number
    /**
     * a #guint32.
     * @field 
     */
    tac: number

    // Owm methods of Mbim-1.0.Mbim.Tai

    /**
     * Frees the memory allocated for the #MbimTai.
     */
    free(): void
}

/**
 * A MbimTai element.
 * @record 
 */
class Tai {

    // Own properties of Mbim-1.0.Mbim.Tai

    static name: string
}

interface TerminalCapabilityInfo {

    // Own fields of Mbim-1.0.Mbim.TerminalCapabilityInfo

    /**
     * size of the terminal_capability_data array.
     * @field 
     */
    terminal_capability_data_size: number
    /**
     * an array of #guint8 values.
     * @field 
     */
    terminal_capability_data: number
}

/**
 * A MbimTerminalCapabilityInfo element.
 * @record 
 */
class TerminalCapabilityInfo {

    // Own properties of Mbim-1.0.Mbim.TerminalCapabilityInfo

    static name: string

    // Constructors of Mbim-1.0.Mbim.TerminalCapabilityInfo

    /**
     * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
     * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
     */
    static array_free(array: TerminalCapabilityInfoArray): void
}

interface Tlv {

    // Owm methods of Mbim-1.0.Mbim.Tlv

    /**
     * Create a #MbimTlv with the same contents as `self`.
     */
    dup(): Tlv
    /**
     * Gets the whole raw data buffer of the #MbimTlv.
     */
    get_raw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the TLV raw data.
     */
    get_tlv_data(): [ /* returnType */ number, /* out_length */ number ]
    /**
     * Gets the message type.
     */
    get_tlv_type(): TlvType
    /**
     * Get an array of #guint16 values with the contents in the #MbimTlv.
     * 
     * The method may return a successful return even with on empty arrays (i.e.
     * with `array_size` set to 0 and `array` set to %NULL).
     */
    guint16_array_get(): [ /* returnType */ boolean, /* array_size */ number, /* array */ number ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Tlv
    /**
     * Get a string with the contents in the #MbimTlv.
     */
    string_get(): string
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Get the contents of a wake command TLV.
     * 
     * The method may return a successful return even with on empty payload (i.e.
     * with `payload_size` set to 0 and `payload` set to %NULL).
     */
    wake_command_get(): [ /* returnType */ boolean, /* service */ Uuid, /* cid */ number, /* payload_size */ number, /* payload */ number ]
    /**
     * Get the contents of a wake packet TLV.
     */
    wake_packet_get(): [ /* returnType */ boolean, /* filter_id */ number, /* original_packet_size */ number, /* packet_size */ number, /* packet */ number ]
}

/**
 * An opaque type representing a MBIM TLV.
 * @record 
 */
class Tlv {

    // Own properties of Mbim-1.0.Mbim.Tlv

    static name: string

    // Constructors of Mbim-1.0.Mbim.Tlv

    /**
     * Create a #MbimTlv with the given contents.
     * @constructor 
     * @param type a #MbimTlvType.
     * @param data contents of the TLV.
     * @param data_length length of the message.
     */
    constructor(type: TlvType, data: number, data_length: number) 
    /**
     * Create a #MbimTlv with the given contents.
     * @constructor 
     * @param type a #MbimTlvType.
     * @param data contents of the TLV.
     * @param data_length length of the message.
     */
    static new(type: TlvType, data: number, data_length: number): Tlv
    /**
     * Create a #MbimTlv of type %MBIM_TLV_TYPE_WCHAR_STR with the given contents.
     * @constructor 
     * @param str a string.
     */
    static string_new(str: string): Tlv
}

interface Uuid {

    // Own fields of Mbim-1.0.Mbim.Uuid

    a: Uint8Array
    b: Uint8Array
    c: Uint8Array
    d: Uint8Array
    e: Uint8Array

    // Owm methods of Mbim-1.0.Mbim.Uuid

    /**
     * Compare two %MbimUuid values.
     * @param b a #MbimUuid.
     */
    cmp(b: Uuid): boolean
    /**
     * Get a string with the UUID.
     */
    get_printable(): string
    /**
     * Get the context type corresponding to `uuid`.
     */
    to_context_type(): ContextType
    /**
     * Get the service corresponding to `uuid`.
     */
    to_service(): Service
}

/**
 * A UUID as defined in MBIM.
 * @record 
 */
class Uuid {

    // Own properties of Mbim-1.0.Mbim.Uuid

    static name: string

    // Constructors of Mbim-1.0.Mbim.Uuid

    /**
     * Get the UUID corresponding to `context_type`.
     * @param context_type a #MbimContextType.
     */
    static from_context_type(context_type: ContextType): Uuid
    /**
     * Fills in `uuid` from the printable representation give in `str`.
     * 
     * Only ccepts `str` written with dashes separating items, e.g.:
     *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
     * @param str a MBIM UUID.
     * @param uuid pointer to the target #MbimUuid.
     */
    static from_printable(str: string, uuid: Uuid): boolean
    /**
     * Get the UUID corresponding to `service`.
     * 
     * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
     * or a custom registered one.
     * @param service a #MbimService.
     */
    static from_service(service: Service): Uuid
}

    type AtdsProviderArray = AtdsProvider
    type CellInfoCdmaArray = CellInfoCdma
    type CellInfoNeighboringGsmArray = CellInfoNeighboringGsm
    type CellInfoNeighboringLteArray = CellInfoNeighboringLte
    type CellInfoNeighboringNrArray = CellInfoNeighboringNr
    type CellInfoNeighboringTdscdmaArray = CellInfoNeighboringTdscdma
    type CellInfoNeighboringUmtsArray = CellInfoNeighboringUmts
    type CellInfoServingNrArray = CellInfoServingNr
    type DeprecatedCidBasicConnect = number
    type DeprecatedCidMsBasicConnectExtensions = number
    type DeprecatedNwError = number
    type DeprecatedRegistrationFlag = number
    type DeviceServiceElementArray = DeviceServiceElement
    type EventEntryArray = EventEntry
    type IPv4ElementArray = IPv4Element
    type IPv6ElementArray = IPv6Element
    type LteAttachConfigurationArray = LteAttachConfiguration
    type LteAttachStatus = DeprecatedLteAttachStatus
    type PacketFilterArray = PacketFilter
    type PacketFilterV3Array = PacketFilterV3
    type PhonebookEntryArray = PhonebookEntry
    type ProviderArray = Provider
    type ProvisionedContextElementArray = ProvisionedContextElement
    type ProvisionedContextElementV2Array = ProvisionedContextElementV2
    type RsrpSnrInfoArray = RsrpSnrInfo
    type SarConfigStateArray = SarConfigState
    type SlotArray = Slot
    type SmsCdmaReadRecordArray = SmsCdmaReadRecord
    type SmsPduReadRecordArray = SmsPduReadRecord
    type TerminalCapabilityInfoArray = TerminalCapabilityInfo
}
export default Mbim;