
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-ges-1.0-import.d.ts';
    
/**
 * GES-1.0
 */

import type GstVideo from '@girs/node-gstvideo-1.0';
import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstPbutils from '@girs/node-gstpbutils-1.0';
import type GstAudio from '@girs/node-gstaudio-1.0';
import type Gio from '@girs/node-gio-2.0';

export namespace GES {

enum AssetLoadingReturn {
    /**
     * Indicates that an error occurred
     */
    ERROR,
    /**
     * Indicates that the loading is being performed
     * asynchronously
     */
    ASYNC,
    /**
     * Indicates that the loading is complete, without
     * error
     */
    OK,
}
/**
 * To be used by subclasses only. This indicate how to handle a change in
 * a child.
 */
enum ChildrenControlMode {
    UPDATE,
    IGNORE_NOTIFIES,
    UPDATE_OFFSETS,
    UPDATE_ALL_VALUES,
    LAST,
}
/**
 * The edges of an object contain in a #GESTimeline or #GESTrack
 */
enum Edge {
    /**
     * Represents the start of an object.
     */
    EDGE_START,
    /**
     * Represents the start of an object.
     */
    START,
    /**
     * Represents the end of an object.
     */
    EDGE_END,
    /**
     * Represents the end of an object.
     */
    END,
    /**
     * Represent the fact we are not working with any edge of an
     *   object.
     */
    EDGE_NONE,
    /**
     * Represent the fact we are not working with any edge of an
     *   object.
     */
    NONE,
}
/**
 * When a single timeline element is edited within its timeline at some
 * position, using ges_timeline_element_edit(), depending on the edit
 * mode, its #GESTimelineElement:start, #GESTimelineElement:duration or
 * #GESTimelineElement:in-point will be adjusted accordingly. In addition,
 * any clips may change #GESClip:layer.
 * 
 * Each edit can be broken down into a combination of three basic edits:
 * 
 * + MOVE: This moves the start of the element to the edit position.
 * + START-TRIM: This cuts or grows the start of the element, whilst
 *   maintaining the time at which its internal content appears in the
 *   timeline data output. If the element is made shorter, the data that
 *   appeared at the edit position will still appear in the timeline at
 *   the same time. If the element is made longer, the data that appeared
 *   at the previous start of the element will still appear in the
 *   timeline at the same time.
 * + END-TRIM: Similar to START-TRIM, but the end of the element is cut or
 *   grown.
 * 
 * In particular, when editing a #GESClip:
 * 
 * + MOVE: This will set the #GESTimelineElement:start of the clip to the
 *   edit position.
 * + START-TRIM: This will set the #GESTimelineElement:start of the clip
 *   to the edit position. To keep the end time the same, the
 *   #GESTimelineElement:duration of the clip will be adjusted in the
 *   opposite direction. In addition, the #GESTimelineElement:in-point of
 *   the clip will be shifted such that the content that appeared at the
 *   new or previous start time, whichever is latest, still appears at the
 *   same timeline time. For example, if a frame appeared at the start of
 *   the clip, and the start of the clip is reduced, the in-point of the
 *   clip will also reduce such that the frame will appear later within
 *   the clip, but at the same timeline position.
 * + END-TRIM: This will set the #GESTimelineElement:duration of the clip
 *   such that its end time will match the edit position.
 * 
 * When editing a #GESGroup:
 * 
 * + MOVE: This will set the #GESGroup:start of the clip to the edit
 *   position by shifting all of its children by the same amount. So each
 *   child will maintain their relative positions.
 * + START-TRIM: If the group is made shorter, this will START-TRIM any
 *   clips under the group that start after the edit position to the same
 *   edit position. If the group is made longer, this will START-TRIM any
 *   clip under the group whose start matches the start of the group to
 *   the same edit position.
 * + END-TRIM: If the group is made shorter, this will END-TRIM any clips
 *   under the group that end after the edit position to the same edit
 *   position. If the group is made longer, this will END-TRIM any clip
 *   under the group whose end matches the end of the group to the same
 *   edit position.
 * 
 * When editing a #GESTrackElement, if it has a #GESClip parent, this
 * will be edited instead. Otherwise it is edited in the same way as a
 * #GESClip.
 * 
 * The layer priority of a #GESGroup is the lowest layer priority of any
 * #GESClip underneath it. When a group is edited to a new layer
 * priority, it will shift all clips underneath it by the same amount,
 * such that their relative layers stay the same.
 * 
 * If the #GESTimeline has a #GESTimeline:snapping-distance, then snapping
 * may occur for some of the edges of the **main** edited element:
 * 
 * + MOVE: The start or end edge of *any* #GESSource under the element may
 *   be snapped.
 * + START-TRIM: The start edge of a #GESSource whose start edge touches
 *   the start edge of the element may snap.
 * + END-TRIM: The end edge of a #GESSource whose end edge touches the end
 *   edge of the element may snap.
 * 
 * These edges may snap with either the start or end edge of *any* other
 * #GESSource in the timeline that is not also being moved by the element,
 * including those in different layers, if they are within the
 * #GESTimeline:snapping-distance. During an edit, only up to one snap can
 * occur. This will shift the edit position such that the snapped edges
 * will touch once the edit has completed.
 * 
 * Note that snapping can cause an edit to fail where it would have
 * otherwise succeeded because it may push the edit position such that the
 * edit would result in an unsupported timeline configuration. Similarly,
 * snapping can cause an edit to succeed where it would have otherwise
 * failed.
 * 
 * For example, in #GES_EDIT_MODE_RIPPLE acting on #GES_EDGE_NONE, the
 * main element is the MOVED toplevel of the edited element. Any source
 * under the main MOVED toplevel may have its start or end edge snapped.
 * Note, these sources cannot snap with each other. The edit may also
 * push other elements, but any sources under these elements cannot snap,
 * nor can they be snapped with. If a snap does occur, the MOVE of the
 * toplevel *and* all other elements pushed by the ripple will be shifted
 * by the same amount such that the snapped edges will touch.
 * 
 * You can also find more explanation about the behaviour of those modes at:
 * [trim, ripple and roll](http://pitivi.org/manual/trimming.html)
 * and [clip management](http://pitivi.org/manual/usingclips.html).
 */
enum EditMode {
    /**
     * The element is edited the normal way (default).
     *  If acting on the element as a whole (#GES_EDGE_NONE), this will MOVE
     *  the element by MOVING its toplevel. When acting on the start of the
     *  element (#GES_EDGE_START), this will only MOVE the element, but not
     *  its toplevel parent. This can allow you to move a #GESClip or
     *  #GESGroup to a new start time or layer within its container group,
     *  without effecting other members of the group. When acting on the end
     *  of the element (#GES_EDGE_END), this will END-TRIM the element,
     *  leaving its toplevel unchanged.
     */
    EDIT_NORMAL,
    /**
     * The element is edited the normal way (default).
     *  If acting on the element as a whole (#GES_EDGE_NONE), this will MOVE
     *  the element by MOVING its toplevel. When acting on the start of the
     *  element (#GES_EDGE_START), this will only MOVE the element, but not
     *  its toplevel parent. This can allow you to move a #GESClip or
     *  #GESGroup to a new start time or layer within its container group,
     *  without effecting other members of the group. When acting on the end
     *  of the element (#GES_EDGE_END), this will END-TRIM the element,
     *  leaving its toplevel unchanged.
     */
    NORMAL,
    /**
     * The element is edited in ripple mode: moving
     *  itself as well as later elements, keeping their relative times. This
     *  edits the element the same as #GES_EDIT_MODE_NORMAL. In addition, if
     *  acting on the element as a whole, or the start of the element, any
     *  toplevel element in the same timeline (including different layers)
     *  whose start time is later than the *current* start time of the MOVED
     *  element will also be MOVED by the same shift as the edited element.
     *  If acting on the end of the element, any toplevel element whose start
     *  time is later than the *current* end time of the edited element will
     *  also be MOVED by the same shift as the change in the end of the
     *  edited element. These additional elements will also be shifted by
     *  the same shift in layers as the edited element.
     */
    EDIT_RIPPLE,
    /**
     * The element is edited in ripple mode: moving
     *  itself as well as later elements, keeping their relative times. This
     *  edits the element the same as #GES_EDIT_MODE_NORMAL. In addition, if
     *  acting on the element as a whole, or the start of the element, any
     *  toplevel element in the same timeline (including different layers)
     *  whose start time is later than the *current* start time of the MOVED
     *  element will also be MOVED by the same shift as the edited element.
     *  If acting on the end of the element, any toplevel element whose start
     *  time is later than the *current* end time of the edited element will
     *  also be MOVED by the same shift as the change in the end of the
     *  edited element. These additional elements will also be shifted by
     *  the same shift in layers as the edited element.
     */
    RIPPLE,
    /**
     * The element is edited in roll mode: swapping its
     *  content for its neighbour's, or vis versa, in the timeline output.
     *  This edits the element the same as #GES_EDIT_MODE_TRIM. In addition,
     *  any neighbours are also TRIMMED at their opposite edge to the same
     *  timeline position. When acting on the start of the element, a
     *  neighbour is any earlier element in the timeline whose end time
     *  matches the *current* start time of the edited element. When acting on
     *  the end of the element, a neighbour is any later element in the
     *  timeline whose start time matches the *current* start time of the
     *  edited element. In addition, a neighbour have a #GESSource at its
     *  end/start edge that shares a track with a #GESSource at the start/end
     *  edge of the edited element. Basically, a neighbour is an element that
     *  can be extended, or cut, to have its content replace, or be replaced
     *  by, the content of the edited element. Acting on the element as a
     *  whole (#GES_EDGE_NONE) is not defined. The element can not shift
     *  layers under this mode.
     */
    EDIT_ROLL,
    /**
     * The element is edited in roll mode: swapping its
     *  content for its neighbour's, or vis versa, in the timeline output.
     *  This edits the element the same as #GES_EDIT_MODE_TRIM. In addition,
     *  any neighbours are also TRIMMED at their opposite edge to the same
     *  timeline position. When acting on the start of the element, a
     *  neighbour is any earlier element in the timeline whose end time
     *  matches the *current* start time of the edited element. When acting on
     *  the end of the element, a neighbour is any later element in the
     *  timeline whose start time matches the *current* start time of the
     *  edited element. In addition, a neighbour have a #GESSource at its
     *  end/start edge that shares a track with a #GESSource at the start/end
     *  edge of the edited element. Basically, a neighbour is an element that
     *  can be extended, or cut, to have its content replace, or be replaced
     *  by, the content of the edited element. Acting on the element as a
     *  whole (#GES_EDGE_NONE) is not defined. The element can not shift
     *  layers under this mode.
     */
    ROLL,
    /**
     * The element is edited in trim mode. When acting
     *  on the start of the element, this will START-TRIM it. When acting on
     *  the end of the element, this will END-TRIM it. Acting on the element
     *  as a whole (#GES_EDGE_NONE) is not defined.
     */
    EDIT_TRIM,
    /**
     * The element is edited in trim mode. When acting
     *  on the start of the element, this will START-TRIM it. When acting on
     *  the end of the element, this will END-TRIM it. Acting on the element
     *  as a whole (#GES_EDGE_NONE) is not defined.
     */
    TRIM,
    /**
     * The element is edited in slide mode (not yet
     *  implemented): moving the element replacing or consuming content on
     *  each end. When acting on the element as a whole, this will MOVE the
     *  element, and TRIM any neighbours on either side. A neighbour is
     *  defined in the same way as in #GES_EDIT_MODE_ROLL, but they may be on
     *  either side of the edited elements. Elements at the end with be
     *  START-TRIMMED to the new end position of the edited element. Elements
     *  at the start will be END-TRIMMED to the new start position of the
     *  edited element. Acting on the start or end of the element
     *  (#GES_EDGE_START and #GES_EDGE_END) is not defined. The element can
     *  not shift layers under this mode.
     */
    EDIT_SLIDE,
    /**
     * The element is edited in slide mode (not yet
     *  implemented): moving the element replacing or consuming content on
     *  each end. When acting on the element as a whole, this will MOVE the
     *  element, and TRIM any neighbours on either side. A neighbour is
     *  defined in the same way as in #GES_EDIT_MODE_ROLL, but they may be on
     *  either side of the edited elements. Elements at the end with be
     *  START-TRIMMED to the new end position of the edited element. Elements
     *  at the start will be END-TRIMMED to the new start position of the
     *  edited element. Acting on the start or end of the element
     *  (#GES_EDGE_START and #GES_EDGE_END) is not defined. The element can
     *  not shift layers under this mode.
     */
    SLIDE,
}
enum Error {
    /**
     * The ID passed is malformed
     */
    ASSET_WRONG_ID,
    /**
     * An error happened while loading the asset
     */
    ASSET_LOADING,
    /**
     * The formatted files was malformed
     */
    FORMATTER_MALFORMED_INPUT_FILE,
    /**
     * The frame number is invalid
     */
    INVALID_FRAME_NUMBER,
    /**
     * The operation would lead to a negative
     * #GES_TIMELINE_ELEMENT_LAYER_PRIORITY. (Since: 1.18)
     */
    NEGATIVE_LAYER,
    /**
     * The operation would lead to a negative time.
     * E.g. for the #GESTimelineElement:start #GESTimelineElement:duration or
     * #GESTimelineElement:in-point. (Since: 1.18)
     */
    NEGATIVE_TIME,
    /**
     * Some #GESTimelineElement does
     * not have a large enough #GESTimelineElement:max-duration to cover the
     * desired operation. (Since: 1.18)
     */
    NOT_ENOUGH_INTERNAL_CONTENT,
    /**
     * The operation would break one of
     * the overlap conditions for the #GESTimeline. (Since: 1.18)
     */
    INVALID_OVERLAP_IN_TRACK,
    INVALID_EFFECT_BIN_DESCRIPTION,
}
/**
 * Horizontal alignment of the text.
 */
enum TextHAlign {
    /**
     * align text left
     */
    LEFT,
    /**
     * align text center
     */
    CENTER,
    /**
     * align text right
     */
    RIGHT,
    /**
     * align text on xpos position
     */
    POSITION,
    ABSOLUTE,
}
/**
 * Vertical alignment of the text.
 */
enum TextVAlign {
    /**
     * draw text on the baseline
     */
    BASELINE,
    /**
     * draw text on the bottom
     */
    BOTTOM,
    /**
     * draw text on top
     */
    TOP,
    /**
     * draw text on ypos position
     */
    POSITION,
    /**
     * draw text on the center
     */
    CENTER,
    ABSOLUTE,
}
enum VideoStandardTransitionType {
    /**
     * Transition type has not been set,
     */
    NONE,
    /**
     * A bar moves from left to right,
     */
    BAR_WIPE_LR,
    /**
     * A bar moves from top to bottom,
     */
    BAR_WIPE_TB,
    /**
     * A box expands from the upper-left corner to the lower-right corner,
     */
    BOX_WIPE_TL,
    /**
     * A box expands from the upper-right corner to the lower-left corner,
     */
    BOX_WIPE_TR,
    /**
     * A box expands from the lower-right corner to the upper-left corner,
     */
    BOX_WIPE_BR,
    /**
     * A box expands from the lower-left corner to the upper-right corner,
     */
    BOX_WIPE_BL,
    /**
     * A box shape expands from each of the four corners toward the center,
     */
    FOUR_BOX_WIPE_CI,
    /**
     * A box shape expands from the center of each quadrant toward the corners of each quadrant,
     */
    FOUR_BOX_WIPE_CO,
    /**
     * A central, vertical line splits and expands toward the left and right edges,
     */
    BARNDOOR_V,
    /**
     * A central, horizontal line splits and expands toward the top and bottom edges,
     */
    BARNDOOR_H,
    /**
     * A box expands from the top edge's midpoint to the bottom corners,
     */
    BOX_WIPE_TC,
    /**
     * A box expands from the right edge's midpoint to the left corners,
     */
    BOX_WIPE_RC,
    /**
     * A box expands from the bottom edge's midpoint to the top corners,
     */
    BOX_WIPE_BC,
    /**
     * A box expands from the left edge's midpoint to the right corners,
     */
    BOX_WIPE_LC,
    /**
     * A diagonal line moves from the upper-left corner to the lower-right corner,
     */
    DIAGONAL_TL,
    /**
     * A diagonal line moves from the upper right corner to the lower-left corner,
     */
    DIAGONAL_TR,
    /**
     * Two wedge shapes slide in from the top and bottom edges toward the center,
     */
    BOWTIE_V,
    /**
     * Two wedge shapes slide in from the left and right edges toward the center,
     */
    BOWTIE_H,
    /**
     * A diagonal line from the lower-left to upper-right corners splits and expands toward the opposite corners,
     */
    BARNDOOR_DBL,
    /**
     * A diagonal line from upper-left to lower-right corners splits and expands toward the opposite corners,
     */
    BARNDOOR_DTL,
    /**
     * Four wedge shapes split from the center and retract toward the four edges,
     */
    MISC_DIAGONAL_DBD,
    /**
     * A diamond connecting the four edge midpoints simultaneously contracts toward the center and expands toward the edges,
     */
    MISC_DIAGONAL_DD,
    /**
     * A wedge shape moves from top to bottom,
     */
    VEE_D,
    /**
     * A wedge shape moves from right to left,
     */
    VEE_L,
    /**
     * A wedge shape moves from bottom to top,
     */
    VEE_U,
    /**
     * A wedge shape moves from left to right,
     */
    VEE_R,
    /**
     * A 'V' shape extending from the bottom edge's midpoint to the opposite corners contracts toward the center and expands toward the edges,
     */
    BARNVEE_D,
    /**
     * A 'V' shape extending from the left edge's midpoint to the opposite corners contracts toward the center and expands toward the edges,
     */
    BARNVEE_L,
    /**
     * A 'V' shape extending from the top edge's midpoint to the opposite corners contracts toward the center and expands toward the edges,
     */
    BARNVEE_U,
    /**
     * A 'V' shape extending from the right edge's midpoint to the opposite corners contracts toward the center and expands toward the edges,
     */
    BARNVEE_R,
    /**
     * A rectangle expands from the center.,
     */
    IRIS_RECT,
    /**
     * A radial hand sweeps clockwise from the twelve o'clock position,
     */
    CLOCK_CW12,
    /**
     * A radial hand sweeps clockwise from the three o'clock position,
     */
    CLOCK_CW3,
    /**
     * A radial hand sweeps clockwise from the six o'clock position,
     */
    CLOCK_CW6,
    /**
     * A radial hand sweeps clockwise from the nine o'clock position,
     */
    CLOCK_CW9,
    /**
     * Two radial hands sweep clockwise from the twelve and six o'clock positions,
     */
    PINWHEEL_TBV,
    /**
     * Two radial hands sweep clockwise from the nine and three o'clock positions,
     */
    PINWHEEL_TBH,
    /**
     * Four radial hands sweep clockwise,
     */
    PINWHEEL_FB,
    /**
     * A fan unfolds from the top edge, the fan axis at the center,
     */
    FAN_CT,
    /**
     * A fan unfolds from the right edge, the fan axis at the center,
     */
    FAN_CR,
    /**
     * Two fans, their axes at the center, unfold from the top and bottom,
     */
    DOUBLEFAN_FOV,
    /**
     * Two fans, their axes at the center, unfold from the left and right,
     */
    DOUBLEFAN_FOH,
    /**
     * A radial hand sweeps clockwise from the top edge's midpoint,
     */
    SINGLESWEEP_CWT,
    /**
     * A radial hand sweeps clockwise from the right edge's midpoint,
     */
    SINGLESWEEP_CWR,
    /**
     * A radial hand sweeps clockwise from the bottom edge's midpoint,
     */
    SINGLESWEEP_CWB,
    /**
     * A radial hand sweeps clockwise from the left edge's midpoint,
     */
    SINGLESWEEP_CWL,
    /**
     * Two radial hands sweep clockwise and counter-clockwise from the top and bottom edges' midpoints,
     */
    DOUBLESWEEP_PV,
    /**
     * Two radial hands sweep clockwise and counter-clockwise from the left and right edges' midpoints,
     */
    DOUBLESWEEP_PD,
    /**
     * Two radial hands attached at the top and bottom edges' midpoints sweep from right to left,
     */
    DOUBLESWEEP_OV,
    /**
     * Two radial hands attached at the left and right edges' midpoints sweep from top to bottom,
     */
    DOUBLESWEEP_OH,
    /**
     * A fan unfolds from the bottom, the fan axis at the top edge's midpoint,
     */
    FAN_T,
    /**
     * A fan unfolds from the left, the fan axis at the right edge's midpoint,
     */
    FAN_R,
    /**
     * A fan unfolds from the top, the fan axis at the bottom edge's midpoint,
     */
    FAN_B,
    /**
     * A fan unfolds from the right, the fan axis at the left edge's midpoint,
     */
    FAN_L,
    /**
     * Two fans, their axes at the top and bottom, unfold from the center,
     */
    DOUBLEFAN_FIV,
    /**
     * Two fans, their axes at the left and right, unfold from the center,
     */
    DOUBLEFAN_FIH,
    /**
     * A radial hand sweeps clockwise from the upper-left corner,
     */
    SINGLESWEEP_CWTL,
    /**
     * A radial hand sweeps counter-clockwise from the lower-left corner.,
     */
    SINGLESWEEP_CWBL,
    /**
     * A radial hand sweeps clockwise from the lower-right corner,
     */
    SINGLESWEEP_CWBR,
    /**
     * A radial hand sweeps counter-clockwise from the upper-right corner,
     */
    SINGLESWEEP_CWTR,
    /**
     * Two radial hands attached at the upper-left and lower-right corners sweep down and up,
     */
    DOUBLESWEEP_PDTL,
    /**
     * Two radial hands attached at the lower-left and upper-right corners sweep down and up,
     */
    DOUBLESWEEP_PDBL,
    /**
     * Two radial hands attached at the upper-left and upper-right corners sweep down,
     */
    SALOONDOOR_T,
    /**
     * Two radial hands attached at the upper-left and lower-left corners sweep to the right,
     */
    SALOONDOOR_L,
    /**
     * Two radial hands attached at the lower-left and lower-right corners sweep up,
     */
    SALOONDOOR_B,
    /**
     * Two radial hands attached at the upper-right and lower-right corners sweep to the left,
     */
    SALOONDOOR_R,
    /**
     * Two radial hands attached at the midpoints of the top and bottom halves sweep from right to left,
     */
    WINDSHIELD_R,
    /**
     * Two radial hands attached at the midpoints of the left and right halves sweep from top to bottom,
     */
    WINDSHIELD_U,
    /**
     * Two sets of radial hands attached at the midpoints of the top and bottom halves sweep from top to bottom and bottom to top,
     */
    WINDSHIELD_V,
    /**
     * Two sets of radial hands attached at the midpoints of the left and right halves sweep from left to right and right to left,
     */
    WINDSHIELD_H,
    /**
     * Crossfade
     */
    CROSSFADE,
    /**
     * Similar to crossfade, but fade in the front video without fading out
     * the background one
     */
    FADE_IN,
}
/**
 * The test pattern to produce
 */
enum VideoTestPattern {
    /**
     * A standard SMPTE test pattern
     */
    SMPTE,
    /**
     * Random noise
     */
    SNOW,
    /**
     * A black image
     */
    BLACK,
    /**
     * A white image
     */
    WHITE,
    /**
     * A red image
     */
    RED,
    /**
     * A green image
     */
    GREEN,
    /**
     * A blue image
     */
    BLUE,
    /**
     * Checkers pattern (1px)
     */
    CHECKERS_1,
    /**
     * Checkers pattern (2px)
     */
    CHECKERS_2,
    /**
     * Checkers pattern (4px)
     */
    CHECKERS_4,
    /**
     * Checkers pattern (8px)
     */
    CHECKERS_8,
    /**
     * Circular pattern
     */
    CIRCULAR,
    /**
     * Alternate between black and white
     */
    BLINK,
    /**
     * SMPTE test pattern (75% color bars)
     */
    SMPTE75,
    /**
     * Zone plate
     */
    ZONE_PLATE,
    /**
     * Gamut checkers
     */
    GAMUT,
    /**
     * Chroma zone plate
     */
    CHROMA_ZONE_PLATE,
    /**
     * Solid color
     */
    SOLID_COLOR,
}
enum MarkerFlags {
    /**
     * Marker does not serve any special purpose.
     */
    NONE,
    /**
     * Marker can be a snapping target.
     */
    SNAPPABLE,
}
enum MetaFlag {
    /**
     * The metadata is readable
     */
    READABLE,
    /**
     * The metadata is writable
     */
    WRITABLE,
    /**
     * The metadata is readable and writable
     */
    READWRITE,
}
/**
 * The various modes a #GESPipeline can be configured to.
 * @bitfield 
 */
enum PipelineFlags {
    /**
     * Output the #GESPipeline:timeline's
     * audio to the soundcard
     */
    AUDIO_PREVIEW,
    /**
     * Output the #GESPipeline:timeline's
     * video to the screen
     */
    VIDEO_PREVIEW,
    /**
     * Output both the #GESPipeline:timeline's
     * audio and video to the soundcard and screen (default)
     */
    FULL_PREVIEW,
    /**
     * Render the #GESPipeline:timeline with
     * forced decoding (the underlying #encodebin has its
     * #encodebin:avoid-reencoding property set to %FALSE)
     */
    RENDER,
    /**
     * Render the #GESPipeline:timeline,
     * avoiding decoding/reencoding (the underlying #encodebin has its
     * #encodebin:avoid-reencoding property set to %TRUE).
     * > NOTE: Smart rendering can not work in tracks where #GESTrack:mixing
     * > is enabled.
     */
    SMART_RENDER,
}
/**
 * Types of content handled by a track. If the content is not one of
 * `GES_TRACK_TYPE_AUDIO,` `GES_TRACK_TYPE_VIDEO` or `GES_TRACK_TYPE_TEXT,`
 * the user of the #GESTrack must set the type to `GES_TRACK_TYPE_CUSTOM`.
 * 
 * `GES_TRACK_TYPE_UNKNOWN` is for internal purposes and should not be used
 * by users
 * @bitfield 
 */
enum TrackType {
    /**
     * A track of unknown type (i.e. invalid)
     */
    UNKNOWN,
    /**
     * An audio track
     */
    AUDIO,
    /**
     * A video track
     */
    VIDEO,
    /**
     * A text (subtitle) track
     */
    TEXT,
    /**
     * A custom-content track
     */
    CUSTOM,
}
/**
 * Constant to define an undefined frame number
 */
const FRAME_NUMBER_NONE: number
/**
 * The description of the object, to be used in various contexts (string).
 */
const META_DESCRIPTION: string
/**
 * The file extension of files produced by a #GESFormatter (string).
 */
const META_FORMATTER_EXTENSION: string
/**
 * The mimetype used for the file produced by a #GESFormatter (string).
 */
const META_FORMATTER_MIMETYPE: string
/**
 * The name of a formatter, used as the #GESAsset:id for #GESFormatter
 * assets (string).
 */
const META_FORMATTER_NAME: string
/**
 * The rank of a #GESFormatter (a #GstRank).
 */
const META_FORMATTER_RANK: string
/**
 * The version of a #GESFormatter (double).
 */
const META_FORMATTER_VERSION: string
/**
 * The version of the format in which a project is serialized (string).
 */
const META_FORMAT_VERSION: string
/**
 * The ARGB color of a #GESMarker (an AARRGGBB hex as a uint).
 */
const META_MARKER_COLOR: string
/**
 * The volume for a #GESTrack or a #GESLayer (float).
 */
const META_VOLUME: string
/**
 * The default volume for a #GESTrack or a #GESLayer as a float.
 */
const META_VOLUME_DEFAULT: number
const MULTI_FILE_URI_PREFIX: string
const PADDING: number
const PADDING_LARGE: number
/**
 * Layer priority when a timeline element is not in any layer.
 */
const TIMELINE_ELEMENT_NO_LAYER_PRIORITY: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_NANO: number
function addMissingUriRelocationUri(uri: string, recurse: boolean): boolean
/**
 * Clean up any resources created by GES in ges_init().
 * 
 * It is normally not needed to call this function in a normal application as the
 * resources will automatically be freed when the program terminates.
 * This function is therefore mostly used by testsuites and other memory profiling tools.
 * This function should be called from the thread where ges_init() was called.
 * 
 * After this call GES should not be used until another ges_init() call.
 */
function deinit(): void
function edgeName(edge: Edge): string
/**
 * Return a string representation of `mode`.
 * @param mode a #GESEditMode
 * @returns a string representation of @mode.
 */
function editModeName(mode: EditMode): string
/**
 * Get the best formatter for `uri`. It tries to find a formatter
 * compatible with `uri` extension, if none is found, it returns the default
 * formatter asset.
 * @param uri 
 * @returns The #GESAsset for the best formatter to save to @uri
 */
function findFormatterForUri(uri: string): Asset
/**
 * Initialize the GStreamer Editing Service. Call this before any usage of
 * GES. You should take care of initilizing GStreamer before calling this
 * function.
 * 
 * MT safety.
 * GStreamer Editing Services do not guarantee MT safety.
 * An application is required to use GES APIs (including ges_deinit())
 * in the thread where ges_init() was called.
 */
function init(): boolean
/**
 * Initializes the GStreamer Editing Services library, setting up internal path lists,
 * and loading evrything needed.
 * 
 * This function will return %FALSE if GES could not be initialized
 * for some reason.
 * @param argv pointer to application's argv
 * @returns %TRUE if GES could be initialized.
 */
function initCheck(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
/**
 * Use this function to check if GES has been initialized with ges_init()
 * or ges_init_check().
 * @returns %TRUE if initialization has been done, %FALSE otherwise.
 */
function isInitialized(): boolean
/**
 * List all the assets in the current cache whose
 * #GESAsset:extractable-type are of the given type (including
 * subclasses).
 * 
 * Note that, since only a #GESExtractable can be extracted from an asset,
 * using `GES_TYPE_EXTRACTABLE` as `filter` will return all the assets in
 * the current cache.
 * @param filter The type of object that can be extracted from the asset
 * @returns A list of all #GESAsset-s currently in the cache whose #GESAsset:extractable-type is of the @filter type.
 */
function listAssets(filter: GObject.GType): Asset[]
/**
 * Get the last buffer `playsink` showed
 * @param playsink The playsink to get last frame from
 * @param caps The caps defining the format the return value will have
 * @returns A #GstSample containing the last frame from @playsink in the format defined by the @caps
 */
function playSinkConvertFrame(playsink: Gst.Element, caps: Gst.Caps): Gst.Sample | null
function pspecEqual(keySpec1: any | null, keySpec2: any | null): boolean
function pspecHash(keySpec: any | null): number
function trackTypeName(type: TrackType): string
function validateRegisterActionTypes(): boolean
/**
 * Gets the version number of the GStreamer Editing Services library.
 */
function version(): [ /* major */ number, /* minor */ number, /* micro */ number, /* nano */ number ]
/**
 * A function for querying how an effect would translate a time if it had
 * the given child property values set. The keys for `time_properties` will
 * be the same string that was passed to
 * ges_base_effect_register_time_property(), the values will be #GValue*
 * values of the corresponding child properties. You should always use the
 * values given in `time_properties` before using the currently set values.
 * @callback 
 * @param effect The #GESBaseEffect that is doing the time translation
 * @param time The #GstClockTime to translation
 * @param timePropertyValues A table of child property name/value pairs
 * @returns The translated time.
 */
interface BaseEffectTimeTranslationFunc {
    (effect: BaseEffect, time: Gst.ClockTime, timePropertyValues: GLib.HashTable): Gst.ClockTime
}
/**
 * A method for creating the core #GESTrackElement of a clip, to be added
 * to a #GESTrack of the given track type.
 * 
 * If a clip may produce several track elements per track type,
 * #GESCreateTrackElementsFunc is more appropriate.
 * @callback 
 * @param clip A #GESClip
 * @param type A #GESTrackType to create a #GESTrackElement for
 * @returns The #GESTrackElement created by @clip, or %NULL if @clip can not provide a track element for the given @type or an error occurred.
 */
interface CreateTrackElementFunc {
    (clip: Clip, type: TrackType): TrackElement | null
}
/**
 * A method for creating the core #GESTrackElement-s of a clip, to be
 * added to #GESTrack-s of the given track type.
 * @callback 
 * @param clip A #GESClip
 * @param type A #GESTrackType to create #GESTrackElement-s for
 * @returns A list of the #GESTrackElement-s created by @clip for the given @type, or %NULL if no track elements are created or an error occurred.
 */
interface CreateTrackElementsFunc {
    (clip: Clip, type: TrackType): TrackElement[]
}
/**
 * Method for checking that an ID is valid for the given #GESExtractable
 * type. If the given ID is considered valid, it can be adjusted into some
 * standard and returned to prevent the creation of separate #GESAsset-s,
 * with different #GESAsset:id, that would otherwise act the same.
 * 
 * Returns (transfer full) (nullable): The actual #GESAsset:id to set on
 * any corresponding assets, based on `id,` or %NULL if `id` is not valid.
 * @callback 
 * @param type The #GESExtractable type to check `id` for
 * @param id The ID to check
 */
interface ExtractableCheckId {
    (type: GObject.GType, id: string): string | null
}
/**
 * A function that will be called when the nleobject of a corresponding
 * track element needs to be filled.
 * 
 * The implementer of this function shall add the proper #GstElement to `nleobj`
 * using gst_bin_add().
 * @callback 
 * @param clip The #GESClip controlling the track elements
 * @param trackElement The #GESTrackElement
 * @param nleobj The nleobject that needs to be filled
 * @returns %TRUE if the implementer successfully filled the @nleobj.
 */
interface FillTrackElementFunc {
    (clip: Clip, trackElement: TrackElement, nleobj: Gst.Element): boolean
}
interface FormatterCanLoadURIMethod {
    (dummyInstance: Formatter, uri: string): boolean
}
/**
 * Virtual method for loading a timeline from a given URI.
 * 
 * Every #GESFormatter subclass needs to implement this method.
 * @callback 
 * @param formatter a #GESFormatter
 * @param timeline a #GESTimeline
 * @param uri a #gchar * pointing to a URI
 * @returns TRUE if the timeline data was successfully loaded from the URI, else FALSE.
 */
interface FormatterLoadFromURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string): boolean
}
/**
 * Virtual method for saving a timeline to a uri.
 * 
 * Every #GESFormatter subclass needs to implement this method.
 * @callback 
 * @param formatter a #GESFormatter
 * @param timeline a #GESTimeline
 * @param uri a #gchar * pointing to a URI
 * @param overwrite %TRUE to overwrite file if it exists
 * @returns TRUE if the timeline data was successfully saved to the URI else FALSE.
 */
interface FormatterSaveToURIMethod {
    (formatter: Formatter, timeline: Timeline, uri: string, overwrite: boolean): boolean
}
/**
 * A method to be called on all of a meta container's fields.
 * @callback 
 * @param container A #GESMetaContainer
 * @param key The key for one of `container'`s fields
 * @param value The set value under `key`
 */
interface MetaForeachFunc {
    (container: MetaContainer, key: string, value: any): void
}
module Extractable {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Extractable extends GObject.InitiallyUnowned {

    // Own properties of GES-1.0.GES.Extractable

    __gtype__: number

    // Owm methods of GES-1.0.GES.Extractable

    /**
     * Get the asset that has been set on the extractable object.
     * @returns The asset set on @self, or %NULL if no asset has been set.
     */
    getAsset(): Asset | null
    // Has conflict: getId(): string | null
    // Has conflict: setAsset(asset: Asset): boolean

    // Own virtual methods of GES-1.0.GES.Extractable

    /**
     * Gets the #GESAsset:id of some associated asset. It may be the case
     * that the object has no set asset, or even that such an asset does not
     * yet exist in the GES cache. Instead, this will return the asset
     * #GESAsset:id that is _compatible_ with the current state of the object,
     * as determined by the #GESExtractable implementer. If it was indeed
     * extracted from an asset, this should return the same as its
     * corresponding asset #GESAsset:id.
     * @virtual 
     * @returns The #GESAsset:id of some associated #GESAsset that is compatible with @self's current state.
     */
    getId(): string | null
    setAsset(asset: Asset): void
    setAssetFull(asset: Asset): boolean

    // Class property signals of GES-1.0.GES.Extractable

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
 * A #GObject that implements the #GESExtractable interface can be
 * extracted from a #GESAsset using ges_asset_extract().
 * 
 * Each extractable type will have its own way of interpreting the
 * #GESAsset:id of an asset (or, if it is associated with a specific
 * subclass of #GESAsset, the asset subclass may handle the
 * interpretation of the #GESAsset:id). By default, the requested asset
 * #GESAsset:id will be ignored by a #GESExtractable and will be set to
 * the type name of the extractable instead. Also by default, when the
 * requested asset is extracted, the returned object will simply be a
 * newly created default object of that extractable type. You should check
 * the documentation for each extractable type to see if they differ from
 * the default.
 * 
 * After the object is extracted, it will have a reference to the asset it
 * came from, which you can retrieve using ges_extractable_get_asset().
 * @interface 
 */
class Extractable extends GObject.Object {

    // Own properties of GES-1.0.GES.Extractable

    static name: string

    // Constructors of GES-1.0.GES.Extractable

    constructor(config?: Extractable.ConstructorProperties) 
    _init(config?: Extractable.ConstructorProperties): void
}

module MetaContainer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `notify-meta`
     */
    interface NotifyMetaSignalCallback {
        (key: string | null, value: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MetaContainer {

    // Own properties of GES-1.0.GES.MetaContainer

    __gtype__: number

    // Owm methods of GES-1.0.GES.MetaContainer

    /**
     * Deserializes the given string, and adds and sets the found fields and
     * their values on the container. The string should be the return of
     * ges_meta_container_metas_to_string().
     * @param str A string to deserialize and add to `container`
     * @returns %TRUE if the fields in @str was successfully deserialized and added to @container.
     */
    addMetasFromString(str: string): boolean
    /**
     * Checks whether the specified field has been registered as static, and
     * gets the registered type and flags of the field, as used in
     * ges_meta_container_register_meta() and
     * ges_meta_container_register_static_meta().
     * @param metaItem The key for the `container` field to check
     * @returns %TRUE if the @meta_item field has been registered on @container.
     */
    checkMetaRegistered(metaItem: string): [ /* returnType */ boolean, /* flags */ MetaFlag, /* type */ GObject.GType ]
    /**
     * Calls the given function on each of the meta container's set metadata
     * fields.
     * @param func A function to call on each of `container'`s set metadata fields
     */
    foreach(func: MetaForeachFunc): void
    /**
     * Gets the current boolean value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the boolean value under @meta_item was copied to @dest.
     */
    getBoolean(metaItem: string): [ /* returnType */ boolean, /* dest */ boolean ]
    /**
     * Gets the current date value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the date value under @meta_item was copied to @dest.
     */
    getDate(metaItem: string): [ /* returnType */ boolean, /* dest */ GLib.Date ]
    /**
     * Gets the current date time value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the date time value under @meta_item was copied to @dest.
     */
    getDateTime(metaItem: string): [ /* returnType */ boolean, /* dest */ Gst.DateTime ]
    /**
     * Gets the current double value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the double value under @meta_item was copied to @dest.
     */
    getDouble(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Gets the current float value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the float value under @meta_item was copied to @dest.
     */
    getFloat(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Gets the current int value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the int value under @meta_item was copied to @dest.
     */
    getInt(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Gets the current int64 value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the int64 value under @meta_item was copied to @dest.
     */
    getInt64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Gets the current marker list value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param key The key for the `container` field to get
     * @returns A copy of the marker list value under @key, or %NULL if it could not be fetched.
     */
    getMarkerList(key: string): MarkerList | null
    /**
     * Gets the current value of the specified field of the meta container.
     * @param key The key for the `container` field to get
     * @returns The value under @key, or %NULL if @container does not have the field set.
     */
    getMeta(key: string): any | null
    /**
     * Gets the current string value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns The string value under @meta_item, or %NULL if it could not be fetched.
     */
    getString(metaItem: string): string | null
    /**
     * Gets the current uint value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the uint value under @meta_item was copied to @dest.
     */
    getUint(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Gets the current uint64 value of the specified field of the meta
     * container. If the field does not have a set value, or it is of the
     * wrong type, the method will fail.
     * @param metaItem The key for the `container` field to get
     * @returns %TRUE if the uint64 value under @meta_item was copied to @dest.
     */
    getUint64(metaItem: string): [ /* returnType */ boolean, /* dest */ number ]
    /**
     * Serializes the set metadata fields of the meta container to a string.
     * @returns A serialized @container.
     */
    metasToString(): string | null
    /**
     * Sets the value of the specified field of the meta container to the
     * given value, and registers the field to only hold a value of the
     * same type. After calling this, only values of the same type as `value`
     * can be set for this field. The given flags can be set to make this
     * field only readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold @value types, with the given @flags, and the field was successfully set to @value.
     */
    registerMeta(flags: MetaFlag, metaItem: string, value: any): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given boolean value, and registers the field to only hold a boolean
     * typed value. After calling this, only boolean values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold boolean typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaBoolean(flags: MetaFlag, metaItem: string, value: boolean): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given date value, and registers the field to only hold a date
     * typed value. After calling this, only date values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold date typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaDate(flags: MetaFlag, metaItem: string, value: GLib.Date): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given date time value, and registers the field to only hold a date time
     * typed value. After calling this, only date time values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold date time typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaDateTime(flags: MetaFlag, metaItem: string, value: Gst.DateTime): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given double value, and registers the field to only hold a double
     * typed value. After calling this, only double values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold double typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaDouble(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given float value, and registers the field to only hold a float
     * typed value. After calling this, only float values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold float typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaFloat(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given int value, and registers the field to only hold an int
     * typed value. After calling this, only int values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold int typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaInt(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given int64 value, and registers the field to only hold an int64
     * typed value. After calling this, only int64 values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold int64 typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaInt64(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given string value, and registers the field to only hold a string
     * typed value. After calling this, only string values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold string typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaString(flags: MetaFlag, metaItem: string, value: string): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given uint value, and registers the field to only hold a uint
     * typed value. After calling this, only uint values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold uint typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaUint(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given uint64 value, and registers the field to only hold a uint64
     * typed value. After calling this, only uint64 values can be set for
     * this field. The given flags can be set to make this field only
     * readable after calling this method.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param value The value to set for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold uint64 typed values, with the given @flags, and the field was successfully set to @value.
     */
    registerMetaUint64(flags: MetaFlag, metaItem: string, value: number): boolean
    /**
     * Registers a static metadata field on the container to only hold the
     * specified type. After calling this, setting a value under this field
     * can only succeed if its type matches the registered type of the field.
     * 
     * Unlike ges_meta_container_register_meta(), no (initial) value is set
     * for this field, which means you can use this method to reserve the
     * space to be _optionally_ set later.
     * 
     * Note that if a value has already been set for the field being
     * registered, then its type must match the registering type, and its
     * value will be left in place. If the field has no set value, then
     * you will likely want to include #GES_META_WRITABLE in `flags` to allow
     * the value to be set later.
     * @param flags Flags to be used for the registered field
     * @param metaItem The key for the `container` field to register
     * @param type The required value type for the registered field
     * @returns %TRUE if the @meta_item field was successfully registered on @container to only hold @type values, with the given @flags.
     */
    registerStaticMeta(flags: MetaFlag, metaItem: string, type: GObject.GType): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given boolean value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setBoolean(metaItem: string, value: boolean): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given date value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setDate(metaItem: string, value: GLib.Date): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given date time value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setDateTime(metaItem: string, value: Gst.DateTime): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given double value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setDouble(metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given float value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setFloat(metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given int value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setInt(metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given int64 value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setInt64(metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given marker list value.
     * @param metaItem The key for the `container` field to set
     * @param list The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setMarkerList(metaItem: string, list: MarkerList): boolean
    /**
     * Sets the value of the specified field of the meta container to a
     * copy of the given value. If the given `value` is %NULL, the field
     * given by `meta_item` is removed and %TRUE is returned.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item,` or %NULL to remove the corresponding field
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setMeta(metaItem: string, value: any | null): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given string value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setString(metaItem: string, value: string): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given uint value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setUint(metaItem: string, value: number): boolean
    /**
     * Sets the value of the specified field of the meta container to the
     * given uint64 value.
     * @param metaItem The key for the `container` field to set
     * @param value The value to set under `meta_item`
     * @returns %TRUE if @value was set under @meta_item for @container.
     */
    setUint64(metaItem: string, value: number): boolean

    // Own signals of GES-1.0.GES.MetaContainer

    connect(sigName: "notify-meta", callback: MetaContainer.NotifyMetaSignalCallback): number
    on(sigName: "notify-meta", callback: MetaContainer.NotifyMetaSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify-meta", callback: MetaContainer.NotifyMetaSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify-meta", callback: MetaContainer.NotifyMetaSignalCallback): NodeJS.EventEmitter
    emit(sigName: "notify-meta", value: any | null, ...args: any[]): void

    // Class property signals of GES-1.0.GES.MetaContainer

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
 * A #GObject that implements #GESMetaContainer can have metadata set on
 * it, that is data that is unimportant to its function within GES, but
 * may hold some useful information. In particular,
 * ges_meta_container_set_meta() can be used to store any #GValue under
 * any generic field (specified by a string key). The same method can also
 * be used to remove the field by passing %NULL. A number of convenience
 * methods are also provided to make it easier to set common value types.
 * The metadata can then be read with ges_meta_container_get_meta() and
 * similar convenience methods.
 * 
 * ## Registered Fields
 * 
 * By default, any #GValue can be set for a metadata field. However, you
 * can register some fields as static, that is they only allow values of a
 * specific type to be set under them, using
 * ges_meta_container_register_meta() or
 * ges_meta_container_register_static_meta(). The set #GESMetaFlag will
 * determine whether the value can be changed, but even if it can be
 * changed, it must be changed to a value of the same type.
 * 
 * Internally, some GES objects will be initialized with static metadata
 * fields. These will correspond to some standard keys, such as
 * #GES_META_VOLUME.
 * @interface 
 */
class MetaContainer extends GObject.Object {

    // Own properties of GES-1.0.GES.MetaContainer

    static name: string

    // Constructors of GES-1.0.GES.MetaContainer

    constructor(config?: MetaContainer.ConstructorProperties) 
    _init(config?: MetaContainer.ConstructorProperties): void
}

module Asset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Asset

        /**
         * The #GESExtractable object type that can be extracted from the asset.
         */
        extractable_type?: GObject.GType | null
        /**
         * The ID of the asset. This should be unique amongst all assets with
         * the same #GESAsset:extractable-type. Depending on the associated
         * #GESExtractable implementation, this id may convey some information
         * about the #GObject that should be extracted. Note that, as such, the
         * ID will have an expected format, and you can not choose this value
         * arbitrarily. By default, this will be set to the type name of the
         * #GESAsset:extractable-type, but you should check the documentation
         * of the extractable type to see whether they differ from the
         * default behaviour.
         */
        id?: string | null
        /**
         * The default proxy for this asset, or %NULL if it has no proxy. A
         * proxy will act as a substitute for the original asset when the
         * original is requested (see ges_asset_request()).
         * 
         * Setting this property will not usually remove the existing proxy, but
         * will replace it as the default (see ges_asset_set_proxy()).
         */
        proxy?: Asset | null
    }

}

interface Asset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.Asset

    /**
     * The #GESExtractable object type that can be extracted from the asset.
     */
    readonly extractableType: GObject.GType
    /**
     * The ID of the asset. This should be unique amongst all assets with
     * the same #GESAsset:extractable-type. Depending on the associated
     * #GESExtractable implementation, this id may convey some information
     * about the #GObject that should be extracted. Note that, as such, the
     * ID will have an expected format, and you can not choose this value
     * arbitrarily. By default, this will be set to the type name of the
     * #GESAsset:extractable-type, but you should check the documentation
     * of the extractable type to see whether they differ from the
     * default behaviour.
     */
    readonly id: string | null
    /**
     * The default proxy for this asset, or %NULL if it has no proxy. A
     * proxy will act as a substitute for the original asset when the
     * original is requested (see ges_asset_request()).
     * 
     * Setting this property will not usually remove the existing proxy, but
     * will replace it as the default (see ges_asset_set_proxy()).
     */
    proxy: Asset
    /**
     * The asset that this asset is a proxy for, or %NULL if it is not a
     * proxy for another asset.
     * 
     * Note that even if this asset is acting as a proxy for another asset,
     * but this asset is not the default #GESAsset:proxy, then `proxy-target`
     * will *still* point to this other asset. So you should check the
     * #GESAsset:proxy property of `target-proxy` before assuming it is the
     * current default proxy for the target.
     * 
     * Note that the #GObject::notify for this property is emitted after
     * the #GESAsset:proxy #GObject::notify for the corresponding (if any)
     * asset it is now the proxy of/no longer the proxy of.
     */
    readonly proxyTarget: Asset
    __gtype__: number

    // Own fields of GES-1.0.GES.Asset

    parent: GObject.Object

    // Owm methods of GES-1.0.GES.Asset

    // Has conflict: extract(): Extractable
    /**
     * Retrieve the error that was set on the asset when it was loaded.
     * @returns The error set on @asset, or %NULL if no error occurred when @asset was loaded.
     */
    getError(): GLib.Error | null
    /**
     * Gets the #GESAsset:extractable-type of the asset.
     * @returns The extractable type of @self.
     */
    getExtractableType(): GObject.GType
    /**
     * Gets the #GESAsset:id of the asset.
     * @returns The ID of @self.
     */
    getId(): string
    /**
     * Gets the default #GESAsset:proxy of the asset.
     * @returns The default proxy of @asset.
     */
    getProxy(): Asset | null
    /**
     * Gets the #GESAsset:proxy-target of the asset.
     * 
     * Note that the proxy target may have loaded with an error, so you should
     * call ges_asset_get_error() on the returned target.
     * @returns The asset that @proxy is a proxy of.
     */
    getProxyTarget(): Asset | null
    /**
     * Get all the proxies that the asset has. The first item of the list will
     * be the default #GESAsset:proxy. The second will be the proxy that is
     * 'next in line' to be default, and so on.
     * @returns The list of proxies that @asset has.
     */
    listProxies(): Asset[]
    /**
     * Sets the #GESAsset:proxy for the asset.
     * 
     * If `proxy` is among the existing proxies of the asset (see
     * ges_asset_list_proxies()) it will be moved to become the default
     * proxy. Otherwise, if `proxy` is not %NULL, it will be added to the list
     * of proxies, as the new default. The previous default proxy will become
     * 'next in line' for if the new one is removed, and so on. As such, this
     * will **not** actually remove the previous default proxy (use
     * ges_asset_unproxy() for that).
     * 
     * Note that an asset can only act as a proxy for one other asset.
     * 
     * As a special case, if `proxy` is %NULL, then this method will actually
     * remove **all** proxies from the asset.
     * @param proxy A new default proxy for `asset`
     * @returns %TRUE if @proxy was successfully set as the default for @asset.
     */
    setProxy(proxy: Asset | null): boolean
    /**
     * Removes the proxy from the available list of proxies for the asset. If
     * the given proxy is the default proxy of the list, then the next proxy
     * in the available list (see ges_asset_list_proxies()) will become the
     * default. If there are no other proxies, then the asset will no longer
     * have a default #GESAsset:proxy.
     * @param proxy An existing proxy of `asset`
     * @returns %TRUE if @proxy was successfully removed from @asset's proxy list.
     */
    unproxy(proxy: Asset): boolean

    // Own virtual methods of GES-1.0.GES.Asset

    /**
     * Extracts a new #GESAsset:extractable-type object from the asset. The
     * #GESAsset:id of the asset may determine the properties and state of the
     * newly created object.
     * @virtual 
     * @returns A newly created object, or %NULL if an error occurred.
     */
    extract(): Extractable
    informProxy(proxyId: string): void
    proxied(proxy: Asset): void
    requestIdUpdate(proposedNewId: string | null, error: GLib.Error): boolean
    startLoading(): AssetLoadingReturn

    // Class property signals of GES-1.0.GES.Asset

    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
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
 * A #GESAsset in the GStreamer Editing Services represents a resources
 * that can be used. In particular, any class that implements the
 * #GESExtractable interface may have some associated assets with a
 * corresponding #GESAsset:extractable-type, from which its objects can be
 * extracted using ges_asset_extract(). Some examples would be
 * #GESClip, #GESFormatter and #GESTrackElement.
 * 
 * All assets that are created within GES are stored in a cache; one per
 * each #GESAsset:id and #GESAsset:extractable-type pair. These assets can
 * be fetched, and initialized if they do not yet exist in the cache,
 * using ges_asset_request().
 * 
 * ``` c
 * GESAsset *effect_asset;
 * GESEffect *effect;
 * 
 * // You create an asset for an effect
 * effect_asset = ges_asset_request (GES_TYPE_EFFECT, "agingtv", NULL);
 * 
 * // And now you can extract an instance of GESEffect from that asset
 * effect = GES_EFFECT (ges_asset_extract (effect_asset));
 * 
 * ```
 * 
 * The advantage of using assets, rather than simply creating the object
 * directly, is that the currently loaded resources can be listed with
 * ges_list_assets() and displayed to an end user. For example, to show
 * which media files have been loaded, and a standard list of effects. In
 * fact, the GES library already creates assets for #GESTransitionClip and
 * #GESFormatter, which you can use to list all the available transition
 * types and supported formats.
 * 
 * The other advantage is that #GESAsset implements #GESMetaContainer, so
 * metadata can be set on the asset, with some subclasses automatically
 * creating this metadata on initiation.
 * 
 * For example, to display information about the supported formats, you
 * could do the following:
 * 
 * ```
 *    GList *formatter_assets, *tmp;
 * 
 *    //  List all  the transitions
 *    formatter_assets = ges_list_assets (GES_TYPE_FORMATTER);
 * 
 *    // Print some infos about the formatter GESAsset
 *    for (tmp = formatter_assets; tmp; tmp = tmp->next) {
 *      gst_print ("Name of the formatter: %s, file extension it produces: %s",
 *        ges_meta_container_get_string (
 *          GES_META_CONTAINER (tmp->data), GES_META_FORMATTER_NAME),
 *        ges_meta_container_get_string (
 *          GES_META_CONTAINER (tmp->data), GES_META_FORMATTER_EXTENSION));
 *    }
 * 
 *    g_list_free (transition_assets);
 * 
 * ```
 * 
 * 
 * ## ID
 * 
 * Each asset is uniquely defined in the cache by its
 * #GESAsset:extractable-type and #GESAsset:id. Depending on the
 * #GESAsset:extractable-type, the #GESAsset:id can be used to parametrise
 * the creation of the object upon extraction. By default, a class that
 * implements #GESExtractable will only have a single associated asset,
 * with an #GESAsset:id set to the type name of its objects. However, this
 * is overwritten by some implementations, which allow a class to have
 * multiple associated assets. For example, for #GESTransitionClip the
 * #GESAsset:id will be a nickname of the #GESTransitionClip:vtype. You
 * should check the documentation for each extractable type to see if they
 * differ from the default.
 * 
 * Moreover, each #GESAsset:extractable-type may also associate itself
 * with a specific asset subclass. In such cases, when their asset is
 * requested, an asset of this subclass will be returned instead.
 * 
 * ## Managing
 * 
 * You can use a #GESProject to easily manage the assets of a
 * #GESTimeline.
 * 
 * ## Proxies
 * 
 * Some assets can (temporarily) act as the #GESAsset:proxy of another
 * asset. When the original asset is requested from the cache, the proxy
 * will be returned in its place. This can be useful if, say, you want
 * to substitute a #GESUriClipAsset corresponding to a high resolution
 * media file with the asset of a lower resolution stand in.
 * 
 * An asset may even have several proxies, the first of which will act as
 * its default and be returned on requests, but the others will be ordered
 * to take its place once it is removed. You can add a proxy to an asset,
 * or set its default, using ges_asset_set_proxy(), and you can remove
 * them with ges_asset_unproxy().
 * @class 
 */
class Asset extends GObject.Object {

    // Own properties of GES-1.0.GES.Asset

    static name: string

    // Constructors of GES-1.0.GES.Asset

    constructor(config?: Asset.ConstructorProperties) 
    _init(config?: Asset.ConstructorProperties): void
    /**
     * Indicate that an existing #GESAsset in the cache should be reloaded
     * upon the next request. This can be used when some condition has
     * changed, which may require that an existing asset should be updated.
     * For example, if an external resource has changed or now become
     * available.
     * 
     * Note, the asset is not immediately changed, but will only actually
     * reload on the next call to ges_asset_request() or
     * ges_asset_request_async().
     * @param extractableType The #GESAsset:extractable-type of the asset that needs reloading
     * @param id The #GESAsset:id of the asset asset that needs reloading
     * @returns %TRUE if the specified asset exists in the cache and could be marked for reloading.
     */
    static needsReload(extractableType: GObject.GType, id: string | null): boolean
    /**
     * Returns an asset with the given properties. If such an asset already
     * exists in the cache (it has been previously created in GES), then a
     * reference to the existing asset is returned. Otherwise, a newly created
     * asset is returned, and also added to the cache.
     * 
     * If the requested asset has been loaded with an error, then `error` is
     * set, if given, and %NULL will be returned instead.
     * 
     * Note that the given `id` may not be exactly the #GESAsset:id that is
     * set on the returned asset. For instance, it may be adjusted into a
     * standard format. Or, if a #GESExtractable type does not have its
     * extraction parametrised, as is the case by default, then the given `id`
     * may be ignored entirely and the #GESAsset:id set to some standard, in
     * which case a %NULL `id` can be given.
     * 
     * Similarly, the given `extractable_type` may not be exactly the
     * #GESAsset:extractable-type that is set on the returned asset. Instead,
     * the actual extractable type may correspond to a subclass of the given
     * `extractable_type,` depending on the given `id`.
     * 
     * Moreover, depending on the given `extractable_type,` the returned asset
     * may belong to a subclass of #GESAsset.
     * 
     * Finally, if the requested asset has a #GESAsset:proxy, then the proxy
     * that is found at the end of the chain of proxies is returned (a proxy's
     * proxy will take its place, and so on, unless it has no proxy).
     * 
     * Some asset subclasses only support asynchronous construction of its
     * assets, such as #GESUriClip. For such assets this method will fail, and
     * you should use ges_asset_request_async() instead. In the case of
     * #GESUriClip, you can use ges_uri_clip_asset_request_sync() if you only
     * want to wait for the request to finish.
     * @param extractableType The #GESAsset:extractable-type of the asset
     * @param id The #GESAsset:id of the asset
     * @returns A reference to the requested asset, or %NULL if an error occurred.
     */
    static request(extractableType: GObject.GType, id: string | null): Asset | null
    /**
     * Requests an asset with the given properties asynchronously (see
     * ges_asset_request()). When the asset has been initialized or fetched
     * from the cache, the given callback function will be called. The
     * asset can then be retrieved in the callback using the
     * ges_asset_request_finish() method on the given #GAsyncResult.
     * 
     * Note that the source object passed to the callback will be the
     * #GESAsset corresponding to the request, but it may not have loaded
     * correctly and therefore can not be used as is. Instead,
     * ges_asset_request_finish() should be used to fetch a usable asset, or
     * indicate that an error occurred in the asset's creation.
     * 
     * Note that the callback will be called in the #GMainLoop running under
     * the same #GMainContext that ges_init() was called in. So, if you wish
     * the callback to be invoked outside the default #GMainContext, you can
     * call g_main_context_push_thread_default() in a new thread before
     * calling ges_init().
     * 
     * Example of an asynchronous asset request:
     * ``` c
     * // The request callback
     * static void
     * asset_loaded_cb (GESAsset * source, GAsyncResult * res, gpointer user_data)
     * {
     *   GESAsset *asset;
     *   GError *error = NULL;
     * 
     *   asset = ges_asset_request_finish (res, &error);
     *   if (asset) {
     *    gst_print ("The file: %s is usable as a GESUriClip",
     *        ges_asset_get_id (asset));
     *   } else {
     *    gst_print ("The file: %s is *not* usable as a GESUriClip because: %s",
     *        ges_asset_get_id (source), error->message);
     *   }
     * 
     *   gst_object_unref (asset);
     * }
     * 
     * // The request:
     * ges_asset_request_async (GES_TYPE_URI_CLIP, some_uri, NULL,
     *    (GAsyncReadyCallback) asset_loaded_cb, user_data);
     * ```
     * @param extractableType The #GESAsset:extractable-type of the asset
     * @param id The #GESAsset:id of the asset
     * @param cancellable An object to allow cancellation of the asset request, or %NULL to ignore
     * @param callback A function to call when the initialization is finished
     */
    static requestAsync(extractableType: GObject.GType, id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Fetches an asset requested by ges_asset_request_async(), which
     * finalises the request.
     * @param res The task result to fetch the asset from
     * @returns The requested asset, or %NULL if an error occurred.
     */
    static requestFinish(res: Gio.AsyncResult): Asset
}

module AudioSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Source.ConstructorProperties {
    }

}

interface AudioSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.AudioSource

    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.AudioSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * ## Children Properties
 * 
 * You can use the following children properties through the
 * #ges_track_element_set_child_property and alike set of methods:
 * 
 * - #gdouble `volume`: volume factor, 1.0=100%.
 * - #gboolean `mute`: mute channel.
 * @class 
 */
class AudioSource extends Source {

    // Own properties of GES-1.0.GES.AudioSource

    static name: string

    // Constructors of GES-1.0.GES.AudioSource

    constructor(config?: AudioSource.ConstructorProperties) 
    _init(config?: AudioSource.ConstructorProperties): void
}

module AudioTestSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, AudioSource.ConstructorProperties {
    }

}

interface AudioTestSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.AudioTestSource

    __gtype__: number

    // Own fields of GES-1.0.GES.AudioTestSource

    parent: AudioSource & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.AudioTestSource

    /**
     * Get the current frequency of `self`.
     * @returns The current frequency of @self.
     */
    getFreq(): number
    /**
     * Get the current volume of `self`.
     * @returns The current volume of @self
     */
    getVolume(): number
    /**
     * Lets you set the frequency applied on the track element
     * @param freq The frequency you want to apply on `self`
     */
    setFreq(freq: number): void
    /**
     * Sets the volume of the test audio signal.
     * @param volume The volume you want to apply on `self`
     */
    setVolume(volume: number): void

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.AudioTestSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Outputs a test audio stream using audiotestsrc. The default property values
 * output silence. Useful for testing pipelines, or to fill gaps in an audio
 * track.
 * @class 
 */
class AudioTestSource extends AudioSource {

    // Own properties of GES-1.0.GES.AudioTestSource

    static name: string

    // Constructors of GES-1.0.GES.AudioTestSource

    constructor(config?: AudioTestSource.ConstructorProperties) 
    _init(config?: AudioTestSource.ConstructorProperties): void
}

module AudioTrack {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gst.ChildProxy.ConstructorProperties, Track.ConstructorProperties {
    }

}

interface AudioTrack extends MetaContainer, Gst.ChildProxy {

    // Own properties of GES-1.0.GES.AudioTrack

    __gtype__: number

    // Conflicting properties

    parent: Gst.Bin & Gst.Object & Gst.Object
    object: any

    // Own fields of GES-1.0.GES.AudioTrack

    parentInstance: Track

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * See ges_track_add_element(), which also gives an error.
     * @param object The element to add
     * @returns %TRUE if @object was successfully added to @track.
     */
    addElement(object: TrackElement): boolean

    // Overloads of addElement

    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     * @returns %TRUE if the @element was added
     */
    addElement(element: Gst.Element): boolean
    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     * @returns %TRUE if the @element was added
     */
    addElement(element: Gst.Element): boolean
    /**
     * See ges_track_remove_element_full(), which also returns an error.
     * @param object The element to remove
     * @returns %TRUE if @object was successfully removed from @track.
     */
    removeElement(object: TrackElement): boolean

    // Overloads of removeElement

    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     * @returns %TRUE if the @element was removed
     */
    removeElement(element: Gst.Element): boolean
    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     * @returns %TRUE if the @element was removed
     */
    removeElement(element: Gst.Element): boolean

    // Class property signals of GES-1.0.GES.AudioTrack

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::mixing", callback: (...args: any[]) => void): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mixing", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESAudioTrack is a default audio #GESTrack, with a
 * #GES_TRACK_TYPE_AUDIO #GESTrack:track-type and "audio/x-raw(ANY)"
 * #GESTrack:caps.
 * 
 * By default, an audio track will have its #GESTrack:restriction-caps
 * set to "audio/x-raw" with the following properties:
 * 
 * - format: "S32LE"
 * - channels: 2
 * - rate: 44100
 * - layout: "interleaved"
 * 
 * These fields are needed for negotiation purposes, but you can change
 * their values if you wish. It is advised that you do so using
 * ges_track_update_restriction_caps() with new values for the fields you
 * wish to change, and any additional fields you may want to add. Unlike
 * using ges_track_set_restriction_caps(), this will ensure that these
 * default fields will at least have some value set.
 * @class 
 */
class AudioTrack extends Track {

    // Own properties of GES-1.0.GES.AudioTrack

    static name: string

    // Constructors of GES-1.0.GES.AudioTrack

    constructor(config?: AudioTrack.ConstructorProperties) 
    /**
     * Creates a new audio track, with a #GES_TRACK_TYPE_AUDIO
     * #GESTrack:track-type, "audio/x-raw(ANY)" #GESTrack:caps, and
     * "audio/x-raw" #GESTrack:restriction-caps with the properties:
     * 
     * - format: "S32LE"
     * - channels: 2
     * - rate: 44100
     * - layout: "interleaved"
     * 
     * You should use ges_track_update_restriction_caps() if you wish to
     * modify these fields, or add additional ones.
     * @constructor 
     * @returns The newly created audio track.
     */
    constructor() 
    /**
     * Creates a new audio track, with a #GES_TRACK_TYPE_AUDIO
     * #GESTrack:track-type, "audio/x-raw(ANY)" #GESTrack:caps, and
     * "audio/x-raw" #GESTrack:restriction-caps with the properties:
     * 
     * - format: "S32LE"
     * - channels: 2
     * - rate: 44100
     * - layout: "interleaved"
     * 
     * You should use ges_track_update_restriction_caps() if you wish to
     * modify these fields, or add additional ones.
     * @constructor 
     * @returns The newly created audio track.
     */
    static new(): AudioTrack

    // Overloads of new

    /**
     * Creates a new track with the given track-type and caps.
     * 
     * If `type` is #GES_TRACK_TYPE_VIDEO, and `caps` is a subset of
     * "video/x-raw(ANY)", then a #GESVideoTrack is created. This will
     * automatically choose a gap creation method suitable for video data. You
     * will likely want to set #GESTrack:restriction-caps separately. You may
     * prefer to use the ges_video_track_new() method instead.
     * 
     * If `type` is #GES_TRACK_TYPE_AUDIO, and `caps` is a subset of
     * "audio/x-raw(ANY)", then a #GESAudioTrack is created. This will
     * automatically choose a gap creation method suitable for audio data, and
     * will set the #GESTrack:restriction-caps to the default for
     * #GESAudioTrack. You may prefer to use the ges_audio_track_new() method
     * instead.
     * 
     * Otherwise, a plain #GESTrack is returned. You will likely want to set
     * the #GESTrack:restriction-caps and call
     * ges_track_set_create_element_for_gap_func() on the returned track.
     * @constructor 
     * @param type The #GESTrack:track-type for the track
     * @param caps The #GESTrack:caps for the track
     * @returns A new track.
     */
    static new(type: TrackType, caps: Gst.Caps): Track
    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     * @returns a new #GstBin
     */
    static new(name: string | null): Gst.Bin
    _init(config?: AudioTrack.ConstructorProperties): void
}

module AudioTransition {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Transition.ConstructorProperties {
    }

}

interface AudioTransition extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.AudioTransition

    __gtype__: number

    // Own fields of GES-1.0.GES.AudioTransition

    parent: Transition & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.AudioTransition

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AudioTransition extends Transition {

    // Own properties of GES-1.0.GES.AudioTransition

    static name: string

    // Constructors of GES-1.0.GES.AudioTransition

    constructor(config?: AudioTransition.ConstructorProperties) 
    /**
     * Creates a new #GESAudioTransition.
     * @constructor 
     * @returns The newly created #GESAudioTransition.
     */
    constructor() 
    /**
     * Creates a new #GESAudioTransition.
     * @constructor 
     * @returns The newly created #GESAudioTransition.
     */
    static new(): AudioTransition
    _init(config?: AudioTransition.ConstructorProperties): void
}

module AudioUriSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, AudioSource.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.AudioUriSource

        /**
         * The location of the file/resource to use.
         */
        uri?: string | null
    }

}

interface AudioUriSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.AudioUriSource

    /**
     * The location of the file/resource to use.
     */
    readonly uri: string | null
    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.AudioUriSource

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * ### Children Properties
 * 
 *  {{ libs/GESVideoUriSource-children-props.md }}
 * @class 
 */
class AudioUriSource extends AudioSource {

    // Own properties of GES-1.0.GES.AudioUriSource

    static name: string

    // Constructors of GES-1.0.GES.AudioUriSource

    constructor(config?: AudioUriSource.ConstructorProperties) 
    _init(config?: AudioUriSource.ConstructorProperties): void
}

module BaseEffect {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Operation.ConstructorProperties {
    }

}

interface BaseEffect extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.BaseEffect

    __gtype__: number

    // Owm methods of GES-1.0.GES.BaseEffect

    /**
     * Get whether the effect is considered a time effect or not. An effect
     * with registered time properties or set translation functions is
     * considered a time effect.
     * @returns %TRUE if @effect is considered a time effect.
     */
    isTimeEffect(): boolean
    /**
     * Register a child property of the effect as a property that, when set,
     * can change the timing of its input data. The child property should be
     * specified as in ges_timeline_element_lookup_child().
     * 
     * You should also set the corresponding time translation using
     * ges_base_effect_set_time_translation_funcs().
     * 
     * Note that `effect` must not be part of a clip, nor can it have
     * #GESTrackElement:has-internal-source set to %TRUE.
     * @param childPropertyName The name of the child property to register as a time property
     * @returns %TRUE if the child property was found and newly registered.
     */
    registerTimeProperty(childPropertyName: string): boolean
    /**
     * Set the time translation query functions for the time effect. If an
     * effect is a time effect, it will have two sets of coordinates: one
     * at its sink and one at its source. The given functions should be able
     * to translate between these two sets of coordinates. More specifically,
     * `source_to_sink_func` should *emulate* how the corresponding #GstElement
     * would translate the #GstSegment `time` field, and `sink_to_source_func`
     * should emulate how the corresponding #GstElement would translate the
     * seek query `start` and `stop` values, as used in gst_element_seek(). As
     * such, `sink_to_source_func` should act as an approximate reverse of
     * `source_to_sink_func`.
     * 
     * Note, these functions will be passed a table of time properties, as
     * registered in ges_base_effect_register_time_property(), and their
     * values. The functions should emulate what the translation *would* be
     * *if* the time properties were set to the given values. They should not
     * use the currently set values.
     * 
     * Note that `effect` must not be part of a clip, nor can it have
     * #GESTrackElement:has-internal-source set to %TRUE.
     * @param sourceToSinkFunc The function to use for querying how a time is translated from the source coordinates to the sink coordinates of `effect`
     * @param sinkToSourceFunc The function to use for querying how a time is translated from the sink coordinates to the source coordinates of `effect`
     * @returns %TRUE if the translation functions were set.
     */
    setTimeTranslationFuncs(sourceToSinkFunc: BaseEffectTimeTranslationFunc | null, sinkToSourceFunc: BaseEffectTimeTranslationFunc | null): boolean

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.BaseEffect

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESBaseEffect is some operation that applies an effect to the data
 * it receives.
 * 
 * ## Time Effects
 * 
 * Some operations will change the timing of the stream data they receive
 * in some way. In particular, the #GstElement that they wrap could alter
 * the times of the segment they receive in a #GST_EVENT_SEGMENT event,
 * or the times of a seek they receive in a #GST_EVENT_SEEK event. Such
 * operations would be considered time effects since they translate the
 * times they receive on their source to different times at their sink,
 * and vis versa. This introduces two sets of time coordinates for the
 * event: (internal) sink coordinates and (internal) source coordinates,
 * where segment times are translated from the sink coordinates to the
 * source coordinates, and seek times are translated from the source
 * coordinates to the sink coordinates.
 * 
 * If you use such an effect in GES, you will need to inform GES of the
 * properties that control the timing with
 * ges_base_effect_register_time_property(), and the effect's timing
 * behaviour using ges_base_effect_set_time_translation_funcs().
 * 
 * Note that a time effect should not have its
 * #GESTrackElement:has-internal-source set to %TRUE.
 * 
 * In addition, note that GES only *fully* supports time effects whose
 * mapping from the source to sink coordinates (those applied to seeks)
 * obeys:
 * 
 * + Maps the time `0` to `0`. So initial time-shifting effects are
 *   excluded.
 * + Is monotonically increasing. So reversing effects, and effects that
 *   jump backwards in the stream are excluded.
 * + Can handle a reasonable #GstClockTime, relative to the project. So
 *   this would exclude a time effect with an extremely large speed-up
 *   that would cause the converted #GstClockTime seeks to overflow.
 * + Is 'continuously reversible'. This essentially means that for every
 *   time in the sink coordinates, we can, to 'good enough' accuracy,
 *   calculate the corresponding time in the source coordinates. Moreover,
 *   this should correspond to how segment times are translated from
 *   sink to source.
 * + Only depends on the registered time properties, rather than the
 *   state of the #GstElement or the data it receives. This would exclude,
 *   say, an effect that would speedup if there is more red in the image
 *   it receives.
 * 
 * Note that a constant-rate-change effect that is not extremely fast or
 * slow would satisfy these conditions. For such effects, you may wish to
 * use ges_effect_class_register_rate_property().
 * @class 
 */
class BaseEffect extends Operation {

    // Own properties of GES-1.0.GES.BaseEffect

    static name: string

    // Constructors of GES-1.0.GES.BaseEffect

    constructor(config?: BaseEffect.ConstructorProperties) 
    _init(config?: BaseEffect.ConstructorProperties): void
}

module BaseEffectClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, OperationClip.ConstructorProperties {
    }

}

interface BaseEffectClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.BaseEffectClip

    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.BaseEffectClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GESBaseEffectClip-s are clips whose core elements are
 * #GESBaseEffect-s.
 * 
 * ## Effects
 * 
 * #GESBaseEffectClip-s can have **additional** #GESBaseEffect-s added as
 * non-core elements. These additional effects are applied to the output
 * of the core effects of the clip that they share a #GESTrack with. See
 * #GESClip for how to add and move these effects from the clip.
 * 
 * Note that you cannot add time effects to #GESBaseEffectClip, neither
 * as core children, nor as additional effects.
 * @class 
 */
class BaseEffectClip extends OperationClip {

    // Own properties of GES-1.0.GES.BaseEffectClip

    static name: string

    // Constructors of GES-1.0.GES.BaseEffectClip

    constructor(config?: BaseEffectClip.ConstructorProperties) 
    _init(config?: BaseEffectClip.ConstructorProperties): void
}

module BaseTransitionClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, OperationClip.ConstructorProperties {
    }

}

interface BaseTransitionClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.BaseTransitionClip

    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.BaseTransitionClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BaseTransitionClip extends OperationClip {

    // Own properties of GES-1.0.GES.BaseTransitionClip

    static name: string

    // Constructors of GES-1.0.GES.BaseTransitionClip

    constructor(config?: BaseTransitionClip.ConstructorProperties) 
    _init(config?: BaseTransitionClip.ConstructorProperties): void
}

module BaseXmlFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, Formatter.ConstructorProperties {
    }

}

interface BaseXmlFormatter extends Extractable {

    // Own properties of GES-1.0.GES.BaseXmlFormatter

    __gtype__: number

    // Own fields of GES-1.0.GES.BaseXmlFormatter

    parent: Formatter & GObject.InitiallyUnowned

    // Class property signals of GES-1.0.GES.BaseXmlFormatter

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

class BaseXmlFormatter extends Formatter {

    // Own properties of GES-1.0.GES.BaseXmlFormatter

    static name: string

    // Constructors of GES-1.0.GES.BaseXmlFormatter

    constructor(config?: BaseXmlFormatter.ConstructorProperties) 
    _init(config?: BaseXmlFormatter.ConstructorProperties): void
}

module Clip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Container.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Clip

        /**
         * The #GESTrackType-s that the clip supports, which it can create
         * #GESTrackElement-s for. Note that this can be a combination of
         * #GESTrackType flags to indicate support for several
         * #GESTrackElement:track-type elements.
         */
        supported_formats?: TrackType | null
    }

}

interface Clip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Clip

    /**
     * The maximum #GESTimelineElement:duration that can be *currently* set
     * for the clip, taking into account the #GESTimelineElement:in-point,
     * #GESTimelineElement:max-duration, #GESTrackElement:active, and
     * #GESTrackElement:track properties of its children, as well as any
     * time effects. If there is no limit, this will be set to
     * #GST_CLOCK_TIME_NONE.
     * 
     * Note that whilst a clip has no children in any tracks, the limit will
     * be unknown, and similarly set to #GST_CLOCK_TIME_NONE.
     * 
     * If the duration-limit would ever go below the current
     * #GESTimelineElement:duration of the clip due to a change in the above
     * variables, its #GESTimelineElement:duration will be set to the new
     * limit.
     */
    readonly durationLimit: number
    /**
     * The layer this clip lies in.
     * 
     * If you want to connect to this property's #GObject::notify signal,
     * you should connect to it with g_signal_connect_after() since the
     * signal emission may be stopped internally.
     */
    readonly layer: Layer
    /**
     * The #GESTrackType-s that the clip supports, which it can create
     * #GESTrackElement-s for. Note that this can be a combination of
     * #GESTrackType flags to indicate support for several
     * #GESTrackElement:track-type elements.
     */
    supportedFormats: TrackType
    __gtype__: number

    // Own fields of GES-1.0.GES.Clip

    parent: Container & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.Clip

    /**
     * Extracts a #GESTrackElement from an asset and adds it to the clip.
     * This can be used to add effects that derive from the asset to the
     * clip, but this method is not intended to be used to create the core
     * elements of the clip.
     * @param asset An asset with #GES_TYPE_TRACK_ELEMENT as its #GESAsset:extractable-type
     * @returns The newly created element, or %NULL if an error occurred.
     */
    addAsset(asset: Asset): TrackElement | null
    /**
     * Adds the track element child of the clip to a specific track.
     * 
     * If the given child is already in another track, this will create a copy
     * of the child, add it to the clip, and add this copy to the track.
     * 
     * You should only call this whilst a clip is part of a #GESTimeline, and
     * for tracks that are in the same timeline.
     * 
     * This method is an alternative to using the
     * #GESTimeline::select-tracks-for-object signal, but can be used to
     * complement it when, say, you wish to copy a clip's children from one
     * track into a new one.
     * 
     * When the child is a core child, it must be added to a track that does
     * not already contain another core child of the same clip. If it is not a
     * core child (an additional effect), then it must be added to a track
     * that already contains one of the core children of the same clip.
     * 
     * This method can also fail if the adding the track element to the track
     * would break a configuration rule of the corresponding #GESTimeline,
     * such as causing three sources to overlap at a single time, or causing
     * a source to completely overlap another in the same track.
     * @param child A child of `clip`
     * @param track The track to add `child` to
     * @returns The element that was added to @track, either @child or a copy of child, or %NULL if the element could not be added.
     */
    addChildToTrack(child: TrackElement, track: Track): TrackElement
    /**
     * Add a top effect to a clip at the given index.
     * 
     * Unlike using ges_container_add(), this allows you to set the index
     * in advance. It will also check that no error occurred during the track
     * selection for the effect.
     * 
     * Note, only subclasses of #GESClipClass that have
     * #GES_CLIP_CLASS_CAN_ADD_EFFECTS set to %TRUE (such as #GESSourceClip
     * and #GESBaseEffectClip) can have additional top effects added.
     * 
     * Note, if the effect is a time effect, this may be refused if the clip
     * would not be able to adapt itself once the effect is added.
     * @param effect A top effect to add
     * @param index The index to add `effect` at, or -1 to add at the highest
     * @returns %TRUE if @effect was successfully added to @clip at @index.
     */
    addTopEffect(effect: BaseEffect, index: number): boolean
    /**
     * Finds an element controlled by the clip. If `track` is given,
     * then only the track elements in `track` are searched for. If `type` is
     * given, then this function searches for a track element of the given
     * `type`.
     * 
     * Note, if multiple track elements in the clip match the given criteria,
     * this will return the element amongst them with the highest
     * #GESTimelineElement:priority (numerically, the smallest). See
     * ges_clip_find_track_elements() if you wish to find all such elements.
     * @param track The track to search in, or %NULL to search in all tracks
     * @param type The type of track element to search for, or `G_TYPE_NONE` to match any type
     * @returns The element controlled by @clip, in @track, and of the given @type, or %NULL if no such element could be found.
     */
    findTrackElement(track: Track | null, type: GObject.GType): TrackElement | null
    /**
     * Finds the #GESTrackElement-s controlled by the clip that match the
     * given criteria. If `track` is given as %NULL and `track_type` is given as
     * #GES_TRACK_TYPE_UNKNOWN, then the search will match all elements in any
     * track, including those with no track, and of any
     * #GESTrackElement:track-type. Otherwise, if `track` is not %NULL, but
     * `track_type` is #GES_TRACK_TYPE_UNKNOWN, then only the track elements in
     * `track` are searched for. Otherwise, if `track_type` is not
     * #GES_TRACK_TYPE_UNKNOWN, but `track` is %NULL, then only the track
     * elements whose #GESTrackElement:track-type matches `track_type` are
     * searched for. Otherwise, when both are given, the track elements that
     * match **either** criteria are searched for. Therefore, if you wish to
     * only find elements in a specific track, you should give the track as
     * `track,` but you should not give the track's #GESTrack:track-type as
     * `track_type` because this would also select elements from other tracks
     * of the same type.
     * 
     * You may also give `type` to _further_ restrict the search to track
     * elements of the given `type`.
     * @param track The track to search in, or %NULL to search in all tracks
     * @param trackType The track-type of the track element to search for, or #GES_TRACK_TYPE_UNKNOWN to match any track type
     * @param type The type of track element to search for, or %G_TYPE_NONE to match any type
     * @returns A list of all the #GESTrackElement-s controlled by @clip, in @track or of the given @track_type, and of the given @type.
     */
    findTrackElements(track: Track | null, trackType: TrackType, type: GObject.GType): TrackElement[]
    /**
     * Gets the #GESClip:duration-limit of the clip.
     * @returns The duration-limit of @clip.
     */
    getDurationLimit(): Gst.ClockTime
    /**
     * Convert the timeline time to an internal source time of the child.
     * This will take any time effects placed on the clip into account (see
     * #GESBaseEffect for what time effects are supported, and how to
     * declare them in GES).
     * 
     * When `timeline_time` is above the #GESTimelineElement:start of `clip,`
     * this will return the internal time at which the content that appears at
     * `timeline_time` in the output of the timeline is created in `child`. For
     * example, if `timeline_time` corresponds to the current seek position,
     * this would let you know which part of a media file is being read.
     * 
     * This will be done assuming the clip has an indefinite end, so the
     * internal time may be beyond the current out-point of the child, or even
     * its #GESTimelineElement:max-duration.
     * 
     * If, instead, `timeline_time` is below the current
     * #GESTimelineElement:start of `clip,` this will return what you would
     * need to set the #GESTimelineElement:in-point of `child` to if you set
     * the #GESTimelineElement:start of `clip` to `timeline_time` and wanted
     * to keep the content of `child` currently found at the current
     * #GESTimelineElement:start of `clip` at the same timeline position. If
     * this would be negative, the conversion fails. This is useful for
     * determining what #GESTimelineElement:in-point would result from a
     * #GES_EDIT_MODE_TRIM to `timeline_time`.
     * 
     * Note that whilst a clip has no time effects, this second return is
     * equivalent to finding the internal time at which the content that
     * appears at `timeline_time` in the timeline can be found in `child` if it
     * had indefinite extent in both directions. However, with non-linear time
     * effects this second return will be more distinct.
     * 
     * In either case, the returned time would be appropriate to use for the
     * #GESTimelineElement:in-point or #GESTimelineElement:max-duration of the
     * child.
     * 
     * See ges_clip_get_timeline_time_from_internal_time(), which performs the
     * reverse.
     * @param child An #GESTrackElement:active child of `clip` with a #GESTrackElement:track
     * @param timelineTime A time in the timeline time coordinates
     * @returns The time in the internal coordinates of @child corresponding to @timeline_time, or #GST_CLOCK_TIME_NONE if the conversion could not be performed.
     */
    getInternalTimeFromTimelineTime(child: TrackElement, timelineTime: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the #GESClip:layer of the clip.
     * @returns The layer @clip is in, or %NULL if @clip is not in any layer.
     */
    getLayer(): Layer | null
    /**
     * Gets the #GESClip:supported-formats of the clip.
     * @returns The #GESTrackType-s supported by @clip.
     */
    getSupportedFormats(): TrackType
    /**
     * Convert the internal source time from the child to a timeline time.
     * This will take any time effects placed on the clip into account (see
     * #GESBaseEffect for what time effects are supported, and how to
     * declare them in GES).
     * 
     * When `internal_time` is above the #GESTimelineElement:in-point of
     * `child,` this will return the timeline time at which the internal
     * content found at `internal_time` appears in the output of the timeline's
     * track. For example, this would let you know where in the timeline a
     * particular scene in a media file would appear.
     * 
     * This will be done assuming the clip has an indefinite end, so the
     * timeline time may be beyond the end of the clip, or even breaking its
     * #GESClip:duration-limit.
     * 
     * If, instead, `internal_time` is below the current
     * #GESTimelineElement:in-point of `child,` this will return what you would
     * need to set the #GESTimelineElement:start of `clip` to if you set the
     * #GESTimelineElement:in-point of `child` to `internal_time` and wanted to
     * keep the content of `child` currently found at the current
     * #GESTimelineElement:start of `clip` at the same timeline position. If
     * this would be negative, the conversion fails. This is useful for
     * determining what position to use in a #GES_EDIT_MODE_TRIM if you wish
     * to trim to a specific point in the internal content, such as a
     * particular scene in a media file.
     * 
     * Note that whilst a clip has no time effects, this second return is
     * equivalent to finding the timeline time at which the content of `child`
     * at `internal_time` would be found in the timeline if it had indefinite
     * extent in both directions. However, with non-linear time effects this
     * second return will be more distinct.
     * 
     * In either case, the returned time would be appropriate to use in
     * ges_timeline_element_edit() for #GES_EDIT_MODE_TRIM, and similar, if
     * you wish to use a particular internal point as a reference. For
     * example, you could choose to end a clip at a certain internal
     * 'out-point', similar to the #GESTimelineElement:in-point, by
     * translating the desired end time into the timeline coordinates, and
     * using this position to trim the end of a clip.
     * 
     * See ges_clip_get_internal_time_from_timeline_time(), which performs the
     * reverse, or ges_clip_get_timeline_time_from_source_frame() which does
     * the same conversion, but using frame numbers.
     * @param child An #GESTrackElement:active child of `clip` with a #GESTrackElement:track
     * @param internalTime A time in the internal time coordinates of `child`
     * @returns The time in the timeline coordinates corresponding to @internal_time, or #GST_CLOCK_TIME_NONE if the conversion could not be performed.
     */
    getTimelineTimeFromInternalTime(child: TrackElement, internalTime: Gst.ClockTime): Gst.ClockTime
    /**
     * Convert the source frame number to a timeline time. This acts the same
     * as ges_clip_get_timeline_time_from_internal_time() using the core
     * children of the clip and using the frame number to specify the internal
     * position, rather than a timestamp.
     * 
     * The returned timeline time can be used to seek or edit to a specific
     * frame.
     * 
     * Note that you can get the frame timestamp of a particular clip asset
     * with ges_clip_asset_get_frame_time().
     * @param frameNumber The frame number to get the corresponding timestamp of in the timeline coordinates
     * @returns The timestamp corresponding to @frame_number in the core children of @clip, in the timeline coordinates, or #GST_CLOCK_TIME_NONE if the conversion could not be performed.
     */
    getTimelineTimeFromSourceFrame(frameNumber: FrameNumber): Gst.ClockTime
    /**
     * Gets the internal index of an effect in the clip. The index of effects
     * in a clip will run from 0 to n-1, where n is the total number of
     * effects. If two effects share the same #GESTrackElement:track, the
     * effect with the numerically lower index will be applied to the source
     * data **after** the other effect, i.e. output data will always flow from
     * a higher index effect to a lower index effect.
     * @param effect The effect we want to get the index of
     * @returns The index of @effect in @clip, or -1 if something went wrong.
     */
    getTopEffectIndex(effect: BaseEffect): number
    getTopEffectPosition(effect: BaseEffect): number
    /**
     * Gets the #GESBaseEffect-s that have been added to the clip. The
     * returned list is ordered by their internal index in the clip. See
     * ges_clip_get_top_effect_index().
     * @returns A list of all #GESBaseEffect-s that have been added to @clip.
     */
    getTopEffects(): TrackElement[]
    /**
     * See ges_clip_move_to_layer_full(), which also gives an error.
     * @param layer The new layer
     * @returns %TRUE if @clip was successfully moved to @layer.
     */
    moveToLayer(layer: Layer): boolean
    /**
     * Moves a clip to a new layer. If the clip already exists in a layer, it
     * is first removed from its current layer before being added to the new
     * layer.
     * @param layer The new layer
     * @returns %TRUE if @clip was successfully moved to @layer.
     */
    moveToLayerFull(layer: Layer): boolean
    /**
     * Remove a top effect from the clip.
     * 
     * Note, if the effect is a time effect, this may be refused if the clip
     * would not be able to adapt itself once the effect is removed.
     * @param effect The top effect to remove
     * @returns %TRUE if @effect was successfully added to @clip at @index.
     */
    removeTopEffect(effect: BaseEffect): boolean
    /**
     * Sets the #GESClip:supported-formats of the clip. This should normally
     * only be called by subclasses, which should be responsible for updating
     * its value, rather than the user.
     * @param supportedformats The #GESTrackType-s supported by `clip`
     */
    setSupportedFormats(supportedformats: TrackType): void
    /**
     * See ges_clip_set_top_effect_index_full(), which also gives an error.
     * @param effect An effect within `clip` to move
     * @param newindex The index for `effect` in `clip`
     * @returns %TRUE if @effect was successfully moved to @newindex.
     */
    setTopEffectIndex(effect: BaseEffect, newindex: number): boolean
    /**
     * Set the index of an effect within the clip. See
     * ges_clip_get_top_effect_index(). The new index must be an existing
     * index of the clip. The effect is moved to the new index, and the other
     * effects may be shifted in index accordingly to otherwise maintain the
     * ordering.
     * @param effect An effect within `clip` to move
     * @param newindex The index for `effect` in `clip`
     * @returns %TRUE if @effect was successfully moved to @newindex.
     */
    setTopEffectIndexFull(effect: BaseEffect, newindex: number): boolean
    setTopEffectPriority(effect: BaseEffect, newpriority: number): boolean
    /**
     * See ges_clip_split_full(), which also gives an error.
     * @param position The timeline position at which to perform the split
     * @returns The newly created clip resulting from the splitting @clip, or %NULL if @clip can't be split.
     */
    split(position: number): Clip | null
    /**
     * Splits a clip at the given timeline position into two clips. The clip
     * must already have a #GESClip:layer.
     * 
     * The original clip's #GESTimelineElement:duration is reduced such that
     * its end point matches the split position. Then a new clip is created in
     * the same layer, whose #GESTimelineElement:start matches the split
     * position and #GESTimelineElement:duration will be set such that its end
     * point matches the old end point of the original clip. Thus, the two
     * clips together will occupy the same positions in the timeline as the
     * original clip did.
     * 
     * The children of the new clip will be new copies of the original clip's
     * children, so it will share the same sources and use the same
     * operations.
     * 
     * The new clip will also have its #GESTimelineElement:in-point set so
     * that any internal data will appear in the timeline at the same time.
     * Thus, when the timeline is played, the playback of data should
     * appear the same. This may be complicated by any additional
     * #GESEffect-s that have been placed on the original clip that depend on
     * the playback time or change the data consumption rate of sources. This
     * method will attempt to translate these effects such that the playback
     * appears the same. In such complex situations, you may get a better
     * result if you place the clip in a separate sub #GESProject, which only
     * contains this clip (and its effects), and in the original layer
     * create two neighbouring #GESUriClip-s that reference this sub-project,
     * but at a different #GESTimelineElement:in-point.
     * @param position The timeline position at which to perform the split, between the start and end of the clip
     * @returns The newly created clip resulting from the splitting @clip, or %NULL if @clip can't be split.
     */
    splitFull(position: number): Clip | null

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Own virtual methods of GES-1.0.GES.Clip

    createTrackElement(type: TrackType): TrackElement | null
    createTrackElements(type: TrackType): TrackElement[]

    // Class property signals of GES-1.0.GES.Clip

    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GESClip-s are the core objects of a #GESLayer. Each clip may exist in
 * a single layer but may control several #GESTrackElement-s that span
 * several #GESTrack-s. A clip will ensure that all its children share the
 * same #GESTimelineElement:start and #GESTimelineElement:duration in
 * their tracks, which will match the #GESTimelineElement:start and
 * #GESTimelineElement:duration of the clip itself. Therefore, changing
 * the timing of the clip will change the timing of the children, and a
 * change in the timing of a child will change the timing of the clip and
 * subsequently all its siblings. As such, a clip can be treated as a
 * singular object in its layer.
 * 
 * For most uses of a #GESTimeline, it is often sufficient to only
 * interact with #GESClip-s directly, which will take care of creating and
 * organising the elements of the timeline's tracks.
 * 
 * ## Core Children
 * 
 * In more detail, clips will usually have some *core* #GESTrackElement
 * children, which are created by the clip when it is added to a layer in
 * a timeline. The type and form of these core children will depend on the
 * clip's subclass. You can use ges_track_element_is_core() to determine
 * whether a track element is considered such a core track element. Note,
 * if a core track element is part of a clip, it will always be treated as
 * a core *child* of the clip. You can connect to the
 * #GESContainer::child-added signal to be notified of their creation.
 * 
 * When a child is added to a clip, the timeline will select its tracks
 * using #GESTimeline::select-tracks-for-object. Note that it may be the
 * case that the child will still have no set #GESTrackElement:track
 * after this process. For example, if the timeline does not have a track
 * of the corresponding #GESTrack:track-type. A clip can safely contain
 * such children, which may have their track set later, although they will
 * play no functioning role in the timeline in the meantime.
 * 
 * If a clip may create track elements with various
 * #GESTrackElement:track-type(s), such as a #GESUriClip, but you only
 * want it to create a subset of these types, you should set the
 * #GESClip:supported-formats of the clip to the subset of types. This
 * should be done *before* adding the clip to a layer.
 * 
 * If a clip will produce several core elements of the same
 * #GESTrackElement:track-type, you should connect to the timeline's
 * #GESTimeline::select-tracks-for-object signal to coordinate which
 * tracks each element should land in. Note, no two core children within a
 * clip can share the same #GESTrack, so you should not select the same
 * track for two separate core children. Provided you stick to this rule,
 * it is still safe to select several tracks for the same core child, the
 * core child will be copied into the additional tracks. You can manually
 * add the child to more tracks later using ges_clip_add_child_to_track().
 * If you do not wish to use a core child, you can always select no track.
 * 
 * The #GESTimelineElement:in-point of the clip will control the
 * #GESTimelineElement:in-point of its core children to be the same
 * value if their #GESTrackElement:has-internal-source is set to %TRUE.
 * 
 * The #GESTimelineElement:max-duration of the clip is the minimum
 * #GESTimelineElement:max-duration of its core children. If you set its
 * value to anything other than its current value, this will also set the
 * #GESTimelineElement:max-duration of all its core children to the same
 * value if their #GESTrackElement:has-internal-source is set to %TRUE.
 * As a special case, whilst a clip does not yet have any core children,
 * its #GESTimelineElement:max-duration may be set to indicate what its
 * value will be once they are created.
 * 
 * ## Effects
 * 
 * Some subclasses (#GESSourceClip and #GESBaseEffectClip) may also allow
 * their objects to have additional non-core #GESBaseEffect-s elements as
 * children. These are additional effects that are applied to the output
 * data of the core elements. They can be added to the clip using
 * ges_clip_add_top_effect(), which will take care of adding the effect to
 * the timeline's tracks. The new effect will be placed between the clip's
 * core track elements and its other effects. As such, the newly added
 * effect will be applied to any source data **before** the other existing
 * effects. You can change the ordering of effects using
 * ges_clip_set_top_effect_index().
 * 
 * Tracks are selected for top effects in the same way as core children.
 * If you add a top effect to a clip before it is part of a timeline, and
 * later add the clip to a timeline, the track selection for the top
 * effects will occur just after the track selection for the core
 * children. If you add a top effect to a clip that is already part of a
 * timeline, the track selection will occur immediately. Since a top
 * effect must be applied on top of a core child, if you use
 * #GESTimeline::select-tracks-for-object, you should ensure that the
 * added effects are destined for a #GESTrack that already contains a core
 * child.
 * 
 * In addition, if the core child in the track is not
 * #GESTrackElement:active, then neither can any of its effects be
 * #GESTrackElement:active. Therefore, if a core child is made in-active,
 * all of the additional effects in the same track will also become
 * in-active. Similarly, if an effect is set to be active, then the core
 * child will also become active, but other effects will be left alone.
 * Finally, if an active effect is added to the track of an in-active core
 * child, it will become in-active as well. Note, in contrast, setting a
 * core child to be active, or an effect to be in-active will *not* change
 * the other children in the same track.
 * 
 * ### Time Effects
 * 
 * Some effects also change the timing of their data (see #GESBaseEffect
 * for what counts as a time effect). Note that a #GESBaseEffectClip will
 * refuse time effects, but a #GESSource will allow them.
 * 
 * When added to a clip, time effects may adjust the timing of other
 * children in the same track. Similarly, when changing the order of
 * effects, making them (in)-active, setting their time property values
 * or removing time effects. These can cause the #GESClip:duration-limit
 * to change in value. However, if such an operation would ever cause the
 * #GESTimelineElement:duration to shrink such that a clip's #GESSource is
 * totally overlapped in the timeline, the operation would be prevented.
 * Note that the same can happen when adding non-time effects with a
 * finite #GESTimelineElement:max-duration.
 * 
 * Therefore, when working with time effects, you should -- more so than
 * usual -- not assume that setting the properties of the clip's children
 * will succeed. In particular, you should use
 * ges_timeline_element_set_child_property_full() when setting the time
 * properties.
 * 
 * If you wish to preserve the *internal* duration of a source in a clip
 * during these time effect operations, you can do something like the
 * following.
 * 
 * ```c
 * void
 * do_time_effect_change (GESClip * clip)
 * {
 *   GList *tmp, *children;
 *   GESTrackElement *source;
 *   GstClockTime source_outpoint;
 *   GstClockTime new_end;
 *   GError *error = NULL;
 * 
 *   // choose some active source in a track to preserve the internal
 *   // duration of
 *   source = ges_clip_get_track_element (clip, NULL, GES_TYPE_SOURCE);
 * 
 *   // note its current internal end time
 *   source_outpoint = ges_clip_get_internal_time_from_timeline_time (
 *         clip, source, GES_TIMELINE_ELEMENT_END (clip), NULL);
 * 
 *   // handle invalid out-point
 * 
 *   // stop the children's control sources from clamping when their
 *   // out-point changes with a change in the time effects
 *   children = ges_container_get_children (GES_CONTAINER (clip), FALSE);
 * 
 *   for (tmp = children; tmp; tmp = tmp->next)
 *     ges_track_element_set_auto_clamp_control_source (tmp->data, FALSE);
 * 
 *   // add time effect, or set their children properties, or move them around
 *   ...
 *   // user can make sure that if a time effect changes one source, we should
 *   // also change the time effect for another source. E.g. if
 *   // "GstVideorate::rate" is set to 2.0, we also set "GstPitch::rate" to
 *   // 2.0
 * 
 *   // Note the duration of the clip may have already changed if the
 *   // duration-limit of the clip dropped below its current value
 * 
 *   new_end = ges_clip_get_timeline_time_from_internal_time (
 *         clip, source, source_outpoint, &error);
 *   // handle error
 * 
 *   if (!ges_timeline_elemnet_edit_full (GES_TIMELINE_ELEMENT (clip),
 *         -1, GES_EDIT_MODE_TRIM, GES_EDGE_END, new_end, &error))
 *     // handle error
 * 
 *   for (tmp = children; tmp; tmp = tmp->next)
 *     ges_track_element_set_auto_clamp_control_source (tmp->data, TRUE);
 * 
 *   g_list_free_full (children, gst_object_unref);
 *   gst_object_unref (source);
 * }
 * ```
 * @class 
 */
class Clip extends Container {

    // Own properties of GES-1.0.GES.Clip

    static name: string

    // Constructors of GES-1.0.GES.Clip

    constructor(config?: Clip.ConstructorProperties) 
    _init(config?: Clip.ConstructorProperties): void
}

module ClipAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Asset.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.ClipAsset

        /**
         * The formats supported by the asset.
         */
        supported_formats?: TrackType | null
    }

}

interface ClipAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.ClipAsset

    /**
     * The formats supported by the asset.
     */
    supportedFormats: TrackType
    __gtype__: number

    // Own fields of GES-1.0.GES.ClipAsset

    parent: Asset & GObject.Object

    // Owm methods of GES-1.0.GES.ClipAsset

    /**
     * Converts the given frame number into a timestamp, using the "natural" frame
     * rate of the asset.
     * 
     * You can use this to reference a specific frame in a media file and use this
     * as, for example, the `in-point` or `max-duration` of a #GESClip.
     * @param frameNumber The frame number we want the internal time coordinate timestamp of
     * @returns The timestamp corresponding to @frame_number in the element source, given in internal time coordinates, or #GST_CLOCK_TIME_NONE if the clip asset does not have a natural frame rate.
     */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    // Has conflict: getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    /**
     * Gets track types for which objects extracted from `self` can create #GESTrackElement
     * @returns The track types on which @self will create TrackElement when added to a layer
     */
    getSupportedFormats(): TrackType
    /**
     * Sets track types for which objects extracted from `self` can create #GESTrackElement
     * @param supportedformats The track types supported by the GESClipAsset
     */
    setSupportedFormats(supportedformats: TrackType): void

    // Own virtual methods of GES-1.0.GES.ClipAsset

    /**
     * Result: %TRUE if `self` has a natural framerate %FALSE otherwise
     * @virtual 
     * @returns %TRUE if @self has a natural framerate @FALSE otherwise.
     */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]

    // Class property signals of GES-1.0.GES.ClipAsset

    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GESUriClipAsset is a special #GESAsset specilized in #GESClip.
 * it is mostly used to get information about the #GESTrackType-s the objects extracted
 * from it can potentialy create #GESTrackElement for.
 * @class 
 */
class ClipAsset extends Asset {

    // Own properties of GES-1.0.GES.ClipAsset

    static name: string

    // Constructors of GES-1.0.GES.ClipAsset

    constructor(config?: ClipAsset.ConstructorProperties) 
    _init(config?: ClipAsset.ConstructorProperties): void
}

module CommandLineFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, Formatter.ConstructorProperties {
    }

}

interface CommandLineFormatter extends Extractable {

    // Own properties of GES-1.0.GES.CommandLineFormatter

    __gtype__: number

    // Own fields of GES-1.0.GES.CommandLineFormatter

    parentInstance: Formatter
    priv: CommandLineFormatterPrivate

    // Class property signals of GES-1.0.GES.CommandLineFormatter

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

class CommandLineFormatter extends Formatter {

    // Own properties of GES-1.0.GES.CommandLineFormatter

    static name: string

    // Constructors of GES-1.0.GES.CommandLineFormatter

    constructor(config?: CommandLineFormatter.ConstructorProperties) 
    _init(config?: CommandLineFormatter.ConstructorProperties): void
    /**
     * Creates a help string based on `commands`.
     * 
     * Result: (transfer full): A help string.
     * @param commands Commands
     */
    static getHelp(commands: string[]): string | null
    static getTimelineUri(timeline: Timeline): string | null
}

module Container {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-added`
     */
    interface ChildAddedSignalCallback {
        (element: TimelineElement): void
    }

    /**
     * Signal callback interface for `child-removed`
     */
    interface ChildRemovedSignalCallback {
        (element: TimelineElement): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, TimelineElement.ConstructorProperties {
    }

}

interface Container extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Container

    __gtype__: number

    // Own fields of GES-1.0.GES.Container

    parent: TimelineElement
    /**
     * The list of
     * #GESTimelineElement-s controlled by this Container
     * @field 
     */
    children: TimelineElement[]
    /**
     * The #GESContainer:height of `obj`
     * @field 
     */
    height: number
    childrenControlMode: ChildrenControlMode
    initiatedMove: TimelineElement

    // Owm methods of GES-1.0.GES.Container

    /**
     * Adds a timeline element to the container. The element will now be a
     * child of the container (and the container will be the
     * #GESTimelineElement:parent of the added element), which means that it
     * is now controlled by the container. This may change the properties of
     * the child or the container, depending on the subclass.
     * 
     * Additionally, the children properties of the newly added element will
     * be shared with the container, meaning they can also be read and set
     * using ges_timeline_element_get_child_property() and
     * ges_timeline_element_set_child_property() on the container.
     * @param child The element to add as a child
     * @returns %TRUE if @child was successfully added to @container.
     */
    add(child: TimelineElement): boolean
    // Has conflict: edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Get the list of timeline elements contained in the container. If
     * `recursive` is %TRUE, and the container contains other containers as
     * children, then their children will be added to the list, in addition to
     * themselves, and so on.
     * @param recursive Whether to recursively get children in `container`
     * @returns The list of #GESTimelineElement-s contained in @container.
     */
    getChildren(recursive: boolean): TimelineElement[]
    /**
     * Removes a timeline element from the container. The element will no
     * longer be controlled by the container.
     * @param child The child to remove
     * @returns %TRUE if @child was successfully removed from @container.
     */
    remove(child: TimelineElement): boolean
    // Has conflict: ungroup(recursive: boolean): Container[]

    // Own virtual methods of GES-1.0.GES.Container

    addChild(element: TimelineElement): boolean
    childAdded(element: TimelineElement): void
    childRemoved(element: TimelineElement): void
    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    removeChild(element: TimelineElement): boolean
    /**
     * Ungroups the container by splitting it into several containers
     * containing various children of the original. The rules for how the
     * container splits depends on the subclass. A #GESGroup will simply split
     * into its children. A #GESClip will split into one #GESClip per
     * #GESTrackType it overlaps with (so an audio-video clip will split into
     * an audio clip and a video clip), where each clip contains all the
     * #GESTrackElement-s from the original clip with a matching
     * #GESTrackElement:track-type.
     * 
     * If `recursive` is %TRUE, and the container contains other containers as
     * children, then they will also be ungrouped, and so on.
     * @virtual 
     * @param recursive Whether to recursively ungroup `container`
     * @returns The list of new #GESContainer-s created from the splitting of @container.
     */
    ungroup(recursive: boolean): Container[]

    // Own signals of GES-1.0.GES.Container

    connect(sigName: "child-added", callback: Container.ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: Container.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: Container.ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: Container.ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-removed", callback: Container.ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: Container.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: Container.ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: Container.ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.Container

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESContainer is a timeline element that controls other
 * #GESTimelineElement-s, which are its children. In particular, it is
 * responsible for maintaining the relative #GESTimelineElement:start and
 * #GESTimelineElement:duration times of its children. Therefore, if a
 * container is temporally adjusted or moved to a new layer, it may
 * accordingly adjust and move its children. Similarly, a change in one of
 * its children may prompt the parent to correspondingly change its
 * siblings.
 * @class 
 */
class Container extends TimelineElement {

    // Own properties of GES-1.0.GES.Container

    static name: string

    // Constructors of GES-1.0.GES.Container

    constructor(config?: Container.ConstructorProperties) 
    _init(config?: Container.ConstructorProperties): void
    /**
     * Groups the containers into a single container by merging them. The
     * containers must all belong to the same #GESTimelineElement:timeline.
     * 
     * If the elements are all #GESClip-s then this method will attempt to
     * combine them all into a single #GESClip. This should succeed if they:
     * share the same #GESTimelineElement:start, #GESTimelineElement:duration
     * and #GESTimelineElement:in-point; exist in the same layer; and all of
     * the sources share the same #GESAsset. If this fails, or one of the
     * elements is not a #GESClip, this method will try to create a #GESGroup
     * instead.
     * @param containers The #GESContainer-s to group
     * @returns The container created by merging @containers, or %NULL if they could not be merged into a single container.
     */
    static group(containers: Container[] | null): Container | null
}

module DiscovererManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `discovered`
     */
    interface DiscoveredSignalCallback {
        (info: GstPbutils.DiscovererInfo, error: GLib.Error | null): void
    }

    /**
     * Signal callback interface for `load-serialized-info`
     */
    interface LoadSerializedInfoSignalCallback {
        (uri: string | null): GstPbutils.DiscovererInfo | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.DiscovererManager

        /**
         * The timeout (in milliseconds) for the #GstDiscoverer operations
         */
        timeout?: number | null
        use_cache?: boolean | null
    }

}

interface DiscovererManager {

    // Own properties of GES-1.0.GES.DiscovererManager

    /**
     * The timeout (in milliseconds) for the #GstDiscoverer operations
     */
    timeout: number
    useCache: boolean
    __gtype__: number

    // Owm methods of GES-1.0.GES.DiscovererManager

    getTimeout(): Gst.ClockTime
    getUseCache(): boolean
    /**
     * Sets the timeout to use for the discoverer
     * @param timeout The timeout to set
     */
    setTimeout(timeout: Gst.ClockTime): void
    /**
     * Sets whether to use the cache or not
     * @param useCache Whether to use the cache
     */
    setUseCache(useCache: boolean): void

    // Own signals of GES-1.0.GES.DiscovererManager

    connect(sigName: "discovered", callback: DiscovererManager.DiscoveredSignalCallback): number
    on(sigName: "discovered", callback: DiscovererManager.DiscoveredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "discovered", callback: DiscovererManager.DiscoveredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "discovered", callback: DiscovererManager.DiscoveredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "discovered", error: GLib.Error | null, ...args: any[]): void
    connect(sigName: "load-serialized-info", callback: DiscovererManager.LoadSerializedInfoSignalCallback): number
    on(sigName: "load-serialized-info", callback: DiscovererManager.LoadSerializedInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-serialized-info", callback: DiscovererManager.LoadSerializedInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-serialized-info", callback: DiscovererManager.LoadSerializedInfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-serialized-info", ...args: any[]): void

    // Class property signals of GES-1.0.GES.DiscovererManager

    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::use-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-cache", ...args: any[]): void
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

class DiscovererManager extends GObject.Object {

    // Own properties of GES-1.0.GES.DiscovererManager

    static name: string

    // Constructors of GES-1.0.GES.DiscovererManager

    constructor(config?: DiscovererManager.ConstructorProperties) 
    _init(config?: DiscovererManager.ConstructorProperties): void
    static getDefault(): DiscovererManager
}

module Effect {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, BaseEffect.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Effect

        /**
         * The description of the effect bin with a gst-launch-style
         * pipeline description.
         * 
         * Example: "videobalance saturation=1.5 hue=+0.5"
         */
        bin_description?: string | null
    }

}

interface Effect extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Effect

    /**
     * The description of the effect bin with a gst-launch-style
     * pipeline description.
     * 
     * Example: "videobalance saturation=1.5 hue=+0.5"
     */
    readonly binDescription: string | null
    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.Effect

    connect(sigName: "notify::bin-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bin-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bin-description", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Currently we only support effects with N sinkpads and one single srcpad.
 * Apart from `gesaudiomixer` and `gescompositor` which can be used as effects
 * and where sinkpads will be requested as needed based on the timeline topology
 * GES will always request at most one sinkpad per effect (when required).
 * 
 * > Note: GES always adds converters (`audioconvert ! audioresample !
 * > audioconvert` for audio effects and `videoconvert` for video effects) to
 * > make it simpler for end users.
 * @class 
 */
class Effect extends BaseEffect {

    // Own properties of GES-1.0.GES.Effect

    static name: string

    // Constructors of GES-1.0.GES.Effect

    constructor(config?: Effect.ConstructorProperties) 
    /**
     * Creates a new #GESEffect from the description of the bin. It should be
     * possible to determine the type of the effect through the element
     * 'klass' metadata of the GstElements that will be created.
     * In that corner case, you should use:
     * #ges_asset_request (GES_TYPE_EFFECT, "audio your ! bin ! description", NULL);
     * and extract that asset to be in full control.
     * @constructor 
     * @param binDescription The gst-launch like bin description of the effect
     * @returns a newly created #GESEffect, or %NULL if something went wrong.
     */
    constructor(binDescription: string) 
    /**
     * Creates a new #GESEffect from the description of the bin. It should be
     * possible to determine the type of the effect through the element
     * 'klass' metadata of the GstElements that will be created.
     * In that corner case, you should use:
     * #ges_asset_request (GES_TYPE_EFFECT, "audio your ! bin ! description", NULL);
     * and extract that asset to be in full control.
     * @constructor 
     * @param binDescription The gst-launch like bin description of the effect
     * @returns a newly created #GESEffect, or %NULL if something went wrong.
     */
    static new(binDescription: string): Effect
    _init(config?: Effect.ConstructorProperties): void
    /**
     * Register an element that can change the rate at which media is playing.
     * The property type must be float or double, and must be a factor of the
     * rate, i.e. a value of 2.0 must mean that the media plays twice as fast.
     * Several properties may be registered for a single element type,
     * provided they all contribute to the rate as independent factors. For
     * example, this is true for the "GstPitch::rate" and "GstPitch::tempo"
     * properties. These are already registered by default in GES, along with
     * #videorate:rate for #videorate and #scaletempo:rate for #scaletempo.
     * 
     * If such a rate property becomes a child property of a #GESEffect upon
     * its creation (the element is part of its #GESEffect:bin-description),
     * it will be automatically registered as a time property (see
     * ges_base_effect_register_time_property()) and will have its time
     * translation functions set (see
     * ges_base_effect_set_time_translation_funcs()) to use the overall rate
     * of the rate properties. Note that if an effect contains a rate
     * property as well as a non-rate time property, you should ensure to set
     * the time translation functions to some other methods using
     * ges_base_effect_set_time_translation_funcs().
     * 
     * Note, you can obtain a reference to the GESEffectClass using
     * 
     * ```
     *   GES_EFFECT_CLASS (g_type_class_ref (GES_TYPE_EFFECT));
     * ```
     * @param elementName The #GstElementFactory name of the element that changes the rate
     * @param propertyName The name of the property that changes the rate
     * @returns %TRUE if the rate property was successfully registered. When this method returns %FALSE, a warning is emitted with more information.
     */
    static registerRateProperty(klass: Effect | Function | GObject.GType, elementName: string, propertyName: string): boolean
}

module EffectAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, TrackElementAsset.ConstructorProperties {
    }

}

interface EffectAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.EffectAsset

    __gtype__: number

    // Conflicting properties

    parent: Asset & GObject.Object & GObject.Object

    // Own fields of GES-1.0.GES.EffectAsset

    parentInstance: TrackElementAsset
    priv: EffectAssetPrivate
    gesReserved: any[]

    // Class property signals of GES-1.0.GES.EffectAsset

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This asset has a GStreamer bin-description as ID and is able to determine
 * to what track type the effect should be used in.
 * @class 
 */
class EffectAsset extends TrackElementAsset {

    // Own properties of GES-1.0.GES.EffectAsset

    static name: string

    // Constructors of GES-1.0.GES.EffectAsset

    constructor(config?: EffectAsset.ConstructorProperties) 
    _init(config?: EffectAsset.ConstructorProperties): void
}

module EffectClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, BaseEffectClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.EffectClip

        /**
         * The description of the audio track of the effect bin with a gst-launch-style
         * pipeline description. This should be used for test purposes.
         * 
         * Example: "audiopanorama panorama=1.0"
         */
        audio_bin_description?: string | null
        /**
         * The description of the video track of the effect bin with a gst-launch-style
         * pipeline description. This should be used for test purposes.
         * 
         * Example: "videobalance saturation=1.5 hue=+0.5"
         */
        video_bin_description?: string | null
    }

}

interface EffectClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.EffectClip

    /**
     * The description of the audio track of the effect bin with a gst-launch-style
     * pipeline description. This should be used for test purposes.
     * 
     * Example: "audiopanorama panorama=1.0"
     */
    readonly audioBinDescription: string | null
    /**
     * The description of the video track of the effect bin with a gst-launch-style
     * pipeline description. This should be used for test purposes.
     * 
     * Example: "videobalance saturation=1.5 hue=+0.5"
     */
    readonly videoBinDescription: string | null
    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.EffectClip

    connect(sigName: "notify::audio-bin-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-bin-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-bin-description", ...args: any[]): void
    connect(sigName: "notify::video-bin-description", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-bin-description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-bin-description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-bin-description", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The effect will be applied on the sources that have lower priorities
 * (higher number) between the inpoint and the end of it.
 * 
 * The asset ID of an effect clip is in the form:
 * 
 * ```
 *   "audio ! bin ! description || video ! bin ! description"
 * ```
 * @class 
 */
class EffectClip extends BaseEffectClip {

    // Own properties of GES-1.0.GES.EffectClip

    static name: string

    // Constructors of GES-1.0.GES.EffectClip

    constructor(config?: EffectClip.ConstructorProperties) 
    /**
     * Creates a new #GESEffectClip from the description of the bin.
     * @constructor 
     * @param videoBinDescription The gst-launch like bin description of the effect
     * @param audioBinDescription The gst-launch like bin description of the effect
     * @returns a newly created #GESEffectClip, or %NULL if something went wrong.
     */
    constructor(videoBinDescription: string | null, audioBinDescription: string | null) 
    /**
     * Creates a new #GESEffectClip from the description of the bin.
     * @constructor 
     * @param videoBinDescription The gst-launch like bin description of the effect
     * @param audioBinDescription The gst-launch like bin description of the effect
     * @returns a newly created #GESEffectClip, or %NULL if something went wrong.
     */
    static new(videoBinDescription: string | null, audioBinDescription: string | null): EffectClip
    _init(config?: EffectClip.ConstructorProperties): void
}

module Formatter {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {
    }

}

interface Formatter extends Extractable {

    // Own properties of GES-1.0.GES.Formatter

    __gtype__: number

    // Own fields of GES-1.0.GES.Formatter

    parent: GObject.InitiallyUnowned

    // Owm methods of GES-1.0.GES.Formatter

    // Has conflict: loadFromUri(timeline: Timeline, uri: string): boolean
    // Has conflict: saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean

    // Own virtual methods of GES-1.0.GES.Formatter

    canLoadUri(uri: string): boolean
    /**
     * Load data from the given URI into timeline.
     * @virtual 
     * @param timeline a #GESTimeline
     * @param uri a #gchar * pointing to a URI
     * @returns TRUE if the timeline data was successfully loaded from the URI, else FALSE.
     */
    loadFromUri(timeline: Timeline, uri: string): boolean
    /**
     * Save data from timeline to the given URI.
     * @virtual 
     * @param timeline a #GESTimeline
     * @param uri a #gchar * pointing to a URI
     * @param overwrite %TRUE to overwrite file if it exists
     * @returns TRUE if the timeline data was successfully saved to the URI else FALSE.
     */
    saveToUri(timeline: Timeline, uri: string, overwrite: boolean): boolean

    // Class property signals of GES-1.0.GES.Formatter

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
 * Base class for timeline data serialization and deserialization.
 * @class 
 */
class Formatter extends GObject.InitiallyUnowned {

    // Own properties of GES-1.0.GES.Formatter

    static name: string

    // Constructors of GES-1.0.GES.Formatter

    constructor(config?: Formatter.ConstructorProperties) 
    _init(config?: Formatter.ConstructorProperties): void
    /**
     * Checks if there is a #GESFormatter available which can load a #GESTimeline
     * from the given URI.
     * @param uri a #gchar * pointing to the URI
     * @returns TRUE if there is a #GESFormatter that can support the given uri or FALSE if not.
     */
    static canLoadUri(uri: string): boolean
    /**
     * Returns TRUE if there is a #GESFormatter available which can save a
     * #GESTimeline to the given URI.
     * @param uri a #gchar * pointing to a URI
     * @returns TRUE if the given @uri is supported, else FALSE.
     */
    static canSaveUri(uri: string): boolean
    /**
     * Get the default #GESAsset to use as formatter. It will return
     * the asset for the #GESFormatter that has the highest `rank`
     * @returns The #GESAsset for the formatter with highest @rank
     */
    static getDefault(): Asset
    static registerMetas(klass: Formatter | Function | GObject.GType, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
}

module Group {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Container.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Group

        /**
         * An overwrite of the #GESTimelineElement:duration property. For a
         * #GESGroup, this is the difference between the earliest
         * #GESTimelineElement:start time and the latest end time (given by
         * #GESTimelineElement:start + #GESTimelineElement:duration) amongst
         * its children.
         */
        duration?: number | null
        /**
         * An overwrite of the #GESTimelineElement:in-point property. This has
         * no meaning for a group and should not be set.
         */
        in_point?: number | null
        /**
         * An overwrite of the #GESTimelineElement:max-duration property. This
         * has no meaning for a group and should not be set.
         */
        max_duration?: number | null
        /**
         * An overwrite of the #GESTimelineElement:priority property.
         * Setting #GESTimelineElement priorities is deprecated as all priority
         * management is now done by GES itself.
         */
        priority?: number | null
        /**
         * An overwrite of the #GESTimelineElement:start property. For a
         * #GESGroup, this is the earliest #GESTimelineElement:start time
         * amongst its children.
         */
        start?: number | null
    }

}

interface Group extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Group

    /**
     * An overwrite of the #GESTimelineElement:duration property. For a
     * #GESGroup, this is the difference between the earliest
     * #GESTimelineElement:start time and the latest end time (given by
     * #GESTimelineElement:start + #GESTimelineElement:duration) amongst
     * its children.
     */
    duration: any
    /**
     * An overwrite of the #GESTimelineElement:in-point property. This has
     * no meaning for a group and should not be set.
     */
    inPoint: number
    /**
     * An overwrite of the #GESTimelineElement:max-duration property. This
     * has no meaning for a group and should not be set.
     */
    maxDuration: number
    /**
     * An overwrite of the #GESTimelineElement:priority property.
     * Setting #GESTimelineElement priorities is deprecated as all priority
     * management is now done by GES itself.
     */
    priority: number
    /**
     * An overwrite of the #GESTimelineElement:start property. For a
     * #GESGroup, this is the earliest #GESTimelineElement:start time
     * amongst its children.
     */
    start: any
    __gtype__: number

    // Own fields of GES-1.0.GES.Group

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.Group

    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::start", callback: (...args: any[]) => void): number
    on(sigName: "notify::start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESGroup controls one or more #GESContainer-s (usually #GESClip-s,
 * but it can also control other #GESGroup-s). Its children must share
 * the same #GESTimeline, but can otherwise lie in separate #GESLayer-s
 * and have different timings.
 * 
 * To initialise a group, you may want to use ges_container_group(),
 * and similarly use ges_container_ungroup() to dispose of it.
 * 
 * A group will maintain the relative #GESTimelineElement:start times of
 * its children, as well as their relative layer #GESLayer:priority.
 * Therefore, if one of its children has its #GESTimelineElement:start
 * set, all other children will have their #GESTimelineElement:start
 * shifted by the same amount. Similarly, if one of its children moves to
 * a new layer, the other children will also change layers to maintain the
 * difference in their layer priorities. For example, if a child moves
 * from a layer with #GESLayer:priority 1 to a layer with priority 3, then
 * another child that was in a layer with priority 0 will move to the
 * layer with priority 2.
 * 
 * The #GESGroup:start of a group refers to the earliest start
 * time of its children. If the group's #GESGroup:start is set, all the
 * children will be shifted equally such that the earliest start time
 * will match the set value. The #GESGroup:duration of a group is the
 * difference between the earliest start time and latest end time of its
 * children. If the group's #GESGroup:duration is increased, the children
 * whose end time matches the end of the group will be extended
 * accordingly. If it is decreased, then any child whose end time exceeds
 * the new end time will also have their duration decreased accordingly.
 * 
 * A group may span several layers, but for methods such as
 * ges_timeline_element_get_layer_priority() and
 * ges_timeline_element_edit() a group is considered to have a layer
 * priority that is the highest #GESLayer:priority (numerically, the
 * smallest) of all the layers it spans.
 * @class 
 */
class Group extends Container {

    // Own properties of GES-1.0.GES.Group

    static name: string

    // Constructors of GES-1.0.GES.Group

    constructor(config?: Group.ConstructorProperties) 
    /**
     * Created a new empty group. You may wish to use
     * ges_container_group() instead, which can return a different
     * #GESContainer subclass if possible.
     * @constructor 
     * @returns The new empty group.
     */
    constructor() 
    /**
     * Created a new empty group. You may wish to use
     * ges_container_group() instead, which can return a different
     * #GESContainer subclass if possible.
     * @constructor 
     * @returns The new empty group.
     */
    static new(): Group
    _init(config?: Group.ConstructorProperties): void
}

module ImageSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, VideoSource.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.ImageSource

        /**
         * The location of the file/resource to use.
         */
        uri?: string | null
    }

}

interface ImageSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.ImageSource

    /**
     * The location of the file/resource to use.
     */
    readonly uri: string | null
    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.ImageSource

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Outputs the video stream from a given file as a still frame. The frame chosen
 * will be determined by the in-point property on the track element. For image
 * files, do not set the in-point property.
 * @class 
 */
class ImageSource extends VideoSource {

    // Own properties of GES-1.0.GES.ImageSource

    static name: string

    // Constructors of GES-1.0.GES.ImageSource

    constructor(config?: ImageSource.ConstructorProperties) 
    _init(config?: ImageSource.ConstructorProperties): void
}

module Layer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-changed`
     */
    interface ActiveChangedSignalCallback {
        (active: boolean, tracks: Track[]): void
    }

    /**
     * Signal callback interface for `clip-added`
     */
    interface ClipAddedSignalCallback {
        (clip: Clip): void
    }

    /**
     * Signal callback interface for `clip-removed`
     */
    interface ClipRemovedSignalCallback {
        (clip: Clip): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Layer

        /**
         * Whether to automatically create a #GESTransitionClip whenever two
         * #GESSource-s that both belong to a #GESClip in the layer overlap.
         * See #GESTimeline for what counts as an overlap.
         * 
         * When a layer is added to a #GESTimeline, if this property is left as
         * %FALSE, but the timeline's #GESTimeline:auto-transition is %TRUE, it
         * will be set to %TRUE as well.
         */
        auto_transition?: boolean | null
        /**
         * The priority of the layer in the #GESTimeline. 0 is the highest
         * priority. Conceptually, a timeline is a stack of layers,
         * and the priority of the layer represents its position in the stack. Two
         * layers should not have the same priority within a given GESTimeline.
         * 
         * Note that the timeline needs to be committed (with #ges_timeline_commit)
         * for the change to be taken into account.
         */
        priority?: number | null
    }

}

interface Layer extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Layer

    /**
     * Whether to automatically create a #GESTransitionClip whenever two
     * #GESSource-s that both belong to a #GESClip in the layer overlap.
     * See #GESTimeline for what counts as an overlap.
     * 
     * When a layer is added to a #GESTimeline, if this property is left as
     * %FALSE, but the timeline's #GESTimeline:auto-transition is %TRUE, it
     * will be set to %TRUE as well.
     */
    autoTransition: boolean
    /**
     * The priority of the layer in the #GESTimeline. 0 is the highest
     * priority. Conceptually, a timeline is a stack of layers,
     * and the priority of the layer represents its position in the stack. Two
     * layers should not have the same priority within a given GESTimeline.
     * 
     * Note that the timeline needs to be committed (with #ges_timeline_commit)
     * for the change to be taken into account.
     */
    priority: number
    __gtype__: number

    // Own fields of GES-1.0.GES.Layer

    parent: GObject.InitiallyUnowned
    /**
     * the #GESTimeline where this layer is being used.
     * @field 
     */
    timeline: Timeline
    minNlePriority: number
    maxNlePriority: number
    priv: LayerPrivate
    gesReserved: any[]

    // Owm methods of GES-1.0.GES.Layer

    /**
     * See ges_layer_add_asset_full(), which also gives an error.
     * @param asset The asset to extract the new clip from
     * @param start The #GESTimelineElement:start value to set on the new clip If `start == #GST_CLOCK_TIME_NONE`, it will be added to the end of `layer,` i.e. it will be set to `layer'`s duration
     * @param inpoint The #GESTimelineElement:in-point value to set on the new clip
     * @param duration The #GESTimelineElement:duration value to set on the new clip
     * @param trackTypes The #GESClip:supported-formats to set on the the new clip, or #GES_TRACK_TYPE_UNKNOWN to use the default
     * @returns The newly created clip.
     */
    addAsset(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip | null
    /**
     * Extracts a new clip from an asset and adds it to the layer with
     * the given properties.
     * @param asset The asset to extract the new clip from
     * @param start The #GESTimelineElement:start value to set on the new clip If `start == #GST_CLOCK_TIME_NONE`, it will be added to the end of `layer,` i.e. it will be set to `layer'`s duration
     * @param inpoint The #GESTimelineElement:in-point value to set on the new clip
     * @param duration The #GESTimelineElement:duration value to set on the new clip
     * @param trackTypes The #GESClip:supported-formats to set on the the new clip, or #GES_TRACK_TYPE_UNKNOWN to use the default
     * @returns The newly created clip.
     */
    addAssetFull(asset: Asset, start: Gst.ClockTime, inpoint: Gst.ClockTime, duration: Gst.ClockTime, trackTypes: TrackType): Clip
    /**
     * See ges_layer_add_clip_full(), which also gives an error.
     * @param clip The clip to add
     * @returns %TRUE if @clip was properly added to @layer, or %FALSE if @layer refused to add @clip.
     */
    addClip(clip: Clip): boolean
    /**
     * Adds the given clip to the layer. If the method succeeds, the layer
     * will take ownership of the clip.
     * 
     * This method will fail and return %FALSE if `clip` already resides in
     * some layer. It can also fail if the additional clip breaks some
     * compositional rules (see #GESTimelineElement).
     * @param clip The clip to add
     * @returns %TRUE if @clip was properly added to @layer, or %FALSE if @layer refused to add @clip.
     */
    addClipFull(clip: Clip): boolean
    /**
     * Gets whether the layer is active for the given track. See
     * ges_layer_set_active_for_tracks().
     * @param track The #GESTrack to check if `layer` is currently active for
     * @returns %TRUE if @layer is active for @track, or %FALSE otherwise.
     */
    getActiveForTrack(track: Track): boolean
    /**
     * Gets the #GESLayer:auto-transition of the layer.
     * @returns %TRUE if transitions are automatically added to @layer.
     */
    getAutoTransition(): boolean
    /**
     * Get the #GESClip-s contained in this layer.
     * @returns A list of clips in @layer.
     */
    getClips(): Clip[]
    /**
     * Gets the clips within the layer that appear between `start` and `end`.
     * @param start Start of the interval
     * @param end End of the interval
     * @returns A list of #GESClip-s that intersect the interval `[start, end)` in @layer.
     */
    getClipsInInterval(start: Gst.ClockTime, end: Gst.ClockTime): Clip[]
    /**
     * Retrieves the duration of the layer, which is the difference
     * between the start of the layer (always time 0) and the end (which will
     * be the end time of the final clip).
     * @returns The duration of @layer.
     */
    getDuration(): Gst.ClockTime
    /**
     * Get the priority of the layer. When inside a timeline, this is its
     * index in the timeline. See ges_timeline_move_layer().
     * @returns The priority of @layer within its timeline.
     */
    getPriority(): number
    /**
     * Gets the timeline that the layer is a part of.
     * @returns The timeline that @layer is currently part of, or %NULL if it is not associated with any timeline.
     */
    getTimeline(): Timeline | null
    /**
     * Convenience method to check if the layer is empty (doesn't contain
     * any #GESClip), or not.
     * @returns %TRUE if @layer is empty, %FALSE if it contains at least one clip.
     */
    isEmpty(): boolean
    /**
     * Removes the given clip from the layer.
     * @param clip The clip to remove
     * @returns %TRUE if @clip was removed from @layer, or %FALSE if the operation failed.
     */
    removeClip(clip: Clip): boolean
    /**
     * Activate or deactivate track elements in `tracks` (or in all tracks if `tracks`
     * is %NULL).
     * 
     * When a layer is deactivated for a track, all the #GESTrackElement-s in
     * the track that belong to a #GESClip in the layer will no longer be
     * active in the track, regardless of their individual
     * #GESTrackElement:active value.
     * 
     * Note that by default a layer will be active for all of its
     * timeline's tracks.
     * @param active Whether elements in `tracks` should be active or not
     * @param tracks The list of tracks `layer` should be (de-)active in, or %NULL to include all the tracks in the `layer'`s timeline
     * @returns %TRUE if the operation worked %FALSE otherwise.
     */
    setActiveForTracks(active: boolean, tracks: Track[] | null): boolean
    /**
     * Sets #GESLayer:auto-transition for the layer. Use
     * ges_timeline_set_auto_transition() if you want all layers within a
     * #GESTimeline to have #GESLayer:auto-transition set to %TRUE. Use this
     * method if you want different values for different layers (and make sure
     * to keep #GESTimeline:auto-transition as %FALSE for the corresponding
     * timeline).
     * @param autoTransition Whether transitions should be automatically added to the layer
     */
    setAutoTransition(autoTransition: boolean): void
    /**
     * Sets the layer to the given priority. See #GESLayer:priority.
     * @param priority The priority to set
     */
    setPriority(priority: number): void
    setTimeline(timeline: Timeline): void

    // Own virtual methods of GES-1.0.GES.Layer

    objectAdded(object: Clip): void
    objectRemoved(object: Clip): void

    // Own signals of GES-1.0.GES.Layer

    connect(sigName: "active-changed", callback: Layer.ActiveChangedSignalCallback): number
    on(sigName: "active-changed", callback: Layer.ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-changed", callback: Layer.ActiveChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-changed", callback: Layer.ActiveChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-changed", tracks: Track[], ...args: any[]): void
    connect(sigName: "clip-added", callback: Layer.ClipAddedSignalCallback): number
    on(sigName: "clip-added", callback: Layer.ClipAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-added", callback: Layer.ClipAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-added", callback: Layer.ClipAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clip-added", ...args: any[]): void
    connect(sigName: "clip-removed", callback: Layer.ClipRemovedSignalCallback): number
    on(sigName: "clip-removed", callback: Layer.ClipRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clip-removed", callback: Layer.ClipRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clip-removed", callback: Layer.ClipRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clip-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.Layer

    connect(sigName: "notify::auto-transition", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-transition", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
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
 * #GESLayer-s are responsible for collecting and ordering #GESClip-s.
 * 
 * A layer within a timeline will have an associated priority,
 * corresponding to their index within the timeline. A layer with the
 * index/priority 0 will have the highest priority and the layer with the
 * largest index will have the lowest priority (the order of priorities,
 * in this sense, is the _reverse_ of the numerical ordering of the
 * indices). ges_timeline_move_layer() should be used if you wish to
 * change how layers are prioritised in a timeline.
 * 
 * Layers with higher priorities will have their content priorities
 * over content from lower priority layers, similar to how layers are
 * used in image editing. For example, if two separate layers both
 * display video content, then the layer with the higher priority will
 * have its images shown first. The other layer will only have its image
 * shown if the higher priority layer has no content at the given
 * playtime, or is transparent in some way. Audio content in separate
 * layers will simply play in addition.
 * @class 
 */
class Layer extends GObject.InitiallyUnowned {

    // Own properties of GES-1.0.GES.Layer

    static name: string

    // Constructors of GES-1.0.GES.Layer

    constructor(config?: Layer.ConstructorProperties) 
    /**
     * Creates a new layer.
     * @constructor 
     * @returns A new layer.
     */
    constructor() 
    /**
     * Creates a new layer.
     * @constructor 
     * @returns A new layer.
     */
    static new(): Layer
    _init(config?: Layer.ConstructorProperties): void
}

module Marker {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Marker extends MetaContainer {

    // Own properties of GES-1.0.GES.Marker

    /**
     * Current position (in nanoseconds) of the #GESMarker
     */
    readonly position: number
    __gtype__: number

    // Class property signals of GES-1.0.GES.Marker

    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
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
 * A timed #GESMetaContainer object.
 * @class 
 */
class Marker extends GObject.Object {

    // Own properties of GES-1.0.GES.Marker

    static name: string

    // Constructors of GES-1.0.GES.Marker

    constructor(config?: Marker.ConstructorProperties) 
    _init(config?: Marker.ConstructorProperties): void
}

module MarkerList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `marker-added`
     */
    interface MarkerAddedSignalCallback {
        (position: number, marker: Marker): void
    }

    /**
     * Signal callback interface for `marker-moved`
     */
    interface MarkerMovedSignalCallback {
        (previousPosition: number, newPosition: number, marker: Marker): void
    }

    /**
     * Signal callback interface for `marker-removed`
     */
    interface MarkerRemovedSignalCallback {
        (marker: Marker): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.MarkerList

        /**
         * Flags indicating how markers on the list should be treated.
         */
        flags?: MarkerFlags | null
    }

}

interface MarkerList {

    // Own properties of GES-1.0.GES.MarkerList

    /**
     * Flags indicating how markers on the list should be treated.
     */
    flags: MarkerFlags
    __gtype__: number

    // Owm methods of GES-1.0.GES.MarkerList

    add(position: Gst.ClockTime): Marker
    getMarkers(): Marker[]
    /**
     * Moves a `marker` in a `list` to a new `position`
     * @param marker 
     * @param position 
     * @returns %TRUE if the marker could be moved, %FALSE otherwise   (if the marker was not present in the list for example)
     */
    move(marker: Marker, position: Gst.ClockTime): boolean
    /**
     * Removes `marker` from `list,` this decreases the refcount of the
     * marker by 1.
     * @param marker 
     * @returns %TRUE if the marker could be removed, %FALSE otherwise   (if the marker was not present in the list for example)
     */
    remove(marker: Marker): boolean
    size(): number

    // Own signals of GES-1.0.GES.MarkerList

    connect(sigName: "marker-added", callback: MarkerList.MarkerAddedSignalCallback): number
    on(sigName: "marker-added", callback: MarkerList.MarkerAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-added", callback: MarkerList.MarkerAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-added", callback: MarkerList.MarkerAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "marker-added", marker: Marker, ...args: any[]): void
    connect(sigName: "marker-moved", callback: MarkerList.MarkerMovedSignalCallback): number
    on(sigName: "marker-moved", callback: MarkerList.MarkerMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-moved", callback: MarkerList.MarkerMovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-moved", callback: MarkerList.MarkerMovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "marker-moved", newPosition: number, marker: Marker, ...args: any[]): void
    connect(sigName: "marker-removed", callback: MarkerList.MarkerRemovedSignalCallback): number
    on(sigName: "marker-removed", callback: MarkerList.MarkerRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "marker-removed", callback: MarkerList.MarkerRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "marker-removed", callback: MarkerList.MarkerRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "marker-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.MarkerList

    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
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
 * A #GESMarker can be colored by setting the #GES_META_MARKER_COLOR meta.
 * @class 
 */
class MarkerList extends GObject.Object {

    // Own properties of GES-1.0.GES.MarkerList

    static name: string

    // Constructors of GES-1.0.GES.MarkerList

    constructor(config?: MarkerList.ConstructorProperties) 
    /**
     * Creates a new #GESMarkerList.
     * @constructor 
     * @returns A new #GESMarkerList
     */
    constructor() 
    /**
     * Creates a new #GESMarkerList.
     * @constructor 
     * @returns A new #GESMarkerList
     */
    static new(): MarkerList
    _init(config?: MarkerList.ConstructorProperties): void
}

module MultiFileSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, VideoSource.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.MultiFileSource

        /**
         * The uri of the file/resource to use. You can set a start index,
         * a stop index and a sequence pattern.
         * The format is <multifile://start:stop\`location-pattern>`.
         * The pattern uses printf string formating.
         * 
         * Example uris:
         * 
         * multifile:///home/you/image\%03d.jpg
         * 
         * multifile://20:50`/`home/you/sequence/\%04d.png
         */
        uri?: string | null
    }

}

interface MultiFileSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.MultiFileSource

    /**
     * The uri of the file/resource to use. You can set a start index,
     * a stop index and a sequence pattern.
     * The format is <multifile://start:stop\`location-pattern>`.
     * The pattern uses printf string formating.
     * 
     * Example uris:
     * 
     * multifile:///home/you/image\%03d.jpg
     * 
     * multifile://20:50`/`home/you/sequence/\%04d.png
     */
    readonly uri: string | null
    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.MultiFileSource

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Outputs the video stream from a given image sequence. The start frame chosen
 * will be determined by the in-point property on the track element.
 * 
 * This should not be used anymore, the `imagesequence://` protocol should be
 * used instead. Check the #imagesequencesrc GStreamer element for more
 * information.
 * @class 
 */
class MultiFileSource extends VideoSource {

    // Own properties of GES-1.0.GES.MultiFileSource

    static name: string

    // Constructors of GES-1.0.GES.MultiFileSource

    constructor(config?: MultiFileSource.ConstructorProperties) 
    constructor(uri: string | null) 
    static new(uri: string | null): MultiFileSource
    _init(config?: MultiFileSource.ConstructorProperties): void
}

module Operation {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, TrackElement.ConstructorProperties {
    }

}

interface Operation extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Operation

    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.Operation

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for overlays, transitions, and effects
 * @class 
 */
class Operation extends TrackElement {

    // Own properties of GES-1.0.GES.Operation

    static name: string

    // Constructors of GES-1.0.GES.Operation

    constructor(config?: Operation.ConstructorProperties) 
    _init(config?: Operation.ConstructorProperties): void
}

module OperationClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Clip.ConstructorProperties {
    }

}

interface OperationClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.OperationClip

    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.OperationClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Operations are any kind of object that both outputs AND consumes data.
 * @class 
 */
class OperationClip extends Clip {

    // Own properties of GES-1.0.GES.OperationClip

    static name: string

    // Constructors of GES-1.0.GES.OperationClip

    constructor(config?: OperationClip.ConstructorProperties) 
    _init(config?: OperationClip.ConstructorProperties): void
}

module OverlayClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, OperationClip.ConstructorProperties {
    }

}

interface OverlayClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.OverlayClip

    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.OverlayClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Overlays are objects which modify the underlying layer(s).
 * 
 * Examples of overlays include text, image watermarks, or audio dubbing.
 * 
 * Transitions, which change from one source to another over time, are
 * not considered overlays.
 * @class 
 */
class OverlayClip extends OperationClip {

    // Own properties of GES-1.0.GES.OverlayClip

    static name: string

    // Constructors of GES-1.0.GES.OverlayClip

    constructor(config?: OverlayClip.ConstructorProperties) 
    _init(config?: OverlayClip.ConstructorProperties): void
}

module Pipeline {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.ChildProxy.ConstructorProperties, GstVideo.VideoOverlay.ConstructorProperties, Gst.Pipeline.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Pipeline

        /**
         * The audio filter(s) to apply during playback in preview mode,
         * immediately before the #GESPipeline:audio-sink. This exposes the
         * #playsink:audio-filter property of the internal #playsink.
         */
        audio_filter?: Gst.Element | null
        /**
         * The audio sink used for preview. This exposes the
         * #playsink:audio-sink property of the internal #playsink.
         */
        audio_sink?: Gst.Element | null
        /**
         * The pipeline's mode. In preview mode (for audio or video, or both)
         * the pipeline can display the timeline's content to an end user. In
         * rendering mode the pipeline can encode the timeline's content and
         * save it to a file.
         */
        mode?: PipelineFlags | null
        /**
         * The timeline used by this pipeline, whose content it will play and
         * render, or %NULL if the pipeline does not yet have a timeline.
         * 
         * Note that after you set the timeline for the first time, subsequent
         * calls to change the timeline will fail.
         */
        timeline?: Timeline | null
        /**
         * The video filter(s) to apply during playback in preview mode,
         * immediately before the #GESPipeline:video-sink. This exposes the
         * #playsink:video-filter property of the internal #playsink.
         */
        video_filter?: Gst.Element | null
        /**
         * The video sink used for preview. This exposes the
         * #playsink:video-sink property of the internal #playsink.
         */
        video_sink?: Gst.Element | null
    }

}

interface Pipeline extends Gst.ChildProxy, GstVideo.VideoOverlay {

    // Own properties of GES-1.0.GES.Pipeline

    /**
     * The audio filter(s) to apply during playback in preview mode,
     * immediately before the #GESPipeline:audio-sink. This exposes the
     * #playsink:audio-filter property of the internal #playsink.
     */
    audioFilter: Gst.Element
    /**
     * The audio sink used for preview. This exposes the
     * #playsink:audio-sink property of the internal #playsink.
     */
    audioSink: Gst.Element
    /**
     * The pipeline's mode. In preview mode (for audio or video, or both)
     * the pipeline can display the timeline's content to an end user. In
     * rendering mode the pipeline can encode the timeline's content and
     * save it to a file.
     */
    mode: PipelineFlags
    /**
     * The timeline used by this pipeline, whose content it will play and
     * render, or %NULL if the pipeline does not yet have a timeline.
     * 
     * Note that after you set the timeline for the first time, subsequent
     * calls to change the timeline will fail.
     */
    timeline: Timeline
    /**
     * The video filter(s) to apply during playback in preview mode,
     * immediately before the #GESPipeline:video-sink. This exposes the
     * #playsink:video-filter property of the internal #playsink.
     */
    videoFilter: Gst.Element
    /**
     * The video sink used for preview. This exposes the
     * #playsink:video-sink property of the internal #playsink.
     */
    videoSink: Gst.Element
    __gtype__: number

    // Conflicting properties

    object: any

    // Owm methods of GES-1.0.GES.Pipeline

    /**
     * Gets the #GESPipeline:mode of the pipeline.
     * @returns The current mode of @pipeline.
     */
    getMode(): PipelineFlags
    /**
     * Gets a sample from the pipeline of the currently displayed image in
     * preview, in the specified format.
     * 
     * Note that if you use "ANY" caps for `caps,` then the current format of
     * the image is used. You can retrieve these caps from the returned sample
     * with gst_sample_get_caps().
     * @param caps Some caps to specifying the desired format, or #GST_CAPS_ANY to use the native format
     * @returns A sample of @self's current image preview in the format given by @caps, or %NULL if an error prevented fetching the sample.
     */
    getThumbnail(caps: Gst.Caps): Gst.Sample | null
    /**
     * Gets a sample from the pipeline of the currently displayed image in
     * preview, in the 24-bit "RGB" format and of the desired width and
     * height.
     * 
     * See ges_pipeline_get_thumbnail().
     * @param width The requested pixel width of the image, or -1 to use the native size
     * @param height The requested pixel height of the image, or -1 to use the native size
     * @returns A sample of @self's current image preview in the "RGB" format, scaled to @width and @height, or %NULL if an error prevented fetching the sample.
     */
    getThumbnailRgb24(width: number, height: number): Gst.Sample | null
    /**
     * Gets the #GESPipeline:audio-sink of the pipeline.
     * @returns The audio sink used by @self for preview.
     */
    previewGetAudioSink(): Gst.Element | null
    /**
     * Gets the #GESPipeline:video-sink of the pipeline.
     * @returns The video sink used by @self for preview.
     */
    previewGetVideoSink(): Gst.Element | null
    /**
     * Sets the #GESPipeline:audio-sink of the pipeline.
     * @param sink A audio sink for `self` to use for preview
     */
    previewSetAudioSink(sink: Gst.Element | null): void
    /**
     * Sets the #GESPipeline:video-sink of the pipeline.
     * @param sink A video sink for `self` to use for preview
     */
    previewSetVideoSink(sink: Gst.Element | null): void
    /**
     * Saves the currently displayed image of the pipeline in preview to the
     * given location, in the specified dimensions and format.
     * @param width The requested pixel width of the image, or -1 to use the native size
     * @param height The requested pixel height of the image, or -1 to use the native size
     * @param format The desired mime type (for example, "image/jpeg")
     * @param location The path to save the thumbnail to
     * @returns %TRUE if @self's current image preview was successfully saved to @location using the given @format, @height and @width.
     */
    saveThumbnail(width: number, height: number, format: string, location: string): boolean
    /**
     * Sets the #GESPipeline:mode of the pipeline.
     * 
     * Note that the pipeline will be set to #GST_STATE_NULL during this call to
     * perform the necessary changes. You will need to set the state again yourself
     * after calling this.
     * 
     * > **NOTE**: [Rendering settings](ges_pipeline_set_render_settings) need to be
     * > set before setting `mode` to #GES_PIPELINE_MODE_RENDER or
     * > #GES_PIPELINE_MODE_SMART_RENDER, the call to this method will fail
     * > otherwise.
     * @param mode The mode to set for `pipeline`
     * @returns %TRUE if the mode of @pipeline was successfully set to @mode.
     */
    setMode(mode: PipelineFlags): boolean
    /**
     * Specifies encoding setting to be used by the pipeline to render its
     * #GESPipeline:timeline, and where the result should be written to.
     * 
     * This method **must** be called before setting the pipeline mode to
     * #GES_PIPELINE_MODE_RENDER.
     * @param outputUri The URI to save the #GESPipeline:timeline rendering result to
     * @param profile The encoding to use for rendering the #GESPipeline:timeline
     * @returns %TRUE if the settings were successfully set on @pipeline.
     */
    setRenderSettings(outputUri: string, profile: GstPbutils.EncodingProfile): boolean
    /**
     * Takes the given timeline and sets it as the #GESPipeline:timeline for
     * the pipeline.
     * 
     * Note that you should only call this method once on a given pipeline
     * because a pipeline can not have its #GESPipeline:timeline changed after
     * it has been set.
     * @param timeline The timeline to set for `pipeline`
     * @returns %TRUE if @timeline was successfully given to @pipeline.
     */
    setTimeline(timeline: Timeline): boolean

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
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
    /**
     * Gets the #GstBus of `pipeline`. The bus allows applications to receive
     * #GstMessage packets.
     * @returns a #GstBus, unref after usage. MT safe.
     */
    getBus(): Gst.Bus

    // Overloads of getBus

    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     * @returns the element's #GstBus. unref after usage. MT safe.
     */
    getBus(): Gst.Bus | null
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     * @returns the element's #GstBus. unref after usage. MT safe.
     */
    getBus(): Gst.Bus | null

    // Class property signals of GES-1.0.GES.Pipeline

    connect(sigName: "notify::audio-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-filter", ...args: any[]): void
    connect(sigName: "notify::audio-sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-sink", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::timeline", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeline", ...args: any[]): void
    connect(sigName: "notify::video-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-filter", ...args: any[]): void
    connect(sigName: "notify::video-sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-sink", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-flush-bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-flush-bus", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESPipeline can take an audio-video #GESTimeline and conveniently
 * link its #GESTrack-s to an internal #playsink element, for
 * preview/playback, and an internal #encodebin element, for rendering.
 * You can switch between these modes using ges_pipeline_set_mode().
 * 
 * You can choose the specific audio and video sinks used for previewing
 * the timeline by setting the #GESPipeline:audio-sink and
 * #GESPipeline:video-sink properties.
 * 
 * You can set the encoding and save location used in rendering by calling
 * ges_pipeline_set_render_settings().
 * @class 
 */
class Pipeline extends Gst.Pipeline {

    // Own properties of GES-1.0.GES.Pipeline

    static name: string

    // Constructors of GES-1.0.GES.Pipeline

    constructor(config?: Pipeline.ConstructorProperties) 
    /**
     * Creates a new pipeline.
     * @constructor 
     * @returns The newly created pipeline.
     */
    constructor() 
    /**
     * Creates a new pipeline.
     * @constructor 
     * @returns The newly created pipeline.
     */
    static new(): Pipeline

    // Overloads of new

    /**
     * Create a new pipeline with the given name.
     * @constructor 
     * @param name name of new pipeline
     * @returns newly created GstPipeline MT safe.
     */
    static new(name: string | null): Gst.Pipeline
    _init(config?: Pipeline.ConstructorProperties): void
}

module PitiviFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, Formatter.ConstructorProperties {
    }

}

interface PitiviFormatter extends Extractable {

    // Own properties of GES-1.0.GES.PitiviFormatter

    __gtype__: number

    // Own fields of GES-1.0.GES.PitiviFormatter

    parent: Formatter & GObject.InitiallyUnowned

    // Class property signals of GES-1.0.GES.PitiviFormatter

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
 * This is a legacy format and you should avoid to use it. The formatter
 * is really not in good shape and is deprecated.
 * @class 
 */
class PitiviFormatter extends Formatter {

    // Own properties of GES-1.0.GES.PitiviFormatter

    static name: string

    // Constructors of GES-1.0.GES.PitiviFormatter

    constructor(config?: PitiviFormatter.ConstructorProperties) 
    constructor() 
    static new(): PitiviFormatter
    _init(config?: PitiviFormatter.ConstructorProperties): void
}

module Project {

    // Signal callback interfaces

    /**
     * Signal callback interface for `asset-added`
     */
    interface AssetAddedSignalCallback {
        (asset: Asset): void
    }

    /**
     * Signal callback interface for `asset-loading`
     */
    interface AssetLoadingSignalCallback {
        (asset: Asset): void
    }

    /**
     * Signal callback interface for `asset-removed`
     */
    interface AssetRemovedSignalCallback {
        (asset: Asset): void
    }

    /**
     * Signal callback interface for `error-loading`
     */
    interface ErrorLoadingSignalCallback {
        (timeline: Timeline, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `error-loading-asset`
     */
    interface ErrorLoadingAssetSignalCallback {
        (error: GLib.Error, id: string | null, extractableType: GObject.GType): void
    }

    /**
     * Signal callback interface for `loaded`
     */
    interface LoadedSignalCallback {
        (timeline: Timeline): void
    }

    /**
     * Signal callback interface for `loading`
     */
    interface LoadingSignalCallback {
        (timeline: Timeline): void
    }

    /**
     * Signal callback interface for `missing-uri`
     */
    interface MissingUriSignalCallback {
        (error: GLib.Error, wrongAsset: Asset): string | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Asset.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Project

        uri?: string | null
    }

}

interface Project extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.Project

    readonly uri: string | null
    __gtype__: number

    // Own fields of GES-1.0.GES.Project

    parent: Asset & GObject.Object

    // Owm methods of GES-1.0.GES.Project

    /**
     * Adds a #GESAsset to `project,` the project will keep a reference on
     * `asset`.
     * @param asset A #GESAsset to add to `project`
     * @returns %TRUE if the asset could be added %FALSE it was already in the project
     */
    addAsset(asset: Asset): boolean
    /**
     * Adds `profile` to the project. It lets you save in what format
     * the project has been renders and keep a reference to those formats.
     * Also, those formats will be saves to the project file when possible.
     * @param profile A #GstEncodingProfile to add to the project. If a profile with the same name already exists, it will be replaced
     * @returns %TRUE if @profile could be added, %FALSE otherwize
     */
    addEncodingProfile(profile: GstPbutils.EncodingProfile): boolean
    /**
     * Adds a formatter as used to load `project`
     * @param formatter A formatter used by `project`
     */
    addFormatter(formatter: Formatter): void
    /**
     * Create and add a #GESAsset to `project`. You should connect to the
     * "asset-added" signal to get the asset when it finally gets added to
     * `project`
     * @param id The id of the asset to create and add to `project`
     * @param extractableType The #GType of the asset to create
     * @returns %TRUE if the asset started to be added %FALSE it was already in the project
     */
    createAsset(id: string | null, extractableType: GObject.GType): boolean
    /**
     * Create and add a #GESAsset to `project`. You should connect to the
     * "asset-added" signal to get the asset when it finally gets added to
     * `project`
     * @param id The id of the asset to create and add to `project`
     * @param extractableType The #GType of the asset to create
     * @returns The newly created #GESAsset or %NULL.
     */
    createAssetSync(id: string | null, extractableType: GObject.GType): Asset | null
    getAsset(id: string, extractableType: GObject.GType): Asset | null
    /**
     * Get the assets that are being loaded
     * @returns A set of loading asset that will be added to @project. Note that those Asset are *not* loaded yet, and thus can not be used
     */
    getLoadingAssets(): Asset[]
    /**
     * Retrieve the uri that is currently set on `project`
     * @returns a newly allocated string representing uri.
     */
    getUri(): string | null
    /**
     * List all `asset` contained in `project` filtering per extractable_type
     * as defined by `filter`. It copies the asset and thus will not be updated
     * in time.
     * @param filter Type of assets to list, `GES_TYPE_EXTRACTABLE` will list all assets
     * @returns The list of #GESAsset the object contains
     */
    listAssets(filter: GObject.GType): Asset[]
    /**
     * Lists the encoding profile that have been set to `project`. The first one
     * is the latest added.
     * @returns The list of #GstEncodingProfile used in @project
     */
    listEncodingProfiles(): GstPbutils.EncodingProfile[] | null
    /**
     * Loads `project` into `timeline`
     * @param timeline A blank timeline to load `project` into
     * @returns %TRUE if the project could be loaded %FALSE otherwize.
     */
    load(timeline: Timeline): boolean
    /**
     * remove a `asset` to from `project`.
     * @param asset A #GESAsset to remove from `project`
     * @returns %TRUE if the asset could be removed %FALSE otherwise
     */
    removeAsset(asset: Asset): boolean
    /**
     * Save the timeline of `project` to `uri`. You should make sure that `timeline`
     * is one of the timelines that have been extracted from `project`
     * (using ges_asset_extract (`project)`;)
     * @param timeline The #GESTimeline to save, it must have been extracted from `project`
     * @param uri The uri where to save `project` and `timeline`
     * @param formatterAsset The formatter asset to use or %NULL. If %NULL, will try to save in the same format as the one from which the timeline as been loaded or default to the best formatter as defined in #ges_find_formatter_for_uri
     * @param overwrite %TRUE to overwrite file if it exists
     * @returns %TRUE if the project could be save, %FALSE otherwize
     */
    save(timeline: Timeline, uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean

    // Own virtual methods of GES-1.0.GES.Project

    assetAdded(asset: Asset): void
    assetLoading(asset: Asset): void
    assetRemoved(asset: Asset): void
    loaded(timeline: Timeline): boolean
    loading(timeline: Timeline): void
    loadingError(error: GLib.Error, id: string | null, extractableType: GObject.GType): boolean
    missingUri(error: GLib.Error, wrongAsset: Asset): string | null

    // Own signals of GES-1.0.GES.Project

    connect(sigName: "asset-added", callback: Project.AssetAddedSignalCallback): number
    on(sigName: "asset-added", callback: Project.AssetAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-added", callback: Project.AssetAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-added", callback: Project.AssetAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "asset-added", ...args: any[]): void
    connect(sigName: "asset-loading", callback: Project.AssetLoadingSignalCallback): number
    on(sigName: "asset-loading", callback: Project.AssetLoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-loading", callback: Project.AssetLoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-loading", callback: Project.AssetLoadingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "asset-loading", ...args: any[]): void
    connect(sigName: "asset-removed", callback: Project.AssetRemovedSignalCallback): number
    on(sigName: "asset-removed", callback: Project.AssetRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "asset-removed", callback: Project.AssetRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "asset-removed", callback: Project.AssetRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "asset-removed", ...args: any[]): void
    connect(sigName: "error-loading", callback: Project.ErrorLoadingSignalCallback): number
    on(sigName: "error-loading", callback: Project.ErrorLoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading", callback: Project.ErrorLoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading", callback: Project.ErrorLoadingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error-loading", error: GLib.Error, ...args: any[]): void
    connect(sigName: "error-loading-asset", callback: Project.ErrorLoadingAssetSignalCallback): number
    on(sigName: "error-loading-asset", callback: Project.ErrorLoadingAssetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error-loading-asset", callback: Project.ErrorLoadingAssetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error-loading-asset", callback: Project.ErrorLoadingAssetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error-loading-asset", id: string | null, extractableType: GObject.GType, ...args: any[]): void
    connect(sigName: "loaded", callback: Project.LoadedSignalCallback): number
    on(sigName: "loaded", callback: Project.LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: Project.LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: Project.LoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "loaded", ...args: any[]): void
    connect(sigName: "loading", callback: Project.LoadingSignalCallback): number
    on(sigName: "loading", callback: Project.LoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loading", callback: Project.LoadingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loading", callback: Project.LoadingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "loading", ...args: any[]): void
    connect(sigName: "missing-uri", callback: Project.MissingUriSignalCallback): number
    on(sigName: "missing-uri", callback: Project.MissingUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "missing-uri", callback: Project.MissingUriSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "missing-uri", callback: Project.MissingUriSignalCallback): NodeJS.EventEmitter
    emit(sigName: "missing-uri", wrongAsset: Asset, ...args: any[]): void

    // Class property signals of GES-1.0.GES.Project

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GESProject is used to control a set of #GESAsset and is a
 * #GESAsset with `GES_TYPE_TIMELINE` as `extractable_type` itself. That
 * means that you can extract #GESTimeline from a project as followed:
 * 
 * 
 * ```
 *  GESProject *project;
 *  GESTimeline *timeline;
 * 
 *  project = ges_project_new ("file:///path/to/a/valid/project/uri");
 * 
 *  // Here you can connect to the various signal to get more infos about
 *  // what is happening and recover from errors if possible
 *  ...
 * 
 *  timeline = ges_asset_extract (GES_ASSET (project));
 * ```
 * 
 * 
 * The #GESProject class offers a higher level API to handle #GESAsset-s.
 * It lets you request new asset, and it informs you about new assets through
 * a set of signals. Also it handles problem such as missing files/missing
 * #GstElement and lets you try to recover from those.
 * 
 * ## Subprojects
 * 
 * In order to add a subproject, the only thing to do is to add the subproject
 * to the main project:
 * 
 * ``` c
 * ges_project_add_asset (project, GES_ASSET (subproject));
 * ```
 * then the subproject will be serialized in the project files. To use
 * the subproject in a timeline, you should use a #GESUriClip with the
 * same subproject URI.
 * 
 * When loading a project with subproject, subprojects URIs will be temporary
 * writable local files. If you want to edit the subproject timeline,
 * you should retrieve the subproject from the parent project asset list and
 * extract the timeline with ges_asset_extract() and save it at
 * the same temporary location.
 * @class 
 */
class Project extends Asset {

    // Own properties of GES-1.0.GES.Project

    static name: string

    // Constructors of GES-1.0.GES.Project

    constructor(config?: Project.ConstructorProperties) 
    /**
     * Creates a new #GESProject and sets its uri to `uri` if provided. Note that
     * if `uri` is not valid or %NULL, the uri of the project will then be set
     * the first time you save the project. If you then save the project to
     * other locations, it will never be updated again and the first valid URI is
     * the URI it will keep refering to.
     * @constructor 
     * @param uri The uri to be set after creating the project.
     * @returns A newly created #GESProject
     */
    constructor(uri: string | null) 
    /**
     * Creates a new #GESProject and sets its uri to `uri` if provided. Note that
     * if `uri` is not valid or %NULL, the uri of the project will then be set
     * the first time you save the project. If you then save the project to
     * other locations, it will never be updated again and the first valid URI is
     * the URI it will keep refering to.
     * @constructor 
     * @param uri The uri to be set after creating the project.
     * @returns A newly created #GESProject
     */
    static new(uri: string | null): Project
    _init(config?: Project.ConstructorProperties): void
}

module Source {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, TrackElement.ConstructorProperties {
    }

}

interface Source extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Source

    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Own virtual methods of GES-1.0.GES.Source

    /**
     * Creates the GstElement to put in the source topbin. Other elements will be
     * queued, like a volume. In the case of a AudioUriSource, for example, the
     * subclass will return a decodebin, and we will append a volume.
     * @virtual 
     * @returns The source element to use.
     */
    createSource(): Gst.Element
    /**
     * Check whether `pad` should be exposed/used.
     * @virtual 
     * @param pad The pad to check
     * @returns %TRUE if @pad should be used %FALSE otherwise.
     */
    selectPad(pad: Gst.Pad): boolean

    // Class property signals of GES-1.0.GES.Source

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for single-media sources
 * @class 
 */
class Source extends TrackElement {

    // Own properties of GES-1.0.GES.Source

    static name: string

    // Constructors of GES-1.0.GES.Source

    constructor(config?: Source.ConstructorProperties) 
    _init(config?: Source.ConstructorProperties): void
}

module SourceClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Clip.ConstructorProperties {
    }

}

interface SourceClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.SourceClip

    __gtype__: number

    // Own fields of GES-1.0.GES.SourceClip

    parent: Clip & Container & TimelineElement & TimelineElement

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.SourceClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GESSourceClip-s are clips whose core elements are #GESSource-s.
 * 
 * ## Effects
 * 
 * #GESSourceClip-s can also have #GESBaseEffect-s added as non-core
 * elements. These effects are applied to the core sources of the clip
 * that they share a #GESTrack with. See #GESClip for how to add and move
 * these effects from the clip.
 * @class 
 */
class SourceClip extends Clip {

    // Own properties of GES-1.0.GES.SourceClip

    static name: string

    // Constructors of GES-1.0.GES.SourceClip

    constructor(config?: SourceClip.ConstructorProperties) 
    /**
     * Creates a new #GESSourceClip that renders a time overlay on top
     * @constructor 
     * @returns The newly created #GESSourceClip, or %NULL if there was an error.
     */
    static newTimeOverlay(): SourceClip
    _init(config?: SourceClip.ConstructorProperties): void
}

module SourceClipAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, ClipAsset.ConstructorProperties {
    }

}

interface SourceClipAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.SourceClipAsset

    __gtype__: number

    // Conflicting properties

    parent: Asset & GObject.Object & GObject.Object

    // Own fields of GES-1.0.GES.SourceClipAsset

    parentInstance: ClipAsset

    // Class property signals of GES-1.0.GES.SourceClipAsset

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An asset types from which #GESSourceClip will be extracted
 * @class 
 */
class SourceClipAsset extends ClipAsset {

    // Own properties of GES-1.0.GES.SourceClipAsset

    static name: string

    // Constructors of GES-1.0.GES.SourceClipAsset

    constructor(config?: SourceClipAsset.ConstructorProperties) 
    _init(config?: SourceClipAsset.ConstructorProperties): void
}

module TestClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, SourceClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TestClip

        /**
         * The frequency to generate for audio track elements.
         */
        freq?: number | null
        /**
         * Whether the sound will be played or not.
         */
        mute?: boolean | null
        /**
         * The volume for the audio track elements.
         */
        volume?: number | null
        /**
         * Video pattern to display in video track elements.
         */
        vpattern?: VideoTestPattern | null
    }

}

interface TestClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TestClip

    /**
     * The frequency to generate for audio track elements.
     */
    freq: number
    /**
     * Whether the sound will be played or not.
     */
    mute: boolean
    /**
     * The volume for the audio track elements.
     */
    volume: number
    /**
     * Video pattern to display in video track elements.
     */
    vpattern: VideoTestPattern
    __gtype__: number

    // Own fields of GES-1.0.GES.TestClip

    parent: SourceClip & Clip & Container & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.TestClip

    /**
     * Get the frequency `self` generates.
     * @returns The frequency @self generates. See audiotestsrc element.
     */
    getFrequency(): number
    /**
     * Get the volume of the test audio signal applied on `self`.
     * @returns The volume of the test audio signal applied on @self.
     */
    getVolume(): number
    /**
     * Get the #GESVideoTestPattern which is applied on `self`.
     * @returns The #GESVideoTestPattern which is applied on @self.
     */
    getVpattern(): VideoTestPattern
    /**
     * Let you know if the audio track of `self` is muted or not.
     * @returns Whether the audio track of @self is muted or not.
     */
    isMuted(): boolean
    /**
     * Sets the frequency to generate. See audiotestsrc element.
     * @param freq the frequency you want to use on `self`
     */
    setFrequency(freq: number): void
    /**
     * Sets whether the audio track of this clip is muted or not.
     * @param mute %TRUE to mute the audio track, %FALSE to unmute it
     */
    setMute(mute: boolean): void
    /**
     * Sets the volume of the test audio signal.
     * @param volume the volume of the audio signal you want to use on `self`
     */
    setVolume(volume: number): void
    /**
     * Sets which video pattern to display on `self`.
     * @param vpattern the #GESVideoTestPattern to use on `self`
     */
    setVpattern(vpattern: VideoTestPattern): void

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.TestClip

    connect(sigName: "notify::freq", callback: (...args: any[]) => void): number
    on(sigName: "notify::freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::freq", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::freq", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::freq", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::vpattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::vpattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vpattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vpattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vpattern", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Useful for testing purposes.
 * 
 * ## Asset
 * 
 * The default asset ID is GESTestClip, but the framerate and video
 * size can be overridden using an ID of the form:
 * 
 * ```
 * framerate=60/1, width=1920, height=1080, max-duration=5.0
 * ```
 * Note: `max-duration` can be provided in seconds as float, or as GstClockTime
 * as guint64 or gint.
 * @class 
 */
class TestClip extends SourceClip {

    // Own properties of GES-1.0.GES.TestClip

    static name: string

    // Constructors of GES-1.0.GES.TestClip

    constructor(config?: TestClip.ConstructorProperties) 
    /**
     * Creates a new #GESTestClip.
     * @constructor 
     * @returns The newly created #GESTestClip, or %NULL if there was an error.
     */
    constructor() 
    /**
     * Creates a new #GESTestClip.
     * @constructor 
     * @returns The newly created #GESTestClip, or %NULL if there was an error.
     */
    static new(): TestClip
    /**
     * Creates a new #GESTestClip for the provided `nick`.
     * @constructor 
     * @param nick the nickname for which to create the #GESTestClip
     * @returns The newly created #GESTestClip, or %NULL if there was an error.
     */
    static newForNick(nick: string | null): TestClip
    _init(config?: TestClip.ConstructorProperties): void
}

module TextOverlay {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Operation.ConstructorProperties {
    }

}

interface TextOverlay extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TextOverlay

    __gtype__: number

    // Own fields of GES-1.0.GES.TextOverlay

    parent: Operation & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.TextOverlay

    /**
     * Get the color used by `source`.
     * @returns The color used by @source.
     */
    getColor(): number
    /**
     * Get the pango font description currently set on `source`.
     * @returns The pango font description currently set on @source.
     */
    getFontDesc(): string | null
    /**
     * Get the horizontal aligment used by `source`.
     * @returns The horizontal aligment used by @source.
     */
    getHalignment(): TextHAlign
    /**
     * Get the text currently set on `source`.
     * @returns The text currently set on @source.
     */
    getText(): string | null
    /**
     * Get the vertical aligment used by `source`.
     * @returns The vertical aligment used by @source.
     */
    getValignment(): TextVAlign
    /**
     * Get the horizontal position used by `source`.
     * @returns The horizontal position used by @source.
     */
    getXpos(): number
    /**
     * Get the vertical position used by `source`.
     * @returns The vertical position used by @source.
     */
    getYpos(): number
    /**
     * Sets the color of the text.
     * @param color The color `self` is being set to
     */
    setColor(color: number): void
    /**
     * Sets the pango font description of the text this track element
     * will render.
     * @param fontDesc the pango font description
     */
    setFontDesc(fontDesc: string | null): void
    /**
     * Sets the horizontal aligment of the text.
     * @param halign The #GESTextHAlign defining the horizontal alignment of the text render by `self`.
     */
    setHalignment(halign: TextHAlign): void
    /**
     * Sets the text this track element will render.
     * @param text the text to render. an internal copy of this text will be made.
     */
    setText(text: string | null): void
    /**
     * Sets the vertical aligment of the text.
     * @param valign The #GESTextVAlign defining the vertical alignment of the text render by `self`.
     */
    setValignment(valign: TextVAlign): void
    /**
     * Sets the horizontal position of the text.
     * @param position The horizontal position `self` is being set to
     */
    setXpos(position: number): void
    /**
     * Sets the vertical position of the text.
     * @param position The vertical position `self` is being set to
     */
    setYpos(position: number): void

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.TextOverlay

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TextOverlay extends Operation {

    // Own properties of GES-1.0.GES.TextOverlay

    static name: string

    // Constructors of GES-1.0.GES.TextOverlay

    constructor(config?: TextOverlay.ConstructorProperties) 
    /**
     * Creates a new #GESTextOverlay.
     * @constructor 
     * @returns The newly created #GESTextOverlay or %NULL if something went wrong.
     */
    constructor() 
    /**
     * Creates a new #GESTextOverlay.
     * @constructor 
     * @returns The newly created #GESTextOverlay or %NULL if something went wrong.
     */
    static new(): TextOverlay
    _init(config?: TextOverlay.ConstructorProperties): void
}

module TextOverlayClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, OverlayClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TextOverlayClip

        /**
         * The color of the text
         */
        color?: number | null
        /**
         * Pango font description string
         */
        font_desc?: string | null
        /**
         * Horizontal alignment of the text
         */
        halignment?: TextHAlign | null
        /**
         * The text to diplay
         */
        text?: string | null
        /**
         * Vertical alignent of the text
         */
        valignment?: TextVAlign | null
        /**
         * The horizontal position of the text
         */
        xpos?: number | null
        /**
         * The vertical position of the text
         */
        ypos?: number | null
    }

}

interface TextOverlayClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TextOverlayClip

    /**
     * The color of the text
     */
    color: number
    /**
     * Pango font description string
     */
    fontDesc: string | null
    /**
     * Horizontal alignment of the text
     */
    halignment: TextHAlign
    /**
     * The text to diplay
     */
    text: string | null
    /**
     * Vertical alignent of the text
     */
    valignment: TextVAlign
    /**
     * The horizontal position of the text
     */
    xpos: number
    /**
     * The vertical position of the text
     */
    ypos: number
    __gtype__: number

    // Own fields of GES-1.0.GES.TextOverlayClip

    parent: OverlayClip & Container & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.TextOverlayClip

    /**
     * Get the color used by `source`.
     * @returns The color used by @source.
     */
    getColor(): number
    /**
     * Get the pango font description used by `self`.
     * @returns The pango font description used by @self.
     */
    getFontDesc(): string | null
    /**
     * Get the horizontal aligment used by `self`.
     * @returns The horizontal aligment used by @self.
     */
    getHalignment(): TextHAlign
    /**
     * Get the text currently set on `self`.
     * @returns The text currently set on @self.
     */
    getText(): string | null
    /**
     * Get the vertical aligment used by `self`.
     * @returns The vertical aligment used by @self.
     */
    getValignment(): TextVAlign
    /**
     * Get the horizontal position used by `source`.
     * @returns The horizontal position used by @source.
     */
    getXpos(): number
    /**
     * Get the vertical position used by `source`.
     * @returns The vertical position used by @source.
     */
    getYpos(): number
    /**
     * Sets the color of the text.
     * @param color The color `self` is being set to
     */
    setColor(color: number): void
    /**
     * Sets the pango font description of the text
     * @param fontDesc the pango font description
     */
    setFontDesc(fontDesc: string | null): void
    /**
     * Sets the horizontal aligment of the text.
     * @param halign #GESTextHAlign
     */
    setHalign(halign: TextHAlign): void
    /**
     * Sets the text this clip will render.
     * @param text the text to render. an internal copy of this text will be made.
     */
    setText(text: string | null): void
    /**
     * Sets the vertical aligment of the text.
     * @param valign #GESTextVAlign
     */
    setValign(valign: TextVAlign): void
    /**
     * Sets the horizontal position of the text.
     * @param position The horizontal position `self` is being set to
     */
    setXpos(position: number): void
    /**
     * Sets the vertical position of the text.
     * @param position The vertical position `self` is being set to
     */
    setYpos(position: number): void

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.TextOverlayClip

    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::halignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halignment", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::valignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valignment", ...args: any[]): void
    connect(sigName: "notify::xpos", callback: (...args: any[]) => void): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xpos", ...args: any[]): void
    connect(sigName: "notify::ypos", callback: (...args: any[]) => void): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ypos", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Renders text onto the next lower priority stream using textrender.
 * @class 
 */
class TextOverlayClip extends OverlayClip {

    // Own properties of GES-1.0.GES.TextOverlayClip

    static name: string

    // Constructors of GES-1.0.GES.TextOverlayClip

    constructor(config?: TextOverlayClip.ConstructorProperties) 
    /**
     * Creates a new #GESTextOverlayClip
     * @constructor 
     * @returns The newly created #GESTextOverlayClip, or %NULL if there was an error.
     */
    constructor() 
    /**
     * Creates a new #GESTextOverlayClip
     * @constructor 
     * @returns The newly created #GESTextOverlayClip, or %NULL if there was an error.
     */
    static new(): TextOverlayClip
    _init(config?: TextOverlayClip.ConstructorProperties): void
}

module Timeline {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commited`
     */
    interface CommitedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `group-added`
     */
    interface GroupAddedSignalCallback {
        (group: Group): void
    }

    /**
     * Signal callback interface for `group-removed`
     */
    interface GroupRemovedSignalCallback {
        (group: Group, children: Container[]): void
    }

    /**
     * Signal callback interface for `layer-added`
     */
    interface LayerAddedSignalCallback {
        (layer: Layer): void
    }

    /**
     * Signal callback interface for `layer-removed`
     */
    interface LayerRemovedSignalCallback {
        (layer: Layer): void
    }

    /**
     * Signal callback interface for `select-element-track`
     */
    interface SelectElementTrackSignalCallback {
        (clip: Clip, trackElement: TrackElement): Track | null
    }

    /**
     * Signal callback interface for `select-tracks-for-object`
     */
    interface SelectTracksForObjectSignalCallback {
        (clip: Clip, trackElement: TrackElement): Track[]
    }

    /**
     * Signal callback interface for `snapping-ended`
     */
    interface SnappingEndedSignalCallback {
        (obj1: TrackElement, obj2: TrackElement, position: number): void
    }

    /**
     * Signal callback interface for `snapping-started`
     */
    interface SnappingStartedSignalCallback {
        (obj1: TrackElement, obj2: TrackElement, position: number): void
    }

    /**
     * Signal callback interface for `track-added`
     */
    interface TrackAddedSignalCallback {
        (track: Track): void
    }

    /**
     * Signal callback interface for `track-removed`
     */
    interface TrackRemovedSignalCallback {
        (track: Track): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Timeline

        /**
         * Whether to automatically create a transition whenever two
         * #GESSource-s overlap in a track of the timeline. See
         * #GESLayer:auto-transition if you want this to only happen in some
         * layers.
         */
        auto_transition?: boolean | null
        /**
         * The distance (in nanoseconds) at which a #GESTimelineElement being
         * moved within the timeline should snap one of its #GESSource-s with
         * another #GESSource-s edge. See #GESEditMode for which edges can
         * snap during an edit. 0 means no snapping.
         */
        snapping_distance?: number | null
    }

}

interface Timeline extends Extractable, MetaContainer, Gst.ChildProxy {

    // Own properties of GES-1.0.GES.Timeline

    /**
     * Whether to automatically create a transition whenever two
     * #GESSource-s overlap in a track of the timeline. See
     * #GESLayer:auto-transition if you want this to only happen in some
     * layers.
     */
    autoTransition: boolean
    /**
     * The current duration (in nanoseconds) of the timeline. A timeline
     * 'starts' at time 0, so this is the maximum end time of all of its
     * #GESTimelineElement-s.
     */
    readonly duration: number
    /**
     * The distance (in nanoseconds) at which a #GESTimelineElement being
     * moved within the timeline should snap one of its #GESSource-s with
     * another #GESSource-s edge. See #GESEditMode for which edges can
     * snap during an edit. 0 means no snapping.
     */
    snappingDistance: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GES-1.0.GES.Timeline

    parent: Gst.Bin & Gst.Object
    /**
     * A list of #GESLayer-s sorted by
     * priority. NOTE: Do not modify.
     * @field 
     */
    layers: Layer[]
    /**
     * Deprecated:1.10: (element-type GES.Track): This is not thread
     * safe, use #ges_timeline_get_tracks instead.
     * @field 
     */
    tracks: any[]

    // Owm methods of GES-1.0.GES.Timeline

    /**
     * Add a layer to the timeline.
     * 
     * If the layer contains #GESClip-s, then this may trigger the creation of
     * their core track element children for the timeline's tracks, and the
     * placement of the clip's children in the tracks of the timeline using
     * #GESTimeline::select-tracks-for-object. Some errors may occur if this
     * would break one of the configuration rules of the timeline in one of
     * its tracks. In such cases, some track elements would fail to be added
     * to their tracks, but this method would still return %TRUE. As such, it
     * is advised that you only add clips to layers that already part of a
     * timeline. In such situations, ges_layer_add_clip() is able to fail if
     * adding the clip would cause such an error.
     * @param layer The layer to add
     * @returns %TRUE if @layer was properly added.
     */
    addLayer(layer: Layer): boolean
    /**
     * Add a track to the timeline.
     * 
     * If the timeline already contains clips, then this may trigger the
     * creation of their core track element children for the track, and the
     * placement of the clip's children in the track of the timeline using
     * #GESTimeline::select-tracks-for-object. Some errors may occur if this
     * would break one of the configuration rules for the timeline in the
     * track. In such cases, some track elements would fail to be added to the
     * track, but this method would still return %TRUE. As such, it is advised
     * that you avoid adding tracks to timelines that already contain clips.
     * @param track The track to add
     * @returns %TRUE if @track was properly added.
     */
    addTrack(track: Track): boolean
    /**
     * Append a newly created layer to the timeline. The layer will
     * be added at the lowest #GESLayer:priority (numerically, the highest).
     * @returns The newly created layer.
     */
    appendLayer(): Layer
    /**
     * Commit all the pending changes of the clips contained in the
     * timeline.
     * 
     * When changes happen in a timeline, they are not immediately executed
     * internally, in a way that effects the output data of the timeline. You
     * should call this method when you are done with a set of changes and you
     * want them to be executed.
     * 
     * Any pending changes will be executed in the backend. The
     * #GESTimeline::commited signal will be emitted once this has completed.
     * You should not try to change the state of the timeline, seek it or add
     * tracks to it before receiving this signal. You can use
     * ges_timeline_commit_sync() if you do not want to perform other tasks in
     * the mean time.
     * 
     * Note that all the pending changes will automatically be executed when
     * the timeline goes from #GST_STATE_READY to #GST_STATE_PAUSED, which is
     * usually triggered by a corresponding state changes in a containing
     * #GESPipeline.
     * @returns %TRUE if pending changes were committed, or %FALSE if nothing needed to be committed.
     */
    commit(): boolean
    /**
     * Commit all the pending changes of the clips contained in the
     * timeline and wait for the changes to complete.
     * 
     * See ges_timeline_commit().
     * @returns %TRUE if pending changes were committed, or %FALSE if nothing needed to be committed.
     */
    commitSync(): boolean
    /**
     * WARNING: When using that mode, GES won't guarantee the coherence of the
     * timeline. You need to ensure that the rules described in the [Overlaps and
     * auto transitions](#overlaps-and-autotransitions) section are respected any time
     * the timeline is [commited](ges_timeline_commit) (otherwise playback will most
     * probably fail in different ways).
     * 
     * When disabling editing APIs, GES won't be able to enforce the rules that
     * makes the timeline overall state to be valid but some feature won't be
     * usable:
     *   * #GESTimeline:snapping-distance
     *   * #GESTimeline:auto-transition
     * @param disableEditApis %TRUE to disable all the edit APIs so the user is in full control of ensuring timeline state validity %FALSE otherwise.
     */
    disableEditApis(disableEditApis: boolean): void
    /**
     * Freezes the timeline from being committed. This is usually needed while the
     * timeline is being rendered to ensure that not change to the timeline are
     * taken into account during that moment. Once the rendering is done, you
     * should call #ges_timeline_thaw_commit so that committing becomes possible
     * again and any call to `commit()` that happened during the rendering is
     * actually taken into account.
     */
    freezeCommit(): void
    /**
     * Gets #GESTimeline:auto-transition for the timeline.
     * @returns The auto-transition of @self.
     */
    getAutoTransition(): boolean
    /**
     * Get the current #GESTimeline:duration of the timeline
     * @returns The current duration of @timeline.
     */
    getDuration(): Gst.ClockTime
    getEditApisDisabled(): boolean
    /**
     * Gets the element contained in the timeline with the given name.
     * @param name The name of the element to find
     * @returns The timeline element in @timeline with the given @name, or %NULL if it was not found.
     */
    getElement(name: string): TimelineElement | null
    /**
     * This method allows you to convert a timeline #GstClockTime into its
     * corresponding #GESFrameNumber in the timeline's output.
     * @param timestamp The timestamp to get the corresponding frame number of
     * @returns The frame number @timestamp corresponds to.
     */
    getFrameAt(timestamp: Gst.ClockTime): FrameNumber
    /**
     * This method allows you to convert a timeline output frame number into a
     * timeline #GstClockTime. For example, this time could be used to seek to a
     * particular frame in the timeline's output, or as the edit position for
     * an element within the timeline.
     * @param frameNumber The frame number to get the corresponding timestamp of in the                timeline coordinates
     * @returns The timestamp corresponding to @frame_number in the output of @self.
     */
    getFrameTime(frameNumber: FrameNumber): Gst.ClockTime
    /**
     * Get the list of #GESGroup-s present in the timeline.
     * @returns The list of groups that contain clips present in @timeline's layers. Must not be changed.
     */
    getGroups(): Group[]
    /**
     * Retrieve the layer whose index in the timeline matches the given
     * priority.
     * @param priority The priority/index of the layer to find
     * @returns The layer with the given @priority, or %NULL if none was found. Since 1.6
     */
    getLayer(priority: number): Layer | null
    /**
     * Get the list of #GESLayer-s present in the timeline.
     * @returns The list of layers present in @timeline sorted by priority.
     */
    getLayers(): Layer[]
    /**
     * Search for the #GstPad corresponding to the given timeline's track.
     * You can link to this pad to receive the output data of the given track.
     * @param track A track
     * @returns The pad corresponding to @track, or %NULL if there is an error.
     */
    getPadForTrack(track: Track): Gst.Pad | null
    /**
     * Gets the #GESTimeline:snapping-distance for the timeline.
     * @returns The snapping distance (in nanoseconds) of @timeline.
     */
    getSnappingDistance(): Gst.ClockTime
    /**
     * Search for the #GESTrack corresponding to the given timeline's pad.
     * @param pad A pad
     * @returns The track corresponding to @pad, or %NULL if there is an error.
     */
    getTrackForPad(pad: Gst.Pad): Track | null
    /**
     * Get the list of #GESTrack-s used by the timeline.
     * @returns The list of tracks used by @timeline.
     */
    getTracks(): Track[]
    /**
     * Check whether the timeline is empty or not.
     * @returns %TRUE if @timeline is empty.
     */
    isEmpty(): boolean
    /**
     * Loads the contents of URI into the timeline.
     * @param uri The URI to load from
     * @returns %TRUE if the timeline was loaded successfully from @uri.
     */
    loadFromUri(uri: string): boolean
    /**
     * Moves a layer within the timeline to the index given by
     * `new_layer_priority`.
     * An index of 0 corresponds to the layer with the highest priority in a
     * timeline. If `new_layer_priority` is greater than the number of layers
     * present in the timeline, it will become the lowest priority layer.
     * @param layer A layer within `timeline,` whose priority should be changed
     * @param newLayerPriority The new index for `layer`
     */
    moveLayer(layer: Layer, newLayerPriority: number): boolean
    /**
     * Paste an element inside the timeline. `element` **must** be the return of
     * ges_timeline_element_copy() with `deep=TRUE`,
     * and it should not be changed before pasting. `element` itself is not
     * placed in the timeline, instead a new element is created, alike to the
     * originally copied element. Note that the originally copied element must
     * also lie within `timeline,` at both the point of copying and pasting.
     * 
     * Pasting may fail if it would place the timeline in an unsupported
     * configuration.
     * 
     * After calling this function `element` should not be used. In particular,
     * `element` can **not** be pasted again. Instead, you can copy the
     * returned element and paste that copy (although, this is only possible
     * if the paste was successful).
     * 
     * See also ges_timeline_element_paste().
     * @param element The element to paste
     * @param position The position in the timeline `element` should be pasted to, i.e. the #GESTimelineElement:start value for the pasted element.
     * @param layerPriority The layer into which the element should be pasted. -1 means paste to the same layer from which `element` has been copied from
     * @returns The newly created element, or %NULL if pasting fails.
     */
    pasteElement(element: TimelineElement, position: Gst.ClockTime, layerPriority: number): TimelineElement | null
    /**
     * Removes a layer from the timeline.
     * @param layer The layer to remove
     * @returns %TRUE if @layer was properly removed.
     */
    removeLayer(layer: Layer): boolean
    /**
     * Remove a track from the timeline.
     * @param track The track to remove
     * @returns %TRUE if @track was properly removed.
     */
    removeTrack(track: Track): boolean
    /**
     * Saves the timeline to the given location. If `formatter_asset` is %NULL,
     * the method will attempt to save in the same format the timeline was
     * loaded from, before defaulting to the formatter with highest rank.
     * @param uri The location to save to
     * @param formatterAsset The formatter asset to use, or %NULL
     * @param overwrite %TRUE to overwrite file if it exists
     * @returns %TRUE if @timeline was successfully saved to @uri.
     */
    saveToUri(uri: string, formatterAsset: Asset | null, overwrite: boolean): boolean
    /**
     * Sets #GESTimeline:auto-transition for the timeline. This will also set
     * the corresponding #GESLayer:auto-transition for all of the timeline's
     * layers to the same value. See ges_layer_set_auto_transition() if you
     * wish to set the layer's #GESLayer:auto-transition individually.
     * @param autoTransition Whether transitions should be automatically added to `timeline'`s layers
     */
    setAutoTransition(autoTransition: boolean): void
    /**
     * Sets #GESTimeline:snapping-distance for the timeline. This new value
     * will only effect future snappings and will not be used to snap the
     * current element positions within the timeline.
     * @param snappingDistance The snapping distance to use (in nanoseconds)
     */
    setSnappingDistance(snappingDistance: Gst.ClockTime): void
    /**
     * Thaw the timeline so that comiting becomes possible
     * again and any call to `commit()` that happened during the rendering is
     * actually taken into account.
     */
    thawCommit(): void

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void

    // Own virtual methods of GES-1.0.GES.Timeline

    groupAdded(group: Group): void
    layerAdded(layer: Layer): void
    layerRemoved(layer: Layer): void
    trackAdded(track: Track): void
    trackRemoved(track: Track): void

    // Own signals of GES-1.0.GES.Timeline

    connect(sigName: "commited", callback: Timeline.CommitedSignalCallback): number
    on(sigName: "commited", callback: Timeline.CommitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: Timeline.CommitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: Timeline.CommitedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "commited", ...args: any[]): void
    connect(sigName: "group-added", callback: Timeline.GroupAddedSignalCallback): number
    on(sigName: "group-added", callback: Timeline.GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-added", callback: Timeline.GroupAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-added", callback: Timeline.GroupAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-added", ...args: any[]): void
    connect(sigName: "group-removed", callback: Timeline.GroupRemovedSignalCallback): number
    on(sigName: "group-removed", callback: Timeline.GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "group-removed", callback: Timeline.GroupRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "group-removed", callback: Timeline.GroupRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "group-removed", children: Container[], ...args: any[]): void
    connect(sigName: "layer-added", callback: Timeline.LayerAddedSignalCallback): number
    on(sigName: "layer-added", callback: Timeline.LayerAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-added", callback: Timeline.LayerAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-added", callback: Timeline.LayerAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layer-added", ...args: any[]): void
    connect(sigName: "layer-removed", callback: Timeline.LayerRemovedSignalCallback): number
    on(sigName: "layer-removed", callback: Timeline.LayerRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layer-removed", callback: Timeline.LayerRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layer-removed", callback: Timeline.LayerRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layer-removed", ...args: any[]): void
    connect(sigName: "select-element-track", callback: Timeline.SelectElementTrackSignalCallback): number
    on(sigName: "select-element-track", callback: Timeline.SelectElementTrackSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-element-track", callback: Timeline.SelectElementTrackSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-element-track", callback: Timeline.SelectElementTrackSignalCallback): NodeJS.EventEmitter
    emit(sigName: "select-element-track", trackElement: TrackElement, ...args: any[]): void
    connect(sigName: "select-tracks-for-object", callback: Timeline.SelectTracksForObjectSignalCallback): number
    on(sigName: "select-tracks-for-object", callback: Timeline.SelectTracksForObjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "select-tracks-for-object", callback: Timeline.SelectTracksForObjectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "select-tracks-for-object", callback: Timeline.SelectTracksForObjectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "select-tracks-for-object", trackElement: TrackElement, ...args: any[]): void
    connect(sigName: "snapping-ended", callback: Timeline.SnappingEndedSignalCallback): number
    on(sigName: "snapping-ended", callback: Timeline.SnappingEndedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-ended", callback: Timeline.SnappingEndedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-ended", callback: Timeline.SnappingEndedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "snapping-ended", obj2: TrackElement, position: number, ...args: any[]): void
    connect(sigName: "snapping-started", callback: Timeline.SnappingStartedSignalCallback): number
    on(sigName: "snapping-started", callback: Timeline.SnappingStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "snapping-started", callback: Timeline.SnappingStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "snapping-started", callback: Timeline.SnappingStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "snapping-started", obj2: TrackElement, position: number, ...args: any[]): void
    connect(sigName: "track-added", callback: Timeline.TrackAddedSignalCallback): number
    on(sigName: "track-added", callback: Timeline.TrackAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-added", callback: Timeline.TrackAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-added", callback: Timeline.TrackAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "track-added", ...args: any[]): void
    connect(sigName: "track-removed", callback: Timeline.TrackRemovedSignalCallback): number
    on(sigName: "track-removed", callback: Timeline.TrackRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-removed", callback: Timeline.TrackRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-removed", callback: Timeline.TrackRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "track-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.Timeline

    connect(sigName: "notify::auto-transition", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-transition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-transition", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-transition", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-transition", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): number
    on(sigName: "notify::snapping-distance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snapping-distance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snapping-distance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snapping-distance", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GESTimeline is the central object for any multimedia timeline.
 * 
 * A timeline is composed of a set of #GESTrack-s and a set of
 * #GESLayer-s, which are added to the timeline using
 * ges_timeline_add_track() and ges_timeline_append_layer(), respectively.
 * 
 * The contained tracks define the supported types of the timeline
 * and provide the media output. Essentially, each track provides an
 * additional source #GstPad.
 * 
 * Most usage of a timeline will likely only need a single #GESAudioTrack
 * and/or a single #GESVideoTrack. You can create such a timeline with
 * ges_timeline_new_audio_video(). After this, you are unlikely to need to
 * work with the tracks directly.
 * 
 * A timeline's layers contain #GESClip-s, which in turn control the
 * creation of #GESTrackElement-s, which are added to the timeline's
 * tracks. See #GESTimeline::select-tracks-for-object if you wish to have
 * more control over which track a clip's elements are added to.
 * 
 * The layers are ordered, with higher priority layers having their
 * content prioritised in the tracks. This ordering can be changed using
 * ges_timeline_move_layer().
 * 
 * ## Editing
 * 
 * See #GESTimelineElement for the various ways the elements of a timeline
 * can be edited.
 * 
 * If you change the timing or ordering of a timeline's
 * #GESTimelineElement-s, then these changes will not actually be taken
 * into account in the output of the timeline's tracks until the
 * ges_timeline_commit() method is called. This allows you to move its
 * elements around, say, in response to an end user's mouse dragging, with
 * little expense before finalising their effect on the produced data.
 * 
 * ## Overlaps and Auto-Transitions
 * 
 * There are certain restrictions placed on how #GESSource-s may overlap
 * in a #GESTrack that belongs to a timeline. These will be enforced by
 * GES, so the user will not need to keep track of them, but they should
 * be aware that certain edits will be refused as a result if the overlap
 * rules would be broken.
 * 
 * Consider two #GESSource-s, `A` and `B`, with start times `startA` and
 * `startB`, and end times `endA` and `endB`, respectively. The start
 * time refers to their #GESTimelineElement:start, and the end time is
 * their #GESTimelineElement:start + #GESTimelineElement:duration. These
 * two sources *overlap* if:
 * 
 * + they share the same #GESTrackElement:track (non %NULL), which belongs
 *   to the timeline;
 * + they share the same #GES_TIMELINE_ELEMENT_LAYER_PRIORITY; and
 * + `startA < endB` and `startB < endA `.
 * 
 * Note that when `startA = endB` or `startB = endA` then the two sources
 * will *touch* at their edges, but are not considered overlapping.
 * 
 * If, in addition, `startA < startB < endA`, then we can say that the
 * end of `A` overlaps the start of `B`.
 * 
 * If, instead, `startA <= startB` and `endA >= endB`, then we can say
 * that `A` fully overlaps `B`.
 * 
 * The overlap rules for a timeline are that:
 * 
 * 1. One source cannot fully overlap another source.
 * 2. A source can only overlap the end of up to one other source at its
 *    start.
 * 3. A source can only overlap the start of up to one other source at its
 *    end.
 * 
 * The last two rules combined essentially mean that at any given timeline
 * position, only up to two #GESSource-s may overlap at that position. So
 * triple or more overlaps are not allowed.
 * 
 * If you switch on #GESTimeline:auto-transition, then at any moment when
 * the end of one source (the first source) overlaps the start of another
 * (the second source), a #GESTransitionClip will be automatically created
 * for the pair in the same layer and it will cover their overlap. If the
 * two elements are edited in a way such that the end of the first source
 * no longer overlaps the start of the second, the transition will be
 * automatically removed from the timeline. However, if the two sources
 * still overlap at the same edges after the edit, then the same
 * transition object will be kept, but with its timing and layer adjusted
 * accordingly.
 * 
 * NOTE: if you know what you are doing and want to be in full control of the
 * timeline layout, you can disable the edit APIs with
 * #ges_timeline_disable_edit_apis.
 * 
 * ## Saving
 * 
 * To save/load a timeline, you can use the ges_timeline_load_from_uri()
 * and ges_timeline_save_to_uri() methods that use the default format.
 * 
 * ## Playing
 * 
 * A timeline is a #GstBin with a source #GstPad for each of its
 * tracks, which you can fetch with ges_timeline_get_pad_for_track(). You
 * will likely want to link these to some compatible sink #GstElement-s to
 * be able to play or capture the content of the timeline.
 * 
 * You can use a #GESPipeline to easily preview/play the timeline's
 * content, or render it to a file.
 * @class 
 */
class Timeline extends Gst.Bin {

    // Own properties of GES-1.0.GES.Timeline

    static name: string

    // Constructors of GES-1.0.GES.Timeline

    constructor(config?: Timeline.ConstructorProperties) 
    /**
     * Creates a new empty timeline.
     * @constructor 
     * @returns The new timeline.
     */
    constructor() 
    /**
     * Creates a new empty timeline.
     * @constructor 
     * @returns The new timeline.
     */
    static new(): Timeline

    // Overloads of new

    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     * @returns a new #GstBin
     */
    static new(name: string | null): Gst.Bin
    /**
     * Creates a new timeline containing a single #GESAudioTrack and a
     * single #GESVideoTrack.
     * @constructor 
     * @returns The new timeline.
     */
    static newAudioVideo(): Timeline
    /**
     * Creates a timeline from the given URI.
     * @constructor 
     * @param uri The URI to load from
     * @returns A new timeline if the uri was loaded successfully, or %NULL if the uri could not be loaded.
     */
    static newFromUri(uri: string): Timeline
    _init(config?: Timeline.ConstructorProperties): void
}

module TimelineElement {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-property-added`
     */
    interface ChildPropertyAddedSignalCallback {
        (propObject: GObject.Object, prop: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `child-property-removed`
     */
    interface ChildPropertyRemovedSignalCallback {
        (propObject: GObject.Object, prop: GObject.ParamSpec): void
    }

    /**
     * Signal callback interface for `deep-notify`
     */
    interface DeepNotifySignalCallback {
        (propObject: GObject.Object, prop: GObject.ParamSpec): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TimelineElement

        /**
         * The duration that the element is in effect for in the timeline (a
         * time difference in nanoseconds using the time coordinates of the
         * timeline). For example, for a source element, this would determine
         * for how long it should output its internal content for. For an
         * operation element, this would determine for how long its effect
         * should be applied to any source content.
         */
        duration?: number | null
        /**
         * The initial offset to use internally when outputting content (in
         * nanoseconds, but in the time coordinates of the internal content).
         * 
         * For example, for a #GESVideoUriSource that references some media
         * file, the "internal content" is the media file data, and the
         * in-point would correspond to some timestamp in the media file.
         * When playing the timeline, and when the element is first reached at
         * timeline-time #GESTimelineElement:start, it will begin outputting the
         * data from the timestamp in-point **onwards**, until it reaches the
         * end of its #GESTimelineElement:duration in the timeline.
         * 
         * For elements that have no internal content, this should be kept
         * as 0.
         */
        in_point?: number | null
        /**
         * The full duration of internal content that is available (a time
         * difference in nanoseconds using the time coordinates of the internal
         * content).
         * 
         * This will act as a cap on the #GESTimelineElement:in-point of the
         * element (which is in the same time coordinates), and will sometimes
         * be used to limit the #GESTimelineElement:duration of the element in
         * the timeline.
         * 
         * For example, for a #GESVideoUriSource that references some media
         * file, this would be the length of the media file.
         * 
         * For elements that have no internal content, or whose content is
         * indefinite, this should be kept as #GST_CLOCK_TIME_NONE.
         */
        max_duration?: number | null
        /**
         * The name of the element. This should be unique within its timeline.
         */
        name?: string | null
        /**
         * The parent container of the element.
         */
        parent?: TimelineElement | null
        /**
         * The priority of the element.
         */
        priority?: number | null
        /**
         * Whether the element should be serialized.
         */
        serialize?: boolean | null
        /**
         * The starting position of the element in the timeline (in nanoseconds
         * and in the time coordinates of the timeline). For example, for a
         * source element, this would determine the time at which it should
         * start outputting its internal content. For an operation element, this
         * would determine the time at which it should start applying its effect
         * to any source content.
         */
        start?: number | null
        /**
         * The timeline that the element lies within.
         */
        timeline?: Timeline | null
    }

}

interface TimelineElement extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TimelineElement

    /**
     * The initial offset to use internally when outputting content (in
     * nanoseconds, but in the time coordinates of the internal content).
     * 
     * For example, for a #GESVideoUriSource that references some media
     * file, the "internal content" is the media file data, and the
     * in-point would correspond to some timestamp in the media file.
     * When playing the timeline, and when the element is first reached at
     * timeline-time #GESTimelineElement:start, it will begin outputting the
     * data from the timestamp in-point **onwards**, until it reaches the
     * end of its #GESTimelineElement:duration in the timeline.
     * 
     * For elements that have no internal content, this should be kept
     * as 0.
     */
    inPoint: number
    /**
     * The full duration of internal content that is available (a time
     * difference in nanoseconds using the time coordinates of the internal
     * content).
     * 
     * This will act as a cap on the #GESTimelineElement:in-point of the
     * element (which is in the same time coordinates), and will sometimes
     * be used to limit the #GESTimelineElement:duration of the element in
     * the timeline.
     * 
     * For example, for a #GESVideoUriSource that references some media
     * file, this would be the length of the media file.
     * 
     * For elements that have no internal content, or whose content is
     * indefinite, this should be kept as #GST_CLOCK_TIME_NONE.
     */
    maxDuration: number
    /**
     * Whether the element should be serialized.
     */
    serialize: boolean
    __gtype__: number

    // Own fields of GES-1.0.GES.TimelineElement

    parentInstance: GObject.InitiallyUnowned
    /**
     * The #GESTimelineElement:parent of the element
     * @field 
     */
    parent: TimelineElement
    /**
     * The #GESAsset from which the object has been extracted
     * @field 
     */
    asset: Asset
    /**
     * The #GESTimelineElement:start of the element
     * @field 
     */
    start: Gst.ClockTime
    /**
     * The #GESTimelineElement:in-point of the element
     * @field 
     */
    inpoint: Gst.ClockTime
    /**
     * The #GESTimelineElement:duration of the element
     * @field 
     */
    duration: Gst.ClockTime
    /**
     * The #GESTimelineElement:max-duration of the element
     * @field 
     */
    maxduration: Gst.ClockTime
    /**
     * The #GESTimelineElement:priority of the element
     * @field 
     */
    priority: number
    /**
     * The #GESTimelineElement:timeline of the element
     * @field 
     */
    timeline: Timeline
    /**
     * The #GESTimelineElement:name of the element
     * @field 
     */
    name: string | null

    // Owm methods of GES-1.0.GES.TimelineElement

    /**
     * Register a property of a child of the element to allow it to be
     * written with ges_timeline_element_set_child_property() and read with
     * ges_timeline_element_get_child_property(). A change in the property
     * will also appear in the #GESTimelineElement::deep-notify signal.
     * 
     * `pspec` should be unique from other children properties that have been
     * registered on `self`.
     * @param pspec The specification for the property to add
     * @param child The #GstObject who the property belongs to
     * @returns %TRUE if the property was successfully registered.
     */
    addChildProperty(pspec: GObject.ParamSpec, child: GObject.Object): boolean
    /**
     * Create a copy of `self`. All the properties of `self` are copied into
     * a new element, with the exception of #GESTimelineElement:parent,
     * #GESTimelineElement:timeline and #GESTimelineElement:name. Other data,
     * such the list of a #GESContainer's children, is **not** copied.
     * 
     * If `deep` is %TRUE, then the new element is prepared so that it can be
     * used in ges_timeline_element_paste() or ges_timeline_paste_element().
     * In the case of copying a #GESContainer, this ensures that the children
     * of `self` will also be pasted. The new element should not be used for
     * anything else and can only be used **once** in a pasting operation. In
     * particular, the new element itself is not an actual 'deep' copy of
     * `self,` but should be thought of as an intermediate object used for a
     * single paste operation.
     * @param deep Whether the copy is needed for pasting
     * @returns The newly create element, copied from @self.
     */
    copy(deep: boolean): TimelineElement
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Edits the element within its timeline by adjusting its
     * #GESTimelineElement:start, #GESTimelineElement:duration or
     * #GESTimelineElement:in-point, and potentially doing the same for
     * other elements in the timeline. See #GESEditMode for details about each
     * edit mode. An edit may fail if it would place one of these properties
     * out of bounds, or if it would place the timeline in an unsupported
     * configuration.
     * 
     * Note that if you act on a #GESTrackElement, this will edit its parent
     * #GESClip instead. Moreover, for any #GESTimelineElement, if you select
     * #GES_EDGE_NONE for #GES_EDIT_MODE_NORMAL or #GES_EDIT_MODE_RIPPLE, this
     * will edit the toplevel instead, but still in such a way as to make the
     * #GESTimelineElement:start of `self` reach the edit `position`.
     * 
     * Note that if the element's timeline has a
     * #GESTimeline:snapping-distance set, then the edit position may be
     * snapped to the edge of some element under the edited element.
     * 
     * `new_layer_priority` can be used to switch `self,` and other elements
     * moved by the edit, to a new layer. New layers may be be created if the
     * the corresponding layer priority/index does not yet exist for the
     * timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    editFull(newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Gets the property of a child of the element.
     * 
     * `property_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to get (as used in g_object_get()), and "TypeName" is the type name of
     * the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will have the corresponding
     * property copied into `value`.
     * 
     * Note that ges_timeline_element_get_child_properties() may be more
     * convenient for C programming.
     * @param propertyName The name of the child property to get
     * @returns %TRUE if the property was found and copied to @value.
     */
    getChildProperty(propertyName: string): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Gets the property of a child of the element. Specifically, the property
     * corresponding to the `pspec` used in
     * ges_timeline_element_add_child_property() is copied into `value`.
     * @param pspec The specification of a registered child property to get
     */
    getChildPropertyByPspec(pspec: GObject.ParamSpec): /* value */ any
    /**
     * Gets the #GESTimelineElement:duration for the element.
     * @returns The duration of @self (in nanoseconds).
     */
    getDuration(): Gst.ClockTime
    /**
     * Gets the #GESTimelineElement:in-point for the element.
     * @returns The in-point of @self (in nanoseconds).
     */
    getInpoint(): Gst.ClockTime
    // Has conflict: getLayerPriority(): number
    /**
     * Gets the #GESTimelineElement:max-duration for the element.
     * @returns The max-duration of @self (in nanoseconds).
     */
    getMaxDuration(): Gst.ClockTime
    /**
     * Gets the #GESTimelineElement:name for the element.
     * @returns The name of @self.
     */
    getName(): string | null
    // Has conflict: getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    /**
     * Gets the #GESTimelineElement:parent for the element.
     * @returns The parent of @self, or %NULL if @self has no parent.
     */
    getParent(): TimelineElement | null
    /**
     * Gets the #GESTimelineElement:priority for the element.
     * @returns The priority of @self.
     */
    getPriority(): number
    /**
     * Gets the #GESTimelineElement:start for the element.
     * @returns The start of @self (in nanoseconds).
     */
    getStart(): Gst.ClockTime
    /**
     * Gets the #GESTimelineElement:timeline for the element.
     * @returns The timeline of @self, or %NULL if @self has no timeline.
     */
    getTimeline(): Timeline | null
    /**
     * Gets the toplevel #GESTimelineElement:parent of the element.
     * @returns The toplevel parent of @self.
     */
    getToplevelParent(): TimelineElement
    // Has conflict: getTrackTypes(): TrackType
    /**
     * Get a list of children properties of the element, which is a list of
     * all the specifications passed to
     * ges_timeline_element_add_child_property().
     * @returns An array of #GParamSpec corresponding to the child properties of @self, or %NULL if something went wrong.
     */
    listChildrenProperties(): GObject.ParamSpec[]
    // Has conflict: lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Paste an element inside the same timeline and layer as `self`. `self`
     * **must** be the return of ges_timeline_element_copy() with `deep=TRUE`,
     * and it should not be changed before pasting.
     * `self` is not placed in the timeline, instead a new element is created,
     * alike to the originally copied element. Note that the originally
     * copied element must stay within the same timeline and layer, at both
     * the point of copying and pasting.
     * 
     * Pasting may fail if it would place the timeline in an unsupported
     * configuration.
     * 
     * After calling this function `element` should not be used. In particular,
     * `element` can **not** be pasted again. Instead, you can copy the
     * returned element and paste that copy (although, this is only possible
     * if the paste was successful).
     * 
     * See also ges_timeline_paste_element().
     * @param pastePosition The position in the timeline `element` should be pasted to, i.e. the #GESTimelineElement:start value for the pasted element.
     * @returns The newly created element, or %NULL if pasting fails.
     */
    paste(pastePosition: Gst.ClockTime): TimelineElement | null
    /**
     * Remove a child property from the element. `pspec` should be a
     * specification that was passed to
     * ges_timeline_element_add_child_property(). The corresponding property
     * will no longer be registered as a child property for the element.
     * @param pspec The specification for the property to remove
     * @returns %TRUE if the property was successfully un-registered for @self.
     */
    removeChildProperty(pspec: GObject.ParamSpec): boolean
    // Has conflict: ripple(start: Gst.ClockTime): boolean
    // Has conflict: rippleEnd(end: Gst.ClockTime): boolean
    // Has conflict: rollEnd(end: Gst.ClockTime): boolean
    // Has conflict: rollStart(start: Gst.ClockTime): boolean
    // Has conflict: setChildProperty(propertyName: string, value: any): boolean
    /**
     * Sets the property of a child of the element. Specifically, the property
     * corresponding to the `pspec` used in
     * ges_timeline_element_add_child_property() is set to `value`.
     * @param pspec The specification of a registered child property to set
     * @param value The value to set the property to
     */
    setChildPropertyByPspec(pspec: GObject.ParamSpec, value: any): void
    // Has conflict: setChildPropertyFull(propertyName: string, value: any): boolean
    // Has conflict: setDuration(duration: Gst.ClockTime): boolean
    // Has conflict: setInpoint(inpoint: Gst.ClockTime): boolean
    // Has conflict: setMaxDuration(maxduration: Gst.ClockTime): boolean
    /**
     * Sets the #GESTimelineElement:name for the element. If %NULL is given
     * for `name,` then the library will instead generate a new name based on
     * the type name of the element, such as the name "uriclip3" for a
     * #GESUriClip, and will set that name instead.
     * 
     * If `self` already has a #GESTimelineElement:timeline, you should not
     * call this function with `name` set to %NULL.
     * 
     * You should ensure that, within each #GESTimeline, every element has a
     * unique name. If you call this function with `name` as %NULL, then
     * the library should ensure that the set generated name is unique from
     * previously **generated** names. However, if you choose a `name` that
     * interferes with the naming conventions of the library, the library will
     * attempt to ensure that the generated names will not conflict with the
     * chosen name, which may lead to a different name being set instead, but
     * the uniqueness between generated and user-chosen names is not
     * guaranteed.
     * @param name The name `self` should take
     * @returns %TRUE if @name or a generated name for @self could be set.
     */
    setName(name: string | null): boolean
    // Has conflict: setParent(parent: TimelineElement): boolean
    // Has conflict: setPriority(priority: number): boolean
    // Has conflict: setStart(start: Gst.ClockTime): boolean
    /**
     * Sets the #GESTimelineElement:timeline of the element.
     * 
     * This is used internally and you should normally not call this. A
     * #GESClip will have its #GESTimelineElement:timeline set through its
     * #GESLayer. A #GESTrack will similarly take care of setting the
     * #GESTimelineElement:timeline of its #GESTrackElement-s. A #GESGroup
     * will adopt the same #GESTimelineElement:timeline as its children.
     * 
     * If `timeline` is %NULL, this will stop its current
     * #GESTimelineElement:timeline from tracking it, otherwise `timeline` will
     * start tracking `self`. Note, in the latter case, `self` must not already
     * have a timeline set. Therefore, if you wish to switch timelines, you
     * will need to call this function twice: first to set the timeline to
     * %NULL, and then to the new timeline.
     * @param timeline 
     * @returns %TRUE if @timeline could be set for @self.
     */
    setTimeline(timeline: Timeline): boolean
    // Has conflict: trim(start: Gst.ClockTime): boolean

    // Own virtual methods of GES-1.0.GES.TimelineElement

    deepCopy(copy: TimelineElement): void
    /**
     * Gets the priority of the layer the element is in. A #GESGroup may span
     * several layers, so this would return the highest priority (numerically,
     * the smallest) amongst them.
     * @virtual 
     * @returns The priority of the layer @self is in, or #GES_TIMELINE_ELEMENT_NO_LAYER_PRIORITY if @self does not exist in a layer.
     */
    getLayerPriority(): number
    /**
     * Get the "natural" framerate of `self`. This is to say, for example
     * for a #GESVideoUriSource the framerate of the source.
     * 
     * Note that a #GESAudioSource may also have a natural framerate if it derives
     * from the same #GESSourceClip asset as a #GESVideoSource, and its value will
     * be that of the video source. For example, if the uri of a #GESUriClip points
     * to a file that contains both a video and audio stream, then the corresponding
     * #GESAudioUriSource will share the natural framerate of the corresponding
     * #GESVideoUriSource.
     * @virtual 
     * @returns Whether @self has a natural framerate or not, @framerate_n and @framerate_d will be set to, respectively, 0 and -1 if it is not the case.
     */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    /**
     * Gets the track types that the element can interact with, i.e. the type
     * of #GESTrack it can exist in, or will create #GESTrackElement-s for.
     * @virtual 
     * @returns The track types that @self supports.
     */
    getTrackTypes(): TrackType
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Edits the start time of an element within its timeline in ripple mode.
     * See ges_timeline_element_edit() with #GES_EDIT_MODE_RIPPLE and
     * #GES_EDGE_NONE.
     * @virtual 
     * @param start The new start time of `self` in ripple mode
     * @returns %TRUE if the ripple edit of @self completed, %FALSE on failure.
     */
    ripple(start: number): boolean
    /**
     * Edits the end time of an element within its timeline in ripple mode.
     * See ges_timeline_element_edit() with #GES_EDIT_MODE_RIPPLE and
     * #GES_EDGE_END.
     * @virtual 
     * @param end The new end time of `self` in ripple mode
     * @returns %TRUE if the ripple edit of @self completed, %FALSE on failure.
     */
    rippleEnd(end: number): boolean
    /**
     * Edits the end time of an element within its timeline in roll mode.
     * See ges_timeline_element_edit() with #GES_EDIT_MODE_ROLL and
     * #GES_EDGE_END.
     * @virtual 
     * @param end The new end time of `self` in roll mode
     * @returns %TRUE if the roll edit of @self completed, %FALSE on failure.
     */
    rollEnd(end: number): boolean
    /**
     * Edits the start time of an element within its timeline in roll mode.
     * See ges_timeline_element_edit() with #GES_EDIT_MODE_ROLL and
     * #GES_EDGE_START.
     * @virtual 
     * @param start The new start time of `self` in roll mode
     * @returns %TRUE if the roll edit of @self completed, %FALSE on failure.
     */
    rollStart(start: number): boolean
    /**
     * Method for setting the child property given by
     * `pspec` on `child` to `value`. Default implementation will use
     * g_object_set_property().
     * @virtual 
     * @param child 
     * @param pspec 
     * @param value 
     */
    setChildProperty(child: GObject.Object, pspec: GObject.ParamSpec, value: any): void
    /**
     * Similar to `set_child_property,` except setting can fail, with the `error`
     * being optionally set. Default implementation will call `set_child_property`
     * and return %TRUE.
     * @virtual 
     * @param child 
     * @param pspec 
     * @param value 
     */
    setChildPropertyFull(child: GObject.Object, pspec: GObject.ParamSpec, value: any): boolean
    /**
     * Sets #GESTimelineElement:duration for the element.
     * 
     * Whilst the element is part of a #GESTimeline, this is the same as
     * editing the element with ges_timeline_element_edit() under
     * #GES_EDIT_MODE_TRIM with #GES_EDGE_END. In particular, the
     * #GESTimelineElement:duration of the element may be snapped to a
     * different timeline time difference from the one given. In addition,
     * setting may fail if it would place the timeline in an unsupported
     * configuration, or the element does not have enough internal content to
     * last the desired duration.
     * @virtual 
     * @param duration The desired duration in its timeline
     * @returns %TRUE if @duration could be set for @self.
     */
    setDuration(duration: Gst.ClockTime): boolean
    /**
     * Sets #GESTimelineElement:in-point for the element. If the new in-point
     * is above the current #GESTimelineElement:max-duration of the element,
     * this method will fail.
     * @virtual 
     * @param inpoint The in-point, in internal time coordinates
     * @returns %TRUE if @inpoint could be set for @self.
     */
    setInpoint(inpoint: Gst.ClockTime): boolean
    /**
     * Sets #GESTimelineElement:max-duration for the element. If the new
     * maximum duration is below the current #GESTimelineElement:in-point of
     * the element, this method will fail.
     * @virtual 
     * @param maxduration The maximum duration, in internal time coordinates
     * @returns %TRUE if @maxduration could be set for @self.
     */
    setMaxDuration(maxduration: Gst.ClockTime): boolean
    /**
     * Sets the #GESTimelineElement:parent for the element.
     * 
     * This is used internally and you should normally not call this. A
     * #GESContainer will set the #GESTimelineElement:parent of its children
     * in ges_container_add() and ges_container_remove().
     * 
     * Note, if `parent` is not %NULL, `self` must not already have a parent
     * set. Therefore, if you wish to switch parents, you will need to call
     * this function twice: first to set the parent to %NULL, and then to the
     * new parent.
     * 
     * If `parent` is not %NULL, you must ensure it already has a
     * (non-floating) reference to `self` before calling this.
     * @virtual 
     * @param parent 
     * @returns %TRUE if @parent could be set for @self.
     */
    setParent(parent: TimelineElement): boolean
    /**
     * Sets the priority of the element within the containing layer.
     * @virtual 
     * @param priority The priority
     * @returns %TRUE if @priority could be set for @self.
     */
    setPriority(priority: number): boolean
    /**
     * Sets #GESTimelineElement:start for the element. If the element has a
     * parent, this will also move its siblings with the same shift.
     * 
     * Whilst the element is part of a #GESTimeline, this is the same as
     * editing the element with ges_timeline_element_edit() under
     * #GES_EDIT_MODE_NORMAL with #GES_EDGE_NONE. In particular, the
     * #GESTimelineElement:start of the element may be snapped to a different
     * timeline time from the one given. In addition, setting may fail if it
     * would place the timeline in an unsupported configuration.
     * @virtual 
     * @param start The desired start position of the element in its timeline
     * @returns %TRUE if @start could be set for @self.
     */
    setStart(start: Gst.ClockTime): boolean
    /**
     * Edits the start time of an element within its timeline in trim mode.
     * See ges_timeline_element_edit() with #GES_EDIT_MODE_TRIM and
     * #GES_EDGE_START.
     * @virtual 
     * @param start The new start time of `self` in trim mode
     * @returns %TRUE if the trim edit of @self completed, %FALSE on failure.
     */
    trim(start: number): boolean

    // Own signals of GES-1.0.GES.TimelineElement

    connect(sigName: "child-property-added", callback: TimelineElement.ChildPropertyAddedSignalCallback): number
    on(sigName: "child-property-added", callback: TimelineElement.ChildPropertyAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-added", callback: TimelineElement.ChildPropertyAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-added", callback: TimelineElement.ChildPropertyAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-property-added", prop: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "child-property-removed", callback: TimelineElement.ChildPropertyRemovedSignalCallback): number
    on(sigName: "child-property-removed", callback: TimelineElement.ChildPropertyRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-property-removed", callback: TimelineElement.ChildPropertyRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-property-removed", callback: TimelineElement.ChildPropertyRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-property-removed", prop: GObject.ParamSpec, ...args: any[]): void
    connect(sigName: "deep-notify", callback: TimelineElement.DeepNotifySignalCallback): number
    on(sigName: "deep-notify", callback: TimelineElement.DeepNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: TimelineElement.DeepNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: TimelineElement.DeepNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "deep-notify", prop: GObject.ParamSpec, ...args: any[]): void

    // Class property signals of GES-1.0.GES.TimelineElement

    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
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
 * A #GESTimelineElement will have some temporal extent in its
 * corresponding #GESTimelineElement:timeline, controlled by its
 * #GESTimelineElement:start and #GESTimelineElement:duration. This
 * determines when its content will be displayed, or its effect applied,
 * in the timeline. Several objects may overlap within a given
 * #GESTimeline, in which case their #GESTimelineElement:priority is used
 * to determine their ordering in the timeline. Priority is mostly handled
 * internally by #GESLayer-s and #GESClip-s.
 * 
 * A timeline element can have a #GESTimelineElement:parent,
 * such as a #GESClip, which is responsible for controlling its timing.
 * 
 * ## Editing
 * 
 * Elements can be moved around in their #GESTimelineElement:timeline by
 * setting their #GESTimelineElement:start and
 * #GESTimelineElement:duration using ges_timeline_element_set_start()
 * and ges_timeline_element_set_duration(). Additionally, which parts of
 * the underlying content are played in the timeline can be adjusted by
 * setting the #GESTimelineElement:in-point using
 * ges_timeline_element_set_inpoint(). The library also provides
 * ges_timeline_element_edit(), with various #GESEditMode-s, which can
 * adjust these properties in a convenient way, as well as introduce
 * similar changes in neighbouring or later elements in the timeline.
 * 
 * However, a timeline may refuse a change in these properties if they
 * would place the timeline in an unsupported configuration. See
 * #GESTimeline for its overlap rules.
 * 
 * Additionally, an edit may be refused if it would place one of the
 * timing properties out of bounds (such as a negative time value for
 * #GESTimelineElement:start, or having insufficient internal
 * content to last for the desired #GESTimelineElement:duration).
 * 
 * ## Time Coordinates
 * 
 * There are three main sets of time coordinates to consider when using
 * timeline elements:
 * 
 * + Timeline coordinates: these are the time coordinates used in the
 *   output of the timeline in its #GESTrack-s. Each track share the same
 *   coordinates, so there is only one set of coordinates for the
 *   timeline. These extend indefinitely from 0. The times used for
 *   editing (including setting #GESTimelineElement:start and
 *   #GESTimelineElement:duration) use these coordinates, since these
 *   define when an element is present and for how long the element lasts
 *   for in the timeline.
 * + Internal source coordinates: these are the time coordinates used
 *   internally at the element's output. This is only really defined for
 *   #GESTrackElement-s, where it refers to time coordinates used at the
 *   final source pad of the wrapped #GstElement-s. However, these
 *   coordinates may also be used in a #GESClip in reference to its
 *   children. In particular, these are the coordinates used for
 *   #GESTimelineElement:in-point and #GESTimelineElement:max-duration.
 * + Internal sink coordinates: these are the time coordinates used
 *   internally at the element's input. A #GESSource has no input, so
 *   these would be undefined. Otherwise, for most #GESTrackElement-s
 *   these will be the same set of coordinates as the internal source
 *   coordinates because the element does not change the timing
 *   internally. Only #GESBaseEffect can support elements where these
 *   are different. See #GESBaseEffect for more information.
 * 
 * You can determine the timeline time for a given internal source time
 * in a #GESTrack in a #GESClip using
 * ges_clip_get_timeline_time_from_internal_time(), and vice versa using
 * ges_clip_get_internal_time_from_timeline_time(), for the purposes of
 * editing and setting timings properties.
 * 
 * ## Children Properties
 * 
 * If a timeline element owns another #GstObject and wishes to expose
 * some of its properties, it can do so by registering the property as one
 * of the timeline element's children properties using
 * ges_timeline_element_add_child_property(). The registered property of
 * the child can then be read and set using the
 * ges_timeline_element_get_child_property() and
 * ges_timeline_element_set_child_property() methods, respectively. Some
 * sub-classed objects will be created with pre-registered children
 * properties; for example, to expose part of an underlying #GstElement
 * that is used internally. The registered properties can be listed with
 * ges_timeline_element_list_children_properties().
 * @class 
 */
class TimelineElement extends GObject.InitiallyUnowned {

    // Own properties of GES-1.0.GES.TimelineElement

    static name: string

    // Constructors of GES-1.0.GES.TimelineElement

    constructor(config?: TimelineElement.ConstructorProperties) 
    _init(config?: TimelineElement.ConstructorProperties): void
}

module TitleClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, SourceClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TitleClip

        /**
         * The background of the text
         */
        background?: number | null
        /**
         * The color of the text
         */
        color?: number | null
        /**
         * Pango font description string
         */
        font_desc?: string | null
        /**
         * Horizontal alignment of the text
         */
        halignment?: TextHAlign | null
        /**
         * The text to diplay
         */
        text?: string | null
        /**
         * Vertical alignent of the text
         */
        valignment?: TextVAlign | null
        /**
         * The horizontal position of the text
         */
        xpos?: number | null
        /**
         * The vertical position of the text
         */
        ypos?: number | null
    }

}

interface TitleClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TitleClip

    /**
     * The background of the text
     */
    background: number
    /**
     * The color of the text
     */
    color: number
    /**
     * Pango font description string
     */
    fontDesc: string | null
    /**
     * Horizontal alignment of the text
     */
    halignment: TextHAlign
    /**
     * The text to diplay
     */
    text: string | null
    /**
     * Vertical alignent of the text
     */
    valignment: TextVAlign
    /**
     * The horizontal position of the text
     */
    xpos: number
    /**
     * The vertical position of the text
     */
    ypos: number
    __gtype__: number

    // Own fields of GES-1.0.GES.TitleClip

    parent: SourceClip & Clip & Container & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.TitleClip

    /**
     * Get the background used by `self`.
     * @returns The color used by @self.
     */
    getBackgroundColor(): number
    /**
     * Get the pango font description used by `self`.
     * @returns The pango font description used by @self.
     */
    getFontDesc(): string | null
    /**
     * Get the horizontal aligment used by `self`.
     * @returns The horizontal aligment used by @self.
     */
    getHalignment(): TextHAlign
    /**
     * Get the text currently set on `self`.
     * @returns The text currently set on @self.
     */
    getText(): string | null
    /**
     * Get the color used by `self`.
     * @returns The color used by @self.
     */
    getTextColor(): number
    /**
     * Get the vertical aligment used by `self`.
     * @returns The vertical aligment used by @self.
     */
    getValignment(): TextVAlign
    /**
     * Get the horizontal position used by `self`.
     * @returns The horizontal position used by @self.
     */
    getXpos(): number
    /**
     * Get the vertical position used by `self`.
     * @returns The vertical position used by @self.
     */
    getYpos(): number
    /**
     * Sets the background of the text.
     * @param background The color `self` is being set to
     */
    setBackground(background: number): void
    /**
     * Sets the color of the text.
     * @param color The color `self` is being set to
     */
    setColor(color: number): void
    /**
     * Sets the pango font description of the text.
     * @param fontDesc the pango font description
     */
    setFontDesc(fontDesc: string | null): void
    /**
     * Sets the horizontal aligment of the text.
     * @param halign #GESTextHAlign
     */
    setHalignment(halign: TextHAlign): void
    /**
     * Sets the text this clip will render.
     * @param text the text to render. an internal copy of this text will be made.
     */
    setText(text: string | null): void
    /**
     * Sets the vertical aligment of the text.
     * @param valign #GESTextVAlign
     */
    setValignment(valign: TextVAlign): void
    /**
     * Sets the horizontal position of the text.
     * @param position The horizontal position `self` is being set to
     */
    setXpos(position: number): void
    /**
     * Sets the vertical position of the text.
     * @param position The vertical position `self` is being set to
     */
    setYpos(position: number): void

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.TitleClip

    connect(sigName: "notify::background", callback: (...args: any[]) => void): number
    on(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::color", callback: (...args: any[]) => void): number
    on(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-desc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-desc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::halignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::halignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halignment", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::valignment", callback: (...args: any[]) => void): number
    on(sigName: "notify::valignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valignment", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valignment", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valignment", ...args: any[]): void
    connect(sigName: "notify::xpos", callback: (...args: any[]) => void): number
    on(sigName: "notify::xpos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xpos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xpos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xpos", ...args: any[]): void
    connect(sigName: "notify::ypos", callback: (...args: any[]) => void): number
    on(sigName: "notify::ypos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ypos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ypos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ypos", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Renders the given text in the specified font, at specified position, and
 * with the specified background pattern.
 * @class 
 */
class TitleClip extends SourceClip {

    // Own properties of GES-1.0.GES.TitleClip

    static name: string

    // Constructors of GES-1.0.GES.TitleClip

    constructor(config?: TitleClip.ConstructorProperties) 
    /**
     * Creates a new #GESTitleClip
     * @constructor 
     * @returns The newly created #GESTitleClip, or %NULL if there was an error.
     */
    constructor() 
    /**
     * Creates a new #GESTitleClip
     * @constructor 
     * @returns The newly created #GESTitleClip, or %NULL if there was an error.
     */
    static new(): TitleClip
    _init(config?: TitleClip.ConstructorProperties): void
}

module TitleSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, VideoSource.ConstructorProperties {
    }

}

interface TitleSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TitleSource

    __gtype__: number

    // Own fields of GES-1.0.GES.TitleSource

    parent: VideoSource & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.TitleSource

    /**
     * Get the background used by `source`.
     * @returns The background used by @source.
     */
    getBackgroundColor(): number
    /**
     * Get the pango font description used by `source`.
     * @returns The pango font description used by this @source.
     */
    getFontDesc(): string | null
    /**
     * Get the horizontal aligment used by `source`.
     * @returns The horizontal aligment used by @source.
     */
    getHalignment(): TextHAlign
    /**
     * Get the text currently set on the `source`.
     * @returns The text currently set on the @source.
     */
    getText(): string | null
    /**
     * Get the color used by `source`.
     * @returns The color used by @source.
     */
    getTextColor(): number
    /**
     * Get the vertical aligment used by `source`.
     * @returns The vertical aligment used by @source.
     */
    getValignment(): TextVAlign
    /**
     * Get the horizontal position used by `source`.
     * @returns The horizontal position used by @source.
     */
    getXpos(): number
    /**
     * Get the vertical position used by `source`.
     * @returns The vertical position used by @source.
     */
    getYpos(): number
    /**
     * Sets the color of the background
     * @param color the color `self` is being set to
     */
    setBackgroundColor(color: number): void
    /**
     * Set the pango font description this source will use to render
     * the text.
     * @param fontDesc the pango font description
     */
    setFontDesc(fontDesc: string | null): void
    /**
     * Sets the vertical aligment of the text.
     * @param halign #GESTextHAlign
     */
    setHalignment(halign: TextHAlign): void
    /**
     * Sets the text this track element will render.
     * @param text the text to render. an internal copy of this text will be made.
     */
    setText(text: string | null): void
    /**
     * Sets the color of the text.
     * @param color the color `self` is being set to
     */
    setTextColor(color: number): void
    /**
     * Sets the vertical aligment of the text.
     * @param valign #GESTextVAlign
     */
    setValignment(valign: TextVAlign): void
    /**
     * Sets the horizontal position of the text.
     * @param position the horizontal position `self` is being set to
     */
    setXpos(position: number): void
    /**
     * Sets the vertical position of the text.
     * @param position the color `self` is being set to
     */
    setYpos(position: number): void

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.TitleSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GESTitleSource is a GESTimelineElement that implements the notion
 * of titles in GES.
 * @class 
 */
class TitleSource extends VideoSource {

    // Own properties of GES-1.0.GES.TitleSource

    static name: string

    // Constructors of GES-1.0.GES.TitleSource

    constructor(config?: TitleSource.ConstructorProperties) 
    _init(config?: TitleSource.ConstructorProperties): void
}

module Track {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commited`
     */
    interface CommitedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `track-element-added`
     */
    interface TrackElementAddedSignalCallback {
        (effect: TrackElement): void
    }

    /**
     * Signal callback interface for `track-element-removed`
     */
    interface TrackElementRemovedSignalCallback {
        (effect: TrackElement): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.Track

        /**
         * The capabilities used to choose the output of the #GESTrack's
         * elements. Internally, this is used to select output streams when
         * several may be available, by determining whether its #GstPad is
         * compatible (see #NleObject:caps for #nlecomposition). As such,
         * this is used as a weaker indication of the desired output type of the
         * track, **before** the #GESTrack:restriction-caps is applied.
         * Therefore, this should be set to a *generic* superset of the
         * #GESTrack:restriction-caps, such as "video/x-raw(ANY)". In addition,
         * it should match with the track's #GESTrack:track-type.
         * 
         * Note that when you set this property, the #GstCapsFeatures of all its
         * #GstStructure-s will be automatically set to #GST_CAPS_FEATURES_ANY.
         * 
         * Once a track has been added to a #GESTimeline, you should not change
         * this.
         * 
         * Default value: #GST_CAPS_ANY.
         */
        caps?: Gst.Caps | null
        /**
         * The #nlecomposition:id of the underlying #nlecomposition.
         */
        id?: string | null
        /**
         * Whether the track should support the mixing of #GESLayer data, such
         * as composing the video data of each layer (when part of the video
         * data is transparent, the next layer will become visible) or adding
         * together the audio data. As such, for audio and video tracks, you'll
         * likely want to keep this set to %TRUE.
         */
        mixing?: boolean | null
        /**
         * The capabilities that specifies the final output format of the
         * #GESTrack. For example, for a video track, it would specify the
         * height, width, framerate and other properties of the stream.
         * 
         * You may change this property after the track has been added to a
         * #GESTimeline, but it must remain compatible with the track's
         * #GESTrack:caps.
         * 
         * Default value: #GST_CAPS_ANY.
         */
        restriction_caps?: Gst.Caps | null
        /**
         * The track type of the track. This controls the type of
         * #GESTrackElement-s that can be added to the track. This should
         * match with the track's #GESTrack:caps.
         * 
         * Once a track has been added to a #GESTimeline, you should not change
         * this.
         */
        track_type?: TrackType | null
    }

}

interface Track extends MetaContainer, Gst.ChildProxy {

    // Own properties of GES-1.0.GES.Track

    /**
     * The capabilities used to choose the output of the #GESTrack's
     * elements. Internally, this is used to select output streams when
     * several may be available, by determining whether its #GstPad is
     * compatible (see #NleObject:caps for #nlecomposition). As such,
     * this is used as a weaker indication of the desired output type of the
     * track, **before** the #GESTrack:restriction-caps is applied.
     * Therefore, this should be set to a *generic* superset of the
     * #GESTrack:restriction-caps, such as "video/x-raw(ANY)". In addition,
     * it should match with the track's #GESTrack:track-type.
     * 
     * Note that when you set this property, the #GstCapsFeatures of all its
     * #GstStructure-s will be automatically set to #GST_CAPS_FEATURES_ANY.
     * 
     * Once a track has been added to a #GESTimeline, you should not change
     * this.
     * 
     * Default value: #GST_CAPS_ANY.
     */
    readonly caps: Gst.Caps
    /**
     * Current duration of the track
     * 
     * Default value: O
     */
    readonly duration: number
    /**
     * The #nlecomposition:id of the underlying #nlecomposition.
     */
    id: string | null
    /**
     * Whether the track should support the mixing of #GESLayer data, such
     * as composing the video data of each layer (when part of the video
     * data is transparent, the next layer will become visible) or adding
     * together the audio data. As such, for audio and video tracks, you'll
     * likely want to keep this set to %TRUE.
     */
    mixing: boolean
    /**
     * The capabilities that specifies the final output format of the
     * #GESTrack. For example, for a video track, it would specify the
     * height, width, framerate and other properties of the stream.
     * 
     * You may change this property after the track has been added to a
     * #GESTimeline, but it must remain compatible with the track's
     * #GESTrack:caps.
     * 
     * Default value: #GST_CAPS_ANY.
     */
    restrictionCaps: Gst.Caps
    /**
     * The track type of the track. This controls the type of
     * #GESTrackElement-s that can be added to the track. This should
     * match with the track's #GESTrack:caps.
     * 
     * Once a track has been added to a #GESTimeline, you should not change
     * this.
     */
    readonly trackType: TrackType
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GES-1.0.GES.Track

    parent: Gst.Bin & Gst.Object
    /**
     * The #GESTrack:track-type of the track
     * @field 
     */
    type: TrackType

    // Owm methods of GES-1.0.GES.Track

    /**
     * See ges_track_add_element(), which also gives an error.
     * @param object The element to add
     * @returns %TRUE if @object was successfully added to @track.
     */
    addElement(object: TrackElement): boolean

    // Overloads of addElement

    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     * @returns %TRUE if the @element was added
     */
    addElement(element: Gst.Element): boolean
    /**
     * Adds the given track element to the track, which takes ownership of the
     * element.
     * 
     * Note that this can fail if it would break a configuration rule of the
     * track's #GESTimeline.
     * 
     * Note that a #GESTrackElement can only be added to one track.
     * @param object The element to add
     * @returns %TRUE if @object was successfully added to @track.
     */
    addElementFull(object: TrackElement): boolean
    /**
     * Commits all the pending changes for the elements contained in the
     * track.
     * 
     * When changes are made to the timing or priority of elements within a
     * track, they are not directly executed for the underlying
     * #nlecomposition and its children. This method will finally execute
     * these changes so they are reflected in the data output of the track.
     * 
     * Any pending changes will be executed in the backend. The
     * #GESTimeline::commited signal will be emitted once this has completed.
     * 
     * Note that ges_timeline_commit() will call this method on all of its
     * tracks, so you are unlikely to need to use this directly.
     * @returns %TRUE if pending changes were committed, or %FALSE if nothing needed to be committed.
     */
    commit(): boolean
    /**
     * Get the #GESTrack:caps of the track.
     * @returns The caps of @track.
     */
    getCaps(): Gst.Caps | null
    /**
     * Gets the track elements contained in the track. The returned list is
     * sorted by the element's #GESTimelineElement:priority and
     * #GESTimelineElement:start.
     * @returns A list of all the #GESTrackElement-s in @track.
     */
    getElements(): TrackElement[]
    /**
     * Gets the #GESTrack:mixing of the track.
     * @returns Whether @track is mixing.
     */
    getMixing(): boolean
    /**
     * Gets the #GESTrack:restriction-caps of the track.
     * @returns The restriction-caps of @track.
     */
    getRestrictionCaps(): Gst.Caps | null
    /**
     * Get the timeline this track belongs to.
     * @returns The timeline that @track belongs to, or %NULL if it does not belong to a timeline.
     */
    getTimeline(): Timeline | null
    /**
     * See ges_track_remove_element_full(), which also returns an error.
     * @param object The element to remove
     * @returns %TRUE if @object was successfully removed from @track.
     */
    removeElement(object: TrackElement): boolean

    // Overloads of removeElement

    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     * @returns %TRUE if the @element was removed
     */
    removeElement(element: Gst.Element): boolean
    /**
     * Removes the given track element from the track, which revokes
     * ownership of the element.
     * @param object The element to remove
     * @returns %TRUE if @object was successfully removed from @track.
     */
    removeElementFull(object: TrackElement): boolean
    /**
     * Sets the #GESTrack:mixing for the track.
     * @param mixing Whether `track` should be mixing
     */
    setMixing(mixing: boolean): void
    /**
     * Sets the #GESTrack:restriction-caps for the track.
     * 
     * > **NOTE**: Restriction caps are **not** taken into account when
     * > using #GESPipeline:mode=#GES_PIPELINE_MODE_SMART_RENDER.
     * @param caps The new restriction-caps for `track`
     */
    setRestrictionCaps(caps: Gst.Caps): void
    /**
     * Informs the track that it belongs to the given timeline. Calling this
     * does not actually add the track to the timeline. For that, you should
     * use ges_timeline_add_track(), which will also take care of informing
     * the track that it belongs to the timeline. As such, there is no need
     * for you to call this method.
     * @param timeline 
     */
    setTimeline(timeline: Timeline): void
    /**
     * Updates the #GESTrack:restriction-caps of the track using the fields
     * found in the given caps. Each of the #GstStructure-s in `caps` is
     * compared against the existing structure with the same index in the
     * current #GESTrack:restriction-caps. If there is no corresponding
     * existing structure at that index, then the new structure is simply
     * copied to that index. Otherwise, any fields in the new structure are
     * copied into the existing structure. This will replace existing values,
     * and may introduce new ones, but any fields 'missing' in the new
     * structure are left unchanged in the existing structure.
     * 
     * For example, if the existing #GESTrack:restriction-caps are
     * "video/x-raw, width=480, height=360", and the updating caps is
     * "video/x-raw, format=I420, width=500; video/x-bayer, width=400", then
     * the new #GESTrack:restriction-caps after calling this will be
     * "video/x-raw, width=500, height=360, format=I420; video/x-bayer,
     * width=400".
     * @param caps The caps to update the restriction-caps with
     */
    updateRestrictionCaps(caps: Gst.Caps): void

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void

    // Own signals of GES-1.0.GES.Track

    connect(sigName: "commited", callback: Track.CommitedSignalCallback): number
    on(sigName: "commited", callback: Track.CommitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commited", callback: Track.CommitedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commited", callback: Track.CommitedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "commited", ...args: any[]): void
    connect(sigName: "track-element-added", callback: Track.TrackElementAddedSignalCallback): number
    on(sigName: "track-element-added", callback: Track.TrackElementAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-added", callback: Track.TrackElementAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-added", callback: Track.TrackElementAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "track-element-added", ...args: any[]): void
    connect(sigName: "track-element-removed", callback: Track.TrackElementRemovedSignalCallback): number
    on(sigName: "track-element-removed", callback: Track.TrackElementRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "track-element-removed", callback: Track.TrackElementRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "track-element-removed", callback: Track.TrackElementRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "track-element-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.Track

    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::mixing", callback: (...args: any[]) => void): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mixing", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESTrack acts an output source for a #GESTimeline. Each one
 * essentially provides an additional #GstPad for the timeline, with
 * #GESTrack:restriction-caps capabilities. Internally, a track
 * wraps an #nlecomposition filtered by a #capsfilter.
 * 
 * A track will contain a number of #GESTrackElement-s, and its role is
 * to select and activate these elements according to their timings when
 * the timeline in played. For example, a track would activate a
 * #GESSource when its #GESTimelineElement:start is reached by outputting
 * its data for its #GESTimelineElement:duration. Similarly, a
 * #GESOperation would be activated by applying its effect to the source
 * data, starting from its #GESTimelineElement:start time and lasting for
 * its #GESTimelineElement:duration.
 * 
 * For most users, it will usually be sufficient to add newly created
 * tracks to a timeline, but never directly add an element to a track.
 * Whenever a #GESClip is added to a timeline, the clip adds its
 * elements to the timeline's tracks and assumes responsibility for
 * updating them.
 * @class 
 */
class Track extends Gst.Bin {

    // Own properties of GES-1.0.GES.Track

    static name: string

    // Constructors of GES-1.0.GES.Track

    constructor(config?: Track.ConstructorProperties) 
    /**
     * Creates a new track with the given track-type and caps.
     * 
     * If `type` is #GES_TRACK_TYPE_VIDEO, and `caps` is a subset of
     * "video/x-raw(ANY)", then a #GESVideoTrack is created. This will
     * automatically choose a gap creation method suitable for video data. You
     * will likely want to set #GESTrack:restriction-caps separately. You may
     * prefer to use the ges_video_track_new() method instead.
     * 
     * If `type` is #GES_TRACK_TYPE_AUDIO, and `caps` is a subset of
     * "audio/x-raw(ANY)", then a #GESAudioTrack is created. This will
     * automatically choose a gap creation method suitable for audio data, and
     * will set the #GESTrack:restriction-caps to the default for
     * #GESAudioTrack. You may prefer to use the ges_audio_track_new() method
     * instead.
     * 
     * Otherwise, a plain #GESTrack is returned. You will likely want to set
     * the #GESTrack:restriction-caps and call
     * ges_track_set_create_element_for_gap_func() on the returned track.
     * @constructor 
     * @param type The #GESTrack:track-type for the track
     * @param caps The #GESTrack:caps for the track
     * @returns A new track.
     */
    constructor(type: TrackType, caps: Gst.Caps) 
    /**
     * Creates a new track with the given track-type and caps.
     * 
     * If `type` is #GES_TRACK_TYPE_VIDEO, and `caps` is a subset of
     * "video/x-raw(ANY)", then a #GESVideoTrack is created. This will
     * automatically choose a gap creation method suitable for video data. You
     * will likely want to set #GESTrack:restriction-caps separately. You may
     * prefer to use the ges_video_track_new() method instead.
     * 
     * If `type` is #GES_TRACK_TYPE_AUDIO, and `caps` is a subset of
     * "audio/x-raw(ANY)", then a #GESAudioTrack is created. This will
     * automatically choose a gap creation method suitable for audio data, and
     * will set the #GESTrack:restriction-caps to the default for
     * #GESAudioTrack. You may prefer to use the ges_audio_track_new() method
     * instead.
     * 
     * Otherwise, a plain #GESTrack is returned. You will likely want to set
     * the #GESTrack:restriction-caps and call
     * ges_track_set_create_element_for_gap_func() on the returned track.
     * @constructor 
     * @param type The #GESTrack:track-type for the track
     * @param caps The #GESTrack:caps for the track
     * @returns A new track.
     */
    static new(type: TrackType, caps: Gst.Caps): Track

    // Overloads of new

    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     * @returns a new #GstBin
     */
    static new(name: string | null): Gst.Bin
    _init(config?: Track.ConstructorProperties): void
}

module TrackElement {

    // Signal callback interfaces

    /**
     * Signal callback interface for `control-binding-added`
     */
    interface ControlBindingAddedSignalCallback {
        (controlBinding: Gst.ControlBinding): void
    }

    /**
     * Signal callback interface for `control-binding-removed`
     */
    interface ControlBindingRemovedSignalCallback {
        (controlBinding: Gst.ControlBinding): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, TimelineElement.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TrackElement

        /**
         * Whether the effect of the element should be applied in its
         * #GESTrackElement:track. If set to %FALSE, it will not be used in
         * the output of the track.
         */
        active?: boolean | null
        /**
         * Whether the control sources on the element (see
         * ges_track_element_set_control_source()) will be automatically
         * updated whenever the #GESTimelineElement:in-point or out-point of the
         * element change in value.
         * 
         * See ges_track_element_clamp_control_source() for how this is done
         * per control source.
         * 
         * Default value: %TRUE
         */
        auto_clamp_control_sources?: boolean | null
        /**
         * This property is used to determine whether the 'internal time'
         * properties of the element have any meaning. In particular, unless
         * this is set to %TRUE, the #GESTimelineElement:in-point and
         * #GESTimelineElement:max-duration can not be set to any value other
         * than the default 0 and #GST_CLOCK_TIME_NONE, respectively.
         * 
         * If an element has some *internal* *timed* source #GstElement that it
         * reads stream data from as part of its function in a #GESTrack, then
         * you'll likely want to set this to %TRUE to allow the
         * #GESTimelineElement:in-point and #GESTimelineElement:max-duration to
         * be set.
         * 
         * The default value is determined by the #GESTrackElementClass
         * `default_has_internal_source` class property. For most
         * #GESSourceClass-es, this will be %TRUE, with the exception of those
         * that have a potentially *static* source, such as #GESImageSourceClass
         * and #GESTitleSourceClass. Otherwise, this will usually be %FALSE.
         * 
         * For most #GESOperation-s you will likely want to leave this set to
         * %FALSE. The exception may be for an operation that reads some stream
         * data from some private internal source as part of manipulating the
         * input data from the usual linked upstream #GESTrackElement.
         * 
         * For example, you may want to set this to %TRUE for a
         * #GES_TRACK_TYPE_VIDEO operation that wraps a #textoverlay that reads
         * from a subtitle file and places its text on top of the received video
         * data. The #GESTimelineElement:in-point of the element would be used
         * to shift the initial seek time on the #textoverlay away from 0, and
         * the #GESTimelineElement:max-duration could be set to reflect the
         * time at which the subtitle file runs out of data.
         * 
         * Note that GES can not support track elements that have both internal
         * content and manipulate the timing of their data streams (time
         * effects).
         */
        has_internal_source?: boolean | null
        /**
         * The track type of the element, which determines the type of track the
         * element can be added to (see #GESTrack:track-type). This should
         * correspond to the type of data that the element can produce or
         * process.
         */
        track_type?: TrackType | null
    }

}

interface TrackElement extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TrackElement

    /**
     * Whether the effect of the element should be applied in its
     * #GESTrackElement:track. If set to %FALSE, it will not be used in
     * the output of the track.
     */
    active: boolean
    /**
     * Whether the control sources on the element (see
     * ges_track_element_set_control_source()) will be automatically
     * updated whenever the #GESTimelineElement:in-point or out-point of the
     * element change in value.
     * 
     * See ges_track_element_clamp_control_source() for how this is done
     * per control source.
     * 
     * Default value: %TRUE
     */
    autoClampControlSources: boolean
    /**
     * This property is used to determine whether the 'internal time'
     * properties of the element have any meaning. In particular, unless
     * this is set to %TRUE, the #GESTimelineElement:in-point and
     * #GESTimelineElement:max-duration can not be set to any value other
     * than the default 0 and #GST_CLOCK_TIME_NONE, respectively.
     * 
     * If an element has some *internal* *timed* source #GstElement that it
     * reads stream data from as part of its function in a #GESTrack, then
     * you'll likely want to set this to %TRUE to allow the
     * #GESTimelineElement:in-point and #GESTimelineElement:max-duration to
     * be set.
     * 
     * The default value is determined by the #GESTrackElementClass
     * `default_has_internal_source` class property. For most
     * #GESSourceClass-es, this will be %TRUE, with the exception of those
     * that have a potentially *static* source, such as #GESImageSourceClass
     * and #GESTitleSourceClass. Otherwise, this will usually be %FALSE.
     * 
     * For most #GESOperation-s you will likely want to leave this set to
     * %FALSE. The exception may be for an operation that reads some stream
     * data from some private internal source as part of manipulating the
     * input data from the usual linked upstream #GESTrackElement.
     * 
     * For example, you may want to set this to %TRUE for a
     * #GES_TRACK_TYPE_VIDEO operation that wraps a #textoverlay that reads
     * from a subtitle file and places its text on top of the received video
     * data. The #GESTimelineElement:in-point of the element would be used
     * to shift the initial seek time on the #textoverlay away from 0, and
     * the #GESTimelineElement:max-duration could be set to reflect the
     * time at which the subtitle file runs out of data.
     * 
     * Note that GES can not support track elements that have both internal
     * content and manipulate the timing of their data streams (time
     * effects).
     */
    hasInternalSource: boolean
    /**
     * The track that this element belongs to, or %NULL if it does not
     * belong to a track.
     */
    readonly track: Track
    /**
     * The track type of the element, which determines the type of track the
     * element can be added to (see #GESTrack:track-type). This should
     * correspond to the type of data that the element can produce or
     * process.
     */
    trackType: TrackType
    __gtype__: number

    // Own fields of GES-1.0.GES.TrackElement

    parent: TimelineElement

    // Owm methods of GES-1.0.GES.TrackElement

    /**
     * Adds all the properties of a #GstElement that match the criteria as
     * children properties of the track element. If the name of `element'`s
     * #GstElementFactory is not in `blacklist,` and the factory's
     * #GST_ELEMENT_METADATA_KLASS contains at least one member of
     * `wanted_categories` (e.g. #GST_ELEMENT_FACTORY_KLASS_DECODER), then
     * all the properties of `element` that are also in `whitelist` are added as
     * child properties of `self` using
     * ges_timeline_element_add_child_property().
     * 
     * This is intended to be used by subclasses when constructing.
     * @param element The child object to retrieve properties from
     * @param wantedCategories An array of element factory "klass" categories to whitelist, or %NULL to accept all categories
     * @param blacklist A blacklist of element factory names, or %NULL to not blacklist any element factory
     * @param whitelist A whitelist of element property names, or %NULL to whitelist all writeable properties
     */
    addChildrenProps(element: Gst.Element, wantedCategories: string[] | null, blacklist: string[] | null, whitelist: string[] | null): void
    /**
     * Clamp the #GstTimedValueControlSource for the specified child property
     * to lie between the #GESTimelineElement:in-point and out-point of the
     * element. The out-point is the #GES_TIMELINE_ELEMENT_END of the element
     * translated from the timeline coordinates to the internal source
     * coordinates of the element.
     * 
     * If the property does not have a #GstTimedValueControlSource set by
     * ges_track_element_set_control_source(), nothing happens. Otherwise, if
     * a timed value for the control source lies before the in-point of the
     * element, or after its out-point, then it will be removed. At the
     * in-point and out-point times, a new interpolated value will be placed.
     * @param propertyName The name of the child property to clamp the control source of
     */
    clampControlSource(propertyName: string): void
    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Get all the control bindings that have been created for the children
     * properties of the track element using
     * ges_track_element_set_control_source(). The keys used in the returned
     * hash table are the child property names that were passed to
     * ges_track_element_set_control_source(), and their values are the
     * corresponding created #GstControlBinding.
     * @returns A hash table containing all child-property-name/control-binding pairs for @trackelement.
     */
    getAllControlBindings(): GLib.HashTable
    /**
     * Gets #GESTrackElement:auto-clamp-control-sources.
     * @returns Whether the control sources for the child properties of @object are automatically clamped.
     */
    getAutoClampControlSources(): boolean
    /**
     * Gets the control binding that was created for the specified child
     * property of the track element using
     * ges_track_element_set_control_source(). The given `property_name` must
     * be the same name of the child property that was passed to
     * ges_track_element_set_control_source().
     * @param propertyName The name of the child property to return the control binding of
     * @returns The control binding that was created for the specified child property of @object, or %NULL if @property_name does not correspond to any control binding.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Get the #GstElement that the track element's underlying nleobject
     * controls.
     * @returns The #GstElement being controlled by the nleobject that @object wraps.
     */
    getElement(): Gst.Element | null
    /**
     * Get the GNonLin object this object is controlling.
     * @returns The GNonLin object this object is controlling.
     */
    getGnlobject(): Gst.Element
    /**
     * Get the nleobject that this element wraps.
     * @returns The nleobject that @object wraps.
     */
    getNleobject(): Gst.Element
    /**
     * Get the #GESTrackElement:track for the element.
     * @returns The track that @object belongs to, or %NULL if it does not belong to a track.
     */
    getTrack(): Track | null
    /**
     * Gets the #GESTrackElement:track-type for the element.
     * @returns The track-type of @object.
     */
    getTrackType(): TrackType
    /**
     * Gets #GESTrackElement:active for the element.
     * @returns %TRUE if @object is active in its track.
     */
    isActive(): boolean
    /**
     * Get whether the given track element is a core track element. That is,
     * it was created by the `create_track_elements` #GESClipClass method for
     * some #GESClip.
     * 
     * Note that such a track element can only be added to a clip that shares
     * the same #GESAsset as the clip that created it. For example, you are
     * allowed to move core children between clips that resulted from
     * ges_container_ungroup(), but you could not move the core child from a
     * #GESUriClip to a #GESTitleClip or another #GESUriClip with a different
     * #GESUriClip:uri.
     * 
     * Moreover, if a core track element is added to a clip, it will always be
     * added as a core child. Therefore, if this returns %TRUE, then `element`
     * will be a core child of its parent clip.
     * @returns %TRUE if @element is a core track element.
     */
    isCore(): boolean
    /**
     * Gets an array of #GParamSpec* for all configurable properties of the
     * children of `object`.
     * @returns An array of #GParamSpec* which should be freed after use or %NULL if something went wrong.
     */
    listChildrenProperties(): GObject.ParamSpec[]
    // Has conflict: lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]
    /**
     * Removes the #GstControlBinding that was created for the specified child
     * property of the track element using
     * ges_track_element_set_control_source(). The given `property_name` must
     * be the same name of the child property that was passed to
     * ges_track_element_set_control_source().
     * @param propertyName The name of the child property to remove the control binding from
     * @returns %TRUE if the control binding was removed from the specified child property of @object, or %FALSE if an error occurred.
     */
    removeControlBinding(propertyName: string): boolean
    /**
     * Sets #GESTrackElement:active for the element.
     * @param active Whether `object` should be active in its track
     * @returns %TRUE if the property was *toggled*.
     */
    setActive(active: boolean): boolean
    /**
     * Sets #GESTrackElement:auto-clamp-control-sources. If set to %TRUE, this
     * will immediately clamp all the control sources.
     * @param autoClamp Whether to automatically clamp the control sources for the child properties of `object`
     */
    setAutoClampControlSources(autoClamp: boolean): void
    /**
     * Creates a #GstControlBinding for the specified child property of the
     * track element using the given control source. The given `property_name`
     * should refer to an existing child property of the track element, as
     * used in ges_timeline_element_lookup_child().
     * 
     * If `binding_type` is "direct", then the control binding is created with
     * gst_direct_control_binding_new() using the given control source. If
     * `binding_type` is "direct-absolute", it is created with
     * gst_direct_control_binding_new_absolute() instead.
     * @param source The control source to bind the child property to
     * @param propertyName The name of the child property to control
     * @param bindingType The type of binding to create ("direct" or "direct-absolute")
     * @returns %TRUE if the specified child property could be bound to @source, or %FALSE if an error occurred.
     */
    setControlSource(source: Gst.ControlSource, propertyName: string, bindingType: string): boolean
    /**
     * Sets #GESTrackElement:has-internal-source for the element. If this is
     * set to %FALSE, this method will also set the
     * #GESTimelineElement:in-point of the element to 0 and its
     * #GESTimelineElement:max-duration to #GST_CLOCK_TIME_NONE.
     * @param hasInternalSource Whether the `object` should be allowed to have its 'internal time' properties set.
     * @returns %FALSE if @has_internal_source is forbidden for @object and %TRUE in any other case.
     */
    setHasInternalSource(hasInternalSource: boolean): boolean
    /**
     * Sets the #GESTrackElement:track-type for the element.
     * @param type The new track-type for `object`
     */
    setTrackType(type: TrackType): void

    // Own virtual methods of GES-1.0.GES.TrackElement

    /**
     * Notify when the #GESTrackElement:active property changes
     * @virtual 
     * @param active Whether the element is active or not inside the #nlecomposition
     */
    activeChanged(active: boolean): void
    changed(): void
    createElement(): Gst.Element
    createGnlObject(): Gst.Element
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Own signals of GES-1.0.GES.TrackElement

    connect(sigName: "control-binding-added", callback: TrackElement.ControlBindingAddedSignalCallback): number
    on(sigName: "control-binding-added", callback: TrackElement.ControlBindingAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-added", callback: TrackElement.ControlBindingAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-added", callback: TrackElement.ControlBindingAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "control-binding-added", ...args: any[]): void
    connect(sigName: "control-binding-removed", callback: TrackElement.ControlBindingRemovedSignalCallback): number
    on(sigName: "control-binding-removed", callback: TrackElement.ControlBindingRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "control-binding-removed", callback: TrackElement.ControlBindingRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "control-binding-removed", callback: TrackElement.ControlBindingRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "control-binding-removed", ...args: any[]): void

    // Class property signals of GES-1.0.GES.TrackElement

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESTrackElement is a #GESTimelineElement that specifically belongs
 * to a single #GESTrack of its #GESTimelineElement:timeline. Its
 * #GESTimelineElement:start and #GESTimelineElement:duration specify its
 * temporal extent in the track. Specifically, a track element wraps some
 * nleobject, such as an #nlesource or #nleoperation, which can be
 * retrieved with ges_track_element_get_nleobject(), and its
 * #GESTimelineElement:start, #GESTimelineElement:duration,
 * #GESTimelineElement:in-point, #GESTimelineElement:priority and
 * #GESTrackElement:active properties expose the corresponding nleobject
 * properties. When a track element is added to a track, its nleobject is
 * added to the corresponding #nlecomposition that the track wraps.
 * 
 * Most users will not have to work directly with track elements since a
 * #GESClip will automatically create track elements for its timeline's
 * tracks and take responsibility for updating them. The only track
 * elements that are not automatically created by clips, but a user is
 * likely to want to create, are #GESEffect-s.
 * 
 * ## Control Bindings for Children Properties
 * 
 * You can set up control bindings for a track element child property
 * using ges_track_element_set_control_source(). A
 * #GstTimedValueControlSource should specify the timed values using the
 * internal source coordinates (see #GESTimelineElement). By default,
 * these will be updated to lie between the #GESTimelineElement:in-point
 * and out-point of the element. This can be switched off by setting
 * #GESTrackElement:auto-clamp-control-sources to %FALSE.
 * @class 
 */
class TrackElement extends TimelineElement {

    // Own properties of GES-1.0.GES.TrackElement

    static name: string

    // Constructors of GES-1.0.GES.TrackElement

    constructor(config?: TrackElement.ConstructorProperties) 
    _init(config?: TrackElement.ConstructorProperties): void
}

module TrackElementAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, Asset.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TrackElementAsset

        track_type?: TrackType | null
    }

}

interface TrackElementAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.TrackElementAsset

    trackType: TrackType
    __gtype__: number

    // Own fields of GES-1.0.GES.TrackElementAsset

    parent: Asset & GObject.Object

    // Owm methods of GES-1.0.GES.TrackElementAsset

    // Has conflict: getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    /**
     * Get the GESAssetTrackType the #GESTrackElement extracted from `self`
     * should get into
     * @returns a #GESTrackType
     */
    getTrackType(): TrackType
    /**
     * Set the #GESTrackType the #GESTrackElement extracted from `self`
     * should get into
     * @param type A #GESTrackType
     */
    setTrackType(type: TrackType): void

    // Own virtual methods of GES-1.0.GES.TrackElementAsset

    /**
     * Result: %TRUE if `self` has a natural framerate %FALSE otherwise
     * @virtual 
     * @returns %TRUE if @self has a natural framerate @FALSE otherwise.
     */
    getNaturalFramerate(): [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]

    // Class property signals of GES-1.0.GES.TrackElementAsset

    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TrackElementAsset extends Asset {

    // Own properties of GES-1.0.GES.TrackElementAsset

    static name: string

    // Constructors of GES-1.0.GES.TrackElementAsset

    constructor(config?: TrackElementAsset.ConstructorProperties) 
    _init(config?: TrackElementAsset.ConstructorProperties): void
}

module Transition {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Operation.ConstructorProperties {
    }

}

interface Transition extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.Transition

    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.Transition

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for media transitions.
 * @class 
 */
class Transition extends Operation {

    // Own properties of GES-1.0.GES.Transition

    static name: string

    // Constructors of GES-1.0.GES.Transition

    constructor(config?: Transition.ConstructorProperties) 
    _init(config?: Transition.ConstructorProperties): void
}

module TransitionClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, BaseTransitionClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.TransitionClip

        /**
         * a #GESVideoStandardTransitionType representing the wipe to use
         */
        vtype?: VideoStandardTransitionType | null
    }

}

interface TransitionClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.TransitionClip

    __gtype__: number

    // Conflicting properties

    parent: Container & TimelineElement & TimelineElement

    // Own fields of GES-1.0.GES.TransitionClip

    /**
     * a #GESVideoStandardTransitionType indicating the type of video transition
     * to apply.
     * @field 
     */
    vtype: VideoStandardTransitionType

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.TransitionClip

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Creates an object that mixes together the two underlying objects, A and B.
 * The A object is assumed to have a higher prioirity (lower number) than the
 * B object. At the transition in point, only A will be visible, and by the
 * end only B will be visible.
 * 
 * The shape of the video transition depends on the value of the "vtype"
 * property. The default value is "crossfade". For audio, only "crossfade" is
 * supported.
 * 
 * The ID of the ExtractableType is the nickname of the vtype property value. Note
 * that this value can be changed after creation and the GESExtractable.asset value
 * will be updated when needed.
 * @class 
 */
class TransitionClip extends BaseTransitionClip {

    // Own properties of GES-1.0.GES.TransitionClip

    static name: string

    // Constructors of GES-1.0.GES.TransitionClip

    constructor(config?: TransitionClip.ConstructorProperties) 
    /**
     * Creates a new #GESTransitionClip.
     * @constructor 
     * @param vtype the type of transition to create
     * @returns a newly created #GESTransitionClip, or %NULL if something went wrong.
     */
    constructor(vtype: VideoStandardTransitionType) 
    /**
     * Creates a new #GESTransitionClip.
     * @constructor 
     * @param vtype the type of transition to create
     * @returns a newly created #GESTransitionClip, or %NULL if something went wrong.
     */
    static new(vtype: VideoStandardTransitionType): TransitionClip
    /**
     * Creates a new #GESTransitionClip for the provided `nick`.
     * @constructor 
     * @param nick a string representing the type of transition to create
     * @returns The newly created #GESTransitionClip, or %NULL if something went wrong
     */
    static newForNick(nick: string | null): TransitionClip
    _init(config?: TransitionClip.ConstructorProperties): void
}

module UriClip {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, SourceClip.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.UriClip

        /**
         * Whether this uri clip represents a still image or not. This must be set
         * before create_track_elements is called.
         */
        is_image?: boolean | null
        /**
         * Whether the sound will be played or not.
         */
        mute?: boolean | null
        supported_formats?: TrackType | null
        /**
         * The location of the file/resource to use.
         */
        uri?: string | null
    }

}

interface UriClip extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.UriClip

    /**
     * Whether this uri clip represents a still image or not. This must be set
     * before create_track_elements is called.
     */
    isImage: boolean
    /**
     * Whether the sound will be played or not.
     */
    mute: boolean
    supportedFormats: TrackType
    /**
     * The location of the file/resource to use.
     */
    readonly uri: string | null
    __gtype__: number

    // Own fields of GES-1.0.GES.UriClip

    parent: SourceClip & Clip & Container & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.UriClip

    /**
     * Get the location of the resource.
     * @returns The location of the resource.
     */
    getUri(): string
    /**
     * Lets you know if the audio track of `self` is muted or not.
     * @returns %TRUE if the audio track of @self is muted, %FALSE otherwise.
     */
    isMuted(): boolean
    /**
     * Sets whether the clip is a still image or not.
     * @param isImage %TRUE if `self` is a still image, %FALSE otherwise
     */
    setIsImage(isImage: boolean): void
    /**
     * Sets whether the audio track of this clip is muted or not.
     * @param mute %TRUE to mute `self` audio track, %FALSE to unmute it
     */
    setMute(mute: boolean): void

    // Conflicting methods

    /**
     * Edits the container within its timeline.
     * @virtual 
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param newLayerPriority The priority/index of the layer `container` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `container` where the edit should occur
     * @param position The edit position: a new location for the edge of `container` (in nanoseconds)
     * @returns %TRUE if the edit of @container completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean

    // Class property signals of GES-1.0.GES.UriClip

    connect(sigName: "notify::is-image", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-image", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-image", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-image", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::duration-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-limit", ...args: any[]): void
    connect(sigName: "notify::layer", callback: (...args: any[]) => void): number
    on(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layer", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents all the output streams from a particular uri. It is assumed that
 * the URI points to a file of some type.
 * @class 
 */
class UriClip extends SourceClip {

    // Own properties of GES-1.0.GES.UriClip

    static name: string

    // Constructors of GES-1.0.GES.UriClip

    constructor(config?: UriClip.ConstructorProperties) 
    /**
     * Creates a new #GESUriClip for the provided `uri`.
     * 
     * > **WARNING**: This function might 'discover` `uri` **synchrounously**, it is
     * > an IO and processing intensive task that you probably don't want to run in
     * > an application mainloop. Have a look at #ges_asset_request_async to see how
     * > to make that operation happen **asynchronously**.
     * @constructor 
     * @param uri the URI the source should control
     * @returns The newly created #GESUriClip, or %NULL if there was an error.
     */
    constructor(uri: string) 
    /**
     * Creates a new #GESUriClip for the provided `uri`.
     * 
     * > **WARNING**: This function might 'discover` `uri` **synchrounously**, it is
     * > an IO and processing intensive task that you probably don't want to run in
     * > an application mainloop. Have a look at #ges_asset_request_async to see how
     * > to make that operation happen **asynchronously**.
     * @constructor 
     * @param uri the URI the source should control
     * @returns The newly created #GESUriClip, or %NULL if there was an error.
     */
    static new(uri: string): UriClip
    _init(config?: UriClip.ConstructorProperties): void
}

module UriClipAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, SourceClipAsset.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.UriClipAsset

        /**
         * The duration (in nanoseconds) of the media file
         */
        duration?: number | null
    }

}

interface UriClipAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.UriClipAsset

    /**
     * The duration (in nanoseconds) of the media file
     */
    duration: number
    /**
     * The duration (in nanoseconds) of the media file
     */
    readonly isNestedTimeline: boolean
    __gtype__: number

    // Own fields of GES-1.0.GES.UriClipAsset

    parent: SourceClipAsset & Asset & GObject.Object & GObject.Object

    // Owm methods of GES-1.0.GES.UriClipAsset

    /**
     * Gets duration of the file represented by `self`
     * @returns The duration of @self
     */
    getDuration(): Gst.ClockTime
    /**
     * Gets #GstDiscovererInfo about the file
     * @returns #GstDiscovererInfo of specified asset
     */
    getInfo(): GstPbutils.DiscovererInfo
    /**
     * Gets maximum duration of the file represented by `self,`
     * it is usually the same as GESUriClipAsset::duration,
     * but in the case of nested timelines, for example, they
     * are different as those can be extended 'infinitely'.
     * @returns The maximum duration of @self
     */
    getMaxDuration(): Gst.ClockTime
    /**
     * Get the GESUriSourceAsset `self` containes
     * @returns a #GList of #GESUriSourceAsset
     */
    getStreamAssets(): UriSourceAsset[]
    /**
     * Gets Whether the file represented by `self` is an image or not
     * @returns Whether the file represented by @self is an image or not
     */
    isImage(): boolean

    // Class property signals of GES-1.0.GES.UriClipAsset

    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-nested-timeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-nested-timeline", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::supported-formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::supported-formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::supported-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::supported-formats", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UriClipAsset extends SourceClipAsset {

    // Own properties of GES-1.0.GES.UriClipAsset

    static name: string

    // Constructors of GES-1.0.GES.UriClipAsset

    constructor(config?: UriClipAsset.ConstructorProperties) 
    _init(config?: UriClipAsset.ConstructorProperties): void
    /**
     * Creates a #GESUriClipAsset for `uri`
     * 
     * Example of request of a GESUriClipAsset:
     * 
     * ```
     * // The request callback
     * static void
     * filesource_asset_loaded_cb (GESAsset * source, GAsyncResult * res, gpointer user_data)
     * {
     *   GError *error = NULL;
     *   GESUriClipAsset *filesource_asset;
     * 
     *   filesource_asset = ges_uri_clip_asset_finish (res, &error);
     *   if (filesource_asset) {
     *    gst_print ("The file: %s is usable as a FileSource, it is%s an image and lasts %" GST_TIME_FORMAT,
     *        ges_asset_get_id (GES_ASSET (filesource_asset))
     *        ges_uri_clip_asset_is_image (filesource_asset) ? "" : " not",
     *        GST_TIME_ARGS (ges_uri_clip_asset_get_duration (filesource_asset));
     *   } else {
     *    gst_print ("The file: %s is *not* usable as a FileSource because: %s",
     *        ges_asset_get_id (source), error->message);
     *   }
     * 
     *   gst_object_unref (mfs);
     * }
     * 
     * // The request:
     * ges_uri_clip_asset_new (uri, (GAsyncReadyCallback) filesource_asset_loaded_cb, user_data);
     * ```
     * 
     * @param uri The URI of the file for which to create a #GESUriClipAsset
     * @param cancellable optional %GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is finished
     */
    static new(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finalize the request of an async #GESUriClipAsset
     * @param res The #GAsyncResult from which to get the newly created #GESUriClipAsset
     * @returns The #GESUriClipAsset previously requested
     */
    static finish(res: Gio.AsyncResult): UriClipAsset
    /**
     * Creates a #GESUriClipAsset for `uri` synchonously. You should avoid
     * to use it in application, and rather create #GESUriClipAsset asynchronously
     * @param uri The URI of the file for which to create a #GESUriClipAsset. You can also use multi file uris for #GESMultiFileSource.
     * @returns A reference to the requested asset or %NULL if an error happened
     */
    static requestSync(uri: string): UriClipAsset
    /**
     * Sets the timeout of #GESUriClipAsset loading
     * @param timeout The timeout to set
     */
    static setTimeout(klass: UriClipAsset | Function | GObject.GType, timeout: Gst.ClockTime): void
}

module UriSourceAsset {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, TrackElementAsset.ConstructorProperties {
    }

}

interface UriSourceAsset extends MetaContainer, Gio.AsyncInitable, Gio.Initable {

    // Own properties of GES-1.0.GES.UriSourceAsset

    __gtype__: number

    // Own fields of GES-1.0.GES.UriSourceAsset

    parent: TrackElementAsset & Asset & GObject.Object & GObject.Object

    // Owm methods of GES-1.0.GES.UriSourceAsset

    /**
     * Get the #GESUriClipAsset `self` is contained in
     * @returns a #GESUriClipAsset
     */
    getFilesourceAsset(): UriClipAsset
    /**
     * Get the #GstDiscovererStreamInfo user by `asset`
     * @returns a #GESUriClipAsset
     */
    getStreamInfo(): GstPbutils.DiscovererStreamInfo
    getStreamUri(): string
    /**
     * Check if `asset` contains a single image
     * @returns %TRUE if the video stream corresponds to an image (i.e. only contains one frame)
     */
    isImage(): boolean

    // Class property signals of GES-1.0.GES.UriSourceAsset

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::extractable-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extractable-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extractable-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extractable-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::proxy-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Asset to create a stream specific #GESSource for a media file.
 * 
 * NOTE: You should never request such a #GESAsset as they will be created automatically
 * by #GESUriClipAsset-s.
 * @class 
 */
class UriSourceAsset extends TrackElementAsset {

    // Own properties of GES-1.0.GES.UriSourceAsset

    static name: string

    // Constructors of GES-1.0.GES.UriSourceAsset

    constructor(config?: UriSourceAsset.ConstructorProperties) 
    _init(config?: UriSourceAsset.ConstructorProperties): void
}

module VideoSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Source.ConstructorProperties {
    }

}

interface VideoSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.VideoSource

    __gtype__: number

    // Owm methods of GES-1.0.GES.VideoSource

    /**
     * Retrieves the natural size of the video stream. The natural size, is
     * the size at which it will be displayed if no scaling is being applied.
     * 
     * NOTE: The sources take into account the potential video rotation applied
     * by the #videoflip element that is inside the source, effects applied on
     * the clip which potentially also rotate the element are not taken into
     * account.
     * @returns %TRUE if the object has a natural size, %FALSE otherwise.
     */
    getNaturalSize(): [ /* returnType */ boolean, /* width */ number, /* height */ number ]

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.VideoSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base class for video sources
 * @class 
 */
class VideoSource extends Source {

    // Own properties of GES-1.0.GES.VideoSource

    static name: string

    // Constructors of GES-1.0.GES.VideoSource

    constructor(config?: VideoSource.ConstructorProperties) 
    _init(config?: VideoSource.ConstructorProperties): void
}

module VideoTestSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, VideoSource.ConstructorProperties {
    }

}

interface VideoTestSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.VideoTestSource

    __gtype__: number

    // Owm methods of GES-1.0.GES.VideoTestSource

    /**
     * Get the video pattern used by the `source`.
     * @returns The video pattern used by the @source.
     */
    getPattern(): VideoTestPattern
    /**
     * Sets the source to use the given `pattern`.
     * @param pattern a #GESVideoTestPattern
     */
    setPattern(pattern: VideoTestPattern): void

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.VideoTestSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * ### Children Properties
 * 
 *  {{ libs/GESVideoTestSource-children-props.md }}
 * @class 
 */
class VideoTestSource extends VideoSource {

    // Own properties of GES-1.0.GES.VideoTestSource

    static name: string

    // Constructors of GES-1.0.GES.VideoTestSource

    constructor(config?: VideoTestSource.ConstructorProperties) 
    _init(config?: VideoTestSource.ConstructorProperties): void
}

module VideoTrack {

    // Constructor properties interface

    interface ConstructorProperties extends MetaContainer.ConstructorProperties, Gst.ChildProxy.ConstructorProperties, Track.ConstructorProperties {
    }

}

interface VideoTrack extends MetaContainer, Gst.ChildProxy {

    // Own properties of GES-1.0.GES.VideoTrack

    __gtype__: number

    // Conflicting properties

    parent: Gst.Bin & Gst.Object & Gst.Object
    object: any

    // Own fields of GES-1.0.GES.VideoTrack

    parentInstance: Track

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
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
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * See ges_track_add_element(), which also gives an error.
     * @param object The element to add
     * @returns %TRUE if @object was successfully added to @track.
     */
    addElement(object: TrackElement): boolean

    // Overloads of addElement

    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     * @returns %TRUE if the @element was added
     */
    addElement(element: Gst.Element): boolean
    /**
     * Method to add an element to the bin.
     * @virtual 
     * @param element the element to be added
     * @returns %TRUE if the @element was added
     */
    addElement(element: Gst.Element): boolean
    /**
     * See ges_track_remove_element_full(), which also returns an error.
     * @param object The element to remove
     * @returns %TRUE if @object was successfully removed from @track.
     */
    removeElement(object: TrackElement): boolean

    // Overloads of removeElement

    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     * @returns %TRUE if the @element was removed
     */
    removeElement(element: Gst.Element): boolean
    /**
     * Method to remove an element from the bin.
     * @virtual 
     * @param element the element to be removed
     * @returns %TRUE if the @element was removed
     */
    removeElement(element: Gst.Element): boolean

    // Class property signals of GES-1.0.GES.VideoTrack

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::mixing", callback: (...args: any[]) => void): number
    on(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mixing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mixing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mixing", ...args: any[]): void
    connect(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::restriction-caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::restriction-caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::restriction-caps", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::async-handling", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-handling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-handling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: (...args: any[]) => void): number
    on(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message-forward", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message-forward", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GESVideoTrack is a default video #GESTrack, with a
 * #GES_TRACK_TYPE_VIDEO #GESTrack:track-type and "video/x-raw(ANY)"
 * #GESTrack:caps.
 * 
 * By default, a video track will have its #GESTrack:restriction-caps
 * set to "video/x-raw" with the following properties:
 * 
 * - width: 1280
 * - height: 720
 * - framerate: 30/1
 * 
 * These fields are needed for negotiation purposes, but you can change
 * their values if you wish. It is advised that you do so using
 * ges_track_update_restriction_caps() with new values for the fields you
 * wish to change, and any additional fields you may want to add. Unlike
 * using ges_track_set_restriction_caps(), this will ensure that these
 * default fields will at least have some value set.
 * @class 
 */
class VideoTrack extends Track {

    // Own properties of GES-1.0.GES.VideoTrack

    static name: string

    // Constructors of GES-1.0.GES.VideoTrack

    constructor(config?: VideoTrack.ConstructorProperties) 
    /**
     * Creates a new video track, with a #GES_TRACK_TYPE_VIDEO
     * #GESTrack:track-type and "video/x-raw(ANY)" #GESTrack:caps, and
     * "video/x-raw" #GESTrack:restriction-caps with the properties:
     * 
     * - width: 1280
     * - height: 720
     * - framerate: 30/1
     * 
     * You should use ges_track_update_restriction_caps() if you wish to
     * modify these fields, or add additional ones.
     * @constructor 
     * @returns The newly created video track.
     */
    constructor() 
    /**
     * Creates a new video track, with a #GES_TRACK_TYPE_VIDEO
     * #GESTrack:track-type and "video/x-raw(ANY)" #GESTrack:caps, and
     * "video/x-raw" #GESTrack:restriction-caps with the properties:
     * 
     * - width: 1280
     * - height: 720
     * - framerate: 30/1
     * 
     * You should use ges_track_update_restriction_caps() if you wish to
     * modify these fields, or add additional ones.
     * @constructor 
     * @returns The newly created video track.
     */
    static new(): VideoTrack

    // Overloads of new

    /**
     * Creates a new track with the given track-type and caps.
     * 
     * If `type` is #GES_TRACK_TYPE_VIDEO, and `caps` is a subset of
     * "video/x-raw(ANY)", then a #GESVideoTrack is created. This will
     * automatically choose a gap creation method suitable for video data. You
     * will likely want to set #GESTrack:restriction-caps separately. You may
     * prefer to use the ges_video_track_new() method instead.
     * 
     * If `type` is #GES_TRACK_TYPE_AUDIO, and `caps` is a subset of
     * "audio/x-raw(ANY)", then a #GESAudioTrack is created. This will
     * automatically choose a gap creation method suitable for audio data, and
     * will set the #GESTrack:restriction-caps to the default for
     * #GESAudioTrack. You may prefer to use the ges_audio_track_new() method
     * instead.
     * 
     * Otherwise, a plain #GESTrack is returned. You will likely want to set
     * the #GESTrack:restriction-caps and call
     * ges_track_set_create_element_for_gap_func() on the returned track.
     * @constructor 
     * @param type The #GESTrack:track-type for the track
     * @param caps The #GESTrack:caps for the track
     * @returns A new track.
     */
    static new(type: TrackType, caps: Gst.Caps): Track
    /**
     * Creates a new bin with the given name.
     * @constructor 
     * @param name the name of the new bin
     * @returns a new #GstBin
     */
    static new(name: string | null): Gst.Bin
    _init(config?: VideoTrack.ConstructorProperties): void
}

module VideoTransition {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, Transition.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.VideoTransition

        /**
         * This value represents the border width of the transition.
         */
        border?: number | null
        /**
         * This value represents the direction of the transition.
         */
        invert?: boolean | null
        transition_type?: VideoStandardTransitionType | null
    }

}

interface VideoTransition extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.VideoTransition

    /**
     * This value represents the border width of the transition.
     */
    border: number
    /**
     * This value represents the direction of the transition.
     */
    invert: boolean
    transitionType: VideoStandardTransitionType
    __gtype__: number

    // Own fields of GES-1.0.GES.VideoTransition

    parent: Transition & TimelineElement & TimelineElement

    // Owm methods of GES-1.0.GES.VideoTransition

    /**
     * Get the border property of `self,` this value represents
     * the border width of the transition.
     * @returns The border values of @self or -1 if not meaningful (this will happen when not using a smpte transition).
     */
    getBorder(): number
    /**
     * Get the transition type used by `trans`.
     * @returns The transition type used by @trans.
     */
    getTransitionType(): VideoStandardTransitionType
    /**
     * Get the invert property of `self,` this value represents
     * the direction of the transition.
     * @returns The invert value of @self
     */
    isInverted(): boolean
    /**
     * Set the border property of `self,` this value represents
     * the border width of the transition. In case this value does
     * not make sense for the current transition type, it is cached
     * for later use.
     * @param value The value of the border to set on `object`
     */
    setBorder(value: number): void
    /**
     * Set the invert property of `self,` this value represents
     * the direction of the transition. In case this value does
     * not make sense for the current transition type, it is cached
     * for later use.
     * @param inverted %TRUE if the transition should be inverted %FALSE otherwise
     */
    setInverted(inverted: boolean): void
    /**
     * Sets the transition being used to `type`.
     * @param type a #GESVideoStandardTransitionType
     * @returns %TRUE if the transition type was properly changed, else %FALSE.
     */
    setTransitionType(type: VideoStandardTransitionType): boolean

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.VideoTransition

    connect(sigName: "notify::border", callback: (...args: any[]) => void): number
    on(sigName: "notify::border", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border", ...args: any[]): void
    connect(sigName: "notify::invert", callback: (...args: any[]) => void): number
    on(sigName: "notify::invert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::invert", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::invert", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::invert", ...args: any[]): void
    connect(sigName: "notify::transition-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::transition-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transition-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transition-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transition-type", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class VideoTransition extends Transition {

    // Own properties of GES-1.0.GES.VideoTransition

    static name: string

    // Constructors of GES-1.0.GES.VideoTransition

    constructor(config?: VideoTransition.ConstructorProperties) 
    constructor() 
    static new(): VideoTransition
    _init(config?: VideoTransition.ConstructorProperties): void
}

module VideoUriSource {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, MetaContainer.ConstructorProperties, VideoSource.ConstructorProperties {

        // Own constructor properties of GES-1.0.GES.VideoUriSource

        /**
         * The location of the file/resource to use.
         */
        uri?: string | null
    }

}

interface VideoUriSource extends Extractable, MetaContainer {

    // Own properties of GES-1.0.GES.VideoUriSource

    /**
     * The location of the file/resource to use.
     */
    readonly uri: string | null
    __gtype__: number

    // Conflicting methods

    /**
     * Edits the element within its track.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline
     * @param mode The edit mode
     * @param edge The edge of `object` where the edit should occur
     * @param position The edit position: a new location for the edge of `object` (in nanoseconds)
     * @returns %TRUE if the edit of @object completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, mode: EditMode, edge: Edge, position: number): boolean

    // Overloads of edit

    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * See ges_timeline_element_edit_full(), which also gives an error.
     * 
     * Note that the `layers` argument is currently ignored, so you should
     * just pass %NULL.
     * @param layers A whitelist of layers where the edit can be performed, %NULL allows all layers in the timeline.
     * @param newLayerPriority The priority/index of the layer `self` should be moved to. -1 means no move
     * @param mode The edit mode
     * @param edge The edge of `self` where the edit should occur
     * @param position The edit position: a new location for the edge of `self` (in nanoseconds) in the timeline coordinates
     * @returns %TRUE if the edit of @self completed, %FALSE on failure.
     */
    edit(layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number): boolean
    /**
     * Looks up which `element` and `pspec` would be effected by the given `name`. If various
     * contained elements have this property name you will get the first one, unless you
     * specify the class name in `name`.
     * @virtual 
     * @param propName Name of the property to look up. You can specify the name of the     class as such: "ClassName::property-name", to guarantee that you get the     proper GParamSpec in case various GstElement-s contain the same property     name. If you don't do so, you will get the first element found, having     this property and the and the corresponding GParamSpec.
     * @returns TRUE if @element and @pspec could be found. FALSE otherwise. In that case the values for @pspec and @element are not modified. Unref @element after usage.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]

    // Overloads of lookupChild

    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    /**
     * Looks up a child property of the element.
     * 
     * `prop_name` can either be in the format "prop-name" or
     * "TypeName::prop-name", where "prop-name" is the name of the property
     * to look up (as used in g_object_get()), and "TypeName" is the type name
     * of the child (as returned by G_OBJECT_TYPE_NAME()). The latter format is
     * useful when two children of different types share the same property
     * name.
     * 
     * The first child found with the given "prop-name" property that was
     * registered with ges_timeline_element_add_child_property() (and of the
     * type "TypeName", if it was given) will be passed to `child,` and the
     * registered specification of this property will be passed to `pspec`.
     * @virtual 
     * @param propName The name of a child property
     * @returns %TRUE if a child corresponding to the property was found, in which case @child and @pspec are set.
     */
    lookupChild(propName: string): [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]

    // Class property signals of GES-1.0.GES.VideoUriSource

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-clamp-control-sources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-clamp-control-sources", ...args: any[]): void
    connect(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-internal-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-internal-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-internal-source", ...args: any[]): void
    connect(sigName: "notify::track", callback: (...args: any[]) => void): number
    on(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::track-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::track-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::track-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::track-type", ...args: any[]): void
    connect(sigName: "notify::in-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::in-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::in-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::in-point", ...args: any[]): void
    connect(sigName: "notify::max-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-duration", ...args: any[]): void
    connect(sigName: "notify::serialize", callback: (...args: any[]) => void): number
    on(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serialize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serialize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serialize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * ### Children Properties
 * 
 *  {{ libs/GESVideoUriSource-children-props.md }}
 * @class 
 */
class VideoUriSource extends VideoSource {

    // Own properties of GES-1.0.GES.VideoUriSource

    static name: string

    // Constructors of GES-1.0.GES.VideoUriSource

    constructor(config?: VideoUriSource.ConstructorProperties) 
    _init(config?: VideoUriSource.ConstructorProperties): void
}

module XmlFormatter {

    // Constructor properties interface

    interface ConstructorProperties extends Extractable.ConstructorProperties, BaseXmlFormatter.ConstructorProperties {
    }

}

interface XmlFormatter extends Extractable {

    // Own properties of GES-1.0.GES.XmlFormatter

    __gtype__: number

    // Own fields of GES-1.0.GES.XmlFormatter

    parent: BaseXmlFormatter & Formatter & GObject.InitiallyUnowned & GObject.InitiallyUnowned
    priv: XmlFormatterPrivate
    gesReserved: any[]

    // Class property signals of GES-1.0.GES.XmlFormatter

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

class XmlFormatter extends BaseXmlFormatter {

    // Own properties of GES-1.0.GES.XmlFormatter

    static name: string

    // Constructors of GES-1.0.GES.XmlFormatter

    constructor(config?: XmlFormatter.ConstructorProperties) 
    _init(config?: XmlFormatter.ConstructorProperties): void
}

interface AssetClass {

    // Own fields of GES-1.0.GES.AssetClass

    parent: GObject.ObjectClass
    startLoading: (self: Asset) => AssetLoadingReturn
    extract: (self: Asset) => Extractable
    informProxy: (self: Asset, proxyId: string) => void
    proxied: (self: Asset, proxy: Asset) => void
    requestIdUpdate: (self: Asset, proposedNewId: string | null, error: GLib.Error) => boolean
    gesReserved: any[]
}

abstract class AssetClass {

    // Own properties of GES-1.0.GES.AssetClass

    static name: string
}

interface AssetPrivate {
}

class AssetPrivate {

    // Own properties of GES-1.0.GES.AssetPrivate

    static name: string
}

interface AudioSourceClass {
}

abstract class AudioSourceClass {

    // Own properties of GES-1.0.GES.AudioSourceClass

    static name: string
}

interface AudioSourcePrivate {
}

class AudioSourcePrivate {

    // Own properties of GES-1.0.GES.AudioSourcePrivate

    static name: string
}

interface AudioTestSourceClass {
}

abstract class AudioTestSourceClass {

    // Own properties of GES-1.0.GES.AudioTestSourceClass

    static name: string
}

interface AudioTestSourcePrivate {
}

class AudioTestSourcePrivate {

    // Own properties of GES-1.0.GES.AudioTestSourcePrivate

    static name: string
}

interface AudioTrackClass {

    // Own fields of GES-1.0.GES.AudioTrackClass

    parentClass: TrackClass
    gesReserved: any[]
}

abstract class AudioTrackClass {

    // Own properties of GES-1.0.GES.AudioTrackClass

    static name: string
}

interface AudioTrackPrivate {
}

class AudioTrackPrivate {

    // Own properties of GES-1.0.GES.AudioTrackPrivate

    static name: string
}

interface AudioTransitionClass {

    // Own fields of GES-1.0.GES.AudioTransitionClass

    parentClass: TransitionClass
    gesReserved: any[]
}

abstract class AudioTransitionClass {

    // Own properties of GES-1.0.GES.AudioTransitionClass

    static name: string
}

interface AudioTransitionPrivate {
}

class AudioTransitionPrivate {

    // Own properties of GES-1.0.GES.AudioTransitionPrivate

    static name: string
}

interface AudioUriSourceClass {
}

abstract class AudioUriSourceClass {

    // Own properties of GES-1.0.GES.AudioUriSourceClass

    static name: string
}

interface AudioUriSourcePrivate {
}

class AudioUriSourcePrivate {

    // Own properties of GES-1.0.GES.AudioUriSourcePrivate

    static name: string
}

interface BaseEffectClass {
}

abstract class BaseEffectClass {

    // Own properties of GES-1.0.GES.BaseEffectClass

    static name: string
}

interface BaseEffectClipClass {
}

abstract class BaseEffectClipClass {

    // Own properties of GES-1.0.GES.BaseEffectClipClass

    static name: string
}

interface BaseEffectClipPrivate {
}

class BaseEffectClipPrivate {

    // Own properties of GES-1.0.GES.BaseEffectClipPrivate

    static name: string
}

interface BaseEffectPrivate {
}

class BaseEffectPrivate {

    // Own properties of GES-1.0.GES.BaseEffectPrivate

    static name: string
}

interface BaseTransitionClipClass {
}

abstract class BaseTransitionClipClass {

    // Own properties of GES-1.0.GES.BaseTransitionClipClass

    static name: string
}

interface BaseTransitionClipPrivate {
}

class BaseTransitionClipPrivate {

    // Own properties of GES-1.0.GES.BaseTransitionClipPrivate

    static name: string
}

interface BaseXmlFormatterClass {

    // Own fields of GES-1.0.GES.BaseXmlFormatterClass

    parent: FormatterClass
    contentParser: GLib.MarkupParser
    save: (formatter: Formatter, timeline: Timeline) => GLib.String
    gesReserved: any[]
}

abstract class BaseXmlFormatterClass {

    // Own properties of GES-1.0.GES.BaseXmlFormatterClass

    static name: string
}

interface BaseXmlFormatterPrivate {
}

class BaseXmlFormatterPrivate {

    // Own properties of GES-1.0.GES.BaseXmlFormatterPrivate

    static name: string
}

interface ClipAssetClass {

    // Own fields of GES-1.0.GES.ClipAssetClass

    parent: AssetClass
    getNaturalFramerate: (self: ClipAsset) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    gesReserved: any[]
}

abstract class ClipAssetClass {

    // Own properties of GES-1.0.GES.ClipAssetClass

    static name: string
}

interface ClipAssetPrivate {
}

class ClipAssetPrivate {

    // Own properties of GES-1.0.GES.ClipAssetPrivate

    static name: string
}

interface ClipClass {

    // Own fields of GES-1.0.GES.ClipClass

    /**
     * Method to create the core #GESTrackElement of a clip
     * of this class. If a clip of this class may create several track elements per
     * track type, this should be left as %NULL, and
     * GESClipClass::create_track_elements should be used instead. Otherwise, you
     * should implement this class method and leave
     * GESClipClass::create_track_elements as the default implementation
     * @field 
     */
    createTrackElement: CreateTrackElementFunc
    /**
     * Method to create the (multiple) core
     * #GESTrackElement-s of a clip of this class. If
     * GESClipClass::create_track_element is implemented, this should be kept as the
     * default implementation
     * @field 
     */
    createTrackElements: CreateTrackElementsFunc
}

abstract class ClipClass {

    // Own properties of GES-1.0.GES.ClipClass

    static name: string
}

interface ClipPrivate {
}

class ClipPrivate {

    // Own properties of GES-1.0.GES.ClipPrivate

    static name: string
}

interface CommandLineFormatterClass {

    // Own fields of GES-1.0.GES.CommandLineFormatterClass

    parentClass: FormatterClass
}

abstract class CommandLineFormatterClass {

    // Own properties of GES-1.0.GES.CommandLineFormatterClass

    static name: string
}

interface CommandLineFormatterPrivate {
}

class CommandLineFormatterPrivate {

    // Own properties of GES-1.0.GES.CommandLineFormatterPrivate

    static name: string
}

interface ContainerClass {

    // Own fields of GES-1.0.GES.ContainerClass

    childAdded: (container: Container, element: TimelineElement) => void
    childRemoved: (container: Container, element: TimelineElement) => void
    addChild: (container: Container, element: TimelineElement) => boolean
    removeChild: (container: Container, element: TimelineElement) => boolean
    ungroup: (container: Container, recursive: boolean) => Container[]
    edit: (container: Container, layers: Layer[] | null, newLayerPriority: number, mode: EditMode, edge: Edge, position: number) => boolean
}

abstract class ContainerClass {

    // Own properties of GES-1.0.GES.ContainerClass

    static name: string
}

interface ContainerPrivate {
}

class ContainerPrivate {

    // Own properties of GES-1.0.GES.ContainerPrivate

    static name: string
}

interface DiscovererManagerClass {

    // Own fields of GES-1.0.GES.DiscovererManagerClass

    parentClass: GObject.ObjectClass
}

abstract class DiscovererManagerClass {

    // Own properties of GES-1.0.GES.DiscovererManagerClass

    static name: string
}

interface DiscovererManagerPrivate {
}

class DiscovererManagerPrivate {

    // Own properties of GES-1.0.GES.DiscovererManagerPrivate

    static name: string
}

interface EffectAssetClass {

    // Own fields of GES-1.0.GES.EffectAssetClass

    parentClass: TrackElementAssetClass
    gesReserved: any[]
}

abstract class EffectAssetClass {

    // Own properties of GES-1.0.GES.EffectAssetClass

    static name: string
}

interface EffectAssetPrivate {
}

class EffectAssetPrivate {

    // Own properties of GES-1.0.GES.EffectAssetPrivate

    static name: string
}

interface EffectClass {
}

abstract class EffectClass {

    // Own properties of GES-1.0.GES.EffectClass

    static name: string

    // Owm static methods of GES-1.0.GES.EffectClass

    /**
     * Register an element that can change the rate at which media is playing.
     * The property type must be float or double, and must be a factor of the
     * rate, i.e. a value of 2.0 must mean that the media plays twice as fast.
     * Several properties may be registered for a single element type,
     * provided they all contribute to the rate as independent factors. For
     * example, this is true for the "GstPitch::rate" and "GstPitch::tempo"
     * properties. These are already registered by default in GES, along with
     * #videorate:rate for #videorate and #scaletempo:rate for #scaletempo.
     * 
     * If such a rate property becomes a child property of a #GESEffect upon
     * its creation (the element is part of its #GESEffect:bin-description),
     * it will be automatically registered as a time property (see
     * ges_base_effect_register_time_property()) and will have its time
     * translation functions set (see
     * ges_base_effect_set_time_translation_funcs()) to use the overall rate
     * of the rate properties. Note that if an effect contains a rate
     * property as well as a non-rate time property, you should ensure to set
     * the time translation functions to some other methods using
     * ges_base_effect_set_time_translation_funcs().
     * 
     * Note, you can obtain a reference to the GESEffectClass using
     * 
     * ```
     *   GES_EFFECT_CLASS (g_type_class_ref (GES_TYPE_EFFECT));
     * ```
     * @param elementName The #GstElementFactory name of the element that changes the rate
     * @param propertyName The name of the property that changes the rate
     * @returns %TRUE if the rate property was successfully registered. When this method returns %FALSE, a warning is emitted with more information.
     */
    static registerRateProperty(klass: Effect | Function | GObject.GType, elementName: string, propertyName: string): boolean
}

interface EffectClipClass {
}

abstract class EffectClipClass {

    // Own properties of GES-1.0.GES.EffectClipClass

    static name: string
}

interface EffectClipPrivate {
}

class EffectClipPrivate {

    // Own properties of GES-1.0.GES.EffectClipPrivate

    static name: string
}

interface EffectPrivate {
}

class EffectPrivate {

    // Own properties of GES-1.0.GES.EffectPrivate

    static name: string
}

interface ExtractableInterface {

    // Own fields of GES-1.0.GES.ExtractableInterface

    parent: GObject.TypeInterface
    /**
     * The subclass type of #GESAsset that should be created when
     * an asset with the corresponding #GESAsset:extractable-type is
     * requested.
     * @field 
     */
    assetType: GObject.GType
    /**
     * The method to call to check whether a given ID is valid as
     * an asset #GESAsset:id for the given #GESAsset:extractable-type. The
     * returned ID is the actual #GESAsset:id that is set on the asset. The
     * default implementation will simply always return the type name of the
     * #GESAsset:extractable-type, even if the received ID is %NULL. As such,
     * any given ID is considered valid (or is ignored), but only one is
     * actually ever set on an asset, which means the given
     * #GESAsset:extractable-type can only have one associated asset.
     * @field 
     */
    checkId: ExtractableCheckId
    /**
     * Whether an object of this class can have its
     * #GESAsset change over its lifetime. This should be set to %TRUE if one
     * of the object's parameters that is associated with its ID can change
     * after construction, which would require an asset with a new ID. Note
     * that the subclass is required to handle the requesting and setting of
     * the new asset on the object.
     * @field 
     */
    canUpdateAsset: boolean
    setAsset: (self: Extractable, asset: Asset) => void
    setAssetFull: (self: Extractable, asset: Asset) => boolean
    getId: (self: Extractable) => string | null
    getRealExtractableType: (wantedType: GObject.GType, id: string) => GObject.GType
    registerMetas: (self: ExtractableInterface, klass: GObject.ObjectClass, asset: Asset) => boolean
    gesReserved: any[]
}

abstract class ExtractableInterface {

    // Own properties of GES-1.0.GES.ExtractableInterface

    static name: string
}

interface FormatterClass {

    // Own fields of GES-1.0.GES.FormatterClass

    /**
     * the parent class structure
     * @field 
     */
    parentClass: GObject.InitiallyUnownedClass
    /**
     * Whether the URI can be loaded
     * @field 
     */
    canLoadUri: FormatterCanLoadURIMethod
    /**
     * class method to deserialize data from a URI
     * @field 
     */
    loadFromUri: FormatterLoadFromURIMethod
    /**
     * class method to serialize data to a URI
     * @field 
     */
    saveToUri: FormatterSaveToURIMethod
}

/**
 * GES Formatter class. Override the vmethods to implement the formatter functionnality.
 * @record 
 */
abstract class FormatterClass {

    // Own properties of GES-1.0.GES.FormatterClass

    static name: string

    // Owm static methods of GES-1.0.GES.FormatterClass

    static registerMetas(klass: Formatter | Function | GObject.GType, name: string, description: string, extensions: string, caps: string, version: number, rank: Gst.Rank): void
}

interface FormatterPrivate {
}

class FormatterPrivate {

    // Own properties of GES-1.0.GES.FormatterPrivate

    static name: string
}

interface GroupClass {

    // Own fields of GES-1.0.GES.GroupClass

    parentClass: ContainerClass
    gesReserved: any[]
}

abstract class GroupClass {

    // Own properties of GES-1.0.GES.GroupClass

    static name: string
}

interface GroupPrivate {
}

class GroupPrivate {

    // Own properties of GES-1.0.GES.GroupPrivate

    static name: string
}

interface ImageSourceClass {

    // Own fields of GES-1.0.GES.ImageSourceClass

    parentClass: VideoSourceClass
    gesReserved: any[]
}

abstract class ImageSourceClass {

    // Own properties of GES-1.0.GES.ImageSourceClass

    static name: string
}

interface ImageSourcePrivate {
}

class ImageSourcePrivate {

    // Own properties of GES-1.0.GES.ImageSourcePrivate

    static name: string
}

interface LayerClass {

    // Own fields of GES-1.0.GES.LayerClass

    objectAdded: (layer: Layer, object: Clip) => void
    objectRemoved: (layer: Layer, object: Clip) => void
}

/**
 * Subclasses can override the `get_objects` if they can provide a more
 * efficient way of providing the list of contained #GESClip-s.
 * @record 
 */
abstract class LayerClass {

    // Own properties of GES-1.0.GES.LayerClass

    static name: string
}

interface LayerPrivate {
}

class LayerPrivate {

    // Own properties of GES-1.0.GES.LayerPrivate

    static name: string
}

interface MarkerClass {

    // Own fields of GES-1.0.GES.MarkerClass

    parentClass: GObject.ObjectClass
}

abstract class MarkerClass {

    // Own properties of GES-1.0.GES.MarkerClass

    static name: string
}

interface MarkerListClass {

    // Own fields of GES-1.0.GES.MarkerListClass

    parentClass: GObject.ObjectClass
}

abstract class MarkerListClass {

    // Own properties of GES-1.0.GES.MarkerListClass

    static name: string
}

interface MetaContainerInterface {

    // Own fields of GES-1.0.GES.MetaContainerInterface

    parentIface: GObject.TypeInterface
    gesReserved: any[]
}

abstract class MetaContainerInterface {

    // Own properties of GES-1.0.GES.MetaContainerInterface

    static name: string
}

interface MultiFileSourceClass {

    // Own fields of GES-1.0.GES.MultiFileSourceClass

    parentClass: VideoSourceClass
    gesReserved: any[]
}

abstract class MultiFileSourceClass {

    // Own properties of GES-1.0.GES.MultiFileSourceClass

    static name: string
}

interface MultiFileSourcePrivate {
}

class MultiFileSourcePrivate {

    // Own properties of GES-1.0.GES.MultiFileSourcePrivate

    static name: string
}

interface OperationClass {
}

abstract class OperationClass {

    // Own properties of GES-1.0.GES.OperationClass

    static name: string
}

interface OperationClipClass {
}

abstract class OperationClipClass {

    // Own properties of GES-1.0.GES.OperationClipClass

    static name: string
}

interface OperationClipPrivate {
}

class OperationClipPrivate {

    // Own properties of GES-1.0.GES.OperationClipPrivate

    static name: string
}

interface OperationPrivate {
}

class OperationPrivate {

    // Own properties of GES-1.0.GES.OperationPrivate

    static name: string
}

interface OverlayClipClass {

    // Own fields of GES-1.0.GES.OverlayClipClass

    /**
     * parent class
     * @field 
     */
    parentClass: OperationClipClass
}

abstract class OverlayClipClass {

    // Own properties of GES-1.0.GES.OverlayClipClass

    static name: string
}

interface OverlayClipPrivate {
}

class OverlayClipPrivate {

    // Own properties of GES-1.0.GES.OverlayClipPrivate

    static name: string
}

interface PipelineClass {
}

abstract class PipelineClass {

    // Own properties of GES-1.0.GES.PipelineClass

    static name: string
}

interface PipelinePrivate {
}

class PipelinePrivate {

    // Own properties of GES-1.0.GES.PipelinePrivate

    static name: string
}

interface PitiviFormatterClass {
}

abstract class PitiviFormatterClass {

    // Own properties of GES-1.0.GES.PitiviFormatterClass

    static name: string
}

interface PitiviFormatterPrivate {
}

class PitiviFormatterPrivate {

    // Own properties of GES-1.0.GES.PitiviFormatterPrivate

    static name: string
}

interface ProjectClass {

    // Own fields of GES-1.0.GES.ProjectClass

    parentClass: AssetClass
    assetAdded: (self: Project, asset: Asset) => void
    assetLoading: (self: Project, asset: Asset) => void
    assetRemoved: (self: Project, asset: Asset) => void
    missingUri: (self: Project, error: GLib.Error, wrongAsset: Asset) => string | null
    loadingError: (self: Project, error: GLib.Error, id: string | null, extractableType: GObject.GType) => boolean
    loaded: (self: Project, timeline: Timeline) => boolean
    loading: (self: Project, timeline: Timeline) => void
    gesReserved: any[]
}

abstract class ProjectClass {

    // Own properties of GES-1.0.GES.ProjectClass

    static name: string
}

interface ProjectPrivate {
}

class ProjectPrivate {

    // Own properties of GES-1.0.GES.ProjectPrivate

    static name: string
}

interface SourceClass {

    // Own fields of GES-1.0.GES.SourceClass

    selectPad: (source: Source, pad: Gst.Pad) => boolean
    createSource: (source: Source) => Gst.Element
}

abstract class SourceClass {

    // Own properties of GES-1.0.GES.SourceClass

    static name: string
}

interface SourceClipAssetClass {

    // Own fields of GES-1.0.GES.SourceClipAssetClass

    parentClass: ClipAssetClass
}

abstract class SourceClipAssetClass {

    // Own properties of GES-1.0.GES.SourceClipAssetClass

    static name: string
}

interface SourceClipClass {
}

abstract class SourceClipClass {

    // Own properties of GES-1.0.GES.SourceClipClass

    static name: string
}

interface SourceClipPrivate {
}

class SourceClipPrivate {

    // Own properties of GES-1.0.GES.SourceClipPrivate

    static name: string
}

interface SourcePrivate {
}

class SourcePrivate {

    // Own properties of GES-1.0.GES.SourcePrivate

    static name: string
}

interface TestClipClass {
}

abstract class TestClipClass {

    // Own properties of GES-1.0.GES.TestClipClass

    static name: string
}

interface TestClipPrivate {
}

class TestClipPrivate {

    // Own properties of GES-1.0.GES.TestClipPrivate

    static name: string
}

interface TextOverlayClass {

    // Own fields of GES-1.0.GES.TextOverlayClass

    parentClass: OperationClass
}

abstract class TextOverlayClass {

    // Own properties of GES-1.0.GES.TextOverlayClass

    static name: string
}

interface TextOverlayClipClass {
}

abstract class TextOverlayClipClass {

    // Own properties of GES-1.0.GES.TextOverlayClipClass

    static name: string
}

interface TextOverlayClipPrivate {
}

class TextOverlayClipPrivate {

    // Own properties of GES-1.0.GES.TextOverlayClipPrivate

    static name: string
}

interface TextOverlayPrivate {
}

class TextOverlayPrivate {

    // Own properties of GES-1.0.GES.TextOverlayPrivate

    static name: string
}

interface TimelineClass {

    // Own fields of GES-1.0.GES.TimelineClass

    /**
     * parent class
     * @field 
     */
    parentClass: Gst.BinClass
    trackAdded: (timeline: Timeline, track: Track) => void
    trackRemoved: (timeline: Timeline, track: Track) => void
    layerAdded: (timeline: Timeline, layer: Layer) => void
    layerRemoved: (timeline: Timeline, layer: Layer) => void
    groupAdded: (timeline: Timeline, group: Group) => void
}

abstract class TimelineClass {

    // Own properties of GES-1.0.GES.TimelineClass

    static name: string
}

interface TimelineElementClass {

    // Own fields of GES-1.0.GES.TimelineElementClass

    parentClass: GObject.InitiallyUnownedClass
    setParent: (self: TimelineElement, parent: TimelineElement) => boolean
    setStart: (self: TimelineElement, start: Gst.ClockTime) => boolean
    setInpoint: (self: TimelineElement, inpoint: Gst.ClockTime) => boolean
    setDuration: (self: TimelineElement, duration: Gst.ClockTime) => boolean
    setMaxDuration: (self: TimelineElement, maxduration: Gst.ClockTime) => boolean
    setPriority: (self: TimelineElement, priority: number) => boolean
    ripple: (self: TimelineElement, start: number) => boolean
    rippleEnd: (self: TimelineElement, end: number) => boolean
    rollStart: (self: TimelineElement, start: number) => boolean
    rollEnd: (self: TimelineElement, end: number) => boolean
    trim: (self: TimelineElement, start: number) => boolean
    deepCopy: (self: TimelineElement, copy: TimelineElement) => void
    lookupChild: (self: TimelineElement, propName: string) => [ /* returnType */ boolean, /* child */ GObject.Object, /* pspec */ GObject.ParamSpec ]
    getTrackTypes: (self: TimelineElement) => TrackType
    setChildProperty: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => void
    getLayerPriority: (self: TimelineElement) => number
    getNaturalFramerate: (self: TimelineElement) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    setChildPropertyFull: (self: TimelineElement, child: GObject.Object, pspec: GObject.ParamSpec, value: any) => boolean
    gesReserved: any[]
}

/**
 * The #GESTimelineElement base class. Subclasses should override at least
 * `set_start` `set_inpoint` `set_duration` `ripple` `ripple_end` `roll_start`
 * `roll_end` and `trim`.
 * 
 * Vmethods in subclasses should apply all the operation they need to but
 * the real method implementation is in charge of setting the proper field,
 * and emitting the notify signal.
 * @record 
 */
abstract class TimelineElementClass {

    // Own properties of GES-1.0.GES.TimelineElementClass

    static name: string
}

interface TimelineElementPrivate {
}

class TimelineElementPrivate {

    // Own properties of GES-1.0.GES.TimelineElementPrivate

    static name: string
}

interface TimelinePrivate {
}

class TimelinePrivate {

    // Own properties of GES-1.0.GES.TimelinePrivate

    static name: string
}

interface TitleClipClass {
}

abstract class TitleClipClass {

    // Own properties of GES-1.0.GES.TitleClipClass

    static name: string
}

interface TitleClipPrivate {
}

class TitleClipPrivate {

    // Own properties of GES-1.0.GES.TitleClipPrivate

    static name: string
}

interface TitleSourceClass {

    // Own fields of GES-1.0.GES.TitleSourceClass

    /**
     * parent class
     * @field 
     */
    parentClass: VideoSourceClass
}

abstract class TitleSourceClass {

    // Own properties of GES-1.0.GES.TitleSourceClass

    static name: string
}

interface TitleSourcePrivate {
}

class TitleSourcePrivate {

    // Own properties of GES-1.0.GES.TitleSourcePrivate

    static name: string
}

interface TrackClass {
}

abstract class TrackClass {

    // Own properties of GES-1.0.GES.TrackClass

    static name: string
}

interface TrackElementAssetClass {

    // Own fields of GES-1.0.GES.TrackElementAssetClass

    parentClass: AssetClass
    getNaturalFramerate: (self: TrackElementAsset) => [ /* returnType */ boolean, /* framerateN */ number, /* framerateD */ number ]
    gesReserved: any[]
}

abstract class TrackElementAssetClass {

    // Own properties of GES-1.0.GES.TrackElementAssetClass

    static name: string
}

interface TrackElementAssetPrivate {
}

class TrackElementAssetPrivate {

    // Own properties of GES-1.0.GES.TrackElementAssetPrivate

    static name: string
}

interface TrackElementClass {

    // Own fields of GES-1.0.GES.TrackElementClass

    nleobjectFactorytype: string
    createGnlObject: (object: TrackElement) => Gst.Element
    createElement: (object: TrackElement) => Gst.Element
    activeChanged: (object: TrackElement, active: boolean) => void
    changed: (object: TrackElement) => void
    lookupChild: (object: TrackElement, propName: string) => [ /* returnType */ boolean, /* element */ Gst.Element, /* pspec */ GObject.ParamSpec ]
}

abstract class TrackElementClass {

    // Own properties of GES-1.0.GES.TrackElementClass

    static name: string
}

interface TrackElementPrivate {
}

class TrackElementPrivate {

    // Own properties of GES-1.0.GES.TrackElementPrivate

    static name: string
}

interface TrackPrivate {
}

class TrackPrivate {

    // Own properties of GES-1.0.GES.TrackPrivate

    static name: string
}

interface TransitionClass {
}

abstract class TransitionClass {

    // Own properties of GES-1.0.GES.TransitionClass

    static name: string
}

interface TransitionClipClass {
}

abstract class TransitionClipClass {

    // Own properties of GES-1.0.GES.TransitionClipClass

    static name: string
}

interface TransitionClipPrivate {
}

class TransitionClipPrivate {

    // Own properties of GES-1.0.GES.TransitionClipPrivate

    static name: string
}

interface TransitionPrivate {
}

class TransitionPrivate {

    // Own properties of GES-1.0.GES.TransitionPrivate

    static name: string
}

interface UriClipAssetClass {

    // Own fields of GES-1.0.GES.UriClipAssetClass

    parentClass: SourceClipAssetClass
    discovered: (discoverer: GstPbutils.Discoverer, info: GstPbutils.DiscovererInfo, err: GLib.Error) => void
}

abstract class UriClipAssetClass {

    // Own properties of GES-1.0.GES.UriClipAssetClass

    static name: string

    // Owm static methods of GES-1.0.GES.UriClipAssetClass

    /**
     * Sets the timeout of #GESUriClipAsset loading
     * @param timeout The timeout to set
     */
    static setTimeout(klass: UriClipAsset | Function | GObject.GType, timeout: Gst.ClockTime): void
}

interface UriClipAssetPrivate {
}

class UriClipAssetPrivate {

    // Own properties of GES-1.0.GES.UriClipAssetPrivate

    static name: string
}

interface UriClipClass {
}

abstract class UriClipClass {

    // Own properties of GES-1.0.GES.UriClipClass

    static name: string
}

interface UriClipPrivate {
}

class UriClipPrivate {

    // Own properties of GES-1.0.GES.UriClipPrivate

    static name: string
}

interface UriSource {
}

class UriSource {

    // Own properties of GES-1.0.GES.UriSource

    static name: string
}

interface UriSourceAssetClass {

    // Own fields of GES-1.0.GES.UriSourceAssetClass

    parentClass: TrackElementAssetClass
    gesReserved: any[]
}

abstract class UriSourceAssetClass {

    // Own properties of GES-1.0.GES.UriSourceAssetClass

    static name: string
}

interface UriSourceAssetPrivate {
}

class UriSourceAssetPrivate {

    // Own properties of GES-1.0.GES.UriSourceAssetPrivate

    static name: string
}

interface VideoSourceClass {
}

abstract class VideoSourceClass {

    // Own properties of GES-1.0.GES.VideoSourceClass

    static name: string
}

interface VideoSourcePrivate {
}

class VideoSourcePrivate {

    // Own properties of GES-1.0.GES.VideoSourcePrivate

    static name: string
}

interface VideoTestSourceClass {

    // Own fields of GES-1.0.GES.VideoTestSourceClass

    parentClass: VideoSourceClass
    gesReserved: any[]
}

abstract class VideoTestSourceClass {

    // Own properties of GES-1.0.GES.VideoTestSourceClass

    static name: string
}

interface VideoTestSourcePrivate {
}

class VideoTestSourcePrivate {

    // Own properties of GES-1.0.GES.VideoTestSourcePrivate

    static name: string
}

interface VideoTrackClass {

    // Own fields of GES-1.0.GES.VideoTrackClass

    parentClass: TrackClass
    gesReserved: any[]
}

abstract class VideoTrackClass {

    // Own properties of GES-1.0.GES.VideoTrackClass

    static name: string
}

interface VideoTrackPrivate {
}

class VideoTrackPrivate {

    // Own properties of GES-1.0.GES.VideoTrackPrivate

    static name: string
}

interface VideoTransitionClass {

    // Own fields of GES-1.0.GES.VideoTransitionClass

    /**
     * parent class
     * @field 
     */
    parentClass: TransitionClass
}

abstract class VideoTransitionClass {

    // Own properties of GES-1.0.GES.VideoTransitionClass

    static name: string
}

interface VideoTransitionPrivate {
}

class VideoTransitionPrivate {

    // Own properties of GES-1.0.GES.VideoTransitionPrivate

    static name: string
}

interface VideoUriSourceClass {
}

abstract class VideoUriSourceClass {

    // Own properties of GES-1.0.GES.VideoUriSourceClass

    static name: string
}

interface VideoUriSourcePrivate {
}

class VideoUriSourcePrivate {

    // Own properties of GES-1.0.GES.VideoUriSourcePrivate

    static name: string
}

interface XmlFormatterClass {

    // Own fields of GES-1.0.GES.XmlFormatterClass

    parent: BaseXmlFormatterClass
    gesReserved: any[]
}

abstract class XmlFormatterClass {

    // Own properties of GES-1.0.GES.XmlFormatterClass

    static name: string
}

interface XmlFormatterPrivate {
}

class XmlFormatterPrivate {

    // Own properties of GES-1.0.GES.XmlFormatterPrivate

    static name: string
}

    type FrameNumber = number
}

export default GES;
// END