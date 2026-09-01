
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
        STUFFING = 128,
        AC3 = 129,
        CAPTION_SERVICE = 134,
        CONTENT_ADVISORY = 135,
        EXTENDED_CHANNEL_NAME = 160,
        SERVICE_LOCATION = 161,
        TIME_SHIFTED_SERVICE = 162,
        COMPONENT_NAME = 163,
        DCC_DEPARTING_REQUEST = 168,
        DCC_ARRIVING_REQUEST = 169,
        REDISTRIBUTION_CONTROL = 170,
        GENRE = 171,
        PRIVATE_INFORMATION = 173,
        EAC3 = 204,
        ENHANCED_SIGNALING = 178,
        DATA_SERVICE = 164,
        PID_COUNT = 165,
        DOWNLOAD_DESCRIPTOR = 166,
        MULTIPROTOCOL_ENCAPSULATION = 167,
        MODULE_LINK = 180,
        CRC32 = 181,
        GROUP_LINK = 184,
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
        DCII_VIDEO = 128,
        /**
         * ATSC A/53 Audio | AC-3
         */
        AUDIO_AC3 = 129,
        /**
         * SCTE-27 Subtitling
         */
        SUBTITLING = 130,
        /**
         * SCTE-19 Isochronous data | Reserved
         */
        ISOCH_DATA = 131,
        /**
         * SCTE-35 Splice Information Table
         */
        SIT = 134,
        /**
         * E-AC-3 A/52:2018
         */
        AUDIO_EAC3 = 135,
        /**
         * E-AC-3 A/107 (ATSC 2.0)
         */
        AUDIO_DTS_HD = 136,
    }


    /**
     * @gir-type Enum
     */
    enum AtscMGTTableType {
        EIT0 = 256,
        EIT127 = 383,
        ETT0 = 512,
        ETT127 = 639,
    }


    /**
     * @gir-type Enum
     */
    enum CableOuterFECScheme {
        UNDEFINED = 0,
        NONE = 1,
        RS_204_188 = 2,
    }


    /**
     * @gir-type Enum
     */
    enum ComponentStreamContent {
        MPEG2_VIDEO = 1,
        MPEG1_LAYER2_AUDIO = 2,
        TELETEXT_OR_SUBTITLE = 3,
        AC_3 = 4,
        AVC = 5,
        AAC = 6,
        DTS = 7,
        SRM_CPCM = 8,
    }


    /**
     * @gir-type Enum
     */
    enum ContentNibbleHi {
        MOVIE_DRAMA = 1,
        NEWS_CURRENT_AFFAIRS = 2,
        SHOW_GAME_SHOW = 3,
        SPORTS = 4,
        CHILDREN_YOUTH_PROGRAM = 5,
        MUSIC_BALLET_DANCE = 6,
        ARTS_CULTURE = 7,
        SOCIAL_POLITICAL_ECONOMICS = 8,
        EDUCATION_SCIENCE_FACTUAL = 9,
        LEISURE_HOBBIES = 10,
        SPECIAL_CHARACTERISTICS = 11,
    }


    /**
     * @gir-type Enum
     */
    enum DVBCodeRate {
        NONE = 0,
        "1_2" = 1,
        "2_3" = 2,
        "3_4" = 3,
        "4_5" = 4,
        "5_6" = 5,
        "6_7" = 6,
        "7_8" = 7,
        "8_9" = 8,
        AUTO = 9,
        "3_5" = 10,
        "9_10" = 11,
        "2_5" = 12,
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
        NETWORK_NAME = 64,
        SERVICE_LIST = 65,
        STUFFING = 66,
        SATELLITE_DELIVERY_SYSTEM = 67,
        CABLE_DELIVERY_SYSTEM = 68,
        VBI_DATA = 69,
        VBI_TELETEXT = 70,
        BOUQUET_NAME = 71,
        SERVICE = 72,
        COUNTRY_AVAILABILITY = 73,
        LINKAGE = 74,
        NVOD_REFERENCE = 75,
        TIME_SHIFTED_SERVICE = 76,
        SHORT_EVENT = 77,
        EXTENDED_EVENT = 78,
        TIME_SHIFTED_EVENT = 79,
        COMPONENT = 80,
        MOSAIC = 81,
        STREAM_IDENTIFIER = 82,
        CA_IDENTIFIER = 83,
        CONTENT = 84,
        PARENTAL_RATING = 85,
        TELETEXT = 86,
        TELEPHONE = 87,
        LOCAL_TIME_OFFSET = 88,
        SUBTITLING = 89,
        TERRESTRIAL_DELIVERY_SYSTEM = 90,
        MULTILINGUAL_NETWORK_NAME = 91,
        MULTILINGUAL_BOUQUET_NAME = 92,
        MULTILINGUAL_SERVICE_NAME = 93,
        MULTILINGUAL_COMPONENT = 94,
        PRIVATE_DATA_SPECIFIER = 95,
        SERVICE_MOVE = 96,
        SHORT_SMOOTHING_BUFFER = 97,
        FREQUENCY_LIST = 98,
        /**
         * Partial Transport Stream descriptor. Only present in SIT Sections.
         * 
         * See also: {@link GstMpegts.SectionType.SIT}, %GstMpegtsSIT
         */
        PARTIAL_TRANSPORT_STREAM = 99,
        DATA_BROADCAST = 100,
        SCRAMBLING = 101,
        DATA_BROADCAST_ID = 102,
        TRANSPORT_STREAM = 103,
        DSNG = 104,
        PDC = 105,
        AC3 = 106,
        ANCILLARY_DATA = 107,
        CELL_LIST = 108,
        CELL_FREQUENCY_LINK = 109,
        ANNOUNCEMENT_SUPPORT = 110,
        APPLICATION_SIGNALLING = 111,
        ADAPTATION_FIELD_DATA = 112,
        SERVICE_IDENTIFIER = 113,
        SERVICE_AVAILABILITY = 114,
        DEFAULT_AUTHORITY = 115,
        RELATED_CONTENT = 116,
        TVA_ID = 117,
        CONTENT_IDENTIFIER = 118,
        TIMESLICE_FEC_IDENTIFIER = 119,
        ECM_REPETITION_RATE = 120,
        S2_SATELLITE_DELIVERY_SYSTEM = 121,
        ENHANCED_AC3 = 122,
        DTS = 123,
        AAC = 124,
        XAIT_LOCATION = 125,
        FTA_CONTENT_MANAGEMENT = 126,
        EXTENSION = 127,
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
        IMAGE_ICON = 0,
        CPCM_DELIVERY_SIGNALLING = 1,
        CP = 2,
        CP_IDENTIFIER = 3,
        T2_DELIVERY_SYSTEM = 4,
        SH_DELIVERY_SYSTEM = 5,
        SUPPLEMENTARY_AUDIO = 6,
        NETWORK_CHANGE_NOTIFY = 7,
        MESSAGE = 8,
        TARGET_REGION = 9,
        TARGET_REGION_NAME = 10,
        SERVICE_RELOCATED = 11,
        XAIT_PID = 12,
        C2_DELIVERY_SYSTEM = 13,
        DTS_HD_AUDIO_STREAM = 14,
        DTS_NEUTRAL = 15,
        VIDEO_DEPTH_RANGE = 16,
        T2MI = 17,
        URI_LINKAGE = 19,
        AC4 = 21,
        /**
         * Provide all avaliable audio programme for user selection
         * @since 1.20
         */
        AUDIO_PRESELECTION = 25,
    }


    /**
     * @gir-type Enum
     */
    enum DVBLinkageHandOverType {
        RESERVED = 0,
        IDENTICAL = 1,
        LOCAL_VARIATION = 2,
        ASSOCIATED = 3,
    }


    /**
     * Linkage Type (EN 300 468 v.1.13.1)
     * @gir-type Enum
     */
    enum DVBLinkageType {
        RESERVED_00 = 0,
        INFORMATION = 1,
        EPG = 2,
        CA_REPLACEMENT = 3,
        TS_CONTAINING_COMPLETE_SI = 4,
        SERVICE_REPLACEMENT = 5,
        DATA_BROADCAST = 6,
        RCS_MAP = 7,
        MOBILE_HAND_OVER = 8,
        SYSTEM_SOFTWARE_UPDATE = 9,
        TS_CONTAINING_SSU = 10,
        IP_MAC_NOTIFICATION = 11,
        TS_CONTAINING_INT = 12,
        EVENT = 13,
        EXTENDED_EVENT = 14,
    }


    /**
     * @gir-type Enum
     */
    enum DVBScramblingModeType {
        RESERVED = 0,
        CSA1 = 1,
        CSA2 = 2,
        CSA3_STANDARD = 3,
        CSA3_MINIMAL_ENHANCED = 4,
        CSA3_FULL_ENHANCED = 5,
        CISSA = 16,
        ATIS_0 = 112,
        ATIS_F = 127,
    }


    /**
     * The type of service of a channel.
     * 
     * As specified in Table 87 of ETSI EN 300 468 v1.13.1
     * @gir-type Enum
     */
    enum DVBServiceType {
        RESERVED_00 = 0,
        DIGITAL_TELEVISION = 1,
        DIGITAL_RADIO_SOUND = 2,
        TELETEXT = 3,
        NVOD_REFERENCE = 4,
        NVOD_TIME_SHIFTED = 5,
        MOSAIC = 6,
        FM_RADIO = 7,
        DVB_SRM = 8,
        RESERVED_09 = 9,
        ADVANCED_CODEC_DIGITAL_RADIO_SOUND = 10,
        ADVANCED_CODEC_MOSAIC = 11,
        DATA_BROADCAST = 12,
        RESERVED_0D_COMMON_INTERFACE = 13,
        RCS_MAP = 14,
        RCS_FLS = 15,
        DVB_MHP = 16,
        MPEG2_HD_DIGITAL_TELEVISION = 17,
        ADVANCED_CODEC_SD_DIGITAL_TELEVISION = 22,
        ADVANCED_CODEC_SD_NVOD_TIME_SHIFTED = 23,
        ADVANCED_CODEC_SD_NVOD_REFERENCE = 24,
        ADVANCED_CODEC_HD_DIGITAL_TELEVISION = 25,
        ADVANCED_CODEC_HD_NVOD_TIME_SHIFTED = 26,
        ADVANCED_CODEC_HD_NVOD_REFERENCE = 27,
        ADVANCED_CODEC_STEREO_HD_DIGITAL_TELEVISION = 28,
        ADVANCED_CODEC_STEREO_HD_NVOD_TIME_SHIFTED = 29,
        ADVANCED_CODEC_STEREO_HD_NVOD_REFERENCE = 30,
        RESERVED_FF = 31,
    }


    /**
     * The type of teletext page.
     * 
     * As specified in Table 100 of ETSI EN 300 468 v1.13.1
     * @gir-type Enum
     */
    enum DVBTeletextType {
        NITIAL_PAGE = 1,
        UBTITLE_PAGE = 2,
        DDITIONAL_INFO_PAGE = 3,
        ROGRAMME_SCHEDULE_PAGE = 4,
        EARING_IMPAIRED_PAGE = 5,
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
        RESERVED_00 = 0,
        RESERVED_01 = 1,
        VIDEO_STREAM = 2,
        AUDIO_STREAM = 3,
        HIERARCHY = 4,
        REGISTRATION = 5,
        DATA_STREAM_ALIGNMENT = 6,
        TARGET_BACKGROUND_GRID = 7,
        VIDEO_WINDOW = 8,
        CA = 9,
        ISO_639_LANGUAGE = 10,
        SYSTEM_CLOCK = 11,
        MULTIPLEX_BUFFER_UTILISATION = 12,
        COPYRIGHT = 13,
        MAXIMUM_BITRATE = 14,
        PRIVATE_DATA_INDICATOR = 15,
        SMOOTHING_BUFFER = 16,
        STD = 17,
        IBP = 18,
        DSMCC_CAROUSEL_IDENTIFIER = 19,
        DSMCC_ASSOCIATION_TAG = 20,
        DSMCC_DEFERRED_ASSOCIATION_TAG = 21,
        DSMCC_NPT_REFERENCE = 23,
        DSMCC_NPT_ENDPOINT = 24,
        DSMCC_STREAM_MODE = 25,
        DSMCC_STREAM_EVENT = 26,
        MPEG4_VIDEO = 27,
        MPEG4_AUDIO = 28,
        IOD = 29,
        SL = 30,
        FMC = 31,
        EXTERNAL_ES_ID = 32,
        MUX_CODE = 33,
        FMX_BUFFER_SIZE = 34,
        MULTIPLEX_BUFFER = 35,
        CONTENT_LABELING = 36,
        METADATA_POINTER = 37,
        METADATA = 38,
        METADATA_STD = 39,
        AVC_VIDEO = 40,
        IPMP = 41,
        AVC_TIMING_AND_HRD = 42,
        MPEG2_AAC_AUDIO = 43,
        FLEX_MUX_TIMING = 44,
        MPEG4_TEXT = 45,
        MPEG4_AUDIO_EXTENSION = 46,
        AUXILIARY_VIDEO_STREAM = 47,
        SVC_EXTENSION = 48,
        MVC_EXTENSION = 49,
        J2K_VIDEO = 50,
        MVC_OPERATION_POINT = 51,
        MPEG2_STEREOSCOPIC_VIDEO_FORMAT = 52,
        STEREOSCOPIC_PROGRAM_INFO = 53,
        STEREOSCOPIC_VIDEO_INFO = 54,
        /**
         * Extension Descriptor.
         * @since 1.26
         */
        EXTENSION = 63,
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
        MTS_DESC_EXT_JXS_VIDEO = 20,
    }


    /**
     * Type of mpeg-ts streams for Blu-ray formats. To be matched with the
     * stream-type of a {@link GstMpegts.Section}.
     * @gir-type Enum
     * @since 1.20
     */
    enum HdmvStreamType {
        AUDIO_LPCM = 128,
        AUDIO_AC3 = 129,
        AUDIO_DTS = 130,
        AUDIO_AC3_TRUE_HD = 131,
        AUDIO_AC3_PLUS = 132,
        AUDIO_DTS_HD = 133,
        AUDIO_DTS_HD_MASTER_AUDIO = 134,
        AUDIO_EAC3 = 135,
        SUBPICTURE_PGS = 144,
        IGS = 145,
        SUBTITLE = 146,
        AUDIO_AC3_PLUS_SECONDARY = 161,
        AUDIO_DTS_HD_SECONDARY = 162,
    }


    /**
     * These values correspond to the registered descriptor type from
     * the various ISDB specifications.
     * 
     * Consult the relevant specifications for more details.
     * @gir-type Enum
     */
    enum ISDBDescriptorType {
        HIERARCHICAL_TRANSMISSION = 192,
        DIGITAL_COPY_CONTROL = 193,
        NETWORK_IDENTIFICATION = 194,
        PARTIAL_TS_TIME = 195,
        AUDIO_COMPONENT = 196,
        HYPERLINK = 197,
        TARGET_REGION = 198,
        DATA_CONTENT = 199,
        VIDEO_DECODE_CONTROL = 200,
        DOWNLOAD_CONTENT = 201,
        CA_EMM_TS = 202,
        CA_CONTRACT_INFORMATION = 203,
        CA_SERVICE = 204,
        TS_INFORMATION = 205,
        EXTENDED_BROADCASTER = 206,
        LOGO_TRANSMISSION = 207,
        BASIC_LOCAL_EVENT = 208,
        REFERENCE = 209,
        NODE_RELATION = 210,
        SHORT_NODE_INFORMATION = 211,
        STC_REFERENCE = 212,
        SERIES = 213,
        EVENT_GROUP = 214,
        SI_PARAMETER = 215,
        BROADCASTER_NAME = 216,
        COMPONENT_GROUP = 217,
        SI_PRIME_TS = 218,
        BOARD_INFORMATION = 219,
        LDT_LINKAGE = 220,
        CONNECTED_TRANSMISSION = 221,
        CONTENT_AVAILABILITY = 222,
        SERVICE_GROUP = 224,
    }


    /**
     * @gir-type Enum
     */
    enum Iso639AudioType {
        UNDEFINED = 0,
        CLEAN_EFFECTS = 1,
        HEARING_IMPAIRED = 2,
        VISUAL_IMPAIRED_COMMENTARY = 3,
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
        ISAN = 16,
        VSAN = 17,
        IDENTIFIER_FIELD = 65535,
    }


    /**
     * metadata_descriptor metadata_format valid values. See ISO/IEC 13818-1:2018(E) Table 2-85.
     * @gir-type Enum
     * @since 1.24
     */
    enum MetadataFormat {
        /**
         * ISO/IEC 15938-1 TeM.
         * @since 1.24
         */
        TEM = 16,
        /**
         * ISO/IEC 15938-1 BiM.
         * @since 1.24
         */
        BIM = 17,
        /**
         * Defined by metadata application format.
         * @since 1.24
         */
        APPLICATION_FORMAT = 63,
        /**
         * Defined by metadata_format_identifier field.
         * @since 1.24
         */
        IDENTIFIER_FIELD = 255,
    }


    /**
     * The type of {@link GstMpegts.Descriptor}
     * 
     * These values correspond to miscellaneous descriptor types that are
     * not yet identified from known specifications.
     * @gir-type Enum
     */
    enum MiscDescriptorType {
        MTS_DESC_DTG_LOGICAL_CHANNEL = 131,
    }


    /**
     * @gir-type Enum
     */
    enum ModulationType {
        QPSK = 0,
        QAM_16 = 1,
        QAM_32 = 2,
        QAM_64 = 3,
        QAM_128 = 4,
        QAM_256 = 5,
        QAM_AUTO = 6,
        VSB_8 = 7,
        VSB_16 = 8,
        PSK_8 = 9,
        APSK_16 = 10,
        APSK_32 = 11,
        DQPSK = 12,
        QAM_4_NR_ = 13,
        NONE = 14,
    }


    /**
     * Running status of a service.
     * 
     * Corresponds to table 6 of ETSI EN 300 468 (v1.13.0)
     * @gir-type Enum
     */
    enum RunningStatus {
        UNDEFINED = 0,
        NOT_RUNNING = 1,
        STARTS_IN_FEW_SECONDS = 2,
        PAUSING = 3,
        RUNNING = 4,
        OFF_AIR = 5,
    }


    /**
     * These values correspond to the ones defined by SCTE (amongst other in ANSI/SCTE 57)
     * @gir-type Enum
     * @since 1.20
     */
    enum SCTEDescriptorType {
        STUFFING = 128,
        AC3 = 129,
        FRAME_RATE = 130,
        EXTENDED_VIDEO = 131,
        COMPONENT_NAME = 132,
        FREQUENCY_SPEC = 144,
        MODULATION_PARAMS = 145,
        TRANSPORT_STREAM_ID = 146,
    }


    /**
     * @gir-type Enum
     */
    enum SCTESpliceCommandType {
        NULL = 0,
        SCHEDULE = 4,
        INSERT = 5,
        TIME = 6,
        BANDWIDTH = 7,
        PRIVATE = 255,
    }


    /**
     * @gir-type Enum
     */
    enum SCTESpliceDescriptor {
        AVAIL = 0,
        DTMF = 1,
        SEGMENTATION = 2,
        TIME = 3,
        AUDIO = 4,
    }


    /**
     * @gir-type Enum
     */
    enum SatellitePolarizationType {
        LINEAR_HORIZONTAL = 0,
        LINEAR_VERTICAL = 1,
        CIRCULAR_LEFT = 2,
        CIRCULAR_RIGHT = 3,
    }


    /**
     * @gir-type Struct
     */
    class SatelliteRolloff {
        static $gtype: GObject.GType<SatelliteRolloff>;

        // Static fields
        static "35": number;

        static "20": number;

        static "25": number;

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
        SUBTITLING = 130,
        /**
         * SCTE-19 Isochronous data
         */
        ISOCH_DATA = 131,
        /**
         * SCTE-35 Splice Information Table
         */
        SIT = 134,
        /**
         * SCTE-07 Data Service or
         * Network Resource Table
         */
        DST_NRT = 149,
        /**
         * Type B - DSM-CC Data Carousel
         * [IEC 13818-6])
         */
        DSMCC_DCB = 176,
        /**
         * Enhanced Television Application
         * Signaling (OC-SP-ETV-AM1.0.1-120614)
         */
        SIGNALING = 192,
        /**
         * SCTE-07 Synchronous data
         */
        SYNC_DATA = 194,
        /**
         * SCTE-53 Asynchronous data
         */
        ASYNC_DATA = 195,
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
        MASTER_GUIDE = 199,
        /**
         * Terrestrial Virtual Channel Table (TVCT)
         */
        TERRESTRIAL_VIRTUAL_CHANNEL = 200,
        /**
         * Cable Virtual Channel Table (CVCT)
         */
        CABLE_VIRTUAL_CHANNEL = 201,
        /**
         * Rating Region Table (RRT)
         */
        RATING_REGION = 202,
        /**
         * Event Information Table (EIT)
         */
        EVENT_INFORMATION = 203,
        /**
         * Extended Text Table (ETT)
         */
        CHANNEL_OR_EVENT_EXTENDED_TEXT = 204,
        /**
         * System Time Table (STT)
         */
        SYSTEM_TIME = 205,
        /**
         * A/90: Data Event Table (DET)
         */
        DATA_EVENT = 206,
        /**
         * A/90: Data Service Table (DST)
         */
        DATA_SERVICE = 207,
        /**
         * A/57B: Program Identifier Table.
         * @since 1.20
         */
        PROGRAM_IDENTIFIER = 208,
        /**
         * A/90: Network Resources Table (NRT)
         */
        NETWORK_RESOURCE = 209,
        /**
         * A/90: Long Term Service Table (LTST)
         */
        LONG_TERM_SERVICE = 210,
        /**
         * Directed Channel Change Table (DCCT)
         */
        DIRECTED_CHANNEL_CHANGE = 211,
        /**
         * Directed Channel Change Selection Code Table (DCCSCT)
         */
        DIRECTED_CHANNEL_CHANGE_SECTION_CODE = 212,
        AGGREGATE_EVENT_INFORMATION = 214,
        AGGREGATE_EXTENDED_TEXT = 215,
        AGGREGATE_DATA_EVENT = 217,
        /**
         * A/81: Satellite Virtual Channel Table
         */
        SATELLITE_VIRTUAL_CHANNEL = 218,
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
        NETWORK_INFORMATION_ACTUAL_NETWORK = 64,
        /**
         * Network Information Table (NIT), Other Network
         */
        NETWORK_INFORMATION_OTHER_NETWORK = 65,
        /**
         * Service Description Table (SDT), Actual Transport Stream
         */
        SERVICE_DESCRIPTION_ACTUAL_TS = 66,
        /**
         * Service Description Table (SDT), Other Transport Stream
         */
        SERVICE_DESCRIPTION_OTHER_TS = 70,
        /**
         * Bouquet Association Table (BAT)
         */
        BOUQUET_ASSOCIATION = 74,
        /**
         * ETSI TS 102 006: Update Notification Table (UNT)
         * @since 1.20
         */
        UPDATE_NOTIFICATION = 75,
        /**
         * ETSI EN 303 560: Downloadable Font Info
         * @since 1.20
         */
        DOWNLOADABLE_FONT_INFO = 76,
        /**
         * Event Information Table (EIT), Actual Transport Stream, present/following
         */
        EVENT_INFORMATION_ACTUAL_TS_PRESENT = 78,
        /**
         * Event Information Table (EIT), Other Transport Stream, present/following
         */
        EVENT_INFORMATION_OTHER_TS_PRESENT = 79,
        /**
         * Event Information Table (EIT), Actual Transport Stream, Schedule (first)
         */
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_1 = 80,
        /**
         * Event Information Table (EIT), Actual Transport Stream, Schedule (last)
         */
        EVENT_INFORMATION_ACTUAL_TS_SCHEDULE_N = 95,
        /**
         * Event Information Table (EIT), Other Transport Stream, Schedule (first)
         */
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_1 = 96,
        /**
         * Event Information Table (EIT), Other Transport Stream, Schedule (last)
         */
        EVENT_INFORMATION_OTHER_TS_SCHEDULE_N = 111,
        /**
         * Time Date Table (TDT)
         */
        TIME_DATE = 112,
        /**
         * Running Status Table (RST)
         */
        RUNNING_STATUS = 113,
        /**
         * Stuffing Table (ST)
         */
        STUFFING = 114,
        /**
         * Time Offset Table (TOT)
         */
        TIME_OFFSET = 115,
        /**
         * ETSI TS 102 323: Application Information Table (AIT)
         */
        APPLICATION_INFORMATION_TABLE = 116,
        /**
         * ETSI TS 102 323: Container Section
         */
        CONTAINER = 117,
        /**
         * ETSI TS 102 323: Related Content Table (RCT)
         */
        RELATED_CONTENT = 118,
        /**
         * ETSI TS 102 323: Content Identifier Table (CIT)
         */
        CONTENT_IDENTIFIER = 119,
        /**
         * ETSI TS 301 192: MPE-FEC Section
         */
        MPE_FEC = 120,
        /**
         * ETSI 103 323: Resolution Provider Notification Table (RNT)
         */
        RESOLUTION_NOTIFICATION = 121,
        /**
         * ETSI TS 102 772: MPE-IFEC Section
         */
        MPE_IFEC = 122,
        /**
         * ETSI TS 102 809: Protection Message Section
         * @since 1.20
         */
        PROTECTION_MESSAGE = 123,
        /**
         * Discontinuity Information Table (DIT)
         */
        DISCONTINUITY_INFORMATION = 126,
        /**
         * Selection Information Table (SIT)
         */
        SELECTION_INFORMATION = 127,
        /**
         * ETSI TR 289: CA Message Table (CMT): ECM 0
         */
        CA_MESSAGE_ECM_0 = 128,
        /**
         * ETSI TR 289: CA Message Table (CMT): ECM 1
         */
        CA_MESSAGE_ECM_1 = 129,
        /**
         * ETSI TR 289: CA Message Table (CMT): CA System Private (First)
         */
        CA_MESSAGE_SYSTEM_PRIVATE_1 = 130,
        /**
         * ETSI TR 289: CA Message Table (CMT): CA System Private (Last)
         */
        CA_MESSAGE_SYSTEM_PRIVATE_N = 143,
        SCT = 160,
        FCT = 161,
        TCT = 162,
        SPT = 163,
        CMT = 164,
        TBTP = 165,
        PCR_PACKET_PAYLOAD = 166,
        TRANSMISSION_MODE_SUPPORT_PAYLOAD = 170,
        TIM = 176,
        LL_FEC_PARITY_DATA_TABLE = 177,
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
        EAS = 216,
        /**
         * CL-SP-ETV-AM 1.0.1 EBIF message
         */
        EBIF = 224,
        RESERVED = 225,
        /**
         * CL-SP-ETV-AM 1.0.1 EBIF Int. Signaling Sect.
         */
        EISS = 226,
        /**
         * CL-SP-ETV-AM 1.0.1 DSMCC DII message
         */
        DII = 227,
        /**
         * CL-SP-ETV-AM 1.0.1 DSMCC Data Download Block
         */
        DDB = 228,
        /**
         * SCTE-35 splice information is carried in a
         * section stream on a separate PID in the program’s Map Table (PMT) allowing
         * Splice Event notifications to remain associated with the program and pass
         * through multiplexers.
         */
        SPLICE = 252,
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
        PROGRAM_ASSOCIATION = 0,
        /**
         * Conditional Access Table (CAT)
         */
        CONDITIONAL_ACCESS = 1,
        /**
         * Program Map Table (PMT)
         */
        TS_PROGRAM_MAP = 2,
        /**
         * Transport Stream Description Table
         */
        TS_DESCRIPTION = 3,
        /**
         * ISO/IEC 14496 Scene Description Table
         */
        "14496_SCENE_DESCRIPTION" = 4,
        /**
         * ISO/IEC 14496 Object Descriptor Table
         */
        "14496_OBJET_DESCRIPTOR" = 5,
        /**
         * Metadata Section
         */
        METADATA = 6,
        /**
         * IPMP Control Information
         */
        IPMP_CONTROL_INFORMATION = 7,
        /**
         * ISO/IEC 14496 Section.
         * @since 1.20
         */
        "14496_SECTION" = 8,
        /**
         * ISO/IEC 23001-11 (Green Access Unit) Section.
         * @since 1.20
         */
        "23001_11_SECTION" = 9,
        /**
         * ISO/ISO 23001-10 (Quality Access Unit) Section.
         * @since 1.20
         */
        "23001_10_SECTION" = 10,
        /**
         * DSM-CC Multi-Protocol Encapsulated (MPE) Data
         */
        DSM_CC_MULTIPROTO_ENCAPSULATED_DATA = 58,
        /**
         * DSM-CC U-N Messages
         */
        DSM_CC_U_N_MESSAGES = 59,
        /**
         * DSM-CC Download Data Messages
         */
        DSM_CC_DOWNLOAD_DATA_MESSAGES = 60,
        /**
         * DSM-CC Stream Descriptors
         */
        DSM_CC_STREAM_DESCRIPTORS = 61,
        /**
         * DSM-CC Private Data
         */
        DSM_CC_PRIVATE_DATA = 62,
        /**
         * DSM-CC Addressable Section
         */
        DSM_CC_ADDRESSABLE_SECTIONS = 63,
        /**
         * Unset section table_id (value is forbidden to use in actual sections)
         */
        UNSET = 255,
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
        UNKNOWN = 0,
        /**
         * Program Association Table (ISO/IEC 13818-1)
         */
        PAT = 1,
        /**
         * Program Map Table (ISO/IEC 13818-1)
         */
        PMT = 2,
        /**
         * Conditional Access Table (ISO/IEC 13818-1)
         */
        CAT = 3,
        /**
         * Transport Stream Description Table (ISO/IEC 13818-1)
         */
        TSDT = 4,
        /**
         * Event Information Table (EN 300 468)
         */
        EIT = 5,
        /**
         * Network Information Table (ISO/IEC 13818-1 / EN 300 468)
         */
        NIT = 6,
        /**
         * Bouquet Association Table ((EN 300 468)
         */
        BAT = 7,
        /**
         * Service Description Table (EN 300 468)
         */
        SDT = 8,
        /**
         * Time and Date Table (EN 300 468)
         */
        TDT = 9,
        /**
         * Time Offset Table (EN 300 468)
         */
        TOT = 10,
        /**
         * Selection Information Table (EN 300 468)
         * @since 1.20
         */
        SIT = 11,
        /**
         * ATSC Terrestrial Virtual Channel Table (A65)
         */
        ATSC_TVCT = 12,
        /**
         * ATSC Cable Virtual Channel Table (A65)
         */
        ATSC_CVCT = 13,
        /**
         * ATSC Master Guide Table (A65)
         */
        ATSC_MGT = 14,
        /**
         * ATSC Extended Text Table (A65)
         */
        ATSC_ETT = 15,
        /**
         * ATSC Event Information Table (A65)
         */
        ATSC_EIT = 16,
        /**
         * ATSC System Time Table (A65)
         */
        ATSC_STT = 17,
        /**
         * ATSC Rating Region Table (A65)
         */
        ATSC_RRT = 18,
        /**
         * SCTE Splice Information Table (SCTE-35)
         */
        SCTE_SIT = 19,
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
        RESERVED_00 = 0,
        /**
         * ISO/IEC 11172-2 Video (i.e. MPEG-1 Video)
         */
        VIDEO_MPEG1 = 1,
        /**
         * Rec. ITU-T H.262 | ISO/IEC 13818-2
         *       Video or ISO/IEC 11172-2 constrained parameter video stream (i.e.
         *       MPEG-2 Video)
         */
        VIDEO_MPEG2 = 2,
        /**
         * ISO/IEC 11172-3 Audio
         */
        AUDIO_MPEG1 = 3,
        /**
         * ISO/IEC 13818-3 Audio
         */
        AUDIO_MPEG2 = 4,
        /**
         * private sections
         */
        PRIVATE_SECTIONS = 5,
        /**
         * PES packets containing private data
         */
        PRIVATE_PES_PACKETS = 6,
        /**
         * ISO/IEC 13522 MHEG
         */
        MHEG = 7,
        /**
         * Annex A DSM-CC
         */
        DSM_CC = 8,
        /**
         * Rec. ITU-T H.222.1
         */
        H_222_1 = 9,
        /**
         * ISO/IEC 13818-6 type A
         */
        DSMCC_A = 10,
        /**
         * ISO/IEC 13818-6 type B
         */
        DSMCC_B = 11,
        /**
         * ISO/IEC 13818-6 type C
         */
        DSMCC_C = 12,
        /**
         * ISO/IEC 13818-6 type D
         */
        DSMCC_D = 13,
        /**
         * auxiliary streams
         */
        AUXILIARY = 14,
        /**
         * ISO/IEC 13818-7 Audio (AAC) with ADTS
         *       transport syntax
         */
        AUDIO_AAC_ADTS = 15,
        /**
         * ISO/IEC 14496-2 Visual (MPEG-4 Video)
         */
        VIDEO_MPEG4 = 16,
        /**
         * ISO/IEC 14496-3 Audio (AAC) with the LATM
         *       transport syntax as defined in ISO/IEC 14496-3
         */
        AUDIO_AAC_LATM = 17,
        /**
         * ISO/IEC 14496-1
         *       SL-packetized stream or FlexMux stream carried in PES packets
         */
        SL_FLEXMUX_PES_PACKETS = 18,
        /**
         * ISO/IEC 14496-1 SL-packetized
         *       stream or FlexMux stream carried in ISO/IEC 14496_sections
         */
        SL_FLEXMUX_SECTIONS = 19,
        /**
         * ISO/IEC 13818-6 Synchronized
         *       Download Protocol
         */
        SYNCHRONIZED_DOWNLOAD = 20,
        /**
         * Metadata carried in PES packets
         */
        METADATA_PES_PACKETS = 21,
        /**
         * Metadata carried in metadata_sections
         */
        METADATA_SECTIONS = 22,
        /**
         * Metadata carried in ISO/IEC
         *       13818-6 Data Carousel
         */
        METADATA_DATA_CAROUSEL = 23,
        /**
         * Metadata carried in
         *       ISO/IEC 13818-6 Object Carousel
         */
        METADATA_OBJECT_CAROUSEL = 24,
        /**
         * Metadata carried in
         *       ISO/IEC 13818-6 Synchronized Download Protocol
         */
        METADATA_SYNCHRONIZED_DOWNLOAD = 25,
        /**
         * IPMP stream (defined in ISO/IEC 13818-11,
         *       MPEG-2 IPMP)
         */
        MPEG2_IPMP = 26,
        /**
         * AVC video stream conforming to one or
         * more profiles defined in Annex A of Rec. ITU-T H.264 | ISO/IEC 14496-10 or
         * AVC video sub-bitstream of SVC as defined in 2.1.78 or MVC base view
         * sub-bitstream, as defined in 2.1.85, or AVC video sub-bitstream of MVC, as
         * defined in 2.1.88
         */
        VIDEO_H264 = 27,
        /**
         * ISO/IEC 14496-3 (AAC) Audio, without
         *       using any additional transport syntax, such as DST, ALS and SLS
         */
        AUDIO_AAC_CLEAN = 28,
        /**
         * ISO/IEC 14496-17 Text
         */
        MPEG4_TIMED_TEXT = 29,
        /**
         * Auxiliary video stream as defined in
         * ISO/IEC 23002-3
         */
        VIDEO_RVC = 30,
        /**
         * SVC video sub-bitstream
         * of an AVC video stream conforming to one or more profiles defined in Annex G
         * of Rec. ITU-T H.264 | ISO/IEC 14496-10
         */
        VIDEO_H264_SVC_SUB_BITSTREAM = 31,
        /**
         * MVC video sub-bitstream
         * of an AVC video stream conforming to one or more profiles defined in Annex H
         * of Rec. ITU-T H.264 | ISO/IEC 14496-10
         */
        VIDEO_H264_MVC_SUB_BITSTREAM = 32,
        /**
         * Video stream conforming to one or more
         *       profiles as defined in Rec. ITU-T T.800 | ISO/IEC 15444-1 (i.e. JPEG 2000)
         */
        VIDEO_JP2K = 33,
        /**
         * Additional view
         * Rec. ITU-T H.262 | ISO/IEC 13818-2 video stream for service-compatible
         * stereoscopic 3D services
         */
        VIDEO_MPEG2_STEREO_ADDITIONAL_VIEW = 34,
        /**
         * Additional view
         * Rec. ITU-T H.264 | ISO/IEC 14496-10 video stream conforming to one or more
         * profiles defined in Annex A for service-compatible stereoscopic 3D services
         */
        VIDEO_H264_STEREO_ADDITIONAL_VIEW = 35,
        /**
         * Rec. ITU-T H.265 | ISO/IEC 23008-2 video
         *      stream or an HEVC temporal video sub-bitstream
         */
        VIDEO_HEVC = 36,
        /**
         * JPEG-XS stream type
         * @since 1.26
         */
        VIDEO_JPEG_XS = 50,
        /**
         * VVC/H.266 video stream type
         * @since 1.26
         */
        VIDEO_VVC = 51,
        /**
         * IPMP stream
         */
        IPMP_STREAM = 127,
        /**
         * User Private stream id (used for VC-1) as defined by SMPTE RP227.
         * @since 1.20
         */
        USER_PRIVATE_EA = 234,
    }


    /**
     * @gir-type Enum
     */
    enum TerrestrialGuardInterval {
        "1_32" = 0,
        "1_16" = 1,
        "1_8" = 2,
        "1_4" = 3,
        AUTO = 4,
        "1_128" = 5,
        "19_128" = 6,
        "19_256" = 7,
        PN420 = 8,
        PN595 = 9,
        PN945 = 10,
    }


    /**
     * @gir-type Struct
     */
    class TerrestrialHierarchy {
        static $gtype: GObject.GType<TerrestrialHierarchy>;

        // Static fields
        static NONE: number;

        static "1": number;

        static "2": number;

        static "4": number;

        static AUTO: number;
    }


    /**
     * @gir-type Enum
     */
    enum TerrestrialTransmissionMode {
        "2K" = 0,
        "8K" = 1,
        AUTO = 2,
        "4K" = 3,
        "1K" = 4,
        "16K" = 5,
        "32K" = 6,
        C1 = 7,
        C3780 = 8,
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
    function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array | string): Descriptor;

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
    function descriptor_from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor | null;

    /**
     * @param lang a string containing the ISO639 language
     * @param type subtitling type
     * @param composition composition page id
     * @param ancillary ancillary page id
     */
    function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor;

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
    function descriptor_from_registration(format_identifier: string, additional_info: Uint8Array | string | null): Descriptor;

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
    function find_descriptor_with_extension(descriptors: Descriptor[], tag: number, tag_extension: number): Descriptor | null;

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
    function parse_descriptors(buffer: number, buf_len: bigint | number): Descriptor[] | null;

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
        static "0": number;

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

        constructor(properties?: Partial<{
            source_id: number;
            protocol_version: number;
            events: AtscEITEvent[];
        }>);
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

        constructor(properties?: Partial<{
            event_id: number;
            start_time: number;
            etm_location: number;
            length_in_seconds: number;
            titles: AtscMultString[];
            descriptors: Descriptor[];
        }>);
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

        constructor(properties?: Partial<{
            ett_table_id_extension: number;
            protocol_version: number;
            etm_id: number;
            messages: AtscMultString[];
        }>);
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

        constructor(properties?: Partial<{
            protocol_version: number;
            tables_defined: number;
            tables: AtscMGTTable[];
            descriptors: Descriptor[];
        }>);

        static ["new"](): AtscMGT;
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

        constructor(properties?: Partial<{
            table_type: number;
            pid: number;
            version_number: number;
            number_bytes: number;
            descriptors: Descriptor[];
        }>);
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

        constructor(properties?: Partial<{
            iso_639_langcode: number[];
            segments: AtscStringSegment[];
        }>);
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

        descriptors: null[];

        // Constructors

        constructor(properties?: Partial<{
            protocol_version: number;
            names: AtscMultString[];
            dimensions_defined: number;
            dimensions: AtscRRTDimension[];
            descriptors: null[];
        }>);

        static ["new"](): AtscRRT;
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

        constructor(properties?: Partial<{
            names: AtscMultString[];
            graduated_scale: boolean;
            values_defined: number;
            values: AtscRRTDimensionValue[];
        }>);

        static ["new"](): AtscRRTDimension;
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

        constructor(properties?: Partial<{
            abbrev_ratings: AtscMultString[];
            ratings: AtscMultString[];
        }>);

        static ["new"](): AtscRRTDimensionValue;
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

        constructor(properties?: Partial<{
            protocol_version: number;
            system_time: number;
            gps_utc_offset: number;
            ds_status: boolean;
            ds_dayofmonth: number;
            ds_hour: number;
            descriptors: Descriptor[];
        }>);

        static ["new"](): AtscSTT;

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

        constructor(properties?: Partial<{
            compression_type: number;
            mode: number;
            compressed_data_size: number;
            compressed_data: number;
            cached_string: string;
        }>);

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

        constructor(properties?: Partial<{
            transport_stream_id: number;
            protocol_version: number;
            sources: AtscVCTSource[];
            descriptors: Descriptor[];
        }>);
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

        constructor(properties?: Partial<{
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
        }>);
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

        constructor(properties?: Partial<{
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
        }>);
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

        constructor(properties?: Partial<{
            descriptors: Descriptor[];
            streams: BATStream[];
        }>);
    }


    /**
     * @gir-type Struct
     */
    class BATStream {
        static $gtype: GObject.GType<BATStream>;

        // Fields
        transport_stream_id: number;

        original_network_id: number;

        descriptors: null[];

        // Constructors

        constructor(properties?: Partial<{
            transport_stream_id: number;
            original_network_id: number;
            descriptors: null[];
        }>);
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

        constructor(properties?: Partial<{
            stream_content: number;
            component_type: number;
            component_tag: number;
            language_code: string;
            text: string;
        }>);
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

        constructor(properties?: Partial<{
            target_event_id: number;
            target_listed: boolean;
            event_simulcast: boolean;
        }>);
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

        constructor(properties?: Partial<{
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
        }>);
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

        constructor(properties?: Partial<{
            country_code: string;
            rating: number;
        }>);
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

        constructor(properties?: Partial<{
            data_broadcast_id: number;
            component_tag: number;
            length: number;
            selector_bytes: number;
            language_code: string;
            text: string;
        }>);

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

        constructor(properties?: Partial<{
            tag: number;
            tag_extension: number;
            length: number;
            data: number;
        }>);

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
         * @since 1.20
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
        static from_dvb_service(service_type: DVBServiceType, service_name: string | null, service_provider: string | null): Descriptor | null;

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
         * @since 1.26
         */
        static from_jpeg_xs(jpegxs: JpegXsDescriptor): Descriptor;

        /**
         * @param metadata_descriptor 
         * @since 1.26
         */
        static from_metadata(metadata_descriptor: MetadataDescriptor): Descriptor;

        /**
         * @param metadata_pointer_descriptor a {@link GstMpegts.MetadataPointerDescriptor}
         * @since 1.26
         */
        static from_metadata_pointer(metadata_pointer_descriptor: MetadataPointerDescriptor): Descriptor;

        /**
         * Creates a {@link GstMpegts.DescriptorType.REGISTRATION} {@link GstMpegts.Descriptor}
         * @param format_identifier a 4 character format identifier string
         * @param additional_info pointer to optional additional info
         */
        static from_registration(format_identifier: string, additional_info: Uint8Array | string | null): Descriptor;

        /**
         * @param source 
         * @since 1.20
         */
        static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void;

        /**
         * @param source 
         * @since 1.20
         */
        static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void;

        // Methods
        /**
         * Copy the given descriptor.
         * @returns A copy of `desc`.
         * @since 1.26
         */
        copy(): Descriptor;

        /**
         * Frees `desc`
         */
        free(): void;

        /**
         * Parses out a list of audio preselection from the `descriptor`.
         * @returns `true` if the parsing happened correctly, else `false`.
         * @since 1.20
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
         * @since 1.26
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
         * @since 1.24
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
         * @since 1.24
         */
        parse_metadata_std(metadata_input_leak_rate: number, metadata_buffer_size: number, metadata_output_leak_rate: number): boolean;

        /**
         * Extracts the Registration information from `descriptor`.
         * @returns `true` if parsing succeeded, else `false`.
         * @since 1.20
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

        constructor(properties?: Partial<{
            language_code: string;
            bouquet_name: string;
        }>);
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

        constructor(properties?: Partial<{
            language_code: string;
            description: string;
        }>);
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

        constructor(properties?: Partial<{
            language_code: string;
            network_name: string;
        }>);
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

        constructor(properties?: Partial<{
            language_code: string;
            provider_name: string;
            service_name: string;
        }>);
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

        events: EITEvent[];
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

        constructor(properties?: Partial<{
            descriptor_number: number;
            last_descriptor_number: number;
            language_code: string;
            items: ExtendedEventItem[];
            text: string;
        }>);

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

        constructor(properties?: Partial<{
            item_description: string;
            item: string;
        }>);
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

        constructor(properties?: Partial<{
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
        }>);
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

        constructor(properties?: Partial<{
            service_id: number;
            visible_service: boolean;
            logical_channel_number: number;
        }>);
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

        constructor(properties?: Partial<{
            nb_channels: number;
            channels: LogicalChannel[];
        }>);
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

        constructor(properties?: Partial<{
            actual_network: boolean;
            network_id: number;
            descriptors: Descriptor[];
            streams: NITStream[];
        }>);

        static ["new"](): NIT;
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

        constructor(properties?: Partial<{
            transport_stream_id: number;
            original_network_id: number;
            descriptors: Descriptor[];
        }>);

        static ["new"](): NITStream;
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
         * @since 1.24
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

        constructor(properties?: Partial<{
            pcr_pid: number;
            program_number: number;
            descriptors: Descriptor[];
            streams: PMTStream[];
        }>);

        static ["new"](): PMT;
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

        constructor(properties?: Partial<{
            stream_type: number;
            pid: number;
            descriptors: Descriptor[];
        }>);

        static ["new"](): PMTStream;
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

        constructor(properties?: Partial<{
            program_number: number;
            network_or_program_map_PID: number;
        }>);

        static ["new"](): PatProgram;
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

        splices: null[];

        descriptors: null[];

        fully_parsed: boolean;

        is_running_time: boolean;

        // Constructors

        constructor(properties?: Partial<{
            encrypted_packet: boolean;
            encryption_algorithm: number;
            pts_adjustment: number;
            cw_index: number;
            tier: number;
            splice_command_length: number;
            splice_command_type: SCTESpliceCommandType;
            splice_time_specified: boolean;
            splice_time: number;
            splices: null[];
            descriptors: null[];
            fully_parsed: boolean;
            is_running_time: boolean;
        }>);

        static ["new"](): SCTESIT;
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
        constructor(tag: number);

        static ["new"](tag: number): SCTESpliceComponent;
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

        components: null[];

        break_duration_auto_return: boolean;

        break_duration: number;

        unique_program_id: number;

        avail_num: number;

        avails_expected: number;

        // Constructors

        constructor(properties?: Partial<{
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
            components: null[];
            break_duration_auto_return: boolean;
            break_duration: number;
            unique_program_id: number;
            avail_num: number;
            avails_expected: number;
        }>);

        static ["new"](): SCTESpliceEvent;
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

        services: SDTService[];

        // Constructors

        constructor(properties?: Partial<{
            original_network_id: number;
            actual_ts: boolean;
            transport_stream_id: number;
            services: SDTService[];
        }>);

        static ["new"](): SDT;
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

        constructor(properties?: Partial<{
            service_id: number;
            EIT_schedule_flag: boolean;
            EIT_present_following_flag: boolean;
            running_status: RunningStatus;
            free_CA_mode: boolean;
            descriptors: Descriptor[];
        }>);

        static ["new"](): SDTService;
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

        services: SITService[];
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

        static ["new"](pid: number, data: Uint8Array | string): Section;

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
         * @since 1.18
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
         * @since 1.20
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

        constructor(properties?: Partial<{
            cell_id: number;
            centre_frequencies: number[];
            sub_cells: T2DeliverySystemCellExtension[];
        }>);
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

        constructor(properties?: Partial<{
            cell_id_extension: number;
            transposer_frequency: number;
        }>);
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
