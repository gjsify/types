/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Mbim-1.0
 */

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
function accessMediaTypeGetString(val: AccessMediaType): string
function activationCommandGetString(val: ActivationCommand): string
function activationStateGetString(val: ActivationState): string
function atdsProviderArrayFree(array: AtdsProviderArray): void
function atdsProviderPlmnModeGetString(val: AtdsProviderPlmnMode): string
function atdsRatModeGetString(val: AtdsRatMode): string
function authProtocolGetString(val: AuthProtocol): string
function cellInfoCdmaArrayFree(array: CellInfoCdmaArray): void
function cellInfoNeighboringGsmArrayFree(array: CellInfoNeighboringGsmArray): void
function cellInfoNeighboringLteArrayFree(array: CellInfoNeighboringLteArray): void
function cellInfoNeighboringNrArrayFree(array: CellInfoNeighboringNrArray): void
function cellInfoNeighboringTdscdmaArrayFree(array: CellInfoNeighboringTdscdmaArray): void
function cellInfoNeighboringUmtsArrayFree(array: CellInfoNeighboringUmtsArray): void
function cellInfoServingNrArrayFree(array: CellInfoServingNrArray): void
function cellularClassBuildStringFromMask(mask: CellularClass): string
function cidAtdsGetString(val: CidAtds): string
function cidAuthGetString(val: CidAuth): string
function cidBasicConnectGetString(val: CidBasicConnect): string
function cidCanNotify(service: Service, cid: number): boolean
function cidCanQuery(service: Service, cid: number): boolean
function cidCanSet(service: Service, cid: number): boolean
function cidDssGetString(val: CidDss): string
function cidGetPrintable(service: Service, cid: number): string
function cidIntelFirmwareUpdateGetString(val: CidIntelFirmwareUpdate): string
function cidMsBasicConnectExtensionsGetString(val: CidMsBasicConnectExtensions): string
function cidMsFirmwareIdGetString(val: CidMsFirmwareId): string
function cidMsHostShutdownGetString(val: CidMsHostShutdown): string
function cidMsSarGetString(val: CidMsSar): string
function cidMsUiccLowLevelAccessGetString(val: CidMsUiccLowLevelAccess): string
function cidPhonebookGetString(val: CidPhonebook): string
function cidProxyControlGetString(val: CidProxyControl): string
function cidQduGetString(val: CidQdu): string
function cidQmiGetString(val: CidQmi): string
function cidQuectelGetString(val: CidQuectel): string
function cidSmsGetString(val: CidSms): string
function cidStkGetString(val: CidStk): string
function cidUssdGetString(val: CidUssd): string
function compressionGetString(val: Compression): string
function contextIpTypeGetString(val: ContextIpType): string
function contextMediaTypeGetString(val: ContextMediaType): string
function contextOperationGetString(val: ContextOperation): string
function contextRoamingControlGetString(val: ContextRoamingControl): string
function contextSourceGetString(val: ContextSource): string
function contextStateGetString(val: ContextState): string
function contextTypeGetString(val: ContextType): string
function coreErrorGetString(val: CoreError): string
function coreErrorQuark(): GLib.Quark
function ctrlCapsBuildStringFromMask(mask: CtrlCaps): string
function dataClassBuildStringFromMask(mask: DataClass): string
function dataClassV3BuildStringFromMask(mask: DataClassV3): string
function dataSubclassBuildStringFromMask(mask: DataSubclass): string
function defaultPduActivationHintGetString(val: DefaultPduActivationHint): string
function deviceServiceElementArrayFree(array: DeviceServiceElementArray): void
function deviceTypeGetString(val: DeviceType): string
function drxCycleGetString(val: DrxCycle): string
function dssLinkStateGetString(val: DssLinkState): string
function emergencyModeStateGetString(val: EmergencyModeState): string
function eventEntryArrayFree(array: EventEntryArray): void
function frequencyRangeBuildStringFromMask(mask: FrequencyRange): string
function ipConfigurationAvailableFlagBuildStringFromMask(mask: IPConfigurationAvailableFlag): string
function ipv4ElementArrayFree(array: IPv4ElementArray): void
function ipv6ElementArrayFree(array: IPv6ElementArray): void
function ladnInfoGetString(val: LadnInfo): string
function lteAttachConfigurationArrayFree(array: LteAttachConfigurationArray): void
function lteAttachContextOperationGetString(val: LteAttachContextOperation): string
function lteAttachContextRoamingControlGetString(val: LteAttachContextRoamingControl): string
function lteAttachStateGetString(val: LteAttachState): string
function lteAttachStatusFree(var_: DeprecatedLteAttachStatus): void
function messageCommandTypeGetString(val: MessageCommandType): string
function messageTypeGetString(val: MessageType): string
function micoModeGetString(val: MicoMode): string
function modemConfigurationStatusGetString(val: ModemConfigurationStatus): string
function networkIdleHintStateGetString(val: NetworkIdleHintState): string
function nwErrorGetString(val: NwError): string
function packetFilterArrayFree(array: PacketFilterArray): void
function packetFilterV3ArrayFree(array: PacketFilterV3Array): void
function packetServiceActionGetString(val: PacketServiceAction): string
function packetServiceStateGetString(val: PacketServiceState): string
function pcoTypeGetString(val: PcoType): string
function phonebookEntryArrayFree(array: PhonebookEntryArray): void
function phonebookFlagGetString(val: PhonebookFlag): string
function phonebookStateGetString(val: PhonebookState): string
function phonebookWriteFlagGetString(val: PhonebookWriteFlag): string
function pinFormatGetString(val: PinFormat): string
function pinModeGetString(val: PinMode): string
function pinOperationGetString(val: PinOperation): string
function pinStateGetString(val: PinState): string
function pinTypeGetString(val: PinType): string
function protocolErrorGetString(val: ProtocolError): string
function protocolErrorQuark(): GLib.Quark
function providerArrayFree(array: ProviderArray): void
function providerStateBuildStringFromMask(mask: ProviderState): string
function provisionedContextElementArrayFree(array: ProvisionedContextElementArray): void
function provisionedContextElementV2ArrayFree(array: ProvisionedContextElementV2Array): void
function qduFileTypeGetString(val: QduFileType): string
function qduQuectelRebootTypeGetString(val: QduQuectelRebootType): string
function qduQuectelVersionTypeGetString(val: QduQuectelVersionType): string
function qduSessionActionGetString(val: QduSessionAction): string
function qduSessionResultGetString(val: QduSessionResult): string
function qduSessionStatusGetString(val: QduSessionStatus): string
function qduSessionTypeGetString(val: QduSessionType): string
function quectelRadioSwitchStateGetString(val: QuectelRadioSwitchState): string
function radioSwitchStateGetString(val: RadioSwitchState): string
function readyInfoFlagBuildStringFromMask(mask: ReadyInfoFlag): string
function registerActionGetString(val: RegisterAction): string
function registerCustomService(uuid: Uuid, nickname: string): number
function registerModeGetString(val: RegisterMode): string
function registerStateGetString(val: RegisterState): string
function registrationFlagBuildStringFromMask(mask: RegistrationFlag): string
function rsrpSnrInfoArrayFree(array: RsrpSnrInfoArray): void
function sarBackoffStateGetString(val: SarBackoffState): string
function sarConfigStateArrayFree(array: SarConfigStateArray): void
function sarControlModeGetString(val: SarControlMode): string
function sarWifiHardwareStateGetString(val: SarWifiHardwareState): string
function serviceGetString(val: Service): string
function serviceIdIsCustom(id: number): boolean
function serviceLookupName(service: number): string
function simClassBuildStringFromMask(mask: SimClass): string
function slotArrayFree(array: SlotArray): void
function smsCapsBuildStringFromMask(mask: SmsCaps): string
function smsCdmaEncodingGetString(val: SmsCdmaEncoding): string
function smsCdmaLangGetString(val: SmsCdmaLang): string
function smsCdmaReadRecordArrayFree(array: SmsCdmaReadRecordArray): void
function smsFlagGetString(val: SmsFlag): string
function smsFormatGetString(val: SmsFormat): string
function smsPduReadRecordArrayFree(array: SmsPduReadRecordArray): void
function smsStatusFlagGetString(val: SmsStatusFlag): string
function smsStatusGetString(val: SmsStatus): string
function smsStorageStateGetString(val: SmsStorageState): string
function statusErrorGetString(val: StatusError): string
function statusErrorQuark(): GLib.Quark
function stkPacProfileGetString(val: StkPacProfile): string
function stkPacTypeGetString(val: StkPacType): string
function subscriberReadyStateGetString(val: SubscriberReadyState): string
function subscriberReadyStatusFlagBuildStringFromMask(mask: SubscriberReadyStatusFlag): string
function terminalCapabilityInfoArrayFree(array: TerminalCapabilityInfoArray): void
function tlvTypeGetString(val: TlvType): string
function transmissionNotificationStatusGetString(val: TransmissionNotificationStatus): string
function transmissionStateGetString(val: TransmissionState): string
function uiccClassByteTypeGetString(val: UiccClassByteType): string
function uiccPassThroughActionGetString(val: UiccPassThroughAction): string
function uiccPassThroughStatusGetString(val: UiccPassThroughStatus): string
function uiccSecureMessagingGetString(val: UiccSecureMessaging): string
function uiccSlotStateGetString(val: UiccSlotState): string
function unregisterCustomService(id: number): boolean
function ussdActionGetString(val: UssdAction): string
function ussdResponseGetString(val: UssdResponse): string
function ussdSessionStateGetString(val: UssdSessionState): string
function utilsGetTracesEnabled(): boolean
function utilsSetTracesEnabled(enabled: boolean): void
function uuidFromContextType(contextType: ContextType): Uuid
function uuidFromPrintable(str: string, uuid: Uuid): boolean
function uuidFromService(service: Service): Uuid
function visibleProvidersActionGetString(val: VisibleProvidersAction): string
function voiceCallStateGetString(val: VoiceCallState): string
function voiceClassGetString(val: VoiceClass): string
function wakeTypeGetString(val: WakeType): string
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Mbim-1.0.Mbim.Device */
    deviceFile?: Gio.File
    deviceInSession?: boolean
    deviceTransactionId?: number
}
class Device {
    /* Properties of Mbim-1.0.Mbim.Device */
    deviceInSession: boolean
    deviceTransactionId: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    addLink(sessionId: number, baseIfname: string, ifnamePrefix: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_add_link().
     */
    addLinkFinish(res: Gio.AsyncResult, sessionId: number): string
    /**
     * Checks whether link management is supported by the kernel.
     */
    checkLinkSupported(): boolean
    /**
     * Checks the version number of the MS MBIMEx support in the device instance
     * against the one given as input.
     */
    checkMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean
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
    closeFinish(res: Gio.AsyncResult): boolean
    /**
     * Forces the #MbimDevice to be closed.
     */
    closeForce(): boolean
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
    commandFinish(res: Gio.AsyncResult): Message
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
    deleteAllLinks(baseIfname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_all_links().
     */
    deleteAllLinksFinish(res: Gio.AsyncResult): boolean
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
    deleteLink(ifname: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with mbim_device_delete_link().
     */
    deleteLinkFinish(res: Gio.AsyncResult): boolean
    /**
     * Get the version number of the MS MBIMEx support.
     * 
     * The reported version will be 1 if the initialization sequence to agree on
     * which version to use hasn't been run (e.g. with mbim_device_open_full() and
     * the explicit %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or
     * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3 flag).
     */
    getMsMbimexVersion(outMsMbimexVersionMinor: number): number
    /**
     * Acquire the next transaction ID of this #MbimDevice.
     * The internal transaction ID gets incremented.
     */
    getNextTransactionId(): number
    /**
     * Get the system path of the underlying MBIM device.
     */
    getPath(): string
    /**
     * Get the system path of the underlying MBIM device in UTF-8.
     */
    getPathDisplay(): string
    /**
     * Acquire the transaction ID of this #MbimDevice without
     * incrementing the internal transaction ID.
     */
    getTransactionId(): number
    /**
     * Checks whether the #MbimDevice is open for I/O.
     */
    isOpen(): boolean
    /**
     * Synchronously lists all virtual network interfaces that have been previously
     * created with mbim_device_add_link() in `base_ifname`.
     */
    listLinks(baseIfname: string): [ /* returnType */ boolean, /* outLinks */ string[] ]
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
    openFinish(res: Gio.AsyncResult): boolean
    /**
     * Asynchronously opens a #MbimDevice for I/O.
     * 
     * This method is an extension of the generic mbim_device_open(), which allows
     * launching the #MbimDevice with proxy support.
     * 
     * When the operation is finished `callback` will be called. You can then call
     * mbim_device_open_full_finish() to get the result of the operation.
     */
    openFull(flags: DeviceOpenFlags, timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous open operation started with mbim_device_open_full().
     */
    openFullFinish(res: Gio.AsyncResult): boolean
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
    setMsMbimexVersion(msMbimexVersionMajor: number, msMbimexVersionMinor: number): boolean
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
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     */
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Signals of Mbim-1.0.Mbim.Device */
    connect(sigName: "device-error", callback: ((object: GLib.Error) => void)): number
    on(sigName: "device-error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-error", callback: (object: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-error", callback: (object: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "device-error", object: GLib.Error): void
    connect(sigName: "device-indicate-status", callback: ((object: Message) => void)): number
    on(sigName: "device-indicate-status", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-indicate-status", callback: (object: Message) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-indicate-status", callback: (object: Message) => void): NodeJS.EventEmitter
    emit(sigName: "device-indicate-status", object: Message): void
    connect(sigName: "device-removed", callback: (() => void)): number
    on(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::device-in-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-in-session", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-in-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::device-transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-transaction-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::device-transaction-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFinish(res: Gio.AsyncResult): Device
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
interface Proxy_ConstructProps extends GObject.Object_ConstructProps {
}
class Proxy {
    /* Properties of Mbim-1.0.Mbim.Proxy */
    readonly mbimProxyNClients: number
    readonly mbimProxyNDevices: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
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
    connect(sigName: "notify::mbim-proxy-n-clients", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-clients", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mbim-proxy-n-clients", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mbim-proxy-n-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mbim-proxy-n-devices", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mbim-proxy-n-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    readonly providerId: string
    /**
     * a #MbimProviderState given as a #guint32.
     */
    readonly providerState: number
    /**
     * a string.
     */
    readonly providerName: string
    /**
     * a #MbimAtdsProviderPlmnMode given as a #guint32.
     */
    readonly plmnMode: number
    /**
     * a #guint32.
     */
    readonly rssi: number
    /**
     * a #guint32.
     */
    readonly errorRate: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimAtdsProvider structs.
     */
    static arrayFree(array: AtdsProviderArray): void
}
class CellInfoCdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoCdma */
    /**
     * a #guint32.
     */
    readonly servingCellFlag: number
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
    readonly baseStationId: number
    /**
     * a #guint32.
     */
    readonly baseLatitude: number
    /**
     * a #guint32.
     */
    readonly baseLongitude: number
    /**
     * a #guint32.
     */
    readonly refPn: number
    /**
     * a #guint32.
     */
    readonly gpsSeconds: number
    /**
     * a #guint32.
     */
    readonly pilotStrength: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
     */
    static arrayFree(array: CellInfoCdmaArray): void
}
class CellInfoNeighboringGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringGsm */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly arfcn: number
    /**
     * a #guint32.
     */
    readonly baseStationId: number
    /**
     * a #guint32.
     */
    readonly rxLevel: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
     */
    static arrayFree(array: CellInfoNeighboringGsmArray): void
}
class CellInfoNeighboringLte {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringLte */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly earfcn: number
    /**
     * a #guint32.
     */
    readonly physicalCellId: number
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
    static arrayFree(array: CellInfoNeighboringLteArray): void
}
class CellInfoNeighboringNr {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringNr */
    /**
     * a #MbimDataSubclass given as a #guint32.
     */
    readonly systemSubType: number
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a string.
     */
    readonly cellId: string
    /**
     * a #guint32.
     */
    readonly physicalCellId: number
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
    static arrayFree(array: CellInfoNeighboringNrArray): void
}
class CellInfoNeighboringTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringTdscdma */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly cellParameterId: number
    /**
     * a #guint32.
     */
    readonly timingAdvance: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #guint32.
     */
    readonly pathLoss: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
     */
    static arrayFree(array: CellInfoNeighboringTdscdmaArray): void
}
class CellInfoNeighboringUmts {
    /* Fields of Mbim-1.0.Mbim.CellInfoNeighboringUmts */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly primaryScramblingCode: number
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
    readonly pathLoss: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
     */
    static arrayFree(array: CellInfoNeighboringUmtsArray): void
}
class CellInfoServingGsm {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingGsm */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly timingAdvance: number
    /**
     * a #guint32.
     */
    readonly arfcn: number
    /**
     * a #guint32.
     */
    readonly baseStationId: number
    /**
     * a #guint32.
     */
    readonly rxLevel: number
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
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly earfcn: number
    /**
     * a #guint32.
     */
    readonly physicalCellId: number
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
    readonly timingAdvance: number
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
    readonly providerId: string
    /**
     * a #guint64.
     */
    readonly nci: number
    /**
     * a #guint32.
     */
    readonly physicalCellId: number
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
    readonly timingAdvance: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
     */
    static arrayFree(array: CellInfoServingNrArray): void
}
class CellInfoServingTdscdma {
    /* Fields of Mbim-1.0.Mbim.CellInfoServingTdscdma */
    /**
     * a string.
     */
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly cellParameterId: number
    /**
     * a #guint32.
     */
    readonly timingAdvance: number
    /**
     * a #gint32.
     */
    readonly rscp: number
    /**
     * a #guint32.
     */
    readonly pathLoss: number
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
    readonly providerId: string
    /**
     * a #guint32.
     */
    readonly locationAreaCode: number
    /**
     * a #guint32.
     */
    readonly cellId: number
    /**
     * a #guint32.
     */
    readonly frequencyInfoUl: number
    /**
     * a #guint32.
     */
    readonly frequencyInfoDl: number
    /**
     * a #guint32.
     */
    readonly frequencyInfoNt: number
    /**
     * a #guint32.
     */
    readonly uarfcn: number
    /**
     * a #guint32.
     */
    readonly primaryScramblingCode: number
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
    readonly pathLoss: number
    /* Methods of Mbim-1.0.Mbim.CellInfoServingUmts */
    /**
     * Frees the memory allocated for the #MbimCellInfoServingUmts.
     */
    free(): void
    static name: string
}
class DeprecatedLteAttachStatus {
    /* Fields of Mbim-1.0.Mbim.DeprecatedLteAttachStatus */
    readonly lteAttachState: number
    readonly ipType: number
    readonly accessString: string
    readonly userName: string
    readonly password: string
    readonly compression: number
    readonly authProtocol: number
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
    readonly deviceServiceId: Uuid
    /**
     * a #guint32.
     */
    readonly dssPayload: number
    /**
     * a #guint32.
     */
    readonly maxDssInstances: number
    /**
     * a #guint32.
     */
    readonly cidsCount: number
    /**
     * an array of #guint32 values.
     */
    readonly cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
     */
    static arrayFree(array: DeviceServiceElementArray): void
}
class EventEntry {
    /* Fields of Mbim-1.0.Mbim.EventEntry */
    /**
     * a #MbimUuid.
     */
    readonly deviceServiceId: Uuid
    /**
     * a #guint32.
     */
    readonly cidsCount: number
    /**
     * an array of #guint32 values.
     */
    readonly cids: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimEventEntry structs.
     */
    static arrayFree(array: EventEntryArray): void
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
    readonly onLinkPrefixLength: number
    /**
     * a #MbimIPv4.
     */
    readonly ipv4Address: IPv4
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimIPv4Element structs.
     */
    static arrayFree(array: IPv4ElementArray): void
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
    readonly onLinkPrefixLength: number
    /**
     * a #MbimIPv6
     */
    readonly ipv6Address: IPv6
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimIPv6Element structs.
     */
    static arrayFree(array: IPv6ElementArray): void
}
class LteAttachConfiguration {
    /* Fields of Mbim-1.0.Mbim.LteAttachConfiguration */
    /**
     * a #MbimContextIpType given as a #guint32.
     */
    readonly ipType: number
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
    readonly accessString: string
    /**
     * a string.
     */
    readonly userName: string
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
    readonly authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
     */
    static arrayFree(array: LteAttachConfigurationArray): void
}
class Message {
    /* Methods of Mbim-1.0.Mbim.Message */
    /**
     * Parses and returns parameters of the 'Location' response command in the 'ATDS' service.
     */
    atdsLocationResponseParse(): [ /* returnType */ boolean, /* outLac */ number | null, /* outTac */ number | null, /* outCellId */ number | null ]
    /**
     * Parses and returns parameters of the 'Operators' response command in the 'ATDS' service.
     */
    atdsOperatorsResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ AtdsProvider[] | null ]
    /**
     * Parses and returns parameters of the 'RAT' response command in the 'ATDS' service.
     */
    atdsRatResponseParse(): [ /* returnType */ boolean, /* outMode */ AtdsRatMode | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'ATDS' service.
     */
    atdsRegisterStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    /**
     * Parses and returns parameters of the 'Signal' response command in the 'ATDS' service.
     */
    atdsSignalResponseParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outRscp */ number | null, /* outEcno */ number | null, /* outRsrq */ number | null, /* outRsrp */ number | null, /* outRssnr */ number | null ]
    /**
     * Parses and returns parameters of the 'Aka' response command in the 'Auth' service.
     */
    authAkaResponseParse(): [ /* returnType */ boolean, /* outRes */ Uint8Array | null, /* outResLen */ number | null, /* outIntegratingKey */ Uint8Array | null, /* outCipheringKey */ Uint8Array | null, /* outAuts */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Akap' response command in the 'Auth' service.
     */
    authAkapResponseParse(): [ /* returnType */ boolean, /* outRes */ Uint8Array | null, /* outResLen */ number | null, /* outIntegratingKey */ Uint8Array | null, /* outCipheringKey */ Uint8Array | null, /* outAuts */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Sim' response command in the 'Auth' service.
     */
    authSimResponseParse(): [ /* returnType */ boolean, /* outSres1 */ number | null, /* outKc1 */ number | null, /* outSres2 */ number | null, /* outKc2 */ number | null, /* outSres3 */ number | null, /* outKc3 */ number | null, /* outN */ number | null ]
    /**
     * Gets the result of the 'Close' operation in the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    closeDoneGetResult(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
     */
    closeDoneGetStatusCode(): StatusError
    /**
     * Appends the contents of `buffer` to `self`.
     */
    commandAppend(buffer: number, bufferSize: number): void
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetCid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Gets the result of the 'Command' operation in the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetResult(): boolean
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetServiceId(): Uuid
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
     */
    commandDoneGetStatusCode(): StatusError
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetCid(): number
    /**
     * Get the command type of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetCommandType(): MessageCommandType
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND message.
     */
    commandGetServiceId(): Uuid
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Basic Connect' service.
     */
    connectNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Basic Connect' service.
     */
    connectResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Basic Connect' service.
     */
    deviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType | null, /* outCellularClass */ CellularClass | null, /* outVoiceClass */ VoiceClass | null, /* outSimClass */ SimClass | null, /* outDataClass */ DataClass | null, /* outSmsCaps */ SmsCaps | null, /* outControlCaps */ CtrlCaps | null, /* outMaxSessions */ number | null, /* outCustomDataClass */ string | null, /* outDeviceId */ string | null, /* outFirmwareInfo */ string | null, /* outHardwareInfo */ string | null ]
    /**
     * Parses and returns parameters of the 'Device Service Subscribe List' response command in the 'Basic Connect' service.
     */
    deviceServiceSubscribeListResponseParse(): [ /* returnType */ boolean, /* outEventsCount */ number | null, /* outEvents */ EventEntry[] | null ]
    /**
     * Create a new request for the 'Events' response command in the 'Basic Connect' service.
     */
    deviceServiceSubscriberListResponseParse(eventsCount: number, events: EventEntry): boolean
    /**
     * Parses and returns parameters of the 'Device Services' response command in the 'Basic Connect' service.
     */
    deviceServicesResponseParse(): [ /* returnType */ boolean, /* outDeviceServicesCount */ number | null, /* outMaxDssSessions */ number | null, /* outDeviceServices */ DeviceServiceElement[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'DSS' service.
     */
    dssConnectResponseParse(): boolean
    /**
     * Create a #MbimMessage with the same contents as `self`.
     */
    dup(): Message
    /**
     * Parses and returns parameters of the 'Emergency Mode' notification command in the 'Basic Connect' service.
     */
    emergencyModeNotificationParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState | null ]
    /**
     * Parses and returns parameters of the 'Emergency Mode' response command in the 'Basic Connect' service.
     */
    emergencyModeResponseParse(): [ /* returnType */ boolean, /* outState */ EmergencyModeState | null ]
    /**
     * Get the error in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    errorGetError(): GLib.Error
    /**
     * Get the error code in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
     * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
     */
    errorGetErrorStatusCode(): ProtocolError
    /**
     * Gets the whole message length.
     */
    getMessageLength(): number
    /**
     * Gets the message type.
     */
    getMessageType(): MessageType
    /**
     * Gets a printable string with the contents of the whole MBIM message.
     * 
     * This method will not fail if the parsing of the message contents fails,
     * a fallback text with the error will be included in the generated printable
     * information instead.
     */
    getPrintable(linePrefix: string, headersOnly: boolean): string
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
    getPrintableFull(mbimexVersionMajor: number, mbimexVersionMinor: number, linePrefix: string, headersOnly: boolean): string
    /**
     * Gets the whole raw data buffer of the #MbimMessage.
     */
    getRaw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the transaction ID of the message.
     */
    getTransactionId(): number
    /**
     * Parses and returns parameters of the 'Home Provider' response command in the 'Basic Connect' service.
     */
    homeProviderResponseParse(): [ /* returnType */ boolean, /* outProvider */ Provider | null ]
    /**
     * Get the command id of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetCid(): number
    /**
     * Gets the information buffer of the %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetRawInformationBuffer(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Get the service of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetService(): Service
    /**
     * Get the service UUID of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
     */
    indicateStatusGetServiceId(): Uuid
    /**
     * Parses and returns parameters of the 'IP Configuration' notification command in the 'Basic Connect' service.
     */
    ipConfigurationNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv4AddressCount */ number | null, /* outIpv4Address */ IPv4Element[] | null, /* outIpv6AddressCount */ number | null, /* outIpv6Address */ IPv6Element[] | null, /* outIpv4Gateway */ IPv4 | null, /* outIpv6Gateway */ IPv6 | null, /* outIpv4DnsServerCount */ number | null, /* outIpv4DnsServer */ IPv4[] | null, /* outIpv6DnsServerCount */ number | null, /* outIpv6DnsServer */ IPv6[] | null, /* outIpv4Mtu */ number | null, /* outIpv6Mtu */ number | null ]
    /**
     * Parses and returns parameters of the 'IP Configuration' response command in the 'Basic Connect' service.
     */
    ipConfigurationResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outIpv4ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv6ConfigurationAvailable */ IPConfigurationAvailableFlag | null, /* outIpv4AddressCount */ number | null, /* outIpv4Address */ IPv4Element[] | null, /* outIpv6AddressCount */ number | null, /* outIpv6Address */ IPv6Element[] | null, /* outIpv4Gateway */ IPv4 | null, /* outIpv6Gateway */ IPv6 | null, /* outIpv4DnsServerCount */ number | null, /* outIpv4DnsServer */ IPv4[] | null, /* outIpv6DnsServerCount */ number | null, /* outIpv6DnsServer */ IPv6[] | null, /* outIpv4Mtu */ number | null, /* outIpv6Mtu */ number | null ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Basic Connect' service.
     */
    ipPacketFiltersResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outPacketFiltersCount */ number | null, /* outPacketFilters */ PacketFilter[] | null ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsBaseStationsInfoResponseParse(): [ /* returnType */ boolean, /* outSystemType */ DataClass | null, /* outGsmServingCell */ CellInfoServingGsm | null, /* outUmtsServingCell */ CellInfoServingUmts | null, /* outTdscdmaServingCell */ CellInfoServingTdscdma | null, /* outLteServingCell */ CellInfoServingLte | null, /* outGsmNeighboringCellsCount */ number | null, /* outGsmNeighboringCells */ CellInfoNeighboringGsm[] | null, /* outUmtsNeighboringCellsCount */ number | null, /* outUmtsNeighboringCells */ CellInfoNeighboringUmts[] | null, /* outTdscdmaNeighboringCellsCount */ number | null, /* outTdscdmaNeighboringCells */ CellInfoNeighboringTdscdma[] | null, /* outLteNeighboringCellsCount */ number | null, /* outLteNeighboringCells */ CellInfoNeighboringLte[] | null, /* outCdmaCellsCount */ number | null, /* outCdmaCells */ CellInfoCdma[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsDeviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType | null, /* outCellularClass */ CellularClass | null, /* outVoiceClass */ VoiceClass | null, /* outSmsClass */ SimClass | null, /* outDataClass */ DataClass | null, /* outSmsCaps */ SmsCaps | null, /* outControlCaps */ CtrlCaps | null, /* outMaxSessions */ number | null, /* outCustomDataClass */ string | null, /* outDeviceId */ string | null, /* outFirmwareInfo */ string | null, /* outHardwareInfo */ string | null, /* outExecutorIndex */ number | null ]
    /**
     * Parses and returns parameters of the 'Device Slot Mappings' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsDeviceSlotMappingsResponseParse(): [ /* returnType */ boolean, /* outMapCount */ number | null, /* outSlotMap */ Slot[] | null ]
    /**
     * Parses and returns parameters of the 'Location Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLocationInfoStatusNotificationParse(): [ /* returnType */ boolean, /* outLocationAreaCode */ number | null, /* outTrackingAreaCode */ number | null, /* outCellId */ number | null ]
    /**
     * Parses and returns parameters of the 'Location Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLocationInfoStatusResponseParse(): [ /* returnType */ boolean, /* outLocationAreaCode */ number | null, /* outTrackingAreaCode */ number | null, /* outCellId */ number | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachConfigurationNotificationParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number | null, /* outConfigurations */ LteAttachConfiguration[] | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Configuration' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachConfigurationResponseParse(): [ /* returnType */ boolean, /* outConfigurationCount */ number | null, /* outConfigurations */ LteAttachConfiguration[] | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachInfoNotificationParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState | null, /* outIpType */ ContextIpType | null, /* outAccessString */ string | null, /* outUserName */ string | null, /* outPassword */ string | null, /* outCompression */ Compression | null, /* outAuthProtocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachInfoResponseParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState | null, /* outIpType */ ContextIpType | null, /* outAccessString */ string | null, /* outUserName */ string | null, /* outPassword */ string | null, /* outCompression */ Compression | null, /* outAuthProtocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachStatusNotificationParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ DeprecatedLteAttachStatus | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsLteAttachStatusResponseParse(): [ /* returnType */ boolean, /* outLteAttachStatus */ DeprecatedLteAttachStatus | null ]
    /**
     * Parses and returns parameters of the 'PCO' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsPcoNotificationParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue | null ]
    /**
     * Parses and returns parameters of the 'PCO' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsPcoResponseParse(): [ /* returnType */ boolean, /* outPcoValue */ PcoValue | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsProvisionedContextsNotificationParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElementV2[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsProvisionedContextsResponseParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElementV2[] | null ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' notification command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSlotInfoStatusNotificationParse(): [ /* returnType */ boolean, /* outSlotIndex */ number | null, /* outState */ UiccSlotState | null ]
    /**
     * Parses and returns parameters of the 'Slot Info Status' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSlotInfoStatusResponseParse(): [ /* returnType */ boolean, /* outSlotIndex */ number | null, /* outState */ UiccSlotState | null ]
    /**
     * Parses and returns parameters of the 'Sys Caps' response command in the 'Ms Basic Connect Extensions' service.
     */
    msBasicConnectExtensionsSysCapsResponseParse(): [ /* returnType */ boolean, /* outNumberOfExecutors */ number | null, /* outNumberOfSlots */ number | null, /* outConcurrency */ number | null, /* outModemId */ number | null ]
    /**
     * Parses and returns parameters of the 'Version' response command in the 'Ms Basic Connect Extensions V2' service.
     */
    msBasicConnectExtensionsV2VersionResponseParse(): [ /* returnType */ boolean, /* outMbimVersion */ number | null, /* outMbimExtendedVersion */ number | null ]
    /**
     * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3BaseStationsInfoResponseParse(): [ /* returnType */ boolean, /* outSystemType */ DataClassV3 | null, /* outSystemSubType */ DataSubclass | null, /* outGsmServingCell */ CellInfoServingGsm | null, /* outUmtsServingCell */ CellInfoServingUmts | null, /* outTdscdmaServingCell */ CellInfoServingTdscdma | null, /* outLteServingCell */ CellInfoServingLte | null, /* outGsmNeighboringCellsCount */ number | null, /* outGsmNeighboringCells */ CellInfoNeighboringGsm[] | null, /* outUmtsNeighboringCellsCount */ number | null, /* outUmtsNeighboringCells */ CellInfoNeighboringUmts[] | null, /* outTdscdmaNeighboringCellsCount */ number | null, /* outTdscdmaNeighboringCells */ CellInfoNeighboringTdscdma[] | null, /* outLteNeighboringCellsCount */ number | null, /* outLteNeighboringCells */ CellInfoNeighboringLte[] | null, /* outCdmaCellsCount */ number | null, /* outCdmaCells */ CellInfoCdma[] | null, /* outNrServingCellsCount */ number | null, /* outNrServingCells */ CellInfoServingNr[] | null, /* outNrNeighborCellsCount */ number | null, /* outNrNeighborCells */ CellInfoNeighboringNr[] | null ]
    /**
     * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3DeviceCapsResponseParse(): [ /* returnType */ boolean, /* outDeviceType */ DeviceType | null, /* outCellularClass */ CellularClass | null, /* outVoiceClass */ VoiceClass | null, /* outSimClass */ SimClass | null, /* outDataClass */ DataClassV3 | null, /* outSmsCaps */ SmsCaps | null, /* outControlCaps */ CtrlCaps | null, /* outDataSubclass */ DataSubclass | null, /* outMaxSessions */ number | null, /* outExecutorIndex */ number | null, /* outWcdmaBandClass */ number | null, /* outLteBandClassCount */ number | null, /* outLteBandClass */ number | null, /* outNrBandClassCount */ number | null, /* outNrBandClass */ number | null, /* outCustomDataClass */ string | null, /* outDeviceId */ string | null, /* outFirmwareInfo */ string | null, /* outHardwareInfo */ string | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3LteAttachInfoNotificationParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState | null, /* outNwError */ NwError | null, /* outIpType */ ContextIpType | null, /* outAccessString */ string | null, /* outUserName */ string | null, /* outPassword */ string | null, /* outCompression */ Compression | null, /* outAuthProtocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3LteAttachInfoResponseParse(): [ /* returnType */ boolean, /* outLteAttachState */ LteAttachState | null, /* outNwError */ NwError | null, /* outIpType */ ContextIpType | null, /* outAccessString */ string | null, /* outUserName */ string | null, /* outPassword */ string | null, /* outCompression */ Compression | null, /* outAuthProtocol */ AuthProtocol | null ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' notification command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3ModemConfigurationNotificationParse(): [ /* returnType */ boolean, /* outModemConfigurationStatus */ ModemConfigurationStatus | null, /* outConfigurationName */ string | null, /* outUnnamedIes */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Modem Configuration' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3ModemConfigurationResponseParse(): [ /* returnType */ boolean, /* outConfigurationStatus */ ModemConfigurationStatus | null, /* outConfigurationName */ string | null, /* outUnnamedIes */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Registration Parameters' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3RegistrationParametersResponseParse(): [ /* returnType */ boolean, /* outMicoMode */ MicoMode | null, /* outDrxCycle */ DrxCycle | null, /* outLadnInfo */ LadnInfo | null, /* outDefaultPduActivationHint */ DefaultPduActivationHint | null, /* outReRegisterIfNedeed */ boolean | null, /* outUnnamedIes */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Wake Reason' response command in the 'Ms Basic Connect Extensions V3' service.
     */
    msBasicConnectExtensionsV3WakeReasonResponseParse(): [ /* returnType */ boolean, /* outWakeType */ WakeType | null, /* outSessionId */ number | null, /* outWakeTlv */ Tlv | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2PacketServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outCurrentDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null, /* outFrequencyRange */ FrequencyRange | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2PacketServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outCurrentDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null, /* outFrequencyRange */ FrequencyRange | null ]
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2RegisterStateNotificationParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null, /* outPreferredDataClasses */ DataClass | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2RegisterStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null, /* outPreferredDataClasses */ DataClass | null ]
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2SignalStateNotificationParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null, /* outRsrpSnrCount */ number | null, /* outRsrpSnr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Ms Basic Connect V2' service.
     */
    msBasicConnectV2SignalStateResponseParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null, /* outRsrpSnrCount */ number | null, /* outRsrpSnr */ RsrpSnrInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3ConnectNotificationParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null, /* outMediaPreference */ AccessMediaType | null, /* outAccessString */ string | null, /* outUnnamedIes */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'Connect' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3ConnectResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outActivationState */ ActivationState | null, /* outVoiceCallState */ VoiceCallState | null, /* outIpType */ ContextIpType | null, /* outContextType */ Uuid | null, /* outNwError */ number | null, /* outMediaPreference */ AccessMediaType | null, /* outAccessString */ string | null, /* outUnnamedIes */ Tlv[] | null ]
    /**
     * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3IpPacketFiltersResponseParse(): [ /* returnType */ boolean, /* outSessionId */ number | null, /* outPacketFiltersCount */ number | null, /* outPacketFilters */ PacketFilterV3[] | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3PacketServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClassV3 | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null, /* outFrequencyRange */ FrequencyRange | null, /* outDataSubclass */ DataSubclass | null, /* outTai */ Tai | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3PacketServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClassV3 | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null, /* outFrequencyRange */ FrequencyRange | null, /* outDataSubclass */ DataSubclass | null, /* outTai */ Tai | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3SubscriberReadyStatusNotificationParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outFlags */ SubscriberReadyStatusFlag | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Ms Basic Connect V3' service.
     */
    msBasicConnectV3SubscriberReadyStatusResponseParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outFlags */ SubscriberReadyStatusFlag | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Get' response command in the 'MS Firmware ID' service.
     */
    msFirmwareIdGetResponseParse(): [ /* returnType */ boolean, /* outFirmwareId */ Uuid | null ]
    /**
     * Parses and returns parameters of the 'Config' response command in the 'MS SAR' service.
     */
    msSarConfigResponseParse(): [ /* returnType */ boolean, /* outMode */ SarControlMode | null, /* outBackoffState */ SarBackoffState | null, /* outWifiIntegration */ SarWifiHardwareState | null, /* outConfigStatesCount */ number | null, /* outConfigStates */ SarConfigState[] | null ]
    /**
     * Parses and returns parameters of the 'Transmission status' notification command in the 'MS SAR' service.
     */
    msSarTransmissionStatusNotificationParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus | null, /* outTransmissionStatus */ TransmissionState | null, /* outHysteresisTimer */ number | null ]
    /**
     * Parses and returns parameters of the 'Transmission status' response command in the 'MS SAR' service.
     */
    msSarTransmissionStatusResponseParse(): [ /* returnType */ boolean, /* outChannelNotification */ TransmissionNotificationStatus | null, /* outTransmissionStatus */ TransmissionState | null, /* outHysteresisTimer */ number | null ]
    /**
     * Parses and returns parameters of the 'APDU' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessApduResponseParse(): [ /* returnType */ boolean, /* outStatus */ number | null, /* outResponse */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'ATR' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessAtrResponseParse(): [ /* returnType */ boolean, /* outAtr */ string | null ]
    /**
     * Parses and returns parameters of the 'Close Channel' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessCloseChannelResponseParse(): [ /* returnType */ boolean, /* outStatus */ number | null ]
    /**
     * Parses and returns parameters of the 'Open Channel' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessOpenChannelResponseParse(): [ /* returnType */ boolean, /* outStatus */ number | null, /* outChannel */ number | null, /* outResponse */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Reset' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessResetResponseParse(): [ /* returnType */ boolean, /* outPassThroughStatus */ UiccPassThroughStatus | null ]
    /**
     * Parses and returns parameters of the 'Terminal Capability' response command in the 'MS UICC Low Level Access' service.
     */
    msUiccLowLevelAccessTerminalCapabilityResponseParse(): [ /* returnType */ boolean, /* outTerminalCapabilityCount */ number | null, /* outTerminalCapability */ TerminalCapabilityInfo[] | null ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' notification command in the 'Basic Connect' service.
     */
    multicarrierProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Multicarrier Providers' response command in the 'Basic Connect' service.
     */
    multicarrierProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Network Idle Hint' response command in the 'Basic Connect' service.
     */
    networkIdleHintResponseParse(): [ /* returnType */ boolean, /* outState */ NetworkIdleHintState | null ]
    /**
     * Gets the result of the 'Open' operation in the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    openDoneGetResult(): boolean
    /**
     * Get status code from the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
     */
    openDoneGetStatusCode(): StatusError
    /**
     * Get the maximum control transfer set to be used in the #MbimMessage of type
     * %MBIM_MESSAGE_TYPE_OPEN.
     */
    openGetMaxControlTransfer(): number
    /**
     * Parses and returns parameters of the 'Packet Service' notification command in the 'Basic Connect' service.
     */
    packetServiceNotificationParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null ]
    /**
     * Parses and returns parameters of the 'Packet Service' response command in the 'Basic Connect' service.
     */
    packetServiceResponseParse(): [ /* returnType */ boolean, /* outNwError */ number | null, /* outPacketServiceState */ PacketServiceState | null, /* outHighestAvailableDataClass */ DataClass | null, /* outUplinkSpeed */ number | null, /* outDownlinkSpeed */ number | null ]
    /**
     * Parses and returns parameters of the 'Packet Statistics' response command in the 'Basic Connect' service.
     */
    packetStatisticsResponseParse(): [ /* returnType */ boolean, /* outInDiscards */ number | null, /* outInErrors */ number | null, /* outInOctets */ number | null, /* outInPackets */ number | null, /* outOutOctets */ number | null, /* outOutPackets */ number | null, /* outOutErrors */ number | null, /* outOutDiscards */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' notification command in the 'Phonebook' service.
     */
    phonebookConfigurationNotificationParse(): [ /* returnType */ boolean, /* outState */ PhonebookState | null, /* outNumberOfEntries */ number | null, /* outUsedEntries */ number | null, /* outMaxNumberLength */ number | null, /* outMaxName */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Phonebook' service.
     */
    phonebookConfigurationResponseParse(): [ /* returnType */ boolean, /* outState */ PhonebookState | null, /* outNumberOfEntries */ number | null, /* outUsedEntries */ number | null, /* outMaxNumberLength */ number | null, /* outMaxName */ number | null ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'Phonebook' service.
     */
    phonebookDeleteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Read' response command in the 'Phonebook' service.
     */
    phonebookReadResponseParse(): [ /* returnType */ boolean, /* outEntryCount */ number | null, /* outEntries */ PhonebookEntry[] | null ]
    /**
     * Parses and returns parameters of the 'Write' response command in the 'Phonebook' service.
     */
    phonebookWriteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Pin List' response command in the 'Basic Connect' service.
     */
    pinListResponseParse(): [ /* returnType */ boolean, /* outPinDescPin1 */ PinDesc | null, /* outPinDescPin2 */ PinDesc | null, /* outPinDescDeviceSimPin */ PinDesc | null, /* outPinDescDeviceFirstSimPin */ PinDesc | null, /* outPinDescNetworkPin */ PinDesc | null, /* outPinDescNetworkSubsetPin */ PinDesc | null, /* outPinDescServiceProviderPin */ PinDesc | null, /* outPinDescCorporatePin */ PinDesc | null, /* outPinDescSubsidyLock */ PinDesc | null, /* outPinDescCustom */ PinDesc | null ]
    /**
     * Parses and returns parameters of the 'Pin' response command in the 'Basic Connect' service.
     */
    pinResponseParse(): [ /* returnType */ boolean, /* outPinType */ PinType | null, /* outPinState */ PinState | null, /* outRemainingAttempts */ number | null ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' notification command in the 'Basic Connect' service.
     */
    preferredProvidersNotificationParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Preferred Providers' response command in the 'Basic Connect' service.
     */
    preferredProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Basic Connect' service.
     */
    provisionedContextsNotificationParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElement[] | null ]
    /**
     * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Basic Connect' service.
     */
    provisionedContextsResponseParse(): [ /* returnType */ boolean, /* outProvisionedContextsCount */ number | null, /* outProvisionedContexts */ ProvisionedContextElement[] | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'Proxy Control' service.
     */
    proxyControlConfigurationResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Version' notification command in the 'Proxy Control' service.
     */
    proxyControlVersionNotificationParse(): [ /* returnType */ boolean, /* outMbimVersion */ number | null, /* outMbimExtendedVersion */ number | null ]
    /**
     * Parses and returns parameters of the 'File Open' response command in the 'QDU' service.
     */
    qduFileOpenResponseParse(): [ /* returnType */ boolean, /* outMaxTransferSize */ number | null, /* outMaxWindowSize */ number | null ]
    /**
     * Parses and returns parameters of the 'File Write' response command in the 'QDU' service.
     */
    qduFileWriteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Quectel Read Version' response command in the 'QDU' service.
     */
    qduQuectelReadVersionResponseParse(): [ /* returnType */ boolean, /* outVersionId */ number | null, /* outVersion */ string | null ]
    /**
     * Parses and returns parameters of the 'Quectel Reboot' response command in the 'QDU' service.
     */
    qduQuectelRebootResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Update Session' response command in the 'QDU' service.
     */
    qduUpdateSessionResponseParse(): [ /* returnType */ boolean, /* outCurrentSessionType */ QduSessionType | null, /* outCurrentSessionStatus */ QduSessionStatus | null, /* outLastSessionType */ QduSessionType | null, /* outLastSessionResult */ QduSessionResult | null, /* outLastSessionErrorOffset */ number | null, /* outLastSessionErrorSize */ number | null ]
    /**
     * Parses and returns parameters of the 'msg' notification command in the 'QMI' service.
     */
    qmiMsgNotificationParse(): [ /* returnType */ boolean, /* outQmux */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'msg' response command in the 'QMI' service.
     */
    qmiMsgResponseParse(): [ /* returnType */ boolean, /* outQmux */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Quectel' service.
     */
    quectelRadioStateResponseParse(): [ /* returnType */ boolean, /* outRadioState */ QuectelRadioSwitchState | null ]
    /**
     * Parses and returns parameters of the 'Radio State' notification command in the 'Basic Connect' service.
     */
    radioStateNotificationParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState | null, /* outSwRadioState */ RadioSwitchState | null ]
    /**
     * Parses and returns parameters of the 'Radio State' response command in the 'Basic Connect' service.
     */
    radioStateResponseParse(): [ /* returnType */ boolean, /* outHwRadioState */ RadioSwitchState | null, /* outSwRadioState */ RadioSwitchState | null ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Message
    /**
     * Parses and returns parameters of the 'Register State' notification command in the 'Basic Connect' service.
     */
    registerStateNotificationParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    /**
     * Parses and returns parameters of the 'Register State' response command in the 'Basic Connect' service.
     */
    registerStateResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outRegisterState */ RegisterState | null, /* outRegisterMode */ RegisterMode | null, /* outAvailableDataClasses */ DataClass | null, /* outCurrentCellularClass */ CellularClass | null, /* outProviderId */ string | null, /* outProviderName */ string | null, /* outRoamingText */ string | null, /* outRegistrationFlag */ RegistrationFlag | null ]
    /**
     * Gets the result of the operation from the response message, which
     * can be either a %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message or a message of the
     * specified `expected` type.
     */
    responseGetResult(expected: MessageType): boolean
    /**
     * Parses and returns parameters of the 'Service Activation' response command in the 'Basic Connect' service.
     */
    serviceActivationResponseParse(): [ /* returnType */ boolean, /* outNwError */ NwError | null, /* outBuffer */ Uint8Array | null ]
    /**
     * Sets the transaction ID of the message.
     */
    setTransactionId(transactionId: number): void
    /**
     * Parses and returns parameters of the 'Signal State' notification command in the 'Basic Connect' service.
     */
    signalStateNotificationParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null ]
    /**
     * Parses and returns parameters of the 'Signal State' response command in the 'Basic Connect' service.
     */
    signalStateResponseParse(): [ /* returnType */ boolean, /* outRssi */ number | null, /* outErrorRate */ number | null, /* outSignalStrengthInterval */ number | null, /* outRssiThreshold */ number | null, /* outErrorRateThreshold */ number | null ]
    /**
     * Parses and returns parameters of the 'Configuration' response command in the 'SMS' service.
     */
    smsConfigurationResponseParse(): [ /* returnType */ boolean, /* outSmsStorageState */ SmsStorageState | null, /* outFormat */ SmsFormat | null, /* outMaxMessages */ number | null, /* outCdmaShortMessageSize */ number | null, /* outScAddress */ string | null ]
    /**
     * Parses and returns parameters of the 'Delete' response command in the 'SMS' service.
     */
    smsDeleteResponseParse(): boolean
    /**
     * Parses and returns parameters of the 'Message Store Status' notification command in the 'SMS' service.
     */
    smsMessageStoreStatusNotificationParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag | null, /* outMessageIndex */ number | null ]
    /**
     * Parses and returns parameters of the 'Message Store Status' response command in the 'SMS' service.
     */
    smsMessageStoreStatusResponseParse(): [ /* returnType */ boolean, /* outFlag */ SmsStatusFlag | null, /* outMessageIndex */ number | null ]
    /**
     * Parses and returns parameters of the 'Read' notification command in the 'SMS' service.
     */
    smsReadNotificationParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat | null, /* outMessagesCount */ number | null, /* outPduMessages */ SmsPduReadRecord[] | null, /* outCdmaMessages */ SmsCdmaReadRecord[] | null ]
    /**
     * Parses and returns parameters of the 'Read' response command in the 'SMS' service.
     */
    smsReadResponseParse(): [ /* returnType */ boolean, /* outFormat */ SmsFormat | null, /* outMessagesCount */ number | null, /* outPduMessages */ SmsPduReadRecord[] | null, /* outCdmaMessages */ SmsCdmaReadRecord[] | null ]
    /**
     * Parses and returns parameters of the 'Send' response command in the 'SMS' service.
     */
    smsSendResponseParse(): [ /* returnType */ boolean, /* outMessageReference */ number | null ]
    /**
     * Parses and returns parameters of the 'Envelope' response command in the 'STK' service.
     */
    stkEnvelopeResponseParse(): [ /* returnType */ boolean, /* outEnvelopeSupport */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Pac' notification command in the 'STK' service.
     */
    stkPacNotificationParse(): [ /* returnType */ boolean, /* outPacType */ StkPacType | null, /* outDataBuffer */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Pac' response command in the 'STK' service.
     */
    stkPacResponseParse(): [ /* returnType */ boolean, /* outPacSupport */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Terminal Response' response command in the 'STK' service.
     */
    stkTerminalResponseResponseParse(): [ /* returnType */ boolean, /* outResultData */ Uint8Array | null, /* outStatusWords */ number | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Basic Connect' service.
     */
    subscriberReadyStatusNotificationParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    /**
     * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Basic Connect' service.
     */
    subscriberReadyStatusResponseParse(): [ /* returnType */ boolean, /* outReadyState */ SubscriberReadyState | null, /* outSubscriberId */ string | null, /* outSimIccId */ string | null, /* outReadyInfo */ ReadyInfoFlag | null, /* outTelephoneNumbersCount */ number | null, /* outTelephoneNumbers */ string[] | null ]
    /**
     * Atomically decrements the reference count of `self` by one.
     * If the reference count drops to 0, `self` is completely disposed.
     */
    unref(): void
    /**
     * Parses and returns parameters of the '' notification command in the 'USSD' service.
     */
    ussdNotificationParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse | null, /* outSessionState */ UssdSessionState | null, /* outDataCodingScheme */ number | null, /* outPayload */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the '' response command in the 'USSD' service.
     */
    ussdResponseParse(): [ /* returnType */ boolean, /* outResponse */ UssdResponse | null, /* outSessionState */ UssdSessionState | null, /* outDataCodingScheme */ number | null, /* outPayload */ Uint8Array | null ]
    /**
     * Parses and returns parameters of the 'Visible Providers' response command in the 'Basic Connect' service.
     */
    visibleProvidersResponseParse(): [ /* returnType */ boolean, /* outProvidersCount */ number | null, /* outProviders */ Provider[] | null ]
    static name: string
    static new(data: number, dataLength: number): Message
    constructor(data: number, dataLength: number)
    /* Static methods and pseudo-constructors */
    static atdsLocationQueryNew(): Message
    static atdsOperatorsQueryNew(): Message
    static atdsRatQueryNew(): Message
    static atdsRatSetNew(mode: AtdsRatMode): Message
    static atdsRegisterStateQueryNew(): Message
    static atdsSignalQueryNew(): Message
    static authAkaQueryNew(rand: Uint8Array, autn: Uint8Array): Message
    static authAkapQueryNew(rand: Uint8Array, autn: Uint8Array, networkName: string): Message
    static authSimQueryNew(rand1: Uint8Array, rand2: Uint8Array, rand3: Uint8Array, n: number): Message
    static closeDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    static closeNew(transactionId: number): Message
    static commandNew(transactionId: number, service: Service, cid: number, commandType: MessageCommandType): Message
    static connectQueryNew(sessionId: number, activationState: ActivationState, voiceCallState: VoiceCallState, ipType: ContextIpType, contextType: Uuid, nwError: number): Message
    static connectSetNew(sessionId: number, activationCommand: ActivationCommand, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid): Message
    static deviceCapsQueryNew(): Message
    static deviceServiceSubscribeListSetNew(eventsCount: number, events: EventEntry[]): Message
    static deviceServiceSubscriberListSetNew(eventsCount: number, events: EventEntry): Message
    static deviceServicesQueryNew(): Message
    static dssConnectSetNew(deviceServiceId: Uuid, dssSessionId: number, dssLinkState: DssLinkState): Message
    static emergencyModeQueryNew(): Message
    static emergencyModeSetNew(state: EmergencyModeState): Message
    static errorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    static functionErrorNew(transactionId: number, errorStatusCode: ProtocolError): Message
    static homeProviderQueryNew(): Message
    static homeProviderSetNew(provider: Provider): Message
    static intelFirmwareUpdateModemRebootSetNew(): Message
    static ipConfigurationQueryNew(sessionId: number, ipv4ConfigurationAvailable: IPConfigurationAvailableFlag, ipv6ConfigurationAvailable: IPConfigurationAvailableFlag, ipv4AddressCount: number, ipv4Address: IPv4Element[], ipv6AddressCount: number, ipv6Address: IPv6Element[], ipv4Gateway: IPv4, ipv6Gateway: IPv6, ipv4DnsServerCount: number, ipv4DnsServer: IPv4[], ipv6DnsServerCount: number, ipv6DnsServer: IPv6[], ipv4Mtu: number, ipv6Mtu: number): Message
    static ipPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    static ipPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilter[]): Message
    static msBasicConnectExtensionsBaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number): Message
    static msBasicConnectExtensionsDeviceCapsQueryNew(): Message
    static msBasicConnectExtensionsDeviceSlotMappingsQueryNew(): Message
    static msBasicConnectExtensionsDeviceSlotMappingsSetNew(mapCount: number, slotMap: Slot[]): Message
    static msBasicConnectExtensionsLocationInfoStatusQueryNew(): Message
    static msBasicConnectExtensionsLteAttachConfigurationQueryNew(): Message
    static msBasicConnectExtensionsLteAttachConfigurationSetNew(operation: LteAttachContextOperation, configurationCount: number, configurations: LteAttachConfiguration[]): Message
    static msBasicConnectExtensionsLteAttachInfoQueryNew(): Message
    static msBasicConnectExtensionsLteAttachStatusQueryNew(): Message
    static msBasicConnectExtensionsPcoQueryNew(pcoValue: PcoValue): Message
    static msBasicConnectExtensionsProvisionedContextsQueryNew(): Message
    static msBasicConnectExtensionsProvisionedContextsSetNew(operation: ContextOperation, contextType: Uuid, ipType: ContextIpType, state: ContextState, roaming: ContextRoamingControl, mediaType: ContextMediaType, source: ContextSource, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol): Message
    static msBasicConnectExtensionsSlotInfoStatusQueryNew(slotIndex: number): Message
    static msBasicConnectExtensionsSysCapsQueryNew(): Message
    static msBasicConnectExtensionsV2VersionQueryNew(mbimVersion: number, mbimExtendedVersion: number): Message
    static msBasicConnectExtensionsV3BaseStationsInfoQueryNew(maxGsmCount: number, maxUmtsCount: number, maxTdscdmaCount: number, maxLteCount: number, maxCdmaCount: number, maxNrCount: number): Message
    static msBasicConnectExtensionsV3ModemConfigurationQueryNew(): Message
    static msBasicConnectExtensionsV3RegistrationParametersQueryNew(): Message
    static msBasicConnectExtensionsV3RegistrationParametersSetNew(micoMode: MicoMode, drxCycle: DrxCycle, ladnInfo: LadnInfo, defaultPduActivationHint: DefaultPduActivationHint, reRegisterIfNedeed: boolean, unnamedIes: Tlv[]): Message
    static msBasicConnectExtensionsV3WakeReasonQueryNew(): Message
    static msBasicConnectV3ConnectQueryNew(sessionId: number): Message
    static msBasicConnectV3ConnectSetNew(sessionId: number, activationCommand: ActivationCommand, compression: Compression, authProtocol: AuthProtocol, ipType: ContextIpType, contextType: Uuid, mediaPreference: AccessMediaType, accessString: string, userName: string, password: string, unnamedIes: Tlv[]): Message
    static msBasicConnectV3IpPacketFiltersQueryNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    static msBasicConnectV3IpPacketFiltersSetNew(sessionId: number, packetFiltersCount: number, packetFilters: PacketFilterV3[]): Message
    static msFirmwareIdGetQueryNew(): Message
    static msHostShutdownNotifySetNew(): Message
    static msSarConfigQueryNew(): Message
    static msSarConfigSetNew(mode: SarControlMode, backoffState: SarBackoffState, configStatesCount: number, configStates: SarConfigState[]): Message
    static msSarTransmissionStatusQueryNew(): Message
    static msSarTransmissionStatusSetNew(channelNotification: TransmissionNotificationStatus, hysteresisTimer: number): Message
    static msUiccLowLevelAccessApduSetNew(channel: number, secureMessaging: UiccSecureMessaging, classByteType: UiccClassByteType, command: Uint8Array): Message
    static msUiccLowLevelAccessAtrQueryNew(): Message
    static msUiccLowLevelAccessCloseChannelSetNew(channel: number, channelGroup: number): Message
    static msUiccLowLevelAccessOpenChannelSetNew(appId: Uint8Array, selectP2Arg: number, channelGroup: number): Message
    static msUiccLowLevelAccessResetQueryNew(): Message
    static msUiccLowLevelAccessResetSetNew(passThroughAction: UiccPassThroughAction): Message
    static msUiccLowLevelAccessTerminalCapabilityQueryNew(): Message
    static msUiccLowLevelAccessTerminalCapabilitySetNew(terminalCapabilityCount: number, terminalCapability: TerminalCapabilityInfo[]): Message
    static multicarrierProvidersQueryNew(): Message
    static multicarrierProvidersSetNew(providersCount: number, providers: Provider[]): Message
    static networkIdleHintQueryNew(): Message
    static networkIdleHintSetNew(state: NetworkIdleHintState): Message
    static new(data: number, dataLength: number): Message
    static openDoneNew(transactionId: number, errorStatusCode: StatusError): Message
    static openNew(transactionId: number, maxControlTransfer: number): Message
    static packetServiceQueryNew(): Message
    static packetServiceSetNew(packetServiceAction: PacketServiceAction): Message
    static packetStatisticsQueryNew(): Message
    static phonebookConfigurationQueryNew(): Message
    static phonebookDeleteSetNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    static phonebookReadQueryNew(filterFlag: PhonebookFlag, filterMessageIndex: number): Message
    static phonebookWriteSetNew(saveFlag: PhonebookWriteFlag, saveIndex: number, number: string, name: string): Message
    static pinListQueryNew(): Message
    static pinQueryNew(): Message
    static pinSetNew(pinType: PinType, pinOperation: PinOperation, pin: string, newPin: string): Message
    static preferredProvidersQueryNew(): Message
    static preferredProvidersSetNew(providersCount: number, providers: Provider[]): Message
    static provisionedContextsQueryNew(): Message
    static provisionedContextsSetNew(contextId: number, contextType: Uuid, accessString: string, userName: string, password: string, compression: Compression, authProtocol: AuthProtocol, providerId: string): Message
    static proxyControlConfigurationSetNew(devicePath: string, timeout: number): Message
    static qduFileOpenQueryNew(): Message
    static qduFileOpenSetNew(fileType: QduFileType, fileSize: number): Message
    static qduFileWriteSetNew(dataBuffer: Uint8Array): Message
    static qduQuectelReadVersionSetNew(versionType: QduQuectelVersionType): Message
    static qduQuectelRebootSetNew(rebootType: QduQuectelRebootType): Message
    static qduUpdateSessionQueryNew(): Message
    static qduUpdateSessionSetNew(sessionAction: QduSessionAction, sessionType: QduSessionType): Message
    static qmiMsgSetNew(qmiMsg: Uint8Array): Message
    static quectelRadioStateQueryNew(): Message
    static quectelRadioStateSetNew(radioState: QuectelRadioSwitchState): Message
    static radioStateQueryNew(): Message
    static radioStateSetNew(radioState: RadioSwitchState): Message
    static registerStateQueryNew(): Message
    static registerStateSetNew(providerId: string, registerAction: RegisterAction, dataClass: DataClass): Message
    static serviceActivationSetNew(buffer: Uint8Array): Message
    static signalStateQueryNew(): Message
    static signalStateSetNew(signalStrengthInterval: number, rssiThreshold: number, errorRateThreshold: number): Message
    static smsConfigurationQueryNew(): Message
    static smsConfigurationSetNew(format: SmsFormat, scAddress: string): Message
    static smsDeleteSetNew(flag: SmsFlag, messageIndex: number): Message
    static smsMessageStoreStatusQueryNew(): Message
    static smsReadQueryNew(format: SmsFormat, flag: SmsFlag, messageIndex: number): Message
    static smsSendSetNew(format: SmsFormat, pduMessage: SmsPduSendRecord, cdmaMessage: SmsCdmaSendRecord): Message
    static stkEnvelopeQueryNew(): Message
    static stkEnvelopeSetNew(data: Uint8Array): Message
    static stkPacQueryNew(): Message
    static stkPacSetNew(pacHostControl: Uint8Array): Message
    static stkTerminalResponseSetNew(response: Uint8Array): Message
    static subscriberReadyStatusQueryNew(): Message
    static ussdSetNew(action: UssdAction, dataCodingScheme: number, payload: Uint8Array): Message
    static visibleProvidersQueryNew(action: VisibleProvidersAction): Message
}
class PacketFilter {
    /* Fields of Mbim-1.0.Mbim.PacketFilter */
    /**
     * a #guint32.
     */
    readonly filterSize: number
    /**
     * an array of #guint8 values.
     */
    readonly packetFilter: number
    /**
     * an array of #guint8 values.
     */
    readonly packetMask: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimPacketFilter structs.
     */
    static arrayFree(array: PacketFilterArray): void
}
class PacketFilterV3 {
    /* Fields of Mbim-1.0.Mbim.PacketFilterV3 */
    /**
     * a #guint32.
     */
    readonly filterSize: number
    /**
     * an array of #guint8 values.
     */
    readonly packetFilter: number
    /**
     * an array of #guint8 values.
     */
    readonly packetMask: number
    /**
     * a #guint32.
     */
    readonly filterId: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
     */
    static arrayFree(array: PacketFilterV3Array): void
}
class PcoValue {
    /* Fields of Mbim-1.0.Mbim.PcoValue */
    /**
     * a #guint32.
     */
    readonly sessionId: number
    /**
     * a #guint32.
     */
    readonly pcoDataSize: number
    /**
     * a #MbimPcoType given as a #guint32.
     */
    readonly pcoDataType: number
    /**
     * an array of #guint8 values.
     */
    readonly pcoDataBuffer: number
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
    readonly entryIndex: number
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
    static arrayFree(array: PhonebookEntryArray): void
}
class PinDesc {
    /* Fields of Mbim-1.0.Mbim.PinDesc */
    /**
     * a #MbimPinMode given as a #guint32.
     */
    readonly pinMode: number
    /**
     * a #MbimPinFormat given as a #guint32.
     */
    readonly pinFormat: number
    /**
     * a #guint32.
     */
    readonly pinLengthMin: number
    /**
     * a #guint32.
     */
    readonly pinLengthMax: number
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
    readonly providerId: string
    /**
     * a #MbimProviderState given as a #guint32.
     */
    readonly providerState: number
    /**
     * a string.
     */
    readonly providerName: string
    /**
     * a #MbimCellularClass given as a #guint32.
     */
    readonly cellularClass: number
    /**
     * a #guint32.
     */
    readonly rssi: number
    /**
     * a #guint32.
     */
    readonly errorRate: number
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
    static arrayFree(array: ProviderArray): void
}
class ProvisionedContextElement {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElement */
    /**
     * a #guint32.
     */
    readonly contextId: number
    /**
     * a #MbimUuid.
     */
    readonly contextType: Uuid
    /**
     * a string.
     */
    readonly accessString: string
    /**
     * a string.
     */
    readonly userName: string
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
    readonly authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
     */
    static arrayFree(array: ProvisionedContextElementArray): void
}
class ProvisionedContextElementV2 {
    /* Fields of Mbim-1.0.Mbim.ProvisionedContextElementV2 */
    /**
     * a #guint32.
     */
    readonly contextId: number
    /**
     * a #MbimUuid.
     */
    readonly contextType: Uuid
    /**
     * a #MbimContextIpType given as a #guint32.
     */
    readonly ipType: number
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
    readonly mediaType: number
    /**
     * a #MbimContextSource given as a #guint32.
     */
    readonly source: number
    /**
     * a string.
     */
    readonly accessString: string
    /**
     * a string.
     */
    readonly userName: string
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
    readonly authProtocol: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
     */
    static arrayFree(array: ProvisionedContextElementV2Array): void
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
    readonly rsrpThreshold: number
    /**
     * a #guint32.
     */
    readonly snrThreshold: number
    /**
     * a #MbimDataClass given as a #guint32.
     */
    readonly systemType: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
     */
    static arrayFree(array: RsrpSnrInfoArray): void
}
class SarConfigState {
    /* Fields of Mbim-1.0.Mbim.SarConfigState */
    /**
     * a #guint32.
     */
    readonly antennaIndex: number
    /**
     * a #guint32.
     */
    readonly backoffIndex: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSarConfigState structs.
     */
    static arrayFree(array: SarConfigStateArray): void
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
    static arrayFree(array: SlotArray): void
}
class SmsCdmaReadRecord {
    /* Fields of Mbim-1.0.Mbim.SmsCdmaReadRecord */
    /**
     * a #guint32.
     */
    readonly messageIndex: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     */
    readonly messageStatus: number
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
    readonly encodedMessageSize: number
    /**
     * an array of #guint8 values.
     */
    readonly encodedMessage: number
    /**
     * a #guint32.
     */
    readonly encodedMessageSizeInCharacters: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
     */
    static arrayFree(array: SmsCdmaReadRecordArray): void
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
    readonly encodedMessageSize: number
    /**
     * an array of #guint8 values.
     */
    readonly encodedMessage: number
    /**
     * a #guint32.
     */
    readonly encodedMessageSizeInCharacters: number
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
    readonly messageIndex: number
    /**
     * a #MbimSmsStatus given as a #guint32.
     */
    readonly messageStatus: number
    /**
     * size of the pdu_data array.
     */
    readonly pduDataSize: number
    /**
     * an array of #guint8 values.
     */
    readonly pduData: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
     */
    static arrayFree(array: SmsPduReadRecordArray): void
}
class SmsPduSendRecord {
    /* Fields of Mbim-1.0.Mbim.SmsPduSendRecord */
    /**
     * size of the pdu_data array.
     */
    readonly pduDataSize: number
    /**
     * an array of #guint8 values.
     */
    readonly pduData: number
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
    readonly plmnMcc: number
    /**
     * a #guint16.
     */
    readonly plmnMnc: number
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
    readonly terminalCapabilityDataSize: number
    /**
     * an array of #guint8 values.
     */
    readonly terminalCapabilityData: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
     */
    static arrayFree(array: TerminalCapabilityInfoArray): void
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
    getRaw(): [ /* returnType */ number, /* length */ number ]
    /**
     * Gets the TLV raw data.
     */
    getTlvData(): [ /* returnType */ number, /* outLength */ number ]
    /**
     * Gets the message type.
     */
    getTlvType(): TlvType
    /**
     * Get an array of #guint16 values with the contents in the #MbimTlv.
     * 
     * The method may return a successful return even with on empty arrays (i.e.
     * with `array_size` set to 0 and `array` set to %NULL).
     */
    guint16ArrayGet(): [ /* returnType */ boolean, /* arraySize */ number | null, /* array */ number | null ]
    /**
     * Atomically increments the reference count of `self` by one.
     */
    ref(): Tlv
    /**
     * Get a string with the contents in the #MbimTlv.
     */
    stringGet(): string
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
    wakeCommandGet(): [ /* returnType */ boolean, /* service */ Uuid | null, /* cid */ number | null, /* payloadSize */ number | null, /* payload */ number | null ]
    /**
     * Get the contents of a wake packet TLV.
     */
    wakePacketGet(): [ /* returnType */ boolean, /* filterId */ number | null, /* originalPacketSize */ number | null, /* packetSize */ number | null, /* packet */ number | null ]
    static name: string
    static new(type: TlvType, data: number, dataLength: number): Tlv
    constructor(type: TlvType, data: number, dataLength: number)
    /* Static methods and pseudo-constructors */
    static new(type: TlvType, data: number, dataLength: number): Tlv
    static stringNew(str: string): Tlv
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
    getPrintable(): string
    /**
     * Get the context type corresponding to `uuid`.
     */
    toContextType(): ContextType
    /**
     * Get the service corresponding to `uuid`.
     */
    toService(): Service
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the UUID corresponding to `context_type`.
     */
    static fromContextType(contextType: ContextType): Uuid
    /**
     * Fills in `uuid` from the printable representation give in `str`.
     * 
     * Only ccepts `str` written with dashes separating items, e.g.:
     *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
     */
    static fromPrintable(str: string, uuid: Uuid): boolean
    /**
     * Get the UUID corresponding to `service`.
     * 
     * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
     * or a custom registered one.
     */
    static fromService(service: Service): Uuid
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