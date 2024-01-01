
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstvideo-1.0-import.d.ts';
    
/**
 * GstVideo-1.0
 */

import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * An enumeration indicating whether an element implements color balancing
 * operations in software or in dedicated hardware. In general, dedicated
 * hardware implementations (such as those provided by xvimagesink) are
 * preferred.
 */
export enum ColorBalanceType {
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
export enum NavigationCommand {
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
 * GstNavigation interface might send up the pipeline. Touch events have been
 * inspired by the libinput API, and have the same meaning here.
 */
export enum NavigationEventType {
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
    /**
     * An event describing a new touch point, which will be assigned an identifier
     * that is unique to it for the duration of its movement on the screen.
     * Use gst_navigation_event_parse_touch_event() to extract the details
     * from the event.
     */
    TOUCH_DOWN,
    /**
     * An event describing the movement of an active touch point across
     * the screen. Use gst_navigation_event_parse_touch_event() to extract
     * the details from the event.
     */
    TOUCH_MOTION,
    /**
     * An event describing a removed touch point. After this event,
     * its identifier may be reused for any new touch points.
     * Use gst_navigation_event_parse_touch_up_event() to extract the details
     * from the event.
     */
    TOUCH_UP,
    /**
     * An event signaling the end of a sequence of simultaneous touch events.
     */
    TOUCH_FRAME,
    /**
     * An event cancelling all currently active touch points.
     */
    TOUCH_CANCEL,
}
/**
 * A set of notifications that may be received on the bus when navigation
 * related status changes.
 */
export enum NavigationMessageType {
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
export enum NavigationQueryType {
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
export enum VideoAFDSpec {
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
export enum VideoAFDValue {
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
export enum VideoAlphaMode {
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
export enum VideoAncillaryDID {
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
export enum VideoAncillaryDID16 {
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
export enum VideoCaptionType {
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
export enum VideoChromaMethod {
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
export enum VideoChromaMode {
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
export enum VideoColorMatrix {
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
export enum VideoColorPrimaries {
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
export enum VideoColorRange {
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
export enum VideoDitherMethod {
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
export enum VideoFieldOrder {
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
export enum VideoFormat {
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
    /**
     * NV12 with 16x32 Y tiles and 16x16 UV tiles.
     */
    NV12_16L32S,
    /**
     * NV12 with 8x128 tiles in linear order.
     */
    NV12_8L128,
    /**
     * NV12 10bit big endian with 8x128 tiles in linear order.
     */
    NV12_10BE_8L128,
    /**
     * `GST_VIDEO_FORMAT_NV1`2_10LE40 with 4x4 pixels tiles (5 bytes
     *  per tile row). This format is produced by Verisilicon/Hantro decoders.
     */
    NV12_10LE40_4L4,
}
/**
 * The orientation of the GL texture.
 */
export enum VideoGLTextureOrientation {
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
export enum VideoGLTextureType {
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
export enum VideoGammaMode {
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
export enum VideoInterlaceMode {
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
export enum VideoMatrixMode {
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
export enum VideoMultiviewFramePacking {
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
export enum VideoMultiviewMode {
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
export enum VideoOrientationMethod {
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
export enum VideoPrimariesMode {
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
export enum VideoResamplerMethod {
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
export enum VideoTileMode {
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
export enum VideoTileType {
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
export enum VideoTransferFunction {
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
export enum VideoVBIParserResult {
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
 * Flags to indicate the state of modifier keys and mouse buttons
 * in events.
 * 
 * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
 * Apple, CapsLock or ShiftLock.
 * @bitfield 
 */
export enum NavigationModifierType {
    NONE,
    /**
     * the Shift key.
     */
    SHIFT_MASK,
    LOCK_MASK,
    /**
     * the Control key.
     */
    CONTROL_MASK,
    /**
     * the third modifier key
     */
    MOD1_MASK,
    /**
     * the fourth modifier key
     */
    MOD2_MASK,
    /**
     * the fifth modifier key
     */
    MOD3_MASK,
    /**
     * the sixth modifier key
     */
    MOD4_MASK,
    /**
     * the seventh modifier key
     */
    MOD5_MASK,
    /**
     * the first mouse button (usually the left button).
     */
    BUTTON1_MASK,
    /**
     * the second mouse button (usually the right button).
     */
    BUTTON2_MASK,
    /**
     * the third mouse button (usually the mouse wheel button or middle button).
     */
    BUTTON3_MASK,
    /**
     * the fourth mouse button (typically the "Back" button).
     */
    BUTTON4_MASK,
    /**
     * the fifth mouse button (typically the "forward" button).
     */
    BUTTON5_MASK,
    /**
     * the Super modifier
     */
    SUPER_MASK,
    /**
     * the Hyper modifier
     */
    HYPER_MASK,
    /**
     * the Meta modifier
     */
    META_MASK,
    /**
     * A mask covering all entries in #GdkModifierType.
     */
    MASK,
    /**
     * the Meta modifier
     */
    _META_MASK,
}
/**
 * Additional video buffer flags. These flags can potentially be used on any
 * buffers carrying closed caption data, or video data - even encoded data.
 * 
 * Note that these are only valid for #GstCaps of type: video/... and caption/...
 * They can conflict with other extended buffer flags.
 * @bitfield 
 */
export enum VideoBufferFlags {
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
     * If the #GstBuffer is interlaced, then only the
     *                                     first field (as defined by the %GST_VIDEO_BUFFER_FLAG_TFF
     *                                     flag setting) is to be displayed (Since: 1.16).
     */
    _ONEFIELD,
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
 * @bitfield 
 */
export enum VideoChromaFlags {
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
 * @bitfield 
 */
export enum VideoChromaSite {
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
 * @bitfield 
 */
export enum VideoCodecFrameFlags {
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
 * @bitfield 
 */
export enum VideoDecoderRequestSyncPointFlags {
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
 * @bitfield 
 */
export enum VideoDitherFlags {
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
 * @bitfield 
 */
export enum VideoFlags {
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
 * @bitfield 
 */
export enum VideoFormatFlags {
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
    /**
     * The tile size varies per plane according to the subsampling.
     */
    SUBTILES,
}
/**
 * Extra video frame flags
 * @bitfield 
 */
export enum VideoFrameFlags {
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
     * The video frame has one field
     */
    _ONEFIELD,
    /**
     * The video frame has the bottom field
     *     only. This is the same as GST_VIDEO_FRAME_FLAG_ONEFIELD
     *     (GST_VIDEO_FRAME_FLAG_TFF flag unset) (Since: 1.16).
     */
    BOTTOM_FIELD,
}
/**
 * Additional mapping flags for gst_video_frame_map().
 * @bitfield 
 */
export enum VideoFrameMapFlags {
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
 * @bitfield 
 */
export enum VideoMultiviewFlags {
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
 * @bitfield 
 */
export enum VideoOverlayFormatFlags {
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
 * @bitfield 
 */
export enum VideoPackFlags {
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
 * @bitfield 
 */
export enum VideoResamplerFlags {
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
 * @bitfield 
 */
export enum VideoScalerFlags {
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
 * @bitfield 
 */
export enum VideoTimeCodeFlags {
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
export const BUFFER_POOL_OPTION_VIDEO_AFFINE_TRANSFORMATION_META: string
/**
 * A bufferpool option to enable extra padding. When a bufferpool supports this
 * option, gst_buffer_pool_config_set_video_alignment() can be called.
 * 
 * When this option is enabled on the bufferpool,
 * #GST_BUFFER_POOL_OPTION_VIDEO_META should also be enabled.
 */
export const BUFFER_POOL_OPTION_VIDEO_ALIGNMENT: string
/**
 * An option that can be activated on a bufferpool to request gl texture upload
 * meta on buffers from the pool.
 * 
 * When this option is enabled on the bufferpool,
 * `GST_BUFFER_POOL_OPTION_VIDEO_META` should also be enabled.
 */
export const BUFFER_POOL_OPTION_VIDEO_GL_TEXTURE_UPLOAD_META: string
/**
 * An option that can be activated on bufferpool to request video metadata
 * on buffers from the pool.
 */
export const BUFFER_POOL_OPTION_VIDEO_META: string
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
export const CAPS_FEATURE_FORMAT_INTERLACED: string
export const CAPS_FEATURE_META_GST_VIDEO_AFFINE_TRANSFORMATION_META: string
export const CAPS_FEATURE_META_GST_VIDEO_GL_TEXTURE_UPLOAD_META: string
export const CAPS_FEATURE_META_GST_VIDEO_META: string
export const CAPS_FEATURE_META_GST_VIDEO_OVERLAY_COMPOSITION: string
/**
 * This metadata stays relevant as long as video colorspace is unchanged.
 */
export const META_TAG_VIDEO_COLORSPACE_STR: string
/**
 * This metadata stays relevant as long as video orientation is unchanged.
 */
export const META_TAG_VIDEO_ORIENTATION_STR: string
/**
 * This metadata stays relevant as long as video size is unchanged.
 */
export const META_TAG_VIDEO_SIZE_STR: string
/**
 * This metadata is relevant for video streams.
 */
export const META_TAG_VIDEO_STR: string
export const VIDEO_COLORIMETRY_BT2020: string
export const VIDEO_COLORIMETRY_BT2020_10: string
export const VIDEO_COLORIMETRY_BT2100_HLG: string
export const VIDEO_COLORIMETRY_BT2100_PQ: string
export const VIDEO_COLORIMETRY_BT601: string
export const VIDEO_COLORIMETRY_BT709: string
export const VIDEO_COLORIMETRY_SMPTE240M: string
export const VIDEO_COLORIMETRY_SRGB: string
export const VIDEO_COMP_A: number
export const VIDEO_COMP_B: number
export const VIDEO_COMP_G: number
export const VIDEO_COMP_INDEX: number
export const VIDEO_COMP_PALETTE: number
export const VIDEO_COMP_R: number
export const VIDEO_COMP_U: number
export const VIDEO_COMP_V: number
export const VIDEO_COMP_Y: number
/**
 * #GstVideoAlphaMode, the alpha mode to use.
 * Default is #GST_VIDEO_ALPHA_MODE_COPY.
 */
export const VIDEO_CONVERTER_OPT_ALPHA_MODE: string
/**
 * #G_TYPE_DOUBLE, the alpha color value to use.
 * Default to 1.0
 */
export const VIDEO_CONVERTER_OPT_ALPHA_VALUE: string
/**
 * #G_TYPE_BOOLEAN, whether gst_video_converter_frame() will return immediately
 * without waiting for the conversion to complete.  A subsequent
 * gst_video_converter_frame_finish() must be performed to ensure completion of the
 * conversion before subsequent use.  Default %FALSE
 */
export const VIDEO_CONVERTER_OPT_ASYNC_TASKS: string
/**
 * #G_TYPE_UINT, the border color to use if #GST_VIDEO_CONVERTER_OPT_FILL_BORDER
 * is set to %TRUE. The color is in ARGB format.
 * Default 0xff000000
 */
export const VIDEO_CONVERTER_OPT_BORDER_ARGB: string
/**
 * #GstVideoChromaMode, set the chroma resample mode subsampled
 * formats. Default is #GST_VIDEO_CHROMA_MODE_FULL.
 */
export const VIDEO_CONVERTER_OPT_CHROMA_MODE: string
/**
 * #GstVideoChromaMethod, The resampler method to use for
 * chroma resampling. Other options for the resampler can be used, see
 * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_LINEAR
 */
export const VIDEO_CONVERTER_OPT_CHROMA_RESAMPLER_METHOD: string
/**
 * #G_TYPE_INT, height in the destination frame, default destination height
 */
export const VIDEO_CONVERTER_OPT_DEST_HEIGHT: string
/**
 * #G_TYPE_INT, width in the destination frame, default destination width
 */
export const VIDEO_CONVERTER_OPT_DEST_WIDTH: string
/**
 * #G_TYPE_INT, x position in the destination frame, default 0
 */
export const VIDEO_CONVERTER_OPT_DEST_X: string
/**
 * #G_TYPE_INT, y position in the destination frame, default 0
 */
export const VIDEO_CONVERTER_OPT_DEST_Y: string
/**
 * #GstVideoDitherMethod, The dither method to use when
 * changing bit depth.
 * Default is #GST_VIDEO_DITHER_BAYER.
 */
export const VIDEO_CONVERTER_OPT_DITHER_METHOD: string
/**
 * #G_TYPE_UINT, The quantization amount to dither to. Components will be
 * quantized to multiples of this value.
 * Default is 1
 */
export const VIDEO_CONVERTER_OPT_DITHER_QUANTIZATION: string
/**
 * #G_TYPE_BOOLEAN, if the destination rectangle does not fill the complete
 * destination image, render a border with
 * #GST_VIDEO_CONVERTER_OPT_BORDER_ARGB. Otherwise the unusded pixels in the
 * destination are untouched. Default %TRUE.
 */
export const VIDEO_CONVERTER_OPT_FILL_BORDER: string
/**
 * #GstVideoGammaMode, set the gamma mode.
 * Default is #GST_VIDEO_GAMMA_MODE_NONE.
 */
export const VIDEO_CONVERTER_OPT_GAMMA_MODE: string
/**
 * #GstVideoMatrixMode, set the color matrix conversion mode for
 * converting between Y'PbPr and non-linear RGB (R'G'B').
 * Default is #GST_VIDEO_MATRIX_MODE_FULL.
 */
export const VIDEO_CONVERTER_OPT_MATRIX_MODE: string
/**
 * #GstVideoPrimariesMode, set the primaries conversion mode.
 * Default is #GST_VIDEO_PRIMARIES_MODE_NONE.
 */
export const VIDEO_CONVERTER_OPT_PRIMARIES_MODE: string
/**
 * #GstVideoResamplerMethod, The resampler method to use for
 * resampling. Other options for the resampler can be used, see
 * the #GstVideoResampler. Default is #GST_VIDEO_RESAMPLER_METHOD_CUBIC
 */
export const VIDEO_CONVERTER_OPT_RESAMPLER_METHOD: string
/**
 * #G_TYPE_UINT, The number of taps for the resampler.
 * Default is 0: let the resampler choose a good value.
 */
export const VIDEO_CONVERTER_OPT_RESAMPLER_TAPS: string
/**
 * #G_TYPE_INT, source height to convert, default source height
 */
export const VIDEO_CONVERTER_OPT_SRC_HEIGHT: string
/**
 * #G_TYPE_INT, source width to convert, default source width
 */
export const VIDEO_CONVERTER_OPT_SRC_WIDTH: string
/**
 * #G_TYPE_INT, source x position to start conversion, default 0
 */
export const VIDEO_CONVERTER_OPT_SRC_X: string
/**
 * #G_TYPE_INT, source y position to start conversion, default 0
 */
export const VIDEO_CONVERTER_OPT_SRC_Y: string
/**
 * #G_TYPE_UINT, maximum number of threads to use. Default 1, 0 for the number
 * of cores.
 */
export const VIDEO_CONVERTER_OPT_THREADS: string
/**
 * Default maximum number of errors tolerated before signaling error.
 */
export const VIDEO_DECODER_MAX_ERRORS: number
/**
 * The name of the templates for the sink pad.
 */
export const VIDEO_DECODER_SINK_NAME: string
/**
 * The name of the templates for the source pad.
 */
export const VIDEO_DECODER_SRC_NAME: string
/**
 * The name of the templates for the sink pad.
 */
export const VIDEO_ENCODER_SINK_NAME: string
/**
 * The name of the templates for the source pad.
 */
export const VIDEO_ENCODER_SRC_NAME: string
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
export const VIDEO_FORMATS_ALL: string
export const VIDEO_FPS_RANGE: string
export const VIDEO_MAX_COMPONENTS: number
export const VIDEO_MAX_PLANES: number
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
export const VIDEO_RESAMPLER_OPT_CUBIC_B: string
/**
 * G_TYPE_DOUBLE, C parameter of the cubic filter. The C
 * parameter controls the Keys alpha value. Values between 0.0 and
 * 2.0 are accepted. 1/3 is the default.
 * 
 * See #GST_VIDEO_RESAMPLER_OPT_CUBIC_B for some more common values
 */
export const VIDEO_RESAMPLER_OPT_CUBIC_C: string
/**
 * G_TYPE_DOUBLE, specifies the size of filter envelope for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 1.0 and 5.0. 2.0 is the default.
 */
export const VIDEO_RESAMPLER_OPT_ENVELOPE: string
/**
 * G_TYPE_INT, limits the maximum number of taps to use.
 * 16 is the default.
 */
export const VIDEO_RESAMPLER_OPT_MAX_TAPS: string
/**
 * G_TYPE_DOUBLE, specifies sharpening of the filter for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 0.0 and 1.0. 0.0 is the default.
 */
export const VIDEO_RESAMPLER_OPT_SHARPEN: string
/**
 * G_TYPE_DOUBLE, specifies sharpness of the filter for
 * `GST_VIDEO_RESAMPLER_METHOD_LANCZOS`. values are clamped between
 * 0.5 and 1.5. 1.0 is the default.
 */
export const VIDEO_RESAMPLER_OPT_SHARPNESS: string
/**
 * #GstVideoDitherMethod, The dither method to use for propagating
 * quatization errors.
 */
export const VIDEO_SCALER_OPT_DITHER_METHOD: string
export const VIDEO_SIZE_RANGE: string
export const VIDEO_TILE_TYPE_MASK: number
export const VIDEO_TILE_TYPE_SHIFT: number
export const VIDEO_TILE_X_TILES_MASK: number
export const VIDEO_TILE_Y_TILES_SHIFT: number
/**
 * Attaches #GstVideoAFDMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param field 0 for progressive or field 1 and 1 for field 2
 * @param spec #GstVideoAFDSpec that applies to AFD value
 * @param afd #GstVideoAFDValue AFD enumeration
 * @returns the #GstVideoAFDMeta on @buffer.
 */
export function bufferAddVideoAfdMeta(buffer: Gst.Buffer, field: number, spec: VideoAFDSpec, afd: VideoAFDValue): VideoAFDMeta
/**
 * Attaches GstVideoAffineTransformationMeta metadata to `buffer` with
 * the given parameters.
 * @param buffer a #GstBuffer
 * @returns the #GstVideoAffineTransformationMeta on @buffer.
 */
export function bufferAddVideoAffineTransformationMeta(buffer: Gst.Buffer): VideoAffineTransformationMeta
/**
 * Attaches #GstVideoBarMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param field 0 for progressive or field 1 and 1 for field 2
 * @param isLetterbox if true then bar data specifies letterbox, otherwise pillarbox
 * @param barData1 If `is_letterbox` is true, then the value specifies the      last line of a horizontal letterbox bar area at top of reconstructed frame.      Otherwise, it specifies the last horizontal luminance sample of a vertical pillarbox      bar area at the left side of the reconstructed frame
 * @param barData2 If `is_letterbox` is true, then the value specifies the      first line of a horizontal letterbox bar area at bottom of reconstructed frame.      Otherwise, it specifies the first horizontal      luminance sample of a vertical pillarbox bar area at the right side of the reconstructed frame.
 * @returns the #GstVideoBarMeta on @buffer. See Table 6.11 Bar Data Syntax https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
 */
export function bufferAddVideoBarMeta(buffer: Gst.Buffer, field: number, isLetterbox: boolean, barData1: number, barData2: number): VideoBarMeta
/**
 * Attaches #GstVideoCaptionMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param captionType The type of Closed Caption to add
 * @param data The Closed Caption data
 * @returns the #GstVideoCaptionMeta on @buffer.
 */
export function bufferAddVideoCaptionMeta(buffer: Gst.Buffer, captionType: VideoCaptionType, data: number[]): VideoCaptionMeta
/**
 * Attaches a #GstVideoCodecAlphaMeta metadata to `buffer` with
 * the given alpha buffer.
 * @param buffer a #GstBuffer
 * @param alphaBuffer a #GstBuffer
 * @returns the #GstVideoCodecAlphaMeta on @buffer.
 */
export function bufferAddVideoCodecAlphaMeta(buffer: Gst.Buffer, alphaBuffer: Gst.Buffer): VideoCodecAlphaMeta
/**
 * Attaches GstVideoGLTextureUploadMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param textureOrientation the #GstVideoGLTextureOrientation
 * @param nTextures the number of textures
 * @param textureType array of #GstVideoGLTextureType
 * @param upload the function to upload the buffer to a specific texture ID
 * @param userDataCopy function to copy `user_data`
 * @param userDataFree function to free `user_data`
 * @returns the #GstVideoGLTextureUploadMeta on @buffer.
 */
export function bufferAddVideoGlTextureUploadMeta(buffer: Gst.Buffer, textureOrientation: VideoGLTextureOrientation, nTextures: number, textureType: VideoGLTextureType, upload: VideoGLTextureUpload, userDataCopy: GObject.BoxedCopyFunc, userDataFree: GObject.BoxedFreeFunc): VideoGLTextureUploadMeta
/**
 * Attaches GstVideoMeta metadata to `buffer` with the given parameters and the
 * default offsets and strides for `format` and `width` x `height`.
 * 
 * This function calculates the default offsets and strides and then calls
 * gst_buffer_add_video_meta_full() with them.
 * @param buffer a #GstBuffer
 * @param flags #GstVideoFrameFlags
 * @param format a #GstVideoFormat
 * @param width the width
 * @param height the height
 * @returns the #GstVideoMeta on @buffer.
 */
export function bufferAddVideoMeta(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number): VideoMeta
/**
 * Attaches GstVideoMeta metadata to `buffer` with the given parameters.
 * @param buffer a #GstBuffer
 * @param flags #GstVideoFrameFlags
 * @param format a #GstVideoFormat
 * @param width the width
 * @param height the height
 * @param nPlanes number of planes
 * @param offset offset of each plane
 * @param stride stride of each plane
 * @returns the #GstVideoMeta on @buffer.
 */
export function bufferAddVideoMetaFull(buffer: Gst.Buffer, flags: VideoFrameFlags, format: VideoFormat, width: number, height: number, nPlanes: number, offset: number[], stride: number[]): VideoMeta
/**
 * Sets an overlay composition on a buffer. The buffer will obtain its own
 * reference to the composition, meaning this function does not take ownership
 * of `comp`.
 * @param buf a #GstBuffer
 * @param comp a #GstVideoOverlayComposition
 * @returns a #GstVideoOverlayCompositionMeta
 */
export function bufferAddVideoOverlayCompositionMeta(buf: Gst.Buffer, comp: VideoOverlayComposition | null): VideoOverlayCompositionMeta
/**
 * Attaches #GstVideoRegionOfInterestMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param roiType Type of the region of interest (e.g. "face")
 * @param x X position
 * @param y Y position
 * @param w width
 * @param h height
 * @returns the #GstVideoRegionOfInterestMeta on @buffer.
 */
export function bufferAddVideoRegionOfInterestMeta(buffer: Gst.Buffer, roiType: string, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
/**
 * Attaches #GstVideoRegionOfInterestMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param roiType Type of the region of interest (e.g. "face")
 * @param x X position
 * @param y Y position
 * @param w width
 * @param h height
 * @returns the #GstVideoRegionOfInterestMeta on @buffer.
 */
export function bufferAddVideoRegionOfInterestMetaId(buffer: Gst.Buffer, roiType: GLib.Quark, x: number, y: number, w: number, h: number): VideoRegionOfInterestMeta
/**
 * Attaches #GstVideoSEIUserDataUnregisteredMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param uuid User Data Unregistered UUID
 * @param data SEI User Data Unregistered buffer
 * @param size size of the data buffer
 * @returns the #GstVideoSEIUserDataUnregisteredMeta on @buffer.
 */
export function bufferAddVideoSeiUserDataUnregisteredMeta(buffer: Gst.Buffer, uuid: number, data: number, size: number): VideoSEIUserDataUnregisteredMeta
/**
 * Attaches #GstVideoTimeCodeMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param tc a #GstVideoTimeCode
 * @returns the #GstVideoTimeCodeMeta on @buffer, or (since 1.16) %NULL if the timecode was invalid.
 */
export function bufferAddVideoTimeCodeMeta(buffer: Gst.Buffer, tc: VideoTimeCode): VideoTimeCodeMeta | null
/**
 * Attaches #GstVideoTimeCodeMeta metadata to `buffer` with the given
 * parameters.
 * @param buffer a #GstBuffer
 * @param fpsN framerate numerator
 * @param fpsD framerate denominator
 * @param latestDailyJam a #GDateTime for the latest daily jam
 * @param flags a #GstVideoTimeCodeFlags
 * @param hours hours since the daily jam
 * @param minutes minutes since the daily jam
 * @param seconds seconds since the daily jam
 * @param frames frames since the daily jam
 * @param fieldCount fields since the daily jam
 * @returns the #GstVideoTimeCodeMeta on @buffer, or (since 1.16) %NULL if the timecode was invalid.
 */
export function bufferAddVideoTimeCodeMetaFull(buffer: Gst.Buffer, fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCodeMeta | null
/**
 * Find the #GstVideoMeta on `buffer` with the lowest `id`.
 * 
 * Buffers can contain multiple #GstVideoMeta metadata items when dealing with
 * multiview buffers.
 * @param buffer a #GstBuffer
 * @returns the #GstVideoMeta with lowest id (usually 0) or %NULL when there is no such metadata on @buffer.
 */
export function bufferGetVideoMeta(buffer: Gst.Buffer): VideoMeta | null
/**
 * Find the #GstVideoMeta on `buffer` with the given `id`.
 * 
 * Buffers can contain multiple #GstVideoMeta metadata items when dealing with
 * multiview buffers.
 * @param buffer a #GstBuffer
 * @param id a metadata id
 * @returns the #GstVideoMeta with @id or %NULL when there is no such metadata on @buffer.
 */
export function bufferGetVideoMetaId(buffer: Gst.Buffer, id: number): VideoMeta | null
/**
 * Find the #GstVideoRegionOfInterestMeta on `buffer` with the given `id`.
 * 
 * Buffers can contain multiple #GstVideoRegionOfInterestMeta metadata items if
 * multiple regions of interests are marked on a frame.
 * @param buffer a #GstBuffer
 * @param id a metadata id
 * @returns the #GstVideoRegionOfInterestMeta with @id or %NULL when there is no such metadata on @buffer.
 */
export function bufferGetVideoRegionOfInterestMetaId(buffer: Gst.Buffer, id: number): VideoRegionOfInterestMeta | null
/**
 * Get the video alignment from the bufferpool configuration `config` in
 * in `align`
 * @param config a #GstStructure
 * @param align a #GstVideoAlignment
 * @returns %TRUE if @config could be parsed correctly.
 */
export function bufferPoolConfigGetVideoAlignment(config: Gst.Structure, align: VideoAlignment): boolean
/**
 * Set the video alignment in `align` to the bufferpool configuration
 * `config`
 * @param config a #GstStructure
 * @param align a #GstVideoAlignment
 */
export function bufferPoolConfigSetVideoAlignment(config: Gst.Structure, align: VideoAlignment): void
/**
 * Convenience function to check if the given message is a
 * "prepare-window-handle" message from a #GstVideoOverlay.
 * @param msg a #GstMessage
 * @returns whether @msg is a "prepare-window-handle" message
 */
export function isVideoOverlayPrepareWindowHandleMessage(msg: Gst.Message): boolean
/**
 * Try to retrieve x and y coordinates of a #GstNavigation event.
 * @param event The #GstEvent to inspect.
 * @returns A boolean indicating success.
 */
export function navigationEventGetCoordinates(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
/**
 * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
 * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
 * @param event A #GstEvent to inspect.
 */
export function navigationEventGetType(event: Gst.Event): NavigationEventType
/**
 * Create a new navigation event given navigation command..
 * @param command The navigation command to use.
 * @returns a new #GstEvent
 */
export function navigationEventNewCommand(command: NavigationCommand): Gst.Event
/**
 * Create a new navigation event for the given key press.
 * @param key A string identifying the key press.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewKeyPress(key: string, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for the given key release.
 * @param key A string identifying the released key.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewKeyRelease(key: string, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for the given key mouse button press.
 * @param button The number of the pressed mouse button.
 * @param x The x coordinate of the mouse cursor.
 * @param y The y coordinate of the mouse cursor.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewMouseButtonPress(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for the given key mouse button release.
 * @param button The number of the released mouse button.
 * @param x The x coordinate of the mouse cursor.
 * @param y The y coordinate of the mouse cursor.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewMouseButtonRelease(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for the new mouse location.
 * @param x The x coordinate of the mouse cursor.
 * @param y The y coordinate of the mouse cursor.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewMouseMove(x: number, y: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for the mouse scroll.
 * @param x The x coordinate of the mouse cursor.
 * @param y The y coordinate of the mouse cursor.
 * @param deltaX The x component of the scroll movement.
 * @param deltaY The y component of the scroll movement.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewMouseScroll(x: number, y: number, deltaX: number, deltaY: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event signalling that all currently active touch
 * points are cancelled and should be discarded. For example, under Wayland
 * this event might be sent when a swipe passes the threshold to be recognized
 * as a gesture by the compositor.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewTouchCancel(state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for an added touch point.
 * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
 * @param x The x coordinate of the new touch point.
 * @param y The y coordinate of the new touch point.
 * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewTouchDown(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event signalling the end of a touch frame. Touch
 * frames signal that all previous down, motion and up events not followed by
 * another touch frame event already should be considered simultaneous.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewTouchFrame(state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for a moved touch point.
 * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
 * @param x The x coordinate of the touch point.
 * @param y The y coordinate of the touch point.
 * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewTouchMotion(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event
/**
 * Create a new navigation event for a removed touch point.
 * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
 * @param x The x coordinate of the touch point.
 * @param y The y coordinate of the touch point.
 * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
 * @returns a new #GstEvent
 */
export function navigationEventNewTouchUp(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event
/**
 * Inspect a #GstNavigation command event and retrieve the enum value of the
 * associated command.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if the navigation command could be extracted, otherwise FALSE.
 */
export function navigationEventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand ]
/**
 * Note: Modifier keys (as defined in #GstNavigationModifierType)
 * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
 * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
 * present on all other related events
 * @param event A #GstEvent to inspect.
 */
export function navigationEventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string ]
export function navigationEventParseModifierState(event: Gst.Event, state: NavigationModifierType): boolean
/**
 * Retrieve the details of either a #GstNavigation mouse button press event or
 * a mouse button release event. Determine which type the event is using
 * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if the button number and both coordinates could be extracted,     otherwise FALSE.
 */
export function navigationEventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number, /* x */ number, /* y */ number ]
/**
 * Inspect a #GstNavigation mouse movement event and extract the coordinates
 * of the event.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if both coordinates could be extracted, otherwise FALSE.
 */
export function navigationEventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
/**
 * Inspect a #GstNavigation mouse scroll event and extract the coordinates
 * of the event.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if all coordinates could be extracted, otherwise FALSE.
 */
export function navigationEventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* deltaX */ number, /* deltaY */ number ]
/**
 * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
 * Determine which type the event is using gst_navigation_event_get_type()
 * to retrieve the #GstNavigationEventType.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if all details could be extracted, otherwise FALSE.
 */
export function navigationEventParseTouchEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number, /* x */ number, /* y */ number, /* pressure */ number ]
/**
 * Retrieve the details of a #GstNavigation touch-up event.
 * @param event A #GstEvent to inspect.
 * @returns TRUE if all details could be extracted, otherwise FALSE.
 */
export function navigationEventParseTouchUpEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number, /* x */ number, /* y */ number ]
/**
 * Try to set x and y coordinates on a #GstNavigation event. The event must
 * be writable.
 * @param event The #GstEvent to modify.
 * @param x The x coordinate to set.
 * @param y The y coordinate to set.
 * @returns A boolean indicating success.
 */
export function navigationEventSetCoordinates(event: Gst.Event, x: number, y: number): boolean
/**
 * Check a bus message to see if it is a #GstNavigation event, and return
 * the #GstNavigationMessageType identifying the type of the message if so.
 * @param message A #GstMessage to inspect.
 * @returns The type of the #GstMessage, or #GST_NAVIGATION_MESSAGE_INVALID if the message is not a #GstNavigation notification.
 */
export function navigationMessageGetType(message: Gst.Message): NavigationMessageType
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
 * that the current angle, or current number of angles available in a
 * multiangle video has changed.
 * @param src A #GstObject to set as source of the new message.
 * @param curAngle The currently selected angle.
 * @param nAngles The number of viewing angles now available.
 * @returns The new #GstMessage.
 */
export function navigationMessageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
 * @param src A #GstObject to set as source of the new message.
 * @returns The new #GstMessage.
 */
export function navigationMessageNewCommandsChanged(src: Gst.Object): Gst.Message
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_EVENT.
 * @param src A #GstObject to set as source of the new message.
 * @param event A navigation #GstEvent
 * @returns The new #GstMessage.
 */
export function navigationMessageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
/**
 * Creates a new #GstNavigation message with type
 * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
 * @param src A #GstObject to set as source of the new message.
 * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
 * @returns The new #GstMessage.
 */
export function navigationMessageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
/**
 * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
 * and extract the `cur_angle` and `n_angles` parameters.
 * @param message A #GstMessage to inspect.
 * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
 */
export function navigationMessageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number, /* nAngles */ number ]
/**
 * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
 * and extract contained #GstEvent. The caller must unref the `event` when done
 * with it.
 * @param message A #GstMessage to inspect.
 * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
 */
export function navigationMessageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event ]
/**
 * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
 * and extract the active/inactive flag. If the mouse over event is marked
 * active, it indicates that the mouse is over a clickable area.
 * @param message A #GstMessage to inspect.
 * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
 */
export function navigationMessageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean ]
/**
 * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
 * it if it is a #GstNavigation query.
 * @param query The query to inspect
 * @returns The #GstNavigationQueryType of the query, or #GST_NAVIGATION_QUERY_INVALID
 */
export function navigationQueryGetType(query: Gst.Query): NavigationQueryType
/**
 * Create a new #GstNavigation angles query. When executed, it will
 * query the pipeline for the set of currently available angles, which may be
 * greater than one in a multiangle video.
 * @returns The new query.
 */
export function navigationQueryNewAngles(): Gst.Query
/**
 * Create a new #GstNavigation commands query. When executed, it will
 * query the pipeline for the set of currently available commands.
 * @returns The new query.
 */
export function navigationQueryNewCommands(): Gst.Query
/**
 * Parse the current angle number in the #GstNavigation angles `query` into the
 * #guint pointed to by the `cur_angle` variable, and the number of available
 * angles into the #guint pointed to by the `n_angles` variable.
 * @param query a #GstQuery
 * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
 */
export function navigationQueryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number, /* nAngles */ number ]
/**
 * Parse the number of commands in the #GstNavigation commands `query`.
 * @param query a #GstQuery
 * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
 */
export function navigationQueryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number ]
/**
 * Parse the #GstNavigation command query and retrieve the `nth` command from
 * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
 * set to #GST_NAVIGATION_COMMAND_INVALID.
 * @param query a #GstQuery
 * @param nth the nth command to retrieve.
 * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
 */
export function navigationQueryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand ]
/**
 * Set the #GstNavigation angles query result field in `query`.
 * @param query a #GstQuery
 * @param curAngle the current viewing angle to set.
 * @param nAngles the number of viewing angles to set.
 */
export function navigationQuerySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
/**
 * Set the #GstNavigation command query result fields in `query`. The number
 * of commands passed must be equal to `n_commands`.
 * @param query a #GstQuery
 * @param cmds An array containing `n_cmds`     `GstNavigationCommand` values.
 */
export function navigationQuerySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
export function videoAfdMetaApiGetType(): GObject.GType
export function videoAfdMetaGetInfo(): Gst.MetaInfo
export function videoAffineTransformationMetaApiGetType(): GObject.GType
export function videoAffineTransformationMetaGetInfo(): Gst.MetaInfo
export function videoBarMetaApiGetType(): GObject.GType
export function videoBarMetaGetInfo(): Gst.MetaInfo
/**
 * Lets you blend the `src` image into the `dest` image
 * @param dest The #GstVideoFrame where to blend `src` in
 * @param src the #GstVideoFrame that we want to blend into
 * @param x The x offset in pixel where the `src` image should be blended
 * @param y the y offset in pixel where the `src` image should be blended
 * @param globalAlpha the global_alpha each per-pixel alpha value is multiplied                with
 */
export function videoBlend(dest: VideoFrame, src: VideoFrame, x: number, y: number, globalAlpha: number): boolean
/**
 * Scales a buffer containing RGBA (or AYUV) video. This is an internal
 * helper function which is used to scale subtitle overlays, and may be
 * deprecated in the near future. Use #GstVideoScaler to scale video buffers
 * instead.
 * @param src the #GstVideoInfo describing the video data in `src_buffer`
 * @param srcBuffer the source buffer containing video pixels to scale
 * @param destHeight the height in pixels to scale the video data in `src_buffer` to
 * @param destWidth the width in pixels to scale the video data in `src_buffer` to
 */
export function videoBlendScaleLinearRGBA(src: VideoInfo, srcBuffer: Gst.Buffer, destHeight: number, destWidth: number): [ /* dest */ VideoInfo, /* destBuffer */ Gst.Buffer ]
/**
 * Given the Pixel Aspect Ratio and size of an input video frame, and the
 * pixel aspect ratio of the intended display device, calculates the actual
 * display ratio the video will be rendered with.
 * @param videoWidth Width of the video frame in pixels
 * @param videoHeight Height of the video frame in pixels
 * @param videoParN Numerator of the pixel aspect ratio of the input video.
 * @param videoParD Denominator of the pixel aspect ratio of the input video.
 * @param displayParN Numerator of the pixel aspect ratio of the display device
 * @param displayParD Denominator of the pixel aspect ratio of the display device
 * @returns A boolean indicating success and a calculated Display Ratio in the dar_n and dar_d parameters. The return value is FALSE in the case of integer overflow or other error.
 */
export function videoCalculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
export function videoCaptionMetaApiGetType(): GObject.GType
export function videoCaptionMetaGetInfo(): Gst.MetaInfo
/**
 * Parses fixed Closed Caption #GstCaps and returns the corresponding caption
 * type, or %GST_VIDEO_CAPTION_TYPE_UNKNOWN.
 * @param caps Fixed #GstCaps to parse
 * @returns #GstVideoCaptionType.
 */
export function videoCaptionTypeFromCaps(caps: Gst.Caps): VideoCaptionType
/**
 * Creates new caps corresponding to `type`.
 * @param type #GstVideoCaptionType
 * @returns new #GstCaps
 */
export function videoCaptionTypeToCaps(type: VideoCaptionType): Gst.Caps
/**
 * Takes `src` rectangle and position it at the center of `dst` rectangle with or
 * without `scaling`. It handles clipping if the `src` rectangle is bigger than
 * the `dst` one and `scaling` is set to FALSE.
 * @param src a pointer to #GstVideoRectangle describing the source area
 * @param dst a pointer to #GstVideoRectangle describing the destination area
 * @param scaling a #gboolean indicating if scaling should be applied or not
 */
export function videoCenterRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
/**
 * Convert `s` to a #GstVideoChromaSite
 * @param s a chromasite string
 * @returns a #GstVideoChromaSite or %GST_VIDEO_CHROMA_SITE_UNKNOWN when @s does not contain a valid chroma description.
 */
export function videoChromaFromString(s: string): VideoChromaSite
/**
 * Perform resampling of `width` chroma pixels in `lines`.
 * @param resample a #GstVideoChromaResample
 * @param lines pixel lines
 * @param width the number of pixels on one line
 */
export function videoChromaResample(resample: VideoChromaResample, lines: any | null, width: number): void
/**
 * Convert `s` to a #GstVideoChromaSite
 * @param s a chromasite string
 * @returns a #GstVideoChromaSite or %GST_VIDEO_CHROMA_SITE_UNKNOWN when @s does not contain a valid chroma-site description.
 */
export function videoChromaSiteFromString(s: string): VideoChromaSite
/**
 * Converts `site` to its string representation.
 * @param site a #GstVideoChromaSite
 * @returns a string representation of @site          or %NULL if @site contains undefined value or          is equal to %GST_VIDEO_CHROMA_SITE_UNKNOWN
 */
export function videoChromaSiteToString(site: VideoChromaSite): string | null
/**
 * Converts `site` to its string representation.
 * @param site a #GstVideoChromaSite
 * @returns a string describing @site.
 */
export function videoChromaToString(site: VideoChromaSite): string
export function videoCodecAlphaMetaApiGetType(): GObject.GType
export function videoCodecAlphaMetaGetInfo(): Gst.MetaInfo
/**
 * Converts the `value` to the #GstVideoColorMatrix
 * The matrix coefficients (MatrixCoefficients) value is
 * defined by "ISO/IEC 23001-8 Section 7.3 Table 4"
 * and "ITU-T H.273 Table 4".
 * "H.264 Table E-5" and "H.265 Table E.5" share the identical values.
 * @param value a ITU-T H.273 matrix coefficients value
 * @returns the matched #GstVideoColorMatrix
 */
export function videoColorMatrixFromIso(value: number): VideoColorMatrix
/**
 * Get the coefficients used to convert between Y'PbPr and R'G'B' using `matrix`.
 * 
 * When:
 * 
 * 
 * ```
 *   0.0 <= [Y',R',G',B'] <= 1.0)
 *   (-0.5 <= [Pb,Pr] <= 0.5)
 * ```
 * 
 * 
 * the general conversion is given by:
 * 
 * 
 * ```
 *   Y' = Kr*R' + (1-Kr-Kb)*G' + Kb*B'
 *   Pb = (B'-Y')/(2*(1-Kb))
 *   Pr = (R'-Y')/(2*(1-Kr))
 * ```
 * 
 * 
 * and the other way around:
 * 
 * 
 * ```
 *   R' = Y' + Cr*2*(1-Kr)
 *   G' = Y' - Cb*2*(1-Kb)*Kb/(1-Kr-Kb) - Cr*2*(1-Kr)*Kr/(1-Kr-Kb)
 *   B' = Y' + Cb*2*(1-Kb)
 * ```
 * 
 * @param matrix a #GstVideoColorMatrix
 * @returns TRUE if @matrix was a YUV color format and @Kr and @Kb contain valid    values.
 */
export function videoColorMatrixGetKrKb(matrix: VideoColorMatrix): [ /* returnType */ boolean, /* kr */ number, /* kb */ number ]
/**
 * Converts #GstVideoColorMatrix to the "matrix coefficients"
 * (MatrixCoefficients) value defined by "ISO/IEC 23001-8 Section 7.3 Table 4"
 * and "ITU-T H.273 Table 4".
 * "H.264 Table E-5" and "H.265 Table E.5" share the identical values.
 * @param matrix a #GstVideoColorMatrix
 * @returns The value of ISO/IEC 23001-8 matrix coefficients.
 */
export function videoColorMatrixToIso(matrix: VideoColorMatrix): number
/**
 * Converts the `value` to the #GstVideoColorPrimaries
 * The colour primaries (ColourPrimaries) value is
 * defined by "ISO/IEC 23001-8 Section 7.1 Table 2" and "ITU-T H.273 Table 2".
 * "H.264 Table E-3" and "H.265 Table E.3" share the identical values.
 * @param value a ITU-T H.273 colour primaries value
 * @returns the matched #GstVideoColorPrimaries
 */
export function videoColorPrimariesFromIso(value: number): VideoColorPrimaries
/**
 * Get information about the chromaticity coordinates of `primaries`.
 * @param primaries a #GstVideoColorPrimaries
 * @returns a #GstVideoColorPrimariesInfo for @primaries.
 */
export function videoColorPrimariesGetInfo(primaries: VideoColorPrimaries): VideoColorPrimariesInfo
/**
 * Checks whether `primaries` and `other` are functionally equivalent
 * @param primaries a #GstVideoColorPrimaries
 * @param other another #GstVideoColorPrimaries
 * @returns TRUE if @primaries and @other can be considered equivalent.
 */
export function videoColorPrimariesIsEquivalent(primaries: VideoColorPrimaries, other: VideoColorPrimaries): boolean
/**
 * Converts #GstVideoColorPrimaries to the "colour primaries" (ColourPrimaries)
 * value defined by "ISO/IEC 23001-8 Section 7.1 Table 2"
 * and "ITU-T H.273 Table 2".
 * "H.264 Table E-3" and "H.265 Table E.3" share the identical values.
 * @param primaries a #GstVideoColorPrimaries
 * @returns The value of ISO/IEC 23001-8 colour primaries.
 */
export function videoColorPrimariesToIso(primaries: VideoColorPrimaries): number
/**
 * Compute the offset and scale values for each component of `info`. For each
 * component, (c[i] - offset[i]) / scale[i] will scale the component c[i] to the
 * range [0.0 .. 1.0].
 * 
 * The reverse operation (c[i] * scale[i]) + offset[i] can be used to convert
 * the component values in range [0.0 .. 1.0] back to their representation in
 * `info` and `range`.
 * @param range a #GstVideoColorRange
 * @param info a #GstVideoFormatInfo
 */
export function videoColorRangeOffsets(range: VideoColorRange, info: VideoFormatInfo): [ /* offset */ number[], /* scale */ number[] ]
export function videoColorTransferDecode(func: VideoTransferFunction, val: number): number
export function videoColorTransferEncode(func: VideoTransferFunction, val: number): number
/**
 * Converts a raw video buffer into the specified output caps.
 * 
 * The output caps can be any raw video formats or any image formats (jpeg, png, ...).
 * 
 * The width, height and pixel-aspect-ratio can also be specified in the output caps.
 * @param sample a #GstSample
 * @param toCaps the #GstCaps to convert to
 * @param timeout the maximum amount of time allowed for the processing.
 * @returns The converted #GstSample, or %NULL if an error happened (in which case @err will point to the #GError).
 */
export function videoConvertSample(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime): Gst.Sample | null
/**
 * Converts a raw video buffer into the specified output caps.
 * 
 * The output caps can be any raw video formats or any image formats (jpeg, png, ...).
 * 
 * The width, height and pixel-aspect-ratio can also be specified in the output caps.
 * 
 * `callback` will be called after conversion, when an error occurred or if conversion didn't
 * finish after `timeout`. `callback` will always be called from the thread default
 * %GMainContext, see g_main_context_get_thread_default(). If GLib before 2.22 is used,
 * this will always be the global default main context.
 * 
 * `destroy_notify` will be called after the callback was called and `user_data` is not needed
 * anymore.
 * @param sample a #GstSample
 * @param toCaps the #GstCaps to convert to
 * @param timeout the maximum amount of time allowed for the processing.
 * @param callback %GstVideoConvertSampleCallback that will be called after conversion.
 */
export function videoConvertSampleAsync(sample: Gst.Sample, toCaps: Gst.Caps, timeout: Gst.ClockTime, callback: VideoConvertSampleCallback): void
export function videoCropMetaApiGetType(): GObject.GType
export function videoCropMetaGetInfo(): Gst.MetaInfo
/**
 * Converting the video format into dma drm fourcc. If no
 * matching fourcc found, then DRM_FORMAT_INVALID is returned.
 * @param format a #GstVideoFormat
 * @returns the DRM_FORMAT_* corresponding to the @format.
 */
export function videoDmaDrmFourccFromFormat(format: VideoFormat): number
/**
 * Convert the `format_str` string into the drm fourcc value. The `modifier` is
 * also parsed if we want. Please note that the `format_str` should follow the
 * fourcc:modifier kind style, such as NV12:0x0100000000000002
 * @param formatStr a drm format string
 * @returns The drm fourcc value or DRM_FORMAT_INVALID if @format_str is invalid.
 */
export function videoDmaDrmFourccFromString(formatStr: string): [ /* returnType */ number, /* modifier */ number ]
/**
 * Converting a dma drm fourcc into the video format. If no matching
 * video format found, then GST_VIDEO_FORMAT_UNKNOWN is returned.
 * @param fourcc the dma drm value.
 * @returns the GST_VIDEO_FORMAT_* corresponding to the @fourcc.
 */
export function videoDmaDrmFourccToFormat(fourcc: number): VideoFormat
/**
 * Returns a string containing drm kind format, such as
 * NV12:0x0100000000000002, or NULL otherwise.
 * @param fourcc a drm fourcc value.
 * @param modifier the associated modifier value.
 * @returns the drm kind string composed   of to @fourcc and @modifier.
 */
export function videoDmaDrmFourccToString(fourcc: number, modifier: number): string | null
/**
 * Checks if an event is a force key unit event. Returns true for both upstream
 * and downstream force key unit events.
 * @param event A #GstEvent to check
 * @returns %TRUE if the event is a valid force key unit event
 */
export function videoEventIsForceKeyUnit(event: Gst.Event): boolean
/**
 * Creates a new downstream force key unit event. A downstream force key unit
 * event can be sent down the pipeline to request downstream elements to produce
 * a key unit. A downstream force key unit event must also be sent when handling
 * an upstream force key unit event to notify downstream that the latter has been
 * handled.
 * 
 * To parse an event created by gst_video_event_new_downstream_force_key_unit() use
 * gst_video_event_parse_downstream_force_key_unit().
 * @param timestamp the timestamp of the buffer that starts a new key unit
 * @param streamTime the stream_time of the buffer that starts a new key unit
 * @param runningTime the running_time of the buffer that starts a new key unit
 * @param allHeaders %TRUE to produce headers when starting a new key unit
 * @param count integer that can be used to number key units
 * @returns The new GstEvent
 */
export function videoEventNewDownstreamForceKeyUnit(timestamp: Gst.ClockTime, streamTime: Gst.ClockTime, runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
/**
 * Creates a new Still Frame event. If `in_still` is %TRUE, then the event
 * represents the start of a still frame sequence. If it is %FALSE, then
 * the event ends a still frame sequence.
 * 
 * To parse an event created by gst_video_event_new_still_frame() use
 * gst_video_event_parse_still_frame().
 * @param inStill boolean value for the still-frame state of the event.
 * @returns The new GstEvent
 */
export function videoEventNewStillFrame(inStill: boolean): Gst.Event
/**
 * Creates a new upstream force key unit event. An upstream force key unit event
 * can be sent to request upstream elements to produce a key unit.
 * 
 * `running_time` can be set to request a new key unit at a specific
 * running_time. If set to GST_CLOCK_TIME_NONE, upstream elements will produce a
 * new key unit as soon as possible.
 * 
 * To parse an event created by gst_video_event_new_downstream_force_key_unit() use
 * gst_video_event_parse_downstream_force_key_unit().
 * @param runningTime the running_time at which a new key unit should be produced
 * @param allHeaders %TRUE to produce headers when starting a new key unit
 * @param count integer that can be used to number key units
 * @returns The new GstEvent
 */
export function videoEventNewUpstreamForceKeyUnit(runningTime: Gst.ClockTime, allHeaders: boolean, count: number): Gst.Event
/**
 * Get timestamp, stream-time, running-time, all-headers and count in the force
 * key unit event. See gst_video_event_new_downstream_force_key_unit() for a
 * full description of the downstream force key unit event.
 * 
 * `running_time` will be adjusted for any pad offsets of pads it was passing through.
 * @param event A #GstEvent to parse
 * @returns %TRUE if the event is a valid downstream force key unit event.
 */
export function videoEventParseDownstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* timestamp */ Gst.ClockTime, /* streamTime */ Gst.ClockTime, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
/**
 * Parse a #GstEvent, identify if it is a Still Frame event, and
 * return the still-frame state from the event if it is.
 * If the event represents the start of a still frame, the in_still
 * variable will be set to TRUE, otherwise FALSE. It is OK to pass NULL for the
 * in_still variable order to just check whether the event is a valid still-frame
 * event.
 * 
 * Create a still frame event using gst_video_event_new_still_frame()
 * @param event A #GstEvent to parse
 * @returns %TRUE if the event is a valid still-frame event. %FALSE if not
 */
export function videoEventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
/**
 * Get running-time, all-headers and count in the force key unit event. See
 * gst_video_event_new_upstream_force_key_unit() for a full description of the
 * upstream force key unit event.
 * 
 * Create an upstream force key unit event using  gst_video_event_new_upstream_force_key_unit()
 * 
 * `running_time` will be adjusted for any pad offsets of pads it was passing through.
 * @param event A #GstEvent to parse
 * @returns %TRUE if the event is a valid upstream force-key-unit event. %FALSE if not
 */
export function videoEventParseUpstreamForceKeyUnit(event: Gst.Event): [ /* returnType */ boolean, /* runningTime */ Gst.ClockTime, /* allHeaders */ boolean, /* count */ number ]
/**
 * Convert `order` to a #GstVideoFieldOrder
 * @param order a field order
 * @returns the #GstVideoFieldOrder of @order or    #GST_VIDEO_FIELD_ORDER_UNKNOWN when @order is not a valid    string representation for a #GstVideoFieldOrder.
 */
export function videoFieldOrderFromString(order: string): VideoFieldOrder
/**
 * Convert `order` to its string representation.
 * @param order a #GstVideoFieldOrder
 * @returns @order as a string.
 */
export function videoFieldOrderToString(order: VideoFieldOrder): string
/**
 * Converts a FOURCC value into the corresponding #GstVideoFormat.
 * If the FOURCC cannot be represented by #GstVideoFormat,
 * #GST_VIDEO_FORMAT_UNKNOWN is returned.
 * @param fourcc a FOURCC value representing raw YUV video
 * @returns the #GstVideoFormat describing the FOURCC value
 */
export function videoFormatFromFourcc(fourcc: number): VideoFormat
/**
 * Find the #GstVideoFormat for the given parameters.
 * @param depth the amount of bits used for a pixel
 * @param bpp the amount of bits used to store a pixel. This value is bigger than   `depth`
 * @param endianness the endianness of the masks, #G_LITTLE_ENDIAN or #G_BIG_ENDIAN
 * @param redMask the red mask
 * @param greenMask the green mask
 * @param blueMask the blue mask
 * @param alphaMask the alpha mask, or 0 if no alpha mask
 * @returns a #GstVideoFormat or GST_VIDEO_FORMAT_UNKNOWN when the parameters to not specify a known format.
 */
export function videoFormatFromMasks(depth: number, bpp: number, endianness: number, redMask: number, greenMask: number, blueMask: number, alphaMask: number): VideoFormat
/**
 * Convert the `format` string to its #GstVideoFormat.
 * @param format a format string
 * @returns the #GstVideoFormat for @format or GST_VIDEO_FORMAT_UNKNOWN when the string is not a known format.
 */
export function videoFormatFromString(format: string): VideoFormat
/**
 * Get the #GstVideoFormatInfo for `format`
 * @param format a #GstVideoFormat
 * @returns The #GstVideoFormatInfo for @format.
 */
export function videoFormatGetInfo(format: VideoFormat): VideoFormatInfo
/**
 * Get the default palette of `format`. This the palette used in the pack
 * function for paletted formats.
 * @param format a #GstVideoFormat
 * @returns the default palette of @format or %NULL when @format does not have a palette.
 */
export function videoFormatGetPalette(format: VideoFormat): [ /* returnType */ any | null, /* size */ number ]
/**
 * Converts a #GstVideoFormat value into the corresponding FOURCC.  Only
 * a few YUV formats have corresponding FOURCC values.  If `format` has
 * no corresponding FOURCC value, 0 is returned.
 * @param format a #GstVideoFormat video format
 * @returns the FOURCC corresponding to @format
 */
export function videoFormatToFourcc(format: VideoFormat): number
/**
 * Returns a string containing a descriptive name for
 * the #GstVideoFormat if there is one, or NULL otherwise.
 * @param format a #GstVideoFormat video format
 * @returns the name corresponding to @format
 */
export function videoFormatToString(format: VideoFormat): string
/**
 * Return all the raw video formats supported by GStreamer.
 * @returns an array of #GstVideoFormat
 */
export function videoFormatsRaw(): VideoFormat[]
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
 * @param info a #GstVideoInfo
 * @param buffer the buffer to map
 * @param flags #GstMapFlags
 * @returns %TRUE on success.
 */
export function videoFrameMap(info: VideoInfo, buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
/**
 * Use `info` and `buffer` to fill in the values of `frame` with the video frame
 * information of frame `id`.
 * 
 * When `id` is -1, the default frame is mapped. When `id` != -1, this function
 * will return %FALSE when there is no GstVideoMeta with that id.
 * 
 * All video planes of `buffer` will be mapped and the pointers will be set in
 * `frame->`data.
 * @param info a #GstVideoInfo
 * @param buffer the buffer to map
 * @param id the frame id to map
 * @param flags #GstMapFlags
 * @returns %TRUE on success.
 */
export function videoFrameMapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
export function videoGlTextureUploadMetaApiGetType(): GObject.GType
export function videoGlTextureUploadMetaGetInfo(): Gst.MetaInfo
/**
 * Given the nominal duration of one video frame,
 * this function will check some standard framerates for
 * a close match (within 0.1%) and return one if possible,
 * 
 * It will calculate an arbitrary framerate if no close
 * match was found, and return %FALSE.
 * 
 * It returns %FALSE if a duration of 0 is passed.
 * @param duration Nominal duration of one frame
 * @returns %TRUE if a close "standard" framerate was recognised, and %FALSE otherwise.
 */
export function videoGuessFramerate(duration: Gst.ClockTime): [ /* returnType */ boolean, /* destN */ number, /* destD */ number ]
/**
 * Parse `caps` and update `info`. Please note that the `caps` should be
 * a dma drm caps. The gst_video_is_dma_drm_caps() can be used to verify
 * it before calling this function.
 * @param caps a #GstCaps
 * @returns TRUE if @caps could be parsed
 */
export function videoInfoDmaDrmFromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* drmInfo */ VideoInfoDmaDrm ]
/**
 * Fills `drm_info` if `info'`s format has a valid drm format and `modifier` is also
 * valid
 * @param info a #GstVideoInfo
 * @param modifier the associated modifier value.
 * @returns %TRUE if @drm_info is filled correctly.
 */
export function videoInfoDmaDrmFromVideoInfo(info: VideoInfo, modifier: number): [ /* returnType */ boolean, /* drmInfo */ VideoInfoDmaDrm ]
/**
 * Initialize `drm_info` with default values.
 */
export function videoInfoDmaDrmInit(): /* drmInfo */ VideoInfoDmaDrm
/**
 * Parse `caps` and update `info`.
 * @param caps a #GstCaps
 * @returns TRUE if @caps could be parsed
 */
export function videoInfoFromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
/**
 * Initialize `info` with default values.
 */
export function videoInfoInit(): /* info */ VideoInfo
/**
 * Convert `mode` to a #GstVideoInterlaceMode
 * @param mode a mode
 * @returns the #GstVideoInterlaceMode of @mode or    #GST_VIDEO_INTERLACE_MODE_PROGRESSIVE when @mode is not a valid    string representation for a #GstVideoInterlaceMode.
 */
export function videoInterlaceModeFromString(mode: string): VideoInterlaceMode
/**
 * Convert `mode` to its string representation.
 * @param mode a #GstVideoInterlaceMode
 * @returns @mode as a string.
 */
export function videoInterlaceModeToString(mode: VideoInterlaceMode): string
/**
 * Given a frame's dimensions and pixel aspect ratio, this function will
 * calculate the frame's aspect ratio and compare it against a set of
 * common well-known "standard" aspect ratios.
 * @param width Width of the video frame
 * @param height Height of the video frame
 * @param parN Pixel aspect ratio numerator
 * @param parD Pixel aspect ratio denominator
 * @returns %TRUE if a known "standard" aspect ratio was recognised, and %FALSE otherwise.
 */
export function videoIsCommonAspectRatio(width: number, height: number, parN: number, parD: number): boolean
/**
 * Check whether the `caps` is a dma drm kind caps. Please note that
 * the caps should be fixed.
 * @param caps a #GstCaps
 * @returns %TRUE if the caps is a dma drm caps.
 */
export function videoIsDmaDrmCaps(caps: Gst.Caps): boolean
/**
 * Return a generic raw video caps for formats defined in `formats`.
 * If `formats` is %NULL returns a caps for all the supported raw video formats,
 * see gst_video_formats_raw().
 * @param formats an array of raw #GstVideoFormat, or %NULL
 * @returns a video @GstCaps
 */
export function videoMakeRawCaps(formats: VideoFormat[] | null): Gst.Caps
/**
 * Return a generic raw video caps for formats defined in `formats` with features
 * `features`.
 * If `formats` is %NULL returns a caps for all the supported video formats,
 * see gst_video_formats_raw().
 * @param formats an array of raw #GstVideoFormat, or %NULL
 * @param features the #GstCapsFeatures to set on the caps
 * @returns a video @GstCaps
 */
export function videoMakeRawCapsWithFeatures(formats: VideoFormat[] | null, features: Gst.CapsFeatures | null): Gst.Caps
/**
 * Extract #GstVideoMasteringDisplayInfo from `mastering`
 * @param mastering a #GstStructure representing #GstVideoMasteringDisplayInfo
 * @returns %TRUE if @minfo was filled with @mastering
 */
export function videoMasteringDisplayInfoFromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
export function videoMetaApiGetType(): GObject.GType
export function videoMetaGetInfo(): Gst.MetaInfo
/**
 * Get the #GQuark for the "gst-video-scale" metadata transform operation.
 * @returns a #GQuark
 */
export function videoMetaTransformScaleGetQuark(): GLib.Quark
export function videoMultiviewGetDoubledHeightModes(): any
export function videoMultiviewGetDoubledSizeModes(): any
export function videoMultiviewGetDoubledWidthModes(): any
export function videoMultiviewGetMonoModes(): any
export function videoMultiviewGetUnpackedModes(): any
export function videoMultiviewGuessHalfAspect(mvMode: VideoMultiviewMode, width: number, height: number, parN: number, parD: number): boolean
export function videoMultiviewModeFromCapsString(capsMviewMode: string): VideoMultiviewMode
/**
 * Given a #GstVideoMultiviewMode returns the multiview-mode caps string
 * for insertion into a caps structure
 * @param mviewMode A #GstVideoMultiviewMode value
 * @returns The caps string representation of the mode, or NULL if invalid.
 */
export function videoMultiviewModeToCapsString(mviewMode: VideoMultiviewMode): string | null
/**
 * Utility function that transforms the width/height/PAR
 * and multiview mode and flags of a #GstVideoInfo into
 * the requested mode.
 * @param info A #GstVideoInfo structure to operate on
 * @param outMviewMode A #GstVideoMultiviewMode value
 * @param outMviewFlags A set of #GstVideoMultiviewFlags
 */
export function videoMultiviewVideoInfoChangeMode(info: VideoInfo, outMviewMode: VideoMultiviewMode, outMviewFlags: VideoMultiviewFlags): void
/**
 * Parses the "image-orientation" tag and transforms it into the
 * #GstVideoOrientationMethod enum.
 * @param taglist A #GstTagList
 * @returns TRUE if there was a valid "image-orientation" tag in the taglist.
 */
export function videoOrientationFromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
export function videoOverlayCompositionMetaApiGetType(): GObject.GType
export function videoOverlayCompositionMetaGetInfo(): Gst.MetaInfo
/**
 * This helper shall be used by classes implementing the #GstVideoOverlay
 * interface that want the render rectangle to be controllable using
 * properties. This helper will install "render-rectangle" property into the
 * class.
 * @param oclass The class on which the properties will be installed
 * @param lastPropId The first free property ID to use
 */
export function videoOverlayInstallProperties(oclass: GObject.ObjectClass, lastPropId: number): void
/**
 * This helper shall be used by classes implementing the #GstVideoOverlay
 * interface that want the render rectangle to be controllable using
 * properties. This helper will parse and set the render rectangle calling
 * gst_video_overlay_set_render_rectangle().
 * @param object The instance on which the property is set
 * @param lastPropId The highest property ID.
 * @param propertyId The property ID
 * @param value The #GValue to be set
 * @returns %TRUE if the @property_id matches the GstVideoOverlay property
 */
export function videoOverlaySetProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
export function videoRegionOfInterestMetaApiGetType(): GObject.GType
export function videoRegionOfInterestMetaGetInfo(): Gst.MetaInfo
export function videoSeiUserDataUnregisteredMetaApiGetType(): GObject.GType
export function videoSeiUserDataUnregisteredMetaGetInfo(): Gst.MetaInfo
/**
 * Parses and returns the Precision Time Stamp (ST 0604) from the SEI User Data Unregistered buffer
 * @param userData a #GstVideoSEIUserDataUnregisteredMeta
 * @returns True if data is a Precision Time Stamp and it was parsed correctly
 */
export function videoSeiUserDataUnregisteredParsePrecisionTimeStamp(userData: VideoSEIUserDataUnregisteredMeta): [ /* returnType */ boolean, /* status */ number, /* precisionTimeStamp */ number ]
/**
 * Get the tile index of the tile at coordinates `x` and `y` in the tiled
 * image of `x_tiles` by `y_tiles`.
 * 
 * Use this method when `mode` is of type %GST_VIDEO_TILE_TYPE_INDEXED.
 * @param mode a #GstVideoTileMode
 * @param x x coordinate
 * @param y y coordinate
 * @param xTiles number of horizintal tiles
 * @param yTiles number of vertical tiles
 * @returns the index of the tile at @x and @y in the tiled image of   @x_tiles by @y_tiles.
 */
export function videoTileGetIndex(mode: VideoTileMode, x: number, y: number, xTiles: number, yTiles: number): number
export function videoTimeCodeMetaApiGetType(): GObject.GType
export function videoTimeCodeMetaGetInfo(): Gst.MetaInfo
/**
 * Convert `val` to its gamma decoded value. This is the inverse operation of
 * gst_video_color_transfer_encode().
 * 
 * For a non-linear value L' in the range [0..1], conversion to the linear
 * L is in general performed with a power function like:
 * 
 * 
 * ```
 *    L = L' ^ gamma
 * ```
 * 
 * 
 * Depending on `func,` different formulas might be applied. Some formulas
 * encode a linear segment in the lower range.
 * @param func a #GstVideoTransferFunction
 * @param val a value
 * @returns the gamma decoded value of @val
 */
export function videoTransferFunctionDecode(func: VideoTransferFunction, val: number): number
/**
 * Convert `val` to its gamma encoded value.
 * 
 * For a linear value L in the range [0..1], conversion to the non-linear
 * (gamma encoded) L' is in general performed with a power function like:
 * 
 * 
 * ```
 *    L' = L ^ (1 / gamma)
 * ```
 * 
 * 
 * Depending on `func,` different formulas might be applied. Some formulas
 * encode a linear segment in the lower range.
 * @param func a #GstVideoTransferFunction
 * @param val a value
 * @returns the gamma encoded value of @val
 */
export function videoTransferFunctionEncode(func: VideoTransferFunction, val: number): number
/**
 * Converts the `value` to the #GstVideoTransferFunction
 * The transfer characteristics (TransferCharacteristics) value is
 * defined by "ISO/IEC 23001-8 Section 7.2 Table 3"
 * and "ITU-T H.273 Table 3".
 * "H.264 Table E-4" and "H.265 Table E.4" share the identical values.
 * @param value a ITU-T H.273 transfer characteristics value
 * @returns the matched #GstVideoTransferFunction
 */
export function videoTransferFunctionFromIso(value: number): VideoTransferFunction
/**
 * Returns whether `from_func` and `to_func` are equivalent. There are cases
 * (e.g. BT601, BT709, and BT2020_10) where several functions are functionally
 * identical. In these cases, when doing conversion, we should consider them
 * as equivalent. Also, BT2020_12 is the same as the aforementioned three for
 * less than 12 bits per pixel.
 * @param fromFunc #GstVideoTransferFunction to convert from
 * @param fromBpp bits per pixel to convert from
 * @param toFunc #GstVideoTransferFunction to convert into
 * @param toBpp bits per pixel to convert into
 * @returns TRUE if @from_func and @to_func can be considered equivalent.
 */
export function videoTransferFunctionIsEquivalent(fromFunc: VideoTransferFunction, fromBpp: number, toFunc: VideoTransferFunction, toBpp: number): boolean
/**
 * Converts #GstVideoTransferFunction to the "transfer characteristics"
 * (TransferCharacteristics) value defined by "ISO/IEC 23001-8 Section 7.2 Table 3"
 * and "ITU-T H.273 Table 3".
 * "H.264 Table E-4" and "H.265 Table E.4" share the identical values.
 * @param func a #GstVideoTransferFunction
 * @returns The value of ISO/IEC 23001-8 transfer characteristics.
 */
export function videoTransferFunctionToIso(func: VideoTransferFunction): number
export interface VideoAffineTransformationGetMatrix {
    (meta: VideoAffineTransformationMeta, matrix: number): boolean
}
export interface VideoConvertSampleCallback {
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
 * @callback 
 * @param info a #GstVideoFormatInfo
 * @param flags flags to control the packing
 * @param src a source array
 * @param sstride the source array stride
 * @param data pointers to the destination data planes
 * @param stride strides of the destination planes
 * @param chromaSite the chroma siting of the target when subsampled (not used)
 * @param y the y position in the image to pack to
 * @param width the amount of pixels to pack.
 */
export interface VideoFormatPack {
    (info: VideoFormatInfo, flags: VideoPackFlags, src: any | null, sstride: number, data: any | null, stride: number, chromaSite: VideoChromaSite, y: number, width: number): void
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
 * @callback 
 * @param info a #GstVideoFormatInfo
 * @param flags flags to control the unpacking
 * @param dest a destination array
 * @param data pointers to the data planes
 * @param stride strides of the planes
 * @param x the x position in the image to start from
 * @param y the y position in the image to start from
 * @param width the amount of pixels to unpack.
 */
export interface VideoFormatUnpack {
    (info: VideoFormatInfo, flags: VideoPackFlags, dest: any | null, data: any | null, stride: number, x: number, y: number, width: number): void
}
export interface VideoGLTextureUpload {
    (meta: VideoGLTextureUploadMeta, textureId: number): boolean
}
export module ColorBalance {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (channel: ColorBalanceChannel, value: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ColorBalance {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalance

    __gtype__: number

    // Owm methods of GstVideo-1.0.GstVideo.ColorBalance

    // Has conflict: getBalanceType(): ColorBalanceType
    // Has conflict: getValue(channel: ColorBalanceChannel): number
    // Has conflict: listChannels(): ColorBalanceChannel[]
    // Has conflict: setValue(channel: ColorBalanceChannel, value: number): void
    // Has conflict: valueChanged(channel: ColorBalanceChannel, value: number): void

    // Own virtual methods of GstVideo-1.0.GstVideo.ColorBalance

    /**
     * Get the #GstColorBalanceType of this implementation.
     * @virtual 
     * @returns A the #GstColorBalanceType.
     */
    getBalanceType(): ColorBalanceType
    /**
     * Retrieve the current value of the indicated channel, between min_value
     * and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @virtual 
     * @param channel A #GstColorBalanceChannel instance
     * @returns The current value of the channel.
     */
    getValue(channel: ColorBalanceChannel): number
    /**
     * Retrieve a list of the available channels.
     * @virtual 
     * @returns A          GList containing pointers to #GstColorBalanceChannel          objects. The list is owned by the #GstColorBalance          instance and must not be freed.
     */
    listChannels(): ColorBalanceChannel[]
    /**
     * Sets the current value of the channel to the passed value, which must
     * be between min_value and max_value.
     * 
     * See Also: The #GstColorBalanceChannel.min_value and
     *         #GstColorBalanceChannel.max_value members of the
     *         #GstColorBalanceChannel object.
     * @virtual 
     * @param channel A #GstColorBalanceChannel instance
     * @param value The new value for the channel.
     */
    setValue(channel: ColorBalanceChannel, value: number): void
    /**
     * A helper function called by implementations of the GstColorBalance
     * interface. It fires the #GstColorBalance::value-changed signal on the
     * instance, and the #GstColorBalanceChannel::value-changed signal on the
     * channel object.
     * @virtual 
     * @param channel A #GstColorBalanceChannel whose value has changed
     * @param value The new value of the channel
     */
    valueChanged(channel: ColorBalanceChannel, value: number): void

    // Own signals of GstVideo-1.0.GstVideo.ColorBalance

    connect(sigName: "value-changed", callback: ColorBalance.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: ColorBalance.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: ColorBalance.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: ColorBalance.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", value: number, ...args: any[]): void

    // Class property signals of GstVideo-1.0.GstVideo.ColorBalance

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This interface is implemented by elements which can perform some color
 * balance operation on video frames they process. For example, modifying
 * the brightness, contrast, hue or saturation.
 * 
 * Example elements are 'xvimagesink' and 'colorbalance'
 * @interface 
 */
export class ColorBalance extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalance

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.ColorBalance

    constructor(config?: ColorBalance.ConstructorProperties) 
    _init(config?: ColorBalance.ConstructorProperties): void
}

export module Navigation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Navigation {

    // Own properties of GstVideo-1.0.GstVideo.Navigation

    __gtype__: number

    // Owm methods of GstVideo-1.0.GstVideo.Navigation

    /**
     * Sends the indicated command to the navigation interface.
     * @param command The command to issue
     */
    sendCommand(command: NavigationCommand): void
    // Has conflict: sendEvent(structure: Gst.Structure): void
    // Has conflict: sendEventSimple(event: Gst.Event): void
    sendKeyEvent(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
     * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     */
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    /**
     * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     * @param deltaX The delta_x coordinate of the mouse event.
     * @param deltaY The delta_y coordinate of the mouse event.
     */
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void

    // Own virtual methods of GstVideo-1.0.GstVideo.Navigation

    /**
     * sending a navigation event.
     * @virtual 
     * @param structure 
     */
    sendEvent(structure: Gst.Structure): void
    /**
     * Sends an event to the navigation interface.
     * @virtual 
     * @param event The event to send
     */
    sendEventSimple(event: Gst.Event): void

    // Class property signals of GstVideo-1.0.GstVideo.Navigation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Navigation interface is used for creating and injecting navigation
 * related events such as mouse button presses, cursor motion and key presses.
 * The associated library also provides methods for parsing received events, and
 * for sending and receiving navigation related bus events. One main usecase is
 * DVD menu navigation.
 * 
 * The main parts of the API are:
 * 
 * * The GstNavigation interface, implemented by elements which provide an
 *   application with the ability to create and inject navigation events into
 *   the pipeline.
 * * GstNavigation event handling API. GstNavigation events are created in
 *   response to calls on a GstNavigation interface implementation, and sent in
 *   the pipeline. Upstream elements can use the navigation event API functions
 *   to parse the contents of received messages.
 * 
 * * GstNavigation message handling API. GstNavigation messages may be sent on
 *   the message bus to inform applications of navigation related changes in the
 *   pipeline, such as the mouse moving over a clickable region, or the set of
 *   available angles changing.
 * 
 * The GstNavigation message functions provide functions for creating and
 * parsing custom bus messages for signaling GstNavigation changes.
 * @interface 
 */
export class Navigation extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.Navigation

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.Navigation

    constructor(config?: Navigation.ConstructorProperties) 
    _init(config?: Navigation.ConstructorProperties): void
    /**
     * Try to retrieve x and y coordinates of a #GstNavigation event.
     * @param event The #GstEvent to inspect.
     * @returns A boolean indicating success.
     */
    static eventGetCoordinates(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
     * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
     * @param event A #GstEvent to inspect.
     */
    static eventGetType(event: Gst.Event): NavigationEventType
    /**
     * Create a new navigation event given navigation command..
     * @param command The navigation command to use.
     * @returns a new #GstEvent
     */
    static eventNewCommand(command: NavigationCommand): Gst.Event
    /**
     * Create a new navigation event for the given key press.
     * @param key A string identifying the key press.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewKeyPress(key: string, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key release.
     * @param key A string identifying the released key.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewKeyRelease(key: string, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button press.
     * @param button The number of the pressed mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewMouseButtonPress(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button release.
     * @param button The number of the released mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewMouseButtonRelease(button: number, x: number, y: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the new mouse location.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewMouseMove(x: number, y: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the mouse scroll.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param deltaX The x component of the scroll movement.
     * @param deltaY The y component of the scroll movement.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewMouseScroll(x: number, y: number, deltaX: number, deltaY: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling that all currently active touch
     * points are cancelled and should be discarded. For example, under Wayland
     * this event might be sent when a swipe passes the threshold to be recognized
     * as a gesture by the compositor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewTouchCancel(state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for an added touch point.
     * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
     * @param x The x coordinate of the new touch point.
     * @param y The y coordinate of the new touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewTouchDown(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling the end of a touch frame. Touch
     * frames signal that all previous down, motion and up events not followed by
     * another touch frame event already should be considered simultaneous.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewTouchFrame(state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a moved touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewTouchMotion(identifier: number, x: number, y: number, pressure: number, state: NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a removed touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     * @returns a new #GstEvent
     */
    static eventNewTouchUp(identifier: number, x: number, y: number, state: NavigationModifierType): Gst.Event
    /**
     * Inspect a #GstNavigation command event and retrieve the enum value of the
     * associated command.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if the navigation command could be extracted, otherwise FALSE.
     */
    static eventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ NavigationCommand ]
    /**
     * Note: Modifier keys (as defined in #GstNavigationModifierType)
     * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
     * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
     * present on all other related events
     * @param event A #GstEvent to inspect.
     */
    static eventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string ]
    static eventParseModifierState(event: Gst.Event, state: NavigationModifierType): boolean
    /**
     * Retrieve the details of either a #GstNavigation mouse button press event or
     * a mouse button release event. Determine which type the event is using
     * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if the button number and both coordinates could be extracted,     otherwise FALSE.
     */
    static eventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number, /* x */ number, /* y */ number ]
    /**
     * Inspect a #GstNavigation mouse movement event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if both coordinates could be extracted, otherwise FALSE.
     */
    static eventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Inspect a #GstNavigation mouse scroll event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if all coordinates could be extracted, otherwise FALSE.
     */
    static eventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number, /* y */ number, /* deltaX */ number, /* deltaY */ number ]
    /**
     * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
     * Determine which type the event is using gst_navigation_event_get_type()
     * to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if all details could be extracted, otherwise FALSE.
     */
    static eventParseTouchEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number, /* x */ number, /* y */ number, /* pressure */ number ]
    /**
     * Retrieve the details of a #GstNavigation touch-up event.
     * @param event A #GstEvent to inspect.
     * @returns TRUE if all details could be extracted, otherwise FALSE.
     */
    static eventParseTouchUpEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number, /* x */ number, /* y */ number ]
    /**
     * Try to set x and y coordinates on a #GstNavigation event. The event must
     * be writable.
     * @param event The #GstEvent to modify.
     * @param x The x coordinate to set.
     * @param y The y coordinate to set.
     * @returns A boolean indicating success.
     */
    static eventSetCoordinates(event: Gst.Event, x: number, y: number): boolean
    /**
     * Check a bus message to see if it is a #GstNavigation event, and return
     * the #GstNavigationMessageType identifying the type of the message if so.
     * @param message A #GstMessage to inspect.
     * @returns The type of the #GstMessage, or #GST_NAVIGATION_MESSAGE_INVALID if the message is not a #GstNavigation notification.
     */
    static messageGetType(message: Gst.Message): NavigationMessageType
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
     * that the current angle, or current number of angles available in a
     * multiangle video has changed.
     * @param src A #GstObject to set as source of the new message.
     * @param curAngle The currently selected angle.
     * @param nAngles The number of viewing angles now available.
     * @returns The new #GstMessage.
     */
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
     * @param src A #GstObject to set as source of the new message.
     * @returns The new #GstMessage.
     */
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_EVENT.
     * @param src A #GstObject to set as source of the new message.
     * @param event A navigation #GstEvent
     * @returns The new #GstMessage.
     */
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
     * @param src A #GstObject to set as source of the new message.
     * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
     * @returns The new #GstMessage.
     */
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    /**
     * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
     * and extract the `cur_angle` and `n_angles` parameters.
     * @param message A #GstMessage to inspect.
     * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
     */
    static messageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number, /* nAngles */ number ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
     * and extract contained #GstEvent. The caller must unref the `event` when done
     * with it.
     * @param message A #GstMessage to inspect.
     * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
     */
    static messageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
     * and extract the active/inactive flag. If the mouse over event is marked
     * active, it indicates that the mouse is over a clickable area.
     * @param message A #GstMessage to inspect.
     * @returns %TRUE if the message could be successfully parsed. %FALSE if not.
     */
    static messageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean ]
    /**
     * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
     * it if it is a #GstNavigation query.
     * @param query The query to inspect
     * @returns The #GstNavigationQueryType of the query, or #GST_NAVIGATION_QUERY_INVALID
     */
    static queryGetType(query: Gst.Query): NavigationQueryType
    /**
     * Create a new #GstNavigation angles query. When executed, it will
     * query the pipeline for the set of currently available angles, which may be
     * greater than one in a multiangle video.
     * @returns The new query.
     */
    static queryNewAngles(): Gst.Query
    /**
     * Create a new #GstNavigation commands query. When executed, it will
     * query the pipeline for the set of currently available commands.
     * @returns The new query.
     */
    static queryNewCommands(): Gst.Query
    /**
     * Parse the current angle number in the #GstNavigation angles `query` into the
     * #guint pointed to by the `cur_angle` variable, and the number of available
     * angles into the #guint pointed to by the `n_angles` variable.
     * @param query a #GstQuery
     * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
     */
    static queryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number, /* nAngles */ number ]
    /**
     * Parse the number of commands in the #GstNavigation commands `query`.
     * @param query a #GstQuery
     * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
     */
    static queryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number ]
    /**
     * Parse the #GstNavigation command query and retrieve the `nth` command from
     * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
     * set to #GST_NAVIGATION_COMMAND_INVALID.
     * @param query a #GstQuery
     * @param nth the nth command to retrieve.
     * @returns %TRUE if the query could be successfully parsed. %FALSE if not.
     */
    static queryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ NavigationCommand ]
    /**
     * Set the #GstNavigation angles query result field in `query`.
     * @param query a #GstQuery
     * @param curAngle the current viewing angle to set.
     * @param nAngles the number of viewing angles to set.
     */
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    /**
     * Set the #GstNavigation command query result fields in `query`. The number
     * of commands passed must be equal to `n_commands`.
     * @param query a #GstQuery
     * @param cmds An array containing `n_cmds`     `GstNavigationCommand` values.
     */
    static querySetCommandsv(query: Gst.Query, cmds: NavigationCommand[]): void
}

export module VideoDirection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoDirection

        videoDirection?: VideoOrientationMethod | null
    }

}

export interface VideoDirection {

    // Own properties of GstVideo-1.0.GstVideo.VideoDirection

    videoDirection: VideoOrientationMethod
    __gtype__: number

    // Class property signals of GstVideo-1.0.GstVideo.VideoDirection

    connect(sigName: "notify::video-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-direction", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The interface allows unified access to control flipping and rotation
 * operations of video-sources or operators.
 * @interface 
 */
export class VideoDirection extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.VideoDirection

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoDirection

    constructor(config?: VideoDirection.ConstructorProperties) 
    _init(config?: VideoDirection.ConstructorProperties): void
}

export module VideoOrientation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VideoOrientation {

    // Own properties of GstVideo-1.0.GstVideo.VideoOrientation

    __gtype__: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoOrientation

    // Has conflict: getHcenter(): [ /* returnType */ boolean, /* center */ number ]
    // Has conflict: getHflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    // Has conflict: getVcenter(): [ /* returnType */ boolean, /* center */ number ]
    // Has conflict: getVflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    // Has conflict: setHcenter(center: number): boolean
    // Has conflict: setHflip(flip: boolean): boolean
    // Has conflict: setVcenter(center: number): boolean
    // Has conflict: setVflip(flip: boolean): boolean

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoOrientation

    /**
     * Get the horizontal centering offset from the given object.
     * @virtual 
     * @returns %TRUE in case the element supports centering
     */
    getHcenter(): [ /* returnType */ boolean, /* center */ number ]
    /**
     * Get the horizontal flipping state (%TRUE for flipped) from the given object.
     * @virtual 
     * @returns %TRUE in case the element supports flipping
     */
    getHflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    /**
     * Get the vertical centering offset from the given object.
     * @virtual 
     * @returns %TRUE in case the element supports centering
     */
    getVcenter(): [ /* returnType */ boolean, /* center */ number ]
    /**
     * Get the vertical flipping state (%TRUE for flipped) from the given object.
     * @virtual 
     * @returns %TRUE in case the element supports flipping
     */
    getVflip(): [ /* returnType */ boolean, /* flip */ boolean ]
    /**
     * Set the horizontal centering offset for the given object.
     * @virtual 
     * @param center centering offset
     * @returns %TRUE in case the element supports centering
     */
    setHcenter(center: number): boolean
    /**
     * Set the horizontal flipping state (%TRUE for flipped) for the given object.
     * @virtual 
     * @param flip use flipping
     * @returns %TRUE in case the element supports flipping
     */
    setHflip(flip: boolean): boolean
    /**
     * Set the vertical centering offset for the given object.
     * @virtual 
     * @param center centering offset
     * @returns %TRUE in case the element supports centering
     */
    setVcenter(center: number): boolean
    /**
     * Set the vertical flipping state (%TRUE for flipped) for the given object.
     * @virtual 
     * @param flip use flipping
     * @returns %TRUE in case the element supports flipping
     */
    setVflip(flip: boolean): boolean

    // Class property signals of GstVideo-1.0.GstVideo.VideoOrientation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The interface allows unified access to control flipping and autocenter
 * operation of video-sources or operators.
 * @interface 
 */
export class VideoOrientation extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.VideoOrientation

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoOrientation

    constructor(config?: VideoOrientation.ConstructorProperties) 
    _init(config?: VideoOrientation.ConstructorProperties): void
    /**
     * Parses the "image-orientation" tag and transforms it into the
     * #GstVideoOrientationMethod enum.
     * @param taglist A #GstTagList
     * @returns TRUE if there was a valid "image-orientation" tag in the taglist.
     */
    static fromTag(taglist: Gst.TagList): [ /* returnType */ boolean, /* method */ VideoOrientationMethod ]
}

export module VideoOverlay {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VideoOverlay {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlay

    __gtype__: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoOverlay

    // Has conflict: expose(): void
    /**
     * This will post a "have-window-handle" element message on the bus.
     * 
     * This function should only be used by video overlay plugin developers.
     * @param handle a platform-specific handle referencing the window
     */
    gotWindowHandle(handle: never): void
    // Has conflict: handleEvents(handleEvents: boolean): void
    /**
     * This will post a "prepare-window-handle" element message on the bus
     * to give applications an opportunity to call
     * gst_video_overlay_set_window_handle() before a plugin creates its own
     * window.
     * 
     * This function should only be used by video overlay plugin developers.
     */
    prepareWindowHandle(): void
    // Has conflict: setRenderRectangle(x: number, y: number, width: number, height: number): boolean
    // Has conflict: setWindowHandle(handle: never): void

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoOverlay

    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     * @virtual 
     */
    expose(): void
    /**
     * Tell an overlay that it should handle events from the window system. These
     * events are forwarded upstream as navigation events. In some window system,
     * events are not propagated in the window hierarchy if a client is listening
     * for them. This method allows you to disable events handling completely
     * from the #GstVideoOverlay.
     * @virtual 
     * @param handleEvents a #gboolean indicating if events should be handled or not.
     */
    handleEvents(handleEvents: boolean): void
    setRenderRectangle(x: number, y: number, width: number, height: number): void
    /**
     * This will call the video overlay's set_window_handle method. You
     * should use this method to tell to an overlay to display video output to a
     * specific window (e.g. an XWindow on X11). Passing 0 as the  `handle` will
     * tell the overlay to stop using that window and create an internal one.
     * @virtual 
     * @param handle a handle referencing the window.
     */
    setWindowHandle(handle: never): void

    // Class property signals of GstVideo-1.0.GstVideo.VideoOverlay

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstVideoOverlay interface is used for 2 main purposes :
 * 
 * * To get a grab on the Window where the video sink element is going to render.
 *   This is achieved by either being informed about the Window identifier that
 *   the video sink element generated, or by forcing the video sink element to use
 *   a specific Window identifier for rendering.
 * * To force a redrawing of the latest video frame the video sink element
 *   displayed on the Window. Indeed if the #GstPipeline is in #GST_STATE_PAUSED
 *   state, moving the Window around will damage its content. Application
 *   developers will want to handle the Expose events themselves and force the
 *   video sink element to refresh the Window's content.
 * 
 * Using the Window created by the video sink is probably the simplest scenario,
 * in some cases, though, it might not be flexible enough for application
 * developers if they need to catch events such as mouse moves and button
 * clicks.
 * 
 * Setting a specific Window identifier on the video sink element is the most
 * flexible solution but it has some issues. Indeed the application needs to set
 * its Window identifier at the right time to avoid internal Window creation
 * from the video sink element. To solve this issue a #GstMessage is posted on
 * the bus to inform the application that it should set the Window identifier
 * immediately. Here is an example on how to do that correctly:
 * 
 * ```
 * static GstBusSyncReply
 * create_window (GstBus * bus, GstMessage * message, GstPipeline * pipeline)
 * {
 *  // ignore anything but 'prepare-window-handle' element messages
 *  if (!gst_is_video_overlay_prepare_window_handle_message (message))
 *    return GST_BUS_PASS;
 * 
 *  win = XCreateSimpleWindow (disp, root, 0, 0, 320, 240, 0, 0, 0);
 * 
 *  XSetWindowBackgroundPixmap (disp, win, None);
 * 
 *  XMapRaised (disp, win);
 * 
 *  XSync (disp, FALSE);
 * 
 *  gst_video_overlay_set_window_handle (GST_VIDEO_OVERLAY (GST_MESSAGE_SRC (message)),
 *      win);
 * 
 *  gst_message_unref (message);
 * 
 *  return GST_BUS_DROP;
 * }
 * ...
 * int
 * main (int argc, char **argv)
 * {
 * ...
 *  bus = gst_pipeline_get_bus (GST_PIPELINE (pipeline));
 *  gst_bus_set_sync_handler (bus, (GstBusSyncHandler) create_window, pipeline,
 *         NULL);
 * ...
 * }
 * ```
 * 
 * 
 * ## Two basic usage scenarios
 * 
 * There are two basic usage scenarios: in the simplest case, the application
 * uses #playbin or #playsink or knows exactly what particular element is used
 * for video output, which is usually the case when the application creates
 * the videosink to use (e.g. #xvimagesink, #ximagesink, etc.) itself; in this
 * case, the application can just create the videosink element, create and
 * realize the window to render the video on and then
 * call gst_video_overlay_set_window_handle() directly with the XID or native
 * window handle, before starting up the pipeline.
 * As #playbin and #playsink implement the video overlay interface and proxy
 * it transparently to the actual video sink even if it is created later, this
 * case also applies when using these elements.
 * 
 * In the other and more common case, the application does not know in advance
 * what GStreamer video sink element will be used for video output. This is
 * usually the case when an element such as #autovideosink is used.
 * In this case, the video sink element itself is created
 * asynchronously from a GStreamer streaming thread some time after the
 * pipeline has been started up. When that happens, however, the video sink
 * will need to know right then whether to render onto an already existing
 * application window or whether to create its own window. This is when it
 * posts a prepare-window-handle message, and that is also why this message needs
 * to be handled in a sync bus handler which will be called from the streaming
 * thread directly (because the video sink will need an answer right then).
 * 
 * As response to the prepare-window-handle element message in the bus sync
 * handler, the application may use gst_video_overlay_set_window_handle() to tell
 * the video sink to render onto an existing window surface. At this point the
 * application should already have obtained the window handle / XID, so it
 * just needs to set it. It is generally not advisable to call any GUI toolkit
 * functions or window system functions from the streaming thread in which the
 * prepare-window-handle message is handled, because most GUI toolkits and
 * windowing systems are not thread-safe at all and a lot of care would be
 * required to co-ordinate the toolkit and window system calls of the
 * different threads (Gtk+ users please note: prior to Gtk+ 2.18
 * `GDK_WINDOW_XID` was just a simple structure access, so generally fine to do
 * within the bus sync handler; this macro was changed to a function call in
 * Gtk+ 2.18 and later, which is likely to cause problems when called from a
 * sync handler; see below for a better approach without `GDK_WINDOW_XID`
 * used in the callback).
 * 
 * ## GstVideoOverlay and Gtk+
 * 
 * 
 * ```
 * #include <gst/video/videooverlay.h>
 * #include <gtk/gtk.h>
 * #ifdef GDK_WINDOWING_X11
 * #include <gdk/gdkx.h>  // for GDK_WINDOW_XID
 * #endif
 * #ifdef GDK_WINDOWING_WIN32
 * #include <gdk/gdkwin32.h>  // for GDK_WINDOW_HWND
 * #endif
 * ...
 * static guintptr video_window_handle = 0;
 * ...
 * static GstBusSyncReply
 * bus_sync_handler (GstBus * bus, GstMessage * message, gpointer user_data)
 * {
 *  // ignore anything but 'prepare-window-handle' element messages
 *  if (!gst_is_video_overlay_prepare_window_handle_message (message))
 *    return GST_BUS_PASS;
 * 
 *  if (video_window_handle != 0) {
 *    GstVideoOverlay *overlay;
 * 
 *    // GST_MESSAGE_SRC (message) will be the video sink element
 *    overlay = GST_VIDEO_OVERLAY (GST_MESSAGE_SRC (message));
 *    gst_video_overlay_set_window_handle (overlay, video_window_handle);
 *  } else {
 *    g_warning ("Should have obtained video_window_handle by now!");
 *  }
 * 
 *  gst_message_unref (message);
 *  return GST_BUS_DROP;
 * }
 * ...
 * static void
 * video_widget_realize_cb (GtkWidget * widget, gpointer data)
 * {
 * #if GTK_CHECK_VERSION(2,18,0)
 *   // Tell Gtk+/Gdk to create a native window for this widget instead of
 *   // drawing onto the parent widget.
 *   // This is here just for pedagogical purposes, GDK_WINDOW_XID will call
 *   // it as well in newer Gtk versions
 *   if (!gdk_window_ensure_native (widget->window))
 *     g_error ("Couldn't create native window needed for GstVideoOverlay!");
 * #endif
 * 
 * #ifdef GDK_WINDOWING_X11
 *   {
 *     gulong xid = GDK_WINDOW_XID (gtk_widget_get_window (video_window));
 *     video_window_handle = xid;
 *   }
 * #endif
 * #ifdef GDK_WINDOWING_WIN32
 *   {
 *     HWND wnd = GDK_WINDOW_HWND (gtk_widget_get_window (video_window));
 *     video_window_handle = (guintptr) wnd;
 *   }
 * #endif
 * }
 * ...
 * int
 * main (int argc, char **argv)
 * {
 *   GtkWidget *video_window;
 *   GtkWidget *app_window;
 *   ...
 *   app_window = gtk_window_new (GTK_WINDOW_TOPLEVEL);
 *   ...
 *   video_window = gtk_drawing_area_new ();
 *   g_signal_connect (video_window, "realize",
 *       G_CALLBACK (video_widget_realize_cb), NULL);
 *   gtk_widget_set_double_buffered (video_window, FALSE);
 *   ...
 *   // usually the video_window will not be directly embedded into the
 *   // application window like this, but there will be many other widgets
 *   // and the video window will be embedded in one of them instead
 *   gtk_container_add (GTK_CONTAINER (ap_window), video_window);
 *   ...
 *   // show the GUI
 *   gtk_widget_show_all (app_window);
 * 
 *   // realize window now so that the video window gets created and we can
 *   // obtain its XID/HWND before the pipeline is started up and the videosink
 *   // asks for the XID/HWND of the window to render onto
 *   gtk_widget_realize (video_window);
 * 
 *   // we should have the XID/HWND now
 *   g_assert (video_window_handle != 0);
 *   ...
 *   // set up sync handler for setting the xid once the pipeline is started
 *   bus = gst_pipeline_get_bus (GST_PIPELINE (pipeline));
 *   gst_bus_set_sync_handler (bus, (GstBusSyncHandler) bus_sync_handler, NULL,
 *       NULL);
 *   gst_object_unref (bus);
 *   ...
 *   gst_element_set_state (pipeline, GST_STATE_PLAYING);
 *   ...
 * }
 * ```
 * 
 * 
 * ## GstVideoOverlay and Qt
 * 
 * 
 * ```
 * #include <glib.h>;
 * #include <gst/gst.h>;
 * #include <gst/video/videooverlay.h>;
 * 
 * #include <QApplication>;
 * #include <QTimer>;
 * #include <QWidget>;
 * 
 * int main(int argc, char *argv[])
 * {
 *   if (!g_thread_supported ())
 *     g_thread_init (NULL);
 * 
 *   gst_init (&argc, &argv);
 *   QApplication app(argc, argv);
 *   app.connect(&app, SIGNAL(lastWindowClosed()), &app, SLOT(quit ()));
 * 
 *   // prepare the pipeline
 * 
 *   GstElement *pipeline = gst_pipeline_new ("xvoverlay");
 *   GstElement *src = gst_element_factory_make ("videotestsrc", NULL);
 *   GstElement *sink = gst_element_factory_make ("xvimagesink", NULL);
 *   gst_bin_add_many (GST_BIN (pipeline), src, sink, NULL);
 *   gst_element_link (src, sink);
 * 
 *   // prepare the ui
 * 
 *   QWidget window;
 *   window.resize(320, 240);
 *   window.show();
 * 
 *   WId xwinid = window.winId();
 *   gst_video_overlay_set_window_handle (GST_VIDEO_OVERLAY (sink), xwinid);
 * 
 *   // run the pipeline
 * 
 *   GstStateChangeReturn sret = gst_element_set_state (pipeline,
 *       GST_STATE_PLAYING);
 *   if (sret == GST_STATE_CHANGE_FAILURE) {
 *     gst_element_set_state (pipeline, GST_STATE_NULL);
 *     gst_object_unref (pipeline);
 *     // Exit application
 *     QTimer::singleShot(0, QApplication::activeWindow(), SLOT(quit()));
 *   }
 * 
 *   int ret = app.exec();
 * 
 *   window.hide();
 *   gst_element_set_state (pipeline, GST_STATE_NULL);
 *   gst_object_unref (pipeline);
 * 
 *   return ret;
 * }
 * ```
 * 
 * @interface 
 */
export class VideoOverlay extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlay

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoOverlay

    constructor(config?: VideoOverlay.ConstructorProperties) 
    _init(config?: VideoOverlay.ConstructorProperties): void
    /**
     * This helper shall be used by classes implementing the #GstVideoOverlay
     * interface that want the render rectangle to be controllable using
     * properties. This helper will install "render-rectangle" property into the
     * class.
     * @param oclass The class on which the properties will be installed
     * @param lastPropId The first free property ID to use
     */
    static installProperties(oclass: GObject.ObjectClass, lastPropId: number): void
    /**
     * This helper shall be used by classes implementing the #GstVideoOverlay
     * interface that want the render rectangle to be controllable using
     * properties. This helper will parse and set the render rectangle calling
     * gst_video_overlay_set_render_rectangle().
     * @param object The instance on which the property is set
     * @param lastPropId The highest property ID.
     * @param propertyId The property ID
     * @param value The #GValue to be set
     * @returns %TRUE if the @property_id matches the GstVideoOverlay property
     */
    static setProperty(object: GObject.Object, lastPropId: number, propertyId: number, value: any): boolean
}

export module ColorBalanceChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (value: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ColorBalanceChannel {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalanceChannel

    __gtype__: number

    // Own fields of GstVideo-1.0.GstVideo.ColorBalanceChannel

    parent: GObject.Object
    /**
     * A string containing a descriptive name for this channel
     * @field 
     */
    label: string | null
    /**
     * The minimum valid value for this channel.
     * @field 
     */
    minValue: number
    /**
     * The maximum valid value for this channel.
     * @field 
     */
    maxValue: number

    // Own virtual methods of GstVideo-1.0.GstVideo.ColorBalanceChannel

    valueChanged(value: number): void

    // Own signals of GstVideo-1.0.GstVideo.ColorBalanceChannel

    connect(sigName: "value-changed", callback: ColorBalanceChannel.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: ColorBalanceChannel.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: ColorBalanceChannel.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: ColorBalanceChannel.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of GstVideo-1.0.GstVideo.ColorBalanceChannel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GstColorBalanceChannel object represents a parameter
 * for modifying the color balance implemented by an element providing the
 * #GstColorBalance interface. For example, Hue or Saturation.
 * @class 
 */
export class ColorBalanceChannel extends GObject.Object {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalanceChannel

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.ColorBalanceChannel

    constructor(config?: ColorBalanceChannel.ConstructorProperties) 
    _init(config?: ColorBalanceChannel.ConstructorProperties): void
}

export module VideoAggregator {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Aggregator.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoAggregator

        /**
         * Causes the element to aggregate on a timeout even when no live source is
         * connected to its sinks. See #GstAggregator:min-upstream-latency for a
         * companion property: in the vast majority of cases where you plan to plug in
         * live sources with a non-zero latency, you should set it to a non-zero value.
         */
        forceLive?: boolean | null
    }

}

export interface VideoAggregator {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregator

    /**
     * Causes the element to aggregate on a timeout even when no live source is
     * connected to its sinks. See #GstAggregator:min-upstream-latency for a
     * companion property: in the vast majority of cases where you plan to plug in
     * live sources with a non-zero latency, you should set it to a non-zero value.
     */
    readonly forceLive: boolean
    __gtype__: number

    // Conflicting properties

    startTime: any
    parent: Gst.Element & Gst.Object & Gst.Object
    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregator

    aggregator: GstBase.Aggregator
    /**
     * The #GstVideoInfo representing the currently set
     * srcpad caps.
     * @field 
     */
    info: VideoInfo

    // Owm methods of GstVideo-1.0.GstVideo.VideoAggregator

    /**
     * The returned #GstTaskPool is used internally for performing parallel
     * video format conversions/scaling/etc during the
     * #GstVideoAggregatorPadClass::prepare_frame_start() process.
     * Subclasses can add their own operation to perform using the returned
     * #GstTaskPool during #GstVideoAggregatorClass::aggregate_frames().
     * @returns the #GstTaskPool that can be used by subclasses     for performing concurrent operations
     */
    getExecutionTaskPool(): Gst.TaskPool

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoAggregator

    aggregateFrames(outbuffer: Gst.Buffer): Gst.FlowReturn
    createOutputBuffer(outbuffer: Gst.Buffer): Gst.FlowReturn
    findBestFormat(downstreamCaps: Gst.Caps, bestInfo: VideoInfo): /* atLeastOneAlpha */ boolean
    updateCaps(caps: Gst.Caps): Gst.Caps

    // Class property signals of GstVideo-1.0.GstVideo.VideoAggregator

    connect(sigName: "notify::force-live", callback: (...args: any[]) => void): number
    on(sigName: "notify::force-live", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::force-live", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::force-live", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::force-live", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-upstream-latency", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time-selection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * VideoAggregator can accept AYUV, ARGB and BGRA video streams. For each of the requested
 * sink pads it will compare the incoming geometry and framerate to define the
 * output parameters. Indeed output video frames will have the geometry of the
 * biggest incoming video stream and the framerate of the fastest incoming one.
 * 
 * VideoAggregator will do colorspace conversion.
 * 
 * Zorder for each input stream can be configured on the
 * #GstVideoAggregatorPad.
 * @class 
 */
export class VideoAggregator extends GstBase.Aggregator {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregator

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAggregator

    constructor(config?: VideoAggregator.ConstructorProperties) 
    _init(config?: VideoAggregator.ConstructorProperties): void
}

export module VideoAggregatorConvertPad {

    // Constructor properties interface

    export interface ConstructorProperties extends VideoAggregatorPad.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

        converterConfig?: Gst.Structure | null
    }

}

export interface VideoAggregatorConvertPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    converterConfig: Gst.Structure
    __gtype__: number

    // Conflicting properties

    parent: GstBase.AggregatorPad & Gst.Pad & Gst.Object
    object: any

    // Owm methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    /**
     * Requests the pad to check and update the converter before the next usage to
     * update for any changes that have happened.
     */
    updateConversionInfo(): void

    // Overloads of updateConversionInfo

    updateConversionInfo(): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    createConversionInfo(agg: VideoAggregator, conversionInfo: VideoInfo): void

    // Class property signals of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    connect(sigName: "notify::converter-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::converter-config", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-last-buffer-repeat", ...args: any[]): void
    connect(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeat-after-eos", ...args: any[]): void
    connect(sigName: "notify::zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zorder", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An implementation of GstPad that can be used with #GstVideoAggregator.
 * 
 * See #GstVideoAggregator for more details.
 * @class 
 */
export class VideoAggregatorConvertPad extends VideoAggregatorPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAggregatorConvertPad

    constructor(config?: VideoAggregatorConvertPad.ConstructorProperties) 
    _init(config?: VideoAggregatorConvertPad.ConstructorProperties): void
}

export module VideoAggregatorPad {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.AggregatorPad.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoAggregatorPad

        maxLastBufferRepeat?: number | null
        repeatAfterEos?: boolean | null
        zorder?: number | null
    }

}

export interface VideoAggregatorPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorPad

    maxLastBufferRepeat: number
    repeatAfterEos: boolean
    zorder: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorPad

    parent: GstBase.AggregatorPad & Gst.Pad & Gst.Object & Gst.Object
    /**
     * The #GstVideoInfo currently set on the pad
     * @field 
     */
    info: VideoInfo

    // Owm methods of GstVideo-1.0.GstVideo.VideoAggregatorPad

    /**
     * Returns the currently queued buffer that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * 
     * The return value is only valid until #GstVideoAggregatorClass::aggregate_frames or #GstVideoAggregatorPadClass::prepare_frame
     * returns.
     * @returns The currently queued buffer
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
     * @returns The currently prepared video frame
     */
    getPreparedFrame(): VideoFrame
    /**
     * Checks if the pad currently has a buffer queued that is going to be used
     * for the current output frame.
     * 
     * This must only be called from the #GstVideoAggregatorClass::aggregate_frames virtual method,
     * or from the #GstVideoAggregatorPadClass::prepare_frame virtual method of the aggregator pads.
     * @returns %TRUE if the pad has currently a buffer queued
     */
    hasCurrentBuffer(): boolean
    /**
     * Allows selecting that this pad requires an output format with alpha
     * @param needsAlpha %TRUE if this pad requires alpha output
     */
    setNeedsAlpha(needsAlpha: boolean): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoAggregatorPad

    cleanFrame(videoaggregator: VideoAggregator, preparedFrame: VideoFrame): void
    prepareFrame(videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame): boolean
    /**
     * Finish preparing `prepared_frame`.
     * 
     * If overriden, `prepare_frame_start` must also be overriden.
     * @virtual 
     * @param videoaggregator the parent #GstVideoAggregator
     * @param preparedFrame the #GstVideoFrame to prepare into
     */
    prepareFrameFinish(videoaggregator: VideoAggregator, preparedFrame: VideoFrame): void
    /**
     * Begin preparing the frame from the pad buffer and sets it to prepared_frame.
     * 
     * If overriden, `prepare_frame_finish` must also be overriden.
     * @virtual 
     * @param videoaggregator the parent #GstVideoAggregator
     * @param buffer the input #GstBuffer to prepare
     * @param preparedFrame the #GstVideoFrame to prepare into
     */
    prepareFrameStart(videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame): void
    updateConversionInfo(): void

    // Class property signals of GstVideo-1.0.GstVideo.VideoAggregatorPad

    connect(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-last-buffer-repeat", ...args: any[]): void
    connect(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeat-after-eos", ...args: any[]): void
    connect(sigName: "notify::zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zorder", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class VideoAggregatorPad extends GstBase.AggregatorPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorPad

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAggregatorPad

    constructor(config?: VideoAggregatorPad.ConstructorProperties) 
    _init(config?: VideoAggregatorPad.ConstructorProperties): void
}

export module VideoAggregatorParallelConvertPad {

    // Constructor properties interface

    export interface ConstructorProperties extends VideoAggregatorConvertPad.ConstructorProperties {
    }

}

export interface VideoAggregatorParallelConvertPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPad

    __gtype__: number

    // Conflicting properties

    parent: GstBase.AggregatorPad & Gst.Pad & Gst.Object
    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPad

    parentInstance: VideoAggregatorConvertPad

    // Conflicting methods

    /**
     * Requests the pad to check and update the converter before the next usage to
     * update for any changes that have happened.
     */
    updateConversionInfo(): void

    // Overloads of updateConversionInfo

    updateConversionInfo(): void
    updateConversionInfo(): void
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPad

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::converter-config", callback: (...args: any[]) => void): number
    on(sigName: "notify::converter-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::converter-config", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::converter-config", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::converter-config", ...args: any[]): void
    connect(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-last-buffer-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-last-buffer-repeat", ...args: any[]): void
    connect(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): number
    on(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::repeat-after-eos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::repeat-after-eos", ...args: any[]): void
    connect(sigName: "notify::zorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zorder", ...args: any[]): void
    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An implementation of GstPad that can be used with #GstVideoAggregator.
 * 
 * See #GstVideoAggregator for more details.
 * @class 
 */
export class VideoAggregatorParallelConvertPad extends VideoAggregatorConvertPad {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPad

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPad

    constructor(config?: VideoAggregatorParallelConvertPad.ConstructorProperties) 
    _init(config?: VideoAggregatorParallelConvertPad.ConstructorProperties): void
}

export module VideoBufferPool {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.BufferPool.ConstructorProperties {
    }

}

export interface VideoBufferPool {

    // Own properties of GstVideo-1.0.GstVideo.VideoBufferPool

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoBufferPool

    bufferpool: Gst.BufferPool
    priv: VideoBufferPoolPrivate

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstVideo-1.0.GstVideo.VideoBufferPool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class VideoBufferPool extends Gst.BufferPool {

    // Own properties of GstVideo-1.0.GstVideo.VideoBufferPool

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoBufferPool

    constructor(config?: VideoBufferPool.ConstructorProperties) 
    /**
     * Create a new bufferpool that can allocate video frames. This bufferpool
     * supports all the video bufferpool options.
     * @constructor 
     * @returns a new #GstBufferPool to allocate video frames
     */
    constructor() 
    /**
     * Create a new bufferpool that can allocate video frames. This bufferpool
     * supports all the video bufferpool options.
     * @constructor 
     * @returns a new #GstBufferPool to allocate video frames
     */
    static new(): VideoBufferPool
    _init(config?: VideoBufferPool.ConstructorProperties): void
}

export module VideoDecoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoDecoder

        /**
         * GstVideoDecoderRequestSyncPointFlags to use for the automatically
         * requested sync points if `automatic-request-sync-points` is enabled.
         */
        automaticRequestSyncPointFlags?: VideoDecoderRequestSyncPointFlags | null
        /**
         * If set to %TRUE the decoder will automatically request sync points when
         * it seems like a good idea, e.g. if the first frames are not key frames or
         * if packet loss was reported by upstream.
         */
        automaticRequestSyncPoints?: boolean | null
        /**
         * If set to %TRUE the decoder will discard frames that are marked as
         * corrupted instead of outputting them.
         */
        discardCorruptedFrames?: boolean | null
        /**
         * Maximum number of tolerated consecutive decode errors. See
         * gst_video_decoder_set_max_errors() for more details.
         */
        maxErrors?: number | null
        /**
         * Minimum interval between force-key-unit events sent upstream by the
         * decoder. Setting this to 0 will cause every event to be handled, setting
         * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
         * 
         * See gst_video_event_new_upstream_force_key_unit() for more details about
         * force-key-unit events.
         */
        minForceKeyUnitInterval?: number | null
        /**
         * If set to %TRUE the decoder will handle QoS events received
         * from downstream elements.
         * This includes dropping output frames which are detected as late
         * using the metrics reported by those events.
         */
        qos?: boolean | null
    }

}

export interface VideoDecoder {

    // Own properties of GstVideo-1.0.GstVideo.VideoDecoder

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
    __gtype__: number

    // Conflicting properties

    object: any

    // Owm methods of GstVideo-1.0.GstVideo.VideoDecoder

    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     * @returns allocated buffer, or NULL if no buffer could be     allocated (e.g. when downstream is flushing or shutting down)
     */
    allocateOutputBuffer(): Gst.Buffer | null
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     * @returns %GST_FLOW_OK if an output buffer could be allocated
     */
    allocateOutputFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     * @returns %GST_FLOW_OK if an output buffer could be allocated
     */
    allocateOutputFrameWithParams(frame: VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     * @returns a #GstFlowReturn, usually GST_FLOW_OK.
     */
    dropFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     * @returns a #GstFlowReturn, usually GST_FLOW_OK.
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
     * @param frame a decoded #GstVideoCodecFrame
     * @returns a #GstFlowReturn resulting from sending data downstream
     */
    finishFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     * @returns a #GstFlowReturn, usually GST_FLOW_OK.
     */
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    getBufferPool(): Gst.BufferPool | null
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     * @returns pending unfinished #GstVideoCodecFrame identified by @frame_number.
     */
    getFrame(frameNumber: number): VideoCodecFrame | null
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     * @returns pending unfinished #GstVideoCodecFrame.
     */
    getFrames(): VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     * @returns the current subframe index received in subframe mode, 1 otherwise.
     */
    getInputSubframeIndex(frame: VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime, /* maxLatency */ Gst.ClockTime ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     * @returns max decoding time.
     */
    getMaxDecodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     * @returns %TRUE if required format handling is enabled.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     * @returns %TRUE if a sync point is required in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     * @returns oldest pending unfinished #GstVideoCodecFrame.
     */
    getOldestFrame(): VideoCodecFrame | null
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     * @returns #GstVideoCodecState describing format of video data.
     */
    getOutputState(): VideoCodecState | null
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     * @returns TRUE if input data is considered packetized.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     * @returns The number of bytes pending for the current frame
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     * @returns the current subframe processed received in subframe mode.
     */
    getProcessedSubframeIndex(frame: VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     * @returns TRUE if input data is considered as sub frames.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     * @returns a #GstFlowReturn
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     * @returns a #GstFlowReturn, usually GST_FLOW_OK.
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
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    // Has conflict: negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     * @returns a #GstCaps owned by caller
     */
    proxyGetcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
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
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: VideoCodecFrame, flags: VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     * @returns the newly configured output state.
     */
    setInterlacedOutputState(fmt: VideoFormat, interlaceMode: VideoInterlaceMode, width: number, height: number, reference: VideoCodecState | null): VideoCodecState | null
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder latency
     * is. If the provided values changed from previously provided ones, this will
     * also post a LATENCY message on the bus so the pipeline can reconfigure its
     * global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
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
     * @param enabled new state
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
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     * @returns the newly configured output state.
     */
    setOutputState(fmt: VideoFormat, width: number, height: number, reference: VideoCodecState | null): VideoCodecState | null
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
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
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoDecoder

    close(): boolean
    decideAllocation(query: Gst.Query): boolean
    drain(): Gst.FlowReturn
    finish(): Gst.FlowReturn
    flush(): boolean
    getcaps(filter: Gst.Caps): Gst.Caps
    handleFrame(frame: VideoCodecFrame): Gst.FlowReturn
    handleMissingData(timestamp: Gst.ClockTime, duration: Gst.ClockTime): boolean
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    open(): boolean
    parse(frame: VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean): Gst.FlowReturn
    proposeAllocation(query: Gst.Query): boolean
    reset(hard: boolean): boolean
    setFormat(state: VideoCodecState): boolean
    sinkEvent(event: Gst.Event): boolean
    sinkQuery(query: Gst.Query): boolean
    srcEvent(event: Gst.Event): boolean
    srcQuery(query: Gst.Query): boolean
    start(): boolean
    stop(): boolean
    transformMeta(frame: VideoCodecFrame, meta: Gst.Meta): boolean

    // Class property signals of GstVideo-1.0.GstVideo.VideoDecoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This base class is for video decoders turning encoded data into raw video
 * frames.
 * 
 * The GstVideoDecoder base class and derived subclasses should cooperate as
 * follows:
 * 
 * ## Configuration
 * 
 *   * Initially, GstVideoDecoder calls `start` when the decoder element
 *     is activated, which allows the subclass to perform any global setup.
 * 
 *   * GstVideoDecoder calls `set_format` to inform the subclass of caps
 *     describing input video data that it is about to receive, including
 *     possibly configuration data.
 *     While unlikely, it might be called more than once, if changing input
 *     parameters require reconfiguration.
 * 
 *   * Incoming data buffers are processed as needed, described in Data
 *     Processing below.
 * 
 *   * GstVideoDecoder calls `stop` at end of all processing.
 * 
 * ## Data processing
 * 
 *   * The base class gathers input data, and optionally allows subclass
 *     to parse this into subsequently manageable chunks, typically
 *     corresponding to and referred to as 'frames'.
 * 
 *   * Each input frame is provided in turn to the subclass' `handle_frame`
 *     callback.
 *   * When the subclass enables the subframe mode with `gst_video_decoder_set_subframe_mode`,
 *     the base class will provide to the subclass the same input frame with
 *     different input buffers to the subclass `handle_frame`
 *     callback. During this call, the subclass needs to take
 *     ownership of the input_buffer as `GstVideoCodecFrame`.input_buffer
 *     will have been changed before the next subframe buffer is received.
 *     The subclass will call `gst_video_decoder_have_last_subframe`
 *     when a new input frame can be created by the base class.
 *     Every subframe will share the same `GstVideoCodecFrame`.output_buffer
 *     to write the decoding result. The subclass is responsible to protect
 *     its access.
 * 
 *   * If codec processing results in decoded data, the subclass should call
 *     `gst_video_decoder_finish_frame` to have decoded data pushed
 *     downstream. In subframe mode
 *     the subclass should call `gst_video_decoder_finish_subframe` until the
 *     last subframe where it should call `gst_video_decoder_finish_frame`.
 *     The subclass can detect the last subframe using GST_VIDEO_BUFFER_FLAG_MARKER
 *     on buffers or using its own logic to collect the subframes.
 *     In case of decoding failure, the subclass must call
 *     `gst_video_decoder_drop_frame` or `gst_video_decoder_drop_subframe,`
 *     to allow the base class to do timestamp and offset tracking, and possibly
 *     to requeue the frame for a later attempt in the case of reverse playback.
 * 
 * ## Shutdown phase
 * 
 *   * The GstVideoDecoder class calls `stop` to inform the subclass that data
 *     parsing will be stopped.
 * 
 * ## Additional Notes
 * 
 *   * Seeking/Flushing
 * 
 *     * When the pipeline is seeked or otherwise flushed, the subclass is
 *       informed via a call to its `reset` callback, with the hard parameter
 *       set to true. This indicates the subclass should drop any internal data
 *       queues and timestamps and prepare for a fresh set of buffers to arrive
 *       for parsing and decoding.
 * 
 *   * End Of Stream
 * 
 *     * At end-of-stream, the subclass `parse` function may be called some final
 *       times with the at_eos parameter set to true, indicating that the element
 *       should not expect any more data to be arriving, and it should parse and
 *       remaining frames and call gst_video_decoder_have_frame() if possible.
 * 
 * The subclass is responsible for providing pad template caps for
 * source and sink pads. The pads need to be named "sink" and "src". It also
 * needs to provide information about the output caps, when they are known.
 * This may be when the base class calls the subclass' `set_format` function,
 * though it might be during decoding, before calling
 * `gst_video_decoder_finish_frame`. This is done via
 * `gst_video_decoder_set_output_state`
 * 
 * The subclass is also responsible for providing (presentation) timestamps
 * (likely based on corresponding input ones).  If that is not applicable
 * or possible, the base class provides limited framerate based interpolation.
 * 
 * Similarly, the base class provides some limited (legacy) seeking support
 * if specifically requested by the subclass, as full-fledged support
 * should rather be left to upstream demuxer, parser or alike.  This simple
 * approach caters for seeking and duration reporting using estimated input
 * bitrates. To enable it, a subclass should call
 * `gst_video_decoder_set_estimate_rate` to enable handling of incoming
 * byte-streams.
 * 
 * The base class provides some support for reverse playback, in particular
 * in case incoming data is not packetized or upstream does not provide
 * fragments on keyframe boundaries.  However, the subclass should then be
 * prepared for the parsing and frame processing stage to occur separately
 * (in normal forward processing, the latter immediately follows the former),
 * The subclass also needs to ensure the parsing stage properly marks
 * keyframes, unless it knows the upstream elements will do so properly for
 * incoming data.
 * 
 * The bare minimum that a functional subclass needs to implement is:
 * 
 *   * Provide pad templates
 *   * Inform the base class of output caps via
 *      `gst_video_decoder_set_output_state`
 * 
 *   * Parse input data, if it is not considered packetized from upstream
 *      Data will be provided to `parse` which should invoke
 *      `gst_video_decoder_add_to_frame` and `gst_video_decoder_have_frame` to
 *      separate the data belonging to each video frame.
 * 
 *   * Accept data in `handle_frame` and provide decoded results to
 *      `gst_video_decoder_finish_frame,` or call `gst_video_decoder_drop_frame`.
 * @class 
 */
export class VideoDecoder extends Gst.Element {

    // Own properties of GstVideo-1.0.GstVideo.VideoDecoder

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoDecoder

    constructor(config?: VideoDecoder.ConstructorProperties) 
    _init(config?: VideoDecoder.ConstructorProperties): void
}

export module VideoEncoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Preset.ConstructorProperties, Gst.Element.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoEncoder

        /**
         * Minimum interval between force-keyunit requests in nanoseconds. See
         * gst_video_encoder_set_min_force_key_unit_interval() for more details.
         */
        minForceKeyUnitInterval?: number | null
        qos?: boolean | null
    }

}

export interface VideoEncoder extends Gst.Preset {

    // Own properties of GstVideo-1.0.GstVideo.VideoEncoder

    /**
     * Minimum interval between force-keyunit requests in nanoseconds. See
     * gst_video_encoder_set_min_force_key_unit_interval() for more details.
     */
    minForceKeyUnitInterval: number
    qos: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Owm methods of GstVideo-1.0.GstVideo.VideoEncoder

    /**
     * Helper function that allocates a buffer to hold an encoded video frame
     * for `encoder'`s current #GstVideoCodecState.
     * @param size size of the buffer
     * @returns allocated buffer
     */
    allocateOutputBuffer(size: number): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold an encoded video frame for `encoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     * @param size size of the buffer
     * @returns %GST_FLOW_OK if an output buffer could be allocated
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
     * @param frame an encoded #GstVideoCodecFrame
     * @returns a #GstFlowReturn resulting from sending data downstream
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
     * @param frame a #GstVideoCodecFrame being encoded
     * @returns a #GstFlowReturn resulting from pushing the buffer downstream.
     */
    finishSubframe(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoEncoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     * @returns pending unfinished #GstVideoCodecFrame identified by @frame_number.
     */
    getFrame(frameNumber: number): VideoCodecFrame | null
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     * @returns pending unfinished #GstVideoCodecFrame.
     */
    getFrames(): VideoCodecFrame[]
    /**
     * Query the configured encoding latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime, /* maxLatency */ Gst.ClockTime ]
    /**
     * Determines maximum possible encoding time for `frame` that will
     * allow it to encode and arrive in time (as determined by QoS events).
     * In particular, a negative result means encoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * 
     * If no QoS events have been received from downstream, or if
     * #GstVideoEncoder:qos is disabled this function returns #G_MAXINT64.
     * @param frame a #GstVideoCodecFrame
     * @returns max decoding time.
     */
    getMaxEncodeTime(frame: VideoCodecFrame): Gst.ClockTimeDiff
    /**
     * Returns the minimum force-keyunit interval, see gst_video_encoder_set_min_force_key_unit_interval()
     * for more details.
     * @returns the minimum force-keyunit interval
     */
    getMinForceKeyUnitInterval(): Gst.ClockTime
    /**
     * Get the oldest unfinished pending #GstVideoCodecFrame
     * @returns oldest unfinished pending #GstVideoCodecFrame
     */
    getOldestFrame(): VideoCodecFrame | null
    /**
     * Get the current #GstVideoCodecState
     * @returns #GstVideoCodecState describing format of video data.
     */
    getOutputState(): VideoCodecState | null
    /**
     * Checks if `encoder` is currently configured to handle Quality-of-Service
     * events from downstream.
     * @returns %TRUE if the encoder is configured to perform Quality-of-Service.
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
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    // Has conflict: negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements (e.g. muxers).
     * @param caps initial caps
     * @param filter filter caps
     * @returns a #GstCaps owned by caller
     */
    proxyGetcaps(caps: Gst.Caps | null, filter: Gst.Caps | null): Gst.Caps
    /**
     * Set the codec headers to be sent downstream whenever requested.
     * @param headers a list of #GstBuffer containing the codec header
     */
    setHeaders(headers: Gst.Buffer[]): void
    /**
     * Informs baseclass of encoding latency. If the provided values changed from
     * previously provided ones, this will also post a LATENCY message on the bus
     * so the pipeline can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets the minimum interval for requesting keyframes based on force-keyunit
     * events. Setting this to 0 will allow to handle every event, setting this to
     * %GST_CLOCK_TIME_NONE causes force-keyunit events to be ignored.
     * @param interval minimum interval
     */
    setMinForceKeyUnitInterval(interval: Gst.ClockTime): void
    /**
     * Request minimal value for PTS passed to handle_frame.
     * 
     * For streams with reordered frames this can be used to ensure that there
     * is enough time to accommodate first DTS, which may be less than first PTS
     * @param minPts minimal PTS that will be passed to handle_frame
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
     * @param caps the #GstCaps to use for the output
     * @param reference An optional reference `GstVideoCodecState`
     * @returns the newly configured output state.
     */
    setOutputState(caps: Gst.Caps, reference: VideoCodecState | null): VideoCodecState | null
    /**
     * Configures `encoder` to handle Quality-of-Service events from downstream.
     * @param enabled the new qos value.
     */
    setQosEnabled(enabled: boolean): void

    // Conflicting methods

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoEncoder

    close(): boolean
    decideAllocation(query: Gst.Query): boolean
    finish(): Gst.FlowReturn
    flush(): boolean
    getcaps(filter: Gst.Caps): Gst.Caps
    handleFrame(frame: VideoCodecFrame): Gst.FlowReturn
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    open(): boolean
    prePush(frame: VideoCodecFrame): Gst.FlowReturn
    proposeAllocation(query: Gst.Query): boolean
    reset(hard: boolean): boolean
    setFormat(state: VideoCodecState): boolean
    sinkEvent(event: Gst.Event): boolean
    sinkQuery(query: Gst.Query): boolean
    srcEvent(event: Gst.Event): boolean
    srcQuery(query: Gst.Query): boolean
    start(): boolean
    stop(): boolean
    transformMeta(frame: VideoCodecFrame, meta: Gst.Meta): boolean

    // Class property signals of GstVideo-1.0.GstVideo.VideoEncoder

    connect(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This base class is for video encoders turning raw video into
 * encoded video data.
 * 
 * GstVideoEncoder and subclass should cooperate as follows.
 * 
 * ## Configuration
 * 
 *   * Initially, GstVideoEncoder calls `start` when the encoder element
 *     is activated, which allows subclass to perform any global setup.
 *   * GstVideoEncoder calls `set_format` to inform subclass of the format
 *     of input video data that it is about to receive.  Subclass should
 *     setup for encoding and configure base class as appropriate
 *     (e.g. latency). While unlikely, it might be called more than once,
 *     if changing input parameters require reconfiguration.  Baseclass
 *     will ensure that processing of current configuration is finished.
 *   * GstVideoEncoder calls `stop` at end of all processing.
 * 
 * ## Data processing
 * 
 *     * Base class collects input data and metadata into a frame and hands
 *       this to subclass' `handle_frame`.
 * 
 *     * If codec processing results in encoded data, subclass should call
 *       `gst_video_encoder_finish_frame` to have encoded data pushed
 *       downstream.
 * 
 *     * If implemented, baseclass calls subclass `pre_push` just prior to
 *       pushing to allow subclasses to modify some metadata on the buffer.
 *       If it returns GST_FLOW_OK, the buffer is pushed downstream.
 * 
 *     * GstVideoEncoderClass will handle both srcpad and sinkpad events.
 *       Sink events will be passed to subclass if `event` callback has been
 *       provided.
 * 
 * ## Shutdown phase
 * 
 *   * GstVideoEncoder class calls `stop` to inform the subclass that data
 *     parsing will be stopped.
 * 
 * Subclass is responsible for providing pad template caps for
 * source and sink pads. The pads need to be named "sink" and "src". It should
 * also be able to provide fixed src pad caps in `getcaps` by the time it calls
 * `gst_video_encoder_finish_frame`.
 * 
 * Things that subclass need to take care of:
 * 
 *   * Provide pad templates
 *   * Provide source pad caps before pushing the first buffer
 *   * Accept data in `handle_frame` and provide encoded results to
 *      `gst_video_encoder_finish_frame`.
 * 
 * 
 * The #GstVideoEncoder:qos property will enable the Quality-of-Service
 * features of the encoder which gather statistics about the real-time
 * performance of the downstream elements. If enabled, subclasses can
 * use gst_video_encoder_get_max_encode_time() to check if input frames
 * are already late and drop them right away to give a chance to the
 * pipeline to catch up.
 * @class 
 */
export class VideoEncoder extends Gst.Element {

    // Own properties of GstVideo-1.0.GstVideo.VideoEncoder

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoEncoder

    constructor(config?: VideoEncoder.ConstructorProperties) 
    _init(config?: VideoEncoder.ConstructorProperties): void
}

export module VideoFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseTransform.ConstructorProperties {
    }

}

export interface VideoFilter {

    // Own properties of GstVideo-1.0.GstVideo.VideoFilter

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoFilter

    element: any
    negotiated: boolean
    inInfo: VideoInfo
    outInfo: VideoInfo

    // Conflicting methods

    query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoFilter

    setInfo(incaps: Gst.Caps, inInfo: VideoInfo, outcaps: Gst.Caps, outInfo: VideoInfo): boolean
    transformFrame(inframe: VideoFrame, outframe: VideoFrame): Gst.FlowReturn
    transformFrameIp(frame: VideoFrame): Gst.FlowReturn

    // Class property signals of GstVideo-1.0.GstVideo.VideoFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Provides useful functions and a base class for video filters.
 * 
 * The videofilter will by default enable QoS on the parent GstBaseTransform
 * to implement frame dropping.
 * @class 
 */
export class VideoFilter extends GstBase.BaseTransform {

    // Own properties of GstVideo-1.0.GstVideo.VideoFilter

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoFilter

    constructor(config?: VideoFilter.ConstructorProperties) 
    _init(config?: VideoFilter.ConstructorProperties): void
}

export interface VideoMultiviewFlagsSet {
}

/**
 * See #GstVideoMultiviewFlags.
 * @class 
 */
export class VideoMultiviewFlagsSet extends Gst.FlagSet {

    // Own properties of GstVideo-1.0.GstVideo.VideoMultiviewFlagsSet

    static name: string
}

export module VideoSink {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.BaseSink.ConstructorProperties {

        // Own constructor properties of GstVideo-1.0.GstVideo.VideoSink

        /**
         * Whether to show video frames during preroll. If set to %FALSE, video
         * frames will only be rendered in PLAYING state.
         */
        showPrerollFrame?: boolean | null
    }

}

export interface VideoSink {

    // Own properties of GstVideo-1.0.GstVideo.VideoSink

    /**
     * Whether to show video frames during preroll. If set to %FALSE, video
     * frames will only be rendered in PLAYING state.
     */
    showPrerollFrame: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstVideo-1.0.GstVideo.VideoSink

    element: any
    /**
     * video width (derived class needs to set this)
     * @field 
     */
    width: number
    /**
     * video height (derived class needs to set this)
     * @field 
     */
    height: number

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstVideo-1.0.GstVideo.VideoSink

    /**
     * Notifies the subclass of changed #GstVideoInfo.
     * @virtual 
     * @param caps A #GstCaps.
     * @param info A #GstVideoInfo corresponding to `caps`.
     */
    setInfo(caps: Gst.Caps, info: VideoInfo): boolean
    showFrame(buf: Gst.Buffer): Gst.FlowReturn

    // Class property signals of GstVideo-1.0.GstVideo.VideoSink

    connect(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-preroll-frame", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttle-time", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Provides useful functions and a base class for video sinks.
 * 
 * GstVideoSink will configure the default base sink to drop frames that
 * arrive later than 20ms as this is considered the default threshold for
 * observing out-of-sync frames.
 * @class 
 */
export class VideoSink extends GstBase.BaseSink {

    // Own properties of GstVideo-1.0.GstVideo.VideoSink

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoSink

    constructor(config?: VideoSink.ConstructorProperties) 
    _init(config?: VideoSink.ConstructorProperties): void
    static centerRect(src: VideoRectangle, dst: VideoRectangle, scaling: boolean): /* result */ VideoRectangle
}

export interface ColorBalanceChannelClass {

    // Own fields of GstVideo-1.0.GstVideo.ColorBalanceChannelClass

    /**
     * the parent class
     * @field 
     */
    parent: GObject.ObjectClass
    valueChanged: (channel: ColorBalanceChannel, value: number) => void
}

/**
 * Color-balance channel class.
 * @record 
 */
export abstract class ColorBalanceChannelClass {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalanceChannelClass

    static name: string
}

export interface ColorBalanceInterface {

    // Own fields of GstVideo-1.0.GstVideo.ColorBalanceInterface

    /**
     * the parent interface
     * @field 
     */
    iface: GObject.TypeInterface
    listChannels: (balance: ColorBalance) => ColorBalanceChannel[]
    setValue: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
    getValue: (balance: ColorBalance, channel: ColorBalanceChannel) => number
    getBalanceType: (balance: ColorBalance) => ColorBalanceType
    valueChanged: (balance: ColorBalance, channel: ColorBalanceChannel, value: number) => void
}

/**
 * Color-balance interface.
 * @record 
 */
export abstract class ColorBalanceInterface {

    // Own properties of GstVideo-1.0.GstVideo.ColorBalanceInterface

    static name: string
}

export interface NavigationInterface {

    // Own fields of GstVideo-1.0.GstVideo.NavigationInterface

    /**
     * the parent interface
     * @field 
     */
    iface: GObject.TypeInterface
    sendEvent: (navigation: Navigation, structure: Gst.Structure) => void
    sendEventSimple: (navigation: Navigation, event: Gst.Event) => void
}

/**
 * Navigation interface.
 * @record 
 */
export abstract class NavigationInterface {

    // Own properties of GstVideo-1.0.GstVideo.NavigationInterface

    static name: string
}

export interface VideoAFDMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoAFDMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * 0 for progressive or field 1 and 1 for field 2
     * @field 
     */
    field: number
    /**
     * #GstVideoAFDSpec that applies to `afd`
     * @field 
     */
    spec: VideoAFDSpec
    /**
     * #GstVideoAFDValue AFD value
     * @field 
     */
    afd: VideoAFDValue
}

/**
 * Active Format Description (AFD)
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
 * @record 
 */
export class VideoAFDMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoAFDMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAFDMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoAffineTransformationMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the column-major 4x4 transformation matrix
     * @field 
     */
    matrix: number[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta

    /**
     * Apply a transformation using the given 4x4 transformation matrix.
     * Performs the multiplication, meta->matrix X matrix.
     * @param matrix a 4x4 transformation matrix to be applied
     */
    applyMatrix(matrix: number[]): void
}

/**
 * Extra buffer metadata for performing an affine transformation using a 4x4
 * matrix. The transformation matrix can be composed with
 * gst_video_affine_transformation_meta_apply_matrix().
 * 
 * The vertices operated on are all in the range 0 to 1, not in
 * Normalized Device Coordinates (-1 to +1). Transforming points in this space
 * are assumed to have an origin at (0.5, 0.5, 0.5) in a left-handed coordinate
 * system with the x-axis moving horizontally (positive values to the right),
 * the y-axis moving vertically (positive values up the screen) and the z-axis
 * perpendicular to the screen (positive values into the screen).
 * @record 
 */
export class VideoAffineTransformationMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoAffineTransformationMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoAggregatorClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorClass

    updateCaps: (videoaggregator: VideoAggregator, caps: Gst.Caps) => Gst.Caps
    aggregateFrames: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    createOutputBuffer: (videoaggregator: VideoAggregator, outbuffer: Gst.Buffer) => Gst.FlowReturn
    findBestFormat: (vagg: VideoAggregator, downstreamCaps: Gst.Caps, bestInfo: VideoInfo) => /* atLeastOneAlpha */ boolean
}

export abstract class VideoAggregatorClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorClass

    static name: string
}

export interface VideoAggregatorConvertPadClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadClass

    parentClass: VideoAggregatorPadClass
    createConversionInfo: (pad: VideoAggregatorConvertPad, agg: VideoAggregator, conversionInfo: VideoInfo) => void
}

export abstract class VideoAggregatorConvertPadClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadClass

    static name: string
}

export interface VideoAggregatorConvertPadPrivate {
}

export class VideoAggregatorConvertPadPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorConvertPadPrivate

    static name: string
}

export interface VideoAggregatorPadClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorPadClass

    parentClass: GstBase.AggregatorPadClass
    updateConversionInfo: (pad: VideoAggregatorPad) => void
    prepareFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => boolean
    cleanFrame: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    prepareFrameStart: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, buffer: Gst.Buffer, preparedFrame: VideoFrame) => void
    prepareFrameFinish: (pad: VideoAggregatorPad, videoaggregator: VideoAggregator, preparedFrame: VideoFrame) => void
    gstReserved: any[]
}

export abstract class VideoAggregatorPadClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorPadClass

    static name: string
}

export interface VideoAggregatorPadPrivate {
}

export class VideoAggregatorPadPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorPadPrivate

    static name: string
}

export interface VideoAggregatorParallelConvertPadClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPadClass

    parentClass: VideoAggregatorConvertPadClass
}

export abstract class VideoAggregatorParallelConvertPadClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorParallelConvertPadClass

    static name: string
}

export interface VideoAggregatorPrivate {
}

export class VideoAggregatorPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoAggregatorPrivate

    static name: string
}

export interface VideoAlignment {

    // Own fields of GstVideo-1.0.GstVideo.VideoAlignment

    /**
     * extra pixels on the top
     * @field 
     */
    paddingTop: number
    /**
     * extra pixels on the bottom
     * @field 
     */
    paddingBottom: number
    /**
     * extra pixels on the left side
     * @field 
     */
    paddingLeft: number
    /**
     * extra pixels on the right side
     * @field 
     */
    paddingRight: number
    /**
     * array with extra alignment requirements for the strides
     * @field 
     */
    strideAlign: number[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoAlignment

    /**
     * Set `align` to its default values with no padding and no alignment.
     */
    reset(): void
}

/**
 * Extra alignment parameters for the memory of video buffers. This
 * structure is usually used to configure the bufferpool if it supports the
 * #GST_BUFFER_POOL_OPTION_VIDEO_ALIGNMENT.
 * @record 
 */
export class VideoAlignment {

    // Own properties of GstVideo-1.0.GstVideo.VideoAlignment

    static name: string
}

export interface VideoAncillary {

    // Own fields of GstVideo-1.0.GstVideo.VideoAncillary

    /**
     * The Data Identifier
     * @field 
     */
    dID: number
    /**
     * The Secondary Data Identifier (if type 2) or the Data
     *                     Block Number (if type 1)
     * @field 
     */
    sDIDBlockNumber: number
    /**
     * The amount of data (in bytes) in `data` (max 255 bytes)
     * @field 
     */
    dataCount: number
    /**
     * The user data content of the Ancillary packet.
     *    Does not contain the ADF, DID, SDID nor CS.
     * @field 
     */
    data: number[]
}

/**
 * Video Ancillary data, according to SMPTE-291M specification.
 * 
 * Note that the contents of the data are always stored as 8bit data (i.e. do not contain
 * the parity check bits).
 * @record 
 */
export class VideoAncillary {

    // Own properties of GstVideo-1.0.GstVideo.VideoAncillary

    static name: string
}

export interface VideoBarMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoBarMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * 0 for progressive or field 1 and 1 for field 2
     * @field 
     */
    field: number
    /**
     * if true then bar data specifies letterbox, otherwise pillarbox
     * @field 
     */
    isLetterbox: boolean
    /**
     * If `is_letterbox` is true, then the value specifies the
     *      last line of a horizontal letterbox bar area at top of reconstructed frame.
     *      Otherwise, it specifies the last horizontal luminance sample of a vertical pillarbox
     *      bar area at the left side of the reconstructed frame
     * @field 
     */
    barData1: number
    /**
     * If `is_letterbox` is true, then the value specifies the
     *      first line of a horizontal letterbox bar area at bottom of reconstructed frame.
     *      Otherwise, it specifies the first horizontal
     *      luminance sample of a vertical pillarbox bar area at the right side of the reconstructed frame.
     * @field 
     */
    barData2: number
}

/**
 * Bar data should be included in video user data
 * whenever the rectangular picture area containing useful information
 * does not extend to the full height or width of the coded frame
 * and AFD alone is insufficient to describe the extent of the image.
 * 
 * Note: either vertical or horizontal bars are specified, but not both.
 * 
 * For more details, see:
 * 
 * https://www.atsc.org/wp-content/uploads/2015/03/a_53-Part-4-2009.pdf
 * 
 * and SMPTE ST2016-1
 * @record 
 */
export class VideoBarMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoBarMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoBarMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoBufferPoolClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoBufferPoolClass

    parentClass: Gst.BufferPoolClass
}

export abstract class VideoBufferPoolClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoBufferPoolClass

    static name: string
}

export interface VideoBufferPoolPrivate {
}

export class VideoBufferPoolPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoBufferPoolPrivate

    static name: string
}

export interface VideoCaptionMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoCaptionMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * The type of Closed Caption contained in the meta.
     * @field 
     */
    captionType: VideoCaptionType
    /**
     * The Closed Caption data.
     * @field 
     */
    data: number[]
    /**
     * The size in bytes of `data`
     * @field 
     */
    size: number
}

/**
 * Extra buffer metadata providing Closed Caption.
 * @record 
 */
export class VideoCaptionMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoCaptionMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoCaptionMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoChromaResample {

    // Owm methods of GstVideo-1.0.GstVideo.VideoChromaResample

    /**
     * Free `resample`
     */
    free(): void
    /**
     * The resampler must be fed `n_lines` at a time. The first line should be
     * at `offset`.
     */
    getInfo(): [ /* nLines */ number, /* offset */ number ]
}

export class VideoChromaResample {

    // Own properties of GstVideo-1.0.GstVideo.VideoChromaResample

    static name: string
}

export interface VideoCodecAlphaMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the encoded alpha frame
     * @field 
     */
    buffer: Gst.Buffer
}

/**
 * This meta is primarily for internal use in GStreamer elements to support
 * VP8/VP9 transparent video stored into WebM or Matroska containers, or
 * transparent static AV1 images. Nothing prevents you from using this meta
 * for custom purposes, but it generally can't be used to easily to add support
 * for alpha channels to CODECs or formats that don't support that out of the
 * box.
 * @record 
 */
export class VideoCodecAlphaMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoCodecAlphaMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoCodecFrame {

    // Own fields of GstVideo-1.0.GstVideo.VideoCodecFrame

    /**
     * Unique identifier for the frame. Use this if you need
     *       to get hold of the frame later (like when data is being decoded).
     *       Typical usage in decoders is to set this on the opaque value provided
     *       to the library and get back the frame using gst_video_decoder_get_frame()
     * @field 
     */
    systemFrameNumber: number
    /**
     * Decoding timestamp
     * @field 
     */
    dts: Gst.ClockTime
    /**
     * Presentation timestamp
     * @field 
     */
    pts: Gst.ClockTime
    /**
     * Duration of the frame
     * @field 
     */
    duration: Gst.ClockTime
    /**
     * Distance in frames from the last synchronization point.
     * @field 
     */
    distanceFromSync: number
    /**
     * the input #GstBuffer that created this frame. The buffer is owned
     *           by the frame and references to the frame instead of the buffer should
     *           be kept.
     * @field 
     */
    inputBuffer: Gst.Buffer
    /**
     * the output #GstBuffer. Implementations should set this either
     *           directly, or by using the
     *           gst_video_decoder_allocate_output_frame() or
     *           gst_video_decoder_allocate_output_buffer() methods. The buffer is
     *           owned by the frame and references to the frame instead of the
     *           buffer should be kept.
     * @field 
     */
    outputBuffer: Gst.Buffer
    /**
     * Running time when the frame will be used.
     * @field 
     */
    deadline: Gst.ClockTime

    // Owm methods of GstVideo-1.0.GstVideo.VideoCodecFrame

    /**
     * Gets private data set on the frame by the subclass via
     * gst_video_codec_frame_set_user_data() previously.
     * @returns The previously set user_data
     */
    getUserData(): any | null
    /**
     * Increases the refcount of the given frame by one.
     * @returns @buf
     */
    ref(): VideoCodecFrame
    /**
     * Sets `user_data` on the frame and the #GDestroyNotify that will be called when
     * the frame is freed. Allows to attach private data by the subclass to frames.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    /**
     * Decreases the refcount of the frame. If the refcount reaches 0, the frame
     * will be freed.
     */
    unref(): void
}

/**
 * A #GstVideoCodecFrame represents a video frame both in raw and
 * encoded form.
 * @record 
 */
export class VideoCodecFrame {

    // Own properties of GstVideo-1.0.GstVideo.VideoCodecFrame

    static name: string
}

export interface VideoCodecState {

    // Own fields of GstVideo-1.0.GstVideo.VideoCodecState

    /**
     * The #GstVideoInfo describing the stream
     * @field 
     */
    info: VideoInfo
    /**
     * The #GstCaps used in the caps negotiation of the pad.
     * @field 
     */
    caps: Gst.Caps
    /**
     * a #GstBuffer corresponding to the
     *     'codec_data' field of a stream, or NULL.
     * @field 
     */
    codecData: Gst.Buffer
    /**
     * The #GstCaps for allocation query and pool
     *     negotiation. Since: 1.10
     * @field 
     */
    allocationCaps: Gst.Caps
    /**
     * Mastering display color volume information (HDR metadata) for the stream.
     * @field 
     */
    masteringDisplayInfo: VideoMasteringDisplayInfo
    /**
     * Content light level information for the stream.
     * @field 
     */
    contentLightLevel: VideoContentLightLevel

    // Owm methods of GstVideo-1.0.GstVideo.VideoCodecState

    /**
     * Increases the refcount of the given state by one.
     * @returns @buf
     */
    ref(): VideoCodecState
    /**
     * Decreases the refcount of the state. If the refcount reaches 0, the state
     * will be freed.
     */
    unref(): void
}

/**
 * Structure representing the state of an incoming or outgoing video
 * stream for encoders and decoders.
 * 
 * Decoders and encoders will receive such a state through their
 * respective `set_format` vmethods.
 * 
 * Decoders and encoders can set the downstream state, by using the
 * gst_video_decoder_set_output_state() or
 * gst_video_encoder_set_output_state() methods.
 * @record 
 */
export class VideoCodecState {

    // Own properties of GstVideo-1.0.GstVideo.VideoCodecState

    static name: string
}

export interface VideoColorPrimariesInfo {

    // Own fields of GstVideo-1.0.GstVideo.VideoColorPrimariesInfo

    /**
     * a #GstVideoColorPrimaries
     * @field 
     */
    primaries: VideoColorPrimaries
    /**
     * reference white x coordinate
     * @field 
     */
    wx: number
    /**
     * reference white y coordinate
     * @field 
     */
    wy: number
    /**
     * red x coordinate
     * @field 
     */
    rx: number
    /**
     * red y coordinate
     * @field 
     */
    ry: number
    /**
     * green x coordinate
     * @field 
     */
    gx: number
    /**
     * green y coordinate
     * @field 
     */
    gy: number
    /**
     * blue x coordinate
     * @field 
     */
    bx: number
    /**
     * blue y coordinate
     * @field 
     */
    by: number
}

/**
 * Structure describing the chromaticity coordinates of an RGB system. These
 * values can be used to construct a matrix to transform RGB to and from the
 * XYZ colorspace.
 * @record 
 */
export class VideoColorPrimariesInfo {

    // Own properties of GstVideo-1.0.GstVideo.VideoColorPrimariesInfo

    static name: string
}

export interface VideoColorimetry {

    // Own fields of GstVideo-1.0.GstVideo.VideoColorimetry

    /**
     * the color range. This is the valid range for the samples.
     *         It is used to convert the samples to Y'PbPr values.
     * @field 
     */
    range: VideoColorRange
    /**
     * the color matrix. Used to convert between Y'PbPr and
     *          non-linear RGB (R'G'B')
     * @field 
     */
    matrix: VideoColorMatrix
    /**
     * the transfer function. used to convert between R'G'B' and RGB
     * @field 
     */
    transfer: VideoTransferFunction
    /**
     * color primaries. used to convert between R'G'B' and CIE XYZ
     * @field 
     */
    primaries: VideoColorPrimaries

    // Owm methods of GstVideo-1.0.GstVideo.VideoColorimetry

    /**
     * Parse the colorimetry string and update `cinfo` with the parsed
     * values.
     * @param color a colorimetry string
     * @returns %TRUE if @color points to valid colorimetry info.
     */
    fromString(color: string): boolean
    /**
     * Compare the 2 colorimetry sets for equality
     * @param other another #GstVideoColorimetry
     * @returns %TRUE if @cinfo and @other are equal.
     */
    isEqual(other: VideoColorimetry): boolean
    /**
     * Compare the 2 colorimetry sets for functionally equality
     * @param bitdepth bitdepth of a format associated with `cinfo`
     * @param other another #GstVideoColorimetry
     * @param otherBitdepth bitdepth of a format associated with `other`
     * @returns %TRUE if @cinfo and @other are equivalent.
     */
    isEquivalent(bitdepth: number, other: VideoColorimetry, otherBitdepth: number): boolean
    /**
     * Check if the colorimetry information in `info` matches that of the
     * string `color`.
     * @param color a colorimetry string
     * @returns %TRUE if @color conveys the same colorimetry info as the color information in @info.
     */
    matches(color: string): boolean
    /**
     * Make a string representation of `cinfo`.
     * @returns a string representation of @cinfo or %NULL if all the entries of @cinfo are unknown values.
     */
    toString(): string | null
}

/**
 * Structure describing the color info.
 * @record 
 */
export class VideoColorimetry {

    // Own properties of GstVideo-1.0.GstVideo.VideoColorimetry

    static name: string
}

export interface VideoContentLightLevel {

    // Own fields of GstVideo-1.0.GstVideo.VideoContentLightLevel

    /**
     * the maximum content light level
     *   (abbreviated to MaxCLL) in candelas per square meter (cd/m^2 and nit)
     * @field 
     */
    maxContentLightLevel: number
    /**
     * the maximum frame average light level
     *   (abbreviated to MaxFLL) in candelas per square meter (cd/m^2 and nit)
     * @field 
     */
    maxFrameAverageLightLevel: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoContentLightLevel

    /**
     * Parse `caps` and update `linfo`
     * @param caps a #GstCaps
     * @returns %TRUE if @linfo was successfully set to @caps
     */
    addToCaps(caps: Gst.Caps): boolean
    /**
     * Parse `caps` and update `linfo`
     * @param caps a #GstCaps
     * @returns if @caps has #GstVideoContentLightLevel and could be parsed
     */
    fromCaps(caps: Gst.Caps): boolean
    /**
     * Parse the value of content-light-level caps field and update `minfo`
     * with the parsed values.
     * @param level a content-light-level string from caps
     * @returns %TRUE if @linfo points to valid #GstVideoContentLightLevel.
     */
    fromString(level: string): boolean
    /**
     * Initialize `linfo`
     */
    init(): void
    /**
     * Checks equality between `linfo` and `other`.
     * @param other a #GstVideoContentLightLevel
     * @returns %TRUE if @linfo and @other are equal.
     */
    isEqual(other: VideoContentLightLevel): boolean
    /**
     * Convert `linfo` to its string representation.
     * @returns a string representation of @linfo.
     */
    toString(): string | null
}

/**
 * Content light level information specified in CEA-861.3, Appendix A.
 * @record 
 */
export class VideoContentLightLevel {

    // Own properties of GstVideo-1.0.GstVideo.VideoContentLightLevel

    static name: string
}

export interface VideoConverter {

    // Owm methods of GstVideo-1.0.GstVideo.VideoConverter

    /**
     * Convert the pixels of `src` into `dest` using `convert`.
     * 
     * If #GST_VIDEO_CONVERTER_OPT_ASYNC_TASKS is %TRUE then this function will
     * return immediately and needs to be followed by a call to
     * gst_video_converter_frame_finish().
     * @param src a #GstVideoFrame
     * @param dest a #GstVideoFrame
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
     * @returns a #GstStructure that remains valid for as long as @convert is valid   or until gst_video_converter_set_config() is called.
     */
    getConfig(): Gst.Structure
    /**
     * Retrieve the input format of `convert`.
     * @returns a #GstVideoInfo
     */
    getInInfo(): VideoInfo
    /**
     * Retrieve the output format of `convert`.
     * @returns a #GstVideoInfo
     */
    getOutInfo(): VideoInfo
    /**
     * Set `config` as extra configuration for `convert`.
     * 
     * If the parameters in `config` can not be set exactly, this function returns
     * %FALSE and will try to update as much state as possible. The new state can
     * then be retrieved and refined with gst_video_converter_get_config().
     * 
     * Look at the `GST_VIDEO_CONVERTER_OPT_*` fields to check valid configuration
     * option and values.
     * @param config a #GstStructure
     * @returns %TRUE when @config could be set.
     */
    setConfig(config: Gst.Structure): boolean
}

export class VideoConverter {

    // Own properties of GstVideo-1.0.GstVideo.VideoConverter

    static name: string
}

export interface VideoCropMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoCropMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the horizontal offset
     * @field 
     */
    x: number
    /**
     * the vertical offset
     * @field 
     */
    y: number
    /**
     * the cropped width
     * @field 
     */
    width: number
    /**
     * the cropped height
     * @field 
     */
    height: number
}

/**
 * Extra buffer metadata describing image cropping.
 * @record 
 */
export class VideoCropMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoCropMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoCropMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoDecoderClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoDecoderClass

    open: (decoder: VideoDecoder) => boolean
    close: (decoder: VideoDecoder) => boolean
    start: (decoder: VideoDecoder) => boolean
    stop: (decoder: VideoDecoder) => boolean
    parse: (decoder: VideoDecoder, frame: VideoCodecFrame, adapter: GstBase.Adapter, atEos: boolean) => Gst.FlowReturn
    setFormat: (decoder: VideoDecoder, state: VideoCodecState) => boolean
    reset: (decoder: VideoDecoder, hard: boolean) => boolean
    finish: (decoder: VideoDecoder) => Gst.FlowReturn
    handleFrame: (decoder: VideoDecoder, frame: VideoCodecFrame) => Gst.FlowReturn
    sinkEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    srcEvent: (decoder: VideoDecoder, event: Gst.Event) => boolean
    negotiate: (decoder: VideoDecoder) => boolean
    decideAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    proposeAllocation: (decoder: VideoDecoder, query: Gst.Query) => boolean
    flush: (decoder: VideoDecoder) => boolean
    sinkQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    srcQuery: (decoder: VideoDecoder, query: Gst.Query) => boolean
    getcaps: (decoder: VideoDecoder, filter: Gst.Caps) => Gst.Caps
    drain: (decoder: VideoDecoder) => Gst.FlowReturn
    transformMeta: (decoder: VideoDecoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
    handleMissingData: (decoder: VideoDecoder, timestamp: Gst.ClockTime, duration: Gst.ClockTime) => boolean
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum `handle_frame` needs to be overridden, and `set_format`
 * and likely as well.  If non-packetized input is supported or expected,
 * `parse` needs to be overridden as well.
 * @record 
 */
export abstract class VideoDecoderClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoDecoderClass

    static name: string
}

export interface VideoDecoderPrivate {
}

export class VideoDecoderPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoDecoderPrivate

    static name: string
}

export interface VideoDirectionInterface {

    // Own fields of GstVideo-1.0.GstVideo.VideoDirectionInterface

    /**
     * parent interface type.
     * @field 
     */
    iface: GObject.TypeInterface
}

/**
 * #GstVideoDirectionInterface interface.
 * @record 
 */
export abstract class VideoDirectionInterface {

    // Own properties of GstVideo-1.0.GstVideo.VideoDirectionInterface

    static name: string
}

export interface VideoDither {

    // Owm methods of GstVideo-1.0.GstVideo.VideoDither

    /**
     * Free `dither`
     */
    free(): void
    /**
     * Dither `width` pixels starting from offset `x` in `line` using `dither`.
     * 
     * `y` is the line number of `line` in the output image.
     * @param line pointer to the pixels of the line
     * @param x x coordinate
     * @param y y coordinate
     * @param width the width
     */
    line(line: any | null, x: number, y: number, width: number): void
}

/**
 * GstVideoDither provides implementations of several dithering algorithms
 * that can be applied to lines of video pixels to quantize and dither them.
 * @record 
 */
export class VideoDither {

    // Own properties of GstVideo-1.0.GstVideo.VideoDither

    static name: string
}

export interface VideoEncoderClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoEncoderClass

    open: (encoder: VideoEncoder) => boolean
    close: (encoder: VideoEncoder) => boolean
    start: (encoder: VideoEncoder) => boolean
    stop: (encoder: VideoEncoder) => boolean
    setFormat: (encoder: VideoEncoder, state: VideoCodecState) => boolean
    handleFrame: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    reset: (encoder: VideoEncoder, hard: boolean) => boolean
    finish: (encoder: VideoEncoder) => Gst.FlowReturn
    prePush: (encoder: VideoEncoder, frame: VideoCodecFrame) => Gst.FlowReturn
    getcaps: (enc: VideoEncoder, filter: Gst.Caps) => Gst.Caps
    sinkEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    srcEvent: (encoder: VideoEncoder, event: Gst.Event) => boolean
    negotiate: (encoder: VideoEncoder) => boolean
    decideAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    proposeAllocation: (encoder: VideoEncoder, query: Gst.Query) => boolean
    flush: (encoder: VideoEncoder) => boolean
    sinkQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    srcQuery: (encoder: VideoEncoder, query: Gst.Query) => boolean
    transformMeta: (encoder: VideoEncoder, frame: VideoCodecFrame, meta: Gst.Meta) => boolean
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum `handle_frame` needs to be overridden, and `set_format`
 * and `get_caps` are likely needed as well.
 * @record 
 */
export abstract class VideoEncoderClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoEncoderClass

    static name: string
}

export interface VideoEncoderPrivate {
}

export class VideoEncoderPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoEncoderPrivate

    static name: string
}

export interface VideoFilterClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoFilterClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GstBase.BaseTransformClass
    setInfo: (filter: VideoFilter, incaps: Gst.Caps, inInfo: VideoInfo, outcaps: Gst.Caps, outInfo: VideoInfo) => boolean
    transformFrame: (filter: VideoFilter, inframe: VideoFrame, outframe: VideoFrame) => Gst.FlowReturn
    transformFrameIp: (trans: VideoFilter, frame: VideoFrame) => Gst.FlowReturn
}

/**
 * The video filter class structure.
 * @record 
 */
export abstract class VideoFilterClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoFilterClass

    static name: string
}

export interface VideoFormatInfo {

    // Own fields of GstVideo-1.0.GstVideo.VideoFormatInfo

    /**
     * #GstVideoFormat
     * @field 
     */
    format: VideoFormat
    /**
     * string representation of the format
     * @field 
     */
    name: string
    /**
     * use readable description of the format
     * @field 
     */
    description: string
    /**
     * #GstVideoFormatFlags
     * @field 
     */
    flags: VideoFormatFlags
    /**
     * The number of bits used to pack data items. This can be less than 8
     *    when multiple pixels are stored in a byte. for values > 8 multiple bytes
     *    should be read according to the endianness flag before applying the shift
     *    and mask.
     * @field 
     */
    bits: number
    /**
     * the number of components in the video format.
     * @field 
     */
    nComponents: number
    /**
     * the number of bits to shift away to get the component data
     * @field 
     */
    shift: number[]
    /**
     * the depth in bits for each component
     * @field 
     */
    depth: number[]
    /**
     * the pixel stride of each component. This is the amount of
     *    bytes to the pixel immediately to the right. When bits < 8, the stride is
     *    expressed in bits. For 24-bit RGB, this would be 3 bytes, for example,
     *    while it would be 4 bytes for RGBx or ARGB.
     * @field 
     */
    pixelStride: number[]
    /**
     * the number of planes for this format. The number of planes can be
     *    less than the amount of components when multiple components are packed into
     *    one plane.
     * @field 
     */
    nPlanes: number
    /**
     * the plane number where a component can be found
     * @field 
     */
    plane: number[]
    /**
     * the offset in the plane where the first pixel of the components
     *    can be found.
     * @field 
     */
    poffset: number[]
    /**
     * subsampling factor of the width for the component. Use
     *     GST_VIDEO_SUB_SCALE to scale a width.
     * @field 
     */
    wSub: number[]
    /**
     * subsampling factor of the height for the component. Use
     *     GST_VIDEO_SUB_SCALE to scale a height.
     * @field 
     */
    hSub: number[]
    /**
     * the format of the unpacked pixels. This format must have the
     *     #GST_VIDEO_FORMAT_FLAG_UNPACK flag set.
     * @field 
     */
    unpackFormat: VideoFormat
    /**
     * an unpack function for this format
     * @field 
     */
    unpackFunc: VideoFormatUnpack
    /**
     * the amount of lines that will be packed
     * @field 
     */
    packLines: number
    /**
     * an pack function for this format
     * @field 
     */
    packFunc: VideoFormatPack
    /**
     * The tiling mode
     * @field 
     */
    tileMode: VideoTileMode
    /**
     * The width of a tile, in bytes, represented as a shift. DEPRECATED,
     * use tile_info[] array instead.
     * @field 
     */
    tileWs: number
    /**
     * The height of a tile, in bytes, represented as a shift. DEPREACTED,
     * use tile_info[] array instead.
     * @field 
     */
    tileHs: number
    /**
     * Information about the tiles for each of the planes.
     * @field 
     */
    tileInfo: VideoTileInfo[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoFormatInfo

    /**
     * Fill `components` with the number of all the components packed in plane `p`
     * for the format `info`. A value of -1 in `components` indicates that no more
     * components are packed in the plane.
     * @param plane a plane number
     */
    component(plane: number): /* components */ number
    /**
     * Extrapolate `plane` stride from the first stride of an image. This helper is
     * useful to support legacy API were only one stride is supported.
     * @param plane a plane number
     * @param stride The fist plane stride
     * @returns The extrapolated stride for @plane
     */
    extrapolateStride(plane: number, stride: number): number
}

/**
 * Information for a video format.
 * @record 
 */
export class VideoFormatInfo {

    // Own properties of GstVideo-1.0.GstVideo.VideoFormatInfo

    static name: string
}

export interface VideoFrame {

    // Own fields of GstVideo-1.0.GstVideo.VideoFrame

    /**
     * the #GstVideoInfo
     * @field 
     */
    info: VideoInfo
    /**
     * #GstVideoFrameFlags for the frame
     * @field 
     */
    flags: VideoFrameFlags
    /**
     * the mapped buffer
     * @field 
     */
    buffer: Gst.Buffer
    /**
     * pointer to metadata if any
     * @field 
     */
    meta: any
    /**
     * id of the mapped frame. the id can for example be used to
     *   identify the frame in case of multiview video.
     * @field 
     */
    id: number
    /**
     * pointers to the plane data
     * @field 
     */
    data: any[]
    /**
     * mappings of the planes
     * @field 
     */
    map: Gst.MapInfo[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoFrame

    /**
     * Copy the contents from `src` to `dest`.
     * 
     * Note: Since: 1.18, `dest` dimensions are allowed to be
     * smaller than `src` dimensions.
     * @param src a #GstVideoFrame
     * @returns TRUE if the contents could be copied.
     */
    copy(src: VideoFrame): boolean
    /**
     * Copy the plane with index `plane` from `src` to `dest`.
     * 
     * Note: Since: 1.18, `dest` dimensions are allowed to be
     * smaller than `src` dimensions.
     * @param src a #GstVideoFrame
     * @param plane a plane
     * @returns TRUE if the contents could be copied.
     */
    copyPlane(src: VideoFrame, plane: number): boolean
    /**
     * Unmap the memory previously mapped with gst_video_frame_map.
     */
    unmap(): void
}

/**
 * A video frame obtained from gst_video_frame_map()
 * @record 
 */
export class VideoFrame {

    // Own properties of GstVideo-1.0.GstVideo.VideoFrame

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoFrame

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
     * @param info a #GstVideoInfo
     * @param buffer the buffer to map
     * @param flags #GstMapFlags
     * @returns %TRUE on success.
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
     * @param info a #GstVideoInfo
     * @param buffer the buffer to map
     * @param id the frame id to map
     * @param flags #GstMapFlags
     * @returns %TRUE on success.
     */
    static mapId(info: VideoInfo, buffer: Gst.Buffer, id: number, flags: Gst.MapFlags): [ /* returnType */ boolean, /* frame */ VideoFrame ]
}

export interface VideoGLTextureUploadMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * Orientation of the textures
     * @field 
     */
    textureOrientation: VideoGLTextureOrientation
    /**
     * Number of textures that are generated
     * @field 
     */
    nTextures: number
    /**
     * Type of each texture
     * @field 
     */
    textureType: VideoGLTextureType[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta

    /**
     * Uploads the buffer which owns the meta to a specific texture ID.
     * @param textureId the texture IDs to upload to
     * @returns %TRUE if uploading succeeded, %FALSE otherwise.
     */
    upload(textureId: number): boolean
}

/**
 * Extra buffer metadata for uploading a buffer to an OpenGL texture
 * ID. The caller of gst_video_gl_texture_upload_meta_upload() must
 * have OpenGL set up and call this from a thread where it is valid
 * to upload something to an OpenGL texture.
 * @record 
 */
export class VideoGLTextureUploadMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoGLTextureUploadMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoInfo {

    // Own fields of GstVideo-1.0.GstVideo.VideoInfo

    /**
     * the format info of the video
     * @field 
     */
    finfo: VideoFormatInfo
    /**
     * the interlace mode
     * @field 
     */
    interlaceMode: VideoInterlaceMode
    /**
     * additional video flags
     * @field 
     */
    flags: VideoFlags
    /**
     * the width of the video
     * @field 
     */
    width: number
    /**
     * the height of the video
     * @field 
     */
    height: number
    /**
     * the default size of one frame
     * @field 
     */
    size: number
    /**
     * the number of views for multiview video
     * @field 
     */
    views: number
    /**
     * a #GstVideoChromaSite.
     * @field 
     */
    chromaSite: VideoChromaSite
    /**
     * the colorimetry info
     * @field 
     */
    colorimetry: VideoColorimetry
    /**
     * the pixel-aspect-ratio numerator
     * @field 
     */
    parN: number
    /**
     * the pixel-aspect-ratio denominator
     * @field 
     */
    parD: number
    /**
     * the framerate numerator
     * @field 
     */
    fpsN: number
    /**
     * the framerate denominator
     * @field 
     */
    fpsD: number
    /**
     * offsets of the planes
     * @field 
     */
    offset: number[]
    /**
     * strides of the planes
     * @field 
     */
    stride: number[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoInfo

    /**
     * Adjust the offset and stride fields in `info` so that the padding and
     * stride alignment in `align` is respected.
     * 
     * Extra padding will be added to the right side when stride alignment padding
     * is required and `align` will be updated with the new padding values.
     * @param align alignment parameters
     * @returns %FALSE if alignment could not be applied, e.g. because the   size of a frame can't be represented as a 32 bit integer (Since: 1.12)
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
     * @param align alignment parameters
     * @returns %FALSE if alignment could not be applied, e.g. because the   size of a frame can't be represented as a 32 bit integer
     */
    alignFull(align: VideoAlignment): [ /* returnType */ boolean, /* planeSize */ number ]
    /**
     * Converts among various #GstFormat types.  This function handles
     * GST_FORMAT_BYTES, GST_FORMAT_TIME, and GST_FORMAT_DEFAULT.  For
     * raw video, GST_FORMAT_DEFAULT corresponds to video frames.  This
     * function can be used to handle pad queries of the type GST_QUERY_CONVERT.
     * @param srcFormat #GstFormat of the `src_value`
     * @param srcValue value to convert
     * @param destFormat #GstFormat of the `dest_value`
     * @returns TRUE if the conversion was successful.
     */
    convert(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    /**
     * Copy a GstVideoInfo structure.
     * @returns a new #GstVideoInfo. free with gst_video_info_free.
     */
    copy(): VideoInfo
    /**
     * Free a GstVideoInfo structure previously allocated with gst_video_info_new()
     * or gst_video_info_copy().
     */
    free(): void
    /**
     * Compares two #GstVideoInfo and returns whether they are equal or not
     * @param other a #GstVideoInfo
     * @returns %TRUE if @info and @other are equal, else %FALSE.
     */
    isEqual(other: VideoInfo): boolean
    /**
     * Set the default info for a video frame of `format` and `width` and `height`.
     * 
     * Note: This initializes `info` first, no values are preserved. This function
     * does not set the offsets correctly for interlaced vertically
     * subsampled formats.
     * @param format the format
     * @param width a width
     * @param height a height
     * @returns %FALSE if the returned video info is invalid, e.g. because the   size of a frame can't be represented as a 32 bit integer (Since: 1.12)
     */
    setFormat(format: VideoFormat, width: number, height: number): boolean
    /**
     * Same as #gst_video_info_set_format but also allowing to set the interlaced
     * mode.
     * @param format the format
     * @param mode a #GstVideoInterlaceMode
     * @param width a width
     * @param height a height
     * @returns %FALSE if the returned video info is invalid, e.g. because the   size of a frame can't be represented as a 32 bit integer.
     */
    setInterlacedFormat(format: VideoFormat, mode: VideoInterlaceMode, width: number, height: number): boolean
    /**
     * Convert the values of `info` into a #GstCaps.
     * @returns a new #GstCaps containing the info of @info.
     */
    toCaps(): Gst.Caps
}

/**
 * Information describing image properties. This information can be filled
 * in from GstCaps with gst_video_info_from_caps(). The information is also used
 * to store the specific video info when mapping a video frame with
 * gst_video_frame_map().
 * 
 * Use the provided macros to access the info in this structure.
 * @record 
 */
export class VideoInfo {

    // Own properties of GstVideo-1.0.GstVideo.VideoInfo

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoInfo

    /**
     * Allocate a new #GstVideoInfo that is also initialized with
     * gst_video_info_init().
     * @constructor 
     * @returns a new #GstVideoInfo. free with gst_video_info_free().
     */
    constructor() 
    /**
     * Allocate a new #GstVideoInfo that is also initialized with
     * gst_video_info_init().
     * @constructor 
     * @returns a new #GstVideoInfo. free with gst_video_info_free().
     */
    static new(): VideoInfo
    /**
     * Parse `caps` to generate a #GstVideoInfo.
     * @constructor 
     * @param caps a #GstCaps
     * @returns A #GstVideoInfo, or %NULL if @caps couldn't be parsed
     */
    static newFromCaps(caps: Gst.Caps): VideoInfo
    /**
     * Parse `caps` and update `info`.
     * @param caps a #GstCaps
     * @returns TRUE if @caps could be parsed
     */
    static fromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* info */ VideoInfo ]
    /**
     * Initialize `info` with default values.
     */
    static init(): /* info */ VideoInfo
}

export interface VideoInfoDmaDrm {

    // Own fields of GstVideo-1.0.GstVideo.VideoInfoDmaDrm

    /**
     * the associated #GstVideoInfo
     * @field 
     */
    vinfo: VideoInfo
    /**
     * the fourcc defined by drm
     * @field 
     */
    drmFourcc: number
    /**
     * the drm modifier
     * @field 
     */
    drmModifier: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoInfoDmaDrm

    /**
     * Free a #GstVideoInfoDmaDrm structure previously allocated with
     * gst_video_info_dma_drm_new()
     */
    free(): void
    /**
     * Convert the values of `drm_info` into a #GstCaps. Please note that the
     * `caps` returned will be a dma drm caps which does not contain format field,
     * but contains a drm-format field instead. The value of drm-format field is
     * composed of a drm fourcc and a modifier, such as NV12:0x0100000000000002.
     * @returns a new #GstCaps containing the info in @drm_info.
     */
    toCaps(): Gst.Caps | null
}

/**
 * Information describing a DMABuf image properties. It wraps #GstVideoInfo and
 * adds DRM information such as drm-fourcc and drm-modifier, required for
 * negotiation and mapping.
 * @record 
 */
export class VideoInfoDmaDrm {

    // Own properties of GstVideo-1.0.GstVideo.VideoInfoDmaDrm

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoInfoDmaDrm

    /**
     * Allocate a new #GstVideoInfoDmaDrm that is also initialized with
     * gst_video_info_dma_drm_init().
     * @constructor 
     * @returns a new #GstVideoInfoDmaDrm. Free it with gst_video_info_dma_drm_free().
     */
    constructor() 
    /**
     * Allocate a new #GstVideoInfoDmaDrm that is also initialized with
     * gst_video_info_dma_drm_init().
     * @constructor 
     * @returns a new #GstVideoInfoDmaDrm. Free it with gst_video_info_dma_drm_free().
     */
    static new(): VideoInfoDmaDrm
    /**
     * Parse `caps` to generate a #GstVideoInfoDmaDrm. Please note that the
     * `caps` should be a dma drm caps. The gst_video_is_dma_drm_caps() can
     * be used to verify it before calling this function.
     * @constructor 
     * @param caps a #GstCaps
     * @returns A #GstVideoInfoDmaDrm,   or %NULL if @caps couldn't be parsed.
     */
    static newFromCaps(caps: Gst.Caps): VideoInfoDmaDrm
    /**
     * Parse `caps` and update `info`. Please note that the `caps` should be
     * a dma drm caps. The gst_video_is_dma_drm_caps() can be used to verify
     * it before calling this function.
     * @param caps a #GstCaps
     * @returns TRUE if @caps could be parsed
     */
    static fromCaps(caps: Gst.Caps): [ /* returnType */ boolean, /* drmInfo */ VideoInfoDmaDrm ]
    /**
     * Fills `drm_info` if `info'`s format has a valid drm format and `modifier` is also
     * valid
     * @param info a #GstVideoInfo
     * @param modifier the associated modifier value.
     * @returns %TRUE if @drm_info is filled correctly.
     */
    static fromVideoInfo(info: VideoInfo, modifier: number): [ /* returnType */ boolean, /* drmInfo */ VideoInfoDmaDrm ]
    /**
     * Initialize `drm_info` with default values.
     */
    static init(): /* drmInfo */ VideoInfoDmaDrm
}

export interface VideoMasteringDisplayInfo {

    // Own fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo

    /**
     * the xy coordinates of primaries in the CIE 1931 color space.
     *   the index 0 contains red, 1 is for green and 2 is for blue.
     *   each value is normalized to 50000 (meaning that in unit of 0.00002)
     * @field 
     */
    displayPrimaries: VideoMasteringDisplayInfoCoordinates[]
    /**
     * the xy coordinates of white point in the CIE 1931 color space.
     *   each value is normalized to 50000 (meaning that in unit of 0.00002)
     * @field 
     */
    whitePoint: VideoMasteringDisplayInfoCoordinates
    /**
     * the maximum value of display luminance
     *   in unit of 0.0001 candelas per square metre (cd/m^2 and nit)
     * @field 
     */
    maxDisplayMasteringLuminance: number
    /**
     * the minimum value of display luminance
     *   in unit of 0.0001 candelas per square metre (cd/m^2 and nit)
     * @field 
     */
    minDisplayMasteringLuminance: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo

    /**
     * Set string representation of `minfo` to `caps`
     * @param caps a #GstCaps
     * @returns %TRUE if @minfo was successfully set to @caps
     */
    addToCaps(caps: Gst.Caps): boolean
    /**
     * Parse `caps` and update `minfo`
     * @param caps a #GstCaps
     * @returns %TRUE if @caps has #GstVideoMasteringDisplayInfo and could be parsed
     */
    fromCaps(caps: Gst.Caps): boolean
    /**
     * Initialize `minfo`
     */
    init(): void
    /**
     * Checks equality between `minfo` and `other`.
     * @param other a #GstVideoMasteringDisplayInfo
     * @returns %TRUE if @minfo and @other are equal.
     */
    isEqual(other: VideoMasteringDisplayInfo): boolean
    /**
     * Convert `minfo` to its string representation
     * @returns a string representation of @minfo
     */
    toString(): string | null
}

/**
 * Mastering display color volume information defined by SMPTE ST 2086
 * (a.k.a static HDR metadata).
 * @record 
 */
export class VideoMasteringDisplayInfo {

    // Own properties of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfo

    /**
     * Extract #GstVideoMasteringDisplayInfo from `mastering`
     * @param mastering a #GstStructure representing #GstVideoMasteringDisplayInfo
     * @returns %TRUE if @minfo was filled with @mastering
     */
    static fromString(mastering: string): [ /* returnType */ boolean, /* minfo */ VideoMasteringDisplayInfo ]
}

export interface VideoMasteringDisplayInfoCoordinates {

    // Own fields of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfoCoordinates

    /**
     * the x coordinate of CIE 1931 color space in unit of 0.00002.
     * @field 
     */
    x: number
    /**
     * the y coordinate of CIE 1931 color space in unit of 0.00002.
     * @field 
     */
    y: number
}

/**
 * Used to represent display_primaries and white_point of
 * #GstVideoMasteringDisplayInfo struct. See #GstVideoMasteringDisplayInfo
 * @record 
 */
export class VideoMasteringDisplayInfoCoordinates {

    // Own properties of GstVideo-1.0.GstVideo.VideoMasteringDisplayInfoCoordinates

    static name: string
}

export interface VideoMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the buffer this metadata belongs to
     * @field 
     */
    buffer: Gst.Buffer
    /**
     * additional video flags
     * @field 
     */
    flags: VideoFrameFlags
    /**
     * the video format
     * @field 
     */
    format: VideoFormat
    /**
     * identifier of the frame
     * @field 
     */
    id: number
    /**
     * the video width
     * @field 
     */
    width: number
    /**
     * the video height
     * @field 
     */
    height: number
    /**
     * the number of planes in the image
     * @field 
     */
    nPlanes: number
    /**
     * array of offsets for the planes. This field might not always be
     *          valid, it is used by the default implementation of `map`.
     * @field 
     */
    offset: number[]
    /**
     * array of strides for the planes. This field might not always be
     *          valid, it is used by the default implementation of `map`.
     * @field 
     */
    stride: number[]
    map: (meta: VideoMeta, plane: number, info: Gst.MapInfo, data: any, stride: number, flags: Gst.MapFlags) => boolean
    unmap: (meta: VideoMeta, plane: number, info: Gst.MapInfo) => boolean
    /**
     * the paddings and alignment constraints of the video buffer.
     * It is up to the caller of `gst_buffer_add_video_meta_full()` to set it
     * using gst_video_meta_set_alignment(), if they did not it defaults
     * to no padding and no alignment. Since: 1.18
     * @field 
     */
    alignment: VideoAlignment

    // Owm methods of GstVideo-1.0.GstVideo.VideoMeta

    /**
     * Compute the padded height of each plane from `meta` (padded size
     * divided by stride).
     * 
     * It is not valid to call this function with a meta associated to a
     * TILED video format.
     * @returns %TRUE if @meta's alignment is valid and @plane_height has been updated, %FALSE otherwise
     */
    getPlaneHeight(): [ /* returnType */ boolean, /* planeHeight */ number[] ]
    /**
     * Compute the size, in bytes, of each video plane described in `meta` including
     * any padding and alignment constraint defined in `meta->`alignment.
     * @returns %TRUE if @meta's alignment is valid and @plane_size has been updated, %FALSE otherwise
     */
    getPlaneSize(): [ /* returnType */ boolean, /* planeSize */ number[] ]
    /**
     * Set the alignment of `meta` to `alignment`. This function checks that
     * the paddings defined in `alignment` are compatible with the strides
     * defined in `meta` and will fail to update if they are not.
     * @param alignment a #GstVideoAlignment
     * @returns %TRUE if @alignment's meta has been updated, %FALSE if not
     */
    setAlignment(alignment: VideoAlignment): boolean
}

/**
 * Extra buffer metadata describing image properties
 * 
 * This meta can also be used by downstream elements to specifiy their
 * buffer layout requirements for upstream. Upstream should try to
 * fit those requirements, if possible, in order to prevent buffer copies.
 * 
 * This is done by passing a custom #GstStructure to
 * gst_query_add_allocation_meta() when handling the ALLOCATION query.
 * This structure should be named 'video-meta' and can have the following
 * fields:
 * - padding-top (uint): extra pixels on the top
 * - padding-bottom (uint): extra pixels on the bottom
 * - padding-left (uint): extra pixels on the left side
 * - padding-right (uint): extra pixels on the right side
 * The padding fields have the same semantic as #GstVideoMeta.alignment
 * and so represent the paddings requested on produced video buffers.
 * @record 
 */
export class VideoMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoMetaTransform {

    // Own fields of GstVideo-1.0.GstVideo.VideoMetaTransform

    /**
     * the input #GstVideoInfo
     * @field 
     */
    inInfo: VideoInfo
    /**
     * the output #GstVideoInfo
     * @field 
     */
    outInfo: VideoInfo
}

/**
 * Extra data passed to a video transform #GstMetaTransformFunction such as:
 * "gst-video-scale".
 * @record 
 */
export class VideoMetaTransform {

    // Own properties of GstVideo-1.0.GstVideo.VideoMetaTransform

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoMetaTransform

    /**
     * Get the #GQuark for the "gst-video-scale" metadata transform operation.
     * @returns a #GQuark
     */
    static scaleGetQuark(): GLib.Quark
}

export interface VideoOrientationInterface {

    // Own fields of GstVideo-1.0.GstVideo.VideoOrientationInterface

    /**
     * parent interface type.
     * @field 
     */
    iface: GObject.TypeInterface
    getHflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    getVflip: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* flip */ boolean ]
    getHcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    getVcenter: (videoOrientation: VideoOrientation) => [ /* returnType */ boolean, /* center */ number ]
    setHflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    setVflip: (videoOrientation: VideoOrientation, flip: boolean) => boolean
    setHcenter: (videoOrientation: VideoOrientation, center: number) => boolean
    setVcenter: (videoOrientation: VideoOrientation, center: number) => boolean
}

/**
 * #GstVideoOrientationInterface interface.
 * @record 
 */
export abstract class VideoOrientationInterface {

    // Own properties of GstVideo-1.0.GstVideo.VideoOrientationInterface

    static name: string
}

export interface VideoOverlayComposition {

    // Owm methods of GstVideo-1.0.GstVideo.VideoOverlayComposition

    /**
     * Adds an overlay rectangle to an existing overlay composition object. This
     * must be done right after creating the overlay composition.
     * @param rectangle a #GstVideoOverlayRectangle to add to the     composition
     */
    addRectangle(rectangle: VideoOverlayRectangle): void
    /**
     * Blends the overlay rectangles in `comp` on top of the raw video data
     * contained in `video_buf`. The data in `video_buf` must be writable and
     * mapped appropriately.
     * 
     * Since `video_buf` data is read and will be modified, it ought be
     * mapped with flag GST_MAP_READWRITE.
     * @param videoBuf a #GstVideoFrame containing raw video data in a             supported format. It should be mapped using GST_MAP_READWRITE
     */
    blend(videoBuf: VideoFrame): boolean
    /**
     * Makes a copy of `comp` and all contained rectangles, so that it is possible
     * to modify the composition and contained rectangles (e.g. add additional
     * rectangles or change the render co-ordinates or render dimension). The
     * actual overlay pixel data buffers contained in the rectangles are not
     * copied.
     * @returns a new #GstVideoOverlayComposition equivalent     to @comp.
     */
    copy(): VideoOverlayComposition
    /**
     * Returns the `n-th` #GstVideoOverlayRectangle contained in `comp`.
     * @param n number of the rectangle to get
     * @returns the @n-th rectangle, or NULL if @n is out of     bounds. Will not return a new reference, the caller will need to     obtain her own reference using gst_video_overlay_rectangle_ref()     if needed.
     */
    getRectangle(n: number): VideoOverlayRectangle | null
    /**
     * Returns the sequence number of this composition. Sequence numbers are
     * monotonically increasing and unique for overlay compositions and rectangles
     * (meaning there will never be a rectangle with the same sequence number as
     * a composition).
     * @returns the sequence number of @comp
     */
    getSeqnum(): number
    /**
     * Takes ownership of `comp` and returns a version of `comp` that is writable
     * (i.e. can be modified). Will either return `comp` right away, or create a
     * new writable copy of `comp` and unref `comp` itself. All the contained
     * rectangles will also be copied, but the actual overlay pixel data buffers
     * contained in the rectangles are not copied.
     * @returns a writable #GstVideoOverlayComposition     equivalent to @comp.
     */
    makeWritable(): VideoOverlayComposition
    /**
     * Returns the number of #GstVideoOverlayRectangle<!-- -->s contained in `comp`.
     * @returns the number of rectangles
     */
    nRectangles(): number
}

/**
 * Functions to create and handle overlay compositions on video buffers.
 * 
 * An overlay composition describes one or more overlay rectangles to be
 * blended on top of a video buffer.
 * 
 * This API serves two main purposes:
 * 
 * * it can be used to attach overlay information (subtitles or logos)
 *   to non-raw video buffers such as GL/VAAPI/VDPAU surfaces. The actual
 *   blending of the overlay can then be done by e.g. the video sink that
 *   processes these non-raw buffers.
 * 
 * * it can also be used to blend overlay rectangles on top of raw video
 *   buffers, thus consolidating blending functionality for raw video in
 *   one place.
 * 
 * Together, this allows existing overlay elements to easily handle raw
 * and non-raw video as input in without major changes (once the overlays
 * have been put into a #GstVideoOverlayComposition object anyway) - for raw
 * video the overlay can just use the blending function to blend the data
 * on top of the video, and for surface buffers it can just attach them to
 * the buffer and let the sink render the overlays.
 * @record 
 */
export class VideoOverlayComposition {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlayComposition

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoOverlayComposition

    /**
     * Creates a new video overlay composition object to hold one or more
     * overlay rectangles.
     * 
     * Note that since 1.20 this allows to pass %NULL for `rectangle`.
     * @constructor 
     * @param rectangle a #GstVideoOverlayRectangle to add to the     composition
     * @returns a new #GstVideoOverlayComposition. Unref with     gst_video_overlay_composition_unref() when no longer needed.
     */
    constructor(rectangle: VideoOverlayRectangle | null) 
    /**
     * Creates a new video overlay composition object to hold one or more
     * overlay rectangles.
     * 
     * Note that since 1.20 this allows to pass %NULL for `rectangle`.
     * @constructor 
     * @param rectangle a #GstVideoOverlayRectangle to add to the     composition
     * @returns a new #GstVideoOverlayComposition. Unref with     gst_video_overlay_composition_unref() when no longer needed.
     */
    static new(rectangle: VideoOverlayRectangle | null): VideoOverlayComposition
}

export interface VideoOverlayCompositionMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoOverlayCompositionMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the attached #GstVideoOverlayComposition
     * @field 
     */
    overlay: VideoOverlayComposition
}

/**
 * Extra buffer metadata describing image overlay data.
 * @record 
 */
export class VideoOverlayCompositionMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlayCompositionMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoOverlayCompositionMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoOverlayInterface {

    // Own fields of GstVideo-1.0.GstVideo.VideoOverlayInterface

    /**
     * parent interface type.
     * @field 
     */
    iface: GObject.TypeInterface
    expose: (overlay: VideoOverlay) => void
    handleEvents: (overlay: VideoOverlay, handleEvents: boolean) => void
    setRenderRectangle: (overlay: VideoOverlay, x: number, y: number, width: number, height: number) => void
    setWindowHandle: (overlay: VideoOverlay, handle: never) => void
}

/**
 * #GstVideoOverlay interface
 * @record 
 */
export abstract class VideoOverlayInterface {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlayInterface

    static name: string
}

export interface VideoOverlayRectangle {

    // Owm methods of GstVideo-1.0.GstVideo.VideoOverlayRectangle

    /**
     * Makes a copy of `rectangle,` so that it is possible to modify it
     * (e.g. to change the render co-ordinates or render dimension). The
     * actual overlay pixel data buffers contained in the rectangle are not
     * copied.
     * @returns a new #GstVideoOverlayRectangle equivalent     to @rectangle.
     */
    copy(): VideoOverlayRectangle
    /**
     * Retrieves the flags associated with a #GstVideoOverlayRectangle.
     * This is useful if the caller can handle both premultiplied alpha and
     * non premultiplied alpha, for example. By knowing whether the rectangle
     * uses premultiplied or not, it can request the pixel data in the format
     * it is stored in, to avoid unnecessary conversion.
     * @returns the #GstVideoOverlayFormatFlags associated with the rectangle.
     */
    getFlags(): VideoOverlayFormatFlags
    /**
     * Retrieves the global-alpha value associated with a #GstVideoOverlayRectangle.
     * @returns the global-alpha value associated with the rectangle.
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
     * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
     * @returns a #GstBuffer holding the ARGB pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
     */
    getPixelsUnscaledArgb(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the pixel data as it is. This is useful if the caller can
     * do the scaling itself when handling the overlaying. The rectangle will
     * need to be scaled to the render dimensions, which can be retrieved using
     * gst_video_overlay_rectangle_get_render_rectangle().
     * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
     * @returns a #GstBuffer holding the AYUV pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
     */
    getPixelsUnscaledAyuv(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the pixel data as it is. This is useful if the caller can
     * do the scaling itself when handling the overlaying. The rectangle will
     * need to be scaled to the render dimensions, which can be retrieved using
     * gst_video_overlay_rectangle_get_render_rectangle().
     * @param flags flags.    If a global_alpha value != 1 is set for the rectangle, the caller    should set the #GST_VIDEO_OVERLAY_FORMAT_FLAG_GLOBAL_ALPHA flag    if he wants to apply global-alpha himself. If the flag is not set    global_alpha is applied internally before returning the pixel-data.
     * @returns a #GstBuffer holding the pixel data with    #GstVideoMeta set. This function does not return a reference, the caller    should obtain a reference of her own with gst_buffer_ref() if needed.
     */
    getPixelsUnscaledRaw(flags: VideoOverlayFormatFlags): Gst.Buffer
    /**
     * Retrieves the render position and render dimension of the overlay
     * rectangle on the video.
     * @returns TRUE if valid render dimensions were retrieved.
     */
    getRenderRectangle(): [ /* returnType */ boolean, /* renderX */ number, /* renderY */ number, /* renderWidth */ number, /* renderHeight */ number ]
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
     * @returns the sequence number of @rectangle
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
     * @param globalAlpha Global alpha value (0 to 1.0)
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
     * @param renderX render X position of rectangle on video
     * @param renderY render Y position of rectangle on video
     * @param renderWidth render width of rectangle
     * @param renderHeight render height of rectangle
     */
    setRenderRectangle(renderX: number, renderY: number, renderWidth: number, renderHeight: number): void
}

/**
 * An opaque video overlay rectangle object. A rectangle contains a single
 * overlay rectangle which can be added to a composition.
 * @record 
 */
export class VideoOverlayRectangle {

    // Own properties of GstVideo-1.0.GstVideo.VideoOverlayRectangle

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoOverlayRectangle

    /**
     * Creates a new video overlay rectangle with ARGB or AYUV pixel data.
     * The layout in case of ARGB of the components in memory is B-G-R-A
     * on little-endian platforms
     * (corresponding to #GST_VIDEO_FORMAT_BGRA) and A-R-G-B on big-endian
     * platforms (corresponding to #GST_VIDEO_FORMAT_ARGB). In other words,
     * pixels are treated as 32-bit words and the lowest 8 bits then contain
     * the blue component value and the highest 8 bits contain the alpha
     * component value. Unless specified in the flags, the RGB values are
     * non-premultiplied. This is the format that is used by most hardware,
     * and also many rendering libraries such as Cairo, for example.
     * The pixel data buffer must have #GstVideoMeta set.
     * @constructor 
     * @param pixels a #GstBuffer pointing to the pixel memory
     * @param renderX the X co-ordinate on the video where the top-left corner of this     overlay rectangle should be rendered to
     * @param renderY the Y co-ordinate on the video where the top-left corner of this     overlay rectangle should be rendered to
     * @param renderWidth the render width of this rectangle on the video
     * @param renderHeight the render height of this rectangle on the video
     * @param flags flags
     * @returns a new #GstVideoOverlayRectangle. Unref with     gst_video_overlay_rectangle_unref() when no longer needed.
     */
    static newRaw(pixels: Gst.Buffer, renderX: number, renderY: number, renderWidth: number, renderHeight: number, flags: VideoOverlayFormatFlags): VideoOverlayRectangle
}

export interface VideoRectangle {

    // Own fields of GstVideo-1.0.GstVideo.VideoRectangle

    /**
     * X coordinate of rectangle's top-left point
     * @field 
     */
    x: number
    /**
     * Y coordinate of rectangle's top-left point
     * @field 
     */
    y: number
    /**
     * width of the rectangle
     * @field 
     */
    w: number
    /**
     * height of the rectangle
     * @field 
     */
    h: number
}

/**
 * Helper structure representing a rectangular area.
 * @record 
 */
export class VideoRectangle {

    // Own properties of GstVideo-1.0.GstVideo.VideoRectangle

    static name: string
}

export interface VideoRegionOfInterestMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * GQuark describing the semantic of the Roi (f.i. a face, a pedestrian)
     * @field 
     */
    roiType: GLib.Quark
    /**
     * identifier of this particular ROI
     * @field 
     */
    id: number
    /**
     * identifier of its parent ROI, used f.i. for ROI hierarchisation.
     * @field 
     */
    parentId: number
    /**
     * x component of upper-left corner
     * @field 
     */
    x: number
    /**
     * y component of upper-left corner
     * @field 
     */
    y: number
    /**
     * bounding box width
     * @field 
     */
    w: number
    /**
     * bounding box height
     * @field 
     */
    h: number
    /**
     * list of #GstStructure containing element-specific params for downstream,
     *          see gst_video_region_of_interest_meta_add_param(). (Since: 1.14)
     * @field 
     */
    params: any[]

    // Owm methods of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta

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
     * @param s a #GstStructure
     */
    addParam(s: Gst.Structure): void
    /**
     * Retrieve the parameter for `meta` having `name` as structure name,
     * or %NULL if there is none.
     * @param name a name.
     * @returns a #GstStructure
     */
    getParam(name: string): Gst.Structure | null
}

/**
 * Extra buffer metadata describing an image region of interest
 * @record 
 */
export class VideoRegionOfInterestMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoRegionOfInterestMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoResampler {

    // Own fields of GstVideo-1.0.GstVideo.VideoResampler

    /**
     * the input size
     * @field 
     */
    inSize: number
    /**
     * the output size
     * @field 
     */
    outSize: number
    /**
     * the maximum number of taps
     * @field 
     */
    maxTaps: number
    /**
     * the number of phases
     * @field 
     */
    nPhases: number
    /**
     * array with the source offset for each output element
     * @field 
     */
    offset: number
    /**
     * array with the phase to use for each output element
     * @field 
     */
    phase: number
    /**
     * array with new number of taps for each phase
     * @field 
     */
    nTaps: number
    /**
     * the taps for all phases
     * @field 
     */
    taps: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoResampler

    /**
     * Clear a previously initialized #GstVideoResampler `resampler`.
     */
    clear(): void
    init(method: VideoResamplerMethod, flags: VideoResamplerFlags, nPhases: number, nTaps: number, shift: number, inSize: number, outSize: number, options: Gst.Structure): boolean
}

/**
 * #GstVideoResampler is a structure which holds the information
 * required to perform various kinds of resampling filtering.
 * @record 
 */
export class VideoResampler {

    // Own properties of GstVideo-1.0.GstVideo.VideoResampler

    static name: string
}

export interface VideoSEIUserDataUnregisteredMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoSEIUserDataUnregisteredMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * User Data Unregistered UUID
     * @field 
     */
    uuid: number[]
    /**
     * Unparsed data buffer
     * @field 
     */
    data: number
    /**
     * Size of the data buffer
     * @field 
     */
    size: number
}

/**
 * H.264 H.265 metadata from SEI User Data Unregistered messages
 * @record 
 */
export class VideoSEIUserDataUnregisteredMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoSEIUserDataUnregisteredMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoSEIUserDataUnregisteredMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoScaler {

    // Owm methods of GstVideo-1.0.GstVideo.VideoScaler

    /**
     * Scale a rectangle of pixels in `src` with `src_stride` to `dest` with
     * `dest_stride` using the horizontal scaler `hscaler` and the vertical
     * scaler `vscale`.
     * 
     * One or both of `hscale` and `vscale` can be NULL to only perform scaling in
     * one dimension or do a copy without scaling.
     * 
     * `x` and `y` are the coordinates in the destination image to process.
     * @param vscale a vertical #GstVideoScaler
     * @param format a #GstVideoFormat for `srcs` and `dest`
     * @param src source pixels
     * @param srcStride source pixels stride
     * @param dest destination pixels
     * @param destStride destination pixels stride
     * @param x the horizontal destination offset
     * @param y the vertical destination offset
     * @param width the number of output pixels to scale
     * @param height the number of output lines to scale
     */
    TODO_2d(vscale: VideoScaler, format: VideoFormat, src: any | null, srcStride: number, dest: any | null, destStride: number, x: number, y: number, width: number, height: number): void
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
     * @param outOffset an output offset
     * @returns an array of @n_tap gdouble values with filter coefficients.
     */
    getCoeff(outOffset: number): [ /* returnType */ number, /* inOffset */ number, /* nTaps */ number ]
    /**
     * Get the maximum number of taps for `scale`.
     * @returns the maximum number of taps
     */
    getMaxTaps(): number
    /**
     * Horizontally scale the pixels in `src` to `dest,` starting from `dest_offset`
     * for `width` samples.
     * @param format a #GstVideoFormat for `src` and `dest`
     * @param src source pixels
     * @param dest destination pixels
     * @param destOffset the horizontal destination offset
     * @param width the number of pixels to scale
     */
    horizontal(format: VideoFormat, src: any | null, dest: any | null, destOffset: number, width: number): void
    /**
     * Vertically combine `width` pixels in the lines in `src_lines` to `dest`.
     * `dest` is the location of the target line at `dest_offset` and
     * `srcs` are the input lines for `dest_offset`.
     * @param format a #GstVideoFormat for `srcs` and `dest`
     * @param srcLines source pixels lines
     * @param dest destination pixels
     * @param destOffset the vertical destination offset
     * @param width the number of pixels to scale
     */
    vertical(format: VideoFormat, srcLines: any | null, dest: any | null, destOffset: number, width: number): void
}

/**
 * #GstVideoScaler is a utility object for rescaling and resampling
 * video frames using various interpolation / sampling methods.
 * @record 
 */
export class VideoScaler {

    // Own properties of GstVideo-1.0.GstVideo.VideoScaler

    static name: string
}

export interface VideoSinkClass {

    // Own fields of GstVideo-1.0.GstVideo.VideoSinkClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GstBase.BaseSinkClass
    showFrame: (videoSink: VideoSink, buf: Gst.Buffer) => Gst.FlowReturn
    setInfo: (videoSink: VideoSink, caps: Gst.Caps, info: VideoInfo) => boolean
}

/**
 * The video sink class structure. Derived classes should override the
 * `show_frame` virtual function.
 * @record 
 */
export abstract class VideoSinkClass {

    // Own properties of GstVideo-1.0.GstVideo.VideoSinkClass

    static name: string
}

export interface VideoSinkPrivate {
}

export class VideoSinkPrivate {

    // Own properties of GstVideo-1.0.GstVideo.VideoSinkPrivate

    static name: string
}

export interface VideoTileInfo {

    // Own fields of GstVideo-1.0.GstVideo.VideoTileInfo

    /**
     * The width in pixels of a tile. This value can be zero if the number of
     * pixels per line is not an integer value.
     * @field 
     */
    width: number
    height: number
    /**
     * The stride (in bytes) of a tile line. Regardless if the tile have sub-tiles
     * this stride multiplied by the height should be equal to
     * #GstVideoTileInfo.size. This value is used to translate into linear stride
     * when older APIs are being used to expose this format.
     * @field 
     */
    stride: number
    /**
     * The size in bytes of a tile. This value must be divisible by
     * #GstVideoTileInfo.stride.
     * @field 
     */
    size: number
}

/**
 * Description of a tile. This structure allow to describe arbitrary tile
 * dimensions and sizes.
 * @record 
 */
export class VideoTileInfo {

    // Own properties of GstVideo-1.0.GstVideo.VideoTileInfo

    static name: string
}

export interface VideoTimeCode {

    // Own fields of GstVideo-1.0.GstVideo.VideoTimeCode

    /**
     * the corresponding #GstVideoTimeCodeConfig
     * @field 
     */
    config: VideoTimeCodeConfig
    /**
     * the hours field of #GstVideoTimeCode
     * @field 
     */
    hours: number
    /**
     * the minutes field of #GstVideoTimeCode
     * @field 
     */
    minutes: number
    /**
     * the seconds field of #GstVideoTimeCode
     * @field 
     */
    seconds: number
    /**
     * the frames field of #GstVideoTimeCode
     * @field 
     */
    frames: number
    /**
     * Interlaced video field count
     * @field 
     */
    fieldCount: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoTimeCode

    /**
     * Adds or subtracts `frames` amount of frames to `tc`. tc needs to
     * contain valid data, as verified by gst_video_time_code_is_valid().
     * @param frames How many frames to add or subtract
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
     * @param tcInter The #GstVideoTimeCodeInterval to add to `tc`. The interval must contain valid values, except that for drop-frame timecode, it may also contain timecodes which would normally be dropped. These are then corrected to the next reasonable timecode.
     * @returns A new #GstVideoTimeCode with @tc_inter added or %NULL   if the interval can't be added.
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
     * @param tc2 another valid #GstVideoTimeCode
     * @returns 1 if @tc1 is after @tc2, -1 if @tc1 is before @tc2, 0 otherwise.
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
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param latestDailyJam The latest daily jam of the #GstVideoTimeCode
     * @param flags #GstVideoTimeCodeFlags
     * @param hours the hours field of #GstVideoTimeCode
     * @param minutes the minutes field of #GstVideoTimeCode
     * @param seconds the seconds field of #GstVideoTimeCode
     * @param frames the frames field of #GstVideoTimeCode
     * @param fieldCount Interlaced video field count
     */
    init(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime | null, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): void
    /**
     * The resulting config->latest_daily_jam is set to midnight, and timecode is
     * set to the given time.
     * 
     * Will assert on invalid parameters, use gst_video_time_code_init_from_date_time_full()
     * for being able to handle invalid parameters.
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param dt #GDateTime to convert
     * @param flags #GstVideoTimeCodeFlags
     * @param fieldCount Interlaced video field count
     */
    initFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): void
    /**
     * The resulting config->latest_daily_jam is set to
     * midnight, and timecode is set to the given time.
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param dt #GDateTime to convert
     * @param flags #GstVideoTimeCodeFlags
     * @param fieldCount Interlaced video field count
     * @returns %TRUE if @tc could be correctly initialized to a valid timecode
     */
    initFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): boolean
    isValid(): boolean
    nsecSinceDailyJam(): number
    /**
     * The `tc`.config->latest_daily_jam is required to be non-NULL.
     * @returns the #GDateTime representation of @tc or %NULL if @tc   has no daily jam.
     */
    toDateTime(): GLib.DateTime | null
    toString(): string | null
}

/**
 * `field_count` must be 0 for progressive video and 1 or 2 for interlaced.
 * 
 * A representation of a SMPTE time code.
 * 
 * `hours` must be positive and less than 24. Will wrap around otherwise.
 * `minutes` and `seconds` must be positive and less than 60.
 * `frames` must be less than or equal to `config`.fps_n / `config`.fps_d
 * These values are *NOT* automatically normalized.
 * @record 
 */
export class VideoTimeCode {

    // Own properties of GstVideo-1.0.GstVideo.VideoTimeCode

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoTimeCode

    /**
     * `field_count` is 0 for progressive, 1 or 2 for interlaced.
     * `latest_daiy_jam` reference is stolen from caller.
     * @constructor 
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param latestDailyJam The latest daily jam of the #GstVideoTimeCode
     * @param flags #GstVideoTimeCodeFlags
     * @param hours the hours field of #GstVideoTimeCode
     * @param minutes the minutes field of #GstVideoTimeCode
     * @param seconds the seconds field of #GstVideoTimeCode
     * @param frames the frames field of #GstVideoTimeCode
     * @param fieldCount Interlaced video field count
     * @returns a new #GstVideoTimeCode with the given values. The values are not checked for being in a valid range. To see if your timecode actually has valid content, use gst_video_time_code_is_valid().
     */
    constructor(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number) 
    /**
     * `field_count` is 0 for progressive, 1 or 2 for interlaced.
     * `latest_daiy_jam` reference is stolen from caller.
     * @constructor 
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param latestDailyJam The latest daily jam of the #GstVideoTimeCode
     * @param flags #GstVideoTimeCodeFlags
     * @param hours the hours field of #GstVideoTimeCode
     * @param minutes the minutes field of #GstVideoTimeCode
     * @param seconds the seconds field of #GstVideoTimeCode
     * @param frames the frames field of #GstVideoTimeCode
     * @param fieldCount Interlaced video field count
     * @returns a new #GstVideoTimeCode with the given values. The values are not checked for being in a valid range. To see if your timecode actually has valid content, use gst_video_time_code_is_valid().
     */
    static new(fpsN: number, fpsD: number, latestDailyJam: GLib.DateTime, flags: VideoTimeCodeFlags, hours: number, minutes: number, seconds: number, frames: number, fieldCount: number): VideoTimeCode
    static newEmpty(): VideoTimeCode
    /**
     * The resulting config->latest_daily_jam is set to
     * midnight, and timecode is set to the given time.
     * 
     * This might return a completely invalid timecode, use
     * gst_video_time_code_new_from_date_time_full() to ensure
     * that you would get %NULL instead in that case.
     * @constructor 
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param dt #GDateTime to convert
     * @param flags #GstVideoTimeCodeFlags
     * @param fieldCount Interlaced video field count
     * @returns the #GstVideoTimeCode representation of @dt.
     */
    static newFromDateTime(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    /**
     * The resulting config->latest_daily_jam is set to
     * midnight, and timecode is set to the given time.
     * @constructor 
     * @param fpsN Numerator of the frame rate
     * @param fpsD Denominator of the frame rate
     * @param dt #GDateTime to convert
     * @param flags #GstVideoTimeCodeFlags
     * @param fieldCount Interlaced video field count
     * @returns the #GstVideoTimeCode representation of @dt, or %NULL if   no valid timecode could be created.
     */
    static newFromDateTimeFull(fpsN: number, fpsD: number, dt: GLib.DateTime, flags: VideoTimeCodeFlags, fieldCount: number): VideoTimeCode
    static newFromString(tcStr: string): VideoTimeCode
}

export interface VideoTimeCodeConfig {

    // Own fields of GstVideo-1.0.GstVideo.VideoTimeCodeConfig

    /**
     * Numerator of the frame rate
     * @field 
     */
    fpsN: number
    /**
     * Denominator of the frame rate
     * @field 
     */
    fpsD: number
    /**
     * the corresponding #GstVideoTimeCodeFlags
     * @field 
     */
    flags: VideoTimeCodeFlags
    /**
     * The latest daily jam information, if present, or NULL
     * @field 
     */
    latestDailyJam: GLib.DateTime
}

/**
 * Supported frame rates: 30000/1001, 60000/1001 (both with and without drop
 * frame), and integer frame rates e.g. 25/1, 30/1, 50/1, 60/1.
 * 
 * The configuration of the time code.
 * @record 
 */
export class VideoTimeCodeConfig {

    // Own properties of GstVideo-1.0.GstVideo.VideoTimeCodeConfig

    static name: string
}

export interface VideoTimeCodeInterval {

    // Own fields of GstVideo-1.0.GstVideo.VideoTimeCodeInterval

    /**
     * the hours field of #GstVideoTimeCodeInterval
     * @field 
     */
    hours: number
    /**
     * the minutes field of #GstVideoTimeCodeInterval
     * @field 
     */
    minutes: number
    /**
     * the seconds field of #GstVideoTimeCodeInterval
     * @field 
     */
    seconds: number
    /**
     * the frames field of #GstVideoTimeCodeInterval
     * @field 
     */
    frames: number

    // Owm methods of GstVideo-1.0.GstVideo.VideoTimeCodeInterval

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
     * @param hours the hours field of #GstVideoTimeCodeInterval
     * @param minutes the minutes field of #GstVideoTimeCodeInterval
     * @param seconds the seconds field of #GstVideoTimeCodeInterval
     * @param frames the frames field of #GstVideoTimeCodeInterval
     */
    init(hours: number, minutes: number, seconds: number, frames: number): void
}

/**
 * A representation of a difference between two #GstVideoTimeCode instances.
 * Will not necessarily correspond to a real timecode (e.g. 00:00:10;00)
 * @record 
 */
export class VideoTimeCodeInterval {

    // Own properties of GstVideo-1.0.GstVideo.VideoTimeCodeInterval

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoTimeCodeInterval

    constructor(hours: number, minutes: number, seconds: number, frames: number) 
    static new(hours: number, minutes: number, seconds: number, frames: number): VideoTimeCodeInterval
    /**
     * `tc_inter_str` must only have ":" as separators.
     * @constructor 
     * @param tcInterStr The string that represents the #GstVideoTimeCodeInterval
     * @returns a new #GstVideoTimeCodeInterval from the given string   or %NULL if the string could not be passed.
     */
    static newFromString(tcInterStr: string): VideoTimeCodeInterval
}

export interface VideoTimeCodeMeta {

    // Own fields of GstVideo-1.0.GstVideo.VideoTimeCodeMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the GstVideoTimeCode to attach
     * @field 
     */
    tc: VideoTimeCode
}

/**
 * Extra buffer metadata describing the GstVideoTimeCode of the frame.
 * 
 * Each frame is assumed to have its own timecode, i.e. they are not
 * automatically incremented/interpolated.
 * @record 
 */
export class VideoTimeCodeMeta {

    // Own properties of GstVideo-1.0.GstVideo.VideoTimeCodeMeta

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoTimeCodeMeta

    static getInfo(): Gst.MetaInfo
}

export interface VideoVBIEncoder {

    // Owm methods of GstVideo-1.0.GstVideo.VideoVBIEncoder

    /**
     * Stores Video Ancillary data, according to SMPTE-291M specification.
     * 
     * Note that the contents of the data are always read as 8bit data (i.e. do not contain
     * the parity check bits).
     * @param composite %TRUE if composite ADF should be created, component otherwise
     * @param dID The Data Identifier
     * @param sDIDBlockNumber The Secondary Data Identifier (if type 2) or the Data                     Block Number (if type 1)
     * @param data The user data content of the Ancillary packet.    Does not contain the ADF, DID, SDID nor CS.
     * @returns %TRUE if enough space was left in the current line, %FALSE          otherwise.
     */
    addAncillary(composite: boolean, dID: number, sDIDBlockNumber: number, data: number[]): boolean
    copy(): VideoVBIEncoder
    /**
     * Frees the `encoder`.
     */
    free(): void
    writeLine(data: number): void
}

/**
 * An encoder for writing ancillary data to the
 * Vertical Blanking Interval lines of component signals.
 * @record 
 */
export class VideoVBIEncoder {

    // Own properties of GstVideo-1.0.GstVideo.VideoVBIEncoder

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoVBIEncoder

    /**
     * Create a new #GstVideoVBIEncoder for the specified `format` and `pixel_width`.
     * @constructor 
     * @param format a #GstVideoFormat
     * @param pixelWidth The width in pixel to use
     * @returns The new #GstVideoVBIEncoder or %NULL if the @format and/or @pixel_width is not supported.
     */
    constructor(format: VideoFormat, pixelWidth: number) 
    /**
     * Create a new #GstVideoVBIEncoder for the specified `format` and `pixel_width`.
     * @constructor 
     * @param format a #GstVideoFormat
     * @param pixelWidth The width in pixel to use
     * @returns The new #GstVideoVBIEncoder or %NULL if the @format and/or @pixel_width is not supported.
     */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIEncoder
}

export interface VideoVBIParser {

    // Owm methods of GstVideo-1.0.GstVideo.VideoVBIParser

    /**
     * Provide a new line of data to the `parser`. Call gst_video_vbi_parser_get_ancillary()
     * to get the Ancillary data that might be present on that line.
     * @param data The line of data to parse
     */
    addLine(data: number[]): void
    copy(): VideoVBIParser
    /**
     * Frees the `parser`.
     */
    free(): void
    /**
     * Parse the line provided previously by gst_video_vbi_parser_add_line().
     * @returns %GST_VIDEO_VBI_PARSER_RESULT_OK if ancillary data was found and @anc was filled. %GST_VIDEO_VBI_PARSER_RESULT_DONE if there wasn't any data.
     */
    getAncillary(): [ /* returnType */ VideoVBIParserResult, /* anc */ VideoAncillary ]
}

/**
 * A parser for detecting and extracting `GstVideoAncillary` data from
 * Vertical Blanking Interval lines of component signals.
 * @record 
 */
export class VideoVBIParser {

    // Own properties of GstVideo-1.0.GstVideo.VideoVBIParser

    static name: string

    // Constructors of GstVideo-1.0.GstVideo.VideoVBIParser

    /**
     * Create a new #GstVideoVBIParser for the specified `format` and `pixel_width`.
     * @constructor 
     * @param format a #GstVideoFormat
     * @param pixelWidth The width in pixel to use
     * @returns The new #GstVideoVBIParser or %NULL if the @format and/or @pixel_width is not supported.
     */
    constructor(format: VideoFormat, pixelWidth: number) 
    /**
     * Create a new #GstVideoVBIParser for the specified `format` and `pixel_width`.
     * @constructor 
     * @param format a #GstVideoFormat
     * @param pixelWidth The width in pixel to use
     * @returns The new #GstVideoVBIParser or %NULL if the @format and/or @pixel_width is not supported.
     */
    static new(format: VideoFormat, pixelWidth: number): VideoVBIParser
}

// END