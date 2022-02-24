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
function access_media_type_get_string(val: AccessMediaType): string
function activation_command_get_string(val: ActivationCommand): string
function activation_state_get_string(val: ActivationState): string
function atds_provider_array_free(array: AtdsProviderArray): void
function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string
function atds_rat_mode_get_string(val: AtdsRatMode): string
function auth_protocol_get_string(val: AuthProtocol): string
function cell_info_cdma_array_free(array: CellInfoCdmaArray): void
function cell_info_neighboring_gsm_array_free(array: CellInfoNeighboringGsmArray): void
function cell_info_neighboring_lte_array_free(array: CellInfoNeighboringLteArray): void
function cell_info_neighboring_nr_array_free(array: CellInfoNeighboringNrArray): void
function cell_info_neighboring_tdscdma_array_free(array: CellInfoNeighboringTdscdmaArray): void
function cell_info_neighboring_umts_array_free(array: CellInfoNeighboringUmtsArray): void
function cell_info_serving_nr_array_free(array: CellInfoServingNrArray): void
function cellular_class_build_string_from_mask(mask: CellularClass): string
function cid_atds_get_string(val: CidAtds): string
function cid_auth_get_string(val: CidAuth): string
function cid_basic_connect_get_string(val: CidBasicConnect): string
function cid_can_notify(service: Service, cid: number): boolean
function cid_can_query(service: Service, cid: number): boolean
function cid_can_set(service: Service, cid: number): boolean
function cid_dss_get_string(val: CidDss): string
function cid_get_printable(service: Service, cid: number): string
function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string
function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string
function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string
function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string
function cid_ms_sar_get_string(val: CidMsSar): string
function cid_ms_uicc_low_level_access_get_string(val: CidMsUiccLowLevelAccess): string
function cid_phonebook_get_string(val: CidPhonebook): string
function cid_proxy_control_get_string(val: CidProxyControl): string
function cid_qdu_get_string(val: CidQdu): string
function cid_qmi_get_string(val: CidQmi): string
function cid_quectel_get_string(val: CidQuectel): string
function cid_sms_get_string(val: CidSms): string
function cid_stk_get_string(val: CidStk): string
function cid_ussd_get_string(val: CidUssd): string
function compression_get_string(val: Compression): string
function context_ip_type_get_string(val: ContextIpType): string
function context_media_type_get_string(val: ContextMediaType): string
function context_operation_get_string(val: ContextOperation): string
function context_roaming_control_get_string(val: ContextRoamingControl): string
function context_source_get_string(val: ContextSource): string
function context_state_get_string(val: ContextState): string
function context_type_get_string(val: ContextType): string
function core_error_get_string(val: CoreError): string
function core_error_quark(): GLib.Quark
function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string
function data_class_build_string_from_mask(mask: DataClass): string
function data_class_v3_build_string_from_mask(mask: DataClassV3): string
function data_subclass_build_string_from_mask(mask: DataSubclass): string
function default_pdu_activation_hint_get_string(val: DefaultPduActivationHint): string
function device_service_element_array_free(array: DeviceServiceElementArray): void
function device_type_get_string(val: DeviceType): string
function drx_cycle_get_string(val: DrxCycle): string
function dss_link_state_get_string(val: DssLinkState): string
function emergency_mode_state_get_string(val: EmergencyModeState): string
function event_entry_array_free(array: EventEntryArray): void
function frequency_range_build_string_from_mask(mask: FrequencyRange): string
function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string
function ipv4_element_array_free(array: IPv4ElementArray): void
function ipv6_element_array_free(array: IPv6ElementArray): void
function ladn_info_get_string(val: LadnInfo): string
function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void
function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string
function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string
function lte_attach_state_get_string(val: LteAttachState): string
function lte_attach_status_free(var_: DeprecatedLteAttachStatus): void
function message_command_type_get_string(val: MessageCommandType): string
function message_type_get_string(val: MessageType): string
function mico_mode_get_string(val: MicoMode): string
function modem_configuration_status_get_string(val: ModemConfigurationStatus): string
function network_idle_hint_state_get_string(val: NetworkIdleHintState): string
function nw_error_get_string(val: NwError): string
function packet_filter_array_free(array: PacketFilterArray): void
function packet_filter_v3_array_free(array: PacketFilterV3Array): void
function packet_service_action_get_string(val: PacketServiceAction): string
function packet_service_state_get_string(val: PacketServiceState): string
function pco_type_get_string(val: PcoType): string
function phonebook_entry_array_free(array: PhonebookEntryArray): void
function phonebook_flag_get_string(val: PhonebookFlag): string
function phonebook_state_get_string(val: PhonebookState): string
function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string
function pin_format_get_string(val: PinFormat): string
function pin_mode_get_string(val: PinMode): string
function pin_operation_get_string(val: PinOperation): string
function pin_state_get_string(val: PinState): string
function pin_type_get_string(val: PinType): string
function protocol_error_get_string(val: ProtocolError): string
function protocol_error_quark(): GLib.Quark
function provider_array_free(array: ProviderArray): void
function provider_state_build_string_from_mask(mask: ProviderState): string
function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void
function provisioned_context_element_v2_array_free(array: ProvisionedContextElementV2Array): void
function qdu_file_type_get_string(val: QduFileType): string
function qdu_quectel_reboot_type_get_string(val: QduQuectelRebootType): string
function qdu_quectel_version_type_get_string(val: QduQuectelVersionType): string
function qdu_session_action_get_string(val: QduSessionAction): string
function qdu_session_result_get_string(val: QduSessionResult): string
function qdu_session_status_get_string(val: QduSessionStatus): string
function qdu_session_type_get_string(val: QduSessionType): string
function quectel_radio_switch_state_get_string(val: QuectelRadioSwitchState): string
function radio_switch_state_get_string(val: RadioSwitchState): string
function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string
function register_action_get_string(val: RegisterAction): string
function register_custom_service(uuid: Uuid, nickname: string): number
function register_mode_get_string(val: RegisterMode): string
function register_state_get_string(val: RegisterState): string
function registration_flag_build_string_from_mask(mask: RegistrationFlag): string
function rsrp_snr_info_array_free(array: RsrpSnrInfoArray): void
function sar_backoff_state_get_string(val: SarBackoffState): string
function sar_config_state_array_free(array: SarConfigStateArray): void
function sar_control_mode_get_string(val: SarControlMode): string
function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string
function service_get_string(val: Service): string
function service_id_is_custom(id: number): boolean
function service_lookup_name(service: number): string
function sim_class_build_string_from_mask(mask: SimClass): string
function slot_array_free(array: SlotArray): void
function sms_caps_build_string_from_mask(mask: SmsCaps): string
function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string
function sms_cdma_lang_get_string(val: SmsCdmaLang): string
function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void
function sms_flag_get_string(val: SmsFlag): string
function sms_format_get_string(val: SmsFormat): string
function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void
function sms_status_flag_get_string(val: SmsStatusFlag): string
function sms_status_get_string(val: SmsStatus): string
function sms_storage_state_get_string(val: SmsStorageState): string
function status_error_get_string(val: StatusError): string
function status_error_quark(): GLib.Quark
function stk_pac_profile_get_string(val: StkPacProfile): string
function stk_pac_type_get_string(val: StkPacType): string
function subscriber_ready_state_get_string(val: SubscriberReadyState): string
function subscriber_ready_status_flag_build_string_from_mask(mask: SubscriberReadyStatusFlag): string
function terminal_capability_info_array_free(array: TerminalCapabilityInfoArray): void
function tlv_type_get_string(val: TlvType): string
function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string
function transmission_state_get_string(val: TransmissionState): string
function uicc_class_byte_type_get_string(val: UiccClassByteType): string
function uicc_pass_through_action_get_string(val: UiccPassThroughAction): string
function uicc_pass_through_status_get_string(val: UiccPassThroughStatus): string
function uicc_secure_messaging_get_string(val: UiccSecureMessaging): string
function uicc_slot_state_get_string(val: UiccSlotState): string
function unregister_custom_service(id: number): boolean
function ussd_action_get_string(val: UssdAction): string
function ussd_response_get_string(val: UssdResponse): string
function ussd_session_state_get_string(val: UssdSessionState): string
function utils_get_traces_enabled(): boolean
function utils_set_traces_enabled(enabled: boolean): void
function uuid_from_context_type(context_type: ContextType): Uuid
function uuid_from_printable(str: string, uuid: Uuid): boolean
function uuid_from_service(service: Service): Uuid
function visible_providers_action_get_string(val: VisibleProvidersAction): string
function voice_call_state_get_string(val: VoiceCallState): string
function voice_class_get_string(val: VoiceClass): string
function wake_type_get_string(val: WakeType): string
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Mbim-1.0.Mbim.Device */
    device_file?: Gio.File
    device_in_session?: boolean
    device_transaction_id?: number
}
class Device {
    /* Properties of Mbim-1.0.Mbim.Device */
    device_in_session: boolean
    device_transaction_id: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Mbim-1.0.Mbim.Device */
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
     */
    add_link(session_id: number, base_ifname: string, ifname_prefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_add_link().
     */
    add_link_finish(res: Gio.AsyncResult, session_id: number): string
    /**
     * Checks whether link management is supported by the kernel.
     */
    check_link_supported(): boolean
    /**
     * Checks the version number of the MS MBIMEx support in the device instance
     * against the one given as input.
     */
    check_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean
    /**
     * Asynchronously closes a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_close_finish() to get the result of the operation.
     */
    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous close operation started with mbim_device_close().
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
     */
    command(message: Message, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_command().
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
     */
    delete_all_links(base_ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_all_links().
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
     */
    delete_link(ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_link().
     */
    delete_link_finish(res: Gio.AsyncResult): boolean
    /**
     * Get the version number of the MS MBIMEx support.
     * 
     * The reported version will be 1 if the initialization sequence to agree on
     * which version to use hasn't been run (e.g. with mbim_device_open_full() and
     * the explicit %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3 flag).
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
     */
    list_links(base_ifname: string): [ /* returnType */ boolean, /* out_links */ string[] ]
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_finish() to get the result of the operation.
     */
    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open().
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
     */
    open_full(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open_full().
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
     */
    set_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Mbim-1.0.Mbim.Device */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
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
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Mbim-1.0.Mbim.Device */
    connect(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    connect_after(sigName: "device-error", callback: (($obj: Device, object: GLib.Error) => void)): number
    emit(sigName: "device-error", object: GLib.Error): void
    connect(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    connect_after(sigName: "device-indicate-status", callback: (($obj: Device, object: Message) => void)): number
    emit(sigName: "device-indicate-status", object: Message): void
    connect(sigName: "device-removed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Device) => void)): number
    emit(sigName: "device-removed"): void
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
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-in-session", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-transaction-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_finish(res: Gio.AsyncResult): Device
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}
class Proxy {
    /* Properties of Mbim-1.0.Mbim.Proxy */
    readonly mbim_proxy_n_clients: number
    readonly mbim_proxy_n_devices: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
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
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
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
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
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
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
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
     */
    watch_closure(closure: Function): void
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
     */
    connect(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-clients", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-devices", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Proxy
    static $gtype: GObject.Type
}
class AtdsProvider {
    /* Fields of Mbim-1.0.Mbim.AtdsProvider */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #MbimProviderState given as a #guint32.
     */
    readonly provider_state: number
    /**
     * a string.
     */
    readonly provider_name: string
    /**
     * a #MbimAtdsProviderPlmnMode given as a #guint32.
     */
    readonly plmn_mode: number
    /**
     * a #guint32.
     */
    readonly rssi: number
    /**
     * a #guint32.
     */
    readonly error_rate: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimAtdsProvider structs.
     */
    static array_free(array: AtdsProviderArray): void
}
class CellInfoCdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoCdma */
    /**
     * a #guint32.
     */
    readonly serving_cell_flag: number
    /**
     * a #guint32.
     */
    readonly nid: number
    /**
     * a #guint32.
     */
    readonly sid: number
    /**
     * a #guint32.
     */
    readonly base_station_id: number
    /**
     * a #guint32.
     */
    readonly base_latitude: number
    /**
     * a #guint32.
     */
    readonly base_longitude: number
    /**
     * a #guint32.
     */
    readonly ref_pn: number
    /**
     * a #guint32.
     */
    readonly gps_seconds: number
    /**
     * a #guint32.
     */
    readonly pilot_strength: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
     */
    static array_free(array: CellInfoCdmaArray): void
}
class CellInfoNeighboringGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly arfcn: number
    /**
     * a #guint32.
     */
    readonly base_station_id: number
    /**
     * a #guint32.
     */
    readonly rx_level: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
     */
    static array_free(array: CellInfoNeighboringGsmArray): void
}
class CellInfoNeighboringLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringLte */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly earfcn: number
    /**
     * a #guint32.
     */
    readonly physical_cell_id: number
    /**
     * a #guint32.
     */
    readonly tac: number
    /**
     * a #gint32.
     */
    readonly rsrp: number
    /**
     * a #gint32.
     */
    readonly rsrq: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
     */
    static array_free(array: CellInfoNeighboringLteArray): void
}
class CellInfoNeighboringNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringNr */
    /**
     * a #MbimDataSubclass given as a #guint32.
     */
    readonly system_sub_type: number
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a string.
     */
    readonly cell_id: string
    /**
     * a #guint32.
     */
    readonly physical_cell_id: number
    /**
     * a #guint32.
     */
    readonly tac: number
    /**
     * a #guint32.
     */
    readonly rsrp: number
    /**
     * a #guint32.
     */
    readonly rsrq: number
    /**
     * a #guint32.
     */
    readonly sinr: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
     */
    static array_free(array: CellInfoNeighboringNrArray): void
}
class CellInfoNeighboringTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly cell_parameter_id: number
    /**
     * a #guint32.
     */
    readonly timing_advance: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #guint32.
     */
    readonly path_loss: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
     */
    static array_free(array: CellInfoNeighboringTdscdmaArray): void
}
class CellInfoNeighboringUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly primary_scrambling_code: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #gint32.
     */
    readonly ecno: number
    /**
     * a #guint32.
     */
    readonly path_loss: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
     */
    static array_free(array: CellInfoNeighboringUmtsArray): void
}
class CellInfoServingGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingGsm */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly timing_advance: number
    /**
     * a #guint32.
     */
    readonly arfcn: number
    /**
     * a #guint32.
     */
    readonly base_station_id: number
    /**
     * a #guint32.
     */
    readonly rx_level: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingGsm */
    /**
     * Frees the memory allocated for the #MbimCellInfoServingGsm.
     */
    free(): void
    static name: string
}
class CellInfoServingLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingLte */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly earfcn: number
    /**
     * a #guint32.
     */
    readonly physical_cell_id: number
    /**
     * a #guint32.
     */
    readonly tac: number
    /**
     * a #gint32.
     */
    readonly rsrp: number
    /**
     * a #gint32.
     */
    readonly rsrq: number
    /**
     * a #guint32.
     */
    readonly timing_advance: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingLte */
    /**
     * Frees the memory allocated for the #MbimCellInfoServingLte.
     */
    free(): void
    static name: string
}
class CellInfoServingNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingNr */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint64.
     */
    readonly nci: number
    /**
     * a #guint32.
     */
    readonly physical_cell_id: number
    /**
     * a #guint32.
     */
    readonly nrarfcn: number
    /**
     * a #guint32.
     */
    readonly tac: number
    /**
     * a #guint32.
     */
    readonly rsrp: number
    /**
     * a #guint32.
     */
    readonly rsrq: number
    /**
     * a #guint32.
     */
    readonly sinr: number
    /**
     * a #guint64.
     */
    readonly timing_advance: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
     */
    static array_free(array: CellInfoServingNrArray): void
}
class CellInfoServingTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly cell_parameter_id: number
    /**
     * a #guint32.
     */
    readonly timing_advance: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #guint32.
     */
    readonly path_loss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    /**
     * Frees the memory allocated for the #MbimCellInfoServingTdscdma.
     */
    free(): void
    static name: string
}
class CellInfoServingUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingUmts */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #guint32.
     */
    readonly location_area_code: number
    /**
     * a #guint32.
     */
    readonly cell_id: number
    /**
     * a #guint32.
     */
    readonly frequency_info_ul: number
    /**
     * a #guint32.
     */
    readonly frequency_info_dl: number
    /**
     * a #guint32.
     */
    readonly frequency_info_nt: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly primary_scrambling_code: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #gint32.
     */
    readonly ecno: number
    /**
     * a #guint32.
     */
    readonly path_loss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingUmts */
    /**
     * Frees the memory allocated for the #MbimCellInfoServingUmts.
     */
    free(): void
    static name: string
}
class DeprecatedLteAttachStatus {
    /* Fields of Mbim-1.0.Mbim.DeprecatedLteAttachStatus */
    readonly lte_attach_state: number
    readonly ip_type: number
    readonly access_string: string
    readonly user_name: string
    readonly password: string
    readonly compression: number
    readonly auth_protocol: number
    static name: string
}
abstract class DeviceClass {
    static name: string
}
class DevicePrivate {
    static name: string
}
class DeviceServiceElement {
    /* Fields of Mbim-1.0.Mbim.DeviceServiceElement */
    /**
     * a #MbimUuid.
     */
    readonly device_service_id: Uuid
    /**
     * a #guint32.
     */
    readonly dss_payload: number
    /**
     * a #guint32.
     */
    readonly max_dss_instances: number
    /**
     * a #guint32.
     */
    readonly cids_count: number
    /**
     * an array of #guint32 values.
     */
    readonly cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
     */
    static array_free(array: DeviceServiceElementArray): void
}
class EventEntry {
    /* Fields of Mbim-1.0.Mbim.EventEntry */
    /**
     * a #MbimUuid.
     */
    readonly device_service_id: Uuid
    /**
     * a #guint32.
     */
    readonly cids_count: number
    /**
     * an array of #guint32 values.
     */
    readonly cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimEventEntry structs.
     */
    static array_free(array: EventEntryArray): void
}
class IPv4 {
    /* Fields of Mbim-1.0.Mbim.IPv4 */
    /**
     * 4 bytes specifying the IPv4 address.
     */
    readonly addr: Uint8Array
    static name: string
}
class IPv4Element {
    /* Fields of Mbim-1.0.Mbim.IPv4Element */
    /**
     * a #guint32.
     */
    readonly on_link_prefix_length: number
    /**
     * a #MbimIPv4.
     */
    readonly ipv4_address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimIPv4Element structs.
     */
    static array_free(array: IPv4ElementArray): void
}
class IPv6 {
    /* Fields of Mbim-1.0.Mbim.IPv6 */
    /**
     * 16 bytes specifying the IPv6 address.
     */
    readonly addr: Uint8Array
    static name: string
}
class IPv6Element {
    /* Fields of Mbim-1.0.Mbim.IPv6Element */
    /**
     * a #guint32.
     */
    readonly on_link_prefix_length: number
    /**
     * a #MbimIPv6
     */
    readonly ipv6_address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimIPv6Element structs.
     */
    static array_free(array: IPv6ElementArray): void
}
class LteAttachConfiguration {
    /* Fields of Mbim-1.0.Mbim.LteAttachConfiguration */
    /**
     * a #MbimContextIpType given as a #guint32.
     */
    readonly ip_type: number
    /**
     * a #MbimLteAttachContextRoamingControl given as a #guint32.
     */
    readonly roaming: number
    /**
     * a #MbimContextSource given as a #guint32.
     */
    readonly source: number
    /**
     * a string.
     */
    readonly access_string: string
    /**
     * a string.
     */
    readonly user_name: string
    /**
     * a string.
     */
    readonly password: string
    /**
     * a #MbimCompression given as a #guint32.
     */
    readonly compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     */
    readonly auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
     */
    static array_free(array: LteAttachConfigurationArray): void
}
class Message {
    /* Methods of Mbim-1.0.Mbim.Message */
    /**
     * Parses and returns parameters of the 'Location' response command in the 'ATDS' service.
     */
    atds_location_response_parse(): [ /* returnType */ boolean, /* out_lac */ number | null, /* out_tac */ number | null, /* out_cell_id */ number | null ]
    /**
     * Parses and returns parameters of the 'Operators' response command in the 'ATDS' service.
     */
    atds_operators_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ AtdsProvider[] | null ]
    /**
     * Parses and returns parameters of the 'RAT' response command in the 'ATDS' service.
     */
    atds_rat_response_parse(): [ /* returnType */ boolean, /* out_mode */ AtdsRatMode | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'ATDS' service.
     */
    atds_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    /**
     * Parses and returns parameters of the 'Signal' response command in the 'ATDS' service.
     */
    atds_signal_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_rscp */ number | null, /* out_ecno */ number | null, /* out_rsrq */ number | null, /* out_rsrp */ number | null, /* out_rssnr */ number | null ]
    /**
     * Parses and returns parameters of the 'Aka' response command in the 'Auth' service.
     */
    auth_aka_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array | null, /* out_ciphering_key */ Uint8Array | null, /* out_auts */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Akap' response command in the 'Auth' service.
     */
    auth_akap_response_parse(): [ /* returnType */ boolean, /* out_res */ Uint8Array | null, /* out_res_len */ number | null, /* out_integrating_key */ Uint8Array | null, /* out_ciphering_key */ Uint8Array | null, /* out_auts */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Sim' response command in the 'Auth' service.
     */
    auth_sim_response_parse(): [ /* returnType */ boolean, /* out_sres1 */ number | null, /* out_kc1 */ number | null, /* out_sres2 */ number | null, /* out_kc2 */ number | null, /* out_sres3 */ number | null, /* out_kc3 */ number | null, /* out_n */ number | null ]
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
    connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Basic Connect' service.
     */
    connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Basic Connect' service.
     */
    device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sim_class */ SimClass | null, /* out_data_class */ DataClass | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_max_sessions */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null ]
    /**
     * Parses and returns parameters of the 'Device Service Subscribe List' response command in the 'Basic Connect' service.
     */
    device_service_subscribe_list_response_parse(): [ /* returnType */ boolean, /* out_events_count */ number | null, /* out_events */ EventEntry[] | null ]
    /**
     * Create a new request for the 'Events' response command in the 'Basic Connect' service.
     */
    device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean
    /**
     * Parses and returns parameters of the 'Device Services' response command in the 'Basic Connect' service.
     */
    device_services_response_parse(): [ /* returnType */ boolean, /* out_device_services_count */ number | null, /* out_max_dss_sessions */ number | null, /* out_device_services */ DeviceServiceElement[] | null ]
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
    emergency_mode_notification_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState | null ]
    /**
     * Parses and returns parameters of the 'Emergency Mode' response command in the 'Basic Connect' service.
     */
    emergency_mode_response_parse(): [ /* returnType */ boolean, /* out_state */ EmergencyModeState | null ]
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
    home_provider_response_parse(): [ /* returnType */ boolean, /* out_provider */ Provider | null ]
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
    ip_configuration_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv4_address_count */ number | null, /* out_ipv4_address */ IPv4Element[] | null, /* out_ipv6_address_count */ number | null, /* out_ipv6_address */ IPv6Element[] | null, /* out_ipv4_gateway */ IPv4 | null, /* out_ipv6_gateway */ IPv6 | null, /* out_ipv4_dns_server_count */ number | null, /* out_ipv4_dns_server */ IPv4[] | null, /* out_ipv6_dns_server_count */ number | null, /* out_ipv6_dns_server */ IPv6[] | null, /* out_ipv4_mtu */ number | null, /* out_ipv6_mtu */ number | null ]
    /**
     * Parses and returns parameters of the 'IP Configuration' response command in the 'Basic Connect' service.
     */
    ip_configuration_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_ipv4_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv6_configuration_available */ IPConfigurationAvailableFlag | null, /* out_ipv4_address_count */ number | null, /* out_ipv4_address */ IPv4Element[] | null, /* out_ipv6_address_count */ number | null, /* out_ipv6_address */ IPv6Element[] | null, /* out_ipv4_gateway */ IPv4 | null, /* out_ipv6_gateway */ IPv6 | null, /* out_ipv4_dns_server_count */ number | null, /* out_ipv4_dns_server */ IPv4[] | null, /* out_ipv6_dns_server_count */ number | null, /* out_ipv6_dns_server */ IPv6[] | null, /* out_ipv4_mtu */ number | null, /* out_ipv6_mtu */ number | null ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Basic Connect' service.
     */
    ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_packet_filters_count */ number | null, /* out_packet_filters */ PacketFilter[] | null ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClass | null, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number | null, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number | null, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number | null, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number | null, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number | null, /* out_cdma_cells */ CellInfoCdma[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sms_class */ SimClass | null, /* out_data_class */ DataClass | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_max_sessions */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null, /* out_executor_index */ number | null ]
    /**
     * Parses and returns parameters of the 'Device Slot Mappings' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_device_slot_mappings_response_parse(): [ /* returnType */ boolean, /* out_map_count */ number | null, /* out_slot_map */ Slot[] | null ]
    /**
     * Parses and returns parameters of the 'Location Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_location_info_status_notification_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number | null, /* out_tracking_area_code */ number | null, /* out_cell_id */ number | null ]
    /**
     * Parses and returns parameters of the 'Location Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_location_info_status_response_parse(): [ /* returnType */ boolean, /* out_location_area_code */ number | null, /* out_tracking_area_code */ number | null, /* out_cell_id */ number | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_count */ number | null, /* out_configurations */ LteAttachConfiguration[] | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_status_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ DeprecatedLteAttachStatus | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_lte_attach_status_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_status */ DeprecatedLteAttachStatus | null ]
    /**
     * Parses and returns parameters of the 'PCO' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_pco_notification_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    /**
     * Parses and returns parameters of the 'PCO' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_pco_response_parse(): [ /* returnType */ boolean, /* out_pco_value */ PcoValue | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElementV2[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElementV2[] | null ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_slot_info_status_notification_parse(): [ /* returnType */ boolean, /* out_slot_index */ number | null, /* out_state */ UiccSlotState | null ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_slot_info_status_response_parse(): [ /* returnType */ boolean, /* out_slot_index */ number | null, /* out_state */ UiccSlotState | null ]
    /**
     * Parses and returns parameters of the 'Sys Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    ms_basic_connect_extensions_sys_caps_response_parse(): [ /* returnType */ boolean, /* out_number_of_executors */ number | null, /* out_number_of_slots */ number | null, /* out_concurrency */ number | null, /* out_modem_id */ number | null ]
    /**
     * Parses and returns parameters of the 'Version' response command in the 'Ms Basic Connect Extensions V2' service.
     */
    ms_basic_connect_extensions_v2_version_response_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number | null, /* out_mbim_extended_version */ number | null ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_base_stations_info_response_parse(): [ /* returnType */ boolean, /* out_system_type */ DataClassV3 | null, /* out_system_sub_type */ DataSubclass | null, /* out_gsm_serving_cell */ CellInfoServingGsm | null, /* out_umts_serving_cell */ CellInfoServingUmts | null, /* out_tdscdma_serving_cell */ CellInfoServingTdscdma | null, /* out_lte_serving_cell */ CellInfoServingLte | null, /* out_gsm_neighboring_cells_count */ number | null, /* out_gsm_neighboring_cells */ CellInfoNeighboringGsm[] | null, /* out_umts_neighboring_cells_count */ number | null, /* out_umts_neighboring_cells */ CellInfoNeighboringUmts[] | null, /* out_tdscdma_neighboring_cells_count */ number | null, /* out_tdscdma_neighboring_cells */ CellInfoNeighboringTdscdma[] | null, /* out_lte_neighboring_cells_count */ number | null, /* out_lte_neighboring_cells */ CellInfoNeighboringLte[] | null, /* out_cdma_cells_count */ number | null, /* out_cdma_cells */ CellInfoCdma[] | null, /* out_nr_serving_cells_count */ number | null, /* out_nr_serving_cells */ CellInfoServingNr[] | null, /* out_nr_neighbor_cells_count */ number | null, /* out_nr_neighbor_cells */ CellInfoNeighboringNr[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_device_caps_response_parse(): [ /* returnType */ boolean, /* out_device_type */ DeviceType | null, /* out_cellular_class */ CellularClass | null, /* out_voice_class */ VoiceClass | null, /* out_sim_class */ SimClass | null, /* out_data_class */ DataClassV3 | null, /* out_sms_caps */ SmsCaps | null, /* out_control_caps */ CtrlCaps | null, /* out_data_subclass */ DataSubclass | null, /* out_max_sessions */ number | null, /* out_executor_index */ number | null, /* out_wcdma_band_class */ number | null, /* out_lte_band_class_count */ number | null, /* out_lte_band_class */ number | null, /* out_nr_band_class_count */ number | null, /* out_nr_band_class */ number | null, /* out_custom_data_class */ string | null, /* out_device_id */ string | null, /* out_firmware_info */ string | null, /* out_hardware_info */ string | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_lte_attach_info_notification_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_nw_error */ NwError | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_lte_attach_info_response_parse(): [ /* returnType */ boolean, /* out_lte_attach_state */ LteAttachState | null, /* out_nw_error */ NwError | null, /* out_ip_type */ ContextIpType | null, /* out_access_string */ string | null, /* out_user_name */ string | null, /* out_password */ string | null, /* out_compression */ Compression | null, /* out_auth_protocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_modem_configuration_notification_parse(): [ /* returnType */ boolean, /* out_modem_configuration_status */ ModemConfigurationStatus | null, /* out_configuration_name */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_modem_configuration_response_parse(): [ /* returnType */ boolean, /* out_configuration_status */ ModemConfigurationStatus | null, /* out_configuration_name */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Registration Parameters' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_registration_parameters_response_parse(): [ /* returnType */ boolean, /* out_mico_mode */ MicoMode | null, /* out_drx_cycle */ DrxCycle | null, /* out_ladn_info */ LadnInfo | null, /* out_default_pdu_activation_hint */ DefaultPduActivationHint | null, /* out_re_register_if_nedeed */ boolean | null, /* out_unnamed_ies */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Wake Reason' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    ms_basic_connect_extensions_v3_wake_reason_response_parse(): [ /* returnType */ boolean, /* out_wake_type */ WakeType | null, /* out_session_id */ number | null, /* out_wake_tlv */ Tlv | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_current_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_current_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null ]
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null, /* out_preferred_data_classes */ DataClass | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null, /* out_preferred_data_classes */ DataClass | null ]
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null, /* out_rsrp_snr_count */ number | null, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Ms Basic Connect V2' service.
     */
    ms_basic_connect_v2_signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null, /* out_rsrp_snr_count */ number | null, /* out_rsrp_snr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_connect_notification_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null, /* out_media_preference */ AccessMediaType | null, /* out_access_string */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_connect_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_activation_state */ ActivationState | null, /* out_voice_call_state */ VoiceCallState | null, /* out_ip_type */ ContextIpType | null, /* out_context_type */ Uuid | null, /* out_nw_error */ number | null, /* out_media_preference */ AccessMediaType | null, /* out_access_string */ string | null, /* out_unnamed_ies */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_ip_packet_filters_response_parse(): [ /* returnType */ boolean, /* out_session_id */ number | null, /* out_packet_filters_count */ number | null, /* out_packet_filters */ PacketFilterV3[] | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClassV3 | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null, /* out_data_subclass */ DataSubclass | null, /* out_tai */ Tai | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClassV3 | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null, /* out_frequency_range */ FrequencyRange | null, /* out_data_subclass */ DataSubclass | null, /* out_tai */ Tai | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_flags */ SubscriberReadyStatusFlag | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Ms Basic Connect V3' service.
     */
    ms_basic_connect_v3_subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_flags */ SubscriberReadyStatusFlag | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Get' response command in the 'MS Firmware ID' service.
     */
    ms_firmware_id_get_response_parse(): [ /* returnType */ boolean, /* out_firmware_id */ Uuid | null ]
    /**
     * Parses and returns parameters of the 'Config' response command in the 'MS SAR' service.
     */
    ms_sar_config_response_parse(): [ /* returnType */ boolean, /* out_mode */ SarControlMode | null, /* out_backoff_state */ SarBackoffState | null, /* out_wifi_integration */ SarWifiHardwareState | null, /* out_config_states_count */ number | null, /* out_config_states */ SarConfigState[] | null ]
    /**
     * Parses and returns parameters of the 'Transmission status' notification command in the 'MS SAR' service.
     */
    ms_sar_transmission_status_notification_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
    /**
     * Parses and returns parameters of the 'Transmission status' response command in the 'MS SAR' service.
     */
    ms_sar_transmission_status_response_parse(): [ /* returnType */ boolean, /* out_channel_notification */ TransmissionNotificationStatus | null, /* out_transmission_status */ TransmissionState | null, /* out_hysteresis_timer */ number | null ]
    /**
     * Parses and returns parameters of the 'APDU' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_apdu_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null, /* out_response */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'ATR' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_atr_response_parse(): [ /* returnType */ boolean, /* out_atr */ string | null ]
    /**
     * Parses and returns parameters of the 'Close Channel' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_close_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null ]
    /**
     * Parses and returns parameters of the 'Open Channel' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_open_channel_response_parse(): [ /* returnType */ boolean, /* out_status */ number | null, /* out_channel */ number | null, /* out_response */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Reset' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_reset_response_parse(): [ /* returnType */ boolean, /* out_pass_through_status */ UiccPassThroughStatus | null ]
    /**
     * Parses and returns parameters of the 'Terminal Capability' response command in the 'MS UICC Low Level Access' service.
     */
    ms_uicc_low_level_access_terminal_capability_response_parse(): [ /* returnType */ boolean, /* out_terminal_capability_count */ number | null, /* out_terminal_capability */ TerminalCapabilityInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' notification command in the 'Basic Connect' service.
     */
    multicarrier_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' response command in the 'Basic Connect' service.
     */
    multicarrier_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Network Idle Hint' response command in the 'Basic Connect' service.
     */
    network_idle_hint_response_parse(): [ /* returnType */ boolean, /* out_state */ NetworkIdleHintState | null ]
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
    packet_service_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Basic Connect' service.
     */
    packet_service_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ number | null, /* out_packet_service_state */ PacketServiceState | null, /* out_highest_available_data_class */ DataClass | null, /* out_uplink_speed */ number | null, /* out_downlink_speed */ number | null ]
    /**
     * Parses and returns parameters of the 'Packet Statistics' response command in the 'Basic Connect' service.
     */
    packet_statistics_response_parse(): [ /* returnType */ boolean, /* out_in_discards */ number | null, /* out_in_errors */ number | null, /* out_in_octets */ number | null, /* out_in_packets */ number | null, /* out_out_octets */ number | null, /* out_out_packets */ number | null, /* out_out_errors */ number | null, /* out_out_discards */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' notification command in the 'Phonebook' service.
     */
    phonebook_configuration_notification_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState | null, /* out_number_of_entries */ number | null, /* out_used_entries */ number | null, /* out_max_number_length */ number | null, /* out_max_name */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Phonebook' service.
     */
    phonebook_configuration_response_parse(): [ /* returnType */ boolean, /* out_state */ PhonebookState | null, /* out_number_of_entries */ number | null, /* out_used_entries */ number | null, /* out_max_number_length */ number | null, /* out_max_name */ number | null ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'Phonebook' service.
     */
    phonebook_delete_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Read' response command in the 'Phonebook' service.
     */
    phonebook_read_response_parse(): [ /* returnType */ boolean, /* out_entry_count */ number | null, /* out_entries */ PhonebookEntry[] | null ]
    /**
     * Parses and returns parameters of the 'Write' response command in the 'Phonebook' service.
     */
    phonebook_write_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Pin List' response command in the 'Basic Connect' service.
     */
    pin_list_response_parse(): [ /* returnType */ boolean, /* out_pin_desc_pin1 */ PinDesc | null, /* out_pin_desc_pin2 */ PinDesc | null, /* out_pin_desc_device_sim_pin */ PinDesc | null, /* out_pin_desc_device_first_sim_pin */ PinDesc | null, /* out_pin_desc_network_pin */ PinDesc | null, /* out_pin_desc_network_subset_pin */ PinDesc | null, /* out_pin_desc_service_provider_pin */ PinDesc | null, /* out_pin_desc_corporate_pin */ PinDesc | null, /* out_pin_desc_subsidy_lock */ PinDesc | null, /* out_pin_desc_custom */ PinDesc | null ]
    /**
     * Parses and returns parameters of the 'Pin' response command in the 'Basic Connect' service.
     */
    pin_response_parse(): [ /* returnType */ boolean, /* out_pin_type */ PinType | null, /* out_pin_state */ PinState | null, /* out_remaining_attempts */ number | null ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' notification command in the 'Basic Connect' service.
     */
    preferred_providers_notification_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' response command in the 'Basic Connect' service.
     */
    preferred_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Basic Connect' service.
     */
    provisioned_contexts_notification_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElement[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Basic Connect' service.
     */
    provisioned_contexts_response_parse(): [ /* returnType */ boolean, /* out_provisioned_contexts_count */ number | null, /* out_provisioned_contexts */ ProvisionedContextElement[] | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Proxy Control' service.
     */
    proxy_control_configuration_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Version' notification command in the 'Proxy Control' service.
     */
    proxy_control_version_notification_parse(): [ /* returnType */ boolean, /* out_mbim_version */ number | null, /* out_mbim_extended_version */ number | null ]
    /**
     * Parses and returns parameters of the 'File Open' response command in the 'QDU' service.
     */
    qdu_file_open_response_parse(): [ /* returnType */ boolean, /* out_max_transfer_size */ number | null, /* out_max_window_size */ number | null ]
    /**
     * Parses and returns parameters of the 'File Write' response command in the 'QDU' service.
     */
    qdu_file_write_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Quectel Read Version' response command in the 'QDU' service.
     */
    qdu_quectel_read_version_response_parse(): [ /* returnType */ boolean, /* out_version_id */ number | null, /* out_version */ string | null ]
    /**
     * Parses and returns parameters of the 'Quectel Reboot' response command in the 'QDU' service.
     */
    qdu_quectel_reboot_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Update Session' response command in the 'QDU' service.
     */
    qdu_update_session_response_parse(): [ /* returnType */ boolean, /* out_current_session_type */ QduSessionType | null, /* out_current_session_status */ QduSessionStatus | null, /* out_last_session_type */ QduSessionType | null, /* out_last_session_result */ QduSessionResult | null, /* out_last_session_error_offset */ number | null, /* out_last_session_error_size */ number | null ]
    /**
     * Parses and returns parameters of the 'msg' notification command in the 'QMI' service.
     */
    qmi_msg_notification_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'msg' response command in the 'QMI' service.
     */
    qmi_msg_response_parse(): [ /* returnType */ boolean, /* out_qmux */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Quectel' service.
     */
    quectel_radio_state_response_parse(): [ /* returnType */ boolean, /* out_radio_state */ QuectelRadioSwitchState | null ]
    /**
     * Parses and returns parameters of the 'Radio State' notification command in the 'Basic Connect' service.
     */
    radio_state_notification_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Basic Connect' service.
     */
    radio_state_response_parse(): [ /* returnType */ boolean, /* out_hw_radio_state */ RadioSwitchState | null, /* out_sw_radio_state */ RadioSwitchState | null ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Message
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Basic Connect' service.
     */
    register_state_notification_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Basic Connect' service.
     */
    register_state_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_register_state */ RegisterState | null, /* out_register_mode */ RegisterMode | null, /* out_available_data_classes */ DataClass | null, /* out_current_cellular_class */ CellularClass | null, /* out_provider_id */ string | null, /* out_provider_name */ string | null, /* out_roaming_text */ string | null, /* out_registration_flag */ RegistrationFlag | null ]
    /**
     * Gets the result of the operation from the response message, which
     * can be either a %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message or a message of the
     * specified `expected` type.
     */
    response_get_result(expected: MessageType): boolean
    /**
     * Parses and returns parameters of the 'Service Activation' response command in the 'Basic Connect' service.
     */
    service_activation_response_parse(): [ /* returnType */ boolean, /* out_nw_error */ NwError | null, /* out_buffer */ Uint8Array | null ]
    /**
     * Sets the transaction ID of the message.
     */
    set_transaction_id(transaction_id: number): void
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Basic Connect' service.
     */
    signal_state_notification_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Basic Connect' service.
     */
    signal_state_response_parse(): [ /* returnType */ boolean, /* out_rssi */ number | null, /* out_error_rate */ number | null, /* out_signal_strength_interval */ number | null, /* out_rssi_threshold */ number | null, /* out_error_rate_threshold */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'SMS' service.
     */
    sms_configuration_response_parse(): [ /* returnType */ boolean, /* out_sms_storage_state */ SmsStorageState | null, /* out_format */ SmsFormat | null, /* out_max_messages */ number | null, /* out_cdma_short_message_size */ number | null, /* out_sc_address */ string | null ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'SMS' service.
     */
    sms_delete_response_parse(): boolean
    /**
     * Parses and returns parameters of the 'Message Store Status' notification command in the 'SMS' service.
     */
    sms_message_store_status_notification_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag | null, /* out_message_index */ number | null ]
    /**
     * Parses and returns parameters of the 'Message Store Status' response command in the 'SMS' service.
     */
    sms_message_store_status_response_parse(): [ /* returnType */ boolean, /* out_flag */ SmsStatusFlag | null, /* out_message_index */ number | null ]
    /**
     * Parses and returns parameters of the 'Read' notification command in the 'SMS' service.
     */
    sms_read_notification_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat | null, /* out_messages_count */ number | null, /* out_pdu_messages */ SmsPduReadRecord[] | null, /* out_cdma_messages */ SmsCdmaReadRecord[] | null ]
    /**
     * Parses and returns parameters of the 'Read' response command in the 'SMS' service.
     */
    sms_read_response_parse(): [ /* returnType */ boolean, /* out_format */ SmsFormat | null, /* out_messages_count */ number | null, /* out_pdu_messages */ SmsPduReadRecord[] | null, /* out_cdma_messages */ SmsCdmaReadRecord[] | null ]
    /**
     * Parses and returns parameters of the 'Send' response command in the 'SMS' service.
     */
    sms_send_response_parse(): [ /* returnType */ boolean, /* out_message_reference */ number | null ]
    /**
     * Parses and returns parameters of the 'Envelope' response command in the 'STK' service.
     */
    stk_envelope_response_parse(): [ /* returnType */ boolean, /* out_envelope_support */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Pac' notification command in the 'STK' service.
     */
    stk_pac_notification_parse(): [ /* returnType */ boolean, /* out_pac_type */ StkPacType | null, /* out_data_buffer */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Pac' response command in the 'STK' service.
     */
    stk_pac_response_parse(): [ /* returnType */ boolean, /* out_pac_support */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Terminal Response' response command in the 'STK' service.
     */
    stk_terminal_response_response_parse(): [ /* returnType */ boolean, /* out_result_data */ Uint8Array | null, /* out_status_words */ number | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Basic Connect' service.
     */
    subscriber_ready_status_notification_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Basic Connect' service.
     */
    subscriber_ready_status_response_parse(): [ /* returnType */ boolean, /* out_ready_state */ SubscriberReadyState | null, /* out_subscriber_id */ string | null, /* out_sim_icc_id */ string | null, /* out_ready_info */ ReadyInfoFlag | null, /* out_telephone_numbers_count */ number | null, /* out_telephone_numbers */ string[] | null ]
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Parses and returns parameters of the '' notification command in the 'USSD' service.
     */
    ussd_notification_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the '' response command in the 'USSD' service.
     */
    ussd_response_parse(): [ /* returnType */ boolean, /* out_response */ UssdResponse | null, /* out_session_state */ UssdSessionState | null, /* out_data_coding_scheme */ number | null, /* out_payload */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Visible Providers' response command in the 'Basic Connect' service.
     */
    visible_providers_response_parse(): [ /* returnType */ boolean, /* out_providers_count */ number | null, /* out_providers */ Provider[] | null ]
    static name: string
    static new(data: number, data_length: number): Message
    constructor(data: number, data_length: number)
    /* Static methods and pseudo-constructors */
    static atds_location_query_new(): Message
    static atds_operators_query_new(): Message
    static atds_rat_query_new(): Message
    static atds_rat_set_new(mode: AtdsRatMode): Message
    static atds_register_state_query_new(): Message
    static atds_signal_query_new(): Message
    static auth_aka_query_new(rand: Uint8Array, autn: Uint8Array): Message
    static auth_akap_query_new(rand: Uint8Array, autn: Uint8Array, network_name: string): Message
    static auth_sim_query_new(rand1: Uint8Array, rand2: Uint8Array, rand3: Uint8Array, n: number): Message
    static close_done_new(transaction_id: number, error_status_code: StatusError): Message
    static close_new(transaction_id: number): Message
    static command_new(transaction_id: number, service: Service, cid: number, command_type: MessageCommandType): Message
    static connect_query_new(session_id: number, activation_state: ActivationState, voice_call_state: VoiceCallState, ip_type: ContextIpType, context_type: Uuid, nw_error: number): Message
    static connect_set_new(session_id: number, activation_command: ActivationCommand, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid): Message
    static device_caps_query_new(): Message
    static device_service_subscribe_list_set_new(events_count: number, events: EventEntry[]): Message
    static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message
    static device_services_query_new(): Message
    static dss_connect_set_new(device_service_id: Uuid, dss_session_id: number, dss_link_state: DssLinkState): Message
    static emergency_mode_query_new(): Message
    static emergency_mode_set_new(state: EmergencyModeState): Message
    static error_new(transaction_id: number, error_status_code: ProtocolError): Message
    static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message
    static home_provider_query_new(): Message
    static home_provider_set_new(provider: Provider): Message
    static intel_firmware_update_modem_reboot_set_new(): Message
    static ip_configuration_query_new(session_id: number, ipv4_configuration_available: IPConfigurationAvailableFlag, ipv6_configuration_available: IPConfigurationAvailableFlag, ipv4_address_count: number, ipv4_address: IPv4Element[], ipv6_address_count: number, ipv6_address: IPv6Element[], ipv4_gateway: IPv4, ipv6_gateway: IPv6, ipv4_dns_server_count: number, ipv4_dns_server: IPv4[], ipv6_dns_server_count: number, ipv6_dns_server: IPv6[], ipv4_mtu: number, ipv6_mtu: number): Message
    static ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    static ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilter[]): Message
    static ms_basic_connect_extensions_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number): Message
    static ms_basic_connect_extensions_device_caps_query_new(): Message
    static ms_basic_connect_extensions_device_slot_mappings_query_new(): Message
    static ms_basic_connect_extensions_device_slot_mappings_set_new(map_count: number, slot_map: Slot[]): Message
    static ms_basic_connect_extensions_location_info_status_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_configuration_set_new(operation: LteAttachContextOperation, configuration_count: number, configurations: LteAttachConfiguration[]): Message
    static ms_basic_connect_extensions_lte_attach_info_query_new(): Message
    static ms_basic_connect_extensions_lte_attach_status_query_new(): Message
    static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message
    static ms_basic_connect_extensions_provisioned_contexts_query_new(): Message
    static ms_basic_connect_extensions_provisioned_contexts_set_new(operation: ContextOperation, context_type: Uuid, ip_type: ContextIpType, state: ContextState, roaming: ContextRoamingControl, media_type: ContextMediaType, source: ContextSource, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol): Message
    static ms_basic_connect_extensions_slot_info_status_query_new(slot_index: number): Message
    static ms_basic_connect_extensions_sys_caps_query_new(): Message
    static ms_basic_connect_extensions_v2_version_query_new(mbim_version: number, mbim_extended_version: number): Message
    static ms_basic_connect_extensions_v3_base_stations_info_query_new(max_gsm_count: number, max_umts_count: number, max_tdscdma_count: number, max_lte_count: number, max_cdma_count: number, max_nr_count: number): Message
    static ms_basic_connect_extensions_v3_modem_configuration_query_new(): Message
    static ms_basic_connect_extensions_v3_registration_parameters_query_new(): Message
    static ms_basic_connect_extensions_v3_registration_parameters_set_new(mico_mode: MicoMode, drx_cycle: DrxCycle, ladn_info: LadnInfo, default_pdu_activation_hint: DefaultPduActivationHint, re_register_if_nedeed: boolean, unnamed_ies: Tlv[]): Message
    static ms_basic_connect_extensions_v3_wake_reason_query_new(): Message
    static ms_basic_connect_v3_connect_query_new(session_id: number): Message
    static ms_basic_connect_v3_connect_set_new(session_id: number, activation_command: ActivationCommand, compression: Compression, auth_protocol: AuthProtocol, ip_type: ContextIpType, context_type: Uuid, media_preference: AccessMediaType, access_string: string, user_name: string, password: string, unnamed_ies: Tlv[]): Message
    static ms_basic_connect_v3_ip_packet_filters_query_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    static ms_basic_connect_v3_ip_packet_filters_set_new(session_id: number, packet_filters_count: number, packet_filters: PacketFilterV3[]): Message
    static ms_firmware_id_get_query_new(): Message
    static ms_host_shutdown_notify_set_new(): Message
    static ms_sar_config_query_new(): Message
    static ms_sar_config_set_new(mode: SarControlMode, backoff_state: SarBackoffState, config_states_count: number, config_states: SarConfigState[]): Message
    static ms_sar_transmission_status_query_new(): Message
    static ms_sar_transmission_status_set_new(channel_notification: TransmissionNotificationStatus, hysteresis_timer: number): Message
    static ms_uicc_low_level_access_apdu_set_new(channel: number, secure_messaging: UiccSecureMessaging, class_byte_type: UiccClassByteType, command: Uint8Array): Message
    static ms_uicc_low_level_access_atr_query_new(): Message
    static ms_uicc_low_level_access_close_channel_set_new(channel: number, channel_group: number): Message
    static ms_uicc_low_level_access_open_channel_set_new(app_id: Uint8Array, select_p2_arg: number, channel_group: number): Message
    static ms_uicc_low_level_access_reset_query_new(): Message
    static ms_uicc_low_level_access_reset_set_new(pass_through_action: UiccPassThroughAction): Message
    static ms_uicc_low_level_access_terminal_capability_query_new(): Message
    static ms_uicc_low_level_access_terminal_capability_set_new(terminal_capability_count: number, terminal_capability: TerminalCapabilityInfo[]): Message
    static multicarrier_providers_query_new(): Message
    static multicarrier_providers_set_new(providers_count: number, providers: Provider[]): Message
    static network_idle_hint_query_new(): Message
    static network_idle_hint_set_new(state: NetworkIdleHintState): Message
    static new(data: number, data_length: number): Message
    static open_done_new(transaction_id: number, error_status_code: StatusError): Message
    static open_new(transaction_id: number, max_control_transfer: number): Message
    static packet_service_query_new(): Message
    static packet_service_set_new(packet_service_action: PacketServiceAction): Message
    static packet_statistics_query_new(): Message
    static phonebook_configuration_query_new(): Message
    static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message
    static phonebook_write_set_new(save_flag: PhonebookWriteFlag, save_index: number, number: string, name: string): Message
    static pin_list_query_new(): Message
    static pin_query_new(): Message
    static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message
    static preferred_providers_query_new(): Message
    static preferred_providers_set_new(providers_count: number, providers: Provider[]): Message
    static provisioned_contexts_query_new(): Message
    static provisioned_contexts_set_new(context_id: number, context_type: Uuid, access_string: string, user_name: string, password: string, compression: Compression, auth_protocol: AuthProtocol, provider_id: string): Message
    static proxy_control_configuration_set_new(device_path: string, timeout: number): Message
    static qdu_file_open_query_new(): Message
    static qdu_file_open_set_new(file_type: QduFileType, file_size: number): Message
    static qdu_file_write_set_new(data_buffer: Uint8Array): Message
    static qdu_quectel_read_version_set_new(version_type: QduQuectelVersionType): Message
    static qdu_quectel_reboot_set_new(reboot_type: QduQuectelRebootType): Message
    static qdu_update_session_query_new(): Message
    static qdu_update_session_set_new(session_action: QduSessionAction, session_type: QduSessionType): Message
    static qmi_msg_set_new(qmi_msg: Uint8Array): Message
    static quectel_radio_state_query_new(): Message
    static quectel_radio_state_set_new(radio_state: QuectelRadioSwitchState): Message
    static radio_state_query_new(): Message
    static radio_state_set_new(radio_state: RadioSwitchState): Message
    static register_state_query_new(): Message
    static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message
    static service_activation_set_new(buffer: Uint8Array): Message
    static signal_state_query_new(): Message
    static signal_state_set_new(signal_strength_interval: number, rssi_threshold: number, error_rate_threshold: number): Message
    static sms_configuration_query_new(): Message
    static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message
    static sms_delete_set_new(flag: SmsFlag, message_index: number): Message
    static sms_message_store_status_query_new(): Message
    static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message
    static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message
    static stk_envelope_query_new(): Message
    static stk_envelope_set_new(data: Uint8Array): Message
    static stk_pac_query_new(): Message
    static stk_pac_set_new(pac_host_control: Uint8Array): Message
    static stk_terminal_response_set_new(response: Uint8Array): Message
    static subscriber_ready_status_query_new(): Message
    static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array): Message
    static visible_providers_query_new(action: VisibleProvidersAction): Message
}
class PacketFilter {
    /* Fields of Mbim-1.0.Mbim.PacketFilter */
    /**
     * a #guint32.
     */
    readonly filter_size: number
    /**
     * an array of #guint8 values.
     */
    readonly packet_filter: number
    /**
     * an array of #guint8 values.
     */
    readonly packet_mask: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimPacketFilter structs.
     */
    static array_free(array: PacketFilterArray): void
}
class PacketFilterV3 {
    /* Fields of Mbim-1.0.Mbim.PacketFilterV3 */
    /**
     * a #guint32.
     */
    readonly filter_size: number
    /**
     * an array of #guint8 values.
     */
    readonly packet_filter: number
    /**
     * an array of #guint8 values.
     */
    readonly packet_mask: number
    /**
     * a #guint32.
     */
    readonly filter_id: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
     */
    static array_free(array: PacketFilterV3Array): void
}
class PcoValue {
    /* Fields of Mbim-1.0.Mbim.PcoValue */
    /**
     * a #guint32.
     */
    readonly session_id: number
    /**
     * a #guint32.
     */
    readonly pco_data_size: number
    /**
     * a #MbimPcoType given as a #guint32.
     */
    readonly pco_data_type: number
    /**
     * an array of #guint8 values.
     */
    readonly pco_data_buffer: number
    /* Methods of Mbim-1.0.Mbim.PcoValue */
    /**
     * Frees the memory allocated for the #MbimPcoValue.
     */
    free(): void
    static name: string
}
class PhonebookEntry {
    /* Fields of Mbim-1.0.Mbim.PhonebookEntry */
    /**
     * a #guint32.
     */
    readonly entry_index: number
    /**
     * a string.
     */
    readonly number: string
    /**
     * a string.
     */
    readonly name: string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
     */
    static array_free(array: PhonebookEntryArray): void
}
class PinDesc {
    /* Fields of Mbim-1.0.Mbim.PinDesc */
    /**
     * a #MbimPinMode given as a #guint32.
     */
    readonly pin_mode: number
    /**
     * a #MbimPinFormat given as a #guint32.
     */
    readonly pin_format: number
    /**
     * a #guint32.
     */
    readonly pin_length_min: number
    /**
     * a #guint32.
     */
    readonly pin_length_max: number
    /* Methods of Mbim-1.0.Mbim.PinDesc */
    /**
     * Frees the memory allocated for the #MbimPinDesc.
     */
    free(): void
    static name: string
}
class Provider {
    /* Fields of Mbim-1.0.Mbim.Provider */
    /**
     * a string.
     */
    readonly provider_id: string
    /**
     * a #MbimProviderState given as a #guint32.
     */
    readonly provider_state: number
    /**
     * a string.
     */
    readonly provider_name: string
    /**
     * a #MbimCellularClass given as a #guint32.
     */
    readonly cellular_class: number
    /**
     * a #guint32.
     */
    readonly rssi: number
    /**
     * a #guint32.
     */
    readonly error_rate: number
    /* Methods of Mbim-1.0.Mbim.Provider */
    /**
     * Frees the memory allocated for the #MbimProvider.
     */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimProvider structs.
     */
    static array_free(array: ProviderArray): void
}
class ProvisionedContextElement {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElement */
    /**
     * a #guint32.
     */
    readonly context_id: number
    /**
     * a #MbimUuid.
     */
    readonly context_type: Uuid
    /**
     * a string.
     */
    readonly access_string: string
    /**
     * a string.
     */
    readonly user_name: string
    /**
     * a string.
     */
    readonly password: string
    /**
     * a #MbimCompression given as a #guint32.
     */
    readonly compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     */
    readonly auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
     */
    static array_free(array: ProvisionedContextElementArray): void
}
class ProvisionedContextElementV2 {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElementV2 */
    /**
     * a #guint32.
     */
    readonly context_id: number
    /**
     * a #MbimUuid.
     */
    readonly context_type: Uuid
    /**
     * a #MbimContextIpType given as a #guint32.
     */
    readonly ip_type: number
    /**
     * a #MbimContextState given as a #guint32.
     */
    readonly state: number
    /**
     * a #MbimContextRoamingControl given as a #guint32.
     */
    readonly roaming: number
    /**
     * a #MbimContextMediaType given as a #guint32.
     */
    readonly media_type: number
    /**
     * a #MbimContextSource given as a #guint32.
     */
    readonly source: number
    /**
     * a string.
     */
    readonly access_string: string
    /**
     * a string.
     */
    readonly user_name: string
    /**
     * a string.
     */
    readonly password: string
    /**
     * a #MbimCompression given as a #guint32.
     */
    readonly compression: number
    /**
     * a #MbimAuthProtocol given as a #guint32.
     */
    readonly auth_protocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
     */
    static array_free(array: ProvisionedContextElementV2Array): void
}
abstract class ProxyClass {
    /* Fields of Mbim-1.0.Mbim.ProxyClass */
    readonly parent: GObject.ObjectClass
    static name: string
}
class ProxyPrivate {
    static name: string
}
class RsrpSnrInfo {
    /* Fields of Mbim-1.0.Mbim.RsrpSnrInfo */
    /**
     * a #guint32.
     */
    readonly rsrp: number
    /**
     * a #guint32.
     */
    readonly snr: number
    /**
     * a #guint32.
     */
    readonly rsrp_threshold: number
    /**
     * a #guint32.
     */
    readonly snr_threshold: number
    /**
     * a #MbimDataClass given as a #guint32.
     */
    readonly system_type: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
     */
    static array_free(array: RsrpSnrInfoArray): void
}
class SarConfigState {
    /* Fields of Mbim-1.0.Mbim.SarConfigState */
    /**
     * a #guint32.
     */
    readonly antenna_index: number
    /**
     * a #guint32.
     */
    readonly backoff_index: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSarConfigState structs.
     */
    static array_free(array: SarConfigStateArray): void
}
class Slot {
    /* Fields of Mbim-1.0.Mbim.Slot */
    /**
     * a #guint32.
     */
    readonly slot: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSlot structs.
     */
    static array_free(array: SlotArray): void
}
class SmsCdmaReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaReadRecord */
    /**
     * a #guint32.
     */
    readonly message_index: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     */
    readonly message_status: number
    /**
     * a string.
     */
    readonly address: string
    /**
     * a string.
     */
    readonly timestamp: string
    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     */
    readonly encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     */
    readonly language: number
    /**
     * size of the encoded_message array.
     */
    readonly encoded_message_size: number
    /**
     * an array of #guint8 values.
     */
    readonly encoded_message: number
    /**
     * a #guint32.
     */
    readonly encoded_message_size_in_characters: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
     */
    static array_free(array: SmsCdmaReadRecordArray): void
}
class SmsCdmaSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    /**
     * a #MbimSmsCdmaEncoding given as a #guint32.
     */
    readonly encoding: number
    /**
     * a #MbimSmsCdmaLang given as a #guint32.
     */
    readonly language: number
    /**
     * a string.
     */
    readonly address: string
    /**
     * size of the encoded_message array.
     */
    readonly encoded_message_size: number
    /**
     * an array of #guint8 values.
     */
    readonly encoded_message: number
    /**
     * a #guint32.
     */
    readonly encoded_message_size_in_characters: number
    /* Methods of Mbim-1.0.Mbim.SmsCdmaSendRecord */
    /**
     * Frees the memory allocated for the #MbimSmsCdmaSendRecord.
     */
    free(): void
    static name: string
}
class SmsPduReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduReadRecord */
    /**
     * a #guint32.
     */
    readonly message_index: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     */
    readonly message_status: number
    /**
     * size of the pdu_data array.
     */
    readonly pdu_data_size: number
    /**
     * an array of #guint8 values.
     */
    readonly pdu_data: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
     */
    static array_free(array: SmsPduReadRecordArray): void
}
class SmsPduSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduSendRecord */
    /**
     * size of the pdu_data array.
     */
    readonly pdu_data_size: number
    /**
     * an array of #guint8 values.
     */
    readonly pdu_data: number
    /* Methods of Mbim-1.0.Mbim.SmsPduSendRecord */
    /**
     * Frees the memory allocated for the #MbimSmsPduSendRecord.
     */
    free(): void
    static name: string
}
class Tai {
    /* Fields of Mbim-1.0.Mbim.Tai */
    /**
     * a #guint16.
     */
    readonly plmn_mcc: number
    /**
     * a #guint16.
     */
    readonly plmn_mnc: number
    /**
     * a #guint32.
     */
    readonly tac: number
    /* Methods of Mbim-1.0.Mbim.Tai */
    /**
     * Frees the memory allocated for the #MbimTai.
     */
    free(): void
    static name: string
}
class TerminalCapabilityInfo {
    /* Fields of Mbim-1.0.Mbim.TerminalCapabilityInfo */
    /**
     * size of the terminal_capability_data array.
     */
    readonly terminal_capability_data_size: number
    /**
     * an array of #guint8 values.
     */
    readonly terminal_capability_data: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
     */
    static array_free(array: TerminalCapabilityInfoArray): void
}
class Tlv {
    /* Methods of Mbim-1.0.Mbim.Tlv */
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
    guint16_array_get(): [ /* returnType */ boolean, /* array_size */ number | null, /* array */ number | null ]
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
    wake_command_get(): [ /* returnType */ boolean, /* service */ Uuid | null, /* cid */ number | null, /* payload_size */ number | null, /* payload */ number | null ]
    /**
     * Get the contents of a wake packet TLV.
     */
    wake_packet_get(): [ /* returnType */ boolean, /* filter_id */ number | null, /* original_packet_size */ number | null, /* packet_size */ number | null, /* packet */ number | null ]
    static name: string
    static new(type: TlvType, data: number, data_length: number): Tlv
    constructor(type: TlvType, data: number, data_length: number)
    /* Static methods and pseudo-constructors */
    static new(type: TlvType, data: number, data_length: number): Tlv
    static string_new(str: string): Tlv
}
class Uuid {
    /* Fields of Mbim-1.0.Mbim.Uuid */
    readonly a: Uint8Array
    readonly b: Uint8Array
    readonly c: Uint8Array
    readonly d: Uint8Array
    readonly e: Uint8Array
    /* Methods of Mbim-1.0.Mbim.Uuid */
    /**
     * Compare two %MbimUuid values.
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
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the UUID corresponding to `context_type`.
     */
    static from_context_type(context_type: ContextType): Uuid
    /**
     * Fills in `uuid` from the printable representation give in `str`.
     * 
     * Only ccepts `str` written with dashes separating items, e.g.:
     *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
     */
    static from_printable(str: string, uuid: Uuid): boolean
    /**
     * Get the UUID corresponding to `service`.
     * 
     * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
     * or a custom registered one.
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