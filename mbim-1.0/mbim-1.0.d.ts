/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mbim-1.0-ambient.d.ts';

/**
 * Mbim-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
        '3GPP',
        /**
         * 3GPP Preferred.
         */
        '3GPP_PREFERRED',
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
        '2G_ONLY',
        /**
         * 3G only.
         */
        '3G_ONLY',
        /**
         * 4G only.
         */
        '4G_ONLY',
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
     * Carrier lock cause.
     */
    enum CarrierLockCause {
        /**
         * Cause not applicable.
         */
        NOT_APPLICABLE,
        /**
         * Sim lock policy mismatch.
         */
        SIM_LOCK_POLICY_MISMATCH,
        /**
         * Sim lock policy matched.
         */
        SIM_LOCK_POLICY_MATCHED,
    }
    /**
     * State of modem after a carrier lock state update.
     */
    enum CarrierLockModemState {
        /**
         * Modem deregistered.
         */
        DEREGISTERED,
        /**
         * Modem de-registration in progress.
         */
        DEREGISTRATION_IN_PROGRESS,
        /**
         * Modem registration state in progress.
         */
        REGISTRATION_IN_PROGRESS,
        /**
         * Modem registered.
         */
        REGISTERED,
    }
    /**
     * Status of carrier lock.
     */
    enum CarrierLockStatus {
        /**
         * Carrier lock not applied.
         */
        NOT_APPLIED,
        /**
         * Carrier lock applied.
         */
        APPLIED,
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
     * MBIM commands in the %MBIM_SERVICE_GOOGLE service.
     */
    enum CidGoogle {
        /**
         * Unknown command.
         */
        UNKNOWN,
        /**
         * Carrier lock.
         */
        CARRIER_LOCK,
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
     * MBIM commands in the %MBIM_SERVICE_INTEL_MUTUAL_AUTHENTICATION service.
     */
    enum CidIntelMutualAuthentication {
        /**
         * Unknown command.
         */
        UNKNOWN,
        /**
         * FCC lock set.
         */
        FCC_LOCK,
    }
    /**
     * MBIM commands in the %MBIM_SERVICE_INTEL_THERMAL_RF service.
     */
    enum CidIntelThermalRf {
        /**
         * Unknown command.
         */
        UNKNOWN,
        /**
         * RFIM frequency command.
         */
        RFIM,
    }
    /**
     * MBIM commands in the %MBIM_SERVICE_INTEL_TOOLS service.
     */
    enum CidIntelTools {
        /**
         * Unknown command.
         */
        UNKNOWN,
        /**
         * Configure Modem traces.
         */
        TRACE_CONFIG,
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
        /**
         * Retrieve application list. Since 1.28.
         */
        APPLICATION_LIST,
        /**
         * Retrieve information about a specific UICC file. Since 1.28.
         */
        FILE_STATUS,
        /**
         * Read a UICC binary file. Since 1.28.
         */
        READ_BINARY,
        /**
         * Read a UICC linear fixed or cyclic file. Since 1.28.
         */
        READ_RECORD,
    }
    /**
     * MBIM commands in the %MBIM_SERVICE_MS_VOICE_EXTENSIONS service.
     */
    enum CidMsVoiceExtensions {
        /**
         * Unknown command.
         */
        UNKNOWN,
        /**
         * Network Identity and Time Zone information command.
         */
        NITZ,
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
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<CoreError>;

        // Static fields of Mbim.CoreError

        /**
         * Operation failed.
         */
        static FAILED: number;
        /**
         * Operation cannot be executed in the current state.
         */
        static WRONGSTATE: number;
        /**
         * Operation timed out.
         */
        static TIMEOUT: number;
        /**
         * Invalid arguments given.
         */
        static INVALIDARGS: number;
        /**
         * MBIM message is invalid.
         */
        static INVALIDMESSAGE: number;
        /**
         * Not supported.
         */
        static UNSUPPORTED: number;
        /**
         * Operation aborted.
         */
        static ABORTED: number;
        /**
         * State is unknown. Since 1.16.
         */
        static UNKNOWNSTATE: number;
        /**
         * MBIM message is incomplete. Since 1.28.
         */
        static INCOMPLETEMESSAGE: number;

        // Constructors of Mbim.CoreError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Mbim.CoreError

        /**
         * Gets the nickname string for the #MbimCoreError specified at `val`.
         * @param val a MbimCoreError.
         */
        static get_string(val: CoreError): string;
        static quark(): GLib.Quark;
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
    /**
     * DRX cycle settings.
     */
    class DrxCycle {
        static $gtype: GObject.GType<DrxCycle>;

        // Static fields of Mbim.DrxCycle

        /**
         * DRX cycle not specified.
         */
        static NOT_SPECIFIED: number;
        /**
         * DRX cycle setting not supported.
         */
        static NOT_SUPPORTED: number;
        /**
         * DRX cycle T=32.
         */
        static '32': number;
        /**
         * DRX cycle T=64.
         */
        static '64': number;
        /**
         * DRX cycle T=128.
         */
        static '128': number;
        /**
         * DRX cycle T=256.
         */
        static '256': number;

        // Constructors of Mbim.DrxCycle

        _init(...args: any[]): void;
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
     * Modem intel boot mode.
     */
    enum IntelBootMode {
        /**
         * Normal boot mode.
         */
        NORMAL_MODE,
        /**
         * Download boot mode.
         */
        DOWNLOAD_MODE,
        /**
         * Power off device.
         */
        POWER_OFF_DEVICE,
        /**
         * Configure non-resetable register without reboot or power off.
         */
        NON_RESETABLE_REGISTER,
        /**
         * Configure without reboot power-off.
         */
        WITHOUT_REBOOT_POWER_OFF,
        /**
         * Fast boot in download mode.
         */
        FAST_DOWNLOAD_MODE,
    }
    /**
     * Serving cell information.
     */
    enum IntelServingCellInfo {
        /**
         * Primary cell.
         */
        PCELL,
        /**
         * Secondary cell.
         */
        SCELL,
        /**
         * Primary cell in SCS.
         */
        PSCELL,
        /**
         * Secondary cell in SCS.
         */
        SSCELL,
        /**
         * Radio state is off.
         */
        RADIO_OFF,
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
         * Semantic error in the TFT operation. Since 1.28.
         */
        SEMANTIC_ERROR_IN_THE_TFT_OPERATION,
        /**
         * Syntactical error in the TFT operation. Since 1.28.
         */
        SYNTACTICAL_ERROR_IN_THE_TFT_OPERATION,
        /**
         * Unknown PDP context. Since 1.28.
         */
        UNKNOWN_PDP_CONTEXT,
        /**
         * Semantic errors in packet filter. Since 1.28.
         */
        SEMANTIC_ERRORS_IN_PACKET_FILTER,
        /**
         * Syntactical errors in packet filter. Since 1.28.
         */
        SYNTACTICAL_ERRORS_IN_PACKET_FILTER,
        /**
         * PDP context without TFT already activated. Since 1.28.
         */
        PDP_CONTEXT_WITHOUT_TFT_ALREADY_ACTIVATED,
        /**
         * Request rejected, Bearer Control Mode violation. Since 1.28.
         */
        REQUEST_REJECTED_OR_BEARER_CONTROL_MODE_VIOLATION,
        /**
         * Last PDN disconnection not allowed. Since 1.28.
         */
        LAST_PDN_DISCONNECTION_NOT_ALLOWED,
        /**
         * PDP type IPv4 only allowed. Since 1.18.
         */
        PDP_TYPE_IPV4_ONLY_ALLOWED,
        /**
         * PDP type IPv6 only allowed. Since 1.18.
         */
        PDP_TYPE_IPV6_ONLY_ALLOWED,
        /**
         * No network slices available  Since 1.28.
         */
        NO_NETWORK_SLICES_AVAILABLE,
        /**
         * Maximum number of PDP contexts reached. Since 1.18.
         */
        MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED,
        /**
         * Requested APN not supported in current RAT and PLMN combination. Since 1.18.
         */
        REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN,
        /**
         * Insufficient resources for specific slice and DNN. Since 1.28.
         */
        INSUFFICIENT_RESOURCES_FOR_SPECIFIC_SLICE_AND_DNN,
        /**
         * Insufficient resources for specific slice. Since 1.28.
         */
        INSUFFICIENT_RESOURCES_FOR_SPECIFIC_SLICE,
        /**
         * NgKSI already in use. Since 1.28.
         */
        NGKSI_ALREADY_IN_USE,
        /**
         * Non-3GPP access to 5GCN not allowe. Since 1.28.
         */
        NON_3GPP_ACCESS_TO_5GCN_NOT_ALLOWED,
        /**
         * Serving network not authorized. Since 1.28.
         */
        SERVING_NETWORK_NOT_AUTHORIZED,
        /**
         * Temporarily not authorized for this SNPN. Since 1.28.
         */
        TEMPORARILY_NOT_AUTHORIZED_FOR_THIS_SNPN,
        /**
         * Permanently not authorized for this SNPN. Since 1.28.
         */
        PERMANENTLY_NOT_AUTHORIZED_FOR_THIS_SNPN,
        /**
         * Not authorized for this CAG or authorized for CAG cells. Since 1.28.
         */
        NOT_AUTHORIZED_FOR_THIS_CAG_OR_AUTHORIZED_FOR_CAG_CELLS_ONLY,
        /**
         * Wireline access area not allowed. Since 1.28.
         */
        WIRELINE_ACCESS_AREA_NOT_ALLOWED,
        /**
         * Payload was not forwarded. Since 1.28.
         */
        PAYLOAD_WAS_NOT_FORWARDED,
        /**
         * DNN not supported or not subscribed in the slice. Since 1.28.
         */
        DNN_NOT_SUPPORTED_OR_NOT_SUBSCRIBED_IN_THE_SLICE,
        /**
         * Insufficient user-plane resources for the PDU session. Since 1.28.
         */
        INSUFFICIENT_USER_PLANE_RESOURCES_FOR_THE_PDU_SESSION,
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
        /**
         * The NEV key (MS UICC low-level access). Since 1.28.
         */
        NEV,
        /**
         * The administrative key (MS UICC low-level access). Since 1.28.
         */
        ADM,
    }
    /**
     * MBIM protocol errors.
     */
    class ProtocolError extends GLib.Error {
        static $gtype: GObject.GType<ProtocolError>;

        // Static fields of Mbim.ProtocolError

        /**
         * Invalid MBIM error.
         */
        static INVALID: number;
        /**
         * Timeout waiting for fragment.
         */
        static TIMEOUTFRAGMENT: number;
        /**
         * Fragment received out of sequence.
         */
        static FRAGMENTOUTOFSEQUENCE: number;
        /**
         * Length mismatch.
         */
        static LENGTHMISMATCH: number;
        /**
         * Duplicated transaction ID.
         */
        static DUPLICATEDTID: number;
        /**
         * Not opened.
         */
        static NOTOPENED: number;
        /**
         * Unknown error.
         */
        static UNKNOWN: number;
        /**
         * Cancel the operation.
         */
        static CANCEL: number;
        /**
         * Maximum control transfer not supported.
         */
        static MAXTRANSFER: number;

        // Constructors of Mbim.ProtocolError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Mbim.ProtocolError

        /**
         * Gets the nickname string for the #MbimProtocolError specified at `val`.
         * @param val a MbimProtocolError.
         */
        static get_string(val: ProtocolError): string;
        static quark(): GLib.Quark;
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
        /**
         * Intel thermal rf related commands. Since 1.28
         */
        INTEL_THERMAL_RF,
        /**
         * Microsoft Voice extensions service. Since 1.28.
         */
        MS_VOICE_EXTENSIONS,
        /**
         * Intel mutual authentication commands. Since 1.30.
         */
        INTEL_MUTUAL_AUTHENTICATION,
        /**
         * Intel tools service. Since 1.30.
         */
        INTEL_TOOLS,
        /**
         * Google specific service. Since 1.30
         */
        GOOGLE,
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
        '7BIT_ASCII',
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
    class StatusError extends GLib.Error {
        static $gtype: GObject.GType<StatusError>;

        // Static fields of Mbim.StatusError

        /**
         * Success, no error.
         */
        static NONE: number;
        /**
         * Busy.
         */
        static BUSY: number;
        /**
         * Failure.
         */
        static FAILURE: number;
        /**
         * SIM not inserted.
         */
        static SIMNOTINSERTED: number;
        /**
         * Bad SIM.
         */
        static BADSIM: number;
        /**
         * PIN required.
         */
        static PINREQUIRED: number;
        /**
         * PIN disabled.
         */
        static PINDISABLED: number;
        /**
         * Not registered.
         */
        static NOTREGISTERED: number;
        /**
         * Providers not found.
         */
        static PROVIDERSNOTFOUND: number;
        /**
         * No device support.
         */
        static NODEVICESUPPORT: number;
        /**
         * Provider not visible.
         */
        static PROVIDERNOTVISIBLE: number;
        /**
         * Data class not available.
         */
        static DATACLASSNOTAVAILABLE: number;
        /**
         * Packet service detached.
         */
        static PACKETSERVICEDETACHED: number;
        /**
         * Max activated contexts.
         */
        static MAXACTIVATEDCONTEXTS: number;
        /**
         * Not initialized.
         */
        static NOTINITIALIZED: number;
        /**
         * Voice call in progress.
         */
        static VOICECALLINPROGRESS: number;
        /**
         * Context not activated.
         */
        static CONTEXTNOTACTIVATED: number;
        /**
         * Service not activated.
         */
        static SERVICENOTACTIVATED: number;
        /**
         * Invalid access string.
         */
        static INVALIDACCESSSTRING: number;
        /**
         * Invalid user name or password.
         */
        static INVALIDUSERNAMEPWD: number;
        /**
         * Radio power off.
         */
        static RADIOPOWEROFF: number;
        /**
         * Invalid parameters.
         */
        static INVALIDPARAMETERS: number;
        /**
         * Read failure.
         */
        static READFAILURE: number;
        /**
         * Write failure.
         */
        static WRITEFAILURE: number;
        /**
         * No phonebook.
         */
        static NOPHONEBOOK: number;
        /**
         * Parameter too long.
         */
        static PARAMETERTOOLONG: number;
        /**
         * SIM toolkit busy.
         */
        static STKBUSY: number;
        /**
         * Operation not allowed.
         */
        static OPERATIONNOTALLOWED: number;
        /**
         * Memory failure.
         */
        static MEMORYFAILURE: number;
        /**
         * Invalid memory index.
         */
        static INVALIDMEMORYINDEX: number;
        /**
         * Memory full.
         */
        static MEMORYFULL: number;
        /**
         * Filter not supported.
         */
        static FILTERNOTSUPPORTED: number;
        /**
         * DSS instance limit.
         */
        static DSSINSTANCELIMIT: number;
        /**
         * Invalid device service operation.
         */
        static INVALIDDEVICESERVICEOPERATION: number;
        /**
         * Incorrect AUTN when sending authentication.
         */
        static AUTHINCORRECTAUTH: number;
        /**
         * Synchronization failure during the authentication.
         */
        static AUTHSYNCFAILURE: number;
        /**
         * AMF bit not set in the authentication.
         */
        static AUTHAMFNOTSET: number;
        /**
         * ContextType not supported by the operation. Since 1.16.
         */
        static CONTEXTNOTSUPPORTED: number;
        /**
         * Unknown SMSC address.
         */
        static SMSUNKNOWNSMSCADDRESS: number;
        /**
         * Network timeout when sending SMS.
         */
        static SMSNETWORKTIMEOUT: number;
        /**
         * Language not supported in SMS.
         */
        static SMSLANGNOTSUPPORTED: number;
        /**
         * Encoding not supported in SMS.
         */
        static SMSENCODINGNOTSUPPORTED: number;
        /**
         * Format not supported in SMS.
         */
        static SMSFORMATNOTSUPPORTED: number;
        /**
         * Invalid signature. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static INVALIDSIGNATURE: number;
        /**
         * Invalid IMEI. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static INVALIDIMEI: number;
        /**
         * Invalid timestamp. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static INVALIDTIMESTAMP: number;
        /**
         * List of networks too large. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static NETWORKLISTTOOLARGE: number;
        /**
         * Signature algorithm not supported. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static SIGNATUREALGORITHMNOTSUPPORTED: number;
        /**
         * Feature not supported. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static FEATURENOTSUPPORTED: number;
        /**
         * Decode or parsing error. Defined by Google for the carrier lock operation. Since 1.30.
         */
        static DECODEORPARSINGERROR: number;

        // Constructors of Mbim.StatusError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Mbim.StatusError

        /**
         * Gets the nickname string for the #MbimStatusError specified at `val`.
         * @param val a MbimStatusError.
         */
        static get_string(val: StatusError): string;
        static quark(): GLib.Quark;
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
     * The trace command value.
     */
    enum TraceCommand {
        /**
         * Trace command mode value.
         */
        MODE,
        /**
         * Trace command level value.
         */
        LEVEL,
        /**
         * Trace command location information.
         */
        LOCATION,
        /**
         * Trace command flash interval information.
         */
        FLASH_INTERVAL,
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
     * Type of UICC application.
     */
    enum UiccApplicationType {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Legacy SIM directories rooted at the MF.
         */
        MF,
        /**
         * Legacy SIM directories rooted at the DF_GSM.
         */
        MF_SIM,
        /**
         * Legacy SIM directories rooted at the DF_CDMA.
         */
        MF_RUIM,
        /**
         * USIM application.
         */
        USIM,
        /**
         * CSIM application.
         */
        CSIM,
        /**
         * ISIM application.
         */
        ISIM,
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
     * The UICC file accessibility.
     */
    enum UiccFileAccessibility {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Not shareable.
         */
        NOT_SHAREABLE,
        /**
         * Shareable.
         */
        SHAREABLE,
    }
    /**
     * The UICC file structure.
     */
    enum UiccFileStructure {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * A single record of variable length.
         */
        TRANSPARENT,
        /**
         * A cyclic set of records, each of the same length.
         */
        CYCLIC,
        /**
         * A linear set of records, each of the same length.
         */
        LINEAR,
        /**
         * A set of data values accessible by tag.
         */
        BER_TLV,
    }
    /**
     * The UICC file type.
     */
    enum UiccFileType {
        /**
         * Unknown.
         */
        UNKNOWN,
        /**
         * Working EF.
         */
        WORKING_EF,
        /**
         * Internal EF.
         */
        INTERNAL_EF,
        /**
         * Dedicated file, DF or ADF.
         */
        DF_OR_ADF,
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
    const DBUS_ERROR_PREFIX: string;
    /**
     * Symbol defining the #MbimDevice:device-consecutive-timeouts property.
     */
    const DEVICE_CONSECUTIVE_TIMEOUTS: string;
    /**
     * Symbol defining the #MbimDevice:device-file property.
     */
    const DEVICE_FILE: string;
    /**
     * Symbol defining the #MbimDevice:device-in-session property.
     */
    const DEVICE_IN_SESSION: string;
    /**
     * Symbol defining the maximum supported session id.
     */
    const DEVICE_SESSION_ID_MAX: number;
    /**
     * Symbol defining the minimum supported session id..
     */
    const DEVICE_SESSION_ID_MIN: number;
    /**
     * Symbol defining the #MbimDevice::device-error signal.
     */
    const DEVICE_SIGNAL_ERROR: string;
    /**
     * Symbol defining the #MbimDevice::device-indicate-status signal.
     */
    const DEVICE_SIGNAL_INDICATE_STATUS: string;
    /**
     * Symbol defining the #MbimDevice::device-removed signal.
     */
    const DEVICE_SIGNAL_REMOVED: string;
    /**
     * Symbol defining the #MbimDevice:device-transaction-id property.
     */
    const DEVICE_TRANSACTION_ID: string;
    /**
     * Evaluates to the major version number of libmbim-glib which this source
     * is compiled against.
     */
    const MAJOR_VERSION: number;
    /**
     * Evaluates to the micro version number of libmbim-glib which this source
     * compiled against.
     */
    const MICRO_VERSION: number;
    /**
     * Evaluates to the minor version number of libmbim-glib which this source
     * is compiled against.
     */
    const MINOR_VERSION: number;
    /**
     * Symbol defining the #MbimProxy:mbim-proxy-n-clients property.
     */
    const PROXY_N_CLIENTS: string;
    /**
     * Symbol defining the #MbimProxy:mbim-proxy-n-devices property.
     */
    const PROXY_N_DEVICES: string;
    /**
     * Symbol defining the default abstract socket name where the #MbimProxy will listen.
     */
    const PROXY_SOCKET_PATH: string;
    /**
     * Gets the nickname string for the #MbimAccessMediaType specified at `val`.
     * @param val a MbimAccessMediaType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function access_media_type_get_string(val: AccessMediaType): string;
    /**
     * Gets the nickname string for the #MbimActivationCommand specified at `val`.
     * @param val a MbimActivationCommand.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function activation_command_get_string(val: ActivationCommand): string;
    /**
     * Gets the nickname string for the #MbimActivationState specified at `val`.
     * @param val a MbimActivationState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function activation_state_get_string(val: ActivationState): string;
    /**
     * Frees the memory allocated for the array of #MbimAtdsProvider structs.
     * @param array a #NULL terminated array of #MbimAtdsProvider structs.
     */
    function atds_provider_array_free(array: AtdsProviderArray): void;
    /**
     * Gets the nickname string for the #MbimAtdsProviderPlmnMode specified at `val`.
     * @param val a MbimAtdsProviderPlmnMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string;
    /**
     * Gets the nickname string for the #MbimAtdsRatMode specified at `val`.
     * @param val a MbimAtdsRatMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function atds_rat_mode_get_string(val: AtdsRatMode): string;
    /**
     * Gets the nickname string for the #MbimAuthProtocol specified at `val`.
     * @param val a MbimAuthProtocol.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function auth_protocol_get_string(val: AuthProtocol): string;
    /**
     * Gets the nickname string for the #MbimCarrierLockCause specified at `val`.
     * @param val a MbimCarrierLockCause.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function carrier_lock_cause_get_string(val: CarrierLockCause): string;
    /**
     * Gets the nickname string for the #MbimCarrierLockModemState specified at `val`.
     * @param val a MbimCarrierLockModemState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function carrier_lock_modem_state_get_string(val: CarrierLockModemState): string;
    /**
     * Gets the nickname string for the #MbimCarrierLockStatus specified at `val`.
     * @param val a MbimCarrierLockStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function carrier_lock_status_get_string(val: CarrierLockStatus): string;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
     */
    function cell_info_cdma_array_free(array: CellInfoCdmaArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
     */
    function cell_info_neighboring_gsm_array_free(array: CellInfoNeighboringGsmArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
     */
    function cell_info_neighboring_lte_array_free(array: CellInfoNeighboringLteArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
     */
    function cell_info_neighboring_nr_array_free(array: CellInfoNeighboringNrArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
     */
    function cell_info_neighboring_tdscdma_array_free(array: CellInfoNeighboringTdscdmaArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
     * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
     */
    function cell_info_neighboring_umts_array_free(array: CellInfoNeighboringUmtsArray): void;
    /**
     * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
     * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
     */
    function cell_info_serving_nr_array_free(array: CellInfoServingNrArray): void;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimCellularClass in `mask`.
     * @param mask bitmask of MbimCellularClass values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function cellular_class_build_string_from_mask(mask: CellularClass): string;
    /**
     * Gets the nickname string for the #MbimCidAtds specified at `val`.
     * @param val a MbimCidAtds.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_atds_get_string(val: CidAtds): string;
    /**
     * Gets the nickname string for the #MbimCidAuth specified at `val`.
     * @param val a MbimCidAuth.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_auth_get_string(val: CidAuth): string;
    /**
     * Gets the nickname string for the #MbimCidBasicConnect specified at `val`.
     * @param val a MbimCidBasicConnect.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_basic_connect_get_string(val: CidBasicConnect): string;
    /**
     * Checks whether the given command allows notifying.
     * @param service a #MbimService.
     * @param cid a command ID.
     * @returns %TRUE if the command allows notifying, %FALSE otherwise.
     */
    function cid_can_notify(service: Service, cid: number): boolean;
    /**
     * Checks whether the given command allows querying.
     * @param service a #MbimService.
     * @param cid a command ID.
     * @returns %TRUE if the command allows querying, %FALSE otherwise.
     */
    function cid_can_query(service: Service, cid: number): boolean;
    /**
     * Checks whether the given command allows setting.
     * @param service a #MbimService.
     * @param cid a command ID.
     * @returns %TRUE if the command allows setting, %FALSE otherwise.
     */
    function cid_can_set(service: Service, cid: number): boolean;
    /**
     * Gets the nickname string for the #MbimCidDss specified at `val`.
     * @param val a MbimCidDss.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_dss_get_string(val: CidDss): string;
    /**
     * Gets a printable string for the command specified by the `service` and the
     * `cid`.
     * @param service a #MbimService.
     * @param cid a command ID.
     * @returns a constant string.
     */
    function cid_get_printable(service: Service, cid: number): string;
    /**
     * Gets the nickname string for the #MbimCidGoogle specified at `val`.
     * @param val a MbimCidGoogle.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_google_get_string(val: CidGoogle): string;
    /**
     * Gets the nickname string for the #MbimCidIntelFirmwareUpdate specified at `val`.
     * @param val a MbimCidIntelFirmwareUpdate.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string;
    /**
     * Gets the nickname string for the #MbimCidIntelMutualAuthentication specified at `val`.
     * @param val a MbimCidIntelMutualAuthentication.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_intel_mutual_authentication_get_string(val: CidIntelMutualAuthentication): string;
    /**
     * Gets the nickname string for the #MbimCidIntelThermalRf specified at `val`.
     * @param val a MbimCidIntelThermalRf.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_intel_thermal_rf_get_string(val: CidIntelThermalRf): string;
    /**
     * Gets the nickname string for the #MbimCidIntelTools specified at `val`.
     * @param val a MbimCidIntelTools.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_intel_tools_get_string(val: CidIntelTools): string;
    /**
     * Gets the nickname string for the #MbimCidMsBasicConnectExtensions specified at `val`.
     * @param val a MbimCidMsBasicConnectExtensions.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string;
    /**
     * Gets the nickname string for the #MbimCidMsFirmwareId specified at `val`.
     * @param val a MbimCidMsFirmwareId.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string;
    /**
     * Gets the nickname string for the #MbimCidMsHostShutdown specified at `val`.
     * @param val a MbimCidMsHostShutdown.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string;
    /**
     * Gets the nickname string for the #MbimCidMsSar specified at `val`.
     * @param val a MbimCidMsSar.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_sar_get_string(val: CidMsSar): string;
    /**
     * Gets the nickname string for the #MbimCidMsUiccLowLevelAccess specified at `val`.
     * @param val a MbimCidMsUiccLowLevelAccess.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_uicc_low_level_access_get_string(val: CidMsUiccLowLevelAccess): string;
    /**
     * Gets the nickname string for the #MbimCidMsVoiceExtensions specified at `val`.
     * @param val a MbimCidMsVoiceExtensions.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ms_voice_extensions_get_string(val: CidMsVoiceExtensions): string;
    /**
     * Gets the nickname string for the #MbimCidPhonebook specified at `val`.
     * @param val a MbimCidPhonebook.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_phonebook_get_string(val: CidPhonebook): string;
    /**
     * Gets the nickname string for the #MbimCidProxyControl specified at `val`.
     * @param val a MbimCidProxyControl.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_proxy_control_get_string(val: CidProxyControl): string;
    /**
     * Gets the nickname string for the #MbimCidQdu specified at `val`.
     * @param val a MbimCidQdu.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_qdu_get_string(val: CidQdu): string;
    /**
     * Gets the nickname string for the #MbimCidQmi specified at `val`.
     * @param val a MbimCidQmi.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_qmi_get_string(val: CidQmi): string;
    /**
     * Gets the nickname string for the #MbimCidQuectel specified at `val`.
     * @param val a MbimCidQuectel.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_quectel_get_string(val: CidQuectel): string;
    /**
     * Gets the nickname string for the #MbimCidSms specified at `val`.
     * @param val a MbimCidSms.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_sms_get_string(val: CidSms): string;
    /**
     * Gets the nickname string for the #MbimCidStk specified at `val`.
     * @param val a MbimCidStk.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_stk_get_string(val: CidStk): string;
    /**
     * Gets the nickname string for the #MbimCidUssd specified at `val`.
     * @param val a MbimCidUssd.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function cid_ussd_get_string(val: CidUssd): string;
    /**
     * Gets the nickname string for the #MbimCompression specified at `val`.
     * @param val a MbimCompression.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function compression_get_string(val: Compression): string;
    /**
     * Gets the nickname string for the #MbimContextIpType specified at `val`.
     * @param val a MbimContextIpType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_ip_type_get_string(val: ContextIpType): string;
    /**
     * Gets the nickname string for the #MbimContextMediaType specified at `val`.
     * @param val a MbimContextMediaType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_media_type_get_string(val: ContextMediaType): string;
    /**
     * Gets the nickname string for the #MbimContextOperation specified at `val`.
     * @param val a MbimContextOperation.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_operation_get_string(val: ContextOperation): string;
    /**
     * Gets the nickname string for the #MbimContextRoamingControl specified at `val`.
     * @param val a MbimContextRoamingControl.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_roaming_control_get_string(val: ContextRoamingControl): string;
    /**
     * Gets the nickname string for the #MbimContextSource specified at `val`.
     * @param val a MbimContextSource.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_source_get_string(val: ContextSource): string;
    /**
     * Gets the nickname string for the #MbimContextState specified at `val`.
     * @param val a MbimContextState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_state_get_string(val: ContextState): string;
    /**
     * Gets the nickname string for the #MbimContextType specified at `val`.
     * @param val a MbimContextType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function context_type_get_string(val: ContextType): string;
    /**
     * Gets the nickname string for the #MbimCoreError specified at `val`.
     * @param val a MbimCoreError.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function core_error_get_string(val: CoreError): string;
    function core_error_quark(): GLib.Quark;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimCtrlCaps in `mask`.
     * @param mask bitmask of MbimCtrlCaps values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimDataClass in `mask`.
     * @param mask bitmask of MbimDataClass values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function data_class_build_string_from_mask(mask: DataClass): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimDataClassV3 in `mask`.
     * @param mask bitmask of MbimDataClassV3 values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function data_class_v3_build_string_from_mask(mask: DataClassV3): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimDataSubclass in `mask`.
     * @param mask bitmask of MbimDataSubclass values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function data_subclass_build_string_from_mask(mask: DataSubclass): string;
    /**
     * Gets the nickname string for the #MbimDefaultPduActivationHint specified at `val`.
     * @param val a MbimDefaultPduActivationHint.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function default_pdu_activation_hint_get_string(val: DefaultPduActivationHint): string;
    /**
     * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
     * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
     */
    function device_service_element_array_free(array: DeviceServiceElementArray): void;
    /**
     * Gets the nickname string for the #MbimDeviceType specified at `val`.
     * @param val a MbimDeviceType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function device_type_get_string(val: DeviceType): string;
    /**
     * Gets the nickname string for the #MbimDrxCycle specified at `val`.
     * @param val a MbimDrxCycle.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function drx_cycle_get_string(val: DrxCycle): string;
    /**
     * Gets the nickname string for the #MbimDssLinkState specified at `val`.
     * @param val a MbimDssLinkState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function dss_link_state_get_string(val: DssLinkState): string;
    /**
     * Gets the nickname string for the #MbimEmergencyModeState specified at `val`.
     * @param val a MbimEmergencyModeState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function emergency_mode_state_get_string(val: EmergencyModeState): string;
    /**
     * Frees the memory allocated for the array of #MbimEventEntry structs.
     * @param array a #NULL terminated array of #MbimEventEntry structs.
     */
    function event_entry_array_free(array: EventEntryArray): void;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimFrequencyRange in `mask`.
     * @param mask bitmask of MbimFrequencyRange values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function frequency_range_build_string_from_mask(mask: FrequencyRange): string;
    /**
     * Gets the nickname string for the #MbimIntelBootMode specified at `val`.
     * @param val a MbimIntelBootMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function intel_boot_mode_get_string(val: IntelBootMode): string;
    /**
     * Frees the memory allocated for the array of #MbimIntelRfimFrequencyValue structs.
     * @param array a #NULL terminated array of #MbimIntelRfimFrequencyValue structs.
     */
    function intel_rfim_frequency_value_array_free(array: IntelRfimFrequencyValueArray): void;
    /**
     * Gets the nickname string for the #MbimIntelServingCellInfo specified at `val`.
     * @param val a MbimIntelServingCellInfo.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function intel_serving_cell_info_get_string(val: IntelServingCellInfo): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimIPConfigurationAvailableFlag in `mask`.
     * @param mask bitmask of MbimIPConfigurationAvailableFlag values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string;
    /**
     * Frees the memory allocated for the array of #MbimIPv4Element structs.
     * @param array a #NULL terminated array of #MbimIPv4Element structs.
     */
    function ipv4_element_array_free(array: IPv4ElementArray): void;
    /**
     * Frees the memory allocated for the array of #MbimIPv6Element structs.
     * @param array a #NULL terminated array of #MbimIPv6Element structs.
     */
    function ipv6_element_array_free(array: IPv6ElementArray): void;
    /**
     * Gets the nickname string for the #MbimLadnInfo specified at `val`.
     * @param val a MbimLadnInfo.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function ladn_info_get_string(val: LadnInfo): string;
    /**
     * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
     * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
     */
    function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void;
    /**
     * Gets the nickname string for the #MbimLteAttachContextOperation specified at `val`.
     * @param val a MbimLteAttachContextOperation.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string;
    /**
     * Gets the nickname string for the #MbimLteAttachContextRoamingControl specified at `val`.
     * @param val a MbimLteAttachContextRoamingControl.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string;
    /**
     * Gets the nickname string for the #MbimLteAttachState specified at `val`.
     * @param val a MbimLteAttachState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function lte_attach_state_get_string(val: LteAttachState): string;
    /**
     * Frees the memory allocated for the #MbimLteAttachStatus.
     * @param _var a #MbimLteAttachStatus.
     */
    function lte_attach_status_free(_var: DeprecatedLteAttachStatus): void;
    /**
     * Gets the nickname string for the #MbimMessageCommandType specified at `val`.
     * @param val a MbimMessageCommandType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function message_command_type_get_string(val: MessageCommandType): string;
    /**
     * Gets the nickname string for the #MbimMessageType specified at `val`.
     * @param val a MbimMessageType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function message_type_get_string(val: MessageType): string;
    /**
     * Gets the nickname string for the #MbimMicoMode specified at `val`.
     * @param val a MbimMicoMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function mico_mode_get_string(val: MicoMode): string;
    /**
     * Gets the nickname string for the #MbimModemConfigurationStatus specified at `val`.
     * @param val a MbimModemConfigurationStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function modem_configuration_status_get_string(val: ModemConfigurationStatus): string;
    /**
     * Gets the nickname string for the #MbimNetworkIdleHintState specified at `val`.
     * @param val a MbimNetworkIdleHintState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function network_idle_hint_state_get_string(val: NetworkIdleHintState): string;
    /**
     * Gets the nickname string for the #MbimNwError specified at `val`.
     * @param val a MbimNwError.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function nw_error_get_string(val: NwError): string;
    /**
     * Frees the memory allocated for the array of #MbimPacketFilter structs.
     * @param array a #NULL terminated array of #MbimPacketFilter structs.
     */
    function packet_filter_array_free(array: PacketFilterArray): void;
    /**
     * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
     * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
     */
    function packet_filter_v3_array_free(array: PacketFilterV3Array): void;
    /**
     * Gets the nickname string for the #MbimPacketServiceAction specified at `val`.
     * @param val a MbimPacketServiceAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function packet_service_action_get_string(val: PacketServiceAction): string;
    /**
     * Gets the nickname string for the #MbimPacketServiceState specified at `val`.
     * @param val a MbimPacketServiceState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function packet_service_state_get_string(val: PacketServiceState): string;
    /**
     * Gets the nickname string for the #MbimPcoType specified at `val`.
     * @param val a MbimPcoType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pco_type_get_string(val: PcoType): string;
    /**
     * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
     * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
     */
    function phonebook_entry_array_free(array: PhonebookEntryArray): void;
    /**
     * Gets the nickname string for the #MbimPhonebookFlag specified at `val`.
     * @param val a MbimPhonebookFlag.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function phonebook_flag_get_string(val: PhonebookFlag): string;
    /**
     * Gets the nickname string for the #MbimPhonebookState specified at `val`.
     * @param val a MbimPhonebookState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function phonebook_state_get_string(val: PhonebookState): string;
    /**
     * Gets the nickname string for the #MbimPhonebookWriteFlag specified at `val`.
     * @param val a MbimPhonebookWriteFlag.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string;
    /**
     * Gets the nickname string for the #MbimPinFormat specified at `val`.
     * @param val a MbimPinFormat.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pin_format_get_string(val: PinFormat): string;
    /**
     * Gets the nickname string for the #MbimPinMode specified at `val`.
     * @param val a MbimPinMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pin_mode_get_string(val: PinMode): string;
    /**
     * Gets the nickname string for the #MbimPinOperation specified at `val`.
     * @param val a MbimPinOperation.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pin_operation_get_string(val: PinOperation): string;
    /**
     * Gets the nickname string for the #MbimPinState specified at `val`.
     * @param val a MbimPinState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pin_state_get_string(val: PinState): string;
    /**
     * Gets the nickname string for the #MbimPinType specified at `val`.
     * @param val a MbimPinType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function pin_type_get_string(val: PinType): string;
    /**
     * Gets the nickname string for the #MbimProtocolError specified at `val`.
     * @param val a MbimProtocolError.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function protocol_error_get_string(val: ProtocolError): string;
    function protocol_error_quark(): GLib.Quark;
    /**
     * Frees the memory allocated for the array of #MbimProvider structs.
     * @param array a #NULL terminated array of #MbimProvider structs.
     */
    function provider_array_free(array: ProviderArray): void;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimProviderState in `mask`.
     * @param mask bitmask of MbimProviderState values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function provider_state_build_string_from_mask(mask: ProviderState): string;
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
     */
    function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void;
    /**
     * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
     * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
     */
    function provisioned_context_element_v2_array_free(array: ProvisionedContextElementV2Array): void;
    /**
     * Gets the nickname string for the #MbimQduFileType specified at `val`.
     * @param val a MbimQduFileType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_file_type_get_string(val: QduFileType): string;
    /**
     * Gets the nickname string for the #MbimQduQuectelRebootType specified at `val`.
     * @param val a MbimQduQuectelRebootType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_quectel_reboot_type_get_string(val: QduQuectelRebootType): string;
    /**
     * Gets the nickname string for the #MbimQduQuectelVersionType specified at `val`.
     * @param val a MbimQduQuectelVersionType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_quectel_version_type_get_string(val: QduQuectelVersionType): string;
    /**
     * Gets the nickname string for the #MbimQduSessionAction specified at `val`.
     * @param val a MbimQduSessionAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_session_action_get_string(val: QduSessionAction): string;
    /**
     * Gets the nickname string for the #MbimQduSessionResult specified at `val`.
     * @param val a MbimQduSessionResult.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_session_result_get_string(val: QduSessionResult): string;
    /**
     * Gets the nickname string for the #MbimQduSessionStatus specified at `val`.
     * @param val a MbimQduSessionStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_session_status_get_string(val: QduSessionStatus): string;
    /**
     * Gets the nickname string for the #MbimQduSessionType specified at `val`.
     * @param val a MbimQduSessionType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function qdu_session_type_get_string(val: QduSessionType): string;
    /**
     * Gets the nickname string for the #MbimQuectelRadioSwitchState specified at `val`.
     * @param val a MbimQuectelRadioSwitchState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function quectel_radio_switch_state_get_string(val: QuectelRadioSwitchState): string;
    /**
     * Gets the nickname string for the #MbimRadioSwitchState specified at `val`.
     * @param val a MbimRadioSwitchState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function radio_switch_state_get_string(val: RadioSwitchState): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimReadyInfoFlag in `mask`.
     * @param mask bitmask of MbimReadyInfoFlag values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string;
    /**
     * Gets the nickname string for the #MbimRegisterAction specified at `val`.
     * @param val a MbimRegisterAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function register_action_get_string(val: RegisterAction): string;
    /**
     * Register a custom service
     * @param uuid MbimUuid structure corresponding to service
     * @param nickname a printable name for service
     * @returns TRUE if service has been registered, FALSE otherwise.
     */
    function register_custom_service(uuid: Uuid, nickname: string): number;
    /**
     * Gets the nickname string for the #MbimRegisterMode specified at `val`.
     * @param val a MbimRegisterMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function register_mode_get_string(val: RegisterMode): string;
    /**
     * Gets the nickname string for the #MbimRegisterState specified at `val`.
     * @param val a MbimRegisterState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function register_state_get_string(val: RegisterState): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimRegistrationFlag in `mask`.
     * @param mask bitmask of MbimRegistrationFlag values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function registration_flag_build_string_from_mask(mask: RegistrationFlag): string;
    /**
     * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
     * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
     */
    function rsrp_snr_info_array_free(array: RsrpSnrInfoArray): void;
    /**
     * Gets the nickname string for the #MbimSarBackoffState specified at `val`.
     * @param val a MbimSarBackoffState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sar_backoff_state_get_string(val: SarBackoffState): string;
    /**
     * Frees the memory allocated for the array of #MbimSarConfigState structs.
     * @param array a #NULL terminated array of #MbimSarConfigState structs.
     */
    function sar_config_state_array_free(array: SarConfigStateArray): void;
    /**
     * Gets the nickname string for the #MbimSarControlMode specified at `val`.
     * @param val a MbimSarControlMode.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sar_control_mode_get_string(val: SarControlMode): string;
    /**
     * Gets the nickname string for the #MbimSarWifiHardwareState specified at `val`.
     * @param val a MbimSarWifiHardwareState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sar_wifi_hardware_state_get_string(val: SarWifiHardwareState): string;
    /**
     * Gets the nickname string for the #MbimService specified at `val`.
     * @param val a MbimService.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function service_get_string(val: Service): string;
    /**
     * Checks whether `id` is a custom or standard service.
     * @param id ID of the service
     * @returns TRUE if service is custom, FALSE otherwise.
     */
    function service_id_is_custom(id: number): boolean;
    /**
     * Gets the nickname string for the `service`.
     *
     * As opposed to mbim_service_get_string(), this methods takes into account
     * custom services that may have been registered by the user.
     * @param service a MbimService or custom service.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function service_lookup_name(service: number): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimSimClass in `mask`.
     * @param mask bitmask of MbimSimClass values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function sim_class_build_string_from_mask(mask: SimClass): string;
    /**
     * Frees the memory allocated for the array of #MbimSlot structs.
     * @param array a #NULL terminated array of #MbimSlot structs.
     */
    function slot_array_free(array: SlotArray): void;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimSmsCaps in `mask`.
     * @param mask bitmask of MbimSmsCaps values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function sms_caps_build_string_from_mask(mask: SmsCaps): string;
    /**
     * Gets the nickname string for the #MbimSmsCdmaEncoding specified at `val`.
     * @param val a MbimSmsCdmaEncoding.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string;
    /**
     * Gets the nickname string for the #MbimSmsCdmaLang specified at `val`.
     * @param val a MbimSmsCdmaLang.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_cdma_lang_get_string(val: SmsCdmaLang): string;
    /**
     * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
     */
    function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void;
    /**
     * Gets the nickname string for the #MbimSmsFlag specified at `val`.
     * @param val a MbimSmsFlag.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_flag_get_string(val: SmsFlag): string;
    /**
     * Gets the nickname string for the #MbimSmsFormat specified at `val`.
     * @param val a MbimSmsFormat.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_format_get_string(val: SmsFormat): string;
    /**
     * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
     * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
     */
    function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimSmsStatusFlag in `mask`.
     * @param mask bitmask of MbimSmsStatusFlag values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function sms_status_flag_build_string_from_mask(mask: SmsStatusFlag): string;
    /**
     * Gets the nickname string for the #MbimSmsStatusFlag specified at `val`.
     * @param val a MbimSmsStatusFlag.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_status_flag_get_string(val: SmsStatusFlag): string;
    /**
     * Gets the nickname string for the #MbimSmsStatus specified at `val`.
     * @param val a MbimSmsStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_status_get_string(val: SmsStatus): string;
    /**
     * Gets the nickname string for the #MbimSmsStorageState specified at `val`.
     * @param val a MbimSmsStorageState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function sms_storage_state_get_string(val: SmsStorageState): string;
    /**
     * Gets the nickname string for the #MbimStatusError specified at `val`.
     * @param val a MbimStatusError.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function status_error_get_string(val: StatusError): string;
    function status_error_quark(): GLib.Quark;
    /**
     * Gets the nickname string for the #MbimStkPacProfile specified at `val`.
     * @param val a MbimStkPacProfile.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function stk_pac_profile_get_string(val: StkPacProfile): string;
    /**
     * Gets the nickname string for the #MbimStkPacType specified at `val`.
     * @param val a MbimStkPacType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function stk_pac_type_get_string(val: StkPacType): string;
    /**
     * Gets the nickname string for the #MbimSubscriberReadyState specified at `val`.
     * @param val a MbimSubscriberReadyState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function subscriber_ready_state_get_string(val: SubscriberReadyState): string;
    /**
     * Builds a string containing a comma-separated list of nicknames for
     * each #MbimSubscriberReadyStatusFlag in `mask`.
     * @param mask bitmask of MbimSubscriberReadyStatusFlag values.
     * @returns a string with the list of nicknames, or %NULL if none given. The returned value should be freed with g_free().
     */
    function subscriber_ready_status_flag_build_string_from_mask(mask: SubscriberReadyStatusFlag): string;
    /**
     * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
     * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
     */
    function terminal_capability_info_array_free(array: TerminalCapabilityInfoArray): void;
    /**
     * Gets the nickname string for the #MbimTlvType specified at `val`.
     * @param val a MbimTlvType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function tlv_type_get_string(val: TlvType): string;
    /**
     * Gets the nickname string for the #MbimTraceCommand specified at `val`.
     * @param val a MbimTraceCommand.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function trace_command_get_string(val: TraceCommand): string;
    /**
     * Gets the nickname string for the #MbimTransmissionNotificationStatus specified at `val`.
     * @param val a MbimTransmissionNotificationStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function transmission_notification_status_get_string(val: TransmissionNotificationStatus): string;
    /**
     * Gets the nickname string for the #MbimTransmissionState specified at `val`.
     * @param val a MbimTransmissionState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function transmission_state_get_string(val: TransmissionState): string;
    /**
     * Frees the memory allocated for the array of #MbimUiccApplication structs.
     * @param array a #NULL terminated array of #MbimUiccApplication structs.
     */
    function uicc_application_array_free(array: UiccApplicationArray): void;
    /**
     * Gets the nickname string for the #MbimUiccApplicationType specified at `val`.
     * @param val a MbimUiccApplicationType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_application_type_get_string(val: UiccApplicationType): string;
    /**
     * Gets the nickname string for the #MbimUiccClassByteType specified at `val`.
     * @param val a MbimUiccClassByteType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_class_byte_type_get_string(val: UiccClassByteType): string;
    /**
     * Gets the nickname string for the #MbimUiccFileAccessibility specified at `val`.
     * @param val a MbimUiccFileAccessibility.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_file_accessibility_get_string(val: UiccFileAccessibility): string;
    /**
     * Gets the nickname string for the #MbimUiccFileStructure specified at `val`.
     * @param val a MbimUiccFileStructure.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_file_structure_get_string(val: UiccFileStructure): string;
    /**
     * Gets the nickname string for the #MbimUiccFileType specified at `val`.
     * @param val a MbimUiccFileType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_file_type_get_string(val: UiccFileType): string;
    /**
     * Gets the nickname string for the #MbimUiccPassThroughAction specified at `val`.
     * @param val a MbimUiccPassThroughAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_pass_through_action_get_string(val: UiccPassThroughAction): string;
    /**
     * Gets the nickname string for the #MbimUiccPassThroughStatus specified at `val`.
     * @param val a MbimUiccPassThroughStatus.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_pass_through_status_get_string(val: UiccPassThroughStatus): string;
    /**
     * Gets the nickname string for the #MbimUiccSecureMessaging specified at `val`.
     * @param val a MbimUiccSecureMessaging.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_secure_messaging_get_string(val: UiccSecureMessaging): string;
    /**
     * Gets the nickname string for the #MbimUiccSlotState specified at `val`.
     * @param val a MbimUiccSlotState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function uicc_slot_state_get_string(val: UiccSlotState): string;
    /**
     * Unregister a custom service.
     * @param id ID of the service to unregister.MbimUuid structure corresponding to service
     * @returns TRUE if service has been unregistered, FALSE otherwise.
     */
    function unregister_custom_service(id: number): boolean;
    /**
     * Gets the nickname string for the #MbimUssdAction specified at `val`.
     * @param val a MbimUssdAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function ussd_action_get_string(val: UssdAction): string;
    /**
     * Gets the nickname string for the #MbimUssdResponse specified at `val`.
     * @param val a MbimUssdResponse.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function ussd_response_get_string(val: UssdResponse): string;
    /**
     * Gets the nickname string for the #MbimUssdSessionState specified at `val`.
     * @param val a MbimUssdSessionState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function ussd_session_state_get_string(val: UssdSessionState): string;
    /**
     * Checks whether personal info should be hidden when traces are enabled.
     * @returns %TRUE to show personal info in trace, %FALSE otherwise.
     */
    function utils_get_show_personal_info(): boolean;
    /**
     * Checks whether MBIM message traces are currently enabled.
     * @returns %TRUE if traces are enabled, %FALSE otherwise.
     */
    function utils_get_traces_enabled(): boolean;
    /**
     * Sets whether personal info is printed when traces are enabled.
     * @param show_personal_info %TRUE to show personal info in traces, %FALSE otherwise.
     */
    function utils_set_show_personal_info(show_personal_info: boolean): void;
    /**
     * Sets whether MBIM message traces are enabled or disabled.
     * @param enabled %TRUE to enable traces, %FALSE to disable them.
     */
    function utils_set_traces_enabled(enabled: boolean): void;
    /**
     * Get the UUID corresponding to `context_type`.
     * @param context_type a #MbimContextType.
     * @returns a #MbimUuid.
     */
    function uuid_from_context_type(context_type: ContextType): Uuid;
    /**
     * Fills in `uuid` from the printable representation give in `str`.
     *
     * Only ccepts `str` written with dashes separating items, e.g.:
     *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
     * @param str a MBIM UUID.
     * @param uuid pointer to the target #MbimUuid.
     * @returns %TRUE if @uuid was correctly set, %FALSE otherwise.
     */
    function uuid_from_printable(str: string, uuid: Uuid): boolean;
    /**
     * Get the UUID corresponding to `service`.
     *
     * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
     * or a custom registered one.
     * @param service a #MbimService.
     * @returns a #MbimUuid.
     */
    function uuid_from_service(service: Service): Uuid;
    /**
     * Gets the nickname string for the #MbimVisibleProvidersAction specified at `val`.
     * @param val a MbimVisibleProvidersAction.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function visible_providers_action_get_string(val: VisibleProvidersAction): string;
    /**
     * Gets the nickname string for the #MbimVoiceCallState specified at `val`.
     * @param val a MbimVoiceCallState.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function voice_call_state_get_string(val: VoiceCallState): string;
    /**
     * Gets the nickname string for the #MbimVoiceClass specified at `val`.
     * @param val a MbimVoiceClass.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function voice_class_get_string(val: VoiceClass): string;
    /**
     * Gets the nickname string for the #MbimWakeType specified at `val`.
     * @param val a MbimWakeType.
     * @returns a string with the nickname, or %NULL if not found. Do not free the returned value.
     */
    function wake_type_get_string(val: WakeType): string;
    /**
     * Cellular class.
     */
    enum CellularClass {
        /**
         * None. Since 1.30.
         */
        NONE,
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
         * None. Since 1.30.
         */
        NONE,
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
        '5G_NSA',
        /**
         * 5G SA (MS MBIMEx v2.0). Since 1.28.
         */
        '5G_SA',
        /**
         * 1xRTT.
         */
        '1XRTT',
        /**
         * 1xEV-DO.
         */
        '1XEVDO',
        /**
         * 1xEV-DO RevA
         */
        '1XEVDO_REVA',
        /**
         * 1xEV-DV.
         */
        '1XEVDV',
        /**
         * 3xRTT.
         */
        '3XRTT',
        /**
         * 1xEV-DO RevB.
         */
        '1XEVDO_REVB',
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
         * None. Since 1.30.
         */
        NONE,
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
        '5G',
        /**
         * 1xRTT.
         */
        '1XRTT',
        /**
         * 1xEV-DO.
         */
        '1XEVDO',
        /**
         * 1xEV-DO RevA
         */
        '1XEVDO_REVA',
        /**
         * 1xEV-DV.
         */
        '1XEVDV',
        /**
         * 3xRTT.
         */
        '3XRTT',
        /**
         * 1xEV-DO RevB.
         */
        '1XEVDO_REVB',
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
        '5G_ENDC',
        /**
         * Standalone NR as in 5G option 2.
         */
        '5G_NR',
        /**
         * NR and EUTRAN dual connectivity as in 5G option 4.
         */
        '5G_NEDC',
        /**
         * eLTE as in 5G option 5.
         */
        '5G_ELTE',
        /**
         * Next-gen eLTE and NR dual connectivity as in 5G option 7.
         */
        '5G_NGENDC',
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
    /**
     * Frequency Range.
     */
    class FrequencyRange {
        static $gtype: GObject.GType<FrequencyRange>;

        // Static fields of Mbim.FrequencyRange

        /**
         * Unknown.
         */
        static UNKNOWN: number;
        /**
         * Frequency range 1 (FR1) in 3GPP TS 38.101-1 (Sub-6G).
         */
        static '1': number;
        /**
         * FR2 in 3GPP TS 38.101-2 (mmWave).
         */
        static '2': number;

        // Constructors of Mbim.FrequencyRange

        _init(...args: any[]): void;
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
         * None. Since 1.30.
         */
        NONE,
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
         * None. Since 1.30.
         */
        NONE,
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
    module Device {
        // Signal callback interfaces

        interface DeviceError {
            (object: GLib.Error): void;
        }

        interface DeviceIndicateStatus {
            (object: Message): void;
        }

        interface DeviceRemoved {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            device_consecutive_timeouts: number;
            deviceConsecutiveTimeouts: number;
            device_file: Gio.File;
            deviceFile: Gio.File;
            device_in_session: boolean;
            deviceInSession: boolean;
            device_transaction_id: number;
            deviceTransactionId: number;
        }
    }

    /**
     * The #MbimDevice structure contains private data and should only be accessed
     * using the provided API.
     */
    class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
        static $gtype: GObject.GType<Device>;

        // Own properties of Mbim.Device

        get device_consecutive_timeouts(): number;
        get deviceConsecutiveTimeouts(): number;
        get device_file(): Gio.File;
        get deviceFile(): Gio.File;
        get device_in_session(): boolean;
        set device_in_session(val: boolean);
        get deviceInSession(): boolean;
        set deviceInSession(val: boolean);
        get device_transaction_id(): number;
        set device_transaction_id(val: number);
        get deviceTransactionId(): number;
        set deviceTransactionId(val: number);

        // Constructors of Mbim.Device

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): Device;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        // Own signals of Mbim.Device

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'device-error', callback: (_source: this, object: GLib.Error) => void): number;
        connect_after(signal: 'device-error', callback: (_source: this, object: GLib.Error) => void): number;
        emit(signal: 'device-error', object: GLib.Error): void;
        connect(signal: 'device-indicate-status', callback: (_source: this, object: Message) => void): number;
        connect_after(signal: 'device-indicate-status', callback: (_source: this, object: Message) => void): number;
        emit(signal: 'device-indicate-status', object: Message): void;
        connect(signal: 'device-removed', callback: (_source: this) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this) => void): number;
        emit(signal: 'device-removed'): void;

        // Own static methods of Mbim.Device

        /**
         * Asynchronously creates a #MbimDevice object to manage `file`.
         * When the operation is finished, `callback` will be invoked. You can then call
         * mbim_device_new_finish() to get the result of the operation.
         * @param file a #GFile.
         * @param cancellable optional #GCancellable object, #NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the initialization is finished.
         */
        static ['new'](
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Device> | null,
        ): void;

        // Own methods of Mbim.Device

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
        add_link(
            session_id: number,
            base_ifname: string,
            ifname_prefix: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with mbim_device_add_link().
         * @param res a #GAsyncResult.
         * @param session_id the session ID for the link created.
         * @returns The name of the net interface created, %NULL if @error is set.
         */
        add_link_finish(res: Gio.AsyncResult, session_id: number): string;
        /**
         * Checks whether link management is supported by the kernel.
         * @returns %TRUE if link management is supported, or %FALSE if @error is set.
         */
        check_link_supported(): boolean;
        /**
         * Checks the version number of the MS MBIMEx support in the device instance
         * against the one given as input.
         * @param ms_mbimex_version_major major version number of the MS MBIMEx support.
         * @param ms_mbimex_version_minor minor version number of the MS MBIMEx support.
         * @returns %TRUE if the version of the device instance is the same as or newer than the passed-in version.
         */
        check_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean;
        /**
         * Asynchronously closes a #MbimDevice for I/O.
         *
         * When the operation is finished `callback` will be called. You can then call
         * mbim_device_close_finish() to get the result of the operation.
         * @param timeout maximum time, in seconds, to wait for the device to be closed.
         * @param cancellable optional #GCancellable object, #NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the operation is finished.
         */
        close(
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous close operation started with mbim_device_close().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        close_finish(res: Gio.AsyncResult): boolean;
        /**
         * Forces the #MbimDevice to be closed.
         * @returns %TRUE if @self if no error happens, otherwise %FALSE and @error is set.
         */
        close_force(): boolean;
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
        command(
            message: Message,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with mbim_device_command().
         *
         * The returned #MbimMessage is ensured to be valid and complete (i.e. not a
         * partial fragment). There is no need to call mbim_message_validate() again.
         * @param res a #GAsyncResult.
         * @returns a #MbimMessage response, or #NULL if @error is set. The returned value should be freed with mbim_message_unref().
         */
        command_finish(res: Gio.AsyncResult): Message;
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
        delete_all_links(
            base_ifname: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with mbim_device_delete_all_links().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        delete_all_links_finish(res: Gio.AsyncResult): boolean;
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
        delete_link(
            ifname: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with mbim_device_delete_link().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        delete_link_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the number of consecutive transaction timeouts in the device.
         * @returns a #guint.
         */
        get_consecutive_timeouts(): number;
        /**
         * Get the version number of the MS MBIMEx support.
         *
         * The reported version will be 1 if the initialization sequence to agree on
         * which version to use hasn't been run (e.g. with mbim_device_open_full() and
         * the explicit %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V2 or
         * %MBIM_DEVICE_OPEN_FLAGS_MS_MBIMEX_V3 flag).
         * @param out_ms_mbimex_version_minor output location for the minor version number of  the MS MBIMEx support, or %NULL if not needed.
         * @returns the major version number of the MS MBIMEx support.
         */
        get_ms_mbimex_version(out_ms_mbimex_version_minor: number): number;
        /**
         * Acquire the next transaction ID of this #MbimDevice.
         * The internal transaction ID gets incremented.
         * @returns the next transaction ID.
         */
        get_next_transaction_id(): number;
        /**
         * Get the system path of the underlying MBIM device.
         * @returns the system path of the device.
         */
        get_path(): string;
        /**
         * Get the system path of the underlying MBIM device in UTF-8.
         * @returns UTF-8 encoded system path of the device.
         */
        get_path_display(): string;
        /**
         * Acquire the transaction ID of this #MbimDevice without
         * incrementing the internal transaction ID.
         * @returns the current transaction ID.
         */
        get_transaction_id(): number;
        /**
         * Checks whether the #MbimDevice is open for I/O.
         * @returns %TRUE if @self is open, %FALSE otherwise.
         */
        is_open(): boolean;
        /**
         * Synchronously lists all virtual network interfaces that have been previously
         * created with mbim_device_add_link() in `base_ifname`.
         * @param base_ifname the base interface.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        list_links(base_ifname: string): [boolean, string[]];
        /**
         * Asynchronously opens a #MbimDevice for I/O.
         *
         * When the operation is finished `callback` will be called. You can then call
         * mbim_device_open_finish() to get the result of the operation.
         * @param timeout maximum time, in seconds, to wait for the device to be opened.
         * @param cancellable optional #GCancellable object, #NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the operation is finished.
         */
        open(
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous open operation started with mbim_device_open().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        open_finish(res: Gio.AsyncResult): boolean;
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
        open_full(
            flags: DeviceOpenFlags,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous open operation started with mbim_device_open_full().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        open_full_finish(res: Gio.AsyncResult): boolean;
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
         * @returns %TRUE if successful, %FALSE if @error is set.
         */
        set_ms_mbimex_version(ms_mbimex_version_major: number, ms_mbimex_version_minor: number): boolean;

        // Inherited methods
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
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Device;
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
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Proxy {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mbim_proxy_n_clients: number;
            mbimProxyNClients: number;
            mbim_proxy_n_devices: number;
            mbimProxyNDevices: number;
        }
    }

    /**
     * The #MbimProxy structure contains private data and should only be accessed
     * using the provided API.
     */
    class Proxy extends GObject.Object {
        static $gtype: GObject.GType<Proxy>;

        // Own properties of Mbim.Proxy

        get mbim_proxy_n_clients(): number;
        get mbimProxyNClients(): number;
        get mbim_proxy_n_devices(): number;
        get mbimProxyNDevices(): number;

        // Constructors of Mbim.Proxy

        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Proxy;
    }

    /**
     * A MbimAtdsProvider element.
     */
    class AtdsProvider {
        static $gtype: GObject.GType<AtdsProvider>;

        // Own fields of Mbim.AtdsProvider

        provider_id: string;
        provider_state: number;
        provider_name: string;
        plmn_mode: number;
        rssi: number;
        error_rate: number;

        // Constructors of Mbim.AtdsProvider

        constructor(
            properties?: Partial<{
                provider_id: string;
                provider_state: number;
                provider_name: string;
                plmn_mode: number;
                rssi: number;
                error_rate: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.AtdsProvider

        /**
         * Frees the memory allocated for the array of #MbimAtdsProvider structs.
         * @param array a #NULL terminated array of #MbimAtdsProvider structs.
         */
        static array_free(array: AtdsProviderArray): void;
    }

    /**
     * A MbimCellInfoCdma element.
     */
    class CellInfoCdma {
        static $gtype: GObject.GType<CellInfoCdma>;

        // Own fields of Mbim.CellInfoCdma

        serving_cell_flag: number;
        nid: number;
        sid: number;
        base_station_id: number;
        base_latitude: number;
        base_longitude: number;
        ref_pn: number;
        gps_seconds: number;
        pilot_strength: number;

        // Constructors of Mbim.CellInfoCdma

        constructor(
            properties?: Partial<{
                serving_cell_flag: number;
                nid: number;
                sid: number;
                base_station_id: number;
                base_latitude: number;
                base_longitude: number;
                ref_pn: number;
                gps_seconds: number;
                pilot_strength: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoCdma

        /**
         * Frees the memory allocated for the array of #MbimCellInfoCdma structs.
         * @param array a #NULL terminated array of #MbimCellInfoCdma structs.
         */
        static array_free(array: CellInfoCdmaArray): void;
    }

    /**
     * A MbimCellInfoNeighboringGsm element.
     */
    class CellInfoNeighboringGsm {
        static $gtype: GObject.GType<CellInfoNeighboringGsm>;

        // Own fields of Mbim.CellInfoNeighboringGsm

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        arfcn: number;
        base_station_id: number;
        rx_level: number;

        // Constructors of Mbim.CellInfoNeighboringGsm

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                arfcn: number;
                base_station_id: number;
                rx_level: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoNeighboringGsm

        /**
         * Frees the memory allocated for the array of #MbimCellInfoNeighboringGsm structs.
         * @param array a #NULL terminated array of #MbimCellInfoNeighboringGsm structs.
         */
        static array_free(array: CellInfoNeighboringGsmArray): void;
    }

    /**
     * A MbimCellInfoNeighboringLte element.
     */
    class CellInfoNeighboringLte {
        static $gtype: GObject.GType<CellInfoNeighboringLte>;

        // Own fields of Mbim.CellInfoNeighboringLte

        provider_id: string;
        cell_id: number;
        earfcn: number;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;

        // Constructors of Mbim.CellInfoNeighboringLte

        constructor(
            properties?: Partial<{
                provider_id: string;
                cell_id: number;
                earfcn: number;
                physical_cell_id: number;
                tac: number;
                rsrp: number;
                rsrq: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoNeighboringLte

        /**
         * Frees the memory allocated for the array of #MbimCellInfoNeighboringLte structs.
         * @param array a #NULL terminated array of #MbimCellInfoNeighboringLte structs.
         */
        static array_free(array: CellInfoNeighboringLteArray): void;
    }

    /**
     * A MbimCellInfoNeighboringNr element.
     */
    class CellInfoNeighboringNr {
        static $gtype: GObject.GType<CellInfoNeighboringNr>;

        // Own fields of Mbim.CellInfoNeighboringNr

        system_sub_type: number;
        provider_id: string;
        cell_id: string;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        sinr: number;

        // Constructors of Mbim.CellInfoNeighboringNr

        constructor(
            properties?: Partial<{
                system_sub_type: number;
                provider_id: string;
                cell_id: string;
                physical_cell_id: number;
                tac: number;
                rsrp: number;
                rsrq: number;
                sinr: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoNeighboringNr

        /**
         * Frees the memory allocated for the array of #MbimCellInfoNeighboringNr structs.
         * @param array a #NULL terminated array of #MbimCellInfoNeighboringNr structs.
         */
        static array_free(array: CellInfoNeighboringNrArray): void;
    }

    /**
     * A MbimCellInfoNeighboringTdscdma element.
     */
    class CellInfoNeighboringTdscdma {
        static $gtype: GObject.GType<CellInfoNeighboringTdscdma>;

        // Own fields of Mbim.CellInfoNeighboringTdscdma

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        cell_parameter_id: number;
        timing_advance: number;
        rscp: number;
        path_loss: number;

        // Constructors of Mbim.CellInfoNeighboringTdscdma

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                uarfcn: number;
                cell_parameter_id: number;
                timing_advance: number;
                rscp: number;
                path_loss: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoNeighboringTdscdma

        /**
         * Frees the memory allocated for the array of #MbimCellInfoNeighboringTdscdma structs.
         * @param array a #NULL terminated array of #MbimCellInfoNeighboringTdscdma structs.
         */
        static array_free(array: CellInfoNeighboringTdscdmaArray): void;
    }

    /**
     * A MbimCellInfoNeighboringUmts element.
     */
    class CellInfoNeighboringUmts {
        static $gtype: GObject.GType<CellInfoNeighboringUmts>;

        // Own fields of Mbim.CellInfoNeighboringUmts

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        primary_scrambling_code: number;
        rscp: number;
        ecno: number;
        path_loss: number;

        // Constructors of Mbim.CellInfoNeighboringUmts

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                uarfcn: number;
                primary_scrambling_code: number;
                rscp: number;
                ecno: number;
                path_loss: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoNeighboringUmts

        /**
         * Frees the memory allocated for the array of #MbimCellInfoNeighboringUmts structs.
         * @param array a #NULL terminated array of #MbimCellInfoNeighboringUmts structs.
         */
        static array_free(array: CellInfoNeighboringUmtsArray): void;
    }

    /**
     * A MbimCellInfoServingGsm element.
     */
    class CellInfoServingGsm {
        static $gtype: GObject.GType<CellInfoServingGsm>;

        // Own fields of Mbim.CellInfoServingGsm

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        timing_advance: number;
        arfcn: number;
        base_station_id: number;
        rx_level: number;

        // Constructors of Mbim.CellInfoServingGsm

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                timing_advance: number;
                arfcn: number;
                base_station_id: number;
                rx_level: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.CellInfoServingGsm

        /**
         * Frees the memory allocated for the #MbimCellInfoServingGsm.
         */
        free(): void;
    }

    /**
     * A MbimCellInfoServingLte element.
     */
    class CellInfoServingLte {
        static $gtype: GObject.GType<CellInfoServingLte>;

        // Own fields of Mbim.CellInfoServingLte

        provider_id: string;
        cell_id: number;
        earfcn: number;
        physical_cell_id: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        timing_advance: number;

        // Constructors of Mbim.CellInfoServingLte

        constructor(
            properties?: Partial<{
                provider_id: string;
                cell_id: number;
                earfcn: number;
                physical_cell_id: number;
                tac: number;
                rsrp: number;
                rsrq: number;
                timing_advance: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.CellInfoServingLte

        /**
         * Frees the memory allocated for the #MbimCellInfoServingLte.
         */
        free(): void;
    }

    /**
     * A MbimCellInfoServingNr element.
     */
    class CellInfoServingNr {
        static $gtype: GObject.GType<CellInfoServingNr>;

        // Own fields of Mbim.CellInfoServingNr

        provider_id: string;
        nci: number;
        physical_cell_id: number;
        nrarfcn: number;
        tac: number;
        rsrp: number;
        rsrq: number;
        sinr: number;
        timing_advance: number;

        // Constructors of Mbim.CellInfoServingNr

        constructor(
            properties?: Partial<{
                provider_id: string;
                nci: number;
                physical_cell_id: number;
                nrarfcn: number;
                tac: number;
                rsrp: number;
                rsrq: number;
                sinr: number;
                timing_advance: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.CellInfoServingNr

        /**
         * Frees the memory allocated for the array of #MbimCellInfoServingNr structs.
         * @param array a #NULL terminated array of #MbimCellInfoServingNr structs.
         */
        static array_free(array: CellInfoServingNrArray): void;
    }

    /**
     * A MbimCellInfoServingTdscdma element.
     */
    class CellInfoServingTdscdma {
        static $gtype: GObject.GType<CellInfoServingTdscdma>;

        // Own fields of Mbim.CellInfoServingTdscdma

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        uarfcn: number;
        cell_parameter_id: number;
        timing_advance: number;
        rscp: number;
        path_loss: number;

        // Constructors of Mbim.CellInfoServingTdscdma

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                uarfcn: number;
                cell_parameter_id: number;
                timing_advance: number;
                rscp: number;
                path_loss: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.CellInfoServingTdscdma

        /**
         * Frees the memory allocated for the #MbimCellInfoServingTdscdma.
         */
        free(): void;
    }

    /**
     * A MbimCellInfoServingUmts element.
     */
    class CellInfoServingUmts {
        static $gtype: GObject.GType<CellInfoServingUmts>;

        // Own fields of Mbim.CellInfoServingUmts

        provider_id: string;
        location_area_code: number;
        cell_id: number;
        frequency_info_ul: number;
        frequency_info_dl: number;
        frequency_info_nt: number;
        uarfcn: number;
        primary_scrambling_code: number;
        rscp: number;
        ecno: number;
        path_loss: number;

        // Constructors of Mbim.CellInfoServingUmts

        constructor(
            properties?: Partial<{
                provider_id: string;
                location_area_code: number;
                cell_id: number;
                frequency_info_ul: number;
                frequency_info_dl: number;
                frequency_info_nt: number;
                uarfcn: number;
                primary_scrambling_code: number;
                rscp: number;
                ecno: number;
                path_loss: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.CellInfoServingUmts

        /**
         * Frees the memory allocated for the #MbimCellInfoServingUmts.
         */
        free(): void;
    }

    class DeprecatedLteAttachStatus {
        static $gtype: GObject.GType<DeprecatedLteAttachStatus>;

        // Own fields of Mbim.DeprecatedLteAttachStatus

        lte_attach_state: number;
        ip_type: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;

        // Constructors of Mbim.DeprecatedLteAttachStatus

        constructor(
            properties?: Partial<{
                lte_attach_state: number;
                ip_type: number;
                access_string: string;
                user_name: string;
                password: string;
                compression: number;
                auth_protocol: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DeviceClass = typeof Device;
    abstract class DevicePrivate {
        static $gtype: GObject.GType<DevicePrivate>;

        // Constructors of Mbim.DevicePrivate

        _init(...args: any[]): void;
    }

    /**
     * A MbimDeviceServiceElement element.
     */
    class DeviceServiceElement {
        static $gtype: GObject.GType<DeviceServiceElement>;

        // Own fields of Mbim.DeviceServiceElement

        device_service_id: Uuid;
        dss_payload: number;
        max_dss_instances: number;
        cids_count: number;
        cids: number;

        // Constructors of Mbim.DeviceServiceElement

        constructor(
            properties?: Partial<{
                device_service_id: Uuid;
                dss_payload: number;
                max_dss_instances: number;
                cids_count: number;
                cids: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.DeviceServiceElement

        /**
         * Frees the memory allocated for the array of #MbimDeviceServiceElement structs.
         * @param array a #NULL terminated array of #MbimDeviceServiceElement structs.
         */
        static array_free(array: DeviceServiceElementArray): void;
    }

    /**
     * A MbimEventEntry element.
     */
    class EventEntry {
        static $gtype: GObject.GType<EventEntry>;

        // Own fields of Mbim.EventEntry

        device_service_id: Uuid;
        cids_count: number;
        cids: number;

        // Constructors of Mbim.EventEntry

        constructor(
            properties?: Partial<{
                device_service_id: Uuid;
                cids_count: number;
                cids: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.EventEntry

        /**
         * Frees the memory allocated for the array of #MbimEventEntry structs.
         * @param array a #NULL terminated array of #MbimEventEntry structs.
         */
        static array_free(array: EventEntryArray): void;
    }

    /**
     * An IPv4 address.
     */
    class IPv4 {
        static $gtype: GObject.GType<IPv4>;

        // Own fields of Mbim.IPv4

        addr: Uint8Array;

        // Constructors of Mbim.IPv4

        constructor(
            properties?: Partial<{
                addr: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A MbimIPv4Element element.
     */
    class IPv4Element {
        static $gtype: GObject.GType<IPv4Element>;

        // Own fields of Mbim.IPv4Element

        on_link_prefix_length: number;
        ipv4_address: IPv4;

        // Constructors of Mbim.IPv4Element

        constructor(
            properties?: Partial<{
                on_link_prefix_length: number;
                ipv4_address: IPv4;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.IPv4Element

        /**
         * Frees the memory allocated for the array of #MbimIPv4Element structs.
         * @param array a #NULL terminated array of #MbimIPv4Element structs.
         */
        static array_free(array: IPv4ElementArray): void;
    }

    /**
     * An IPv6 address.
     */
    class IPv6 {
        static $gtype: GObject.GType<IPv6>;

        // Own fields of Mbim.IPv6

        addr: Uint8Array;

        // Constructors of Mbim.IPv6

        constructor(
            properties?: Partial<{
                addr: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;
    }

    /**
     * A MbimIPv6Element element.
     */
    class IPv6Element {
        static $gtype: GObject.GType<IPv6Element>;

        // Own fields of Mbim.IPv6Element

        on_link_prefix_length: number;
        ipv6_address: IPv6;

        // Constructors of Mbim.IPv6Element

        constructor(
            properties?: Partial<{
                on_link_prefix_length: number;
                ipv6_address: IPv6;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.IPv6Element

        /**
         * Frees the memory allocated for the array of #MbimIPv6Element structs.
         * @param array a #NULL terminated array of #MbimIPv6Element structs.
         */
        static array_free(array: IPv6ElementArray): void;
    }

    /**
     * A MbimIntelRfimFrequencyValue element.
     */
    class IntelRfimFrequencyValue {
        static $gtype: GObject.GType<IntelRfimFrequencyValue>;

        // Own fields of Mbim.IntelRfimFrequencyValue

        serving_cell_info: number;
        center_frequency: number;
        bandwidth: number;
        rsrp: number;
        rsrq: number;
        sinr: number;
        rssi: number;
        connection_status: number;

        // Constructors of Mbim.IntelRfimFrequencyValue

        constructor(
            properties?: Partial<{
                serving_cell_info: number;
                center_frequency: number;
                bandwidth: number;
                rsrp: number;
                rsrq: number;
                sinr: number;
                rssi: number;
                connection_status: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.IntelRfimFrequencyValue

        /**
         * Frees the memory allocated for the array of #MbimIntelRfimFrequencyValue structs.
         * @param array a #NULL terminated array of #MbimIntelRfimFrequencyValue structs.
         */
        static array_free(array: IntelRfimFrequencyValueArray): void;
    }

    /**
     * A MbimLteAttachConfiguration element.
     */
    class LteAttachConfiguration {
        static $gtype: GObject.GType<LteAttachConfiguration>;

        // Own fields of Mbim.LteAttachConfiguration

        ip_type: number;
        roaming: number;
        source: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;

        // Constructors of Mbim.LteAttachConfiguration

        constructor(
            properties?: Partial<{
                ip_type: number;
                roaming: number;
                source: number;
                access_string: string;
                user_name: string;
                password: string;
                compression: number;
                auth_protocol: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.LteAttachConfiguration

        /**
         * Frees the memory allocated for the array of #MbimLteAttachConfiguration structs.
         * @param array a #NULL terminated array of #MbimLteAttachConfiguration structs.
         */
        static array_free(array: LteAttachConfigurationArray): void;
    }

    /**
     * An opaque type representing a MBIM message.
     */
    class Message {
        static $gtype: GObject.GType<Message>;

        // Constructors of Mbim.Message

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static atds_location_query_new(): Message;

        static atds_operators_query_new(): Message;

        static atds_rat_query_new(): Message;

        static atds_rat_set_new(mode: AtdsRatMode): Message;

        static atds_register_state_query_new(): Message;

        static atds_signal_query_new(): Message;

        static auth_aka_query_new(rand: Uint8Array | string, autn: Uint8Array | string): Message;

        static auth_akap_query_new(rand: Uint8Array | string, autn: Uint8Array | string, network_name: string): Message;

        static auth_sim_query_new(
            rand1: Uint8Array | string,
            rand2: Uint8Array | string,
            rand3: Uint8Array | string,
            n: number,
        ): Message;

        static close_done_new(transaction_id: number, error_status_code: StatusError): Message;

        static close_new(transaction_id: number): Message;

        static command_new(
            transaction_id: number,
            service: Service,
            cid: number,
            command_type: MessageCommandType,
        ): Message;

        static connect_query_new(
            session_id: number,
            activation_state: ActivationState,
            voice_call_state: VoiceCallState,
            ip_type: ContextIpType,
            context_type: Uuid,
            nw_error: number,
        ): Message;

        static connect_set_new(
            session_id: number,
            activation_command: ActivationCommand,
            access_string: string,
            user_name: string,
            password: string,
            compression: Compression,
            auth_protocol: AuthProtocol,
            ip_type: ContextIpType,
            context_type: Uuid,
        ): Message;

        static device_caps_query_new(): Message;

        static device_service_subscribe_list_set_new(events_count: number, events: EventEntry[]): Message;

        static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message;

        static device_services_query_new(): Message;

        static dss_connect_set_new(
            device_service_id: Uuid,
            dss_session_id: number,
            dss_link_state: DssLinkState,
        ): Message;

        static emergency_mode_query_new(): Message;

        static emergency_mode_set_new(state: EmergencyModeState): Message;

        static error_new(transaction_id: number, error_status_code: ProtocolError): Message;

        static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message;

        static google_carrier_lock_query_new(): Message;

        static google_carrier_lock_set_new(data: Uint8Array | string): Message;

        static home_provider_query_new(): Message;

        static home_provider_set_new(provider: Provider): Message;

        static intel_firmware_update_modem_reboot_set_new(): Message;

        static intel_firmware_update_v2_modem_reboot_set_new(boot_mode: IntelBootMode, timeout: number): Message;

        static intel_mutual_authentication_fcc_lock_query_new(): Message;

        static intel_mutual_authentication_fcc_lock_set_new(response_present: boolean, response: number): Message;

        static intel_thermal_rf_rfim_query_new(): Message;

        static intel_thermal_rf_rfim_set_new(activation_state: boolean): Message;

        static intel_tools_trace_config_query_new(trace_cmd: TraceCommand): Message;

        static intel_tools_trace_config_set_new(trace_cmd: TraceCommand, trace_value: number): Message;

        static ip_configuration_query_new(
            session_id: number,
            ipv4_configuration_available: IPConfigurationAvailableFlag,
            ipv6_configuration_available: IPConfigurationAvailableFlag,
            ipv4_address_count: number,
            ipv4_address: IPv4Element[],
            ipv6_address_count: number,
            ipv6_address: IPv6Element[],
            ipv4_gateway: IPv4,
            ipv6_gateway: IPv6,
            ipv4_dns_server_count: number,
            ipv4_dns_server: IPv4[],
            ipv6_dns_server_count: number,
            ipv6_dns_server: IPv6[],
            ipv4_mtu: number,
            ipv6_mtu: number,
        ): Message;

        static ip_packet_filters_query_new(
            session_id: number,
            packet_filters_count: number,
            packet_filters: PacketFilter[],
        ): Message;

        static ip_packet_filters_set_new(
            session_id: number,
            packet_filters_count: number,
            packet_filters: PacketFilter[],
        ): Message;

        static ms_basic_connect_extensions_base_stations_info_query_new(
            max_gsm_count: number,
            max_umts_count: number,
            max_tdscdma_count: number,
            max_lte_count: number,
            max_cdma_count: number,
        ): Message;

        static ms_basic_connect_extensions_device_caps_query_new(): Message;

        static ms_basic_connect_extensions_device_reset_set_new(): Message;

        static ms_basic_connect_extensions_device_slot_mappings_query_new(): Message;

        static ms_basic_connect_extensions_device_slot_mappings_set_new(map_count: number, slot_map: Slot[]): Message;

        static ms_basic_connect_extensions_location_info_status_query_new(): Message;

        static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message;

        static ms_basic_connect_extensions_lte_attach_configuration_set_new(
            operation: LteAttachContextOperation,
            configuration_count: number,
            configurations: LteAttachConfiguration[],
        ): Message;

        static ms_basic_connect_extensions_lte_attach_info_query_new(): Message;

        static ms_basic_connect_extensions_lte_attach_status_query_new(): Message;

        static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message;

        static ms_basic_connect_extensions_provisioned_contexts_query_new(): Message;

        static ms_basic_connect_extensions_provisioned_contexts_set_new(
            operation: ContextOperation,
            context_type: Uuid,
            ip_type: ContextIpType,
            state: ContextState,
            roaming: ContextRoamingControl,
            media_type: ContextMediaType,
            source: ContextSource,
            access_string: string,
            user_name: string,
            password: string,
            compression: Compression,
            auth_protocol: AuthProtocol,
        ): Message;

        static ms_basic_connect_extensions_slot_info_status_query_new(slot_index: number): Message;

        static ms_basic_connect_extensions_sys_caps_query_new(): Message;

        static ms_basic_connect_extensions_v2_version_query_new(
            mbim_version: number,
            mbim_extended_version: number,
        ): Message;

        static ms_basic_connect_extensions_v3_base_stations_info_query_new(
            max_gsm_count: number,
            max_umts_count: number,
            max_tdscdma_count: number,
            max_lte_count: number,
            max_cdma_count: number,
            max_nr_count: number,
        ): Message;

        static ms_basic_connect_extensions_v3_modem_configuration_query_new(): Message;

        static ms_basic_connect_extensions_v3_registration_parameters_query_new(): Message;

        static ms_basic_connect_extensions_v3_registration_parameters_set_new(
            mico_mode: MicoMode,
            drx_cycle: DrxCycle,
            ladn_info: LadnInfo,
            default_pdu_activation_hint: DefaultPduActivationHint,
            re_register_if_nedeed: boolean,
            unnamed_ies: Tlv[],
        ): Message;

        static ms_basic_connect_extensions_v3_wake_reason_query_new(): Message;

        static ms_basic_connect_v3_connect_query_new(session_id: number): Message;

        static ms_basic_connect_v3_connect_set_new(
            session_id: number,
            activation_command: ActivationCommand,
            compression: Compression,
            auth_protocol: AuthProtocol,
            ip_type: ContextIpType,
            context_type: Uuid,
            media_preference: AccessMediaType,
            access_string: string,
            user_name: string,
            password: string,
            unnamed_ies: Tlv[],
        ): Message;

        static ms_basic_connect_v3_ip_packet_filters_query_new(
            session_id: number,
            packet_filters_count: number,
            packet_filters: PacketFilterV3[],
        ): Message;

        static ms_basic_connect_v3_ip_packet_filters_set_new(
            session_id: number,
            packet_filters_count: number,
            packet_filters: PacketFilterV3[],
        ): Message;

        static ms_firmware_id_get_query_new(): Message;

        static ms_host_shutdown_notify_set_new(): Message;

        static ms_sar_config_query_new(): Message;

        static ms_sar_config_set_new(
            mode: SarControlMode,
            backoff_state: SarBackoffState,
            config_states_count: number,
            config_states: SarConfigState[],
        ): Message;

        static ms_sar_transmission_status_query_new(): Message;

        static ms_sar_transmission_status_set_new(
            channel_notification: TransmissionNotificationStatus,
            hysteresis_timer: number,
        ): Message;

        static ms_uicc_low_level_access_apdu_set_new(
            channel: number,
            secure_messaging: UiccSecureMessaging,
            class_byte_type: UiccClassByteType,
            command: Uint8Array | string,
        ): Message;

        static ms_uicc_low_level_access_application_list_query_new(): Message;

        static ms_uicc_low_level_access_atr_query_new(): Message;

        static ms_uicc_low_level_access_close_channel_set_new(channel: number, channel_group: number): Message;

        static ms_uicc_low_level_access_file_status_query_new(
            version: number,
            application_id: Uint8Array | string,
            file_path: Uint8Array | string,
        ): Message;

        static ms_uicc_low_level_access_open_channel_set_new(
            app_id: Uint8Array | string,
            select_p2_arg: number,
            channel_group: number,
        ): Message;

        static ms_uicc_low_level_access_read_binary_query_new(
            version: number,
            application_id: Uint8Array | string,
            file_path: Uint8Array | string,
            read_offset: number,
            read_size: number,
            local_pin: string,
            data: Uint8Array | string,
        ): Message;

        static ms_uicc_low_level_access_read_record_query_new(
            version: number,
            application_id: Uint8Array | string,
            file_path: Uint8Array | string,
            record_number: number,
            local_pin: string,
            data: Uint8Array | string,
        ): Message;

        static ms_uicc_low_level_access_reset_query_new(): Message;

        static ms_uicc_low_level_access_reset_set_new(pass_through_action: UiccPassThroughAction): Message;

        static ms_uicc_low_level_access_terminal_capability_query_new(): Message;

        static ms_uicc_low_level_access_terminal_capability_set_new(
            terminal_capability_count: number,
            terminal_capability: TerminalCapabilityInfo[],
        ): Message;

        static ms_voice_extensions_nitz_query_new(): Message;

        static multicarrier_providers_query_new(): Message;

        static multicarrier_providers_set_new(providers_count: number, providers: Provider[]): Message;

        static network_idle_hint_query_new(): Message;

        static network_idle_hint_set_new(state: NetworkIdleHintState): Message;

        static ['new'](data: number, data_length: number): Message;

        static open_done_new(transaction_id: number, error_status_code: StatusError): Message;

        static open_new(transaction_id: number, max_control_transfer: number): Message;

        static packet_service_query_new(): Message;

        static packet_service_set_new(packet_service_action: PacketServiceAction): Message;

        static packet_statistics_query_new(): Message;

        static phonebook_configuration_query_new(): Message;

        static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;

        static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;

        static phonebook_write_set_new(
            save_flag: PhonebookWriteFlag,
            save_index: number,
            number: string,
            name: string,
        ): Message;

        static pin_list_query_new(): Message;

        static pin_query_new(): Message;

        static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message;

        static preferred_providers_query_new(): Message;

        static preferred_providers_set_new(providers_count: number, providers: Provider[]): Message;

        static provisioned_contexts_query_new(): Message;

        static provisioned_contexts_set_new(
            context_id: number,
            context_type: Uuid,
            access_string: string,
            user_name: string,
            password: string,
            compression: Compression,
            auth_protocol: AuthProtocol,
            provider_id: string,
        ): Message;

        static proxy_control_configuration_set_new(device_path: string, timeout: number): Message;

        static qdu_file_open_query_new(): Message;

        static qdu_file_open_set_new(file_type: QduFileType, file_size: number): Message;

        static qdu_file_write_set_new(data_buffer: Uint8Array | string): Message;

        static qdu_quectel_read_version_set_new(version_type: QduQuectelVersionType): Message;

        static qdu_quectel_reboot_set_new(reboot_type: QduQuectelRebootType): Message;

        static qdu_update_session_query_new(): Message;

        static qdu_update_session_set_new(session_action: QduSessionAction, session_type: QduSessionType): Message;

        static qmi_msg_set_new(qmi_msg: Uint8Array | string): Message;

        static quectel_radio_state_query_new(): Message;

        static quectel_radio_state_set_new(radio_state: QuectelRadioSwitchState): Message;

        static radio_state_query_new(): Message;

        static radio_state_set_new(radio_state: RadioSwitchState): Message;

        static register_state_query_new(): Message;

        static register_state_set_new(
            provider_id: string,
            register_action: RegisterAction,
            data_class: DataClass,
        ): Message;

        static service_activation_set_new(buffer: Uint8Array | string): Message;

        static signal_state_query_new(): Message;

        static signal_state_set_new(
            signal_strength_interval: number,
            rssi_threshold: number,
            error_rate_threshold: number,
        ): Message;

        static sms_configuration_query_new(): Message;

        static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message;

        static sms_delete_set_new(flag: SmsFlag, message_index: number): Message;

        static sms_message_store_status_query_new(): Message;

        static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message;

        static sms_send_set_new(
            format: SmsFormat,
            pdu_message: SmsPduSendRecord,
            cdma_message: SmsCdmaSendRecord,
        ): Message;

        static stk_envelope_query_new(): Message;

        static stk_envelope_set_new(data: Uint8Array | string): Message;

        static stk_pac_query_new(): Message;

        static stk_pac_set_new(pac_host_control: Uint8Array | string): Message;

        static stk_terminal_response_set_new(response: Uint8Array | string): Message;

        static subscriber_ready_status_query_new(): Message;

        static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array | string): Message;

        static visible_providers_query_new(action: VisibleProvidersAction): Message;

        // Own methods of Mbim.Message

        /**
         * Parses and returns parameters of the 'Location' response command in the 'ATDS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        atds_location_response_parse(): [boolean, number, number, number];
        /**
         * Parses and returns parameters of the 'Operators' response command in the 'ATDS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        atds_operators_response_parse(): [boolean, number, AtdsProvider[] | null];
        /**
         * Parses and returns parameters of the 'RAT' response command in the 'ATDS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        atds_rat_response_parse(): [boolean, AtdsRatMode | null];
        /**
         * Parses and returns parameters of the 'Register State' response command in the 'ATDS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        atds_register_state_response_parse(): [
            boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string,
            string,
            string,
            RegistrationFlag | null,
        ];
        /**
         * Parses and returns parameters of the 'Signal' response command in the 'ATDS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        atds_signal_response_parse(): [boolean, number, number, number, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Aka' response command in the 'Auth' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        auth_aka_response_parse(): [
            boolean,
            Uint8Array | null,
            number,
            Uint8Array | null,
            Uint8Array | null,
            Uint8Array | null,
        ];
        /**
         * Parses and returns parameters of the 'Akap' response command in the 'Auth' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        auth_akap_response_parse(): [
            boolean,
            Uint8Array | null,
            number,
            Uint8Array | null,
            Uint8Array | null,
            Uint8Array | null,
        ];
        /**
         * Parses and returns parameters of the 'Sim' response command in the 'Auth' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        auth_sim_response_parse(): [boolean, number, number, number, number, number, number, number];
        /**
         * Gets the result of the 'Close' operation in the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
         * @returns %TRUE if the operation succeeded, %FALSE if @error is set.
         */
        close_done_get_result(): boolean;
        /**
         * Get status code from the %MBIM_MESSAGE_TYPE_CLOSE_DONE message.
         * @returns a #MbimStatusError.
         */
        close_done_get_status_code(): StatusError;
        /**
         * Appends the contents of `buffer` to `self`.
         * @param buffer raw buffer to append to the message.
         * @param buffer_size length of the data in @buffer.
         */
        command_append(buffer: number, buffer_size: number): void;
        /**
         * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns a CID.
         */
        command_done_get_cid(): number;
        /**
         * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns The raw data buffer, or #NULL if empty.
         */
        command_done_get_raw_information_buffer(): [number, number];
        /**
         * Gets the result of the 'Command' operation in the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns %TRUE if the operation succeeded, %FALSE if @error is set.
         */
        command_done_get_result(): boolean;
        /**
         * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns a #MbimService.
         */
        command_done_get_service(): Service;
        /**
         * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns a #MbimUuid.
         */
        command_done_get_service_id(): Uuid;
        /**
         * Get status code from the %MBIM_MESSAGE_TYPE_COMMAND_DONE message.
         * @returns a #MbimStatusError.
         */
        command_done_get_status_code(): StatusError;
        /**
         * Get the command id of a %MBIM_MESSAGE_TYPE_COMMAND message.
         * @returns a CID.
         */
        command_get_cid(): number;
        /**
         * Get the command type of a %MBIM_MESSAGE_TYPE_COMMAND message.
         * @returns a #MbimMessageCommandType.
         */
        command_get_command_type(): MessageCommandType;
        /**
         * Gets the information buffer of the %MBIM_MESSAGE_TYPE_COMMAND message.
         * @returns The raw data buffer, or #NULL if empty.
         */
        command_get_raw_information_buffer(): [number, number];
        /**
         * Get the service of a %MBIM_MESSAGE_TYPE_COMMAND message.
         * @returns a #MbimService.
         */
        command_get_service(): Service;
        /**
         * Get the service UUID of a %MBIM_MESSAGE_TYPE_COMMAND message.
         * @returns a #MbimUuid.
         */
        command_get_service_id(): Uuid;
        /**
         * Parses and returns parameters of the 'Connect' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        connect_notification_parse(): [
            boolean,
            number,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number,
        ];
        /**
         * Parses and returns parameters of the 'Connect' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        connect_response_parse(): [
            boolean,
            number,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number,
        ];
        /**
         * Parses and returns parameters of the 'Device Caps' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        device_caps_response_parse(): [
            boolean,
            DeviceType | null,
            CellularClass | null,
            VoiceClass | null,
            SimClass | null,
            DataClass | null,
            SmsCaps | null,
            CtrlCaps | null,
            number,
            string,
            string,
            string,
            string,
        ];
        /**
         * Parses and returns parameters of the 'Device Service Subscribe List' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        device_service_subscribe_list_response_parse(): [boolean, number, EventEntry[] | null];
        /**
         * Create a new request for the 'Events' response command in the 'Basic Connect' service.
         * @param events_count return location for a #guint32, or %NULL if the 'EventsCount' field is not needed.
         * @param events return location for a newly allocated array of #MbimEventEntrys, or %NULL if the 'Events' field is not needed. Free the returned value with mbim_event_entry_array_free().
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean;
        /**
         * Parses and returns parameters of the 'Device Services' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        device_services_response_parse(): [boolean, number, number, DeviceServiceElement[] | null];
        /**
         * Parses and returns parameters of the 'Connect' response command in the 'DSS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        dss_connect_response_parse(): boolean;
        /**
         * Create a #MbimMessage with the same contents as `self`.
         * @returns a newly created #MbimMessage, which should be freed with mbim_message_unref().
         */
        dup(): Message;
        /**
         * Parses and returns parameters of the 'Emergency Mode' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        emergency_mode_notification_parse(): [boolean, EmergencyModeState | null];
        /**
         * Parses and returns parameters of the 'Emergency Mode' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        emergency_mode_response_parse(): [boolean, EmergencyModeState | null];
        /**
         * Get the error in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
         * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
         * @returns a newly allocated #GError, which should be freed with g_error_free().
         */
        error_get_error(): GLib.Error;
        /**
         * Get the error code in a %MBIM_MESSAGE_TYPE_HOST_ERROR or
         * %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message.
         * @returns a #MbimProtocolError.
         */
        error_get_error_status_code(): ProtocolError;
        /**
         * Gets the whole message length.
         * @returns the length of the message.
         */
        get_message_length(): number;
        /**
         * Gets the message type.
         * @returns a #MbimMessageType.
         */
        get_message_type(): MessageType;
        /**
         * Gets a printable string with the contents of the whole MBIM message.
         *
         * This method will not fail if the parsing of the message contents fails,
         * a fallback text with the error will be included in the generated printable
         * information instead.
         * @param line_prefix prefix string to use in each new generated line.
         * @param headers_only %TRUE if only basic headers should be printed.
         * @returns a newly allocated string, which should be freed with g_free().
         */
        get_printable(line_prefix: string, headers_only: boolean): string;
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
         * @returns a newly allocated string which should be freed with g_free(), or #NULL if @error is set.
         */
        get_printable_full(
            mbimex_version_major: number,
            mbimex_version_minor: number,
            line_prefix: string,
            headers_only: boolean,
        ): string;
        /**
         * Gets the whole raw data buffer of the #MbimMessage.
         * @returns The raw data buffer, or #NULL if @error is set.
         */
        get_raw(): [number, number];
        /**
         * Gets the transaction ID of the message.
         * @returns the transaction ID.
         */
        get_transaction_id(): number;
        /**
         * Parses and returns parameters of the 'Carrier Lock' notification command in the 'Google' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        google_carrier_lock_notification_parse(): [
            boolean,
            CarrierLockStatus | null,
            CarrierLockModemState | null,
            CarrierLockCause | null,
        ];
        /**
         * Parses and returns parameters of the 'Carrier Lock' response command in the 'Google' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        google_carrier_lock_response_parse(): [
            boolean,
            CarrierLockStatus | null,
            CarrierLockModemState | null,
            CarrierLockCause | null,
        ];
        /**
         * Parses and returns parameters of the 'Home Provider' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        home_provider_response_parse(): [boolean, Provider | null];
        /**
         * Get the command id of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
         * @returns a CID.
         */
        indicate_status_get_cid(): number;
        /**
         * Gets the information buffer of the %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
         * @returns The raw data buffer, or #NULL if empty.
         */
        indicate_status_get_raw_information_buffer(): [number, number];
        /**
         * Get the service of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
         * @returns a #MbimService.
         */
        indicate_status_get_service(): Service;
        /**
         * Get the service UUID of a %MBIM_MESSAGE_TYPE_INDICATE_STATUS message.
         * @returns a #MbimUuid.
         */
        indicate_status_get_service_id(): Uuid;
        /**
         * Parses and returns parameters of the 'FCC Lock' response command in the 'Intel Mutual Authentication' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        intel_mutual_authentication_fcc_lock_response_parse(): [boolean, boolean, number];
        /**
         * Parses and returns parameters of the 'RFIM' notification command in the 'Intel Thermal RF' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        intel_thermal_rf_rfim_notification_parse(): [boolean, number, IntelRfimFrequencyValue[] | null];
        /**
         * Parses and returns parameters of the 'RFIM' response command in the 'Intel Thermal RF' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        intel_thermal_rf_rfim_response_parse(): [boolean, number, IntelRfimFrequencyValue[] | null];
        /**
         * Parses and returns parameters of the 'Trace Config' response command in the 'Intel Tools' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        intel_tools_trace_config_response_parse(): [boolean, TraceCommand | null, number];
        /**
         * Parses and returns parameters of the 'IP Configuration' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ip_configuration_notification_parse(): [
            boolean,
            number,
            IPConfigurationAvailableFlag | null,
            IPConfigurationAvailableFlag | null,
            number,
            IPv4Element[] | null,
            number,
            IPv6Element[] | null,
            IPv4 | null,
            IPv6 | null,
            number,
            IPv4[] | null,
            number,
            IPv6[] | null,
            number,
            number,
        ];
        /**
         * Parses and returns parameters of the 'IP Configuration' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ip_configuration_response_parse(): [
            boolean,
            number,
            IPConfigurationAvailableFlag | null,
            IPConfigurationAvailableFlag | null,
            number,
            IPv4Element[] | null,
            number,
            IPv6Element[] | null,
            IPv4 | null,
            IPv6 | null,
            number,
            IPv4[] | null,
            number,
            IPv6[] | null,
            number,
            number,
        ];
        /**
         * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ip_packet_filters_response_parse(): [boolean, number, number, PacketFilter[] | null];
        /**
         * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_base_stations_info_response_parse(): [
            boolean,
            DataClass | null,
            CellInfoServingGsm | null,
            CellInfoServingUmts | null,
            CellInfoServingTdscdma | null,
            CellInfoServingLte | null,
            number,
            CellInfoNeighboringGsm[] | null,
            number,
            CellInfoNeighboringUmts[] | null,
            number,
            CellInfoNeighboringTdscdma[] | null,
            number,
            CellInfoNeighboringLte[] | null,
            number,
            CellInfoCdma[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_device_caps_response_parse(): [
            boolean,
            DeviceType | null,
            CellularClass | null,
            VoiceClass | null,
            SimClass | null,
            DataClass | null,
            SmsCaps | null,
            CtrlCaps | null,
            number,
            string,
            string,
            string,
            string,
            number,
        ];
        /**
         * Parses and returns parameters of the 'Device Reset' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_device_reset_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Device Slot Mappings' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_device_slot_mappings_response_parse(): [boolean, number, Slot[] | null];
        /**
         * Parses and returns parameters of the 'Location Info Status' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_location_info_status_notification_parse(): [boolean, number, number, number];
        /**
         * Parses and returns parameters of the 'Location Info Status' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_location_info_status_response_parse(): [boolean, number, number, number];
        /**
         * Parses and returns parameters of the 'Lte Attach Configuration' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [
            boolean,
            number,
            LteAttachConfiguration[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Configuration' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [
            boolean,
            number,
            LteAttachConfiguration[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_info_notification_parse(): [
            boolean,
            LteAttachState | null,
            ContextIpType | null,
            string,
            string,
            string,
            Compression | null,
            AuthProtocol | null,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_info_response_parse(): [
            boolean,
            LteAttachState | null,
            ContextIpType | null,
            string,
            string,
            string,
            Compression | null,
            AuthProtocol | null,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Status' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_status_notification_parse(): [boolean, DeprecatedLteAttachStatus | null];
        /**
         * Parses and returns parameters of the 'Lte Attach Status' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_lte_attach_status_response_parse(): [boolean, DeprecatedLteAttachStatus | null];
        /**
         * Parses and returns parameters of the 'PCO' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_pco_notification_parse(): [boolean, PcoValue | null];
        /**
         * Parses and returns parameters of the 'PCO' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_pco_response_parse(): [boolean, PcoValue | null];
        /**
         * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_provisioned_contexts_notification_parse(): [
            boolean,
            number,
            ProvisionedContextElementV2[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_provisioned_contexts_response_parse(): [
            boolean,
            number,
            ProvisionedContextElementV2[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Slot Info Status' notification command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_slot_info_status_notification_parse(): [boolean, number, UiccSlotState | null];
        /**
         * Parses and returns parameters of the 'Slot Info Status' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_slot_info_status_response_parse(): [boolean, number, UiccSlotState | null];
        /**
         * Parses and returns parameters of the 'Sys Caps' response command in the 'Ms Basic Connect Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_sys_caps_response_parse(): [boolean, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Version' response command in the 'Ms Basic Connect Extensions V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v2_version_response_parse(): [boolean, number, number];
        /**
         * Parses and returns parameters of the 'Base Stations Info' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_base_stations_info_response_parse(): [
            boolean,
            DataClassV3 | null,
            DataSubclass | null,
            CellInfoServingGsm | null,
            CellInfoServingUmts | null,
            CellInfoServingTdscdma | null,
            CellInfoServingLte | null,
            number,
            CellInfoNeighboringGsm[] | null,
            number,
            CellInfoNeighboringUmts[] | null,
            number,
            CellInfoNeighboringTdscdma[] | null,
            number,
            CellInfoNeighboringLte[] | null,
            number,
            CellInfoCdma[] | null,
            number,
            CellInfoServingNr[] | null,
            number,
            CellInfoNeighboringNr[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Device Caps' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_device_caps_response_parse(): [
            boolean,
            DeviceType | null,
            CellularClass | null,
            VoiceClass | null,
            SimClass | null,
            DataClassV3 | null,
            SmsCaps | null,
            CtrlCaps | null,
            DataSubclass | null,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            string,
            string,
            string,
            string,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Info' notification command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_lte_attach_info_notification_parse(): [
            boolean,
            LteAttachState | null,
            NwError | null,
            ContextIpType | null,
            string,
            string,
            string,
            Compression | null,
            AuthProtocol | null,
        ];
        /**
         * Parses and returns parameters of the 'Lte Attach Info' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_lte_attach_info_response_parse(): [
            boolean,
            LteAttachState | null,
            NwError | null,
            ContextIpType | null,
            string,
            string,
            string,
            Compression | null,
            AuthProtocol | null,
        ];
        /**
         * Parses and returns parameters of the 'Modem Configuration' notification command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_modem_configuration_notification_parse(): [
            boolean,
            ModemConfigurationStatus | null,
            string,
            Tlv[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Modem Configuration' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_modem_configuration_response_parse(): [
            boolean,
            ModemConfigurationStatus | null,
            string,
            Tlv[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Registration Parameters' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_registration_parameters_response_parse(): [
            boolean,
            MicoMode | null,
            DrxCycle | null,
            LadnInfo | null,
            DefaultPduActivationHint | null,
            boolean,
            Tlv[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Wake Reason' response command in the 'Ms Basic Connect Extensions V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_extensions_v3_wake_reason_response_parse(): [boolean, WakeType | null, number, Tlv | null];
        /**
         * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_packet_service_notification_parse(): [
            boolean,
            number,
            PacketServiceState | null,
            DataClass | null,
            number,
            number,
            FrequencyRange | null,
        ];
        /**
         * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_packet_service_response_parse(): [
            boolean,
            number,
            PacketServiceState | null,
            DataClass | null,
            number,
            number,
            FrequencyRange | null,
        ];
        /**
         * Parses and returns parameters of the 'Register State' notification command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_register_state_notification_parse(): [
            boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string,
            string,
            string,
            RegistrationFlag | null,
            DataClass | null,
        ];
        /**
         * Parses and returns parameters of the 'Register State' response command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_register_state_response_parse(): [
            boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string,
            string,
            string,
            RegistrationFlag | null,
            DataClass | null,
        ];
        /**
         * Parses and returns parameters of the 'Signal State' notification command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_signal_state_notification_parse(): [
            boolean,
            number,
            number,
            number,
            number,
            number,
            number,
            RsrpSnrInfo[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Signal State' response command in the 'Ms Basic Connect V2' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v2_signal_state_response_parse(): [
            boolean,
            number,
            number,
            number,
            number,
            number,
            number,
            RsrpSnrInfo[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Connect' notification command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_connect_notification_parse(): [
            boolean,
            number,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number,
            AccessMediaType | null,
            string,
            Tlv[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Connect' response command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_connect_response_parse(): [
            boolean,
            number,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number,
            AccessMediaType | null,
            string,
            Tlv[] | null,
        ];
        /**
         * Parses and returns parameters of the 'IP Packet Filters' response command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_ip_packet_filters_response_parse(): [boolean, number, number, PacketFilterV3[] | null];
        /**
         * Parses and returns parameters of the 'Packet Service' notification command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_packet_service_notification_parse(): [
            boolean,
            number,
            PacketServiceState | null,
            DataClassV3 | null,
            number,
            number,
            FrequencyRange | null,
            DataSubclass | null,
            Tai | null,
        ];
        /**
         * Parses and returns parameters of the 'Packet Service' response command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_packet_service_response_parse(): [
            boolean,
            number,
            PacketServiceState | null,
            DataClassV3 | null,
            number,
            number,
            FrequencyRange | null,
            DataSubclass | null,
            Tai | null,
        ];
        /**
         * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_subscriber_ready_status_notification_parse(): [
            boolean,
            SubscriberReadyState | null,
            SubscriberReadyStatusFlag | null,
            string,
            string,
            ReadyInfoFlag | null,
            number,
            string[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Ms Basic Connect V3' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_basic_connect_v3_subscriber_ready_status_response_parse(): [
            boolean,
            SubscriberReadyState | null,
            SubscriberReadyStatusFlag | null,
            string,
            string,
            ReadyInfoFlag | null,
            number,
            string[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Get' response command in the 'MS Firmware ID' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_firmware_id_get_response_parse(): [boolean, Uuid | null];
        /**
         * Parses and returns parameters of the 'Config' response command in the 'MS SAR' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_sar_config_response_parse(): [
            boolean,
            SarControlMode | null,
            SarBackoffState | null,
            SarWifiHardwareState | null,
            number,
            SarConfigState[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Transmission status' notification command in the 'MS SAR' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_sar_transmission_status_notification_parse(): [
            boolean,
            TransmissionNotificationStatus | null,
            TransmissionState | null,
            number,
        ];
        /**
         * Parses and returns parameters of the 'Transmission status' response command in the 'MS SAR' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_sar_transmission_status_response_parse(): [
            boolean,
            TransmissionNotificationStatus | null,
            TransmissionState | null,
            number,
        ];
        /**
         * Parses and returns parameters of the 'APDU' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_apdu_response_parse(): [boolean, number, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Application List' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_application_list_response_parse(): [
            boolean,
            number,
            number,
            number,
            number,
            UiccApplication[] | null,
        ];
        /**
         * Parses and returns parameters of the 'ATR' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_atr_response_parse(): [boolean, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Close Channel' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_close_channel_response_parse(): [boolean, number];
        /**
         * Parses and returns parameters of the 'File Status' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_file_status_response_parse(): [
            boolean,
            number,
            number,
            number,
            UiccFileAccessibility | null,
            UiccFileType | null,
            UiccFileStructure | null,
            number,
            number,
            PinType | null,
            PinType | null,
            PinType | null,
            PinType | null,
        ];
        /**
         * Parses and returns parameters of the 'Open Channel' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_open_channel_response_parse(): [boolean, number, number, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Read Binary' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_read_binary_response_parse(): [boolean, number, number, number, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Read Record' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_read_record_response_parse(): [boolean, number, number, number, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Reset' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_reset_response_parse(): [boolean, UiccPassThroughStatus | null];
        /**
         * Parses and returns parameters of the 'Terminal Capability' response command in the 'MS UICC Low Level Access' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_uicc_low_level_access_terminal_capability_response_parse(): [
            boolean,
            number,
            TerminalCapabilityInfo[] | null,
        ];
        /**
         * Parses and returns parameters of the 'NITZ' notification command in the 'MS Voice Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_voice_extensions_nitz_notification_parse(): [
            boolean,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            DataClass | null,
        ];
        /**
         * Parses and returns parameters of the 'NITZ' response command in the 'MS Voice Extensions' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ms_voice_extensions_nitz_response_parse(): [
            boolean,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            DataClass | null,
        ];
        /**
         * Parses and returns parameters of the 'Multicarrier Providers' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        multicarrier_providers_notification_parse(): [boolean, number, Provider[] | null];
        /**
         * Parses and returns parameters of the 'Multicarrier Providers' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        multicarrier_providers_response_parse(): [boolean, number, Provider[] | null];
        /**
         * Parses and returns parameters of the 'Network Idle Hint' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        network_idle_hint_response_parse(): [boolean, NetworkIdleHintState | null];
        /**
         * Gets the result of the 'Open' operation in the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
         * @returns %TRUE if the operation succeeded, %FALSE if @error is set.
         */
        open_done_get_result(): boolean;
        /**
         * Get status code from the %MBIM_MESSAGE_TYPE_OPEN_DONE message.
         * @returns a #MbimStatusError.
         */
        open_done_get_status_code(): StatusError;
        /**
         * Get the maximum control transfer set to be used in the #MbimMessage of type
         * %MBIM_MESSAGE_TYPE_OPEN.
         * @returns the maximum control transfer.
         */
        open_get_max_control_transfer(): number;
        /**
         * Parses and returns parameters of the 'Packet Service' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        packet_service_notification_parse(): [
            boolean,
            number,
            PacketServiceState | null,
            DataClass | null,
            number,
            number,
        ];
        /**
         * Parses and returns parameters of the 'Packet Service' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        packet_service_response_parse(): [boolean, number, PacketServiceState | null, DataClass | null, number, number];
        /**
         * Parses and returns parameters of the 'Packet Statistics' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        packet_statistics_response_parse(): [boolean, number, number, number, number, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Configuration' notification command in the 'Phonebook' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        phonebook_configuration_notification_parse(): [boolean, PhonebookState | null, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Configuration' response command in the 'Phonebook' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        phonebook_configuration_response_parse(): [boolean, PhonebookState | null, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Delete' response command in the 'Phonebook' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        phonebook_delete_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Read' response command in the 'Phonebook' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        phonebook_read_response_parse(): [boolean, number, PhonebookEntry[] | null];
        /**
         * Parses and returns parameters of the 'Write' response command in the 'Phonebook' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        phonebook_write_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Pin List' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        pin_list_response_parse(): [
            boolean,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
        ];
        /**
         * Parses and returns parameters of the 'Pin' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        pin_response_parse(): [boolean, PinType | null, PinState | null, number];
        /**
         * Parses and returns parameters of the 'Preferred Providers' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        preferred_providers_notification_parse(): [boolean, number, Provider[] | null];
        /**
         * Parses and returns parameters of the 'Preferred Providers' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        preferred_providers_response_parse(): [boolean, number, Provider[] | null];
        /**
         * Parses and returns parameters of the 'Provisioned Contexts' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        provisioned_contexts_notification_parse(): [boolean, number, ProvisionedContextElement[] | null];
        /**
         * Parses and returns parameters of the 'Provisioned Contexts' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        provisioned_contexts_response_parse(): [boolean, number, ProvisionedContextElement[] | null];
        /**
         * Parses and returns parameters of the 'Configuration' response command in the 'Proxy Control' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        proxy_control_configuration_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Version' notification command in the 'Proxy Control' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        proxy_control_version_notification_parse(): [boolean, number, number];
        /**
         * Parses and returns parameters of the 'File Open' response command in the 'QDU' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qdu_file_open_response_parse(): [boolean, number, number];
        /**
         * Parses and returns parameters of the 'File Write' response command in the 'QDU' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qdu_file_write_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Quectel Read Version' response command in the 'QDU' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qdu_quectel_read_version_response_parse(): [boolean, number, string];
        /**
         * Parses and returns parameters of the 'Quectel Reboot' response command in the 'QDU' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qdu_quectel_reboot_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Update Session' response command in the 'QDU' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qdu_update_session_response_parse(): [
            boolean,
            QduSessionType | null,
            QduSessionStatus | null,
            QduSessionType | null,
            QduSessionResult | null,
            number,
            number,
        ];
        /**
         * Parses and returns parameters of the 'msg' notification command in the 'QMI' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qmi_msg_notification_parse(): [boolean, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'msg' response command in the 'QMI' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        qmi_msg_response_parse(): [boolean, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Radio State' response command in the 'Quectel' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        quectel_radio_state_response_parse(): [boolean, QuectelRadioSwitchState | null];
        /**
         * Parses and returns parameters of the 'Radio State' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        radio_state_notification_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];
        /**
         * Parses and returns parameters of the 'Radio State' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        radio_state_response_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];
        /**
         * Atomically increments the reference count of `self` by one.
         * @returns the new reference to @self.
         */
        ref(): Message;
        /**
         * Parses and returns parameters of the 'Register State' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        register_state_notification_parse(): [
            boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string,
            string,
            string,
            RegistrationFlag | null,
        ];
        /**
         * Parses and returns parameters of the 'Register State' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        register_state_response_parse(): [
            boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string,
            string,
            string,
            RegistrationFlag | null,
        ];
        /**
         * Gets the result of the operation from the response message, which
         * can be either a %MBIM_MESSAGE_TYPE_FUNCTION_ERROR message or a message of the
         * specified `expected` type.
         * @param expected expected #MbimMessageType if there isn't any error in the operation.
         * @returns %TRUE if the operation succeeded, %FALSE if @error is set.
         */
        response_get_result(expected: MessageType): boolean;
        /**
         * Parses and returns parameters of the 'Service Activation' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        service_activation_response_parse(): [boolean, NwError | null, Uint8Array | null];
        /**
         * Sets the transaction ID of the message.
         * @param transaction_id the transaction id.
         */
        set_transaction_id(transaction_id: number): void;
        /**
         * Parses and returns parameters of the 'Signal State' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        signal_state_notification_parse(): [boolean, number, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Signal State' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        signal_state_response_parse(): [boolean, number, number, number, number, number];
        /**
         * Parses and returns parameters of the 'Configuration' response command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_configuration_response_parse(): [boolean, SmsStorageState | null, SmsFormat | null, number, number, string];
        /**
         * Parses and returns parameters of the 'Delete' response command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_delete_response_parse(): boolean;
        /**
         * Parses and returns parameters of the 'Message Store Status' notification command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_message_store_status_notification_parse(): [boolean, SmsStatusFlag | null, number];
        /**
         * Parses and returns parameters of the 'Message Store Status' response command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_message_store_status_response_parse(): [boolean, SmsStatusFlag | null, number];
        /**
         * Parses and returns parameters of the 'Read' notification command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_read_notification_parse(): [
            boolean,
            SmsFormat | null,
            number,
            SmsPduReadRecord[] | null,
            SmsCdmaReadRecord[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Read' response command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_read_response_parse(): [
            boolean,
            SmsFormat | null,
            number,
            SmsPduReadRecord[] | null,
            SmsCdmaReadRecord[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Send' response command in the 'SMS' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        sms_send_response_parse(): [boolean, number];
        /**
         * Parses and returns parameters of the 'Envelope' response command in the 'STK' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        stk_envelope_response_parse(): [boolean, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Pac' notification command in the 'STK' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        stk_pac_notification_parse(): [boolean, StkPacType | null, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Pac' response command in the 'STK' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        stk_pac_response_parse(): [boolean, Uint8Array | null];
        /**
         * Parses and returns parameters of the 'Terminal Response' response command in the 'STK' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        stk_terminal_response_response_parse(): [boolean, Uint8Array | null, number];
        /**
         * Parses and returns parameters of the 'Subscriber Ready Status' notification command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        subscriber_ready_status_notification_parse(): [
            boolean,
            SubscriberReadyState | null,
            string,
            string,
            ReadyInfoFlag | null,
            number,
            string[] | null,
        ];
        /**
         * Parses and returns parameters of the 'Subscriber Ready Status' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        subscriber_ready_status_response_parse(): [
            boolean,
            SubscriberReadyState | null,
            string,
            string,
            ReadyInfoFlag | null,
            number,
            string[] | null,
        ];
        /**
         * Atomically decrements the reference count of `self` by one.
         * If the reference count drops to 0, `self` is completely disposed.
         */
        unref(): void;
        /**
         * Parses and returns parameters of the '' notification command in the 'USSD' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ussd_notification_parse(): [boolean, UssdResponse | null, UssdSessionState | null, number, Uint8Array | null];
        /**
         * Parses and returns parameters of the '' response command in the 'USSD' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        ussd_response_parse(): [boolean, UssdResponse | null, UssdSessionState | null, number, Uint8Array | null];
        /**
         * Validates the contents of the headers in the MBIM message.
         *
         * This operation may be used to ensure that the message contains all bytes
         * it is expected to contain and that it is of a valid type.
         *
         * This operation also ensures the message is complete and not a partial
         * MBIM fragment.
         *
         * This operation does not validate that the specific contents of a given
         * message type are available, that is done by the methods retrieving those
         * specific contents.
         * @returns %TRUE if the message is valid, %FALSE if @error is set.
         */
        validate(): boolean;
        /**
         * Parses and returns parameters of the 'Visible Providers' response command in the 'Basic Connect' service.
         * @returns %TRUE if the message was correctly parsed, %FALSE if @error is set.
         */
        visible_providers_response_parse(): [boolean, number, Provider[] | null];
    }

    /**
     * A MbimPacketFilter element.
     */
    class PacketFilter {
        static $gtype: GObject.GType<PacketFilter>;

        // Own fields of Mbim.PacketFilter

        filter_size: number;
        packet_filter: number;
        packet_mask: number;

        // Constructors of Mbim.PacketFilter

        constructor(
            properties?: Partial<{
                filter_size: number;
                packet_filter: number;
                packet_mask: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.PacketFilter

        /**
         * Frees the memory allocated for the array of #MbimPacketFilter structs.
         * @param array a #NULL terminated array of #MbimPacketFilter structs.
         */
        static array_free(array: PacketFilterArray): void;
    }

    /**
     * A MbimPacketFilterV3 element.
     */
    class PacketFilterV3 {
        static $gtype: GObject.GType<PacketFilterV3>;

        // Own fields of Mbim.PacketFilterV3

        filter_size: number;
        packet_filter: number;
        packet_mask: number;
        filter_id: number;

        // Constructors of Mbim.PacketFilterV3

        constructor(
            properties?: Partial<{
                filter_size: number;
                packet_filter: number;
                packet_mask: number;
                filter_id: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.PacketFilterV3

        /**
         * Frees the memory allocated for the array of #MbimPacketFilterV3 structs.
         * @param array a #NULL terminated array of #MbimPacketFilterV3 structs.
         */
        static array_free(array: PacketFilterV3Array): void;
    }

    /**
     * A MbimPcoValue element.
     */
    class PcoValue {
        static $gtype: GObject.GType<PcoValue>;

        // Own fields of Mbim.PcoValue

        session_id: number;
        pco_data_size: number;
        pco_data_type: number;
        pco_data_buffer: number;

        // Constructors of Mbim.PcoValue

        constructor(
            properties?: Partial<{
                session_id: number;
                pco_data_size: number;
                pco_data_type: number;
                pco_data_buffer: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.PcoValue

        /**
         * Frees the memory allocated for the #MbimPcoValue.
         */
        free(): void;
    }

    /**
     * A MbimPhonebookEntry element.
     */
    class PhonebookEntry {
        static $gtype: GObject.GType<PhonebookEntry>;

        // Own fields of Mbim.PhonebookEntry

        entry_index: number;
        number: string;
        name: string;

        // Constructors of Mbim.PhonebookEntry

        constructor(
            properties?: Partial<{
                entry_index: number;
                number: string;
                name: string;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.PhonebookEntry

        /**
         * Frees the memory allocated for the array of #MbimPhonebookEntry structs.
         * @param array a #NULL terminated array of #MbimPhonebookEntry structs.
         */
        static array_free(array: PhonebookEntryArray): void;
    }

    /**
     * A MbimPinDesc element.
     */
    class PinDesc {
        static $gtype: GObject.GType<PinDesc>;

        // Own fields of Mbim.PinDesc

        pin_mode: number;
        pin_format: number;
        pin_length_min: number;
        pin_length_max: number;

        // Constructors of Mbim.PinDesc

        constructor(
            properties?: Partial<{
                pin_mode: number;
                pin_format: number;
                pin_length_min: number;
                pin_length_max: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.PinDesc

        /**
         * Frees the memory allocated for the #MbimPinDesc.
         */
        free(): void;
    }

    /**
     * A MbimProvider element.
     */
    class Provider {
        static $gtype: GObject.GType<Provider>;

        // Own fields of Mbim.Provider

        provider_id: string;
        provider_state: number;
        provider_name: string;
        cellular_class: number;
        rssi: number;
        error_rate: number;

        // Constructors of Mbim.Provider

        constructor(
            properties?: Partial<{
                provider_id: string;
                provider_state: number;
                provider_name: string;
                cellular_class: number;
                rssi: number;
                error_rate: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.Provider

        /**
         * Frees the memory allocated for the array of #MbimProvider structs.
         * @param array a #NULL terminated array of #MbimProvider structs.
         */
        static array_free(array: ProviderArray): void;

        // Own methods of Mbim.Provider

        /**
         * Frees the memory allocated for the #MbimProvider.
         */
        free(): void;
    }

    /**
     * A MbimProvisionedContextElement element.
     */
    class ProvisionedContextElement {
        static $gtype: GObject.GType<ProvisionedContextElement>;

        // Own fields of Mbim.ProvisionedContextElement

        context_id: number;
        context_type: Uuid;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;

        // Constructors of Mbim.ProvisionedContextElement

        constructor(
            properties?: Partial<{
                context_id: number;
                context_type: Uuid;
                access_string: string;
                user_name: string;
                password: string;
                compression: number;
                auth_protocol: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.ProvisionedContextElement

        /**
         * Frees the memory allocated for the array of #MbimProvisionedContextElement structs.
         * @param array a #NULL terminated array of #MbimProvisionedContextElement structs.
         */
        static array_free(array: ProvisionedContextElementArray): void;
    }

    /**
     * A MbimProvisionedContextElementV2 element.
     */
    class ProvisionedContextElementV2 {
        static $gtype: GObject.GType<ProvisionedContextElementV2>;

        // Own fields of Mbim.ProvisionedContextElementV2

        context_id: number;
        context_type: Uuid;
        ip_type: number;
        state: number;
        roaming: number;
        media_type: number;
        source: number;
        access_string: string;
        user_name: string;
        password: string;
        compression: number;
        auth_protocol: number;

        // Constructors of Mbim.ProvisionedContextElementV2

        constructor(
            properties?: Partial<{
                context_id: number;
                context_type: Uuid;
                ip_type: number;
                state: number;
                roaming: number;
                media_type: number;
                source: number;
                access_string: string;
                user_name: string;
                password: string;
                compression: number;
                auth_protocol: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.ProvisionedContextElementV2

        /**
         * Frees the memory allocated for the array of #MbimProvisionedContextElementV2 structs.
         * @param array a #NULL terminated array of #MbimProvisionedContextElementV2 structs.
         */
        static array_free(array: ProvisionedContextElementV2Array): void;
    }

    type ProxyClass = typeof Proxy;
    abstract class ProxyPrivate {
        static $gtype: GObject.GType<ProxyPrivate>;

        // Constructors of Mbim.ProxyPrivate

        _init(...args: any[]): void;
    }

    /**
     * A MbimRsrpSnrInfo element.
     */
    class RsrpSnrInfo {
        static $gtype: GObject.GType<RsrpSnrInfo>;

        // Own fields of Mbim.RsrpSnrInfo

        rsrp: number;
        snr: number;
        rsrp_threshold: number;
        snr_threshold: number;
        system_type: number;

        // Constructors of Mbim.RsrpSnrInfo

        constructor(
            properties?: Partial<{
                rsrp: number;
                snr: number;
                rsrp_threshold: number;
                snr_threshold: number;
                system_type: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.RsrpSnrInfo

        /**
         * Frees the memory allocated for the array of #MbimRsrpSnrInfo structs.
         * @param array a #NULL terminated array of #MbimRsrpSnrInfo structs.
         */
        static array_free(array: RsrpSnrInfoArray): void;
    }

    /**
     * A MbimSarConfigState element.
     */
    class SarConfigState {
        static $gtype: GObject.GType<SarConfigState>;

        // Own fields of Mbim.SarConfigState

        antenna_index: number;
        backoff_index: number;

        // Constructors of Mbim.SarConfigState

        constructor(
            properties?: Partial<{
                antenna_index: number;
                backoff_index: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.SarConfigState

        /**
         * Frees the memory allocated for the array of #MbimSarConfigState structs.
         * @param array a #NULL terminated array of #MbimSarConfigState structs.
         */
        static array_free(array: SarConfigStateArray): void;
    }

    /**
     * A MbimSlot element.
     */
    class Slot {
        static $gtype: GObject.GType<Slot>;

        // Own fields of Mbim.Slot

        slot: number;

        // Constructors of Mbim.Slot

        constructor(
            properties?: Partial<{
                slot: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.Slot

        /**
         * Frees the memory allocated for the array of #MbimSlot structs.
         * @param array a #NULL terminated array of #MbimSlot structs.
         */
        static array_free(array: SlotArray): void;
    }

    /**
     * A MbimSmsCdmaReadRecord element.
     */
    class SmsCdmaReadRecord {
        static $gtype: GObject.GType<SmsCdmaReadRecord>;

        // Own fields of Mbim.SmsCdmaReadRecord

        message_index: number;
        message_status: number;
        address: string;
        timestamp: string;
        encoding: number;
        language: number;
        encoded_message_size: number;
        encoded_message: number;
        encoded_message_size_in_characters: number;

        // Constructors of Mbim.SmsCdmaReadRecord

        constructor(
            properties?: Partial<{
                message_index: number;
                message_status: number;
                address: string;
                timestamp: string;
                encoding: number;
                language: number;
                encoded_message_size: number;
                encoded_message: number;
                encoded_message_size_in_characters: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.SmsCdmaReadRecord

        /**
         * Frees the memory allocated for the array of #MbimSmsCdmaReadRecord structs.
         * @param array a #NULL terminated array of #MbimSmsCdmaReadRecord structs.
         */
        static array_free(array: SmsCdmaReadRecordArray): void;
    }

    /**
     * A MbimSmsCdmaSendRecord element.
     */
    class SmsCdmaSendRecord {
        static $gtype: GObject.GType<SmsCdmaSendRecord>;

        // Own fields of Mbim.SmsCdmaSendRecord

        encoding: number;
        language: number;
        address: string;
        encoded_message_size: number;
        encoded_message: number;
        encoded_message_size_in_characters: number;

        // Constructors of Mbim.SmsCdmaSendRecord

        constructor(
            properties?: Partial<{
                encoding: number;
                language: number;
                address: string;
                encoded_message_size: number;
                encoded_message: number;
                encoded_message_size_in_characters: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.SmsCdmaSendRecord

        /**
         * Frees the memory allocated for the #MbimSmsCdmaSendRecord.
         */
        free(): void;
    }

    /**
     * A MbimSmsPduReadRecord element.
     */
    class SmsPduReadRecord {
        static $gtype: GObject.GType<SmsPduReadRecord>;

        // Own fields of Mbim.SmsPduReadRecord

        message_index: number;
        message_status: number;
        pdu_data_size: number;
        pdu_data: number;

        // Constructors of Mbim.SmsPduReadRecord

        constructor(
            properties?: Partial<{
                message_index: number;
                message_status: number;
                pdu_data_size: number;
                pdu_data: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.SmsPduReadRecord

        /**
         * Frees the memory allocated for the array of #MbimSmsPduReadRecord structs.
         * @param array a #NULL terminated array of #MbimSmsPduReadRecord structs.
         */
        static array_free(array: SmsPduReadRecordArray): void;
    }

    /**
     * A MbimSmsPduSendRecord element.
     */
    class SmsPduSendRecord {
        static $gtype: GObject.GType<SmsPduSendRecord>;

        // Own fields of Mbim.SmsPduSendRecord

        pdu_data_size: number;
        pdu_data: number;

        // Constructors of Mbim.SmsPduSendRecord

        constructor(
            properties?: Partial<{
                pdu_data_size: number;
                pdu_data: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.SmsPduSendRecord

        /**
         * Frees the memory allocated for the #MbimSmsPduSendRecord.
         */
        free(): void;
    }

    /**
     * A MbimTai element.
     */
    class Tai {
        static $gtype: GObject.GType<Tai>;

        // Own fields of Mbim.Tai

        plmn_mcc: number;
        plmn_mnc: number;
        tac: number;

        // Constructors of Mbim.Tai

        constructor(
            properties?: Partial<{
                plmn_mcc: number;
                plmn_mnc: number;
                tac: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Mbim.Tai

        /**
         * Frees the memory allocated for the #MbimTai.
         */
        free(): void;
    }

    /**
     * A MbimTerminalCapabilityInfo element.
     */
    class TerminalCapabilityInfo {
        static $gtype: GObject.GType<TerminalCapabilityInfo>;

        // Own fields of Mbim.TerminalCapabilityInfo

        terminal_capability_data_size: number;
        terminal_capability_data: number;

        // Constructors of Mbim.TerminalCapabilityInfo

        constructor(
            properties?: Partial<{
                terminal_capability_data_size: number;
                terminal_capability_data: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.TerminalCapabilityInfo

        /**
         * Frees the memory allocated for the array of #MbimTerminalCapabilityInfo structs.
         * @param array a #NULL terminated array of #MbimTerminalCapabilityInfo structs.
         */
        static array_free(array: TerminalCapabilityInfoArray): void;
    }

    /**
     * An opaque type representing a MBIM TLV.
     */
    class Tlv {
        static $gtype: GObject.GType<Tlv>;

        // Constructors of Mbim.Tlv

        constructor(type: TlvType, data: number, data_length: number);
        _init(...args: any[]): void;

        static ['new'](type: TlvType, data: number, data_length: number): Tlv;

        static string_new(str: string): Tlv;

        // Own methods of Mbim.Tlv

        /**
         * Create a #MbimTlv with the same contents as `self`.
         * @returns a newly created #MbimTlv, which should be freed with mbim_tlv_unref().
         */
        dup(): Tlv;
        /**
         * Gets the whole raw data buffer of the #MbimTlv.
         * @returns The raw data buffer, or #NULL if @error is set.
         */
        get_raw(): [number, number];
        /**
         * Gets the TLV raw data.
         * @returns The raw data buffer, or #NULL if empty.
         */
        get_tlv_data(): [number, number];
        /**
         * Gets the message type.
         * @returns a #MbimTlvType.
         */
        get_tlv_type(): TlvType;
        /**
         * Get an array of #guint16 values with the contents in the #MbimTlv.
         *
         * The method may return a successful return even with on empty arrays (i.e.
         * with `array_size` set to 0 and `array` set to %NULL).
         * @returns %TRUE if on success, %FALSE if @error is set.
         */
        guint16_array_get(): [boolean, number, number];
        /**
         * Atomically increments the reference count of `self` by one.
         * @returns the new reference to @self.
         */
        ref(): Tlv;
        /**
         * Get a string with the contents in the #MbimTlv.
         * @returns a newly created string, which should be freed with g_free(), or %NULL if @error is set.
         */
        string_get(): string;
        /**
         * Atomically decrements the reference count of `self` by one.
         * If the reference count drops to 0, `self` is completely disposed.
         */
        unref(): void;
        /**
         * Get the contents of a wake command TLV.
         *
         * The method may return a successful return even with on empty payload (i.e.
         * with `payload_size` set to 0 and `payload` set to %NULL).
         * @returns %TRUE if on success, %FALSE if @error is set.
         */
        wake_command_get(): [boolean, Uuid | null, number, number, number];
        /**
         * Get the contents of a wake packet TLV.
         * @returns %TRUE if on success, %FALSE if @error is set.
         */
        wake_packet_get(): [boolean, number, number, number, number];
    }

    /**
     * A MbimUiccApplication element.
     */
    class UiccApplication {
        static $gtype: GObject.GType<UiccApplication>;

        // Own fields of Mbim.UiccApplication

        application_type: number;
        application_id_size: number;
        application_id: number;
        application_name: string;
        pin_key_reference_count: number;
        pin_key_references_size: number;
        pin_key_references: number;

        // Constructors of Mbim.UiccApplication

        constructor(
            properties?: Partial<{
                application_type: number;
                application_id_size: number;
                application_id: number;
                application_name: string;
                pin_key_reference_count: number;
                pin_key_references_size: number;
                pin_key_references: number;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.UiccApplication

        /**
         * Frees the memory allocated for the array of #MbimUiccApplication structs.
         * @param array a #NULL terminated array of #MbimUiccApplication structs.
         */
        static array_free(array: UiccApplicationArray): void;
    }

    /**
     * A UUID as defined in MBIM.
     */
    class Uuid {
        static $gtype: GObject.GType<Uuid>;

        // Own fields of Mbim.Uuid

        a: Uint8Array;
        b: Uint8Array;
        c: Uint8Array;
        d: Uint8Array;
        e: Uint8Array;

        // Constructors of Mbim.Uuid

        constructor(
            properties?: Partial<{
                a: Uint8Array;
                b: Uint8Array;
                c: Uint8Array;
                d: Uint8Array;
                e: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;

        // Own static methods of Mbim.Uuid

        /**
         * Get the UUID corresponding to `context_type`.
         * @param context_type a #MbimContextType.
         */
        static from_context_type(context_type: ContextType): Uuid;
        /**
         * Fills in `uuid` from the printable representation give in `str`.
         *
         * Only ccepts `str` written with dashes separating items, e.g.:
         *  a289cc33-bcbb-8b4f-b6b0-133ec2aae6df
         * @param str a MBIM UUID.
         * @param uuid pointer to the target #MbimUuid.
         */
        static from_printable(str: string, uuid: Uuid): boolean;
        /**
         * Get the UUID corresponding to `service`.
         *
         * The `service` needs to be either a generic one (including #MBIM_SERVICE_INVALID)
         * or a custom registered one.
         * @param service a #MbimService.
         */
        static from_service(service: Service): Uuid;

        // Own methods of Mbim.Uuid

        /**
         * Compare two %MbimUuid values.
         * @param b a #MbimUuid.
         * @returns %TRUE if @a and @b are equal, %FALSE otherwise.
         */
        cmp(b: Uuid): boolean;
        /**
         * Get a string with the UUID.
         * @returns a newly allocated string, which should be freed with g_free().
         */
        get_printable(): string;
        /**
         * Get the context type corresponding to `uuid`.
         * @returns a #MbimContextType.
         */
        to_context_type(): ContextType;
        /**
         * Get the service corresponding to `uuid`.
         * @returns a #MbimService.
         */
        to_service(): Service;
    }

    type AtdsProviderArray = AtdsProvider;
    type CellInfoCdmaArray = CellInfoCdma;
    type CellInfoNeighboringGsmArray = CellInfoNeighboringGsm;
    type CellInfoNeighboringLteArray = CellInfoNeighboringLte;
    type CellInfoNeighboringNrArray = CellInfoNeighboringNr;
    type CellInfoNeighboringTdscdmaArray = CellInfoNeighboringTdscdma;
    type CellInfoNeighboringUmtsArray = CellInfoNeighboringUmts;
    type CellInfoServingNrArray = CellInfoServingNr;
    type DeprecatedCidBasicConnect = number;
    type DeprecatedCidMsBasicConnectExtensions = number;
    type DeprecatedNwError = number;
    type DeprecatedRegistrationFlag = number;
    type DeviceServiceElementArray = DeviceServiceElement;
    type EventEntryArray = EventEntry;
    type IPv4ElementArray = IPv4Element;
    type IPv6ElementArray = IPv6Element;
    type IntelRfimFrequencyValueArray = IntelRfimFrequencyValue;
    type LteAttachConfigurationArray = LteAttachConfiguration;
    type LteAttachStatus = DeprecatedLteAttachStatus;
    type PacketFilterArray = PacketFilter;
    type PacketFilterV3Array = PacketFilterV3;
    type PhonebookEntryArray = PhonebookEntry;
    type ProviderArray = Provider;
    type ProvisionedContextElementArray = ProvisionedContextElement;
    type ProvisionedContextElementV2Array = ProvisionedContextElementV2;
    type RsrpSnrInfoArray = RsrpSnrInfo;
    type SarConfigStateArray = SarConfigState;
    type SlotArray = Slot;
    type SmsCdmaReadRecordArray = SmsCdmaReadRecord;
    type SmsPduReadRecordArray = SmsPduReadRecord;
    type TerminalCapabilityInfoArray = TerminalCapabilityInfo;
    type UiccApplicationArray = UiccApplication;
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

export default Mbim;
// END
