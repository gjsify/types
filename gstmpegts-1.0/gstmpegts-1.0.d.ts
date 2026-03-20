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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstMpegts {
    /**
     * GstMpegts-1.0
     */

    /**
     * These values correspond to the registered descriptor type from
     * the various ATSC specifications.
     *
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum ATSCDescriptorType {
        STUFFING,
        AC3,
        CAPTION_SERVICE,
        CONTENT_ADVISORY,
        EXTENDED_CHANNEL_NAME,
        SERVICE_LOCATION,
        TIME_SHIFTED_SERVICE,
        COMPONENT_NAME,
        DCC_DEPARTING_REQUEST,
        DCC_ARRIVING_REQUEST,
        REDISTRIBUTION_CONTROL,
        GENRE,
        PRIVATE_INFORMATION,
        EAC3,
        ENHANCED_SIGNALING,
        DATA_SERVICE,
        PID_COUNT,
        DOWNLOAD_DESCRIPTOR,
        MULTIPROTOCOL_ENCAPSULATION,
        MODULE_LINK,
        CRC32,
        GROUP_LINK,
    }

    /**
     * Type of mpeg-ts streams for ATSC, as defined by the ATSC Code Points
     * Registry. For convenience, some stream types from %GstMpegtsScteStreamType
     * are also included.
     * @gir-type Enum
     * @since 1.20
     */
    enum ATSCStreamType {
        /**
         * DigiCipher II video | Identical to ITU-T Rec. H.262 | ISO/IEC 13818-2 Video
         */
        DCII_VIDEO,
        /**
         * ATSC A/53 Audio | AC-3
         */
        AUDIO_AC3,
        /**
         * SCTE-27 Subtitling
         */
        SUBTITLING,
        /**
         * SCTE-19 Isochronous data | Reserved
         */
        ISOCH_DATA,
        /**
         * SCTE-35 Splice Information Table
         */
        SIT,
        /**
         * E-AC-3 A/52:2018
         */
        AUDIO_EAC3,
        /**
         * E-AC-3 A/107 (ATSC 2.0)
         */
        AUDIO_DTS_HD,
    }

    /**
     * @gir-type Enum
     */
    enum AtscMGTTableType {
        EIT0,
        EIT127,
        ETT0,
        ETT127,
    }

    /**
     * @gir-type Enum
     */
    enum CableOuterFECScheme {
        UNDEFINED,
        NONE,
        RS_204_188,
    }

    /**
     * @gir-type Enum
     */
    enum ComponentStreamContent {
        MPEG2_VIDEO,
        MPEG1_LAYER2_AUDIO,
        TELETEXT_OR_SUBTITLE,
        AC_3,
        AVC,
        AAC,
        DTS,
        SRM_CPCM,
    }

    /**
     * @gir-type Enum
     */
    enum ContentNibbleHi {
        MOVIE_DRAMA,
        NEWS_CURRENT_AFFAIRS,
        SHOW_GAME_SHOW,
        SPORTS,
        CHILDREN_YOUTH_PROGRAM,
        MUSIC_BALLET_DANCE,
        ARTS_CULTURE,
        SOCIAL_POLITICAL_ECONOMICS,
        EDUCATION_SCIENCE_FACTUAL,
        LEISURE_HOBBIES,
        SPECIAL_CHARACTERISTICS,
    }

    /**
     * @gir-type Enum
     */
    enum DVBCodeRate {
        NONE,
        '1_2',
        '2_3',
        '3_4',
        '4_5',
        '5_6',
        '6_7',
        '7_8',
        '8_9',
        AUTO,
        '3_5',
        '9_10',
        '2_5',
    }

    /**
     * The type of {@link GstMpegts.Descriptor}
     *
     * These values correspond to the registered descriptor type from
     * the various DVB specifications.
     *
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum DVBDescriptorType {
        NETWORK_NAME,
        SERVICE_LIST,
        STUFFING,
        SATELLITE_DELIVERY_SYSTEM,
        CABLE_DELIVERY_SYSTEM,
        VBI_DATA,
        VBI_TELETEXT,
        BOUQUET_NAME,
        SERVICE,
        COUNTRY_AVAILABILITY,
        LINKAGE,
        NVOD_REFERENCE,
        TIME_SHIFTED_SERVICE,
        SHORT_EVENT,
        EXTENDED_EVENT,
        TIME_SHIFTED_EVENT,
        COMPONENT,
        MOSAIC,
        STREAM_IDENTIFIER,
        CA_IDENTIFIER,
        CONTENT,
        PARENTAL_RATING,
        TELETEXT,
        TELEPHONE,
        LOCAL_TIME_OFFSET,
        SUBTITLING,
        TERRESTRIAL_DELIVERY_SYSTEM,
        MULTILINGUAL_NETWORK_NAME,
        MULTILINGUAL_BOUQUET_NAME,
        MULTILINGUAL_SERVICE_NAME,
        MULTILINGUAL_COMPONENT,
        PRIVATE_DATA_SPECIFIER,
        SERVICE_MOVE,
        SHORT_SMOOTHING_BUFFER,
        FREQUENCY_LIST,
        /**
         * Partial Transport Stream descriptor. Only present in SIT Sections.
         *
         * See also: {@link GstMpegts.SectionType.SIT}, %GstMpegtsSIT
         */
        PARTIAL_TRANSPORT_STREAM,
        DATA_BROADCAST,
        SCRAMBLING,
        DATA_BROADCAST_ID,
        TRANSPORT_STREAM,
        DSNG,
        PDC,
        AC3,
        ANCILLARY_DATA,
        CELL_LIST,
        CELL_FREQUENCY_LINK,
        ANNOUNCEMENT_SUPPORT,
        APPLICATION_SIGNALLING,
        ADAPTATION_FIELD_DATA,
        SERVICE_IDENTIFIER,
        SERVICE_AVAILABILITY,
        DEFAULT_AUTHORITY,
        RELATED_CONTENT,
        TVA_ID,
        CONTENT_IDENTIFIER,
        TIMESLICE_FEC_IDENTIFIER,
        ECM_REPETITION_RATE,
        S2_SATELLITE_DELIVERY_SYSTEM,
        ENHANCED_AC3,
        DTS,
        AAC,
        XAIT_LOCATION,
        FTA_CONTENT_MANAGEMENT,
        EXTENSION,
    }

    /**
     * The type of {@link GstMpegts.Descriptor}
     *
     * These values correspond to the registered extended descriptor
     * type from the various DVB specifications.
     *
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum DVBExtendedDescriptorType {
        IMAGE_ICON,
        CPCM_DELIVERY_SIGNALLING,
        CP,
        CP_IDENTIFIER,
        T2_DELIVERY_SYSTEM,
        SH_DELIVERY_SYSTEM,
        SUPPLEMENTARY_AUDIO,
        NETWORK_CHANGE_NOTIFY,
        MESSAGE,
        TARGET_REGION,
        TARGET_REGION_NAME,
        SERVICE_RELOCATED,
        XAIT_PID,
        C2_DELIVERY_SYSTEM,
        DTS_HD_AUDIO_STREAM,
        DTS_NEUTRAL,
        VIDEO_DEPTH_RANGE,
        T2MI,
        URI_LINKAGE,
        AC4,
        /**
         * Provide all avaliable audio programme for user selection
         */
        AUDIO_PRESELECTION,
    }

    /**
     * @gir-type Enum
     */
    enum DVBLinkageHandOverType {
        RESERVED,
        IDENTICAL,
        LOCAL_VARIATION,
        ASSOCIATED,
    }

    /**
     * Linkage Type (EN 300 468 v.1.13.1)
     * @gir-type Enum
     */
    enum DVBLinkageType {
        RESERVED_00,
        INFORMATION,
        EPG,
        CA_REPLACEMENT,
        TS_CONTAINING_COMPLETE_SI,
        SERVICE_REPLACEMENT,
        DATA_BROADCAST,
        RCS_MAP,
        MOBILE_HAND_OVER,
        SYSTEM_SOFTWARE_UPDATE,
        TS_CONTAINING_SSU,
        IP_MAC_NOTIFICATION,
        TS_CONTAINING_INT,
        EVENT,
        EXTENDED_EVENT,
    }

    /**
     * @gir-type Enum
     */
    enum DVBScramblingModeType {
        RESERVED,
        CSA1,
        CSA2,
        CSA3_STANDARD,
        CSA3_MINIMAL_ENHANCED,
        CSA3_FULL_ENHANCED,
        CISSA,
        ATIS_0,
        ATIS_F,
    }

    /**
     * The type of service of a channel.
     *
     * As specified in Table 87 of ETSI EN 300 468 v1.13.1
     * @gir-type Enum
     */
    enum DVBServiceType {
        RESERVED_00,
        DIGITAL_TELEVISION,
        DIGITAL_RADIO_SOUND,
        TELETEXT,
        NVOD_REFERENCE,
        NVOD_TIME_SHIFTED,
        MOSAIC,
        FM_RADIO,
        DVB_SRM,
        RESERVED_09,
        ADVANCED_CODEC_DIGITAL_RADIO_SOUND,
        ADVANCED_CODEC_MOSAIC,
        DATA_BROADCAST,
        RESERVED_0D_COMMON_INTERFACE,
        RCS_MAP,
        RCS_FLS,
        DVB_MHP,
        MPEG2_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_SD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_SD_NVOD_REFERENCE,
        ADVANCED_CODEC_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_HD_NVOD_REFERENCE,
        ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION,
        ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED,
        ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE,
        RESERVED_FF,
    }

    /**
     * The type of teletext page.
     *
     * As specified in Table 100 of ETSI EN 300 468 v1.13.1
     * @gir-type Enum
     */
    enum DVBTeletextType {
        NITIAL_PAGE,
        UBTITLE_PAGE,
        DDITIONAL_INFO_PAGE,
        ROGRAMME_SCHEDULE_PAGE,
        EARING_IMPAIRED_PAGE,
    }

    /**
     * The type of {@link GstMpegts.Descriptor}
     *
     * These values correspond to the registered descriptor type from
     * the base MPEG-TS specifications (ITU H.222.0 | ISO/IEC 13818-1).
     *
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum DescriptorType {
        RESERVED_00,
        RESERVED_01,
        VIDEO_STREAM,
        AUDIO_STREAM,
        HIERARCHY,
        REGISTRATION,
        DATA_STREAM_ALIGNMENT,
        TARGET_BACKGROUND_GRID,
        VIDEO_WINDOW,
        CA,
        ISO_639_LANGUAGE,
        SYSTEM_CLOCK,
        MULTIPLEX_BUFFER_UTILISATION,
        COPYRIGHT,
        MAXIMUM_BITRATE,
        PRIVATE_DATA_INDICATOR,
        SMOOTHING_BUFFER,
        STD,
        IBP,
        DSMCC_CAROUSEL_IDENTIFIER,
        DSMCC_ASSOCIATION_TAG,
        DSMCC_DEFERRED_ASSOCIATION_TAG,
        DSMCC_NPT_REFERENCE,
        DSMCC_NPT_ENDPOINT,
        DSMCC_STREAM_MODE,
        DSMCC_STREAM_EVENT,
        MPEG4_VIDEO,
        MPEG4_AUDIO,
        IOD,
        SL,
        FMC,
        EXTERNAL_ES_ID,
        MUX_CODE,
        FMX_BUFFER_SIZE,
        MULTIPLEX_BUFFER,
        CONTENT_LABELING,
        METADATA_POINTER,
        METADATA,
        METADATA_STD,
        AVC_VIDEO,
        IPMP,
        AVC_TIMING_AND_HRD,
        MPEG2_AAC_AUDIO,
        FLEX_MUX_TIMING,
        MPEG4_TEXT,
        MPEG4_AUDIO_EXTENSION,
        AUXILIARY_VIDEO_STREAM,
        SVC_EXTENSION,
        MVC_EXTENSION,
        J2K_VIDEO,
        MVC_OPERATION_POINT,
        MPEG2_STEREOSCOPIC_VIDEO_FORMAT,
        STEREOSCOPIC_PROGRAM_INFO,
        STEREOSCOPIC_VIDEO_INFO,
        /**
         * Extension Descriptor.
         */
        EXTENSION,
    }

    /**
     * The type of an extended descriptor
     *
     * The values correpond to the registered extended descriptor types from the
     * base ISO 13818 / ITU H.222.0 specifications
     *
     * Consult the specification for more details
     * @gir-type Enum
     * @since 1.26
     */
    enum ExtendedDescriptorType {
        MTS_DESC_EXT_JXS_VIDEO,
    }

    /**
     * Type of mpeg-ts streams for Blu-ray formats. To be matched with the
     * stream-type of a {@link GstMpegts.Section}.
     * @gir-type Enum
     * @since 1.20
     */
    enum HdmvStreamType {
        AUDIO_LPCM,
        AUDIO_AC3,
        AUDIO_DTS,
        AUDIO_AC3_TRUE_HD,
        AUDIO_AC3_PLUS,
        AUDIO_DTS_HD,
        AUDIO_DTS_HD_MASTER_AUDIO,
        AUDIO_EAC3,
        SUBPICTURE_PGS,
        IGS,
        SUBTITLE,
        AUDIO_AC3_PLUS_SECONDARY,
        AUDIO_DTS_HD_SECONDARY,
    }

    /**
     * These values correspond to the registered descriptor type from
     * the various ISDB specifications.
     *
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum ISDBDescriptorType {
        HIERARCHICAL_TRANSMISSION,
        DIGITAL_COPY_CONTROL,
        NETWORK_IDENTIFICATION,
        PARTIAL_TS_TIME,
        AUDIO_COMPONENT,
        HYPERLINK,
        TARGET_REGION,
        DATA_CONTENT,
        VIDEO_DECODE_CONTROL,
        DOWNLOAD_CONTENT,
        CA_EMM_TS,
        CA_CONTRACT_INFORMATION,
        CA_SERVICE,
        TS_INFORMATION,
        EXTENDED_BROADCASTER,
        LOGO_TRANSMISSION,
        BASIC_LOCAL_EVENT,
        REFERENCE,
        NODE_RELATION,
        SHORT_NODE_INFORMATION,
        STC_REFERENCE,
        SERIES,
        EVENT_GROUP,
        SI_PARAMETER,
        BROADCASTER_NAME,
        COMPONENT_GROUP,
        SI_PRIME_TS,
        BOARD_INFORMATION,
        LDT_LINKAGE,
        CONNECTED_TRANSMISSION,
        CONTENT_AVAILABILITY,
        SERVICE_GROUP,
    }

    /**
     * @gir-type Enum
     */
    enum Iso639AudioType {
        UNDEFINED,
        CLEAN_EFFECTS,
        HEARING_IMPAIRED,
        VISUAL_IMPAIRED_COMMENTARY,
    }

    /**
     * `GST_MPEGTS_METADATA_APPLICATION_FORMAT_ISAN` ISO 15706-1 (ISAN) encoded in its binary form
     * `GST_MPEGTS_METADATA_APPLICATION_FORMAT_VSAN` ISO 15706-2 (V-ISAN) encoded in its binary form
     * `GST_MPEGTS_METADATA_APPLICATION_FORMAT_IDENTIFIER_FIELD` Defined by the metadata_application_format_identifier field
     *
     * metadata_application_format valid values. See ISO/IEC 13818-1:2023(E) Table 2-84.
     * @gir-type Enum
     * @since 1.26
     */
    enum MetadataApplicationFormat {
        ISAN,
        VSAN,
        IDENTIFIER_FIELD,
    }

    /**
     * metadata_descriptor metadata_format valid values. See ISO/IEC 13818-1:2018(E) Table 2-85.
     * @gir-type Enum
     * @since 1.24
     */
    enum MetadataFormat {
        /**
         * ISO/IEC 15938-1 TeM.
         */
        TEM,
        /**
         * ISO/IEC 15938-1 BiM.
         */
        BIM,
        /**
         * Defined by metadata application format.
         */
        APPLICATION_FORMAT,
        /**
         * Defined by metadata_format_identifier field.
         */
        IDENTIFIER_FIELD,
    }

    /**
     * The type of {@link GstMpegts.Descriptor}
     *
     * These values correspond to miscellaneous descriptor types that are
     * not yet identified from known specifications.
     * @gir-type Enum
     */
    enum MiscDescriptorType {
        MTS_DESC_DTG_LOGICAL_CHANNEL,
    }

    /**
     * @gir-type Enum
     */
    enum ModulationType {
        QPSK,
        QAM_16,
        QAM_32,
        QAM_64,
        QAM_128,
        QAM_256,
        QAM_AUTO,
        VSB_8,
        VSB_16,
        PSK_8,
        APSK_16,
        APSK_32,
        DQPSK,
        QAM_4_NR_,
        NONE,
    }

    /**
     * Running status of a service.
     *
     * Corresponds to table 6 of ETSI EN 300 468 (v1.13.0)
     * @gir-type Enum
     */
    enum RunningStatus {
        UNDEFINED,
        NOT_RUNNING,
        STARTS_IN_FEW_SECONDS,
        PAUSING,
        RUNNING,
        OFF_AIR,
    }

    /**
     * These values correspond to the ones defined by SCTE (amongst other in ANSI/SCTE 57)
     * @gir-type Enum
     * @since 1.20
     */
    enum SCTEDescriptorType {
        STUFFING,
        AC3,
        FRAME_RATE,
        EXTENDED_VIDEO,
        COMPONENT_NAME,
        FREQUENCY_SPEC,
        MODULATION_PARAMS,
        TRANSPORT_STREAM_ID,
    }

    /**
     * @gir-type Enum
     */
    enum SCTESpliceCommandType {
        NULL,
        SCHEDULE,
        INSERT,
        TIME,
        BANDWIDTH,
        PRIVATE,
    }

    /**
     * @gir-type Enum
     */
    enum SCTESpliceDescriptor {
        AVAIL,
        DTMF,
        SEGMENTATION,
        TIME,
        AUDIO,
    }

    /**
     * @gir-type Enum
     */
    enum SatellitePolarizationType {
        LINEAR_HORIZONTAL,
        LINEAR_VERTICAL,
        CIRCULAR_LEFT,
        CIRCULAR_RIGHT,
    }

    /**
     * @gir-type Struct
     */
    class SatelliteRolloff {
        static $gtype: GObject.GType<SatelliteRolloff>;

        // Static fields

        static '35': number;
        static '20': number;
        static '25': number;
        static RESERVED: number;
        static AUTO: number;
    }

    /**
     * Type of mpeg-ts streams for SCTE. Most users would want to use the
     * {@link GstMpegts.ATSCStreamType} instead since it also covers these stream types
     * @gir-type Enum
     */
    enum ScteStreamType {
        /**
         * SCTE-27 Subtitling
         */
        SUBTITLING,
        /**
         * SCTE-19 Isochronous data
         */
        ISOCH_DATA,
        /**
         * SCTE-35 Splice Information Table
         */
        SIT,
        /**
         * SCTE-07 Data Service or
         * Network Resource Table
         */
        DST_NRT,
        /**
         * Type B - DSM-CC Data Carousel
         * [IEC 13818-6])
         */
        DSMCC_DCB,
        /**
         * Enhanced Television Application
         * Signaling (OC-SP-ETV-AM1.0.1-120614)
         */
        SIGNALING,
        /**
         * SCTE-07 Synchronous data
         */
        SYNC_DATA,
        /**
         * SCTE-53 Asynchronous data
         */
        ASYNC_DATA,
    }

    /**
     * Values for a {@link GstMpegts.Section} table_id.
     *
     * These are the registered ATSC section `table_id` variants. Unless specified
     * otherwise, they are defined in the "ATSC A/65" specification.
     *
     * see also: {@link GstMpegts.SectionTableID} and other variants.
     * @gir-type Enum
     */
    enum SectionATSCTableID {
        /**
         * Master Guide Table (MGT)
         */
        MASTER_GUIDE,
        /**
         * Terrestrial Virtual Channel Table (TVCT)
         */
        TERRESTRIAL_VIRTUAL_CHANNEL,
        /**
         * Cable Virtual Channel Table (CVCT)
         */
        CABLE_VIRTUAL_CHANNEL,
        /**
         * Rating Region Table (RRT)
         */
        RATING_REGION,
        /**
         * Event Information Table (EIT)
         */
        EVENT_INFORMATION,
        /**
         * Extended Text Table (ETT)
         */
        CHANNEL_OR_EVENT_EXTENDED_TEXT,
        /**
         * System Time Table (STT)
         */
        SYSTEM_TIME,
        /**
         * A/90: Data Event Table (DET)
         */
        DATA_EVENT,
        /**
         * A/90: Data Service Table (DST)
         */
        DATA_SERVICE,
        /**
         * A/57B: Program Identifier Table.
         */
        PROGRAM_IDENTIFIER,
        /**
         * A/90: Network Resources Table (NRT)
         */
        NETWORK_RESOURCE,
        /**
         * A/90: Long Term Service Table (LTST)
         */
        LONG_TERM_SERVICE,
        /**
         * Directed Channel Change Table (DCCT)
         */
        DIRECTED_CHANNEL_CHANGE,
        /**
         * Directed Channel Change Selection Code Table (DCCSCT)
         */
        DIRECTED_CHANNEL_CHANGE_SECTION_CODE,
        AGGREGATE_EVENT_INFORMATION,
        AGGREGATE_EXTENDED_TEXT,
        AGGREGATE_DATA_EVENT,
        /**
         * A/81: Satellite Virtual Channel Table
         */
        SATELLITE_VIRTUAL_CHANNEL,
    }

    /**
     * Values for a {@link GstMpegts.Section} table_id.
     *
     * These are the registered DVB table_id variants. Unless specified otherwise,
     * they come from the DVB Specification for SI (ETSI EN 300 468).
     *
     * see also: {@link GstMpegts.SectionTableID}
     * @gir-type Enum
     */
    enum SectionDVBTableID {
        /**
         * Network Information Table (NIT), Actual Network
         */
        NETWORK_INFORMATION_ACTUAL_NETWORK,
        /**
         * Network Information Table (NIT), Other Network
         */
        NETWORK_INFORMATION_OTHER_NETWORK,
        /**
         * Service Description Table (SDT), Actual Transport Stream
         */
        SERVICE_DESCRIPTION_ACTUAL_TS,
        /**
         * Service Description Table (SDT), Other Transport Stream
         */
        SERVICE_DESCRIPTION_OTHER_TS,
        /**
         * Bouquet Association Table (BAT)
         */
        BOUQUET_ASSOCIATION,
        /**
         * ETSI TS 102 006: Update Notification Table (UNT)
         */
        UPDATE_NOTIFICATION,
        /**
         * ETSI EN 303 560: Downloadable Font Info
         */
        DOWNLOADABLE_FONT_INFO,
        /**
         * Event Information Table (EIT), Actual Transport Stream, present/following
         */
        EVENT_INFORMATION_ACTUAL_TS_PRESENT,
        /**
         * Event Information Table (EIT), Other Transport Stream, present/following
         */
        EVENT_INFORMATION_OTHER_TS_PRESENT,
        /**
         * Event Information Table (EIT), Actual Transport Stream, Schedule (first)
         */
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1,
        /**
         * Event Information Table (EIT), Actual Transport Stream, Schedule (last)
         */
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N,
        /**
         * Event Information Table (EIT), Other Transport Stream, Schedule (first)
         */
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_1,
        /**
         * Event Information Table (EIT), Other Transport Stream, Schedule (last)
         */
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_N,
        /**
         * Time Date Table (TDT)
         */
        TIME_DATE,
        /**
         * Running Status Table (RST)
         */
        RUNNING_STATUS,
        /**
         * Stuffing Table (ST)
         */
        STUFFING,
        /**
         * Time Offset Table (TOT)
         */
        TIME_OFFSET,
        /**
         * ETSI TS 102 323: Application Information Table (AIT)
         */
        APPLICATION_INFORMATION_TABLE,
        /**
         * ETSI TS 102 323: Container Section
         */
        CONTAINER,
        /**
         * ETSI TS 102 323: Related Content Table (RCT)
         */
        RELATED_CONTENT,
        /**
         * ETSI TS 102 323: Content Identifier Table (CIT)
         */
        CONTENT_IDENTIFIER,
        /**
         * ETSI TS 301 192: MPE-FEC Section
         */
        MPE_FEC,
        /**
         * ETSI 103 323: Resolution Provider Notification Table (RNT)
         */
        RESOLUTION_NOTIFICATION,
        /**
         * ETSI TS 102 772: MPE-IFEC Section
         */
        MPE_IFEC,
        /**
         * ETSI TS 102 809: Protection Message Section
         */
        PROTECTION_MESSAGE,
        /**
         * Discontinuity Information Table (DIT)
         */
        DISCONTINUITY_INFORMATION,
        /**
         * Selection Information Table (SIT)
         */
        SELECTION_INFORMATION,
        /**
         * ETSI TR 289: CA Message Table (CMT): ECM 0
         */
        CA_MESSAGE_ECM_0,
        /**
         * ETSI TR 289: CA Message Table (CMT): ECM 1
         */
        CA_MESSAGE_ECM_1,
        /**
         * ETSI TR 289: CA Message Table (CMT): CA System Private (First)
         */
        CA_MESSAGE_SYSTEM_PRIVATE_1,
        /**
         * ETSI TR 289: CA Message Table (CMT): CA System Private (Last)
         */
        CA_MESSAGE_SYSTEM_PRIVATE_N,
        SCT,
        FCT,
        TCT,
        SPT,
        CMT,
        TBTP,
        PCR_PACKET_PAYLOAD,
        TRANSMISSION_MODE_SUPPORT_PAYLOAD,
        TIM,
        LL_FEC_PARITY_DATA_TABLE,
    }

    /**
     * Values for a {@link GstMpegts.Section} table_id.
     *
     * These are the registered SCTE table_id variants.
     *
     * see also: {@link GstMpegts.SectionTableID}
     * @gir-type Enum
     */
    enum SectionSCTETableID {
        /**
         * SCTE-18 Emergency Alert System
         */
        EAS,
        /**
         * CL-SP-ETV-AM 1.0.1 EBIF message
         */
        EBIF,
        RESERVED,
        /**
         * CL-SP-ETV-AM 1.0.1 EBIF Int. Signaling Sect.
         */
        EISS,
        /**
         * CL-SP-ETV-AM 1.0.1 DSMCC DII message
         */
        DII,
        /**
         * CL-SP-ETV-AM 1.0.1 DSMCC Data Download Block
         */
        DDB,
        /**
         * SCTE-35 splice information is carried in a
         * section stream on a separate PID in the program’s Map Table (PMT) allowing
         * Splice Event notifications to remain associated with the program and pass
         * through multiplexers.
         */
        SPLICE,
    }

    /**
     * Values for a {@link GstMpegts.Section} table_id
     *
     * These are the registered ITU H.222.0 | ISO/IEC 13818-1 table_id variants.
     *
     * see also {@link GstMpegts.SectionATSCTableID}, {@link GstMpegts.SectionDVBTableID}, and
     * {@link GstMpegts.SectionSCTETableID}
     * @gir-type Enum
     */
    enum SectionTableID {
        /**
         * Program Association Table (PAT)
         */
        PROGRAM_ASSOCIATION,
        /**
         * Conditional Access Table (CAT)
         */
        CONDITIONAL_ACCESS,
        /**
         * Program Map Table (PMT)
         */
        TS_PROGRAM_MAP,
        /**
         * Transport Stream Description Table
         */
        TS_DESCRIPTION,
        /**
         * ISO/IEC 14496 Scene Description Table
         */
        '14496_SCENE_DESCRIPTION',
        /**
         * ISO/IEC 14496 Object Descriptor Table
         */
        '14496_OBJET_DESCRIPTOR',
        /**
         * Metadata Section
         */
        METADATA,
        /**
         * IPMP Control Information
         */
        IPMP_CONTROL_INFORMATION,
        /**
         * ISO/IEC 14496 Section.
         */
        '14496_SECTION',
        /**
         * ISO/IEC 23001-11 (Green Access Unit) Section.
         */
        '23001_11_SECTION',
        /**
         * ISO/ISO 23001-10 (Quality Access Unit) Section.
         */
        '23001_10_SECTION',
        /**
         * DSM-CC Multi-Protocol Encapsulated (MPE) Data
         */
        DSM_CC_MULTIPROTO_ENCAPSULATED_DATA,
        /**
         * DSM-CC U-N Messages
         */
        DSM_CC_U_N_MESSAGES,
        /**
         * DSM-CC Download Data Messages
         */
        DSM_CC_DOWNLOAD_DATA_MESSAGES,
        /**
         * DSM-CC Stream Descriptors
         */
        DSM_CC_STREAM_DESCRIPTORS,
        /**
         * DSM-CC Private Data
         */
        DSM_CC_PRIVATE_DATA,
        /**
         * DSM-CC Addressable Section
         */
        DSM_CC_ADDRESSABLE_SECTIONS,
        /**
         * Unset section table_id (value is forbidden to use in actual sections)
         */
        UNSET,
    }

    /**
     * Types of {@link GstMpegts.Section} that the library handles. This covers all the
     * MPEG-TS and derivate specification that the library can properly identify and
     * use.
     * @gir-type Enum
     */
    enum SectionType {
        /**
         * Unknown section type
         */
        UNKNOWN,
        /**
         * Program Association Table (ISO/IEC 13818-1)
         */
        PAT,
        /**
         * Program Map Table (ISO/IEC 13818-1)
         */
        PMT,
        /**
         * Conditional Access Table (ISO/IEC 13818-1)
         */
        CAT,
        /**
         * Transport Stream Description Table (ISO/IEC 13818-1)
         */
        TSDT,
        /**
         * Event Information Table (EN 300 468)
         */
        EIT,
        /**
         * Network Information Table (ISO/IEC 13818-1 / EN 300 468)
         */
        NIT,
        /**
         * Bouquet Association Table ((EN 300 468)
         */
        BAT,
        /**
         * Service Description Table (EN 300 468)
         */
        SDT,
        /**
         * Time and Date Table (EN 300 468)
         */
        TDT,
        /**
         * Time Offset Table (EN 300 468)
         */
        TOT,
        /**
         * Selection Information Table (EN 300 468)
         */
        SIT,
        /**
         * ATSC Terrestrial Virtual Channel Table (A65)
         */
        ATSC_TVCT,
        /**
         * ATSC Cable Virtual Channel Table (A65)
         */
        ATSC_CVCT,
        /**
         * ATSC Master Guide Table (A65)
         */
        ATSC_MGT,
        /**
         * ATSC Extended Text Table (A65)
         */
        ATSC_ETT,
        /**
         * ATSC Event Information Table (A65)
         */
        ATSC_EIT,
        /**
         * ATSC System Time Table (A65)
         */
        ATSC_STT,
        /**
         * ATSC Rating Region Table (A65)
         */
        ATSC_RRT,
        /**
         * SCTE Splice Information Table (SCTE-35)
         */
        SCTE_SIT,
    }

    /**
     * Type of MPEG-TS stream type.
     *
     * These values correspond to the base standard registered types. Depending
     * on the variant of mpeg-ts being used (Bluray, ATSC, DVB, ...), other
     * types might also be used, but will not conflict with these.
     *
     * Corresponds to table 2-34 of ITU H.222.0 | ISO/IEC 13818-1
     * @gir-type Enum
     */
    enum StreamType {
        /**
         * ITU-T | ISO/IEC Reserved
         */
        RESERVED_00,
        /**
         * ISO/IEC 11172-2 Video (i.e. MPEG-1 Video)
         */
        VIDEO_MPEG1,
        /**
         * Rec. ITU-T H.262 | ISO/IEC 13818-2
         *       Video or ISO/IEC 11172-2 constrained parameter video stream (i.e.
         *       MPEG-2 Video)
         */
        VIDEO_MPEG2,
        /**
         * ISO/IEC 11172-3 Audio
         */
        AUDIO_MPEG1,
        /**
         * ISO/IEC 13818-3 Audio
         */
        AUDIO_MPEG2,
        /**
         * private sections
         */
        PRIVATE_SECTIONS,
        /**
         * PES packets containing private data
         */
        PRIVATE_PES_PACKETS,
        /**
         * ISO/IEC 13522 MHEG
         */
        MHEG,
        /**
         * Annex A DSM-CC
         */
        DSM_CC,
        /**
         * Rec. ITU-T H.222.1
         */
        H_222_1,
        /**
         * ISO/IEC 13818-6 type A
         */
        DSMCC_A,
        /**
         * ISO/IEC 13818-6 type B
         */
        DSMCC_B,
        /**
         * ISO/IEC 13818-6 type C
         */
        DSMCC_C,
        /**
         * ISO/IEC 13818-6 type D
         */
        DSMCC_D,
        /**
         * auxiliary streams
         */
        AUXILIARY,
        /**
         * ISO/IEC 13818-7 Audio (AAC) with ADTS
         *       transport syntax
         */
        AUDIO_AAC_ADTS,
        /**
         * ISO/IEC 14496-2 Visual (MPEG-4 Video)
         */
        VIDEO_MPEG4,
        /**
         * ISO/IEC 14496-3 Audio (AAC) with the LATM
         *       transport syntax as defined in ISO/IEC 14496-3
         */
        AUDIO_AAC_LATM,
        /**
         * ISO/IEC 14496-1
         *       SL-packetized stream or FlexMux stream carried in PES packets
         */
        SL_FLEXMUX_PES_PACKETS,
        /**
         * ISO/IEC 14496-1 SL-packetized
         *       stream or FlexMux stream carried in ISO/IEC 14496_sections
         */
        SL_FLEXMUX_SECTIONS,
        /**
         * ISO/IEC 13818-6 Synchronized
         *       Download Protocol
         */
        SYNCHRONIZED_DOWNLOAD,
        /**
         * Metadata carried in PES packets
         */
        METADATA_PES_PACKETS,
        /**
         * Metadata carried in metadata_sections
         */
        METADATA_SECTIONS,
        /**
         * Metadata carried in ISO/IEC
         *       13818-6 Data Carousel
         */
        METADATA_DATA_CAROUSEL,
        /**
         * Metadata carried in
         *       ISO/IEC 13818-6 Object Carousel
         */
        METADATA_OBJECT_CAROUSEL,
        /**
         * Metadata carried in
         *       ISO/IEC 13818-6 Synchronized Download Protocol
         */
        METADATA_SYNCHRONIZED_DOWNLOAD,
        /**
         * IPMP stream (defined in ISO/IEC 13818-11,
         *       MPEG-2 IPMP)
         */
        MPEG2_IPMP,
        /**
         * AVC video stream conforming to one or
         * more profiles defined in Annex A of Rec. ITU-T H.264 | ISO/IEC 14496-10 or
         * AVC video sub-bitstream of SVC as defined in 2.1.78 or MVC base view
         * sub-bitstream, as defined in 2.1.85, or AVC video sub-bitstream of MVC, as
         * defined in 2.1.88
         */
        VIDEO_H264,
        /**
         * ISO/IEC 14496-3 (AAC) Audio, without
         *       using any additional transport syntax, such as DST, ALS and SLS
         */
        AUDIO_AAC_CLEAN,
        /**
         * ISO/IEC 14496-17 Text
         */
        MPEG4_TIMED_TEXT,
        /**
         * Auxiliary video stream as defined in
         * ISO/IEC 23002-3
         */
        VIDEO_RVC,
        /**
         * SVC video sub-bitstream
         * of an AVC video stream conforming to one or more profiles defined in Annex G
         * of Rec. ITU-T H.264 | ISO/IEC 14496-10
         */
        VIDEO_H264_SVC_SUB_BITSTREAM,
        /**
         * MVC video sub-bitstream
         * of an AVC video stream conforming to one or more profiles defined in Annex H
         * of Rec. ITU-T H.264 | ISO/IEC 14496-10
         */
        VIDEO_H264_MVC_SUB_BITSTREAM,
        /**
         * Video stream conforming to one or more
         *       profiles as defined in Rec. ITU-T T.800 | ISO/IEC 15444-1 (i.e. JPEG 2000)
         */
        VIDEO_JP2K,
        /**
         * Additional view
         * Rec. ITU-T H.262 | ISO/IEC 13818-2 video stream for service-compatible
         * stereoscopic 3D services
         */
        VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW,
        /**
         * Additional view
         * Rec. ITU-T H.264 | ISO/IEC 14496-10 video stream conforming to one or more
         * profiles defined in Annex A for service-compatible stereoscopic 3D services
         */
        VIDEO_H264_STEREO_ADDITIONAL_VIEW,
        /**
         * Rec. ITU-T H.265 | ISO/IEC 23008-2 video
         *      stream or an HEVC temporal video sub-bitstream
         */
        VIDEO_HEVC,
        /**
         * JPEG-XS stream type
         */
        VIDEO_JPEG_XS,
        /**
         * VVC/H.266 video stream type
         */
        VIDEO_VVC,
        /**
         * IPMP stream
         */
        IPMP_STREAM,
        /**
         * User Private stream id (used for VC-1) as defined by SMPTE RP227.
         */
        USER_PRIVATE_EA,
    }

    /**
     * @gir-type Enum
     */
    enum TerrestrialGuardInterval {
        '1_32',
        '1_16',
        '1_8',
        '1_4',
        AUTO,
        '1_128',
        '19_128',
        '19_256',
        PN420,
        PN595,
        PN945,
    }

    /**
     * @gir-type Struct
     */
    class TerrestrialHierarchy {
        static $gtype: GObject.GType<TerrestrialHierarchy>;

        // Static fields

        static NONE: number;
        static '1': number;
        static '2': number;
        static '4': number;
        static AUTO: number;
    }

    /**
     * @gir-type Enum
     */
    enum TerrestrialTransmissionMode {
        '2K',
        '8K',
        AUTO,
        '4K',
        '1K',
        '16K',
        '32K',
        C1,
        C3780,
    }

    /**
     * Creates and adds a {@link GstMpegts.PESMetadataMeta} to a `buffer`.
     * @param buffer a {@link Gst.Buffer}
     * @returns a newly created {@link GstMpegts.PESMetadataMeta}
     * @since 1.24
     */
    function buffer_add_mpegts_pes_metadata_meta(buffer: Gst.Buffer): PESMetadataMeta;
    /**
     * Creates a {@link GstMpegts.Descriptor} with custom `tag` and `data`
     * @param tag descriptor tag
     * @param data descriptor data (after tag and length field)
     * @returns {@link GstMpegts.Descriptor}, or `null` if input is invalid
     */
    function descriptor_from_custom(tag: number, data: Uint8Array | string): Descriptor | null;
    /**
     * Creates a {@link GstMpegts.Descriptor} with custom `tag`, `tag_extension` and `data`
     * @param tag descriptor tag
     * @param tag_extension descriptor tag extension
     * @param data descriptor data (after tag and length field)
     * @returns {@link GstMpegts.Descriptor}
     * @since 1.20
     */
    function descriptor_from_custom_with_extension(
        tag: number,
        tag_extension: number,
        data: Uint8Array | string,
    ): Descriptor;
    /**
     * Creates a {@link GstMpegts.Descriptor} to be a {@link GstMpegts.DVBDescriptorType.NETWORK_NAME},
     * with the network name `name`. The data field of the {@link GstMpegts.Descriptor}
     * will be allocated, and transferred to the caller.
     * @param name the network name to set
     * @returns the {@link GstMpegts.Descriptor} or `null` on failure.
     */
    function descriptor_from_dvb_network_name(name: string): Descriptor | null;
    /**
     * Fills a {@link GstMpegts.Descriptor} to be a {@link GstMpegts.DVBDescriptorType.SERVICE}.
     * The data field of the {@link GstMpegts.Descriptor} will be allocated,
     * and transferred to the caller.
     * @param service_type Service type defined as a {@link GstMpegts.DVBServiceType}
     * @param service_name Name of the service
     * @param service_provider Name of the service provider
     * @returns the {@link GstMpegts.Descriptor} or `null` on failure
     */
    function descriptor_from_dvb_service(
        service_type: DVBServiceType | null,
        service_name?: string | null,
        service_provider?: string | null,
    ): Descriptor | null;
    /**
     * @param lang a string containing the ISO639 language
     * @param type subtitling type
     * @param composition composition page id
     * @param ancillary ancillary page id
     */
    function descriptor_from_dvb_subtitling(
        lang: string,
        type: number,
        composition: number,
        ancillary: number,
    ): Descriptor;
    /**
     * Creates a {@link GstMpegts.DescriptorType.ISO_639_LANGUAGE} {@link GstMpegts.Descriptor} with
     * a single language
     * @param language ISO-639-2 language 3-char code
     * @returns {@link GstMpegts.Descriptor}, `null` on failure
     */
    function descriptor_from_iso_639_language(language: string): Descriptor;
    /**
     * Create a new {@link GstMpegts.Descriptor} based on the information in `jpegxs`
     * @param jpegxs A {@link GstMpegts.JpegXsDescriptor}
     * @returns The {@link GstMpegts.Descriptor}
     * @since 1.26
     */
    function descriptor_from_jpeg_xs(jpegxs: JpegXsDescriptor): Descriptor;
    /**
     * @param metadata_descriptor
     * @since 1.26
     */
    function descriptor_from_metadata(metadata_descriptor: MetadataDescriptor): Descriptor;
    /**
     * @param metadata_pointer_descriptor a {@link GstMpegts.MetadataPointerDescriptor}
     * @returns a {@link GstMpegts.Descriptor} from the metadata pointer descriptor.
     * @since 1.26
     */
    function descriptor_from_metadata_pointer(metadata_pointer_descriptor: MetadataPointerDescriptor): Descriptor;
    /**
     * Creates a {@link GstMpegts.DescriptorType.REGISTRATION} {@link GstMpegts.Descriptor}
     * @param format_identifier a 4 character format identifier string
     * @param additional_info pointer to optional additional info
     * @returns {@link GstMpegts.Descriptor}, `null` on failure
     */
    function descriptor_from_registration(format_identifier: string, additional_info?: Uint8Array | null): Descriptor;
    /**
     * @param source
     * @since 1.20
     */
    function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
    /**
     * @param source
     * @since 1.20
     */
    function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;
    /**
     * @param source
     */
    function dvb_component_descriptor_free(source: ComponentDescriptor): void;
    /**
     * Creates a new {@link Gst.Event} for a {@link GstMpegts.Section}.
     * @param section The {@link GstMpegts.Section} to put in a message
     * @returns The new custom {@link Gst.Event}.
     * @since 1.20
     */
    function event_new_mpegts_section(section: Section): Gst.Event;
    /**
     * Extracts the {@link GstMpegts.Section} contained in the `event` {@link Gst.Event}
     * @param event {@link Gst.Event} containing a {@link GstMpegts.Section}
     * @returns The extracted {@link GstMpegts.Section} , or `null` if the event did not contain a valid {@link GstMpegts.Section}.
     */
    function event_parse_mpegts_section(event: Gst.Event): Section | null;
    /**
     * Finds the first descriptor of type `tag` in the array.
     *
     * Note: To look for descriptors that can be present more than once in an
     * array of descriptors, iterate the {@link GLib.Array} manually.
     * @param descriptors an array of {@link GstMpegts.Descriptor}
     * @param tag the tag to look for
     * @returns the first descriptor matching `tag`, else `null`.
     */
    function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor | null;
    /**
     * Finds the first descriptor of type `tag` with `tag_extension` in the array.
     *
     * Note: To look for descriptors that can be present more than once in an
     * array of descriptors, iterate the {@link GLib.Array} manually.
     * @param descriptors an array of {@link GstMpegts.Descriptor}
     * @param tag the tag to look for
     * @param tag_extension
     * @returns the first descriptor matchin `tag` with `tag_extension`, else `null`.
     * @since 1.20
     */
    function find_descriptor_with_extension(
        descriptors: Descriptor[],
        tag: number,
        tag_extension: number,
    ): Descriptor | null;
    /**
     * Initializes the MPEG-TS helper library. Must be called before any
     * usage.
     */
    function initialize(): void;
    /**
     * Creates a new {@link Gst.Message} for a `GstMpegtsSection`.
     * @param parent The creator of the message
     * @param section The {@link GstMpegts.Section} to put in a message
     * @returns The new {@link Gst.Message} to be posted, or `null` if the section is not valid.
     */
    function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message | null;
    /**
     * Returns the {@link GstMpegts.Section} contained in a message.
     * @param message a {@link Gst.Message}
     * @returns the contained {@link GstMpegts.Section}, or `null`.
     */
    function message_parse_mpegts_section(message: Gst.Message): Section | null;
    /**
     * Parses the descriptors present in `buffer` and returns them as an
     * array.
     *
     * Note: The data provided in `buffer` will not be copied.
     * @param buffer descriptors to parse
     * @param buf_len Size of `buffer`
     * @returns an array of the parsed descriptors or `null` if there was an error.  Release with `g_array_unref` when done with it.
     */
    function parse_descriptors(buffer: number, buf_len: number): Descriptor[] | null;
    /**
     * Allocates a new {@link GLib.PtrArray} for {@link GstMpegts.PatProgram}. The array can be filled
     * and then converted to a PAT section with `gst_mpegts_section_from_pat()`.
     * @returns A newly allocated {@link GLib.PtrArray}
     */
    function pat_new(): PatProgram[];
    /**
     * Return the {@link GObject.GType} associated with {@link GstMpegts.PESMetadataMeta}
     * @returns a {@link GObject.GType}
     * @since 1.24
     */
    function pes_metadata_meta_api_get_type(): GObject.GType;
    /**
     * Gets the global {@link Gst.MetaInfo} describing the {@link GstMpegts.PESMetadataMeta} meta.
     * @returns The {@link Gst.MetaInfo}
     * @since 1.24
     */
    function pes_metadata_meta_get_info(): Gst.MetaInfo;
    /**
     * Allocates and initializes a new INSERT command {@link GstMpegts.SCTESIT}
     * setup to cancel the specified `event_id`.
     * @param event_id The event ID to cancel.
     * @returns A newly allocated {@link GstMpegts.SCTESIT}
     */
    function scte_cancel_new(event_id: number): SCTESIT;
    /**
     * Allocates and initializes a NULL command {@link GstMpegts.SCTESIT}.
     * @returns A newly allocated {@link GstMpegts.SCTESIT}
     */
    function scte_null_new(): SCTESIT;
    /**
     * Allocates and initializes a new "Splice In" INSERT command
     * {@link GstMpegts.SCTESIT} for the given `event_id` and `splice_time`.
     *
     * If the `splice_time` is #G_MAXUINT64 then the event will be
     * immediate as opposed to for the target `splice_time`.
     * @param event_id The event ID.
     * @param splice_time The running time for the splice event
     * @returns A newly allocated {@link GstMpegts.SCTESIT}
     */
    function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT;
    /**
     * Allocates and initializes a new "Splice Out" INSERT command
     * {@link GstMpegts.SCTESIT} for the given `event_id`, `splice_time` and
     * `duration`.
     *
     * If the `splice_time` is #G_MAXUINT64 then the event will be
     * immediate as opposed to for the target `splice_time`.
     *
     * If the `duration` is 0 it won't be specified in the event.
     * @param event_id The event ID.
     * @param splice_time The running time for the splice event
     * @param duration The optional duration.
     * @returns A newly allocated {@link GstMpegts.SCTESIT}
     */
    function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT;
    /**
     * @param mgt a {@link GstMpegts.AtscMGT} to create the {@link GstMpegts.Section} from
     * @returns the {@link GstMpegts.Section}, or `null` if `mgt` is invalid Since: 1.18
     */
    function section_from_atsc_mgt(mgt: AtscMGT): Section | null;
    /**
     * @param rrt
     */
    function section_from_atsc_rrt(rrt: AtscRRT): Section;
    /**
     * @param stt
     */
    function section_from_atsc_stt(stt: AtscSTT): Section;
    /**
     * Ownership of `nit` is taken. The data in `nit` is managed by the {@link GstMpegts.Section}
     * @param nit a {@link GstMpegts.NIT} to create the {@link GstMpegts.Section} from
     * @returns the {@link GstMpegts.Section}, or `null` if `nit` is invalid
     */
    function section_from_nit(nit: NIT): Section | null;
    /**
     * Creates a PAT {@link GstMpegts.Section} from the `programs` array of `GstMpegtsPatPrograms`
     * @param programs an array of {@link GstMpegts.PatProgram}
     * @param ts_id Transport stream ID of the PAT
     * @returns a {@link GstMpegts.Section}
     */
    function section_from_pat(programs: PatProgram[], ts_id: number): Section;
    /**
     * Creates a {@link GstMpegts.Section} from `pmt` that is bound to `pid`
     * @param pmt a {@link GstMpegts.PMT} to create a {@link GstMpegts.Section} from
     * @param pid The PID that the {@link GstMpegts.PMT} belongs to
     * @returns {@link GstMpegts.Section}, or `null` if `pmt` is invalid
     */
    function section_from_pmt(pmt: PMT, pid: number): Section | null;
    /**
     * Ownership of `sit` is taken. The data in `sit` is managed by the {@link GstMpegts.Section}
     * @param sit a {@link GstMpegts.SCTESIT} to create the {@link GstMpegts.Section} from
     * @param pid
     * @returns the {@link GstMpegts.Section}, or `null` if `sit` is invalid
     */
    function section_from_scte_sit(sit: SCTESIT, pid: number): Section | null;
    /**
     * Ownership of `sdt` is taken. The data in `sdt` is managed by the {@link GstMpegts.Section}
     * @param sdt a {@link GstMpegts.SDT} to create the {@link GstMpegts.Section} from
     * @returns the {@link GstMpegts.Section} or `null` if `sdt` is invalid
     */
    function section_from_sdt(sdt: SDT): Section | null;
    /**
     * @gir-type Callback
     */
    interface PacketizeFunc {
        (section: Section): boolean;
    }
    /**
     * Well-known registration ids, expressed as native-endian 32bit integers. These
     * are used in descriptors of type {@link GstMpegts.DescriptorType.REGISTRATION}. Unless specified
     * otherwise (by use of the "OTHER" prefix), they are all registered by the
     * [SMPTE Registration Authority](https://smpte-ra.org/) or specified in
     * "official" documentation for the given format.
     * @gir-type Struct
     */
    class RegistrationId {
        static $gtype: GObject.GType<RegistrationId>;

        // Static fields

        /**
         * Undefined registration id
         */
        static '0': number;
        /**
         * Audio AC-3, ATSC A/52
         */
        static AC_3: number;
        /**
         * SCTE 35, "Digital Program Insertion Cueing Message"
         */
        static CUEI: number;
        /**
         * Dirac Video codec
         */
        static DRAC: number;
        /**
         * DTS Audio
         */
        static DTS1: number;
        /**
         * DTS Audio
         */
        static DTS2: number;
        /**
         * DTS Audio
         */
        static DTS3: number;
        /**
         * SMPTE 302M, Mapping of AES3 Data in mpeg-ts
         */
        static BSSD: number;
        /**
         * Enhanced AC-3 (i.e. EAC3)
         */
        static EAC3: number;
        /**
         * Cablelabs ETV
         */
        static ETV1: number;
        /**
         * ATSC A/53 compliant stream (i.e. ATSC)
         */
        static GA94: number;
        /**
         * Blu-ray, "System Description Blu-ray Disc
         *             Read-Only Format part 3 Audio Visual Basic Specifications"
         */
        static HDMV: number;
        /**
         * SMPTE RP217 : Non-synchronized Mapping of KLV
         *             Packets in mpeg-ts
         */
        static KLVA: number;
        /**
         * Opus Audio
         */
        static OPUS: number;
        /**
         * HDV (Sony)
         */
        static TSHV: number;
        /**
         * Video VC-1, SMPTE RP227 "VC-1 Bitstream Transport Encodings"
         */
        static VC_1: number;
        /**
         * Audio AC-4, ETSI 103 190-2
         */
        static AC_4: number;
        /**
         * HEVC / h265
         */
        static OTHER_HEVC: number;
    }

    /**
     * Event Information Table (ATSC)
     * @gir-type Struct
     */
    class AtscEIT {
        static $gtype: GObject.GType<AtscEIT>;

        // Fields

        source_id: number;
        protocol_version: number;
        events: AtscEITEvent[];

        // Constructors

        constructor(
            properties?: Partial<{
                source_id: number;
                protocol_version: number;
                events: AtscEITEvent[];
            }>,
        );
    }

    /**
     * An ATSC EIT Event
     * @gir-type Struct
     */
    class AtscEITEvent {
        static $gtype: GObject.GType<AtscEITEvent>;

        // Fields

        event_id: number;
        start_time: number;
        etm_location: number;
        length_in_seconds: number;
        titles: AtscMultString[];
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                event_id: number;
                start_time: number;
                etm_location: number;
                length_in_seconds: number;
                titles: AtscMultString[];
                descriptors: Descriptor[];
            }>,
        );
    }

    /**
     * Extended Text Table (ATSC)
     * @gir-type Struct
     */
    class AtscETT {
        static $gtype: GObject.GType<AtscETT>;

        // Fields

        ett_table_id_extension: number;
        protocol_version: number;
        etm_id: number;
        messages: AtscMultString[];

        // Constructors

        constructor(
            properties?: Partial<{
                ett_table_id_extension: number;
                protocol_version: number;
                etm_id: number;
                messages: AtscMultString[];
            }>,
        );
    }

    /**
     * Master Guide Table (A65)
     * @gir-type Struct
     */
    class AtscMGT {
        static $gtype: GObject.GType<AtscMGT>;

        // Fields

        protocol_version: number;
        tables_defined: number;
        tables: AtscMGTTable[];
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                protocol_version: number;
                tables_defined: number;
                tables: AtscMGTTable[];
                descriptors: Descriptor[];
            }>,
        );

        static ['new'](): AtscMGT;
    }

    /**
     * Source from a `GstMpegtsAtscMGT`
     * @gir-type Struct
     */
    class AtscMGTTable {
        static $gtype: GObject.GType<AtscMGTTable>;

        // Fields

        table_type: number;
        pid: number;
        version_number: number;
        number_bytes: number;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                table_type: number;
                pid: number;
                version_number: number;
                number_bytes: number;
                descriptors: Descriptor[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AtscMultString {
        static $gtype: GObject.GType<AtscMultString>;

        // Fields

        iso_639_langcode: number[];
        segments: AtscStringSegment[];

        // Constructors

        constructor(
            properties?: Partial<{
                iso_639_langcode: number[];
                segments: AtscStringSegment[];
            }>,
        );
    }

    /**
     * Region Rating Table (A65)
     * @gir-type Struct
     * @since 1.18
     */
    class AtscRRT {
        static $gtype: GObject.GType<AtscRRT>;

        // Fields

        protocol_version: number;
        names: AtscMultString[];
        dimensions_defined: number;
        dimensions: AtscRRTDimension[];
        descriptors: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                protocol_version: number;
                names: AtscMultString[];
                dimensions_defined: number;
                dimensions: AtscRRTDimension[];
                descriptors: any[];
            }>,
        );

        static ['new'](): AtscRRT;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class AtscRRTDimension {
        static $gtype: GObject.GType<AtscRRTDimension>;

        // Fields

        names: AtscMultString[];
        graduated_scale: boolean;
        values_defined: number;
        values: AtscRRTDimensionValue[];

        // Constructors

        constructor(
            properties?: Partial<{
                names: AtscMultString[];
                graduated_scale: boolean;
                values_defined: number;
                values: AtscRRTDimensionValue[];
            }>,
        );

        static ['new'](): AtscRRTDimension;
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class AtscRRTDimensionValue {
        static $gtype: GObject.GType<AtscRRTDimensionValue>;

        // Fields

        abbrev_ratings: AtscMultString[];
        ratings: AtscMultString[];

        // Constructors

        constructor(
            properties?: Partial<{
                abbrev_ratings: AtscMultString[];
                ratings: AtscMultString[];
            }>,
        );

        static ['new'](): AtscRRTDimensionValue;
    }

    /**
     * System Time Table (A65)
     * @gir-type Struct
     */
    class AtscSTT {
        static $gtype: GObject.GType<AtscSTT>;

        // Fields

        protocol_version: number;
        system_time: number;
        gps_utc_offset: number;
        ds_status: boolean;
        ds_dayofmonth: number;
        ds_hour: number;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                protocol_version: number;
                system_time: number;
                gps_utc_offset: number;
                ds_status: boolean;
                ds_dayofmonth: number;
                ds_hour: number;
                descriptors: Descriptor[];
            }>,
        );

        static ['new'](): AtscSTT;

        // Methods

        get_datetime_utc(): Gst.DateTime;
    }

    /**
     * A string segment
     * @gir-type Struct
     */
    class AtscStringSegment {
        static $gtype: GObject.GType<AtscStringSegment>;

        // Fields

        compression_type: number;
        mode: number;
        compressed_data_size: number;
        compressed_data: number;
        cached_string: string;

        // Constructors

        constructor(
            properties?: Partial<{
                compression_type: number;
                mode: number;
                compressed_data_size: number;
                compressed_data: number;
                cached_string: string;
            }>,
        );

        // Methods

        get_string(): string;
        /**
         * @param string
         * @param compression_type
         * @param mode
         */
        set_string(string: string, compression_type: number, mode: number): boolean;
    }

    /**
     * Represents both:
     *   Terrestrial Virtual Channel Table (A65)
     *   Cable Virtual Channel Table (A65)
     * @gir-type Struct
     */
    class AtscVCT {
        static $gtype: GObject.GType<AtscVCT>;

        // Fields

        transport_stream_id: number;
        protocol_version: number;
        sources: AtscVCTSource[];
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                transport_stream_id: number;
                protocol_version: number;
                sources: AtscVCTSource[];
                descriptors: Descriptor[];
            }>,
        );
    }

    /**
     * Source from a %GstMpegtsAtscVCT, can be used both for TVCT and CVCT tables
     * @gir-type Struct
     */
    class AtscVCTSource {
        static $gtype: GObject.GType<AtscVCTSource>;

        // Fields

        short_name: string;
        major_channel_number: number;
        minor_channel_number: number;
        modulation_mode: number;
        carrier_frequency: number;
        channel_TSID: number;
        program_number: number;
        ETM_location: number;
        access_controlled: boolean;
        hidden: boolean;
        path_select: boolean;
        out_of_band: boolean;
        hide_guide: boolean;
        service_type: number;
        source_id: number;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                short_name: string;
                major_channel_number: number;
                minor_channel_number: number;
                modulation_mode: number;
                carrier_frequency: number;
                channel_TSID: number;
                program_number: number;
                ETM_location: number;
                access_controlled: boolean;
                hidden: boolean;
                path_select: boolean;
                out_of_band: boolean;
                hide_guide: boolean;
                service_type: number;
                source_id: number;
                descriptors: Descriptor[];
            }>,
        );
    }

    /**
     * Table 110: Audio Preselection Descriptor (ETSI EN 300 468 v1.16.1)
     * @gir-type Struct
     * @since 1.20
     */
    class AudioPreselectionDescriptor {
        static $gtype: GObject.GType<AudioPreselectionDescriptor>;

        // Fields

        preselection_id: number;
        audio_rendering_indication: number;
        audio_description: boolean;
        spoken_subtitles: boolean;
        dialogue_enhancement: boolean;
        interactivity_enabled: boolean;
        language_code_present: boolean;
        text_label_present: boolean;
        multi_stream_info_present: boolean;
        future_extension: boolean;
        language_code: string;
        message_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                preselection_id: number;
                audio_rendering_indication: number;
                audio_description: boolean;
                spoken_subtitles: boolean;
                dialogue_enhancement: boolean;
                interactivity_enabled: boolean;
                language_code_present: boolean;
                text_label_present: boolean;
                multi_stream_info_present: boolean;
                future_extension: boolean;
                language_code: string;
                message_id: number;
            }>,
        );
    }

    /**
     * DVB Bouquet Association Table (EN 300 468)
     * @gir-type Struct
     */
    class BAT {
        static $gtype: GObject.GType<BAT>;

        // Fields

        descriptors: Descriptor[];
        streams: BATStream[];

        // Constructors

        constructor(
            properties?: Partial<{
                descriptors: Descriptor[];
                streams: BATStream[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class BATStream {
        static $gtype: GObject.GType<BATStream>;

        // Fields

        transport_stream_id: number;
        original_network_id: number;
        descriptors: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                transport_stream_id: number;
                original_network_id: number;
                descriptors: any[];
            }>,
        );
    }

    /**
     * Cable Delivery System Descriptor (EN 300 468 v.1.13.1)
     * @gir-type Struct
     */
    class CableDeliverySystemDescriptor {
        static $gtype: GObject.GType<CableDeliverySystemDescriptor>;

        // Fields

        frequency: number;
        outer_fec: CableOuterFECScheme;
        modulation: ModulationType;
        symbol_rate: number;
        fec_inner: DVBCodeRate;

        // Methods

        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class ComponentDescriptor {
        static $gtype: GObject.GType<ComponentDescriptor>;

        // Fields

        stream_content: number;
        component_type: number;
        component_tag: number;
        language_code: string;
        text: string;

        // Constructors

        constructor(
            properties?: Partial<{
                stream_content: number;
                component_type: number;
                component_tag: number;
                language_code: string;
                text: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class Content {
        static $gtype: GObject.GType<Content>;

        // Fields

        content_nibble_1: ContentNibbleHi;
        content_nibble_2: number;
        user_byte: number;
    }

    /**
     * @gir-type Struct
     */
    class DVBLinkageDescriptor {
        static $gtype: GObject.GType<DVBLinkageDescriptor>;

        // Fields

        transport_stream_id: number;
        original_network_id: number;
        service_id: number;
        linkage_type: DVBLinkageType;
        private_data_length: number;
        private_data_bytes: number;

        // Methods

        free(): void;
        /**
         * @returns The {@link GstMpegts.DVBLinkageEvent} or `null` if an error happened
         */
        get_event(): DVBLinkageEvent | null;
        /**
         * @returns an {@link GstMpegts.DVBLinkageExtendedEvent} array or `null` if an error happened
         */
        get_extended_event(): DVBLinkageExtendedEvent[] | null;
        /**
         * @returns The {@link GstMpegts.DVBLinkageMobileHandOver} or `null` if an error happened
         */
        get_mobile_hand_over(): DVBLinkageMobileHandOver | null;
    }

    /**
     * @gir-type Struct
     */
    class DVBLinkageEvent {
        static $gtype: GObject.GType<DVBLinkageEvent>;

        // Fields

        target_event_id: number;
        target_listed: boolean;
        event_simulcast: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                target_event_id: number;
                target_listed: boolean;
                event_simulcast: boolean;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DVBLinkageExtendedEvent {
        static $gtype: GObject.GType<DVBLinkageExtendedEvent>;

        // Fields

        target_event_id: number;
        target_listed: boolean;
        event_simulcast: boolean;
        link_type: number;
        target_id_type: number;
        original_network_id_flag: boolean;
        service_id_flag: boolean;
        user_defined_id: number;
        target_transport_stream_id: number;
        target_original_network_id: number;
        target_service_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                target_event_id: number;
                target_listed: boolean;
                event_simulcast: boolean;
                link_type: number;
                target_id_type: number;
                original_network_id_flag: boolean;
                service_id_flag: boolean;
                user_defined_id: number;
                target_transport_stream_id: number;
                target_original_network_id: number;
                target_service_id: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DVBLinkageMobileHandOver {
        static $gtype: GObject.GType<DVBLinkageMobileHandOver>;

        // Fields

        hand_over_type: DVBLinkageHandOverType;
        origin_type: boolean;
        network_id: number;
        initial_service_id: number;
    }

    /**
     * @gir-type Struct
     */
    class DVBParentalRatingItem {
        static $gtype: GObject.GType<DVBParentalRatingItem>;

        // Fields

        country_code: string;
        rating: number;

        // Constructors

        constructor(
            properties?: Partial<{
                country_code: string;
                rating: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DVBServiceListItem {
        static $gtype: GObject.GType<DVBServiceListItem>;

        // Fields

        service_id: number;
        type: DVBServiceType;
    }

    /**
     * @gir-type Struct
     */
    class DataBroadcastDescriptor {
        static $gtype: GObject.GType<DataBroadcastDescriptor>;

        // Fields

        data_broadcast_id: number;
        component_tag: number;
        length: number;
        selector_bytes: number;
        language_code: string;
        text: string;

        // Constructors

        constructor(
            properties?: Partial<{
                data_broadcast_id: number;
                component_tag: number;
                length: number;
                selector_bytes: number;
                language_code: string;
                text: string;
            }>,
        );

        // Methods

        free(): void;
    }

    /**
     * These are the base descriptor types and methods.
     *
     * For more details, refer to the ITU H.222.0 or ISO/IEC 13818-1 specifications
     * and other specifications mentioned in the documentation.
     * @gir-type Struct
     */
    class Descriptor {
        static $gtype: GObject.GType<Descriptor>;

        // Fields

        tag: number;
        tag_extension: number;
        length: number;
        data: number;

        // Constructors

        constructor(
            properties?: Partial<{
                tag: number;
                tag_extension: number;
                length: number;
                data: number;
            }>,
        );

        // Static methods

        /**
         * Creates a {@link GstMpegts.Descriptor} with custom `tag` and `data`
         * @param tag descriptor tag
         * @param data descriptor data (after tag and length field)
         */
        static from_custom(tag: number, data: Uint8Array | string): Descriptor | null;
        /**
         * Creates a {@link GstMpegts.Descriptor} with custom `tag`, `tag_extension` and `data`
         * @param tag descriptor tag
         * @param tag_extension descriptor tag extension
         * @param data descriptor data (after tag and length field)
         */
        static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array | string): Descriptor;
        /**
         * Creates a {@link GstMpegts.Descriptor} to be a {@link GstMpegts.DVBDescriptorType.NETWORK_NAME},
         * with the network name `name`. The data field of the {@link GstMpegts.Descriptor}
         * will be allocated, and transferred to the caller.
         * @param name the network name to set
         */
        static from_dvb_network_name(name: string): Descriptor | null;
        /**
         * Fills a {@link GstMpegts.Descriptor} to be a {@link GstMpegts.DVBDescriptorType.SERVICE}.
         * The data field of the {@link GstMpegts.Descriptor} will be allocated,
         * and transferred to the caller.
         * @param service_type Service type defined as a {@link GstMpegts.DVBServiceType}
         * @param service_name Name of the service
         * @param service_provider Name of the service provider
         */
        static from_dvb_service(
            service_type: DVBServiceType,
            service_name?: string | null,
            service_provider?: string | null,
        ): Descriptor | null;
        /**
         * @param lang a string containing the ISO639 language
         * @param type subtitling type
         * @param composition composition page id
         * @param ancillary ancillary page id
         */
        static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;
        /**
         * Creates a {@link GstMpegts.DescriptorType.ISO_639_LANGUAGE} {@link GstMpegts.Descriptor} with
         * a single language
         * @param language ISO-639-2 language 3-char code
         */
        static from_iso_639_language(language: string): Descriptor;
        /**
         * Create a new {@link GstMpegts.Descriptor} based on the information in `jpegxs`
         * @param jpegxs A {@link GstMpegts.JpegXsDescriptor}
         */
        static from_jpeg_xs(jpegxs: JpegXsDescriptor): Descriptor;
        /**
         * @param metadata_descriptor
         */
        static from_metadata(metadata_descriptor: MetadataDescriptor): Descriptor;
        /**
         * @param metadata_pointer_descriptor a {@link GstMpegts.MetadataPointerDescriptor}
         */
        static from_metadata_pointer(metadata_pointer_descriptor: MetadataPointerDescriptor): Descriptor;
        /**
         * Creates a {@link GstMpegts.DescriptorType.REGISTRATION} {@link GstMpegts.Descriptor}
         * @param format_identifier a 4 character format identifier string
         * @param additional_info pointer to optional additional info
         */
        static from_registration(format_identifier: string, additional_info?: Uint8Array | null): Descriptor;
        /**
         * @param source
         */
        static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;
        /**
         * @param source
         */
        static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;

        // Methods

        /**
         * Copy the given descriptor.
         * @returns A copy of `desc`.
         */
        copy(): Descriptor;
        /**
         * Frees `desc`
         */
        free(): void;
        /**
         * Parses out a list of audio preselection from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_audio_preselection_list(): [boolean, AudioPreselectionDescriptor[]];
        /**
         * Extracts the Conditional Access information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_ca(): [boolean, number, number, Uint8Array | null];
        /**
         * Extracts the cable delivery system information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_cable_delivery_system(): [boolean, CableDeliverySystemDescriptor];
        /**
         * Extracts the bouquet name from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_bouquet_name(): [boolean, string];
        /**
         * Extracts ca id's from `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_ca_identifier(): [boolean, number[]];
        /**
         * Extracts the DVB component information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_component(): [boolean, ComponentDescriptor];
        /**
         * Extracts the DVB content information from `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_content(): [boolean, Content[]];
        /**
         * Parses out the data broadcast from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_data_broadcast(): [boolean, DataBroadcastDescriptor];
        /**
         * Parses out the data broadcast id from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_data_broadcast_id(): [boolean, number, Uint8Array];
        /**
         * Extracts the DVB extended event information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_extended_event(): [boolean, ExtendedEventDescriptor];
        /**
         * Parses out a list of frequencies from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_frequency_list(): [boolean, boolean, number[]];
        /**
         * Extracts the DVB linkage information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_linkage(): [boolean, DVBLinkageDescriptor];
        /**
         * Parses out the multilingual bouquet name from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_multilingual_bouquet_name(): [boolean, DvbMultilingualBouquetNameItem[]];
        /**
         * Parses out the multilingual component from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_multilingual_component(): [boolean, number, DvbMultilingualComponentItem[]];
        /**
         * Parses out the multilingual network name from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_multilingual_network_name(): [boolean, DvbMultilingualNetworkNameItem[]];
        /**
         * Parses out the multilingual service name from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_multilingual_service_name(): [boolean, DvbMultilingualServiceNameItem[]];
        /**
         * Parses out the dvb network name from the `descriptor`:
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_network_name(): [boolean, string];
        /**
         * Extracts the DVB parental rating information from `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_parental_rating(): [boolean, DVBParentalRatingItem[]];
        /**
         * Parses out the private data specifier from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_private_data_specifier(): [boolean, number, Uint8Array | null];
        /**
         * Parses out the scrambling mode from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_scrambling(): [boolean, DVBScramblingModeType];
        /**
         * Extracts the dvb service information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_service(): [boolean, DVBServiceType | null, string, string];
        /**
         * Parses out a list of services from the `descriptor`:
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_service_list(): [boolean, DVBServiceListItem[]];
        /**
         * Extracts the DVB short event information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_short_event(): [boolean, string, string, string];
        /**
         * Extracts the component tag from `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_stream_identifier(): [boolean, number];
        /**
         * Parses out the stuffing bytes from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_stuffing(): [boolean, number];
        /**
         * Extracts the DVB subtitling informatio from specific table id in `descriptor`.
         *
         * Note: Use `gst_tag_get_language_code` if you want to get the the
         * ISO 639-1 language code from the returned ISO 639-2 one.
         * @param idx Table id of the entry to parse
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_dvb_subtitling_idx(idx: number): [boolean, string, number, number, number];
        /**
         * @returns The number of entries in `descriptor`
         */
        parse_dvb_subtitling_nb(): number;
        /**
         * Parses out the DVB-T2 delivery system from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_dvb_t2_delivery_system(): [boolean, T2DeliverySystemDescriptor];
        /**
         * Parses teletext number `idx` in the `descriptor`. The language is in ISO639 format.
         * @param idx The id of the teletext to get
         * @returns FALSE on out-of-bounds and errors
         */
        parse_dvb_teletext_idx(idx: number): [boolean, string, DVBTeletextType | null, number, number];
        /**
         * Find the number of teletext entries in `descriptor`
         * @returns Number of teletext entries
         */
        parse_dvb_teletext_nb(): number;
        /**
         * Extracts the iso 639-2 language information from `descriptor`.
         *
         * Note: Use `gst_tag_get_language_code` if you want to get the the
         * ISO 639-1 language code from the returned ISO 639-2 one.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_iso_639_language(): [boolean, ISO639LanguageDescriptor];
        /**
         * Extracts the iso 639-2 language information from specific table id in `descriptor`.
         *
         * Note: Use `gst_tag_get_language_code` if you want to get the the
         * ISO 639-1 language code from the returned ISO 639-2 one.
         * @param idx Table id of the language to parse
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_iso_639_language_idx(idx: number): [boolean, string, Iso639AudioType | null];
        /**
         * @returns The number of languages in `descriptor`
         */
        parse_iso_639_language_nb(): number;
        /**
         * Parses the JPEG-XS descriptor information from `descriptor`:
         * @returns TRUE if the information could be parsed, else FALSE.
         */
        parse_jpeg_xs(): [boolean, JpegXsDescriptor];
        /**
         * Extracts the logical channels from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_logical_channel(): [boolean, LogicalChannelDescriptor];
        /**
         * Parses out the metadata descriptor from the `descriptor`.
         *
         * See ISO/IEC 13818-1:2018 Section 2.6.60 and 2.6.61 for details.
         * metadata_application_format is provided in Table 2-82. metadata_format is
         * provided in Table 2-85.
         * @returns `true` if the parsing worked correctly, else `false`.
         */
        parse_metadata(): [boolean, MetadataDescriptor];
        /**
         * Extracts the metadata STD descriptor from `descriptor`.
         *
         * See ISO/IEC 13818-1:2018 Section 2.6.62 and 2.6.63 for details.
         * @param metadata_input_leak_rate
         * @param metadata_buffer_size
         * @param metadata_output_leak_rate
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_metadata_std(
            metadata_input_leak_rate: number,
            metadata_buffer_size: number,
            metadata_output_leak_rate: number,
        ): boolean;
        /**
         * Extracts the Registration information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_registration(): [boolean, number, Uint8Array | null];
        /**
         * Extracts the satellite delivery system information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         */
        parse_satellite_delivery_system(): [boolean, SatelliteDeliverySystemDescriptor];
        /**
         * Parses out the terrestrial delivery system from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         */
        parse_terrestrial_delivery_system(): [boolean, TerrestrialDeliverySystemDescriptor];
    }

    /**
     * a multilingual bouquet name entry
     * @gir-type Struct
     */
    class DvbMultilingualBouquetNameItem {
        static $gtype: GObject.GType<DvbMultilingualBouquetNameItem>;

        // Fields

        language_code: string;
        bouquet_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                language_code: string;
                bouquet_name: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class DvbMultilingualComponentItem {
        static $gtype: GObject.GType<DvbMultilingualComponentItem>;

        // Fields

        language_code: string;
        description: string;

        // Constructors

        constructor(
            properties?: Partial<{
                language_code: string;
                description: string;
            }>,
        );
    }

    /**
     * a multilingual network name entry
     * @gir-type Struct
     */
    class DvbMultilingualNetworkNameItem {
        static $gtype: GObject.GType<DvbMultilingualNetworkNameItem>;

        // Fields

        language_code: string;
        network_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                language_code: string;
                network_name: string;
            }>,
        );
    }

    /**
     * a multilingual service name entry
     * @gir-type Struct
     */
    class DvbMultilingualServiceNameItem {
        static $gtype: GObject.GType<DvbMultilingualServiceNameItem>;

        // Fields

        language_code: string;
        provider_name: string;
        service_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                language_code: string;
                provider_name: string;
                service_name: string;
            }>,
        );
    }

    /**
     * Event Information Table (EN 300 468)
     * @gir-type Struct
     */
    class EIT {
        static $gtype: GObject.GType<EIT>;

        // Fields

        transport_stream_id: number;
        original_network_id: number;
        segment_last_section_number: number;
        last_table_id: number;
        actual_stream: boolean;
        present_following: boolean;
    }

    /**
     * Event from a `GstMpegtsEIT`
     * @gir-type Struct
     */
    class EITEvent {
        static $gtype: GObject.GType<EITEvent>;

        // Fields

        event_id: number;
        duration: number;
        running_status: RunningStatus;
        free_CA_mode: boolean;
        descriptors: Descriptor[];
    }

    /**
     * Extended Event Descriptor (EN 300 468 v.1.13.1)
     * @gir-type Struct
     */
    class ExtendedEventDescriptor {
        static $gtype: GObject.GType<ExtendedEventDescriptor>;

        // Fields

        descriptor_number: number;
        last_descriptor_number: number;
        language_code: string;
        items: ExtendedEventItem[];
        text: string;

        // Constructors

        constructor(
            properties?: Partial<{
                descriptor_number: number;
                last_descriptor_number: number;
                language_code: string;
                items: ExtendedEventItem[];
                text: string;
            }>,
        );

        // Methods

        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class ExtendedEventItem {
        static $gtype: GObject.GType<ExtendedEventItem>;

        // Fields

        item_description: string;
        item: string;

        // Constructors

        constructor(
            properties?: Partial<{
                item_description: string;
                item: string;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class ISO639LanguageDescriptor {
        static $gtype: GObject.GType<ISO639LanguageDescriptor>;

        // Fields

        nb_language: number;
        language: string[];
        audio_type: Iso639AudioType[];

        // Methods

        descriptor_free(): void;
    }

    /**
     * JPEG-XS descriptor
     * @gir-type Struct
     * @since 1.26
     */
    class JpegXsDescriptor {
        static $gtype: GObject.GType<JpegXsDescriptor>;

        // Fields

        descriptor_version: number;
        horizontal_size: number;
        vertical_size: number;
        brat: number;
        frat: number;
        schar: number;
        Ppih: number;
        Plev: number;
        max_buffer_size: number;
        buffer_model_type: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        video_full_range_flag: boolean;
        still_mode: boolean;
        mdm_flag: boolean;
        X_c0: number;
        Y_c0: number;
        X_c1: number;
        Y_c1: number;
        X_c2: number;
        Y_c2: number;
        X_wp: number;
        Y_wp: number;
        L_max: number;
        L_min: number;
        MaxCLL: number;
        MaxFALL: number;

        // Constructors

        constructor(
            properties?: Partial<{
                descriptor_version: number;
                horizontal_size: number;
                vertical_size: number;
                brat: number;
                frat: number;
                schar: number;
                Ppih: number;
                Plev: number;
                max_buffer_size: number;
                buffer_model_type: number;
                colour_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
                video_full_range_flag: boolean;
                still_mode: boolean;
                mdm_flag: boolean;
                X_c0: number;
                Y_c0: number;
                X_c1: number;
                Y_c1: number;
                X_c2: number;
                Y_c2: number;
                X_wp: number;
                Y_wp: number;
                L_max: number;
                L_min: number;
                MaxCLL: number;
                MaxFALL: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class LogicalChannel {
        static $gtype: GObject.GType<LogicalChannel>;

        // Fields

        service_id: number;
        visible_service: boolean;
        logical_channel_number: number;

        // Constructors

        constructor(
            properties?: Partial<{
                service_id: number;
                visible_service: boolean;
                logical_channel_number: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class LogicalChannelDescriptor {
        static $gtype: GObject.GType<LogicalChannelDescriptor>;

        // Fields

        nb_channels: number;
        channels: LogicalChannel[];

        // Constructors

        constructor(
            properties?: Partial<{
                nb_channels: number;
                channels: LogicalChannel[];
            }>,
        );
    }

    /**
     * The metadata descriptor specifies parameters of a metadata service carried in an MPEG-2 Transport Stream (or Program Stream). The descriptor is included in the PMT in the descriptor loop for the elementary stream that carries the
     * metadata service. The descriptor specifies the format of the associated metadata, and contains the value of the
     * metadata_service_id to identify the metadata service to which the metadata descriptor applies.
     *
     * Note that this structure does not include all of the metadata_descriptor items, and will need extension to support DSM-CC and private data.
     * See ISO/IEC 13818-1:2018 Section 2.6.60 and Section 2.6.61 for more information.
     * @gir-type Struct
     * @since 1.24
     */
    class MetadataDescriptor {
        static $gtype: GObject.GType<MetadataDescriptor>;

        // Fields

        metadata_application_format: MetadataApplicationFormat;
        metadata_format: MetadataFormat;
        metadata_format_identifier: number;
        metadata_service_id: number;
        decoder_config_flags: number;
        dsm_cc_flag: boolean;
    }

    /**
     * This structure is not complete. The following fields are missing in comparison to the standard (ISO/IEC 13818-1:2023 Section 2.6.58):
     * * metadata_locator_record_flag: hardcoded to 0. Indicating no metadata_locator_record present in the descriptor.
     * * MPEG_carriage_flags: hardcoded to 0b00, indicating the metadata is carried in the same transport steam.
     * * metadata_locator_record_length.
     * * transport_stream_location.
     * * transport_stream_id.
     *
     * See also: gst_mpegts_descriptor_from_metadata_pointer
     * @gir-type Struct
     * @since 1.26
     */
    class MetadataPointerDescriptor {
        static $gtype: GObject.GType<MetadataPointerDescriptor>;

        // Fields

        metadata_application_format: MetadataApplicationFormat;
        metadata_format: MetadataFormat;
        metadata_format_identifier: number;
        metadata_service_id: number;
        program_number: number;
    }

    /**
     * Network Information Table (ISO/IEC 13818-1 / EN 300 468)
     * @gir-type Struct
     */
    class NIT {
        static $gtype: GObject.GType<NIT>;

        // Fields

        actual_network: boolean;
        network_id: number;
        descriptors: Descriptor[];
        streams: NITStream[];

        // Constructors

        constructor(
            properties?: Partial<{
                actual_network: boolean;
                network_id: number;
                descriptors: Descriptor[];
                streams: NITStream[];
            }>,
        );

        static ['new'](): NIT;
    }

    /**
     * @gir-type Struct
     */
    class NITStream {
        static $gtype: GObject.GType<NITStream>;

        // Fields

        transport_stream_id: number;
        original_network_id: number;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                transport_stream_id: number;
                original_network_id: number;
                descriptors: Descriptor[];
            }>,
        );

        static ['new'](): NITStream;
    }

    /**
     * Extra buffer metadata describing the PES Metadata context.
     * This is based on the Metadata AU cell header in
     * ISO/IEC 13818-1:2018 Section 2.12.4.
     *
     * AU_cell_data_length is not provided, since it matches the length of the buffer
     * @gir-type Struct
     * @since 1.24
     */
    class PESMetadataMeta {
        static $gtype: GObject.GType<PESMetadataMeta>;

        // Fields

        metadata_service_id: number;
        flags: number;

        // Static methods

        /**
         * Gets the global {@link Gst.MetaInfo} describing the {@link GstMpegts.PESMetadataMeta} meta.
         */
        static get_info(): Gst.MetaInfo;
    }

    /**
     * Program Map Table (ISO/IEC 13818-1). Provides the mappings between program
     * numbers and the program elements that comprise them.
     *
     * The program_number is contained in the subtable_extension field of the
     * container {@link GstMpegts.Section}.
     * @gir-type Struct
     */
    class PMT {
        static $gtype: GObject.GType<PMT>;

        // Fields

        pcr_pid: number;
        program_number: number;
        descriptors: Descriptor[];
        streams: PMTStream[];

        // Constructors

        constructor(
            properties?: Partial<{
                pcr_pid: number;
                program_number: number;
                descriptors: Descriptor[];
                streams: PMTStream[];
            }>,
        );

        static ['new'](): PMT;
    }

    /**
     * An individual stream definition of a {@link GstMpegts.PMT}.
     * @gir-type Struct
     */
    class PMTStream {
        static $gtype: GObject.GType<PMTStream>;

        // Fields

        stream_type: number;
        pid: number;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                stream_type: number;
                pid: number;
                descriptors: Descriptor[];
            }>,
        );

        static ['new'](): PMTStream;
    }

    /**
     * A program entry from a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
     * @gir-type Struct
     */
    class PatProgram {
        static $gtype: GObject.GType<PatProgram>;

        // Fields

        program_number: number;
        network_or_program_map_PID: number;

        // Constructors

        constructor(
            properties?: Partial<{
                program_number: number;
                network_or_program_map_PID: number;
            }>,
        );

        static ['new'](): PatProgram;
    }

    /**
     * @gir-type Struct
     */
    class SCTESIT {
        static $gtype: GObject.GType<SCTESIT>;

        // Fields

        encrypted_packet: boolean;
        encryption_algorithm: number;
        pts_adjustment: number;
        cw_index: number;
        tier: number;
        splice_command_length: number;
        splice_command_type: SCTESpliceCommandType;
        splice_time_specified: boolean;
        splice_time: number;
        splices: any[];
        descriptors: any[];
        fully_parsed: boolean;
        is_running_time: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                encrypted_packet: boolean;
                encryption_algorithm: number;
                pts_adjustment: number;
                cw_index: number;
                tier: number;
                splice_command_length: number;
                splice_command_type: SCTESpliceCommandType;
                splice_time_specified: boolean;
                splice_time: number;
                splices: any[];
                descriptors: any[];
                fully_parsed: boolean;
                is_running_time: boolean;
            }>,
        );

        static ['new'](): SCTESIT;
    }

    /**
     * Per-PID splice information.
     * @gir-type Struct
     * @since 1.20
     */
    class SCTESpliceComponent {
        static $gtype: GObject.GType<SCTESpliceComponent>;

        // Fields

        tag: number;
        splice_time_specified: boolean;
        splice_time: number;
        utc_splice_time: number;

        // Constructors

        constructor(
            properties?: Partial<{
                tag: number;
                splice_time_specified: boolean;
                splice_time: number;
                utc_splice_time: number;
            }>,
        );

        static ['new'](tag: number): SCTESpliceComponent;
    }

    /**
     * @gir-type Struct
     */
    class SCTESpliceEvent {
        static $gtype: GObject.GType<SCTESpliceEvent>;

        // Fields

        insert_event: boolean;
        splice_event_id: number;
        splice_event_cancel_indicator: boolean;
        out_of_network_indicator: boolean;
        program_splice_flag: boolean;
        duration_flag: boolean;
        splice_immediate_flag: boolean;
        program_splice_time_specified: boolean;
        program_splice_time: number;
        utc_splice_time: number;
        components: any[];
        break_duration_auto_return: boolean;
        break_duration: number;
        unique_program_id: number;
        avail_num: number;
        avails_expected: number;

        // Constructors

        constructor(
            properties?: Partial<{
                insert_event: boolean;
                splice_event_id: number;
                splice_event_cancel_indicator: boolean;
                out_of_network_indicator: boolean;
                program_splice_flag: boolean;
                duration_flag: boolean;
                splice_immediate_flag: boolean;
                program_splice_time_specified: boolean;
                program_splice_time: number;
                utc_splice_time: number;
                components: any[];
                break_duration_auto_return: boolean;
                break_duration: number;
                unique_program_id: number;
                avail_num: number;
                avails_expected: number;
            }>,
        );

        static ['new'](): SCTESpliceEvent;
    }

    /**
     * Service Description Table (EN 300 468)
     * @gir-type Struct
     */
    class SDT {
        static $gtype: GObject.GType<SDT>;

        // Fields

        original_network_id: number;
        actual_ts: boolean;
        transport_stream_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                original_network_id: number;
                actual_ts: boolean;
                transport_stream_id: number;
                services: SDTService[];
            }>,
        );

        static ['new'](): SDT;
    }

    /**
     * @gir-type Struct
     */
    class SDTService {
        static $gtype: GObject.GType<SDTService>;

        // Fields

        service_id: number;
        EIT_schedule_flag: boolean;
        EIT_present_following_flag: boolean;
        running_status: RunningStatus;
        free_CA_mode: boolean;
        descriptors: Descriptor[];

        // Constructors

        constructor(
            properties?: Partial<{
                service_id: number;
                EIT_schedule_flag: boolean;
                EIT_present_following_flag: boolean;
                running_status: RunningStatus;
                free_CA_mode: boolean;
                descriptors: Descriptor[];
            }>,
        );

        static ['new'](): SDTService;
    }

    /**
     * Selection Information Table (EN 300 468)
     * @gir-type Struct
     * @since 1.20
     */
    class SIT {
        static $gtype: GObject.GType<SIT>;

        // Fields

        descriptors: Descriptor[];
    }

    /**
     * SIT Service entry
     * @gir-type Struct
     * @since 1.20
     */
    class SITService {
        static $gtype: GObject.GType<SITService>;

        // Fields

        service_id: number;
        running_status: RunningStatus;
        descriptors: Descriptor[];
    }

    /**
     * Satellite Delivery System Descriptor (EN 300 468 v.1.13.1)
     * @gir-type Struct
     */
    class SatelliteDeliverySystemDescriptor {
        static $gtype: GObject.GType<SatelliteDeliverySystemDescriptor>;

        // Fields

        frequency: number;
        orbital_position: number;
        west_east: boolean;
        polarization: SatellitePolarizationType;
        roll_off: SatelliteRolloff;
        modulation_system: boolean;
        modulation_type: ModulationType;
        symbol_rate: number;
        fec_inner: DVBCodeRate;
    }

    /**
     * ## Generic usage of sections with %GstMpegtsSection
     *
     * The %GstMpegtsSection object is the representation of MPEG-TS Section (SI or
     * PSI).
     *
     * Various elements can post those on the bus via %GstMessage of type
     * {@link Gst.MessageType.ELEMENT}. The `gst_message_parse_mpegts_section()` function
     * provides access to the section.
     *
     * Applications (or other elements) can create them either by using one of the
     * `gst_mpegts_section_from_*` functions, or by providing the raw SI data via
     * `gst_mpegts_section_new()`.
     *
     * Elements outputting MPEG-TS streams can also create sections using the
     * various convenience functions and then get the packetized data (to be
     * inserted in MPEG-TS packets) using `gst_mpegts_section_packetize()`.
     *
     * For more details, refer to the ITU H.222.0 or ISO/IEC 13818-1 specifications
     * and other specifications mentioned in the documentation.
     *
     * # Supported base MPEG-TS sections
     * These are the sections for which parsing and packetizing code exists.
     *
     * ## Program Association Table (PAT)
     * See:
     * * `gst_mpegts_section_get_pat()`
     * * `gst_mpegts_pat_program_new()`
     * * %GstMpegtsPatProgram
     *
     * ## Conditional Access Table (CAT)
     * See:
     * * `gst_mpegts_section_get_cat()`
     *
     * ## Program Map Table (PMT)
     * See:
     * * %GstMpegtsPMT
     * * `gst_mpegts_section_get_pmt()`
     * * `gst_mpegts_pmt_new()`
     * * %GstMpegtsPMTStream
     *
     * ## Transport Stream Description Table (TSDT)
     * See:
     * * `gst_mpegts_section_get_tsdt()`
     * # API
     * @gir-type Struct
     */
    class Section {
        static $gtype: GObject.GType<Section>;

        // Fields

        section_type: SectionType;
        pid: number;
        table_id: number;
        subtable_extension: number;
        version_number: number;
        current_next_indicator: boolean;
        section_number: number;
        last_section_number: number;
        crc: number;

        // Constructors

        constructor(pid: number, data: Uint8Array | string);

        static ['new'](pid: number, data: Uint8Array | string): Section;

        // Static methods

        /**
         * @param mgt a {@link GstMpegts.AtscMGT} to create the {@link GstMpegts.Section} from
         */
        static from_atsc_mgt(mgt: AtscMGT): Section | null;
        /**
         * @param rrt
         */
        static from_atsc_rrt(rrt: AtscRRT): Section;
        /**
         * @param stt
         */
        static from_atsc_stt(stt: AtscSTT): Section;
        /**
         * Ownership of `nit` is taken. The data in `nit` is managed by the {@link GstMpegts.Section}
         * @param nit a {@link GstMpegts.NIT} to create the {@link GstMpegts.Section} from
         */
        static from_nit(nit: NIT): Section | null;
        /**
         * Creates a PAT {@link GstMpegts.Section} from the `programs` array of `GstMpegtsPatPrograms`
         * @param programs an array of {@link GstMpegts.PatProgram}
         * @param ts_id Transport stream ID of the PAT
         */
        static from_pat(programs: PatProgram[], ts_id: number): Section;
        /**
         * Creates a {@link GstMpegts.Section} from `pmt` that is bound to `pid`
         * @param pmt a {@link GstMpegts.PMT} to create a {@link GstMpegts.Section} from
         * @param pid The PID that the {@link GstMpegts.PMT} belongs to
         */
        static from_pmt(pmt: PMT, pid: number): Section | null;
        /**
         * Ownership of `sit` is taken. The data in `sit` is managed by the {@link GstMpegts.Section}
         * @param sit a {@link GstMpegts.SCTESIT} to create the {@link GstMpegts.Section} from
         * @param pid
         */
        static from_scte_sit(sit: SCTESIT, pid: number): Section | null;
        /**
         * Ownership of `sdt` is taken. The data in `sdt` is managed by the {@link GstMpegts.Section}
         * @param sdt a {@link GstMpegts.SDT} to create the {@link GstMpegts.Section} from
         */
        static from_sdt(sdt: SDT): Section | null;

        // Methods

        /**
         * Returns the {@link GstMpegts.AtscVCT} contained in the `section`
         * @returns The {@link GstMpegts.AtscVCT} contained in the section, or `null` if an error happened.
         */
        get_atsc_cvct(): AtscVCT | null;
        /**
         * Returns the {@link GstMpegts.AtscEIT} contained in the `section`.
         * @returns The {@link GstMpegts.AtscEIT} contained in the section, or `null` if an error happened.
         */
        get_atsc_eit(): AtscEIT;
        /**
         * Returns the {@link GstMpegts.AtscETT} contained in the `section`.
         * @returns The {@link GstMpegts.AtscETT} contained in the section, or `null` if an error happened.
         */
        get_atsc_ett(): AtscETT;
        /**
         * Returns the {@link GstMpegts.AtscMGT} contained in the `section`.
         * @returns The {@link GstMpegts.AtscMGT} contained in the section, or `null` if an error happened.
         */
        get_atsc_mgt(): AtscMGT | null;
        /**
         * Returns the {@link GstMpegts.AtscRRT} contained in the `section`.
         * @returns The {@link GstMpegts.AtscRRT} contained in the section, or `null` if an error happened.
         */
        get_atsc_rrt(): AtscRRT;
        /**
         * Returns the {@link GstMpegts.AtscSTT} contained in the `section`.
         * @returns The {@link GstMpegts.AtscSTT} contained in the section, or `null` if an error happened.
         */
        get_atsc_stt(): AtscSTT;
        /**
         * Returns the {@link GstMpegts.AtscVCT} contained in the `section`
         * @returns The {@link GstMpegts.AtscVCT} contained in the section, or `null` if an error happened.
         */
        get_atsc_tvct(): AtscVCT | null;
        /**
         * Returns the {@link GstMpegts.BAT} contained in the `section`.
         * @returns The {@link GstMpegts.BAT} contained in the section, or `null` if an error happened.
         */
        get_bat(): BAT | null;
        /**
         * Parses a Conditional Access Table.
         *
         * Returns the array of {@link GstMpegts.Descriptor} contained in the Conditional
         * Access Table.
         * @returns The array of {@link GstMpegts.Descriptor} contained in the section, or `null` if an error happened. Release with `g_array_unref` when done.
         */
        get_cat(): Descriptor[] | null;
        /**
         * Gets the original unparsed section data.
         * @returns The original unparsed section data.
         */
        get_data(): GLib.Bytes;
        /**
         * Returns the {@link GstMpegts.EIT} contained in the `section`.
         * @returns The {@link GstMpegts.EIT} contained in the section, or `null` if an error happened.
         */
        get_eit(): EIT | null;
        /**
         * Returns the {@link GstMpegts.NIT} contained in the `section`.
         * @returns The {@link GstMpegts.NIT} contained in the section, or `null` if an error happened.
         */
        get_nit(): NIT | null;
        /**
         * Parses a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
         *
         * Returns the array of {@link GstMpegts.PatProgram} contained in the section.
         *
         * Note: The PAT `transport_stream_id` field corresponds to the
         * "subtable_extension" field of the provided `section`.
         * @returns The {@link GstMpegts.PatProgram} contained in the section, or `null` if an error happened or the `section` did not contain a valid PAT. Release with `g_ptr_array_unref` when done.
         */
        get_pat(): PatProgram[] | null;
        /**
         * Parses the Program Map Table contained in the `section`.
         * @returns The {@link GstMpegts.PMT} contained in the section, or `null` if an error happened.
         */
        get_pmt(): PMT | null;
        /**
         * Returns the {@link GstMpegts.SCTESIT} contained in the `section`.
         * @returns The {@link GstMpegts.SCTESIT} contained in the section, or `null` if an error happened.
         */
        get_scte_sit(): SCTESIT | null;
        /**
         * Returns the {@link GstMpegts.SDT} contained in the `section`.
         * @returns The {@link GstMpegts.SDT} contained in the section, or `null` if an error happened.
         */
        get_sdt(): SDT | null;
        /**
         * Returns the {@link GstMpegts.SIT} contained in the `section`.
         * @returns The {@link GstMpegts.SIT} contained in the section, or `null` if an error happened.
         */
        get_sit(): SIT | null;
        /**
         * Returns the {@link Gst.DateTime} of the TDT
         * @returns The {@link Gst.DateTime} contained in the section, or `null` if an error happened. Release with `gst_date_time_unref` when done.
         */
        get_tdt(): Gst.DateTime | null;
        /**
         * Returns the {@link GstMpegts.TOT} contained in the `section`.
         * @returns The {@link GstMpegts.TOT} contained in the section, or `null` if an error happened.
         */
        get_tot(): TOT | null;
        /**
         * Parses a Transport Stream Description Table.
         *
         * Returns the array of {@link GstMpegts.Descriptor} contained in the section
         * @returns The array of {@link GstMpegts.Descriptor} contained in the section, or `null` if an error happened. Release with `g_array_unref` when done.
         */
        get_tsdt(): Descriptor[] | null;
        /**
         * Packetize (i.e. serialize) the `section`. If the data in `section` has already
         * been packetized, the data pointer is returned immediately. Otherwise, the
         * data field is allocated and populated.
         * @returns pointer to section data, or `null` on failure.
         */
        packetize(): [number, number];
        /**
         * Creates a custom {@link Gst.Event} with a `GstMpegtsSection` and send it the `element`
         * {@link Gst.Element}.
         * @param element The {@link Gst.Element} to send to section event to
         * @returns `true` if the event was sent to the element.
         */
        send_event(element: Gst.Element): boolean;
    }

    /**
     * @gir-type Struct
     */
    class T2DeliverySystemCell {
        static $gtype: GObject.GType<T2DeliverySystemCell>;

        // Fields

        cell_id: number;
        centre_frequencies: number[];
        sub_cells: T2DeliverySystemCellExtension[];

        // Constructors

        constructor(
            properties?: Partial<{
                cell_id: number;
                centre_frequencies: number[];
                sub_cells: T2DeliverySystemCellExtension[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class T2DeliverySystemCellExtension {
        static $gtype: GObject.GType<T2DeliverySystemCellExtension>;

        // Fields

        cell_id_extension: number;
        transposer_frequency: number;

        // Constructors

        constructor(
            properties?: Partial<{
                cell_id_extension: number;
                transposer_frequency: number;
            }>,
        );
    }

    /**
     * describe DVB-T2 transmissions according to EN 302 755
     * @gir-type Struct
     */
    class T2DeliverySystemDescriptor {
        static $gtype: GObject.GType<T2DeliverySystemDescriptor>;

        // Fields

        plp_id: number;
        t2_system_id: number;
        siso_miso: number;
        bandwidth: number;
        guard_interval: TerrestrialGuardInterval;
        transmission_mode: TerrestrialTransmissionMode;
        other_frequency: boolean;
        tfs: boolean;
        cells: T2DeliverySystemCell[];

        // Methods

        free(): void;
    }

    /**
     * Time Offset Table (EN 300 468)
     * @gir-type Struct
     */
    class TOT {
        static $gtype: GObject.GType<TOT>;

        // Fields

        descriptors: Descriptor[];
    }

    /**
     * Terrestrial Delivery System Descriptor (EN 300 468 v.1.13.1)
     * @gir-type Struct
     */
    class TerrestrialDeliverySystemDescriptor {
        static $gtype: GObject.GType<TerrestrialDeliverySystemDescriptor>;

        // Fields

        frequency: number;
        bandwidth: number;
        priority: boolean;
        time_slicing: boolean;
        mpe_fec: boolean;
        constellation: ModulationType;
        hierarchy: TerrestrialHierarchy;
        code_rate_hp: DVBCodeRate;
        code_rate_lp: DVBCodeRate;
        guard_interval: TerrestrialGuardInterval;
        transmission_mode: TerrestrialTransmissionMode;
        other_frequency: boolean;
    }

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

export default GstMpegts;

// END
