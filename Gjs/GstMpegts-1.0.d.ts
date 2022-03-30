/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstMpegts-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstMpegts {

/**
 * These values correspond to the registered descriptor type from
 * the various ATSC specifications.
 * 
 * Consult the relevant specifications for more details.
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
enum AtscMGTTableType {
    EIT0,
    EIT127,
    ETT0,
    ETT127,
}
enum CableOuterFECScheme {
    UNDEFINED,
    NONE,
    RS_204_188,
}
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
enum DVBCodeRate {
    NONE,
    TODO_1_2,
    TODO_2_3,
    TODO_3_4,
    TODO_4_5,
    TODO_5_6,
    TODO_6_7,
    TODO_7_8,
    TODO_8_9,
    AUTO,
    TODO_3_5,
    TODO_9_10,
    TODO_2_5,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered descriptor type from
 * the various DVB specifications.
 * 
 * Consult the relevant specifications for more details.
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
     * See also: %GST_MPEGTS_SECTION_SIT, %GstMpegtsSIT
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
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered extended descriptor
 * type from the various DVB specifications.
 * 
 * Consult the relevant specifications for more details.
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
enum DVBLinkageHandOverType {
    RESERVED,
    IDENTICAL,
    LOCAL_VARIATION,
    ASSOCIATED,
}
/**
 * Linkage Type (EN 300 468 v.1.13.1)
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
 */
enum DVBTeletextType {
    NITIAL_PAGE,
    UBTITLE_PAGE,
    DDITIONAL_INFO_PAGE,
    ROGRAMME_SCHEDULE_PAGE,
    EARING_IMPAIRED_PAGE,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to the registered descriptor type from
 * the base MPEG-TS specifications (ITU H.222.0 | ISO/IEC 13818-1).
 * 
 * Consult the relevant specifications for more details.
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
}
/**
 * Type of mpeg-ts streams for Blu-ray formats. To be matched with the
 * stream-type of a #GstMpegtsSection.
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
enum Iso639AudioType {
    UNDEFINED,
    CLEAN_EFFECTS,
    HEARING_IMPAIRED,
    VISUAL_IMPAIRED_COMMENTARY,
}
/**
 * The type of #GstMpegtsDescriptor
 * 
 * These values correspond to miscellaneous descriptor types that are
 * not yet identified from known specifications.
 */
enum MiscDescriptorType {
    MTS_DESC_DTG_LOGICAL_CHANNEL,
}
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
enum SCTESpliceCommandType {
    NULL,
    SCHEDULE,
    INSERT,
    TIME,
    BANDWIDTH,
    PRIVATE,
}
enum SCTESpliceDescriptor {
    AVAIL,
    DTMF,
    SEGMENTATION,
    TIME,
    AUDIO,
}
enum SatellitePolarizationType {
    LINEAR_HORIZONTAL,
    LINEAR_VERTICAL,
    CIRCULAR_LEFT,
    CIRCULAR_RIGHT,
}
enum SatelliteRolloff {
    TODO_35,
    TODO_20,
    TODO_25,
    RESERVED,
    AUTO,
}
/**
 * Type of mpeg-ts streams for SCTE. Most users would want to use the
 * #GstMpegtsATSCStreamType instead since it also covers these stream types
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
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered ATSC section `table_id` variants. Unless specified
 * otherwise, they are defined in the "ATSC A/65" specification.
 * 
 * see also: #GstMpegtsSectionTableID and other variants.
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
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered DVB table_id variants. Unless specified otherwise,
 * they come from the DVB Specification for SI (ETSI EN 300 468).
 * 
 * see also: #GstMpegtsSectionTableID
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
 * Values for a #GstMpegtsSection table_id.
 * 
 * These are the registered SCTE table_id variants.
 * 
 * see also: #GstMpegtsSectionTableID
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
 * Values for a #GstMpegtsSection table_id
 * 
 * These are the registered ITU H.222.0 | ISO/IEC 13818-1 table_id variants.
 * 
 * see also #GstMpegtsSectionATSCTableID, #GstMpegtsSectionDVBTableID, and
 * #GstMpegtsSectionSCTETableID
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
    TODO_14496_SCENE_DESCRIPTION,
    /**
     * ISO/IEC 14496 Object Descriptor Table
     */
    TODO_14496_OBJET_DESCRIPTOR,
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
    TODO_14496_SECTION,
    /**
     * ISO/IEC 23001-11 (Green Access Unit) Section.
     */
    TODO_23001_11_SECTION,
    /**
     * ISO/ISO 23001-10 (Quality Access Unit) Section.
     */
    TODO_23001_10_SECTION,
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
 * Types of #GstMpegtsSection that the library handles. This covers all the
 * MPEG-TS and derivate specification that the library can properly identify and
 * use.
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
     * IPMP stream
     */
    IPMP_STREAM,
    /**
     * User Private stream id (used for VC-1) as defined by SMPTE RP227.
     */
    USER_PRIVATE_EA,
}
enum TerrestrialGuardInterval {
    TODO_1_32,
    TODO_1_16,
    TODO_1_8,
    TODO_1_4,
    AUTO,
    TODO_1_128,
    TODO_19_128,
    TODO_19_256,
    PN420,
    PN595,
    PN945,
}
enum TerrestrialHierarchy {
    NONE,
    TODO_1,
    TODO_2,
    TODO_4,
    AUTO,
}
enum TerrestrialTransmissionMode {
    TODO_2K,
    TODO_8K,
    AUTO,
    TODO_4K,
    TODO_1K,
    TODO_16K,
    TODO_32K,
    C1,
    C3780,
}
/**
 * Well-known registration ids, expressed as native-endian 32bit integers. These
 * are used in descriptors of type %GST_MTS_DESC_REGISTRATION. Unless specified
 * otherwise (by use of the "OTHER" prefix), they are all registered by the
 * [SMPTE Registration Authority](https://smpte-ra.org/) or specified in
 * "official" documentation for the given format.
 */
enum RegistrationId {
    /**
     * Undefined registration id
     */
    TODO_0,
    /**
     * Audio AC-3, ATSC A/52
     */
    AC_3,
    /**
     * SCTE 35, "Digital Program Insertion Cueing Message"
     */
    CUEI,
    /**
     * Dirac Video codec
     */
    DRAC,
    /**
     * DTS Audio
     */
    DTS1,
    /**
     * DTS Audio
     */
    DTS2,
    /**
     * DTS Audio
     */
    DTS3,
    /**
     * SMPTE 302M, Mapping of AES3 Data in mpeg-ts
     */
    BSSD,
    /**
     * Enhanced AC-3 (i.e. EAC3)
     */
    EAC3,
    /**
     * Cablelabs ETV
     */
    ETV1,
    /**
     * ATSC A/53 compliant stream (i.e. ATSC)
     */
    GA94,
    /**
     * Blu-ray, "System Description Blu-ray Disc
     *             Read-Only Format part 3 Audio Visual Basic Specifications"
     */
    HDMV,
    /**
     * SMPTE RP217 : Non-synchronized Mapping of KLV
     *             Packets in mpeg-ts
     */
    KLVA,
    /**
     * Opus Audio
     */
    OPUS,
    /**
     * HDV (Sony)
     */
    TSHV,
    /**
     * Video VC-1, SMPTE RP227 "VC-1 Bitstream Transport Encodings"
     */
    VC_1,
    /**
     * Audio AC-4, ETSI 103 190-2
     */
    AC_4,
    /**
     * HEVC / h265
     */
    OTHER_HEVC,
}
function descriptor_from_custom(tag: number, data: Uint8Array): Descriptor
function descriptor_from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array): Descriptor
function descriptor_from_dvb_network_name(name: string): Descriptor
function descriptor_from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
function descriptor_from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
function descriptor_from_iso_639_language(language: string): Descriptor
function descriptor_from_registration(format_identifier: string, additional_info: Uint8Array | null): Descriptor
function descriptor_parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
function descriptor_parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
function dvb_component_descriptor_free(source: ComponentDescriptor): void
function event_new_mpegts_section(section: Section): Gst.Event
function event_parse_mpegts_section(event: Gst.Event): Section
function find_descriptor(descriptors: Descriptor[], tag: number): Descriptor
function find_descriptor_with_extension(descriptors: Descriptor[], tag: number, tag_extension: number): Descriptor
function initialize(): void
function message_new_mpegts_section(parent: Gst.Object, section: Section): Gst.Message
function message_parse_mpegts_section(message: Gst.Message): Section
function parse_descriptors(buffer: number, buf_len: number): Descriptor[]
function pat_new(): PatProgram[]
function scte_cancel_new(event_id: number): SCTESIT
function scte_null_new(): SCTESIT
function scte_splice_in_new(event_id: number, splice_time: Gst.ClockTime): SCTESIT
function scte_splice_out_new(event_id: number, splice_time: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
function section_from_atsc_mgt(mgt: AtscMGT): Section
function section_from_atsc_rrt(rrt: AtscRRT): Section
function section_from_atsc_stt(stt: AtscSTT): Section
function section_from_nit(nit: NIT): Section
function section_from_pat(programs: PatProgram[], ts_id: number): Section
function section_from_pmt(pmt: PMT, pid: number): Section
function section_from_scte_sit(sit: SCTESIT, pid: number): Section
function section_from_sdt(sdt: SDT): Section
interface PacketizeFunc {
    (section: Section): boolean
}
class AtscEIT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEIT */
    /**
     * The source id
     */
    source_id: number
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * Events
     */
    events: AtscEITEvent[]
    static name: string
}
class AtscEITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEITEvent */
    /**
     * The event id
     */
    event_id: number
    /**
     * The start time
     */
    start_time: number
    /**
     * The etm location
     */
    etm_location: number
    /**
     * The length in seconds
     */
    length_in_seconds: number
    /**
     * the titles
     */
    titles: AtscMultString[]
    /**
     * descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class AtscETT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscETT */
    ett_table_id_extension: number
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * The etm id
     */
    etm_id: number
    /**
     * List of texts
     */
    messages: AtscMultString[]
    static name: string
}
class AtscMGT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGT */
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * The numbers of subtables
     */
    tables_defined: number
    /**
     * the tables
     */
    tables: AtscMGTTable[]
    /**
     * descriptors
     */
    descriptors: Descriptor[]
    static name: string
    static new(): AtscMGT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscMGT
}
class AtscMGTTable {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGTTable */
    /**
     * #GstMpegtsAtscMGTTableType
     */
    table_type: number
    /**
     * The packet ID
     */
    pid: number
    /**
     * The version number
     */
    version_number: number
    number_bytes: number
    /**
     * descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class AtscMultString {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMultString */
    /**
     * The ISO639 language code
     */
    iso_639_langcode: number[]
    segments: AtscStringSegment[]
    static name: string
}
class AtscRRT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRT */
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * the names
     */
    names: AtscMultString[]
    /**
     * the number of dimensions defined for this rating table
     */
    dimensions_defined: number
    /**
     * A set of dimensions
     */
    dimensions: AtscRRTDimension[]
    /**
     * descriptors
     */
    descriptors: object[]
    static name: string
    static new(): AtscRRT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRT
}
class AtscRRTDimension {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimension */
    /**
     * the names
     */
    names: AtscMultString[]
    /**
     * whether the ratings represent a graduated scale
     */
    graduated_scale: boolean
    /**
     * the number of values defined for this dimension
     */
    values_defined: number
    /**
     * set of values
     */
    values: AtscRRTDimensionValue[]
    static name: string
    static new(): AtscRRTDimension
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimension
}
class AtscRRTDimensionValue {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRTDimensionValue */
    /**
     * the abbreviated ratings
     */
    abbrev_ratings: AtscMultString[]
    /**
     * the ratings
     */
    ratings: AtscMultString[]
    static name: string
    static new(): AtscRRTDimensionValue
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscRRTDimensionValue
}
class AtscSTT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscSTT */
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * The system time
     */
    system_time: number
    /**
     * The GPS to UTC offset
     */
    gps_utc_offset: number
    ds_status: boolean
    /**
     * The day of month
     */
    ds_dayofmonth: number
    /**
     * The hour
     */
    ds_hour: number
    /**
     * descriptors
     */
    descriptors: Descriptor[]
    /**
     * The UTC date and time
     */
    utc_datetime: Gst.DateTime
    /* Methods of GstMpegts-1.0.GstMpegts.AtscSTT */
    get_datetime_utc(): Gst.DateTime
    static name: string
    static new(): AtscSTT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AtscSTT
}
class AtscStringSegment {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    /**
     * The compression type
     */
    compression_type: number
    /**
     * The mode
     */
    mode: number
    /**
     * The size of compressed data
     */
    compressed_data_size: number
    /**
     * The compressed data
     */
    compressed_data: number
    cached_string: string
    /* Methods of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    get_string(): string
    set_string(string: string, compression_type: number, mode: number): boolean
    static name: string
}
class AtscVCT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCT */
    /**
     * The transport stream
     */
    transport_stream_id: number
    /**
     * The protocol version
     */
    protocol_version: number
    /**
     * sources
     */
    sources: AtscVCTSource[]
    /**
     * descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class AtscVCTSource {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCTSource */
    /**
     * The short name of a source
     */
    short_name: string
    /**
     * The major channel number
     */
    major_channel_number: number
    /**
     * The minor channel number
     */
    minor_channel_number: number
    /**
     * The modulation mode
     */
    modulation_mode: number
    /**
     * The carrier frequency
     */
    carrier_frequency: number
    /**
     * The transport stream ID
     */
    channel_TSID: number
    /**
     * The program number (see #GstMpegtsPatProgram)
     */
    program_number: number
    /**
     * The ETM location
     */
    ETM_location: number
    /**
     * is access controlled
     */
    access_controlled: boolean
    /**
     * is hidden
     */
    hidden: boolean
    /**
     * is path select, CVCT only
     */
    path_select: boolean
    /**
     * is out of band, CVCT only
     */
    out_of_band: boolean
    /**
     * is hide guide
     */
    hide_guide: boolean
    /**
     * The service type
     */
    service_type: number
    /**
     * The source id
     */
    source_id: number
    /**
     * an array of #GstMpegtsDescriptor
     */
    descriptors: Descriptor[]
    static name: string
}
class AudioPreselectionDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor */
    /**
     * 5-bit
     */
    preselection_id: number
    /**
     * 3-bit field
     */
    audio_rendering_indication: number
    /**
     * visually impaired
     */
    audio_description: boolean
    spoken_subtitles: boolean
    dialogue_enhancement: boolean
    interactivity_enabled: boolean
    language_code_present: boolean
    text_label_present: boolean
    /**
     * indicates if this PID conveys a complete audio programme
     */
    multi_stream_info_present: boolean
    future_extension: boolean
    /**
     * NULL terminated ISO 639 language code.
     */
    language_code: string
    message_id: number
    static name: string
}
class BAT {
    /* Fields of GstMpegts-1.0.GstMpegts.BAT */
    descriptors: Descriptor[]
    streams: BATStream[]
    static name: string
}
class BATStream {
    /* Fields of GstMpegts-1.0.GstMpegts.BATStream */
    transport_stream_id: number
    original_network_id: number
    descriptors: object[]
    static name: string
}
class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    /**
     * the frequency in Hz (Hertz)
     */
    frequency: number
    /**
     * the outer FEC scheme used
     */
    outer_fec: CableOuterFECScheme
    /**
     * Modulation scheme used
     */
    modulation: ModulationType
    /**
     * Symbol rate (in symbols per second)
     */
    symbol_rate: number
    /**
     * inner FEC scheme used
     */
    fec_inner: DVBCodeRate
    /* Methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
class ComponentDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor */
    stream_content: number
    component_type: number
    component_tag: number
    language_code: string
    text: string
    static name: string
}
class Content {
    /* Fields of GstMpegts-1.0.GstMpegts.Content */
    content_nibble_1: ContentNibbleHi
    content_nibble_2: number
    user_byte: number
    static name: string
}
class DVBLinkageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    /**
     * the transport id
     */
    transport_stream_id: number
    /**
     * the original network id
     */
    original_network_id: number
    /**
     * the service id
     */
    service_id: number
    /**
     * the type which `linkage_data` has
     */
    linkage_type: DVBLinkageType
    /**
     * the length for `private_data_bytes`
     */
    private_data_length: number
    /**
     * additional data bytes
     */
    private_data_bytes: number
    /* Methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    free(): void
    get_event(): DVBLinkageEvent
    get_extended_event(): DVBLinkageExtendedEvent[]
    get_mobile_hand_over(): DVBLinkageMobileHandOver
    static name: string
}
class DVBLinkageEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent */
    target_event_id: number
    target_listed: boolean
    event_simulcast: boolean
    static name: string
}
class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent */
    target_event_id: number
    target_listed: boolean
    event_simulcast: boolean
    link_type: number
    target_id_type: number
    original_network_id_flag: boolean
    service_id_flag: boolean
    user_defined_id: number
    target_transport_stream_id: number
    target_original_network_id: number
    target_service_id: number
    static name: string
}
class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver */
    hand_over_type: DVBLinkageHandOverType
    origin_type: boolean
    network_id: number
    initial_service_id: number
    static name: string
}
class DVBParentalRatingItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem */
    country_code: string
    rating: number
    static name: string
}
class DVBServiceListItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem */
    /**
     * the id of a service
     */
    service_id: number
    /**
     * the type of a service
     */
    type: DVBServiceType
    static name: string
}
class DataBroadcastDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    /**
     * the data broadcast id
     */
    data_broadcast_id: number
    /**
     * the component tag
     */
    component_tag: number
    length: number
    /**
     * the selector byte field
     */
    selector_bytes: number
    /**
     * language of `text`
     */
    language_code: string
    /**
     * description of data broadcast
     */
    text: string
    /* Methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
class Descriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.Descriptor */
    /**
     * the type of descriptor
     */
    tag: number
    /**
     * the extended type (if `descriptor_tag` is 0x7f)
     */
    tag_extension: number
    /**
     * the length of the descriptor content (excluding tag/length field)
     */
    length: number
    /**
     * the full descriptor data (including tag, extension, length). The first
     * two bytes are the `tag` and `length`.
     */
    data: number
    /* Methods of GstMpegts-1.0.GstMpegts.Descriptor */
    /**
     * Frees `desc`
     */
    free(): void
    /**
     * Parses out a list of audio preselection from the `descriptor`.
     */
    parse_audio_preselection_list(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    /**
     * Extracts the Conditional Access information from `descriptor`.
     */
    parse_ca(): [ /* returnType */ boolean, /* ca_system_id */ number, /* ca_pid */ number, /* private_data */ Uint8Array | null ]
    /**
     * Extracts the cable delivery system information from `descriptor`.
     */
    parse_cable_delivery_system(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    /**
     * Extracts the bouquet name from `descriptor`.
     */
    parse_dvb_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name */ string | null ]
    /**
     * Extracts ca id's from `descriptor`.
     */
    parse_dvb_ca_identifier(): [ /* returnType */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB component information from `descriptor`.
     */
    parse_dvb_component(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    /**
     * Extracts the DVB content information from `descriptor`.
     */
    parse_dvb_content(): [ /* returnType */ boolean, /* content */ Content[] ]
    /**
     * Parses out the data broadcast from the `descriptor`.
     */
    parse_dvb_data_broadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    /**
     * Parses out the data broadcast id from the `descriptor`.
     */
    parse_dvb_data_broadcast_id(): [ /* returnType */ boolean, /* data_broadcast_id */ number, /* id_selector_bytes */ Uint8Array ]
    /**
     * Extracts the DVB extended event information from `descriptor`.
     */
    parse_dvb_extended_event(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    /**
     * Parses out a list of frequencies from the `descriptor`.
     */
    parse_dvb_frequency_list(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB linkage information from `descriptor`.
     */
    parse_dvb_linkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    /**
     * Parses out the multilingual bouquet name from the `descriptor`.
     */
    parse_dvb_multilingual_bouquet_name(): [ /* returnType */ boolean, /* bouquet_name_items */ DvbMultilingualBouquetNameItem[] ]
    /**
     * Parses out the multilingual component from the `descriptor`.
     */
    parse_dvb_multilingual_component(): [ /* returnType */ boolean, /* component_tag */ number, /* component_description_items */ DvbMultilingualComponentItem[] ]
    /**
     * Parses out the multilingual network name from the `descriptor`.
     */
    parse_dvb_multilingual_network_name(): [ /* returnType */ boolean, /* network_name_items */ DvbMultilingualNetworkNameItem[] ]
    /**
     * Parses out the multilingual service name from the `descriptor`.
     */
    parse_dvb_multilingual_service_name(): [ /* returnType */ boolean, /* service_name_items */ DvbMultilingualServiceNameItem[] ]
    /**
     * Parses out the dvb network name from the `descriptor:`
     */
    parse_dvb_network_name(): [ /* returnType */ boolean, /* name */ string ]
    /**
     * Extracts the DVB parental rating information from `descriptor`.
     */
    parse_dvb_parental_rating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    /**
     * Parses out the private data specifier from the `descriptor`.
     */
    parse_dvb_private_data_specifier(): [ /* returnType */ boolean, /* private_data_specifier */ number, /* private_data */ Uint8Array | null ]
    /**
     * Parses out the scrambling mode from the `descriptor`.
     */
    parse_dvb_scrambling(): [ /* returnType */ boolean, /* scrambling_mode */ DVBScramblingModeType ]
    /**
     * Extracts the dvb service information from `descriptor`.
     */
    parse_dvb_service(): [ /* returnType */ boolean, /* service_type */ DVBServiceType | null, /* service_name */ string | null, /* provider_name */ string | null ]
    /**
     * Parses out a list of services from the `descriptor:`
     */
    parse_dvb_service_list(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    /**
     * Extracts the DVB short event information from `descriptor`.
     */
    parse_dvb_short_event(): [ /* returnType */ boolean, /* language_code */ string | null, /* event_name */ string | null, /* text */ string | null ]
    /**
     * Extracts the component tag from `descriptor`.
     */
    parse_dvb_stream_identifier(): [ /* returnType */ boolean, /* component_tag */ number ]
    /**
     * Parses out the stuffing bytes from the `descriptor`.
     */
    parse_dvb_stuffing(): [ /* returnType */ boolean, /* stuffing_bytes */ number ]
    /**
     * Extracts the DVB subtitling informatio from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     * @param idx Table id of the entry to parse
     */
    parse_dvb_subtitling_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* composition_page_id */ number | null, /* ancillary_page_id */ number | null ]
    parse_dvb_subtitling_nb(): number
    /**
     * Parses out the DVB-T2 delivery system from the `descriptor`.
     */
    parse_dvb_t2_delivery_system(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    /**
     * Parses teletext number `idx` in the `descriptor`. The language is in ISO639 format.
     * @param idx The id of the teletext to get
     */
    parse_dvb_teletext_idx(idx: number): [ /* returnType */ boolean, /* language_code */ string | null, /* teletext_type */ DVBTeletextType | null, /* magazine_number */ number | null, /* page_number */ number | null ]
    /**
     * Find the number of teletext entries in `descriptor`
     */
    parse_dvb_teletext_nb(): number
    /**
     * Extracts the iso 639-2 language information from `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     */
    parse_iso_639_language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    /**
     * Extracts the iso 639-2 language information from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     * @param idx Table id of the language to parse
     */
    parse_iso_639_language_idx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audio_type */ Iso639AudioType | null ]
    parse_iso_639_language_nb(): number
    /**
     * Extracts the logical channels from `descriptor`.
     */
    parse_logical_channel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    /**
     * Extracts the Registration information from `descriptor`.
     */
    parse_registration(): [ /* returnType */ boolean, /* registration_id */ number, /* additional_info */ Uint8Array | null ]
    /**
     * Extracts the satellite delivery system information from `descriptor`.
     */
    parse_satellite_delivery_system(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    /**
     * Parses out the terrestrial delivery system from the `descriptor`.
     */
    parse_terrestrial_delivery_system(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Creates a #GstMpegtsDescriptor with custom `tag` and `data`
     * @param tag descriptor tag
     * @param data descriptor data (after tag and length field)
     */
    static from_custom(tag: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor with custom `tag,` `tag_extension` and `data`
     * @param tag descriptor tag
     * @param tag_extension descriptor tag extension
     * @param data descriptor data (after tag and length field)
     */
    static from_custom_with_extension(tag: number, tag_extension: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_NETWORK_NAME,
     * with the network name `name`. The data field of the #GstMpegtsDescriptor
     * will be allocated, and transferred to the caller.
     * @param name the network name to set
     */
    static from_dvb_network_name(name: string): Descriptor
    /**
     * Fills a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_SERVICE.
     * The data field of the #GstMpegtsDescriptor will be allocated,
     * and transferred to the caller.
     * @param service_type Service type defined as a #GstMpegtsDVBServiceType
     * @param service_name Name of the service
     * @param service_provider Name of the service provider
     */
    static from_dvb_service(service_type: DVBServiceType, service_name?: string | null, service_provider?: string | null): Descriptor
    static from_dvb_subtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    /**
     * Creates a %GST_MTS_DESC_ISO_639_LANGUAGE #GstMpegtsDescriptor with
     * a single language
     * @param language ISO-639-2 language 3-char code
     */
    static from_iso_639_language(language: string): Descriptor
    /**
     * Creates a %GST_MTS_DESC_REGISTRATION #GstMpegtsDescriptor
     * @param format_identifier a 4 character format identifier string
     * @param additional_info pointer to optional additional info
     */
    static from_registration(format_identifier: string, additional_info: Uint8Array | null): Descriptor
    static parse_audio_preselection_dump(source: AudioPreselectionDescriptor): void
    static parse_audio_preselection_free(source: AudioPreselectionDescriptor): void
}
class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem */
    /**
     * the ISO 639 language code
     */
    language_code: string
    /**
     * the bouquet name
     */
    bouquet_name: string
    static name: string
}
class DvbMultilingualComponentItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem */
    /**
     * the ISO 639 language code
     */
    language_code: string
    /**
     * the component description
     */
    description: string
    static name: string
}
class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem */
    /**
     * the ISO 639 language code
     */
    language_code: string
    /**
     * the network name
     */
    network_name: string
    static name: string
}
class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem */
    /**
     * the ISO 639 language code
     */
    language_code: string
    /**
     * the provider name
     */
    provider_name: string
    /**
     * the service name
     */
    service_name: string
    static name: string
}
class EIT {
    /* Fields of GstMpegts-1.0.GstMpegts.EIT */
    transport_stream_id: number
    original_network_id: number
    segment_last_section_number: number
    last_table_id: number
    actual_stream: boolean
    present_following: boolean
    /**
     * List of events
     */
    events: EITEvent[]
    static name: string
}
class EITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.EITEvent */
    event_id: number
    start_time: Gst.DateTime
    duration: number
    running_status: RunningStatus
    free_CA_mode: boolean
    /**
     * List of descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class ExtendedEventDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    descriptor_number: number
    last_descriptor_number: number
    /**
     * NULL terminated language code.
     */
    language_code: string
    /**
     * the #GstMpegtsExtendedEventItem
     */
    items: ExtendedEventItem[]
    text: string
    /* Methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
class ExtendedEventItem {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem */
    item_description: string
    item: string
    static name: string
}
class ISO639LanguageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    nb_language: number
    language: string[]
    audio_type: Iso639AudioType[]
    /* Methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    descriptor_free(): void
    static name: string
}
class LogicalChannel {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannel */
    service_id: number
    visible_service: boolean
    logical_channel_number: number
    static name: string
}
class LogicalChannelDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor */
    nb_channels: number
    channels: LogicalChannel[]
    static name: string
}
class NIT {
    /* Fields of GstMpegts-1.0.GstMpegts.NIT */
    /**
     * Whether this NIT corresponds to the actual stream
     */
    actual_network: boolean
    /**
     * ID of the network that this NIT describes
     */
    network_id: number
    /**
     * the global descriptors
     */
    descriptors: Descriptor[]
    /**
     * the streams
     */
    streams: NITStream[]
    static name: string
    static new(): NIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NIT
}
class NITStream {
    /* Fields of GstMpegts-1.0.GstMpegts.NITStream */
    transport_stream_id: number
    original_network_id: number
    descriptors: Descriptor[]
    static name: string
    static new(): NITStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NITStream
}
class PMT {
    /* Fields of GstMpegts-1.0.GstMpegts.PMT */
    /**
     * PID of the stream containing the PCR for this program.
     */
    pcr_pid: number
    /**
     * The program to which this PMT is applicable.
     */
    program_number: number
    /**
     * Array of #GstMpegtsDescriptor
     */
    descriptors: Descriptor[]
    /**
     * Array of #GstMpegtsPMTStream
     */
    streams: PMTStream[]
    static name: string
    static new(): PMT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMT
}
class PMTStream {
    /* Fields of GstMpegts-1.0.GstMpegts.PMTStream */
    /**
     * the type of stream. See #GstMpegtsStreamType
     */
    stream_type: number
    /**
     * the PID of the stream
     */
    pid: number
    /**
     * the descriptors of the
     * stream
     */
    descriptors: Descriptor[]
    static name: string
    static new(): PMTStream
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PMTStream
}
class PatProgram {
    /* Fields of GstMpegts-1.0.GstMpegts.PatProgram */
    /**
     * the program number
     */
    program_number: number
    /**
     * the network of program map PID
     */
    network_or_program_map_PID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
class SCTESIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESIT */
    encrypted_packet: boolean
    encryption_algorithm: number
    pts_adjustment: number
    cw_index: number
    tier: number
    splice_command_length: number
    splice_command_type: SCTESpliceCommandType
    splice_time_specified: boolean
    splice_time: number
    splices: object[]
    descriptors: object[]
    /**
     * When encrypted, or when encountering an unknown command type,
     * we may still want to pass the sit through.
     */
    fully_parsed: boolean
    /**
     * When the SIT was constructed by the application, splice times
     * are in running_time and must be translated before packetizing.
     */
    is_running_time: boolean
    static name: string
    static new(): SCTESIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESIT
}
class SCTESpliceComponent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceComponent */
    /**
     * the elementary PID stream containing the Splice Point
     */
    tag: number
    /**
     * Whether `splice_time` was specified
     */
    splice_time_specified: boolean
    /**
     * the presentation time of the signaled splice event
     */
    splice_time: number
    /**
     * The UTC time of the signaled splice event
     */
    utc_splice_time: number
    static name: string
    static new(tag: number): SCTESpliceComponent
    constructor(tag: number)
    /* Static methods and pseudo-constructors */
    static new(tag: number): SCTESpliceComponent
}
class SCTESpliceEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent */
    insert_event: boolean
    splice_event_id: number
    splice_event_cancel_indicator: boolean
    out_of_network_indicator: boolean
    program_splice_flag: boolean
    duration_flag: boolean
    splice_immediate_flag: boolean
    program_splice_time_specified: boolean
    program_splice_time: number
    /**
     * The UTC time of the signaled splice event
     */
    utc_splice_time: number
    /**
     * Per-PID splice time information
     */
    components: object[]
    break_duration_auto_return: boolean
    break_duration: number
    unique_program_id: number
    avail_num: number
    avails_expected: number
    static name: string
    static new(): SCTESpliceEvent
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SCTESpliceEvent
}
class SDT {
    /* Fields of GstMpegts-1.0.GstMpegts.SDT */
    /**
     * Network ID of the originating delivery system
     */
    original_network_id: number
    /**
     * True if the table describes this transport stream
     */
    actual_ts: boolean
    /**
     * ID of this transport stream
     */
    transport_stream_id: number
    /**
     * List of services
     */
    services: SDTService[]
    static name: string
    static new(): SDT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDT
}
class SDTService {
    /* Fields of GstMpegts-1.0.GstMpegts.SDTService */
    /**
     * The program number this table belongs to
     */
    service_id: number
    /**
     * EIT schedule information is present in this transport stream
     */
    EIT_schedule_flag: boolean
    /**
     * EIT present/following information is present in this transport stream
     */
    EIT_present_following_flag: boolean
    /**
     * Status of this service
     */
    running_status: RunningStatus
    /**
     * True if one or more streams is controlled by a CA system
     */
    free_CA_mode: boolean
    /**
     * List of descriptors
     */
    descriptors: Descriptor[]
    static name: string
    static new(): SDTService
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): SDTService
}
class SIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SIT */
    /**
     * List of descriptors
     */
    descriptors: Descriptor[]
    /**
     * List of services
     */
    services: SITService[]
    static name: string
}
class SITService {
    /* Fields of GstMpegts-1.0.GstMpegts.SITService */
    /**
     * The Program number this table belongs to
     */
    service_id: number
    /**
     * Status of this service
     */
    running_status: RunningStatus
    /**
     * List of descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor */
    /**
     * the frequency in kHz (kiloHertz)
     */
    frequency: number
    /**
     * the orbital position in degrees
     */
    orbital_position: number
    /**
     * If %TRUE, the satellite is in the eastern part of the orbit,
     * else in the western part.
     */
    west_east: boolean
    /**
     * The polarization of the transmitted signal
     */
    polarization: SatellitePolarizationType
    /**
     * Roll-off factor used in DVB-S2
     */
    roll_off: SatelliteRolloff
    /**
     * modulation system, %TRUE if DVB-S2, else DVB-S
     */
    modulation_system: boolean
    /**
     * Modulation scheme used
     */
    modulation_type: ModulationType
    /**
     * Symbol rate (in symbols per second)
     */
    symbol_rate: number
    /**
     * inner FEC scheme used
     */
    fec_inner: DVBCodeRate
    static name: string
}
class Section {
    /* Fields of GstMpegts-1.0.GstMpegts.Section */
    /**
     * The type of section.
     */
    section_type: SectionType
    /**
     * The PID on which this section was found or belongs to.
     */
    pid: number
    /**
     * The table id of this section. See %GstMpegtsSectionTableID and
     *      derivates for more information.
     */
    table_id: number
    /**
     * This meaning differs per section. See the documentation
     *      of the parsed section type for the meaning of this field
     */
    subtable_extension: number
    /**
     * Version of the section.
     */
    version_number: number
    /**
     * Applies to current/next stream or not
     */
    current_next_indicator: boolean
    /**
     * Number of the section (if multiple)
     */
    section_number: number
    /**
     * Number of the last expected section (if multiple)
     */
    last_section_number: number
    /**
     * Checksum (if applicable)
     */
    crc: number
    /* Methods of GstMpegts-1.0.GstMpegts.Section */
    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    get_atsc_cvct(): AtscVCT
    /**
     * Returns the #GstMpegtsAtscEIT contained in the `section`.
     */
    get_atsc_eit(): AtscEIT
    /**
     * Returns the #GstMpegtsAtscETT contained in the `section`.
     */
    get_atsc_ett(): AtscETT
    /**
     * Returns the #GstMpegtsAtscMGT contained in the `section`.
     */
    get_atsc_mgt(): AtscMGT
    /**
     * Returns the #GstMpegtsAtscRRT contained in the `section`.
     */
    get_atsc_rrt(): AtscRRT
    /**
     * Returns the #GstMpegtsAtscSTT contained in the `section`.
     */
    get_atsc_stt(): AtscSTT
    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    get_atsc_tvct(): AtscVCT
    /**
     * Returns the #GstMpegtsBAT contained in the `section`.
     */
    get_bat(): BAT
    /**
     * Parses a Conditional Access Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the Conditional
     * Access Table.
     */
    get_cat(): Descriptor[]
    /**
     * Gets the original unparsed section data.
     */
    get_data(): GLib.Bytes
    /**
     * Returns the #GstMpegtsEIT contained in the `section`.
     */
    get_eit(): EIT
    /**
     * Returns the #GstMpegtsNIT contained in the `section`.
     */
    get_nit(): NIT
    /**
     * Parses a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
     * 
     * Returns the array of #GstMpegtsPatProgram contained in the section.
     * 
     * Note: The PAT `transport_stream_id` field corresponds to the
     * "subtable_extension" field of the provided `section`.
     */
    get_pat(): PatProgram[]
    /**
     * Parses the Program Map Table contained in the `section`.
     */
    get_pmt(): PMT
    /**
     * Returns the #GstMpegtsSCTESIT contained in the `section`.
     */
    get_scte_sit(): SCTESIT
    /**
     * Returns the #GstMpegtsSDT contained in the `section`.
     */
    get_sdt(): SDT
    /**
     * Returns the #GstMpegtsSIT contained in the `section`.
     */
    get_sit(): SIT
    /**
     * Returns the #GstDateTime of the TDT
     */
    get_tdt(): Gst.DateTime
    /**
     * Returns the #GstMpegtsTOT contained in the `section`.
     */
    get_tot(): TOT
    /**
     * Parses a Transport Stream Description Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the section
     */
    get_tsdt(): Descriptor[]
    /**
     * Packetize (i.e. serialize) the `section`. If the data in `section` has already
     * been packetized, the data pointer is returned immediately. Otherwise, the
     * data field is allocated and populated.
     */
    packetize(): [ /* returnType */ number, /* output_size */ number ]
    /**
     * Creates a custom #GstEvent with a `GstMpegtsSection` and send it the `element`
     * #GstElement.
     * @param element The #GstElement to send to section event to
     */
    send_event(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: Uint8Array): Section
    constructor(pid: number, data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: Uint8Array): Section
    static from_atsc_mgt(mgt: AtscMGT): Section
    static from_atsc_rrt(rrt: AtscRRT): Section
    static from_atsc_stt(stt: AtscSTT): Section
    /**
     * Ownership of `nit` is taken. The data in `nit` is managed by the #GstMpegtsSection
     * @param nit a #GstMpegtsNIT to create the #GstMpegtsSection from
     */
    static from_nit(nit: NIT): Section
    /**
     * Creates a PAT #GstMpegtsSection from the `programs` array of #GstMpegtsPatPrograms
     * @param programs an array of #GstMpegtsPatProgram
     * @param ts_id Transport stream ID of the PAT
     */
    static from_pat(programs: PatProgram[], ts_id: number): Section
    /**
     * Creates a #GstMpegtsSection from `pmt` that is bound to `pid`
     * @param pmt a #GstMpegtsPMT to create a #GstMpegtsSection from
     * @param pid The PID that the #GstMpegtsPMT belongs to
     */
    static from_pmt(pmt: PMT, pid: number): Section
    /**
     * Ownership of `sit` is taken. The data in `sit` is managed by the #GstMpegtsSection
     * @param sit a #GstMpegtsSCTESIT to create the #GstMpegtsSection from
     * @param pid 
     */
    static from_scte_sit(sit: SCTESIT, pid: number): Section
    /**
     * Ownership of `sdt` is taken. The data in `sdt` is managed by the #GstMpegtsSection
     * @param sdt a #GstMpegtsSDT to create the #GstMpegtsSection from
     */
    static from_sdt(sdt: SDT): Section
}
class T2DeliverySystemCell {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell */
    /**
     * id of the cell
     */
    cell_id: number
    /**
     * centre frequencies in Hz
     */
    centre_frequencies: number[]
    sub_cells: T2DeliverySystemCellExtension[]
    static name: string
}
class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension */
    /**
     * id of the sub cell
     */
    cell_id_extension: number
    /**
     * centre frequency of the sub cell in Hz
     */
    transposer_frequency: number
    static name: string
}
class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    plp_id: number
    t2_system_id: number
    siso_miso: number
    bandwidth: number
    guard_interval: TerrestrialGuardInterval
    transmission_mode: TerrestrialTransmissionMode
    other_frequency: boolean
    tfs: boolean
    cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
class TOT {
    /* Fields of GstMpegts-1.0.GstMpegts.TOT */
    utc_time: Gst.DateTime
    /**
     * List of descriptors
     */
    descriptors: Descriptor[]
    static name: string
}
class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor */
    /**
     * the frequency in Hz (Hertz)
     */
    frequency: number
    /**
     * the bandwidth in Hz (Hertz)
     */
    bandwidth: number
    /**
     * %TRUE High Priority %FALSE Low Priority
     */
    priority: boolean
    /**
     * %TRUE no time slicing %FALSE time slicing
     */
    time_slicing: boolean
    /**
     * %TRUE no mpe-fec is used %FALSE mpe-fec is use
     */
    mpe_fec: boolean
    /**
     * the constellation
     */
    constellation: ModulationType
    /**
     * the hierarchy
     */
    hierarchy: TerrestrialHierarchy
    code_rate_hp: DVBCodeRate
    code_rate_lp: DVBCodeRate
    guard_interval: TerrestrialGuardInterval
    transmission_mode: TerrestrialTransmissionMode
    /**
     * %TRUE more frequency are use, else not
     */
    other_frequency: boolean
    static name: string
}
}
export default GstMpegts;