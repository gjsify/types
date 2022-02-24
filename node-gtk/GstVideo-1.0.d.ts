/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVideo-1.0
 */

import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstVideo {

/**
 * An enumeration indicating whether an element implements color balancing
 * operations in software or in dedicated hardware. In general, dedicated
 * hardware implementations (such as those provided by xvimagesink) are
 * preferred.
 */
enum ColorBalanceType {
    /**
     * Color balance is implemented with dedicated
     *         hardware.
     */
    HARDWARE,
    /**
     * Color balance is implemented via software
     *         processing.
     */
    SOFTWARE,
}
/**
 * A set of commands that may be issued to an element providing the
 * #GstNavigation interface. The available commands can be queried via
 * the gst_navigation_query_new_commands() query.
 * 
 * For convenience in handling DVD navigation, the MENU commands are aliased as:
 *    GST_NAVIGATION_COMMAND_DVD_MENU            = `GST_NAVIGATION_COMMAND_MENU1`
 *    GST_NAVIGATION_COMMAND_DVD_TITLE_MENU      = `GST_NAVIGATION_COMMAND_MENU2`
 *    GST_NAVIGATION_COMMAND_DVD_ROOT_MENU       = `GST_NAVIGATION_COMMAND_MENU3`
 *    GST_NAVIGATION_COMMAND_DVD_SUBPICTURE_MENU = `GST_NAVIGATION_COMMAND_MENU4`
 *    GST_NAVIGATION_COMMAND_DVD_AUDIO_MENU      = `GST_NAVIGATION_COMMAND_MENU5`
 *    GST_NAVIGATION_COMMAND_DVD_ANGLE_MENU      = `GST_NAVIGATION_COMMAND_MENU6`
 *    GST_NAVIGATION_COMMAND_DVD_CHAPTER_MENU    = `GST_NAVIGATION_COMMAND_MENU7`
 */
enum NavigationCommand {
    /**
     * An invalid command entry
     */
    INVALID,
    /**
     * Execute navigation menu command 1. For DVD,
     * this enters the DVD root menu, or exits back to the title from the menu.
     */
    MENU1,
    /**
     * Execute navigation menu command 2. For DVD,
     * this jumps to the DVD title menu.
     */
    MENU2,
    /**
     * Execute navigation menu command 3. For DVD,
     * this jumps into the DVD root menu.
     */
    MENU3,
    /**
     * Execute navigation menu command 4. For DVD,
     * this jumps to the Subpicture menu.
     */
    MENU4,
    /**
     * Execute navigation menu command 5. For DVD,
     * the jumps to the audio menu.
     */
    MENU5,
    /**
     * Execute navigation menu command 6. For DVD,
     * this jumps to the angles menu.
     */
    MENU6,
    /**
     * Execute navigation menu command 7. For DVD,
     * this jumps to the chapter menu.
     */
    MENU7,
    /**
     * Select the next button to the left in a menu,
     * if such a button exists.
     */
    LEFT,
    /**
     * Select the next button to the right in a menu,
     * if such a button exists.
     */
    RIGHT,
    /**
     * Select the button above the current one in a
     * menu, if such a button exists.
     */
    UP,
    /**
     * Select the button below the current one in a
     * menu, if such a button exists.
     */
    DOWN,
    /**
     * Activate (click) the currently selected
     * button in a menu, if such a button exists.
     */
    ACTIVATE,
    /**
     * Switch to the previous angle in a
     * multiangle feature.
     */
    PREV_ANGLE,
    /**
     * Switch to the next angle in a multiangle
     * feature.
     */
    NEXT_ANGLE,
}
/**
 * Enum values for the various events that an element implementing the
 * GstNavigation interface might send up the pipeline.
 */
enum NavigationEventType {
    /**
     * Returned from
     * gst_navigation_event_get_type() when the passed event is not a navigation event.
     */
    INVALID,
    /**
     * A key press event. Use
     * gst_navigation_event_parse_key_event() to extract the details from the event.
     */
    KEY_PRESS,
    /**
     * A key release event. Use
     * gst_navigation_event_parse_key_event() to extract the details from the event.
     */
    KEY_RELEASE,
    /**
     * A mouse button press event. Use
     * gst_navigation_event_parse_mouse_button_event() to extract the details from the
     * event.
     */
    MOUSE_BUTTON_PRESS,
    /**
     * A mouse button release event. Use
     * gst_navigation_event_parse_mouse_button_event() to extract the details from the
     * event.
     */
    MOUSE_BUTTON_RELEASE,
    /**
     * A mouse movement event. Use
     * gst_navigation_event_parse_mouse_move_event() to extract the details from the
     * event.
     */
    MOUSE_MOVE,
    /**
     * A navigation command event. Use
     * gst_navigation_event_parse_command() to extract the details from the event.
     */
    COMMAND,
    /**
     * A mouse scroll event. Use gst_navigation_event_parse_mouse_scroll_event()
     * to extract the details from the event.
     */
    MOUSE_SCROLL,
}
/**
 * A set of notifications that may be received on the bus when navigation
 * related status changes.
 */
enum NavigationMessageType {
    /**
     * Returned from
     * gst_navigation_message_get_type() when the passed message is not a
     * navigation message.
     */
    INVALID,
    /**
     * Sent when the mouse moves over or leaves a
     * clickable region of the output, such as a DVD menu button.
     */
    MOUSE_OVER,
    /**
     * Sent when the set of available commands
     * changes and should re-queried by interested applications.
     */
    COMMANDS_CHANGED,
    /**
     * Sent when display angles in a multi-angle
     * feature (such as a multiangle DVD) change - either angles have appeared or
     * disappeared.
     */
    ANGLES_CHANGED,
    /**
     * Sent when a navigation event was not handled
     * by any element in the pipeline (Since: 1.6)
     */
    EVENT,
}
/**
 * Types of navigation interface queries.
 */
enum NavigationQueryType {
    /**
     * invalid query
     */
    INVALID,
    /**
     * command query
     */
    COMMANDS,
    /**
     * viewing angle query
     */
    ANGLES,
}
/**
 * Enumeration of the different standards that may apply to AFD data:
 * 
 * 0) ETSI/DVB:
 * https://www.etsi.org/deliver/etsi_ts/101100_101199/101154/02.01.01_60/ts_101154v020101p.pdf
 * 
 * 1) ATSC A/53:
 * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
 * 
 * 2) SMPTE ST2016-1:
 */
enum VideoAFDSpec {
    /**
     * AFD value is from DVB/ETSI standard
     */
    DVB_ETSI,
    /**
     * AFD value is from ATSC A/53 standard
     */
    ATSC_A53,
    SMPTE_ST2016_1,
}
/**
 * Enumeration of the various values for Active Format Description (AFD)
 * 
 * AFD should be included in video user data whenever the rectangular
 * picture area containing useful information does not extend to the full height or width of the coded
 * frame. AFD data may also be included in user data when the rectangular picture area containing
 * useful information extends to the full height and width of the coded frame.
 * 
 * For details, see Table 6.14 Active Format in:
 * 
 * ATSC Digital Television Standard:
 * Part 4 – MPEG-2 Video System Characteristics
 * 
 * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
 * 
 * and Active Format Description in Complete list of AFD codes
 * 
 * https://en.wikipedia.org/wiki/Active_Format_Description#Complete_list_of_AFD_codes
 * 
 * and SMPTE ST2016-1
 * 
 * Notes:
 * 
 * 1) AFD 0 is undefined for ATSC and SMPTE ST2016-1, indicating that AFD data is not available:
 * If Bar Data is not present, AFD '0000' indicates that exact information
 * is not available and the active image should be assumed to be the same as the coded frame. AFD '0000'.
 * AFD '0000' accompanied by Bar Data signals that the active image’s aspect ratio is narrower than 16:9,
 * but is not 4:3 or 14:9. As the exact aspect ratio cannot be conveyed by AFD alone, wherever possible,
 * AFD ‘0000’ should be accompanied by Bar Data to define the exact vertical or horizontal extent
 * of the active image.
 * 2) AFD 0 is reserved for DVB/ETSI
 * 3) values 1, 5, 6, 7, and 12 are reserved for both ATSC and DVB/ETSI
 * 4) values 2 and 3 are not recommended for ATSC, but are valid for DVB/ETSI
 */
enum VideoAFDValue {
    /**
     * Unavailable (see note 0 below).
     */
    UNAVAILABLE,
    /**
     * For 4:3 coded frame, letterbox 16:9 image,
     *      at top of the coded frame. For 16:9 coded frame, full frame 16:9 image,
     *      the same as the coded frame.
     */
    TODO_16_9_TOP_ALIGNED,
    /**
     * For 4:3 coded frame, letterbox 14:9 image,
     *      at top of the coded frame. For 16:9 coded frame, pillarbox 14:9 image,
     *      horizontally centered in the coded frame.
     */
    TODO_14_9_TOP_ALIGNED,
    /**
     * For 4:3 coded frame, letterbox image with an aspect ratio
     *      greater than 16:9, vertically centered in the coded frame. For 16:9 coded frame,
     *      letterbox image with an aspect ratio greater than 16:9.
     */
    GREATER_THAN_16_9,
    /**
     * For 4:3 coded frame, full frame 4:3 image,
     *      the same as the coded frame. For 16:9 coded frame, full frame 16:9 image, the same as
     *      the coded frame.
     */
    TODO_4_3_FULL_16_9_FULL,
    /**
     * For 4:3 coded frame, full frame 4:3 image, the same as
     *      the coded frame. For 16:9 coded frame, pillarbox 4:3 image, horizontally centered in the
     *      coded frame.
     */
    TODO_4_3_FULL_4_3_PILLAR,
    /**
     * For 4:3 coded frame, letterbox 16:9 image, vertically centered in
     *      the coded frame with all image areas protected. For 16:9 coded frame, full frame 16:9 image,
     *      with all image areas protected.
     */
    TODO_16_9_LETTER_16_9_FULL,
    /**
     * For 4:3 coded frame, letterbox 14:9 image, vertically centered in
     *      the coded frame. For 16:9 coded frame, pillarbox 14:9 image, horizontally centered in the
     *      coded frame.
     */
    TODO_14_9_LETTER_14_9_PILLAR,
    /**
     * For 4:3 coded frame, full frame 4:3 image, with alternative 14:9
     *      center. For 16:9 coded frame, pillarbox 4:3 image, with alternative 14:9 center.
     */
    TODO_4_3_FULL_14_9_CENTER,
    /**
     * For 4:3 coded frame, letterbox 16:9 image, with alternative 14:9
     *      center. For 16:9 coded frame, full frame 16:9 image, with alternative 14:9 center.
     */
    TODO_16_9_LETTER_14_9_CENTER,
    /**
     * For 4:3 coded frame, letterbox 16:9 image, with alternative 4:3
     *      center. For 16:9 coded frame, full frame 16:9 image, with alternative 4:3 center.
     */
    TODO_16_9_LETTER_4_3_CENTER,
}
/**
 * Different alpha modes.
 */
enum VideoAlphaMode {
    /**
     * When input and output have alpha, it will be copied.
     *         When the input has no alpha, alpha will be set to
     *         #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
     */
    COPY,
    /**
     * set all alpha to
     *    #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
     */
    SET,
    /**
     * multiply all alpha with
     *         #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE.
     *         When the input format has no alpha but the output format has, the
     *         alpha value will be set to #GST_VIDEO_CONVERTER_OPT_ALPHA_VALUE
     */
    MULT,
}
enum VideoAncillaryDID {
    UNDEFINED,
    DELETION,
    HANC_3G_AUDIO_DATA_FIRST,
    HANC_3G_AUDIO_DATA_LAST,
    HANC_HDTV_AUDIO_DATA_FIRST,
    HANC_HDTV_AUDIO_DATA_LAST,
    HANC_SDTV_AUDIO_DATA_1_FIRST,
    HANC_SDTV_AUDIO_DATA_1_LAST,
    CAMERA_POSITION,
    HANC_ERROR_DETECTION,
    HANC_SDTV_AUDIO_DATA_2_FIRST,
    HANC_SDTV_AUDIO_DATA_2_LAST,
}
/**
 * Some know types of Ancillary Data identifiers.
 */
enum VideoAncillaryDID16 {
    /**
     * CEA 708 Ancillary data according to SMPTE 334
     */
    S334_EIA_708,
    /**
     * CEA 608 Ancillary data according to SMPTE 334
     */
    S334_EIA_608,
    /**
     * AFD/Bar Ancillary data according to SMPTE 2016-3 (Since: 1.18)
     */
    S2016_3_AFD_BAR,
}
/**
 * The various known types of Closed Caption (CC).
 */
enum VideoCaptionType {
    /**
     * Unknown type of CC
     */
    UNKNOWN,
    /**
     * CEA-608 as byte pairs. Note that
     *      this format is not recommended since is does not specify to
     *      which field the caption comes from and therefore assumes
     *      it comes from the first field (and that there is no information
     *      on the second field). Use `GST_VIDEO_CAPTION_TYPE_CEA7`08_RAW
     *      if you wish to store CEA-608 from two fields and prefix each byte pair
     *      with 0xFC for the first field and 0xFD for the second field.
     */
    CEA608_RAW,
    /**
     * CEA-608 as byte triplets as defined
     *      in SMPTE S334-1 Annex A. The second and third byte of the byte triplet
     *      is the raw CEA608 data, the first byte is a bitfield: The top/7th bit is
     *      0 for the second field, 1 for the first field, bit 6 and 5 are 0 and
     *      bits 4 to 0 are a 5 bit unsigned integer that represents the line
     *      offset relative to the base-line of the original image format (line 9
     *      for 525-line field 1, line 272 for 525-line field 2, line 5 for
     *      625-line field 1 and line 318 for 625-line field 2).
     */
    CEA608_S334_1A,
    /**
     * CEA-708 as cc_data byte triplets. They
     *      can also contain 608-in-708 and the first byte of each triplet has to
     *      be inspected for detecting the type.
     */
    CEA708_RAW,
    /**
     * CEA-708 (and optionally CEA-608) in
     *      a CDP (Caption Distribution Packet) defined by SMPTE S-334-2.
     *      Contains the whole CDP (starting with 0x9669).
     */
    CEA708_CDP,
}
/**
 * Different subsampling and upsampling methods
 */
enum VideoChromaMethod {
    /**
     * Duplicates the chroma samples when
     *    upsampling and drops when subsampling
     */
    NEAREST,
    /**
     * Uses linear interpolation to reconstruct
     *    missing chroma and averaging to subsample
     */
    LINEAR,
}
/**
 * Different chroma downsampling and upsampling modes
 */
enum VideoChromaMode {
    /**
     * do full chroma up and down sampling
     */
    FULL,
    /**
     * only perform chroma upsampling
     */
    UPSAMPLE_ONLY,
    /**
     * only perform chroma downsampling
     */
    DOWNSAMPLE_ONLY,
    /**
     * disable chroma resampling
     */
    NONE,
}
/**
 * The color matrix is used to convert between Y'PbPr and
 * non-linear RGB (R'G'B')
 */
enum VideoColorMatrix {
    /**
     * unknown matrix
     */
    UNKNOWN,
    /**
     * identity matrix. Order of coefficients is
     * actually GBR, also IEC 61966-2-1 (sRGB)
     */
    RGB,
    /**
     * FCC Title 47 Code of Federal Regulations 73.682 (a)(20)
     */
    FCC,
    /**
     * ITU-R BT.709 color matrix, also ITU-R BT1361
     * / IEC 61966-2-4 xvYCC709 / SMPTE RP177 Annex B
     */
    BT709,
    /**
     * ITU-R BT.601 color matrix, also SMPTE170M / ITU-R BT1358 525 / ITU-R BT1700 NTSC
     */
    BT601,
    /**
     * SMPTE 240M color matrix
     */
    SMPTE240M,
    /**
     * ITU-R BT.2020 color matrix. Since: 1.6
     */
    BT2020,
}
/**
 * The color primaries define the how to transform linear RGB values to and from
 * the CIE XYZ colorspace.
 */
enum VideoColorPrimaries {
    /**
     * unknown color primaries
     */
    UNKNOWN,
    /**
     * BT709 primaries, also ITU-R BT1361 / IEC
     * 61966-2-4 / SMPTE RP177 Annex B
     */
    BT709,
    /**
     * BT470M primaries, also FCC Title 47 Code
     * of Federal Regulations 73.682 (a)(20)
     */
    BT470M,
    /**
     * BT470BG primaries, also ITU-R BT601-6
     * 625 / ITU-R BT1358 625 / ITU-R BT1700 625 PAL & SECAM
     */
    BT470BG,
    /**
     * SMPTE170M primaries, also ITU-R
     * BT601-6 525 / ITU-R BT1358 525 / ITU-R BT1700 NTSC
     */
    SMPTE170M,
    /**
     * SMPTE240M primaries
     */
    SMPTE240M,
    /**
     * Generic film (colour filters using
     * Illuminant C)
     */
    FILM,
    /**
     * ITU-R BT2020 primaries. Since: 1.6
     */
    BT2020,
    /**
     * Adobe RGB primaries. Since: 1.8
     */
    ADOBERGB,
    /**
     * SMPTE ST 428 primaries (CIE 1931
     * XYZ). Since: 1.16
     */
    SMPTEST428,
    /**
     * SMPTE RP 431 primaries (ST 431-2
     * (2011) / DCI P3). Since: 1.16
     */
    SMPTERP431,
    /**
     * SMPTE EG 432 primaries (ST 432-1
     * (2010) / P3 D65). Since: 1.16
     */
    SMPTEEG432,
    /**
     * EBU 3213 primaries (JEDEC P22
     * phosphors). Since: 1.16
     */
    EBU3213,
}
/**
 * Possible color range values. These constants are defined for 8 bit color
 * values and can be scaled for other bit depths.
 */
enum VideoColorRange {
    /**
     * unknown range
     */
    UNKNOWN,
    /**
     * [0..255] for 8 bit components
     */
    TODO_0_255,
    /**
     * [16..235] for 8 bit components. Chroma has
     *                 [16..240] range.
     */
    TODO_16_235,
}
/**
 * Different dithering methods to use.
 */
enum VideoDitherMethod {
    /**
     * no dithering
     */
    NONE,
    /**
     * propagate rounding errors downwards
     */
    VERTERR,
    /**
     * Dither with floyd-steinberg error diffusion
     */
    FLOYD_STEINBERG,
    /**
     * Dither with Sierra Lite error diffusion
     */
    SIERRA_LITE,
    /**
     * ordered dither using a bayer pattern
     */
    BAYER,
}
/**
 * Field order of interlaced content. This is only valid for
 * interlace-mode=interleaved and not interlace-mode=mixed. In the case of
 * mixed or GST_VIDEO_FIELD_ORDER_UNKOWN, the field order is signalled via
 * buffer flags.
 */
enum VideoFieldOrder {
    /**
     * unknown field order for interlaced content.
     *     The actual field order is signalled via buffer flags.
     */
    UNKNOWN,
    /**
     * top field is first
     */
    TOP_FIELD_FIRST,
    /**
     * bottom field is first
     */
    BOTTOM_FIELD_FIRST,
}
/**
 * Enum value describing the most common video formats.
 * 
 * See the [GStreamer raw video format design document](https://gstreamer.freedesktop.org/documentation/additional/design/mediatype-video-raw.html#formats)
 * for details about the layout and packing of these formats in memory.
 */
enum VideoFormat {
    /**
     * Unknown or unset video format id
     */
    UNKNOWN,
    /**
     * Encoded video format. Only ever use that in caps for
     *                            special video formats in combination with non-system
     *                            memory GstCapsFeatures where it does not make sense
     *                            to specify a real video format.
     */
    ENCODED,
    /**
     * planar 4:2:0 YUV
     */
    I420,
    /**
     * planar 4:2:0 YVU (like I420 but UV planes swapped)
     */
    YV12,
    /**
     * packed 4:2:2 YUV (Y0-U0-Y1-V0 Y2-U2-Y3-V2 Y4 ...)
     */
    YUY2,
    /**
     * packed 4:2:2 YUV (U0-Y0-V0-Y1 U2-Y2-V2-Y3 U4 ...)
     */
    UYVY,
    /**
     * packed 4:4:4 YUV with alpha channel (A0-Y0-U0-V0 ...)
     */
    AYUV,
    /**
     * sparse rgb packed into 32 bit, space last
     */
    RGBX,
    /**
     * sparse reverse rgb packed into 32 bit, space last
     */
    BGRX,
    /**
     * sparse rgb packed into 32 bit, space first
     */
    XRGB,
    /**
     * sparse reverse rgb packed into 32 bit, space first
     */
    XBGR,
    /**
     * rgb with alpha channel last
     */
    RGBA,
    /**
     * reverse rgb with alpha channel last
     */
    BGRA,
    /**
     * rgb with alpha channel first
     */
    ARGB,
    /**
     * reverse rgb with alpha channel first
     */
    ABGR,
    /**
     * RGB packed into 24 bits without padding (`R-G-B-R-G-B`)
     */
    RGB,
    /**
     * reverse RGB packed into 24 bits without padding (`B-G-R-B-G-R`)
     */
    BGR,
    /**
     * planar 4:1:1 YUV
     */
    Y41B,
    /**
     * planar 4:2:2 YUV
     */
    Y42B,
    /**
     * packed 4:2:2 YUV (Y0-V0-Y1-U0 Y2-V2-Y3-U2 Y4 ...)
     */
    YVYU,
    /**
     * planar 4:4:4 YUV
     */
    Y444,
    /**
     * packed 4:2:2 10-bit YUV, complex format
     */
    V210,
    /**
     * packed 4:2:2 16-bit YUV, Y0-U0-Y1-V1 order
     */
    V216,
    /**
     * planar 4:2:0 YUV with interleaved UV plane
     */
    NV12,
    /**
     * planar 4:2:0 YUV with interleaved VU plane
     */
    NV21,
    /**
     * 8-bit grayscale
     */
    GRAY8,
    /**
     * 16-bit grayscale, most significant byte first
     */
    GRAY16_BE,
    /**
     * 16-bit grayscale, least significant byte first
     */
    GRAY16_LE,
    /**
     * packed 4:4:4 YUV (Y-U-V ...)
     */
    V308,
    /**
     * rgb 5-6-5 bits per component
     */
    RGB16,
    /**
     * reverse rgb 5-6-5 bits per component
     */
    BGR16,
    /**
     * rgb 5-5-5 bits per component
     */
    RGB15,
    /**
     * reverse rgb 5-5-5 bits per component
     */
    BGR15,
    /**
     * packed 10-bit 4:2:2 YUV (U0-Y0-V0-Y1 U2-Y2-V2-Y3 U4 ...)
     */
    UYVP,
    /**
     * planar 4:4:2:0 AYUV
     */
    A420,
    /**
     * 8-bit paletted RGB
     */
    RGB8P,
    /**
     * planar 4:1:0 YUV
     */
    YUV9,
    /**
     * planar 4:1:0 YUV (like YUV9 but UV planes swapped)
     */
    YVU9,
    /**
     * packed 4:1:1 YUV (Cb-Y0-Y1-Cr-Y2-Y3 ...)
     */
    IYU1,
    /**
     * rgb with alpha channel first, 16 bits (native endianness) per channel
     */
    ARGB64,
    /**
     * packed 4:4:4 YUV with alpha channel, 16 bits (native endianness) per channel (A0-Y0-U0-V0 ...)
     */
    AYUV64,
    /**
     * packed 4:4:4 RGB, 10 bits per channel
     */
    R210,
    /**
     * planar 4:2:0 YUV, 10 bits per channel
     */
    I420_10BE,
    /**
     * planar 4:2:0 YUV, 10 bits per channel
     */
    I420_10LE,
    /**
     * planar 4:2:2 YUV, 10 bits per channel
     */
    I422_10BE,
    /**
     * planar 4:2:2 YUV, 10 bits per channel
     */
    I422_10LE,
    /**
     * planar 4:4:4 YUV, 10 bits per channel (Since: 1.2)
     */
    Y444_10BE,
    /**
     * planar 4:4:4 YUV, 10 bits per channel (Since: 1.2)
     */
    Y444_10LE,
    /**
     * planar 4:4:4 RGB, 8 bits per channel (Since: 1.2)
     */
    GBR,
    /**
     * planar 4:4:4 RGB, 10 bits per channel (Since: 1.2)
     */
    GBR_10BE,
    /**
     * planar 4:4:4 RGB, 10 bits per channel (Since: 1.2)
     */
    GBR_10LE,
    /**
     * planar 4:2:2 YUV with interleaved UV plane (Since: 1.2)
     */
    NV16,
    /**
     * planar 4:4:4 YUV with interleaved UV plane (Since: 1.2)
     */
    NV24,
    /**
     * NV12 with 64x32 tiling in zigzag pattern (Since: 1.4)
     */
    NV12_64Z32,
    /**
     * planar 4:4:2:0 YUV, 10 bits per channel (Since: 1.6)
     */
    A420_10BE,
    /**
     * planar 4:4:2:0 YUV, 10 bits per channel (Since: 1.6)
     */
    A420_10LE,
    /**
     * planar 4:4:2:2 YUV, 10 bits per channel (Since: 1.6)
     */
    A422_10BE,
    /**
     * planar 4:4:2:2 YUV, 10 bits per channel (Since: 1.6)
     */
    A422_10LE,
    /**
     * planar 4:4:4:4 YUV, 10 bits per channel (Since: 1.6)
     */
    A444_10BE,
    /**
     * planar 4:4:4:4 YUV, 10 bits per channel (Since: 1.6)
     */
    A444_10LE,
    /**
     * planar 4:2:2 YUV with interleaved VU plane (Since: 1.6)
     */
    NV61,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 10 bits per channel (Since: 1.10)
     */
    P010_10BE,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 10 bits per channel (Since: 1.10)
     */
    P010_10LE,
    /**
     * packed 4:4:4 YUV (U-Y-V ...) (Since: 1.10)
     */
    IYU2,
    /**
     * packed 4:2:2 YUV (V0-Y0-U0-Y1 V2-Y2-U2-Y3 V4 ...)
     */
    VYUY,
    /**
     * planar 4:4:4:4 ARGB, 8 bits per channel (Since: 1.12)
     */
    GBRA,
    /**
     * planar 4:4:4:4 ARGB, 10 bits per channel (Since: 1.12)
     */
    GBRA_10BE,
    /**
     * planar 4:4:4:4 ARGB, 10 bits per channel (Since: 1.12)
     */
    GBRA_10LE,
    /**
     * planar 4:4:4 RGB, 12 bits per channel (Since: 1.12)
     */
    GBR_12BE,
    /**
     * planar 4:4:4 RGB, 12 bits per channel (Since: 1.12)
     */
    GBR_12LE,
    /**
     * planar 4:4:4:4 ARGB, 12 bits per channel (Since: 1.12)
     */
    GBRA_12BE,
    /**
     * planar 4:4:4:4 ARGB, 12 bits per channel (Since: 1.12)
     */
    GBRA_12LE,
    /**
     * planar 4:2:0 YUV, 12 bits per channel (Since: 1.12)
     */
    I420_12BE,
    /**
     * planar 4:2:0 YUV, 12 bits per channel (Since: 1.12)
     */
    I420_12LE,
    /**
     * planar 4:2:2 YUV, 12 bits per channel (Since: 1.12)
     */
    I422_12BE,
    /**
     * planar 4:2:2 YUV, 12 bits per channel (Since: 1.12)
     */
    I422_12LE,
    /**
     * planar 4:4:4 YUV, 12 bits per channel (Since: 1.12)
     */
    Y444_12BE,
    /**
     * planar 4:4:4 YUV, 12 bits per channel (Since: 1.12)
     */
    Y444_12LE,
    /**
     * 10-bit grayscale, packed into 32bit words (2 bits padding) (Since: 1.14)
     */
    GRAY10_LE32,
    /**
     * 10-bit variant of `GST_VIDEO_FORMAT_NV1`2, packed into 32bit words (MSB 2 bits padding) (Since: 1.14)
     */
    NV12_10LE32,
    /**
     * 10-bit variant of `GST_VIDEO_FORMAT_NV1`6, packed into 32bit words (MSB 2 bits padding) (Since: 1.14)
     */
    NV16_10LE32,
    /**
     * Fully packed variant of NV12_10LE32 (Since: 1.16)
     */
    NV12_10LE40,
    /**
     * packed 4:2:2 YUV, 10 bits per channel (Since: 1.16)
     */
    Y210,
    /**
     * packed 4:4:4 YUV, 10 bits per channel(A-V-Y-U...) (Since: 1.16)
     */
    Y410,
    /**
     * packed 4:4:4 YUV with alpha channel (V0-U0-Y0-A0...) (Since: 1.16)
     */
    VUYA,
    /**
     * packed 4:4:4 RGB with alpha channel(B-G-R-A), 10 bits for R/G/B channel and MSB 2 bits for alpha channel (Since: 1.16)
     */
    BGR10A2_LE,
    /**
     * packed 4:4:4 RGB with alpha channel(R-G-B-A), 10 bits for R/G/B channel and MSB 2 bits for alpha channel (Since: 1.18)
     */
    RGB10A2_LE,
    /**
     * planar 4:4:4 YUV, 16 bits per channel (Since: 1.18)
     */
    Y444_16BE,
    /**
     * planar 4:4:4 YUV, 16 bits per channel (Since: 1.18)
     */
    Y444_16LE,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 16 bits per channel (Since: 1.18)
     */
    P016_BE,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 16 bits per channel (Since: 1.18)
     */
    P016_LE,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 12 bits per channel (Since: 1.18)
     */
    P012_BE,
    /**
     * planar 4:2:0 YUV with interleaved UV plane, 12 bits per channel (Since: 1.18)
     */
    P012_LE,
    /**
     * packed 4:2:2 YUV, 12 bits per channel (Y-U-Y-V) (Since: 1.18)
     */
    Y212_BE,
    /**
     * packed 4:2:2 YUV, 12 bits per channel (Y-U-Y-V) (Since: 1.18)
     */
    Y212_LE,
    /**
     * packed 4:4:4:4 YUV, 12 bits per channel(U-Y-V-A...) (Since: 1.18)
     */
    Y412_BE,
    /**
     * packed 4:4:4:4 YUV, 12 bits per channel(U-Y-V-A...) (Since: 1.18)
     */
    Y412_LE,
    /**
     * NV12 with 4x4 tiles in linear order.
     */
    NV12_4L4,
    /**
     * NV12 with 32x32 tiles in linear order.
     */
    NV12_32L32,
    /**
     * Planar 4:4:4 RGB, R-G-B order
     */
    RGBP,
    /**
     * Planar 4:4:4 RGB, B-G-R order
     */
    BGRP,
    /**
     * Planar 4:2:0 YUV with interleaved UV plane with alpha as
     * 3rd plane.
     */
    AV12,
    /**
     * RGB with alpha channel first, 16 bits (little endian)
     * per channel.
     */
    ARGB64_LE,
    /**
     * RGB with alpha channel first, 16 bits (big endian)
     * per channel.
     */
    ARGB64_BE,
    /**
     * RGB with alpha channel last, 16 bits (little endian)
     * per channel.
     */
    RGBA64_LE,
    /**
     * RGB with alpha channel last, 16 bits (big endian)
     * per channel.
     */
    RGBA64_BE,
    /**
     * Reverse RGB with alpha channel last, 16 bits (little endian)
     * per channel.
     */
    BGRA64_LE,
    /**
     * Reverse RGB with alpha channel last, 16 bits (big endian)
     * per channel.
     */
    BGRA64_BE,
    /**
     * Reverse RGB with alpha channel first, 16 bits (little endian)
     * per channel.
     */
    ABGR64_LE,
    /**
     * Reverse RGB with alpha channel first, 16 bits (big endian)
     * per channel.
     */
    ABGR64_BE,
}
/**
 * The orientation of the GL texture.
 */
enum VideoGLTextureOrientation {
    /**
     * Top line first in memory, left row first
     */
    NORMAL_Y_NORMAL,
    /**
     * Bottom line first in memory, left row first
     */
    NORMAL_Y_FLIP,
    /**
     * Top line first in memory, right row first
     */
    FLIP_Y_NORMAL,
    /**
     * Bottom line first in memory, right row first
     */
    FLIP_Y_FLIP,
}
/**
 * The GL texture type.
 */
enum VideoGLTextureType {
    /**
     * Luminance texture, GL_LUMINANCE
     */
    LUMINANCE,
    /**
     * Luminance-alpha texture, GL_LUMINANCE_ALPHA
     */
    LUMINANCE_ALPHA,
    /**
     * RGB 565 texture, GL_RGB
     */
    RGB16,
    /**
     * RGB texture, GL_RGB
     */
    RGB,
    /**
     * RGBA texture, GL_RGBA
     */
    RGBA,
    /**
     * R texture, GL_RED_EXT
     */
    R,
    /**
     * RG texture, GL_RG_EXT
     */
    RG,
}
enum VideoGammaMode {
    /**
     * disable gamma handling
     */
    NONE,
    /**
     * convert between input and output gamma
     * Different gamma conversion modes
     */
    REMAP,
}
/**
 * The possible values of the #GstVideoInterlaceMode describing the interlace
 * mode of the stream.
 */
enum VideoInterlaceMode {
    /**
     * all frames are progressive
     */
    PROGRESSIVE,
    /**
     * 2 fields are interleaved in one video
     *     frame. Extra buffer flags describe the field order.
     */
    INTERLEAVED,
    /**
     * frames contains both interlaced and
     *     progressive video, the buffer flags describe the frame and fields.
     */
    MIXED,
    /**
     * 2 fields are stored in one buffer, use the
     *     frame ID to get access to the required field. For multiview (the
     *     'views' property > 1) the fields of view N can be found at frame ID
     *     (N * 2) and (N * 2) + 1.
     *     Each field has only half the amount of lines as noted in the
     *     height property. This mode requires multiple GstVideoMeta metadata
     *     to describe the fields.
     */
    FIELDS,
    /**
     * 1 field is stored in one buffer,
     *     `GST_VIDEO_BUFFER_FLAG_TF` or `GST_VIDEO_BUFFER_FLAG_BF` indicates if
     *     the buffer is carrying the top or bottom field, respectively. The top and
     *     bottom buffers must alternate in the pipeline, with this mode
     *     (Since: 1.16).
     */
    ALTERNATE,
}
/**
 * Different color matrix conversion modes
 */
enum VideoMatrixMode {
    /**
     * do conversion between color matrices
     */
    FULL,
    /**
     * use the input color matrix to convert
     *   to and from R'G'B
     */
    INPUT_ONLY,
    /**
     * use the output color matrix to convert
     *   to and from R'G'B
     */
    OUTPUT_ONLY,
    /**
     * disable color matrix conversion.
     */
    NONE,
}
/**
 * #GstVideoMultiviewFramePacking represents the subset of #GstVideoMultiviewMode
 * values that can be applied to any video frame without needing extra metadata.
 * It can be used by elements that provide a property to override the
 * multiview interpretation of a video stream when the video doesn't contain
 * any markers.
 * 
 * This enum is used (for example) on playbin, to re-interpret a played
 * video stream as a stereoscopic video. The individual enum values are
 * equivalent to and have the same value as the matching #GstVideoMultiviewMode.
 */
enum VideoMultiviewFramePacking {
    /**
     * A special value indicating
     * no frame packing info.
     */
    NONE,
    /**
     * All frames are monoscopic.
     */
    MONO,
    /**
     * All frames represent a left-eye view.
     */
    LEFT,
    /**
     * All frames represent a right-eye view.
     */
    RIGHT,
    /**
     * Left and right eye views are
     * provided in the left and right half of the frame respectively.
     */
    SIDE_BY_SIDE,
    /**
     * Left and right eye
     * views are provided in the left and right half of the frame, but
     * have been sampled using quincunx method, with half-pixel offset
     * between the 2 views.
     */
    SIDE_BY_SIDE_QUINCUNX,
    /**
     * Alternating vertical
     * columns of pixels represent the left and right eye view respectively.
     */
    COLUMN_INTERLEAVED,
    /**
     * Alternating horizontal
     * rows of pixels represent the left and right eye view respectively.
     */
    ROW_INTERLEAVED,
    /**
     * The top half of the frame
     * contains the left eye, and the bottom half the right eye.
     */
    TOP_BOTTOM,
    /**
     * Pixels are arranged with
     * alternating pixels representing left and right eye views in a
     * checkerboard fashion.
     */
    CHECKERBOARD,
}
/**
 * All possible stereoscopic 3D and multiview representations.
 * In conjunction with #GstVideoMultiviewFlags, describes how
 * multiview content is being transported in the stream.
 */
enum VideoMultiviewMode {
    /**
     * A special value indicating
     * no multiview information. Used in GstVideoInfo and other places to
     * indicate that no specific multiview handling has been requested or
     * provided. This value is never carried on caps.
     */
    NONE,
    /**
     * All frames are monoscopic.
     */
    MONO,
    /**
     * All frames represent a left-eye view.
     */
    LEFT,
    /**
     * All frames represent a right-eye view.
     */
    RIGHT,
    /**
     * Left and right eye views are
     * provided in the left and right half of the frame respectively.
     */
    SIDE_BY_SIDE,
    /**
     * Left and right eye
     * views are provided in the left and right half of the frame, but
     * have been sampled using quincunx method, with half-pixel offset
     * between the 2 views.
     */
    SIDE_BY_SIDE_QUINCUNX,
    /**
     * Alternating vertical
     * columns of pixels represent the left and right eye view respectively.
     */
    COLUMN_INTERLEAVED,
    /**
     * Alternating horizontal
     * rows of pixels represent the left and right eye view respectively.
     */
    ROW_INTERLEAVED,
    /**
     * The top half of the frame
     * contains the left eye, and the bottom half the right eye.
     */
    TOP_BOTTOM,
    /**
     * Pixels are arranged with
     * alternating pixels representing left and right eye views in a
     * checkerboard fashion.
     */
    CHECKERBOARD,
    /**
     * Left and right eye views
     * are provided in separate frames alternately.
     */
    FRAME_BY_FRAME,
    /**
     * Multiple
     * independent views are provided in separate frames in sequence.
     * This method only applies to raw video buffers at the moment.
     * Specific view identification is via the `GstVideoMultiviewMeta`
     * and #GstVideoMeta(s) on raw video buffers.
     */
    MULTIVIEW_FRAME_BY_FRAME,
    /**
     * Multiple views are
     * provided as separate #GstMemory framebuffers attached to each
     * #GstBuffer, described by the `GstVideoMultiviewMeta`
     * and #GstVideoMeta(s)
     */
    SEPARATED,
}
/**
 * The different video orientation methods.
 */
enum VideoOrientationMethod {
    /**
     * Identity (no rotation)
     */
    IDENTITY,
    /**
     * Rotate clockwise 90 degrees
     */
    TODO_90R,
    /**
     * Rotate 180 degrees
     */
    TODO_180,
    /**
     * Rotate counter-clockwise 90 degrees
     */
    TODO_90L,
    /**
     * Flip horizontally
     */
    HORIZ,
    /**
     * Flip vertically
     */
    VERT,
    /**
     * Flip across upper left/lower right diagonal
     */
    UL_LR,
    /**
     * Flip across upper right/lower left diagonal
     */
    UR_LL,
    /**
     * Select flip method based on image-orientation tag
     */
    AUTO,
    /**
     * Current status depends on plugin internal setup
     */
    CUSTOM,
}
/**
 * Different primaries conversion modes
 */
enum VideoPrimariesMode {
    /**
     * disable conversion between primaries
     */
    NONE,
    /**
     * do conversion between primaries only
     *   when it can be merged with color matrix conversion.
     */
    MERGE_ONLY,
    /**
     * fast conversion between primaries
     */
    FAST,
}
/**
 * Different subsampling and upsampling methods
 */
enum VideoResamplerMethod {
    /**
     * Duplicates the samples when
     *    upsampling and drops when downsampling
     */
    NEAREST,
    /**
     * Uses linear interpolation to reconstruct
     *    missing samples and averaging to downsample
     */
    LINEAR,
    /**
     * Uses cubic interpolation
     */
    CUBIC,
    /**
     * Uses sinc interpolation
     */
    SINC,
    /**
     * Uses lanczos interpolation
     */
    LANCZOS,
}
/**
 * Enum value describing the available tiling modes.
 */
enum VideoTileMode {
    /**
     * Unknown or unset tile mode
     */
    UNKNOWN,
    /**
     * Every four adjacent blocks - two
     *    horizontally and two vertically are grouped together and are located
     *    in memory in Z or flipped Z order. In case of odd rows, the last row
     *    of blocks is arranged in linear order.
     */
    ZFLIPZ_2X2,
    /**
     * Tiles are in row order.
     */
    LINEAR,
}
/**
 * Enum value describing the most common tiling types.
 */
enum VideoTileType {
    /**
     * Tiles are indexed. Use
     *   gst_video_tile_get_index () to retrieve the tile at the requested
     *   coordinates.
     */
    INDEXED,
}
/**
 * The video transfer function defines the formula for converting between
 * non-linear RGB (R'G'B') and linear RGB
 */
enum VideoTransferFunction {
    /**
     * unknown transfer function
     */
    UNKNOWN,
    /**
     * linear RGB, gamma 1.0 curve
     */
    GAMMA10,
    /**
     * Gamma 1.8 curve
     */
    GAMMA18,
    /**
     * Gamma 2.0 curve
     */
    GAMMA20,
    /**
     * Gamma 2.2 curve
     */
    GAMMA22,
    /**
     * Gamma 2.2 curve with a linear segment in the lower
     *                           range, also ITU-R BT470M / ITU-R BT1700 625 PAL &
     *                           SECAM / ITU-R BT1361
     */
    BT709,
    /**
     * Gamma 2.2 curve with a linear segment in the
     *                               lower range
     */
    SMPTE240M,
    /**
     * Gamma 2.4 curve with a linear segment in the lower
     *                          range. IEC 61966-2-1 (sRGB or sYCC)
     */
    SRGB,
    /**
     * Gamma 2.8 curve, also ITU-R BT470BG
     */
    GAMMA28,
    /**
     * Logarithmic transfer characteristic
     *                             100:1 range
     */
    LOG100,
    /**
     * Logarithmic transfer characteristic
     *                             316.22777:1 range (100 * sqrt(10) : 1)
     */
    LOG316,
    /**
     * Gamma 2.2 curve with a linear segment in the lower
     *                                range. Used for BT.2020 with 12 bits per
     *                                component. Since: 1.6
     */
    BT2020_12,
    /**
     * Gamma 2.19921875. Since: 1.8
     */
    ADOBERGB,
    /**
     * Rec. ITU-R BT.2020-2 with 10 bits per component.
     *                                (functionally the same as the values
     *                                GST_VIDEO_TRANSFER_BT709 and GST_VIDEO_TRANSFER_BT601).
     *                                Since: 1.18
     */
    BT2020_10,
    /**
     * SMPTE ST 2084 for 10, 12, 14, and 16-bit systems.
     *                                Known as perceptual quantization (PQ)
     *                                Since: 1.18
     */
    SMPTE2084,
    /**
     * Association of Radio Industries and Businesses (ARIB)
     *                                   STD-B67 and Rec. ITU-R BT.2100-1 hybrid loggamma (HLG) system
     *                                   Since: 1.18
     */
    ARIB_STD_B67,
    /**
     * also known as SMPTE170M / ITU-R BT1358 525 or 625 / ITU-R BT1700 NTSC
     */
    BT601,
}
/**
 * Return values for #GstVideoVBIParser
 */
enum VideoVBIParserResult {
    /**
     * No line were provided, or no more Ancillary data was found.
     */
    DONE,
    /**
     * A #GstVideoAncillary was found.
     */
    OK,
    /**
     * An error occurred
     */
    ERROR,
}
/**
 * Additional video buffer flags. These flags can potentially be used on any
 * buffers carrying closed caption data, or video data - even encoded data.
 * 
 * Note that these are only valid for #GstCaps of type: video/... and caption/...
 * They can conflict with other extended buffer flags.
 */
enum VideoBufferFlags {
    /**
     * If the #GstBuffer is interlaced. In mixed
     *                                     interlace-mode, this flags specifies if the frame is
     *                                     interlaced or progressive.
     */
    INTERLACED,
    /**
     * If the #GstBuffer is interlaced, then the first field
     *                                     in the video frame is the top field.  If unset, the
     *                                     bottom field is first.
     */
    TFF,
    /**
     * If the #GstBuffer is interlaced, then the first field
     *                                     (as defined by the %GST_VIDEO_BUFFER_FLAG_TFF flag setting)
     *                                     is repeated.
     */
    RFF,
    /**
     * If the #GstBuffer is interlaced, then only the
     *                                     first field (as defined by the %GST_VIDEO_BUFFER_FLAG_TFF
     *                                     flag setting) is to be displayed (Since: 1.16).
     */
    ONEFIELD,
    /**
     * The #GstBuffer contains one or more specific views,
     *                                     such as left or right eye view. This flags is set on
     *                                     any buffer that contains non-mono content - even for
     *                                     streams that contain only a single viewpoint. In mixed
     *                                     mono / non-mono streams, the absence of the flag marks
     *                                     mono buffers.
     */
    MULTIPLE_VIEW,
    /**
     * When conveying stereo/multiview content with
     *                                     frame-by-frame methods, this flag marks the first buffer
     *                                      in a bundle of frames that belong together.
     */
    FIRST_IN_BUNDLE,
    /**
     * The video frame has the top field only. This is the
     *                                     same as GST_VIDEO_BUFFER_FLAG_TFF |
     *                                     GST_VIDEO_BUFFER_FLAG_ONEFIELD (Since: 1.16).
     *                                     Use GST_VIDEO_BUFFER_IS_TOP_FIELD() to check for this flag.
     */
    TOP_FIELD,
    /**
     * The video frame has the bottom field only. This is
     *                                     the same as GST_VIDEO_BUFFER_FLAG_ONEFIELD
     *                                     (GST_VIDEO_BUFFER_FLAG_TFF flag unset) (Since: 1.16).
     *                                     Use GST_VIDEO_BUFFER_IS_BOTTOM_FIELD() to check for this flag.
     */
    BOTTOM_FIELD,
    /**
     * The #GstBuffer contains the end of a video field or frame
     *                                     boundary such as the last subframe or packet (Since: 1.18).
     */
    MARKER,
    /**
     * Offset to define more flags
     */
    LAST,
}
/**
 * Extra flags that influence the result from gst_video_chroma_resample_new().
 */
enum VideoChromaFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * the input is interlaced
     */
    INTERLACED,
}
/**
 * Various Chroma sitings.
 */
enum VideoChromaSite {
    /**
     * unknown cositing
     */
    UNKNOWN,
    /**
     * no cositing
     */
    NONE,
    /**
     * chroma is horizontally cosited
     */
    H_COSITED,
    /**
     * chroma is vertically cosited
     */
    V_COSITED,
    /**
     * choma samples are sited on alternate lines
     */
    ALT_LINE,
    /**
     * chroma samples cosited with luma samples
     */
    COSITED,
    /**
     * jpeg style cositing, also for mpeg1 and mjpeg
     */
    JPEG,
    /**
     * mpeg2 style cositing
     */
    MPEG2,
    /**
     * DV style cositing
     */
    DV,
}
/**
 * Flags for #GstVideoCodecFrame
 */
enum VideoCodecFrameFlags {
    /**
     * is the frame only meant to be decoded
     */
    DECODE_ONLY,
    /**
     * is the frame a synchronization point (keyframe)
     */
    SYNC_POINT,
    /**
     * should the output frame be made a keyframe
     */
    FORCE_KEYFRAME,
    /**
     * should the encoder output stream headers
     */
    FORCE_KEYFRAME_HEADERS,
    /**
     * The buffer data is corrupted.
     */
    CORRUPTED,
}
/**
 * Flags to be used in combination with gst_video_decoder_request_sync_point().
 * See the function documentation for more details.
 */
enum VideoDecoderRequestSyncPointFlags {
    /**
     * discard all following
     *     input until the next sync point.
     */
    DISCARD_INPUT,
    /**
     * discard all following
     *     output until the next sync point.
     */
    CORRUPT_OUTPUT,
}
/**
 * Extra flags that influence the result from gst_video_chroma_resample_new().
 */
enum VideoDitherFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * the input is interlaced
     */
    INTERLACED,
    /**
     * quantize values in addition to adding dither.
     */
    QUANTIZE,
}
/**
 * Extra video flags
 */
enum VideoFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * a variable fps is selected, fps_n and fps_d
     *     denote the maximum fps of the video
     */
    VARIABLE_FPS,
    /**
     * Each color has been scaled by the alpha
     *     value.
     */
    PREMULTIPLIED_ALPHA,
}
/**
 * The different video flags that a format info can have.
 */
enum VideoFormatFlags {
    /**
     * The video format is YUV, components are numbered
     *   0=Y, 1=U, 2=V.
     */
    YUV,
    /**
     * The video format is RGB, components are numbered
     *   0=R, 1=G, 2=B.
     */
    RGB,
    /**
     * The video is gray, there is one gray component
     *   with index 0.
     */
    GRAY,
    /**
     * The video format has an alpha components with
     *   the number 3.
     */
    ALPHA,
    /**
     * The video format has data stored in little
     *   endianness.
     */
    LE,
    /**
     * The video format has a palette. The palette
     *   is stored in the second plane and indexes are stored in the first plane.
     */
    PALETTE,
    /**
     * The video format has a complex layout that
     *   can't be described with the usual information in the #GstVideoFormatInfo.
     */
    COMPLEX,
    /**
     * This format can be used in a
     *   #GstVideoFormatUnpack and #GstVideoFormatPack function.
     */
    UNPACK,
    /**
     * The format is tiled, there is tiling information
     *   in the last plane.
     */
    TILED,
}
/**
 * Extra video frame flags
 */
enum VideoFrameFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * The video frame is interlaced. In mixed
     *           interlace-mode, this flag specifies if the frame is interlaced or
     *           progressive.
     */
    INTERLACED,
    /**
     * The video frame has the top field first
     */
    TFF,
    /**
     * The video frame has the repeat flag
     */
    RFF,
    /**
     * The video frame has one field
     */
    ONEFIELD,
    /**
     * The video contains one or
     *     more non-mono views
     */
    MULTIPLE_VIEW,
    /**
     * The video frame is the first
     *     in a set of corresponding views provided as sequential frames.
     */
    FIRST_IN_BUNDLE,
    /**
     * The video frame has the top field only. This
     *     is the same as GST_VIDEO_FRAME_FLAG_TFF | GST_VIDEO_FRAME_FLAG_ONEFIELD
     *     (Since: 1.16).
     */
    TOP_FIELD,
    /**
     * The video frame has the bottom field
     *     only. This is the same as GST_VIDEO_FRAME_FLAG_ONEFIELD
     *     (GST_VIDEO_FRAME_FLAG_TFF flag unset) (Since: 1.16).
     */
    BOTTOM_FIELD,
}
/**
 * Additional mapping flags for gst_video_frame_map().
 */
enum VideoFrameMapFlags {
    /**
     * Don't take another reference of the buffer and store it in
     *                                    the GstVideoFrame. This makes sure that the buffer stays
     *                                    writable while the frame is mapped, but requires that the
     *                                    buffer reference stays valid until the frame is unmapped again.
     */
    NO_REF,
    /**
     * Offset to define more flags
     */
    LAST,
}
/**
 * GstVideoMultiviewFlags are used to indicate extra properties of a
 * stereo/multiview stream beyond the frame layout and buffer mapping
 * that is conveyed in the #GstVideoMultiviewMode.
 */
enum VideoMultiviewFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * For stereo streams, the
     *     normal arrangement of left and right views is reversed.
     */
    RIGHT_VIEW_FIRST,
    /**
     * The left view is vertically
     *     mirrored.
     */
    LEFT_FLIPPED,
    /**
     * The left view is horizontally
     *     mirrored.
     */
    LEFT_FLOPPED,
    /**
     * The right view is
     *     vertically mirrored.
     */
    RIGHT_FLIPPED,
    /**
     * The right view is
     *     horizontally mirrored.
     */
    RIGHT_FLOPPED,
    /**
     * For frame-packed
     *     multiview modes, indicates that the individual
     *     views have been encoded with half the true width or height
     *     and should be scaled back up for display. This flag
     *     is used for overriding input layout interpretation
     *     by adjusting pixel-aspect-ratio.
     *     For side-by-side, column interleaved or checkerboard packings, the
     *     pixel width will be doubled. For row interleaved and top-bottom
     *     encodings, pixel height will be doubled.
     */
    HALF_ASPECT,
    /**
     * The video stream contains both
     *     mono and multiview portions, signalled on each buffer by the
     *     absence or presence of the `GST_VIDEO_BUFFER_FLAG_MULTIPLE_VIEW`
     *     buffer flag.
     */
    MIXED_MONO,
}
/**
 * Overlay format flags.
 */
enum VideoOverlayFormatFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * RGB are premultiplied by A/255.
     */
    PREMULTIPLIED_ALPHA,
    /**
     * a global-alpha value != 1 is set.
     */
    GLOBAL_ALPHA,
}
/**
 * The different flags that can be used when packing and unpacking.
 */
enum VideoPackFlags {
    /**
     * No flag
     */
    NONE,
    /**
     * When the source has a smaller depth
     *   than the target format, set the least significant bits of the target
     *   to 0. This is likely slightly faster but less accurate. When this flag
     *   is not specified, the most significant bits of the source are duplicated
     *   in the least significant bits of the destination.
     */
    TRUNCATE_RANGE,
    /**
     * The source is interlaced. The unpacked
     *   format will be interlaced as well with each line containing
     *   information from alternating fields. (Since: 1.2)
     */
    INTERLACED,
}
/**
 * Different resampler flags.
 */
enum VideoResamplerFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * when no taps are given, half the
     *              number of calculated taps. This can be used when making scalers
     *              for the different fields of an interlaced picture. Since: 1.10
     */
    HALF_TAPS,
}
/**
 * Different scale flags.
 */
enum VideoScalerFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * Set up a scaler for interlaced content
     */
    INTERLACED,
}
/**
 * Flags related to the time code information.
 * For drop frame, only 30000/1001 and 60000/1001 frame rates are supported.
 */
enum VideoTimeCodeFlags {
    /**
     * No flags
     */
    NONE,
    /**
     * Whether we have drop frame rate
     */
    DROP_FRAME,
    /**
     * Whether we have interlaced video
     */
    INTERLACED,
}
const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string
/**
 * A bufferpool option to enable extra padding. When a bufferpool supports this
 * option, gst_buffer_pool_config_set_video_alignment() can be called.
 * 
 * When this option is enabled on the bufferpool,
 * #GST_BUFFER_POOL_OPTION_VIDEO_META should also be enabled.
 */
const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string
/**
 * An option that can be activated on a bufferpool to request gl texture upload
 * meta on buffers from the pool.
 * 
 * When this option is enabled on the bufferpool,
 * `GST_BUFFER_POOL_OPTION_VIDEO_META` should also be enabled.
 */
const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string
/**
 * An option that can be activated on bufferpool to request video metadata
 * on buffers from the pool.
 */
const BUFFER_POOL_OPTION_VIDEO_META: string
/**
 * Name of the caps feature indicating that the stream is interlaced.
 * 
 * Currently it is only used for video with 'interlace-mode=alternate'
 * to ensure backwards compatibility for this new mode.
 * In this mode each buffer carries a single field of interlaced video.
 * `GST_VIDEO_BUFFER_FLAG_TOP_FIELD` and `GST_VIDEO_BUFFER_FLAG_BOTTOM_FIELD`
 * indicate whether the buffer carries a top or bottom field. The order of
 * buffers/fields in the stream and the timestamps on the buffers indicate the
 * temporal order of the fields.
 * Top and bottom fields are expected to alternate in this mode.
 * The frame rate in the caps still signals the frame rate, so the notional field
 * rate will be twice the frame rate from the caps
 * (see `GST_VIDEO_INFO_FIELD_RATE_N)`.
 */
const CAPS_FEATURE_FORMAT_INTERLACED: string
const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string
const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string
const CAPS_FEATURE_META_GST_VIDEO_META: string
const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string
/**
 * This metadata stays relevant as long as video colorspace is unchanged.
 */
const META_TAG_VIDEO_COLORSPACE_STR: string
/**
 * This metadata stays relevant as long as video orientation is unchanged.
 */
const META_TAG_VIDEO_ORIENTATION_STR: string
/**
 * This metadata stays relevant as long as video size is unchanged.
 */
const META_TAG_VIDEO_SIZE_STR: string
/**
 * This metadata is relevant for video streams.
 */
const META_TAG_VIDEO_STR: string
const VIDEO_COLORIMETRY_BT2020: string
const VIDEO_COLORIMETRY_BT2020_10: string
const VIDEO_COLORIMETRY_BT2100_HLG: string
const VIDEO_COLORIMETRY_BT2100_PQ: string
const VIDEO_COLORIMETRY_BT601: string
const VIDEO_COLORIMETRY_BT709: string
const VIDEO_COLORIMETRY_SMPTE240M: string
const VIDEO_COLORIMETRY_SRGB: string
const VIDEO_COMP_A: number
const VIDEO_COMP_B: number
const VIDEO_COMP_G: number
const VIDEO_COMP_INDEX: number
const VIDEO_COMP_PALETTE: number
const VIDEO_COMP_R: number
const VIDEO_COMP_U: number
const VIDEO_COMP_V: number
const VIDEO_COMP_Y: number
/**
 * #GstVideoAlphaMode, the alpha mode to use.
 * Default is #GST_VIDEO_ALPHA_MODE_COPY.
 */
const VIDEO_CONVERTER_OPT_ALPHA_MODE: string
/**
 * #G_TYPE_DOUBLE, the alpha color value to use.
 * Default to 1.0
 */
const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string
/**
 * #G_TYPE_BOOLEAN, whether gst_video_converter_frame() will return immediately
 * without waiting for the conversion to complete.  A subsequent
 * gst_video_converter_frame_finish() must be performed to ensure completion of the
 * conversion before subsequent use.  Default %FALSE
 */
const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string
/**
 * #G_TYPE_UINT, the border color to use if #GST_VIDEO_CONVERTER_OPT_FILL_BORDER
 * is set to %TRUE. The color is in ARGB format.
 * Default 0xff000000
 */
const VIDEO_CONVERTER_OPT_BORDER_ARGB: string
/**
 * #GstVideoChromaMode, set the chroma resample mode subsampled
 * formats. Default is #GST_VIDEO_CHROMA_MODE_FULL.
 */
const VIDEO_CONVERTER_OPT_CHROMA_MODE: string
/**
 * #GstVideoChromaMethod, The resampler method to use for
 * chroma resampling. Other options for the resampler can be used, see
 * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_LINEAR
 */
const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string
/**
 * #G_TYPE_INT, height in the destination frame, default destination height
 */
const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string
/**
 * #G_TYPE_INT, width in the destination frame, default destination width
 */
const VIDEO_CONVERTER_OPT_DEST_WIDTH: string
/**
 * #G_TYPE_INT, x position in the destination frame, default 0
 */
const VIDEO_CONVERTER_OPT_DEST_X: string
/**
 * #G_TYPE_INT, y position in the destination frame, default 0
 */
const VIDEO_CONVERTER_OPT_DEST_Y: string
/**
 * #GstVideoDitherMethod, The dither method to use when
 * changing bit depth.
 * Default is #GST_VIDEO_DITHER_BAYER.
 */
const VIDEO_CONVERTER_OPT_DITHER_METHOD: string
/**
 * #G_TYPE_UINT, The quantization amount to dither to. Components will be
 * quantized to multiples of this value.
 * Default is 1
 */
const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string
/**
 * #G_TYPE_BOOLEAN, if the destination rectangle does not fill the complete
 * destination image, render a border with
 * #GST_VIDEO_CONVERTER_OPT_BORDER_ARGB. Otherwise the unusded pixels in the
 * destination are untouched. Default %TRUE.
 */
const VIDEO_CONVERTER_OPT_FILL_BORDER: string
/**
 * #GstVideoGammaMode, set the gamma mode.
 * Default is #GST_VIDEO_GAMMA_MODE_NONE.
 */
const VIDEO_CONVERTER_OPT_GAMMA_MODE: string
/**
 * #GstVideoMatrixMode, set the color matrix conversion mode for
 * converting between Y'PbPr and non-linear RGB (R'G'B').
 * Default is #GST_VIDEO_MATRIX_MODE_FULL.
 */
const VIDEO_CONVERTER_OPT_MATRIX_MODE: string
/**
 * #GstVideoPrimariesMode, set the primaries conversion mode.
 * Default is #GST_VIDEO_PRIMARIES_MODE_NONE.
 */
const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string
/**
 * #GstVideoResamplerMethod, The resampler method to use for
 * resampling. Other options for the resampler can be used, see
 * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_CUBIC
 */
const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string
/**
 * #G_TYPE_UINT, The number of taps for the resampler.
 * Default is 0: let the resampler choose a good value.
 */
const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string
/**
 * #G_TYPE_INT, source height to convert, default source height
 */
const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string
/**
 * #G_TYPE_INT, source width to convert, default source width
 */
const VIDEO_CONVERTER_OPT_SRC_WIDTH: string
/**
 * #G_TYPE_INT, source x position to start conversion, default 0
 */
const VIDEO_CONVERTER_OPT_SRC_X: string
/**
 * #G_TYPE_INT, source y position to start conversion, default 0
 */
const VIDEO_CONVERTER_OPT_SRC_Y: string
/**
 * #G_TYPE_UINT, maximum number of threads to use. Default 1, 0 for the number
 * of cores.
 */
const VIDEO_CONVERTER_OPT_THREADS: string
/**
 * Default maximum number of errors tolerated before signaling error.
 */
const VIDEO_DECODER_MAX_ERRORS: number
/**
 * The name of the templates for the sink pad.
 */
const VIDEO_DECODER_SINK_NAME: string
/**
 * The name of the templates for the source pad.
 */
const VIDEO_DECODER_SRC_NAME: string
/**
 * The name of the templates for the sink pad.
 */
const VIDEO_ENCODER_SINK_NAME: string
/**
 * The name of the templates for the source pad.
 */
const VIDEO_ENCODER_SRC_NAME: string
/**
 * List of all video formats, for use in template caps strings.
 * 
 * Formats are sorted by decreasing "quality", using these criteria by priority:
 *   - number of components
 *   - depth
 *   - subsampling factor of the width
 *   - subsampling factor of the height
 *   - number of planes
 *   - native endianness preferred
 *   - pixel stride
 *   - poffset
 *   - prefer non-complex formats
 *   - prefer YUV formats over RGB ones
 *   - prefer I420 over YV12
 *   - format name
 */
const VIDEO_FORMATS_ALL: string
const VIDEO_FPS_RANGE: string
const VIDEO_MAX_COMPONENTS: number
const VIDEO_MAX_PLANES: number
/**
 * G_TYPE_DOUBLE, B parameter of the cubic filter. The B
 * parameter controls the bluriness. Values between 0.0 and
 * 2.0 are accepted. 1/3 is the default.
 * 
 * Below are some values of popular filters:
 *                    B       C
 * Hermite           0.0     0.0
 * Spline            1.0     0.0
 * Catmull-Rom       0.0     1/2
 * Mitchell          1/3     1/3
 * Robidoux          0.3782  0.3109
 * Robidoux
 *  Sharp            0.2620  0.3690
 * Robidoux
 *  Soft             0.6796  0.1602
 */
const VIDEO_RESAMPLER_OPT_CUBIC_B: string
/**
 * G_TYPE_DOUBLE, C parameter of the cubic filter. The C
 * parameter controls the Keys alpha value. Values between 0.0 and
 * 2.0 are accepted. 1/3 is the default.
 * 
 * See #GST_VIDEO_RESAMPLER_OPT_CUBIC_B for some more common values
 */
const VIDEO_RESAMPLER_OPT_CUBIC_C: string
/**
 * G_TYPE_DOUBLE, specifies the size of filter envelope for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 1.0 and 5.0. 2.0 is the default.
 */
const VIDEO_RESAMPLER_OPT_ENVELOPE: string
/**
 * G_TYPE_INT, limits the maximum number of taps to use.
 * 16 is the default.
 */
const VIDEO_RESAMPLER_OPT_MAX_TAPS: string
/**
 * G_TYPE_DOUBLE, specifies sharpening of the filter for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 0.0 and 1.0. 0.0 is the default.
 */
const VIDEO_RESAMPLER_OPT_SHARPEN: string
/**
 * G_TYPE_DOUBLE, specifies sharpness of the filter for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 0.5 and 1.5. 1.0 is the default.
 */
const VIDEO_RESAMPLER_OPT_SHARPNESS: string
/**
 * #GstVideoDitherMethod, The dither method to use for propagating
 * quatization errors.
 */
const VIDEO_SCALER_OPT_DITHER_METHOD: string
const VIDEO_SIZE_RANGE: string
const VIDEO_TILE_TYPE_MASK: number
const VIDEO_TILE_TYPE_SHIFT: number
const VIDEO_TILE_X_TILES_MASK: number
const VIDEO_TILE_Y_TILES_SHIFT: number
function bufferAddVideoAfdMeta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
function bufferAddVideoAffineTransformationMeta(buffer: Gst.Buffer): VideoAffineTransformationMeta
function bufferAddVideoBarMeta(buffer: Gst.Buffer, field: number, isLetterbox: boolean, barData1: number, barData2: number): VideoBarMeta
function bufferAddVideoCaptionMeta(buffer: Gst.Buffer, captionType: VideoCaptionType, data: Uint8Array): VideoCaptionMeta
function bufferAddVideoCodecAlphaMeta(buffer: Gst.Buffer, alphaBuffer: Gst.Buffer): VideoCodecAlphaMeta
function bufferAddVideoGlTextureUploadMeta(buffer: Gst.Buffer, textureOrientation: VideoGLTextureOrientation, nTextures: number, textureType: VideoGLTextureType, upload: VideoGLTextureUpload, userDataCopy: GObject.BoxedCopyFunc, userDataFree: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
function bufferAddVideoMeta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
function bufferAddVideoMetaFull(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, nPlanes: number, offset: number[], stride: number[]): VideoMeta
function bufferAddVideoOverlayCompositionMeta(buf: Gst.Buffer, comp?: VideoOverlayComposition | null): VideoOverlayCompositionMeta
function bufferAddVideoRegionOfInterestMeta(buffer: Gst.Buffer, roiType: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function bufferAddVideoRegionOfInterestMetaId(buffer: Gst.Buffer, roiType: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
function bufferAddVideoTimeCodeMeta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
function bufferAddVideoTimeCodeMetaFull(buffer: Gst.Buffer, fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCodeMeta
function bufferGetVideoMeta(buffer: Gst.Buffer): VideoMeta
function bufferGetVideoMetaId(buffer: Gst.Buffer, id: number): VideoMeta
function bufferGetVideoRegionOfInterestMetaId(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta
function bufferPoolConfigGetVideoAlignment(config: Gst.Structure, align: VideoAlignment): boolean
function bufferPoolConfigSetVideoAlignment(config: Gst.Structure, align: VideoAlignment): void
function isVideoOverlayPrepareWindowHandleMessage(msg: Gst.Message): boolean
function navigationEventGetType(event: Gst.Event): NavigationEventType
function navigationEventNewCommand(command: NavigationCommand): Gst.Event
function navigationEventNewKeyPress(key: string): Gst.Event
function navigationEventNewKeyRelease(key: string): Gst.Event
function navigationEventNewMouseButtonPress(button: number, x: number, y: number): Gst.Event
function navigationEventNewMouseButtonRelease(button: number, x: number, y: number): Gst.Event
function navigationEventNewMouseMove(x: number, y: number): Gst.Event
function navigationEventNewMouseScroll(x: number, y: number, deltaX: number, deltaY: number): Gst.Event
function navigationEventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
function navigationEventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
function navigationEventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
function navigationEventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
function navigationEventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
function navigationMessageGetType(message: Gst.Message): NavigationMessageType
function navigationMessageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
function navigationMessageNewCommandsChanged(src: Gst.Object): Gst.Message
function navigationMessageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
function navigationMessageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
function navigationMessageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
function navigationMessageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
function navigationMessageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
function navigationQueryGetType(query: Gst.Query): NavigationQueryType
function navigationQueryNewAngles(): Gst.Query
function navigationQueryNewCommands(): Gst.Query
function navigationQueryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
function navigationQueryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
function navigationQueryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
function navigationQuerySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
function videoAfdMetaApiGetType(): GObject.Type
function videoAfdMetaGetInfo(): Gst.MetaInfo
function videoAffineTransformationMetaApiGetType(): GObject.Type
function videoAffineTransformationMetaGetInfo(): Gst.MetaInfo
function videoBarMetaApiGetType(): GObject.Type
function videoBarMetaGetInfo(): Gst.MetaInfo
function videoBlend(dest: VideoFrame, src: VideoFrame, x: number, y: number, globalAlpha: number): boolean
function videoBlendScaleLinearRGBA(src: VideoInfo, srcBuffer: Gst.Buffer, destHeight: number, destWidth: number): [ /* dest */ VideoInfo, /* destBuffer */ Gst.Buffer ]
function videoCalculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
function videoCaptionMetaApiGetType(): GObject.Type
function videoCaptionMetaGetInfo(): Gst.MetaInfo
function videoCaptionTypeFromCaps(caps: Gst.Caps): VideoCaptionType
function videoCaptionTypeToCaps(type: VideoCaptionType): Gst.Caps
function videoCenterRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
function videoChromaFromString(s: string): VideoChromaSite
function videoChromaResample(resample: VideoChromaResample, lines: object | null, width: number): void
function videoChromaSiteFromString(s: string): VideoChromaSite
function videoChromaSiteToString(site: VideoChromaSite): string | null
function videoChromaToString(site: VideoChromaSite): string
function videoCodecAlphaMetaApiGetType(): GObject.Type
function videoCodecAlphaMetaGetInfo(): Gst.MetaInfo
function videoColorMatrixFromIso(value: number): VideoColorMatrix
function videoColorMatrixGetKrKb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* kr */ number, /* kb */ number ]
function videoColorMatrixToIso(matrix: VideoColorMatrix): number
function videoColorPrimariesFromIso(value: number): VideoColorPrimaries
function videoColorPrimariesGetInfo(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
function videoColorPrimariesToIso(primaries: VideoColorPrimaries): number
function videoColorRangeOffsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
function videoColorTransferDecode(func: VideoTransferFunction, val: number): number
function videoColorTransferEncode(func: VideoTransferFunction, val: number): number
function videoConvertSample(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample
function videoConvertSampleAsync(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
function videoCropMetaApiGetType(): GObject.Type
function videoCropMetaGetInfo(): Gst.MetaInfo
function videoEventIsForceKeyUnit(event: Gst.Event): boolean
function videoEventNewDownstreamForceKeyUnit(timestamp: Gst.ClockTime, streamTime: Gst.ClockTime, runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
function videoEventNewStillFrame(inStill: boolean): Gst.Event
function videoEventNewUpstreamForceKeyUnit(runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
function videoEventParseDownstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* streamTime */ Gst.ClockTime, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
function videoEventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
function videoEventParseUpstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
function videoFieldOrderFromString(order: string): VideoFieldOrder
function videoFieldOrderToString(order: VideoFieldOrder): string
function videoFormatFromFourcc(fourcc: number): VideoFormat
function videoFormatFromMasks(depth: number, bpp: number, endianness: number, redMask: number, greenMask: number, blueMask: number, alphaMask: number): VideoFormat
function videoFormatFromString(format: string): VideoFormat
function videoFormatGetInfo(format: VideoFormat): VideoFormatInfo
function videoFormatGetPalette(format: VideoFormat): [ /* returnType */ object | null, /* size */ number ]
function videoFormatToFourcc(format: VideoFormat): number
function videoFormatToString(format: VideoFormat): string
function videoFormatsRaw(): VideoFormat[]
function videoFrameMap(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function videoFrameMapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
function videoGlTextureUploadMetaApiGetType(): GObject.Type
function videoGlTextureUploadMetaGetInfo(): Gst.MetaInfo
function videoGuessFramerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* destN */ number | null, /* destD */ number | null ]
function videoInfoFromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
function videoInfoInit(): /* info */ VideoInfo
function videoInterlaceModeFromString(mode: string): VideoInterlaceMode
function videoInterlaceModeToString(mode: VideoInterlaceMode): string
function videoMakeRawCaps(formats: VideoFormat[] | null): Gst.Caps
function videoMakeRawCapsWithFeatures(formats: VideoFormat[] | null, features?: Gst.CapsFeatures | null): Gst.Caps
function videoMasteringDisplayInfoFromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
function videoMetaApiGetType(): GObject.Type
function videoMetaGetInfo(): Gst.MetaInfo
function videoMetaTransformScaleGetQuark(): GLib.Quark
function videoMultiviewGetDoubledHeightModes(): any
function videoMultiviewGetDoubledSizeModes(): any
function videoMultiviewGetDoubledWidthModes(): any
function videoMultiviewGetMonoModes(): any
function videoMultiviewGetUnpackedModes(): any
function videoMultiviewGuessHalfAspect(mvMode: VideoMultiviewMode, width: number, height: number, parN: number, parD: number): boolean
function videoMultiviewModeFromCapsString(capsMviewMode: string): VideoMultiviewMode
function videoMultiviewModeToCapsString(mviewMode: VideoMultiviewMode): string
function videoMultiviewVideoInfoChangeMode(info: VideoInfo, outMviewMode: VideoMultiviewMode, outMviewFlags: VideoMultiviewFlags): void
function videoOrientationFromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
function videoOverlayCompositionMetaApiGetType(): GObject.Type
function videoOverlayCompositionMetaGetInfo(): Gst.MetaInfo
function videoOverlayInstallProperties(oclass: GObject.ObjectClass, lastPropId: number): void
function videoOverlaySetProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
function videoRegionOfInterestMetaApiGetType(): GObject.Type
function videoRegionOfInterestMetaGetInfo(): Gst.MetaInfo
function videoTileGetIndex(mode: VideoTileMode, x: number, y: number, xTiles: number, yTiles: number): number
function videoTimeCodeMetaApiGetType(): GObject.Type
function videoTimeCodeMetaGetInfo(): Gst.MetaInfo
function videoTransferFunctionDecode(func: VideoTransferFunction, val: number): number
function videoTransferFunctionEncode(func: VideoTransferFunction, val: number): number
function videoTransferFunctionFromIso(value: number): VideoTransferFunction
function videoTransferFunctionIsEquivalent(fromFunc: VideoTransferFunction, fromBpp: number, toFunc: VideoTransferFunction, toBpp: number): boolean
function videoTransferFunctionToIso(func: VideoTransferFunction): number
interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
interface VideoConvertSampleCallback {
    (sample: Gst.Sample, error: GLib.Error): void
}
/**
 * Packs `width` pixels from `src` to the given planes and strides in the
 * format `info`. The pixels from source have each component interleaved
 * and will be packed into the planes in `data`.
 * 
 * This function operates on pack_lines lines, meaning that `src` should
 * contain at least pack_lines lines with a stride of `sstride` and `y`
 * should be a multiple of pack_lines.
 * 
 * Subsampled formats will use the horizontally and vertically cosited
 * component from the source. Subsampling should be performed before
 * packing.
 * 
 * Because this function does not have a x coordinate, it is not possible to
 * pack pixels starting from an unaligned position. For tiled images this
 * means that packing should start from a tile coordinate. For subsampled
 * formats this means that a complete pixel needs to be packed.
 */
interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: object | null, sstride: number, data: object | null, stride: number, chromaSite: VideoChromaSite, y: number, width: number): void
}
/**
 * Unpacks `width` pixels from the given planes and strides containing data of
 * format `info`. The pixels will be unpacked into `dest` with each component
 * interleaved as per `info'`s unpack_format, which will usually be one of
 * #GST_VIDEO_FORMAT_ARGB, #GST_VIDEO_FORMAT_AYUV, #GST_VIDEO_FORMAT_ARGB64 or
 * #GST_VIDEO_FORMAT_AYUV64 depending on the format to unpack.
 * `dest` should at least be big enough to hold `width` * bytes_per_pixel bytes
 * where bytes_per_pixel relates to the unpack format and will usually be
 * either 4 or 8 depending on the unpack format. bytes_per_pixel will be
 * the same as the pixel stride for plane 0 for the above formats.
 * 
 * For subsampled formats, the components will be duplicated in the destination
 * array. Reconstruction of the missing components can be performed in a
 * separate step after unpacking.
 */
interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: object | null, data: object | null, stride: number, x: number, y: number, width: number): void
}
interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, textureId: number): boolean
}
class ColorBalance {
    /* Methods of GstVideo-1.0.GstVideo.ColorBalance */
    /**
     * Get the #GstColorBalanceType of this implementation.
     */
    getBalanceType(): ColorBalanceType
    /**
     * Retrieve the current value of the indicated channel, between min_value
     * and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     */
    getValue(channel: ColorBalanceChannel): number
    /**
     * Retrieve a list of the available channels.
     */
    listChannels(): ColorBalanceChannel[]
    /**
     * Sets the current value of the channel to the passed value, which must
     * be between min_value and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     */
    setValue(channel: ColorBalanceChannel, value: number): void
    /**
     * A helper function called by implementations of the GstColorBalance
     * interface. It fires the #GstColorBalance::value-changed signal on the
     * instance, and the #GstColorBalanceChannel::value-changed signal on the
     * channel object.
     */
    valueChanged(channel: ColorBalanceChannel, value: number): void
    /* Signals of GstVideo-1.0.GstVideo.ColorBalance */
    /**
     * Fired when the value of the indicated channel has changed.
     */
    connect(sigName: "value-changed", callback: ((channel: ColorBalanceChannel, value: number) => void)): number
    on(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (channel: ColorBalanceChannel, value: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", channel: ColorBalanceChannel, value: number): void
    static name: string
}
class Navigation {
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    /**
     * Sends the indicated command to the navigation interface.
     */
    sendCommand(command: NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    sendKeyEvent(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     */
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    /**
     * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     */
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
     * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
     */
    static eventGetType(event: Gst.Event): NavigationEventType
    /**
     * Create a new navigation event given navigation command..
     */
    static eventNewCommand(command: NavigationCommand): Gst.Event
    /**
     * Create a new navigation event for the given key press.
     */
    static eventNewKeyPress(key: string): Gst.Event
    /**
     * Create a new navigation event for the given key release.
     */
    static eventNewKeyRelease(key: string): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button press.
     */
    static eventNewMouseButtonPress(button: number, x: number, y: number): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button release.
     */
    static eventNewMouseButtonRelease(button: number, x: number, y: number): Gst.Event
    /**
     * Create a new navigation event for the new mouse location.
     */
    static eventNewMouseMove(x: number, y: number): Gst.Event
    /**
     * Create a new navigation event for the mouse scroll.
     */
    static eventNewMouseScroll(x: number, y: number, deltaX: number, deltaY: number): Gst.Event
    /**
     * Inspect a #GstNavigation command event and retrieve the enum value of the
     * associated command.
     */
    static eventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand | null ]
    static eventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    /**
     * Retrieve the details of either a #GstNavigation mouse button press event or
     * a mouse button release event. Determine which type the event is using
     * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
     */
    static eventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse movement event and extract the coordinates
     * of the event.
     */
    static eventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse scroll event and extract the coordinates
     * of the event.
     */
    static eventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
    /**
     * Check a bus message to see if it is a #GstNavigation event, and return
     * the #GstNavigationMessageType identifying the type of the message if so.
     */
    static messageGetType(message: Gst.Message): NavigationMessageType
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
     * that the current angle, or current number of angles available in a
     * multiangle video has changed.
     */
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
     */
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_EVENT.
     */
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
     */
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    /**
     * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
     * and extract the `cur_angle` and `n_angles` parameters.
     */
    static messageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
     * and extract contained #GstEvent. The caller must unref the `event` when done
     * with it.
     */
    static messageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
     * and extract the active/inactive flag. If the mouse over event is marked
     * active, it indicates that the mouse is over a clickable area.
     */
    static messageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    /**
     * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
     * it if it is a #GstNavigation query.
     */
    static queryGetType(query: Gst.Query): NavigationQueryType
    /**
     * Create a new #GstNavigation angles query. When executed, it will
     * query the pipeline for the set of currently available angles, which may be
     * greater than one in a multiangle video.
     */
    static queryNewAngles(): Gst.Query
    /**
     * Create a new #GstNavigation commands query. When executed, it will
     * query the pipeline for the set of currently available commands.
     */
    static queryNewCommands(): Gst.Query
    /**
     * Parse the current angle number in the #GstNavigation angles `query` into the
     * #guint pointed to by the `cur_angle` variable, and the number of available
     * angles into the #guint pointed to by the `n_angles` variable.
     */
    static queryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    /**
     * Parse the number of commands in the #GstNavigation commands `query`.
     */
    static queryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
    /**
     * Parse the #GstNavigation command query and retrieve the `nth` command from
     * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
     * set to #GST_NAVIGATION_COMMAND_INVALID.
     */
    static queryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand | null ]
    /**
     * Set the #GstNavigation angles query result field in `query`.
     */
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    /**
     * Set the #GstNavigation command query result fields in `query`. The number
     * of commands passed must be equal to `n_commands`.
     */
    static querySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}
class VideoDirection {
    /* Properties of GstVideo-1.0.GstVideo.VideoDirection */
    videoDirection: VideoOrientationMethod
    static name: string
}
class VideoOrientation {
    /* Methods of GstVideo-1.0.GstVideo.VideoOrientation */
    /**
     * Get the horizontal centering offset from the given object.
     */
    getHcenter(): [ /* returnType */ boolean, /* center */ number ]
    /**
     * Get the horizontal flipping state (%TRUE for flipped) from the given object.
     */
    getHflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    /**
     * Get the vertical centering offset from the given object.
     */
    getVcenter(): [ /* returnType */ boolean, /* center */ number ]
    /**
     * Get the vertical flipping state (%TRUE for flipped) from the given object.
     */
    getVflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    /**
     * Set the horizontal centering offset for the given object.
     */
    setHcenter(center: number): boolean
    /**
     * Set the horizontal flipping state (%TRUE for flipped) for the given object.
     */
    setHflip(flip: boolean): boolean
    /**
     * Set the vertical centering offset for the given object.
     */
    setVcenter(center: number): boolean
    /**
     * Set the vertical flipping state (%TRUE for flipped) for the given object.
     */
    setVflip(flip: boolean): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses the "image-orientation" tag and transforms it into the
     * #GstVideoOrientationMethod enum.
     */
    static fromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
}
class VideoOverlay {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlay */
    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     */
    expose(): void
    /**
     * This will post a "have-window-handle" element message on the bus.
     * 
     * This function should only be used by video overlay plugin developers.
     */
    gotWindowHandle(handle: number): void
    /**
     * Tell an overlay that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window system,
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the #GstVideoOverlay.
     */
    handleEvents(handleEvents: boolean): void
    /**
     * This will post a "prepare-window-handle" element message on the bus
     * to give applications an opportunity to call
     * gst_video_overlay_set_window_handle() before a plugin creates its own
     * window.
     * 
     * This function should only be used by video overlay plugin developers.
     */
    prepareWindowHandle(): void
    /**
     * Configure a subregion as a video target within the window set by
     * gst_video_overlay_set_window_handle(). If this is not used or not supported
     * the video will fill the area of the window set as the overlay to 100%.
     * By specifying the rectangle, the video can be overlayed to a specific region
     * of that window only. After setting the new rectangle one should call
     * gst_video_overlay_expose() to force a redraw. To unset the region pass -1 for
     * the `width` and `height` parameters.
     * 
     * This method is needed for non fullscreen video overlay in UI toolkits that
     * do not support subwindows.
     */
    setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    /**
     * This will call the video overlay's set_window_handle method. You
     * should use this method to tell to an overlay to display video output to a
     * specific window (e.g. an XWindow on X11). Passing 0 as the  `handle` will
     * tell the overlay to stop using that window and create an internal one.
     */
    setWindowHandle(handle: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * This helper shall be used by classes implementing the #GstVideoOverlay
     * interface that want the render rectangle to be controllable using
     * properties. This helper will install "render-rectangle" property into the
     * class.
     */
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    /**
     * This helper shall be used by classes implementing the #GstVideoOverlay
     * interface that want the render rectangle to be controllable using
     * properties. This helper will parse and set the render rectangle calling
     * gst_video_overlay_set_render_rectangle().
     */
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
}
interface ColorBalanceChannel_ConstructProps extends GObject.Object_ConstructProps {
}
class ColorBalanceChannel {
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
    /* Signals of GstVideo-1.0.GstVideo.ColorBalanceChannel */
    /**
     * Fired when the value of the indicated channel has changed.
     */
    connect(sigName: "value-changed", callback: ((value: number) => void)): number
    on(sigName: "value-changed", callback: (value: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (value: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (value: number) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ColorBalanceChannel_ConstructProps)
    _init (config?: ColorBalanceChannel_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregator_ConstructProps extends GstBase.Aggregator_ConstructProps {
}
class VideoAggregator {
    /* Properties of GstBase-1.0.GstBase.Aggregator */
    /**
     * Enables the emission of signals such as #GstAggregator::samples-selected
     */
    emitSignals: boolean
    latency: number
    /**
     * Force minimum upstream latency (in nanoseconds). When sources with a
     * higher latency are expected to be plugged in dynamically after the
     * aggregator has started playing, this allows overriding the minimum
     * latency reported by the initial source(s). This is only taken into
     * account when larger than the actually reported minimum latency.
     */
    minUpstreamLatency: number
    startTime: number
    startTimeSelection: GstBase.AggregatorStartTimeSelection
    /* Fields of GstBase-1.0.GstBase.Aggregator */
    readonly parent: Gst.Element
    /**
     * the aggregator's source pad
     */
    readonly srcpad: Gst.Pad
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregator */
    /**
     * The returned #GstTaskPool is used internally for performing parallel
     * video format conversions/scaling/etc during the
     * #GstVideoAggregatorPadClass::prepare_frame_start() process.
     * Subclasses can add their own operation to perform using the returned
     * #GstTaskPool during #GstVideoAggregatorClass::aggregate_frames().
     */
    getExecutionTaskPool(): Gst.TaskPool
    /* Methods of GstBase-1.0.GstBase.Aggregator */
    /**
     * This method will push the provided output buffer downstream. If needed,
     * mandatory events such as stream-start, caps, and segment events will be
     * sent before pushing the buffer.
     */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * This method will push the provided output buffer list downstream. If needed,
     * mandatory events such as stream-start, caps, and segment events will be
     * sent before pushing the buffer.
     */
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    /**
     * Lets #GstAggregator sub-classes get the memory `allocator`
     * acquired by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    getIgnoreInactivePads(): boolean
    /**
     * Retrieves the latency values reported by `self` in response to the latency
     * query, or %GST_CLOCK_TIME_NONE if there is not live source connected and the element
     * will not wait for the clock.
     * 
     * Typically only called by subclasses.
     */
    getLatency(): Gst.ClockTime
    /**
     * Negotiates src pad caps with downstream elements.
     * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
     * if #GstAggregatorClass::negotiate fails.
     */
    negotiate(): boolean
    /**
     * Use this function to determine what input buffers will be aggregated
     * to produce the next output buffer. This should only be called from
     * a #GstAggregator::samples-selected handler, and can be used to precisely
     * control aggregating parameters for a given set of input samples.
     */
    peekNextSample(pad: GstBase.AggregatorPad): Gst.Sample | null
    /**
     * Subclasses should call this when they have prepared the
     * buffers they will aggregate for each of their sink pads, but
     * before using any of the properties of the pads that govern
     * *how* aggregation should be performed, for example z-index
     * for video aggregators.
     * 
     * If gst_aggregator_update_segment() is used by the subclass,
     * it MUST be called before gst_aggregator_selected_samples().
     * 
     * This function MUST only be called from the #GstAggregatorClass::aggregate()
     * function.
     */
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info?: Gst.Structure | null): void
    /**
     * Subclasses should call this when they don't want to time out
     * waiting for a pad that hasn't yet received any buffers in live
     * mode.
     * 
     * #GstAggregator will still wait once on each newly-added pad, making
     * sure upstream has had a fair chance to start up.
     */
    setIgnoreInactivePads(ignore: boolean): void
    /**
     * Lets #GstAggregator sub-classes tell the baseclass what their internal
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets the caps to be used on the src pad.
     */
    setSrcCaps(caps: Gst.Caps): void
    /**
     * This is a simple #GstAggregatorClass::get_next_time implementation that
     * just looks at the #GstSegment on the srcpad of the aggregator and bases
     * the next time on the running time there.
     * 
     * This is the desired behaviour in most cases where you have a live source
     * and you have a dead line based aggregator subclass.
     */
    simpleGetNextTime(): Gst.ClockTime
    /**
     * Subclasses should use this to update the segment on their
     * source pad, instead of directly pushing new segment events
     * downstream.
     * 
     * Subclasses MUST call this before gst_aggregator_selected_samples(),
     * if it is used at all.
     */
    updateSegment(segment: Gst.Segment): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of GstBase-1.0.GstBase.Aggregator */
    /**
     * Signals that the #GstAggregator subclass has selected the next set
     * of input samples it will aggregate. Handlers may call
     * gst_aggregator_peek_next_sample() at that point.
     */
    connect(sigName: "samples-selected", callback: ((segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void)): number
    on(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: (segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null) => void): NodeJS.EventEmitter
    emit(sigName: "samples-selected", segment: Gst.Segment, pts: number, dts: number, duration: number, info?: Gst.Structure | null): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-upstream-latency", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time-selection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregator_ConstructProps)
    _init (config?: VideoAggregator_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorConvertPad_ConstructProps extends VideoAggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig?: Gst.Structure
}
class VideoAggregatorConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Enables the emission of signals such as #GstAggregatorPad::buffer-consumed
     */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    /**
     * The offset that will be applied to the running time of the pad.
     */
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    readonly parent: GstBase.AggregatorPad
    /**
     * The #GstVideoInfo currently set on the pad
     */
    readonly info: VideoInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * last segment received.
     */
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    /**
     * private data owned by the parent element
     */
    readonly elementPrivate: object
    /**
     * padtemplate for this pad
     */
    readonly padtemplate: Gst.PadTemplate
    /**
     * the direction of the pad, cannot change after creating
     *             the pad.
     */
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    /**
     * Requests the pad to check and update the converter before the next usage to
     * update for any changes that have happened.
     */
    updateConversionInfo(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    /**
     * Returns the currently queued buffer that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getCurrentBuffer(): Gst.Buffer
    /**
     * Returns the currently prepared video frame that has to be aggregated into
     * the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getPreparedFrame(): VideoFrame
    /**
     * Checks if the pad currently has a buffer queued that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     */
    hasCurrentBuffer(): boolean
    /**
     * Allows selecting that this pad requires an output format with alpha
     */
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Drop the buffer currently queued in `pad`.
     */
    dropBuffer(): boolean
    /**
     * This checks if a pad has a buffer available that will be returned by
     * a call to gst_aggregator_pad_peek_buffer() or
     * gst_aggregator_pad_pop_buffer().
     */
    hasBuffer(): boolean
    isEos(): boolean
    /**
     * It is only valid to call this method from #GstAggregatorClass::aggregate()
     */
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    /**
     * Steal the ref to the buffer currently queued in `pad`.
     */
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    /**
     * Activates or deactivates the given pad in `mode` via dispatching to the
     * pad's activatemodefunc. For use from within pad activation functions only.
     * 
     * If you don't know what this is, you probably don't want to call it.
     */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    /**
     * Be notified of different states of pads. The provided callback is called for
     * every state that matches `mask`.
     * 
     * Probes are called in groups: First GST_PAD_PROBE_TYPE_BLOCK probes are
     * called, then others, then finally GST_PAD_PROBE_TYPE_IDLE. The only
     * exception here are GST_PAD_PROBE_TYPE_IDLE probes that are called
     * immediately if the pad is already idle while calling gst_pad_add_probe().
     * In each of the groups, probes are called in the order in which they were
     * added.
     */
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    /**
     * Checks if the source pad and the sink pad are compatible so they can be
     * linked.
     */
    canLink(sinkpad: Gst.Pad): boolean
    /**
     * Chain a buffer to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If the buffer type is not acceptable for `pad` (as negotiated with a
     * preceding GST_EVENT_CAPS event), this function returns
     * #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chain function installed on `pad` (see
     * gst_pad_set_chain_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chain function.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Chain a bufferlist to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If `pad` was not negotiated properly with a CAPS event, this function
     * returns #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chainlist function installed on `pad` (see
     * gst_pad_set_chain_list_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chainlist function.
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     * 
     * MT safe.
     */
    chainList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Check and clear the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    checkReconfigure(): boolean
    /**
     * Creates a stream-id for the source #GstPad `pad` by combining the
     * upstream information with the optional `stream_id` of the stream
     * of `pad`. `pad` must have a parent #GstElement and which must have zero
     * or one sinkpad. `stream_id` can only be %NULL if the parent element
     * of `pad` has only a single source pad.
     * 
     * This function generates an unique stream-id by getting the upstream
     * stream-start event stream ID and appending `stream_id` to it. If the
     * element has no sinkpad it will generate an upstream stream-id by
     * doing an URI query on the element and in the worst case just uses
     * a random number. Source elements that don't implement the URI
     * handler interface should ideally generate a unique, deterministic
     * stream-id manually instead.
     * 
     * Since stream IDs are sorted alphabetically, any numbers in the
     * stream ID should be printed with a fixed number of characters,
     * preceded by 0's, such as by using the format \%03u instead of \%u.
     */
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    /**
     * Invokes the default event handler for the given pad.
     * 
     * The EOS event will pause the task associated with `pad` before it is forwarded
     * to all internally linked pads,
     * 
     * The event is sent to all pads internally linked to `pad`. This function
     * takes ownership of `event`.
     */
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    /**
     * Calls `forward` for all internally linked pads of `pad`. This function deals with
     * dynamically changing internal pads and will make sure that the `forward`
     * function is only called once for each pad.
     * 
     * When `forward` returns %TRUE, no further pads will be processed.
     */
    forward(forward: Gst.PadForwardFunction): boolean
    /**
     * Gets the capabilities of the allowed media types that can flow through
     * `pad` and its peer.
     * 
     * The allowed capabilities is calculated as the intersection of the results of
     * calling gst_pad_query_caps() on `pad` and its peer. The caller owns a reference
     * on the resulting caps.
     */
    getAllowedCaps(): Gst.Caps | null
    /**
     * Gets the capabilities currently configured on `pad` with the last
     * #GST_EVENT_CAPS event.
     */
    getCurrentCaps(): Gst.Caps | null
    /**
     * Gets the direction of the pad. The direction of the pad is
     * decided at construction time so this function does not take
     * the LOCK.
     */
    getDirection(): Gst.PadDirection
    /**
     * Gets the private data of a pad.
     * No locking is performed in this function.
     */
    getElementPrivate(): object | null
    /**
     * Gets the #GstFlowReturn return from the last data passed by this pad.
     */
    getLastFlowReturn(): Gst.FlowReturn
    /**
     * Get the offset applied to the running time of `pad`. `pad` has to be a source
     * pad.
     */
    getOffset(): number
    /**
     * Gets the template for `pad`.
     */
    getPadTemplate(): Gst.PadTemplate | null
    /**
     * Gets the capabilities for `pad'`s template.
     */
    getPadTemplateCaps(): Gst.Caps
    /**
     * Gets the parent of `pad,` cast to a #GstElement. If a `pad` has no parent or
     * its parent is not an element, return %NULL.
     */
    getParentElement(): Gst.Element | null
    /**
     * Gets the peer of `pad`. This function refs the peer pad so
     * you need to unref it after use.
     */
    getPeer(): Gst.Pad | null
    /**
     * When `pad` is flushing this function returns #GST_FLOW_FLUSHING
     * immediately and `buffer` is %NULL.
     * 
     * Calls the getrange function of `pad,` see #GstPadGetRangeFunction for a
     * description of a getrange function. If `pad` has no getrange function
     * installed (see gst_pad_set_getrange_function()) this function returns
     * #GST_FLOW_NOT_SUPPORTED.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     * 
     * When this function returns any other result value than #GST_FLOW_OK, `buffer`
     * will be unchanged.
     * 
     * This is a lowlevel function. Usually gst_pad_pull_range() is used.
     */
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * If there is a single internal link of the given pad, this function will
     * return it. Otherwise, it will return NULL.
     */
    getSingleInternalLink(): Gst.Pad | null
    /**
     * Returns a new reference of the sticky event of type `event_type`
     * from the event.
     */
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    /**
     * Returns the current #GstStream for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream().
     */
    getStream(): Gst.Stream | null
    /**
     * Returns the current stream-id for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream_start().
     * 
     * The returned stream-id string should be treated as an opaque string, its
     * contents should not be interpreted.
     */
    getStreamId(): string | null
    /**
     * Get `pad` task state. If no task is currently
     * set, #GST_TASK_STOPPED is returned.
     */
    getTaskState(): Gst.TaskState
    /**
     * Check if `pad` has caps set on it with a #GST_EVENT_CAPS event.
     */
    hasCurrentCaps(): boolean
    /**
     * Query if a pad is active
     */
    isActive(): boolean
    /**
     * Checks if the pad is blocked or not. This function returns the
     * last requested state of the pad. It is not certain that the pad
     * is actually blocking at this point (see gst_pad_is_blocking()).
     */
    isBlocked(): boolean
    /**
     * Checks if the pad is blocking or not. This is a guaranteed state
     * of whether the pad is actually blocking on a #GstBuffer or a #GstEvent.
     */
    isBlocking(): boolean
    /**
     * Checks if a `pad` is linked to another pad or not.
     */
    isLinked(): boolean
    /**
     * Gets an iterator for the pads to which the given pad is linked to inside
     * of the parent element.
     * 
     * Each #GstPad element yielded by the iterator will have its refcount increased,
     * so unref after use.
     * 
     * Free-function: gst_iterator_free
     */
    iterateInternalLinks(): Gst.Iterator | null
    /**
     * Iterate the list of pads to which the given pad is linked to inside of
     * the parent element.
     * This is the default handler, and thus returns an iterator of all of the
     * pads inside the parent element with opposite direction.
     * 
     * The caller must free this iterator after use with gst_iterator_free().
     */
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    /**
     * Links the source pad and the sink pad.
     */
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    /**
     * Links the source pad and the sink pad.
     * 
     * This variant of #gst_pad_link provides a more granular control on the
     * checks being done when linking. While providing some considerable speedups
     * the caller of this method must be aware that wrong usage of those flags
     * can cause severe issues. Refer to the documentation of #GstPadLinkCheck
     * for more information.
     * 
     * MT Safe.
     */
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     */
    linkMaybeGhosting(sink: Gst.Pad): boolean
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     * 
     * Calling gst_pad_link_maybe_ghosting_full() with
     * `flags` == %GST_PAD_LINK_CHECK_DEFAULT is the recommended way of linking
     * pads with safety checks applied.
     */
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    /**
     * Mark a pad for needing reconfiguration. The next call to
     * gst_pad_check_reconfigure() will return %TRUE after this call.
     */
    markReconfigure(): void
    /**
     * Check the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    needsReconfigure(): boolean
    /**
     * Pause the task of `pad`. This function will also wait until the
     * function executed by the task is finished if this function is not
     * called from the task function.
     */
    pauseTask(): boolean
    /**
     * Performs gst_pad_query() on the peer of `pad`.
     * 
     * The caller is responsible for both the allocation and deallocation of
     * the query structure.
     */
    peerQuery(query: Gst.Query): boolean
    /**
     * Check if the peer of `pad` accepts `caps`. If `pad` has no peer, this function
     * returns %TRUE.
     */
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities of the peer connected to this pad. Similar to
     * gst_pad_query_caps().
     * 
     * When called on srcpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on sinkpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     */
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries the peer pad of a given sink pad to convert `src_val` in `src_format`
     * to `dest_format`.
     */
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries the peer pad of a given sink pad for the total stream duration.
     */
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries the peer of a given sink pad for the stream position.
     */
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Checks if all internally linked pads of `pad` accepts the caps in `query` and
     * returns the intersection of the results.
     * 
     * This function is useful as a default accept caps query function for an element
     * that can handle any stream format, but requires caps that are acceptable for
     * all opposite pads.
     */
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    /**
     * Calls gst_pad_query_caps() for all internally linked pads of `pad` and returns
     * the intersection of the results.
     * 
     * This function is useful as a default caps query function for an element
     * that can handle any stream format, but requires all its pads to have
     * the same caps.  Two such elements are tee and adder.
     */
    proxyQueryCaps(query: Gst.Query): boolean
    /**
     * Pulls a `buffer` from the peer pad or fills up a provided buffer.
     * 
     * This function will first trigger the pad block signal if it was
     * installed.
     * 
     * When `pad` is not linked #GST_FLOW_NOT_LINKED is returned else this
     * function returns the result of gst_pad_get_range() on the peer pad.
     * See gst_pad_get_range() for a list of return values and for the
     * semantics of the arguments of this function.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage. When this function
     * returns any other result value, `buffer` will still point to %NULL.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. When this function returns any other result value,
     * `buffer` will be unchanged. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     */
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * Pushes a buffer to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling gst_pad_chain() on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Sends the event to the peer of the given pad. This function is
     * mainly used by elements to send events to their peer
     * elements.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    pushEvent(event: Gst.Event): boolean
    /**
     * Pushes a buffer list to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling the chain function on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned. If the peer pad does not have any installed chainlist function
     * every group buffer of the list will be merged into a normal #GstBuffer and
     * chained via gst_pad_chain().
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Dispatches a query to a pad. The query should have been allocated by the
     * caller via one of the type-specific allocation functions. The element that
     * the pad belongs to is responsible for filling the query with an appropriate
     * response, which should then be parsed with a type-specific query parsing
     * function.
     * 
     * Again, the caller is responsible for both the allocation and deallocation of
     * the query structure.
     * 
     * Please also note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Check if the given pad accepts the caps.
     */
    queryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities this pad can produce or consume.
     * Note that this method doesn't necessarily return the caps set by sending a
     * gst_event_new_caps() - use gst_pad_get_current_caps() for that instead.
     * gst_pad_query_caps returns all possible caps a pad can operate with, using
     * the pad's CAPS query function, If the query fails, this function will return
     * `filter,` if not %NULL, otherwise ANY.
     * 
     * When called on sinkpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on srcpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     * 
     * Note that this function does not return writable #GstCaps, use
     * gst_caps_make_writable() before modifying the caps.
     */
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries a pad to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Invokes the default query handler for the given pad.
     * The query is sent to all pads internally linked to `pad`. Note that
     * if there are many possible sink pads that are internally linked to
     * `pad,` only one will be sent the query.
     * Multi-sinkpad elements should implement custom query handlers.
     */
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    /**
     * Queries a pad for the total stream duration.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries a pad for the stream position.
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Remove the probe with `id` from `pad`.
     * 
     * MT safe.
     */
    removeProbe(id: number): void
    /**
     * Sends the event to the pad. This function can be used
     * by applications to send events in the pipeline.
     * 
     * If `pad` is a source pad, `event` should be an upstream event. If `pad` is a
     * sink pad, `event` should be a downstream event. For example, you would not
     * send a #GST_EVENT_EOS on a src pad; EOS events only propagate downstream.
     * Furthermore, some downstream events have to be serialized with data flow,
     * like EOS, while some can travel out-of-band, like #GST_EVENT_FLUSH_START. If
     * the event needs to be serialized with data flow, this function will take the
     * pad's stream lock while calling its event function.
     * 
     * To find out whether an event type is upstream, downstream, or downstream and
     * serialized, see #GstEventTypeFlags, gst_event_type_get_flags(),
     * #GST_EVENT_IS_UPSTREAM, #GST_EVENT_IS_DOWNSTREAM, and
     * #GST_EVENT_IS_SERIALIZED. Note that in practice that an application or
     * plugin doesn't need to bother itself with this information; the core handles
     * all necessary locks and checks.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Sets the given activate function for `pad`. The activate function will
     * dispatch to gst_pad_activate_mode() to perform the actual activation.
     * Only makes sense to set on sink pads.
     * 
     * Call this function if your sink pad can start a pull-based task.
     */
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    /**
     * Sets the given activate_mode function for the pad. An activate_mode function
     * prepares the element for data passing.
     */
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    /**
     * Activates or deactivates the given pad.
     * Normally called from within core state change functions.
     * 
     * If `active,` makes sure the pad is active. If it is already active, either in
     * push or pull mode, just return. Otherwise dispatches to the pad's activate
     * function to perform the actual activation.
     * 
     * If not `active,` calls gst_pad_activate_mode() with the pad's current mode
     * and a %FALSE argument.
     */
    setActive(active: boolean): boolean
    /**
     * Sets the given chain function for the pad. The chain function is called to
     * process a #GstBuffer input buffer. see #GstPadChainFunction for more details.
     */
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    /**
     * Sets the given chain list function for the pad. The chainlist function is
     * called to process a #GstBufferList input buffer list. See
     * #GstPadChainListFunction for more details.
     */
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    /**
     * Set the given private data gpointer on the pad.
     * This function can only be used by the element that owns the pad.
     * No locking is performed in this function.
     */
    setElementPrivate(priv?: object | null): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFunctionFull(event: Gst.PadEventFunction): void
    /**
     * Sets the given getrange function for the pad. The getrange function is
     * called to produce a new #GstBuffer to start the processing pipeline. see
     * #GstPadGetRangeFunction for a description of the getrange function.
     */
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    /**
     * Sets the given internal link iterator function for the pad.
     */
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    /**
     * Sets the given link function for the pad. It will be called when
     * the pad is linked with another pad.
     * 
     * The return value #GST_PAD_LINK_OK should be used when the connection can be
     * made.
     * 
     * The return value #GST_PAD_LINK_REFUSED should be used when the connection
     * cannot be made for some reason.
     * 
     * If `link` is installed on a source pad, it should call the #GstPadLinkFunction
     * of the peer sink pad, if present.
     */
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    /**
     * Set the offset that will be applied to the running time of `pad`.
     */
    setOffset(offset: number): void
    /**
     * Set the given query function for the pad.
     */
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    /**
     * Sets the given unlink function for the pad. It will be called
     * when the pad is unlinked.
     * 
     * Note that the pad's lock is already held when the unlink
     * function is called, so most pad functions cannot be called
     * from within the callback.
     */
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    /**
     * Starts a task that repeatedly calls `func` with `user_data`. This function
     * is mostly used in pad activation functions to start the dataflow.
     * The #GST_PAD_STREAM_LOCK of `pad` will automatically be acquired
     * before `func` is called.
     */
    startTask(func: Gst.TaskFunction): boolean
    /**
     * Iterates all sticky events on `pad` and calls `foreach_func` for every
     * event. If `foreach_func` returns %FALSE the iteration is immediately stopped.
     */
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    /**
     * Stop the task of `pad`. This function will also make sure that the
     * function executed by the task will effectively stop if not called
     * from the GstTaskFunction.
     * 
     * This function will deadlock if called from the GstTaskFunction of
     * the task. Use gst_task_pause() instead.
     * 
     * Regardless of whether the pad has a task, the stream lock is acquired and
     * released so as to ensure that streaming through this pad has finished.
     */
    stopTask(): boolean
    /**
     * Store the sticky `event` on `pad`
     */
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    /**
     * Unlinks the source pad from the sink pad. Will emit the #GstPad::unlinked
     * signal on both pads.
     */
    unlink(sinkpad: Gst.Pad): boolean
    /**
     * A helper function you can use that sets the FIXED_CAPS flag
     * This way the default CAPS query will always return the negotiated caps
     * or in case the pad is not negotiated, the padtemplate caps.
     * 
     * The negotiated caps are the caps of the last CAPS event that passed on the
     * pad. Use this function on a pad that, once it negotiated to a CAPS, cannot
     * be renegotiated to something else.
     */
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    /**
     * Signals that a pad has been linked to the peer pad.
     */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    /**
     * Signals that a pad has been unlinked from the peer pad.
     */
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorConvertPad_ConstructProps)
    _init (config?: VideoAggregatorConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorPad_ConstructProps extends GstBase.AggregatorPad_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat?: number
    repeatAfterEos?: boolean
    zorder?: number
}
class VideoAggregatorPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Enables the emission of signals such as #GstAggregatorPad::buffer-consumed
     */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    /**
     * The offset that will be applied to the running time of the pad.
     */
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    readonly parent: Gst.Pad
    /**
     * last segment received.
     */
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    /**
     * private data owned by the parent element
     */
    readonly elementPrivate: object
    /**
     * padtemplate for this pad
     */
    readonly padtemplate: Gst.PadTemplate
    /**
     * the direction of the pad, cannot change after creating
     *             the pad.
     */
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    /**
     * Returns the currently queued buffer that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getCurrentBuffer(): Gst.Buffer
    /**
     * Returns the currently prepared video frame that has to be aggregated into
     * the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getPreparedFrame(): VideoFrame
    /**
     * Checks if the pad currently has a buffer queued that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     */
    hasCurrentBuffer(): boolean
    /**
     * Allows selecting that this pad requires an output format with alpha
     */
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Drop the buffer currently queued in `pad`.
     */
    dropBuffer(): boolean
    /**
     * This checks if a pad has a buffer available that will be returned by
     * a call to gst_aggregator_pad_peek_buffer() or
     * gst_aggregator_pad_pop_buffer().
     */
    hasBuffer(): boolean
    isEos(): boolean
    /**
     * It is only valid to call this method from #GstAggregatorClass::aggregate()
     */
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    /**
     * Steal the ref to the buffer currently queued in `pad`.
     */
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    /**
     * Activates or deactivates the given pad in `mode` via dispatching to the
     * pad's activatemodefunc. For use from within pad activation functions only.
     * 
     * If you don't know what this is, you probably don't want to call it.
     */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    /**
     * Be notified of different states of pads. The provided callback is called for
     * every state that matches `mask`.
     * 
     * Probes are called in groups: First GST_PAD_PROBE_TYPE_BLOCK probes are
     * called, then others, then finally GST_PAD_PROBE_TYPE_IDLE. The only
     * exception here are GST_PAD_PROBE_TYPE_IDLE probes that are called
     * immediately if the pad is already idle while calling gst_pad_add_probe().
     * In each of the groups, probes are called in the order in which they were
     * added.
     */
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    /**
     * Checks if the source pad and the sink pad are compatible so they can be
     * linked.
     */
    canLink(sinkpad: Gst.Pad): boolean
    /**
     * Chain a buffer to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If the buffer type is not acceptable for `pad` (as negotiated with a
     * preceding GST_EVENT_CAPS event), this function returns
     * #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chain function installed on `pad` (see
     * gst_pad_set_chain_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chain function.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Chain a bufferlist to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If `pad` was not negotiated properly with a CAPS event, this function
     * returns #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chainlist function installed on `pad` (see
     * gst_pad_set_chain_list_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chainlist function.
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     * 
     * MT safe.
     */
    chainList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Check and clear the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    checkReconfigure(): boolean
    /**
     * Creates a stream-id for the source #GstPad `pad` by combining the
     * upstream information with the optional `stream_id` of the stream
     * of `pad`. `pad` must have a parent #GstElement and which must have zero
     * or one sinkpad. `stream_id` can only be %NULL if the parent element
     * of `pad` has only a single source pad.
     * 
     * This function generates an unique stream-id by getting the upstream
     * stream-start event stream ID and appending `stream_id` to it. If the
     * element has no sinkpad it will generate an upstream stream-id by
     * doing an URI query on the element and in the worst case just uses
     * a random number. Source elements that don't implement the URI
     * handler interface should ideally generate a unique, deterministic
     * stream-id manually instead.
     * 
     * Since stream IDs are sorted alphabetically, any numbers in the
     * stream ID should be printed with a fixed number of characters,
     * preceded by 0's, such as by using the format \%03u instead of \%u.
     */
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    /**
     * Invokes the default event handler for the given pad.
     * 
     * The EOS event will pause the task associated with `pad` before it is forwarded
     * to all internally linked pads,
     * 
     * The event is sent to all pads internally linked to `pad`. This function
     * takes ownership of `event`.
     */
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    /**
     * Calls `forward` for all internally linked pads of `pad`. This function deals with
     * dynamically changing internal pads and will make sure that the `forward`
     * function is only called once for each pad.
     * 
     * When `forward` returns %TRUE, no further pads will be processed.
     */
    forward(forward: Gst.PadForwardFunction): boolean
    /**
     * Gets the capabilities of the allowed media types that can flow through
     * `pad` and its peer.
     * 
     * The allowed capabilities is calculated as the intersection of the results of
     * calling gst_pad_query_caps() on `pad` and its peer. The caller owns a reference
     * on the resulting caps.
     */
    getAllowedCaps(): Gst.Caps | null
    /**
     * Gets the capabilities currently configured on `pad` with the last
     * #GST_EVENT_CAPS event.
     */
    getCurrentCaps(): Gst.Caps | null
    /**
     * Gets the direction of the pad. The direction of the pad is
     * decided at construction time so this function does not take
     * the LOCK.
     */
    getDirection(): Gst.PadDirection
    /**
     * Gets the private data of a pad.
     * No locking is performed in this function.
     */
    getElementPrivate(): object | null
    /**
     * Gets the #GstFlowReturn return from the last data passed by this pad.
     */
    getLastFlowReturn(): Gst.FlowReturn
    /**
     * Get the offset applied to the running time of `pad`. `pad` has to be a source
     * pad.
     */
    getOffset(): number
    /**
     * Gets the template for `pad`.
     */
    getPadTemplate(): Gst.PadTemplate | null
    /**
     * Gets the capabilities for `pad'`s template.
     */
    getPadTemplateCaps(): Gst.Caps
    /**
     * Gets the parent of `pad,` cast to a #GstElement. If a `pad` has no parent or
     * its parent is not an element, return %NULL.
     */
    getParentElement(): Gst.Element | null
    /**
     * Gets the peer of `pad`. This function refs the peer pad so
     * you need to unref it after use.
     */
    getPeer(): Gst.Pad | null
    /**
     * When `pad` is flushing this function returns #GST_FLOW_FLUSHING
     * immediately and `buffer` is %NULL.
     * 
     * Calls the getrange function of `pad,` see #GstPadGetRangeFunction for a
     * description of a getrange function. If `pad` has no getrange function
     * installed (see gst_pad_set_getrange_function()) this function returns
     * #GST_FLOW_NOT_SUPPORTED.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     * 
     * When this function returns any other result value than #GST_FLOW_OK, `buffer`
     * will be unchanged.
     * 
     * This is a lowlevel function. Usually gst_pad_pull_range() is used.
     */
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * If there is a single internal link of the given pad, this function will
     * return it. Otherwise, it will return NULL.
     */
    getSingleInternalLink(): Gst.Pad | null
    /**
     * Returns a new reference of the sticky event of type `event_type`
     * from the event.
     */
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    /**
     * Returns the current #GstStream for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream().
     */
    getStream(): Gst.Stream | null
    /**
     * Returns the current stream-id for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream_start().
     * 
     * The returned stream-id string should be treated as an opaque string, its
     * contents should not be interpreted.
     */
    getStreamId(): string | null
    /**
     * Get `pad` task state. If no task is currently
     * set, #GST_TASK_STOPPED is returned.
     */
    getTaskState(): Gst.TaskState
    /**
     * Check if `pad` has caps set on it with a #GST_EVENT_CAPS event.
     */
    hasCurrentCaps(): boolean
    /**
     * Query if a pad is active
     */
    isActive(): boolean
    /**
     * Checks if the pad is blocked or not. This function returns the
     * last requested state of the pad. It is not certain that the pad
     * is actually blocking at this point (see gst_pad_is_blocking()).
     */
    isBlocked(): boolean
    /**
     * Checks if the pad is blocking or not. This is a guaranteed state
     * of whether the pad is actually blocking on a #GstBuffer or a #GstEvent.
     */
    isBlocking(): boolean
    /**
     * Checks if a `pad` is linked to another pad or not.
     */
    isLinked(): boolean
    /**
     * Gets an iterator for the pads to which the given pad is linked to inside
     * of the parent element.
     * 
     * Each #GstPad element yielded by the iterator will have its refcount increased,
     * so unref after use.
     * 
     * Free-function: gst_iterator_free
     */
    iterateInternalLinks(): Gst.Iterator | null
    /**
     * Iterate the list of pads to which the given pad is linked to inside of
     * the parent element.
     * This is the default handler, and thus returns an iterator of all of the
     * pads inside the parent element with opposite direction.
     * 
     * The caller must free this iterator after use with gst_iterator_free().
     */
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    /**
     * Links the source pad and the sink pad.
     */
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    /**
     * Links the source pad and the sink pad.
     * 
     * This variant of #gst_pad_link provides a more granular control on the
     * checks being done when linking. While providing some considerable speedups
     * the caller of this method must be aware that wrong usage of those flags
     * can cause severe issues. Refer to the documentation of #GstPadLinkCheck
     * for more information.
     * 
     * MT Safe.
     */
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     */
    linkMaybeGhosting(sink: Gst.Pad): boolean
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     * 
     * Calling gst_pad_link_maybe_ghosting_full() with
     * `flags` == %GST_PAD_LINK_CHECK_DEFAULT is the recommended way of linking
     * pads with safety checks applied.
     */
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    /**
     * Mark a pad for needing reconfiguration. The next call to
     * gst_pad_check_reconfigure() will return %TRUE after this call.
     */
    markReconfigure(): void
    /**
     * Check the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    needsReconfigure(): boolean
    /**
     * Pause the task of `pad`. This function will also wait until the
     * function executed by the task is finished if this function is not
     * called from the task function.
     */
    pauseTask(): boolean
    /**
     * Performs gst_pad_query() on the peer of `pad`.
     * 
     * The caller is responsible for both the allocation and deallocation of
     * the query structure.
     */
    peerQuery(query: Gst.Query): boolean
    /**
     * Check if the peer of `pad` accepts `caps`. If `pad` has no peer, this function
     * returns %TRUE.
     */
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities of the peer connected to this pad. Similar to
     * gst_pad_query_caps().
     * 
     * When called on srcpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on sinkpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     */
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries the peer pad of a given sink pad to convert `src_val` in `src_format`
     * to `dest_format`.
     */
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries the peer pad of a given sink pad for the total stream duration.
     */
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries the peer of a given sink pad for the stream position.
     */
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Checks if all internally linked pads of `pad` accepts the caps in `query` and
     * returns the intersection of the results.
     * 
     * This function is useful as a default accept caps query function for an element
     * that can handle any stream format, but requires caps that are acceptable for
     * all opposite pads.
     */
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    /**
     * Calls gst_pad_query_caps() for all internally linked pads of `pad` and returns
     * the intersection of the results.
     * 
     * This function is useful as a default caps query function for an element
     * that can handle any stream format, but requires all its pads to have
     * the same caps.  Two such elements are tee and adder.
     */
    proxyQueryCaps(query: Gst.Query): boolean
    /**
     * Pulls a `buffer` from the peer pad or fills up a provided buffer.
     * 
     * This function will first trigger the pad block signal if it was
     * installed.
     * 
     * When `pad` is not linked #GST_FLOW_NOT_LINKED is returned else this
     * function returns the result of gst_pad_get_range() on the peer pad.
     * See gst_pad_get_range() for a list of return values and for the
     * semantics of the arguments of this function.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage. When this function
     * returns any other result value, `buffer` will still point to %NULL.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. When this function returns any other result value,
     * `buffer` will be unchanged. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     */
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * Pushes a buffer to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling gst_pad_chain() on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Sends the event to the peer of the given pad. This function is
     * mainly used by elements to send events to their peer
     * elements.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    pushEvent(event: Gst.Event): boolean
    /**
     * Pushes a buffer list to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling the chain function on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned. If the peer pad does not have any installed chainlist function
     * every group buffer of the list will be merged into a normal #GstBuffer and
     * chained via gst_pad_chain().
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Dispatches a query to a pad. The query should have been allocated by the
     * caller via one of the type-specific allocation functions. The element that
     * the pad belongs to is responsible for filling the query with an appropriate
     * response, which should then be parsed with a type-specific query parsing
     * function.
     * 
     * Again, the caller is responsible for both the allocation and deallocation of
     * the query structure.
     * 
     * Please also note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Check if the given pad accepts the caps.
     */
    queryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities this pad can produce or consume.
     * Note that this method doesn't necessarily return the caps set by sending a
     * gst_event_new_caps() - use gst_pad_get_current_caps() for that instead.
     * gst_pad_query_caps returns all possible caps a pad can operate with, using
     * the pad's CAPS query function, If the query fails, this function will return
     * `filter,` if not %NULL, otherwise ANY.
     * 
     * When called on sinkpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on srcpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     * 
     * Note that this function does not return writable #GstCaps, use
     * gst_caps_make_writable() before modifying the caps.
     */
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries a pad to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Invokes the default query handler for the given pad.
     * The query is sent to all pads internally linked to `pad`. Note that
     * if there are many possible sink pads that are internally linked to
     * `pad,` only one will be sent the query.
     * Multi-sinkpad elements should implement custom query handlers.
     */
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    /**
     * Queries a pad for the total stream duration.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries a pad for the stream position.
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Remove the probe with `id` from `pad`.
     * 
     * MT safe.
     */
    removeProbe(id: number): void
    /**
     * Sends the event to the pad. This function can be used
     * by applications to send events in the pipeline.
     * 
     * If `pad` is a source pad, `event` should be an upstream event. If `pad` is a
     * sink pad, `event` should be a downstream event. For example, you would not
     * send a #GST_EVENT_EOS on a src pad; EOS events only propagate downstream.
     * Furthermore, some downstream events have to be serialized with data flow,
     * like EOS, while some can travel out-of-band, like #GST_EVENT_FLUSH_START. If
     * the event needs to be serialized with data flow, this function will take the
     * pad's stream lock while calling its event function.
     * 
     * To find out whether an event type is upstream, downstream, or downstream and
     * serialized, see #GstEventTypeFlags, gst_event_type_get_flags(),
     * #GST_EVENT_IS_UPSTREAM, #GST_EVENT_IS_DOWNSTREAM, and
     * #GST_EVENT_IS_SERIALIZED. Note that in practice that an application or
     * plugin doesn't need to bother itself with this information; the core handles
     * all necessary locks and checks.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Sets the given activate function for `pad`. The activate function will
     * dispatch to gst_pad_activate_mode() to perform the actual activation.
     * Only makes sense to set on sink pads.
     * 
     * Call this function if your sink pad can start a pull-based task.
     */
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    /**
     * Sets the given activate_mode function for the pad. An activate_mode function
     * prepares the element for data passing.
     */
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    /**
     * Activates or deactivates the given pad.
     * Normally called from within core state change functions.
     * 
     * If `active,` makes sure the pad is active. If it is already active, either in
     * push or pull mode, just return. Otherwise dispatches to the pad's activate
     * function to perform the actual activation.
     * 
     * If not `active,` calls gst_pad_activate_mode() with the pad's current mode
     * and a %FALSE argument.
     */
    setActive(active: boolean): boolean
    /**
     * Sets the given chain function for the pad. The chain function is called to
     * process a #GstBuffer input buffer. see #GstPadChainFunction for more details.
     */
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    /**
     * Sets the given chain list function for the pad. The chainlist function is
     * called to process a #GstBufferList input buffer list. See
     * #GstPadChainListFunction for more details.
     */
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    /**
     * Set the given private data gpointer on the pad.
     * This function can only be used by the element that owns the pad.
     * No locking is performed in this function.
     */
    setElementPrivate(priv?: object | null): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFunctionFull(event: Gst.PadEventFunction): void
    /**
     * Sets the given getrange function for the pad. The getrange function is
     * called to produce a new #GstBuffer to start the processing pipeline. see
     * #GstPadGetRangeFunction for a description of the getrange function.
     */
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    /**
     * Sets the given internal link iterator function for the pad.
     */
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    /**
     * Sets the given link function for the pad. It will be called when
     * the pad is linked with another pad.
     * 
     * The return value #GST_PAD_LINK_OK should be used when the connection can be
     * made.
     * 
     * The return value #GST_PAD_LINK_REFUSED should be used when the connection
     * cannot be made for some reason.
     * 
     * If `link` is installed on a source pad, it should call the #GstPadLinkFunction
     * of the peer sink pad, if present.
     */
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    /**
     * Set the offset that will be applied to the running time of `pad`.
     */
    setOffset(offset: number): void
    /**
     * Set the given query function for the pad.
     */
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    /**
     * Sets the given unlink function for the pad. It will be called
     * when the pad is unlinked.
     * 
     * Note that the pad's lock is already held when the unlink
     * function is called, so most pad functions cannot be called
     * from within the callback.
     */
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    /**
     * Starts a task that repeatedly calls `func` with `user_data`. This function
     * is mostly used in pad activation functions to start the dataflow.
     * The #GST_PAD_STREAM_LOCK of `pad` will automatically be acquired
     * before `func` is called.
     */
    startTask(func: Gst.TaskFunction): boolean
    /**
     * Iterates all sticky events on `pad` and calls `foreach_func` for every
     * event. If `foreach_func` returns %FALSE the iteration is immediately stopped.
     */
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    /**
     * Stop the task of `pad`. This function will also make sure that the
     * function executed by the task will effectively stop if not called
     * from the GstTaskFunction.
     * 
     * This function will deadlock if called from the GstTaskFunction of
     * the task. Use gst_task_pause() instead.
     * 
     * Regardless of whether the pad has a task, the stream lock is acquired and
     * released so as to ensure that streaming through this pad has finished.
     */
    stopTask(): boolean
    /**
     * Store the sticky `event` on `pad`
     */
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    /**
     * Unlinks the source pad from the sink pad. Will emit the #GstPad::unlinked
     * signal on both pads.
     */
    unlink(sinkpad: Gst.Pad): boolean
    /**
     * A helper function you can use that sets the FIXED_CAPS flag
     * This way the default CAPS query will always return the negotiated caps
     * or in case the pad is not negotiated, the padtemplate caps.
     * 
     * The negotiated caps are the caps of the last CAPS event that passed on the
     * pad. Use this function on a pad that, once it negotiated to a CAPS, cannot
     * be renegotiated to something else.
     */
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    /**
     * Signals that a pad has been linked to the peer pad.
     */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    /**
     * Signals that a pad has been unlinked from the peer pad.
     */
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorPad_ConstructProps)
    _init (config?: VideoAggregatorPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoAggregatorParallelConvertPad_ConstructProps extends VideoAggregatorConvertPad_ConstructProps {
}
class VideoAggregatorParallelConvertPad {
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    converterConfig: Gst.Structure
    /* Properties of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    /* Properties of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Enables the emission of signals such as #GstAggregatorPad::buffer-consumed
     */
    emitSignals: boolean
    /* Properties of Gst-1.0.Gst.Pad */
    readonly caps: Gst.Caps
    /**
     * The offset that will be applied to the running time of the pad.
     */
    offset: number
    template: Gst.PadTemplate
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    readonly parent: GstBase.AggregatorPad
    /**
     * The #GstVideoInfo currently set on the pad
     */
    readonly info: VideoInfo
    /* Fields of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * last segment received.
     */
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Pad */
    readonly object: Gst.Object
    /**
     * private data owned by the parent element
     */
    readonly elementPrivate: object
    /**
     * padtemplate for this pad
     */
    readonly padtemplate: Gst.PadTemplate
    /**
     * the direction of the pad, cannot change after creating
     *             the pad.
     */
    readonly direction: Gst.PadDirection
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad */
    /**
     * Requests the pad to check and update the converter before the next usage to
     * update for any changes that have happened.
     */
    updateConversionInfo(): void
    /* Methods of GstVideo-1.0.GstVideo.VideoAggregatorPad */
    /**
     * Returns the currently queued buffer that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getCurrentBuffer(): Gst.Buffer
    /**
     * Returns the currently prepared video frame that has to be aggregated into
     * the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     */
    getPreparedFrame(): VideoFrame
    /**
     * Checks if the pad currently has a buffer queued that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     */
    hasCurrentBuffer(): boolean
    /**
     * Allows selecting that this pad requires an output format with alpha
     */
    setNeedsAlpha(needsAlpha: boolean): void
    /* Methods of GstBase-1.0.GstBase.AggregatorPad */
    /**
     * Drop the buffer currently queued in `pad`.
     */
    dropBuffer(): boolean
    /**
     * This checks if a pad has a buffer available that will be returned by
     * a call to gst_aggregator_pad_peek_buffer() or
     * gst_aggregator_pad_pop_buffer().
     */
    hasBuffer(): boolean
    isEos(): boolean
    /**
     * It is only valid to call this method from #GstAggregatorClass::aggregate()
     */
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    /**
     * Steal the ref to the buffer currently queued in `pad`.
     */
    popBuffer(): Gst.Buffer | null
    /* Methods of Gst-1.0.Gst.Pad */
    /**
     * Activates or deactivates the given pad in `mode` via dispatching to the
     * pad's activatemodefunc. For use from within pad activation functions only.
     * 
     * If you don't know what this is, you probably don't want to call it.
     */
    activateMode(mode: Gst.PadMode, active: boolean): boolean
    /**
     * Be notified of different states of pads. The provided callback is called for
     * every state that matches `mask`.
     * 
     * Probes are called in groups: First GST_PAD_PROBE_TYPE_BLOCK probes are
     * called, then others, then finally GST_PAD_PROBE_TYPE_IDLE. The only
     * exception here are GST_PAD_PROBE_TYPE_IDLE probes that are called
     * immediately if the pad is already idle while calling gst_pad_add_probe().
     * In each of the groups, probes are called in the order in which they were
     * added.
     */
    addProbe(mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): number
    /**
     * Checks if the source pad and the sink pad are compatible so they can be
     * linked.
     */
    canLink(sinkpad: Gst.Pad): boolean
    /**
     * Chain a buffer to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If the buffer type is not acceptable for `pad` (as negotiated with a
     * preceding GST_EVENT_CAPS event), this function returns
     * #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chain function installed on `pad` (see
     * gst_pad_set_chain_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chain function.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    chain(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Chain a bufferlist to `pad`.
     * 
     * The function returns #GST_FLOW_FLUSHING if the pad was flushing.
     * 
     * If `pad` was not negotiated properly with a CAPS event, this function
     * returns #GST_FLOW_NOT_NEGOTIATED.
     * 
     * The function proceeds calling the chainlist function installed on `pad` (see
     * gst_pad_set_chain_list_function()) and the return value of that function is
     * returned to the caller. #GST_FLOW_NOT_SUPPORTED is returned if `pad` has no
     * chainlist function.
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     * 
     * MT safe.
     */
    chainList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Check and clear the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    checkReconfigure(): boolean
    /**
     * Creates a stream-id for the source #GstPad `pad` by combining the
     * upstream information with the optional `stream_id` of the stream
     * of `pad`. `pad` must have a parent #GstElement and which must have zero
     * or one sinkpad. `stream_id` can only be %NULL if the parent element
     * of `pad` has only a single source pad.
     * 
     * This function generates an unique stream-id by getting the upstream
     * stream-start event stream ID and appending `stream_id` to it. If the
     * element has no sinkpad it will generate an upstream stream-id by
     * doing an URI query on the element and in the worst case just uses
     * a random number. Source elements that don't implement the URI
     * handler interface should ideally generate a unique, deterministic
     * stream-id manually instead.
     * 
     * Since stream IDs are sorted alphabetically, any numbers in the
     * stream ID should be printed with a fixed number of characters,
     * preceded by 0's, such as by using the format \%03u instead of \%u.
     */
    createStreamId(parent: Gst.Element, streamId?: string | null): string
    /**
     * Invokes the default event handler for the given pad.
     * 
     * The EOS event will pause the task associated with `pad` before it is forwarded
     * to all internally linked pads,
     * 
     * The event is sent to all pads internally linked to `pad`. This function
     * takes ownership of `event`.
     */
    eventDefault(parent: Gst.Object | null, event: Gst.Event): boolean
    /**
     * Calls `forward` for all internally linked pads of `pad`. This function deals with
     * dynamically changing internal pads and will make sure that the `forward`
     * function is only called once for each pad.
     * 
     * When `forward` returns %TRUE, no further pads will be processed.
     */
    forward(forward: Gst.PadForwardFunction): boolean
    /**
     * Gets the capabilities of the allowed media types that can flow through
     * `pad` and its peer.
     * 
     * The allowed capabilities is calculated as the intersection of the results of
     * calling gst_pad_query_caps() on `pad` and its peer. The caller owns a reference
     * on the resulting caps.
     */
    getAllowedCaps(): Gst.Caps | null
    /**
     * Gets the capabilities currently configured on `pad` with the last
     * #GST_EVENT_CAPS event.
     */
    getCurrentCaps(): Gst.Caps | null
    /**
     * Gets the direction of the pad. The direction of the pad is
     * decided at construction time so this function does not take
     * the LOCK.
     */
    getDirection(): Gst.PadDirection
    /**
     * Gets the private data of a pad.
     * No locking is performed in this function.
     */
    getElementPrivate(): object | null
    /**
     * Gets the #GstFlowReturn return from the last data passed by this pad.
     */
    getLastFlowReturn(): Gst.FlowReturn
    /**
     * Get the offset applied to the running time of `pad`. `pad` has to be a source
     * pad.
     */
    getOffset(): number
    /**
     * Gets the template for `pad`.
     */
    getPadTemplate(): Gst.PadTemplate | null
    /**
     * Gets the capabilities for `pad'`s template.
     */
    getPadTemplateCaps(): Gst.Caps
    /**
     * Gets the parent of `pad,` cast to a #GstElement. If a `pad` has no parent or
     * its parent is not an element, return %NULL.
     */
    getParentElement(): Gst.Element | null
    /**
     * Gets the peer of `pad`. This function refs the peer pad so
     * you need to unref it after use.
     */
    getPeer(): Gst.Pad | null
    /**
     * When `pad` is flushing this function returns #GST_FLOW_FLUSHING
     * immediately and `buffer` is %NULL.
     * 
     * Calls the getrange function of `pad,` see #GstPadGetRangeFunction for a
     * description of a getrange function. If `pad` has no getrange function
     * installed (see gst_pad_set_getrange_function()) this function returns
     * #GST_FLOW_NOT_SUPPORTED.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     * 
     * When this function returns any other result value than #GST_FLOW_OK, `buffer`
     * will be unchanged.
     * 
     * This is a lowlevel function. Usually gst_pad_pull_range() is used.
     */
    getRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * If there is a single internal link of the given pad, this function will
     * return it. Otherwise, it will return NULL.
     */
    getSingleInternalLink(): Gst.Pad | null
    /**
     * Returns a new reference of the sticky event of type `event_type`
     * from the event.
     */
    getStickyEvent(eventType: Gst.EventType, idx: number): Gst.Event | null
    /**
     * Returns the current #GstStream for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream().
     */
    getStream(): Gst.Stream | null
    /**
     * Returns the current stream-id for the `pad,` or %NULL if none has been
     * set yet, i.e. the pad has not received a stream-start event yet.
     * 
     * This is a convenience wrapper around gst_pad_get_sticky_event() and
     * gst_event_parse_stream_start().
     * 
     * The returned stream-id string should be treated as an opaque string, its
     * contents should not be interpreted.
     */
    getStreamId(): string | null
    /**
     * Get `pad` task state. If no task is currently
     * set, #GST_TASK_STOPPED is returned.
     */
    getTaskState(): Gst.TaskState
    /**
     * Check if `pad` has caps set on it with a #GST_EVENT_CAPS event.
     */
    hasCurrentCaps(): boolean
    /**
     * Query if a pad is active
     */
    isActive(): boolean
    /**
     * Checks if the pad is blocked or not. This function returns the
     * last requested state of the pad. It is not certain that the pad
     * is actually blocking at this point (see gst_pad_is_blocking()).
     */
    isBlocked(): boolean
    /**
     * Checks if the pad is blocking or not. This is a guaranteed state
     * of whether the pad is actually blocking on a #GstBuffer or a #GstEvent.
     */
    isBlocking(): boolean
    /**
     * Checks if a `pad` is linked to another pad or not.
     */
    isLinked(): boolean
    /**
     * Gets an iterator for the pads to which the given pad is linked to inside
     * of the parent element.
     * 
     * Each #GstPad element yielded by the iterator will have its refcount increased,
     * so unref after use.
     * 
     * Free-function: gst_iterator_free
     */
    iterateInternalLinks(): Gst.Iterator | null
    /**
     * Iterate the list of pads to which the given pad is linked to inside of
     * the parent element.
     * This is the default handler, and thus returns an iterator of all of the
     * pads inside the parent element with opposite direction.
     * 
     * The caller must free this iterator after use with gst_iterator_free().
     */
    iterateInternalLinksDefault(parent?: Gst.Object | null): Gst.Iterator | null
    /**
     * Links the source pad and the sink pad.
     */
    link(sinkpad: Gst.Pad): Gst.PadLinkReturn
    /**
     * Links the source pad and the sink pad.
     * 
     * This variant of #gst_pad_link provides a more granular control on the
     * checks being done when linking. While providing some considerable speedups
     * the caller of this method must be aware that wrong usage of those flags
     * can cause severe issues. Refer to the documentation of #GstPadLinkCheck
     * for more information.
     * 
     * MT Safe.
     */
    linkFull(sinkpad: Gst.Pad, flags: Gst.PadLinkCheck): Gst.PadLinkReturn
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     */
    linkMaybeGhosting(sink: Gst.Pad): boolean
    /**
     * Links `src` to `sink,` creating any #GstGhostPad's in between as necessary.
     * 
     * This is a convenience function to save having to create and add intermediate
     * #GstGhostPad's as required for linking across #GstBin boundaries.
     * 
     * If `src` or `sink` pads don't have parent elements or do not share a common
     * ancestor, the link will fail.
     * 
     * Calling gst_pad_link_maybe_ghosting_full() with
     * `flags` == %GST_PAD_LINK_CHECK_DEFAULT is the recommended way of linking
     * pads with safety checks applied.
     */
    linkMaybeGhostingFull(sink: Gst.Pad, flags: Gst.PadLinkCheck): boolean
    /**
     * Mark a pad for needing reconfiguration. The next call to
     * gst_pad_check_reconfigure() will return %TRUE after this call.
     */
    markReconfigure(): void
    /**
     * Check the #GST_PAD_FLAG_NEED_RECONFIGURE flag on `pad` and return %TRUE
     * if the flag was set.
     */
    needsReconfigure(): boolean
    /**
     * Pause the task of `pad`. This function will also wait until the
     * function executed by the task is finished if this function is not
     * called from the task function.
     */
    pauseTask(): boolean
    /**
     * Performs gst_pad_query() on the peer of `pad`.
     * 
     * The caller is responsible for both the allocation and deallocation of
     * the query structure.
     */
    peerQuery(query: Gst.Query): boolean
    /**
     * Check if the peer of `pad` accepts `caps`. If `pad` has no peer, this function
     * returns %TRUE.
     */
    peerQueryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities of the peer connected to this pad. Similar to
     * gst_pad_query_caps().
     * 
     * When called on srcpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on sinkpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     */
    peerQueryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries the peer pad of a given sink pad to convert `src_val` in `src_format`
     * to `dest_format`.
     */
    peerQueryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries the peer pad of a given sink pad for the total stream duration.
     */
    peerQueryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries the peer of a given sink pad for the stream position.
     */
    peerQueryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Checks if all internally linked pads of `pad` accepts the caps in `query` and
     * returns the intersection of the results.
     * 
     * This function is useful as a default accept caps query function for an element
     * that can handle any stream format, but requires caps that are acceptable for
     * all opposite pads.
     */
    proxyQueryAcceptCaps(query: Gst.Query): boolean
    /**
     * Calls gst_pad_query_caps() for all internally linked pads of `pad` and returns
     * the intersection of the results.
     * 
     * This function is useful as a default caps query function for an element
     * that can handle any stream format, but requires all its pads to have
     * the same caps.  Two such elements are tee and adder.
     */
    proxyQueryCaps(query: Gst.Query): boolean
    /**
     * Pulls a `buffer` from the peer pad or fills up a provided buffer.
     * 
     * This function will first trigger the pad block signal if it was
     * installed.
     * 
     * When `pad` is not linked #GST_FLOW_NOT_LINKED is returned else this
     * function returns the result of gst_pad_get_range() on the peer pad.
     * See gst_pad_get_range() for a list of return values and for the
     * semantics of the arguments of this function.
     * 
     * If `buffer` points to a variable holding %NULL, a valid new #GstBuffer will be
     * placed in `buffer` when this function returns #GST_FLOW_OK. The new buffer
     * must be freed with gst_buffer_unref() after usage. When this function
     * returns any other result value, `buffer` will still point to %NULL.
     * 
     * When `buffer` points to a variable that points to a valid #GstBuffer, the
     * buffer will be filled with the result data when this function returns
     * #GST_FLOW_OK. When this function returns any other result value,
     * `buffer` will be unchanged. If the provided buffer is larger than `size,` only
     * `size` bytes will be filled in the result buffer and its size will be updated
     * accordingly.
     * 
     * Note that less than `size` bytes can be returned in `buffer` when, for example,
     * an EOS condition is near or when `buffer` is not large enough to hold `size`
     * bytes. The caller should check the result buffer size to get the result size.
     */
    pullRange(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * Pushes a buffer to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling gst_pad_chain() on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned.
     * 
     * In all cases, success or failure, the caller loses its reference to `buffer`
     * after calling this function.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Sends the event to the peer of the given pad. This function is
     * mainly used by elements to send events to their peer
     * elements.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    pushEvent(event: Gst.Event): boolean
    /**
     * Pushes a buffer list to the peer of `pad`.
     * 
     * This function will call installed block probes before triggering any
     * installed data probes.
     * 
     * The function proceeds calling the chain function on the peer pad and returns
     * the value from that function. If `pad` has no peer, #GST_FLOW_NOT_LINKED will
     * be returned. If the peer pad does not have any installed chainlist function
     * every group buffer of the list will be merged into a normal #GstBuffer and
     * chained via gst_pad_chain().
     * 
     * In all cases, success or failure, the caller loses its reference to `list`
     * after calling this function.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Dispatches a query to a pad. The query should have been allocated by the
     * caller via one of the type-specific allocation functions. The element that
     * the pad belongs to is responsible for filling the query with an appropriate
     * response, which should then be parsed with a type-specific query parsing
     * function.
     * 
     * Again, the caller is responsible for both the allocation and deallocation of
     * the query structure.
     * 
     * Please also note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Check if the given pad accepts the caps.
     */
    queryAcceptCaps(caps: Gst.Caps): boolean
    /**
     * Gets the capabilities this pad can produce or consume.
     * Note that this method doesn't necessarily return the caps set by sending a
     * gst_event_new_caps() - use gst_pad_get_current_caps() for that instead.
     * gst_pad_query_caps returns all possible caps a pad can operate with, using
     * the pad's CAPS query function, If the query fails, this function will return
     * `filter,` if not %NULL, otherwise ANY.
     * 
     * When called on sinkpads `filter` contains the caps that
     * upstream could produce in the order preferred by upstream. When
     * called on srcpads `filter` contains the caps accepted by
     * downstream in the preferred order. `filter` might be %NULL but
     * if it is not %NULL the returned caps will be a subset of `filter`.
     * 
     * Note that this function does not return writable #GstCaps, use
     * gst_caps_make_writable() before modifying the caps.
     */
    queryCaps(filter?: Gst.Caps | null): Gst.Caps
    /**
     * Queries a pad to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Invokes the default query handler for the given pad.
     * The query is sent to all pads internally linked to `pad`. Note that
     * if there are many possible sink pads that are internally linked to
     * `pad,` only one will be sent the query.
     * Multi-sinkpad elements should implement custom query handlers.
     */
    queryDefault(parent: Gst.Object | null, query: Gst.Query): boolean
    /**
     * Queries a pad for the total stream duration.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries a pad for the stream position.
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Remove the probe with `id` from `pad`.
     * 
     * MT safe.
     */
    removeProbe(id: number): void
    /**
     * Sends the event to the pad. This function can be used
     * by applications to send events in the pipeline.
     * 
     * If `pad` is a source pad, `event` should be an upstream event. If `pad` is a
     * sink pad, `event` should be a downstream event. For example, you would not
     * send a #GST_EVENT_EOS on a src pad; EOS events only propagate downstream.
     * Furthermore, some downstream events have to be serialized with data flow,
     * like EOS, while some can travel out-of-band, like #GST_EVENT_FLUSH_START. If
     * the event needs to be serialized with data flow, this function will take the
     * pad's stream lock while calling its event function.
     * 
     * To find out whether an event type is upstream, downstream, or downstream and
     * serialized, see #GstEventTypeFlags, gst_event_type_get_flags(),
     * #GST_EVENT_IS_UPSTREAM, #GST_EVENT_IS_DOWNSTREAM, and
     * #GST_EVENT_IS_SERIALIZED. Note that in practice that an application or
     * plugin doesn't need to bother itself with this information; the core handles
     * all necessary locks and checks.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Sets the given activate function for `pad`. The activate function will
     * dispatch to gst_pad_activate_mode() to perform the actual activation.
     * Only makes sense to set on sink pads.
     * 
     * Call this function if your sink pad can start a pull-based task.
     */
    setActivateFunctionFull(activate: Gst.PadActivateFunction): void
    /**
     * Sets the given activate_mode function for the pad. An activate_mode function
     * prepares the element for data passing.
     */
    setActivatemodeFunctionFull(activatemode: Gst.PadActivateModeFunction): void
    /**
     * Activates or deactivates the given pad.
     * Normally called from within core state change functions.
     * 
     * If `active,` makes sure the pad is active. If it is already active, either in
     * push or pull mode, just return. Otherwise dispatches to the pad's activate
     * function to perform the actual activation.
     * 
     * If not `active,` calls gst_pad_activate_mode() with the pad's current mode
     * and a %FALSE argument.
     */
    setActive(active: boolean): boolean
    /**
     * Sets the given chain function for the pad. The chain function is called to
     * process a #GstBuffer input buffer. see #GstPadChainFunction for more details.
     */
    setChainFunctionFull(chain: Gst.PadChainFunction): void
    /**
     * Sets the given chain list function for the pad. The chainlist function is
     * called to process a #GstBufferList input buffer list. See
     * #GstPadChainListFunction for more details.
     */
    setChainListFunctionFull(chainlist: Gst.PadChainListFunction): void
    /**
     * Set the given private data gpointer on the pad.
     * This function can only be used by the element that owns the pad.
     * No locking is performed in this function.
     */
    setElementPrivate(priv?: object | null): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFullFunctionFull(event: Gst.PadEventFullFunction): void
    /**
     * Sets the given event handler for the pad.
     */
    setEventFunctionFull(event: Gst.PadEventFunction): void
    /**
     * Sets the given getrange function for the pad. The getrange function is
     * called to produce a new #GstBuffer to start the processing pipeline. see
     * #GstPadGetRangeFunction for a description of the getrange function.
     */
    setGetrangeFunctionFull(get: Gst.PadGetRangeFunction): void
    /**
     * Sets the given internal link iterator function for the pad.
     */
    setIterateInternalLinksFunctionFull(iterintlink: Gst.PadIterIntLinkFunction): void
    /**
     * Sets the given link function for the pad. It will be called when
     * the pad is linked with another pad.
     * 
     * The return value #GST_PAD_LINK_OK should be used when the connection can be
     * made.
     * 
     * The return value #GST_PAD_LINK_REFUSED should be used when the connection
     * cannot be made for some reason.
     * 
     * If `link` is installed on a source pad, it should call the #GstPadLinkFunction
     * of the peer sink pad, if present.
     */
    setLinkFunctionFull(link: Gst.PadLinkFunction): void
    /**
     * Set the offset that will be applied to the running time of `pad`.
     */
    setOffset(offset: number): void
    /**
     * Set the given query function for the pad.
     */
    setQueryFunctionFull(query: Gst.PadQueryFunction): void
    /**
     * Sets the given unlink function for the pad. It will be called
     * when the pad is unlinked.
     * 
     * Note that the pad's lock is already held when the unlink
     * function is called, so most pad functions cannot be called
     * from within the callback.
     */
    setUnlinkFunctionFull(unlink: Gst.PadUnlinkFunction): void
    /**
     * Starts a task that repeatedly calls `func` with `user_data`. This function
     * is mostly used in pad activation functions to start the dataflow.
     * The #GST_PAD_STREAM_LOCK of `pad` will automatically be acquired
     * before `func` is called.
     */
    startTask(func: Gst.TaskFunction): boolean
    /**
     * Iterates all sticky events on `pad` and calls `foreach_func` for every
     * event. If `foreach_func` returns %FALSE the iteration is immediately stopped.
     */
    stickyEventsForeach(foreachFunc: Gst.PadStickyEventsForeachFunction): void
    /**
     * Stop the task of `pad`. This function will also make sure that the
     * function executed by the task will effectively stop if not called
     * from the GstTaskFunction.
     * 
     * This function will deadlock if called from the GstTaskFunction of
     * the task. Use gst_task_pause() instead.
     * 
     * Regardless of whether the pad has a task, the stream lock is acquired and
     * released so as to ensure that streaming through this pad has finished.
     */
    stopTask(): boolean
    /**
     * Store the sticky `event` on `pad`
     */
    storeStickyEvent(event: Gst.Event): Gst.FlowReturn
    /**
     * Unlinks the source pad from the sink pad. Will emit the #GstPad::unlinked
     * signal on both pads.
     */
    unlink(sinkpad: Gst.Pad): boolean
    /**
     * A helper function you can use that sets the FIXED_CAPS flag
     * This way the default CAPS query will always return the negotiated caps
     * or in case the pad is not negotiated, the padtemplate caps.
     * 
     * The negotiated caps are the caps of the last CAPS event that passed on the
     * pad. Use this function on a pad that, once it negotiated to a CAPS, cannot
     * be renegotiated to something else.
     */
    useFixedCaps(): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of GstBase-1.0.GstBase.AggregatorPad */
    connect(sigName: "buffer-consumed", callback: ((object: Gst.Buffer) => void)): number
    on(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: (object: Gst.Buffer) => void): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", object: Gst.Buffer): void
    /* Signals of Gst-1.0.Gst.Pad */
    /**
     * Signals that a pad has been linked to the peer pad.
     */
    connect(sigName: "linked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "linked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "linked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "linked", peer: Gst.Pad): void
    /**
     * Signals that a pad has been unlinked from the peer pad.
     */
    connect(sigName: "unlinked", callback: ((peer: Gst.Pad) => void)): number
    on(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unlinked", callback: (peer: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unlinked", callback: (peer: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "unlinked", peer: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::converter-config", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-last-buffer-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-after-eos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::emit-signals", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::template", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoAggregatorParallelConvertPad_ConstructProps)
    _init (config?: VideoAggregatorParallelConvertPad_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoBufferPool_ConstructProps extends Gst.BufferPool_ConstructProps {
}
class VideoBufferPool {
    /* Fields of Gst-1.0.Gst.BufferPool */
    /**
     * the parent structure
     */
    readonly object: Gst.Object
    /**
     * whether the pool is currently gathering back outstanding buffers
     */
    readonly flushing: number
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gst-1.0.Gst.BufferPool */
    /**
     * Acquires a buffer from `pool`. `buffer` should point to a memory location that
     * can hold a pointer to the new buffer.
     * 
     * `params` can contain optional parameters to influence the allocation.
     */
    acquireBuffer(params?: Gst.BufferPoolAcquireParams | null): [ /* returnType */ Gst.FlowReturn, /* buffer */ Gst.Buffer ]
    /**
     * Gets a copy of the current configuration of the pool. This configuration
     * can be modified and used for the gst_buffer_pool_set_config() call.
     */
    getConfig(): Gst.Structure
    /**
     * Gets a %NULL terminated array of string with supported bufferpool options for
     * `pool`. An option would typically be enabled with
     * gst_buffer_pool_config_add_option().
     */
    getOptions(): string[]
    /**
     * Checks if the bufferpool supports `option`.
     */
    hasOption(option: string): boolean
    /**
     * Checks if `pool` is active. A pool can be activated with the
     * gst_buffer_pool_set_active() call.
     */
    isActive(): boolean
    /**
     * Releases `buffer` to `pool`. `buffer` should have previously been allocated from
     * `pool` with gst_buffer_pool_acquire_buffer().
     * 
     * This function is usually called automatically when the last ref on `buffer`
     * disappears.
     */
    releaseBuffer(buffer: Gst.Buffer): void
    /**
     * Controls the active state of `pool`. When the pool is inactive, new calls to
     * gst_buffer_pool_acquire_buffer() will return with %GST_FLOW_FLUSHING.
     * 
     * Activating the bufferpool will preallocate all resources in the pool based on
     * the configuration of the pool.
     * 
     * Deactivating will free the resources again when there are no outstanding
     * buffers. When there are outstanding buffers, they will be freed as soon as
     * they are all returned to the pool.
     */
    setActive(active: boolean): boolean
    /**
     * Sets the configuration of the pool. If the pool is already configured, and
     * the configuration hasn't changed, this function will return %TRUE. If the
     * pool is active, this method will return %FALSE and active configuration
     * will remain. Buffers allocated from this pool must be returned or else this
     * function will do nothing and return %FALSE.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the pool. A default and mandatory set of parameters can be configured with
     * gst_buffer_pool_config_set_params(), gst_buffer_pool_config_set_allocator()
     * and gst_buffer_pool_config_add_option().
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_buffer_pool_get_config().
     * 
     * This function takes ownership of `config`.
     */
    setConfig(config: Gst.Structure): boolean
    /**
     * Enables or disables the flushing state of a `pool` without freeing or
     * allocating buffers.
     */
    setFlushing(flushing: boolean): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoBufferPool_ConstructProps)
    _init (config?: VideoBufferPool_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoBufferPool
    static $gtype: GObject.Type
}
interface VideoDecoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags?: VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints?: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames?: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors?: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval?: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos?: boolean
}
class VideoDecoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     */
    allocateOutputFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     */
    allocateOutputFrameWithParams(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     */
    dropFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     */
    dropSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     */
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     */
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     */
    getFrame(frameNumber: number): VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     */
    getInputSubframeIndex(frame: VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     */
    getMaxDecodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     */
    getProcessedSubframeIndex(frame: VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     */
    haveLastSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     */
    releaseFrame(frame: VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     */
    requestSyncPoint(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     */
    setInterlacedOutputState(fmt: VideoFormat, interlaceMode: VideoInterlaceMode, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     */
    setOutputState(fmt: VideoFormat, width: number, height: number, reference?: VideoCodecState | null): VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoDecoder_ConstructProps)
    _init (config?: VideoDecoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface VideoEncoder_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoEncoder */
    /**
     * Minimum interval between force-keyunit requests in nanoseconds. See
     * gst_video_encoder_set_min_force_key_unit_interval() for more details.
     */
    minForceKeyUnitInterval?: number
    qos?: boolean
}
class VideoEncoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoEncoder */
    /**
     * Minimum interval between force-keyunit requests in nanoseconds. See
     * gst_video_encoder_set_min_force_key_unit_interval() for more details.
     */
    minForceKeyUnitInterval: number
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoEncoder */
    /**
     * Helper function that allocates a buffer to hold an encoded video frame
     * for `encoder'`s current #GstVideoCodecState.
     */
    allocateOutputBuffer(size: number): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold an encoded video frame for `encoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     */
    allocateOutputFrame(frame: VideoCodecFrame, size: number): Gst.FlowReturn
    /**
     * `frame` must have a valid encoded data buffer, whose metadata fields
     * are then appropriately set according to frame data or no buffer at
     * all if the frame should be dropped.
     * It is subsequently pushed downstream or provided to `pre_push`.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     */
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * If multiple subframes are produced for one input frame then use this method
     * for each subframe, except for the last one. Before calling this function,
     * you need to fill frame->output_buffer with the encoded buffer to push.
     * 
     * You must call #gst_video_encoder_finish_frame() for the last sub-frame
     * to tell the encoder that the frame has been fully encoded.
     * 
     * This function will change the metadata of `frame` and frame->output_buffer
     * will be pushed downstream.
     */
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoEncoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     */
    getFrame(frameNumber: number): VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): VideoCodecFrame[]
    /**
     * Query the configured encoding latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible encoding time for `frame` that will
     * allow it to encode and arrive in time (as determined by QoS events).
     * In particular, a negative result means encoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * 
     * If no QoS events have been received from downstream, or if
     * #GstVideoEncoder:qos is disabled this function returns #G_MAXINT64.
     */
    getMaxEncodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    /**
     * Returns the minimum force-keyunit interval, see gst_video_encoder_set_min_force_key_unit_interval()
     * for more details.
     */
    getMinForceKeyUnitInterval(): Gst.ClockTime
    /**
     * Get the oldest unfinished pending #GstVideoCodecFrame
     */
    getOldestFrame(): VideoCodecFrame
    /**
     * Get the current #GstVideoCodecState
     */
    getOutputState(): VideoCodecState
    /**
     * Checks if `encoder` is currently configured to handle Quality-of-Service
     * events from downstream.
     */
    isQosEnabled(): boolean
    /**
     * Sets the video encoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_video_encoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements (e.g. muxers).
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Set the codec headers to be sent downstream whenever requested.
     */
    setHeaders(headers: Gst.Buffer[]): void
    /**
     * Informs baseclass of encoding latency.
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets the minimum interval for requesting keyframes based on force-keyunit
     * events. Setting this to 0 will allow to handle every event, setting this to
     * %GST_CLOCK_TIME_NONE causes force-keyunit events to be ignored.
     */
    setMinForceKeyUnitInterval(interval: Gst.ClockTime): void
    /**
     * Request minimal value for PTS passed to handle_frame.
     * 
     * For streams with reordered frames this can be used to ensure that there
     * is enough time to accommodate first DTS, which may be less than first PTS
     */
    setMinPts(minPts: Gst.ClockTime): void
    /**
     * Creates a new #GstVideoCodecState with the specified caps as the output state
     * for the encoder.
     * Any previously set output state on `encoder` will be replaced by the newly
     * created one.
     * 
     * The specified `caps` should not contain any resolution, pixel-aspect-ratio,
     * framerate, codec-data, .... Those should be specified instead in the returned
     * #GstVideoCodecState.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspect ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_encoder_finish_frame().
     */
    setOutputState(caps: Gst.Caps, reference?: VideoCodecState | null): VideoCodecState
    /**
     * Configures `encoder` to handle Quality-of-Service events from downstream.
     */
    setQosEnabled(enabled: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Methods of Gst-1.0.Gst.Preset */
    /**
     * Delete the given preset.
     */
    deletePreset(name: string): boolean
    /**
     * Gets the `value` for an existing meta data `tag`. Meta data `tag` names can be
     * something like e.g. "comment". Returned values need to be released when done.
     */
    getMeta(name: string, tag: string): [ /* returnType */ boolean, /* value */ string ]
    /**
     * Get a copy of preset names as a %NULL terminated string array.
     */
    getPresetNames(): string[]
    /**
     * Get a the names of the GObject properties that can be used for presets.
     */
    getPropertyNames(): string[]
    /**
     * Check if one can add new presets, change existing ones and remove presets.
     */
    isEditable(): boolean
    /**
     * Load the given preset.
     */
    loadPreset(name: string): boolean
    /**
     * Renames a preset. If there is already a preset by the `new_name` it will be
     * overwritten.
     */
    renamePreset(oldName: string, newName: string): boolean
    /**
     * Save the current object settings as a preset under the given name. If there
     * is already a preset by this `name` it will be overwritten.
     */
    savePreset(name: string): boolean
    /**
     * Sets a new `value` for an existing meta data item or adds a new item. Meta
     * data `tag` names can be something like e.g. "comment". Supplying %NULL for the
     * `value` will unset an existing value.
     */
    setMeta(name: string, tag: string, value?: string | null): boolean
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoEncoder_ConstructProps)
    _init (config?: VideoEncoder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the directory for application specific presets if set by the
     * application.
     */
    static getAppDir(): string | null
    /**
     * Sets an extra directory as an absolute path that should be considered when
     * looking for presets. Any presets in the application dir will shadow the
     * system presets.
     */
    static setAppDir(appDir: string): boolean
    static $gtype: GObject.Type
}
interface VideoFilter_ConstructProps extends GstBase.BaseTransform_ConstructProps {
}
class VideoFilter {
    /* Properties of GstBase-1.0.GstBase.BaseTransform */
    qos: boolean
    /* Fields of GstBase-1.0.GstBase.BaseTransform */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly srcpad: Gst.Pad
    readonly haveSegment: boolean
    readonly segment: Gst.Segment
    readonly queuedBuf: Gst.Buffer
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseTransform */
    /**
     * Lets #GstBaseTransform sub-classes know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool | null
    /**
     * See if `trans` is configured as a in_place transform.
     */
    isInPlace(): boolean
    /**
     * See if `trans` is configured as a passthrough transform.
     */
    isPassthrough(): boolean
    /**
     * Queries if the transform will handle QoS.
     */
    isQosEnabled(): boolean
    /**
     * Negotiates src pad caps with downstream elements if the source pad is
     * marked as needing reconfiguring. Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in
     * any case. But marks it again if negotiation fails.
     * 
     * Do not call this in the #GstBaseTransformClass::transform or
     * #GstBaseTransformClass::transform_ip vmethod. Call this in
     * #GstBaseTransformClass::submit_input_buffer,
     * #GstBaseTransformClass::prepare_output_buffer or in
     * #GstBaseTransformClass::generate_output _before_ any output buffer is
     * allocated.
     * 
     * It will be default be called when handling an ALLOCATION query or at the
     * very beginning of the default #GstBaseTransformClass::submit_input_buffer
     * implementation.
     */
    reconfigure(): boolean
    /**
     * Instructs `trans` to request renegotiation upstream. This function is
     * typically called after properties on the transform were set that
     * influence the input format.
     */
    reconfigureSink(): void
    /**
     * Instructs `trans` to renegotiate a new downstream transform on the next
     * buffer. This function is typically called after properties on the transform
     * were set that influence the output format.
     */
    reconfigureSrc(): void
    /**
     * If `gap_aware` is %FALSE (the default), output buffers will have the
     * %GST_BUFFER_FLAG_GAP flag unset.
     * 
     * If set to %TRUE, the element must handle output buffers with this flag set
     * correctly, i.e. it can assume that the buffer contains neutral data but must
     * unset the flag if the output is no neutral data.
     * 
     * MT safe.
     */
    setGapAware(gapAware: boolean): void
    /**
     * Determines whether a non-writable buffer will be copied before passing
     * to the transform_ip function.
     * 
     *   * Always %TRUE if no transform function is implemented.
     *   * Always %FALSE if ONLY transform function is implemented.
     * 
     * MT safe.
     */
    setInPlace(inPlace: boolean): void
    /**
     * Set passthrough mode for this filter by default. This is mostly
     * useful for filters that do not care about negotiation.
     * 
     * Always %TRUE for filters which don't implement either a transform
     * or transform_ip or generate_output method.
     * 
     * MT safe.
     */
    setPassthrough(passthrough: boolean): void
    /**
     * If `prefer_passthrough` is %TRUE (the default), `trans` will check and
     * prefer passthrough caps from the list of caps returned by the
     * transform_caps vmethod.
     * 
     * If set to %FALSE, the element must order the caps returned from the
     * transform_caps function in such a way that the preferred format is
     * first in the list. This can be interesting for transforms that can do
     * passthrough transforms but prefer to do something else, like a
     * capsfilter.
     * 
     * MT safe.
     */
    setPreferPassthrough(preferPassthrough: boolean): void
    /**
     * Enable or disable QoS handling in the transform.
     * 
     * MT safe.
     */
    setQosEnabled(enabled: boolean): void
    /**
     * Set the QoS parameters in the transform. This function is called internally
     * when a QOS event is received but subclasses can provide custom information
     * when needed.
     * 
     * MT safe.
     */
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    /**
     * Updates the srcpad caps and sends the caps downstream. This function
     * can be used by subclasses when they have already negotiated their caps
     * but found a change in them (or computed new information). This way,
     * they can notify downstream about that change without losing any
     * buffer.
     */
    updateSrcCaps(updatedCaps: Gst.Caps): boolean
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoFilter_ConstructProps)
    _init (config?: VideoFilter_ConstructProps): void
    static $gtype: GObject.Type
}
class VideoMultiviewFlagsSet {
    static name: string
}
interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    /* Constructor properties of GstVideo-1.0.GstVideo.VideoSink */
    /**
     * Whether to show video frames during preroll. If set to %FALSE, video
     * frames will only be rendered in PLAYING state.
     */
    showPrerollFrame?: boolean
}
class VideoSink {
    /* Properties of GstVideo-1.0.GstVideo.VideoSink */
    /**
     * Whether to show video frames during preroll. If set to %FALSE, video
     * frames will only be rendered in PLAYING state.
     */
    showPrerollFrame: boolean
    /* Properties of GstBase-1.0.GstBase.BaseSink */
    /**
     * If set to %TRUE, the basesink will perform asynchronous state changes.
     * When set to %FALSE, the sink will not signal the parent when it prerolls.
     * Use this option when dealing with sparse streams or when synchronisation is
     * not required.
     */
    async: boolean
    /**
     * The amount of bytes to pull when operating in pull mode.
     */
    blocksize: number
    /**
     * Enable the last-sample property. If %FALSE, basesink doesn't keep a
     * reference to the last buffer arrived and the last-sample property is always
     * set to %NULL. This can be useful if you need buffers to be released as soon
     * as possible, eg. if you're using a buffer pool.
     */
    enableLastSample: boolean
    /**
     * The last buffer that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails. This property
     * can be %NULL when the sink has not yet received a buffer.
     */
    readonly lastSample: Gst.Sample
    /**
     * Control the maximum amount of bits that will be rendered per second.
     * Setting this property to a value bigger than 0 will make the sink delay
     * rendering of the buffers when it would exceed to max-bitrate.
     */
    maxBitrate: number
    maxLateness: number
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     */
    processingDeadline: number
    qos: boolean
    /**
     * The additional delay between synchronisation and actual rendering of the
     * media. This property will add additional latency to the device in order to
     * make other sinks compensate for the delay.
     */
    renderDelay: number
    /**
     * Various #GstBaseSink statistics. This property returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate"  G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    readonly stats: Gst.Structure
    sync: boolean
    /**
     * The time to insert between buffers. This property can be used to control
     * the maximum amount of buffers per second to render. Setting this property
     * to a value bigger than 0 will make the sink create THROTTLE QoS events.
     */
    throttleTime: number
    /**
     * Controls the final synchronisation, a negative value will render the buffer
     * earlier while a positive value delays playback. This property can be
     * used to fix synchronisation in bad files.
     */
    tsOffset: number
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    readonly element: Gst.Element
    readonly sinkpad: Gst.Pad
    readonly padMode: Gst.PadMode
    readonly offset: number
    readonly canActivatePull: boolean
    readonly canActivatePush: boolean
    readonly prerollLock: GLib.Mutex
    readonly prerollCond: GLib.Cond
    readonly eos: boolean
    readonly needPreroll: boolean
    readonly havePreroll: boolean
    readonly playingAsync: boolean
    readonly haveNewsegment: boolean
    readonly segment: Gst.Segment
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    /**
     * If the `sink` spawns its own thread for pulling buffers from upstream it
     * should call this method after it has pulled a buffer. If the element needed
     * to preroll, this function will perform the preroll and will then block
     * until the element state is changed.
     * 
     * This function should be called with the PREROLL_LOCK held.
     */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    /**
     * Get the number of bytes that the sink will pull when it is operating in pull
     * mode.
     */
    getBlocksize(): number
    /**
     * Checks if `sink` is currently configured to drop buffers which are outside
     * the current segment
     */
    getDropOutOfSegment(): boolean
    /**
     * Get the last sample that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails.
     * 
     * The #GstCaps on the sample can be used to determine the type of the buffer.
     * 
     * Free-function: gst_sample_unref
     */
    getLastSample(): Gst.Sample | null
    /**
     * Get the currently configured latency.
     */
    getLatency(): Gst.ClockTime
    /**
     * Get the maximum amount of bits per second that the sink will render.
     */
    getMaxBitrate(): number
    /**
     * Gets the max lateness value. See gst_base_sink_set_max_lateness() for
     * more details.
     */
    getMaxLateness(): number
    /**
     * Get the processing deadline of `sink`. see
     * gst_base_sink_set_processing_deadline() for more information about
     * the processing deadline.
     */
    getProcessingDeadline(): Gst.ClockTime
    /**
     * Get the render delay of `sink`. see gst_base_sink_set_render_delay() for more
     * information about the render delay.
     */
    getRenderDelay(): Gst.ClockTime
    /**
     * Return various #GstBaseSink statistics. This function returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate" G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    getStats(): Gst.Structure
    /**
     * Checks if `sink` is currently configured to synchronize against the
     * clock.
     */
    getSync(): boolean
    /**
     * Get the time that will be inserted between frames to control the
     * maximum buffers per second.
     */
    getThrottleTime(): number
    /**
     * Get the synchronisation offset of `sink`.
     */
    getTsOffset(): Gst.ClockTimeDiff
    /**
     * Checks if `sink` is currently configured to perform asynchronous state
     * changes to PAUSED.
     */
    isAsyncEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to store the last received sample in
     * the last-sample property.
     */
    isLastSampleEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to send Quality-of-Service events
     * upstream.
     */
    isQosEnabled(): boolean
    /**
     * Query the sink for the latency parameters. The latency will be queried from
     * the upstream elements. `live` will be %TRUE if `sink` is configured to
     * synchronize against the clock. `upstream_live` will be %TRUE if an upstream
     * element is live.
     * 
     * If both `live` and `upstream_live` are %TRUE, the sink will want to compensate
     * for the latency introduced by the upstream elements by setting the
     * `min_latency` to a strictly positive value.
     * 
     * This function is mostly used by subclasses.
     */
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Configures `sink` to perform all state changes asynchronously. When async is
     * disabled, the sink will immediately go to PAUSED instead of waiting for a
     * preroll buffer. This feature is useful if the sink does not synchronize
     * against the clock or when it is dealing with sparse streams.
     */
    setAsyncEnabled(enabled: boolean): void
    /**
     * Set the number of bytes that the sink will pull when it is operating in pull
     * mode.
     */
    setBlocksize(blocksize: number): void
    /**
     * Configure `sink` to drop buffers which are outside the current segment
     */
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    /**
     * Configures `sink` to store the last received sample in the last-sample
     * property.
     */
    setLastSampleEnabled(enabled: boolean): void
    /**
     * Set the maximum amount of bits per second that the sink will render.
     */
    setMaxBitrate(maxBitrate: number): void
    /**
     * Sets the new max lateness value to `max_lateness`. This value is
     * used to decide if a buffer should be dropped or not based on the
     * buffer timestamp and the current clock time. A value of -1 means
     * an unlimited time.
     */
    setMaxLateness(maxLateness: number): void
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     * 
     * This function is usually called by subclasses.
     */
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    /**
     * Configures `sink` to send Quality-of-Service events upstream.
     */
    setQosEnabled(enabled: boolean): void
    /**
     * Set the render delay in `sink` to `delay`. The render delay is the time
     * between actual rendering of a buffer and its synchronisation time. Some
     * devices might delay media rendering which can be compensated for with this
     * function.
     * 
     * After calling this function, this sink will report additional latency and
     * other sinks will adjust their latency to delay the rendering of their media.
     * 
     * This function is usually called by subclasses.
     */
    setRenderDelay(delay: Gst.ClockTime): void
    /**
     * Configures `sink` to synchronize on the clock or not. When
     * `sync` is %FALSE, incoming samples will be played as fast as
     * possible. If `sync` is %TRUE, the timestamps of the incoming
     * buffers will be used to schedule the exact render time of its
     * contents.
     */
    setSync(sync: boolean): void
    /**
     * Set the time that will be inserted between rendered buffers. This
     * can be used to control the maximum buffers per second that the sink
     * will render.
     */
    setThrottleTime(throttle: number): void
    /**
     * Adjust the synchronisation of `sink` with `offset`. A negative value will
     * render buffers earlier than their timestamp. A positive value will delay
     * rendering. This function can be used to fix playback of badly timestamped
     * buffers.
     */
    setTsOffset(offset: Gst.ClockTimeDiff): void
    /**
     * This function will wait for preroll to complete and will then block until `time`
     * is reached. It is usually called by subclasses that use their own internal
     * synchronisation but want to let some synchronization (like EOS) be handled
     * by the base class.
     * 
     * This function should only be called with the PREROLL_LOCK held (like when
     * receiving an EOS event in the ::event vmethod or when handling buffers in
     * ::render).
     * 
     * The `time` argument should be the running_time of when the timeout should happen
     * and will be adjusted with any latency and offset configured in the sink.
     */
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    /**
     * This function will block until `time` is reached. It is usually called by
     * subclasses that use their own internal synchronisation.
     * 
     * If `time` is not valid, no synchronisation is done and %GST_CLOCK_BADTIME is
     * returned. Likewise, if synchronisation is disabled in the element or there
     * is no clock, no synchronisation is done and %GST_CLOCK_BADTIME is returned.
     * 
     * This function should only be called with the PREROLL_LOCK held, like when
     * receiving an EOS event in the #GstBaseSinkClass::event vmethod or when
     * receiving a buffer in
     * the #GstBaseSinkClass::render vmethod.
     * 
     * The `time` argument should be the running_time of when this method should
     * return and is not adjusted with any latency or offset configured in the
     * sink.
     */
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
    /**
     * If the #GstBaseSinkClass::render method performs its own synchronisation
     * against the clock it must unblock when going from PLAYING to the PAUSED state
     * and call this method before continuing to render the remaining data.
     * 
     * If the #GstBaseSinkClass::render method can block on something else than
     * the clock, it must also be ready to unblock immediately on
     * the #GstBaseSinkClass::unlock method and cause the
     * #GstBaseSinkClass::render method to immediately call this function.
     * In this case, the subclass must be prepared to continue rendering where it
     * left off if this function returns %GST_FLOW_OK.
     * 
     * This function will block until a state change to PLAYING happens (in which
     * case this function returns %GST_FLOW_OK) or the processing must be stopped due
     * to a state change to READY or a FLUSH event (in which case this function
     * returns %GST_FLOW_FLUSHING).
     * 
     * This function should only be called with the PREROLL_LOCK held, like in the
     * render function.
     */
    waitPreroll(): Gst.FlowReturn
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify::show-preroll-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-preroll-frame", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static centerRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
    static $gtype: GObject.Type
}
abstract class ColorBalanceChannelClass {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceChannelClass */
    /**
     * the parent class
     */
    readonly parent: GObject.ObjectClass
    readonly valueChanged: (channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class ColorBalanceInterface {
    /* Fields of GstVideo-1.0.GstVideo.ColorBalanceInterface */
    /**
     * the parent interface
     */
    readonly iface: GObject.TypeInterface
    readonly listChannels: (balance: ColorBalance) => ColorBalanceChannel[]
    readonly setValue: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    readonly getValue: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    readonly getBalanceType: (balance: ColorBalance) => ColorBalanceType
    readonly valueChanged: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    static name: string
}
abstract class NavigationInterface {
    /* Fields of GstVideo-1.0.GstVideo.NavigationInterface */
    /**
     * the parent interface
     */
    readonly iface: GObject.TypeInterface
    readonly sendEvent: (navigation: Navigation, structure: Gst.Structure) => void
    static name: string
}
class VideoAFDMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoAFDMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * 0 for progressive or field 1 and 1 for field 2
     */
    readonly field: number
    /**
     * #GstVideoAFDSpec that applies to `afd`
     */
    readonly spec: VideoAFDSpec
    /**
     * #GstVideoAFDValue AFD value
     */
    readonly afd: VideoAFDValue
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoAffineTransformationMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the column-major 4x4 transformation matrix
     */
    readonly matrix: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta */
    /**
     * Apply a transformation using the given 4x4 transformation matrix.
     * Performs the multiplication, meta->matrix X matrix.
     */
    applyMatrix(matrix: number[]): void
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoAggregatorClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorClass */
    readonly updateCaps: (videoaggregator: VideoAggregator, caps: Gst.Caps) => Gst.Caps
    readonly aggregateFrames: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly createOutputBuffer: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    readonly findBestFormat: (vagg: VideoAggregator, downstreamCaps: Gst.Caps, bestInfo: VideoInfo, atLeastOneAlpha: boolean) => void
    static name: string
}
abstract class VideoAggregatorConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadClass */
    readonly parentClass: VideoAggregatorPadClass
    readonly createConversionInfo: (pad: VideoAggregatorConvertPad, agg: VideoAggregator, conversionInfo: VideoInfo) => void
    static name: string
}
class VideoAggregatorConvertPadPrivate {
    static name: string
}
abstract class VideoAggregatorPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorPadClass */
    readonly parentClass: GstBase.AggregatorPadClass
    readonly updateConversionInfo: (pad: VideoAggregatorPad) => void
    readonly prepareFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => boolean
    readonly cleanFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    readonly prepareFrameStart: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => void
    readonly prepareFrameFinish: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    readonly gstReserved: object[]
    static name: string
}
class VideoAggregatorPadPrivate {
    static name: string
}
abstract class VideoAggregatorParallelConvertPadClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPadClass */
    readonly parentClass: VideoAggregatorConvertPadClass
    static name: string
}
class VideoAggregatorPrivate {
    static name: string
}
class VideoAlignment {
    /* Fields of GstVideo-1.0.GstVideo.VideoAlignment */
    /**
     * extra pixels on the top
     */
    readonly paddingTop: number
    /**
     * extra pixels on the bottom
     */
    readonly paddingBottom: number
    /**
     * extra pixels on the left side
     */
    readonly paddingLeft: number
    /**
     * extra pixels on the right side
     */
    readonly paddingRight: number
    /**
     * array with extra alignment requirements for the strides
     */
    readonly strideAlign: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoAlignment */
    /**
     * Set `align` to its default values with no padding and no alignment.
     */
    reset(): void
    static name: string
}
class VideoAncillary {
    /* Fields of GstVideo-1.0.GstVideo.VideoAncillary */
    /**
     * The Data Identifier
     */
    readonly dID: number
    /**
     * The Secondary Data Identifier (if type 2) or the Data
     *                     Block Number (if type 1)
     */
    readonly sDIDBlockNumber: number
    /**
     * The amount of data (in bytes) in `data` (max 255 bytes)
     */
    readonly dataCount: number
    /**
     * The user data content of the Ancillary packet.
     *    Does not contain the ADF, DID, SDID nor CS.
     */
    readonly data: Uint8Array
    static name: string
}
class VideoBarMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoBarMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * 0 for progressive or field 1 and 1 for field 2
     */
    readonly field: number
    /**
     * if true then bar data specifies letterbox, otherwise pillarbox
     */
    readonly isLetterbox: boolean
    /**
     * If `is_letterbox` is true, then the value specifies the
     *      last line of a horizontal letterbox bar area at top of reconstructed frame.
     *      Otherwise, it specifies the last horizontal luminance sample of a vertical pillarbox
     *      bar area at the left side of the reconstructed frame
     */
    readonly barData1: number
    /**
     * If `is_letterbox` is true, then the value specifies the
     *      first line of a horizontal letterbox bar area at bottom of reconstructed frame.
     *      Otherwise, it specifies the first horizontal
     *      luminance sample of a vertical pillarbox bar area at the right side of the reconstructed frame.
     */
    readonly barData2: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoBufferPoolClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoBufferPoolClass */
    readonly parentClass: Gst.BufferPoolClass
    static name: string
}
class VideoBufferPoolPrivate {
    static name: string
}
class VideoCaptionMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCaptionMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * The type of Closed Caption contained in the meta.
     */
    readonly captionType: VideoCaptionType
    /**
     * The Closed Caption data.
     */
    readonly data: Uint8Array
    /**
     * The size in bytes of `data`
     */
    readonly size: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoChromaResample {
    /* Methods of GstVideo-1.0.GstVideo.VideoChromaResample */
    /**
     * Free `resample`
     */
    free(): void
    /**
     * The resampler must be fed `n_lines` at a time. The first line should be
     * at `offset`.
     */
    getInfo(nLines: number, offset: number): void
    static name: string
}
class VideoCodecAlphaMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the encoded alpha frame
     */
    readonly buffer: Gst.Buffer
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoCodecFrame {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecFrame */
    /**
     * Unique identifier for the frame. Use this if you need
     *       to get hold of the frame later (like when data is being decoded).
     *       Typical usage in decoders is to set this on the opaque value provided
     *       to the library and get back the frame using gst_video_decoder_get_frame()
     */
    readonly systemFrameNumber: number
    /**
     * Decoding timestamp
     */
    readonly dts: Gst.ClockTime
    /**
     * Presentation timestamp
     */
    readonly pts: Gst.ClockTime
    /**
     * Duration of the frame
     */
    readonly duration: Gst.ClockTime
    /**
     * Distance in frames from the last synchronization point.
     */
    readonly distanceFromSync: number
    /**
     * the input #GstBuffer that created this frame. The buffer is owned
     *           by the frame and references to the frame instead of the buffer should
     *           be kept.
     */
    readonly inputBuffer: Gst.Buffer
    /**
     * the output #GstBuffer. Implementations should set this either
     *           directly, or by using the
     *           gst_video_decoder_allocate_output_frame() or
     *           gst_video_decoder_allocate_output_buffer() methods. The buffer is
     *           owned by the frame and references to the frame instead of the
     *           buffer should be kept.
     */
    readonly outputBuffer: Gst.Buffer
    /**
     * Running time when the frame will be used.
     */
    readonly deadline: Gst.ClockTime
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecFrame */
    /**
     * Gets private data set on the frame by the subclass via
     * gst_video_codec_frame_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Increases the refcount of the given frame by one.
     */
    ref(): VideoCodecFrame
    /**
     * Sets `user_data` on the frame and the #GDestroyNotify that will be called when
     * the frame is freed. Allows to attach private data by the subclass to frames.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     */
    setUserData(notify: GLib.DestroyNotify): void
    /**
     * Decreases the refcount of the frame. If the refcount reaches 0, the frame
     * will be freed.
     */
    unref(): void
    static name: string
}
class VideoCodecState {
    /* Fields of GstVideo-1.0.GstVideo.VideoCodecState */
    /**
     * The #GstVideoInfo describing the stream
     */
    readonly info: VideoInfo
    /**
     * The #GstCaps used in the caps negotiation of the pad.
     */
    readonly caps: Gst.Caps
    /**
     * a #GstBuffer corresponding to the
     *     'codec_data' field of a stream, or NULL.
     */
    readonly codecData: Gst.Buffer
    /**
     * The #GstCaps for allocation query and pool
     *     negotiation. Since: 1.10
     */
    readonly allocationCaps: Gst.Caps
    /**
     * Mastering display color volume information (HDR metadata) for the stream.
     */
    readonly masteringDisplayInfo: VideoMasteringDisplayInfo
    /**
     * Content light level information for the stream.
     */
    readonly contentLightLevel: VideoContentLightLevel
    /* Methods of GstVideo-1.0.GstVideo.VideoCodecState */
    /**
     * Increases the refcount of the given state by one.
     */
    ref(): VideoCodecState
    /**
     * Decreases the refcount of the state. If the refcount reaches 0, the state
     * will be freed.
     */
    unref(): void
    static name: string
}
class VideoColorPrimariesInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorPrimariesInfo */
    /**
     * a #GstVideoColorPrimaries
     */
    readonly primaries: VideoColorPrimaries
    /**
     * reference white x coordinate
     */
    readonly wx: number
    /**
     * reference white y coordinate
     */
    readonly wy: number
    /**
     * red x coordinate
     */
    readonly rx: number
    /**
     * red y coordinate
     */
    readonly ry: number
    /**
     * green x coordinate
     */
    readonly gx: number
    /**
     * green y coordinate
     */
    readonly gy: number
    /**
     * blue x coordinate
     */
    readonly bx: number
    /**
     * blue y coordinate
     */
    readonly by: number
    static name: string
}
class VideoColorimetry {
    /* Fields of GstVideo-1.0.GstVideo.VideoColorimetry */
    /**
     * the color range. This is the valid range for the samples.
     *         It is used to convert the samples to Y'PbPr values.
     */
    readonly range: VideoColorRange
    /**
     * the color matrix. Used to convert between Y'PbPr and
     *          non-linear RGB (R'G'B')
     */
    readonly matrix: VideoColorMatrix
    /**
     * the transfer function. used to convert between R'G'B' and RGB
     */
    readonly transfer: VideoTransferFunction
    /**
     * color primaries. used to convert between R'G'B' and CIE XYZ
     */
    readonly primaries: VideoColorPrimaries
    /* Methods of GstVideo-1.0.GstVideo.VideoColorimetry */
    /**
     * Parse the colorimetry string and update `cinfo` with the parsed
     * values.
     */
    fromString(color: string): boolean
    /**
     * Compare the 2 colorimetry sets for equality
     */
    isEqual(other: VideoColorimetry): boolean
    /**
     * Check if the colorimetry information in `info` matches that of the
     * string `color`.
     */
    matches(color: string): boolean
    /**
     * Make a string representation of `cinfo`.
     */
    toString(): string | null
    static name: string
}
class VideoContentLightLevel {
    /* Fields of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    /**
     * the maximum content light level
     *   (abbreviated to MaxCLL) in candelas per square meter (cd/m^2 and nit)
     */
    readonly maxContentLightLevel: number
    /**
     * the maximum frame average light level
     *   (abbreviated to MaxFLL) in candelas per square meter (cd/m^2 and nit)
     */
    readonly maxFrameAverageLightLevel: number
    /* Methods of GstVideo-1.0.GstVideo.VideoContentLightLevel */
    /**
     * Parse `caps` and update `linfo`
     */
    addToCaps(caps: Gst.Caps): boolean
    /**
     * Parse `caps` and update `linfo`
     */
    fromCaps(caps: Gst.Caps): boolean
    /**
     * Parse the value of content-light-level caps field and update `minfo`
     * with the parsed values.
     */
    fromString(level: string): boolean
    /**
     * Initialize `linfo`
     */
    init(): void
    /**
     * Checks equality between `linfo` and `other`.
     */
    isEqual(other: VideoContentLightLevel): boolean
    /**
     * Convert `linfo` to its string representation.
     */
    toString(): string
    static name: string
}
class VideoConverter {
    /* Methods of GstVideo-1.0.GstVideo.VideoConverter */
    /**
     * Convert the pixels of `src` into `dest` using `convert`.
     * 
     * If #GST_VIDEO_CONVERTER_OPT_ASYNC_TASKS is %TRUE then this function will
     * return immediately and needs to be followed by a call to
     * gst_video_converter_frame_finish().
     */
    frame(src: VideoFrame, dest: VideoFrame): void
    /**
     * Wait for a previous async conversion performed using
     * gst_video_converter_frame() to complete.
     */
    frameFinish(): void
    /**
     * Free `convert`
     */
    free(): void
    /**
     * Get the current configuration of `convert`.
     */
    getConfig(): Gst.Structure
    /**
     * Set `config` as extra configuration for `convert`.
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_video_converter_get_config().
     * 
     * Look at the `GST_VIDEO_CONVERTER_OPT_*` fields to check valid configuration
     * option and values.
     */
    setConfig(config: Gst.Structure): boolean
    static name: string
}
class VideoCropMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoCropMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the horizontal offset
     */
    readonly x: number
    /**
     * the vertical offset
     */
    readonly y: number
    /**
     * the cropped width
     */
    readonly width: number
    /**
     * the cropped height
     */
    readonly height: number
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoDecoderClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoDecoderClass */
    readonly open: (decoder: VideoDecoder) => boolean
    readonly close: (decoder: VideoDecoder) => boolean
    readonly start: (decoder: VideoDecoder) => boolean
    readonly stop: (decoder: VideoDecoder) => boolean
    readonly parse: (decoder: VideoDecoder, frame: VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean) => Gst.FlowReturn
    readonly setFormat: (decoder: VideoDecoder, state: VideoCodecState) => boolean
    readonly reset: (decoder: VideoDecoder, hard: boolean) => boolean
    readonly finish: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly handleFrame: (decoder: VideoDecoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly sinkEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly srcEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    readonly negotiate: (decoder: VideoDecoder) => boolean
    readonly decideAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly proposeAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly flush: (decoder: VideoDecoder) => boolean
    readonly sinkQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly srcQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    readonly getcaps: (decoder: VideoDecoder, filter: Gst.Caps) => Gst.Caps
    readonly drain: (decoder: VideoDecoder) => Gst.FlowReturn
    readonly transformMeta: (decoder: VideoDecoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    readonly handleMissingData: (decoder: VideoDecoder, timestamp: Gst.ClockTime, duration: Gst.ClockTime) => boolean
    static name: string
}
class VideoDecoderPrivate {
    static name: string
}
abstract class VideoDirectionInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoDirectionInterface */
    /**
     * parent interface type.
     */
    readonly iface: GObject.TypeInterface
    static name: string
}
class VideoDither {
    /* Methods of GstVideo-1.0.GstVideo.VideoDither */
    /**
     * Free `dither`
     */
    free(): void
    /**
     * Dither `width` pixels starting from offset `x` in `line` using `dither`.
     * 
     * `y` is the line number of `line` in the output image.
     */
    line(line: object | null, x: number, y: number, width: number): void
    static name: string
}
abstract class VideoEncoderClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoEncoderClass */
    readonly open: (encoder: VideoEncoder) => boolean
    readonly close: (encoder: VideoEncoder) => boolean
    readonly start: (encoder: VideoEncoder) => boolean
    readonly stop: (encoder: VideoEncoder) => boolean
    readonly setFormat: (encoder: VideoEncoder, state: VideoCodecState) => boolean
    readonly handleFrame: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly reset: (encoder: VideoEncoder, hard: boolean) => boolean
    readonly finish: (encoder: VideoEncoder) => Gst.FlowReturn
    readonly prePush: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    readonly getcaps: (enc: VideoEncoder, filter: Gst.Caps) => Gst.Caps
    readonly sinkEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly srcEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    readonly negotiate: (encoder: VideoEncoder) => boolean
    readonly decideAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly proposeAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly flush: (encoder: VideoEncoder) => boolean
    readonly sinkQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly srcQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    readonly transformMeta: (encoder: VideoEncoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    static name: string
}
class VideoEncoderPrivate {
    static name: string
}
abstract class VideoFilterClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoFilterClass */
    /**
     * the parent class structure
     */
    readonly parentClass: GstBase.BaseTransformClass
    readonly setInfo: (filter: VideoFilter, incaps: Gst.Caps, inInfo: VideoInfo, outcaps: Gst.Caps, outInfo: VideoInfo) => boolean
    readonly transformFrame: (filter: VideoFilter, inframe: VideoFrame, outframe: VideoFrame) => Gst.FlowReturn
    readonly transformFrameIp: (trans: VideoFilter, frame: VideoFrame) => Gst.FlowReturn
    static name: string
}
class VideoFormatInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoFormatInfo */
    /**
     * #GstVideoFormat
     */
    readonly format: VideoFormat
    /**
     * string representation of the format
     */
    readonly name: string
    /**
     * use readable description of the format
     */
    readonly description: string
    /**
     * #GstVideoFormatFlags
     */
    readonly flags: VideoFormatFlags
    /**
     * The number of bits used to pack data items. This can be less than 8
     *    when multiple pixels are stored in a byte. for values > 8 multiple bytes
     *    should be read according to the endianness flag before applying the shift
     *    and mask.
     */
    readonly bits: number
    /**
     * the number of components in the video format.
     */
    readonly nComponents: number
    /**
     * the number of bits to shift away to get the component data
     */
    readonly shift: number[]
    /**
     * the depth in bits for each component
     */
    readonly depth: number[]
    /**
     * the pixel stride of each component. This is the amount of
     *    bytes to the pixel immediately to the right. When bits < 8, the stride is
     *    expressed in bits. For 24-bit RGB, this would be 3 bytes, for example,
     *    while it would be 4 bytes for RGBx or ARGB.
     */
    readonly pixelStride: number[]
    /**
     * the number of planes for this format. The number of planes can be
     *    less than the amount of components when multiple components are packed into
     *    one plane.
     */
    readonly nPlanes: number
    /**
     * the plane number where a component can be found
     */
    readonly plane: number[]
    /**
     * the offset in the plane where the first pixel of the components
     *    can be found.
     */
    readonly poffset: number[]
    /**
     * subsampling factor of the width for the component. Use
     *     GST_VIDEO_SUB_SCALE to scale a width.
     */
    readonly wSub: number[]
    /**
     * subsampling factor of the height for the component. Use
     *     GST_VIDEO_SUB_SCALE to scale a height.
     */
    readonly hSub: number[]
    /**
     * the format of the unpacked pixels. This format must have the
     *     #GST_VIDEO_FORMAT_FLAG_UNPACK flag set.
     */
    readonly unpackFormat: VideoFormat
    /**
     * an unpack function for this format
     */
    readonly unpackFunc: VideoFormatUnpack
    /**
     * the amount of lines that will be packed
     */
    readonly packLines: number
    /**
     * an pack function for this format
     */
    readonly packFunc: VideoFormatPack
    /**
     * The tiling mode
     */
    readonly tileMode: VideoTileMode
    /**
     * The width of a tile, in bytes, represented as a shift
     */
    readonly tileWs: number
    /**
     * The height of a tile, in bytes, represented as a shift
     */
    readonly tileHs: number
    /* Methods of GstVideo-1.0.GstVideo.VideoFormatInfo */
    /**
     * Fill `components` with the number of all the components packed in plane `p`
     * for the format `info`. A value of -1 in `components` indicates that no more
     * components are packed in the plane.
     */
    component(plane: number): /* components */ number
    /**
     * Extrapolate `plane` stride from the first stride of an image. This helper is
     * useful to support legacy API were only one stride is supported.
     */
    extrapolateStride(plane: number, stride: number): number
    static name: string
}
class VideoFrame {
    /* Fields of GstVideo-1.0.GstVideo.VideoFrame */
    /**
     * the #GstVideoInfo
     */
    readonly info: VideoInfo
    /**
     * #GstVideoFrameFlags for the frame
     */
    readonly flags: VideoFrameFlags
    /**
     * the mapped buffer
     */
    readonly buffer: Gst.Buffer
    /**
     * pointer to metadata if any
     */
    readonly meta: object
    /**
     * id of the mapped frame. the id can for example be used to
     *   identify the frame in case of multiview video.
     */
    readonly id: number
    /**
     * pointers to the plane data
     */
    readonly data: object[]
    /**
     * mappings of the planes
     */
    readonly map: Gst.MapInfo[]
    /* Methods of GstVideo-1.0.GstVideo.VideoFrame */
    /**
     * Copy the contents from `src` to `dest`.
     * 
     * Note: Since: 1.18, `dest` dimensions are allowed to be
     * smaller than `src` dimensions.
     */
    copy(src: VideoFrame): boolean
    /**
     * Copy the plane with index `plane` from `src` to `dest`.
     * 
     * Note: Since: 1.18, `dest` dimensions are allowed to be
     * smaller than `src` dimensions.
     */
    copyPlane(src: VideoFrame, plane: number): boolean
    /**
     * Unmap the memory previously mapped with gst_video_frame_map.
     */
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Use `info` and `buffer` to fill in the values of `frame`. `frame` is usually
     * allocated on the stack, and you will pass the address to the #GstVideoFrame
     * structure allocated on the stack; gst_video_frame_map() will then fill in
     * the structures with the various video-specific information you need to access
     * the pixels of the video buffer. You can then use accessor macros such as
     * GST_VIDEO_FRAME_COMP_DATA(), GST_VIDEO_FRAME_PLANE_DATA(),
     * GST_VIDEO_FRAME_COMP_STRIDE(), GST_VIDEO_FRAME_PLANE_STRIDE() etc.
     * to get to the pixels.
     * 
     * 
     * ```c
     *   GstVideoFrame vframe;
     *   ...
     *   // set RGB pixels to black one at a time
     *   if (gst_video_frame_map (&vframe, video_info, video_buffer, GST_MAP_WRITE)) {
     *     guint8 *pixels = GST_VIDEO_FRAME_PLANE_DATA (vframe, 0);
     *     guint stride = GST_VIDEO_FRAME_PLANE_STRIDE (vframe, 0);
     *     guint pixel_stride = GST_VIDEO_FRAME_COMP_PSTRIDE (vframe, 0);
     * 
     *     for (h = 0; h < height; ++h) {
     *       for (w = 0; w < width; ++w) {
     *         guint8 *pixel = pixels + h * stride + w * pixel_stride;
     * 
     *         memset (pixel, 0, pixel_stride);
     *       }
     *     }
     * 
     *     gst_video_frame_unmap (&vframe);
     *   }
     *   ...
     * ```
     * 
     * 
     * All video planes of `buffer` will be mapped and the pointers will be set in
     * `frame->`data.
     * 
     * The purpose of this function is to make it easy for you to get to the video
     * pixels in a generic way, without you having to worry too much about details
     * such as whether the video data is allocated in one contiguous memory chunk
     * or multiple memory chunks (e.g. one for each plane); or if custom strides
     * and custom plane offsets are used or not (as signalled by GstVideoMeta on
     * each buffer). This function will just fill the #GstVideoFrame structure
     * with the right values and if you use the accessor macros everything will
     * just work and you can access the data easily. It also maps the underlying
     * memory chunks for you.
     */
    static map(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
    /**
     * Use `info` and `buffer` to fill in the values of `frame` with the video frame
     * information of frame `id`.
     * 
     * When `id` is -1, the default frame is mapped. When `id` != -1, this function
     * will return %FALSE when there is no GstVideoMeta with that id.
     * 
     * All video planes of `buffer` will be mapped and the pointers will be set in
     * `frame->`data.
     */
    static mapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
}
class VideoGLTextureUploadMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * Orientation of the textures
     */
    readonly textureOrientation: VideoGLTextureOrientation
    /**
     * Number of textures that are generated
     */
    readonly nTextures: number
    /**
     * Type of each texture
     */
    readonly textureType: VideoGLTextureType[]
    /* Methods of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta */
    /**
     * Uploads the buffer which owns the meta to a specific texture ID.
     */
    upload(textureId: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoInfo */
    /**
     * the format info of the video
     */
    readonly finfo: VideoFormatInfo
    /**
     * the interlace mode
     */
    readonly interlaceMode: VideoInterlaceMode
    /**
     * additional video flags
     */
    readonly flags: VideoFlags
    /**
     * the width of the video
     */
    readonly width: number
    /**
     * the height of the video
     */
    readonly height: number
    /**
     * the default size of one frame
     */
    readonly size: number
    /**
     * the number of views for multiview video
     */
    readonly views: number
    /**
     * a #GstVideoChromaSite.
     */
    readonly chromaSite: VideoChromaSite
    /**
     * the colorimetry info
     */
    readonly colorimetry: VideoColorimetry
    /**
     * the pixel-aspect-ratio numerator
     */
    readonly parN: number
    /**
     * the pixel-aspect-ratio denominator
     */
    readonly parD: number
    /**
     * the framerate numerator
     */
    readonly fpsN: number
    /**
     * the framerate denominator
     */
    readonly fpsD: number
    /**
     * offsets of the planes
     */
    readonly offset: number[]
    /**
     * strides of the planes
     */
    readonly stride: number[]
    /* Methods of GstVideo-1.0.GstVideo.VideoInfo */
    /**
     * Adjust the offset and stride fields in `info` so that the padding and
     * stride alignment in `align` is respected.
     * 
     * Extra padding will be added to the right side when stride alignment padding
     * is required and `align` will be updated with the new padding values.
     */
    align(align: VideoAlignment): boolean
    /**
     * Extra padding will be added to the right side when stride alignment padding
     * is required and `align` will be updated with the new padding values.
     * 
     * This variant of gst_video_info_align() provides the updated size, in bytes,
     * of each video plane after the alignment, including all horizontal and vertical
     * paddings.
     * 
     * In case of GST_VIDEO_INTERLACE_MODE_ALTERNATE info, the returned sizes are the
     * ones used to hold a single field, not the full frame.
     */
    alignFull(align: VideoAlignment): [ /* returnType */ boolean, /* planeSize */ number | null ]
    /**
     * Converts among various #GstFormat types.  This function handles
     * GST_FORMAT_BYTES, GST_FORMAT_TIME, and GST_FORMAT_DEFAULT.  For
     * raw video, GST_FORMAT_DEFAULT corresponds to video frames.  This
     * function can be used to handle pad queries of the type GST_QUERY_CONVERT.
     */
    convert(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    /**
     * Copy a GstVideoInfo structure.
     */
    copy(): VideoInfo
    /**
     * Free a GstVideoInfo structure previously allocated with gst_video_info_new()
     * or gst_video_info_copy().
     */
    free(): void
    /**
     * Compares two #GstVideoInfo and returns whether they are equal or not
     */
    isEqual(other: VideoInfo): boolean
    /**
     * Set the default info for a video frame of `format` and `width` and `height`.
     * 
     * Note: This initializes `info` first, no values are preserved. This function
     * does not set the offsets correctly for interlaced vertically
     * subsampled formats.
     */
    setFormat(format: VideoFormat, width: number, height: number): boolean
    /**
     * Same as #gst_video_info_set_format but also allowing to set the interlaced
     * mode.
     */
    setInterlacedFormat(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    /**
     * Convert the values of `info` into a #GstCaps.
     */
    toCaps(): Gst.Caps
    static name: string
    static new(): VideoInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): VideoInfo
    static newFromCaps(caps: Gst.Caps): VideoInfo
    /**
     * Parse `caps` and update `info`.
     */
    static fromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
    /**
     * Initialize `info` with default values.
     */
    static init(): /* info */ VideoInfo
}
class VideoMasteringDisplayInfo {
    /* Fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    /**
     * the xy coordinates of primaries in the CIE 1931 color space.
     *   the index 0 contains red, 1 is for green and 2 is for blue.
     *   each value is normalized to 50000 (meaning that in unit of 0.00002)
     */
    readonly displayPrimaries: VideoMasteringDisplayInfoCoordinates[]
    /**
     * the xy coordinates of white point in the CIE 1931 color space.
     *   each value is normalized to 50000 (meaning that in unit of 0.00002)
     */
    readonly whitePoint: VideoMasteringDisplayInfoCoordinates
    /**
     * the maximum value of display luminance
     *   in unit of 0.0001 candelas per square metre (cd/m^2 and nit)
     */
    readonly maxDisplayMasteringLuminance: number
    /**
     * the minimum value of display luminance
     *   in unit of 0.0001 candelas per square metre (cd/m^2 and nit)
     */
    readonly minDisplayMasteringLuminance: number
    /* Methods of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo */
    /**
     * Set string representation of `minfo` to `caps`
     */
    addToCaps(caps: Gst.Caps): boolean
    /**
     * Parse `caps` and update `minfo`
     */
    fromCaps(caps: Gst.Caps): boolean
    /**
     * Initialize `minfo`
     */
    init(): void
    /**
     * Checks equality between `minfo` and `other`.
     */
    isEqual(other: VideoMasteringDisplayInfo): boolean
    /**
     * Convert `minfo` to its string representation
     */
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Extract #GstVideoMasteringDisplayInfo from `mastering`
     */
    static fromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
}
class VideoMasteringDisplayInfoCoordinates {
    /* Fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfoCoordinates */
    /**
     * the x coordinate of CIE 1931 color space in unit of 0.00002.
     */
    readonly x: number
    /**
     * the y coordinate of CIE 1931 color space in unit of 0.00002.
     */
    readonly y: number
    static name: string
}
class VideoMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the buffer this metadata belongs to
     */
    readonly buffer: Gst.Buffer
    /**
     * additional video flags
     */
    readonly flags: VideoFrameFlags
    /**
     * the video format
     */
    readonly format: VideoFormat
    /**
     * identifier of the frame
     */
    readonly id: number
    /**
     * the video width
     */
    readonly width: number
    /**
     * the video height
     */
    readonly height: number
    /**
     * the number of planes in the image
     */
    readonly nPlanes: number
    /**
     * array of offsets for the planes. This field might not always be
     *          valid, it is used by the default implementation of `map`.
     */
    readonly offset: number[]
    /**
     * array of strides for the planes. This field might not always be
     *          valid, it is used by the default implementation of `map`.
     */
    readonly stride: number[]
    readonly map: (meta: VideoMeta, plane: number, info: Gst.MapInfo, data: object, stride: number, flags: Gst.MapFlags) => boolean
    readonly unmap: (meta: VideoMeta, plane: number, info: Gst.MapInfo) => boolean
    /**
     * the paddings and alignment constraints of the video buffer.
     * It is up to the caller of `gst_buffer_add_video_meta_full()` to set it
     * using gst_video_meta_set_alignment(), if they did not it defaults
     * to no padding and no alignment. Since: 1.18
     */
    readonly alignment: VideoAlignment
    /* Methods of GstVideo-1.0.GstVideo.VideoMeta */
    /**
     * Compute the padded height of each plane from `meta` (padded size
     * divided by stride).
     * 
     * It is not valid to call this function with a meta associated to a
     * TILED video format.
     */
    getPlaneHeight(): [ /* returnType */ boolean, /* planeHeight */ number[] ]
    /**
     * Compute the size, in bytes, of each video plane described in `meta` including
     * any padding and alignment constraint defined in `meta->`alignment.
     */
    getPlaneSize(): [ /* returnType */ boolean, /* planeSize */ number[] ]
    /**
     * Set the alignment of `meta` to `alignment`. This function checks that
     * the paddings defined in `alignment` are compatible with the strides
     * defined in `meta` and will fail to update if they are not.
     */
    setAlignment(alignment: VideoAlignment): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoMetaTransform {
    /* Fields of GstVideo-1.0.GstVideo.VideoMetaTransform */
    /**
     * the input #GstVideoInfo
     */
    readonly inInfo: VideoInfo
    /**
     * the output #GstVideoInfo
     */
    readonly outInfo: VideoInfo
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the #GQuark for the "gst-video-scale" metadata transform operation.
     */
    static scaleGetQuark(): GLib.Quark
}
abstract class VideoOrientationInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOrientationInterface */
    /**
     * parent interface type.
     */
    readonly iface: GObject.TypeInterface
    readonly getHflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly getVflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    readonly getHcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly getVcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    readonly setHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    readonly setHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    readonly setVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    static name: string
}
class VideoOverlayComposition {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayComposition */
    /**
     * Adds an overlay rectangle to an existing overlay composition object. This
     * must be done right after creating the overlay composition.
     */
    addRectangle(rectangle: VideoOverlayRectangle): void
    /**
     * Blends the overlay rectangles in `comp` on top of the raw video data
     * contained in `video_buf`. The data in `video_buf` must be writable and
     * mapped appropriately.
     * 
     * Since `video_buf` data is read and will be modified, it ought be
     * mapped with flag GST_MAP_READWRITE.
     */
    blend(videoBuf: VideoFrame): boolean
    /**
     * Makes a copy of `comp` and all contained rectangles, so that it is possible
     * to modify the composition and contained rectangles (e.g. add additional
     * rectangles or change the render co-ordinates or render dimension). The
     * actual overlay pixel data buffers contained in the rectangles are not
     * copied.
     */
    copy(): VideoOverlayComposition
    /**
     * Returns the `n-th` #GstVideoOverlayRectangle contained in `comp`.
     */
    getRectangle(n: number): VideoOverlayRectangle
    /**
     * Returns the sequence number of this composition. Sequence numbers are
     * monotonically increasing and unique for overlay compositions and rectangles
     * (meaning there will never be a rectangle with the same sequence number as
     * a composition).
     */
    getSeqnum(): number
    /**
     * Takes ownership of `comp` and returns a version of `comp` that is writable
     * (i.e. can be modified). Will either return `comp` right away, or create a
     * new writable copy of `comp` and unref `comp` itself. All the contained
     * rectangles will also be copied, but the actual overlay pixel data buffers
     * contained in the rectangles are not copied.
     */
    makeWritable(): VideoOverlayComposition
    /**
     * Returns the number of #GstVideoOverlayRectangle<!-- -->s contained in `comp`.
     */
    nRectangles(): number
    static name: string
    static new(rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition
    constructor(rectangle?: VideoOverlayRectangle | null)
    /* Static methods and pseudo-constructors */
    static new(rectangle?: VideoOverlayRectangle | null): VideoOverlayComposition
}
class VideoOverlayCompositionMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoOverlayCompositionMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the attached #GstVideoOverlayComposition
     */
    readonly overlay: VideoOverlayComposition
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
abstract class VideoOverlayInterface {
    /* Fields of GstVideo-1.0.GstVideo.VideoOverlayInterface */
    /**
     * parent interface type.
     */
    readonly iface: GObject.TypeInterface
    readonly expose: (overlay: VideoOverlay) => void
    readonly handleEvents: (overlay: VideoOverlay, handleEvents: boolean) => void
    readonly setRenderRectangle: (overlay: VideoOverlay, x: number, y: number, width: number, height: number) => void
    readonly setWindowHandle: (overlay: VideoOverlay, handle: number) => void
    static name: string
}
class VideoOverlayRectangle {
    /* Methods of GstVideo-1.0.GstVideo.VideoOverlayRectangle */
    /**
     * Makes a copy of `rectangle,` so that it is possible to modify it
     * (e.g. to change the render co-ordinates or render dimension). The
     * actual overlay pixel data buffers contained in the rectangle are not
     * copied.
     */
    copy(): VideoOverlayRectangle
    /**
     * Retrieves the flags associated with a #GstVideoOverlayRectangle.
     * This is useful if the caller can handle both premultiplied alpha and
     * non premultiplied alpha, for example. By knowing whether the rectangle
     * uses premultiplied or not, it can request the pixel data in the format
     * it is stored in, to avoid unnecessary conversion.
     */
    getFlags(): VideoOverlayFormatFlags
    /**
     * Retrieves the global-alpha value associated with a #GstVideoOverlayRectangle.
     */
    getGlobalAlpha(): number
    getPixelsArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    getPixelsRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the pixel data as it is. This is useful if the caller can
     * do the scaling itself when handling the overlaying. The rectangle will
     * need to be scaled to the render dimensions, which can be retrieved using
     * gst_video_overlay_rectangle_get_render_rectangle().
     */
    getPixelsUnscaledArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the pixel data as it is. This is useful if the caller can
     * do the scaling itself when handling the overlaying. The rectangle will
     * need to be scaled to the render dimensions, which can be retrieved using
     * gst_video_overlay_rectangle_get_render_rectangle().
     */
    getPixelsUnscaledAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the pixel data as it is. This is useful if the caller can
     * do the scaling itself when handling the overlaying. The rectangle will
     * need to be scaled to the render dimensions, which can be retrieved using
     * gst_video_overlay_rectangle_get_render_rectangle().
     */
    getPixelsUnscaledRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the render position and render dimension of the overlay
     * rectangle on the video.
     */
    getRenderRectangle(): [ /* returnType */ boolean, /* renderX */ number | null, /* renderY */ number | null, /* renderWidth */ number | null, /* renderHeight */ number | null ]
    /**
     * Returns the sequence number of this rectangle. Sequence numbers are
     * monotonically increasing and unique for overlay compositions and rectangles
     * (meaning there will never be a rectangle with the same sequence number as
     * a composition).
     * 
     * Using the sequence number of a rectangle as an indicator for changed
     * pixel-data of a rectangle is dangereous. Some API calls, like e.g.
     * gst_video_overlay_rectangle_set_global_alpha(), automatically update
     * the per rectangle sequence number, which is misleading for renderers/
     * consumers, that handle global-alpha themselves. For them  the
     * pixel-data returned by gst_video_overlay_rectangle_get_pixels_*()
     * won't be different for different global-alpha values. In this case a
     * renderer could also use the GstBuffer pointers as a hint for changed
     * pixel-data.
     */
    getSeqnum(): number
    /**
     * Sets the global alpha value associated with a #GstVideoOverlayRectangle. Per-
     * pixel alpha values are multiplied with this value. Valid
     * values: 0 <= global_alpha <= 1; 1 to deactivate.
     * 
     * `rectangle` must be writable, meaning its refcount must be 1. You can
     * make the rectangles inside a #GstVideoOverlayComposition writable using
     * gst_video_overlay_composition_make_writable() or
     * gst_video_overlay_composition_copy().
     */
    setGlobalAlpha(globalAlpha: number): void
    /**
     * Sets the render position and dimensions of the rectangle on the video.
     * This function is mainly for elements that modify the size of the video
     * in some way (e.g. through scaling or cropping) and need to adjust the
     * details of any overlays to match the operation that changed the size.
     * 
     * `rectangle` must be writable, meaning its refcount must be 1. You can
     * make the rectangles inside a #GstVideoOverlayComposition writable using
     * gst_video_overlay_composition_make_writable() or
     * gst_video_overlay_composition_copy().
     */
    setRenderRectangle(renderX: number, renderY: number, renderWidth: number, renderHeight: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static newRaw(pixels: Gst.Buffer, renderX: number, renderY: number, renderWidth: number, renderHeight: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
}
class VideoRectangle {
    /* Fields of GstVideo-1.0.GstVideo.VideoRectangle */
    /**
     * X coordinate of rectangle's top-left point
     */
    readonly x: number
    /**
     * Y coordinate of rectangle's top-left point
     */
    readonly y: number
    /**
     * width of the rectangle
     */
    readonly w: number
    /**
     * height of the rectangle
     */
    readonly h: number
    static name: string
}
class VideoRegionOfInterestMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * GQuark describing the semantic of the Roi (f.i. a face, a pedestrian)
     */
    readonly roiType: GLib.Quark
    /**
     * identifier of this particular ROI
     */
    readonly id: number
    /**
     * identifier of its parent ROI, used f.i. for ROI hierarchisation.
     */
    readonly parentId: number
    /**
     * x component of upper-left corner
     */
    readonly x: number
    /**
     * y component of upper-left corner
     */
    readonly y: number
    /**
     * bounding box width
     */
    readonly w: number
    /**
     * bounding box height
     */
    readonly h: number
    /**
     * list of #GstStructure containing element-specific params for downstream,
     *          see gst_video_region_of_interest_meta_add_param(). (Since: 1.14)
     */
    readonly params: object[]
    /* Methods of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta */
    /**
     * Attach element-specific parameters to `meta` meant to be used by downstream
     * elements which may handle this ROI.
     * The name of `s` is used to identify the element these parameters are meant for.
     * 
     * This is typically used to tell encoders how they should encode this specific region.
     * For example, a structure named "roi/x264enc" could be used to give the
     * QP offsets this encoder should use when encoding the region described in `meta`.
     * Multiple parameters can be defined for the same meta so different encoders
     * can be supported by cross platform applications).
     */
    addParam(s: Gst.Structure): void
    /**
     * Retrieve the parameter for `meta` having `name` as structure name,
     * or %NULL if there is none.
     */
    getParam(name: string): Gst.Structure | null
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoResampler {
    /* Fields of GstVideo-1.0.GstVideo.VideoResampler */
    /**
     * the input size
     */
    readonly inSize: number
    /**
     * the output size
     */
    readonly outSize: number
    /**
     * the maximum number of taps
     */
    readonly maxTaps: number
    /**
     * the number of phases
     */
    readonly nPhases: number
    /**
     * array with the source offset for each output element
     */
    readonly offset: number
    /**
     * array with the phase to use for each output element
     */
    readonly phase: number
    /**
     * array with new number of taps for each phase
     */
    readonly nTaps: number
    /**
     * the taps for all phases
     */
    readonly taps: number
    /* Methods of GstVideo-1.0.GstVideo.VideoResampler */
    /**
     * Clear a previously initialized #GstVideoResampler `resampler`.
     */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, nPhases: number, nTaps: number, shift: number, inSize: number, outSize: number, options: Gst.Structure): boolean
    static name: string
}
class VideoScaler {
    /* Methods of GstVideo-1.0.GstVideo.VideoScaler */
    /**
     * Scale a rectangle of pixels in `src` with `src_stride` to `dest` with
     * `dest_stride` using the horizontal scaler `hscaler` and the vertical
     * scaler `vscale`.
     * 
     * One or both of `hscale` and `vscale` can be NULL to only perform scaling in
     * one dimension or do a copy without scaling.
     * 
     * `x` and `y` are the coordinates in the destination image to process.
     */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: object | null, srcStride: number, dest: object | null, destStride: number, x: number, y: number, width: number, height: number): void
    /**
     * Free a previously allocated #GstVideoScaler `scale`.
     */
    free(): void
    /**
     * For a given pixel at `out_offset,` get the first required input pixel at
     * `in_offset` and the `n_taps` filter coefficients.
     * 
     * Note that for interlaced content, `in_offset` needs to be incremented with
     * 2 to get the next input line.
     */
    getCoeff(outOffset: number, inOffset: number, nTaps: number): number
    /**
     * Get the maximum number of taps for `scale`.
     */
    getMaxTaps(): number
    /**
     * Horizontally scale the pixels in `src` to `dest,` starting from `dest_offset`
     * for `width` samples.
     */
    horizontal(format: VideoFormat, src: object | null, dest: object | null, destOffset: number, width: number): void
    /**
     * Vertically combine `width` pixels in the lines in `src_lines` to `dest`.
     * `dest` is the location of the target line at `dest_offset` and
     * `srcs` are the input lines for `dest_offset`.
     */
    vertical(format: VideoFormat, srcLines: object | null, dest: object | null, destOffset: number, width: number): void
    static name: string
}
abstract class VideoSinkClass {
    /* Fields of GstVideo-1.0.GstVideo.VideoSinkClass */
    /**
     * the parent class structure
     */
    readonly parentClass: GstBase.BaseSinkClass
    readonly showFrame: (videoSink: VideoSink, buf: Gst.Buffer) => Gst.FlowReturn
    readonly setInfo: (videoSink: VideoSink, caps: Gst.Caps, info: VideoInfo) => boolean
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
class VideoTimeCode {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCode */
    /**
     * the corresponding #GstVideoTimeCodeConfig
     */
    readonly config: VideoTimeCodeConfig
    /**
     * the hours field of #GstVideoTimeCode
     */
    readonly hours: number
    /**
     * the minutes field of #GstVideoTimeCode
     */
    readonly minutes: number
    /**
     * the seconds field of #GstVideoTimeCode
     */
    readonly seconds: number
    /**
     * the frames field of #GstVideoTimeCode
     */
    readonly frames: number
    /**
     * Interlaced video field count
     */
    readonly fieldCount: number
    /* Methods of GstVideo-1.0.GstVideo.VideoTimeCode */
    /**
     * Adds or subtracts `frames` amount of frames to `tc`. tc needs to
     * contain valid data, as verified by gst_video_time_code_is_valid().
     */
    addFrames(frames: number): void
    /**
     * This makes a component-wise addition of `tc_inter` to `tc`. For example,
     * adding ("01:02:03:04", "00:01:00:00") will return "01:03:03:04".
     * When it comes to drop-frame timecodes,
     * adding ("00:00:00;00", "00:01:00:00") will return "00:01:00;02"
     * because of drop-frame oddities. However,
     * adding ("00:09:00;02", "00:01:00:00") will return "00:10:00;00"
     * because this time we can have an exact minute.
     */
    addInterval(tcInter: VideoTimeCodeInterval): VideoTimeCode | null
    /**
     * Initializes `tc` with empty/zero/NULL values and frees any memory
     * it might currently use.
     */
    clear(): void
    /**
     * Compares `tc1` and `tc2`. If both have latest daily jam information, it is
     * taken into account. Otherwise, it is assumed that the daily jam of both
     * `tc1` and `tc2` was at the same time. Both time codes must be valid.
     */
    compare(tc2: VideoTimeCode): number
    copy(): VideoTimeCode
    framesSinceDailyJam(): number
    /**
     * Frees `tc`.
     */
    free(): void
    /**
     * Adds one frame to `tc`.
     */
    incrementFrame(): void
    /**
     * `field_count` is 0 for progressive, 1 or 2 for interlaced.
     * `latest_daiy_jam` reference is stolen from caller.
     * 
     * Initializes `tc` with the given values.
     * The values are not checked for being in a valid range. To see if your
     * timecode actually has valid content, use gst_video_time_code_is_valid().
     */
    init(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): void
    /**
     * The resulting config->latest_daily_jam is set to midnight, and timecode is
     * set to the given time.
     * 
     * Will assert on invalid parameters, use gst_video_time_code_init_from_date_time_full()
     * for being able to handle invalid parameters.
     */
    initFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): void
    /**
     * The resulting config->latest_daily_jam is set to
     * midnight, and timecode is set to the given time.
     */
    initFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): boolean
    isValid(): boolean
    nsecSinceDailyJam(): number
    /**
     * The `tc`.config->latest_daily_jam is required to be non-NULL.
     */
    toDateTime(): GLib.DateTime | null
    toString(): string
    static name: string
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    constructor(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number)
    /* Static methods and pseudo-constructors */
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    static newEmpty(): VideoTimeCode
    static newFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromString(tcStr: string): VideoTimeCode
}
class VideoTimeCodeConfig {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeConfig */
    /**
     * Numerator of the frame rate
     */
    readonly fpsN: number
    /**
     * Denominator of the frame rate
     */
    readonly fpsD: number
    /**
     * the corresponding #GstVideoTimeCodeFlags
     */
    readonly flags: VideoTimeCodeFlags
    /**
     * The latest daily jam information, if present, or NULL
     */
    readonly latestDailyJam: GLib.DateTime
    static name: string
}
class VideoTimeCodeInterval {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeInterval */
    /**
     * the hours field of #GstVideoTimeCodeInterval
     */
    readonly hours: number
    /**
     * the minutes field of #GstVideoTimeCodeInterval
     */
    readonly minutes: number
    /**
     * the seconds field of #GstVideoTimeCodeInterval
     */
    readonly seconds: number
    /**
     * the frames field of #GstVideoTimeCodeInterval
     */
    readonly frames: number
    /* Methods of GstVideo-1.0.GstVideo.VideoTimeCodeInterval */
    /**
     * Initializes `tc` with empty/zero/NULL values.
     */
    clear(): void
    copy(): VideoTimeCodeInterval
    /**
     * Frees `tc`.
     */
    free(): void
    /**
     * Initializes `tc` with the given values.
     */
    init(hours: number, minutes: number, seconds: number, frames: number): void
    static name: string
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    constructor(hours: number, minutes: number, seconds: number, frames: number)
    /* Static methods and pseudo-constructors */
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    static newFromString(tcInterStr: string): VideoTimeCodeInterval
}
class VideoTimeCodeMeta {
    /* Fields of GstVideo-1.0.GstVideo.VideoTimeCodeMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the GstVideoTimeCode to attach
     */
    readonly tc: VideoTimeCode
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
class VideoVBIEncoder {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIEncoder */
    /**
     * Stores Video Ancillary data, according to SMPTE-291M specification.
     * 
     * Note that the contents of the data are always read as 8bit data (i.e. do not contain
     * the parity check bits).
     */
    addAncillary(composite: boolean, dID: number, sDIDBlockNumber: number, data: Uint8Array): boolean
    copy(): VideoVBIEncoder
    /**
     * Frees the `encoder`.
     */
    free(): void
    writeLine(data: number): void
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
    constructor(format: VideoFormat, pixelWidth: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
}
class VideoVBIParser {
    /* Methods of GstVideo-1.0.GstVideo.VideoVBIParser */
    /**
     * Provide a new line of data to the `parser`. Call gst_video_vbi_parser_get_ancillary()
     * to get the Ancillary data that might be present on that line.
     */
    addLine(data: Uint8Array): void
    copy(): VideoVBIParser
    /**
     * Frees the `parser`.
     */
    free(): void
    /**
     * Parse the line provided previously by gst_video_vbi_parser_add_line().
     */
    getAncillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
    static name: string
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
    constructor(format: VideoFormat, pixelWidth: number)
    /* Static methods and pseudo-constructors */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
}
}
export default GstVideo;