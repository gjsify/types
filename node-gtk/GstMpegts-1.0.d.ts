/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstMpegts-1.0
 */

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
function descriptorFromCustom(tag: number, data: Uint8Array): Descriptor
function descriptorFromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
function descriptorFromDvbNetworkName(name: string): Descriptor
function descriptorFromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
function descriptorFromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
function descriptorFromIso639Language(language: string): Descriptor
function descriptorFromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
function descriptorParseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
function descriptorParseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
function dvbComponentDescriptorFree(source: ComponentDescriptor): void
function eventNewMpegtsSection(section: Section): Gst.Event
function eventParseMpegtsSection(event: Gst.Event): Section
function findDescriptor(descriptors: Descriptor[], tag: number): Descriptor
function findDescriptorWithExtension(descriptors: Descriptor[], tag: number, tagExtension: number): Descriptor
function initialize(): void
function messageNewMpegtsSection(parent: Gst.Object, section: Section): Gst.Message
function messageParseMpegtsSection(message: Gst.Message): Section
function parseDescriptors(buffer: number, bufLen: number): Descriptor[]
function patNew(): PatProgram[]
function scteCancelNew(eventId: number): SCTESIT
function scteNullNew(): SCTESIT
function scteSpliceInNew(eventId: number, spliceTime: Gst.ClockTime): SCTESIT
function scteSpliceOutNew(eventId: number, spliceTime: Gst.ClockTime, duration: Gst.ClockTime): SCTESIT
function sectionFromAtscMgt(mgt: AtscMGT): Section
function sectionFromAtscRrt(rrt: AtscRRT): Section
function sectionFromAtscStt(stt: AtscSTT): Section
function sectionFromNit(nit: NIT): Section
function sectionFromPat(programs: PatProgram[], tsId: number): Section
function sectionFromPmt(pmt: PMT, pid: number): Section
function sectionFromScteSit(sit: SCTESIT, pid: number): Section
function sectionFromSdt(sdt: SDT): Section
interface PacketizeFunc {
    (section: Section): boolean
}
class AtscEIT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEIT */
    /**
     * The source id
     */
    readonly sourceId: number
    /**
     * The protocol version
     */
    readonly protocolVersion: number
    /**
     * Events
     */
    readonly events: AtscEITEvent[]
    static name: string
}
class AtscEITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscEITEvent */
    /**
     * The event id
     */
    readonly eventId: number
    /**
     * The start time
     */
    readonly startTime: number
    /**
     * The etm location
     */
    readonly etmLocation: number
    /**
     * The length in seconds
     */
    readonly lengthInSeconds: number
    /**
     * the titles
     */
    readonly titles: AtscMultString[]
    /**
     * descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscETT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscETT */
    readonly ettTableIdExtension: number
    /**
     * The protocol version
     */
    readonly protocolVersion: number
    /**
     * The etm id
     */
    readonly etmId: number
    /**
     * List of texts
     */
    readonly messages: AtscMultString[]
    static name: string
}
class AtscMGT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMGT */
    /**
     * The protocol version
     */
    readonly protocolVersion: number
    /**
     * The numbers of subtables
     */
    readonly tablesDefined: number
    /**
     * the tables
     */
    readonly tables: AtscMGTTable[]
    /**
     * descriptors
     */
    readonly descriptors: Descriptor[]
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
    readonly tableType: number
    /**
     * The packet ID
     */
    readonly pid: number
    /**
     * The version number
     */
    readonly versionNumber: number
    readonly numberBytes: number
    /**
     * descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscMultString {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscMultString */
    /**
     * The ISO639 language code
     */
    readonly iso639Langcode: number[]
    readonly segments: AtscStringSegment[]
    static name: string
}
class AtscRRT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscRRT */
    /**
     * The protocol version
     */
    readonly protocolVersion: number
    /**
     * the names
     */
    readonly names: AtscMultString[]
    /**
     * the number of dimensions defined for this rating table
     */
    readonly dimensionsDefined: number
    /**
     * A set of dimensions
     */
    readonly dimensions: AtscRRTDimension[]
    /**
     * descriptors
     */
    readonly descriptors: object[]
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
    readonly names: AtscMultString[]
    /**
     * whether the ratings represent a graduated scale
     */
    readonly graduatedScale: boolean
    /**
     * the number of values defined for this dimension
     */
    readonly valuesDefined: number
    /**
     * set of values
     */
    readonly values: AtscRRTDimensionValue[]
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
    readonly abbrevRatings: AtscMultString[]
    /**
     * the ratings
     */
    readonly ratings: AtscMultString[]
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
    readonly protocolVersion: number
    /**
     * The system time
     */
    readonly systemTime: number
    /**
     * The GPS to UTC offset
     */
    readonly gpsUtcOffset: number
    readonly dsStatus: boolean
    /**
     * The day of month
     */
    readonly dsDayofmonth: number
    /**
     * The hour
     */
    readonly dsHour: number
    /**
     * descriptors
     */
    readonly descriptors: Descriptor[]
    /**
     * The UTC date and time
     */
    readonly utcDatetime: Gst.DateTime
    /* Methods of GstMpegts-1.0.GstMpegts.AtscSTT */
    getDatetimeUtc(): Gst.DateTime
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
    readonly compressionType: number
    /**
     * The mode
     */
    readonly mode: number
    /**
     * The size of compressed data
     */
    readonly compressedDataSize: number
    /**
     * The compressed data
     */
    readonly compressedData: number
    readonly cachedString: string
    /* Methods of GstMpegts-1.0.GstMpegts.AtscStringSegment */
    getString(): string
    setString(string: string, compressionType: number, mode: number): boolean
    static name: string
}
class AtscVCT {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCT */
    /**
     * The transport stream
     */
    readonly transportStreamId: number
    /**
     * The protocol version
     */
    readonly protocolVersion: number
    /**
     * sources
     */
    readonly sources: AtscVCTSource[]
    /**
     * descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class AtscVCTSource {
    /* Fields of GstMpegts-1.0.GstMpegts.AtscVCTSource */
    /**
     * The short name of a source
     */
    readonly shortName: string
    /**
     * The major channel number
     */
    readonly majorChannelNumber: number
    /**
     * The minor channel number
     */
    readonly minorChannelNumber: number
    /**
     * The modulation mode
     */
    readonly modulationMode: number
    /**
     * The carrier frequency
     */
    readonly carrierFrequency: number
    /**
     * The transport stream ID
     */
    readonly channelTSID: number
    /**
     * The program number (see #GstMpegtsPatProgram)
     */
    readonly programNumber: number
    /**
     * The ETM location
     */
    readonly eTMLocation: number
    /**
     * is access controlled
     */
    readonly accessControlled: boolean
    /**
     * is hidden
     */
    readonly hidden: boolean
    /**
     * is path select, CVCT only
     */
    readonly pathSelect: boolean
    /**
     * is out of band, CVCT only
     */
    readonly outOfBand: boolean
    /**
     * is hide guide
     */
    readonly hideGuide: boolean
    /**
     * The service type
     */
    readonly serviceType: number
    /**
     * The source id
     */
    readonly sourceId: number
    /**
     * an array of #GstMpegtsDescriptor
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class AudioPreselectionDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.AudioPreselectionDescriptor */
    /**
     * 5-bit
     */
    readonly preselectionId: number
    /**
     * 3-bit field
     */
    readonly audioRenderingIndication: number
    /**
     * visually impaired
     */
    readonly audioDescription: boolean
    readonly spokenSubtitles: boolean
    readonly dialogueEnhancement: boolean
    readonly interactivityEnabled: boolean
    readonly languageCodePresent: boolean
    readonly textLabelPresent: boolean
    /**
     * indicates if this PID conveys a complete audio programme
     */
    readonly multiStreamInfoPresent: boolean
    readonly futureExtension: boolean
    /**
     * NULL terminated ISO 639 language code.
     */
    readonly languageCode: string
    readonly messageId: number
    static name: string
}
class BAT {
    /* Fields of GstMpegts-1.0.GstMpegts.BAT */
    readonly descriptors: Descriptor[]
    readonly streams: BATStream[]
    static name: string
}
class BATStream {
    /* Fields of GstMpegts-1.0.GstMpegts.BATStream */
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly descriptors: object[]
    static name: string
}
class CableDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    /**
     * the frequency in Hz (Hertz)
     */
    readonly frequency: number
    /**
     * the outer FEC scheme used
     */
    readonly outerFec: CableOuterFECScheme
    /**
     * Modulation scheme used
     */
    readonly modulation: ModulationType
    /**
     * Symbol rate (in symbols per second)
     */
    readonly symbolRate: number
    /**
     * inner FEC scheme used
     */
    readonly fecInner: DVBCodeRate
    /* Methods of GstMpegts-1.0.GstMpegts.CableDeliverySystemDescriptor */
    free(): void
    static name: string
}
class ComponentDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ComponentDescriptor */
    readonly streamContent: number
    readonly componentType: number
    readonly componentTag: number
    readonly languageCode: string
    readonly text: string
    static name: string
}
class Content {
    /* Fields of GstMpegts-1.0.GstMpegts.Content */
    readonly contentNibble1: ContentNibbleHi
    readonly contentNibble2: number
    readonly userByte: number
    static name: string
}
class DVBLinkageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    /**
     * the transport id
     */
    readonly transportStreamId: number
    /**
     * the original network id
     */
    readonly originalNetworkId: number
    /**
     * the service id
     */
    readonly serviceId: number
    /**
     * the type which `linkage_data` has
     */
    readonly linkageType: DVBLinkageType
    /**
     * the length for `private_data_bytes`
     */
    readonly privateDataLength: number
    /**
     * additional data bytes
     */
    readonly privateDataBytes: number
    /* Methods of GstMpegts-1.0.GstMpegts.DVBLinkageDescriptor */
    free(): void
    getEvent(): DVBLinkageEvent
    getExtendedEvent(): DVBLinkageExtendedEvent[]
    getMobileHandOver(): DVBLinkageMobileHandOver
    static name: string
}
class DVBLinkageEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageEvent */
    readonly targetEventId: number
    readonly targetListed: boolean
    readonly eventSimulcast: boolean
    static name: string
}
class DVBLinkageExtendedEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageExtendedEvent */
    readonly targetEventId: number
    readonly targetListed: boolean
    readonly eventSimulcast: boolean
    readonly linkType: number
    readonly targetIdType: number
    readonly originalNetworkIdFlag: boolean
    readonly serviceIdFlag: boolean
    readonly userDefinedId: number
    readonly targetTransportStreamId: number
    readonly targetOriginalNetworkId: number
    readonly targetServiceId: number
    static name: string
}
class DVBLinkageMobileHandOver {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBLinkageMobileHandOver */
    readonly handOverType: DVBLinkageHandOverType
    readonly originType: boolean
    readonly networkId: number
    readonly initialServiceId: number
    static name: string
}
class DVBParentalRatingItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBParentalRatingItem */
    readonly countryCode: string
    readonly rating: number
    static name: string
}
class DVBServiceListItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DVBServiceListItem */
    /**
     * the id of a service
     */
    readonly serviceId: number
    /**
     * the type of a service
     */
    readonly type: DVBServiceType
    static name: string
}
class DataBroadcastDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    /**
     * the data broadcast id
     */
    readonly dataBroadcastId: number
    /**
     * the component tag
     */
    readonly componentTag: number
    readonly length: number
    /**
     * the selector byte field
     */
    readonly selectorBytes: number
    /**
     * language of `text`
     */
    readonly languageCode: string
    /**
     * description of data broadcast
     */
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.DataBroadcastDescriptor */
    free(): void
    static name: string
}
class Descriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.Descriptor */
    /**
     * the type of descriptor
     */
    readonly tag: number
    /**
     * the extended type (if `descriptor_tag` is 0x7f)
     */
    readonly tagExtension: number
    /**
     * the length of the descriptor content (excluding tag/length field)
     */
    readonly length: number
    /**
     * the full descriptor data (including tag, extension, length). The first
     * two bytes are the `tag` and `length`.
     */
    readonly data: number
    /* Methods of GstMpegts-1.0.GstMpegts.Descriptor */
    /**
     * Frees `desc`
     */
    free(): void
    /**
     * Parses out a list of audio preselection from the `descriptor`.
     */
    parseAudioPreselectionList(): [ /* returnType */ boolean, /* list */ AudioPreselectionDescriptor[] ]
    /**
     * Extracts the Conditional Access information from `descriptor`.
     */
    parseCa(): [ /* returnType */ boolean, /* caSystemId */ number, /* caPid */ number, /* privateData */ Uint8Array | null ]
    /**
     * Extracts the cable delivery system information from `descriptor`.
     */
    parseCableDeliverySystem(): [ /* returnType */ boolean, /* res */ CableDeliverySystemDescriptor ]
    /**
     * Extracts the bouquet name from `descriptor`.
     */
    parseDvbBouquetName(): [ /* returnType */ boolean, /* bouquetName */ string | null ]
    /**
     * Extracts ca id's from `descriptor`.
     */
    parseDvbCaIdentifier(): [ /* returnType */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB component information from `descriptor`.
     */
    parseDvbComponent(): [ /* returnType */ boolean, /* res */ ComponentDescriptor ]
    /**
     * Extracts the DVB content information from `descriptor`.
     */
    parseDvbContent(): [ /* returnType */ boolean, /* content */ Content[] ]
    /**
     * Parses out the data broadcast from the `descriptor`.
     */
    parseDvbDataBroadcast(): [ /* returnType */ boolean, /* res */ DataBroadcastDescriptor ]
    /**
     * Parses out the data broadcast id from the `descriptor`.
     */
    parseDvbDataBroadcastId(): [ /* returnType */ boolean, /* dataBroadcastId */ number, /* idSelectorBytes */ Uint8Array ]
    /**
     * Extracts the DVB extended event information from `descriptor`.
     */
    parseDvbExtendedEvent(): [ /* returnType */ boolean, /* res */ ExtendedEventDescriptor ]
    /**
     * Parses out a list of frequencies from the `descriptor`.
     */
    parseDvbFrequencyList(): [ /* returnType */ boolean, /* offset */ boolean, /* list */ number[] ]
    /**
     * Extracts the DVB linkage information from `descriptor`.
     */
    parseDvbLinkage(): [ /* returnType */ boolean, /* res */ DVBLinkageDescriptor ]
    /**
     * Parses out the multilingual bouquet name from the `descriptor`.
     */
    parseDvbMultilingualBouquetName(): [ /* returnType */ boolean, /* bouquetNameItems */ DvbMultilingualBouquetNameItem[] ]
    /**
     * Parses out the multilingual component from the `descriptor`.
     */
    parseDvbMultilingualComponent(): [ /* returnType */ boolean, /* componentTag */ number, /* componentDescriptionItems */ DvbMultilingualComponentItem[] ]
    /**
     * Parses out the multilingual network name from the `descriptor`.
     */
    parseDvbMultilingualNetworkName(): [ /* returnType */ boolean, /* networkNameItems */ DvbMultilingualNetworkNameItem[] ]
    /**
     * Parses out the multilingual service name from the `descriptor`.
     */
    parseDvbMultilingualServiceName(): [ /* returnType */ boolean, /* serviceNameItems */ DvbMultilingualServiceNameItem[] ]
    /**
     * Parses out the dvb network name from the `descriptor:`
     */
    parseDvbNetworkName(): [ /* returnType */ boolean, /* name */ string ]
    /**
     * Extracts the DVB parental rating information from `descriptor`.
     */
    parseDvbParentalRating(): [ /* returnType */ boolean, /* rating */ DVBParentalRatingItem[] ]
    /**
     * Parses out the private data specifier from the `descriptor`.
     */
    parseDvbPrivateDataSpecifier(): [ /* returnType */ boolean, /* privateDataSpecifier */ number, /* privateData */ Uint8Array | null ]
    /**
     * Parses out the scrambling mode from the `descriptor`.
     */
    parseDvbScrambling(): [ /* returnType */ boolean, /* scramblingMode */ DVBScramblingModeType ]
    /**
     * Extracts the dvb service information from `descriptor`.
     */
    parseDvbService(): [ /* returnType */ boolean, /* serviceType */ DVBServiceType | null, /* serviceName */ string | null, /* providerName */ string | null ]
    /**
     * Parses out a list of services from the `descriptor:`
     */
    parseDvbServiceList(): [ /* returnType */ boolean, /* list */ DVBServiceListItem[] ]
    /**
     * Extracts the DVB short event information from `descriptor`.
     */
    parseDvbShortEvent(): [ /* returnType */ boolean, /* languageCode */ string | null, /* eventName */ string | null, /* text */ string | null ]
    /**
     * Extracts the component tag from `descriptor`.
     */
    parseDvbStreamIdentifier(): [ /* returnType */ boolean, /* componentTag */ number ]
    /**
     * Parses out the stuffing bytes from the `descriptor`.
     */
    parseDvbStuffing(): [ /* returnType */ boolean, /* stuffingBytes */ number ]
    /**
     * Extracts the DVB subtitling informatio from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     */
    parseDvbSubtitlingIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* type */ number | null, /* compositionPageId */ number | null, /* ancillaryPageId */ number | null ]
    parseDvbSubtitlingNb(): number
    /**
     * Parses out the DVB-T2 delivery system from the `descriptor`.
     */
    parseDvbT2DeliverySystem(): [ /* returnType */ boolean, /* res */ T2DeliverySystemDescriptor ]
    /**
     * Parses teletext number `idx` in the `descriptor`. The language is in ISO639 format.
     */
    parseDvbTeletextIdx(idx: number): [ /* returnType */ boolean, /* languageCode */ string | null, /* teletextType */ DVBTeletextType | null, /* magazineNumber */ number | null, /* pageNumber */ number | null ]
    /**
     * Find the number of teletext entries in `descriptor`
     */
    parseDvbTeletextNb(): number
    /**
     * Extracts the iso 639-2 language information from `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     */
    parseIso639Language(): [ /* returnType */ boolean, /* res */ ISO639LanguageDescriptor ]
    /**
     * Extracts the iso 639-2 language information from specific table id in `descriptor`.
     * 
     * Note: Use #gst_tag_get_language_code if you want to get the the
     * ISO 639-1 language code from the returned ISO 639-2 one.
     */
    parseIso639LanguageIdx(idx: number): [ /* returnType */ boolean, /* lang */ string, /* audioType */ Iso639AudioType | null ]
    parseIso639LanguageNb(): number
    /**
     * Extracts the logical channels from `descriptor`.
     */
    parseLogicalChannel(): [ /* returnType */ boolean, /* res */ LogicalChannelDescriptor ]
    /**
     * Extracts the Registration information from `descriptor`.
     */
    parseRegistration(): [ /* returnType */ boolean, /* registrationId */ number, /* additionalInfo */ Uint8Array | null ]
    /**
     * Extracts the satellite delivery system information from `descriptor`.
     */
    parseSatelliteDeliverySystem(): [ /* returnType */ boolean, /* res */ SatelliteDeliverySystemDescriptor ]
    /**
     * Parses out the terrestrial delivery system from the `descriptor`.
     */
    parseTerrestrialDeliverySystem(): [ /* returnType */ boolean, /* res */ TerrestrialDeliverySystemDescriptor ]
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Creates a #GstMpegtsDescriptor with custom `tag` and `data`
     */
    static fromCustom(tag: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor with custom `tag,` `tag_extension` and `data`
     */
    static fromCustomWithExtension(tag: number, tagExtension: number, data: Uint8Array): Descriptor
    /**
     * Creates a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_NETWORK_NAME,
     * with the network name `name`. The data field of the #GstMpegtsDescriptor
     * will be allocated, and transferred to the caller.
     */
    static fromDvbNetworkName(name: string): Descriptor
    /**
     * Fills a #GstMpegtsDescriptor to be a %GST_MTS_DESC_DVB_SERVICE.
     * The data field of the #GstMpegtsDescriptor will be allocated,
     * and transferred to the caller.
     */
    static fromDvbService(serviceType: DVBServiceType, serviceName?: string | null, serviceProvider?: string | null): Descriptor
    static fromDvbSubtitling(lang: string, type: number, composition: number, ancillary: number): Descriptor
    /**
     * Creates a %GST_MTS_DESC_ISO_639_LANGUAGE #GstMpegtsDescriptor with
     * a single language
     */
    static fromIso639Language(language: string): Descriptor
    /**
     * Creates a %GST_MTS_DESC_REGISTRATION #GstMpegtsDescriptor
     */
    static fromRegistration(formatIdentifier: string, additionalInfo: Uint8Array | null): Descriptor
    static parseAudioPreselectionDump(source: AudioPreselectionDescriptor): void
    static parseAudioPreselectionFree(source: AudioPreselectionDescriptor): void
}
class DvbMultilingualBouquetNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualBouquetNameItem */
    /**
     * the ISO 639 language code
     */
    readonly languageCode: string
    /**
     * the bouquet name
     */
    readonly bouquetName: string
    static name: string
}
class DvbMultilingualComponentItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualComponentItem */
    /**
     * the ISO 639 language code
     */
    readonly languageCode: string
    /**
     * the component description
     */
    readonly description: string
    static name: string
}
class DvbMultilingualNetworkNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualNetworkNameItem */
    /**
     * the ISO 639 language code
     */
    readonly languageCode: string
    /**
     * the network name
     */
    readonly networkName: string
    static name: string
}
class DvbMultilingualServiceNameItem {
    /* Fields of GstMpegts-1.0.GstMpegts.DvbMultilingualServiceNameItem */
    /**
     * the ISO 639 language code
     */
    readonly languageCode: string
    /**
     * the provider name
     */
    readonly providerName: string
    /**
     * the service name
     */
    readonly serviceName: string
    static name: string
}
class EIT {
    /* Fields of GstMpegts-1.0.GstMpegts.EIT */
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly segmentLastSectionNumber: number
    readonly lastTableId: number
    readonly actualStream: boolean
    readonly presentFollowing: boolean
    /**
     * List of events
     */
    readonly events: EITEvent[]
    static name: string
}
class EITEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.EITEvent */
    readonly eventId: number
    readonly startTime: Gst.DateTime
    readonly duration: number
    readonly runningStatus: RunningStatus
    readonly freeCAMode: boolean
    /**
     * List of descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class ExtendedEventDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    readonly descriptorNumber: number
    readonly lastDescriptorNumber: number
    /**
     * NULL terminated language code.
     */
    readonly languageCode: string
    /**
     * the #GstMpegtsExtendedEventItem
     */
    readonly items: ExtendedEventItem[]
    readonly text: string
    /* Methods of GstMpegts-1.0.GstMpegts.ExtendedEventDescriptor */
    free(): void
    static name: string
}
class ExtendedEventItem {
    /* Fields of GstMpegts-1.0.GstMpegts.ExtendedEventItem */
    readonly itemDescription: string
    readonly item: string
    static name: string
}
class ISO639LanguageDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    readonly nbLanguage: number
    readonly language: string[]
    readonly audioType: Iso639AudioType[]
    /* Methods of GstMpegts-1.0.GstMpegts.ISO639LanguageDescriptor */
    descriptorFree(): void
    static name: string
}
class LogicalChannel {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannel */
    readonly serviceId: number
    readonly visibleService: boolean
    readonly logicalChannelNumber: number
    static name: string
}
class LogicalChannelDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.LogicalChannelDescriptor */
    readonly nbChannels: number
    readonly channels: LogicalChannel[]
    static name: string
}
class NIT {
    /* Fields of GstMpegts-1.0.GstMpegts.NIT */
    /**
     * Whether this NIT corresponds to the actual stream
     */
    readonly actualNetwork: boolean
    /**
     * ID of the network that this NIT describes
     */
    readonly networkId: number
    /**
     * the global descriptors
     */
    readonly descriptors: Descriptor[]
    /**
     * the streams
     */
    readonly streams: NITStream[]
    static name: string
    static new(): NIT
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): NIT
}
class NITStream {
    /* Fields of GstMpegts-1.0.GstMpegts.NITStream */
    readonly transportStreamId: number
    readonly originalNetworkId: number
    readonly descriptors: Descriptor[]
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
    readonly pcrPid: number
    /**
     * The program to which this PMT is applicable.
     */
    readonly programNumber: number
    /**
     * Array of #GstMpegtsDescriptor
     */
    readonly descriptors: Descriptor[]
    /**
     * Array of #GstMpegtsPMTStream
     */
    readonly streams: PMTStream[]
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
    readonly streamType: number
    /**
     * the PID of the stream
     */
    readonly pid: number
    /**
     * the descriptors of the
     * stream
     */
    readonly descriptors: Descriptor[]
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
    readonly programNumber: number
    /**
     * the network of program map PID
     */
    readonly networkOrProgramMapPID: number
    static name: string
    static new(): PatProgram
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): PatProgram
}
class SCTESIT {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESIT */
    readonly encryptedPacket: boolean
    readonly encryptionAlgorithm: number
    readonly ptsAdjustment: number
    readonly cwIndex: number
    readonly tier: number
    readonly spliceCommandLength: number
    readonly spliceCommandType: SCTESpliceCommandType
    readonly spliceTimeSpecified: boolean
    readonly spliceTime: number
    readonly splices: object[]
    readonly descriptors: object[]
    /**
     * When encrypted, or when encountering an unknown command type,
     * we may still want to pass the sit through.
     */
    readonly fullyParsed: boolean
    /**
     * When the SIT was constructed by the application, splice times
     * are in running_time and must be translated before packetizing.
     */
    readonly isRunningTime: boolean
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
    readonly tag: number
    /**
     * Whether `splice_time` was specified
     */
    readonly spliceTimeSpecified: boolean
    /**
     * the presentation time of the signaled splice event
     */
    readonly spliceTime: number
    /**
     * The UTC time of the signaled splice event
     */
    readonly utcSpliceTime: number
    static name: string
    static new(tag: number): SCTESpliceComponent
    constructor(tag: number)
    /* Static methods and pseudo-constructors */
    static new(tag: number): SCTESpliceComponent
}
class SCTESpliceEvent {
    /* Fields of GstMpegts-1.0.GstMpegts.SCTESpliceEvent */
    readonly insertEvent: boolean
    readonly spliceEventId: number
    readonly spliceEventCancelIndicator: boolean
    readonly outOfNetworkIndicator: boolean
    readonly programSpliceFlag: boolean
    readonly durationFlag: boolean
    readonly spliceImmediateFlag: boolean
    readonly programSpliceTimeSpecified: boolean
    readonly programSpliceTime: number
    /**
     * The UTC time of the signaled splice event
     */
    readonly utcSpliceTime: number
    /**
     * Per-PID splice time information
     */
    readonly components: object[]
    readonly breakDurationAutoReturn: boolean
    readonly breakDuration: number
    readonly uniqueProgramId: number
    readonly availNum: number
    readonly availsExpected: number
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
    readonly originalNetworkId: number
    /**
     * True if the table describes this transport stream
     */
    readonly actualTs: boolean
    /**
     * ID of this transport stream
     */
    readonly transportStreamId: number
    /**
     * List of services
     */
    readonly services: SDTService[]
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
    readonly serviceId: number
    /**
     * EIT schedule information is present in this transport stream
     */
    readonly eITScheduleFlag: boolean
    /**
     * EIT present/following information is present in this transport stream
     */
    readonly eITPresentFollowingFlag: boolean
    /**
     * Status of this service
     */
    readonly runningStatus: RunningStatus
    /**
     * True if one or more streams is controlled by a CA system
     */
    readonly freeCAMode: boolean
    /**
     * List of descriptors
     */
    readonly descriptors: Descriptor[]
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
    readonly descriptors: Descriptor[]
    /**
     * List of services
     */
    readonly services: SITService[]
    static name: string
}
class SITService {
    /* Fields of GstMpegts-1.0.GstMpegts.SITService */
    /**
     * The Program number this table belongs to
     */
    readonly serviceId: number
    /**
     * Status of this service
     */
    readonly runningStatus: RunningStatus
    /**
     * List of descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class SatelliteDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.SatelliteDeliverySystemDescriptor */
    /**
     * the frequency in kHz (kiloHertz)
     */
    readonly frequency: number
    /**
     * the orbital position in degrees
     */
    readonly orbitalPosition: number
    /**
     * If %TRUE, the satellite is in the eastern part of the orbit,
     * else in the western part.
     */
    readonly westEast: boolean
    /**
     * The polarization of the transmitted signal
     */
    readonly polarization: SatellitePolarizationType
    /**
     * Roll-off factor used in DVB-S2
     */
    readonly rollOff: SatelliteRolloff
    /**
     * modulation system, %TRUE if DVB-S2, else DVB-S
     */
    readonly modulationSystem: boolean
    /**
     * Modulation scheme used
     */
    readonly modulationType: ModulationType
    /**
     * Symbol rate (in symbols per second)
     */
    readonly symbolRate: number
    /**
     * inner FEC scheme used
     */
    readonly fecInner: DVBCodeRate
    static name: string
}
class Section {
    /* Fields of GstMpegts-1.0.GstMpegts.Section */
    /**
     * The type of section.
     */
    readonly sectionType: SectionType
    /**
     * The PID on which this section was found or belongs to.
     */
    readonly pid: number
    /**
     * The table id of this section. See %GstMpegtsSectionTableID and
     *      derivates for more information.
     */
    readonly tableId: number
    /**
     * This meaning differs per section. See the documentation
     *      of the parsed section type for the meaning of this field
     */
    readonly subtableExtension: number
    /**
     * Version of the section.
     */
    readonly versionNumber: number
    /**
     * Applies to current/next stream or not
     */
    readonly currentNextIndicator: boolean
    /**
     * Number of the section (if multiple)
     */
    readonly sectionNumber: number
    /**
     * Number of the last expected section (if multiple)
     */
    readonly lastSectionNumber: number
    /**
     * Checksum (if applicable)
     */
    readonly crc: number
    /* Methods of GstMpegts-1.0.GstMpegts.Section */
    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    getAtscCvct(): AtscVCT
    /**
     * Returns the #GstMpegtsAtscEIT contained in the `section`.
     */
    getAtscEit(): AtscEIT
    /**
     * Returns the #GstMpegtsAtscETT contained in the `section`.
     */
    getAtscEtt(): AtscETT
    /**
     * Returns the #GstMpegtsAtscMGT contained in the `section`.
     */
    getAtscMgt(): AtscMGT
    /**
     * Returns the #GstMpegtsAtscRRT contained in the `section`.
     */
    getAtscRrt(): AtscRRT
    /**
     * Returns the #GstMpegtsAtscSTT contained in the `section`.
     */
    getAtscStt(): AtscSTT
    /**
     * Returns the #GstMpegtsAtscVCT contained in the `section`
     */
    getAtscTvct(): AtscVCT
    /**
     * Returns the #GstMpegtsBAT contained in the `section`.
     */
    getBat(): BAT
    /**
     * Parses a Conditional Access Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the Conditional
     * Access Table.
     */
    getCat(): Descriptor[]
    /**
     * Gets the original unparsed section data.
     */
    getData(): any
    /**
     * Returns the #GstMpegtsEIT contained in the `section`.
     */
    getEit(): EIT
    /**
     * Returns the #GstMpegtsNIT contained in the `section`.
     */
    getNit(): NIT
    /**
     * Parses a Program Association Table (ITU H.222.0, ISO/IEC 13818-1).
     * 
     * Returns the array of #GstMpegtsPatProgram contained in the section.
     * 
     * Note: The PAT `transport_stream_id` field corresponds to the
     * "subtable_extension" field of the provided `section`.
     */
    getPat(): PatProgram[]
    /**
     * Parses the Program Map Table contained in the `section`.
     */
    getPmt(): PMT
    /**
     * Returns the #GstMpegtsSCTESIT contained in the `section`.
     */
    getScteSit(): SCTESIT
    /**
     * Returns the #GstMpegtsSDT contained in the `section`.
     */
    getSdt(): SDT
    /**
     * Returns the #GstMpegtsSIT contained in the `section`.
     */
    getSit(): SIT
    /**
     * Returns the #GstDateTime of the TDT
     */
    getTdt(): Gst.DateTime
    /**
     * Returns the #GstMpegtsTOT contained in the `section`.
     */
    getTot(): TOT
    /**
     * Parses a Transport Stream Description Table.
     * 
     * Returns the array of #GstMpegtsDescriptor contained in the section
     */
    getTsdt(): Descriptor[]
    /**
     * Packetize (i.e. serialize) the `section`. If the data in `section` has already
     * been packetized, the data pointer is returned immediately. Otherwise, the
     * data field is allocated and populated.
     */
    packetize(): [ /* returnType */ number, /* outputSize */ number ]
    /**
     * Creates a custom #GstEvent with a `GstMpegtsSection` and send it the `element`
     * #GstElement.
     */
    sendEvent(element: Gst.Element): boolean
    static name: string
    static new(pid: number, data: Uint8Array): Section
    constructor(pid: number, data: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(pid: number, data: Uint8Array): Section
    static fromAtscMgt(mgt: AtscMGT): Section
    static fromAtscRrt(rrt: AtscRRT): Section
    static fromAtscStt(stt: AtscSTT): Section
    /**
     * Ownership of `nit` is taken. The data in `nit` is managed by the #GstMpegtsSection
     */
    static fromNit(nit: NIT): Section
    /**
     * Creates a PAT #GstMpegtsSection from the `programs` array of #GstMpegtsPatPrograms
     */
    static fromPat(programs: PatProgram[], tsId: number): Section
    /**
     * Creates a #GstMpegtsSection from `pmt` that is bound to `pid`
     */
    static fromPmt(pmt: PMT, pid: number): Section
    /**
     * Ownership of `sit` is taken. The data in `sit` is managed by the #GstMpegtsSection
     */
    static fromScteSit(sit: SCTESIT, pid: number): Section
    /**
     * Ownership of `sdt` is taken. The data in `sdt` is managed by the #GstMpegtsSection
     */
    static fromSdt(sdt: SDT): Section
}
class T2DeliverySystemCell {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCell */
    /**
     * id of the cell
     */
    readonly cellId: number
    /**
     * centre frequencies in Hz
     */
    readonly centreFrequencies: number[]
    readonly subCells: T2DeliverySystemCellExtension[]
    static name: string
}
class T2DeliverySystemCellExtension {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemCellExtension */
    /**
     * id of the sub cell
     */
    readonly cellIdExtension: number
    /**
     * centre frequency of the sub cell in Hz
     */
    readonly transposerFrequency: number
    static name: string
}
class T2DeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    readonly plpId: number
    readonly t2SystemId: number
    readonly sisoMiso: number
    readonly bandwidth: number
    readonly guardInterval: TerrestrialGuardInterval
    readonly transmissionMode: TerrestrialTransmissionMode
    readonly otherFrequency: boolean
    readonly tfs: boolean
    readonly cells: T2DeliverySystemCell[]
    /* Methods of GstMpegts-1.0.GstMpegts.T2DeliverySystemDescriptor */
    free(): void
    static name: string
}
class TOT {
    /* Fields of GstMpegts-1.0.GstMpegts.TOT */
    readonly utcTime: Gst.DateTime
    /**
     * List of descriptors
     */
    readonly descriptors: Descriptor[]
    static name: string
}
class TerrestrialDeliverySystemDescriptor {
    /* Fields of GstMpegts-1.0.GstMpegts.TerrestrialDeliverySystemDescriptor */
    /**
     * the frequency in Hz (Hertz)
     */
    readonly frequency: number
    /**
     * the bandwidth in Hz (Hertz)
     */
    readonly bandwidth: number
    /**
     * %TRUE High Priority %FALSE Low Priority
     */
    readonly priority: boolean
    /**
     * %TRUE no time slicing %FALSE time slicing
     */
    readonly timeSlicing: boolean
    /**
     * %TRUE no mpe-fec is used %FALSE mpe-fec is use
     */
    readonly mpeFec: boolean
    /**
     * the constellation
     */
    readonly constellation: ModulationType
    /**
     * the hierarchy
     */
    readonly hierarchy: TerrestrialHierarchy
    readonly codeRateHp: DVBCodeRate
    readonly codeRateLp: DVBCodeRate
    readonly guardInterval: TerrestrialGuardInterval
    readonly transmissionMode: TerrestrialTransmissionMode
    /**
     * %TRUE more frequency are use, else not
     */
    readonly otherFrequency: boolean
    static name: string
}
}
export default GstMpegts;